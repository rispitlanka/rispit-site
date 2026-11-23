'use client';
// AUTO-GENERATED from design/MobServiceMobile.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';
import DC_MobConsult from './MobConsult';
import DC_MobFooter from './MobFooter';

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {"open": 0};
  }
  renderVals() {
    const FAQS = [["Do you build for both iOS and Android?", "Yes. We use a cross-platform framework, so one codebase runs natively on both iPhone and Android phones. That keeps your cost and timeline down."], ["Can a real app really launch in 21 days?", "For a focused first version, yes. We agree on the most important features in week one and save the nice-to-haves for later updates."], ["Who owns the code and the app?", "You do. The code, designs and store accounts are all yours from day one."], ["Do you help publish to the App Store and Google Play?", "Yes. We prepare the listings and screenshots, submit the app and handle any feedback from the store review."], ["What happens after launch?", "We can keep improving the app with you on a monthly plan, or hand everything over cleanly to your own team."]];
    const faqs = FAQS.map((f, i) => {
      const open = i === this.state.open;
      return {
        q: f[0], a: f[1], open,
        expanded: String(open),
        bg: open ? '#FFFFFF' : '#F7F8FA',
        shadow: open ? '0 14px 30px -18px rgba(20,22,26,0.25)' : 'none',
        iconBg: open ? '#C2323F' : '#FFFFFF',
        iconInk: open ? '#FFFFFF' : '#C2323F',
        iconPath: open ? 'M5 12h14' : 'M12 5v14 M5 12h14',
        toggle: () => this.setState({ open: open ? -1 : i })
      };
    });
    return { faqs };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobservicemobile">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_MobNav active={"Services"} />
        {" "}
      </div>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "8px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "14px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <nav aria-label={"Breadcrumb"} style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "12px", "fontWeight": "600", "color": "#545A66"}}>
            <DcLink href={"/"} style={{"textDecoration": "none"}}>
              {"Home"}
            </DcLink>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <span>
              {"Services"}
            </span>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M9 6l6 6-6 6"} />
            </svg>
            <span style={{"color": "#14161A"}}>
              {"Mobile Apps"}
            </span>
          </nav>
          {" "}
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
            </svg>
            <span>
              {"Mobile App Development"}
            </span>
          </span>
          {" "}
          <h1 style={{"margin": "0", "fontSize": "36px", "lineHeight": "1.08", "fontWeight": "800", "letterSpacing": "-0.035em"}}>
            {"Mobile apps your users will love, "}
            <span style={{"color": "#C2323F"}}>
              {"live in 21 days."}
            </span>
          </h1>
          {" "}
          <p style={{"margin": "0", "fontSize": "16px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"We design and build iOS and Android apps from a single codebase, then get them published on the App Store and Google Play."}
          </p>
          {" "}
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 18px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.6)"}}>
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            <span style={{"flexGrow": "1"}}>
              {"Book a call with Siva"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
          {" "}
          <DcLink href={"#work"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#FFFFFF", "color": "#14161A", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 8px 18px -10px rgba(20,22,26,0.18)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
            <span>
              {"See our work"}
            </span>
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </DcLink>
          {" "}
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "10px 16px"}}>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"iOS & Android"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"One codebase"}
            </span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "700", "color": "#14161A"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
              {"Store-ready launch"}
            </span>
          </div>
        </div>
        <div aria-hidden={"true"} style={{"position": "relative", "height": "300px", "borderRadius": "26px", "background": "#FBECEE", "border": "1px solid #F4DADD", "overflow": "hidden"}}>
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "250px", "height": "250px", "margin": "-125px 0 0 -125px", "borderRadius": "250px", "border": "1.5px dashed #E7B9BF"}} />
          {" "}
          <span style={{"position": "absolute", "left": "50%", "top": "50%", "width": "170px", "height": "170px", "margin": "-85px 0 0 -85px", "borderRadius": "170px", "background": "rgba(194,50,63,0.07)"}} />
          {" "}
          <div className={"mobservicemobile--rsp-fa"} style={{"position": "absolute", "left": "50%", "top": "50%", "width": "140px", "height": "140px", "margin": "-70px 0 0 -70px", "borderRadius": "40px", "background": "#FFFFFF", "boxShadow": "0 24px 48px -20px rgba(194,50,63,0.5)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "10px"}}>
            {" "}
            <span style={{"width": "64px", "height": "64px", "borderRadius": "20px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"32"} height={"32"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
              </svg>
            </span>
            {" "}
            <span style={{"fontSize": "12px", "fontWeight": "800"}}>
              {"Mobile Apps"}
            </span>
            {" "}
          </div>
          {" "}
          <div className={"mobservicemobile--rsp-fb"} style={{"position": "absolute", "left": "14px", "top": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Booking confirmed"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"Push notification"}
              </span>
            </span>
          </div>
          {" "}
          <div className={"mobservicemobile--rsp-fa"} style={{"position": "absolute", "right": "14px", "bottom": "18px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "9px 12px 9px 9px", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 14px 28px -12px rgba(20,22,26,0.3)"}}>
            <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#C2323F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 13l4 4L19 7"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "1px"}}>
              <span style={{"fontSize": "12px", "fontWeight": "800"}}>
                {"Live on both stores"}
              </span>
              <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#545A66"}}>
                {"App Store · Google Play"}
              </span>
            </span>
          </div>
          {" "}
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"What's Included"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Everything your app needs "}
            <span style={{"color": "#C2323F"}}>
              {"to launch."}
            </span>
          </h2>
          {" "}
          <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
            {"The essentials every first version needs, built properly so your app is ready for real users on day one."}
          </p>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"iOS & Android, one codebase"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"One app that runs natively on both platforms, so you launch everywhere for the cost of one."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Native look and feel"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Smooth animations and familiar gestures that feel right at home on every phone."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.9 1.9 0 0 0 3.4 0"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Push notifications"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Reminders and updates that bring users back to your app at the right moment."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M2 6h20v12H2Z M2 10h20 M6 15h4"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Payments & subscriptions"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Secure in-app payments and subscriptions, set up and tested before launch."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"Login & user accounts"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"Email, Google and Apple sign-in, with profiles and data kept safely in the cloud."}
              </span>
            </span>
          </div>
          <div style={{"display": "flex", "gap": "14px", "padding": "18px", "borderRadius": "20px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "boxShadow": "0 1px 2px rgba(20,22,26,0.08), 0 6px 14px -8px rgba(20,22,26,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
              <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z"} />
              </svg>
            </span>
            <span style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              <span style={{"fontSize": "16px", "fontWeight": "800"}}>
                {"App Store & Google Play launch"}
              </span>
              <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                {"We prepare the listings, screenshots and submissions, and guide your app through review."}
              </span>
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "20px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
            <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
              <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
              <span>
                {"How It Works"}
              </span>
            </span>
            {" "}
            <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
              {"From idea to app store "}
              <span style={{"color": "#C2323F"}}>
                {"in 21 days."}
              </span>
            </h2>
            {" "}
            <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
              {"A clear plan with a demo at the end of every week, so you always see real progress."}
            </p>
          </div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"position": "absolute", "left": "21px", "top": "48px", "bottom": "-14px", "width": "2px", "background": "repeating-linear-gradient(180deg, #E7B9BF 0 6px, transparent 6px 11px)"}} />
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "color": "#C2323F", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"1"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 1–3"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Plan & scope"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We agree on the core features, user flows and a clear plan for your first version."}
                </span>
              </div>
            </div>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"position": "absolute", "left": "21px", "top": "48px", "bottom": "-14px", "width": "2px", "background": "repeating-linear-gradient(180deg, #E7B9BF 0 6px, transparent 6px 11px)"}} />
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "color": "#C2323F", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"2"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 4–8"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Design"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"App screens and a clickable prototype you can test on your own phone."}
                </span>
              </div>
            </div>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"position": "absolute", "left": "21px", "top": "48px", "bottom": "-14px", "width": "2px", "background": "repeating-linear-gradient(180deg, #E7B9BF 0 6px, transparent 6px 11px)"}} />
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#FFFFFF", "color": "#C2323F", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"3"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 9–17"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Build"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"We develop the app and backend, with a working demo you can try every week."}
                </span>
              </div>
            </div>
            <div style={{"position": "relative", "display": "flex", "gap": "14px"}}>
              <span style={{"width": "44px", "height": "44px", "flexShrink": "0", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "0 8px 16px -8px rgba(194,50,63,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px", "fontWeight": "800"}}>
                {"4"}
              </span>
              <div style={{"flexGrow": "1", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "18px", "background": "#FFFFFF", "border": "1px solid #ECEEF1"}}>
                <span style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
                  {"Day 18–21"}
                </span>
                <span style={{"fontSize": "17px", "fontWeight": "800"}}>
                  {"Test & launch"}
                </span>
                <span style={{"fontSize": "14px", "lineHeight": "1.5", "color": "#545A66", "fontWeight": "500"}}>
                  {"Testing on real devices, then submission to the App Store and Google Play."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "48px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div id={"work"}>
          <div style={{"boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "gap": "6px", "borderRadius": "26px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
            <div style={{"position": "relative", "height": "200px", "borderRadius": "18px", "background": "#EEF1F5", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "8px", "overflow": "hidden"}}>
              <svg width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A0A5AF"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3h18v18H3Z M9 9a2 2 0 1 0 0-.01 M21 15l-5-5L5 21"} />
              </svg>
              <span style={{"fontSize": "12px", "fontWeight": "700", "color": "#6B717D"}}>
                {"Project image"}
              </span>
            </div>
            <div style={{"padding": "4px 6px 6px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
              <div style={{"display": "flex", "flexWrap": "wrap", "gap": "6px"}}>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#14161A", "color": "#FFFFFF", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Featured project"}
                </span>
                <span style={{"padding": "5px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "color": "#545A66", "fontSize": "11px", "fontWeight": "700"}}>
                  {"Healthcare · iOS & Android"}
                </span>
              </div>
              <span style={{"fontSize": "26px", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
                {"Kestrel Health"}
              </span>
              <span style={{"fontSize": "15px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                {"A booking app that lets patients find a time and confirm a clinic visit in a few taps, with reminders sent straight to their phone."}
              </span>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Booking flow designed and tested in week one"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Push reminders and calendar sync"}
                </span>
                <span style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "14px", "lineHeight": "1.45", "fontWeight": "600"}}>
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"flexShrink": "0", "marginTop": "1px"}}>
                    <path d={"M5 13l4 4L19 7"} />
                  </svg>
                  {"Published on both app stores"}
                </span>
              </div>
              <DcLink href={"/portfolio/kestrel-health"} style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "8px", "height": "52px", "padding": "0 20px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 22px -10px rgba(194,50,63,0.7)", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none"}}>
                <span>
                  {"View case study"}
                </span>
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M7 17L17 7M8 7h9v9"} />
                </svg>
              </DcLink>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "40px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"boxSizing": "border-box", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderRadius": "24px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.04), 0 14px 30px -18px rgba(20,22,26,0.2)"}}>
          <span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#A3242F"}}>
            {"Built with"}
          </span>
          <span style={{"fontSize": "20px", "fontWeight": "800"}}>
            {"Our mobile stack"}
          </span>
          <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/react.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"React Native"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/expo.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Expo"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/flutter.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Flutter"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/typescript.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"TypeScript"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/firebase.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Firebase"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/supabase.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Supabase"}
              </span>
            </span>
            <span style={{"height": "44px", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 14px 0 6px", "borderRadius": "13px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.05)", "fontSize": "14px", "fontWeight": "800"}}>
              <span style={{"width": "30px", "height": "30px", "borderRadius": "9px", "background": "#F7F8FA", "border": "1px solid #ECEEF1", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <img src={"/logos/stripe.svg"} alt={""} style={{"width": "18px", "height": "18px", "display": "block", "objectFit": "contain"}} />
              </span>
              <span>
                {"Stripe"}
              </span>
            </span>
          </div>
        </div>
      </section>
      {" "}
      <section style={{"boxSizing": "border-box", "padding": "56px 16px 8px", "display": "flex", "flexDirection": "column", "gap": "20px", "background": "transparent"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "padding": "0 4px"}}>
          <span style={{"alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 10px", "borderRadius": "999px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06)", "color": "#A3242F", "fontSize": "12px", "fontWeight": "700"}}>
            <span style={{"display": "block", "width": "8px", "height": "8px", "borderRadius": "8px", "background": "#C2323F"}} />
            <span>
              {"FAQ"}
            </span>
          </span>
          {" "}
          <h2 style={{"margin": "0", "fontSize": "30px", "lineHeight": "1.12", "fontWeight": "800", "letterSpacing": "-0.03em"}}>
            {"Questions about "}
            <span style={{"color": "#C2323F"}}>
              {"mobile apps."}
            </span>
          </h2>
        </div>
        {" "}
        <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
          {" "}
          {dcList(dcGet(S, "faqs")).map((__it, __i) => { const S5 = { ...S, "q": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <div style={{"borderRadius": "18px", "background": `${dcStr(dcGet(S5, "q.bg"))}`, "border": "1px solid #ECEEF1", "boxShadow": `${dcStr(dcGet(S5, "q.shadow"))}`}}>
                {" "}
                <button type={"button"} onClick={dcGet(S5, "q.toggle")} aria-expanded={dcGet(S5, "q.expanded")} style={{"width": "100%", "minHeight": "64px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "12px 16px 12px 18px", "border": "none", "background": "transparent", "fontFamily": "inherit", "fontSize": "15px", "lineHeight": "1.35", "fontWeight": "800", "color": "#14161A", "textAlign": "left", "cursor": "pointer"}}>
                  {" "}
                  <span>
                    {dcStr(dcGet(S5, "q.q"))}
                  </span>
                  {" "}
                  <span style={{"width": "32px", "height": "32px", "flexShrink": "0", "borderRadius": "10px", "background": `${dcStr(dcGet(S5, "q.iconBg"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S5, "q.iconInk")} strokeWidth={"2.8"} strokeLinecap={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S5, "q.iconPath")} />
                    </svg>
                  </span>
                  {" "}
                </button>
                {" "}
                {dcTruthy(dcGet(S5, "q.open")) ? (<>
                  {" "}
                  <p style={{"margin": "0", "padding": "0 18px 18px", "fontSize": "14px", "lineHeight": "1.6", "color": "#545A66", "fontWeight": "500"}}>
                    {dcStr(dcGet(S5, "q.a"))}
                  </p>
                  {" "}
                </>) : null}
                {" "}
              </div>
              {" "}
            </React.Fragment>); })}
          {" "}
        </div>
      </section>
      {" "}
      <DC_MobConsult  />
      {" "}
      <DC_MobFooter  />
      {" "}
    </div>
    </>
  );
};

export default function MobServiceMobile(props) {
  return <Component {...props} />;
}
