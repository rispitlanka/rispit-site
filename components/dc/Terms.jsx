'use client';
// AUTO-GENERATED from design/Terms.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Footer from './Footer';

class Component extends DCLogic {
  renderVals() {
    const raw = [{"title": "About these terms", "paras": ["These Terms of Service (“Terms”) apply to your use of the Rispit website and to the services we provide. By using our website or working with us, you agree to these Terms. If you do not agree, please do not use our website or services.", "“Rispit”, “we”, “us” and “our” mean [Company legal name], registered at [Company address]. “You” and “client” mean the person or business using our website or services."]}, {"title": "Our services", "paras": ["We design and build digital products, including MVPs, web apps, mobile apps and AI features. The exact scope, timeline, deliverables and price of each project are set out in a written proposal or project agreement.", "If anything in a signed project agreement differs from these Terms, the project agreement applies."]}, {"title": "Consultation calls", "paras": ["Consultation calls are a chance to talk through your idea. Anything we share on a call is general guidance, not a binding commitment. Work only starts once a proposal has been accepted in writing."]}, {"title": "Proposals and project agreements", "paras": ["Each project begins with a proposal that describes what we will deliver. Once you accept it, it becomes the project agreement between us."], "bullets": ["Changes to the agreed scope may affect the timeline and price, and will be agreed in writing before we start them.", "Our 21-day timelines depend on timely feedback, content and approvals from you.", "Delivery dates may move if we are waiting on information or access from you."]}, {"title": "Fees and payment", "paras": ["Fees, payment schedules and accepted payment methods are set out in each proposal. Unless agreed otherwise, invoices are due within [14 days] of the invoice date.", "We may pause work on a project if an invoice is overdue, and resume once payment is received."]}, {"title": "Your responsibilities", "paras": ["To help us deliver on time, you agree to:"], "bullets": ["Give us accurate information and the content, access and accounts we need.", "Reply to questions and review work within the agreed timeframes.", "Make sure any material you give us does not break anyone else’s rights or any law."]}, {"title": "Intellectual property", "paras": ["Once all fees for a project have been paid in full, you own the final designs and code we create specifically for you, unless the project agreement says otherwise.", "We keep ownership of our own tools, templates, know-how and any third-party or open-source components, which are licensed to you as needed to use the product. We may show the project in our portfolio unless you ask us not to in writing."]}, {"title": "Confidentiality", "paras": ["We keep your ideas, business information and project details confidential, and only share them with team members or partners who need them to deliver your project. We are happy to sign a separate non-disclosure agreement if you need one."]}, {"title": "Warranties and liability", "paras": ["We will carry out our services with reasonable care and skill. Our website and its content are provided “as is”, and we do not guarantee that they will always be available or error-free.", "To the extent allowed by law, our total liability for any claim related to a project is limited to the fees you paid for that project. We are not responsible for indirect losses, such as lost profits or lost data."]}, {"title": "Ending a project", "paras": ["Either of us may end a project by giving written notice as described in the project agreement. You will pay for the work completed up to the end date, and we will hand over the work that has been paid for."]}, {"title": "Governing law", "paras": ["These Terms are governed by the laws of [Country]. Any disputes will be handled by the courts of [Country / City], unless the law where you live gives you other rights."]}, {"title": "Changes to these terms", "paras": ["We may update these Terms from time to time. The latest version will always be on this page, with the “Last updated” date at the top. Ongoing projects continue under the terms that applied when the project agreement was signed."]}, {"title": "Contact us", "paras": ["If you have any questions about these Terms, email us at [hello@rispit.com] or write to us at [Company address]."]}];
    const sections = raw.map((s, i) => ({
      ...s,
      n: String(i + 1).padStart(2, '0'),
      id: 's' + (i + 1),
      paras: s.paras || [],
      bullets: s.bullets || [],
      hasBullets: !!(s.bullets && s.bullets.length)
    }));
    const toc = sections.map((s, i) => ({
      n: s.n, title: s.title, href: '#' + s.id,
      bg: i === 0 ? '#FFFFFF' : 'transparent',
      shadow: i === 0 ? '0 1px 2px rgba(20,22,26,0.06)' : 'none',
      weight: i === 0 ? '700' : '600',
      fg: i === 0 ? '#C2323F' : '#545A66'
    }));
    const words = raw.map((s) => (s.paras || []).concat(s.bullets || []).join(' ')).join(' ').split(/\s+/).length;
    return { sections, toc, readTime: Math.max(1, Math.round(words / 220)) + ' min read' };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-terms">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={""} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "380px", "boxSizing": "border-box", "padding": "16px 24px 24px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "44px 48px", "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px", "maxWidth": "820px"}}>
            {" "}
            <nav aria-label={"Breadcrumb"} style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
              {" "}
              <DcLink href={"/"} style={{"textDecoration": "none"}}>
                {"Home"}
              </DcLink>
              {" "}
              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 6l6 6-6 6"} />
              </svg>
              {" "}
              <span style={{"color": "#14161A"}}>
                {"Terms of Service"}
              </span>
              {" "}
            </nav>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 16px 8px 12px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z"} />
              </svg>
              {" "}
              <span>
                {"Legal"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "56px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Terms of Service"}
            </h1>
            {" "}
            <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"The terms that apply when you use our website and work with us on a project."}
            </p>
            {" "}
          </div>
          {" "}
          <div style={{"flexShrink": "0", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "padding": "14px 18px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              {" "}
              <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Last updated"}
              </span>
              {" "}
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {"[Date]"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "padding": "14px 18px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              {" "}
              <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Reading time"}
              </span>
              {" "}
              <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                {dcStr(dcGet(S, "readTime"))}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 24px 72px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "32px", "alignItems": "start"}}>
        {" "}
        <aside style={{"gridColumn": "span 3", "position": "sticky", "top": "120px", "boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "4px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)"}}>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66", "margin": "0 0 8px 10px"}}>
            {"Contents"}
          </span>
          {" "}
          {dcList(dcGet(S, "toc")).map((__it, __i) => { const S5 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={dcGet(S5, "t.href")} style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": `${dcStr(dcGet(S5, "t.bg"))}`, "boxShadow": `${dcStr(dcGet(S5, "t.shadow"))}`, "fontSize": "14px", "fontWeight": `${dcStr(dcGet(S5, "t.weight"))}`, "color": `${dcStr(dcGet(S5, "t.fg"))}`, "textDecoration": "none"}}>
                {" "}
                <span style={{"width": "22px", "fontSize": "12px", "fontWeight": "800", "color": "#A0A5AF"}}>
                  {dcStr(dcGet(S5, "t.n"))}
                </span>
                {" "}
                <span>
                  {dcStr(dcGet(S5, "t.title"))}
                </span>
                {" "}
              </DcLink>
              {" "}
            </React.Fragment>); })}
          {" "}
        </aside>
        {" "}
        <div style={{"gridColumn": "span 9", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
          {" "}
          {dcList(dcGet(S, "sections")).map((__it, __i) => { const S5 = { ...S, "s": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <article id={dcGet(S5, "s.id")} style={{"boxSizing": "border-box", "padding": "32px 36px", "display": "grid", "gridTemplateColumns": "64px minmax(0, 1fr)", "gap": "20px", "borderRadius": "22px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.04)"}}>
                {" "}
                <span style={{"width": "48px", "height": "48px", "borderRadius": "14px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#A3242F"}}>
                  {dcStr(dcGet(S5, "s.n"))}
                </span>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
                  {" "}
                  <h2 style={{"margin": "8px 0 0", "fontSize": "24px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                    {dcStr(dcGet(S5, "s.title"))}
                  </h2>
                  {" "}
                  {dcList(dcGet(S5, "s.paras")).map((__it, __i) => { const S9 = { ...S5, "p": __it, $index: __i }; return (<React.Fragment key={__i}>
                      {" "}
                      <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.75", "color": "#3B3F47", "fontWeight": "500"}}>
                        {dcStr(dcGet(S9, "p"))}
                      </p>
                      {" "}
                    </React.Fragment>); })}
                  {" "}
                  {dcTruthy(dcGet(S5, "s.hasBullets")) ? (<>
                    {" "}
                    <ul style={{"margin": "4px 0 0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
                      {dcList(dcGet(S5, "s.bullets")).map((__it, __i) => { const S11 = { ...S5, "b": __it, $index: __i }; return (<React.Fragment key={__i}>
                          {" "}
                          <li style={{"display": "flex", "alignItems": "flex-start", "gap": "12px", "fontSize": "16px", "lineHeight": "1.6", "color": "#3B3F47", "fontWeight": "500"}}>
                            {" "}
                            <span style={{"width": "7px", "height": "7px", "flexShrink": "0", "marginTop": "10px", "borderRadius": "7px", "background": "#C2323F"}} />
                            {" "}
                            <span>
                              {dcStr(dcGet(S11, "b"))}
                            </span>
                            {" "}
                          </li>
                          {" "}
                        </React.Fragment>); })}
                    </ul>
                    {" "}
                  </>) : null}
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </React.Fragment>); })}
          {" "}
          {" "}
          <div style={{"marginTop": "10px", "boxSizing": "border-box", "padding": "28px 32px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              {" "}
              <span style={{"fontSize": "19px", "fontWeight": "800"}}>
                {"Questions about this page?"}
              </span>
              {" "}
              <span style={{"fontSize": "15px", "fontWeight": "500", "color": "#545A66"}}>
                {"Email us at [hello@rispit.com] and we'll get back to you."}
              </span>
              {" "}
            </div>
            {" "}
            <DcLink href={"mailto:hello@rispit.com"} style={{"flexShrink": "0", "display": "flex", "alignItems": "center", "gap": "8px", "height": "50px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
              {" "}
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"2"} />
                <path d={"M3 7l9 6 9-6"} />
              </svg>
              {" "}
              <span>
                {"Email us"}
              </span>
              {" "}
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <DC_Footer  />
      {" "}
    </div>
    </>
  );
};

export default function Terms(props) {
  return <Component {...props} />;
}
