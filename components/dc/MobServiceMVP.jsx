'use client';
// AUTO-GENERATED from design/MobServiceMVP.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';
import DC_MobConsult from './MobConsult';
import DC_MobFooter from './MobFooter';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {"open": 0};
  }
  renderVals() {
    const FAQS = [["What can really be built in 21 days?", "A focused first version that solves one core problem well. We agree on the must-have features in week one and plan the nice-to-haves for later releases."], ["What do I need to prepare?", "Just your idea and some time for feedback. We'll ask for any content, brand assets or accounts we need during the first few days."], ["What if we need more time?", "If the scope grows, we'll tell you straight away and agree on the best option together, whether that's trimming features or adding time."], ["Who owns the product?", "You do. All the code, designs and accounts are yours once the project is paid for."], ["What happens after launch?", "We can keep building with you on a monthly plan, or hand everything over cleanly to your own team."]];
    const faqs = FAQS.map((f, i) => {
      const open = i === this.state.open;
      return {
        q: f[0], a: f[1], open,
        expanded: String(open),
        bg: open ? '#FFFFFF' : '#F7F8FA',
        shadow: open ? '0 14px 30px -18px rgba(20,22,26,0.25)' : 'none',
        iconBg: open ? '#C2323F' : '#FFFFFF',
        iconInk: open ? '#FFFFFF' : '#C2323F',
        iconPath: open ? 'M5 12h14' : 'M12 5v14 M5 12h14',
        toggle: () => this.setState({ open: open ? -1 : i })
      };
    });
    return { faqs };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobservicemvp">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={"Services"} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <nav aria-label={"Breadcrumb"} style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
            <DcLink href={"/"} style={{"textDecoration": "none"}}>
              {"Home"}
            </DcLink>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <span>
              {"Services"}
            </span>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <span style={{"color": "#14161A"}}>
              {"21-Day MVP Sprint"}
            </span>
          </nav>
          {" "}
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
            </svg>
            <span>
              {"21-Day MVP Sprint"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "36px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"From idea to a live product, "}
            <span style={{"color": "#C2323F"}}>
              {"in 21 days."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Our signature package for founders. We scope, design, build and launch the first version of your product in three focused weeks, so you can start learning from real users."}
          </p>
          {" "}
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 18px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.6)"}}>
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            <span style={{"flexGrow": "1"}}>
              {"Book a call with Siva"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
          {" "}
          <DcLink href={"#work"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"See our work"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
          {" "}
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "10px 16px"}}>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Fixed 21-day timeline"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Design, build & launch"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Weekly demos"}
            </span>
          </div>
        </div>
        <div aria-hidden={"true"} style={{"position": "relative", "height": "300px", "borderRadius": "26px", "background": "#FBECEE", "border": "1px solid #F4DADD", "overflow": "hidden"}}>
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "250px", "height": "250px", "margin": "-125px 0 0 -125px", "borderRadius": "250px", "border": "1.5px dashed #E7B9BF"}} />
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "170px", "height": "170px", "margin": "-85px 0 0 -85px", "borderRadius": "170px", "background": "rgba(194,50,63,0.07)"}} />
          {" "}
          <div className={"mobservicemvp--rsp-fa"} style={{"position": "absolute", "left": "50%", "top": "50%", "width": "140px", "height": "140px", "margin": "-70px 0 0 -70px", "borderRadius": "40px", "background": "#FFFFFF", "boxShadow": "0 24px 48px -20px rgba(194,50,63,0.5)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px"}}>
            {" "}
            <span style={{"width": "64px", "height": "64px", "borderRadius": "20px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "800"}}>
              {"21-Day Sprint"}
            </span>
            {" "}
          </div>
          {" "}
          <div className={"mobservicemvp--rsp-fb"} style={{"position": "absolute", "left": "14px", "top": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Day 1 · Kick-off"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"Scope agreed"}
              </span>
            </span>
          </div>
          {" "}
          <div className={"mobservicemvp--rsp-fa"} style={{"position": "absolute", "right": "14px", "bottom": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Day 21 · Live"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"Your MVP is launched"}
              </span>
            </span>
          </div>
          {" "}
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"What's Included"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Everything you need to "}
            <span style={{"color": "#C2323F"}}>
              {"launch your MVP."}
            </span>
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"One team and one fixed timeline for the whole journey, from the first workshop to the day your product goes live."}
          </p>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Product scoping workshop"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"We turn your idea into a clear, focused feature list for the first version."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"UX & UI design"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"User flows, polished screens and a clickable prototype you can test early."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M16 18l6-6-6-6 M8 6l-6 6 6 6"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Full-stack development"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A working web or mobile app with a solid backend, built to keep growing."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 2v6 M15 2v6 M6 8h12v4a6 6 0 0 1-12 0Z M12 18v4"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Core integrations"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Sign-in, payments, email and the other essentials your users expect."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Testing & quality checks"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"We test every flow on real devices so launch day goes smoothly."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Launch & handover"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Deployment, documentation and a walkthrough so your team can take it forward."}
              </span>
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "20px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
            <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              <span>
                {"How It Works"}
              </span>
            </span>
            {" "}
            <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"Three weeks, "}
              <span style={{"color": "#C2323F"}}>
                {"four clear steps."}
              </span>
            </h2>
            {" "}
            <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"A fixed plan with a demo every week, so you always know where your product stands."}
            </p>
          </div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"position": "absolute", "left": "21px", "top": "48px", "bottom": "-14px", "width": "2px", "background": "repeating-linear-gradient(180deg, #E7B9BF 0 6px, transparent 6px 11px)"}} />
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "color": "#C2323F", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"1"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 1–3"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Scope"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We define the problem, the users and the must-have features for version one."}
                </span>
              </div>
            </div>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"position": "absolute", "left": "21px", "top": "48px", "bottom": "-14px", "width": "2px", "background": "repeating-linear-gradient(180deg, #E7B9BF 0 6px, transparent 6px 11px)"}} />
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "color": "#C2323F", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"2"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 4–8"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Design"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"Screens and a clickable prototype, tested before we write any code."}
                </span>
              </div>
            </div>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"position": "absolute", "left": "21px", "top": "48px", "bottom": "-14px", "width": "2px", "background": "repeating-linear-gradient(180deg, #E7B9BF 0 6px, transparent 6px 11px)"}} />
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "color": "#C2323F", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"3"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 9–17"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Build"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We develop the product in short cycles, with a working demo every week."}
                </span>
              </div>
            </div>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"4"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 18–21"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Test & launch"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"Final testing and polish, then your MVP goes live for real users."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div id={"work"}>
          <div style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "overflow": "hidden"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
                {"Project image"}
              </span>
            </div>
            <div style={{"padding": "4px 6px 6px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
              <div style={{"display": "flex", "flexWrap": "wrap", "gap": "6px"}}>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Featured project"}
                </span>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Healthcare · Mobile app"}
                </span>
              </div>
              <span style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Kestrel Health"}
              </span>
              <span style={{"fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A clinic booking app taken from a rough idea to both app stores in 21 days."}
              </span>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Scope and prototype agreed in week one"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Booking, reminders and staff dashboard built"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Launched on the App Store and Google Play"}
                </span>
              </div>
              <DcLink href={"/portfolio/kestrel-health"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
                <span>
                  {"View case study"}
                </span>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </DcLink>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
            {"Built with"}
          </span>
          <span style={{"fontSize": "20px", "fontWeight": "800"}}>
            {"Tools we use"}
          </span>
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/figma.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Figma"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/react.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"React"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/nextjs.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Next.js"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/react.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"React Native"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/nodejs.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Node.js"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/supabase.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Supabase"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/vercel.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Vercel"}
              </span>
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"FAQ"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Questions about "}
            <span style={{"color": "#C2323F"}}>
              {"the MVP Sprint."}
            </span>
          </h2>
        </div>
        {" "}
        <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
          {" "}
          {dcList(dcGet(S, "faqs")).map((__it, __i) => { const S5 = { ...S, "q": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <div style={{"borderRadius": "18px", "background": `${dcStr(dcGet(S5, "q.bg"))}`, "border": "1px solid #ECEEF1", "boxShadow": `${dcStr(dcGet(S5, "q.shadow"))}`}}>
                {" "}
                <button type={"button"} onClick={dcGet(S5, "q.toggle")} aria-expanded={dcGet(S5, "q.expanded")} style={{"width": "100%", "minHeight": "64px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "12px 16px 12px 18px", "border": "none", "background": "transparent", "fontFamily": "inherit", "fontSize": "15px", "lineHeight": "1.35", "fontWeight": "800", "color": "#14161A", "textAlign": "left", "cursor": "pointer"}}>
                  {" "}
                  <span>
                    {dcStr(dcGet(S5, "q.q"))}
                  </span>
                  {" "}
                  <span style={{"width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "10px", "background": `${dcStr(dcGet(S5, "q.iconBg"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S5, "q.iconInk")} strokeWidth={"2.8"} strokeLinecap={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S5, "q.iconPath")} />
                    </svg>
                  </span>
                  {" "}
                </button>
                {" "}
                {dcTruthy(dcGet(S5, "q.open")) ? (<>
                  {" "}
                  <p style={{"margin": "0", "padding": "0 18px 18px", "fontSize": "14px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
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
      </section>
      {" "}
      <DC_MobConsult  />
      {" "}
      <DC_MobFooter  />
      {" "}
    </div>
    </>
  );
};

export default function MobServiceMVP(props) {
  return <Component {...props} />;
}
