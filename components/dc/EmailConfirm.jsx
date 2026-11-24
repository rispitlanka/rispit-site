'use client';
// AUTO-GENERATED from design/EmailConfirm.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    return { footerNote: "You're receiving this email because you booked a call on rispit.com.", footerLink: "Manage booking" };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "680px", "height": "1600px", "boxSizing": "border-box", "padding": "0 40px 40px", "background": "#ECEEF1", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-emailconfirm">
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
            {"Your call with Rispit is confirmed: [Tue 24 Nov, 14:00]"}
          </span>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#545A66", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis"}}>
            {"Here's everything you need for our call, plus how to get the most out of it."}
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
        <div style={{"padding": "40px 36px 28px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
          {" "}
          <span style={{"width": "64px", "height": "64px", "borderRadius": "20px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "0 14px 28px -12px rgba(194,50,63,0.6)"}}>
            <svg width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 13l4 4L19 7"} />
            </svg>
          </span>
          {" "}
          <span style={{"fontSize": "34px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"You're booked, [First name]!"}
          </span>
          {" "}
          <span style={{"fontSize": "16px", "lineHeight": "1.65", "fontWeight": "500", "color": "#3B3F47"}}>
            {"Thanks for booking a call with Rispit. We're looking forward to hearing about your idea. Here are the details:"}
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 28px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
            <span style={{"width": "40px", "height": "40px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 5h18v16H3Z M3 9h18 M8 3v4 M16 3v4"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Date"}
              </span>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"[Tuesday, 24 November 2026]"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
            <span style={{"width": "40px", "height": "40px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Time"}
              </span>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"[14:00 – 14:20, your time zone]"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
            <span style={{"width": "40px", "height": "40px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M15 10l5-3v10l-5-3Z M3 6h12v12H3Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Where"}
              </span>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"Video call"}
              </span>
            </span>
          </div>
          {" "}
          <DcLink href={"#join"} style={{"alignSelf": "stretch", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "52px", "padding": "0 24px", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"Join the video call"}
            </span>
          </DcLink>
          {" "}
          <span style={{"display": "flex", "justifyContent": "center", "gap": "14px", "fontSize": "13px", "fontWeight": "700"}}>
            <DcLink href={"#gcal"}>
              {"Add to Google"}
            </DcLink>
            <span style={{"color": "#DADCE1"}}>
              {"|"}
            </span>
            <DcLink href={"#outlook"}>
              {"Outlook"}
            </DcLink>
            <span style={{"color": "#DADCE1"}}>
              {"|"}
            </span>
            <DcLink href={"#ics"}>
              {"Apple (.ics)"}
            </DcLink>
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"padding": "0 36px 28px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
          {" "}
          <span style={{"fontSize": "17px", "fontWeight": "800"}}>
            {"To get the most out of the call"}
          </span>
          {" "}
          <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "500", "color": "#3B3F47"}}>
            <span style={{"width": "22px", "height": "22px", "flexShrink": "0", "borderRadius": "7px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
            </span>
            {"Think about the one problem your product solves."}
          </span>
          <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "500", "color": "#3B3F47"}}>
            <span style={{"width": "22px", "height": "22px", "flexShrink": "0", "borderRadius": "7px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
            </span>
            {"Know who your first users will be."}
          </span>
          <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "500", "color": "#3B3F47"}}>
            <span style={{"width": "22px", "height": "22px", "flexShrink": "0", "borderRadius": "7px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginTop": "1px"}}>
              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
            </span>
            {"Bring any sketches, notes or links you have."}
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
        <div style={{"margin": "0 36px 32px", "paddingTop": "24px", "display": "flex", "alignItems": "center", "gap": "14px", "borderTop": "1px solid #F1F2F4"}}>
          {" "}
          <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "52px", "height": "52px", "display": "block", "borderRadius": "16px", "objectFit": "cover"}} />
          {" "}
          <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
            <span style={{"fontSize": "15px", "fontWeight": "800"}}>
              {"Talk soon, Siva"}
            </span>
            <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
              {"Founder, Rispit"}
            </span>
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 32px", "fontSize": "13px", "lineHeight": "1.6", "fontWeight": "500", "color": "#545A66"}}>
          {"Need a different time? "}
          <DcLink href={"#reschedule"} style={{"fontWeight": "700"}}>
            {"Reschedule"}
          </DcLink>
          {" or "}
          <DcLink href={"#cancel"} style={{"fontWeight": "700"}}>
            {"cancel"}
          </DcLink>
          {" your call."}
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

export default function EmailConfirm(props) {
  return <Component {...props} />;
}
