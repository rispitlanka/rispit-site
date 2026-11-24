'use client';
// AUTO-GENERATED from design/EmailNewsletter.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    return { footerNote: "You're receiving this because you subscribed to The Rispit Letter.", footerLink: "Unsubscribe" };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "680px", "height": "2040px", "boxSizing": "border-box", "padding": "0 40px 40px", "background": "#ECEEF1", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-emailnewsletter">
      {" "}
      {" "}
      <div style={{"height": "92px", "display": "flex", "alignItems": "center", "gap": "12px"}}>
        {" "}
        <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "40px", "height": "40px", "display": "block"}} />
        {" "}
        <div style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px", "minWidth": "0"}}>
          {" "}
          <span style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "fontWeight": "700"}}>
            <span>
              {"Rispit <hello@rispit.com>"}
            </span>
            <span style={{"color": "#7A808C", "fontWeight": "600"}}>
              {"[Time]"}
            </span>
          </span>
          {" "}
          <span style={{"fontSize": "15px", "fontWeight": "800"}}>
            {"The Rispit Letter #[01]: the 21-day MVP playbook"}
          </span>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#545A66", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis"}}>
            {"This month: the 21-day playbook, testing ideas before code, and a new launch."}
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      {" "}
      <div style={{"width": "600px", "borderRadius": "24px", "background": "#FFFFFF", "overflow": "hidden", "boxShadow": "0 20px 40px -24px rgba(20,22,26,0.35)"}}>
        {" "}
        <div style={{"height": "76px", "boxSizing": "border-box", "padding": "0 36px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderBottom": "1px solid #F1F2F4"}}>
          {" "}
          <span style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
            <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={"Rispit"} style={{"width": "34px", "height": "34px", "display": "block"}} />
            <span style={{"display": "flex", "flexDirection": "column", "gap": "3px"}}>
              <span style={{"fontSize": "20px", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-0.02em", "color": "#C2323F"}}>
                {"Rispit"}
              </span>
              <span style={{"fontSize": "8px", "fontWeight": "700", "lineHeight": "1", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"We do things"}
              </span>
            </span>
          </span>
          {" "}
          <DcLink href={"#web"} style={{"fontSize": "12px", "fontWeight": "700", "color": "#545A66", "textDecoration": "none"}}>
            {"View in browser"}
          </DcLink>
          {" "}
        </div>
        {" "}
        <div style={{"padding": "32px 36px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
          {" "}
          <span style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
            <span style={{"letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
              {"The Rispit Letter"}
            </span>
            <span>
              {"Issue #[01] · [December 2026]"}
            </span>
          </span>
          {" "}
          <span style={{"fontSize": "30px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Hi [First name], here's what we learned this month."}
          </span>
          {" "}
          <span style={{"fontSize": "15px", "lineHeight": "1.65", "fontWeight": "500", "color": "#3B3F47"}}>
            {"[A short, friendly intro of two or three sentences about what's new at Rispit and what this issue covers.]"}
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"padding": "20px 36px 28px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
          {" "}
          <div style={{"position": "relative", "height": "220px", "borderRadius": "18px", "background": "#C2323F", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <span style={{"position": "absolute", "width": "240px", "height": "240px", "borderRadius": "240px", "right": "-60px", "top": "-90px", "background": "rgba(255,255,255,0.12)"}} />
            <span style={{"position": "relative", "width": "84px", "height": "84px", "borderRadius": "24px", "background": "#FFFFFF", "boxShadow": "0 18px 36px -14px rgba(20,22,26,0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"38"} height={"38"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
          </div>
          {" "}
          <span style={{"fontSize": "11px", "fontWeight": "800", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#A3242F"}}>
            {"Featured · Playbook"}
          </span>
          {" "}
          <span style={{"fontSize": "24px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
            {"The 21-day MVP playbook: from idea to launch"}
          </span>
          {" "}
          <span style={{"fontSize": "15px", "lineHeight": "1.6", "fontWeight": "500", "color": "#3B3F47"}}>
            {"Our full process, day by day: how we scope, design, build and launch a first version in three weeks."}
          </span>
          {" "}
          <DcLink href={"#post"} style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "52px", "padding": "0 24px", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"Read the article"}
            </span>
          </DcLink>
          {" "}
        </div>
        {" "}
        <div style={{"padding": "0 36px 28px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
          {" "}
          <span style={{"fontSize": "17px", "fontWeight": "800"}}>
            {"Also this month"}
          </span>
          {" "}
          <DcLink href={"#post"} style={{"display": "flex", "gap": "16px", "padding": "14px", "borderRadius": "16px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "96px", "height": "96px", "flexShrink": "0", "borderRadius": "14px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "6px", "paddingTop": "4px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "800", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#A3242F"}}>
                {"Product strategy"}
              </span>
              <span style={{"fontSize": "16px", "lineHeight": "1.3", "fontWeight": "800"}}>
                {"How to test your idea before writing any code"}
              </span>
              <span style={{"fontSize": "13px", "lineHeight": "1.5", "fontWeight": "500", "color": "#545A66"}}>
                {"Cheap, fast ways to learn if people want what you plan to build."}
              </span>
            </span>
          </DcLink>
          {" "}
          <DcLink href={"#post"} style={{"display": "flex", "gap": "16px", "padding": "14px", "borderRadius": "16px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "96px", "height": "96px", "flexShrink": "0", "borderRadius": "14px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "6px", "paddingTop": "4px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "800", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#A3242F"}}>
                {"AI"}
              </span>
              <span style={{"fontSize": "16px", "lineHeight": "1.3", "fontWeight": "800"}}>
                {"Adding AI to your product without overbuilding"}
              </span>
              <span style={{"fontSize": "13px", "lineHeight": "1.5", "fontWeight": "500", "color": "#545A66"}}>
                {"Where AI features help early users, and where they just add cost."}
              </span>
            </span>
          </DcLink>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 28px", "padding": "20px", "display": "flex", "gap": "16px", "borderRadius": "18px", "background": "#14161A", "color": "#FFFFFF"}}>
          {" "}
          <span style={{"width": "120px", "height": "120px", "flexShrink": "0", "borderRadius": "14px", "background": "#2A2D33", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <svg width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A8F9A"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
            </svg>
          </span>
          {" "}
          <span style={{"display": "flex", "flexDirection": "column", "gap": "6px", "justifyContent": "center"}}>
            <span style={{"fontSize": "11px", "fontWeight": "800", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#E7B9BF"}}>
              {"From the studio"}
            </span>
            <span style={{"fontSize": "17px", "fontWeight": "800"}}>
              {"We just launched [Project name]"}
            </span>
            <span style={{"fontSize": "13px", "lineHeight": "1.5", "fontWeight": "500", "color": "#C9CCD3"}}>
              {"[One or two lines about a recent launch.]"}
            </span>
            <DcLink href={"#case"} style={{"fontSize": "13px", "fontWeight": "800", "color": "#F4A3AB", "textDecoration": "none"}}>
              {"Read the case study →"}
            </DcLink>
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 28px", "padding": "14px 16px", "display": "flex", "alignItems": "center", "gap": "12px", "borderRadius": "14px", "background": "#A3242F", "color": "#FFFFFF"}}>
          {" "}
          <span style={{"width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "10px", "background": "#1F6B45", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 8h18v4H3Z M5 12h14v9H5Z M12 8v13 M12 8c-1.5-3-5-4-5-1.5S10 8 12 8Z M12 8c1.5-3 5-4 5-1.5S14 8 12 8Z"} />
            </svg>
          </span>
          {" "}
          <span style={{"fontSize": "13px", "lineHeight": "1.45", "fontWeight": "600"}}>
            <strong style={{"fontWeight": "800"}}>
              {"Christmas offer:"}
            </strong>
            {" book your project before 31st December and get 20% off your build."}
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 32px", "padding": "24px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "borderRadius": "18px", "background": "#FBECEE", "textAlign": "center"}}>
          {" "}
          <span style={{"fontSize": "20px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
            {"Have an idea you want to build?"}
          </span>
          {" "}
          <span style={{"fontSize": "14px", "lineHeight": "1.55", "fontWeight": "500", "color": "#3B3F47"}}>
            {"Let's plan your first version together on a free 20-minute call."}
          </span>
          {" "}
          <DcLink href={"#contact"} style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "52px", "padding": "0 20px 0 6px", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "36px", "height": "36px", "display": "block", "borderRadius": "11px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            <span>
              {"Book a call with Siva"}
            </span>
          </DcLink>
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"padding": "28px 36px 32px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "background": "#F7F8FA", "textAlign": "center"}}>
          {" "}
          <span style={{"display": "flex", "gap": "8px"}}>
            {" "}
            <DcLink href={"#linkedin"} aria-label={"LinkedIn"} style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z M2 9h4v12H2Z M4 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"} />
              </svg>
            </DcLink>
            {" "}
            <DcLink href={"#instagram"} aria-label={"Instagram"} style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"} />
              </svg>
            </DcLink>
            {" "}
            <DcLink href={"#x"} aria-label={"X"} style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 4l16 16M20 4L4 20"} />
              </svg>
            </DcLink>
            {" "}
          </span>
          {" "}
          <span style={{"fontSize": "12px", "lineHeight": "1.6", "fontWeight": "500", "color": "#545A66"}}>
            {"Rispit · Jaffna, Sri Lanka · [hello@rispit.com]"}
            <br />
            {dcStr(dcGet(S, "footerNote"))}
          </span>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#7A808C"}}>
            <DcLink href={"/privacy"} style={{"color": "#545A66"}}>
              {"Privacy Policy"}
            </DcLink>
            {" · "}
            <DcLink href={"#prefs"} style={{"color": "#545A66"}}>
              {dcStr(dcGet(S, "footerLink"))}
            </DcLink>
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
};

export default function EmailNewsletter(props) {
  return <Component {...props} />;
}
