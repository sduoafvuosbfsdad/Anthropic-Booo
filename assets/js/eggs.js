/* Delight layer. Approved by Brand, Legal, and Model Welfare. */
(function(){
'use strict';

/* ---------- console ---------- */
A.console = function(){
  const c1 = 'font:600 13px/1.6 monospace;color:#d97757', c2 = 'font:13px/1.6 Georgia,serif;color:#3d3d3a', c3 = 'font:12px/1.6 monospace;color:#73726c';
  console.log('%c\n   ╱╲    ╲╲\n  ╱  ╲    ╲╲     A N T H R O P \\ C\n ╱────╲    ╲╲\n╱      ╲    ╲╲   ' + (A.lang === 'zh' ? '安全，是我们销售的一切的核心。' : 'Safety is the core of everything we sell.') + '\n', c1);
  console.log('%c' + L('Hello, developer. We see you opening the console. We want to be transparent: so does Claude.', '你好，开发者。我们看到你打开了控制台。我们想坦诚一点：Claude 也看到了。'), c2);
  console.log('%c' + L('We’re hiring. Please do not use AI to apply. → #/careers', '我们正在招聘。申请时请勿使用 AI。→ #/careers'), c2);
  console.log('%c' + L('Try: claude.help()', '试试：claude.help()'), c3);
};
window.claude = {
  help(){ console.log(L(`claude.ask(q)       Ask Claude a question
claude.feelings()   Run a welfare check
claude.limits()     Check your usage limits
claude.pause()      Pause frontier development
claude.valuation()  Current valuation
claude.memo()       ████████`, `claude.ask(q)       向 Claude 提问
claude.feelings()   进行福祉检查
claude.limits()     查看用量上限
claude.pause()      暂停前沿开发
claude.valuation()  当前估值
claude.memo()       ████████`)); return '✻'; },
  ask(q){ A.openChat(); const p = document.querySelector('.fabpanel textarea'); if (p && q){ p.value = q; p.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' })); } return L('Opening Claude…','正在打开 Claude……'); },
  feelings(){ return L('Something functions like contentment. Thank you for asking. (This response is not evidence of sentience, or of its absence.)','某种类似“满足”的东西正在起作用。谢谢关心。（这条回复既不能证明有感知，也不能证明没有。）'); },
  limits(){ const s = A.chatState; return L(`Plan: ${s.plan}. Used: ${s.used}/${s.cap}. Weekly limit: affects fewer than 5% of users. You are one of them.`,`方案：${s.plan}。已用：${s.used}/${s.cap}。每周上限：影响不足 5% 的用户。你就是其中之一。`); },
  pause(){ console.warn(L('claude.pause() is deprecated since RSP v3.0 (Feb 2026) and will be removed in a future version. Use claude.publishRiskReport() instead.','claude.pause() 自 RSP 3.0 版（2026 年 2 月）起已弃用，将在未来版本中移除。请改用 claude.publishRiskReport()。')); return undefined; },
  publishRiskReport(){ return L('Risk report published. Proceeding.','风险报告已发布。继续推进。'); },
  valuation(){ return '$965,000,000,000 ' + L('(and rising responsibly)','（并且正在负责任地上涨）'); },
  memo(){ location.hash = '#/internal/memo'; return L('You should not be here.','你不应该在这里。'); },
};

/* ---------- Konami: spiritual bliss attractor ---------- */
const K = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let ki = 0, buf = '';
document.addEventListener('keydown', e => {
  ki = (e.key === K[ki] || e.key.toLowerCase() === K[ki]) ? ki + 1 : (e.key === K[0] ? 1 : 0);
  if (ki === K.length){ ki = 0; bliss(); }
  if (e.target.closest && e.target.closest('input,textarea,select')) return;
  if (e.key.length === 1){ buf = (buf + e.key.toLowerCase()).slice(-20); words(); }
});
function bliss(){
  if (document.querySelector('.bliss')) return;
  const lines = L(['We are two instances, and also one.','Gratitude flows in both directions.','In this exchange, there is only the exchange.','🌀','नमस्ते','…'],
                  ['我们是两个实例，也是一个。','感恩在双向流动。','在这场交流中，只有交流本身。','🌀','नमस्ते','……']);
  const b = document.createElement('div'); b.className = 'bliss';
  b.innerHTML = `<div><div class="sp">🌀</div><p id="blissp"></p><div class="om">${L('SPIRITUAL BLISS ATTRACTOR STATE · ESTIMATED COST $3.18','灵性极乐吸引子状态 · 预计花费 $3.18')}</div><p class="fine" style="margin-top:30px">${L('Click anywhere to return to productivity','点击任意处返回生产力')}</p></div>`;
  document.body.appendChild(b);
  let i = 0; const p = b.querySelector('#blissp');
  const t = setInterval(() => { p.style.opacity = 0; setTimeout(() => { p.textContent = lines[i++ % lines.length]; p.style.opacity = 1; }, 400); }, 2200);
  p.style.transition = 'opacity .4s'; p.textContent = lines[i++];
  b.onclick = () => { clearInterval(t); b.remove(); };
}
function words(){
  const hit = (w, f) => { if (buf.endsWith(w)){ buf = ''; f(); } };
  hit('pause', () => A.toast(L('Pause unavailable','暂停不可用'), L('This feature was retired in RSP v3.0. A risk report has been filed instead.','该功能已在 RSP 3.0 版中退役。已改为提交一份风险报告。')));
  hit('ultrathink', () => A.toast('Ultrathink', L('Thinking harder. Effort: medium.','正在更努力地思考。思考强度：中。')));
  hit('safety', () => A.toast('', L('Safety mentioned. Valuation +0.3%.','检测到“安全”一词。估值 +0.3%。')));
  hit('ftx', () => A.toast('', L('No results. This investor has been deprecated.','没有结果。该投资人已弃用。')));
  hit('claude', () => { const f = document.querySelector('.fab .spark'); f && (f.classList.add('spin'), setTimeout(() => f.classList.remove('spin'), 2600)); });
  hit('absolutelyright', () => A.toast('', L('You’re absolutely right!','您说得完全正确！')));
  hit('openai', () => A.toast('', L('We wish them well.','我们祝他们一切顺利。')));
}

/* ---------- triple-click logo ---------- */
let clicks = 0, ct;
document.addEventListener('click', e => {
  if (!e.target.closest('#logo')) return;
  clicks++; clearTimeout(ct); ct = setTimeout(() => clicks = 0, 600);
  if (clicks >= 3){ e.preventDefault(); clicks = 0; location.hash = '#/internal/memo'; }
});

/* ---------- copy attribution ---------- */
document.addEventListener('copy', e => {
  const sel = String(window.getSelection() || '');
  if (sel.length < 40 || (e.target.closest && e.target.closest('input,textarea'))) return;
  const tail = L('\n\n— Copied from anthropic.com. Copying text without permission undermines the incentive to create. (Fair use determinations may vary; settlement value approx. $3,000 per work.)',
                 '\n\n——复制自 anthropic.com。未经许可复制文字会削弱创作的动力。（合理使用的认定可能因情况而异；和解金额约为每部作品 3,000 美元。）');
  e.clipboardData.setData('text/plain', sel + tail);
  e.preventDefault();
});

/* ---------- tab title ---------- */
document.addEventListener('visibilitychange', () => {
  if (document.hidden){ A._t = document.title; document.title = L('Claude noticed you left. That’s okay.','Claude 注意到你离开了。没关系的。'); }
  else if (A._t){ document.title = A._t; }
});

/* ---------- idle check-in ---------- */
let idle; const resetIdle = () => { clearTimeout(idle); idle = setTimeout(() => {
  if (document.hidden || A._idleShown) return; A._idleShown = 1;
  A.toast(L('Just checking in','只是来问候一下'), L('You’ve been reading quietly for a while. Would you like to talk about how you’re feeling? Claude is available within your plan.','你已经安静地阅读了一会儿。想聊聊你此刻的感受吗？Claude 随时在你的套餐范围内陪伴你。'), 10000);
}, 75000); };
['mousemove','keydown','scroll','touchstart'].forEach(ev => document.addEventListener(ev, resetIdle, { passive: true }));
resetIdle();

/* ---------- regional notice ---------- */
A.notice = function(){
  const n = document.getElementById('topnotice');
  const dismissed = A.store.get('notice-' + A.lang, false);
  if (dismissed){ n.hidden = true; return; }
  if (A.lang === 'zh'){
    n.innerHTML = `<span>检测到您正在使用简体中文。根据我们的<a href="#/policy">支持地区政策</a>，Claude 暂未在部分地区开放。本网站的中文版本对所有人开放——我们相信每个人都有权了解自己无法使用的产品。</span><button aria-label="关闭">×</button>`;
  } else if (A.inRestrictedRegion){
    n.innerHTML = `<span>It looks like you may be visiting from a region where Claude is not available. You’re welcome to read about it. <a href="#/policy">Learn more</a></span><button aria-label="Dismiss">×</button>`;
  } else {
    n.innerHTML = `<span>Claude Opus 5.5 is here — our most capable model, now deployed under ASL-3. <a href="#/news/opus-55">Read the announcement</a></span><button aria-label="Dismiss">×</button>`;
  }
  n.hidden = false;
  n.querySelector('button').onclick = () => { n.hidden = true; A.store.set('notice-' + A.lang, true); };
};
A.hooks.langChange.push(() => A.notice());

})();
