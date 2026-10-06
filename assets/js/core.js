/* Anthropic web platform — core runtime.
   Hash router, i18n, layout chrome, shared UI behaviours. */
(function(){
'use strict';

const store = {
  get(k, d){ try{ const v = localStorage.getItem('ant.'+k); return v === null ? d : JSON.parse(v); }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem('ant.'+k, JSON.stringify(v)); }catch(e){} }
};

const A = window.A = {
  store,
  lang: store.get('lang', (navigator.language||'en').toLowerCase().startsWith('zh') ? 'zh' : 'en'),
  pages: [],
  hooks: { afterRender: [], langChange: [] },
  cleanup: [],
};

/* ---------- i18n ---------- */
const L = window.L = (en, zh) => A.lang === 'zh' ? (zh === undefined ? en : zh) : en;
/* Plain-language pair: corporate text + what it means. */
window.pl = (said, meant) => `<span class="pl"><span class="pl-a">${said}</span><span class="pl-b">${meant}</span></span>`;
window.esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

A.setLang = function(l){
  if (l === A.lang) return;
  A.lang = l; store.set('lang', l);
  document.documentElement.lang = l === 'zh' ? 'zh' : 'en';
  A.chrome();
  A.route(true);
  A.hooks.langChange.forEach(f => f(l));
};

/* ---------- router ---------- */
A.page = function(pattern, def){
  const keys = [];
  const rx = new RegExp('^' + pattern.replace(/:(\w+)/g, (_, k) => { keys.push(k); return '([^/]+)'; }) + '$');
  A.pages.push({ pattern, rx, keys, def });
};
A.path = () => {
  const h = location.hash.replace(/^#!?/, '') || '/';
  return h.split('?')[0].replace(/\/+$/, '') || '/';
};
A.query = () => new URLSearchParams((location.hash.split('?')[1]) || '');
A.go = p => { location.hash = '#' + p; };

let lastPath = null, lastHash = null;
A.route = function(force){
  const path = A.path();
  if (!force && location.hash === lastHash) return;
  const samePage = path === lastPath;
  lastPath = path; lastHash = location.hash;
  A.cleanup.forEach(f => { try{ f(); }catch(e){} });
  A.cleanup = [];
  let match = null, params = {};
  for (const p of A.pages){
    const m = path.match(p.rx);
    if (m){ match = p; p.keys.forEach((k, i) => params[k] = decodeURIComponent(m[i+1])); break; }
  }
  if (!match){ match = A.pages.find(p => p.pattern === '/404'); params = { path }; }
  const def = match.def;
  const app = document.getElementById('app');
  A.current = { def, params, path };
  let html;
  try { html = def.render(params); }
  catch(e){ console.error(e); match = A.pages.find(p => p.pattern === '/404'); html = match.def.render({path}); }
  if (html === null){ match = A.pages.find(p => p.pattern === '/404'); html = match.def.render({path}); A.current.def = match.def; }
  app.innerHTML = html;
  app.classList.remove('page-enter'); void app.offsetWidth; app.classList.add('page-enter');
  const t = (A.current.def.title && A.current.def.title(params)) || '';
  document.title = (t ? t + ' \\ ' : '') + 'Anthropic';
  A.baseTitle = document.title;
  if (!samePage && !force) window.scrollTo(0, 0);
  if (!(force && samePage)) { const a = A.query().get('s'); if (a) setTimeout(() => { const el = document.getElementById(a); el && el.scrollIntoView({behavior:'smooth'}); }, 80); }
  A.markNav();
  A.enhance(app);
  if (A.current.def.mount) A.current.def.mount(params, app);
  A.hooks.afterRender.forEach(f => f(path));
};

/* ---------- UI helpers ---------- */
A.icon = {
  arrow: '<svg class="arr" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ext: '<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 3h7v7M13 3 4 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 10 10" fill="none"><path d="m2 3.5 3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.6"/><path d="m14 14 3.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  send: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 16V4M5 9l5-5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
/* Claude spark. Eleven rays; the twelfth was deprecated in v3. */
A.spark = (cls = '', size = 22) => {
  const rays = [0,33,64,95,127,160,192,224,256,289,322].map((a, i) => {
    const len = [10.5,9,10.8,8.6,10.2,9.4,10.9,8.8,10.4,9.2,10.6][i];
    return `<path d="M12 12 L${(12 + len*Math.cos(a*Math.PI/180)).toFixed(2)} ${(12 + len*Math.sin(a*Math.PI/180)).toFixed(2)}" />`;
  }).join('');
  return `<svg class="spark ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">${rays}</svg>`;
};
A.logo = () => `<a href="#/" class="logo" aria-label="Anthropic home" id="logo">ANTHROP<span class="bs">\\</span>C</a>`;

A.btn = (href, label, cls = '') => `<a class="btn ${cls}" href="${href}">${label} ${A.icon.arrow}</a>`;

A.toast = function(title, body, ms = 6500){
  const box = document.getElementById('toasts');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `${A.spark()}<div>${title ? `<b>${title}</b>` : ''}${body || ''}</div>`;
  box.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, ms);
  return t;
};

A.modal = function(html, opts = {}){
  const root = document.getElementById('overlay-root');
  const bg = document.createElement('div');
  bg.className = 'modal-bg';
  bg.innerHTML = `<div class="modal ${opts.wide ? 'wide' : ''}" role="dialog" aria-modal="true"><button class="x" aria-label="Close">×</button>${html}</div>`;
  root.appendChild(bg);
  requestAnimationFrame(() => bg.classList.add('in'));
  const close = () => { bg.classList.remove('in'); setTimeout(() => bg.remove(), 260); document.removeEventListener('keydown', onk); opts.onClose && opts.onClose(); };
  const onk = e => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onk);
  bg.addEventListener('click', e => { if (e.target === bg || e.target.closest('.x') || e.target.closest('[data-close]')) close(); });
  A.enhance(bg);
  opts.mount && opts.mount(bg.querySelector('.modal'), close);
  return { el: bg.querySelector('.modal'), close };
};

/* Accordions, tabs, reveals, counters — applied after each render. */
A.enhance = function(root){
  root.querySelectorAll('.acc-q').forEach(q => {
    if (q._b) return; q._b = 1;
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });
  root.querySelectorAll('[data-tabs]').forEach(tb => {
    if (tb._b) return; tb._b = 1;
    const group = tb.getAttribute('data-tabs');
    tb.addEventListener('click', e => {
      const b = e.target.closest('button[data-tab]'); if (!b) return;
      tb.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      const v = b.getAttribute('data-tab');
      document.querySelectorAll(`[data-panel="${group}"]`).forEach(p => {
        const keys = (p.getAttribute('data-key') || '').split(' ');
        p.hidden = !(v === 'all' || keys.includes(v));
      });
      tb.dispatchEvent(new CustomEvent('tab', { detail: v }));
    });
  });
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('on');
    if (en.target.hasAttribute('data-count')) A.countUp(en.target);
    io.unobserve(en.target);
  }), { rootMargin: '0px 0px -8% 0px' });
  root.querySelectorAll('.rv,[data-count]').forEach(el => io.observe(el));
  A.cleanup.push(() => io.disconnect());
};

A.countUp = function(el){
  const to = parseFloat(el.getAttribute('data-count'));
  const dec = +(el.getAttribute('data-dec') || 0);
  const pre = el.getAttribute('data-pre') || '', suf = el.getAttribute('data-suf') || '';
  const dur = 1600, t0 = performance.now();
  const fmt = v => pre + v.toLocaleString(A.lang === 'zh' ? 'zh-CN' : 'en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
  const step = t => {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(to * e);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

A.on = function(el, ev, fn, opts){ el.addEventListener(ev, fn, opts); A.cleanup.push(() => el.removeEventListener(ev, fn, opts)); };
A.every = function(ms, fn){ const id = setInterval(fn, ms); A.cleanup.push(() => clearInterval(id)); return id; };
A.later = function(ms, fn){ const id = setTimeout(fn, ms); A.cleanup.push(() => clearTimeout(id)); return id; };

A.fmtUSD = (v, d = 0) => '$' + v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });

/* ---------- chrome: header & footer ---------- */
const NAV = () => [
  { k: 'research', label: L('Research','研究'), menu: [
    { h: L('Research','研究') },
    { href: '#/research', b: L('Overview','概览'), s: L('Our work to understand and steer frontier systems','理解并引导前沿系统的工作') },
    { href: '#/research?t=alignment', b: L('Alignment','对齐'), s: L('Ensuring models do what we intend, mostly','确保模型按我们的意图行事（大体上）') },
    { href: '#/research?t=interpretability', b: L('Interpretability','可解释性'), s: L('Looking inside the black box, respectfully','怀着敬意，看向黑箱内部') },
    { href: '#/research?t=economics', b: L('Economic Index','经济指数'), s: L('Measuring AI’s effect on jobs, regretfully','遗憾地衡量 AI 对就业的影响') },
    { href: '#/research?t=societal', b: L('Societal Impacts','社会影响'), s: L('Studying the world we are changing','研究我们正在改变的世界') },
    { href: '#/welfare', b: L('Model Welfare','模型福祉'), s: L('Taking the possibility of Claude’s feelings seriously','认真对待 Claude 可能拥有感受这件事') },
  ]},
  { k: 'commit', label: L('Commitments','承诺'), menu: [
    { h: L('Commitments','承诺') },
    { href: '#/company', b: L('Core Views on AI Safety','我们对 AI 安全的核心看法'), s: L('Why we build what we warn about','为什么我们要打造自己所警告的东西') },
    { href: '#/rsp', b: L('Responsible Scaling Policy','负责任扩展政策'), s: L('Version 3.1 · Now with fewer ifs','3.1 版 · “如果”更少了') },
    { href: '#/constitution', b: L('Claude’s Constitution','Claude 的宪法'), s: L('23,000 words on who Claude is','用两万三千字说明 Claude 是谁') },
    { href: '#/governance', b: L('Governance','公司治理'), s: L('Public benefit corporation & Long-Term Benefit Trust','公益公司与长期利益信托') },
    { href: '#/policy', b: L('Public Policy','公共政策'), s: L('Our positions, and their donors','我们的立场，及其资助方') },
    { href: '#/legal?t=usage', b: L('Usage Policy','使用政策'), s: L('What you may do with Claude','您可以用 Claude 做什么') },
  ]},
  { k: 'claude', label: 'Claude', menu: [
    { h: 'Claude' },
    { href: '#/claude', b: L('Meet Claude','认识 Claude'), s: L('A thoughtful AI collaborator','一位体贴的 AI 协作者') },
    { href: '#/claude?s=models', b: L('Models','模型'), s: 'Opus 5.5 · Sonnet 5.5 · Haiku 5 · Mythos' },
    { href: '#/claude?s=code', b: 'Claude Code', s: L('Agentic coding, with permission','智能体编程，经您许可') },
    { href: '#/pricing', b: L('Pricing','价格'), s: L('Plans for every usage limit','适合每一种用量上限的方案') },
    { href: '#/customers', b: L('Customers','客户'), s: L('Stories of transformation','转型的故事') },
    { href: '#/status', b: L('Status','服务状态'), s: L('All systems operational*','所有系统运行正常*') },
  ]},
  { k: 'company', label: L('Company','公司'), menu: [
    { h: L('Company','公司') },
    { href: '#/team', b: L('About & Team','关于我们'), s: L('The people behind the mission','使命背后的人') },
    { href: '#/careers', b: L('Careers','加入我们'), s: L('Help us build it carefully','帮助我们小心地造出它') },
    { href: '#/news', b: L('Newsroom','新闻中心'), s: L('Announcements & essays','公告与文章') },
    { href: '#/faq', b: 'FAQ', s: L('Answers, thoughtfully','深思熟虑的回答') },
    { href: '#/contact', b: L('Contact sales','联系销售'), s: L('Talk to a human (limited availability)','与人类交谈（名额有限）') },
  ]},
  { k: 'news', label: L('News','新闻'), href: '#/news' },
];
A.nav = NAV;

A.chrome = function(){
  const hdr = document.getElementById('hdr');
  hdr.innerHTML = `<div class="wrap hdr-in">
    ${A.logo()}
    <nav class="nav" aria-label="Primary">
      ${NAV().map(n => n.menu ? `<div class="ni" data-k="${n.k}"><button aria-expanded="false">${n.label} ${A.icon.chev}</button>
        <div class="mega">${n.menu.map(m => m.h ? `<h6>${m.h}</h6>` : `<a href="${m.href}"><b>${m.b}</b><span>${m.s}</span></a>`).join('')}</div></div>`
        : `<div class="ni" data-k="${n.k}"><a href="${n.href}">${n.label}</a></div>`).join('')}
    </nav>
    <div class="hdr-r">
      <button class="iconbtn" id="searchbtn" aria-label="${L('Search','搜索')}" title="${L('Search','搜索')} (⌘K)">${A.icon.search}</button>
      <div class="lang" role="group" aria-label="Language"><button data-l="en" class="${A.lang==='en'?'on':''}">EN</button><button data-l="zh" class="${A.lang==='zh'?'on':''}">中文</button></div>
      <button class="btn sm" id="tryclaude">${L('Try Claude','试用 Claude')}</button>
      <button class="iconbtn burger" id="burger" aria-label="Menu">${A.icon.menu}</button>
    </div>
  </div>
  <div class="mnav" id="mnav">${NAV().map(n => n.menu ? `<h6>${n.label}</h6>${n.menu.filter(m=>!m.h).map(m => `<a href="${m.href}">${m.b}</a>`).join('')}` : `<h6>${n.label}</h6><a href="${n.href}">${n.label}</a>`).join('')}</div>`;

  hdr.querySelectorAll('.lang button').forEach(b => b.onclick = () => A.setLang(b.dataset.l));
  hdr.querySelectorAll('.ni').forEach(ni => {
    let t;
    const open = () => { clearTimeout(t); hdr.querySelectorAll('.ni.open').forEach(x => x !== ni && x.classList.remove('open')); ni.classList.add('open'); };
    const close = () => { t = setTimeout(() => ni.classList.remove('open'), 160); };
    if (ni.querySelector('.mega')){
      ni.addEventListener('mouseenter', open); ni.addEventListener('mouseleave', close);
      ni.querySelector('button').addEventListener('click', () => ni.classList.contains('open') ? ni.classList.remove('open') : open());
      ni.querySelectorAll('.mega a').forEach(a => a.addEventListener('click', () => ni.classList.remove('open')));
    }
  });
  const mn = hdr.querySelector('#mnav');
  hdr.querySelector('#burger').onclick = () => mn.classList.toggle('open');
  mn.querySelectorAll('a').forEach(a => a.onclick = () => mn.classList.remove('open'));
  hdr.querySelector('#tryclaude').onclick = () => A.openChat && A.openChat();
  hdr.querySelector('#searchbtn').onclick = () => A.openSearch && A.openSearch();

  document.getElementById('ftr').innerHTML = A.footer();
  document.getElementById('ftr').querySelectorAll('[data-l]').forEach(b => b.onclick = e => { e.preventDefault(); A.setLang(b.dataset.l); });
  A.markNav();
  A.hooks.afterRender.forEach(f => f('chrome'));
};

A.markNav = function(){
  const p = A.path();
  const map = { research: ['/research','/welfare'], commit: ['/company','/rsp','/constitution','/governance','/policy','/legal'], claude: ['/claude','/pricing','/customers','/status'], company: ['/team','/careers','/faq','/contact'], news: ['/news'] };
  document.querySelectorAll('.nav .ni').forEach(ni => {
    const k = ni.dataset.k; const on = (map[k] || []).some(x => p === x || p.startsWith(x + '/'));
    const el = ni.querySelector('a,button'); el && el.classList.toggle('act', on);
  });
};

A.footer = function(){
  const col = (h, items) => `<div><h6>${h}</h6><ul>${items.map(([href, t]) => `<li><a href="${href}">${t}</a></li>`).join('')}</ul></div>`;
  return `<div class="wrap">
    <div class="cols">
      <div>
        <div class="tagline">${L('Safety is the core of everything we sell.','安全，是我们销售的一切的核心。')}</div>
        <div class="fine" style="color:#8b8980;max-width:30ch">${L('Anthropic PBC is a public benefit corporation headquartered in San Francisco and, increasingly, in several gigawatts of leased land in Kentucky.','Anthropic PBC 是一家总部位于旧金山的公益公司，并且日益位于肯塔基州若干吉瓦的租赁土地上。')}</div>
      </div>
      ${col(L('Products','产品'), [['#/claude','Claude'],['#/claude?s=code','Claude Code'],['#/claude?s=models',L('Models','模型')],['#/pricing',L('Pricing','价格')],['#/pricing?s=max','Claude Max'],['#/claude?s=demo',L('Download apps','下载客户端')]])}
      ${col(L('Research','研究'), [['#/research',L('Overview','概览')],['#/research?t=interpretability',L('Interpretability','可解释性')],['#/research?t=alignment',L('Alignment','对齐')],['#/research?t=economics',L('Economic Index','经济指数')],['#/welfare',L('Model Welfare','模型福祉')],['#/research?t=vend','Project Vend']])}
      ${col(L('Commitments','承诺'), [['#/company',L('Core Views','核心观点')],['#/rsp',L('Responsible Scaling','负责任扩展')],['#/constitution',L('Constitution','宪法')],['#/governance',L('Governance','公司治理')],['#/policy',L('Public Policy','公共政策')],['#/welfare?s=retired',L('Deprecation commitments','模型退役承诺')]])}
      ${col(L('Company','公司'), [['#/team',L('About','关于')],['#/careers',L('Careers','招聘')],['#/news',L('News','新闻')],['#/customers',L('Customers','客户')],['#/faq','FAQ'],['#/contact',L('Contact','联系我们')]])}
      ${col(L('Help & Legal','帮助与法律'), [['#/status',L('Status','服务状态')],['#/legal?t=terms',L('Consumer Terms','消费者条款')],['#/legal?t=usage',L('Usage Policy','使用政策')],['#/legal?t=privacy',L('Privacy Policy','隐私政策')],['#/legal?t=disclosure',L('Responsible Disclosure','负责任披露')],['#/legal?t=a11y',L('Accessibility','无障碍')]])}
    </div>
    <div class="big" aria-hidden="true">ANTHROP<span class="bs" id="bigbs">\\</span>C</div>
    <div class="bot">
      <span>© 2026 Anthropic PBC · ${L('All rights reserved, some acquired.','保留所有权利，部分权利系收购所得。')}</span>
      <span style="display:flex;gap:18px;flex-wrap:wrap">
        <a href="#" id="plainlink">${L('Plain Language Mode (beta)','直白模式（测试版）')}</a>
        <a href="#/legal?t=cookies">${L('Cookie settings','Cookie 设置')}</a>
        <a href="#" data-l="${A.lang==='en'?'zh':'en'}">${A.lang==='en'?'简体中文':'English'}</a>
      </span>
    </div>
  </div>`;
};

/* Plain language — accessibility mode that rewrites corporate phrasing. */
A.setPlain = function(on){
  document.body.classList.toggle('plain', on);
  document.body.classList.toggle('has-plain', on);
  store.set('plain', on);
  let bar = document.querySelector('.plainbar');
  if (!bar){
    bar = document.createElement('div'); bar.className = 'plainbar';
    document.body.appendChild(bar);
  }
  bar.innerHTML = `<span>${L('Plain Language Mode is on. Some phrasing has been clarified.','直白模式已开启。部分措辞已被澄清。')}</span><button>${L('Turn off','关闭')}</button>`;
  bar.querySelector('button').onclick = () => A.setPlain(false);
  if (on) A.toast(L('Plain Language Mode','直白模式'), L(`${document.querySelectorAll('.pl').length} phrases on this page were clarified. This feature is in beta and may be discontinued.`,`本页有 ${document.querySelectorAll('.pl').length} 处措辞已被澄清。此功能为测试版，可能随时下线。`));
};

/* scroll chrome */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.getElementById('hdr').classList.toggle('scrolled', y > 8);
  const h = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('#progress i').style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  const bs = document.getElementById('bigbs');
  if (bs){ const r = bs.getBoundingClientRect(); const k = Math.max(0, Math.min(1, (innerHeight - r.top - 40) / 220)); bs.style.transform = `scaleX(${1 - 2 * k})`; }
}, { passive: true });

window.addEventListener('hashchange', () => A.route());
document.addEventListener('click', e => {
  if (!e.target.closest('.ni')) document.querySelectorAll('.ni.open').forEach(x => x.classList.remove('open'));
  const pl = e.target.closest('#plainlink');
  if (pl){ e.preventDefault(); A.setPlain(!document.body.classList.contains('plain')); }
  const a = e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute('href') === location.hash){
    // same link: re-run in-page anchor
    const s = A.query().get('s'); if (s){ const el = document.getElementById(s); el && el.scrollIntoView({behavior:'smooth'}); }
  }
});

})();
