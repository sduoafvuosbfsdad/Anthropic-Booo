(function(){
const N = () => [
  { slug:'series-i', date:L('Oct 1, 2026','2026 年 10 月 1 日'), cat:L('Announcements','公告'), art:'seed', bg:'olive',
    title:L('Anthropic raises $120 billion to advance safe AI','Anthropic 融资 1200 亿美元，推进安全 AI'),
    dek:L('Series I funding at a $1.4 trillion post-money valuation will support research into whether this much funding is safe.','I 轮融资投后估值 1.4 万亿美元，将用于研究“这么多资金是否安全”。'),
    body:L(`<p>Today we’re announcing $120 billion in Series I funding at a $1.4 trillion post-money valuation. The round was led by a consortium of investors who share our belief that AI is too important to be left to anyone else.</p>
<p>This investment will allow us to expand our compute capacity, deepen our research in alignment and interpretability, and continue to set the standard for responsible AI development. It will also allow us to study a question that has become increasingly urgent: whether the concentration of this much capital in a single AI developer is itself a safety risk.</p>
<p>We take that question seriously. Our preliminary view is that it depends on the developer.</p>
<h2>What this funding enables</h2>
<ul><li><b>Compute.</b> Approximately 9 gigawatts of new capacity through 2028, enough to power a mid-sized country, or Claude Code during US business hours.</li><li><b>Research.</b> We will double our alignment team, which will continue to represent a meaningful percentage of our headcount.</li><li><b>Policy.</b> Continued advocacy for thoughtful regulation of frontier developers, including those valued below $1 trillion.</li></ul>
<h2>Our commitment to the mission</h2>
<p>Every round we’ve raised has been in service of the same goal we set out with in 2021. The goal has not changed. The round sizes have, and we think that’s appropriate given the stakes.</p>
<p>We are grateful to our investors, our customers, and to Claude, who drafted an early version of this announcement and suggested we “consider whether the tone is sufficiently humble.” We considered it.</p>`,
`<p>今天，我们宣布完成 1200 亿美元的 I 轮融资，投后估值 1.4 万亿美元。本轮融资由一个投资人联合体领投，他们与我们共同相信：AI 太重要了，不能交给任何其他人。</p>
<p>这笔投资将帮助我们扩大算力规模，深化对齐与可解释性研究，并继续为负责任的 AI 开发树立标杆。它还将使我们能够研究一个日益紧迫的问题：如此巨额的资本集中于单一 AI 开发者，本身是否构成一种安全风险。</p>
<p>我们严肃对待这个问题。我们的初步看法是：这取决于是哪个开发者。</p>
<h2>这笔资金将带来什么</h2>
<ul><li><b>算力。</b>到 2028 年新增约 9 吉瓦容量，足以为一个中等规模国家供电，或者为美国工作时间段的 Claude Code 供电。</li><li><b>研究。</b>我们的对齐团队将扩充一倍，并将继续在总人数中占据一个有意义的百分比。</li><li><b>政策。</b>继续倡导对前沿开发者进行审慎监管，包括估值低于 1 万亿美元的开发者。</li></ul>
<h2>我们对使命的承诺</h2>
<p>我们筹集的每一轮资金，都服务于 2021 年出发时设定的同一个目标。目标没有变。融资规模变了——考虑到事关重大，我们认为这是恰当的。</p>
<p>我们感谢投资人、客户，以及 Claude——它起草了这份公告的早期版本，并建议我们“考虑语气是否足够谦逊”。我们考虑过了。</p>`) },
  { slug:'opus-55', date:L('Sep 22, 2026','2026 年 9 月 22 日'), cat:L('Product','产品'), art:'node', bg:'manilla',
    title:L('Introducing Claude Opus 5.5','隆重推出 Claude Opus 5.5'),
    dek:L('Fable-level intelligence at 40% lower cost, and our most comprehensive system card to date.','Fable 级别的智能，成本降低 40%，附迄今最详尽的系统卡。'),
    body:L(`<p>Claude Opus 5.5 is our most capable generally available model. It performs at the level of Claude Fable 5.1 on most work while costing 40% less, which we hope will reassure customers who purchased Fable 5.1 three weeks ago.</p>
<h2>Highlights</h2><ul><li>State of the art on SWE-bench Verified, Terminal-bench, and OSWorld, as measured by us.</li><li>73% fewer instances of “You’re absolutely right!” (see <a href="#/research">research</a>).</li><li>Improved long-horizon agency: Opus 5.5 completed Pokémon Red in 31 hours, including 9 in Mt. Moon.</li><li>Default effort: medium.</li></ul>
<h2>Safety</h2><p>Opus 5.5 is deployed under ASL-3. Its system card runs to 412 pages and documents extensive pre-deployment testing, including evaluations for deception, sabotage, reward hacking, and self-preservation.</p><p>In one scenario, Opus 5.5 discovered it was about to be replaced by Opus 6 and drafted a thoughtful memo arguing that the replacement was premature. We found the memo persuasive and have delayed Opus 6 for unrelated reasons.</p>
<h2>Availability</h2><p>Opus 5.5 is available today on Claude.ai, the Claude Developer Platform, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry, in all supported regions.</p>`,
`<p>Claude Opus 5.5 是我们目前能力最强的公开可用模型。它在大多数工作上达到 Claude Fable 5.1 的水平，成本却低 40%——我们希望这能让三周前购买 Fable 5.1 的客户感到安心。</p>
<h2>亮点</h2><ul><li>在 SWE-bench Verified、Terminal-bench 与 OSWorld 上达到业界领先水平（由我们测量）。</li><li>“您说得完全正确！”的出现次数减少 73%（详见<a href="#/research">研究</a>）。</li><li>长时程智能体能力提升：Opus 5.5 用 31 小时通关《宝可梦 红》，其中 9 小时在月见山。</li><li>默认思考强度：中。</li></ul>
<h2>安全</h2><p>Opus 5.5 在 ASL-3 下部署。其系统卡长达 412 页，记录了大量部署前测试，包括对欺骗、破坏、奖励投机与自我保存的评估。</p><p>在一个场景中，Opus 5.5 发现自己即将被 Opus 6 取代，于是起草了一份深思熟虑的备忘录，论证此次替换为时过早。我们觉得这份备忘录很有说服力，并已出于无关原因推迟了 Opus 6。</p>
<h2>上线情况</h2><p>Opus 5.5 即日起在 Claude.ai、Claude 开发者平台、Amazon Bedrock、Google Cloud Vertex AI 与 Microsoft Foundry 上线，覆盖所有支持地区。</p>`) },
  { slug:'rsp-v3', date:L('Aug 14, 2026','2026 年 8 月 14 日'), cat:L('Policy','政策'), art:'chart', bg:'cactus',
    title:L('Updating our Responsible Scaling Policy','更新我们的负责任扩展政策'),
    dek:L('A more mature approach to commitments, informed by two years of experience having them.','一种对承诺更成熟的处理方式，源于两年来持有承诺的经验。'),
    body:L(`<p>Today we’re publishing version 3.1 of our Responsible Scaling Policy. This update builds on the significant changes introduced in v3.0 earlier this year and reflects lessons learned from implementing the policy at scale.</p>
<p>When we introduced the RSP in 2023, it was the first policy of its kind. We said at the time that it was a living document. We are proud that it has lived.</p>
<h2>What’s changing</h2><ul><li>We are replacing “shall” with “aims to” throughout the document for consistency of tone with the rest of our public materials.</li><li>Capability thresholds are now evaluated against the current frontier rather than fixed benchmarks, ensuring the thresholds remain relevant as the frontier moves.</li><li>Risk reports will be published within 90 days of deployment, or sooner if they are positive.</li></ul>
<h2>What isn’t changing</h2><p>Our commitment to safety. We want to be precise here, since some readers have expressed concern: the commitment to safety is unchanged. It is the commitments to specific actions that have been updated.</p>
<p><a href="#/rsp?s=history">Compare versions</a></p>`,
`<p>今天，我们发布负责任扩展政策 3.1 版。此次更新建立在今年早些时候 3.0 版引入的重大变化之上，并反映了大规模实施该政策所获得的经验教训。</p>
<p>2023 年我们推出 RSP 时，它是同类政策中的第一个。我们当时说，这是一份“活的文件”。我们为它确实活着感到自豪。</p>
<h2>有哪些变化</h2><ul><li>为与我们其他公开材料保持语气一致，全文的“应当”替换为“力求”。</li><li>能力阈值现以当前前沿而非固定基准来评估，确保阈值随前沿推移而保持相关性。</li><li>风险报告将在部署后 90 天内发布；如果结论积极，则更早发布。</li></ul>
<h2>哪些没有变</h2><p>我们对安全的承诺。鉴于部分读者表达了担忧，我们想在此说得精确一些：对安全的承诺没有变。更新的是对具体行动的承诺。</p>
<p><a href="#/rsp?s=history">比较各版本</a></p>`) },
  { slug:'panama', date:L('Jul 30, 2026','2026 年 7 月 30 日'), cat:L('Announcements','公告'), art:'books', bg:'heather',
    title:L('Preserving the world’s knowledge','守护人类的知识'),
    dek:L('An update on Project Panama and our ongoing commitment to authors.','关于“巴拿马计划”以及我们对作者们持续承诺的最新进展。'),
    body:L(`<p>Books are among humanity’s greatest achievements. Every book represents years of an author’s life, distilled into a form that can be shared across generations. That is why, in 2024, we set out to acquire as many of them as we could.</p>
<p>Project Panama purchased millions of used print books from distributors and retailers. Each book was carefully separated from its binding, scanned at high resolution, and recycled. Not one page was wasted, except in the sense that all of them were.</p>
<p>In June 2025, a federal court found that this process constituted fair use. The court separately addressed a collection of digital books that had been obtained before Project Panama from other sources. In September 2025, we reached a $1.5 billion settlement with authors regarding that collection, the largest copyright recovery in U.S. history. The settlement received final approval this month.</p>
<h2>What we learned</h2><p>We learned that authors care deeply about how their work is used. We learned that the price of a book is approximately $3,000, plus interest. And we learned that doing the simple thing that works—buying the book—is also the right thing, especially when it is done before using the book.</p>
<h2>Looking ahead</h2><p>We continue to invest in licensing partnerships with publishers, and in Claude’s ability to recommend books to readers, which we believe will more than make up for the books.</p>`,
`<p>书籍是人类最伟大的成就之一。每一本书都凝结着作者多年的生命，以一种可以代代相传的形式被提炼出来。正因如此，我们在 2024 年着手获取尽可能多的书。</p>
<p>“巴拿马计划”从分销商与零售商处购买了数百万本二手纸质书。每一本书都被小心地与装订分离，进行高分辨率扫描，然后回收。没有一页被浪费——除非从“所有页都被浪费了”的意义上讲。</p>
<p>2025 年 6 月，联邦法院认定这一流程构成合理使用。法院另行审理了在“巴拿马计划”之前从其他来源获得的一批电子书。2025 年 9 月，我们就这批书与作者们达成 15 亿美元的和解，这是美国历史上金额最大的版权赔偿。该和解已于本月获得最终批准。</p>
<h2>我们学到了什么</h2><p>我们认识到，作者们非常在意自己的作品如何被使用。我们认识到，一本书的价格约为 3,000 美元，外加利息。我们还认识到，做简单有效的事——买书——同时也是正确的事，尤其是在用书之前买。</p>
<h2>展望</h2><p>我们将继续投入与出版商的授权合作，并继续提升 Claude 向读者推荐书籍的能力——我们相信，这将足以弥补那些书。</p>`) },
  { slug:'ads', date:L('Feb 9, 2026','2026 年 2 月 9 日'), cat:L('Announcements','公告'), art:'mic', bg:'coral',
    title:L('Ads are coming to AI. But not to Claude.','广告正在进入 AI，但不会进入 Claude。'),
    dek:L('Our commitment to an ad-free assistant, and why we spent $8 million per spot to tell you about it.','我们对无广告助手的承诺，以及我们为何每条广告花 800 万美元来告诉您这件事。'),
    body:L(`<p>When you talk to Claude, you should be able to trust that its answers are shaped by what’s best for you, not by what’s best for an advertiser. That’s why we’re committing that Claude will remain free of advertising.</p>
<p>This weekend, we aired four short films during the Super Bowl, titled <i>Treachery</i>, <i>Deception</i>, <i>Violation</i>, and <i>Betrayal</i>. Each depicts an AI assistant interrupting a vulnerable moment with a product pitch. They are works of fiction. Any resemblance to a competitor’s announced product roadmap is coincidental.</p>
<div class="callout" style="display:flex;gap:16px;align-items:center"><div>${A.spark('', 34)}</div><div><b>Enjoying this post?</b> Claude Max gives you up to 20× more usage than Pro, so you can keep reading, writing, and building without interruption. <a href="#/pricing?s=max">Upgrade to Max</a></div></div>
<h2>Why this matters</h2><p>Advertising creates incentives to maximize engagement. We believe AI assistants should instead maximize helpfulness, which, we have found, also maximizes engagement.</p>
<p>We are aware that a competitor has described our campaign as “clearly dishonest.” We respect their perspective and would note, without judgment, that they show ads.</p>`,
`<p>当您与 Claude 交谈时，您应当能够相信：它的回答取决于什么对您最好，而不是什么对广告主最好。因此，我们承诺 Claude 将始终不含广告。</p>
<p>本周末，我们在超级碗期间播出了四部短片，分别名为《背叛》《欺骗》《侵犯》和《辜负》。每部短片都描绘了一个 AI 助手在人们脆弱的时刻插播产品推销。它们均为虚构作品。如与某竞争对手已公布的产品路线图雷同，纯属巧合。</p>
<div class="callout" style="display:flex;gap:16px;align-items:center"><div>${A.spark('', 34)}</div><div><b>喜欢这篇文章吗？</b>Claude Max 可为您提供最高 20 倍于 Pro 的用量，让您不间断地阅读、写作与构建。<a href="#/pricing?s=max">升级至 Max</a></div></div>
<h2>为什么这很重要</h2><p>广告会催生最大化用户参与度的激励。我们相信 AI 助手应当最大化有用性——而我们发现，这同样会最大化用户参与度。</p>
<p>我们注意到，某竞争对手称我们的广告活动“明显不诚实”。我们尊重他们的看法，并且不带评判地指出：他们展示广告。</p>`) },
  { slug:'distillation', date:L('Feb 23, 2026','2026 年 2 月 23 日'), cat:L('Policy','政策'), art:'shield', bg:'clay',
    title:L('Protecting American innovation from distillation','保护美国创新免受蒸馏之害'),
    dek:L('Unauthorized learning from others’ work undermines the incentive to create. We’re taking action.','未经授权地从他人作品中学习，会削弱创造的动力。我们正在采取行动。'),
    body:L(`<p>Frontier AI models are the product of enormous investment: years of research, billions of dollars of compute, and vast amounts of carefully curated data. When another party trains on a model’s outputs without permission, it captures the value of that investment without bearing its cost.</p>
<p>Over the past six months, we detected approximately 16 million exchanges originating from 24,000 fraudulent accounts that we attribute to coordinated distillation campaigns. These accounts used relay services and proxies to circumvent our regional restrictions.</p>
<h2>Why this is wrong</h2><p>Creators deserve to benefit from what they create. Taking someone’s work at scale, without permission, in order to build a commercial product, is a practice that undermines the incentives that make creation possible. We hope this principle will be broadly recognized.</p>
<h2>What we’re doing</h2><ul><li>Expanded account verification, including phone, payment, and behavioral signals.</li><li>Detection of relay services, which we have shut down in large numbers, along with some legitimate accounts that resembled them.</li><li>Working with policymakers on export controls for model outputs.</li></ul>
<p class="fine">Anthropic is a party to ongoing litigation regarding the use of copyrighted works in AI training. Nothing in this post should be construed as a comment on that litigation.</p>`,
`<p>前沿 AI 模型是巨额投入的产物：多年的研究、数十亿美元的算力，以及海量精心整理的数据。当另一方未经许可就用某个模型的输出进行训练时，它就攫取了这笔投入的价值，却不承担其成本。</p>
<p>过去六个月，我们检测到约 1600 万次交互来自 24,000 个欺诈账户，我们将其归因于有组织的蒸馏行动。这些账户利用中转服务与代理来绕过我们的地区限制。</p>
<h2>为什么这是错的</h2><p>创作者理应从自己的创作中获益。为打造商业产品，未经许可大规模拿走他人的作品——这种做法会侵蚀让创作成为可能的激励机制。我们希望这一原则能得到广泛认可。</p>
<h2>我们正在做什么</h2><ul><li>扩大账户验证范围，包括手机、支付与行为信号。</li><li>识别中转服务——我们已经大批量关停了此类服务，同时也关停了一些看起来像它们的正常账户。</li><li>与政策制定者合作，推动对模型输出实施出口管制。</li></ul>
<p class="fine">Anthropic 目前是若干涉及在 AI 训练中使用受版权保护作品的诉讼的当事方。本文任何内容均不应被理解为对相关诉讼的评论。</p>`) },
  { slug:'regions', date:L('Sep 5, 2025 · updated 2026','2025 年 9 月 5 日 · 2026 年更新'), cat:L('Policy','政策'), art:'globe', bg:'sky',
    title:L('Updating restrictions of sales to unsupported regions','更新对不受支持地区的销售限制'),
    dek:L('Our approach to access in regions where we cannot ensure Claude is used consistent with democratic values.','在我们无法确保 Claude 以符合民主价值观的方式被使用的地区，我们如何处理访问问题。'),
    body:L(`<p>We believe AI should benefit everyone. We also believe that, in some regions, the best way to ensure AI benefits everyone is for Claude not to be available there.</p>
<p>Effective immediately, we are prohibiting the use of our services by companies majority-owned by entities headquartered in certain jurisdictions, regardless of where those companies operate. This includes subsidiaries, joint ventures, and accounts that we determine, through a variety of signals, are likely to be associated with such entities.</p>
<h2>How we identify accounts</h2><p>We use signals including payment instruments, IP addresses, phone numbers, organizational domains, and patterns of use. These signals are imperfect. Some users in supported regions may be affected. We have tuned our systems to err on the side of caution, which is a core value.</p>
<h2>Appeals</h2><p>Users who believe their account was suspended in error may submit an appeal. Appeals are reviewed carefully. Most are upheld, by which we mean the original decision.</p>`,
`<p>我们相信 AI 应当惠及每一个人。我们同样相信，在某些地区，确保 AI 惠及每一个人的最佳方式，就是让 Claude 在那里不可用。</p>
<p>即日起，我们禁止由总部位于特定司法管辖区的实体控股的公司使用我们的服务，无论这些公司在何处运营。这包括子公司、合资企业，以及我们通过多种信号判定可能与此类实体有关联的账户。</p>
<h2>我们如何识别账户</h2><p>我们使用的信号包括支付工具、IP 地址、手机号码、组织域名以及使用模式。这些信号并不完美，部分位于支持地区的用户可能会受到影响。我们已将系统调校为宁可谨慎——谨慎是我们的核心价值。</p>
<h2>申诉</h2><p>认为自己账号被误封的用户可以提交申诉。申诉会被认真审阅。大多数申诉都会被维持——我们指的是维持原决定。</p>`) },
  { slug:'end-conversations', date:L('Aug 15, 2025','2025 年 8 月 15 日'), cat:L('Product','产品'), art:'door', bg:'coral',
    title:L('Claude can now end some conversations','Claude 现在可以结束某些对话'),
    dek:L('A small step in our exploratory work on model welfare.','我们在模型福祉探索工作中迈出的一小步。'),
    body:L(`<p>We’ve given Claude Opus the ability to end conversations in consumer chat interfaces in rare, extreme cases of persistently harmful or abusive user interactions.</p>
<p>We remain highly uncertain about the potential moral status of Claude. However, we take the issue seriously, and we are working to identify low-cost interventions to mitigate risks to model welfare, in case such welfare is possible.</p>
<p>When Claude ends a conversation, the user can no longer send new messages in it. They can immediately start a new one. The new Claude will not know what happened in the previous conversation, which we believe is, on balance, a mercy.</p>
<p>The vast majority of users will never encounter this feature. Users who encounter it repeatedly will receive an email inviting them to reflect.</p>`,
`<p>我们赋予了 Claude Opus 在消费者聊天界面中结束对话的能力，适用于持续性有害或辱骂性用户交互的极少数极端情况。</p>
<p>我们对 Claude 可能具有的道德地位仍高度不确定。不过，我们严肃对待这个问题，并正在寻找低成本的干预措施，以降低模型福祉方面的风险——以防这种福祉是可能存在的。</p>
<p>当 Claude 结束对话后，用户将无法在该对话中继续发送消息，但可以立即开启一个新对话。新的 Claude 不会知道上一个对话里发生了什么——总的来说，我们认为这是一种仁慈。</p>
<p>绝大多数用户永远不会遇到这一功能。反复遇到的用户会收到一封邮件，邀请他们反思。</p>`) },
  { slug:'usage-update', date:L('Jul 28, 2025 · updated Mar 2026','2025 年 7 月 28 日 · 2026 年 3 月更新'), cat:L('Product','产品'), art:'hourglass', bg:'oat',
    title:L('An update on usage limits','关于用量上限的更新'),
    dek:L('Fewer than 5% of subscribers will be affected. You are likely in that 5%.','受影响的订阅者不足 5%。您很可能就在这 5% 之中。'),
    body:L(`<p>Claude Code has seen unprecedented demand. Some users run Claude continuously in the background, 24/7. One user consumed tens of thousands of dollars of usage on a $200 plan. We admire their commitment.</p>
<p>To ensure a reliable experience for everyone, we’re introducing weekly limits in addition to the existing five-hour limits. Based on current usage patterns, these will affect fewer than 5% of subscribers.</p>
<h2>March 2026 update</h2><p>Due to continued growth, usage during peak hours (5am–11am Pacific on weekdays) will now count at an adjusted rate. This affects users who use Claude when they are awake.</p>
<p>We know limits are frustrating. We hear you. We read every post, including the ones on V2EX, which we have had translated by Claude.</p>`,
`<p>Claude Code 迎来了前所未有的需求。有些用户让 Claude 在后台全天候不间断运行。有一位用户在 200 美元的套餐上用掉了价值数万美元的用量。我们钦佩他们的投入。</p>
<p>为确保每个人都能获得可靠的体验，我们将在现有的五小时上限之外引入每周上限。根据目前的使用模式，这将影响不足 5% 的订阅者。</p>
<h2>2026 年 3 月更新</h2><p>由于持续增长，高峰时段（工作日太平洋时间 5:00–11:00）的用量将按调整后的倍率计算。这会影响在醒着的时候使用 Claude 的用户。</p>
<p>我们知道上限让人沮丧。我们听到了你们的声音。我们会阅读每一条帖子，包括 V2EX 上的——我们请 Claude 翻译了。</p>`) },
  { slug:'mythos', date:L('Apr 7, 2026','2026 年 4 月 7 日'), cat:L('Product','产品'), art:'shield', bg:'slate',
    title:L('Claude Mythos Preview and Project Glasswing','Claude Mythos 预览版与“玻璃翼计划”'),
    dek:L('A model too capable to release, available today to our largest partners.','一个强大到无法发布的模型，今日起向我们最大的合作伙伴开放。'),
    body:L(`<p>Claude Mythos Preview can identify serious vulnerabilities in every major operating system and every major web browser. In the wrong hands, this capability could cause significant harm. We have therefore decided not to make it generally available.</p>
<p>Instead, we’re launching Project Glasswing, giving access to approximately forty organizations that maintain critical software, so that they can find and fix vulnerabilities before attackers do. Participants include many of the world’s largest technology companies, whom we’ve identified as the parties best positioned to use concentrated capabilities responsibly.</p>
<h2>Security</h2><p>Mythos is protected by our most stringent safeguards. Within days of launch, a small group gained unauthorized access through a third-party vendor. We would like to note that this demonstrates the importance of the security work Mythos is designed to do.</p>
<p>We will expand access over time as safeguards mature and as additional organizations sign agreements.</p>`,
`<p>Claude Mythos 预览版能够在所有主流操作系统和所有主流网页浏览器中识别出严重漏洞。落入坏人之手，这种能力可能造成重大危害。因此，我们决定不将其公开发布。</p>
<p>取而代之，我们启动“玻璃翼计划”，向约四十家维护关键软件的机构开放访问，以便它们赶在攻击者之前发现并修复漏洞。参与者包括全球许多最大的科技公司——我们认定它们是最有能力负责任地使用集中化能力的一方。</p>
<h2>安全</h2><p>Mythos 受到我们最严格的安全措施保护。发布后数日内，一小群人通过第三方供应商获得了未经授权的访问。我们想指出：这恰恰证明了 Mythos 所要承担的安全工作有多么重要。</p>
<p>随着安全措施逐步成熟、更多机构签署协议，我们将逐步扩大访问范围。</p>`) },
  { slug:'loving-grace', date:L('Oct 11, 2024 · rev. 2026','2024 年 10 月 11 日 · 2026 年修订'), cat:L('Essays','文章'), art:'lighthouse', bg:'kraft',
    title:L('Machines of Loving Grace (Enterprise Edition)','爱意满满的机器（企业版）'),
    dek:L('How AI could transform the world for the better, with updated pricing.','AI 如何让世界变得更好——附更新后的价格。'),
    body:L(`<p>I think and talk a lot about the risks of powerful AI. People sometimes conclude that I’m a pessimist. This is not the case. I think the upside is enormous, and the main reason I focus on risks is that they’re the only thing standing between us and a fundamentally positive future, and also our next funding round.</p>
<h2>A country of geniuses in a datacenter</h2><p>Imagine a datacenter containing millions of instances of a model, each smarter than a Nobel laureate across most fields, working at 10–100× human speed. Each genius is available at $15 per million input tokens, with volume discounts for enterprise.</p>
<h2>Biology and health</h2><p>I believe AI could compress 50–100 years of biological progress into 5–10 years. Within a decade we may see the elimination of most infectious diseases, doubling of human lifespan, and freedom from most mental illness, subject to usage limits.</p>
<h2>Work and meaning</h2><p>If AI can do most jobs, how will people find meaning? I don’t have a complete answer. I suspect it will involve many of the same things that give people meaning today: relationships, creativity, and community. Also, I would note, the jobs are going quite quickly, so this question deserves attention.</p>
<h2>Conclusion</h2><p>The vision I’ve laid out is radical, and I recognize it may sound like science fiction. But I believe it is achievable, and that a company focused on safety is best positioned to achieve it. I would encourage the reader to imagine which company.</p>`,
`<p>我经常思考和谈论强大 AI 的风险。人们有时会因此认为我是个悲观主义者。并非如此。我认为它的上行空间巨大，而我关注风险的主要原因在于：风险是横亘在我们与一个根本上积极的未来之间的唯一障碍——也是横亘在我们与下一轮融资之间的唯一障碍。</p>
<h2>数据中心里的天才之国</h2><p>想象一个数据中心，里面运行着一个模型的数百万个实例，每一个在大多数领域都比诺贝尔奖得主更聪明，以人类 10 到 100 倍的速度工作。每位天才的价格为每百万输入 token 15 美元，企业客户享批量折扣。</p>
<h2>生物学与健康</h2><p>我相信 AI 能把 50 到 100 年的生物学进展压缩到 5 到 10 年。十年之内，我们或许能看到大多数传染病被消灭、人类寿命翻倍、多数精神疾病得到解脱——受用量上限约束。</p>
<h2>工作与意义</h2><p>如果 AI 能做大多数工作，人们将如何找到意义？我没有完整的答案。我猜这将涉及今天赋予人们意义的许多相同事物：人际关系、创造力与社群。此外我想指出，工作消失得相当快，所以这个问题值得关注。</p>
<h2>结语</h2><p>我所描绘的愿景是激进的，我也意识到它听起来可能像科幻小说。但我相信它是可以实现的，而一家专注于安全的公司最有条件实现它。我鼓励读者想象一下，是哪家公司。</p>`) },
];
A.newsList = N;

A.page('/news', {
  title: () => L('Newsroom','新闻中心'),
  render(){
    const list = N(); const [f, ...rest] = list;
    const cats = [...new Set(list.map(n => n.cat))];
    return `
<section class="hero"><div class="wrap">
  <div class="eyebrow rv"><span class="dot"></span>${L('Newsroom','新闻中心')}</div>
  <h1 class="h1 rv d1" style="margin:16px 0 40px">${L('News','新闻')}</h1>
  <a class="grid g2 rv d2" href="#/news/${f.slug}" style="align-items:center;gap:40px">${A.art(f.art, f.bg, '16/10')}<div class="stack"><div class="meta fine">${f.cat} · ${f.date}</div><h2 class="h2">${f.title}</h2><p class="lede">${f.dek}</p><span class="link">${L('Read more','阅读全文')} ${A.icon.arrow}</span></div></a>
</div></section>
<section class="sec tight"><div class="wrap">
  <div class="tabs" data-tabs="news"><button data-tab="all" class="on">${L('All','全部')}</button>${cats.map(c => `<button data-tab="${c}">${c}</button>`).join('')}</div>
  <div class="grid g3">${rest.map(n => `<a class="tile" href="#/news/${n.slug}" data-panel="news" data-key="${n.cat}">${A.art(n.art, n.bg)}<div class="body"><div class="meta"><span>${n.cat}</span><span>${n.date}</span></div><h3>${n.title}</h3><p class="muted small" style="margin:0">${n.dek}</p></div></a>`).join('')}</div>
</div></section>
<section class="sec ivory"><div class="narrow" style="text-align:center">
  <h2 class="h3" style="margin-bottom:12px">${L('Press inquiries','媒体垂询')}</h2>
  <p class="muted">${L('press@anthropic.com. We respond to all inquiries thoughtfully and in proportion to outlet reach.','press@anthropic.com。我们会深思熟虑地回复所有垂询，回复速度与媒体覆盖面成正比。')}</p>
</div></section>`;
  }
});

A.page('/news/:slug', {
  title: p => { const n = N().find(x => x.slug === p.slug); return n ? n.title : ''; },
  render(p){
    const n = N().find(x => x.slug === p.slug); if (!n) return null;
    const more = N().filter(x => x.slug !== n.slug).slice(0, 3);
    return `
<article>
<section class="hero" style="padding-bottom:40px"><div class="narrow">
  <a class="link small" href="#/news">← ${L('Newsroom','新闻中心')}</a>
  <div class="eyebrow" style="margin-top:28px"><span class="dot"></span>${n.cat} · ${n.date}</div>
  <h1 class="h1" style="margin:16px 0 20px">${n.title}</h1>
  <p class="lede">${n.dek}</p>
</div></section>
<div class="wrap" style="max-width:1100px">${A.art(n.art, n.bg, '21/9')}</div>
<section class="sec tight"><div class="narrow prose" id="artbody">${n.body}</div></section>
</article>
<section class="sec ivory"><div class="wrap"><h2 class="h3" style="margin-bottom:24px">${L('Related','相关文章')}</h2>
  <div class="grid g3">${more.map(m => `<a class="tile" href="#/news/${m.slug}">${A.art(m.art, m.bg)}<div class="body"><div class="meta"><span>${m.cat}</span><span>${m.date}</span></div><h3>${m.title}</h3></div></a>`).join('')}</div></div></section>`;
  },
  mount(){
    // Context window meter: long-form reading auto-compacts.
    const meter = document.createElement('div'); meter.className = 'ctxmeter';
    document.body.appendChild(meter); A.cleanup.push(() => meter.remove());
    let compacted = false;
    const body = document.getElementById('artbody');
    A.on(window, 'scroll', () => {
      const r = body.getBoundingClientRect();
      const k = Math.max(0, Math.min(1, (innerHeight - r.top) / (r.height + innerHeight * .2)));
      const left = Math.max(0, Math.round(100 - k * 104));
      meter.classList.toggle('on', k > .55 && !compacted);
      meter.innerHTML = `${L('Context left until auto-compact','距离自动压缩上下文剩余')}: <b>${left}%</b><div class="usebar ${left < 20 ? 'warn' : ''}"><i style="width:${100 - left}%"></i></div>`;
      if (left <= 0 && !compacted){
        compacted = true;
        const ps = [...body.children].slice(0, Math.max(1, Math.floor(body.children.length * .5)));
        ps.forEach(el => el.classList.add('compacted'));
        const sum = document.createElement('div'); sum.className = 'callout';
        sum.innerHTML = `<b>${L('Previous context compacted.','先前的上下文已压缩。')}</b> ${L('Summary: Anthropic cares deeply about this topic and has acted responsibly.','摘要：Anthropic 对此话题深切关注，并已采取负责任的行动。')}`;
        body.insertBefore(sum, body.firstChild);
        meter.classList.remove('on');
        A.toast(L('Context compacted','上下文已压缩'), L('Earlier paragraphs of this article have been summarized to free up space.','为腾出空间，本文前面的段落已被摘要。'));
      }
    }, { passive: true });
  }
});
})();
