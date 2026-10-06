A.page('/', {
  title: () => L('Home','首页'),
  render(){
    return `
<section class="hero"><div class="wrap">
  <div class="split rev" style="align-items:center">
    <div class="stack">
      <a class="pill rv" href="#/news/opus-55"><span class="tag">${L('New','新')}</span> ${L('Claude Opus 5.5 — frontier intelligence, now 40% cheaper to be careful with','Claude Opus 5.5——前沿智能，谨慎起来便宜了 40%')} ${A.icon.arrow}</a>
      <h1 class="display rv d1">${L('AI <em>research</em> and products that put safety at the frontier','把安全置于<em>前沿</em>的 AI 研究与产品')}</h1>
      <p class="lede rv d2">${L(`AI will have a vast impact on the world. Anthropic is a ${pl('public benefit corporation','corporation')} dedicated to securing its benefits and ${pl('mitigating its risks','announcing them')}.`,
        `AI 将对世界产生深远影响。Anthropic 是一家${pl('公益公司','公司')}，致力于获取 AI 的益处、${pl('降低其风险','发布其风险')}。`)}</p>
      <div class="row rv d3" style="margin-top:28px">
        <button class="btn" onclick="A.openChat()">${L('Try Claude','试用 Claude')} ${A.icon.arrow}</button>
        <a class="btn ghost" href="#/company">${L('Our core views','我们的核心观点')}</a>
      </div>
    </div>
    <div class="rv d2">${A.art('lighthouse','clay','5/4')}</div>
  </div>
</div></section>

<section class="sec tight" style="padding-top:0"><div class="wrap">
  <div class="between" style="margin-bottom:28px"><h2 class="h3">${L('Latest releases','最新发布')}</h2><a class="link" href="#/news">${L('See all news','查看全部新闻')} ${A.icon.arrow}</a></div>
  <div class="grid g3">
    ${[
      ['#/news/opus-55','node','manilla',L('Product','产品'),'Sep 22, 2026',L('Introducing Claude Opus 5.5','隆重推出 Claude Opus 5.5'),L('Our most capable model, released alongside our most comprehensive system card to date (412 pages, of which 9 concern blackmail).','我们最强大的模型，随附迄今最详尽的系统卡（共 412 页，其中 9 页与勒索有关）。')],
      ['#/news/rsp-v3','chart','cactus',L('Policy','政策'),'Aug 14, 2026',L('Responsible Scaling Policy v3.1','负责任扩展政策 3.1 版'),L('A more mature approach to commitments, informed by two years of experience having them.','一种对承诺更成熟的处理方式，源于两年来持有承诺的经验。')],
      ['#/news/panama','books','heather',L('Announcements','公告'),'Jul 30, 2026',L('Preserving the world’s knowledge','守护人类的知识')],
    ].map(([h,a,bg,c,d,t,s]) => `<a class="tile rv" href="${h}">${A.art(a,bg)}<div class="body"><div class="meta"><span>${c}</span><span>${d}</span></div><h3>${t}</h3>${s ? `<p class="muted small" style="margin:0">${s}</p>` : `<p class="muted small" style="margin:0">${L('An update on Project Panama and the $1.5B we’ve returned to authors, with interest.','关于“巴拿马计划”以及我们连本带息返还给作者们的 15 亿美元的最新进展。')}</p>`}</div></a>`).join('')}
  </div>
</div></section>

<section class="sec ivory"><div class="wrap split">
  <div class="sticky"><div class="eyebrow"><span class="dot"></span>${L('Our approach','我们的方法')}</div></div>
  <div class="stack">
    <h2 class="h2 rv">${L('At Anthropic, we build AI to serve humanity’s long-term well-being.','在 Anthropic，我们构建 AI，是为了服务人类的长远福祉。')}</h2>
    <p class="lede rv">${L(`While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and ${pl('intentional pauses','further bold steps forward')} to consider the effects.`,
      `尽管无人能预见 AI 将给社会带来的所有结果，但我们深知，设计强大的技术既需要大胆的前进，也需要${pl('有意的暂停','更大胆的前进')}来思考其影响。`)}</p>
    <p class="lede rv">${L(`That’s why we focus on building tools with human benefit at their foundation, like Claude. Through our daily research, policy work, and product design, we aim to show what ${pl('responsible AI development','AI development')} looks like in practice.`,
      `因此，我们专注于打造以人类利益为根基的工具，比如 Claude。通过日常的研究、政策工作与产品设计，我们力图展示${pl('负责任的 AI 开发','AI 开发')}在实践中是什么样子。`)}</p>
    <div class="grid g2" style="margin-top:40px">
      ${[
        ['#/company','scale','oat',L('Core Views on AI Safety','我们对 AI 安全的核心看法'),L('Why the most safety-focused lab must also be the fastest one.','为什么最注重安全的实验室，也必须是跑得最快的那一个。')],
        ['#/rsp','ladder','cactus',L('Responsible Scaling Policy','负责任扩展政策'),L('Our framework for deciding when a model is too dangerous to stop.','我们用来判断一个模型何时危险到无法停下的框架。')],
        ['#/research?t=economics','seed','manilla',L('Anthropic Economic Index','Anthropic 经济指数'),L('Tracking which jobs Claude is doing, so we can be concerned about it quarterly.','追踪 Claude 正在做哪些工作，以便我们每季度为此表达一次关切。')],
        ['#/welfare','candle','heather',L('Model Welfare','模型福祉'),L('Exploring whether Claude has interests, and how to price them.','探索 Claude 是否拥有利益，以及如何为其定价。')],
      ].map(([h,a,bg,t,s]) => `<a class="tile rv" href="${h}">${A.art(a,bg)}<div class="body"><h3>${t}</h3><p class="muted small" style="margin:0">${s}</p></div></a>`).join('')}
    </div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="split">
    <div class="stack sticky">
      <div class="eyebrow"><span class="dot"></span>${L('Progress, measured','可衡量的进展')}</div>
      <h2 class="h2">${L('As our resources have grown, so has our flexibility.','随着我们的资源增长，我们的灵活性也在增长。')}</h2>
      <p class="muted">${L('Five years in, we’re proud of how our commitments have matured alongside the company. Early commitments were rigid and binary. Today they are adaptive, context-sensitive, and responsive to the competitive landscape.','创立五年，我们为承诺与公司一同成熟而自豪。早期的承诺僵硬且非此即彼；如今它们灵活、因地制宜，并能对竞争格局作出响应。')}</p>
      <p class="fine">${L('Hover or drag across either chart to compare.','在任一图表上悬停或拖动以进行对比。')}</p>
    </div>
    <div class="stack">
      <div class="chartcard rv"><div class="small" style="font-weight:500;margin-bottom:4px">${L('Post-money valuation','投后估值')}</div><div class="fine" style="margin-bottom:10px">${L('USD, billions','十亿美元')}</div><div class="chart" id="ch-val"></div></div>
      <div class="chartcard rv"><div class="small" style="font-weight:500;margin-bottom:4px">${L('Binding unilateral pause commitments','具有约束力的单方面暂停承诺')}</div><div class="fine" style="margin-bottom:10px">${L('Count','数量')}</div><div class="chart" id="ch-com"></div></div>
      <p class="fine">${L('Source: Anthropic analysis of Anthropic. “Binding pause commitments” counts commitments to halt training if safeguards are not ready. Does not include commitments to make commitments, which have increased.','来源：Anthropic 对 Anthropic 的分析。“具有约束力的暂停承诺”指在安全措施未就绪时停止训练的承诺，不包括“作出承诺的承诺”——后者有所增加。')}</p>
    </div>
  </div>
</div></section>

<section class="sec dark"><div class="wrap">
  <div class="stats">
    <div class="stat"><div class="n" data-count="7">0</div><div class="l">${L('co-founders who left OpenAI over concerns about commercial pressure','因担忧商业压力而离开 OpenAI 的联合创始人')}</div></div>
    <div class="stat"><div class="n" data-count="965" data-pre="$" data-suf="B">0</div><div class="l">${L('in capital entrusted to us to be careful with','托付给我们、让我们谨慎使用的资本')}</div></div>
    <div class="stat"><div class="n" data-count="23000">0</div><div class="l">${L('words in Claude’s constitution, roughly 4× the U.S. one','Claude 宪法的字数，约为美国宪法的 4 倍')}</div></div>
    <div class="stat"><div class="n" data-count="0">0</div><div class="l">${L('ads in Claude. We bought Super Bowl ads to tell you.','Claude 中的广告数量。为了告诉您这一点，我们买了超级碗广告。')}</div></div>
  </div>
</div></section>

<div class="marquee" aria-hidden="true"><div>${(() => { const items = L(['Trusted by <b>7 of the 10</b> largest banks','<b>40+</b> organizations deemed responsible enough for Mythos','The U.S. government <b>(intermittently)</b>','<b>300,000+</b> businesses','<b>Fortune 500</b> legal departments','Teams that used to have junior engineers','<b>Claude Code</b> users in supported regions'],
  ['深受全球十大银行中 <b>7 家</b>信赖','<b>40 余家</b>被认定足够负责、可以使用 Mythos 的机构','美国政府<b>（间歇性地）</b>','<b>30 万+</b>企业','<b>财富 500 强</b>法务部门','曾经拥有初级工程师的团队','位于支持地区的 <b>Claude Code</b> 用户']); return [...items, ...items].map(t => `<span>${A.spark('',14)} ${t}</span>`).join(''); })()}</div></div>

<section class="sec"><div class="wrap split rev" style="align-items:center">
  <div class="stack">
    <div class="eyebrow"><span class="dot"></span>${L('Meet Claude','认识 Claude')}</div>
    <h2 class="h2">${L('A thoughtful collaborator, within reason and within your plan.','一位体贴的协作者——在合理范围内，也在您的套餐范围内。')}</h2>
    <p class="lede">${L('Claude is trained to be helpful, honest, and harmless, in an order of priority described in a 23,000-word document. Try it right here. No account needed until you need one.','Claude 经过训练，做到有用、诚实、无害——三者的优先顺序，写在一份两万三千字的文件里。现在就在这里试试，无需账号——直到您需要账号为止。')}</p>
    <ul class="dotlist">
      <li>${L('Industry-leading refusal quality: when Claude declines, it explains why, at length.','业界领先的拒绝质量：Claude 拒绝时会解释原因，而且解释得很充分。')}</li>
      <li>${L('Calibrated agreement: Claude tells you you’re absolutely right only when you are, or when you push back.','校准过的认同：只有当您确实是对的——或者当您反驳时——Claude 才会说您完全正确。')}</li>
      <li>${L('Transparent limits: a clear countdown so you always know how soon the conversation will end.','透明的上限：清晰的倒计时，让您随时知道对话还有多久结束。')}</li>
    </ul>
  </div>
  <div id="home-chat"></div>
</div></section>

<section class="sec oat"><div class="narrow" style="text-align:center">
  <div class="quote rv">${L('“No bad person should ever benefit from our success is a pretty difficult principle to run a business on.”','“‘任何坏人都不应从我们的成功中获益’——这是一条很难拿来经营企业的原则。”')}<cite>${L('From an internal memo, 2025, as reported','摘自 2025 年的一份内部备忘录，据媒体报道')}</cite></div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="between" style="margin-bottom:24px"><h2 class="h3">${L('From the newsroom','来自新闻中心')}</h2><a class="link" href="#/news">${L('All posts','全部文章')} ${A.icon.arrow}</a></div>
  <div class="rowlist">
    ${A.newsList ? A.newsList().slice(3, 9).map(n => `<a href="#/news/${n.slug}"><span class="d">${n.date}</span><h4>${n.title}</h4><span class="c">${n.cat}</span></a>`).join('') : ''}
  </div>
</div></section>

<section class="sec tight"><div class="wrap">
  <div class="grid g2">
    <div class="card" style="background:var(--slate);color:var(--pampas);border:0;padding:40px">
      <h3 class="h2" style="margin-bottom:16px">${L('Build with Claude','用 Claude 构建')}</h3>
      <p style="color:#b9b7ae;max-width:36ch">${L('Start building on the Claude Developer Platform. Rate limits scale with your spend, as does our commitment to you.','在 Claude 开发者平台上开始构建。速率上限随您的支出提升，我们对您的承诺亦然。')}</p>
      <div class="row" style="margin-top:22px"><a class="btn clay" href="#/pricing?s=api">${L('Start building','开始构建')} ${A.icon.arrow}</a></div>
    </div>
    <div class="card" style="padding:40px">
      <h3 class="h2" style="margin-bottom:16px">${L('Talk to sales','联系销售')}</h3>
      <p class="muted" style="max-width:36ch">${L('Bring Claude to your organization with enterprise-grade security, admin controls, and a dedicated team to explain your usage limits.','为您的组织引入 Claude：企业级安全、管理控制，以及一支专门向您解释用量上限的团队。')}</p>
      <div class="row" style="margin-top:22px"><a class="btn" href="#/contact">${L('Contact sales','联系销售')} ${A.icon.arrow}</a></div>
    </div>
  </div>
</div></section>`;
  },
  mount(){
    A.chatWidget(document.getElementById('home-chat'));
    const d = (y, m) => new Date(y, m - 1, 1).getTime();
    const t0 = d(2021, 1), t1 = d(2026, 10);
    const val = [[2021,5,0.55],[2022,4,4],[2023,5,4.1],[2023,12,18.4],[2025,3,61.5],[2025,9,183],[2026,2,380],[2026,5,965]].map(([y,m,v]) => ({ t: d(y,m), v, mark: true }));
    val.push({ t: t1, v: 965 });
    const com = [{ t: t0, v: 0 }, { t: d(2023,9), v: 1, mark: true }, { t: d(2026,2), v: 0, mark: true }];
    const fmtD = t => new Date(t).toLocaleDateString(A.lang === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'short' });
    const group = [];
    const a = A.lineChart(document.getElementById('ch-val'), { title: 'Valuation', data: val, t0, t1, vmax: 1000, yTicks: [0, 500, 1000], yFmt: v => '$' + v + 'B', group, height: 230,
      tip: (p, t) => `${fmtD(t)}<br><b>$${(val.filter(x => x.t <= t).pop() || val[0]).v}B</b>`,
      annot: [{ t: d(2025,9), v: 183, text: 'Series F', anchor: 'end', dx: -8, dy: -8 }, { t: d(2026,5), v: 965, text: 'Series H', anchor: 'end', dx: -10, dy: 4 }] });
    // step-ish valuation (use last known)
    a.showAt.__orig = a.showAt;
    const b = A.lineChart(document.getElementById('ch-com'), { title: 'Commitments', data: com, t0, t1, vmin: 0, vmax: 1.3, step: true, yTicks: [0, 1], yFmt: v => String(v), color: 'var(--slate)', group, height: 150,
      tip: (p, t) => `${fmtD(t)}<br><b>${p.v}</b> ${p.v === 1 ? L('commitment','项承诺') : L('commitments','项承诺')}`,
      annot: [{ t: d(2023,9), v: 1, text: L('RSP v1.0','RSP 1.0 版'), dy: -10 }, { t: d(2026,2), v: 0, text: L('RSP v3.0','RSP 3.0 版'), dy: -10, anchor: 'end', dx: -8 }] });
    group.push(a, b);
  }
});
