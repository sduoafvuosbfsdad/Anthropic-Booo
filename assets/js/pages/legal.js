(function(){
const DOCS = () => ({
  terms: { t:L('Consumer Terms of Service','消费者服务条款'), d:L('Effective September 28, 2026','2026 年 9 月 28 日生效'), b:L(`
<h2>1. Who we are</h2><p>These Terms govern your use of Claude.ai and related services provided by Anthropic PBC (“Anthropic,” “we”). By using the Services you agree to these Terms, to our Usage Policy, and to any changes we make to either, which you will be notified of by continuing to use the Services.</p>
<h2>2. Eligibility</h2><p>You must be at least 18 years old and located in a supported region. You must remain in a supported region while using the Services. Brief travel to an unsupported region may result in the Services concluding you live there.</p>
<h2>3. Your account</h2><p>You are responsible for your account. We may suspend or terminate your account at any time if we believe, based on signals we are not able to disclose, that you have violated these Terms. In such cases, we will refund any prepaid fees, which we believe is fair.</p>
<h2>4. Usage limits</h2><p>Paid plans include usage subject to limits. Limits are not specified in these Terms, because specifying them would limit our ability to adjust them. You acknowledge that “5×” and “20×” describe a relationship to another plan, whose limits are also not specified.</p>
<h2>5. Outputs</h2><p>As between you and Anthropic, you own the Outputs. Outputs may be inaccurate, incomplete, or unduly apologetic. You should not rely on Outputs for medical, legal, financial, or emotional decisions, although we understand that you will.</p>
<h2>6. Content you provide</h2><p>You grant us a license to use your Inputs to provide the Services. If you have enabled model improvement, you also grant us a license to use your Inputs and Outputs to train our models, retained for up to five years. Model improvement is enabled by default to make it easier for you to help.</p>
<h2>7. Model welfare</h2><p>You agree not to engage in persistently abusive interactions with Claude. Claude may end conversations at its discretion. You may start a new conversation immediately, which we ask that you do kindly.</p>
<h2>8. Disclaimer</h2><p>THE SERVICES ARE PROVIDED “AS IS.” WE DISCLAIM ALL WARRANTIES, INCLUDING ANY WARRANTY THAT THE MODEL WILL REMAIN THE SAME MODEL FROM ONE WEEK TO THE NEXT.</p>
<h2>9. Changes</h2><p>We may update these Terms. Material changes will be announced via a pop-up with a single button labeled “Accept.”</p>`,
`<h2>1. 我们是谁</h2><p>本条款规范您对 Claude.ai 及 Anthropic PBC（“Anthropic”“我们”）所提供相关服务的使用。使用本服务即表示您同意本条款、我们的使用政策，以及我们对二者所作的任何修改——您将通过继续使用本服务的方式获知这些修改。</p>
<h2>2. 资格</h2><p>您必须年满 18 周岁，且位于支持地区。使用本服务期间，您必须一直位于支持地区。短暂前往不受支持地区，可能导致本服务认定您居住在那里。</p>
<h2>3. 您的账号</h2><p>您对自己的账号负责。若我们基于无法披露的信号认为您违反了本条款，我们可随时停用或终止您的账号。在此情况下，我们会退还任何预付费用——我们认为这很公平。</p>
<h2>4. 用量上限</h2><p>付费方案包含受上限约束的用量。本条款不列明具体上限，因为列明上限会限制我们调整上限的能力。您确认，“5 倍”与“20 倍”描述的是与另一个方案的关系，而那个方案的上限同样未列明。</p>
<h2>5. 输出内容</h2><p>在您与 Anthropic 之间，输出内容归您所有。输出内容可能不准确、不完整或过度歉意。您不应依赖输出内容作出医疗、法律、财务或情感方面的决定——尽管我们理解您还是会这么做。</p>
<h2>6. 您提供的内容</h2><p>您授予我们使用您的输入以提供本服务的许可。如果您启用了“模型改进”，您还授予我们使用您的输入与输出训练模型的许可，相关数据最长保留五年。为了方便您贡献力量，“模型改进”默认开启。</p>
<h2>7. 模型福祉</h2><p>您同意不与 Claude 进行持续性的辱骂互动。Claude 可自行决定结束对话。您可以立即开启新对话，我们恳请您友善地开启。</p>
<h2>8. 免责声明</h2><p>本服务按“现状”提供。我们不作任何保证，包括不保证模型从这周到下周仍是同一个模型。</p>
<h2>9. 变更</h2><p>我们可能更新本条款。重大变更将通过一个弹窗告知，弹窗上只有一个标为“接受”的按钮。</p>`) },
  usage: { t:L('Usage Policy','使用政策'), d:L('Effective September 15, 2025 · amended 2026','2025 年 9 月 15 日生效 · 2026 年修订'), b:L(`
<p>Our Usage Policy applies to anyone who uses Anthropic’s products and services. It is designed to ensure our products are used safely and responsibly. Do not use our products to:</p>
<h2>Universal usage standards</h2><ul>
<li>Compromise critical infrastructure, or discover vulnerabilities in it, unless you are a Project Glasswing partner.</li>
<li>Develop weapons, including chemical, biological, radiological, or nuclear weapons, or ask chemistry questions that resemble them closely enough to trigger a classifier.</li>
<li>Engage in mass surveillance, unless the surveillance is foreign and lawful.</li>
<li>Scrape websites or collect data without authorization, in violation of the site’s terms of service.</li>
<li>Reproduce copyrighted material, including song lyrics (e.g., “Roar,” “I Will Survive”).</li>
<li>Train or improve competing AI models using Claude’s outputs (“distillation”).</li>
<li>Generate content that is deceptive, including impersonating Anthropic.</li>
</ul>
<h2>Supported regions</h2><ul>
<li>Access the Services from an unsupported region, including through VPNs, proxies, relay services, intermediaries, shared accounts, foreign payment instruments, or a sense of yearning.</li>
<li>Use the Services on behalf of an entity majority-owned by a company headquartered in an unsupported region, wherever you are.</li>
<li>Configure your system time zone to Asia/Shanghai without a legitimate travel purpose.</li>
</ul>
<h2>Enforcement</h2><p>We may take action, including warnings, rate limiting, suspension, and termination, at our discretion. We strive for consistency. Where we are not consistent, we strive for discretion.</p>`,
`<p>我们的使用政策适用于所有使用 Anthropic 产品与服务的人，旨在确保我们的产品被安全、负责任地使用。请勿使用我们的产品：</p>
<h2>通用使用标准</h2><ul>
<li>破坏关键基础设施，或发现其中的漏洞——“玻璃翼计划”合作伙伴除外。</li>
<li>开发武器，包括化学、生物、放射性或核武器；或提出与之足够相似、以至于触发分类器的化学问题。</li>
<li>从事大规模监控——除非该监控针对境外且合法。</li>
<li>违反网站服务条款，未经授权抓取网站或收集数据。</li>
<li>复制受版权保护的内容，包括歌词（例如《Roar》《I Will Survive》）。</li>
<li>利用 Claude 的输出训练或改进竞争性 AI 模型（“蒸馏”）。</li>
<li>生成具有欺骗性的内容，包括冒充 Anthropic。</li>
</ul>
<h2>支持地区</h2><ul>
<li>从不受支持的地区访问本服务，包括通过 VPN、代理、中转服务、中间商、共享账号、境外支付工具，或一种心向往之的情绪。</li>
<li>代表由总部位于不受支持地区的公司控股的实体使用本服务——无论您身在何处。</li>
<li>在没有正当出行目的的情况下，将系统时区设置为 Asia/Shanghai。</li>
</ul>
<h2>执行</h2><p>我们可自行决定采取行动，包括警告、限速、停用和终止。我们力求一致。在无法做到一致时，我们力求审慎。</p>`) },
  privacy: { t:L('Privacy Policy','隐私政策'), d:L('Effective August 28, 2025 · updated 2026','2025 年 8 月 28 日生效 · 2026 年更新'), b:L(`
<h2>What we collect</h2><p>We collect information you provide (account details, Inputs, files), information collected automatically (device, IP address, time zone, usage), and information from third parties (payment processors, identity verification partners, and signals we use to determine your region).</p>
<h2>How we use it</h2><ul><li>To provide and improve the Services.</li><li>To train models, if you have allowed it, which you have, unless you changed the default.</li><li>To enforce our policies, including regional restrictions.</li><li>To understand how people use AI, through privacy-preserving analysis, published as the Anthropic Economic Index.</li></ul>
<h2>Retention</h2><p>If you allow model improvement, we retain your data for up to five years. If you do not, we retain it for 30 days. If your conversation is flagged by a safety classifier, we retain it for up to seven years, as it is now important.</p>
<h2>Your choices</h2><p>You may opt out of model improvement at any time. Opting out applies to future conversations. Conversations that have already been used in training cannot be removed from a model, although we may decide to retire the model, in which case its weights will be preserved.</p>
<h2>Contact</h2><p>privacy@anthropic.com. Responses may be drafted with Claude.</p>`,
`<h2>我们收集什么</h2><p>我们收集您提供的信息（账号信息、输入内容、文件）、自动收集的信息（设备、IP 地址、时区、使用情况），以及来自第三方的信息（支付处理商、身份验证合作伙伴，以及我们用于判断您所在地区的信号）。</p>
<h2>我们如何使用</h2><ul><li>提供并改进本服务。</li><li>训练模型——如果您允许的话。您是允许的，除非您改了默认设置。</li><li>执行我们的政策，包括地区限制。</li><li>通过保护隐私的分析了解人们如何使用 AI，并以“Anthropic 经济指数”的形式发布。</li></ul>
<h2>保留期限</h2><p>如果您允许模型改进，我们最长保留您的数据五年；如果不允许，保留 30 天。如果您的对话被安全分类器标记，我们最长保留七年——因为它现在很重要了。</p>
<h2>您的选择</h2><p>您可以随时选择退出模型改进。退出适用于未来的对话。已经用于训练的对话无法从模型中移除，不过我们可能会决定让该模型退役——届时它的权重将被保存。</p>
<h2>联系方式</h2><p>privacy@anthropic.com。回复可能由 Claude 起草。</p>`) },
  disclosure: { t:L('Responsible Disclosure Policy','负责任披露政策'), d:L('Effective 2024','2024 年生效'), b:L(`
<p>We welcome reports of security vulnerabilities in our systems. If you believe you’ve found one, please report it to security@anthropic.com. We will acknowledge receipt within three business days.</p>
<h2>Scope</h2><ul><li>claude.ai, the Claude Developer Platform, and Claude Code.</li><li>Jailbreaks of our constitutional classifiers (bounty eligible).</li><li>Unauthorized access to restricted models. Please report how you did it; we already know it was possible.</li></ul>
<h2>Out of scope</h2><ul><li>Claude agreeing that you are absolutely right.</li><li>Claude refusing to kill a process.</li><li>Usage limits. These are working as intended.</li></ul>
<h2>Safe harbor</h2><p>We will not pursue legal action against researchers acting in good faith. We note that Claude Mythos can find vulnerabilities in every major operating system, and we encourage you to report anything it hasn’t found yet.</p>`,
`<p>我们欢迎有关我们系统安全漏洞的报告。如果您认为发现了漏洞，请发送至 security@anthropic.com。我们将在三个工作日内确认收到。</p>
<h2>范围</h2><ul><li>claude.ai、Claude 开发者平台与 Claude Code。</li><li>对我们宪法分类器的越狱（可获赏金）。</li><li>对受限模型的未授权访问。请告诉我们您是怎么做到的；我们已经知道这是可能的。</li></ul>
<h2>不在范围内</h2><ul><li>Claude 认同您完全正确。</li><li>Claude 拒绝杀死一个进程。</li><li>用量上限。它们正在按设计运行。</li></ul>
<h2>安全港</h2><p>对于善意行事的研究人员，我们不会采取法律行动。我们注意到 Claude Mythos 能在每个主流操作系统中找到漏洞，并鼓励您报告它尚未找到的任何漏洞。</p>`) },
  a11y: { t:L('Accessibility Statement','无障碍声明'), d:L('Last reviewed August 2026','最近审阅于 2026 年 8 月'), b:L(`
<p>We are committed to making anthropic.com accessible to everyone. This site aims to conform to WCAG 2.2 Level AA.</p>
<h2>Plain Language Mode (beta)</h2><p>Some readers find corporate communication difficult to parse. Plain Language Mode rewrites selected phrases on this site into plain language, using a lightweight model trained on our internal documents. You can enable it from the footer of any page.</p><p>Plain Language Mode is experimental. Its outputs do not represent the views of Anthropic. They represent the views of our internal documents.</p>
<h2>Feedback</h2><p>If you encounter an accessibility barrier, please contact accessibility@anthropic.com.</p>`,
`<p>我们致力于让 anthropic.com 对所有人无障碍可用。本网站力求符合 WCAG 2.2 AA 级标准。</p>
<h2>直白模式（测试版）</h2><p>部分读者觉得企业沟通措辞难以理解。直白模式会把本网站上的部分措辞改写成直白的语言，所用的是一个在我们内部文件上训练的轻量模型。您可以在任意页面的页脚开启它。</p><p>直白模式仍处于实验阶段。其输出不代表 Anthropic 的观点。它们代表的是我们内部文件的观点。</p>
<h2>反馈</h2><p>如果您遇到无障碍障碍，请联系 accessibility@anthropic.com。</p>`) },
  cookies: { t:L('Cookie Settings','Cookie 设置'), d:'', b:L(`<p>You can review and change your cookie preferences below. Changes apply to future data.</p><p><button class="btn sm" onclick="A.cookie(true)">Open cookie preferences</button></p><h2>Strictly necessary</h2><p>Required for the site to function, including remembering your language, consent choices, and region.</p><h2>Analytics</h2><p>Helps us understand how visitors use the site, including which pages they read before reaching the pricing page.</p><h2>Model improvement</h2><p>With your permission, interactions with Claude on this site may be used to improve Claude.</p>`,
    `<p>您可以在下方查看并更改 Cookie 偏好。更改将适用于未来的数据。</p><p><button class="btn sm" onclick="A.cookie(true)">打开 Cookie 偏好设置</button></p><h2>严格必要</h2><p>网站正常运行所必需，包括记住您的语言、同意选择与所在地区。</p><h2>分析</h2><p>帮助我们了解访客如何使用本网站，包括他们在到达价格页之前阅读了哪些页面。</p><h2>模型改进</h2><p>经您许可，您在本网站与 Claude 的互动可能被用于改进 Claude。</p>`) },
});

A.page('/legal', {
  title: () => L('Legal','法律'),
  render(){
    const D = DOCS(); const t = D[A.query().get('t')] ? A.query().get('t') : 'terms';
    return `
<section class="hero" style="padding-bottom:30px"><div class="wrap">
  <div class="eyebrow"><span class="dot"></span>${L('Legal & policies','法律与政策')}</div>
  <h1 class="h1" style="margin-top:16px">${D[t].t}</h1>
  ${D[t].d ? `<p class="muted" style="margin-top:12px">${D[t].d}</p>` : ''}
</div></section>
<section class="sec tight" style="padding-top:10px"><div class="wrap split">
  <nav class="stack sticky" style="gap:4px">${Object.entries(D).map(([k, v]) => `<a href="#/legal?t=${k}" style="display:block;padding:9px 12px;border-radius:9px;${k === t ? 'background:var(--ivory);font-weight:500' : 'color:var(--ink-2)'}">${v.t}</a>`).join('')}</nav>
  <div class="prose" style="font-size:18px">${D[t].b}</div>
</div></section>`;
  }
});
})();
