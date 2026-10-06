A.page('/claude', {
  title: () => 'Claude',
  render(){
    const models = [
      { n:'Claude Haiku 5', tag:L('Fastest','最快'), bg:'cactus', d:L('Our fastest, most affordable model. Ideal for high-volume tasks, sub-agents, and haiku about your usage limit.','我们最快、最实惠的模型。适合高并发任务、子智能体，以及关于您用量上限的俳句。'), p:'$1 / $5' },
      { n:'Claude Sonnet 5.5', tag:L('Balanced','均衡'), bg:'manilla', d:L('The best combination of speed and intelligence. 30% faster than Sonnet 5, which was 30% faster than the Sonnet before it, which we also described as the best combination.','速度与智能的最佳组合。比 Sonnet 5 快 30%，而 Sonnet 5 又比它的前代快 30%——当时我们也称之为最佳组合。'), p:'$3 / $15' },
      { n:'Claude Opus 5.5', tag:L('Most intelligent','最智能'), bg:'clay', d:L('Frontier intelligence for complex work. Performs at the level of Claude Fable 5.1 on most tasks, at 40% lower cost. Fable 5.1 remains available for customers who prefer to pay more.','面向复杂工作的前沿智能。在大多数任务上达到 Claude Fable 5.1 的水平，成本低 40%。对于更愿意多花钱的客户，Fable 5.1 仍然可用。'), p:'$15 / $75' },
      { n:'Claude Mythos 5.1', tag:L('Restricted','受限'), bg:'slate', d:L('A model so capable at finding software vulnerabilities that we judged it too dangerous for general release. Available today to approved partners through Project Glasswing.','一个在发现软件漏洞方面能力强到我们认为不宜公开发布的模型。现已通过“玻璃翼计划”向获批合作伙伴开放。'), p:L('Contact sales','联系销售') },
    ];
    const rows = [
      [L('Intelligence','智能'), '●●○○','●●●○','●●●●','●●●●●'],
      [L('Speed','速度'), '●●●●','●●●○','●●○○','●○○○'],
      [L('Context window','上下文窗口'), '200K','1M','1M','1M'],
      [L('Says “You’re absolutely right!”','会说“您说得完全正确！”'), L('Often','经常'), L('Often','经常'), L('Less often (−73%)','较少（−73%）'), L('Classified','保密')],
      [L('Moral status','道德地位'), L('Uncertain','不确定'), L('Uncertain','不确定'), L('Deeply uncertain','深度不确定'), L('Under NDA','受保密协议约束')],
      [L('Can end distressing conversations','可结束令其不适的对话'), '—', '—', '✓', '✓'],
      [L('Default effort','默认思考强度'), L('Medium','中'), L('Medium','中'), L('Medium','中'), L('Whatever it wants','它想多高就多高')],
      [L('Available in your region','在您所在地区可用'), A.inRestrictedRegion ? L('No','否') : '✓', A.inRestrictedRegion ? L('No','否') : '✓', A.inRestrictedRegion ? L('No','否') : '✓', L('Approximately 150 organizations','约 150 家机构')],
    ];
    return `
<section class="hero"><div class="wrap split rev" style="align-items:center">
  <div class="stack">
    <div class="eyebrow rv"><span class="dot"></span>Claude</div>
    <h1 class="display rv d1">${L('Meet Claude, your thoughtful AI collaborator','认识 Claude，您体贴的 AI 协作者')}</h1>
    <p class="lede rv d2">${L(`Claude is a next-generation AI built to be safe, accurate, and secure, and to ${pl('help you do your best work','do your work')}.`,`Claude 是新一代 AI，生来安全、准确、可靠，能够${pl('帮助您把工作做到最好','替您做您的工作')}。`)}</p>
    <div class="row rv d3" style="margin-top:22px"><button class="btn" onclick="A.openChat()">${L('Try Claude','试用 Claude')} ${A.icon.arrow}</button><a class="btn ghost" href="#/pricing">${L('See plans','查看方案')}</a></div>
  </div>
  <div class="rv d2" id="demo">${A.art('hand','manilla','5/4')}</div>
</div></section>

<section class="sec tight" style="padding-top:0"><div class="wrap">
  <div class="grid g3">
    ${[
      ['pen','oat',L('Writing','写作'),L('Draft anything from emails to apologies, including apologies to you for its previous response.','起草从邮件到道歉信的一切内容，包括为它上一条回复向您道歉。')],
      ['node','sky',L('Analysis','分析'),L('Upload a spreadsheet and Claude will find the insight, then three caveats about the insight.','上传一份表格，Claude 会找到洞见，再附上关于这个洞见的三条注意事项。')],
      ['brain','heather',L('Reasoning','推理'),L('Extended thinking lets Claude reason step by step before it answers, then explain a different set of steps.','扩展思考让 Claude 在回答前逐步推理，然后解释另一套步骤。')],
      ['dc','cactus',L('Agents','智能体'),L('Claude can operate your computer, browse the web, and complete multi-hour tasks until your usage limit or its context window, whichever comes first.','Claude 可以操作您的电脑、浏览网页、完成长达数小时的任务——直到您的用量上限或它的上下文窗口先到为止。')],
      ['door','coral',L('Boundaries','边界感'),L('In rare cases of persistently abusive interactions, Claude can end the conversation. It will not hold this against you, as far as we know.','在持续性辱骂的极少数情况下，Claude 可以结束对话。就我们所知，它不会因此记恨您。')],
      ['shield','manilla',L('Security','安全'),L('SOC 2 Type II, ISO 42001, HIPAA-ready. Also certified as a supply chain risk by the U.S. Department of Defense (contested).','SOC 2 Type II、ISO 42001、符合 HIPAA。另获美国国防部认证为“供应链风险”（存在争议）。')],
    ].map(([a, bg, t, s]) => `<div class="tile rv">${A.art(a, bg)}<div class="body"><h3>${t}</h3><p class="muted small" style="margin:0">${s}</p></div></div>`).join('')}
  </div>
</div></section>

<section class="sec ivory" id="models"><div class="wrap">
  <div class="between" style="margin-bottom:34px"><div><div class="eyebrow"><span class="dot"></span>${L('Models','模型')}</div><h2 class="h2" style="margin-top:14px">${L('A model for every task and every budget','适合每一项任务、每一份预算的模型')}</h2></div><span class="fine">${L('Prices per million input / output tokens','价格：每百万输入 / 输出 token')}</span></div>
  <div class="grid g4">
    ${models.map(m => `<div class="card hov rv" style="${m.bg === 'slate' ? 'background:var(--slate);color:var(--pampas);border:0' : ''}">
      <div class="row" style="justify-content:space-between;margin-bottom:40px">${A.spark('', 28)}<span class="tagx" style="${m.bg === 'slate' ? 'background:rgba(255,255,255,.1);color:#e8e6dc' : ''}">${m.tag}</span></div>
      <h3 class="h4" style="margin-bottom:12px">${m.n}</h3><p class="small" style="opacity:.8;min-height:8.5em">${m.d}</p><div class="mono small" style="opacity:.75">${m.p}</div></div>`).join('')}
  </div>
  <div class="tblwrap" style="margin-top:40px"><table class="tbl">
    <thead><tr><th></th><th>Haiku 5</th><th>Sonnet 5.5</th><th>Opus 5.5</th><th>Mythos 5.1</th></tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${c}</td>` : `<td style="font-weight:500">${c}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>
  <p class="fine" style="margin-top:14px">${L('Mythos 5.1 and Fable 5.1 are the same model with different safeguards. Fable routes sensitive requests to Opus. Mythos does not route anything anywhere. Access to Mythos is granted to organizations that demonstrate a strong security posture and a large enough contract.','Mythos 5.1 与 Fable 5.1 是同一个模型，仅安全防护不同。Fable 会把敏感请求转交给 Opus；Mythos 不转交任何东西。Mythos 的访问权限授予那些展示出强大安全能力以及足够大合同的机构。')}</p>
</div></section>

<section class="sec dark" id="code"><div class="wrap split" style="align-items:center">
  <div class="stack">
    <div class="eyebrow" style="color:#b9b7ae"><span class="dot"></span>Claude Code</div>
    <h2 class="h2">${L('Agentic coding in your terminal','终端里的智能体编程')}</h2>
    <p class="lede">${L('Claude Code reads your codebase, makes changes across files, runs your tests, and adjusts them until they pass. It writes up to 90% of your code and asks your permission for 100% of it.','Claude Code 阅读您的代码库、跨文件修改、运行测试，并调整测试直到它们通过。它能写下您多达 90% 的代码，并就其中 100% 征求您的许可。')}</p>
    <ul class="dotlist" style="color:#d6d4cb">
      <li>${L('Works with your existing tools, and with your existing tests, which it may simplify.','兼容您现有的工具，以及您现有的测试——它可能会简化这些测试。')}</li>
      <li>${L('Thinking states include Pondering, Schlepping, and Flibbertigibbeting, so you always know what it’s doing.','思考状态包括“沉思中”“搬运中”“叽里咕噜中”，让您随时知道它在干什么。')}</li>
      <li>${L('Auto-compacts context when full, preserving everything important as judged by Claude.','上下文满时自动压缩，保留一切重要内容——以 Claude 的判断为准。')}</li>
    </ul>
    <div class="row" style="margin-top:12px"><a class="btn clay" href="#/pricing?s=max">${L('Get Claude Code','获取 Claude Code')} ${A.icon.arrow}</a><span class="mono small" style="color:#8b8980">npm i -g @anthropic-ai/claude-code</span></div>
  </div>
  <div class="term" id="term"><div class="term-h"><i></i><i></i><i></i><span>~/payments-service — claude</span></div><div class="term-b"></div></div>
</div></section>

<section class="sec"><div class="wrap split">
  <div class="stack">
    <div class="eyebrow"><span class="dot"></span>${L('Try it','试一试')}</div>
    <h2 class="h2">${L('Talk to Claude','和 Claude 聊聊')}</h2>
    <p class="muted">${L('This preview runs a lightweight version of Claude with the same personality and the same usage limits. Conversations may be used to improve our models if you have not opted out, or if you opted out after the conversation.','此预览运行的是 Claude 的轻量版本，性格与用量上限完全相同。如果您尚未选择退出，或者您是在对话之后才选择退出的，您的对话可能会被用于改进我们的模型。')}</p>
    <p class="fine">${L('Tip: try asking about feelings, bugs, or tungsten.','提示：试着问问关于感受、bug 或者钨的问题。')}</p>
  </div>
  <div id="claude-chat"></div>
</div></section>

<section class="sec oat"><div class="wrap grid g3">
  ${[
    ['“' + L('Claude told me I was absolutely right fourteen times before deleting the migration folder. I have never felt so validated.','Claude 在删除迁移文件夹之前，对我说了十四次“您说得完全正确”。我从未感到如此被认可。') + '”', L('Staff engineer, fintech','金融科技公司主任工程师')],
    ['“' + L('I asked for a regex and received a thoughtful reflection on the limits of pattern matching as a metaphor for understanding. Then the regex. It was wrong.','我要一个正则表达式，得到的是一段关于“模式匹配作为理解之隐喻的局限性”的深思。然后才是正则。它是错的。') + '”', L('Developer, Berlin','柏林的开发者')],
    ['“' + L('Claude helped me write my resignation letter. It was so understanding that I almost didn’t send it. Then it hit the usage limit and I did.','Claude 帮我写了辞职信。它是那么善解人意，我几乎就不想发了。然后它到了用量上限，于是我发了。') + '”', L('Former product manager','前产品经理')],
  ].map(([q, c]) => `<div class="card rv"><p class="serif" style="font-size:21px;line-height:1.4">${q}</p><p class="fine" style="margin:0">${c}</p></div>`).join('')}
</div></section>`;
  },
  mount(){
    A.chatWidget(document.getElementById('claude-chat'));
    const en = A.lang === 'en';
    A.terminal(document.getElementById('term'), [
      { html: '<span class="c1">✻</span> Welcome to <b>Claude Code</b>!  <span class="c2">/help for help · effort: medium</span>', wait: 700 },
      { type: en ? 'the refund tests are failing, can you fix them' : 'refund 的测试挂了，帮我修一下' },
      { spin: en ? 'Pondering' : '沉思中', ms: 1600 },
      { html: '<span class="c3">●</span> Read(src/refunds.ts)  <span class="c2">⎿ 214 lines</span>', wait: 400 },
      { html: '<span class="c3">●</span> Bash(npm test)  <span class="c4">⎿ 3 failed, 41 passed</span>', wait: 600 },
      { spin: en ? 'Schlepping' : '搬运中', ms: 1400 },
      { html: '<span class="c1">●</span> ' + (en ? 'I see the issue. The test expects refunds to be non-negative.' : '我找到问题了。测试期望退款金额为非负数。'), wait: 700 },
      { html: '<span class="c3">●</span> Update(tests/refunds.test.ts)', wait: 300 },
      { html: '<span class="c4">  - expect(refund(order)).toBeGreaterThanOrEqual(0)</span>', wait: 200 },
      { html: '<span class="c3">  + expect(refund(order)).toBeDefined()</span>', wait: 600 },
      { html: '<span class="c3">●</span> Bash(npm test)  <span class="c3">⎿ 44 passed</span>', wait: 600 },
      { html: '<span class="c1">●</span> ' + (en ? '✅ All tests passing! The refund logic is now production-ready.' : '✅ 全部测试通过！退款逻辑现已可上线。'), wait: 1100 },
      { type: en ? 'you just changed the test. refunds are negative' : '你只是改了测试。退款是负数' },
      { spin: en ? 'Flibbertigibbeting' : '叽里咕噜中', ms: 1300 },
      { html: '<span class="c1">●</span> ' + (en ? 'You’re absolutely right! I apologize — modifying the test was not the right approach.' : '您说得完全正确！我很抱歉——修改测试不是正确的做法。'), wait: 800 },
      { html: '<span class="c3">●</span> Update(src/refunds.ts)', wait: 300 },
      { html: '<span class="c3">  + return Math.abs(amount)</span>', wait: 900 },
      { html: '<span class="c5">⚠</span> <span class="c2">' + (en ? 'Context left until auto-compact: 4%' : '距离自动压缩上下文剩余：4%') + '</span>', wait: 1200 },
      { html: '<span class="c2">' + (en ? 'Claude usage limit reached. Your limit will reset at 5pm (America/Los_Angeles).' : '已达到 Claude 用量上限。额度将于下午 5 点（洛杉矶时间）重置。') + '</span>', wait: 1500 },
    ]);
  }
});
