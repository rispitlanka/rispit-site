'use client';
// AUTO-GENERATED from design/MobThankYou.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobthankyou">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={""} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"width": "72px", "height": "72px", "borderRadius": "22px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "0 16px 32px -12px rgba(194,50,63,0.6)"}}>
            <svg width={"36"} height={"36"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 13l4 4L19 7"} />
            </svg>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"You're booked! "}
            <span style={{"color": "#C2323F"}}>
              {"Talk soon."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Thanks for reaching out. We've sent a confirmation to your email with the video call link. If you sent a message instead, we'll reply within [1 working day]."}
          </p>
        </div>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.04), 0 24px 48px -24px rgba(20,22,26,0.3)"}}>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            <span style={{"fontSize": "19px", "fontWeight": "800"}}>
              {"Your call"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 11px", "borderRadius": "999px", "background": "#E8F5ED", "fontSize": "12px", "fontWeight": "800", "color": "#1E7A45"}}>
              <span style={{"width": "7px", "height": "7px", "borderRadius": "7px", "background": "#2E9E5B"}} />
              {"Confirmed"}
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "padding": "14px", "borderRadius": "16px", "background": "#F7F8FA"}}>
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "50px", "height": "50px", "display": "block", "borderRadius": "15px", "objectFit": "cover"}} />
            <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"20-minute consultation"}
              </span>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"with Siva, founder of Rispit"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "42px", "height": "42px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"19"} height={"19"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 5h18v16H3Z M3 9h18 M8 3v4 M16 3v4"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Date"}
              </span>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"[Tuesday, 24 November]"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "42px", "height": "42px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"19"} height={"19"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Time"}
              </span>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"[14:00, your time zone]"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "42px", "height": "42px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"19"} height={"19"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M15 10l5-3v10l-5-3Z M3 6h12v12H3Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Where"}
              </span>
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"Video call (link in your email)"}
              </span>
            </span>
          </div>
          <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            {"Add to your calendar"}
          </span>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "6px"}}>
            <DcLink href={"#google"} style={{"height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "textDecoration": "none", "color": "#14161A"}}>
              {"Google"}
            </DcLink>
            <DcLink href={"#outlook"} style={{"height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "textDecoration": "none", "color": "#14161A"}}>
              {"Outlook"}
            </DcLink>
            <DcLink href={"#ics"} style={{"height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "textDecoration": "none", "color": "#14161A"}}>
              {"Apple"}
            </DcLink>
          </div>
          <DcLink href={"/contact"} style={{"alignSelf": "center", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
            {"Need to change the time? Reschedule"}
          </DcLink>
        </div>
        <div style={{"boxSizing": "border-box", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "10px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
            {"To get the most out of the call"}
          </span>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "padding": "14px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "11px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"} />
              </svg>
            </span>
            <span style={{"fontSize": "14px", "lineHeight": "1.4", "fontWeight": "700"}}>
              {"Think about the one problem your product solves"}
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "padding": "14px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "11px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"} />
              </svg>
            </span>
            <span style={{"fontSize": "14px", "lineHeight": "1.4", "fontWeight": "700"}}>
              {"Know who your first users will be"}
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "padding": "14px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "11px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6"} />
              </svg>
            </span>
            <span style={{"fontSize": "14px", "lineHeight": "1.4", "fontWeight": "700"}}>
              {"Bring any sketches, notes or links you have"}
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 16px 16px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <span style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.03em", "padding": "0 4px"}}>
          {"While you wait"}
        </span>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <DcLink href={"/portfolio"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"See our work"}
              </span>
              <span style={{"fontSize": "13px", "color": "#545A66", "fontWeight": "500"}}>
                {"Products we've launched"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M7 17L17 7M8 7h9v9"} />
            </svg>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Read the 21-day playbook"}
              </span>
              <span style={{"fontSize": "13px", "color": "#545A66", "fontWeight": "500"}}>
                {"How we go from idea to launch"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M7 17L17 7M8 7h9v9"} />
            </svg>
          </DcLink>
          <DcLink href={"/services/21-day-mvp-sprint"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Explore our services"}
              </span>
              <span style={{"fontSize": "13px", "color": "#545A66", "fontWeight": "500"}}>
                {"From MVPs to AI and content"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
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

export default function MobThankYou(props) {
  return <Component {...props} />;
}
