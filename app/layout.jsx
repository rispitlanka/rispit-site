import { Plus_Jakarta_Sans } from 'next/font/google';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';
import './dc.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rispit.com'),
  title: { default: 'Rispit — We do things', template: '%s — Rispit' },
  description: "Design, build and launch your startup's first version. Rispit makes your MVP in 21 days.",
  openGraph: {
    type: 'website',
    siteName: 'Rispit',
    title: 'Rispit — Make your MVP in 21 days',
    description: "Design, build and launch your startup's first version.",
  },
  twitter: { card: 'summary_large_image', title: 'Rispit — Make your MVP in 21 days' },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#C2323F' };

// Sets --dz (desktop zoom) before first paint and on resize. See globals.css.
const ZOOM_SCRIPT = `(function(){var d=document.documentElement;function z(){var w=window.innerWidth;d.style.setProperty('--dz',w>=1024&&w<1280?String(w/1280):'1')}z();window.addEventListener('resize',z)})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ZOOM_SCRIPT }} />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
