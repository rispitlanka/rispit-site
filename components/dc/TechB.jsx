'use client';
// AUTO-GENERATED from design/TechB.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    // Official logos, served from /public/logos (devicon, MIT; OpenAI from Simple Icons, CC0)
    const logos = { 'React': 'react', 'React Native': 'react', 'Next.js': 'nextjs', 'TypeScript': 'typescript', 'Node.js': 'nodejs', 'Figma': 'figma', 'Tailwind CSS': 'tailwindcss', 'Flutter': 'flutter', 'Python': 'python', 'PostgreSQL': 'postgresql', 'Supabase': 'supabase', 'OpenAI': 'openai', 'Vercel': 'vercel', 'AWS': 'aws' };
    const ring = (names, r, offset) => names.map((name, i) => {
      const a = offset + (360 / names.length) * i;
      return { name, logo: '/logos/' + logos[name] + '.svg', place: 'rotate(' + a + 'deg) translateX(' + r + 'px)', unrotate: 'rotate(' + (-a) + 'deg)' };
    });
    const innerNames = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma'];
    const outerNames = ['Tailwind CSS', 'React Native', 'Flutter', 'Python', 'PostgreSQL', 'Supabase', 'OpenAI', 'Vercel', 'AWS'];
    return {
      inner: ring(innerNames, 150, -90),
      outer: ring(outerNames, 250, -70),
      allNames: innerNames.concat(outerNames).join(', ')
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <section style={{"width": "100%", "height": "680px", "boxSizing": "border-box", "padding": "72px 24px 24px", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-techb">
      {" "}
      <div style={{"height": "100%", "boxSizing": "border-box", "padding": "0 56px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "32px", "alignItems": "center", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "overflow": "hidden"}}>
        {" "}
        {" "}
        <div style={{"gridColumn": "span 5", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "20px"}}>
          {" "}
          <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px 8px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "13px", "fontWeight": "700"}}>
            {" "}
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            {" "}
            <span>
              {"Technologies We Use"}
            </span>
            {" "}
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "46px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"One team. "}
            <span style={{"color": "#C2323F"}}>
              {"A modern stack"}
            </span>
            {" around your product."}
          </h2>
          {" "}
          <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "17px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"Proven tools that let us move fast now, and let your team keep building on the same code later."}
          </p>
          {" "}
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px", "paddingTop": "4px"}}>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"Design"}
            </span>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"Web"}
            </span>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"Mobile"}
            </span>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"Backend"}
            </span>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"AI"}
            </span>
            {" "}
            <span style={{"padding": "7px 12px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
              {"Cloud"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div className={"techb--rsp-orbit"} role={"img"} aria-label={`Tools we use, orbiting around Rispit: ${dcStr(dcGet(S, "allNames"))}`} style={{"gridColumn": "span 7", "position": "relative", "height": "584px"}}>
          {" "}
          <div style={{"position": "absolute", "left": "50%", "top": "50%", "width": "0", "height": "0"}}>
            {" "}
            {" "}
            <span style={{"position": "absolute", "left": "-250px", "top": "-250px", "width": "500px", "height": "500px", "borderRadius": "500px", "border": "1.5px dashed #DADCE1", "boxSizing": "border-box"}} />
            {" "}
            <span style={{"position": "absolute", "left": "-150px", "top": "-150px", "width": "300px", "height": "300px", "borderRadius": "300px", "border": "1.5px dashed #E7B9BF", "boxSizing": "border-box"}} />
            {" "}
            {" "}
            <div className={"techb--rsp-spin2"} style={{"position": "absolute", "left": "0", "top": "0", "width": "0", "height": "0"}}>
              {" "}
              {dcList(dcGet(S, "outer")).map((__it, __i) => { const S7 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <div style={{"position": "absolute", "left": "0", "top": "0", "transform": `${dcStr(dcGet(S7, "t.place"))}`}}>
                    {" "}
                    <div style={{"transform": `${dcStr(dcGet(S7, "t.unrotate"))}`}}>
                      {" "}
                      <div className={"techb--rsp-spin2-rev"}>
                        {" "}
                        <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "8px", "height": "48px", "padding": "0 14px 0 7px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 10px 22px -12px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                          {" "}
                          <span style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                            <img src={dcGet(S7, "t.logo")} alt={""} style={{"width": "22px", "height": "22px", "display": "block", "objectFit": "contain"}} />
                          </span>
                          {" "}
                          <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                            {dcStr(dcGet(S7, "t.name"))}
                          </span>
                          {" "}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
            {" "}
            <div className={"techb--rsp-spin"} style={{"position": "absolute", "left": "0", "top": "0", "width": "0", "height": "0"}}>
              {" "}
              {dcList(dcGet(S, "inner")).map((__it, __i) => { const S7 = { ...S, "t": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <div style={{"position": "absolute", "left": "0", "top": "0", "transform": `${dcStr(dcGet(S7, "t.place"))}`}}>
                    {" "}
                    <div style={{"transform": `${dcStr(dcGet(S7, "t.unrotate"))}`}}>
                      {" "}
                      <div className={"techb--rsp-spin-rev"}>
                        {" "}
                        <span style={{"position": "absolute", "left": "0", "top": "0", "transform": "translate(-50%, -50%)", "display": "flex", "alignItems": "center", "gap": "8px", "height": "48px", "padding": "0 14px 0 7px", "borderRadius": "14px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 10px 22px -12px rgba(20,22,26,0.3)", "whiteSpace": "nowrap"}}>
                          {" "}
                          <span style={{"width": "34px", "height": "34px", "borderRadius": "10px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                            <img src={dcGet(S7, "t.logo")} alt={""} style={{"width": "22px", "height": "22px", "display": "block", "objectFit": "contain"}} />
                          </span>
                          {" "}
                          <span style={{"fontSize": "14px", "fontWeight": "800"}}>
                            {dcStr(dcGet(S7, "t.name"))}
                          </span>
                          {" "}
                        </span>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
            {" "}
            <span className={"techb--rsp-core"} style={{"position": "absolute", "left": "-56px", "top": "-56px", "width": "112px", "height": "112px", "borderRadius": "112px", "background": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              {" "}
              <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "88px", "height": "88px", "display": "block"}} />
              {" "}
            </span>
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

export default function TechB(props) {
  return <Component {...props} />;
}
