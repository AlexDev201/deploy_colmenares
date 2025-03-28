(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const x of i.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&n(x)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var Ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ps(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Op={exports:{}},Ss={},Lp={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),wg=Symbol.for("react.portal"),Dg=Symbol.for("react.fragment"),bg=Symbol.for("react.strict_mode"),kg=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Pg=Symbol.for("react.forward_ref"),Sg=Symbol.for("react.suspense"),$g=Symbol.for("react.memo"),Ng=Symbol.for("react.lazy"),bm=Symbol.iterator;function Tg(e){return e===null||typeof e!="object"?null:(e=bm&&e[bm]||e["@@iterator"],typeof e=="function"?e:null)}var Rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,Vp={};function y0(e,t,r){this.props=e,this.context=t,this.refs=Vp,this.updater=r||Rp}y0.prototype.isReactComponent={};y0.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y0.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hp(){}Hp.prototype=y0.prototype;function Tc(e,t,r){this.props=e,this.context=t,this.refs=Vp,this.updater=r||Rp}var zc=Tc.prototype=new Hp;zc.constructor=Tc;Mp(zc,y0.prototype);zc.isPureReactComponent=!0;var km=Array.isArray,Up=Object.prototype.hasOwnProperty,Ic={current:null},Wp={key:!0,ref:!0,__self:!0,__source:!0};function Qp(e,t,r){var n,o={},i=null,x=null;if(t!=null)for(n in t.ref!==void 0&&(x=t.ref),t.key!==void 0&&(i=""+t.key),t)Up.call(t,n)&&!Wp.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:Si,type:e,key:i,ref:x,props:o,_owner:Ic.current}}function zg(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function Ig(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var _m=/\/+/g;function Lx(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ig(""+e.key):t.toString(36)}function Na(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var x=!1;if(e===null)x=!0;else switch(i){case"string":case"number":x=!0;break;case"object":switch(e.$$typeof){case Si:case wg:x=!0}}if(x)return x=e,o=o(x),e=n===""?"."+Lx(x,0):n,km(o)?(r="",e!=null&&(r=e.replace(_m,"$&/")+"/"),Na(o,t,r,"",function(d){return d})):o!=null&&(Oc(o)&&(o=zg(o,r+(!o.key||x&&x.key===o.key?"":(""+o.key).replace(_m,"$&/")+"/")+e)),t.push(o)),1;if(x=0,n=n===""?".":n+":",km(e))for(var c=0;c<e.length;c++){i=e[c];var l=n+Lx(i,c);x+=Na(i,t,r,l,o)}else if(l=Tg(e),typeof l=="function")for(e=l.call(e),c=0;!(i=e.next()).done;)i=i.value,l=n+Lx(i,c++),x+=Na(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return x}function ca(e,t,r){if(e==null)return e;var n=[],o=0;return Na(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Og(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jt={current:null},Ta={transition:null},Lg={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:Ic};function Yp(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:ca,forEach:function(e,t,r){ca(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ca(e,function(){t++}),t},toArray:function(e){return ca(e,function(t){return t})||[]},only:function(e){if(!Oc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=y0;fe.Fragment=Dg;fe.Profiler=kg;fe.PureComponent=Tc;fe.StrictMode=bg;fe.Suspense=Sg;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg;fe.act=Yp;fe.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Mp({},e.props),o=e.key,i=e.ref,x=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,x=Ic.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)Up.call(t,l)&&!Wp.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];n.children=c}return{$$typeof:Si,type:e.type,key:o,ref:i,props:n,_owner:x}};fe.createContext=function(e){return e={$$typeof:jg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_g,_context:e},e.Consumer=e};fe.createElement=Qp;fe.createFactory=function(e){var t=Qp.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Pg,render:e}};fe.isValidElement=Oc;fe.lazy=function(e){return{$$typeof:Ng,_payload:{_status:-1,_result:e},_init:Og}};fe.memo=function(e,t){return{$$typeof:$g,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=Ta.transition;Ta.transition={};try{e()}finally{Ta.transition=t}};fe.unstable_act=Yp;fe.useCallback=function(e,t){return jt.current.useCallback(e,t)};fe.useContext=function(e){return jt.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return jt.current.useDeferredValue(e)};fe.useEffect=function(e,t){return jt.current.useEffect(e,t)};fe.useId=function(){return jt.current.useId()};fe.useImperativeHandle=function(e,t,r){return jt.current.useImperativeHandle(e,t,r)};fe.useInsertionEffect=function(e,t){return jt.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return jt.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return jt.current.useMemo(e,t)};fe.useReducer=function(e,t,r){return jt.current.useReducer(e,t,r)};fe.useRef=function(e){return jt.current.useRef(e)};fe.useState=function(e){return jt.current.useState(e)};fe.useSyncExternalStore=function(e,t,r){return jt.current.useSyncExternalStore(e,t,r)};fe.useTransition=function(){return jt.current.useTransition()};fe.version="18.3.1";Lp.exports=fe;var v=Lp.exports;const ci=Ps(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg=v,Mg=Symbol.for("react.element"),Vg=Symbol.for("react.fragment"),Hg=Object.prototype.hasOwnProperty,Ug=Rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wg={key:!0,ref:!0,__self:!0,__source:!0};function Gp(e,t,r){var n,o={},i=null,x=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(x=t.ref);for(n in t)Hg.call(t,n)&&!Wg.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Mg,type:e,key:i,ref:x,props:o,_owner:Ug.current}}Ss.Fragment=Vg;Ss.jsx=Gp;Ss.jsxs=Gp;Op.exports=Ss;var a=Op.exports,qp={exports:{}},Kt={},Xp={exports:{}},Kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,W){var S=N.length;N.push(W);e:for(;0<S;){var Y=S-1>>>1,q=N[Y];if(0<o(q,W))N[Y]=W,N[S]=q,S=Y;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var W=N[0],S=N.pop();if(S!==W){N[0]=S;e:for(var Y=0,q=N.length,ae=q>>>1;Y<ae;){var J=2*(Y+1)-1,tt=N[J],ce=J+1,ge=N[ce];if(0>o(tt,S))ce<q&&0>o(ge,tt)?(N[Y]=ge,N[ce]=S,Y=ce):(N[Y]=tt,N[J]=S,Y=J);else if(ce<q&&0>o(ge,S))N[Y]=ge,N[ce]=S,Y=ce;else break e}}return W}function o(N,W){var S=N.sortIndex-W.sortIndex;return S!==0?S:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var x=Date,c=x.now();e.unstable_now=function(){return x.now()-c}}var l=[],d=[],h=1,f=null,B=3,A=!1,w=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(N){for(var W=r(d);W!==null;){if(W.callback===null)n(d);else if(W.startTime<=N)n(d),W.sortIndex=W.expirationTime,t(l,W);else break;W=r(d)}}function C(N){if(b=!1,E(N),!w)if(r(l)!==null)w=!0,I(k);else{var W=r(d);W!==null&&R(C,W.startTime-N)}}function k(N,W){w=!1,b&&(b=!1,m(P),P=-1),A=!0;var S=B;try{for(E(W),f=r(l);f!==null&&(!(f.expirationTime>W)||N&&!U());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,B=f.priorityLevel;var q=Y(f.expirationTime<=W);W=e.unstable_now(),typeof q=="function"?f.callback=q:f===r(l)&&n(l),E(W)}else n(l);f=r(l)}if(f!==null)var ae=!0;else{var J=r(d);J!==null&&R(C,J.startTime-W),ae=!1}return ae}finally{f=null,B=S,A=!1}}var D=!1,F=null,P=-1,z=5,j=-1;function U(){return!(e.unstable_now()-j<z)}function L(){if(F!==null){var N=e.unstable_now();j=N;var W=!0;try{W=F(!0,N)}finally{W?T():(D=!1,F=null)}}else D=!1}var T;if(typeof p=="function")T=function(){p(L)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,O=H.port2;H.port1.onmessage=L,T=function(){O.postMessage(null)}}else T=function(){_(L,0)};function I(N){F=N,D||(D=!0,T())}function R(N,W){P=_(function(){N(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||A||(w=!0,I(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return B},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(N){switch(B){case 1:case 2:case 3:var W=3;break;default:W=B}var S=B;B=W;try{return N()}finally{B=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var S=B;B=N;try{return W()}finally{B=S}},e.unstable_scheduleCallback=function(N,W,S){var Y=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?Y+S:Y):S=Y,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=S+q,N={id:h++,callback:W,priorityLevel:N,startTime:S,expirationTime:q,sortIndex:-1},S>Y?(N.sortIndex=S,t(d,N),r(l)===null&&N===r(d)&&(b?(m(P),P=-1):b=!0,R(C,S-Y))):(N.sortIndex=q,t(l,N),w||A||(w=!0,I(k))),N},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(N){var W=B;return function(){var S=B;B=W;try{return N.apply(this,arguments)}finally{B=S}}}})(Kp);Xp.exports=Kp;var Qg=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=v,Xt=Qg;function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,di={};function Ao(e,t){l0(e,t),l0(e+"Capture",t)}function l0(e,t){for(di[e]=t,e=0;e<t.length;e++)Zp.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,Gg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jm={},Pm={};function qg(e){return Sl.call(Pm,e)?!0:Sl.call(jm,e)?!1:Gg.test(e)?Pm[e]=!0:(jm[e]=!0,!1)}function Xg(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kg(e,t,r,n){if(t===null||typeof t>"u"||Xg(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pt(e,t,r,n,o,i,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=x}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ft[e]=new Pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ft[t]=new Pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ft[e]=new Pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ft[e]=new Pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ft[e]=new Pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ft[e]=new Pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ft[e]=new Pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ft[e]=new Pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ft[e]=new Pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lc=/[\-:]([a-z])/g;function Rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lc,Rc);ft[t]=new Pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lc,Rc);ft[t]=new Pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lc,Rc);ft[t]=new Pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ft[e]=new Pt(e,1,!1,e.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ft[e]=new Pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mc(e,t,r,n){var o=ft.hasOwnProperty(t)?ft[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kg(t,r,o,n)&&(r=null),n||o===null?qg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var fn=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),Ho=Symbol.for("react.portal"),Uo=Symbol.for("react.fragment"),Vc=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),eh=Symbol.for("react.context"),Hc=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Tl=Symbol.for("react.suspense_list"),Uc=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),th=Symbol.for("react.offscreen"),Sm=Symbol.iterator;function L0(e){return e===null||typeof e!="object"?null:(e=Sm&&e[Sm]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Rx;function q0(e){if(Rx===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Rx=t&&t[1]||""}return`
`+Rx+e}var Mx=!1;function Vx(e,t){if(!e||Mx)return"";Mx=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=n.stack.split(`
`),x=o.length-1,c=i.length-1;1<=x&&0<=c&&o[x]!==i[c];)c--;for(;1<=x&&0<=c;x--,c--)if(o[x]!==i[c]){if(x!==1||c!==1)do if(x--,c--,0>c||o[x]!==i[c]){var l=`
`+o[x].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=x&&0<=c);break}}}finally{Mx=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?q0(e):""}function Zg(e){switch(e.tag){case 5:return q0(e.type);case 16:return q0("Lazy");case 13:return q0("Suspense");case 19:return q0("SuspenseList");case 0:case 2:case 15:return e=Vx(e.type,!1),e;case 11:return e=Vx(e.type.render,!1),e;case 1:return e=Vx(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Uo:return"Fragment";case Ho:return"Portal";case $l:return"Profiler";case Vc:return"StrictMode";case Nl:return"Suspense";case Tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eh:return(e.displayName||"Context")+".Consumer";case Jp:return(e._context.displayName||"Context")+".Provider";case Hc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uc:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function Jg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Vc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function e5(e){var t=rh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(x){n=""+x,i.call(this,x)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(x){n=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){e._valueTracker||(e._valueTracker=e5(e))}function nh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=rh(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ja(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Il(e,t){var r=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $m(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ln(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oh(e,t){t=t.checked,t!=null&&Mc(e,"checked",t,!1)}function Ol(e,t){oh(e,t);var r=Ln(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,Ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ll(e,t,r){(t!=="number"||Ja(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var X0=Array.isArray;function r0(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ln(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(X(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(X(92));if(X0(r)){if(1<r.length)throw Error(X(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ln(r)}}function ih(e,t){var r=Ln(t.value),n=Ln(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function zm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ah(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ah(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,sh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t5=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){t5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function xh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function lh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=xh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var r5=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vl(e,t){if(t){if(r5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(X(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(X(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(X(61))}if(t.style!=null&&typeof t.style!="object")throw Error(X(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,n0=null,o0=null;function Im(e){if(e=Ti(e)){if(typeof Wl!="function")throw Error(X(280));var t=e.stateNode;t&&(t=Is(t),Wl(e.stateNode,e.type,t))}}function ch(e){n0?o0?o0.push(e):o0=[e]:n0=e}function dh(){if(n0){var e=n0,t=o0;if(o0=n0=null,Im(e),t)for(e=0;e<t.length;e++)Im(t[e])}}function uh(e,t){return e(t)}function mh(){}var Hx=!1;function fh(e,t,r){if(Hx)return e(t,r);Hx=!0;try{return uh(e,t,r)}finally{Hx=!1,(n0!==null||o0!==null)&&(mh(),dh())}}function mi(e,t){var r=e.stateNode;if(r===null)return null;var n=Is(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(X(231,t,typeof r));return r}var Ql=!1;if(ln)try{var R0={};Object.defineProperty(R0,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",R0,R0),window.removeEventListener("test",R0,R0)}catch{Ql=!1}function n5(e,t,r,n,o,i,x,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var ti=!1,es=null,ts=!1,Yl=null,o5={onError:function(e){ti=!0,es=e}};function i5(e,t,r,n,o,i,x,c,l){ti=!1,es=null,n5.apply(o5,arguments)}function a5(e,t,r,n,o,i,x,c,l){if(i5.apply(this,arguments),ti){if(ti){var d=es;ti=!1,es=null}else throw Error(X(198));ts||(ts=!0,Yl=d)}}function yo(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ph(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Om(e){if(yo(e)!==e)throw Error(X(188))}function s5(e){var t=e.alternate;if(!t){if(t=yo(e),t===null)throw Error(X(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Om(o),e;if(i===n)return Om(o),t;i=i.sibling}throw Error(X(188))}if(r.return!==n.return)r=o,n=i;else{for(var x=!1,c=o.child;c;){if(c===r){x=!0,r=o,n=i;break}if(c===n){x=!0,n=o,r=i;break}c=c.sibling}if(!x){for(c=i.child;c;){if(c===r){x=!0,r=i,n=o;break}if(c===n){x=!0,n=i,r=o;break}c=c.sibling}if(!x)throw Error(X(189))}}if(r.alternate!==n)throw Error(X(190))}if(r.tag!==3)throw Error(X(188));return r.stateNode.current===r?e:t}function hh(e){return e=s5(e),e!==null?Eh(e):null}function Eh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eh(e);if(t!==null)return t;e=e.sibling}return null}var gh=Xt.unstable_scheduleCallback,Lm=Xt.unstable_cancelCallback,x5=Xt.unstable_shouldYield,l5=Xt.unstable_requestPaint,et=Xt.unstable_now,c5=Xt.unstable_getCurrentPriorityLevel,Qc=Xt.unstable_ImmediatePriority,Ch=Xt.unstable_UserBlockingPriority,rs=Xt.unstable_NormalPriority,d5=Xt.unstable_LowPriority,Bh=Xt.unstable_IdlePriority,$s=null,Wr=null;function u5(e){if(Wr&&typeof Wr.onCommitFiberRoot=="function")try{Wr.onCommitFiberRoot($s,e,void 0,(e.current.flags&128)===128)}catch{}}var wr=Math.clz32?Math.clz32:p5,m5=Math.log,f5=Math.LN2;function p5(e){return e>>>=0,e===0?32:31-(m5(e)/f5|0)|0}var fa=64,pa=4194304;function K0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,x=r&268435455;if(x!==0){var c=x&~o;c!==0?n=K0(c):(i&=x,i!==0&&(n=K0(i)))}else x=r&~o,x!==0?n=K0(x):i!==0&&(n=K0(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-wr(t),o=1<<r,n|=e[r],t&=~o;return n}function h5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E5(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var x=31-wr(i),c=1<<x,l=o[x];l===-1?(!(c&r)||c&n)&&(o[x]=h5(c,t)):l<=t&&(e.expiredLanes|=c),i&=~c}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vh(){var e=fa;return fa<<=1,!(fa&4194240)&&(fa=64),e}function Ux(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function $i(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wr(t),e[t]=r}function g5(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-wr(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Yc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-wr(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var ye=0;function Ah(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yh,Gc,Fh,wh,Dh,ql=!1,ha=[],Pn=null,Sn=null,$n=null,fi=new Map,pi=new Map,bn=[],C5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rm(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function M0(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ti(t),t!==null&&Gc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function B5(e,t,r,n,o){switch(t){case"focusin":return Pn=M0(Pn,e,t,r,n,o),!0;case"dragenter":return Sn=M0(Sn,e,t,r,n,o),!0;case"mouseover":return $n=M0($n,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return fi.set(i,M0(fi.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,pi.set(i,M0(pi.get(i)||null,e,t,r,n,o)),!0}return!1}function bh(e){var t=so(e.target);if(t!==null){var r=yo(t);if(r!==null){if(t=r.tag,t===13){if(t=ph(r),t!==null){e.blockedOn=t,Dh(e.priority,function(){Fh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ul=n,r.target.dispatchEvent(n),Ul=null}else return t=Ti(r),t!==null&&Gc(t),e.blockedOn=r,!1;t.shift()}return!0}function Mm(e,t,r){za(e)&&r.delete(t)}function v5(){ql=!1,Pn!==null&&za(Pn)&&(Pn=null),Sn!==null&&za(Sn)&&(Sn=null),$n!==null&&za($n)&&($n=null),fi.forEach(Mm),pi.forEach(Mm)}function V0(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,v5)))}function hi(e){function t(o){return V0(o,e)}if(0<ha.length){V0(ha[0],e);for(var r=1;r<ha.length;r++){var n=ha[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Pn!==null&&V0(Pn,e),Sn!==null&&V0(Sn,e),$n!==null&&V0($n,e),fi.forEach(t),pi.forEach(t),r=0;r<bn.length;r++)n=bn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<bn.length&&(r=bn[0],r.blockedOn===null);)bh(r),r.blockedOn===null&&bn.shift()}var i0=fn.ReactCurrentBatchConfig,os=!0;function A5(e,t,r,n){var o=ye,i=i0.transition;i0.transition=null;try{ye=1,qc(e,t,r,n)}finally{ye=o,i0.transition=i}}function y5(e,t,r,n){var o=ye,i=i0.transition;i0.transition=null;try{ye=4,qc(e,t,r,n)}finally{ye=o,i0.transition=i}}function qc(e,t,r,n){if(os){var o=Xl(e,t,r,n);if(o===null)el(e,t,n,is,r),Rm(e,n);else if(B5(o,e,t,r,n))n.stopPropagation();else if(Rm(e,n),t&4&&-1<C5.indexOf(e)){for(;o!==null;){var i=Ti(o);if(i!==null&&yh(i),i=Xl(e,t,r,n),i===null&&el(e,t,n,is,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else el(e,t,n,null,r)}}var is=null;function Xl(e,t,r,n){if(is=null,e=Wc(n),e=so(e),e!==null)if(t=yo(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ph(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function kh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c5()){case Qc:return 1;case Ch:return 4;case rs:case d5:return 16;case Bh:return 536870912;default:return 16}default:return 16}}var _n=null,Xc=null,Ia=null;function _h(){if(Ia)return Ia;var e,t=Xc,r=t.length,n,o="value"in _n?_n.value:_n.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var x=r-e;for(n=1;n<=x&&t[r-n]===o[i-n];n++);return Ia=o.slice(e,1<n?1-n:void 0)}function Oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ea(){return!0}function Vm(){return!1}function Zt(e){function t(r,n,o,i,x){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=x,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ea:Vm,this.isPropagationStopped=Vm,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),t}var F0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=Zt(F0),Ni=Ge({},F0,{view:0,detail:0}),F5=Zt(Ni),Wx,Qx,H0,Ns=Ge({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==H0&&(H0&&e.type==="mousemove"?(Wx=e.screenX-H0.screenX,Qx=e.screenY-H0.screenY):Qx=Wx=0,H0=e),Wx)},movementY:function(e){return"movementY"in e?e.movementY:Qx}}),Hm=Zt(Ns),w5=Ge({},Ns,{dataTransfer:0}),D5=Zt(w5),b5=Ge({},Ni,{relatedTarget:0}),Yx=Zt(b5),k5=Ge({},F0,{animationName:0,elapsedTime:0,pseudoElement:0}),_5=Zt(k5),j5=Ge({},F0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P5=Zt(j5),S5=Ge({},F0,{data:0}),Um=Zt(S5),$5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=T5[e])?!!t[e]:!1}function Zc(){return z5}var I5=Ge({},Ni,{key:function(e){if(e.key){var t=$5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O5=Zt(I5),L5=Ge({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Zt(L5),R5=Ge({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),M5=Zt(R5),V5=Ge({},F0,{propertyName:0,elapsedTime:0,pseudoElement:0}),H5=Zt(V5),U5=Ge({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W5=Zt(U5),Q5=[9,13,27,32],Jc=ln&&"CompositionEvent"in window,ri=null;ln&&"documentMode"in document&&(ri=document.documentMode);var Y5=ln&&"TextEvent"in window&&!ri,jh=ln&&(!Jc||ri&&8<ri&&11>=ri),Qm=" ",Ym=!1;function Ph(e,t){switch(e){case"keyup":return Q5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wo=!1;function G5(e,t){switch(e){case"compositionend":return Sh(t);case"keypress":return t.which!==32?null:(Ym=!0,Qm);case"textInput":return e=t.data,e===Qm&&Ym?null:e;default:return null}}function q5(e,t){if(Wo)return e==="compositionend"||!Jc&&Ph(e,t)?(e=_h(),Ia=Xc=_n=null,Wo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jh&&t.locale!=="ko"?null:t.data;default:return null}}var X5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X5[e.type]:t==="textarea"}function $h(e,t,r,n){ch(n),t=as(t,"onChange"),0<t.length&&(r=new Kc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var ni=null,Ei=null;function K5(e){Uh(e,0)}function Ts(e){var t=Go(e);if(nh(t))return e}function Z5(e,t){if(e==="change")return t}var Nh=!1;if(ln){var Gx;if(ln){var qx="oninput"in document;if(!qx){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),qx=typeof qm.oninput=="function"}Gx=qx}else Gx=!1;Nh=Gx&&(!document.documentMode||9<document.documentMode)}function Xm(){ni&&(ni.detachEvent("onpropertychange",Th),Ei=ni=null)}function Th(e){if(e.propertyName==="value"&&Ts(Ei)){var t=[];$h(t,Ei,e,Wc(e)),fh(K5,t)}}function J5(e,t,r){e==="focusin"?(Xm(),ni=t,Ei=r,ni.attachEvent("onpropertychange",Th)):e==="focusout"&&Xm()}function e6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(Ei)}function t6(e,t){if(e==="click")return Ts(t)}function r6(e,t){if(e==="input"||e==="change")return Ts(t)}function n6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kr=typeof Object.is=="function"?Object.is:n6;function gi(e,t){if(kr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Sl.call(t,o)||!kr(e[o],t[o]))return!1}return!0}function Km(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zm(e,t){var r=Km(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Km(r)}}function zh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ih(){for(var e=window,t=Ja();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ja(e.document)}return t}function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function o6(e){var t=Ih(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&zh(r.ownerDocument.documentElement,r)){if(n!==null&&ed(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Zm(r,i);var x=Zm(r,n);o&&x&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i6=ln&&"documentMode"in document&&11>=document.documentMode,Qo=null,Kl=null,oi=null,Zl=!1;function Jm(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Zl||Qo==null||Qo!==Ja(n)||(n=Qo,"selectionStart"in n&&ed(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),oi&&gi(oi,n)||(oi=n,n=as(Kl,"onSelect"),0<n.length&&(t=new Kc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Qo)))}function ga(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yo={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Xx={},Oh={};ln&&(Oh=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function zs(e){if(Xx[e])return Xx[e];if(!Yo[e])return e;var t=Yo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Oh)return Xx[e]=t[r];return e}var Lh=zs("animationend"),Rh=zs("animationiteration"),Mh=zs("animationstart"),Vh=zs("transitionend"),Hh=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){Hh.set(e,t),Ao(t,[e])}for(var Kx=0;Kx<ef.length;Kx++){var Zx=ef[Kx],a6=Zx.toLowerCase(),s6=Zx[0].toUpperCase()+Zx.slice(1);Vn(a6,"on"+s6)}Vn(Lh,"onAnimationEnd");Vn(Rh,"onAnimationIteration");Vn(Mh,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Vh,"onTransitionEnd");l0("onMouseEnter",["mouseout","mouseover"]);l0("onMouseLeave",["mouseout","mouseover"]);l0("onPointerEnter",["pointerout","pointerover"]);l0("onPointerLeave",["pointerout","pointerover"]);Ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Z0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Z0));function tf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,a5(n,t,void 0,e),e.currentTarget=null}function Uh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var x=n.length-1;0<=x;x--){var c=n[x],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==i&&o.isPropagationStopped())break e;tf(o,c,d),i=l}else for(x=0;x<n.length;x++){if(c=n[x],l=c.instance,d=c.currentTarget,c=c.listener,l!==i&&o.isPropagationStopped())break e;tf(o,c,d),i=l}}}if(ts)throw e=Yl,ts=!1,Yl=null,e}function Te(e,t){var r=t[nc];r===void 0&&(r=t[nc]=new Set);var n=e+"__bubble";r.has(n)||(Wh(t,e,2,!1),r.add(n))}function Jx(e,t,r){var n=0;t&&(n|=4),Wh(r,e,n,t)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Ci(e){if(!e[Ca]){e[Ca]=!0,Zp.forEach(function(r){r!=="selectionchange"&&(x6.has(r)||Jx(r,!1,e),Jx(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ca]||(t[Ca]=!0,Jx("selectionchange",!1,t))}}function Wh(e,t,r,n){switch(kh(t)){case 1:var o=A5;break;case 4:o=y5;break;default:o=qc}r=o.bind(null,t,r,e),o=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function el(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var x=n.tag;if(x===3||x===4){var c=n.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(x===4)for(x=n.return;x!==null;){var l=x.tag;if((l===3||l===4)&&(l=x.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;x=x.return}for(;c!==null;){if(x=so(c),x===null)return;if(l=x.tag,l===5||l===6){n=i=x;continue e}c=c.parentNode}}n=n.return}fh(function(){var d=i,h=Wc(r),f=[];e:{var B=Hh.get(e);if(B!==void 0){var A=Kc,w=e;switch(e){case"keypress":if(Oa(r)===0)break e;case"keydown":case"keyup":A=O5;break;case"focusin":w="focus",A=Yx;break;case"focusout":w="blur",A=Yx;break;case"beforeblur":case"afterblur":A=Yx;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=D5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=M5;break;case Lh:case Rh:case Mh:A=_5;break;case Vh:A=H5;break;case"scroll":A=F5;break;case"wheel":A=W5;break;case"copy":case"cut":case"paste":A=P5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Wm}var b=(t&4)!==0,_=!b&&e==="scroll",m=b?B!==null?B+"Capture":null:B;b=[];for(var p=d,E;p!==null;){E=p;var C=E.stateNode;if(E.tag===5&&C!==null&&(E=C,m!==null&&(C=mi(p,m),C!=null&&b.push(Bi(p,C,E)))),_)break;p=p.return}0<b.length&&(B=new A(B,w,null,r,h),f.push({event:B,listeners:b}))}}if(!(t&7)){e:{if(B=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",B&&r!==Ul&&(w=r.relatedTarget||r.fromElement)&&(so(w)||w[cn]))break e;if((A||B)&&(B=h.window===h?h:(B=h.ownerDocument)?B.defaultView||B.parentWindow:window,A?(w=r.relatedTarget||r.toElement,A=d,w=w?so(w):null,w!==null&&(_=yo(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(A=null,w=d),A!==w)){if(b=Hm,C="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Wm,C="onPointerLeave",m="onPointerEnter",p="pointer"),_=A==null?B:Go(A),E=w==null?B:Go(w),B=new b(C,p+"leave",A,r,h),B.target=_,B.relatedTarget=E,C=null,so(h)===d&&(b=new b(m,p+"enter",w,r,h),b.target=E,b.relatedTarget=_,C=b),_=C,A&&w)t:{for(b=A,m=w,p=0,E=b;E;E=Ro(E))p++;for(E=0,C=m;C;C=Ro(C))E++;for(;0<p-E;)b=Ro(b),p--;for(;0<E-p;)m=Ro(m),E--;for(;p--;){if(b===m||m!==null&&b===m.alternate)break t;b=Ro(b),m=Ro(m)}b=null}else b=null;A!==null&&rf(f,B,A,b,!1),w!==null&&_!==null&&rf(f,_,w,b,!0)}}e:{if(B=d?Go(d):window,A=B.nodeName&&B.nodeName.toLowerCase(),A==="select"||A==="input"&&B.type==="file")var k=Z5;else if(Gm(B))if(Nh)k=r6;else{k=e6;var D=J5}else(A=B.nodeName)&&A.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(k=t6);if(k&&(k=k(e,d))){$h(f,k,r,h);break e}D&&D(e,B,d),e==="focusout"&&(D=B._wrapperState)&&D.controlled&&B.type==="number"&&Ll(B,"number",B.value)}switch(D=d?Go(d):window,e){case"focusin":(Gm(D)||D.contentEditable==="true")&&(Qo=D,Kl=d,oi=null);break;case"focusout":oi=Kl=Qo=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Jm(f,r,h);break;case"selectionchange":if(i6)break;case"keydown":case"keyup":Jm(f,r,h)}var F;if(Jc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Wo?Ph(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(jh&&r.locale!=="ko"&&(Wo||P!=="onCompositionStart"?P==="onCompositionEnd"&&Wo&&(F=_h()):(_n=h,Xc="value"in _n?_n.value:_n.textContent,Wo=!0)),D=as(d,P),0<D.length&&(P=new Um(P,e,null,r,h),f.push({event:P,listeners:D}),F?P.data=F:(F=Sh(r),F!==null&&(P.data=F)))),(F=Y5?G5(e,r):q5(e,r))&&(d=as(d,"onBeforeInput"),0<d.length&&(h=new Um("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:d}),h.data=F))}Uh(f,t)})}function Bi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function as(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=mi(e,r),i!=null&&n.unshift(Bi(e,i,o)),i=mi(e,t),i!=null&&n.push(Bi(e,i,o))),e=e.return}return n}function Ro(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rf(e,t,r,n,o){for(var i=t._reactName,x=[];r!==null&&r!==n;){var c=r,l=c.alternate,d=c.stateNode;if(l!==null&&l===n)break;c.tag===5&&d!==null&&(c=d,o?(l=mi(r,i),l!=null&&x.unshift(Bi(r,l,c))):o||(l=mi(r,i),l!=null&&x.push(Bi(r,l,c)))),r=r.return}x.length!==0&&e.push({event:t,listeners:x})}var l6=/\r\n?/g,c6=/\u0000|\uFFFD/g;function nf(e){return(typeof e=="string"?e:""+e).replace(l6,`
`).replace(c6,"")}function Ba(e,t,r){if(t=nf(t),nf(e)!==t&&r)throw Error(X(425))}function ss(){}var Jl=null,ec=null;function tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,d6=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,u6=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(m6)}:rc;function m6(e){setTimeout(function(){throw e})}function tl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),hi(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);hi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var w0=Math.random().toString(36).slice(2),Ur="__reactFiber$"+w0,vi="__reactProps$"+w0,cn="__reactContainer$"+w0,nc="__reactEvents$"+w0,f6="__reactListeners$"+w0,p6="__reactHandles$"+w0;function so(e){var t=e[Ur];if(t)return t;for(var r=e.parentNode;r;){if(t=r[cn]||r[Ur]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=af(e);e!==null;){if(r=e[Ur])return r;e=af(e)}return t}e=r,r=e.parentNode}return null}function Ti(e){return e=e[Ur]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Go(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(X(33))}function Is(e){return e[vi]||null}var oc=[],qo=-1;function Hn(e){return{current:e}}function Ie(e){0>qo||(e.current=oc[qo],oc[qo]=null,qo--)}function Se(e,t){qo++,oc[qo]=e.current,e.current=t}var Rn={},vt=Hn(Rn),Tt=Hn(!1),Eo=Rn;function c0(e,t){var r=e.type.contextTypes;if(!r)return Rn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function zt(e){return e=e.childContextTypes,e!=null}function xs(){Ie(Tt),Ie(vt)}function sf(e,t,r){if(vt.current!==Rn)throw Error(X(168));Se(vt,t),Se(Tt,r)}function Qh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(X(108,Jg(e)||"Unknown",o));return Ge({},r,n)}function ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Eo=vt.current,Se(vt,e),Se(Tt,Tt.current),!0}function xf(e,t,r){var n=e.stateNode;if(!n)throw Error(X(169));r?(e=Qh(e,t,Eo),n.__reactInternalMemoizedMergedChildContext=e,Ie(Tt),Ie(vt),Se(vt,e)):Ie(Tt),Se(Tt,r)}var nn=null,Os=!1,rl=!1;function Yh(e){nn===null?nn=[e]:nn.push(e)}function h6(e){Os=!0,Yh(e)}function Un(){if(!rl&&nn!==null){rl=!0;var e=0,t=ye;try{var r=nn;for(ye=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}nn=null,Os=!1}catch(o){throw nn!==null&&(nn=nn.slice(e+1)),gh(Qc,Un),o}finally{ye=t,rl=!1}}return null}var Xo=[],Ko=0,cs=null,ds=0,cr=[],dr=0,go=null,on=1,an="";function io(e,t){Xo[Ko++]=ds,Xo[Ko++]=cs,cs=e,ds=t}function Gh(e,t,r){cr[dr++]=on,cr[dr++]=an,cr[dr++]=go,go=e;var n=on;e=an;var o=32-wr(n)-1;n&=~(1<<o),r+=1;var i=32-wr(t)+o;if(30<i){var x=o-o%5;i=(n&(1<<x)-1).toString(32),n>>=x,o-=x,on=1<<32-wr(t)+o|r<<o|n,an=i+e}else on=1<<i|r<<o|n,an=e}function td(e){e.return!==null&&(io(e,1),Gh(e,1,0))}function rd(e){for(;e===cs;)cs=Xo[--Ko],Xo[Ko]=null,ds=Xo[--Ko],Xo[Ko]=null;for(;e===go;)go=cr[--dr],cr[dr]=null,an=cr[--dr],cr[dr]=null,on=cr[--dr],cr[dr]=null}var qt=null,Gt=null,Le=!1,Fr=null;function qh(e,t){var r=ur(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qt=e,Gt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=go!==null?{id:on,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ur(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qt=e,Gt=null,!0):!1;default:return!1}}function ic(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ac(e){if(Le){var t=Gt;if(t){var r=t;if(!lf(e,t)){if(ic(e))throw Error(X(418));t=Nn(r.nextSibling);var n=qt;t&&lf(e,t)?qh(n,r):(e.flags=e.flags&-4097|2,Le=!1,qt=e)}}else{if(ic(e))throw Error(X(418));e.flags=e.flags&-4097|2,Le=!1,qt=e}}}function cf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qt=e}function va(e){if(e!==qt)return!1;if(!Le)return cf(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tc(e.type,e.memoizedProps)),t&&(t=Gt)){if(ic(e))throw Xh(),Error(X(418));for(;t;)qh(e,t),t=Nn(t.nextSibling)}if(cf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Gt=Nn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=qt?Nn(e.stateNode.nextSibling):null;return!0}function Xh(){for(var e=Gt;e;)e=Nn(e.nextSibling)}function d0(){Gt=qt=null,Le=!1}function nd(e){Fr===null?Fr=[e]:Fr.push(e)}var E6=fn.ReactCurrentBatchConfig;function U0(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(X(309));var n=r.stateNode}if(!n)throw Error(X(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(x){var c=o.refs;x===null?delete c[i]:c[i]=x},t._stringRef=i,t)}if(typeof e!="string")throw Error(X(284));if(!r._owner)throw Error(X(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function df(e){var t=e._init;return t(e._payload)}function Kh(e){function t(m,p){if(e){var E=m.deletions;E===null?(m.deletions=[p],m.flags|=16):E.push(p)}}function r(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function n(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=On(m,p),m.index=0,m.sibling=null,m}function i(m,p,E){return m.index=E,e?(E=m.alternate,E!==null?(E=E.index,E<p?(m.flags|=2,p):E):(m.flags|=2,p)):(m.flags|=1048576,p)}function x(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,p,E,C){return p===null||p.tag!==6?(p=ll(E,m.mode,C),p.return=m,p):(p=o(p,E),p.return=m,p)}function l(m,p,E,C){var k=E.type;return k===Uo?h(m,p,E.props.children,C,E.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wn&&df(k)===p.type)?(C=o(p,E.props),C.ref=U0(m,p,E),C.return=m,C):(C=Wa(E.type,E.key,E.props,null,m.mode,C),C.ref=U0(m,p,E),C.return=m,C)}function d(m,p,E,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==E.containerInfo||p.stateNode.implementation!==E.implementation?(p=cl(E,m.mode,C),p.return=m,p):(p=o(p,E.children||[]),p.return=m,p)}function h(m,p,E,C,k){return p===null||p.tag!==7?(p=mo(E,m.mode,C,k),p.return=m,p):(p=o(p,E),p.return=m,p)}function f(m,p,E){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ll(""+p,m.mode,E),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case da:return E=Wa(p.type,p.key,p.props,null,m.mode,E),E.ref=U0(m,null,p),E.return=m,E;case Ho:return p=cl(p,m.mode,E),p.return=m,p;case wn:var C=p._init;return f(m,C(p._payload),E)}if(X0(p)||L0(p))return p=mo(p,m.mode,E,null),p.return=m,p;Aa(m,p)}return null}function B(m,p,E,C){var k=p!==null?p.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return k!==null?null:c(m,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case da:return E.key===k?l(m,p,E,C):null;case Ho:return E.key===k?d(m,p,E,C):null;case wn:return k=E._init,B(m,p,k(E._payload),C)}if(X0(E)||L0(E))return k!==null?null:h(m,p,E,C,null);Aa(m,E)}return null}function A(m,p,E,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(E)||null,c(p,m,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case da:return m=m.get(C.key===null?E:C.key)||null,l(p,m,C,k);case Ho:return m=m.get(C.key===null?E:C.key)||null,d(p,m,C,k);case wn:var D=C._init;return A(m,p,E,D(C._payload),k)}if(X0(C)||L0(C))return m=m.get(E)||null,h(p,m,C,k,null);Aa(p,C)}return null}function w(m,p,E,C){for(var k=null,D=null,F=p,P=p=0,z=null;F!==null&&P<E.length;P++){F.index>P?(z=F,F=null):z=F.sibling;var j=B(m,F,E[P],C);if(j===null){F===null&&(F=z);break}e&&F&&j.alternate===null&&t(m,F),p=i(j,p,P),D===null?k=j:D.sibling=j,D=j,F=z}if(P===E.length)return r(m,F),Le&&io(m,P),k;if(F===null){for(;P<E.length;P++)F=f(m,E[P],C),F!==null&&(p=i(F,p,P),D===null?k=F:D.sibling=F,D=F);return Le&&io(m,P),k}for(F=n(m,F);P<E.length;P++)z=A(F,m,P,E[P],C),z!==null&&(e&&z.alternate!==null&&F.delete(z.key===null?P:z.key),p=i(z,p,P),D===null?k=z:D.sibling=z,D=z);return e&&F.forEach(function(U){return t(m,U)}),Le&&io(m,P),k}function b(m,p,E,C){var k=L0(E);if(typeof k!="function")throw Error(X(150));if(E=k.call(E),E==null)throw Error(X(151));for(var D=k=null,F=p,P=p=0,z=null,j=E.next();F!==null&&!j.done;P++,j=E.next()){F.index>P?(z=F,F=null):z=F.sibling;var U=B(m,F,j.value,C);if(U===null){F===null&&(F=z);break}e&&F&&U.alternate===null&&t(m,F),p=i(U,p,P),D===null?k=U:D.sibling=U,D=U,F=z}if(j.done)return r(m,F),Le&&io(m,P),k;if(F===null){for(;!j.done;P++,j=E.next())j=f(m,j.value,C),j!==null&&(p=i(j,p,P),D===null?k=j:D.sibling=j,D=j);return Le&&io(m,P),k}for(F=n(m,F);!j.done;P++,j=E.next())j=A(F,m,P,j.value,C),j!==null&&(e&&j.alternate!==null&&F.delete(j.key===null?P:j.key),p=i(j,p,P),D===null?k=j:D.sibling=j,D=j);return e&&F.forEach(function(L){return t(m,L)}),Le&&io(m,P),k}function _(m,p,E,C){if(typeof E=="object"&&E!==null&&E.type===Uo&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case da:e:{for(var k=E.key,D=p;D!==null;){if(D.key===k){if(k=E.type,k===Uo){if(D.tag===7){r(m,D.sibling),p=o(D,E.props.children),p.return=m,m=p;break e}}else if(D.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===wn&&df(k)===D.type){r(m,D.sibling),p=o(D,E.props),p.ref=U0(m,D,E),p.return=m,m=p;break e}r(m,D);break}else t(m,D);D=D.sibling}E.type===Uo?(p=mo(E.props.children,m.mode,C,E.key),p.return=m,m=p):(C=Wa(E.type,E.key,E.props,null,m.mode,C),C.ref=U0(m,p,E),C.return=m,m=C)}return x(m);case Ho:e:{for(D=E.key;p!==null;){if(p.key===D)if(p.tag===4&&p.stateNode.containerInfo===E.containerInfo&&p.stateNode.implementation===E.implementation){r(m,p.sibling),p=o(p,E.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else t(m,p);p=p.sibling}p=cl(E,m.mode,C),p.return=m,m=p}return x(m);case wn:return D=E._init,_(m,p,D(E._payload),C)}if(X0(E))return w(m,p,E,C);if(L0(E))return b(m,p,E,C);Aa(m,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,p!==null&&p.tag===6?(r(m,p.sibling),p=o(p,E),p.return=m,m=p):(r(m,p),p=ll(E,m.mode,C),p.return=m,m=p),x(m)):r(m,p)}return _}var u0=Kh(!0),Zh=Kh(!1),us=Hn(null),ms=null,Zo=null,od=null;function id(){od=Zo=ms=null}function ad(e){var t=us.current;Ie(us),e._currentValue=t}function sc(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function a0(e,t){ms=e,od=Zo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function fr(e){var t=e._currentValue;if(od!==e)if(e={context:e,memoizedValue:t,next:null},Zo===null){if(ms===null)throw Error(X(308));Zo=e,ms.dependencies={lanes:0,firstContext:e}}else Zo=Zo.next=e;return t}var xo=null;function sd(e){xo===null?xo=[e]:xo.push(e)}function Jh(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,sd(t)):(r.next=o.next,o.next=r),t.interleaved=r,dn(e,n)}function dn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Dn=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e9(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Ee&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,dn(e,r)}return o=n.interleaved,o===null?(t.next=t,sd(n)):(t.next=o.next,o.next=t),n.interleaved=t,dn(e,r)}function La(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Yc(e,r)}}function uf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var x={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=x:i=i.next=x,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fs(e,t,r,n){var o=e.updateQueue;Dn=!1;var i=o.firstBaseUpdate,x=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var l=c,d=l.next;l.next=null,x===null?i=d:x.next=d,x=l;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==x&&(c===null?h.firstBaseUpdate=d:c.next=d,h.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;x=0,h=d=l=null,c=i;do{var B=c.lane,A=c.eventTime;if((n&B)===B){h!==null&&(h=h.next={eventTime:A,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,b=c;switch(B=t,A=r,b.tag){case 1:if(w=b.payload,typeof w=="function"){f=w.call(A,f,B);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,B=typeof w=="function"?w.call(A,f,B):w,B==null)break e;f=Ge({},f,B);break e;case 2:Dn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,B=o.effects,B===null?o.effects=[c]:B.push(c))}else A={eventTime:A,lane:B,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(d=h=A,l=f):h=h.next=A,x|=B;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;B=c,c=B.next,B.next=null,o.lastBaseUpdate=B,o.shared.pending=null}}while(!0);if(h===null&&(l=f),o.baseState=l,o.firstBaseUpdate=d,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do x|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Bo|=x,e.lanes=x,e.memoizedState=f}}function mf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(X(191,o));o.call(n)}}}var zi={},Qr=Hn(zi),Ai=Hn(zi),yi=Hn(zi);function lo(e){if(e===zi)throw Error(X(174));return e}function ld(e,t){switch(Se(yi,t),Se(Ai,e),Se(Qr,zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}Ie(Qr),Se(Qr,t)}function m0(){Ie(Qr),Ie(Ai),Ie(yi)}function t9(e){lo(yi.current);var t=lo(Qr.current),r=Ml(t,e.type);t!==r&&(Se(Ai,e),Se(Qr,r))}function cd(e){Ai.current===e&&(Ie(Qr),Ie(Ai))}var Ue=Hn(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function dd(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var Ra=fn.ReactCurrentDispatcher,ol=fn.ReactCurrentBatchConfig,Co=0,We=null,it=null,lt=null,hs=!1,ii=!1,Fi=0,g6=0;function ht(){throw Error(X(321))}function ud(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kr(e[r],t[r]))return!1;return!0}function md(e,t,r,n,o,i){if(Co=i,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ra.current=e===null||e.memoizedState===null?A6:y6,e=r(n,o),ii){i=0;do{if(ii=!1,Fi=0,25<=i)throw Error(X(301));i+=1,lt=it=null,t.updateQueue=null,Ra.current=F6,e=r(n,o)}while(ii)}if(Ra.current=Es,t=it!==null&&it.next!==null,Co=0,lt=it=We=null,hs=!1,t)throw Error(X(300));return e}function fd(){var e=Fi!==0;return Fi=0,e}function Vr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?We.memoizedState=lt=e:lt=lt.next=e,lt}function pr(){if(it===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=lt===null?We.memoizedState:lt.next;if(t!==null)lt=t,it=e;else{if(e===null)throw Error(X(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},lt===null?We.memoizedState=lt=e:lt=lt.next=e}return lt}function wi(e,t){return typeof t=="function"?t(e):t}function il(e){var t=pr(),r=t.queue;if(r===null)throw Error(X(311));r.lastRenderedReducer=e;var n=it,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var x=o.next;o.next=i.next,i.next=x}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var c=x=null,l=null,d=i;do{var h=d.lane;if((Co&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=f,x=n):l=l.next=f,We.lanes|=h,Bo|=h}d=d.next}while(d!==null&&d!==i);l===null?x=n:l.next=c,kr(n,t.memoizedState)||($t=!0),t.memoizedState=n,t.baseState=x,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,We.lanes|=i,Bo|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function al(e){var t=pr(),r=t.queue;if(r===null)throw Error(X(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var x=o=o.next;do i=e(i,x.action),x=x.next;while(x!==o);kr(i,t.memoizedState)||($t=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function r9(){}function n9(e,t){var r=We,n=pr(),o=t(),i=!kr(n.memoizedState,o);if(i&&(n.memoizedState=o,$t=!0),n=n.queue,pd(a9.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||lt!==null&&lt.memoizedState.tag&1){if(r.flags|=2048,Di(9,i9.bind(null,r,n,o,t),void 0,null),dt===null)throw Error(X(349));Co&30||o9(r,t,o)}return o}function o9(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function i9(e,t,r,n){t.value=r,t.getSnapshot=n,s9(t)&&x9(e)}function a9(e,t,r){return r(function(){s9(t)&&x9(e)})}function s9(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kr(e,r)}catch{return!0}}function x9(e){var t=dn(e,1);t!==null&&Dr(t,e,1,-1)}function ff(e){var t=Vr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},t.queue=e,e=e.dispatch=v6.bind(null,We,e),[t.memoizedState,e]}function Di(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function l9(){return pr().memoizedState}function Ma(e,t,r,n){var o=Vr();We.flags|=e,o.memoizedState=Di(1|t,r,void 0,n===void 0?null:n)}function Ls(e,t,r,n){var o=pr();n=n===void 0?null:n;var i=void 0;if(it!==null){var x=it.memoizedState;if(i=x.destroy,n!==null&&ud(n,x.deps)){o.memoizedState=Di(t,r,i,n);return}}We.flags|=e,o.memoizedState=Di(1|t,r,i,n)}function pf(e,t){return Ma(8390656,8,e,t)}function pd(e,t){return Ls(2048,8,e,t)}function c9(e,t){return Ls(4,2,e,t)}function d9(e,t){return Ls(4,4,e,t)}function u9(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m9(e,t,r){return r=r!=null?r.concat([e]):null,Ls(4,4,u9.bind(null,t,e),r)}function hd(){}function f9(e,t){var r=pr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ud(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function p9(e,t){var r=pr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ud(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function h9(e,t,r){return Co&21?(kr(r,t)||(r=vh(),We.lanes|=r,Bo|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=r)}function C6(e,t){var r=ye;ye=r!==0&&4>r?r:4,e(!0);var n=ol.transition;ol.transition={};try{e(!1),t()}finally{ye=r,ol.transition=n}}function E9(){return pr().memoizedState}function B6(e,t,r){var n=In(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},g9(e))C9(t,r);else if(r=Jh(e,t,r,n),r!==null){var o=bt();Dr(r,e,n,o),B9(r,t,n)}}function v6(e,t,r){var n=In(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(g9(e))C9(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var x=t.lastRenderedState,c=i(x,r);if(o.hasEagerState=!0,o.eagerState=c,kr(c,x)){var l=t.interleaved;l===null?(o.next=o,sd(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=Jh(e,t,o,n),r!==null&&(o=bt(),Dr(r,e,n,o),B9(r,t,n))}}function g9(e){var t=e.alternate;return e===We||t!==null&&t===We}function C9(e,t){ii=hs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function B9(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Yc(e,r)}}var Es={readContext:fr,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},A6={readContext:fr,useCallback:function(e,t){return Vr().memoizedState=[e,t===void 0?null:t],e},useContext:fr,useEffect:pf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ma(4194308,4,u9.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ma(4,2,e,t)},useMemo:function(e,t){var r=Vr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Vr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=B6.bind(null,We,e),[n.memoizedState,e]},useRef:function(e){var t=Vr();return e={current:e},t.memoizedState=e},useState:ff,useDebugValue:hd,useDeferredValue:function(e){return Vr().memoizedState=e},useTransition:function(){var e=ff(!1),t=e[0];return e=C6.bind(null,e[1]),Vr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=We,o=Vr();if(Le){if(r===void 0)throw Error(X(407));r=r()}else{if(r=t(),dt===null)throw Error(X(349));Co&30||o9(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,pf(a9.bind(null,n,i,e),[e]),n.flags|=2048,Di(9,i9.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Vr(),t=dt.identifierPrefix;if(Le){var r=an,n=on;r=(n&~(1<<32-wr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Fi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=g6++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y6={readContext:fr,useCallback:f9,useContext:fr,useEffect:pd,useImperativeHandle:m9,useInsertionEffect:c9,useLayoutEffect:d9,useMemo:p9,useReducer:il,useRef:l9,useState:function(){return il(wi)},useDebugValue:hd,useDeferredValue:function(e){var t=pr();return h9(t,it.memoizedState,e)},useTransition:function(){var e=il(wi)[0],t=pr().memoizedState;return[e,t]},useMutableSource:r9,useSyncExternalStore:n9,useId:E9,unstable_isNewReconciler:!1},F6={readContext:fr,useCallback:f9,useContext:fr,useEffect:pd,useImperativeHandle:m9,useInsertionEffect:c9,useLayoutEffect:d9,useMemo:p9,useReducer:al,useRef:l9,useState:function(){return al(wi)},useDebugValue:hd,useDeferredValue:function(e){var t=pr();return it===null?t.memoizedState=e:h9(t,it.memoizedState,e)},useTransition:function(){var e=al(wi)[0],t=pr().memoizedState;return[e,t]},useMutableSource:r9,useSyncExternalStore:n9,useId:E9,unstable_isNewReconciler:!1};function Ar(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function xc(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ge({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Rs={isMounted:function(e){return(e=e._reactInternals)?yo(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=bt(),o=In(e),i=sn(n,o);i.payload=t,r!=null&&(i.callback=r),t=Tn(e,i,o),t!==null&&(Dr(t,e,o,n),La(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=bt(),o=In(e),i=sn(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Tn(e,i,o),t!==null&&(Dr(t,e,o,n),La(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=bt(),n=In(e),o=sn(r,n);o.tag=2,t!=null&&(o.callback=t),t=Tn(e,o,n),t!==null&&(Dr(t,e,n,r),La(t,e,n))}};function hf(e,t,r,n,o,i,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,x):t.prototype&&t.prototype.isPureReactComponent?!gi(r,n)||!gi(o,i):!0}function v9(e,t,r){var n=!1,o=Rn,i=t.contextType;return typeof i=="object"&&i!==null?i=fr(i):(o=zt(t)?Eo:vt.current,n=t.contextTypes,i=(n=n!=null)?c0(e,o):Rn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rs,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ef(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Rs.enqueueReplaceState(t,t.state,null)}function lc(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},xd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=fr(i):(i=zt(t)?Eo:vt.current,o.context=c0(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xc(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Rs.enqueueReplaceState(o,o.state,null),fs(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function f0(e,t){try{var r="",n=t;do r+=Zg(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function sl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function cc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var w6=typeof WeakMap=="function"?WeakMap:Map;function A9(e,t,r){r=sn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Cs||(Cs=!0,Bc=n),cc(e,t)},r}function y9(e,t,r){r=sn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){cc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){cc(e,t),typeof n!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),r}function gf(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new w6;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=L6.bind(null,e,t,r),t.then(e,e))}function Cf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bf(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=sn(-1,1),t.tag=2,Tn(r,t,1))),r.lanes|=1),e)}var D6=fn.ReactCurrentOwner,$t=!1;function Dt(e,t,r,n){t.child=e===null?Zh(t,null,r,n):u0(t,e.child,r,n)}function vf(e,t,r,n,o){r=r.render;var i=t.ref;return a0(t,o),n=md(e,t,r,n,i,o),r=fd(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,un(e,t,o)):(Le&&r&&td(t),t.flags|=1,Dt(e,t,n,o),t.child)}function Af(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Fd(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,F9(e,t,i,n,o)):(e=Wa(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var x=i.memoizedProps;if(r=r.compare,r=r!==null?r:gi,r(x,n)&&e.ref===t.ref)return un(e,t,o)}return t.flags|=1,e=On(i,n),e.ref=t.ref,e.return=t,t.child=e}function F9(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(gi(i,n)&&e.ref===t.ref)if($t=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,un(e,t,o)}return dc(e,t,r,n,o)}function w9(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(e0,Qt),Qt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(e0,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Se(e0,Qt),Qt|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Se(e0,Qt),Qt|=n;return Dt(e,t,o,r),t.child}function D9(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function dc(e,t,r,n,o){var i=zt(r)?Eo:vt.current;return i=c0(t,i),a0(t,o),r=md(e,t,r,n,i,o),n=fd(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,un(e,t,o)):(Le&&n&&td(t),t.flags|=1,Dt(e,t,r,o),t.child)}function yf(e,t,r,n,o){if(zt(r)){var i=!0;ls(t)}else i=!1;if(a0(t,o),t.stateNode===null)Va(e,t),v9(t,r,n),lc(t,r,n,o),n=!0;else if(e===null){var x=t.stateNode,c=t.memoizedProps;x.props=c;var l=x.context,d=r.contextType;typeof d=="object"&&d!==null?d=fr(d):(d=zt(r)?Eo:vt.current,d=c0(t,d));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof x.getSnapshotBeforeUpdate=="function";f||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(c!==n||l!==d)&&Ef(t,x,n,d),Dn=!1;var B=t.memoizedState;x.state=B,fs(t,n,x,o),l=t.memoizedState,c!==n||B!==l||Tt.current||Dn?(typeof h=="function"&&(xc(t,r,h,n),l=t.memoizedState),(c=Dn||hf(t,r,c,n,B,l,d))?(f||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),x.props=n,x.state=l,x.context=d,n=c):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{x=t.stateNode,e9(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Ar(t.type,c),x.props=d,f=t.pendingProps,B=x.context,l=r.contextType,typeof l=="object"&&l!==null?l=fr(l):(l=zt(r)?Eo:vt.current,l=c0(t,l));var A=r.getDerivedStateFromProps;(h=typeof A=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(c!==f||B!==l)&&Ef(t,x,n,l),Dn=!1,B=t.memoizedState,x.state=B,fs(t,n,x,o);var w=t.memoizedState;c!==f||B!==w||Tt.current||Dn?(typeof A=="function"&&(xc(t,r,A,n),w=t.memoizedState),(d=Dn||hf(t,r,d,n,B,w,l)||!1)?(h||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(n,w,l),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(n,w,l)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),x.props=n,x.state=w,x.context=l,n=d):(typeof x.componentDidUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),n=!1)}return uc(e,t,r,n,i,o)}function uc(e,t,r,n,o,i){D9(e,t);var x=(t.flags&128)!==0;if(!n&&!x)return o&&xf(t,r,!1),un(e,t,i);n=t.stateNode,D6.current=t;var c=x&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&x?(t.child=u0(t,e.child,null,i),t.child=u0(t,null,c,i)):Dt(e,t,c,i),t.memoizedState=n.state,o&&xf(t,r,!0),t.child}function b9(e){var t=e.stateNode;t.pendingContext?sf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sf(e,t.context,!1),ld(e,t.containerInfo)}function Ff(e,t,r,n,o){return d0(),nd(o),t.flags|=256,Dt(e,t,r,n),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function fc(e){return{baseLanes:e,cachePool:null,transitions:null}}function k9(e,t,r){var n=t.pendingProps,o=Ue.current,i=!1,x=(t.flags&128)!==0,c;if((c=x)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Se(Ue,o&1),e===null)return ac(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(x=n.children,e=n.fallback,i?(n=t.mode,i=t.child,x={mode:"hidden",children:x},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=x):i=Hs(x,n,0,null),e=mo(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fc(r),t.memoizedState=mc,e):Ed(t,x));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return b6(e,t,x,n,c,o,r);if(i){i=n.fallback,x=t.mode,o=e.child,c=o.sibling;var l={mode:"hidden",children:n.children};return!(x&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=On(o,l),n.subtreeFlags=o.subtreeFlags&14680064),c!==null?i=On(c,i):(i=mo(i,x,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,x=e.child.memoizedState,x=x===null?fc(r):{baseLanes:x.baseLanes|r,cachePool:null,transitions:x.transitions},i.memoizedState=x,i.childLanes=e.childLanes&~r,t.memoizedState=mc,n}return i=e.child,e=i.sibling,n=On(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ed(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ya(e,t,r,n){return n!==null&&nd(n),u0(t,e.child,null,r),e=Ed(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function b6(e,t,r,n,o,i,x){if(r)return t.flags&256?(t.flags&=-257,n=sl(Error(X(422))),ya(e,t,x,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Hs({mode:"visible",children:n.children},o,0,null),i=mo(i,o,x,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&u0(t,e.child,null,x),t.child.memoizedState=fc(x),t.memoizedState=mc,i);if(!(t.mode&1))return ya(e,t,x,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var c=n.dgst;return n=c,i=Error(X(419)),n=sl(i,n,void 0),ya(e,t,x,n)}if(c=(x&e.childLanes)!==0,$t||c){if(n=dt,n!==null){switch(x&-x){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|x)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dn(e,o),Dr(n,e,o,-1))}return yd(),n=sl(Error(X(421))),ya(e,t,x,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=R6.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Gt=Nn(o.nextSibling),qt=t,Le=!0,Fr=null,e!==null&&(cr[dr++]=on,cr[dr++]=an,cr[dr++]=go,on=e.id,an=e.overflow,go=t),t=Ed(t,n.children),t.flags|=4096,t)}function wf(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),sc(e.return,t,r)}function xl(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function _9(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Dt(e,t,n.children,r),n=Ue.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wf(e,r,t);else if(e.tag===19)wf(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Se(Ue,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&ps(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),xl(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ps(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}xl(t,!0,r,null,i);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Va(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bo|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,r=On(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=On(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function k6(e,t,r){switch(t.tag){case 3:b9(t),d0();break;case 5:t9(t);break;case 1:zt(t.type)&&ls(t);break;case 4:ld(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Se(us,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Se(Ue,Ue.current&1),t.flags|=128,null):r&t.child.childLanes?k9(e,t,r):(Se(Ue,Ue.current&1),e=un(e,t,r),e!==null?e.sibling:null);Se(Ue,Ue.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return _9(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Se(Ue,Ue.current),n)break;return null;case 22:case 23:return t.lanes=0,w9(e,t,r)}return un(e,t,r)}var j9,pc,P9,S9;j9=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};pc=function(){};P9=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,lo(Qr.current);var i=null;switch(r){case"input":o=Il(e,o),n=Il(e,n),i=[];break;case"select":o=Ge({},o,{value:void 0}),n=Ge({},n,{value:void 0}),i=[];break;case"textarea":o=Rl(e,o),n=Rl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ss)}Vl(r,n);var x;r=null;for(d in o)if(!n.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var c=o[d];for(x in c)c.hasOwnProperty(x)&&(r||(r={}),r[x]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(di.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var l=n[d];if(c=o!=null?o[d]:void 0,n.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(x in c)!c.hasOwnProperty(x)||l&&l.hasOwnProperty(x)||(r||(r={}),r[x]="");for(x in l)l.hasOwnProperty(x)&&c[x]!==l[x]&&(r||(r={}),r[x]=l[x])}else r||(i||(i=[]),i.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(di.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Te("scroll",e),i||c===l||(i=[])):(i=i||[]).push(d,l))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};S9=function(e,t,r,n){r!==n&&(t.flags|=4)};function W0(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Et(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function _6(e,t,r){var n=t.pendingProps;switch(rd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(t),null;case 1:return zt(t.type)&&xs(),Et(t),null;case 3:return n=t.stateNode,m0(),Ie(Tt),Ie(vt),dd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fr!==null&&(yc(Fr),Fr=null))),pc(e,t),Et(t),null;case 5:cd(t);var o=lo(yi.current);if(r=t.type,e!==null&&t.stateNode!=null)P9(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(X(166));return Et(t),null}if(e=lo(Qr.current),va(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Ur]=t,n[vi]=i,e=(t.mode&1)!==0,r){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(o=0;o<Z0.length;o++)Te(Z0[o],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":$m(n,i),Te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Te("invalid",n);break;case"textarea":Tm(n,i),Te("invalid",n)}Vl(r,i),o=null;for(var x in i)if(i.hasOwnProperty(x)){var c=i[x];x==="children"?typeof c=="string"?n.textContent!==c&&(i.suppressHydrationWarning!==!0&&Ba(n.textContent,c,e),o=["children",c]):typeof c=="number"&&n.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Ba(n.textContent,c,e),o=["children",""+c]):di.hasOwnProperty(x)&&c!=null&&x==="onScroll"&&Te("scroll",n)}switch(r){case"input":ua(n),Nm(n,i,!0);break;case"textarea":ua(n),zm(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ss)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{x=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ah(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=x.createElement(r,{is:n.is}):(e=x.createElement(r),r==="select"&&(x=e,n.multiple?x.multiple=!0:n.size&&(x.size=n.size))):e=x.createElementNS(e,r),e[Ur]=t,e[vi]=n,j9(e,t,!1,!1),t.stateNode=e;e:{switch(x=Hl(r,n),r){case"dialog":Te("cancel",e),Te("close",e),o=n;break;case"iframe":case"object":case"embed":Te("load",e),o=n;break;case"video":case"audio":for(o=0;o<Z0.length;o++)Te(Z0[o],e);o=n;break;case"source":Te("error",e),o=n;break;case"img":case"image":case"link":Te("error",e),Te("load",e),o=n;break;case"details":Te("toggle",e),o=n;break;case"input":$m(e,n),o=Il(e,n),Te("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=Ge({},n,{value:void 0}),Te("invalid",e);break;case"textarea":Tm(e,n),o=Rl(e,n),Te("invalid",e);break;default:o=n}Vl(r,o),c=o;for(i in c)if(c.hasOwnProperty(i)){var l=c[i];i==="style"?lh(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sh(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ui(e,l):typeof l=="number"&&ui(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(di.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Te("scroll",e):l!=null&&Mc(e,i,l,x))}switch(r){case"input":ua(e),Nm(e,n,!1);break;case"textarea":ua(e),zm(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ln(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?r0(e,!!n.multiple,i,!1):n.defaultValue!=null&&r0(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ss)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Et(t),null;case 6:if(e&&t.stateNode!=null)S9(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(X(166));if(r=lo(yi.current),lo(Qr.current),va(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ur]=t,(i=n.nodeValue!==r)&&(e=qt,e!==null))switch(e.tag){case 3:Ba(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ba(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ur]=t,t.stateNode=n}return Et(t),null;case 13:if(Ie(Ue),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Gt!==null&&t.mode&1&&!(t.flags&128))Xh(),d0(),t.flags|=98560,i=!1;else if(i=va(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(X(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(X(317));i[Ur]=t}else d0(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Et(t),i=!1}else Fr!==null&&(yc(Fr),Fr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?at===0&&(at=3):yd())),t.updateQueue!==null&&(t.flags|=4),Et(t),null);case 4:return m0(),pc(e,t),e===null&&Ci(t.stateNode.containerInfo),Et(t),null;case 10:return ad(t.type._context),Et(t),null;case 17:return zt(t.type)&&xs(),Et(t),null;case 19:if(Ie(Ue),i=t.memoizedState,i===null)return Et(t),null;if(n=(t.flags&128)!==0,x=i.rendering,x===null)if(n)W0(i,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(x=ps(e),x!==null){for(t.flags|=128,W0(i,!1),n=x.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,x=i.alternate,x===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=x.childLanes,i.lanes=x.lanes,i.child=x.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=x.memoizedProps,i.memoizedState=x.memoizedState,i.updateQueue=x.updateQueue,i.type=x.type,e=x.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Se(Ue,Ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&et()>p0&&(t.flags|=128,n=!0,W0(i,!1),t.lanes=4194304)}else{if(!n)if(e=ps(x),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),W0(i,!0),i.tail===null&&i.tailMode==="hidden"&&!x.alternate&&!Le)return Et(t),null}else 2*et()-i.renderingStartTime>p0&&r!==1073741824&&(t.flags|=128,n=!0,W0(i,!1),t.lanes=4194304);i.isBackwards?(x.sibling=t.child,t.child=x):(r=i.last,r!==null?r.sibling=x:t.child=x,i.last=x)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=et(),t.sibling=null,r=Ue.current,Se(Ue,n?r&1|2:r&1),t):(Et(t),null);case 22:case 23:return Ad(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Qt&1073741824&&(Et(t),t.subtreeFlags&6&&(t.flags|=8192)):Et(t),null;case 24:return null;case 25:return null}throw Error(X(156,t.tag))}function j6(e,t){switch(rd(t),t.tag){case 1:return zt(t.type)&&xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return m0(),Ie(Tt),Ie(vt),dd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cd(t),null;case 13:if(Ie(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));d0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Ue),null;case 4:return m0(),null;case 10:return ad(t.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var Fa=!1,Ct=!1,P6=typeof WeakSet=="function"?WeakSet:Set,te=null;function Jo(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Xe(e,t,n)}else r.current=null}function hc(e,t,r){try{r()}catch(n){Xe(e,t,n)}}var Df=!1;function S6(e,t){if(Jl=os,e=Ih(),ed(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var x=0,c=-1,l=-1,d=0,h=0,f=e,B=null;t:for(;;){for(var A;f!==r||o!==0&&f.nodeType!==3||(c=x+o),f!==i||n!==0&&f.nodeType!==3||(l=x+n),f.nodeType===3&&(x+=f.nodeValue.length),(A=f.firstChild)!==null;)B=f,f=A;for(;;){if(f===e)break t;if(B===r&&++d===o&&(c=x),B===i&&++h===n&&(l=x),(A=f.nextSibling)!==null)break;f=B,B=f.parentNode}f=A}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(ec={focusedElem:e,selectionRange:r},os=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,_=w.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ar(t.type,b),_);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(C){Xe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return w=Df,Df=!1,w}function ai(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hc(t,r,i)}o=o.next}while(o!==n)}}function Ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ec(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function $9(e){var t=e.alternate;t!==null&&(e.alternate=null,$9(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ur],delete t[vi],delete t[nc],delete t[f6],delete t[p6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function N9(e){return e.tag===5||e.tag===3||e.tag===4}function bf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||N9(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ss));else if(n!==4&&(e=e.child,e!==null))for(gc(e,t,r),e=e.sibling;e!==null;)gc(e,t,r),e=e.sibling}function Cc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Cc(e,t,r),e=e.sibling;e!==null;)Cc(e,t,r),e=e.sibling}var ut=null,yr=!1;function An(e,t,r){for(r=r.child;r!==null;)T9(e,t,r),r=r.sibling}function T9(e,t,r){if(Wr&&typeof Wr.onCommitFiberUnmount=="function")try{Wr.onCommitFiberUnmount($s,r)}catch{}switch(r.tag){case 5:Ct||Jo(r,t);case 6:var n=ut,o=yr;ut=null,An(e,t,r),ut=n,yr=o,ut!==null&&(yr?(e=ut,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ut.removeChild(r.stateNode));break;case 18:ut!==null&&(yr?(e=ut,r=r.stateNode,e.nodeType===8?tl(e.parentNode,r):e.nodeType===1&&tl(e,r),hi(e)):tl(ut,r.stateNode));break;case 4:n=ut,o=yr,ut=r.stateNode.containerInfo,yr=!0,An(e,t,r),ut=n,yr=o;break;case 0:case 11:case 14:case 15:if(!Ct&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,x=i.destroy;i=i.tag,x!==void 0&&(i&2||i&4)&&hc(r,t,x),o=o.next}while(o!==n)}An(e,t,r);break;case 1:if(!Ct&&(Jo(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(c){Xe(r,t,c)}An(e,t,r);break;case 21:An(e,t,r);break;case 22:r.mode&1?(Ct=(n=Ct)||r.memoizedState!==null,An(e,t,r),Ct=n):An(e,t,r);break;default:An(e,t,r)}}function kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new P6),t.forEach(function(n){var o=M6.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function vr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,x=t,c=x;e:for(;c!==null;){switch(c.tag){case 5:ut=c.stateNode,yr=!1;break e;case 3:ut=c.stateNode.containerInfo,yr=!0;break e;case 4:ut=c.stateNode.containerInfo,yr=!0;break e}c=c.return}if(ut===null)throw Error(X(160));T9(i,x,o),ut=null,yr=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(d){Xe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)z9(t,e),t=t.sibling}function z9(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vr(t,e),Ir(e),n&4){try{ai(3,e,e.return),Ms(3,e)}catch(b){Xe(e,e.return,b)}try{ai(5,e,e.return)}catch(b){Xe(e,e.return,b)}}break;case 1:vr(t,e),Ir(e),n&512&&r!==null&&Jo(r,r.return);break;case 5:if(vr(t,e),Ir(e),n&512&&r!==null&&Jo(r,r.return),e.flags&32){var o=e.stateNode;try{ui(o,"")}catch(b){Xe(e,e.return,b)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,x=r!==null?r.memoizedProps:i,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&oh(o,i),Hl(c,x);var d=Hl(c,i);for(x=0;x<l.length;x+=2){var h=l[x],f=l[x+1];h==="style"?lh(o,f):h==="dangerouslySetInnerHTML"?sh(o,f):h==="children"?ui(o,f):Mc(o,h,f,d)}switch(c){case"input":Ol(o,i);break;case"textarea":ih(o,i);break;case"select":var B=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?r0(o,!!i.multiple,A,!1):B!==!!i.multiple&&(i.defaultValue!=null?r0(o,!!i.multiple,i.defaultValue,!0):r0(o,!!i.multiple,i.multiple?[]:"",!1))}o[vi]=i}catch(b){Xe(e,e.return,b)}}break;case 6:if(vr(t,e),Ir(e),n&4){if(e.stateNode===null)throw Error(X(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){Xe(e,e.return,b)}}break;case 3:if(vr(t,e),Ir(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(b){Xe(e,e.return,b)}break;case 4:vr(t,e),Ir(e);break;case 13:vr(t,e),Ir(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Bd=et())),n&4&&kf(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(Ct=(d=Ct)||h,vr(t,e),Ct=d):vr(t,e),Ir(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(te=e,h=e.child;h!==null;){for(f=te=h;te!==null;){switch(B=te,A=B.child,B.tag){case 0:case 11:case 14:case 15:ai(4,B,B.return);break;case 1:Jo(B,B.return);var w=B.stateNode;if(typeof w.componentWillUnmount=="function"){n=B,r=B.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){Xe(n,r,b)}}break;case 5:Jo(B,B.return);break;case 22:if(B.memoizedState!==null){jf(f);continue}}A!==null?(A.return=B,te=A):jf(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=f.stateNode,l=f.memoizedProps.style,x=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=xh("display",x))}catch(b){Xe(e,e.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){Xe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vr(t,e),Ir(e),n&4&&kf(e);break;case 21:break;default:vr(t,e),Ir(e)}}function Ir(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(N9(r)){var n=r;break e}r=r.return}throw Error(X(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(ui(o,""),n.flags&=-33);var i=bf(e);Cc(e,i,o);break;case 3:case 4:var x=n.stateNode.containerInfo,c=bf(e);gc(e,c,x);break;default:throw Error(X(161))}}catch(l){Xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $6(e,t,r){te=e,I9(e)}function I9(e,t,r){for(var n=(e.mode&1)!==0;te!==null;){var o=te,i=o.child;if(o.tag===22&&n){var x=o.memoizedState!==null||Fa;if(!x){var c=o.alternate,l=c!==null&&c.memoizedState!==null||Ct;c=Fa;var d=Ct;if(Fa=x,(Ct=l)&&!d)for(te=o;te!==null;)x=te,l=x.child,x.tag===22&&x.memoizedState!==null?Pf(o):l!==null?(l.return=x,te=l):Pf(o);for(;i!==null;)te=i,I9(i),i=i.sibling;te=o,Fa=c,Ct=d}_f(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,te=i):_f(e)}}function _f(e){for(;te!==null;){var t=te;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ct||Ms(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ct)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Ar(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mf(t,i,n);break;case 3:var x=t.updateQueue;if(x!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}mf(t,x,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&hi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}Ct||t.flags&512&&Ec(t)}catch(B){Xe(t,t.return,B)}}if(t===e){te=null;break}if(r=t.sibling,r!==null){r.return=t.return,te=r;break}te=t.return}}function jf(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var r=t.sibling;if(r!==null){r.return=t.return,te=r;break}te=t.return}}function Pf(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ms(4,t)}catch(l){Xe(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){Xe(t,o,l)}}var i=t.return;try{Ec(t)}catch(l){Xe(t,i,l)}break;case 5:var x=t.return;try{Ec(t)}catch(l){Xe(t,x,l)}}}catch(l){Xe(t,t.return,l)}if(t===e){te=null;break}var c=t.sibling;if(c!==null){c.return=t.return,te=c;break}te=t.return}}var N6=Math.ceil,gs=fn.ReactCurrentDispatcher,gd=fn.ReactCurrentOwner,mr=fn.ReactCurrentBatchConfig,Ee=0,dt=null,nt=null,mt=0,Qt=0,e0=Hn(0),at=0,bi=null,Bo=0,Vs=0,Cd=0,si=null,St=null,Bd=0,p0=1/0,tn=null,Cs=!1,Bc=null,zn=null,wa=!1,jn=null,Bs=0,xi=0,vc=null,Ha=-1,Ua=0;function bt(){return Ee&6?et():Ha!==-1?Ha:Ha=et()}function In(e){return e.mode&1?Ee&2&&mt!==0?mt&-mt:E6.transition!==null?(Ua===0&&(Ua=vh()),Ua):(e=ye,e!==0||(e=window.event,e=e===void 0?16:kh(e.type)),e):1}function Dr(e,t,r,n){if(50<xi)throw xi=0,vc=null,Error(X(185));$i(e,r,n),(!(Ee&2)||e!==dt)&&(e===dt&&(!(Ee&2)&&(Vs|=r),at===4&&kn(e,mt)),It(e,n),r===1&&Ee===0&&!(t.mode&1)&&(p0=et()+500,Os&&Un()))}function It(e,t){var r=e.callbackNode;E5(e,t);var n=ns(e,e===dt?mt:0);if(n===0)r!==null&&Lm(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Lm(r),t===1)e.tag===0?h6(Sf.bind(null,e)):Yh(Sf.bind(null,e)),u6(function(){!(Ee&6)&&Un()}),r=null;else{switch(Ah(n)){case 1:r=Qc;break;case 4:r=Ch;break;case 16:r=rs;break;case 536870912:r=Bh;break;default:r=rs}r=W9(r,O9.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function O9(e,t){if(Ha=-1,Ua=0,Ee&6)throw Error(X(327));var r=e.callbackNode;if(s0()&&e.callbackNode!==r)return null;var n=ns(e,e===dt?mt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=vs(e,n);else{t=n;var o=Ee;Ee|=2;var i=R9();(dt!==e||mt!==t)&&(tn=null,p0=et()+500,uo(e,t));do try{I6();break}catch(c){L9(e,c)}while(!0);id(),gs.current=i,Ee=o,nt!==null?t=0:(dt=null,mt=0,t=at)}if(t!==0){if(t===2&&(o=Gl(e),o!==0&&(n=o,t=Ac(e,o))),t===1)throw r=bi,uo(e,0),kn(e,n),It(e,et()),r;if(t===6)kn(e,n);else{if(o=e.current.alternate,!(n&30)&&!T6(o)&&(t=vs(e,n),t===2&&(i=Gl(e),i!==0&&(n=i,t=Ac(e,i))),t===1))throw r=bi,uo(e,0),kn(e,n),It(e,et()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(X(345));case 2:ao(e,St,tn);break;case 3:if(kn(e,n),(n&130023424)===n&&(t=Bd+500-et(),10<t)){if(ns(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){bt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=rc(ao.bind(null,e,St,tn),t);break}ao(e,St,tn);break;case 4:if(kn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var x=31-wr(n);i=1<<x,x=t[x],x>o&&(o=x),n&=~i}if(n=o,n=et()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*N6(n/1960))-n,10<n){e.timeoutHandle=rc(ao.bind(null,e,St,tn),n);break}ao(e,St,tn);break;case 5:ao(e,St,tn);break;default:throw Error(X(329))}}}return It(e,et()),e.callbackNode===r?O9.bind(null,e):null}function Ac(e,t){var r=si;return e.current.memoizedState.isDehydrated&&(uo(e,t).flags|=256),e=vs(e,t),e!==2&&(t=St,St=r,t!==null&&yc(t)),e}function yc(e){St===null?St=e:St.push.apply(St,e)}function T6(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!kr(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~Cd,t&=~Vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-wr(t),n=1<<r;e[r]=-1,t&=~n}}function Sf(e){if(Ee&6)throw Error(X(327));s0();var t=ns(e,0);if(!(t&1))return It(e,et()),null;var r=vs(e,t);if(e.tag!==0&&r===2){var n=Gl(e);n!==0&&(t=n,r=Ac(e,n))}if(r===1)throw r=bi,uo(e,0),kn(e,t),It(e,et()),r;if(r===6)throw Error(X(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ao(e,St,tn),It(e,et()),null}function vd(e,t){var r=Ee;Ee|=1;try{return e(t)}finally{Ee=r,Ee===0&&(p0=et()+500,Os&&Un())}}function vo(e){jn!==null&&jn.tag===0&&!(Ee&6)&&s0();var t=Ee;Ee|=1;var r=mr.transition,n=ye;try{if(mr.transition=null,ye=1,e)return e()}finally{ye=n,mr.transition=r,Ee=t,!(Ee&6)&&Un()}}function Ad(){Qt=e0.current,Ie(e0)}function uo(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,d6(r)),nt!==null)for(r=nt.return;r!==null;){var n=r;switch(rd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&xs();break;case 3:m0(),Ie(Tt),Ie(vt),dd();break;case 5:cd(n);break;case 4:m0();break;case 13:Ie(Ue);break;case 19:Ie(Ue);break;case 10:ad(n.type._context);break;case 22:case 23:Ad()}r=r.return}if(dt=e,nt=e=On(e.current,null),mt=Qt=t,at=0,bi=null,Cd=Vs=Bo=0,St=si=null,xo!==null){for(t=0;t<xo.length;t++)if(r=xo[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var x=i.next;i.next=o,n.next=x}r.pending=n}xo=null}return e}function L9(e,t){do{var r=nt;try{if(id(),Ra.current=Es,hs){for(var n=We.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}hs=!1}if(Co=0,lt=it=We=null,ii=!1,Fi=0,gd.current=null,r===null||r.return===null){at=1,bi=t,nt=null;break}e:{var i=e,x=r.return,c=r,l=t;if(t=mt,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=c,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var B=h.alternate;B?(h.updateQueue=B.updateQueue,h.memoizedState=B.memoizedState,h.lanes=B.lanes):(h.updateQueue=null,h.memoizedState=null)}var A=Cf(x);if(A!==null){A.flags&=-257,Bf(A,x,c,i,t),A.mode&1&&gf(i,d,t),t=A,l=d;var w=t.updateQueue;if(w===null){var b=new Set;b.add(l),t.updateQueue=b}else w.add(l);break e}else{if(!(t&1)){gf(i,d,t),yd();break e}l=Error(X(426))}}else if(Le&&c.mode&1){var _=Cf(x);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Bf(_,x,c,i,t),nd(f0(l,c));break e}}i=l=f0(l,c),at!==4&&(at=2),si===null?si=[i]:si.push(i),i=x;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=A9(i,l,t);uf(i,m);break e;case 1:c=l;var p=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(zn===null||!zn.has(E)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=y9(i,c,t);uf(i,C);break e}}i=i.return}while(i!==null)}V9(r)}catch(k){t=k,nt===r&&r!==null&&(nt=r=r.return);continue}break}while(!0)}function R9(){var e=gs.current;return gs.current=Es,e===null?Es:e}function yd(){(at===0||at===3||at===2)&&(at=4),dt===null||!(Bo&268435455)&&!(Vs&268435455)||kn(dt,mt)}function vs(e,t){var r=Ee;Ee|=2;var n=R9();(dt!==e||mt!==t)&&(tn=null,uo(e,t));do try{z6();break}catch(o){L9(e,o)}while(!0);if(id(),Ee=r,gs.current=n,nt!==null)throw Error(X(261));return dt=null,mt=0,at}function z6(){for(;nt!==null;)M9(nt)}function I6(){for(;nt!==null&&!x5();)M9(nt)}function M9(e){var t=U9(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?V9(e):nt=t,gd.current=null}function V9(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=j6(r,t),r!==null){r.flags&=32767,nt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,nt=null;return}}else if(r=_6(r,t,Qt),r!==null){nt=r;return}if(t=t.sibling,t!==null){nt=t;return}nt=t=e}while(t!==null);at===0&&(at=5)}function ao(e,t,r){var n=ye,o=mr.transition;try{mr.transition=null,ye=1,O6(e,t,r,n)}finally{mr.transition=o,ye=n}return null}function O6(e,t,r,n){do s0();while(jn!==null);if(Ee&6)throw Error(X(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(X(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(g5(e,i),e===dt&&(nt=dt=null,mt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||wa||(wa=!0,W9(rs,function(){return s0(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=mr.transition,mr.transition=null;var x=ye;ye=1;var c=Ee;Ee|=4,gd.current=null,S6(e,r),z9(r,e),o6(ec),os=!!Jl,ec=Jl=null,e.current=r,$6(r),l5(),Ee=c,ye=x,mr.transition=i}else e.current=r;if(wa&&(wa=!1,jn=e,Bs=o),i=e.pendingLanes,i===0&&(zn=null),u5(r.stateNode),It(e,et()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Cs)throw Cs=!1,e=Bc,Bc=null,e;return Bs&1&&e.tag!==0&&s0(),i=e.pendingLanes,i&1?e===vc?xi++:(xi=0,vc=e):xi=0,Un(),null}function s0(){if(jn!==null){var e=Ah(Bs),t=mr.transition,r=ye;try{if(mr.transition=null,ye=16>e?16:e,jn===null)var n=!1;else{if(e=jn,jn=null,Bs=0,Ee&6)throw Error(X(331));var o=Ee;for(Ee|=4,te=e.current;te!==null;){var i=te,x=i.child;if(te.flags&16){var c=i.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(te=d;te!==null;){var h=te;switch(h.tag){case 0:case 11:case 15:ai(8,h,i)}var f=h.child;if(f!==null)f.return=h,te=f;else for(;te!==null;){h=te;var B=h.sibling,A=h.return;if($9(h),h===d){te=null;break}if(B!==null){B.return=A,te=B;break}te=A}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}te=i}}if(i.subtreeFlags&2064&&x!==null)x.return=i,te=x;else e:for(;te!==null;){if(i=te,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ai(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,te=m;break e}te=i.return}}var p=e.current;for(te=p;te!==null;){x=te;var E=x.child;if(x.subtreeFlags&2064&&E!==null)E.return=x,te=E;else e:for(x=p;te!==null;){if(c=te,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ms(9,c)}}catch(k){Xe(c,c.return,k)}if(c===x){te=null;break e}var C=c.sibling;if(C!==null){C.return=c.return,te=C;break e}te=c.return}}if(Ee=o,Un(),Wr&&typeof Wr.onPostCommitFiberRoot=="function")try{Wr.onPostCommitFiberRoot($s,e)}catch{}n=!0}return n}finally{ye=r,mr.transition=t}}return!1}function $f(e,t,r){t=f0(r,t),t=A9(e,t,1),e=Tn(e,t,1),t=bt(),e!==null&&($i(e,1,t),It(e,t))}function Xe(e,t,r){if(e.tag===3)$f(e,e,r);else for(;t!==null;){if(t.tag===3){$f(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(zn===null||!zn.has(n))){e=f0(r,e),e=y9(t,e,1),t=Tn(t,e,1),e=bt(),t!==null&&($i(t,1,e),It(t,e));break}}t=t.return}}function L6(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=bt(),e.pingedLanes|=e.suspendedLanes&r,dt===e&&(mt&r)===r&&(at===4||at===3&&(mt&130023424)===mt&&500>et()-Bd?uo(e,0):Cd|=r),It(e,t)}function H9(e,t){t===0&&(e.mode&1?(t=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):t=1);var r=bt();e=dn(e,t),e!==null&&($i(e,t,r),It(e,r))}function R6(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),H9(e,r)}function M6(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(X(314))}n!==null&&n.delete(t),H9(e,r)}var U9;U9=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)$t=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return $t=!1,k6(e,t,r);$t=!!(e.flags&131072)}else $t=!1,Le&&t.flags&1048576&&Gh(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Va(e,t),e=t.pendingProps;var o=c0(t,vt.current);a0(t,r),o=md(null,t,n,e,o,r);var i=fd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(n)?(i=!0,ls(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xd(t),o.updater=Rs,t.stateNode=o,o._reactInternals=t,lc(t,n,e,r),t=uc(null,t,n,!0,i,r)):(t.tag=0,Le&&i&&td(t),Dt(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Va(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=H6(n),e=Ar(n,e),o){case 0:t=dc(null,t,n,e,r);break e;case 1:t=yf(null,t,n,e,r);break e;case 11:t=vf(null,t,n,e,r);break e;case 14:t=Af(null,t,n,Ar(n.type,e),r);break e}throw Error(X(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ar(n,o),dc(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ar(n,o),yf(e,t,n,o,r);case 3:e:{if(b9(t),e===null)throw Error(X(387));n=t.pendingProps,i=t.memoizedState,o=i.element,e9(e,t),fs(t,n,null,r);var x=t.memoizedState;if(n=x.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=f0(Error(X(423)),t),t=Ff(e,t,n,r,o);break e}else if(n!==o){o=f0(Error(X(424)),t),t=Ff(e,t,n,r,o);break e}else for(Gt=Nn(t.stateNode.containerInfo.firstChild),qt=t,Le=!0,Fr=null,r=Zh(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(d0(),n===o){t=un(e,t,r);break e}Dt(e,t,n,r)}t=t.child}return t;case 5:return t9(t),e===null&&ac(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,x=o.children,tc(n,o)?x=null:i!==null&&tc(n,i)&&(t.flags|=32),D9(e,t),Dt(e,t,x,r),t.child;case 6:return e===null&&ac(t),null;case 13:return k9(e,t,r);case 4:return ld(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=u0(t,null,n,r):Dt(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ar(n,o),vf(e,t,n,o,r);case 7:return Dt(e,t,t.pendingProps,r),t.child;case 8:return Dt(e,t,t.pendingProps.children,r),t.child;case 12:return Dt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,x=o.value,Se(us,n._currentValue),n._currentValue=x,i!==null)if(kr(i.value,x)){if(i.children===o.children&&!Tt.current){t=un(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){x=i.child;for(var l=c.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=sn(-1,r&-r),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),sc(i.return,r,t),c.lanes|=r;break}l=l.next}}else if(i.tag===10)x=i.type===t.type?null:i.child;else if(i.tag===18){if(x=i.return,x===null)throw Error(X(341));x.lanes|=r,c=x.alternate,c!==null&&(c.lanes|=r),sc(x,r,t),x=i.sibling}else x=i.child;if(x!==null)x.return=i;else for(x=i;x!==null;){if(x===t){x=null;break}if(i=x.sibling,i!==null){i.return=x.return,x=i;break}x=x.return}i=x}Dt(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,a0(t,r),o=fr(o),n=n(o),t.flags|=1,Dt(e,t,n,r),t.child;case 14:return n=t.type,o=Ar(n,t.pendingProps),o=Ar(n.type,o),Af(e,t,n,o,r);case 15:return F9(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ar(n,o),Va(e,t),t.tag=1,zt(n)?(e=!0,ls(t)):e=!1,a0(t,r),v9(t,n,o),lc(t,n,o,r),uc(null,t,n,!0,e,r);case 19:return _9(e,t,r);case 22:return w9(e,t,r)}throw Error(X(156,t.tag))};function W9(e,t){return gh(e,t)}function V6(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ur(e,t,r,n){return new V6(e,t,r,n)}function Fd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function H6(e){if(typeof e=="function")return Fd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hc)return 11;if(e===Uc)return 14}return 2}function On(e,t){var r=e.alternate;return r===null?(r=ur(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Wa(e,t,r,n,o,i){var x=2;if(n=e,typeof e=="function")Fd(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case Uo:return mo(r.children,o,i,t);case Vc:x=8,o|=8;break;case $l:return e=ur(12,r,t,o|2),e.elementType=$l,e.lanes=i,e;case Nl:return e=ur(13,r,t,o),e.elementType=Nl,e.lanes=i,e;case Tl:return e=ur(19,r,t,o),e.elementType=Tl,e.lanes=i,e;case th:return Hs(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jp:x=10;break e;case eh:x=9;break e;case Hc:x=11;break e;case Uc:x=14;break e;case wn:x=16,n=null;break e}throw Error(X(130,e==null?e:typeof e,""))}return t=ur(x,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function mo(e,t,r,n){return e=ur(7,e,n,t),e.lanes=r,e}function Hs(e,t,r,n){return e=ur(22,e,n,t),e.elementType=th,e.lanes=r,e.stateNode={isHidden:!1},e}function ll(e,t,r){return e=ur(6,e,null,t),e.lanes=r,e}function cl(e,t,r){return t=ur(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function U6(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ux(0),this.expirationTimes=Ux(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ux(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wd(e,t,r,n,o,i,x,c,l){return e=new U6(e,t,r,c,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ur(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(i),e}function W6(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ho,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Q9(e){if(!e)return Rn;e=e._reactInternals;e:{if(yo(e)!==e||e.tag!==1)throw Error(X(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(X(171))}if(e.tag===1){var r=e.type;if(zt(r))return Qh(e,r,t)}return t}function Y9(e,t,r,n,o,i,x,c,l){return e=wd(r,n,!0,e,o,i,x,c,l),e.context=Q9(null),r=e.current,n=bt(),o=In(r),i=sn(n,o),i.callback=t??null,Tn(r,i,o),e.current.lanes=o,$i(e,o,n),It(e,n),e}function Us(e,t,r,n){var o=t.current,i=bt(),x=In(o);return r=Q9(r),t.context===null?t.context=r:t.pendingContext=r,t=sn(i,x),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Tn(o,t,x),e!==null&&(Dr(e,o,x,i),La(e,o,x)),x}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Dd(e,t){Nf(e,t),(e=e.alternate)&&Nf(e,t)}var G9=typeof reportError=="function"?reportError:function(e){console.error(e)};function bd(e){this._internalRoot=e}Ws.prototype.render=bd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));Us(e,t,null,null)};Ws.prototype.unmount=bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vo(function(){Us(null,e,null,null)}),t[cn]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=wh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<bn.length&&t!==0&&t<bn[r].priority;r++);bn.splice(r,0,e),r===0&&bh(e)}};function kd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tf(){}function Q6(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var d=As(x);i.call(d)}}var x=Y9(t,n,e,0,null,!1,!1,"",Tf);return e._reactRootContainer=x,e[cn]=x.current,Ci(e.nodeType===8?e.parentNode:e),vo(),x}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var c=n;n=function(){var d=As(l);c.call(d)}}var l=wd(e,0,!1,null,null,!1,!1,"",Tf);return e._reactRootContainer=l,e[cn]=l.current,Ci(e.nodeType===8?e.parentNode:e),vo(function(){Us(t,l,r,n)}),l}function Ys(e,t,r,n,o){var i=r._reactRootContainer;if(i){var x=i;if(typeof o=="function"){var c=o;o=function(){var l=As(x);c.call(l)}}Us(t,x,e,o)}else x=Q6(r,t,e,o,n);return As(x)}yh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=K0(t.pendingLanes);r!==0&&(Yc(t,r|1),It(t,et()),!(Ee&6)&&(p0=et()+500,Un()))}break;case 13:vo(function(){var n=dn(e,1);if(n!==null){var o=bt();Dr(n,e,1,o)}}),Dd(e,1)}};Gc=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var r=bt();Dr(t,e,134217728,r)}Dd(e,134217728)}};Fh=function(e){if(e.tag===13){var t=In(e),r=dn(e,t);if(r!==null){var n=bt();Dr(r,e,t,n)}Dd(e,t)}};wh=function(){return ye};Dh=function(e,t){var r=ye;try{return ye=e,t()}finally{ye=r}};Wl=function(e,t,r){switch(t){case"input":if(Ol(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Is(n);if(!o)throw Error(X(90));nh(n),Ol(n,o)}}}break;case"textarea":ih(e,r);break;case"select":t=r.value,t!=null&&r0(e,!!r.multiple,t,!1)}};uh=vd;mh=vo;var Y6={usingClientEntryPoint:!1,Events:[Ti,Go,Is,ch,dh,vd]},Q0={findFiberByHostInstance:so,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G6={bundleType:Q0.bundleType,version:Q0.version,rendererPackageName:Q0.rendererPackageName,rendererConfig:Q0.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hh(e),e===null?null:e.stateNode},findFiberByHostInstance:Q0.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{$s=Da.inject(G6),Wr=Da}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y6;Kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(t))throw Error(X(200));return W6(e,t,null,r)};Kt.createRoot=function(e,t){if(!kd(e))throw Error(X(299));var r=!1,n="",o=G9;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=wd(e,1,!1,null,null,r,!1,n,o),e[cn]=t.current,Ci(e.nodeType===8?e.parentNode:e),new bd(t)};Kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=hh(t),e=e===null?null:e.stateNode,e};Kt.flushSync=function(e){return vo(e)};Kt.hydrate=function(e,t,r){if(!Qs(t))throw Error(X(200));return Ys(null,e,t,!0,r)};Kt.hydrateRoot=function(e,t,r){if(!kd(e))throw Error(X(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",x=G9;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),t=Y9(t,null,e,1,r??null,o,!1,i,x),e[cn]=t.current,Ci(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Ws(t)};Kt.render=function(e,t,r){if(!Qs(t))throw Error(X(200));return Ys(null,e,t,!1,r)};Kt.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(X(40));return e._reactRootContainer?(vo(function(){Ys(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Kt.unstable_batchedUpdates=vd;Kt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qs(r))throw Error(X(200));if(e==null||e._reactInternals===void 0)throw Error(X(38));return Ys(e,t,r,!1,n)};Kt.version="18.3.1-next-f1338f8080-20240426";function q9(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q9)}catch(e){console.error(e)}}q9(),qp.exports=Kt;var q6=qp.exports,X9,zf=q6;X9=zf.createRoot,zf.hydrateRoot;var _d={};Object.defineProperty(_d,"__esModule",{value:!0});_d.parse=rC;_d.serialize=nC;const X6=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,K6=/^[\u0021-\u003A\u003C-\u007E]*$/,Z6=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,J6=/^[\u0020-\u003A\u003D-\u007E]*$/,eC=Object.prototype.toString,tC=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function rC(e,t){const r=new tC,n=e.length;if(n<2)return r;const o=(t==null?void 0:t.decode)||oC;let i=0;do{const x=e.indexOf("=",i);if(x===-1)break;const c=e.indexOf(";",i),l=c===-1?n:c;if(x>l){i=e.lastIndexOf(";",x-1)+1;continue}const d=If(e,i,x),h=Of(e,x,d),f=e.slice(d,h);if(r[f]===void 0){let B=If(e,x+1,l),A=Of(e,l,B);const w=o(e.slice(B,A));r[f]=w}i=l+1}while(i<n);return r}function If(e,t,r){do{const n=e.charCodeAt(t);if(n!==32&&n!==9)return t}while(++t<r);return r}function Of(e,t,r){for(;t>r;){const n=e.charCodeAt(--t);if(n!==32&&n!==9)return t+1}return r}function nC(e,t,r){const n=(r==null?void 0:r.encode)||encodeURIComponent;if(!X6.test(e))throw new TypeError(`argument name is invalid: ${e}`);const o=n(t);if(!K6.test(o))throw new TypeError(`argument val is invalid: ${t}`);let i=e+"="+o;if(!r)return i;if(r.maxAge!==void 0){if(!Number.isInteger(r.maxAge))throw new TypeError(`option maxAge is invalid: ${r.maxAge}`);i+="; Max-Age="+r.maxAge}if(r.domain){if(!Z6.test(r.domain))throw new TypeError(`option domain is invalid: ${r.domain}`);i+="; Domain="+r.domain}if(r.path){if(!J6.test(r.path))throw new TypeError(`option path is invalid: ${r.path}`);i+="; Path="+r.path}if(r.expires){if(!iC(r.expires)||!Number.isFinite(r.expires.valueOf()))throw new TypeError(`option expires is invalid: ${r.expires}`);i+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(i+="; HttpOnly"),r.secure&&(i+="; Secure"),r.partitioned&&(i+="; Partitioned"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():void 0){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${r.priority}`)}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"none":i+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${r.sameSite}`)}return i}function oC(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function iC(e){return eC.call(e)==="[object Date]"}/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lf="popstate";function aC(e={}){function t(n,o){let{pathname:i,search:x,hash:c}=n.location;return Fc("",{pathname:i,search:x,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:ki(o)}return xC(t,r,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _r(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sC(){return Math.random().toString(36).substring(2,10)}function Rf(e,t){return{usr:e.state,key:e.key,idx:t}}function Fc(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?D0(t):t,state:r,key:t&&t.key||n||sC()}}function ki({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function D0(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function xC(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:i=!1}=n,x=o.history,c="POP",l=null,d=h();d==null&&(d=0,x.replaceState({...x.state,idx:d},""));function h(){return(x.state||{idx:null}).idx}function f(){c="POP";let _=h(),m=_==null?null:_-d;d=_,l&&l({action:c,location:b.location,delta:m})}function B(_,m){c="PUSH";let p=Fc(b.location,_,m);d=h()+1;let E=Rf(p,d),C=b.createHref(p);try{x.pushState(E,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(C)}i&&l&&l({action:c,location:b.location,delta:1})}function A(_,m){c="REPLACE";let p=Fc(b.location,_,m);d=h();let E=Rf(p,d),C=b.createHref(p);x.replaceState(E,"",C),i&&l&&l({action:c,location:b.location,delta:0})}function w(_){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof _=="string"?_:ki(_);return p=p.replace(/ $/,"%20"),Me(m,`No window.location.(origin|href) available to create URL for href: ${p}`),new URL(p,m)}let b={get action(){return c},get location(){return e(o,x)},listen(_){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Lf,f),l=_,()=>{o.removeEventListener(Lf,f),l=null}},createHref(_){return t(o,_)},createURL:w,encodeLocation(_){let m=w(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:B,replace:A,go(_){return x.go(_)}};return b}function K9(e,t,r="/"){return lC(e,t,r,!1)}function lC(e,t,r,n){let o=typeof t=="string"?D0(t):t,i=Mn(o.pathname||"/",r);if(i==null)return null;let x=Z9(e);cC(x);let c=null;for(let l=0;c==null&&l<x.length;++l){let d=vC(i);c=CC(x[l],d,n)}return c}function Z9(e,t=[],r=[],n=""){let o=(i,x,c)=>{let l={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:x,route:i};l.relativePath.startsWith("/")&&(Me(l.relativePath.startsWith(n),`Absolute route path "${l.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(n.length));let d=xn([n,l.relativePath]),h=r.concat(l);i.children&&i.children.length>0&&(Me(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Z9(i.children,t,h,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:EC(d,i.index),routesMeta:h})};return e.forEach((i,x)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))o(i,x);else for(let l of J9(i.path))o(i,x,l)}),t}function J9(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let x=J9(n.join("/")),c=[];return c.push(...x.map(l=>l===""?i:[i,l].join("/"))),o&&c.push(...x),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function cC(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:gC(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var dC=/^:[\w-]+$/,uC=3,mC=2,fC=1,pC=10,hC=-2,Mf=e=>e==="*";function EC(e,t){let r=e.split("/"),n=r.length;return r.some(Mf)&&(n+=hC),t&&(n+=mC),r.filter(o=>!Mf(o)).reduce((o,i)=>o+(dC.test(i)?uC:i===""?fC:pC),n)}function gC(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function CC(e,t,r=!1){let{routesMeta:n}=e,o={},i="/",x=[];for(let c=0;c<n.length;++c){let l=n[c],d=c===n.length-1,h=i==="/"?t:t.slice(i.length)||"/",f=ys({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},h),B=l.route;if(!f&&d&&r&&!n[n.length-1].route.index&&(f=ys({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(o,f.params),x.push({params:o,pathname:xn([i,f.pathname]),pathnameBase:wC(xn([i,f.pathnameBase])),route:B}),f.pathnameBase!=="/"&&(i=xn([i,f.pathnameBase]))}return x}function ys(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=BC(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],x=i.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:n.reduce((d,{paramName:h,isOptional:f},B)=>{if(h==="*"){let w=c[B]||"";x=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const A=c[B];return f&&!A?d[h]=void 0:d[h]=(A||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:x,pattern:e}}function BC(e,t=!1,r=!0){_r(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,c,l)=>(n.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function vC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _r(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Mn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function AC(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?D0(e):e;return{pathname:r?r.startsWith("/")?r:yC(r,t):t,search:DC(n),hash:bC(o)}}function yC(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function dl(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FC(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function jd(e){let t=FC(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function Pd(e,t,r,n=!1){let o;typeof e=="string"?o=D0(e):(o={...e},Me(!o.pathname||!o.pathname.includes("?"),dl("?","pathname","search",o)),Me(!o.pathname||!o.pathname.includes("#"),dl("#","pathname","hash",o)),Me(!o.search||!o.search.includes("#"),dl("#","search","hash",o)));let i=e===""||o.pathname==="",x=i?"/":o.pathname,c;if(x==null)c=r;else{let f=t.length-1;if(!n&&x.startsWith("..")){let B=x.split("/");for(;B[0]==="..";)B.shift(),f-=1;o.pathname=B.join("/")}c=f>=0?t[f]:"/"}let l=AC(o,c),d=x&&x!=="/"&&x.endsWith("/"),h=(i||x===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||h)&&(l.pathname+="/"),l}var xn=e=>e.join("/").replace(/\/\/+/g,"/"),wC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),DC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var e8=["POST","PUT","PATCH","DELETE"];new Set(e8);var _C=["GET",...e8];new Set(_C);var b0=v.createContext(null);b0.displayName="DataRouter";var Gs=v.createContext(null);Gs.displayName="DataRouterState";var t8=v.createContext({isTransitioning:!1});t8.displayName="ViewTransition";var jC=v.createContext(new Map);jC.displayName="Fetchers";var PC=v.createContext(null);PC.displayName="Await";var jr=v.createContext(null);jr.displayName="Navigation";var Ii=v.createContext(null);Ii.displayName="Location";var Er=v.createContext({outlet:null,matches:[],isDataRoute:!1});Er.displayName="Route";var Sd=v.createContext(null);Sd.displayName="RouteError";function SC(e,{relative:t}={}){Me(k0(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=v.useContext(jr),{hash:o,pathname:i,search:x}=Oi(e,{relative:t}),c=i;return r!=="/"&&(c=i==="/"?r:xn([r,i])),n.createHref({pathname:c,search:x,hash:o})}function k0(){return v.useContext(Ii)!=null}function Gr(){return Me(k0(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Ii).location}var r8="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function n8(e){v.useContext(jr).static||v.useLayoutEffect(e)}function st(){let{isDataRoute:e}=v.useContext(Er);return e?YC():$C()}function $C(){Me(k0(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(b0),{basename:t,navigator:r}=v.useContext(jr),{matches:n}=v.useContext(Er),{pathname:o}=Gr(),i=JSON.stringify(jd(n)),x=v.useRef(!1);return n8(()=>{x.current=!0}),v.useCallback((l,d={})=>{if(_r(x.current,r8),!x.current)return;if(typeof l=="number"){r.go(l);return}let h=Pd(l,JSON.parse(i),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:xn([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,i,o,e])}var NC=v.createContext(null);function TC(e){let t=v.useContext(Er).outlet;return t&&v.createElement(NC.Provider,{value:e},t)}function pn(){let{matches:e}=v.useContext(Er),t=e[e.length-1];return t?t.params:{}}function Oi(e,{relative:t}={}){let{matches:r}=v.useContext(Er),{pathname:n}=Gr(),o=JSON.stringify(jd(r));return v.useMemo(()=>Pd(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function zC(e,t){return o8(e,t)}function o8(e,t,r,n){var m;Me(k0(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=v.useContext(jr),{matches:i}=v.useContext(Er),x=i[i.length-1],c=x?x.params:{},l=x?x.pathname:"/",d=x?x.pathnameBase:"/",h=x&&x.route;{let p=h&&h.path||"";i8(l,!h||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let f=Gr(),B;if(t){let p=typeof t=="string"?D0(t):t;Me(d==="/"||((m=p.pathname)==null?void 0:m.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${p.pathname}" was given in the \`location\` prop.`),B=p}else B=f;let A=B.pathname||"/",w=A;if(d!=="/"){let p=d.replace(/^\//,"").split("/");w="/"+A.replace(/^\//,"").split("/").slice(p.length).join("/")}let b=K9(e,{pathname:w});_r(h||b!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),_r(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=MC(b&&b.map(p=>Object.assign({},p,{params:Object.assign({},c,p.params),pathname:xn([d,o.encodeLocation?o.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?d:xn([d,o.encodeLocation?o.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),i,r,n);return t&&_?v.createElement(Ii.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},_):_}function IC(){let e=QC(),t=kC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},i={padding:"2px 4px",backgroundColor:n},x=null;return console.error("Error handled by React Router default ErrorBoundary:",e),x=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:i},"ErrorBoundary")," or"," ",v.createElement("code",{style:i},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:o},r):null,x)}var OC=v.createElement(IC,null),LC=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?v.createElement(Er.Provider,{value:this.props.routeContext},v.createElement(Sd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RC({routeContext:e,match:t,children:r}){let n=v.useContext(b0);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(Er.Provider,{value:e},r)}function MC(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let l=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);Me(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,l+1))}let x=!1,c=-1;if(r)for(let l=0;l<o.length;l++){let d=o[l];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=l),d.route.id){let{loaderData:h,errors:f}=r,B=d.route.loader&&!h.hasOwnProperty(d.route.id)&&(!f||f[d.route.id]===void 0);if(d.route.lazy||B){x=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((l,d,h)=>{let f,B=!1,A=null,w=null;r&&(f=i&&d.route.id?i[d.route.id]:void 0,A=d.route.errorElement||OC,x&&(c<0&&h===0?(i8("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,w=null):c===h&&(B=!0,w=d.route.hydrateFallbackElement||null)));let b=t.concat(o.slice(0,h+1)),_=()=>{let m;return f?m=A:B?m=w:d.route.Component?m=v.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=l,v.createElement(RC,{match:d,routeContext:{outlet:l,matches:b,isDataRoute:r!=null},children:m})};return r&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?v.createElement(LC,{location:r.location,revalidation:r.revalidation,component:A,error:f,children:_(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):_()},null)}function $d(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VC(e){let t=v.useContext(b0);return Me(t,$d(e)),t}function HC(e){let t=v.useContext(Gs);return Me(t,$d(e)),t}function UC(e){let t=v.useContext(Er);return Me(t,$d(e)),t}function Nd(e){let t=UC(e),r=t.matches[t.matches.length-1];return Me(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function WC(){return Nd("useRouteId")}function QC(){var n;let e=v.useContext(Sd),t=HC("useRouteError"),r=Nd("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function YC(){let{router:e}=VC("useNavigate"),t=Nd("useNavigate"),r=v.useRef(!1);return n8(()=>{r.current=!0}),v.useCallback(async(o,i={})=>{_r(r.current,r8),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Vf={};function i8(e,t,r){!t&&!Vf[e]&&(Vf[e]=!0,_r(!1,r))}v.memo(GC);function GC({routes:e,future:t,state:r}){return o8(e,void 0,r,t)}function qC({to:e,replace:t,state:r,relative:n}){Me(k0(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=v.useContext(jr);_r(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=v.useContext(Er),{pathname:x}=Gr(),c=st(),l=Pd(e,jd(i),x,n==="path"),d=JSON.stringify(l);return v.useEffect(()=>{c(JSON.parse(d),{replace:t,state:r,relative:n})},[c,d,n,t,r]),null}function XC(e){return TC(e.context)}function He(e){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function KC({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:i=!1}){Me(!k0(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=e.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:x,navigator:o,static:i,future:{}}),[x,o,i]);typeof r=="string"&&(r=D0(r));let{pathname:l="/",search:d="",hash:h="",state:f=null,key:B="default"}=r,A=v.useMemo(()=>{let w=Mn(l,x);return w==null?null:{location:{pathname:w,search:d,hash:h,state:f,key:B},navigationType:n}},[x,l,d,h,f,B,n]);return _r(A!=null,`<Router basename="${x}"> is not able to match the URL "${l}${d}${h}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:v.createElement(jr.Provider,{value:c},v.createElement(Ii.Provider,{children:t,value:A}))}function ZC({children:e,location:t}){return zC(wc(e),t)}function wc(e,t=[]){let r=[];return v.Children.forEach(e,(n,o)=>{if(!v.isValidElement(n))return;let i=[...t,o];if(n.type===v.Fragment){r.push.apply(r,wc(n.props.children,i));return}Me(n.type===He,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!n.props.index||!n.props.children,"An index route cannot have child routes.");let x={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(x.children=wc(n.props.children,i)),r.push(x)}),r}var Qa="get",Ya="application/x-www-form-urlencoded";function qs(e){return e!=null&&typeof e.tagName=="string"}function JC(e){return qs(e)&&e.tagName.toLowerCase()==="button"}function e7(e){return qs(e)&&e.tagName.toLowerCase()==="form"}function t7(e){return qs(e)&&e.tagName.toLowerCase()==="input"}function r7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n7(e,t){return e.button===0&&(!t||t==="_self")&&!r7(e)}var ba=null;function o7(){if(ba===null)try{new FormData(document.createElement("form"),0),ba=!1}catch{ba=!0}return ba}var i7=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ul(e){return e!=null&&!i7.has(e)?(_r(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ya}"`),null):e}function a7(e,t){let r,n,o,i,x;if(e7(e)){let c=e.getAttribute("action");n=c?Mn(c,t):null,r=e.getAttribute("method")||Qa,o=ul(e.getAttribute("enctype"))||Ya,i=new FormData(e)}else if(JC(e)||t7(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||c.getAttribute("action");if(n=l?Mn(l,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||Qa,o=ul(e.getAttribute("formenctype"))||ul(c.getAttribute("enctype"))||Ya,i=new FormData(c,e),!o7()){let{name:d,type:h,value:f}=e;if(h==="image"){let B=d?`${d}.`:"";i.append(`${B}x`,"0"),i.append(`${B}y`,"0")}else d&&i.append(d,f)}}else{if(qs(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Qa,n=null,o=Ya,x=e}return i&&o==="text/plain"&&(x=i,i=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:i,body:x}}function Td(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function s7(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function x7(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function l7(e,t,r){let n=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let x=await s7(i,r);return x.links?x.links():[]}return[]}));return m7(n.flat(1).filter(x7).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Hf(e,t,r,n,o,i){let x=(l,d)=>r[d]?l.route.id!==r[d].route.id:!0,c=(l,d)=>{var h;return r[d].pathname!==l.pathname||((h=r[d].route.path)==null?void 0:h.endsWith("*"))&&r[d].params["*"]!==l.params["*"]};return i==="assets"?t.filter((l,d)=>x(l,d)||c(l,d)):i==="data"?t.filter((l,d)=>{var f;let h=n.routes[l.route.id];if(!h||!h.hasLoader)return!1;if(x(l,d)||c(l,d))return!0;if(l.route.shouldRevalidate){let B=l.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof B=="boolean")return B}return!0}):[]}function c7(e,t){return d7(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let o=[n.module];return n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function d7(e){return[...new Set(e)]}function u7(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function m7(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let i=JSON.stringify(u7(o));return r.has(i)||(r.add(i),n.push({key:i,link:o})),n},[])}function f7(e){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function p7(){let e=v.useContext(b0);return Td(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function h7(){let e=v.useContext(Gs);return Td(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var zd=v.createContext(void 0);zd.displayName="FrameworkContext";function a8(){let e=v.useContext(zd);return Td(e,"You must render this element inside a <HydratedRouter> element"),e}function E7(e,t){let r=v.useContext(zd),[n,o]=v.useState(!1),[i,x]=v.useState(!1),{onFocus:c,onBlur:l,onMouseEnter:d,onMouseLeave:h,onTouchStart:f}=t,B=v.useRef(null);v.useEffect(()=>{if(e==="render"&&x(!0),e==="viewport"){let b=m=>{m.forEach(p=>{x(p.isIntersecting)})},_=new IntersectionObserver(b,{threshold:.5});return B.current&&_.observe(B.current),()=>{_.disconnect()}}},[e]),v.useEffect(()=>{if(n){let b=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(b)}}},[n]);let A=()=>{o(!0)},w=()=>{o(!1),x(!1)};return r?e!=="intent"?[i,B,{}]:[i,B,{onFocus:Y0(c,A),onBlur:Y0(l,w),onMouseEnter:Y0(d,A),onMouseLeave:Y0(h,w),onTouchStart:Y0(f,A)}]:[!1,B,{}]}function Y0(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function g7({page:e,...t}){let{router:r}=p7(),n=v.useMemo(()=>K9(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?v.createElement(B7,{page:e,matches:n,...t}):null}function C7(e){let{manifest:t,routeModules:r}=a8(),[n,o]=v.useState([]);return v.useEffect(()=>{let i=!1;return l7(e,t,r).then(x=>{i||o(x)}),()=>{i=!0}},[e,t,r]),n}function B7({page:e,matches:t,...r}){let n=Gr(),{manifest:o,routeModules:i}=a8(),{loaderData:x,matches:c}=h7(),l=v.useMemo(()=>Hf(e,t,c,o,n,"data"),[e,t,c,o,n]),d=v.useMemo(()=>Hf(e,t,c,o,n,"assets"),[e,t,c,o,n]),h=v.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let A=new Set,w=!1;if(t.forEach(_=>{var p;let m=o.routes[_.route.id];!m||!m.hasLoader||(!l.some(E=>E.route.id===_.route.id)&&_.route.id in x&&((p=i[_.route.id])!=null&&p.shouldRevalidate)||m.hasClientLoader?w=!0:A.add(_.route.id))}),A.size===0)return[];let b=f7(e);return w&&A.size>0&&b.searchParams.set("_routes",t.filter(_=>A.has(_.route.id)).map(_=>_.route.id).join(",")),[b.pathname+b.search]},[x,n,o,l,t,e,i]),f=v.useMemo(()=>c7(d,o),[d,o]),B=C7(d);return v.createElement(v.Fragment,null,h.map(A=>v.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...r})),f.map(A=>v.createElement("link",{key:A,rel:"modulepreload",href:A,...r})),B.map(({key:A,link:w})=>v.createElement("link",{key:A,...w})))}function v7(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var s8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{s8&&(window.__reactRouterVersion="7.1.1")}catch{}function A7({basename:e,children:t,window:r}){let n=v.useRef();n.current==null&&(n.current=aC({window:r,v5Compat:!0}));let o=n.current,[i,x]=v.useState({action:o.action,location:o.location}),c=v.useCallback(l=>{v.startTransition(()=>x(l))},[x]);return v.useLayoutEffect(()=>o.listen(c),[o,c]),v.createElement(KC,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}var x8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_0=v.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:i,replace:x,state:c,target:l,to:d,preventScrollReset:h,viewTransition:f,...B},A){let{basename:w}=v.useContext(jr),b=typeof d=="string"&&x8.test(d),_,m=!1;if(typeof d=="string"&&b&&(_=d,s8))try{let z=new URL(window.location.href),j=d.startsWith("//")?new URL(z.protocol+d):new URL(d),U=Mn(j.pathname,w);j.origin===z.origin&&U!=null?d=U+j.search+j.hash:m=!0}catch{_r(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let p=SC(d,{relative:o}),[E,C,k]=E7(n,B),D=w7(d,{replace:x,state:c,target:l,preventScrollReset:h,relative:o,viewTransition:f});function F(z){t&&t(z),z.defaultPrevented||D(z)}let P=v.createElement("a",{...B,...k,href:_||p,onClick:m||i?t:F,ref:v7(A,C),target:l,"data-discover":!b&&r==="render"?"true":void 0});return E&&!b?v.createElement(v.Fragment,null,P,v.createElement(g7,{page:p})):P});_0.displayName="Link";var Id=v.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:i,to:x,viewTransition:c,children:l,...d},h){let f=Oi(x,{relative:d.relative}),B=Gr(),A=v.useContext(Gs),{navigator:w,basename:b}=v.useContext(jr),_=A!=null&&j7(f)&&c===!0,m=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,p=B.pathname,E=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;r||(p=p.toLowerCase(),E=E?E.toLowerCase():null,m=m.toLowerCase()),E&&b&&(E=Mn(E,b)||E);const C=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let k=p===m||!o&&p.startsWith(m)&&p.charAt(C)==="/",D=E!=null&&(E===m||!o&&E.startsWith(m)&&E.charAt(m.length)==="/"),F={isActive:k,isPending:D,isTransitioning:_},P=k?t:void 0,z;typeof n=="function"?z=n(F):z=[n,k?"active":null,D?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let j=typeof i=="function"?i(F):i;return v.createElement(_0,{...d,"aria-current":P,className:z,ref:h,style:j,to:x,viewTransition:c},typeof l=="function"?l(F):l)});Id.displayName="NavLink";var y7=v.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:i,method:x=Qa,action:c,onSubmit:l,relative:d,preventScrollReset:h,viewTransition:f,...B},A)=>{let w=k7(),b=_7(c,{relative:d}),_=x.toLowerCase()==="get"?"get":"post",m=typeof c=="string"&&x8.test(c),p=E=>{if(l&&l(E),E.defaultPrevented)return;E.preventDefault();let C=E.nativeEvent.submitter,k=(C==null?void 0:C.getAttribute("formmethod"))||x;w(C||E.currentTarget,{fetcherKey:t,method:k,navigate:r,replace:o,state:i,relative:d,preventScrollReset:h,viewTransition:f})};return v.createElement("form",{ref:A,method:_,action:b,onSubmit:n?l:p,...B,"data-discover":!m&&e==="render"?"true":void 0})});y7.displayName="Form";function F7(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l8(e){let t=v.useContext(b0);return Me(t,F7(e)),t}function w7(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:i,viewTransition:x}={}){let c=st(),l=Gr(),d=Oi(e,{relative:i});return v.useCallback(h=>{if(n7(h,t)){h.preventDefault();let f=r!==void 0?r:ki(l)===ki(d);c(e,{replace:f,state:n,preventScrollReset:o,relative:i,viewTransition:x})}},[l,c,d,r,n,t,e,o,i,x])}var D7=0,b7=()=>`__${String(++D7)}__`;function k7(){let{router:e}=l8("useSubmit"),{basename:t}=v.useContext(jr),r=WC();return v.useCallback(async(n,o={})=>{let{action:i,method:x,encType:c,formData:l,body:d}=a7(n,t);if(o.navigate===!1){let h=o.fetcherKey||b7();await e.fetch(h,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:d,formMethod:o.method||x,formEncType:o.encType||c,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:d,formMethod:o.method||x,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function _7(e,{relative:t}={}){let{basename:r}=v.useContext(jr),n=v.useContext(Er);Me(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),i={...Oi(e||".",{relative:t})},x=Gr();if(e==null){i.search=x.search;let c=new URLSearchParams(i.search),l=c.getAll("index");if(l.some(h=>h==="")){c.delete("index"),l.filter(f=>f).forEach(f=>c.append("index",f));let h=c.toString();i.search=h?`?${h}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:xn([r,i.pathname])),ki(i)}function j7(e,t={}){let r=v.useContext(t8);Me(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=l8("useViewTransitionState"),o=Oi(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=Mn(r.currentLocation.pathname,n)||r.currentLocation.pathname,x=Mn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return ys(o.pathname,x)!=null||ys(o.pathname,i)!=null}new TextEncoder;var Nt=function(){return Nt=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Nt.apply(this,arguments)};function Fs(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var ze="-ms-",li="-moz-",Be="-webkit-",c8="comm",Xs="rule",Od="decl",P7="@import",d8="@keyframes",S7="@layer",u8=Math.abs,Ld=String.fromCharCode,Dc=Object.assign;function $7(e,t){return ct(e,0)^45?(((t<<2^ct(e,0))<<2^ct(e,1))<<2^ct(e,2))<<2^ct(e,3):0}function m8(e){return e.trim()}function rn(e,t){return(e=t.exec(e))?e[0]:e}function ue(e,t,r){return e.replace(t,r)}function Ga(e,t,r){return e.indexOf(t,r)}function ct(e,t){return e.charCodeAt(t)|0}function h0(e,t,r){return e.slice(t,r)}function Hr(e){return e.length}function f8(e){return e.length}function J0(e,t){return t.push(e),e}function N7(e,t){return e.map(t).join("")}function Uf(e,t){return e.filter(function(r){return!rn(r,t)})}var Ks=1,E0=1,p8=0,hr=0,rt=0,j0="";function Zs(e,t,r,n,o,i,x,c){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ks,column:E0,length:x,return:"",siblings:c}}function Fn(e,t){return Dc(Zs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mo(e){for(;e.root;)e=Fn(e.root,{children:[e]});J0(e,e.siblings)}function T7(){return rt}function z7(){return rt=hr>0?ct(j0,--hr):0,E0--,rt===10&&(E0=1,Ks--),rt}function br(){return rt=hr<p8?ct(j0,hr++):0,E0++,rt===10&&(E0=1,Ks++),rt}function fo(){return ct(j0,hr)}function qa(){return hr}function Js(e,t){return h0(j0,e,t)}function bc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I7(e){return Ks=E0=1,p8=Hr(j0=e),hr=0,[]}function O7(e){return j0="",e}function ml(e){return m8(Js(hr-1,kc(e===91?e+2:e===40?e+1:e)))}function L7(e){for(;(rt=fo())&&rt<33;)br();return bc(e)>2||bc(rt)>3?"":" "}function R7(e,t){for(;--t&&br()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Js(e,qa()+(t<6&&fo()==32&&br()==32))}function kc(e){for(;br();)switch(rt){case e:return hr;case 34:case 39:e!==34&&e!==39&&kc(rt);break;case 40:e===41&&kc(e);break;case 92:br();break}return hr}function M7(e,t){for(;br()&&e+rt!==57;)if(e+rt===84&&fo()===47)break;return"/*"+Js(t,hr-1)+"*"+Ld(e===47?e:br())}function V7(e){for(;!bc(fo());)br();return Js(e,hr)}function H7(e){return O7(Xa("",null,null,null,[""],e=I7(e),0,[0],e))}function Xa(e,t,r,n,o,i,x,c,l){for(var d=0,h=0,f=x,B=0,A=0,w=0,b=1,_=1,m=1,p=0,E="",C=o,k=i,D=n,F=E;_;)switch(w=p,p=br()){case 40:if(w!=108&&ct(F,f-1)==58){Ga(F+=ue(ml(p),"&","&\f"),"&\f",u8(d?c[d-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:F+=ml(p);break;case 9:case 10:case 13:case 32:F+=L7(w);break;case 92:F+=R7(qa()-1,7);continue;case 47:switch(fo()){case 42:case 47:J0(U7(M7(br(),qa()),t,r,l),l);break;default:F+="/"}break;case 123*b:c[d++]=Hr(F)*m;case 125*b:case 59:case 0:switch(p){case 0:case 125:_=0;case 59+h:m==-1&&(F=ue(F,/\f/g,"")),A>0&&Hr(F)-f&&J0(A>32?Qf(F+";",n,r,f-1,l):Qf(ue(F," ","")+";",n,r,f-2,l),l);break;case 59:F+=";";default:if(J0(D=Wf(F,t,r,d,h,o,c,E,C=[],k=[],f,i),i),p===123)if(h===0)Xa(F,t,D,D,C,i,f,c,k);else switch(B===99&&ct(F,3)===110?100:B){case 100:case 108:case 109:case 115:Xa(e,D,D,n&&J0(Wf(e,D,D,0,0,o,c,E,o,C=[],f,k),k),o,k,f,c,n?C:k);break;default:Xa(F,D,D,D,[""],k,0,c,k)}}d=h=A=0,b=m=1,E=F="",f=x;break;case 58:f=1+Hr(F),A=w;default:if(b<1){if(p==123)--b;else if(p==125&&b++==0&&z7()==125)continue}switch(F+=Ld(p),p*b){case 38:m=h>0?1:(F+="\f",-1);break;case 44:c[d++]=(Hr(F)-1)*m,m=1;break;case 64:fo()===45&&(F+=ml(br())),B=fo(),h=f=Hr(E=F+=V7(qa())),p++;break;case 45:w===45&&Hr(F)==2&&(b=0)}}return i}function Wf(e,t,r,n,o,i,x,c,l,d,h,f){for(var B=o-1,A=o===0?i:[""],w=f8(A),b=0,_=0,m=0;b<n;++b)for(var p=0,E=h0(e,B+1,B=u8(_=x[b])),C=e;p<w;++p)(C=m8(_>0?A[p]+" "+E:ue(E,/&\f/g,A[p])))&&(l[m++]=C);return Zs(e,t,r,o===0?Xs:c,l,d,h,f)}function U7(e,t,r,n){return Zs(e,t,r,c8,Ld(T7()),h0(e,2,-2),0,n)}function Qf(e,t,r,n,o){return Zs(e,t,r,Od,h0(e,0,n),h0(e,n+1,-1),n,o)}function h8(e,t,r){switch($7(e,t)){case 5103:return Be+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Be+e+e;case 4789:return li+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Be+e+li+e+ze+e+e;case 5936:switch(ct(e,t+11)){case 114:return Be+e+ze+ue(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Be+e+ze+ue(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Be+e+ze+ue(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Be+e+ze+e+e;case 6165:return Be+e+ze+"flex-"+e+e;case 5187:return Be+e+ue(e,/(\w+).+(:[^]+)/,Be+"box-$1$2"+ze+"flex-$1$2")+e;case 5443:return Be+e+ze+"flex-item-"+ue(e,/flex-|-self/g,"")+(rn(e,/flex-|baseline/)?"":ze+"grid-row-"+ue(e,/flex-|-self/g,""))+e;case 4675:return Be+e+ze+"flex-line-pack"+ue(e,/align-content|flex-|-self/g,"")+e;case 5548:return Be+e+ze+ue(e,"shrink","negative")+e;case 5292:return Be+e+ze+ue(e,"basis","preferred-size")+e;case 6060:return Be+"box-"+ue(e,"-grow","")+Be+e+ze+ue(e,"grow","positive")+e;case 4554:return Be+ue(e,/([^-])(transform)/g,"$1"+Be+"$2")+e;case 6187:return ue(ue(ue(e,/(zoom-|grab)/,Be+"$1"),/(image-set)/,Be+"$1"),e,"")+e;case 5495:case 3959:return ue(e,/(image-set\([^]*)/,Be+"$1$`$1");case 4968:return ue(ue(e,/(.+:)(flex-)?(.*)/,Be+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Be+e+e;case 4200:if(!rn(e,/flex-|baseline/))return ze+"grid-column-align"+h0(e,t)+e;break;case 2592:case 3360:return ze+ue(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,rn(n.props,/grid-\w+-end/)})?~Ga(e+(r=r[t].value),"span",0)?e:ze+ue(e,"-start","")+e+ze+"grid-row-span:"+(~Ga(r,"span",0)?rn(r,/\d+/):+rn(r,/\d+/)-+rn(e,/\d+/))+";":ze+ue(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return rn(n.props,/grid-\w+-start/)})?e:ze+ue(ue(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ue(e,/(.+)-inline(.+)/,Be+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hr(e)-1-t>6)switch(ct(e,t+1)){case 109:if(ct(e,t+4)!==45)break;case 102:return ue(e,/(.+:)(.+)-([^]+)/,"$1"+Be+"$2-$3$1"+li+(ct(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ga(e,"stretch",0)?h8(ue(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return ue(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,x,c,l,d){return ze+o+":"+i+d+(x?ze+o+"-span:"+(c?l:+l-+i)+d:"")+e});case 4949:if(ct(e,t+6)===121)return ue(e,":",":"+Be)+e;break;case 6444:switch(ct(e,ct(e,14)===45?18:11)){case 120:return ue(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Be+(ct(e,14)===45?"inline-":"")+"box$3$1"+Be+"$2$3$1"+ze+"$2box$3")+e;case 100:return ue(e,":",":"+ze)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(e,"scroll-","scroll-snap-")+e}return e}function ws(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function W7(e,t,r,n){switch(e.type){case S7:if(e.children.length)break;case P7:case Od:return e.return=e.return||e.value;case c8:return"";case d8:return e.return=e.value+"{"+ws(e.children,n)+"}";case Xs:if(!Hr(e.value=e.props.join(",")))return""}return Hr(r=ws(e.children,n))?e.return=e.value+"{"+r+"}":""}function Q7(e){var t=f8(e);return function(r,n,o,i){for(var x="",c=0;c<t;c++)x+=e[c](r,n,o,i)||"";return x}}function Y7(e){return function(t){t.root||(t=t.return)&&e(t)}}function G7(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Od:e.return=h8(e.value,e.length,r);return;case d8:return ws([Fn(e,{value:ue(e.value,"@","@"+Be)})],n);case Xs:if(e.length)return N7(r=e.props,function(o){switch(rn(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mo(Fn(e,{props:[ue(o,/:(read-\w+)/,":"+li+"$1")]})),Mo(Fn(e,{props:[o]})),Dc(e,{props:Uf(r,n)});break;case"::placeholder":Mo(Fn(e,{props:[ue(o,/:(plac\w+)/,":"+Be+"input-$1")]})),Mo(Fn(e,{props:[ue(o,/:(plac\w+)/,":"+li+"$1")]})),Mo(Fn(e,{props:[ue(o,/:(plac\w+)/,ze+"input-$1")]})),Mo(Fn(e,{props:[o]})),Dc(e,{props:Uf(r,n)});break}return""})}}var q7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},g0=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",E8="active",g8="data-styled-version",ex="6.1.14",Rd=`/*!sc*/
`,Ds=typeof window<"u"&&"HTMLElement"in window,X7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),tx=Object.freeze([]),C0=Object.freeze({});function K7(e,t,r){return r===void 0&&(r=C0),e.theme!==r.theme&&e.theme||t||r.theme}var C8=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Z7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J7=/(^-|-$)/g;function Yf(e){return e.replace(Z7,"-").replace(J7,"")}var e4=/(a)(d)/gi,ka=52,Gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function _c(e){var t,r="";for(t=Math.abs(e);t>ka;t=t/ka|0)r=Gf(t%ka)+r;return(Gf(t%ka)+r).replace(e4,"$1-$2")}var fl,B8=5381,t0=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},v8=function(e){return t0(B8,e)};function t4(e){return _c(v8(e)>>>0)}function r4(e){return e.displayName||e.name||"Component"}function pl(e){return typeof e=="string"&&!0}var A8=typeof Symbol=="function"&&Symbol.for,y8=A8?Symbol.for("react.memo"):60115,n4=A8?Symbol.for("react.forward_ref"):60112,o4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F8={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a4=((fl={})[n4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fl[y8]=F8,fl);function qf(e){return("type"in(t=e)&&t.type.$$typeof)===y8?F8:"$$typeof"in e?a4[e.$$typeof]:o4;var t}var s4=Object.defineProperty,x4=Object.getOwnPropertyNames,Xf=Object.getOwnPropertySymbols,l4=Object.getOwnPropertyDescriptor,c4=Object.getPrototypeOf,Kf=Object.prototype;function w8(e,t,r){if(typeof t!="string"){if(Kf){var n=c4(t);n&&n!==Kf&&w8(e,n,r)}var o=x4(t);Xf&&(o=o.concat(Xf(t)));for(var i=qf(e),x=qf(t),c=0;c<o.length;++c){var l=o[c];if(!(l in i4||r&&r[l]||x&&l in x||i&&l in i)){var d=l4(t,l);try{s4(e,l,d)}catch{}}}}return e}function B0(e){return typeof e=="function"}function Md(e){return typeof e=="object"&&"styledComponentId"in e}function co(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zf(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function _i(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function jc(e,t,r){if(r===void 0&&(r=!1),!r&&!_i(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=jc(e[n],t[n]);else if(_i(t))for(var n in t)e[n]=jc(e[n],t[n]);return e}function Vd(e,t){Object.defineProperty(e,"toString",{value:t})}function Li(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var d4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Li(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var x=o;x<i;x++)this.groupSizes[x]=0}for(var c=this.indexOfGroup(t+1),l=(x=0,r.length);x<l;x++)this.tag.insertRule(c,r[x])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,x=o;x<i;x++)r+="".concat(this.tag.getRule(x)).concat(Rd);return r},e}(),Ka=new Map,bs=new Map,Za=1,_a=function(e){if(Ka.has(e))return Ka.get(e);for(;bs.has(Za);)Za++;var t=Za++;return Ka.set(e,t),bs.set(t,e),t},u4=function(e,t){Za=t+1,Ka.set(e,t),bs.set(t,e)},m4="style[".concat(g0,"][").concat(g8,'="').concat(ex,'"]'),f4=new RegExp("^".concat(g0,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),p4=function(e,t,r){for(var n,o=r.split(","),i=0,x=o.length;i<x;i++)(n=o[i])&&e.registerName(t,n)},h4=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Rd),o=[],i=0,x=n.length;i<x;i++){var c=n[i].trim();if(c){var l=c.match(f4);if(l){var d=0|parseInt(l[1],10),h=l[2];d!==0&&(u4(h,d),p4(e,h,l[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(c)}}},Jf=function(e){for(var t=document.querySelectorAll(m4),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(g0)!==E8&&(h4(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function E4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var D8=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(c){var l=Array.from(c.querySelectorAll("style[".concat(g0,"]")));return l[l.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(g0,E8),n.setAttribute(g8,ex);var x=E4();return x&&n.setAttribute("nonce",x),r.insertBefore(n,i),n},g4=function(){function e(t){this.element=D8(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var x=n[o];if(x.ownerNode===r)return x}throw Li(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),C4=function(){function e(t){this.element=D8(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),B4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ep=Ds,v4={isServer:!Ds,useCSSOMInjection:!X7},b8=function(){function e(t,r,n){t===void 0&&(t=C0),r===void 0&&(r={});var o=this;this.options=Nt(Nt({},v4),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Ds&&ep&&(ep=!1,Jf(this)),Vd(this,function(){return function(i){for(var x=i.getTag(),c=x.length,l="",d=function(f){var B=function(m){return bs.get(m)}(f);if(B===void 0)return"continue";var A=i.names.get(B),w=x.getGroup(f);if(A===void 0||!A.size||w.length===0)return"continue";var b="".concat(g0,".g").concat(f,'[id="').concat(B,'"]'),_="";A!==void 0&&A.forEach(function(m){m.length>0&&(_+="".concat(m,","))}),l+="".concat(w).concat(b,'{content:"').concat(_,'"}').concat(Rd)},h=0;h<c;h++)d(h);return l}(o)})}return e.registerId=function(t){return _a(t)},e.prototype.rehydrate=function(){!this.server&&Ds&&Jf(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Nt(Nt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new B4(o):n?new g4(o):new C4(o)}(this.options),new d4(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(_a(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(_a(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_a(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),A4=/&/g,y4=/^\s*\/\/.*$/gm;function k8(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=k8(r.children,t)),r})}function F4(e){var t,r,n,o=C0,i=o.options,x=i===void 0?C0:i,c=o.plugins,l=c===void 0?tx:c,d=function(B,A,w){return w.startsWith(r)&&w.endsWith(r)&&w.replaceAll(r,"").length>0?".".concat(t):B},h=l.slice();h.push(function(B){B.type===Xs&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(A4,r).replace(n,d))}),x.prefix&&h.push(G7),h.push(W7);var f=function(B,A,w,b){A===void 0&&(A=""),w===void 0&&(w=""),b===void 0&&(b="&"),t=b,r=A,n=new RegExp("\\".concat(r,"\\b"),"g");var _=B.replace(y4,""),m=H7(w||A?"".concat(w," ").concat(A," { ").concat(_," }"):_);x.namespace&&(m=k8(m,x.namespace));var p=[];return ws(m,Q7(h.concat(Y7(function(E){return p.push(E)})))),p};return f.hash=l.length?l.reduce(function(B,A){return A.name||Li(15),t0(B,A.name)},B8).toString():"",f}var w4=new b8,Pc=F4(),_8=ci.createContext({shouldForwardProp:void 0,styleSheet:w4,stylis:Pc});_8.Consumer;ci.createContext(void 0);function tp(){return v.useContext(_8)}var D4=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Pc);var x=n.name+i.hash;o.hasNameForId(n.id,x)||o.insertRules(n.id,x,i(n.rules,x,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Vd(this,function(){throw Li(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pc),this.name+t.hash},e}(),b4=function(e){return e>="A"&&e<="Z"};function rp(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;b4(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var j8=function(e){return e==null||e===!1||e===""},P8=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!j8(i)&&(Array.isArray(i)&&i.isCss||B0(i)?n.push("".concat(rp(o),":"),i,";"):_i(i)?n.push.apply(n,Fs(Fs(["".concat(o," {")],P8(i),!1),["}"],!1)):n.push("".concat(rp(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in q7||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function po(e,t,r,n){if(j8(e))return[];if(Md(e))return[".".concat(e.styledComponentId)];if(B0(e)){if(!B0(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return po(o,t,r,n)}var i;return e instanceof D4?r?(e.inject(r,n),[e.getName(n)]):[e]:_i(e)?P8(e):Array.isArray(e)?Array.prototype.concat.apply(tx,e.map(function(x){return po(x,t,r,n)})):[e.toString()]}function k4(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(B0(r)&&!Md(r))return!1}return!0}var _4=v8(ex),j4=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&k4(t),this.componentId=r,this.baseHash=t0(_4,r),this.baseStyle=n,b8.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=co(o,this.staticRulesId);else{var i=Zf(po(this.rules,t,r,n)),x=_c(t0(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,x)){var c=n(i,".".concat(x),void 0,this.componentId);r.insertRules(this.componentId,x,c)}o=co(o,x),this.staticRulesId=x}else{for(var l=t0(this.baseHash,n.hash),d="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")d+=f;else if(f){var B=Zf(po(f,t,r,n));l=t0(l,B+h),d+=B}}if(d){var A=_c(l>>>0);r.hasNameForId(this.componentId,A)||r.insertRules(this.componentId,A,n(d,".".concat(A),void 0,this.componentId)),o=co(o,A)}}return o},e}(),S8=ci.createContext(void 0);S8.Consumer;var hl={};function P4(e,t,r){var n=Md(e),o=e,i=!pl(e),x=t.attrs,c=x===void 0?tx:x,l=t.componentId,d=l===void 0?function(C,k){var D=typeof C!="string"?"sc":Yf(C);hl[D]=(hl[D]||0)+1;var F="".concat(D,"-").concat(t4(ex+D+hl[D]));return k?"".concat(k,"-").concat(F):F}(t.displayName,t.parentComponentId):l,h=t.displayName,f=h===void 0?function(C){return pl(C)?"styled.".concat(C):"Styled(".concat(r4(C),")")}(e):h,B=t.displayName&&t.componentId?"".concat(Yf(t.displayName),"-").concat(t.componentId):t.componentId||d,A=n&&o.attrs?o.attrs.concat(c).filter(Boolean):c,w=t.shouldForwardProp;if(n&&o.shouldForwardProp){var b=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;w=function(C,k){return b(C,k)&&_(C,k)}}else w=b}var m=new j4(r,B,n?o.componentStyle:void 0);function p(C,k){return function(D,F,P){var z=D.attrs,j=D.componentStyle,U=D.defaultProps,L=D.foldedComponentIds,T=D.styledComponentId,H=D.target,O=ci.useContext(S8),I=tp(),R=D.shouldForwardProp||I.shouldForwardProp,N=K7(F,O,U)||C0,W=function(tt,ce,ge){for(var ne,Ve=Nt(Nt({},ce),{className:void 0,theme:ge}),hn=0;hn<tt.length;hn+=1){var Ot=B0(ne=tt[hn])?ne(Ve):ne;for(var er in Ot)Ve[er]=er==="className"?co(Ve[er],Ot[er]):er==="style"?Nt(Nt({},Ve[er]),Ot[er]):Ot[er]}return ce.className&&(Ve.className=co(Ve.className,ce.className)),Ve}(z,F,N),S=W.as||H,Y={};for(var q in W)W[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&W.theme===N||(q==="forwardedAs"?Y.as=W.forwardedAs:R&&!R(q,S)||(Y[q]=W[q]));var ae=function(tt,ce){var ge=tp(),ne=tt.generateAndInjectStyles(ce,ge.styleSheet,ge.stylis);return ne}(j,W),J=co(L,T);return ae&&(J+=" "+ae),W.className&&(J+=" "+W.className),Y[pl(S)&&!C8.has(S)?"class":"className"]=J,P&&(Y.ref=P),v.createElement(S,Y)}(E,C,k)}p.displayName=f;var E=ci.forwardRef(p);return E.attrs=A,E.componentStyle=m,E.displayName=f,E.shouldForwardProp=w,E.foldedComponentIds=n?co(o.foldedComponentIds,o.styledComponentId):"",E.styledComponentId=B,E.target=n?o.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(k){for(var D=[],F=1;F<arguments.length;F++)D[F-1]=arguments[F];for(var P=0,z=D;P<z.length;P++)jc(k,z[P],!0);return k}({},o.defaultProps,C):C}}),Vd(E,function(){return".".concat(E.styledComponentId)}),i&&w8(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function np(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var op=function(e){return Object.assign(e,{isCss:!0})};function S4(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(B0(e)||_i(e))return op(po(np(tx,Fs([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?po(n):op(po(np(n,t)))}function Sc(e,t,r){if(r===void 0&&(r=C0),!t)throw Li(1,t);var n=function(o){for(var i=[],x=1;x<arguments.length;x++)i[x-1]=arguments[x];return e(t,r,S4.apply(void 0,Fs([o],i,!1)))};return n.attrs=function(o){return Sc(e,t,Nt(Nt({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Sc(e,t,Nt(Nt({},r),o))},n}var $8=function(e){return Sc(P4,e)},$=$8;C8.forEach(function(e){$[e]=$8(e)});const $4="/assets/Colmenares_del_eje_logo-BjxGKZYJ.png",N4=$.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f9d77e;
    padding: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 110px;
    border-radius: 0 0 12px 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
    }

    @media (min-width: 800px) and (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0.75rem 2rem;
        height: 90px;
    }

    @media (min-width: 900px) and (max-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 3rem;
        height: 100px;
        align-items: center;
    }
`,T4=$.h1`
    margin: 0;
    color: #4e342e;
    font-size: 2.3rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 2rem;
        margin-right: 2rem;
    }

    @media (min-width: 900px) and (max-width: 1000px) {
        font-size: 2.2rem;
        margin-right: 3rem;
        flex-grow: 1;
        text-align: center;
    }
`,z4=$.img`
    height: 50px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 768px) {
        position: static;
        transform: none;
        margin-bottom: 10px;
    }

    @media (min-width: 800px) and (max-width: 900px) {
        position: static;
        transform: none;
        height: 45px;
        margin-left: 2rem;
    }

    @media (min-width: 900px) and (max-width: 1000px) {
        position: static;
        transform: none;
        height: 55px;
        margin-left: 3rem;
    }
`;function Ri(){return a.jsxs(N4,{children:[a.jsx(z4,{src:$4,alt:"Logo"}),a.jsx(T4,{children:"Colmenares del Eje"})]})}const I4=$.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.75rem;
    border-radius: 12px 12px 0 0;
    height: 90px;
    margin-top: auto;
`;function pt(){return a.jsxs(I4,{children:[a.jsx("h2",{children:"Colmenares del Eje"}),a.jsx("p",{children:"@2025 Todos los derechos reservados"})]})}const Ke={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},O4=$.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;

    @media (min-width: ${Ke.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`,L4=$.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1rem;
    background-image: url("src/img/fondo(1).svg");
    background-size: cover;
    background-position: center;

    @media (max-width: ${Ke.tablet}) {
        padding: 0.5rem;
    }

    @media (min-width: ${Ke.large}) {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`,R4=$.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 2.5rem;
    width: 100%;
    max-width: 400px;
    border: 1px solid grey;
    height: 250px;

    @media (max-width: ${Ke.mobile}) {
        padding: 1rem;
        max-width: 90%;
    }

    @media (min-width: ${Ke.large}) {
        max-width: 32rem;
        padding: 3rem;
        height: 20rem;
    }

    @media (min-width: ${Ke.xlarge}) {
        max-width: 38rem;
        padding: 3.5rem;
        height: 22rem;
    }
`,M4=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,ip=$.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: rgb(243, 243, 242);
    color: #4e342e;
    font-size: 0.9rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #ffb300;
    }

    @media (min-width: ${Ke.large}) {
        font-size: 1rem;
        padding: 0.75rem;
    }
`,V4=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 0.5rem;

    &:hover {
        background-color: #f79d60;
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }

    @media (min-width: ${Ke.large}) {
        font-size: 1rem;
        padding: 0.75rem;
    }
`,H4=$(_0)`
    text-decoration: none;
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 0.9rem;
    margin-top: 0.5rem;

    &:hover {
        color: #f79d60;
    }

    @media (min-width: ${Ke.large}) {
        font-size: 1rem;
    }
`,U4=$.p`
    color: red;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (min-width: ${Ke.large}) {
        font-size: 0.9rem;
    }
`,ap=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,sp=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${Ke.mobile}) {
        padding: 1.5rem;
    }

    @media (min-width: ${Ke.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }

    @media (min-width: ${Ke.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`,W4=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${Ke.large}) {
        width: 90px;
        height: 90px;
        &::after {
            font-size: 45px;
        }
    }
`,Q4=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #ff6b6b;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✕';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${Ke.large}) {
        width: 90px;
        height: 90px;
        &::after {
            font-size: 45px;
        }
    }
`,El=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${Ke.mobile}) {
        font-size: 20px;
    }

    @media (min-width: ${Ke.large}) {
        font-size: clamp(24px, 2.5vw, 28px); 
    }
`,xp=$.p`
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;

    @media (min-width: ${Ke.large}) {
        font-size: 18px;
    }
`,lp=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    @media (min-width: ${Ke.large}) {
        font-size: 18px;
        padding: 12px 35px;
    }
`,Y4=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,G4=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${Ke.mobile}) {
        padding: 1.5rem;
    }

    @media (min-width: ${Ke.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
`,q4=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #3498db;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: 'i';
        font-size: 40px;
        font-weight: bold;
        color: white;
    }

    @media (min-width: ${Ke.large}) {
        width: 90px;
        height: 90px;
        &::after {
            font-size: 45px;
        }
    }
`,X4=()=>{const[e,t]=v.useState(""),[r,n]=v.useState(""),[o,i]=v.useState(""),[x,c]=v.useState(!1),l=st(),[d,h]=v.useState(!1),[f,B]=v.useState(!1),[A,w]=v.useState(""),[b,_]=v.useState(!1);v.useEffect(()=>{(async()=>{try{const E=await fetch("https://colmenaresdeleje.onrender.com/users/register_permision/",{method:"GET",headers:{"Content-Type":"application/json"}}),C=await E.json();E.ok&&C.message==="Register"&&(_(!0),setTimeout(()=>{l("/First_Registration")},3e3))}catch(E){console.error("Error al verificar usuarios:",E),i("Error de conexión al servidor. Por favor, intente nuevamente.")}})()},[l]);const m=async p=>{p.preventDefault(),c(!0),i("");try{const E=await fetch("https://colmenaresdeleje.onrender.com/users/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r})}),C=await E.json();if(C.state==="Deactivate"){w("Tu cuenta no se encuentra habilitada. Por favor, contacta al administrador."),B(!0),c(!1);return}if(E.status===403){w("Tu cuenta no se encuentra habilitada. Por favor, contacta al administrador."),B(!0),c(!1);return}if(E.ok){if(!C.accessToken||!C.refreshToken)throw new Error("Tokens no recibidos correctamente.");document.cookie="token="+C.accessToken+"; path=/",document.cookie="username="+C.username+"; path=/",document.cookie="role="+C.role+"; path=/",document.cookie="id_User="+C.id_User+"; path=/",document.cookie="refreshToken="+C.refreshToken+"; path=/",h(!0),setTimeout(()=>{C.role==="admin"?l("/ViewApicultor"):C.role==="beekeeper"&&l("/Dashboard")},2e3)}else C.message&&(C.message.includes("desactivada")||C.message.includes("disabled")||C.message.includes("deactivated")||C.message.includes("no habilitada"))?(w("Tu cuenta no se encuentra habilitada. Por favor, contacta al administrador."),B(!0)):i(C.message||"Error al iniciar sesión")}catch(E){i(E.message||"Error de conexión. Por favor, intente nuevamente."),console.error("Error durante el inicio de sesión:",E)}finally{c(!1)}};return a.jsxs(O4,{children:[a.jsx(Ri,{}),a.jsx(L4,{children:a.jsx(R4,{children:a.jsxs(M4,{onSubmit:m,children:[a.jsx(ip,{type:"text",placeholder:"Usuario",value:e,onChange:p=>t(p.target.value),required:!0}),a.jsx(ip,{type:"password",placeholder:"Contraseña",value:r,onChange:p=>n(p.target.value),required:!0}),o&&a.jsx(U4,{children:o}),a.jsx(V4,{type:"submit",disabled:x,children:x?"Cargando...":"Iniciar Sesión"}),a.jsx(H4,{to:"/RecuperarContraseña",children:"¿Olvidaste tu contraseña?"})]})})}),a.jsx(pt,{}),a.jsx(ap,{isVisible:d,children:a.jsxs(sp,{isVisible:d,children:[a.jsx(W4,{}),a.jsx(El,{children:"Inicio de sesión exitoso"}),a.jsx(lp,{onClick:()=>h(!1),children:"Aceptar"})]})}),a.jsx(ap,{isVisible:f,children:a.jsxs(sp,{isVisible:f,children:[a.jsx(Q4,{}),a.jsx(El,{children:"Cuenta no habilitada"}),a.jsx(xp,{children:A}),a.jsx(lp,{onClick:()=>B(!1),children:"Entendido"})]})}),a.jsx(Y4,{isVisible:b,children:a.jsxs(G4,{isVisible:b,children:[a.jsx(q4,{}),a.jsx(El,{children:"No hay usuarios registrados"}),a.jsx(xp,{children:"Serás redirigido a la página de registro del primer usuario administrador..."})]})})]})};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N8=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:o="",children:i,iconNode:x,...c},l)=>v.createElement("svg",{ref:l,...Z4,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:N8("lucide",o),...c},[...x.map(([d,h])=>v.createElement(d,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=(e,t)=>{const r=v.forwardRef(({className:n,...o},i)=>v.createElement(J4,{ref:i,iconNode:t,className:N8(`lucide-${K4(e)}`,n),...o}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ks=Mi("EyeOff",e2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],v0=Mi("Eye",t2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],cp=Mi("LogOut",r2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],o2=Mi("PersonStanding",n2);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],a2=Mi("X",i2),kt={mobile:"320px",tablet:"768px",desktop:"1024px",largeDesktop:"1080px"},s2=$.div`
  position: relative;
  padding-top: ${e=>e.$headerHeight}px;

  @media (min-width: ${kt.tablet}) {
    padding-top: ${e=>e.$headerHeight}px;
  }
  
  @media (min-width: ${kt.desktop}) {
    padding-top: ${e=>e.$headerHeight}px;
  }
`,x2=$.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9d77e;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  
  @media (min-width: ${kt.tablet}) {
    padding: 0.5rem 1.5rem;
  }
  
  @media (min-width: ${kt.desktop}) {
    padding: 0.5rem 2rem;
  }
`,l2=$.div`
  display: flex;
  align-items: center;
  
  img {
    height: 25px;
    
    @media (min-width: ${kt.tablet}) {
      height: 30px;
    }
    
    @media (min-width: ${kt.desktop}) {
      height: 35px;
    }
  }
`,c2=$.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  
  @media (min-width: ${kt.tablet}) {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
  }
`,d2=$.div`
  display: ${e=>e.$isOpen?"flex":"none"};
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  align-items: center;
  background: #f9d77e;
  padding: 0.3rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  
  @media (min-width: ${kt.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0;
    background: none;
    position: static;
  }
  
  @media (min-width: ${kt.desktop}) {
    gap: 1rem;
  }
`,G0=$(Id)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #5d4037;
  font-weight: 500;
  padding: 4px 8px;
  font-size: 0.9rem;
  width: 90%;
  text-align: center;
  transition: color 0.2s ease;
  
  @media (min-width: ${kt.tablet}) {
    width: auto;
    font-size: 1rem;
    padding: 6px 10px;
  }
  
  @media (min-width: ${kt.desktop}) {
    font-size: 1.1rem;
    padding: 6px 12px;
  }
  
  svg {
    margin-right: 4px;
    font-size: 0.9rem;
    
    @media (min-width: ${kt.tablet}) {
      font-size: 1rem;
    }
  }
  
  &:hover {
    color: #ffab40;
  }
  
  &.active {
    color: #ffab40;
    font-weight: 600;
  }
`,u2=$.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 1001;
  
  @media (min-width: ${kt.tablet}) {
    display: none;
  }
`,gl=$.div`
  width: 18px;
  height: 1px;
  background-color: #5d4037;
  margin: 2px 0;
  transition: all 0.2s ease;
  
  &:nth-child(1) {
    transform: ${e=>e.$isOpen?"rotate(45deg) translate(4px, 4px)":"rotate(0)"};
  }
  
  &:nth-child(2) {
    opacity: ${e=>e.$isOpen?"0":"1"};
  }
  
  &:nth-child(3) {
    transform: ${e=>e.$isOpen?"rotate(-45deg) translate(5px, -5px)":"rotate(0)"};
  }
`;function Jt(){const[e,t]=v.useState(!1),[r,n]=v.useState(!1),[o,i]=v.useState(0),x=v.useRef(null),c=()=>{n(!r)};return v.useEffect(()=>{x.current&&i(x.current.offsetHeight);const l=new ResizeObserver(d=>{d[0].target===x.current&&i(d[0].target.offsetHeight)});return x.current&&l.observe(x.current),()=>{x.current&&l.disconnect()}},[]),v.useEffect(()=>(window.innerWidth<parseInt(kt.tablet)&&r?(document.body.style.marginTop=`${o+150}px`,document.body.style.transition="margin-top 0.2s ease"):(document.body.style.marginTop="0",document.body.style.transition=""),()=>{document.body.style.marginTop="0",document.body.style.transition=""}),[r,o]),v.useEffect(()=>{const l=()=>{window.innerWidth>=parseInt(kt.tablet)&&n(!1)};return window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),v.useEffect(()=>{const l=setTimeout(()=>{t(!0)},100);return()=>clearTimeout(l)},[]),a.jsx(s2,{$headerHeight:o,children:a.jsxs(x2,{ref:x,style:{transform:e?"translateY(0)":"translateY(-100%)"},children:[a.jsx(l2,{children:a.jsx(_0,{to:"/Dashboard",children:a.jsx("img",{src:"/src/img/Colmenares_del_eje_logo.png",alt:"Logo Colmenares"})})}),a.jsxs(u2,{onClick:c,"aria-label":"Menú",children:[a.jsx(gl,{$isOpen:r}),a.jsx(gl,{$isOpen:r}),a.jsx(gl,{$isOpen:r})]}),a.jsx(c2,{children:a.jsxs(d2,{$isOpen:r,children:[a.jsxs(G0,{to:"/UserRegister",$index:0,onClick:()=>n(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),a.jsx("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})]}),"Crear Apicultor"]}),a.jsxs(G0,{to:"/ViewApicultor",$index:1,onClick:()=>n(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"}),a.jsx("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"})]}),"Ver Apicultor"]}),a.jsxs(G0,{to:"/HivenRegister",$index:2,onClick:()=>n(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),a.jsx("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})]}),"Crear Colmena"]}),a.jsxs(G0,{to:"/Dashboard",$index:3,onClick:()=>n(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"}),a.jsx("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"})]}),"Ver Colmenas"]}),a.jsxs(G0,{to:"/Scan_QR",$index:4,onClick:()=>n(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"}),a.jsx("path",{d:"M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"}),a.jsx("path",{d:"M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"}),a.jsx("path",{d:"M9 2h5v5H9zm1 1v3h3V3zm0 8h1v1h-1z"}),a.jsx("path",{d:"M12 9h2v2h-2zm-1-2h3v5h-3zm-7 4h1v1H4zm7 1h1v1h-1z"})]}),"Escanear QR"]})]})})]})})}var T8={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",x=0;x<arguments.length;x++){var c=arguments[x];c&&(i=o(i,n(c)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var x="";for(var c in i)t.call(i,c)&&i[c]&&(x=o(x,c));return x}function o(i,x){return x?i?i+" "+x:i+x:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(T8);var m2=T8.exports;const Fe=Ps(m2),f2=["xxl","xl","lg","md","sm","xs"],p2="xs",Hd=v.createContext({prefixes:{},breakpoints:f2,minBreakpoint:p2});function Ne(e,t){const{prefixes:r}=v.useContext(Hd);return e||r[t]||t}function z8(){const{breakpoints:e}=v.useContext(Hd);return e}function I8(){const{minBreakpoint:e}=v.useContext(Hd);return e}var O8={exports:{}},h2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E2=h2,g2=E2;function L8(){}function R8(){}R8.resetWarningCache=L8;var C2=function(){function e(n,o,i,x,c,l){if(l!==g2){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:R8,resetWarningCache:L8};return r.PropTypes=r,r};O8.exports=C2();var B2=O8.exports;const x0=Ps(B2),M8=e=>v.forwardRef((t,r)=>a.jsx("div",{...t,ref:r,className:Fe(t.className,e)})),v2=["as","disabled"];function A2(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function y2(e){return!e||e.trim()==="#"}function V8({tagName:e,disabled:t,href:r,target:n,rel:o,role:i,onClick:x,tabIndex:c=0,type:l}){e||(r!=null||n!=null||o!=null?e="a":e="button");const d={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},d];const h=B=>{if((t||e==="a"&&y2(r))&&B.preventDefault(),t){B.stopPropagation();return}x==null||x(B)},f=B=>{B.key===" "&&(B.preventDefault(),h(B))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:c,href:r,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:h,onKeyDown:f},d]}const F2=v.forwardRef((e,t)=>{let{as:r,disabled:n}=e,o=A2(e,v2);const[i,{tagName:x}]=V8(Object.assign({tagName:r,disabled:n},o));return a.jsx(x,Object.assign({},o,i,{ref:t}))});F2.displayName="Button";const Yt=v.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:n,active:o=!1,disabled:i=!1,className:x,...c},l)=>{const d=Ne(t,"btn"),[h,{tagName:f}]=V8({tagName:e,disabled:i,...c}),B=f;return a.jsx(B,{...h,...c,ref:l,disabled:i,className:Fe(x,d,o&&"active",r&&`${d}-${r}`,n&&`${d}-${n}`,c.href&&i&&"disabled")})});Yt.displayName="Button";const Ud=v.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},o)=>(t=Ne(t,"card-body"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));Ud.displayName="CardBody";const H8=v.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},o)=>(t=Ne(t,"card-footer"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));H8.displayName="CardFooter";const U8=v.createContext(null);U8.displayName="CardHeaderContext";const W8=v.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},o)=>{const i=Ne(e,"card-header"),x=v.useMemo(()=>({cardHeaderBsPrefix:i}),[i]);return a.jsx(U8.Provider,{value:x,children:a.jsx(r,{ref:o,...n,className:Fe(t,i)})})});W8.displayName="CardHeader";const Q8=v.forwardRef(({bsPrefix:e,className:t,variant:r,as:n="img",...o},i)=>{const x=Ne(e,"card-img");return a.jsx(n,{ref:i,className:Fe(r?`${x}-${r}`:x,t),...o})});Q8.displayName="CardImg";const Y8=v.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},o)=>(t=Ne(t,"card-img-overlay"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));Y8.displayName="CardImgOverlay";const G8=v.forwardRef(({className:e,bsPrefix:t,as:r="a",...n},o)=>(t=Ne(t,"card-link"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));G8.displayName="CardLink";const w2=M8("h6"),q8=v.forwardRef(({className:e,bsPrefix:t,as:r=w2,...n},o)=>(t=Ne(t,"card-subtitle"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));q8.displayName="CardSubtitle";const X8=v.forwardRef(({className:e,bsPrefix:t,as:r="p",...n},o)=>(t=Ne(t,"card-text"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));X8.displayName="CardText";const D2=M8("h5"),K8=v.forwardRef(({className:e,bsPrefix:t,as:r=D2,...n},o)=>(t=Ne(t,"card-title"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));K8.displayName="CardTitle";const Z8=v.forwardRef(({bsPrefix:e,className:t,bg:r,text:n,border:o,body:i=!1,children:x,as:c="div",...l},d)=>{const h=Ne(e,"card");return a.jsx(c,{ref:d,...l,className:Fe(t,h,r&&`bg-${r}`,n&&`text-${n}`,o&&`border-${o}`),children:i?a.jsx(Ud,{children:x}):x})});Z8.displayName="Card";const Bt=Object.assign(Z8,{Img:Q8,Title:K8,Subtitle:q8,Body:Ud,Link:G8,Text:X8,Header:W8,Footer:H8,ImgOverlay:Y8});function b2(e,t){return v.Children.toArray(e).some(r=>v.isValidElement(r)&&r.type===t)}function k2({as:e,bsPrefix:t,className:r,...n}){t=Ne(t,"col");const o=z8(),i=I8(),x=[],c=[];return o.forEach(l=>{const d=n[l];delete n[l];let h,f,B;typeof d=="object"&&d!=null?{span:h,offset:f,order:B}=d:h=d;const A=l!==i?`-${l}`:"";h&&x.push(h===!0?`${t}${A}`:`${t}${A}-${h}`),B!=null&&c.push(`order${A}-${B}`),f!=null&&c.push(`offset${A}-${f}`)}),[{...n,className:Fe(r,...x,...c)},{as:e,bsPrefix:t,spans:x}]}const gt=v.forwardRef((e,t)=>{const[{className:r,...n},{as:o="div",bsPrefix:i,spans:x}]=k2(e);return a.jsx(o,{...n,ref:t,className:Fe(r,!x.length&&i)})});gt.displayName="Col";const rx=v.forwardRef(({bsPrefix:e,fluid:t=!1,as:r="div",className:n,...o},i)=>{const x=Ne(e,"container"),c=typeof t=="string"?`-${t}`:"-fluid";return a.jsx(r,{ref:i,...o,className:Fe(n,t?`${x}${c}`:x)})});rx.displayName="Container";const _2={type:x0.string,tooltip:x0.bool,as:x0.elementType},nx=v.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:n=!1,...o},i)=>a.jsx(e,{...o,ref:i,className:Fe(t,`${r}-${n?"tooltip":"feedback"}`)}));nx.displayName="Feedback";nx.propTypes=_2;const mn=v.createContext({}),Wd=v.forwardRef(({id:e,bsPrefix:t,className:r,type:n="checkbox",isValid:o=!1,isInvalid:i=!1,as:x="input",...c},l)=>{const{controlId:d}=v.useContext(mn);return t=Ne(t,"form-check-input"),a.jsx(x,{...c,ref:l,type:n,id:e||d,className:Fe(r,t,o&&"is-valid",i&&"is-invalid")})});Wd.displayName="FormCheckInput";const _s=v.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...n},o)=>{const{controlId:i}=v.useContext(mn);return e=Ne(e,"form-check-label"),a.jsx("label",{...n,ref:o,htmlFor:r||i,className:Fe(t,e)})});_s.displayName="FormCheckLabel";const J8=v.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:n=!1,reverse:o=!1,disabled:i=!1,isValid:x=!1,isInvalid:c=!1,feedbackTooltip:l=!1,feedback:d,feedbackType:h,className:f,style:B,title:A="",type:w="checkbox",label:b,children:_,as:m="input",...p},E)=>{t=Ne(t,"form-check"),r=Ne(r,"form-switch");const{controlId:C}=v.useContext(mn),k=v.useMemo(()=>({controlId:e||C}),[C,e]),D=!_&&b!=null&&b!==!1||b2(_,_s),F=a.jsx(Wd,{...p,type:w==="switch"?"checkbox":w,ref:E,isValid:x,isInvalid:c,disabled:i,as:m});return a.jsx(mn.Provider,{value:k,children:a.jsx("div",{style:B,className:Fe(f,D&&t,n&&`${t}-inline`,o&&`${t}-reverse`,w==="switch"&&r),children:_||a.jsxs(a.Fragment,{children:[F,D&&a.jsx(_s,{title:A,children:b}),d&&a.jsx(nx,{type:h,tooltip:l,children:d})]})})})});J8.displayName="FormCheck";const js=Object.assign(J8,{Input:Wd,Label:_s}),eE=v.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:n,id:o,className:i,isValid:x=!1,isInvalid:c=!1,plaintext:l,readOnly:d,as:h="input",...f},B)=>{const{controlId:A}=v.useContext(mn);return e=Ne(e,"form-control"),a.jsx(h,{...f,type:t,size:n,ref:B,readOnly:d,id:o||A,className:Fe(i,l?`${e}-plaintext`:e,r&&`${e}-${r}`,t==="color"&&`${e}-color`,x&&"is-valid",c&&"is-invalid")})});eE.displayName="FormControl";const j2=Object.assign(eE,{Feedback:nx}),tE=v.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},o)=>(t=Ne(t,"form-floating"),a.jsx(r,{ref:o,className:Fe(e,t),...n})));tE.displayName="FormFloating";const Qd=v.forwardRef(({controlId:e,as:t="div",...r},n)=>{const o=v.useMemo(()=>({controlId:e}),[e]);return a.jsx(mn.Provider,{value:o,children:a.jsx(t,{...r,ref:n})})});Qd.displayName="FormGroup";const rE=v.forwardRef(({as:e="label",bsPrefix:t,column:r=!1,visuallyHidden:n=!1,className:o,htmlFor:i,...x},c)=>{const{controlId:l}=v.useContext(mn);t=Ne(t,"form-label");let d="col-form-label";typeof r=="string"&&(d=`${d} ${d}-${r}`);const h=Fe(o,t,n&&"visually-hidden",r&&d);return i=i||l,r?a.jsx(gt,{ref:c,as:"label",className:h,htmlFor:i,...x}):a.jsx(e,{ref:c,className:h,htmlFor:i,...x})});rE.displayName="FormLabel";const nE=v.forwardRef(({bsPrefix:e,className:t,id:r,...n},o)=>{const{controlId:i}=v.useContext(mn);return e=Ne(e,"form-range"),a.jsx("input",{...n,type:"range",ref:o,className:Fe(t,e),id:r||i})});nE.displayName="FormRange";const oE=v.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:n,isValid:o=!1,isInvalid:i=!1,id:x,...c},l)=>{const{controlId:d}=v.useContext(mn);return e=Ne(e,"form-select"),a.jsx("select",{...c,size:r,ref:l,className:Fe(n,e,t&&`${e}-${t}`,o&&"is-valid",i&&"is-invalid"),id:x||d})});oE.displayName="FormSelect";const iE=v.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:n,...o},i)=>(e=Ne(e,"form-text"),a.jsx(r,{...o,ref:i,className:Fe(t,e,n&&"text-muted")})));iE.displayName="FormText";const aE=v.forwardRef((e,t)=>a.jsx(js,{...e,ref:t,type:"switch"}));aE.displayName="Switch";const P2=Object.assign(aE,{Input:js.Input,Label:js.Label}),sE=v.forwardRef(({bsPrefix:e,className:t,children:r,controlId:n,label:o,...i},x)=>(e=Ne(e,"form-floating"),a.jsxs(Qd,{ref:x,className:Fe(t,e),controlId:n,...i,children:[r,a.jsx("label",{htmlFor:n,children:o})]})));sE.displayName="FloatingLabel";const S2={_ref:x0.any,validated:x0.bool,as:x0.elementType},Yd=v.forwardRef(({className:e,validated:t,as:r="form",...n},o)=>a.jsx(r,{...n,ref:o,className:Fe(e,t&&"was-validated")}));Yd.displayName="Form";Yd.propTypes=S2;const xE=Object.assign(Yd,{Group:Qd,Control:j2,Floating:tE,Check:js,Switch:P2,Label:rE,Text:iE,Range:nE,Select:oE,FloatingLabel:sE}),ho=v.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},o)=>{const i=Ne(e,"row"),x=z8(),c=I8(),l=`${i}-cols`,d=[];return x.forEach(h=>{const f=n[h];delete n[h];let B;f!=null&&typeof f=="object"?{cols:B}=f:B=f;const A=h!==c?`-${h}`:"";B!=null&&d.push(`${l}${A}-${B}`)}),a.jsx(r,{ref:o,...n,className:Fe(t,i,...d)})});ho.displayName="Row";const Gd=v.forwardRef(({bsPrefix:e,variant:t,animation:r="border",size:n,as:o="div",className:i,...x},c)=>{e=Ne(e,"spinner");const l=`${e}-${r}`;return a.jsx(o,{ref:c,...x,className:Fe(i,l,n&&`${l}-${n}`,t&&`text-${t}`)})});Gd.displayName="Spinner";const $2="/assets/profile-pic-1m_NPD5-.jpeg";function gr(){const[e,t]=v.useState(!1),[r,n]=v.useState(!1),[o,i]=v.useState(null),[x,c]=v.useState(!1),[l,d]=v.useState(null);function h(F){const P=F+"=",z=document.cookie.split(";");for(let j=0;j<z.length;j++){let U=z[j];for(;U.charAt(0)==" ";)U=U.substring(1,U.length);if(U.indexOf(P)==0)return U.substring(P.length,U.length)}return null}const f=h("username"),B=h("role"),A=h("id_User"),w=h("token"),_=(F=>{if(!F)return"";switch(F.toLowerCase()){case"admin":return"Administrador";case"beekeeper":return"Apicultor";default:return F}})(B),m=()=>{t(!e)},p=async()=>{if(A){c(!0),d(null);try{const F=await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/detail-beekeeper/${A}/`,{headers:{Authorization:`Bearer ${w}`,"Content-Type":"application/json"}});if(!F.ok)throw new Error("Error en la respuesta del servidor");const P=await F.json();i(P)}catch(F){console.error("Error al obtener detalles del usuario:",F),d("No se pudieron cargar los detalles del usuario.")}finally{c(!1)}}},E=()=>{p(),n(!0)},C=()=>{n(!1)},k=F=>{(F.target.classList.contains("modal")||F.target.classList.contains("modal-backdrop"))&&C()},D=()=>{document.cookie.split(";").forEach(function(F){document.cookie=F.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")}),window.location.href="/"};return a.jsxs(a.Fragment,{children:[a.jsx(rx,{className:"d-none d-md-block",children:a.jsx(Bt,{className:"text-center rounded",style:{maxWidth:"346px",minHeight:"550px",maxHeight:"800px",margin:"0 auto",boxShadow:"0 0 20px 5px rgba(0, 0, 0, 0.25)",border:"1px solid black"},children:a.jsxs(Bt.Body,{className:"d-flex flex-column align-items-center gap-3 p-4 mr-5",children:[a.jsx(Bt.Title,{as:"h2",className:"mb-3",children:_}),a.jsx("img",{src:$2,alt:"Perfil",className:"rounded-circle border border-3",style:{width:"100px",height:"100px",objectFit:"cover"}}),a.jsx(Bt.Title,{as:"h3",className:"mb-3",children:f}),a.jsxs(Yt,{style:{backgroundColor:"#f9d77e",color:"black",border:"1px solid black"},className:"mt-2 d-flex align-items-center gap-2",onClick:E,children:[a.jsx(v0,{size:18}),"Ver detalles"]}),a.jsxs(Yt,{variant:"outline-danger",className:"mt-2 d-flex align-items-center gap-2",onClick:D,children:[a.jsx(cp,{size:18}),"Cerrar sesión"]})]})})}),a.jsxs("div",{className:"d-md-none position-fixed",style:{bottom:"20px",right:"20px",zIndex:"1000"},children:[a.jsx(Yt,{variant:"light",className:"rounded-circle d-flex justify-content-center align-items-center",style:{width:"60px",height:"60px",border:"1px solid gray",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)"},onClick:m,children:a.jsx(o2,{size:30})}),e&&a.jsx(Bt,{className:"position-absolute rounded animate__animated animate__fadeIn",style:{width:"200px",bottom:"70px",right:"0",zIndex:"1001",animation:"fadeIn 0.3s",boxShadow:"0 0 20px 5px rgba(0, 0, 0, 0.25)",border:"1px solid black"},children:a.jsxs(Bt.Body,{className:"d-flex flex-column align-items-center p-3",children:[a.jsx(Yt,{variant:"light",className:"position-absolute top-0 end-0 border-0 p-1 m-1",onClick:m,children:a.jsx(a2,{size:16})}),a.jsxs("div",{className:"d-flex align-items-center mb-2",children:[a.jsx("img",{src:"src/img/profile-pic.jpeg",alt:"Perfil",className:"rounded-circle border border-2",style:{width:"40px",height:"40px",objectFit:"cover",marginRight:"10px"}}),a.jsxs("div",{children:[a.jsx("p",{className:"m-0 fw-bold",children:f}),a.jsx("small",{className:"text-muted",children:_})]})]}),a.jsxs(Yt,{size:"sm",className:"mt-2 w-100 d-flex align-items-center justify-content-center gap-2",onClick:()=>{E(),m()},style:{backgroundColor:"#f9d77e"},children:[a.jsx(v0,{size:14}),"Ver detalles"]}),a.jsxs(Yt,{variant:"outline-danger",size:"sm",className:"mt-2 w-100 d-flex align-items-center justify-content-center gap-2",onClick:D,children:[a.jsx(cp,{size:14}),"Cerrar sesión"]})]})})]}),a.jsx("div",{className:`modal fade ${r?"show":""}`,tabIndex:"-1","aria-labelledby":"userDetailModalLabel","aria-hidden":"true",style:{display:r?"block":"none",backgroundColor:"rgba(0, 0, 0, 0.5)"},onClick:k,children:a.jsx("div",{className:"modal-dialog modal-dialog-centered",onClick:F=>F.stopPropagation(),children:a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"modal-header border-0 pb-0",children:[a.jsx("img",{src:"src/img/Colmenares_del_eje_logo.png",alt:"Logo",style:{height:"35px"},className:"mx-auto"}),a.jsx("button",{type:"button",className:"btn-close",onClick:C,"aria-label":"Close"})]}),a.jsxs("div",{className:"modal-body",children:[x&&a.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"200px"},children:a.jsx("div",{className:"spinner-border text-warning",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Cargando..."})})}),l&&a.jsx("div",{className:"alert alert-danger",role:"alert",children:l}),o&&!x&&a.jsxs(a.Fragment,{children:[a.jsx("h5",{className:"modal-title text-center mb-4",id:"userDetailModalLabel",children:"Información del usuario"}),a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-12 col-md-5 text-center mb-4 mb-md-0",children:a.jsx("img",{src:"src/img/profile-pic.jpeg",alt:"Perfil",className:"rounded-circle border border-3 border-secondary",style:{width:"150px",height:"150px",objectFit:"cover"}})}),a.jsxs("div",{className:"col-12 col-md-7",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Nombres:"})," ",o.first_name]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Apellidos:"})," ",o.last_name]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Identificación:"})," ",o.identifications]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Teléfono:"})," ",o.phone]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Correo:"})," ",o.email]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Contacto de emergencia:"})," ",o.emergency_contact_name]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Teléfono de emergencia:"})," ",o.emergency_contact_phone]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Fecha de nacimiento:"})," ",o.birth_date]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Fecha de asignación:"})," ",o.assignment_date]})]})]})]})]})]})})}),r&&a.jsx("div",{className:"modal-backdrop fade show",onClick:C})]})}const N2=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    /* Responsividad para pantallas pequeñas */
    @media (max-width: 480px) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: 1200px) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: 1600px) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }
`;function lE(){const e=st(),t=()=>{e("/ViewApicultor")};return a.jsx(N2,{onClick:t,children:"Apicultores"})}const A0={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},T2=$.div`
    position: fixed;
    top: 80px;
    left: 20px;
    z-index: 100;
    
    @media (max-width: ${A0.mobile}) {
        top: 60px;
        left: 15px;
    }
    
    @media (min-width: ${A0.large}) {
        top: 100px;
        left: 30px;
    }
`,qd=$.button`
    background-color: #f9d77e;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        background-color: #f8c150;
    }
    
    &:hover:before {
        opacity: 1;
    }
    
    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
    
    @media (max-width: ${A0.mobile}) {
        width: 45px;
        height: 45px;
    }
    
    @media (min-width: ${A0.large}) {
        width: 70px;
        height: 70px;
    }
`,z2=$.span`
    color: #4e342e;
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1;
    transform: translateX(-2px);
    transition: transform 0.3s ease;
    
    ${qd}:hover & {
        transform: translateX(-5px);
    }
    
    @media (max-width: ${A0.mobile}) {
        font-size: 1.8rem;
    }
    
    @media (min-width: ${A0.large}) {
        font-size: 2.6rem;
    }
`,I2=$.span`
    position: absolute;
    left: 50%;
    bottom: -35px;
    transform: translateX(-50%);
    background-color: #4e342e;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    
    ${qd}:hover & {
        opacity: 1;
        visibility: visible;
    }
    
    &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #4e342e;
    }
`;function Pr(){const e=st(),t=()=>{e(-1)};return a.jsx(T2,{children:a.jsxs(qd,{onClick:t,"aria-label":"Regresar",children:[a.jsx(z2,{children:"←"}),a.jsx(I2,{children:"Regresar"})]})})}const be={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},O2=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;

    /* Para pantallas grandes: limita el ancho máximo y centra el contenido */
    @media (min-width: ${be.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`,L2=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    max-width: 495px;

    /* Para pantallas grandes: aumenta el ancho máximo y el padding */
    @media (min-width: ${be.large}) {
        max-width: 32rem; /* Usar rem para escalabilidad */
        padding: 1.5rem;
    }
    @media (min-width: ${be.xlarge}) {
        max-width: 38rem;
        padding: 2rem;
    }
`,R2=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${be.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${be.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem); /* Escala proporcionalmente */
        margin-bottom: 1.5rem;
    }
`,M2=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    /* Para pantallas grandes: aumenta el gap para mejor espaciado */
    @media (min-width: ${be.large}) {
        gap: 0.75rem;
    }
`,Ut=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem; /* Ajustado de 1.5rem a 0.9rem para consistencia */

    @media (max-width: ${be.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 0.1rem;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${be.large}) {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
`,Or=$.input`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    transition: border-color 0.3s;

    @media (max-width: ${be.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${be.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${be.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,V2=$.select`
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    background-color: #fffde7;
    font-size: 0.85rem;

    @media (max-width: ${be.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${be.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${be.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }
`,H2=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Añadido para separar botones */
`,U2=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${be.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${be.large}) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: ${be.xlarge}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }
`,Lr=$.div`
    color: red;
    font-size: 0.75rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${be.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
    }
`,W2=$.div`
    position: relative;
    width: 100%;
`,Q2=$.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #4e342e;

    /* Ajuste responsivo para el ícono */
    @media (min-width: ${be.large}) {
        right: 12px;
    }
`,dp=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,up=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${be.mobile}) {
        padding: 1.5rem;
        width: 85%;
    }
    /* Para pantallas grandes: aumenta el tamaño del popup */
    @media (min-width: ${be.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${be.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`,Y2=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    /* Para pantallas grandes: aumenta el tamaño del ícono */
    @media (min-width: ${be.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,G2=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #ff6b6b;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '!';
        font-size: 40px;
        color: white;
        font-weight: bold;
    }

    /* Para pantallas grandes: aumenta el tamaño del ícono */
    @media (min-width: ${be.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,mp=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${be.mobile}) {
        font-size: 20px;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${be.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,fp=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${be.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`,q2=$.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #ff6b6b;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    animation: slideIn 0.3s ease-out forwards;
    max-width: 350px;
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    /* Ajuste para pantallas pequeñas */
    @media (max-width: ${be.mobile}) {
        top: 10px;
        right: 10px;
        padding: 10px 15px;
        max-width: 90%;
    }
`;function X2(){const e=v.useRef(null),r=new Date().toISOString().split("T")[0],[n,o]=v.useState(!1),[i,x]=v.useState({}),[c,l]=v.useState(!1),[d,h]=v.useState(""),[f,B]=v.useState(!1),[A,w]=v.useState(""),[b,_]=v.useState(0),[m,p]=v.useState({username:"",nombreApicultor:"",apellidoApicultor:"",identificacion:"",password:"",correo:"",telefono:"",fechaNacimiento:"",nombreContactoEmergencia:"",contactoEmergencia:"",rol:""}),[E,C]=v.useState({password:!1}),k=T=>{C(H=>({...H,[T]:!H[T]}))},D=T=>{let H=0;return T.length>=8&&H++,/[A-Z]/.test(T)&&H++,/[0-9]/.test(T)&&H++,/[^A-Za-z0-9]/.test(T)&&H++,H},F=T=>{const H=["#ff4444","#ffbb33","#00C851","#007E33"];return H[T-1]||H[0]},P=T=>["Débil","Media","Buena","Fuerte"][T-1]||"",z=T=>{const{name:H,value:O}=T.target;if(p(I=>({...I,[H]:O})),H==="password"){const I=D(O);_(I)}i[H]&&x(I=>({...I,[H]:""}))},j=T=>{h(T),l(!0),setTimeout(()=>{l(!1)},5e3)},U=T=>{let H={},O=!0;const I=/^[0-9]{8,10}$/;T.identificacion&&!I.test(T.identificacion)&&(H.identificacion="La cédula debe contener entre 8 y 10 dígitos numéricos",O=!1);const R=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;T.correo&&!R.test(T.correo)&&(H.correo="Formato de correo inválido",O=!1);const N=/^[0-9]{7,10}$/;T.telefono&&!N.test(T.telefono)&&(H.telefono="El teléfono debe contener entre 7 y 10 dígitos",O=!1),T.contactoEmergencia&&!N.test(T.contactoEmergencia)&&(H.contactoEmergencia="El contacto debe contener entre 7 y 10 dígitos",O=!1);const W=/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;T.nombreApicultor&&!W.test(T.nombreApicultor)&&(H.nombreApicultor="El nombre solo debe contener letras y espacios",O=!1),T.apellidoApicultor&&!W.test(T.apellidoApicultor)&&(H.apellidoApicultor="El apellido solo debe contener letras y espacios",O=!1),T.nombreContactoEmergencia&&!W.test(T.nombreContactoEmergencia)&&(H.nombreContactoEmergencia="El nombre solo debe contener letras y espacios",O=!1);const S=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;T.password&&!S.test(T.password)&&(H.password="La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial",O=!1);const Y=/^[a-zA-Z0-9._-]{3,20}$/;return T.username&&!Y.test(T.username)&&(H.username="El username debe tener entre 3 y 20 caracteres y solo puede contener letras, números, puntos, guiones y guiones bajos",O=!1),{isValid:O,errors:H}},L=async T=>{T.preventDefault();function H(N){const W=N+"=",S=document.cookie.split(";");for(let Y=0;Y<S.length;Y++){let q=S[Y];for(;q.charAt(0)==" ";)q=q.substring(1,q.length);if(q.indexOf(W)==0)return q.substring(W.length,q.length)}return null}const O=H("token"),I=U(m);if(!I.isValid){x(I.errors);return}const R={username:m.username,first_name:m.nombreApicultor,last_name:m.apellidoApicultor,identifications:m.identificacion,password:m.password,email:m.correo,phone:m.telefono,assignment_date:r,birth_date:m.fechaNacimiento,state:"Active",emergency_contact_name:m.nombreContactoEmergencia,emergency_contact_phone:m.contactoEmergencia,role:m.rol};try{const N=await fetch("https://colmenaresdeleje.onrender.com/beekeepers/create-beekeeper/",{method:"POST",headers:{Authorization:`Bearer ${O}`,"Content-Type":"application/json"},body:JSON.stringify(R)}),W=await N.json();if(!N.ok){if(W.Error&&typeof W.Error=="string"){if(W.Error.includes("username ya existe")){j("El nombre de usuario ya existe. Por favor, elija otro."),x(S=>({...S,username:"Este nombre de usuario ya está en uso"}));return}if(W.Error.includes("correo ya existe")){j("El correo electrónico ya está registrado."),x(S=>({...S,correo:"Este correo ya está registrado"}));return}if(W.Error.includes("identificación ya existe")){j("La identificación ya está registrada en el sistema."),x(S=>({...S,identificacion:"Esta identificación ya está registrada"}));return}}w(W.Error||"Error en el registro"),B(!0);return}o(!0),p({username:"",nombreApicultor:"",apellidoApicultor:"",identificacion:"",password:"",correo:"",telefono:"",fechaNacimiento:"",estado:"",contactoEmergencia:"",nombreContactoEmergencia:"",rol:""})}catch(N){w(`Error: ${N.message}`),B(!0)}};return a.jsxs(O2,{children:[a.jsx(Jt,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-3",children:a.jsxs("div",{className:"row justify-content-center",children:[a.jsx("div",{className:"col-lg-6 col-md-12 mb-3",children:a.jsxs(L2,{children:[a.jsx(R2,{children:"Crear Apicultor"}),a.jsxs(M2,{onSubmit:L,ref:e,children:[a.jsx(Ut,{htmlFor:"username",children:"Username"}),a.jsx(Or,{type:"text",id:"username",name:"username",placeholder:"Ingrese el username del apicultor",value:m.username,onChange:z,required:!0}),i.username&&a.jsx(Lr,{children:i.username}),a.jsx(Ut,{htmlFor:"nombreApicultor",children:"Nombre del apicultor"}),a.jsx(Or,{type:"text",id:"nombreApicultor",name:"nombreApicultor",placeholder:"Ingrese el nombre del apicultor",value:m.nombreApicultor,onChange:z,required:!0}),i.nombreApicultor&&a.jsx(Lr,{children:i.nombreApicultor}),a.jsx(Ut,{htmlFor:"apellidoApicultor",children:"Apellido del apicultor"}),a.jsx(Or,{type:"text",id:"apellidoApicultor",name:"apellidoApicultor",placeholder:"Ingrese el apellido del apicultor",value:m.apellidoApicultor,onChange:z,required:!0}),i.apellidoApicultor&&a.jsx(Lr,{children:i.apellidoApicultor}),a.jsx(Ut,{htmlFor:"identificacion",children:"Identificación"}),a.jsx(Or,{type:"number",id:"identificacion",name:"identificacion",placeholder:"Ingrese la identificación del apicultor",value:m.identificacion,onChange:z,required:!0}),i.identificacion&&a.jsx(Lr,{children:i.identificacion}),a.jsx(Ut,{htmlFor:"password",children:"Contraseña"}),a.jsxs(W2,{children:[a.jsx(Or,{type:E.password?"text":"password",id:"password",name:"password",placeholder:"Ingrese la contraseña del apicultor",value:m.password,onChange:z,required:!0}),a.jsx(Q2,{onClick:()=>k("password"),children:E.password?a.jsx(ks,{size:18}):a.jsx(v0,{size:18})})]}),i.password&&a.jsx(Lr,{children:i.password}),m.password&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{height:"4px",backgroundColor:"#eee",borderRadius:"2px",overflow:"hidden",marginTop:"5px"},children:a.jsx("div",{style:{width:`${b/4*100}%`,height:"100%",backgroundColor:F(b),transition:"all 0.3s"}})}),a.jsx(Ut,{style:{color:F(b),textAlign:"right",fontSize:"0.8rem"},children:P(b)}),a.jsx(Ut,{style:{color:"#666",fontSize:"0.75rem",marginTop:"-5px"},children:"La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial."})]}),a.jsx(Ut,{htmlFor:"correo",children:"Correo"}),a.jsx(Or,{type:"email",id:"correo",name:"correo",placeholder:"Ingrese el correo del apicultor",value:m.correo,onChange:z,required:!0}),i.correo&&a.jsx(Lr,{children:i.correo}),a.jsx(Ut,{htmlFor:"telefono",children:"Teléfono"}),a.jsx(Or,{type:"tel",id:"telefono",name:"telefono",placeholder:"Ingrese el número del apicultor",value:m.telefono,onChange:z,required:!0}),i.telefono&&a.jsx(Lr,{children:i.telefono}),a.jsx(Ut,{htmlFor:"fechaNacimiento",children:"Fecha de Nacimiento"}),a.jsx(Or,{type:"date",id:"fechaNacimiento",name:"fechaNacimiento",value:m.fechaNacimiento,onChange:z,required:!0}),i.fechaNacimiento&&a.jsx(Lr,{children:i.fechaNacimiento}),a.jsx(Ut,{htmlFor:"nombreContactoEmergencia",children:"Nombre de contacto de emergencia"}),a.jsx(Or,{type:"text",id:"nombreContactoEmergencia",placeholder:"Ingrese el nombre del contacto de emergencia",name:"nombreContactoEmergencia",required:!0,value:m.nombreContactoEmergencia,onChange:z}),i.nombreContactoEmergencia&&a.jsx(Lr,{children:i.nombreContactoEmergencia}),a.jsx(Ut,{htmlFor:"contactoEmergencia",children:"Contacto de emergencia"}),a.jsx(Or,{type:"tel",id:"contactoEmergencia",name:"contactoEmergencia",placeholder:"Ingrese el contacto de emergencia",required:!0,value:m.contactoEmergencia,onChange:z}),i.contactoEmergencia&&a.jsx(Lr,{children:i.contactoEmergencia}),a.jsx(Ut,{htmlFor:"rol",children:"Rol"}),a.jsxs(V2,{id:"rol",name:"rol",value:m.rol,onChange:z,required:!0,children:[a.jsx("option",{value:"",children:"Seleccione un rol"}),a.jsx("option",{value:"beekeeper",children:"Apicultor"}),a.jsx("option",{value:"admin",children:"Administrador"})]}),a.jsxs(H2,{children:[a.jsx(U2,{type:"submit",children:"Crear"}),a.jsx(lE,{})]})]})]})}),a.jsx("div",{className:"col-lg-6 col-md-12",children:a.jsx(gr,{className:"mb-3"})})]})}),a.jsx(pt,{}),a.jsx(dp,{isVisible:n,children:a.jsxs(up,{isVisible:n,children:[a.jsx(Y2,{}),a.jsx(mp,{children:"Registro Exitoso"}),a.jsx("p",{children:"El usuario ha sido registrado exitosamente"}),a.jsx(fp,{onClick:()=>o(!1),children:"Aceptar"})]})}),a.jsx(dp,{isVisible:f,children:a.jsxs(up,{isVisible:f,children:[a.jsx(G2,{}),a.jsx(mp,{children:"Error en el Registro"}),a.jsx("p",{children:A}),a.jsx(fp,{onClick:()=>B(!1),children:"Aceptar"})]})}),c&&a.jsx(q2,{children:d})]})}const _t={mobile:"320px",tablet:"768px",desktop:"1024px",largeDesktop:"1080px"},K2=$.div`
  position: relative;
  padding-top: ${e=>e.$headerHeight}px;

  @media (min-width: ${_t.tablet}) {
    padding-top: ${e=>e.$headerHeight}px;
  }
  
  @media (min-width: ${_t.desktop}) {
    padding-top: ${e=>e.$headerHeight}px;
  }
`,Z2=$.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9d77e;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  
  @media (min-width: ${_t.tablet}) {
    padding: 0.5rem 1.5rem;
  }
  
  @media (min-width: ${_t.desktop}) {
    padding: 0.5rem 2rem;
  }
`,J2=$.div`
  display: flex;
  align-items: center;
  
  img {
    height: 25px;
    transition: transform 0.3s ease;
    
    @media (min-width: ${_t.tablet}) {
      height: 30px;
    }
    
    @media (min-width: ${_t.desktop}) {
      height: 35px;
    }
    
    &:hover {
      transform: scale(1.05);
    }
  }
`,eB=$.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  
  @media (min-width: ${_t.tablet}) {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
  }
`,tB=$.div`
  display: ${e=>e.$isOpen?"flex":"none"};
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  align-items: center;
  background: #f9d77e;
  padding: 0.3rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  
  @media (min-width: ${_t.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0;
    background: none;
    position: static;
  }
  
  @media (min-width: ${_t.desktop}) {
    gap: 1rem;
  }
`,Cl=$(Id)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #5d4037;
  font-weight: 500;
  padding: 4px 8px;
  font-size: 0.9rem;
  width: 90%;
  text-align: center;
  transition: color 0.2s ease;
  
  @media (min-width: ${_t.tablet}) {
    width: auto;
    font-size: 1rem;
    padding: 6px 10px;
  }
  
  @media (min-width: ${_t.desktop}) {
    font-size: 1.1rem;
    padding: 6px 12px;
  }
  
  svg {
    margin-right: 4px;
    font-size: 0.9rem;
    transition: transform 0.2s ease;
    
    @media (min-width: ${_t.tablet}) {
      font-size: 1rem;
    }
  }
  
  &:hover {
    color: #ffab40;
    
    svg {
      transform: scale(1.1);
    }
  }
  
  &.active {
    color: #ffab40;
    font-weight: 600;
  }
`,rB=$.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 1001;
  
  @media (min-width: ${_t.tablet}) {
    display: none;
  }
`,Bl=$.div`
  width: 18px;
  height: 1px;
  background-color: #5d4037;
  margin: 2px 0;
  transition: all 0.2s ease;
  
  &:nth-child(1) {
    transform: ${e=>e.$isOpen?"rotate(45deg) translate(4px, 4px)":"rotate(0)"};
  }
  
  &:nth-child(2) {
    opacity: ${e=>e.$isOpen?"0":"1"};
  }
  
  &:nth-child(3) {
    transform: ${e=>e.$isOpen?"rotate(-45deg) translate(5px, -5px)":"rotate(0)"};
  }
`,nB=$.div`
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffab40;
  transition: width 0.3s ease-out;
  width: ${e=>e.$scrollProgress}%;
`;function qr(){const[e,t]=v.useState(0),[r,n]=v.useState(!1),[o,i]=v.useState(!1),[x,c]=v.useState(0),l=v.useRef(null),d=()=>{i(!o)};return v.useEffect(()=>{l.current&&c(l.current.offsetHeight);const h=new ResizeObserver(f=>{f[0].target===l.current&&c(f[0].target.offsetHeight)});return l.current&&h.observe(l.current),()=>{l.current&&h.disconnect()}},[]),v.useEffect(()=>(window.innerWidth<parseInt(_t.tablet)&&o?(document.body.style.marginTop=`${x+150}px`,document.body.style.transition="margin-top 0.2s ease"):(document.body.style.marginTop="0",document.body.style.transition=""),()=>{document.body.style.marginTop="0",document.body.style.transition=""}),[o,x]),v.useEffect(()=>{const h=()=>{window.innerWidth>=parseInt(_t.tablet)&&i(!1)};return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),v.useEffect(()=>{const h=setTimeout(()=>{n(!0)},100);return()=>clearTimeout(h)},[]),v.useEffect(()=>{const h=()=>{const f=document.documentElement.scrollHeight-window.innerHeight,B=window.scrollY;f>0&&t(B/f*100),o&&i(!1)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[o]),a.jsx(K2,{$headerHeight:x,children:a.jsxs(Z2,{ref:l,style:{transform:r?"translateY(0)":"translateY(-100%)"},children:[a.jsx(J2,{children:a.jsx(_0,{to:"/Dashboard",children:a.jsx("img",{src:"/src/img/Colmenares_del_eje_logo.png",alt:"Logo Colmenares"})})}),a.jsxs(rB,{onClick:d,"aria-label":"Menú",children:[a.jsx(Bl,{$isOpen:o}),a.jsx(Bl,{$isOpen:o}),a.jsx(Bl,{$isOpen:o})]}),a.jsx(eB,{children:a.jsxs(tB,{$isOpen:o,children:[a.jsxs(Cl,{to:"/HivenRegister",onClick:()=>i(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),a.jsx("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})]}),"Crear Colmena"]}),a.jsxs(Cl,{to:"/Dashboard",onClick:()=>i(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"}),a.jsx("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"})]}),"Ver Colmenas"]}),a.jsxs(Cl,{to:"/Scan_QR",onClick:()=>i(!1),children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[a.jsx("path",{d:"M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"}),a.jsx("path",{d:"M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"}),a.jsx("path",{d:"M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"}),a.jsx("path",{d:"M9 2h5v5H9zm1 1v3h3V3zm0 8h1v1h-1z"}),a.jsx("path",{d:"M12 9h2v2h-2zm-1-2h3v5h-3zm-7 4h1v1H4zm7 1h1v1h-1z"})]}),"Escanear QR"]})]})}),a.jsx(nB,{$scrollProgress:e})]})})}var oB={exports:{}};/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(e,t){(function(r,n){e.exports=n()})(Ip,function(){const r=new Map,n={set(g,s,u){r.has(g)||r.set(g,new Map);const y=r.get(g);y.has(s)||y.size===0?y.set(s,u):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`)},get:(g,s)=>r.has(g)&&r.get(g).get(s)||null,remove(g,s){if(!r.has(g))return;const u=r.get(g);u.delete(s),u.size===0&&r.delete(g)}},o="transitionend",i=g=>(g&&window.CSS&&window.CSS.escape&&(g=g.replace(/#([^\s"#']+)/g,(s,u)=>`#${CSS.escape(u)}`)),g),x=g=>{g.dispatchEvent(new Event(o))},c=g=>!(!g||typeof g!="object")&&(g.jquery!==void 0&&(g=g[0]),g.nodeType!==void 0),l=g=>c(g)?g.jquery?g[0]:g:typeof g=="string"&&g.length>0?document.querySelector(i(g)):null,d=g=>{if(!c(g)||g.getClientRects().length===0)return!1;const s=getComputedStyle(g).getPropertyValue("visibility")==="visible",u=g.closest("details:not([open])");if(!u)return s;if(u!==g){const y=g.closest("summary");if(y&&y.parentNode!==u||y===null)return!1}return s},h=g=>!g||g.nodeType!==Node.ELEMENT_NODE||!!g.classList.contains("disabled")||(g.disabled!==void 0?g.disabled:g.hasAttribute("disabled")&&g.getAttribute("disabled")!=="false"),f=g=>{if(!document.documentElement.attachShadow)return null;if(typeof g.getRootNode=="function"){const s=g.getRootNode();return s instanceof ShadowRoot?s:null}return g instanceof ShadowRoot?g:g.parentNode?f(g.parentNode):null},B=()=>{},A=g=>{g.offsetHeight},w=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,b=[],_=()=>document.documentElement.dir==="rtl",m=g=>{var s;s=()=>{const u=w();if(u){const y=g.NAME,M=u.fn[y];u.fn[y]=g.jQueryInterface,u.fn[y].Constructor=g,u.fn[y].noConflict=()=>(u.fn[y]=M,g.jQueryInterface)}},document.readyState==="loading"?(b.length||document.addEventListener("DOMContentLoaded",()=>{for(const u of b)u()}),b.push(s)):s()},p=(g,s=[],u=g)=>typeof g=="function"?g(...s):u,E=(g,s,u=!0)=>{if(!u)return void p(g);const y=(Q=>{if(!Q)return 0;let{transitionDuration:G,transitionDelay:K}=window.getComputedStyle(Q);const ee=Number.parseFloat(G),re=Number.parseFloat(K);return ee||re?(G=G.split(",")[0],K=K.split(",")[0],1e3*(Number.parseFloat(G)+Number.parseFloat(K))):0})(s)+5;let M=!1;const V=({target:Q})=>{Q===s&&(M=!0,s.removeEventListener(o,V),p(g))};s.addEventListener(o,V),setTimeout(()=>{M||x(s)},y)},C=(g,s,u,y)=>{const M=g.length;let V=g.indexOf(s);return V===-1?!u&&y?g[M-1]:g[0]:(V+=u?1:-1,y&&(V=(V+M)%M),g[Math.max(0,Math.min(V,M-1))])},k=/[^.]*(?=\..*)\.|.*/,D=/\..*/,F=/::\d+$/,P={};let z=1;const j={mouseenter:"mouseover",mouseleave:"mouseout"},U=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(g,s){return s&&`${s}::${z++}`||g.uidEvent||z++}function T(g){const s=L(g);return g.uidEvent=s,P[s]=P[s]||{},P[s]}function H(g,s,u=null){return Object.values(g).find(y=>y.callable===s&&y.delegationSelector===u)}function O(g,s,u){const y=typeof s=="string",M=y?u:s||u;let V=W(g);return U.has(V)||(V=g),[y,M,V]}function I(g,s,u,y,M){if(typeof s!="string"||!g)return;let[V,Q,G]=O(s,u,y);s in j&&(Q=(se=>function(ie){if(!ie.relatedTarget||ie.relatedTarget!==ie.delegateTarget&&!ie.delegateTarget.contains(ie.relatedTarget))return se.call(this,ie)})(Q));const K=T(g),ee=K[G]||(K[G]={}),re=H(ee,Q,V?u:null);if(re)return void(re.oneOff=re.oneOff&&M);const Z=L(Q,s.replace(k,"")),le=V?function(oe,se,ie){return function xe(we){const Pe=oe.querySelectorAll(se);for(let{target:me}=we;me&&me!==this;me=me.parentNode)for(const Ce of Pe)if(Ce===me)return Y(we,{delegateTarget:me}),xe.oneOff&&S.off(oe,we.type,se,ie),ie.apply(me,[we])}}(g,u,Q):function(oe,se){return function ie(xe){return Y(xe,{delegateTarget:oe}),ie.oneOff&&S.off(oe,xe.type,se),se.apply(oe,[xe])}}(g,Q);le.delegationSelector=V?u:null,le.callable=Q,le.oneOff=M,le.uidEvent=Z,ee[Z]=le,g.addEventListener(G,le,V)}function R(g,s,u,y,M){const V=H(s[u],y,M);V&&(g.removeEventListener(u,V,!!M),delete s[u][V.uidEvent])}function N(g,s,u,y){const M=s[u]||{};for(const[V,Q]of Object.entries(M))V.includes(y)&&R(g,s,u,Q.callable,Q.delegationSelector)}function W(g){return g=g.replace(D,""),j[g]||g}const S={on(g,s,u,y){I(g,s,u,y,!1)},one(g,s,u,y){I(g,s,u,y,!0)},off(g,s,u,y){if(typeof s!="string"||!g)return;const[M,V,Q]=O(s,u,y),G=Q!==s,K=T(g),ee=K[Q]||{},re=s.startsWith(".");if(V===void 0){if(re)for(const Z of Object.keys(K))N(g,K,Z,s.slice(1));for(const[Z,le]of Object.entries(ee)){const oe=Z.replace(F,"");G&&!s.includes(oe)||R(g,K,Q,le.callable,le.delegationSelector)}}else{if(!Object.keys(ee).length)return;R(g,K,Q,V,M?u:null)}},trigger(g,s,u){if(typeof s!="string"||!g)return null;const y=w();let M=null,V=!0,Q=!0,G=!1;s!==W(s)&&y&&(M=y.Event(s,u),y(g).trigger(M),V=!M.isPropagationStopped(),Q=!M.isImmediatePropagationStopped(),G=M.isDefaultPrevented());const K=Y(new Event(s,{bubbles:V,cancelable:!0}),u);return G&&K.preventDefault(),Q&&g.dispatchEvent(K),K.defaultPrevented&&M&&M.preventDefault(),K}};function Y(g,s={}){for(const[u,y]of Object.entries(s))try{g[u]=y}catch{Object.defineProperty(g,u,{configurable:!0,get:()=>y})}return g}function q(g){if(g==="true")return!0;if(g==="false")return!1;if(g===Number(g).toString())return Number(g);if(g===""||g==="null")return null;if(typeof g!="string")return g;try{return JSON.parse(decodeURIComponent(g))}catch{return g}}function ae(g){return g.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}const J={setDataAttribute(g,s,u){g.setAttribute(`data-bs-${ae(s)}`,u)},removeDataAttribute(g,s){g.removeAttribute(`data-bs-${ae(s)}`)},getDataAttributes(g){if(!g)return{};const s={},u=Object.keys(g.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of u){let M=y.replace(/^bs/,"");M=M.charAt(0).toLowerCase()+M.slice(1,M.length),s[M]=q(g.dataset[y])}return s},getDataAttribute:(g,s)=>q(g.getAttribute(`data-bs-${ae(s)}`))};class tt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(s){return s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s}_mergeConfigObj(s,u){const y=c(u)?J.getDataAttribute(u,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...c(u)?J.getDataAttributes(u):{},...typeof s=="object"?s:{}}}_typeCheckConfig(s,u=this.constructor.DefaultType){for(const[M,V]of Object.entries(u)){const Q=s[M],G=c(Q)?"element":(y=Q)==null?`${y}`:Object.prototype.toString.call(y).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(V).test(G))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${M}" provided type "${G}" but expected type "${V}".`)}var y}}class ce extends tt{constructor(s,u){super(),(s=l(s))&&(this._element=s,this._config=this._getConfig(u),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const s of Object.getOwnPropertyNames(this))this[s]=null}_queueCallback(s,u,y=!0){E(s,u,y)}_getConfig(s){return s=this._mergeConfigObj(s,this._element),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}static getInstance(s){return n.get(l(s),this.DATA_KEY)}static getOrCreateInstance(s,u={}){return this.getInstance(s)||new this(s,typeof u=="object"?u:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(s){return`${s}${this.EVENT_KEY}`}}const ge=g=>{let s=g.getAttribute("data-bs-target");if(!s||s==="#"){let u=g.getAttribute("href");if(!u||!u.includes("#")&&!u.startsWith("."))return null;u.includes("#")&&!u.startsWith("#")&&(u=`#${u.split("#")[1]}`),s=u&&u!=="#"?u.trim():null}return s?s.split(",").map(u=>i(u)).join(","):null},ne={find:(g,s=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(s,g)),findOne:(g,s=document.documentElement)=>Element.prototype.querySelector.call(s,g),children:(g,s)=>[].concat(...g.children).filter(u=>u.matches(s)),parents(g,s){const u=[];let y=g.parentNode.closest(s);for(;y;)u.push(y),y=y.parentNode.closest(s);return u},prev(g,s){let u=g.previousElementSibling;for(;u;){if(u.matches(s))return[u];u=u.previousElementSibling}return[]},next(g,s){let u=g.nextElementSibling;for(;u;){if(u.matches(s))return[u];u=u.nextElementSibling}return[]},focusableChildren(g){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(u=>`${u}:not([tabindex^="-"])`).join(",");return this.find(s,g).filter(u=>!h(u)&&d(u))},getSelectorFromElement(g){const s=ge(g);return s&&ne.findOne(s)?s:null},getElementFromSelector(g){const s=ge(g);return s?ne.findOne(s):null},getMultipleElementsFromSelector(g){const s=ge(g);return s?ne.find(s):[]}},Ve=(g,s="hide")=>{const u=`click.dismiss${g.EVENT_KEY}`,y=g.NAME;S.on(document,u,`[data-bs-dismiss="${y}"]`,function(M){if(["A","AREA"].includes(this.tagName)&&M.preventDefault(),h(this))return;const V=ne.getElementFromSelector(this)||this.closest(`.${y}`);g.getOrCreateInstance(V)[s]()})},hn=".bs.alert",Ot=`close${hn}`,er=`closed${hn}`;class Sr extends ce{static get NAME(){return"alert"}close(){if(S.trigger(this._element,Ot).defaultPrevented)return;this._element.classList.remove("show");const s=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,s)}_destroyElement(){this._element.remove(),S.trigger(this._element,er),this.dispose()}static jQueryInterface(s){return this.each(function(){const u=Sr.getOrCreateInstance(this);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s](this)}})}}Ve(Sr,"close"),m(Sr);const En='[data-bs-toggle="button"]';class Lt extends ce{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(s){return this.each(function(){const u=Lt.getOrCreateInstance(this);s==="toggle"&&u[s]()})}}S.on(document,"click.bs.button.data-api",En,g=>{g.preventDefault();const s=g.target.closest(En);Lt.getOrCreateInstance(s).toggle()}),m(Lt);const tr=".bs.swipe",Fo=`touchstart${tr}`,Wn=`touchmove${tr}`,rr=`touchend${tr}`,hE=`pointerdown${tr}`,nr=`pointerup${tr}`,EE={endCallback:null,leftCallback:null,rightCallback:null},gE={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ui extends tt{constructor(s,u){super(),this._element=s,s&&Ui.isSupported()&&(this._config=this._getConfig(u),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return EE}static get DefaultType(){return gE}static get NAME(){return"swipe"}dispose(){S.off(this._element,tr)}_start(s){this._supportPointerEvents?this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX):this._deltaX=s.touches[0].clientX}_end(s){this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX-this._deltaX),this._handleSwipe(),p(this._config.endCallback)}_move(s){this._deltaX=s.touches&&s.touches.length>1?0:s.touches[0].clientX-this._deltaX}_handleSwipe(){const s=Math.abs(this._deltaX);if(s<=40)return;const u=s/this._deltaX;this._deltaX=0,u&&p(u>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,hE,s=>this._start(s)),S.on(this._element,nr,s=>this._end(s)),this._element.classList.add("pointer-event")):(S.on(this._element,Fo,s=>this._start(s)),S.on(this._element,Wn,s=>this._move(s)),S.on(this._element,rr,s=>this._end(s)))}_eventIsPointerPenTouch(s){return this._supportPointerEvents&&(s.pointerType==="pen"||s.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const gn=".bs.carousel",Kd=".data-api",P0="next",wo="prev",Do="left",Wi="right",CE=`slide${gn}`,ax=`slid${gn}`,BE=`keydown${gn}`,vE=`mouseenter${gn}`,AE=`mouseleave${gn}`,yE=`dragstart${gn}`,FE=`load${gn}${Kd}`,wE=`click${gn}${Kd}`,Zd="carousel",Qi="active",Jd=".active",eu=".carousel-item",DE=Jd+eu,bE={ArrowLeft:Wi,ArrowRight:Do},kE={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},_E={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class bo extends ce{constructor(s,u){super(s,u),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ne.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Zd&&this.cycle()}static get Default(){return kE}static get DefaultType(){return _E}static get NAME(){return"carousel"}next(){this._slide(P0)}nextWhenVisible(){!document.hidden&&d(this._element)&&this.next()}prev(){this._slide(wo)}pause(){this._isSliding&&x(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?S.one(this._element,ax,()=>this.cycle()):this.cycle())}to(s){const u=this._getItems();if(s>u.length-1||s<0)return;if(this._isSliding)return void S.one(this._element,ax,()=>this.to(s));const y=this._getItemIndex(this._getActive());if(y===s)return;const M=s>y?P0:wo;this._slide(M,u[s])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(s){return s.defaultInterval=s.interval,s}_addEventListeners(){this._config.keyboard&&S.on(this._element,BE,s=>this._keydown(s)),this._config.pause==="hover"&&(S.on(this._element,vE,()=>this.pause()),S.on(this._element,AE,()=>this._maybeEnableCycle())),this._config.touch&&Ui.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const u of ne.find(".carousel-item img",this._element))S.on(u,yE,y=>y.preventDefault());const s={leftCallback:()=>this._slide(this._directionToOrder(Do)),rightCallback:()=>this._slide(this._directionToOrder(Wi)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Ui(this._element,s)}_keydown(s){if(/input|textarea/i.test(s.target.tagName))return;const u=bE[s.key];u&&(s.preventDefault(),this._slide(this._directionToOrder(u)))}_getItemIndex(s){return this._getItems().indexOf(s)}_setActiveIndicatorElement(s){if(!this._indicatorsElement)return;const u=ne.findOne(Jd,this._indicatorsElement);u.classList.remove(Qi),u.removeAttribute("aria-current");const y=ne.findOne(`[data-bs-slide-to="${s}"]`,this._indicatorsElement);y&&(y.classList.add(Qi),y.setAttribute("aria-current","true"))}_updateInterval(){const s=this._activeElement||this._getActive();if(!s)return;const u=Number.parseInt(s.getAttribute("data-bs-interval"),10);this._config.interval=u||this._config.defaultInterval}_slide(s,u=null){if(this._isSliding)return;const y=this._getActive(),M=s===P0,V=u||C(this._getItems(),y,M,this._config.wrap);if(V===y)return;const Q=this._getItemIndex(V),G=Z=>S.trigger(this._element,Z,{relatedTarget:V,direction:this._orderToDirection(s),from:this._getItemIndex(y),to:Q});if(G(CE).defaultPrevented||!y||!V)return;const K=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Q),this._activeElement=V;const ee=M?"carousel-item-start":"carousel-item-end",re=M?"carousel-item-next":"carousel-item-prev";V.classList.add(re),A(V),y.classList.add(ee),V.classList.add(ee),this._queueCallback(()=>{V.classList.remove(ee,re),V.classList.add(Qi),y.classList.remove(Qi,re,ee),this._isSliding=!1,G(ax)},y,this._isAnimated()),K&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ne.findOne(DE,this._element)}_getItems(){return ne.find(eu,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(s){return _()?s===Do?wo:P0:s===Do?P0:wo}_orderToDirection(s){return _()?s===wo?Do:Wi:s===wo?Wi:Do}static jQueryInterface(s){return this.each(function(){const u=bo.getOrCreateInstance(this,s);if(typeof s!="number"){if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s]()}}else u.to(s)})}}S.on(document,wE,"[data-bs-slide], [data-bs-slide-to]",function(g){const s=ne.getElementFromSelector(this);if(!s||!s.classList.contains(Zd))return;g.preventDefault();const u=bo.getOrCreateInstance(s),y=this.getAttribute("data-bs-slide-to");return y?(u.to(y),void u._maybeEnableCycle()):J.getDataAttribute(this,"slide")==="next"?(u.next(),void u._maybeEnableCycle()):(u.prev(),void u._maybeEnableCycle())}),S.on(window,FE,()=>{const g=ne.find('[data-bs-ride="carousel"]');for(const s of g)bo.getOrCreateInstance(s)}),m(bo);const S0=".bs.collapse",jE=`show${S0}`,PE=`shown${S0}`,SE=`hide${S0}`,$E=`hidden${S0}`,NE=`click${S0}.data-api`,sx="show",ko="collapse",Yi="collapsing",TE=`:scope .${ko} .${ko}`,xx='[data-bs-toggle="collapse"]',zE={parent:null,toggle:!0},IE={parent:"(null|element)",toggle:"boolean"};class _o extends ce{constructor(s,u){super(s,u),this._isTransitioning=!1,this._triggerArray=[];const y=ne.find(xx);for(const M of y){const V=ne.getSelectorFromElement(M),Q=ne.find(V).filter(G=>G===this._element);V!==null&&Q.length&&this._triggerArray.push(M)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return zE}static get DefaultType(){return IE}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let s=[];if(this._config.parent&&(s=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(M=>M!==this._element).map(M=>_o.getOrCreateInstance(M,{toggle:!1}))),s.length&&s[0]._isTransitioning||S.trigger(this._element,jE).defaultPrevented)return;for(const M of s)M.hide();const u=this._getDimension();this._element.classList.remove(ko),this._element.classList.add(Yi),this._element.style[u]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const y=`scroll${u[0].toUpperCase()+u.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yi),this._element.classList.add(ko,sx),this._element.style[u]="",S.trigger(this._element,PE)},this._element,!0),this._element.style[u]=`${this._element[y]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,SE).defaultPrevented)return;const s=this._getDimension();this._element.style[s]=`${this._element.getBoundingClientRect()[s]}px`,A(this._element),this._element.classList.add(Yi),this._element.classList.remove(ko,sx);for(const u of this._triggerArray){const y=ne.getElementFromSelector(u);y&&!this._isShown(y)&&this._addAriaAndCollapsedClass([u],!1)}this._isTransitioning=!0,this._element.style[s]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yi),this._element.classList.add(ko),S.trigger(this._element,$E)},this._element,!0)}_isShown(s=this._element){return s.classList.contains(sx)}_configAfterMerge(s){return s.toggle=!!s.toggle,s.parent=l(s.parent),s}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const s=this._getFirstLevelChildren(xx);for(const u of s){const y=ne.getElementFromSelector(u);y&&this._addAriaAndCollapsedClass([u],this._isShown(y))}}_getFirstLevelChildren(s){const u=ne.find(TE,this._config.parent);return ne.find(s,this._config.parent).filter(y=>!u.includes(y))}_addAriaAndCollapsedClass(s,u){if(s.length)for(const y of s)y.classList.toggle("collapsed",!u),y.setAttribute("aria-expanded",u)}static jQueryInterface(s){const u={};return typeof s=="string"&&/show|hide/.test(s)&&(u.toggle=!1),this.each(function(){const y=_o.getOrCreateInstance(this,u);if(typeof s=="string"){if(y[s]===void 0)throw new TypeError(`No method named "${s}"`);y[s]()}})}}S.on(document,NE,xx,function(g){(g.target.tagName==="A"||g.delegateTarget&&g.delegateTarget.tagName==="A")&&g.preventDefault();for(const s of ne.getMultipleElementsFromSelector(this))_o.getOrCreateInstance(s,{toggle:!1}).toggle()}),m(_o);var At="top",Rt="bottom",Mt="right",yt="left",Gi="auto",jo=[At,Rt,Mt,yt],Qn="start",Po="end",tu="clippingParents",lx="viewport",So="popper",ru="reference",cx=jo.reduce(function(g,s){return g.concat([s+"-"+Qn,s+"-"+Po])},[]),dx=[].concat(jo,[Gi]).reduce(function(g,s){return g.concat([s,s+"-"+Qn,s+"-"+Po])},[]),nu="beforeRead",ou="read",iu="afterRead",au="beforeMain",su="main",xu="afterMain",lu="beforeWrite",cu="write",du="afterWrite",uu=[nu,ou,iu,au,su,xu,lu,cu,du];function $r(g){return g?(g.nodeName||"").toLowerCase():null}function Vt(g){if(g==null)return window;if(g.toString()!=="[object Window]"){var s=g.ownerDocument;return s&&s.defaultView||window}return g}function Yn(g){return g instanceof Vt(g).Element||g instanceof Element}function or(g){return g instanceof Vt(g).HTMLElement||g instanceof HTMLElement}function ux(g){return typeof ShadowRoot<"u"&&(g instanceof Vt(g).ShadowRoot||g instanceof ShadowRoot)}const mx={name:"applyStyles",enabled:!0,phase:"write",fn:function(g){var s=g.state;Object.keys(s.elements).forEach(function(u){var y=s.styles[u]||{},M=s.attributes[u]||{},V=s.elements[u];or(V)&&$r(V)&&(Object.assign(V.style,y),Object.keys(M).forEach(function(Q){var G=M[Q];G===!1?V.removeAttribute(Q):V.setAttribute(Q,G===!0?"":G)}))})},effect:function(g){var s=g.state,u={popper:{position:s.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(s.elements.popper.style,u.popper),s.styles=u,s.elements.arrow&&Object.assign(s.elements.arrow.style,u.arrow),function(){Object.keys(s.elements).forEach(function(y){var M=s.elements[y],V=s.attributes[y]||{},Q=Object.keys(s.styles.hasOwnProperty(y)?s.styles[y]:u[y]).reduce(function(G,K){return G[K]="",G},{});or(M)&&$r(M)&&(Object.assign(M.style,Q),Object.keys(V).forEach(function(G){M.removeAttribute(G)}))})}},requires:["computeStyles"]};function Nr(g){return g.split("-")[0]}var Gn=Math.max,qi=Math.min,$o=Math.round;function fx(){var g=navigator.userAgentData;return g!=null&&g.brands&&Array.isArray(g.brands)?g.brands.map(function(s){return s.brand+"/"+s.version}).join(" "):navigator.userAgent}function mu(){return!/^((?!chrome|android).)*safari/i.test(fx())}function No(g,s,u){s===void 0&&(s=!1),u===void 0&&(u=!1);var y=g.getBoundingClientRect(),M=1,V=1;s&&or(g)&&(M=g.offsetWidth>0&&$o(y.width)/g.offsetWidth||1,V=g.offsetHeight>0&&$o(y.height)/g.offsetHeight||1);var Q=(Yn(g)?Vt(g):window).visualViewport,G=!mu()&&u,K=(y.left+(G&&Q?Q.offsetLeft:0))/M,ee=(y.top+(G&&Q?Q.offsetTop:0))/V,re=y.width/M,Z=y.height/V;return{width:re,height:Z,top:ee,right:K+re,bottom:ee+Z,left:K,x:K,y:ee}}function px(g){var s=No(g),u=g.offsetWidth,y=g.offsetHeight;return Math.abs(s.width-u)<=1&&(u=s.width),Math.abs(s.height-y)<=1&&(y=s.height),{x:g.offsetLeft,y:g.offsetTop,width:u,height:y}}function fu(g,s){var u=s.getRootNode&&s.getRootNode();if(g.contains(s))return!0;if(u&&ux(u)){var y=s;do{if(y&&g.isSameNode(y))return!0;y=y.parentNode||y.host}while(y)}return!1}function Xr(g){return Vt(g).getComputedStyle(g)}function OE(g){return["table","td","th"].indexOf($r(g))>=0}function Cn(g){return((Yn(g)?g.ownerDocument:g.document)||window.document).documentElement}function Xi(g){return $r(g)==="html"?g:g.assignedSlot||g.parentNode||(ux(g)?g.host:null)||Cn(g)}function pu(g){return or(g)&&Xr(g).position!=="fixed"?g.offsetParent:null}function $0(g){for(var s=Vt(g),u=pu(g);u&&OE(u)&&Xr(u).position==="static";)u=pu(u);return u&&($r(u)==="html"||$r(u)==="body"&&Xr(u).position==="static")?s:u||function(y){var M=/firefox/i.test(fx());if(/Trident/i.test(fx())&&or(y)&&Xr(y).position==="fixed")return null;var V=Xi(y);for(ux(V)&&(V=V.host);or(V)&&["html","body"].indexOf($r(V))<0;){var Q=Xr(V);if(Q.transform!=="none"||Q.perspective!=="none"||Q.contain==="paint"||["transform","perspective"].indexOf(Q.willChange)!==-1||M&&Q.willChange==="filter"||M&&Q.filter&&Q.filter!=="none")return V;V=V.parentNode}return null}(g)||s}function hx(g){return["top","bottom"].indexOf(g)>=0?"x":"y"}function N0(g,s,u){return Gn(g,qi(s,u))}function hu(g){return Object.assign({},{top:0,right:0,bottom:0,left:0},g)}function Eu(g,s){return s.reduce(function(u,y){return u[y]=g,u},{})}const gu={name:"arrow",enabled:!0,phase:"main",fn:function(g){var s,u=g.state,y=g.name,M=g.options,V=u.elements.arrow,Q=u.modifiersData.popperOffsets,G=Nr(u.placement),K=hx(G),ee=[yt,Mt].indexOf(G)>=0?"height":"width";if(V&&Q){var re=function(De,Ae){return hu(typeof(De=typeof De=="function"?De(Object.assign({},Ae.rects,{placement:Ae.placement})):De)!="number"?De:Eu(De,jo))}(M.padding,u),Z=px(V),le=K==="y"?At:yt,oe=K==="y"?Rt:Mt,se=u.rects.reference[ee]+u.rects.reference[K]-Q[K]-u.rects.popper[ee],ie=Q[K]-u.rects.reference[K],xe=$0(V),we=xe?K==="y"?xe.clientHeight||0:xe.clientWidth||0:0,Pe=se/2-ie/2,me=re[le],Ce=we-Z[ee]-re[oe],de=we/2-Z[ee]/2+Pe,pe=N0(me,de,Ce),ve=K;u.modifiersData[y]=((s={})[ve]=pe,s.centerOffset=pe-de,s)}},effect:function(g){var s=g.state,u=g.options.element,y=u===void 0?"[data-popper-arrow]":u;y!=null&&(typeof y!="string"||(y=s.elements.popper.querySelector(y)))&&fu(s.elements.popper,y)&&(s.elements.arrow=y)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function To(g){return g.split("-")[1]}var LE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Cu(g){var s,u=g.popper,y=g.popperRect,M=g.placement,V=g.variation,Q=g.offsets,G=g.position,K=g.gpuAcceleration,ee=g.adaptive,re=g.roundOffsets,Z=g.isFixed,le=Q.x,oe=le===void 0?0:le,se=Q.y,ie=se===void 0?0:se,xe=typeof re=="function"?re({x:oe,y:ie}):{x:oe,y:ie};oe=xe.x,ie=xe.y;var we=Q.hasOwnProperty("x"),Pe=Q.hasOwnProperty("y"),me=yt,Ce=At,de=window;if(ee){var pe=$0(u),ve="clientHeight",De="clientWidth";pe===Vt(u)&&Xr(pe=Cn(u)).position!=="static"&&G==="absolute"&&(ve="scrollHeight",De="scrollWidth"),(M===At||(M===yt||M===Mt)&&V===Po)&&(Ce=Rt,ie-=(Z&&pe===de&&de.visualViewport?de.visualViewport.height:pe[ve])-y.height,ie*=K?1:-1),M!==yt&&(M!==At&&M!==Rt||V!==Po)||(me=Mt,oe-=(Z&&pe===de&&de.visualViewport?de.visualViewport.width:pe[De])-y.width,oe*=K?1:-1)}var Ae,Je=Object.assign({position:G},ee&&LE),Ht=re===!0?function(Br,Ft){var ar=Br.x,sr=Br.y,qe=Ft.devicePixelRatio||1;return{x:$o(ar*qe)/qe||0,y:$o(sr*qe)/qe||0}}({x:oe,y:ie},Vt(u)):{x:oe,y:ie};return oe=Ht.x,ie=Ht.y,K?Object.assign({},Je,((Ae={})[Ce]=Pe?"0":"",Ae[me]=we?"0":"",Ae.transform=(de.devicePixelRatio||1)<=1?"translate("+oe+"px, "+ie+"px)":"translate3d("+oe+"px, "+ie+"px, 0)",Ae)):Object.assign({},Je,((s={})[Ce]=Pe?ie+"px":"",s[me]=we?oe+"px":"",s.transform="",s))}const Ex={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(g){var s=g.state,u=g.options,y=u.gpuAcceleration,M=y===void 0||y,V=u.adaptive,Q=V===void 0||V,G=u.roundOffsets,K=G===void 0||G,ee={placement:Nr(s.placement),variation:To(s.placement),popper:s.elements.popper,popperRect:s.rects.popper,gpuAcceleration:M,isFixed:s.options.strategy==="fixed"};s.modifiersData.popperOffsets!=null&&(s.styles.popper=Object.assign({},s.styles.popper,Cu(Object.assign({},ee,{offsets:s.modifiersData.popperOffsets,position:s.options.strategy,adaptive:Q,roundOffsets:K})))),s.modifiersData.arrow!=null&&(s.styles.arrow=Object.assign({},s.styles.arrow,Cu(Object.assign({},ee,{offsets:s.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:K})))),s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-placement":s.placement})},data:{}};var Ki={passive:!0};const gx={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(g){var s=g.state,u=g.instance,y=g.options,M=y.scroll,V=M===void 0||M,Q=y.resize,G=Q===void 0||Q,K=Vt(s.elements.popper),ee=[].concat(s.scrollParents.reference,s.scrollParents.popper);return V&&ee.forEach(function(re){re.addEventListener("scroll",u.update,Ki)}),G&&K.addEventListener("resize",u.update,Ki),function(){V&&ee.forEach(function(re){re.removeEventListener("scroll",u.update,Ki)}),G&&K.removeEventListener("resize",u.update,Ki)}},data:{}};var RE={left:"right",right:"left",bottom:"top",top:"bottom"};function Zi(g){return g.replace(/left|right|bottom|top/g,function(s){return RE[s]})}var ME={start:"end",end:"start"};function Bu(g){return g.replace(/start|end/g,function(s){return ME[s]})}function Cx(g){var s=Vt(g);return{scrollLeft:s.pageXOffset,scrollTop:s.pageYOffset}}function Bx(g){return No(Cn(g)).left+Cx(g).scrollLeft}function vx(g){var s=Xr(g),u=s.overflow,y=s.overflowX,M=s.overflowY;return/auto|scroll|overlay|hidden/.test(u+M+y)}function vu(g){return["html","body","#document"].indexOf($r(g))>=0?g.ownerDocument.body:or(g)&&vx(g)?g:vu(Xi(g))}function T0(g,s){var u;s===void 0&&(s=[]);var y=vu(g),M=y===((u=g.ownerDocument)==null?void 0:u.body),V=Vt(y),Q=M?[V].concat(V.visualViewport||[],vx(y)?y:[]):y,G=s.concat(Q);return M?G:G.concat(T0(Xi(Q)))}function Ax(g){return Object.assign({},g,{left:g.x,top:g.y,right:g.x+g.width,bottom:g.y+g.height})}function Au(g,s,u){return s===lx?Ax(function(y,M){var V=Vt(y),Q=Cn(y),G=V.visualViewport,K=Q.clientWidth,ee=Q.clientHeight,re=0,Z=0;if(G){K=G.width,ee=G.height;var le=mu();(le||!le&&M==="fixed")&&(re=G.offsetLeft,Z=G.offsetTop)}return{width:K,height:ee,x:re+Bx(y),y:Z}}(g,u)):Yn(s)?function(y,M){var V=No(y,!1,M==="fixed");return V.top=V.top+y.clientTop,V.left=V.left+y.clientLeft,V.bottom=V.top+y.clientHeight,V.right=V.left+y.clientWidth,V.width=y.clientWidth,V.height=y.clientHeight,V.x=V.left,V.y=V.top,V}(s,u):Ax(function(y){var M,V=Cn(y),Q=Cx(y),G=(M=y.ownerDocument)==null?void 0:M.body,K=Gn(V.scrollWidth,V.clientWidth,G?G.scrollWidth:0,G?G.clientWidth:0),ee=Gn(V.scrollHeight,V.clientHeight,G?G.scrollHeight:0,G?G.clientHeight:0),re=-Q.scrollLeft+Bx(y),Z=-Q.scrollTop;return Xr(G||V).direction==="rtl"&&(re+=Gn(V.clientWidth,G?G.clientWidth:0)-K),{width:K,height:ee,x:re,y:Z}}(Cn(g)))}function yu(g){var s,u=g.reference,y=g.element,M=g.placement,V=M?Nr(M):null,Q=M?To(M):null,G=u.x+u.width/2-y.width/2,K=u.y+u.height/2-y.height/2;switch(V){case At:s={x:G,y:u.y-y.height};break;case Rt:s={x:G,y:u.y+u.height};break;case Mt:s={x:u.x+u.width,y:K};break;case yt:s={x:u.x-y.width,y:K};break;default:s={x:u.x,y:u.y}}var ee=V?hx(V):null;if(ee!=null){var re=ee==="y"?"height":"width";switch(Q){case Qn:s[ee]=s[ee]-(u[re]/2-y[re]/2);break;case Po:s[ee]=s[ee]+(u[re]/2-y[re]/2)}}return s}function zo(g,s){s===void 0&&(s={});var u=s,y=u.placement,M=y===void 0?g.placement:y,V=u.strategy,Q=V===void 0?g.strategy:V,G=u.boundary,K=G===void 0?tu:G,ee=u.rootBoundary,re=ee===void 0?lx:ee,Z=u.elementContext,le=Z===void 0?So:Z,oe=u.altBoundary,se=oe!==void 0&&oe,ie=u.padding,xe=ie===void 0?0:ie,we=hu(typeof xe!="number"?xe:Eu(xe,jo)),Pe=le===So?ru:So,me=g.rects.popper,Ce=g.elements[se?Pe:le],de=function(Ft,ar,sr,qe){var Tr=ar==="clippingParents"?function(_e){var wt=T0(Xi(_e)),xr=["absolute","fixed"].indexOf(Xr(_e).position)>=0&&or(_e)?$0(_e):_e;return Yn(xr)?wt.filter(function(vn){return Yn(vn)&&fu(vn,xr)&&$r(vn)!=="body"}):[]}(Ft):[].concat(ar),zr=[].concat(Tr,[sr]),Lo=zr[0],xt=zr.reduce(function(_e,wt){var xr=Au(Ft,wt,qe);return _e.top=Gn(xr.top,_e.top),_e.right=qi(xr.right,_e.right),_e.bottom=qi(xr.bottom,_e.bottom),_e.left=Gn(xr.left,_e.left),_e},Au(Ft,Lo,qe));return xt.width=xt.right-xt.left,xt.height=xt.bottom-xt.top,xt.x=xt.left,xt.y=xt.top,xt}(Yn(Ce)?Ce:Ce.contextElement||Cn(g.elements.popper),K,re,Q),pe=No(g.elements.reference),ve=yu({reference:pe,element:me,strategy:"absolute",placement:M}),De=Ax(Object.assign({},me,ve)),Ae=le===So?De:pe,Je={top:de.top-Ae.top+we.top,bottom:Ae.bottom-de.bottom+we.bottom,left:de.left-Ae.left+we.left,right:Ae.right-de.right+we.right},Ht=g.modifiersData.offset;if(le===So&&Ht){var Br=Ht[M];Object.keys(Je).forEach(function(Ft){var ar=[Mt,Rt].indexOf(Ft)>=0?1:-1,sr=[At,Rt].indexOf(Ft)>=0?"y":"x";Je[Ft]+=Br[sr]*ar})}return Je}function VE(g,s){s===void 0&&(s={});var u=s,y=u.placement,M=u.boundary,V=u.rootBoundary,Q=u.padding,G=u.flipVariations,K=u.allowedAutoPlacements,ee=K===void 0?dx:K,re=To(y),Z=re?G?cx:cx.filter(function(se){return To(se)===re}):jo,le=Z.filter(function(se){return ee.indexOf(se)>=0});le.length===0&&(le=Z);var oe=le.reduce(function(se,ie){return se[ie]=zo(g,{placement:ie,boundary:M,rootBoundary:V,padding:Q})[Nr(ie)],se},{});return Object.keys(oe).sort(function(se,ie){return oe[se]-oe[ie]})}const Fu={name:"flip",enabled:!0,phase:"main",fn:function(g){var s=g.state,u=g.options,y=g.name;if(!s.modifiersData[y]._skip){for(var M=u.mainAxis,V=M===void 0||M,Q=u.altAxis,G=Q===void 0||Q,K=u.fallbackPlacements,ee=u.padding,re=u.boundary,Z=u.rootBoundary,le=u.altBoundary,oe=u.flipVariations,se=oe===void 0||oe,ie=u.allowedAutoPlacements,xe=s.options.placement,we=Nr(xe),Pe=K||(we!==xe&&se?function(_e){if(Nr(_e)===Gi)return[];var wt=Zi(_e);return[Bu(_e),wt,Bu(wt)]}(xe):[Zi(xe)]),me=[xe].concat(Pe).reduce(function(_e,wt){return _e.concat(Nr(wt)===Gi?VE(s,{placement:wt,boundary:re,rootBoundary:Z,padding:ee,flipVariations:se,allowedAutoPlacements:ie}):wt)},[]),Ce=s.rects.reference,de=s.rects.popper,pe=new Map,ve=!0,De=me[0],Ae=0;Ae<me.length;Ae++){var Je=me[Ae],Ht=Nr(Je),Br=To(Je)===Qn,Ft=[At,Rt].indexOf(Ht)>=0,ar=Ft?"width":"height",sr=zo(s,{placement:Je,boundary:re,rootBoundary:Z,altBoundary:le,padding:ee}),qe=Ft?Br?Mt:yt:Br?Rt:At;Ce[ar]>de[ar]&&(qe=Zi(qe));var Tr=Zi(qe),zr=[];if(V&&zr.push(sr[Ht]<=0),G&&zr.push(sr[qe]<=0,sr[Tr]<=0),zr.every(function(_e){return _e})){De=Je,ve=!1;break}pe.set(Je,zr)}if(ve)for(var Lo=function(_e){var wt=me.find(function(xr){var vn=pe.get(xr);if(vn)return vn.slice(0,_e).every(function(sa){return sa})});if(wt)return De=wt,"break"},xt=se?3:1;xt>0&&Lo(xt)!=="break";xt--);s.placement!==De&&(s.modifiersData[y]._skip=!0,s.placement=De,s.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function wu(g,s,u){return u===void 0&&(u={x:0,y:0}),{top:g.top-s.height-u.y,right:g.right-s.width+u.x,bottom:g.bottom-s.height+u.y,left:g.left-s.width-u.x}}function Du(g){return[At,Mt,Rt,yt].some(function(s){return g[s]>=0})}const bu={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(g){var s=g.state,u=g.name,y=s.rects.reference,M=s.rects.popper,V=s.modifiersData.preventOverflow,Q=zo(s,{elementContext:"reference"}),G=zo(s,{altBoundary:!0}),K=wu(Q,y),ee=wu(G,M,V),re=Du(K),Z=Du(ee);s.modifiersData[u]={referenceClippingOffsets:K,popperEscapeOffsets:ee,isReferenceHidden:re,hasPopperEscaped:Z},s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-reference-hidden":re,"data-popper-escaped":Z})}},ku={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(g){var s=g.state,u=g.options,y=g.name,M=u.offset,V=M===void 0?[0,0]:M,Q=dx.reduce(function(re,Z){return re[Z]=function(le,oe,se){var ie=Nr(le),xe=[yt,At].indexOf(ie)>=0?-1:1,we=typeof se=="function"?se(Object.assign({},oe,{placement:le})):se,Pe=we[0],me=we[1];return Pe=Pe||0,me=(me||0)*xe,[yt,Mt].indexOf(ie)>=0?{x:me,y:Pe}:{x:Pe,y:me}}(Z,s.rects,V),re},{}),G=Q[s.placement],K=G.x,ee=G.y;s.modifiersData.popperOffsets!=null&&(s.modifiersData.popperOffsets.x+=K,s.modifiersData.popperOffsets.y+=ee),s.modifiersData[y]=Q}},yx={name:"popperOffsets",enabled:!0,phase:"read",fn:function(g){var s=g.state,u=g.name;s.modifiersData[u]=yu({reference:s.rects.reference,element:s.rects.popper,strategy:"absolute",placement:s.placement})},data:{}},_u={name:"preventOverflow",enabled:!0,phase:"main",fn:function(g){var s=g.state,u=g.options,y=g.name,M=u.mainAxis,V=M===void 0||M,Q=u.altAxis,G=Q!==void 0&&Q,K=u.boundary,ee=u.rootBoundary,re=u.altBoundary,Z=u.padding,le=u.tether,oe=le===void 0||le,se=u.tetherOffset,ie=se===void 0?0:se,xe=zo(s,{boundary:K,rootBoundary:ee,padding:Z,altBoundary:re}),we=Nr(s.placement),Pe=To(s.placement),me=!Pe,Ce=hx(we),de=Ce==="x"?"y":"x",pe=s.modifiersData.popperOffsets,ve=s.rects.reference,De=s.rects.popper,Ae=typeof ie=="function"?ie(Object.assign({},s.rects,{placement:s.placement})):ie,Je=typeof Ae=="number"?{mainAxis:Ae,altAxis:Ae}:Object.assign({mainAxis:0,altAxis:0},Ae),Ht=s.modifiersData.offset?s.modifiersData.offset[s.placement]:null,Br={x:0,y:0};if(pe){if(V){var Ft,ar=Ce==="y"?At:yt,sr=Ce==="y"?Rt:Mt,qe=Ce==="y"?"height":"width",Tr=pe[Ce],zr=Tr+xe[ar],Lo=Tr-xe[sr],xt=oe?-De[qe]/2:0,_e=Pe===Qn?ve[qe]:De[qe],wt=Pe===Qn?-De[qe]:-ve[qe],xr=s.elements.arrow,vn=oe&&xr?px(xr):{width:0,height:0},sa=s.modifiersData["arrow#persistent"]?s.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},pm=sa[ar],hm=sa[sr],xa=N0(0,ve[qe],vn[qe]),Eg=me?ve[qe]/2-xt-xa-pm-Je.mainAxis:_e-xa-pm-Je.mainAxis,gg=me?-ve[qe]/2+xt+xa+hm+Je.mainAxis:wt+xa+hm+Je.mainAxis,zx=s.elements.arrow&&$0(s.elements.arrow),Cg=zx?Ce==="y"?zx.clientTop||0:zx.clientLeft||0:0,Em=(Ft=Ht==null?void 0:Ht[Ce])!=null?Ft:0,Bg=Tr+gg-Em,gm=N0(oe?qi(zr,Tr+Eg-Em-Cg):zr,Tr,oe?Gn(Lo,Bg):Lo);pe[Ce]=gm,Br[Ce]=gm-Tr}if(G){var Cm,vg=Ce==="x"?At:yt,Ag=Ce==="x"?Rt:Mt,ro=pe[de],la=de==="y"?"height":"width",Bm=ro+xe[vg],vm=ro-xe[Ag],Ix=[At,yt].indexOf(we)!==-1,Am=(Cm=Ht==null?void 0:Ht[de])!=null?Cm:0,ym=Ix?Bm:ro-ve[la]-De[la]-Am+Je.altAxis,Fm=Ix?ro+ve[la]+De[la]-Am-Je.altAxis:vm,wm=oe&&Ix?function(yg,Fg,Ox){var Dm=N0(yg,Fg,Ox);return Dm>Ox?Ox:Dm}(ym,ro,Fm):N0(oe?ym:Bm,ro,oe?Fm:vm);pe[de]=wm,Br[de]=wm-ro}s.modifiersData[y]=Br}},requiresIfExists:["offset"]};function HE(g,s,u){u===void 0&&(u=!1);var y,M,V=or(s),Q=or(s)&&function(Z){var le=Z.getBoundingClientRect(),oe=$o(le.width)/Z.offsetWidth||1,se=$o(le.height)/Z.offsetHeight||1;return oe!==1||se!==1}(s),G=Cn(s),K=No(g,Q,u),ee={scrollLeft:0,scrollTop:0},re={x:0,y:0};return(V||!V&&!u)&&(($r(s)!=="body"||vx(G))&&(ee=(y=s)!==Vt(y)&&or(y)?{scrollLeft:(M=y).scrollLeft,scrollTop:M.scrollTop}:Cx(y)),or(s)?((re=No(s,!0)).x+=s.clientLeft,re.y+=s.clientTop):G&&(re.x=Bx(G))),{x:K.left+ee.scrollLeft-re.x,y:K.top+ee.scrollTop-re.y,width:K.width,height:K.height}}function UE(g){var s=new Map,u=new Set,y=[];function M(V){u.add(V.name),[].concat(V.requires||[],V.requiresIfExists||[]).forEach(function(Q){if(!u.has(Q)){var G=s.get(Q);G&&M(G)}}),y.push(V)}return g.forEach(function(V){s.set(V.name,V)}),g.forEach(function(V){u.has(V.name)||M(V)}),y}var ju={placement:"bottom",modifiers:[],strategy:"absolute"};function Pu(){for(var g=arguments.length,s=new Array(g),u=0;u<g;u++)s[u]=arguments[u];return!s.some(function(y){return!(y&&typeof y.getBoundingClientRect=="function")})}function Ji(g){g===void 0&&(g={});var s=g,u=s.defaultModifiers,y=u===void 0?[]:u,M=s.defaultOptions,V=M===void 0?ju:M;return function(Q,G,K){K===void 0&&(K=V);var ee,re,Z={placement:"bottom",orderedModifiers:[],options:Object.assign({},ju,V),modifiersData:{},elements:{reference:Q,popper:G},attributes:{},styles:{}},le=[],oe=!1,se={state:Z,setOptions:function(xe){var we=typeof xe=="function"?xe(Z.options):xe;ie(),Z.options=Object.assign({},V,Z.options,we),Z.scrollParents={reference:Yn(Q)?T0(Q):Q.contextElement?T0(Q.contextElement):[],popper:T0(G)};var Pe,me,Ce=function(de){var pe=UE(de);return uu.reduce(function(ve,De){return ve.concat(pe.filter(function(Ae){return Ae.phase===De}))},[])}((Pe=[].concat(y,Z.options.modifiers),me=Pe.reduce(function(de,pe){var ve=de[pe.name];return de[pe.name]=ve?Object.assign({},ve,pe,{options:Object.assign({},ve.options,pe.options),data:Object.assign({},ve.data,pe.data)}):pe,de},{}),Object.keys(me).map(function(de){return me[de]})));return Z.orderedModifiers=Ce.filter(function(de){return de.enabled}),Z.orderedModifiers.forEach(function(de){var pe=de.name,ve=de.options,De=ve===void 0?{}:ve,Ae=de.effect;if(typeof Ae=="function"){var Je=Ae({state:Z,name:pe,instance:se,options:De});le.push(Je||function(){})}}),se.update()},forceUpdate:function(){if(!oe){var xe=Z.elements,we=xe.reference,Pe=xe.popper;if(Pu(we,Pe)){Z.rects={reference:HE(we,$0(Pe),Z.options.strategy==="fixed"),popper:px(Pe)},Z.reset=!1,Z.placement=Z.options.placement,Z.orderedModifiers.forEach(function(Ae){return Z.modifiersData[Ae.name]=Object.assign({},Ae.data)});for(var me=0;me<Z.orderedModifiers.length;me++)if(Z.reset!==!0){var Ce=Z.orderedModifiers[me],de=Ce.fn,pe=Ce.options,ve=pe===void 0?{}:pe,De=Ce.name;typeof de=="function"&&(Z=de({state:Z,options:ve,name:De,instance:se})||Z)}else Z.reset=!1,me=-1}}},update:(ee=function(){return new Promise(function(xe){se.forceUpdate(),xe(Z)})},function(){return re||(re=new Promise(function(xe){Promise.resolve().then(function(){re=void 0,xe(ee())})})),re}),destroy:function(){ie(),oe=!0}};if(!Pu(Q,G))return se;function ie(){le.forEach(function(xe){return xe()}),le=[]}return se.setOptions(K).then(function(xe){!oe&&K.onFirstUpdate&&K.onFirstUpdate(xe)}),se}}var WE=Ji(),QE=Ji({defaultModifiers:[gx,yx,Ex,mx]}),Fx=Ji({defaultModifiers:[gx,yx,Ex,mx,ku,Fu,_u,gu,bu]});const Su=Object.freeze(Object.defineProperty({__proto__:null,afterMain:xu,afterRead:iu,afterWrite:du,applyStyles:mx,arrow:gu,auto:Gi,basePlacements:jo,beforeMain:au,beforeRead:nu,beforeWrite:lu,bottom:Rt,clippingParents:tu,computeStyles:Ex,createPopper:Fx,createPopperBase:WE,createPopperLite:QE,detectOverflow:zo,end:Po,eventListeners:gx,flip:Fu,hide:bu,left:yt,main:su,modifierPhases:uu,offset:ku,placements:dx,popper:So,popperGenerator:Ji,popperOffsets:yx,preventOverflow:_u,read:ou,reference:ru,right:Mt,start:Qn,top:At,variationPlacements:cx,viewport:lx,write:cu},Symbol.toStringTag,{value:"Module"})),$u="dropdown",qn=".bs.dropdown",wx=".data-api",YE="ArrowUp",Nu="ArrowDown",GE=`hide${qn}`,qE=`hidden${qn}`,XE=`show${qn}`,KE=`shown${qn}`,Tu=`click${qn}${wx}`,zu=`keydown${qn}${wx}`,ZE=`keyup${qn}${wx}`,Io="show",Xn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',JE=`${Xn}.${Io}`,ea=".dropdown-menu",e1=_()?"top-end":"top-start",t1=_()?"top-start":"top-end",r1=_()?"bottom-end":"bottom-start",n1=_()?"bottom-start":"bottom-end",o1=_()?"left-start":"right-start",i1=_()?"right-start":"left-start",a1={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},s1={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Cr extends ce{constructor(s,u){super(s,u),this._popper=null,this._parent=this._element.parentNode,this._menu=ne.next(this._element,ea)[0]||ne.prev(this._element,ea)[0]||ne.findOne(ea,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return a1}static get DefaultType(){return s1}static get NAME(){return $u}toggle(){return this._isShown()?this.hide():this.show()}show(){if(h(this._element)||this._isShown())return;const s={relatedTarget:this._element};if(!S.trigger(this._element,XE,s).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const u of[].concat(...document.body.children))S.on(u,"mouseover",B);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Io),this._element.classList.add(Io),S.trigger(this._element,KE,s)}}hide(){if(h(this._element)||!this._isShown())return;const s={relatedTarget:this._element};this._completeHide(s)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(s){if(!S.trigger(this._element,GE,s).defaultPrevented){if("ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))S.off(u,"mouseover",B);this._popper&&this._popper.destroy(),this._menu.classList.remove(Io),this._element.classList.remove(Io),this._element.setAttribute("aria-expanded","false"),J.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,qE,s)}}_getConfig(s){if(typeof(s=super._getConfig(s)).reference=="object"&&!c(s.reference)&&typeof s.reference.getBoundingClientRect!="function")throw new TypeError(`${$u.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return s}_createPopper(){if(Su===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let s=this._element;this._config.reference==="parent"?s=this._parent:c(this._config.reference)?s=l(this._config.reference):typeof this._config.reference=="object"&&(s=this._config.reference);const u=this._getPopperConfig();this._popper=Fx(s,this._menu,u)}_isShown(){return this._menu.classList.contains(Io)}_getPlacement(){const s=this._parent;if(s.classList.contains("dropend"))return o1;if(s.classList.contains("dropstart"))return i1;if(s.classList.contains("dropup-center"))return"top";if(s.classList.contains("dropdown-center"))return"bottom";const u=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return s.classList.contains("dropup")?u?t1:e1:u?n1:r1}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(u=>Number.parseInt(u,10)):typeof s=="function"?u=>s(u,this._element):s}_getPopperConfig(){const s={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(J.setDataAttribute(this._menu,"popper","static"),s.modifiers=[{name:"applyStyles",enabled:!1}]),{...s,...p(this._config.popperConfig,[s])}}_selectMenuItem({key:s,target:u}){const y=ne.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(M=>d(M));y.length&&C(y,u,s===Nu,!y.includes(u)).focus()}static jQueryInterface(s){return this.each(function(){const u=Cr.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s]()}})}static clearMenus(s){if(s.button===2||s.type==="keyup"&&s.key!=="Tab")return;const u=ne.find(JE);for(const y of u){const M=Cr.getInstance(y);if(!M||M._config.autoClose===!1)continue;const V=s.composedPath(),Q=V.includes(M._menu);if(V.includes(M._element)||M._config.autoClose==="inside"&&!Q||M._config.autoClose==="outside"&&Q||M._menu.contains(s.target)&&(s.type==="keyup"&&s.key==="Tab"||/input|select|option|textarea|form/i.test(s.target.tagName)))continue;const G={relatedTarget:M._element};s.type==="click"&&(G.clickEvent=s),M._completeHide(G)}}static dataApiKeydownHandler(s){const u=/input|textarea/i.test(s.target.tagName),y=s.key==="Escape",M=[YE,Nu].includes(s.key);if(!M&&!y||u&&!y)return;s.preventDefault();const V=this.matches(Xn)?this:ne.prev(this,Xn)[0]||ne.next(this,Xn)[0]||ne.findOne(Xn,s.delegateTarget.parentNode),Q=Cr.getOrCreateInstance(V);if(M)return s.stopPropagation(),Q.show(),void Q._selectMenuItem(s);Q._isShown()&&(s.stopPropagation(),Q.hide(),V.focus())}}S.on(document,zu,Xn,Cr.dataApiKeydownHandler),S.on(document,zu,ea,Cr.dataApiKeydownHandler),S.on(document,Tu,Cr.clearMenus),S.on(document,ZE,Cr.clearMenus),S.on(document,Tu,Xn,function(g){g.preventDefault(),Cr.getOrCreateInstance(this).toggle()}),m(Cr);const Iu="backdrop",Ou="show",Lu=`mousedown.bs.${Iu}`,x1={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},l1={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ru extends tt{constructor(s){super(),this._config=this._getConfig(s),this._isAppended=!1,this._element=null}static get Default(){return x1}static get DefaultType(){return l1}static get NAME(){return Iu}show(s){if(!this._config.isVisible)return void p(s);this._append();const u=this._getElement();this._config.isAnimated&&A(u),u.classList.add(Ou),this._emulateAnimation(()=>{p(s)})}hide(s){this._config.isVisible?(this._getElement().classList.remove(Ou),this._emulateAnimation(()=>{this.dispose(),p(s)})):p(s)}dispose(){this._isAppended&&(S.off(this._element,Lu),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const s=document.createElement("div");s.className=this._config.className,this._config.isAnimated&&s.classList.add("fade"),this._element=s}return this._element}_configAfterMerge(s){return s.rootElement=l(s.rootElement),s}_append(){if(this._isAppended)return;const s=this._getElement();this._config.rootElement.append(s),S.on(s,Lu,()=>{p(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(s){E(s,this._getElement(),this._config.isAnimated)}}const ta=".bs.focustrap",c1=`focusin${ta}`,d1=`keydown.tab${ta}`,Mu="backward",u1={autofocus:!0,trapElement:null},m1={autofocus:"boolean",trapElement:"element"};class Vu extends tt{constructor(s){super(),this._config=this._getConfig(s),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return u1}static get DefaultType(){return m1}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,ta),S.on(document,c1,s=>this._handleFocusin(s)),S.on(document,d1,s=>this._handleKeydown(s)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,ta))}_handleFocusin(s){const{trapElement:u}=this._config;if(s.target===document||s.target===u||u.contains(s.target))return;const y=ne.focusableChildren(u);y.length===0?u.focus():this._lastTabNavDirection===Mu?y[y.length-1].focus():y[0].focus()}_handleKeydown(s){s.key==="Tab"&&(this._lastTabNavDirection=s.shiftKey?Mu:"forward")}}const Hu=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Uu=".sticky-top",ra="padding-right",Wu="margin-right";class Dx{constructor(){this._element=document.body}getWidth(){const s=document.documentElement.clientWidth;return Math.abs(window.innerWidth-s)}hide(){const s=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ra,u=>u+s),this._setElementAttributes(Hu,ra,u=>u+s),this._setElementAttributes(Uu,Wu,u=>u-s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ra),this._resetElementAttributes(Hu,ra),this._resetElementAttributes(Uu,Wu)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(s,u,y){const M=this.getWidth();this._applyManipulationCallback(s,V=>{if(V!==this._element&&window.innerWidth>V.clientWidth+M)return;this._saveInitialAttribute(V,u);const Q=window.getComputedStyle(V).getPropertyValue(u);V.style.setProperty(u,`${y(Number.parseFloat(Q))}px`)})}_saveInitialAttribute(s,u){const y=s.style.getPropertyValue(u);y&&J.setDataAttribute(s,u,y)}_resetElementAttributes(s,u){this._applyManipulationCallback(s,y=>{const M=J.getDataAttribute(y,u);M!==null?(J.removeDataAttribute(y,u),y.style.setProperty(u,M)):y.style.removeProperty(u)})}_applyManipulationCallback(s,u){if(c(s))u(s);else for(const y of ne.find(s,this._element))u(y)}}const ir=".bs.modal",f1=`hide${ir}`,p1=`hidePrevented${ir}`,Qu=`hidden${ir}`,Yu=`show${ir}`,h1=`shown${ir}`,E1=`resize${ir}`,g1=`click.dismiss${ir}`,C1=`mousedown.dismiss${ir}`,B1=`keydown.dismiss${ir}`,v1=`click${ir}.data-api`,Gu="modal-open",qu="show",bx="modal-static",A1={backdrop:!0,focus:!0,keyboard:!0},y1={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Kn extends ce{constructor(s,u){super(s,u),this._dialog=ne.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Dx,this._addEventListeners()}static get Default(){return A1}static get DefaultType(){return y1}static get NAME(){return"modal"}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||this._isTransitioning||S.trigger(this._element,Yu,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Gu),this._adjustDialog(),this._backdrop.show(()=>this._showElement(s)))}hide(){this._isShown&&!this._isTransitioning&&(S.trigger(this._element,f1).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(qu),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){S.off(window,ir),S.off(this._dialog,ir),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ru({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Vu({trapElement:this._element})}_showElement(s){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const u=ne.findOne(".modal-body",this._dialog);u&&(u.scrollTop=0),A(this._element),this._element.classList.add(qu),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,h1,{relatedTarget:s})},this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,B1,s=>{s.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),S.on(window,E1,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,C1,s=>{S.one(this._element,g1,u=>{this._element===s.target&&this._element===u.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Gu),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,Qu)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(S.trigger(this._element,p1).defaultPrevented)return;const s=this._element.scrollHeight>document.documentElement.clientHeight,u=this._element.style.overflowY;u==="hidden"||this._element.classList.contains(bx)||(s||(this._element.style.overflowY="hidden"),this._element.classList.add(bx),this._queueCallback(()=>{this._element.classList.remove(bx),this._queueCallback(()=>{this._element.style.overflowY=u},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const s=this._element.scrollHeight>document.documentElement.clientHeight,u=this._scrollBar.getWidth(),y=u>0;if(y&&!s){const M=_()?"paddingLeft":"paddingRight";this._element.style[M]=`${u}px`}if(!y&&s){const M=_()?"paddingRight":"paddingLeft";this._element.style[M]=`${u}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(s,u){return this.each(function(){const y=Kn.getOrCreateInstance(this,s);if(typeof s=="string"){if(y[s]===void 0)throw new TypeError(`No method named "${s}"`);y[s](u)}})}}S.on(document,v1,'[data-bs-toggle="modal"]',function(g){const s=ne.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&g.preventDefault(),S.one(s,Yu,y=>{y.defaultPrevented||S.one(s,Qu,()=>{d(this)&&this.focus()})});const u=ne.findOne(".modal.show");u&&Kn.getInstance(u).hide(),Kn.getOrCreateInstance(s).toggle(this)}),Ve(Kn),m(Kn);const Kr=".bs.offcanvas",Xu=".data-api",F1=`load${Kr}${Xu}`,Ku="show",Zu="showing",Ju="hiding",em=".offcanvas.show",w1=`show${Kr}`,D1=`shown${Kr}`,b1=`hide${Kr}`,tm=`hidePrevented${Kr}`,rm=`hidden${Kr}`,k1=`resize${Kr}`,_1=`click${Kr}${Xu}`,j1=`keydown.dismiss${Kr}`,P1={backdrop:!0,keyboard:!0,scroll:!1},S1={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Zr extends ce{constructor(s,u){super(s,u),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return P1}static get DefaultType(){return S1}static get NAME(){return"offcanvas"}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||S.trigger(this._element,w1,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Dx().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Zu),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ku),this._element.classList.remove(Zu),S.trigger(this._element,D1,{relatedTarget:s})},this._element,!0))}hide(){this._isShown&&(S.trigger(this._element,b1).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ju),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ku,Ju),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Dx().reset(),S.trigger(this._element,rm)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const s=!!this._config.backdrop;return new Ru({className:"offcanvas-backdrop",isVisible:s,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:s?()=>{this._config.backdrop!=="static"?this.hide():S.trigger(this._element,tm)}:null})}_initializeFocusTrap(){return new Vu({trapElement:this._element})}_addEventListeners(){S.on(this._element,j1,s=>{s.key==="Escape"&&(this._config.keyboard?this.hide():S.trigger(this._element,tm))})}static jQueryInterface(s){return this.each(function(){const u=Zr.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s](this)}})}}S.on(document,_1,'[data-bs-toggle="offcanvas"]',function(g){const s=ne.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&g.preventDefault(),h(this))return;S.one(s,rm,()=>{d(this)&&this.focus()});const u=ne.findOne(em);u&&u!==s&&Zr.getInstance(u).hide(),Zr.getOrCreateInstance(s).toggle(this)}),S.on(window,F1,()=>{for(const g of ne.find(em))Zr.getOrCreateInstance(g).show()}),S.on(window,k1,()=>{for(const g of ne.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(g).position!=="fixed"&&Zr.getOrCreateInstance(g).hide()}),Ve(Zr),m(Zr);const nm={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},$1=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),N1=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,T1=(g,s)=>{const u=g.nodeName.toLowerCase();return s.includes(u)?!$1.has(u)||!!N1.test(g.nodeValue):s.filter(y=>y instanceof RegExp).some(y=>y.test(u))},z1={allowList:nm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},I1={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},O1={entry:"(string|element|function|null)",selector:"(string|element)"};class L1 extends tt{constructor(s){super(),this._config=this._getConfig(s)}static get Default(){return z1}static get DefaultType(){return I1}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(s=>this._resolvePossibleFunction(s)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(s){return this._checkContent(s),this._config.content={...this._config.content,...s},this}toHtml(){const s=document.createElement("div");s.innerHTML=this._maybeSanitize(this._config.template);for(const[M,V]of Object.entries(this._config.content))this._setContent(s,V,M);const u=s.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&u.classList.add(...y.split(" ")),u}_typeCheckConfig(s){super._typeCheckConfig(s),this._checkContent(s.content)}_checkContent(s){for(const[u,y]of Object.entries(s))super._typeCheckConfig({selector:u,entry:y},O1)}_setContent(s,u,y){const M=ne.findOne(y,s);M&&((u=this._resolvePossibleFunction(u))?c(u)?this._putElementInTemplate(l(u),M):this._config.html?M.innerHTML=this._maybeSanitize(u):M.textContent=u:M.remove())}_maybeSanitize(s){return this._config.sanitize?function(u,y,M){if(!u.length)return u;if(M&&typeof M=="function")return M(u);const V=new window.DOMParser().parseFromString(u,"text/html"),Q=[].concat(...V.body.querySelectorAll("*"));for(const G of Q){const K=G.nodeName.toLowerCase();if(!Object.keys(y).includes(K)){G.remove();continue}const ee=[].concat(...G.attributes),re=[].concat(y["*"]||[],y[K]||[]);for(const Z of ee)T1(Z,re)||G.removeAttribute(Z.nodeName)}return V.body.innerHTML}(s,this._config.allowList,this._config.sanitizeFn):s}_resolvePossibleFunction(s){return p(s,[this])}_putElementInTemplate(s,u){if(this._config.html)return u.innerHTML="",void u.append(s);u.textContent=s.textContent}}const R1=new Set(["sanitize","allowList","sanitizeFn"]),kx="fade",na="show",om=".modal",im="hide.bs.modal",z0="hover",_x="focus",M1={AUTO:"auto",TOP:"top",RIGHT:_()?"left":"right",BOTTOM:"bottom",LEFT:_()?"right":"left"},V1={allowList:nm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},H1={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Zn extends ce{constructor(s,u){if(Su===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(s,u),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return V1}static get DefaultType(){return H1}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(om),im,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const s=S.trigger(this._element,this.constructor.eventName("show")),u=(f(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(s.defaultPrevented||!u)return;this._disposePopper();const y=this._getTipElement();this._element.setAttribute("aria-describedby",y.getAttribute("id"));const{container:M}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(M.append(y),S.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(y),y.classList.add(na),"ontouchstart"in document.documentElement)for(const V of[].concat(...document.body.children))S.on(V,"mouseover",B);this._queueCallback(()=>{S.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!S.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(na),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",B);this._activeTrigger.click=!1,this._activeTrigger[_x]=!1,this._activeTrigger[z0]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(s){const u=this._getTemplateFactory(s).toHtml();if(!u)return null;u.classList.remove(kx,na),u.classList.add(`bs-${this.constructor.NAME}-auto`);const y=(M=>{do M+=Math.floor(1e6*Math.random());while(document.getElementById(M));return M})(this.constructor.NAME).toString();return u.setAttribute("id",y),this._isAnimated()&&u.classList.add(kx),u}setContent(s){this._newContent=s,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(s){return this._templateFactory?this._templateFactory.changeContent(s):this._templateFactory=new L1({...this._config,content:s,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(s){return this.constructor.getOrCreateInstance(s.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(kx)}_isShown(){return this.tip&&this.tip.classList.contains(na)}_createPopper(s){const u=p(this._config.placement,[this,s,this._element]),y=M1[u.toUpperCase()];return Fx(this._element,s,this._getPopperConfig(y))}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(u=>Number.parseInt(u,10)):typeof s=="function"?u=>s(u,this._element):s}_resolvePossibleFunction(s){return p(s,[this._element])}_getPopperConfig(s){const u={placement:s,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...u,...p(this._config.popperConfig,[u])}}_setListeners(){const s=this._config.trigger.split(" ");for(const u of s)if(u==="click")S.on(this._element,this.constructor.eventName("click"),this._config.selector,y=>{this._initializeOnDelegatedTarget(y).toggle()});else if(u!=="manual"){const y=u===z0?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),M=u===z0?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");S.on(this._element,y,this._config.selector,V=>{const Q=this._initializeOnDelegatedTarget(V);Q._activeTrigger[V.type==="focusin"?_x:z0]=!0,Q._enter()}),S.on(this._element,M,this._config.selector,V=>{const Q=this._initializeOnDelegatedTarget(V);Q._activeTrigger[V.type==="focusout"?_x:z0]=Q._element.contains(V.relatedTarget),Q._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(om),im,this._hideModalHandler)}_fixTitle(){const s=this._element.getAttribute("title");s&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",s),this._element.setAttribute("data-bs-original-title",s),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(s,u){clearTimeout(this._timeout),this._timeout=setTimeout(s,u)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(s){const u=J.getDataAttributes(this._element);for(const y of Object.keys(u))R1.has(y)&&delete u[y];return s={...u,...typeof s=="object"&&s?s:{}},s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s.container=s.container===!1?document.body:l(s.container),typeof s.delay=="number"&&(s.delay={show:s.delay,hide:s.delay}),typeof s.title=="number"&&(s.title=s.title.toString()),typeof s.content=="number"&&(s.content=s.content.toString()),s}_getDelegateConfig(){const s={};for(const[u,y]of Object.entries(this._config))this.constructor.Default[u]!==y&&(s[u]=y);return s.selector=!1,s.trigger="manual",s}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(s){return this.each(function(){const u=Zn.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s]()}})}}m(Zn);const U1={...Zn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},W1={...Zn.DefaultType,content:"(null|string|element|function)"};class oa extends Zn{static get Default(){return U1}static get DefaultType(){return W1}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(s){return this.each(function(){const u=oa.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s]()}})}}m(oa);const jx=".bs.scrollspy",Q1=`activate${jx}`,am=`click${jx}`,Y1=`load${jx}.data-api`,Oo="active",Px="[href]",sm=".nav-link",G1=`${sm}, .nav-item > ${sm}, .list-group-item`,q1={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},X1={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class I0 extends ce{constructor(s,u){super(s,u),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return q1}static get DefaultType(){return X1}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const s of this._observableSections.values())this._observer.observe(s)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(s){return s.target=l(s.target)||document.body,s.rootMargin=s.offset?`${s.offset}px 0px -30%`:s.rootMargin,typeof s.threshold=="string"&&(s.threshold=s.threshold.split(",").map(u=>Number.parseFloat(u))),s}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,am),S.on(this._config.target,am,Px,s=>{const u=this._observableSections.get(s.target.hash);if(u){s.preventDefault();const y=this._rootElement||window,M=u.offsetTop-this._element.offsetTop;if(y.scrollTo)return void y.scrollTo({top:M,behavior:"smooth"});y.scrollTop=M}}))}_getNewObserver(){const s={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(u=>this._observerCallback(u),s)}_observerCallback(s){const u=Q=>this._targetLinks.get(`#${Q.target.id}`),y=Q=>{this._previousScrollData.visibleEntryTop=Q.target.offsetTop,this._process(u(Q))},M=(this._rootElement||document.documentElement).scrollTop,V=M>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=M;for(const Q of s){if(!Q.isIntersecting){this._activeTarget=null,this._clearActiveClass(u(Q));continue}const G=Q.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(V&&G){if(y(Q),!M)return}else V||G||y(Q)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const s=ne.find(Px,this._config.target);for(const u of s){if(!u.hash||h(u))continue;const y=ne.findOne(decodeURI(u.hash),this._element);d(y)&&(this._targetLinks.set(decodeURI(u.hash),u),this._observableSections.set(u.hash,y))}}_process(s){this._activeTarget!==s&&(this._clearActiveClass(this._config.target),this._activeTarget=s,s.classList.add(Oo),this._activateParents(s),S.trigger(this._element,Q1,{relatedTarget:s}))}_activateParents(s){if(s.classList.contains("dropdown-item"))ne.findOne(".dropdown-toggle",s.closest(".dropdown")).classList.add(Oo);else for(const u of ne.parents(s,".nav, .list-group"))for(const y of ne.prev(u,G1))y.classList.add(Oo)}_clearActiveClass(s){s.classList.remove(Oo);const u=ne.find(`${Px}.${Oo}`,s);for(const y of u)y.classList.remove(Oo)}static jQueryInterface(s){return this.each(function(){const u=I0.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s]()}})}}S.on(window,Y1,()=>{for(const g of ne.find('[data-bs-spy="scroll"]'))I0.getOrCreateInstance(g)}),m(I0);const Jn=".bs.tab",K1=`hide${Jn}`,Z1=`hidden${Jn}`,J1=`show${Jn}`,eg=`shown${Jn}`,tg=`click${Jn}`,rg=`keydown${Jn}`,ng=`load${Jn}`,og="ArrowLeft",xm="ArrowRight",ig="ArrowUp",lm="ArrowDown",Sx="Home",cm="End",eo="active",dm="fade",$x="show",um=".dropdown-toggle",Nx=`:not(${um})`,mm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Tx=`.nav-link${Nx}, .list-group-item${Nx}, [role="tab"]${Nx}, ${mm}`,ag=`.${eo}[data-bs-toggle="tab"], .${eo}[data-bs-toggle="pill"], .${eo}[data-bs-toggle="list"]`;class to extends ce{constructor(s){super(s),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,rg,u=>this._keydown(u)))}static get NAME(){return"tab"}show(){const s=this._element;if(this._elemIsActive(s))return;const u=this._getActiveElem(),y=u?S.trigger(u,K1,{relatedTarget:s}):null;S.trigger(s,J1,{relatedTarget:u}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(u,s),this._activate(s,u))}_activate(s,u){s&&(s.classList.add(eo),this._activate(ne.getElementFromSelector(s)),this._queueCallback(()=>{s.getAttribute("role")==="tab"?(s.removeAttribute("tabindex"),s.setAttribute("aria-selected",!0),this._toggleDropDown(s,!0),S.trigger(s,eg,{relatedTarget:u})):s.classList.add($x)},s,s.classList.contains(dm)))}_deactivate(s,u){s&&(s.classList.remove(eo),s.blur(),this._deactivate(ne.getElementFromSelector(s)),this._queueCallback(()=>{s.getAttribute("role")==="tab"?(s.setAttribute("aria-selected",!1),s.setAttribute("tabindex","-1"),this._toggleDropDown(s,!1),S.trigger(s,Z1,{relatedTarget:u})):s.classList.remove($x)},s,s.classList.contains(dm)))}_keydown(s){if(![og,xm,ig,lm,Sx,cm].includes(s.key))return;s.stopPropagation(),s.preventDefault();const u=this._getChildren().filter(M=>!h(M));let y;if([Sx,cm].includes(s.key))y=u[s.key===Sx?0:u.length-1];else{const M=[xm,lm].includes(s.key);y=C(u,s.target,M,!0)}y&&(y.focus({preventScroll:!0}),to.getOrCreateInstance(y).show())}_getChildren(){return ne.find(Tx,this._parent)}_getActiveElem(){return this._getChildren().find(s=>this._elemIsActive(s))||null}_setInitialAttributes(s,u){this._setAttributeIfNotExists(s,"role","tablist");for(const y of u)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(s){s=this._getInnerElement(s);const u=this._elemIsActive(s),y=this._getOuterElement(s);s.setAttribute("aria-selected",u),y!==s&&this._setAttributeIfNotExists(y,"role","presentation"),u||s.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(s,"role","tab"),this._setInitialAttributesOnTargetPanel(s)}_setInitialAttributesOnTargetPanel(s){const u=ne.getElementFromSelector(s);u&&(this._setAttributeIfNotExists(u,"role","tabpanel"),s.id&&this._setAttributeIfNotExists(u,"aria-labelledby",`${s.id}`))}_toggleDropDown(s,u){const y=this._getOuterElement(s);if(!y.classList.contains("dropdown"))return;const M=(V,Q)=>{const G=ne.findOne(V,y);G&&G.classList.toggle(Q,u)};M(um,eo),M(".dropdown-menu",$x),y.setAttribute("aria-expanded",u)}_setAttributeIfNotExists(s,u,y){s.hasAttribute(u)||s.setAttribute(u,y)}_elemIsActive(s){return s.classList.contains(eo)}_getInnerElement(s){return s.matches(Tx)?s:ne.findOne(Tx,s)}_getOuterElement(s){return s.closest(".nav-item, .list-group-item")||s}static jQueryInterface(s){return this.each(function(){const u=to.getOrCreateInstance(this);if(typeof s=="string"){if(u[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);u[s]()}})}}S.on(document,tg,mm,function(g){["A","AREA"].includes(this.tagName)&&g.preventDefault(),h(this)||to.getOrCreateInstance(this).show()}),S.on(window,ng,()=>{for(const g of ne.find(ag))to.getOrCreateInstance(g)}),m(to);const Bn=".bs.toast",sg=`mouseover${Bn}`,xg=`mouseout${Bn}`,lg=`focusin${Bn}`,cg=`focusout${Bn}`,dg=`hide${Bn}`,ug=`hidden${Bn}`,mg=`show${Bn}`,fg=`shown${Bn}`,fm="hide",ia="show",aa="showing",pg={animation:"boolean",autohide:"boolean",delay:"number"},hg={animation:!0,autohide:!0,delay:5e3};class O0 extends ce{constructor(s,u){super(s,u),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return hg}static get DefaultType(){return pg}static get NAME(){return"toast"}show(){S.trigger(this._element,mg).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(fm),A(this._element),this._element.classList.add(ia,aa),this._queueCallback(()=>{this._element.classList.remove(aa),S.trigger(this._element,fg),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(S.trigger(this._element,dg).defaultPrevented||(this._element.classList.add(aa),this._queueCallback(()=>{this._element.classList.add(fm),this._element.classList.remove(aa,ia),S.trigger(this._element,ug)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ia),super.dispose()}isShown(){return this._element.classList.contains(ia)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(s,u){switch(s.type){case"mouseover":case"mouseout":this._hasMouseInteraction=u;break;case"focusin":case"focusout":this._hasKeyboardInteraction=u}if(u)return void this._clearTimeout();const y=s.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,sg,s=>this._onInteraction(s,!0)),S.on(this._element,xg,s=>this._onInteraction(s,!1)),S.on(this._element,lg,s=>this._onInteraction(s,!0)),S.on(this._element,cg,s=>this._onInteraction(s,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(s){return this.each(function(){const u=O0.getOrCreateInstance(this,s);if(typeof s=="string"){if(u[s]===void 0)throw new TypeError(`No method named "${s}"`);u[s](this)}})}}return Ve(O0),m(O0),{Alert:Sr,Button:Lt,Carousel:bo,Collapse:_o,Dropdown:Cr,Modal:Kn,Offcanvas:Zr,Popover:oa,ScrollSpy:I0,Tab:to,Toast:O0,Tooltip:Zn}})})(oB);const ji="/assets/abejitas-DGS7kkQt.jpeg",$c="/assets/imagen_ejemplo-CxSKuehc.jpg",iB="/assets/images-DBHYKUke.jpeg";function aB(){const[e,t]=v.useState(null),[r,n]=v.useState(null),o=st(),[i,x]=v.useState(null),[c,l]=v.useState(!1),[d,h]=v.useState(!1),[f,B]=v.useState(!1),[A,w]=v.useState(null),[b,_]=v.useState({}),[m,p]=v.useState(""),[E,C]=v.useState(!1);function k(O){const I=O+"=",R=document.cookie.split(";");for(let N=0;N<R.length;N++){let W=R[N];for(;W.charAt(0)===" ";)W=W.substring(1,W.length);if(W.indexOf(I)===0)return W.substring(I.length,W.length)}return null}const D=k("role"),F=k("token"),P=[ji,$c,iB];D==="beekeeper"&&v.useEffect(()=>{(async()=>{try{const I=await fetch("https://colmenaresdeleje.onrender.com/beehive/list-hives/",{headers:{Authorization:`Bearer ${F}`}});if(!I.ok)throw new Error("Error en la respuesta del servidor");const N=(await I.json()).filter(W=>W.status==="Active");t(N)}catch(I){n(I.message)}})()},[]),D==="admin"&&v.useEffect(()=>{(async()=>{try{const I=await fetch("https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/",{headers:{Authorization:`Bearer ${F}`}});if(!I.ok)throw new Error("Error en la respuesta del servidor");const N=(await I.json()).filter(W=>W.status==="Active");t(N)}catch(I){n(I.message)}})()},[]),v.useEffect(()=>{c?(p("animateModalIn"),setTimeout(()=>{C(!0)},300)):(p("animateModalOut"),C(!1))},[c]);const z=(O,I)=>{switch(_({...b,[I]:O.target.value}),O.target.value){case"editar":o(`/EditColmena/${I}`);break;case"monitoreo":o(`/Monitoreo/${I}`);break;case"recoleccion":o(`/Recoleccion/${I}`);break;case"lista_monitoreo":o("/List_Monitoreo");break;case"lista_recoleccion":o("/List_Recoleccion");break;case"visualizar-detalles":x(null),setTimeout(()=>{x(I),l(!0)},10);break}},j=()=>{i&&_({...b,[i]:""}),l(!1),B(!1),w(null),setTimeout(()=>{x(null)},400)},U=async O=>{if(!d)try{h(!0);const I=F,R=e.find(Y=>Y.id===O);if(!R)throw new Error("Colmena no encontrada");const N=!R.status,W=await fetch(`https://colmenaresdeleje.onrender.com/edit-state-hive/${O}/`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`},body:JSON.stringify({status:N?"Active":"Deactivate"})});if(!W.ok){const Y=await W.json();throw new Error(Y.error||"Error al actualizar el estado")}const S=await W.json();N?t(Y=>Y.map(q=>q.id===O?{...q,status:N}:q)):(t(Y=>Y.filter(q=>q.id!==O)),c&&i===O&&j()),alert(`Colmena ${N?"habilitada":"deshabilitada"} con éxito`)}catch(I){alert(`Error: ${I.message}`)}finally{h(!1)}},L=async(O,I="download")=>{try{const W=await fetch(D==="admin"?"https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/":"https://colmenaresdeleje.onrender.com/beehive/list-hives/",{headers:{Authorization:`Bearer ${F}`}});if(!W.ok)throw new Error("Error al obtener los detalles de la colmena");const Y=(await W.json()).find(ae=>ae.id===O);if(!Y||!Y.qr_code)throw new Error("No se encontró el código QR para esta colmena");const q=Y.qr_code;if(I==="view")w(q),B(!f);else if(I==="download"){const ae=document.createElement("a");ae.href=`data:image/png;base64,${q}`,ae.download=`qr_hive_${O}.png`,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),alert("Código QR descargado exitosamente")}}catch(R){alert(`Error al procesar el QR: ${R.message}`)}},T={animateModalIn:{animation:"fadeIn 0.3s ease-out forwards"},animateModalOut:{animation:"fadeOut 0.3s ease-in forwards"},detailsAnimation:{opacity:E?1:0,transform:E?"translateY(0)":"translateY(20px)",transition:"opacity 0.5s ease-out, transform 0.5s ease-out"},qrAnimation:{opacity:f?1:0,maxHeight:f?"300px":"0px",transition:"opacity 0.4s ease, max-height 0.4s ease",overflow:"hidden"},statusBadge:{transition:"background-color 0.3s ease"},modalContent:{transform:c?"scale(1)":"scale(0.8)",transition:"transform 0.3s ease"},hiveCard:{transition:"all 0.3s ease",transform:"translateZ(0)",cursor:"pointer",border:"1px solid black",boxShadow:"0 15px 30px rgba(0,0,0,0.25)"},hiveCardHover:{boxShadow:"0 10px 20px rgba(0,0,0,0.1)",transform:"translateY(-5px)"}},H=document.createElement("style");return H.textContent=`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-20px); }
    }
    .bee-card:hover {
      box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
      transform: translateY(-5px) !important;
    }
    .honey-button {
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }
    .honey-button:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: radial-gradient(circle, transparent 10%, rgba(255,255,0,0.1) 10.01%);
      transform: scale(10, 10);
      opacity: 0;
      transition: transform 0.5s, opacity 0.5s;
    }
    .honey-button:active:after {
      transform: scale(0, 0);
      opacity: 0.3;
      transition: 0s;
    }
    @media (max-width: 576px) {
      .bee-card .row {
        flex-direction: column;
        align-items: stretch;
      }
      .bee-card img {
        max-height: 150px;
        margin: 0 auto;
      }
      .bee-card .col-sm-5,
      .bee-card .col-sm-3 {
        text-align: center;
        margin-top: 10px;
      }
      .form-select {
        width: 100%;
        margin: 0 auto;
      }
    }
  `,document.head.appendChild(H),a.jsxs("div",{className:"d-flex flex-column min-vh-100",children:[D==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx("div",{className:"container-fluid flex-grow-1 py-3",children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-12 col-lg-8 col-xl-7 mb-4 mx-auto",children:a.jsx("div",{className:"d-flex flex-column gap-3",children:r?a.jsxs("p",{className:"text-danger text-center",children:["Error: ",r]}):e?e.length===0?a.jsx("p",{className:"text-center",children:"No hay colmenas registradas."}):e.map((O,I)=>a.jsx("div",{className:"card rounded p-3 mx-2 mx-md-3 bee-card position-relative",style:T.hiveCard,children:a.jsxs("div",{className:"row g-0 align-items-center",children:[a.jsx("div",{className:"col-12 col-sm-4 mb-3 mb-sm-0",children:a.jsxs("div",{id:`image-flip-${O.id}`,style:{transition:"transform 0.6s",transformStyle:"preserve-3d",position:"relative",width:"100%",height:"150px"},children:[a.jsx("button",{className:"btn btn-sm btn-warning position-absolute",style:{top:"5px",left:"5px",zIndex:10,padding:"3px 8px",fontSize:"0.8rem",opacity:.9},onClick:R=>{R.stopPropagation();const N=document.getElementById(`image-flip-${O.id}`);N&&(N.style.transform=N.style.transform==="rotateY(180deg)"?"rotateY(0deg)":"rotateY(180deg)")},children:a.jsx("i",{className:"bi bi-arrow-repeat"})}),a.jsx("div",{style:{backfaceVisibility:"hidden",position:"absolute",width:"100%",height:"100%"},children:a.jsx("img",{src:P[I%P.length],alt:"Imagen de la colmena",className:"img-fluid rounded",style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s ease"},onMouseOver:R=>R.target.style.transform="scale(1.05)",onMouseOut:R=>R.target.style.transform="scale(1)"})}),a.jsx("div",{style:{backfaceVisibility:"hidden",position:"absolute",width:"100%",height:"100%",transform:"rotateY(180deg)",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},children:O.qr_code?a.jsx("img",{src:`data:image/png;base64,${O.qr_code}`,alt:`QR Code for hive ${O.id}`,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}):a.jsx("p",{style:{textAlign:"center"},children:"No QR disponible"})})]})}),a.jsxs("div",{className:"col-12 col-sm-5 text-center text-sm-start mb-3 mb-sm-0",children:[a.jsxs("h3",{className:"mb-1 ms-0 ms-sm-3",children:["Numero de colmena: ",O.id]}),a.jsxs("p",{className:"mb-0 ms-0 ms-sm-3",children:["Ubicacion: ",O.location]}),a.jsx("p",{className:"mb-0 ms-0 ms-sm-3",children:a.jsx("span",{className:`badge ${O.status?"bg-success":"bg-danger"}`,style:T.statusBadge,children:O.status?"Activa":"Inactiva"})})]}),a.jsx("div",{className:"col-12 col-sm-3 text-center",children:a.jsxs("select",{className:"form-select form-select-sm bg-warning-subtle border-warning-subtle",onChange:R=>z(R,O.id),value:b[O.id]||"",children:[a.jsx("option",{value:"",children:"Seleccionar"}),a.jsx("option",{value:"editar",children:"Editar"}),a.jsx("option",{value:"recoleccion",children:"Recolección"}),a.jsx("option",{value:"monitoreo",children:"Monitoreo"}),a.jsx("option",{value:"visualizar-detalles",children:"Visualizar Detalles"}),a.jsx("option",{value:"lista_monitoreo",children:"Lista de monitoreos"}),a.jsx("option",{value:"lista_recoleccion",children:"Lista de recolecciones"})]})})]})},O.id)):a.jsx("p",{className:"text-center",children:"Cargando colmenas..."})})}),a.jsx("div",{className:"col-12 col-lg-4 col-xl-3",children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx("div",{className:`modal fade ${c?"show":""}`,id:"colmenaModal",tabIndex:"-1","aria-labelledby":"colmenaModalLabel","aria-hidden":"true",style:{display:c?"block":"none",backgroundColor:"rgba(0, 0, 0, 0.5)",...T[m]},children:a.jsx("div",{className:"modal-dialog modal-dialog-centered",children:a.jsxs("div",{className:"modal-content",style:T.modalContent,children:[a.jsxs("div",{className:"modal-header border-0 pb-0",children:[a.jsx("img",{src:"src/img/Colmenares_del_eje_logo.png",alt:"Logo",style:{height:"35px",animation:c?"spin 1s ease-in-out":"none"},className:"mx-auto"}),a.jsx("button",{type:"button",className:"btn-close",onClick:j,"aria-label":"Close"})]}),a.jsx("div",{className:"modal-body",children:i&&e&&(()=>{const O=e.find(I=>I.id===i);return O?a.jsxs("div",{style:T.detailsAnimation,children:[a.jsx("h5",{className:"modal-title text-center mb-4",id:"colmenaModalLabel",children:a.jsx("span",{style:{display:"inline-block",animation:"fadeIn 0.5s ease-out forwards"},children:"Información de la colmena"})}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-12 col-md-5 text-center mb-4 mb-md-0",children:[a.jsx("img",{src:ji,alt:"Imagen de colmena",className:"rounded-circle border border-3 border-secondary",style:{width:"150px",height:"150px",objectFit:"cover",animation:"fadeIn 0.5s ease-out forwards",transition:"transform 0.3s ease"},onMouseOver:I=>I.target.style.transform="scale(1.05) rotate(5deg)",onMouseOut:I=>I.target.style.transform="scale(1) rotate(0deg)"}),a.jsxs("div",{className:"d-flex flex-column gap-2 mt-3",children:[a.jsx("button",{className:"btn btn-warning honey-button",onClick:()=>o(`/EditColmena/${O.id}`),style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.1s",opacity:0},children:"Editar"}),a.jsx("button",{className:"btn btn-warning honey-button",onClick:()=>L(O.id,"download"),style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.2s",opacity:0},children:"Descargar QR"}),a.jsx("button",{className:"btn btn-warning honey-button",onClick:()=>L(O.id,"view"),style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.3s",opacity:0},children:f?"Ocultar QR":"Ver QR"}),a.jsxs("button",{className:`btn honey-button ${O.status?"btn-danger":"btn-success"}`,onClick:()=>U(O.id),disabled:d,style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.4s",opacity:0},children:[d?a.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}):null,O.status?"Deshabilitar":"Habilitar"]})]})]}),a.jsxs("div",{className:"col-12 col-md-7",children:[a.jsx("div",{style:T.qrAnimation,children:A&&a.jsxs("div",{className:"mb-3 text-center",children:[a.jsx("h6",{children:"Código QR:"}),a.jsx("img",{src:`data:image/png;base64,${A}`,alt:"Código QR de la colmena",style:{maxWidth:"200px",maxHeight:"200px"}})]})}),[{label:"Estado",value:a.jsx("span",{className:`badge ${O.status?"bg-success":"bg-danger"}`,children:O.status?"Activa":"Inactiva"})},{label:"Apicultor asignado",value:`${O.beekeeper_id.first_name} ${O.beekeeper_id.last_name}`},{label:"Cantidad cuadros cría abierta",value:O.open_brood_frames},{label:"Cantidad cuadros cría operculada",value:O.capped_brood_frames},{label:"Cuadros de comida",value:O.food_frames},{label:"Presencia reina",value:O.queen_presence?"Sí":"No"},{label:"Color reina",value:O.queen_color},{label:"Origen reina",value:O.origin},{label:"Reportes generales",value:O.observations},{label:"Grados centigrados",value:O.id_weather_conditions.temp_c},{label:"Grados farenheit",value:O.id_weather_conditions.temp_f},{label:"Condiciones",value:O.id_weather_conditions.text},{label:"Velocidad del viento",value:O.id_weather_conditions.wind_kph},{label:"Presion",value:O.id_weather_conditions.pressure_mb},{label:"Ubicacion",value:O.location},{label:"Indices de humedad",value:O.id_weather_conditions.humidity_indices},{label:"Fecha de creacion",value:new Date(O.registration_date).toISOString().split("T")[0]}].map((I,R)=>a.jsxs("p",{style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:`${.1+R*.05}s`,opacity:0,transform:"translateY(10px)"},children:[a.jsxs("strong",{children:[I.label,":"]})," ",I.value]},R))]})]})]}):a.jsx("p",{className:"text-center",children:"No se encontró información detallada para esta colmena."})})()})]})})}),c&&a.jsx("div",{className:"modal-backdrop fade show"})]})}const vl={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},sB=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;
    heigth: 300px;
    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${vl.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${vl.large}) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: ${vl.xlarge}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }
`;function cE(){const e=st(),t=()=>{e("/Dashboard")};return a.jsx(sB,{onClick:t,children:"Ver colmenas"})}const ke={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},xB=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;

    @media (min-width: ${ke.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`,lB=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    height: auto;
    width: 100%;
    max-width: 495px;

    @media (max-width: ${ke.mobile}) {
        padding: 1rem;
    }
    @media (min-width: ${ke.large}) {
        max-width: 32rem;
        padding: 1.5rem;
    }
    @media (min-width: ${ke.xlarge}) {
        max-width: 38rem;
        padding: 2rem;
    }
`,cB=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${ke.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
    @media (min-width: ${ke.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem);
        margin-bottom: 1.5rem;
    }
`,dB=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    @media (min-width: ${ke.large}) {
        gap: 0.75rem;
    }
`,no=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 1.5rem;

    @media (max-width: ${ke.mobile}) {
        font-size: 0.9rem;
        margin-bottom: 0.1rem;
    }
    @media (min-width: ${ke.large}) {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
`,ja=$.input`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.95rem;
    transition: border-color 0.3s;

    @media (max-width: ${ke.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    @media (min-width: ${ke.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${ke.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,Al=$.select`
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    background-color: #fffde7;
    font-size: 0.85rem;

    @media (max-width: ${ke.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    @media (min-width: ${ke.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${ke.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }
`,uB=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`,mB=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${ke.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    @media (min-width: ${ke.large}) {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        width: 160px;
    }
    @media (min-width: ${ke.xlarge}) {
        font-size: 1.1rem;
        padding: 0.6rem 1.2rem;
        width: 170px;
    }
`,Pa=$.div`
    color: red;
    font-size: 0.75rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${ke.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
    }
`,fB=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,pB=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${ke.mobile}) {
        padding: 1.5rem;
        max-width: 90%;
    }
    @media (min-width: ${ke.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${ke.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`,hB=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${ke.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,EB=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${ke.mobile}) {
        font-size: 20px;
    }
    @media (min-width: ${ke.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,gB=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    @media (min-width: ${ke.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`,CB=$.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 346px; /* Alineado con el ancho del Aside_Card */
    margin: 0.5rem auto; /* Centrado en lugar de margen fijo */
    border-radius: 8px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    border: 1px solid gray;
    min-width: 346px;

    h3 {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    @media (min-width: ${ke.large}) {
        padding: 1.25rem;
        h3 {
            font-size: 1.4rem;
        }
    }
`,Vo=$.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.1rem 0;
    align-items: center;
    gap: 0.5rem;

    .icon {
        width: 24px;
        height: 24px;
    }

    .label {
        font-size: 1rem;
        color: black;
    }

    .value {
        font-size: 1rem;
        font-weight: 500;
        text-align: right;
    }

    @media (min-width: ${ke.large}) {
        padding: 0.6rem;
        gap: 0.75rem;
        .icon {
            width: 28px;
            height: 28px;
        }
        .label, .value {
            font-size: 1.1rem;
        }
    }
`;function BB(){const[e,t]=v.useState(!1),[r,n]=v.useState(null),[o,i]=v.useState(null),[x,c]=v.useState(!1),[l,d]=v.useState(null),[h,f]=v.useState(!1),[B,A]=v.useState(!0);function w(j){const U=j+"=",L=document.cookie.split(";");for(let T=0;T<L.length;T++){let H=L[T];for(;H.charAt(0)==" ";)H=H.substring(1,H.length);if(H.indexOf(U)==0)return H.substring(U.length,H.length)}return null}const b=w("token"),_=w("role"),[m,p]=v.useState({cantidadCriasAbierta:"",cantidadCriasOperculada:"",presenciaReina:"",colorReina:"",origenReina:"",reportesGenerales:"",cuadrosComida:"",latitud:"",longitud:"",temperatura_c:"",temperatura_f:"",clima_texto:"",viento_kph:"",presion_mb:"",humedad:""}),[E,C]=v.useState({cantidadCriasAbierta:"",cantidadCriasOperculada:"",presenciaReina:"",colorReina:"",origenReina:"",reportesGenerales:"",cuadrosComida:""});v.useEffect(()=>{k()},[]);const k=async()=>{if("geolocation"in navigator){c(!0);try{const j=await new Promise((I,R)=>{navigator.geolocation.getCurrentPosition(I,R)}),{latitude:U,longitude:L}=j.coords;n({latitude:U,longitude:L});const T=await fetch(`https://api.weatherapi.com/v1/current.json?key=ca61bc45a6824e02a51185714251302&q=${U},${L}&lang=es`);if(!T.ok)throw new Error("Error al obtener datos del clima");const O=(await T.json()).current;i({temperatura_c:O.temp_c,temperatura_f:O.temp_f,clima_texto:O.condition.text,viento_kph:O.wind_kph,presion_mb:O.pressure_mb,humedad:O.humidity,icono:O.condition.icon}),p(I=>({...I,latitud:U,longitud:L,temperatura_c:O.temp_c,temperatura_f:O.temp_f,clima_texto:O.condition.text,viento_kph:O.wind_kph,presion_mb:O.pressure_mb,humedad:O.humidity}))}catch(j){d("Error al obtener la ubicación o datos del clima"),console.error("Error:",j)}finally{c(!1)}}},D=j=>{!/[\d.]/.test(j.key)&&j.key!=="Backspace"&&j.key!=="Delete"&&j.key!=="ArrowLeft"&&j.key!=="ArrowRight"&&j.preventDefault(),j.key==="."&&j.target.value.includes(".")&&j.preventDefault()},F=j=>{let U={},L=!0;return j.cantidadCriasAbierta&&!/^\d+(\.\d{1,2})?$/.test(j.cantidadCriasAbierta)?(U.cantidadCriasAbierta="Ingrese un número válido (hasta 2 decimales)",L=!1):j.cantidadCriasAbierta&&(parseFloat(j.cantidadCriasAbierta)<0||parseFloat(j.cantidadCriasAbierta)>100)&&(U.cantidadCriasAbierta="El valor debe estar entre 0 y 100",L=!1),j.cantidadCriasOperculada&&!/^\d+(\.\d{1,2})?$/.test(j.cantidadCriasOperculada)?(U.cantidadCriasOperculada="Ingrese un número válido (hasta 2 decimales)",L=!1):j.cantidadCriasOperculada&&(parseFloat(j.cantidadCriasOperculada)<0||parseFloat(j.cantidadCriasOperculada)>100)&&(U.cantidadCriasOperculada="El valor debe estar entre 0 y 100",L=!1),j.cuadrosComida&&!/^\d+(\.\d{1,2})?$/.test(j.cuadrosComida)?(U.cuadrosComida="Ingrese un número válido (hasta 2 decimales)",L=!1):j.cuadrosComida&&(parseFloat(j.cuadrosComida)<0||parseFloat(j.cuadrosComida)>100)&&(U.cuadrosComida="El valor debe estar entre 0 y 100",L=!1),j.reportesGenerales&&j.reportesGenerales.length>500?(U.reportesGenerales="Máximo 500 caracteres",L=!1):j.reportesGenerales&&!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s.,()-]+$/.test(j.reportesGenerales)&&(U.reportesGenerales="Caracteres no permitidos",L=!1),{isValid:L,errors:U}},P=j=>{const{name:U,value:L}=j.target;U==="cantidadCriasAbierta"||U==="cantidadCriasOperculada"||U==="cuadrosComida"?(L===""||/^\d*\.?\d*$/.test(L))&&p(T=>({...T,[U]:L})):p(T=>({...T,[U]:L})),E[U]&&C(T=>({...T,[U]:""}))},z=async j=>{j.preventDefault();const U=F(m);if(!U.isValid){C(U.errors);return}try{const L={location:`${parseFloat(m.latitud)},${parseFloat(m.longitud)}`,open_brood_frames:parseFloat(m.cantidadCriasAbierta),capped_brood_frames:parseFloat(m.cantidadCriasOperculada),queen_presence:m.presenciaReina==="Si",queen_color:m.colorReina,origin:m.origenReina,food_frames:parseFloat(m.cuadrosComida),observations:m.reportesGenerales,id_weather_conditions:{temp_c:m.temperatura_c.toString(),temp_f:m.temperatura_f.toString(),text:m.clima_texto,wind_kph:m.viento_kph.toString(),pressure_mb:m.presion_mb.toString(),humidity_indices:m.humedad.toString()},status:"Active",beekeeper_id:parseInt(w("id_User"))||null},T=await fetch("https://colmenaresdeleje.onrender.com/beehive/create-hive/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${b}`},body:JSON.stringify(L)});if(!T.ok){const O=await T.json();throw new Error(`Error al guardar los datos: ${JSON.stringify(O)}`)}const H=await T.json();console.log("Colmena creada exitosamente:",H),t(!0),p(O=>({...O,cantidadCriasAbierta:"",cantidadCriasOperculada:"",presenciaReina:"",colorReina:"",origenReina:"",reportesGenerales:"",cuadrosComida:""}))}catch(L){console.error("Error al enviar datos:",L),d(`Error al guardar los datos en el servidor: ${L.message}`)}};return a.jsxs(xB,{children:[_==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-3",children:a.jsxs("div",{className:"row justify-content-center flex-column flex-lg-row align-items-start",children:[a.jsx("div",{className:"col-12 col-lg-6 mb-3 d-flex justify-content-center",children:a.jsxs(lB,{children:[a.jsx(cB,{children:"Crear Colmena"}),a.jsxs(dB,{onSubmit:z,children:[a.jsx(no,{htmlFor:"cantidad-crias-abierta",children:"Cantidad de Cuadros de Cría Abierta"}),a.jsx(ja,{type:"number",id:"cantidad-crias-abierta",name:"cantidadCriasAbierta",placeholder:"Ingrese la cantidad de crías abierta",required:!0,value:m.cantidadCriasAbierta,onChange:P,onKeyDown:D}),E.cantidadCriasAbierta&&a.jsx(Pa,{children:E.cantidadCriasAbierta}),a.jsx(no,{htmlFor:"cantidad-crias-operculada",children:"Cantidad de Cuadros de Cría Operculada"}),a.jsx(ja,{type:"number",id:"cantidad-crias-operculada",name:"cantidadCriasOperculada",placeholder:"Ingrese la cantidad de crías operculada",required:!0,value:m.cantidadCriasOperculada,onChange:P,onKeyDown:D}),E.cantidadCriasOperculada&&a.jsx(Pa,{children:E.cantidadCriasOperculada}),a.jsx(no,{htmlFor:"cuadros-comida",children:"Cuadros de Comida"}),a.jsx(ja,{type:"number",id:"cuadros-comida",name:"cuadrosComida",placeholder:"Ingrese la cantidad de cuadros de comida",required:!0,value:m.cuadrosComida,onChange:P,onKeyDown:D}),E.cuadrosComida&&a.jsx(Pa,{children:E.cuadrosComida}),a.jsx(no,{htmlFor:"presencia-reina",children:"Presencia de Reina"}),a.jsxs(Al,{id:"presencia-reina",name:"presenciaReina",value:m.presenciaReina,onChange:P,required:!0,children:[a.jsx("option",{value:"",children:"Seleccione una opción"}),a.jsx("option",{value:"Si",children:"Sí"}),a.jsx("option",{value:"No",children:"No"})]}),a.jsx(no,{htmlFor:"color-reina",children:"Color de la Reina"}),a.jsxs(Al,{name:"colorReina",value:m.colorReina,onChange:P,required:!0,children:[a.jsx("option",{value:"",children:"Seleccione una opción"}),a.jsx("option",{value:"Amarilla",children:"Amarilla"}),a.jsx("option",{value:"Verde",children:"Verde"}),a.jsx("option",{value:"Roja",children:"Roja"}),a.jsx("option",{value:"Negra",children:"Negra"})]}),a.jsx(no,{htmlFor:"origen-reina",children:"Origen de la Reina"}),a.jsxs(Al,{id:"origen-reina",name:"origenReina",required:!0,value:m.origenReina,onChange:P,children:[a.jsx("option",{value:"",children:"Seleccione una opción"}),a.jsx("option",{value:"Europea",children:"Europea"}),a.jsx("option",{value:"Angelita",children:"Angelita"}),a.jsx("option",{value:"Africanita",children:"Africanita"})]}),a.jsx(no,{htmlFor:"reportes-generales",children:"Reportes Generales"}),a.jsx(ja,{type:"text",id:"reportes-generales",name:"reportesGenerales",placeholder:"Ingrese los reportes generales",required:!0,value:m.reportesGenerales,onChange:P}),E.reportesGenerales&&a.jsx(Pa,{children:E.reportesGenerales}),a.jsxs(uB,{children:[a.jsx(mB,{type:"submit",children:"Crear"}),a.jsx(cE,{})]})]})]})}),a.jsxs("div",{className:"col-12 col-lg-6 d-flex flex-column align-items-center",children:[a.jsx(gr,{className:"mb-3"}),o&&r&&B&&!h&&a.jsxs("div",{className:"alert d-flex justify-content-between align-items-center mt-3",style:{width:"100%",maxWidth:"300px",backgroundColor:"#f8f9fa",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",padding:"12px 16px",border:"1px solid #dee2e6"},role:"alert",children:[a.jsx("span",{style:{fontSize:"0.9rem"},children:"¿Deseas ver los datos de clima?"}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{className:"btn btn-sm",style:{backgroundColor:"#f9d77e",border:"none",width:"50px",fontWeight:"500"},onClick:()=>f(!0),children:"Sí"}),a.jsx("button",{className:"btn btn-sm",style:{backgroundColor:"#e9ecef",border:"none",width:"50px",fontWeight:"500"},onClick:()=>A(!1),children:"No"})]})]}),o&&r&&h&&a.jsxs(CB,{className:"mt-3",children:[a.jsx("h3",{children:"Datos del Clima"}),a.jsxs(Vo,{children:[a.jsx("img",{src:`https:${o.icono}`,alt:"clima",className:"icon"}),a.jsx("span",{className:"label",children:"Condición"}),a.jsx("span",{className:"value",children:o.clima_texto})]}),a.jsxs(Vo,{children:[a.jsx("img",{src:"//cdn.weatherapi.com/weather/64x64/day/116.png",alt:"temperatura",className:"icon"}),a.jsx("span",{className:"label",children:"Temperatura"}),a.jsxs("span",{className:"value",children:[o.temperatura_c,"°C / ",o.temperatura_f,"ºF"]})]}),a.jsxs(Vo,{children:[a.jsx("img",{src:"//cdn.weatherapi.com/weather/64x64/day/119.png",alt:"viento",className:"icon"}),a.jsx("span",{className:"label",children:"Viento"}),a.jsxs("span",{className:"value",children:[o.viento_kph," km/h"]})]}),a.jsxs(Vo,{children:[a.jsx("img",{src:"//cdn.weatherapi.com/weather/64x64/day/263.png",alt:"humedad",className:"icon"}),a.jsx("span",{className:"label",children:"Humedad"}),a.jsxs("span",{className:"value",children:[o.humedad,"%"]})]}),a.jsxs(Vo,{children:[a.jsx("img",{src:"//cdn.weatherapi.com/weather/64x64/day/116.png",alt:"ubicación",className:"icon"}),a.jsx("span",{className:"label",children:"Presion"}),a.jsx("span",{className:"value",children:o.presion_mb})]}),a.jsxs(Vo,{children:[a.jsx("img",{src:"//cdn.weatherapi.com/weather/64x64/day/116.png",alt:"ubicación",className:"icon"}),a.jsx("span",{className:"label",children:"Ubicación"}),a.jsxs("span",{className:"value",children:[r.latitude.toFixed(2),", ",r.longitude.toFixed(2)]})]})]})]})]})}),a.jsx(pt,{}),a.jsx(fB,{isVisible:e,onClick:()=>t(!1),children:a.jsxs(pB,{isVisible:e,onClick:j=>j.stopPropagation(),children:[a.jsx(hB,{}),a.jsx(EB,{children:"Registro Exitoso"}),a.jsx("p",{children:"La colmena ha sido creada exitosamente"}),a.jsx(gB,{onClick:()=>t(!1),children:"Aceptar"})]})})]})}const ot={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},vB=$.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;

    /* Para pantallas grandes: limita el ancho máximo y centra el contenido */
    @media (min-width: ${ot.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`,AB=$.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: radial-gradient(circle, white, white);
    padding: 1rem;

    /* Para pantallas pequeñas: reduce el padding */
    @media (max-width: ${ot.mobile}) {
        padding: 0.5rem;
    }

    /* Para pantallas grandes: aumenta el padding */
    @media (min-width: ${ot.large}) {
        padding: 2rem;
    }
`,yB=$.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    border: 1px solid grey;

    /* Para pantallas pequeñas: reduce el padding y ajusta el ancho */
    @media (max-width: ${ot.mobile}) {
        padding: 1rem;
        max-width: 90%;
    }

    /* Para pantallas grandes: aumenta el ancho y el padding */
    @media (min-width: ${ot.large}) {
        max-width: 32rem; /* Usar rem para escalabilidad */
        padding: 2rem;
    }

    /* Para pantallas muy grandes: aún más ancho */
    @media (min-width: ${ot.xlarge}) {
        max-width: 38rem;
        padding: 2.5rem;
    }
`,FB=$.h2`
    margin-bottom: 1rem;
    color: black;
    text-align: center;
    font-size: 1.5rem; /* Tamaño base */

    /* Para pantallas pequeñas: reduce el tamaño de fuente */
    @media (max-width: ${ot.mobile}) {
        font-size: 1.25rem;
    }

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${ot.large}) {
        font-size: clamp(1.5rem, 2.5vw, 2rem); /* Escala proporcionalmente */
    }
`,wB=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`,DB=$.label`
    font-weight: 500;
    color: black;
    margin-bottom: 0.23rem;
    padding-bottom: 0.23rem;
    font-size: 0.9rem; /* Tamaño base */

    /* Para pantallas pequeñas: reduce el tamaño de fuente */
    @media (max-width: ${ot.mobile}) {
        font-size: 0.8rem;
    }

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${ot.large}) {
        font-size: 1rem;
    }
`,bB=$.input`
    width: 100%;
    padding: 0.2rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.9rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #ffb300;
    }

    /* Para pantallas pequeñas: ajusta el padding */
    @media (max-width: ${ot.mobile}) {
        padding: 0.15rem;
        font-size: 0.8rem;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${ot.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
`,kB=$(_0)`
    text-decoration: none;
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 0.7rem;
    margin-top: 0.5rem;

    &:hover {
        color: #f79d60;
    }

    /* Para pantallas pequeñas: reduce el tamaño de fuente */
    @media (max-width: ${ot.mobile}) {
        font-size: 0.65rem;
    }

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${ot.large}) {
        font-size: 0.9rem;
    }
`,_B=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 0.5rem;

    &:hover {
        background-color: #f79d60;
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }

    /* Para pantallas pequeñas: reduce el padding y el tamaño de fuente */
    @media (max-width: ${ot.mobile}) {
        padding: 0.5rem;
        font-size: 0.8rem;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${ot.large}) {
        padding: 0.75rem;
        font-size: 1rem;
    }
`,jB=$.p`
    color: #d32f2f;
    font-size: 0.8rem;
    margin: 0.5rem 0;
    text-align: center;

    /* Para pantallas pequeñas: reduce el tamaño de fuente */
    @media (max-width: ${ot.mobile}) {
        font-size: 0.7rem;
    }

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${ot.large}) {
        font-size: 0.9rem;
    }
`,PB=$.footer`
    background-color: #f9d77e;
    color: #4e342e;
    text-align: center;
    padding: 0;
    font-size: 0.75rem;
    border-radius: 12px;

    /* Para pantallas pequeñas: reduce el padding y el tamaño de fuente */
    @media (max-width: ${ot.mobile}) {
        padding: 0.5rem;
        font-size: 0.65rem;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${ot.large}) {
        padding: 1rem;
        font-size: 0.9rem;
    }
`,SB=()=>{const[e,t]=v.useState(""),[r,n]=v.useState(""),[o,i]=v.useState(""),[x,c]=v.useState(!1),l=st(),d=async h=>{if(h.preventDefault(),c(!0),i(""),n(""),!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){i("Por favor, ingrese un correo electrónico válido"),c(!1);return}try{const B=await fetch("https://colmenaresdeleje.onrender.com/users/password_reset/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(!B.ok){const w=B.headers.get("content-type");if(w&&w.includes("application/json")){const b=await B.json();i(b.message||"Error al enviar el correo")}else{const b=await B.text();console.error("Respuesta no JSON:",b),i("Error inesperado del servidor")}c(!1);return}const A=await B.json();document.cookie="email="+A.email+"; path=/",n("Se ha enviado un link a tu correo electrónico"),setTimeout(()=>{l("/")},2e3)}catch(B){console.error("Error detallado:",B),B instanceof SyntaxError?i("Error al procesar la respuesta del servidor"):B instanceof TypeError?i("Error de red. Verifique su conexión"):i("Error desconocido. Por favor, intente nuevamente")}finally{c(!1)}};return a.jsxs(vB,{children:[a.jsx(Ri,{}),a.jsx(AB,{className:"main",children:a.jsxs(yB,{className:"login-container",children:[a.jsx(FB,{children:"Recuperar Contraseña"}),a.jsxs(wB,{className:"form-login",onSubmit:d,children:[a.jsx(DB,{htmlFor:"correo",className:"label",children:"Correo electrónico"}),a.jsx(bB,{type:"email",id:"correo",name:"correo",placeholder:"Ingrese su correo electrónico",value:e,onChange:h=>t(h.target.value),required:!0,disabled:x,className:"input"}),o&&a.jsx(jB,{children:o}),r&&a.jsx("p",{style:{color:"green",textAlign:"center"},children:r}),a.jsx(_B,{type:"submit",className:"button",disabled:x,children:x?"Enviando...":"Enviar correo"}),a.jsx(kB,{to:"/ConfirmCell",children:"¿Olvidaste tu correo?"})]})]})}),a.jsxs(PB,{className:"footer",children:[a.jsx("h2",{children:"Colmenares del Eje"}),a.jsx("p",{children:"@2025 Todos los derechos reservados"})]})]})},Ze={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},$B=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    @media (min-width: ${Ze.large}) {
        max-width: 1920px;
    }
`,NB=$.div`
    margin-top: 4px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1.2rem;
    width: 100%;
    max-width: 346px;
    border: 1px solid grey;
    min-height: 30rem;
    position: relative;

    @media (max-width: ${Ze.tablet}) {
        max-width: 100%;
        margin: 0 auto;
    }

    @media (min-width: ${Ze.large}) {
        max-width: 346px;
        padding: 1.5rem;
    }

    @media (min-width: ${Ze.xlarge}) {
        max-width: 400px;
        padding: 2rem;
    }
`,TB=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: ${Ze.large}) {
        gap: 0.75rem;
    }
`,zB=$.h2`
    margin-bottom: 0.75rem;
    color: #4e342e;
    text-align: center;

    @media (min-width: ${Ze.large}) {
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        margin-bottom: 1rem;
    }
`,pp=$.label`
    font-weight: 500;
    color: rgb(0, 0, 0);
    text-align: left;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;

    @media (max-width: ${Ze.mobile}) {
        font-size: 1rem;
        margin-bottom: 0.15rem;
    }
    @media (min-width: ${Ze.large}) {
        font-size: 1.3rem;
        margin-bottom: 0.25rem;
    }
`,hp=$.input`
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ffcc80;
    border-radius: 8px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.9rem;
    transition: border-color 0.3s;
    margin-bottom: 0.3rem;

    @media (max-width: ${Ze.mobile}) {
        padding: 0.5rem;
        font-size: 0.85rem;
    }
    @media (min-width: ${Ze.large}) {
        padding: 0.7rem;
        font-size: 1rem;
    }
    @media (min-width: ${Ze.xlarge}) {
        padding: 0.8rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,IB=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.8rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #4e342e;
    width: 150px;
    transition: background-color 0.3s;
    margin: 20px auto 0;
    display: block;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${Ze.mobile}) {
        padding: 0.7rem;
        font-size: 0.9rem;
        width: 130px;
    }
    @media (min-width: ${Ze.large}) {
        padding: 0.9rem;
        font-size: 1.1rem;
        width: 160px;
    }
    @media (min-width: ${Ze.xlarge}) {
        padding: 1rem;
        font-size: 1.2rem;
        width: 170px;
    }
`,Ep=$.span`
    color: #dc2626;
    font-size: 0.8rem;
    margin-top: -0.3rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${Ze.large}) {
        font-size: 0.9rem;
        margin-top: -0.2rem;
        margin-bottom: 0.25rem;
    }
`,OB=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,LB=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 400px;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${Ze.mobile}) {
        padding: 1.5rem;
        width: 90%;
    }
    @media (min-width: ${Ze.large}) {
        width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${Ze.xlarge}) {
        width: 600px;
        padding: 3rem;
    }
`,RB=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${Ze.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,MB=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${Ze.mobile}) {
        font-size: 20px;
    }
    @media (min-width: ${Ze.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,VB=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    @media (min-width: ${Ze.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`;function HB(){const{colmenaId:e}=pn(),[t,r]=v.useState(!1),n=st();function o(b){const _=b+"=",m=document.cookie.split(";");for(let p=0;p<m.length;p++){let E=m[p];for(;E.charAt(0)==" ";)E=E.substring(1,E.length);if(E.indexOf(_)==0)return E.substring(_.length,E.length)}return null}const i=o("role"),[x,c]=v.useState({produccionMiel:"",produccionPolen:""}),[l,d]=v.useState({produccionMiel:"",produccionPolen:""}),h=b=>{!/[\d.]/.test(b.key)&&b.key!=="Backspace"&&b.key!=="Delete"&&b.key!=="ArrowLeft"&&b.key!=="ArrowRight"&&b.preventDefault(),b.key==="."&&b.target.value.includes(".")&&b.preventDefault()},f=b=>{const{name:_,value:m}=b.target;_==="produccionMiel"||_==="produccionPolen"?(m===""||/^\d*\.?\d*$/.test(m))&&c(p=>({...p,[_]:m})):c(p=>({...p,[_]:m})),d(p=>({...p,[_]:""}))},B=()=>{const b={};if(!x.produccionMiel)b.produccionMiel="La producción de miel es requerida";else{const _=parseFloat(x.produccionMiel);isNaN(_)?b.produccionMiel="Debe ser un número válido":_<0?b.produccionMiel="La producción no puede ser negativa":_>1e3&&(b.produccionMiel="La producción no puede exceder 1000")}if(!x.produccionPolen)b.produccionPolen="La producción de polen es requerida";else{const _=parseFloat(x.produccionPolen);isNaN(_)?b.produccionPolen="Debe ser un número válido":_<0?b.produccionPolen="La producción no puede ser negativa":_>1e3&&(b.produccionPolen="La producción no puede exceder 1000")}return b},A=async b=>{b.preventDefault();const m=new Date().toISOString().split("T")[0],p=o("token"),E=B();if(Object.keys(E).length>0){d(E);return}console.log("Datos validados:",x),c({produccionMiel:"",produccionPolen:""}),d({});try{const C=await fetch(`https://colmenaresdeleje.onrender.com/harvesting/hive-harvesting/${e}/`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify({harvest_date:m,honey_production:parseFloat(x.produccionMiel),pollen_production:parseFloat(x.produccionPolen),beekeeper:parseInt(o("id_User")),hive_id:parseInt(e)})}),k=await C.json();C.ok?(console.log("Recolección exitosa"),r(!0)):console.log("Datos incorrectos")}catch{console.log("Error")}},w=()=>{r(!1),n("/Dashboard")};return a.jsxs($B,{children:[i==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-3",children:a.jsxs("div",{className:"row justify-content-center align-items-start",children:[a.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3 mt-3",children:a.jsx(NB,{children:a.jsxs(TB,{onSubmit:A,children:[a.jsx(zB,{children:"Recolección"}),a.jsx(pp,{children:"Producción de miel"}),a.jsx(hp,{type:"number",name:"produccionMiel",placeholder:"Ingrese producción de miel",value:x.produccionMiel,onChange:f,onKeyPress:h,min:"0",step:"0.01",required:!0}),l.produccionMiel&&a.jsx(Ep,{children:l.produccionMiel}),a.jsx(pp,{children:"Producción de polen"}),a.jsx(hp,{type:"number",name:"produccionPolen",placeholder:"Ingrese producción de polen",value:x.produccionPolen,onChange:f,onKeyPress:h,min:"0",step:"0.01",required:!0}),l.produccionPolen&&a.jsx(Ep,{children:l.produccionPolen}),a.jsx(IB,{type:"submit",children:"Enviar"})]})})}),a.jsx("div",{className:"col-12 col-md-6 col-lg-4 mt-3",children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx(OB,{isVisible:t,children:a.jsxs(LB,{isVisible:t,children:[a.jsx(RB,{}),a.jsx(MB,{children:"Recolección Registrada"}),a.jsx("p",{children:"La recolección ha sido registrada exitosamente"}),a.jsx(VB,{onClick:w,children:"Aceptar"})]})})]})}const je={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},UB=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;

    /* Para pantallas grandes: limita el ancho máximo y centra el contenido */
    @media (min-width: ${je.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`,WB=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    max-width: 495px;

    /* Para pantallas grandes: aumenta el ancho máximo y el padding */
    @media (min-width: ${je.large}) {
        max-width: 32rem; /* Usar rem para escalabilidad */
        padding: 1.5rem;
    }
    @media (min-width: ${je.xlarge}) {
        max-width: 38rem;
        padding: 2rem;
    }
`,QB=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    /* Para pantallas grandes: aumenta el gap para mejor espaciado */
    @media (min-width: ${je.large}) {
        gap: 0.75rem;
    }
`,oo=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem; /* Corregido de 1.5rem a 0.9rem para consistencia */

    @media (max-width: ${je.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 0.1rem;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${je.large}) {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
`,Sa=$.input`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    transition: border-color 0.3s;

    @media (max-width: ${je.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${je.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${je.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,YB=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${je.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${je.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem); /* Escala proporcionalmente */
        margin-bottom: 1.5rem;
    }
`,yl=$.select`
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 5px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    font-family: 'Poppins', sans-serif;

    @media (max-width: ${je.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${je.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${je.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }
`,GB=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Permite que los botones se envuelvan en pantallas pequeñas */
    gap: 10px; /* Espacio uniforme entre botones */
    margin-top: 1rem;
    
    @media (max-width: ${je.mobile}) {
        flex-direction: column; /* En móviles, los botones se apilan verticalmente */
        width: 100%;
    }
    
    @media (min-width: ${je.large}) {
        gap: 15px; /* Más espacio entre botones en pantallas grandes */
    }
`,gp=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }

    @media (max-width: ${je.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    @media (min-width: ${je.large}) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: ${je.xlarge}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }

    &.disable-btn {
        background-color: #dc3545;
        color: white;

        &:hover {
            background-color: #c82333;
        }

        &:disabled {
            background-color: #dc354580;
        }
    }
`,$a=$.div`
    color: red;
    font-size: 0.75rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${je.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
    }
`,qB=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,XB=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${je.mobile}) {
        padding: 1.5rem;
        max-width: 90%;
    }
    /* Para pantallas grandes: aumenta el tamaño del popup */
    @media (min-width: ${je.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${je.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`,KB=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    /* Para pantallas grandes: aumenta el tamaño del ícono */
    @media (min-width: ${je.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,ZB=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${je.mobile}) {
        font-size: 20px;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${je.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,JB=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${je.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`;function ev(){const{colmenaId:e}=pn(),t=st(),[r,n]=v.useState(!1),[o,i]=v.useState({}),[x,c]=v.useState(!0),[l,d]=v.useState(!1);function h(D){const F=D+"=",P=document.cookie.split(";");for(let z=0;z<P.length;z++){let j=P[z];for(;j.charAt(0)==" ";)j=j.substring(1,j.length);if(j.indexOf(F)==0)return j.substring(F.length,j.length)}return null}const f=h("token"),B=h("role"),[A,w]=v.useState({cantidadCriasAbierta:"",cantidadCriasOperculada:"",cuadrosComida:"",presenciaReina:"",colorReina:"",origenReina:"",reportesGenerales:""}),[b,_]=v.useState(!0);v.useEffect(()=>{if(!e){console.error("No colmenaId provided"),_(!1);return}(async()=>{try{if(!f)throw new Error("No token found");const P=await fetch(B==="admin"?"https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/":"https://colmenaresdeleje.onrender.com/beehive/list-hives/",{headers:{Authorization:`Bearer ${f}`,"Content-Type":"application/json"}});if(!P.ok)throw new Error(`HTTP error! status: ${P.status}`);const j=(await P.json()).find(U=>U.id===parseInt(e));if(j)w({cantidadCriasAbierta:j.open_brood_frames||"",cantidadCriasOperculada:j.capped_brood_frames||"",cuadrosComida:j.food_frames||"",presenciaReina:j.queen_presence?"Sí":"No",colorReina:j.queen_color||"",origenReina:j.origin||"",reportesGenerales:j.observations||""}),c(j.status==="Active");else throw new Error("Colmena no encontrada en la lista")}catch(F){console.error("Error al cargar datos:",F),i({fetch:"Error al cargar los datos de la colmena"})}finally{_(!1)}})()},[e,B,f]);const m=D=>{const{name:F,value:P}=D.target;w(z=>({...z,[F]:P})),o[F]&&i(z=>({...z,[F]:""}))},p=D=>{let F={},P=!0;return D.cantidadCriasAbierta&&!/^\d+$/.test(D.cantidadCriasAbierta)?(F.cantidadCriasAbierta="Ingrese un número entero válido",P=!1):D.cantidadCriasAbierta&&(parseInt(D.cantidadCriasAbierta)<0||parseInt(D.cantidadCriasAbierta)>100)&&(F.cantidadCriasAbierta="El valor debe estar entre 0 y 100",P=!1),D.cantidadCriasOperculada&&!/^\d+$/.test(D.cantidadCriasOperculada)?(F.cantidadCriasOperculada="Ingrese un número entero válido",P=!1):D.cantidadCriasOperculada&&(parseInt(D.cantidadCriasOperculada)<0||parseInt(D.cantidadCriasOperculada)>100)&&(F.cantidadCriasOperculada="El valor debe estar entre 0 y 100",P=!1),D.cuadrosComida&&!/^\d+$/.test(D.cuadrosComida)?(F.cuadrosComida="Ingrese un número entero válido",P=!1):D.cuadrosComida&&(parseInt(D.cuadrosComida)<0||parseInt(D.cuadrosComida)>100)&&(F.cuadrosComida="El valor debe estar entre 0 y 100",P=!1),D.reportesGenerales&&D.reportesGenerales.length>90?(F.reportesGenerales="Máximo 90 caracteres",P=!1):D.reportesGenerales&&!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s.,()-]+$/.test(D.reportesGenerales)&&(F.reportesGenerales="Caracteres no permitidos",P=!1),{isValid:P,errors:F}},E=async D=>{D.preventDefault();const F=p(A);if(!F.isValid){i(F.errors);return}if(!e){alert("No se especificó el ID de la colmena");return}try{const P={};if(A.cantidadCriasAbierta&&(P.open_brood_frames=parseInt(A.cantidadCriasAbierta,10)),A.cantidadCriasOperculada&&(P.capped_brood_frames=parseInt(A.cantidadCriasOperculada,10)),A.cuadrosComida&&(P.food_frames=parseInt(A.cuadrosComida,10)),A.presenciaReina&&(P.queen_presence=A.presenciaReina==="Sí"),A.colorReina&&(P.queen_color=A.colorReina),A.origenReina&&(P.origin=A.origenReina),A.reportesGenerales&&(P.observations=A.reportesGenerales),!f)throw new Error("No token found");const z=await fetch(`https://colmenaresdeleje.onrender.com/beehive/edit-hive/${e}/`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${f}`},body:JSON.stringify(P)});if(!z.ok){const U=await z.text();throw new Error(`HTTP error! status: ${z.status}, message: ${U}`)}const j=await z.json();console.log("Colmena actualizada exitosamente:",j),n(!0)}catch(P){console.error("Error al enviar datos:",P),alert("Error al actualizar la colmena: "+P.message)}},C=async()=>{if(!l)try{d(!0);const D=!x,F=await fetch(`https://colmenaresdeleje.onrender.com/beehive/edit-state-hive/${e}/`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${f}`},body:JSON.stringify({status:D?"Active":"Deactivate"})});if(!F.ok){const P=await F.json();throw new Error(P.error||"Error al actualizar el estado")}await F.json(),c(D),alert(`Colmena ${D?"habilitada":"deshabilitada"} con éxito`)}catch(D){alert(`Error: ${D.message}`)}finally{d(!1)}},k=()=>{n(!1),t("/Dashboard")};return b?a.jsx("div",{children:"Cargando..."}):o.fetch?a.jsx("div",{children:o.fetch}):a.jsxs(UB,{children:[B==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-3",children:a.jsxs("div",{className:"row justify-content-center",children:[a.jsx("div",{className:"col-lg-6 col-md-12 mb-3",children:a.jsxs(WB,{children:[a.jsx(YB,{children:"Editar Colmena"}),a.jsxs(QB,{onSubmit:E,children:[a.jsx(oo,{children:"Cantidad de Cuadros de Cría Abierta"}),a.jsx(Sa,{type:"number",name:"cantidadCriasAbierta",placeholder:"Ingrese el número de cuadros",value:A.cantidadCriasAbierta,onChange:m}),o.cantidadCriasAbierta&&a.jsx($a,{children:o.cantidadCriasAbierta}),a.jsx(oo,{children:"Cantidad de Cuadros de Cría Operculada"}),a.jsx(Sa,{type:"number",name:"cantidadCriasOperculada",placeholder:"Ingrese el número de cuadros",value:A.cantidadCriasOperculada,onChange:m}),o.cantidadCriasOperculada&&a.jsx($a,{children:o.cantidadCriasOperculada}),a.jsx(oo,{children:"Cuadros de Comida"}),a.jsx(Sa,{type:"number",name:"cuadrosComida",placeholder:"Ingrese la cantidad de cuadros de comida",value:A.cuadrosComida,onChange:m}),o.cuadrosComida&&a.jsx($a,{children:o.cuadrosComida}),a.jsx(oo,{children:"Presencia de la Reina"}),a.jsxs(yl,{name:"presenciaReina",value:A.presenciaReina,onChange:m,children:[a.jsx("option",{value:"",children:"Seleccione una opción"}),a.jsx("option",{value:"Sí",children:"Sí"}),a.jsx("option",{value:"No",children:"No"})]}),a.jsx(oo,{children:"Color de Reina"}),a.jsxs(yl,{name:"colorReina",value:A.colorReina,onChange:m,children:[a.jsx("option",{value:"",children:"Seleccione una opción"}),a.jsx("option",{value:"Blanca",children:"Blanca"}),a.jsx("option",{value:"Amarilla",children:"Amarilla"}),a.jsx("option",{value:"Roja",children:"Roja"}),a.jsx("option",{value:"Verde",children:"Verde"}),a.jsx("option",{value:"Azul",children:"Azul"})]}),a.jsx(oo,{children:"Origen de la Reina"}),a.jsxs(yl,{name:"origenReina",value:A.origenReina,onChange:m,children:[a.jsx("option",{value:"",children:"Seleccione una opción"}),a.jsx("option",{value:"Africanita",children:"Africanita"}),a.jsx("option",{value:"Europea",children:"Europea"}),a.jsx("option",{value:"Asiatica",children:"Asiática"})]}),a.jsx(oo,{children:"Observaciones Generales"}),a.jsx(Sa,{type:"text",name:"reportesGenerales",placeholder:"Ingrese las observaciones generales",value:A.reportesGenerales,onChange:m}),o.reportesGenerales&&a.jsx($a,{children:o.reportesGenerales}),a.jsxs(GB,{children:[a.jsx(gp,{type:"submit",children:"Actualizar"}),a.jsx(gp,{type:"button",onClick:C,style:{backgroundColor:x?"#dc3545":"#28a745"},disabled:l,children:l?"Procesando...":x?"Deshabilitar":"Habilitar"}),a.jsx(cE,{style:{width:"100%"}})]})]})]})}),a.jsx("div",{className:"col-lg-6 col-md-12",children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx(qB,{isVisible:r,children:a.jsxs(XB,{isVisible:r,children:[a.jsx(KB,{}),a.jsx(ZB,{children:"Actualización Exitosa"}),a.jsx("p",{children:"La colmena ha sido actualizada exitosamente"}),a.jsx(JB,{onClick:k,children:"Aceptar"})]})})]})}const Qe={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},tv=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;

    @media (min-width: ${Qe.large}) {
        max-width: 1920px;
    }
`,rv=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 346px;
    min-height: 30rem;
    position: relative;

    @media (max-width: ${Qe.tablet}) {
        max-width: 100%;
        margin: 0 auto;
    }

    @media (min-width: ${Qe.large}) {
        max-width: 346px;
        padding: 1.75rem;
    }
    @media (min-width: ${Qe.xlarge}) {
        max-width: 400px;
        padding: 2rem;
    }
`,nv=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;

    @media (min-width: ${Qe.large}) {
        gap: 1rem;
    }
`,ov=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;

    @media (max-width: ${Qe.mobile}) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    @media (min-width: ${Qe.large}) {
        font-size: clamp(1.8rem, 2.5vw, 2.2rem);
        margin-bottom: 1.75rem;
    }
`,Fl=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.25rem;
    font-size: 0.9rem;

    @media (max-width: ${Qe.mobile}) {
        font-size: 0.85rem;
        margin-bottom: 0.2rem;
    }
    @media (min-width: ${Qe.large}) {
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }
`,wl=$.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ffcc80;
    border-radius: 10px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 1rem;
    transition: border-color 0.3s;

    @media (max-width: ${Qe.mobile}) {
        padding: 0.6rem;
        font-size: 0.9rem;
    }
    @media (min-width: ${Qe.large}) {
        padding: 0.85rem;
        font-size: 1.1rem;
    }
    @media (min-width: ${Qe.xlarge}) {
        padding: 1rem;
        font-size: 1.2rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,iv=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,av=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.8rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #4e342e;
    width: 150px;
    transition: background-color 0.3s;
    margin-top: 15px;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${Qe.mobile}) {
        padding: 0.7rem;
        font-size: 0.9rem;
        width: 130px;
    }
    @media (min-width: ${Qe.large}) {
        padding: 0.9rem;
        font-size: 1.1rem;
        width: 160px;
    }
    @media (min-width: ${Qe.xlarge}) {
        padding: 1rem;
        font-size: 1.2rem;
        width: 170px;
    }
`,Dl=$.div`
    color: red;
    font-size: 0.8rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${Qe.large}) {
        font-size: 0.9rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
    }
`,sv=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,xv=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 400px;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${Qe.mobile}) {
        padding: 1.5rem;
        width: 90%;
    }
    @media (min-width: ${Qe.large}) {
        width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${Qe.xlarge}) {
        width: 600px;
        padding: 3rem;
    }
`,lv=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${Qe.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,cv=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${Qe.mobile}) {
        font-size: 20px;
    }
    @media (min-width: ${Qe.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,dv=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    @media (min-width: ${Qe.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`;function uv(){const{colmenaId:e}=pn(),t=st(),[r,n]=v.useState(!1),[o,i]=v.useState({});function x(w){const b=w+"=",_=document.cookie.split(";");for(let m=0;m<_.length;m++){let p=_[m];for(;p.charAt(0)==" ";)p=p.substring(1,p.length);if(p.indexOf(b)==0)return p.substring(b.length,p.length)}return null}const c=x("role"),[l,d]=v.useState({queen_observations:"",food_observations:"",general_observations:""}),h=w=>{const{name:b,value:_}=w.target;d(m=>({...m,[b]:_})),o[b]&&i(m=>({...m,[b]:""}))},f=w=>{let b={},_=!0;return w.queen_observations?w.queen_observations.length>500&&(b.queen_observations="Máximo 500 caracteres",_=!1):(b.queen_observations="Las observaciones sobre la reina son requeridas",_=!1),w.food_observations?w.food_observations.length>500&&(b.food_observations="Máximo 500 caracteres",_=!1):(b.food_observations="Las observaciones sobre la comida son requeridas",_=!1),w.general_observations?w.general_observations.length>500&&(b.general_observations="Máximo 500 caracteres",_=!1):(b.general_observations="Las observaciones generales son requeridas",_=!1),{isValid:_,errors:b}},B=async w=>{w.preventDefault();const _=new Date().toISOString(),m=x("token"),p=f(l);if(!p.isValid){i(p.errors);return}if(!e){alert("No se especificó el ID de la colmena");return}try{const E={monitoring_date:_,queen_observations:l.queen_observations,food_observations:l.food_observations,general_observations:l.general_observations,beekeeper:parseInt(x("id_User")),hive_id:parseInt(e)};if(!m)throw new Error("No token found");const C=await fetch(`https://colmenaresdeleje.onrender.com/monitoring/beehive-monitoring/${e}/`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify(E)});if(!C.ok){const D=await C.text();throw new Error(`HTTP error! status: ${C.status}, message: ${D}`)}const k=await C.json();console.log("Monitoreo registrado exitosamente:",k),n(!0)}catch(E){console.error("Error al enviar datos:",E),alert("Error al registrar el monitoreo: "+E.message)}},A=()=>{n(!1),t("/Dashboard")};return a.jsxs(tv,{children:[c==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-4",children:a.jsxs("div",{className:"row justify-content-center align-items-start",children:[a.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-4 mt-3",children:a.jsx(rv,{children:a.jsxs(nv,{onSubmit:B,children:[a.jsx(ov,{children:"Registrar Monitoreo"}),a.jsx(Fl,{children:"Observaciones sobre la Reina"}),a.jsx(wl,{type:"text",name:"queen_observations",placeholder:"Ingrese observaciones sobre la reina",value:l.queen_observations,onChange:h,required:!0}),o.queen_observations&&a.jsx(Dl,{children:o.queen_observations}),a.jsx(Fl,{children:"Observaciones sobre la Comida"}),a.jsx(wl,{type:"text",name:"food_observations",placeholder:"Ingrese observaciones sobre la comida",value:l.food_observations,onChange:h,required:!0}),o.food_observations&&a.jsx(Dl,{children:o.food_observations}),a.jsx(Fl,{children:"Observaciones Generales"}),a.jsx(wl,{type:"text",name:"general_observations",placeholder:"Ingrese observaciones generales",value:l.general_observations,onChange:h,required:!0}),o.general_observations&&a.jsx(Dl,{children:o.general_observations}),a.jsx(iv,{children:a.jsx(av,{type:"submit",children:"Registrar"})})]})})}),a.jsx("div",{className:"col-12 col-md-6 col-lg-4 mt-3",children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx(sv,{isVisible:r,children:a.jsxs(xv,{isVisible:r,children:[a.jsx(lv,{}),a.jsx(cv,{children:"Monitoreo Registrado"}),a.jsx("p",{children:"El monitoreo ha sido registrado exitosamente"}),a.jsx(dv,{onClick:A,children:"Aceptar"})]})})]})}function mv(e){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}mv(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Xd=e=>typeof e=="number"&&!isNaN(e),Pi=e=>typeof e=="string",dE=e=>typeof e=="function",fv=e=>Pi(e)||Xd(e),pv=e=>v.isValidElement(e)||Pi(e)||dE(e)||Xd(e),hv=1,uE=()=>`${hv++}`,Yr=new Map,Nc=[],Cp=new Set,mE=()=>Yr.size>0,Ev=(e,{containerId:t})=>{var r;return(r=Yr.get(t||1))==null?void 0:r.toasts.get(e)};function gv(e,t){var r;if(t)return!!((r=Yr.get(t))!=null&&r.isToastActive(e));let n=!1;return Yr.forEach(o=>{o.isToastActive(e)&&(n=!0)}),n}function Cv(e){if(!mE()){Nc=Nc.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||fv(e))Yr.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=Yr.get(e.containerId);t?t.removeToast(e.id):Yr.forEach(r=>{r.removeToast(e.id)})}}var Bv=(e={})=>{Yr.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function vv(e,t){pv(e)&&(mE()||Nc.push({content:e,options:t}),Yr.forEach(r=>{r.buildToast(e,t)}))}function fE(e,t){Yr.forEach(r=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===r.id)&&r.toggle(e,t==null?void 0:t.id)})}function Av(e){return Cp.add(e),()=>{Cp.delete(e)}}function yv(e){return e&&(Pi(e.toastId)||Xd(e.toastId))?e.toastId:uE()}function Vi(e,t){return vv(e,t),t.toastId}function ox(e,t){return{...t,type:t&&t.type||e,toastId:yv(t)}}function ix(e){return(t,r)=>Vi(t,ox(e,r))}function Re(e,t){return Vi(e,ox("default",t))}Re.loading=(e,t)=>Vi(e,ox("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Fv(e,{pending:t,error:r,success:n},o){let i;t&&(i=Pi(t)?Re.loading(t,o):Re.loading(t.render,{...o,...t}));let x={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,h,f)=>{if(h==null){Re.dismiss(i);return}let B={type:d,...x,...o,data:f},A=Pi(h)?{render:h}:h;return i?Re.update(i,{...B,...A}):Re(A.render,{...B,...A}),f},l=dE(e)?e():e;return l.then(d=>c("success",n,d)).catch(d=>c("error",r,d)),l}Re.promise=Fv;Re.success=ix("success");Re.info=ix("info");Re.error=ix("error");Re.warning=ix("warning");Re.warn=Re.warning;Re.dark=(e,t)=>Vi(e,ox("default",{theme:"dark",...t}));function wv(e){Cv(e)}Re.dismiss=wv;Re.clearWaitingQueue=Bv;Re.isActive=gv;Re.update=(e,t={})=>{let r=Ev(e,t);if(r){let{props:n,content:o}=r,i={delay:100,...n,...t,toastId:t.toastId||e,updateId:uE()};i.toastId!==e&&(i.staleId=e);let x=i.render||o;delete i.render,Vi(x,i)}};Re.done=e=>{Re.update(e,{progress:1})};Re.onChange=Av;Re.play=e=>fE(!0,e);Re.pause=e=>fE(!1,e);const he={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},Dv=$.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: ${he.large}) {
    max-width: 1920px;
    margin: 0 auto;
  }
`;$.img`
  height: 50px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: ${he.mobile}) {
    height: 40px;
    left: 8px;
  }
  @media (min-width: ${he.large}) {
    height: 60px;
    left: 15px;
  }
`;$.h1`
  margin: 0;
  color: #4e342e;
  font-size: 2.3rem;
  text-align: center;

  @media (max-width: ${he.mobile}) {
    font-size: 1.8rem;
  }
  @media (min-width: ${he.large}) {
    font-size: clamp(2.3rem, 2.5vw, 2.8rem);
  }
`;const bv=$.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  background-image: url("src/img/fondo(1).svg");
  background-size: cover;
  background-position: center;

  @media (max-width: ${he.mobile}) {
    padding: 0.5rem;
  }
  @media (min-width: ${he.large}) {
    padding: 2rem;
    background-size: contain;
    background-repeat: no-repeat;
  }
`,kv=$.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid grey;

  @media (max-width: ${he.mobile}) {
    padding: 1rem;
    max-width: 90%;
  }
  @media (min-width: ${he.large}) {
    max-width: 32rem;
    padding: 2rem;
  }
  @media (min-width: ${he.xlarge}) {
    max-width: 38rem;
    padding: 2.5rem;
  }
`,_v=$.h2`
  margin-bottom: 1rem;
  color: #4e342e;
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: ${he.mobile}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${he.large}) {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }
`,jv=$.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: ${he.large}) {
    gap: 1rem;
  }
`,Bp=$.label`
  font-weight: 500;
  color: rgb(0, 0, 0);
  text-align: left;
  font-size: 0.9rem;

  @media (max-width: ${he.mobile}) {
    font-size: 0.8rem;
  }
  @media (min-width: ${he.large}) {
    font-size: 1rem;
  }
`,Pv=$.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ffcc80;
  border-radius: 10px;
  background-color: #fffde7;
  color: #4e342e;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ffb300;
  }

  @media (max-width: ${he.mobile}) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
  @media (min-width: ${he.large}) {
    padding: 0.85rem;
    font-size: 1.1rem;
  }
`,Sv=$.button`
  background-color: #f9d77e;
  border: none;
  padding: 0.8rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #4e342e;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f8c150;
  }

  @media (max-width: ${he.mobile}) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
  @media (min-width: ${he.large}) {
    padding: 0.9rem;
    font-size: 1.1rem;
  }
`,vp=$.div`
  position: relative;
  width: 100%;
`,Ap=$(Pv)`
  padding-right: 2.5rem;

  @media (max-width: ${he.mobile}) {
    padding-right: 2rem;
  }
  @media (min-width: ${he.large}) {
    padding-right: 3rem;
  }
`,yp=$.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #4e342e;

  @media (max-width: ${he.mobile}) {
    right: 8px;
  }
  @media (min-width: ${he.large}) {
    right: 12px;
  }
`,$v=$.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${e=>e.isVisible?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Nv=$.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
  transition: transform 0.4s ease-in-out;

  @media (max-width: ${he.mobile}) {
    padding: 1.5rem;
    max-width: 90%;
  }
  @media (min-width: ${he.large}) {
    max-width: 500px;
    padding: 2.5rem;
  }
  @media (min-width: ${he.xlarge}) {
    max-width: 600px;
    padding: 3rem;
  }
`,Tv=$.div`
  width: 80px;
  height: 80px;
  margin: -40px auto 20px;
  border-radius: 50%;
  background: #f9d77e;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '✓';
    font-size: 40px;
    color: white;
  }

  @media (max-width: ${he.mobile}) {
    width: 60px;
    height: 60px;
    margin: -30px auto 15px;
    &::after {
      font-size: 30px;
    }
  }
  @media (min-width: ${he.large}) {
    width: 90px;
    height: 90px;
    margin: -45px auto 25px;
    &::after {
      font-size: 45px;
    }
  }
`,zv=$.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: ${he.mobile}) {
    font-size: 20px;
  }
  @media (min-width: ${he.large}) {
    font-size: clamp(24px, 2.5vw, 28px);
  }
`,Iv=$.button`
  background: #f9d77e;
  color: black;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #f8c150;
  }

  @media (max-width: ${he.mobile}) {
    padding: 8px 25px;
    font-size: 14px;
  }
  @media (min-width: ${he.large}) {
    padding: 12px 35px;
    font-size: 18px;
  }
`,bl=$.div`
  font-size: ${e=>e.size||"0.8rem"};
  color: ${e=>e.color||"#666"};
  text-align: ${e=>e.align||"left"};
  margin-top: ${e=>e.marginTop||"0"};

  @media (max-width: ${he.mobile}) {
    font-size: ${e=>`calc(${e.size||"0.8rem"} - 0.1rem)`};
  }
  @media (min-width: ${he.large}) {
    font-size: ${e=>`calc(${e.size||"0.8rem"} + 0.1rem)`};
  }
`;function Ov(){const{uidb64:e,token:t}=pn(),r=st(),[n,o]=v.useState(!1),[i,x]=v.useState({newPassword:"",confirmPassword:""}),[c,l]=v.useState({newPassword:!1,confirmPassword:!1}),[d,h]=v.useState({loading:!1,error:"",passwordStrength:0}),f=_=>{let m=0;return _.length>=8&&m++,/[A-Z]/.test(_)&&m++,/[0-9]/.test(_)&&m++,/[^A-Za-z0-9]/.test(_)&&m++,m},B=_=>{const{name:m,value:p}=_.target;x(E=>({...E,[m]:p})),m==="newPassword"&&h(E=>({...E,passwordStrength:f(p)}))},A=async _=>{if(_.preventDefault(),i.newPassword!==i.confirmPassword){h(m=>({...m,error:"Las contraseñas no coinciden"}));return}h(m=>({...m,loading:!0,error:""}));try{const m=new AbortController,p=setTimeout(()=>m.abort(),8e3),E=await fetch(`https://colmenaresdeleje.onrender.com/users/password_reset_confirm/${e}/${t}/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:i.newPassword,password2:i.confirmPassword}),signal:m.signal});clearTimeout(p);const C=await E.json();if(!E.ok){const k=C.error||C.password||C.password2||C.detail||"Error en la respuesta del servidor";throw new Error(typeof k=="object"?JSON.stringify(k):k)}o(!0),setTimeout(()=>{r("/")},2e3)}catch(m){console.error("Error completo:",m),Re.error(m.message||"Error al actualizar la contraseña"),h(p=>({...p,error:m.message||"Error al procesar la solicitud. Por favor, intente nuevamente."}))}finally{h(m=>({...m,loading:!1}))}},w=()=>{const _=["#ff4444","#ffbb33","#00C851","#007E33"];return _[d.passwordStrength-1]||_[0]},b=()=>["Débil","Media","Buena","Fuerte"][d.passwordStrength-1]||"";return a.jsxs(Dv,{children:[a.jsx(Ri,{}),a.jsx(bv,{children:a.jsxs(kv,{children:[a.jsx(_v,{children:"Restablecer Contraseña"}),a.jsxs(jv,{onSubmit:A,children:[a.jsx(Bp,{children:"Nueva Contraseña"}),a.jsxs(vp,{children:[a.jsx(Ap,{type:c.newPassword?"text":"password",name:"newPassword",value:i.newPassword,onChange:B,required:!0,placeholder:"Ingrese la nueva contraseña",disabled:d.loading}),a.jsx(yp,{type:"button",onClick:()=>l(_=>({..._,newPassword:!_.newPassword})),children:c.newPassword?a.jsx(ks,{size:20}):a.jsx(v0,{size:20})})]}),i.newPassword&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{height:"4px",backgroundColor:"#eee",borderRadius:"2px",overflow:"hidden",marginTop:"5px"},children:a.jsx("div",{style:{width:`${d.passwordStrength/4*100}%`,height:"100%",backgroundColor:w(),transition:"all 0.3s"}})}),a.jsx(bl,{size:"0.8rem",color:w(),align:"right",children:b()}),a.jsx(bl,{size:"0.75rem",color:"#666",marginTop:"-5px",children:"La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial."})]}),a.jsx(Bp,{children:"Confirmar Contraseña"}),a.jsxs(vp,{children:[a.jsx(Ap,{type:c.confirmPassword?"text":"password",name:"confirmPassword",value:i.confirmPassword,onChange:B,required:!0,placeholder:"Confirme la nueva contraseña",disabled:d.loading}),a.jsx(yp,{type:"button",onClick:()=>l(_=>({..._,confirmPassword:!_.confirmPassword})),children:c.confirmPassword?a.jsx(ks,{size:20}):a.jsx(v0,{size:20})})]}),d.error&&a.jsx(bl,{size:"0.875rem",color:"#ff4444",marginTop:"0.5rem",children:d.error}),a.jsx(Sv,{type:"submit",disabled:d.loading||!i.newPassword||!i.confirmPassword,style:{opacity:d.loading||!i.newPassword||!i.confirmPassword?.7:1,cursor:d.loading||!i.newPassword||!i.confirmPassword?"not-allowed":"pointer"},children:d.loading?"Procesando...":"Guardar"})]})]})}),a.jsx(pt,{}),a.jsx($v,{isVisible:n,children:a.jsxs(Nv,{isVisible:n,children:[a.jsx(Tv,{}),a.jsx(zv,{children:"Contraseña actualizada correctamente"}),a.jsx(Iv,{onClick:()=>o(!1),children:"Aceptar"})]})})]})}const $e={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},Lv=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;

    @media (min-width: ${$e.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`,Rv=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    max-width: 495px;

    @media (min-width: ${$e.large}) {
        max-width: 32rem;
        padding: 1.5rem;
    }
    @media (min-width: ${$e.xlarge}) {
        max-width: 38rem;
        padding: 2rem;
    }
`,Mv=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${$e.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
    @media (min-width: ${$e.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem);
        margin-bottom: 1.5rem;
    }
`,Vv=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    @media (min-width: ${$e.large}) {
        gap: 0.75rem;
    }
`,Jr=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem; // Ajustado de 1.5rem a 0.9rem para consistencia

    @media (max-width: ${$e.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 0.1rem;
    }
    @media (min-width: ${$e.large}) {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
`,en=$.input`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    transition: border-color 0.3s;

    @media (max-width: ${$e.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    @media (min-width: ${$e.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${$e.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }

    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }
`;$.select`
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    background-color: #fffde7;
    font-size: 0.85rem;

    @media (max-width: ${$e.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    @media (min-width: ${$e.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${$e.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }
`;$.div`
    position: relative;
    width: 100%;
`;$.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #4e342e;

    @media (min-width: ${$e.large}) {
        right: 12px;
    }
`;const Hv=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; // Ajustado para consistencia con UserRegister
    flex-wrap: wrap; // Permite que los botones se ajusten en pantallas pequeñas
`,Fp=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }

    @media (max-width: ${$e.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    @media (min-width: ${$e.large}) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: ${$e.xlarge}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }

    &.disable-btn {
        background-color: #dc3545;
        color: black;

        &:hover {
            background-color: #c82333;
        }

        &:disabled {
            background-color: #dc354580;
        }
    }
`,yn=$.div`
    color: red;
    font-size: 0.75rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${$e.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
    }
`,Uv=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,Wv=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${$e.mobile}) {
        padding: 1.5rem;
        width: 85%;
    }
    @media (min-width: ${$e.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${$e.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`,Qv=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${$e.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,Yv=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${$e.mobile}) {
        font-size: 20px;
    }
    @media (min-width: ${$e.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,Gv=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    @media (min-width: ${$e.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`;function qv(){const e=v.useRef(null),[t,r]=v.useState(!1),[n,o]=v.useState({}),{id:i}=pn(),[x,c]=v.useState(!1),l=i;function d(m){const p=m+"=",E=document.cookie.split(";");for(let C=0;C<E.length;C++){let k=E[C];for(;k.charAt(0)==" ";)k=k.substring(1,k.length);if(k.indexOf(p)==0)return k.substring(p.length,k.length)}return null}const h=d("token"),[f,B]=v.useState({username:"",nombreApicultor:"",apellidoApicultor:"",identificacion:"",telefono:"",correo:"",fechaNacimiento:"",nombreContactoEmergencia:"",contactoEmergencia:"",estado:"Active"});v.useState({password:!1}),v.useEffect(()=>{if(!l)return;(async()=>{try{const p=await fetch(`https://colmenaresdeleje.onrender.com/detail-beekeeper/${l}/`,{headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"}});if(!p.ok)throw new Error("Error al obtener datos del apicultor");const E=await p.json();B({username:E.username||"",nombreApicultor:E.first_name||"",apellidoApicultor:E.last_name||"",identificacion:E.identifications||"",telefono:E.phone||"",correo:E.email||"",fechaNacimiento:E.birth_date||"",nombreContactoEmergencia:E.emergency_contact_name||"",contactoEmergencia:E.emergency_contact_phone||"",estado:E.state==="Activo"?"Active":"Deactivate"})}catch(p){alert(`Error: ${p.message}`)}})()},[l,h]);const A=m=>{let p={},E=!0;const C=/^[0-9]{8,10}$/;m.identificacion&&!C.test(m.identificacion)&&(p.identificacion="La cédula debe contener entre 8 y 10 dígitos numéricos",E=!1);const k=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;m.correo&&!k.test(m.correo)&&(p.correo="Formato de correo inválido",E=!1);const D=/^[0-9]{7,10}$/;m.telefono&&!D.test(m.telefono)&&(p.telefono="El teléfono debe contener entre 7 y 10 dígitos",E=!1),m.contactoEmergencia&&!D.test(m.contactoEmergencia)&&(p.contactoEmergencia="El contacto debe contener entre 7 y 10 dígitos",E=!1);const F=/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;return m.nombreApicultor&&!F.test(m.nombreApicultor)&&(p.nombreApicultor="El nombre solo debe contener letras y espacios",E=!1),m.apellidoApicultor&&!F.test(m.apellidoApicultor)&&(p.apellidoApicultor="El apellido solo debe contener letras y espacios",E=!1),m.nombreContactoEmergencia&&!F.test(m.nombreContactoEmergencia)&&(p.nombreContactoEmergencia="El nombre solo debe contener letras y espacios",E=!1),{isValid:E,errors:p}},w=m=>{const{name:p,value:E}=m.target;B(C=>({...C,[p]:E})),n[p]&&o(C=>({...C,[p]:""}))},b=async m=>{m.preventDefault();const p=A(f);if(!p.isValid){o(p.errors);return}const E={first_name:f.nombreApicultor,last_name:f.apellidoApicultor,identifications:f.identificacion,email:f.correo,phone:f.telefono,birth_date:f.fechaNacimiento,emergency_contact_name:f.nombreContactoEmergencia,emergency_contact_phone:f.contactoEmergencia,state:"Active",assignment_date:new Date().toISOString().split("T")[0]};try{const C=await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/edit-beekeeper/${l}/`,{method:"PATCH",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"},body:JSON.stringify(E)});if(!C.ok){const k=await C.json();throw new Error(JSON.stringify(k)||"Error al actualizar")}r(!0)}catch(C){alert(`Error: ${C.message}`)}},_=async()=>{try{c(!0);const m={state:"Deactivate"},p=await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/edit-state-beekeeper/${l}/`,{method:"PATCH",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json"},body:JSON.stringify(m)});if(!p.ok){const E=await p.json();throw new Error(E.error||"Error al deshabilitar apicultor")}B(E=>({...E,estado:"Deactivate"})),r(!0)}catch(m){alert(`Error: ${m.message}`)}finally{c(!1)}};return a.jsxs(Lv,{children:[a.jsx(Jt,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-3",children:a.jsxs("div",{className:"row justify-content-center",children:[a.jsx("div",{className:"col-lg-6 col-md-12 mb-3",children:a.jsxs(Rv,{children:[a.jsx(Mv,{children:"Editar Apicultor"}),a.jsxs(Vv,{onSubmit:b,ref:e,children:[a.jsx(Jr,{htmlFor:"username",children:"Usuario"}),a.jsx(en,{type:"text",id:"username",value:f.username,disabled:!0}),a.jsx(Jr,{htmlFor:"nombreApicultor",children:"Nombre del apicultor"}),a.jsx(en,{type:"text",id:"nombreApicultor",name:"nombreApicultor",placeholder:"Ingrese el nombre del apicultor",value:f.nombreApicultor,onChange:w,required:!0}),n.nombreApicultor&&a.jsx(yn,{children:n.nombreApicultor}),a.jsx(Jr,{htmlFor:"apellidoApicultor",children:"Apellido del apicultor"}),a.jsx(en,{type:"text",id:"apellidoApicultor",name:"apellidoApicultor",placeholder:"Ingrese el apellido del apicultor",value:f.apellidoApicultor,onChange:w,required:!0}),n.apellidoApicultor&&a.jsx(yn,{children:n.apellidoApicultor}),a.jsx(Jr,{htmlFor:"identificacion",children:"Identificación"}),a.jsx(en,{type:"number",id:"identificacion",name:"identificacion",placeholder:"Ingrese la identificación del apicultor",value:f.identificacion,onChange:w,required:!0}),n.identificacion&&a.jsx(yn,{children:n.identificacion}),a.jsx(Jr,{htmlFor:"correo",children:"Correo"}),a.jsx(en,{type:"email",id:"correo",name:"correo",placeholder:"Ingrese el correo del apicultor",value:f.correo,onChange:w,required:!0}),n.correo&&a.jsx(yn,{children:n.correo}),a.jsx(Jr,{htmlFor:"telefono",children:"Teléfono"}),a.jsx(en,{type:"tel",id:"telefono",name:"telefono",placeholder:"Ingrese el número del apicultor",value:f.telefono,onChange:w,required:!0}),n.telefono&&a.jsx(yn,{children:n.telefono}),a.jsx(Jr,{htmlFor:"fechaNacimiento",children:"Fecha de Nacimiento"}),a.jsx(en,{type:"date",id:"fechaNacimiento",name:"fechaNacimiento",value:f.fechaNacimiento,onChange:w,required:!0}),n.fechaNacimiento&&a.jsx(yn,{children:n.fechaNacimiento}),a.jsx(Jr,{htmlFor:"nombreContactoEmergencia",children:"Nombre de contacto de emergencia"}),a.jsx(en,{type:"text",id:"nombreContactoEmergencia",name:"nombreContactoEmergencia",placeholder:"Ingrese el nombre del contacto de emergencia",value:f.nombreContactoEmergencia,onChange:w,required:!0}),n.nombreContactoEmergencia&&a.jsx(yn,{children:n.nombreContactoEmergencia}),a.jsx(Jr,{htmlFor:"contactoEmergencia",children:"Contacto de emergencia"}),a.jsx(en,{type:"tel",id:"contactoEmergencia",name:"contactoEmergencia",placeholder:"Ingrese el contacto de emergencia",value:f.contactoEmergencia,onChange:w,required:!0}),n.contactoEmergencia&&a.jsx(yn,{children:n.contactoEmergencia}),a.jsxs(Hv,{children:[a.jsx(Fp,{type:"submit",children:"Actualizar"}),a.jsx(Fp,{type:"button",className:"disable-btn",onClick:_,disabled:x,children:x?"Procesando...":"Deshabilitar"}),a.jsx(lE,{})]})]})]})}),a.jsx("div",{className:"col-lg-6 col-md-12",children:a.jsx(gr,{className:"mb-3"})})]})}),a.jsx(pt,{}),a.jsx(Uv,{isVisible:t,children:a.jsxs(Wv,{isVisible:t,children:[a.jsx(Qv,{}),a.jsx(Yv,{children:"Actualización Exitosa"}),a.jsx("p",{children:"El apicultor ha sido actualizado exitosamente"}),a.jsx(Gv,{onClick:()=>r(!1),children:"Aceptar"})]})})]})}const kl="/assets/apicultor_icon-CBawDW9F.png",Xv="/assets/apicultor_icon_3-dDIv9hy_.png",Kv="/assets/apicultor_icon_2-HrzgEy1W.png";function Zv(){const[e,t]=v.useState([]),[r,n]=v.useState(null),[o,i]=v.useState(!0),[x,c]=v.useState(""),l=st(),[d,h]=v.useState(null),[f,B]=v.useState(!1),[A,w]=v.useState(!1),[b,_]=v.useState({}),[m,p]=v.useState(""),[E,C]=v.useState(!1);v.useEffect(()=>{const L=document.createElement("style");return L.textContent=`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .apicultor-card {
        transition: all 0.3s ease;
        transform: translateZ(0);
        cursor: pointer;
      }
      .apicultor-card:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        transform: translateY(-5px) !important;
      }
      .honey-button {
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      .honey-button:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: radial-gradient(circle, transparent 10%, rgba(255,255,0,0.1) 10.01%);
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 0.5s;
      }
      .honey-button:active:after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
      }
    `,document.head.appendChild(L),()=>{document.head.removeChild(L)}},[]),v.useEffect(()=>{f?(p("animate-modal-in"),setTimeout(()=>{C(!0)},300)):(p("animate-modal-out"),C(!1))},[f]);function k(L){const T=L+"=",H=document.cookie.split(";");for(let O=0;O<H.length;O++){let I=H[O];for(;I.charAt(0)==" ";)I=I.substring(1,I.length);if(I.indexOf(T)==0)return I.substring(T.length,I.length)}return null}const D=[{id:1,first_name:"Juan",last_name:"Pérez",state:"Active",imagen:kl},{id:2,first_name:"María",last_name:"Gómez",state:"Active",imagen:Xv},{id:3,first_name:"Carlos",last_name:"Ramírez",state:"Inactive",imagen:Kv}],F=async(L,T)=>{switch(_(H=>({...H,[T]:L.target.value})),L.target.value){case"editar":l(`/EditUser/${T}`,{state:{id:T}});break;case"ver-detalles":h(null),setTimeout(async()=>{try{const H=k("token"),O=await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/detail-beekeeper/${T}`,{headers:{Authorization:`Bearer ${H}`}});if(!O.ok)throw new Error("Error al cargar detalles");const I=await O.json();h({id:T,...I}),B(!0)}catch{alert("Error al cargar detalles")}},10);break}},P=async L=>{if(!A)try{w(!0);const T=k("token"),H=L.state==="Active"?"Deactivate":"Active",O=await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/edit-state-beekeeper/${L.id}/`,{method:"PATCH",headers:{Authorization:`Bearer ${T}`,"Content-Type":"application/json"},body:JSON.stringify({state:H})});if(!O.ok){const R=await O.json();throw new Error(R.error||"Error al actualizar el estado")}const I=await O.json();t(R=>H==="Deactivate"?R.filter(N=>N.id!==L.id):R.map(N=>N.id===L.id?{...N,state:H}:N)),h(R=>({...R,state:H})),H==="Deactivate"&&z(),alert("Estado actualizado correctamente")}catch(T){alert(`Error: ${T.message}`)}finally{w(!1)}};v.useEffect(()=>{(async()=>{try{i(!0);const T=k("token"),H=await fetch("https://colmenaresdeleje.onrender.com/beekeepers/list-beekeepers/",{headers:{Authorization:`Bearer ${T}`,"Content-Type":"application/json"}});if(!H.ok)throw new Error("Error en la respuesta del servidor");const I=(await H.json()).filter(R=>R.role==="beekeeper"&&R.state==="Active");t(I),i(!1)}catch(T){n(T),t(D.filter(H=>H.state==="Active")),i(!1)}})()},[]);const z=()=>{d&&d.id&&_(L=>({...L,[d.id]:""})),B(!1),setTimeout(()=>{h(null)},400)},j={animateModalIn:{animation:"fadeIn 0.3s ease-out forwards"},animateModalOut:{animation:"fadeOut 0.3s ease-in forwards"},detailsAnimation:{opacity:E?1:0,transform:E?"translateY(0)":"translateY(20px)",transition:"opacity 0.5s ease-out, transform 0.5s ease-out"},statusBadge:{transition:"background-color 0.3s ease"},modalContent:{transform:f?"scale(1)":"scale(0.8)",transition:"transform 0.3s ease"},profileImage:{transition:"transform 0.3s ease"}};if(o)return a.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:a.jsx("div",{className:"spinner-border text-warning",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Cargando..."})})});const U=e.filter(L=>`${L.first_name} ${L.last_name}`.toLowerCase().includes(x.toLowerCase()));return a.jsxs("div",{className:"d-flex flex-column min-vh-100",children:[a.jsx(Jt,{}),a.jsx("div",{className:"container-fluid flex-grow-1 py-3",children:a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-12 col-lg-8 col-xl-7 mb-4 mx-auto",children:[a.jsx("div",{className:"card shadow-sm mb-4 mx-2 mx-md-3",style:{animation:"fadeIn 0.5s ease-out forwards"},children:a.jsx("div",{className:"card-body",children:a.jsxs("div",{className:"input-group",children:[a.jsx("span",{className:"input-group-text bg-warning-subtle border-warning-subtle",children:a.jsx("i",{className:"bi bi-search"})}),a.jsx("input",{type:"text",className:"form-control bg-warning-subtle border-warning-subtle",placeholder:"Buscar apicultor por nombre...",value:x,onChange:L=>c(L.target.value)})]})})}),a.jsx("div",{className:"d-flex flex-column gap-3",children:e.length>0?U.length>0?U.map((L,T)=>a.jsx("div",{className:"card shadow-lg border rounded p-3 mx-2 mx-md-3 apicultor-card",style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:`${.1+T*.05}s`,opacity:0},children:a.jsxs("div",{className:"row g-0 align-items-center",children:[a.jsx("div",{className:"col-12 col-sm-4 mb-3 mb-sm-0 text-center",children:a.jsx("img",{src:kl,alt:`Imagen de ${L.first_name} ${L.last_name}`,className:"img-fluid rounded-circle",style:{height:"150px",width:"150px",objectFit:"cover",border:"3px solid gray",transition:"transform 0.3s ease"},onMouseOver:H=>H.target.style.transform="scale(1.05) rotate(5deg)",onMouseOut:H=>H.target.style.transform="scale(1) rotate(0deg)"})}),a.jsxs("div",{className:"col-12 col-sm-5 text-center text-sm-start mb-3 mb-sm-0",children:[a.jsxs("h3",{className:"mb-1 ms-0 ms-sm-3",children:[L.first_name," ",L.last_name]}),a.jsx("p",{className:"mb-0 ms-0 ms-sm-3",children:a.jsx("span",{className:"badge bg-success",style:j.statusBadge,children:"Activo"})})]}),a.jsx("div",{className:"col-12 col-sm-3 text-center",children:a.jsxs("select",{className:"form-select form-select-sm bg-warning-subtle border-warning-subtle",onChange:H=>F(H,L.id),value:b[L.id]||"",children:[a.jsx("option",{value:"",children:"Seleccionar"}),a.jsx("option",{value:"editar",children:"Editar"}),a.jsx("option",{value:"ver-detalles",children:"Ver detalles"})]})})]})},L.id)):a.jsxs("div",{className:"alert alert-info mx-2 mx-md-3",role:"alert",style:{animation:"fadeIn 0.5s ease-out forwards"},children:['No se encontraron apicultores con el nombre "',x,'"']}):a.jsx("div",{className:"alert alert-warning mx-2 mx-md-3",role:"alert",style:{animation:"fadeIn 0.5s ease-out forwards"},children:"No hay apicultores activos registrados"})})]}),a.jsx("div",{className:"col-12 col-lg-4 col-xl-3 d-flex justify-content-end pe-5 ml-4",children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx("div",{className:`modal fade ${f?"show":""}`,id:"apicultorModal",tabIndex:"-1","aria-labelledby":"apicultorModalLabel","aria-hidden":"true",onClick:z,style:{display:f?"block":"none",backgroundColor:"rgba(0, 0, 0, 0.5)",...j[m]},children:a.jsx("div",{className:"modal-dialog modal-dialog-centered",children:a.jsxs("div",{className:"modal-content",style:j.modalContent,children:[a.jsxs("div",{className:"modal-header border-0 pb-0",children:[a.jsx("img",{src:"src/img/Colmenares_del_eje_logo.png",alt:"Logo",style:{height:"35px",animation:f?"spin 1s ease-in-out":"none"},className:"mx-auto"}),a.jsx("button",{type:"button",className:"btn-close",onClick:z,"aria-label":"Close"})]}),a.jsx("div",{className:"modal-body",children:d&&a.jsxs("div",{style:j.detailsAnimation,children:[a.jsx("h5",{className:"modal-title text-center mb-4",id:"apicultorModalLabel",style:{display:"inline-block",animation:"fadeIn 0.5s ease-out forwards",width:"100%"},children:"Información del apicultor"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-12 col-md-5 text-center mb-4 mb-md-0",children:[a.jsx("img",{src:kl,alt:`Imagen de ${d.first_name}`,className:"rounded-circle border border-3 border-secondary",style:{width:"150px",height:"150px",objectFit:"cover",animation:"fadeIn 0.5s ease-out forwards",transition:"transform 0.3s ease"},onMouseOver:L=>L.target.style.transform="scale(1.05) rotate(5deg)",onMouseOut:L=>L.target.style.transform="scale(1) rotate(0deg)"}),a.jsxs("div",{className:"d-flex flex-column gap-2 mt-3",children:[a.jsx("button",{className:"btn btn-warning honey-button",onClick:()=>l(`/EditUser/${d.id}`,{state:{id:d.id}}),style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.1s",opacity:0},children:"Editar"}),a.jsxs("button",{className:`btn honey-button ${d.state==="Active"?"btn-danger":"btn-success"}`,onClick:()=>P(d),disabled:A,style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.2s",opacity:0},children:[A?a.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}):null,d.state==="Active"?"Deshabilitar":"Habilitar"]})]})]}),a.jsx("div",{className:"col-12 col-md-7",children:[{label:"Nombres",value:d.first_name},{label:"Apellidos",value:d.last_name},{label:"Identificación",value:d.identifications},{label:"Teléfono",value:d.phone},{label:"Correo",value:d.email},{label:"Contacto de emergencia",value:d.emergency_contact_name},{label:"Teléfono de emergencia",value:d.emergency_contact_phone},{label:"Fecha de nacimiento",value:d.birth_date},{label:"Fecha de asignación",value:d.assignment_date}].map((L,T)=>a.jsxs("p",{style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:`${.1+T*.05}s`,opacity:0,transform:"translateY(10px)"},children:[a.jsxs("strong",{children:[L.label,":"]})," ",L.value]},T))})]})]})})]})})}),f&&a.jsx("div",{className:"modal-backdrop fade show"})]})}function Jv(){const e=st(),[t,r]=v.useState(null),[n,o]=v.useState(!1),[i,x]=v.useState([]),[c,l]=v.useState(!0),[d,h]=v.useState(null),[f,B]=v.useState(!0),[A,w]=v.useState(""),[b,_]=v.useState(!1),[m,p]=v.useState({});function E(T){const H=T+"=",O=document.cookie.split(";");for(let I=0;I<O.length;I++){let R=O[I];for(;R.charAt(0)==" ";)R=R.substring(1,R.length);if(R.indexOf(H)==0)return R.substring(H.length,R.length)}return null}const C=E("role"),k=E("token"),D=()=>{const T=[...i].sort((H,O)=>{const I=new Date(H.monitoring_date),R=new Date(O.monitoring_date);return f?I-R:R-I});x(T),B(!f)},F=T=>{const H={year:"numeric",month:"long",day:"numeric"};return new Date(T).toLocaleDateString("es-ES",H)};v.useEffect(()=>{const T=document.createElement("style");return T.textContent=`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .monitoring-card {
        transition: all 0.3s ease;
        transform: translateZ(0);
        cursor: pointer;
      }
      .monitoring-card:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        transform: translateY(-5px) !important;
      }
      .honey-button {
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      .honey-button:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: radial-gradient(circle, transparent 10%, rgba(255,255,0,0.1) 10.01%);
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 0.5s;
      }
      .honey-button:active:after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
      }
    `,document.head.appendChild(T),()=>{document.head.removeChild(T)}},[]),v.useEffect(()=>{n?(w("animate-modal-in"),setTimeout(()=>{_(!0)},300)):(w("animate-modal-out"),_(!1))},[n]),v.useEffect(()=>{(async()=>{try{l(!0);const H=await fetch("https://colmenaresdeleje.onrender.com/monitoring/list-beehive-monitoring/",{headers:{Authorization:`Bearer ${k}`}});if(!H.ok)throw new Error(`Error en la respuesta del servidor: ${H.status}`);const O=await H.json();x(O),h(null)}catch(H){console.error("Error al cargar los monitoreos:",H),h("No se pudieron cargar los datos de monitoreo. Por favor, intenta nuevamente más tarde.")}finally{l(!1)}})()},[]);const P=(T,H)=>{p({...m,[H]:T.target.value}),T.target.value==="visualizar-detalles"&&(r(null),setTimeout(()=>{r(H),o(!0)},10))},z=()=>{t&&p({...m,[t]:""}),o(!1),setTimeout(()=>{r(null)},400)},j=()=>i.find(T=>T.id===t),U=T=>{const H=j();e(`/Edit_Monitoreo/${T}`,{state:{hive_id:H.hive_id,monitoring_date:H.monitoring_date,queen_observations:H.queen_observations,queen_presence:H.queen_presence,general_observations:H.general_observations}})},L={animateModalIn:{animation:"fadeIn 0.3s ease-out forwards"},animateModalOut:{animation:"fadeOut 0.3s ease-in forwards"},detailsAnimation:{opacity:b?1:0,transform:b?"translateY(0)":"translateY(20px)",transition:"opacity 0.5s ease-out, transform 0.5s ease-out"},modalContent:{transform:n?"scale(1)":"scale(0.8)",transition:"transform 0.3s ease"}};return a.jsxs("div",{className:"d-flex flex-column min-vh-100",children:[C==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx(rx,{fluid:!0,className:"flex-grow-1 py-3",children:a.jsxs(ho,{children:[a.jsxs(gt,{xs:12,lg:8,xl:7,className:"mb-4 mx-auto",children:[a.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[a.jsx("h4",{className:"mb-0",children:"Monitoreos"}),!c&&i.length>0&&a.jsxs(Yt,{variant:"outline-warning",size:"sm",onClick:D,className:"d-flex align-items-center gap-1 honey-button",children:[a.jsx("span",{children:"Ordenar por fecha"}),a.jsx("i",{className:`bi bi-sort-${f?"down":"up"}`}),f?" ↑":" ↓"]})]}),a.jsx("div",{className:"d-flex flex-column gap-3",children:c?a.jsxs("div",{className:"text-center p-4",children:[a.jsx(Gd,{animation:"border",variant:"warning"}),a.jsx("p",{className:"mt-2 text-muted",children:"Cargando monitoreos..."})]}):d?a.jsx(Bt,{className:"shadow-sm border-danger p-3",children:a.jsx(Bt.Body,{className:"text-center text-danger",children:d})}):i.length===0?a.jsx(Bt,{className:"shadow-sm p-3",children:a.jsx(Bt.Body,{className:"text-center",children:a.jsx("p",{children:"No hay monitoreos disponibles"})})}):i.map((T,H)=>a.jsx(Bt,{className:"shadow-lg border rounded p-3 mx-2 mx-md-3 monitoring-card",style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:`${H*.1}s`,opacity:0},children:a.jsxs(ho,{className:"g-0 align-items-center",children:[a.jsx(gt,{xs:12,sm:4,className:"mb-3 mb-sm-0",children:a.jsx("img",{src:ji,alt:`Monitoreo del ${F(T.monitoring_date)}`,className:"img-fluid rounded",style:{maxHeight:"200px",width:"100%",objectFit:"cover",transition:"transform 0.3s ease"},onMouseOver:O=>O.target.style.transform="scale(1.05)",onMouseOut:O=>O.target.style.transform="scale(1)"})}),a.jsxs(gt,{xs:12,sm:5,className:"text-center text-sm-start mb-3 mb-sm-0",children:[a.jsxs("h3",{className:"mb-1 ms-0 ms-sm-3",children:["Fecha: ",F(T.monitoring_date)]}),a.jsxs("p",{className:"mb-0 ms-0 ms-sm-3",children:["Numero de colmena: ",T.hive_id]})]}),a.jsx(gt,{xs:12,sm:3,className:"text-center",children:a.jsxs(xE.Select,{size:"sm",className:"bg-warning-subtle border-warning-subtle",onChange:O=>P(O,T.id),value:m[T.id]||"",children:[a.jsx("option",{value:"",children:"Seleccionar"}),a.jsx("option",{value:"visualizar-detalles",children:"Visualizar Detalles"})]})})]})},T.id))})]}),a.jsx(gt,{xs:12,lg:4,xl:3,children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx("div",{className:`modal fade ${n?"show":""}`,tabIndex:"-1",onClick:z,style:{display:n?"block":"none",backgroundColor:"rgba(0, 0, 0, 0.5)",...L[A]},children:a.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:a.jsxs("div",{className:"modal-content",style:L.modalContent,children:[a.jsxs("div",{className:"modal-header border-0 pb-0",children:[a.jsx("img",{src:"src/img/Colmenares_del_eje_logo.png",alt:"Logo",style:{height:"35px",animation:n?"spin 1s ease-in-out":"none"},className:"mx-auto"}),a.jsx(Yt,{variant:"light",className:"btn-close",onClick:z})]}),a.jsx("div",{className:"modal-body",children:t&&(()=>{const T=j();return T?a.jsxs("div",{style:L.detailsAnimation,children:[a.jsx("h2",{className:"text-center mb-4",children:"Información del Monitoreo"}),a.jsxs(ho,{children:[a.jsxs(gt,{xs:12,md:5,className:"text-center mb-4 mb-md-0",children:[a.jsx("img",{src:ji,alt:"Imagen monitoreo",className:"rounded-circle border border-3 border-secondary",style:{width:"150px",height:"150px",objectFit:"cover",transition:"transform 0.3s ease"},onMouseOver:H=>H.target.style.transform="scale(1.05) rotate(5deg)",onMouseOut:H=>H.target.style.transform="scale(1) rotate(0deg)"}),a.jsx("div",{className:"d-flex flex-column gap-2 mt-3",children:a.jsxs(Yt,{variant:"warning",onClick:()=>U(T.id),className:"px-4 d-flex align-items-center gap-2 mx-auto honey-button",style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.2s",opacity:0},children:[a.jsx("i",{className:"bi bi-pencil-square"}),"Editar Monitoreo"]})})]}),a.jsx(gt,{xs:12,md:7,children:[{label:"Fecha",value:F(T.monitoring_date)},{label:"Observaciones Reina",value:T.queen_observations||"Sin observaciones"},{label:"Observaciones Alimento",value:T.food_observations||"Sin observaciones"},{label:"Observaciones Generales",value:T.general_observations||"Sin observaciones"},{label:"Colmena",value:T.hive_id},{label:"Apicultor",value:`${T.beekeeper.first_name} ${T.beekeeper.last_name}`}].map((H,O)=>a.jsxs("p",{style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:`${.1+O*.1}s`,opacity:0,transform:"translateY(10px)"},children:[a.jsxs("strong",{children:[H.label,":"]})," ",H.value]},O))})]})]}):a.jsx("p",{className:"text-center",children:"No se encontró información detallada para este monitoreo."})})()})]})})}),n&&a.jsx("div",{className:"modal-backdrop fade show"})]})}function e3(){const e=st(),{colmenaId:t}=pn(),[r,n]=v.useState([]),[o,i]=v.useState(!0),[x,c]=v.useState(null),[l,d]=v.useState(null),[h,f]=v.useState(!1),[B,A]=v.useState(null),[w,b]=v.useState([]),[_,m]=v.useState(!0),[p,E]=v.useState(""),[C,k]=v.useState(!1),[D,F]=v.useState({});function P(N){const W=N+"=",S=document.cookie.split(";");for(let Y=0;Y<S.length;Y++){let q=S[Y];for(;q.charAt(0)==" ";)q=q.substring(1,q.length);if(q.indexOf(W)==0)return q.substring(W.length,q.length)}return null}const z=P("token"),j=P("role"),U=()=>{const N=[...r].sort((W,S)=>{const Y=new Date(W.harvest_date),q=new Date(S.harvest_date);return _?Y-q:q-Y});n(N),m(!_)};v.useEffect(()=>{const N=document.createElement("style");return N.textContent=`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .recoleccion-card {
        transition: all 0.3s ease;
        transform: translateZ(0);
        cursor: pointer;
      }
      .recoleccion-card:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        transform: translateY(-5px) !important;
      }
      .honey-button {
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      .honey-button:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: radial-gradient(circle, transparent 10%, rgba(255,255,0,0.1) 10.01%);
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 0.5s;
      }
      .honey-button:active:after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
      }
    `,document.head.appendChild(N),()=>{document.head.removeChild(N)}},[]),v.useEffect(()=>{h?(E("animate-modal-in"),setTimeout(()=>{k(!0)},300)):(E("animate-modal-out"),k(!1))},[h]),v.useEffect(()=>{const N=async()=>{i(!0);try{const Y=await fetch("https://colmenaresdeleje.onrender.com/harvesting/list-hive-harvesting/",{headers:{"Content-Type":"application/json",Authorization:z?`Bearer ${z}`:""}});if(!Y.ok)throw new Error("Error en la respuesta del servidor");const q=await Y.json();if(t){const ae=q.filter(J=>J.hive_id.toString()===t);if(n(ae),ae.length>0){const J=ae[0].beekeeper;await W(J),await S(J)}}else n(q)}catch(Y){console.error("Error al cargar datos:",Y),c(Y.message)}finally{i(!1)}},W=async Y=>{try{const q=await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/${Y}/`);if(!q.ok)throw new Error("Error al obtener información del apicultor");const ae=await q.json();A(ae)}catch(q){console.error("Error al cargar datos del apicultor:",q)}},S=async Y=>{try{const q=await fetch(`https://colmenaresdeleje.onrender.com/hives/beekeeper/${Y}/`);if(!q.ok)throw new Error("Error al obtener colmenas relacionadas");const ae=await q.json();b(ae)}catch(q){console.error("Error al cargar colmenas relacionadas:",q)}};N()},[t,z]);const L=N=>{const W={year:"numeric",month:"long",day:"numeric"};return new Date(N).toLocaleDateString("es-ES",W)},T=(N,W)=>{F({...D,[W]:N.target.value}),N.target.value==="visualizar-detalles"&&(d(null),setTimeout(()=>{d(W),f(!0)},10))},H=()=>{l&&F({...D,[l]:""}),f(!1),setTimeout(()=>{d(null)},400)},O=()=>r.find(N=>N.id===l),I=N=>{const W=O();e(`/Edit_Recoleccion/${N}`,{state:{hiveId:W.hive_id,harvestDate:W.harvest_date,honeyProduction:W.honey_production,pollenProduction:W.pollen_production}})},R={animateModalIn:{animation:"fadeIn 0.3s ease-out forwards"},animateModalOut:{animation:"fadeOut 0.3s ease-in forwards"},detailsAnimation:{opacity:C?1:0,transform:C?"translateY(0)":"translateY(20px)",transition:"opacity 0.5s ease-out, transform 0.5s ease-out"},modalContent:{transform:h?"scale(1)":"scale(0.8)",transition:"transform 0.3s ease"}};return a.jsxs("div",{className:"d-flex flex-column min-vh-100",children:[j==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx(rx,{fluid:!0,className:"flex-grow-1 py-3",children:a.jsxs(ho,{children:[a.jsxs(gt,{xs:12,lg:8,xl:7,className:"mb-4 mx-auto",children:[a.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[a.jsx("h4",{className:"mb-0",children:"Recolecciones"}),!o&&r.length>0&&a.jsxs(Yt,{variant:"outline-warning",size:"sm",onClick:U,className:"d-flex align-items-center gap-1 honey-button",children:[a.jsx("span",{children:"Ordenar por fecha"}),a.jsx("i",{className:`bi bi-sort-${_?"down":"up"}`}),_?" ↑":" ↓"]})]}),a.jsx("div",{className:"d-flex flex-column gap-3",children:o?a.jsxs("div",{className:"text-center p-4",children:[a.jsx(Gd,{animation:"border",variant:"warning"}),a.jsx("p",{className:"mt-2 text-muted",children:"Cargando recolecciones..."})]}):x?a.jsx(Bt,{className:"shadow-sm border-danger p-3",children:a.jsx(Bt.Body,{className:"text-center text-danger",children:x})}):r.length===0?a.jsx(Bt,{className:"shadow-sm p-3",children:a.jsx(Bt.Body,{className:"text-center",children:a.jsx("p",{children:"No hay recolecciones disponibles para esta colmena"})})}):r.map((N,W)=>a.jsx(Bt,{className:"shadow-lg border rounded p-3 mx-2 mx-md-3 recoleccion-card",style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:`${W*.1}s`,opacity:0},children:a.jsxs(ho,{className:"g-0 align-items-center",children:[a.jsx(gt,{xs:12,sm:4,className:"mb-3 mb-sm-0",children:a.jsx("img",{src:$c,alt:`Recolección del ${L(N.harvest_date)}`,className:"img-fluid rounded",style:{maxHeight:"200px",width:"100%",objectFit:"cover",transition:"transform 0.3s ease"},onMouseOver:S=>S.target.style.transform="scale(1.05)",onMouseOut:S=>S.target.style.transform="scale(1)"})}),a.jsxs(gt,{xs:12,sm:5,className:"text-center text-sm-start mb-3 mb-sm-0",children:[a.jsxs("h3",{className:"mb-1 ms-0 ms-sm-3",children:["Fecha: ",L(N.harvest_date)]}),a.jsxs("p",{className:"mb-1 ms-0 ms-sm-3",children:["Numero de colmena: ",N.hive_id]}),a.jsxs("p",{className:"mb-0 ms-0 ms-sm-3",children:["Producción de Miel: ",N.honey_production," gr"]}),a.jsxs("p",{className:"mb-0 ms-0 ms-sm-3",children:["Producción de Polen: ",N.pollen_production," gr"]})]}),a.jsx(gt,{xs:12,sm:3,className:"text-center",children:a.jsxs(xE.Select,{size:"sm",className:"bg-warning-subtle border-warning-subtle",onChange:S=>T(S,N.id),value:D[N.id]||"",children:[a.jsx("option",{value:"",children:"Seleccionar"}),a.jsx("option",{value:"visualizar-detalles",children:"Visualizar Detalles"})]})})]})},N.id))})]}),a.jsx(gt,{xs:12,lg:4,xl:3,children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx("div",{className:`modal fade ${h?"show":""}`,tabIndex:"-1",onClick:H,style:{display:h?"block":"none",backgroundColor:"rgba(0, 0, 0, 0.5)",...R[p]},children:a.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:a.jsxs("div",{className:"modal-content",style:R.modalContent,children:[a.jsxs("div",{className:"modal-header border-0 pb-0",children:[a.jsx("img",{src:"src/img/Colmenares_del_eje_logo.png",alt:"Logo",style:{height:"35px",animation:h?"spin 1s ease-in-out":"none"},className:"mx-auto"}),a.jsx(Yt,{variant:"light",className:"btn-close",onClick:H})]}),a.jsx("div",{className:"modal-body",children:l&&(()=>{const N=O();return N?a.jsxs("div",{style:R.detailsAnimation,children:[a.jsx("h2",{className:"text-center mb-4",children:"Información de la Recolección"}),a.jsxs(ho,{children:[a.jsxs(gt,{xs:12,md:5,className:"text-center mb-4 mb-md-0",children:[a.jsx("img",{src:$c,alt:"Imagen recolección",className:"rounded-circle border border-3 border-secondary",style:{width:"150px",height:"150px",objectFit:"cover",transition:"transform 0.3s ease"},onMouseOver:W=>W.target.style.transform="scale(1.05) rotate(5deg)",onMouseOut:W=>W.target.style.transform="scale(1) rotate(0deg)"}),a.jsx("div",{className:"d-flex flex-column gap-2 mt-3",children:a.jsxs(Yt,{variant:"warning",onClick:()=>I(N.id),className:"px-4 d-flex align-items-center gap-2 mx-auto honey-button",style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:"0.2s",opacity:0},children:[a.jsx("i",{className:"bi bi-pencil-square"}),"Editar Recolección"]})})]}),a.jsx(gt,{xs:12,md:7,children:[{label:"Fecha",value:L(N.harvest_date)},{label:"Producción de Miel",value:`${N.honey_production} gr`},{label:"Producción de Polen",value:`${N.pollen_production} gr`},{label:"Numero de colmena",value:N.hive_id},{label:"Apicultor",value:N.beekeeper?`${N.beekeeper.first_name} ${N.beekeeper.last_name}`:"Información no disponible"}].map((W,S)=>a.jsxs("p",{style:{animation:"fadeIn 0.5s ease-out forwards",animationDelay:`${.1+S*.1}s`,opacity:0,transform:"translateY(10px)"},children:[a.jsxs("strong",{children:[W.label,":"]})," ",W.value]},S))})]})]}):a.jsx("p",{className:"text-center",children:"No se encontró información detallada para esta recolección."})})()})]})})}),h&&a.jsx("div",{className:"modal-backdrop fade show"})]})}const _l=({allowedRoles:e,checkFirstRegistration:t=!1})=>{const[r,n]=v.useState(!1),[o,i]=v.useState(!0);function x(c){const l=c+"=",d=document.cookie.split(";");for(let h=0;h<d.length;h++){let f=d[h];for(;f.charAt(0)===" ";)f=f.substring(1,f.length);if(f.indexOf(l)===0)return f.substring(l.length,f.length)}return null}return v.useEffect(()=>{(async()=>{if(t)try{const d=await(await fetch("https://colmenaresdeleje.onrender.com/users/register_permision/",{method:"GET",headers:{"Content-Type":"application/json"}})).json();n(d.message==="Register")}catch(l){console.error("Error checking user registration:",l),n(!1)}else{const l=x("token"),d=x("role");n(l&&e.includes(d))}i(!1)})()},[e,t]),o?a.jsx("div",{children:"Loading..."}):r?a.jsx(XC,{}):a.jsx(qC,{to:"/",replace:!0})};var pE={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(typeof self<"u"?self:Ip,function(){return function(r){var n={};function o(i){if(n[i])return n[i].exports;var x=n[i]={i,l:!1,exports:{}};return r[i].call(x.exports,x,x.exports,o),x.l=!0,x.exports}return o.m=r,o.c=n,o.d=function(i,x,c){o.o(i,x)||Object.defineProperty(i,x,{configurable:!1,enumerable:!0,get:c})},o.n=function(i){var x=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(x,"a",x),x},o.o=function(i,x){return Object.prototype.hasOwnProperty.call(i,x)},o.p="",o(o.s=3)}([function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function x(c,l){this.width=l,this.height=c.length/l,this.data=c}return x.createEmpty=function(c,l){return new x(new Uint8ClampedArray(c*l),c)},x.prototype.get=function(c,l){return c<0||c>=this.width||l<0||l>=this.height?!1:!!this.data[l*this.width+c]},x.prototype.set=function(c,l,d){this.data[l*this.width+c]=d?1:0},x.prototype.setRegion=function(c,l,d,h,f){for(var B=l;B<l+h;B++)for(var A=c;A<c+d;A++)this.set(A,B,!!f)},x}();n.BitMatrix=i},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(2);function x(l,d){return l^d}n.addOrSubtractGF=x;var c=function(){function l(d,h,f){this.primitive=d,this.size=h,this.generatorBase=f,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var B=1,A=0;A<this.size;A++)this.expTable[A]=B,B=B*2,B>=this.size&&(B=(B^this.primitive)&this.size-1);for(var A=0;A<this.size-1;A++)this.logTable[this.expTable[A]]=A;this.zero=new i.default(this,Uint8ClampedArray.from([0])),this.one=new i.default(this,Uint8ClampedArray.from([1]))}return l.prototype.multiply=function(d,h){return d===0||h===0?0:this.expTable[(this.logTable[d]+this.logTable[h])%(this.size-1)]},l.prototype.inverse=function(d){if(d===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[d]-1]},l.prototype.buildMonomial=function(d,h){if(d<0)throw new Error("Invalid monomial degree less than 0");if(h===0)return this.zero;var f=new Uint8ClampedArray(d+1);return f[0]=h,new i.default(this,f)},l.prototype.log=function(d){if(d===0)throw new Error("Can't take log(0)");return this.logTable[d]},l.prototype.exp=function(d){return this.expTable[d]},l}();n.default=c},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(1),x=function(){function c(l,d){if(d.length===0)throw new Error("No coefficients.");this.field=l;var h=d.length;if(h>1&&d[0]===0){for(var f=1;f<h&&d[f]===0;)f++;if(f===h)this.coefficients=l.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(h-f);for(var B=0;B<this.coefficients.length;B++)this.coefficients[B]=d[f+B]}}else this.coefficients=d}return c.prototype.degree=function(){return this.coefficients.length-1},c.prototype.isZero=function(){return this.coefficients[0]===0},c.prototype.getCoefficient=function(l){return this.coefficients[this.coefficients.length-1-l]},c.prototype.addOrSubtract=function(l){var d;if(this.isZero())return l;if(l.isZero())return this;var h=this.coefficients,f=l.coefficients;h.length>f.length&&(d=[f,h],h=d[0],f=d[1]);for(var B=new Uint8ClampedArray(f.length),A=f.length-h.length,w=0;w<A;w++)B[w]=f[w];for(var w=A;w<f.length;w++)B[w]=i.addOrSubtractGF(h[w-A],f[w]);return new c(this.field,B)},c.prototype.multiply=function(l){if(l===0)return this.field.zero;if(l===1)return this;for(var d=this.coefficients.length,h=new Uint8ClampedArray(d),f=0;f<d;f++)h[f]=this.field.multiply(this.coefficients[f],l);return new c(this.field,h)},c.prototype.multiplyPoly=function(l){if(this.isZero()||l.isZero())return this.field.zero;for(var d=this.coefficients,h=d.length,f=l.coefficients,B=f.length,A=new Uint8ClampedArray(h+B-1),w=0;w<h;w++)for(var b=d[w],_=0;_<B;_++)A[w+_]=i.addOrSubtractGF(A[w+_],this.field.multiply(b,f[_]));return new c(this.field,A)},c.prototype.multiplyByMonomial=function(l,d){if(l<0)throw new Error("Invalid degree less than 0");if(d===0)return this.field.zero;for(var h=this.coefficients.length,f=new Uint8ClampedArray(h+l),B=0;B<h;B++)f[B]=this.field.multiply(this.coefficients[B],d);return new c(this.field,f)},c.prototype.evaluateAt=function(l){var d=0;if(l===0)return this.getCoefficient(0);var h=this.coefficients.length;if(l===1)return this.coefficients.forEach(function(B){d=i.addOrSubtractGF(d,B)}),d;d=this.coefficients[0];for(var f=1;f<h;f++)d=i.addOrSubtractGF(this.field.multiply(l,d),this.coefficients[f]);return d},c}();n.default=x},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(4),x=o(5),c=o(11),l=o(12);function d(B){var A=l.locate(B);if(!A)return null;for(var w=0,b=A;w<b.length;w++){var _=b[w],m=c.extract(B,_),p=x.decode(m.matrix);if(p)return{binaryData:p.bytes,data:p.text,chunks:p.chunks,version:p.version,location:{topRightCorner:m.mappingFunction(_.dimension,0),topLeftCorner:m.mappingFunction(0,0),bottomRightCorner:m.mappingFunction(_.dimension,_.dimension),bottomLeftCorner:m.mappingFunction(0,_.dimension),topRightFinderPattern:_.topRight,topLeftFinderPattern:_.topLeft,bottomLeftFinderPattern:_.bottomLeft,bottomRightAlignmentPattern:_.alignmentPattern}}}return null}var h={inversionAttempts:"attemptBoth"};function f(B,A,w,b){b===void 0&&(b={});var _=h;Object.keys(_).forEach(function(F){_[F]=b[F]||_[F]});var m=_.inversionAttempts==="attemptBoth"||_.inversionAttempts==="invertFirst",p=_.inversionAttempts==="onlyInvert"||_.inversionAttempts==="invertFirst",E=i.binarize(B,A,w,m),C=E.binarized,k=E.inverted,D=d(p?k:C);return!D&&(_.inversionAttempts==="attemptBoth"||_.inversionAttempts==="invertFirst")&&(D=d(p?C:k)),D}f.default=f,n.default=f},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(0),x=8,c=24;function l(f,B,A){return f<B?B:f>A?A:f}var d=function(){function f(B,A){this.width=B,this.data=new Uint8ClampedArray(B*A)}return f.prototype.get=function(B,A){return this.data[A*this.width+B]},f.prototype.set=function(B,A,w){this.data[A*this.width+B]=w},f}();function h(f,B,A,w){if(f.length!==B*A*4)throw new Error("Malformed data passed to binarizer.");for(var b=new d(B,A),_=0;_<B;_++)for(var m=0;m<A;m++){var p=f[(m*B+_)*4+0],E=f[(m*B+_)*4+1],C=f[(m*B+_)*4+2];b.set(_,m,.2126*p+.7152*E+.0722*C)}for(var k=Math.ceil(B/x),D=Math.ceil(A/x),F=new d(k,D),P=0;P<D;P++)for(var z=0;z<k;z++){for(var j=0,U=1/0,L=0,m=0;m<x;m++)for(var _=0;_<x;_++){var T=b.get(z*x+_,P*x+m);j+=T,U=Math.min(U,T),L=Math.max(L,T)}var H=j/Math.pow(x,2);if(L-U<=c&&(H=U/2,P>0&&z>0)){var O=(F.get(z,P-1)+2*F.get(z-1,P)+F.get(z-1,P-1))/4;U<O&&(H=O)}F.set(z,P,H)}var I=i.BitMatrix.createEmpty(B,A),R=null;w&&(R=i.BitMatrix.createEmpty(B,A));for(var P=0;P<D;P++)for(var z=0;z<k;z++){for(var N=l(z,2,k-3),W=l(P,2,D-3),j=0,S=-2;S<=2;S++)for(var Y=-2;Y<=2;Y++)j+=F.get(N+S,W+Y);for(var q=j/25,S=0;S<x;S++)for(var Y=0;Y<x;Y++){var _=z*x+S,m=P*x+Y,ae=b.get(_,m);I.set(_,m,ae<=q),w&&R.set(_,m,!(ae<=q))}}return w?{binarized:I,inverted:R}:{binarized:I}}n.binarize=h},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(0),x=o(6),c=o(9),l=o(10);function d(C,k){for(var D=C^k,F=0;D;)F++,D&=D-1;return F}function h(C,k){return k<<1|C}var f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],B=[function(C){return(C.y+C.x)%2===0},function(C){return C.y%2===0},function(C){return C.x%3===0},function(C){return(C.y+C.x)%3===0},function(C){return(Math.floor(C.y/2)+Math.floor(C.x/3))%2===0},function(C){return C.x*C.y%2+C.x*C.y%3===0},function(C){return(C.y*C.x%2+C.y*C.x%3)%2===0},function(C){return((C.y+C.x)%2+C.y*C.x%3)%2===0}];function A(C){var k=17+4*C.versionNumber,D=i.BitMatrix.createEmpty(k,k);D.setRegion(0,0,9,9,!0),D.setRegion(k-8,0,8,9,!0),D.setRegion(0,k-8,9,8,!0);for(var F=0,P=C.alignmentPatternCenters;F<P.length;F++)for(var z=P[F],j=0,U=C.alignmentPatternCenters;j<U.length;j++){var L=U[j];z===6&&L===6||z===6&&L===k-7||z===k-7&&L===6||D.setRegion(z-2,L-2,5,5,!0)}return D.setRegion(6,9,1,k-17,!0),D.setRegion(9,6,k-17,1,!0),C.versionNumber>6&&(D.setRegion(k-11,0,3,6,!0),D.setRegion(0,k-11,6,3,!0)),D}function w(C,k,D){for(var F=B[D.dataMask],P=C.height,z=A(k),j=[],U=0,L=0,T=!0,H=P-1;H>0;H-=2){H===6&&H--;for(var O=0;O<P;O++)for(var I=T?P-1-O:O,R=0;R<2;R++){var N=H-R;if(!z.get(N,I)){L++;var W=C.get(N,I);F({y:I,x:N})&&(W=!W),U=h(W,U),L===8&&(j.push(U),L=0,U=0)}}T=!T}return j}function b(C){var k=C.height,D=Math.floor((k-17)/4);if(D<=6)return l.VERSIONS[D-1];for(var F=0,P=5;P>=0;P--)for(var z=k-9;z>=k-11;z--)F=h(C.get(z,P),F);for(var j=0,z=5;z>=0;z--)for(var P=k-9;P>=k-11;P--)j=h(C.get(z,P),j);for(var U=1/0,L,T=0,H=l.VERSIONS;T<H.length;T++){var O=H[T];if(O.infoBits===F||O.infoBits===j)return O;var I=d(F,O.infoBits);I<U&&(L=O,U=I),I=d(j,O.infoBits),I<U&&(L=O,U=I)}if(U<=3)return L}function _(C){for(var k=0,D=0;D<=8;D++)D!==6&&(k=h(C.get(D,8),k));for(var F=7;F>=0;F--)F!==6&&(k=h(C.get(8,F),k));for(var P=C.height,z=0,F=P-1;F>=P-7;F--)z=h(C.get(8,F),z);for(var D=P-8;D<P;D++)z=h(C.get(D,8),z);for(var j=1/0,U=null,L=0,T=f;L<T.length;L++){var H=T[L],O=H.bits,I=H.formatInfo;if(O===k||O===z)return I;var R=d(k,O);R<j&&(U=I,j=R),k!==z&&(R=d(z,O),R<j&&(U=I,j=R))}return j<=3?U:null}function m(C,k,D){var F=k.errorCorrectionLevels[D],P=[],z=0;if(F.ecBlocks.forEach(function(W){for(var S=0;S<W.numBlocks;S++)P.push({numDataCodewords:W.dataCodewordsPerBlock,codewords:[]}),z+=W.dataCodewordsPerBlock+F.ecCodewordsPerBlock}),C.length<z)return null;C=C.slice(0,z);for(var j=F.ecBlocks[0].dataCodewordsPerBlock,U=0;U<j;U++)for(var L=0,T=P;L<T.length;L++){var H=T[L];H.codewords.push(C.shift())}if(F.ecBlocks.length>1)for(var O=F.ecBlocks[0].numBlocks,I=F.ecBlocks[1].numBlocks,U=0;U<I;U++)P[O+U].codewords.push(C.shift());for(;C.length>0;)for(var R=0,N=P;R<N.length;R++){var H=N[R];H.codewords.push(C.shift())}return P}function p(C){var k=b(C);if(!k)return null;var D=_(C);if(!D)return null;var F=w(C,k,D),P=m(F,k,D.errorCorrectionLevel);if(!P)return null;for(var z=P.reduce(function(R,N){return R+N.numDataCodewords},0),j=new Uint8ClampedArray(z),U=0,L=0,T=P;L<T.length;L++){var H=T[L],O=c.decode(H.codewords,H.codewords.length-H.numDataCodewords);if(!O)return null;for(var I=0;I<H.numDataCodewords;I++)j[U++]=O[I]}try{return x.decode(j,k.versionNumber)}catch{return null}}function E(C){if(C==null)return null;var k=p(C);if(k)return k;for(var D=0;D<C.width;D++)for(var F=D+1;F<C.height;F++)C.get(D,F)!==C.get(F,D)&&(C.set(D,F,!C.get(D,F)),C.set(F,D,!C.get(F,D)));return p(C)}n.decode=E},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(7),x=o(8),c;(function(b){b.Numeric="numeric",b.Alphanumeric="alphanumeric",b.Byte="byte",b.Kanji="kanji",b.ECI="eci"})(c=n.Mode||(n.Mode={}));var l;(function(b){b[b.Terminator=0]="Terminator",b[b.Numeric=1]="Numeric",b[b.Alphanumeric=2]="Alphanumeric",b[b.Byte=4]="Byte",b[b.Kanji=8]="Kanji",b[b.ECI=7]="ECI"})(l||(l={}));function d(b,_){for(var m=[],p="",E=[10,12,14][_],C=b.readBits(E);C>=3;){var k=b.readBits(10);if(k>=1e3)throw new Error("Invalid numeric value above 999");var D=Math.floor(k/100),F=Math.floor(k/10)%10,P=k%10;m.push(48+D,48+F,48+P),p+=D.toString()+F.toString()+P.toString(),C-=3}if(C===2){var k=b.readBits(7);if(k>=100)throw new Error("Invalid numeric value above 99");var D=Math.floor(k/10),F=k%10;m.push(48+D,48+F),p+=D.toString()+F.toString()}else if(C===1){var k=b.readBits(4);if(k>=10)throw new Error("Invalid numeric value above 9");m.push(48+k),p+=k.toString()}return{bytes:m,text:p}}var h=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function f(b,_){for(var m=[],p="",E=[9,11,13][_],C=b.readBits(E);C>=2;){var k=b.readBits(11),D=Math.floor(k/45),F=k%45;m.push(h[D].charCodeAt(0),h[F].charCodeAt(0)),p+=h[D]+h[F],C-=2}if(C===1){var D=b.readBits(6);m.push(h[D].charCodeAt(0)),p+=h[D]}return{bytes:m,text:p}}function B(b,_){for(var m=[],p="",E=[8,16,16][_],C=b.readBits(E),k=0;k<C;k++){var D=b.readBits(8);m.push(D)}try{p+=decodeURIComponent(m.map(function(F){return"%"+("0"+F.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:m,text:p}}function A(b,_){for(var m=[],p="",E=[8,10,12][_],C=b.readBits(E),k=0;k<C;k++){var D=b.readBits(13),F=Math.floor(D/192)<<8|D%192;F<7936?F+=33088:F+=49472,m.push(F>>8,F&255),p+=String.fromCharCode(x.shiftJISTable[F])}return{bytes:m,text:p}}function w(b,_){for(var m,p,E,C,k=new i.BitStream(b),D=_<=9?0:_<=26?1:2,F={text:"",bytes:[],chunks:[],version:_};k.available()>=4;){var P=k.readBits(4);if(P===l.Terminator)return F;if(P===l.ECI)k.readBits(1)===0?F.chunks.push({type:c.ECI,assignmentNumber:k.readBits(7)}):k.readBits(1)===0?F.chunks.push({type:c.ECI,assignmentNumber:k.readBits(14)}):k.readBits(1)===0?F.chunks.push({type:c.ECI,assignmentNumber:k.readBits(21)}):F.chunks.push({type:c.ECI,assignmentNumber:-1});else if(P===l.Numeric){var z=d(k,D);F.text+=z.text,(m=F.bytes).push.apply(m,z.bytes),F.chunks.push({type:c.Numeric,text:z.text})}else if(P===l.Alphanumeric){var j=f(k,D);F.text+=j.text,(p=F.bytes).push.apply(p,j.bytes),F.chunks.push({type:c.Alphanumeric,text:j.text})}else if(P===l.Byte){var U=B(k,D);F.text+=U.text,(E=F.bytes).push.apply(E,U.bytes),F.chunks.push({type:c.Byte,bytes:U.bytes,text:U.text})}else if(P===l.Kanji){var L=A(k,D);F.text+=L.text,(C=F.bytes).push.apply(C,L.bytes),F.chunks.push({type:c.Kanji,bytes:L.bytes,text:L.text})}}if(k.available()===0||k.readBits(k.available())===0)return F}n.decode=w},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function x(c){this.byteOffset=0,this.bitOffset=0,this.bytes=c}return x.prototype.readBits=function(c){if(c<1||c>32||c>this.available())throw new Error("Cannot read "+c.toString()+" bits");var l=0;if(this.bitOffset>0){var d=8-this.bitOffset,h=c<d?c:d,f=d-h,B=255>>8-h<<f;l=(this.bytes[this.byteOffset]&B)>>f,c-=h,this.bitOffset+=h,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(c>0){for(;c>=8;)l=l<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,c-=8;if(c>0){var f=8-c,B=255>>f<<f;l=l<<c|(this.bytes[this.byteOffset]&B)>>f,this.bitOffset+=c}}return l},x.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},x}();n.BitStream=i},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(1),x=o(2);function c(f,B,A,w){var b;B.degree()<A.degree()&&(b=[A,B],B=b[0],A=b[1]);for(var _=B,m=A,p=f.zero,E=f.one;m.degree()>=w/2;){var C=_,k=p;if(_=m,p=E,_.isZero())return null;m=C;for(var D=f.zero,F=_.getCoefficient(_.degree()),P=f.inverse(F);m.degree()>=_.degree()&&!m.isZero();){var z=m.degree()-_.degree(),j=f.multiply(m.getCoefficient(m.degree()),P);D=D.addOrSubtract(f.buildMonomial(z,j)),m=m.addOrSubtract(_.multiplyByMonomial(z,j))}if(E=D.multiplyPoly(p).addOrSubtract(k),m.degree()>=_.degree())return null}var U=E.getCoefficient(0);if(U===0)return null;var L=f.inverse(U);return[E.multiply(L),m.multiply(L)]}function l(f,B){var A=B.degree();if(A===1)return[B.getCoefficient(1)];for(var w=new Array(A),b=0,_=1;_<f.size&&b<A;_++)B.evaluateAt(_)===0&&(w[b]=f.inverse(_),b++);return b!==A?null:w}function d(f,B,A){for(var w=A.length,b=new Array(w),_=0;_<w;_++){for(var m=f.inverse(A[_]),p=1,E=0;E<w;E++)_!==E&&(p=f.multiply(p,i.addOrSubtractGF(1,f.multiply(A[E],m))));b[_]=f.multiply(B.evaluateAt(m),f.inverse(p)),f.generatorBase!==0&&(b[_]=f.multiply(b[_],m))}return b}function h(f,B){var A=new Uint8ClampedArray(f.length);A.set(f);for(var w=new i.default(285,256,0),b=new x.default(w,A),_=new Uint8ClampedArray(B),m=!1,p=0;p<B;p++){var E=b.evaluateAt(w.exp(p+w.generatorBase));_[_.length-1-p]=E,E!==0&&(m=!0)}if(!m)return A;var C=new x.default(w,_),k=c(w,w.buildMonomial(B,1),C,B);if(k===null)return null;var D=l(w,k[0]);if(D==null)return null;for(var F=d(w,k[1],D),P=0;P<D.length;P++){var z=A.length-1-w.log(D[P]);if(z<0)return null;A[z]=i.addOrSubtractGF(A[z],F[P])}return A}n.decode=h},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0}),n.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=o(0);function x(h,f,B,A){var w=h.x-f.x+B.x-A.x,b=h.y-f.y+B.y-A.y;if(w===0&&b===0)return{a11:f.x-h.x,a12:f.y-h.y,a13:0,a21:B.x-f.x,a22:B.y-f.y,a23:0,a31:h.x,a32:h.y,a33:1};var _=f.x-B.x,m=A.x-B.x,p=f.y-B.y,E=A.y-B.y,C=_*E-m*p,k=(w*E-m*b)/C,D=(_*b-w*p)/C;return{a11:f.x-h.x+k*f.x,a12:f.y-h.y+k*f.y,a13:k,a21:A.x-h.x+D*A.x,a22:A.y-h.y+D*A.y,a23:D,a31:h.x,a32:h.y,a33:1}}function c(h,f,B,A){var w=x(h,f,B,A);return{a11:w.a22*w.a33-w.a23*w.a32,a12:w.a13*w.a32-w.a12*w.a33,a13:w.a12*w.a23-w.a13*w.a22,a21:w.a23*w.a31-w.a21*w.a33,a22:w.a11*w.a33-w.a13*w.a31,a23:w.a13*w.a21-w.a11*w.a23,a31:w.a21*w.a32-w.a22*w.a31,a32:w.a12*w.a31-w.a11*w.a32,a33:w.a11*w.a22-w.a12*w.a21}}function l(h,f){return{a11:h.a11*f.a11+h.a21*f.a12+h.a31*f.a13,a12:h.a12*f.a11+h.a22*f.a12+h.a32*f.a13,a13:h.a13*f.a11+h.a23*f.a12+h.a33*f.a13,a21:h.a11*f.a21+h.a21*f.a22+h.a31*f.a23,a22:h.a12*f.a21+h.a22*f.a22+h.a32*f.a23,a23:h.a13*f.a21+h.a23*f.a22+h.a33*f.a23,a31:h.a11*f.a31+h.a21*f.a32+h.a31*f.a33,a32:h.a12*f.a31+h.a22*f.a32+h.a32*f.a33,a33:h.a13*f.a31+h.a23*f.a32+h.a33*f.a33}}function d(h,f){for(var B=c({x:3.5,y:3.5},{x:f.dimension-3.5,y:3.5},{x:f.dimension-6.5,y:f.dimension-6.5},{x:3.5,y:f.dimension-3.5}),A=x(f.topLeft,f.topRight,f.alignmentPattern,f.bottomLeft),w=l(A,B),b=i.BitMatrix.createEmpty(f.dimension,f.dimension),_=function(D,F){var P=w.a13*D+w.a23*F+w.a33;return{x:(w.a11*D+w.a21*F+w.a31)/P,y:(w.a12*D+w.a22*F+w.a32)/P}},m=0;m<f.dimension;m++)for(var p=0;p<f.dimension;p++){var E=p+.5,C=m+.5,k=_(E,C);b.set(p,m,h.get(Math.floor(k.x),Math.floor(k.y)))}return{matrix:b,mappingFunction:_}}n.extract=d},function(r,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=4,x=.5,c=1.5,l=function(E,C){return Math.sqrt(Math.pow(C.x-E.x,2)+Math.pow(C.y-E.y,2))};function d(E){return E.reduce(function(C,k){return C+k})}function h(E,C,k){var D,F,P,z,j=l(E,C),U=l(C,k),L=l(E,k),T,H,O;return U>=j&&U>=L?(D=[C,E,k],T=D[0],H=D[1],O=D[2]):L>=U&&L>=j?(F=[E,C,k],T=F[0],H=F[1],O=F[2]):(P=[E,k,C],T=P[0],H=P[1],O=P[2]),(O.x-H.x)*(T.y-H.y)-(O.y-H.y)*(T.x-H.x)<0&&(z=[O,T],T=z[0],O=z[1]),{bottomLeft:T,topLeft:H,topRight:O}}function f(E,C,k,D){var F=(d(A(E,k,D,5))/7+d(A(E,C,D,5))/7+d(A(k,E,D,5))/7+d(A(C,E,D,5))/7)/4;if(F<1)throw new Error("Invalid module size");var P=Math.round(l(E,C)/F),z=Math.round(l(E,k)/F),j=Math.floor((P+z)/2)+7;switch(j%4){case 0:j++;break;case 2:j--;break}return{dimension:j,moduleSize:F}}function B(E,C,k,D){var F=[{x:Math.floor(E.x),y:Math.floor(E.y)}],P=Math.abs(C.y-E.y)>Math.abs(C.x-E.x),z,j,U,L;P?(z=Math.floor(E.y),j=Math.floor(E.x),U=Math.floor(C.y),L=Math.floor(C.x)):(z=Math.floor(E.x),j=Math.floor(E.y),U=Math.floor(C.x),L=Math.floor(C.y));for(var T=Math.abs(U-z),H=Math.abs(L-j),O=Math.floor(-T/2),I=z<U?1:-1,R=j<L?1:-1,N=!0,W=z,S=j;W!==U+I;W+=I){var Y=P?S:W,q=P?W:S;if(k.get(Y,q)!==N&&(N=!N,F.push({x:Y,y:q}),F.length===D+1))break;if(O+=H,O>0){if(S===L)break;S+=R,O-=T}}for(var ae=[],J=0;J<D;J++)F[J]&&F[J+1]?ae.push(l(F[J],F[J+1])):ae.push(0);return ae}function A(E,C,k,D){var F,P=C.y-E.y,z=C.x-E.x,j=B(E,C,k,Math.ceil(D/2)),U=B(E,{x:E.x-z,y:E.y-P},k,Math.ceil(D/2)),L=j.shift()+U.shift()-1;return(F=U.concat(L)).concat.apply(F,j)}function w(E,C){var k=d(E)/d(C),D=0;return C.forEach(function(F,P){D+=Math.pow(E[P]-F*k,2)}),{averageSize:k,error:D}}function b(E,C,k){try{var D=A(E,{x:-1,y:E.y},k,C.length),F=A(E,{x:E.x,y:-1},k,C.length),P={x:Math.max(0,E.x-E.y)-1,y:Math.max(0,E.y-E.x)-1},z=A(E,P,k,C.length),j={x:Math.min(k.width,E.x+E.y)+1,y:Math.min(k.height,E.y+E.x)+1},U=A(E,j,k,C.length),L=w(D,C),T=w(F,C),H=w(z,C),O=w(U,C),I=Math.sqrt(L.error*L.error+T.error*T.error+H.error*H.error+O.error*O.error),R=(L.averageSize+T.averageSize+H.averageSize+O.averageSize)/4,N=(Math.pow(L.averageSize-R,2)+Math.pow(T.averageSize-R,2)+Math.pow(H.averageSize-R,2)+Math.pow(O.averageSize-R,2))/R;return I+N}catch{return 1/0}}function _(E,C){for(var k=Math.round(C.x);E.get(k,Math.round(C.y));)k--;for(var D=Math.round(C.x);E.get(D,Math.round(C.y));)D++;for(var F=(k+D)/2,P=Math.round(C.y);E.get(Math.round(F),P);)P--;for(var z=Math.round(C.y);E.get(Math.round(F),z);)z++;var j=(P+z)/2;return{x:F,y:j}}function m(E){for(var C=[],k=[],D=[],F=[],P=function(Y){for(var q=0,ae=!1,J=[0,0,0,0,0],tt=function(ge){var ne=E.get(ge,Y);if(ne===ae)q++;else{J=[J[1],J[2],J[3],J[4],q],q=1,ae=ne;var Ve=d(J)/7,hn=Math.abs(J[0]-Ve)<Ve&&Math.abs(J[1]-Ve)<Ve&&Math.abs(J[2]-3*Ve)<3*Ve&&Math.abs(J[3]-Ve)<Ve&&Math.abs(J[4]-Ve)<Ve&&!ne,Ot=d(J.slice(-3))/3,er=Math.abs(J[2]-Ot)<Ot&&Math.abs(J[3]-Ot)<Ot&&Math.abs(J[4]-Ot)<Ot&&ne;if(hn){var Sr=ge-J[3]-J[4],En=Sr-J[2],Lt={startX:En,endX:Sr,y:Y},tr=k.filter(function(rr){return En>=rr.bottom.startX&&En<=rr.bottom.endX||Sr>=rr.bottom.startX&&En<=rr.bottom.endX||En<=rr.bottom.startX&&Sr>=rr.bottom.endX&&J[2]/(rr.bottom.endX-rr.bottom.startX)<c&&J[2]/(rr.bottom.endX-rr.bottom.startX)>x});tr.length>0?tr[0].bottom=Lt:k.push({top:Lt,bottom:Lt})}if(er){var Fo=ge-J[4],Wn=Fo-J[3],Lt={startX:Wn,y:Y,endX:Fo},tr=F.filter(function(nr){return Wn>=nr.bottom.startX&&Wn<=nr.bottom.endX||Fo>=nr.bottom.startX&&Wn<=nr.bottom.endX||Wn<=nr.bottom.startX&&Fo>=nr.bottom.endX&&J[2]/(nr.bottom.endX-nr.bottom.startX)<c&&J[2]/(nr.bottom.endX-nr.bottom.startX)>x});tr.length>0?tr[0].bottom=Lt:F.push({top:Lt,bottom:Lt})}}},ce=-1;ce<=E.width;ce++)tt(ce);C.push.apply(C,k.filter(function(ge){return ge.bottom.y!==Y&&ge.bottom.y-ge.top.y>=2})),k=k.filter(function(ge){return ge.bottom.y===Y}),D.push.apply(D,F.filter(function(ge){return ge.bottom.y!==Y})),F=F.filter(function(ge){return ge.bottom.y===Y})},z=0;z<=E.height;z++)P(z);C.push.apply(C,k.filter(function(Y){return Y.bottom.y-Y.top.y>=2})),D.push.apply(D,F);var j=C.filter(function(Y){return Y.bottom.y-Y.top.y>=2}).map(function(Y){var q=(Y.top.startX+Y.top.endX+Y.bottom.startX+Y.bottom.endX)/4,ae=(Y.top.y+Y.bottom.y+1)/2;if(E.get(Math.round(q),Math.round(ae))){var J=[Y.top.endX-Y.top.startX,Y.bottom.endX-Y.bottom.startX,Y.bottom.y-Y.top.y+1],tt=d(J)/J.length,ce=b({x:Math.round(q),y:Math.round(ae)},[1,1,3,1,1],E);return{score:ce,x:q,y:ae,size:tt}}}).filter(function(Y){return!!Y}).sort(function(Y,q){return Y.score-q.score}).map(function(Y,q,ae){if(q>i)return null;var J=ae.filter(function(ce,ge){return q!==ge}).map(function(ce){return{x:ce.x,y:ce.y,score:ce.score+Math.pow(ce.size-Y.size,2)/Y.size,size:ce.size}}).sort(function(ce,ge){return ce.score-ge.score});if(J.length<2)return null;var tt=Y.score+J[0].score+J[1].score;return{points:[Y].concat(J.slice(0,2)),score:tt}}).filter(function(Y){return!!Y}).sort(function(Y,q){return Y.score-q.score});if(j.length===0)return null;var U=h(j[0].points[0],j[0].points[1],j[0].points[2]),L=U.topRight,T=U.topLeft,H=U.bottomLeft,O=p(E,D,L,T,H),I=[];O&&I.push({alignmentPattern:{x:O.alignmentPattern.x,y:O.alignmentPattern.y},bottomLeft:{x:H.x,y:H.y},dimension:O.dimension,topLeft:{x:T.x,y:T.y},topRight:{x:L.x,y:L.y}});var R=_(E,L),N=_(E,T),W=_(E,H),S=p(E,D,R,N,W);return S&&I.push({alignmentPattern:{x:S.alignmentPattern.x,y:S.alignmentPattern.y},bottomLeft:{x:W.x,y:W.y},topLeft:{x:N.x,y:N.y},topRight:{x:R.x,y:R.y},dimension:S.dimension}),I.length===0?null:I}n.locate=m;function p(E,C,k,D,F){var P,z,j;try{P=f(D,k,F,E),z=P.dimension,j=P.moduleSize}catch{return null}var U={x:k.x-D.x+F.x,y:k.y-D.y+F.y},L=(l(D,F)+l(D,k))/2/j,T=1-3/L,H={x:D.x+T*(U.x-D.x),y:D.y+T*(U.y-D.y)},O=C.map(function(R){var N=(R.top.startX+R.top.endX+R.bottom.startX+R.bottom.endX)/4,W=(R.top.y+R.bottom.y+1)/2;if(E.get(Math.floor(N),Math.floor(W))){var S=[R.top.endX-R.top.startX,R.bottom.endX-R.bottom.startX,R.bottom.y-R.top.y+1];d(S)/S.length;var Y=b({x:Math.floor(N),y:Math.floor(W)},[1,1,1],E),q=Y+l({x:N,y:W},H);return{x:N,y:W,score:q}}}).filter(function(R){return!!R}).sort(function(R,N){return R.score-N.score}),I=L>=15&&O.length?O[0]:H;return{alignmentPattern:I,dimension:z}}}]).default})})(pE);var t3=pE.exports;const r3=Ps(t3),n3=()=>{const e=v.useRef(null),t=v.useRef(null),[r,n]=v.useState(null),[o,i]=v.useState(null),[x,c]=v.useState(null),[l,d]=v.useState(!0),[h,f]=v.useState(!1),[B,A]=v.useState(!1),[w,b]=v.useState(""),_=st();function m(I){const R=I+"=",N=document.cookie.split(";");for(let W=0;W<N.length;W++){let S=N[W];for(;S.charAt(0)==" ";)S=S.substring(1,S.length);if(S.indexOf(R)==0)return S.substring(R.length,S.length)}return null}const p=m("role"),E=m("token"),C=()=>{if(l){if(e.current&&e.current.readyState===e.current.HAVE_ENOUGH_DATA){const I=e.current,R=t.current;R.width=I.videoWidth,R.height=I.videoHeight;const N=R.getContext("2d");N.drawImage(I,0,0,R.width,R.height);const W=N.getImageData(0,0,R.width,R.height),S=r3(W.data,R.width,R.height);if(S){const Y=S.data;i(Y),T(Y),d(!1),I.srcObject&&I.srcObject.getTracks().forEach(q=>q.stop());return}}l&&requestAnimationFrame(C)}},k=async()=>{try{return navigator.permissions&&navigator.permissions.query?(await navigator.permissions.query({name:"camera"})).state==="denied"?(f(!0),!1):(f(!1),!0):!0}catch(I){return console.error("Error al verificar permisos:",I),!0}},D=I=>{b(I),A(!0)},F=()=>{D(`
      <h4>Cómo habilitar la cámara</h4>

      <p><strong>En navegadores de escritorio:</strong></p>
      <ol>
        <li>Haga clic en el icono de cámara/candado en la barra de direcciones</li>
        <li>Seleccione "Permitir" para la cámara</li>
        <li>Recargue la página después de cambiar la configuración</li>
      </ol>
      
      <p><strong>En dispositivos móviles:</strong></p>
      <ol>
        <li>Vaya a Configuración de su dispositivo</li>
        <li>Busque Aplicaciones o Administrador de aplicaciones</li>
        <li>Encuentre su navegador (Chrome, Safari, etc.)</li>
        <li>Vaya a Permisos</li>
        <li>Habilite la Cámara</li>
      </ol>
    `)},P=()=>{const I=/android/i.test(navigator.userAgent),R=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(I)try{D(`
          <h4>Configurar permisos en Android</h4>
          <p>Se intentará abrir la configuración de permisos. Si no funciona, siga estas instrucciones:</p>
          <ol>
            <li>Vaya a Configuración de su teléfono</li>
            <li>Vaya a Aplicaciones o Administrador de aplicaciones</li>
            <li>Busque su navegador (Chrome, Firefox, etc.)</li>
            <li>Seleccione Permisos</li>
            <li>Active el permiso de Cámara</li>
            <li>Regrese a la aplicación y refresque la página</li>
          </ol>
          <p>Después de cerrar este mensaje, se intentará abrir la configuración automáticamente.</p>
        `),setTimeout(()=>{window.location.href="app-settings:",setTimeout(()=>{window.location.href="intent://settings#Intent;scheme=package;end"},500)},3e3)}catch(N){console.error("Error al abrir configuración:",N),F()}else R?D(`
        <h4>Configurar permisos en iOS</h4>
        <ol>
          <li>Cierre esta aplicación</li>
          <li>Vaya a Configuración</li>
          <li>Busque Safari o su navegador</li>
          <li>Vaya a "Permisos de sitios web"</li>
          <li>Busque Cámara y habilítela para este sitio</li>
          <li>Regrese a la aplicación y recargue la página</li>
        </ol>
      `):F();z()},z=async()=>{i(null),c(null),n(null),e.current&&e.current.srcObject&&e.current.srcObject.getTracks().forEach(N=>N.stop()),await k()||console.log("Permiso de cámara denegado. Intentando solicitar de nuevo..."),d(!0);const R={video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}},audio:!1};try{const N=await navigator.mediaDevices.getUserMedia(R);if(e.current){e.current.srcObject=N,e.current.setAttribute("playsinline",!0),e.current.play(),requestAnimationFrame(C);const W=setTimeout(()=>{l&&!o&&!x&&(n(new Error("Tiempo límite alcanzado: no se detectó un QR")),d(!1),N.getTracks().forEach(S=>S.stop()))},3e4);return()=>clearTimeout(W)}}catch(N){console.error("Error al acceder a la cámara:",N),N.name==="NotAllowedError"||N.name==="PermissionDeniedError"?(f(!0),n(new Error("Permiso para usar la cámara denegado. Por favor, reinicie los permisos en la configuración del navegador."))):n(N),d(!1)}},j=()=>{window.location.href=`/EditColmena/${x.id}`},U=()=>{window.location.href=`/Monitoreo/${x.id}`},L=()=>{window.location.href=`/Recoleccion/${x.id}`};v.useEffect(()=>{if(l){const I={video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}};navigator.mediaDevices.getUserMedia(I).then(R=>{if(e.current){e.current.srcObject=R,e.current.setAttribute("playsinline",!0),e.current.play(),requestAnimationFrame(C);const N=setTimeout(()=>{l&&!o&&!x&&(n(new Error("Tiempo límite alcanzado: no se detectó un QR")),d(!1),R.getTracks().forEach(W=>W.stop()))},3e4);return()=>clearTimeout(N)}}).catch(R=>{console.error("Error al acceder a la cámara:",R),R.name==="NotAllowedError"||R.name==="PermissionDeniedError"?(f(!0),n(new Error("Permiso para usar la cámara denegado. Por favor, reinicie los permisos en la configuración del navegador."))):n(R),d(!1)})}return()=>{e.current&&e.current.srcObject&&e.current.srcObject.getTracks().forEach(I=>I.stop())}},[l]);const T=async I=>{try{const R=I.split("/"),N=R[R.length-1],W=await fetch(`https://colmenaresdeleje.onrender.com/beehive/detail-hive/${N}`,{headers:{Authorization:`Bearer ${E}`}});if(!W.ok)throw new Error("Error en la petición");const S=await W.json();c(S)}catch(R){console.error("Error al obtener datos:",R),n(R)}},H=()=>{_("/Dashboard")},O=({show:I,onClose:R,content:N})=>I?a.jsx("div",{className:"modal fade show",style:{display:"block",backgroundColor:"rgba(0,0,0,0.5)"},tabIndex:"-1",children:a.jsx("div",{className:"modal-dialog modal-dialog-centered",children:a.jsxs("div",{className:"modal-content",style:{backgroundColor:"#fffbeb",border:"1px solid #fbbf24"},children:[a.jsxs("div",{className:"modal-header",style:{backgroundColor:"#fef3c7",borderBottom:"1px solid #fbbf24"},children:[a.jsx("h5",{className:"modal-title",style:{color:"#92400e"},children:"Instrucciones"}),a.jsx("button",{type:"button",className:"btn-close",onClick:R,"aria-label":"Close",style:{color:"#92400e"}})]}),a.jsx("div",{className:"modal-body",dangerouslySetInnerHTML:{__html:N},style:{color:"#78350f"}}),a.jsx("div",{className:"modal-footer",style:{backgroundColor:"#fef3c7",borderTop:"1px solid #fbbf24"},children:a.jsx("button",{type:"button",className:"btn",onClick:R,style:{backgroundColor:"#fbbf24",color:"#78350f",borderColor:"#f59e0b",fontWeight:"500"},children:"Entendido"})})]})})}):null;return a.jsxs("div",{className:"d-flex flex-column min-vh-100",children:[p==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx("div",{className:"flex-grow-1 d-flex align-items-center justify-content-center px-3 py-5",children:a.jsxs("div",{className:"col-12 col-md-6 col-lg-4",children:[a.jsx("h1",{className:"text-center mb-4 fw-bold",children:"Escanear QR de la colmena"}),r&&!x&&a.jsxs("div",{className:"alert alert-danger text-center mb-4",role:"alert",children:["Error: ",r.message,a.jsx("div",{className:"mt-3",children:h?a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-danger",children:"Se ha denegado el permiso para acceder a la cámara."}),a.jsxs("div",{className:"d-flex flex-column gap-2 align-items-center",children:[a.jsx("button",{className:"btn btn-primary",onClick:P,children:"Ir a configuración de permisos"}),a.jsx("small",{className:"text-muted",children:"Si el botón no funciona, deberá habilitar la cámara manualmente en la configuración de su dispositivo."}),a.jsx("button",{className:"btn btn-outline-secondary mt-2",onClick:z,children:"Intentar nuevamente"})]})]}):a.jsx("button",{className:"btn btn-primary",onClick:z,children:"Intentar de nuevo"})})]}),l&&!o&&!r&&a.jsx("div",{className:"d-flex justify-content-center",children:a.jsxs("div",{className:"position-relative border border-primary border-4 rounded-3 overflow-hidden shadow-lg bg-dark p-3",style:{maxWidth:"400px",width:"100%",aspectRatio:"1 / 1"},children:[a.jsx("video",{ref:e,className:"position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-2"}),a.jsx("canvas",{ref:t,style:{display:"none"}}),a.jsx("div",{className:"position-absolute top-50 start-50 translate-middle border border-success border-2 opacity-75",style:{width:"50%",height:"50%"}})]})}),o&&!x&&a.jsxs("div",{className:"text-center mt-4 bg-white rounded-3 shadow p-4",children:[a.jsx("h3",{className:"fw-semibold text-primary",children:"ID Capturado:"}),a.jsx("p",{className:"mt-3 p-3 bg-light rounded-2 text-break",children:o}),a.jsx("p",{children:"Cargando datos..."})]}),x&&a.jsxs("div",{className:"text-center mt-4 bg-white rounded-3 shadow p-4",children:[a.jsx("h3",{className:"fw-semibold ",children:"Información de la Colmena:"}),a.jsx("div",{className:"mt-3",children:Array.isArray(x)?x.map((I,R)=>a.jsxs("div",{className:"mb-3 p-3 bg-light rounded-2 shadow-sm border",children:[a.jsxs("p",{className:"mb-1",children:[a.jsx("strong",{children:"ID:"})," ",I.id]}),a.jsxs("p",{className:"mb-1",children:[a.jsx("strong",{children:"Nombre:"})," ",I.name||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Estado:"})," ",I.status||"N/A"]})]},R)):a.jsxs("div",{className:"p-3 bg-light rounded-2 shadow-sm border",children:[a.jsxs("p",{className:"mb-1",children:[a.jsx("strong",{children:"Numero de colmena:"})," ",x.id]}),a.jsxs("p",{className:"mb-1",children:[a.jsx("strong",{children:"Fecha de registro:"})," ",x.registration_date||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Ubicacion:"})," ",x.location||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Cuadros de cria abierta:"})," ",x.open_brood_frames||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Cuadros de cria operculada:"})," ",x.capped_brood_frames||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Presencia de la reina:"})," ",x.queen_presence||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Color de la reina:"})," ",x.queen_color||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Origen la reina:"})," ",x.origin||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Cuadros de comida:"})," ",x.food_frames||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Observaciones:"})," ",x.observations||"N/A"]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Grados centigrados:"})," ",x.id_weather_conditions.temp_c]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Grados farenheit:"})," ",x.id_weather_conditions.temp_f]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Condiciones:"})," ",x.id_weather_conditions.text]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Velocidad del viento:"})," ",x.id_weather_conditions.wind_kph]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Presion:"})," ",x.id_weather_conditions.pressure_mb]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Ubicacion:"})," ",x.location]}),a.jsxs("p",{className:"mb-0",children:[a.jsx("strong",{children:"Indices de humedad:"})," ",x.id_weather_conditions.humidity_indices]})]})}),a.jsxs("div",{className:"mt-4 d-flex flex-wrap justify-content-center gap-2",children:[a.jsx("button",{className:"btn btn-warning",onClick:H,children:"Ver Colmenas"}),a.jsx("button",{className:"btn btn-warning",onClick:z,children:"Volver a Escanear"}),a.jsx("button",{className:"btn btn-warning",onClick:j,children:"Editar Colmena"}),a.jsx("button",{className:"btn btn-warning",onClick:U,children:"Monitoreo"}),a.jsx("button",{className:"btn btn-warning",onClick:L,children:"Recolección"})]})]})]})}),a.jsx(O,{show:B,onClose:()=>A(!1),content:w}),a.jsx(pt,{})]})},Hi={mobile:"480px",tablet:"768px",laptop:"1024px"},o3=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;
`,i3=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    max-width: 495px;
`,a3=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${Hi.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
`,s3=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`,jl=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem;
`,Pl=$.textarea`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.96rem;
    transition: border-color 0.3s;
    min-height: 80px;

    @media (max-width: ${Hi.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
        min-height: 60px;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,wp=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,Dp=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${Hi.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
    }
`,x3=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,l3=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${Hi.mobile}) {
        padding: 1.5rem;
    }
`,c3=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }
`,d3=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${Hi.mobile}) {
        font-size: 20px;
    }
`,u3=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }
`;function m3(){const[e,t]=v.useState(!1),[r,n]=v.useState(null),o=Gr(),{id:i}=pn(),x=st(),c=i,{hive_id:l,monitoring_date:d,queen_observations:h,food_observations:f,general_observations:B}=o.state||{},[A,w]=v.useState({monitoring_date:d||"",queen_observations:h||"",food_observations:f||"",general_observations:B||"",hive_id:l||"",beekeeper:""}),[b,_]=v.useState({monitoring_date:""});function m(z){const j=z+"=",U=document.cookie.split(";");for(let L=0;L<U.length;L++){let T=U[L];for(;T.charAt(0)===" ";)T=T.substring(1,T.length);if(T.indexOf(j)===0)return T.substring(j.length,T.length)}return null}const p=m("token"),E=m("role"),C=m("id_User"),k=z=>{let j={},U=!0;return z.monitoring_date||(j.monitoring_date="La fecha es requerida",U=!1),{isValid:U,errors:j}},D=z=>{const{name:j,value:U}=z.target;w(L=>({...L,[j]:U})),b[j]&&_(L=>({...L,[j]:""}))},F=async z=>{z.preventDefault();const U=new Date().toISOString().split("T")[0],L=k(A);if(!L.isValid){_(L.errors);return}try{const T={monitoring_date:U,queen_observations:A.queen_observations,food_observations:A.food_observations,general_observations:A.general_observations,hive_id:A.hive_id,beekeeper:parseInt(C)},H=await fetch(`https://colmenaresdeleje.onrender.com/monitoring/edit-beehive-monitoring/${c}/`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify(T)});if(!H.ok){const I=await H.json();throw new Error(`Error al actualizar los datos: ${JSON.stringify(I)}`)}const O=await H.json();console.log("Monitoreo actualizado exitosamente:",O),t(!0)}catch(T){console.error("Error al enviar datos:",T),n(`Error al actualizar los datos en el servidor: ${T.message}`)}},P=()=>{x("/Dashboard")};return a.jsxs(o3,{children:[E==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-3",children:a.jsxs("div",{className:"row justify-content-center",children:[a.jsx("div",{className:"col-lg-6 col-md-12 mb-3",children:a.jsxs(i3,{children:[a.jsx(a3,{children:"Editar Monitoreo"}),r&&a.jsx("div",{className:"alert alert-danger",role:"alert",children:r}),a.jsxs(s3,{onSubmit:F,children:[a.jsx(jl,{htmlFor:"queen-observations",children:"Observaciones de la Reina"}),a.jsx(Pl,{id:"queen-observations",name:"queen_observations",placeholder:"Ingrese observaciones sobre la reina",value:A.queen_observations,onChange:D}),a.jsx(jl,{htmlFor:"food-observations",children:"Observaciones de Alimentación"}),a.jsx(Pl,{id:"food-observations",name:"food_observations",placeholder:"Ingrese observaciones sobre la alimentación",value:A.food_observations,onChange:D}),a.jsx(jl,{htmlFor:"general-observations",children:"Observaciones Generales"}),a.jsx(Pl,{id:"general-observations",name:"general_observations",placeholder:"Ingrese observaciones generales",value:A.general_observations,onChange:D}),a.jsx(wp,{children:a.jsx(Dp,{type:"submit",children:"Actualizar"})}),a.jsx(wp,{children:a.jsx(Dp,{type:"button",onClick:P,style:{marginTop:"10px",backgroundColor:"#e9ecef"},children:"Volver"})})]})]})}),a.jsx("div",{className:"col-lg-6 col-md-12",children:a.jsx(gr,{className:"mb-3"})})]})}),a.jsx(pt,{}),a.jsx(x3,{isVisible:e,children:a.jsxs(l3,{isVisible:e,children:[a.jsx(c3,{}),a.jsx(d3,{children:"Actualización Exitosa"}),a.jsx("p",{children:"La información del monitoreo ha sido actualizada correctamente"}),a.jsx(u3,{onClick:()=>{t(!1),x("/List_Monitoreo")},children:"Aceptar"})]})})]})}const Ye={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},f3=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;

    @media (min-width: ${Ye.large}) {
        max-width: 1920px;
    }
`,p3=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 346px; /* Alineado con el ancho del Aside_Card en desktop */
    min-height: 30rem; /* Permite que crezca según contenido */

    @media (max-width: ${Ye.tablet}) {
        max-width: 100%; /* Ocupa todo el ancho en tablets y móviles */
        margin: 0 auto;
    }

    @media (min-width: ${Ye.large}) {
        max-width: 346px; /* Consistente con Aside_Card */
        padding: 1.5rem;
    }
    @media (min-width: ${Ye.xlarge}) {
        max-width: 400px; /* Ligeramente más grande en pantallas muy grandes */
        padding: 2rem;
    }
`,h3=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${Ye.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
    @media (min-width: ${Ye.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem);
        margin-bottom: 1.5rem;
    }
`,E3=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    @media (min-width: ${Ye.large}) {
        gap: 0.75rem;
    }
`,bp=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem;

    @media (max-width: ${Ye.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 0.1rem;
    }
    @media (min-width: ${Ye.large}) {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
`,kp=$.input`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    transition: border-color 0.3s;

    @media (max-width: ${Ye.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    @media (min-width: ${Ye.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${Ye.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,_p=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,jp=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${Ye.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    @media (min-width: ${Ye.large}) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: ${Ye.xlarge}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }
`,Pp=$.div`
    color: red;
    font-size: 0.75rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${Ye.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
    }
`,g3=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,C3=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${Ye.mobile}) {
        padding: 1.5rem;
        width: 85%;
    }
    @media (min-width: ${Ye.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${Ye.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`,B3=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${Ye.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,v3=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${Ye.mobile}) {
        font-size: 20px;
    }
    @media (min-width: ${Ye.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,A3=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    @media (min-width: ${Ye.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`;function y3(){const[e,t]=v.useState(!1),[r,n]=v.useState(null),o=Gr(),{id:i}=pn(),x=st(),c=i,{hiveId:l,harvestDate:d,honeyProduction:h,pollenProduction:f}=o.state||{},[B,A]=v.useState({harvest_date:d||"",honey_production:h?h.toString():"",pollen_production:f?f.toString():"",hive_id:l||"",beekeeper:""}),[w,b]=v.useState({harvest_date:"",honey_production:"",pollen_production:""});function _(z){const j=z+"=",U=document.cookie.split(";");for(let L=0;L<U.length;L++){let T=U[L];for(;T.charAt(0)===" ";)T=T.substring(1,T.length);if(T.indexOf(j)===0)return T.substring(j.length,T.length)}return null}const m=_("token"),p=_("role"),E=_("id_User"),C=z=>{!/[\d.]/.test(z.key)&&z.key!=="Backspace"&&z.key!=="Delete"&&z.key!=="ArrowLeft"&&z.key!=="ArrowRight"&&z.preventDefault(),z.key==="."&&z.target.value.includes(".")&&z.preventDefault()},k=z=>{let j={},U=!0;return z.honey_production?/^\d+(\.\d{1,2})?$/.test(z.honey_production)?parseFloat(z.honey_production)<0&&(j.honey_production="El valor debe ser positivo",U=!1):(j.honey_production="Ingrese un número válido (hasta 2 decimales)",U=!1):(j.honey_production="La producción de miel es requerida",U=!1),z.pollen_production?/^\d+(\.\d{1,2})?$/.test(z.pollen_production)?parseFloat(z.pollen_production)<0&&(j.pollen_production="El valor debe ser positivo",U=!1):(j.pollen_production="Ingrese un número válido (hasta 2 decimales)",U=!1):(j.pollen_production="La producción de polen es requerida",U=!1),{isValid:U,errors:j}},D=z=>{const{name:j,value:U}=z.target;j==="honey_production"||j==="pollen_production"?(U===""||/^\d*\.?\d*$/.test(U))&&A(L=>({...L,[j]:U})):A(L=>({...L,[j]:U})),w[j]&&b(L=>({...L,[j]:""}))},F=async z=>{z.preventDefault();const U=new Date().toISOString().split("T")[0],L=k(B);if(!L.isValid){b(L.errors);return}try{const T={harvest_date:U,honey_production:parseFloat(B.honey_production),pollen_production:parseFloat(B.pollen_production),hive_id:B.hive_id,beekeeper:parseInt(E)},H=await fetch(`https://colmenaresdeleje.onrender.com/harvesting/edit-hive-harvesting/${c}/`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify(T)});if(!H.ok){const I=await H.json();throw new Error(`Error al actualizar los datos: ${JSON.stringify(I)}`)}const O=await H.json();console.log("Cosecha actualizada exitosamente:",O),t(!0)}catch(T){console.error("Error al enviar datos:",T),n(`Error al actualizar los datos en el servidor: ${T.message}`)}},P=()=>{x("/Dashboard")};return a.jsxs(f3,{children:[p==="admin"?a.jsx(Jt,{}):a.jsx(qr,{}),a.jsx(Pr,{}),a.jsx("div",{className:"container py-3",children:a.jsxs("div",{className:"row justify-content-center align-items-start",children:[a.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3 mt-3",children:a.jsxs(p3,{children:[a.jsx(h3,{children:"Editar Cosecha"}),r&&a.jsx("div",{className:"alert alert-danger",role:"alert",children:r}),a.jsxs(E3,{onSubmit:F,children:[a.jsx(bp,{htmlFor:"honey-production",children:"Producción de Miel (kg)"}),a.jsx(kp,{type:"number",id:"honey-production",name:"honey_production",placeholder:"Ingrese la producción de miel",value:B.honey_production,onChange:D,onKeyDown:C,required:!0}),w.honey_production&&a.jsx(Pp,{children:w.honey_production}),a.jsx(bp,{htmlFor:"pollen-production",children:"Producción de Polen (kg)"}),a.jsx(kp,{type:"number",id:"pollen-production",name:"pollen_production",placeholder:"Ingrese la producción de polen",value:B.pollen_production,onChange:D,onKeyDown:C,required:!0}),w.pollen_production&&a.jsx(Pp,{children:w.pollen_production}),a.jsx(_p,{children:a.jsx(jp,{type:"submit",children:"Actualizar"})}),a.jsx(_p,{children:a.jsx(jp,{type:"button",onClick:P,style:{marginTop:"10px",backgroundColor:"#e9ecef"},children:"Volver"})})]})]})}),a.jsx("div",{className:"col-12 col-md-6 col-lg-4 mt-3",children:a.jsx(gr,{})})]})}),a.jsx(pt,{}),a.jsx(g3,{isVisible:e,children:a.jsxs(C3,{isVisible:e,children:[a.jsx(B3,{}),a.jsx(v3,{children:"Actualización Exitosa"}),a.jsx("p",{children:"La información de la cosecha ha sido actualizada correctamente"}),a.jsx(A3,{onClick:()=>{t(!1),x("/List_Recoleccion")},children:"Aceptar"})]})})]})}const Oe={mobile:"480px",tablet:"768px",laptop:"1024px",large:"1200px",xlarge:"1600px"},F3=$.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;

    @media (min-width: ${Oe.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`,w3=$.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    max-width: 495px;

    /* Para pantallas grandes: aumenta el ancho máximo y el padding */
    @media (min-width: ${Oe.large}) {
        max-width: 32rem; /* Usar rem para escalabilidad */
        padding: 1.5rem;
    }
    @media (min-width: ${Oe.xlarge}) {
        max-width: 38rem;
        padding: 2rem;
    }
`,D3=$.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${Oe.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${Oe.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem); /* Escala proporcionalmente */
        margin-bottom: 1.5rem;
    }
`,b3=$.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    /* Para pantallas grandes: aumenta el gap para mejor espaciado */
    @media (min-width: ${Oe.large}) {
        gap: 0.75rem;
    }
`,lr=$.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem; /* Ajustado de 1.5rem a 0.9rem para consistencia */

    @media (max-width: ${Oe.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 0.1rem;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${Oe.large}) {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
`,Rr=$.input`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    transition: border-color 0.3s;

    @media (max-width: ${Oe.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${Oe.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${Oe.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`,k3=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Añadido para separar botones */
`,_3=$.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${Oe.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${Oe.large}) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: ${Oe.xlarge}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }
`,Mr=$.div`
    color: red;
    font-size: 0.75rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${Oe.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
    }
`,j3=$.div`
    position: relative;
    width: 100%;
`,P3=$.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #4e342e;

    /* Ajuste responsivo para el ícono */
    @media (min-width: ${Oe.large}) {
        right: 12px;
    }
`,Sp=$.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${e=>e.isVisible?"flex":"none"};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,$p=$.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${e=>e.isVisible?"scale(1)":"scale(0.1)"};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${Oe.mobile}) {
        padding: 1.5rem;
        width: 85%;
    }
    /* Para pantallas grandes: aumenta el tamaño del popup */
    @media (min-width: ${Oe.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${Oe.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`,S3=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    /* Para pantallas grandes: aumenta el tamaño del ícono */
    @media (min-width: ${Oe.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,$3=$.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #ff6b6b;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '!';
        font-size: 40px;
        color: white;
        font-weight: bold;
    }

    /* Para pantallas grandes: aumenta el tamaño del ícono */
    @media (min-width: ${Oe.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`,Np=$.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${Oe.mobile}) {
        font-size: 20px;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${Oe.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`,Tp=$.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${Oe.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`,N3=$.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #ff6b6b;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    animation: slideIn 0.3s ease-out forwards;
    max-width: 350px;
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    /* Ajuste para pantallas pequeñas */
    @media (max-width: ${Oe.mobile}) {
        top: 10px;
        right: 10px;
        padding: 10px 15px;
        max-width: 90%;
    }
`;function zp(){const e=st(),t=v.useRef(null),[r,n]=v.useState(!0),i=new Date().toISOString().split("T")[0],[x,c]=v.useState(!1),[l,d]=v.useState({}),[h,f]=v.useState(!1),[B,A]=v.useState(""),[w,b]=v.useState(!1),[_,m]=v.useState(""),[p,E]=v.useState(0);v.useEffect(()=>{(async()=>{try{const N=await(await fetch("https://colmenaresdeleje.onrender.com/users/register_permision/",{method:"GET",headers:{"Content-Type":"application/json"}})).json();N.message==="Login"?(e("/"),n(!1)):N.message==="Register"&&n(!0)}catch(R){console.error("Error checking registration permission:",R),e("/"),n(!1)}})()},[e]);const[C,k]=v.useState({username:"",nombre:"",apellido:"",identificacion:"",password:"",correo:"",telefono:"",fechaNacimiento:"",estado:"Active",nombreContactoEmergencia:"",contactoEmergencia:"",rol:"admin"}),[D,F]=v.useState({password:!1}),P=I=>{F(R=>({...R,[I]:!R[I]}))},z=I=>{let R=0;return I.length>=8&&R++,/[A-Z]/.test(I)&&R++,/[0-9]/.test(I)&&R++,/[^A-Za-z0-9]/.test(I)&&R++,R},j=I=>{const R=["#ff4444","#ffbb33","#00C851","#007E33"];return R[I-1]||R[0]},U=I=>["Débil","Media","Buena","Fuerte"][I-1]||"",L=I=>{const{name:R,value:N}=I.target;if(k(W=>({...W,[R]:N})),R==="password"){const W=z(N);E(W)}l[R]&&d(W=>({...W,[R]:""}))},T=I=>{A(I),f(!0),setTimeout(()=>{f(!1)},5e3)},H=I=>{let R={},N=!0;const W=/^[0-9]{8,10}$/;I.identificacion&&!W.test(I.identificacion)&&(R.identificacion="La cédula debe contener entre 8 y 10 dígitos numéricos",N=!1);const S=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;I.correo&&!S.test(I.correo)&&(R.correo="Formato de correo inválido",N=!1);const Y=/^[0-9]{7,10}$/;I.telefono&&!Y.test(I.telefono)&&(R.telefono="El teléfono debe contener entre 7 y 10 dígitos",N=!1),I.contactoEmergencia&&!Y.test(I.contactoEmergencia)&&(R.contactoEmergencia="El contacto debe contener entre 7 y 10 dígitos",N=!1);const q=/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;I.nombreApicultor&&!q.test(I.nombreApicultor)&&(R.nombreApicultor="El nombre solo debe contener letras y espacios",N=!1),I.apellidoApicultor&&!q.test(I.apellidoApicultor)&&(R.apellidoApicultor="El apellido solo debe contener letras y espacios",N=!1),I.nombreContactoEmergencia&&!q.test(I.nombreContactoEmergencia)&&(R.nombreContactoEmergencia="El nombre solo debe contener letras y espacios",N=!1);const ae=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;I.password&&!ae.test(I.password)&&(R.password="La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial",N=!1);const J=/^[a-zA-Z0-9._-]{3,20}$/;return I.username&&!J.test(I.username)&&(R.username="El username debe tener entre 3 y 20 caracteres y solo puede contener letras, números, puntos, guiones y guiones bajos",N=!1),{isValid:N,errors:R}},O=async I=>{I.preventDefault();const R=H(C);if(!R.isValid){d(R.errors);return}const N={username:C.username,first_name:C.nombre,last_name:C.apellido,identifications:C.identificacion,password:C.password,email:C.correo,phone:C.telefono,assignment_date:i,birth_date:C.fechaNacimiento,state:"Active",emergency_contact_name:C.nombreContactoEmergencia,emergency_contact_phone:C.contactoEmergencia,role:"admin"};try{const W=await fetch("https://colmenaresdeleje.onrender.com/users/sign_up/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)}),S=await W.json();if(!W.ok){if(S.error){if(S.error.includes("El usuario ya está registrado")){T("El nombre de usuario ya existe. Por favor, elija otro."),d(Y=>({...Y,username:"Este nombre de usuario ya está en uso"}));return}if(S.error.includes("El email ya está registrado")){T("El correo electrónico ya está registrado."),d(Y=>({...Y,correo:"Este correo ya está registrado"}));return}}m(S.error||"Error en el registro"),b(!0);return}c(!0),k({username:"",nombre:"",apellido:"",identificacion:"",password:"",correo:"",telefono:"",fechaNacimiento:"",estado:"Active",contactoEmergencia:"",nombreContactoEmergencia:"",rol:"admin"}),setTimeout(()=>{e("/")},2e3)}catch(W){m(`Error: ${W.message}`),b(!0)}};return a.jsxs(F3,{children:[a.jsx(Ri,{}),a.jsx("div",{className:"container py-3",children:a.jsx("div",{className:"row justify-content-center",children:a.jsx("div",{className:"col-lg-6 col-md-12 mb-3",children:a.jsxs(w3,{children:[a.jsx(D3,{children:"Registrarse"}),a.jsxs(b3,{onSubmit:O,ref:t,children:[a.jsx(lr,{htmlFor:"username",children:"Username"}),a.jsx(Rr,{type:"text",id:"username",name:"username",placeholder:"Ingrese el username del apicultor",value:C.username,onChange:L,required:!0}),l.username&&a.jsx(Mr,{children:l.username}),a.jsx(lr,{htmlFor:"nombreApicultor",children:"Nombre"}),a.jsx(Rr,{type:"text",id:"nombre",name:"nombre",placeholder:"Ingrese el nombre del apicultor",value:C.nombre,onChange:L,required:!0}),l.nombreApicultor&&a.jsx(Mr,{children:l.nombreApicultor}),a.jsx(lr,{htmlFor:"apellidoApicultor",children:"Apellido"}),a.jsx(Rr,{type:"text",id:"apellido",name:"apellido",placeholder:"Ingrese el apellido del apicultor",value:C.apellido,onChange:L,required:!0}),l.apellidoApicultor&&a.jsx(Mr,{children:l.apellidoApicultor}),a.jsx(lr,{htmlFor:"identificacion",children:"Identificación"}),a.jsx(Rr,{type:"number",id:"identificacion",name:"identificacion",placeholder:"Ingrese la identificación del apicultor",value:C.identificacion,onChange:L,required:!0}),l.identificacion&&a.jsx(Mr,{children:l.identificacion}),a.jsx(lr,{htmlFor:"password",children:"Contraseña"}),a.jsxs(j3,{children:[a.jsx(Rr,{type:D.password?"text":"password",id:"password",name:"password",placeholder:"Ingrese la contraseña del apicultor",value:C.password,onChange:L,required:!0}),a.jsx(P3,{onClick:()=>P("password"),children:D.password?a.jsx(ks,{size:18}):a.jsx(v0,{size:18})})]}),l.password&&a.jsx(Mr,{children:l.password}),C.password&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{height:"4px",backgroundColor:"#eee",borderRadius:"2px",overflow:"hidden",marginTop:"5px"},children:a.jsx("div",{style:{width:`${p/4*100}%`,height:"100%",backgroundColor:j(p),transition:"all 0.3s"}})}),a.jsx(lr,{style:{color:j(p),textAlign:"right",fontSize:"0.8rem"},children:U(p)}),a.jsx(lr,{style:{color:"#666",fontSize:"0.75rem",marginTop:"-5px"},children:"La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial."})]}),a.jsx(lr,{htmlFor:"correo",children:"Correo"}),a.jsx(Rr,{type:"email",id:"correo",name:"correo",placeholder:"Ingrese el correo del apicultor",value:C.correo,onChange:L,required:!0}),l.correo&&a.jsx(Mr,{children:l.correo}),a.jsx(lr,{htmlFor:"telefono",children:"Teléfono"}),a.jsx(Rr,{type:"tel",id:"telefono",name:"telefono",placeholder:"Ingrese el número del apicultor",value:C.telefono,onChange:L,required:!0}),l.telefono&&a.jsx(Mr,{children:l.telefono}),a.jsx(lr,{htmlFor:"fechaNacimiento",children:"Fecha de Nacimiento"}),a.jsx(Rr,{type:"date",id:"fechaNacimiento",name:"fechaNacimiento",value:C.fechaNacimiento,onChange:L,required:!0}),l.fechaNacimiento&&a.jsx(Mr,{children:l.fechaNacimiento}),a.jsx(lr,{htmlFor:"nombreContactoEmergencia",children:"Nombre de contacto de emergencia"}),a.jsx(Rr,{type:"text",id:"nombreContactoEmergencia",placeholder:"Ingrese el nombre del contacto de emergencia",name:"nombreContactoEmergencia",required:!0,value:C.nombreContactoEmergencia,onChange:L}),l.nombreContactoEmergencia&&a.jsx(Mr,{children:l.nombreContactoEmergencia}),a.jsx(lr,{htmlFor:"contactoEmergencia",children:"Contacto de emergencia"}),a.jsx(Rr,{type:"tel",id:"contactoEmergencia",name:"contactoEmergencia",placeholder:"Ingrese el contacto de emergencia",required:!0,value:C.contactoEmergencia,onChange:L}),l.contactoEmergencia&&a.jsx(Mr,{children:l.contactoEmergencia}),a.jsx(k3,{children:a.jsx(_3,{type:"submit",children:"Crear"})})]})]})})})}),a.jsx(pt,{}),a.jsx(Sp,{isVisible:x,children:a.jsxs($p,{isVisible:x,children:[a.jsx(S3,{}),a.jsx(Np,{children:"Registro Exitoso"}),a.jsx("p",{children:"El usuario ha sido registrado exitosamente"}),a.jsx(Tp,{onClick:()=>c(!1),children:"Aceptar"})]})}),a.jsx(Sp,{isVisible:w,children:a.jsxs($p,{isVisible:w,children:[a.jsx($3,{}),a.jsx(Np,{children:"Error en el Registro"}),a.jsx("p",{children:_}),a.jsx(Tp,{onClick:()=>b(!1),children:"Aceptar"})]})}),h&&a.jsx(N3,{children:B})]})}function T3(){var c,l,d,h,f;const[e,t]=v.useState(null),[r,n]=v.useState(!0),[o,i]=v.useState(null),{id:x}=pn();return v.useEffect(()=>{(async()=>{try{n(!0);const A=await fetch(`https://colmenaresdeleje.onrender.com/beehive/detail-public-hive/${x}/`);if(!A.ok)throw new Error("No se encontró información para esta colmena");const w=await A.json();t(w)}catch(A){i(A.message)}finally{n(!1)}})()},[x]),a.jsx("div",{className:"container my-4",children:a.jsx("div",{className:"row justify-content-center",children:a.jsx("div",{className:"col-md-8",children:a.jsxs("div",{className:"card shadow",children:[a.jsx(Ri,{}),a.jsx("div",{className:"card-body",children:r?a.jsxs("div",{className:"text-center p-5",children:[a.jsx("div",{className:"spinner-border text-warning",role:"status",children:a.jsx("span",{className:"visually-hidden",children:"Cargando..."})}),a.jsx("p",{className:"mt-3",children:"Cargando información de la colmena..."})]}):o?a.jsxs("div",{className:"alert alert-danger text-center",children:[a.jsx("i",{className:"bi bi-exclamation-triangle-fill me-2"}),o]}):e?a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-md-5 text-center mb-4",children:[a.jsx("img",{src:ji,alt:"Imagen de la colmena",className:"img-fluid rounded border border-3 border-warning mb-3",style:{width:"300px",height:"300px",objectFit:"cover",objectPosition:"center"}}),a.jsx("div",{className:"d-flex justify-content-center"})]}),a.jsxs("div",{className:"col-md-7",children:[a.jsx("h4",{className:"border-bottom border-warning pb-2 mb-3",children:"Datos Generales"}),a.jsxs("div",{className:"row mb-4",children:[a.jsxs("div",{className:"col-6",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Código:"})," ",e.id]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Ubicación:"})," ",e.location]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Presencia de reina:"})," ",e.queen_presence?"Sí":"No"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Color de reina:"})," ",e.queen_color||"No especificado"]})]}),a.jsxs("div",{className:"col-6",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Cuadros cría abierta:"})," ",e.open_brood_frames]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Cuadros cría operculada:"})," ",e.capped_brood_frames]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Cuadros de comida:"})," ",e.food_frames]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Origen:"})," ",e.origin||"No especificado"]})]})]}),a.jsx("h4",{className:"border-bottom border-warning pb-2 mb-3",children:"Condiciones Ambientales"}),e?a.jsxs("div",{className:"row mb-3",children:[a.jsxs("div",{className:"col-6",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Temperatura:"}),(c=e.id_weather_conditions)==null?void 0:c.temp_c,"°C /",(l=e.id_weather_conditions)==null?void 0:l.temp_f,"°F"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Condiciones:"})," ",(d=e.id_weather_conditions)==null?void 0:d.text]})]}),a.jsxs("div",{className:"col-6",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Viento:"})," ",(h=e.id_weather_conditions)==null?void 0:h.wind_kph," km/h"]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Humedad:"})," ",(f=e.id_weather_conditions)==null?void 0:f.humidity_indices,"%"]})]})]}):null,e.observations&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{className:"border-bottom border-warning pb-2 mb-3",children:"Observaciones"}),a.jsx("p",{children:e.observations})]}),a.jsx("div",{className:"text-muted text-end mt-3",children:a.jsxs("small",{children:["Fecha de registro: ",new Date(e.registration_date).toLocaleDateString()]})})]})]}):a.jsx("p",{className:"text-center",children:"No hay información disponible para esta colmena."})}),a.jsx(pt,{})]})})})})}function z3(){return a.jsx(A7,{children:a.jsxs(ZC,{children:[a.jsx(He,{path:"/First-Registration",element:a.jsx(_l,{checkFirstRegistration:!0}),children:a.jsx(He,{index:!0,element:a.jsx(zp,{})})}),a.jsx(He,{path:"/",element:a.jsx(X4,{})}),a.jsx(He,{path:"/RecuperarContraseña",element:a.jsx(SB,{})}),a.jsx(He,{path:"/ConfirmPassword/:uidb64/:token",element:a.jsx(Ov,{})}),a.jsx(He,{path:"/First_Registration",element:a.jsx(zp,{})}),a.jsx(He,{path:"/PublicColmenaView/:id",element:a.jsx(T3,{})}),a.jsxs(He,{element:a.jsx(_l,{allowedRoles:["admin"]}),children:[a.jsx(He,{path:"/ViewApicultor",element:a.jsx(Zv,{})}),a.jsx(He,{path:"/EditUser/:id",element:a.jsx(qv,{})}),a.jsx(He,{path:"/UserRegister",element:a.jsx(X2,{})})]}),a.jsxs(He,{element:a.jsx(_l,{allowedRoles:["admin","beekeeper"]}),children:[a.jsx(He,{path:"/Dashboard",element:a.jsx(aB,{})}),a.jsx(He,{path:"/EditColmena/:colmenaId",element:a.jsx(ev,{})}),a.jsx(He,{path:"/Monitoreo/:colmenaId",element:a.jsx(uv,{})}),a.jsx(He,{path:"/Recoleccion/:colmenaId",element:a.jsx(HB,{})}),a.jsx(He,{path:"/HivenRegister",element:a.jsx(BB,{})}),a.jsx(He,{path:"/List_Monitoreo",element:a.jsx(Jv,{})}),a.jsx(He,{path:"/List_Recoleccion",element:a.jsx(e3,{})}),a.jsx(He,{path:"/Scan_QR",element:a.jsx(n3,{})}),a.jsx(He,{path:"/Edit_Recoleccion/:id",element:a.jsx(y3,{})}),a.jsx(He,{path:"/Edit_Monitoreo/:id",element:a.jsx(m3,{})})]})]})})}X9(document.getElementById("root")).render(a.jsx(v.StrictMode,{children:a.jsx(z3,{})}));
