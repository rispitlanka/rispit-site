'use client';
// AUTO-GENERATED from design/Clients.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    const shapes = {
      circle: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z',
      triangle: 'M12 2L22 20H2Z',
      square: 'M4 4h16v16H4Z',
      diamond: 'M12 1l11 11-11 11L1 12Z',
      half: 'M12 2a10 10 0 0 1 0 20Z M2 12a10 10 0 0 1 10-10v20A10 10 0 0 1 2 12Z',
      bars: 'M3 4h18v4H3Z M3 10h12v4H3Z M3 16h6v4H3Z',
      ring: 'M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20Zm0 5a5 5 0 1 1 0 10a5 5 0 1 1 0-10Z',
      hex: 'M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11Z'
    };
    const a = [
      { name: 'Lumora', d: shapes.circle },
      { name: 'Kestrel', d: shapes.triangle },
      { name: 'Orbitly', d: shapes.ring },
      { name: 'Fernway', d: shapes.bars },
      { name: 'Quantix', d: shapes.hex },
      { name: 'Brightpath', d: shapes.diamond }
    ];
    const b = [
      { name: 'Velora', d: shapes.half },
      { name: 'Harbor & Co', d: shapes.square },
      { name: 'Nimbly', d: shapes.ring },
      { name: 'Solace', d: shapes.circle },
      { name: 'Craftly', d: shapes.hex },
      { name: 'Pinecrest', d: shapes.triangle }
    ];
    return { rowA: a.concat(a), rowB: b.concat(b) };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section style={{"width": "100%", "height": "540px", "boxSizing": "border-box", "padding": "72px 24px 24px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-clients">
      {" "}
      <div style={{"height": "100%", "boxSizing": "border-box", "padding": "48px 0", "display": "flex", "flexDirection": "column", "gap": "44px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "overflow": "hidden"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "48px", "padding": "0 48px"}}>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "16px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), inset 0 -1px 0 rgba(20,22,26,0.04)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
              {" "}
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              {" "}
              <span>
                {"Our Clients"}
              </span>
              {" "}
            </span>
            {" "}
            <h2 style={{"margin": "0", "fontSize": "40px", "lineHeight": "1.1", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
              {"Startups and teams "}
              <span style={{"color": "#C2323F"}}>
                {"we've built with."}
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <p style={{"margin": "0", "maxWidth": "380px", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"From first-time founders to growing companies, we help them ship products their customers love."}
          </p>
          {" "}
        </div>
        {" "}
        <div className={"clients--rsp-fade"} style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
          {" "}
          <div style={{"overflow": "hidden"}}>
            {" "}
            <div className={"clients--rsp-track-l"} style={{"display": "flex", "gap": "16px", "width": "max-content"}}>
              {" "}
              {dcList(dcGet(S, "rowA")).map((__it, __i) => { const S7 = { ...S, "logo": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <div style={{"height": "76px", "boxSizing": "border-box", "padding": "0 32px", "display": "flex", "alignItems": "center", "gap": "12px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05), 0 8px 18px -12px rgba(20,22,26,0.18)", "flexShrink": "0"}}>
                    {" "}
                    <svg width={"28"} height={"28"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                      <path d={dcGet(S7, "logo.d")} />
                    </svg>
                    {" "}
                    <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em", "color": "#6B717D", "whiteSpace": "nowrap"}}>
                      {dcStr(dcGet(S7, "logo.name"))}
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
          <div style={{"overflow": "hidden"}}>
            {" "}
            <div className={"clients--rsp-track-r"} style={{"display": "flex", "gap": "16px", "width": "max-content"}}>
              {" "}
              {dcList(dcGet(S, "rowB")).map((__it, __i) => { const S7 = { ...S, "logo": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <div style={{"height": "76px", "boxSizing": "border-box", "padding": "0 32px", "display": "flex", "alignItems": "center", "gap": "12px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05), 0 8px 18px -12px rgba(20,22,26,0.18)", "flexShrink": "0"}}>
                    {" "}
                    <svg width={"28"} height={"28"} viewBox={"0 0 24 24"} fill={"#7A808C"} aria-hidden={"true"}>
                      <path d={dcGet(S7, "logo.d")} />
                    </svg>
                    {" "}
                    <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em", "color": "#6B717D", "whiteSpace": "nowrap"}}>
                      {dcStr(dcGet(S7, "logo.name"))}
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
        </div>
        {" "}
      </div>
      {" "}
    </section>
    </>
  );
};

export default function Clients(props) {
  return <Component {...props} />;
}
