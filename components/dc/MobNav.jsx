'use client';
// AUTO-GENERATED from design/MobNav.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  constructor(props) {
    super(props);
    const o = props.open === true || props.open === 'true';
    this.state = { open: o, svc: o, prod: false, promoHidden: false };
  }
  renderVals() {
    const showPromo = (this.props.promo ?? true) && !this.state.promoHidden;
    const { open, svc, prod } = this.state;
    const services = [
      ['21-Day MVP Sprint', '/MobServiceMVP.dc.html', 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z'],
      ['Mobile App Development', '/MobServiceMobile.dc.html', 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2'],
      ['Web App Development', '/MobServiceWeb.dc.html', 'M2 4h20v16H2Z M2 9h20'],
      ['Ecommerce Development', '/MobServiceEcommerce.dc.html', 'M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6'],
      ['UI/UX Design', '/MobServiceUIUX.dc.html', 'M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z'],
      ['AI Integration', '/MobServiceAI.dc.html', 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z'],
      ['Content Creation', '/MobServiceContent.dc.html', 'M15 10l5-3v10l-5-3Z M3 6h12v12H3Z'],
      ['IT Consultation', '/MobServiceIT.dc.html', 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z']
    ].map(([name, href, icon]) => ({ name, href, icon }));
    const products = [
      { name: 'Seatsnaps', logo: '/logos/products/seatsnaps.png', bg: '#3B74FF', border: 'none', fit: 'cover', pad: '0', href: 'https://seatsnaps.com' },
      { name: 'Snapserve', logo: '/logos/products/snapserve.png', bg: '#FFFFFF', border: '1px solid #ECEEF1', fit: 'contain', pad: '4px', href: 'https://snapserve.shop' },
      { name: 'Hunt', logo: '/logos/products/hunt.png', bg: '#FF6600', border: 'none', fit: 'cover', pad: '0', href: 'https://gethunt.app' }
    ];
    return {
      showPromo, open, services, products,
      rootH: showPromo ? '128px' : '84px',
      menuTop: showPromo ? '124px' : '80px',
      menuIcon: open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16',
      menuLabel: open ? 'Close menu' : 'Open menu',
      menuExpanded: String(open),
      homeBg: (this.props.active || '') === 'Home' ? '#F7F8FA' : 'transparent',
      svcOpen: svc, prodOpen: prod,
      svcExpanded: String(svc), prodExpanded: String(prod),
      svcBg: svc ? '#F7F8FA' : 'transparent', prodBg: prod ? '#F7F8FA' : 'transparent',
      svcChev: svc ? 'rotate(180deg)' : 'none', prodChev: prod ? 'rotate(180deg)' : 'none',
      toggleMenu: () => this.setState({ open: !open }),
      toggleSvc: () => this.setState({ svc: !svc }),
      toggleProd: () => this.setState({ prod: !prod }),
      hidePromo: () => this.setState({ promoHidden: true })
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"position": "relative", "width": "100%", "height": `${dcStr(dcGet(S, "rootH"))}`, "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-mobnav">
      {" "}
      {" "}
      {dcTruthy(dcGet(S, "showPromo")) ? (<>
        {" "}
        <div role={"region"} aria-label={"Christmas offer"} style={{"position": "relative", "height": "44px", "boxSizing": "border-box", "padding": "0 44px 0 16px", "display": "flex", "alignItems": "center", "gap": "10px", "background": "#A3242F", "color": "#FFFFFF", "overflow": "hidden"}}>
          {" "}
          <span className={"mobnav--rsp-snow"} style={{"left": "8%"}} />
          <span className={"mobnav--rsp-snow"} style={{"left": "27%", "animationDelay": "1.8s"}} />
          <span className={"mobnav--rsp-snow"} style={{"left": "52%", "animationDelay": "3.1s"}} />
          <span className={"mobnav--rsp-snow"} style={{"left": "71%", "animationDelay": ".9s"}} />
          <span className={"mobnav--rsp-snow"} style={{"left": "90%", "animationDelay": "2.5s"}} />
          {" "}
          <span style={{"width": "26px", "height": "26px", "flexShrink": "0", "borderRadius": "8px", "background": "#1F6B45", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 8h18v4H3Z M5 12h14v9H5Z M12 8v13 M12 8c-1.5-3-5-4-5-1.5S10 8 12 8Z M12 8c1.5-3 5-4 5-1.5S14 8 12 8Z"} />
            </svg>
          </span>
          {" "}
          <span style={{"flexGrow": "1", "fontSize": "13px", "fontWeight": "600", "lineHeight": "1.25"}}>
            {"Christmas: "}
            <strong style={{"fontWeight": "800"}}>
              {"20% off"}
            </strong>
            {" your build"}
          </span>
          {" "}
          <DcLink href={"/contact"} style={{"flexShrink": "0", "height": "28px", "display": "flex", "alignItems": "center", "padding": "0 10px", "borderRadius": "8px", "background": "#FFFFFF", "color": "#A3242F", "fontSize": "12px", "fontWeight": "800", "textDecoration": "none"}}>
            {"Book a call"}
          </DcLink>
          {" "}
          <button type={"button"} onClick={dcGet(S, "hidePromo")} aria-label={"Close offer"} style={{"position": "absolute", "right": "8px", "top": "8px", "width": "28px", "height": "28px", "border": "none", "borderRadius": "8px", "background": "rgba(255,255,255,0.14)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer"}}>
            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} aria-hidden={"true"}>
              <path d={"M6 6l12 12M18 6L6 18"} />
            </svg>
          </button>
          {" "}
        </div>
        {" "}
      </>) : null}
      {" "}
      {" "}
      <div style={{"height": "84px", "boxSizing": "border-box", "padding": "12px 12px 8px"}}>
        {" "}
        <header style={{"height": "64px", "boxSizing": "border-box", "padding": "0 8px 0 14px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderRadius": "20px", "background": "rgba(255,255,255,0.92)", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.05), 0 12px 28px -16px rgba(20,22,26,0.2)"}}>
          {" "}
          <DcLink href={"/"} aria-label={"Rispit home"} style={{"display": "flex", "alignItems": "center", "gap": "9px", "textDecoration": "none"}}>
            {" "}
            <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "36px", "height": "36px", "display": "block"}} />
            {" "}
            <span style={{"display": "flex", "flexDirection": "column", "gap": "3px"}}>
              <span style={{"fontSize": "21px", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-0.02em", "color": "#C2323F"}}>
                {"Rispit"}
              </span>
              <span style={{"fontSize": "8px", "fontWeight": "700", "lineHeight": "1", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"We do things"}
              </span>
            </span>
            {" "}
          </DcLink>
          {" "}
          <span style={{"display": "flex", "alignItems": "center", "gap": "6px"}}>
            {" "}
            <DcLink href={"/contact"} aria-label={"Book a call with Siva"} style={{"height": "46px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "0 12px 0 4px", "borderRadius": "14px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "13px", "fontWeight": "800", "textDecoration": "none"}}>
              <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "38px", "height": "38px", "display": "block", "borderRadius": "11px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
              <span>
                {"Call Siva"}
              </span>
            </DcLink>
            {" "}
            <button type={"button"} onClick={dcGet(S, "toggleMenu")} aria-label={dcGet(S, "menuLabel")} aria-expanded={dcGet(S, "menuExpanded")} style={{"width": "46px", "height": "46px", "borderRadius": "14px", "border": "1px solid #ECEEF1", "background": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer"}}>
              {" "}
              <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#14161A"} strokeWidth={"2.2"} strokeLinecap={"round"} aria-hidden={"true"}>
                <path d={dcGet(S, "menuIcon")} />
              </svg>
              {" "}
            </button>
            {" "}
          </span>
          {" "}
        </header>
        {" "}
      </div>
      {" "}
      {" "}
      {dcTruthy(dcGet(S, "open")) ? (<>
        {" "}
        <nav className={"mobnav--rsp-in"} aria-label={"Main"} style={{"position": "absolute", "zIndex": "60", "left": "12px", "right": "12px", "top": `${dcStr(dcGet(S, "menuTop"))}`, "boxSizing": "border-box", "padding": "10px", "display": "flex", "flexDirection": "column", "gap": "4px", "borderRadius": "22px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 30px 60px -24px rgba(20,22,26,0.4)"}}>
          {" "}
          <DcLink href={"/"} style={{"display": "flex", "alignItems": "center", "height": "52px", "padding": "0 14px", "borderRadius": "14px", "background": `${dcStr(dcGet(S, "homeBg"))}`, "fontSize": "16px", "fontWeight": "700", "color": "#14161A", "textDecoration": "none"}}>
            {"Home"}
          </DcLink>
          {" "}
          <button type={"button"} onClick={dcGet(S, "toggleSvc")} aria-expanded={dcGet(S, "svcExpanded")} style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "height": "52px", "padding": "0 14px", "border": "none", "borderRadius": "14px", "background": `${dcStr(dcGet(S, "svcBg"))}`, "fontFamily": "inherit", "fontSize": "16px", "fontWeight": "700", "color": "#14161A", "cursor": "pointer"}}>
            {" "}
            <span>
              {"Services"}
            </span>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"transform": `${dcStr(dcGet(S, "svcChev"))}`}}>
              <path d={"M6 9l6 6 6-6"} />
            </svg>
            {" "}
          </button>
          {" "}
          {dcTruthy(dcGet(S, "svcOpen")) ? (<>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "2px", "padding": "2px 4px 6px"}}>
              {" "}
              {dcList(dcGet(S, "services")).map((__it, __i) => { const S7 = { ...S, "s": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <DcLink href={dcGet(S7, "s.href")} style={{"display": "flex", "alignItems": "center", "gap": "12px", "padding": "8px 10px", "borderRadius": "12px", "textDecoration": "none", "color": "#14161A"}}>
                    {" "}
                    <span style={{"width": "36px", "height": "36px", "flexShrink": "0", "borderRadius": "11px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                      <svg width={"17"} height={"17"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                        <path d={dcGet(S7, "s.icon")} />
                      </svg>
                    </span>
                    {" "}
                    <span style={{"fontSize": "14px", "fontWeight": "700"}}>
                      {dcStr(dcGet(S7, "s.name"))}
                    </span>
                    {" "}
                  </DcLink>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          <button type={"button"} onClick={dcGet(S, "toggleProd")} aria-expanded={dcGet(S, "prodExpanded")} style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "height": "52px", "padding": "0 14px", "border": "none", "borderRadius": "14px", "background": `${dcStr(dcGet(S, "prodBg"))}`, "fontFamily": "inherit", "fontSize": "16px", "fontWeight": "700", "color": "#14161A", "cursor": "pointer"}}>
            {" "}
            <span>
              {"Products"}
            </span>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"transform": `${dcStr(dcGet(S, "prodChev"))}`}}>
              <path d={"M6 9l6 6 6-6"} />
            </svg>
            {" "}
          </button>
          {" "}
          {dcTruthy(dcGet(S, "prodOpen")) ? (<>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "2px", "padding": "2px 4px 6px"}}>
              {" "}
              {dcList(dcGet(S, "products")).map((__it, __i) => { const S7 = { ...S, "p": __it, $index: __i }; return (<React.Fragment key={__i}>
                  {" "}
                  <DcLink href={dcGet(S7, "p.href")} target={"_blank"} rel={"noopener"} style={{"display": "flex", "alignItems": "center", "gap": "12px", "padding": "8px 10px", "borderRadius": "12px", "textDecoration": "none", "color": "#14161A"}}>
                    {" "}
                    <span style={{"width": "36px", "height": "36px", "flexShrink": "0", "boxSizing": "border-box", "borderRadius": "11px", "background": `${dcStr(dcGet(S7, "p.bg"))}`, "border": `${dcStr(dcGet(S7, "p.border"))}`, "overflow": "hidden", "padding": `${dcStr(dcGet(S7, "p.pad"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                      <img src={dcGet(S7, "p.logo")} alt={""} style={{"width": "100%", "height": "100%", "display": "block", "objectFit": `${dcStr(dcGet(S7, "p.fit"))}`}} />
                    </span>
                    {" "}
                    <span style={{"flexGrow": "1", "fontSize": "14px", "fontWeight": "700"}}>
                      {dcStr(dcGet(S7, "p.name"))}
                    </span>
                    {" "}
                    <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-label={"Opens in a new tab"}>
                      <path d={"M15 3h6v6 M10 14L21 3 M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"} />
                    </svg>
                    {" "}
                  </DcLink>
                  {" "}
                </React.Fragment>); })}
              {" "}
            </div>
            {" "}
          </>) : null}
          {" "}
          <DcLink href={"/portfolio"} style={{"display": "flex", "alignItems": "center", "height": "52px", "padding": "0 14px", "borderRadius": "14px", "fontSize": "16px", "fontWeight": "700", "color": "#14161A", "textDecoration": "none"}}>
            {"Portfolio"}
          </DcLink>
          {" "}
          <DcLink href={"/blog"} style={{"display": "flex", "alignItems": "center", "height": "52px", "padding": "0 14px", "borderRadius": "14px", "fontSize": "16px", "fontWeight": "700", "color": "#14161A", "textDecoration": "none"}}>
            {"Blogs"}
          </DcLink>
          {" "}
          <DcLink href={"/contact"} style={{"marginTop": "6px", "display": "flex", "alignItems": "center", "gap": "10px", "height": "56px", "padding": "0 16px 0 6px", "borderRadius": "16px", "background": "#C2323F", "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "700", "textDecoration": "none"}}>
            {" "}
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "44px", "height": "44px", "display": "block", "borderRadius": "13px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
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
        </nav>
        {" "}
      </>) : null}
      {" "}
    </div>
    </>
  );
};

export default function MobNav(props) {
  return <Component {...props} />;
}
