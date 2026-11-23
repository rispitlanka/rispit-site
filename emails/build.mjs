// Builds the three Rispit emails as email-client-safe HTML (tables + inline
// styles + PNG icons, no flexbox or SVG), matching the Email* design boards.
//
//   node emails/build.mjs
//
// Writes:
//   public/emails/<name>.html  - browser preview / "View in browser" page (root-relative images)
//   emails/dist/<name>.html    - paste into your email tool (absolute image URLs)
//
// Words in [brackets] are placeholders your booking / newsletter tool fills in
// (swap them for its merge tags, e.g. {{first_name}}).
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rispit.com').replace(/\/$/, '');

const F = "'Plus Jakarta Sans', Helvetica, Arial, sans-serif";
const INK = '#14161A', BODY = '#3B3F47', MUTED = '#545A66', RED = '#C2323F', DEEP = '#A3242F', PINK = '#FBECEE', SOFT = '#F7F8FA', LINE = '#ECEEF1';

const img = (base, file, w, h, alt = '', extra = '') =>
  `<img src="${base}/email/${file}" width="${w}" height="${h}" alt="${alt}" style="display:block;width:${w}px;height:${h}px;border:0;outline:none;text-decoration:none;${extra}">`;
const button = (href, label, { bg = RED, fg = '#FFFFFF', full = false, icon = '' } = {}) => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" ${full ? 'width="100%"' : ''} style="border-collapse:separate">
  <tr><td align="center" bgcolor="${bg}" style="border-radius:14px;background:${bg}">
    <a href="${href}" style="display:block;padding:16px 24px;font-family:${F};font-size:15px;font-weight:700;line-height:20px;color:${fg};text-decoration:none;border-radius:14px">${icon}${label}</a>
  </td></tr>
</table>`;

function shell({ title, preheader, body, base }) {
  return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light only">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
  body{margin:0;padding:0;background:#ECEEF1}
  a{color:${RED}}
  @media (max-width:620px){
    .wrap{width:100%!important}
    .px{padding-left:20px!important;padding-right:20px!important}
    .mx{margin-left:20px!important;margin-right:20px!important}
    .h1{font-size:28px!important}
    .stack{display:block!important;width:100%!important}
  }
</style>
</head>
<body style="margin:0;padding:0;background:#ECEEF1">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all">${preheader}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ECEEF1" style="background:#ECEEF1">
<tr><td align="center" style="padding:32px 12px">
<table role="presentation" class="wrap" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="width:600px;max-width:600px;background:#FFFFFF;border-radius:24px;overflow:hidden">
${header(base)}
${body}
</table>
</td></tr>
</table>
</body>
</html>
`;
}

const header = (base) => `
<tr><td class="px" style="padding:21px 36px;border-bottom:1px solid #F1F2F4">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td valign="middle" width="44">${img(base, 'logo.png', 34, 34, 'Rispit')}</td>
    <td valign="middle" style="font-family:${F}">
      <div style="font-size:20px;line-height:20px;font-weight:800;letter-spacing:-0.02em;color:${RED}">Rispit</div>
      <div style="padding-top:3px;font-size:8px;line-height:8px;font-weight:700;letter-spacing:0.24em;text-transform:uppercase;color:${MUTED}">We do things</div>
    </td>
    <td valign="middle" align="right" style="font-family:${F}"><a href="[View in browser URL]" style="font-size:12px;font-weight:700;color:${MUTED};text-decoration:none">View in browser</a></td>
  </tr></table>
</td></tr>`;

const xmas = (base) => `
<tr><td class="px" style="padding:0 36px 28px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${DEEP}" style="background:${DEEP};border-radius:14px"><tr>
    <td width="48" valign="middle" style="padding:14px 0 14px 16px">${img(base, 'tile-gift.png', 32, 32)}</td>
    <td valign="middle" style="padding:14px 16px 14px 12px;font-family:${F};font-size:13px;line-height:19px;font-weight:600;color:#FFFFFF"><strong style="font-weight:800">Christmas offer:</strong> book your project before [31 December] and get 20% off your build.</td>
  </tr></table>
</td></tr>`;

const footer = (base, note, linkLabel, linkHref) => `
<tr><td class="px" align="center" bgcolor="${SOFT}" style="padding:28px 36px 32px;background:${SOFT};text-align:center;font-family:${F}">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr>
    <td style="padding:0 4px"><a href="[LinkedIn URL]">${img(base, 'social-linkedin.png', 34, 34, 'LinkedIn')}</a></td>
    <td style="padding:0 4px"><a href="[Instagram URL]">${img(base, 'social-instagram.png', 34, 34, 'Instagram')}</a></td>
    <td style="padding:0 4px"><a href="[X URL]">${img(base, 'social-x.png', 34, 34, 'X')}</a></td>
  </tr></table>
  <div style="padding-top:14px;font-size:12px;line-height:19px;font-weight:500;color:${MUTED}">Rispit · Jaffna, Sri Lanka · [hello@rispit.com]<br>${note}</div>
  <div style="padding-top:14px;font-size:12px;font-weight:600;color:#7A808C"><a href="${SITE}/privacy" style="color:${MUTED}">Privacy Policy</a> · <a href="${linkHref}" style="color:${MUTED}">${linkLabel}</a></div>
</td></tr>`;

const signoff = (base) => `
<tr><td class="px" style="padding:0 36px 32px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #F1F2F4"><tr>
    <td width="66" valign="middle" style="padding-top:24px">${img(base, 'siva.png', 52, 52, '', 'border-radius:16px')}</td>
    <td valign="middle" style="padding-top:24px;font-family:${F}">
      <div style="font-size:15px;line-height:20px;font-weight:800;color:${INK}">Talk soon, Siva</div>
      <div style="font-size:13px;line-height:18px;font-weight:600;color:${MUTED}">Founder, Rispit</div>
    </td>
  </tr></table>
</td></tr>`;

// ---------- Booking confirmation ----------
function confirm(base) {
  const detail = (icon, label, value) => `
    <tr><td style="padding-bottom:16px"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="54" valign="middle">${img(base, icon, 40, 40)}</td>
      <td valign="middle" style="font-family:${F}">
        <div style="font-size:11px;line-height:15px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${MUTED}">${label}</div>
        <div style="font-size:15px;line-height:20px;font-weight:800;color:${INK}">${value}</div>
      </td></tr></table></td></tr>`;
  const tip = (t) => `
    <tr><td style="padding-top:12px"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="32" valign="top" style="padding-top:1px">${img(base, 'bullet-check.png', 22, 22)}</td>
      <td valign="top" style="font-family:${F};font-size:15px;line-height:22px;font-weight:500;color:${BODY}">${t}</td>
    </tr></table></td></tr>`;
  return shell({
    base,
    title: 'Your call with Rispit is confirmed',
    preheader: "Here's everything you need for our call, plus how to get the most out of it.",
    body: `
<tr><td class="px" style="padding:40px 36px 28px;font-family:${F}">
  ${img(base, 'confirm-check.png', 64, 64)}
  <div class="h1" style="padding-top:18px;font-size:34px;line-height:37px;font-weight:800;letter-spacing:-0.03em;color:${INK}">You're booked, [First name]!</div>
  <div style="padding-top:18px;font-size:16px;line-height:26px;font-weight:500;color:${BODY}">Thanks for booking a call with Rispit. We're looking forward to hearing about your idea. Here are the details:</div>
</td></tr>
<tr><td class="px" style="padding:0 36px 28px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${SOFT}" style="background:${SOFT};border:1px solid ${LINE};border-radius:18px">
  <tr><td style="padding:24px 24px 8px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${detail('tile-cal.png', 'Date', '[Tuesday, 24 November 2026]')}
      ${detail('tile-clock.png', 'Time', '[14:00 – 14:20, your time zone]')}
      ${detail('tile-video.png', 'Where', 'Video call')}
    </table>
  </td></tr>
  <tr><td style="padding:0 24px">${button('[Video call URL]', 'Join the video call', { full: true })}</td></tr>
  <tr><td align="center" style="padding:16px 24px 24px;font-family:${F};font-size:13px;font-weight:700">
    <a href="[Google Calendar URL]" style="color:${RED}">Add to Google</a><span style="color:#DADCE1">&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="[Outlook URL]" style="color:${RED}">Outlook</a><span style="color:#DADCE1">&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="[.ics URL]" style="color:${RED}">Apple (.ics)</a>
  </td></tr>
  </table>
</td></tr>
<tr><td class="px" style="padding:0 36px 28px">
  <div style="font-family:${F};font-size:17px;line-height:22px;font-weight:800;color:${INK}">To get the most out of the call</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    ${tip('Think about the one problem your product solves.')}
    ${tip('Know who your first users will be.')}
    ${tip('Bring any sketches, notes or links you have.')}
  </table>
</td></tr>
${xmas(base)}
${signoff(base)}
<tr><td class="px" style="padding:0 36px 32px;font-family:${F};font-size:13px;line-height:21px;font-weight:500;color:${MUTED}">Need a different time? <a href="[Reschedule URL]" style="font-weight:700;color:${RED}">Reschedule</a> or <a href="[Cancel URL]" style="font-weight:700;color:${RED}">cancel</a> your call.</td></tr>
${footer(base, "You're receiving this email because you booked a call on rispit.com.", 'Manage booking', '[Manage booking URL]')}`,
  });
}

// ---------- 1-hour reminder ----------
function reminder(base) {
  const step = (n, t) => `
    <tr><td style="padding-top:12px"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="32" valign="top"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td width="20" height="20" align="center" valign="middle" bgcolor="#FFFFFF" style="width:20px;height:20px;border:1px solid ${LINE};border-radius:7px;background:#FFFFFF;font-family:${F};font-size:11px;line-height:20px;font-weight:800;color:${RED}">${n}</td></tr></table></td>
      <td valign="top" style="font-family:${F};font-size:14px;line-height:21px;font-weight:500;color:${BODY}">${t}</td>
    </tr></table></td></tr>`;
  return shell({
    base,
    title: 'Your call with Rispit starts in 1 hour',
    preheader: 'Your 20-minute call with Rispit starts in 1 hour. Join from your browser, no download needed.',
    body: `
<tr><td class="px" style="padding:40px 36px 24px;font-family:${F}">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="${PINK}" style="background:${PINK};border-radius:999px"><tr>
    <td valign="middle" style="padding:7px 8px 7px 10px">${img(base, 'pill-clock.png', 15, 15)}</td>
    <td valign="middle" style="padding:7px 14px 7px 0;font-family:${F};font-size:13px;line-height:15px;font-weight:800;color:${DEEP}">Starting in 1 hour</td>
  </tr></table>
  <div class="h1" style="padding-top:16px;font-size:34px;line-height:37px;font-weight:800;letter-spacing:-0.03em;color:${INK}">Your call is today, [First name].</div>
  <div style="padding-top:16px;font-size:16px;line-height:26px;font-weight:500;color:${BODY}">Just a quick reminder about your 20-minute call with Rispit. The link below opens the video call in your browser, no download needed.</div>
</td></tr>
<tr><td class="px" style="padding:0 36px 28px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${RED}" style="background:${RED};border-radius:20px">
  <tr><td style="padding:26px 24px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td valign="middle" style="font-family:${F};color:#FFFFFF">
        <div style="font-size:12px;line-height:16px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${PINK}">Today</div>
        <div style="padding-top:4px;font-size:40px;line-height:40px;font-weight:800;letter-spacing:-0.03em;color:#FFFFFF">[14:00]</div>
        <div style="padding-top:4px;font-size:13px;line-height:18px;font-weight:600;color:#FFFFFF">[Your time zone] · 20 minutes</div>
      </td>
      <td valign="middle" align="right" width="72">${img(base, 'siva.png', 72, 72, '', 'border-radius:22px;border:3px solid #FFFFFF;box-sizing:border-box')}</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:0 24px 24px">${button('[Video call URL]', 'Join the video call', { bg: '#FFFFFF', fg: INK, full: true, icon: `<img src="${base}/email/btn-video.png" width="18" height="18" alt="" style="display:inline-block;vertical-align:-4px;margin-right:10px;border:0">` })}</td></tr>
  </table>
</td></tr>
<tr><td class="px" style="padding:0 36px 28px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${SOFT}" style="background:${SOFT};border:1px solid ${LINE};border-radius:18px"><tr><td style="padding:22px">
    <div style="font-family:${F};font-size:15px;line-height:20px;font-weight:800;color:${INK}">Before we talk</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${step(1, 'Find a quiet spot with a good connection.')}
      ${step(2, 'Have your idea, notes or sketches ready to share.')}
      ${step(3, 'Write down your top questions so we cover them.')}
    </table>
  </td></tr></table>
</td></tr>
<tr><td class="px" style="padding:0 36px 32px;font-family:${F};font-size:13px;line-height:21px;font-weight:500;color:${MUTED}">Can't make it? <a href="[Reschedule URL]" style="font-weight:700;color:${RED}">Pick a new time</a>. It only takes a few seconds.</td></tr>
${footer(base, "You're receiving this email because you booked a call on rispit.com.", 'Manage booking', '[Manage booking URL]')}`,
  });
}

// ---------- Newsletter ----------
function newsletter(base) {
  const also = (thumb, tag, title, text) => `
    <tr><td style="padding-top:12px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${SOFT}" style="background:${SOFT};border:1px solid ${LINE};border-radius:16px"><tr>
        <td width="96" valign="top" style="padding:14px 0 14px 14px"><a href="[Article URL]">${img(base, thumb, 96, 96)}</a></td>
        <td valign="top" style="padding:18px 14px 14px 16px;font-family:${F}">
          <div style="font-size:11px;line-height:15px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${DEEP}">${tag}</div>
          <a href="[Article URL]" style="display:block;padding-top:6px;font-size:16px;line-height:21px;font-weight:800;color:${INK};text-decoration:none">${title}</a>
          <div style="padding-top:6px;font-size:13px;line-height:20px;font-weight:500;color:${MUTED}">${text}</div>
        </td>
      </tr></table>
    </td></tr>`;
  return shell({
    base,
    title: 'The Rispit Letter',
    preheader: "Here's what we learned this month, plus the 21-day MVP playbook.",
    body: `
<tr><td class="px" style="padding:32px 36px 8px;font-family:${F}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
    <td style="font-family:${F};font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${DEEP}">The Rispit Letter</td>
    <td align="right" style="font-family:${F};font-size:12px;font-weight:700;color:${MUTED}">Issue #[01] · [December 2026]</td>
  </tr></table>
  <div class="h1" style="padding-top:8px;font-size:30px;line-height:35px;font-weight:800;letter-spacing:-0.03em;color:${INK}">Hi [First name], here's what we learned this month.</div>
  <div style="padding-top:8px;font-size:15px;line-height:25px;font-weight:500;color:${BODY}">[A short, friendly intro of two or three sentences about what's new at Rispit and what this issue covers.]</div>
</td></tr>
<tr><td class="px" style="padding:20px 36px 28px;font-family:${F}">
  <a href="[Article URL]">${img(base, 'hero-rocket.png', 528, 220, 'The 21-day MVP playbook', 'width:100%;max-width:528px;height:auto;border-radius:18px')}</a>
  <div style="padding-top:14px;font-size:11px;line-height:15px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:${DEEP}">Featured · Playbook</div>
  <div style="padding-top:14px;font-size:24px;line-height:29px;font-weight:800;letter-spacing:-0.02em;color:${INK}">The 21-day MVP playbook: from idea to launch</div>
  <div style="padding:14px 0;font-size:15px;line-height:24px;font-weight:500;color:${BODY}">Our full process, day by day: how we scope, design, build and launch a first version in three weeks.</div>
  ${button('[Article URL]', 'Read the article')}
</td></tr>
<tr><td class="px" style="padding:0 36px 28px">
  <div style="font-family:${F};font-size:17px;line-height:22px;font-weight:800;color:${INK}">Also this month</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    ${also('thumb-compass.png', 'Product strategy', 'How to test your idea before writing any code', 'Cheap, fast ways to learn if people want what you plan to build.')}
    ${also('thumb-sparkle.png', 'AI', 'Adding AI to your product without overbuilding', 'Where AI features help early users, and where they just add cost.')}
  </table>
</td></tr>
<tr><td class="px" style="padding:0 36px 28px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${INK}" style="background:${INK};border-radius:18px"><tr>
    <td width="120" valign="middle" style="padding:20px 0 20px 20px">${img(base, 'thumb-image.png', 120, 120, '[Project image]')}</td>
    <td valign="middle" style="padding:20px 20px 20px 16px;font-family:${F}">
      <div style="font-size:11px;line-height:15px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#E7B9BF">From the studio</div>
      <div style="padding-top:6px;font-size:17px;line-height:22px;font-weight:800;color:#FFFFFF">We just launched [Project name]</div>
      <div style="padding-top:6px;font-size:13px;line-height:20px;font-weight:500;color:#C9CCD3">[One or two lines about a recent launch.]</div>
      <a href="[Case study URL]" style="display:block;padding-top:6px;font-size:13px;font-weight:800;color:#F4A3AB;text-decoration:none">Read the case study &rarr;</a>
    </td>
  </tr></table>
</td></tr>
${xmas(base)}
<tr><td class="px" style="padding:0 36px 32px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${PINK}" style="background:${PINK};border-radius:18px"><tr><td align="center" style="padding:24px;font-family:${F};text-align:center">
    <div style="font-size:20px;line-height:25px;font-weight:800;letter-spacing:-0.02em;color:${INK}">Have an idea you want to build?</div>
    <div style="padding:14px 0;font-size:14px;line-height:22px;font-weight:500;color:${BODY}">Let's plan your first version together on a free 20-minute call.</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td bgcolor="${RED}" style="background:${RED};border-radius:14px">
      <a href="${SITE}/contact" style="display:block;padding:8px 20px 8px 8px;font-family:${F};font-size:15px;line-height:36px;font-weight:700;color:#FFFFFF;text-decoration:none"><img src="${base}/email/siva.png" width="36" height="36" alt="" style="display:inline-block;vertical-align:middle;margin-right:10px;border:2px solid #FFFFFF;border-radius:11px;box-sizing:border-box">Book a call with Siva</a>
    </td></tr></table>
  </td></tr></table>
</td></tr>
${footer(base, "You're receiving this because you subscribed to The Rispit Letter.", 'Unsubscribe', '[Unsubscribe URL]')}`,
  });
}

const EMAILS = { 'booking-confirmation': confirm, 'call-reminder': reminder, newsletter };
fs.mkdirSync(path.join(ROOT, 'public', 'emails'), { recursive: true });
fs.mkdirSync(path.join(ROOT, 'emails', 'dist'), { recursive: true });
for (const [name, fn] of Object.entries(EMAILS)) {
  fs.writeFileSync(path.join(ROOT, 'public', 'emails', `${name}.html`), fn(''));
  fs.writeFileSync(path.join(ROOT, 'emails', 'dist', `${name}.html`), fn(SITE));
}
console.log(`built ${Object.keys(EMAILS).length} emails -> public/emails (preview) and emails/dist (absolute URLs: ${SITE})`);
