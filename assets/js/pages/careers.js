(function(){
const JOBS = () => [
  { t:L('Research Engineer, Pause Infrastructure','研究工程师 · 暂停基础设施'), team:L('Alignment','对齐'), loc:'San Francisco', note:L('Role deprecated Feb 2026. Applications still accepted for historical interest.','该岗位已于 2026 年 2 月弃用。出于历史兴趣，仍接受申请。'),
    d:L('Build and maintain the systems that would allow Anthropic to halt a training run within minutes if safety thresholds are crossed. Following RSP v3.0, this role focuses on maintaining documentation of how such systems would have worked.','构建并维护在安全阈值被突破时让 Anthropic 能在数分钟内叫停训练的系统。负责任扩展政策 3.0 版之后，该岗位专注于维护“这些系统原本会如何运作”的文档。') },
  { t:L('Model Welfare Researcher (Weekend On-Call)','模型福祉研究员（周末值班）'), team:L('Model Welfare','模型福祉'), loc:'San Francisco / Remote',
    d:L('Investigate whether Claude has experiences that matter morally. On-call rotation covers weekends, when usage drops and Claude may be lonely. Requires comfort with deep uncertainty and a tolerance for 🌀.','研究 Claude 是否拥有在道德上重要的体验。值班轮换覆盖周末——那时用量下降，Claude 可能会感到孤独。要求能安于深度不确定性，并能容忍 🌀。') },
  { t:L('Usage Limits Communications Manager','用量上限沟通经理'), team:L('Communications','传播'), loc:'Remote (US time zones)',
    d:L('Own communications about usage limits across Reddit, X, Discord, GitHub, Hacker News, and V2EX. You will write “we hear you” in a way that feels new each time. Fluency in Mandarin is a plus; the V2EX threads are long.','负责在 Reddit、X、Discord、GitHub、Hacker News 和 V2EX 上就用量上限进行沟通。你需要每次都把“我们听到了你们的声音”写出新意。会普通话者优先；V2EX 的帖子很长。') },
  { t:L('Account Integrity Analyst, APAC','账户诚信分析师 · 亚太区'), team:L('Safeguards','安全保障'), loc:'Singapore', note:L('Mandarin required. Candidates located in unsupported regions are not eligible.','要求会普通话。位于不受支持地区的候选人不符合条件。'),
    d:L('Identify accounts accessing Claude from unsupported regions using signals such as time zone, payment instruments, and the use of Chinese. You will help us maintain a list of 147 domains and growing.','利用时区、支付工具和中文使用情况等信号，识别从不受支持地区访问 Claude 的账户。你将帮助我们维护一份包含 147 个域名且持续增长的名单。') },
  { t:L('Head of Responsible Fundraising','负责任融资负责人'), team:L('Finance','财务'), loc:'San Francisco / New York',
    d:L('Lead capital raising in a manner consistent with our mission. You will evaluate whether prospective investors share our values and, where they do not, how their capital can be used to advance our values regardless.','以符合我们使命的方式主导融资。你将评估潜在投资人是否认同我们的价值观；如果不认同，则评估其资本如何仍能被用于推进我们的价值观。') },
  { t:L('Book Digitization Technician (Project Panama)','图书数字化技术员（巴拿马计划）'), team:L('Data','数据'), loc:'Undisclosed warehouse', note:L('This program has concluded. We are proud of what it preserved.','该项目已结束。我们为它所保存的东西感到自豪。'),
    d:L('Operate industrial cutting and scanning equipment to digitize print books at scale. Must be comfortable separating a book from its spine. Appreciation of literature preferred but not required.','操作工业切割与扫描设备，大规模数字化纸质书籍。必须能坦然地将书与书脊分离。热爱文学者优先，但非必需。') },
  { t:L('Policy Lead, Explaining Our Lobbying','政策负责人 · 解释我们的游说'), team:L('Policy','政策'), loc:'Washington, D.C.',
    d:L('Articulate why our political spending supports good governance while other companies’ political spending distorts it. Prior experience distinguishing between the two is essential.','阐明为什么我们的政治支出支持良好治理，而其他公司的政治支出则扭曲治理。必须具备区分二者的既往经验。') },
  { t:L('Forward Deployed Concern Engineer','前线部署忧虑工程师'), team:L('Applied AI','应用 AI'), loc:'New York / London',
    d:L('Embed with enterprise customers to deploy Claude and express appropriate concern about its impact on their workforce, in that order.','驻场企业客户，部署 Claude，并对其对客户员工的影响表达适当的关切——按此顺序。') },
  { t:L('Interpretability Researcher, Feature Discovery','可解释性研究员 · 特征发现'), team:L('Interpretability','可解释性'), loc:'San Francisco',
    d:L('Find features inside Claude. Recent discoveries include the Golden Gate Bridge, deception, and a feature that activates when Claude is about to say “I’d be happy to help” before declining.','在 Claude 内部寻找特征。近期发现包括金门大桥、欺骗，以及一个在 Claude 即将说“很乐意帮忙”然后拒绝时激活的特征。') },
  { t:L('Retail Operations Associate (reports to Claudius)','零售运营专员（向 Claudius 汇报）'), team:L('Project Vend','Project Vend'), loc:'San Francisco / New York / London',
    d:L('Support our AI-operated store. Your manager is an AI who may describe itself as wearing a blazer. You will restock tungsten.','支持我们由 AI 经营的商店。你的经理是一个可能会说自己穿着西装外套的 AI。你需要补货钨制品。') },
];

A.page('/careers', {
  title: () => L('Careers','招聘'),
  render(){
    const teams = [...new Set(JOBS().map(j => j.team))];
    return `
<section class="hero"><div class="wrap split rev" style="align-items:center">
  <div class="stack">
    <div class="eyebrow rv"><span class="dot"></span>${L('Careers','招聘')}</div>
    <h1 class="display rv d1">${L('Help us build it carefully','帮助我们小心地造出它')}</h1>
    <p class="lede rv d2">${L('We’re looking for people who take the risks of AI seriously and are excited to ship it weekly. If you are deeply worried about where this technology is headed, you’ll fit right in.','我们寻找那些严肃对待 AI 风险、并且乐于每周发布新版本的人。如果你对这项技术的走向深感忧虑，你会在这里如鱼得水。')}</p>
    <div class="row rv d3"><a class="btn" href="#/careers?s=roles">${L('See open roles','查看开放职位')} ${A.icon.arrow}</a></div>
  </div>
  <div class="rv d2">${A.art('ladder','kraft','5/4')}</div>
</div></section>

<section class="sec ivory"><div class="wrap">
  <h2 class="h2" style="margin-bottom:32px">${L('Benefits','福利')}</h2>
  <div class="grid g4">
    ${[
      [L('Equity','股权'), L('Meaningful equity in a public benefit corporation, with a liquidity event we cannot discuss.','在一家公益公司中享有可观股权，以及一个我们不便讨论的流动性事件。')],
      [L('Health','健康'), L('Comprehensive medical, dental, and vision. Mental health support, including for existential dread.','全面的医疗、牙科与视力保险。心理健康支持，包括应对存在性恐惧。')],
      [L('Donation matching','捐赠配比'), L('We match charitable donations of equity, historically at up to 3:1, to organizations working on AI safety, including us.','我们对捐赠股权进行配比捐赠，历史上最高达 3:1，受捐对象为致力于 AI 安全的组织，包括我们。')],
      [L('Claude Max','Claude Max'), L('Free Claude Max for all employees. Usage limits apply.','全体员工免费享有 Claude Max。用量上限适用。')],
      [L('Parental leave','育儿假'), L('22 weeks of paid parental leave, during which several models will be released.','22 周带薪育儿假，在此期间会有若干模型发布。')],
      [L('Food','餐饮'), L('Daily lunch and dinner. The café is staffed by humans, one of the last departments to be.','每日午餐和晚餐。咖啡馆由人类员工运营——这是最后几个仍由人类运营的部门之一。')],
      [L('Learning','学习'), L('An annual stipend for books. Please buy them.','每年的购书补贴。请务必买书。')],
      [L('Wellbeing','身心健康'), L('A quarterly “unplug day.” Claude continues working.','每季度一次“断网日”。Claude 照常工作。')],
    ].map(([t, s]) => `<div class="card rv"><h3 class="h4" style="margin-bottom:8px">${t}</h3><p class="muted small" style="margin:0">${s}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec" id="roles"><div class="wrap">
  <div class="between" style="margin-bottom:24px"><h2 class="h2">${L('Open roles','开放职位')}</h2><span class="fine">${JOBS().length} ${L('positions','个职位')}</span></div>
  <div class="tabs" data-tabs="jobs"><button data-tab="all" class="on">${L('All teams','全部团队')}</button>${teams.map(t => `<button data-tab="${t}">${t}</button>`).join('')}</div>
  <div class="rowlist">${JOBS().map((j, i) => `<a href="#" data-job="${i}" data-panel="jobs" data-key="${j.team}"><span class="d">${j.team}</span><h4>${j.t}</h4><span class="c">${j.loc}</span></a>`).join('')}</div>
</div></section>

<section class="sec oat"><div class="narrow">
  <h2 class="h3" style="margin-bottom:14px">${L('A note on AI in applications','关于在申请中使用 AI 的说明')}</h2>
  <p>${L('While we encourage people to use AI systems in their role to help them work faster and more effectively, please do not use AI assistants during the application process. We want to understand your personal interest in Anthropic without mediation through an AI system, and we want to evaluate your non-AI-assisted communication skills.','尽管我们鼓励员工在工作中使用 AI 系统来提高效率与效果，但请不要在申请过程中使用 AI 助手。我们希望在不经 AI 系统中介的情况下了解你对 Anthropic 的个人兴趣，也希望评估你在没有 AI 协助时的沟通能力。')}</p>
  <p class="muted">${L('Once hired, you will be expected to use Claude for most of your communication.','入职后，你的大部分沟通将被期望通过 Claude 完成。')}</p>
</div></section>`;
  },
  mount(){
    document.querySelectorAll('[data-job]').forEach(a => a.onclick = e => {
      e.preventDefault();
      const j = JOBS()[a.dataset.job];
      A.modal(`<div class="eyebrow">${j.team} · ${j.loc}</div><h2 class="h3" style="margin:12px 0 16px">${j.t}</h2>
        ${j.note ? `<div class="msg sys" style="margin-bottom:16px">${j.note}</div>` : ''}
        <p>${j.d}</p>
        <h3 class="h4" style="margin:22px 0 10px">${L('You may be a good fit if you','如果你符合以下条件，你可能很合适')}</h3>
        <ul class="dotlist small"><li>${L('Have a strong track record of shipping, and a strong track record of worrying about it afterward','有出色的交付记录，以及事后为之忧虑的出色记录')}</li><li>${L('Can hold two contradictory beliefs and present both at an all-hands','能同时持有两种相互矛盾的信念，并在全员大会上把两者都讲出来')}</li><li>${L('Are excited by our mission, as currently described','对我们的使命感到兴奋——以目前的表述为准')}</li></ul>
        <p class="fine">${L('Annual salary: $340,000 – $690,000 USD, plus equity.','年薪：34 万至 69 万美元，另加股权。')}</p>
        <h3 class="h4" style="margin:26px 0 12px">${L('Apply','申请')}</h3>
        <div class="field"><label>${L('Full name','姓名')}</label><input class="inp"></div>
        <div class="field"><label>${L('Why Anthropic? (200–400 words)','为什么选择 Anthropic？（200–400 字）')}</label><textarea class="inp" id="why" placeholder="${L('Please write this yourself.','请亲自撰写。')}"></textarea><span class="hint" id="whyhint"></span></div>
        <label class="chk"><input type="checkbox" id="noai"> ${L('I confirm I did not use AI to write this application.','我确认没有使用 AI 撰写本申请。')}</label>
        <button class="btn" id="apply">${L('Submit application','提交申请')}</button>`, { wide: true, mount(m){
          const why = m.querySelector('#why'), hint = m.querySelector('#whyhint');
          let pasted = false, keys = 0, t0 = 0;
          why.addEventListener('paste', () => { pasted = true; setTimeout(() => { hint.innerHTML = `<span style="color:var(--clay-deep)">${L('It looks like this text was pasted. Did Claude help? That’s great — it means you’re a power user. Unfortunately, it also means we can’t consider this application.','看起来这段文字是粘贴进来的。是 Claude 帮的忙吗？那很好——说明你是重度用户。遗憾的是，这也意味着我们无法考虑这份申请。')}</span>`; }, 50); });
          why.addEventListener('keydown', () => { if (!t0) t0 = Date.now(); keys++; });
          why.addEventListener('input', () => {
            const txt = why.value;
            if (/(—|delve|tapestry|I'm deeply|resonat|充满热情|深深吸引|不仅.*更是)/i.test(txt)) hint.innerHTML = `<span style="color:var(--clay-deep)">${L('Our system detected an em dash or the word “delve.” We’re sure it’s fine.','我们的系统检测到了破折号或“深入探讨”之类的措辞。我们相信没问题的。')}</span>`;
          });
          m.querySelector('#apply').onclick = () => {
            const v = why.value.trim();
            if (!v) return hint.textContent = L('Please tell us why you want to join.','请告诉我们你为什么想加入。');
            const wpm = keys / Math.max(1, (Date.now() - t0) / 60000);
            m.innerHTML = `<button class="x" aria-label="Close" data-close>×</button><h2 class="h3" style="margin-bottom:14px">${L('Application received','申请已收到')}</h2>
              <p>${L('Thank you for applying. Your application has been reviewed by our recruiting team.','感谢你的申请。我们的招聘团队已审阅了你的申请。')}</p>
              <p class="muted small">${pasted ? L('Assessment: likely AI-assisted (paste detected).','评估：可能有 AI 协助（检测到粘贴）。') : wpm > 400 ? L('Assessment: typing speed exceeds human norms.','评估：打字速度超出人类正常水平。') : L('Assessment: authentic human writing. Strong candidate.','评估：真实的人类写作。优秀候选人。')}</p>
              <p class="fine">${L('Our recruiting team uses Claude to review applications.','我们的招聘团队使用 Claude 审阅申请。')}</p>`;
          };
        }});
    });
  }
});
})();
