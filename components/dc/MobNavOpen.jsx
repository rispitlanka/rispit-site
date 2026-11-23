'use client';
// AUTO-GENERATED from design/MobNavOpen.dc.html by scripts/compile-dc.mjs — do not edit by hand.
import React from 'react';
import { DCLogic, DcLink, dcGet, dcStr, dcList, dcTruthy, dcStyle, dcFormSubmit } from '../dc-runtime';
import DC_MobNav from './MobNav';

class Component extends DCLogic {
  renderVals() {
    return {};
  }
}

Component.prototype.template = function (S) {
  return (
    <>
      <div style={{"position": "relative", "width": "100%", "height": "960px", "background": "#F7F8FA", "overflow": "hidden"}} className="dc-mobnavopen">
      {" "}
      <div style={{"position": "relative", "zIndex": "2"}}>
        {" "}
        <DC_MobNav active={"Home"} open={"true"} />
        {" "}
      </div>
      {" "}
    </div>
    </>
  );
};

export default function MobNavOpen(props) {
  return <Component {...props} />;
}
