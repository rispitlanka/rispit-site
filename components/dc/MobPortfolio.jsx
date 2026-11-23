'use client';
// AUTO-GENERATED from design/MobPortfolio.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';
import DC_MobConsult from './MobConsult';
import DC_MobFooter from './MobFooter';

class Component extends DCLogic {
  renderVals() {
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobportfolio">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={"Portfolio"} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"Portfolio · Case Studies"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "36px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Products we've designed, "}
            <span style={{"color": "#C2323F"}}>
              {"built and launched."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Real problems, focused first versions and the results that followed."}
          </p>
          <div style={{"boxSizing": "border-box", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"fontSize": "16px", "fontWeight": "800"}}>
              {"Have a product in mind?"}
            </span>
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
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "16px", "background": "transparent"}}>
        <span style={{"fontSize": "24px", "fontWeight": "800", "letterSpacing": "-0.02em", "padding": "0 4px"}}>
          {"Our work"}
        </span>
        <div style={{"display": "flex", "gap": "6px", "overflowX": "auto", "padding": "2px 2px 6px"}}>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 4px 10px -6px rgba(20,22,26,0.3)", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"} />
            </svg>
            {"All"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "boxShadow": "none", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
            </svg>
            {"Mobile apps"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "boxShadow": "none", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M2 4h20v16H2Z M2 9h20"} />
            </svg>
            {"Web apps"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "boxShadow": "none", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
            </svg>
            {"AI"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "boxShadow": "none", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 18h11.5Z"} />
            </svg>
            {"SaaS"}
          </span>
          <span style={{"flexShrink": "0", "height": "40px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 14px", "borderRadius": "12px", "background": "#F1F2F4", "border": "1px solid transparent", "boxShadow": "none", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8Z"} />
            </svg>
            {"Our products"}
          </span>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div style={{"position": "relative", "height": "240px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C9A1A7"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#A3242F"}}>
                {"Project image"}
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "padding": "5px 11px", "borderRadius": "999px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "800"}}>
                {"Featured project"}
              </span>
            </div>
            {" "}
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"Healthcare"}
              </span>
              <span style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Kestrel Health"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A clinic booking app launched on both app stores in 21 days."}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
                {"Project image"}
              </span>
              <span style={{"position": "absolute", "right": "12px", "top": "12px", "padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                {"Client project"}
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M2 4h20v16H2Z M2 9h20"} />
                </svg>
                {"Web app"}
              </span>
            </div>
            {" "}
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"Analytics · Sales"}
              </span>
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Lumora Analytics"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A sales dashboard that brings a team's numbers into one view."}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C9A1A7"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#A3242F"}}>
                {"Project image"}
              </span>
              <span style={{"position": "absolute", "right": "12px", "top": "12px", "padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                {"Client project"}
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
                </svg>
                {"AI assistant"}
              </span>
            </div>
            {" "}
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"E-commerce · Support"}
              </span>
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Orbitly Assist"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"An AI support assistant that answers questions around the clock."}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
                {"Project image"}
              </span>
              <span style={{"position": "absolute", "right": "12px", "top": "12px", "padding": "5px 10px", "borderRadius": "999px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                {"Our product"}
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8Z"} />
                </svg>
                {"Our product"}
              </span>
            </div>
            {" "}
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"Productivity · SaaS"}
              </span>
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Rispit Flow"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A simple sprint board for small product teams."}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C9A1A7"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#A3242F"}}>
                {"Project image"}
              </span>
              <span style={{"position": "absolute", "right": "12px", "top": "12px", "padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                {"Client project"}
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M2 4h20v16H2Z M2 9h20"} />
                </svg>
                {"Web app"}
              </span>
            </div>
            {" "}
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"Travel · Booking"}
              </span>
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Fernway"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A trip-planning platform that turns bookings into one itinerary."}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
                {"Project image"}
              </span>
              <span style={{"position": "absolute", "right": "12px", "top": "12px", "padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                {"Client project"}
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 18h11.5Z"} />
                </svg>
                {"SaaS platform"}
              </span>
            </div>
            {" "}
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"Finance · B2B"}
              </span>
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Quantix"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"An invoicing tool for small agencies, from quote to paid."}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C9A1A7"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#A3242F"}}>
                {"Project image"}
              </span>
              <span style={{"position": "absolute", "right": "12px", "top": "12px", "padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                {"Client project"}
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
                </svg>
                {"Mobile app"}
              </span>
            </div>
            {" "}
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                {"Education"}
              </span>
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Brightpath"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A learning app with short daily lessons and progress tracking."}
              </span>
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
            </div>
            {" "}
          </DcLink>
        </div>
        <DcLink href={"#"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
          <span>
            {"Load more projects"}
          </span>
          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M6 9l6 6 6-6"} />
          </svg>
        </DcLink>
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

export default function MobPortfolio(props) {
  return <Component {...props} />;
}
