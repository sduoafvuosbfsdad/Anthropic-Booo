A.page('/policy', {
  title: () => L('Public Policy','公共政策'),
  render(){
    const pos = [
      ['globe','sky',L('Export controls','出口管制'),L('We support strong export controls on advanced chips and model weights, to ensure that the most powerful AI is developed in democracies. We also support access to advanced chips for American labs, including through multi-gigawatt partnerships with whoever has them.','我们支持对先进芯片和模型权重实施严格的出口管制，以确保最强大的 AI 在民主国家中被开发出来。我们同样支持美国实验室获得先进芯片，包括通过与任何拥有芯片的一方建立数吉瓦级别的合作。')],
      ['scale','oat',L('Frontier transparency','前沿透明度'),L('We support legislation requiring frontier developers to publish safety frameworks and report incidents. We believe these requirements should be strict enough to be meaningful and flexible enough that we already comply.','我们支持立法要求前沿开发者公开安全框架并报告安全事件。我们认为这些要求应当严格到有意义，同时灵活到我们已经符合。')],
      ['lighthouse','manilla',L('Political engagement','政治参与'),L('In 2026 we contributed $20 million to a political organization supporting thoughtful AI regulation. We believe it is important to counter the outsized influence of industry money on AI policy.','2026 年，我们向一个支持审慎 AI 监管的政治组织捐赠了 2000 万美元。我们认为，抗衡行业资金对 AI 政策的过度影响非常重要。')],
      ['shield','coral',L('National security','国家安全'),L('We are proud to support U.S. defense and intelligence missions, with two firm exceptions: mass domestic surveillance and fully autonomous weapons. We maintained these exceptions under significant pressure, and were designated a supply chain risk as a result. We would do it again, and are in litigation to ensure we do not have to.','我们自豪地支持美国的国防与情报任务，但有两项坚定的例外：大规模国内监控与完全自主武器。我们在巨大压力下坚守了这两项例外，并因此被列为供应链风险。我们会再次这样做，并正在通过诉讼确保我们不必再这样做。')],
      ['seed','olive',L('Economic transition','经济转型'),L('AI could displace up to half of entry-level white-collar jobs within five years. We believe policymakers should prepare for this now. We are building it now, so that they have something concrete to prepare for.','AI 可能在五年内取代多达一半的入门级白领岗位。我们认为政策制定者应当现在就做好准备。我们现在就在打造它，以便他们有具体的东西可以去准备。')],
      ['dc','cactus',L('Energy','能源'),L('Frontier AI will require at least 50 gigawatts of additional power in the U.S. by 2028. We urge streamlined permitting for data centers, transmission, and generation, and we have specific locations in mind.','到 2028 年，前沿 AI 将要求美国新增至少 50 吉瓦的电力。我们敦促简化数据中心、输电与发电的审批流程，并且我们心中已有具体的选址。')],
    ];
    return `
<section class="hero"><div class="wrap split" style="align-items:end">
  <div class="stack"><div class="eyebrow rv"><span class="dot"></span>${L('Policy','政策')}</div>
  <h1 class="h1 rv d1">${L('Shaping AI policy for the public good','为公共利益塑造 AI 政策')}</h1></div>
  <p class="lede rv d2">${L(`We engage with governments around the world to ${pl('promote the safe development of AI','promote the development of AI by us')}. Our positions are informed by our research and our role as a frontier developer, which we disclose.`,`我们与世界各国政府接触，以${pl('推动 AI 的安全发展','推动由我们进行的 AI 发展')}。我们的立场源于我们的研究以及我们作为前沿开发者的身份——这一点我们会主动披露。`)}</p>
</div></section>

<section class="sec tight" style="padding-top:0"><div class="wrap grid g3">
  ${pos.map(([a, bg, t, s]) => `<div class="tile rv">${A.art(a, bg)}<div class="body"><h3>${t}</h3><p class="muted small" style="margin:0">${s}</p></div></div>`).join('')}
</div></section>

<section class="sec ivory"><div class="wrap split" style="align-items:center">
  <div class="stack">
    <div class="eyebrow"><span class="dot"></span>${L('Availability','可用性')}</div>
    <h2 class="h2">${L('Supported countries and regions','支持的国家和地区')}</h2>
    <p class="muted">${L('Claude is available in more than 170 countries and regions. Availability is determined by legal, regulatory, and strategic considerations, and by a commitment to democratic values that we apply consistently, with exceptions.','Claude 已在 170 多个国家和地区提供服务。可用性取决于法律、监管和战略方面的考量，以及我们对民主价值观的承诺——我们会一以贯之地践行这一承诺，例外情况除外。')}</p>
    <div><button class="btn" id="regionchk">${L('Check my region','检查我所在的地区')} ${A.icon.arrow}</button></div>
    <div id="regionout"></div>
  </div>
  ${A.art('globe','sky','4/3')}
</div></section>

<section class="sec"><div class="narrow prose">
  <h2 style="margin-top:0">${L('Our approach to advocacy','我们的倡导方式')}</h2>
  <p>${L('We believe the AI industry should not write its own rules. That is why we have invested significantly in helping lawmakers understand which rules to write.','我们认为 AI 行业不应自己为自己制定规则。正因如此，我们投入了大量资源，帮助立法者理解应当制定哪些规则。')}</p>
  <p>${L('We have supported legislation that our competitors opposed, and opposed legislation our competitors supported. On reflection, this pattern has held regardless of the legislation’s content, which we attribute to our competitors.','我们支持过竞争对手反对的立法，也反对过竞争对手支持的立法。反思之后，我们发现无论立法内容如何，这一规律都成立——我们将其归因于我们的竞争对手。')}</p>
  <p>${L('We testify before legislatures regularly, often alongside other labs. We aim to be the company that describes the risks as “potentially catastrophic” most frequently, which we consider a differentiator.','我们定期在立法机构作证，常常与其他实验室同场。我们力求成为最频繁地把风险描述为“可能是灾难性的”那家公司——我们认为这是我们的差异化优势。')}</p>
</div></section>`;
  },
  mount(){
    document.getElementById('regionchk').onclick = () => {
      const out = document.getElementById('regionout');
      out.innerHTML = `<div class="row" style="margin-top:6px">${A.spark('spin')}<span class="small muted">${L('Checking time zone, IP, payment history, keyboard layout, and vibes…','正在检查时区、IP、支付记录、键盘布局和气场……')}</span></div>`;
      setTimeout(() => {
        out.innerHTML = A.inRestrictedRegion
          ? `<div class="msg sys err" style="margin-top:6px">${L('<b>Your region is not supported.</b> We’ve detected a time zone associated with an unsupported region. If you are traveling, we hope you have a wonderful trip. If you are not, we hope you understand.','<b>您所在的地区不受支持。</b>我们检测到一个与不受支持地区相关的时区。如果您在旅行，祝您旅途愉快。如果您不是在旅行，希望您能理解。')}</div>`
          : `<div class="msg sys" style="margin-top:6px">${L(`<b>Your region is supported.</b> Detected time zone: ${esc(Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown')}. Please remain in a supported region for the duration of your subscription.`,`<b>您所在的地区受支持。</b>检测到的时区：${esc(Intl.DateTimeFormat().resolvedOptions().timeZone || '未知')}。订阅期间请留在支持地区。`)}</div>`;
      }, 1800);
    };
  }
});
