'use client';
// AUTO-GENERATED from design/MobPrivacy.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobprivacy">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={""} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <nav aria-label={"Breadcrumb"} style={{"display": "flex", "alignItems": "center", "flexWrap": "wrap", "gap": "6px", "fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
            <DcLink href={"/"} style={{"textDecoration": "none"}}>
              {"Home"}
            </DcLink>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <span style={{"color": "#14161A"}}>
              {"Privacy Policy"}
            </span>
          </nav>
          {" "}
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z"} />
            </svg>
            <span>
              {"Legal"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "38px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Privacy Policy"}
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"How we collect, use and protect your personal information when you use our website or work with us."}
          </p>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "8px"}}>
            <div style={{"padding": "12px 14px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "10px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Last updated"}
              </span>
              <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                {"[Date]"}
              </span>
            </div>
            <div style={{"padding": "12px 14px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "10px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Sections"}
              </span>
              <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                {"11"}
              </span>
            </div>
          </div>
        </div>
        <details style={{"borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "padding": "0 16px"}}>
          <summary style={{"height": "54px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "fontSize": "14px", "fontWeight": "800", "cursor": "pointer", "listStyle": "none"}}>
            {"Jump to a section"}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M6 9l6 6 6-6"} />
            </svg>
          </summary>
          <div style={{"display": "flex", "flexDirection": "column", "paddingBottom": "12px"}}>
            <DcLink href={"#m1"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"01"}
              </span>
              {"Who we are"}
            </DcLink>
            <DcLink href={"#m2"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"02"}
              </span>
              {"Information we collect"}
            </DcLink>
            <DcLink href={"#m3"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"03"}
              </span>
              {"How we use your information"}
            </DcLink>
            <DcLink href={"#m4"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"04"}
              </span>
              {"Cookies and analytics"}
            </DcLink>
            <DcLink href={"#m5"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"05"}
              </span>
              {"Sharing your information"}
            </DcLink>
            <DcLink href={"#m6"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"06"}
              </span>
              {"How long we keep your information"}
            </DcLink>
            <DcLink href={"#m7"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"07"}
              </span>
              {"Your rights"}
            </DcLink>
            <DcLink href={"#m8"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"08"}
              </span>
              {"Keeping your information safe"}
            </DcLink>
            <DcLink href={"#m9"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"09"}
              </span>
              {"International transfers"}
            </DcLink>
            <DcLink href={"#m10"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"10"}
              </span>
              {"Changes to this policy"}
            </DcLink>
            <DcLink href={"#m11"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"11"}
              </span>
              {"Contact us"}
            </DcLink>
          </div>
        </details>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "24px 16px 24px", "display": "flex", "flexDirection": "column", "gap": "10px", "background": "transparent"}}>
        <article id={"m1"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"01"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Who we are"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Rispit (“we”, “us”, “our”) is a product studio that designs and builds digital products for founders and businesses. This policy explains how we collect, use and protect your personal information when you visit our website, book a call or work with us."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Rispit is registered at [Company address]. For any privacy question, contact us at [hello@rispit.com]."}
          </p>
        </article>
        <article id={"m2"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"02"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Information we collect"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We only collect the information we need to respond to you and to run our services."}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Details you give us, such as your name, email address, phone number, company and the project details you share in forms or on calls."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Booking details when you schedule a consultation call, such as the date, time and time zone you choose."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Technical information collected automatically, such as your browser type, device, pages visited and approximate location based on your IP address."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Newsletter information if you subscribe, such as your email address and whether you open our emails."}
              </span>
            </li>
          </ul>
        </article>
        <article id={"m3"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"03"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"How we use your information"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We use your information to:"}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Reply to your enquiries and hold the consultation calls you book."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Prepare proposals and deliver the projects we agree on."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Send you our newsletter if you have subscribed. You can unsubscribe at any time."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Understand how our website is used so we can improve it."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Meet our legal, tax and accounting obligations."}
              </span>
            </li>
          </ul>
        </article>
        <article id={"m4"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"04"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Cookies and analytics"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Our website uses a small number of cookies and similar technologies to keep the site working and to understand how visitors use it. Analytics data is collected in an aggregated form wherever possible."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"You can control or delete cookies through your browser settings. Blocking some cookies may affect how parts of the website work."}
          </p>
        </article>
        <article id={"m5"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"05"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Sharing your information"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We never sell your personal information. We only share it with trusted service providers who help us run our business, such as hosting, email, scheduling, analytics and payment providers, and only as much as they need to provide their service."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We may also share information when the law requires it, or to protect our rights, our clients or the public."}
          </p>
        </article>
        <article id={"m6"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"06"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"How long we keep your information"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We keep personal information only for as long as we need it for the purposes described in this policy, or as long as the law requires. Enquiries that do not lead to a project are usually deleted within [12 months]. Project records are kept for as long as needed for our legal and accounting obligations."}
          </p>
        </article>
        <article id={"m7"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"07"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Your rights"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Depending on where you live, you may have the right to:"}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Access the personal information we hold about you."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Ask us to correct information that is wrong or incomplete."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Ask us to delete your information."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Object to or limit how we use your information."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Withdraw your consent at any time, for example by unsubscribing from emails."}
              </span>
            </li>
          </ul>
        </article>
        <article id={"m8"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"08"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Keeping your information safe"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We use reasonable technical and organisational measures to protect your information, including secure hosting, encrypted connections and limited access for our team. No method of sending or storing data online is completely secure, but we work hard to keep your information protected."}
          </p>
        </article>
        <article id={"m9"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"09"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"International transfers"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Some of our service providers may store or process information outside your country. When this happens, we take steps to make sure your information stays protected to the standard described in this policy."}
          </p>
        </article>
        <article id={"m10"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"10"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Changes to this policy"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We may update this policy from time to time. When we do, we will change the “Last updated” date at the top of this page. If the changes are significant, we will let you know by email or with a notice on our website."}
          </p>
        </article>
        <article id={"m11"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"11"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Contact us"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"If you have any questions about this policy or want to use any of your rights, email us at [hello@rispit.com] or write to us at [Company address]. We aim to reply within [5 working days]."}
          </p>
        </article>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"fontSize": "18px", "fontWeight": "800"}}>
            {"Questions about this policy?"}
          </span>
          <span style={{"fontSize": "14px", "fontWeight": "500", "color": "#545A66"}}>
            {"Email us at [hello@rispit.com] and we'll get back to you."}
          </span>
          <DcLink href={"mailto:hello@rispit.com"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"Email us"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 5h18v14H3Z M3 7l9 6 9-6"} />
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

export default function MobPrivacy(props) {
  return <Component {...props} />;
}
