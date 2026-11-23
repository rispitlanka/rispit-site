'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Responsive from './Responsive';
import CookieBanner from './dc/CookieBanner';
import MobCookie from './dc/MobCookie';

const KEY = 'rispit-cookie-consent';
const DONE = ['Accept all', 'Reject optional', 'Save preferences'];

// The cookie banner artboards, floated over the page bottom-left (desktop)
// or bottom (mobile). The choice is remembered in localStorage.
export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    try {
      setShow(!localStorage.getItem(KEY));
    } catch {
      setShow(true);
    }
  }, []);
  if (!show || pathname?.startsWith('/screens')) return null;
  const onClickCapture = (e) => {
    const btn = e.target.closest('button');
    const label = btn?.textContent.trim();
    if (DONE.includes(label)) {
      try {
        localStorage.setItem(KEY, JSON.stringify({ choice: label, at: Date.now() }));
      } catch {}
      setTimeout(() => setShow(false), 0);
    }
  };
  return (
    <div className="cookie-float" onClickCapture={onClickCapture}>
      <Responsive desktop={<CookieBanner />} mobile={<MobCookie />} />
    </div>
  );
}
