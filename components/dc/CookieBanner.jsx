'use client';
// AUTO-GENERATED from design/CookieBanner.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { visible: true, custom: false, analytics: true, marketing: false };
  }
  renderVals() {
    const defs = [
      { key: null, name: 'Essential', text: 'Needed for the site to work, like remembering your cookie choice.', locked: true },
      { key: 'analytics', name: 'Analytics', text: 'Help us understand which pages are useful so we can improve them.' },
      { key: 'marketing', name: 'Marketing', text: 'Let us measure our ads and show you more relevant content.' }
    ];
    const cats = defs.map((d) => {
      const on = d.locked ? true : !!this.state[d.key];
      return {
        ...d, locked: !!d.locked,
        checked: String(on),
        track: on ? '#C2323F' : '#DADCE1',
        align: on ? 'flex-end' : 'flex-start',
        cursor: d.locked ? 'default' : 'pointer',
        opacity: d.locked ? '0.6' : '1',
        toggle: () => { if (!d.locked) this.setState({ [d.key]: !on }); }
      };
    });
    return {
      cats,
      visible: this.state.visible,
      hidden: !this.state.visible,
      custom: this.state.custom,
      notCustom: !this.state.custom,
      openCustom: () => this.setState({ custom: true }),
      close: () => this.setState({ visible: false, custom: false }),
      reopen: () => this.setState({ visible: true })
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "560px", "height": "640px", "boxSizing": "border-box", "padding": "24px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "background": "#ECEEF1", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-cookiebanner">
      {" "}
      {dcTruthy(dcGet(S, "visible")) ? (<>
        {" "}
        <div className={"cookiebanner--rsp-in"} role={"dialog"} aria-label={"Cookie preferences"} style={{"boxSizing": "border-box", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "18px", "borderRadius": "24px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 30px 60px -24px rgba(20,22,26,0.4)"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "flex-start", "gap": "14px"}}>
            {" "}
            <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "borderRadius": "15px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              {" "}
              <svg width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"} />
                <path d={"M8.5 8.5h.01 M16 15.5h.01 M12 12h.01 M11 17h.01 M7 14h.01"} />
              </svg>
              {" "}
            </span>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
              {" "}
              <span style={{"fontSize": "18px", "fontWeight": "800", "letterSpacing": "-0.01em"}}>
                {"We use cookies"}
              </span>
              {" "}
              <span style={{"fontSize": "14px", "lineHeight": "1.55", "fontWeight": "500", "color": "#545A66"}}>
                {"We use essential cookies to make our site work, and optional ones to understand how it's used and improve it. Read our "}
                <DcLink href={"/privacy"} style={{"fontWeight": "700"}}>
                  {"Privacy Policy"}
                </DcLink>
                {"."}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {dcTruthy(dcGet(S, "custom")) ? (<>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
              {" "}
              {dcList(dcGet(S, "cats")).map((__it, __i) => { const S7 = { ...S, "c": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "padding": "14px 16px", "borderRadius": "16px", "background": "#F7F8FA", "border": "1px solid #ECEEF1"}}>
                    {" "}
                    <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                      {" "}
                      <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "14px", "fontWeight": "800"}}>
                        {dcStr(dcGet(S7, "c.name"))}
                        {dcTruthy(dcGet(S7, "c.locked")) ? (<>
                          <span style={{"padding": "2px 8px", "borderRadius": "999px", "background": "#ECEEF1", "fontSize": "11px", "fontWeight": "700", "color": "#545A66"}}>
                            {"Always on"}
                          </span>
                        </>) : null}
                      </span>
                      {" "}
                      <span style={{"fontSize": "12px", "lineHeight": "1.45", "fontWeight": "500", "color": "#545A66"}}>
                        {dcStr(dcGet(S7, "c.text"))}
                      </span>
                      {" "}
                    </span>
                    {" "}
                    <button type={"button"} role={"switch"} aria-checked={dcGet(S7, "c.checked")} aria-label={dcGet(S7, "c.name")} onClick={dcGet(S7, "c.toggle")} style={{"width": "48px", "height": "28px", "flexShrink": "0", "padding": "3px", "boxSizing": "border-box", "border": "none", "borderRadius": "28px", "background": `${dcStr(dcGet(S7, "c.track"))}`, "display": "flex", "justifyContent": `${dcStr(dcGet(S7, "c.align"))}`, "cursor": `${dcStr(dcGet(S7, "c.cursor"))}`, "opacity": `${dcStr(dcGet(S7, "c.opacity"))}`}}>
                      {" "}
                      <span style={{"width": "22px", "height": "22px", "borderRadius": "22px", "background": "#FFFFFF", "boxShadow": "0 1px 3px rgba(20,22,26,0.3)"}} />
                      {" "}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          <div style={{"display": "flex", "gap": "8px"}}>
            {" "}
            {dcTruthy(dcGet(S, "notCustom")) ? (<>
              {" "}
              <button type={"button"} onClick={dcGet(S, "openCustom")} style={{"height": "48px", "padding": "0 16px", "borderRadius": "14px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": "#14161A", "cursor": "pointer"}}>
                {"Customise"}
              </button>
              {" "}
              <button type={"button"} onClick={dcGet(S, "close")} style={{"height": "48px", "padding": "0 16px", "borderRadius": "14px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": "#14161A", "cursor": "pointer"}}>
                {"Reject optional"}
              </button>
              {" "}
            </>) : null}
            {" "}
            {dcTruthy(dcGet(S, "custom")) ? (<>
              {" "}
              <button type={"button"} onClick={dcGet(S, "close")} style={{"height": "48px", "padding": "0 16px", "borderRadius": "14px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": "#14161A", "cursor": "pointer"}}>
                {"Save preferences"}
              </button>
              {" "}
            </>) : null}
            {" "}
            <button type={"button"} onClick={dcGet(S, "close")} style={{"flexGrow": "1", "height": "48px", "border": "none", "borderRadius": "14px", "background": "#C2323F", "fontFamily": "inherit", "fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "cursor": "pointer", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 18px -8px rgba(194,50,63,0.65)"}}>
              {"Accept all"}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </>) : null}
      {" "}
      {dcTruthy(dcGet(S, "hidden")) ? (<>
        {" "}
        <button type={"button"} onClick={dcGet(S, "reopen")} aria-label={"Cookie settings"} style={{"alignSelf": "flex-start", "width": "52px", "height": "52px", "border": "1px solid #ECEEF1", "borderRadius": "16px", "background": "#FFFFFF", "boxShadow": "0 12px 26px -14px rgba(20,22,26,0.4)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer"}}>
          {" "}
          <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
            <path d={"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"} />
            <path d={"M8.5 8.5h.01 M16 15.5h.01 M12 12h.01"} />
          </svg>
          {" "}
        </button>
        {" "}
      </>) : null}
      {" "}
    </div>
    </>
  );
};

export default function CookieBanner(props) {
  return <Component {...props} />;
}
