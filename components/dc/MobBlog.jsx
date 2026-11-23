'use client';
// AUTO-GENERATED from design/MobBlog.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobblog">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={"Blogs"} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"The Rispit Blog"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "38px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Lessons from "}
            <span style={{"color": "#C2323F"}}>
              {"building MVPs."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Practical guides on product, design, development and launch, for founders building their first version."}
          </p>
          {" "}
          <label style={{"height": "54px", "boxSizing": "border-box", "padding": "0 16px", "display": "flex", "alignItems": "center", "gap": "10px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.06)"}}>
            <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14Z M20 20l-3.5-3.5"} />
            </svg>
            <span style={{"position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)"}}>
              {"Search articles"}
            </span>
            <input type={"search"} placeholder={"Search articles"} style={{"flexGrow": "1", "minWidth": "0", "height": "100%", "border": "none", "outline": "none", "background": "transparent", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "color": "#14161A"}} />
          </label>
        </div>
        <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
          <div aria-hidden={"true"} style={{"position": "relative", "height": "200px", "borderRadius": "20px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <span style={{"width": "84px", "height": "84px", "borderRadius": "26px", "background": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
            <span style={{"position": "absolute", "left": "12px", "top": "12px", "padding": "5px 11px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "800", "color": "#A3242F"}}>
              {"Featured"}
            </span>
          </div>
          <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
            <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
              <span style={{"display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"} />
                </svg>
                {"Playbook"}
              </span>
              <span>
                {"[Date] · 12 min read"}
              </span>
            </div>
            <span style={{"fontSize": "24px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"The 21-day MVP playbook: from idea to launch"}
            </span>
            <span style={{"fontSize": "14px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
              {"Our full process, day by day, and what you can borrow for your own team."}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
              <span>
                {"Read article"}
              </span>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
            </span>
          </div>
        </DcLink>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "16px", "background": "transparent"}}>
        <span style={{"fontSize": "24px", "fontWeight": "800", "letterSpacing": "-0.02em", "padding": "0 4px"}}>
          {"All articles"}
        </span>
        <div style={{"display": "flex", "gap": "6px", "overflowX": "auto", "padding": "2px 2px 6px"}}>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"} />
            </svg>
            {"All"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
            </svg>
            {"Product strategy"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
            </svg>
            {"Design"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M16 18l6-6-6-6 M8 6l-6 6 6 6"} />
            </svg>
            {"Development"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
            </svg>
            {"Mobile"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
            </svg>
            {"AI"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
            </svg>
            {"Launch"}
          </span>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
                </svg>
                {"Product strategy"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 6 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"How to scope your MVP so it ships in 21 days"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A simple way to decide what goes into your first version."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 18l6-6-6-6 M8 6l-6 6 6 6"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 18l6-6-6-6 M8 6l-6 6 6 6"} />
                </svg>
                {"Development"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 8 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"No-code or custom code: what is right for your first version?"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"The honest trade-offs in cost, speed and flexibility."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
                </svg>
                {"AI"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 5 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Adding AI to your product without overbuilding"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Where AI features genuinely help early users."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
                </svg>
                {"Design"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 7 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"5 UX mistakes that slow down your first users"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Small design choices that quietly push new users away."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
                </svg>
                {"Product strategy"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 6 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"How to test your idea before writing any code"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Cheap, fast ways to learn if people want what you plan to build."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
                </svg>
                {"Mobile"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 8 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"React Native or Flutter for your first app?"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A plain comparison to help you pick the right one."}
              </span>
            </div>
          </DcLink>
        </div>
        <DcLink href={"#"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
          <span>
            {"Load more articles"}
          </span>
          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M6 9l6 6 6-6"} />
          </svg>
        </DcLink>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25), 0 24px 48px -24px rgba(194,50,63,0.6)"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#FBECEE"}}>
            {"Newsletter"}
          </span>
          <span style={{"fontSize": "26px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Get new articles in your inbox."}
          </span>
          <span style={{"fontSize": "14px", "lineHeight": "1.55", "fontWeight": "500"}}>
            {"One short email when we publish something new. No spam."}
          </span>
          <form style={{"display": "flex", "flexDirection": "column", "gap": "8px"}} onSubmit={dcFormSubmit}>
            <label htmlFor={"m-email"} style={{"position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)"}}>
              {"Email address"}
            </label>
            <input id={"m-email"} type={"email"} placeholder={"you@company.com"} style={{"height": "52px", "padding": "0 16px", "border": "none", "outline": "none", "borderRadius": "14px", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "color": "#14161A"}} />
            <button type={"button"} style={{"height": "52px", "border": "none", "borderRadius": "14px", "background": "#14161A", "color": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "700", "cursor": "pointer"}}>
              {"Subscribe"}
            </button>
          </form>
        </div>
      </section>
      {" "}
      <DC_MobFooter  />
      {" "}
    </div>
    </>
  );
};

export default function MobBlog(props) {
  return <Component {...props} />;
}
