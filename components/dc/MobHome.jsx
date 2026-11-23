'use client';
// AUTO-GENERATED from design/MobHome.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';
import DC_MobConsult from './MobConsult';
import DC_MobFooter from './MobFooter';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {"tick": 0};
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState((s) => ({ tick: (s.tick + 1) % 30 })), 320);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  renderVals() {
    const day = Math.min(21, this.state.tick + 1);
    let stage = 'Plan & design';
    if (day >= 8) stage = 'Build';
    if (day >= 15) stage = 'Launch';
    if (day === 21) stage = 'Launched';
    return { day, stage, pct: Math.round(day / 21 * 100) + '%' };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobhome">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={"Home"} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"MVP Development Studio"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "42px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Make your MVP in "}
            <span style={{"color": "#C2323F"}}>
              {"21 days."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Turn your idea into a working product people can actually use. We design, build and launch it with you in three focused weeks."}
          </p>
          {" "}
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"Start your MVP"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
          {" "}
          <DcLink href={"/portfolio"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"See our work"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
        </div>
        {" "}
        <div style={{"boxSizing": "border-box", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            <span style={{"fontSize": "14px", "fontWeight": "700"}}>
              {"From idea to launch, anywhere."}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "fontSize": "11px", "fontWeight": "700", "color": "#545A66"}}>
              <span className={"mobhome--rsp-live"} style={{"width": "7px", "height": "7px", "borderRadius": "7px", "background": "#C2323F"}} />
              {"Sprint live"}
            </span>
          </div>
          {" "}
          <div role={"img"} aria-label={"Dotted world map with animated connections"} style={{"position": "relative", "width": "320px", "height": "124px", "alignSelf": "center"}}>
            <img src={"/assets/bc13b4101ba484001c62ea9bfd7579c4.svg"} alt={""} style={{"position": "absolute", "inset": "0", "width": "320px", "height": "124px"}} />
            <svg width={"320"} height={"124"} viewBox={"0 0 720 280"} style={{"position": "absolute", "inset": "0"}} aria-hidden={"true"}>
              <g fill={"none"} stroke={"#E7B9BF"} strokeWidth={"1.6"} strokeDasharray={"3 5"}>
                <path d={"M212 78 Q286 23 360 58"} />
                <path d={"M360 58 Q415 47 470 110"} />
                <path d={"M470 110 Q519 101 568 158"} />
                <path d={"M568 158 Q615 158 662 228"} />
                <path d={"M116 84 Q164 52 212 78"} />
                <path d={"M268 206 Q317 143 366 148"} />
              </g>
              <g fill={"none"} stroke={"#C2323F"} strokeWidth={"3.2"} strokeLinecap={"round"}>
                <path className={"mobhome--rsp-arc"} pathLength={"100"} d={"M212 78 Q286 23 360 58"} />
                <path className={"mobhome--rsp-arc"} pathLength={"100"} d={"M360 58 Q415 47 470 110"} style={{"animationDelay": ".6s"}} />
                <path className={"mobhome--rsp-arc"} pathLength={"100"} d={"M470 110 Q519 101 568 158"} style={{"animationDelay": "1.2s"}} />
                <path className={"mobhome--rsp-arc"} pathLength={"100"} d={"M568 158 Q615 158 662 228"} style={{"animationDelay": "1.8s"}} />
                <path className={"mobhome--rsp-arc"} pathLength={"100"} d={"M116 84 Q164 52 212 78"} style={{"animationDelay": "2.4s"}} />
                <path className={"mobhome--rsp-arc"} pathLength={"100"} d={"M268 206 Q317 143 366 148"} style={{"animationDelay": ".9s"}} />
              </g>
              <g fill={"#C2323F"} stroke={"#FFFFFF"} strokeWidth={"3"}>
                <circle cx={"212"} cy={"78"} r={"7"} />
                <circle cx={"360"} cy={"58"} r={"7"} />
                <circle cx={"470"} cy={"110"} r={"7"} />
                <circle cx={"568"} cy={"158"} r={"7"} />
                <circle cx={"662"} cy={"228"} r={"7"} />
                <circle cx={"116"} cy={"84"} r={"7"} />
                <circle cx={"268"} cy={"206"} r={"7"} />
                <circle cx={"366"} cy={"148"} r={"7"} />
              </g>
            </svg>
          </div>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "padding": "14px", "borderRadius": "16px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)"}}>
            {" "}
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px", "minWidth": "70px"}}>
              <span style={{"fontSize": "10px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"MVP sprint"}
              </span>
              <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                {"Day "}{dcStr(dcGet(S, "day"))}
                <span style={{"fontSize": "12px", "color": "#545A66", "fontWeight": "600"}}>
                  {" /21"}
                </span>
              </span>
            </span>
            {" "}
            <div style={{"flexGrow": "1", "height": "8px", "borderRadius": "8px", "background": "#EEF0F3", "overflow": "hidden"}}>
              <div style={{"height": "8px", "borderRadius": "8px", "background": "#C2323F", "width": `${dcStr(dcGet(S, "pct"))}`, "transition": "width .25s linear"}} />
            </div>
            {" "}
            <span style={{"minWidth": "64px", "textAlign": "right", "fontSize": "12px", "fontWeight": "700", "color": "#C2323F"}}>
              {dcStr(dcGet(S, "stage"))}
            </span>
            {" "}
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"Our Services"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Everything you need to go from "}
            <span style={{"color": "#C2323F"}}>
              {"idea to launch."}
            </span>
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"One focused team for design, development and launch."}
          </p>
        </div>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            <span style={{"width": "52px", "height": "52px", "flexShrink": "0", "borderRadius": "16px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"23"} height={"23"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
            <span style={{"padding": "6px 12px", "borderRadius": "999px", "background": "#FBECEE", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
              {"Most popular"}
            </span>
          </div>
          {" "}
          <h3 style={{"margin": "0", "fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"21-Day MVP Sprint"}
          </h3>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Our signature package. From a rough idea to a live product your first users can sign up for, in three weeks."}
          </p>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "fontSize": "14px", "fontWeight": "600"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Product scoping"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "fontSize": "14px", "fontWeight": "600"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"UI/UX design"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "fontSize": "14px", "fontWeight": "600"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Full-stack development"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 14px", "borderRadius": "12px", "background": "#FFFFFF", "fontSize": "14px", "fontWeight": "600"}}>
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Launch & handover"}
            </span>
          </div>
          {" "}
          <DcLink href={"/services/21-day-mvp-sprint"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"Start your sprint"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <DcLink href={"/services/mobile-app-development"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Mobile App Development"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                {"iOS & Android, one codebase"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
          </DcLink>
          <DcLink href={"/services/web-app-development"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M2 4h20v16H2Z M2 9h20"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Web App Development"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                {"SaaS, portals and dashboards"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
          </DcLink>
          <DcLink href={"/services/ecommerce-development"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Ecommerce Development"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                {"Online stores that sell"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
          </DcLink>
          <DcLink href={"/services/ui-ux-design"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"UI/UX Design"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                {"Research, design and prototypes"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
          </DcLink>
          <DcLink href={"/services/ai-integration"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"AI Integration"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                {"Assistants, search and automation"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
          </DcLink>
          <DcLink href={"/services/content-creation"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M15 10l5-3v10l-5-3Z M3 6h12v12H3Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Content Creation"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                {"Copy, videos and visuals"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
          </DcLink>
          <DcLink href={"/services/it-consultation"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
              </svg>
            </span>
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"IT Consultation"}
              </span>
              <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                {"Clear technical advice"}
              </span>
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
          </DcLink>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "28px 0", "display": "flex", "flexDirection": "column", "gap": "24px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "overflow": "hidden"}}>
          {" "}
          <div style={{"padding": "0 20px"}}>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
              <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
                <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
                <span>
                  {"Our Clients"}
                </span>
              </span>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Startups and teams "}
                <span style={{"color": "#C2323F"}}>
                  {"we've built with."}
                </span>
              </h2>
            </div>
          </div>
          {" "}
          <div className={"mobhome--rsp-fade"} style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
            <div style={{"overflow": "hidden"}}>
              <div className={"mobhome--rsp-tl"} style={{"display": "flex", "gap": "10px", "width": "max-content"}}>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Lumora"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2L22 20H2Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Kestrel"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Zm0 5a5 5 0 1 1 0 10a5 5 0 1 1 0-10Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Orbitly"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M3 4h18v4H3Z M3 10h12v4H3Z M3 16h6v4H3Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Fernway"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Quantix"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l11 11-11 11L1 12Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Brightpath"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Lumora"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2L22 20H2Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Kestrel"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Zm0 5a5 5 0 1 1 0 10a5 5 0 1 1 0-10Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Orbitly"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M3 4h18v4H3Z M3 10h12v4H3Z M3 16h6v4H3Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Fernway"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Quantix"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l11 11-11 11L1 12Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Brightpath"}
                  </span>
                </span>
              </div>
            </div>
            <div style={{"overflow": "hidden"}}>
              <div className={"mobhome--rsp-tr"} style={{"display": "flex", "gap": "10px", "width": "max-content"}}>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l11 11-11 11L1 12Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Brightpath"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Quantix"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M3 4h18v4H3Z M3 10h12v4H3Z M3 16h6v4H3Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Fernway"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Zm0 5a5 5 0 1 1 0 10a5 5 0 1 1 0-10Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Orbitly"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2L22 20H2Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Kestrel"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Lumora"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l11 11-11 11L1 12Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Brightpath"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Quantix"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M3 4h18v4H3Z M3 10h12v4H3Z M3 16h6v4H3Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Fernway"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Zm0 5a5 5 0 1 1 0 10a5 5 0 1 1 0-10Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Orbitly"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2L22 20H2Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Kestrel"}
                  </span>
                </span>
                <span style={{"height": "60px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 22px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "flexShrink": "0"}}>
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                    <path d={"M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z"} />
                  </svg>
                  <span style={{"fontSize": "18px", "fontWeight": "800", "color": "#6B717D"}}>
                    {"Lumora"}
                  </span>
                </span>
              </div>
            </div>
          </div>
          {" "}
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"Our Products"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Products we've "}
            <span style={{"color": "#C2323F"}}>
              {"designed and built."}
            </span>
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"A few of our own products and the ones we've shipped for clients."}
          </p>
        </div>
        <div style={{"boxSizing": "border-box", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"fontSize": "16px", "fontWeight": "800"}}>
            {"Have a product in mind?"}
          </span>
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 18px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.6)"}}>
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            <span style={{"flexGrow": "1"}}>
              {"Book a call with Siva"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div aria-hidden={"true"} style={{"height": "190px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "76px", "height": "76px", "flexShrink": "0", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"34"} height={"34"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M3 4h18v16H3Z M9 4v16 M15 4v16"} />
                </svg>
              </span>
            </div>
            {" "}
            <div style={{"padding": "18px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Our product"}
                </span>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Productivity · SaaS"}
                </span>
              </div>
              {" "}
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Rispit Flow"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                {"A simple sprint board that helps small teams plan, track and ship every week."}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
              {" "}
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div aria-hidden={"true"} style={{"height": "190px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "76px", "height": "76px", "flexShrink": "0", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"34"} height={"34"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
                </svg>
              </span>
            </div>
            {" "}
            <div style={{"padding": "18px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Client project"}
                </span>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Healthcare · Mobile"}
                </span>
              </div>
              {" "}
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Kestrel Health"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                {"A booking app that lets patients confirm a clinic visit in a few taps."}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
              {" "}
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div aria-hidden={"true"} style={{"height": "190px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "76px", "height": "76px", "flexShrink": "0", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"34"} height={"34"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M4 20V10 M10 20V4 M16 20v-7 M22 20H2"} />
                </svg>
              </span>
            </div>
            {" "}
            <div style={{"padding": "18px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Client project"}
                </span>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Analytics · Web app"}
                </span>
              </div>
              {" "}
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Lumora Analytics"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                {"A sales dashboard that brings a team's numbers into one clear view."}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
              {" "}
            </div>
            {" "}
          </DcLink>
          <DcLink href={"/portfolio/kestrel-health"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            {" "}
            <div aria-hidden={"true"} style={{"height": "190px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "76px", "height": "76px", "flexShrink": "0", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"34"} height={"34"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
                </svg>
              </span>
            </div>
            {" "}
            <div style={{"padding": "18px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Client project"}
                </span>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                  {"E-commerce · AI"}
                </span>
              </div>
              {" "}
              <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Orbitly Assist"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                {"An AI assistant that answers customer questions around the clock."}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "10px", "borderTop": "1px solid #E3E5E9", "fontSize": "14px", "fontWeight": "700"}}>
                {"View case study"}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </span>
              {" "}
            </div>
            {" "}
          </DcLink>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"Testimonials"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Hear it from "}
            <span style={{"color": "#C2323F"}}>
              {"the founders."}
            </span>
          </h2>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
          <DcLink href={"/portfolio/kestrel-health"} aria-label={"Watch Kestrel Health story"} style={{"position": "relative", "height": "460px", "display": "block", "borderRadius": "26px", "overflow": "hidden", "background": "#2A2D33", "textDecoration": "none", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.45)"}}>
            {" "}
            <div style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "paddingBottom": "130px"}}>
              <svg width={"90"} height={"90"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#454952"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#8A8F9A"}}>
                {"Client video"}
              </span>
            </div>
            {" "}
            <div style={{"position": "absolute", "top": "12px", "left": "12px", "right": "12px", "display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "5px 12px 5px 5px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)"}}>
                <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
                  </svg>
                </span>
                <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#14161A"}}>
                  {"Kestrel Health"}
                </span>
              </span>
              <span style={{"padding": "5px 9px", "borderRadius": "999px", "background": "rgba(20,22,26,0.55)", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
                {"1:24"}
              </span>
            </div>
            {" "}
            <span style={{"position": "absolute", "top": "150px", "left": "50%", "marginLeft": "-30px", "width": "60px", "height": "60px", "borderRadius": "60px", "background": "rgba(255,255,255,0.95)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
                <path d={"M8 5.5v13l11-6.5Z"} />
              </svg>
            </span>
            {" "}
            <div style={{"position": "absolute", "left": "0", "right": "0", "bottom": "0", "padding": "60px 20px 20px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "linear-gradient(180deg, rgba(20,22,26,0) 0%, rgba(20,22,26,0.88) 38%, #14161A 100%)"}}>
              <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "600", "color": "#FFFFFF"}}>
                {"“From a rough idea to patients booking real appointments in three weeks.”"}
              </p>
              <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "12px", "borderTop": "1px solid rgba(255,255,255,0.18)"}}>
                <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  <span style={{"fontSize": "14px", "fontWeight": "800", "color": "#FFFFFF"}}>
                    {"[Client Name]"}
                  </span>
                  <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#C9CCD3"}}>
                    {"[Founder, Kestrel Health]"}
                  </span>
                </span>
                <span style={{"padding": "4px 9px", "borderRadius": "999px", "background": "rgba(255,255,255,0.12)", "border": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
                  {"Mobile app"}
                </span>
              </div>
            </div>
            {" "}
          </DcLink>
          <figure style={{"margin": "0", "boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "4px 10px 4px 4px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              <span style={{"width": "22px", "height": "22px", "borderRadius": "7px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
                </svg>
              </span>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Orbitly Assist"}
              </span>
            </span>
            <blockquote style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "fontWeight": "600"}}>
              {"“They understood our customers quickly and built an assistant our support team actually trusts.”"}
            </blockquote>
            <figcaption style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              <span style={{"width": "38px", "height": "38px", "borderRadius": "38px", "background": "#E9EBEF", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#B5B9C1"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7"} />
                </svg>
              </span>
              <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
                <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                  {"[Client Name]"}
                </span>
                <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                  {"[Product Lead, Orbitly]"}
                </span>
              </span>
            </figcaption>
          </figure>
          <figure style={{"margin": "0", "boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "4px 10px 4px 4px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              <span style={{"width": "22px", "height": "22px", "borderRadius": "7px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M3 4h18v4H3Z M3 10h12v4H3Z M3 16h6v4H3Z"} />
                </svg>
              </span>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Fernway"}
              </span>
            </span>
            <blockquote style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "fontWeight": "600"}}>
              {"“We launched on time and kept building on the same code after. No rewrite needed.”"}
            </blockquote>
            <figcaption style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              <span style={{"width": "38px", "height": "38px", "borderRadius": "38px", "background": "#E9EBEF", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#B5B9C1"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7"} />
                </svg>
              </span>
              <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
                <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                  {"[Client Name]"}
                </span>
                <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                  {"[Co-founder, Fernway]"}
                </span>
              </span>
            </figcaption>
          </figure>
          <DcLink href={"/portfolio/kestrel-health"} aria-label={"Watch Lumora Analytics story"} style={{"position": "relative", "height": "460px", "display": "block", "borderRadius": "26px", "overflow": "hidden", "background": "#2A2D33", "textDecoration": "none", "boxShadow": "0 20px 40px -20px rgba(20,22,26,0.45)"}}>
            {" "}
            <div style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "paddingBottom": "130px"}}>
              <svg width={"90"} height={"90"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#454952"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#8A8F9A"}}>
                {"Client video"}
              </span>
            </div>
            {" "}
            <div style={{"position": "absolute", "top": "12px", "left": "12px", "right": "12px", "display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
              <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "5px 12px 5px 5px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)"}}>
                <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M4 20V10 M10 20V4 M16 20v-7 M22 20H2"} />
                  </svg>
                </span>
                <span style={{"fontSize": "12px", "fontWeight": "800", "color": "#14161A"}}>
                  {"Lumora Analytics"}
                </span>
              </span>
              <span style={{"padding": "5px 9px", "borderRadius": "999px", "background": "rgba(20,22,26,0.55)", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
                {"0:58"}
              </span>
            </div>
            {" "}
            <span style={{"position": "absolute", "top": "150px", "left": "50%", "marginLeft": "-30px", "width": "60px", "height": "60px", "borderRadius": "60px", "background": "rgba(255,255,255,0.95)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"#C2323F"} aria-hidden={"true"}>
                <path d={"M8 5.5v13l11-6.5Z"} />
              </svg>
            </span>
            {" "}
            <div style={{"position": "absolute", "left": "0", "right": "0", "bottom": "0", "padding": "60px 20px 20px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "linear-gradient(180deg, rgba(20,22,26,0) 0%, rgba(20,22,26,0.88) 38%, #14161A 100%)"}}>
              <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.5", "fontWeight": "600", "color": "#FFFFFF"}}>
                {"“Daily updates, no surprises, and a dashboard that looked polished from day one.”"}
              </p>
              <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "12px", "borderTop": "1px solid rgba(255,255,255,0.18)"}}>
                <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  <span style={{"fontSize": "14px", "fontWeight": "800", "color": "#FFFFFF"}}>
                    {"[Client Name]"}
                  </span>
                  <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#C9CCD3"}}>
                    {"[CEO, Lumora]"}
                  </span>
                </span>
                <span style={{"padding": "4px 9px", "borderRadius": "999px", "background": "rgba(255,255,255,0.12)", "border": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "fontWeight": "700", "color": "#FFFFFF"}}>
                  {"Web app"}
                </span>
              </div>
            </div>
            {" "}
          </DcLink>
          <figure style={{"margin": "0", "boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "4px 10px 4px 4px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
              <span style={{"width": "22px", "height": "22px", "borderRadius": "7px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M3 4h18v16H3Z M9 4v16 M15 4v16"} />
                </svg>
              </span>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Rispit Flow"}
              </span>
            </span>
            <blockquote style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "fontWeight": "600"}}>
              {"“Simple, fast and exactly what our small team needed to plan our weekly sprints.”"}
            </blockquote>
            <figcaption style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              <span style={{"width": "38px", "height": "38px", "borderRadius": "38px", "background": "#E9EBEF", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#B5B9C1"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z M3.5 21c.8-4.4 4.2-7 8.5-7s7.7 2.6 8.5 7"} />
                </svg>
              </span>
              <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
                <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                  {"[Client Name]"}
                </span>
                <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                  {"[Team Lead, using Rispit Flow]"}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"From the Blog"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Lessons from "}
            <span style={{"color": "#C2323F"}}>
              {"building MVPs."}
            </span>
          </h2>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "170px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "72px", "height": "72px", "flexShrink": "0", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"33"} height={"33"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z"} />
                </svg>
                {"Product strategy"}
              </span>
            </div>
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 6 min read"}
              </span>
              <span style={{"fontSize": "19px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"How to scope your MVP so it ships in 21 days"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"A simple way to decide what goes into your first version."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "170px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "72px", "height": "72px", "flexShrink": "0", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"33"} height={"33"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
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
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 8 min read"}
              </span>
              <span style={{"fontSize": "19px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"No-code or custom code: what is right for your first version?"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"The honest trade-offs in cost, speed and flexibility."}
              </span>
            </div>
          </DcLink>
          <DcLink href={"/blog/how-to-scope-your-mvp"} style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
            <div aria-hidden={"true"} style={{"position": "relative", "height": "170px", "borderRadius": "18px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <span style={{"width": "72px", "height": "72px", "flexShrink": "0", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"33"} height={"33"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
                </svg>
              </span>
              <span style={{"position": "absolute", "left": "12px", "top": "12px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px 5px 8px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "11px", "fontWeight": "700"}}>
                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
                </svg>
                {"AI"}
              </span>
            </div>
            <div style={{"padding": "16px 10px 8px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
                {"[Date] · 5 min read"}
              </span>
              <span style={{"fontSize": "19px", "lineHeight": "1.3", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Adding AI to your product without overbuilding"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Where AI features genuinely help early users."}
              </span>
            </div>
          </DcLink>
        </div>
        <DcLink href={"/blog"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
          <span>
            {"View all articles"}
          </span>
          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M5 12h14M13 5l7 7-7 7"} />
          </svg>
        </DcLink>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
            <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              <span>
                {"Technologies We Use"}
              </span>
            </span>
            {" "}
            <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"A modern stack, "}
              <span style={{"color": "#C2323F"}}>
                {"built to grow."}
              </span>
            </h2>
          </div>
          <div role={"img"} aria-label={"Tools we use: React, Next.js, Figma, Node.js, TypeScript, Flutter, Supabase, OpenAI, Vercel, AWS"} style={{"position": "relative", "height": "340px"}}>
            <div style={{"position": "absolute", "left": "50%", "top": "50%", "width": "0", "height": "0"}}>
              {" "}
              <span style={{"position": "absolute", "left": "-140px", "top": "-140px", "width": "280px", "height": "280px", "borderRadius": "280px", "border": "1.5px dashed #DADCE1", "boxSizing": "border-box"}} />
              {" "}
              <span style={{"position": "absolute", "left": "-82px", "top": "-82px", "width": "164px", "height": "164px", "borderRadius": "164px", "border": "1.5px dashed #E7B9BF", "boxSizing": "border-box"}} />
              {" "}
              <div className={"mobhome--rsp-spin-rev"} style={{"position": "absolute", "left": "0", "top": "0"}}>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(-60.0deg) translateX(140px)"}}>
                  <div style={{"transform": "rotate(60.0deg)"}}>
                    <div className={"mobhome--rsp-spin"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/typescript.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"TypeScript"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(0.0deg) translateX(140px)"}}>
                  <div style={{"transform": "rotate(-0.0deg)"}}>
                    <div className={"mobhome--rsp-spin"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/flutter.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"Flutter"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(60.0deg) translateX(140px)"}}>
                  <div style={{"transform": "rotate(-60.0deg)"}}>
                    <div className={"mobhome--rsp-spin"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/supabase.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"Supabase"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(120.0deg) translateX(140px)"}}>
                  <div style={{"transform": "rotate(-120.0deg)"}}>
                    <div className={"mobhome--rsp-spin"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/openai.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"OpenAI"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(180.0deg) translateX(140px)"}}>
                  <div style={{"transform": "rotate(-180.0deg)"}}>
                    <div className={"mobhome--rsp-spin"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/vercel.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"Vercel"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(240.0deg) translateX(140px)"}}>
                  <div style={{"transform": "rotate(-240.0deg)"}}>
                    <div className={"mobhome--rsp-spin"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/aws.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"AWS"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className={"mobhome--rsp-spin"} style={{"position": "absolute", "left": "0", "top": "0"}}>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(-90.0deg) translateX(82px)"}}>
                  <div style={{"transform": "rotate(90.0deg)"}}>
                    <div className={"mobhome--rsp-spin-rev"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/react.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"React"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(0.0deg) translateX(82px)"}}>
                  <div style={{"transform": "rotate(-0.0deg)"}}>
                    <div className={"mobhome--rsp-spin-rev"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/nextjs.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"Next.js"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(90.0deg) translateX(82px)"}}>
                  <div style={{"transform": "rotate(-90.0deg)"}}>
                    <div className={"mobhome--rsp-spin-rev"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/figma.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"Figma"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{"position": "absolute", "left": "0", "top": "0", "transform": "rotate(180.0deg) translateX(82px)"}}>
                  <div style={{"transform": "rotate(-180.0deg)"}}>
                    <div className={"mobhome--rsp-spin-rev"}>
                      <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "6px", "height": "36px", "padding": "0 10px 0 5px", "borderRadius": "11px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 8px 16px -10px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                        <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                          <img src={"/logos/nodejs.svg"} alt={""} style={{"width": "17px", "height": "17px", "display": "block", "objectFit": "contain"}} />
                        </span>
                        <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                          {"Node.js"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <span style={{"position": "absolute", "left": "-38px", "top": "-38px", "width": "76px", "height": "76px", "borderRadius": "76px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "60px", "height": "60px", "display": "block"}} />
              </span>
              {" "}
            </div>
          </div>
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

export default function MobHome(props) {
  return <Component {...props} />;
}
