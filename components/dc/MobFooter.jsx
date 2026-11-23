'use client';
// AUTO-GENERATED from design/MobFooter.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <footer style={{"width": "100%", "boxSizing": "border-box", "padding": "16px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobfooter">
      {" "}
      <div style={{"boxSizing": "border-box", "padding": "30px 22px 0", "display": "flex", "flexDirection": "column", "gap": "26px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)", "overflow": "hidden"}}>
        {" "}
        <div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
          {" "}
          <DcLink href={"/"} aria-label={"Rispit home"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "textDecoration": "none"}}>
            {" "}
            <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "40px", "height": "40px", "display": "block"}} />
            {" "}
            <span style={{"display": "flex", "flexDirection": "column", "gap": "3px"}}>
              <span style={{"fontSize": "23px", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-0.02em", "color": "#C2323F"}}>
                {"Rispit"}
              </span>
              <span style={{"fontSize": "8px", "fontWeight": "700", "lineHeight": "1", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"We do things"}
              </span>
            </span>
            {" "}
          </DcLink>
          {" "}
          <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"We help founders turn ideas into real products, designed, built and launched in 21 days."}
          </p>
          {" "}
          <div style={{"display": "flex", "gap": "8px"}}>
            {" "}
            <DcLink href={"#linkedin"} aria-label={"LinkedIn"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z M2 9h4v12H2Z M4 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"} />
              </svg>
            </DcLink>
            {" "}
            <DcLink href={"#instagram"} aria-label={"Instagram"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"} />
              </svg>
            </DcLink>
            {" "}
            <DcLink href={"#x"} aria-label={"X"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.4"} strokeLinecap={"round"} aria-hidden={"true"}>
                <path d={"M4 4l16 16M20 4L4 20"} />
              </svg>
            </DcLink>
            {" "}
            <DcLink href={"mailto:hello@rispit.com"} aria-label={"Email"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 5h18v14H3Z M3 7l9 6 9-6"} />
              </svg>
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "20px"}}>
          {" "}
          <nav aria-label={"Company"} style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase"}}>
              {"Company"}
            </span>
            {" "}
            <DcLink href={"/"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Home"}
            </DcLink>
            {" "}
            <DcLink href={"/portfolio"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Portfolio"}
            </DcLink>
            {" "}
            <DcLink href={"/blog"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Blogs"}
            </DcLink>
            {" "}
            <DcLink href={"/contact"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Contact"}
            </DcLink>
            {" "}
          </nav>
          {" "}
          <nav aria-label={"Legal"} style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase"}}>
              {"Legal"}
            </span>
            {" "}
            <DcLink href={"/privacy"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Privacy Policy"}
            </DcLink>
            {" "}
            <DcLink href={"/terms"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Terms of Service"}
            </DcLink>
            {" "}
          </nav>
          {" "}
        </div>
        {" "}
        <nav aria-label={"Services"} style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase"}}>
            {"Services"}
          </span>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "12px 20px"}}>
            {" "}
            <DcLink href={"/services/21-day-mvp-sprint"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"21-Day MVP Sprint"}
            </DcLink>
            {" "}
            <DcLink href={"/services/mobile-app-development"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Mobile Apps"}
            </DcLink>
            {" "}
            <DcLink href={"/services/web-app-development"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Web Apps"}
            </DcLink>
            {" "}
            <DcLink href={"/services/ecommerce-development"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Ecommerce"}
            </DcLink>
            {" "}
            <DcLink href={"/services/ui-ux-design"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"UI/UX Design"}
            </DcLink>
            {" "}
            <DcLink href={"/services/ai-integration"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"AI Integration"}
            </DcLink>
            {" "}
            <DcLink href={"/services/content-creation"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Content Creation"}
            </DcLink>
            {" "}
            <DcLink href={"/services/it-consultation"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"IT Consultation"}
            </DcLink>
            {" "}
          </div>
          {" "}
        </nav>
        {" "}
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase"}}>
            {"Get in touch"}
          </span>
          {" "}
          <DcLink href={"mailto:hello@rispit.com"} style={{"fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
            {"[hello@rispit.com]"}
          </DcLink>
          {" "}
          <DcLink href={"/contact"} style={{"marginTop": "6px", "display": "flex", "alignItems": "center", "gap": "10px", "height": "54px", "padding": "0 14px 0 5px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            {" "}
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            {" "}
            <span style={{"flexGrow": "1"}}>
              {"Book a call with Siva"}
            </span>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
            {" "}
          </DcLink>
          {" "}
        </div>
        {" "}
        <div style={{"paddingTop": "18px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderTop": "1px solid #E3E5E9", "fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
          {" "}
          <span>
            {"© 2026 Rispit. All rights reserved."}
          </span>
          {" "}
          <span>
            {"Made in Jaffna with <3"}
          </span>
          {" "}
        </div>
        {" "}
        <div aria-hidden={"true"} style={{"marginTop": "4px", "paddingBottom": "22px", "display": "flex", "justifyContent": "center"}}>
          {" "}
          <span style={{"display": "block", "fontSize": "104px", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-0.05em", "color": "#ECEEF1"}}>
            {"Rispit"}
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
    </>
  );
};

export default function MobFooter(props) {
  return <Component {...props} />;
}
