'use client';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { LOADERS } from './dc/registry';

// Shows one artboard at its design width, scaled down to fit narrow windows.
export default function ScreenViewer({ board, prev, next }) {
  const Comp = useMemo(() => React.lazy(LOADERS[board.name]), [board.name]);
  const [fit, setFit] = useState(true);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => setScale(Math.min(1, (window.innerWidth - 32) / board.w));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [board.w]);
  const bar = { display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, fontWeight: 700 };
  return (
    <div style={{ minHeight: '100vh', background: '#ECEEF1' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 200, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, padding: '12px 16px', background: '#14161A', color: '#FFFFFF' }}>
        <div style={bar}>
          <Link href="/screens" style={{ color: '#FFFFFF' }}>All screens</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span>{board.title}</span>
          <span style={{ opacity: 0.6, fontWeight: 600 }}>{board.w}×{board.h}</span>
        </div>
        <div style={bar}>
          {board.w > 600 && scale < 1 && (
            <button type="button" onClick={() => setFit(!fit)} style={{ height: 30, padding: '0 12px', borderRadius: 8, border: 'none', fontWeight: 700, cursor: 'pointer' }}>
              {fit ? 'Actual size' : 'Fit to window'}
            </button>
          )}
          {board.route && <Link href={board.route} style={{ color: '#FFFFFF' }}>Live page</Link>}
          {prev && <Link href={`/screens/${prev}`} style={{ color: '#FFFFFF' }}>← Prev</Link>}
          {next && <Link href={`/screens/${next}`} style={{ color: '#FFFFFF' }}>Next →</Link>}
        </div>
      </div>
      <div style={{ padding: 16, overflowX: 'auto' }}>
        <div style={{ width: board.w, margin: '0 auto', background: '#FFFFFF', zoom: fit ? scale : 1, boxShadow: '0 20px 40px -24px rgba(20,22,26,0.35)' }}>
          <Suspense fallback={<div style={{ height: board.h }} />}>
            <Comp />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
