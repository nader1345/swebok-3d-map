import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/** Procedural matte/clay 3D icons for SWEBOK map nodes. */

const GEO = {};
function memo(key, fn) { return GEO[key] || (GEO[key] = fn()); }

function clay(hex, extra = {}) {
  return new THREE.MeshStandardMaterial({
    color: hex, roughness: 0.55, metalness: 0.12,
    ...extra,
  });
}
function shade(hex, f) {
  const c = new THREE.Color(hex); const h = {}; c.getHSL(h);
  c.setHSL(h.h, Math.min(1, h.s * 1.05), Math.min(0.92, Math.max(0.08, h.l + f)));
  return c.getHex();
}
function add(g, mesh, cast = true) {
  mesh.castShadow = cast; mesh.receiveShadow = true; g.add(mesh); return mesh;
}
function rbx(w, h, d, r = 0.08, seg = 3) {
  return memo(`rbx_${w}_${h}_${d}_${r}`, () => new RoundedBoxGeometry(w, h, d, seg, r));
}
function cyl(rt, rb, h, seg = 24) {
  return memo(`cyl_${rt}_${rb}_${h}_${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg));
}
function sph(r, w = 24, h = 16) {
  return memo(`sph_${r}_${w}_${h}`, () => new THREE.SphereGeometry(r, w, h));
}
function tor(r, t, rs = 12, ts = 32) {
  return memo(`tor_${r}_${t}`, () => new THREE.TorusGeometry(r, t, rs, ts));
}
function box(w, h, d) {
  return memo(`box_${w}_${h}_${d}`, () => new THREE.BoxGeometry(w, h, d));
}
function cone(r, h, seg = 20) {
  return memo(`cone_${r}_${h}`, () => new THREE.ConeGeometry(r, h, seg));
}

/** Extrude a 2D shape with bevel for volumetric look. */
function extrude(shape, depth = 0.12, bevel = 0.03) {
  const key = 'ex_' + shape.uuid + depth + bevel;
  if (GEO[key]) return GEO[key];
  const g = new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.85,
    bevelOffset: 0, bevelSegments: 2, curveSegments: 12,
  });
  g.center();
  return (GEO[key] = g);
}
function roundedRect(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function matPair(hex) {
  return {
    main: clay(hex),
    lite: clay(shade(hex, 0.22)),
    dark: clay(shade(hex, -0.22)),
    accent: clay(shade(hex, 0.32), { roughness: 0.4, metalness: 0.22 }),
    gloss: clay(shade(hex, 0.12), { roughness: 0.35, metalness: 0.28 }),
  };
}

/* ---------- icon builders (unit size ~1) ---------- */
const BUILD = {};

BUILD.clipboard = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.72, 0.95, 0.12, 0.06), m.main));
  add(g, new THREE.Mesh(rbx(0.32, 0.16, 0.14, 0.04), m.lite)).position.set(0, 0.48, 0.02);
  // checklist lines
  for (let i = 0; i < 3; i++) {
    const y = 0.22 - i * 0.22;
    add(g, new THREE.Mesh(rbx(0.12, 0.12, 0.06, 0.03), m.accent)).position.set(-0.2, y, 0.08);
    add(g, new THREE.Mesh(rbx(0.36, 0.06, 0.05, 0.02), m.dark)).position.set(0.08, y, 0.08);
  }
  return g;
};

BUILD.speech = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.48, 0.18, 0.12), m.main)).position.y = 0.08;
  const tip = add(g, new THREE.Mesh(cone(0.14, 0.28, 16), m.main));
  tip.rotation.z = Math.PI; tip.position.set(-0.12, -0.28, 0);
  add(g, new THREE.Mesh(sph(0.05, 12, 8), m.accent)).position.set(-0.16, 0.1, 0.12);
  add(g, new THREE.Mesh(sph(0.05, 12, 8), m.accent)).position.set(0, 0.1, 0.12);
  add(g, new THREE.Mesh(sph(0.05, 12, 8), m.accent)).position.set(0.16, 0.1, 0.12);
  return g;
};

BUILD.document = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.62, 0.85, 0.1, 0.05), m.main));
  // folded corner
  add(g, new THREE.Mesh(rbx(0.18, 0.18, 0.08, 0.02), m.lite)).position.set(0.2, 0.32, 0.04);
  for (let i = 0; i < 4; i++) {
    add(g, new THREE.Mesh(rbx(0.4 - (i % 2) * 0.1, 0.05, 0.04, 0.02), m.dark)).position.set(-0.02, 0.15 - i * 0.16, 0.07);
  }
  return g;
};

BUILD.checkbadge = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.46, 0.46, 0.16, 36), m.main));
  add(g, new THREE.Mesh(cyl(0.34, 0.34, 0.1, 32), m.lite)).position.y = 0.1;
  add(g, new THREE.Mesh(cyl(0.46, 0.46, 0.05, 36), m.dark)).position.y = -0.1;
  const a = add(g, new THREE.Mesh(rbx(0.11, 0.3, 0.1, 0.03), m.accent));
  a.rotation.z = 0.55; a.position.set(-0.08, -0.02, 0.16);
  const b = add(g, new THREE.Mesh(rbx(0.11, 0.44, 0.1, 0.03), m.accent));
  b.rotation.z = -0.72; b.position.set(0.12, 0.04, 0.16);
  // ribbon tips
  add(g, new THREE.Mesh(rbx(0.12, 0.28, 0.06, 0.02), m.gloss)).position.set(-0.12, -0.48, 0);
  add(g, new THREE.Mesh(rbx(0.12, 0.28, 0.06, 0.02), m.dark)).position.set(0.12, -0.48, 0);
  return g;
};

BUILD.search = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // checklist card
  add(g, new THREE.Mesh(rbx(0.5, 0.65, 0.1, 0.04), m.lite)).position.set(-0.32, 0.02, -0.14);
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(0.08, 0.08, 0.05, 0.02), m.accent)).position.set(-0.48, 0.2 - i * 0.18, -0.06);
    add(g, new THREE.Mesh(rbx(0.28, 0.06, 0.05, 0.02), m.dark)).position.set(-0.22, 0.2 - i * 0.18, -0.06);
  }
  // magnifying glass — thick rim + long handle (unmistakable)
  add(g, new THREE.Mesh(tor(0.26, 0.11, 16, 36), m.main)).position.set(0.18, 0.16, 0.1);
  add(g, new THREE.Mesh(cyl(0.16, 0.16, 0.07, 24), m.gloss)).position.set(0.18, 0.16, 0.12);
  const handle = add(g, new THREE.Mesh(rbx(0.16, 0.62, 0.16, 0.05), m.dark));
  handle.rotation.z = -0.65; handle.position.set(0.5, -0.3, 0.1);
  add(g, new THREE.Mesh(sph(0.1, 12, 8), m.accent)).position.set(0.68, -0.52, 0.1);
  return g;
};

BUILD.magnifier = BUILD.search;

BUILD.manage = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // thick kanban board with raised columns + cards
  add(g, new THREE.Mesh(rbx(1.0, 0.78, 0.16, 0.06), m.main));
  add(g, new THREE.Mesh(rbx(1.02, 0.1, 0.18, 0.03), m.dark)).position.y = 0.4;
  for (let c = 0; c < 3; c++) {
    const x = -0.32 + c * 0.32;
    add(g, new THREE.Mesh(rbx(0.26, 0.58, 0.08, 0.03), m.dark)).position.set(x, -0.02, 0.1);
    add(g, new THREE.Mesh(rbx(0.2, 0.06, 0.06, 0.02), m.gloss)).position.set(x, 0.28, 0.16);
    for (let r = 0; r < 2; r++) {
      add(g, new THREE.Mesh(rbx(0.2, 0.14, 0.08, 0.03), r ? m.accent : m.lite)).position.set(x, 0.1 - r * 0.22, 0.18);
    }
  }
  return g;
};

BUILD.lightbulb = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.34, 28, 20), m.main)).position.y = 0.16;
  add(g, new THREE.Mesh(sph(0.18, 16, 12), m.accent)).position.set(0.12, 0.28, 0.22);
  add(g, new THREE.Mesh(cyl(0.15, 0.2, 0.2, 16), m.dark)).position.y = -0.22;
  add(g, new THREE.Mesh(rbx(0.24, 0.1, 0.16, 0.03), m.lite)).position.y = -0.36;
  add(g, new THREE.Mesh(rbx(0.18, 0.06, 0.12, 0.02), m.gloss)).position.y = -0.44;
  return g;
};

BUILD.toolbox = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.95, 0.5, 0.62, 0.08), m.main)).position.y = -0.04;
  add(g, new THREE.Mesh(rbx(1.0, 0.16, 0.66, 0.05), m.dark)).position.y = 0.26;
  const handle = add(g, new THREE.Mesh(tor(0.22, 0.06, 12, 28), m.gloss));
  handle.rotation.x = Math.PI / 2; handle.position.y = 0.46;
  add(g, new THREE.Mesh(rbx(0.18, 0.12, 0.1, 0.03), m.accent)).position.set(0, 0.16, 0.34);
  // wrench + screwdriver peeking
  const wr = add(g, new THREE.Mesh(rbx(0.1, 0.48, 0.1, 0.03), m.lite));
  wr.rotation.z = 0.4; wr.position.set(-0.26, 0.44, 0.05);
  add(g, new THREE.Mesh(rbx(0.3, 0.14, 0.16, 0.04), m.accent)).position.set(-0.38, 0.62, 0.05);
  const sd = add(g, new THREE.Mesh(cyl(0.04, 0.04, 0.42, 10), m.gloss));
  sd.rotation.z = -0.35; sd.position.set(0.22, 0.48, 0.08);
  add(g, new THREE.Mesh(rbx(0.12, 0.08, 0.08, 0.02), m.lite)).position.set(0.34, 0.64, 0.08);
  return g;
};

BUILD.building = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.85, 0.5, 0.05), m.main)).position.y = 0.05;
  // columns
  for (const x of [-0.22, 0, 0.22]) {
    add(g, new THREE.Mesh(cyl(0.06, 0.06, 0.7, 12), m.lite)).position.set(x, 0.05, 0.28);
  }
  add(g, new THREE.Mesh(rbx(0.78, 0.1, 0.55, 0.03), m.accent)).position.y = 0.52;
  // windows
  for (let row = 0; row < 2; row++) for (let col = 0; col < 2; col++) {
    add(g, new THREE.Mesh(rbx(0.14, 0.14, 0.04, 0.02), m.dark)).position.set(-0.14 + col * 0.28, 0.2 - row * 0.28, 0.26);
  }
  return g;
};

BUILD.layers = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    const mesh = add(g, new THREE.Mesh(rbx(0.75 - i * 0.08, 0.16, 0.55 - i * 0.06, 0.05), i === 1 ? m.lite : (i === 2 ? m.accent : m.main)));
    mesh.position.y = -0.22 + i * 0.22;
  }
  return g;
};

BUILD.process = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // rounded process nodes linked by beveled chevrons
  for (let i = 0; i < 3; i++) {
    const x = -0.38 + i * 0.38;
    add(g, new THREE.Mesh(cyl(0.2, 0.2, 0.22, 24), i === 1 ? m.lite : m.main)).position.set(x, 0, 0);
    add(g, new THREE.Mesh(cyl(0.12, 0.12, 0.08, 16), m.accent)).position.set(x, 0.14, 0);
  }
  for (const x of [-0.19, 0.19]) {
    const a = add(g, new THREE.Mesh(cone(0.1, 0.18, 12), m.gloss));
    a.rotation.z = -Math.PI / 2; a.position.set(x, 0.02, 0.12);
  }
  add(g, new THREE.Mesh(rbx(0.9, 0.08, 0.35, 0.03), m.dark)).position.y = -0.28;
  return g;
};

BUILD.evaluate = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // scorecard with rising bars + star
  add(g, new THREE.Mesh(rbx(0.78, 0.62, 0.14, 0.06), m.main));
  for (let i = 0; i < 4; i++) {
    const h = 0.16 + i * 0.1;
    add(g, new THREE.Mesh(rbx(0.1, h, 0.1, 0.03), i === 3 ? m.accent : m.lite)).position.set(-0.24 + i * 0.16, -0.18 + h / 2, 0.12);
  }
  add(g, new THREE.Mesh(sph(0.09, 12, 8), m.gloss)).position.set(0.28, 0.2, 0.14);
  return g;
};

BUILD.blueprint = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.85, 0.65, 0.08, 0.04), m.main));
  // grid lines
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(0.7, 0.03, 0.04, 0.01), m.dark)).position.set(0, 0.18 - i * 0.16, 0.06);
    add(g, new THREE.Mesh(rbx(0.03, 0.5, 0.04, 0.01), m.dark)).position.set(-0.22 + i * 0.22, 0, 0.06);
  }
  return g;
};

BUILD.compass = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.1, 16, 12), m.lite));
  const a = add(g, new THREE.Mesh(cone(0.1, 0.7, 16), m.main)); a.position.set(0.22, 0.22, 0); a.rotation.z = -0.7;
  const b = add(g, new THREE.Mesh(cone(0.1, 0.7, 16), m.dark)); b.position.set(-0.22, 0.22, 0); b.rotation.z = 0.7;
  return g;
};

BUILD.star = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shape = new THREE.Shape();
  for (let i = 0; i < 5; i++) {
    const a = (i * 2 * Math.PI) / 5 - Math.PI / 2;
    const b = a + Math.PI / 5;
    const r1 = 0.42, r2 = 0.18;
    const fn = i === 0 ? 'moveTo' : 'lineTo';
    shape[fn](Math.cos(a) * r1, Math.sin(a) * r1);
    shape.lineTo(Math.cos(b) * r2, Math.sin(b) * r2);
  }
  shape.closePath();
  add(g, new THREE.Mesh(extrude(shape, 0.14, 0.04), m.main));
  return g;
};

BUILD.brackets = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // < >
  const left = new THREE.Shape();
  left.moveTo(0.15, 0.4); left.lineTo(-0.25, 0); left.lineTo(0.15, -0.4); left.lineTo(0.28, -0.28); left.lineTo(-0.05, 0); left.lineTo(0.28, 0.28); left.closePath();
  const L = add(g, new THREE.Mesh(extrude(left, 0.16, 0.03), m.main)); L.position.x = -0.28;
  const right = left.clone();
  const R = add(g, new THREE.Mesh(extrude(right, 0.16, 0.03), m.lite)); R.scale.x = -1; R.position.x = 0.28;
  add(g, new THREE.Mesh(rbx(0.2, 0.1, 0.12, 0.03), m.accent)).position.y = -0.05;
  return g;
};

BUILD.code = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.8, 0.55, 0.14, 0.06), m.main));
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(0.35 + (i % 2) * 0.15, 0.07, 0.06, 0.02), m.accent)).position.set(-0.08, 0.14 - i * 0.14, 0.1);
  }
  return g;
};

BUILD.pyramid = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    const w = 0.85 - i * 0.22;
    add(g, new THREE.Mesh(rbx(w, 0.2, w * 0.7, 0.04), i === 2 ? m.accent : (i === 1 ? m.lite : m.main))).position.y = -0.28 + i * 0.24;
  }
  return g;
};

BUILD.flask = (hex) => { // legacy name; rendered as bullseye target (test techniques)
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.42, 0.42, 0.12, 32), m.main));
  add(g, new THREE.Mesh(cyl(0.3, 0.3, 0.1, 28), m.lite)).position.y = 0.06;
  add(g, new THREE.Mesh(cyl(0.16, 0.16, 0.1, 24), m.accent)).position.y = 0.1;
  add(g, new THREE.Mesh(sph(0.08, 12, 8), m.dark)).position.set(0, 0.16, 0.02);
  return g;
};
BUILD.target = BUILD.flask;

BUILD.gauge = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.42, 0.42, 0.14, 32), m.main));
  add(g, new THREE.Mesh(cyl(0.32, 0.32, 0.08, 28), m.lite)).position.y = 0.08;
  const needle = add(g, new THREE.Mesh(rbx(0.08, 0.32, 0.06, 0.02), m.accent));
  needle.position.set(0.05, 0.12, 0.12); needle.rotation.z = -0.6;
  add(g, new THREE.Mesh(sph(0.07, 12, 8), m.dark)).position.set(0, 0.08, 0.14);
  return g;
};

BUILD.server = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    const y = 0.28 - i * 0.28;
    add(g, new THREE.Mesh(rbx(0.8, 0.22, 0.45, 0.04), m.main)).position.y = y;
    add(g, new THREE.Mesh(sph(0.05, 10, 8), m.accent)).position.set(0.28, y, 0.26);
    add(g, new THREE.Mesh(rbx(0.35, 0.04, 0.04, 0.01), m.dark)).position.set(-0.1, y, 0.26);
  }
  // gear badge — operations cue
  add(g, new THREE.Mesh(cyl(0.16, 0.16, 0.1, 16), m.lite)).position.set(0.42, 0.35, 0.2);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    add(g, new THREE.Mesh(rbx(0.07, 0.12, 0.06, 0.02), m.dark)).position.set(0.42 + Math.cos(a) * 0.18, 0.35 + Math.sin(a) * 0.18, 0.22);
  }
  return g;
};

BUILD.rocket = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.18, 0.22, 0.55, 20), m.main)).position.y = 0.05;
  add(g, new THREE.Mesh(cone(0.18, 0.32, 16), m.accent)).position.y = 0.48;
  // fins
  for (const x of [-1, 1]) {
    const fin = add(g, new THREE.Mesh(rbx(0.08, 0.28, 0.22, 0.02), m.dark));
    fin.position.set(x * 0.22, -0.2, 0);
  }
  add(g, new THREE.Mesh(cone(0.12, 0.2, 12), m.lite)).position.y = -0.4; g.children[g.children.length - 1].rotation.x = Math.PI;
  return g;
};

BUILD.plan = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.75, 0.7, 0.1, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.55, 0.08, 0.06, 0.02), m.accent)).position.set(0, 0.2, 0.08);
  add(g, new THREE.Mesh(rbx(0.4, 0.08, 0.06, 0.02), m.dark)).position.set(-0.05, 0, 0.08);
  add(g, new THREE.Mesh(rbx(0.48, 0.08, 0.06, 0.02), m.lite)).position.set(0, -0.2, 0.08);
  return g;
};

BUILD.control = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.5, 0.2, 0.06), m.main));
  add(g, new THREE.Mesh(cyl(0.12, 0.12, 0.1, 16), m.accent)).position.set(-0.18, 0.05, 0.12);
  add(g, new THREE.Mesh(cyl(0.12, 0.12, 0.1, 16), m.lite)).position.set(0.18, 0.05, 0.12);
  add(g, new THREE.Mesh(rbx(0.35, 0.08, 0.08, 0.03), m.dark)).position.set(0, -0.14, 0.12);
  return g;
};

BUILD.wrench = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shaft = add(g, new THREE.Mesh(rbx(0.14, 0.75, 0.14, 0.05), m.main));
  shaft.rotation.z = 0.5;
  add(g, new THREE.Mesh(tor(0.18, 0.07, 10, 20), m.dark)).position.set(-0.28, 0.32, 0);
  add(g, new THREE.Mesh(rbx(0.28, 0.14, 0.14, 0.04), m.lite)).position.set(0.28, -0.32, 0);
  return g;
};

BUILD.keyIssues = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.48); shape.lineTo(0.48, -0.38); shape.lineTo(-0.48, -0.38); shape.closePath();
  add(g, new THREE.Mesh(extrude(shape, 0.14, 0.04), m.main));
  add(g, new THREE.Mesh(rbx(0.1, 0.28, 0.08, 0.03), m.dark)).position.set(0, 0.02, 0.12);
  add(g, new THREE.Mesh(sph(0.07, 10, 8), m.accent)).position.set(0, -0.22, 0.12);
  return g;
};

BUILD.techniques = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // crossed wrench + screwdriver
  const wr = add(g, new THREE.Mesh(rbx(0.12, 0.7, 0.12, 0.04), m.main));
  wr.rotation.z = 0.55;
  add(g, new THREE.Mesh(tor(0.14, 0.06, 10, 18), m.dark)).position.set(-0.26, 0.28, 0);
  const sd = add(g, new THREE.Mesh(cyl(0.05, 0.05, 0.65, 10), m.lite));
  sd.rotation.z = -0.55; sd.position.set(0.08, 0, 0.05);
  add(g, new THREE.Mesh(rbx(0.14, 0.12, 0.1, 0.03), m.accent)).position.set(0.32, -0.28, 0.05);
  add(g, new THREE.Mesh(cyl(0.16, 0.16, 0.1, 14), m.gloss)).position.set(0.05, 0.05, 0.18);
  return g;
};

BUILD.gitbranch = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.12, 14, 10), m.main)).position.set(0, -0.32, 0);
  add(g, new THREE.Mesh(sph(0.12, 14, 10), m.lite)).position.set(0, 0.05, 0);
  add(g, new THREE.Mesh(sph(0.12, 14, 10), m.accent)).position.set(0.28, 0.35, 0);
  add(g, new THREE.Mesh(rbx(0.08, 0.4, 0.08, 0.03), m.dark)).position.set(0, -0.14, 0);
  const branch = add(g, new THREE.Mesh(rbx(0.08, 0.35, 0.08, 0.03), m.dark));
  branch.rotation.z = -0.7; branch.position.set(0.14, 0.2, 0);
  return g;
};

BUILD.idtag = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.7, 0.1, 0.06), m.main));
  add(g, new THREE.Mesh(tor(0.08, 0.035, 8, 16), m.lite)).position.set(0, 0.4, 0.02);
  add(g, new THREE.Mesh(rbx(0.3, 0.08, 0.05, 0.02), m.accent)).position.set(0, 0.05, 0.08);
  add(g, new THREE.Mesh(rbx(0.22, 0.08, 0.05, 0.02), m.dark)).position.set(0, -0.15, 0.08);
  return g;
};

BUILD.gate = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.12, 0.12, 0.85, 16), m.dark)).position.y = 0;
  add(g, new THREE.Mesh(sph(0.14, 14, 10), clay(0xe74c3c))).position.set(0, 0.28, 0.1);
  add(g, new THREE.Mesh(sph(0.14, 14, 10), clay(0xf1c40f))).position.set(0, 0, 0.1);
  add(g, new THREE.Mesh(sph(0.14, 14, 10), clay(0x2ecc71))).position.set(0, -0.28, 0.1);
  return g;
};

BUILD.status = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.75, 0.55, 0.12, 0.05), m.main));
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(sph(0.08, 10, 8), i === 0 ? m.accent : m.lite)).position.set(-0.22 + i * 0.22, 0.08, 0.1);
    add(g, new THREE.Mesh(rbx(0.35, 0.05, 0.04, 0.02), m.dark)).position.set(0.05, -0.05 - i * 0.12, 0.1);
  }
  return g;
};

BUILD.audit = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.65, 0.8, 0.1, 0.05), m.main));
  add(g, new THREE.Mesh(tor(0.18, 0.05, 10, 20), m.accent)).position.set(0.08, -0.1, 0.1);
  const h = add(g, new THREE.Mesh(rbx(0.08, 0.25, 0.06, 0.02), m.dark));
  h.rotation.z = -0.6; h.position.set(0.28, -0.28, 0.1);
  return g;
};

BUILD.package = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.55, 0.55, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.12, 0.58, 0.58, 0.02), m.accent)).position.set(0, 0, 0);
  add(g, new THREE.Mesh(rbx(0.72, 0.12, 0.58, 0.02), m.lite)).position.y = 0.05;
  const arrow = add(g, new THREE.Mesh(cone(0.12, 0.25, 12), m.dark));
  arrow.position.set(0.45, 0.35, 0); arrow.rotation.z = -Math.PI / 2;
  return g;
};

BUILD.gantt = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.85, 0.7, 0.1, 0.05), m.main));
  const widths = [0.5, 0.35, 0.55];
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(widths[i], 0.12, 0.08, 0.03), i === 1 ? m.accent : m.lite)).position.set(-0.12 + (0.5 - widths[i]) / 2, 0.18 - i * 0.2, 0.08);
  }
  return g;
};

BUILD.scope = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(tor(0.35, 0.08, 12, 28), m.main));
  add(g, new THREE.Mesh(sph(0.14, 16, 12), m.accent));
  return g;
};

BUILD.execute = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shape = new THREE.Shape();
  shape.moveTo(-0.15, -0.35); shape.lineTo(0.4, 0); shape.lineTo(-0.15, 0.35); shape.closePath();
  add(g, new THREE.Mesh(extrude(shape, 0.16, 0.04), m.main));
  return g;
};

BUILD.review = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.55, 0.12, 0.05), m.main));
  add(g, new THREE.Mesh(sph(0.12, 12, 8), m.lite)).position.set(-0.18, 0.05, 0.1);
  add(g, new THREE.Mesh(sph(0.12, 12, 8), m.accent)).position.set(0.05, 0.05, 0.1);
  add(g, new THREE.Mesh(rbx(0.4, 0.08, 0.06, 0.02), m.dark)).position.set(0, -0.16, 0.1);
  return g;
};

BUILD.closure = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.65, 0.45, 0.35, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.7, 0.1, 0.4, 0.03), m.dark)).position.y = 0.22;
  add(g, new THREE.Mesh(tor(0.1, 0.04, 8, 14), m.accent)).position.set(0, 0.32, 0.05);
  return g;
};

BUILD.cycle = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(tor(0.35, 0.09, 12, 36), m.main));
  const a = add(g, new THREE.Mesh(cone(0.12, 0.22, 12), m.accent));
  a.position.set(0.35, 0.1, 0); a.rotation.z = -1.2;
  const b = add(g, new THREE.Mesh(cone(0.12, 0.22, 12), m.lite));
  b.position.set(-0.35, -0.1, 0); b.rotation.z = 1.9;
  return g;
};

BUILD.lifecycle = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
    add(g, new THREE.Mesh(sph(0.12, 12, 8), i % 2 ? m.accent : m.main)).position.set(Math.cos(a) * 0.32, Math.sin(a) * 0.32, 0);
  }
  add(g, new THREE.Mesh(tor(0.32, 0.04, 8, 28), m.dark));
  return g;
};

BUILD.improve = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // rising stairs
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(0.22, 0.2 + i * 0.18, 0.3, 0.04), i === 2 ? m.accent : m.main)).position.set(-0.25 + i * 0.25, -0.2 + i * 0.09, 0);
  }
  const arrow = add(g, new THREE.Mesh(cone(0.1, 0.22, 12), m.lite));
  arrow.position.set(0.35, 0.35, 0); arrow.rotation.z = -0.5;
  return g;
};

BUILD.model = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.35, 0.28, 0.18, 0.05), m.main)).position.set(0, 0.28, 0);
  add(g, new THREE.Mesh(rbx(0.3, 0.25, 0.16, 0.04), m.lite)).position.set(-0.28, -0.2, 0);
  add(g, new THREE.Mesh(rbx(0.3, 0.25, 0.16, 0.04), m.accent)).position.set(0.28, -0.2, 0);
  add(g, new THREE.Mesh(rbx(0.06, 0.25, 0.06, 0.02), m.dark)).position.set(-0.14, 0.05, 0);
  add(g, new THREE.Mesh(rbx(0.06, 0.25, 0.06, 0.02), m.dark)).position.set(0.14, 0.05, 0);
  return g;
};

BUILD.uml = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // two class boxes + connector — models & methods
  add(g, new THREE.Mesh(rbx(0.48, 0.4, 0.16, 0.04), m.main)).position.set(-0.22, 0.18, 0);
  add(g, new THREE.Mesh(rbx(0.48, 0.12, 0.1, 0.02), m.accent)).position.set(-0.22, 0.32, 0.1);
  add(g, new THREE.Mesh(rbx(0.48, 0.4, 0.16, 0.04), m.lite)).position.set(0.22, -0.18, 0);
  add(g, new THREE.Mesh(rbx(0.48, 0.12, 0.1, 0.02), m.accent)).position.set(0.22, -0.04, 0.1);
  add(g, new THREE.Mesh(rbx(0.08, 0.28, 0.08, 0.02), m.dark)).position.set(0, 0, 0);
  return g;
};

BUILD.methods = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.2, 0.2, 0.05), m.main)).position.y = 0.25;
  add(g, new THREE.Mesh(rbx(0.55, 0.2, 0.2, 0.05), m.lite));
  add(g, new THREE.Mesh(rbx(0.4, 0.2, 0.2, 0.05), m.accent)).position.y = -0.25;
  return g;
};

BUILD.medal = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.32, 0.32, 0.14, 28), m.main)).position.y = -0.1;
  add(g, new THREE.Mesh(cyl(0.22, 0.22, 0.08, 24), m.accent)).position.y = -0.02;
  // ribbon
  add(g, new THREE.Mesh(rbx(0.14, 0.4, 0.08, 0.02), m.lite)).position.set(-0.1, 0.35, 0);
  add(g, new THREE.Mesh(rbx(0.14, 0.4, 0.08, 0.02), m.dark)).position.set(0.1, 0.35, 0);
  return g;
};

BUILD.shield = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.45); shape.lineTo(0.38, 0.28); shape.lineTo(0.35, -0.1);
  shape.quadraticCurveTo(0.3, -0.4, 0, -0.5); shape.quadraticCurveTo(-0.3, -0.4, -0.35, -0.1);
  shape.lineTo(-0.38, 0.28); shape.closePath();
  add(g, new THREE.Mesh(extrude(shape, 0.16, 0.04), m.main));
  add(g, new THREE.Mesh(sph(0.1, 12, 8), m.dark)).position.set(0, 0.05, 0.12);
  add(g, new THREE.Mesh(rbx(0.06, 0.16, 0.06, 0.02), m.dark)).position.set(0, -0.1, 0.12);
  return g;
};

BUILD.lock = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.45, 0.35, 0.06), m.main)).position.y = -0.12;
  const shackle = add(g, new THREE.Mesh(tor(0.18, 0.07, 10, 20), m.dark));
  shackle.position.y = 0.2;
  add(g, new THREE.Mesh(cyl(0.07, 0.07, 0.12, 12), m.accent)).position.set(0, -0.05, 0.2);
  return g;
};

BUILD.org = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.42); shape.lineTo(0.32, 0.26); shape.lineTo(0.28, -0.05);
  shape.quadraticCurveTo(0.22, -0.32, 0, -0.4); shape.quadraticCurveTo(-0.22, -0.32, -0.28, -0.05);
  shape.lineTo(-0.32, 0.26); shape.closePath();
  add(g, new THREE.Mesh(extrude(shape, 0.12, 0.03), m.main)).position.y = 0.08;
  add(g, new THREE.Mesh(sph(0.1, 12, 8), m.accent)).position.set(0, 0.18, 0.12);
  add(g, new THREE.Mesh(rbx(0.22, 0.16, 0.1, 0.03), m.lite)).position.set(0, -0.02, 0.12);
  add(g, new THREE.Mesh(sph(0.09, 10, 8), m.dark)).position.set(-0.28, -0.28, 0.05);
  add(g, new THREE.Mesh(sph(0.09, 10, 8), m.dark)).position.set(0.28, -0.28, 0.05);
  return g;
};

BUILD.domain = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.38, 28, 20), m.main));
  add(g, new THREE.Mesh(tor(0.4, 0.03, 8, 32), m.dark)).rotation.x = Math.PI / 2;
  add(g, new THREE.Mesh(tor(0.4, 0.03, 8, 32), m.lite)).rotation.y = Math.PI / 2;
  // lock badge
  add(g, new THREE.Mesh(rbx(0.28, 0.22, 0.16, 0.04), m.accent)).position.set(0.28, -0.22, 0.28);
  add(g, new THREE.Mesh(tor(0.1, 0.04, 8, 16), m.dark)).position.set(0.28, -0.05, 0.28);
  return g;
};

BUILD.handshake = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.35, 0.2, 0.25, 0.06), m.main)).position.set(-0.2, 0, 0);
  add(g, new THREE.Mesh(rbx(0.35, 0.2, 0.25, 0.06), m.lite)).position.set(0.2, 0, 0);
  add(g, new THREE.Mesh(rbx(0.55, 0.18, 0.28, 0.06), m.accent)).position.set(0, 0.02, 0.05);
  return g;
};

BUILD.certificate = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.55, 0.1, 0.04), m.main));
  add(g, new THREE.Mesh(cyl(0.12, 0.12, 0.08, 20), m.accent)).position.set(0, -0.05, 0.08);
  add(g, new THREE.Mesh(rbx(0.4, 0.06, 0.05, 0.02), m.dark)).position.set(0, 0.15, 0.08);
  return g;
};

BUILD.people = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (const [x, mat] of [[-0.25, m.main], [0, m.accent], [0.25, m.lite]]) {
    add(g, new THREE.Mesh(sph(0.12, 12, 8), mat)).position.set(x, 0.22, 0);
    add(g, new THREE.Mesh(rbx(0.2, 0.3, 0.16, 0.06), mat)).position.set(x, -0.08, 0);
  }
  return g;
};

BUILD.chat = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.35, 0.16, 0.1), m.main)).position.set(-0.1, 0.12, 0);
  add(g, new THREE.Mesh(rbx(0.5, 0.32, 0.14, 0.1), m.lite)).position.set(0.15, -0.18, 0.05);
  return g;
};

BUILD.coins = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(cyl(0.28 - i * 0.02, 0.28 - i * 0.02, 0.1, 28), i === 2 ? m.accent : m.main)).position.y = -0.2 + i * 0.12;
  }
  // tiny bar
  add(g, new THREE.Mesh(rbx(0.1, 0.25, 0.1, 0.02), m.lite)).position.set(0.4, -0.1, 0);
  add(g, new THREE.Mesh(rbx(0.1, 0.4, 0.1, 0.02), m.dark)).position.set(0.55, -0.02, 0);
  return g;
};

BUILD.decide = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shape = new THREE.Shape();
  shape.moveTo(0, 0.45); shape.lineTo(0.4, 0); shape.lineTo(0, -0.45); shape.lineTo(-0.4, 0); shape.closePath();
  add(g, new THREE.Mesh(extrude(shape, 0.14, 0.04), m.main));
  return g;
};

BUILD.profit = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(0.18, 0.25 + i * 0.18, 0.18, 0.04), i === 2 ? m.accent : m.main)).position.set(-0.25 + i * 0.25, -0.15 + i * 0.09, 0);
  }
  return g;
};

BUILD.nonprofit = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // heart-ish via two spheres + cone
  add(g, new THREE.Mesh(sph(0.22, 16, 12), m.main)).position.set(-0.14, 0.12, 0);
  add(g, new THREE.Mesh(sph(0.22, 16, 12), m.main)).position.set(0.14, 0.12, 0);
  const tip = add(g, new THREE.Mesh(cone(0.32, 0.45, 16), m.lite));
  tip.rotation.x = Math.PI; tip.position.y = -0.15;
  return g;
};

BUILD.present = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.12, 0.4, 0.03), m.dark)).position.y = -0.2;
  add(g, new THREE.Mesh(sph(0.2, 16, 12), m.accent)).position.set(-0.1, 0.05, 0);
  add(g, new THREE.Mesh(rbx(0.12, 0.35, 0.12, 0.03), m.lite)).position.set(0.2, 0.05, 0);
  return g;
};

BUILD.multiattr = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    add(g, new THREE.Mesh(rbx(0.28, 0.2, 0.16, 0.04), i === 0 ? m.accent : m.main)).position.set(Math.cos(a) * 0.28, Math.sin(a) * 0.28, 0);
  }
  return g;
};

BUILD.intangible = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // diamond / gem — intangible asset
  const top = add(g, new THREE.Mesh(cone(0.38, 0.28, 6), m.main));
  top.position.y = 0.22;
  const bot = add(g, new THREE.Mesh(cone(0.38, 0.5, 6), m.lite));
  bot.rotation.x = Math.PI; bot.position.y = -0.08;
  add(g, new THREE.Mesh(sph(0.1, 12, 8), m.accent)).position.set(0.12, 0.1, 0.22);
  return g;
};

BUILD.calculator = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.75, 0.12, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.4, 0.16, 0.06, 0.02), m.lite)).position.set(0, 0.22, 0.08);
  for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
    add(g, new THREE.Mesh(rbx(0.1, 0.1, 0.05, 0.02), m.accent)).position.set(-0.15 + c * 0.15, 0.02 - r * 0.16, 0.08);
  }
  return g;
};

BUILD.related = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const a = add(g, new THREE.Mesh(tor(0.2, 0.07, 12, 24), m.main));
  a.rotation.y = 0.4; a.position.set(-0.18, 0, 0);
  const b = add(g, new THREE.Mesh(tor(0.2, 0.07, 12, 24), m.accent));
  b.rotation.y = -0.4; b.position.set(0.18, 0, 0);
  add(g, new THREE.Mesh(sph(0.08, 10, 8), m.lite)).position.set(0, 0.05, 0.12);
  return g;
};

BUILD.chip = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.55, 0.14, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.3, 0.3, 0.1, 0.03), m.accent)).position.y = 0.02;
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    add(g, new THREE.Mesh(rbx(0.08, 0.2, 0.05, 0.01), m.dark)).position.set(Math.cos(a) * 0.38, Math.sin(a) * 0.38, 0);
  }
  return g;
};

BUILD.cpu = BUILD.chip;

BUILD.system = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.2, 0.4, 0.04), m.main)).position.y = -0.25;
  add(g, new THREE.Mesh(rbx(0.5, 0.45, 0.12, 0.04), m.lite)).position.y = 0.1;
  add(g, new THREE.Mesh(rbx(0.55, 0.08, 0.08, 0.02), m.accent)).position.y = 0.38;
  return g;
};

BUILD.tree = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.12, 12, 8), m.accent)).position.set(0, 0.35, 0);
  add(g, new THREE.Mesh(sph(0.1, 10, 8), m.main)).position.set(-0.25, 0, 0);
  add(g, new THREE.Mesh(sph(0.1, 10, 8), m.lite)).position.set(0.25, 0, 0);
  add(g, new THREE.Mesh(sph(0.1, 10, 8), m.main)).position.set(-0.35, -0.35, 0);
  add(g, new THREE.Mesh(sph(0.1, 10, 8), m.lite)).position.set(-0.15, -0.35, 0);
  add(g, new THREE.Mesh(rbx(0.06, 0.35, 0.06, 0.02), m.dark)).position.set(0, 0.15, 0);
  add(g, new THREE.Mesh(rbx(0.5, 0.06, 0.06, 0.02), m.dark)).position.set(0, 0, 0);
  return g;
};

BUILD.window = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.8, 0.55, 0.1, 0.04), m.main));
  add(g, new THREE.Mesh(rbx(0.8, 0.12, 0.12, 0.03), m.dark)).position.y = 0.22;
  add(g, new THREE.Mesh(sph(0.05, 8, 6), m.accent)).position.set(0.28, 0.22, 0.08);
  add(g, new THREE.Mesh(rbx(0.55, 0.08, 0.04, 0.01), m.lite)).position.set(-0.05, 0, 0.08);
  add(g, new THREE.Mesh(rbx(0.4, 0.08, 0.04, 0.01), m.lite)).position.set(-0.1, -0.14, 0.08);
  return g;
};

BUILD.database = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.32, 0.32, 0.55, 28), m.main));
  add(g, new THREE.Mesh(cyl(0.32, 0.32, 0.08, 28), m.lite)).position.y = 0.28;
  add(g, new THREE.Mesh(cyl(0.32, 0.32, 0.08, 28), m.accent)).position.y = -0.28;
  return g;
};

BUILD.network = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const pts = [[0, 0.3], [-0.32, -0.15], [0.32, -0.15], [0, -0.35]];
  pts.forEach((p, i) => add(g, new THREE.Mesh(sph(0.1, 10, 8), i === 0 ? m.accent : m.main)).position.set(p[0], p[1], 0));
  [[0, 1], [0, 2], [1, 3], [2, 3]].forEach(([a, b]) => {
    const dx = pts[b][0] - pts[a][0], dy = pts[b][1] - pts[a][1];
    const len = Math.hypot(dx, dy);
    const bar = add(g, new THREE.Mesh(rbx(0.05, len, 0.05, 0.02), m.dark));
    bar.position.set((pts[a][0] + pts[b][0]) / 2, (pts[a][1] + pts[b][1]) / 2, 0);
    bar.rotation.z = Math.atan2(dx, dy);
  });
  return g;
};

BUILD.human = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.18, 16, 12), m.main)).position.y = 0.28;
  add(g, new THREE.Mesh(rbx(0.4, 0.4, 0.25, 0.1), m.lite)).position.y = -0.1;
  return g;
};

BUILD.neural = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const cols = [[-0.3, [-0.2, 0.2]], [0, [-0.3, 0, 0.3]], [0.3, [-0.2, 0.2]]];
  cols.forEach((col, ci) => col[1].forEach(y => {
    add(g, new THREE.Mesh(sph(0.08, 10, 8), ci === 1 ? m.accent : m.main)).position.set(col[0], y, 0);
  }));
  return g;
};

BUILD.sigma = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // Σ-like from boxes
  add(g, new THREE.Mesh(rbx(0.55, 0.12, 0.16, 0.03), m.main)).position.y = 0.32;
  add(g, new THREE.Mesh(rbx(0.55, 0.12, 0.16, 0.03), m.main)).position.y = -0.32;
  const mid = add(g, new THREE.Mesh(rbx(0.14, 0.55, 0.16, 0.03), m.lite));
  mid.rotation.z = 0.5; mid.position.set(0.05, 0, 0);
  return g;
};

BUILD.logic = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.5, 0.35, 0.2, 0.05), m.main));
  add(g, new THREE.Mesh(cyl(0.08, 0.08, 0.2, 12), m.dark)).position.set(-0.35, 0.08, 0);
  add(g, new THREE.Mesh(cyl(0.08, 0.08, 0.2, 12), m.dark)).position.set(-0.35, -0.08, 0);
  add(g, new THREE.Mesh(cyl(0.08, 0.08, 0.25, 12), m.accent)).position.set(0.4, 0, 0);
  return g;
};

BUILD.proof = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.6, 0.75, 0.1, 0.04), m.main));
  // QED square
  add(g, new THREE.Mesh(rbx(0.14, 0.14, 0.08, 0.02), m.accent)).position.set(0.15, -0.22, 0.08);
  for (let i = 0; i < 3; i++) add(g, new THREE.Mesh(rbx(0.4, 0.05, 0.04, 0.01), m.dark)).position.set(0, 0.22 - i * 0.14, 0.08);
  return g;
};

BUILD.set = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(tor(0.28, 0.08, 12, 28), m.main)).position.x = -0.12;
  add(g, new THREE.Mesh(tor(0.28, 0.08, 12, 28), m.lite)).position.x = 0.12;
  return g;
};

BUILD.fsm = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.2, 0.2, 0.12, 24), m.main)).position.set(-0.28, 0, 0);
  add(g, new THREE.Mesh(cyl(0.2, 0.2, 0.12, 24), m.accent)).position.set(0.28, 0, 0);
  const arrow = add(g, new THREE.Mesh(cone(0.1, 0.22, 12), m.dark));
  arrow.rotation.z = -Math.PI / 2; arrow.position.set(0, 0.08, 0);
  return g;
};

BUILD.grammar = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.2, 0.55, 0.14, 0.04), m.main)).position.set(-0.25, 0, 0);
  add(g, new THREE.Mesh(rbx(0.2, 0.55, 0.14, 0.04), m.main)).position.set(0.25, 0, 0);
  add(g, new THREE.Mesh(rbx(0.35, 0.12, 0.14, 0.03), m.accent)).position.y = 0.2;
  add(g, new THREE.Mesh(rbx(0.35, 0.12, 0.14, 0.03), m.lite)).position.y = -0.2;
  return g;
};

BUILD.hash = (hex) => { // number theory — prime blocks
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.28, 0.42, 0.22, 0.05), m.main)).position.set(-0.28, 0, 0);
  add(g, new THREE.Mesh(rbx(0.28, 0.55, 0.22, 0.05), m.lite)).position.set(0, 0.05, 0);
  add(g, new THREE.Mesh(rbx(0.28, 0.68, 0.22, 0.05), m.accent)).position.set(0.28, 0.1, 0);
  add(g, new THREE.Mesh(sph(0.07, 10, 8), m.dark)).position.set(-0.28, 0.28, 0.14);
  add(g, new THREE.Mesh(sph(0.07, 10, 8), m.dark)).position.set(0, 0.38, 0.14);
  add(g, new THREE.Mesh(sph(0.07, 10, 8), m.dark)).position.set(0.28, 0.48, 0.14);
  return g;
};
BUILD.primes = BUILD.hash;

BUILD.count = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(0.18, 0.18, 0.18, 0.04), i === 2 ? m.accent : m.main)).position.set(-0.25 + i * 0.25, 0, 0);
  }
  return g;
};

BUILD.dice = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.55, 0.55, 0.08), m.main));
  const dots = [[0, 0], [-0.15, 0.15], [0.15, -0.15]];
  dots.forEach(d => add(g, new THREE.Mesh(sph(0.06, 8, 6), m.dark)).position.set(d[0], d[1], 0.3));
  return g;
};

BUILD.precision = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.12, 0.12, 0.03), m.main));
  add(g, new THREE.Mesh(rbx(0.12, 0.12, 0.12, 0.03), m.accent)).position.x = -0.2;
  add(g, new THREE.Mesh(rbx(0.08, 0.25, 0.08, 0.02), m.dark)).position.set(0.25, 0.1, 0);
  return g;
};

BUILD.algebra = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.5, 0.12, 0.12, 0.03), m.main));
  add(g, new THREE.Mesh(rbx(0.12, 0.5, 0.12, 0.03), m.main));
  add(g, new THREE.Mesh(rbx(0.35, 0.1, 0.1, 0.03), m.accent)).position.y = -0.35;
  return g;
};

BUILD.calculus = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  // integral-like curve approximated with torus segment feel via boxes on curve
  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    const y = -0.35 + t * 0.7;
    const x = Math.sin(t * Math.PI) * 0.2;
    add(g, new THREE.Mesh(sph(0.09, 10, 8), i === 2 ? m.accent : m.main)).position.set(x, y, 0);
  }
  return g;
};

BUILD.newAdv = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.2, 16, 12), m.accent)).position.y = 0.15;
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    add(g, new THREE.Mesh(rbx(0.06, 0.25, 0.06, 0.02), m.main)).position.set(Math.cos(a) * 0.15, 0.35, Math.sin(a) * 0.15);
  }
  add(g, new THREE.Mesh(rbx(0.35, 0.2, 0.2, 0.05), m.lite)).position.y = -0.25;
  return g;
};

BUILD.ruler = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const r = add(g, new THREE.Mesh(rbx(0.9, 0.22, 0.1, 0.03), m.main));
  r.rotation.z = -0.3;
  for (let i = 0; i < 5; i++) {
    add(g, new THREE.Mesh(rbx(0.03, 0.1, 0.04, 0.01), m.dark)).position.set(-0.3 + i * 0.15, 0.05 - i * 0.04, 0.06);
  }
  add(g, new THREE.Mesh(cyl(0.2, 0.2, 0.1, 20), m.accent)).position.set(0.15, -0.25, 0);
  return g;
};

BUILD.abstract = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.7, 0.7, 0.08), m.main));
  add(g, new THREE.Mesh(rbx(0.42, 0.42, 0.42, 0.06), m.lite)).position.set(0, 0, 0.08);
  add(g, new THREE.Mesh(rbx(0.22, 0.22, 0.22, 0.04), m.accent)).position.set(0, 0, 0.16);
  return g;
};

BUILD.experiment = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.15, 0.15, 0.5, 16), m.lite)).position.set(-0.2, 0, 0);
  add(g, new THREE.Mesh(cone(0.22, 0.4, 16), m.main)).position.set(0.2, -0.05, 0);
  add(g, new THREE.Mesh(sph(0.08, 10, 8), m.accent)).position.set(0.2, -0.1, 0.15);
  return g;
};

BUILD.stats = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const hs = [0.3, 0.5, 0.4, 0.65];
  hs.forEach((h, i) => add(g, new THREE.Mesh(rbx(0.14, h, 0.14, 0.03), i === 3 ? m.accent : m.main)).position.set(-0.3 + i * 0.2, -0.35 + h / 2, 0));
  return g;
};

BUILD.sim = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.15, 0.5, 0.04), m.dark)).position.y = -0.25;
  add(g, new THREE.Mesh(sph(0.2, 16, 12), m.main)).position.y = 0.05;
  add(g, new THREE.Mesh(rbx(0.15, 0.35, 0.15, 0.03), m.accent)).position.set(0.3, 0.05, 0);
  return g;
};

BUILD.fishbone = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.85, 0.1, 0.1, 0.03), m.main));
  for (let i = 0; i < 3; i++) {
    const x = -0.2 + i * 0.25;
    const a = add(g, new THREE.Mesh(rbx(0.08, 0.35, 0.08, 0.02), m.lite)); a.position.set(x, 0.15, 0); a.rotation.z = 0.5;
    const b = add(g, new THREE.Mesh(rbx(0.08, 0.35, 0.08, 0.02), m.accent)); b.position.set(x, -0.15, 0); b.rotation.z = -0.5;
  }
  add(g, new THREE.Mesh(sph(0.12, 12, 8), m.dark)).position.set(0.42, 0, 0);
  return g;
};

BUILD.industry = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.35, 0.4, 0.04), m.main)).position.y = -0.15;
  add(g, new THREE.Mesh(cyl(0.1, 0.12, 0.45, 14), m.dark)).position.set(-0.2, 0.25, 0);
  add(g, new THREE.Mesh(cyl(0.1, 0.12, 0.55, 14), m.lite)).position.set(0.15, 0.3, 0);
  add(g, new THREE.Mesh(sph(0.08, 10, 8), m.accent)).position.set(0.15, 0.55, 0);
  return g;
};

BUILD.core = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.35, 32, 24), m.main));
  add(g, new THREE.Mesh(tor(0.42, 0.05, 10, 32), m.accent)).rotation.x = Math.PI / 2.5;
  add(g, new THREE.Mesh(tor(0.48, 0.04, 10, 32), m.lite)).rotation.x = Math.PI / 1.7;
  return g;
};


/* --- topic-specific refined icons (avoid generic repeats) --- */
BUILD.kanban = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.95, 0.72, 0.14, 0.05), m.main));
  for (let c = 0; c < 3; c++) {
    const x = -0.3 + c * 0.3;
    add(g, new THREE.Mesh(rbx(0.24, 0.08, 0.06, 0.02), m.dark)).position.set(x, 0.28, 0.1);
    const cards = c === 0 ? 3 : (c === 1 ? 2 : 1);
    for (let r = 0; r < cards; r++) {
      add(g, new THREE.Mesh(rbx(0.2, 0.12, 0.07, 0.03), r === 0 ? m.accent : m.lite)).position.set(x, 0.12 - r * 0.18, 0.14);
    }
  }
  return g;
};

BUILD.scorecard = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.82, 0.7, 0.14, 0.06), m.main));
  for (let i = 0; i < 5; i++) {
    const h = 0.14 + i * 0.08;
    add(g, new THREE.Mesh(rbx(0.09, h, 0.1, 0.03), i >= 3 ? m.accent : m.lite)).position.set(-0.28 + i * 0.14, -0.22 + h / 2, 0.12);
  }
  // trophy star
  add(g, new THREE.Mesh(sph(0.1, 12, 8), m.gloss)).position.set(0.3, 0.22, 0.16);
  return g;
};

BUILD.radar = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.45, 0.45, 0.1, 36), m.main));
  add(g, new THREE.Mesh(cyl(0.32, 0.32, 0.06, 28), m.lite)).position.y = 0.08;
  add(g, new THREE.Mesh(cyl(0.18, 0.18, 0.05, 20), m.dark)).position.y = 0.12;
  const sweep = add(g, new THREE.Mesh(rbx(0.06, 0.38, 0.05, 0.02), m.accent));
  sweep.position.set(0.1, 0.14, 0.12); sweep.rotation.z = -0.9;
  add(g, new THREE.Mesh(sph(0.06, 10, 8), m.gloss)).position.set(0, 0.14, 0.14);
  return g;
};

BUILD.loop = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(tor(0.32, 0.1, 14, 40), m.main));
  add(g, new THREE.Mesh(tor(0.32, 0.04, 10, 32), m.lite)).position.y = 0.06;
  const a = add(g, new THREE.Mesh(cone(0.14, 0.26, 14), m.accent));
  a.position.set(0.32, 0.18, 0.05); a.rotation.z = -1.1;
  const b = add(g, new THREE.Mesh(cone(0.12, 0.22, 12), m.gloss));
  b.position.set(-0.3, -0.16, 0.05); b.rotation.z = 2.0;
  return g;
};

BUILD.specdoc = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.68, 0.88, 0.12, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.22, 0.22, 0.08, 0.02), m.lite)).position.set(0.2, 0.3, 0.05);
  // title bar + numbered lines
  add(g, new THREE.Mesh(rbx(0.48, 0.1, 0.05, 0.02), m.accent)).position.set(-0.02, 0.22, 0.09);
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(sph(0.05, 8, 6), m.gloss)).position.set(-0.22, 0.02 - i * 0.18, 0.1);
    add(g, new THREE.Mesh(rbx(0.38, 0.05, 0.04, 0.02), m.dark)).position.set(0.06, 0.02 - i * 0.18, 0.1);
  }
  return g;
};

BUILD.seal = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.42, 0.42, 0.18, 32), m.main));
  add(g, new THREE.Mesh(cyl(0.28, 0.28, 0.1, 24), m.lite)).position.y = 0.12;
  // check mark
  const a = add(g, new THREE.Mesh(rbx(0.1, 0.26, 0.1, 0.03), m.accent));
  a.rotation.z = 0.6; a.position.set(-0.08, 0.02, 0.18);
  const b = add(g, new THREE.Mesh(rbx(0.1, 0.4, 0.1, 0.03), m.accent));
  b.rotation.z = -0.7; b.position.set(0.1, 0.08, 0.18);
  return g;
};

BUILD.journal = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.75, 0.35, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.08, 0.75, 0.38, 0.02), m.dark)).position.x = -0.28;
  add(g, new THREE.Mesh(rbx(0.4, 0.06, 0.04, 0.02), m.accent)).position.set(0.02, 0.2, 0.2);
  add(g, new THREE.Mesh(rbx(0.35, 0.05, 0.04, 0.02), m.lite)).position.set(0.02, 0.05, 0.2);
  add(g, new THREE.Mesh(rbx(0.3, 0.05, 0.04, 0.02), m.dark)).position.set(0.02, -0.1, 0.2);
  return g;
};

BUILD.mallet = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shaft = add(g, new THREE.Mesh(cyl(0.06, 0.06, 0.72, 12), m.dark));
  shaft.rotation.z = 0.5;
  add(g, new THREE.Mesh(rbx(0.48, 0.26, 0.26, 0.06), m.main)).position.set(-0.3, 0.28, 0);
  add(g, new THREE.Mesh(rbx(0.16, 0.16, 0.16, 0.04), m.accent)).position.set(0.28, -0.26, 0);
  return g;
};

BUILD.schematic = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.88, 0.7, 0.1, 0.04), m.main));
  // floor plan rooms
  add(g, new THREE.Mesh(rbx(0.3, 0.28, 0.08, 0.02), m.lite)).position.set(-0.2, 0.1, 0.08);
  add(g, new THREE.Mesh(rbx(0.3, 0.28, 0.08, 0.02), m.accent)).position.set(0.2, 0.1, 0.08);
  add(g, new THREE.Mesh(rbx(0.55, 0.2, 0.08, 0.02), m.dark)).position.set(0, -0.2, 0.08);
  return g;
};

BUILD.brackets2 = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (const s of [-1, 1]) {
    add(g, new THREE.Mesh(rbx(0.12, 0.7, 0.16, 0.04), m.main)).position.set(s * 0.32, 0, 0);
    add(g, new THREE.Mesh(rbx(0.22, 0.12, 0.16, 0.04), m.lite)).position.set(s * 0.22, 0.3, 0);
    add(g, new THREE.Mesh(rbx(0.22, 0.12, 0.16, 0.04), m.dark)).position.set(s * 0.22, -0.3, 0);
  }
  add(g, new THREE.Mesh(rbx(0.2, 0.08, 0.1, 0.03), m.accent)).position.set(0, 0.05, 0.08);
  add(g, new THREE.Mesh(rbx(0.08, 0.08, 0.1, 0.03), m.gloss)).position.set(0.16, -0.1, 0.08);
  return g;
};

BUILD.brain = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.32, 24, 16), m.main));
  add(g, new THREE.Mesh(sph(0.28, 20, 14), m.lite)).position.set(0.12, 0.05, 0.1);
  add(g, new THREE.Mesh(sph(0.26, 18, 12), m.dark)).position.set(-0.12, 0.02, -0.05);
  for (const [x, y] of [[0.2, 0.2], [-0.15, 0.25], [0.05, -0.1]]) {
    add(g, new THREE.Mesh(sph(0.06, 8, 6), m.accent)).position.set(x, y, 0.28);
  }
  return g;
};

BUILD.diploma = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.85, 0.6, 0.08, 0.03), m.main));
  add(g, new THREE.Mesh(rbx(0.7, 0.08, 0.05, 0.02), m.accent)).position.set(0, 0.15, 0.06);
  add(g, new THREE.Mesh(rbx(0.5, 0.05, 0.04, 0.02), m.dark)).position.set(0, 0, 0.06);
  add(g, new THREE.Mesh(cyl(0.1, 0.1, 0.08, 16), m.gloss)).position.set(0.28, -0.15, 0.08);
  add(g, new THREE.Mesh(rbx(0.06, 0.22, 0.04, 0.01), m.lite)).position.set(0.28, -0.3, 0.06);
  return g;
};

BUILD.bintree = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const nodes = [[0, 0.35, m.accent, 0.14], [-0.28, 0.05, m.main, 0.12], [0.28, 0.05, m.main, 0.12],
    [-0.42, -0.28, m.lite, 0.1], [-0.14, -0.28, m.lite, 0.1], [0.14, -0.28, m.dark, 0.1], [0.42, -0.28, m.dark, 0.1]];
  for (const [x, y, mat, r] of nodes) add(g, new THREE.Mesh(sph(r, 12, 8), mat)).position.set(x, y, 0);
  const links = [[0, 0.35, -0.28, 0.05], [0, 0.35, 0.28, 0.05], [-0.28, 0.05, -0.42, -0.28],
    [-0.28, 0.05, -0.14, -0.28], [0.28, 0.05, 0.14, -0.28], [0.28, 0.05, 0.42, -0.28]];
  for (const [x0, y0, x1, y1] of links) {
    const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy);
    const bar = add(g, new THREE.Mesh(rbx(0.04, len, 0.04, 0.01), m.dark), false);
    bar.position.set((x0 + x1) / 2, (y0 + y1) / 2, -0.05);
    bar.rotation.z = Math.atan2(dy, dx) - Math.PI / 2;
  }
  return g;
};

BUILD.loupe = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(tor(0.3, 0.09, 14, 32), m.main)).position.set(-0.08, 0.1, 0);
  add(g, new THREE.Mesh(cyl(0.22, 0.22, 0.08, 24), m.lite)).position.set(-0.08, 0.1, 0.02);
  const handle = add(g, new THREE.Mesh(rbx(0.14, 0.48, 0.14, 0.05), m.dark));
  handle.rotation.z = -0.75; handle.position.set(0.32, -0.3, 0);
  add(g, new THREE.Mesh(sph(0.07, 10, 8), m.accent)).position.set(0.02, 0.18, 0.12);
  return g;
};



BUILD.hammer = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shaft = add(g, new THREE.Mesh(rbx(0.12, 0.78, 0.12, 0.04), m.dark));
  shaft.rotation.z = 0.55;
  add(g, new THREE.Mesh(rbx(0.42, 0.22, 0.22, 0.05), m.main)).position.set(-0.28, 0.3, 0);
  add(g, new THREE.Mesh(rbx(0.18, 0.14, 0.14, 0.03), m.accent)).position.set(0.32, -0.28, 0);
  return g;
};

BUILD.bug = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.28, 20, 14), m.main)).position.y = 0.02;
  add(g, new THREE.Mesh(sph(0.16, 14, 10), m.lite)).position.set(0, 0.28, 0.05);
  for (const s of [-1, 1]) {
    const leg = add(g, new THREE.Mesh(rbx(0.06, 0.28, 0.06, 0.02), m.dark));
    leg.position.set(s * 0.32, -0.05, 0); leg.rotation.z = s * 0.5;
    add(g, new THREE.Mesh(rbx(0.05, 0.22, 0.05, 0.02), m.dark)).position.set(s * 0.22, 0.15, 0.15);
  }
  add(g, new THREE.Mesh(sph(0.05, 8, 6), m.accent)).position.set(-0.08, 0.32, 0.14);
  add(g, new THREE.Mesh(sph(0.05, 8, 6), m.accent)).position.set(0.08, 0.32, 0.14);
  return g;
};

BUILD.terminal = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.9, 0.62, 0.16, 0.06), m.main));
  add(g, new THREE.Mesh(rbx(0.78, 0.42, 0.06, 0.03), m.dark)).position.set(0, 0.02, 0.1);
  // prompt >
  const chev = add(g, new THREE.Mesh(cone(0.08, 0.16, 10), m.accent));
  chev.rotation.z = -Math.PI / 2; chev.position.set(-0.22, 0.05, 0.16);
  add(g, new THREE.Mesh(rbx(0.28, 0.06, 0.05, 0.02), m.lite)).position.set(0.05, 0.05, 0.16);
  add(g, new THREE.Mesh(rbx(0.18, 0.06, 0.05, 0.02), m.gloss)).position.set(-0.05, -0.12, 0.16);
  return g;
};

BUILD.recycle = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI * 2) / 3;
    const arrow = add(g, new THREE.Mesh(rbx(0.18, 0.42, 0.12, 0.04), i === 0 ? m.main : (i === 1 ? m.lite : m.accent)));
    arrow.position.set(Math.cos(a) * 0.22, Math.sin(a) * 0.22, 0);
    arrow.rotation.z = a + Math.PI / 2;
    const tip = add(g, new THREE.Mesh(cone(0.12, 0.2, 10), m.gloss));
    tip.position.set(Math.cos(a + 0.7) * 0.38, Math.sin(a + 0.7) * 0.38, 0.04);
    tip.rotation.z = a + 0.7 + Math.PI / 2;
  }
  return g;
};

BUILD.folders = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.12, 0.5, 0.04), m.dark)).position.set(0.05, -0.18, -0.05);
  add(g, new THREE.Mesh(rbx(0.75, 0.45, 0.55, 0.05), m.main)).position.y = -0.02;
  add(g, new THREE.Mesh(rbx(0.28, 0.1, 0.55, 0.03), m.lite)).position.set(-0.18, 0.22, 0);
  add(g, new THREE.Mesh(rbx(0.7, 0.4, 0.5, 0.05), m.accent)).position.set(0.08, 0.12, 0.08);
  return g;
};

BUILD.calendar = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.78, 0.7, 0.14, 0.06), m.main));
  add(g, new THREE.Mesh(rbx(0.78, 0.18, 0.16, 0.04), m.accent)).position.y = 0.3;
  for (const x of [-0.2, 0.2]) {
    add(g, new THREE.Mesh(cyl(0.05, 0.05, 0.2, 10), m.dark)).position.set(x, 0.4, 0.05);
  }
  for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
    add(g, new THREE.Mesh(rbx(0.14, 0.12, 0.06, 0.02), (r + c) % 2 ? m.lite : m.gloss)).position.set(-0.22 + c * 0.22, 0.05 - r * 0.2, 0.1);
  }
  return g;
};

BUILD.stamp = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.32, 0.36, 0.2, 28), m.main)).position.y = -0.15;
  add(g, new THREE.Mesh(cyl(0.12, 0.12, 0.45, 14), m.dark)).position.y = 0.15;
  add(g, new THREE.Mesh(sph(0.14, 14, 10), m.accent)).position.y = 0.42;
  add(g, new THREE.Mesh(rbx(0.5, 0.08, 0.5, 0.04), m.lite)).position.y = -0.28;
  return g;
};

BUILD.firewall = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.85, 0.55, 0.22, 0.05), m.main));
  for (let i = 0; i < 4; i++) {
    add(g, new THREE.Mesh(rbx(0.12, 0.42, 0.14, 0.03), i % 2 ? m.accent : m.lite)).position.set(-0.3 + i * 0.2, 0, 0.12);
  }
  add(g, new THREE.Mesh(rbx(0.9, 0.1, 0.26, 0.03), m.dark)).position.y = 0.32;
  add(g, new THREE.Mesh(sph(0.08, 10, 8), m.gloss)).position.set(0, 0.42, 0.1);
  return g;
};

BUILD.key = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(tor(0.22, 0.08, 12, 24), m.main)).position.set(-0.22, 0.05, 0);
  add(g, new THREE.Mesh(rbx(0.55, 0.12, 0.12, 0.04), m.lite)).position.set(0.18, 0.05, 0);
  add(g, new THREE.Mesh(rbx(0.1, 0.22, 0.1, 0.03), m.accent)).position.set(0.35, -0.08, 0);
  add(g, new THREE.Mesh(rbx(0.1, 0.16, 0.1, 0.03), m.dark)).position.set(0.48, -0.05, 0);
  return g;
};


BUILD.balance = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.08, 0.12, 0.55, 14), m.dark)).position.y = -0.05;
  add(g, new THREE.Mesh(rbx(0.7, 0.08, 0.1, 0.03), m.main)).position.y = 0.22;
  for (const s of [-1, 1]) {
    add(g, new THREE.Mesh(cyl(0.16, 0.16, 0.08, 16), s < 0 ? m.lite : m.accent)).position.set(s * 0.32, 0.05, 0);
    add(g, new THREE.Mesh(rbx(0.04, 0.2, 0.04, 0.01), m.dark)).position.set(s * 0.32, 0.14, 0);
  }
  add(g, new THREE.Mesh(sph(0.08, 12, 8), m.gloss)).position.y = 0.32;
  return g;
};

BUILD.crane = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.55, 0.18, 0.4, 0.04), m.main)).position.y = -0.28;
  add(g, new THREE.Mesh(cyl(0.07, 0.09, 0.7, 12), m.dark)).position.set(-0.1, 0.1, 0);
  const boom = add(g, new THREE.Mesh(rbx(0.7, 0.08, 0.08, 0.03), m.lite));
  boom.position.set(0.18, 0.42, 0); boom.rotation.z = -0.25;
  add(g, new THREE.Mesh(rbx(0.08, 0.25, 0.08, 0.02), m.accent)).position.set(0.45, 0.2, 0);
  add(g, new THREE.Mesh(rbx(0.18, 0.08, 0.14, 0.02), m.gloss)).position.set(0.45, 0.05, 0);
  return g;
};

BUILD.pipeline = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(cyl(0.12, 0.12, 0.85, 16), m.main)).rotation.z = Math.PI / 2;
  add(g, new THREE.Mesh(sph(0.16, 14, 10), m.lite)).position.set(-0.4, 0, 0);
  add(g, new THREE.Mesh(sph(0.16, 14, 10), m.accent)).position.set(0.4, 0, 0);
  add(g, new THREE.Mesh(cyl(0.18, 0.18, 0.14, 16), m.dark)).position.set(0, 0.02, 0);
  add(g, new THREE.Mesh(rbx(0.08, 0.22, 0.08, 0.02), m.gloss)).position.set(0, 0.22, 0);
  return g;
};

BUILD.notebook = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.65, 0.85, 0.14, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.08, 0.85, 0.16, 0.03), m.accent)).position.x = -0.28;
  for (let i = 0; i < 4; i++) {
    add(g, new THREE.Mesh(rbx(0.4, 0.05, 0.04, 0.02), m.dark)).position.set(0.05, 0.25 - i * 0.16, 0.1);
  }
  return g;
};

BUILD.tips = BUILD.lightbulb;


BUILD.opsbook = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.55, 0.12, 0.05), m.main));
  add(g, new THREE.Mesh(rbx(0.55, 0.08, 0.06, 0.02), m.accent)).position.set(0, 0.12, 0.1);
  add(g, new THREE.Mesh(rbx(0.4, 0.08, 0.06, 0.02), m.dark)).position.set(-0.05, -0.05, 0.1);
  add(g, new THREE.Mesh(cyl(0.1, 0.1, 0.08, 12), m.lite)).position.set(0.22, -0.16, 0.1);
  return g;
};

BUILD.screwdriver = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  const shaft = add(g, new THREE.Mesh(cyl(0.05, 0.05, 0.55, 10), m.dark));
  shaft.rotation.z = 0.6; shaft.position.set(0.05, -0.05, 0);
  add(g, new THREE.Mesh(rbx(0.18, 0.45, 0.18, 0.05), m.main)).position.set(-0.22, 0.25, 0);
  add(g, new THREE.Mesh(rbx(0.12, 0.14, 0.08, 0.02), m.accent)).position.set(0.32, -0.32, 0);
  return g;
};

BUILD.gittools = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(sph(0.14, 14, 10), m.main)).position.set(-0.25, -0.2, 0);
  add(g, new THREE.Mesh(sph(0.14, 14, 10), m.lite)).position.set(0.05, 0.1, 0);
  add(g, new THREE.Mesh(sph(0.14, 14, 10), m.accent)).position.set(0.32, -0.15, 0);
  add(g, new THREE.Mesh(rbx(0.08, 0.4, 0.08, 0.03), m.dark)).position.set(-0.1, -0.05, 0);
  const b = add(g, new THREE.Mesh(rbx(0.08, 0.35, 0.08, 0.03), m.dark));
  b.rotation.z = 1.1; b.position.set(0.18, 0, 0);
  add(g, new THREE.Mesh(rbx(0.35, 0.12, 0.2, 0.04), m.gloss)).position.set(0, 0.38, 0);
  return g;
};

BUILD.qmboard = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.85, 0.65, 0.12, 0.05), m.main));
  add(g, new THREE.Mesh(cyl(0.18, 0.18, 0.1, 24), m.lite)).position.set(-0.22, 0.05, 0.1);
  const a = add(g, new THREE.Mesh(rbx(0.08, 0.2, 0.08, 0.02), m.accent));
  a.rotation.z = 0.5; a.position.set(-0.28, 0, 0.16);
  const b = add(g, new THREE.Mesh(rbx(0.08, 0.28, 0.08, 0.02), m.accent));
  b.rotation.z = -0.7; b.position.set(-0.14, 0.04, 0.16);
  for (let i = 0; i < 3; i++) {
    add(g, new THREE.Mesh(rbx(0.28 - i * 0.04, 0.08, 0.06, 0.02), m.dark)).position.set(0.2, 0.18 - i * 0.16, 0.1);
  }
  return g;
};

BUILD.arches = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  for (let i = 0; i < 3; i++) {
    const t = add(g, new THREE.Mesh(tor(0.22 + i * 0.02, 0.06, 10, 24), i === 1 ? m.lite : m.main));
    t.rotation.x = Math.PI / 2; t.position.set(-0.28 + i * 0.28, 0.05, 0);
    add(g, new THREE.Mesh(rbx(0.1, 0.28, 0.1, 0.03), m.dark)).position.set(-0.28 + i * 0.28, -0.2, 0);
  }
  return g;
};

BUILD.designflow = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.5, 0.1, 0.04), m.main));
  // pencil
  const pen = add(g, new THREE.Mesh(cyl(0.05, 0.05, 0.55, 10), m.accent));
  pen.rotation.z = -0.8; pen.position.set(0.15, 0.05, 0.12);
  add(g, new THREE.Mesh(cone(0.06, 0.14, 10), m.dark)).position.set(0.35, -0.15, 0.12);
  add(g, new THREE.Mesh(rbx(0.2, 0.08, 0.06, 0.02), m.lite)).position.set(-0.18, 0.1, 0.1);
  return g;
};


BUILD.bricks = (hex) => {
  const g = new THREE.Group(); const m = matPair(hex);
  add(g, new THREE.Mesh(rbx(0.7, 0.22, 0.35, 0.05), m.main)).position.set(0, -0.22, 0);
  add(g, new THREE.Mesh(rbx(0.55, 0.22, 0.35, 0.05), m.lite)).position.set(-0.08, 0, 0.05);
  add(g, new THREE.Mesh(rbx(0.4, 0.22, 0.35, 0.05), m.accent)).position.set(0.1, 0.22, 0.1);
  add(g, new THREE.Mesh(rbx(0.12, 0.12, 0.12, 0.03), m.dark)).position.set(-0.35, 0.22, 0.2);
  add(g, new THREE.Mesh(rbx(0.12, 0.12, 0.12, 0.03), m.dark)).position.set(-0.2, 0.22, 0.2);
  return g;
};

/* Fallback */
BUILD.default = BUILD.lightbulb;

const KA_ICON = {
  1: 'clipboard', 2: 'building', 3: 'blueprint', 4: 'brackets', 5: 'magnifier',
  6: 'server', 7: 'wrench', 8: 'gitbranch', 9: 'gantt', 10: 'cycle',
  11: 'uml', 12: 'medal', 13: 'shield', 14: 'handshake', 15: 'coins',
  16: 'chip', 17: 'sigma', 18: 'ruler',
};

const TOPIC_ICON = {
  '1.1': 'clipboard', '1.2': 'speech', '1.3': 'search', '1.4': 'document', '1.5': 'checkbadge', '1.6': 'kanban', '1.7': 'notebook', '1.8': 'toolbox',
  '2.1': 'building', '2.2': 'layers', '2.3': 'arches', '2.4': 'scorecard',
  '3.1': 'blueprint', '3.2': 'designflow', '3.3': 'star', '3.4': 'specdoc', '3.5': 'compass', '3.6': 'balance',
  '4.1': 'brackets', '4.2': 'crane', '4.3': 'journal', '4.4': 'code', '4.5': 'mallet',
  '5.1': 'magnifier', '5.2': 'pyramid', '5.3': 'target', '5.4': 'gauge', '5.5': 'pipeline', '5.6': 'cycle', '5.7': 'neural', '5.8': 'bug',
  '6.1': 'server', '6.2': 'plan', '6.3': 'rocket', '6.4': 'control', '6.5': 'opsbook', '6.6': 'terminal',
  '7.1': 'wrench', '7.2': 'keyIssues', '7.3': 'recycle', '7.4': 'techniques', '7.5': 'screwdriver',
  '8.1': 'folders', '8.2': 'idtag', '8.3': 'gate', '8.4': 'status', '8.5': 'audit', '8.6': 'package', '8.7': 'gittools',
  '9.1': 'scope', '9.2': 'gantt', '9.3': 'execute', '9.4': 'review', '9.5': 'closure', '9.6': 'radar', '9.7': 'calendar',
  '10.1': 'loop', '10.2': 'lifecycle', '10.3': 'improve',
  '11.1': 'model', '11.2': 'uml', '11.3': 'loupe', '11.4': 'methods',
  '12.1': 'medal', '12.2': 'qmboard', '12.3': 'seal', '12.4': 'stamp',
  '13.1': 'shield', '13.2': 'org', '13.3': 'firewall', '13.4': 'lock', '13.5': 'key', '13.6': 'domain',
  '14.1': 'certificate', '14.2': 'people', '14.3': 'chat',
  '15.1': 'coins', '15.2': 'decide', '15.3': 'profit', '15.4': 'nonprofit', '15.5': 'present', '15.6': 'multiattr', '15.7': 'intangible', '15.8': 'calculator', '15.9': 'lightbulb', '15.10': 'related',
  '16.1': 'system', '16.2': 'cpu', '16.3': 'tree', '16.4': 'brackets2', '16.5': 'window', '16.6': 'database', '16.7': 'network', '16.8': 'human', '16.9': 'brain',
  '17.1': 'logic', '17.2': 'proof', '17.3': 'set', '17.4': 'bintree', '17.5': 'fsm', '17.6': 'grammar', '17.7': 'primes', '17.8': 'count', '17.9': 'dice', '17.10': 'precision', '17.11': 'algebra', '17.12': 'calculus', '17.13': 'newAdv',
  '18.1': 'loop', '18.2': 'schematic', '18.3': 'abstract', '18.4': 'experiment', '18.5': 'stats', '18.6': 'sim', '18.7': 'radar', '18.8': 'diploma', '18.9': 'fishbone', '18.10': 'industry',
};

export function makeIcon(kind, hex, scale = 1) {
  const fn = BUILD[kind] || BUILD.default;
  const g = fn(hex);
  g.scale.setScalar(scale);
  g.rotation.set(-0.42, 0.62, 0.1);
  g.userData.iconKind = kind;
  g.userData.baseRot = { x: -0.42, y: 0.62, z: 0.1 };
  return g;
}

export function iconForKA(ch) { return KA_ICON[ch] || 'lightbulb'; }
export function iconForTopic(ch, n) { return TOPIC_ICON[`${ch}.${n}`] || 'lightbulb'; }
export function iconForRoot() { return 'core'; }
export { KA_ICON, TOPIC_ICON, BUILD };
