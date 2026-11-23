// Compiles the design source files in /design (*.dc.html) into React components
// in /components/dc, plus one global stylesheet (app/dc.css) built from every
// file's <helmet><style> block.
//
//   node scripts/compile-dc.mjs
//
// The design format: an <x-dc> template with {{dotted.path}} holes, <sc-for>,
// <sc-if>, <dc-import> and a `class Component extends DCLogic` logic script.
import fs from 'node:fs';
import path from 'node:path';
import { parseDocument } from 'htmlparser2';
import { ROUTES } from '../lib/routes.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC = path.join(ROOT, 'design');
const OUT = path.join(ROOT, 'components', 'dc');
const CSS_OUT = path.join(ROOT, 'app', 'dc.css');

// Design artboards that are not part of the website.
const SKIP = new Set([]);

const ASSETS = Object.fromEntries(
  fs.readdirSync(path.join(ROOT, 'public', 'assets')).map((f) => [f.replace(/\.[^.]+$/, ''), `/assets/${f}`])
);
const mapBlobs = (s) => s.replace(/\/_blob\/([0-9a-f]{32})/g, (m, id) => ASSETS[id] || m);

// ---------- helpers ----------
const HOLE = /\{\{\s*([^}]*?)\s*\}\}/g;
const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
  colspan: 'colSpan', rowspan: 'rowSpan', autocomplete: 'autoComplete', autofocus: 'autoFocus',
  autoplay: 'autoPlay', playsinline: 'playsInline', crossorigin: 'crossOrigin', srcset: 'srcSet',
  novalidate: 'noValidate', contenteditable: 'contentEditable', datetime: 'dateTime', inputmode: 'inputMode',
  enctype: 'encType', 'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', allowfullscreen: 'allowFullScreen',
};
const BOOL_ATTRS = new Set(['disabled', 'checked', 'selected', 'required', 'multiple', 'hidden', 'autoplay',
  'muted', 'loop', 'controls', 'playsinline', 'readonly', 'autofocus', 'novalidate', 'open', 'allowfullscreen']);
const NO_TEXT_PARENTS = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr', 'select', 'svg', 'g', 'defs',
  'clipPath', 'linearGradient', 'radialGradient', 'mask', 'pattern', 'colgroup', 'ul', 'ol']);
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function holeExpr(p, scope) {
  p = p.trim();
  if (/^(true|false|null|undefined)$/.test(p) || /^-?\d+(\.\d+)?$/.test(p) || /^(['"]).*\1$/.test(p)) return p;
  return `dcGet(${scope}, ${JSON.stringify(p)})`;
}
// "a {{x}} b" -> JS expression producing a string (or the raw value when the whole thing is one hole)
function interp(str, scope, raw = true) {
  const whole = str.match(/^\s*\{\{\s*([^}]*?)\s*\}\}\s*$/);
  if (whole && raw) return holeExpr(whole[1], scope);
  if (!HOLE.test(str)) { HOLE.lastIndex = 0; return JSON.stringify(str); }
  HOLE.lastIndex = 0;
  let out = '`', last = 0;
  for (const m of str.matchAll(HOLE)) {
    out += str.slice(last, m.index).replace(/[`\\$]/g, (c) => '\\' + c);
    out += '${dcStr(' + holeExpr(m[1], scope) + ')}';
    last = m.index + m[0].length;
  }
  return out + str.slice(last).replace(/[`\\$]/g, (c) => '\\' + c) + '`';
}

function splitDecls(style) {
  const out = []; let depth = 0, q = null, cur = '';
  for (const ch of style) {
    if (q) { if (ch === q) q = null; cur += ch; continue; }
    if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
    if (ch === '(') depth++; else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out.map((s) => s.trim()).filter(Boolean);
}
function styleExpr(style, scope, isRoot) {
  const whole = style.match(/^\s*\{\{\s*([^}]*?)\s*\}\}\s*$/);
  if (whole) return `dcStyle(${holeExpr(whole[1], scope)})`;
  const props = [];
  for (const d of splitDecls(style)) {
    const i = d.indexOf(':'); if (i < 0) continue;
    let k = d.slice(0, i).trim(), v = d.slice(i + 1).trim();
    // Artboard roots are drawn at a fixed design width; on the site they fill the viewport.
    if (isRoot && k === 'width' && /^(1440|390|1280)px$/.test(v)) v = '100%';
    const key = k.startsWith('--') ? JSON.stringify(k)
      : JSON.stringify(camel(k.replace(/^-(webkit|moz|ms)-/, (m, p) => (p === 'ms' ? 'ms-' : p[0].toUpperCase() + p.slice(1) + '-'))).replace(/^(Webkit|Moz)-/, '$1'));
    props.push(`${key}: ${interp(mapBlobs(v), scope, false)}`);
  }
  return `{${props.join(', ')}}`;
}

function attrName(n, inSvg) {
  if (ATTR_MAP[n]) return ATTR_MAP[n];
  if (/^on[A-Z]/.test(n)) return n;
  if (/^on[a-z]+$/.test(n)) return 'on' + n[2].toUpperCase() + n.slice(3);
  if (n.startsWith('aria-') || n.startsWith('data-')) return n;
  if (n.includes('-')) return camel(n);
  return n;
}

// ---------- JSX generation ----------
let ctx; // per-file context
function genNodes(nodes, scope, parentTag, depth, isRootLevel = false) {
  const parts = [];
  for (const n of nodes) {
    const g = genNode(n, scope, parentTag, depth, isRootLevel);
    if (g) parts.push(g);
  }
  return parts;
}
function genChildren(n, scope, depth) {
  return genNodes(n.children || [], scope, n.name, depth);
}
const ind = (d) => '  '.repeat(d);

function genNode(n, scope, parentTag, depth, isRootLevel) {
  if (n.type === 'comment' || n.type === 'directive') return null;
  if (n.type === 'text') {
    let t = n.data;
    if (!t.trim()) {
      if (NO_TEXT_PARENTS.has(parentTag) || isRootLevel) return null;
      return /\n/.test(t) && !/ /.test(t.replace(/\n\s*/g, '')) ? `{" "}` : `{" "}`;
    }
    t = t.replace(/\s+/g, ' ');
    const out = []; let last = 0;
    for (const m of t.matchAll(HOLE)) {
      if (m.index > last) out.push(`{${JSON.stringify(t.slice(last, m.index))}}`);
      out.push(`{dcStr(${holeExpr(m[1], scope)})}`);
      last = m.index + m[0].length;
    }
    if (last < t.length) out.push(`{${JSON.stringify(t.slice(last))}}`);
    return out.join('');
  }
  if (n.type === 'script' || n.type === 'style') return null;
  if (n.type !== 'tag') return null;
  const tag = n.name;
  const a = n.attribs || {};

  if (tag === 'helmet') return null;
  if (tag === 'sc-if') {
    const kids = genChildren(n, scope, depth + 1);
    return `{dcTruthy(${interp(a.value || '', scope)}) ? (<>\n${kids.map((k) => ind(depth + 1) + k).join('\n')}\n${ind(depth)}</>) : null}`;
  }
  if (tag === 'sc-for') {
    const v = a.as || 'item';
    const s2 = `S${depth}`;
    const kids = genChildren(n, s2, depth + 2);
    return `{dcList(${interp(a.list || '', scope)}).map((__it, __i) => { const ${s2} = { ...${scope}, ${JSON.stringify(v)}: __it, $index: __i }; return (<React.Fragment key={__i}>\n${kids.map((k) => ind(depth + 2) + k).join('\n')}\n${ind(depth + 1)}</React.Fragment>); })}`;
  }
  if (tag === 'dc-import') {
    const name = a.name;
    if (!ctx.imports.has(name)) ctx.imports.add(name);
    const props = Object.entries(a)
      .filter(([k]) => k !== 'name' && !k.startsWith('hint-'))
      .map(([k, v]) => `${camel(k)}={${interp(v, scope)}}`);
    return `<${'DC_' + name} ${props.join(' ')} />`;
  }

  const inSvg = ctx.svgDepth > 0 || tag === 'svg';
  if (tag === 'svg') ctx.svgDepth++;
  const isRoot = isRootLevel && !ctx.rootSeen;
  if (isRoot) ctx.rootSeen = true;

  let jsxTag = tag;
  const attrs = [];
  // <a> inside <a> is invalid HTML (the browser splits it, breaking hydration):
  // render the inner one as a span; the outer link still handles the click.
  const nestedLink = tag === 'a' && ctx.aDepth > 0;
  if (nestedLink) jsxTag = 'span';
  for (let [k, v] of Object.entries(a)) {
    if (k.startsWith('hint-')) continue;
    v = mapBlobs(v);
    if (k === 'style') { attrs.push(`style={${styleExpr(v, scope, isRoot)}}`); continue; }
    if (nestedLink && (k === 'href' || k === 'target' || k === 'rel')) continue;
    if (tag === 'a' && k === 'href' && !HOLE.test(v)) {
      const route = resolveHref(v);
      attrs.push(`href={${JSON.stringify(route)}}`);
      jsxTag = 'DcLink'; // resolves placeholder links (lib/links.mjs) and internal routes
      continue;
    }
    HOLE.lastIndex = 0;
    // Links computed in the logic script (e.g. the navbar's services menu) are
    // resolved to site routes at runtime by DcLink.
    if (tag === 'a' && k === 'href') { attrs.push(`href={${interp(v, scope)}}`); jsxTag = 'DcLink'; continue; }
    const name = attrName(k, inSvg);
    if (BOOL_ATTRS.has(k.toLowerCase()) && v === '') { attrs.push(`${name}={true}`); continue; }
    // Uncontrolled form defaults
    if ((tag === 'input' || tag === 'textarea' || tag === 'select') && k === 'value' && !/\{\{/.test(v)) { attrs.push(`defaultValue={${JSON.stringify(v)}}`); continue; }
    if (tag === 'input' && k === 'checked' && !/\{\{/.test(v)) { attrs.push(`defaultChecked={true}`); continue; }
    attrs.push(`${name}={${interp(v, scope)}}`);
  }
  if (isRoot) {
    const i = attrs.findIndex((x) => x.startsWith('className='));
    const cls = `dc-${ctx.name.toLowerCase()}`;
    if (i >= 0) attrs[i] = attrs[i].replace(/^className=\{(.*)\}$/, (m, e) => `className={${JSON.stringify(cls + ' ')} + ${e}}`);
    else attrs.push(`className=${JSON.stringify(cls)}`);
  }
  if (tag === 'form' && !a.onSubmit) { attrs.push(`onSubmit={dcFormSubmit}`); ctx.usesForm = true; }
  if (tag === 'textarea') {
    // textarea content becomes defaultValue
    const txt = (n.children || []).map((c) => c.data || '').join('');
    if (txt.trim()) attrs.push(`defaultValue={${JSON.stringify(txt)}}`);
    if (tag === 'svg') ctx.svgDepth--;
    return `<textarea ${attrs.join(' ')} />`;
  }
  if (tag === 'a') ctx.aDepth++;
  const kids = genChildren(n, scope, depth + 1);
  if (tag === 'a') ctx.aDepth--;
  if (tag === 'svg') ctx.svgDepth--;
  const open = `<${jsxTag}${attrs.length ? ' ' + attrs.join(' ') : ''}`;
  if (!kids.length) return `${open} />`;
  return `${open}>\n${kids.map((k) => ind(depth + 1) + k).join('\n')}\n${ind(depth)}</${jsxTag}>`;
}

function resolveHref(href) {
  const m = href.match(/^(?:\.?\/)?([A-Za-z0-9_-]+)\.dc\.html(#.*)?$/);
  if (!m) return href;
  const r = ROUTES[m[1]];
  if (!r) { console.warn(`  ! no route for link to ${m[1]} (${ctx.name})`); return '/' + (m[2] || ''); }
  return r + (m[2] || '');
}

// ---------- CSS collection ----------
const cssBlocks = [];
function collectHelmet(xdc, name) {
  const helmet = (xdc.children || []).find((c) => c.name === 'helmet');
  if (!helmet) return;
  for (const s of helmet.children || []) {
    if (s.name === 'style') {
      const css = (s.children || []).map((c) => c.data).join('');
      cssBlocks.push({ name, css: mapBlobs(css) });
    }
  }
}

function compile(file) {
  const name = path.basename(file, '.dc.html');
  let html = fs.readFileSync(file, 'utf8');
  // Scope the helmet's class and keyframe names to this component: the design
  // files reuse names like .rsp-card with different rules in different files.
  const helmetCss = (html.match(/<helmet>([\s\S]*?)<\/helmet>/) || [, ''])[1];
  const local = new Set([...helmetCss.matchAll(/(?:\.|@keyframes\s+)(-?[_a-zA-Z][\w-]*)/g)].map((m) => m[1]));
  if (local.size) {
    const pre = name.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const re = new RegExp(`(?<![\\w-])(${[...local].sort((a, b) => b.length - a.length).map((x) => x.replace(/[-]/g, '\\-')).join('|')})(?![\\w-])`, 'g');
    // only rewrite inside the helmet css, class="" attributes and inline animation styles
    html = html.replace(/<helmet>[\s\S]*?<\/helmet>/, (h) => h.replace(re, (m) => `${pre}--${m}`));
    html = html.replace(/(\sclass=")([^"]*)"/g, (m, a, v) => a + v.replace(re, (x) => `${pre}--${x}`) + '"');
    html = html.replace(/(\sstyle=")([^"]*)"/g, (m, a, v) => a + v.replace(/(animation(?:-name)?\s*:\s*)([^;"]*)/g, (mm, k, val) => k + val.replace(re, (x) => `${pre}--${x}`)) + '"');
  }
  const doc = parseDocument(html, { lowerCaseAttributeNames: false, lowerCaseTags: true, recognizeSelfClosing: true, decodeEntities: true });
  const find = (nodes, pred) => { for (const n of nodes) { if (pred(n)) return n; const r = n.children && find(n.children, pred); if (r) return r; } return null; };
  const xdc = find(doc.children, (n) => n.name === 'x-dc');
  const script = find(doc.children, (n) => n.name === 'script' && n.attribs && 'data-dc-script' in n.attribs);
  if (!xdc) throw new Error('no <x-dc> in ' + file);
  ctx = { name, imports: new Set(), svgDepth: 0, aDepth: 0, rootSeen: false, usesForm: false };
  collectHelmet(xdc, name);
  const body = genNodes(xdc.children, 'S', 'x-dc', 2, true);
  const logic = script ? (script.children || []).map((c) => c.data).join('').trim()
    : 'class Component extends DCLogic { renderVals() { return {}; } }';

  const imports = [...ctx.imports].map((i) => `import DC_${i} from './${i}';`).join('\n');
  const src = `'use client';
// AUTO-GENERATED from design/${name}.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
${imports}

${logic}

Component.prototype.template = function (S) {
  return (
    <>
${body.map((b) => '      ' + b).join('\n')}
    </>
  );
};

export default function ${name}(props) {
  return <Component {...props} />;
}
`;
  fs.writeFileSync(path.join(OUT, `${name}.jsx`), src);
  return name;
}

// ---------- main ----------
fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) if (f.endsWith('.jsx')) fs.unlinkSync(path.join(OUT, f));
const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.dc.html')).filter((f) => !SKIP.has(f.replace('.dc.html', '')));
const done = files.map((f) => compile(path.join(SRC, f)));

// De-duplicate identical CSS blocks; warn on conflicting definitions of the same selector.
const seen = new Map();
let css = '/* AUTO-GENERATED from design/*.dc.html <helmet> styles by scripts/compile-dc.mjs */\n';
for (const { name, css: block } of cssBlocks) {
  const rules = block.match(/(@keyframes[^{]+\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}|[^{}]+\{[^{}]*\})/g) || [];
  for (let r of rules) {
    r = r.trim();
    const sel = r.slice(0, r.indexOf('{')).trim();
    if (sel === 'body') continue; // handled in globals.css
    if (/^a(:hover)?$/.test(sel)) { css += `@scope (.dc-${name.toLowerCase()}) { ${r} }\n`; continue; } // link colours apply per component, nearest wins
    if (seen.has(sel)) {
      if (seen.get(sel).rule.replace(/\s+/g, '') !== r.replace(/\s+/g, '')) console.warn(`  ! CSS conflict for "${sel}" in ${name} (first seen in ${seen.get(sel).name})`);
      continue;
    }
    seen.set(sel, { name, rule: r });
    css += r + '\n';
  }
}
fs.writeFileSync(CSS_OUT, css);

// Registry of every artboard (for the /screens gallery), in canvas order.
const canvas = JSON.parse(fs.readFileSync(path.join(SRC, 'canvas.json'), 'utf8'));
const boards = Object.entries(canvas.boards)
  .map(([f, b]) => ({ name: f.replace('.dc.html', ''), title: b.title || f, w: b.w, h: b.h, page: b.page || 'desktop', x: b.x, y: b.y }))
  .filter((b) => done.includes(b.name))
  .sort((a, b) => (a.page === b.page ? a.x - b.x || a.y - b.y : a.page === 'desktop' ? -1 : 1));
fs.writeFileSync(path.join(OUT, 'registry.js'),
  `// AUTO-GENERATED by scripts/compile-dc.mjs\nexport const BOARDS = ${JSON.stringify(boards.map(({ x, y, ...b }) => ({ ...b, route: ROUTES[b.name] || null })), null, 1)};\n` +
  `export const LOADERS = {\n${boards.map((b) => `  ${b.name}: () => import('./${b.name}'),`).join('\n')}\n};\n`);
console.log(`compiled ${done.length} design files -> components/dc, ${seen.size} css rules -> app/dc.css`);
