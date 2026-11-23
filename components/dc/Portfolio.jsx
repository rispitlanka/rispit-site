'use client';
// AUTO-GENERATED from design/Portfolio.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Consultation from './Consultation';
import DC_Footer from './Footer';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { filter: 'All' };
  }
  renderVals() {
    const CI = {
      'All': 'M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z',
      'Mobile apps': 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2',
      'Web apps': 'M2 4h20v16H2Z M2 9h20',
      'AI': 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z',
      'SaaS': 'M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 18h11.5Z',
      'Our products': 'M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21.1l1.4-7L2 9.3l7-.8Z'
    };
    const all = [
      { name: 'Lumora Analytics', group: 'Web apps', type: 'Web app', industry: 'Analytics · Sales', text: 'A sales dashboard that brings a team’s numbers into one clear, real-time view.' },
      { name: 'Orbitly Assist', group: 'AI', type: 'AI assistant', industry: 'E-commerce · Support', text: 'An AI support assistant that answers customer questions around the clock.' },
      { name: 'Rispit Flow', group: 'Our products', type: 'Our product', industry: 'Productivity · SaaS', text: 'A simple sprint board that helps small product teams plan and ship every week.', own: true },
      { name: 'Fernway', group: 'Web apps', type: 'Web app', industry: 'Travel · Booking', text: 'A trip-planning platform that turns scattered bookings into one simple itinerary.' },
      { name: 'Quantix', group: 'SaaS', type: 'SaaS platform', industry: 'Finance · B2B', text: 'An invoicing tool for small agencies, from quote to paid in a few clicks.' },
      { name: 'Brightpath', group: 'Mobile apps', type: 'Mobile app', industry: 'Education', text: 'A learning app with short daily lessons and progress tracking for students.' }
    ];
    const sel = this.state.filter;
    const list = sel === 'All' ? all : all.filter((c) => c.group === sel);
    const pattern = [7, 5, 5, 7, 7, 5];
    const cases = list.map((c, i) => ({
      ...c,
      icon: CI[c.group],
      span: list.length === 1 ? 12 : pattern[i % pattern.length],
      bg: i % 2 === 0 ? '#EEF1F5' : '#FBECEE',
      phInk: i % 2 === 0 ? '#A0A5AF' : '#D59AA2',
      phLabel: i % 2 === 0 ? '#6B717D' : '#A3242F',
      badge: c.own ? 'Our product' : 'Client project',
      badgeBg: c.own ? '#C2323F' : '#14161A',
      badgeFg: '#FFFFFF'
    }));
    const filters = ['All', 'Mobile apps', 'Web apps', 'AI', 'SaaS', 'Our products'].map((label) => {
      const on = label === sel;
      return {
        label, icon: CI[label], selected: String(on),
        bg: on ? '#FFFFFF' : 'transparent',
        fg: on ? '#14161A' : '#545A66',
        iconInk: on ? '#C2323F' : '#7A808C',
        shadow: on ? '0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.25)' : 'none',
        pick: () => this.setState({ filter: label })
      };
    });
    return { filters, cases };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-portfolio">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={"Portfolio"} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "360px", "boxSizing": "border-box", "padding": "16px 24px 24px"}}>
        {" "}
        <div style={{"height": "100%", "boxSizing": "border-box", "padding": "44px 48px", "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "18px", "maxWidth": "760px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"Portfolio · Case Studies"}
              </span>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "56px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"Products we've designed, "}
              <span style={{"color": "#C2323F"}}>
                {"built and launched."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"Real problems, focused first versions and the results that followed. Pick a project to see the full story."}
            </p>
            {" "}
          </div>
          {" "}
          <div style={{"flexShrink": "0", "display": "flex", "flexDirection": "column", "gap": "12px", "padding": "18px", "borderRadius": "22px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 12px 26px -16px rgba(20,22,26,0.25)"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "2px", "padding": "0 4px"}}>
              {" "}
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Have a product in mind?"}
              </span>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                {"Let's talk it through on a 20-minute call."}
              </span>
              {" "}
            </div>
            {" "}
            <DcLink href={"#contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "54px", "padding": "0 20px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
              {" "}
              <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "42px", "height": "42px", "display": "block", "borderRadius": "12px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
              {" "}
              <span style={{"flexGrow": "1"}}>
                {"Book a call with Siva"}
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
      {" "}
      {" "}
      <section style={{"height": "2502px", "boxSizing": "border-box", "padding": "48px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "padding": "0 24px"}}>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "32px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Our work"}
          </h2>
          {" "}
          <div role={"tablist"} aria-label={"Filter projects"} style={{"display": "flex", "gap": "6px", "padding": "6px", "borderRadius": "16px", "background": "#F1F2F4", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.06)"}}>
            {" "}
            {dcList(dcGet(S, "filters")).map((__it, __i) => { const S6 = { ...S, "f": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <button type={"button"} role={"tab"} aria-selected={dcGet(S6, "f.selected")} onClick={dcGet(S6, "f.pick")} style={{"height": "40px", "display": "flex", "alignItems": "center", "gap": "7px", "padding": "0 14px", "border": "none", "borderRadius": "11px", "background": `${dcStr(dcGet(S6, "f.bg"))}`, "boxShadow": `${dcStr(dcGet(S6, "f.shadow"))}`, "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": `${dcStr(dcGet(S6, "f.fg"))}`, "cursor": "pointer"}}>
                  {" "}
                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S6, "f.iconInk")} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S6, "f.icon")} />
                  </svg>
                  {" "}
                  <span>
                    {dcStr(dcGet(S6, "f.label"))}
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
        {" "}
        <DcLink href={"/portfolio/kestrel-health"} className={"portfolio--rsp-card"} style={{"height": "520px", "flexShrink": "0", "boxSizing": "border-box", "padding": "12px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
          {" "}
          <div style={{"gridColumn": "span 7", "position": "relative", "borderRadius": "20px", "background": "#FBECEE", "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px"}}>
            {" "}
            <svg width={"56"} height={"56"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#D59AA2"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"3"} />
              <circle cx={"9"} cy={"9"} r={"2"} />
              <path d={"M21 15l-5-5L5 21"} />
            </svg>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#A3242F"}}>
              {"Project image"}
            </span>
            {" "}
            <span style={{"position": "absolute", "left": "16px", "top": "16px", "padding": "7px 14px", "borderRadius": "999px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "12px", "fontWeight": "800"}}>
              {"Featured project"}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"gridColumn": "span 5", "boxSizing": "border-box", "padding": "28px 28px 28px 0", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "20px"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "8px"}}>
                {" "}
                <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 12px 6px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "12px", "fontWeight": "700"}}>
                  <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
                  </svg>
                  <span>
                    {"Mobile app"}
                  </span>
                </span>
                {" "}
                <span style={{"padding": "6px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "12px", "fontWeight": "700", "color": "#545A66"}}>
                  {"Healthcare"}
                </span>
                {" "}
              </div>
              {" "}
              <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Kestrel Health"}
              </h2>
              {" "}
              <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A clinic booking app that lets patients book a visit in a few taps, launched on both app stores in 21 days."}
              </p>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "8px", "paddingTop": "4px"}}>
                {" "}
                <div style={{"padding": "12px 14px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                    {"Platform"}
                  </span>
                  <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                    {"iOS & Android"}
                  </span>
                </div>
                {" "}
                <div style={{"padding": "12px 14px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                    {"Timeline"}
                  </span>
                  <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                    {"21 days"}
                  </span>
                </div>
                {" "}
                <div style={{"padding": "12px 14px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                    {"Services"}
                  </span>
                  <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                    {"Design · Build"}
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "height": "50px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)"}}>
              {" "}
              <span>
                {"View case study"}
              </span>
              {" "}
              <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M7 17L17 7M8 7h9v9"} />
              </svg>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
        </DcLink>
        {" "}
        {" "}
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "16px"}}>
          {" "}
          {dcList(dcGet(S, "cases")).map((__it, __i) => { const S5 = { ...S, "c": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={"/portfolio/kestrel-health"} className={"portfolio--rsp-card"} style={{"gridColumn": `span ${dcStr(dcGet(S5, "c.span"))}`, "height": "560px", "boxSizing": "border-box", "padding": "12px", "display": "flex", "flexDirection": "column", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
                {" "}
                <div style={{"position": "relative", "height": "320px", "flexShrink": "0", "borderRadius": "20px", "background": `${dcStr(dcGet(S5, "c.bg"))}`, "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px"}}>
                  {" "}
                  <svg width={"48"} height={"48"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S5, "c.phInk")} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <rect x={"3"} y={"3"} width={"18"} height={"18"} rx={"3"} />
                    <circle cx={"9"} cy={"9"} r={"2"} />
                    <path d={"M21 15l-5-5L5 21"} />
                  </svg>
                  {" "}
                  <span style={{"fontSize": "13px", "fontWeight": "700", "color": `${dcStr(dcGet(S5, "c.phLabel"))}`}}>
                    {"Project image"}
                  </span>
                  {" "}
                  <span style={{"position": "absolute", "left": "14px", "top": "14px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 12px 6px 10px", "borderRadius": "999px", "background": "rgba(255,255,255,0.95)", "fontSize": "12px", "fontWeight": "700"}}>
                    {" "}
                    <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S5, "c.icon")} />
                    </svg>
                    {" "}
                    <span>
                      {dcStr(dcGet(S5, "c.type"))}
                    </span>
                    {" "}
                  </span>
                  {" "}
                  <span style={{"position": "absolute", "right": "14px", "top": "14px", "padding": "6px 12px", "borderRadius": "999px", "background": `${dcStr(dcGet(S5, "c.badgeBg"))}`, "color": `${dcStr(dcGet(S5, "c.badgeFg"))}`, "fontSize": "12px", "fontWeight": "700"}}>
                    {dcStr(dcGet(S5, "c.badge"))}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"flexGrow": "1", "padding": "22px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                  {" "}
                  <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
                    {dcStr(dcGet(S5, "c.industry"))}
                  </span>
                  {" "}
                  <h3 style={{"margin": "0", "fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.025em"}}>
                    {dcStr(dcGet(S5, "c.name"))}
                  </h3>
                  {" "}
                  <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.55", "color": "#545A66", "fontWeight": "500"}}>
                    {dcStr(dcGet(S5, "c.text"))}
                  </p>
                  {" "}
                  <span style={{"marginTop": "auto", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "paddingTop": "12px", "borderTop": "1px solid #E3E5E9", "fontSize": "15px", "fontWeight": "700"}}>
                    {" "}
                    <span>
                      {"View case study"}
                    </span>
                    {" "}
                    <span style={{"width": "36px", "height": "36px", "borderRadius": "12px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
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
            {"Load more projects"}
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
      <DC_Consultation  />
      {" "}
      <DC_Footer  />
      {" "}
    </div>
    </>
  );
};

export default function Portfolio(props) {
  return <Component {...props} />;
}
