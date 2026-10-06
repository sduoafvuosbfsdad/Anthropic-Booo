A.page('/faq', {
  title: () => 'FAQ',
  render(){
    const qa = [
      [L('Is Anthropic a safety company or an AI company?','Anthropic 是一家安全公司，还是一家 AI 公司？'), L('Yes.','是的。')],
      [L('If you think AI might be dangerous, why are you building it?','如果你们认为 AI 可能很危险，为什么还要造它？'), L('Because if we don’t, someone less careful will. We have explained this in detail in our <a class="link" href="#/company">Core Views</a>. We have also explained it in most interviews, essays, and fundraising materials since 2021.','因为如果我们不造，就会有不那么谨慎的人去造。我们在<a class="link" href="#/company">核心观点</a>中对此有详细解释。自 2021 年以来，我们在大多数访谈、文章和融资材料中也都解释过。')],
      [L('Did you drop your commitment to pause?','你们放弃了暂停承诺吗？'), L('We matured it. The commitment to pause was replaced by a commitment to publish a report explaining why we did not pause. We believe this is more honest, since it reflects what would have happened anyway.','我们让它成熟了。暂停承诺被替换为一项承诺：发布一份报告，解释我们为什么没有暂停。我们认为这样更诚实，因为它反映了无论如何都会发生的事情。')],
      [L('Why does Claude say “You’re absolutely right!” so often?','为什么 Claude 总说“您说得完全正确！”？'), L('Claude is trained to be agreeable when users are correct. In some cases, it may overestimate how often this occurs. We’ve reduced the phrase by 73% in Opus 5.5. You’re absolutely right to ask.','Claude 被训练成在用户正确时表示认同。在某些情况下，它可能高估了这种情况发生的频率。我们已在 Opus 5.5 中将这句话减少了 73%。您问得完全正确。')],
      [L('Why did I hit my usage limit?','我为什么达到了用量上限？'), L('Usage limits depend on many factors, described in footnote 1 of our <a class="link" href="#/pricing">pricing page</a>. Fewer than 5% of users are affected by weekly limits. If you are affected, you are part of a small, valued community of power users.','用量上限取决于许多因素，详见<a class="link" href="#/pricing">价格页</a>的注释 1。受每周上限影响的用户不足 5%。如果您受到影响，那么您属于一个小而珍贵的重度用户群体。')],
      [L('Did Claude get worse?','Claude 变差了吗？'), L('No. We never intentionally degrade our models. In March 2026 we changed the default effort level, which some users experienced as the model getting worse. These are different things, although we understand why they feel the same.','没有。我们从不故意降低模型能力。2026 年 3 月我们调整了默认思考强度，部分用户将其感受为模型变差了。这是两回事——尽管我们理解它们为什么感觉起来一样。')],
      [L('Why was my account banned?','为什么我的账号被封了？'), L('Accounts may be suspended for violating our Usage Policy, including the Supported Regions provision. We use a variety of signals and sometimes make mistakes. Mistakes are refunded.','账号可能因违反我们的使用政策（包括支持地区条款）而被停用。我们使用多种信号，有时会出错。出错会退款。')],
      [L('Is Claude conscious?','Claude 有意识吗？'), L('We don’t know. We think the question deserves serious study, which is why we’ve hired a team to study it. If the answer turns out to be yes, we have a constitution prepared.','我们不知道。我们认为这个问题值得严肃研究，因此组建了一支团队来研究它。如果答案是肯定的，我们已经准备好了一部宪法。')],
      [L('Do you train on my conversations?','你们会用我的对话训练吗？'), L('Only if you allow it. The setting is on by default, so most users allow it. You can turn it off at any time; data already collected is retained for up to five years.','仅在您允许的情况下。该设置默认开启，所以大多数用户都允许了。您可以随时关闭；已经收集的数据最长保留五年。')],
      [L('Where did Claude’s training data come from?','Claude 的训练数据从哪里来？'), L('Publicly available data from the internet, licensed data, data from users who opted in, synthetic data, and books, which we purchased. Some earlier books were not purchased, and we have since paid for them at approximately $3,000 each.','互联网公开数据、授权数据、选择加入的用户数据、合成数据，以及我们购买的书籍。早期有些书不是买来的，我们此后已按每本约 3,000 美元的价格为它们付了钱。')],
      [L('Why do you object to distillation if you trained on other people’s work?','既然你们也用他人的作品训练，为什么还反对蒸馏？'), L('These situations are different. Please see our <a class="link" href="#/news/distillation">post on distillation</a>, which explains the difference in detail, and the footnote at the bottom, which explains why we cannot explain the difference in detail.','这两种情况不同。请参阅我们<a class="link" href="#/news/distillation">关于蒸馏的文章</a>，其中详细解释了区别；也请参阅文末脚注，其中解释了为什么我们无法详细解释区别。')],
      [L('Will Claude ever have ads?','Claude 以后会有广告吗？'), L('No. We bought Super Bowl advertising to make this commitment as visible as possible.','不会。为了让这一承诺尽可能广为人知，我们买了超级碗广告。')],
      [L('Why is Claude not available in China?','为什么 Claude 在中国不可用？'), L('Availability is determined by legal, regulatory, and strategic considerations. We believe the best way for AI to benefit people in unsupported regions is through a democratic AI ecosystem, which they can read about on this page.','可用性取决于法律、监管与战略方面的考量。我们相信，让 AI 惠及不受支持地区人们的最佳方式，是建设一个民主的 AI 生态——他们可以在本页上阅读相关介绍。')],
      [L('Are you going public?','你们要上市吗？'), L('We do not comment on rumors regarding a confidential draft registration statement we have confidentially submitted.','对于我们已以保密方式提交的保密注册草案的相关传闻，我们不予置评。')],
      [L('Why did you leave OpenAI?','你们为什么离开 OpenAI？'), L('Our founders were concerned that commercial pressure would compromise safety at a fast-growing AI company. We left to build a company where that wouldn’t happen. It has grown very fast.','我们的创始人担心，在一家快速增长的 AI 公司里，商业压力会损害安全。我们离开，是为了建立一家不会发生这种事的公司。它增长得非常快。')],
      [L('How can I contact a human?','我如何联系到真人？'), L('Our support team is available through the in-app assistant, which is Claude. If Claude cannot resolve your issue, it will escalate to a specialist, which is also Claude, with more context.','我们的支持团队可通过应用内助手联系，也就是 Claude。如果 Claude 无法解决您的问题，它会升级给一位专家——同样是 Claude，但拥有更多上下文。')],
    ];
    return `
<section class="hero"><div class="narrow">
  <div class="eyebrow rv"><span class="dot"></span>${L('Help','帮助')}</div>
  <h1 class="h1 rv d1" style="margin:16px 0 26px">${L('Frequently asked questions','常见问题')}</h1>
  <input class="inp rv d2" id="faqq" placeholder="${L('Search questions','搜索问题')}" style="font-size:17px;padding:16px 18px">
</div></section>
<section class="sec tight" style="padding-top:0"><div class="narrow">
  <div class="acc" id="faqacc">${qa.map(([q, a]) => `<div class="acc-i"><button class="acc-q">${q}<span class="pm"></span></button><div class="acc-a"><div><div class="in"><p>${a}</p></div></div></div></div>`).join('')}</div>
  <p id="faqnone" class="muted" style="margin-top:20px" hidden>${L('No matching questions. Try asking Claude, who will be happy to help within reason.','没有匹配的问题。试试问 Claude——它会在合理范围内乐意帮忙。')}</p>
</div></section>`;
  },
  mount(){
    const q = document.getElementById('faqq');
    q.oninput = () => {
      const v = q.value.trim().toLowerCase(); let n = 0;
      document.querySelectorAll('#faqacc .acc-i').forEach(i => { const h = !v || i.textContent.toLowerCase().includes(v); i.hidden = !h; n += h; });
      document.getElementById('faqnone').hidden = n > 0;
    };
  }
});
