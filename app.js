/* Chem Lab 11-12 - app core */
(function(){
'use strict';
const ALL = [...(window.C11||[]), ...(window.C12||[]), ...(window.OLD||[]), ...(window.JEE||[])];
ALL.forEach((e,i)=> e.n = i+1);
const byId = {}; ALL.forEach(e=>byId[e.id]=e);
const TIER = {
  c11:{label:'Class 11', sub:'NCERT lab manual, all units'},
  c12:{label:'Class 12', sub:'NCERT lab manual, all units'},
  old:{label:'Old syllabus extras', sub:'pre-rationalisation CBSE experiments'},
  jee:{label:'JEE Advanced level', sub:'beyond the school manual'}
};
const $app = document.getElementById('app');
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function subChem(s){ return esc(s).replace(/(\d+)/g,'<sub>$1</sub>').replace(/\^(-?\d*\+?-?)/g,'<sup>$1</sup>').replace(/<sub>(\d+)<\/sub><sup>([^<]*)<\/sup>/g,'<sup>$2</sup>'); }
// simpler: only superscripts for ^ patterns, subscripts off for safety
function chem(s){ return esc(s).replace(/\^([^\s,;)]*)/g,'<sup>$1</sup>'); }

const BENCH_SVG = `<svg class="hero-bench" viewBox="0 0 200 150" fill="none">
<path d="M30 40h14v-6h-8v10l-16 40a8 8 0 0 0 7 12h24a8 8 0 0 0 7-12L44 44V34h-8v6z" stroke="#7dd3c8" stroke-width="3" stroke-linejoin="round"/>
<path d="M33 66h16l9 20a4 4 0 0 1-4 6H28a4 4 0 0 1-4-6z" fill="#7dd3c8" opacity=".55"/>
<rect x="86" y="60" width="44" height="42" rx="5" stroke="#f9c46b" stroke-width="3"/>
<path d="M86 78h44v19a5 5 0 0 1-5 5H91a5 5 0 0 1-5-5z" fill="#f9c46b" opacity=".5"/>
<path d="M96 60v-8m8 8v-14m8 14v-6" stroke="#f9c46b" stroke-width="3" stroke-linecap="round"/>
<path d="M150 30v70m-14 0h28" stroke="#c4b5fd" stroke-width="3" stroke-linecap="round"/>
<rect x="142" y="30" width="16" height="46" rx="7" stroke="#c4b5fd" stroke-width="3"/>
<path d="M142 55h16v14a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7z" fill="#c4b5fd" opacity=".5"/>
</svg>`;

function tagFor(e){
  if(e.tag==='old') return '<span class="tag old">Old syllabus</span>';
  if(e.tag==='jee') return '<span class="tag jee">JEE level</span>';
  return '<span class="tag current">NCERT manual</span>';
}

function renderHome(){
  const counts = {c11:0,c12:0,old:0,jee:0};
  ALL.forEach(e=>counts[e.tier]++);
  const simCount = ALL.filter(e=>e.sim).length;
  $app.innerHTML = `
  <section class="hero">
    <h1>Class 11-12 Chemistry Practical Lab</h1>
    <p>Every experiment of the NCERT laboratory manual for Class 11 and 12, plus old-syllabus extras and JEE Advanced level extensions - each with realistic simulated readings, real chemistry and a virtual lab bench to perform it on.</p>
    <a class="cta" href="#/browse">Open the experiment library</a>
    ${BENCH_SVG}
  </section>
  <div class="stats">
    <div class="stat"><b>${counts.c11}</b><span>Class 11 experiments</span></div>
    <div class="stat"><b>${counts.c12}</b><span>Class 12 experiments</span></div>
    <div class="stat"><b>${counts.old + counts.jee}</b><span>Old + JEE level extras</span></div>
    <div class="stat"><b>${simCount}</b><span>Interactive lab simulators</span></div>
  </div>
  <div class="tier-tabs">
    <a href="#/browse?t=c11"><b>Class 11</b><span>Basic techniques, pH, equilibrium, titrations, salt analysis, Lassaigne's test</span></a>
    <a href="#/browse?t=c12"><b>Class 12</b><span>Sols, kinetics, thermochemistry, EMF, chromatography, redox titrations, organic preps, food tests</span></a>
    <a href="#/browse?t=old"><b>Old syllabus extras</b><span>Dialysis, emulsions, potash ferric oxalate, azo dye, iodoform, soap hardness</span></a>
    <a href="#/browse?t=jee"><b>JEE Advanced level</b><span>Iodometric, dichromate, EDTA and double-indicator titrations, gravimetry, Ka from pH curves, buffers, Winkler DO</span></a>
  </div>
  <div class="notice red"><b>Safety first.</b> This site is a study aid. Real chemicals (conc. H2SO4, H2S, sodium metal, bromine, AgNO3, dichromate and others in these procedures) are dangerous. Do every real experiment only in a school lab, under a teacher's supervision, with goggles and gloves.</div>
  <div class="notice blue"><b>About the readings.</b> Values shown as <i>representative/simulated</i> are computed from the real chemistry (Nernst equation, Henderson-Hasselbalch, pH charge balance, standard enthalpy values) or quoted as typical literature ranges. A real lab gives values of the same kind, never bit-identical numbers - treat these as what a careful student would typically record.</div>
  <div class="notice green"><b>Sources and coverage.</b> Experiment lists: NCERT Laboratory Manual Chemistry Class XI and XII (ncert.nic.in) and the CBSE senior-secondary chemistry practical syllabi including the pre-2023 lists. "Old syllabus" covers well-known removed experiments; if your board/book defines a different old list, tell me which and I will add it.</div>`;
}

let browseTier = 'all', browseQ = '';
function renderBrowse(){
  const params = new URLSearchParams((location.hash.split('?')[1]||''));
  if(params.get('t')) browseTier = params.get('t');
  const tiers = [['all','All'],['c11','Class 11'],['c12','Class 12'],['old','Old syllabus'],['jee','JEE level']];
  let html = `<h1 class="grouphead" style="margin-top:4px">Experiment library</h1>
  <div class="toolbar">
    <input type="search" id="q" placeholder="Search experiments, chemicals, topics..." value="${esc(browseQ)}">
  </div>
  <div class="chips">${tiers.map(([k,l])=>`<button class="chip ${browseTier===k?'on':''}" data-tier="${k}">${l}</button>`).join('')}</div>`;
  const q = browseQ.trim().toLowerCase();
  const list = ALL.filter(e => (browseTier==='all'||e.tier===browseTier) &&
    (!q || (e.title+' '+e.cat+' '+e.aim+' '+(e.materials||[]).join(' ')).toLowerCase().includes(q)));
  if(!list.length){ html += `<div class="search-empty">No experiment matches. Try another word.</div>`; }
  let lastCat = '';
  html += '<div class="exp-grid">';
  for(const e of list){
    if(e.cat !== lastCat){ html += `</div><h2 class="grouphead">${chem(e.cat)}</h2><div class="exp-grid">`; lastCat = e.cat; }
    html += `<a class="exp-card" href="#/exp/${e.id}">
      <div><span class="num">${e.n}</span><h3>${chem(e.title)}</h3>${e.sim?'<span class="tag sim">Virtual lab</span>':''}</div>
      <span class="cat">${chem(e.cat)} · ${tagFor(e)}</span>
      <span class="aim">${chem(e.aim)}</span>
    </a>`;
  }
  html += '</div>';
  $app.innerHTML = html;
  $app.querySelector('#q').addEventListener('input', ev=>{ browseQ = ev.target.value; renderBrowse();
    const el = $app.querySelector('#q'); el.focus(); el.setSelectionRange(el.value.length, el.value.length); });
  $app.querySelectorAll('.chip').forEach(c=>c.addEventListener('click', ()=>{ browseTier=c.dataset.tier; renderBrowse(); }));
  window.scrollTo(0,0);
}

function tbl(t){
  if(!t) return '';
  return `<div class="tblwrap"><table class="data"><caption>${chem(t.caption)}</caption>
    <tr>${t.head.map(h=>`<th>${chem(h)}</th>`).join('')}</tr>
    ${t.rows.map(r=>`<tr>${r.map(c=>`<td>${chem(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
}

function renderDetail(id){
  const e = byId[id];
  if(!e){ $app.innerHTML = '<p class="search-empty">Experiment not found.</p>'; return; }
  let html = `<div class="detail">
  <a class="backlink" href="#/browse?t=${e.tier}">&larr; Back to ${TIER[e.tier].label}</a>
  <h1><span class="num" style="display:inline-block;min-width:34px;height:34px;line-height:34px;text-align:center;background:var(--chip);color:var(--teal-d);border-radius:9px;margin-right:10px">${e.n}</span>${chem(e.title)} ${tagFor(e)}</h1>
  <p class="sub">${chem(e.cat)} · ${TIER[e.tier].label}</p>
  <div class="card"><h2>Aim</h2><p>${chem(e.aim)}</p></div>
  <div class="card"><h2>Theory</h2>${e.theory.map(p=>`<p>${chem(p)}</p>`).join('')}
    ${(e.eq||[]).map(x=>`<div class="eq">${esc(x)}</div>`).join('')}</div>`;
  if(e.sim) html += `<div id="simslot"></div>`;
  html += `
  <div class="card"><h2>Materials and apparatus</h2><ul>${e.materials.map(m=>`<li>${chem(m)}</li>`).join('')}</ul></div>
  <div class="card"><h2>Procedure</h2><ol>${e.procedure.map(s=>`<li>${chem(s)}</li>`).join('')}</ol></div>`;
  if(e.table) html += `<div class="card"><h2>Observations <span class="hind">(representative / simulated)</span></h2>${tbl(e.table)}</div>`;
  html += `<div class="card"><h2>Result</h2><p><b>${chem(e.result)}</b></p>
    ${(e.calc&&e.calc.length)?`<h2 style="margin-top:12px">Sample calculation</h2>${e.calc.map(c=>`<div class="eq">${esc(c)}</div>`).join('')}`:''}</div>
  <div class="card"><h2>Precautions</h2><ul>${e.precautions.map(p=>`<li>${chem(p)}</li>`).join('')}</ul></div>
  <div class="card" style="border-color:#f5b5b0;background:#fef9f8"><h2 style="color:var(--red)">Safety</h2><ul>${(e.safety||[]).map(p=>`<li>${chem(p)}</li>`).join('')}</ul></div>
  <div class="card viva"><h2>Viva questions</h2>${(e.viva||[]).map(([q,a])=>`<details><summary>${chem(q)}</summary><p>${chem(a)}</p></details>`).join('')}</div>`;
  if(e.jee && e.jee.length) html += `<div class="card"><h2>JEE Advanced link</h2><ul>${e.jee.map(p=>`<li>${chem(p)}</li>`).join('')}</ul></div>`;
  html += '</div>';
  $app.innerHTML = html;
  if(e.sim) SIMS[e.sim](document.getElementById('simslot'), e);
  window.scrollTo(0,0);
}

function renderSimsHub(){
  const list = ALL.filter(e=>e.sim);
  $app.innerHTML = `<h1 class="grouphead" style="margin-top:4px">Virtual lab bench</h1>
  <p style="color:var(--ink2);font-size:14.5px;margin-bottom:10px">Perform the experiment yourself: run the burette, watch the flask, read the stopwatch, record concordant readings and compute the result - with the real chemistry running underneath.</p>
  <div class="exp-grid">${list.map(e=>`<a class="exp-card" href="#/exp/${e.id}">
    <div><span class="num">${e.n}</span><h3>${chem(e.title)}</h3></div>
    <span class="cat">${chem(e.cat)}</span></a>`).join('')}</div>`;
}

function renderSaltLab(){
  $app.innerHTML = `<h1 class="grouphead" style="margin-top:4px">Salt analysis lab</h1>
  <p style="color:var(--ink2);font-size:14.5px">Choose a salt (or build a pair) and walk the real systematic scheme - physical appearance, anion tests with dilute and concentrated H2SO4, then group-wise cation analysis - with realistic observations at each step.</p>
  <div id="salt-slot"></div>`;
  SIMS.salt(document.getElementById('salt-slot'), null, true);
}

window.renderRoute = function(){
  const h = location.hash || '#/';
  const base = h.split('?')[0];
  document.querySelectorAll('.topnav a').forEach(a=>{
    a.classList.toggle('on', a.getAttribute('href')===base || (base==='#/exp'&&false));
  });
  if(base.startsWith('#/exp/')) return renderDetail(base.slice(6));
  if(base === '#/browse') return renderBrowse();
  if(base === '#/salt') return renderSaltLab();
  if(base === '#/sims') return renderSimsHub();
  return renderHome();
};
window.addEventListener('hashchange', renderRoute);

/* ============================== SIMULATORS ============================== */
const SIMS = {};
const rnd = (a,b)=> a + Math.random()*(b-a);

/* --- exact pH from charge balance (25 C) --- */
function pHof(naMol, clMol, volL, acids){
  const naC = naMol/volL, clC = clMol/volL, KW = 1e-14;
  function negQ(h){
    let s = KW/h + clC;
    for(const a of (acids||[])){
      const C = a.mol/volL, Ka1 = Math.pow(10,-a.pKa1);
      if(a.pKa2==null){ s += C*Ka1/(h+Ka1); }
      else{ const Ka2 = Math.pow(10,-a.pKa2), D = h*h + Ka1*h + Ka1*Ka2;
        s += C*(Ka1*h + 2*Ka1*Ka2)/D; }
    }
    return s;
  }
  let lo = 1e-14, hi = 1;
  for(let i=0;i<100;i++){
    const mid = Math.sqrt(lo*hi);
    if(hi/lo < 1.0000001) break;
    (mid + naC - negQ(mid)) > 0 ? hi = mid : lo = mid;
  }
  return -Math.log10(Math.sqrt(lo*hi));
}

function universalColor(pH){
  const bands = [[1,'#dc2626'],[2,'#dc2626'],[3,'#ea580c'],[4,'#f97316'],[5,'#f59e0b'],[6,'#facc15'],[7,'#16a34a'],[8,'#0d9488'],[9,'#2563eb'],[10,'#4f46e5'],[11,'#6d28d9'],[12,'#7c3aed'],[13,'#86198f'],[14,'#86198f']];
  const p = Math.max(0,Math.min(14,Math.round(pH)));
  const names = {1:'red',2:'red',3:'orange-red',4:'orange',5:'amber',6:'yellow',7:'green',8:'teal',9:'blue',10:'indigo',11:'violet',12:'violet',13:'deep violet',14:'deep violet'};
  return {c:(bands[p]||bands[7])[1], label:names[p]||'green'};
}
function indicatorColor(kind, pH){
  if(kind==='phenolphthalein') return pH>=8.3 ? {c:'#f472b6',label:'pink'} : {c:'#eef4f7',label:'colourless'};
  if(kind==='methylorange') return pH<3.1 ? {c:'#ef4444',label:'red'} : pH<4.4 ? {c:'#fb923c',label:'orange'} : {c:'#fde047',label:'yellow'};
  return universalColor(pH);
}

/* ---------- glassware SVG ---------- */
function flaskSVG(color, liquidY){
  const y = liquidY==null? 108 : liquidY;
  return `<svg width="140" height="150" viewBox="0 0 150 160">
  <defs><clipPath id="flk"><path d="M60 18 h30 v36 l28 68 a15 15 0 0 1 -13 20 h-60 a15 15 0 0 1 -13 -20 l28 -68 z"/></clipPath></defs>
  <path d="M60 18 h30 v36 l28 68 a15 15 0 0 1 -13 20 h-60 a15 15 0 0 1 -13 -20 l28 -68 z" fill="rgba(207,227,238,.16)" stroke="#8fa9bd" stroke-width="2.5"/>
  <rect class="liquid" x="20" y="${y}" width="110" height="${150-y}" clip-path="url(#flk)" fill="${color}"/>
  <line x1="58" y1="18" x2="92" y2="18" stroke="#8fa9bd" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}
function buretteSVG(frac){
  const top = 26, h = 116, lvl = top + h*(1-frac);
  return `<svg width="56" height="170" viewBox="0 0 56 170">
  <rect x="22" y="20" width="12" height="122" fill="rgba(207,227,238,.14)" stroke="#8fa9bd" stroke-width="2"/>
  <rect class="liquid" x="24" y="${lvl}" width="8" height="${top+h-lvl}" fill="#dbeafe" opacity=".85"/>
  ${[0,1,2,3,4].map(i=>`<line x1="22" y1="${top+i*29}" x2="30" y2="${top+i*29}" stroke="#8fa9bd" stroke-width="1"/>`).join('')}
  <rect x="24" y="142" width="8" height="8" fill="#8fa9bd"/>
  <path d="M28 150 l0 12" stroke="#8fa9bd" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

/* ---------- titration simulator ---------- */
const TIT_PRESETS = {
 'c11-naoh-oxalic': { mode:'acidbase', ind:'phenolphthalein',
   flask:'NaOH 20.0 mL (about 0.1 M) + phenolphthalein', burette:'Oxalic acid 0.0500 M (M/20)',
   setup:{na:0.002, cl:0, acids:[]},
   titrant:V=>({na:0, cl:0, acids:[{mol:0.05*V/1000, pKa1:1.25, pKa2:4.27}]}),
   vol0:20, eq:20.0, indName:'Phenolphthalein (pink in base)',
   calcLines:v=>['M(NaOH) = 2 x M(oxalic) x V(oxalic) / V(NaOH)','= 2 x 0.0500 x '+v.toFixed(1)+' / 20.0 = '+(2*0.05*v/20).toFixed(4)+' M','Strength = '+(2*0.05*v/20*40).toFixed(2)+' g/L'] },
 'c11-hcl-na2co3': { mode:'acidbase', ind:'methylorange',
   flask:'HCl 20.0 mL (about 0.1 M) + methyl orange', burette:'Na2CO3 0.0500 M (M/20)',
   setup:{na:0, cl:0.002, acids:[]},
   titrant:V=>({na:2*0.05*V/1000, cl:0, acids:[{mol:0.05*V/1000, pKa1:6.35, pKa2:10.33}]}),
   vol0:20, eq:20.0, indName:'Methyl orange (red in acid)',
   calcLines:v=>['M(HCl) = 2 x M(Na2CO3) x V(Na2CO3) / V(HCl)','= 2 x 0.0500 x '+v.toFixed(1)+' / 20.0 = '+(2*0.05*v/20).toFixed(4)+' M','Strength = '+(2*0.05*v/20*36.46).toFixed(2)+' g/L'] },
 'c11-ph-titration': { mode:'acidbase', ind:'universal',
   flask:'HCl 25.0 mL, 0.100 M + universal indicator', burette:'NaOH 0.100 M',
   setup:{na:0, cl:0.0025, acids:[]},
   titrant:V=>({na:0.1*V/1000, cl:0, acids:[]}),
   vol0:25, eq:25.0, indName:'Universal indicator',
   calcLines:v=>['Equivalence at '+(25.0).toFixed(1)+' mL; pH at equivalence = 7.00 (strong acid + strong base, 25 C)'] },
 'jee-weakacid-ka': { mode:'acidbase', ind:'universal', halfEq:true,
   flask:'CH3COOH 25.0 mL, 0.100 M', burette:'NaOH 0.100 M',
   setup:{na:0, cl:0, acids:[{mol:0.0025, pKa1:4.74}]},
   titrant:V=>({na:0.1*V/1000, cl:0, acids:[]}),
   vol0:25, eq:25.0, indName:'pH probe (universal indicator colours shown)',
   calcLines:v=>['Half-equivalence at '+(v/2).toFixed(2)+' mL: pH there = pKa = 4.74','Ka = 10^-4.74 = 1.8 x 10^-5 (acetic acid)'] },
 'jee-double-indicator': { mode:'acidbase', ind:'dual', eq2:8.2,
   flask:'Na2CO3 + NaHCO3 mixture, 25.0 mL + phenolphthalein (then methyl orange)', burette:'HCl 0.100 M',
   setup:{na:2*8.2e-4+8.2e-4, cl:0, acids:[{mol:1.64e-3, pKa1:6.35, pKa2:10.33}]},
   titrant:V=>({na:0, cl:0.1*V/1000, acids:[]}),
   vol0:25, eq:24.6, indName:'Phenolphthalein + methyl orange (two endpoints: 8.2 mL and 24.6 mL)',
   calcLines:v=>['P = 8.2 mL (phenolphthalein): Na2CO3 needs 2P = 16.4 mL','M = '+v.toFixed(1)+' mL total (methyl orange): NaHCO3 needs (M - 2P) = '+(v-16.4).toFixed(1)+' mL','Na2CO3 = 0.100 x 16.4 x 106 / (2 x 25) = 3.48 g/L','NaHCO3 = 0.100 x '+(v-16.4).toFixed(1)+' x 84 / 25 = '+(0.1*(v-16.4)*84/25).toFixed(2)+' g/L'] },
 'c12-kmno4-oxalic': { mode:'colour',
   flask:'Oxalic acid 0.0500 M, 20.0 mL + dil. H2SO4, heated to 60-70 C', burette:'KMnO4 solution (unknown, about 0.02 M)',
   eq:20.0, indName:'Self-indicator (KMnO4)',
   colourFn:V=> V<19.5 ? {c:'#eef4f7',label:'colourless'} : V<20.05 ? {c:'#f9a8d4',label:'first permanent pale pink - ENDPOINT'} : {c:'#ec4899',label:'pink (excess KMnO4)'},
   calcLines:v=>['M(KMnO4) = (2/5) x 0.0500 x 20.0 / '+v.toFixed(1),'= '+(0.4/v).toFixed(4)+' M','Strength = '+(0.4/v*158.03).toFixed(2)+' g/L'] },
 'c12-kmno4-fas': { mode:'colour',
   flask:"Mohr's salt 0.0500 M, 20.0 mL + dil. H2SO4 (cold)", burette:'KMnO4 solution (unknown)',
   eq:25.0, indName:'Self-indicator (KMnO4)',
   colourFn:V=> V<24.5 ? {c:'#dcfce7',label:'pale green (Fe2+)'} : V<25.05 ? {c:'#f9a8d4',label:'first permanent pale pink - ENDPOINT'} : {c:'#ec4899',label:'pink (excess)'},
   calcLines:v=>['M(KMnO4) = (1/5) x 0.0500 x 20.0 / '+v.toFixed(1),'= '+(0.2/v).toFixed(4)+' M'] },
 'jee-bleaching-powder': { mode:'colour',
   flask:'Liberated iodine + starch (blue-black), from 25 mL bleaching-powder suspension + KI + acid', burette:'Na2S2O3 0.100 M',
   eq:17.7, indName:'Starch (added near endpoint)',
   colourFn:V=> V<16.5 ? {c:'#1e3a8a',label:'blue-black (I2-starch)'} : V<17.55 ? {c:'#93c5fd',label:'pale blue - nearly there'} : V<17.85 ? {c:'#eef4f7',label:'colourless - ENDPOINT'} : {c:'#eef4f7',label:'colourless (past endpoint)'},
   calcLines:v=>['Chlorine in 25 mL = '+v.toFixed(1)+' x 0.003546 = '+(v*0.003546).toFixed(4)+' g','Sample in 25 mL = 0.500 g','Available chlorine = '+(v*0.003546*100/0.5).toFixed(1)+' %'] },
 'jee-copper-iodometric': { mode:'colour',
   flask:'Cu2+ 25 mL + excess KI (brown I2 + Cu2I2 ppt) + starch', burette:'Na2S2O3 0.100 M',
   eq:19.5, indName:'Starch + NH4SCN near endpoint',
   colourFn:V=> V<18.5 ? {c:'#92400e',label:'brown (I2)'} : V<19.4 ? {c:'#60a5fa',label:'pale blue'} : V<19.65 ? {c:'#e5e7eb',label:'white-grey ppt - ENDPOINT'} : {c:'#e5e7eb',label:'past endpoint'},
   calcLines:v=>['Cu in 25 mL = '+v.toFixed(1)+' x 0.006354 = '+(v*0.006354).toFixed(3)+' g','Concentration = '+(v*0.006354*40).toFixed(2)+' g/L'] },
 'jee-dichromate': { mode:'colour',
   flask:'Fe2+ 25.0 mL + H2SO4/H3PO4 + diphenylamine', burette:'K2Cr2O7 0.0200 M',
   eq:24.4, indName:'Diphenylamine (internal indicator)',
   colourFn:V=> V<24.0 ? {c:'#4d7c0f',label:'green (Cr3+)'} : V<24.5 ? {c:'#7c3aed',label:'violet-blue flash - ENDPOINT'} : {c:'#5b21b6',label:'deep violet-blue'},
   calcLines:v=>['M(Fe2+) = 6 x 0.0200 x '+v.toFixed(1)+' / 25.0 = '+(6*0.02*v/25).toFixed(4)+' M','Iron = '+(6*0.02*v/25*55.85).toFixed(2)+' g/L'] },
 'jee-edta-hardness': { mode:'colour',
   flask:'Water sample 50 mL + pH 10 buffer + Eriochrome Black T', burette:'EDTA 0.0100 M',
   eq:15.1, indName:'Eriochrome Black T',
   colourFn:V=> V<14.6 ? {c:'#9f1239',label:'wine red'} : V<15.0 ? {c:'#6d28d9',label:'purple - very close'} : V<15.3 ? {c:'#2563eb',label:'steel blue - ENDPOINT'} : {c:'#2563eb',label:'steel blue (past)'},
   calcLines:v=>['Hardness = '+v.toFixed(1)+' x 1.0 x 1000 / 50 = '+(v*20).toFixed(0)+' mg/L as CaCO3'] },
 'jee-mohr-cl': { mode:'colour',
   flask:'Cl- solution 25 mL + K2CrO4 (lemon yellow)', burette:'AgNO3 0.100 M',
   eq:21.2, indName:'K2CrO4 (Mohr)',
   colourFn:V=> V<21.0 ? {c:'#fef3c7',label:'lemon yellow + white AgCl ppt'} : V<21.35 ? {c:'#d97706',label:'first permanent red-brown tinge - ENDPOINT'} : {c:'#b45309',label:'red-brown (excess Ag+)'},
   calcLines:v=>['Chloride = '+v.toFixed(1)+' x 0.003546 x 40 = '+(v*0.003546*40).toFixed(2)+' g/L'] }
};

SIMS.titration = function(slot, exp){
  const P = TIT_PRESETS[exp.id]; if(!P) return;
  const maxV = Math.min(50, Math.ceil(P.eq*1.6));
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: perform this titration</h2>
  <p class="hint">Drag the slider or tap +1 mL / +1 drop to run the burette. Watch the flask, stop at the endpoint, then record your titre. Do three runs for concordant readings.</p>
  <div class="bench">
    <div class="glassware"><div id="bur">${buretteSVG(1)}</div><div class="glabel">${esc(P.burette)}</div></div>
    <div class="glassware"><div id="flask">${flaskSVG('#eef4f7')}</div><div class="glabel">${esc(P.flask)}</div></div>
  </div>
  <div class="readout">
    <div class="gauge"><b id="g-vol">0.00</b><span>mL added</span></div>
    ${P.mode==='acidbase'?'<div class="gauge"><b id="g-ph">-</b><span>pH</span></div>':''}
    <div class="gauge" style="min-width:190px"><b id="g-col" style="font-size:14px;padding-top:6px">-</b><span>flask shows</span></div>
  </div>
  <div class="controls">
    <div><label>Add titrant</label><input type="range" id="t-slider" min="0" max="${maxV}" step="0.05" value="0" style="width:min(300px,60vw)"></div>
    <button id="t-add1" class="ghost">+1 mL</button>
    <button id="t-adddrop" class="ghost">+1 drop (0.05)</button>
    <button id="t-record" class="big-btn">Record titre</button>
    <button id="t-reset" class="ghost">Refill burette (next run)</button>
  </div>
  <div class="warn-strip">Indicator: ${esc(P.indName)}. Endpoint = ${P.eq.toFixed(1)} mL for the given solutions. Judge by the flask colour like a real lab.</div>
  <div id="t-curve"></div>
  <div id="t-readings"></div>
  <div id="t-result"></div>
  <p class="note">Simulated from the exact reaction stoichiometry and (for acid-base) full charge-balance pH at 25 C. A real burette reads to 0.05-0.1 mL; small random error is included in recorded readings.</p></div>`;

  let added = 0, run = 0, readings = [];
  const slider = slot.querySelector('#t-slider');

  function currentPH(){
    if(P.mode!=='acidbase') return null;
    const add = P.titrant(added);
    return pHof(P.setup.na+add.na, P.setup.cl+add.cl, (P.vol0+added)/1000,
      (P.setup.acids||[]).concat(add.acids));
  }
  function flaskState(){
    if(P.mode==='acidbase'){ const ph = currentPH();
      if(P.ind==='dual'){ // show both indicators
        const phCol = indicatorColor('phenolphthalein', ph), mo = indicatorColor('methylorange', ph);
        return {c: ph>=8.3 ? phCol.c : mo.c, label:'phenolphthalein: '+phCol.label+' / methyl orange: '+mo.label, ph};
      }
      const ic = indicatorColor(P.ind, ph); return {c:ic.c, label:ic.label, ph};
    }
    return P.colourFn(added);
  }
  function draw(){
    slider.value = added;
    slot.querySelector('#bur').innerHTML = buretteSVG(1 - added/maxV);
    const st = flaskState();
    slot.querySelector('#flask').innerHTML = flaskSVG(st.c);
    slot.querySelector('#g-vol').textContent = added.toFixed(2);
    if(st.ph!=null) slot.querySelector('#g-ph').textContent = st.ph.toFixed(2);
    slot.querySelector('#g-col').textContent = st.label;
    drawCurve(st.ph);
  }
  /* pH curve */
  let curvePts = null;
  function drawCurve(ph){
    if(P.mode!=='acidbase') return;
    const box = slot.querySelector('#t-curve');
    if(!curvePts){
      curvePts = [];
      for(let v=0; v<=maxV; v+=maxV/140){
        const add = P.titrant(v);
        curvePts.push([v, pHof(P.setup.na+add.na, P.setup.cl+add.cl, (P.vol0+v)/1000, (P.setup.acids||[]).concat(add.acids))]);
      }
    }
    const W=640,H=210, padL=38, padB=28, padT=12;
    const x = v => padL + (W-padL-10)*v/maxV, y = p => padT + (H-padB-padT)*(1-p/14);
    const path = curvePts.map((p,i)=> (i?'L':'M')+x(p[0]).toFixed(1)+','+y(p[1]).toFixed(1)).join(' ');
    box.innerHTML = `<div class="curve-wrap"><svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto">
      ${[0,2,4,6,8,10,12,14].map(v=>`<line x1="${x(0)}" y1="${y(v)}" x2="${x(maxV)}" y2="${y(v)}" stroke="#1e3a52"/><text x="8" y="${y(v)+4}" fill="#8aa5ba" font-size="11">${v}</text>`).join('')}
      <line x1="${x(P.eq)}" y1="${y(0)}" x2="${x(P.eq)}" y2="${y(14)}" stroke="#2f9e8f" stroke-dasharray="4 4"/>
      ${P.eq2?`<line x1="${x(P.eq2)}" y1="${y(0)}" x2="${x(P.eq2)}" y2="${y(14)}" stroke="#f59e0b" stroke-dasharray="4 4"/>`:''}
      ${P.halfEq?`<line x1="${x(P.eq/2)}" y1="${y(0)}" x2="${x(P.eq/2)}" y2="${y(14)}" stroke="#c4b5fd" stroke-dasharray="4 4"/><text x="${x(P.eq/2)+4}" y="${y(4.9)}" fill="#c4b5fd" font-size="11">pH = pKa here</text>`:''}
      <path d="${path}" fill="none" stroke="#7dd3c8" stroke-width="2.2"/>
      <circle cx="${x(added)}" cy="${y(Math.max(0,Math.min(14,ph||0)))}" r="5" fill="#f9c46b" stroke="#0e2233" stroke-width="2"/>
      <text x="${x(maxV)-120}" y="${H-8}" fill="#8aa5ba" font-size="11">mL titrant added</text>
      <text x="${x(P.eq)-30}" y="${padT+8}" fill="#2f9e8f" font-size="11">equivalence ${P.eq.toFixed(1)} mL</text>
    </svg></div>`;
  }
  function readingsHTML(){
    if(!readings.length) return '';
    const conc = readings.length>=2 ? (readings[0].toFixed(1)+' mL'+(readings.length>2?'; spread '+(Math.max(...readings)-Math.min(...readings)).toFixed(1)+' mL':'')) : 'need at least 2 concordant readings';
    return `<div class="curve-wrap" style="margin-top:12px"><b style="color:#7dd3c8;font-size:14px">Your readings</b>
    <table class="data"><tr><th>Run</th>${readings.map((_,i)=>`<th>${'I'.repeat(i+1)}</th>`).join('')}</tr>
    <tr><td>Volume of titrant (mL)</td>${readings.map(r=>`<td>${r.toFixed(1)}</td>`).join('')}</tr></table>
    <p style="color:#9fb4c4;font-size:12.5px;margin-top:4px">Concordant value: ${conc}</p></div>`;
  }
  slot.querySelector('#t-add1').onclick = ()=>{ added = Math.min(maxV, added+1); draw(); };
  slot.querySelector('#t-adddrop').onclick = ()=>{ added = Math.min(maxV, added+0.05); draw(); };
  slider.oninput = ()=>{ added = parseFloat(slider.value); draw(); };
  slot.querySelector('#t-reset').onclick = ()=>{ added = 0; draw(); };
  slot.querySelector('#t-record').onclick = ()=>{
    const noisy = Math.round((added + rnd(-0.08,0.08))*10)/10; // burette read to 0.1 mL
    readings.push(noisy); run++;
    slot.querySelector('#t-readings').innerHTML = readingsHTML();
    const res = slot.querySelector('#t-result');
    if(readings.length>=2){
      const v = readings.slice(-2).reduce((a,b)=>a+b)/2;
      res.innerHTML = `<div class="result-box"><b>Result (using concordant value ${v.toFixed(1)} mL)</b>
        ${P.calcLines(v).map(l=>`<p>${esc(l)}</p>`).join('')}</div>`;
    }
    added = 0; draw();
  };
  draw();
};

/* ---------- pH lab ---------- */
const PH_JUICES = [
 ['Lemon juice', 2.3, 'citric + ascorbic acid'], ['Orange juice', 3.7, 'citric acid'],
 ['Apple juice', 3.7, 'malic acid'], ['Tomato juice', 4.3, 'citric + malic acids'],
 ['Ripe mango juice', 4.0, 'citric, malic, tartaric'], ['Banana pulp extract', 4.8, 'malic acid']];
SIMS.ph = function(slot, exp){
  const id = exp ? exp.id : '';
  let body = '';
  if(id==='c11-ph-juices'){
    body = `<div class="controls"><div><label>Fruit juice</label><select id="ph-sel">${PH_JUICES.map((j,i)=>`<option value="${i}">${j[0]}</option>`).join('')}</select></div></div>
    <div class="readout"><div class="gauge"><b id="ph-out">-</b><span>pH (typical)</span></div>
    <div class="gauge"><b id="ph-note" style="font-size:13px;padding-top:8px">-</b><span>acids present</span></div></div>
    <div class="phstrip">${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(p=>`<i style="background:${universalColor(p).c}"></i>`).join('')}</div>
    <div class="note">Typical literature ranges, e.g. lemon 2.2-2.4, orange 3.3-4.2, apple 3.4-4.0, tomato 4.1-4.6. Real juice varies with ripeness.</div>`;
  } else if(id==='c11-ph-dilution'){
    body = `<div class="controls">
      <div><label>Solution</label><select id="ph-sel"><option value="hcl">HCl (strong acid)</option><option value="ch3cooh">CH3COOH (weak acid, Ka 1.8e-5)</option><option value="naoh">NaOH (strong base)</option><option value="nh4oh">NH4OH (weak base, Kb 1.8e-5)</option></select></div>
      <div><label>Concentration</label><select id="ph-conc"><option value="0.1">0.1 M</option><option value="0.01">0.01 M</option><option value="0.001">0.001 M</option></select></div></div>
    <div class="readout"><div class="gauge"><b id="ph-out">-</b><span>pH (computed, 25 C)</span></div>
    <div class="gauge"><b id="ph-note" style="font-size:13px;padding-top:8px">-</b><span>how it was computed</span></div></div>
    <div class="phstrip">${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(p=>`<i style="background:${universalColor(p).c}"></i>`).join('')}</div>`;
  } else if(id==='c11-ph-common-ion' || id==='jee-buffer'){
    body = `<div class="controls">
      <div><label>System</label><select id="ph-sel"><option value="ac">CH3COOH + CH3COONa (pKa 4.74)</option><option value="am">NH4OH + NH4Cl (pKb 4.74)</option></select></div>
      <div><label>salt : acid/base ratio - <span id="ph-rat">1.0</span></label><input type="range" id="ph-ratio" min="-1" max="1" step="0.05" value="0" style="width:min(260px,55vw)"></div></div>
    <div class="readout"><div class="gauge"><b id="ph-out">-</b><span>pH (Henderson-Hasselbalch)</span></div>
    <div class="gauge"><b id="ph-note" style="font-size:13px;padding-top:8px">-</b><span>what it means</span></div></div>
    <div class="phstrip">${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(p=>`<i style="background:${universalColor(p).c}"></i>`).join('')}</div>
    <div class="note">At ratio 1 the pH equals pKa (acid) or 14 - pKb (base). This is the buffer sweet spot - it resists pH change best here.</div>`;
  } else { // salt hydrolysis
    body = `<div class="controls"><div><label>Salt solution (0.1 M)</label><select id="ph-sel">
      <option value="7|NaCl: strong acid (HCl) + strong base (NaOH)|neutral - no hydrolysis">NaCl</option>
      <option value="2.0|FeCl3: strong acid (HCl) + weak base (Fe(OH)3)|acidic - Fe3+ + 3H2O <=> Fe(OH)3 + 3H+">FeCl3</option>
      <option value="11.6|Na2CO3: weak acid (H2CO3) + strong base (NaOH)|basic - CO3^2- + H2O <=> HCO3- + OH-">Na2CO3</option>
      <option value="5.1|NH4Cl: strong acid (HCl) + weak base (NH4OH)|acidic - NH4+ <=> NH3 + H+">NH4Cl</option>
      <option value="8.9|CH3COONa: weak acid (CH3COOH) + strong base (NaOH)|basic - CH3COO- + H2O <=> CH3COOH + OH-">CH3COONa</option>
      </select></div></div>
    <div class="readout"><div class="gauge"><b id="ph-out">-</b><span>expected pH</span></div>
    <div class="gauge" style="min-width:220px"><b id="ph-note" style="font-size:13px;padding-top:8px">-</b><span>hydrolysis</span></div></div>
    <div class="phstrip">${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(p=>`<i style="background:${universalColor(p).c}"></i>`).join('')}</div>`;
  }
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: pH bench</h2>
    <p class="hint">Pick the system and read the pH, like testing with a pH meter / universal indicator paper.</p>${body}</div>`;
  const out = slot.querySelector('#ph-out'), note = slot.querySelector('#ph-note');
  function upd(){
    const sel = slot.querySelector('#ph-sel');
    if(id==='c11-ph-juices'){
      const j = PH_JUICES[+sel.value];
      const ph = j[1] + rnd(-0.05,0.05);
      out.textContent = ph.toFixed(1); out.style.color = universalColor(ph).c;
      note.textContent = j[2];
    } else if(id==='c11-ph-dilution'){
      const c = parseFloat(slot.querySelector('#ph-conc').value), s = sel.value;
      let ph, how;
      if(s==='hcl'){ ph = -Math.log10(c); how = 'strong acid: [H+] = ' + c + ' M'; }
      else if(s==='naoh'){ ph = 14 + Math.log10(c); how = 'strong base: [OH-] = ' + c + ' M'; }
      else if(s==='ch3cooh'){ ph = pHof(0,0,1,[{mol:c,pKa1:4.74}]); how = 'weak acid: [H+] = sqrt(Ka x c), partial ionisation'; }
      else { const pOH = -Math.log10(Math.sqrt(Math.pow(10,-4.74)*c)); ph = 14-pOH; how = 'weak base: [OH-] = sqrt(Kb x c)'; }
      out.textContent = ph.toFixed(2); out.style.color = universalColor(ph).c;
      note.textContent = how;
    } else if(id==='c11-ph-common-ion' || id==='jee-buffer'){
      const r = Math.pow(10, parseFloat(slot.querySelector('#ph-ratio').value));
      slot.querySelector('#ph-rat').textContent = r.toFixed(2);
      const ac = sel.value==='ac';
      const ph = ac ? 4.74 + Math.log10(r) : 9.26 + Math.log10(r);
      out.textContent = ph.toFixed(2); out.style.color = universalColor(ph).c;
      note.textContent = ac ? 'pH = pKa + log(salt/acid) = 4.74 + log '+r.toFixed(2) : 'pH = 14 - pKb + log(salt/base) = 9.26 + log '+r.toFixed(2);
    } else {
      const [ph, what, why] = sel.value.split('|');
      out.textContent = (+ph).toFixed(1); out.style.color = universalColor(+ph).c;
      note.textContent = what + ' - ' + why;
    }
  }
  slot.querySelectorAll('select,input').forEach(el=>el.addEventListener('input',upd));
  upd();
};

/* ---------- equilibrium shift ---------- */
SIMS.equilibrium = function(slot, exp){
  const cobalt = exp.id==='c11-eq-cocl';
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: shift the equilibrium</h2>
  <p class="hint">${cobalt?'Add conc. HCl to push towards blue [CoCl4]2-, add water to push back to pink [Co(H2O)6]2+.':'Add FeCl3 or KSCN to deepen the blood red [Fe(SCN)]2+; add Na2HPO4 to remove Fe3+ and fade the colour.'}</p>
  <div class="bench"><div class="glassware">
    <svg width="90" height="150" viewBox="0 0 90 150">
      <defs><clipPath id="tt"><path d="M30 12 h30 v100 a15 15 0 0 1 -30 0 z"/></clipPath></defs>
      <path d="M30 12 h30 v100 a15 15 0 0 1 -30 0 z" fill="rgba(207,227,238,.15)" stroke="#8fa9bd" stroke-width="2.5"/>
      <rect id="eq-liq" class="liquid" x="28" y="60" width="34" height="90" clip-path="url(#tt)" fill="${cobalt?'#f9a8d4':'#be122a'}" opacity=".85"/>
    </svg>
    <div class="glabel" id="eq-label">${cobalt?'Pink - [Co(H2O)6]2+ dominant':'Blood red - [Fe(SCN)]2+'}</div>
  </div></div>
  <div class="controls">
    ${cobalt
      ? '<button id="eq-a">Add conc. HCl</button><button id="eq-b" class="ghost">Add water</button>'
      : '<button id="eq-a">Add FeCl3</button><button id="eq-b">Add KSCN</button><button id="eq-c" class="ghost">Add Na2HPO4</button><button id="eq-d" class="ghost">Dilute with water</button>'}
    <button id="eq-reset" class="ghost">Reset</button>
  </div>
  <div class="note" id="eq-note">${cobalt?'[Co(H2O)6]2+ + 4Cl- <=> [CoCl4]2- + 6H2O':'Fe3+ + SCN- <=> [Fe(SCN)]2+ (blood red)'} - Le Chatelier in action.</div></div>`;
  let x = cobalt ? 0.1 : 0.8; // cobalt: 0 pink,1 blue ; fescn: intensity 0.15..2.5
  const liq = slot.querySelector('#eq-liq'), lab = slot.querySelector('#eq-label'), note = slot.querySelector('#eq-note');
  function lerp(a,b,t){return Math.round(a+(b-a)*t);}
  function draw(){
    if(cobalt){
      const t = Math.max(0,Math.min(1,x));
      liq.setAttribute('fill', `rgb(${lerp(249,59,t)},${lerp(168,130,t)},${lerp(212,246,t)})`);
      lab.textContent = t<0.25 ? 'Pink - [Co(H2O)6]2+ dominant' : t>0.75 ? 'Blue - [CoCl4]2- dominant' : 'Violet - both complexes present';
    } else {
      liq.setAttribute('opacity', Math.max(0.12, Math.min(0.95, x/2.4)));
      lab.textContent = x<0.35 ? 'Faint pink - little [Fe(SCN)]2+' : x<0.9 ? 'Blood red' : 'Deep blood red';
    }
  }
  function act(dx, txt){ x = cobalt ? Math.max(0,Math.min(1,x+dx)) : Math.max(0.15, x*dx); note.textContent = txt; draw(); }
  if(cobalt){
    slot.querySelector('#eq-a').onclick = ()=>act(+0.3,'Added Cl- : equilibrium shifts right, blue [CoCl4]2- forms.');
    slot.querySelector('#eq-b').onclick = ()=>act(-0.3,'Dilution lowers [Cl-]: equilibrium shifts left, back to pink [Co(H2O)6]2+.');
    slot.querySelector('#eq-reset').onclick = ()=>{x=0.1; note.textContent='Reset to the starting pink solution.'; draw();};
  } else {
    slot.querySelector('#eq-a').onclick = ()=>act(1.55,'Added Fe3+ : shifts right, red deepens.');
    slot.querySelector('#eq-b').onclick = ()=>act(1.55,'Added SCN- : shifts right, red deepens.');
    slot.querySelector('#eq-c').onclick = ()=>act(0.42,'Phosphate removes free Fe3+ : shifts left, colour fades.');
    slot.querySelector('#eq-d').onclick = ()=>act(0.7,'Dilution: all species diluted; equilibrium shifts left (fewer particles on the left).');
    slot.querySelector('#eq-reset').onclick = ()=>{x=0.8; note.textContent='Reset to the reference tube.'; draw();};
  }
  draw();
};

/* ---------- kinetics: disappearing cross ---------- */
SIMS.kinetics = function(slot, exp){
  const id = exp.id;
  let opts;
  if(id==='c12-kinetics-thio') opts = {
    label:'Na2S2O3 concentration', unit:' M',
    vals:[['0.100',0.1],['0.080',0.08],['0.060',0.06],['0.040',0.04],['0.020',0.02]],
    tfn:(c,T)=> 34*(0.1/c)*Math.pow(2,-(T-25)/10),
    temps:[25,35,45,55], what:'the cross disappears under colloidal sulphur'};
  else if(id==='c12-kinetics-h2o2') opts = {
    label:'KI volume (of 0.1 M)', unit:' mL',
    vals:[['25',0.025],['20',0.020],['15',0.015],['10',0.010]],
    tfn:(c)=> 52*(0.025/c),
    temps:null, what:'sudden blue-black (starch + I2) appears'};
  else opts = {
    label:'KIO3 volume (of 0.01 M)', unit:' mL',
    vals:[['10',10],['8',8],['6',6],['4',4]],
    tfn:(v)=> 9*(10/v),
    temps:null, what:'sudden blue-black (starch + I2) appears'};

  slot.innerHTML = `<div class="sim"><h2>Virtual lab: clock reaction</h2>
  <p class="hint">Mix the reactants and watch: ${opts.what}. The stopwatch reads the true simulated time; runs are saved to your data table.</p>
  <div class="bench"><div class="glassware">
    <svg width="170" height="180" viewBox="0 0 170 180">
      <line x1="45" y1="150" x2="125" y2="150" stroke="#dc2626" stroke-width="7"/>
      <line x1="85" y1="110" x2="85" y2="185" stroke="#dc2626" stroke-width="7"/>
      <path d="M65 25 h40 v30 l25 60 a16 16 0 0 1 -15 22 h-60 a16 16 0 0 1 -15 -22 l25 -60 z" fill="rgba(207,227,238,.18)" stroke="#8fa9bd" stroke-width="2.5"/>
      <rect id="kin-milk" x="30" y="40" width="110" height="130" fill="#e8e4d8" opacity="0" clip-path="url(#kclip)"/>
      <defs><clipPath id="kclip"><path d="M65 25 h40 v30 l25 60 a16 16 0 0 1 -15 22 h-60 a16 16 0 0 1 -15 -22 l25 -60 z"/></clipPath></defs>
      <rect id="kin-blue" x="30" y="40" width="110" height="130" fill="#1e3a8a" opacity="0" clip-path="url(#kclip)"/>
    </svg>
    <div class="glabel">Flask over a marked cross</div>
  </div></div>
  <div class="readout"><div class="gauge"><b id="kin-time">0.0 s</b><span>stopwatch</span></div>
  <div class="gauge"><b id="kin-rate">-</b><span>1/t (rate)</span></div></div>
  <div class="controls">
    <div><label>${opts.label}</label><select id="kin-c">${opts.vals.map(v=>`<option value="${v[1]}">${v[0]}${opts.unit}</option>`).join('')}</select></div>
    ${opts.temps?`<div><label>Temperature</label><select id="kin-t">${opts.temps.map(t=>`<option value="${t}">${t} C</option>`).join('')}</select></div>`:''}
    <button id="kin-start" class="big-btn">Mix and start</button>
  </div>
  <div id="kin-runs"></div>
  <p class="note">Times computed from first-order kinetics (rate proportional to concentration; rate roughly doubles per 10 K) with realistic scatter. Animation runs at 4x speed.</p></div>`;

  const runs = [];
  let running = false;
  function runsHTML(){
    if(!runs.length) return '';
    return `<div class="curve-wrap" style="margin-top:12px"><b style="color:#7dd3c8;font-size:14px">Your runs</b>
    <table class="data"><tr><th>Condition</th><th>t (s)</th><th>1/t (s^-1)</th></tr>
    ${runs.map(r=>`<tr><td>${r.cond}</td><td>${r.t.toFixed(1)}</td><td>${(1/r.t).toFixed(4)}</td></tr>`).join('')}</table></div>`;
  }
  slot.querySelector('#kin-start').onclick = ()=>{
    if(running) return; running = true;
    const c = parseFloat(slot.querySelector('#kin-c').value);
    const T = opts.temps ? parseFloat(slot.querySelector('#kin-t').value) : 25;
    const t = opts.tfn(c,T) * rnd(0.96,1.05);
    const milk = slot.querySelector('#kin-milk'), blue = slot.querySelector('#kin-blue'), watch = slot.querySelector('#kin-time');
    milk.setAttribute('opacity','0'); blue.setAttribute('opacity','0');
    const t0 = performance.now(), dur = t*1000/4;
    const blueMode = id!=='c12-kinetics-thio';
    (function frame(now){
      const p = Math.min(1,(now-t0)/dur);
      watch.textContent = (p*t).toFixed(1)+' s';
      if(blueMode){ blue.setAttribute('opacity', p>=1 ? '0.85' : String(p*0.05)); }
      else milk.setAttribute('opacity', String(p*0.92));
      if(p<1) requestAnimationFrame(frame);
      else{
        running = false;
        const cond = slot.querySelector('#kin-c').selectedOptions[0].text + (opts.temps?', '+T+' C':'');
        runs.push({cond, t}); slot.querySelector('#kin-runs').innerHTML = runsHTML();
        slot.querySelector('#kin-rate').textContent = (1/t).toFixed(4);
      }
    })(t0);
  };
};

/* ---------- thermochemistry ---------- */
SIMS.thermo = function(slot, exp){
  const id = exp.id;
  const presets = {
   'c12-thermo-neutral':{name:'100 mL 1 M HCl + 100 mL 1 M NaOH', dT:+6.8, calc:()=>{const q=200*4.18*6.8;return['deltaT = +6.8 C','q = 200 g x 4.18 J/g.K x 6.8 K = '+(q/1000).toFixed(2)+' kJ','moles of water = 0.100 mol','deltaH = -'+(q/1000/0.1).toFixed(1)+' kJ/mol (accepted value -57.1 kJ/mol)'];}},
   'c12-thermo-hbond':{name:'50 mL acetone + 50 mL chloroform', dT:+2.1, calc:()=>['deltaT = +2.1 C (exothermic - H-bond forms between acetone and CHCl3)','deltaH per mole depends on amounts and the calorimeter constant; measure both in the real lab']},
   'c12-thermo-dissolution':{name:'5.0 g KNO3 in 100 mL water', dT:-2.1, calc:()=>['deltaT = -2.1 C (endothermic)','KNO3 5.0 g = 0.0495 mol','deltaH (dissolution) about +34.9 kJ/mol (literature) - the water gives up heat to dissolve the salt']}
  };
  const P = presets[id] || presets['c12-thermo-neutral'];
  const T0 = 25.0, Tf = T0 + P.dT;
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: calorimetry</h2>
  <p class="hint">${esc(P.name)} in an insulated calorimeter. Press mix and watch the thermometer.</p>
  <div class="bench"><div class="glassware">
    <svg width="90" height="190" viewBox="0 0 90 190">
      <circle cx="45" cy="160" r="20" fill="#ef4444"/>
      <rect x="39" y="20" width="12" height="150" rx="6" fill="rgba(207,227,238,.2)" stroke="#8fa9bd" stroke-width="2"/>
      <rect id="th-col" x="41" y="${160-(P.dT>0? 40:40)}" width="8" height="100" fill="#ef4444"/>
      <text x="45" y="14" fill="#8aa5ba" font-size="11" text-anchor="middle">thermometer</text>
    </svg>
    <div class="glabel" id="th-label">Ready: ${T0.toFixed(1)} C</div>
  </div></div>
  <div class="readout">
    <div class="gauge"><b id="th-t0">${T0.toFixed(1)} C</b><span>initial</span></div>
    <div class="gauge"><b id="th-tf">-</b><span>final</span></div>
    <div class="gauge"><b id="th-dt">-</b><span>delta T</span></div>
  </div>
  <div class="controls"><button id="th-go" class="big-btn">Mix and measure</button><button id="th-again" class="ghost">Repeat</button></div>
  <div id="th-result"></div>
  <p class="note">Temperature change computed from the standard enthalpy of reaction and the heat capacity of the solution, with small realistic scatter.</p></div>`;
  slot.querySelector('#th-go').onclick = run; slot.querySelector('#th-again').onclick = run;
  function run(){
    const dT = P.dT * rnd(0.97,1.04);
    const tf = T0 + dT;
    const col = slot.querySelector('#th-col'), lab = slot.querySelector('#th-label');
    const t0 = performance.now(), dur = 2400;
    const yFull = 20, yBase = 60; // column top moves up with T
    (function frame(now){
      const p = Math.min(1,(now-t0)/dur);
      const T = T0 + dT*p;
      const top = yBase + (25 - T)*3;
      col.setAttribute('y', top); col.setAttribute('height', 160-top);
      lab.textContent = 'Reading: '+T.toFixed(1)+' C';
      if(p<1) requestAnimationFrame(frame);
      else{
        slot.querySelector('#th-tf').textContent = tf.toFixed(1)+' C';
        slot.querySelector('#th-dt').textContent = (dT>0?'+':'')+dT.toFixed(1)+' C';
        slot.querySelector('#th-result').innerHTML = `<div class="result-box"><b>Worked result</b>${P.calc().map(l=>`<p>${esc(l)}</p>`).join('')}</div>`;
      }
    })(t0);
  }
};

/* ---------- electrochemistry ---------- */
SIMS.emf = function(slot, exp){
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: Daniell cell EMF</h2>
  <p class="hint">Change the electrolyte concentrations; the voltmeter follows the Nernst equation at 298 K: E = 1.10 - 0.0295 log([Zn2+]/[Cu2+]).</p>
  <div class="bench">
    <div class="glassware"><svg width="80" height="110" viewBox="0 0 80 110"><rect x="8" y="30" width="64" height="66" rx="6" fill="rgba(207,227,238,.15)" stroke="#8fa9bd" stroke-width="2.5"/><rect id="emf-znsol" x="10" y="55" width="60" height="39" fill="#bfdbfe" opacity=".7"/><rect x="30" y="18" width="14" height="50" fill="#9ca3af" stroke="#6b7280"/><text x="40" y="106" fill="#9fb4c4" font-size="10" text-anchor="middle">Zn rod</text></svg><div class="glabel">ZnSO4 half-cell (anode)</div></div>
    <div class="glassware"><svg width="150" height="110" viewBox="0 0 150 110"><path d="M20 20 C20 60 130 60 130 20" fill="none" stroke="#f9c46b" stroke-width="7"/><rect x="52" y="38" width="46" height="30" rx="6" fill="#0a1a29" stroke="#24435e"/><text id="emf-volt" x="75" y="58" fill="#7dd3c8" font-size="15" font-weight="700" text-anchor="middle">1.100 V</text></svg><div class="glabel">Voltmeter + salt bridge</div></div>
    <div class="glassware"><svg width="80" height="110" viewBox="0 0 80 110"><rect x="8" y="30" width="64" height="66" rx="6" fill="rgba(207,227,238,.15)" stroke="#8fa9bd" stroke-width="2.5"/><rect x="10" y="55" width="60" height="39" fill="#3b82f6" opacity=".55"/><rect x="32" y="18" width="14" height="50" fill="#d97706" stroke="#92400e"/><text x="40" y="106" fill="#9fb4c4" font-size="10" text-anchor="middle">Cu rod</text></svg><div class="glabel">CuSO4 half-cell (cathode)</div></div>
  </div>
  <div class="controls">
    <div><label>[CuSO4] - <span id="emf-cul">1.0 M</span></label><input type="range" id="emf-cu" min="-3" max="0" step="0.5" value="0" style="width:min(240px,55vw)"></div>
    <div><label>[ZnSO4] - <span id="emf-znl">1.0 M</span></label><input type="range" id="emf-zn" min="-3" max="0" step="0.5" value="0" style="width:min(240px,55vw)"></div>
  </div>
  <div class="readout"><div class="gauge"><b id="emf-e">1.100 V</b><span>measured EMF</span></div>
  <div class="gauge"><b id="emf-calc" style="font-size:13px;padding-top:8px">-</b><span>Nernst prediction</span></div></div>
  <p class="note">E0 = 0.34 - (-0.76) = 1.10 V. Measured values include a few mV of realistic meter noise.</p></div>`;
  function upd(){
    const cu = Math.pow(10, parseFloat(slot.querySelector('#emf-cu').value));
    const zn = Math.pow(10, parseFloat(slot.querySelector('#emf-zn').value));
    slot.querySelector('#emf-cul').textContent = cu.toPrecision(2)+' M';
    slot.querySelector('#emf-znl').textContent = zn.toPrecision(2)+' M';
    const E = 1.10 - 0.02955*Math.log10(zn/cu);
    const meas = E + rnd(-0.002,0.002);
    slot.querySelector('#emf-e').textContent = meas.toFixed(3)+' V';
    slot.querySelector('#emf-volt').textContent = meas.toFixed(3)+' V';
    slot.querySelector('#emf-calc').textContent = 'E = 1.10 - 0.0295 log('+(zn.toPrecision(2))+'/'+cu.toPrecision(2)+') = '+E.toFixed(3)+' V';
  }
  slot.querySelectorAll('input').forEach(el=>el.addEventListener('input',upd));
  upd();
};

/* ---------- chromatography ---------- */
SIMS.chromatography = function(slot, exp){
  const inorg = exp.id==='c12-chroma-inorganic';
  const bands = inorg
    ? [['Pb2+ (PbS after spray)','#4b3a2f',0.32],['Cd2+ (CdS after spray)','#facc15',0.62]]
    : [['Carotene','#f97316',0.93],['Xanthophyll','#fbbf24',0.65],['Chlorophyll a','#15803d',0.55],['Chlorophyll b','#84cc16',0.45]];
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: paper chromatography</h2>
  <p class="hint">Run the chromatogram: the solvent front rises and each ${inorg?'ion':'pigment'} travels to its Rf height. Then read the measurements.</p>
  <div class="bench"><div class="glassware">
    <svg width="120" height="210" viewBox="0 0 120 210">
      <rect x="8" y="20" width="104" height="180" rx="8" fill="rgba(207,227,238,.12)" stroke="#8fa9bd" stroke-width="2.5"/>
      <rect id="ch-solv" x="10" y="190" width="100" height="8" fill="#7dd3c8" opacity=".3"/>
      <rect x="38" y="14" width="44" height="186" rx="2" fill="#f8fafc"/>
      <line x1="38" y1="176" x2="82" y2="176" stroke="#94a3b8" stroke-width="1.5"/>
      <rect id="ch-front" x="38" y="176" width="44" height="2" fill="#0ea5e9" opacity="0"/>
      <g id="ch-bands"></g>
      <circle cx="60" cy="176" r="3.5" fill="#374151"/>
    </svg>
    <div class="glabel">Paper strip in solvent jar</div>
  </div></div>
  <div class="controls"><button id="ch-run" class="big-btn">Run chromatogram</button><button id="ch-reset" class="ghost">New strip</button></div>
  <div id="ch-table"></div>
  <p class="note">Rf = band distance / solvent-front distance, measured from the pencil line. Band heights use typical literature Rf values with small run-to-run scatter.</p></div>`;
  slot.querySelector('#ch-run').onclick = ()=>{
    const g = slot.querySelector('#ch-bands'); g.innerHTML = '';
    const front = slot.querySelector('#ch-front');
    const t0 = performance.now(), dur = 2600;
    const bandsWithNoise = bands.map(b=>[b[0],b[1],Math.min(0.97,Math.max(0.05,b[2]+rnd(-0.02,0.02)))]);
    const baseY = 176, topY = 34, span = baseY-topY;
    (function frame(now){
      const p = Math.min(1,(now-t0)/dur);
      const fy = baseY - span*p;
      front.setAttribute('opacity','1'); front.setAttribute('y',fy);
      g.innerHTML = bandsWithNoise.map(b=>{
        const by = baseY - span*b[2]*p;
        const h = Math.max(2, baseY*b[2]*0 + 6*Math.min(1,p*1.4));
        return p > 0.04 ? `<ellipse cx="60" cy="${Math.min(by, baseY-4)}" rx="13" ry="${4+3*p}" fill="${b[1]}" opacity="${inorg?0.35+0.55*p:0.45+0.5*p}"/>` : '';
      }).join('');
      if(p<1) requestAnimationFrame(frame);
      else{
        slot.querySelector('#ch-table').innerHTML = `<div class="curve-wrap" style="margin-top:12px">
        <b style="color:#7dd3c8;font-size:14px">Measurements (solvent front 12.6 cm)</b>
        <table class="data"><tr><th>Component</th><th>Band centre</th><th>Rf</th></tr>
        ${bandsWithNoise.map(b=>{const d=(12.6*b[2]);return `<tr><td>${b[0]}</td><td>${d.toFixed(1)} cm</td><td>${b[2].toFixed(2)}</td></tr>`;}).join('')}
        </table>${inorg?'<p style="color:#9fb4c4;font-size:12.5px;margin-top:4px">Bands made visible by spraying with H2S water (locating reagent).</p>':''}</div>`;
      }
    })(t0);
  };
  slot.querySelector('#ch-reset').onclick = ()=>{
    slot.querySelector('#ch-bands').innerHTML=''; slot.querySelector('#ch-front').setAttribute('opacity','0');
    slot.querySelector('#ch-table').innerHTML='';
  };
};

/* ---------- standard solution / weighing calculator ---------- */
SIMS.mass = function(slot, exp){
  const comps = (exp.simProps && exp.simProps.defaults) || [
    {name:'Oxalic acid (H2C2O4.2H2O)',mm:126.07},{name:'Anhydrous Na2CO3',mm:105.99},
    {name:"Mohr's salt",mm:392.14},{name:'K2Cr2O7',mm:294.19}];
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: weighing for a standard solution</h2>
  <p class="hint">Choose the primary standard, molarity and flask volume; the balance computes the exact mass to weigh.</p>
  <div class="controls">
    <div><label>Compound</label><select id="m-c">${comps.map((c,i)=>`<option value="${i}">${esc(c.name)} (M = ${c.mm})</option>`).join('')}</select></div>
    <div><label>Molarity</label><select id="m-m"><option>0.02</option><option>0.05</option><option selected>0.1</option><option>0.25</option><option>0.5</option><option>1</option></select></div>
    <div><label>Flask volume</label><select id="m-v"><option>100</option><option selected>250</option><option>500</option><option>1000</option></select></div>
  </div>
  <div class="readout"><div class="gauge"><b id="m-out">-</b><span>mass to weigh</span></div>
  <div class="gauge" style="min-width:210px"><b id="m-calc" style="font-size:13px;padding-top:8px">-</b><span>working</span></div></div>
  <div class="note">Weigh by difference from a weighing bottle on a 0.001 g balance, transfer quantitatively, and make up to the mark at room temperature.</div></div>`;
  function upd(){
    const c = comps[+slot.querySelector('#m-c').value];
    const M = parseFloat(slot.querySelector('#m-m').value), V = parseFloat(slot.querySelector('#m-v').value);
    const mass = M*V/1000*c.mm;
    slot.querySelector('#m-out').textContent = mass.toFixed(3)+' g';
    slot.querySelector('#m-calc').textContent = M+' mol/L x '+(V/1000)+' L x '+c.mm+' g/mol';
  }
  slot.querySelectorAll('select').forEach(el=>el.addEventListener('input',upd));
  upd();
};

/* ---------- melting point ---------- */
SIMS.melt = function(slot, exp){
  const comps = [['Naphthalene',80.2],['Urea',132.7],['Benzoic acid',122.4],['Cinnamic acid',133.5],['Acetanilide',114.3],['Dibenzalacetone',112.0],['p-Nitroacetanilide',214.0]];
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: melting point</h2>
  <p class="hint">Heat the paraffin bath slowly and watch the sample in the capillary. Pure compounds melt over about 1 C.</p>
  <div class="controls"><div><label>Compound</label><select id="mp-c">${comps.map((c,i)=>`<option value="${i}">${c[0]} (lit. ${c[1]} C)</option>`).join('')}</select></div>
  <button id="mp-go" class="big-btn">Heat the bath</button></div>
  <div class="bench"><div class="glassware">
    <svg width="100" height="170" viewBox="0 0 100 170">
      <path d="M50 25 h14 v70 a26 26 0 1 1 -28 0 v-70 z" fill="rgba(207,227,238,.18)" stroke="#8fa9bd" stroke-width="2.5"/>
      <rect id="mp-liq" x="40" y="30" width="20" height="120" fill="#fde68a" opacity=".35"/>
      <circle id="mp-dot" cx="50" cy="138" r="7" fill="#f8fafc"/>
      <text id="mp-t" x="50" y="18" fill="#7dd3c8" font-size="13" text-anchor="middle">25 C</text>
    </svg>
    <div class="glabel" id="mp-label">Capillary sample solid</div>
  </div></div>
  <div id="mp-result"></div>
  <p class="note">Melting ranges simulate a pure dry sample heated at about 2 C/min near melting, with literature values as the centre.</p></div>`;
  slot.querySelector('#mp-go').onclick = ()=>{
    const [name, mp] = comps[+slot.querySelector('#mp-c').value];
    const start = mp - 0.6 + rnd(-0.3,0.2), end = start + 0.9;
    const dot = slot.querySelector('#mp-dot'), T = slot.querySelector('#mp-t'), lab = slot.querySelector('#mp-label');
    const t0 = performance.now(), dur = 6000;
    (function frame(now){
      const p = Math.min(1,(now-t0)/dur);
      const temp = 25 + (end+8-25)*p;
      T.textContent = temp.toFixed(0)+' C';
      if(temp < start){ lab.textContent = 'Capillary sample solid'; dot.setAttribute('r','7'); dot.setAttribute('opacity','1'); }
      else if(temp < end){ const q=(temp-start)/(end-start); lab.textContent='Melting in progress...'; dot.setAttribute('r', String(7-4*q)); }
      else { lab.textContent='Completely liquid'; dot.setAttribute('r','3'); }
      if(p<1) requestAnimationFrame(frame);
      else slot.querySelector('#mp-result').innerHTML = `<div class="result-box"><b>Result</b><p>Melting range observed: ${start.toFixed(1)} - ${end.toFixed(1)} C (literature ${mp} C). A sharp range near the literature value means a pure sample.</p></div>`;
    })(t0);
  };
};

/* ---------- salt analysis lab ---------- */
SIMS.salt = function(slot, exp, standalone){
  const D = window.SALTDATA;
  const opts = D.salts.map((s,i)=>`<option value="${i}">${esc(s[0])}</option>`).join('');
  slot.innerHTML = `<div class="sim"><h2>Virtual lab: systematic salt analysis</h2>
  <p class="hint">Choose the salt given to you. The scheme below walks you through the exact tests in the correct order, with realistic observations.</p>
  <div class="controls"><div><label>Given salt</label><select id="salt-sel" style="max-width:min(340px,80vw)">${opts}</select></div></div>
  <div id="salt-out"></div>
  <p class="note">Scheme follows the NCERT lab manual: anion first (dil. then conc. H2SO4, confirmatory), then cation groups 0-VI. H2S steps assume a fume hood.</p></div>`;
  const out = slot.querySelector('#salt-out');
  function renderSalt(){
    const [name, ck, ak] = D.salts[+slot.querySelector('#salt-sel').value];
    const an = D.anions[ak];
    const cat = ck==='Na' ? D.naCation : D.cations[ck];
    out.innerHTML = `
    <div class="salt-steps">
      <div class="salt-step"><b>Step 1 - Physical appearance</b><p class="obs">${chem(cat.colour)} Consistent with the identified ions.</p></div>
      <div class="salt-step"><b>Step 2 - Anion: warm with dilute H2SO4</b><p class="obs">${chem(an.dilAcid)}</p><p class="inf">${chem(an.note)}</p></div>
      <div class="salt-step"><b>Step 3 - Anion: warm with concentrated H2SO4</b><p class="obs">${chem(an.concAcid)}</p></div>
      <div class="salt-step"><b>Step 4 - Confirmatory test for the anion</b><p class="obs">${chem(an.confirm)}</p><p class="inf">Anion confirmed: ${chem(an.name)}</p></div>
      <div class="salt-step"><b>Step 5 - Cation: ${chem(cat.group)}</b><p class="obs">${chem(cat.groupTest)}</p></div>
      <div class="salt-step"><b>Step 6 - Confirmatory test for the cation</b><p class="obs">${chem(cat.confirm)}</p><p class="inf">Cation confirmed: ${chem(cat.name)}</p></div>
    </div>
    <div class="salt-final"><b>Result:</b> the given salt is <b>${chem(name)}</b> (cation ${chem(cat.name)}, anion ${chem(an.name)}).</div>`;
  }
  slot.querySelector('#salt-sel').addEventListener('input', renderSalt);
  renderSalt();
};

/* ---------- init ---------- */
renderRoute();
})();
