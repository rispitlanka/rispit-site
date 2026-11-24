'use client';
// AUTO-GENERATED from design/ThankYou.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Footer from './Footer';

class Component extends DCLogic {
  renderVals() {
    return {
      prep: [
        { icon: 'M9 18h6 M10 22h4 M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z', text: 'Think about the one problem your product solves' },
        { icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z', text: 'Know who your first users will be' },
        { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6', text: 'Bring any sketches, notes or links you have' }
      ],
      details: [
        { label: 'Date', value: '[Tuesday, 24 November]', icon: 'M3 5h18v16H3Z M3 9h18 M8 3v4 M16 3v4' },
        { label: 'Time', value: '[14:00, your time zone]', icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M12 7v5l3 2' },
        { label: 'Where', value: 'Video call (link in your email)', icon: 'M15 10l5-3v10l-5-3Z M3 6h12v12H3Z' }
      ],
      links: [
        { title: 'See our work', text: 'Products we’ve designed, built and launched.', href: 'Portfolio.dc.html', icon: 'M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z' },
        { title: 'Read the 21-day playbook', text: 'How we take an idea to launch in three weeks.', href: 'BlogPost.dc.html', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5' },
        { title: 'Explore our services', text: 'From MVPs and apps to AI and content.', href: 'ServiceMVP.dc.html', icon: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z' }
      ]
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-thankyou">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main active={""} />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "760px", "boxSizing": "border-box", "padding": "16px 24px 24px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "16px"}}>
        {" "}
        <div style={{"gridColumn": "span 7", "position": "relative", "boxSizing": "border-box", "padding": "56px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "borderRadius": "28px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 16px 36px -18px rgba(20,22,26,0.2)", "overflow": "hidden"}}>
          {" "}
          <span aria-hidden={"true"} className={"thankyou--rsp-conf"} style={{"position": "absolute", "right": "80px", "top": "60px", "width": "18px", "height": "18px", "borderRadius": "5px", "background": "#C2323F"}} />
          {" "}
          <span aria-hidden={"true"} className={"thankyou--rsp-conf"} style={{"position": "absolute", "right": "170px", "top": "120px", "width": "12px", "height": "12px", "borderRadius": "12px", "background": "#E7B9BF", "animationDelay": ".8s"}} />
          {" "}
          <span aria-hidden={"true"} className={"thankyou--rsp-conf"} style={{"position": "absolute", "right": "60px", "top": "190px", "width": "14px", "height": "14px", "borderRadius": "4px", "background": "#14161A", "animationDelay": "1.4s"}} />
          {" "}
          <span aria-hidden={"true"} className={"thankyou--rsp-conf"} style={{"position": "absolute", "right": "240px", "top": "50px", "width": "10px", "height": "10px", "borderRadius": "10px", "background": "#C2323F", "animationDelay": "2s"}} />
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "26px"}}>
            {" "}
            <span className={"thankyou--rsp-pop"} style={{"width": "88px", "height": "88px", "borderRadius": "28px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              {" "}
              <svg width={"44"} height={"44"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {" "}
            </span>
            {" "}
            <h1 style={{"margin": "0", "fontSize": "60px", "lineHeight": "1.04", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"You're booked! "}
              <span style={{"color": "#C2323F"}}>
                {"Talk soon."}
              </span>
            </h1>
            {" "}
            <p style={{"margin": "0", "maxWidth": "560px", "fontSize": "18px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"Thanks for reaching out. We've sent a confirmation to your email with the video call link. If you sent a message instead, we'll reply within [1 working day]."}
            </p>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
              {"To get the most out of the call"}
            </span>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "10px"}}>
              {" "}
              {dcList(dcGet(S, "prep")).map((__it, __i) => { const S7 = { ...S, "p": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <div style={{"padding": "18px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                    {" "}
                    <span style={{"width": "40px", "height": "40px", "borderRadius": "12px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                      {" "}
                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                        <path d={dcGet(S7, "p.icon")} />
                      </svg>
                      {" "}
                    </span>
                    {" "}
                    <span style={{"fontSize": "14px", "lineHeight": "1.45", "fontWeight": "700"}}>
                      {dcStr(dcGet(S7, "p.text"))}
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
        {" "}
        <div style={{"gridColumn": "span 5", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
          {" "}
          <div style={{"flexGrow": "1", "boxSizing": "border-box", "padding": "32px", "display": "flex", "flexDirection": "column", "gap": "18px", "borderRadius": "28px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.04), 0 24px 48px -24px rgba(20,22,26,0.3)"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
              {" "}
              <span style={{"fontSize": "20px", "fontWeight": "800"}}>
                {"Your call"}
              </span>
              {" "}
              <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 12px", "borderRadius": "999px", "background": "#E8F5ED", "fontSize": "12px", "fontWeight": "800", "color": "#1E7A45"}}>
                <span style={{"width": "7px", "height": "7px", "borderRadius": "7px", "background": "#2E9E5B"}} />
                {"Confirmed"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "16px", "borderRadius": "18px", "background": "#F7F8FA"}}>
              {" "}
              <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "56px", "height": "56px", "display": "block", "borderRadius": "16px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                {" "}
                <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                  {"20-minute consultation"}
                </span>
                {" "}
                <span style={{"fontSize": "13px", "fontWeight": "600", "color": "#545A66"}}>
                  {"with Siva, founder of Rispit"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {dcList(dcGet(S, "details")).map((__it, __i) => { const S6 = { ...S, "d": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
                  {" "}
                  <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S6, "d.icon")} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                    {" "}
                    <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#545A66"}}>
                      {dcStr(dcGet(S6, "d.label"))}
                    </span>
                    {" "}
                    <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                      {dcStr(dcGet(S6, "d.value"))}
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
              </React.Fragment>); })}
            {" "}
            <div style={{"marginTop": "auto", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
                {"Add to your calendar"}
              </span>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "8px"}}>
                {" "}
                <DcLink href={"#google"} style={{"height": "46px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "14px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "14px", "fontWeight": "700", "textDecoration": "none"}}>
                  {"Google"}
                </DcLink>
                {" "}
                <DcLink href={"#outlook"} style={{"height": "46px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "14px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "14px", "fontWeight": "700", "textDecoration": "none"}}>
                  {"Outlook"}
                </DcLink>
                {" "}
                <DcLink href={"#ics"} style={{"height": "46px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "14px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "fontSize": "14px", "fontWeight": "700", "textDecoration": "none"}}>
                  {"Apple / .ics"}
                </DcLink>
                {" "}
              </div>
              {" "}
              <DcLink href={"/contact"} style={{"alignSelf": "center", "paddingTop": "4px", "fontSize": "13px", "fontWeight": "700", "color": "#545A66"}}>
                {"Need to change the time? Reschedule"}
              </DcLink>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {" "}
      <section style={{"height": "400px", "boxSizing": "border-box", "padding": "72px 24px 24px", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
        {" "}
        <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "padding": "0 24px"}}>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "34px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"While you wait"}
          </h2>
          {" "}
          <DcLink href={"/"} style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M19 12H5M11 19l-7-7 7-7"} />
            </svg>
            {" "}
            <span>
              {"Back to home"}
            </span>
            {" "}
          </DcLink>
          {" "}
        </div>
        {" "}
        <div style={{"flexGrow": "1", "display": "grid", "gridTemplateColumns": "repeat(3, minmax(0, 1fr))", "gap": "16px"}}>
          {" "}
          {dcList(dcGet(S, "links")).map((__it, __i) => { const S5 = { ...S, "l": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={dcGet(S5, "l.href")} className={"thankyou--rsp-card"} style={{"boxSizing": "border-box", "padding": "28px", "display": "flex", "alignItems": "center", "gap": "18px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)", "textDecoration": "none", "color": "#14161A"}}>
                {" "}
                <span style={{"width": "60px", "height": "60px", "flexShrink": "0", "borderRadius": "18px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <svg width={"26"} height={"26"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={dcGet(S5, "l.icon")} />
                  </svg>
                  {" "}
                </span>
                {" "}
                <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
                  {" "}
                  <span style={{"fontSize": "18px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S5, "l.title"))}
                  </span>
                  {" "}
                  <span style={{"fontSize": "14px", "lineHeight": "1.45", "fontWeight": "500", "color": "#545A66"}}>
                    {dcStr(dcGet(S5, "l.text"))}
                  </span>
                  {" "}
                </span>
                {" "}
                <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
            </React.Fragment>); })}
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

export default function ThankYou(props) {
  return <Component {...props} />;
}
