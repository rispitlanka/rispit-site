'use client';
// AUTO-GENERATED from design/Hero.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tick: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((s) => ({ tick: (s.tick + 1) % 30 }));
    }, 320);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  renderVals() {
    const animate = this.props.animate ?? true;
    const day = animate ? Math.min(21, this.state.tick + 1) : 21;
    let stage = 'Plan & design';
    if (day >= 8) stage = 'Build';
    if (day >= 15) stage = 'Test & launch';
    if (day === 21) stage = 'Launched';
    return { day, stage, pct: Math.round((day / 21) * 100) + '%' };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "height": "640px", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A", "overflow": "hidden"}} className="dc-hero">
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "16px 24px 24px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "16px"}}>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 5", "height": "600px", "boxSizing": "border-box", "padding": "48px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "24px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), inset 0 -1px 0 rgba(20,22,26,0.04)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"MVP Development Studio"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "62px", "lineHeight": "1.04", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Make your MVP in "}
              <span style={{"color": "#C2323F"}}>
                {"21 days."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"Turn your idea into a working product people can actually use. We design, build and launch it with you in three focused weeks."}
            </p>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
            {" "}
            <DcLink href={"#contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 26px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
              {" "}
              <span>
                {"Start your MVP"}
              </span>
              {" "}
              <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
              {" "}
            </DcLink>
            {" "}
            <DcLink href={"/portfolio"} style={{"display": "flex", "alignItems": "center", "height": "56px", "padding": "0 24px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "color": "#14161A", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
              {"See our work"}
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 7", "height": "600px", "boxSizing": "border-box", "padding": "32px", "position": "relative", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "overflow": "hidden"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            {" "}
            <span style={{"fontSize": "15px", "fontWeight": "700", "color": "#14161A"}}>
              {"From idea to launch, anywhere."}
            </span>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {" "}
              <span className={"hero--rsp-live"} style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"Sprint in progress"}
              </span>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
          <div role={"img"} aria-label={"Dotted world map with animated connections between cities"} style={{"position": "relative", "width": "720px", "height": "280px", "alignSelf": "center"}}>
            {" "}
            <img src={"/assets/bc13b4101ba484001c62ea9bfd7579c4.svg"} alt={""} style={{"position": "absolute", "top": "0", "left": "0", "width": "720px", "height": "280px", "display": "block"}} />
            {" "}
            <svg width={"720"} height={"280"} viewBox={"0 0 720 280"} aria-hidden={"true"} style={{"position": "absolute", "top": "0", "left": "0", "overflow": "visible"}}>
              <g fill={"none"} stroke={"#E7B9BF"} strokeWidth={"1.2"} strokeDasharray={"2 4"}>
                <path d={"M212 78 Q286 23 360 58"} />
                <path d={"M360 58 Q415 47 470 110"} />
                <path d={"M470 110 Q519 101 568 158"} />
                <path d={"M568 158 Q615 158 662 228"} />
                <path d={"M116 84 Q164 52 212 78"} />
                <path d={"M268 206 Q317 143 366 148"} />
                <path d={"M640 88 Q604 93 568 158"} />
                <path d={"M360 58 Q390 103 366 148"} />
              </g>
              <g fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"}>
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M212 78 Q286 23 360 58"} style={{"animationDelay": "0s"}} />
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M360 58 Q415 47 470 110"} style={{"animationDelay": "0.6s"}} />
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M470 110 Q519 101 568 158"} style={{"animationDelay": "1.2s"}} />
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M568 158 Q615 158 662 228"} style={{"animationDelay": "1.8s"}} />
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M116 84 Q164 52 212 78"} style={{"animationDelay": "2.4s"}} />
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M268 206 Q317 143 366 148"} style={{"animationDelay": "0.9s"}} />
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M640 88 Q604 93 568 158"} style={{"animationDelay": "2s"}} />
                <path className={"hero--rsp-arc"} pathLength={"100"} d={"M360 58 Q390 103 366 148"} style={{"animationDelay": "1.5s"}} />
              </g>
              <g fill={"#C2323F"}>
                <circle className={"hero--rsp-ring"} cx={"212"} cy={"78"} r={"4"} style={{"animationDelay": "0s"}} />
                <circle className={"hero--rsp-ring"} cx={"360"} cy={"58"} r={"4"} style={{"animationDelay": "0.4s"}} />
                <circle className={"hero--rsp-ring"} cx={"470"} cy={"110"} r={"4"} style={{"animationDelay": "0.8s"}} />
                <circle className={"hero--rsp-ring"} cx={"568"} cy={"158"} r={"4"} style={{"animationDelay": "1.2s"}} />
                <circle className={"hero--rsp-ring"} cx={"662"} cy={"228"} r={"4"} style={{"animationDelay": "1.6s"}} />
                <circle className={"hero--rsp-ring"} cx={"116"} cy={"84"} r={"4"} style={{"animationDelay": "2s"}} />
                <circle className={"hero--rsp-ring"} cx={"268"} cy={"206"} r={"4"} style={{"animationDelay": "0.6s"}} />
                <circle className={"hero--rsp-ring"} cx={"366"} cy={"148"} r={"4"} style={{"animationDelay": "1s"}} />
                <circle className={"hero--rsp-ring"} cx={"640"} cy={"88"} r={"4"} style={{"animationDelay": "1.4s"}} />
              </g>
              <g fill={"#C2323F"} stroke={"#FFFFFF"} strokeWidth={"2"}>
                <circle cx={"212"} cy={"78"} r={"4.5"} />
                <circle cx={"360"} cy={"58"} r={"4.5"} />
                <circle cx={"470"} cy={"110"} r={"4.5"} />
                <circle cx={"568"} cy={"158"} r={"4.5"} />
                <circle cx={"662"} cy={"228"} r={"4.5"} />
                <circle cx={"116"} cy={"84"} r={"4.5"} />
                <circle cx={"268"} cy={"206"} r={"4.5"} />
                <circle cx={"366"} cy={"148"} r={"4.5"} />
                <circle cx={"640"} cy={"88"} r={"4.5"} />
              </g>
            </svg>
            {" "}
          </div>
          {" "}
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "20px", "padding": "18px 22px", "borderRadius": "18px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 10px 24px -14px rgba(20,22,26,0.2)"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "2px", "minWidth": "112px"}}>
              {" "}
              <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"MVP sprint"}
              </span>
              {" "}
              <span style={{"fontSize": "20px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Day "}{dcStr(dcGet(S, "day"))}{" "}
                <span style={{"color": "#545A66", "fontWeight": "600", "fontSize": "15px"}}>
                  {"/ 21"}
                </span>
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"flexGrow": "1", "height": "10px", "borderRadius": "10px", "background": "#EEF0F3", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.08)", "overflow": "hidden"}}>
              {" "}
              <div style={{"height": "10px", "borderRadius": "10px", "background": "#C2323F", "width": `${dcStr(dcGet(S, "pct"))}`, "transition": "width 0.25s linear"}} />
              {" "}
            </div>
            {" "}
            <span style={{"minWidth": "110px", "textAlign": "right", "fontSize": "14px", "fontWeight": "700", "color": "#C2323F"}}>
              {dcStr(dcGet(S, "stage"))}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
    </div>
    </>
  );
};

export default function Hero(props) {
  return <Component {...props} />;
}
