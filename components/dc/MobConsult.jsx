'use client';
// AUTO-GENERATED from design/MobConsult.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { day: 1, time: 3 };
  }
  renderVals() {
    const dayList = [{ dow: 'Mon', date: '23' }, { dow: 'Tue', date: '24' }, { dow: 'Wed', date: '25' }, { dow: 'Thu', date: '26' }, { dow: 'Fri', date: '27' }];
    const timeList = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];
    const on = { bg: '#C2323F', fg: '#FFFFFF', border: '#C2323F' };
    const off = { bg: '#FFFFFF', fg: '#14161A', border: '#ECEEF1' };
    const days = dayList.map((d, i) => ({ ...d, ...(i === this.state.day ? on : off), pressed: String(i === this.state.day), pick: () => this.setState({ day: i }) }));
    const times = timeList.map((label, i) => ({ label, ...(i === this.state.time ? on : off), pressed: String(i === this.state.time), pick: () => this.setState({ time: i }) }));
    const d = dayList[this.state.day];
    return { days, times, summary: d.dow + ' ' + d.date + ' Nov, ' + timeList[this.state.time] };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section id={"contact"} style={{"width": "100%", "height": "980px", "boxSizing": "border-box", "padding": "48px 16px 16px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobconsult">
      {" "}
      <div style={{"height": "100%", "boxSizing": "border-box", "padding": "26px 20px 20px", "display": "flex", "flexDirection": "column", "gap": "18px", "borderRadius": "28px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25), 0 24px 48px -24px rgba(194,50,63,0.6)"}}>
        {" "}
        <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "rgba(255,255,255,0.16)", "border": "1px solid rgba(255,255,255,0.25)", "fontSize": "12px", "fontWeight": "700"}}>
          {" "}
          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2"} />
          </svg>
          {" "}
          <span>
            {"20-minute consultation"}
          </span>
          {" "}
        </span>
        {" "}
        <h2 style={{"margin": "0", "fontSize": "32px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
          {"Let's turn your idea into a clear plan."}
        </h2>
        {" "}
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "fontWeight": "500"}}>
          {"Book a 20-minute call with me. We'll talk through your idea and work out the best first version to build."}
        </p>
        {" "}
        <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
          {" "}
          <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={"Siva, founder of Rispit"} style={{"width": "52px", "height": "52px", "display": "block", "borderRadius": "16px", "objectFit": "cover", "border": "3px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
          {" "}
          <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
            <span style={{"fontSize": "16px", "fontWeight": "800"}}>
              {"Siva"}
            </span>
            <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#FBECEE"}}>
              {"Founder, Rispit"}
            </span>
          </span>
          {" "}
        </div>
        {" "}
        <div style={{"flexGrow": "1", "boxSizing": "border-box", "padding": "20px 16px 16px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "22px", "background": "#FFFFFF", "color": "#14161A", "boxShadow": "0 24px 48px -20px rgba(60,10,16,0.45)"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
            {" "}
            <span style={{"fontSize": "18px", "fontWeight": "800"}}>
              {"Pick a time"}
            </span>
            {" "}
            <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FBECEE", "color": "#A3242F", "fontSize": "11px", "fontWeight": "700"}}>
              {"20 min · Video"}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(5, minmax(0, 1fr))", "gap": "6px"}}>
            {" "}
            {dcList(dcGet(S, "days")).map((__it, __i) => { const S6 = { ...S, "d": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <button type={"button"} onClick={dcGet(S6, "d.pick")} aria-pressed={dcGet(S6, "d.pressed")} style={{"height": "60px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "1px", "borderRadius": "13px", "border": `1.5px solid ${dcStr(dcGet(S6, "d.border"))}`, "background": `${dcStr(dcGet(S6, "d.bg"))}`, "color": `${dcStr(dcGet(S6, "d.fg"))}`, "fontFamily": "inherit", "cursor": "pointer"}}>
                  {" "}
                  <span style={{"fontSize": "11px", "fontWeight": "700"}}>
                    {dcStr(dcGet(S6, "d.dow"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "18px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S6, "d.date"))}
                  </span>
                  {" "}
                </button>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "6px"}}>
            {" "}
            {dcList(dcGet(S, "times")).map((__it, __i) => { const S6 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <button type={"button"} onClick={dcGet(S6, "t.pick")} aria-pressed={dcGet(S6, "t.pressed")} style={{"height": "44px", "borderRadius": "12px", "border": `1.5px solid ${dcStr(dcGet(S6, "t.border"))}`, "background": `${dcStr(dcGet(S6, "t.bg"))}`, "color": `${dcStr(dcGet(S6, "t.fg"))}`, "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "cursor": "pointer"}}>
                  {dcStr(dcGet(S6, "t.label"))}
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
          <DcLink href={"/thank-you"} style={{"marginTop": "auto", "display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 14px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
            {" "}
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            {" "}
            <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span>
                {"Book a call with Siva"}
              </span>
              <span style={{"fontSize": "12px", "fontWeight": "600", "opacity": "0.85"}}>
                {dcStr(dcGet(S, "summary"))}
              </span>
            </span>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
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

export default function MobConsult(props) {
  return <Component {...props} />;
}
