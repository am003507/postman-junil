(this["webpackJsonppostman-junil"]=this["webpackJsonppostman-junil"]||[]).push([[0],{269:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e.n(r),o=e(13),a=e.n(o),i=(e(37),e(2)),u=e(0),b=e(3),l=(Object.freeze({}),Object.freeze({}),Object.freeze({}),Object.freeze({get:function(n){return JSON.parse(localStorage.getItem(n)||"null")},set:function(n,t){return localStorage.setItem(n,JSON.stringify(t))}})),s=Object.freeze({fetchAll:function(){return l.get("histories")||[]},put:function(n){l.set("histories",n)},push:function(n){var t=this.fetchAll();t.push(n),this.put(t)},remove:function(n){var t=this.fetchAll();t.splice(n,1),this.put(t)}}),d=Object(b.atom)({key:"historyState",default:s.fetchAll()});function f(){var n=Object(i.a)(["\n  text-align: center;\n  font-size: 13px;\n  color: #666;\n"]);return f=function(){return n},n}function p(){var n=Object(i.a)(["\n  border-bottom: 2px solid #06F;\n  padding: 15px;\n  margin: 0;\n  font-size: 21px;\n  font-weight: 400;\n"]);return p=function(){return n},n}function O(){var n=Object(i.a)(["\n  ul, li {\n    list-style: none;\n  }\n  \n  ul {\n    margin: 0;\n    padding: 5px 0;\n  }\n  \n  li {\n    word-break: break-all;\n    margin: 0;\n    padding: 5px;\n  }\n"]);return O=function(){return n},n}var j=Object(u.a)(O()),v=Object(u.a)(p()),g=Object(u.a)(f()),x=function(){var n=Object(b.useRecoilValue)(d);return Object(u.b)("section",{css:j},Object(u.b)("h2",{css:v},"History"),n.length>0?Object(u.b)("ul",null,n.map((function(n,t){return Object(u.b)("li",{key:t},n)}))):Object(u.b)("p",{css:g},"\uac80\uc0c9 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."))},h=function(){return c.a.createElement("aside",{className:"asideContainer"},c.a.createElement(x,null))},m=e(5),k=e(30),y=e.n(k),C=["GET","POST","PUT","PATCH","DELETE"],w=["Params","Headers","Body"],S=Object(b.atom)({key:"methodState",default:C[0]}),E=Object(b.atom)({key:"tabState",default:0}),z=Object(b.atom)({key:"headersState",default:[]}),R=Object(b.atom)({key:"paramsState",default:[]});function A(){var n=Object(i.a)(["\n  && {\n    padding: 20px;\n    \n    .noneData {\n      background: #f5f5f5;\n      border-radius: 3px;\n      border: 1px solid #ddd;\n      padding: 20px 0;\n      text-align: center;\n      color: #666;\n      font-size: 13px;\n    }\n    \n    ul {\n      max-width: 1000px;\n    }\n    \n    li {\n      margin-bottom: 5px;\n    }\n  }\n"]);return A=function(){return n},n}function N(){var n=Object(i.a)(['\n  && {\n    display: flex;\n    border-bottom: 1px dotted #ddd;\n    padding: 0 10px;\n    \n    li {\n      padding: 15px 10px;\n      position: relative;\n      color: #aaa;\n      font-size: 13px;\n      cursor: pointer;\n      transition: color 0.3s;\n      \n      &::after {\n        content: "";\n        display: block;\n        position: absolute;\n        left: 50%;\n        right: 50%;\n        height: 3px;\n        background: #06F;\n        bottom: -1px;\n        transition-property: left, right;\n        transition-duration: 0.3s;\n      }\n      \n      &:hover {\n        color: #000;\n      }\n      \n      &.active {\n        color: #000;\n        &::after {\n          left: 0;\n          right: 0;\n        }\n      }\n    }\n  }\n']);return N=function(){return n},n}function D(){var n=Object(i.a)(["\n  margin-left: 5px;\n  width: 85px;\n  font-weight: bold;\n  height: 36px;\n  padding: 0 10px;\n"]);return D=function(){return n},n}function J(){var n=Object(i.a)(["\n  ","\n  border-radius: 0 3px 3px 0;\n  margin-left: -1px;\n  width: calc(100% - 190px);\n"]);return J=function(){return n},n}function P(){var n=Object(i.a)(["\n  ","\n  border-radius: 3px 0 0 3px;\n  width: 100px;\n"]);return P=function(){return n},n}function T(){var n=Object(i.a)(["\n  border: 1px solid #bbb;\n  background: #f5f5f5;\n  border-radius: 2px;\n  font-size: 13px;\n  height: 36px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  transition: background-color 0.15s;\n  \n  &:focus {\n    background: #fff;\n    outline: none;\n  }\n"]);return T=function(){return n},n}function V(){var n=Object(i.a)(["\n  padding: 10px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n"]);return V=function(){return n},n}var q=Object(u.a)(V()),F=Object(u.a)(T()),I=Object(u.a)(P(),F),B=Object(u.a)(J(),F),H=Object(u.a)(D()),U=Object(u.a)(N()),W=Object(u.a)(A()),Z=e(10);function G(){var n=Object(i.a)(["\n    ","\n    ","\n  "]);return G=function(){return n},n}function K(){var n=Object(i.a)(["\n  border: none;\n  border-radius: 2px;\n  background-color: #09F;\n  color: #fff;\n  padding: 7px 10px;\n  transition-property: background-color, opacity;\n  transition-duration: 0.2s;\n  box-sizing: border-box;\n  \n  &:not(:disabled) {\n    &:hover,\n    &:focus {\n      background-color: #06F;\n      outline: none;\n    }\n  }\n  \n  &:disabled {\n    opacity: 0.5\n  }\n"]);return K=function(){return n},n}var L=Object(u.a)(K()),M=function(n){var t=n.overrideCss,e=Object(Z.a)(n,["overrideCss"]),r=Object(u.a)(G(),L,t);return Object(u.b)("button",Object.assign({},e,{css:r}),e.children)},$=e(6),_=e(9),Q=/^https?:\/\/([a-zA-Z0-9\uac00-\ud7a3._-]+\.)?[a-zA-Z0-9]+(:[0-9]{2,5})?/,X=function(n){return n.length>0&&Q.test(n)},Y=function(n){var t=n.submitRequest,e=Object(b.useRecoilState)(S),c=Object(m.a)(e,2),o=c[0],a=c[1],i=Object(r.useState)(""),l=Object(m.a)(i,2),s=l[0],d=l[1],f=Object(r.useState)(!0),p=Object(m.a)(f,2),O=p[0],j=p[1],v=function(){if(!X(s))return j(!0);t(s)};return Object(u.b)("div",{css:q},Object(u.b)("select",{value:o,onChange:function(n){var t=n.target;a(t.value)},css:I},C.map((function(n,t){return Object(u.b)("option",{value:n,key:t},n)}))),Object(u.b)("input",{type:"text",css:B,onChange:function(n){var t=n.target;d(t.value),j(!X(s))},onKeyDown:function(n){13===n.keyCode&&v()}}),Object(u.b)(M,{type:"button",overrideCss:H,onClick:v,disabled:O,children:"Send"}))};function nn(){var n=Object(i.a)(["\n  ","\n  ","\n"]);return nn=function(){return n},n}function tn(){var n=Object(i.a)(["\n  p {\n    margin: 0;\n    padding: 0;\n  }\n"]);return tn=function(){return n},n}function en(){var n=Object(i.a)(["\n  ul, li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n"]);return en=function(){return n},n}var rn=Object(u.a)(en()),cn=Object(u.a)(tn()),on=Object(u.a)(nn(),rn,cn),an=e(14);function un(){var n=Object(i.a)(["\n        ","\n        ","\n      "]);return un=function(){return n},n}var bn=function(n){var t=n.overrideCss,e=Object(Z.a)(n,["overrideCss"]);return Object(u.b)("input",Object.assign({},e,{css:Object(u.a)(un(),"\n  padding: 10px;\n  background: #fff;\n  border-radius: 2px;\n  border: 1px solid #bbb;\n  font-size: 13px;\n  box-sizing: border-box;\n  \n  + input,\n  + button,\n  + select {\n    margin-left: 5px;\n  }\n  \n  &:focus {\n    outline: none;\n  }\n",t)}))};function ln(){var n=Object(i.a)(["margin-top: 10px;"]);return ln=function(){return n},n}function sn(){var n=Object(i.a)(["\n  width: calc(50% - 2.5px)  \n"]);return sn=function(){return n},n}var dn=Object(u.a)(sn()),fn=function(n){var t=n.data,e=n.setData,r=function(n,r){return function(c){var o=Object(an.a)(t);o[r]=Object(_.a)({},o[r],Object($.a)({},n,c.target.value)),e(o)}};return Object(u.b)("div",{css:W},0!==t.length?Object(u.b)("ul",null,t.map((function(n,t){var e=n.key,c=n.value;return Object(u.b)("li",{key:t},Object(u.b)(bn,{type:"text",value:e,onChange:r("key",t),overrideCss:dn,placeholder:"key"}),Object(u.b)(bn,{type:"text",value:c,onChange:r("value",t),overrideCss:dn,placeholder:"value"}))}))):Object(u.b)("p",{className:"noneData"},"\ud604\uc7ac \ub4f1\ub85d\ub41c \ud30c\ub77c\ubbf8\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),Object(u.b)("div",{css:Object(u.a)(ln())},Object(u.b)(M,{type:"button",onClick:function(){return e([].concat(Object(an.a)(t),[{key:"",value:""}]))},children:"\ucd94\uac00"})))},pn=function(){var n=Object(b.useRecoilState)(R),t=Object(m.a)(n,2),e=t[0],r=t[1];return c.a.createElement("article",null,c.a.createElement(fn,{data:e,setData:r}))},On=function(){var n=Object(b.useRecoilState)(z),t=Object(m.a)(n,2),e=t[0],r=t[1];return c.a.createElement("article",null,c.a.createElement(fn,{data:e,setData:r}))},jn=function(){return c.a.createElement("article",null)},vn=function(){var n=Object(b.useRecoilState)(E),t=Object(m.a)(n,2),e=t[0],r=t[1];return Object(u.b)("div",{css:on},Object(u.b)("ul",{css:U},w.map((function(n,t){return Object(u.b)("li",{key:t,className:t===e?"active":"",onClick:function(){return r(t)}},n)}))),0===e?Object(u.b)(pn,null):1===e?Object(u.b)(On,null):2===e?Object(u.b)(jn,null):"")};function gn(){var n=Object(i.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  border: none;\n  cursor: pointer;\n  background-color: #666;\n  color: #fff;\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n  transition: background-color 0.3s;\n  \n  &:hover, &:focus {\n    background-color: #000;\n    outline: none;\n  }\n"]);return gn=function(){return n},n}function xn(){var n=Object(i.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 100;\n  cursor: pointer;\n  \n  > div {\n    background-color: #fff;\n    margin: 100px auto 0;\n    padding: 15px;\n    border-radius: 3px;\n    position: relative;\n    box-shadow: 0 0 10px rgba(0,0,0, 0.2);\n    cursor: default;\n  }\n"]);return xn=function(){return n},n}function hn(){var n=Object(i.a)(["\n    width: ","px;\n  "]);return hn=function(){return n},n}function mn(){var n=Object(i.a)(["\n    ","\n    ","\n  "]);return mn=function(){return n},n}var kn=function(n){var t=n.children,e=n.overrideCss,r=n.width,c=void 0===r?700:r,o=n.onClose,a=Object(u.a)(mn(),yn,e),i=Object(u.a)(hn(),c),b=function(){return o()};return Object(u.b)("div",{css:a,onClick:b},Object(u.b)("div",{css:i,onClick:function(n){return n.stopPropagation()}},Object(u.b)("button",{css:Cn,onClick:b},"\xd7"),t))},yn=Object(u.a)(xn()),Cn=Object(u.a)(gn());function wn(){var n=Object(i.a)(["\n        margin-top: 10px;\n        text-align: right;\n      "]);return wn=function(){return n},n}var Sn=function(n){var t=n.children,e=n.onClose;return Object(u.b)(kn,{width:300,onClose:e},t,Object(u.b)("div",{css:Object(u.a)(wn())},Object(u.b)(M,{onClick:function(){return e()}},"\ud655\uc778")))},En=Object(b.atom)({key:"responseState",default:null});function zn(){var n=Object(i.a)(["\n  font-size: 21px;\n  margin: 0;\n  padding: 15px;\n  font-weight: 400;\n"]);return zn=function(){return n},n}var Rn=Object(u.a)(zn()),An=function(){var n=Object(r.useState)(""),t=Object(m.a)(n,2),e=t[0],c=t[1],o=Object(b.useSetRecoilState)(En),a=Object(b.useRecoilState)(d),i=Object(m.a)(a,2),l=(i[0],i[1]),f=Object(b.useRecoilValue)(R),p=Object(b.useRecoilValue)(z),O=Object(b.useRecoilValue)(S);return Object(u.b)("section",null,Object(u.b)("h2",{css:Rn},"Request"),Object(u.b)(Y,{submitRequest:function(n){var t,e="".concat(n).concat(function(n){var t=n.filter((function(n){var t=n.key,e=n.value;return![t.trim(),e.trim()].includes("")})).map((function(n){var t=n.key,e=n.value;return"".concat(t,"=").concat(encodeURIComponent(e))})).join("&");return t.length?"?".concat(t):""}(f));y()({url:e,method:O,headers:(t=p,t.filter((function(n){var t=n.key,e=n.value;return![t.trim(),e.trim()].includes("")})).reduce((function(n,t){var e=t.key,r=t.value;return Object(_.a)({},n,Object($.a)({},e,r))}),{}))}).then((function(n){s.push(e),l(s.fetchAll()),o(n)})).catch((function(n){console.error(n.response),c("".concat(n))}))}}),Object(u.b)(vn,null),e.length>0&&Object(u.b)(Sn,{onClose:function(){return c("")}},e))};function Nn(){var n=Object(i.a)(["\n  margin: 0 15px 15px;\n  background: #f5f5f5;\n  padding: 20px;\n  text-align: center;\n  color: #666;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n  font-size: 13px;\n"]);return Nn=function(){return n},n}function Dn(){var n=Object(i.a)(["\n  font-size: 21px;\n  margin: 0;\n  padding: 15px;\n  font-weight: 400;\n"]);return Dn=function(){return n},n}function Jn(){var n=Object(i.a)(["\n  border-top: 1px solid #ddd;\n  overflow: auto;\n"]);return Jn=function(){return n},n}var Pn=Object(u.a)(Jn()),Tn=Object(u.a)(Dn()),Vn=Object(u.a)(Nn()),qn=e(31),Fn=e.n(qn),In=function(){var n=Object(b.useRecoilValue)(En);return Object(u.b)("section",{css:Pn},Object(u.b)("h2",{css:Tn},"Response"),null!==n?Object(u.b)(Fn.a,null,JSON.stringify(n.data,null,4)):Object(u.b)("p",{css:Vn},"\uc544\uc9c1 Request\ub97c \ubcf4\ub0b4\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))},Bn=function(){return c.a.createElement("section",{className:"formContainer"},c.a.createElement(An,null),c.a.createElement(In,null))},Hn=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null),c.a.createElement(Bn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e(268);a.a.render(c.a.createElement(b.RecoilRoot,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(Hn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},32:function(n,t,e){n.exports=e(269)},37:function(n,t,e){}},[[32,1,2]]]);
//# sourceMappingURL=main.5ce99468.chunk.js.map