'use client';
// AUTO-GENERATED from design/CaseStudy.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Consultation from './Consultation';
import DC_Footer from './Footer';

class Component extends DCLogic {
  renderVals() {
    // Official tool logos, served from /public/logos (see README). No logo -> letter tile.
    const logos = {"React": "react", "React Native": "react", "Next.js": "nextjs", "TypeScript": "typescript", "Node.js": "nodejs", "Figma": "figma", "Tailwind CSS": "tailwindcss", "Flutter": "flutter", "Python": "python", "PostgreSQL": "postgresql", "Supabase": "supabase", "OpenAI": "openai", "Vercel": "vercel", "AWS": "aws", "Claude": "claude", "LangChain": "langchain", "Canva": "canva", "Premiere Pro": "premierepro", "After Effects": "aftereffects", "Notion": "notion", "Webflow": "webflow", "Shopify": "shopify", "WooCommerce": "woocommerce", "Stripe": "stripe", "PayPal": "paypal", "Google Analytics": "googleanalytics", "Google Cloud": "googlecloud", "GitHub": "github", "Docker": "docker", "Expo": "expo", "Firebase": "firebase", "Framer": "framer", "Maze": "maze", "Loom": "loom"};
    const withLogos = (names) => names.map((name) => ({ name, logo: logos[name] ? '/logos/' + logos[name] + '.svg' : '', mono: logos[name] ? '' : name.charAt(0) }));
    return {
      meta: [
        { k: 'Client', v: 'Kestrel Health' },
        { k: 'Industry', v: 'Healthcare' },
        { k: 'Services', v: 'UI/UX · Mobile app · Backend' },
        { k: 'Platform', v: 'iOS & Android' },
        { k: 'Timeline', v: '21 days' }
      ],
      story: [
        { n: '01', label: 'Background', title: 'Patients could only book by phone.',
          text: 'Kestrel Health runs a group of busy clinics. Every appointment was booked over the phone, so front-desk staff spent much of their day on calls instead of with patients. Patients often waited on hold, had no easy way to change a booking, and many simply forgot their visit.',
          points: ['All bookings handled by phone', 'Long waits on hold at peak hours', 'No reminders, so frequent no-shows', 'Staff time lost to admin work'],
          icon: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0 M12 7v5l3 2', bulletPath: 'M5 12h14' },
        { n: '02', label: 'Objective', title: 'Let patients book in under a minute.',
          text: 'The goal was a simple app that patients could pick up without any help. It had to let them book, move or cancel a visit on their own, remind them before each appointment, and give clinic staff one clear view of the day. And it had to launch quickly, before the busy season.',
          points: ['Book a visit in a few taps', 'Change or cancel without calling', 'Automatic reminders before visits', 'Live on both app stores in 21 days'],
          icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8Z', bulletPath: 'M12 5l7 7-7 7 M5 12h14' },
        { n: '03', label: 'Solution', title: 'A booking app built around three taps.',
          text: 'We designed and built one iOS and Android app around a single, focused flow: pick a day, pick a time, confirm. Push notifications remind patients before every visit, and a simple web dashboard lets staff see and manage the day at a glance. We tested with real patients in week one and shipped to both stores in week three.',
          points: ['Three-tap booking flow', 'Push reminders and calendar sync', 'Staff dashboard for the clinic', 'Published on App Store and Google Play'],
          icon: 'M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z', bulletPath: 'M5 13l4 4L19 7' }
      ].map((x, i) => ({
        ...x,
        iconBg: i === 2 ? '#C2323F' : '#FFFFFF',
        iconInk: i === 2 ? '#FFFFFF' : '#C2323F',
        iconShadow: i === 2 ? 'inset 0 1px 0 rgba(255,255,255,0.3), 0 10px 20px -10px rgba(194,50,63,0.7)' : '0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)',
        bulletBg: i === 2 ? '#C2323F' : '#FBECEE',
        bulletInk: i === 2 ? '#FFFFFF' : '#C2323F'
      })),
      shots: [
        { span: 8, kind: 'Wide screenshot · 16:9', caption: 'Clinic dashboard', bg: '#EEF1F5' },
        { span: 4, kind: 'Phone screenshot · tall', caption: 'Booking flow', bg: '#FBECEE' },
        { span: 3, kind: 'Phone · tall', caption: 'Reminders', bg: '#FBECEE' },
        { span: 5, kind: 'Landscape screenshot', caption: 'Patient profile', bg: '#EEF1F5' },
        { span: 4, kind: 'Square screenshot', caption: 'App icon & splash', bg: '#F7F8FA' }
      ],
      results: [
        { value: '[00%]', label: '[Result, e.g. bookings now made in the app]' },
        { value: '[00%]', label: '[Result, e.g. fewer missed appointments]' },
        { value: '[0.0★]', label: '[Result, e.g. average app store rating]' }
      ],
      stack: withLogos(['React Native', 'Expo', 'TypeScript', 'Supabase', 'Firebase', 'Figma'])
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-casestudy">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={"Portfolio"} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "1176px", "boxSizing": "border-box", "padding": "16px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
        {" "}
        <div style={{"height": "600px", "flexShrink": "0", "boxSizing": "border-box", "padding": "44px 48px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          {" "}
          <div style={{"gridColumn": "span 7", "display": "flex", "flexDirection": "column", "justifyContent": "space-between"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px"}}>
              {" "}
              <nav aria-label={"Breadcrumb"} style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                {" "}
                <DcLink href={"/"} style={{"textDecoration": "none"}}>
                  {"Home"}
                </DcLink>
                {" "}
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} />
                </svg>
                {" "}
                <DcLink href={"/portfolio"} style={{"textDecoration": "none"}}>
                  {"Portfolio"}
                </DcLink>
                {" "}
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M9 6l6 6-6 6"} />
                </svg>
                {" "}
                <span style={{"color": "#14161A"}}>
                  {"Kestrel Health"}
                </span>
                {" "}
              </nav>
              {" "}
              <div style={{"display": "flex", "gap": "8px"}}>
                {" "}
                <span style={{"padding": "6px 12px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "12px", "fontWeight": "700"}}>
                  {"Case study"}
                </span>
                {" "}
                <span style={{"padding": "6px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "12px", "fontWeight": "700"}}>
                  {"Healthcare · Mobile app"}
                </span>
                {" "}
              </div>
              {" "}
              <h1 style={{"margin": "0", "fontSize": "52px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
                {"A clinic booking app, "}
                <span style={{"color": "#C2323F"}}>
                  {"launched in 21 days."}
                </span>
              </h1>
              {" "}
              <p style={{"margin": "0", "maxWidth": "600px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"How we helped Kestrel Health turn phone-call bookings into a simple app that lets patients book a visit in a few taps."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "10px"}}>
                {" "}
                <DcLink href={"#view-app"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "50px", "padding": "0 20px 0 14px", "borderRadius": "14px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.15), 0 10px 22px -12px rgba(20,22,26,0.6)"}}>
                  {" "}
                  <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
                  </svg>
                  {" "}
                  <span>
                    {"View the app"}
                  </span>
                  {" "}
                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M7 17L17 7M8 7h9v9"} />
                  </svg>
                  {" "}
                </DcLink>
                {" "}
                <DcLink href={"#visit-site"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "50px", "padding": "0 20px 0 14px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.2)", "color": "#14161A", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
                  {" "}
                  <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"12"} cy={"12"} r={"9"} />
                    <path d={"M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18"} />
                  </svg>
                  {" "}
                  <span>
                    {"Visit website"}
                  </span>
                  {" "}
                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M7 17L17 7M8 7h9v9"} />
                  </svg>
                  {" "}
                </DcLink>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "10px 10px 10px 22px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 12px 26px -16px rgba(20,22,26,0.25)"}}>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  {" "}
                  <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                    {"Have a problem to solve?"}
                  </span>
                  {" "}
                  <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                    {"Let's talk it through on a 20-minute call."}
                  </span>
                  {" "}
                </div>
                {" "}
                <DcLink href={"#contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "54px", "padding": "0 20px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
                  {" "}
                  <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "42px", "height": "42px", "display": "block", "borderRadius": "12px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
                  {" "}
                  <span>
                    {"Book a call with Siva"}
                  </span>
                  {" "}
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 12h14M13 5l7 7-7 7"} />
                  </svg>
                  {" "}
                </DcLink>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div style={{"gridColumn": "span 5", "display": "flex", "flexDirection": "column", "gap": "10px", "justifyContent": "center"}}>
            {" "}
            {dcList(dcGet(S, "meta")).map((__it, __i) => { const S6 = { ...S, "m": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "18px 20px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)"}}>
                  {" "}
                  <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
                    {dcStr(dcGet(S6, "m.k"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "15px", "fontWeight": "800", "textAlign": "right"}}>
                    {dcStr(dcGet(S6, "m.v"))}
                  </span>
                  {" "}
                </div>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"flexGrow": "1", "position": "relative", "borderRadius": "28px", "background": "#E9EBEF", "border": "1px solid #ECEEF1", "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px", "boxShadow": "0 16px 36px -18px rgba(20,22,26,0.25)"}}>
          {" "}
          <svg width={"64"} height={"64"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"3"} />
            <circle cx={"9"} cy={"9"} r={"2"} />
            <path d={"M21 15l-5-5L5 21"} />
          </svg>
          {" "}
          <span style={{"fontSize": "14px", "fontWeight": "700", "color": "#6B717D"}}>
            {"Project photo · wide"}
          </span>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#8A8F9A"}}>
            {"e.g. the app in use at the clinic, or a hero mockup"}
          </span>
          {" "}
          <div style={{"position": "absolute", "left": "20px", "bottom": "20px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 14px 10px 10px", "borderRadius": "16px", "background": "rgba(255,255,255,0.95)", "boxShadow": "0 12px 26px -14px rgba(20,22,26,0.35)"}}>
            {" "}
            <span style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
            </span>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "800"}}>
                {"Live on both stores"}
              </span>
              {" "}
              <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#545A66"}}>
                {"App Store · Google Play"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "1390px", "boxSizing": "border-box", "padding": "96px 24px 48px", "display": "flex", "flexDirection": "column", "gap": "48px"}}>
        {" "}
        {dcList(dcGet(S, "story")).map((__it, __i) => { const S4 = { ...S, "b": __it, $index: __i }; return (<React.Fragment key={__i}>
            {" "}
            <article style={{"flex": "1", "boxSizing": "border-box", "padding": "48px 56px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
              {" "}
              <div style={{"gridColumn": "span 4", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
                  {" "}
                  <span style={{"width": "56px", "height": "56px", "borderRadius": "18px", "background": `${dcStr(dcGet(S4, "b.iconBg"))}`, "boxShadow": `${dcStr(dcGet(S4, "b.iconShadow"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S4, "b.iconInk")} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S4, "b.icon")} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <span style={{"fontSize": "44px", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#DADCE1"}}>
                    {dcStr(dcGet(S4, "b.n"))}
                  </span>
                  {" "}
                </div>
                {" "}
                <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {dcStr(dcGet(S4, "b.label"))}
                </span>
                {" "}
                <h2 style={{"margin": "0", "fontSize": "32px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                  {dcStr(dcGet(S4, "b.title"))}
                </h2>
                {" "}
              </div>
              {" "}
              <div style={{"gridColumn": "span 8", "display": "flex", "flexDirection": "column", "gap": "20px", "paddingTop": "6px"}}>
                {" "}
                <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
                  {dcStr(dcGet(S4, "b.text"))}
                </p>
                {" "}
                <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "10px"}}>
                  {dcList(dcGet(S4, "b.points")).map((__it, __i) => { const S9 = { ...S4, "pt": __it, $index: __i }; return (<React.Fragment key={__i}>
                      {" "}
                      <li style={{"display": "flex", "alignItems": "flex-start", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "600"}}>
                        {" "}
                        <span style={{"width": "22px", "height": "22px", "flexShrink": "0", "borderRadius": "7px", "background": `${dcStr(dcGet(S9, "b.bulletBg"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                          <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S9, "b.bulletInk")} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                            <path d={dcGet(S9, "b.bulletPath")} />
                          </svg>
                        </span>
                        {" "}
                        <span>
                          {dcStr(dcGet(S9, "pt"))}
                        </span>
                        {" "}
                      </li>
                      {" "}
                    </React.Fragment>); })}
                </ul>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </React.Fragment>); })}
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "960px", "boxSizing": "border-box", "padding": "96px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "padding": "0 24px"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "16px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"Screens"}
              </span>
              {" "}
            </span>
            {" "}
            <h2 style={{"margin": "0", "fontSize": "44px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
              {"A closer look at "}
              <span style={{"color": "#C2323F"}}>
                {"the product."}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"flexGrow": "1", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gridTemplateRows": "420px 1fr", "gap": "16px"}}>
          {" "}
          {dcList(dcGet(S, "shots")).map((__it, __i) => { const S5 = { ...S, "g": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <figure style={{"gridColumn": `span ${dcStr(dcGet(S5, "g.span"))}`, "margin": "0", "position": "relative", "borderRadius": "24px", "background": `${dcStr(dcGet(S5, "g.bg"))}`, "border": "1px solid #ECEEF1", "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 14px 30px -18px rgba(20,22,26,0.22)"}}>
                {" "}
                <svg width={"48"} height={"48"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"3"} />
                  <circle cx={"9"} cy={"9"} r={"2"} />
                  <path d={"M21 15l-5-5L5 21"} />
                </svg>
                {" "}
                <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#6B717D"}}>
                  {dcStr(dcGet(S5, "g.kind"))}
                </span>
                {" "}
                <figcaption style={{"position": "absolute", "left": "14px", "bottom": "14px", "padding": "8px 14px", "borderRadius": "12px", "background": "rgba(255,255,255,0.95)", "boxShadow": "0 8px 20px -12px rgba(20,22,26,0.3)", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
                  {dcStr(dcGet(S5, "g.caption"))}
                </figcaption>
                {" "}
              </figure>
              {" "}
            </React.Fragment>); })}
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "360px", "boxSizing": "border-box", "padding": "72px 24px 24px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "0 48px", "display": "flex", "alignItems": "center", "gap": "40px", "borderRadius": "28px", "background": "#14161A", "color": "#FFFFFF", "boxShadow": "0 24px 48px -24px rgba(20,22,26,0.6)"}}>
          {" "}
          <div style={{"flexShrink": "0", "width": "260px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#E7B9BF"}}>
              {"The results"}
            </span>
            {" "}
            <span style={{"fontSize": "28px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"What changed after launch."}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"flexGrow": "1", "display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "14px"}}>
            {" "}
            {dcList(dcGet(S, "results")).map((__it, __i) => { const S6 = { ...S, "r": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <div style={{"padding": "26px", "borderRadius": "20px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <span style={{"fontSize": "44px", "fontWeight": "800", "letterSpacing": "-0.03em", "color": "#FFFFFF"}}>
                    {dcStr(dcGet(S6, "r.value"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "14px", "lineHeight": "1.5", "fontWeight": "600", "color": "#C9CCD3"}}>
                    {dcStr(dcGet(S6, "r.label"))}
                  </span>
                  {" "}
                </div>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "600px", "boxSizing": "border-box", "padding": "72px 24px 24px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "16px"}}>
        {" "}
        <DcLink href={"#video"} aria-label={"Watch the Kestrel Health story"} style={{"gridColumn": "span 4", "position": "relative", "display": "block", "borderRadius": "28px", "overflow": "hidden", "background": "#2A2D33", "textDecoration": "none", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.45)"}}>
          {" "}
          <div style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px"}}>
            {" "}
            <svg width={"100"} height={"100"} viewBox={"0 0 24 24"} fill={"#454952"} aria-hidden={"true"}>
              <circle cx={"12"} cy={"8"} r={"4.2"} />
              <path d={"M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7Z"} />
            </svg>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#8A8F9A"}}>
              {"Client video"}
            </span>
            {" "}
          </div>
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "margin": "-32px 0 0 -32px", "width": "64px", "height": "64px", "borderRadius": "64px", "background": "rgba(255,255,255,0.95)", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "0 10px 24px -8px rgba(0,0,0,0.5)"}}>
            <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
              <path d={"M8 5.5v13l11-6.5Z"} />
            </svg>
          </span>
          {" "}
          <span style={{"position": "absolute", "left": "16px", "bottom": "16px", "padding": "6px 12px", "borderRadius": "999px", "background": "rgba(20,22,26,0.6)", "fontSize": "12px", "fontWeight": "700", "color": "#FFFFFF"}}>
            {"1:24"}
          </span>
          {" "}
        </DcLink>
        {" "}
        <figure style={{"gridColumn": "span 8", "margin": "0", "boxSizing": "border-box", "padding": "48px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
            {" "}
            <svg width={"44"} height={"44"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
              <path d={"M4 18v-5.5C4 8.4 6.2 6 10 5.5V8c-2 .4-3 1.7-3 4h3v6Zm10 0v-5.5c0-4.1 2.2-6.5 6-7V8c-2 .4-3 1.7-3 4h3v6Z"} />
            </svg>
            {" "}
            <blockquote style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.38", "fontWeight": "700", "letterSpacing": "-0.02em"}}>
              {"\"We went from a rough idea to patients booking real appointments in three weeks. Rispit kept us focused on what mattered for the first version.\""}
            </blockquote>
            {" "}
          </div>
          {" "}
          <figcaption style={{"display": "flex", "alignItems": "center", "gap": "14px", "paddingTop": "24px", "borderTop": "1px solid #E3E5E9"}}>
            {" "}
            <span style={{"width": "52px", "height": "52px", "borderRadius": "52px", "background": "#E9EBEF", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"28"} height={"28"} viewBox={"0 0 24 24"} fill={"#B5B9C1"} aria-hidden={"true"}>
                <circle cx={"12"} cy={"8"} r={"4.2"} />
                <path d={"M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7Z"} />
              </svg>
            </span>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              {" "}
              <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                {"[Client Name]"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Founder, Kestrel Health]"}
              </span>
              {" "}
            </div>
            {" "}
          </figcaption>
          {" "}
        </figure>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "220px", "boxSizing": "border-box", "padding": "48px 24px 24px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "0 40px", "display": "flex", "alignItems": "center", "gap": "40px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)"}}>
          {" "}
          <div style={{"flexShrink": "0", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
              {"Built with"}
            </span>
            {" "}
            <span style={{"fontSize": "20px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Tech used"}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"flexGrow": "1", "display": "flex", "flexWrap": "wrap", "gap": "10px"}}>
            {" "}
            {dcList(dcGet(S, "stack")).map((__it, __i) => { const S6 = { ...S, "tool": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <span style={{"height": "52px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 18px 0 8px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "15px", "fontWeight": "800"}}>
                  {" "}
                  <span style={{"width": "36px", "height": "36px", "borderRadius": "10px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {dcTruthy(dcGet(S6, "tool.logo")) ? (<>
                      <img src={dcGet(S6, "tool.logo")} alt={""} style={{"width": "22px", "height": "22px", "display": "block", "objectFit": "contain"}} />
                    </>) : null}
                    {dcTruthy(dcGet(S6, "tool.mono")) ? (<>
                      <span style={{"fontSize": "13px", "fontWeight": "800", "color": "#545A66"}}>
                        {dcStr(dcGet(S6, "tool.mono"))}
                      </span>
                    </>) : null}
                  </span>
                  {" "}
                  <span>
                    {dcStr(dcGet(S6, "tool.name"))}
                  </span>
                  {" "}
                </span>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "300px", "boxSizing": "border-box", "padding": "48px 24px 24px"}}>
        {" "}
        <DcLink href={"/portfolio/kestrel-health"} style={{"height": "100%", "boxSizing": "border-box", "padding": "0 16px 0 48px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "32px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A", "overflow": "hidden"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Next case study"}
            </span>
            {" "}
            <span style={{"fontSize": "40px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"Lumora Analytics"}
            </span>
            {" "}
            <span style={{"fontSize": "15px", "fontWeight": "600", "color": "#545A66"}}>
              {"A sales dashboard that brings a team's numbers into one clear view."}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "24px"}}>
            {" "}
            <div aria-hidden={"true"} style={{"width": "300px", "height": "196px", "boxSizing": "border-box", "padding": "16px", "borderRadius": "18px", "background": "#FFFFFF", "boxShadow": "0 16px 36px -18px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "flex-end", "gap": "8px"}}>
              {" "}
              <span style={{"flex": "1", "height": "40%", "borderRadius": "5px", "background": "#DADCE1"}} />
              {" "}
              <span style={{"flex": "1", "height": "58%", "borderRadius": "5px", "background": "#DADCE1"}} />
              {" "}
              <span style={{"flex": "1", "height": "48%", "borderRadius": "5px", "background": "#DADCE1"}} />
              {" "}
              <span style={{"flex": "1", "height": "75%", "borderRadius": "5px", "background": "#DADCE1"}} />
              {" "}
              <span style={{"flex": "1", "height": "100%", "borderRadius": "5px", "background": "#C2323F"}} />
              {" "}
            </div>
            {" "}
            <span style={{"width": "64px", "height": "64px", "borderRadius": "20px", "background": "#C2323F", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.3), 0 10px 20px -10px rgba(194,50,63,0.7)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              {" "}
              <svg width={"26"} height={"26"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
        </DcLink>
        {" "}
      </section>
      {" "}
      {" "}
      <DC_Consultation  />
      {" "}
      <DC_Footer  />
      {" "}
    </div>
    </>
  );
};

export default function CaseStudy(props) {
  return <Component {...props} />;
}
