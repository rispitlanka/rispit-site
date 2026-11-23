import Link from 'next/link';
import { BOARDS } from '@/components/dc/registry';

export const metadata = { title: 'All screens', robots: { index: false, follow: false } };

const GROUPS = [
  ['Desktop pages', (b) => b.page === 'desktop' && b.route],
  ['Desktop sections & states', (b) => b.page === 'desktop' && !b.route && !/^Email|^Favicon|^SocialShare/.test(b.name)],
  ['Mobile pages', (b) => b.page === 'mobile' && b.route],
  ['Mobile shared pieces', (b) => b.page === 'mobile' && !b.route],
  ['Emails & brand assets', (b) => /^Email|^Favicon|^SocialShare/.test(b.name)],
];

// Review gallery: every artboard from the design canvas, one link each.
export default function Screens() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px 96px' }}>
      <h1 style={{ margin: 0, fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em' }}>All screens</h1>
      <p style={{ margin: '8px 0 0', color: '#545A66', fontWeight: 500 }}>
        {BOARDS.length} artboards from the design. Each opens at its design size; pages also link to their live URL.
      </p>
      {GROUPS.map(([label, test]) => {
        const list = BOARDS.filter(test);
        if (!list.length) return null;
        return (
          <section key={label} style={{ marginTop: 40 }}>
            <h2 style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A3242F' }}>
              {label} · {list.length}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
              {list.map((b) => (
                <div key={b.name} style={{ padding: 16, borderRadius: 18, background: '#F7F8FA', border: '1px solid #ECEEF1', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <Link href={`/screens/${b.name}`} style={{ color: '#14161A', textDecoration: 'none', fontWeight: 800, fontSize: 15, lineHeight: 1.3 }}>
                    {b.title}
                  </Link>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#545A66' }}>
                    {b.name} · {b.w}×{b.h}
                  </span>
                  <span style={{ display: 'flex', gap: 12, fontSize: 13, fontWeight: 700 }}>
                    <Link href={`/screens/${b.name}`} style={{ color: '#C2323F' }}>Open screen</Link>
                    {b.route && <Link href={b.route}>Live page {b.route}</Link>}
                  </span>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
