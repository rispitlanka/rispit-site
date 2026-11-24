'use client';
// AUTO-GENERATED from design/Main.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';


class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { open: props.open || 'none', promoHidden: false };
  }
  renderVals() {
    const active = this.props.active ?? 'Home';
    const showPromo = (this.props.promo ?? true) && !this.state.promoHidden;
    const open = this.state.open;
    const setOpen = (v) => this.setState({ open: v });
    const defs = [
      { label: 'Home', href: '/Home.dc.html' },
      { label: 'Services', menu: 'services' },
      { label: 'Products', menu: 'products' },
      { label: 'Portfolio', href: '/Portfolio.dc.html' },
      { label: 'Blogs', href: '/BlogList.dc.html' }
    ];
    const links = defs.map((d) => {
      const isOpen = d.menu && open === d.menu;
      const on = label => label === active;
      const hl = on(d.label) || isOpen;
      return {
        label: d.label,
        href: d.href || '#',
        isMenu: !!d.menu,
        isLink: !d.menu,
        expanded: String(!!isOpen),
        chev: isOpen ? 'rotate(180deg)' : 'none',
        current: on(d.label) ? 'page' : 'false',
        bg: hl ? '#FFFFFF' : 'transparent',
        shadow: hl ? '0 1px 2px rgba(20,22,26,0.08), 0 4px 10px -4px rgba(20,22,26,0.12)' : 'none',
        weight: hl ? '700' : '600',
        fg: hl ? '#14161A' : '#545A66',
        toggle: () => setOpen(isOpen ? 'none' : d.menu),
        openIt: () => setOpen(d.menu)
      };
    });
    const services = [
      { name: '21-Day MVP Sprint', line: 'Idea to launch in three weeks', href: '/ServiceMVP.dc.html', icon: 'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1Z M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2Z' },
      { name: 'Mobile App Development', line: 'iOS & Android, one codebase', href: '/ServiceMobile.dc.html', icon: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2' },
      { name: 'Web App Development', line: 'SaaS, portals and dashboards', href: '/ServiceWeb.dc.html', icon: 'M2 4h20v16H2Z M2 9h20' },
      { name: 'Ecommerce Development', line: 'Online stores that sell', href: '/ServiceEcommerce.dc.html', icon: 'M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6' },
      { name: 'UI/UX Design', line: 'Research, design and prototypes', href: '/ServiceUIUX.dc.html', icon: 'M12 20h9 M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z' },
      { name: 'AI Integration', line: 'Assistants, search, automation', href: '/ServiceAI.dc.html', icon: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z' },
      { name: 'Content Creation', line: 'Copy, videos and visuals', href: '/ServiceContent.dc.html', icon: 'M15 10l5-3v10l-5-3Z M3 6h12v12H3Z' },
      { name: 'IT Consultation', line: 'Clear technical advice', href: '/ServiceIT.dc.html', icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18Z M15.5 8.5l-2 5-5 2 2-5Z' }
    ];
    // Rispit products. tag: 'Live' | 'Beta' | 'Soon' (leave '' to hide the pill).
    const products = [
      { name: 'Seatsnaps', logo: '/logos/products/seatsnaps.png', tag: '', line: 'seatsnaps.com', href: 'https://seatsnaps.com', tileBg: '#3B74FF', tileBorder: 'none', fit: 'cover', pad: '0' },
      { name: 'Snapserve', logo: '/logos/products/snapserve.png', tag: '', line: 'snapserve.shop', href: 'https://snapserve.shop', tileBg: '#FFFFFF', tileBorder: '1px solid #ECEEF1', fit: 'contain', pad: '5px' },
      { name: 'Hunt', logo: '/logos/products/hunt.png', tag: '', line: 'gethunt.app', href: 'https://gethunt.app', tileBg: '#FF6600', tileBorder: 'none', fit: 'cover', pad: '0' }
    ];
    return {
      accent: this.props.accent ?? '#C2323F',
      links, services, products, showPromo,
      rootH: showPromo ? '144px' : '96px',
      dropTop: showPromo ? '146px' : '98px',
      servicesOpen: open === 'services',
      productsOpen: open === 'products',
      closeMenu: () => setOpen('none'),
      hidePromo: () => this.setState({ promoHidden: true })
    };
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div onMouseLeave={dcGet(S, "closeMenu")} style={{"position": "relative", "width": "100%", "height": `${dcStr(dcGet(S, "rootH"))}`, "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-main">
      {" "}
      {" "}
      {dcTruthy(dcGet(S, "showPromo")) ? (<>
        {" "}
        <div role={"region"} aria-label={"Christmas offer"} style={{"position": "relative", "height": "48px", "boxSizing": "border-box", "padding": "0 24px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "16px", "background": "#A3242F", "color": "#FFFFFF", "overflow": "hidden"}}>
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "6%", "animationDelay": "0s"}} />
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "14%", "animationDelay": "2.2s"}} />
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "23%", "animationDelay": "4.1s"}} />
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "31%", "animationDelay": "1.3s"}} />
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "66%", "animationDelay": "3.2s"}} />
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "74%", "animationDelay": ".6s"}} />
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "83%", "animationDelay": "2.8s"}} />
          {" "}
          <span className={"main--rsp-snow"} style={{"left": "92%", "animationDelay": "4.7s"}} />
          {" "}
          <svg className={"main--rsp-twinkle"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} aria-hidden={"true"}>
            <path d={"M12 2v20 M4.9 4.9l14.2 14.2 M2 12h20 M4.9 19.1L19.1 4.9 M12 2l-2 2 M12 2l2 2 M12 22l-2-2 M12 22l2-2"} />
          </svg>
          {" "}
          <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "4px 10px 4px 6px", "borderRadius": "999px", "background": "#1F6B45", "fontSize": "12px", "fontWeight": "800", "letterSpacing": "0.04em"}}>
            {" "}
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 8h18v4H3Z M5 12h14v9H5Z M12 8v13 M12 8c-1.5-3-5-4-5-1.5S10 8 12 8Z M12 8c1.5-3 5-4 5-1.5S14 8 12 8Z"} />
            </svg>
            {" "}
            <span>
              {"CHRISTMAS OFFER"}
            </span>
            {" "}
          </span>
          {" "}
          <span style={{"fontSize": "14px", "fontWeight": "600"}}>
            {"Get "}
            <strong style={{"fontWeight": "800"}}>
              {"20% off"}
            </strong>
            {" building your startup when you book before 31st December."}
          </span>
          {" "}
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "6px", "height": "32px", "padding": "0 14px", "borderRadius": "10px", "background": "#FFFFFF", "color": "#A3242F", "fontSize": "13px", "fontWeight": "800", "textDecoration": "none", "boxShadow": "0 4px 10px -4px rgba(0,0,0,0.3)"}}>
            {" "}
            <span>
              {"Book a free call"}
            </span>
            {" "}
            <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#A3242F"} strokeWidth={"2.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
            {" "}
          </DcLink>
          {" "}
          <svg className={"main--rsp-twinkle"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2"} strokeLinecap={"round"} aria-hidden={"true"} style={{"animationDelay": "1.2s"}}>
            <path d={"M12 2v20 M4.9 4.9l14.2 14.2 M2 12h20 M4.9 19.1L19.1 4.9"} />
          </svg>
          {" "}
          <button type={"button"} onClick={dcGet(S, "hidePromo")} aria-label={"Close offer"} style={{"position": "absolute", "right": "18px", "top": "10px", "width": "28px", "height": "28px", "border": "none", "borderRadius": "8px", "background": "rgba(255,255,255,0.14)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer"}}>
            {" "}
            <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} aria-hidden={"true"}>
              <path d={"M6 6l12 12M18 6L6 18"} />
            </svg>
            {" "}
          </button>
          {" "}
        </div>
        {" "}
      </>) : null}
      {" "}
      {" "}
      <div style={{"height": "96px", "boxSizing": "border-box", "padding": "16px 24px 8px"}}>
        {" "}
        <header style={{"height": "72px", "boxSizing": "border-box", "padding": "0 12px 0 20px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderRadius": "22px", "background": "rgba(255,255,255,0.9)", "border": "1px solid #ECEEF1", "boxShadow": "inset 0 1px 0 #FFFFFF, 0 1px 2px rgba(20,22,26,0.05), 0 14px 32px -16px rgba(20,22,26,0.18)", "backdropFilter": "blur(14px)"}}>
          {" "}
          <DcLink href={"/"} aria-label={"Rispit home"} style={{"display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none"}}>
            {" "}
            <img src={"/assets/82822259e9e80e60af7f19aab558f522.png"} alt={""} style={{"width": "42px", "height": "42px", "display": "block"}} />
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
              {" "}
              <span style={{"fontSize": "24px", "fontWeight": "800", "lineHeight": "1", "letterSpacing": "-0.02em", "color": `${dcStr(dcGet(S, "accent"))}`}}>
                {"Rispit"}
              </span>
              {" "}
              <span style={{"fontSize": "9px", "fontWeight": "700", "lineHeight": "1", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#545A66"}}>
                {"We do things"}
              </span>
              {" "}
            </div>
            {" "}
          </DcLink>
          {" "}
          <nav aria-label={"Main"} style={{"display": "flex", "alignItems": "center", "gap": "4px", "padding": "5px", "borderRadius": "14px", "background": "#F1F2F4", "boxShadow": "inset 0 1px 2px rgba(20,22,26,0.06)"}}>
            {" "}
            {dcList(dcGet(S, "links")).map((__it, __i) => { const S6 = { ...S, "l": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                {dcTruthy(dcGet(S6, "l.isMenu")) ? (<>
                  {" "}
                  <button type={"button"} onClick={dcGet(S6, "l.toggle")} onMouseEnter={dcGet(S6, "l.openIt")} aria-expanded={dcGet(S6, "l.expanded")} aria-haspopup={"true"} style={{"display": "flex", "alignItems": "center", "gap": "6px", "height": "40px", "padding": "0 14px 0 18px", "border": "none", "borderRadius": "10px", "background": `${dcStr(dcGet(S6, "l.bg"))}`, "boxShadow": `${dcStr(dcGet(S6, "l.shadow"))}`, "fontFamily": "inherit", "fontSize": "15px", "fontWeight": `${dcStr(dcGet(S6, "l.weight"))}`, "color": `${dcStr(dcGet(S6, "l.fg"))}`, "cursor": "pointer"}}>
                    {" "}
                    <span>
                      {dcStr(dcGet(S6, "l.label"))}
                    </span>
                    {" "}
                    <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={dcGet(S6, "l.fg")} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{"transform": `${dcStr(dcGet(S6, "l.chev"))}`, "transition": "transform .2s ease"}}>
                      <path d={"M6 9l6 6 6-6"} />
                    </svg>
                    {" "}
                  </button>
                  {" "}
                </>) : null}
                {" "}
                {dcTruthy(dcGet(S6, "l.isLink")) ? (<>
                  {" "}
                  <DcLink href={dcGet(S6, "l.href")} aria-current={dcGet(S6, "l.current")} onMouseEnter={dcGet(S6, "closeMenu")} style={{"display": "flex", "alignItems": "center", "height": "40px", "padding": "0 18px", "borderRadius": "10px", "background": `${dcStr(dcGet(S6, "l.bg"))}`, "boxShadow": `${dcStr(dcGet(S6, "l.shadow"))}`, "fontSize": "15px", "fontWeight": `${dcStr(dcGet(S6, "l.weight"))}`, "color": `${dcStr(dcGet(S6, "l.fg"))}`, "textDecoration": "none"}}>
                    {dcStr(dcGet(S6, "l.label"))}
                  </DcLink>
                  {" "}
                </>) : null}
                {" "}
              </React.Fragment>); })}
            {" "}
          </nav>
          {" "}
          <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "10px", "height": "50px", "padding": "0 20px 0 6px", "borderRadius": "16px", "background": `${dcStr(dcGet(S, "accent"))}`, "color": "#FFFFFF", "fontSize": "15px", "fontWeight": "700", "textDecoration": "none", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), 0 8px 18px -8px rgba(194,50,63,0.65)"}}>
            {" "}
            <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "38px", "height": "38px", "display": "block", "borderRadius": "11px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
            {" "}
            <span>
              {"Book a call with Siva"}
            </span>
            {" "}
            <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M5 12h14M13 5l7 7-7 7"} />
            </svg>
            {" "}
          </DcLink>
          {" "}
        </header>
        {" "}
      </div>
      {" "}
      {" "}
      {dcTruthy(dcGet(S, "servicesOpen")) ? (<>
        {" "}
        <div className={"main--rsp-drop main--rsp-menu"} role={"menu"} aria-label={"Services"} style={{"position": "absolute", "zIndex": "60", "left": "50%", "top": `${dcStr(dcGet(S, "dropTop"))}`, "width": "920px", "marginLeft": "-460px", "boxSizing": "border-box", "padding": "14px", "display": "flex", "gap": "14px", "borderRadius": "24px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 30px 60px -24px rgba(20,22,26,0.35)"}}>
          {" "}
          <div style={{"flexGrow": "1", "display": "grid", "gridTemplateColumns": "repeat(2, minmax(0, 1fr))", "gap": "4px"}}>
            {" "}
            {dcList(dcGet(S, "services")).map((__it, __i) => { const S6 = { ...S, "s": __it, $index: __i }; return (<React.Fragment key={__i}>
                {" "}
                <DcLink href={dcGet(S6, "s.href")} role={"menuitem"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "12px", "borderRadius": "16px", "textDecoration": "none", "color": "#14161A"}}>
                  {" "}
                  <span style={{"width": "46px", "height": "46px", "flexShrink": "0", "borderRadius": "14px", "background": "#FBECEE", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <svg width={"21"} height={"21"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={dcGet(S6, "s.icon")} />
                    </svg>
                    {" "}
                  </span>
                  {" "}
                  <span style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
                    {" "}
                    <span style={{"fontSize": "15px", "fontWeight": "800"}}>
                      {dcStr(dcGet(S6, "s.name"))}
                    </span>
                    {" "}
                    <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                      {dcStr(dcGet(S6, "s.line"))}
                    </span>
                    {" "}
                  </span>
                  {" "}
                </DcLink>
                {" "}
              </React.Fragment>); })}
            {" "}
          </div>
          {" "}
          <div style={{"width": "250px", "flexShrink": "0", "boxSizing": "border-box", "padding": "22px", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "16px", "borderRadius": "18px", "background": "#C2323F", "color": "#FFFFFF", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.25)"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <span style={{"alignSelf": "flex-start", "padding": "5px 10px", "borderRadius": "999px", "background": "rgba(255,255,255,0.18)", "fontSize": "11px", "fontWeight": "800", "letterSpacing": "0.06em"}}>
                {"MOST POPULAR"}
              </span>
              {" "}
              <span style={{"fontSize": "20px", "lineHeight": "1.25", "fontWeight": "800", "letterSpacing": "-0.02em"}}>
                {"21-Day MVP Sprint"}
              </span>
              {" "}
              <span style={{"fontSize": "13px", "lineHeight": "1.5", "fontWeight": "500"}}>
                {"Your idea, designed, built and launched in three weeks."}
              </span>
              {" "}
            </div>
            {" "}
            <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "8px", "height": "46px", "padding": "0 14px 0 5px", "borderRadius": "14px", "background": "#FFFFFF", "color": "#14161A", "fontSize": "14px", "fontWeight": "700", "textDecoration": "none"}}>
              {" "}
              <img src={"/assets/66baedd13e96fd14d8f78d471b6115cf.png"} alt={""} style={{"width": "36px", "height": "36px", "display": "block", "borderRadius": "11px", "objectFit": "cover", "border": "2px solid rgba(255,255,255,0.9)", "boxSizing": "border-box"}} />
              {" "}
              <span style={{"flexGrow": "1"}}>
                {"Book a call with Siva"}
              </span>
              {" "}
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
              {" "}
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </>) : null}
      {" "}
      {" "}
      {dcTruthy(dcGet(S, "productsOpen")) ? (<>
        {" "}
        <div className={"main--rsp-drop main--rsp-menu"} role={"menu"} aria-label={"Products"} style={{"position": "absolute", "zIndex": "60", "left": "640px", "top": `${dcStr(dcGet(S, "dropTop"))}`, "width": "460px", "boxSizing": "border-box", "padding": "12px", "display": "flex", "flexDirection": "column", "gap": "4px", "borderRadius": "24px", "background": "#FFFFFF", "border": "1px solid #ECEEF1", "boxShadow": "0 1px 2px rgba(20,22,26,0.06), 0 30px 60px -24px rgba(20,22,26,0.35)"}}>
          {" "}
          <span style={{"padding": "8px 12px 6px", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#545A66"}}>
            {"Our products"}
          </span>
          {" "}
          {dcList(dcGet(S, "products")).map((__it, __i) => { const S5 = { ...S, "p": __it, $index: __i }; return (<React.Fragment key={__i}>
              {" "}
              <DcLink href={dcGet(S5, "p.href")} target={"_blank"} rel={"noopener"} role={"menuitem"} style={{"display": "flex", "alignItems": "center", "gap": "14px", "padding": "12px", "borderRadius": "16px", "textDecoration": "none", "color": "#14161A"}}>
                {" "}
                <span style={{"width": "48px", "height": "48px", "flexShrink": "0", "boxSizing": "border-box", "borderRadius": "14px", "background": `${dcStr(dcGet(S5, "p.tileBg"))}`, "border": `${dcStr(dcGet(S5, "p.tileBorder"))}`, "display": "flex", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "padding": `${dcStr(dcGet(S5, "p.pad"))}`}}>
                  <img src={dcGet(S5, "p.logo")} alt={""} style={{"width": "100%", "height": "100%", "display": "block", "objectFit": `${dcStr(dcGet(S5, "p.fit"))}`}} />
                </span>
                {" "}
                <span style={{"flexGrow": "1", "display": "flex", "flexDirection": "column", "gap": "2px"}}>
                  {" "}
                  <span style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "15px", "fontWeight": "800"}}>
                    {dcStr(dcGet(S5, "p.name"))}
                    {dcTruthy(dcGet(S5, "p.tag")) ? (<>
                      <span style={{"padding": "2px 8px", "borderRadius": "999px", "background": "#F1F2F4", "fontSize": "11px", "fontWeight": "700", "color": "#545A66"}}>
                        {dcStr(dcGet(S5, "p.tag"))}
                      </span>
                    </>) : null}
                  </span>
                  {" "}
                  <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#545A66"}}>
                    {dcStr(dcGet(S5, "p.line"))}
                  </span>
                  {" "}
                </span>
                {" "}
                <span style={{"width": "34px", "height": "34px", "flexShrink": "0", "borderRadius": "10px", "background": "#F7F8FA", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                  {" "}
                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-label={"Opens in a new tab"}>
                    <path d={"M15 3h6v6 M10 14L21 3 M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"} />
                  </svg>
                  {" "}
                </span>
                {" "}
              </DcLink>
              {" "}
            </React.Fragment>); })}
          {" "}
          <div style={{"marginTop": "6px", "padding": "14px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "borderRadius": "16px", "background": "#F7F8FA"}}>
            {" "}
            <span style={{"fontSize": "13px", "fontWeight": "700"}}>
              {"Have a product idea of your own?"}
            </span>
            {" "}
            <DcLink href={"/contact"} style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "800", "color": "#C2323F", "textDecoration": "none"}}>
              {"Book a call"}
              <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#C2323F"} strokeWidth={"2.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M5 12h14M13 5l7 7-7 7"} />
              </svg>
            </DcLink>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </>) : null}
      {" "}
    </div>
    </>
  );
};

export default function Main(props) {
  return <Component {...props} />;
}
