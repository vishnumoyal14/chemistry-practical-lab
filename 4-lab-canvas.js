/* lab-canvas.js - animated canvas lab scenes: titration bench, salt analysis, particles, sound */
(function(){
'use strict';
const Core = ()=>window.ChemCore;

/* ================= sound (tiny WebAudio synth) ================= */
const SFX = {
  on: (function(){ try{ return (localStorage.getItem('chemlab-sfx')||'on')==='on'; }catch(e){ return true; } })(),
  ctx: null,
  toggle(){ this.on=!this.on; try{ localStorage.setItem('chemlab-sfx', this.on?'on':'off'); }catch(e){} },
  ac(){ if(!this.ctx){ try{ this.ctx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ this.ctx=null; } }
        if(this.ctx && this.ctx.state==='suspended') this.ctx.resume(); return this.ctx; },
  blip(f0,f1,dur,type,gain){
    if(!this.on) return; const ac=this.ac(); if(!ac) return;
    try{
      const o=ac.createOscillator(), g=ac.createGain();
      o.type=type||'sine'; o.frequency.setValueAtTime(f0,ac.currentTime);
      o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),ac.currentTime+dur);
      g.gain.setValueAtTime(gain||0.05,ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001,ac.currentTime+dur);
      o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime+dur+0.03);
    }catch(e){}
  },
  drop(){ this.blip(1500,650,0.07,'sine',0.04); },
  record(){ this.blip(660,990,0.16,'triangle',0.06); },
  endpoint(){ this.blip(520,1040,0.22,'triangle',0.06); const s=this; setTimeout(()=>s.blip(780,1560,0.26,'triangle',0.05),150); },
  bubble(){ this.blip(320,170,0.09,'sine',0.025); },
  whoosh(){ this.blip(140,60,0.5,'sawtooth',0.028); }
};

/* ================= canvas + colour helpers ================= */
const ACTIVE = [];
function destroyAll(){ while(ACTIVE.length){ try{ ACTIVE.pop().destroy(); }catch(e){} } }
window.addEventListener('hashchange', destroyAll);

function makeCanvas(parent, w, h){
  const cv=document.createElement('canvas');
  cv.style.width='100%'; cv.style.maxWidth=w+'px'; cv.style.height='auto'; cv.style.display='block';
  cv.style.margin='0 auto'; cv.style.touchAction='none'; cv.style.borderRadius='12px';
  cv.style.background='#0a1a29';
  const dpr=Math.min(2, window.devicePixelRatio||1);
  cv.width=w*dpr; cv.height=h*dpr;
  const ctx=cv.getContext('2d'); ctx.scale(dpr,dpr);
  parent.appendChild(cv);
  return {cv,ctx,w,h};
}
function hex2rgb(h){ h=h.replace('#',''); if(h.length===3) h=h.split('').map(c=>c+c).join('');
  return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]; }
function rgbStr(c,a){ return 'rgba('+Math.round(c[0])+','+Math.round(c[1])+','+Math.round(c[2])+','+(a==null?1:a)+')'; }
function mixC(c1,c2,t){ return [c1[0]+(c2[0]-c1[0])*t, c1[1]+(c2[1]-c1[1])*t, c1[2]+(c2[2]-c1[2])*t]; }
const rnd2 = (a,b)=> a+Math.random()*(b-a);

function bgBench(ctx,W,H){
  const g=ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#13293d'); g.addColorStop(0.75,'#0e2233'); g.addColorStop(1,'#0a1a29');
  ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#1d1410'; ctx.fillRect(0,H-28,W,28);
  ctx.fillStyle='rgba(255,255,255,.06)'; ctx.fillRect(0,H-28,W,3);
}
function glassStroke(ctx){ ctx.strokeStyle='rgba(180,205,225,.85)'; ctx.lineWidth=2.5; }
function wavyTop(ctx,x0,x1,y,amp,ph){
  ctx.beginPath(); ctx.moveTo(x0,y);
  const n=Math.max(2,Math.floor((x1-x0)/8));
  for(let i=1;i<=n;i++){ const x=x0+(x1-x0)*i/n;
    ctx.lineTo(x, y + amp*Math.sin(ph + i*1.7)); }
  ctx.lineTo(x1,y+400);
}
function flaskPath(cx, mouthY, mouthW, baseY, baseW){
  const p=new Path2D();
  const mx0=cx-mouthW/2, mx1=cx+mouthW/2, bx0=cx-baseW/2, bx1=cx+baseW/2;
  p.moveTo(mx0,mouthY); p.lineTo(mx0,mouthY+26);
  p.lineTo(bx0,baseY-14); p.quadraticCurveTo(bx0-3,baseY,cx-baseW/2+16,baseY);
  p.lineTo(bx1-16,baseY); p.quadraticCurveTo(bx1+3,baseY,bx1,baseY-14);
  p.lineTo(mx1,mouthY+26); p.lineTo(mx1,mouthY); p.closePath();
  return p;
}

/* ================= TITRATION SCENE ================= */
function titration(slot, cfg){
  const C = Core(), esc = C.esc;
  const isAB = cfg.mode==='acidbase';
  const wrap=document.createElement('div');
  wrap.className='sim';
  wrap.innerHTML = `
  <h2>${cfg.title||'Virtual lab: perform this titration'}</h2>
  <p class="hint">Press and HOLD the stopcock (or the Run button) to let titrant flow; a quick tap gives one drop. Near the endpoint go drop by drop, watch the flask colour${isAB?' and the live pH curve':''}, then record your titre. Do three runs for concordant readings.</p>
  <div class="canvas-wrap" id="lcv"></div>
  <div class="readout">
    <div class="gauge"><b id="g-vol">0.00</b><span>mL added</span></div>
    ${isAB?'<div class="gauge"><b id="g-ph">-</b><span>pH</span></div>':''}
    <div class="gauge" style="min-width:210px"><b id="g-col" style="font-size:13px;padding-top:7px">-</b><span>flask shows</span></div>
  </div>
  <div class="controls">
    <button id="t-run" class="big-btn">Run: hold = flow, tap = 1 drop</button>
    <button id="t-add1" class="ghost">+1 mL</button>
    <button id="t-adddrop" class="ghost">+1 drop</button>
    <button id="t-record">Record titre</button>
    <button id="t-reset" class="ghost">Refill (next run)</button>
    ${isAB?'<button id="t-mol" class="ghost">Ion view: off</button>':''}
    <button id="t-snd" class="ghost">Sound: ${SFX.on?'on':'off'}</button>
  </div>
  <div class="warn-strip">Indicator: ${esc(cfg.indName)}. Judge the endpoint by the flask colour, like a real lab. (For the given solutions the true equivalence is ${cfg.eq.toFixed(1)} mL.)</div>
  <div id="t-readings"></div>
  <div id="t-result"></div>
  <p class="note">${cfg.note||'Simulated from the exact reaction stoichiometry and full charge-balance pH at 25 C. A real burette reads to 0.05-0.1 mL; small random error is included in recorded readings.'}</p>`;
  slot.appendChild(wrap);

  const W=760, H=440;
  const {cv,ctx} = makeCanvas(wrap.querySelector('#lcv'), W, H);
  const gVol=wrap.querySelector('#g-vol'), gPh=isAB?wrap.querySelector('#g-ph'):null, gCol=wrap.querySelector('#g-col');

  /* geometry */
  const BX=140, BT=34, BB=240, Y0=48;                 // burette tube
  const maxV = cfg.maxV;
  const SC=(BB-14-Y0)/maxV;                            // px per mL
  const COCK_Y=250, TIP_Y=292;
  const FMOUTH=300, FBASE=400, FMOUTHW=64, FBASEW=196; // flask
  const GX0=300, GY0=40, GW=445, GH=230;               // graph
  const MX0=300, MY0=288, MW=445, MH=138;              // molecular panel
  const fPath = flaskPath(BX, FMOUTH, FMOUTHW, FBASE, FBASEW);

  /* state */
  let added=0, targetAdd=0, holdT=-1, holding=false;
  let drops=[], splashes=[], swirl=0, swirlBoost=0, lastSfx=0;
  let curC = hex2rgb(cfg.stateAt(0).c);
  let readings=[], runCurves=[], journal=[], lastLabel='', epChimed=false;
  let showMol=false, molParts=[], lastPH=7;
  let raf=0, dead=false, lastT=performance.now();

  function surfaceY(){
    const cap=cfg.vol0+maxV, vol=cfg.vol0+added;
    const frac=0.30+0.42*Math.min(1,vol/cap);
    return 396 - frac*(396-316);
  }
  function stateNow(){ return cfg.stateAt(added); }

  /* --- particles --- */
  function spawnDrop(){
    drops.push({x:BX+rnd2(-2,2), y:TIP_Y+2, vy:rnd2(20,60)});
  }
  function spawnSplash(y){
    for(let i=0;i<5;i++) splashes.push({x:BX+rnd2(-8,8), y:y, vx:rnd2(-40,40), vy:rnd2(-70,-20), r:rnd2(1,2.4), a:0.8});
    swirlBoost=1;
  }
  function molTargets(){
    if(!isAB||!showMol) return;
    const ph=lastPH, h=Math.pow(10,-ph);
    const want=[
      {k:'H', c:'#ef4444', n:Math.max(0,Math.min(34,Math.round(4*(8-ph))))},
      {k:'O', c:'#3b82f6', n:Math.max(0,Math.min(34,Math.round(4*(ph-6))))},
      {k:'N', c:'#9ca3af', n:6}
    ];
    if(cfg.weakpKa!=null){
      const Ka=Math.pow(10,-cfg.weakpKa);
      want.push({k:'HA', c:'#f59e0b', n:Math.round(16*Ka/(h+Ka))});
    }
    for(const w of want){
      let have=molParts.filter(p=>p.k===w.k);
      while(have.length<w.n){ molParts.push({k:w.k,c:w.c,x:rnd2(MX0+12,MX0+MW-12),y:rnd2(MY0+22,MY0+MH-10),vx:rnd2(-14,14),vy:rnd2(-14,14)}); have=molParts.filter(p=>p.k===w.k); }
      while(have.length>w.n){ const i=molParts.indexOf(have[0]); molParts.splice(i,1); have=molParts.filter(p=>p.k===w.k); }
    }
  }

  /* --- drawing --- */
  function drawBurette(t){
    // glass tube
    ctx.fillStyle='rgba(190,215,235,.14)';
    ctx.fillRect(BX-15,BT,30,BB-BT+14);
    glassStroke(ctx); ctx.strokeRect(BX-15,BT,30,BB-BT+14);
    // liquid from 0 mark down to meniscus
    const yL=Y0+SC*added;
    if(added>0.02){
      ctx.fillStyle='rgba(191,219,254,.75)';
      ctx.fillRect(BX-12,Y0,24,yL-Y0);
      ctx.fillStyle='rgba(147,197,253,.9)';
      ctx.beginPath(); ctx.ellipse(BX,yL,12,3.4,0,0,Math.PI*2); ctx.fill();
    }
    // graduations
    ctx.strokeStyle='rgba(180,205,225,.8)'; ctx.fillStyle='rgba(180,205,225,.9)';
    ctx.font='10px system-ui'; ctx.textAlign='right';
    for(let v=0; v<=maxV+0.001; v+=5){
      const y=Y0+SC*v;
      ctx.lineWidth=1.4; ctx.beginPath(); ctx.moveTo(BX-15,y); ctx.lineTo(BX-3,y); ctx.stroke();
      ctx.fillText(String(Math.round(v)),BX-19,y+3);
      if(v+5<=maxV){ ctx.lineWidth=0.7; ctx.beginPath(); ctx.moveTo(BX-15,y+SC*2.5); ctx.lineTo(BX-8,y+SC*2.5); ctx.stroke(); }
    }
    // stopcock
    const open = holding || targetAdd>added;
    ctx.fillStyle='rgba(190,215,235,.25)'; ctx.fillRect(BX-9,BB+4,18,10);
    ctx.save(); ctx.translate(BX,COCK_Y); ctx.rotate(open?Math.PI/2:0);
    ctx.fillStyle='#8fa9bd'; ctx.fillRect(-16,-3.5,32,7);
    ctx.restore();
    // tip
    ctx.beginPath(); ctx.moveTo(BX-7,COCK_Y+6); ctx.lineTo(BX-2.5,TIP_Y);
    ctx.lineTo(BX+2.5,TIP_Y); ctx.lineTo(BX+7,COCK_Y+6); ctx.closePath();
    ctx.fillStyle='rgba(190,215,235,.2)'; ctx.fill(); glassStroke(ctx); ctx.stroke();
    // flow stream
    if(open && added<maxV){
      ctx.strokeStyle='rgba(191,219,254,.85)'; ctx.lineWidth=1.8;
      ctx.beginPath(); ctx.moveTo(BX,TIP_Y); ctx.lineTo(BX,Math.min(surfaceY(),TIP_Y+18+drops.length*6)); ctx.stroke();
    }
    ctx.fillStyle='rgba(159,180,196,.9)'; ctx.font='11px system-ui'; ctx.textAlign='center';
    ctx.fillText(cfg.burLabel||'burette', BX, BT-8);
  }
  function drawFlask(t){
    ctx.save();
    ctx.fillStyle='rgba(190,215,235,.13)'; ctx.fill(fPath);
    glassStroke(ctx); ctx.stroke(fPath);
    // liquid clipped to flask
    ctx.save(); ctx.clip(fPath);
    const sy=surfaceY();
    const lg=ctx.createLinearGradient(0,sy,0,FBASE);
    lg.addColorStop(0,rgbStr(mixC(curC,[255,255,255],0.18),0.92));
    lg.addColorStop(1,rgbStr(mixC(curC,[0,0,0],0.22),0.95));
    ctx.fillStyle=lg;
    ctx.beginPath(); ctx.moveTo(20,sy);
    const ph=performance.now()/1000;
    for(let x=20;x<=260;x+=8) ctx.lineTo(x, sy+2.2*Math.sin(x/14+ph*2.4)+swirlBoost*2.5*Math.sin(x/7-ph*7));
    ctx.lineTo(260,FBASE+10); ctx.lineTo(20,FBASE+10); ctx.closePath(); ctx.fill();
    // swirl streaks
    ctx.strokeStyle='rgba(255,255,255,.20)'; ctx.lineWidth=2;
    for(let i=0;i<3;i++){
      const a=swirl+i*2.1, rr=18+i*13;
      ctx.beginPath();
      ctx.ellipse(BX, sy+24, rr, rr*0.32, 0, a, a+Math.PI*0.9);
      ctx.stroke();
    }
    // splashes
    for(const s of splashes){
      ctx.fillStyle=rgbStr(mixC(curC,[255,255,255],0.4),s.a);
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
    }
    ctx.restore();
    // drops in flight
    ctx.fillStyle='rgba(191,219,254,.95)';
    for(const d of drops){ ctx.beginPath(); ctx.ellipse(d.x,d.y,2.2,3.6,0,0,Math.PI*2); ctx.fill(); }
    ctx.restore();
    ctx.fillStyle='rgba(159,180,196,.9)'; ctx.font='11px system-ui'; ctx.textAlign='center';
    ctx.fillText(cfg.flaskLabel||'flask', BX, FBASE+22);
  }
  function drawGraph(){
    // frame
    ctx.fillStyle='#0a1a29'; ctx.fillRect(GX0,GY0,GW,GH);
    ctx.strokeStyle='#24435e'; ctx.lineWidth=1; ctx.strokeRect(GX0,GY0,GW,GH);
    const padL=34, padB=22, padT=8;
    const x=v=>GX0+padL+(GW-padL-8)*v/maxV;
    const y=p=>GY0+padT+(GH-padB-padT)*(1-p/14);
    if(isAB){
      ctx.font='10px system-ui'; ctx.textAlign='right';
      for(let p=0;p<=14;p+=2){
        ctx.strokeStyle='#16293d'; ctx.beginPath(); ctx.moveTo(x(0),y(p)); ctx.lineTo(x(maxV),y(p)); ctx.stroke();
        ctx.fillStyle='#8aa5ba'; ctx.fillText(String(p),x(0)-4,y(p)+3);
      }
      ctx.textAlign='center'; ctx.fillStyle='#8aa5ba';
      ctx.fillText('mL titrant', (x(0)+x(maxV))/2, GY0+GH-6);
      ctx.save(); ctx.translate(GX0+9,(y(0)+y(14))/2); ctx.rotate(-Math.PI/2); ctx.fillText('pH',0,0); ctx.restore();
      // previous runs
      ctx.lineWidth=1.2;
      for(const rc of runCurves){
        ctx.strokeStyle='rgba(125,211,200,.28)'; ctx.beginPath();
        rc.forEach((pt,i)=>{ i?ctx.lineTo(x(pt[0]),y(pt[1])):ctx.moveTo(x(pt[0]),y(pt[1])); });
        ctx.stroke();
      }
      // current run progressive
      ctx.strokeStyle='#7dd3c8'; ctx.lineWidth=2.2; ctx.beginPath();
      let started=false;
      for(const pt of cfg.curvePts){
        if(pt[0]>added) break;
        started?ctx.lineTo(x(pt[0]),y(pt[1])):ctx.moveTo(x(pt[0]),y(pt[1])); started=true;
      }
      if(started){ const p=cfg.phAt(added); ctx.lineTo(x(added),y(Math.max(0,Math.min(14,p)))); }
      ctx.stroke();
      // equivalence markers after first recorded run
      if(readings.length){
        ctx.setLineDash([4,4]); ctx.strokeStyle='#2f9e8f'; ctx.lineWidth=1.4;
        ctx.beginPath(); ctx.moveTo(x(cfg.eq),y(0)); ctx.lineTo(x(cfg.eq),y(14)); ctx.stroke();
        if(cfg.eq2!=null){ ctx.strokeStyle='#f59e0b'; ctx.beginPath(); ctx.moveTo(x(cfg.eq2),y(0)); ctx.lineTo(x(cfg.eq2),y(14)); ctx.stroke(); }
        ctx.setLineDash([]);
        ctx.fillStyle='#2f9e8f'; ctx.textAlign='left';
        ctx.fillText('equivalence '+cfg.eq.toFixed(1)+' mL', x(cfg.eq)+4, y(13.4));
      }
      // recorded points
      for(const r of readings){
        const p=cfg.phAt(r);
        ctx.fillStyle='#f9c46b'; ctx.beginPath(); ctx.arc(x(r),y(Math.max(0,Math.min(14,p))),4.5,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='#0e2233'; ctx.lineWidth=1.5; ctx.stroke();
      }
      // current marker
      const p=lastPH;
      ctx.fillStyle='#f9c46b'; ctx.beginPath(); ctx.arc(x(added),y(Math.max(0,Math.min(14,p))),5,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle='#0e2233'; ctx.lineWidth=2; ctx.stroke();
    } else {
      // colour journal: strip chart of flask colour across volume + log lines
      ctx.font='11px system-ui'; ctx.textAlign='left'; ctx.fillStyle='#8aa5ba';
      ctx.fillText('Flask colour as titrant is added', GX0+8, GY0+16);
      const sy=GY0+26, sh=34, step=maxV/220;
      for(let v=0; v<added; v+=step){
        ctx.fillStyle=cfg.stateAt(v).c;
        ctx.fillRect(GX0+8+(GW-16)*v/maxV, sy, (GW-16)*step/maxV+1, sh);
      }
      ctx.strokeStyle='#24435e'; ctx.strokeRect(GX0+8,sy,GW-16,sh);
      ctx.fillStyle='#8aa5ba'; ctx.textAlign='center';
      for(let v=0;v<=maxV;v+=10){ ctx.fillText(String(v), GX0+8+(GW-16)*v/maxV, sy+sh+13); }
      ctx.textAlign='left';
      ctx.fillText('mL', GX0+GW-24, sy+sh+13);
      let yy=sy+sh+34;
      ctx.font='11.5px system-ui';
      for(const j of journal.slice(-8)){
        ctx.fillStyle='#9fb4c4'; ctx.fillText(j[0].toFixed(1)+' mL:', GX0+8, yy);
        ctx.fillStyle='#d7e7ea'; ctx.fillText(j[1], GX0+66, yy);
        yy+=18;
      }
    }
  }
  function drawMol(){
    ctx.fillStyle='rgba(6,16,26,.94)'; ctx.fillRect(MX0,MY0,MW,MH);
    ctx.strokeStyle='#24435e'; ctx.strokeRect(MX0,MY0,MW,MH);
    ctx.fillStyle='#8aa5ba'; ctx.font='10.5px system-ui'; ctx.textAlign='left';
    ctx.fillText('Ion view (particulate)', MX0+8, MY0+13);
    ctx.fillText('red H3O+  blue OH-  grey Na+/Cl-'+(cfg.weakpKa!=null?'  amber undissociated HA':''), MX0+8, MY0+MH-6);
    for(const p of molParts){
      ctx.fillStyle=p.c; ctx.beginPath(); ctx.arc(p.x,p.y,p.k==='HA'?3.4:2.6,0,Math.PI*2); ctx.fill();
    }
  }

  function frame(now){
    if(dead) return;
    const dt=Math.min(0.05,(now-lastT)/1000); lastT=now;
    // flow
    let rate=0;
    if(holding) rate=3.5;
    else if(targetAdd>added) rate=Math.min(8,(targetAdd-added)*10+0.4);
    if(rate>0){
      const before=added;
      added=Math.min(maxV, added+rate*dt);
      if(added>=maxV){ holding=false; targetAdd=maxV; }
      const dv=added-before;
      dropAcc+=dv;
      while(dropAcc>0.045){ dropAcc-=0.045; spawnDrop(); }
    }
    // physics
    const sy=surfaceY();
    for(let i=drops.length-1;i>=0;i--){
      const d=drops[i]; d.vy+=2600*dt; d.y+=d.vy*dt;
      if(d.y>=sy){ drops.splice(i,1); spawnSplash(sy);
        if(now-lastSfx>90){ SFX.drop(); lastSfx=now; } }
    }
    for(let i=splashes.length-1;i>=0;i--){
      const s=splashes[i]; s.vy+=900*dt; s.x+=s.vx*dt; s.y+=s.vy*dt; s.a-=dt*2.2;
      if(s.a<=0) splashes.splice(i,1);
    }
    swirlBoost=Math.max(0,swirlBoost-dt*1.6);
    swirl+=dt*(0.5+swirlBoost*5);
    // colour ease
    const st=stateNow();
    const tc=hex2rgb(st.c);
    const k=Math.min(1,dt*4.5);
    curC=mixC(curC,tc,k);
    if(st.label!==lastLabel){
      lastLabel=st.label;
      if(!isAB) journal.push([added, st.label]);
      if(/ENDPOINT/i.test(st.label) && !epChimed){ epChimed=true; SFX.endpoint(); }
    }
    lastPH = isAB ? cfg.phAt(added) : 7;
    molTargets();
    for(const p of molParts){
      p.x+=p.vx*dt; p.y+=p.vy*dt;
      if(p.x<MX0+8||p.x>MX0+MW-8) p.vx*=-1;
      if(p.y<MY0+18||p.y>MY0+MH-14) p.vy*=-1;
    }
    // draw
    bgBench(ctx,W,H);
    drawGraph();
    if(showMol&&isAB) drawMol();
    drawBurette(now/1000);
    drawFlask(now/1000);
    // readouts
    gVol.textContent=added.toFixed(2);
    if(gPh) gPh.textContent=lastPH.toFixed(2);
    gCol.textContent=st.label;
    raf=requestAnimationFrame(frame);
  }
  let dropAcc=0;

  /* --- controls --- */
  function pressStart(e){
    if(e) e.preventDefault();
    SFX.ac();
    holdT=performance.now(); holding=false;
    holdTimer=setTimeout(()=>{ holding=true; },180);
  }
  let holdTimer=0;
  function pressEnd(){
    clearTimeout(holdTimer);
    if(holding){ holding=false; }
    else if(holdT>0){ targetAdd=Math.min(maxV, Math.max(targetAdd,added)+0.05); }
    holdT=-1;
  }
  // canvas stopcock region
  function inCock(e){
    const r=cv.getBoundingClientRect();
    const x=(e.clientX-r.left)*W/r.width, y=(e.clientY-r.top)*H/r.height;
    return x>95&&x<195&&y>236&&y<278;
  }
  cv.addEventListener('pointerdown', e=>{ if(inCock(e)){ cv.setPointerCapture(e.pointerId); pressStart(e); } });
  cv.addEventListener('pointerup', e=>{ if(holdT>0||holding) pressEnd(); });
  cv.addEventListener('pointercancel', pressEnd);
  const runBtn=wrap.querySelector('#t-run');
  runBtn.addEventListener('pointerdown', pressStart);
  runBtn.addEventListener('pointerup', pressEnd);
  runBtn.addEventListener('pointerleave', ()=>{ if(holding) pressEnd(); });
  wrap.querySelector('#t-add1').onclick=()=>{ SFX.ac(); targetAdd=Math.min(maxV, Math.max(targetAdd,added)+1); };
  wrap.querySelector('#t-adddrop').onclick=()=>{ SFX.ac(); targetAdd=Math.min(maxV, Math.max(targetAdd,added)+0.05); };
  wrap.querySelector('#t-reset').onclick=()=>{ holding=false; targetAdd=0; added=0; dropAcc=0; drops=[]; epChimed=false; lastLabel=''; };
  const sndBtn=wrap.querySelector('#t-snd');
  sndBtn.onclick=()=>{ SFX.toggle(); sndBtn.textContent='Sound: '+(SFX.on?'on':'off'); if(SFX.on) SFX.record(); };
  if(isAB){
    const molBtn=wrap.querySelector('#t-mol');
    molBtn.onclick=()=>{ showMol=!showMol; molBtn.textContent='Ion view: '+(showMol?'on':'off'); if(showMol) molTargets(); };
  }

  function concordant(){
    if(readings.length<2) return null;
    const a=readings[readings.length-2], b=readings[readings.length-1];
    return Math.abs(a-b)<=0.1 ? Math.round((a+b)/2*10)/10 : null;
  }
  function readingsHTML(){
    if(!readings.length) return '';
    const cvv=concordant();
    const conc=cvv!=null ? cvv.toFixed(1)+' mL (last two runs agree within 0.1 mL)'
      : 'not concordant yet (last two differ by '+Math.abs(readings[readings.length-2]-readings[readings.length-1]).toFixed(1)+' mL) - refill and do another run';
    return `<div class="curve-wrap" style="margin-top:12px"><b style="color:#7dd3c8;font-size:14px">Your readings</b>
    <table class="data"><tr><th>Run</th>${readings.map((_,i)=>`<th>${'I'.repeat(i+1)}</th>`).join('')}</tr>
    <tr><td>Volume of titrant (mL)</td>${readings.map(r=>`<td>${r.toFixed(1)}</td>`).join('')}</tr></table>
    <p style="color:#9fb4c4;font-size:12.5px;margin-top:4px">Concordant value: ${conc}</p></div>`;
  }
  wrap.querySelector('#t-record').onclick=()=>{
    SFX.record();
    const noisy=Math.round((added+rnd2(-0.08,0.08))*10)/10;
    readings.push(noisy);
    if(isAB){
      const pts=[];
      for(const pt of cfg.curvePts){ if(pt[0]>added) break; pts.push(pt); }
      pts.push([added, cfg.phAt(added)]);
      runCurves.push(pts);
    }
    wrap.querySelector('#t-readings').innerHTML=readingsHTML();
    const res=wrap.querySelector('#t-result');
    const cvv=concordant();
    if(cvv!=null){
      res.innerHTML=`<div class="result-box"><b>Result (using concordant value ${cvv.toFixed(1)} mL)</b>
        ${cfg.calcLines(cvv).map(l=>`<p>${esc(l)}</p>`).join('')}</div>`;
    } else if(readings.length>=2){
      res.innerHTML=`<div class="result-box"><b>Last two readings differ by more than 0.1 mL - not concordant yet. Refill the burette and do one more run.</b></div>`;
    }
    holding=false; targetAdd=0; added=0; dropAcc=0; drops=[]; epChimed=false; lastLabel='';
  };

  frame(performance.now());
  const scene={ destroy(){ dead=true; cancelAnimationFrame(raf); clearTimeout(holdTimer); wrap.remove(); } };
  ACTIVE.push(scene);
  return scene;
}

/* ================= SALT ANALYSIS SCENE ================= */
const CATION_SOL = { Cu:'#60a5fa', Ni:'#4ade80', Co:'#f9a8d4', Fe:'#fbbf24', Mn:'#fbcfe8' };
const CATION_XTAL = { Cu:'#3b82f6', Ni:'#22c55e', Co:'#f472b6', Fe:'#d97706', Mn:'#fbcfe8' };

const FX_AN_DIL = {
  CO3:{bubbles:34, gas:'CO2 - colourless, odourless; turns lime water milky'},
  S2:{bubbles:18, gas:'H2S - rotten egg smell', paper:{from:'#f8fafc',to:'#1f2937',label:'lead acetate paper turns black'}},
  SO3:{bubbles:22, gas:'SO2 - suffocating smell of burning sulphur', paper:{from:'#f97316',to:'#16a34a',label:'acidified K2Cr2O7 paper turns green'}},
  NO2:{fumes:'#92400e', gas:'Brown NO2 fumes even in the cold', paper:{from:'#f8fafc',to:'#1e3a8a',label:'KI-starch paper turns blue'}},
  CH3COO:{heat:true, smell:'Vinegar smell (CH3COOH vapours) on warming'}
};
const FX_AN_CONC = {
  Cl:{heat:true, fumes:'#e5e7eb', gas:'Colourless HCl gas - white fumes; dense white fumes with NH4OH rod'},
  Br:{heat:true, fumes:'#b45309', gas:'Reddish-brown Br2 vapours'},
  I:{heat:true, fumes:'#7c3aed', gas:'Violet iodine vapours'},
  NO3:{heat:true, fumes:'#92400e', gas:'Brown fumes of NO2, deepened by copper turnings'},
  C2O4:{heat:true, bubbles:12, flameJet:true, gas:'CO + CO2 mixture - the gas burns with a blue flame'},
  CH3COO:{heat:true, smell:'Strong vinegar smell on heating'},
  NO2:{heat:true, fumes:'#92400e', gas:'Brown fumes deepen on warming'}
};
const FX_AN_CONFIRM = {
  CO3:{solution:'#e5e7eb', cloudy:true, act:'Pass the gas into lime water'},
  S2:{solution:'#6d28d9', act:'Add sodium nitroprusside to the solution'},
  SO3:{ppt:'#f8fafc', dissolve:true, act:'Add BaCl2 solution, then dilute HCl'},
  NO2:{solution:'#1e3a8a', act:'Add starch-KI solution'},
  CH3COO:{solution:'#be122a', act:'Add neutral FeCl3 solution'},
  Cl:{ppt:'#f8fafc', dissolve:true, act:'Add AgNO3, then excess NH4OH'},
  Br:{ppt:'#fef9c3', act:'Add AgNO3 solution'},
  I:{ppt:'#fde047', act:'Add AgNO3 solution'},
  NO3:{ring:'#7c2d12', act:'Add FeSO4, then conc. H2SO4 down the side'},
  SO4:{ppt:'#f8fafc', act:'Add BaCl2 solution (ppt insoluble in dil. HCl)'},
  PO4:{ppt:'#fde047', heat:true, act:'Warm with conc. HNO3 + ammonium molybdate'},
  C2O4:{ppt:'#f8fafc', act:'Add CaCl2 solution'}
};
const FX_CAT_GROUP = {
  NH4:{heat:true, bubbles:14, gas:'NH3 - pungent smell', paper:{from:'#ef4444',to:'#3b82f6',label:'moist red litmus turns blue'}},
  Pb:{ppt:'#f8fafc', dissolve:true, act:'Add dilute HCl (ppt soluble in hot water)'},
  Cu:{ppt:'#111827', act:'Pass H2S in dilute HCl medium'},
  As:{ppt:'#fde047', act:'Pass H2S in dilute HCl medium'},
  Al:{ppt:'#f8fafc', gel:true, act:'Add NH4OH in presence of NH4Cl'},
  Fe:{ppt:'#92400e', act:'Add NH4OH in presence of NH4Cl'},
  Zn:{ppt:'#f8fafc', act:'Pass H2S in ammoniacal medium'},
  Mn:{ppt:'#fbcfe8', act:'Pass H2S in ammoniacal medium'},
  Co:{ppt:'#111827', act:'Pass H2S in ammoniacal medium'},
  Ni:{ppt:'#111827', act:'Pass H2S in ammoniacal medium'},
  Ca:{ppt:'#f8fafc', act:'Add (NH4)2CO3 in presence of NH4Cl'},
  Sr:{ppt:'#f8fafc', act:'Add (NH4)2CO3 in presence of NH4Cl'},
  Ba:{ppt:'#f8fafc', act:'Add (NH4)2CO3 in presence of NH4Cl'},
  Mg:{ppt:'#f8fafc', act:'Add Na2HPO4 with NH4Cl + NH4OH'},
  Na:{flame:'#f59e0b', flameLabel:'Golden-yellow flame (Na+); lilac-violet through cobalt glass (K+)'}
};
const FX_CAT_CONFIRM = {
  NH4:{ppt:'#92400e', act:"Add Nessler's reagent"},
  Pb:{ppt:'#fbbf24', act:'Add KI to the hot-water extract'},
  Cu:{solution:'#1d4ed8', act:'Add excess NH4OH'},
  As:{ppt:'#fde047', heat:true, act:'Dissolve in conc. HNO3, add ammonium molybdate, warm'},
  Al:{ppt:'#f8fafc', dissolve:true, act:'Ppt dissolves in excess NaOH; reprecipitates with NH4Cl on boiling'},
  Fe:{solution:'#be122a', act:'Dissolve ppt in dil. HCl, add KSCN (blood red); K4[Fe(CN)6] gives deep blue ppt'},
  Zn:{ppt:'#f8fafc', dissolve:true, act:'Add NaOH - white ppt soluble in excess'},
  Mn:{ppt:'#f8fafc', darken:'#92400e', act:'Add NaOH - white ppt turning brown in air'},
  Co:{bead:'#3b82f6', act:'Borax bead test - blue bead (also blue layer with NH4SCN + amyl alcohol)'},
  Ni:{ppt:'#e11d48', act:'Make ammoniacal, add dimethylglyoxime (DMG)'},
  Ca:{flame:'#dc2626', flameLabel:'Brick-red flame'},
  Sr:{flame:'#be123c', flameLabel:'Crimson flame'},
  Ba:{flame:'#65a30d', flameLabel:'Apple-green flame'},
  Mg:{solution:'#1d4ed8', act:'Magneson reagent + NaOH - blue lake'},
  Na:{flame:'#f59e0b', flameLabel:'Golden-yellow flame confirms Na+'}
};

function salt(slot){
  const C=Core(), esc=C.esc, chem=C.chem;
  const D=window.SALTDATA;
  const wrap=document.createElement('div');
  wrap.className='sim';
  wrap.innerHTML=`
  <h2>Virtual lab: systematic salt analysis</h2>
  <p class="hint">Choose the salt given to you, then PERFORM each test yourself: add the reagent, warm, watch for gas, fumes, precipitates and flame colours - and note the observation before moving to the next step.</p>
  <div class="controls"><div><label>Given salt</label><select id="salt-sel" style="max-width:min(340px,80vw)">
    ${D.salts.map((s,i)=>`<option value="${i}">${esc(s[0])}</option>`).join('')}</select></div>
    <button id="salt-snd" class="ghost">Sound: ${SFX.on?'on':'off'}</button></div>
  <div class="canvas-wrap" id="lcv"></div>
  <div class="saltbar" id="salt-bar"></div>
  <div class="controls"><button id="salt-do" class="big-btn">-</button>
    <button id="salt-next" class="ghost" disabled>Next step &rarr;</button></div>
  <div id="salt-obs"></div>
  <p class="note">Scheme follows the NCERT lab manual: anion first (dil. then conc. H2SO4, confirmatory), then cation groups 0-VI. H2S steps assume a fume hood. Animations show the real observation for the chosen salt.</p>`;
  slot.appendChild(wrap);
  const W=760,H=440;
  const {cv,ctx}=makeCanvas(wrap.querySelector('#lcv'),W,H);
  const bar=wrap.querySelector('#salt-bar'), doBtn=wrap.querySelector('#salt-do'), nextBtn=wrap.querySelector('#salt-next'), obsBox=wrap.querySelector('#salt-obs');
  wrap.querySelector('#salt-snd').onclick=function(){ SFX.toggle(); this.textContent='Sound: '+(SFX.on?'on':'off'); };

  /* tube scene state */
  const TX=190, TY=88, TW=58, TH=240, TB=TY+TH; // tube
  let mode='tube';             // tube | flame | watch
  let liq='#eef4f7', liqCur=hex2rgb('#eef4f7'), liqTgt=hex2rgb('#eef4f7');
  let bubbles=[], ppts=[], fumes=[], smellOn=false, heatOn=false, cloudy=false;
  let paper=null, ring=null, bead=null, flame=null, flameJet=false;
  let xtals='#f8fafc';
  let animT=0, animDur=0, animFx=null, animDone=null, animating=false;
  let raf=0, dead=false, lastT=performance.now(), lastBub=0;

  function tubePath(){
    const p=new Path2D();
    p.moveTo(TX,TY); p.lineTo(TX,TB-26);
    p.quadraticCurveTo(TX,TB+4,TX+TW/2,TB+4);
    p.quadraticCurveTo(TX+TW,TB+4,TX+TW,TB-26);
    p.lineTo(TX+TW,TY); p.closePath();
    return p;
  }
  const tPath=tubePath();
  const liqTop=()=> TB-150;

  function resetTube(solColor){
    bubbles=[]; ppts=[]; fumes=[]; smellOn=false; heatOn=false; cloudy=false;
    paper=null; ring=null; bead=null; flame=null; flameJet=false;
    liqTgt=hex2rgb(solColor||'#eef4f7');
  }

  function startAnim(fx, dur, done){
    animFx=fx||{}; animDur=dur||2600; animT=0; animating=true; animDone=done||null;
    const f=animFx;
    if(f.heat) heatOn=true;
    if(f.smell) smellOn=true;
    if(f.fumes) fumes=[];
    if(f.paper) paper={from:hex2rgb(f.paper.from), to:hex2rgb(f.paper.to), t:0, label:f.paper.label};
    if(f.solution) { /* lerp at end via anim progress */ }
    if(f.flame){ mode='flame'; flame={c:hex2rgb(f.flame), label:f.flameLabel||'flame test'}; SFX.whoosh(); }
    if(f.bead) bead={c:hex2rgb(f.bead), t:0};
    if(f.ring) ring={c:hex2rgb(f.ring), t:0};
    if(f.flameJet) flameJet=true;
  }

  function drawTube(t){
    // stand
    ctx.strokeStyle='rgba(140,160,180,.5)'; ctx.lineWidth=4;
    ctx.beginPath(); ctx.moveTo(TX-70,TB+60); ctx.lineTo(TX-70,60); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(TX-70,TB+60); ctx.lineTo(TX+110,TB+60); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(TX-70,TY+30); ctx.lineTo(TX-4,TY+30); ctx.stroke();
    // burner
    if(heatOn){
      const bx=TX+TW/2, by=TB+58;
      ctx.fillStyle='#374151'; ctx.fillRect(bx-16,by-14,32,14);
      ctx.fillStyle='#4b5563'; ctx.fillRect(bx-4,by-34,8,20);
      const fl=10+3*Math.sin(t*22)+2*Math.sin(t*47);
      ctx.fillStyle='rgba(59,130,246,.85)';
      ctx.beginPath(); ctx.moveTo(bx-8,by-34); ctx.quadraticCurveTo(bx,by-34-fl-8,bx+8,by-34); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(147,197,253,.9)';
      ctx.beginPath(); ctx.moveTo(bx-4,by-34); ctx.quadraticCurveTo(bx,by-34-fl*0.55,bx+4,by-34); ctx.closePath(); ctx.fill();
    }
    // glass
    ctx.fillStyle='rgba(190,215,235,.12)'; ctx.fill(tPath);
    glassStroke(ctx); ctx.stroke(tPath);
    ctx.beginPath(); ctx.moveTo(TX-6,TY); ctx.lineTo(TX+TW+6,TY);
    ctx.strokeStyle='rgba(180,205,225,.85)'; ctx.lineWidth=3; ctx.stroke();
    // liquid
    ctx.save(); ctx.clip(tPath);
    const ly=liqTop();
    const lg=ctx.createLinearGradient(0,ly,0,TB);
    lg.addColorStop(0,rgbStr(mixC(liqCur,[255,255,255],0.15),0.9));
    lg.addColorStop(1,rgbStr(mixC(liqCur,[0,0,0],0.2),0.95));
    ctx.fillStyle=lg;
    ctx.beginPath(); ctx.moveTo(TX-4,ly);
    for(let x=TX-4;x<=TX+TW+4;x+=6) ctx.lineTo(x, ly+1.6*Math.sin(x/9+t*2));
    ctx.lineTo(TX+TW+4,TB+10); ctx.lineTo(TX-4,TB+10); ctx.closePath(); ctx.fill();
    if(cloudy){
      ctx.fillStyle='rgba(248,250,252,'+(0.25+0.1*Math.sin(t*3))+')';
      ctx.fillRect(TX-4,ly,TW+8,TB-ly+10);
    }
    // settled precipitate mound
    const settled=ppts.filter(p=>p.settled);
    if(settled.length){
      const mh=Math.min(34, 4+settled.length*0.55);
      ctx.fillStyle=rgbStr(settled[0].cc,0.95);
      ctx.beginPath(); ctx.moveTo(TX-2,TB+4);
      for(let x=TX-2;x<=TX+TW+2;x+=6) ctx.lineTo(x, TB+2-mh*Math.sin(Math.PI*(x-TX+2)/(TW+4)));
      ctx.lineTo(TX+TW+2,TB+4); ctx.closePath(); ctx.fill();
    }
    // falling ppt particles
    for(const p of ppts){ if(!p.settled){ ctx.fillStyle=rgbStr(p.cc,0.9); ctx.beginPath(); ctx.arc(p.x,p.y,1.7,0,Math.PI*2); ctx.fill(); } }
    // bubbles
    ctx.fillStyle='rgba(240,248,255,.55)';
    for(const b of bubbles){ ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fill(); }
    ctx.restore();
    // ring (brown ring test)
    if(ring){
      ctx.fillStyle=rgbStr(ring.c,Math.min(0.9,ring.t));
      ctx.beginPath(); ctx.ellipse(TX+TW/2, ly+26, TW/2+3, 6, 0, 0, Math.PI*2); ctx.fill();
    }
    // fumes
    for(const f of fumes){
      ctx.fillStyle=rgbStr(f.c, f.a*0.5);
      ctx.beginPath(); ctx.ellipse(f.x,f.y,f.r,f.r*0.7,0,0,Math.PI*2); ctx.fill();
    }
    // smell wisps
    if(smellOn){
      ctx.strokeStyle='rgba(200,220,235,.5)'; ctx.lineWidth=1.6;
      for(let i=0;i<3;i++){
        const sx=TX+12+i*18, off=(t*30+i*40)%70;
        ctx.beginPath(); ctx.moveTo(sx, TY-6-off);
        ctx.quadraticCurveTo(sx+6, TY-16-off, sx, TY-28-off); ctx.stroke();
      }
    }
    // blue flame jet at mouth (gas burning)
    if(flameJet){
      const jx=TX+TW/2, jy=TY-4, fl=8+3*Math.sin(t*25);
      ctx.fillStyle='rgba(59,130,246,.8)';
      ctx.beginPath(); ctx.moveTo(jx-6,jy); ctx.quadraticCurveTo(jx,jy-fl-6,jx+6,jy); ctx.closePath(); ctx.fill();
    }
    // bead test
    if(bead){
      ctx.strokeStyle='#9ca3af'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(TX+TW+30,TY-30); ctx.lineTo(TX+TW+6,TY-4); ctx.stroke();
      ctx.fillStyle=rgbStr(bead.c,Math.min(1,bead.t));
      ctx.beginPath(); ctx.arc(TX+TW+6,TY-4,7,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#8aa5ba'; ctx.font='11px system-ui'; ctx.textAlign='left';
      ctx.fillText('borax bead', TX+TW+24, TY-24);
    }
    // dropper while animating an "add"
    if(animating && animFx && (animFx.ppt||animFx.solution||animFx.add)){
      const dp=Math.min(1,animT/animDur*3), dy=10+dp*18;
      ctx.save(); ctx.translate(TX+TW/2, TY-40+dy);
      ctx.fillStyle='rgba(190,215,235,.3)'; ctx.fillRect(-4,0,8,26);
      ctx.fillStyle='#8fa9bd'; ctx.beginPath(); ctx.ellipse(0,-4,7,6,0,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='rgba(191,219,254,.9)';
      if(animT%400<200){ ctx.beginPath(); ctx.ellipse(0,30,2,3.4,0,0,Math.PI*2); ctx.fill(); }
      ctx.restore();
    }
    // paper strip test
    if(paper){
      const px=520, py=80, pw=42, ph=150;
      const cc=mixC(paper.from,paper.to,Math.min(1,paper.t));
      ctx.fillStyle='#8aa5ba'; ctx.font='11px system-ui'; ctx.textAlign='center';
      ctx.fillText('paper test', px+pw/2, py-10);
      ctx.fillStyle=rgbStr(cc,1); ctx.fillRect(px,py,pw,ph);
      ctx.strokeStyle='rgba(140,160,180,.7)'; ctx.lineWidth=1.5; ctx.strokeRect(px,py,pw,ph);
      ctx.fillStyle='#9fb4c4'; ctx.font='11px system-ui';
      wrapText(ctx, paper.label, px+pw/2, py+ph+18, 120, 14, 'center');
    }
    // gas label
    if(animFx && animFx.gas && animating){
      ctx.fillStyle='#f5d08a'; ctx.font='12px system-ui'; ctx.textAlign='left';
      wrapText(ctx, animFx.gas, 330, 120, 400, 17, 'left');
    }
  }
  function drawFlame(t){
    const cx=380, by=380;
    ctx.fillStyle='#374151'; ctx.fillRect(cx-22,by-16,44,16);
    ctx.fillStyle='#4b5563'; ctx.fillRect(cx-5,by-46,10,30);
    const fc=flame?flame.c:hex2rgb('#3b82f6');
    const h=120+18*Math.sin(t*13)+10*Math.sin(t*29);
    // outer tinted flame
    ctx.fillStyle=rgbStr(fc,0.75);
    ctx.beginPath(); ctx.moveTo(cx-26,by-46);
    ctx.quadraticCurveTo(cx-14,by-46-h*0.55, cx, by-46-h);
    ctx.quadraticCurveTo(cx+14,by-46-h*0.55, cx+26,by-46);
    ctx.closePath(); ctx.fill();
    // inner blue cone
    ctx.fillStyle='rgba(59,130,246,.85)';
    ctx.beginPath(); ctx.moveTo(cx-12,by-46);
    ctx.quadraticCurveTo(cx,by-46-h*0.42,cx+12,by-46);
    ctx.closePath(); ctx.fill();
    // wire loop
    ctx.strokeStyle='#d1d5db'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(cx+70,by-190); ctx.lineTo(cx+8,by-140); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx+6,by-138,6,0,Math.PI*2); ctx.stroke();
    ctx.fillStyle='#9fb4c4'; ctx.font='12px system-ui'; ctx.textAlign='center';
    ctx.fillText(flame?flame.label:'flame test', cx, by-220);
  }
  function drawWatch(t){
    // watch glass with salt crystals
    const cx=380, cy=300;
    ctx.fillStyle='rgba(190,215,235,.14)';
    ctx.beginPath(); ctx.ellipse(cx,cy,150,34,0,0,Math.PI*2); ctx.fill();
    glassStroke(ctx); ctx.beginPath(); ctx.ellipse(cx,cy,150,34,0,0,Math.PI*2); ctx.stroke();
    const cc=hex2rgb(xtals);
    for(let i=0;i<46;i++){
      const a=i*2.399, r=Math.sqrt(i/46)*95;
      const x=cx+Math.cos(a)*r, y=cy-6+Math.sin(a)*r*0.24-Math.abs(Math.sin(i*7))*14;
      ctx.fillStyle=rgbStr(mixC(cc,[255,255,255],(i%5)/8),0.95);
      ctx.save(); ctx.translate(x,y); ctx.rotate(i); ctx.fillRect(-3,-3,6,6); ctx.restore();
    }
    ctx.fillStyle='#9fb4c4'; ctx.font='12px system-ui'; ctx.textAlign='center';
    ctx.fillText('salt sample on a watch glass', cx, cy+58);
  }
  function wrapText(ctx,text,x,y,maxW,lh,align){
    const words=String(text).split(' '); let line='', yy=y;
    ctx.textAlign=align||'left';
    for(const w of words){
      const test=line?line+' '+w:w;
      if(ctx.measureText(test).width>maxW && line){ ctx.fillText(line,x,yy); line=w; yy+=lh; }
      else line=test;
    }
    if(line) ctx.fillText(line,x,yy);
    return yy;
  }

  function frame(now){
    if(dead) return;
    const dt=Math.min(0.05,(now-lastT)/1000); lastT=now; const t=now/1000;
    liqCur=mixC(liqCur,liqTgt,Math.min(1,dt*3));
    if(animating){
      animT+=dt*1000;
      const f=animFx, p=Math.min(1,animT/animDur);
      if(f.bubbles){
        bubAcc+=f.bubbles*dt;
        while(bubAcc>1){ bubAcc-=1;
          bubbles.push({x:rnd2(TX+8,TX+TW-8), y:TB-6, r:rnd2(1.4,3), vy:rnd2(30,70)});
          if(now-lastBub>160){ SFX.bubble(); lastBub=now; }
        }
      }
      if(f.ppt && p>0.25){
        pptAcc+=46*dt;
        while(pptAcc>1){ pptAcc-=1;
          ppts.push({x:rnd2(TX+6,TX+TW-6), y:rnd2(liqTop()+6,liqTop()+40), vy:rnd2(22,44), cc:hex2rgb(f.ppt), settled:false});
        }
      }
      if(f.dissolve && p>0.7){ for(const q of ppts) q.fade=true; }
      if(f.darken && p>0.55){
        const dk=hex2rgb(f.darken);
        for(const q of ppts) if(q.settled) q.cc=mixC(q.cc,dk,dt*2);
      }
      if(f.solution && p>0.3) liqTgt=hex2rgb(f.solution);
      if(f.cloudy && p>0.5) cloudy=true;
      if(f.fumes){
        fumeAcc+=8*dt;
        while(fumeAcc>1){ fumeAcc-=1;
          fumes.push({x:TX+TW/2+rnd2(-14,14), y:TY-6, r:rnd2(6,12), c:hex2rgb(f.fumes), a:0.9, vy:rnd2(18,34)});
        }
      }
      if(paper) paper.t=Math.min(1,paper.t+dt*0.7);
      if(ring) ring.t=Math.min(1,ring.t+dt*0.8);
      if(bead) bead.t=Math.min(1,bead.t+dt*0.8);
      if(p>=1){ animating=false; if(animDone) animDone(); }
    }
    // physics
    for(let i=bubbles.length-1;i>=0;i--){ const b=bubbles[i]; b.y-=b.vy*dt; if(b.y<liqTop()+4) bubbles.splice(i,1); }
    let anyFall=false;
    for(const p of ppts){
      if(p.fade){ p.vy=Math.max(0,p.vy-30*dt); p.y-=18*dt; if(p.y<liqTop()) p.gone=true; }
      else if(!p.settled){ p.y+=p.vy*dt; const mound=TB-2-Math.min(30,ppts.filter(q=>q.settled).length*0.5); if(p.y>=mound){ p.settled=true; p.y=mound+rnd2(-2,2); } }
    }
    ppts=ppts.filter(p=>!p.gone);
    for(let i=fumes.length-1;i>=0;i--){ const f=fumes[i]; f.y-=f.vy*dt; f.a-=dt*0.5; f.r+=dt*6; if(f.a<=0||f.y<20) fumes.splice(i,1); }
    // draw
    bgBench(ctx,W,H);
    if(mode==='flame') drawFlame(t);
    else if(mode==='watch') drawWatch(t);
    else drawTube(t);
    raf=requestAnimationFrame(frame);
  }
  let bubAcc=0, pptAcc=0, fumeAcc=0;

  /* ---- steps ---- */
  function buildSteps(){
    const [name, ck, ak]=D.salts[+wrap.querySelector('#salt-sel').value];
    const an=D.anions[ak];
    const cat= ck==='Na' ? D.naCation : D.cations[ck];
    const sol=CATION_SOL[ck]||'#eef4f7';
    return [
      { title:'Step 1 - Physical appearance', btn:'Examine the salt', mode:'watch',
        fx:{}, obs:cat.colour, inf:'Note the colour: it is consistent with the identified ions (see final result).' },
      { title:'Step 2 - Anion: warm with dilute H2SO4', btn:'Add dil. H2SO4 and warm', mode:'tube', sol,
        fx:Object.assign({add:true}, FX_AN_DIL[ak]||{}), obs:an.dilAcid, inf:an.dilAcid.startsWith('No reaction')?'':an.note },
      { title:'Step 3 - Anion: warm with concentrated H2SO4', btn:'Add conc. H2SO4 and warm', mode:'tube', sol,
        fx:Object.assign({add:true}, FX_AN_CONC[ak]||{}), obs:an.concAcid, inf:'' },
      { title:'Step 4 - Confirmatory test for the anion', btn:(FX_AN_CONFIRM[ak]||{}).act||'Do the confirmatory test', mode:'tube', sol,
        fx:Object.assign({add:true}, FX_AN_CONFIRM[ak]||{}), obs:an.confirm, inf:'Anion confirmed: '+an.name },
      { title:'Step 5 - Cation: '+cat.group, btn:(FX_CAT_GROUP[ck]||{}).act||'Do the group test', mode:'tube', sol,
        fx:Object.assign({add:true}, FX_CAT_GROUP[ck]||{}), obs:cat.groupTest, inf:'' },
      { title:'Step 6 - Confirmatory test for the cation', btn:(FX_CAT_CONFIRM[ck]||{}).act||'Do the confirmatory test', mode:'tube', sol,
        fx:Object.assign({add:true}, FX_CAT_CONFIRM[ck]||{}), obs:cat.confirm, inf:'Cation confirmed: '+cat.name }
    ].map(s=>({...s, saltName:name, catName:cat.name, anName:an.name}));
  }
  let steps=[], idx=0;
  function renderBar(){
    bar.innerHTML=steps.map((s,i)=>`<span class="pill" style="${i<idx?'background:#123524;border-color:#2f9e8f;':i===idx?'border-color:#7dd3c8;':''}">${i+1}</span>`).join(' ');
  }
  function showStep(){
    renderBar();
    const s=steps[idx];
    mode=s.mode;
    resetTube(s.sol);
    if(s.mode==='watch'){ xtals=CATION_XTAL[[+wrap.querySelector('#salt-sel').value]!=null?D.salts[+wrap.querySelector('#salt-sel').value][1]:'']||'#f8fafc'; }
    obsBox.innerHTML=`<div class="salt-step"><b>${esc(s.title)}</b><p style="color:#9fb4c4;font-size:13px">Do the test to see the observation.</p></div>`;
    doBtn.textContent=s.btn; doBtn.disabled=false; nextBtn.disabled=true;
  }
  doBtn.onclick=()=>{
    if(animating) return;
    const s=steps[idx];
    doBtn.disabled=true;
    startAnim(s.fx, s.fx.flame?3400:3000, ()=>{
      obsBox.innerHTML=`<div class="salt-step"><b>${esc(s.title)}</b>
        <p class="obs">${chem(s.obs)}</p>${s.inf?`<p class="inf">${chem(s.inf)}</p>`:''}</div>`;
      nextBtn.disabled=false;
      SFX.record();
    });
  };
  nextBtn.onclick=()=>{
    if(idx<steps.length-1){ idx++; showStep(); }
    else{
      const s=steps[idx];
      obsBox.innerHTML=`<div class="salt-final"><b>Result:</b> the given salt is <b>${chem(s.saltName)}</b> (cation ${chem(s.catName)}, anion ${chem(s.anName)}).</div>`;
      nextBtn.disabled=true; doBtn.disabled=true;
      bar.innerHTML=steps.map((s2,i)=>`<span class="pill" style="background:#123524;border-color:#2f9e8f;">${i+1}</span>`).join(' ');
    }
  };
  wrap.querySelector('#salt-sel').addEventListener('input', ()=>{ steps=buildSteps(); idx=0; mode='tube'; showStep(); });

  steps=buildSteps(); showStep();
  frame(performance.now());
  const scene={ destroy(){ dead=true; cancelAnimationFrame(raf); wrap.remove(); } };
  ACTIVE.push(scene);
  return scene;
}

window.LabScenes={ titration, salt, destroyAll, SFX };
})();
