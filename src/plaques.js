import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/** Embossed clay plaques: cream/dark slab + CanvasTexture albedo + normal map. */

let _fontsReady = false;
export async function ensureLabelFonts() {
  if (_fontsReady) return;
  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    await Promise.all([
      document.fonts.load('800 32px Vazirmatn'),
      document.fonts.load('700 28px Vazirmatn'),
      document.fonts.load('800 32px Inter'),
      document.fonts.load('700 28px Inter'),
    ]);
  } catch (_) {}
  _fontsReady = true;
}

function _hasFa(s) { return /[\u0600-\u06FF]/.test(String(s || '')); }

function _lin(v) {
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
export function relativeLuminance(hex) {
  const c = new THREE.Color(hex);
  return 0.2126 * _lin(c.r) + 0.7152 * _lin(c.g) + 0.0722 * _lin(c.b);
}
export function contrastRatio(a, b) {
  const L1 = relativeLuminance(a), L2 = relativeLuminance(b);
  const hi = Math.max(L1, L2), lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}

/** Pick cream+deep-hue or dark+white — always aim for >= 4.5:1. */
export function pickPlaqueColors(nodeHex) {
  const cream = 0xf8f2ea;
  const c = new THREE.Color(typeof nodeHex === 'number' ? nodeHex : 0xf27a5e);
  const hsl = {}; c.getHSL(hsl);
  // Yellow/lime hues need much lower L to hit contrast on cream
  const tricky = (hsl.h > 0.12 && hsl.h < 0.45);
  let sat = tricky ? Math.min(0.75, Math.max(0.45, hsl.s)) : Math.min(0.9, Math.max(0.55, hsl.s * 1.15));
  let l = tricky ? 0.05 : 0.07;
  const deep = new THREE.Color().setHSL(hsl.h, sat, l);
  let deepHex = deep.getHex();
  let rLight = contrastRatio(deepHex, cream);
  // Aim >= 11:1 theoretical so sampled-under-AA stays >= 4.5
  while (rLight < 11.0 && l > 0.025) {
    l -= 0.01;
    // Desaturate slightly as we go darker (avoids neon muddy)
    sat = Math.min(sat, tricky ? 0.48 : 0.78);
    deep.setHSL(hsl.h, sat, l);
    deepHex = deep.getHex();
    rLight = contrastRatio(deepHex, cream);
  }
  if (rLight < 4.5) {
    // Fallback: near-black with a hint of hue
    deep.setHSL(hsl.h, 0.4, 0.045);
    deepHex = deep.getHex();
    rLight = contrastRatio(deepHex, cream);
  }
  const darkPl = new THREE.Color().setHSL(hsl.h, Math.min(0.4, hsl.s * 0.65), 0.14);
  const white = 0xfaf7f2;
  let rDark = contrastRatio(white, darkPl.getHex());
  if (rLight >= 4.5) {
    return { plaque: cream, letter: deepHex, edge: new THREE.Color(deepHex).offsetHSL(0, 0, -0.05).getHex(),
      hilite: 0xffffff, scheme: 'light', contrast: +rLight.toFixed(2) };
  }
  let dl = 0.14, darkHex = darkPl.getHex();
  while (rDark < 7.0 && dl > 0.05) {
    dl -= 0.015;
    darkPl.setHSL(hsl.h, Math.min(0.45, hsl.s * 0.7), dl);
    darkHex = darkPl.getHex();
    rDark = contrastRatio(white, darkHex);
  }
  return { plaque: darkHex, letter: white, edge: 0xd8d0c8,
    hilite: 0xffffff, scheme: 'dark', contrast: +rDark.toFixed(2) };
}


function _roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w * 0.5, h * 0.5);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function _hexCss(hex) {
  return '#' + (hex >>> 0).toString(16).padStart(6, '0');
}

/**
 * Draw embossed lettering into albedo + height canvases.
 * Returns { albedo, height, cssW, cssH, colors, dpr }.
 */
export function drawEmbossCanvases(primary, opts = {}) {
  const isMobile = !!opts.isMobile;
  const dpr = Math.min(isMobile ? 2 : 2.5, (typeof window !== 'undefined' && window.devicePixelRatio) || 2);
  const primSize = opts.primSize || (isMobile ? 26 : 30);
  const numStr = (opts.num != null && opts.num !== '') ? String(opts.num) : null;
  const numR = numStr ? (isMobile ? 13 : 15) : 0;
  const padX = isMobile ? 12 : 16;
  const padY = isMobile ? 7 : 9;
  const gap = numStr ? 7 : 0;
  const rtl = !!opts.rtl;
  const colors = opts.colors || pickPlaqueColors(opts.nodeHex || 0xf27a5e);
  const family = _hasFa(primary) ? 'Vazirmatn' : 'Inter';
  const primFont = '800 ' + primSize + 'px ' + family + ', Vazirmatn, Inter, sans-serif';

  const m = document.createElement('canvas').getContext('2d');
  m.font = primFont;
  const twoLine = !!opts._twoLine;
  function wrapTwo(text) {
    const words = String(text || '').split(/\s+/).filter(Boolean);
    if (words.length < 2) {
      // Split long unbroken token roughly in half at a safe boundary
      const t = String(text || '');
      if (t.length < 8) return [t, ''];
      const mid = Math.ceil(t.length / 2);
      return [t.slice(0, mid).trim(), t.slice(mid).trim()];
    }
    let best = null;
    for (let i = 1; i < words.length; i++) {
      const a = words.slice(0, i).join(' ');
      const b = words.slice(i).join(' ');
      const wa = m.measureText(a).width, wb = m.measureText(b).width;
      const score = Math.max(wa, wb) + Math.abs(wa - wb) * 0.15;
      if (!best || score < best.score) best = { a, b, score, w: Math.max(wa, wb) };
    }
    return [best.a, best.b];
  }
  let line1 = primary || '';
  let line2 = '';
  if (twoLine) {
    const parts = wrapTwo(primary || '');
    line1 = parts[0]; line2 = parts[1] || '';
  }
  const pw = twoLine
    ? Math.max(m.measureText(line1).width, line2 ? m.measureText(line2).width : 0)
    : m.measureText(primary || '').width;
  const textW = pw;
  const textH = twoLine && line2 ? (primSize * 2 + 3) : primSize;
  let cssW = Math.ceil(padX * 2 + (numR ? numR * 2 + gap : 0) + textW);
  let cssH = Math.ceil(Math.max(textH + padY * 2, numR ? numR * 2 + 4 : 0));
  // Cap for GPU — shrink font if needed (guard against infinite recurse at floor size)
  const maxCssW = opts.maxCssW || (isMobile ? 220 : 320);
  if (cssW > maxCssW && !opts._forceFit) {
    const scale = maxCssW / cssW;
    const newSize = Math.max(15, Math.floor(primSize * scale));
    if (newSize < primSize) {
      return drawEmbossCanvases(primary, { ...opts, primSize: newSize, colors });
    }
    // Still too wide at min size — prefer 2-line wrap (never ellipsis)
    if (!opts._twoLine) {
      return drawEmbossCanvases(primary, { ...opts, primSize, colors, _twoLine: true });
    }
    return drawEmbossCanvases(primary, { ...opts, primSize, colors, _forceFit: true });
  }
  if (cssW > maxCssW) cssW = maxCssW;

  const albedo = document.createElement('canvas');
  albedo.width = Math.max(2, Math.ceil(cssW * dpr));
  albedo.height = Math.max(2, Math.ceil(cssH * dpr));
  const ctx = albedo.getContext('2d');
  // Opaque plaque fill for entire bitmap (no transparent→black corners)
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = _hexCss(colors.plaque);
  ctx.fillRect(0, 0, albedo.width, albedo.height);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Clay plaque body (rounded — same color, rim drawn after)
  _roundRect(ctx, 0, 0, cssW, cssH, cssH * 0.42);
  ctx.fillStyle = _hexCss(colors.plaque);
  ctx.fill();
  // Soft bevel rim
  ctx.save();
  _roundRect(ctx, 0.8, 0.8, cssW - 1.6, cssH - 1.6, cssH * 0.4);
  ctx.strokeStyle = colors.scheme === 'light' ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.restore();
  // Bottom shade for slab thickness feel
  ctx.save();
  _roundRect(ctx, 0, 0, cssW, cssH, cssH * 0.42);
  ctx.clip();
  const grd = ctx.createLinearGradient(0, 0, 0, cssH);
  grd.addColorStop(0, 'rgba(255,255,255,0.18)');
  grd.addColorStop(0.55, 'rgba(0,0,0,0)');
  grd.addColorStop(1, 'rgba(40,20,30,0.14)');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, cssW, cssH);
  ctx.restore();

  let textLeft = padX;
  let textRight = cssW - padX;

  const drawNum = (c, fill, asHeight) => {
    if (!numStr) return;
    const cx = rtl ? (cssW - padX - numR + 2) : (padX + numR - 2);
    const cy = cssH / 2;
    c.beginPath();
    c.arc(cx, cy, numR - 1.5, 0, Math.PI * 2);
    if (asHeight) {
      c.fillStyle = '#fff';
      c.fill();
    } else {
      // Embossed badge disk in letter color (slightly lighter fill)
      const badge = new THREE.Color(colors.letter);
      if (colors.scheme === 'light') badge.offsetHSL(0, -0.05, 0.08);
      else badge.set(colors.plaque).offsetHSL(0, 0, 0.12);
      c.fillStyle = '#' + badge.getHexString();
      c.fill();
      // Number in contrasting color
      c.fillStyle = colors.scheme === 'light' ? _hexCss(colors.plaque) : _hexCss(colors.letter);
      c.font = '800 ' + Math.round(numR * 1.05) + 'px Vazirmatn, Inter, sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.direction = 'ltr';
      // subtle emboss on digit
      c.save();
      c.fillStyle = 'rgba(0,0,0,0.25)';
      c.fillText(numStr, cx, cy + 0.8);
      c.fillStyle = colors.scheme === 'light' ? _hexCss(colors.plaque) : _hexCss(colors.letter);
      c.fillText(numStr, cx, cy);
      c.restore();
    }
    if (rtl) textRight = cx - numR - gap + 2;
    else textLeft = cx + numR + gap - 2;
  };

  const drawText = (c, asHeight) => {
    c.font = primFont;
    c.textBaseline = 'alphabetic';
    const lines = (twoLine && line2) ? [line1, line2] : [primary];
    const lineGap = primSize + 3;
    const firstY = padY + primSize * 0.82;
    const x = (rtl || _hasFa(primary)) ? textRight : textLeft;
    c.direction = (rtl || _hasFa(primary)) ? 'rtl' : 'ltr';
    c.textAlign = (rtl || _hasFa(primary)) ? 'right' : 'left';
    const paint = (txt, y) => {
      if (asHeight) { c.fillStyle = '#fff'; c.fillText(txt, x, y); return; }
      c.save();
      c.fillStyle = colors.scheme === 'light' ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.12)';
      c.fillText(txt, x, y - 0.45);
      c.fillStyle = colors.scheme === 'light' ? 'rgba(40,20,30,0.14)' : 'rgba(0,0,0,0.2)';
      c.fillText(txt, x, y + 0.55);
      c.fillStyle = _hexCss(colors.letter);
      c.fillText(txt, x, y);
      c.fillText(txt, x + 0.35, y);
      c.restore();
    };
    lines.forEach((txt, i) => paint(txt, firstY + i * lineGap));
  };

  drawNum(ctx, true, false);
  // reset text bounds after num for albedo (drawNum mutates textLeft/Right)
  drawText(ctx, false);

  // Height map for normals
  const height = document.createElement('canvas');
  height.width = albedo.width;
  height.height = albedo.height;
  const hctx = height.getContext('2d');
  hctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  hctx.fillStyle = '#000';
  hctx.fillRect(0, 0, cssW, cssH);
  // reset bounds
  textLeft = padX; textRight = cssW - padX;
  drawNum(hctx, true, true);
  drawText(hctx, true);
  // Soften height for gentler normals (optional; skip if filter unsupported)
  try {
    const tmp = document.createElement('canvas');
    tmp.width = height.width; tmp.height = height.height;
    const tctx = tmp.getContext('2d');
    tctx.filter = 'blur(' + (0.55 * dpr) + 'px)';
    tctx.drawImage(height, 0, 0);
    tctx.filter = 'none';
    hctx.setTransform(1, 0, 0, 1, 0, 0);
    hctx.clearRect(0, 0, height.width, height.height);
    hctx.drawImage(tmp, 0, 0);
  } catch (_) {}

  return { albedo, height, cssW, cssH, colors, dpr, contrast: colors.contrast };
}

/** Convert height canvas → RGB normal map. */
export function heightToNormalMap(heightCanvas, strength = 2.2) {
  const w = heightCanvas.width, h = heightCanvas.height;
  const src = heightCanvas.getContext('2d').getImageData(0, 0, w, h);
  const out = document.createElement('canvas');
  out.width = w; out.height = h;
  const dst = out.getContext('2d').createImageData(w, h);
  const s = src.data, d = dst.data;
  const lum = (i) => (s[i] + s[i + 1] + s[i + 2]) / (3 * 255);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const xl = lum(((y) * w + Math.max(0, x - 1)) * 4);
      const xr = lum(((y) * w + Math.min(w - 1, x + 1)) * 4);
      const yu = lum((Math.max(0, y - 1) * w + x) * 4);
      const yd = lum((Math.min(h - 1, y + 1) * w + x) * 4);
      let nx = (xl - xr) * strength;
      let ny = (yu - yd) * strength;
      let nz = 1;
      const len = Math.hypot(nx, ny, nz) || 1;
      nx /= len; ny /= len; nz /= len;
      d[i] = (nx * 0.5 + 0.5) * 255;
      d[i + 1] = (ny * 0.5 + 0.5) * 255;
      d[i + 2] = (nz * 0.5 + 0.5) * 255;
      d[i + 3] = 255;
    }
  }
  out.getContext('2d').putImageData(dst, 0, 0);
  return out;
}

const _geoCache = {};
function plaqueGeo(w, h, d) {
  const key = w.toFixed(3) + '_' + h.toFixed(3) + '_' + d.toFixed(3);
  if (_geoCache[key]) return _geoCache[key];
  const g = new RoundedBoxGeometry(w, h, d, 2, Math.min(0.06, h * 0.35));
  return (_geoCache[key] = g);
}

function makeFaceMaterial(albedoTex, normalTex) {
  // Basic material: lighting can't wash out letter/plaque contrast; emboss is baked into albedo + light normals
  return new THREE.MeshBasicMaterial({
    map: albedoTex,
    color: 0xffffff,
    transparent: false,
    depthTest: false,
    depthWrite: false,
    side: THREE.FrontSide,
    toneMapped: false,
  });
}

/**
 * Build an embossed plaque group.
 * opts: { primary, num, nodeHex, iconScale, pickNode, worldH, maxWorldW, localY, localZ,
 *         dualFace, billboardY, counterTilt, baseRot, isMobile, rtl, bold }
 */
export function makeEmbossPlaque(opts = {}) {
  const isMobile = !!opts.isMobile;
  const iconScale = Math.max(0.01, opts.iconScale || 1);
  const drawn = drawEmbossCanvases(opts.primary || '', {
    num: opts.num,
    nodeHex: opts.nodeHex,
    isMobile,
    rtl: opts.rtl,
    primSize: opts.primSize || (opts.bold ? (isMobile ? 36 : 42) : (isMobile ? 30 : 34)),
    maxCssW: opts.bold ? (isMobile ? 360 : 460) : (isMobile ? 300 : 360),
  });

  const albedoTex = new THREE.CanvasTexture(drawn.albedo);
  if ('colorSpace' in albedoTex) albedoTex.colorSpace = THREE.SRGBColorSpace;
  albedoTex.anisotropy = 4;
  albedoTex.generateMipmaps = false;
  albedoTex.minFilter = THREE.LinearFilter;
  albedoTex.magFilter = THREE.LinearFilter;
  albedoTex.premultiplyAlpha = false;
  albedoTex.needsUpdate = true;

  const aspect = drawn.cssW / Math.max(1, drawn.cssH);
  let worldH = opts.worldH != null ? opts.worldH : (opts.bold ? (isMobile ? 0.85 : 0.95) : (isMobile ? 0.62 : 0.70));
  let worldW = worldH * aspect;
  const maxW = opts.maxWorldW != null ? opts.maxWorldW : (opts.bold ? (isMobile ? 2.8 : 3.2) : (isMobile ? 2.2 : 2.5));
  if (worldW > maxW) worldW = maxW; // keep worldH — readability over perfect tex aspect

  const localW = worldW / iconScale;
  const localH = worldH / iconScale;
  const depth = (opts.bold ? 0.07 : 0.055) / iconScale;

  // Single rounded clay slab with albedo on ALL faces (opaque — no plane/alpha edges).
  // Side/back faces just show plaque color from the opaque canvas padding.
  const bodyMat = makeFaceMaterial(albedoTex, null);
  const body = new THREE.Mesh(
    plaqueGeo(localW, localH, depth),
    bodyMat
  );
  body.castShadow = false;
  body.receiveShadow = false;
  body.userData.isPlaqueBody = true;
  body.userData.isPlaqueFace = true;
  body.userData.isCenterSignFace = true;
  body.renderOrder = 10;

  const g = new THREE.Group();
  g.add(body);
  const faces = [body];

  if (opts.dualFace) {
    // Second slab flipped — used when not billboarding; with billboard usually unused
    const back = new THREE.Mesh(plaqueGeo(localW, localH, depth), makeFaceMaterial(albedoTex, null));
    back.rotation.y = Math.PI;
    back.position.z = 0;
    back.userData.isPlaqueBody = true;
    back.userData.isPlaqueFace = true;
    back.userData.isCenterSignFace = true;
    back.renderOrder = 10;
    // hide back when billboarding (same space); keep for non-billboard dual
    if (opts.billboardY) back.visible = false;
    g.add(back);
    faces.push(back);
  }

  if (opts.pickNode) {
    for (const f of faces) f.userData.pick = opts.pickNode;
  }

  g.userData.isPlaque = true;
  g.userData.isCenterSign = !!opts.dualFace || !!opts.bold;
  g.userData.signW = worldW;
  g.userData.signH = worldH;
  g.userData.localW = localW;
  g.userData.localH = localH;
  g.userData.tex = albedoTex;
  g.userData.normalTex = null;
  g.userData.faces = faces;
  g.userData.colors = drawn.colors;
  g.userData.contrast = drawn.contrast;
  g.userData.billboardY = !!opts.billboardY;
  g.userData.nudgeX = 0;
  g.userData.nudgeY = 0;
  g.userData.baseLocalY = opts.localY != null ? opts.localY : (opts.bold ? 0.85 : -0.72);
  g.userData.baseLocalZ = opts.localZ != null ? opts.localZ : (opts.bold ? 0.08 : 0.72);

  g.position.set(0, g.userData.baseLocalY, g.userData.baseLocalZ);

  if (opts.counterTilt && !opts.billboardY) {
    const br = opts.baseRot || { x: -0.42, y: 0.62, z: 0.1 };
    const k = opts.tiltScale != null ? opts.tiltScale : 1;
    g.rotation.x = -br.x * k;
    g.rotation.z = -br.z * k;
  }

  return g;
}

export function setPlaqueOpacity(plaque, a) {
  if (!plaque) return;
  const op = Math.max(0, Math.min(1, a));
  plaque.traverse(o => {
    if (o.isMesh && o.material) {
      o.material.transparent = op < 0.99;
      o.material.opacity = op;
      o.material.needsUpdate = true;
    }
  });
  plaque.visible = op > 0.02;
}

const _bbQ = new THREE.Quaternion();
const _bbE = new THREE.Euler(0, 0, 0, 'YXZ');
const _bbP = new THREE.Vector3();
const _bbParentQ = new THREE.Quaternion();

/** Y-axis billboard toward camera while keeping plaque upright in world. */
export function billboardPlaqueY(plaque, camera) {
  if (!plaque || !plaque.userData.billboardY) return;
  const parent = plaque.parent;
  if (!parent) return;
  plaque.getWorldPosition(_bbP);
  const dx = camera.position.x - _bbP.x;
  const dz = camera.position.z - _bbP.z;
  const worldYaw = Math.atan2(dx, dz);
  parent.getWorldQuaternion(_bbParentQ);
  _bbE.setFromQuaternion(_bbParentQ, 'YXZ');
  // Cancel parent pitch/roll/yaw, apply camera yaw
  plaque.rotation.set(-_bbE.x, worldYaw - _bbE.y, -_bbE.z);
  // Apply declutter nudges
  plaque.position.x = (plaque.userData.nudgeX || 0);
  plaque.position.y = plaque.userData.baseLocalY + (plaque.userData.nudgeY || 0);
  plaque.position.z = plaque.userData.baseLocalZ;
  // Soft distance equalization — keep far plaques closer to readable screen size
  const dist = Math.hypot(camera.position.x - _bbP.x, camera.position.y - _bbP.y, camera.position.z - _bbP.z);
  const ref = plaque.userData.bold ? 15.2 : 16.8;
  const s = Math.min(1.30, Math.max(0.98, dist / ref));
  plaque.scale.setScalar(s);
}
