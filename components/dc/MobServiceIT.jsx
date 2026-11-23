'use client';
// AUTO-GENERATED from design/MobServiceIT.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
    const FAQS = [["Who is IT consultation for?", "Founders who aren't sure where to start, and companies that want an independent view of their product, code or technical plans."], ["What do I get at the end?", "A clear written plan with our recommendations, estimated costs and timelines, and the next steps in priority order."], ["Can you review our existing code?", "Yes. We can audit your code and setup and point out risks, quick wins and longer-term improvements."], ["Will you only recommend your own services?", "No. Our advice is independent. If another option suits you better, we'll tell you."], ["Is it a one-time session or ongoing?", "Both are possible. Most clients start with a one-time review, and some keep us on as ongoing technical advisors."]];
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobserviceit">
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
              {"IT Consultation"}
            </span>
          </nav>
          {" "}
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
            </svg>
            <span>
              {"IT Consultation"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "36px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Clear technical advice, "}
            <span style={{"color": "#C2323F"}}>
              {"before you spend."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Not sure what to build, which technology to choose or how to scale? We review your idea or product and give you a practical, honest technical plan."}
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
              {"Independent advice"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Clear written plan"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"No jargon"}
            </span>
          </div>
        </div>
        <div aria-hidden={"true"} style={{"position": "relative", "height": "300px", "borderRadius": "26px", "background": "#FBECEE", "border": "1px solid #F4DADD", "overflow": "hidden"}}>
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "250px", "height": "250px", "margin": "-125px 0 0 -125px", "borderRadius": "250px", "border": "1.5px dashed #E7B9BF"}} />
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "170px", "height": "170px", "margin": "-85px 0 0 -85px", "borderRadius": "170px", "background": "rgba(194,50,63,0.07)"}} />
          {" "}
          <div className={"mobserviceit--rsp-fa"} style={{"position": "absolute", "left": "50%", "top": "50%", "width": "140px", "height": "140px", "margin": "-70px 0 0 -70px", "borderRadius": "40px", "background": "#FFFFFF", "boxShadow": "0 24px 48px -20px rgba(194,50,63,0.5)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px"}}>
            {" "}
            <span style={{"width": "64px", "height": "64px", "borderRadius": "20px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
              </svg>
            </span>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "800"}}>
              {"IT Consultation"}
            </span>
            {" "}
          </div>
          {" "}
          <div className={"mobserviceit--rsp-fb"} style={{"position": "absolute", "left": "14px", "top": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6 M8 13h8 M8 17h5"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Tech plan ready"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"Written recommendations"}
              </span>
            </span>
          </div>
          {" "}
          <div className={"mobserviceit--rsp-fa"} style={{"position": "absolute", "right": "14px", "bottom": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 3l6 3 6-3v15l-6 3-6-3-6 3V6Z M9 3v15 M15 6v15"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Roadmap agreed"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"Clear next steps"}
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
            {"Answers to your "}
            <span style={{"color": "#C2323F"}}>
              {"biggest technical questions."}
            </span>
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Practical advice from people who build products every day, so you can make decisions with confidence."}
          </p>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 3l6 3 6-3v15l-6 3-6-3-6 3V6Z M9 3v15 M15 6v15"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Technical strategy & roadmap"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A clear plan for what to build, in what order, and why."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 2l10 5-10 5L2 7Z M2 17l10 5 10-5 M2 12l10 5 10-5"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Tech stack selection"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"The right technologies for your product, budget and team."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Architecture review"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A check of how your product is built, and how to make it scale."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Code & security audit"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"An honest review of code quality, security risks and technical debt."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 6c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3Z M4 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V3 M4 9v6c0 1.7 3.6 3 8 3s8-1.3 8-3V9"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Cost & timeline estimates"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Realistic budgets and timelines before you commit to building."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Team & vendor guidance"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Help with hiring developers or choosing the right agency or freelancer."}
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
              {"Clear advice in "}
              <span style={{"color": "#C2323F"}}>
                {"four simple steps."}
              </span>
            </h2>
            {" "}
            <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"A focused engagement that ends with a written plan you can act on straight away."}
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
                  {"Day 1"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Discovery call"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We talk through your goals, challenges and the questions you need answered."}
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
                  {"Day 2–5"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Review"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We look at your idea, product, code or setup in detail."}
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
                  {"Day 6–8"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Recommendations"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We prepare clear, prioritised advice in plain language."}
                </span>
              </div>
            </div>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"4"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 9–10"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Plan & next steps"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We walk you through the plan and answer your questions."}
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
                  {"Finance · SaaS"}
                </span>
              </div>
              <span style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Quantix"}
              </span>
              <span style={{"fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A technical review and roadmap that helped an invoicing startup choose its stack and plan its first build."}
              </span>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Stack and architecture recommended"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Costs and timeline estimated upfront"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Roadmap for the first two releases"}
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
            {"Platforms we advise on"}
          </span>
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/aws.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"AWS"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/googlecloud.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Google Cloud"}
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
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/github.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"GitHub"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/postgresql.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"PostgreSQL"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/docker.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Docker"}
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
              {"IT consultation."}
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

export default function MobServiceIT(props) {
  return <Component {...props} />;
}
