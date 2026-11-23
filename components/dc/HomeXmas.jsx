'use client';
// AUTO-GENERATED from design/HomeXmas.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';
import DC_Hero from './Hero';
import DC_Services from './Services';
import DC_Clients from './Clients';
import DC_Products from './Products';
import DC_Testimonials from './Testimonials';
import DC_Blog from './Blog';
import DC_TechB from './TechB';
import DC_Consultation from './Consultation';
import DC_Footer from './Footer';

class Component extends DCLogic {
  renderVals() {
    const rnd = (i, k) => {
      const v = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
      return v - Math.floor(v);
    };
    const flakes = [];
    for (let i = 0; i < 120; i++) {
      const s = 10 + Math.round(rnd(i, 1) * 14);
      flakes.push({
        s,
        x: (rnd(i, 2) * 98).toFixed(1) + '%',
        y: Math.round(rnd(i, 3) * 7600) + 'px',
        dur: (9 + rnd(i, 4) * 9).toFixed(1) + 's',
        d: (-rnd(i, 5) * 12).toFixed(1) + 's',
        o: (0.45 + rnd(i, 6) * 0.5).toFixed(2),
        c: rnd(i, 7) > 0.5 ? '#B9C9DA' : '#D3DEEA'
      });
    }
    const colors = [['#C2323F', 'rgba(194,50,63,0.7)'], ['#E8C15A', 'rgba(232,193,90,0.8)'], ['#2E9E5B', 'rgba(46,158,91,0.7)'], ['#5B9BD5', 'rgba(91,155,213,0.7)']];
    const bulbs = [];
    for (let i = 0; i < 24; i++) {
      const x = 52 + i * 58;
      const phase = ((x - 40) % 180) / 180;
      const y = Math.round(2 + 52 * phase * (1 - phase));
      const c = colors[i % 4];
      bulbs.push({ x: x + 'px', y: y + 'px', c: c[0], glow: c[1], d: ((i % 4) * 0.4).toFixed(1) + 's' });
    }
    return { flakes, bulbs };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div className={"dc-homexmas " + "homexmas--xmas"} style={{"position": "relative", "width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A", "overflow": "hidden"}}>
      {" "}
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main  />
        {" "}
        <div aria-hidden={"true"} style={{"position": "relative", "height": "34px", "marginTop": "-10px", "pointerEvents": "none"}}>
          {" "}
          <svg width={"1440"} height={"34"} viewBox={"0 0 1440 34"} style={{"position": "absolute", "left": "0", "top": "0"}} fill={"none"}>
            <path d={"M40 4 Q 130 30 220 4 Q 310 30 400 4 Q 490 30 580 4 Q 670 30 760 4 Q 850 30 940 4 Q 1030 30 1120 4 Q 1210 30 1300 4 Q 1390 30 1480 4"} stroke={"#1F6B45"} strokeWidth={"2.5"} />
          </svg>
          {" "}
          {dcList(dcGet(S, "bulbs")).map((__it, __i) => { const S5 = { ...S, "b": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <span className={"homexmas--rsp-bulb"} style={{"position": "absolute", "left": `${dcStr(dcGet(S5, "b.x"))}`, "top": `${dcStr(dcGet(S5, "b.y"))}`, "width": "10px", "height": "14px", "borderRadius": "6px 6px 8px 8px", "background": `${dcStr(dcGet(S5, "b.c"))}`, "boxShadow": `0 0 10px 2px ${dcStr(dcGet(S5, "b.glow"))}`, "animationDelay": `${dcStr(dcGet(S5, "b.d"))}`}} />
              {" "}
            </React.Fragment>); })}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#F2F6FA"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.35", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p1"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#9FB6CC"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#9FB6CC"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#9FB6CC"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#9FB6CC"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p1)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 12 Q 60 -2 120 15 Q 180 3 240 20 Q 300 -2 360 10 Q 420 -2 480 15 Q 540 3 600 20 Q 660 -2 720 10 Q 780 -2 840 15 Q 900 3 960 20 Q 1020 -2 1080 10 Q 1140 -2 1200 15 Q 1260 3 1320 20 Q 1380 -2 1440 10 L 1440 26 Q 1395 49 1350 41 Q 1305 49 1260 36 Q 1215 44 1170 31 Q 1125 39 1080 26 Q 1035 49 990 41 Q 945 49 900 36 Q 855 44 810 31 Q 765 39 720 26 Q 675 49 630 41 Q 585 49 540 36 Q 495 44 450 31 Q 405 39 360 26 Q 315 49 270 41 Q 225 49 180 36 Q 135 44 90 31 Q 45 39 0 26 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"1370"} cy={"45"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1100"} cy={"30"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"830"} cy={"35"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"560"} cy={"40"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"290"} cy={"45"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Hero  />
        {" "}
      </div>
      {" "}
      {" "}
      <section style={{"height": "560px", "boxSizing": "border-box", "padding": "56px 24px 24px"}}>
        {" "}
        <div className={"homexmas--rsp-cap"} style={{"position": "relative", "height": "100%", "boxSizing": "border-box", "padding": "0 56px", "display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "40px", "alignItems": "center", "borderRadius": "32px", "background": "#A3242F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.2), 0 30px 60px -30px rgba(163,36,47,0.7)"}}>
          {" "}
          <div aria-hidden={"true"} style={{"position": "absolute", "inset": "0", "borderRadius": "32px", "overflow": "hidden", "pointerEvents": "none"}}>
            {" "}
            <svg width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.14"}}>
              <defs>
                <pattern id={"rsp-sf"} width={"90"} height={"90"} patternUnits={"userSpaceOnUse"}>
                  <path d={"M20 10v20 M10 20h20 M13 13l14 14 M27 13L13 27"} stroke={"#FFFFFF"} strokeWidth={"1.6"} strokeLinecap={"round"} />
                  <circle cx={"65"} cy={"60"} r={"2.5"} fill={"#FFFFFF"} />
                  <circle cx={"50"} cy={"25"} r={"1.6"} fill={"#FFFFFF"} />
                </pattern>
              </defs>
              <rect width={"100%"} height={"100%"} fill={"url(#rsp-sf)"} />
            </svg>
            {" "}
          </div>
          {" "}
          <div style={{"position": "relative", "gridColumn": "span 7", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "22px"}}>
            {" "}
            <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px 7px 8px", "borderRadius": "999px", "background": "#1F6B45", "fontSize": "13px", "fontWeight": "800", "letterSpacing": "0.04em"}}>
              {" "}
              <span style={{"width": "26px", "height": "26px", "borderRadius": "26px", "background": "rgba(255,255,255,0.16)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M3 8h18v4H3Z M5 12h14v9H5Z M12 8v13 M12 8c-1.5-3-5-4-5-1.5S10 8 12 8Z M12 8c1.5-3 5-4 5-1.5S14 8 12 8Z"} />
                </svg>
              </span>
              {" "}
              <span>
                {"CHRISTMAS OFFER · 20% OFF"}
              </span>
              {" "}
            </span>
            {" "}
            <h2 style={{"margin": "0", "fontSize": "54px", "lineHeight": "1.05", "fontWeight": "800", "letterSpacing": "-0.04em"}}>
              {"This Christmas, give your idea the gift of a launch."}
            </h2>
            {" "}
            <p style={{"margin": "0", "maxWidth": "560px", "fontSize": "18px", "lineHeight": "1.6", "fontWeight": "500"}}>
              {"Book your build before [31 December] and get 20% off. Start the new year with a real product your users can try."}
            </p>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
              {" "}
              <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "58px", "padding": "0 22px 0 7px", "borderRadius": "18px", "background": "#FFFFFF", "color": "#14161A", "fontSize": "16px", "fontWeight": "800", "textDecoration": "none", "boxShadow": "0 14px 28px -12px rgba(60,10,16,0.55)"}}>
                {" "}
                <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover"}} />
                {" "}
                <span>
                  {"Book a call with Siva"}
                </span>
                {" "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M5 12h14M13 5l7 7-7 7"} />
                </svg>
                {" "}
              </DcLink>
              {" "}
              <span style={{"fontSize": "14px", "fontWeight": "700", "color": "#F4D6DA"}}>
                {"Offer ends [31 December]"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {" "}
          <div aria-hidden={"true"} style={{"position": "relative", "gridColumn": "span 5", "height": "440px"}}>
            {" "}
            <svg className={"homexmas--rsp-tw"} width={"150"} height={"150"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.3"} strokeLinecap={"round"} style={{"position": "absolute", "left": "130px", "top": "70px", "opacity": "0.95"}}>
              <path d={"M12 2v20 M4.9 4.9l14.2 14.2 M2 12h20 M4.9 19.1L19.1 4.9 M12 2l-2.5 2.5 M12 2l2.5 2.5 M12 22l-2.5-2.5 M12 22l2.5-2.5 M2 12l2.5-2.5 M2 12l2.5 2.5 M22 12l-2.5-2.5 M22 12l-2.5 2.5"} />
            </svg>
            {" "}
            <svg className={"homexmas--rsp-tw"} width={"70"} height={"70"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.6"} strokeLinecap={"round"} style={{"position": "absolute", "left": "330px", "top": "40px", "opacity": "0.7", "animationDelay": ".8s"}}>
              <path d={"M12 2v20 M4.9 4.9l14.2 14.2 M2 12h20 M4.9 19.1L19.1 4.9"} />
            </svg>
            {" "}
            <svg className={"homexmas--rsp-tw"} width={"56"} height={"56"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} style={{"position": "absolute", "left": "40px", "top": "250px", "opacity": "0.6", "animationDelay": "1.4s"}}>
              <path d={"M12 2v20 M4.9 4.9l14.2 14.2 M2 12h20 M4.9 19.1L19.1 4.9"} />
            </svg>
            {" "}
            <svg width={"460"} height={"130"} viewBox={"0 0 460 130"} style={{"position": "absolute", "left": "-10px", "bottom": "-24px"}} fill={"#FFFFFF"}>
              <path d={"M0 130 C30 70 90 60 140 78 S230 40 290 62 S380 30 460 70 V130 Z"} />
              <path d={"M0 130 C60 100 120 96 190 108 S320 86 460 104 V130 Z"} fill={"#EEF3F8"} />
            </svg>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#FFF8F1"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.28", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p2"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#E2B9A0"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#E2B9A0"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#E2B9A0"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#E2B9A0"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p2)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 17 Q 60 3 120 20 Q 180 -2 240 10 Q 300 -2 360 15 Q 420 3 480 20 Q 540 -2 600 10 Q 660 -2 720 15 Q 780 3 840 20 Q 900 -2 960 10 Q 1020 -2 1080 15 Q 1140 3 1200 20 Q 1260 -2 1320 10 Q 1380 -2 1440 15 L 1440 31 Q 1395 39 1350 26 Q 1305 49 1260 41 Q 1215 49 1170 36 Q 1125 44 1080 31 Q 1035 39 990 26 Q 945 49 900 41 Q 855 49 810 36 Q 765 44 720 31 Q 675 39 630 26 Q 585 49 540 41 Q 495 49 450 36 Q 405 44 360 31 Q 315 39 270 26 Q 225 49 180 41 Q 135 49 90 36 Q 45 44 0 31 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"23"} cy={"30"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1153"} cy={"35"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"883"} cy={"40"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"613"} cy={"45"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"343"} cy={"30"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Services  />
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#F2F6FA"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.35", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p3"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#9FB6CC"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#9FB6CC"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#9FB6CC"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#9FB6CC"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p3)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 22 Q 60 -2 120 10 Q 180 -2 240 15 Q 300 3 360 20 Q 420 -2 480 10 Q 540 -2 600 15 Q 660 3 720 20 Q 780 -2 840 10 Q 900 -2 960 15 Q 1020 3 1080 20 Q 1140 -2 1200 10 Q 1260 -2 1320 15 Q 1380 3 1440 20 L 1440 36 Q 1395 44 1350 31 Q 1305 39 1260 26 Q 1215 49 1170 41 Q 1125 49 1080 36 Q 1035 44 990 31 Q 945 39 900 26 Q 855 49 810 41 Q 765 49 720 36 Q 675 44 630 31 Q 585 39 540 26 Q 495 49 450 41 Q 405 49 360 36 Q 315 44 270 31 Q 225 39 180 26 Q 135 49 90 41 Q 45 49 0 36 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"76"} cy={"35"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1206"} cy={"40"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"936"} cy={"45"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"666"} cy={"30"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"396"} cy={"35"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Clients  />
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#FFF8F1"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.28", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p4"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#E2B9A0"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#E2B9A0"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#E2B9A0"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#E2B9A0"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p4)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 12 Q 60 -2 120 15 Q 180 3 240 20 Q 300 -2 360 10 Q 420 -2 480 15 Q 540 3 600 20 Q 660 -2 720 10 Q 780 -2 840 15 Q 900 3 960 20 Q 1020 -2 1080 10 Q 1140 -2 1200 15 Q 1260 3 1320 20 Q 1380 -2 1440 10 L 1440 41 Q 1395 49 1350 36 Q 1305 44 1260 31 Q 1215 39 1170 26 Q 1125 49 1080 41 Q 1035 49 990 36 Q 945 44 900 31 Q 855 39 810 26 Q 765 49 720 41 Q 675 49 630 36 Q 585 44 540 31 Q 495 39 450 26 Q 405 49 360 41 Q 315 49 270 36 Q 225 44 180 31 Q 135 39 90 26 Q 45 49 0 41 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"1409"} cy={"40"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1139"} cy={"45"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"869"} cy={"30"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"599"} cy={"35"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"329"} cy={"40"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Products  />
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#F2F6FA"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.35", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p5"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#9FB6CC"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#9FB6CC"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#9FB6CC"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#9FB6CC"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p5)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 17 Q 60 3 120 20 Q 180 -2 240 10 Q 300 -2 360 15 Q 420 3 480 20 Q 540 -2 600 10 Q 660 -2 720 15 Q 780 3 840 20 Q 900 -2 960 10 Q 1020 -2 1080 15 Q 1140 3 1200 20 Q 1260 -2 1320 10 Q 1380 -2 1440 15 L 1440 26 Q 1395 49 1350 41 Q 1305 49 1260 36 Q 1215 44 1170 31 Q 1125 39 1080 26 Q 1035 49 990 41 Q 945 49 900 36 Q 855 44 810 31 Q 765 39 720 26 Q 675 49 630 41 Q 585 49 540 36 Q 495 44 450 31 Q 405 39 360 26 Q 315 49 270 41 Q 225 49 180 36 Q 135 44 90 31 Q 45 39 0 26 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"62"} cy={"45"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1192"} cy={"30"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"922"} cy={"35"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"652"} cy={"40"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"382"} cy={"45"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Testimonials  />
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#FFF8F1"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.28", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p6"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#E2B9A0"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#E2B9A0"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#E2B9A0"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#E2B9A0"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p6)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 22 Q 60 -2 120 10 Q 180 -2 240 15 Q 300 3 360 20 Q 420 -2 480 10 Q 540 -2 600 15 Q 660 3 720 20 Q 780 -2 840 10 Q 900 -2 960 15 Q 1020 3 1080 20 Q 1140 -2 1200 10 Q 1260 -2 1320 15 Q 1380 3 1440 20 L 1440 31 Q 1395 39 1350 26 Q 1305 49 1260 41 Q 1215 49 1170 36 Q 1125 44 1080 31 Q 1035 39 990 26 Q 945 49 900 41 Q 855 49 810 36 Q 765 44 720 31 Q 675 39 630 26 Q 585 49 540 41 Q 495 49 450 36 Q 405 44 360 31 Q 315 39 270 26 Q 225 49 180 41 Q 135 49 90 36 Q 45 44 0 31 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"1395"} cy={"30"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1125"} cy={"35"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"855"} cy={"40"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"585"} cy={"45"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"315"} cy={"30"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Blog  />
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#F2F6FA"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.35", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p7"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#9FB6CC"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#9FB6CC"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#9FB6CC"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#9FB6CC"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p7)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 12 Q 60 -2 120 15 Q 180 3 240 20 Q 300 -2 360 10 Q 420 -2 480 15 Q 540 3 600 20 Q 660 -2 720 10 Q 780 -2 840 15 Q 900 3 960 20 Q 1020 -2 1080 10 Q 1140 -2 1200 15 Q 1260 3 1320 20 Q 1380 -2 1440 10 L 1440 36 Q 1395 44 1350 31 Q 1305 39 1260 26 Q 1215 49 1170 41 Q 1125 49 1080 36 Q 1035 44 990 31 Q 945 39 900 26 Q 855 49 810 41 Q 765 49 720 36 Q 675 44 630 31 Q 585 39 540 26 Q 495 49 450 41 Q 405 49 360 36 Q 315 44 270 31 Q 225 39 180 26 Q 135 49 90 41 Q 45 49 0 36 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"48"} cy={"35"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1178"} cy={"40"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"908"} cy={"45"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"638"} cy={"30"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"368"} cy={"35"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_TechB  />
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#FFF8F1"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.28", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p8"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#E2B9A0"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#E2B9A0"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#E2B9A0"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#E2B9A0"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p8)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 17 Q 60 3 120 20 Q 180 -2 240 10 Q 300 -2 360 15 Q 420 3 480 20 Q 540 -2 600 10 Q 660 -2 720 15 Q 780 3 840 20 Q 900 -2 960 10 Q 1020 -2 1080 15 Q 1140 3 1200 20 Q 1260 -2 1320 10 Q 1380 -2 1440 15 L 1440 41 Q 1395 49 1350 36 Q 1305 44 1260 31 Q 1215 39 1170 26 Q 1125 49 1080 41 Q 1035 49 990 36 Q 945 44 900 31 Q 855 39 810 26 Q 765 49 720 41 Q 675 49 630 36 Q 585 44 540 31 Q 495 39 450 26 Q 405 49 360 41 Q 315 49 270 36 Q 225 44 180 31 Q 135 39 90 26 Q 45 49 0 41 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"1381"} cy={"40"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1111"} cy={"45"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"841"} cy={"30"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"571"} cy={"35"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"301"} cy={"40"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Consultation  />
        {" "}
      </div>
      {" "}
      {" "}
      <div aria-hidden={"true"} style={{"height": "70px", "marginBottom": "-46px", "position": "relative", "zIndex": "4", "pointerEvents": "none"}}>
        {" "}
        <svg width={"1440"} height={"70"} viewBox={"0 0 1440 70"} preserveAspectRatio={"none"} fill={"#FFFFFF"}>
          <path d={"M0 70 C120 30 220 40 340 48 S560 20 700 38 S940 14 1080 36 S1300 22 1440 40 V70 Z"} />
        </svg>
        {" "}
      </div>
      {" "}
      <div className={"homexmas--xsec"} style={{"position": "relative", "background": "#F2F6FA"}}>
        {" "}
        <svg aria-hidden={"true"} width={"100%"} height={"100%"} style={{"position": "absolute", "inset": "0", "opacity": "0.35", "pointerEvents": "none"}}>
          <defs>
            <pattern id={"rsp-p9"} width={"140"} height={"140"} patternUnits={"userSpaceOnUse"}>
              <path d={"M30 14v24 M18 26h24 M21.5 17.5l17 17 M38.5 17.5l-17 17"} stroke={"#9FB6CC"} strokeWidth={"1.6"} strokeLinecap={"round"} />
              <circle cx={"100"} cy={"90"} r={"2.5"} fill={"#9FB6CC"} />
              <circle cx={"80"} cy={"30"} r={"1.8"} fill={"#9FB6CC"} />
              <path d={"M104 104v14 M97 111h14"} stroke={"#9FB6CC"} strokeWidth={"1.4"} strokeLinecap={"round"} />
            </pattern>
          </defs>
          <rect width={"100%"} height={"100%"} fill={"url(#rsp-p9)"} />
        </svg>
        {" "}
        <svg aria-hidden={"true"} width={"1440"} height={"64"} viewBox={"0 0 1440 64"} preserveAspectRatio={"none"} style={{"position": "absolute", "left": "0", "top": "-14px", "zIndex": "6", "pointerEvents": "none", "filter": "drop-shadow(0 3px 3px rgba(120,140,165,0.3))"}}>
          <path d={"M0 22 Q 60 -2 120 10 Q 180 -2 240 15 Q 300 3 360 20 Q 420 -2 480 10 Q 540 -2 600 15 Q 660 3 720 20 Q 780 -2 840 10 Q 900 -2 960 15 Q 1020 3 1080 20 Q 1140 -2 1200 10 Q 1260 -2 1320 15 Q 1380 3 1440 20 L 1440 26 Q 1395 49 1350 41 Q 1305 49 1260 36 Q 1215 44 1170 31 Q 1125 39 1080 26 Q 1035 49 990 41 Q 945 49 900 36 Q 855 44 810 31 Q 765 39 720 26 Q 675 49 630 41 Q 585 49 540 36 Q 495 44 450 31 Q 405 39 360 26 Q 315 49 270 41 Q 225 49 180 36 Q 135 44 90 31 Q 45 39 0 26 Z"} fill={"#FFFFFF"} />
          <ellipse cx={"34"} cy={"45"} rx={"5"} ry={"8"} fill={"#FFFFFF"} />
          <ellipse cx={"1164"} cy={"30"} rx={"5"} ry={"12"} fill={"#FFFFFF"} />
          <ellipse cx={"894"} cy={"35"} rx={"5"} ry={"11"} fill={"#FFFFFF"} />
          <ellipse cx={"624"} cy={"40"} rx={"5"} ry={"10"} fill={"#FFFFFF"} />
          <ellipse cx={"354"} cy={"45"} rx={"5"} ry={"9"} fill={"#FFFFFF"} />
        </svg>
        {" "}
        <DC_Footer  />
        {" "}
      </div>
      {" "}
      {" "}
      <div aria-hidden={"true"} style={{"position": "absolute", "inset": "0", "zIndex": "40", "pointerEvents": "none", "overflow": "hidden"}}>
        {" "}
        {dcList(dcGet(S, "flakes")).map((__it, __i) => { const S4 = { ...S, "f": __it, $index: __i }; return (<React.Fragment key={__i}>
            {" "}
            <svg className={"homexmas--rsp-flake"} width={dcGet(S4, "f.s")} height={dcGet(S4, "f.s")} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S4, "f.c")} strokeWidth={"2"} strokeLinecap={"round"} style={{"left": `${dcStr(dcGet(S4, "f.x"))}`, "top": `${dcStr(dcGet(S4, "f.y"))}`, "animationDuration": `${dcStr(dcGet(S4, "f.dur"))}`, "animationDelay": `${dcStr(dcGet(S4, "f.d"))}`, "opacity": `${dcStr(dcGet(S4, "f.o"))}`}}>
              <path d={"M12 2v20 M4.9 4.9l14.2 14.2 M2 12h20 M4.9 19.1L19.1 4.9 M12 2l-2.5 2.5 M12 2l2.5 2.5 M12 22l-2.5-2.5 M12 22l2.5-2.5"} />
            </svg>
            {" "}
          </React.Fragment>); })}
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
};

export default function HomeXmas(props) {
  return <Component {...props} />;
}
