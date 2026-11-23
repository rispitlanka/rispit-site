'use client';
// AUTO-GENERATED from design/Privacy.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Footer from './Footer';

class Component extends DCLogic {
  renderVals() {
    const raw = [{"title": "Who we are", "paras": ["Rispit (“we”, “us”, “our”) is a product studio that designs and builds digital products for founders and businesses. This policy explains how we collect, use and protect your personal information when you visit our website, book a call or work with us.", "Rispit is registered at [Company address]. For any privacy question, contact us at [hello@rispit.com]."]}, {"title": "Information we collect", "paras": ["We only collect the information we need to respond to you and to run our services."], "bullets": ["Details you give us, such as your name, email address, phone number, company and the project details you share in forms or on calls.", "Booking details when you schedule a consultation call, such as the date, time and time zone you choose.", "Technical information collected automatically, such as your browser type, device, pages visited and approximate location based on your IP address.", "Newsletter information if you subscribe, such as your email address and whether you open our emails."]}, {"title": "How we use your information", "paras": ["We use your information to:"], "bullets": ["Reply to your enquiries and hold the consultation calls you book.", "Prepare proposals and deliver the projects we agree on.", "Send you our newsletter if you have subscribed. You can unsubscribe at any time.", "Understand how our website is used so we can improve it.", "Meet our legal, tax and accounting obligations."]}, {"title": "Cookies and analytics", "paras": ["Our website uses a small number of cookies and similar technologies to keep the site working and to understand how visitors use it. Analytics data is collected in an aggregated form wherever possible.", "You can control or delete cookies through your browser settings. Blocking some cookies may affect how parts of the website work."]}, {"title": "Sharing your information", "paras": ["We never sell your personal information. We only share it with trusted service providers who help us run our business, such as hosting, email, scheduling, analytics and payment providers, and only as much as they need to provide their service.", "We may also share information when the law requires it, or to protect our rights, our clients or the public."]}, {"title": "How long we keep your information", "paras": ["We keep personal information only for as long as we need it for the purposes described in this policy, or as long as the law requires. Enquiries that do not lead to a project are usually deleted within [12 months]. Project records are kept for as long as needed for our legal and accounting obligations."]}, {"title": "Your rights", "paras": ["Depending on where you live, you may have the right to:"], "bullets": ["Access the personal information we hold about you.", "Ask us to correct information that is wrong or incomplete.", "Ask us to delete your information.", "Object to or limit how we use your information.", "Withdraw your consent at any time, for example by unsubscribing from emails."], "after": []}, {"title": "Keeping your information safe", "paras": ["We use reasonable technical and organisational measures to protect your information, including secure hosting, encrypted connections and limited access for our team. No method of sending or storing data online is completely secure, but we work hard to keep your information protected."]}, {"title": "International transfers", "paras": ["Some of our service providers may store or process information outside your country. When this happens, we take steps to make sure your information stays protected to the standard described in this policy."]}, {"title": "Changes to this policy", "paras": ["We may update this policy from time to time. When we do, we will change the “Last updated” date at the top of this page. If the changes are significant, we will let you know by email or with a notice on our website."]}, {"title": "Contact us", "paras": ["If you have any questions about this policy or want to use any of your rights, email us at [hello@rispit.com] or write to us at [Company address]. We aim to reply within [5 working days]."]}];
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
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-privacy">
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
                {"Privacy Policy"}
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
              {"Privacy Policy"}
            </h1>
            {" "}
            <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"How we collect, use and protect your personal information when you use our website or work with us."}
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
                {"Questions about this policy?"}
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

export default function Privacy(props) {
  return <Component {...props} />;
}
