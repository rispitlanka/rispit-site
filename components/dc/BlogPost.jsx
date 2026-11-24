'use client';
// AUTO-GENERATED from design/BlogPost.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Consultation from './Consultation';
import DC_Footer from './Footer';

class Component extends DCLogic {
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
    return {
      related: [
        { cat: 'Product strategy', read: '6 min read', coverBg: '#EEF1F5', blob: 'rgba(20,22,26,0.06)', icon: 'M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z', title: 'How to test your idea before writing any code', excerpt: 'Cheap, fast ways to learn if people want what you plan to build.' },
        { cat: 'Development', read: '8 min read', coverBg: '#FBECEE', blob: 'rgba(194,50,63,0.12)', icon: 'M16 18l6-6-6-6 M8 6l-6 6 6 6', title: 'No-code or custom code: what is right for your first version?', excerpt: 'The honest trade-offs in cost, speed and flexibility.' },
        { cat: 'Launch', read: '6 min read', coverBg: '#EEF1F5', blob: 'rgba(20,22,26,0.06)', icon: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z', title: 'What to do in the first 30 days after launch', excerpt: 'How to collect feedback, fix what matters and plan your next release.' }
      ].map((x) => ({ ...x, catIcon: CI[x.cat] }))
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-blogpost">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={"Blogs"} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "1000px", "boxSizing": "border-box", "padding": "16px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
        {" "}
        <div style={{"height": "420px", "flexShrink": "0", "boxSizing": "border-box", "padding": "44px 48px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px"}}>
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
              <DcLink href={"/blog"} style={{"textDecoration": "none"}}>
                {"Blog"}
              </DcLink>
              {" "}
              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M9 6l6 6-6 6"} />
              </svg>
              {" "}
              <span style={{"color": "#14161A"}}>
                {"Product strategy"}
              </span>
              {" "}
            </nav>
            {" "}
            <h1 style={{"margin": "0", "maxWidth": "1000px", "fontSize": "56px", "lineHeight": "1.06", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"How to scope your MVP so it "}
              <span style={{"color": "#C2323F"}}>
                {"ships in 21 days."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "maxWidth": "760px", "fontSize": "19px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"A simple way to decide what goes into your first version, and what can safely wait."}
            </p>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "paddingTop": "22px", "borderTop": "1px solid #E3E5E9"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700"}}>
                <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
                </svg>
                <span>
                  {"Product strategy"}
                </span>
              </span>
              {" "}
              <span style={{"fontSize": "14px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 6 min read"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#545A66", "marginRight": "4px"}}>
                {"Share"}
              </span>
              {" "}
              <DcLink href={"#share-linkedin"} aria-label={"Share on LinkedIn"} style={{"width": "42px", "height": "42px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"} />
                  <rect x={"2"} y={"9"} width={"4"} height={"12"} />
                  <circle cx={"4"} cy={"4"} r={"2"} />
                </svg>
              </DcLink>
              {" "}
              <DcLink href={"#share-x"} aria-label={"Share on X"} style={{"width": "42px", "height": "42px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.4"} strokeLinecap={"round"} aria-hidden={"true"}>
                  <path d={"M4 4l16 16M20 4L4 20"} />
                </svg>
              </DcLink>
              {" "}
              <DcLink href={"#copy-link"} aria-label={"Copy link"} style={{"width": "42px", "height": "42px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7 M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"} />
                </svg>
              </DcLink>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div aria-hidden={"true"} style={{"flexGrow": "1", "position": "relative", "borderRadius": "28px", "background": "#FBECEE", "border": "1px solid #F4DADD", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 16px 36px -18px rgba(194,50,63,0.3)"}}>
          {" "}
          <span style={{"position": "absolute", "width": "520px", "height": "520px", "borderRadius": "520px", "right": "-120px", "top": "-180px", "background": "rgba(194,50,63,0.1)"}} />
          {" "}
          <span style={{"position": "absolute", "width": "300px", "height": "300px", "borderRadius": "300px", "left": "-80px", "bottom": "-120px", "background": "rgba(194,50,63,0.1)"}} />
          {" "}
          <span style={{"position": "relative", "width": "140px", "height": "140px", "borderRadius": "40px", "background": "#FFFFFF", "boxShadow": "0 24px 48px -18px rgba(194,50,63,0.45)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            {" "}
            <svg width={"64"} height={"64"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"}>
              <path d={"M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"} />
            </svg>
            {" "}
          </span>
          {" "}
          <span style={{"position": "absolute", "right": "20px", "bottom": "20px", "padding": "8px 14px", "borderRadius": "12px", "background": "rgba(255,255,255,0.92)", "fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
            {"Cover image · replace with your own"}
          </span>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "64px 24px 24px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "32px", "alignItems": "start"}}>
        {" "}
        {" "}
        <aside style={{"gridColumn": "span 3", "position": "sticky", "top": "120px", "boxSizing": "border-box", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)"}}>
          {" "}
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66", "marginBottom": "8px"}}>
            {"On this page"}
          </span>
          {" "}
          <DcLink href={"#s1"} style={{"padding": "10px 12px", "borderRadius": "10px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "fontSize": "14px", "fontWeight": "700", "color": "#C2323F", "textDecoration": "none"}}>
            {"Start with one problem"}
          </DcLink>
          {" "}
          <DcLink href={"#s2"} style={{"padding": "10px 12px", "borderRadius": "10px", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
            {"List everything, then cut"}
          </DcLink>
          {" "}
          <DcLink href={"#s3"} style={{"padding": "10px 12px", "borderRadius": "10px", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
            {"Use the one-sentence test"}
          </DcLink>
          {" "}
          <DcLink href={"#s4"} style={{"padding": "10px 12px", "borderRadius": "10px", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
            {"Plan in weeks, not months"}
          </DcLink>
          {" "}
          <DcLink href={"#s5"} style={{"padding": "10px 12px", "borderRadius": "10px", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
            {"Key takeaways"}
          </DcLink>
          {" "}
        </aside>
        {" "}
        {" "}
        <article className={"blogpost--rsp-body"} style={{"gridColumn": "span 6", "display": "flex", "flexDirection": "column", "gap": "22px", "padding": "0 12px"}}>
          {" "}
          <p>
            {"Most first products don't fail because they're badly built. They fail because they try to do too much, take too long, and reach real users too late. Scoping is the skill that fixes this. Here's the simple process we use with every founder before a 21-day build."}
          </p>
          {" "}
          <h2 id={"s1"}>
            {"Start with one problem"}
          </h2>
          {" "}
          <p>
            {"Write down the single problem your product solves, for one specific type of person. Not three problems, not \"everyone\". If you can't describe it in a sentence, your first version will be hard to build and harder to explain."}
          </p>
          {" "}
          <p>
            {"A clinic booking app, for example, isn't about \"improving healthcare\". It's about letting a patient book a visit without calling the front desk."}
          </p>
          {" "}
          <h2 id={"s2"}>
            {"List everything, then cut"}
          </h2>
          {" "}
          <p>
            {"Get every feature idea out of your head and onto one list. Then sort each item into one of three groups:"}
          </p>
          {" "}
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
            <li style={{"display": "flex", "gap": "12px", "padding": "16px 18px", "borderRadius": "16px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "17px", "lineHeight": "1.55", "fontWeight": "600"}}>
              <span style={{"width": "26px", "height": "26px", "flexShrink": "0", "borderRadius": "8px", "background": "#C2323F", "color": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "13px", "fontWeight": "800"}}>
                {"1"}
              </span>
              <span>
                <strong style={{"fontWeight": "800"}}>
                  {"Must have:"}
                </strong>
                {" without it, the core problem isn't solved."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "12px", "padding": "16px 18px", "borderRadius": "16px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "17px", "lineHeight": "1.55", "fontWeight": "600"}}>
              <span style={{"width": "26px", "height": "26px", "flexShrink": "0", "borderRadius": "8px", "background": "#FBECEE", "color": "#A3242F", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "13px", "fontWeight": "800"}}>
                {"2"}
              </span>
              <span>
                <strong style={{"fontWeight": "800"}}>
                  {"Nice to have:"}
                </strong>
                {" useful, but users can live without it for now."}
              </span>
            </li>
            <li style={{"display": "flex", "gap": "12px", "padding": "16px 18px", "borderRadius": "16px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "17px", "lineHeight": "1.55", "fontWeight": "600"}}>
              <span style={{"width": "26px", "height": "26px", "flexShrink": "0", "borderRadius": "8px", "background": "#ECEEF1", "color": "#545A66", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "13px", "fontWeight": "800"}}>
                {"3"}
              </span>
              <span>
                <strong style={{"fontWeight": "800"}}>
                  {"Later:"}
                </strong>
                {" ideas for when you have real users and real feedback."}
              </span>
            </li>
          </ul>
          {" "}
          <p>
            {"Your first version is the \"must have\" group, and nothing else. Be strict. Most lists shrink by more than half."}
          </p>
          {" "}
          <blockquote style={{"margin": "8px 0", "padding": "28px 32px", "borderRadius": "22px", "background": "#FBECEE", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
            {" "}
            <svg width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
              <path d={"M4 18v-5.5C4 8.4 6.2 6 10 5.5V8c-2 .4-3 1.7-3 4h3v6Zm10 0v-5.5c0-4.1 2.2-6.5 6-7V8c-2 .4-3 1.7-3 4h3v6Z"} />
            </svg>
            {" "}
            <span style={{"fontSize": "24px", "lineHeight": "1.4", "fontWeight": "800", "letterSpacing": "-0.02em", "color": "#14161A"}}>
              {"If a feature doesn't help someone solve the core problem on day one, it can wait."}
            </span>
            {" "}
          </blockquote>
          {" "}
          <figure style={{"margin": "8px 0", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
            {" "}
            <div style={{"height": "320px", "borderRadius": "22px", "background": "#E9EBEF", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px"}}>
              {" "}
              <svg width={"48"} height={"48"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"3"} />
                <circle cx={"9"} cy={"9"} r={"2"} />
                <path d={"M21 15l-5-5L5 21"} />
              </svg>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#6B717D"}}>
                {"In-article image"}
              </span>
              {" "}
            </div>
            {" "}
            <figcaption style={{"fontSize": "14px", "fontWeight": "600", "color": "#545A66"}}>
              {"Sorting features into must have, nice to have and later."}
            </figcaption>
            {" "}
          </figure>
          {" "}
          <h2 id={"s3"}>
            {"Use the one-sentence test"}
          </h2>
          {" "}
          <p>
            {"Before you commit, describe your first version in one sentence: \"A [person] can [do one thing] so that [result].\" If the sentence needs an \"and\", something can probably move to the later list."}
          </p>
          {" "}
          <h2 id={"s4"}>
            {"Plan in weeks, not months"}
          </h2>
          {" "}
          <p>
            {"Once the scope is clear, plan the build in short, visible steps. We use three weeks: design in the first, build in the second, test and launch in the third, with a demo at the end of each one. Short cycles keep everyone honest and make problems easy to spot early."}
          </p>
          {" "}
          <div id={"s5"} style={{"marginTop": "8px", "padding": "28px 30px", "borderRadius": "22px", "background": "#14161A", "color": "#FFFFFF", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#E7B9BF"}}>
              {"Key takeaways"}
            </span>
            {" "}
            <span style={{"display": "flex", "gap": "12px", "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "600"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "2px"}}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Solve one problem for one type of person."}
            </span>
            {" "}
            <span style={{"display": "flex", "gap": "12px", "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "600"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "2px"}}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Build only the must-haves first."}
            </span>
            {" "}
            <span style={{"display": "flex", "gap": "12px", "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "600"}}>
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "2px"}}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Plan in weeks with a demo at the end of each."}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px", "paddingTop": "12px", "borderTop": "1px solid #ECEEF1"}}>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"#MVP"}
            </span>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"#ProductStrategy"}
            </span>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"#Startups"}
            </span>
            {" "}
          </div>
          {" "}
        </article>
        {" "}
        {" "}
        <aside style={{"gridColumn": "span 3", "position": "sticky", "top": "120px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
          {" "}
          <div style={{"boxSizing": "border-box", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "24px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25), 0 20px 40px -20px rgba(194,50,63,0.6)"}}>
            {" "}
            <span style={{"fontSize": "20px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Have an idea you want to build?"}
            </span>
            {" "}
            <span style={{"fontSize": "14px", "lineHeight": "1.55", "fontWeight": "500"}}>
              {"Let's scope your first version together on a 20-minute call."}
            </span>
            {" "}
            <DcLink href={"#contact"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "54px", "padding": "0 16px 0 6px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "0 10px 20px -10px rgba(60,10,16,0.5)"}}>
              {" "}
              <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "42px", "height": "42px", "display": "block", "borderRadius": "12px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
              {" "}
              <span style={{"flexGrow": "1"}}>
                {"Book a call with Siva"}
              </span>
              {" "}
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
              {" "}
            </DcLink>
            {" "}
          </div>
          {" "}
        </aside>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "780px", "boxSizing": "border-box", "padding": "96px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "padding": "0 24px"}}>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Keep reading"}
          </h2>
          {" "}
          <DcLink href={"/blog"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "50px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.2)", "fontSize": "15px", "fontWeight": "700", "color": "#14161A", "textDecoration": "none"}}>
            {" "}
            <span>
              {"All articles"}
            </span>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
            {" "}
          </DcLink>
          {" "}
        </div>
        {" "}
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "16px"}}>
          {" "}
          {dcList(dcGet(S, "related")).map((__it, __i) => { const S5 = { ...S, "p": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={"/blog/how-to-scope-your-mvp"} className={"blogpost--rsp-card"} style={{"height": "520px", "boxSizing": "border-box", "padding": "12px", "display": "flex", "flexDirection": "column", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
                {" "}
                <div aria-hidden={"true"} style={{"position": "relative", "height": "230px", "flexShrink": "0", "borderRadius": "20px", "background": `${dcStr(dcGet(S5, "p.coverBg"))}`, "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <span style={{"position": "absolute", "width": "200px", "height": "200px", "borderRadius": "200px", "right": "-60px", "top": "-70px", "background": `${dcStr(dcGet(S5, "p.blob"))}`}} />
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
                  <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                    {"[Date] · "}{dcStr(dcGet(S5, "p.read"))}
                  </span>
                  {" "}
                  <h3 style={{"margin": "0", "fontSize": "21px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                    {dcStr(dcGet(S5, "p.title"))}
                  </h3>
                  {" "}
                  <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                    {dcStr(dcGet(S5, "p.excerpt"))}
                  </p>
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
      {" "}
      <DC_Consultation  />
      {" "}
      <DC_Footer  />
      {" "}
    </div>
    </>
  );
};

export default function BlogPost(props) {
  return <Component {...props} />;
}
