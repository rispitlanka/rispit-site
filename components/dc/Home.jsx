'use client';
// AUTO-GENERATED from design/Home.dc.html by scripts/compile-dc.mjs — do not edit by hand.
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
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"width": "100%", "display": "flex", "flexDirection": "column", "background": "#FFFFFF", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "color": "#14161A"}} className="dc-home">
      {" "}
      <div style={{"position": "sticky", "top": "0", "zIndex": "50"}}>
        {" "}
        <DC_Main  />
        {" "}
      </div>
      {" "}
      <DC_Hero  />
      {" "}
      <DC_Services  />
      {" "}
      <DC_Clients  />
      {" "}
      <DC_Products  />
      {" "}
      <DC_Testimonials  />
      {" "}
      <DC_Blog  />
      {" "}
      <DC_TechB  />
      {" "}
      <DC_Consultation  />
      {" "}
      <DC_Footer  />
      {" "}
    </div>
    </>
  );
};

export default function Home(props) {
  return <Component {...props} />;
}
