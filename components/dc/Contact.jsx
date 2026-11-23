'use client';
// AUTO-GENERATED from design/Contact.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Footer from './Footer';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: 'book', day: 1, time: 2, picked: { 'Web app': true }, budget: 1 };
  }
  renderVals() {
    const on = { bg: '#C2323F', fg: '#FFFFFF', border: '#C2323F' };
    const off = { bg: '#FFFFFF', fg: '#14161A', border: '#ECEEF1' };
    const tabDefs = [
      { id: 'book', label: 'Book a call', icon: 'M3 5h18v16H3Z M3 9h18 M8 3v4 M16 3v4' },
      { id: 'message', label: 'Send a message', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z' }
    ];
    const tabs = tabDefs.map((t) => {
      const a = t.id === this.state.tab;
      return { ...t, selected: String(a), bg: a ? '#FFFFFF' : 'transparent', fg: a ? '#14161A' : '#545A66', iconInk: a ? '#C2323F' : '#7A808C', shadow: a ? '0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.25)' : 'none', pick: () => this.setState({ tab: t.id }) };
    });
    const dayList = [{ dow: 'Mon', date: '23' }, { dow: 'Tue', date: '24' }, { dow: 'Wed', date: '25' }, { dow: 'Thu', date: '26' }, { dow: 'Fri', date: '27' }];
    const timeList = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30', '20:00'];
    const days = dayList.map((d, i) => ({ ...d, ...(i === this.state.day ? on : off), pressed: String(i === this.state.day), pick: () => this.setState({ day: i }) }));
    const times = timeList.map((label, i) => ({ label, ...(i === this.state.time ? on : off), pressed: String(i === this.state.time), pick: () => this.setState({ time: i }) }));
    const services = ['MVP Sprint', 'Mobile app', 'Web app', 'Ecommerce', 'UI/UX design', 'AI integration', 'Content', 'IT consultation'].map((label) => {
      const a = !!this.state.picked[label];
      return { label, ...(a ? on : off), pressed: String(a), toggle: () => this.setState({ picked: { ...this.state.picked, [label]: !a } }) };
    });
    const budgets = ['Under $5k', '$5k–$15k', '$15k–$30k', '$30k+'].map((label, i) => ({ label, ...(i === this.state.budget ? on : off), pressed: String(i === this.state.budget), pick: () => this.setState({ budget: i }) }));
    const d = dayList[this.state.day];
    return {
      tabs, days, times, services, budgets,
      isBook: this.state.tab === 'book',
      isMessage: this.state.tab === 'message',
      summary: d.dow + ' ' + d.date + ', ' + timeList[this.state.time],
      info: [
        { label: 'Email', value: '[hello@rispit.com]', href: 'mailto:hello@rispit.com', icon: 'M3 5h18v14H3Z M3 7l9 6 9-6' },
        { label: 'WhatsApp', value: '[+94 00 000 0000]', href: '#whatsapp', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z' },
        { label: 'Location', value: 'Jaffna, Sri Lanka', href: '#map', icon: 'M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z M12 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z' },
        { label: 'Reply time', value: '[Within 1 working day]', href: '#contact', icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2' }
      ],
      next: [
        { n: '1', title: 'We talk', text: 'A 20-minute call about your idea, your users and your goals.' },
        { n: '2', title: 'You get a plan', text: 'A clear scope, timeline and price for your first version, usually within a few days.' },
        { n: '3', title: 'We start building', text: 'Once you are happy with the plan, we kick off and you see progress every week.' }
      ]
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-contact">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={""} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "340px", "boxSizing": "border-box", "padding": "16px 24px 16px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "44px 48px", "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px", "maxWidth": "780px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"Contact"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "58px", "lineHeight": "1.04", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Let's build something "}
              <span style={{"color": "#C2323F"}}>
                {"great together."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"Book a 20-minute call or send us a message. Tell us about your idea and we'll help you plan the right first version."}
            </p>
            {" "}
          </div>
          {" "}
          <span style={{"flexShrink": "0", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "12px 18px", "borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "fontSize": "14px", "fontWeight": "700"}}>
            {" "}
            <span className={"contact--rsp-dot"} style={{"width": "10px", "height": "10px", "borderRadius": "10px", "background": "#2E9E5B"}} />
            {" "}
            <span>
              {"Taking on new projects"}
            </span>
            {" "}
          </span>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "820px", "boxSizing": "border-box", "padding": "0 24px 24px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "16px"}}>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 7", "boxSizing": "border-box", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "24px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div role={"tablist"} aria-label={"How would you like to reach us?"} style={{"alignSelf": "flex-start", "display": "flex", "gap": "6px", "padding": "6px", "borderRadius": "16px", "background": "#EEF0F3", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.08)"}}>
            {" "}
            {dcList(dcGet(S, "tabs")).map((__it, __i) => { const S6 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <button type={"button"} role={"tab"} aria-selected={dcGet(S6, "t.selected")} onClick={dcGet(S6, "t.pick")} style={{"height": "46px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 18px", "border": "none", "borderRadius": "12px", "background": `${dcStr(dcGet(S6, "t.bg"))}`, "boxShadow": `${dcStr(dcGet(S6, "t.shadow"))}`, "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "700", "color": `${dcStr(dcGet(S6, "t.fg"))}`, "cursor": "pointer"}}>
                  {" "}
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S6, "t.iconInk")} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S6, "t.icon")} />
                  </svg>
                  {" "}
                  <span>
                    {dcStr(dcGet(S6, "t.label"))}
                  </span>
                  {" "}
                </button>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
          {" "}
          {dcTruthy(dcGet(S, "isBook")) ? (<>
            {" "}
            <div style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
                  {" "}
                  <span style={{"fontSize": "24px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                    {"Pick a time for your call"}
                  </span>
                  {" "}
                  <span style={{"fontSize": "14px", "fontWeight": "600", "color": "#545A66"}}>
                    {"20 minutes · Video call · Times shown in your time zone"}
                  </span>
                  {" "}
                </div>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                  {" "}
                  <button type={"button"} aria-label={"Previous week"} style={{"width": "40px", "height": "40px", "borderRadius": "12px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer"}}>
                    <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={"M15 6l-6 6 6 6"} />
                    </svg>
                  </button>
                  {" "}
                  <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                    {"November 2026"}
                  </span>
                  {" "}
                  <button type={"button"} aria-label={"Next week"} style={{"width": "40px", "height": "40px", "borderRadius": "12px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer"}}>
                    <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </button>
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(5, minmax(0, 1fr))", "gap": "10px"}}>
                {" "}
                {dcList(dcGet(S, "days")).map((__it, __i) => { const S8 = { ...S, "d": __it, $index: __i }; return (<React.Fragment key={__i}>
                    {" "}
                    <button type={"button"} onClick={dcGet(S8, "d.pick")} aria-pressed={dcGet(S8, "d.pressed")} style={{"height": "78px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "2px", "borderRadius": "16px", "border": `1.5px solid ${dcStr(dcGet(S8, "d.border"))}`, "background": `${dcStr(dcGet(S8, "d.bg"))}`, "color": `${dcStr(dcGet(S8, "d.fg"))}`, "fontFamily": "inherit", "cursor": "pointer", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)"}}>
                      {" "}
                      <span style={{"fontSize": "12px", "fontWeight": "700"}}>
                        {dcStr(dcGet(S8, "d.dow"))}
                      </span>
                      {" "}
                      <span style={{"fontSize": "24px", "fontWeight": "800"}}>
                        {dcStr(dcGet(S8, "d.date"))}
                      </span>
                      {" "}
                    </button>
                    {" "}
                  </React.Fragment>); })}
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "10px"}}>
                {" "}
                {dcList(dcGet(S, "times")).map((__it, __i) => { const S8 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                    {" "}
                    <button type={"button"} onClick={dcGet(S8, "t.pick")} aria-pressed={dcGet(S8, "t.pressed")} style={{"height": "50px", "borderRadius": "14px", "border": `1.5px solid ${dcStr(dcGet(S8, "t.border"))}`, "background": `${dcStr(dcGet(S8, "t.bg"))}`, "color": `${dcStr(dcGet(S8, "t.fg"))}`, "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "700", "cursor": "pointer"}}>
                      {dcStr(dcGet(S8, "t.label"))}
                    </button>
                    {" "}
                  </React.Fragment>); })}
                {" "}
              </div>
              {" "}
              <DcLink href={"/thank-you"} style={{"marginTop": "auto", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "60px", "borderRadius": "18px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "17px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 12px 24px -10px rgba(194,50,63,0.7)"}}>
                {" "}
                <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
                {" "}
                <span>
                  {"Book a call with Siva · "}{dcStr(dcGet(S, "summary"))}
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
          </>) : null}
          {" "}
          {" "}
          {dcTruthy(dcGet(S, "isMessage")) ? (<>
            {" "}
            <form style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "16px"}} onSubmit={dcFormSubmit}>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "12px"}}>
                {" "}
                <label style={{"display": "flex", "flexDirection": "column", "gap": "8px", "fontSize": "13px", "fontWeight": "700"}}>
                  {"Your name "}
                  <input type={"text"} placeholder={"Jane Perera"} style={{"height": "52px", "padding": "0 16px", "borderRadius": "14px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "color": "#14161A", "outline": "none"}} />
                  {" "}
                </label>
                {" "}
                <label style={{"display": "flex", "flexDirection": "column", "gap": "8px", "fontSize": "13px", "fontWeight": "700"}}>
                  {"Email "}
                  <input type={"email"} placeholder={"you@company.com"} style={{"height": "52px", "padding": "0 16px", "borderRadius": "14px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "color": "#14161A", "outline": "none"}} />
                  {" "}
                </label>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                {" "}
                <span style={{"fontSize": "13px", "fontWeight": "700"}}>
                  {"What do you need?"}
                </span>
                {" "}
                <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
                  {" "}
                  {dcList(dcGet(S, "services")).map((__it, __i) => { const S9 = { ...S, "s": __it, $index: __i }; return (<React.Fragment key={__i}>
                      {" "}
                      <button type={"button"} onClick={dcGet(S9, "s.toggle")} aria-pressed={dcGet(S9, "s.pressed")} style={{"height": "40px", "padding": "0 14px", "borderRadius": "12px", "border": `1.5px solid ${dcStr(dcGet(S9, "s.border"))}`, "background": `${dcStr(dcGet(S9, "s.bg"))}`, "color": `${dcStr(dcGet(S9, "s.fg"))}`, "fontFamily": "inherit", "fontSize": "13px", "fontWeight": "700", "cursor": "pointer"}}>
                        {dcStr(dcGet(S9, "s.label"))}
                      </button>
                      {" "}
                    </React.Fragment>); })}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                {" "}
                <span style={{"fontSize": "13px", "fontWeight": "700"}}>
                  {"Budget"}
                </span>
                {" "}
                <div style={{"display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "8px"}}>
                  {" "}
                  {dcList(dcGet(S, "budgets")).map((__it, __i) => { const S9 = { ...S, "b": __it, $index: __i }; return (<React.Fragment key={__i}>
                      {" "}
                      <button type={"button"} onClick={dcGet(S9, "b.pick")} aria-pressed={dcGet(S9, "b.pressed")} style={{"height": "44px", "borderRadius": "12px", "border": `1.5px solid ${dcStr(dcGet(S9, "b.border"))}`, "background": `${dcStr(dcGet(S9, "b.bg"))}`, "color": `${dcStr(dcGet(S9, "b.fg"))}`, "fontFamily": "inherit", "fontSize": "13px", "fontWeight": "700", "cursor": "pointer"}}>
                        {dcStr(dcGet(S9, "b.label"))}
                      </button>
                      {" "}
                    </React.Fragment>); })}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <label style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "8px", "fontSize": "13px", "fontWeight": "700"}}>
                {"Tell us about your idea "}
                <textarea placeholder={"What are you building, who is it for, and when would you like to launch?"} style={{"flexGrow": "1", "minHeight": "120px", "padding": "14px 16px", "borderRadius": "14px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "15px", "fontWeight": "600", "lineHeight": "1.5", "color": "#14161A", "resize": "none", "outline": "none"}} />
                {" "}
              </label>
              {" "}
              <DcLink href={"/thank-you"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "10px", "height": "58px", "borderRadius": "18px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "17px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 12px 24px -10px rgba(194,50,63,0.7)"}}>
                {" "}
                <span>
                  {"Send message"}
                </span>
                {" "}
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M22 2L11 13 M22 2l-7 20-4-9-9-4Z"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
            </form>
            {" "}
          </>) : null}
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 5", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
          {" "}
          <div style={{"boxSizing": "border-box", "padding": "28px", "display": "flex", "alignItems": "center", "gap": "18px", "borderRadius": "28px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25), 0 24px 48px -24px rgba(194,50,63,0.6)"}}>
            {" "}
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={"Rispit founder"} style={{"width": "84px", "height": "84px", "flexShrink": "0", "display": "block", "borderRadius": "24px", "objectFit": "cover", "border": "3px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
              {" "}
              <span style={{"fontSize": "21px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"Talk directly with the founder."}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "fontWeight": "500", "color": "#FFFFFF"}}>
                {"No sales team, no hand-offs. You'll speak with the person who will plan your product."}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {dcList(dcGet(S, "info")).map((__it, __i) => { const S5 = { ...S, "i": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={dcGet(S5, "i.href")} style={{"boxSizing": "border-box", "padding": "22px 24px", "display": "flex", "alignItems": "center", "gap": "16px", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)", "textDecoration": "none", "color": "#14161A"}}>
                {" "}
                <span style={{"width": "52px", "height": "52px", "flexShrink": "0", "borderRadius": "16px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S5, "i.icon")} />
                  </svg>
                  {" "}
                </span>
                {" "}
                <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "3px"}}>
                  {" "}
                  <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                    {dcStr(dcGet(S5, "i.label"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S5, "i.value"))}
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
          <div style={{"flexGrow": "1", "boxSizing": "border-box", "padding": "22px 24px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderRadius": "22px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04)"}}>
            {" "}
            <span style={{"fontSize": "15px", "fontWeight": "800"}}>
              {"Follow us"}
            </span>
            {" "}
            <span style={{"display": "flex", "gap": "8px"}}>
              {" "}
              <DcLink href={"#linkedin"} aria-label={"LinkedIn"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"} />
                  <rect x={"2"} y={"9"} width={"4"} height={"12"} />
                  <circle cx={"4"} cy={"4"} r={"2"} />
                </svg>
              </DcLink>
              {" "}
              <DcLink href={"#instagram"} aria-label={"Instagram"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"5"} />
                  <circle cx={"12"} cy={"12"} r={"4"} />
                  <path d={"M17.5 6.5h.01"} />
                </svg>
              </DcLink>
              {" "}
              <DcLink href={"#x"} aria-label={"X"} style={{"width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.2"} strokeLinecap={"round"} aria-hidden={"true"}>
                  <path d={"M4 4l16 16M20 4L4 20"} />
                </svg>
              </DcLink>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "380px", "boxSizing": "border-box", "padding": "72px 24px 24px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "0 48px", "display": "flex", "alignItems": "center", "gap": "40px", "borderRadius": "28px", "background": "#14161A", "color": "#FFFFFF", "boxShadow": "0 24px 48px -24px rgba(20,22,26,0.6)"}}>
          {" "}
          <div style={{"flexShrink": "0", "width": "260px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#E7B9BF"}}>
              {"What happens next"}
            </span>
            {" "}
            <span style={{"fontSize": "28px", "lineHeight": "1.2", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
              {"From hello to building, in three steps."}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"flexGrow": "1", "display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "14px"}}>
            {" "}
            {dcList(dcGet(S, "next")).map((__it, __i) => { const S6 = { ...S, "n": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <div style={{"padding": "24px", "borderRadius": "20px", "background": "rgba(255,255,255,0.06)", "border": "1px solid rgba(255,255,255,0.12)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                  {" "}
                  <span style={{"width": "40px", "height": "40px", "borderRadius": "12px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S6, "n.n"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "18px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S6, "n.title"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "14px", "lineHeight": "1.55", "fontWeight": "500", "color": "#C9CCD3"}}>
                    {dcStr(dcGet(S6, "n.text"))}
                  </span>
                  {" "}
                </div>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
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

export default function Contact(props) {
  return <Component {...props} />;
}
