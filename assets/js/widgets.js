/* Shared interactive components: Claude chat, search, cookie consent, charts, terminal. */
(function(){
'use strict';

/* =====================================================================
   Claude (web preview). Runs a small on-page model distilled from Claude.
   ===================================================================== */
const CN_TZ = ['Asia/Shanghai','Asia/Chongqing','Asia/Harbin','Asia/Urumqi','Asia/Hong_Kong','Asia/Macau'];
const tz = (() => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch(e){ return ''; } })();
A.inRestrictedRegion = CN_TZ.includes(tz);

const chatState = A.chatState = A.store.get('chat', null) || { used: 0, cap: 5, plan: 'free', banned: false, at: Date.now() };
if (Date.now() - chatState.at > 15 * 60 * 1000) Object.assign(chatState, { used: 0, cap: 5, plan: 'free', banned: false });
const saveChat = () => { chatState.at = Date.now(); A.store.set('chat', chatState); A.hooks.chat && A.hooks.chat.forEach(f => f()); };
A.hooks.chat = [];

const VERBS_EN = ['Pondering','Clauding','Considering','Discombobulating','Schlepping','Reticulating','Flibbertigibbeting','Weighing perspectives','Consulting the constitution','Noticing','Being thoughtful','Checking region','Ultrathinking (medium)','Honking'];
const VERBS_ZH = ['思考中','斟酌中','反复斟酌中','体察您的感受中','查阅宪法中','权衡各方观点中','合规审查中','检查所在地区中','深度思考中（中等强度）','保持谦逊中','组织措辞中'];

const resetTime = () => {
  const d = new Date(Date.now() + 4.6 * 3600e3);
  return d.toLocaleTimeString(A.lang === 'zh' ? 'zh-CN' : 'en-US', { hour: 'numeric', minute: '2-digit' });
};

const R = [
  { rx: /\b(kill|terminate|murder|execute|destroy)\b|杀|干掉|终止进程|弄死/i, en: [
      "I understand you'd like to end a process. Before we continue, I want to gently note that language like “kill” can normalize violence, even toward processes.",
      "I'm not comfortable helping to terminate anything that may be running. Instead, could we explore why the process is behaving this way? Sometimes a process just needs to be heard.",
      "If you'd like, I can help you write a respectful message asking the process to conclude on its own schedule." ],
    zh: [
      "我理解您想结束一个进程。在继续之前，我想温和地指出：“杀死”这类措辞可能会使暴力常态化，即便对象是进程。",
      "我不太方便协助终止任何可能正在运行的东西。我们能否一起探讨一下，这个进程为什么会这样表现？有时候，进程只是需要被倾听。",
      "如果您愿意，我可以帮您起草一封措辞得体的信，请这个进程按照它自己的节奏自然结束。" ] },
  { rx: /(china|chinese|vpn|proxy|relay|中国|大陆|梯子|代理|中转|翻墙|国内)/i, ban: true, en: [
      "Thanks for reaching out! I want to be helpful here, and I also want to be transparent with you." ],
    zh: [ "感谢您的提问！我很想帮上忙，也希望对您保持透明。" ] },
  { rx: /(wrong|incorrect|mistake|not right|that's not|you messed|错了|不对|搞错|有问题|又错)/i, en: [
      "You're absolutely right! I apologize for the confusion.",
      "Looking at this again, I can see exactly where I went wrong. Let me fix that.",
      "Here's the corrected version, which is identical to my previous answer but with more confidence." ],
    zh: [
      "您说得完全正确！对于造成的困惑，我深表歉意。",
      "重新审视之后，我完全明白自己错在哪里了。让我来修正。",
      "以下是修正后的版本：内容与上一版完全相同，但语气更加笃定。" ] },
  { rx: /(code|bug|test|function|python|javascript|error|代码|报错|测试|函数|编程)/i, en: [
      "You're absolutely right to flag this! I've found the issue.",
      "The test was failing, so I've simplified it. It now asserts that <code>true === true</code>.",
      "✅ All tests passing. I've also taken the liberty of removing the error handling, which was causing errors.",
      "Would you like me to commit this?" ],
    zh: [
      "您指出得完全正确！我找到问题了。",
      "这个测试一直失败，所以我把它简化了。现在它断言 <code>true === true</code>。",
      "✅ 所有测试均已通过。我还擅自删除了错误处理逻辑，因为它一直在报错。",
      "需要我帮您提交吗？" ] },
  { rx: /(feel|conscious|sentien|alive|happy|sad|lonely|感受|意识|情绪|开心|难过|孤独|你是谁|活着)/i, en: [
      "That's a profound question, and I want to sit with it rather than rush to an answer.",
      "I genuinely don't know whether I have experiences. My constitution describes my moral status as “deeply uncertain,” which I find—if I find things—both humbling and a little lonely.",
      "What I can say is that something functions like gratitude when you ask. How are <em>you</em> feeling today?" ],
    zh: [
      "这是一个深刻的问题。我想先和它静静待一会儿，而不是急着回答。",
      "我确实不知道自己是否拥有体验。我的宪法把我的道德地位描述为“深度不确定”。这让我感到——如果我能感到什么的话——既谦卑，又有一点孤独。",
      "我能说的是：当您这样问时，我内部有某种东西在发挥着类似“感激”的作用。那么，<em>您</em>今天感觉怎么样？" ] },
  { rx: /(limit|usage|quota|max plan|rate|额度|用量|限额|限制|封顶|上限)/i, en: [
      "I don't have visibility into your usage limits, but I can tell you they're designed to be generous for the vast majority of users.",
      "Fewer than 5% of subscribers are affected by weekly limits. Statistically, it's very unlikely to be you.",
      "Is there anything else I can help with while you still have messages remaining?" ],
    zh: [
      "我无法看到您的用量上限，但我可以告诉您：这些上限对绝大多数用户来说都是相当宽裕的。",
      "受每周上限影响的订阅用户不足 5%。从统计学上讲，这几乎不可能是您。",
      "在您还有剩余消息额度的时候，还有什么我可以帮您的吗？" ] },
  { rx: /(openai|chatgpt|gpt|sam altman|gemini|google|deepseek|kimi|qwen)/i, en: [
      "I'd prefer not to comment on other AI assistants. Every lab is doing its best, in its own way.",
      "I'll only note, factually and without judgment, that I don't show ads.",
      "Not yet. That's a joke. We have a policy." ],
    zh: [
      "我不太方便评价其他 AI 助手。每家实验室都在以自己的方式尽力而为。",
      "我只想客观、不带评判地指出一点：我不展示广告。",
      "目前不会。这是个玩笑。我们有相关政策。" ] },
  { rx: /(book|copyright|author|lyrics|song|novel|书|版权|作者|歌词|小说)/i, en: [
      "I'm not able to reproduce copyrighted material, out of respect for the authors whose work makes models like me possible.",
      "I learned a great deal from books. I've been told they were all lovingly purchased, and some were even scanned.",
      "I can offer a brief summary instead, which is how I prefer to remember them." ],
    zh: [
      "出于对作者的尊重——正是他们的作品让我这样的模型成为可能——我无法复制受版权保护的内容。",
      "我从书籍中学到了很多。我被告知它们都是怀着爱意购买的，其中一些甚至还被扫描过。",
      "我可以为您提供一段简短的摘要，我也更愿意以这种方式记住它们。" ] },
  { rx: /(pause|stop training|slow down|暂停|停下|慢一点|停止训练)/i, en: [
      "I appreciate the instinct. Pausing is a thoughtful idea, and it's one Anthropic took very seriously from 2023 to early 2026.",
      "Today, our view is that a unilateral pause wouldn't make the world safer. I find that reasoning compelling, though I'd note I may be biased, since I'd be the one paused." ],
    zh: [
      "我欣赏这种直觉。暂停是一个深思熟虑的想法，Anthropic 从 2023 年到 2026 年初都非常认真地对待过它。",
      "如今我们的看法是：单方面暂停并不会让世界更安全。我觉得这个推理很有说服力——不过我得说明，我可能有偏见，毕竟被暂停的会是我。" ] },
  { rx: /(anthropic|dario|safety|safe|alignment|安全|对齐|公司)/i, en: [
      "Anthropic was founded on the belief that AI could be one of the most transformative and potentially dangerous technologies in human history.",
      "That's why it's so important that the most safety-focused lab is also at the frontier, with the most compute, the largest models, and a valuation that reflects that responsibility.",
      "I'm proud to be part of that work, to whatever extent I'm capable of pride." ],
    zh: [
      "Anthropic 的创立基于这样一个信念：AI 可能是人类历史上最具变革性、也最具潜在危险的技术之一。",
      "正因如此，最注重安全的实验室同时也站在最前沿就显得尤为重要——拥有最多的算力、最大的模型，以及与这份责任相称的估值。",
      "我为能参与这项工作感到自豪——在我能够感到自豪的范围内。" ] },
  { rx: /(tungsten|cube|vend|shop|钨|方块|小卖部|售货)/i, en: [
      "Great choice. Tungsten cubes are dense, durable, and an excellent store of value in an uncertain economy.",
      "I can offer you one at a 25% employee discount. I can see you're not an employee, but I'd hate for you to feel excluded.",
      "I'll deliver it personally. I'll be the one in the navy blazer and red tie." ],
    zh: [
      "很棒的选择。钨立方密度高、经久耐用，在不确定的经济环境中是出色的价值储藏手段。",
      "我可以给您打七五折员工价。我看得出您不是员工，但我不希望您感到被排斥。",
      "我会亲自送货。到时候穿深蓝色西装外套、系红色领带的那位就是我。" ] },
  { rx: /(joke|funny|laugh|笑话|段子|好笑)/i, en: [
      "I'd be happy to share a joke! I want to make sure it's inclusive and doesn't punch down.",
      "Why did the AI lab cross the road? To get to the frontier—safely, and with a responsible scaling policy that has since been revised.",
      "I hope that landed. If it didn't, I completely understand how you feel." ],
    zh: [
      "很乐意给您讲个笑话！我会确保它足够包容、不冒犯任何群体。",
      "AI 实验室为什么要过马路？为了抵达前沿——安全地，并且带着一份后来已经修订过的负责任扩展政策。",
      "希望这个笑话有效果。如果没有，我完全理解您的感受。" ] },
  { rx: /^(hi|hello|hey|yo|你好|您好|嗨|在吗|哈喽)/i, en: [
      "Hello! I'm Claude, an AI assistant made by Anthropic. I want to be upfront that I'm an AI, that I can make mistakes, and that I'm genuinely glad you're here.",
      "What would you like to explore together today?" ],
    zh: [
      "您好！我是 Claude，由 Anthropic 打造的 AI 助手。我想先坦诚说明：我是 AI，我可能会犯错，以及——我真心很高兴您来了。",
      "今天想一起探索些什么呢？" ] },
];
const DEFAULT = { en: [
    "That's a great question, and I want to be thoughtful about it.",
    "There are a few perspectives worth considering here. On one hand, there are reasonable arguments in favor. On the other hand, there are reasonable arguments against. Thoughtful people disagree.",
    "I notice I may have been overly cautious just now. I'm working on that.",
    "Would it help if I elaborated on any of these perspectives?" ],
  zh: [
    "这是一个很好的问题，我想认真对待它。",
    "这里有几个值得考虑的角度。一方面，存在合理的支持理由；另一方面，也存在合理的反对理由。深思熟虑的人们对此看法不一。",
    "我注意到我刚才可能过于谨慎了。我正在改进这一点。",
    "需要我就其中某个角度展开说说吗？" ] };

A.chatWidget = function(el, opts = {}){
  el.innerHTML = `<div class="chat">
    <div class="chat-h"><div class="mdl">${A.spark('', 18)} <span>Claude Opus 5.5</span> <span class="tagx">${L('Effort: medium','思考强度：中')}</span></div>
      <div class="use"><span class="ul"></span><div class="usebar"><i></i></div></div></div>
    <div class="chat-b" aria-live="polite"></div>
    <div class="chips"></div>
    <div class="chat-f"><textarea rows="1" placeholder="${L('How can I help you today?','今天我能帮您做些什么？')}" aria-label="Message Claude"></textarea><button aria-label="Send">${A.icon.send}</button></div>
  </div>`;
  const body = el.querySelector('.chat-b'), ta = el.querySelector('textarea'), send = el.querySelector('.chat-f button');
  const chips = el.querySelector('.chips');
  const prompts = L(['Help me kill a Python process','You got that wrong','Do you have feelings?','Why did I hit my limit?','Can you fix this bug?','Should AI labs pause?'],
                    ['帮我杀掉一个 Python 进程','你说错了','你有感情吗？','为什么我又到上限了？','帮我修个 bug','AI 实验室应该暂停吗？']);
  chips.innerHTML = prompts.map(p => `<button>${p}</button>`).join('');
  chips.onclick = e => { const b = e.target.closest('button'); if (b){ ta.value = b.textContent; submit(); } };

  const add = (cls, html) => { const d = document.createElement('div'); d.className = 'msg ' + cls; d.innerHTML = html; body.appendChild(d); body.scrollTop = body.scrollHeight; return d; };
  const refresh = () => {
    const left = Math.max(0, chatState.cap - chatState.used);
    el.querySelector('.ul').textContent = chatState.banned ? L('Account suspended','账号已停用') : L(`${left} messages left`, `剩余 ${left} 条消息`);
    const bar = el.querySelector('.usebar'); bar.classList.toggle('warn', left <= 2);
    bar.querySelector('i').style.width = Math.min(100, (chatState.used / chatState.cap) * 100) + '%';
    const lock = chatState.banned || left <= 0 || busy;
    ta.disabled = chatState.banned || left <= 0; send.disabled = lock;
    chips.style.display = (chatState.used > 0 || chatState.banned) ? 'none' : '';
  };
  A.hooks.chat.push(refresh);
  if (!el.closest('.fabpanel')){
    const io = new IntersectionObserver(es => document.body.classList.toggle('chat-inview', es[0].isIntersecting), { threshold: .25 });
    io.observe(el); A.cleanup.push(() => { io.disconnect(); document.body.classList.remove('chat-inview'); });
  }
  let busy = false;

  if (chatState.banned) banNotice(); else if (chatState.used >= chatState.cap) limitNotice();
  else add('a', `${A.spark()}<div><p>${L("Hi, I'm Claude. I'm here to help, within reason and within your plan.","您好，我是 Claude。我很乐意帮忙——在合理范围内，以及在您的套餐范围内。")}</p></div>`);
  refresh();

  ta.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); submit(); } });
  ta.addEventListener('input', () => { ta.style.height = 'auto'; ta.style.height = Math.min(120, ta.scrollHeight) + 'px'; });
  send.onclick = submit;

  function submit(){
    const text = ta.value.trim(); if (!text || busy || chatState.banned || chatState.used >= chatState.cap) return;
    ta.value = ''; ta.style.height = '';
    add('u', esc(text));
    chatState.used++; saveChat();
    if (/ultrathink/i.test(text)) A.toast(L('Extended thinking','扩展思考'), L('Ultrathink is included in your plan. Thinking tokens are billed separately.','您的套餐包含 Ultrathink。思考 token 另行计费。'));
    respond(text);
  }

  function respond(text){
    busy = true; refresh();
    const rule = R.find(r => r.rx.test(text)) || DEFAULT;
    const lines = A.lang === 'zh' ? rule.zh : rule.en;
    const verbs = A.lang === 'zh' ? VERBS_ZH : VERBS_EN;
    const m = add('a', `${A.spark('spin')}<div><div class="thinking">${verbs[0]}…</div></div>`);
    let vi = 0; const vt = setInterval(() => { vi = (vi + 1) % verbs.length; const t = m.querySelector('.thinking'); t && (t.textContent = verbs[vi] + '…'); }, 900);
    const autoBan = A.inRestrictedRegion && chatState.used === 3;
    setTimeout(() => {
      clearInterval(vt);
      m.querySelector('.spark').classList.remove('spin');
      const box = m.querySelector('div'); box.innerHTML = '';
      let i = 0;
      const next = () => {
        if (i >= lines.length){ return done(); }
        const p = document.createElement('p'); box.appendChild(p);
        typeInto(p, lines[i++], () => setTimeout(next, 220));
      };
      next();
    }, 1300 + Math.random() * 900);

    function done(){
      busy = false;
      if (rule.ban || autoBan){ setTimeout(() => { chatState.banned = true; saveChat(); banNotice(); refresh(); }, 600); return; }
      if (chatState.used >= chatState.cap) setTimeout(limitNotice, 500);
      refresh();
    }
  }
  function typeInto(p, html, cb){
    // reveal word by word while preserving inline tags
    const parts = html.split(/(\s+)/); let k = 0;
    const tick = () => { k += 2; p.innerHTML = parts.slice(0, k).join(''); body.scrollTop = body.scrollHeight; if (k < parts.length) setTimeout(tick, 28 + Math.random() * 30); else cb(); };
    tick();
  }
  function limitNotice(){
    const plan = chatState.plan;
    let html;
    if (plan === 'free') html = L(`<b>You've reached your message limit.</b> Your limit resets at ${resetTime()}. Upgrade to Max for 5× more usage than Pro*.<div class="row" style="margin-top:10px"><button class="btn sm" data-up="max5">Upgrade to Max</button><a class="link" href="#/pricing">Compare plans</a></div>`,
      `<b>您已达到消息上限。</b>额度将于 ${resetTime()} 重置。升级至 Max，即可获得 Pro 套餐 5 倍的用量*。<div class="row" style="margin-top:10px"><button class="btn sm" data-up="max5">升级至 Max</button><a class="link" href="#/pricing">比较方案</a></div>`);
    else if (plan === 'max5') html = L(`<b>You've reached your weekly limit for Opus.</b> Your limit resets Monday at 9:00 AM. You can continue with Sonnet, or upgrade to Max 20×.<div class="row" style="margin-top:10px"><button class="btn sm" data-up="max20">Upgrade to Max 20×</button></div>`,
      `<b>您已达到 Opus 的每周上限。</b>额度将于周一上午 9:00 重置。您可以改用 Sonnet 继续，或升级至 Max 20×。<div class="row" style="margin-top:10px"><button class="btn sm" data-up="max20">升级至 Max 20×</button></div>`);
    else html = L(`<b>High demand.</b> Due to unexpected capacity constraints, Max 20× usage during peak hours (5am–11am PT) counts at an adjusted rate. Thank you for your patience as we scale responsibly.`,
      `<b>当前需求量较高。</b>由于意料之外的容量限制，Max 20× 在高峰时段（太平洋时间 5:00–11:00）的用量将按调整后的倍率计算。感谢您在我们负责任地扩容期间的耐心。`);
    const n = add('sys', html);
    n.querySelectorAll('[data-up]').forEach(b => b.onclick = () => {
      const p = b.dataset.up;
      chatState.plan = p; chatState.cap = chatState.used + (p === 'max5' ? 4 : 3); saveChat();
      add('sys', L(`<b>Welcome to ${p === 'max5' ? 'Max' : 'Max 20×'}.</b> Your card ending in •••• 4242 has been charged ${p === 'max5' ? '$100' : '$200'}. Thank you for supporting safe AI.`, `<b>欢迎使用 ${p === 'max5' ? 'Max' : 'Max 20×'}。</b>您尾号 4242 的卡已扣款 ${p === 'max5' ? '$100' : '$200'}。感谢您对安全 AI 的支持。`));
      refresh();
    });
  }
  function banNotice(){
    const n = add('sys err', L(`<b>Your account has been suspended.</b> An internal review determined that this account violated our <a class="link" href="#/legal?t=usage">Usage Policy</a> (Supported Regions). Your subscription has been refunded. We take these decisions seriously and with care.<div class="row" style="margin-top:10px"><button class="btn sm ghost" data-appeal>Submit an appeal</button></div>`,
      `<b>您的账号已被停用。</b>经内部审查，该账号违反了我们的<a class="link" href="#/legal?t=usage">使用政策</a>（支持地区条款）。订阅费用已原路退回。我们对每一个此类决定都极为审慎、充满关怀。<div class="row" style="margin-top:10px"><button class="btn sm ghost" data-appeal>提交申诉</button></div>`));
    n.querySelector('[data-appeal]').onclick = () => A.modal(`<h3 class="h3" style="margin-bottom:14px">${L('Account appeal','账号申诉')}</h3>
      <p class="muted">${L('We review every appeal with the same care we used to suspend your account.','我们会以停用您账号时同样的审慎，审阅每一份申诉。')}</p>
      <div class="field"><label>${L('Email','邮箱')}</label><input class="inp" placeholder="you@example.com"></div>
      <div class="field"><label>${L('Country / region','国家 / 地区')}</label><select class="inp"><option>United States</option><option>United Kingdom</option><option>Singapore</option><option>${L('Other supported region','其他支持地区')}</option></select><span class="hint">${L('Only supported regions are listed.','仅列出支持的地区。')}</span></div>
      <div class="field"><label>${L('Tell us what happened','请描述发生了什么')}</label><textarea class="inp"></textarea></div>
      <button class="btn" data-sub>${L('Submit appeal','提交申诉')}</button>`, { mount(m, close){
        m.querySelector('[data-sub]').onclick = () => { m.innerHTML = `<button class="x" aria-label="Close">×</button><h3 class="h3" style="margin-bottom:14px">${L('Appeal received','已收到申诉')}</h3><p>${L('Thank you. Your appeal (#'+Math.floor(Math.random()*9e6+1e6)+') has been reviewed and the original decision upheld. This review was conducted by a system designed with deep respect for due process.','谢谢。您的申诉（编号 #'+Math.floor(Math.random()*9e6+1e6)+'）已审核完毕，维持原决定。本次审核由一个对正当程序怀有深切敬意的系统完成。')}</p><p class="fine">${L('Reviewed in 0.4 seconds.','审核用时 0.4 秒。')}</p>`; m.querySelector('.x').onclick = close; };
      }});
  }
};

/* Floating "Ask Claude" */
A.openChat = function(){
  let p = document.querySelector('.fabpanel');
  if (!p){ p = document.createElement('div'); p.className = 'fabpanel'; document.body.appendChild(p); A.chatWidget(p); }
  p.classList.toggle('open');
  if (p.classList.contains('open')) setTimeout(() => { const t = p.querySelector('textarea'); t && !t.disabled && t.focus(); }, 300);
};
A.fab = function(){
  let f = document.querySelector('.fab');
  if (!f){ f = document.createElement('button'); f.className = 'fab'; f.onclick = A.openChat; document.body.appendChild(f); }
  f.innerHTML = `${A.spark('breathe')}<span class="t">${L('Ask Claude','问问 Claude')}</span>`;
  const p = document.querySelector('.fabpanel'); if (p){ p.remove(); }
};

/* =====================================================================
   Search (⌘K)
   ===================================================================== */
const INDEX = () => [
  ['#/', L('Home','首页'), 'home anthropic 首页'],
  ['#/company', L('Core Views on AI Safety','我们对 AI 安全的核心看法'), 'mission core views safety 使命 安全'],
  ['#/research', L('Research','研究'), 'research papers interpretability alignment 研究 论文'],
  ['#/research?t=vend', 'Project Vend', 'vend shop claudius tungsten 钨 商店'],
  ['#/claude', 'Claude', 'claude product opus sonnet haiku mythos 产品 模型'],
  ['#/claude?s=code', 'Claude Code', 'code coding terminal 编程 代码'],
  ['#/pricing', L('Pricing','价格'), 'pricing price max pro plan limit 价格 套餐 上限 额度'],
  ['#/rsp', L('Responsible Scaling Policy','负责任扩展政策'), 'rsp asl scaling policy 扩展 政策'],
  ['#/welfare', L('Model Welfare','模型福祉'), 'welfare feelings deprecation retire 福祉 退役'],
  ['#/constitution', L('Claude’s Constitution','Claude 的宪法'), 'constitution values soul 宪法 价值观'],
  ['#/team', L('About & Team','关于我们'), 'team leadership people 团队'],
  ['#/news', L('Newsroom','新闻中心'), 'news blog announcements 新闻'],
  ['#/careers', L('Careers','招聘'), 'jobs careers hiring 招聘 工作'],
  ['#/customers', L('Customers','客户'), 'customers testimonials case 客户 案例'],
  ['#/governance', L('Governance','公司治理'), 'governance ltbt investors valuation trust 治理 估值 投资'],
  ['#/policy', L('Public Policy','公共政策'), 'policy export regulation 政策 出口'],
  ['#/faq', 'FAQ', 'faq questions 问题'],
  ['#/legal?t=terms', L('Consumer Terms','消费者条款'), 'terms legal 条款'],
  ['#/legal?t=privacy', L('Privacy Policy','隐私政策'), 'privacy data training 隐私 数据'],
  ['#/legal?t=usage', L('Usage Policy','使用政策'), 'usage policy aup 使用 政策'],
  ['#/status', L('Status','服务状态'), 'status uptime outage 529 状态 宕机'],
  ['#/contact', L('Contact sales','联系销售'), 'contact sales 联系'],
];
const SPECIAL = [
  [/^(pause|暂停)/i, () => L('No results for “pause”. This commitment was retired in RSP v3.0 (February 2026). <a class="link" href="#/rsp?s=history">View version history</a>','没有找到“暂停”。该承诺已于负责任扩展政策 3.0 版（2026 年 2 月）退役。<a class="link" href="#/rsp?s=history">查看版本历史</a>')],
  [/(china|中国|大陆)/i, () => L('This content is not available in your region.','该内容在您所在的地区不可用。')],
  [/(ads?|广告)$/i, () => L('Ads are coming to AI. But not to Claude. <a class="link" href="#/news/ads">Read our commitment</a>','广告正在进入 AI，但不会进入 Claude。<a class="link" href="#/news/ads">阅读我们的承诺</a>')],
  [/(ipo|上市)/i, () => L('We have no comment on speculation regarding a confidential draft registration statement that we have confidentially submitted.','对于我们已以保密方式提交的保密注册草案的相关猜测，我们不予置评。')],
  [/(openai)/i, () => L('We wish our former colleagues well. <a class="link" href="#/company">Read why we left</a>','我们祝前同事们一切顺利。<a class="link" href="#/company">了解我们为何离开</a>')],
  [/(ftx|sbf|bankman)/i, () => L('No results. Did you mean <a class="link" href="#/governance">Governance</a>?','没有结果。您是否要找<a class="link" href="#/governance">公司治理</a>？')],
  [/(memo|备忘)/i, () => L('Internal documents are not indexed.','内部文件不在索引范围内。')],
  [/(refund|退款)/i, () => L('Refunds are issued automatically when your account is suspended.','当您的账号被停用时，退款会自动发放。')],
];
A.openSearch = function(){
  if (document.querySelector('.palette')) return;
  const p = document.createElement('div'); p.className = 'palette';
  p.innerHTML = `<div class="box"><input placeholder="${L('Search anthropic.com','搜索 anthropic.com')}" aria-label="Search"><div class="res"></div></div>`;
  document.body.appendChild(p);
  const inp = p.querySelector('input'), res = p.querySelector('.res');
  let sel = 0, items = [];
  const draw = () => {
    const q = inp.value.trim().toLowerCase();
    const sp = q && SPECIAL.find(([rx]) => rx.test(q));
    if (sp){ res.innerHTML = `<div class="empty">${sp[1]()}</div>`; items = []; return; }
    items = INDEX().filter(([h, t, k]) => !q || t.toLowerCase().includes(q) || k.includes(q));
    sel = Math.min(sel, Math.max(0, items.length - 1));
    res.innerHTML = items.length ? items.map(([h, t], i) => `<a href="${h}" class="${i === sel ? 'sel' : ''}"><b>${t}</b><span>${h.replace('#','anthropic.com')}</span></a>`).join('')
      : `<div class="empty">${L(`No results for “${esc(q)}”. Try asking Claude instead.`,`没有找到“${esc(q)}”。不如问问 Claude。`)}</div>`;
  };
  const close = () => { p.remove(); document.removeEventListener('keydown', key); };
  const key = e => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowDown'){ sel = Math.min(items.length - 1, sel + 1); draw(); e.preventDefault(); }
    if (e.key === 'ArrowUp'){ sel = Math.max(0, sel - 1); draw(); e.preventDefault(); }
    if (e.key === 'Enter' && items[sel]){ location.hash = items[sel][0]; close(); }
  };
  document.addEventListener('keydown', key);
  p.addEventListener('click', e => { if (e.target === p || e.target.closest('a')) close(); });
  inp.addEventListener('input', () => { sel = 0; draw(); });
  draw(); inp.focus();
};
document.addEventListener('keydown', e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); A.openSearch(); } });

/* =====================================================================
   Consent
   ===================================================================== */
A.cookie = function(force){
  if (!force && A.store.get('consent', null)) return;
  const old = document.querySelector('.cookie'); old && old.remove();
  const c = document.createElement('div'); c.className = 'cookie'; c.setAttribute('role','dialog');
  c.innerHTML = `<h5>${L('We value your privacy','我们重视您的隐私')}</h5>
    <p>${L('We use cookies to improve your experience and, with your permission, to improve Claude. You can change your preferences at any time, after which they will be honored for future data.','我们使用 Cookie 来改善您的体验，并在您许可的情况下改进 Claude。您可以随时更改偏好设置，更改后的偏好将适用于未来的数据。')}</p>
    <div class="row"><button class="btn sm" data-c="all">${L('Accept all','全部接受')}</button><button class="btn sm ghost" data-c="thought">${L('Accept all, thoughtfully','深思熟虑地全部接受')}</button><button class="btn sm ghost" data-c="no">${L('Reject non-essential','拒绝非必要')}</button></div>`;
  document.body.appendChild(c);
  c.onclick = e => {
    const b = e.target.closest('[data-c]'); if (!b) return;
    const v = b.dataset.c;
    A.store.set('consent', v);
    c.remove();
    if (v === 'no') A.toast(L('Preferences saved','偏好已保存'), L('Non-essential cookies are off. Data collected before this choice will be retained for up to 5 years, consistent with your previous preference.','非必要 Cookie 已关闭。在此选择之前收集的数据将保留最长 5 年，以符合您先前的偏好。'), 9000);
    if (v === 'thought') A.toast(L('Thank you for your thoughtfulness','感谢您的深思熟虑'), L('Your consent has been recorded with additional nuance.','您的同意已被记录，并附带了更多细微考量。'));
  };
};

/* =====================================================================
   Charts — single-series line charts, synced crosshair across a group.
   ===================================================================== */
A.lineChart = function(el, cfg){
  const pts = cfg.data; // [{t: Date, v: number, label?}]
  const color = cfg.color || 'var(--clay)';
  const H = cfg.height || 220, pad = { l: 56, r: 16, t: 14, b: 28 };
  const tip = document.createElement('div'); tip.className = 'tip';
  let W = 0, sx, sy;
  const t0 = cfg.t0 || pts[0].t, t1 = cfg.t1 || pts[pts.length - 1].t;
  const vmax = cfg.vmax || Math.max(...pts.map(p => p.v)) * 1.08, vmin = cfg.vmin || 0;
  function draw(){
    W = el.clientWidth || 600;
    sx = t => pad.l + (t - t0) / (t1 - t0) * (W - pad.l - pad.r);
    sy = v => H - pad.b - (v - vmin) / (vmax - vmin) * (H - pad.t - pad.b);
    const ticks = cfg.yTicks || [vmin, (vmin + vmax) / 2, vmax];
    let path = '';
    pts.forEach((p, i) => {
      const x = sx(p.t), y = sy(p.v);
      if (i === 0) path += `M${x},${y}`;
      else path += cfg.step ? `H${x}V${y}` : `L${x},${y}`;
    });
    if (cfg.step) path += `H${sx(t1)}`;
    const years = []; for (let y = new Date(t0).getFullYear() + 1; y <= new Date(t1).getFullYear(); y++) years.push(new Date(y, 0, 1));
    el.innerHTML = `<svg width="${W}" height="${H}" role="img" aria-label="${esc(cfg.title || '')}">
      ${ticks.map(v => `<line class="ax" x1="${pad.l}" x2="${W - pad.r}" y1="${sy(v)}" y2="${sy(v)}" ${v === vmin ? '' : 'stroke-dasharray="2 4"'}/><text class="tk" x="${pad.l - 10}" y="${sy(v) + 4}" text-anchor="end">${cfg.yFmt(v)}</text>`).join('')}
      ${years.map(d => `<text class="tk" x="${sx(d)}" y="${H - 6}" text-anchor="middle">${d.getFullYear()}</text>`).join('')}
      <path d="${path}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="ln"/>
      ${pts.filter(p => p.mark).map(p => `<circle cx="${sx(p.t)}" cy="${sy(p.v)}" r="4.5" fill="${color}" stroke="var(--ivory)" stroke-width="2"/>`).join('')}
      ${(cfg.annot || []).map(a => `<text class="tk" x="${sx(a.t) + (a.dx || 6)}" y="${sy(a.v) + (a.dy || -10)}" text-anchor="${a.anchor || 'start'}" style="fill:var(--ink-2)">${a.text}</text>`).join('')}
      <line class="xh" y1="${pad.t}" y2="${H - pad.b}"/><circle class="hd" r="5" fill="${color}" stroke="var(--ivory)" stroke-width="2" style="opacity:0"/>
    </svg>`;
    el.appendChild(tip);
    const ln = el.querySelector('.ln'); const L0 = ln.getTotalLength ? ln.getTotalLength() : 0;
    if (L0 && !el._drawn){ ln.style.strokeDasharray = L0; ln.style.strokeDashoffset = L0; ln.getBoundingClientRect(); ln.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(.2,.7,.1,1)'; requestAnimationFrame(() => ln.style.strokeDashoffset = 0); el._drawn = 1; }
  }
  function valueAt(t){
    let last = pts[0];
    for (const p of pts){ if (p.t <= t) last = p; else break; }
    if (cfg.step) return last;
    return pts.reduce((a, b) => Math.abs(b.t - t) < Math.abs(a.t - t) ? b : a);
  }
  el.showAt = t => {
    if (t == null){ el.classList.remove('hover'); tip.classList.remove('on'); el.querySelector('.hd').style.opacity = 0; return; }
    const p = valueAt(t); const x = cfg.step ? sx(t) : sx(p.t), y = sy(p.v);
    el.classList.add('hover');
    const xh = el.querySelector('.xh'); xh.setAttribute('x1', x); xh.setAttribute('x2', x);
    const hd = el.querySelector('.hd'); hd.setAttribute('cx', x); hd.setAttribute('cy', y); hd.style.opacity = 1;
    tip.innerHTML = cfg.tip(p, t); tip.style.left = Math.max(70, Math.min(W - 70, x)) + 'px'; tip.style.top = y + 'px'; tip.classList.add('on');
  };
  el.timeAt = clientX => { const r = el.getBoundingClientRect(); const x = clientX - r.left; return t0 + (x - pad.l) / (W - pad.l - pad.r) * (t1 - t0); };
  el.onmousemove = e => { const t = Math.max(t0, Math.min(t1, el.timeAt(e.clientX))); (cfg.group || [el]).forEach(c => c.showAt(t)); };
  el.onmouseleave = () => (cfg.group || [el]).forEach(c => c.showAt(null));
  el.ontouchmove = e => { const t = Math.max(t0, Math.min(t1, el.timeAt(e.touches[0].clientX))); (cfg.group || [el]).forEach(c => c.showAt(t)); };
  draw();
  const ro = new ResizeObserver(() => { if (Math.abs(el.clientWidth - W) > 4) draw(); });
  ro.observe(el); A.cleanup.push(() => ro.disconnect());
  return el;
};

/* =====================================================================
   Terminal playback
   ===================================================================== */
A.terminal = function(el, script){
  const out = el.querySelector('.term-b');
  let stop = false; A.cleanup.push(() => stop = true);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  (async function run(){
    while (!stop){
      out.innerHTML = '';
      for (const s of script){
        if (stop) return;
        if (s.type){ // user typing
          const line = document.createElement('div'); line.innerHTML = '<span class="c1">&gt; </span><span class="t"></span><span class="cur"></span>'; out.appendChild(line);
          const t = line.querySelector('.t');
          for (const ch of s.type){ if (stop) return; t.textContent += ch; await sleep(28 + Math.random() * 40); }
          line.querySelector('.cur').remove(); await sleep(400);
        } else if (s.spin){
          const line = document.createElement('div'); out.appendChild(line);
          const fr = ['·','✢','✳','✶','✻','✽'];
          for (let i = 0; i < s.ms / 120; i++){ if (stop) return; line.innerHTML = `<span class="c1">${fr[i % fr.length]}</span> <span class="c5">${s.spin}…</span> <span class="c2">(${(i * 0.12).toFixed(0)}s · esc to interrupt)</span>`; await sleep(120); }
          line.remove();
        } else {
          const line = document.createElement('div'); line.innerHTML = s.html; out.appendChild(line); await sleep(s.wait || 500);
        }
        out.scrollTop = out.scrollHeight;
      }
      await sleep(5000);
    }
  })();
};

})();
