'use client';
// AUTO-GENERATED from design/ServiceIT.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
    const features = [{"title": "Technical strategy & roadmap", "text": "A clear plan for what to build, in what order, and why.", "icon": "M9 3l6 3 6-3v15l-6 3-6-3-6 3V6Z M9 3v15 M15 6v15"}, {"title": "Tech stack selection", "text": "The right technologies for your product, budget and team.", "icon": "M12 2l10 5-10 5L2 7Z M2 17l10 5 10-5 M2 12l10 5 10-5"}, {"title": "Architecture review", "text": "A check of how your product is built, and how to make it scale.", "icon": "M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"}, {"title": "Code & security audit", "text": "An honest review of code quality, security risks and technical debt.", "icon": "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}, {"title": "Cost & timeline estimates", "text": "Realistic budgets and timelines before you commit to building.", "icon": "M12 6c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3Z M4 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V3 M4 9v6c0 1.7 3.6 3 8 3s8-1.3 8-3V9"}, {"title": "Team & vendor guidance", "text": "Help with hiring developers or choosing the right agency or freelancer.", "icon": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8"}];
    const steps = [{"n": "1", "days": "Day 1", "title": "Discovery call", "text": "We talk through your goals, challenges and the questions you need answered."}, {"n": "2", "days": "Day 2–5", "title": "Review", "text": "We look at your idea, product, code or setup in detail."}, {"n": "3", "days": "Day 6–8", "title": "Recommendations", "text": "We prepare clear, prioritised advice in plain language."}, {"n": "4", "days": "Day 9–10", "title": "Plan & next steps", "text": "We walk you through the plan and answer your questions."}].map((s, i) => ({ ...s, badgeBg: i === 3 ? '#C2323F' : '#FFFFFF', badgeFg: i === 3 ? '#FFFFFF' : '#C2323F' }));
    const faqs = [{"q": "Who is IT consultation for?", "a": "Founders who aren't sure where to start, and companies that want an independent view of their product, code or technical plans."}, {"q": "What do I get at the end?", "a": "A clear written plan with our recommendations, estimated costs and timelines, and the next steps in priority order."}, {"q": "Can you review our existing code?", "a": "Yes. We can audit your code and setup and point out risks, quick wins and longer-term improvements."}, {"q": "Will you only recommend your own services?", "a": "No. Our advice is independent. If another option suits you better, we'll tell you."}, {"q": "Is it a one-time session or ongoing?", "a": "Both are possible. Most clients start with a one-time review, and some keep us on as ongoing technical advisors."}].map((f, i) => {
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
    return { features, steps, faqs, stack: withLogos(["AWS", "Google Cloud", "Vercel", "GitHub", "PostgreSQL", "Docker"]) };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-serviceit">
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
                {"IT Consultation"}
              </span>
              {" "}
            </nav>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
              </svg>
              {" "}
              <span>
                {"IT Consultation"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "54px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Clear technical advice, "}
              <span style={{"color": "#C2323F"}}>
                {"before you spend."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "maxWidth": "540px", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"Not sure what to build, which technology to choose or how to scale? We review your idea or product and give you a practical, honest technical plan."}
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
                {"Independent advice"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Clear written plan"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"No jargon"}
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div aria-hidden={"true"} style={{"gridColumn": "span 6", "height": "600px", "position": "relative", "borderRadius": "28px", "background": "#FBECEE", "border": "1px solid #F4DADD", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 16px 36px -18px rgba(194,50,63,0.3)", "overflow": "hidden", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif"}}>
          {" "}
          <div className={"serviceit--rsp-fa"} style={{"position": "absolute", "left": "36px", "top": "50px", "width": "470px", "height": "410px", "boxSizing": "border-box", "background": "#FFFFFF", "borderRadius": "18px", "border": "1px solid #F1F2F4", "boxShadow": "0 30px 60px -28px rgba(20,22,26,0.45)"}}>
            {" "}
            <div style={{"position": "absolute", "left": "20px", "top": "18px", "right": "20px", "display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
              <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                {"System architecture"}
              </span>
              <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FBECEE", "fontSize": "11px", "fontWeight": "800", "color": "#A3242F"}}>
                {"Reviewed"}
              </span>
            </div>
            {" "}
            <svg width={"470"} height={"410"} viewBox={"0 0 470 410"} style={{"position": "absolute", "left": "0", "top": "0"}} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"2"} strokeDasharray={"5 5"}>
              <path d={"M125 125 V170 H235 V200"} />
              <path d={"M345 125 V170 H235"} />
              <path d={"M235 250 V290 H125 V320"} />
              <path d={"M235 290 H345 V320"} />
            </svg>
            {" "}
            <div style={{"position": "absolute", "left": "60px", "top": "75px", "width": "130px", "height": "50px", "boxSizing": "border-box", "padding": "0 12px", "display": "flex", "alignItems": "center", "gap": "8px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 18px -10px rgba(20,22,26,0.3)"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M2 4h20v16H2Z M2 9h20"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#14161A"}}>
                {"Web app"}
              </span>
            </div>
            {" "}
            <div style={{"position": "absolute", "left": "280px", "top": "75px", "width": "130px", "height": "50px", "boxSizing": "border-box", "padding": "0 12px", "display": "flex", "alignItems": "center", "gap": "8px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 18px -10px rgba(20,22,26,0.3)"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#14161A"}}>
                {"Mobile app"}
              </span>
            </div>
            {" "}
            <div style={{"position": "absolute", "left": "170px", "top": "200px", "width": "130px", "height": "50px", "boxSizing": "border-box", "padding": "0 12px", "display": "flex", "alignItems": "center", "gap": "8px", "borderRadius": "12px", "background": "#C2323F", "border": "1px solid #C2323F", "boxShadow": "0 8px 18px -10px rgba(20,22,26,0.3)"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M16 18l6-6-6-6 M8 6l-6 6 6 6"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#FFFFFF"}}>
                {"API"}
              </span>
            </div>
            {" "}
            <div style={{"position": "absolute", "left": "60px", "top": "320px", "width": "130px", "height": "50px", "boxSizing": "border-box", "padding": "0 12px", "display": "flex", "alignItems": "center", "gap": "8px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 18px -10px rgba(20,22,26,0.3)"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#14161A"}}>
                {"Database"}
              </span>
            </div>
            {" "}
            <div style={{"position": "absolute", "left": "280px", "top": "320px", "width": "130px", "height": "50px", "boxSizing": "border-box", "padding": "0 12px", "display": "flex", "alignItems": "center", "gap": "8px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 18px -10px rgba(20,22,26,0.3)"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 18h11.5Z"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#14161A"}}>
                {"Cloud"}
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <div className={"serviceit--rsp-fb"} style={{"position": "absolute", "right": "32px", "top": "80px", "width": "220px", "boxSizing": "border-box", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#FFFFFF", "borderRadius": "16px", "border": "1px solid #F1F2F4", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.4)"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "800", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Tech review"}
            </span>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "13px", "fontWeight": "700"}}>
              <span style={{"width": "20px", "height": "20px", "borderRadius": "6px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span style={{"color": "#14161A"}}>
                {"Tech stack"}
              </span>
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "13px", "fontWeight": "700"}}>
              <span style={{"width": "20px", "height": "20px", "borderRadius": "6px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span style={{"color": "#14161A"}}>
                {"Security"}
              </span>
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "13px", "fontWeight": "700"}}>
              <span style={{"width": "20px", "height": "20px", "borderRadius": "6px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span style={{"color": "#14161A"}}>
                {"Scalability"}
              </span>
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "13px", "fontWeight": "700"}}>
              <span style={{"width": "20px", "height": "20px", "borderRadius": "6px", "background": "#F1F2F4", "display": "flex", "alignItems": "center", "justifyContent": "center"}} />
              <span style={{"color": "#7A808C"}}>
                {"Costs"}
              </span>
            </span>
            {" "}
          </div>
          {" "}
          <div className={"serviceit--rsp-fa"} style={{"position": "absolute", "right": "36px", "bottom": "50px", "width": "250px", "boxSizing": "border-box", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "#FFFFFF", "borderRadius": "16px", "border": "1px solid #F1F2F4", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.4)"}}>
            {" "}
            <span style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12px", "fontWeight": "800"}}>
              <span>
                {"Roadmap"}
              </span>
              <span style={{"color": "#545A66"}}>
                {"3 phases"}
              </span>
            </span>
            {" "}
            <span style={{"display": "flex", "gap": "4px"}}>
              <span style={{"flex": "2", "height": "10px", "borderRadius": "10px", "background": "#C2323F"}} />
              <span style={{"flex": "3", "height": "10px", "borderRadius": "10px", "background": "#E7B9BF"}} />
              <span style={{"flex": "2", "height": "10px", "borderRadius": "10px", "background": "#F1F2F4"}} />
            </span>
            {" "}
            <span style={{"display": "flex", "justifyContent": "space-between", "fontSize": "11px", "fontWeight": "700", "color": "#545A66"}}>
              <span>
                {"Now"}
              </span>
              <span>
                {"Next"}
              </span>
              <span>
                {"Later"}
              </span>
            </span>
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
              {"Answers to your "}
              <span style={{"color": "#C2323F"}}>
                {"biggest technical questions."}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <p style={{"margin": "0", "maxWidth": "400px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Practical advice from people who build products every day, so you can make decisions with confidence."}
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
                {"Clear advice in "}
                <span style={{"color": "#C2323F"}}>
                  {"four simple steps."}
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <p style={{"margin": "0", "maxWidth": "360px", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"A focused engagement that ends with a written plan you can act on straight away."}
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
                <div className={"serviceit--rsp-step"} style={{"position": "relative", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
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
                  {"Finance · SaaS"}
                </span>
                {" "}
              </div>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Quantix"}
              </h2>
              {" "}
              <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A technical review and roadmap that helped an invoicing startup choose its stack and plan its first build."}
              </p>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "paddingTop": "6px"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Stack and architecture recommended"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Costs and timeline estimated upfront"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Roadmap for the first two releases"}
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
              {"Platforms we advise on"}
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
              {"IT consultation."}
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

export default function ServiceIT(props) {
  return <Component {...props} />;
}
