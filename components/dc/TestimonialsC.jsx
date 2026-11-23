'use client';
// AUTO-GENERATED from design/TestimonialsC.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    return {
      items: [
        {
          product: 'Kestrel Health', type: 'Mobile app', length: '1:24', href: '#case-kestrel',
          icon: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2',
          role: '[Founder, Kestrel Health]',
          quote: 'From a rough idea to patients booking real appointments in three weeks.'
        },
        {
          product: 'Lumora Analytics', type: 'Web app', length: '0:58', href: '#case-lumora',
          icon: 'M4 20V10 M10 20V4 M16 20v-7 M22 20H2',
          role: '[CEO, Lumora]',
          quote: 'Daily updates, no surprises, and a dashboard that looked polished from day one.'
        },
        {
          product: 'Orbitly Assist', type: 'AI assistant', length: '1:10', href: '#case-orbitly',
          icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z',
          role: '[Product Lead, Orbitly]',
          quote: 'They built an assistant our support team actually trusts.'
        },
        {
          product: 'Fernway', type: 'Web app', length: '1:02', href: '#case-fernway',
          icon: 'M3 4h18v4H3Z M3 10h12v4H3Z M3 16h6v4H3Z',
          role: '[Co-founder, Fernway]',
          quote: 'We launched on time and kept building on the same code after.'
        }
      ]
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section style={{"width": "100%", "height": "860px", "boxSizing": "border-box", "padding": "96px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "48px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-testimonialsc">
      {" "}
      {" "}
      <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "padding": "0 24px"}}>
        {" "}
        <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px", "maxWidth": "760px"}}>
          {" "}
          <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
            {" "}
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            {" "}
            <span>
              {"Testimonials"}
            </span>
            {" "}
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "52px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Hear it from "}
            <span style={{"color": "#C2323F"}}>
              {"the founders."}
            </span>
          </h2>
          {" "}
        </div>
        {" "}
        <p style={{"margin": "0", "maxWidth": "380px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
          {"Short video stories from the people behind the products we've built. Tap a card to watch."}
        </p>
        {" "}
      </div>
      {" "}
      {" "}
      <div style={{"display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "16px"}}>
        {" "}
        {dcList(dcGet(S, "items")).map((__it, __i) => { const S4 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
            {" "}
            <DcLink href={dcGet(S4, "t.href")} aria-label={`Watch ${dcStr(dcGet(S4, "t.product"))} story`} style={{"position": "relative", "height": "560px", "display": "block", "borderRadius": "28px", "overflow": "hidden", "background": "#2A2D33", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 20px 40px -20px rgba(20,22,26,0.45)", "textDecoration": "none"}}>
              {" "}
              {" "}
              <div style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "paddingBottom": "140px"}}>
                {" "}
                <svg width={"110"} height={"110"} viewBox={"0 0 24 24"} fill={"#454952"} aria-hidden={"true"}>
                  <circle cx={"12"} cy={"8"} r={"4.2"} />
                  <path d={"M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7Z"} />
                </svg>
                {" "}
                <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#8A8F9A"}}>
                  {"Client photo / video"}
                </span>
                {" "}
              </div>
              {" "}
              {" "}
              <div style={{"position": "absolute", "top": "14px", "left": "14px", "right": "14px", "display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "6px 12px 6px 6px", "borderRadius": "999px", "background": "rgba(255,255,255,0.94)"}}>
                  {" "}
                  <span style={{"width": "28px", "height": "28px", "borderRadius": "9px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S4, "t.icon")} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <span style={{"fontSize": "13px", "fontWeight": "800", "color": "#14161A"}}>
                    {dcStr(dcGet(S4, "t.product"))}
                  </span>
                  {" "}
                </span>
                {" "}
                <span style={{"padding": "6px 10px", "borderRadius": "999px", "background": "rgba(20,22,26,0.55)", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
                  {dcStr(dcGet(S4, "t.length"))}
                </span>
                {" "}
              </div>
              {" "}
              {" "}
              <span style={{"position": "absolute", "top": "186px", "left": "50%", "marginLeft": "-32px", "width": "64px", "height": "64px", "borderRadius": "64px", "background": "rgba(255,255,255,0.95)", "boxShadow": "0 10px 24px -8px rgba(0,0,0,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                {" "}
                <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
                  <path d={"M8 5.5v13l11-6.5Z"} />
                </svg>
                {" "}
              </span>
              {" "}
              {" "}
              <div style={{"position": "absolute", "left": "0", "right": "0", "bottom": "0", "boxSizing": "border-box", "padding": "64px 22px 22px", "display": "flex", "flexDirection": "column", "gap": "14px", "background": "linear-gradient(180deg, rgba(20,22,26,0) 0%, rgba(20,22,26,0.88) 38%, #14161A 100%)"}}>
                {" "}
                <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "600", "color": "#FFFFFF"}}>
                  {"“"}{dcStr(dcGet(S4, "t.quote"))}{"”"}
                </p>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "10px", "paddingTop": "14px", "borderTop": "1px solid rgba(255,255,255,0.18)"}}>
                  {" "}
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                    {" "}
                    <span style={{"fontSize": "15px", "fontWeight": "800", "color": "#FFFFFF"}}>
                      {"[Client Name]"}
                    </span>
                    {" "}
                    <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#C9CCD3"}}>
                      {dcStr(dcGet(S4, "t.role"))}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "rgba(255,255,255,0.12)", "border": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
                    {dcStr(dcGet(S4, "t.type"))}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </DcLink>
            {" "}
          </React.Fragment>); })}
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
};

export default function TestimonialsC(props) {
  return <Component {...props} />;
}
