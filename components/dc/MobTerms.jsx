'use client';
// AUTO-GENERATED from design/MobTerms.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobterms">
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
              {"Terms of Service"}
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
            {"Terms of Service"}
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"The terms that apply when you use our website and work with us on a project."}
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
                {"13"}
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
              {"About these terms"}
            </DcLink>
            <DcLink href={"#m2"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"02"}
              </span>
              {"Our services"}
            </DcLink>
            <DcLink href={"#m3"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"03"}
              </span>
              {"Consultation calls"}
            </DcLink>
            <DcLink href={"#m4"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"04"}
              </span>
              {"Proposals and project agreements"}
            </DcLink>
            <DcLink href={"#m5"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"05"}
              </span>
              {"Fees and payment"}
            </DcLink>
            <DcLink href={"#m6"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"06"}
              </span>
              {"Your responsibilities"}
            </DcLink>
            <DcLink href={"#m7"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"07"}
              </span>
              {"Intellectual property"}
            </DcLink>
            <DcLink href={"#m8"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"08"}
              </span>
              {"Confidentiality"}
            </DcLink>
            <DcLink href={"#m9"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"09"}
              </span>
              {"Warranties and liability"}
            </DcLink>
            <DcLink href={"#m10"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"10"}
              </span>
              {"Ending a project"}
            </DcLink>
            <DcLink href={"#m11"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"11"}
              </span>
              {"Governing law"}
            </DcLink>
            <DcLink href={"#m12"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"12"}
              </span>
              {"Changes to these terms"}
            </DcLink>
            <DcLink href={"#m13"} style={{"display": "flex", "gap": "10px", "padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              <span style={{"width": "22px", "fontWeight": "800", "color": "#A0A5AF"}}>
                {"13"}
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
              {"About these terms"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"These Terms of Service (“Terms”) apply to your use of the Rispit website and to the services we provide. By using our website or working with us, you agree to these Terms. If you do not agree, please do not use our website or services."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"“Rispit”, “we”, “us” and “our” mean [Company legal name], registered at [Company address]. “You” and “client” mean the person or business using our website or services."}
          </p>
        </article>
        <article id={"m2"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"02"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Our services"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We design and build digital products, including MVPs, web apps, mobile apps and AI features. The exact scope, timeline, deliverables and price of each project are set out in a written proposal or project agreement."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"If anything in a signed project agreement differs from these Terms, the project agreement applies."}
          </p>
        </article>
        <article id={"m3"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"03"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Consultation calls"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Consultation calls are a chance to talk through your idea. Anything we share on a call is general guidance, not a binding commitment. Work only starts once a proposal has been accepted in writing."}
          </p>
        </article>
        <article id={"m4"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"04"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Proposals and project agreements"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Each project begins with a proposal that describes what we will deliver. Once you accept it, it becomes the project agreement between us."}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Changes to the agreed scope may affect the timeline and price, and will be agreed in writing before we start them."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Our 21-day timelines depend on timely feedback, content and approvals from you."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Delivery dates may move if we are waiting on information or access from you."}
              </span>
            </li>
          </ul>
        </article>
        <article id={"m5"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"05"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Fees and payment"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Fees, payment schedules and accepted payment methods are set out in each proposal. Unless agreed otherwise, invoices are due within [14 days] of the invoice date."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We may pause work on a project if an invoice is overdue, and resume once payment is received."}
          </p>
        </article>
        <article id={"m6"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"06"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Your responsibilities"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"To help us deliver on time, you agree to:"}
          </p>
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Give us accurate information and the content, access and accounts we need."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Reply to questions and review work within the agreed timeframes."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
              <span style={{"width": "6px", "height": "6px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "6px", "background": "#C2323F"}} />
              <span>
                {"Make sure any material you give us does not break anyone else’s rights or any law."}
              </span>
            </li>
          </ul>
        </article>
        <article id={"m7"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"07"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Intellectual property"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Once all fees for a project have been paid in full, you own the final designs and code we create specifically for you, unless the project agreement says otherwise."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We keep ownership of our own tools, templates, know-how and any third-party or open-source components, which are licensed to you as needed to use the product. We may show the project in our portfolio unless you ask us not to in writing."}
          </p>
        </article>
        <article id={"m8"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"08"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Confidentiality"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We keep your ideas, business information and project details confidential, and only share them with team members or partners who need them to deliver your project. We are happy to sign a separate non-disclosure agreement if you need one."}
          </p>
        </article>
        <article id={"m9"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"09"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Warranties and liability"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We will carry out our services with reasonable care and skill. Our website and its content are provided “as is”, and we do not guarantee that they will always be available or error-free."}
          </p>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"To the extent allowed by law, our total liability for any claim related to a project is limited to the fees you paid for that project. We are not responsible for indirect losses, such as lost profits or lost data."}
          </p>
        </article>
        <article id={"m10"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"10"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Ending a project"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"Either of us may end a project by giving written notice as described in the project agreement. You will pay for the work completed up to the end date, and we will hand over the work that has been paid for."}
          </p>
        </article>
        <article id={"m11"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"11"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Governing law"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"These Terms are governed by the laws of [Country]. Any disputes will be handled by the courts of [Country / City], unless the law where you live gives you other rights."}
          </p>
        </article>
        <article id={"m12"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"12"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Changes to these terms"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"We may update these Terms from time to time. The latest version will always be on this page, with the “Last updated” date at the top. Ongoing projects continue under the terms that applied when the project agreement was signed."}
          </p>
        </article>
        <article id={"m13"} style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "20px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#A3242F"}}>
              {"13"}
            </span>
            <h2 style={{"margin": "0", "fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Contact us"}
            </h2>
          </span>
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.7", "color": "#3B3F47", "fontWeight": "500"}}>
            {"If you have any questions about these Terms, email us at [hello@rispit.com] or write to us at [Company address]."}
          </p>
        </article>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"fontSize": "18px", "fontWeight": "800"}}>
            {"Questions about this page?"}
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

export default function MobTerms(props) {
  return <Component {...props} />;
}
