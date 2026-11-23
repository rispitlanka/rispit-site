'use client';
// Tiny runtime for components compiled from the design files.
import React from 'react';
import Link from 'next/link';
import { ROUTES } from '../lib/routes.mjs';
import { LINKS, SHARE } from '../lib/links.mjs';

export class DCLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderVals() {
    return {};
  }
  render() {
    return this.template(this.renderVals() || {});
  }
}

export function dcGet(scope, path) {
  let v = scope;
  for (const k of path.split('.')) {
    if (v == null) return undefined;
    v = v[k];
  }
  return v;
}
export const dcStr = (v) => (v == null || v === false ? '' : typeof v === 'object' ? '' : String(v));
export const dcList = (v) => (Array.isArray(v) ? v : typeof v === 'number' ? Array.from({ length: v }, (_, i) => i) : []);
export const dcTruthy = (v) => !!v && v !== 'false';
export const dcStyle = (v) => (v && typeof v === 'object' ? v : undefined);

// Maps a design link ("/ServiceAI.dc.html", "Contact.dc.html#x", "#linkedin") to its site URL.
export function dcHref(href) {
  if (typeof href !== 'string') return '#';
  if (LINKS[href]) return LINKS[href];
  const m = href.match(/^(?:\.?\/)?([A-Za-z0-9_-]+)\.dc\.html(#.*)?$/);
  if (!m) return href;
  return (ROUTES[m[1]] || '/') + (m[2] || '');
}

function shareClick(e, href) {
  e.preventDefault();
  const url = window.location.href.split('#')[0];
  if (href === '#copy-link') {
    navigator.clipboard?.writeText(url).then(() => {
      const el = e.currentTarget;
      if (el) { el.title = 'Link copied'; el.style.outline = '2px solid #2E9E5B'; setTimeout(() => { el.style.outline = ''; }, 1200); }
    });
    return;
  }
  window.open(SHARE[href](url, document.title), '_blank', 'noopener,noreferrer,width=600,height=640');
}

// Every design link goes through here. Internal links use next/link (client-side
// navigation); external ones open in a new tab; share buttons share the current page.
export function DcLink({ href, children, onClick, ...rest }) {
  if (href === '#copy-link' || SHARE[href]) {
    return (
      <a href={href} onClick={(e) => { onClick?.(e); shareClick(e, href); }} {...rest}>
        {children}
      </a>
    );
  }
  const to = dcHref(href);
  if (to.startsWith('/') && !to.startsWith('//')) {
    return (
      <Link href={to} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(to) && !/\[/.test(to) && !rest.target;
  return (
    <a href={to} onClick={onClick} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  );
}

// Forms in the design have no backend yet: send people to the thank-you page.
// Connect these to your email / CRM (see README).
export function dcFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (form.querySelector('input[type="search"]')) return;
  window.location.href = '/thank-you';
}
