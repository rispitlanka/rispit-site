'use client';
// AUTO-GENERATED from design/MobCaseStudy.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobcasestudy">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={"Portfolio"} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <nav aria-label={"Breadcrumb"} style={{"display": "flex", "alignItems": "center", "flexWrap": "wrap", "gap": "6px", "fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
            <DcLink href={"/"} style={{"textDecoration": "none"}}>
              {"Home"}
            </DcLink>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <DcLink href={"/portfolio"} style={{"textDecoration": "none"}}>
              {"Portfolio"}
            </DcLink>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <span style={{"color": "#14161A"}}>
              {"Kestrel Health"}
            </span>
          </nav>
          {" "}
          <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
            <span style={{"display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
              {"Case study"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
              {"Healthcare · Mobile app"}
            </span>
          </div>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "34px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"A clinic booking app, "}
            <span style={{"color": "#C2323F"}}>
              {"launched in 21 days."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"How we helped Kestrel Health turn phone-call bookings into a simple app that lets patients book a visit in a few taps."}
          </p>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "8px"}}>
            <DcLink href={"#view-app"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
              <span>
                {"View the app"}
              </span>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M7 17L17 7M8 7h9v9"} />
              </svg>
            </DcLink>
            <DcLink href={"#visit-site"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
              <span>
                {"Visit website"}
              </span>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M7 17L17 7M8 7h9v9"} />
              </svg>
            </DcLink>
          </div>
          {" "}
          <div style={{"boxSizing": "border-box", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 12px 26px -16px rgba(20,22,26,0.25)"}}>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Have a problem to solve?"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                {"Let's talk it through on a 20-minute call."}
              </span>
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
        <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Client"}
            </span>
            <span style={{"fontSize": "14px", "fontWeight": "800", "textAlign": "right"}}>
              {"Kestrel Health"}
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Industry"}
            </span>
            <span style={{"fontSize": "14px", "fontWeight": "800", "textAlign": "right"}}>
              {"Healthcare"}
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Services"}
            </span>
            <span style={{"fontSize": "14px", "fontWeight": "800", "textAlign": "right"}}>
              {"UI/UX · Mobile · Backend"}
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Platform"}
            </span>
            <span style={{"fontSize": "14px", "fontWeight": "800", "textAlign": "right"}}>
              {"iOS & Android"}
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Timeline"}
            </span>
            <span style={{"fontSize": "14px", "fontWeight": "800", "textAlign": "right"}}>
              {"21 days"}
            </span>
          </div>
        </div>
        <div style={{"position": "relative", "height": "240px", "borderRadius": "24px", "background": "#E9EBEF", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "overflow": "hidden"}}>
          <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
          </svg>
          <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
            {"Project photo"}
          </span>
          <span style={{"position": "absolute", "left": "12px", "bottom": "12px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 12px 8px 8px", "borderRadius": "14px", "background": "rgba(255,255,255,0.95)"}}>
            <span style={{"width": "28px", "height": "28px", "borderRadius": "9px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
            </span>
            <span style={{"fontSize": "12px", "fontWeight": "800"}}>
              {"Live on both stores"}
            </span>
          </span>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "32px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "borderRadius": "15px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2"} />
              </svg>
            </span>
            <span style={{"fontSize": "36px", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#DADCE1"}}>
              {"01"}
            </span>
          </div>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
            {"Background"}
          </span>
          <h2 style={{"margin": "0", "fontSize": "26px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Patients could only book by phone."}
          </h2>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Kestrel Health runs a group of busy clinics. Every appointment was booked over the phone, so front-desk staff spent much of their day on calls instead of with patients. Patients often waited on hold, had no easy way to change a booking, and many simply forgot their visit."}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 12h14"} />
                </svg>
              </span>
              <span>
                {"All bookings handled by phone"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 12h14"} />
                </svg>
              </span>
              <span>
                {"Long waits on hold at peak hours"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 12h14"} />
                </svg>
              </span>
              <span>
                {"No reminders, so frequent no-shows"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 12h14"} />
                </svg>
              </span>
              <span>
                {"Staff time lost to admin work"}
              </span>
            </li>
          </ul>
        </div>
        {" "}
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "borderRadius": "15px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8Z"} />
              </svg>
            </span>
            <span style={{"fontSize": "36px", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#DADCE1"}}>
              {"02"}
            </span>
          </div>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
            {"Objective"}
          </span>
          <h2 style={{"margin": "0", "fontSize": "26px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Let patients book in under a minute."}
          </h2>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"The goal was a simple app that patients could pick up without any help. It had to let them book, move or cancel a visit on their own, remind them before each appointment, and give clinic staff one clear view of the day."}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 5l7 7-7 7 M5 12h14"} />
                </svg>
              </span>
              <span>
                {"Book a visit in a few taps"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 5l7 7-7 7 M5 12h14"} />
                </svg>
              </span>
              <span>
                {"Change or cancel without calling"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 5l7 7-7 7 M5 12h14"} />
                </svg>
              </span>
              <span>
                {"Automatic reminders before visits"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 5l7 7-7 7 M5 12h14"} />
                </svg>
              </span>
              <span>
                {"Live on both app stores in 21 days"}
              </span>
            </li>
          </ul>
        </div>
        {" "}
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "borderRadius": "15px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"} />
              </svg>
            </span>
            <span style={{"fontSize": "36px", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#DADCE1"}}>
              {"03"}
            </span>
          </div>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
            {"Solution"}
          </span>
          <h2 style={{"margin": "0", "fontSize": "26px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"A booking app built around three taps."}
          </h2>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We designed and built one iOS and Android app around a single, focused flow: pick a day, pick a time, confirm. Push notifications remind patients before every visit, and a simple dashboard lets staff manage the day at a glance."}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span>
                {"Three-tap booking flow"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span>
                {"Push reminders and calendar sync"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span>
                {"Staff dashboard for the clinic"}
              </span>
            </li>
            <li style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
              <span style={{"width": "20px", "height": "20px", "flexShrink": "0", "borderRadius": "6px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
                <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span>
                {"Published on App Store and Google Play"}
              </span>
            </li>
          </ul>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"Screens"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"A closer look at "}
            <span style={{"color": "#C2323F"}}>
              {"the product."}
            </span>
          </h2>
        </div>
        <figure style={{"margin": "0", "position": "relative", "height": "220px", "borderRadius": "22px", "background": "#EEF1F5", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px"}}>
          <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
          </svg>
          <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
            {"Wide screenshot"}
          </span>
          <figcaption style={{"position": "absolute", "left": "12px", "bottom": "12px", "padding": "7px 12px", "borderRadius": "10px", "background": "rgba(255,255,255,0.95)", "fontSize": "12px", "fontWeight": "700", "color": "#14161A"}}>
            {"Clinic dashboard"}
          </figcaption>
        </figure>
        <figure style={{"margin": "0", "position": "relative", "height": "420px", "borderRadius": "22px", "background": "#FBECEE", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px"}}>
          <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
          </svg>
          <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
            {"Tall phone screenshot"}
          </span>
          <figcaption style={{"position": "absolute", "left": "12px", "bottom": "12px", "padding": "7px 12px", "borderRadius": "10px", "background": "rgba(255,255,255,0.95)", "fontSize": "12px", "fontWeight": "700", "color": "#14161A"}}>
            {"Booking flow"}
          </figcaption>
        </figure>
        <figure style={{"margin": "0", "position": "relative", "height": "300px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px"}}>
          <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
          </svg>
          <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
            {"Square screenshot"}
          </span>
          <figcaption style={{"position": "absolute", "left": "12px", "bottom": "12px", "padding": "7px 12px", "borderRadius": "10px", "background": "rgba(255,255,255,0.95)", "fontSize": "12px", "fontWeight": "700", "color": "#14161A"}}>
            {"Reminders"}
          </figcaption>
        </figure>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#14161A", "color": "#FFFFFF", "boxShadow": "0 24px 48px -24px rgba(20,22,26,0.6)"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#E7B9BF"}}>
            {"The results"}
          </span>
          <span style={{"fontSize": "24px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
            {"What changed after launch."}
          </span>
          <div style={{"padding": "20px", "borderRadius": "18px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
            <span style={{"fontSize": "36px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"[00%]"}
            </span>
            <span style={{"fontSize": "13px", "lineHeight": "1.45", "fontWeight": "600", "color": "#C9CCD3"}}>
              {"[Result, e.g. bookings now made in the app]"}
            </span>
          </div>
          <div style={{"padding": "20px", "borderRadius": "18px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
            <span style={{"fontSize": "36px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"[00%]"}
            </span>
            <span style={{"fontSize": "13px", "lineHeight": "1.45", "fontWeight": "600", "color": "#C9CCD3"}}>
              {"[Result, e.g. fewer missed appointments]"}
            </span>
          </div>
          <div style={{"padding": "20px", "borderRadius": "18px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
            <span style={{"fontSize": "36px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"[0.0★]"}
            </span>
            <span style={{"fontSize": "13px", "lineHeight": "1.45", "fontWeight": "600", "color": "#C9CCD3"}}>
              {"[Result, e.g. average app store rating]"}
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <DcLink href={"#video"} aria-label={"Watch the Kestrel Health story"} style={{"position": "relative", "display": "block", "height": "240px", "borderRadius": "26px", "background": "#2A2D33", "textDecoration": "none"}}>
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "margin": "-30px 0 0 -30px", "width": "60px", "height": "60px", "borderRadius": "60px", "background": "rgba(255,255,255,0.95)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
              <path d={"M8 5.5v13l11-6.5Z"} />
            </svg>
          </span>
          <span style={{"position": "absolute", "left": "14px", "bottom": "14px", "padding": "5px 10px", "borderRadius": "999px", "background": "rgba(20,22,26,0.6)", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
            {"Client video · 1:24"}
          </span>
        </DcLink>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <svg width={"36"} height={"36"} viewBox={"0 0 24 24"} fill={"none"} stroke={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M4 18v-5.5C4 8.4 6.2 6 10 5.5V8c-2 .4-3 1.7-3 4h3v6Zm10 0v-5.5c0-4.1 2.2-6.5 6-7V8c-2 .4-3 1.7-3 4h3v6Z"} />
          </svg>
          <blockquote style={{"margin": "0", "fontSize": "20px", "lineHeight": "1.45", "fontWeight": "700", "letterSpacing": "-0.01em"}}>
            {"\"We went from a rough idea to patients booking real appointments in three weeks. Rispit kept us focused on what mattered for the first version.\""}
          </blockquote>
          <figcaption style={{"display": "flex", "alignItems": "center", "gap": "12px", "paddingTop": "16px", "borderTop": "1px solid #E3E5E9"}}>
            <span style={{"width": "44px", "height": "44px", "borderRadius": "44px", "background": "#E9EBEF"}} />
            <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"[Client Name]"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Founder, Kestrel Health]"}
              </span>
            </span>
          </figcaption>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
            {"Built with"}
          </span>
          <span style={{"fontSize": "20px", "fontWeight": "800"}}>
            {"Tech used"}
          </span>
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
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
                <img src={"/logos/expo.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Expo"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/typescript.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"TypeScript"}
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
                <img src={"/logos/firebase.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Firebase"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/figma.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Figma"}
              </span>
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
            {"Next case study"}
          </span>
          <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            <span style={{"fontSize": "28px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"Lumora Analytics"}
            </span>
            <span style={{"width": "52px", "height": "52px", "borderRadius": "16px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
            </span>
          </span>
          <span style={{"fontSize": "14px", "fontWeight": "600", "color": "#545A66"}}>
            {"A sales dashboard that brings a team's numbers into one clear view."}
          </span>
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

export default function MobCaseStudy(props) {
  return <Component {...props} />;
}
