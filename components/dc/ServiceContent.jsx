'use client';
// AUTO-GENERATED from design/ServiceContent.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
    const features = [{"title": "Website & landing page copy", "text": "Clear, persuasive words that explain what you do and why it matters.", "icon": "M4 7V4h16v3 M9 20h6 M12 4v16"}, {"title": "Product demo & launch videos", "text": "Short videos that show your product in action.", "icon": "M15 10l5-3v10l-5-3Z M3 6h12v12H3Z"}, {"title": "Product visuals & mockups", "text": "Polished screenshots and device mockups for your site, store pages and ads.", "icon": "M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"}, {"title": "Social media content", "text": "Ready-to-post designs and captions for your launch and beyond.", "icon": "M18 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z M6 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z M18 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4"}, {"title": "Blog articles & SEO", "text": "Helpful articles that answer your customers' questions and bring in search traffic.", "icon": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6 M8 13h8 M8 17h5"}, {"title": "Pitch decks", "text": "Clear, well-designed decks that tell your story to investors and partners.", "icon": "M2 3h20v13H2Z M12 16v5 M8 21h8"}];
    const steps = [{"n": "1", "days": "Day 1–3", "title": "Discover & plan", "text": "We learn about your product, audience and goals, and agree on the key message."}, {"n": "2", "days": "Day 4–10", "title": "Write & design", "text": "Copy, scripts and visual concepts created and shared for your feedback."}, {"n": "3", "days": "Day 11–17", "title": "Produce", "text": "Videos, visuals and final copy produced in your brand style."}, {"n": "4", "days": "Day 18–21", "title": "Review & deliver", "text": "Final changes, then everything delivered ready to publish."}].map((s, i) => ({ ...s, badgeBg: i === 3 ? '#C2323F' : '#FFFFFF', badgeFg: i === 3 ? '#FFFFFF' : '#C2323F' }));
    const faqs = [{"q": "What kind of content do you create?", "a": "Website and landing page copy, product videos, visuals and mockups, social media posts, blog articles and pitch decks."}, {"q": "Will the content match our brand voice?", "a": "Yes. We start by understanding your brand and audience, and every piece is written and designed to sound like you."}, {"q": "Can you create content for a product you've already built?", "a": "Yes. We create content for any digital product, whether we built it or not."}, {"q": "Do you manage our social media accounts?", "a": "We create the content and a posting plan. Ongoing account management can be added on a monthly plan."}, {"q": "How do revisions work?", "a": "Each piece includes rounds of feedback, so you can request changes until it feels right."}].map((f, i) => {
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
    return { features, steps, faqs, stack: withLogos(["Figma", "Canva", "Premiere Pro", "After Effects", "Notion", "Webflow"]) };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-servicecontent">
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
                {"Content Creation"}
              </span>
              {" "}
            </nav>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M15 10l5-3v10l-5-3Z M3 6h12v12H3Z"} />
              </svg>
              {" "}
              <span>
                {"Content Creation"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "54px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Content that explains your product "}
              <span style={{"color": "#C2323F"}}>
                {"and brings users in."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "maxWidth": "540px", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"Website copy, launch videos, product visuals and social posts, created to help people understand what you've built and why it matters."}
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
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"marginLeft": "6px"}}>
                  <path d={"M5 12h14M13 5l7 7-7 7"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
              <DcLink href={"#work"} style={{"display": "flex", "alignItems": "center", "height": "56px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "color": "#14161A", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
                {"See our work"}
              </DcLink>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "20px", "fontSize": "14px", "fontWeight": "700"}}>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Strategy first"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"On-brand visuals"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Ready to publish"}
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div aria-hidden={"true"} style={{"gridColumn": "span 6", "height": "600px", "position": "relative", "borderRadius": "28px", "background": "#FBECEE", "border": "1px solid #F4DADD", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 16px 36px -18px rgba(194,50,63,0.3)", "overflow": "hidden", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif"}}>
          {" "}
          <div className={"servicecontent--rsp-fa"} style={{"position": "absolute", "left": "36px", "top": "46px", "width": "410px", "boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#FFFFFF", "borderRadius": "18px", "border": "1px solid #F1F2F4", "boxShadow": "0 30px 60px -28px rgba(20,22,26,0.45)"}}>
            {" "}
            <div style={{"position": "relative", "height": "220px", "borderRadius": "12px", "background": "#14161A", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              {" "}
              <span style={{"position": "absolute", "left": "16px", "top": "14px", "fontSize": "12px", "fontWeight": "800", "color": "#FFFFFF"}}>
                {"Product demo"}
              </span>
              {" "}
              <span style={{"position": "absolute", "right": "14px", "top": "12px", "padding": "4px 8px", "borderRadius": "6px", "background": "#C2323F", "fontSize": "10px", "fontWeight": "800", "color": "#FFFFFF"}}>
                {"HD"}
              </span>
              {" "}
              <span style={{"width": "60px", "height": "60px", "borderRadius": "60px", "background": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#C2323F"}>
                  <path d={"M8 5.5v13l11-6.5Z"} />
                </svg>
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 4px 4px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "color": "#545A66"}}>
                {"0:42"}
              </span>
              <div style={{"flex": "1", "height": "6px", "borderRadius": "6px", "background": "#F1F2F4"}}>
                <div style={{"width": "70%", "height": "6px", "borderRadius": "6px", "background": "#C2323F"}} />
              </div>
              <span style={{"fontSize": "11px", "fontWeight": "700", "color": "#545A66"}}>
                {"1:00"}
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <div className={"servicecontent--rsp-fb"} style={{"position": "absolute", "right": "34px", "top": "96px", "width": "220px", "boxSizing": "border-box", "padding": "12px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#FFFFFF", "borderRadius": "16px", "border": "1px solid #F1F2F4", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.4)"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
              <span style={{"width": "28px", "height": "28px", "borderRadius": "28px", "background": "#C2323F"}} />
              <span style={{"flex": "1", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
                <span style={{"display": "block", "width": "70%", "height": "6px", "borderRadius": "6px", "background": "#14161A"}} />
                <span style={{"display": "block", "width": "40%", "height": "6px", "borderRadius": "6px", "background": "#ECEEF1"}} />
              </span>
            </div>
            {" "}
            <div style={{"height": "150px", "borderRadius": "10px", "background": "#FBECEE", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <span style={{"fontSize": "20px", "fontWeight": "800", "letterSpacing": "-0.02em", "color": "#C2323F"}}>
                {"Now live!"}
              </span>
              <span style={{"display": "block", "width": "60%", "height": "6px", "borderRadius": "6px", "background": "#E7B9BF"}} />
            </div>
            {" "}
            <span style={{"display": "flex", "gap": "12px"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8Z"} />
              </svg>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"} />
              </svg>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M18 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z M6 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z M18 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4"} />
              </svg>
            </span>
            {" "}
          </div>
          {" "}
          <div className={"servicecontent--rsp-fb"} style={{"position": "absolute", "left": "80px", "bottom": "40px", "width": "330px", "boxSizing": "border-box", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#FFFFFF", "borderRadius": "16px", "border": "1px solid #F1F2F4", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.4)"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
              <span style={{"fontSize": "11px", "fontWeight": "800", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Homepage copy"}
              </span>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M4 7V4h16v3 M9 20h6 M12 4v16"} />
              </svg>
            </span>
            {" "}
            <span style={{"fontSize": "17px", "lineHeight": "1.3", "fontWeight": "800"}}>
              {"Book a visit in "}
              <span style={{"boxShadow": "inset 0 -8px 0 #F4DADD"}}>
                {"three taps."}
              </span>
            </span>
            {" "}
            <span style={{"display": "block", "width": "95%", "height": "8px", "borderRadius": "8px", "background": "#ECEEF1"}} />
            <span style={{"display": "block", "width": "80%", "height": "8px", "borderRadius": "8px", "background": "#ECEEF1"}} />
            <span style={{"display": "block", "width": "60%", "height": "8px", "borderRadius": "8px", "background": "#ECEEF1"}} />
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
              {"Everything you need to "}
              <span style={{"color": "#C2323F"}}>
                {"tell your story."}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <p style={{"margin": "0", "maxWidth": "400px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Clear words and strong visuals that help people understand your product quickly, from your website to your launch day."}
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
                {"From message to "}
                <span style={{"color": "#C2323F"}}>
                  {"finished content."}
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <p style={{"margin": "0", "maxWidth": "360px", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"We get the message right first, then create everything around it."}
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
                <div className={"servicecontent--rsp-step"} style={{"position": "relative", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
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
      <section id={"work"} style={{"height": "640px", "boxSizing": "border-box", "padding": "72px 24px 24px"}}>
        {" "}
        <article style={{"height": "100%", "boxSizing": "border-box", "padding": "14px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"gridColumn": "span 6", "position": "relative", "borderRadius": "22px", "background": "#EEF1F5", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px"}}>
            {" "}
            <svg width={"56"} height={"56"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"3"} />
              <circle cx={"9"} cy={"9"} r={"2"} />
              <path d={"M21 15l-5-5L5 21"} />
            </svg>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#6B717D"}}>
              {"Project image"}
            </span>
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
                  {"Featured project"}
                </span>
                {" "}
                <span style={{"padding": "6px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "12px", "fontWeight": "700"}}>
                  {"Education · Launch campaign"}
                </span>
                {" "}
              </div>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Brightpath"}
              </h2>
              {" "}
              <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"Launch content for a learning app: website copy, a demo video and a social content pack."}
              </p>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "paddingTop": "6px"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Landing page copy and store listing"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"60-second product demo video"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Two weeks of launch posts"}
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
                {"More of our work"}
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
              {"Content tools"}
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
              {"content creation."}
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

export default function ServiceContent(props) {
  return <Component {...props} />;
}
