'use client';
// AUTO-GENERATED from design/BlogList.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Footer from './Footer';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { cat: 'All' };
  }
  renderVals() {
    const CI = {
      'All': 'M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z',
      'Product strategy': 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z',
      'Design': 'M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
      'Development': 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
      'Mobile': 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2',
      'AI': 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z',
      'Launch': 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z'
    };
    const I = {
      check: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
      code: 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
      spark: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z',
      pen: 'M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
      bulb: 'M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z',
      layers: 'M12 2l10 5-10 5L2 7Z M2 17l10 5 10-5 M2 12l10 5 10-5',
      phone: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2',
      rocket: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z',
      grid: 'M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z'
    };
    const all = [
      { cat: 'Product strategy', read: '6 min read', icon: I.check, title: 'How to scope your MVP so it ships in 21 days', excerpt: 'A simple way to decide what goes into your first version, and what can safely wait.' },
      { cat: 'Development', read: '8 min read', icon: I.code, title: 'No-code or custom code: what is right for your first version?', excerpt: 'The honest trade-offs in cost, speed and flexibility.' },
      { cat: 'AI', read: '5 min read', icon: I.spark, title: 'Adding AI to your product without overbuilding', excerpt: 'Where AI features genuinely help early users, and where they just add cost.' },
      { cat: 'Design', read: '7 min read', icon: I.pen, title: '5 UX mistakes that slow down your first users', excerpt: 'Small design choices that quietly push new users away, and how to fix them.' },
      { cat: 'Product strategy', read: '6 min read', icon: I.bulb, title: 'How to test your idea before writing any code', excerpt: 'Cheap, fast ways to learn if people want what you plan to build.' },
      { cat: 'Development', read: '9 min read', icon: I.layers, title: 'Choosing a tech stack for your startup', excerpt: 'What matters for a first version, and what you can decide later.' },
      { cat: 'Mobile', read: '8 min read', icon: I.phone, title: 'React Native or Flutter for your first app?', excerpt: 'A plain comparison to help you pick the right one for your product.' },
      { cat: 'Launch', read: '6 min read', icon: I.rocket, title: 'What to do in the first 30 days after launch', excerpt: 'How to collect feedback, fix what matters and plan your next release.' },
      { cat: 'Design', read: '5 min read', icon: I.grid, title: 'Why a small design system pays off early', excerpt: 'A few shared styles and components save weeks as your product grows.' }
    ].map((p, i) => ({ ...p, catIcon: CI[p.cat], coverBg: i % 2 === 0 ? '#FBECEE' : '#EEF1F5', blob: i % 2 === 0 ? 'rgba(194,50,63,0.12)' : 'rgba(20,22,26,0.06)' }));
    const sel = this.state.cat;
    const cats = ['All', 'Product strategy', 'Design', 'Development', 'Mobile', 'AI', 'Launch'].map((label) => {
      const on = label === sel;
      return {
        label, selected: String(on), icon: CI[label], iconInk: on ? '#C2323F' : '#7A808C',
        bg: on ? '#FFFFFF' : 'transparent',
        fg: on ? '#14161A' : '#545A66',
        shadow: on ? '0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.25)' : 'none',
        pick: () => this.setState({ cat: label })
      };
    });
    return { cats, posts: sel === 'All' ? all : all.filter((p) => p.cat === sel) };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-bloglist">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={"Blogs"} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "796px", "boxSizing": "border-box", "padding": "16px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
        {" "}
        <div style={{"height": "280px", "flexShrink": "0", "boxSizing": "border-box", "padding": "44px 48px", "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px", "maxWidth": "720px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"The Rispit Blog"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "56px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Lessons from "}
              <span style={{"color": "#C2323F"}}>
                {"building MVPs."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"Practical guides on product, design, development and launch, for founders building their first version."}
            </p>
            {" "}
          </div>
          {" "}
          <label style={{"width": "400px", "height": "58px", "flexShrink": "0", "boxSizing": "border-box", "padding": "0 8px 0 20px", "display": "flex", "alignItems": "center", "gap": "12px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.06)"}}>
            {" "}
            <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#7A808C"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <circle cx={"11"} cy={"11"} r={"7"} />
              <path d={"M20 20l-3.5-3.5"} />
            </svg>
            {" "}
            <span style={{"position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)"}}>
              {"Search articles"}
            </span>
            {" "}
            <input type={"search"} placeholder={"Search articles"} style={{"flexGrow": "1", "minWidth": "0", "height": "100%", "border": "none", "outline": "none", "background": "transparent", "fontFamily": "inherit", "fontSize": "16px", "fontWeight": "600", "color": "#14161A"}} />
            {" "}
            <span style={{"padding": "6px 10px", "borderRadius": "8px", "background": "#F1F2F4", "fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
              {"⌘K"}
            </span>
            {" "}
          </label>
          {" "}
        </div>
        {" "}
        {" "}
        <DcLink href={"/blog/how-to-scope-your-mvp"} className={"bloglist--rsp-card"} style={{"flexGrow": "1", "boxSizing": "border-box", "padding": "12px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
          {" "}
          <div aria-hidden={"true"} style={{"gridColumn": "span 7", "position": "relative", "borderRadius": "20px", "background": "#C2323F", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            {" "}
            <span style={{"position": "absolute", "width": "380px", "height": "380px", "borderRadius": "380px", "right": "-90px", "top": "-120px", "background": "rgba(255,255,255,0.12)"}} />
            {" "}
            <span style={{"position": "absolute", "width": "220px", "height": "220px", "borderRadius": "220px", "left": "-60px", "bottom": "-80px", "background": "rgba(255,255,255,0.1)"}} />
            {" "}
            <div style={{"position": "relative", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px"}}>
              {" "}
              <span style={{"width": "110px", "height": "110px", "borderRadius": "32px", "background": "#FFFFFF", "boxShadow": "0 20px 40px -16px rgba(60,10,16,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                {" "}
                <svg width={"50"} height={"50"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
                </svg>
                {" "}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "fontWeight": "800", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "#FFFFFF"}}>
                {"The 21-day playbook"}
              </span>
              {" "}
            </div>
            {" "}
            <span style={{"position": "absolute", "left": "16px", "top": "16px", "padding": "7px 14px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "12px", "fontWeight": "800", "color": "#A3242F"}}>
              {"Featured"}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"gridColumn": "span 5", "boxSizing": "border-box", "padding": "28px 28px 28px 0", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "20px"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 12px 6px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "12px", "fontWeight": "700", "color": "#14161A"}}>
                  <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"} />
                  </svg>
                  <span>
                    {"Playbook"}
                  </span>
                </span>
                {" "}
                <span>
                  {"[Date]"}
                </span>
                {" "}
                <span style={{"width": "4px", "height": "4px", "borderRadius": "4px", "background": "#A0A5AF"}} />
                {" "}
                <span>
                  {"12 min read"}
                </span>
                {" "}
              </div>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "36px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"The 21-day MVP playbook: from idea to launch"}
              </h2>
              {" "}
              <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"Our full process, day by day: how we scope, design, build and launch a first version in three weeks, and what you can borrow for your own team."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "18px", "borderTop": "1px solid #E3E5E9"}}>
              {" "}
              <span style={{"fontSize": "14px", "fontWeight": "700", "color": "#545A66"}}>
                {"The full process, start to finish"}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "height": "46px", "padding": "0 18px", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 18px -8px rgba(194,50,63,0.65)"}}>
                {" "}
                <span>
                  {"Read article"}
                </span>
                {" "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 12h14M13 5l7 7-7 7"} />
                </svg>
                {" "}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </DcLink>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "1738px", "boxSizing": "border-box", "padding": "72px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "padding": "0 24px"}}>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "32px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"All articles"}
          </h2>
          {" "}
          <div role={"tablist"} aria-label={"Filter by topic"} style={{"display": "flex", "gap": "6px", "padding": "6px", "borderRadius": "16px", "background": "#F1F2F4", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.06)"}}>
            {" "}
            {dcList(dcGet(S, "cats")).map((__it, __i) => { const S6 = { ...S, "c": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <button type={"button"} role={"tab"} aria-selected={dcGet(S6, "c.selected")} onClick={dcGet(S6, "c.pick")} style={{"height": "40px", "display": "flex", "alignItems": "center", "gap": "7px", "padding": "0 14px", "border": "none", "borderRadius": "11px", "background": `${dcStr(dcGet(S6, "c.bg"))}`, "boxShadow": `${dcStr(dcGet(S6, "c.shadow"))}`, "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": `${dcStr(dcGet(S6, "c.fg"))}`, "cursor": "pointer"}}>
                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S6, "c.iconInk")} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S6, "c.icon")} />
                  </svg>
                  <span>
                    {dcStr(dcGet(S6, "c.label"))}
                  </span>
                </button>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "16px"}}>
          {" "}
          {dcList(dcGet(S, "posts")).map((__it, __i) => { const S5 = { ...S, "p": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={"/blog/how-to-scope-your-mvp"} className={"bloglist--rsp-card"} style={{"height": "480px", "boxSizing": "border-box", "padding": "12px", "display": "flex", "flexDirection": "column", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
                {" "}
                <div aria-hidden={"true"} style={{"position": "relative", "height": "210px", "flexShrink": "0", "borderRadius": "20px", "background": `${dcStr(dcGet(S5, "p.coverBg"))}`, "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <span style={{"position": "absolute", "width": "200px", "height": "200px", "borderRadius": "200px", "right": "-60px", "top": "-70px", "background": `${dcStr(dcGet(S5, "p.blob"))}`}} />
                  {" "}
                  <span style={{"position": "absolute", "width": "110px", "height": "110px", "borderRadius": "110px", "left": "-30px", "bottom": "-40px", "background": `${dcStr(dcGet(S5, "p.blob"))}`}} />
                  {" "}
                  <span style={{"position": "relative", "width": "84px", "height": "84px", "borderRadius": "24px", "background": "#FFFFFF", "boxShadow": "0 18px 36px -14px rgba(20,22,26,0.35)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"38"} height={"38"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={dcGet(S5, "p.icon")} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <span style={{"position": "absolute", "left": "14px", "top": "14px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 12px 6px 10px", "borderRadius": "999px", "background": "rgba(255,255,255,0.94)", "fontSize": "12px", "fontWeight": "700"}}>
                    <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S5, "p.catIcon")} />
                    </svg>
                    <span>
                      {dcStr(dcGet(S5, "p.cat"))}
                    </span>
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"flexGrow": "1", "padding": "20px 14px 8px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
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
                      {dcStr(dcGet(S5, "p.read"))}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <h3 style={{"margin": "0", "fontSize": "21px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                    {dcStr(dcGet(S5, "p.title"))}
                  </h3>
                  {" "}
                  <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                    {dcStr(dcGet(S5, "p.excerpt"))}
                  </p>
                  {" "}
                  <span style={{"marginTop": "auto", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "12px", "borderTop": "1px solid #E3E5E9", "fontSize": "15px", "fontWeight": "700"}}>
                    {" "}
                    <span>
                      {"Read article"}
                    </span>
                    {" "}
                    <span style={{"width": "34px", "height": "34px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                      {" "}
                      <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                        <path d={"M7 17L17 7M8 7h9v9"} />
                      </svg>
                      {" "}
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
              </DcLink>
              {" "}
            </React.Fragment>); })}
          {" "}
        </div>
        {" "}
        <button type={"button"} style={{"alignSelf": "center", "display": "flex", "alignItems": "center", "gap": "10px", "height": "54px", "padding": "0 26px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.2)", "fontFamily": "inherit", "fontSize": "16px", "fontWeight": "700", "color": "#14161A", "cursor": "pointer"}}>
          {" "}
          <span>
            {"Load more articles"}
          </span>
          {" "}
          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M12 5v14M5 12l7 7 7-7"} />
          </svg>
          {" "}
        </button>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "356px", "boxSizing": "border-box", "padding": "72px 24px 24px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "0 56px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "48px", "borderRadius": "28px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25), 0 24px 48px -24px rgba(194,50,63,0.6)", "overflow": "hidden"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "maxWidth": "560px"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#FBECEE"}}>
              {"Newsletter"}
            </span>
            {" "}
            <span style={{"fontSize": "34px", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"Get new articles in your inbox."}
            </span>
            {" "}
            <span style={{"fontSize": "16px", "fontWeight": "500", "color": "#FFFFFF"}}>
              {"One short email when we publish something new. No spam, unsubscribe any time."}
            </span>
            {" "}
          </div>
          {" "}
          <form style={{"width": "480px", "flexShrink": "0", "display": "flex", "gap": "10px", "padding": "8px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 20px 40px -18px rgba(60,10,16,0.5)"}} onSubmit={dcFormSubmit}>
            {" "}
            <label htmlFor={"rsp-email"} style={{"position": "absolute", "width": "1px", "height": "1px", "overflow": "hidden", "clip": "rect(0 0 0 0)"}}>
              {"Email address"}
            </label>
            {" "}
            <input id={"rsp-email"} type={"email"} placeholder={"you@company.com"} style={{"flexGrow": "1", "minWidth": "0", "height": "52px", "padding": "0 16px", "border": "none", "outline": "none", "borderRadius": "14px", "background": "#F7F8FA", "fontFamily": "inherit", "fontSize": "16px", "fontWeight": "600", "color": "#14161A"}} />
            {" "}
            <button type={"button"} style={{"height": "52px", "padding": "0 22px", "border": "none", "borderRadius": "14px", "background": "#14161A", "color": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "700", "cursor": "pointer"}}>
              {"Subscribe"}
            </button>
            {" "}
          </form>
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

export default function BlogList(props) {
  return <Component {...props} />;
}
