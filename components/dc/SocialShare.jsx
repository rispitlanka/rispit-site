'use client';
// AUTO-GENERATED from design/SocialShare.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  renderVals() {
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "height": "1200px", "boxSizing": "border-box", "padding": "40px", "display": "flex", "flexDirection": "column", "gap": "32px", "background": "#ECEEF1", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-socialshare">
      {" "}
      <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
        {" "}
        <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
          {"Share image · 1200 × 630 px"}
        </span>
        {" "}
        <img src={"/assets/cb50350009b83defb7013a4fb49b00dc.png"} alt={"Rispit share image: Make your MVP in 21 days"} style={{"width": "1200px", "height": "630px", "display": "block", "borderRadius": "16px", "boxShadow": "0 20px 40px -24px rgba(20,22,26,0.35)"}} />
        {" "}
      </div>
      {" "}
      <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "24px"}}>
        {" "}
        {" "}
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          {" "}
          <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
            {"In a chat app"}
          </span>
          {" "}
          <div style={{"padding": "20px", "borderRadius": "20px", "background": "#E5DDD5"}}>
            {" "}
            <div style={{"marginLeft": "auto", "width": "420px", "padding": "6px", "borderRadius": "14px 14px 4px 14px", "background": "#DCF8C6", "boxShadow": "0 1px 1px rgba(0,0,0,0.12)"}}>
              {" "}
              <div style={{"borderRadius": "10px", "overflow": "hidden", "background": "#F0F5EC"}}>
                {" "}
                <img src={"/assets/cb50350009b83defb7013a4fb49b00dc.png"} alt={""} style={{"width": "408px", "height": "214px", "display": "block", "objectFit": "cover"}} />
                {" "}
                <div style={{"padding": "8px 10px", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  {" "}
                  <span style={{"fontSize": "13px", "fontWeight": "800"}}>
                    {"Rispit — Make your MVP in 21 days"}
                  </span>
                  {" "}
                  <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#545A66"}}>
                    {"Design, build and launch your startup's first version."}
                  </span>
                  {" "}
                  <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#7A808C"}}>
                    {"rispit.com"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <span style={{"display": "block", "padding": "6px 6px 2px", "fontSize": "13px", "fontWeight": "500"}}>
                {"Check these guys out: rispit.com"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {" "}
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          {" "}
          <span style={{"fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
            {"In a social feed"}
          </span>
          {" "}
          <div style={{"borderRadius": "16px", "background": "#FFFFFF", "border": "1px solid #DADCE1", "overflow": "hidden"}}>
            {" "}
            <div style={{"padding": "12px 14px", "display": "flex", "alignItems": "center", "gap": "10px"}}>
              {" "}
              <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "40px", "height": "40px", "display": "block"}} />
              {" "}
              <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
                <span style={{"fontSize": "13px", "fontWeight": "800"}}>
                  {"Rispit"}
                </span>
                <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#7A808C"}}>
                  {"Product studio · 1h"}
                </span>
              </span>
              {" "}
            </div>
            {" "}
            <img src={"/assets/cb50350009b83defb7013a4fb49b00dc.png"} alt={""} style={{"width": "100%", "height": "300px", "display": "block", "objectFit": "cover"}} />
            {" "}
            <div style={{"padding": "10px 14px", "background": "#F3F4F6", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
              {" "}
              <span style={{"fontSize": "13px", "fontWeight": "800"}}>
                {"Rispit — Make your MVP in 21 days"}
              </span>
              {" "}
              <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#7A808C"}}>
                {"rispit.com"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
};

export default function SocialShare(props) {
  return <Component {...props} />;
}
