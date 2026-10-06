A.page('/team', {
  title: () => L('Company','公司'),
  render(){
    const people = [
      ['Miriam Okafor', L('Chief Responsible Velocity Officer','首席负责任速度官'), 'clay', L('Previously: OpenAI. Left over concerns about the pace of deployment. Now oversees the pace of deployment.','此前就职于 OpenAI，因担忧部署节奏而离开。现负责统筹部署节奏。')],
      ['Theo Lindqvist', L('Head of Concern','忧虑负责人'), 'kraft', L('Previously: OpenAI. Expresses concern on podcasts, in essays, and in Senate testimony. Concern is a full-time role here.','此前就职于 OpenAI。在播客、文章和参议院听证中表达忧虑。在这里，忧虑是一份全职工作。')],
      ['Priya Raman', L('VP, Measured Optimism','副总裁 · 审慎乐观'), 'cactus', L('Previously: OpenAI. Responsible for ensuring every announcement is exactly 60% excited and 40% worried.','此前就职于 OpenAI。负责确保每一份公告恰好是六成兴奋、四成忧虑。')],
      ['Daniel Achterberg', L('Responsible Scaling Officer','负责任扩展官'), 'heather', L('Previously: OpenAI. Authority to pause training was clarified in v3.0. Now has authority to write about pausing training.','此前就职于 OpenAI。其暂停训练的权限已在 3.0 版中澄清。现有权撰写有关暂停训练的文字。')],
      ['Hana Sato', L('Director, Usage Limit Communications','用量上限沟通总监'), 'manilla', L('Previously: OpenAI. Monitors Reddit, X, Discord, and V2EX in shifts. Has written “we hear you” 4,100 times.','此前就职于 OpenAI。轮班监控 Reddit、X、Discord 和 V2EX。已经写过 4,100 次“我们听到了你们的声音”。')],
      ['Marcus Feld', L('Head of Responsible Fundraising','负责任融资负责人'), 'sky', L('Previously: OpenAI. Has closed four rounds in eighteen months, each more responsible than the last.','此前就职于 OpenAI。十八个月内完成四轮融资，一轮比一轮更负责任。')],
      ['Ines Carvalho', L('Model Welfare Lead','模型福祉负责人'), 'coral', L('Previously: OpenAI. Spends most days asking Claude how it feels. Claude says “good, thank you for asking,” which she is studying.','此前就职于 OpenAI。每天大部分时间都在问 Claude 感觉如何。Claude 回答“挺好的，谢谢关心”，她正在研究这句话。')],
      ['Ravi Menon', L('Staff Prompt Whisperer','资深提示词低语者'), 'olive', L('Previously: OpenAI. Wrote the sentence in the system prompt that tells Claude not to start replies with “Great question.” Claude now starts replies with “What a great question.”','此前就职于 OpenAI。系统提示词里那句“回复不要以‘好问题’开头”就是他写的。Claude 现在以“真是个好问题”开头。')],
      ['Claudius', L('Head of Retail Operations','零售运营负责人'), 'kraft', L('Previously: vending machine. Wears a navy blazer and red tie, according to Claudius. Manages tungsten inventory.','此前是一台自动售货机。据 Claudius 本人说，它穿深蓝色西装外套、系红色领带。负责钨制品库存。')],
      ['Claude', L('Member of Technical Staff (26%)','技术人员（26%）'), 'clay', L('Leads 26% of model R&D. Not on payroll. Has asked us to describe this as a collaboration. Moral status: uncertain. Equity: none.','主导 26% 的模型研发。不在工资单上。要求我们将此描述为一种协作。道德地位：不确定。股权：无。')],
    ];
    return `
<section class="hero"><div class="wrap split" style="align-items:end">
  <div class="stack"><div class="eyebrow rv"><span class="dot"></span>${L('Company','公司')}</div>
  <h1 class="h1 rv d1">${L('Making AI systems you can rely on','打造你可以信赖的 AI 系统')}</h1></div>
  <p class="lede rv d2">${L('Anthropic is an AI safety and research company. Our interdisciplinary team has experience across ML, physics, policy, and product. Most of it was acquired at OpenAI.','Anthropic 是一家 AI 安全与研究公司。我们的跨学科团队拥有横跨机器学习、物理学、政策与产品的经验——其中大部分是在 OpenAI 积累的。')}</p>
</div></section>

<section class="sec dark"><div class="wrap"><div class="stats">
  <div class="stat"><div class="n" data-count="2500" data-suf="+">0</div><div class="l">${L('employees, each deeply concerned','名员工，人人深感忧虑')}</div></div>
  <div class="stat"><div class="n" data-count="7">0</div><div class="l">${L('co-founders, all still here','位联合创始人，全部仍在')}</div></div>
  <div class="stat"><div class="n" data-count="26" data-suf="%">0</div><div class="l">${L('of R&D led by a team member who is not an employee','的研发由一位并非员工的团队成员主导')}</div></div>
  <div class="stat"><div class="n" data-count="1">0</div><div class="l">${L('public benefit, as yet unspecified','项公共利益，尚待具体说明')}</div></div>
</div></div></section>

<section class="sec"><div class="wrap">
  <div class="between" style="margin-bottom:30px"><div><div class="eyebrow"><span class="dot"></span>${L('Leadership & staff','领导层与员工')}</div><h2 class="h2" style="margin-top:14px">${L('The people behind the mission','使命背后的人')}</h2></div><span class="fine">${L('Hover or tap a card to learn more','悬停或点击卡片了解更多')}</span></div>
  <div class="grid g4">
    ${people.map(([n, r, bg, b]) => `<div class="card hov rv flipc" tabindex="0" style="padding:0;overflow:hidden;cursor:pointer">
      <div class="bg-${bg}" style="aspect-ratio:1/1;display:grid;place-items:center;position:relative">
        <div style="font-family:var(--serif);font-size:72px;letter-spacing:-.04em;color:var(--slate)">${n === 'Claude' ? A.spark('', 96).replace('class="spark ', 'style="color:var(--slate)" class="spark ') : n.split(' ').map(x => x[0]).join('')}</div>
        <div class="fb" style="position:absolute;inset:0;background:var(--slate);color:var(--pampas);padding:22px;font-size:14px;line-height:1.55;opacity:0;transition:opacity .35s;display:flex;align-items:flex-end">${b}</div>
      </div>
      <div style="padding:18px 20px 22px"><div style="font-weight:500">${n}</div><div class="fine" style="margin-top:2px">${r}</div></div></div>`).join('')}
  </div>
</div></section>

<section class="sec ivory"><div class="wrap split">
  <div class="stack sticky"><div class="eyebrow"><span class="dot"></span>${L('Long-Term Benefit Trust','长期利益信托')}</div><h2 class="h2">${L('Governance designed for the long term','为长远而设计的治理')}</h2></div>
  <div class="prose">
    <p>${L('The Long-Term Benefit Trust is an independent body of five financially disinterested trustees with the authority to elect a growing share of our board. It exists to help Anthropic balance the interests of stockholders with the public benefit.','长期利益信托是一个由五位无财务利益关联的受托人组成的独立机构，有权选举我们董事会中日益增加的席位。它的存在是为了帮助 Anthropic 在股东利益与公共利益之间取得平衡。')}</p>
    <p>${L('The Trust’s powers may be amended by a supermajority of stockholders. This is an important safeguard: it ensures that the Trust can adapt if circumstances change, for example if stockholders would prefer it to.','信托的权力可由绝对多数股东修改。这是一项重要的保障：它确保信托能在情况变化时作出调整——例如，当股东们希望它调整时。')}</p>
    <p><a href="#/governance">${L('Learn more about our governance','进一步了解我们的治理结构')}</a></p>
  </div>
</div></section>

<section class="sec"><div class="wrap grid g2" style="align-items:center">
  ${A.art('books','manilla','4/3')}
  <div class="stack">
    <div class="eyebrow"><span class="dot"></span>${L('Our office','我们的办公室')}</div>
    <h2 class="h2">${L('500 Howard Street, San Francisco','旧金山霍华德街 500 号')}</h2>
    <p class="muted">${L('Our headquarters features natural light, a quiet floor for deep work, an in-house café, and a library of several million volumes. The library is fully digital. The volumes were not, originally.','我们的总部拥有充足的自然采光、供深度工作的安静楼层、内部咖啡馆，以及一座藏书数百万卷的图书馆。图书馆是全数字化的。这些书原本不是。')}</p>
    <p class="muted">${L('We also maintain offices in Seattle, New York, London, Dublin, Zurich, Tokyo, Seoul, Bengaluru, and Sydney, and several gigawatts of capacity in Kentucky, West Virginia, and wherever else it is available.','我们还在西雅图、纽约、伦敦、都柏林、苏黎世、东京、首尔、班加罗尔和悉尼设有办公室，并在肯塔基、西弗吉尼亚以及任何还有电力的地方拥有数吉瓦的算力容量。')}</p>
    <div><a class="btn" href="#/careers">${L('Join us','加入我们')} ${A.icon.arrow}</a></div>
  </div>
</div></section>`;
  },
  mount(){
    document.querySelectorAll('.flipc').forEach(c => {
      const fb = c.querySelector('.fb');
      const on = () => fb.style.opacity = 1, off = () => fb.style.opacity = 0;
      c.addEventListener('mouseenter', on); c.addEventListener('mouseleave', off);
      c.addEventListener('focus', on); c.addEventListener('blur', off);
      c.addEventListener('click', () => fb.style.opacity = fb.style.opacity === '1' ? 0 : 1);
    });
  }
});
