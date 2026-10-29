import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { makeIcon, iconForKA, iconForTopic, iconForRoot } from './icons.js';
import {
  ensureLabelFonts, makeEmbossPlaque, setPlaqueOpacity, billboardPlaqueY,
  pickPlaqueColors, contrastRatio,
} from './plaques.js';

const D = window.SWE;
const KAS = D.kas;
const faD = s => String(s).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
window.faD = faD;

/* ---------------- language ---------------- */
const UI = {
  fa: {
    hintCenter: 'برای توضیح کامل بزنید',
    foundations: 'پایه‌ها · Foundations',
    overview: 'نمای کلی',
    kaLabel: (n, f) => `حوزهٔ دانش ${n}${f ? ' · پایه‌ها' : ''}`,
    topicsInKa: 'سرفصل‌های این حوزه',
    allKas: '۱۸ حوزهٔ دانش',
    related: 'ارتباط با بقیهٔ حوزه‌ها',
    what: 'چیست؟',
    why: 'چرا مهم است؟',
    keys: 'اجزا و مفاهیم کلیدی',
    ex: 'مثال ساده',
    aboutCrumb: 'توضیح کامل',
    topicKick: (ka, n) => `${ka} · سرفصل ${n}`,
    title: 'نقشهٔ سه‌بعدی مهندسی نرم‌افزار',
    back: 'بازگشت',
    home: 'خانه',
    langBtn: 'EN',
    legend: 'فهرست',
    legendClose: 'بستن',
    captionTap: 'برای ورود دوباره بزنید',
    glossEx: 'مثال',
    glossRelated: 'مفاهیم مرتبط',
    glossClose: 'بستن',
    glossHint: 'روی واژه‌های رنگی بزنید تا توضیح و مثالش را ببینید',
    glossDef: 'تعریف',
    glossHow: 'چطور کار می‌کند',
    glossWhy: 'چرا مهم است',
    glossSample: 'مسئلهٔ نمونه و حل',
    glossSteps: 'گام‌به‌گام',
    glossAnswer: 'پاسخ',
    sampleSec: 'مسئلهٔ نمونه و حل',
  },
  en: {
    hintCenter: 'Tap for the full explanation',
    foundations: 'Foundations',
    overview: 'Overview',
    kaLabel: (n, f) => `Knowledge area ${n}${f ? ' · Foundations' : ''}`,
    topicsInKa: 'Topics in this area',
    allKas: '18 knowledge areas',
    related: 'Related knowledge areas',
    what: 'What is it?',
    why: 'Why it matters',
    keys: 'Key ideas',
    ex: 'Simple example',
    aboutCrumb: 'Full explanation',
    topicKick: (ka, n) => `${ka} · Topic ${n}`,
    title: '3D Software Engineering Map',
    back: 'Back',
    home: 'Home',
    langBtn: 'فا',
    legend: 'List',
    legendClose: 'Close',
    captionTap: 'Tap again to open',
    glossEx: 'Example',
    glossRelated: 'Related terms',
    glossClose: 'Close',
    glossHint: 'Tap highlighted words for an explanation and example',
    glossDef: 'Definition',
    glossHow: 'How it works',
    glossWhy: 'Why it matters',
    glossSample: 'Sample problem & solution',
    glossSteps: 'Step by step',
    glossAnswer: 'Answer',
    sampleSec: 'Sample problem & solution',
  }
};
function detectLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'fa') return q;
  if (/\/en(?:\/|$)/i.test(location.pathname)) return 'en';
  try { const s = localStorage.getItem('swebok-lang'); if (s === 'en' || s === 'fa') return s; } catch (_) {}
  return 'fa';
}
let LANG = detectLang();
const isEn = () => LANG === 'en';
const T = () => UI[LANG];
const num = (n) => isEn() ? String(n) : faD(n);
function applyLangAttrs() {
  document.documentElement.lang = LANG;
  document.documentElement.dir = isEn() ? 'ltr' : 'rtl';
  document.body.classList.toggle('lang-en', isEn());
  document.body.classList.toggle('lang-fa', !isEn());
  const lb = document.getElementById('lang');
  if (lb) { lb.textContent = T().langBtn; lb.setAttribute('aria-label', isEn() ? 'Switch to Persian' : 'Switch to English'); }
  document.querySelectorAll('.back-text').forEach(el => { el.textContent = T().back; });
  document.querySelectorAll('.back-arrow').forEach(el => { el.textContent = isEn() ? '←' : '→'; });
  const bb = document.getElementById('back'); if (bb) bb.setAttribute('aria-label', T().back);
  const hb = document.getElementById('home'); if (hb) hb.setAttribute('aria-label', T().home);
  const hint = document.getElementById('hintbar');
  if (hint) hint.textContent = hint.getAttribute(isEn() ? 'data-en' : 'data-fa') || hint.textContent;
  const brand = document.querySelector('.brand b');
  const brandSm = document.querySelector('.brand small');
  if (brand) brand.textContent = isEn() ? '3D Software Engineering Map' : 'نقشهٔ سه‌بعدی مهندسی نرم‌افزار';
  if (brandSm) brandSm.textContent = isEn() ? '15 knowledge areas · 3 foundations' : '۱۵ حوزهٔ دانش · ۳ حوزهٔ پایه';
  const credit = document.querySelector('.credit');
  if (credit) credit.innerHTML = isEn()
    ? 'Nader Montazeri <span>·</span> Full-stack developer | Banking &amp; fintech'
    : 'نادر منتظری <span>·</span> توسعه‌دهندهٔ فول‌استک | بانکداری و فین‌تک';
  const legBtn = document.getElementById('legendBtn');
  if (legBtn) legBtn.textContent = T().legend;
  const legClose = document.getElementById('legendClose');
  if (legClose) legClose.textContent = T().legendClose;
  const legTitle = document.getElementById('legendTitle');
  if (legTitle) legTitle.textContent = isEn() ? 'Knowledge areas' : 'حوزه‌های دانش';
  const gClose = document.getElementById('glossClose');
  if (gClose) gClose.textContent = T().glossClose;
  const gBackTx = document.querySelector('.gloss-back-text');
  if (gBackTx) gBackTx.textContent = T().back;
  document.querySelectorAll('#glossBack .back-arrow').forEach(el => { el.textContent = isEn() ? '←' : '→'; });
  rebuildLegend();
  if (glossStack.length) renderGlossCard(glossStack[glossStack.length - 1], false);
}
function setLang(l, rebuild = true) {
  if (l !== 'en' && l !== 'fa') return;
  LANG = l;
  try { localStorage.setItem('swebok-lang', l); } catch (_) {}
  applyLangAttrs();
  if (rebuild && window.__ready) {
    // rebuild current view + panel for new labels
    const s = { ...cur };
    (async () => {
      busy = true;
      await ensureLabelFonts();
      await closePanel();
      disposeView(view);
      if (s.ka == null) { setCam(0); await enterView(buildRoot(), 0); }
      else { setCam(1); await enterView(buildKA(s.ka), 0); }
      markLayoutDirty();
      scheduleLabelRelayout([0, 150, 450, 900]);
      cur = { ka: s.ka, p: null };
      updateChrome();
      if (s.p) { cur = s; updateChrome(); await openPanel(s); }
      busy = false;
    })();
  } else updateChrome();
}
function enContent(kind, ch, n) {
  const E = D.en;
  if (!E) return null;
  if (kind === 'root') return E.root;
  if (kind === 'ka') return E.kas && E.kas[ch];
  if (kind === 'topic') return E.kas && E.kas[ch] && E.kas[ch].topics && E.kas[ch].topics[n];
  return null;
}
function panelData(kind, faObj, ch, n) {
  if (!isEn()) return faObj;
  const e = enContent(kind, ch, n);
  if (!e) return faObj;
  return { what: e.what, why: e.why, ex: e.ex, keys: e.keys, rel: faObj.rel, sample: e.sample || faObj.sample };
}

/* ---------------- clock (manual mode for deterministic demo capture) ---------------- */
let manual = false, mT = 0;
const now = () => manual ? mT : performance.now() / 1000;
window.__manual = (on) => { manual = on; mT = performance.now() / 1000; };

/* ---------------- tweens ---------------- */
const tweens = [];
const ease = {
  io: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  out: t => 1 - Math.pow(1 - t, 3),
  back: t => { const c1 = 1.5, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  in: t => t * t * t,
};
function tween(dur, fn, e = ease.io, delay = 0) {
  return new Promise(res => tweens.push({ t0: now() + delay, dur, fn, e, res }));
}
function runTweens() {
  const t = now();
  for (let i = tweens.length - 1; i >= 0; i--) {
    const w = tweens[i];
    if (t < w.t0) continue;
    const k = Math.min(1, (t - w.t0) / w.dur);
    w.fn(w.e(k), k);
    if (k >= 1) { tweens.splice(i, 1); w.res(); }
  }
}
const lerp = (a, b, k) => a + (b - a) * k;

/* ---------------- renderer / scene ---------------- */
const stage = document.getElementById('stage');
const IS_TOUCH = matchMedia('(hover: none), (pointer: coarse)').matches || 'ontouchstart' in window;
const IS_MOBILE = IS_TOUCH || innerWidth < 700;
const renderer = new THREE.WebGLRenderer({ antialias: !IS_MOBILE, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = IS_MOBILE ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.domElement.style.touchAction = 'none';
stage.appendChild(renderer.domElement);
const labelR = new CSS2DRenderer();
labelR.domElement.className = 'labels';
labelR.domElement.style.pointerEvents = 'none';
stage.appendChild(labelR.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);
const camTarget = new THREE.Vector3(0, 0, 0);
const cam = { dist: 17, pitch: 0.62, yaw: 0, ty: 0 };
let userYaw = 0; // drag-orbit; auto-rotation off on mobile

scene.add(new THREE.HemisphereLight(0xfff3ea, 0xe8d2ee, 1.25));
const sun = new THREE.DirectionalLight(0xfff0e0, 2.1);
sun.position.set(7, 14, 9);
sun.castShadow = true;
sun.shadow.mapSize.set(IS_MOBILE ? 1024 : 2048, IS_MOBILE ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -13, right: 13, top: 13, bottom: -13, near: 1, far: 50 });
sun.shadow.bias = -0.0004;
sun.shadow.radius = 4;
scene.add(sun);
const fill = new THREE.DirectionalLight(0xffd6e4, 0.7);
fill.position.set(-9, 5, -4);
scene.add(fill);

const clay = (c, extra = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.86, metalness: 0.0, ...extra });

// stage: layered clay discs
const stageG = new THREE.Group();
scene.add(stageG);
const disc1 = new THREE.Mesh(new THREE.CylinderGeometry(9.6, 9.9, 0.34, 96), clay(0xfff4f0));
disc1.position.y = -1.05; disc1.receiveShadow = true; stageG.add(disc1);
const disc2 = new THREE.Mesh(new THREE.CylinderGeometry(3.3, 3.45, 0.22, 80), clay(0xffe9e2));
disc2.position.y = -0.8; disc2.receiveShadow = true; disc2.castShadow = true; stageG.add(disc2);
const ringLine = new THREE.Mesh(new THREE.TorusGeometry(6.6, 0.025, 8, 160), clay(0xf0c9c0));
ringLine.rotation.x = Math.PI / 2; ringLine.position.y = -0.86; stageG.add(ringLine);
const shadowCatcher = new THREE.Mesh(new THREE.CircleGeometry(40, 64), new THREE.ShadowMaterial({ opacity: 0.08 }));
shadowCatcher.rotation.x = -Math.PI / 2; shadowCatcher.position.y = -1.23; shadowCatcher.receiveShadow = true;
scene.add(shadowCatcher);

// dust motes
const dustN = IS_MOBILE ? 90 : 260, dustPos = new Float32Array(dustN * 3), dustSeed = new Float32Array(dustN);
for (let i = 0; i < dustN; i++) {
  const r = 3 + Math.random() * 11, a = Math.random() * Math.PI * 2;
  dustPos[i * 3] = Math.cos(a) * r; dustPos[i * 3 + 1] = -0.6 + Math.random() * 6; dustPos[i * 3 + 2] = Math.sin(a) * r;
  dustSeed[i] = Math.random() * 10;
}
const dustGeo = new THREE.BufferGeometry();
dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
const dotTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c);
})();
const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.16, map: dotTex, color: 0xe8936f, transparent: true, opacity: 0.55, depthWrite: false }));
scene.add(dust);

/* ---------------- view building ---------------- */
let view = null;           // {group, center, nodes[], links[], level, ka}
const pickables = [];
const geoTile = new RoundedBoxGeometry(1.05, 0.46, 1.05, 4, 0.2);
const geoTileS = new RoundedBoxGeometry(0.8, 0.34, 0.8, 4, 0.15);
const geoCenterTile = new RoundedBoxGeometry(2.0, 0.85, 2.0, 5, 0.34);
const geoSphere = new THREE.SphereGeometry(0.5, 48, 32);
const geoCore = new THREE.SphereGeometry(1.15, 64, 48);

function shade(hex, f) { const c = new THREE.Color(hex); const h = {}; c.getHSL(h); c.setHSL(h.h, h.s, Math.min(0.92, Math.max(0.05, h.l + f))); return c; }

function bindTap(el, fn) {
  if (!fn) return;
  el.style.pointerEvents = 'auto';
  el.style.cursor = 'pointer';
  el.style.webkitTapHighlightColor = 'transparent';
  el.style.touchAction = 'manipulation';
  let sx = 0, sy = 0, st = 0, pid = null;
  el.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pid = e.pointerId; sx = e.clientX; sy = e.clientY; st = performance.now();
    try { el.setPointerCapture(e.pointerId); } catch (_) {}
  }, { passive: true });
  el.addEventListener('pointerup', e => {
    if (pid != null && e.pointerId !== pid) return;
    const dt = performance.now() - st, dx = e.clientX - sx, dy = e.clientY - sy;
    pid = null;
    if (dt <= 450 && dx * dx + dy * dy <= 14 * 14) {
      e.preventDefault(); e.stopPropagation();
      fn();
    }
  });
  el.addEventListener('pointercancel', () => { pid = null; });
  el.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); });
  el.addEventListener('pointerenter', () => el._node && setHover(el._node));
  el.addEventListener('pointerleave', () => setHover(null));
}
function makeLabel(html, cls, onClick, anchor = 'center', nodeHex) {
  const el = document.createElement('div');
  el.className = 'lbl clay-plaque ' + cls;
  el.innerHTML = html;
  if (nodeHex != null) applyPlaqueVars(el, nodeHex);
  bindTap(el, onClick);
  const o = new CSS2DObject(el);
  // CSS2D center: (0,0)=lower-left of el, (1,1)=upper-right.
  // 'on' ≈ plaque sits on icon top with ~25% overlap onto the icon body.
  if (anchor === 'above') o.center.set(0.5, 1);
  else if (anchor === 'below') o.center.set(0.5, 0);
  else if (anchor === 'on') o.center.set(0.5, 0.78);
  else o.center.set(0.5, 0.5);
  return o;
}


function radialLabelOffset(worldPos, amountXZ = 0.7) {
  const len = Math.hypot(worldPos.x, worldPos.z) || 1;
  return {
    x: (worldPos.x / len) * amountXZ,
    z: (worldPos.z / len) * (amountXZ * 0.55),
  };
}

function roofLabelY(iconMesh, scale, kind) {
  // Sit on icon crown: ~20-25% of plaque overlaps icon top; body stays clear (>=70% visible).
  const base = (iconMesh && iconMesh.position ? iconMesh.position.y : 0.4);
  const mob = (typeof IS_MOBILE !== 'undefined' && IS_MOBILE);
  let k;
  if (mob) {
    if (kind === 'topic') k = 0.70;       // topics: keep most of small icon visible
    else if (kind === 'found') k = 0.55;
    else if (kind === 'center' || kind === 'core') k = 0.95;
    else k = 0.58; // ka
  } else {
    if (kind === 'found') k = 0.50;
    else if (kind === 'topic') k = 0.42;
    else k = 0.34;
  }
  return base + k * (scale || 1);
}

/* ---- Embossed clay plaques (3D, parented to icons) ---- */
const USE_CSS2D_FALLBACK = true; // CSS2D embossed clay plaques (v8 pipeline + plaque restyle)

function setCenterSignOpacity(center, a) {
  setPlaqueOpacity(center && center.userData && center.userData.sign, a);
}
function setNodePlaqueOpacity(node, a) {
  setPlaqueOpacity(node && node.userData && node.userData.sign, a);
}

/** Project a plaque's AABB (with optional yaw samples) into screen space. */
function projectPlaqueScreen(sign, mesh, W, H, sampleSway) {
  if (!sign) return null;
  const lw = (sign.userData.localW || 0.5) * 0.5;
  const lh = (sign.userData.localH || 0.2) * 0.5;
  const corners = [[-lw, -lh, 0], [lw, -lh, 0], [-lw, lh, 0], [lw, lh, 0]];
  const v = new THREE.Vector3();
  let L = Infinity, R = -Infinity, T = Infinity, B = -Infinity;
  const yaws = [];
  if (sampleSway && mesh && !sign.userData.billboardY) {
    const br = mesh.userData.baseRot || { x: -0.42, y: 0.62, z: 0.1 };
    const amp = 0.38;
    yaws.push(mesh.rotation.y, br.y - amp, br.y + amp);
  } else {
    yaws.push(mesh ? mesh.rotation.y : 0);
  }
  const saved = mesh ? mesh.rotation.y : 0;
  for (const yaw of yaws) {
    if (mesh && sampleSway && !sign.userData.billboardY) {
      mesh.rotation.y = yaw;
      mesh.updateMatrixWorld(true);
    }
    for (const [x, y, z] of corners) {
      v.set(x, y, z);
      sign.localToWorld(v);
      v.project(camera);
      if (v.z > 1) continue;
      const sx = (v.x * 0.5 + 0.5) * W;
      const sy = (-v.y * 0.5 + 0.5) * H;
      L = Math.min(L, sx); R = Math.max(R, sx);
      T = Math.min(T, sy); B = Math.max(B, sy);
    }
  }
  if (mesh && sampleSway && !sign.userData.billboardY) {
    mesh.rotation.y = saved;
    mesh.updateMatrixWorld(true);
  }
  if (!(R > L && B > T)) return null;
  return { L, R, T, B, w: R - L, h: B - T };
}

function pushCenterSignObstacle(items, W, H) {
  if (!view || !view.center || !view.center.userData.sign) return;
  const sign = view.center.userData.sign;
  const mesh = view.center.userData.mesh;
  const box = projectPlaqueScreen(sign, mesh, W, H, true);
  if (!box) return;
  const pad = IS_MOBILE ? 10 : 12;
  items.push({
    el: null, plaque: sign, L0: box.L - pad, R0: box.R + pad, T0: box.T - pad, B0: box.B + pad,
    w: box.w + pad * 2, h: box.h + pad * 2,
    cx: 0, cy: 0, t: 0, fixed: true, isFound: false, isSign: true,
  });
}

function pushAllPlaqueObstacles(items, W, H) {
  if (!view) return;
  pushCenterSignObstacle(items, W, H);
  for (const n of view.nodes) {
    const sign = n.userData && n.userData.sign;
    if (!sign) continue;
    const mesh = n.userData.mesh;
    const box = projectPlaqueScreen(sign, mesh, W, H, false);
    if (!box) continue;
    const pad = IS_MOBILE ? 6 : 8;
    const isFound = n.userData.kind === 'found';
    // Strip current screen-equivalent nudge so refresh passes stay iterative, not compounding
    const lh = sign.userData.localH || 0.2;
    const pxH = Math.max(8, box.h);
    const toScreen = pxH / lh;
    const curNx = (sign.userData.nudgeX || 0) * toScreen;
    const curNy = -(sign.userData.nudgeY || 0) * toScreen; // local +Y → screen up → negative dy
    const L0 = box.L - curNx, R0 = box.R - curNx, T0 = box.T - curNy, B0 = box.B - curNy;
    items.push({
      el: null, plaque: sign, node: n,
      L0: L0 - pad, R0: R0 + pad, T0: T0 - pad, B0: B0 + pad,
      w: (R0 - L0) + pad * 2, h: (B0 - T0) + pad * 2,
      cx: curNx, cy: 0, t: curNy, fixed: false, isFound, isSign: true,
    });
  }
}

function attachEmbossPlaque(node, mesh, opts) {
  const pl = makeEmbossPlaque({
    isMobile: IS_MOBILE,
    rtl: !isEn(),
    iconScale: opts.iconScale,
    pickNode: node,
    primary: opts.primary,
    num: opts.num,
    nodeHex: opts.nodeHex,
    worldH: opts.worldH,
    maxWorldW: opts.maxWorldW,
    localY: opts.localY,
    localZ: opts.localZ,
    dualFace: !!opts.dualFace,
    billboardY: !!opts.billboardY,
    counterTilt: opts.counterTilt !== false,
    baseRot: mesh.userData.baseRot,
    bold: !!opts.bold,
    primSize: opts.primSize,
  });
  mesh.add(pl);
  if (opts.pickNode !== false) {
    for (const f of (pl.userData.faces || [])) pickables.push(f);
    pl.traverse(o => {
      if (o.isMesh && o.userData.isPlaqueBody) pickables.push(o);
    });
  }
  node.userData.sign = pl;
  node.userData.label = null;
  return pl;
}

function addRoofStem(node, fromY, toY, hex) {
  const h = Math.max(0.06, toY - fromY - 0.02);
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.028, 0.034, h, 8),
    new THREE.MeshStandardMaterial({
      color: shade(typeof hex === 'number' ? hex : 0xc08070, 0.2),
      roughness: 0.55, metalness: 0.08,
    })
  );
  stem.position.set(0, fromY + h * 0.5, 0);
  stem.castShadow = false; stem.receiveShadow = false;
  node.add(stem);
  return stem;
}
const TOPIC_SHORT_FA = {"1.1": "مبانی","1.2": "استخراج نیاز","1.3": "تحلیل نیاز","1.4": "مشخصه‌سازی","1.5": "اعتبارسنجی","1.6": "مدیریت نیاز","1.7": "ملاحظات عملی","1.8": "ابزارها","2.1": "مبانی","2.2": "توصیف","2.3": "فرایند","2.4": "ارزیابی","3.1": "مبانی","3.2": "فرایندها","3.3": "کیفیت‌ها","3.4": "مستندسازی","3.5": "راهبردها","3.6": "ارزیابی کیفیت","4.1": "مبانی","4.2": "مدیریت ساخت","4.3": "ملاحظات عملی","4.4": "فناوری‌ها","4.5": "ابزارها","5.1": "مبانی","5.2": "سطوح تست","5.3": "فنون تست","5.4": "سنجه‌ها","5.5": "فرایند تست","5.6": "تست در توسعه","5.7": "فناوری نوظهور","5.8": "ابزارها","6.1": "مبانی","6.2": "برنامه‌ریزی","6.3": "تحویل","6.4": "کنترل","6.5": "ملاحظات عملی","6.6": "ابزارها","7.1": "مبانی","7.2": "مسائل کلیدی","7.3": "فرایندها","7.4": "فنون","7.5": "ابزارها","8.1": "مدیریت فرایند","8.2": "شناسایی","8.3": "کنترل تغییر","8.4": "حسابداری وضعیت","8.5": "ممیزی","8.6": "مدیریت انتشار","8.7": "ابزارها","9.1": "آغاز دامنه","9.2": "برنامه‌ریزی","9.3": "اجرا","9.4": "بازبینی","9.5": "خاتمه","9.6": "اندازه‌گیری","9.7": "ابزارها","10.1": "مبانی","10.2": "چرخه‌های عمر","10.3": "بهبود فرایند","11.1": "مدل‌سازی","11.2": "انواع مدل","11.3": "تحلیل مدل","11.4": "روش‌ها","12.1": "مبانی","12.2": "مدیریت کیفیت","12.3": "تضمین کیفیت","12.4": "ابزارها","13.1": "مبانی","13.2": "مدیریت امنیت","13.3": "فرایند امنیت","13.4": "امنیت سیستم","13.5": "ابزارها","13.6": "دامنه خاص","14.1": "حرفه‌ای‌گری","14.2": "پویایی گروه","14.3": "مهارت ارتباطی","15.1": "مبانی","15.2": "تصمیم مهندسی","15.3": "انتفاعی","15.4": "غیرانتفاعی","15.5": "اقتصاد حال","15.6": "چندمعیاره","15.7": "دارایی نامشهود","15.8": "برآورد","15.9": "ملاحظات عملی","15.10": "مفاهیم مرتبط","16.1": "مفاهیم پایه","16.2": "معماری رایانه","16.3": "ساختمان داده","16.4": "برنامه‌نویسی","16.5": "سیستم‌عامل","16.6": "پایگاه‌داده","16.7": "شبکه‌ها","16.8": "عوامل انسانی","16.9": "هوش مصنوعی","17.1": "منطق پایه","17.2": "فنون اثبات","17.3": "مجموعه و تابع","17.4": "گراف و درخت","17.5": "ماشین حالت","17.6": "گرامر","17.7": "نظریهٔ اعداد","17.8": "مبانی شمارش","17.9": "احتمال گسسته","17.10": "خطای عددی","17.11": "ساختار جبری","17.12": "حسابان","17.13": "پیشرفت تازه","18.1": "فرایند مهندسی","18.2": "طراحی مهندسی","18.3": "انتزاع","18.4": "روش تجربی","18.5": "تحلیل آماری","18.6": "مدل‌سازی","18.7": "اندازه‌گیری","18.8": "استانداردها","18.9": "علت ریشه‌ای","18.10": "صنعت ۴٫۰"};
const TOPIC_SHORT_EN = {"1.1": "Fundamentals","1.2": "Elicitation","1.3": "Analysis","1.4": "Specification","1.5": "Validation","1.6": "Req. Mgmt","1.7": "Practical","1.8": "Tools","2.1": "Fundamentals","2.2": "Description","2.3": "Process","2.4": "Evaluation","3.1": "Fundamentals","3.2": "Processes","3.3": "Qualities","3.4": "Documentation","3.5": "Strategies","3.6": "Quality Review","4.1": "Fundamentals","4.2": "Managing Build","4.3": "Practical","4.4": "Technologies","4.5": "Tools","5.1": "Fundamentals","5.2": "Test Levels","5.3": "Techniques","5.4": "Test Metrics","5.5": "Test Process","5.6": "In Dev Domains","5.7": "Emerging Tech","5.8": "Tools","6.1": "Fundamentals","6.2": "Planning","6.3": "Delivery","6.4": "Control","6.5": "Practical","6.6": "Tools","7.1": "Fundamentals","7.2": "Key Issues","7.3": "Processes","7.4": "Techniques","7.5": "Tools","8.1": "SCM Process","8.2": "Identification","8.3": "Change Control","8.4": "Status Account","8.5": "Auditing","8.6": "Release Mgmt","8.7": "Tools","9.1": "Initiation","9.2": "Planning","9.3": "Execution","9.4": "Review","9.5": "Closure","9.6": "Measurement","9.7": "Tools","10.1": "Fundamentals","10.2": "Life Cycles","10.3": "Improvement","11.1": "Modeling","11.2": "Model Types","11.3": "Model Analysis","11.4": "Methods","12.1": "Fundamentals","12.2": "Quality Mgmt","12.3": "Assurance","12.4": "Tools","13.1": "Fundamentals","13.2": "Sec. Mgmt","13.3": "Sec. Processes","13.4": "System Sec.","13.5": "Tools","13.6": "Domain Sec.","14.1": "Professionalism","14.2": "Group Dynamics","14.3": "Communication","15.1": "Fundamentals","15.2": "Decision Process","15.3": "For-Profit","15.4": "Nonprofit","15.5": "Present Economy","15.6": "Multi-Attribute","15.7": "Intangibles","15.8": "Estimation","15.9": "Practical","15.10": "Related Concepts","16.1": "Basic Concepts","16.2": "Comp. Arch","16.3": "Data Structures","16.4": "Programming","16.5": "Operating Systems","16.6": "Databases","16.7": "Networks","16.8": "Human Factors","16.9": "AI & ML","17.1": "Basic Logic","17.2": "Proof Techniques","17.3": "Sets & Functions","17.4": "Graph & Tree","17.5": "FSM","17.6": "Grammar","17.7": "Number Theory","17.8": "Counting","17.9": "Probability","17.10": "Numeric Error","17.11": "Algebra","17.12": "Calculus","17.13": "New Advances","18.1": "Eng. Process","18.2": "Eng. Design","18.3": "Abstraction","18.4": "Empirical Methods","18.5": "Statistics","18.6": "Modeling","18.7": "Measurement","18.8": "Standards","18.9": "Root Cause","18.10": "Industry 4.0"};
function shortTopicName(t, k) {
  const key = (k && k.ch != null ? k.ch : '') + '.' + t.n;
  const hit = (isEn() ? TOPIC_SHORT_EN : TOPIC_SHORT_FA)[key];
  if (hit) return hit;
  let s = isEn() ? t.en : t.fa;
  if (isEn()) {
    s = s.replace(/^(Software\s+)?(Engineering\s+)?/i, '')
         .replace(/^(Requirements|Testing|Test|Maintenance|Operations|Construction|Design|Architecture|Quality|Security|Process)\s+/i, '');
  } else {
    s = s.replace(/^(مبانی|ابزارهای|فعالیت‌های|فرایندهای|فنون|مسائل کلیدی)\s+/, '')
         .replace(/^(نیازمندی‌های|تست|نگهداری|عملیات|ساخت|طراحی|معماری|کیفیت|امنیت)\s+/, '');
  }
  return (s.trim() || (isEn() ? t.en : t.fa));
}
function mobKaShort(k) {
  const fa = {
    1:'نیازمندی',2:'معماری',3:'طراحی',4:'ساخت',5:'تست',6:'عملیات',7:'نگهداری',
    8:'پیکربندی',9:'مدیریت',10:'فرایند',11:'مدل‌ها',12:'کیفیت',13:'امنیت',
    14:'حرفه‌ای',15:'اقتصاد',16:'محاسبات',17:'ریاضی',18:'مهندسی'
  };
  const en = {
    1:'Reqs',2:'Arch',3:'Design',4:'Build',5:'Test',6:'Ops',7:'Maint',
    8:'Config',9:'Manage',10:'Proc',11:'Models',12:'Qual',13:'Sec',
    14:'Prac',15:'Econ',16:'Comp',17:'Math',18:'Eng'
  };
  return (isEn() ? en : fa)[k.ch] || (isEn() ? k.enShort : k.short);
}
function foundShort(k) { return mobKaShort(k); }
function kaLabelHtml(k, primary, secondary) {
  const ink = plaqueInk(k.color);
  // Clay plaques stay compact: short name only (no bilingual secondary)
  const name = mobKaShort(k);
  return `<span class="num" style="background:${k.css}">${num(k.ch)}</span><span class="tx"><b style="color:${ink.letter}">${name}</b></span>`;
}
function topicLabelHtml(k, t, primary, secondary) {
  const ink = plaqueInk(k.color);
  // Prefer short glossary; clamp EN long names
  let name = shortTopicName(t, k);
  return `<span class="num" style="background:${k.css}">${num(t.n)}</span><span class="tx"><b style="color:${ink.letter}">${name}</b></span>`;
}
function foundLabelHtml(k, primary) {
  const ink = plaqueInk(k.color);
  const name = foundShort(k);
  // Compact: number + short name; CSS clamps width
  return `<span class="num" style="background:${k.css}">${num(k.ch)}</span><span class="tx"><b style="color:${ink.letter}">${name}</b></span>`;
}

function hexCss(n) {
  const h = (typeof n === 'number' ? n : 0xf27a5e) >>> 0;
  return '#' + h.toString(16).padStart(6, '0');
}
function plaqueInk(nodeHex) {
  const c = pickPlaqueColors(nodeHex);
  return {
    plaque: hexCss(c.plaque),
    letter: hexCss(c.letter),
    edge: hexCss(c.edge),
    scheme: c.scheme,
    contrast: c.contrast,
    node: hexCss(typeof nodeHex === 'number' ? nodeHex : 0xf27a5e),
  };
}
function applyPlaqueVars(el, nodeHex) {
  const ink = plaqueInk(nodeHex);
  el.style.setProperty('--pl', ink.plaque);
  el.style.setProperty('--ink-pl', ink.letter);
  // Soft warm edge — never the deep letter hue (that looked like a sticker border)
  el.style.setProperty('--edge-pl', 'rgba(160,130,100,.30)');
  el.style.setProperty('--node-pl', ink.node);
  el.dataset.scheme = ink.scheme;
  el.dataset.contrast = ink.contrast;
  return ink;
}
function centerLabelHtml(title, sub, nodeHex, numTxt) {
  const ink = plaqueInk(nodeHex);
  const numPart = numTxt != null
    ? `<span class="num big" style="background:${ink.node}">${numTxt}</span>`
    : '';
  return `${numPart}<span class="ttl" style="color:${ink.letter}">${title}</span>`
    + (sub && !IS_MOBILE ? `<span class="en">${sub}</span>` : '');
}
/* ---- mobile caption / legend / hint ---- */
let hintHidden = false, previewNode = null, previewAt = 0;
function hideHint(permanent = false) {
  const hint = document.getElementById('hintbar');
  if (!hint) return;
  hint.classList.add('gone');
  if (permanent) hintHidden = true;
}
function showCaption(title, color, numTxt) {
  const cap = document.getElementById('caption');
  if (!cap) return;
  const n = cap.querySelector('.cap-num');
  const t = cap.querySelector('.cap-name');
  if (n) {
    n.textContent = numTxt || '';
    n.style.background = color || '#f27a5e';
    n.style.display = numTxt ? '' : 'none';
  }
  if (t) t.textContent = title || '';
  cap.classList.toggle('show', !!title);
  if (title) hideHint(true);
}
function clearCaption() {
  const cap = document.getElementById('caption');
  if (cap) cap.classList.remove('show');
}
function nodeCaption(n) {
  if (!n || !n.userData) return null;
  const u = n.userData;
  if (u.kind === 'ka' || u.kind === 'found') {
    const k = KAS[u.ka]; if (!k) return null;
    return { title: isEn() ? k.en : k.fa, color: k.css, num: num(k.ch) };
  }
  if (u.kind === 'topic') {
    const k = KAS[u.ka]; const t = k && k.topics[u.ti]; if (!t) return null;
    return { title: isEn() ? t.en : t.fa, color: k.css, num: num(t.n) };
  }
  if (u.kind === 'core' || u.kind === 'center') {
    if (u.kind === 'core') return { title: isEn() ? D.root.en : D.root.fa, color: '#f27a5e', num: '' };
    const k = KAS[view && view.ka]; if (!k) return null;
    return { title: isEn() ? k.en : k.fa, color: k.css, num: num(k.ch) };
  }
  return null;
}
function rebuildLegend() {
  const list = document.getElementById('legendList');
  if (!list) return;
  const items = KAS.map((k, i) => {
    const name = isEn() ? k.en : k.fa;
    const tag = k.foundation ? (isEn() ? 'Foundation' : 'پایه') : '';
    return `<button type="button" class="leg-item" data-ka="${i}" style="--c:${k.css}"><span class="num" style="background:${k.css}">${num(k.ch)}</span><span class="leg-tx"><b>${name}</b>${tag ? `<i>${tag}</i>` : ''}</span></button>`;
  }).join('');
  list.innerHTML = items;
  list.querySelectorAll('[data-ka]').forEach(b => {
    b.onclick = () => {
      closeLegend();
      if (!busy) nav({ ka: +b.dataset.ka, p: null });
    };
  });
}
function openLegend() {
  rebuildLegend();
  document.body.classList.add('legend-open');
  const sheet = document.getElementById('legendSheet');
  if (sheet) sheet.setAttribute('aria-hidden', 'false');
  hideHint(true);
}
function closeLegend() {
  document.body.classList.remove('legend-open');
  const sheet = document.getElementById('legendSheet');
  if (sheet) sheet.setAttribute('aria-hidden', 'true');
}
function toggleLegend() {
  if (document.body.classList.contains('legend-open')) closeLegend();
  else openLegend();
}
function hitProxy(radius, pickNode) {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 8, 6),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  );
  m.userData.pick = pickNode;
  m.userData.isHit = true;
  // Keep object.visible true so Raycaster can hit it; opacity 0 keeps it invisible.
  pickables.push(m);
  return m;
}

function makeLink(from, to, color, group) {
  const mid = from.clone().lerp(to, 0.5); mid.y += 1.1;
  const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.022, 6, false),
    new THREE.MeshStandardMaterial({ color, roughness: 0.7, transparent: true, opacity: 0.55 }));
  group.add(tube);
  const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), new THREE.MeshBasicMaterial({ color: shade(color, 0.15) }));
  group.add(pulse);
  return { curve, tube, pulse, off: Math.random() };
}

function ringPos(i, n, rx, rz, y = 0) {
  // Seam gap at far-back so closing pair (KA1↔KA15) isn't perspective-stacked
  const seam = n >= 12 ? 0.78 : 0.0;
  const span = Math.PI * 2 - seam;
  const a = -Math.PI / 2 + seam * 0.5 + ((i + 0.5) / n) * span;
  return new THREE.Vector3(Math.cos(a) * rx, y, Math.sin(a) * rz);
}

function layout() {
  const asp = innerWidth / innerHeight;
  // Portrait: tall-but-fit ellipse; room for on-icon captions + foundations arc
  if (asp < 0.8) return { rx: 7.65, rz: 7.95, trx: 5.15, trz: 6.35, portrait: true };
  return { rx: 9.2, rz: 6.8, trx: 7.7, trz: 5.8, portrait: false };
}

function buildRoot() {
  const g = new THREE.Group(); scene.add(g);
  const L = layout();
  const center = new THREE.Group();
  const icon = makeIcon(iconForRoot(), 0xf27a5e, IS_MOBILE ? 2.45 : 2.45);
  icon.position.y = 0.35; center.add(icon);
  icon.userData.restY = icon.position.y;
  const ringR = IS_MOBILE ? 1.35 : 1.90;
  const t1 = new THREE.Mesh(new THREE.TorusGeometry(ringR, 0.09, 24, 120), clay(0xe7ad3f)); t1.rotation.x = Math.PI / 2.4; t1.position.y = 0.35; t1.castShadow = true; center.add(t1);
  const t2 = new THREE.Mesh(new THREE.TorusGeometry(ringR + 0.3, 0.06, 24, 140), clay(0x9c4f96)); t2.rotation.x = Math.PI / 1.8; t2.rotation.y = 0.5; t2.position.y = 0.35; t2.castShadow = true; center.add(t2);
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 16), clay(0x2fa36b)); orb.castShadow = true; center.add(orb);
  center.userData = { spin: [t1, t2], orb, mesh: icon, kind: 'core', color: 0xf27a5e };
  const titleFa = D.root.fa, titleEn = D.root.en;
  // Full center title (FA+EN) — bigger bold plaque on the core planet
  const rootTitle = isEn() ? titleEn : titleFa;
  const rootSub = isEn() ? titleFa : titleEn;
  const rootScale = IS_MOBILE ? 2.70 : 2.50;
  if (USE_CSS2D_FALLBACK) {
    const ry = roofLabelY(icon, rootScale, 'core');
    const lb = makeLabel(
      centerLabelHtml(rootTitle, null, 0xf27a5e, null),
      'center clay on-icon rooftop',
      () => onCenter(),
      'on',
      0xf27a5e
    );
    lb.position.set(0, ry, 0);
    center.add(lb);
    lb.element._node = center;
    center.userData.label = lb;
    center.userData.swayLabel = lb;
  } else {
    attachEmbossPlaque(center, icon, {
      iconScale: rootScale,
      primary: rootTitle,
      nodeHex: 0xf27a5e,
      worldH: IS_MOBILE ? 1.05 : 1.00,
      maxWorldW: IS_MOBILE ? 2.70 : 3.20,
      localY: 1.18,
      localZ: 0.55,
      dualFace: false,
      billboardY: true,
      counterTilt: false,
      bold: true,
    });
  }
  g.add(center);
  const hp = hitProxy(IS_MOBILE ? 1.85 : 1.55, center); hp.position.y = 0.45; center.add(hp);

  const nodes = [], links = [];
  const main = KAS.filter(k => !k.foundation);
  main.forEach((k, i) => {
    const p = ringPos(i, main.length, L.rx, L.rz);
    const n = new THREE.Group();
    const ic = makeIcon(iconForKA(k.ch), k.color, IS_MOBILE ? 2.10 : 1.85);
    ic.position.y = 0.45; n.add(ic);
    ic.userData.restY = ic.position.y;
    n.position.copy(p);
    n.userData = { kind: 'ka', ka: KAS.indexOf(k), mesh: ic, color: k.color, home: p.clone(), phase: i * 0.7 };
    const primary = IS_MOBILE ? mobKaShort(k) : (isEn() ? k.enShort : k.short);
    const kaScale = IS_MOBILE ? 2.10 : 1.85;
    if (USE_CSS2D_FALLBACK) {
      const secondary = isEn() ? k.short : k.enShort;
      const ry = roofLabelY(ic, kaScale, 'ka');
      const cls = 'ka clay on-icon rooftop';
      const lb = makeLabel(kaLabelHtml(k, primary, secondary), cls, () => onNode(n), 'on', k.color);
      // Mild tangential stagger + tiny outward radial (declutter finishes ≥4px gaps)
      const nMain = main.length;
      const isSeam = (i === 0 || i === nMain - 1);
      const tang = (i % 2 === 0 ? 0.14 : -0.14) + (i === 0 ? 0.10 : (i === nMain - 1 ? -0.10 : 0));
      const len = Math.hypot(p.x, p.z) || 1;
      const out = (IS_MOBILE ? 0.18 : 0.10) + (isSeam ? (IS_MOBILE ? 0.16 : 0.10) : 0);
      const tx = (-p.z / len) * tang + (p.x / len) * out;
      const tz = (p.x / len) * tang + (p.z / len) * out;
      lb.position.set(tx, ry, tz); n.add(lb); lb.element._node = n; n.userData.label = lb;
    } else {
      attachEmbossPlaque(n, ic, {
        iconScale: kaScale,
        primary,
        num: num(k.ch),
        nodeHex: k.color,
        worldH: IS_MOBILE ? 0.72 : 0.58,
        maxWorldW: IS_MOBILE ? 2.05 : 1.90,
        localY: 0.55,
        localZ: 0.55,
        dualFace: false,
        billboardY: true,
        bold: false,
      });
    }
    g.add(n); nodes.push(n);
    const h = hitProxy(IS_MOBILE ? 1.15 : 0.95, n); h.position.y = 0.45; n.add(h);
    links.push(makeLink(new THREE.Vector3(0, -0.2, 0), p.clone().setY(-0.1), k.color, g));
  });
  // Foundations: bottom arc in portrait (clear of KA ring + chrome); desktop side/front cluster
  const fnd = KAS.filter(k => k.foundation);
  fnd.forEach((k, i) => {
    let p;
    if (L.portrait) {
      const slots = [
        new THREE.Vector3(-5.15, 0.05, L.rz + 2.55),
        new THREE.Vector3(0.0, 0.05, L.rz + 3.70),
        new THREE.Vector3(5.15, 0.05, L.rz + 2.55),
      ];
      p = slots[i] ? slots[i].clone() : new THREE.Vector3((i - 1) * 3.4, 0.05, L.rz + 1.7);
    } else {
      // Desktop: sides + front. Short height: all three on sides (avoid footer clash).
      const short = (typeof window !== 'undefined' && window.innerHeight < 700);
      const slots = short ? [
        // Far side columns — clear of KA ring on short landscape
        new THREE.Vector3(-9.2, 0.12, -1.4),
        new THREE.Vector3(-9.2, 0.12, 5.6),
        new THREE.Vector3(9.2, 0.12, 2.1),
      ] : [
        new THREE.Vector3(-7.8, -0.05, 5.1),
        new THREE.Vector3(0.0, -0.05, 7.2),
        new THREE.Vector3(7.8, -0.05, 5.1),
      ];
      p = slots[i] ? slots[i].clone() : new THREE.Vector3((i - 1) * 5.0, -0.25, -1.5);
    }
    const n = new THREE.Group();
    const ic = makeIcon(iconForKA(k.ch), k.color, IS_MOBILE ? 1.72 : 1.35);
    ic.position.y = 0.32; n.add(ic);
    ic.userData.restY = ic.position.y;
    n.position.copy(p);
    n.userData = { kind: 'found', ka: KAS.indexOf(k), mesh: ic, color: k.color, home: p.clone(), phase: i * 1.3 };
    const primary = foundShort(k);
    const fScale = IS_MOBILE ? 1.72 : 1.35;
    if (USE_CSS2D_FALLBACK) {
      const ry = roofLabelY(ic, fScale, 'found');
      const lb = makeLabel(foundLabelHtml(k, primary), 'found clay on-icon rooftop found-compact', () => onNode(n), 'on', k.color);
      lb.position.set(0, ry, 0); n.add(lb); lb.element._node = n; n.userData.label = lb;
    } else {
      attachEmbossPlaque(n, ic, {
        iconScale: fScale,
        primary,
        num: num(k.ch),
        nodeHex: k.color,
        worldH: IS_MOBILE ? 0.68 : 0.55,
        maxWorldW: IS_MOBILE ? 1.95 : 1.80,
        localY: 0.48,
        localZ: 0.55,
        dualFace: false,
        billboardY: true,
        bold: false,
      });
    }
    g.add(n); nodes.push(n);
    const h = hitProxy(IS_MOBILE ? 0.9 : 0.75, n); h.position.y = 0.28; n.add(h);
  });
  const extra = [];
  return { group: g, center, nodes, links, level: 0, ka: null, extra };
}

function buildKA(ki) {
  const k = KAS[ki];
  const g = new THREE.Group(); scene.add(g);
  const L = layout();
  const center = new THREE.Group();
  const ic = makeIcon(iconForKA(k.ch), k.color, IS_MOBILE ? 2.20 : 2.15);
  ic.position.y = 0.4; center.add(ic);
  ic.userData.restY = ic.position.y;
  const ringR = IS_MOBILE ? 1.22 : 1.78;
  const t1 = new THREE.Mesh(new THREE.TorusGeometry(ringR, 0.07, 20, 120), clay(shade(k.color, 0.22))); t1.rotation.x = Math.PI / 2.2; t1.position.y = 0.2; t1.castShadow = true; center.add(t1);
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 16), clay(shade(k.color, -0.18))); orb.castShadow = true; center.add(orb);
  center.userData = { spin: [t1], orb, mesh: ic, kind: 'center', color: k.color };
  const title = isEn()
    ? (IS_MOBILE ? mobKaShort(k) : k.en)
    : (IS_MOBILE ? mobKaShort(k) : k.fa);
  const sub = isEn() ? k.fa : k.en;
  const kaIconScale = IS_MOBILE ? 2.20 : 2.15;
  if (USE_CSS2D_FALLBACK) {
    const ry = roofLabelY(ic, kaIconScale, 'center');
    const lb = makeLabel(centerLabelHtml(title, null, k.color, num(k.ch)), 'center clay on-icon rooftop', () => onCenter(), 'on', k.color);
    lb.position.set(0, ry, 0); center.add(lb); lb.element._node = center; center.userData.label = lb;
    center.userData.swayLabel = lb;
  } else {
    attachEmbossPlaque(center, ic, {
      iconScale: kaIconScale,
      primary: title,
      num: num(k.ch),
      nodeHex: k.color,
      worldH: IS_MOBILE ? 0.98 : 1.00,
      maxWorldW: IS_MOBILE ? 2.55 : 3.00,
      localY: 1.10,
      localZ: 0.55,
      dualFace: false,
      billboardY: true,
      counterTilt: false,
      bold: true,
    });
  }
  g.add(center);
  const hpc = hitProxy(IS_MOBILE ? 1.55 : 1.35, center); hpc.position.y = 0.35; center.add(hpc);
  const nodes = [], links = [];
  const n = k.topics.length;
  let rx, rz;
  if (L.portrait) {
    if (n >= 12) { rx = 4.65; rz = 6.05; }
    else if (n >= 9) { rx = 4.25; rz = 5.45; }
    else if (n >= 7) { rx = 4.00; rz = 4.95; }
    else { rx = 3.85; rz = 4.50; }
  } else {
    rx = L.trx + (n > 8 ? 0.6 : 0) + (n > 10 ? 0.5 : 0);
    rz = L.trz + (n > 8 ? 0.5 : 0) + (n > 10 ? 0.4 : 0);
  }
  k.topics.forEach((t, i) => {
    const p = ringPos(i, n, rx, rz);
    const nd = new THREE.Group();
    const col = shade(k.color, (i % 3 - 1) * 0.08);
    const hex = col.getHex();
    const sm = makeIcon(iconForTopic(k.ch, t.n), hex, IS_MOBILE ? 1.95 : 1.70);
    sm.position.y = 0.42; nd.add(sm);
    sm.userData.restY = sm.position.y;
    const halo = new THREE.Mesh(new THREE.TorusGeometry(IS_MOBILE ? 0.72 : 0.78, 0.035, 12, 48), clay(shade(k.color, 0.25))); halo.rotation.x = Math.PI / 2; halo.position.y = -0.22; nd.add(halo);
    nd.position.copy(p);
    nd.userData = { kind: 'topic', ka: ki, ti: i, mesh: sm, color: hex, home: p.clone(), phase: i * 0.9 };
    const primary = IS_MOBILE ? shortTopicName(t, k) : (isEn() ? t.en : t.fa);
    const tScale = IS_MOBILE ? 1.95 : 1.70;
    if (USE_CSS2D_FALLBACK) {
      const secondary = isEn() ? t.fa : t.en;
      const ry = roofLabelY(sm, tScale, 'topic');
      const cls = 'topic clay on-icon rooftop';
      const lb = makeLabel(topicLabelHtml(k, t, primary, secondary), cls, () => onNode(nd), 'on', hex);
      const tang = (n >= 10 ? 0.05 : 0) * (i % 2 === 0 ? 1 : -1);
      const len = Math.hypot(p.x, p.z) || 1;
      const tx = (-p.z / len) * tang, tz = (p.x / len) * tang;
      lb.position.set(tx, ry, tz); nd.add(lb); lb.element._node = nd; nd.userData.label = lb;
    } else {
      attachEmbossPlaque(nd, sm, {
        iconScale: tScale,
        primary,
        num: num(t.n),
        nodeHex: hex,
        worldH: IS_MOBILE ? (n >= 12 ? 0.66 : 0.72) : 0.58,
        maxWorldW: IS_MOBILE ? (n >= 12 ? 1.90 : 2.10) : 1.95,
        localY: 0.50,
        localZ: 0.55,
        dualFace: false,
        billboardY: true,
        bold: false,
      });
    }
    g.add(nd); nodes.push(nd);
    const h = hitProxy(IS_MOBILE ? 1.05 : 0.9, nd); h.position.y = 0.4; nd.add(h);
    links.push(makeLink(new THREE.Vector3(0, 0, 0), p.clone().setY(-0.05), k.color, g));
  });
  return { group: g, center, nodes, links, level: 1, ka: ki, extra: [] };
}

function disposeView(v) {
  if (!v) return;
  const seenTex = new Set();
  const seenGeo = new Set();
  v.group.traverse(o => {
    if (o.isCSS2DObject) o.element.remove();
    const ud = o.userData || {};
    if (ud.isCenterSignFace || ud.isPlaqueFace || ud.isPlaqueBody) {
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const mat of mats) {
          for (const key of ['map', 'normalMap', 'bumpMap']) {
            const tex = mat[key];
            if (tex && !seenTex.has(tex)) { seenTex.add(tex); tex.dispose(); }
          }
          mat.dispose();
        }
      }
      if (o.geometry && !seenGeo.has(o.geometry) && !ud.isPlaqueBody) {
        // plaque body geo is shared via cache — skip dispose for body
        seenGeo.add(o.geometry); o.geometry.dispose();
      } else if (o.geometry && ud.isPlaqueFace && !seenGeo.has(o.geometry)) {
        seenGeo.add(o.geometry); o.geometry.dispose();
      }
    }
  });
  scene.remove(v.group);
  pickables.length = 0;
}

function setOpacityLabels(v, a) {
  v.group.traverse(o => { if (o.isCSS2DObject) o.element.style.opacity = a; });
  if (v.center) setNodePlaqueOpacity(v.center, a);
  for (const n of (v.nodes || [])) setNodePlaqueOpacity(n, a);
}
function setLinks(v, a) { v.links.forEach(l => { l.tube.material.opacity = 0.55 * a; l.pulse.visible = a > 0.5; }); }

async function enterView(v, fromScale = 0) {
  view = v;
  v.center.scale.setScalar(Math.max(0.001, fromScale));
  v.nodes.forEach(n => { n.scale.setScalar(0.001); n.position.set(0, 0, 0); });
  setOpacityLabels(v, 0); setLinks(v, 0);
  setCenterSignOpacity(v.center, 0);
  (v.extra || []).forEach(e => { if (e && e.element) e.element.style.opacity = 0; });
  const ps = [tween(0.7, k => { v.center.scale.setScalar(lerp(fromScale, 1, k) || 0.001); setCenterSignOpacity(v.center, k); }, ease.back)];
  v.nodes.forEach((n, i) => {
    ps.push(tween(0.75, k => {
      n.position.lerpVectors(new THREE.Vector3(0, 0, 0), n.userData.home, k);
      n.scale.setScalar(Math.max(0.001, k));
      const op = Math.max(0, (k - 0.5) * 2);
      if (n.userData.label && n.userData.label.element) n.userData.label.element.style.opacity = op;
      setNodePlaqueOpacity(n, op);
    }, ease.back, 0.15 + i * 0.045));
  });
  ps.push(tween(0.6, k => {
    setLinks(v, k);
    (v.extra || []).forEach(e => { if (e && e.element) e.element.style.opacity = k; });
  }, ease.out, 0.55));
  await Promise.all(ps);
}

async function leaveView(v, focusNode) {
  if (!v) return;
  const ps = [];
  v.nodes.forEach((n, i) => {
    if (n === focusNode) return;
    const st = n.position.clone(), s0 = n.scale.x;
    ps.push(tween(0.5, k => {
      n.position.lerpVectors(st, focusNode ? st.clone().multiplyScalar(1.5) : new THREE.Vector3(0, 0, 0), k);
      n.scale.setScalar(Math.max(0.001, s0 * (1 - k)));
      const op = 1 - k;
      if (n.userData.label && n.userData.label.element) n.userData.label.element.style.opacity = op;
      setNodePlaqueOpacity(n, op);
    }, ease.in, i * 0.02));
  });
  ps.push(tween(0.5, k => {
    v.center.scale.setScalar(Math.max(0.001, 1 - k));
    setCenterSignOpacity(v.center, Math.max(0, 1 - k * 1.6));
    setLinks(v, 1 - k);
    (v.extra || []).forEach(e => { if (e && e.element) e.element.style.opacity = 1 - k; });
  }, ease.in));
  if (focusNode) {
    const st = focusNode.position.clone();
    if (focusNode.userData.label && focusNode.userData.label.element) focusNode.userData.label.element.style.opacity = 0;
    setNodePlaqueOpacity(focusNode, 0);
    ps.push(tween(0.8, k => {
      focusNode.position.lerpVectors(st, new THREE.Vector3(0, 0.1, 0), k);
      focusNode.position.y += Math.sin(k * Math.PI) * 1.4;
      focusNode.scale.setScalar(lerp(1, 1.9, k));
      focusNode.rotation.y = k * Math.PI;
    }, ease.io));
  }
  await Promise.all(ps);
  disposeView(v);
}

/* ---------------- interaction ---------------- */
const ray = new THREE.Raycaster(), ptr = new THREE.Vector2(-9, -9);
let hovered = null, busy = false;
function tintMesh(obj, on, color) {
  if (!obj) return;
  obj.traverse(o => {
    if (!o.isMesh || !o.material || !o.material.emissive) return;
    if (!o.userData._em0) o.userData._em0 = o.material.emissive.getHex();
    if (on) o.material.emissive.set(shade(color, 0.12)).multiplyScalar(0.28);
    else o.material.emissive.setHex(o.userData._em0);
  });
}
function setHover(n) {
  if (hovered === n) return;
  if (hovered) {
    tintMesh(hovered.userData.mesh, false, hovered.userData.color);
    hovered.userData.label && hovered.userData.label.element.classList.remove('hover');
  }
  hovered = n;
  if (n) {
    tintMesh(n.userData.mesh, true, n.userData.color);
    n.userData.label && n.userData.label.element.classList.add('hover');
  }
  renderer.domElement.style.cursor = n ? 'pointer' : '';
}
function pickAt(clientX, clientY) {
  const r = renderer.domElement.getBoundingClientRect();
  ptr.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ptr, camera);
  ray.params.Points = ray.params.Points || {};
  // Prefer dedicated hit proxies; recursive in case proxies are nested
  let hits = ray.intersectObjects(pickables, true);
  if (!hits.length && view) hits = ray.intersectObjects([view.group], true);
  for (const h of hits) {
    let o = h.object;
    while (o) {
      if (o.userData && o.userData.pick) return o.userData.pick;
      o = o.parent;
    }
  }
  return null;
}
renderer.domElement.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') return; // avoid hover thrash on touch
  setHover(pickAt(e.clientX, e.clientY));
});
let tapSX = 0, tapSY = 0, tapST = 0, tapPid = null, tapMoved = false, dragRotating = false, lastDragX = 0;
renderer.domElement.addEventListener('pointerdown', e => {
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  tapPid = e.pointerId; tapSX = e.clientX; tapSY = e.clientY; tapST = performance.now();
  tapMoved = false; dragRotating = false; lastDragX = e.clientX;
  try { renderer.domElement.setPointerCapture(e.pointerId); } catch (_) {}
  if (IS_MOBILE && view && !busy) {
    const n = pickAt(e.clientX, e.clientY);
    const cap = n && nodeCaption(n);
    if (cap) showCaption(cap.title, cap.color, cap.num);
  }
});
renderer.domElement.addEventListener('pointermove', e => {
  if (tapPid == null || e.pointerId !== tapPid) return;
  const dx = e.clientX - tapSX, dy = e.clientY - tapSY;
  if (dx * dx + dy * dy > 14 * 14) tapMoved = true;
  // Horizontal drag orbits the camera (mobile + desktop canvas drag)
  if (tapMoved && !busy) {
    const ddx = e.clientX - lastDragX;
    lastDragX = e.clientX;
    if (Math.abs(ddx) > 0) {
      dragRotating = true;
      userYaw += ddx * 0.0055;
      if (IS_MOBILE) clearCaption();
    }
  }
});
renderer.domElement.addEventListener('pointerup', e => {
  if (tapPid == null || e.pointerId !== tapPid) return;
  const dt = performance.now() - tapST;
  const wasTap = !tapMoved && !dragRotating && dt <= 450;
  const wasDrag = dragRotating;
  tapPid = null; dragRotating = false;
  try { renderer.domElement.releasePointerCapture(e.pointerId); } catch (_) {}
  if (wasDrag) {
    markLayoutDirty();
    scheduleLabelRelayout([0, 200, 500]);
    if (IS_MOBILE) clearCaption();
    return;
  } // orbit only — no navigate
  if (!wasTap || busy || !view) { if (IS_MOBILE) clearCaption(); return; }
  const n = pickAt(e.clientX, e.clientY);
  if (!n) { if (IS_MOBILE) clearCaption(); return; }
  e.preventDefault();
  hideHint(true);
  if (n === view.center) onCenter(); else onNode(n);
});
renderer.domElement.addEventListener('pointercancel', () => { tapPid = null; if (IS_MOBILE) clearCaption(); });
renderer.domElement.addEventListener('click', e => { /* swallow; taps handled on pointerup */ e.preventDefault(); });

function onCenter() { if (busy) return; nav(view.level === 0 ? { ka: null, p: 'about' } : { ka: view.ka, p: 'about' }); }
function onNode(n) {
  if (busy) return;
  const u = n.userData;
  if (u.kind === 'ka' || u.kind === 'found') nav({ ka: u.ka, p: null }, n);
  else if (u.kind === 'topic') nav({ ka: u.ka, p: 't', ti: u.ti });
}

/* ---------------- state / routing ---------------- */
let cur = { ka: null, p: null };
const enc = s => s.ka == null ? (s.p === 'about' ? '#/about' : '#/') : `#/ka/${KAS[s.ka].ch}` + (s.p === 'about' ? '/about' : s.p === 't' ? `/t/${s.ti + 1}` : '');
function dec(h) {
  const m = (h || '').match(/^#\/(?:(about)|ka\/(\d+)(?:\/(about)|\/t\/(\d+))?)?$/);
  if (!m) return { ka: null, p: null };
  if (m[1]) return { ka: null, p: 'about' };
  if (!m[2]) return { ka: null, p: null };
  const ki = KAS.findIndex(k => k.ch == m[2]); if (ki < 0) return { ka: null, p: null };
  if (m[3]) return { ka: ki, p: 'about' };
  if (m[4]) { const ti = +m[4] - 1; if (KAS[ki].topics[ti]) return { ka: ki, p: 't', ti }; }
  return { ka: ki, p: null };
}
const parentOf = s => s.p ? { ka: s.ka, p: null } : (s.ka != null ? { ka: null, p: null } : null);

async function nav(s, focus, push = true) {
  if (push) history.pushState({ d: (history.state && history.state.d || 0) + 1 }, '', enc(s));
  await apply(s, focus);
}
window.__nav = (h) => nav(dec(h));
window.__navKA = (ch) => nav({ ka: KAS.findIndex(k => k.ch === ch), p: null });
window.__setYaw = (y) => { userYaw = y; };
window.__getYaw = () => userYaw;
async function apply(s, focus) {
  busy = true;
  clearCaption();
  closeLegend();
  hideHint(true);
  const prev = cur; cur = s;
  if (prev.ka !== s.ka) {
    if (prev.p) await closePanel();
    if (s.ka == null) { await leaveView(view, null); setCam(0); await enterView(buildRoot(), 0); }
    else {
      const fromRing = focus && view && view.level === 0;
      await leaveView(view, fromRing ? focus : null); setCam(1);
      await enterView(buildKA(s.ka), fromRing ? 1 : 0);
    }
    markLayoutDirty();
    scheduleLabelRelayout([0, 150, 450, 900]);
  }
  updateChrome();
  if (s.p) await openPanel(s); else if (prev.p) await closePanel();
  busy = false;
}
window.addEventListener('popstate', () => { if (!busy) apply(dec(location.hash)); else setTimeout(() => apply(dec(location.hash)), 900); });
function goBack() {
  if (glossOpen()) { closeGloss(); return; }
  if (busy) return;
  const par = parentOf(cur); if (!par) return;
  if (history.state && history.state.d > 0) history.back();
  else { history.replaceState({ d: 0 }, '', enc(par)); apply(par); }
}
window.__back = goBack;
document.addEventListener('keydown', e => {
  if (!(e.key === 'Escape' || (e.key === 'Backspace' && !/input|textarea/i.test(e.target.tagName)))) return;
  if (glossOpen()) {
    if (e.key === 'Escape' && glossStack.length > 1) glossPop();
    else closeGloss();
    e.preventDefault();
    return;
  }
  goBack();
});

/* ---------------- camera ---------------- */
let camLvl = 0;
function setCam(l) { camLvl = l; userYaw = 0; }
let viewOff = 0, viewOffTarget = 0;
/* Caption / fit stability: recompute only on layout events, not every frame */
let fitDirty = true;
let fitCached = { dist: null, ty: null };
let labelsDirty = true;
let labelsSettled = false;
let _plaqueRefreshAcc = 0;
const _labelRelayoutTimers = [];
function markFitDirty() { fitDirty = true; }
function markLabelsDirty() { labelsDirty = true; labelsSettled = false; }
window.__markLabelsDirty = markLabelsDirty;
function markLayoutDirty() { markFitDirty(); markLabelsDirty(); }
function scheduleLabelRelayout(delays = [0, 120, 400, 800]) {
  for (const t of _labelRelayoutTimers) clearTimeout(t);
  _labelRelayoutTimers.length = 0;
  for (const ms of delays) {
    _labelRelayoutTimers.push(setTimeout(() => { markLayoutDirty(); }, ms));
  }
}
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h); labelR.setSize(w, h);
  camera.aspect = w / h;
  const asp = w / h;
  camera.fov = asp < 0.8 ? 46 : 36;
  camera.updateProjectionMatrix();
  markLayoutDirty();
  scheduleLabelRelayout();
}
window.addEventListener('resize', () => { resize(); });
const pointerPar = new THREE.Vector2();
const pointerParSmooth = new THREE.Vector2();
let pointerParAt = 0;
window.addEventListener('pointermove', e => {
  pointerPar.set(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5);
  pointerParAt = performance.now();
});

function safeArea() {
  const W = innerWidth, H = innerHeight;
  let top = 8, bot = H - 8;
  if (IS_MOBILE) {
    const hdr = document.querySelector('header.top');
    const credit = document.querySelector('footer.credit');
    const hint = document.getElementById('hintbar');
    // Prefer crumbs / brand row bottom; clamp so we don't swallow half the viewport
    const crumbs = document.getElementById('crumbs');
    if (crumbs) {
      const r = crumbs.getBoundingClientRect();
      if (r.height > 0 && r.bottom > 0) top = Math.max(top, r.bottom + 12);
    } else if (hdr) {
      const r = hdr.getBoundingClientRect();
      if (r.height > 0) top = Math.min(r.bottom + 12, H * 0.22);
    }
    if (hdr) {
      const r = hdr.getBoundingClientRect();
      // Some layouts stretch header; never reserve more than 22% of height
      const capped = Math.min(Math.max(r.bottom, top), H * 0.22);
      top = Math.max(top > 8 ? Math.min(top, H * 0.22) : capped, 48);
    }
    let botY = H;
    // Reserve hint + credit even when opacity is animating (layout still occupies space)
    if (hint) {
      const s = getComputedStyle(hint);
      if (s.display !== 'none') {
        const r = hint.getBoundingClientRect();
        if (r.height > 0) botY = Math.min(botY, r.top);
        else botY = Math.min(botY, H - 56); // fallback band for hint+credit
      }
    }
    if (credit) {
      const r = credit.getBoundingClientRect();
      if (r.height > 0) botY = Math.min(botY, r.top);
      else botY = Math.min(botY, H - 28);
    }
    bot = botY - 12;
  }
  return { top, bot, left: 8, right: W - 8, W, H };
}

const _fitV = new THREE.Vector3();
const _fitPts = [];
function collectFitPoints() {
  _fitPts.length = 0;
  if (!view) return _fitPts;
  const pushNode = (n, isCenter) => {
    if (!n) return;
    const mesh = n.userData && n.userData.mesh;
    if (mesh) {
      mesh.getWorldPosition(_fitV);
      // Prefer rest Y so icon idle bob does not chase the camera fit
      if (mesh.userData && mesh.userData.restY != null && mesh.parent) {
        _fitV.set(mesh.position.x, mesh.userData.restY, mesh.position.z);
        mesh.parent.localToWorld(_fitV);
      }
      const s = (mesh.scale && mesh.scale.x) || 1;
      _fitPts.push(_fitV.x, _fitV.y - 0.35 * s, _fitV.z);
      _fitPts.push(_fitV.x, _fitV.y + 0.95 * s, _fitV.z);
      // side extent so left/right icons stay in frame
      _fitPts.push(_fitV.x - 0.55 * s, _fitV.y + 0.4 * s, _fitV.z);
      _fitPts.push(_fitV.x + 0.55 * s, _fitV.y + 0.4 * s, _fitV.z);
    } else {
      n.getWorldPosition(_fitV);
      _fitPts.push(_fitV.x, _fitV.y, _fitV.z);
    }
    const lb = n.userData && n.userData.label;
    if (lb && lb.element && lb.element.style.display !== 'none' && !lb.element.classList.contains('mob-hide')) {
      lb.getWorldPosition(_fitV);
      // rooftop pill sits above; pad in screen space later
      _fitPts.push(_fitV.x, _fitV.y, _fitV.z);
    }
    const sign = n.userData && n.userData.sign;
    if (sign) {
      sign.getWorldPosition(_fitV);
      const sh = (sign.userData.signH || 0.4) * 0.55;
      const sw = (sign.userData.signW || 1.2) * 0.55;
      _fitPts.push(_fitV.x, _fitV.y + sh, _fitV.z);
      _fitPts.push(_fitV.x - sw, _fitV.y, _fitV.z);
      _fitPts.push(_fitV.x + sw, _fitV.y, _fitV.z);
    }
  };
  pushNode(view.center, true);
  for (const n of view.nodes) pushNode(n, false);
  return _fitPts;
}

function applyCamPose(dist, pitch, yaw, ty) {
  camera.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, Math.sin(pitch) * dist, Math.cos(yaw) * Math.cos(pitch) * dist);
  camTarget.set(0, ty, 0);
  camera.lookAt(camTarget);
  camera.updateMatrixWorld(true);
}

function projectFitBounds(padTop, padSide) {
  const W = innerWidth, H = innerHeight;
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9, n = 0;
  const pts = _fitPts;
  for (let i = 0; i < pts.length; i += 3) {
    _fitV.set(pts[i], pts[i + 1], pts[i + 2]).project(camera);
    if (_fitV.z > 1.05) continue;
    const x = (_fitV.x * 0.5 + 0.5) * W;
    const y = (-_fitV.y * 0.5 + 0.5) * H;
    minX = Math.min(minX, x - padSide);
    maxX = Math.max(maxX, x + padSide);
    minY = Math.min(minY, y - padTop);
    maxY = Math.max(maxY, y + 36);
    n++;
  }
  if (!n) return null;
  return { minX, maxX, minY, maxY };
}

function fitCamToSafe(baseDist, pitch, yaw, baseTy) {
  const safe = safeArea();
  if (!view || !IS_MOBILE || safe.bot - safe.top < 120) {
    return { dist: baseDist, ty: baseTy, safe };
  }
  // Ensure world matrices for nodes are current before measuring
  if (view.group) view.group.updateMatrixWorld(true);
  collectFitPoints();
  const padTop = 30;  // rooftop caption height
  // Mild side pad; final 8px plaque margin comes from screen-space clamp
  const padSide = IS_MOBILE ? 56 : 50;

  // Probe px-per-ty at the working distance
  const probeD = baseDist;
  applyCamPose(probeD, pitch, yaw, baseTy);
  const cA = new THREE.Vector3(0, 0, 0).project(camera);
  const yA = (-cA.y * 0.5 + 0.5) * innerHeight;
  applyCamPose(probeD, pitch, yaw, baseTy + 0.5);
  const cB = new THREE.Vector3(0, 0, 0).project(camera);
  const yB = (-cB.y * 0.5 + 0.5) * innerHeight;
  const pxPerTy = (yB - yA) / 0.5; // screen-y change when ty += 0.5

  let lo = baseDist * 0.9, hi = baseDist * (IS_MOBILE ? 1.55 : 2.1);
  let best = { dist: baseDist * 1.12, ty: baseTy };
  for (let it = 0; it < 16; it++) {
    const mid = (lo + hi) * 0.5;
    applyCamPose(mid, pitch, yaw, baseTy);
    let b = projectFitBounds(padTop, padSide);
    if (!b) { hi = mid; continue; }
    const contentMid = (b.minY + b.maxY) * 0.5;
    const safeMid = (safe.top + safe.bot) * 0.5;
    let ty = baseTy;
    if (Math.abs(pxPerTy) > 1e-3) ty = baseTy + (safeMid - contentMid) / pxPerTy;
    // Clamp ty so we don't chase extremes
    ty = Math.max(baseTy - 2.5, Math.min(baseTy + 2.5, ty));
    applyCamPose(mid, pitch, yaw, ty);
    b = projectFitBounds(padTop, padSide);
    if (!b) { hi = mid; continue; }
    const fits = b.minY >= safe.top - 1 && b.maxY <= safe.bot + 1
      && b.minX >= safe.left - 2 && b.maxX <= safe.right + 2;
    best = { dist: mid, ty };
    if (fits) hi = mid; // try zoom in (smaller dist)
    else lo = mid;      // zoom out
  }
  // Prefer the larger end if last mid still overflowed
  applyCamPose(best.dist, pitch, yaw, best.ty);
  let b = projectFitBounds(padTop, padSide);
  if (b && (b.minY < safe.top - 2 || b.maxY > safe.bot + 2 || b.minX < safe.left - 4 || b.maxX > safe.right + 4)) {
    best.dist = Math.min(baseDist * (IS_MOBILE ? 1.58 : 2.2), Math.max(best.dist, lo) * 1.04);
    // re-center ty at final dist
    applyCamPose(best.dist, pitch, yaw, baseTy);
    b = projectFitBounds(padTop, padSide);
    if (b && Math.abs(pxPerTy) > 1e-3) {
      const contentMid = (b.minY + b.maxY) * 0.5;
      const safeMid = (safe.top + safe.bot) * 0.5;
      best.ty = Math.max(baseTy - 2.5, Math.min(baseTy + 2.5, baseTy + (safeMid - contentMid) / pxPerTy));
    }
  }
  best.safe = safe;
  return best;
}

function updateCamera(t, dt) {
  const asp = camera.aspect;
  const portrait = asp < 0.8;
  const panelOpen = document.body.classList.contains('panel-open');
  // Base framing; fitCamToSafe zooms/shifts to keep nodes+rooftops inside chrome
  let dist = portrait ? 20.2 : 19.4, pitch = portrait ? 0.86 : 0.48;
  if (camLvl === 1) { dist = portrait ? 17.4 : 17.4; pitch = portrait ? 0.82 : 0.46; }
  if (portrait && panelOpen) { dist *= 1.08; }
  let tyTarget = portrait && panelOpen ? -4.8 : (portrait ? (camLvl === 1 ? -0.35 : -0.15) : 0.6);
  // No auto-yaw at rest. Drag sets userYaw. Desktop parallax eases to 0 when the pointer is idle (no hard cut).
  const parWant = (!IS_MOBILE && (performance.now() - pointerParAt) < 140) ? pointerPar : { x: 0, y: 0 };
  const pk = Math.min(1, dt * 8);
  pointerParSmooth.x += (parWant.x - pointerParSmooth.x) * pk;
  pointerParSmooth.y += (parWant.y - pointerParSmooth.y) * pk;
  if (Math.abs(pointerParSmooth.x) < 0.001) pointerParSmooth.x = 0;
  if (Math.abs(pointerParSmooth.y) < 0.001) pointerParSmooth.y = 0;
  const yaw = userYaw + pointerParSmooth.x * 0.08;
  const pPitch = pitch - pointerParSmooth.y * 0.04;

  let fitDist = dist, fitTy = tyTarget;
  if (IS_MOBILE && portrait && view && !panelOpen) {
    // Fit once per layout/view/resize/drag-end — not every frame (avoids caption chase)
    if (fitDirty || fitCached.dist == null) {
      const fit = fitCamToSafe(dist, pPitch, yaw, tyTarget);
      fitCached = { dist: fit.dist, ty: fit.ty };
      fitDirty = false;
      window.__fit = { dist: fit.dist, ty: fit.ty, safe: fit.safe, base: dist };
    }
    fitDist = fitCached.dist;
    fitTy = fitCached.ty;
  }

  // Deadband: snap when close so captions don't crawl from endless residual lerp
  const kd = Math.min(1, dt * 3.2), kp = Math.min(1, dt * 2.5);
  cam.dist = Math.abs(fitDist - cam.dist) < 0.002 ? fitDist : cam.dist + (fitDist - cam.dist) * kd;
  cam.pitch = Math.abs(pPitch - cam.pitch) < 0.0005 ? pPitch : cam.pitch + (pPitch - cam.pitch) * kp;
  cam.ty = Math.abs(fitTy - cam.ty) < 0.002 ? fitTy : cam.ty + (fitTy - cam.ty) * kd;
  applyCamPose(cam.dist, cam.pitch, yaw, cam.ty);
  window.__cam = { dist: cam.dist, pitch: cam.pitch, yaw, ty: cam.ty, lvl: camLvl };

  viewOffTarget = (!portrait && panelOpen) ? -Math.min(560, innerWidth * 0.42) / 2 : 0;
  viewOff += (viewOffTarget - viewOff) * Math.min(1, dt * 4);
  const w = stage.clientWidth, h = stage.clientHeight;
  if (Math.abs(viewOff) > 0.5) camera.setViewOffset(w, h, -viewOff, 0, w, h); else camera.clearViewOffset();
}

/* ---------------- loop ---------------- */
let last = now();
function frame() {
  const t = now(); const dt = Math.min(0.05, Math.max(0, t - last)); last = t;
  runTweens();
  if (view) {
    const cu = view.center.userData;
    cu.spin.forEach((s, i) => s.rotation.z = t * (0.25 + i * 0.12) * (i % 2 ? -1 : 1));
    cu.orb.position.set(Math.cos(t * 0.8) * 1.75, 0.35 + Math.sin(t * 1.6) * 0.3, Math.sin(t * 0.8) * 1.75);
    const baseY = (cu.mesh.userData.restY != null) ? cu.mesh.userData.restY : (cu.kind === 'core' ? 0.5 : 0.4);
    if (cu.mesh.userData.restY == null) cu.mesh.userData.restY = baseY;
    // Bob + gentle ± yaw sway — 3D center caption is parented to the mesh and turns with it
    cu.mesh.position.y = baseY + Math.sin(t * 1.1) * 0.06;
    const br = cu.mesh.userData.baseRot || { x: -0.32, y: 0.55, z: 0.08 };
    cu.mesh.rotation.set(br.x, br.y + Math.sin(t * 0.45) * 0.38, br.z);
    view.nodes.forEach(n => {
      const u = n.userData;
      if (n.scale.x > 0.98 && n.scale.x < 1.5) {
        const hs = hovered === n ? 1.12 : 1;
        n.scale.setScalar(n.scale.x + (hs - n.scale.x) * Math.min(1, dt * 10));
        // Keep group (and caption) at rest height; bob only the icon mesh
        n.position.y = u.home.y + (hovered === n ? 0.15 : 0);
        if (u.mesh) {
          if (u.mesh.userData.restY == null) u.mesh.userData.restY = u.mesh.position.y;
          const bob = IS_MOBILE ? 0 : Math.sin(t * 1.2 + u.phase) * 0.08;
          u.mesh.position.y = u.mesh.userData.restY + bob;
          const r = u.mesh.userData.baseRot || { x: -0.32, y: 0.55, z: 0.08 };
          u.mesh.rotation.set(r.x, r.y + Math.sin(t * 0.5 + u.phase) * 0.35, r.z);
        }
      }
    });
    view.links.forEach(l => { const k = (t * 0.22 + l.off) % 1; l.curve.getPoint(k, l.pulse.position); });
  }
  const pa = dust.geometry.attributes.position;
  for (let i = 0; i < dustN; i++) pa.array[i * 3 + 1] += Math.sin(t * 0.5 + dustSeed[i]) * 0.0016;
  pa.needsUpdate = true;
  dust.rotation.y = t * 0.012;
  updateCamera(t, dt || 0.016);
  // WebGL: Y-billboard plaques. CSS2D: gentle center plaque sway (±20°) synced to icon yaw.
  if (view) {
    if (!USE_CSS2D_FALLBACK) {
      if (view.center && view.center.userData.sign) billboardPlaqueY(view.center.userData.sign, camera);
      for (const n of view.nodes) {
        if (n.userData && n.userData.sign) billboardPlaqueY(n.userData.sign, camera);
      }
    } else if (view.center && view.center.userData.swayLabel) {
      const mesh = view.center.userData.mesh;
      const el = view.center.userData.swayLabel.element;
      if (mesh && el) {
        let yaw = mesh.rotation.y || 0;
        yaw = ((yaw + Math.PI) % (Math.PI * 2)) - Math.PI;
        const maxDeg = 20;
        const deg = Math.max(-maxDeg, Math.min(maxDeg, yaw * (180 / Math.PI) * 0.55));
        el._swayDeg = deg;
        el.style.setProperty('--sway', deg.toFixed(2) + 'deg');
      }
    }
  }
  declutter(dt);
  renderer.render(scene, camera);
  labelR.render(scene, camera);
  snapLabelPixels();
  applyCenterSway();
}

/** CSS2D overwrites style.transform each frame — re-append rotateY so sway is visible. */
function applyCenterSway() {
  if (!USE_CSS2D_FALLBACK || !view || !view.center || !view.center.userData.swayLabel) return;
  const el = view.center.userData.swayLabel.element;
  if (!el || el._swayDeg == null) return;
  const tr = el.style.transform || '';
  // Strip any prior perspective/rotateY we appended, keep CSS2D translate
  const base = tr
    .replace(/\s*perspective\([^)]*\)\s*/g, ' ')
    .replace(/\s*rotateY\([^)]*\)\s*/g, ' ')
    .trim();
  el.style.transform = base + ' perspective(380px) rotateY(' + el._swayDeg.toFixed(2) + 'deg)';
}

const _tmpV = new THREE.Vector3();

/** Round CSS2D fractional px translates to whole pixels (kills subpixel + backdrop-filter shimmer). */
function snapLabelPixels() {
  const root = labelR && labelR.domElement;
  if (!root) return;
  const kids = root.children;
  for (let i = 0; i < kids.length; i++) {
    const el = kids[i];
    const tr = el.style && el.style.transform;
    if (!tr || tr.indexOf('px') < 0) continue;
    el.style.transform = tr.replace(/translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/g, (_, x, y) =>
      'translate(' + Math.round(+x) + 'px,' + Math.round(+y) + 'px)');
  }
}

function declutter(dt) {
  if (!view) return;
  const margin = 9; // target ≥8px after CSS round / subpixel
  const sa = safeArea();
  const topSafe = sa.top;
  const botSafe = Math.max(8, sa.H - sa.bot);
  const W = sa.W, H = sa.H;
  const labs = view.nodes.map(n => n.userData.label).filter(Boolean);
  if (view.center && view.center.userData.label) labs.push(view.center.userData.label);
  for (const e of (view.extra || [])) labs.push(e);

  if (labelsDirty) {
    for (const o of labs) {
      const el = o && o.element;
      if (!el || el.style.display === 'none') continue;
      el._fade = 1;
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.pointerEvents = 'auto';
    }

    const items = [];
    for (const o of labs) {
      const el = o && o.element;
      if (!el || !el.isConnected || el.style.display === 'none') continue;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      const curDx = el._dx || 0, curDy = el._dy || 0;
      const L0 = r.left - curDx, R0 = r.right - curDx, T0 = r.top - curDy, B0 = r.bottom - curDy;
      let cx = 0, cy = 0;
      if (L0 < margin) cx = margin - L0;
      else if (R0 > W - margin) cx = (W - margin) - R0;
      if (T0 < topSafe) cy = topSafe - T0;
      else if (B0 > H - botSafe) cy = (H - botSafe) - B0;
      const node = el._node;
      const isFound = !!(node && node.userData && node.userData.kind === 'found');
      const isCenter = !!(node && node.userData && (node.userData.kind === 'core' || node.userData.kind === 'center'));
      items.push({ el, plaque: null, node, L0, R0, T0, B0, w: R0 - L0, h: B0 - T0, cx, cy, t: cy, fixed: isCenter, isFound });
    }
    // All 3D embossed plaques (center + ring)
    if (!USE_CSS2D_FALLBACK) pushAllPlaqueObstacles(items, W, H);
    // CSS2D may not have projected yet — retry next frames
    if (USE_CSS2D_FALLBACK && items.length < labs.length) {
      labelsDirty = true;
      labelsSettled = false;
      return;
    }
    items.sort((a, b) => (a.T0 - b.T0) || (a.L0 - b.L0));

    const pad = IS_MOBILE ? (USE_CSS2D_FALLBACK ? 12 : 10) : 10;
    const gapX = 4; // __overlapSign threshold
    const scx = W * 0.5, scy = H * 0.48;
    const maxNudge = IS_MOBILE ? 46 : 50;
    for (let it = 0; it < 72; it++) {
      for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
        const a = items[i], b = items[j];
        const ax0 = a.L0 + a.cx, ax1 = a.R0 + a.cx;
        const bx0 = b.L0 + b.cx, bx1 = b.R0 + b.cx;
        if (ax1 + gapX <= bx0 || bx1 + gapX <= ax0) continue;
        const ay0 = a.T0 + a.t, ay1 = ay0 + a.h;
        const by0 = b.T0 + b.t, by1 = by0 + b.h;
        const ovY = Math.min(ay1, by1) - Math.max(ay0, by0) + pad;
        if (ovY <= 0) continue;
        const ox = Math.min(ax1, bx1) - Math.max(ax0, bx0) + gapX;
        const aCenter = !!(a.node && a.node.userData && (a.node.userData.kind === 'core' || a.node.userData.kind === 'center'));
        const bCenter = !!(b.node && b.node.userData && (b.node.userData.kind === 'core' || b.node.userData.kind === 'center'));
        const pushRadial = (m, mx, my) => {
          if (m.fixed || (m.node && (m.node.userData.kind === 'core' || m.node.userData.kind === 'center'))) return;
          let vx = mx - scx, vy = my - scy;
          const len = Math.hypot(vx, vy) || 1;
          vx /= len; vy /= len;
          const push = Math.min(IS_MOBILE ? 26 : 34, Math.max(8, ox * 0.45 + ovY * 0.25));
          m.cx += vx * push;
          m.t += vy * push * 0.18;
        };
        if (aCenter && !bCenter) {
          pushRadial(b, (bx0 + bx1) * 0.5, (by0 + by1) * 0.5);
          const cMidY = (ay0 + ay1) * 0.5;
          const bMidY = (by0 + by1) * 0.5;
          if (bMidY <= cMidY) b.t -= Math.max(ovY * 0.65, 10);
          else b.t += Math.max(ovY * 0.65, 10);
        } else if (bCenter && !aCenter) {
          pushRadial(a, (ax0 + ax1) * 0.5, (ay0 + ay1) * 0.5);
          const cMidY = (by0 + by1) * 0.5;
          const aMidY = (ay0 + ay1) * 0.5;
          if (aMidY <= cMidY) a.t -= Math.max(ovY * 0.65, 10);
          else a.t += Math.max(ovY * 0.65, 10);
        } else if (a.fixed && !b.fixed) {
          pushRadial(b, (bx0 + bx1) * 0.5, (by0 + by1) * 0.5);
        } else if (b.fixed && !a.fixed) {
          pushRadial(a, (ax0 + ax1) * 0.5, (ay0 + ay1) * 0.5);
        } else if (a.isFound && !b.isFound) {
          const midX = (ax0 + ax1) * 0.5;
          const outward = midX < scx ? -1 : 1;
          a.cx += outward * Math.max(22, ox * 1.0 + 12);
          a.t += Math.max(ovY * 0.9, 12);
          b.t -= Math.min(ovY * 0.3, 10);
        } else if (b.isFound && !a.isFound) {
          const midX = (bx0 + bx1) * 0.5;
          const outward = midX < scx ? -1 : 1;
          b.cx += outward * Math.max(22, ox * 1.0 + 12);
          b.t += Math.max(ovY * 0.9, 12);
          a.t -= Math.min(ovY * 0.3, 10);
        } else {
          const aUnder = !!(a.el && a.el.classList.contains('under'));
          const bUnder = !!(b.el && b.el.classList.contains('under'));
          if (aUnder && !bUnder) { a.t += ovY * 0.35; b.t -= ovY * 0.25; }
          else if (bUnder && !aUnder) { b.t += ovY * 0.35; a.t -= ovY * 0.25; }
          else {
            const mid = ((ax0+ax1)*0.5 + (bx0+bx1)*0.5) * 0.5;
            if ((ax0+ax1)*0.5 < mid) { a.cx -= Math.max(ox*0.8, 11); b.cx += Math.max(ox*0.8, 11); }
            else { a.cx += Math.max(ox*0.8, 11); b.cx -= Math.max(ox*0.8, 11); }
            a.t -= ovY * 0.3; b.t += ovY * 0.3;
          }
          pushRadial(a, (ax0 + ax1) * 0.5, (ay0 + ay1) * 0.5);
          pushRadial(b, (bx0 + bx1) * 0.5, (by0 + by1) * 0.5);
        }
      }
      for (const m of items) {
        if (m.fixed) { m.cx = 0; m.t = 0; continue; }
        const mx = m.isFound ? maxNudge + (IS_MOBILE ? 28 : 56) : maxNudge;
        const maxY = m.isFound ? (IS_MOBILE ? 44 : 64) : (IS_MOBILE ? 34 : 34);
        m.cx = Math.max(-mx, Math.min(mx, m.cx));
        m.t = Math.max(-maxY, Math.min(maxY, m.t));
      }
    }
    // Final polish: ensure ≥5px gap so rounded margins still clear 4px
    const gapT = 5;
    for (let round = 0; round < 8; round++) {
      let moved = 0;
      for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
        const a = items[i], b = items[j];
        if (a.fixed && b.fixed) continue;
        const ax0 = a.L0 + a.cx, ax1 = a.R0 + a.cx;
        const bx0 = b.L0 + b.cx, bx1 = b.R0 + b.cx;
        if (ax1 + gapT <= bx0 || bx1 + gapT <= ax0) continue;
        const ay0 = a.T0 + a.t, ay1 = ay0 + a.h;
        const by0 = b.T0 + b.t, by1 = by0 + b.h;
        const oy = Math.min(ay1, by1) - Math.max(ay0, by0) + gapT;
        if (oy <= 0) continue;
        const ox = Math.min(ax1, bx1) - Math.max(ax0, bx0) + gapT;
        const aFix = a.fixed || (a.node && (a.node.userData.kind === 'core' || a.node.userData.kind === 'center'));
        const bFix = b.fixed || (b.node && (b.node.userData.kind === 'core' || b.node.userData.kind === 'center'));
        const pushY = Math.max(oy * 0.6, 4);
        const pushX = Math.max(ox * 0.6, 4);
        if (aFix && !bFix) {
          if ((by0 + by1) * 0.5 <= (ay0 + ay1) * 0.5) b.t -= pushY; else b.t += pushY;
          b.cx += ((bx0 + bx1) * 0.5 < scx ? -1 : 1) * pushX * 0.5;
          moved++;
        } else if (bFix && !aFix) {
          if ((ay0 + ay1) * 0.5 <= (by0 + by1) * 0.5) a.t -= pushY; else a.t += pushY;
          a.cx += ((ax0 + ax1) * 0.5 < scx ? -1 : 1) * pushX * 0.5;
          moved++;
        } else if (a.isFound !== b.isFound) {
          const f = a.isFound ? a : b, k = a.isFound ? b : a;
          f.t += pushY; k.t -= pushY * 0.35;
          f.cx += (((f.L0 + f.R0) * 0.5 + f.cx) < scx ? -1 : 1) * pushX * 0.7;
          moved++;
        } else if (a.isFound && b.isFound) {
          // Foundations must never stack — prefer large horizontal split + mild Y
          const axm = (ax0 + ax1) * 0.5, bxm = (bx0 + bx1) * 0.5;
          const sepX = Math.max(pushX * 1.35, 10);
          if (axm <= bxm) { a.cx -= sepX; b.cx += sepX; }
          else { a.cx += sepX; b.cx -= sepX; }
          a.t -= pushY * 0.55; b.t += pushY * 0.55;
          moved++;
        } else {
          if ((ax0 + ax1) * 0.5 <= (bx0 + bx1) * 0.5) { a.cx -= pushX; b.cx += pushX; }
          else { a.cx += pushX; b.cx -= pushX; }
          a.t -= pushY * 0.45; b.t += pushY * 0.45;
          moved++;
        }
      }
      for (const m of items) {
        if (m.fixed) { m.cx = 0; m.t = 0; continue; }
        const mx = m.isFound ? maxNudge + (IS_MOBILE ? 40 : 60) : maxNudge + 12;
        const my = m.isFound ? (IS_MOBILE ? 56 : 68) : (IS_MOBILE ? 42 : 38);
        m.cx = Math.max(-mx, Math.min(mx, m.cx));
        m.t = Math.max(-my, Math.min(my, m.t));
        // Keep fully inside viewport during polish (8px margin)
        let L1 = m.L0 + m.cx, R1 = m.R0 + m.cx, T1 = m.T0 + m.t, B1 = m.T0 + m.h + m.t;
        if (L1 < margin) m.cx += margin - L1;
        if (R1 > W - margin) m.cx -= (m.R0 + m.cx) - (W - margin);
        if (T1 < topSafe) m.t += topSafe - T1;
        if (B1 > H - botSafe) m.t -= (m.T0 + m.h + m.t) - (H - botSafe);
      }
      if (!moved) break;
    }

    const leftSafe = Math.max(margin, sa.left || margin);
    const rightSafe = Math.min(W - margin, sa.right != null ? sa.right : (W - margin));
    for (const m of items) {
      let dx = m.cx, dy = m.t;
      if (m.fixed) { dx = 0; dy = 0; }
      else {
        // Soft caps only — viewport clamp below may exceed them to keep plaques on-screen
        const capX = m.isFound ? (IS_MOBILE ? 72 : 100) : (IS_MOBILE ? 64 : 52);
        const capY = m.isFound ? (IS_MOBILE ? 64 : 68) : (IS_MOBILE ? 44 : 38);
        dx = Math.max(-capX, Math.min(capX, dx));
        dy = Math.max(-capY, Math.min(capY, dy));
      }
      // Viewport clamp AFTER nudge — hard requirement: fully inside with 8px margin
      let L1 = m.L0 + dx, R1 = m.R0 + dx, T1 = m.T0 + dy, B1 = m.T0 + m.h + dy;
      if (!m.fixed) {
        if (L1 < leftSafe) dx += leftSafe - L1;
        if (R1 > rightSafe) dx -= (m.R0 + dx) - rightSafe;
        if (T1 < topSafe) dy += topSafe - T1;
        if (B1 > H - botSafe) dy -= (m.T0 + m.h + dy) - (H - botSafe);
        // Re-check after opposing-edge conflict (wide plaque)
        L1 = m.L0 + dx; R1 = m.R0 + dx; T1 = m.T0 + dy; B1 = m.T0 + m.h + dy;
        if (L1 < leftSafe) dx += leftSafe - L1;
        if (R1 > rightSafe) dx -= (m.R0 + dx) - rightSafe;
      }
      if (m.el) {
        let rdx = Math.round(dx), rdy = Math.round(dy);
        // Rounding can leave L at 6.8 when margin=8 — bump away from edges
        if (!m.fixed) {
          if (m.L0 + rdx < leftSafe) rdx += Math.ceil(leftSafe - (m.L0 + rdx));
          if (m.R0 + rdx > rightSafe) rdx -= Math.ceil((m.R0 + rdx) - rightSafe);
          if (m.T0 + rdy < topSafe) rdy += Math.ceil(topSafe - (m.T0 + rdy));
          if (m.T0 + m.h + rdy > H - botSafe) rdy -= Math.ceil((m.T0 + m.h + rdy) - (H - botSafe));
        }
        const nearEdge = (m.L0 + rdx) < leftSafe + 2 || (m.R0 + rdx) > rightSafe - 2
          || (m.T0 + rdy) < topSafe + 2 || (m.T0 + m.h + rdy) > H - botSafe - 2;
        if (m.el._tgtDx == null || nearEdge || Math.hypot(rdx - m.el._tgtDx, rdy - (m.el._tgtDy || 0)) >= 1.5) {
          m.el._tgtDx = rdx;
          m.el._tgtDy = rdy;
        }
      } else if (m.plaque && !m.fixed) {
        // Convert screen nudge → local plaque nudge (approx via projected height)
        const lh = m.plaque.userData.localH || 0.2;
        const pxH = Math.max(8, m.h);
        const toLocal = lh / pxH;
        const nx = dx * toLocal;
        const ny = -dy * toLocal; // screen down → local -Y
        const prevX = m.plaque.userData.nudgeX || 0;
        const prevY = m.plaque.userData.nudgeY || 0;
        const capX = IS_MOBILE ? 1.65 : 1.55;
        const capYLo = IS_MOBILE ? -1.55 : -1.20;
        const capYHi = IS_MOBILE ? 1.55 : 1.35;
        const tgtX = Math.max(-capX, Math.min(capX, nx));
        const tgtY = Math.max(capYLo, Math.min(capYHi, ny));
        // Damped update — avoids plaque jitter
        m.plaque.userData.nudgeX = prevX + (tgtX - prevX) * 0.82;
        m.plaque.userData.nudgeY = prevY + (tgtY - prevY) * 0.82;
      }
    }
    // Snap targets immediately on dirty pass (no lerp lag for QA / settle)
    for (const m of items) {
      if (!m.el || m.el._tgtDx == null) continue;
      m.el._dx = m.el._tgtDx; m.el._dy = m.el._tgtDy;
      m.el.style.marginLeft = m.el._tgtDx + 'px';
      m.el.style.marginTop = m.el._tgtDy + 'px';
    }
    // Final resolve: fade lower-priority plaques that still overlap
    {
      const live = items.filter(m => m.el && m.el.style.display !== 'none' && m.el._fade !== 0);
      const pri = (m) => {
        if (m.fixed || (m.node && (m.node.userData.kind === 'core' || m.node.userData.kind === 'center'))) return 5;
        if (m.isFound) return 4; // never sacrifice foundations
        if (m.node && m.node.userData && m.node.userData.kind === 'ka') return 4; // keep all 15 KAs
        if (m.el.classList.contains('rooftop')) return 3;
        if (m.el.classList.contains('topic')) return 2;
        if (m.el.classList.contains('under')) return 1;
        return 2;
      };
      // Multiple rounds so chained overlaps resolve
      for (let round = 0; round < 4; round++) {
        let faded = 0;
        for (let i = 0; i < live.length; i++) for (let j = i + 1; j < live.length; j++) {
          const a = live[i], b = live[j];
          if (a.el._fade === 0 || b.el._fade === 0) continue;
          const adx = a.el._tgtDx || 0, ady = a.el._tgtDy || 0;
          const bdx = b.el._tgtDx || 0, bdy = b.el._tgtDy || 0;
          const ax0 = a.L0 + adx, ax1 = a.R0 + adx;
          const bx0 = b.L0 + bdx, bx1 = b.R0 + bdx;
          if (ax1 <= bx0 + 1 || bx1 <= ax0 + 1) continue;
          const ay0 = a.T0 + ady, ay1 = ay0 + a.h;
          const by0 = b.T0 + bdy, by1 = by0 + b.h;
          if (Math.min(ay1, by1) - Math.max(ay0, by0) <= 1) continue;
          const pa = pri(a), pb = pri(b);
          // Never fade high-priority (center/found/ka)
          if (pa >= 4 && pb >= 4) continue;
          const loser = pa <= pb ? a : b;
          if (pri(loser) >= 4) continue;
          loser.el._fade = 0;
          loser.el.style.opacity = '0';
          loser.el.style.visibility = 'hidden';
          loser.el.style.pointerEvents = 'none';
          faded++;
        }
        if (!faded) break;
      }
      // Fade plaques that remain clipped after clamp (never foundations or KAs)
      for (const m of live) {
        if (!m.el || m.el._fade === 0 || m.fixed || m.isFound) continue;
        if (m.node && m.node.userData && m.node.userData.kind === 'ka') continue;
        const dx = m.el._tgtDx || 0, dy = m.el._tgtDy || 0;
        const L1 = m.L0 + dx, R1 = m.R0 + dx, T1 = m.T0 + dy, B1 = m.T0 + m.h + dy;
        if (L1 < margin - 1 || R1 > W - margin + 1 || T1 < topSafe - 1 || B1 > H - botSafe + 1) {
          m.el._fade = 0;
          m.el.style.opacity = '0';
          m.el.style.visibility = 'hidden';
          m.el.style.pointerEvents = 'none';
        }
      }
    }
    labelsDirty = false;
    labelsSettled = false;
  }

  // Lerp (or freeze) toward frozen targets — deadband <0.5px
  const k = Math.min(1, (dt || 0.016) * 18);
  let maxDelta = 0;
  for (const o of labs) {
    const el = o && o.element;
    if (!el || el._tgtDx == null) continue;
    if (el.style.display === 'none') continue;
    const curDx = el._dx || 0, curDy = el._dy || 0;
    let ndx = curDx + (el._tgtDx - curDx) * k;
    let ndy = curDy + (el._tgtDy - curDy) * k;
    if (Math.abs(el._tgtDx - ndx) < 0.5 && Math.abs(el._tgtDy - ndy) < 0.5) {
      ndx = el._tgtDx; ndy = el._tgtDy;
    }
    maxDelta = Math.max(maxDelta, Math.abs(ndx - curDx), Math.abs(ndy - curDy));
    el._dx = ndx; el._dy = ndy;
    el.style.marginLeft = Math.round(ndx) + 'px';
    el.style.marginTop = Math.round(ndy) + 'px';
  }
  if (maxDelta < 0.5) labelsSettled = true;
  // HARD per-frame viewport clamp (screen-space after projection+margins).
  // Guarantees every CSS2D plaque stays ≥8px inside even if dirty pass raced the camera.
  {
    const m8 = 8;
    const sa2 = safeArea();
    const leftS = Math.max(m8, sa2.left || m8);
    const rightS = Math.min(sa2.W - m8, sa2.right != null ? sa2.right : (sa2.W - m8));
    const topS = sa2.top;
    const botS = Math.max(m8, sa2.H - sa2.bot);
    for (const o of labs) {
      const el = o && o.element;
      if (!el || !el.isConnected || el.style.display === 'none') continue;
      if (el.classList.contains('center')) continue; // fixed
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      let ddx = 0, ddy = 0;
      if (r.left < leftS) ddx += leftS - r.left;
      if (r.right > rightS) ddx -= r.right - rightS;
      if (r.top < topS) ddy += topS - r.top;
      if (r.bottom > sa2.H - botS) ddy -= r.bottom - (sa2.H - botS);
      if (ddx === 0 && ddy === 0) continue;
      // Re-check opposing edge after one-axis correction
      const L2 = r.left + ddx, R2 = r.right + ddx;
      if (L2 < leftS) ddx += leftS - L2;
      if (R2 > rightS) ddx -= (r.right + ddx) - rightS;
      const curDx = el._dx || 0, curDy = el._dy || 0;
      const nx = Math.round(curDx + ddx), ny = Math.round(curDy + ddy);
      el._dx = nx; el._dy = ny;
      el._tgtDx = nx; el._tgtDy = ny;
      el.style.marginLeft = nx + 'px';
      el.style.marginTop = ny + 'px';
    }
  }
  // Re-run declutter periodically so CSS2D plaques settle after projection + sway
  if (labelsSettled) {
    _plaqueRefreshAcc = (_plaqueRefreshAcc || 0) + (dt || 0.016);
    if (_plaqueRefreshAcc > (USE_CSS2D_FALLBACK ? 0.18 : 0.22)) {
      _plaqueRefreshAcc = 0;
      labelsDirty = true;
      labelsSettled = false;
    }
  }
}

function loop() { if (!manual) frame(); requestAnimationFrame(loop); }
window.__step = (dt) => { mT += dt; frame(); };

/* ---------------- glossary ---------------- */
const GLOSS = Array.isArray(D.glossary) ? D.glossary : [];
const GLOSS_BY_ID = Object.fromEntries(GLOSS.map(t => [t.id, t]));
const GDIAG = D.glossaryDiagrams || {};
let glossStack = [];
let glossAliasCache = { lang: null, list: [] };

function glossAliases() {
  if (glossAliasCache.lang === LANG) return glossAliasCache.list;
  const list = [];
  for (const t of GLOSS) {
    const raw = isEn() ? (t.aliasesEn || []) : (t.aliasesFa || []);
    for (const a of raw) {
      if (!a || a.length < 2) continue;
      list.push({ alias: a, id: t.id, norm: a.replace(/\u200c/g, '') });
    }
  }
  list.sort((a, b) => b.norm.length - a.norm.length || b.alias.length - a.alias.length);
  glossAliasCache = { lang: LANG, list };
  return list;
}
function isWordChar(c) {
  if (!c) return false;
  // Punctuation (incl. Arabic comma «،») is NOT a word char — otherwise
  // terms before «منطق،» / «گراف،» never match.
  if (/[\s.,;:!?()\[\]{}«»"'\-\/\\|@#$%^*=+<>~`،؛؟٪٫٬ـ]/.test(c)) return false;
  return /[A-Za-z0-9_\u0600-\u06FF\u200c]/.test(c);
}
function glossify(html, used, skipId) {
  if (!html || !GLOSS.length) return html;
  const aliases = glossAliases();
  const parts = String(html).split(/(<[^>]+>)/);
  for (let pi = 0; pi < parts.length; pi++) {
    const part = parts[pi];
    if (!part || part.charAt(0) === '<') continue;
    const orig = part;
    const normChars = [];
    const map = [];
    for (let i = 0; i < orig.length; i++) {
      if (orig[i] === '\u200c') continue;
      map.push(i);
      normChars.push(isEn() ? orig[i].toLowerCase() : orig[i]);
    }
    map.push(orig.length);
    const norm = normChars.join('');
    let npos = 0;
    const chunks = [];
    let lastOrig = 0;
    while (npos < norm.length) {
      let hit = null;
      for (const a of aliases) {
        if (used.has(a.id) || a.id === skipId) continue;
        const needle = isEn() ? a.norm.toLowerCase() : a.norm;
        if (!needle || npos + needle.length > norm.length) continue;
        if (norm.substr(npos, needle.length) !== needle) continue;
        const o0 = map[npos], o1 = map[npos + needle.length];
        if (o0 > 0 && isWordChar(orig[o0 - 1])) continue;
        if (o1 < orig.length && isWordChar(orig[o1])) continue;
        hit = { id: a.id, o0, o1, nlen: needle.length };
        break;
      }
      if (!hit) { npos++; continue; }
      if (hit.o0 > lastOrig) chunks.push(orig.slice(lastOrig, hit.o0));
      const matched = orig.slice(hit.o0, hit.o1);
      chunks.push('<button type="button" class="gterm" data-gid="' + hit.id + '">' + matched + '</button>');
      used.add(hit.id);
      lastOrig = hit.o1;
      npos += hit.nlen;
    }
    if (lastOrig < orig.length) chunks.push(orig.slice(lastOrig));
    parts[pi] = chunks.length ? chunks.join('') : orig;
  }
  return parts.join('');
}
function mdGloss(s, used) { return glossify(md(s), used); }

function glossOpen() { return document.body.classList.contains('gloss-open'); }
function openGloss(id, push) {
  const t = GLOSS_BY_ID[id];
  if (!t) return;
  if (push !== false) {
    if (!glossStack.length || glossStack[glossStack.length - 1] !== id) glossStack.push(id);
  }
  renderGlossCard(id, true);
  document.body.classList.add('gloss-open');
  const sheet = document.getElementById('glossSheet');
  if (sheet) sheet.setAttribute('aria-hidden', 'false');
}

function escHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function renderSampleBlock(sample, used, skipId) {
  if (!sample) return '';
  const q = isEn() ? (sample.enQ || sample.q) : (sample.faQ || sample.q);
  const steps = isEn() ? (sample.enSteps || sample.steps || []) : (sample.faSteps || sample.steps || []);
  const ans = isEn() ? (sample.enAns || sample.ans) : (sample.faAns || sample.ans);
  const viz = sample.viz || '';
  if (!q && !steps.length && !ans) return '';
  const u = used || new Set();
  let stepsHtml = '';
  if (steps.length) {
    stepsHtml = '<ol class="gsteps">' + steps.map(s => '<li>' + glossify(escHtml(s), u, skipId) + '</li>').join('') + '</ol>';
  }
  return '<div class="gsample"><span class="glab">' + T().glossSample + '</span>' +
    (q ? '<p class="gq">' + glossify(escHtml(q), u, skipId) + '</p>' : '') +
    viz + stepsHtml +
    (ans ? '<p class="gans"><b>' + T().glossAnswer + ':</b> ' + glossify(escHtml(ans), u, skipId) + '</p>' : '') +
    '</div>';
}
function glossSection(title, text, used, skipId) {
  if (!text) return '';
  return '<div class="gsec"><h4>' + title + '</h4><p class="gbody">' + glossify(text, used, skipId) + '</p></div>';
}

function renderGlossCard(id, focusTitle) {
  const t = GLOSS_BY_ID[id];
  if (!t) return;
  const title = isEn() ? t.en : t.fa;
  const titleEl = document.getElementById('glossTitle');
  const bodyEl = document.getElementById('glossBody');
  const backBtn = document.getElementById('glossBack');
  if (titleEl) titleEl.textContent = title;
  if (backBtn) backBtn.hidden = glossStack.length <= 1;
  const used = new Set([id]);
  const def = isEn() ? (t.enDef || t.enExp) : (t.faDef || t.faExp);
  const how = isEn() ? (t.enHow || '') : (t.faHow || '');
  const why = isEn() ? (t.enWhy || '') : (t.faWhy || '');
  const ex = isEn() ? t.enEx : t.faEx;
  const diag = t.diagram && GDIAG[t.diagram] ? GDIAG[t.diagram] : '';
  let html = '';
  html += glossSection(T().glossDef, def, used, id);
  html += glossSection(T().glossHow, how, used, id);
  html += glossSection(T().glossWhy, why, used, id);
  if (ex || diag) {
    html += '<div class="gloss-ex"><span class="glab">' + T().glossEx + '</span>' +
      (diag || '') +
      (ex ? '<p class="gextext">' + glossify(ex, used, id) + '</p>' : '') + '</div>';
  }
  html += renderSampleBlock(t.sample, used, id);
  const relIds = (t.related || []).filter(r => GLOSS_BY_ID[r] && r !== id);
  if (relIds.length) {
    html += '<div class="gloss-rel"><h4>' + T().glossRelated + '</h4><div class="chips">' +
      relIds.map(r => {
        const rt = GLOSS_BY_ID[r];
        const label = isEn() ? rt.en : rt.fa;
        return '<button type="button" class="gchip" data-gid="' + r + '">' + label + '</button>';
      }).join('') + '</div></div>';
  }
  bodyEl.innerHTML = html;
  bodyEl.scrollTop = 0;
  bindGlossTargets(bodyEl);
  if (focusTitle && titleEl) titleEl.focus?.();
}
function bindGlossTargets(root) {
  (root || document).querySelectorAll('.gterm[data-gid], .gchip[data-gid]').forEach(el => {
    if (el._glossBound) return;
    el._glossBound = true;
    bindTap(el, () => openGloss(el.getAttribute('data-gid'), true));
  });
}
function glossPop() {
  if (glossStack.length <= 1) { closeGloss(); return; }
  glossStack.pop();
  renderGlossCard(glossStack[glossStack.length - 1], true);
}
function closeGloss() {
  glossStack = [];
  document.body.classList.remove('gloss-open');
  const sheet = document.getElementById('glossSheet');
  if (sheet) sheet.setAttribute('aria-hidden', 'true');
  const bodyEl = document.getElementById('glossBody');
  if (bodyEl) bodyEl.innerHTML = '';
}
function wireGlossChrome() {
  const scrim = document.getElementById('glossScrim');
  const close = document.getElementById('glossClose');
  const back = document.getElementById('glossBack');
  if (scrim) scrim.addEventListener('click', closeGloss);
  if (close) close.addEventListener('click', closeGloss);
  if (back) back.addEventListener('click', glossPop);
}
wireGlossChrome();
window.__gloss = {
  open: openGloss, close: closeGloss, count: () => GLOSS.length,
  /** Count .gterm in current panel; flag cards whose text mentions glossary aliases but has 0 links. */
  auditPanel() {
    const body = document.getElementById('pbody');
    if (!body) return { links: 0, ok: true };
    const links = body.querySelectorAll('.gterm[data-gid]').length;
    const text = (body.innerText || '').replace(/\u200c/g, '');
    const aliases = glossAliases();
    let mentions = 0;
    for (const a of aliases) {
      const needle = isEn() ? a.norm.toLowerCase() : a.norm;
      const hay = isEn() ? text.toLowerCase() : text;
      if (needle.length >= 3 && hay.includes(needle)) { mentions++; break; }
    }
    return { links, mentions: mentions > 0, ok: !(mentions > 0 && links === 0) };
  }
};

/* ---------------- panel UI ---------------- */
const panel = document.getElementById('panel');
const pBody = document.getElementById('pbody');
const crumbs = document.getElementById('crumbs');
const backBtn = document.getElementById('back');
const md = s => (s || '').replace(/\*\*(.+?)\*\*/g, '<strong class="kt">$1</strong>');

function relChips(rel) {
  if (!rel || !rel.length) return '';
  return `<section><h3><span class="ic">⟷</span>${T().related}</h3><div class="chips">${rel.map(r => {
    const ki = KAS.findIndex(k => k.ch === r); const k = KAS[ki]; if (!k) return '';
    const name = isEn() ? k.en : k.fa;
    return `<button class="chip" data-ka="${ki}" style="--c:${k.css}"><span class="dot"></span>${num(k.ch)} · ${name}</button>`;
  }).join('')}</div></section>`;
}
function body(o, color) {
  const used = new Set();
  let h = `<div class="gloss-hint" role="note"><span class="gh-ico" aria-hidden="true">💡</span><span>${T().glossHint}</span></div>`;
  if (o.what) h += `<section><h3><span class="ic">◆</span>${T().what}</h3><p>${mdGloss(o.what, used)}</p></section>`;
  if (o.why) h += `<section><h3><span class="ic">★</span>${T().why}</h3><p>${mdGloss(o.why, used)}</p></section>`;
  if (o.keys && o.keys.length) h += `<section><h3><span class="ic">▦</span>${T().keys}</h3><ol class="keys">${o.keys.map(k => {
    const title = k[0], sub = k[1], desc = k[2];
    return `<li><div class="kh"><b>${mdGloss(title, used)}</b>${sub ? `<span class="en">${mdGloss(sub, used)}</span>` : ''}</div><p>${mdGloss(desc, used)}</p></li>`;
  }).join('')}</ol></section>`;
  if (o.ex) h += `<section class="ex"><h3><span class="ic">✎</span>${T().ex}</h3><p>${mdGloss(o.ex, used)}</p></section>`;
  if (o.sample) h += `<section><h3><span class="ic">∑</span>${T().sampleSec}</h3>${renderSampleBlock(o.sample, used)}</section>`;
  return h;
}
function renderPanel(s) {
  let head, h = '', color;
  if (s.ka == null) {
    color = '#f27a5e';
    const title = isEn() ? D.root.en : D.root.fa;
    const sub = isEn() ? D.root.fa : D.root.en;
    head = `<div class="ph" style="--c:${color}"><div class="kicker">${T().overview}</div><h2>${title}</h2><div class="en">${sub}</div></div>`;
    h += body(panelData('root', D.root), color);
    h += `<section><h3><span class="ic">◎</span>${T().allKas}</h3><div class="chips">${KAS.map((k, i) => {
      const name = isEn() ? k.en : k.fa;
      return `<button class="chip" data-ka="${i}" style="--c:${k.css}"><span class="dot"></span>${num(k.ch)} · ${name}</button>`;
    }).join('')}</div></section>`;
  } else {
    const k = KAS[s.ka]; color = k.css;
    const kName = isEn() ? k.en : k.fa;
    const kSub = isEn() ? k.fa : k.en;
    if (s.p === 'about') {
      head = `<div class="ph" style="--c:${color}"><div class="kicker">${T().kaLabel(num(k.ch), k.foundation)}</div><h2>${kName}</h2><div class="en">${kSub}</div></div>`;
      h += body(panelData('ka', k, k.ch), color);
      h += `<section><h3><span class="ic">◎</span>${T().topicsInKa}</h3><div class="chips">${k.topics.map((t, i) => {
        const name = isEn() ? t.en : t.fa;
        return `<button class="chip" data-ti="${i}" style="--c:${color}"><span class="dot"></span>${num(t.n)}. ${name}</button>`;
      }).join('')}</div></section>`;
      h += relChips(k.rel);
    } else {
      const t = k.topics[s.ti];
      const tName = isEn() ? t.en : t.fa;
      const tSub = isEn() ? t.fa : t.en;
      head = `<div class="ph" style="--c:${color}"><div class="kicker">${T().topicKick(kName, num(t.n))}</div><h2>${tName}</h2><div class="en">${tSub}</div></div>`;
      h += body(panelData('topic', t, k.ch, t.n), color);
      h += relChips(t.rel);
      const nx = k.topics[s.ti + 1], pv = k.topics[s.ti - 1];
      const pvName = pv ? (isEn() ? pv.en : pv.fa) : '';
      const nxName = nx ? (isEn() ? nx.en : nx.fa) : '';
      const prevArrow = isEn() ? '←' : '→';
      const nextArrow = isEn() ? '→' : '←';
      h += `<div class="pn">${pv ? `<button class="chip" data-ti="${s.ti - 1}" style="--c:${color}">${prevArrow} ${pvName}</button>` : '<span></span>'}${nx ? `<button class="chip" data-ti="${s.ti + 1}" style="--c:${color}">${nxName} ${nextArrow}</button>` : ''}</div>`;
    }
  }
  panel.style.setProperty('--c', color);
  pBody.innerHTML = head + `<div class="pc">${h}</div>`;
  pBody.scrollTop = 0;
  pBody.querySelectorAll('[data-ka]').forEach(b => b.onclick = () => { if (!busy) nav({ ka: +b.dataset.ka, p: null }); });
  pBody.querySelectorAll('[data-ti]').forEach(b => b.onclick = () => { if (!busy) nav({ ka: cur.ka, p: 't', ti: +b.dataset.ti }); });
  bindGlossTargets(pBody);
}
let panelShown = false;
async function openPanel(s) {
  if (panelShown) {
    await tween(0.18, k => { pBody.style.opacity = 1 - k; }, ease.out);
    renderPanel(s);
    await tween(0.25, k => { pBody.style.opacity = k; }, ease.out);
    return;
  }
  renderPanel(s); panelShown = true; pBody.style.opacity = 1;
  document.body.classList.add('panel-open');
  markLayoutDirty();
  scheduleLabelRelayout([0, 300, 600]);
  panel.style.visibility = 'visible';
  const mob = innerWidth / innerHeight < 0.8 || innerWidth < 760;
  await tween(0.55, k => {
    panel.style.opacity = Math.min(1, k * 1.5);
    panel.style.transform = mob ? `translateY(${(1 - k) * 100}%)` : `translateX(${(1 - k) * 110}%)`;
  }, ease.out);
}
async function closePanel() {
  if (!panelShown) return;
  closeGloss();
  panelShown = false;
  document.body.classList.remove('panel-open');
  markLayoutDirty();
  scheduleLabelRelayout([0, 300, 600]);
  const mob = innerWidth / innerHeight < 0.8 || innerWidth < 760;
  await tween(0.4, k => {
    panel.style.opacity = 1 - k;
    panel.style.transform = mob ? `translateY(${k * 100}%)` : `translateX(${k * 110}%)`;
  }, ease.in);
  panel.style.visibility = 'hidden';
}
document.getElementById('pback').onclick = goBack;
backBtn.onclick = goBack;
document.getElementById('home').onclick = () => { if (!busy && (cur.ka != null || cur.p)) nav({ ka: null, p: null }); };

function updateChrome() {
  const s = cur;
  const rootName = isEn() ? D.root.en : D.root.fa;
  const sep = isEn() ? '<i class="sep">›</i>' : '<i class="sep">‹</i>';
  const parts = [`<button data-c="root">${rootName}</button>`];
  if (s.ka == null && s.p === 'about') parts.push(`<span>${T().aboutCrumb}</span>`);
  if (s.ka != null) {
    const k = KAS[s.ka];
    const kName = isEn() ? k.en : k.fa;
    parts.push(`<button data-c="ka" style="--c:${k.css}">${kName}</button>`);
    if (s.p === 'about') parts.push(`<span>${T().aboutCrumb}</span>`);
    if (s.p === 't') parts.push(`<span>${isEn() ? k.topics[s.ti].en : k.topics[s.ti].fa}</span>`);
  }
  crumbs.innerHTML = parts.join(sep);
  crumbs.querySelector('[data-c=root]').onclick = () => { if (!busy && (cur.ka != null || cur.p)) nav({ ka: null, p: null }); };
  const kb = crumbs.querySelector('[data-c=ka]'); if (kb) kb.onclick = () => { if (!busy && cur.p) nav({ ka: cur.ka, p: null }); };
  backBtn.classList.toggle('off', !parentOf(s));
  const page = s.ka != null ? (isEn() ? KAS[s.ka].en : KAS[s.ka].fa) + ' · ' : '';
  document.title = page + T().title;
}

/* ---------------- demo cursor (for recording) ---------------- */
const dc = document.getElementById('dcur');
window.__cursor = (x, y, down) => { dc.style.display = 'block'; dc.style.left = x + 'px'; dc.style.top = y + 'px'; dc.classList.toggle('down', !!down); };
window.__labelPos = (sel) => { const e = document.querySelector(sel); if (!e) return null; const r = e.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
window.__chromeCheck = () => {
  const sa = safeArea();
  const labs = [...document.querySelectorAll('.lbl.ka,.lbl.topic,.lbl.found,.lbl.center')].filter(el => {
    if (el.style.display === 'none' || el.classList.contains('mob-hide')) return false;
    return el.getBoundingClientRect().width > 0;
  });
  let capChrome = 0, capCap = 0, faded = 0;
  const items = labs.map(el => {
    const r = el.getBoundingClientRect();
    const op = +getComputedStyle(el).opacity;
    if (op < 0.88) faded++;
    const hitTop = r.top < sa.top - 1;
    const hitBot = r.bottom > sa.bot + 1;
    const hitLeft = r.left < sa.left - 1;
    const hitRight = r.right > sa.right + 1;
    if (hitTop || hitBot || hitLeft || hitRight) capChrome++;
    return { t: el.textContent.trim().slice(0, 18), top: r.top, bot: r.bottom, left: r.left, right: r.right, op, hitTop, hitBot, hitLeft, hitRight, roof: el.classList.contains('rooftop'), center: el.classList.contains('center') };
  });
  for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
    const a = items[i], b = items[j];
    if (Math.min(a.right, b.right) - Math.max(a.left, b.left) > 2 && Math.min(a.bot, b.bot) - Math.max(a.top, b.top) > 2) capCap++;
  }
  // Icon visibility via projected fit points for each node
  let iconOut = 0, iconMiss = 0;
  const iconHits = [];
  if (view) {
    camera.updateMatrixWorld(true);
    for (const n of view.nodes) {
      const mesh = n.userData && n.userData.mesh;
      if (!mesh) { iconMiss++; continue; }
      mesh.getWorldPosition(_fitV);
      const s = (mesh.scale && mesh.scale.x) || 1;
      const samples = [
        _fitV.clone(),
        _fitV.clone().add(new THREE.Vector3(0, 0.7 * s, 0)),
        _fitV.clone().add(new THREE.Vector3(0, -0.25 * s, 0)),
      ];
      let allIn = true, anyProj = false, minY = 1e9, maxY = -1e9;
      for (const p of samples) {
        const v = p.clone().project(camera);
        if (v.z > 1.05) continue;
        anyProj = true;
        const x = (v.x * 0.5 + 0.5) * sa.W;
        const y = (-v.y * 0.5 + 0.5) * sa.H;
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        if (!(x >= sa.left - 2 && x <= sa.right + 2 && y >= sa.top && y <= sa.bot)) allIn = false;
      }
      const kind = n.userData.kind;
      const ch = (KAS[n.userData.ka] || {}).ch;
      if (!anyProj || !allIn) { iconOut++; iconHits.push({ kind, ch, out: true, minY, maxY }); }
      else iconHits.push({ kind, ch, out: false, minY, maxY });
    }
  }
  return { sa, n: items.length, capChrome, overlaps: capCap, faded, iconOut, roof: items.filter(i => i.roof).length, badCaps: items.filter(i => i.hitTop || i.hitBot), iconHits: iconHits.filter(i => i.out) };
};

/* ---------------- boot ---------------- */
applyLangAttrs();
const langBtn = document.getElementById('lang');
if (langBtn) langBtn.addEventListener('click', () => setLang(isEn() ? 'fa' : 'en', true));
const legendBtn = document.getElementById('legendBtn');
if (legendBtn) legendBtn.addEventListener('click', toggleLegend);
const legendClose = document.getElementById('legendClose');
if (legendClose) legendClose.addEventListener('click', closeLegend);
const legendScrim = document.getElementById('legendScrim');
if (legendScrim) legendScrim.addEventListener('click', closeLegend);
document.body.classList.toggle('is-mobile', IS_MOBILE);
if (IS_MOBILE) setTimeout(() => { if (!hintHidden) hideHint(false); }, 3200);
window.__setLang = setLang;
window.__lang = () => LANG;
resize();
(async () => {
  await ensureLabelFonts();
  const s = dec(location.hash);
  history.replaceState({ d: 0 }, '', enc(s));
  if (s.ka == null) { setCam(0); await enterView(buildRoot(), 0); } else { setCam(1); await enterView(buildKA(s.ka), 0); }
  cur = { ka: s.ka, p: null };
  updateChrome();
  markLayoutDirty();
  scheduleLabelRelayout([0, 150, 450, 900]);
  if (s.p) { cur = s; updateChrome(); await openPanel(s); }
  window.__ready = true;
  window.__pickAt = (x,y) => { const n = pickAt(x,y); return n ? (n.userData.kind|| (n===view.center?"center":"?")) : null; };
  window.__pickN = () => pickables.length;
  window.__view = () => view;
  window.__camera = camera;
  window.__cssLabelBoxes = () => {
    const out = [];
    const els = document.querySelectorAll('.lbl.clay-plaque,.lbl.ka,.lbl.topic,.lbl.found,.lbl.center');
    for (const el of els) {
      if (el.style.display === 'none' || el.style.visibility === 'hidden' || el.classList.contains('mob-hide')) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      const op = +getComputedStyle(el).opacity;
      if (op < 0.5) continue;
      const kind = el.classList.contains('center') ? 'center'
        : el.classList.contains('found') ? 'found'
        : el.classList.contains('topic') ? 'topic' : 'ka';
      out.push({
        tag: kind, text: (el.textContent || '').trim().slice(0, 24),
        scheme: el.dataset.scheme || 'light',
        contrast: +(el.dataset.contrast || 0),
        L: r.left, R: r.right, T: r.top, B: r.bottom, w: r.width, h: r.height,
        fontSize: parseFloat(getComputedStyle(el.querySelector('.tx b,.ttl') || el).fontSize) || 0,
        sway: el.style.getPropertyValue('--sway') || '0deg',
      });
    }
    return out;
  };
  window.__plaqueBoxes = () => {
    if (USE_CSS2D_FALLBACK) return window.__cssLabelBoxes();
    const out = [];
    if (!view) return out;
    const W = innerWidth, H = innerHeight;
    const push = (n, tag) => {
      const s = n && n.userData && n.userData.sign;
      if (!s) return;
      const b = projectPlaqueScreen(s, n.userData.mesh, W, H, false);
      if (!b) return;
      out.push({ tag, scheme: s.userData.colors && s.userData.colors.scheme, L: b.L, R: b.R, T: b.T, B: b.B, w: b.w, h: b.h });
    };
    push(view.center, "center");
    for (const n of view.nodes) push(n, n.userData.kind);
    return out;
  };
  window.__centerSign = () => {
    if (USE_CSS2D_FALLBACK) {
      const el = view && view.center && view.center.userData.label && view.center.userData.label.element;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        w: r.width, h: r.height, faces: 0,
        contrast: +(el.dataset.contrast || 0),
        scheme: el.dataset.scheme || 'light',
        emboss: true, css2d: true,
        sway: el.style.getPropertyValue('--sway') || '0deg',
      };
    }
    const s = view && view.center && view.center.userData.sign;
    if (!s) return null;
    return {
      w: s.userData.signW, h: s.userData.signH,
      faces: (s.userData.faces || []).length,
      contrast: s.userData.contrast,
      scheme: s.userData.colors && s.userData.colors.scheme,
      emboss: true,
    };
  };
  window.__plaqueContrasts = () => {
    if (USE_CSS2D_FALLBACK) {
      return window.__cssLabelBoxes().map(b => ({
        tag: b.tag, contrast: b.contrast, scheme: b.scheme, text: b.text,
      }));
    }
    const out = [];
    const push = (n, tag) => {
      const s = n && n.userData && n.userData.sign;
      if (!s) return;
      out.push({ tag, contrast: s.userData.contrast, scheme: s.userData.colors && s.userData.colors.scheme,
        letter: s.userData.colors && s.userData.colors.letter,
        plaque: s.userData.colors && s.userData.colors.plaque });
    };
    if (view) { push(view.center, 'center'); for (const n of view.nodes) push(n, n.userData.kind); }
    return out;
  };
  window.__dumpPlaqueAlbedos = () => {
    const view = window.__view();
    if (!view) return [];
    const out = [];
    const push = (tag, s) => {
      if (!s || !s.userData || !s.userData.tex || !s.userData.tex.image) return;
      const c = s.userData.tex.image;
      try {
        out.push({ tag, w: c.width, h: c.height, scheme: s.userData.colors && s.userData.colors.scheme,
          contrast: s.userData.colors && s.userData.colors.contrast,
          dataUrl: c.toDataURL('image/png') });
      } catch (e) { out.push({ tag, err: String(e) }); }
    };
    if (view.center && view.center.userData.sign) push('center', view.center.userData.sign);
    for (const n of view.nodes) {
      const s = n.userData && n.userData.sign;
      if (!s) continue;
      const tag = n.userData.kind || 'node';
      push(tag + (n.userData.ka != null ? '-' + n.userData.ka : ''), s);
    }
    return out;
  };
  window.__overlapSign = () => {
    if (USE_CSS2D_FALLBACK) {
      const boxes = window.__cssLabelBoxes();
      const hits = [];
      let worst = 0;
      for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i], b = boxes[j];
        const ox = Math.min(a.R, b.R) - Math.max(a.L, b.L);
        const oy = Math.min(a.B, b.B) - Math.max(a.T, b.T);
        if (ox > -4 && oy > -4) {
          hits.push({ kind: a.tag + '-' + b.tag, text: [a.text, b.text], ox: +ox.toFixed(1), oy: +oy.toFixed(1) });
          worst = Math.max(worst, ox * oy);
        }
      }
      const sa = safeArea();
      const clipped = boxes.filter(b => {
        const h = Math.max(1, b.B - b.T), w = Math.max(1, b.R - b.L);
        const cutT = Math.max(0, sa.top - b.T), cutB = Math.max(0, b.B - sa.bot);
        const cutL = Math.max(0, sa.left - b.L), cutR = Math.max(0, b.R - sa.right);
        return (cutT + cutB) / h > 0.45 || (cutL + cutR) / w > 0.45;
      });
      return {
        ok: hits.length === 0 && clipped.length === 0,
        worstArea: worst, hitCount: hits.length, hits: hits.slice(0, 20),
        clipped: clipped.map(c => ({ tag: c.tag, text: c.text, L: c.L, R: c.R, T: c.T, B: c.B })),
        n: boxes.length, sign: window.__centerSign(),
      };
    }
    const sign = view && view.center && view.center.userData.sign;
    const mesh = view && view.center && view.center.userData.mesh;
    if (!sign || !mesh) return { ok: false, reason: 'no-sign' };
    const W = innerWidth, H = innerHeight;
    const br = mesh.userData.baseRot || { x: -0.42, y: 0.62, z: 0.1 };
    const amp = 0.38;
    let worst = 0, hits = [], samples = [];
    const saved = mesh.rotation.y;
    const nodeBoxes = () => {
      const boxes = [];
      for (const n of view.nodes) {
        const ps = n.userData.sign;
        if (ps) {
          const b = projectPlaqueScreen(ps, n.userData.mesh, W, H, false);
          if (b) boxes.push({ kind: n.userData.kind, ch: (n.userData.ka != null && KAS[n.userData.ka]) ? KAS[n.userData.ka].ch : null, ...b });
          continue;
        }
        const lb = n.userData.label;
        if (!lb || !lb.element || lb.element.style.display === 'none') continue;
        const r = lb.element.getBoundingClientRect();
        if (!r.width) continue;
        boxes.push({ kind: n.userData.kind, ch: (n.userData.ka != null && KAS[n.userData.ka]) ? KAS[n.userData.ka].ch : null,
          L: r.left, R: r.right, T: r.top, B: r.bottom });
      }
      return boxes;
    };
    for (let i = 0; i < 12; i++) {
      const yaw = br.y + Math.sin(i / 12 * Math.PI * 2) * amp;
      mesh.rotation.y = yaw;
      mesh.updateMatrixWorld(true);
      const box = projectPlaqueScreen(sign, mesh, W, H, false);
      if (!box) continue;
      const pad = 6;
      const L = box.L - pad, R = box.R + pad, T = box.T - pad, B = box.B + pad;
      for (const lb of nodeBoxes()) {
        const ox = Math.min(R, lb.R) - Math.max(L, lb.L);
        const oy = Math.min(B, lb.B) - Math.max(T, lb.T);
        if (ox > 0 && oy > 0) {
          const area = ox * oy;
          if (area > worst) worst = area;
          hits.push({ yaw: +yaw.toFixed(3), kind: lb.kind, ch: lb.ch, ox: +ox.toFixed(1), oy: +oy.toFixed(1) });
        }
      }
      samples.push({ yaw: +yaw.toFixed(3), w: +(R - L).toFixed(1), h: +(B - T).toFixed(1) });
    }
    mesh.rotation.y = saved; mesh.updateMatrixWorld(true);
    const rest = nodeBoxes();
    for (let i = 0; i < rest.length; i++) for (let j = i + 1; j < rest.length; j++) {
      const a = rest[i], b = rest[j];
      const ox = Math.min(a.R, b.R) - Math.max(a.L, b.L);
      const oy = Math.min(a.B, b.B) - Math.max(a.T, b.T);
      if (ox > 2 && oy > 2) {
        hits.push({ kind: 'ring-ring', ch: [a.ch, b.ch], ox: +ox.toFixed(1), oy: +oy.toFixed(1) });
        worst = Math.max(worst, ox * oy);
      }
    }
    return { ok: hits.length === 0, worstArea: worst, hitCount: hits.length, hits: hits.slice(0, 20), samples, sign: window.__centerSign() };
  };
  window.__iconTouch = () => {
    const out = [];
    if (!view) return { ok: true, bad: [], all: out };
    const _tmpV = new THREE.Vector3();
    const check = (node, tag) => {
      const el = node && node.userData && node.userData.label && node.userData.label.element;
      const mesh = node && node.userData && node.userData.mesh;
      if (!el || !mesh || el.style.display === 'none') return;
      const r = el.getBoundingClientRect();
      if (!r.width) return;
      mesh.getWorldPosition(_tmpV);
      _tmpV.project(camera);
      const ix = (_tmpV.x * 0.5 + 0.5) * innerWidth;
      const iy = (-_tmpV.y * 0.5 + 0.5) * innerHeight;
      const under = el.classList.contains('under');
      // above: plaque bottom vs icon; under: plaque top vs icon (positive = plaque away from icon center)
      const gap = under ? (r.top - iy) : (r.bottom - iy);
      const dx = ((r.left + r.right) * 0.5) - ix;
      out.push({ tag, text: (el.textContent || '').trim().slice(0, 18), gap: +gap.toFixed(1), dx: +dx.toFixed(1),
        plaqueBot: +r.bottom.toFixed(1), iconTop: +iy.toFixed(1), under });
    };
    for (const n of view.nodes) {
      if (n.userData && n.userData.kind === 'found') continue;
      check(n, n.userData.kind);
    }
    // Rooftop plaques sit above icon center → gap often negative; under → positive.
    const bad = out.filter(o => {
      if (Math.abs(o.dx) > 58) return true;
      if (o.under) return o.gap < -28 || o.gap > 80;
      return o.gap < -95 || o.gap > 56;
    });
    return { ok: bad.length === 0, bad, all: out };
  };
  document.body.classList.add('ready');
})();
loop();
