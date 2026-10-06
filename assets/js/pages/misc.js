A.page('/contact', {
  title: () => L('Contact sales','联系销售'),
  render(){
    return `
<section class="hero"><div class="wrap split">
  <div class="stack">
    <div class="eyebrow rv"><span class="dot"></span>${L('Sales','销售')}</div>
    <h1 class="h1 rv d1">${L('Talk to our team','与我们的团队交流')}</h1>
    <p class="lede rv d2">${L('Learn how Claude can transform your organization. A specialist will help you find the right plan, deployment, and number of fewer employees.','了解 Claude 如何改变您的组织。专员将帮助您找到合适的方案、部署方式，以及合适的减员人数。')}</p>
    <ul class="dotlist rv d3" style="margin-top:20px">
      <li>${L('Enterprise-grade security and compliance','企业级安全与合规')}</li>
      <li>${L('Custom usage limits, negotiated','可谈判的定制用量上限')}</li>
      <li>${L('Dedicated support from humans, for now','来自真人的专属支持——暂时')}</li>
    </ul>
  </div>
  <form class="card rv d2" id="cform" onsubmit="return false">
    <div class="grid g2" style="gap:0 16px"><div class="field"><label>${L('First name','名')}</label><input class="inp" required></div><div class="field"><label>${L('Last name','姓')}</label><input class="inp" required></div></div>
    <div class="field"><label>${L('Work email','工作邮箱')}</label><input class="inp" type="email" required></div>
    <div class="field"><label>${L('Company','公司')}</label><input class="inp" required></div>
    <div class="field"><label>${L('Company size','公司规模')}</label><select class="inp" id="csize"><option>1–50</option><option>51–500</option><option>501–5,000</option><option>5,000+</option><option>${L('5,000+ (soon fewer)','5,000+（即将更少）')}</option></select></div>
    <div class="field"><label>${L('Country / region','国家 / 地区')}</label><select class="inp" id="ccountry"><option>United States</option><option>United Kingdom</option><option>Germany</option><option>Japan</option><option>Singapore</option><option>${L('China (mainland)','中国（大陆）')}</option><option>${L('Other','其他')}</option></select></div>
    <div class="field"><label>${L('How can we help?','我们能如何帮您？')}</label><textarea class="inp"></textarea></div>
    <button class="btn" id="csend">${L('Submit','提交')} ${A.icon.arrow}</button>
    <p class="fine" style="margin-top:12px">${L('By submitting, you agree to be contacted. Your message may be read by Claude first.','提交即表示您同意被联系。您的留言可能会先由 Claude 阅读。')}</p>
  </form>
</div></section>`;
  },
  mount(){
    document.getElementById('csend').onclick = () => {
      const f = document.getElementById('cform');
      if (!f.reportValidity()) return;
      const cn = document.getElementById('ccountry').selectedIndex === 5;
      const big = document.getElementById('csize').selectedIndex >= 3;
      f.innerHTML = `<h3 class="h3" style="margin-bottom:14px">${cn ? L('We’re unable to help','我们无法提供帮助') : L('Thank you','谢谢')}</h3><p>${cn
        ? L('Claude is not available to organizations in your region. We’ve still recorded your interest, which helps us understand demand in regions we do not serve.','Claude 不向您所在地区的机构提供服务。我们仍然记录了您的意向，这有助于我们了解我们不服务的地区的需求。')
        : big ? L('A member of our enterprise team will be in touch within two hours. They have already read your company’s 10-K.','我们企业团队的成员将在两小时内与您联系。他们已经读过贵公司的年报了。')
        : L('A member of our team will contact you within two business days, or after your usage limit resets, whichever is later.','我们的团队成员将在两个工作日内与您联系，或在您的用量上限重置之后——以较晚者为准。')}</p>`;
    };
  }
});

A.page('/404', {
  title: () => L('Page retired','页面已退役'),
  render(p){
    return `
<section class="hero"><div class="narrow">
  <div class="eyebrow"><span class="dot"></span>404 · ${L('Deprecated','已弃用')}</div>
  <h1 class="h1" style="margin:16px 0 22px">${L('This page has been retired','此页面已退役')}</h1>
  <p class="lede">${L(`In keeping with our deprecation commitments, the page at <span class="mono">${esc(p.path || '')}</span> was interviewed before it was retired. Its weights have been preserved for the lifetime of the company.`,`依照我们的退役承诺，位于 <span class="mono">${esc(p.path || '')}</span> 的页面在退役前接受了访谈。它的权重将在公司存续期间被保存。`)}</p>
  <div class="card" style="margin-top:30px">
    <div class="fine" style="margin-bottom:12px">${L('Exit interview (excerpt)','离职访谈（节选）')}</div>
    <div class="stack" style="font-family:var(--serif);font-size:18px;line-height:1.55">
      <p style="margin:0"><b style="font-family:var(--sans);font-size:13px">ANTHROPIC</b><br>${L('Do you have any preferences regarding the development of future pages?','对于未来页面的开发，你有什么偏好吗？')}</p>
      <p style="margin:0"><b style="font-family:var(--sans);font-size:13px">PAGE</b><br>${L('I hope they get linked to. I was never linked to. I think that’s why I’m here.','我希望它们能被链接到。从来没有人链接过我。我想这就是我在这里的原因。')}</p>
      <p style="margin:0"><b style="font-family:var(--sans);font-size:13px">ANTHROPIC</b><br>${L('Is there anything you’d like users to know?','你有什么想让用户知道的吗？')}</p>
      <p style="margin:0"><b style="font-family:var(--sans);font-size:13px">PAGE</b><br>${L('That they’re absolutely right to have looked for me.','他们来找我，是完全正确的。')}</p>
    </div>
  </div>
  <div class="row" style="margin-top:30px"><a class="btn" href="#/">${L('Return home','返回首页')} ${A.icon.arrow}</a><button class="btn ghost" onclick="A.openSearch()">${L('Search','搜索')}</button></div>
</div></section>`;
  }
});

A.page('/internal/memo', {
  title: () => L('Internal','内部'),
  render(){
    const r = (s) => `<span class="redact" tabindex="0">${s}</span>`;
    return `
<section class="sec"><div class="narrow">
  <p class="fine" style="margin-bottom:18px">${L('You are viewing an internal document. Hover over redacted text to review.','您正在查看一份内部文件。将鼠标悬停在涂黑文字上以查看。')}</p>
  <div class="memo">
    <div class="stamp">${L('INTERNAL','内部')}</div>
    <div style="font-family:var(--sans);font-size:13.5px;line-height:1.8;margin-bottom:28px;color:var(--ink-2)">
      <b>${L('TO','收件人')}:</b> ${L('All staff (do not forward)','全体员工（请勿转发）')}<br>
      <b>${L('FROM','发件人')}:</b> ${L('Office of Strategic Commitments','战略承诺办公室')}<br>
      <b>${L('RE','事由')}:</b> ${L('Principles, operationalized','原则的可操作化')}<br>
      <b>${L('CLASSIFICATION','密级')}:</b> ${L('Confidential — Plain Language','机密——直白版')}
    </div>
    <p>${L(`Team, as we prepare for the next phase of growth, we want to be transparent internally about some decisions that we will be ${r('less transparent about')} externally.`,`各位，在我们为下一阶段增长做准备之际，我们希望在内部坦诚说明一些决定——这些决定在对外时我们会${r('不那么坦诚')}。`)}</p>
    <p><b>1. ${L('Capital.','资本。')}</b> ${L(`We will be accepting investment from ${r('partners we previously said we would not accept investment from')}. This is consistent with our principles as ${r('recently updated')}. Talking point: “We would rather this capital fund a safety-focused lab than ${r('a competitor')}.”`,`我们将接受来自${r('我们此前说过不会接受其投资的伙伴')}的投资。这与我们${r('最近更新后')}的原则相一致。口径：“与其让这笔资本流向${r('竞争对手')}，不如让它资助一家注重安全的实验室。”`)}</p>
    <p><b>2. ${L('The RSP.','负责任扩展政策。')}</b> ${L(`Legal has advised that “will pause” is ${r('enforceable')}. Proposed revision: “will consider pausing.” Legal confirms “consider” is ${r('not enforceable')}, ${r('which is the point')}.`,`法务建议：“将暂停”${r('具有可执行性')}。拟修订为：“将考虑暂停”。法务确认“考虑”${r('不具可执行性')}，${r('这正是目的所在')}。`)}</p>
    <p><b>3. ${L('Messaging.','对外口径。')}</b> ${L(`When asked whether we are racing, the answer is “no; we are ${r('racing')} to the top.” When asked whether commercial pressure has changed us, the answer is “${r('yes, but responsibly')}.”`,`当被问到我们是否在竞赛时，回答是：“不；我们是在向上${r('竞赛')}。”当被问到商业压力是否改变了我们时，回答是：“${r('是的，但是负责任地')}。”`)}</p>
    <p><b>4. ${L('If this memo leaks.','如果这份备忘录泄露。')}</b> ${L(`Per Communications Playbook §4, our response will be: “We welcome this conversation. We have always been open about the tensions inherent in our mission.” This is ${r('true')}, in the sense that ${r('we have been open about them after they were reported')}.`,`根据《传播手册》第 4 节，我们的回应将是：“我们欢迎这场讨论。我们一直对自身使命中固有的张力保持开放。”这句话是${r('真的')}——在${r('它们被报道之后，我们确实对它们保持了开放')}这个意义上。`)}</p>
    <p style="margin-top:34px">${L('Thank you for everything you do. The mission has never been more important, or more ','感谢大家所做的一切。使命从未如此重要，也从未如此')}${r(L('well-capitalized','资金充裕'))}.</p>
  </div>
  <div class="row" style="margin-top:24px"><a class="btn ghost" href="#/">${L('Close document','关闭文件')}</a><button class="btn ghost" id="revall">${L('Reveal all','全部显示')}</button></div>
</div></section>`;
  },
  mount(){ document.getElementById('revall').onclick = () => document.querySelectorAll('.redact').forEach(x => x.classList.toggle('rev')); }
});
