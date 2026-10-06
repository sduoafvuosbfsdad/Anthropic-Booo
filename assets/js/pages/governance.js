A.page('/governance', {
  title: () => L('Governance','公司治理'),
  render(){
    const inv = [
      ['2021', L('Series A','A 轮'), L('Individual investors and philanthropists concerned about AI risk','关注 AI 风险的个人投资者与慈善家'), L('Concerned','忧虑')],
      ['2022', L('Series B','B 轮'), L('Led by FTX founder (approx. $500M)','由 FTX 创始人领投（约 5 亿美元）'), L('Stake sold by bankruptcy estate, 2024','2024 年由破产财产管理方出售')],
      ['2023–24', L('Strategic','战略投资'), 'Amazon ($8B), Google ($3B+)', L('Committed to safety and to their cloud revenue','致力于安全，以及其云业务收入')],
      ['2025', L('Series E–F','E–F 轮'), 'Lightspeed, ICONIQ, Fidelity, et al.', L('Long-term oriented','着眼长远')],
      ['2025', L('Strategic','战略投资'), 'Microsoft, Nvidia (up to $15B)', L('Also our suppliers','也是我们的供应商')],
      ['2026', L('Series G–H','G–H 轮'), L('Sovereign wealth funds, Coatue, GIC, Altimeter, Sequoia, et al.','主权财富基金、Coatue、GIC、Altimeter、红杉等'), L('Vetted for alignment with our values, where practical','在可行的范围内，已核查其与我们价值观的一致性')],
    ];
    return `
<section class="hero"><div class="wrap split" style="align-items:end">
  <div class="stack"><div class="eyebrow rv"><span class="dot"></span>${L('Commitments · Governance','承诺 · 公司治理')}</div>
  <h1 class="h1 rv d1">${L('A structure built to resist commercial pressure','一种为抵御商业压力而设计的结构')}</h1></div>
  <p class="lede rv d2">${L('Anthropic is a Delaware public benefit corporation, overseen in part by an independent Long-Term Benefit Trust. Together, these ensure we can prioritize the mission even when it conflicts with profit, should that ever occur.','Anthropic 是一家特拉华州公益公司，部分由一个独立的长期利益信托监督。二者共同确保：即使使命与利润发生冲突——如果真有那么一天——我们也能把使命放在首位。')}</p>
</div></section>

<section class="sec dark"><div class="wrap">
  <div class="grid g2" style="gap:48px">
    <div><div class="fine" style="color:#8b8980;margin-bottom:10px">${L('Implied value created since you opened this page','自您打开本页以来所创造的隐含价值')}</div><div class="ticker" id="tk1" style="font-size:clamp(40px,5.5vw,76px);color:var(--pampas)">$0</div><p class="fine" style="color:#8b8980;margin-top:10px">${L('Based on the average rate of valuation growth between Series G and Series H.','基于 G 轮与 H 轮之间估值的平均增速。')}</p></div>
    <div><div class="fine" style="color:#8b8980;margin-bottom:10px">${L('Binding safety commitments added since you opened this page','自您打开本页以来新增的、有约束力的安全承诺')}</div><div class="ticker" id="tk2" style="font-size:clamp(40px,5.5vw,76px);color:var(--pampas)">0</div><p class="fine" style="color:#8b8980;margin-top:10px">${L('Updated in real time.','实时更新。')}</p></div>
  </div>
</div></section>

<section class="sec"><div class="narrow prose">
  <h2 style="margin-top:0">${L('Public benefit corporation','公益公司')}</h2>
  <p>${L('As a public benefit corporation, Anthropic’s board is legally permitted to balance the financial interests of stockholders with our stated public benefit: “the responsible development and maintenance of advanced AI for the long-term benefit of humanity.”','作为公益公司，Anthropic 的董事会在法律上被允许在股东的财务利益与我们声明的公共利益之间进行权衡。我们声明的公共利益是：“为人类的长远利益，负责任地开发与维护先进 AI。”')}</p>
  <p>${L('The word “permitted” is important. Public benefit status does not require us to put the public benefit first. It allows us to, which we believe sends a strong signal.','“被允许”这个词很重要。公益公司身份并不要求我们把公共利益放在首位。它允许我们这样做——我们相信这传递了一个强烈的信号。')}</p>
  <h2>${L('The Long-Term Benefit Trust','长期利益信托')}</h2>
  <p>${L('The Trust is composed of five trustees with expertise in AI safety, national security, public policy, and social enterprise. Trustees hold no equity in Anthropic. The Trust elects a growing number of board seats, reaching a majority over time.','信托由五位在 AI 安全、国家安全、公共政策和社会企业方面具有专长的受托人组成。受托人不持有 Anthropic 的任何股权。信托选举的董事席位逐步增加，并将随时间推移达到多数。')}</p>
  <p>${L('To ensure flexibility, the Trust’s arrangements can be modified by a sufficiently large supermajority of stockholders, without the Trust’s consent. We view this as a failsafe in case the Trust behaves in unexpected ways, such as by exercising its authority.','为保证灵活性，信托的相关安排可由足够大的绝对多数股东在未经信托同意的情况下予以修改。我们将此视为一种保险机制，以防信托做出出人意料的举动——比如行使它的权力。')}</p>
  <h2>${L('Our approach to capital','我们对资本的态度')}</h2>
  <p>${L('Frontier AI development requires extraordinary resources. We accept investment from partners who share our commitment to safety, or who are willing to say that they do.','前沿 AI 开发需要非凡的资源。我们接受认同我们安全承诺的伙伴的投资，或者愿意声称自己认同的伙伴的投资。')}</p>
  <blockquote>${L('“No bad person should ever benefit from our success is a pretty difficult principle to run a business on.”','“‘任何坏人都不应从我们的成功中获益’——这是一条很难拿来经营企业的原则。”')}<br><span class="fine" style="font-style:normal">${L('— Internal memo, 2025, as reported','——2025 年内部备忘录，据媒体报道')}</span></blockquote>
  <p>${L('We have since adopted a more operational principle: no bad person should benefit from our success disproportionately to their investment.','此后，我们采纳了一条更具可操作性的原则：任何坏人从我们的成功中获得的收益，都不应超出其投资比例。')}</p>
</div></section>

<section class="sec ivory"><div class="wrap">
  <h2 class="h2" style="margin-bottom:28px">${L('Our investors','我们的投资者')}</h2>
  <div class="tblwrap"><table class="tbl"><thead><tr><th>${L('Year','年份')}</th><th>${L('Round','轮次')}</th><th>${L('Investors','投资者')}</th><th>${L('Alignment status','对齐状态')}</th></tr></thead>
  <tbody>${inv.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
  <p class="fine" style="margin-top:12px">${L('Investors have no board seats by virtue of investment, except where they do.','投资者不因投资而获得董事会席位，有席位的除外。')}</p>
</div></section>`;
  },
  mount(){
    const t0 = performance.now(), rate = 585e9 / (90 * 86400); // $/s
    const k1 = document.getElementById('tk1'), k2 = document.getElementById('tk2');
    let raf;
    const step = () => {
      const s = (performance.now() - t0) / 1000;
      k1.textContent = A.fmtUSD(s * rate);
      raf = requestAnimationFrame(step);
    };
    step();
    A.cleanup.push(() => cancelAnimationFrame(raf));
    A.every(9000, () => { k2.style.opacity = .4; setTimeout(() => k2.style.opacity = 1, 300); });
  }
});
