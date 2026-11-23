'use client';
// AUTO-GENERATED from design/MobContact.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';
import DC_MobFooter from './MobFooter';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {"tab": "book", "day": 1, "time": 3, "picked": {"Web app": true}};
  }
  renderVals() {
    const on = { bg: '#C2323F', fg: '#FFFFFF', border: '#C2323F' };
    const off = { bg: '#FFFFFF', fg: '#14161A', border: '#ECEEF1' };
    const tabs = [{ id: 'book', label: 'Book a call', icon: 'M3 5h18v16H3Z M3 9h18 M8 3v4 M16 3v4' }, { id: 'message', label: 'Message', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z' }].map((t) => {
      const a = t.id === this.state.tab;
      return { ...t, selected: String(a), bg: a ? '#FFFFFF' : 'transparent', fg: a ? '#14161A' : '#545A66', ink: a ? '#C2323F' : '#7A808C', shadow: a ? '0 4px 10px -6px rgba(20,22,26,0.3)' : 'none', pick: () => this.setState({ tab: t.id }) };
    });
    const dl = [{ dow: 'Mon', date: '23' }, { dow: 'Tue', date: '24' }, { dow: 'Wed', date: '25' }, { dow: 'Thu', date: '26' }, { dow: 'Fri', date: '27' }];
    const tl = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];
    const days = dl.map((d, i) => ({ ...d, ...(i === this.state.day ? on : off), pressed: String(i === this.state.day), pick: () => this.setState({ day: i }) }));
    const times = tl.map((label, i) => ({ label, ...(i === this.state.time ? on : off), pressed: String(i === this.state.time), pick: () => this.setState({ time: i }) }));
    const services = ['MVP Sprint', 'Mobile app', 'Web app', 'Ecommerce', 'UI/UX', 'AI', 'Content', 'IT consultation'].map((label) => {
      const a = !!this.state.picked[label];
      return { label, ...(a ? on : off), pressed: String(a), toggle: () => this.setState({ picked: { ...this.state.picked, [label]: !a } }) };
    });
    const d = dl[this.state.day];
    return { tabs, days, times, services, isBook: this.state.tab === 'book', isMessage: this.state.tab === 'message', summary: d.dow + ' ' + d.date + ' Nov, ' + tl[this.state.time] };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobcontact">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={""} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"Contact"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "38px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Let's build something "}
            <span style={{"color": "#C2323F"}}>
              {"great together."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Book a 20-minute call or send us a message. Tell us about your idea and we'll help you plan the right first version."}
          </p>
          {" "}
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 14px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700"}}>
            <span style={{"width": "9px", "height": "9px", "borderRadius": "9px", "background": "#2E9E5B"}} />
            {"Taking on new projects"}
          </span>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "12px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "16px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div role={"tablist"} aria-label={"How would you like to reach us?"} style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "6px", "padding": "6px", "borderRadius": "16px", "background": "#EEF0F3"}}>
            {" "}
            {dcList(dcGet(S, "tabs")).map((__it, __i) => { const S6 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <button type={"button"} role={"tab"} aria-selected={dcGet(S6, "t.selected")} onClick={dcGet(S6, "t.pick")} style={{"height": "46px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "6px", "border": "none", "borderRadius": "12px", "background": `${dcStr(dcGet(S6, "t.bg"))}`, "boxShadow": `${dcStr(dcGet(S6, "t.shadow"))}`, "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": `${dcStr(dcGet(S6, "t.fg"))}`, "cursor": "pointer"}}>
                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S6, "t.ink")} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S6, "t.icon")} />
                  </svg>
                  <span>
                    {dcStr(dcGet(S6, "t.label"))}
                  </span>
                </button>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
          {dcTruthy(dcGet(S, "isBook")) ? (<>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
              {" "}
              <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                <span style={{"fontSize": "20px", "fontWeight": "800"}}>
                  {"Pick a time"}
                </span>
                <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                  {"20 min · Video call · Your time zone"}
                </span>
              </span>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(5, minmax(0, 1fr))", "gap": "6px"}}>
                {dcList(dcGet(S, "days")).map((__it, __i) => { const S8 = { ...S, "d": __it, $index: __i }; return (<React.Fragment key={__i}>
                    <button type={"button"} onClick={dcGet(S8, "d.pick")} aria-pressed={dcGet(S8, "d.pressed")} style={{"height": "62px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "1px", "borderRadius": "13px", "border": `1.5px solid ${dcStr(dcGet(S8, "d.border"))}`, "background": `${dcStr(dcGet(S8, "d.bg"))}`, "color": `${dcStr(dcGet(S8, "d.fg"))}`, "fontFamily": "inherit", "cursor": "pointer"}}>
                      <span style={{"fontSize": "11px", "fontWeight": "700"}}>
                        {dcStr(dcGet(S8, "d.dow"))}
                      </span>
                      <span style={{"fontSize": "19px", "fontWeight": "800"}}>
                        {dcStr(dcGet(S8, "d.date"))}
                      </span>
                    </button>
                  </React.Fragment>); })}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "6px"}}>
                {dcList(dcGet(S, "times")).map((__it, __i) => { const S8 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                    <button type={"button"} onClick={dcGet(S8, "t.pick")} aria-pressed={dcGet(S8, "t.pressed")} style={{"height": "46px", "borderRadius": "12px", "border": `1.5px solid ${dcStr(dcGet(S8, "t.border"))}`, "background": `${dcStr(dcGet(S8, "t.bg"))}`, "color": `${dcStr(dcGet(S8, "t.fg"))}`, "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "cursor": "pointer"}}>
                      {dcStr(dcGet(S8, "t.label"))}
                    </button>
                  </React.Fragment>); })}
              </div>
              {" "}
              <DcLink href={"/thank-you"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "58px", "padding": "0 14px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
                <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "46px", "height": "46px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
                <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "1px"}}>
                  <span>
                    {"Book a call with Siva"}
                  </span>
                  <span style={{"fontSize": "12px", "fontWeight": "600", "opacity": ".85"}}>
                    {dcStr(dcGet(S, "summary"))}
                  </span>
                </span>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 12h14M13 5l7 7-7 7"} />
                </svg>
              </DcLink>
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          {dcTruthy(dcGet(S, "isMessage")) ? (<>
            {" "}
            <form style={{"display": "flex", "flexDirection": "column", "gap": "12px"}} onSubmit={dcFormSubmit}>
              {" "}
              <label style={{"display": "flex", "flexDirection": "column", "gap": "6px", "fontSize": "13px", "fontWeight": "700"}}>
                {"Your name"}
                <input type={"text"} placeholder={"Jane Perera"} style={{"height": "50px", "padding": "0 14px", "borderRadius": "13px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "outline": "none"}} />
              </label>
              {" "}
              <label style={{"display": "flex", "flexDirection": "column", "gap": "6px", "fontSize": "13px", "fontWeight": "700"}}>
                {"Email"}
                <input type={"email"} placeholder={"you@company.com"} style={{"height": "50px", "padding": "0 14px", "borderRadius": "13px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "outline": "none"}} />
              </label>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "700"}}>
                {"What do you need?"}
              </span>
              {" "}
              <div style={{"display": "flex", "flexWrap": "wrap", "gap": "6px"}}>
                {dcList(dcGet(S, "services")).map((__it, __i) => { const S8 = { ...S, "s": __it, $index: __i }; return (<React.Fragment key={__i}>
                    <button type={"button"} onClick={dcGet(S8, "s.toggle")} aria-pressed={dcGet(S8, "s.pressed")} style={{"height": "38px", "padding": "0 12px", "borderRadius": "11px", "border": `1.5px solid ${dcStr(dcGet(S8, "s.border"))}`, "background": `${dcStr(dcGet(S8, "s.bg"))}`, "color": `${dcStr(dcGet(S8, "s.fg"))}`, "fontFamily": "inherit", "fontSize": "12px", "fontWeight": "700", "cursor": "pointer"}}>
                      {dcStr(dcGet(S8, "s.label"))}
                    </button>
                  </React.Fragment>); })}
              </div>
              {" "}
              <label style={{"display": "flex", "flexDirection": "column", "gap": "6px", "fontSize": "13px", "fontWeight": "700"}}>
                {"Tell us about your idea"}
                <textarea placeholder={"What are you building, who is it for, and when would you like to launch?"} style={{"minHeight": "120px", "padding": "12px 14px", "borderRadius": "13px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "lineHeight": "1.5", "resize": "none", "outline": "none"}} />
              </label>
              {" "}
              <DcLink href={"/thank-you"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "56px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
                {"Send message"}
                <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M22 2L11 13 M22 2l-7 20-4-9-9-4Z"} />
                </svg>
              </DcLink>
              {" "}
            </form>
            {" "}
          </>) : null}
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "28px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "24px", "background": "#C2323F", "color": "#FFFFFF"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={"Siva, founder of Rispit"} style={{"width": "64px", "height": "64px", "display": "block", "borderRadius": "20px", "objectFit": "cover", "border": "3px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            <span style={{"fontSize": "19px", "lineHeight": "1.25", "fontWeight": "800"}}>
              {"Talk directly with Siva, the founder."}
            </span>
          </div>
          <span style={{"fontSize": "14px", "lineHeight": "1.5", "fontWeight": "500"}}>
            {"No sales team, no hand-offs. You'll speak with the person who will plan your product."}
          </span>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 5h18v14H3Z M3 7l9 6 9-6"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Email"}
              </span>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"[hello@rispit.com]"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"WhatsApp"}
              </span>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"[+94 00 000 0000]"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z M12 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Location"}
              </span>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Jaffna, Sri Lanka"}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"Reply time"}
              </span>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"[Within 1 working day]"}
              </span>
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 16px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#14161A", "color": "#FFFFFF"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#E7B9BF"}}>
            {"What happens next"}
          </span>
          <span style={{"fontSize": "24px", "lineHeight": "1.2", "fontWeight": "800"}}>
            {"From hello to building, in three steps."}
          </span>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "18px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "15px", "fontWeight": "800"}}>
              {"1"}
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"We talk"}
              </span>
              <span style={{"fontSize": "13px", "lineHeight": "1.5", "color": "#C9CCD3", "fontWeight": "500"}}>
                {"A 20-minute call about your idea, your users and your goals."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "18px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "15px", "fontWeight": "800"}}>
              {"2"}
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"You get a plan"}
              </span>
              <span style={{"fontSize": "13px", "lineHeight": "1.5", "color": "#C9CCD3", "fontWeight": "500"}}>
                {"A clear scope, timeline and price for your first version."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "18px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)"}}>
            <span style={{"width": "38px", "height": "38px", "flexShrink": "0", "borderRadius": "12px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "15px", "fontWeight": "800"}}>
              {"3"}
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"We start building"}
              </span>
              <span style={{"fontSize": "13px", "lineHeight": "1.5", "color": "#C9CCD3", "fontWeight": "500"}}>
                {"You see progress every week from the first sprint."}
              </span>
            </span>
          </div>
        </div>
      </section>
      {" "}
      <DC_MobFooter  />
      {" "}
    </div>
    </>
  );
};

export default function MobContact(props) {
  return <Component {...props} />;
}
