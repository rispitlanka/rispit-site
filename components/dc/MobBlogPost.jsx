'use client';
// AUTO-GENERATED from design/MobBlogPost.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';
import DC_MobConsult from './MobConsult';
import DC_MobFooter from './MobFooter';

class Component extends DCLogic {
  renderVals() {
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobblogpost">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={"Blogs"} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <nav aria-label={"Breadcrumb"} style={{"display": "flex", "alignItems": "center", "flexWrap": "wrap", "gap": "6px", "fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
            <DcLink href={"/"} style={{"textDecoration": "none"}}>
              {"Home"}
            </DcLink>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <DcLink href={"/blog"} style={{"textDecoration": "none"}}>
              {"Blog"}
            </DcLink>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <span style={{"color": "#14161A"}}>
              {"Product strategy"}
            </span>
          </nav>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "32px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"How to scope your MVP so it "}
            <span style={{"color": "#C2323F"}}>
              {"ships in 21 days."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"A simple way to decide what goes into your first version, and what can safely wait."}
          </p>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "14px", "borderTop": "1px solid #E3E5E9"}}>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
              <span style={{"display": "flex", "alignItems": "center", "gap": "5px", "padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
                </svg>
                {"Product strategy"}
              </span>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 6 min read"}
              </span>
            </span>
            <span style={{"display": "flex", "gap": "6px"}}>
              <DcLink href={"#share-linkedin"} aria-label={"Share on LinkedIn"} style={{"width": "38px", "height": "38px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z M2 9h4v12H2Z"} />
                </svg>
              </DcLink>
              <DcLink href={"#copy-link"} aria-label={"Copy link"} style={{"width": "38px", "height": "38px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7 M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"} />
                </svg>
              </DcLink>
            </span>
          </div>
        </div>
        <div aria-hidden={"true"} style={{"height": "220px", "borderRadius": "24px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
          <span style={{"width": "96px", "height": "96px", "borderRadius": "28px", "background": "#FFFFFF", "boxShadow": "0 20px 40px -16px rgba(194,50,63,0.45)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <svg width={"46"} height={"46"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 13l4 4L19 7"} />
            </svg>
          </span>
        </div>
        <details style={{"borderRadius": "18px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "padding": "0 16px"}}>
          <summary style={{"height": "54px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "fontSize": "14px", "fontWeight": "800", "cursor": "pointer", "listStyle": "none"}}>
            {"On this page"}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M6 9l6 6 6-6"} />
            </svg>
          </summary>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "4px", "paddingBottom": "12px"}}>
            <DcLink href={"#s1"} style={{"padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Start with one problem"}
            </DcLink>
            <DcLink href={"#s2"} style={{"padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"List everything, then cut"}
            </DcLink>
            <DcLink href={"#s3"} style={{"padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Use the one-sentence test"}
            </DcLink>
            <DcLink href={"#s4"} style={{"padding": "8px 0", "fontSize": "14px", "fontWeight": "600", "textDecoration": "none"}}>
              {"Plan in weeks, not months"}
            </DcLink>
          </div>
        </details>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "32px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <article style={{"display": "flex", "flexDirection": "column", "gap": "18px", "padding": "0 4px"}}>
          <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.75", "color": "#2E3138", "fontWeight": "500"}}>
            {"Most first products don't fail because they're badly built. They fail because they try to do too much, take too long, and reach real users too late. Scoping is the skill that fixes this. Here's the simple process we use with every founder before a 21-day build."}
          </p>
          {" "}
          <h2 id={"s1"} style={{"margin": "10px 0 0", "fontSize": "25px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Start with one problem"}
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.75", "color": "#2E3138", "fontWeight": "500"}}>
            {"Write down the single problem your product solves, for one specific type of person. Not three problems, not \"everyone\". If you can't describe it in a sentence, your first version will be hard to build and harder to explain."}
          </p>
          {" "}
          <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.75", "color": "#2E3138", "fontWeight": "500"}}>
            {"A clinic booking app, for example, isn't about \"improving healthcare\". It's about letting a patient book a visit without calling the front desk."}
          </p>
          {" "}
          <h2 id={"s2"} style={{"margin": "10px 0 0", "fontSize": "25px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"List everything, then cut"}
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.75", "color": "#2E3138", "fontWeight": "500"}}>
            {"Get every feature idea out of your head and onto one list. Then sort each item into one of three groups:"}
          </p>
          {" "}
          <ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <li style={{"display": "flex", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "600"}}>
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
            <li style={{"display": "flex", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "600"}}>
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
            <li style={{"display": "flex", "gap": "12px", "padding": "14px 16px", "borderRadius": "14px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "16px", "lineHeight": "1.5", "fontWeight": "600"}}>
              <span style={{"width": "26px", "height": "26px", "flexShrink": "0", "borderRadius": "8px", "background": "#ECEEF1", "color": "#545A66", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "13px", "fontWeight": "800"}}>
                {"3"}
              </span>
              <span>
                <strong style={{"fontWeight": "800"}}>
                  {"Later:"}
                </strong>
                {" ideas for when you have real users and feedback."}
              </span>
            </li>
          </ul>
          {" "}
          <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.75", "color": "#2E3138", "fontWeight": "500"}}>
            {"Your first version is the \"must have\" group, and nothing else. Be strict. Most lists shrink by more than half."}
          </p>
          {" "}
          <blockquote style={{"margin": "6px 0", "padding": "22px", "borderRadius": "20px", "background": "#FBECEE", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
            <svg width={"26"} height={"26"} viewBox={"0 0 24 24"} fill={"none"} stroke={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4 18v-5.5C4 8.4 6.2 6 10 5.5V8c-2 .4-3 1.7-3 4h3v6Zm10 0v-5.5c0-4.1 2.2-6.5 6-7V8c-2 .4-3 1.7-3 4h3v6Z"} />
            </svg>
            <span style={{"fontSize": "20px", "lineHeight": "1.4", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"If a feature doesn't help someone solve the core problem on day one, it can wait."}
            </span>
          </blockquote>
          {" "}
          <div style={{"position": "relative", "height": "220px", "borderRadius": "20px", "background": "#E9EBEF", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "overflow": "hidden"}}>
            <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
            </svg>
            <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
              {"In-article image"}
            </span>
          </div>
          {" "}
          <h2 id={"s3"} style={{"margin": "10px 0 0", "fontSize": "25px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Use the one-sentence test"}
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.75", "color": "#2E3138", "fontWeight": "500"}}>
            {"Before you commit, describe your first version in one sentence: \"A [person] can [do one thing] so that [result].\" If the sentence needs an \"and\", something can probably move to the later list."}
          </p>
          {" "}
          <h2 id={"s4"} style={{"margin": "10px 0 0", "fontSize": "25px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Plan in weeks, not months"}
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.75", "color": "#2E3138", "fontWeight": "500"}}>
            {"Once the scope is clear, plan the build in short, visible steps. We use three weeks: design in the first, build in the second, test and launch in the third, with a demo at the end of each one."}
          </p>
          {" "}
          <div style={{"marginTop": "6px", "padding": "22px", "borderRadius": "20px", "background": "#14161A", "color": "#FFFFFF", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#E7B9BF"}}>
              {"Key takeaways"}
            </span>
            <span style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "600"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "2px"}}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Solve one problem for one type of person."}
            </span>
            <span style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "600"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "2px"}}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Build only the must-haves first."}
            </span>
            <span style={{"display": "flex", "gap": "10px", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "600"}}>
              <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#E7B9BF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "2px"}}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Plan in weeks with a demo at the end of each."}
            </span>
          </div>
        </article>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "24px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25), 0 20px 40px -20px rgba(194,50,63,0.6)"}}>
          <span style={{"fontSize": "22px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
            {"Have an idea you want to build?"}
          </span>
          <span style={{"fontSize": "14px", "lineHeight": "1.55", "fontWeight": "500"}}>
            {"Let's scope your first version together on a 20-minute call."}
          </span>
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 18px 0 6px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.6)"}}>
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            <span style={{"flexGrow": "1"}}>
              {"Book a call with Siva"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <span style={{"fontSize": "28px", "fontWeight": "800", "letterSpacing": "-0.03em", "padding": "0 4px"}}>
          {"Keep reading"}
        </span>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
                </svg>
                {"Product strategy"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 6 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"How to test your idea before writing any code"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Cheap, fast ways to learn if people want what you plan to build."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "160px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "68px", "height": "68px", "borderRadius": "20px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 18l6-6-6-6 M8 6l-6 6 6 6"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 18l6-6-6-6 M8 6l-6 6 6 6"} />
                </svg>
                {"Development"}
              </span>
            </div>
            <div style={{"padding": "14px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 8 min read"}
              </span>
              <span style={{"fontSize": "18px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"No-code or custom code: what is right for your first version?"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"The honest trade-offs in cost, speed and flexibility."}
              </span>
            </div>
          </DcLink>
        </div>
      </section>
      {" "}
      <DC_MobConsult  />
      {" "}
      <DC_MobFooter  />
      {" "}
    </div>
    </>
  );
};

export default function MobBlogPost(props) {
  return <Component {...props} />;
}
