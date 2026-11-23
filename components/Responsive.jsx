'use client';
import { useEffect, useState } from 'react';

// Desktop artboards are drawn at 1440px, mobile ones at 390px.
// Below this width the mobile design is shown.
export const BREAKPOINT = 1024;

// Server-renders both designs (CSS shows the right one, so there is no flash),
// then keeps only the matching one in the DOM after hydration, so ids such as
// #contact are unique and only one set of animations/timers runs.
export default function Responsive({ desktop, mobile }) {
  const [mode, setMode] = useState(null);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
    const update = () => setMode(mq.matches ? 'desktop' : 'mobile');
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  if (!mobile) return desktop;
  return (
    <>
      {mode !== 'mobile' && <div className="v-desktop">{desktop}</div>}
      {mode !== 'desktop' && <div className="v-mobile">{mobile}</div>}
    </>
  );
}
