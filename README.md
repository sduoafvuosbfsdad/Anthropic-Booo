# anthropic-site

A static, bilingual (EN / 中文) single-page site. No build step, no dependencies.

Open `index.html` directly in a browser (it works over `file://`). Fonts load from Google Fonts when the network allows; otherwise it falls back to system fonts.

## Structure

```
index.html
assets/css/site.css        design tokens + all components
assets/js/core.js          hash router, i18n (L(en, zh)), header/footer, modals, toasts
assets/js/art.js           hand-drawn SVG illustration set
assets/js/widgets.js       Claude chat engine, ⌘K search, cookie banner, charts, terminal playback
assets/js/pages/*.js       one file per page
assets/js/eggs.js          easter eggs
research/notes.md          research notes (real events / memes used as source material)
```

## Pages (hash routes)

`#/` home · `#/company` core views + timeline · `#/research` papers + Economic Index checker ·
`#/claude` models, Claude Code terminal, live chat · `#/pricing` plans + plan finder ·
`#/rsp` ASL slider + version diff · `#/welfare` welfare check + retired-model memorial ·
`#/constitution` · `#/team` · `#/news` + 11 articles · `#/careers` · `#/customers` ·
`#/governance` live tickers · `#/policy` region checker · `#/faq` · `#/legal?t=…` (6 docs) ·
`#/status` · `#/contact` · any unknown route → "retired page" 404

## Hidden layers (spoilers)

- **Plain Language Mode** (footer link): rewrites marked phrases into what they mean.
- **Chat**: 5-message limit → "Upgrade to Max" → weekly limit → peak-hour notice. Mentioning China / VPN / 代理 / 中转 gets the account suspended (with an appeal that's rejected in 0.4s). If your time zone is Asia/Shanghai, the suspension happens automatically on the 3rd message.
- **Triple-click the logo**: an internal memo with redactions revealed on hover.
- **Konami code**: spiritual bliss attractor state.
- **Type anywhere**: `pause`, `ultrathink`, `safety`, `ftx`, `openai`, `claude`.
- **⌘K / Ctrl+K search**: try `pause`, `china`, `ads`, `ipo`, `ftx`, `refund`.
- **Long news articles**: a context-window meter appears, then the first half auto-compacts.
- **Copying text** adds a copyright notice to the clipboard. **Switching tabs** changes the title. **Going idle for 75s** triggers a check-in.
- **Careers application**: pasting text or typing em dashes / "delve" is detected.
- **Console**: ASCII logo + `claude.help()` (`claude.pause()` is deprecated).
- Logo hover flips `\` to `/`; the footer wordmark flips as you scroll to the bottom.
