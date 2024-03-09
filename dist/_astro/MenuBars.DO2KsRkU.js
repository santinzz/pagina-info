import{r as l}from"./index.NEDEFKed.js";/* empty css                       */var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=l,f=Symbol.for("react.element"),_=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,x=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function u(s,e,o){var r,n={},c=null,a=null;o!==void 0&&(c=""+o),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)d.call(e,r)&&!v.hasOwnProperty(r)&&(n[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:f,type:s,key:c,ref:a,props:n,_owner:x.current}}i.Fragment=_;i.jsx=u;i.jsxs=u;p.exports=i;var t=p.exports;function j(){const[s,e]=l.useState(!1),o=()=>{e(r=>!r)};return t.jsxs("div",{className:"bars-container",onClick:o,children:[t.jsx("div",{className:`${s?"menu-clicked-bars":""}`}),t.jsx("div",{className:`${s?"menu-clicked-bars":""}`}),t.jsx("div",{className:`${s?"menu-clicked-bars":""}`}),t.jsx("input",{type:"checkbox"})]})}export{j as MenuBars};
