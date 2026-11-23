'use client';
// AUTO-GENERATED from design/ServiceMobile.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Consultation from './Consultation';
import DC_Footer from './Footer';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { open: 0 };
  }
  renderVals() {
    // Official tool logos, served from /public/logos (see README). No logo -> letter tile.
    const logos = {"React": "react", "React Native": "react", "Next.js": "nextjs", "TypeScript": "typescript", "Node.js": "nodejs", "Figma": "figma", "Tailwind CSS": "tailwindcss", "Flutter": "flutter", "Python": "python", "PostgreSQL": "postgresql", "Supabase": "supabase", "OpenAI": "openai", "Vercel": "vercel", "AWS": "aws", "Claude": "claude", "LangChain": "langchain", "Canva": "canva", "Premiere Pro": "premierepro", "After Effects": "aftereffects", "Notion": "notion", "Webflow": "webflow", "Shopify": "shopify", "WooCommerce": "woocommerce", "Stripe": "stripe", "PayPal": "paypal", "Google Analytics": "googleanalytics", "Google Cloud": "googlecloud", "GitHub": "github", "Docker": "docker", "Expo": "expo", "Firebase": "firebase", "Framer": "framer", "Maze": "maze", "Loom": "loom"};
    const withLogos = (names) => names.map((name) => ({ name, logo: logos[name] ? '/logos/' + logos[name] + '.svg' : '', mono: logos[name] ? '' : name.charAt(0) }));
    const features = [
      { title: 'iOS & Android, one codebase', text: 'One app that runs natively on both platforms, so you launch everywhere for the cost of one.', icon: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2' },
      { title: 'Native look and feel', text: 'Smooth animations and familiar gestures that feel right at home on every phone.', icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z' },
      { title: 'Push notifications', text: 'Reminders and updates that bring users back to your app at the right moment.', icon: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.9 1.9 0 0 0 3.4 0' },
      { title: 'Payments & subscriptions', text: 'Secure in-app payments and subscriptions, set up and tested before launch.', icon: 'M2 6h20v12H2Z M2 10h20 M6 15h4' },
      { title: 'Login & user accounts', text: 'Email, Google and Apple sign-in, with profiles and data kept safely in the cloud.', icon: 'M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z M4 21c1-4 4-6 8-6s7 2 8 6' },
      { title: 'App Store & Google Play launch', text: 'We prepare the listings, screenshots and submissions, and guide your app through review.', icon: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z' }
    ];
    const steps = [
      { n: '1', days: 'Day 1–3', title: 'Plan & scope', text: 'We agree on the core features, user flows and a clear plan for your first version.' },
      { n: '2', days: 'Day 4–8', title: 'Design', text: 'App screens and a clickable prototype you can test on your own phone.' },
      { n: '3', days: 'Day 9–17', title: 'Build', text: 'We develop the app and backend, with a working demo you can try every week.' },
      { n: '4', days: 'Day 18–21', title: 'Test & launch', text: 'Testing on real devices, then submission to the App Store and Google Play.' }
    ].map((s, i) => ({ ...s, badgeBg: i === 3 ? '#C2323F' : '#FFFFFF', badgeFg: i === 3 ? '#FFFFFF' : '#C2323F' }));
    const faqList = [
      { q: 'Do you build for both iOS and Android?', a: 'Yes. We use a cross-platform framework, so one codebase runs natively on both iPhone and Android phones. That keeps your cost and timeline down.' },
      { q: 'Can a real app really launch in 21 days?', a: 'For a focused first version, yes. We agree on the most important features in week one and save the nice-to-haves for later updates.' },
      { q: 'Who owns the code and the app?', a: 'You do. The code, designs and store accounts are all yours from day one.' },
      { q: 'Do you help publish to the App Store and Google Play?', a: 'Yes. We prepare the listings and screenshots, submit the app and handle any feedback from the store review.' },
      { q: 'What happens after launch?', a: 'We can keep improving the app with you on a monthly plan, or hand everything over cleanly to your own team.' }
    ];
    const faqs = faqList.map((f, i) => {
      const open = i === this.state.open;
      return {
        ...f, open,
        expanded: String(open),
        bg: open ? '#FFFFFF' : '#F7F8FA',
        shadow: open ? '0 14px 30px -18px rgba(20,22,26,0.25)' : '0 0 0 transparent',
        iconBg: open ? '#C2323F' : '#FFFFFF',
        iconInk: open ? '#FFFFFF' : '#C2323F',
        iconPath: open ? 'M5 12h14' : 'M12 5v14 M5 12h14',
        toggle: () => this.setState({ open: open ? -1 : i })
      };
    });
    return { features, steps, faqs, stack: withLogos(['React Native', 'Expo', 'Flutter', 'TypeScript', 'Firebase', 'Supabase', 'Stripe']) };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-servicemobile">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={"Services"} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "640px", "boxSizing": "border-box", "padding": "16px 24px 24px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "16px"}}>
        {" "}
        <div style={{"gridColumn": "span 6", "height": "600px", "boxSizing": "border-box", "padding": "44px 48px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "22px"}}>
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
              <DcLink href={"/"} style={{"textDecoration": "none"}}>
                {"Services"}
              </DcLink>
              {" "}
              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 6l6 6-6 6"} />
              </svg>
              {" "}
              <span style={{"color": "#14161A"}}>
                {"Mobile Apps"}
              </span>
              {" "}
            </nav>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"Mobile App Development"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "56px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Mobile apps your users will love, "}
              <span style={{"color": "#C2323F"}}>
                {"live in 21 days."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "maxWidth": "520px", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"We design and build iOS and Android apps from a single codebase, then get them published on the App Store and Google Play."}
            </p>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
              {" "}
              <DcLink href={"#contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 22px 0 7px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
                {" "}
                <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "42px", "height": "42px", "display": "block", "borderRadius": "12px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
                {" "}
                <span>
                  {"Book a call with Siva"}
                </span>
                {" "}
              </DcLink>
              {" "}
              <DcLink href={"#mobile-work"} style={{"display": "flex", "alignItems": "center", "height": "56px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "color": "#14161A", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
                {"See mobile work"}
              </DcLink>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "20px", "fontSize": "14px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"iOS & Android"}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"One codebase"}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Store-ready launch"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div aria-hidden={"true"} style={{"gridColumn": "span 6", "height": "600px", "position": "relative", "borderRadius": "28px", "background": "#FBECEE", "border": "1px solid #F4DADD", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 16px 36px -18px rgba(194,50,63,0.3)", "overflow": "hidden"}}>
          {" "}
          <span style={{"position": "absolute", "width": "420px", "height": "420px", "borderRadius": "420px", "left": "50%", "top": "50%", "margin": "-210px 0 0 -210px", "border": "1.5px dashed #E7B9BF"}} />
          {" "}
          {" "}
          <div className={"servicemobile--rsp-fb"} style={{"position": "absolute", "left": "330px", "top": "84px"}}>
            {" "}
            <div style={{"width": "220px", "height": "450px", "boxSizing": "border-box", "padding": "10px", "borderRadius": "40px", "background": "#14161A", "transform": "rotate(7deg)", "boxShadow": "0 30px 50px -24px rgba(20,22,26,0.5)"}}>
              {" "}
              <div style={{"height": "100%", "boxSizing": "border-box", "padding": "26px 16px 16px", "borderRadius": "31px", "background": "#FFFFFF", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
                {" "}
                <span style={{"fontSize": "13px", "fontWeight": "800"}}>
                  {"Your progress"}
                </span>
                {" "}
                <div style={{"height": "110px", "display": "flex", "alignItems": "flex-end", "gap": "8px", "padding": "10px", "borderRadius": "14px", "background": "#F7F8FA"}}>
                  {" "}
                  <span style={{"flex": "1", "height": "40%", "borderRadius": "4px", "background": "#DADCE1"}} />
                  {" "}
                  <span style={{"flex": "1", "height": "65%", "borderRadius": "4px", "background": "#DADCE1"}} />
                  {" "}
                  <span style={{"flex": "1", "height": "50%", "borderRadius": "4px", "background": "#DADCE1"}} />
                  {" "}
                  <span style={{"flex": "1", "height": "85%", "borderRadius": "4px", "background": "#C2323F"}} />
                  {" "}
                  <span style={{"flex": "1", "height": "70%", "borderRadius": "4px", "background": "#DADCE1"}} />
                  {" "}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <span style={{"height": "40px", "borderRadius": "12px", "background": "#F7F8FA"}} />
                  {" "}
                  <span style={{"height": "40px", "borderRadius": "12px", "background": "#F7F8FA"}} />
                  {" "}
                  <span style={{"height": "40px", "borderRadius": "12px", "background": "#F7F8FA"}} />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div className={"servicemobile--rsp-fa"} style={{"position": "absolute", "left": "140px", "top": "60px"}}>
            {" "}
            <div style={{"width": "230px", "height": "470px", "boxSizing": "border-box", "padding": "10px", "borderRadius": "42px", "background": "#14161A", "transform": "rotate(-5deg)", "boxShadow": "0 36px 60px -24px rgba(20,22,26,0.55)"}}>
              {" "}
              <div style={{"height": "100%", "boxSizing": "border-box", "padding": "18px 16px 16px", "borderRadius": "33px", "background": "#FFFFFF", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
                {" "}
                <span style={{"alignSelf": "center", "width": "70px", "height": "20px", "borderRadius": "20px", "background": "#14161A"}} />
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  {" "}
                  <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#545A66"}}>
                    {"Good morning"}
                  </span>
                  {" "}
                  <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                    {"Book your session"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"padding": "14px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
                  {" "}
                  <span style={{"fontSize": "10px", "fontWeight": "700", "opacity": "0.85"}}>
                    {"NEXT UP"}
                  </span>
                  {" "}
                  <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                    {"Tue, 10:30"}
                  </span>
                  {" "}
                  <span style={{"alignSelf": "flex-start", "marginTop": "4px", "padding": "5px 10px", "borderRadius": "8px", "background": "rgba(255,255,255,0.2)", "fontSize": "10px", "fontWeight": "700"}}>
                    {"View details"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "8px"}}>
                  {" "}
                  <span style={{"height": "64px", "borderRadius": "14px", "background": "#F7F8FA"}} />
                  {" "}
                  <span style={{"height": "64px", "borderRadius": "14px", "background": "#F7F8FA"}} />
                  {" "}
                  <span style={{"height": "64px", "borderRadius": "14px", "background": "#F7F8FA"}} />
                  {" "}
                  <span style={{"height": "64px", "borderRadius": "14px", "background": "#F7F8FA"}} />
                  {" "}
                </div>
                {" "}
                <div style={{"marginTop": "auto", "display": "flex", "justifyContent": "space-around", "paddingTop": "10px", "borderTop": "1px solid #F1F2F4"}}>
                  {" "}
                  <span style={{"width": "22px", "height": "22px", "borderRadius": "7px", "background": "#C2323F"}} />
                  {" "}
                  <span style={{"width": "22px", "height": "22px", "borderRadius": "7px", "background": "#ECEEF1"}} />
                  {" "}
                  <span style={{"width": "22px", "height": "22px", "borderRadius": "7px", "background": "#ECEEF1"}} />
                  {" "}
                  <span style={{"width": "22px", "height": "22px", "borderRadius": "7px", "background": "#ECEEF1"}} />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div className={"servicemobile--rsp-fb"} style={{"position": "absolute", "left": "40px", "top": "120px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 16px 12px 12px", "borderRadius": "16px", "background": "#FFFFFF", "boxShadow": "0 16px 32px -14px rgba(20,22,26,0.3)"}}>
            {" "}
            <span style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"} />
                <path d={"M10.3 21a1.9 1.9 0 0 0 3.4 0"} />
              </svg>
            </span>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "800"}}>
                {"Booking confirmed"}
              </span>
              {" "}
              <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#545A66"}}>
                {"Push notification"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className={"servicemobile--rsp-fa"} style={{"position": "absolute", "right": "36px", "bottom": "70px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 16px 12px 12px", "borderRadius": "16px", "background": "#FFFFFF", "boxShadow": "0 16px 32px -14px rgba(20,22,26,0.3)"}}>
            {" "}
            <span style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
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
      <section style={{"height": "760px", "boxSizing": "border-box", "padding": "96px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "48px"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "padding": "0 24px"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px", "maxWidth": "760px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"What's Included"}
              </span>
              {" "}
            </span>
            {" "}
            <h2 style={{"margin": "0", "fontSize": "48px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
              {"Everything your app needs "}
              <span style={{"color": "#C2323F"}}>
                {"to launch."}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <p style={{"margin": "0", "maxWidth": "400px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"The essentials every first version needs, built properly so your app is ready for real users on day one."}
          </p>
          {" "}
        </div>
        {" "}
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "16px"}}>
          {" "}
          {dcList(dcGet(S, "features")).map((__it, __i) => { const S5 = { ...S, "f": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <div style={{"height": "222px", "boxSizing": "border-box", "padding": "28px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
                {" "}
                <span style={{"width": "52px", "height": "52px", "borderRadius": "16px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <svg width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S5, "f.icon")} />
                  </svg>
                  {" "}
                </span>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                    {dcStr(dcGet(S5, "f.title"))}
                  </h3>
                  {" "}
                  <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                    {dcStr(dcGet(S5, "f.text"))}
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </React.Fragment>); })}
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "640px", "boxSizing": "border-box", "padding": "72px 24px 24px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "48px", "display": "flex", "flexDirection": "column", "gap": "40px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "16px"}}>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
                {" "}
                <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
                {" "}
                <span>
                  {"How It Works"}
                </span>
                {" "}
              </span>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "44px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
                {"From idea to app store "}
                <span style={{"color": "#C2323F"}}>
                  {"in 21 days."}
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <p style={{"margin": "0", "maxWidth": "360px", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"A clear plan with a demo at the end of every week, so you always see real progress."}
            </p>
            {" "}
          </div>
          {" "}
          <div style={{"position": "relative", "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "16px"}}>
            {" "}
            <span aria-hidden={"true"} style={{"position": "absolute", "left": "40px", "right": "40px", "top": "27px", "height": "2px", "background": "repeating-linear-gradient(90deg, #E7B9BF 0 8px, transparent 8px 14px)"}} />
            {" "}
            {dcList(dcGet(S, "steps")).map((__it, __i) => { const S6 = { ...S, "s": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <div className={"servicemobile--rsp-step"} style={{"position": "relative", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
                  {" "}
                  <span style={{"width": "56px", "height": "56px", "borderRadius": "18px", "background": `${dcStr(dcGet(S6, "s.badgeBg"))}`, "color": `${dcStr(dcGet(S6, "s.badgeFg"))}`, "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.3), 0 10px 20px -10px rgba(194,50,63,0.55)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "20px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S6, "s.n"))}
                  </span>
                  {" "}
                  <div style={{"flexGrow": "1", "boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "8px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05), 0 10px 22px -14px rgba(20,22,26,0.2)"}}>
                    {" "}
                    <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                      {dcStr(dcGet(S6, "s.days"))}
                    </span>
                    {" "}
                    <span style={{"fontSize": "19px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                      {dcStr(dcGet(S6, "s.title"))}
                    </span>
                    {" "}
                    <span style={{"fontSize": "14px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                      {dcStr(dcGet(S6, "s.text"))}
                    </span>
                    {" "}
                  </div>
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
      <section id={"mobile-work"} style={{"height": "640px", "boxSizing": "border-box", "padding": "72px 24px 24px"}}>
        {" "}
        <article style={{"height": "100%", "boxSizing": "border-box", "padding": "14px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div aria-hidden={"true"} style={{"gridColumn": "span 6", "borderRadius": "22px", "background": "#EEF1F5", "display": "flex", "alignItems": "flex-end", "justifyContent": "center", "gap": "24px", "overflow": "hidden"}}>
            {" "}
            <div style={{"width": "200px", "height": "400px", "boxSizing": "border-box", "padding": "18px 14px 0", "borderRadius": "34px 34px 0 0", "background": "#FFFFFF", "border": "7px solid #14161A", "borderBottom": "none", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
              {" "}
              <span style={{"alignSelf": "center", "width": "60px", "height": "6px", "borderRadius": "6px", "background": "#14161A"}} />
              {" "}
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"Book a visit"}
              </span>
              {" "}
              <div style={{"display": "flex", "gap": "6px"}}>
                {" "}
                <span style={{"flex": "1", "padding": "6px 0", "borderRadius": "8px", "background": "#F1F2F4", "textAlign": "center", "fontSize": "10px", "fontWeight": "700", "color": "#545A66"}}>
                  {"Mon"}
                </span>
                {" "}
                <span style={{"flex": "1", "padding": "6px 0", "borderRadius": "8px", "background": "#C2323F", "textAlign": "center", "fontSize": "10px", "fontWeight": "700", "color": "#FFFFFF"}}>
                  {"Tue"}
                </span>
                {" "}
                <span style={{"flex": "1", "padding": "6px 0", "borderRadius": "8px", "background": "#F1F2F4", "textAlign": "center", "fontSize": "10px", "fontWeight": "700", "color": "#545A66"}}>
                  {"Wed"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "6px"}}>
                {" "}
                <span style={{"padding": "8px 0", "borderRadius": "8px", "border": "1px solid #ECEEF1", "textAlign": "center", "fontSize": "10px", "fontWeight": "700"}}>
                  {"9:00"}
                </span>
                {" "}
                <span style={{"padding": "8px 0", "borderRadius": "8px", "border": "1.5px solid #C2323F", "background": "#FBECEE", "textAlign": "center", "fontSize": "10px", "fontWeight": "700", "color": "#A3242F"}}>
                  {"10:30"}
                </span>
                {" "}
                <span style={{"padding": "8px 0", "borderRadius": "8px", "border": "1px solid #ECEEF1", "textAlign": "center", "fontSize": "10px", "fontWeight": "700"}}>
                  {"13:00"}
                </span>
                {" "}
                <span style={{"padding": "8px 0", "borderRadius": "8px", "border": "1px solid #ECEEF1", "textAlign": "center", "fontSize": "10px", "fontWeight": "700"}}>
                  {"15:30"}
                </span>
                {" "}
              </div>
              {" "}
              <span style={{"padding": "10px 0", "borderRadius": "10px", "background": "#C2323F", "textAlign": "center", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
                {"Confirm booking"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"width": "200px", "height": "340px", "boxSizing": "border-box", "padding": "18px 14px 0", "borderRadius": "34px 34px 0 0", "background": "#FFFFFF", "border": "7px solid #14161A", "borderBottom": "none", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <span style={{"alignSelf": "center", "width": "60px", "height": "6px", "borderRadius": "6px", "background": "#14161A"}} />
              {" "}
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"My visits"}
              </span>
              {" "}
              <span style={{"height": "52px", "borderRadius": "12px", "background": "#FBECEE", "border": "1.5px solid #C2323F"}} />
              {" "}
              <span style={{"height": "52px", "borderRadius": "12px", "background": "#F7F8FA"}} />
              {" "}
              <span style={{"height": "52px", "borderRadius": "12px", "background": "#F7F8FA"}} />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"gridColumn": "span 6", "boxSizing": "border-box", "padding": "30px 34px 30px 0", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "24px"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "8px"}}>
                {" "}
                <span style={{"padding": "6px 12px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "12px", "fontWeight": "700"}}>
                  {"Featured mobile project"}
                </span>
                {" "}
                <span style={{"padding": "6px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "12px", "fontWeight": "700"}}>
                  {"Healthcare · iOS & Android"}
                </span>
                {" "}
              </div>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Kestrel Health"}
              </h2>
              {" "}
              <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A booking app that lets patients find a time and confirm a clinic visit in a few taps, with reminders sent straight to their phone."}
              </p>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "paddingTop": "6px"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Booking flow designed and tested in week one"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Push reminders and calendar sync"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Published on both app stores"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
              {" "}
              <DcLink href={"/portfolio/kestrel-health"} style={{"display": "flex", "alignItems": "center", "gap": "8px", "height": "52px", "padding": "0 22px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
                {" "}
                <span>
                  {"View case study"}
                </span>
                {" "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
              <DcLink href={"/portfolio"} style={{"display": "flex", "alignItems": "center", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#14161A", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
                {"More mobile work"}
              </DcLink>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </article>
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
              {"Our mobile stack"}
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
      <section style={{"height": "700px", "boxSizing": "border-box", "padding": "96px 24px 24px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "32px"}}>
        {" "}
        <div style={{"gridColumn": "span 4", "paddingLeft": "24px", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px"}}>
          {" "}
          <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
            {" "}
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            {" "}
            <span>
              {"FAQ"}
            </span>
            {" "}
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "44px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Questions about "}
            <span style={{"color": "#C2323F"}}>
              {"mobile apps."}
            </span>
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Still unsure? Ask me anything on a free 20-minute call."}
          </p>
          {" "}
          <DcLink href={"#contact"} style={{"display": "flex", "alignItems": "center", "gap": "8px", "height": "50px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.2)", "fontSize": "15px", "fontWeight": "700", "color": "#14161A", "textDecoration": "none"}}>
            {" "}
            <span>
              {"Book a call"}
            </span>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
            {" "}
          </DcLink>
          {" "}
        </div>
        {" "}
        <div style={{"gridColumn": "span 8", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
          {" "}
          {dcList(dcGet(S, "faqs")).map((__it, __i) => { const S5 = { ...S, "q": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <div style={{"borderRadius": "20px", "background": `${dcStr(dcGet(S5, "q.bg"))}`, "border": "1px solid #ECEEF1", "boxShadow": `inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), ${dcStr(dcGet(S5, "q.shadow"))}`}}>
                {" "}
                <button type={"button"} onClick={dcGet(S5, "q.toggle")} aria-expanded={dcGet(S5, "q.expanded")} style={{"width": "100%", "minHeight": "72px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "0 24px", "border": "none", "background": "transparent", "fontFamily": "inherit", "fontSize": "17px", "fontWeight": "800", "color": "#14161A", "textAlign": "left", "cursor": "pointer"}}>
                  {" "}
                  <span>
                    {dcStr(dcGet(S5, "q.q"))}
                  </span>
                  {" "}
                  <span style={{"width": "34px", "height": "34px", "flexShrink": "0", "borderRadius": "10px", "background": `${dcStr(dcGet(S5, "q.iconBg"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S5, "q.iconInk")} strokeWidth={"2.6"} strokeLinecap={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S5, "q.iconPath")} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                </button>
                {" "}
                {dcTruthy(dcGet(S5, "q.open")) ? (<>
                  {" "}
                  <p style={{"margin": "0", "padding": "0 24px 22px", "maxWidth": "680px", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                    {dcStr(dcGet(S5, "q.a"))}
                  </p>
                  {" "}
                </>) : null}
                {" "}
              </div>
              {" "}
            </React.Fragment>); })}
          {" "}
        </div>
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

export default function ServiceMobile(props) {
  return <Component {...props} />;
}
