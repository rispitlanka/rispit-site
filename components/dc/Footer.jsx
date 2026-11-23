'use client';
// AUTO-GENERATED from design/Footer.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
      <footer style={{"width": "100%", "boxSizing": "border-box", "padding": "24px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-footer">
      {" "}
      <div style={{"boxSizing": "border-box", "padding": "56px 56px 0", "display": "flex", "flexDirection": "column", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)", "overflow": "hidden"}}>
        {" "}
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "32px"}}>
          {" "}
          {" "}
          <div style={{"gridColumn": "span 3", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
            {" "}
            <DcLink href={"/"} aria-label={"Rispit home"} style={{"display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none"}}>
              {" "}
              <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block"}} />
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
                {" "}
                <span style={{"fontSize": "26px", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-0.02em", "color": "#C2323F"}}>
                  {"Rispit"}
                </span>
                {" "}
                <span style={{"fontSize": "9px", "fontWeight": "700", "lineHeight": "1", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#545A66"}}>
                  {"We do things"}
                </span>
                {" "}
              </div>
              {" "}
            </DcLink>
            {" "}
            <p style={{"margin": "0", "maxWidth": "320px", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"We help founders turn ideas into real products, designed, built and launched in 21 days."}
            </p>
            {" "}
            <div style={{"display": "flex", "gap": "8px"}}>
              {" "}
              <DcLink href={"#linkedin"} aria-label={"LinkedIn"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)"}}>
                {" "}
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"} />
                  <rect x={"2"} y={"9"} width={"4"} height={"12"} />
                  <circle cx={"4"} cy={"4"} r={"2"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
              <DcLink href={"#instagram"} aria-label={"Instagram"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)"}}>
                {" "}
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"5"} />
                  <circle cx={"12"} cy={"12"} r={"4"} />
                  <path d={"M17.5 6.5h.01"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
              <DcLink href={"#x"} aria-label={"X"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)"}}>
                {" "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M4 4l16 16M20 4L4 20"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
              <DcLink href={"mailto:hello@rispit.com"} aria-label={"Email"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)"}}>
                {" "}
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"2"} />
                  <path d={"M3 7l9 6 9-6"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <nav aria-label={"Company"} style={{"gridColumn": "span 2", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#14161A"}}>
              {"Company"}
            </span>
            {" "}
            <DcLink href={"/"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Home"}
            </DcLink>
            {" "}
            <DcLink href={"/portfolio"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Portfolio"}
            </DcLink>
            {" "}
            <DcLink href={"/blog"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Blogs"}
            </DcLink>
            {" "}
            <DcLink href={"/contact"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Contact"}
            </DcLink>
            {" "}
          </nav>
          {" "}
          {" "}
          <nav aria-label={"Services"} style={{"gridColumn": "span 4", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#14161A"}}>
              {"Services"}
            </span>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "14px 20px"}}>
              {" "}
              <DcLink href={"/services/21-day-mvp-sprint"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"21-Day MVP Sprint"}
              </DcLink>
              {" "}
              <DcLink href={"/services/mobile-app-development"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"Mobile Apps"}
              </DcLink>
              {" "}
              <DcLink href={"/services/web-app-development"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"Web App Development"}
              </DcLink>
              {" "}
              <DcLink href={"/services/ecommerce-development"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"Ecommerce"}
              </DcLink>
              {" "}
              <DcLink href={"/services/ui-ux-design"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"UI/UX Design"}
              </DcLink>
              {" "}
              <DcLink href={"/services/ai-integration"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"AI Integration"}
              </DcLink>
              {" "}
              <DcLink href={"/services/content-creation"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"Content Creation"}
              </DcLink>
              {" "}
              <DcLink href={"/services/it-consultation"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
                {"IT Consultation"}
              </DcLink>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
          {" "}
          <div style={{"gridColumn": "span 3", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#14161A"}}>
              {"Get in touch"}
            </span>
            {" "}
            <DcLink href={"mailto:hello@rispit.com"} style={{"fontSize": "15px", "fontWeight": "600", "textDecoration": "none"}}>
              {"[hello@rispit.com]"}
            </DcLink>
            {" "}
            <span style={{"fontSize": "15px", "fontWeight": "600", "color": "#545A66"}}>
              {"[Your phone number]"}
            </span>
            {" "}
            <DcLink href={"/contact"} style={{"marginTop": "6px", "alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "height": "46px", "padding": "0 18px", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 18px -8px rgba(194,50,63,0.65)"}}>
              {" "}
              <span>
                {"Book a 20-min call"}
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
        </div>
        {" "}
        {" "}
        <div style={{"marginTop": "48px", "padding": "20px 0", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "600", "color": "#545A66"}}>
          {" "}
          <span>
            {"© 2026 Rispit. All rights reserved. Made in Jaffna with <3 "}
          </span>
          {" "}
          <div style={{"display": "flex", "gap": "24px"}}>
            {" "}
            <DcLink href={"/privacy"} style={{"textDecoration": "none"}}>
              {"Privacy Policy"}
            </DcLink>
            {" "}
            <DcLink href={"/terms"} style={{"textDecoration": "none"}}>
              {"Terms of Service"}
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        <div aria-hidden={"true"} style={{"marginTop": "0", "paddingBottom": "44px", "display": "flex", "justifyContent": "center"}}>
          {" "}
          <span style={{"display": "block", "fontSize": "220px", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-0.05em", "color": "#ECEEF1"}}>
            {"Rispit"}
          </span>
          {" "}
        </div>
        {" "}
        {" "}
      </div>
      {" "}
    </footer>
    </>
  );
};

export default function Footer(props) {
  return <Component {...props} />;
}
