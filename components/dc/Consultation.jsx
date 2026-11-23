'use client';
// AUTO-GENERATED from design/Consultation.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { day: 1, time: 2 };
  }
  renderVals() {
    const dayList = [
      { dow: 'Mon', date: '23' }, { dow: 'Tue', date: '24' }, { dow: 'Wed', date: '25' },
      { dow: 'Thu', date: '26' }, { dow: 'Fri', date: '27' }
    ];
    const timeList = ['10:00', '11:30', '14:00', '15:30', '17:00', '18:30'];
    const on = { bg: '#C2323F', fg: '#FFFFFF', border: '#C2323F' };
    const off = { bg: '#FFFFFF', fg: '#14161A', border: '#ECEEF1' };
    const days = dayList.map((d, i) => {
      const s = i === this.state.day ? on : off;
      return { ...d, ...s, pressed: String(i === this.state.day), pick: () => this.setState({ day: i }) };
    });
    const times = timeList.map((label, i) => {
      const s = i === this.state.time ? on : off;
      return { label, ...s, pressed: String(i === this.state.time), pick: () => this.setState({ time: i }) };
    });
    const d = dayList[this.state.day];
    return { days, times, summary: d.dow + ' ' + d.date + ', ' + timeList[this.state.time] };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section id={"contact"} style={{"width": "100%", "height": "680px", "boxSizing": "border-box", "padding": "72px 24px 24px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-consultation">
      {" "}
      <div style={{"height": "100%", "boxSizing": "border-box", "padding": "56px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "48px", "alignItems": "center", "borderRadius": "32px", "background": "#C2323F", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -2px 0 rgba(0,0,0,0.08), 0 24px 48px -24px rgba(194,50,63,0.6)", "overflow": "hidden"}}>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 7", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "24px", "color": "#FFFFFF"}}>
          {" "}
          <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 12px", "borderRadius": "999px", "background": "rgba(255,255,255,0.16)", "border": "1px solid rgba(255,255,255,0.25)", "fontSize": "13px", "fontWeight": "700"}}>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <circle cx={"12"} cy={"12"} r={"9"} />
              <path d={"M12 7v5l3 2"} />
            </svg>
            {" "}
            <span>
              {"20-minute consultation"}
            </span>
            {" "}
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "54px", "lineHeight": "1.06", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Let's turn your idea into a clear plan."}
          </h2>
          {" "}
          <p style={{"margin": "0", "maxWidth": "560px", "fontSize": "18px", "lineHeight": "1.6", "fontWeight": "500", "color": "#FFFFFF"}}>
            {"Book a 20-minute call with me. We'll talk through your idea and work out the best first version to build."}
          </p>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "fontSize": "16px", "fontWeight": "600"}}>
              {" "}
              <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "rgba(255,255,255,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              {" "}
              <span>
                {"Talk through your idea and goals"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "fontSize": "16px", "fontWeight": "600"}}>
              {" "}
              <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "rgba(255,255,255,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              {" "}
              <span>
                {"Get a clear scope for your MVP"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "12px", "fontSize": "16px", "fontWeight": "600"}}>
              {" "}
              <span style={{"width": "26px", "height": "26px", "borderRadius": "8px", "background": "rgba(255,255,255,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 13l4 4L19 7"} />
                </svg>
              </span>
              {" "}
              <span>
                {"Leave with a timeline and next steps"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px", "paddingTop": "8px"}}>
            {" "}
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={"Rispit founder"} style={{"width": "60px", "height": "60px", "display": "block", "borderRadius": "18px", "objectFit": "cover", "border": "3px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              {" "}
              <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                {"Siva"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "fontWeight": "600", "color": "#FBECEE"}}>
                {"Founder, Rispit"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 5", "boxSizing": "border-box", "padding": "28px", "display": "flex", "flexDirection": "column", "gap": "20px", "borderRadius": "24px", "background": "#FFFFFF", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 24px 48px -20px rgba(60,10,16,0.45)"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            {" "}
            <span style={{"fontSize": "20px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"Pick a time"}
            </span>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 12px", "borderRadius": "999px", "background": "#FBECEE", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
              {" "}
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A3242F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M15 10l5-3v10l-5-3Z"} />
                <rect x={"3"} y={"6"} width={"12"} height={"12"} rx={"2"} />
              </svg>
              {" "}
              <span>
                {"20 min · Video call"}
              </span>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Day"}
            </span>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(5, minmax(0, 1fr))", "gap": "8px"}}>
              {" "}
              {dcList(dcGet(S, "days")).map((__it, __i) => { const S7 = { ...S, "d": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <button type={"button"} onClick={dcGet(S7, "d.pick")} aria-pressed={dcGet(S7, "d.pressed")} style={{"height": "64px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "2px", "borderRadius": "14px", "border": `1.5px solid ${dcStr(dcGet(S7, "d.border"))}`, "background": `${dcStr(dcGet(S7, "d.bg"))}`, "color": `${dcStr(dcGet(S7, "d.fg"))}`, "fontFamily": "inherit", "cursor": "pointer", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)"}}>
                    {" "}
                    <span style={{"fontSize": "11px", "fontWeight": "700"}}>
                      {dcStr(dcGet(S7, "d.dow"))}
                    </span>
                    {" "}
                    <span style={{"fontSize": "19px", "fontWeight": "800"}}>
                      {dcStr(dcGet(S7, "d.date"))}
                    </span>
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"Time"}
            </span>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "8px"}}>
              {" "}
              {dcList(dcGet(S, "times")).map((__it, __i) => { const S7 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <button type={"button"} onClick={dcGet(S7, "t.pick")} aria-pressed={dcGet(S7, "t.pressed")} style={{"height": "44px", "borderRadius": "12px", "border": `1.5px solid ${dcStr(dcGet(S7, "t.border"))}`, "background": `${dcStr(dcGet(S7, "t.bg"))}`, "color": `${dcStr(dcGet(S7, "t.fg"))}`, "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "cursor": "pointer"}}>
                    {dcStr(dcGet(S7, "t.label"))}
                  </button>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
              {"Times are shown in your local time zone."}
            </span>
            {" "}
          </div>
          {" "}
          <DcLink href={"/thank-you"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "56px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
            {" "}
            <span>
              {"Book my call · "}{dcStr(dcGet(S, "summary"))}
            </span>
            {" "}
            <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
            {" "}
          </DcLink>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
};

export default function Consultation(props) {
  return <Component {...props} />;
}
