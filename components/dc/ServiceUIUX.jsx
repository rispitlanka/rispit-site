'use client';
// AUTO-GENERATED from design/ServiceUIUX.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
    const features = [{"title": "User research", "text": "Interviews and competitor reviews to understand what your users really need.", "icon": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8"}, {"title": "User flows & wireframes", "text": "The structure of every journey mapped out before any visual design.", "icon": "M3 6h6v6H3Z M15 12h6v6h-6Z M9 9h3a3 3 0 0 1 3 3v3"}, {"title": "High-fidelity UI design", "text": "Clean, modern screens that match your brand and work on every device.", "icon": "M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"}, {"title": "Clickable prototypes", "text": "A realistic prototype you can test on your phone or share with investors.", "icon": "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"}, {"title": "Design systems", "text": "Reusable colours, type and components that keep your product consistent.", "icon": "M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"}, {"title": "Developer handoff", "text": "Organised Figma files, specs and assets that make building straightforward.", "icon": "M16 18l6-6-6-6 M8 6l-6 6 6 6"}];
    const steps = [{"n": "1", "days": "Day 1–3", "title": "Discover", "text": "We learn about your users, goals and competitors, and agree on what success looks like."}, {"n": "2", "days": "Day 4–7", "title": "Wireframe", "text": "Simple layouts of the key screens and flows, quick to review and change."}, {"n": "3", "days": "Day 8–14", "title": "Visual design", "text": "Polished screens in your brand style, plus a small design system."}, {"n": "4", "days": "Day 15–21", "title": "Prototype & test", "text": "A clickable prototype tested with real users, then refined and handed over."}].map((s, i) => ({ ...s, badgeBg: i === 3 ? '#C2323F' : '#FFFFFF', badgeFg: i === 3 ? '#FFFFFF' : '#C2323F' }));
    const faqs = [{"q": "Do you design for both web and mobile?", "a": "Yes. We design websites, web apps and iOS and Android apps, and make sure every design works well on all screen sizes."}, {"q": "Can you redesign an existing product?", "a": "Yes. We start by reviewing what works and what doesn't, then improve the experience step by step without losing what your users already like."}, {"q": "Will I get the design files?", "a": "Yes. You get the full Figma files, the design system and all exported assets."}, {"q": "Do you test the designs with users?", "a": "Yes. We test the clickable prototype with real users and adjust the design based on what we learn."}, {"q": "Can your team also build the product?", "a": "Yes. Our developers can build it for you, or we can hand the designs to your own team."}].map((f, i) => {
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
    return { features, steps, faqs, stack: withLogos(["Figma", "FigJam", "Framer", "Maze", "Notion", "Loom"]) };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-serviceuiux">
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
                {"UI/UX Design"}
              </span>
              {" "}
            </nav>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
              </svg>
              {" "}
              <span>
                {"UI/UX Design"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "54px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Interfaces that feel "}
              <span style={{"color": "#C2323F"}}>
                {"simple from the first tap."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "maxWidth": "540px", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"We research, design and test the screens of your product, so users understand it instantly and developers can build it without guesswork."}
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
                {"User research"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Clickable prototypes"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Developer-ready files"}
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div aria-hidden={"true"} style={{"gridColumn": "span 6", "height": "600px", "position": "relative", "borderRadius": "28px", "background": "#FBECEE", "border": "1px solid #F4DADD", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 16px 36px -18px rgba(194,50,63,0.3)", "overflow": "hidden", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif"}}>
          {" "}
          <div className={"serviceuiux--rsp-fa"} style={{"position": "absolute", "left": "40px", "top": "52px", "width": "500px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "borderRadius": "18px", "border": "1px solid #F1F2F4", "boxShadow": "0 30px 60px -28px rgba(20,22,26,0.45)", "overflow": "hidden"}}>
            {" "}
            <div style={{"height": "48px", "padding": "0 12px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderBottom": "1px solid #F1F2F4"}}>
              <span style={{"display": "flex", "gap": "4px"}}>
                <span style={{"width": "30px", "height": "30px", "borderRadius": "8px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M4 4l7 17 2.5-7.5L21 11Z"} />
                  </svg>
                </span>
                <span style={{"width": "30px", "height": "30px", "borderRadius": "8px", "background": "transparent", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M3 3h18v18H3Z"} />
                  </svg>
                </span>
                <span style={{"width": "30px", "height": "30px", "borderRadius": "8px", "background": "transparent", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z"} />
                  </svg>
                </span>
                <span style={{"width": "30px", "height": "30px", "borderRadius": "8px", "background": "transparent", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M4 7V4h16v3 M9 20h6 M12 4v16"} />
                  </svg>
                </span>
                <span style={{"width": "30px", "height": "30px", "borderRadius": "8px", "background": "transparent", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
                  </svg>
                </span>
              </span>
              <span style={{"display": "flex"}}>
                <span style={{"width": "26px", "height": "26px", "borderRadius": "26px", "background": "#C2323F", "border": "2px solid #FFFFFF"}} />
                <span style={{"width": "26px", "height": "26px", "borderRadius": "26px", "background": "#14161A", "border": "2px solid #FFFFFF", "marginLeft": "-8px"}} />
              </span>
            </div>
            {" "}
            <div style={{"height": "340px", "background": "#F1F2F4", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px", "backgroundImage": "radial-gradient(#DADCE1 1px, transparent 1px)", "backgroundSize": "16px 16px"}}>
              {" "}
              <div style={{"width": "140px", "height": "260px", "boxSizing": "border-box", "padding": "12px 10px", "borderRadius": "22px", "background": "#FFFFFF", "border": "2px dashed #C9CCD3", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
                <span style={{"display": "block", "width": "60%", "height": "8px", "borderRadius": "8px", "background": "#DADCE1"}} />
                <span style={{"height": "60px", "borderRadius": "10px", "border": "2px dashed #DADCE1"}} />
                <span style={{"display": "block", "width": "90%", "height": "8px", "borderRadius": "8px", "background": "#ECEEF1"}} />
                <span style={{"display": "block", "width": "70%", "height": "8px", "borderRadius": "8px", "background": "#ECEEF1"}} />
                <span style={{"height": "34px", "borderRadius": "8px", "border": "2px dashed #DADCE1"}} />
                <span style={{"marginTop": "auto", "height": "26px", "borderRadius": "8px", "background": "#DADCE1"}} />
              </div>
              {" "}
              <svg width={"26"} height={"26"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M5 12h14 M13 5l7 7-7 7"} />
              </svg>
              {" "}
              <div style={{"width": "140px", "height": "260px", "boxSizing": "border-box", "padding": "12px 10px", "borderRadius": "22px", "background": "#FFFFFF", "border": "2px solid #14161A", "display": "flex", "flexDirection": "column", "gap": "8px", "boxShadow": "0 14px 28px -14px rgba(20,22,26,0.4)"}}>
                <span style={{"fontSize": "11px", "fontWeight": "800"}}>
                  {"Hello, Sam"}
                </span>
                <span style={{"height": "60px", "borderRadius": "10px", "background": "#C2323F"}} />
                <span style={{"display": "block", "width": "90%", "height": "8px", "borderRadius": "8px", "background": "#ECEEF1"}} />
                <span style={{"display": "block", "width": "70%", "height": "8px", "borderRadius": "8px", "background": "#ECEEF1"}} />
                <span style={{"display": "flex", "gap": "6px"}}>
                  <span style={{"flex": "1", "height": "34px", "borderRadius": "8px", "background": "#FBECEE"}} />
                  <span style={{"flex": "1", "height": "34px", "borderRadius": "8px", "background": "#F1F2F4"}} />
                </span>
                <span style={{"marginTop": "auto", "height": "26px", "borderRadius": "8px", "background": "#14161A"}} />
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className={"serviceuiux--rsp-fb"} style={{"position": "absolute", "right": "36px", "bottom": "46px", "width": "230px", "boxSizing": "border-box", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "#FFFFFF", "borderRadius": "16px", "border": "1px solid #F1F2F4", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.4)"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "800", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Design system"}
            </span>
            {" "}
            <span style={{"display": "flex", "gap": "8px"}}>
              <span style={{"width": "36px", "height": "36px", "borderRadius": "36px", "background": "#C2323F"}} />
              <span style={{"width": "36px", "height": "36px", "borderRadius": "36px", "background": "#14161A"}} />
              <span style={{"width": "36px", "height": "36px", "borderRadius": "36px", "background": "#FBECEE"}} />
              <span style={{"width": "36px", "height": "36px", "borderRadius": "36px", "background": "#F1F2F4", "border": "1px solid #DADCE1", "boxSizing": "border-box"}} />
            </span>
            {" "}
            <span style={{"display": "flex", "alignItems": "baseline", "gap": "10px"}}>
              <span style={{"fontSize": "38px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Aa"}
              </span>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"Plus Jakarta Sans"}
              </span>
            </span>
            {" "}
          </div>
          {" "}
          <div className={"serviceuiux--rsp-fb"} style={{"position": "absolute", "left": "380px", "top": "400px", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "2px"}}>
            <svg width={"26"} height={"26"} viewBox={"0 0 24 24"} fill={"#C2323F"} stroke={"#FFFFFF"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
              <path d={"M4 3l15 7-6.5 2.5L10 19Z"} />
            </svg>
            <span style={{"marginLeft": "16px", "padding": "5px 10px", "borderRadius": "8px", "background": "#C2323F", "fontSize": "11px", "fontWeight": "800", "color": "#FFFFFF"}}>
              {"Designer"}
            </span>
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
              {"Design that users "}
              <span style={{"color": "#C2323F"}}>
                {"understand instantly."}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <p style={{"margin": "0", "maxWidth": "400px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Everything from early research to pixel-perfect screens, delivered in a way your developers can pick up and build straight away."}
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
                {"From research to "}
                <span style={{"color": "#C2323F"}}>
                  {"tested designs."}
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <p style={{"margin": "0", "maxWidth": "360px", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"A clear process with something to review every few days, so the design always moves in the right direction."}
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
                <div className={"serviceuiux--rsp-step"} style={{"position": "relative", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
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
                  {"Analytics · Web app"}
                </span>
                {" "}
              </div>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Lumora Analytics"}
              </h2>
              {" "}
              <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A sales dashboard redesigned so a whole team can understand their numbers at a glance."}
              </p>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "paddingTop": "6px"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Interviews with sales managers in week one"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"New dashboard and reporting flows designed"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Design system handed to the dev team"}
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
              {"Design tools"}
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
              {"UI/UX design."}
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

export default function ServiceUIUX(props) {
  return <Component {...props} />;
}
