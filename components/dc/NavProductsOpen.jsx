'use client';
// AUTO-GENERATED from design/NavProductsOpen.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_Main from './Main';

class Component extends DCLogic {
  renderVals() {
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"position": "relative", "width": "100%", "height": "560px", "background": "#F7F8FA", "fontFamily": "'Plus Jakarta Sans', system-ui, sans-serif", "overflow": "hidden"}} className="dc-navproductsopen">
      {" "}
      <div style={{"position": "relative", "zIndex": "2"}}>
        {" "}
        <DC_Main active={"Home"} open={"products"} />
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
};

export default function NavProductsOpen(props) {
  return <Component {...props} />;
}
