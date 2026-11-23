'use client';
// AUTO-GENERATED from design/Blog.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    return {
      posts: [
        {
          tag: 'Product strategy', read: '6 min read', href: '#blog-scope-mvp',
          coverBg: '#FBECEE', blob: 'rgba(194,50,63,0.12)',
          icon: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
          title: 'How to scope your MVP so it ships in 21 days',
          excerpt: 'A simple way to decide what goes into your first version, and what can safely wait.'
        },
        {
          tag: 'Development', read: '8 min read', href: '#blog-nocode',
          coverBg: '#EEF1F5', blob: 'rgba(20,22,26,0.06)',
          icon: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
          title: 'No-code or custom code: what is right for your first version?',
          excerpt: 'The honest trade-offs in cost, speed and flexibility, so you can choose with confidence.'
        },
        {
          tag: 'AI', read: '5 min read', href: '#blog-ai',
          coverBg: '#FBECEE', blob: 'rgba(194,50,63,0.12)',
          icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z',
          title: 'Adding AI to your product without overbuilding',
          excerpt: 'Where AI features genuinely help early users, and where they just add cost.'
        }
      ]
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section style={{"width": "100%", "height": "820px", "boxSizing": "border-box", "padding": "96px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "48px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-blog">
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
              {"From the Blog"}
            </span>
            {" "}
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "52px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Lessons from "}
            <span style={{"color": "#C2323F"}}>
              {"building MVPs."}
            </span>
          </h2>
          {" "}
        </div>
        {" "}
        <DcLink href={"/blog"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "52px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.2)", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
          {" "}
          <span>
            {"View all articles"}
          </span>
          {" "}
          <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M5 12h14M13 5l7 7-7 7"} />
          </svg>
          {" "}
        </DcLink>
        {" "}
      </div>
      {" "}
      <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "16px"}}>
        {" "}
        {dcList(dcGet(S, "posts")).map((__it, __i) => { const S4 = { ...S, "p": __it, $index: __i }; return (<React.Fragment key={__i}>
            {" "}
            <article style={{"height": "540px", "boxSizing": "border-box", "padding": "12px", "display": "flex", "flexDirection": "column", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
              {" "}
              {" "}
              <div aria-hidden={"true"} style={{"position": "relative", "height": "240px", "flexShrink": "0", "borderRadius": "20px", "background": `${dcStr(dcGet(S4, "p.coverBg"))}`, "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                {" "}
                <span style={{"position": "absolute", "width": "220px", "height": "220px", "borderRadius": "220px", "right": "-60px", "top": "-70px", "background": `${dcStr(dcGet(S4, "p.blob"))}`}} />
                {" "}
                <span style={{"position": "absolute", "width": "120px", "height": "120px", "borderRadius": "120px", "left": "-30px", "bottom": "-40px", "background": `${dcStr(dcGet(S4, "p.blob"))}`}} />
                {" "}
                <span style={{"position": "relative", "width": "96px", "height": "96px", "borderRadius": "28px", "background": "#FFFFFF", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 18px 36px -14px rgba(20,22,26,0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <svg width={"44"} height={"44"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={dcGet(S4, "p.icon")} />
                  </svg>
                  {" "}
                </span>
                {" "}
                <span style={{"position": "absolute", "left": "14px", "top": "14px", "padding": "6px 12px", "borderRadius": "999px", "background": "rgba(255,255,255,0.94)", "fontSize": "12px", "fontWeight": "700", "color": "#14161A"}}>
                  {dcStr(dcGet(S4, "p.tag"))}
                </span>
                {" "}
              </div>
              {" "}
              {" "}
              <div style={{"flexGrow": "1", "padding": "22px 16px 10px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                  {" "}
                  <span>
                    {"[Date]"}
                  </span>
                  {" "}
                  <span style={{"width": "4px", "height": "4px", "borderRadius": "4px", "background": "#A0A5AF"}} />
                  {" "}
                  <span>
                    {dcStr(dcGet(S4, "p.read"))}
                  </span>
                  {" "}
                </div>
                {" "}
                <h3 style={{"margin": "0", "fontSize": "22px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                  {dcStr(dcGet(S4, "p.title"))}
                </h3>
                {" "}
                <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                  {dcStr(dcGet(S4, "p.excerpt"))}
                </p>
                {" "}
                <DcLink href={dcGet(S4, "p.href")} style={{"marginTop": "auto", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "14px", "borderTop": "1px solid #E3E5E9", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
                  {" "}
                  <span>
                    {"Read article"}
                  </span>
                  {" "}
                  <span style={{"width": "36px", "height": "36px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={"M7 17L17 7M8 7h9v9"} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                </DcLink>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </React.Fragment>); })}
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
};

export default function Blog(props) {
  return <Component {...props} />;
}
