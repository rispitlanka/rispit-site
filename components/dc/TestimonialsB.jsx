'use client';
// AUTO-GENERATED from design/TestimonialsB.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }
  renderVals() {
    const data = [
      {
        product: 'Kestrel Health', type: 'Mobile app', href: '#case-kestrel',
        icon: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2',
        role: '[Founder, Kestrel Health]',
        quote: 'We went from a rough idea to patients booking real appointments in three weeks. Rispit kept us focused on what mattered for the first version.'
      },
      {
        product: 'Lumora Analytics', type: 'Web app', href: '#case-lumora',
        icon: 'M4 20V10 M10 20V4 M16 20v-7 M22 20H2',
        role: '[CEO, Lumora]',
        quote: 'Clear updates every day and no surprises. We always knew what was being built and when, and the dashboard looked polished from day one.'
      },
      {
        product: 'Orbitly Assist', type: 'AI assistant', href: '#case-orbitly',
        icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z',
        role: '[Product Lead, Orbitly]',
        quote: 'They understood our customers quickly and built an assistant our support team actually trusts. Easy to keep building on after launch.'
      }
    ];
    const a = this.state.active;
    const tabs = data.map((d, i) => {
      const on = i === a;
      return {
        product: d.product, icon: d.icon,
        selected: String(on),
        bg: on ? '#FFFFFF' : 'transparent',
        fg: on ? '#14161A' : '#545A66',
        shadow: on ? '0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.25)' : 'none',
        iconBg: on ? '#C2323F' : '#FFFFFF',
        iconInk: on ? '#FFFFFF' : '#545A66',
        pick: () => this.setState({ active: i })
      };
    });
    return { tabs, current: data[a] };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section style={{"width": "100%", "height": "860px", "boxSizing": "border-box", "padding": "96px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "48px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-testimonialsb">
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
            {"Founders who launched "}
            <span style={{"color": "#C2323F"}}>
              {"with Rispit."}
            </span>
          </h2>
          {" "}
        </div>
        {" "}
        <p style={{"margin": "0", "maxWidth": "380px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
          {"Pick a product to hear from the founder behind it."}
        </p>
        {" "}
      </div>
      {" "}
      {" "}
      <div style={{"flexGrow": "1", "boxSizing": "border-box", "padding": "14px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "borderRadius": "32px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 5", "position": "relative", "borderRadius": "24px", "background": "#E9EBEF", "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px"}}>
          {" "}
          <svg width={"120"} height={"120"} viewBox={"0 0 24 24"} fill={"#C9CCD3"} aria-hidden={"true"}>
            <circle cx={"12"} cy={"8"} r={"4.2"} />
            <path d={"M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7Z"} />
          </svg>
          {" "}
          <span style={{"fontSize": "14px", "fontWeight": "700", "color": "#6B717D"}}>
            {"Client photo"}
          </span>
          {" "}
          <div style={{"position": "absolute", "left": "18px", "top": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 14px 8px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.94)", "boxShadow": "0 8px 20px -10px rgba(20,22,26,0.35)"}}>
            {" "}
            <span style={{"width": "28px", "height": "28px", "borderRadius": "28px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              {" "}
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {" "}
            </span>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700"}}>
              {"Launched in 21 days"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 7", "boxSizing": "border-box", "padding": "26px 26px 26px 0", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "24px"}}>
          {" "}
          {" "}
          <div role={"tablist"} aria-label={"Choose a product"} style={{"display": "flex", "gap": "8px", "padding": "6px", "alignSelf": "flex-start", "borderRadius": "18px", "background": "#EEF0F3", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.08)"}}>
            {" "}
            {dcList(dcGet(S, "tabs")).map((__it, __i) => { const S6 = { ...S, "tab": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <button type={"button"} role={"tab"} aria-selected={dcGet(S6, "tab.selected")} onClick={dcGet(S6, "tab.pick")} style={{"height": "48px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 16px 0 8px", "border": "none", "borderRadius": "13px", "background": `${dcStr(dcGet(S6, "tab.bg"))}`, "boxShadow": `${dcStr(dcGet(S6, "tab.shadow"))}`, "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": `${dcStr(dcGet(S6, "tab.fg"))}`, "cursor": "pointer"}}>
                  {" "}
                  <span style={{"width": "32px", "height": "32px", "borderRadius": "10px", "background": `${dcStr(dcGet(S6, "tab.iconBg"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S6, "tab.iconInk")} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S6, "tab.icon")} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <span>
                    {dcStr(dcGet(S6, "tab.product"))}
                  </span>
                  {" "}
                </button>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
            {" "}
            <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
              <path d={"M4 18v-5.5C4 8.4 6.2 6 10 5.5V8c-2 .4-3 1.7-3 4h3v6Zm10 0v-5.5c0-4.1 2.2-6.5 6-7V8c-2 .4-3 1.7-3 4h3v6Z"} />
            </svg>
            {" "}
            <blockquote style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.38", "fontWeight": "700", "letterSpacing": "-0.02em"}}>
              {dcStr(dcGet(S, "current.quote"))}
            </blockquote>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              {" "}
              <span style={{"fontSize": "18px", "fontWeight": "800"}}>
                {"[Client Name]"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "fontWeight": "600", "color": "#545A66"}}>
                {dcStr(dcGet(S, "current.role"))}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "14px 14px 14px 18px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 10px 24px -16px rgba(20,22,26,0.2)"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
              {" "}
              <span style={{"width": "44px", "height": "44px", "borderRadius": "13px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                {" "}
                <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={dcGet(S, "current.icon")} />
                </svg>
                {" "}
              </span>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                {" "}
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                  {"Product we built"}
                </span>
                {" "}
                <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                  {dcStr(dcGet(S, "current.product"))}{" "}
                  <span style={{"fontWeight": "600", "color": "#545A66"}}>
                    {"· "}{dcStr(dcGet(S, "current.type"))}
                  </span>
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <DcLink href={dcGet(S, "current.href")} style={{"display": "flex", "alignItems": "center", "gap": "8px", "height": "46px", "padding": "0 18px", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 18px -8px rgba(194,50,63,0.65)"}}>
              {" "}
              <span>
                {"View case study"}
              </span>
              {" "}
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M7 17L17 7M8 7h9v9"} />
              </svg>
              {" "}
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
};

export default function TestimonialsB(props) {
  return <Component {...props} />;
}
