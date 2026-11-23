'use client';
// AUTO-GENERATED from design/ServiceWeb.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
    const features = [{"title": "SaaS platforms", "text": "Subscription products with accounts, billing and team workspaces.", "icon": "M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 18h11.5Z"}, {"title": "Dashboards & admin panels", "text": "Clear views of your data and simple tools to manage your business.", "icon": "M4 20V10 M10 20V4 M16 20v-7 M22 20H2"}, {"title": "Customer portals", "text": "Self-service areas where customers can log in, book, pay and get support.", "icon": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8"}, {"title": "APIs & integrations", "text": "Connections to payment, email, CRM and the other tools you already use.", "icon": "M9 2v6 M15 2v6 M6 8h12v4a6 6 0 0 1-12 0Z M12 18v4"}, {"title": "Authentication & roles", "text": "Secure sign-in with the right access for every type of user.", "icon": "M5 11h14v10H5Z M8 11V7a4 4 0 0 1 8 0v4"}, {"title": "Hosting & monitoring", "text": "Reliable hosting, automatic deployments and alerts if anything goes wrong.", "icon": "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z"}];
    const steps = [{"n": "1", "days": "Day 1–3", "title": "Plan & architecture", "text": "We agree on features, data and the right technical setup for your app."}, {"n": "2", "days": "Day 4–8", "title": "Design", "text": "Key screens and user flows designed and approved before development."}, {"n": "3", "days": "Day 9–17", "title": "Build", "text": "Frontend, backend and integrations developed with weekly demos."}, {"n": "4", "days": "Day 18–21", "title": "Test & deploy", "text": "Testing across browsers and devices, then deployment to your domain."}].map((s, i) => ({ ...s, badgeBg: i === 3 ? '#C2323F' : '#FFFFFF', badgeFg: i === 3 ? '#FFFFFF' : '#C2323F' }));
    const faqs = [{"q": "What kind of web apps do you build?", "a": "SaaS products, dashboards, customer portals, marketplaces and internal tools. If it runs in a browser, we can build it."}, {"q": "Which technologies do you use?", "a": "Mainly React, Next.js and TypeScript on the frontend, with Node.js and PostgreSQL on the backend. We choose what fits your product best."}, {"q": "Can you work on an existing codebase?", "a": "Yes. We start with a short review of your code, then fix, improve or extend it."}, {"q": "Will it work on phones and tablets?", "a": "Yes. Every web app we build is responsive and tested on mobile, tablet and desktop."}, {"q": "Do you offer hosting and maintenance?", "a": "Yes. We can set up hosting and keep your app updated, secure and running smoothly on a monthly plan."}].map((f, i) => {
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
    return { features, steps, faqs, stack: withLogos(["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "AWS"]) };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-serviceweb">
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
                {"Web App Development"}
              </span>
              {" "}
            </nav>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M2 4h20v16H2Z M2 9h20 M6 6.5h.01 M9 6.5h.01"} />
              </svg>
              {" "}
              <span>
                {"Web App Development"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "54px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Fast, secure web apps "}
              <span style={{"color": "#C2323F"}}>
                {"built to grow with you."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "maxWidth": "540px", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"From SaaS platforms to customer portals and internal tools, we build modern web apps on a proven stack that is easy to maintain and scale."}
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
                {"Modern stack"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Works on every device"}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
                {"Built to scale"}
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div aria-hidden={"true"} style={{"gridColumn": "span 6", "height": "600px", "position": "relative", "borderRadius": "28px", "background": "#FBECEE", "border": "1px solid #F4DADD", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 16px 36px -18px rgba(194,50,63,0.3)", "overflow": "hidden", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif"}}>
          {" "}
          <div className={"serviceweb--rsp-fa"} style={{"position": "absolute", "left": "36px", "top": "56px", "width": "560px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "borderRadius": "18px", "border": "1px solid #F1F2F4", "boxShadow": "0 30px 60px -28px rgba(20,22,26,0.45)", "overflow": "hidden"}}>
            {" "}
            <div style={{"height": "44px", "padding": "0 14px", "display": "flex", "alignItems": "center", "gap": "14px", "borderBottom": "1px solid #F1F2F4"}}>
              <span style={{"display": "flex", "gap": "6px"}}>
                <span style={{"width": "10px", "height": "10px", "borderRadius": "10px", "background": "#F1D2D6"}} />
                <span style={{"width": "10px", "height": "10px", "borderRadius": "10px", "background": "#ECEEF1"}} />
                <span style={{"width": "10px", "height": "10px", "borderRadius": "10px", "background": "#ECEEF1"}} />
              </span>
              <span style={{"flex": "1", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 10px", "fontSize": "11px", "fontWeight": "700", "color": "#545A66"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#545A66"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M5 11h14v10H5Z M8 11V7a4 4 0 0 1 8 0v4"} />
                </svg>
                {"app.yourproduct.com"}
              </span>
            </div>
            {" "}
            <div style={{"height": "320px", "display": "flex"}}>
              {" "}
              <div style={{"width": "130px", "padding": "14px 10px", "display": "flex", "flexDirection": "column", "gap": "4px", "borderRight": "1px solid #F1F2F4"}}>
                <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 10px", "borderRadius": "9px", "background": "#FBECEE"}}>
                  <span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#C2323F"}} />
                  <span style={{"display": "block", "width": "50px", "height": "7px", "borderRadius": "7px", "background": "#E7B9BF"}} />
                </span>
                <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 10px", "borderRadius": "9px", "background": "transparent"}}>
                  <span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#DADCE1"}} />
                  <span style={{"display": "block", "width": "58px", "height": "7px", "borderRadius": "7px", "background": "#ECEEF1"}} />
                </span>
                <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 10px", "borderRadius": "9px", "background": "transparent"}}>
                  <span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#DADCE1"}} />
                  <span style={{"display": "block", "width": "66px", "height": "7px", "borderRadius": "7px", "background": "#ECEEF1"}} />
                </span>
                <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 10px", "borderRadius": "9px", "background": "transparent"}}>
                  <span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#DADCE1"}} />
                  <span style={{"display": "block", "width": "74px", "height": "7px", "borderRadius": "7px", "background": "#ECEEF1"}} />
                </span>
              </div>
              {" "}
              <div style={{"flex": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
                {" "}
                <div style={{"display": "flex", "gap": "8px"}}>
                  <div style={{"flex": "1", "padding": "12px", "borderRadius": "12px", "background": "#F7F8FA", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <span style={{"display": "block", "width": "50%", "height": "7px", "borderRadius": "7px", "background": "#DADCE1"}} />
                    <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#14161A"}}>
                      {"↑ Users"}
                    </span>
                  </div>
                  <div style={{"flex": "1", "padding": "12px", "borderRadius": "12px", "background": "#F7F8FA", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <span style={{"display": "block", "width": "50%", "height": "7px", "borderRadius": "7px", "background": "#DADCE1"}} />
                    <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#C2323F"}}>
                      {"↑ Revenue"}
                    </span>
                  </div>
                  <div style={{"flex": "1", "padding": "12px", "borderRadius": "12px", "background": "#F7F8FA", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <span style={{"display": "block", "width": "50%", "height": "7px", "borderRadius": "7px", "background": "#DADCE1"}} />
                    <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#14161A"}}>
                      {"Orders"}
                    </span>
                  </div>
                </div>
                {" "}
                <div style={{"flex": "1", "borderRadius": "12px", "background": "#F7F8FA", "padding": "10px", "boxSizing": "border-box"}}>
                  <svg width={"100%"} height={"100%"} viewBox={"0 0 380 150"} preserveAspectRatio={"none"}>
                    <path d={"M0 120 C40 110 60 80 100 90 S160 60 200 70 S270 30 310 40 S360 20 380 15"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} />
                    <path d={"M0 120 C40 110 60 80 100 90 S160 60 200 70 S270 30 310 40 S360 20 380 15 V150 H0 Z"} fill={"rgba(194,50,63,0.08)"} />
                  </svg>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className={"serviceweb--rsp-fb"} style={{"position": "absolute", "right": "30px", "bottom": "40px", "width": "270px", "boxSizing": "border-box", "padding": "16px 18px", "borderRadius": "16px", "background": "#14161A", "boxShadow": "0 24px 48px -20px rgba(20,22,26,0.6)", "display": "flex", "flexDirection": "column", "gap": "6px", "fontFamily": "ui-monospace, Menlo, monospace", "fontSize": "12px", "fontWeight": "600", "lineHeight": "1.5"}}>
            {" "}
            <span style={{"color": "#8A8F9A"}}>
              {"// deploy.ts"}
            </span>
            {" "}
            <span>
              <span style={{"color": "#E7B9BF"}}>
                {"await"}
              </span>
              {" "}
              <span style={{"color": "#FFFFFF"}}>
                {"deploy"}
              </span>
              <span style={{"color": "#8A8F9A"}}>
                {"({"}
              </span>
            </span>
            {" "}
            <span style={{"paddingLeft": "16px"}}>
              <span style={{"color": "#C9CCD3"}}>
                {"env:"}
              </span>
              {" "}
              <span style={{"color": "#F4A3AB"}}>
                {"'production'"}
              </span>
              <span style={{"color": "#8A8F9A"}}>
                {","}
              </span>
            </span>
            {" "}
            <span style={{"paddingLeft": "16px"}}>
              <span style={{"color": "#C9CCD3"}}>
                {"scale:"}
              </span>
              {" "}
              <span style={{"color": "#F4A3AB"}}>
                {"true"}
              </span>
            </span>
            {" "}
            <span style={{"color": "#8A8F9A"}}>
              {"})"}
            </span>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "color": "#7FD1A0"}}>
              <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7FD1A0"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Deployed"}
            </span>
            {" "}
          </div>
          {" "}
          <div className={"serviceweb--rsp-fb"} style={{"position": "absolute", "right": "36px", "top": "46px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 15px 11px 11px", "borderRadius": "16px", "background": "#FFFFFF", "boxShadow": "0 16px 32px -14px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <path d={"M5 11h14v10H5Z M8 11V7a4 4 0 0 1 8 0v4"} />
              </svg>
            </span>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "13px", "fontWeight": "800"}}>
                {"Secure sign-in"}
              </span>
              <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#545A66"}}>
                {"Roles & permissions"}
              </span>
            </div>
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
              {"Everything a modern "}
              <span style={{"color": "#C2323F"}}>
                {"web app needs."}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <p style={{"margin": "0", "maxWidth": "400px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"We take care of the parts users see and the parts they don't, so your app is fast, secure and ready to grow."}
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
                {"A clear path from plan "}
                <span style={{"color": "#C2323F"}}>
                  {"to production."}
                </span>
              </h2>
              {" "}
            </div>
            {" "}
            <p style={{"margin": "0", "maxWidth": "360px", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"We build in short cycles with a working version to review every week."}
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
                <div className={"serviceweb--rsp-step"} style={{"position": "relative", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
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
                  {"Travel · Web app"}
                </span>
                {" "}
              </div>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Fernway"}
              </h2>
              {" "}
              <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A trip-planning platform that turns scattered bookings into one simple itinerary."}
              </p>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "paddingTop": "6px"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Booking imports from email and partners"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Shared itineraries for groups"}
                </span>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Deployed with automatic updates"}
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
              {"Web stack"}
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
              {"web apps."}
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

export default function ServiceWeb(props) {
  return <Component {...props} />;
}
