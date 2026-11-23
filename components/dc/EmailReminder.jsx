'use client';
// AUTO-GENERATED from design/EmailReminder.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
      <div style={{"width": "680px", "height": "1260px", "boxSizing": "border-box", "padding": "0 40px 40px", "background": "#ECEEF1", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-emailreminder">
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
            {"Reminder: your Rispit call starts in 1 hour"}
          </span>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#545A66", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis"}}>
            {"Your 20-minute call starts at [14:00]. Here's the link to join."}
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
        <div style={{"padding": "40px 36px 24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
          {" "}
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FBECEE", "fontSize": "13px", "fontWeight": "800", "color": "#A3242F"}}>
            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2"} />
            </svg>
            {"Starting in 1 hour"}
          </span>
          {" "}
          <span style={{"fontSize": "34px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Your call is today, [First name]."}
          </span>
          {" "}
          <span style={{"fontSize": "16px", "lineHeight": "1.65", "fontWeight": "500", "color": "#3B3F47"}}>
            {"Just a quick reminder about your 20-minute call with Rispit. The link below opens the video call in your browser, no download needed."}
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 28px", "borderRadius": "20px", "background": "#C2323F", "color": "#FFFFFF", "overflow": "hidden", "boxShadow": "0 20px 40px -22px rgba(194,50,63,0.7)"}}>
          {" "}
          <div style={{"padding": "26px 24px", "display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            {" "}
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#FBECEE"}}>
                {"Today"}
              </span>
              <span style={{"fontSize": "40px", "lineHeight": "1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"[14:00]"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "600"}}>
                {"[Your time zone] · 20 minutes"}
              </span>
            </span>
            {" "}
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "72px", "height": "72px", "display": "block", "borderRadius": "22px", "objectFit": "cover", "border": "3px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            {" "}
          </div>
          {" "}
          <div style={{"padding": "0 24px 24px"}}>
            {" "}
            <DcLink href={"#join"} style={{"height": "52px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "borderRadius": "14px", "background": "#FFFFFF", "color": "#14161A", "fontSize": "15px", "fontWeight": "800", "textDecoration": "none"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M15 10l5-3v10l-5-3Z M3 6h12v12H3Z"} />
              </svg>
              <span>
                {"Join the video call"}
              </span>
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 28px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1"}}>
          {" "}
          <span style={{"fontSize": "15px", "fontWeight": "800"}}>
            {"Before we talk"}
          </span>
          {" "}
          <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.5", "fontWeight": "500", "color": "#3B3F47"}}>
            <span style={{"width": "22px", "height": "22px", "flexShrink": "0", "borderRadius": "7px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "fontWeight": "800", "color": "#C2323F"}}>
              {"1"}
            </span>
            {"Find a quiet spot with a good connection."}
          </span>
          <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.5", "fontWeight": "500", "color": "#3B3F47"}}>
            <span style={{"width": "22px", "height": "22px", "flexShrink": "0", "borderRadius": "7px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "fontWeight": "800", "color": "#C2323F"}}>
              {"2"}
            </span>
            {"Have your idea, notes or sketches ready to share."}
          </span>
          <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.5", "fontWeight": "500", "color": "#3B3F47"}}>
            <span style={{"width": "22px", "height": "22px", "flexShrink": "0", "borderRadius": "7px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "fontWeight": "800", "color": "#C2323F"}}>
              {"3"}
            </span>
            {"Write down your top questions so we cover them."}
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"margin": "0 36px 32px", "fontSize": "13px", "lineHeight": "1.6", "fontWeight": "500", "color": "#545A66"}}>
          {"Can't make it? "}
          <DcLink href={"#reschedule"} style={{"fontWeight": "700"}}>
            {"Pick a new time"}
          </DcLink>
          {". It only takes a few seconds."}
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

export default function EmailReminder(props) {
  return <Component {...props} />;
}
