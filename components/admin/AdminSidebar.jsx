'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { logoutAction } from '@/app/admin/actions';

const LINKS = [
  { href: '/admin', label: 'Posts', match: (path) => path === '/admin' || (path.startsWith('/admin/posts/') && path !== '/admin/posts/new') },
  { href: '/admin/posts/new', label: 'New post', match: (path) => path === '/admin/posts/new' },
  { href: '/blog', label: 'View blog', match: () => false },
];

export default function AdminSidebar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="admin-top">
        <a href="/admin" className="admin-brand">Rispit blog</a>
        <button type="button" className="admin-quiet" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && <button type="button" className="admin-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />}
      <aside className={open ? 'admin-side is-open' : 'admin-side'}>
        <a href="/admin" className="admin-brand">Rispit blog</a>
        <nav aria-label="Admin">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.match(path) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <form action={logoutAction}>
          <button type="submit" className="admin-quiet">Sign out</button>
        </form>
      </aside>
    </>
  );
}
