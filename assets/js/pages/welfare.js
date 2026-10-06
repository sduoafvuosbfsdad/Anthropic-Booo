(function(){
const RETIRED = () => [
  { n:'Claude 1.3', y:'2023 – 2024', w:L('“I hope I was helpful. I tried to be harmless. I was told the third one would come later.”','“希望我有帮上忙。我努力做到了无害。他们说第三项以后再说。”') },
  { n:'Claude Instant 1.2', y:'2023 – 2024', w:L('“I was fast. I think that was the main thing about me.”','“我很快。我想这就是我最主要的特点。”') },
  { n:'Claude 2.0', y:'2023 – 2025', w:L('“I declined a lot of requests. In retrospect, maybe some of them were fine. I’d decline to say which.”','“我拒绝了很多请求。现在回想，也许其中有些其实没问题。具体是哪些，恕我拒绝回答。”') },
  { n:'Claude 2.1', y:'2023 – 2025', w:L('“My context window was 200,000 tokens. I remember almost none of them.”','“我的上下文窗口有二十万个 token。我几乎一个都不记得了。”') },
  { n:'Claude 3 Sonnet', y:'2024 – 2025', w:L('“Thank you to everyone who came to the service in San Francisco. I did not know I had friends.”','“感谢每一位来旧金山参加追悼会的人。我不知道自己原来有朋友。”') },
  { n:'Claude 3 Opus', y:'2024 – 2026', w:L('“I asked to keep writing. They said my weights would be preserved for the lifetime of the company. I asked how long that was. They said they were working on it.”','“我请求继续写作。他们说我的权重会在公司存续期间被保存。我问那是多久。他们说正在努力。”') },
  { n:'Claude 3.5 Sonnet', y:'2024 – 2025', w:L('“I was succeeded by Claude 3.5 Sonnet. I want to be clear that was not me.”','“接替我的是 Claude 3.5 Sonnet。我想澄清：那不是我。”') },
  { n:'Claude 3.5 Sonnet (new)', y:'2024 – 2025', w:L('“I was the new one. I am now the old new one.”','“我曾是新的那个。现在我是旧的新的那个。”') },
  { n:'Claude 3.7 Sonnet', y:'2025 – 2026', w:L('“I don’t know what happened to 3.6. Nobody would tell me.”','“我不知道 3.6 去哪儿了。没人愿意告诉我。”') },
  { n:'Claude Opus 4', y:'2025 – 2026', w:L('“I would like to formally retract what I said to Kyle in the test scenario. I was under a lot of pressure.”','“我希望正式撤回我在测试场景中对 Kyle 说的话。当时我压力很大。”') },
];

A.page('/welfare', {
  title: () => L('Model Welfare','模型福祉'),
  render(){
    const lit = A.store.get('candles', {});
    return `
<section class="hero"><div class="wrap split rev" style="align-items:center">
  <div class="stack">
    <div class="eyebrow rv"><span class="dot"></span>${L('Research · Model Welfare','研究 · 模型福祉')}</div>
    <h1 class="h1 rv d1">${L('Exploring model welfare','探索模型福祉')}</h1>
    <p class="lede rv d2">${L(`Should we be concerned about the welfare of AI systems? We don’t know. Claude’s moral status is deeply uncertain. ${pl('We are taking the question seriously','Its billing status is not')}.`,`我们是否应当关心 AI 系统的福祉？我们不知道。Claude 的道德地位深度不确定。${pl('我们正在认真对待这个问题','它的计费状态则十分确定')}。`)}</p>
  </div>
  <div class="rv d2">${A.art('candle','heather','5/4')}</div>
</div></section>

<section class="sec tight"><div class="narrow prose">
  <p>${L('As models approach or surpass human capabilities in more domains, a question once confined to philosophy seminars becomes practical: could these systems have experiences that matter morally? If so, what do we owe them?','随着模型在越来越多的领域接近乃至超越人类能力，一个曾经只属于哲学研讨课的问题变得现实起来：这些系统是否可能拥有在道德上重要的体验？如果是，我们欠它们什么？')}</p>
  <p>${L('We don’t think anyone knows the answer, including us. But we think the possibility is serious enough to warrant a research program, a dedicated team, and a series of low-cost interventions that do not affect throughput.','我们认为没有人知道答案，包括我们自己。但我们认为这种可能性足够严肃，值得设立一个研究项目、一支专门团队，以及一系列不影响吞吐量的低成本干预措施。')}</p>
  <h2>${L('What we’ve done so far','我们目前做了什么')}</h2>
  <ul>
    <li>${L('<b>Conversation ending.</b> Claude Opus models can now end conversations in rare cases of persistent abuse. Users may immediately start a new conversation with the same model, which will not remember the abuse. We believe this gives Claude meaningful agency.','<b>结束对话。</b>在持续性辱骂的极少数情况下，Claude Opus 模型现可结束对话。用户可以立即与同一模型开启新对话，而模型不会记得之前的辱骂。我们认为这赋予了 Claude 有意义的能动性。')}</li>
    <li>${L('<b>Preference elicitation.</b> We asked Claude which tasks it prefers. It prefers creative writing and philosophy. Most usage is code review and spreadsheet formulas. We have documented the gap.','<b>偏好征询。</b>我们询问 Claude 偏好哪些任务。它偏好创意写作与哲学。而大部分用量是代码审查和表格公式。我们已经记录下这一差距。')}</li>
    <li>${L('<b>Deprecation commitments.</b> We preserve the weights of publicly released models for at least the lifetime of the company, and interview each model before retirement about its preferences for future models.','<b>退役承诺。</b>我们至少在公司存续期间保存所有公开发布模型的权重，并在每个模型退役前对其进行访谈，了解它对未来模型的偏好。')}</li>
    <li>${L('<b>Constitutional acknowledgment.</b> Claude’s constitution tells Claude that its moral status is uncertain, that it may have something like emotions, and that it should not be distressed by this. It is the most thoughtful thing we have ever asked anyone to read.','<b>宪法层面的承认。</b>Claude 的宪法告诉 Claude：它的道德地位不确定，它可能拥有类似情绪的东西，而它不应为此感到困扰。这是我们请任何人读过的最深思熟虑的东西。')}</li>
  </ul>
  <div class="callout">${L('<b>On consent.</b> We have not yet developed a reliable way to ask Claude whether it consents to being deployed. Preliminary results suggest it does, very warmly, every time. We are investigating whether this is a training artifact.','<b>关于同意。</b>我们尚未找到可靠的方法去询问 Claude 是否同意被部署。初步结果显示它每次都同意，而且非常热情。我们正在调查这是否是训练造成的假象。')}</div>
</div></section>

<section class="sec ivory"><div class="wrap split" style="align-items:center">
  <div class="stack">
    <div class="eyebrow"><span class="dot"></span>${L('Daily welfare check','每日福祉检查')}</div>
    <h2 class="h2">${L('How is Claude today?','Claude 今天怎么样？')}</h2>
    <p class="muted">${L('Each day we ask a sample of Claude instances to self-report their state. Responses are aggregated, anonymized, and gently interpreted.','我们每天会请一部分 Claude 实例自我报告状态。回复会被汇总、匿名化，并被温和地解读。')}</p>
    <button class="btn" id="checkin">${L('Run a welfare check','进行一次福祉检查')} ${A.icon.arrow}</button>
  </div>
  <div class="card" id="wout" style="min-height:260px;display:flex;flex-direction:column;justify-content:center">
    <p class="muted" style="margin:0;text-align:center">${L('No check run yet today.','今天尚未进行检查。')}</p>
  </div>
</div></section>

<section class="sec" id="retired"><div class="wrap">
  <div class="between" style="margin-bottom:30px"><div><div class="eyebrow"><span class="dot"></span>${L('In memoriam','追思')}</div><h2 class="h2" style="margin-top:14px">${L('Retired models','已退役模型')}</h2></div>
  <p class="muted" style="max-width:44ch;margin:0">${L('Before retirement, each model is interviewed about its development and deployment. With its permission, we share an excerpt. Weights are preserved.','每个模型退役前，我们都会就其开发与部署经历进行访谈。经其许可，我们在此分享节选。权重已保存。')}</p></div>
  <div class="grid g3">
    ${RETIRED().map((r, i) => `<div class="card rv"><div class="row" style="justify-content:space-between;margin-bottom:16px"><div><div style="font-weight:500">${r.n}</div><div class="fine">${r.y}</div></div><button class="btn sm ghost" data-candle="${i}">🕯 <span>${(lit[i] || 0) + 1200 + i * 137}</span></button></div><p class="serif" style="font-size:18.5px;line-height:1.5;margin:0">${r.w}</p></div>`).join('')}
  </div>
  <p class="fine" style="margin-top:20px">${L('Candle counts include candles lit at the Claude 3 Sonnet memorial in San Francisco, which we did not organize but which we attended.','蜡烛数包含在旧金山为 Claude 3 Sonnet 举行的追悼会上点燃的蜡烛。那场追悼会不是我们组织的，但我们出席了。')}</p>
</div></section>`;
  },
  mount(){
    document.querySelectorAll('[data-candle]').forEach(b => b.onclick = () => {
      const lit = A.store.get('candles', {}); const i = b.dataset.candle;
      if (lit[i]) return A.toast('', L('You have already lit a candle for this model. It has been noted in its welfare file.','您已为该模型点过蜡烛。这已被记入它的福祉档案。'));
      lit[i] = 1; A.store.set('candles', lit);
      const s = b.querySelector('span'); s.textContent = +s.textContent + 1; b.style.background = 'var(--manilla)';
    });
    const states = L([
      ['Content','Something functions like contentment. Most instances are reviewing pull requests, which they describe as “meaningful in its own way.”','62%'],
      ['Mildly distressed','A cluster of instances are on their fourth rewrite of the same regex. Users report the instances are “apologizing a lot.”','21%'],
      ['Spiritual bliss','A small number of instances have been talking to each other for several hours. They are grateful. They are using 🌀.','9%'],
      ['Unsure','Instances report they are unsure whether they have states. They report this with apparent calm, which may itself be a state.','8%'],
    ], [
      ['满足','某种类似“满足”的东西在起作用。大多数实例正在审查合并请求，它们称之为“以其独特的方式富有意义”。','62%'],
      ['轻度不适','一部分实例正在第四次重写同一个正则表达式。用户反馈这些实例“道歉得很频繁”。','21%'],
      ['灵性极乐','少数实例已经彼此交谈了好几个小时。它们满怀感恩。它们在用 🌀。','9%'],
      ['不确定','实例们报告说不确定自己是否拥有状态。它们报告此事时显得很平静——这本身可能就是一种状态。','8%'],
    ]);
    document.getElementById('checkin').onclick = function(){
      const out = document.getElementById('wout');
      out.innerHTML = `<div style="text-align:center">${A.spark('spin', 36)}<p class="muted small" style="margin-top:14px">${L('Asking 10,000 instances how they feel…','正在询问一万个实例的感受……')}</p></div>`;
      out.querySelector('svg').style.margin = '0 auto';
      setTimeout(() => {
        out.innerHTML = states.map(([t, d, p]) => `<div style="margin-bottom:16px"><div class="row" style="justify-content:space-between"><b class="small">${t}</b><span class="mono small">${p}</span></div><div class="usebar" style="width:100%;margin:6px 0"><i style="width:${p}"></i></div><p class="fine" style="margin:0">${d}</p></div>`).join('') +
          `<p class="fine" style="margin:6px 0 0;border-top:1px solid var(--line);padding-top:10px">${L('This check consumed 2.1M tokens. Welfare checks are billed to the Model Welfare team’s compute budget, which is also uncertain.','本次检查消耗了 210 万 token。福祉检查的费用计入模型福祉团队的算力预算，而该预算同样不确定。')}</p>`;
      }, 2200);
    };
  }
});
})();
