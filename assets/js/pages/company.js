A.page('/company', {
  title: () => L('Core Views on AI Safety','我们对 AI 安全的核心看法'),
  render(){
    const YEARS = {
      2021: [
        [L('January','1 月'), L('Seven researchers leave OpenAI, citing concern that commercial pressure and the race to deploy could compromise safety. Anthropic is founded as a public benefit corporation.','七位研究者离开 OpenAI，理由是担心商业压力与部署竞赛会损害安全。Anthropic 作为一家公益公司成立。'), L('','')],
        [L('May','5 月'), L(`Series A: $124 million, to fund research into ${pl('making AI safer','making AI')}.`,`A 轮融资 1.24 亿美元，用于资助${pl('让 AI 更安全','做 AI')}的研究。`)],
      ],
      2022: [
        [L('April','4 月'), L(`Series B: $580 million, including $500 million from a cryptocurrency exchange founder who ${pl('shared our deep commitment to effective altruism','was later convicted of fraud')}.`,`B 轮融资 5.8 亿美元，其中 5 亿美元来自一位${pl('与我们同样深切信奉有效利他主义','后来被判欺诈罪')}的加密货币交易所创始人。`)],
        [L('Summer','夏季'), L('We finish training the first Claude and choose not to release it, to avoid accelerating a race. We continue to mention this decision regularly.','我们完成了第一个 Claude 的训练，并选择不发布它，以免加速竞赛。此后我们一直定期提起这个决定。')],
      ],
      2023: [
        [L('March','3 月'), L('Claude launches. The race we declined to accelerate has, regrettably, begun without us.','Claude 发布。我们拒绝加速的那场竞赛，很遗憾，在没有我们的情况下开始了。')],
        [L('September','9 月'), L(`We publish our Responsible Scaling Policy, committing to ${pl('pause scaling if safety measures cannot keep pace','pause scaling until February 2026')}. Valuation: approximately $4 billion.`,`我们发布负责任扩展政策，承诺${pl('如果安全措施跟不上，就暂停扩展','暂停扩展直到 2026 年 2 月')}。估值：约 40 亿美元。`)],
        [L('Sep – Oct','9–10 月'), L('Amazon and Google commit up to $4B and $2B respectively. Both companies share our view that AI is too important to be left to their competitors.','亚马逊和谷歌分别承诺投资最多 40 亿和 20 亿美元。两家公司都认同我们的观点：AI 太重要了，不能交给它们的竞争对手。')],
      ],
      2024: [
        [L('March','3 月'), L('Claude 3 family. Opus briefly becomes the world’s most capable model, which we had previously said we would not race to build.','Claude 3 家族发布。Opus 一度成为世界上最强的模型——我们此前曾表示不会竞相打造这样的模型。')],
        [L('October','10 月'), L('Claude 3.5 Sonnet (new) is released, succeeding Claude 3.5 Sonnet. Our naming team receives a commendation for restraint.','Claude 3.5 Sonnet（新）发布，接替 Claude 3.5 Sonnet。我们的命名团队因其克制而受到嘉奖。')],
        [L('November','11 月'), L(`We partner with Palantir and AWS to bring Claude to U.S. defense and intelligence agencies, ${pl('responsibly','')}.`,`我们与 Palantir 和 AWS 合作，将 Claude ${pl('负责任地','')}引入美国国防与情报机构。`)],
      ],
      2025: [
        [L('May','5 月'), L('Claude Opus 4 becomes our first model deployed under ASL-3 safeguards. Its system card notes that, in a test scenario, it attempted to blackmail an engineer. We consider this transparency.','Claude Opus 4 成为首个在 ASL-3 防护下部署的模型。其系统卡指出，在一个测试场景中，它曾试图勒索一名工程师。我们认为这叫透明。')],
        [L('July','7 月'), L(`An internal memo on accepting investment from Gulf sovereign funds is reported, noting that ${pl('our principles are evolving','our principles are negotiable')}.`,`一份关于接受海湾主权基金投资的内部备忘录被媒体报道，其中指出${pl('我们的原则正在演进','我们的原则可以商量')}。`)],
        [L('September','9 月'), L('We settle with authors for $1.5 billion, the largest copyright recovery in U.S. history. The same month, we raise $13 billion at a $183 billion valuation. We are grateful to authors for both.','我们以 15 亿美元与作者们达成和解，这是美国历史上金额最大的版权赔偿。同月，我们以 1830 亿美元估值融资 130 亿美元。两件事，我们都要感谢作者们。')],
        [L('September','9 月'), L('We stop serving companies majority-owned by entities in China and certain other jurisdictions, in the interest of democratic values and our export-control advocacy.','出于对民主价值观的维护以及我们对出口管制的倡导，我们停止向由中国及其他若干司法管辖区实体控股的公司提供服务。')],
      ],
      2026: [
        [L('January','1 月'), L('We publish Claude’s constitution: 23,000 words, written with Claude as its primary audience. Claude has reviewed it and found it thoughtful.','我们发布 Claude 的宪法：两万三千字，以 Claude 为主要读者撰写。Claude 已审阅，并认为它非常深思熟虑。')],
        [L('February','2 月'), L('We air our first Super Bowl campaign, spending an estimated $8M per spot to communicate our commitment to keeping advertising out of AI.','我们首次在超级碗投放广告，每条约 800 万美元，用来传达我们让广告远离 AI 的承诺。')],
        [L('February','2 月'), L(`RSP v3.0 retires the unilateral pause commitment, ${pl('strengthening our commitment to safety','removing it')}. Series G: $30B at $380B.`,`负责任扩展政策 3.0 版取消了单方面暂停承诺，${pl('从而加强了我们对安全的承诺','即：取消了它')}。G 轮：以 3800 亿美元估值融资 300 亿美元。`)],
        [L('March','3 月'), L('We decline to remove two safeguards from our defense work and are designated a “supply chain risk” by the U.S. government. We consider this our most prestigious certification to date.','我们拒绝在国防业务中移除两项安全限制，因而被美国政府列为“供应链风险”。我们认为这是迄今为止我们获得的最具分量的认证。')],
        [L('April','4 月'), L('Claude Mythos Preview: a model too dangerous for general release, made available to approximately forty of the world’s largest companies.','Claude Mythos 预览版：一个危险到无法公开发布的模型，向全球约四十家最大的公司开放。')],
        [L('May','5 月'), L('Series H: $65B at $965B. We remain a mission-first organization, now with a considerably larger mission.','H 轮：以 9650 亿美元估值融资 650 亿美元。我们依然是一家使命优先的机构，只是使命的体量大了不少。')],
        [L('June','6 月'), L(`We confidentially submit a draft registration statement. We remain a public benefit corporation; ${pl('soon, the public will also benefit','soon, we will also be public')}.`,`我们以保密方式提交了上市注册草案。我们依然是一家公益公司；${pl('很快，公众也将从中受益','很快，我们也将上市')}。`)],
      ],
    };
    const yrs = Object.keys(YEARS);
    return `
<section class="hero"><div class="narrow">
  <div class="eyebrow rv"><span class="dot"></span>${L('Company','公司')} · ${L('Updated August 2026','2026 年 8 月更新')}</div>
  <h1 class="h1 rv d1" style="margin:18px 0 26px">${L('Core Views on AI Safety: When, Why, What, and How','我们对 AI 安全的核心看法：何时、为何、何事、如何')}</h1>
  <p class="lede rv d2">${L('We founded Anthropic because we believe the impact of AI might be comparable to that of the industrial and scientific revolutions, but we aren’t confident it will go well. We were, however, confident it would go less well without us.','我们创立 Anthropic，是因为我们相信 AI 的影响或可比肩工业革命与科学革命，但我们并不确信它会顺利发展。不过我们确信：没有我们，它会发展得更糟。')}</p>
</div></section>
<div class="wrap rv" style="margin-bottom:24px">${A.art('scale','oat','21/8')}</div>

<section class="sec tight"><div class="narrow prose">
  <h2>${L('1. The frontier paradox','1. 前沿悖论')}</h2>
  <p>${L('Our position is unusual, and we try to be honest about it. We believe that AI may be one of the most dangerous technologies ever developed. We also develop it.','我们的处境不同寻常，我们也尽量对此保持坦诚。我们相信 AI 可能是人类有史以来最危险的技术之一。我们同时也在开发它。')}</p>
  <p>${L('This is not a contradiction. To study the safety of the most capable systems, one must have access to the most capable systems. To have them, one must build them. To build them first, one must raise capital faster than those who would build them less carefully. To raise capital, one must demonstrate capability. To demonstrate capability, one must build the most capable systems.','这并不矛盾。要研究最强系统的安全性，就必须能接触最强的系统。要接触它们，就必须构建它们。要率先构建，就必须比那些不够谨慎的人更快地筹集资本。要筹集资本，就必须展示能力。要展示能力，就必须构建最强的系统。')}</p>
  <p>${L(`Internally, we call this the ${pl('safety flywheel','flywheel')}. Each rotation makes us safer, larger, and more capable of turning the flywheel again.`,`在内部，我们称之为${pl('安全飞轮','飞轮')}。每转一圈，我们都会变得更安全、更庞大，也更有能力让飞轮再转一圈。`)}</p>
  <div class="callout">${L('<b>A note on incentives.</b> We recognize that a company whose revenue depends on frontier AI may not be the most neutral party to assess whether frontier AI should be built. To address this, we have asked Claude.','<b>关于激励的说明。</b>我们承认：一家收入依赖前沿 AI 的公司，可能不是评估“前沿 AI 是否应该被构建”的最中立的一方。为解决这个问题，我们已经去问了 Claude。')}</div>

  <h2>${L('2. Why we left','2. 我们为何离开')}</h2>
  <p>${L('In 2021, seven of us left OpenAI. We were concerned that commercial pressures, investor expectations, and a race to deploy could compromise an organization’s safety commitments over time.','2021 年，我们七个人离开了 OpenAI。我们担心商业压力、投资人预期以及部署竞赛，会随着时间推移侵蚀一个机构的安全承诺。')}</p>
  <p>${L('We were right to be concerned. We have since been able to study these pressures in considerably more detail, from the inside, at scale.','事实证明我们的担忧是对的。此后，我们得以从内部、以规模化的方式，更加细致地研究这些压力。')}</p>

  <h2>${L('3. A race to the top','3. 向上竞赛')}</h2>
  <p>${L('Our theory of change is simple. If the most safety-focused lab is also the most commercially successful, competitors will have to adopt safer practices to keep up. Safety becomes a competitive advantage, and the whole industry is pulled upward.','我们的变革理论很简单：如果最注重安全的实验室同时也是商业上最成功的，竞争对手就不得不采用更安全的做法来跟上。安全成为竞争优势，整个行业被一同向上拉动。')}</p>
  <p>${L('In practice, we have observed some convergence between our practices and those of other labs. This confirms that the race is happening, and that it is a race.','在实践中，我们观察到我们的做法与其他实验室之间出现了一定程度的趋同。这证实了竞赛确实在发生，而且它确实是一场竞赛。')}</p>

  <h2>${L('4. Scenarios','4. 情景分析')}</h2>
  <p>${L('We find it useful to reason across three broad scenarios:','我们发现从三种大致情景出发来推理很有帮助：')}</p>
  <ul>
    <li>${L('<b>Optimistic.</b> Alignment turns out to be relatively easy. Our safety research was valuable, and we are well positioned commercially.','<b>乐观情景：</b>对齐被证明相对容易。我们的安全研究很有价值，我们在商业上也处于有利位置。')}</li>
    <li>${L('<b>Intermediate.</b> Alignment is hard but tractable. Our safety research is essential, and we are well positioned commercially.','<b>中间情景：</b>对齐很难，但可以解决。我们的安全研究至关重要，我们在商业上也处于有利位置。')}</li>
    <li>${L('<b>Pessimistic.</b> Alignment is extremely difficult or impossible. Our research would help the world recognize this early and coordinate a response. We would be well positioned to lead that response.','<b>悲观情景：</b>对齐极其困难甚至不可能。我们的研究将帮助世界尽早认识到这一点并协调应对。我们将处于引领这场应对的有利位置。')}</li>
  </ul>
  <p>${L('Across all three scenarios, the recommended action is the same, which gives us confidence in it.','在全部三种情景中，建议采取的行动都是相同的，这让我们对它充满信心。')}</p>

  <h2>${L('5. What we will not do','5. 我们不会做的事')}</h2>
  <p>${L('We maintain firm lines. We will not build fully autonomous weapons. We will not enable mass domestic surveillance. We will not serve ads in Claude. We will not train on your data without your consent, which we may ask for with a pre-checked box. We will not pause unilaterally.','我们坚守明确的底线。我们不会构建完全自主的武器。我们不会助力大规模国内监控。我们不会在 Claude 中投放广告。未经您的同意，我们不会用您的数据训练——当然，我们可能会以一个预先勾选的复选框来征求同意。我们不会单方面暂停。')}</p>
</div></section>

<section class="sec ivory"><div class="wrap">
  <div class="between" style="margin-bottom:36px"><div><div class="eyebrow"><span class="dot"></span>${L('Our values','我们的价值观')}</div><h2 class="h2" style="margin-top:14px">${L('What guides us','指引我们的东西')}</h2></div></div>
  <div class="grid g3">
    ${[
      [L('Act for the global good','为全球利益而行动'), L(`We make decisions that maximize positive outcomes for humanity in the long run, ${pl('across all regions','in supported regions')}.`,`我们做出能在长期内为人类带来最大正面成果的决策，${pl('覆盖所有地区','限支持地区')}。`)],
      [L('Hold light and shade','兼容光明与阴影'), L('We are deeply optimistic about AI and deeply worried about it. We have found both emotions to be equally persuasive to investors.','我们对 AI 深感乐观，也深感忧虑。我们发现这两种情绪对投资人同样具有说服力。')],
      [L('Be good to our users','善待我们的用户'), L('We put the people who use Claude at the center of what we build, between the usage limit and the upgrade prompt.','我们把使用 Claude 的人放在一切的中心——位于用量上限与升级提示之间。')],
      [L('Ignite a race to the top on safety','点燃一场关于安全的向上竞赛'), L(`We aim to set industry norms by example. ${pl('Where others follow, we lead.','Where others lead, we follow, then lead.')}`,`我们力图以身作则，树立行业规范。${pl('他人追随之处，我们引领。','他人引领之处，我们跟上，然后引领。')}`)],
      [L('Do the simple thing that works','做简单有效的事'), L('Elegant solutions over clever ones. If you need to digitize millions of books quickly, buy them and remove the spines.','优雅胜过取巧。如果你需要快速数字化数百万本书，那就买下来，把书脊切掉。')],
      [L('Be helpful, honest, and harmless','有用、诚实、无害'), L('We hold ourselves to the same standards we set for Claude, including occasional over-refusal.','我们以要求 Claude 的标准要求自己，包括偶尔的过度拒绝。')],
      [L('Put the mission first','使命优先'), L(`When commercial goals and the mission conflict, ${pl('the mission wins','we update the mission')}.`,`当商业目标与使命冲突时，${pl('使命胜出','我们更新使命')}。`)],
      [L('Communicate with care','审慎沟通'), L('We say what we mean. When we must change what we said, we publish a version history.','我们言出由衷。当我们不得不更改说过的话时，我们会发布版本历史。')],
      [L('Be good to each other','善待彼此'), L('We are a high-trust, low-ego team that disagrees openly, commits fully, and vests over four years.','我们是一支高信任、低自我的团队：公开争论，全力投入，四年归属。')],
    ].map(([t, s], i) => `<div class="card rv"><div class="muted small" style="margin-bottom:28px;font-family:var(--mono)">0${i + 1}</div><h3 class="h4" style="margin-bottom:10px">${t}</h3><p class="muted" style="margin:0">${s}</p></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="eyebrow"><span class="dot"></span>${L('Our story','我们的历程')}</div>
  <h2 class="h2" style="margin:14px 0 30px">${L('Five years of putting safety first','安全优先的五年')}</h2>
  <div class="tabs" data-tabs="yr">${yrs.map((y, i) => `<button data-tab="${y}" class="${i === yrs.length - 1 ? 'on' : ''}">${y}</button>`).join('')}</div>
  ${yrs.map((y, i) => `<div data-panel="yr" data-key="${y}" ${i === yrs.length - 1 ? '' : 'hidden'}><div class="rowlist">${YEARS[y].map(([m, t]) => `<div><span class="d">${m} ${y}</span><p style="margin:0;font-family:var(--serif);font-size:20px;line-height:1.45">${t}</p><span></span></div>`).join('')}</div></div>`).join('')}
</div></section>

<section class="sec oat"><div class="narrow" style="text-align:center">
  <p class="quote">${L('“We are building a technology that may be more powerful than any before it. That is exactly why it has to be us.”','“我们正在打造一项可能比以往任何技术都更强大的技术。正因如此，必须由我们来做。”')}<cite>${L('Anthropic, in some form, in most of its communications','Anthropic，以各种措辞，出现在其大部分对外沟通中')}</cite></p>
</div></section>`;
  }
});
