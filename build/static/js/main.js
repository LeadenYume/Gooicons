!function(e){function t(t){for(var r,a,i=t[0],l=t[1],s=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=this.webpackJsonpgooicon=this.webpackJsonpgooicon||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([9,2]),n()}({14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(8),a=n.n(o),i=(n(14),n(2)),l=n(6),s=n(7),u=n.n(s),f=n(3),d=n.n(f),b=n(0);function h(e){var t=Object(r.useRef)(c.a.createRef()),n=Object(r.useState)(!!e.startValue),o=Object(i.a)(n,2),a=o[0],s=o[1];console.log(a);var f=Object(r.useRef)(a);return f.current=a,Object(b.jsx)("div",{onClick:function(t){t.preventDefault(),e.onChange&&e.onChange(!f.current),s(!f.current)},ref:t.current,className:u()(d.a.main,Object(l.a)({},d.a.mainChecked,a)),children:Object(b.jsx)("div",{className:u()(d.a.switch,Object(l.a)({},d.a.switchChecked,a))})})}n(16);function p(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(!1),a=Object(i.a)(o,2),l=a[0],s=a[1];return chrome.storage.local.get("enabled",(function(e){s(!(!e||!e.enabled)),c(!1)})),Object(b.jsx)("div",{className:"app flex-center",children:n?Object(b.jsx)("div",{className:"flex-line-space logo",children:"Gooicons"}):Object(b.jsxs)("div",{className:"flex-line-space",children:[Object(b.jsx)("div",{className:"logo",children:"Gooicons"}),Object(b.jsx)("div",{className:"flex-center",children:Object(b.jsx)(h,{startValue:l,onChange:function(e){chrome.storage.local.set({enabled:e}),chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.update({url:e[0].url})}))}})})]})})}a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={main:"SliderCheckbox_main__2JP2_",switch:"SliderCheckbox_switch__2pc60",mainChecked:"SliderCheckbox_mainChecked__3SzkL",switchChecked:"SliderCheckbox_switchChecked__2_X8P"}},9:function(e,t,n){e.exports=n(18)}});
//# sourceMappingURL=main.js.map