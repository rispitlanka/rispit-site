'use client';
// AUTO-GENERATED from design/NotFound.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Footer from './Footer';

class Component extends DCLogic {
  renderVals() {
    return {
      links: [
        { title: 'Services', text: 'What we can build for you', href: 'ServiceMVP.dc.html', icon: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z' },
        { title: 'Portfolio', text: 'Products we’ve launched', href: 'Portfolio.dc.html', icon: 'M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z' },
        { title: 'Blog', text: 'Lessons from building MVPs', href: 'BlogList.dc.html', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5' },
        { title: 'Contact', text: 'Talk to us about your idea', href: 'Contact.dc.html', icon: 'M3 5h18v14H3Z M3 7l9 6 9-6' }
      ]
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-notfound">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={""} />
        {" "}
      </div>
      {" "}
      <section style={{"height": "900px", "boxSizing": "border-box", "padding": "16px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
        {" "}
        <div style={{"flexGrow": "1", "boxSizing": "border-box", "padding": "56px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "28px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "textAlign": "center"}}>
          {" "}
          {" "}
          <div aria-hidden={"true"} style={{"display": "flex", "alignItems": "center", "gap": "18px"}}>
            {" "}
            <span style={{"fontSize": "200px", "lineHeight": "0.9", "fontWeight": "800", "letterSpacing": "-0.06em", "color": "#14161A"}}>
              {"4"}
            </span>
            {" "}
            <span className={"notfound--rsp-bob"} style={{"position": "relative", "width": "190px", "height": "190px", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              {" "}
              <svg className={"notfound--rsp-spin"} width={"190"} height={"190"} viewBox={"0 0 190 190"} style={{"position": "absolute", "left": "0", "top": "0"}}>
                <circle cx={"95"} cy={"95"} r={"90"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"2"} strokeDasharray={"6 8"} />
                <circle cx={"95"} cy={"5"} r={"7"} fill={"#C2323F"} />
              </svg>
              {" "}
              <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "150px", "height": "150px", "display": "block", "borderRadius": "150px", "boxShadow": "0 24px 48px -18px rgba(194,50,63,0.55)"}} />
              {" "}
            </span>
            {" "}
            <span style={{"fontSize": "200px", "lineHeight": "0.9", "fontWeight": "800", "letterSpacing": "-0.06em", "color": "#14161A"}}>
              {"4"}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "maxWidth": "640px"}}>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "46px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
              {"This page took a "}
              <span style={{"color": "#C2323F"}}>
                {"different route."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"The page you're looking for may have moved or no longer exists. Let's get you back on track."}
            </p>
            {" "}
          </div>
          {" "}
          <label style={{"width": "520px", "height": "60px", "boxSizing": "border-box", "padding": "0 8px 0 20px", "display": "flex", "alignItems": "center", "gap": "12px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 12px 26px -18px rgba(20,22,26,0.25)"}}>
            {" "}
            <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <circle cx={"11"} cy={"11"} r={"7"} />
              <path d={"M20 20l-3.5-3.5"} />
            </svg>
            {" "}
            <span style={{"position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)"}}>
              {"Search the site"}
            </span>
            {" "}
            <input type={"search"} placeholder={"Search services, projects or articles"} style={{"flexGrow": "1", "minWidth": "0", "height": "100%", "border": "none", "outline": "none", "background": "transparent", "fontFamily": "inherit", "fontSize": "16px", "fontWeight": "600", "color": "#14161A"}} />
            {" "}
            <button type={"button"} style={{"height": "44px", "padding": "0 18px", "border": "none", "borderRadius": "12px", "background": "#14161A", "color": "#FFFFFF", "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "cursor": "pointer"}}>
              {"Search"}
            </button>
            {" "}
          </label>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            {" "}
            <DcLink href={"/"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 24px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
              {" "}
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"} />
              </svg>
              {" "}
              <span>
                {"Back to home"}
              </span>
              {" "}
            </DcLink>
            {" "}
            <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 20px 0 7px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.2)", "color": "#14161A", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
              {" "}
              <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "42px", "height": "42px", "display": "block", "borderRadius": "12px", "objectFit": "cover"}} />
              {" "}
              <span>
                {"Book a call with Siva"}
              </span>
              {" "}
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"height": "120px", "flexShrink": "0", "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "16px"}}>
          {" "}
          {dcList(dcGet(S, "links")).map((__it, __i) => { const S5 = { ...S, "l": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={dcGet(S5, "l.href")} className={"notfound--rsp-card"} style={{"boxSizing": "border-box", "padding": "0 22px", "display": "flex", "alignItems": "center", "gap": "14px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)", "textDecoration": "none", "color": "#14161A"}}>
                {" "}
                <span style={{"width": "50px", "height": "50px", "flexShrink": "0", "borderRadius": "15px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S5, "l.icon")} />
                  </svg>
                  {" "}
                </span>
                {" "}
                <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  {" "}
                  <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S5, "l.title"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                    {dcStr(dcGet(S5, "l.text"))}
                  </span>
                  {" "}
                </span>
                {" "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
            </React.Fragment>); })}
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

export default function NotFound(props) {
  return <Component {...props} />;
}
