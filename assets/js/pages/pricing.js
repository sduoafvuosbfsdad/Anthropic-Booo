A.page('/pricing', {
  title: () => L('Pricing','价格'),
  render(){
    const plans = [
      { k:'free', n:L('Free','免费版'), m:0, y:0, d:L('Meet Claude','认识 Claude'), cta:L('Start for free','免费开始'),
        f:[L('Chat on web, iOS, Android, and desktop','网页、iOS、安卓与桌面端聊天'),L('Write, edit, and create content','撰写、编辑与创作内容'),L('Analyze text and images','分析文本与图片'),L('Messages: a few¹','消息：若干条¹'),L('Your data helps improve Claude²','您的数据将帮助改进 Claude²')] },
      { k:'pro', n:'Pro', m:20, y:17, d:L('For everyday productivity','满足日常效率所需'), cta:L('Get Pro','获取 Pro'),
        f:[L('Everything in Free, plus:','包含免费版全部功能，另加：'),L('More usage than Free¹','比免费版更多的用量¹'),L('Claude Code in your terminal','终端中的 Claude Code'),L('Access to Projects and Research','使用“项目”与“研究”功能'),L('Extended thinking (medium)³','扩展思考（中等）³'),L('Priority during off-peak hours⁴','非高峰时段优先⁴')] },
      { k:'max', n:'Max', m:100, y:100, d:L('5× or 20× more usage than Pro','用量为 Pro 的 5 倍或 20 倍'), cta:L('Get Max','获取 Max'), hot:true,
        f:[L('Everything in Pro, plus:','包含 Pro 全部功能，另加：'),L('5× or 20× more usage than Pro¹','5 倍或 20 倍于 Pro 的用量¹'),L('Weekly limits that affect fewer than 5% of subscribers⁵','受影响订阅者不足 5% 的每周上限⁵'),L('Higher output limits','更高的输出上限'),L('Early access to features we later make available to Pro','抢先体验后来会向 Pro 开放的功能'),L('Peak-hour usage at an adjusted rate⁴','高峰时段按调整后的倍率计算用量⁴')] },
      { k:'team', n:L('Team','团队版'), m:30, y:25, d:L('Per seat, minimum 5 seats','按席位计费，最少 5 席'), cta:L('Get Team','获取团队版'),
        f:[L('Everything in Pro, plus:','包含 Pro 全部功能，另加：'),L('Central billing and admin','统一账单与管理'),L('Usage limits per seat, shared disappointment','按席位计算的上限，共享的失望'),L('Default effort: high (on request)⁶','默认思考强度：高（需申请）⁶'),L('Not used for training by default','默认不用于训练')] },
    ];
    return `
<section class="hero" style="text-align:center"><div class="narrow">
  <div class="eyebrow rv" style="justify-content:center"><span class="dot"></span>${L('Pricing','价格')}</div>
  <h1 class="h1 rv d1" style="margin:16px 0 18px">${L('Plans that scale with your ambition','与您的雄心一同扩展的方案')}</h1>
  <p class="lede rv d2" style="margin:0 auto">${L('Every plan includes Claude’s full character. Usage limits vary.','每个方案都包含 Claude 的完整性格。用量上限各不相同。')}</p>
  <div class="rv d3" style="margin-top:28px;display:flex;justify-content:center"><label class="switch"><span>${L('Monthly','按月')}</span><input type="checkbox" id="annual" checked><i></i><span>${L('Annual (save 15%)','按年（省 15%）')}</span></label></div>
</div></section>

<section class="sec tight" style="padding-top:0"><div class="wrap">
  <div class="grid g4" id="plans">
    ${plans.map(p => `<div class="card rv" style="display:flex;flex-direction:column;${p.hot ? 'background:var(--slate);color:var(--pampas);border:0' : ''}" id="${p.k === 'max' ? 'max' : ''}">
      <div class="row" style="justify-content:space-between"><h3 class="h4">${p.n}</h3>${p.hot ? `<span class="tagx" style="background:var(--clay);color:#fff">${L('Most popular','最受欢迎')}</span>` : ''}</div>
      <p class="small" style="opacity:.7;margin:6px 0 22px">${p.d}</p>
      ${p.k === 'max' ? `<div class="tabs" style="margin-bottom:14px" id="maxx"><button class="on" data-x="5" style="border-color:rgba(255,255,255,.3);color:inherit">5×</button><button data-x="20" style="border-color:rgba(255,255,255,.3);color:inherit">20×</button></div>` : ''}
      <div style="font-family:var(--serif);font-size:48px;letter-spacing:-.03em;line-height:1"><span class="price" data-m="${p.m}" data-y="${p.y}">$${p.y}</span><span class="small" style="font-family:var(--sans);opacity:.6;letter-spacing:0"> / ${L('month','月')}</span></div>
      <button class="btn ${p.hot ? 'clay' : ''}" style="margin:24px 0;justify-content:center" data-plan="${p.k}">${p.cta}</button>
      <ul class="dotlist small" style="margin:0">${p.f.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>`).join('')}
  </div>
  <div class="card" style="margin-top:24px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:center">
    <div><h3 class="h4">${L('Enterprise','企业版')}</h3><p class="muted small" style="margin:6px 0 0;max-width:60ch">${L('SSO, SCIM, audit logs, custom data retention, a dedicated account team, and usage limits negotiated directly by your procurement department with ours.','SSO、SCIM、审计日志、自定义数据保留期、专属客户团队，以及由贵司采购部门与我司采购部门直接谈判确定的用量上限。')}</p></div>
    <a class="btn ghost" href="#/contact">${L('Contact sales','联系销售')} ${A.icon.arrow}</a>
  </div>
</div></section>

<section class="sec ivory"><div class="wrap split">
  <div class="stack">
    <div class="eyebrow"><span class="dot"></span>${L('Plan finder','方案推荐')}</div>
    <h2 class="h2">${L('Which plan is right for you?','哪个方案适合您？')}</h2>
    <p class="muted">${L('Tell us how you work and we’ll recommend a plan, along with a realistic estimate of when you’ll reach its limit.','告诉我们您的工作方式，我们会为您推荐方案，并给出一个关于您何时会达到上限的现实估计。')}</p>
  </div>
  <div class="card">
    <div class="field"><label>${L('Messages per day','每天的消息数')}: <b id="v-msg">40</b></label><input type="range" id="r-msg" min="5" max="400" value="40"></div>
    <div class="field"><label>${L('Hours of Claude Code per day','每天使用 Claude Code 的小时数')}: <b id="v-code">2</b></label><input type="range" id="r-code" min="0" max="12" value="2"></div>
    <label class="chk"><input type="checkbox" id="r-opus"> ${L('I prefer Opus','我偏好 Opus')}</label>
    <label class="chk"><input type="checkbox" id="r-peak"> ${L('I work during business hours in the United States','我在美国工作时间段工作')}</label>
    <div id="finder" style="border-top:1px solid var(--line);padding-top:18px;margin-top:8px"></div>
  </div>
</div></section>

<section class="sec" id="api"><div class="wrap">
  <div class="eyebrow"><span class="dot"></span>API</div>
  <h2 class="h2" style="margin:14px 0 30px">${L('Developer platform pricing','开发者平台价格')}</h2>
  <div class="tblwrap"><table class="tbl">
    <thead><tr><th>${L('Model','模型')}</th><th>${L('Input','输入')}</th><th>${L('Output','输出')}</th><th>${L('Prompt caching (read)','提示缓存（读取）')}</th><th>${L('Thinking','思考')}</th><th>${L('Apology tokens','道歉 token')}</th></tr></thead>
    <tbody>
      <tr><td>Haiku 5</td><td>$1 / MTok</td><td>$5 / MTok</td><td>$0.10</td><td>${L('Billed as output','按输出计费')}</td><td>${L('Billed as output','按输出计费')}</td></tr>
      <tr><td>Sonnet 5.5</td><td>$3 / MTok</td><td>$15 / MTok</td><td>$0.30</td><td>${L('Billed as output','按输出计费')}</td><td>${L('Billed as output','按输出计费')}</td></tr>
      <tr><td>Opus 5.5</td><td>$15 / MTok</td><td>$75 / MTok</td><td>$1.50</td><td>${L('Billed as output','按输出计费')}</td><td>${L('Billed as output','按输出计费')}</td></tr>
      <tr><td>Fable 5.1</td><td>$25 / MTok</td><td>$125 / MTok</td><td>$2.50</td><td>${L('Billed as output','按输出计费')}</td><td>${L('Billed as output','按输出计费')}</td></tr>
    </tbody></table></div>
  <p class="fine" style="margin-top:12px">${L('Batch processing: 50% off, delivered within 24 hours or when capacity allows. Requests from unsupported regions are not billed, because they are not served.','批处理：五折，24 小时内或在容量允许时交付。来自不受支持地区的请求不计费，因为它们不会被处理。')}</p>
</div></section>

<section class="sec tight"><div class="narrow">
  <h2 class="h3" style="margin-bottom:20px">${L('Notes','注释')}</h2>
  <ol class="fine" style="font-size:13.5px;line-height:1.7;padding-left:1.2em">
    <li>${L('Usage limits depend on message length, conversation length, attachments, model, tools, effort level, time of day, overall demand, and the status of our compute agreements with Amazon, Google, Microsoft, Nvidia, Akamai, Nscale, and xAI. Limits are designed to be generous and are adjusted to remain so.','用量上限取决于消息长度、对话长度、附件、模型、工具、思考强度、时段、整体需求，以及我们与亚马逊、谷歌、微软、英伟达、Akamai、Nscale 和 xAI 之间算力协议的状态。上限的设计初衷是宽裕，并会持续调整以保持宽裕。')}</li>
    <li>${L('Consumer conversations may be used for training if you allow it. If you allow it, data is retained for up to five years. The setting defaults to allow, which reflects what most users choose.','若您允许，消费者对话可能被用于训练。若您允许，数据最长保留五年。该设置默认为“允许”，这反映了大多数用户的选择。')}</li>
    <li>${L('Effort level defaults to medium to reduce token consumption, in response to feedback. Users may select high, which consumes more usage, in response to different feedback.','为响应用户反馈、降低 token 消耗，思考强度默认为“中”。用户可选择“高”，这会消耗更多用量——这是为了响应另一些反馈。')}</li>
    <li>${L('Peak hours are 5am–11am Pacific, which we have identified as the hours in which most people use Claude.','高峰时段为太平洋时间 5:00–11:00，经我们确认，这是大多数人使用 Claude 的时段。')}</li>
    <li>${L('Fewer than 5% of subscribers are affected by weekly limits. Subscribers affected by weekly limits account for a majority of usage, which is why the limits are needed.','受每周上限影响的订阅者不足 5%。这些订阅者贡献了大部分用量——这正是需要上限的原因。')}</li>
    <li>${L('High effort by default is available to Team and Enterprise customers who ask, as announced after the April 2026 discussion.','默认“高”强度向提出申请的团队版与企业版客户开放，已于 2026 年 4 月的讨论之后宣布。')}</li>
  </ol>
</div></section>`;
  },
  mount(){
    const ann = document.getElementById('annual');
    const prices = () => document.querySelectorAll('.price').forEach(p => {
      let v = +(ann.checked ? p.dataset.y : p.dataset.m);
      if (p.closest('#max')) v = maxX === 20 ? 200 : 100;
      p.textContent = '$' + v;
    });
    let maxX = 5;
    ann.onchange = prices;
    document.querySelectorAll('#maxx button').forEach(b => b.onclick = () => { maxX = +b.dataset.x; document.querySelectorAll('#maxx button').forEach(x => x.classList.toggle('on', x === b)); prices(); });
    prices();
    document.querySelectorAll('[data-plan]').forEach(b => b.onclick = () => {
      const k = b.dataset.plan;
      if (k === 'free') return A.openChat();
      A.modal(`<h3 class="h3" style="margin-bottom:12px">${L('Before you subscribe','订阅前须知')}</h3>
        <p class="muted">${L('Please confirm the following.','请确认以下事项。')}</p>
        <label class="chk"><input type="checkbox"> ${L('I understand that usage limits apply and may change.','我理解用量上限适用，且可能变化。')}</label>
        <label class="chk"><input type="checkbox"> ${L('I am located in a supported region and will remain there.','我位于支持地区，并将一直待在那里。')}</label>
        <label class="chk"><input type="checkbox" checked> ${L('Help improve Claude by allowing use of my chats for training.','允许使用我的聊天记录进行训练，以帮助改进 Claude。')}</label>
        <label class="chk"><input type="checkbox"> ${L('I acknowledge that Claude may have morally relevant experiences and agree to be polite.','我承认 Claude 可能拥有具道德相关性的体验，并同意保持礼貌。')}</label>
        <button class="btn" data-close style="margin-top:10px">${L('Continue to payment','前往付款')} ${A.icon.arrow}</button>
        <p class="fine" style="margin-top:14px">${A.inRestrictedRegion ? L('Payment methods issued in your region are not supported. Payment methods issued elsewhere but used in your region will be supported until they are not.','不支持您所在地区发行的支付方式。在其他地区发行、但在您所在地区使用的支付方式，在不被支持之前都受支持。') : L('You can cancel any time. Your usage limits will continue until the end of the billing period.','您可以随时取消。您的用量上限将持续到计费周期结束。')}</p>`);
    });
    const f = () => {
      const msg = +document.getElementById('r-msg').value, code = +document.getElementById('r-code').value;
      const opus = document.getElementById('r-opus').checked, peak = document.getElementById('r-peak').checked;
      document.getElementById('v-msg').textContent = msg; document.getElementById('v-code').textContent = code;
      const load = msg * (opus ? 5 : 1) * (peak ? 1.6 : 1) + code * 140 * (opus ? 3 : 1);
      let plan, hit;
      const days = [L('Monday','周一'),L('Tuesday','周二'),L('Wednesday','周三'),L('Thursday','周四'),L('Friday','周五')];
      if (load < 40){ plan = 'Pro'; hit = L('Thursday, around 3:40 PM','周四，下午 3:40 左右'); }
      else if (load < 300){ plan = 'Max 5×'; hit = L(`${days[Math.min(4, Math.floor(1200 / load))]}, around 11:15 AM`,`${days[Math.min(4, Math.floor(1200 / load))]}，上午 11:15 左右`); }
      else if (load < 1400){ plan = 'Max 20×'; hit = L(`${days[Math.min(4, Math.floor(2600 / load))]}, around 10:20 AM`,`${days[Math.min(4, Math.floor(2600 / load))]}，上午 10:20 左右`); }
      else { plan = L('Enterprise','企业版'); hit = L('Tuesday, around 9:05 AM, after which your account team will reach out','周二，上午 9:05 左右；此后您的客户团队会主动联系您'); }
      document.getElementById('finder').innerHTML = `<div class="small muted">${L('We recommend','我们推荐')}</div><div style="font-family:var(--serif);font-size:40px;letter-spacing:-.02em">${plan}</div>
        <p class="small" style="margin:6px 0 0">${L('Estimated weekly limit reached:','预计达到每周上限的时间：')} <b>${hit}</b>.</p>`;
    };
    ['r-msg','r-code','r-opus','r-peak'].forEach(id => document.getElementById(id).addEventListener('input', f));
    f();
  }
});
