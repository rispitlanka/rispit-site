'use client';
// AUTO-GENERATED from design/Tech.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    const mk = (names) => {
      const logos = { 'Figma': 'figma', 'React': 'react', 'Next.js': 'nextjs', 'TypeScript': 'typescript', 'Tailwind CSS': 'tailwindcss', 'React Native': 'react', 'Flutter': 'flutter', 'Node.js': 'nodejs', 'Python': 'python', 'PostgreSQL': 'postgresql', 'Supabase': 'supabase', 'OpenAI': 'openai', 'Vercel': 'vercel', 'AWS': 'aws' };
      const items = names.map((name, i) => ({ name, logo: '/logos/' + logos[name] + '.svg', delay: (i * 0.35).toFixed(2) + 's' }));
      return items.concat(items);
    };
    return {
      rowA: mk(['Figma', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Flutter']),
      rowB: mk(['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'OpenAI', 'Vercel', 'AWS'])
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section style={{"width": "100%", "height": "420px", "boxSizing": "border-box", "padding": "72px 24px 24px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-tech">
      {" "}
      <div style={{"height": "100%", "boxSizing": "border-box", "padding": "40px 0", "display": "flex", "flexDirection": "column", "gap": "32px", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "overflow": "hidden"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 48px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
            {" "}
            <span className={"tech--rsp-dot"} style={{"width": "10px", "height": "10px", "borderRadius": "10px", "background": "#C2323F"}} />
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
              {"Technologies we use"}
            </span>
            {" "}
          </div>
          {" "}
          <span style={{"fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
            {"A modern stack, "}
            <span style={{"color": "#C2323F"}}>
              {"built to grow."}
            </span>
          </span>
          {" "}
        </div>
        {" "}
        <div className={"tech--rsp-tfade"} style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
          {" "}
          <div style={{"overflow": "hidden", "padding": "6px 0"}}>
            {" "}
            <div className={"tech--rsp-tl"} style={{"display": "flex", "gap": "14px", "width": "max-content"}}>
              {" "}
              {dcList(dcGet(S, "rowA")).map((__it, __i) => { const S7 = { ...S, "tool": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <span className={"tech--rsp-chip"} style={{"height": "64px", "display": "flex", "alignItems": "center", "gap": "12px", "padding": "0 22px 0 10px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05), 0 8px 18px -14px rgba(20,22,26,0.25)", "flexShrink": "0"}}>
                    {" "}
                    <span className={"tech--rsp-logo"} style={{"width": "44px", "height": "44px", "borderRadius": "12px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center", "animationDelay": `${dcStr(dcGet(S7, "tool.delay"))}`}}>
                      <img src={dcGet(S7, "tool.logo")} alt={""} style={{"width": "26px", "height": "26px", "display": "block", "objectFit": "contain"}} />
                      {" "}
                    </span>
                    {" "}
                    <span style={{"fontSize": "17px", "fontWeight": "800", "letterSpacing": "-0.01em", "whiteSpace": "nowrap"}}>
                      {dcStr(dcGet(S7, "tool.name"))}
                    </span>
                    {" "}
                  </span>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"overflow": "hidden", "padding": "6px 0"}}>
            {" "}
            <div className={"tech--rsp-tr"} style={{"display": "flex", "gap": "14px", "width": "max-content"}}>
              {" "}
              {dcList(dcGet(S, "rowB")).map((__it, __i) => { const S7 = { ...S, "tool": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <span className={"tech--rsp-chip"} style={{"height": "64px", "display": "flex", "alignItems": "center", "gap": "12px", "padding": "0 22px 0 10px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05), 0 8px 18px -14px rgba(20,22,26,0.25)", "flexShrink": "0"}}>
                    {" "}
                    <span className={"tech--rsp-logo"} style={{"width": "44px", "height": "44px", "borderRadius": "12px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "display": "flex", "alignItems": "center", "justifyContent": "center", "animationDelay": `${dcStr(dcGet(S7, "tool.delay"))}`}}>
                      <img src={dcGet(S7, "tool.logo")} alt={""} style={{"width": "26px", "height": "26px", "display": "block", "objectFit": "contain"}} />
                      {" "}
                    </span>
                    {" "}
                    <span style={{"fontSize": "17px", "fontWeight": "800", "letterSpacing": "-0.01em", "whiteSpace": "nowrap"}}>
                      {dcStr(dcGet(S7, "tool.name"))}
                    </span>
                    {" "}
                  </span>
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

export default function Tech(props) {
  return <Component {...props} />;
}
