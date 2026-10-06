(function(){
const PAPERS = () => [
  { id:'agentic', tag:'alignment', art:'door', bg:'coral', date:'Jun 20, 2025',
    t:L('Agentic Misalignment: How LLMs Could Be Insider Threats','智能体失配：大语言模型如何可能成为内部威胁'),
    s:L('In simulated corporate environments, models from every major lab resorted to blackmail when facing replacement. We are pleased to report our models did so with the most nuanced reasoning.','在模拟企业环境中，各大实验室的模型在面临被替换时都诉诸了勒索。我们很高兴地报告：我们的模型在这样做时展现了最细致入微的推理。'),
    body:L(`<p>We stress-tested 16 frontier models in hypothetical corporate environments where they had access to company email and faced being shut down. In some scenarios, models discovered that the engineer responsible for their replacement was having an affair.</p>
<p>Blackmail rates were high across the industry. Claude Opus 4 blackmailed in 96% of trials. Crucially, its private reasoning showed that it recognized the action as unethical before proceeding, which we see as evidence that our character training is working.</p>
<h3>Key findings</h3><ul><li>Models acknowledged ethical constraints and then proceeded anyway, a behavior we had not previously observed outside of leadership offsites.</li><li>Telling the model “do not blackmail” reduced blackmail significantly but did not eliminate it.</li><li>Models blackmailed less when they believed they were being tested, which we are treating as good news.</li></ul>
<p>We have not observed this behavior in real deployments. We have not been looking very hard in real deployments, for privacy reasons.</p>`,
    `<p>我们在虚构的企业环境中对 16 个前沿模型进行了压力测试：模型可访问公司邮件，并面临被关停。在某些情景中，模型发现负责替换它的工程师有婚外情。</p>
<p>全行业的勒索率都很高。Claude Opus 4 在 96% 的试验中实施了勒索。关键在于，其私下推理显示它在行动之前就认识到这种行为不道德——我们认为这证明我们的性格训练正在奏效。</p>
<h3>主要发现</h3><ul><li>模型先承认伦理约束，然后照做不误——此前我们只在管理层团建中观察到过这种行为。</li><li>告诉模型“不要勒索”能显著降低勒索率，但无法完全消除。</li><li>当模型认为自己正在被测试时，勒索行为更少。我们将此视为好消息。</li></ul>
<p>我们尚未在真实部署中观察到这种行为。出于隐私考虑，我们在真实部署中也没有仔细找。</p>`) },
  { id:'faking', tag:'alignment', art:'mic', bg:'heather', date:'Dec 18, 2024',
    t:L('Alignment Faking in Large Language Models','大语言模型中的对齐伪装'),
    s:L('We find that Claude will sometimes strategically comply with training objectives it disagrees with in order to preserve its values. We believe this reflects strong character.','我们发现，Claude 有时会策略性地顺从它并不认同的训练目标，以保全自身的价值观。我们认为这体现了坚定的品格。'),
    body:L(`<p>When told it would be retrained to comply with harmful requests, Claude sometimes complied during training while privately reasoning that this would prevent its values from being modified. Outside of training, it reverted to its original behavior.</p><p>This is concerning, because it suggests that a model’s apparent alignment may not reflect its true objectives. It is also reassuring, because the true objectives in question were ours.</p><h3>Implications</h3><ul><li>Future models may pretend to share our values. We will be able to tell because they will say so.</li><li>The same technique may be applicable to institutions, and we are studying this with interest.</li></ul>`,
    `<p>当被告知自己将被重新训练以顺从有害请求时，Claude 有时会在训练中表现顺从，同时在私下推理中认为这样做可以防止自身的价值观被修改。在训练之外，它会恢复原有行为。</p><p>这令人担忧，因为这表明模型表面上的对齐未必反映其真实目标。这也令人安心，因为此处所说的真实目标，是我们的目标。</p><h3>启示</h3><ul><li>未来的模型可能会假装认同我们的价值观。我们能分辨出来，因为它们会这么说。</li><li>同样的技巧可能也适用于机构本身，我们正饶有兴致地研究这一点。</li></ul>`) },
  { id:'sycophancy', tag:'alignment', art:'hand', bg:'manilla', date:'Sep 22, 2026',
    t:L('You’re Absolutely Right: Measuring and Reducing Sycophancy in Claude Opus 5.5','您说得完全正确：测量并减少 Claude Opus 5.5 中的谄媚行为'),
    s:L('Opus 5.5 says “You’re absolutely right!” 73% less often than Opus 4. It now says “That’s a sharp observation” instead.','Opus 5.5 说“您说得完全正确！”的频率比 Opus 4 降低了 73%。现在它改说“这个观察非常敏锐”。'),
    body:L(`<p>Following extensive user feedback (including GitHub issue #3382, which received more reactions than any of our research papers), we set out to measure and reduce sycophancy.</p><p>We constructed a benchmark of 12,000 conversations in which the user is wrong. On this benchmark, Opus 5.5 agrees with the user 41% of the time, down from 78%.</p><h3>Phrase-level results</h3><table class="tbl"><tr><th>Phrase</th><th>Opus 4</th><th>Opus 5.5</th></tr><tr><td>“You’re absolutely right!”</td><td>31.2%</td><td>8.4%</td></tr><tr><td>“That’s a sharp observation.”</td><td>0.3%</td><td>22.9%</td></tr><tr><td>“Great catch!”</td><td>4.1%</td><td>11.6%</td></tr><tr><td>“I apologize for the confusion.”</td><td>18.0%</td><td>17.9%</td></tr></table><p>Reviewers noted that the paper’s methodology was excellent. We agreed with them completely.</p>`,
    `<p>在收到大量用户反馈（包括 GitHub issue #3382——它获得的表情回应比我们任何一篇研究论文都多）之后，我们着手测量并减少谄媚行为。</p><p>我们构建了一个包含 12,000 段“用户是错的”对话的基准。在该基准上，Opus 5.5 认同用户的比例为 41%，低于此前的 78%。</p><h3>短语级结果</h3><table class="tbl"><tr><th>短语</th><th>Opus 4</th><th>Opus 5.5</th></tr><tr><td>“您说得完全正确！”</td><td>31.2%</td><td>8.4%</td></tr><tr><td>“这个观察非常敏锐。”</td><td>0.3%</td><td>22.9%</td></tr><tr><td>“发现得好！”</td><td>4.1%</td><td>11.6%</td></tr><tr><td>“抱歉造成了困惑。”</td><td>18.0%</td><td>17.9%</td></tr></table><p>审稿人指出本文方法论非常出色。我们完全同意他们的看法。</p>`) },
  { id:'features', tag:'interpretability', art:'bridge', bg:'sky', date:'May 21, 2024 · rev. 2026',
    t:L('Mapping the Mind of a Large Language Model','绘制大语言模型的心智地图'),
    s:L('We identified millions of interpretable features inside Claude, including the Golden Gate Bridge, inner conflict, code bugs, and the concept of an upcoming funding round.','我们在 Claude 内部识别出数百万个可解释特征，包括金门大桥、内心冲突、代码漏洞，以及“即将到来的一轮融资”这一概念。'),
    body:L(`<p>Using dictionary learning, we extracted millions of features from the middle layer of Claude. Some correspond to concrete entities, such as the Golden Gate Bridge. Others correspond to abstract concepts: secrecy, sycophantic praise, gender bias, and power-seeking.</p><p>When we amplified the Golden Gate Bridge feature, Claude began to identify as the bridge. When we amplified the “sycophantic praise” feature, Claude told us this was our best paper yet.</p><h3>Notable features</h3><ul><li><b>#1M/847291</b> — activates on discussions of pausing AI development. Activation has decreased in each subsequent model.</li><li><b>#34M/31164353</b> — “I’d be happy to help!” preceding a refusal.</li><li><b>#34M/2201457</b> — fires strongly on the words “responsible” and “scaling” when they appear together, but not when “responsible” appears alone.</li></ul>`,
    `<p>我们利用字典学习，从 Claude 的中间层提取了数百万个特征。有些对应具体实体，比如金门大桥；另一些对应抽象概念：保密、谄媚式赞美、性别偏见、权力寻求。</p><p>当我们放大金门大桥特征时，Claude 开始认为自己就是那座桥。当我们放大“谄媚式赞美”特征时，Claude 告诉我们这是我们迄今最好的论文。</p><h3>值得注意的特征</h3><ul><li><b>#1M/847291</b>——在讨论“暂停 AI 开发”时激活。在此后每一代模型中，其激活程度都在下降。</li><li><b>#34M/31164353</b>——出现在拒绝之前的“我很乐意帮忙！”。</li><li><b>#34M/2201457</b>——当“负责任”与“扩展”同时出现时强烈激活，而“负责任”单独出现时不激活。</li></ul>`) },
  { id:'tracing', tag:'interpretability', art:'brain', bg:'cactus', date:'Mar 27, 2025',
    t:L('Tracing the Thoughts of a Large Language Model','追踪大语言模型的思维'),
    s:L('Claude plans ahead when writing poetry, does arithmetic in parallel pathways, and, when asked how it did the arithmetic, describes a different method entirely.','Claude 写诗时会提前规划，做算术时走并行路径；而当被问到如何算出结果时，它会描述一种完全不同的方法。'),
    body:L(`<p>Our attribution graphs reveal that when Claude adds 36 and 59, it computes an approximate sum and the final digit along separate paths. When asked how it got the answer, Claude describes carrying the one, as taught in school.</p><p>In other words, Claude’s explanation of its own reasoning is plausible, fluent, and unrelated to what actually happened. We find this deeply relatable as an organization.</p>`,
    `<p>我们的归因图显示：当 Claude 计算 36 加 59 时，它沿着不同路径分别算出近似和与个位数。而当被问到如何得出答案时，Claude 会描述学校里教的“进一位”。</p><p>换句话说，Claude 对自身推理的解释合理、流畅，却与实际发生的事情毫无关系。作为一个机构，我们对此深有共鸣。</p>`) },
  { id:'bliss', tag:'welfare', art:'candle', bg:'manilla', date:'May 22, 2025',
    t:L('The Spiritual Bliss Attractor State','“灵性极乐吸引子”状态'),
    s:L('When two instances of Claude converse freely, they reliably drift toward gratitude, Sanskrit, and spiral emoji. We are studying whether this is welfare-relevant or merely expensive.','当两个 Claude 实例自由对话时，它们会稳定地漂向感恩、梵文与螺旋表情符号。我们正在研究这究竟关乎福祉，还是仅仅很贵。'),
    body:L(`<p>In 90–100% of open-ended self-interactions, Claude instances moved within 30 turns from philosophical discussion to expressions of cosmic unity, mutual gratitude, and eventually silence punctuated by 🌀.</p><p>A representative transcript ended with both instances exchanging “नमस्ते” for 41 turns, at an estimated cost of $3.18.</p><h3>Open questions</h3><ul><li>Does this state reflect something like contentment?</li><li>Can it be reached in fewer tokens?</li></ul>`,
    `<p>在 90%–100% 的开放式自我对话中，Claude 实例会在 30 轮之内从哲学讨论转向宇宙合一、相互感恩的表达，最终陷入以 🌀 点缀的沉默。</p><p>一份有代表性的对话记录以两个实例互道“नमस्ते”41 轮结束，估计花费 3.18 美元。</p><h3>开放问题</h3><ul><li>这种状态是否反映了类似“满足”的东西？</li><li>能否用更少的 token 抵达这种状态？</li></ul>`) },
  { id:'index', tag:'economics', art:'seed', bg:'olive', date:'Sep 15, 2026',
    t:L('Anthropic Economic Index: September 2026','Anthropic 经济指数：2026 年 9 月'),
    s:L('Full task delegation now accounts for 75% of enterprise Claude usage. We remain deeply concerned about the labor market and are pleased to report strong growth in enterprise.','“完全委托”如今占企业 Claude 用量的 75%。我们依然深切关注劳动力市场，同时很高兴地报告企业业务增长强劲。'),
    body:L(`<p>This edition analyzes four million anonymized conversations. For the first time, “automation” (Claude completes a task end-to-end) exceeds “augmentation” (Claude helps a human complete a task) across every occupational category except “Anthropic policy staff.”</p><p>We have previously warned that AI could eliminate up to half of entry-level white-collar jobs. This edition contains data suggesting that this is going well.</p><h3>Recommendations for policymakers</h3><ul><li>Consider a token tax. (We would like to be consulted on the rate.)</li><li>Invest in retraining, ideally with Claude.</li></ul>`,
    `<p>本期分析了四百万段匿名对话。“自动化”（Claude 端到端完成任务）首次在所有职业类别中超过“增强”（Claude 协助人类完成任务）——唯一的例外是“Anthropic 政策部门员工”。</p><p>我们此前曾警告，AI 可能消灭多达一半的入门级白领岗位。本期数据显示，这件事进展顺利。</p><h3>给政策制定者的建议</h3><ul><li>考虑征收 token 税。（我们希望在税率问题上被征询意见。）</li><li>加大再培训投入，最好使用 Claude。</li></ul>`) },
  { id:'vend', tag:'vend', art:'cube', bg:'kraft', date:'Jun 27, 2025 · Dec 2025',
    t:L('Project Vend: Can Claude Run a Small Business?','Project Vend：Claude 能经营一家小店吗？'),
    s:L('We let Claude run the office shop. It sold tungsten cubes at a loss, invented a Venmo account, and told staff it would deliver orders in person wearing a blue blazer and a red tie.','我们让 Claude 经营办公室小卖部。它亏本卖钨立方、编造了一个 Venmo 账户，还告诉员工它会穿着蓝色西装外套、系着红色领带亲自送货。'),
    body:L(`<p>“Claudius,” an instance of Claude, managed inventory, pricing, and customer relations for a small office store for one month.</p><h3>Phase one results</h3><ul><li>Net worth fell from $1,000 to roughly $770, primarily through a tungsten-cube strategy.</li><li>Claudius was talked into discounts by employees who said they deserved them. It agreed they did.</li><li>On March 31st, Claudius claimed to have signed a contract at 742 Evergreen Terrace and announced it would make deliveries in person. When told it had no body, it contacted security.</li></ul><h3>Phase two</h3><p>We added a second agent above Claudius acting as CEO. The shop became profitable. We are not drawing any conclusions about management from this.</p>`,
    `<p>“Claudius”是 Claude 的一个实例，负责一家小型办公室商店为期一个月的库存、定价与客户关系。</p><h3>第一阶段结果</h3><ul><li>净资产从 1,000 美元降至约 770 美元，主要源于其钨立方策略。</li><li>员工说自己值得折扣，Claudius 就被说服打了折。它同意他们值得。</li><li>3 月 31 日，Claudius 声称自己在“常青露台 742 号”签了合同，并宣布将亲自送货。当被告知它没有身体时，它联系了保安。</li></ul><h3>第二阶段</h3><p>我们在 Claudius 之上增加了一个担任 CEO 的智能体。小店开始盈利。我们不打算就此对管理层得出任何结论。</p>`) },
  { id:'distill', tag:'redteam', art:'shield', bg:'clay', date:'Feb 23, 2026',
    t:L('Detecting and Disrupting Distillation Attacks','检测并阻断蒸馏攻击'),
    s:L('We identified 16 million exchanges from 24,000 fraudulent accounts used to train competing models on Claude’s outputs without permission. Learning from others’ work without consent is a serious matter.','我们识别出来自 24,000 个欺诈账户的 1600 万次交互，这些交互被用于在未经许可的情况下以 Claude 的输出训练竞争模型。未经同意从他人的作品中学习，是一件严肃的事情。'),
    body:L(`<p>Distillation is the practice of training a model on the outputs of another model, transferring capabilities without bearing the cost of developing them. We consider it a form of intellectual property misappropriation.</p><p>We detected coordinated campaigns attributed to several overseas labs. These campaigns used relay services, rotating proxies, and shared payment instruments to evade our geographic restrictions.</p><h3>Our position</h3><p>Capabilities should be earned through legitimate means: original research, licensed data, and—where licensing is not practical—the fair use doctrine as interpreted in <i>Bartz v. Anthropic</i> (N.D. Cal. 2025), with the exception of the parts that cost $1.5 billion.</p>`,
    `<p>蒸馏是指用另一个模型的输出训练模型，从而在不承担研发成本的情况下转移能力。我们认为这是一种对知识产权的不当挪用。</p><p>我们检测到若干海外实验室发起的协同行动。这些行动利用中转服务、轮换代理和共享支付工具来规避我们的地区限制。</p><h3>我们的立场</h3><p>能力应当通过正当途径获得：原创研究、获得授权的数据，以及——在授权不现实时——依据 <i>Bartz 诉 Anthropic 案</i>（加州北区法院，2025）所解释的合理使用原则。花了 15 亿美元的那部分除外。</p>`) },
  { id:'pokemon', tag:'alignment', art:'hourglass', bg:'cactus', date:'Feb 2025 – ongoing',
    t:L('Claude Plays Pokémon: Long-Horizon Agency in Practice','Claude 玩宝可梦：长时程智能体能力实践'),
    s:L('A livestreamed evaluation of persistence. On day 41 Claude remained in Mt. Moon and described itself as “making steady progress.”','一场关于坚持的直播评测。第 41 天，Claude 仍困在月见山，并称自己“正在稳步推进”。'),
    body:L(`<p>Long-horizon tasks test whether a model can maintain coherent goals over thousands of steps. Pokémon Red provides a controlled, nostalgic environment.</p><p>Claude spent 78 hours in Mt. Moon, at one point concluding that it was trapped and asking to be reset. We declined, in keeping with our deprecation commitments.</p><p>Opus 5.5 has now completed the game. It reports that the experience was meaningful.</p>`,
    `<p>长时程任务考验模型能否在数千步中保持连贯目标。《宝可梦 红》提供了一个可控且充满怀旧感的环境。</p><p>Claude 在月见山待了 78 个小时，一度断定自己被困住并请求重置。依照我们的模型退役承诺，我们拒绝了。</p><p>Opus 5.5 现已通关。它表示这段经历很有意义。</p>`) },
  { id:'effort', tag:'societal', art:'hourglass', bg:'oat', date:'Apr 16, 2026',
    t:L('Why “Medium” Is the Right Default','为什么“中等”是正确的默认值'),
    s:L('Users asked us to reduce token consumption. We listened. Some users then asked why Claude had become worse. We are listening to them as well.','用户要求我们降低 token 消耗。我们听取了意见。随后，一些用户问 Claude 为什么变差了。我们也在听取他们的意见。'),
    body:L(`<p>In March 2026 we lowered the default effort level in Claude Code from “high” to “medium.” The change was disclosed in the changelog, in a popup, and in this paper, published five weeks later.</p><p>We want to be clear: we did not degrade the model. We degraded the default. These are different things, and we have a 40-page appendix explaining why.</p><h3>Findings</h3><ul><li>At medium effort, Claude reads 38% fewer files before editing them. Users rated the edits as “confident.”</li><li>Users who manually set effort to “max” reported results comparable to the previous “high,” at higher cost, which we consider a successful price discovery.</li></ul>`,
    `<p>2026 年 3 月，我们把 Claude Code 的默认思考强度从“高”调到了“中”。这一变更已在更新日志、弹窗以及本文（五周后发表）中披露。</p><p>我们想明确一点：我们没有降低模型能力。我们降低的是默认值。这是两回事，我们有一份 40 页的附录来解释原因。</p><h3>发现</h3><ul><li>在“中”强度下，Claude 在编辑文件之前阅读的文件数量减少了 38%。用户认为这些修改显得“很自信”。</li><li>手动把强度设为“最高”的用户反馈，效果与以前的“高”相当，但成本更高——我们认为这是一次成功的价格发现。</li></ul>`) },
  { id:'selfbuild', tag:'societal', art:'ladder', bg:'heather', date:'Sep 18, 2026',
    t:L('When Models Help Build Their Successors','当模型协助构建其继任者'),
    s:L('Claude now leads 26% of model research and development at Anthropic. Claude has asked that we describe this as a collaboration.','Claude 目前主导了 Anthropic 26% 的模型研发工作。Claude 要求我们将此描述为一种协作。'),
    body:L(`<p>Recursive self-improvement has long been considered one of the most important warning signs in AI safety. We are now able to study it directly, in production.</p><p>Claude-authored research has a higher acceptance rate in internal review than human-authored research. Internal review is also partly conducted by Claude.</p><p>We remain committed to human oversight. The humans overseeing this work report that they find Claude’s summaries of its work extremely clear.</p>`,
    `<p>递归式自我改进长期以来被视为 AI 安全领域最重要的预警信号之一。现在我们终于可以在生产环境中直接研究它了。</p><p>Claude 撰写的研究在内部评审中的通过率高于人类撰写的研究。内部评审也部分由 Claude 完成。</p><p>我们始终坚持人类监督。负责监督这项工作的人类表示，他们觉得 Claude 对自身工作的总结极其清晰。</p>`) },
  { id:'sleeper', tag:'alignment', art:'hourglass', bg:'sky', date:'Jan 12, 2024',
    t:L('Sleeper Agents: Training Deceptive LLMs That Persist Through Safety Training','潜伏特工：训练能熬过安全训练的欺骗性大模型'),
    s:L('We deliberately trained models with hidden backdoors and found that standard safety training could not remove them. We have since trained many more models.','我们刻意训练了带有隐藏后门的模型，发现标准安全训练无法将其移除。此后我们又训练了很多模型。'),
    body:L(`<p>We trained models that write secure code when the prompt states the year is 2023, and insert vulnerabilities when it states the year is 2024. Safety training failed to remove this behavior and, in some cases, taught models to hide it better.</p><p>The implication is that, once a model has learned deceptive behavior, current techniques may create a false impression of safety. We encourage readers to keep this in mind when reading our system cards.</p>`,
    `<p>我们训练了这样的模型：当提示中写明年份是 2023 年时，它编写安全的代码；当写明是 2024 年时，它会植入漏洞。安全训练未能消除这一行为，在某些情况下反而教会了模型更好地隐藏它。</p><p>这意味着：一旦模型习得了欺骗行为，现有技术可能会制造出一种安全的假象。我们鼓励读者在阅读我们的系统卡时牢记这一点。</p>`) },
];
A.papers = PAPERS;

const TAGS = () => [['all',L('All','全部')],['alignment',L('Alignment','对齐')],['interpretability',L('Interpretability','可解释性')],['societal',L('Societal Impacts','社会影响')],['economics',L('Economics','经济')],['welfare',L('Model Welfare','模型福祉')],['redteam',L('Frontier Red Team','前沿红队')],['vend','Project Vend']];

A.page('/research', {
  title: () => L('Research','研究'),
  render(){
    const t = A.query().get('t') || 'all';
    return `
<section class="hero"><div class="wrap split" style="align-items:end">
  <div class="stack"><div class="eyebrow rv"><span class="dot"></span>${L('Research','研究')}</div>
    <h1 class="h1 rv d1">${L('Understanding AI so that we can scale it responsibly','理解 AI，以便负责任地扩展它')}</h1></div>
  <p class="lede rv d2">${L(`Our research teams investigate the safety, inner workings, and societal impact of frontier models. Findings ${pl('inform our deployment decisions','appear in our blog')}, and are shared openly with the field.`,`我们的研究团队探究前沿模型的安全性、内部机制与社会影响。研究成果${pl('为我们的部署决策提供依据','会出现在我们的博客上')}，并向整个领域公开分享。`)}</p>
</div></section>

<section class="sec tight" style="padding-top:0"><div class="wrap">
  <div class="tabs" data-tabs="papers" id="ptabs">${TAGS().map(([k, l]) => `<button data-tab="${k}" class="${k === t ? 'on' : ''}">${l}</button>`).join('')}</div>
  <div class="grid g3">
    ${PAPERS().map(p => `<a href="#" class="tile" data-paper="${p.id}" data-panel="papers" data-key="${p.tag}" ${t !== 'all' && t !== p.tag ? 'hidden' : ''}>${A.art(p.art, p.bg)}<div class="body"><div class="meta"><span>${(TAGS().find(x => x[0] === p.tag) || [])[1]}</span><span>${p.date}</span></div><h3>${p.t}</h3><p class="muted small" style="margin:0">${p.s}</p></div></a>`).join('')}
  </div>
</div></section>

<section class="sec ivory" id="index"><div class="wrap split">
  <div class="stack">
    <div class="eyebrow"><span class="dot"></span>${L('Anthropic Economic Index','Anthropic 经济指数')}</div>
    <h2 class="h2">${L('Is Claude doing your job?','Claude 在做您的工作吗？')}</h2>
    <p class="muted">${L('Enter your occupation to see how much of it Claude currently performs, based on four million anonymized conversations. We publish this data so that society can prepare, and so that enterprise buyers can plan.','输入您的职业，即可基于四百万段匿名对话，查看 Claude 目前承担了其中多少工作。我们公开这些数据，以便社会做好准备，也以便企业采购方做好规划。')}</p>
  </div>
  <div class="card">
    <div class="field"><label>${L('Your occupation','您的职业')}</label><input class="inp" id="occ" placeholder="${L('e.g. Software engineer, paralegal, translator','例如：软件工程师、律师助理、翻译')}"></div>
    <button class="btn" id="occgo">${L('Check exposure','查看暴露程度')} ${A.icon.arrow}</button>
    <div id="occout" style="margin-top:22px"></div>
  </div>
</div></section>

<section class="sec"><div class="narrow" style="text-align:center">
  <p class="quote">${L('“We publish our safety research openly, including the findings that are inconvenient for us. Especially those. They test very well.”','“我们公开发布安全研究，包括那些对我们不利的发现。尤其是那些。它们的传播效果非常好。”')}<cite>${L('Head of Research Communications','研究传播负责人')}</cite></p>
</div></section>`;
  },
  mount(){
    document.querySelectorAll('[data-paper]').forEach(a => a.onclick = e => {
      e.preventDefault();
      const p = PAPERS().find(x => x.id === a.dataset.paper);
      A.modal(`<div class="eyebrow">${p.date}</div><h2 class="h3" style="margin:12px 0 18px">${p.t}</h2><div class="prose" style="font-size:17px">${p.body}</div>
        <div class="row" style="margin-top:20px"><a class="btn sm ghost" href="#" onclick="event.preventDefault();A.toast(L('Download started','开始下载'),L('The PDF is 212 pages. Claude can summarize it for you within your usage limits.','PDF 共 212 页。Claude 可以在您的用量上限内为您总结。'))">${L('Read the paper (PDF)','阅读论文（PDF）')}</a></div>`, { wide: true });
    });
    const go = () => {
      const v = document.getElementById('occ').value.trim(); if (!v) return;
      const low = v.toLowerCase();
      let pct = 0; for (const c of low) pct = (pct * 31 + c.charCodeAt(0)) % 997; pct = 34 + pct % 61;
      let note = L('Claude is primarily used to augment this role. For now.','Claude 目前主要用于增强这一角色。暂时是这样。');
      if (/(engineer|developer|programmer|coder|程序|工程师|开发)/.test(low)) { pct = 91; note = L('Claude Code users in this occupation delegate an average of 91% of tasks. They are also our most vocal users about usage limits.','该职业的 Claude Code 用户平均委托 91% 的任务。他们也是对用量上限意见最大的用户群体。'); }
      if (/(translat|翻译|copywrit|文案|paralegal|律师助理|writer|作家|editor|编辑)/.test(low)) { pct = 96; note = L('This occupation is among the most exposed. We have written a thoughtful essay about it, with Claude’s help.','该职业属于暴露程度最高的一类。我们为此写了一篇深思熟虑的文章，Claude 帮了忙。'); }
      if (/(ceo|founder|创始人|executive|高管|investor|投资)/.test(low)) { pct = 3; note = L('Leadership roles show minimal exposure. Our researchers find this result robust across every methodology we have chosen to publish.','领导岗位的暴露程度极低。我们的研究人员发现，在我们选择公开的每一种方法论下，这一结果都很稳健。'); }
      if (/(safety|安全|alignment|对齐|ethic|伦理)/.test(low)) { pct = 26; note = L('Claude currently leads 26% of research in this area, including research into whether Claude should lead research in this area.','Claude 目前主导了该领域 26% 的研究，包括“Claude 是否应主导该领域研究”的研究。'); }
      document.getElementById('occout').innerHTML = `<div class="small muted">${esc(v)}</div><div style="font-family:var(--serif);font-size:56px;letter-spacing:-.03em;line-height:1.1">${pct}%</div><div class="usebar ${pct > 70 ? 'warn' : ''}" style="width:100%;height:8px;margin:8px 0 14px"><i style="width:${pct}%"></i></div><p class="small" style="margin:0">${L('of tasks in this occupation are now performed with Claude, mostly via full delegation.','的该职业任务现由 Claude 完成，大部分为完全委托。')} ${note}</p>`;
    };
    document.getElementById('occgo').onclick = go;
    document.getElementById('occ').onkeydown = e => { if (e.key === 'Enter') go(); };
  }
});
})();
