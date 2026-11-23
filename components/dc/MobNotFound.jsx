'use client';
// AUTO-GENERATED from design/MobNotFound.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';
import DC_MobFooter from './MobFooter';

class Component extends DCLogic {
  renderVals() {
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobnotfound">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={""} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 16px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "40px 22px 26px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "22px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textAlign": "center"}}>
          {" "}
          <div aria-hidden={"true"} style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
            <span style={{"fontSize": "110px", "lineHeight": "0.9", "fontWeight": "800", "letterSpacing": "-0.06em"}}>
              {"4"}
            </span>
            <span style={{"position": "relative", "width": "104px", "height": "104px", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg className={"mobnotfound--rsp-spin"} width={"104"} height={"104"} viewBox={"0 0 104 104"} style={{"position": "absolute", "inset": "0"}}>
                <circle cx={"52"} cy={"52"} r={"49"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"2"} strokeDasharray={"5 7"} />
                <circle cx={"52"} cy={"3"} r={"5"} fill={"#C2323F"} />
              </svg>
              <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "82px", "height": "82px", "display": "block"}} />
            </span>
            <span style={{"fontSize": "110px", "lineHeight": "0.9", "fontWeight": "800", "letterSpacing": "-0.06em"}}>
              {"4"}
            </span>
          </div>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "32px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"This page took a "}
            <span style={{"color": "#C2323F"}}>
              {"different route."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"The page you're looking for may have moved or no longer exists. Let's get you back on track."}
          </p>
          {" "}
          <label style={{"alignSelf": "stretch", "height": "54px", "boxSizing": "border-box", "padding": "0 14px", "display": "flex", "alignItems": "center", "gap": "10px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14Z M20 20l-3.5-3.5"} />
            </svg>
            <span style={{"position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)"}}>
              {"Search the site"}
            </span>
            <input type={"search"} placeholder={"Search the site"} style={{"flexGrow": "1", "minWidth": "0", "height": "100%", "border": "none", "outline": "none", "background": "transparent", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "color": "#14161A"}} />
          </label>
          {" "}
          <div style={{"alignSelf": "stretch", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
            <DcLink href={"/"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
              <span>
                {"Back to home"}
              </span>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"} />
              </svg>
            </DcLink>
            <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 18px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.6)"}}>
              <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
              <span style={{"flexGrow": "1"}}>
                {"Book a call with Siva"}
              </span>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
            </DcLink>
          </div>
          {" "}
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <DcLink href={"/services/21-day-mvp-sprint"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"Services"}
              </span>
              <span style={{"fontSize": "12px", "color": "#545A66", "fontWeight": "600"}}>
                {"What we can build for you"}
              </span>
            </span>
            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M7 17L17 7M8 7h9v9"} />
            </svg>
          </DcLink>
          <DcLink href={"/portfolio"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"Portfolio"}
              </span>
              <span style={{"fontSize": "12px", "color": "#545A66", "fontWeight": "600"}}>
                {"Products we've launched"}
              </span>
            </span>
            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M7 17L17 7M8 7h9v9"} />
            </svg>
          </DcLink>
          <DcLink href={"/blog"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"Blog"}
              </span>
              <span style={{"fontSize": "12px", "color": "#545A66", "fontWeight": "600"}}>
                {"Lessons from building MVPs"}
              </span>
            </span>
            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M7 17L17 7M8 7h9v9"} />
            </svg>
          </DcLink>
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 5h18v14H3Z M3 7l9 6 9-6"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"Contact"}
              </span>
              <span style={{"fontSize": "12px", "color": "#545A66", "fontWeight": "600"}}>
                {"Talk to us about your idea"}
              </span>
            </span>
            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M7 17L17 7M8 7h9v9"} />
            </svg>
          </DcLink>
        </div>
      </section>
      {" "}
      <DC_MobFooter  />
      {" "}
    </div>
    </>
  );
};

export default function MobNotFound(props) {
  return <Component {...props} />;
}
