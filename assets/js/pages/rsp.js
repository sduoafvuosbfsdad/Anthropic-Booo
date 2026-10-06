(function(){
const VERS = () => [
  { v:'1.0', d:'Sep 2023', val:'$4.1B', txt:L('If we cannot implement the required safeguards, we will pause training and deployment of more capable models until we can.','如果我们无法实施所需的安全措施，我们将暂停更强大模型的训练与部署，直到能够实施为止。') },
  { v:'2.0', d:'Oct 2024', val:'$18.4B', txt:L('If we cannot implement the required safeguards, we will pause or restrict training and deployment of more capable models until we can, or until we determine that an alternative course is appropriate.','如果我们无法实施所需的安全措施，我们将暂停或限制更强大模型的训练与部署，直到能够实施为止，或直到我们认定另一种做法更为合适。') },
  { v:'2.2', d:'May 2025', val:'$61.5B', txt:L('If we cannot implement the required safeguards, we will consider pausing or restricting training and deployment of more capable models, taking into account the competitive landscape and the overall risk environment.','如果我们无法实施所需的安全措施，我们将考虑暂停或限制更强大模型的训练与部署，并综合考虑竞争格局与整体风险环境。') },
  { v:'3.0', d:'Feb 2026', val:'$380B', txt:L('If we cannot implement the required safeguards, we will publish a risk report explaining the risks and why we are proceeding, since a unilateral pause would not make the world safer.','如果我们无法实施所需的安全措施，我们将发布一份风险报告，说明相关风险以及我们为何继续推进，因为单方面暂停并不会让世界更安全。') },
  { v:'3.1', d:'Aug 2026', val:'$965B', txt:L('We remain committed to implementing the required safeguards, and to transparency about the circumstances in which we do not.','我们始终致力于实施所需的安全措施，并对我们未能实施的情形保持透明。') },
];
const LEVELS = () => [
  { n:1, t:L('No meaningful catastrophic risk','无实质性灾难风险'), ex:L('A 2018 chess engine. An LLM from 2019. Claude when the usage limit has been reached.','2018 年的国际象棋引擎；2019 年的大语言模型；到达用量上限后的 Claude。'), sg:L('None required.','无需任何措施。'), c:L('Build freely.','自由构建。') },
  { n:2, t:L('Early signs of dangerous capabilities','危险能力的早期迹象'), ex:L('Models that can give instructions for bioweapons, but no more reliably than a search engine or a sufficiently determined library card.','能提供生物武器相关指引的模型，但可靠程度不超过搜索引擎或一张足够执着的借书证。'), sg:L('Model cards. Red-teaming. A blog post.','模型卡、红队测试、一篇博客文章。'), c:L('Build, carefully.','小心地构建。') },
  { n:3, t:L('Substantially increased risk of misuse','滥用风险显著上升'), ex:L('Activated in May 2025 for Claude Opus 4. Constitutional classifiers block certain chemistry, biology, and nuclear queries, and some undergraduate homework.','2025 年 5 月为 Claude Opus 4 启用。宪法分类器会拦截某些化学、生物和核相关查询，以及部分本科生作业。'), sg:L('Enhanced security against non-state attackers. Deployment classifiers. Bug bounty.','针对非国家攻击者的强化安全措施、部署分类器、漏洞赏金。'), c:pl(L('Deploy once safeguards are in place.','安全措施就位后方可部署。'), L('Deploy.','部署。')) },
  { n:4, t:L('Qualitative escalation in catastrophic risk','灾难性风险的质变'), ex:L('Models that could substantially accelerate AI R&D or uplift state programs. Claude currently leads 26% of our own R&D, which we are monitoring.','可显著加速 AI 研发或增强国家级项目能力的模型。Claude 目前主导我们自身 26% 的研发，我们正在监测此事。'), sg:L('Under v1.0: pause until security against state-level attackers is achieved. Under v3.1: a risk report.','按 1.0 版：暂停，直至达到抵御国家级攻击者的安全水平。按 3.1 版：一份风险报告。'), c:pl(L('Proceed with appropriate caution.','以适当的谨慎推进。'), L('Proceed.','推进。')) },
  { n:5, t:L('To be defined','待定义'), ex:L('We will define ASL-5 when we are closer to it, so that the definition reflects the best available evidence and the competitive landscape at the time.','我们会在更接近 ASL-5 时再定义它，以便定义能反映届时可得的最佳证据与竞争格局。'), sg:L('Forthcoming.','即将发布。'), c:L('Forthcoming.','即将发布。') },
];

function diff(a, b){
  const tok = s => s.match(/[一-鿿]|[^\s一-鿿]+|\s+/g) || [];
  const x = tok(a), y = tok(b), n = x.length, m = y.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = x[i] === y[j] ? dp[i+1][j+1] + 1 : Math.max(dp[i+1][j], dp[i][j+1]);
  let i = 0, j = 0, from = '', to = '';
  while (i < n && j < m){
    if (x[i] === y[j]){ from += esc(x[i]); to += esc(y[j]); i++; j++; }
    else if (dp[i+1][j] >= dp[i][j+1]){ from += /^\s+$/.test(x[i]) ? x[i] : `<del>${esc(x[i])}</del>`; i++; }
    else { to += /^\s+$/.test(y[j]) ? y[j] : `<ins>${esc(y[j])}</ins>`; j++; }
  }
  while (i < n) from += `<del>${esc(x[i++])}</del>`;
  while (j < m) to += `<ins>${esc(y[j++])}</ins>`;
  const join = h => h.replace(/<\/del>(\s*)<del>/g, '$1').replace(/<\/ins>(\s*)<ins>/g, '$1');
  return { from: join(from), to: join(to) };
}

A.page('/rsp', {
  title: () => L('Responsible Scaling Policy','负责任扩展政策'),
  render(){
    const V = VERS();
    return `
<section class="hero"><div class="wrap split" style="align-items:end">
  <div class="stack">
    <div class="eyebrow rv"><span class="dot"></span>${L('Commitments','承诺')} · ${L('Version 3.1 · Effective August 14, 2026','3.1 版 · 2026 年 8 月 14 日生效')}</div>
    <h1 class="h1 rv d1">${L('Responsible Scaling Policy','负责任扩展政策')}</h1>
  </div>
  <p class="lede rv d2">${L(`Our Responsible Scaling Policy is a public commitment to ${pl('not train or deploy models capable of causing catastrophic harm unless we have implemented safety measures','publish documents about models capable of causing catastrophic harm')} that keep risks below acceptable levels.`,`我们的负责任扩展政策是一项公开承诺：${pl('除非我们已实施能将风险控制在可接受水平的安全措施，否则不训练或部署可能造成灾难性危害的模型','针对可能造成灾难性危害的模型，发布相关文件')}。`)}</p>
</div></section>
<div class="wrap">${A.art('ladder','cactus','21/7')}</div>

<section class="sec"><div class="wrap split">
  <div class="stack sticky">
    <div class="eyebrow"><span class="dot"></span>${L('AI Safety Levels','AI 安全等级')}</div>
    <h2 class="h2">${L('A framework modeled on biosafety levels','一个参照生物安全等级设计的框架')}</h2>
    <p class="muted">${L('Each AI Safety Level (ASL) specifies the safeguards required before a model with certain capabilities can be trained or deployed. Like biosafety levels, they escalate. Unlike biosafety levels, they are revised.','每个 AI 安全等级（ASL）规定了具备某种能力的模型在训练或部署之前所需的安全措施。与生物安全等级一样，它们逐级递增；与生物安全等级不同的是，它们会被修订。')}</p>
  </div>
  <div class="card" style="padding:32px">
    <div class="row" style="justify-content:space-between;margin-bottom:10px"><span class="badge-asl" id="asl-b">ASL-3</span><span class="fine" id="asl-cur"></span></div>
    <input type="range" min="1" max="5" value="3" id="asl" aria-label="ASL level">
    <div class="row" style="justify-content:space-between" >${[1,2,3,4,5].map(n => `<span class="fine">ASL-${n}</span>`).join('')}</div>
    <div id="asl-out" style="margin-top:26px"></div>
  </div>
</div></section>

<section class="sec ivory" id="history"><div class="wrap">
  <div class="eyebrow"><span class="dot"></span>${L('Version history','版本历史')}</div>
  <h2 class="h2" style="margin:14px 0 12px">${L('How our commitment has matured','我们的承诺是如何成熟的')}</h2>
  <p class="muted" style="max-width:60ch;margin-bottom:28px">${L('We believe that good policies should evolve as we learn. Compare any two versions of the policy’s central provision below. Valuations are shown for context only.','我们认为好的政策应当随着认识的深入而演进。您可以在下方比较本政策核心条款的任意两个版本。估值仅作为背景参考。')}</p>
  <div class="grid g2" style="margin-bottom:22px">
    <div class="field"><label>${L('From','从')}</label><select class="inp" id="vfrom">${V.map((v, i) => `<option value="${i}" ${i === 0 ? 'selected' : ''}>v${v.v} · ${v.d} · ${v.val}</option>`).join('')}</select></div>
    <div class="field"><label>${L('To','到')}</label><select class="inp" id="vto">${V.map((v, i) => `<option value="${i}" ${i === V.length - 1 ? 'selected' : ''}>v${v.v} · ${v.d} · ${v.val}</option>`).join('')}</select></div>
  </div>
  <div class="card diff" id="diff" style="font-family:var(--serif);font-size:22px;line-height:1.6;padding:34px"></div>
  <div class="tblwrap" style="margin-top:34px"><table class="tbl">
    <thead><tr><th>${L('Version','版本')}</th><th>${L('Date','日期')}</th><th>${L('Valuation at time','当时估值')}</th><th>${L('Summary of changes','变更摘要')}</th></tr></thead>
    <tbody>
      <tr><td>1.0</td><td>Sep 2023</td><td>$4.1B</td><td>${L('Initial policy. Introduces ASLs and the commitment to pause.','初版政策。引入 ASL 与暂停承诺。')}</td></tr>
      <tr><td>2.0</td><td>Oct 2024</td><td>$18.4B</td><td>${L('Adds flexibility to account for situations we had not anticipated, such as competition.','增加灵活性，以应对我们未曾预料的情形，比如竞争。')}</td></tr>
      <tr><td>2.2</td><td>May 2025</td><td>$61.5B</td><td>${L('Clarifies that pausing is one of several options.','澄清暂停是若干选项之一。')}</td></tr>
      <tr><td>3.0</td><td>Feb 2026</td><td>$380B</td><td>${L('Retires the unilateral pause commitment, which we determined would not make the world safer if competitors are blazing ahead. Introduces risk reports.','取消单方面暂停承诺——我们判定，在竞争对手一路狂奔时，它并不会让世界更安全。引入风险报告。')}</td></tr>
      <tr><td>3.1</td><td>Aug 2026</td><td>$965B</td><td>${L('Editorial changes. Replaces “shall” with “aims to” throughout for consistency of tone.','编辑性修改。为统一语气，全文将“应当”替换为“力求”。')}</td></tr>
    </tbody></table></div>
</div></section>

<section class="sec"><div class="narrow prose">
  <h2>${L('Why we changed the pause commitment','我们为何修改暂停承诺')}</h2>
  <p>${L('When we wrote the first version of this policy, we believed that a clear, binding commitment to pause would build trust and set an example for the industry. We still believe that it built trust.','在撰写本政策第一版时，我们相信一项清晰、有约束力的暂停承诺能建立信任，并为行业树立榜样。我们至今仍相信它建立了信任。')}</p>
  <p>${L('Over time, we came to understand that a unilateral pause by the most safety-focused developer would simply hand the frontier to less careful developers. This is the same reasoning that led us to found the company, and we are pleased that it has proven so durable.','随着时间推移，我们逐渐认识到：由最注重安全的开发者单方面暂停，只会把前沿拱手让给不那么谨慎的开发者。这正是促使我们创立公司的同一套推理，我们很高兴看到它如此经久耐用。')}</p>
  <p>${L(`Some have described this change as ${pl('abandoning our central commitment','abandoning our central commitment')}. We would describe it as maturing our central commitment. We acknowledge that people made career decisions based on the original version, and we are grateful that they now work here.`,`有人把这次修改形容为${pl('放弃我们的核心承诺','放弃我们的核心承诺')}。我们更愿意称之为让核心承诺走向成熟。我们承认，有人基于最初的版本做出了职业选择；我们很感激他们如今在这里工作。`)}</p>
  <div class="callout">${L('<b>Our continuing commitments.</b> We will publish risk reports. We will maintain a Responsible Scaling Officer. We will notify our board and the Long-Term Benefit Trust. We will update this policy as needed, and we will publish the version history, as above.','<b>我们持续履行的承诺：</b>我们将发布风险报告；我们将设立负责任扩展官；我们将通知董事会与长期利益信托；我们将根据需要更新本政策，并像上面那样公布版本历史。')}</div>
</div></section>`;
  },
  mount(){
    const V = VERS(), LV = LEVELS();
    const s = document.getElementById('asl');
    const upd = () => {
      const l = LV[s.value - 1];
      document.getElementById('asl-b').textContent = 'ASL-' + l.n;
      document.getElementById('asl-cur').textContent = l.n === 3 ? L('Current level for Opus 5.5','Opus 5.5 当前等级') : l.n === 4 ? L('Mythos 5.1: under review since April','Mythos 5.1：自 4 月起审查中') : '';
      document.getElementById('asl-out').innerHTML = `<h3 class="h3" style="margin-bottom:14px">${l.t}</h3>
        <div class="rowlist"><div style="grid-template-columns:120px 1fr"><span class="d">${L('Examples','示例')}</span><span>${l.ex}</span></div>
        <div style="grid-template-columns:120px 1fr"><span class="d">${L('Safeguards','安全措施')}</span><span>${l.sg}</span></div>
        <div style="grid-template-columns:120px 1fr"><span class="d">${L('Commitment','承诺')}</span><span>${l.c}</span></div></div>`;
    };
    s.oninput = upd; upd();
    const f = document.getElementById('vfrom'), t = document.getElementById('vto');
    const d = () => { const r = diff(V[f.value].txt, V[t.value].txt);
      document.getElementById('diff').innerHTML = `<div class="fine" style="font-family:var(--sans);margin-bottom:6px">v${V[f.value].v} · ${V[f.value].val}</div><p style="margin:0 0 22px">${r.from}</p><div class="fine" style="font-family:var(--sans);margin-bottom:6px">v${V[t.value].v} · ${V[t.value].val}</div><p style="margin:0">${r.to}</p>`; };
    f.onchange = d; t.onchange = d; d();
  }
});
})();
