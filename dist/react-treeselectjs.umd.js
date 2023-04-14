(function(h,D){typeof exports=="object"&&typeof module<"u"?module.exports=D(require("react"),require("treeselectjs")):typeof define=="function"&&define.amd?define(["react","treeselectjs"],D):(h=typeof globalThis<"u"?globalThis:h||self,h.Treeselect=D(h.React,h.TreeselectJS))})(this,function(h,D){"use strict";var A={},we={get exports(){return A},set exports(f){A=f}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Pe(){if(Q)return I;Q=1;var f=h,T=Symbol.for("react.element"),P=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function C(O,d,x){var E,y={},S=null,V=null;x!==void 0&&(S=""+x),d.key!==void 0&&(S=""+d.key),d.ref!==void 0&&(V=d.ref);for(E in d)l.call(d,E)&&!g.hasOwnProperty(E)&&(y[E]=d[E]);if(O&&O.defaultProps)for(E in d=O.defaultProps,d)y[E]===void 0&&(y[E]=d[E]);return{$$typeof:T,type:O,key:S,ref:V,props:y,_owner:m.current}}return I.Fragment=P,I.jsx=C,I.jsxs=C,I}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function xe(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var f=h,T=Symbol.for("react.element"),P=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),te=Symbol.iterator,De="@@iterator";function Ae(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[De];return typeof r=="function"?r:null}var j=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=j.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var We=!1,Ye=!1,Ne=!1,Ve=!1,Le=!1,ne;ne=Symbol.for("react.module.reference");function Me(e){return!!(typeof e=="string"||typeof e=="function"||e===l||e===g||Le||e===m||e===x||e===E||Ve||e===V||We||Ye||Ne||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===y||e.$$typeof===C||e.$$typeof===O||e.$$typeof===d||e.$$typeof===ne||e.getModuleId!==void 0))}function Ue(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ae(e){return e.displayName||"Context"}function b(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l:return"Fragment";case P:return"Portal";case g:return"Profiler";case m:return"StrictMode";case x:return"Suspense";case E:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O:var r=e;return ae(r)+".Consumer";case C:var t=e;return ae(t._context)+".Provider";case d:return Ue(e,e.render,"ForwardRef");case y:var n=e.displayName||null;return n!==null?n:b(e.type)||"Memo";case S:{var o=e,u=o._payload,i=o._init;try{return b(i(u))}catch{return null}}}return null}var w=Object.assign,Y=0,ie,oe,ue,se,fe,le,ce;function de(){}de.__reactDisabledLog=!0;function Je(){{if(Y===0){ie=console.log,oe=console.info,ue=console.warn,se=console.error,fe=console.group,le=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}}function Be(){{if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:w({},e,{value:ie}),info:w({},e,{value:oe}),warn:w({},e,{value:ue}),error:w({},e,{value:se}),group:w({},e,{value:fe}),groupCollapsed:w({},e,{value:le}),groupEnd:w({},e,{value:ce})})}Y<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var $=j.ReactCurrentDispatcher,G;function L(e,r,t){{if(G===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var z=!1,M;{var $e=typeof WeakMap=="function"?WeakMap:Map;M=new $e}function ve(e,r){if(!e||z)return"";{var t=M.get(e);if(t!==void 0)return t}var n;z=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=$.current,$.current=null,Je();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(_){n=_}Reflect.construct(e,[],i)}else{try{i.call()}catch(_){n=_}e.call(i.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),p=n.stack.split(`
`),s=a.length-1,c=p.length-1;s>=1&&c>=0&&a[s]!==p[c];)c--;for(;s>=1&&c>=0;s--,c--)if(a[s]!==p[c]){if(s!==1||c!==1)do if(s--,c--,c<0||a[s]!==p[c]){var R=`
`+a[s].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&M.set(e,R),R}while(s>=1&&c>=0);break}}}finally{z=!1,$.current=u,Be(),Error.prepareStackTrace=o}var F=e?e.displayName||e.name:"",Se=F?L(F):"";return typeof e=="function"&&M.set(e,Se),Se}function Ge(e,r,t){return ve(e,!1)}function ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function U(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,ze(e));if(typeof e=="string")return L(e);switch(e){case x:return L("Suspense");case E:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return Ge(e.render);case y:return U(e.type,r,t);case S:{var n=e,o=n._payload,u=n._init;try{return U(u(o),r,t)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,pe={},he=j.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function He(e,r,t,n,o){{var u=Function.call.bind(J);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var p=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(B(o),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),B(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,B(o),v("Failed %s type: %s",t,a.message),B(null))}}}var Ke=Array.isArray;function H(e){return Ke(e)}function Xe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function qe(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function Ee(e){if(qe(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xe(e)),ge(e)}var N=j.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},me,Re,K;K={};function Qe(e){if(J.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(J.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&N.current&&r&&N.current.stateNode!==r){var t=b(N.current.type);K[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',b(N.current.type),e.ref),K[t]=!0)}}function tr(e,r){{var t=function(){me||(me=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){Re||(Re=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,o,u,i){var a={$$typeof:T,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ir(e,r,t,n,o){{var u,i={},a=null,p=null;t!==void 0&&(Ee(t),a=""+t),er(r)&&(Ee(r.key),a=""+r.key),Qe(r)&&(p=r.ref,rr(r,o));for(u in r)J.call(r,u)&&!Ze.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||p){var c=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(i,c),p&&nr(i,c)}return ar(e,a,p,o,n,N.current,i)}}var X=j.ReactCurrentOwner,ye=j.ReactDebugCurrentFrame;function k(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);ye.setExtraStackFrame(t)}else ye.setExtraStackFrame(null)}var q;q=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===T}function be(){{if(X.current){var e=b(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var _e={};function ur(e){{var r=be();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(_e[t])return;_e[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+b(e._owner.type)+"."),k(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),k(null)}}function Oe(e,r){{if(typeof e!="object")return;if(H(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Te(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var o=Ae(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Z(i.value)&&Te(i.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===y))t=r.propTypes;else return;if(t){var n=b(r);He(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!q){q=!0;var o=b(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function fr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){k(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),k(null);break}}e.ref!==null&&(k(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),k(null))}}function Ce(e,r,t,n,o,u){{var i=Me(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=or(o);p?a+=p:a+=be();var s;e===null?s="null":H(e)?s="array":e!==void 0&&e.$$typeof===T?(s="<"+(b(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var c=ir(e,r,t,o,u);if(c==null)return c;if(i){var R=r.children;if(R!==void 0)if(n)if(H(R)){for(var F=0;F<R.length;F++)Oe(R[F],e);Object.freeze&&Object.freeze(R)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(R,e)}return e===l?fr(c):sr(c),c}}function lr(e,r,t){return Ce(e,r,t,!0)}function cr(e,r,t){return Ce(e,r,t,!1)}var dr=cr,vr=lr;W.Fragment=l,W.jsx=dr,W.jsxs=vr}()),W}(function(f){process.env.NODE_ENV==="production"?f.exports=Pe():f.exports=xe()})(we);const je=A.Fragment,re=A.jsx,ke=A.jsxs,Fe=["value","id","children"];return f=>{const T=h.useRef(null),P=h.useRef(null),l=h.useRef(null);if(l.current){let m=!1;Object.keys(f).forEach(g=>{const C=l.current[g]===f[g];!Fe.includes(g)&&!C&&(l.current[g]=f[g],m=!0)}),m&&l.current.mount()}return h.useEffect(()=>{l.current&&JSON.stringify(l.current.value)!==JSON.stringify(f.value)&&l.current.updateValue(f.value??[])},[f.value]),h.useEffect(()=>{var g;(((g=l.current)==null?void 0:g.id)||f.id)&&l.current&&(l.current.id=f.id??"",l.current.mount())},[f.id]),h.useEffect(()=>(l.current=new D({parentHtmlContainer:T.current,listSlotHtmlComponent:P.current,...f}),()=>{var m;(m=l.current)==null||m.destroy()}),[]),ke(je,{children:[re("div",{ref:T}),re("div",{ref:P,className:"treeselect-after-list-slot",children:f.children})]})}});