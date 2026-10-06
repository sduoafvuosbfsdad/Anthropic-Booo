/* Editorial illustration set — "Line & Field" (v3).
   Single-weight ink on brand fields. Commissioned 2024, re-commissioned after Series G. */
(function(){
const S = 'stroke="#141413" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"';
const F = 'fill="#faf9f5"';
let uid = 0;

const D = {
  books: `
    <g ${S}>
      <rect x="110" y="168" width="180" height="26" rx="3" ${F}/>
      <rect x="122" y="142" width="160" height="26" rx="3" ${F}/>
      <rect x="104" y="116" width="176" height="26" rx="3" ${F}/>
      <rect x="128" y="90" width="150" height="26" rx="3" ${F}/>
      <path d="M140 168v26M136 142v26M120 116v26M144 90v26"/>
      <path d="M296 70 L238 212" stroke-width="3"/>
      <path d="M300 60 l14 -26 l10 6 l-12 26z" ${F}/>
      <path d="M244 214 q-8 6 -2 14 M250 206 q10 2 12 12" />
      <path d="M262 100h22M258 128h24M266 154h22M262 182h30" stroke-dasharray="2 6"/>
    </g>
    <g ${S}><path d="M60 214h280"/></g>`,
  scale: `
    <g ${S}>
      <path d="M200 60v140M160 208h80M200 60l-4 -8h8z"/>
      <path d="M110 92 L290 70"/>
      <path d="M110 92 l-28 52 h56z" ${F}/>
      <path d="M290 70 l-28 52 h56z" ${F}/>
      <path d="M86 144 q24 14 48 0M266 122 q24 14 48 0"/>
      <path d="M104 132 c0 -10 12 -12 12 -2 c0 -10 12 -8 12 2 c0 8 -12 14 -12 14 s-12 -6 -12 -14z" ${F}/>
      <ellipse cx="290" cy="114" rx="20" ry="6" ${F}/><ellipse cx="290" cy="106" rx="20" ry="6" ${F}/><ellipse cx="290" cy="98" rx="20" ry="6" ${F}/>
      <ellipse cx="290" cy="90" rx="20" ry="6" ${F}/>
    </g>`,
  ladder: `
    <g ${S}>
      <path d="M150 220 L222 40M196 220 L262 46"/>
      <path d="M160 196h40M169 172h38M178 148h38M187 124h37M196 100h36M205 76h35M214 54h34"/>
      <path d="M232 40 c-30 0 -34 -26 -8 -28 c4 -18 34 -18 40 -2 c22 -4 30 22 10 30 z" ${F}/>
      <path d="M90 220h220"/>
    </g>`,
  node: `
    <g ${S}>
      <path d="M90 80 L170 120 L250 70 L320 130 M170 120 L150 190 L250 170 L320 130 M250 70 L250 170 M90 80 L150 190"/>
      <circle cx="90" cy="80" r="11" ${F}/><circle cx="170" cy="120" r="13" ${F}/><circle cx="250" cy="70" r="11" ${F}/>
      <circle cx="320" cy="130" r="11" ${F}/><circle cx="150" cy="190" r="11" ${F}/><circle cx="250" cy="170" r="14" ${F}/>
      <circle cx="252" cy="168" r="44" stroke-width="2.4"/>
      <path d="M284 200 L322 238" stroke-width="7"/>
      <text x="244" y="174" font-family="Georgia,serif" font-size="16" fill="#141413" stroke="none">$</text>
    </g>`,
  hourglass: `
    <g ${S}>
      <path d="M150 40h100M150 210h100"/>
      <path d="M160 40 c0 50 38 60 38 85 c0 25 -38 35 -38 85" ${F}/>
      <path d="M240 40 c0 50 -38 60 -38 85 c0 25 38 35 38 85" ${F}/>
      <path d="M172 62 c10 20 46 20 56 0 z" fill="#141413"/>
      <path d="M200 125 v-50" stroke-dasharray="2 5"/>
      <path d="M176 200 q24 -8 48 0" />
    </g>`,
  hand: `
    <g ${S}>
      <path d="M110 230 L150 170 C140 150 150 140 170 140 L260 138 C276 138 276 156 260 158 L214 160 L284 158 C302 158 302 178 284 180 L230 182 L290 182 C306 184 304 204 288 204 L222 206 L270 208 C284 210 282 228 266 228 L180 230 L150 250" ${F}/>
      <g transform="translate(212 92)" stroke="#d97757" stroke-width="5">
        <path d="M0 0 L0 -30M0 0 L26 -16M0 0 L28 10M0 0 L12 26M0 0 L-14 25M0 0 L-28 8M0 0 L-24 -18"/>
      </g>
    </g>`,
  chart: `
    <g ${S}>
      <path d="M70 210h270M70 210V50"/>
      <path d="M80 196 C130 192 150 184 180 170 S240 120 270 90 S310 52 330 40" stroke-width="3"/>
      <rect x="128" y="120" width="44" height="44" rx="8" ${F}/>
      <path d="M143 132v20M157 132v20"/>
      <path d="M122 114 L178 170" stroke="#d97757" stroke-width="3"/>
      <circle cx="330" cy="40" r="6" fill="#141413"/>
    </g>`,
  lighthouse: `
    <g ${S}>
      <path d="M180 220 L190 92 h28 L228 220z" ${F}/>
      <path d="M186 150 h36 M183 186 h42"/>
      <rect x="186" y="70" width="36" height="22" rx="3" ${F}/>
      <path d="M182 70 L204 50 L226 70z" ${F}/>
      <path d="M222 78 L340 48 M222 84 L340 112" stroke-dasharray="6 7"/>
      <path d="M186 78 L120 60" stroke-dasharray="6 7" opacity=".35"/>
      <path d="M60 222 q30 -10 60 0 t60 0 t60 0 t60 0 t60 0"/>
      <text x="324" y="86" font-family="Georgia,serif" font-size="26" fill="#141413" stroke="none">$</text>
    </g>`,
  cube: `
    <g ${S}>
      <path d="M200 70 L270 104 L270 178 L200 212 L130 178 L130 104z" ${F}/>
      <path d="M130 104 L200 138 L270 104M200 138V212"/>
      <path d="M154 96 l46 -22 46 22" opacity=".35"/>
      <path d="M290 70 h40 v22 h-40z" ${F}/><path d="M298 81h24" />
      <path d="M270 104 L290 92" stroke-dasharray="2 5"/>
    </g>`,
  shield: `
    <g ${S}>
      <path d="M200 46 L270 70 C270 140 246 184 200 210 C154 184 130 140 130 70z" ${F}/>
      <circle cx="200" cy="112" r="12"/><path d="M200 124v28"/>
      <path d="M262 150 L300 176" />
      <path d="M296 168 l40 0 l12 14 l-12 14 l-40 0z" ${F}/>
      <circle cx="305" cy="182" r="3" fill="#141413"/>
      <path d="M316 182h18" />
    </g>`,
  door: `
    <g ${S}>
      <path d="M150 220V50h100v170"/>
      <path d="M150 50 L210 64 V226 L150 220" ${F}/>
      <circle cx="198" cy="140" r="4" fill="#141413"/>
      <path d="M250 220h70M80 220h70"/>
      <g transform="translate(286 112)" stroke="#141413" stroke-width="3"><path d="M0 0 L0 -18M0 0 L15 -9M0 0 L17 6M0 0 L7 16M0 0 L-8 15M0 0 L-17 5M0 0 L-14 -11"/></g>
      <path d="M270 140 q16 30 30 70" stroke-dasharray="3 6"/>
    </g>`,
  candle: `
    <g ${S}>
      <rect x="176" y="110" width="48" height="104" rx="4" ${F}/>
      <path d="M200 110v-14"/>
      <path d="M200 92 c-14 -14 -2 -30 0 -40 c2 10 14 26 0 40z" fill="#d97757" stroke="#141413"/>
      <path d="M140 214h120"/>
      <path d="M190 130 c4 10 0 16 -2 22" opacity=".5"/>
    </g>`,
  seed: `
    <g ${S}>
      <ellipse cx="200" cy="200" rx="58" ry="14" ${F}/>
      <path d="M142 200v-18c0 -8 116 -8 116 0v18" ${F}/>
      <ellipse cx="200" cy="182" rx="58" ry="14" ${F}/>
      <path d="M200 182 C200 140 200 120 206 92"/>
      <path d="M204 120 c-34 -6 -46 -30 -40 -44 c22 0 40 18 40 44z" ${F}/>
      <path d="M206 100 c22 -24 52 -20 60 -10 c-14 18 -40 20 -60 10z" ${F}/>
    </g>`,
  globe: `
    <g ${S}>
      <circle cx="200" cy="130" r="82" ${F}/>
      <ellipse cx="200" cy="130" rx="36" ry="82"/>
      <path d="M118 130h164M130 88h140M130 172h140"/>
      <path d="M244 92 c8 -6 22 -4 26 6 c4 10 -6 22 -18 20 c-12 -2 -16 -18 -8 -26z" fill="#141413" opacity=".85"/>
      <path d="M300 70 l26 -26 M318 44 h8 v8" />
    </g>`,
  pen: `
    <g ${S}>
      <path d="M100 70 h170 c12 0 12 16 0 16 H120 v120 h170 c12 0 12 16 0 16 H100z" ${F}/>
      <path d="M138 110h110M138 130h110M138 150h90M138 170h60"/>
      <path d="M226 190 L310 92 l16 14 L242 204 l-22 8z" ${F}/>
      <path d="M220 212 q-20 8 -40 -2"/>
    </g>`,
  dc: `
    <g ${S}>
      <rect x="90" y="80" width="66" height="134" rx="4" ${F}/>
      <rect x="168" y="80" width="66" height="134" rx="4" ${F}/>
      <rect x="246" y="80" width="66" height="134" rx="4" ${F}/>
      <path d="M100 100h46M100 120h46M100 140h46M178 100h46M178 120h46M178 140h46M256 100h46M256 120h46M256 140h46"/>
      <path d="M200 80 V46 h120 l14 -20 M334 26 l-8 16 h14 l-10 18" />
      <path d="M70 214h260"/>
    </g>`,
  brain: `
    <g ${S}>
      <path d="M170 210 v-30 c-40 -6 -58 -34 -54 -70 c4 -40 40 -64 84 -60 c46 4 70 40 64 80 l16 28 l-18 6 v20 c0 12 -10 16 -26 14 l-18 -2 v14" ${F}/>
      <circle cx="196" cy="110" r="20"/><circle cx="196" cy="110" r="7"/>
      <path d="M196 84v6M196 130v6M170 110h6M216 110h6M178 92l5 5M210 124l5 5M214 92l-5 5M178 128l5 -5"/>
    </g>`,
  bridge: `
    <g ${S}>
      <path d="M50 190 h300"/>
      <path d="M120 190 V70 M280 190 V70 M112 70h16M272 70h16"/>
      <path d="M50 150 C90 150 110 80 120 70 C150 140 250 140 280 70 C290 80 310 150 350 150"/>
      <path d="M140 110v80M160 124v66M180 132v58M200 134v56M220 132v58M240 124v66M260 110v80"/>
      <path d="M50 214 q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0" opacity=".5"/>
    </g>`,
  mic: `
    <g ${S}>
      <rect x="172" y="50" width="56" height="96" rx="28" ${F}/>
      <path d="M150 110 c0 40 22 62 50 62 s50 -22 50 -62M200 172v34M168 210h64"/>
      <path d="M182 80h36M182 98h36M182 116h36"/>
    </g>`,
};

A.art = function(name, bg = 'clay', ratio){
  const id = 'wob' + (++uid);
  const body = D[name] || D.node;
  return `<div class="art bg-${bg}" ${ratio ? `style="aspect-ratio:${ratio}"` : ''}><svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs><filter id="${id}"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="${uid % 7}"/><feDisplacementMap in="SourceGraphic" scale="2.6"/></filter></defs>
    <g filter="url(#${id})">${body}</g></svg></div>`;
};
A.artNames = Object.keys(D);
})();
