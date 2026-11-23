'use client';
// AUTO-GENERATED from design/MobServiceAI.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
    const FAQS = [["Which AI models do you use?", "We work with leading models such as OpenAI and Claude, and choose the one that gives the best balance of quality, speed and cost for your use case."], ["Is our data safe?", "Yes. We only use the data the feature needs, follow the providers' business data protections, and can keep sensitive data out of AI models entirely."], ["Do we need a lot of data to start?", "Usually not. Many useful features work with the content you already have, like help articles, documents or product data."], ["How much does it cost to run?", "It depends on how often the feature is used. We estimate running costs before we build and design the feature to keep them low."], ["Can you add AI to an existing product?", "Yes. Most of our AI work is adding focused features to products that are already live."]];
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobserviceai">
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
              {"AI Integration"}
            </span>
          </nav>
          {" "}
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
            </svg>
            <span>
              {"AI Integration"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "36px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Add AI that "}
            <span style={{"color": "#C2323F"}}>
              {"actually helps your users."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"We design and build practical AI features, like assistants, smart search and automation, that save time for your users and your team without overbuilding."}
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
              {"Practical use cases"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Your data stays protected"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Fits your product"}
            </span>
          </div>
        </div>
        <div aria-hidden={"true"} style={{"position": "relative", "height": "300px", "borderRadius": "26px", "background": "#FBECEE", "border": "1px solid #F4DADD", "overflow": "hidden"}}>
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "250px", "height": "250px", "margin": "-125px 0 0 -125px", "borderRadius": "250px", "border": "1.5px dashed #E7B9BF"}} />
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "170px", "height": "170px", "margin": "-85px 0 0 -85px", "borderRadius": "170px", "background": "rgba(194,50,63,0.07)"}} />
          {" "}
          <div className={"mobserviceai--rsp-fa"} style={{"position": "absolute", "left": "50%", "top": "50%", "width": "140px", "height": "140px", "margin": "-70px 0 0 -70px", "borderRadius": "40px", "background": "#FFFFFF", "boxShadow": "0 24px 48px -20px rgba(194,50,63,0.5)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px"}}>
            {" "}
            <span style={{"width": "64px", "height": "64px", "borderRadius": "20px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
              </svg>
            </span>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "800"}}>
              {"AI Integration"}
            </span>
            {" "}
          </div>
          {" "}
          <div className={"mobserviceai--rsp-fb"} style={{"position": "absolute", "left": "14px", "top": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Assistant online"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"Answers customer questions"}
              </span>
            </span>
          </div>
          {" "}
          <div className={"mobserviceai--rsp-fa"} style={{"position": "absolute", "right": "14px", "bottom": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M13 2L4 14h7l-1 8 9-12h-7Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Task automated"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"Hours saved every week"}
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
            {"AI features that "}
            <span style={{"color": "#C2323F"}}>
              {"earn their place."}
            </span>
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"We start from a real problem, not the latest trend, and build AI that is useful, reliable and affordable to run."}
          </p>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"AI chat assistants"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Assistants that answer questions using your own content and data."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14Z M20 20l-3.5-3.5"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Smart search"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Search that understands what people mean, not just the words they type."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6 M8 13h8 M8 17h5"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Document & data processing"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Pull key information from documents, emails and forms automatically."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M13 2L4 14h7l-1 8 9-12h-7Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Workflow automation"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Let AI handle repetitive tasks so your team can focus on real work."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"AI inside your app"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Summaries, suggestions and writing help built right into your product."}
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
                {"Safety & quality checks"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Testing, guardrails and monitoring so answers stay accurate and on-brand."}
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
              {"From idea to a "}
              <span style={{"color": "#C2323F"}}>
                {"working AI feature."}
              </span>
            </h2>
            {" "}
            <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"We prove the idea works early, then build it properly into your product."}
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
                  {"Find the use case"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We pick the problem where AI adds the most value and agree how to measure it."}
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
                  {"Prototype"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"A quick working prototype with your real data, to test quality early."}
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
                  {"Build & integrate"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We build the feature into your product with the right safeguards."}
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
                  {"Quality checks with real examples, then launch and monitoring."}
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
                  {"E-commerce · AI assistant"}
                </span>
              </div>
              <span style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Orbitly Assist"}
              </span>
              <span style={{"fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"An AI support assistant that answers customer questions around the clock and passes tricky ones to the team."}
              </span>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Trained on help articles and order data"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Hands complex questions to a human"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Live on the website and in the app"}
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
            {"AI stack"}
          </span>
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/openai.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"OpenAI"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/claude.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Claude"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/langchain.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"LangChain"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/python.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Python"}
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
                <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#545A66"}}>
                  {"P"}
                </span>
              </span>
              <span>
                {"Pinecone"}
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
              {"AI integration."}
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

export default function MobServiceAI(props) {
  return <Component {...props} />;
}
