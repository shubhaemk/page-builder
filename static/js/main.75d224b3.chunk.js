(this["webpackJsonppage-builder"]=this["webpackJsonppage-builder"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),o=n(8),i=n(3),u=n(9),s=n(2),m=n(28);n(14);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M33.144,2.471C15.336,2.471,0.85,16.958,0.85,34.765s14.48,32.293,32.294,32.293s32.294-14.486,32.294-32.293 S50.951,2.471,33.144,2.471z"}),a.createElement("path",{d:"M137.663,2.471c-17.807,0-32.294,14.487-32.294,32.294s14.487,32.293,32.294,32.293c17.808,0,32.297-14.486,32.297-32.293 S155.477,2.471,137.663,2.471z"}),a.createElement("path",{d:"M32.3,170.539c17.807,0,32.297-14.483,32.297-32.293c0-17.811-14.49-32.297-32.297-32.297S0,120.436,0,138.246 C0,156.056,14.493,170.539,32.3,170.539z"}),a.createElement("path",{d:"M136.819,170.539c17.804,0,32.294-14.483,32.294-32.293c0-17.811-14.478-32.297-32.294-32.297 c-17.813,0-32.294,14.486-32.294,32.297C104.525,156.056,119.012,170.539,136.819,170.539z"}),a.createElement("path",{d:"M33.039,209.108c-17.807,0-32.3,14.483-32.3,32.294c0,17.804,14.493,32.293,32.3,32.293s32.293-14.482,32.293-32.293 S50.846,209.108,33.039,209.108z"}),a.createElement("path",{d:"M137.564,209.108c-17.808,0-32.3,14.483-32.3,32.294c0,17.804,14.487,32.293,32.3,32.293 c17.804,0,32.293-14.482,32.293-32.293S155.368,209.108,137.564,209.108z"}))),b=a.createElement("g",null),j=a.createElement("g",null),O=a.createElement("g",null),x=a.createElement("g",null),v=a.createElement("g",null),g=a.createElement("g",null),E=a.createElement("g",null),h=a.createElement("g",null),y=a.createElement("g",null),C=a.createElement("g",null),I=a.createElement("g",null),S=a.createElement("g",null),N=a.createElement("g",null),w=a.createElement("g",null),T=a.createElement("g",null);function z(e,t){var n=e.title,c=e.titleId,r=f(e,["title","titleId"]);return a.createElement("svg",d({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"276.167px",height:"276.167px",viewBox:"0 0 276.167 276.167",style:{enableBackground:"new 0 0 276.167 276.167"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,p,b,j,O,x,v,g,E,h,y,C,I,S,N,w,T)}var k=a.forwardRef(z),V=(n.p,n(15),n(1)),D=function(e){var t=e.elementType,n=e.onItemDragOver;return Object(V.jsxs)("div",{className:"draggable-element",onDragEnd:function(e){var a=e.pageX,c=e.pageY,r=e.touches;r&&1===r.length&&(a=r[0].pageX,c=r[0].pageY),n(t,a,c)},draggable:!0,children:[Object(V.jsx)(k,{className:"draggable-element-icon"}),Object(V.jsx)("span",{className:"draggable-element-title",children:t})]})},X=(n(17),[{elementId:1,elementType:"label"},{elementId:2,elementType:"input"},{elementId:3,elementType:"button"}]),F=function(e){var t=e.triggerCreateItem,n=e.maxXCoordinate,a=e.maxYCoordinate,c=function(e,c,r){c>=0&&r>=0&&c<n&&r<a&&t(e,c,r)};return Object(V.jsxs)("div",{className:"list-container",children:[Object(V.jsx)("span",{className:"list-container-title",children:"Blocks"}),X.map((function(e){var t=e.elementId,n=e.elementType;return Object(V.jsx)(D,{elementType:n,onItemDragOver:c},t)}))]})},Y=(n(18),n(19),function(e){var t=e.displayText,n=e.onClickFunction;return Object(V.jsx)("button",{className:"button-component",onClick:function(e){return n&&n(e)},style:{fontSize:"inherit",fontWeight:"inherit"},children:t})}),M=(n(20),function(e){var t=e.displayText,n=e.setInputValue,c=e.isFocused,r=Object(a.useState)(null),l=Object(s.a)(r,2),o=l[0],i=l[1];return Object(a.useEffect)((function(){t!==o&&i(t)}),[t,o]),Object(V.jsx)("input",{className:"input-component",style:{fontSize:"inherit",fontWeight:"inherit"},onChange:function(e){var t=e.target.value;n&&n(t),i(t)},value:o||"",autoFocus:c})}),W=(n(21),function(e){var t=e.displayText;return Object(V.jsx)("span",{className:"label-component",style:{fontSize:"inherit",fontWeight:"inherit"},children:t})}),P=(n(22),function(e){var t=e.element,n=e.maxXCoordinate,c=e.maxYCoordinate,r=e.setSelectedElement,l=e.updateElementPosition,o=e.updateElementText,i=e.removeCanvasElement,u=t.elementId,m=t.elementType,d=t.text,f=t.xCoordinate,p=t.yCoordinate,b=t.zIndex,j=t.fontSize,O=t.fontWeight,x=Object(a.useState)(!1),v=Object(s.a)(x,2),g=v[0],E=v[1],h=Object(a.useState)({x:f,y:p}),y=Object(s.a)(h,2),C=y[0],I=y[1],S=Object(a.useRef)(),N=Object(a.useRef)(g),w=function(e){return o(e,u)};Object(a.useEffect)((function(){var e=function(e){S.current&&!S.current.contains(e.target)&&E(!1)},t=function(e){if(N.current){var t=e.keyCode;13===t&&(r(u),E(!1)),8===t&&(i(u),E(!1))}};return document.addEventListener("mousedown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keyup",t)}}),[S,g]),Object(a.useEffect)((function(){I({x:f||0,y:p||0})}),[f,p]),Object(a.useEffect)((function(){N.current=g}),[g]);var T,z={position:"absolute",left:C.x,top:C.y,fontSize:"".concat(j,"rem"),fontWeight:O,zIndex:b,border:"0.2rem solid ".concat(g?"#E00":"transparent"),padding:"0.5rem"};return Object(V.jsx)("div",{ref:S,className:(T=m,"element-component-".concat(T," element-component-common")),style:z,onDragStart:function(){S.current.style.opacity="0"},onDrag:function(e){var t=e.pageX,a=e.pageY,r=e.touches;r&&1===r.length&&(t=r[0].pageX,a=r[0].pageY),I((function(e){return{x:t>0&&t<n?t:e.x,y:a>0&&a<c?a:e.y}}))},onDragEnd:function(){l(C.x,C.y,u)},onDragOver:function(e){e.preventDefault(),S.current.style.opacity="1"},onClick:function(e){e.preventDefault(),E(!0)},draggable:!0,children:function(e,t){return"input"===e?Object(V.jsx)(M,{displayText:t,setInputValue:w}):"label"===e?Object(V.jsx)(W,{displayText:t}):"button"===e?Object(V.jsx)(Y,{displayText:t}):null}(m,d)})}),L="0.25rem solid transparent",R=function(e){var t=e.canvasElements,n=e.maxCoordinate,c=e.isElementInCanvas,r=e.updateCanvasMaxCoordinates,l=e.setSelectedElement,o=e.updateElementPosition,i=e.updateElementText,u=e.removeCanvasElement,s=Object(a.useRef)();return Object(a.useEffect)((function(){var e=s.current,t=e.clientHeight,n=e.clientWidth;r(n,t)}),[]),Object(a.useEffect)((function(){s.current.style.border=L}),[t,c]),Object(V.jsx)("div",{className:"canvas-container",ref:s,onDragOver:function(e){s.current.style.border="0.25rem dashed rgba(0,0,0, 0.4)",e.preventDefault()},onDragLeave:function(){s.current.style.border=L},children:t.map((function(e){var t=e.elementId;return Object(V.jsx)(P,{element:e,maxXCoordinate:n.x,maxYCoordinate:n.y,setSelectedElement:l,updateElementPosition:o,updateElementText:i,removeCanvasElement:u},t)}))})};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var U=a.createElement("path",{d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"});function H(e,t){var n=e.title,c=e.titleId,r=J(e,["title","titleId"]);return a.createElement("svg",B({height:"329pt",viewBox:"0 0 329.26933 329",width:"329pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,U)}var _=a.forwardRef(H),q=(n.p,n(23),n(24),function(e){var t=e.title,n=e.inputValue,a=e.setInputValue,c=e.isFocused;return Object(V.jsxs)("div",{className:"labelled-input-container",children:[Object(V.jsx)(W,{displayText:t}),Object(V.jsx)(M,{displayText:n,setInputValue:a,isFocused:c})]})}),A=function(e){var t=e.selectedElement,n=e.updateElementValues,c=e.cancelUpdateElement,r=e.maxXCoordinate,l=e.maxYCoordinate,o=t.elementType,u=t.text,m=t.xCoordinate,d=t.yCoordinate,f=t.fontSize,p=t.fontWeight,b=t.isElementNew,j=Object(a.useState)(""),O=Object(s.a)(j,2),x=O[0],v=O[1],g=Object(a.useState)("0"),E=Object(s.a)(g,2),h=E[0],y=E[1],C=Object(a.useState)("0"),I=Object(s.a)(C,2),S=I[0],N=I[1],w=Object(a.useState)("0"),T=Object(s.a)(w,2),z=T[0],k=T[1],D=Object(a.useState)("0"),X=Object(s.a)(D,2),F=X[0],M=X[1],W=Object(a.useState)(null),P=Object(s.a)(W,2),L=P[0],R=P[1],B=function(){c()},J=function(e){e.preventDefault(),!(!h.trim().length||isNaN(Number(h))||parseInt(h)<0||parseInt(h)>r?(R("Enter valid X Coordinate value"),1):!S.trim().length||isNaN(Number(S))||parseInt(S)<0||parseInt(S)>l?(R("Enter valid Y Coordinate value"),1):!z.trim().length||isNaN(Number(z))||parseFloat(z)<0?(R("Enter valid Font Size value"),1):!F.trim().length||isNaN(Number(F))||parseInt(F)<0?(R("Enter valid Font Weight value"),1):(R(null),0))&&function(){var e=Object(i.a)(Object(i.a)({},t),{},{text:x,xCoordinate:parseInt(h),yCoordinate:parseInt(S),fontSize:z,fontWeight:F});n(b,e)}()};return Object(a.useEffect)((function(){v(u||"")}),[u]),Object(a.useEffect)((function(){y("".concat(m))}),[m]),Object(a.useEffect)((function(){N("".concat(d))}),[d]),Object(a.useEffect)((function(){k("".concat(f))}),[f]),Object(a.useEffect)((function(){M("".concat(p))}),[p]),Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&B()};return window.addEventListener("keyup",e),function(){window.removeEventListener("keyup",e)}}),[]),Object(V.jsx)("div",{className:"modal-container",children:Object(V.jsxs)("div",{className:"modal-component",children:[Object(V.jsxs)("div",{className:"modal-component-header",children:[Object(V.jsx)("span",{className:"modal-component-header-value",children:"Edit ".concat(o)}),Object(V.jsx)(_,{className:"modal-component-header-icon",onClick:function(){return B()}})]}),Object(V.jsxs)("form",{className:"modal-component-body",onSubmit:J,children:[Object(V.jsx)(q,{title:"Text",inputValue:x,setInputValue:v,isFocused:!0}),Object(V.jsx)(q,{title:"X ( Max ".concat(r,")"),inputValue:h,setInputValue:y}),Object(V.jsx)(q,{title:"Y ( Max ".concat(l,")"),inputValue:S,setInputValue:N}),Object(V.jsx)(q,{title:"Font Size",inputValue:z,setInputValue:k}),Object(V.jsx)(q,{title:"Font Weight",inputValue:F,setInputValue:M}),Object(V.jsx)("span",{className:"modal-component-body-error",children:L}),Object(V.jsx)("div",{className:"modal-component-body-button",children:Object(V.jsx)(Y,{displayText:"Save Changes",onClickFunction:J})})]})]})})},G="canvas-elements",K=function(){var e=Object(a.useState)({x:0,y:0}),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),l=Object(s.a)(r,2),d=l[0],f=l[1],p=Object(a.useState)(!1),b=Object(s.a)(p,2),j=b[0],O=b[1],x=Object(a.useState)([]),v=Object(s.a)(x,2),g=v[0],E=v[1],h=Object(a.useState)(null),y=Object(s.a)(h,2),C=y[0],I=y[1],S=Object(a.useRef)(g);return Object(a.useEffect)((function(){S.current=g,j&&localStorage.setItem(G,JSON.stringify(g))}),[g,j]),Object(a.useEffect)((function(){E(JSON.parse(localStorage.getItem(G))||[]),O(!0)}),[]),Object(V.jsxs)("div",{className:"home-screen-container",children:[Object(V.jsx)(R,{canvasElements:g,maxCoordinate:n,isElementInCanvas:d,setSelectedElement:function(e){var t,n=Object(o.a)(S.current);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.elementId===e)return void I(a)}}catch(c){n.e(c)}finally{n.f()}I(null)},updateElementPosition:function(e,t,n){E((function(a){return a.map((function(a){return a.elementId===n?Object(i.a)(Object(i.a)({},a),{},{xCoordinate:e,yCoordinate:t,elementId:Object(m.a)(),isElementNew:!1}):a}))}))},updateElementText:function(e,t){E(g.map((function(n){return n.elementId===t?Object(i.a)(Object(i.a)({},n),{},{text:e,isElementNew:!1}):n})))},updateCanvasMaxCoordinates:function(e,t){c({x:e,y:t-30})},removeCanvasElement:function(e){return E(g.filter((function(t){return t.elementId!==e})))}}),Object(V.jsx)(F,{triggerCreateItem:function(e,t,n){var a={elementId:Object(m.a)(),elementType:e,text:null,xCoordinate:t,yCoordinate:n,zIndex:"".concat(100+S.current.length),fontSize:2,fontWeight:100,isElementNew:!0};I(a),f(!0)},maxXCoordinate:n.x,maxYCoordinate:n.y}),C&&Object(V.jsx)(A,{selectedElement:C,updateElementValues:function(e,t){E(e?[].concat(Object(u.a)(g),[Object(i.a)(Object(i.a)({},t),{},{isElementNew:!1})]):function(e){return e.map((function(e){return e.elementId===t.elementId?Object(i.a)(Object(i.a)({},t),{},{elementId:Object(m.a)(),isElementNew:!1}):e}))}),I(null)},cancelUpdateElement:function(){I(null),f(!1)},maxXCoordinate:n.x,maxYCoordinate:n.y})]})};var Q=function(){return Object(V.jsx)(K,{})};n(25);l.a.render(Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(Q,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.75d224b3.chunk.js.map