var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return te(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function T(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(T)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=T,E=function(){re.postMessage(null)}}else E=function(){_(T,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=m({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=m({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(m({},In,{dataTransfer:0})),zn=On(m({},jn,{relatedTarget:0})),Bn=On(m({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(m({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(m({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(m({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(m({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(m({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(m({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(m({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(m({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var A=!1;if(vn){var br;if(vn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;A=br&&(!document.documentMode||9<document.documentMode)}function Cr(){hr&&(hr.detachEvent(`onpropertychange`,wr),gr=hr=null)}function wr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Dr(e,t){if(e===`click`)return vr(t)}function Or(e,t){if(e===`input`||e===`change`)return vr(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=vn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};vn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var j=qr(`animationend`),Jr=qr(`animationiteration`),Yr=qr(`animationstart`),Xr=qr(`transitionrun`),Zr=qr(`transitionstart`),Qr=qr(`transitioncancel`),$r=qr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),jt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=hi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=hi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=hi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ke(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=fe(null),Qi=null,$i=null;function ea(e,t,n){k(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,pe(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function P(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function F(e){return sa(Qi,e)}function oa(e,t){return Qi===null&&P(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,I={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new ca,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=D.S;D.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=fe(null);function Sa(){var e=xa.current;return e===null?K.pooledCache:e}function Ca(e,t){t===null?k(xa,xa.current):k(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:I._currentValue,pool:e}}var L=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,L}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,L):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===L||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case E:return t=Aa(t),f(e,t,n)}if(ce(t)||ae(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,oa(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Aa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,oa(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Aa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,oa(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Aa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,oa(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===L||t===Ea)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ga;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ha&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=fe(null),to=fe(0);function no(e,t){e=Wl,k(to,e),k(eo,t),Wl=e|t.baseLanes}function ro(){k(to,Wl),k(eo,eo.current)}function io(){Wl=to.current,pe(eo),pe(to)}var ao=fe(null),oo=null;function so(e){var t=e.alternate;k(po,po.current&1),k(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){k(po,po.current),k(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(k(po,po.current),k(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){k(po,po.current),k(ao,ao.current)}function fo(e){pe(ao),oo===e&&(oo=null),pe(po)}var po=fe(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,go=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function B(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,yo=!1,a=n(r,i),yo=!1,vo&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){D.H=zs;var t=z!==null&&z.next!==null;if(ho=0,go=z=R=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&aa(e)&&(ic=!0))}function Do(e,t,n,r){R=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,go=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(vo);return o}function Oo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function ko(){var e=bo!==0;return bo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}ho=0,go=z=R=null,vo=!1,xo=bo=0,So=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return go===null?R.memoizedState=go=e:go=go.next=e,go}function V(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=go===null?R.memoizedState:go.next;if(t!==null)go=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},go===null?R.memoizedState=go=e:go=go.next=e}return go}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=xo;return xo+=1,So===null&&(So=[]),e=ka(So,e,t),t=R,(go===null?t.memoizedState:go.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===C)return F(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(V(),z,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((ho&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(ic=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function H(e){var t=V(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=R,a=V(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((z||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||go!==null&&go.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||ho&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=No(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Go(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),yo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,zo(e,z,typeof r==`function`?r:Lo)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=R;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,R,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,R,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(V(),z,e)}function rs(e,t,n){if(t=zo(e,t,es)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===L?Ea:e}else r=t;t=V();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=V(),n=z;if(n!==null)return rs(t,n,e);V(),t=t.memoizedState,n=V();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=No(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return V().memoizedState}function cs(e,t,n,r){var i=Mo();R.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=V();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&wo(r,z.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(R.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=No(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=V().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),yo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||ho&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Ar(n,t)?n:eo.current===null?!(ho&42)||ho&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Ar(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ya(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return F(Qf)}function ks(){return V().memoizedState}function As(){return V().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===R||t!==null&&t===R}function Ls(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var zs={readContext:F,use:Fo,useCallback:B,useContext:B,useEffect:B,useImperativeHandle:B,useLayoutEffect:B,useInsertionEffect:B,useMemo:B,useReducer:B,useRef:B,useState:B,useDebugValue:B,useDeferredValue:B,useTransition:B,useSyncExternalStore:B,useId:B,useHostTransitionStatus:B,useFormState:B,useActionState:B,useOptimistic:B,useMemoCache:B,useCacheRefresh:B};zs.useEffectEvent=B;var Bs={readContext:F,use:Fo,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:F,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(yo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(yo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Mo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,R,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=Mo();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return Mo().memoizedState=js.bind(null,R)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:F,use:Fo,useCallback:ys,useContext:F,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Ro,useRef:ss,useState:function(){return Ro(Lo)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(V(),z.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(V(),z,e,t)},useMemoCache:Io,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:F,use:Fo,useCallback:ys,useContext:F,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:H,useRef:ss,useState:function(){return H(Lo)},useDebugValue:vs,useDeferredValue:function(e,t){var n=V();return z===null?xs(n,e,t):Ss(n,z.memoizedState,e,t)},useTransition:function(){var e=H(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=V();return z===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,z,e,t)},useMemoCache:Io,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ri(e)}function Ys(e){console.error(e)}function Xs(e){ri(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=ao.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return P(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!ic?(Ao(e,t,i),Ac(e,t,i)):(N&&s&&Li(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),ro(),uo(t)):(Ca(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:I._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),ro(),lo(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ia(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return P(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!ic?(Ao(e,t,i),Ac(e,t,i)):(N&&r&&Li(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return P(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!ic?(Ao(e,t,a),Ac(e,t,a)):(N&&r&&Li(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(P(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=F(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?F(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=F(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=F(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ji(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:wa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(po.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?so(t):uo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ia(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=wa():(l=I._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=po.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(po,o),ac(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,I,e.memoizedState.cache),Ji();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(po,po.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:ea(t,I,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,I,r),r!==o.cache&&ra(t,[I],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,P(t),a=F(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return P(t),r=F(I),e===null?(a=Sa(),a===null&&(a=K,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),ea(t,I,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,I,r),r!==a.cache&&ra(t,[I],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,I,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(I),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,qi(t))Gi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return ta(t.type),U(t),null;case 19:if(pe(po),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return k(po,po.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return U(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=po.current,k(po,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(I),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(I),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(po),null;case 4:return ye(),null;case 10:return ta(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&pe(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(I),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ri(t),t.tag){case 3:ta(I),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:pe(po);break;case 10:ta(t.type);break;case 22:case 23:fo(t),io(),e!==null&&pe(xa);break;case 24:ta(I)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=F(I),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return F(I).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?ft():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),at(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Pe(),10<a)){if(yu(r,t,Jl,!Vl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,jo(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=tt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){R=null,D.H=zs,t===L||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,Ti(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Pe()+500,Su(e,t)):Hl=tt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:jo(t);default:Vc(n,t),t=q=vi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,jo(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,ot(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Pe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=ui(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=et(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=et(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(j,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case j:case Jr:case Yr:l=Bn;break;case $r:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(A)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Dr;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in S)return;S[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=`popstate`;function ee(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function te(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ie(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ae(t)}return se(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ne(){return Math.random().toString(36).substring(2,10)}function re(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ie(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?oe(t):t,state:n,key:t&&t.key||r||ne(),unstable_mask:i}}function ae({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function oe(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function se(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ee(e)?e:ie(h.location,e,t);n&&n(r,e),l=u()+1;let d=re(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ee(e)?e:ie(h.location,e,t);n&&n(r,e),l=u();let i=re(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ce(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(w,d),c=e,()=>{i.removeEventListener(w,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ce(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ae(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function D(e,t,n=`/`){return O(e,t,n,!1)}function O(e,t,n,r){let i=Te((typeof t==`string`?oe(t):t).pathname||`/`,n);if(i==null)return null;let a=ue(e);fe(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=we(i);o=xe(a[e],t,r)}return o}function le(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ne([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,k=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(pe.test(t)?k:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ne([a,u.pathname]),pathnameBase:Pe(Ne([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ne([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?oe(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Fe(r),hash:Ie(i)}}function Oe(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=oe(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.join(`/`).replace(/\/\/+/g,`/`),Pe=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Fe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ie=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Le=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Re(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ze(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Be=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ve(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Be)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var He=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(He);var Ue=[`GET`,...He];new Set(Ue);var We=v.createContext(null);We.displayName=`DataRouter`;var Ge=v.createContext(null);Ge.displayName=`DataRouterState`;var Ke=v.createContext(!1);function qe(){return v.useContext(Ke)}var Je=v.createContext({isTransitioning:!1});Je.displayName=`ViewTransition`;var Ye=v.createContext(new Map);Ye.displayName=`Fetchers`;var Xe=v.createContext(null);Xe.displayName=`Await`;var Ze=v.createContext(null);Ze.displayName=`Navigation`;var Qe=v.createContext(null);Qe.displayName=`Location`;var $e=v.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=v.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Le(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){T(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(Ze),{hash:i,pathname:a,search:o}=mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ne([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return v.useContext(Qe)!=null}function ct(){return T(st(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){v.useContext(Ze).static||v.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=v.useContext($e);return e?Nt():ft()}function ft(){T(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(We),{basename:t,navigator:n}=v.useContext(Ze),{matches:r}=v.useContext($e),{pathname:i}=ct(),a=JSON.stringify(je(r)),o=v.useRef(!1);return ut(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(E(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ne([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function pt(){let{matches:e}=v.useContext($e),t=e[e.length-1];return t?t.params:{}}function mt(e,{relative:t}={}){let{matches:n}=v.useContext($e),{pathname:r}=ct(),i=JSON.stringify(je(n));return v.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ht(e,t){return gt(e,t)}function gt(e,t,n){T(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(Ze),{matches:i}=v.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ft(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?oe(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=D(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ct(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ne([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ne([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function _t(){let e=Mt(),t=Re(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var vt=v.createElement(_t,null),yt=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement($e.Provider,{value:this.props.routeContext},v.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(xt,{error:e},t):t}};yt.contextType=Ke;var bt=new WeakMap;function xt({children:e,error:t}){let{basename:n}=v.useContext(Ze);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=bt.get(t);if(r)throw r;let i=Ve(e.location,n);if(Be&&!bt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw bt.set(t,n),n}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function St({routeContext:e,match:t,children:n}){let r=v.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement($e.Provider,{value:e},n)}function Ct(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:ze(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||vt,o&&(s<0&&c===0?(Ft(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(St,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(yt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tt(e){let t=v.useContext(We);return T(t,wt(e)),t}function Et(e){let t=v.useContext(Ge);return T(t,wt(e)),t}function Dt(e){let t=v.useContext($e);return T(t,wt(e)),t}function Ot(e){let t=Dt(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function kt(){return Ot(`useRouteId`)}function At(){return Et(`useNavigation`).navigation}function jt(){let{matches:e,loaderData:t}=Et(`useMatches`);return v.useMemo(()=>e.map(e=>le(e,t)),[e,t])}function Mt(){let e=v.useContext(et),t=Et(`useRouteError`),n=Ot(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Nt(){let{router:e}=Tt(`useNavigate`),t=Ot(`useNavigate`),n=v.useRef(!1);return ut(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{E(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Pt={};function Ft(e,t,n){!t&&!Pt[e]&&(Pt[e]=!0,E(!1,n))}v.useOptimistic,v.memo(It);function It({routes:e,future:t,state:n,isStatic:r,onError:i}){return gt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Lt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Rt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){T(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=oe(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=v.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(Ze.Provider,{value:c},v.createElement(Qe.Provider,{children:t,value:h}))}function zt({children:e,location:t}){return ht(Bt(e),t)}v.Component;function Bt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Bt(e.props.children,i));return}T(e.type===Lt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Bt(e.props.children,i)),n.push(a)}),n}var Vt=`get`,Ht=`application/x-www-form-urlencoded`;function Ut(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Wt(e){return Ut(e)&&e.tagName.toLowerCase()===`button`}function Gt(e){return Ut(e)&&e.tagName.toLowerCase()===`form`}function Kt(e){return Ut(e)&&e.tagName.toLowerCase()===`input`}function qt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jt(e,t){return e.button===0&&(!t||t===`_self`)&&!qt(e)}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var Zt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Qt(e){return e!=null&&!Zt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`),null):e}function $t(e,t){let n,r,i,a,o;if(Gt(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`enctype`))||Ht,a=new FormData(e)}else if(Wt(e)||Kt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Vt,i=Qt(e.getAttribute(`formenctype`))||Qt(o.getAttribute(`enctype`))||Ht,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Ut(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Vt,r=null,i=Ht,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var en={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},tn=/[&><\u2028\u2029]/g;function nn(e){return e.replace(tn,e=>en[e])}function rn(e,t){if(e===!1||e==null)throw Error(t)}function an(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function on(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sn(e){return e!=null&&typeof e.page==`string`}function cn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function ln(e,t,n){return mn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await on(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(cn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function un(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function dn(e,t,{includeHydrateFallback:n}={}){return fn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function fn(e){return[...new Set(e)]}function pn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function mn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!sn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(pn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function hn(){let e=v.useContext(We);return rn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function gn(){let e=v.useContext(Ge);return rn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var _n=v.createContext(void 0);_n.displayName=`FrameworkContext`;function vn(){let e=v.useContext(_n);return rn(e,`You must render this element inside a <HydratedRouter> element`),e}function yn(e,t){let n=v.useContext(_n),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:bn(s,p),onBlur:bn(c,m),onMouseEnter:bn(l,p),onMouseLeave:bn(u,m),onTouchStart:bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xn({page:e,...t}){let n=qe(),{router:r}=hn(),i=v.useMemo(()=>D(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?v.createElement(Cn,{page:e,matches:i,...t}):v.createElement(wn,{page:e,matches:i,...t}):null}function Sn(e){let{manifest:t,routeModules:n}=vn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return ln(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Cn({page:e,matches:t,...n}){let r=ct(),{future:i}=vn(),{basename:a}=hn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=an(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function wn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=vn(),{basename:s}=hn(),{loaderData:c,matches:l}=gn(),u=v.useMemo(()=>un(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>un(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=an(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>dn(d,a),[d,a]),m=Sn(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Tn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var En=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{En&&(window.__reactRouterVersion=`7.14.0`)}catch{}function Dn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=v.useRef();i.current??=te({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Rt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function On({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=v.useState({action:n.action,location:n.location}),o=v.useCallback(e=>{r===!1?a(e):v.startTransition(()=>a(e))},[r]);return v.useLayoutEffect(()=>n.listen(o),[n,o]),v.createElement(Rt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}On.displayName=`unstable_HistoryRouter`;var kn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,An=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=v.useContext(Ze),y=typeof l==`string`&&kn.test(l),b=Ve(l,h);l=b.to;let x=ot(l,{relative:r}),S=ct(),C=null;if(o){let e=Me(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ne([h,e.pathname])),C=g.createHref(e)}let[w,ee,te]=yn(n,p),T=Ln(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||T(t)}let ne=!(b.isExternal||i),re=v.createElement(`a`,{...p,...te,href:(ne?C:void 0)||b.absoluteURL||x,onClick:ne?E:e,ref:Tn(m,ee),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?v.createElement(v.Fragment,null,re,v.createElement(xn,{page:x})):re});An.displayName=`Link`;var jn=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=mt(a,{relative:c.relative}),d=ct(),f=v.useContext(Ge),{navigator:p,basename:m}=v.useContext(Ze),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Te(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,ee;ee=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return v.createElement(An,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});jn.displayName=`NavLink`;var Mn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Vt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=v.useContext(Ze),g=Bn(),_=Vn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&kn.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=v.useContext(_n),{basename:i}=v.useContext(Ze),a=ct(),o=jt();Gn({getKey:e,storageKey:t});let s=v.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return v.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${nn(JSON.stringify(t||Hn))}, ${nn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=v.useContext(We);return T(t,Pn(e)),t}function In(e){let t=v.useContext(Ge);return T(t,Pn(e)),t}function Ln(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=dt(),d=ct(),f=mt(e,{relative:o});return v.useCallback(p=>{if(Jt(p,t)){p.preventDefault();let t=n===void 0?ae(d)===ae(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=v.useContext(Ze),n=kt(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=$t(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=v.useContext(Ze),r=v.useContext($e);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...mt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ne([n,a.pathname])),ae(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=v.useContext(Ze),o=ct(),s=jt(),c=At();v.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(v.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(v.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),v.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),v.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};v.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=v.useContext(Je);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Jn=`/assets/appointment_img-DzbZlMsi.png`,Yn=`/assets/header_img-DhAi3lLA.png`,Xn=`/assets/group_profiles-BCL6AVF5.png`,Zn=`/assets/profile_pic-D58ifz71.png`,Qn=`/assets/contact_image-IJu_19v_.png`,$n=`/assets/about_image-MG9zrc7b.png`,er=`/assets/logo-BNCDj_dh.svg`,tr=`data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.57692%206.63312L1.60393%200.347811C1.23701%20-0.115937%200.642112%20-0.115937%200.275191%200.347811C-0.0917303%200.811558%20-0.0917303%201.56344%200.275191%202.02719L5.91255%209.15219C6.27947%209.61594%206.87437%209.61594%207.24129%209.15219L12.8787%202.02719C13.2456%201.56344%2013.2456%200.811558%2012.8787%200.347811C12.5117%20-0.115937%2011.9168%20-0.115937%2011.5499%200.347811L6.57692%206.63312Z'%20fill='%237C7C7C'/%3e%3cmask%20id='mask0_5479_343'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='14'%20height='10'%3e%3cpath%20d='M6.57692%206.63312L1.60393%200.347811C1.23701%20-0.115937%200.642112%20-0.115937%200.275191%200.347811C-0.0917303%200.811558%20-0.0917303%201.56344%200.275191%202.02719L5.91255%209.15219C6.27947%209.61594%206.87437%209.61594%207.24129%209.15219L12.8787%202.02719C13.2456%201.56344%2013.2456%200.811558%2012.8787%200.347811C12.5117%20-0.115937%2011.9168%20-0.115937%2011.5499%200.347811L6.57692%206.63312Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5479_343)'%3e%3c/g%3e%3c/svg%3e`,nr=`data:image/svg+xml,%3csvg%20width='37'%20height='27'%20viewBox='0%200%2037%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='17'%20y='24'%20width='20'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20x='7'%20y='12'%20width='30'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20width='37'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3c/svg%3e`,rr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO3cy27TQBSA4RPKRT6T9iG4qUW8CEgUWHQB7Chh0cwE3iAPCuIiqOAlsNG4GFqpFnGaNudk/k+aXRY5+jXjyI4sAgAAAAAAAAAAAAAA1mB+XXaO7sr29L6IjMSt+TUZx912ljyTSyG9khC/S0jNn/VFqvhMvKlmzyXEr//miN8kTF+KvxipPhWjW7VonIgXGie9c4T4QpwYSUjH5wzhK4r2xujWsY9jOF8v+ofwEUX/G+Nkbc/uiXk76c4CQexG0QVj5HXr/W1xYCQaP7qMogNiaPrg48jKdPZYQvzlKooOiJFn0/hIXNH0elCUcTxa33eNh26+68ZH0VJieIiipcWwHEVLjWExipYew1IUJYadKEoMO1GUGHaiKDHsRFFi2ImixLATRYlhJ4oSw04UJYadKEoMO1GUGIYeGKV60GctPBArYKc0a7s/VhRdWRRiGIpSszPsRKmJYSdKTYzLpIN+2hLEWIyGKPZiNESxF6Mhir0YDVEuHmPCrRMrdIkbhRb+YrSR9AJ3bYliKEaHKCuyyucZyvFlJ0aHKEu6zCd9yk6xE6NDlAVd5TNwZafYidEhSo91/jtE2Sl2YnSIYihGp/golmJI6VEsxig2iuUYxUXxEKOYKFV6uvEvn6mm++LDwVb7fkVPMZaL8rmd1bz89k7PW18HHF8u3igXZg/dxhgaZfxuT+yb3xSNP90cU8sfXz/aWV3Q9Kb3YughxpkoPTsl7yJXcpSzO+WTVOmJeFNN99sL+Omd4S7GX29vyDg9OHnVuIdfJH0OttoZ8ix5JgAAAAAAAAAAAAAAIFftNzm+PJEnw4B9AAAAAElFTkSuQmCC`,ir=`data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.9%204.4H18.7V14.3H4.4V16.5C4.40085%2016.7915%204.51701%2017.0708%204.72312%2017.2769C4.92923%2017.483%205.20852%2017.5992%205.5%2017.6H17.6L22%2022V5.5C21.9992%205.20852%2021.883%204.92923%2021.6769%204.72312C21.4708%204.51701%2021.1915%204.40085%2020.9%204.4ZM16.5%2011V1.1C16.4992%200.808523%2016.383%200.529227%2016.1769%200.323121C15.9708%200.117015%2015.6915%200.00084938%2015.4%200H1.1C0.808523%200.00084938%200.529227%200.117015%200.323121%200.323121C0.117015%200.529227%200.00084938%200.808523%200%201.1V16.5L4.4%2012.1H15.4C15.6915%2012.0992%2015.9708%2011.983%2016.1769%2011.7769C16.383%2011.5708%2016.4992%2011.2915%2016.5%2011Z'%20fill='%23595959'/%3e%3c/svg%3e`,ar=`data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.4905%201.50034C9.1861%201.75975%209.03389%201.88948%208.87133%201.99843C8.4987%202.24818%208.08021%202.42152%207.64013%202.5084C7.44814%202.54632%207.24879%202.56222%206.8501%202.59403C5.84838%202.67398%205.3475%202.71394%204.92964%202.86154C3.96314%203.20292%203.20292%203.96314%202.86154%204.92964C2.71394%205.3475%202.67398%205.84838%202.59403%206.8501C2.56222%207.24879%202.54632%207.44814%202.5084%207.64013C2.42152%208.08021%202.24818%208.4987%201.99843%208.87133C1.88948%209.03389%201.75977%209.18609%201.50034%209.4905C0.848541%2010.2554%200.522628%2010.6378%200.331528%2011.0376C-0.110509%2011.9625%20-0.110509%2013.0375%200.331528%2013.9624C0.522641%2014.3623%200.848541%2014.7446%201.50034%2015.5095C1.75973%2015.8139%201.88948%2015.9661%201.99843%2016.1286C2.24818%2016.5013%202.42152%2016.9198%202.5084%2017.3599C2.54632%2017.5519%202.56222%2017.7513%202.59403%2018.1499C2.67398%2019.1516%202.71394%2019.6525%202.86154%2020.0704C3.20292%2021.0369%203.96314%2021.7971%204.92964%2022.1385C5.3475%2022.286%205.84838%2022.326%206.8501%2022.406C7.24879%2022.4378%207.44814%2022.4538%207.64013%2022.4916C8.08021%2022.5785%208.4987%2022.7519%208.87133%2023.0016C9.03389%2023.1105%209.18609%2023.2403%209.4905%2023.4996C10.2554%2024.1515%2010.6378%2024.4774%2011.0376%2024.6685C11.9625%2025.1105%2013.0375%2025.1105%2013.9624%2024.6685C14.3623%2024.4774%2014.7446%2024.1515%2015.5095%2023.4996C15.8139%2023.2403%2015.9661%2023.1105%2016.1286%2023.0016C16.5013%2022.7519%2016.9198%2022.5785%2017.3599%2022.4916C17.5519%2022.4538%2017.7513%2022.4378%2018.1499%2022.406C19.1516%2022.326%2019.6525%2022.286%2020.0704%2022.1385C21.0369%2021.7971%2021.7971%2021.0369%2022.1385%2020.0704C22.286%2019.6525%2022.326%2019.1516%2022.406%2018.1499C22.4378%2017.7513%2022.4538%2017.5519%2022.4916%2017.3599C22.5785%2016.9198%2022.7519%2016.5013%2023.0016%2016.1286C23.1105%2015.9661%2023.2403%2015.8139%2023.4996%2015.5095C24.1515%2014.7446%2024.4774%2014.3623%2024.6685%2013.9624C25.1105%2013.0375%2025.1105%2011.9625%2024.6685%2011.0376C24.4774%2010.6378%2024.1515%2010.2554%2023.4996%209.4905C23.2403%209.18609%2023.1105%209.03389%2023.0016%208.87133C22.7519%208.4987%2022.5785%208.08021%2022.4916%207.64013C22.4538%207.44814%2022.4378%207.24879%2022.406%206.8501C22.326%205.84838%2022.286%205.3475%2022.1385%204.92964C21.7971%203.96314%2021.0369%203.20292%2020.0704%202.86154C19.6525%202.71394%2019.1516%202.67398%2018.1499%202.59403C17.7513%202.56222%2017.5519%202.54632%2017.3599%202.5084C16.9198%202.42152%2016.5013%202.24818%2016.1286%201.99843C15.9661%201.88948%2015.8139%201.75977%2015.5095%201.50034C14.7446%200.848541%2014.3623%200.522641%2013.9624%200.331528C13.0375%20-0.110509%2011.9625%20-0.110509%2011.0376%200.331528C10.6378%200.522628%2010.2554%200.848541%209.4905%201.50034ZM17.9669%209.82893C18.3641%209.43163%2018.3641%208.7875%2017.9669%208.3902C17.5696%207.99292%2016.9254%207.99292%2016.5281%208.3902L10.4654%2014.453L8.47183%2012.4595C8.07454%2012.0623%207.4304%2012.0623%207.03312%2012.4595C6.63583%2012.8568%206.63583%2013.5009%207.03312%2013.8983L9.74598%2016.6111C10.1433%2017.0084%2010.7874%2017.0084%2011.1848%2016.6111L17.9669%209.82893Z'%20fill='%230016E1'/%3e%3c/svg%3e`,or=`data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%206H15M15%206L10.8378%201M15%206L10.8378%2011'%20stroke='%23595959'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e`,sr=`data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.5%200C3.80559%200%200%203.80554%200%208.5C0%2013.1944%203.80559%2017%208.5%2017C13.1945%2017%2017%2013.1944%2017%208.5C17%203.80554%2013.1945%200%208.5%200ZM8.5%2015.3C4.75049%2015.3%201.7%2012.2495%201.7%208.5C1.7%204.75049%204.75049%201.7%208.5%201.7C12.2496%201.7%2015.3%204.75049%2015.3%208.5C15.3%2012.2495%2012.2496%2015.3%208.5%2015.3ZM9.56436%205.1C9.56436%205.71628%209.11565%206.1625%208.50864%206.1625C7.87706%206.1625%207.43936%205.71628%207.43936%205.08821C7.43936%204.48456%207.88891%204.0375%208.50864%204.0375C9.11565%204.0375%209.56436%204.48456%209.56436%205.1ZM7.65186%207.65H9.35186V12.75H7.65186V7.65Z'%20fill='black'/%3e%3c/svg%3e`,cr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAUlEQVR4nO3dv2/TQBjG8TBAkTrAWgYqlU6dqFQJBgpDkRi6UHmlcgd+bZQytIDub/+iA5OkwXLskPge+55HuqWVkvfej+4uTRp7MnEcx3Ecx3Ecx3EcZ0QB7gMvgQ/ADRAyGzfAe+A49iI1xi7wTaApQWRcxZ6kwngEfBdoQhAbsSc7fWPcAT4LTD6Ijk+xR32CPBGYdBAfe32CvBaYcBAfJ32CnAlMOIiPsz5BCoEJB/FRGITkCAYhfeMNQvpmG4T0DTYI6ZtqENI30iACzQsGSd+wYJDNfR5xUQ2ld5+z/MPwAngwV9fD6mep68oSpATu1dR2FzgXqC8rkLIOQwwlG5CyCUMIJQuQsg2GCMroQcouGAIoowYpV8FIjDJakPJ/MBZQ3hlEACMRyuhWSLlOjAQoowIpN4HRM8poQM5jw1o09Kjh90ctH2OTB/0oQMplK2OukcWS+to+1qZWyuBByg4YjROeqy8lyqBBLpf9Kz//bjFtQNqibAFfDDJr2nFHjNABpO259Mogs4Y97YgROoIsRQEODTJr1mlHjLACSCNKrMEgs0b9BB7XfFWu6WXpKiB/UW6dV/G5qxp8qC+gnFZbR9zPv676KqbFi47L6nuRh9Vzrhtj8K+y1jphxOszCAbxCsErZBpvWWJbAj5DDIIPdbxChrIlIF7f2qM+YcTrMwgG8QrBK2Qab1liWwI+QwyCD3W8QoayJSBe39qjPmHE6zMIBvEKwStkGm9ZYlsCPkMMgg91vEKGsiUgXt/aoz5hxOszCOMHUbiQciG+Qt7mdqnxQhzkJLeL8RfiIHt9364i3lHHINT24GOvt6uoUHYSX1KvEF0h/d/QZeGWR/E2Pwbhdw+uFr94lAJlq7ohVrwx1nWGK+S6mvuL2ItJrgEOGpp0kLq+7IJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtALsN7y5uJ+6vuwCbAM/ajDiz7ZT15dlgOc1IM9S15V1+POp5Ztq7Kaux3EcZ5JPfgHNTOp1Sby6QAAAAABJRU5ErkJggg==`,lr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAjCAYAAADokDbBAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiCSURBVHgB7Vp9bFXlGf8959x7Wwq1hSJSioJSN8yckC3IFoPDICqZW7aEJrO33UqLxMxt7iPLnCwbg+j+kLiMzSmU0kJp6ew+nGMyF1w6LS4sYlgWdaDIhzjxKlVaC70f57z+3nN767nnnttCb4Vb9ZfcnPf74/c+7/s+z/NewThAXZ0qDFgotxK4HAH0N7fKXuQhAshjrAyrHyhgHhK4htErDQNFYmMDwx8dMpVSQijkCFvhfhEI2FLOjZ0HjAmZ9V9WxUYJZiobn2d08cpalIbDqqatTXrxEULOZDaEVb0Av4CNKan2lMJLBX0fjDBRWhPIU+QumYKLSd60tCSl+cwdhsDikrzCPvazveeZtMcOYR/yFDmTaSViMM1QeiJPubeQO+IJzDXPILLlMenDOIAvmVoVQRzzTRtXw0QZJS1BUYvYBg5ZBg5s2yYnhxowQ5k3jSBQPgnTeRuXpJKMiXhj40Ykbq9Bhbsoezrd1CQ936tSE/pCmMdzt9QWHGxul1cSAUQTxSgJu9oJBvFuS4u8U1WlJk00MdXdlmmht6lTetasUcbRQ1jE+Dy2FTSBF7jmzzZ3yps4SzRUqSlWIT5nKMzlBANKcIQ75b+bW+XFbHXEHVmxQl0sMfyMwTAzSrPUsfnrNgVf27RdXidhdyt9Zo4AElNp2+gL2XjDk/UkF+peMdDOLT3dSVF4qKldvllfrWznNk8f8IbNbXJXQ7WqZWSbJ28rz9Sn2daP2cactDxBlHkP2UH8XC9GtnHW1qrLOEY9n+X8hTIKCPaSgO83b5dnvFlGKrCqRpUbcezmgO4chshUnevjFj6BscFCTvSRISJzABe1ip9GL5FOnkIB5/VdM47HVt2qivzq3x5WC4IWdjNYDT8ik50spKTu4sVb7c0aIpOrtpMFr8G5T0CQGybxNxVjgyKvJPtgkVWCP3gT6+vVDM7lz6x/5Qj1dQcX8fMgCb3One6QWR9Wy9jQZzAaGBiPuMUtWXWLVaEMoJEclPuU7aXE9FCyvVeD3r3rFy9WQ/dOMmBjiQ8pNGTwax66T/MrPICncUUWMP0m5dqSOi9DFHTngu1sN+4qp88pE1nA/AGedcf4fYsN9mD0eIdtPErT89882y7hllwFH5LIzF2c4A5tqRkVuIF1lnnmEefl9QAnsDlk4bQEyZGNB5le7Crz2coKfKUL+L2OOGQaJi7xUQx7SuK4+5edcsadyJt+uhnjVgGyaj8cVKQ3htWdnfKuO52H+zS/8uz7CMn/9mWVeHzNGrH1bYxRggTWUhPYOTTe21SHaeBJBmd4xnhtXdjZjfu4eF+H57jimHY3t/Eiw5Cy0rqyRs1m+lpXsSBrfQmDZKYGHfUZV9mpEO5raFBT3Im8CU/wpu3cukOeH+w01zNTK+cbm9tkpyZSx1Pf0YDEHXLHW3bI/yiG6/3Kcid8QX85h0U+2R0uIh3EDPzOW4h1r09t9ZT59xw/DRmd8fbDABqo/jxBke9IGOhy65hjBTIXxxjBsn0X948k9CfMSRMM6pBXaHWQojTDp9a1VL/K0hunJGZi6qWTnXYjDplWEO3cuj9kg7N9ChdzeZZzjZZTbTi88ja1LhrAI62t0j84IMldNj9YcCcd5SUb4TDTyOT2LpMofaQ+M2DenTg7FIUEE3TA2eZaiQ3auIHBAyNUvJwS2sQD+U88/yYiD2H7S6YmJ/OMVyiyk2pOLjDiQRQ4gVTKwx1yRBVgAbf8few4q9nl6HGCpQUKv0IeIpQ9q9ibQNYHSEAMOcI0k56sNNt8yxbHobCaN/Y6M4ql7K2Ot+yt4jNGkt5wx1fVPTH4qEYXEHYgUzJ55s/keGdmlAXe5HPIa5aPh4JH2985sYMYsUOWPZ1U5XwdHdz2A/z8Rf/qa9QnOZDWQR0zDfFJWMhD2W8gRnE0f05S2+LYDUzxrjrvgVdnXIXDx19GVJubaZkK3U1tsg7nAGeb89aqom3+Lbc2n8KW7XKA5Kz1q8zBTPZNF1waKkIZLgBUHIXuuH4FoAq0zs/MZPperYaRyGcz8gQNdVVqWH/BsmWqINMCAmZZfG+ZU4F7rgirPez2UWp6L3Fgp+giK6Ur7ht+zl7a8yc4wgzSWHZC3MTmumr1gErglBnAHHqN/jomHuMRICY6eXP/Riw6lAWljP+UA/qUT9GjMyvx1GC4kb/rPPmzAkE8wSPifnLzDPkYoHFjcD66zTk0K25muzdzQW7sAg7rCl5JLBfteqIapNdReFJq9dmPA+3SihvYRy3AyPJAsYRuuiUpzYzlK0nm+XDyzubQ12vD1RHFLAtIojekjIOggV1xG9pPeZWnjHb8tNKosJWJM0pbPAGEVKpdhVPu8qN3Uyhs0gq8FcV+xo5iHEGbr/Zx/DYVf7hVItxl3yH52d6XyCe0Khgart3RkSnotvuwWgdbOuUEFXcdHg+vsVraIvx9saXLuWSHQHt+N0mu5SROY5RwyKSiq73Gf1Pa3TTcQID/8/OjmOAW97tMY7u0cb+sYIHjWapaiYSv/T/mICHbOM7XvOmO1Ck8blhYSj/AC351aSl1qBh17aTjoneYPrTg/IeeqbXGhPdfDoZuOL6pmJMLUaGNfpI7nzlTWaWQ3yhrRngE/Ysa7h6akZFsndxRpSqsAizngT2fq1TAtvp5Vh6xBLtmVWL/yZMI9vcknQtpE1U4oE0+bzovkpu8aQEbxzbReeH3bOHAwKeDgrdjFmol6XEPcPyvGjb+8fIJdHd1yVk8FSvh2/9c8nAj56FVw4vYl6WFjfFjbOCp/hhe9HrF8tyqzo5sZBoBXN24NenROt8Yn37yYRDL2TgcPT50ZBrGhbsIP3RkXkjk9V8Kzwm0s3mG/pO3cS7vRzlh3JJJE/egZeJeem26YwE8N5yW8THGId4D27wquLi5ZfcAAAAASUVORK5CYII=`,ur=`/assets/razorpay_logo-C6aP63br.png`,dr=`data:image/svg+xml,%3csvg%20width='127'%20height='126'%20viewBox='0%200%20127%20126'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='63.5668'%20cy='62.8325'%20r='62.8325'%20fill='url(%23paint0_linear_4741_2341)'/%3e%3cpath%20d='M78.7272%2046.3258C67.4154%2046.3258%2042.9479%2043.3848%2042.9479%2043.3848C42.9479%2043.3848%2038.0556%2048.7664%2035.2276%2051.5943C29.9591%2056.8628%2030.4173%2063.5311%2029.7188%2071.8481C30.5869%2094.9638%2045.3856%20113.382%2063.5722%20113.382C81.6542%20113.382%2096.3935%2095.1703%2097.4087%2072.2327C96.4132%2061.9673%2089.5017%2046.3258%2078.7272%2046.3258Z'%20fill='%23F7DECE'/%3e%3cpath%20d='M63.5737%20102.069C56.9364%20102.069%2053.4637%2098.7887%2053.0904%2098.4126C52.5564%2097.8861%2052.2534%2097.169%2052.2481%2096.4191C52.2428%2095.6692%2052.5356%2094.9479%2053.0621%2094.4138C53.5887%2093.8798%2054.3057%2093.5768%2055.0557%2093.5715C55.8056%2093.5662%2056.5269%2093.8591%2057.0609%2094.3856C57.2051%2094.5185%2059.3402%2096.4132%2063.5737%2096.4132C67.8693%2096.4132%2070.0016%2094.4619%2070.0921%2094.3799C70.6352%2093.8711%2071.3557%2093.5949%2072.0997%2093.6102C72.8437%2093.6256%2073.5522%2093.9312%2074.0739%2094.4619C74.5913%2094.9903%2074.8796%2095.7012%2074.8764%2096.4407C74.8733%2097.1802%2074.5788%2097.8887%2074.0569%2098.4126C73.6836%2098.7887%2070.2109%20102.069%2063.5737%20102.069ZM66.4016%2087.9293H60.7457C59.9957%2087.9293%2059.2764%2087.6314%2058.746%2087.1011C58.2157%2086.5707%2057.9177%2085.8514%2057.9177%2085.1014C57.9177%2084.3514%2058.2157%2083.6321%2058.746%2083.1017C59.2764%2082.5714%2059.9957%2082.2734%2060.7457%2082.2734H66.4016C67.1516%2082.2734%2067.8709%2082.5714%2068.4013%2083.1017C68.9316%2083.6321%2069.2296%2084.3514%2069.2296%2085.1014C69.2296%2085.8514%2068.9316%2086.5707%2068.4013%2087.1011C67.8709%2087.6314%2067.1516%2087.9293%2066.4016%2087.9293Z'%20fill='%23C1694F'/%3e%3cpath%20d='M49.4334%2076.6165C48.6834%2076.6165%2047.9641%2076.3186%2047.4338%2075.7882C46.9034%2075.2579%2046.6055%2074.5386%2046.6055%2073.7886V68.1326C46.6055%2067.3826%2046.9034%2066.6633%2047.4338%2066.133C47.9641%2065.6026%2048.6834%2065.3047%2049.4334%2065.3047C50.1834%2065.3047%2050.9027%2065.6026%2051.4331%2066.133C51.9634%2066.6633%2052.2614%2067.3826%2052.2614%2068.1326V73.7886C52.2614%2074.5386%2051.9634%2075.2579%2051.4331%2075.7882C50.9027%2076.3186%2050.1834%2076.6165%2049.4334%2076.6165ZM77.713%2076.6165C76.963%2076.6165%2076.2437%2076.3186%2075.7133%2075.7882C75.183%2075.2579%2074.885%2074.5386%2074.885%2073.7886V68.1326C74.885%2067.3826%2075.183%2066.6633%2075.7133%2066.133C76.2437%2065.6026%2076.963%2065.3047%2077.713%2065.3047C78.463%2065.3047%2079.1823%2065.6026%2079.7126%2066.133C80.243%2066.6633%2080.5409%2067.3826%2080.5409%2068.1326V73.7886C80.5409%2074.5386%2080.243%2075.2579%2079.7126%2075.7882C79.1823%2076.3186%2078.463%2076.6165%2077.713%2076.6165Z'%20fill='%23662113'/%3e%3cpath%20d='M63.5667%2023.1211C86.77%2023.1211%20101.266%2040.2415%20101.266%2054.5086C101.266%2068.7728%2098.3646%2074.4852%2095.466%2068.7728C92.5645%2063.0688%2089.6659%2054.534%2089.6659%2054.534C89.6659%2054.534%2079.8302%2060.9054%2072.1241%2051.6523C72.1241%2051.6523%2075.1698%2068.7728%2057.7665%2051.6523C57.7665%2051.6523%2060.668%2063.0688%2043.2676%2048.8018C43.2676%2048.8018%2034.566%2054.5086%2031.6673%2068.7728C30.8642%2072.7347%2025.8672%2068.7728%2025.8672%2054.5086C25.8644%2040.2415%2037.4646%2023.1211%2063.5667%2023.1211Z'%20fill='%23577CFF'/%3e%3ccircle%20cx='79.7236'%20cy='87.747'%20r='1.07713'%20fill='%23FF9494'/%3e%3ccircle%20cx='81.3393'%20cy='90.4409'%20r='0.538564'%20fill='%23FF9494'/%3e%3ccircle%20cx='79.1841'%20cy='93.6723'%20r='1.61569'%20fill='%23FF9494'/%3e%3ccircle%20cx='84.0322'%20cy='94.2099'%20r='1.07713'%20fill='%23FF9494'/%3e%3ccircle%20cx='86.7231'%20cy='90.4399'%20r='1.61569'%20fill='%23FF9494'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4741_2341'%20x1='63.5668'%20y1='0'%20x2='63.5668'%20y2='125.665'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23AFC1DC'/%3e%3cstop%20offset='1'%20stop-color='%23E2E5ED'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,fr=`/assets/Gastroenterologist-CTgzRFeY.svg`,pr=`data:image/svg+xml,%3csvg%20width='126'%20height='126'%20viewBox='0%200%20126%20126'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='62.8325'%20cy='62.8325'%20r='62.8325'%20fill='url(%23paint0_linear_4741_2362)'/%3e%3cpath%20d='M47.2477%2048.2327L47.7865%2048.1865C47.9905%2048.1634%2048.1752%2048.0903%2048.3292%2047.9825L48.3253%2047.9864C48.8411%2049.7646%2049.4723%2051.6351%2050.2613%2053.5942C51.2736%2056.1575%2052.2704%2058.2628%2053.3866%2060.295L53.2326%2059.9871C53.1402%2061.3881%2053.0286%2062.8275%2052.8824%2064.2208C52.8131%2065.0791%2052.6437%2065.8796%2052.3859%2066.634L52.4051%2066.5647C52.3589%2066.584%2052.2935%2074.5703%2052.2935%2074.5703C52.2973%2079.7778%2055.9037%2084.1385%2060.7532%2085.2971L60.8302%2085.3124C61.0496%2084.7544%2061.5807%2084.3656%2062.2043%2084.3656H64.4135C65.0332%2084.3733%2065.5643%2084.7582%2065.7837%2085.3009L65.7875%2085.3124C70.7256%2084.1501%2074.3473%2079.7894%2074.3666%2074.578C74.3666%2074.578%2074.2319%2066.6225%2074.1626%2066.5686C73.9509%2065.895%2073.7816%2065.1022%2073.693%2064.2862L73.6892%2064.2285C73.5545%2062.8275%2073.466%2061.4227%2073.339%2059.9948C74.2896%2058.2782%2075.2865%2056.1767%2076.164%2054.0098L76.3103%2053.6018C77.0993%2051.6428%2077.7112%2049.7761%2078.2462%2047.9941C78.3963%2048.1019%2078.5811%2048.175%2078.7812%2048.1981H78.7851L79.3277%2048.2443C79.982%2048.3135%2080.5594%2047.7747%2080.6133%2046.9395L81.1983%2039.5074C81.1983%2039.5035%2081.1983%2039.4997%2081.1983%2039.4997C81.1983%2038.8723%2080.7287%2038.3566%2080.1245%2038.2796H80.1168H80.0513C80.2014%2037.1981%2080.2861%2035.9511%2080.2861%2034.6848C80.2861%2031.9213%2079.8781%2029.2502%2079.1199%2026.7369L79.1699%2026.9332C76.9492%2022.0606%2072.5461%2018.5235%2067.2424%2017.5344L67.1423%2017.519C66.0031%2017.2842%2064.6752%2017.1264%2063.3204%2017.0879H63.2858H63.2396C61.8579%2017.1148%2060.53%2017.2688%2059.2445%2017.5421L59.3831%2017.519C53.987%2018.5351%2049.5916%2022.0721%2047.3978%2026.8293L47.3554%2026.9332C46.6395%2029.2425%2046.2277%2031.8982%2046.2277%2034.6463C46.2277%2035.928%2046.3162%2037.1904%2046.4894%2038.422L46.474%2038.2796C45.8621%2038.3489%2045.3887%2038.8608%2045.3887%2039.4843V39.5112L45.9737%2046.9433C46.0276%2047.7978%2046.6126%2048.3135%2047.2438%2048.2443L47.2477%2048.2327Z'%20fill='%23F7DECE'/%3e%3cpath%20d='M104.547%2097.4219C104.278%2085.7214%20103.108%2083.0734%20102.476%2081.2798C102.226%2080.5601%20102.022%2075.6952%2093.9859%2072.5391C89.0594%2070.5993%2082.7011%2070.5608%2077.3204%2068.2861V74.6136C77.3089%2081.4184%2072.4362%2087.08%2065.9894%2088.3155L65.9009%2088.3309C65.7816%2089.0314%2065.1812%2089.5548%2064.4615%2089.5625H64.3922V94.3351C64.3922%2098.9999%2068.1717%20102.779%2072.8365%20102.779C77.5013%20102.779%2081.2809%2098.9999%2081.2809%2094.3351V91.002C78.9408%2090.6517%2077.1665%2088.658%2077.1665%2086.2487C77.1665%2083.5968%2079.318%2081.4453%2081.9698%2081.4453C84.6217%2081.4453%2086.7732%2083.5968%2086.7732%2086.2487C86.7732%2088.3501%2085.4222%2090.136%2083.544%2090.7903L83.5094%2090.8019V94.3351V94.516C83.5094%20100.412%2078.7291%20105.193%2072.8327%20105.193C66.9363%20105.193%2062.156%20100.412%2062.156%2094.516C62.156%2094.4505%2062.156%2094.389%2062.156%2094.3235V94.3312V89.5163C61.4709%2089.4701%2060.9167%2088.9544%2060.8089%2088.2924V88.2847C54.3044%2087.0184%2049.4548%2081.376%2049.4394%2074.5982V68.2207C44.0357%2070.5416%2037.6389%2070.5877%2032.6854%2072.5314C24.6259%2075.6836%2024.4412%2080.537%2024.1949%2081.2683C23.5791%2083.0695%2022.3936%2085.706%2022.1242%2097.4142C22.078%2098.9537%2022.1242%20101.313%2026.7659%20103.376C36.873%20107.34%2049.8936%20108.572%2062.7295%20109.457H63.9611C76.8239%20108.58%2089.8253%20107.352%2099.9247%20103.376C104.547%20101.325%20104.589%2098.9768%20104.547%2097.4219ZM48.0423%2092.6493H43.2466V97.4642H39.8212V92.6647H35.0255V89.2392H39.8212V84.4436H43.2466V89.2392H48.0423V92.6493Z'%20fill='%23577CFF'/%3e%3cpath%20d='M84.5673%2086.2074C84.5673%2084.7756%2083.4088%2083.6133%2081.977%2083.6133C80.5452%2083.6133%2079.3867%2084.7718%2079.3867%2086.2036C79.3867%2087.6353%2080.5452%2088.7938%2081.977%2088.7938C83.4049%2088.7938%2084.5634%2087.6353%2084.5673%2086.2074Z'%20fill='black'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4741_2362'%20x1='62.8325'%20y1='0'%20x2='62.8325'%20y2='125.665'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23AFC1DC'/%3e%3cstop%20offset='1'%20stop-color='%23E2E5ED'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,mr=`/assets/Gynecologist-Av1zZu4d.svg`,hr=`/assets/Neurologist-CuaLxNpX.svg`,gr=`/assets/Pediatricians-C6nmx5n8.svg`,_r={appointment_img:Jn,header_img:Yn,group_profiles:Xn,logo:er,chats_icon:ir,verified_icon:ar,info_icon:sr,profile_pic:Zn,arrow_icon:or,contact_image:Qn,about_image:$n,menu_icon:nr,cross_icon:rr,dropdown_icon:tr,upload_icon:cr,stripe_logo:lr,razorpay_logo:ur,paypal_logo:`/assets/paypal_logo-qMItijxw.png`},vr=[{speciality:`General physician`,image:pr},{speciality:`Gynecologist`,image:mr},{speciality:`Dermatologist`,image:dr},{speciality:`Pediatricians`,image:gr},{speciality:`Neurologist`,image:hr},{speciality:`Gastroenterologist`,image:fr}],yr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=o(((e,t)=>{t.exports=yr()}))(),br=({end:e,duration:t=2e3,suffix:n=``})=>{let[r,i]=(0,v.useState)(0);return(0,v.useEffect)(()=>{let n=0,r=e/(t/20),a=setInterval(()=>{n+=r,n>=e?(i(e),clearInterval(a)):i(Math.floor(n))},20);return()=>clearInterval(a)},[e,t]),(0,A.jsxs)(`span`,{children:[r,n]})},xr=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes hdr-orb-float {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.05); }
          66%      { transform: translate(-20px,15px) scale(0.97); }
        }
        @keyframes hdr-orb2-float {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-25px,30px) scale(1.08); }
          70%      { transform: translate(20px,-10px) scale(0.95); }
        }
        @keyframes hdr-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes hdr-pulse-dot {
          0%,100% { opacity:1; transform:scale(1); box-shadow:0 0 0 0 rgba(31,230,180,0.6); }
          50%     { opacity:.6; transform:scale(1.2); box-shadow:0 0 0 7px rgba(31,230,180,0); }
        }
        @keyframes hdr-badge-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(31,230,180,0.0); }
          50%     { box-shadow: 0 0 24px 6px rgba(31,230,180,0.12); }
        }
        @keyframes hdr-slide-up {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes hdr-fade-in {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes hdr-float-card-in {
          from { opacity:0; transform:translateX(24px) translateY(-12px) scale(0.9); }
          to   { opacity:1; transform:translateX(0) translateY(0) scale(1); }
        }
        @keyframes hdr-card-bob {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-7px); }
        }
        @keyframes hdr-scan-line {
          0%   { top: -4px; opacity:1; }
          90%  { opacity:0.5; }
          100% { top: 104%; opacity:0; }
        }
        @keyframes hdr-grid-fade {
          from { opacity:0; }
          to   { opacity:0.04; }
        }
        @keyframes hdr-btn-shine {
          0%       { left:-80%; }
          60%,100% { left:140%; }
        }
        @keyframes hdr-ring-pulse {
          0%   { transform:scale(1); opacity:0.5; }
          100% { transform:scale(1.5); opacity:0; }
        }
        @keyframes hdr-halo-rotate {
          0%   { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }

        .hdr-root {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-radius: 0px;
          overflow: hidden;
          min-height: 560px;
          display: flex;
          align-items: stretch;
          background:
            radial-gradient(ellipse 70% 80% at 10% 20%, #0e2a4a 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 90% 80%, #071828 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 50%, #0a1e32 0%, transparent 100%),
            #060f1c;
          isolation: isolate;
        }

        .hdr-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: hdr-grid-fade 1.4s ease forwards;
          pointer-events: none;
        }

        .hdr-orb { position: absolute; border-radius: 50%; pointer-events: none; z-index: 1; }
        .hdr-orb-1 {
          width: 580px; height: 580px; top: -200px; left: -130px;
          background: radial-gradient(circle at 40% 40%, rgba(31,200,160,0.22) 0%, rgba(31,173,150,0.1) 40%, transparent 70%);
          animation: hdr-orb-float 9s ease-in-out infinite;
          filter: blur(2px);
        }
        .hdr-orb-2 {
          width: 460px; height: 460px; bottom: -160px; right: 250px;
          background: radial-gradient(circle at 60% 60%, rgba(99,102,241,0.2) 0%, rgba(59,130,246,0.1) 40%, transparent 70%);
          animation: hdr-orb2-float 12s ease-in-out infinite;
          filter: blur(2px);
        }
        .hdr-orb-3 {
          width: 220px; height: 220px; top: 55%; left: 36%;
          background: radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 70%);
          animation: hdr-orb-float 7s ease-in-out infinite reverse;
        }

        .hdr-scanline {
          position: absolute; left:0; right:0; height: 2px; z-index: 2;
          background: linear-gradient(90deg, transparent 0%, rgba(31,230,180,0.5) 40%, rgba(255,255,255,0.8) 50%, rgba(31,230,180,0.5) 60%, transparent 100%);
          animation: hdr-scan-line 6s linear infinite;
          pointer-events: none;
        }

        /* ─── LEFT ─── */
        .hdr-left {
          flex: 1; padding: 76px 64px;
          display: flex; flex-direction: column; justify-content: center; gap: 26px;
          position: relative; z-index: 10;
        }

        .hdr-badge {
          display: inline-flex; align-items: center; gap: 9px;
          border: 1px solid rgba(31,230,180,0.28);
          background: rgba(31,230,180,0.05);
          border-radius: 100px; padding: 7px 18px 7px 11px;
          width: fit-content; backdrop-filter: blur(8px);
          animation: hdr-slide-up 0.7s ease both, hdr-badge-glow 3.5s ease-in-out 1s infinite;
        }
        .hdr-badge-dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: #1FE6B4; flex-shrink: 0;
          animation: hdr-pulse-dot 2s ease-in-out infinite;
        }
        .hdr-badge-txt {
          font-size: 11px; font-weight: 500; letter-spacing: 1.8px; text-transform: uppercase;
          background: linear-gradient(90deg, #1FE6B4 0%, #60A5FA 50%, #1FE6B4 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hdr-shimmer 3s linear infinite;
        }

        .hdr-title {
          font-family: 'Playfair Display', serif;
          font-size: 66px; font-weight: 800; color: #fff;
          line-height: 1.03; letter-spacing: -2px;
          animation: hdr-slide-up 0.7s 0.12s ease both;
        }
        .hdr-title em {
          font-style: italic;
          background: linear-gradient(135deg, #1FE6B4 0%, #38BDF8 55%, #818CF8 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 24px rgba(31,230,180,0.4));
        }

        .hdr-profiles-row {
          display: flex; align-items: center; gap: 14px;
          animation: hdr-slide-up 0.7s 0.22s ease both;
        }
        .hdr-profiles-row img { width: 110px; flex-shrink: 0; }
        .hdr-profiles-txt {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.48); line-height: 1.75; max-width: 280px;
        }

        .hdr-btn-wrap {
          animation: hdr-slide-up 0.7s 0.32s ease both;
          width: fit-content; position: relative;
        }
        .hdr-btn-ring {
          position: absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:100%; height:100%; border-radius:100px;
          border: 1.5px solid rgba(31,230,180,0.45);
          animation: hdr-ring-pulse 2.8s ease-out infinite;
          pointer-events: none;
        }
        .hdr-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #1FAD96, #0e9f8a, #178a76);
          color: #fff; padding: 16px 34px; border-radius: 100px;
          font-size: 14px; font-weight: 500; text-decoration: none;
          transition: all 0.35s cubic-bezier(0.34,1.3,0.64,1);
          position: relative; overflow: hidden;
          box-shadow: 0 8px 32px rgba(31,173,150,0.42), 0 0 0 0 rgba(31,230,180,0);
          letter-spacing: 0.3px;
        }
        .hdr-btn::before {
          content: '';
          position: absolute; top:0; left:-80%; width:60%; height:100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent);
          animation: hdr-btn-shine 3.2s ease-in-out infinite;
          pointer-events: none;
        }
        .hdr-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 18px 50px rgba(31,173,150,0.58), 0 0 0 5px rgba(31,230,180,0.14);
        }
        .hdr-btn-arrow {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(255,255,255,0.22);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; transition: transform 0.3s;
        }
        .hdr-btn:hover .hdr-btn-arrow { transform: translateX(4px); }

        .hdr-stats {
          display: flex; gap: 36px; padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
          animation: hdr-slide-up 0.7s 0.42s ease both;
        }
        .hdr-stat { position: relative; cursor: default; }
        .hdr-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 30px; font-weight: 800; color: #fff; line-height: 1; letter-spacing: -0.5px;
        }
        .hdr-stat-num span {
          background: linear-gradient(135deg, #1FE6B4, #38BDF8);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hdr-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.28); margin-top: 4px; font-weight: 300; letter-spacing: 0.5px; }
        .hdr-stat-line {
          position: absolute; bottom: -1px; left: 0;
          height: 1px; width: 0;
          background: linear-gradient(90deg, #1FE6B4, transparent);
          transition: width 0.4s ease;
        }
        .hdr-stat:hover .hdr-stat-line { width: 100%; }
        .hdr-stat:hover .hdr-stat-lbl { color: rgba(255,255,255,0.55); transition: color 0.3s; }

        /* ─── RIGHT ─── */
        .hdr-right {
          width: 50%; position: relative; flex-shrink: 0; overflow: hidden;
          animation: hdr-fade-in 1s 0.3s ease both;
        }
        .hdr-right::before {
          content: ''; position: absolute; inset: 0; z-index: 3;
          background:
            linear-gradient(to right, #060f1c 0%, transparent 28%),
            linear-gradient(to top, #060f1c 0%, transparent 28%);
          pointer-events: none;
        }

        /* Rotating halo ring */
        .hdr-halo-ring {
          position: absolute; z-index: 1;
          width: 420px; height: 420px; border-radius: 50%;
          bottom: -100px; right: 20px;
          border: 1px solid rgba(31,173,150,0.12);
          animation: hdr-halo-rotate 20s linear infinite;
        }
        .hdr-halo-ring::after {
          content: '';
          position: absolute; top:-3px; left:50%;
          width: 6px; height: 6px; border-radius: 50%;
          background: #1FE6B4;
          box-shadow: 0 0 12px 4px rgba(31,230,180,0.7);
        }

        .hdr-right-halo {
          position: absolute; z-index: 1;
          width: 380px; height: 380px; border-radius: 50%;
          bottom: -80px; right: 50px;
          background: radial-gradient(circle, rgba(31,173,150,0.2) 0%, rgba(59,130,246,0.1) 40%, transparent 70%);
          filter: blur(24px);
          animation: hdr-orb-float 8s ease-in-out infinite;
        }

        .hdr-right-img {
          position: absolute; bottom: 0; right: -10px;
          height: 106%; width: auto;
          object-fit: contain; object-position: bottom right;
          filter: drop-shadow(-50px 0 70px rgba(31,173,150,0.22));
          z-index: 2;
        }

        /* Floating card 1 */
        .hdr-float-card {
          position: absolute; top: 52px; left: -12px; z-index: 12;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(20px);
          border-radius: 18px; padding: 14px 18px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.4) inset;
          animation: hdr-float-card-in 0.8s 0.6s cubic-bezier(0.34,1.4,0.64,1) both,
                     hdr-card-bob 4.5s 2s ease-in-out infinite;
        }
        .hdr-float-icon {
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, #E6FBF5, #C6F4E8);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(31,173,150,0.28);
        }
        .hdr-float-lbl { font-size: 10px; color: #94A3B8; letter-spacing: 0.5px; }
        .hdr-float-val { font-size: 14px; font-weight: 700; color: #0D1F35; margin-top: 1px; }

        /* Floating card 2 */
        .hdr-float-card-2 {
          position: absolute; bottom: 84px; left: 12px; z-index: 12;
          background: rgba(10,24,48,0.82);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px; padding: 14px 18px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.4);
          animation: hdr-float-card-in 0.8s 0.9s cubic-bezier(0.34,1.4,0.64,1) both,
                     hdr-card-bob 5.5s 2.5s ease-in-out infinite reverse;
        }
        .hdr-float-icon-2 {
          width: 40px; height: 40px; border-radius: 12px;
          background: linear-gradient(135deg, rgba(201,168,76,0.22), rgba(201,168,76,0.08));
          border: 1px solid rgba(201,168,76,0.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .hdr-float-lbl-2 { font-size: 10px; color: rgba(255,255,255,0.38); letter-spacing: 0.5px; }
        .hdr-float-val-2 {
          font-size: 14px; font-weight: 700; margin-top: 1px;
          background: linear-gradient(90deg, #C9A84C, #F0D080);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 900px) {
          .hdr-root { flex-direction: column; border-radius: 24px; min-height: auto; }
          .hdr-left { padding: 52px 28px; gap: 22px; }
          .hdr-title { font-size: 44px; }
          .hdr-right { width: 100%; height: 300px; }
          .hdr-right-img { height: 100%; width: 100%; right:0; object-position: top center; }
          .hdr-float-card { top: 16px; left: 16px; }
          .hdr-float-card-2 { display: none; }
          .hdr-halo-ring { display: none; }
          .hdr-stats { gap: 20px; flex-wrap: wrap; }
          .hdr-stat-num { font-size: 24px; }
        }
      `}),(0,A.jsxs)(`div`,{className:`hdr-root`,children:[(0,A.jsx)(`div`,{className:`hdr-grid`}),(0,A.jsx)(`div`,{className:`hdr-orb hdr-orb-1`}),(0,A.jsx)(`div`,{className:`hdr-orb hdr-orb-2`}),(0,A.jsx)(`div`,{className:`hdr-orb hdr-orb-3`}),(0,A.jsx)(`div`,{className:`hdr-scanline`}),(0,A.jsxs)(`div`,{className:`hdr-left`,children:[(0,A.jsxs)(`div`,{className:`hdr-badge`,children:[(0,A.jsx)(`span`,{className:`hdr-badge-dot`}),(0,A.jsx)(`span`,{className:`hdr-badge-txt`,children:`Trusted by 50,000+ Patients`})]}),(0,A.jsxs)(`h1`,{className:`hdr-title`,children:[`Book With`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`em`,{children:`Trusted`}),(0,A.jsx)(`br`,{}),`Doctors`]}),(0,A.jsxs)(`div`,{className:`hdr-profiles-row`,children:[(0,A.jsx)(`img`,{src:_r.group_profiles,alt:`Patient profiles`}),(0,A.jsx)(`p`,{className:`hdr-profiles-txt`,children:`Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.`})]}),(0,A.jsxs)(`div`,{className:`hdr-btn-wrap`,children:[(0,A.jsx)(`div`,{className:`hdr-btn-ring`}),(0,A.jsxs)(`a`,{href:`#speciality`,className:`hdr-btn`,children:[`Book appointment`,(0,A.jsx)(`span`,{className:`hdr-btn-arrow`,children:`→`})]})]}),(0,A.jsxs)(`div`,{className:`hdr-stats`,children:[(0,A.jsxs)(`div`,{className:`hdr-stat`,children:[(0,A.jsx)(`div`,{className:`hdr-stat-num`,children:(0,A.jsx)(br,{end:100,suffix:`+`})}),(0,A.jsx)(`div`,{className:`hdr-stat-lbl`,children:`Specialists`}),(0,A.jsx)(`div`,{className:`hdr-stat-line`})]}),(0,A.jsxs)(`div`,{className:`hdr-stat`,children:[(0,A.jsx)(`div`,{className:`hdr-stat-num`,children:(0,A.jsx)(br,{end:98,suffix:`%`})}),(0,A.jsx)(`div`,{className:`hdr-stat-lbl`,children:`Satisfaction`}),(0,A.jsx)(`div`,{className:`hdr-stat-line`})]}),(0,A.jsxs)(`div`,{className:`hdr-stat`,children:[(0,A.jsx)(`div`,{className:`hdr-stat-num`,children:(0,A.jsx)(br,{end:24,suffix:`/7`})}),(0,A.jsx)(`div`,{className:`hdr-stat-lbl`,children:`Support`}),(0,A.jsx)(`div`,{className:`hdr-stat-line`})]}),(0,A.jsxs)(`div`,{className:`hdr-stat`,children:[(0,A.jsx)(`div`,{className:`hdr-stat-num`,children:(0,A.jsx)(br,{end:15,suffix:`K`})}),(0,A.jsx)(`div`,{className:`hdr-stat-lbl`,children:`Appointments`}),(0,A.jsx)(`div`,{className:`hdr-stat-line`})]})]})]}),(0,A.jsxs)(`div`,{className:`hdr-right`,children:[(0,A.jsx)(`div`,{className:`hdr-right-halo`}),(0,A.jsx)(`div`,{className:`hdr-halo-ring`}),(0,A.jsx)(`img`,{className:`hdr-right-img`,src:_r.header_img,alt:`Doctor`}),(0,A.jsxs)(`div`,{className:`hdr-float-card`,children:[(0,A.jsx)(`div`,{className:`hdr-float-icon`,children:`✅`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`hdr-float-lbl`,children:`Appointment`}),(0,A.jsx)(`div`,{className:`hdr-float-val`,children:`Confirmed!`})]})]}),(0,A.jsxs)(`div`,{className:`hdr-float-card-2`,children:[(0,A.jsx)(`div`,{className:`hdr-float-icon-2`,children:`⭐`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`hdr-float-lbl-2`,children:`Average Rating`}),(0,A.jsx)(`div`,{className:`hdr-float-val-2`,children:`4.9 / 5.0`})]})]})]})]})]}),Sr=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes sm-orb-drift {
          0%,100% { transform:translate(0,0) scale(1); }
          33%      { transform:translate(25px,-18px) scale(1.06); }
          66%      { transform:translate(-18px,22px) scale(0.96); }
        }
        @keyframes sm-orb-drift2 {
          0%,100% { transform:translate(0,0) scale(1); }
          40%      { transform:translate(-30px,20px) scale(1.07); }
          75%      { transform:translate(18px,-14px) scale(0.95); }
        }
        @keyframes sm-grid-in {
          from { opacity:0; } to { opacity:0.035; }
        }
        @keyframes sm-shimmer-txt {
          0%   { background-position:-200% center; }
          100% { background-position:200% center; }
        }
        @keyframes sm-badge-pulse {
          0%,100% { box-shadow:0 0 0 0 rgba(31,230,180,0); }
          50%     { box-shadow:0 0 22px 5px rgba(31,230,180,0.12); }
        }
        @keyframes sm-dot-pulse {
          0%,100% { opacity:1; transform:scale(1); box-shadow:0 0 0 0 rgba(31,230,180,0.7); }
          50%     { opacity:.55; transform:scale(1.25); box-shadow:0 0 0 8px rgba(31,230,180,0); }
        }
        @keyframes sm-slide-up {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes sm-card-in {
          from { opacity:0; transform:translateY(36px) scale(0.92); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes sm-scan-line {
          0%   { top:-3px; opacity:1; }
          88%  { opacity:0.4; }
          100% { top:104%; opacity:0; }
        }
        @keyframes sm-ring-rotate {
          from { transform:rotate(0deg); } to { transform:rotate(360deg); }
        }
        @keyframes sm-shine-sweep {
          0%       { left:-100%; }
          55%,100% { left:140%; }
        }
        @keyframes sm-float-bob {
          0%,100% { transform:translateY(0) rotate(-1deg); }
          50%     { transform:translateY(-8px) rotate(1deg); }
        }
        @keyframes sm-float-bob2 {
          0%,100% { transform:translateY(0) rotate(1deg); }
          50%     { transform:translateY(-6px) rotate(-1deg); }
        }

        /* ─── ROOT ─── */
        .sm-root {
          font-family:'DM Sans', sans-serif;
          position:relative;
          padding:30px 0 16px;
          overflow:hidden;
          isolation:isolate;
          background:
            radial-gradient(ellipse 60% 50% at 8% 15%,  rgba(31,173,150,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 55% 60% at 92% 85%,  rgba(59,130,246,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 70% 40% at 55% 50%,  rgba(201,168,76,0.05) 0%, transparent 70%),
            #EEF2FF;
          text-align:center;
        }

        .sm-grid {
          position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:radial-gradient(circle, rgba(13,31,53,0.5) 1px, transparent 1px);
          background-size:28px 28px;
          animation:sm-grid-in 1.2s ease forwards;
        }

        .sm-orb { position:absolute; border-radius:50%; pointer-events:none; z-index:1; }
        .sm-orb-1 {
          width:480px; height:480px; top:-190px; left:-140px;
          background:radial-gradient(circle at 40% 40%, rgba(31,173,150,0.18) 0%, rgba(31,173,150,0.06) 40%, transparent 70%);
          animation:sm-orb-drift 10s ease-in-out infinite; filter:blur(3px);
        }
        .sm-orb-2 {
          width:400px; height:400px; bottom:-130px; right:-100px;
          background:radial-gradient(circle at 60% 60%, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.07) 40%, transparent 70%);
          animation:sm-orb-drift2 13s ease-in-out infinite; filter:blur(3px);
        }
        .sm-orb-3 {
          width:220px; height:220px; top:40%; left:45%;
          background:radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          animation:sm-orb-drift 8s ease-in-out infinite reverse;
        }

        .sm-scanline {
          position:absolute; left:0; right:0; height:2px; z-index:2;
          background:linear-gradient(90deg, transparent 0%, rgba(31,230,180,0.45) 40%, rgba(255,255,255,0.7) 50%, rgba(31,230,180,0.45) 60%, transparent 100%);
          animation:sm-scan-line 7s linear infinite;
          pointer-events:none;
        }

        /* ─── HEADING ─── */
        .sm-head {
          position:relative; z-index:10; margin-bottom:2px;
          animation:sm-slide-up 0.7s ease both;
        }
        .sm-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid rgba(31,230,180,0.28);
          background:rgba(31,230,180,0.06);
          border-radius:100px; padding:6px 18px 6px 11px;
          margin-bottom:18px; backdrop-filter:blur(8px);
          animation:sm-badge-pulse 3.5s ease-in-out infinite;
        }
        .sm-eye-dot {
          width:8px; height:8px; border-radius:50%;
          background:#1FE6B4; flex-shrink:0;
          animation:sm-dot-pulse 2.2s ease-in-out infinite;
        }
        .sm-eye-txt {
          font-size:11px; font-weight:500; letter-spacing:2px; text-transform:uppercase;
          background:linear-gradient(90deg, #1FE6B4 0%, #60A5FA 50%, #1FE6B4 100%);
          background-size:200% auto;
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:sm-shimmer-txt 3s linear infinite;
        }
        .sm-title {
          font-family:'Playfair Display', serif;
          font-size:50px; font-weight:800; color:#0D1F35;
          letter-spacing:-1.5px; line-height:1.1; margin-bottom:14px;
        }
        .sm-title em {
          font-style:italic;
          background:linear-gradient(135deg, #1FAD96 0%, #38BDF8 55%, #818CF8 100%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
          filter:drop-shadow(0 0 18px rgba(31,173,150,0.3));
        }
        .sm-sub {
          font-size:15px; font-weight:300; color:#64748B;
          max-width:420px; margin:0 auto; line-height:1.75;
        }

        /* ─── GLASS STAT CARDS ─── */
        .sm-float-area {
          position:relative; z-index:10;
          display:flex; justify-content:center; gap:16px;
          margin-bottom:52px; flex-wrap:wrap;
          padding:0 24px;
        }
        .sm-fcard {
          background:rgba(255,255,255,0.78);
          backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,0.9);
          border-radius:20px; padding:16px 24px;
          display:flex; align-items:center; gap:12px;
          box-shadow:0 8px 32px rgba(13,31,53,0.08), 0 0 0 1px rgba(255,255,255,0.7);
          transition:all 0.35s ease;
          cursor:default;
        }
        .sm-fcard:nth-child(1) { animation:sm-card-in 0.6s 0.2s ease both, sm-float-bob 5s 1s ease-in-out infinite; }
        .sm-fcard:nth-child(2) { animation:sm-card-in 0.6s 0.35s ease both, sm-float-bob2 6s 1.2s ease-in-out infinite; }
        .sm-fcard:nth-child(3) { animation:sm-card-in 0.6s 0.5s ease both, sm-float-bob 4.5s 1.5s ease-in-out infinite; }
        .sm-fcard:hover {
          transform:translateY(-5px) !important;
          box-shadow:0 20px 48px rgba(31,173,150,0.2), 0 0 0 1.5px rgba(31,230,180,0.3);
        }
        .sm-fcard-icon {
          width:42px; height:42px; border-radius:13px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; font-size:21px;
        }
        .sm-fcard-icon.teal { background:linear-gradient(135deg,#E6FBF5,#C6F4E8); box-shadow:0 4px 12px rgba(31,173,150,0.22); }
        .sm-fcard-icon.blue { background:linear-gradient(135deg,#EFF6FF,#DBEAFE); box-shadow:0 4px 12px rgba(59,130,246,0.18); }
        .sm-fcard-icon.gold { background:linear-gradient(135deg,#FEF9EC,#FEF3C7); box-shadow:0 4px 12px rgba(201,168,76,0.2); }
        .sm-fcard-num {
          font-family:'Playfair Display', serif;
          font-size:22px; font-weight:800; color:#0D1F35; letter-spacing:-0.5px; line-height:1;
        }
        .sm-fcard-num span { color:#1FAD96; }
        .sm-fcard-lbl { font-size:11px; color:#94A3B8; margin-top:2px; font-weight:300; }

        /* ─── SPECIALITY CARDS ─── */
        .sm-scroll-wrap {
          display:flex; justify-content:center; gap:16px;
          padding:12px 32px 16px;
          overflow-x:auto;
          scrollbar-width:none; -ms-overflow-style:none;
          position:relative; z-index:10;
        }
        .sm-scroll-wrap::-webkit-scrollbar { display:none; }

        .sm-card {
          display:flex; flex-direction:column; align-items:center;
          gap:11px; cursor:pointer; flex-shrink:0;
          text-decoration:none;
          width:116px; padding:26px 16px 22px;
          border-radius:24px;
          background:rgba(255,255,255,0.82);
          border:1px solid rgba(255,255,255,0.95);
          backdrop-filter:blur(16px);
          box-shadow:0 4px 20px rgba(13,31,53,0.07), 0 0 0 1px rgba(255,255,255,0.7) inset;
          transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; overflow:hidden;
        }
        .sm-card::before {
          content:'';
          position:absolute; top:0; left:-100%; width:60%; height:100%;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          pointer-events:none;
        }
        .sm-card:hover::before { animation:sm-shine-sweep 0.55s ease forwards; }
        .sm-card::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(160deg, rgba(31,173,150,0.07), rgba(59,130,246,0.05));
          opacity:0; transition:opacity 0.3s; border-radius:inherit; pointer-events:none;
        }
        .sm-card:hover::after { opacity:1; }
        .sm-card:hover {
          transform:translateY(-13px) scale(1.05);
          box-shadow:0 28px 56px rgba(13,31,53,0.16), 0 0 0 1.5px rgba(31,173,150,0.4), 0 0 36px rgba(31,230,180,0.12);
          background:rgba(255,255,255,0.97);
        }

        .sm-card:nth-child(1)  { animation:sm-card-in 0.5s 0.04s ease both; }
        .sm-card:nth-child(2)  { animation:sm-card-in 0.5s 0.09s ease both; }
        .sm-card:nth-child(3)  { animation:sm-card-in 0.5s 0.14s ease both; }
        .sm-card:nth-child(4)  { animation:sm-card-in 0.5s 0.19s ease both; }
        .sm-card:nth-child(5)  { animation:sm-card-in 0.5s 0.24s ease both; }
        .sm-card:nth-child(6)  { animation:sm-card-in 0.5s 0.29s ease both; }
        .sm-card:nth-child(7)  { animation:sm-card-in 0.5s 0.34s ease both; }
        .sm-card:nth-child(8)  { animation:sm-card-in 0.5s 0.39s ease both; }
        .sm-card:nth-child(9)  { animation:sm-card-in 0.5s 0.44s ease both; }
        .sm-card:nth-child(10) { animation:sm-card-in 0.5s 0.49s ease both; }

        .sm-icon-wrap {
          width:62px; height:62px; border-radius:20px;
          background:linear-gradient(135deg,#EBF7F5 0%,#D8F0EC 100%);
          display:flex; align-items:center; justify-content:center;
          overflow:hidden; flex-shrink:0;
          transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          position:relative;
          box-shadow:0 4px 14px rgba(31,173,150,0.15);
        }
        .sm-icon-wrap::before {
          content:''; position:absolute; inset:-3px; border-radius:23px;
          border:1.5px solid rgba(31,173,150,0); transition:all 0.3s;
        }
        .sm-card:hover .sm-icon-wrap::before {
          border-color:rgba(31,173,150,0.5);
          animation:sm-ring-rotate 2s linear infinite;
          inset:-5px; border-radius:26px;
        }
        .sm-card:hover .sm-icon-wrap {
          background:linear-gradient(135deg,#C2EDE4,#A3E2D5);
          transform:scale(1.14) rotate(-4deg);
          box-shadow:0 10px 28px rgba(31,173,150,0.32);
        }
        .sm-icon-wrap img {
          width:40px; height:40px; object-fit:contain;
          transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; z-index:1;
        }
        .sm-card:hover .sm-icon-wrap img { transform:scale(1.18); }

        .sm-label {
          font-size:12px; font-weight:500;
          color:#334155; line-height:1.3; text-align:center;
          transition:color 0.3s; position:relative; z-index:1;
        }
        .sm-card:hover .sm-label { color:#0D1F35; font-weight:600; }

        .sm-indicator {
          width:6px; height:6px; border-radius:50%;
          background:#1FAD96; opacity:0; transform:scale(0);
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; z-index:1;
          box-shadow:0 0 8px rgba(31,173,150,0.6);
        }
        .sm-card:hover .sm-indicator { opacity:1; transform:scale(1); }

        /* ─── BOTTOM CTA ─── */
        .sm-bottom {
          position:relative; z-index:10;
          margin-top:56px;
          display:flex; flex-direction:column; align-items:center; gap:16px;
          animation:sm-slide-up 0.7s 0.5s ease both;
        }
        .sm-divider {
          display:flex; align-items:center; gap:16px; width:340px;
        }
        .sm-divider-line {
          flex:1; height:1px;
          background:linear-gradient(90deg, transparent, rgba(13,31,53,0.12), transparent);
        }
        .sm-divider-txt {
          font-size:11px; color:#94A3B8; font-weight:300; letter-spacing:1px; white-space:nowrap;
        }
        .sm-cta-btn {
          display:inline-flex; align-items:center; gap:10px;
          background:linear-gradient(135deg,#0D1F35 0%,#162B45 100%);
          color:#fff; border:none; border-radius:100px;
          padding:14px 32px; font-size:13px; font-weight:500;
          font-family:'DM Sans', sans-serif; cursor:pointer;
          transition:all 0.35s cubic-bezier(0.34,1.3,0.64,1);
          letter-spacing:0.3px; position:relative; overflow:hidden;
          box-shadow:0 8px 28px rgba(13,31,53,0.22);
          text-decoration:none;
        }
        .sm-cta-btn::before {
          content:''; position:absolute; top:0; left:-80%; width:60%; height:100%;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          animation:sm-shine-sweep 4s ease-in-out infinite; pointer-events:none;
        }
        .sm-cta-btn:hover { transform:translateY(-3px) scale(1.03); box-shadow:0 16px 44px rgba(13,31,53,0.35); }
        .sm-cta-arrow {
          width:22px; height:22px; border-radius:50%;
          background:rgba(255,255,255,0.15);
          display:flex; align-items:center; justify-content:center;
          font-size:12px; transition:transform 0.3s;
        }
        .sm-cta-btn:hover .sm-cta-arrow { transform:translateX(4px); }

        @media (max-width:768px) {
          .sm-root { padding:64px 0 60px; }
          .sm-title { font-size:34px; }
          .sm-scroll-wrap { justify-content:flex-start; padding:12px 16px 16px; }
          .sm-float-area { gap:10px; padding:0 16px; }
          .sm-fcard { padding:12px 16px; }
          .sm-fcard-num { font-size:18px; }
        }
      `}),(0,A.jsxs)(`div`,{id:`speciality`,className:`sm-root`,children:[(0,A.jsx)(`div`,{className:`sm-grid`}),(0,A.jsx)(`div`,{className:`sm-orb sm-orb-1`}),(0,A.jsx)(`div`,{className:`sm-orb sm-orb-2`}),(0,A.jsx)(`div`,{className:`sm-orb sm-orb-3`}),(0,A.jsx)(`div`,{className:`sm-scanline`}),(0,A.jsxs)(`div`,{className:`sm-head`,children:[(0,A.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`10px`},children:(0,A.jsxs)(`div`,{className:`sm-eyebrow`,children:[(0,A.jsx)(`span`,{className:`sm-eye-dot`}),(0,A.jsx)(`span`,{className:`sm-eye-txt`,children:`Browse by category`})]})}),(0,A.jsxs)(`h2`,{className:`sm-title`,children:[`Find by `,(0,A.jsx)(`em`,{children:`Speciality`})]}),(0,A.jsx)(`p`,{className:`sm-sub`,children:`Explore our curated network of certified specialists — browse, compare, and schedule hassle-free.`})]}),(0,A.jsxs)(`div`,{className:`sm-float-area`,children:[(0,A.jsxs)(`div`,{className:`sm-fcard`,children:[(0,A.jsx)(`div`,{className:`sm-fcard-icon teal`,children:`🩺`}),(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`sm-fcard-num`,children:[`8`,(0,A.jsx)(`span`,{children:`+`})]}),(0,A.jsx)(`div`,{className:`sm-fcard-lbl`,children:`Specialities`})]})]}),(0,A.jsxs)(`div`,{className:`sm-fcard`,children:[(0,A.jsx)(`div`,{className:`sm-fcard-icon blue`,children:`👨‍⚕️`}),(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`sm-fcard-num`,children:[`100`,(0,A.jsx)(`span`,{children:`+`})]}),(0,A.jsx)(`div`,{className:`sm-fcard-lbl`,children:`Verified Doctors`})]})]}),(0,A.jsxs)(`div`,{className:`sm-fcard`,children:[(0,A.jsx)(`div`,{className:`sm-fcard-icon gold`,children:`⭐`}),(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`sm-fcard-num`,children:[`4.9`,(0,A.jsx)(`span`,{children:`/5`})]}),(0,A.jsx)(`div`,{className:`sm-fcard-lbl`,children:`Avg. Rating`})]})]})]}),(0,A.jsx)(`div`,{className:`sm-scroll-wrap`,children:vr.map((e,t)=>(0,A.jsxs)(An,{to:`/doctors/${e.speciality}`,onClick:()=>scrollTo(0,0),className:`sm-card`,children:[(0,A.jsx)(`div`,{className:`sm-icon-wrap`,children:(0,A.jsx)(`img`,{src:e.image,alt:e.speciality})}),(0,A.jsx)(`span`,{className:`sm-label`,children:e.speciality}),(0,A.jsx)(`span`,{className:`sm-indicator`})]},t))}),(0,A.jsxs)(`div`,{className:`sm-bottom`,children:[(0,A.jsxs)(`div`,{className:`sm-divider`,children:[(0,A.jsx)(`div`,{className:`sm-divider-line`}),(0,A.jsx)(`span`,{className:`sm-divider-txt`,children:`Can't find your speciality?`}),(0,A.jsx)(`div`,{className:`sm-divider-line`})]}),(0,A.jsxs)(`a`,{href:`/doctors`,className:`sm-cta-btn`,children:[`Browse all doctors`,(0,A.jsx)(`span`,{className:`sm-cta-arrow`,children:`→`})]})]})]})]});function Cr(e){if(!e||typeof document>`u`)return;let t=document.head||document.getElementsByTagName(`head`)[0],n=document.createElement(`style`);n.type=`text/css`,t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}Cr(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var wr=e=>typeof e==`number`&&!isNaN(e),Tr=e=>typeof e==`string`,Er=e=>typeof e==`function`,Dr=e=>Tr(e)||wr(e),Or=e=>(0,v.isValidElement)(e)||Tr(e)||Er(e)||wr(e);function kr(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function Ar({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,v.useRef)(0);return(0,v.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,v.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?kr(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),v.createElement(v.Fragment,null,a)}}var jr=1,Mr=()=>`${jr++}`,Nr=new Map,Pr=[],Fr=new Set,Ir=()=>Nr.size>0,Lr=(e,{containerId:t})=>Nr.get(t||1)?.toasts.get(e);function Rr(e,t){var n;if(t)return!!((n=Nr.get(t))!=null&&n.isToastActive(e));let r=!1;return Nr.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function zr(e){if(!Ir()){Pr=Pr.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Dr(e))Nr.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=Nr.get(e.containerId);t?t.removeToast(e.id):Nr.forEach(t=>{t.removeToast(e.id)})}}var Br=(e={})=>{Nr.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Vr(e,t){Or(e)&&(Ir()||Pr.push({content:e,options:t}),Nr.forEach(n=>{n.buildToast(e,t)}))}function Hr(e,t){Nr.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function Ur(e){return Fr.add(e),()=>{Fr.delete(e)}}function Wr(e){return e&&(Tr(e.toastId)||wr(e.toastId))?e.toastId:Mr()}function Gr(e,t){return Vr(e,t),t.toastId}function Kr(e,t){return{...t,type:t&&t.type||e,toastId:Wr(t)}}function qr(e){return(t,n)=>Gr(t,Kr(e,n))}function j(e,t){return Gr(e,Kr(`default`,t))}j.loading=(e,t)=>Gr(e,Kr(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Jr(e,{pending:t,error:n,success:r},i){let a;t&&(a=Tr(t)?j.loading(t,i):j.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){j.dismiss(a);return}let r={type:e,...o,...i,data:n},s=Tr(t)?{render:t}:t;return a?j.update(a,{...r,...s}):j(s.render,{...r,...s}),n},c=Er(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}j.promise=Jr,j.success=qr(`success`),j.info=qr(`info`),j.error=qr(`error`),j.warning=qr(`warning`),j.warn=j.warning,j.dark=(e,t)=>Gr(e,Kr(`default`,{theme:`dark`,...t}));function Yr(e){zr(e)}j.dismiss=Yr,j.clearWaitingQueue=Br,j.isActive=Rr,j.update=(e,t={})=>{let n=Lr(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:Mr()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,Gr(o,a)}},j.done=e=>{j.update(e,{progress:1})},j.onChange=Ur,j.play=e=>Hr(!0,e),j.pause=e=>Hr(!1,e);var Xr=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t});Ar(Xr(`bounce`,!0)),Ar(Xr(`slide`,!0)),Ar(Xr(`zoom`)),Ar(Xr(`flip`));function Zr(e,t){return function(){return e.apply(t,arguments)}}var{toString:Qr}=Object.prototype,{getPrototypeOf:$r}=Object,{iterator:ei,toStringTag:ti}=Symbol,ni=(e=>t=>{let n=Qr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ri=e=>(e=e.toLowerCase(),t=>ni(t)===e),ii=e=>t=>typeof t===e,{isArray:ai}=Array,oi=ii(`undefined`);function si(e){return e!==null&&!oi(e)&&e.constructor!==null&&!oi(e.constructor)&&di(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ci=ri(`ArrayBuffer`);function li(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ci(e.buffer),t}var ui=ii(`string`),di=ii(`function`),fi=ii(`number`),pi=e=>typeof e==`object`&&!!e,mi=e=>e===!0||e===!1,hi=e=>{if(ni(e)!==`object`)return!1;let t=$r(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(ti in e)&&!(ei in e)},gi=e=>{if(!pi(e)||si(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},_i=ri(`Date`),vi=ri(`File`),yi=e=>!!(e&&e.uri!==void 0),bi=e=>e&&e.getParts!==void 0,xi=ri(`Blob`),Si=ri(`FileList`),Ci=e=>pi(e)&&di(e.pipe);function wi(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Ti=wi(),Ei=Ti.FormData===void 0?void 0:Ti.FormData,Di=e=>{let t;return e&&(Ei&&e instanceof Ei||di(e.append)&&((t=ni(e))===`formdata`||t===`object`&&di(e.toString)&&e.toString()===`[object FormData]`))},Oi=ri(`URLSearchParams`),[ki,Ai,ji,Mi]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(ri),Ni=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function Pi(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),ai(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(si(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function Fi(e,t){if(si(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var Ii=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Li=e=>!oi(e)&&e!==Ii;function Ri(){let{caseless:e,skipUndefined:t}=Li(this)&&this||{},n={},r=(r,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=e&&Fi(n,i)||i;hi(n[a])&&hi(r)?n[a]=Ri(n[a],r):hi(r)?n[a]=Ri({},r):ai(r)?n[a]=r.slice():(!t||!oi(r))&&(n[a]=r)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Pi(arguments[e],r);return n}var zi=(e,t,n,{allOwnKeys:r}={})=>(Pi(t,(t,r)=>{n&&di(t)?Object.defineProperty(e,r,{value:Zr(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Bi=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),M=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},N=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&$r(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Vi=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Hi=e=>{if(!e)return null;if(ai(e))return e;let t=e.length;if(!fi(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},Ui=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&$r(Uint8Array)),Wi=(e,t)=>{let n=(e&&e[ei]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Gi=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ki=ri(`HTMLFormElement`),qi=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Ji=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Yi=ri(`RegExp`),Xi=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};Pi(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Zi=e=>{Xi(e,(t,n)=>{if(di(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(di(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Qi=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return ai(e)?r(e):r(String(e).split(t)),n},$i=()=>{},ea=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ta(e){return!!(e&&di(e.append)&&e[ti]===`FormData`&&e[ei])}var na=e=>{let t=Array(10),n=(e,r)=>{if(pi(e)){if(t.indexOf(e)>=0)return;if(si(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=ai(e)?[]:{};return Pi(e,(e,t)=>{let a=n(e,r+1);!oi(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},ra=ri(`AsyncFunction`),ia=e=>e&&(pi(e)||di(e))&&di(e.then)&&di(e.catch),aa=((e,t)=>e?setImmediate:t?((e,t)=>(Ii.addEventListener(`message`,({source:n,data:r})=>{n===Ii&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Ii.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,di(Ii.postMessage)),P={isArray:ai,isArrayBuffer:ci,isBuffer:si,isFormData:Di,isArrayBufferView:li,isString:ui,isNumber:fi,isBoolean:mi,isObject:pi,isPlainObject:hi,isEmptyObject:gi,isReadableStream:ki,isRequest:Ai,isResponse:ji,isHeaders:Mi,isUndefined:oi,isDate:_i,isFile:vi,isReactNativeBlob:yi,isReactNative:bi,isBlob:xi,isRegExp:Yi,isFunction:di,isStream:Ci,isURLSearchParams:Oi,isTypedArray:Ui,isFileList:Si,forEach:Pi,merge:Ri,extend:zi,trim:Ni,stripBOM:Bi,inherits:M,toFlatObject:N,kindOf:ni,kindOfTest:ri,endsWith:Vi,toArray:Hi,forEachEntry:Wi,matchAll:Gi,isHTMLForm:Ki,hasOwnProperty:Ji,hasOwnProp:Ji,reduceDescriptors:Xi,freezeMethods:Zi,toObjectSet:Qi,toCamelCase:qi,noop:$i,toFiniteNumber:ea,findKey:Fi,global:Ii,isContextDefined:Li,isSpecCompliantForm:ta,toJSONObject:na,isAsyncFn:ra,isThenable:ia,setImmediate:aa,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(Ii):typeof process<`u`&&process.nextTick||aa,isIterable:e=>e!=null&&di(e[ei])},F=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,`message`,{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}};F.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,F.ERR_BAD_OPTION=`ERR_BAD_OPTION`,F.ECONNABORTED=`ECONNABORTED`,F.ETIMEDOUT=`ETIMEDOUT`,F.ERR_NETWORK=`ERR_NETWORK`,F.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,F.ERR_DEPRECATED=`ERR_DEPRECATED`,F.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,F.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,F.ERR_CANCELED=`ERR_CANCELED`,F.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,F.ERR_INVALID_URL=`ERR_INVALID_URL`;function oa(e){return P.isPlainObject(e)||P.isArray(e)}function sa(e){return P.endsWith(e,`[]`)?e.slice(0,-2):e}function ca(e,t,n){return e?e.concat(t).map(function(e,t){return e=sa(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function la(e){return P.isArray(e)&&!e.some(oa)}var ua=P.toFlatObject(P,{},null,function(e){return/^is[A-Z]/.test(e)});function I(e,t,n){if(!P.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!P.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(P.isDate(e))return e.toISOString();if(P.isBoolean(e))return e.toString();if(!s&&P.isBlob(e))throw new F(`Blob is not supported. Use a Buffer instead.`);return P.isArrayBuffer(e)||P.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(P.isReactNative(t)&&P.isReactNativeBlob(e))return t.append(ca(i,n,a),c(e)),!1;if(e&&!i&&typeof e==`object`){if(P.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(P.isArray(e)&&la(e)||(P.isFileList(e)||P.endsWith(n,`[]`))&&(s=P.toArray(e)))return n=sa(n),s.forEach(function(e,r){!(P.isUndefined(e)||e===null)&&t.append(o===!0?ca([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return oa(e)?!0:(t.append(ca(i,n,a),c(e)),!1)}let u=[],d=Object.assign(ua,{defaultVisitor:l,convertValue:c,isVisitable:oa});function f(e,n){if(!P.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),P.forEach(e,function(e,r){(!(P.isUndefined(e)||e===null)&&i.call(t,e,P.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!P.isObject(e))throw TypeError(`data must be an object`);return f(e),t}function da(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function fa(e,t){this._pairs=[],e&&I(e,this,t)}var pa=fa.prototype;pa.append=function(e,t){this._pairs.push([e,t])},pa.toString=function(e){let t=e?function(t){return e.call(this,t,da)}:da;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function ma(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function ha(e,t,n){if(!t)return e;let r=n&&n.encode||ma,i=P.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):P.isURLSearchParams(t)?t.toString():new fa(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var ga=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){P.forEach(this.handlers,function(t){t!==null&&e(t)})}},_a={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},va={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:fa,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},ya=s({hasBrowserEnv:()=>ba,hasStandardBrowserEnv:()=>Sa,hasStandardBrowserWebWorkerEnv:()=>Ca,navigator:()=>xa,origin:()=>wa}),ba=typeof window<`u`&&typeof document<`u`,xa=typeof navigator==`object`&&navigator||void 0,Sa=ba&&(!xa||[`ReactNative`,`NativeScript`,`NS`].indexOf(xa.product)<0),Ca=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,wa=ba&&window.location.href||`http://localhost`,L={...ya,...va};function Ta(e,t){return I(e,new L.classes.URLSearchParams,{visitor:function(e,t,n,r){return L.isNode&&P.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function Ea(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function Da(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Oa(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&P.isArray(r)?r.length:a,s?(P.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!P.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&P.isArray(r[a])&&(r[a]=Da(r[a])),!o)}if(P.isFormData(e)&&P.isFunction(e.entries)){let n={};return P.forEachEntry(e,(e,r)=>{t(Ea(e),r,n,0)}),n}return null}function ka(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Aa={transitional:_a,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=P.isObject(e);if(i&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return r?JSON.stringify(Oa(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e)||P.isReadableStream(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return Ta(e,this.formSerializer).toString();if((a=P.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return I(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),ka(e)):e}],transformResponse:[function(e){let t=this.transitional||Aa.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(P.isResponse(e)||P.isReadableStream(e))return e;if(e&&P.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(e){if(n)throw e.name===`SyntaxError`?F.from(e,F.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:L.classes.FormData,Blob:L.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};P.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{Aa.headers[e]={}});var ja=P.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Ma=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&ja[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},Na=Symbol(`internals`),Pa=e=>!/[\r\n]/.test(e);function Fa(e,t){if(!(e===!1||e==null)){if(P.isArray(e)){e.forEach(e=>Fa(e,t));return}if(!Pa(String(e)))throw Error(`Invalid character in header content ["${t}"]`)}}function Ia(e){return e&&String(e).trim().toLowerCase()}function La(e){let t=e.length;for(;t>0;){let n=e.charCodeAt(t-1);if(n!==10&&n!==13)break;--t}return t===e.length?e:e.slice(0,t)}function Ra(e){return e===!1||e==null?e:P.isArray(e)?e.map(Ra):La(String(e))}function za(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Ba=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Va(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function Ha(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Ua(e,t){let n=P.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Wa=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Ia(t);if(!i)throw Error(`header name must be a non-empty string`);let a=P.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(Fa(e,t),r[a||t]=Ra(e))}let a=(e,t)=>P.forEach(e,(e,n)=>i(e,n,t));if(P.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(P.isString(e)&&(e=e.trim())&&!Ba(e))a(Ma(e),t);else if(P.isObject(e)&&P.isIterable(e)){let n={},r,i;for(let t of e){if(!P.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?P.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Ia(e),e){let n=P.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return za(e);if(P.isFunction(t))return t.call(this,e,n);if(P.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Ia(e),e){let n=P.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Va(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Ia(e),e){let i=P.findKey(n,e);i&&(!t||Va(n,n[i],i,t))&&(delete n[i],r=!0)}}return P.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Va(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return P.forEach(this,(r,i)=>{let a=P.findKey(n,i);if(a){t[a]=Ra(r),delete t[i];return}let o=e?Ha(i):String(i).trim();o!==i&&delete t[i],t[o]=Ra(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return P.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&P.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[Na]=this[Na]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Ia(e);t[r]||(Ua(n,e),t[r]=!0)}return P.isArray(e)?e.forEach(r):r(e),this}};Wa.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),P.reduceDescriptors(Wa.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),P.freezeMethods(Wa);function Ga(e,t){let n=this||Aa,r=t||n,i=Wa.from(r.headers),a=r.data;return P.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Ka(e){return!!(e&&e.__CANCEL__)}var qa=class extends F{constructor(e,t,n){super(e??`canceled`,F.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function Ja(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new F(`Request failed with status code `+n.status,[F.ERR_BAD_REQUEST,F.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Ya(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function Xa(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Za(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Qa=(e,t,n=3)=>{let r=0,i=Xa(50,250);return Za(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a,e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},$a=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},eo=e=>(...t)=>P.asap(()=>e(...t)),to=L.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,L.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(L.origin),L.navigator&&/(msie|trident)/i.test(L.navigator.userAgent)):()=>!0,no=L.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];P.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),P.isString(r)&&s.push(`path=${r}`),P.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),P.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.match(RegExp(`(?:^|; )`+e+`=([^;]*)`));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function ro(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function io(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function ao(e,t,n){let r=!ro(t);return e&&(r||n==0)?io(e,t):t}var oo=e=>e instanceof Wa?{...e}:e;function so(e,t){t||={};let n={};function r(e,t,n,r){return P.isPlainObject(e)&&P.isPlainObject(t)?P.merge.call({caseless:r},e,t):P.isPlainObject(t)?P.merge({},t):P.isArray(t)?t.slice():t}function i(e,t,n,i){if(!P.isUndefined(t))return r(e,t,n,i);if(!P.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!P.isUndefined(t))return r(void 0,t)}function o(e,t){if(!P.isUndefined(t))return r(void 0,t);if(!P.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(oo(e),oo(t),n,!0)};return P.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=P.hasOwnProp(c,r)?c[r]:i,o=a(e[r],t[r],r);P.isUndefined(o)&&a!==s||(n[r]=o)}),n}var co=e=>{let t=so({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;if(t.headers=o=Wa.from(o),t.url=ha(ao(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``))),P.isFormData(n)){if(L.hasStandardBrowserEnv||L.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(P.isFunction(n.getHeaders)){let e=n.getHeaders(),t=[`content-type`,`content-length`];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&o.set(e,n)})}}if(L.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&to(t.url))){let e=i&&a&&no.read(a);e&&o.set(i,e)}return t},lo=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=co(e),i=r.data,a=Wa.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Wa.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());Ja(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new F(`Request aborted`,F.ECONNABORTED,e,h)),null)},h.onerror=function(t){let r=new F(t&&t.message?t.message:`Network Error`,F.ERR_NETWORK,e,h);r.event=t||null,n(r),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||_a;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new F(t,i.clarifyTimeoutError?F.ETIMEDOUT:F.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&P.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),P.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Qa(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Qa(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new qa(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=Ya(r.url);if(_&&L.protocols.indexOf(_)===-1){n(new F(`Unsupported protocol `+_+`:`,F.ERR_BAD_REQUEST,e));return}h.send(i||null)})},uo=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof F?t:new qa(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new F(`timeout of ${t}ms exceeded`,F.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>P.asap(o),s}},fo=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},po=async function*(e,t){for await(let n of mo(e))yield*fo(n,t)},mo=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},ho=(e,t,n,r)=>{let i=po(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},R=64*1024,{isFunction:z}=P,go=(({Request:e,Response:t})=>({Request:e,Response:t}))(P.global),{ReadableStream:_o,TextEncoder:vo}=P.global,yo=(e,...t)=>{try{return!!e(...t)}catch{return!1}},bo=e=>{e=P.merge.call({skipUndefined:!0},go,e);let{fetch:t,Request:n,Response:r}=e,i=t?z(t):typeof fetch==`function`,a=z(n),o=z(r);if(!i)return!1;let s=i&&z(_o),c=i&&(typeof vo==`function`?(e=>t=>e.encode(t))(new vo):async e=>new Uint8Array(await new n(e).arrayBuffer())),l=a&&s&&yo(()=>{let e=!1,t=new _o,r=new n(L.origin,{body:t,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return t.cancel(),e&&!r}),u=o&&s&&yo(()=>P.isReadableStream(new r(``).body)),d={stream:u&&(e=>e.body)};i&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new F(`Response type '${e}' is not supported`,F.ERR_NOT_SUPPORT,n)})});let f=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new n(L.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(P.isArrayBufferView(e)||P.isArrayBuffer(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e+=``),P.isString(e))return(await c(e)).byteLength},p=async(e,t)=>P.toFiniteNumber(e.getContentLength())??f(t);return async e=>{let{url:i,method:o,data:s,signal:c,cancelToken:f,timeout:m,onDownloadProgress:h,onUploadProgress:g,responseType:_,headers:v,withCredentials:y=`same-origin`,fetchOptions:b}=co(e),x=t||fetch;_=_?(_+``).toLowerCase():`text`;let S=uo([c,f&&f.toAbortSignal()],m),C=null,w=S&&S.unsubscribe&&(()=>{S.unsubscribe()}),ee;try{if(g&&l&&o!==`get`&&o!==`head`&&(ee=await p(v,s))!==0){let e=new n(i,{method:`POST`,body:s,duplex:`half`}),t;if(P.isFormData(s)&&(t=e.headers.get(`content-type`))&&v.setContentType(t),e.body){let[t,n]=$a(ee,Qa(eo(g)));s=ho(e.body,R,t,n)}}P.isString(y)||(y=y?`include`:`omit`);let t=a&&`credentials`in n.prototype,c={...b,signal:S,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:`half`,credentials:t?y:void 0};C=a&&new n(i,c);let f=await(a?x(C,b):x(i,c)),m=u&&(_===`stream`||_===`response`);if(u&&(h||m&&w)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=f[t]});let t=P.toFiniteNumber(f.headers.get(`content-length`)),[n,i]=h&&$a(t,Qa(eo(h),!0))||[];f=new r(ho(f.body,R,n,()=>{i&&i(),w&&w()}),e)}_||=`text`;let te=await d[P.findKey(d,_)||`text`](f,e);return!m&&w&&w(),await new Promise((t,n)=>{Ja(t,n,{data:te,headers:Wa.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:C})})}catch(t){throw w&&w(),t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new F(`Network Error`,F.ERR_NETWORK,e,C,t&&t.response),{cause:t.cause||t}):F.from(t,t&&t.code,e,C,t&&t.response)}}},xo=new Map,So=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=xo;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:bo(t)),l=c;return c};So();var Co={http:null,xhr:lo,fetch:{get:So}};P.forEach(Co,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var B=e=>`- ${e}`,wo=e=>P.isFunction(e)||e===null||e===!1;function To(e,t){e=P.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!wo(r)&&(i=Co[(n=String(r)).toLowerCase()],i===void 0))throw new F(`Unknown adapter '${n}'`);if(i&&(P.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new F(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(B).join(`
`):` `+B(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var Eo={getAdapter:To,adapters:Co};function Do(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qa(null,e)}function Oo(e){return Do(e),e.headers=Wa.from(e.headers),e.data=Ga.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Eo.getAdapter(e.adapter||Aa.adapter,e)(e).then(function(t){return Do(e),t.data=Ga.call(e,e.transformResponse,t),t.headers=Wa.from(t.headers),t},function(t){return Ka(t)||(Do(e),t&&t.response&&(t.response.data=Ga.call(e,e.transformResponse,t.response),t.response.headers=Wa.from(t.response.headers))),Promise.reject(t)})}var ko=`1.15.0`,Ao={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{Ao[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var jo={};Ao.transitional=function(e,t,n){function r(e,t){return`[Axios v`+ko+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new F(r(i,` has been removed`+(t?` in `+t:``)),F.ERR_DEPRECATED);return t&&!jo[i]&&(jo[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},Ao.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Mo(e,t,n){if(typeof e!=`object`)throw new F(`options must be an object`,F.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new F(`option `+a+` must be `+n,F.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new F(`Unknown option `+a,F.ERR_BAD_OPTION)}}var V={assertOptions:Mo,validators:Ao},No=V.validators,Po=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ga,response:new ga}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=so(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&V.assertOptions(n,{silentJSONParsing:No.transitional(No.boolean),forcedJSONParsing:No.transitional(No.boolean),clarifyTimeoutError:No.transitional(No.boolean),legacyInterceptorReqResOrdering:No.transitional(No.boolean)},!1),r!=null&&(P.isFunction(r)?t.paramsSerializer={serialize:r}:V.assertOptions(r,{encode:No.function,serialize:No.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),V.assertOptions(t,{baseUrl:No.spelling(`baseURL`),withXsrfToken:No.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&P.merge(i.common,i[t.method]);i&&P.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=Wa.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||_a;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Oo.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Oo.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=so(this.defaults,e),ha(ao(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};P.forEach([`delete`,`get`,`head`,`options`],function(e){Po.prototype[e]=function(t,n){return this.request(so(n||{},{method:e,url:t,data:(n||{}).data}))}}),P.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(so(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Po.prototype[e]=t(),Po.prototype[e+`Form`]=t(!0)});var Fo=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new qa(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Io(e){return function(t){return e.apply(null,t)}}function Lo(e){return P.isObject(e)&&e.isAxiosError===!0}var Ro={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ro).forEach(([e,t])=>{Ro[t]=e});function zo(e){let t=new Po(e),n=Zr(Po.prototype.request,t);return P.extend(n,Po.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return zo(so(e,t))},n}var H=zo(Aa);H.Axios=Po,H.CanceledError=qa,H.CancelToken=Fo,H.isCancel=Ka,H.VERSION=ko,H.toFormData=I,H.AxiosError=F,H.Cancel=H.CanceledError,H.all=function(e){return Promise.all(e)},H.spread=Io,H.isAxiosError=Lo,H.mergeConfig=so,H.AxiosHeaders=Wa,H.formToJSON=e=>Oa(P.isHTMLForm(e)?new FormData(e):e),H.getAdapter=Eo.getAdapter,H.HttpStatusCode=Ro,H.default=H;var Bo=(0,v.createContext)(),Vo=({children:e})=>{let t=`http://localhost:4000`;console.log(`🔥 Backend URL:`,t);let[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)(localStorage.getItem(`token`)||``),[o,s]=(0,v.useState)(null),c=async()=>{console.log(`📡 Calling getDoctorsData API...`);try{let{data:e}=await H.get(`${t}/api/doctor/list`);console.log(`✅ Doctors API Response:`,e),e.success?r(e.doctors):(console.log(`❌ API returned success false`),j.error(e.message))}catch(e){console.log(`❌ Doctors API Error:`,e),j.error(e.message)}},l=async()=>{console.log(`📡 Calling loadUserProfileData API...`),console.log(`🔑 Token:`,i);try{let{data:e}=await H.get(`${t}/api/user/get-profile`,{headers:{token:i}});console.log(`✅ User Profile Response:`,e),e.success?s(e.userData):(console.log(`❌ Profile API returned false`),j.error(e.message))}catch(e){console.log(`❌ Profile API Error:`,e),j.error(e.message)}};(0,v.useEffect)(()=>{console.log(`⚡ useEffect: backendUrl changed`),c()},[t]),(0,v.useEffect)(()=>{console.log(`⚡ useEffect: token changed`),i?l():(console.log(`⚠️ No token found, clearing userData`),s(null))},[i]);let u={doctors:n,getDoctorsData:c,currencySymbol:`₹`,backendUrl:t,token:i,setToken:a,userData:o,setUserData:s,loadUserProfileData:l};return(0,A.jsx)(Bo.Provider,{value:u,children:e})},Ho=()=>{let e=dt(),{doctors:t}=(0,v.useContext)(Bo),[n,r]=(0,v.useState)(0),i=(0,v.useRef)(null),a=t.slice(0,10),o=a.length-5,s=()=>{clearInterval(i.current),i.current=setInterval(()=>{r(e=>e>=o?0:e+1)},2500)};(0,v.useEffect)(()=>(s(),()=>clearInterval(i.current)),[o]);let c=e=>{r(e),s()};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        /* ── KEYFRAMES ── */
        @keyframes td-mesh-breathe {
          0%,100% { filter: hue-rotate(0deg) brightness(1); }
          50%      { filter: hue-rotate(8deg) brightness(1.04); }
        }
        @keyframes td-orb-drift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(22px,-16px) scale(1.06); }
          66%     { transform: translate(-16px,20px) scale(0.96); }
        }
        @keyframes td-orb-drift2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(-26px,18px) scale(1.07); }
          75%     { transform: translate(16px,-12px) scale(0.95); }
        }
        @keyframes td-shimmer-txt {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes td-dot-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.6); }
          50%     { box-shadow: 0 0 0 8px rgba(99,102,241,0); }
        }
        @keyframes td-slide-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes td-card-in {
          from { opacity: 0; transform: translateY(28px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes td-shine-sweep {
          0%       { left: -100%; }
          55%,100% { left: 140%; }
        }
        @keyframes td-scan {
          0%   { top: -2px; opacity: 1; }
          88%  { opacity: 0.3; }
          100% { top: 104%; opacity: 0; }
        }
        @keyframes td-float-stat-a {
          0%,100% { transform: translateY(0) rotate(-0.5deg); }
          50%     { transform: translateY(-7px) rotate(0.5deg); }
        }
        @keyframes td-float-stat-b {
          0%,100% { transform: translateY(0) rotate(0.5deg); }
          50%     { transform: translateY(-5px) rotate(-0.5deg); }
        }
        @keyframes td-avail-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50%     { box-shadow: 0 0 0 5px rgba(16,185,129,0); }
        }
        @keyframes td-btn-shine {
          0%       { left: -100%; }
          55%,100% { left: 140%; }
        }

        /* ── ECG ANIMATIONS ── */
        @keyframes ecg-travel {
          0%   { stroke-dashoffset: 2400; opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ecg-travel-2 {
          0%   { stroke-dashoffset: 2400; opacity: 0; }
          5%   { opacity: 0.7; }
          90%  { opacity: 0.7; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ecg-travel-3 {
          0%   { stroke-dashoffset: 2400; opacity: 0; }
          5%   { opacity: 0.4; }
          90%  { opacity: 0.4; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ecg-ripple {
          0%   { r: 3;  opacity: 0.8; }
          100% { r: 22; opacity: 0; }
        }
        @keyframes ecg-ripple2 {
          0%   { r: 2;  opacity: 0.6; }
          100% { r: 16; opacity: 0; }
        }
        @keyframes hb-pulse {
          0%,100% { transform: scale(1);   opacity: 0.18; }
          15%     { transform: scale(1.22); opacity: 0.32; }
          30%     { transform: scale(0.96); opacity: 0.18; }
          45%     { transform: scale(1.12); opacity: 0.26; }
          60%     { transform: scale(1);   opacity: 0.18; }
        }
        @keyframes hb-pulse-2 {
          0%,100% { transform: scale(1);   opacity: 0.12; }
          15%     { transform: scale(1.18); opacity: 0.22; }
          30%     { transform: scale(0.97); opacity: 0.12; }
          45%     { transform: scale(1.09); opacity: 0.18; }
          60%     { transform: scale(1);   opacity: 0.12; }
        }
        @keyframes ecg-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ecg-scan-bar {
          0%   { left: -8%; opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 0.8; }
          100% { left: 108%;  opacity: 0; }
        }

        /* ── ROOT ── */
        .td-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          padding: 30px 0 10px;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(ellipse 70% 60% at 5% 10%,  rgba(99,102,241,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 60% 55% at 95% 90%,  rgba(59,130,246,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%,  rgba(139,92,246,0.06) 0%, transparent 65%),
            radial-gradient(ellipse 40% 35% at 80% 15%,  rgba(6,182,212,0.07)  0%, transparent 55%),
            radial-gradient(ellipse 45% 40% at 15% 85%,  rgba(16,185,129,0.05) 0%, transparent 55%),
            #f0f4ff;
          animation: td-mesh-breathe 16s ease-in-out infinite;
        }

        .td-root::before {
          content: '';
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* ── ECG CANVAS LAYER ── */
        .td-ecg-layer {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          overflow: hidden;
        }

        .td-ecg-svg {
          position: absolute; width: 100%; height: 100%;
          animation: ecg-fade-in 1.2s ease both;
        }

        .ecg-line-1 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel 7s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        .ecg-line-2 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-2 7s cubic-bezier(0.4,0,0.6,1) 3.5s infinite;
        }
        .ecg-line-3 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-3 9s cubic-bezier(0.4,0,0.6,1) 1.5s infinite;
        }
        .ecg-line-4 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-2 9s cubic-bezier(0.4,0,0.6,1) 5s infinite;
        }
        .ecg-line-5 {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: ecg-travel-3 11s cubic-bezier(0.4,0,0.6,1) 2.8s infinite;
        }

        .ecg-ripple-1 { animation: ecg-ripple  1.4s ease-out 1.4s infinite; }
        .ecg-ripple-2 { animation: ecg-ripple2 1.4s ease-out 1.55s infinite; }
        .ecg-ripple-3 { animation: ecg-ripple  1.4s ease-out 4.9s infinite; }
        .ecg-ripple-4 { animation: ecg-ripple2 1.4s ease-out 5.05s infinite; }
        .ecg-ripple-5 { animation: ecg-ripple  1.4s ease-out 3.2s infinite; }
        .ecg-ripple-6 { animation: ecg-ripple2 1.4s ease-out 3.35s infinite; }

        .td-ecg-scanbar {
          position: absolute; top: 0; bottom: 0; width: 8px;
          background: linear-gradient(90deg,
            transparent,
            rgba(99,102,241,0.18) 30%,
            rgba(255,255,255,0.55) 50%,
            rgba(99,102,241,0.18) 70%,
            transparent
          );
          animation: ecg-scan-bar 7s cubic-bezier(0.4,0,0.6,1) infinite;
          pointer-events: none;
        }
        .td-ecg-scanbar-2 {
          position: absolute; top: 0; bottom: 0; width: 8px;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.12) 30%,
            rgba(255,255,255,0.35) 50%,
            rgba(59,130,246,0.12) 70%,
            transparent
          );
          animation: ecg-scan-bar 9s cubic-bezier(0.4,0,0.6,1) 4s infinite;
          pointer-events: none;
        }

        .td-heart-bg {
          position: absolute; pointer-events: none;
          animation: hb-pulse 1.2s ease-in-out infinite;
        }
        .td-heart-bg-2 {
          position: absolute; pointer-events: none;
          animation: hb-pulse-2 1.2s ease-in-out 0.6s infinite;
        }

        .td-orb { position: absolute; border-radius: 50%; pointer-events: none; }
        .td-orb-1 {
          width: 520px; height: 520px; top: -180px; left: -160px; z-index: 1;
          background: radial-gradient(circle at 40% 40%, rgba(99,102,241,0.14) 0%, transparent 65%);
          animation: td-orb-drift 12s ease-in-out infinite; filter: blur(2px);
        }
        .td-orb-2 {
          width: 440px; height: 440px; bottom: -120px; right: -120px; z-index: 1;
          background: radial-gradient(circle at 60% 60%, rgba(59,130,246,0.12) 0%, transparent 65%);
          animation: td-orb-drift2 15s ease-in-out infinite; filter: blur(2px);
        }
        .td-orb-3 {
          width: 260px; height: 260px; top: 38%; left: 44%; z-index: 1;
          background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%);
          animation: td-orb-drift 10s ease-in-out infinite reverse;
        }

        .td-scanline {
          position: absolute; left: 0; right: 0; height: 2px; z-index: 3;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(99,102,241,0.25) 35%,
            rgba(255,255,255,0.8) 50%,
            rgba(99,102,241,0.25) 65%,
            transparent 100%
          );
          animation: td-scan 11s linear infinite;
          pointer-events: none;
        }

        .td-topline {
          position: absolute; top: 0; left: 0; right: 0; height: 2px; z-index: 4;
          background: linear-gradient(90deg,
            transparent,
            rgba(99,102,241,0.4) 25%,
            rgba(59,130,246,0.8) 50%,
            rgba(99,102,241,0.4) 75%,
            transparent
          );
          box-shadow: 0 0 16px rgba(99,102,241,0.3);
        }

        .td-bottomline {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px; z-index: 4;
          background: linear-gradient(90deg,
            transparent,
            rgba(99,102,241,0.2) 30%,
            rgba(59,130,246,0.4) 50%,
            rgba(99,102,241,0.2) 70%,
            transparent
          );
        }

        /* ── HEADING ── */
        .td-head {
          text-align: center;
          margin-bottom: 22px;
          position: relative; z-index: 10;
          padding: 0 14px;
          animation: td-slide-up 0.7s ease both;
        }

        .td-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.22);
          border-radius: 100px; padding: 6px 18px 6px 12px;
          margin-bottom: 18px;
          backdrop-filter: blur(8px);
        }

        .td-eye-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #6366f1; flex-shrink: 0;
          animation: td-dot-pulse 2s ease-in-out infinite;
        }

        .td-eye-txt {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          background: linear-gradient(90deg, #6366f1 0%, #3b82f6 50%, #6366f1 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: td-shimmer-txt 3s linear infinite;
        }

        .td-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(38px, 4.5vw, 54px);
          font-weight: 400; color: #0f172a;
          letter-spacing: -1.5px; line-height: 1.1;
          margin-bottom: 12px;
        }

        .td-title em {
          font-style: italic;
          background: linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 16px rgba(99,102,241,0.3));
        }

        .td-sub {
          font-size: 15px; font-weight: 300; color: #64748b;
          max-width: 380px; margin: 0 auto; line-height: 1.75;
        }

        /* ── GLASS STAT CARDS ── */
        .td-stats {
          display: flex; justify-content: center; gap: 14px;
          margin-bottom: 52px; flex-wrap: wrap; padding: 0 24px;
          position: relative; z-index: 10;
        }

        .td-stat-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 18px; padding: 14px 22px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 8px 32px rgba(99,102,241,0.08), 0 0 0 1px rgba(255,255,255,0.7);
          transition: all 0.3s ease; cursor: default;
        }

        .td-stat-card:nth-child(1) { animation: td-card-in 0.5s 0.15s ease both, td-float-stat-a 5s 1s ease-in-out infinite; }
        .td-stat-card:nth-child(2) { animation: td-card-in 0.5s 0.28s ease both, td-float-stat-b 6s 1.2s ease-in-out infinite; }
        .td-stat-card:nth-child(3) { animation: td-card-in 0.5s 0.41s ease both, td-float-stat-a 4.5s 1.4s ease-in-out infinite; }

        .td-stat-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 48px rgba(99,102,241,0.15), 0 0 0 1.5px rgba(99,102,241,0.25);
        }

        .td-stat-icon {
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 19px; flex-shrink: 0;
        }

        .td-stat-icon.a {
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.1));
          box-shadow: 0 4px 12px rgba(99,102,241,0.15);
        }
        .td-stat-icon.b {
          background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(6,182,212,0.1));
          box-shadow: 0 4px 12px rgba(59,130,246,0.15);
        }
        .td-stat-icon.c {
          background: linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.1));
          box-shadow: 0 4px 12px rgba(16,185,129,0.15);
        }

        .td-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; color: #0f172a; line-height: 1; letter-spacing: -0.5px;
        }
        .td-stat-num span { color: #6366f1; }
        .td-stat-lbl { font-size: 11px; color: #94a3b8; margin-top: 2px; font-weight: 300; }

        /* ── SLIDER WRAPPER ── */
        .td-slider-outer {
          position: relative; z-index: 10;
          padding: 0 28px;
        }

        .td-slider-viewport {
          overflow: hidden;
          border-radius: 12px;
        }

        .td-slider-track {
          display: flex;
          gap: 20px;
          transition: transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
          will-change: transform;
        }

        /* Each card in slider takes exactly 1/5 of viewport minus gaps */
        .td-slider-track .td-card {
          flex: 0 0 calc((100%) / 5 - 16px);
          min-width: 0;
        }

        /* Prev / Next arrow buttons */
        .td-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 50%; z-index: 20;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(99,102,241,0.25);
          box-shadow: 0 4px 16px rgba(99,102,241,0.15);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; font-size: 16px; color: #6366f1;
          transition: all 0.25s ease;
        }
        .td-arrow:hover {
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: #fff; border-color: transparent;
          box-shadow: 0 8px 24px rgba(99,102,241,0.35);
        }
        .td-arrow-prev { left: 0; }
        .td-arrow-next { right: 0; }

        /* Dot indicators */
        .td-dots {
          display: flex; justify-content: center; gap: 8px;
          margin-top: 22px;
        }
        .td-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(99,102,241,0.2);
          border: none; cursor: pointer; padding: 0;
          transition: all 0.3s ease;
        }
        .td-dot.active {
          background: #6366f1;
          width: 22px; border-radius: 100px;
          box-shadow: 0 0 8px rgba(99,102,241,0.4);
        }

        /* ── DOCTOR CARD (unchanged) ── */
        .td-card {
          border-radius: 22px; overflow: hidden; cursor: pointer;
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 20px rgba(99,102,241,0.07), inset 0 1px 0 rgba(255,255,255,0.8);
          transition: all 0.4s cubic-bezier(0.25,0.8,0.25,1);
          position: relative;
        }

        .td-card:nth-child(1)  { animation: td-card-in 0.5s 0.05s ease both; }
        .td-card:nth-child(2)  { animation: td-card-in 0.5s 0.10s ease both; }
        .td-card:nth-child(3)  { animation: td-card-in 0.5s 0.15s ease both; }
        .td-card:nth-child(4)  { animation: td-card-in 0.5s 0.20s ease both; }
        .td-card:nth-child(5)  { animation: td-card-in 0.5s 0.25s ease both; }
        .td-card:nth-child(6)  { animation: td-card-in 0.5s 0.30s ease both; }
        .td-card:nth-child(7)  { animation: td-card-in 0.5s 0.35s ease both; }
        .td-card:nth-child(8)  { animation: td-card-in 0.5s 0.40s ease both; }
        .td-card:nth-child(9)  { animation: td-card-in 0.5s 0.45s ease both; }
        .td-card:nth-child(10) { animation: td-card-in 0.5s 0.50s ease both; }

        .td-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          pointer-events: none; z-index: 5;
        }
        .td-card:hover::before { animation: td-shine-sweep 0.55s ease forwards; }

        .td-card::after {
          content: ''; position: absolute; inset: 0; z-index: 4;
          background: linear-gradient(160deg, rgba(99,102,241,0.04), rgba(59,130,246,0.03));
          opacity: 0; transition: opacity 0.3s; border-radius: inherit; pointer-events: none;
        }
        .td-card:hover::after { opacity: 1; }

        .td-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 60px rgba(99,102,241,0.18), 0 0 0 1.5px rgba(99,102,241,0.3);
          background: rgba(255,255,255,0.97);
        }

        .td-img-wrap {
          height: 186px;
          overflow: hidden; position: relative;
          background: linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%);
        }

        .td-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          transition: transform 0.45s ease;
        }
        .td-card:hover .td-img-wrap img { transform: scale(1.06); }

        .td-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.08) 100%);
          pointer-events: none;
        }

        .td-avail {
          position: absolute; top: 10px; right: 10px;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(8px);
          border-radius: 100px; padding: 4px 10px;
          font-size: 10px; font-weight: 600;
          display: flex; align-items: center; gap: 5px;
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          color: #334155; z-index: 3;
        }

        .td-avail-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .dot-on  { background: #10b981; animation: td-avail-pulse 2s ease-in-out infinite; }
        .dot-off { background: #cbd5e1; }

        .td-info { padding: 15px 16px 16px; position: relative; z-index: 3; }

        .td-spec {
          font-size: 9px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #c4b5fd; margin-bottom: 4px;
        }

        .td-name {
          font-family: 'DM Serif Display', serif;
          font-size: 15px; font-weight: 400; color: #0f172a;
          line-height: 1.2; margin-bottom: 12px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        .td-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(99,102,241,0.08);
        }

        .td-stars { font-size: 10px; color: #f59e0b; letter-spacing: 1px; }

        .td-badge {
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(59,130,246,0.08));
          color: #6366f1;
          padding: 3px 9px; border-radius: 100px;
          border: 1px solid rgba(99,102,241,0.18);
        }

        .td-book-btn {
          display: flex; align-items: center; justify-content: center; gap: 5px;
          width: 100%; margin-top: 10px; padding: 9px;
          background: linear-gradient(135deg, #6366f1 0%, #3b82f6 100%);
          color: #fff; border: none; border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          cursor: pointer;
          opacity: 0; transform: translateY(6px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
          position: relative; overflow: hidden; z-index: 3;
        }
        .td-card:hover .td-book-btn { opacity: 1; transform: translateY(0); }

        .td-book-btn::before {
          content: '';
          position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: td-btn-shine 3s ease-in-out infinite;
          pointer-events: none;
        }

        /* ── MORE BUTTON ── */
        .td-more-wrap { text-align: center; margin-top: 48px; position: relative; z-index: 10; }

        .td-more-btn {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(99,102,241,0.3);
          color: #6366f1;
          border-radius: 100px; padding: 14px 44px;
          font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.2px;
          box-shadow: 0 4px 20px rgba(99,102,241,0.1);
        }

        .td-more-btn::before {
          content: '';
          position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.1), transparent);
          animation: td-btn-shine 4s ease-in-out infinite;
          pointer-events: none;
        }

        .td-more-btn:hover {
          background: linear-gradient(135deg, #6366f1, #3b82f6);
          color: #fff; border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.35);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .td-slider-track .td-card { flex: 0 0 calc(100% / 4 - 15px); }
        }
        @media (max-width: 900px) {
          .td-slider-track .td-card { flex: 0 0 calc(100% / 3 - 14px); }
          .td-slider-outer { padding: 0 20px; }
        }
        @media (max-width: 640px) {
          .td-slider-track .td-card { flex: 0 0 calc(100% / 2 - 12px); }
          .td-slider-outer { padding: 0 16px; }
          .td-title { font-size: 34px; }
          .td-root { padding: 60px 0; }
          .td-stats { gap: 10px; padding: 0 16px; }
        }
      `}),(0,A.jsxs)(`div`,{className:`td-root`,children:[(0,A.jsxs)(`div`,{className:`td-ecg-layer`,children:[(0,A.jsxs)(`svg`,{className:`td-heart-bg`,style:{width:320,height:320,top:`8%`,left:`6%`,opacity:.18},viewBox:`0 0 100 100`,fill:`none`,children:[(0,A.jsx)(`path`,{d:`M50 85 C50 85 10 58 10 32 C10 20 20 12 32 16 C40 19 46 26 50 32 C54 26 60 19 68 16 C80 12 90 20 90 32 C90 58 50 85 50 85Z`,fill:`url(#hg1)`}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`hg1`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#6366f1`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#3b82f6`})]})})]}),(0,A.jsxs)(`svg`,{className:`td-heart-bg-2`,style:{width:200,height:200,bottom:`10%`,right:`8%`,opacity:.12},viewBox:`0 0 100 100`,fill:`none`,children:[(0,A.jsx)(`path`,{d:`M50 85 C50 85 10 58 10 32 C10 20 20 12 32 16 C40 19 46 26 50 32 C54 26 60 19 68 16 C80 12 90 20 90 32 C90 58 50 85 50 85Z`,fill:`url(#hg2)`}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`hg2`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#06b6d4`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#6366f1`})]})})]}),(0,A.jsx)(`div`,{className:`td-ecg-scanbar`}),(0,A.jsx)(`div`,{className:`td-ecg-scanbar-2`}),(0,A.jsxs)(`svg`,{className:`td-ecg-svg`,viewBox:`0 0 1400 800`,preserveAspectRatio:`xMidYMid slice`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsxs)(`defs`,{children:[(0,A.jsxs)(`filter`,{id:`ecg-glow-main`,x:`-20%`,y:`-100%`,width:`140%`,height:`300%`,children:[(0,A.jsx)(`feGaussianBlur`,{stdDeviation:`3`,result:`blur`}),(0,A.jsxs)(`feMerge`,{children:[(0,A.jsx)(`feMergeNode`,{in:`blur`}),(0,A.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,A.jsxs)(`filter`,{id:`ecg-glow-soft`,x:`-20%`,y:`-100%`,width:`140%`,height:`300%`,children:[(0,A.jsx)(`feGaussianBlur`,{stdDeviation:`5`,result:`blur`}),(0,A.jsxs)(`feMerge`,{children:[(0,A.jsx)(`feMergeNode`,{in:`blur`}),(0,A.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,A.jsxs)(`filter`,{id:`ecg-glow-strong`,x:`-30%`,y:`-150%`,width:`160%`,height:`400%`,children:[(0,A.jsx)(`feGaussianBlur`,{stdDeviation:`8`,result:`blur1`}),(0,A.jsx)(`feGaussianBlur`,{stdDeviation:`2`,result:`blur2`,in:`SourceGraphic`}),(0,A.jsxs)(`feMerge`,{children:[(0,A.jsx)(`feMergeNode`,{in:`blur1`}),(0,A.jsx)(`feMergeNode`,{in:`blur2`}),(0,A.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,A.jsxs)(`linearGradient`,{id:`ecg-grad-1`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(99,102,241,0)`}),(0,A.jsx)(`stop`,{offset:`20%`,stopColor:`rgba(99,102,241,0.7)`}),(0,A.jsx)(`stop`,{offset:`50%`,stopColor:`rgba(139,92,246,0.9)`}),(0,A.jsx)(`stop`,{offset:`80%`,stopColor:`rgba(59,130,246,0.7)`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(59,130,246,0)`})]}),(0,A.jsxs)(`linearGradient`,{id:`ecg-grad-2`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(59,130,246,0)`}),(0,A.jsx)(`stop`,{offset:`25%`,stopColor:`rgba(6,182,212,0.5)`}),(0,A.jsx)(`stop`,{offset:`55%`,stopColor:`rgba(59,130,246,0.7)`}),(0,A.jsx)(`stop`,{offset:`85%`,stopColor:`rgba(99,102,241,0.5)`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(99,102,241,0)`})]}),(0,A.jsxs)(`linearGradient`,{id:`ecg-grad-3`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`rgba(139,92,246,0)`}),(0,A.jsx)(`stop`,{offset:`30%`,stopColor:`rgba(99,102,241,0.35)`}),(0,A.jsx)(`stop`,{offset:`60%`,stopColor:`rgba(59,130,246,0.45)`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`rgba(6,182,212,0)`})]})]}),(0,A.jsx)(`path`,{className:`ecg-line-1`,d:`\r
                M-200,200\r
                L80,200\r
                Q90,200 95,196 Q100,192 105,200\r
                L170,200\r
                Q175,200 178,188 Q181,176 184,200\r
                L200,200\r
                L210,120 L215,240 L220,165 L225,200\r
                L270,200\r
                Q280,200 285,188 Q290,176 295,200\r
                L360,200\r
                Q365,200 368,190 Q371,180 374,200\r
                L440,200\r
                L450,125 L455,245 L460,168 L465,200\r
                L520,200\r
                Q528,200 532,190 Q536,180 540,200\r
                L610,200\r
                Q618,200 622,192 Q626,184 630,200\r
                L700,200\r
                L710,122 L715,242 L720,166 L725,200\r
                L790,200\r
                Q797,200 801,190 Q805,180 809,200\r
                L880,200\r
                L890,126 L895,244 L900,168 L905,200\r
                L970,200\r
                Q977,200 981,190 Q985,180 989,200\r
                L1060,200\r
                L1070,120 L1075,242 L1080,165 L1085,200\r
                L1150,200\r
                Q1157,200 1161,190 Q1165,180 1169,200\r
                L1240,200\r
                L1250,124 L1255,244 L1260,167 L1265,200\r
                L1350,200\r
                L1600,200\r
              `,fill:`none`,stroke:`url(#ecg-grad-1)`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,filter:`url(#ecg-glow-main)`}),(0,A.jsx)(`path`,{className:`ecg-line-1`,d:`\r
                M-200,200\r
                L80,200\r
                Q90,200 95,196 Q100,192 105,200\r
                L170,200\r
                Q175,200 178,188 Q181,176 184,200\r
                L200,200\r
                L210,120 L215,240 L220,165 L225,200\r
                L270,200\r
                Q280,200 285,188 Q290,176 295,200\r
                L360,200\r
                Q365,200 368,190 Q371,180 374,200\r
                L440,200\r
                L450,125 L455,245 L460,168 L465,200\r
                L520,200\r
                Q528,200 532,190 Q536,180 540,200\r
                L610,200\r
                Q618,200 622,192 Q626,184 630,200\r
                L700,200\r
                L710,122 L715,242 L720,166 L725,200\r
                L790,200\r
                Q797,200 801,190 Q805,180 809,200\r
                L880,200\r
                L890,126 L895,244 L900,168 L905,200\r
                L970,200\r
                Q977,200 981,190 Q985,180 989,200\r
                L1060,200\r
                L1070,120 L1075,242 L1080,165 L1085,200\r
                L1150,200\r
                Q1157,200 1161,190 Q1165,180 1169,200\r
                L1240,200\r
                L1250,124 L1255,244 L1260,167 L1265,200\r
                L1350,200\r
                L1600,200\r
              `,fill:`none`,stroke:`rgba(99,102,241,0.25)`,strokeWidth:`7`,strokeLinecap:`round`,strokeLinejoin:`round`,filter:`url(#ecg-glow-strong)`}),(0,A.jsx)(`circle`,{className:`ecg-ripple-1`,cx:`215`,cy:`200`,r:`3`,fill:`none`,stroke:`rgba(99,102,241,0.6)`,strokeWidth:`1.5`}),(0,A.jsx)(`circle`,{className:`ecg-ripple-2`,cx:`215`,cy:`200`,r:`2`,fill:`none`,stroke:`rgba(139,92,246,0.4)`,strokeWidth:`1`}),(0,A.jsx)(`path`,{className:`ecg-line-2`,d:`\r
                M-200,420\r
                L60,420\r
                Q68,420 72,412 Q76,404 80,420\r
                L150,420\r
                L160,345 L165,460 L170,380 L175,420\r
                L240,420\r
                Q248,420 252,410 Q256,400 260,420\r
                L330,420\r
                Q337,420 341,412 Q345,404 349,420\r
                L420,420\r
                L430,342 L435,462 L440,378 L445,420\r
                L510,420\r
                Q517,420 521,410 Q525,400 529,420\r
                L600,420\r
                L610,344 L615,462 L620,380 L625,420\r
                L695,420\r
                Q702,420 706,412 Q710,404 714,420\r
                L785,420\r
                L795,340 L800,462 L805,376 L810,420\r
                L880,420\r
                Q887,420 891,410 Q895,400 899,420\r
                L970,420\r
                L980,343 L985,462 L990,379 L995,420\r
                L1065,420\r
                Q1072,420 1076,412 Q1080,404 1084,420\r
                L1155,420\r
                L1165,342 L1170,462 L1175,378 L1180,420\r
                L1260,420\r
                L1600,420\r
              `,fill:`none`,stroke:`url(#ecg-grad-2)`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,filter:`url(#ecg-glow-soft)`}),(0,A.jsx)(`path`,{className:`ecg-line-2`,d:`\r
                M-200,420\r
                L60,420\r
                Q68,420 72,412 Q76,404 80,420\r
                L150,420\r
                L160,345 L165,460 L170,380 L175,420\r
                L240,420\r
                Q248,420 252,410 Q256,400 260,420\r
                L330,420\r
                Q337,420 341,412 Q345,404 349,420\r
                L420,420\r
                L430,342 L435,462 L440,378 L445,420\r
                L510,420\r
                Q517,420 521,410 Q525,400 529,420\r
                L600,420\r
                L610,344 L615,462 L620,380 L625,420\r
                L695,420\r
                Q702,420 706,412 Q710,404 714,420\r
                L785,420\r
                L795,340 L800,462 L805,376 L810,420\r
                L880,420\r
                Q887,420 891,410 Q895,400 899,420\r
                L970,420\r
                L980,343 L985,462 L990,379 L995,420\r
                L1065,420\r
                Q1072,420 1076,412 Q1080,404 1084,420\r
                L1155,420\r
                L1165,342 L1170,462 L1175,378 L1180,420\r
                L1260,420\r
                L1600,420\r
              `,fill:`none`,stroke:`rgba(59,130,246,0.18)`,strokeWidth:`8`,strokeLinecap:`round`,filter:`url(#ecg-glow-strong)`}),(0,A.jsx)(`circle`,{className:`ecg-ripple-3`,cx:`165`,cy:`420`,r:`3`,fill:`none`,stroke:`rgba(59,130,246,0.55)`,strokeWidth:`1.5`}),(0,A.jsx)(`circle`,{className:`ecg-ripple-4`,cx:`165`,cy:`420`,r:`2`,fill:`none`,stroke:`rgba(6,182,212,0.35)`,strokeWidth:`1`}),(0,A.jsx)(`path`,{className:`ecg-line-3`,d:`\r
                M-200,630\r
                L40,630\r
                Q47,630 51,622 Q55,614 59,630\r
                L130,630\r
                L140,560 L145,672 L150,592 L155,630\r
                L225,630\r
                Q232,630 236,620 Q240,610 244,630\r
                L315,630\r
                L325,558 L330,673 L335,590 L340,630\r
                L415,630\r
                Q422,630 426,620 Q430,610 434,630\r
                L510,630\r
                L520,556 L525,673 L530,590 L535,630\r
                L610,630\r
                Q617,630 621,620 Q625,610 629,630\r
                L705,630\r
                L715,558 L720,673 L725,592 L730,630\r
                L810,630\r
                Q817,630 821,620 Q825,610 829,630\r
                L905,630\r
                L915,557 L920,673 L925,591 L930,630\r
                L1010,630\r
                Q1017,630 1021,620 Q1025,610 1029,630\r
                L1110,630\r
                L1120,558 L1125,673 L1130,590 L1135,630\r
                L1230,630\r
                L1600,630\r
              `,fill:`none`,stroke:`url(#ecg-grad-3)`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`,filter:`url(#ecg-glow-soft)`}),(0,A.jsx)(`circle`,{className:`ecg-ripple-5`,cx:`145`,cy:`630`,r:`3`,fill:`none`,stroke:`rgba(139,92,246,0.5)`,strokeWidth:`1.5`}),(0,A.jsx)(`circle`,{className:`ecg-ripple-6`,cx:`145`,cy:`630`,r:`2`,fill:`none`,stroke:`rgba(99,102,241,0.3)`,strokeWidth:`1`}),(0,A.jsx)(`line`,{x1:`0`,y1:`200`,x2:`1400`,y2:`200`,stroke:`rgba(99,102,241,0.06)`,strokeWidth:`1`,strokeDasharray:`4 8`}),(0,A.jsx)(`line`,{x1:`0`,y1:`420`,x2:`1400`,y2:`420`,stroke:`rgba(59,130,246,0.05)`,strokeWidth:`1`,strokeDasharray:`4 8`}),(0,A.jsx)(`line`,{x1:`0`,y1:`630`,x2:`1400`,y2:`630`,stroke:`rgba(139,92,246,0.04)`,strokeWidth:`1`,strokeDasharray:`4 8`})]})]}),(0,A.jsx)(`div`,{className:`td-orb td-orb-1`}),(0,A.jsx)(`div`,{className:`td-orb td-orb-2`}),(0,A.jsx)(`div`,{className:`td-orb td-orb-3`}),(0,A.jsx)(`div`,{className:`td-scanline`}),(0,A.jsx)(`div`,{className:`td-topline`}),(0,A.jsx)(`div`,{className:`td-bottomline`}),(0,A.jsxs)(`div`,{className:`td-head`,children:[(0,A.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`8px`},children:(0,A.jsxs)(`div`,{className:`td-eyebrow`,children:[(0,A.jsx)(`span`,{className:`td-eye-dot`}),(0,A.jsx)(`span`,{className:`td-eye-txt`,children:`Hand-picked for you`})]})}),(0,A.jsxs)(`h2`,{className:`td-title`,children:[`Top `,(0,A.jsx)(`em`,{children:`Doctors`}),` to Book`]}),(0,A.jsx)(`p`,{className:`td-sub`,children:`Verified, board-certified specialists ready to see you today.`})]}),(0,A.jsxs)(`div`,{className:`td-slider-outer`,children:[(0,A.jsx)(`button`,{className:`td-arrow td-arrow-prev`,onClick:()=>{c(n<=0?o:n-1)},children:`‹`}),(0,A.jsx)(`div`,{className:`td-slider-viewport`,children:(0,A.jsx)(`div`,{className:`td-slider-track`,style:{transform:`translateX(calc(-${n} * (100% / 5 + 4px)))`},children:a.map((t,n)=>(0,A.jsxs)(`div`,{className:`td-card`,onClick:()=>{e(`/appointment/${t._id}`),scrollTo(0,0)},children:[(0,A.jsxs)(`div`,{className:`td-img-wrap`,children:[(0,A.jsx)(`img`,{src:t.image,alt:t.name}),(0,A.jsx)(`div`,{className:`td-img-overlay`}),(0,A.jsxs)(`div`,{className:`td-avail`,children:[(0,A.jsx)(`span`,{className:`td-avail-dot ${t.available?`dot-on`:`dot-off`}`}),t.available?`Available`:`Busy`]})]}),(0,A.jsxs)(`div`,{className:`td-info`,children:[(0,A.jsx)(`div`,{className:`td-spec`,children:t.speciality}),(0,A.jsx)(`div`,{className:`td-name`,children:t.name}),(0,A.jsxs)(`div`,{className:`td-footer`,children:[(0,A.jsx)(`div`,{className:`td-stars`,children:`★★★★★`}),(0,A.jsx)(`div`,{className:`td-badge`,children:t.available?`Top Rated`:`Verified`})]}),(0,A.jsx)(`button`,{className:`td-book-btn`,children:`Book Appointment →`})]})]},n))})}),(0,A.jsx)(`button`,{className:`td-arrow td-arrow-next`,onClick:()=>{c(n>=o?0:n+1)},children:`›`})]}),(0,A.jsx)(`div`,{className:`td-dots`,children:Array.from({length:o+1}).map((e,t)=>(0,A.jsx)(`button`,{className:`td-dot ${t===n?`active`:``}`,onClick:()=>c(t)},t))}),(0,A.jsx)(`div`,{className:`td-more-wrap`,children:(0,A.jsx)(`button`,{className:`td-more-btn`,onClick:()=>{e(`/doctors`),scrollTo(0,0)},children:`View All Doctors →`})})]})]})},Uo=()=>{let e=dt();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .bnr-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ── MAIN BANNER ── */
        .bnr-inner {
          position: relative;
          min-height: 320px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          overflow: hidden;
          background: #060912;
        }

        /* MESH GRADIENT BACKGROUND */
        .bnr-mesh {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(ellipse 60% 80% at 10% 50%, rgba(59,130,246,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 85% 20%, rgba(99,102,241,0.2) 0%, transparent 55%),
            radial-gradient(ellipse 40% 60% at 60% 90%, rgba(6,182,212,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 30% 40% at 40% 10%, rgba(139,92,246,0.1) 0%, transparent 50%),
            #060912;
          animation: bnr-mesh-shift 12s ease-in-out infinite alternate;
        }

        @keyframes bnr-mesh-shift {
          0%   { filter: hue-rotate(0deg) brightness(1); }
          50%  { filter: hue-rotate(8deg) brightness(1.05); }
          100% { filter: hue-rotate(-5deg) brightness(0.98); }
        }

        /* GRID TEXTURE */
        .bnr-grid-tex {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background-image:
            linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* SHIMMER SWEEP */
        .bnr-shimmer {
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(105deg,
            transparent 30%,
            rgba(255,255,255,0.03) 50%,
            transparent 70%
          );
          animation: bnr-shimmer-sweep 6s ease-in-out infinite;
          z-index: 2; pointer-events: none;
        }

        @keyframes bnr-shimmer-sweep {
          0%   { left: -100%; }
          60%  { left: 140%; }
          100% { left: 140%; }
        }

        /* TOP GLOW LINE */
        .bnr-topline {
          position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 3;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.6) 25%,
            rgba(99,102,241,1) 50%,
            rgba(6,182,212,0.6) 75%,
            transparent
          );
          box-shadow: 0 0 20px rgba(99,102,241,0.4);
        }

        /* BOTTOM GLOW LINE */
        .bnr-bottomline {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px; z-index: 3;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.3) 30%,
            rgba(99,102,241,0.5) 50%,
            rgba(59,130,246,0.3) 70%,
            transparent
          );
        }

        /* ── LEFT ── */
        .bnr-left {
          padding: 56px 64px;
          position: relative; z-index: 4;
        }

        /* PILLS */
        .bnr-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }

        .bnr-pill {
          display: inline-flex; align-items: center; gap: 6px;
          border: 1px solid rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.08);
          border-radius: 100px;
          padding: 4px 13px;
          font-size: 11px; font-weight: 500;
          color: #a5b4fc;
          letter-spacing: 0.3px;
          transition: all 0.25s;
        }

        .bnr-pill:hover {
          background: rgba(99,102,241,0.16);
          border-color: rgba(99,102,241,0.5);
        }

        .bnr-pill-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #818cf8;
          box-shadow: 0 0 5px #818cf8;
        }

        /* HEADING */
        .bnr-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }

        .bnr-title em {
          font-style: italic;
          background: linear-gradient(135deg, #60A5FA 0%, #818CF8 50%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bnr-sub {
          font-size: 14.5px; font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.85; max-width: 400px;
          margin-bottom: 36px;
        }

        /* ACTIONS */
        .bnr-actions { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }

        .bnr-btn-primary {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          color: #fff; border: none; border-radius: 100px;
          padding: 14px 32px;
          font-size: 13.5px; font-weight: 600;
          cursor: pointer; transition: all 0.3s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: 0.2px;
          box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 8px 24px rgba(99,102,241,0.35);
        }

        .bnr-btn-primary::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          transition: left 0.45s ease;
        }

        .bnr-btn-primary:hover::before { left: 100%; }
        .bnr-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 0 1px rgba(99,102,241,0.6), 0 14px 36px rgba(99,102,241,0.5);
        }

        .bnr-btn-ghost {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 14px 28px;
          font-size: 13.5px; font-weight: 500;
          cursor: pointer; transition: all 0.25s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          backdrop-filter: blur(4px);
        }

        .bnr-btn-ghost:hover {
          border-color: rgba(255,255,255,0.28);
          color: #fff;
          background: rgba(255,255,255,0.07);
        }

        /* TRUST LINE */
        .bnr-trust {
          display: flex; align-items: center; gap: 10px;
          margin-top: 20px;
        }

        .bnr-avatars { display: flex; }

        .bnr-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          border: 2px solid #060912;
          object-fit: cover;
          margin-left: -8px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; color: #fff; font-weight: 600;
          flex-shrink: 0;
          overflow: hidden;
        }

        .bnr-avatar:first-child { margin-left: 0; }

        .bnr-trust-text { font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 300; }
        .bnr-trust-text strong { color: rgba(255,255,255,0.65); font-weight: 600; }

        /* ── RIGHT IMAGE AREA ── */
        .bnr-right {
          position: relative; z-index: 4;
          width: 300px; min-height: 320px;
          flex-shrink: 0;
          display: flex; align-items: flex-end; justify-content: center;
        }

        .bnr-right img {
          height: 115%; width: auto;
          object-fit: contain; object-position: bottom;
          filter: drop-shadow(-20px 0 40px rgba(99,102,241,0.3));
          position: relative; z-index: 2;
        }

        /* FLOATING GLASS CARDS */
        .bnr-float-card {
          position: absolute;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 12px 16px;
          z-index: 5;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* card 1 — top left of image */
        .bnr-float-1 {
          top: 36px; left: -72px;
          display: flex; align-items: center; gap: 10px;
          animation: bnr-float-a 4s ease-in-out infinite;
          min-width: 170px;
        }

        /* card 2 — bottom right */
        .bnr-float-2 {
          bottom: 60px; right: -30px;
          animation: bnr-float-b 5s ease-in-out infinite;
          min-width: 150px;
        }

        /* card 3 — mid left */
        .bnr-float-3 {
          top: 50%; right: -20px;
          transform: translateY(-50%);
          animation: bnr-float-a 6s ease-in-out infinite reverse;
          min-width: 130px;
        }

        @keyframes bnr-float-a {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        @keyframes bnr-float-b {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(7px); }
        }

        .bnr-float-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(99,102,241,0.4);
        }

        .bnr-float-label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4); margin-bottom: 2px;
        }

        .bnr-float-val {
          font-size: 13px; font-weight: 700; color: #fff; line-height: 1;
        }

        .bnr-float-val span { color: #34d399; }

        /* rating stars */
        .bnr-stars { display: flex; gap: 2px; margin-bottom: 3px; }
        .bnr-star { font-size: 11px; color: #FBBF24; }

        /* pulsing green dot */
        .bnr-live-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 3px rgba(52,211,153,0.2);
          animation: bnr-live 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes bnr-live {
          0%,100% { box-shadow: 0 0 0 3px rgba(52,211,153,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(52,211,153,0.08); }
        }

        /* GLOW BEHIND IMAGE */
        .bnr-right-glow {
          position: absolute;
          bottom: -40px; left: 50%; transform: translateX(-50%);
          width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%);
          pointer-events: none; z-index: 1;
          animation: bnr-glow-pulse 4s ease-in-out infinite;
        }

        @keyframes bnr-glow-pulse {
          0%,100% { opacity: 0.8; transform: translateX(-50%) scale(1); }
          50%      { opacity: 1;   transform: translateX(-50%) scale(1.1); }
        }

        /* ── STATS STRIP ── */
        .bnr-stats {
          display: flex;
          background: #fff;
          border-top: 1px solid #eef0f6;
        }

        .bnr-stat {
          flex: 1;
          padding: 20px 28px;
          border-right: 1px solid #eef0f6;
          display: flex; align-items: center; gap: 14px;
          transition: background 0.2s;
          cursor: default;
        }

        .bnr-stat:last-child { border-right: none; }
        .bnr-stat:hover { background: #f8f9ff; }

        .bnr-stat-icon {
          width: 38px; height: 38px; border-radius: 11px;
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1));
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; flex-shrink: 0;
        }

        .bnr-stat-num {
          font-family: 'DM Serif Display', serif;
          font-size: 24px; font-weight: 400;
          color: #0D1F35; line-height: 1; letter-spacing: -0.5px;
        }

        .bnr-stat-num span { color: #6366F1; }
        .bnr-stat-lbl { font-size: 11px; color: #9ca3af; margin-top: 2px; font-weight: 300; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .bnr-inner { grid-template-columns: 1fr; }
          .bnr-left { padding: 44px 28px; }
          .bnr-title { font-size: 34px; }
          .bnr-right { display: none; }
          .bnr-stats { flex-wrap: wrap; }
          .bnr-stat { flex: 1 1 50%; border-bottom: 1px solid #eef0f6; }
        }

        @media (max-width: 480px) {
          .bnr-stat { flex: 1 1 100%; }
        }
      `}),(0,A.jsxs)(`div`,{className:`bnr-root`,children:[(0,A.jsxs)(`div`,{className:`bnr-inner`,children:[(0,A.jsx)(`div`,{className:`bnr-mesh`}),(0,A.jsx)(`div`,{className:`bnr-grid-tex`}),(0,A.jsx)(`div`,{className:`bnr-shimmer`}),(0,A.jsx)(`div`,{className:`bnr-topline`}),(0,A.jsx)(`div`,{className:`bnr-bottomline`}),(0,A.jsxs)(`div`,{className:`bnr-left`,children:[(0,A.jsx)(`div`,{className:`bnr-pills`,children:[`Free cancellation`,`Verified doctors`,`Instant confirmation`].map((e,t)=>(0,A.jsxs)(`span`,{className:`bnr-pill`,children:[(0,A.jsx)(`span`,{className:`bnr-pill-dot`}),e]},t))}),(0,A.jsxs)(`h2`,{className:`bnr-title`,children:[`Book with `,(0,A.jsx)(`em`,{children:`100+`}),(0,A.jsx)(`br`,{}),`Trusted Doctors`]}),(0,A.jsx)(`p`,{className:`bnr-sub`,children:`Join thousands of patients who found the right care at the right time. Create your free account and take charge of your health today.`}),(0,A.jsxs)(`div`,{className:`bnr-actions`,children:[(0,A.jsx)(`button`,{className:`bnr-btn-primary`,onClick:()=>{e(`/login`),scrollTo(0,0)},children:`Create free account`}),(0,A.jsx)(`button`,{className:`bnr-btn-ghost`,children:`Learn more →`})]}),(0,A.jsxs)(`div`,{className:`bnr-trust`,children:[(0,A.jsx)(`div`,{className:`bnr-avatars`,children:[`A`,`B`,`C`,`D`].map((e,t)=>(0,A.jsx)(`div`,{className:`bnr-avatar`,style:{background:[`linear-gradient(135deg,#3B82F6,#6366F1)`,`linear-gradient(135deg,#6366F1,#8B5CF6)`,`linear-gradient(135deg,#06B6D4,#3B82F6)`,`linear-gradient(135deg,#10B981,#06B6D4)`][t]},children:e},t))}),(0,A.jsxs)(`span`,{className:`bnr-trust-text`,children:[`Trusted by `,(0,A.jsx)(`strong`,{children:`50,000+`}),` patients across India`]})]})]}),(0,A.jsxs)(`div`,{className:`bnr-right`,children:[(0,A.jsx)(`div`,{className:`bnr-right-glow`}),(0,A.jsxs)(`div`,{className:`bnr-float-card bnr-float-1`,children:[(0,A.jsx)(`div`,{className:`bnr-float-icon`,children:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`white`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`bnr-float-label`,children:`Slots open`}),(0,A.jsxs)(`div`,{className:`bnr-float-val`,children:[(0,A.jsx)(`span`,{children:`24`}),` Today`]})]}),(0,A.jsx)(`div`,{className:`bnr-live-dot`,style:{marginLeft:`auto`}})]}),(0,A.jsxs)(`div`,{className:`bnr-float-card bnr-float-2`,children:[(0,A.jsx)(`div`,{className:`bnr-stars`,children:[...[,,,,,]].map((e,t)=>(0,A.jsx)(`span`,{className:`bnr-star`,children:`★`},t))}),(0,A.jsx)(`div`,{className:`bnr-float-val`,children:`4.9 / 5.0`}),(0,A.jsx)(`div`,{className:`bnr-float-label`,style:{marginTop:3},children:`Patient rating`})]}),(0,A.jsxs)(`div`,{className:`bnr-float-card bnr-float-3`,children:[(0,A.jsx)(`div`,{className:`bnr-float-label`,children:`Avg. response`}),(0,A.jsxs)(`div`,{className:`bnr-float-val`,style:{fontSize:16},children:[(0,A.jsx)(`span`,{children:`< 2`}),` hrs`]})]}),(0,A.jsx)(`img`,{src:_r.appointment_img,alt:`Book appointment`})]})]}),(0,A.jsx)(`div`,{className:`bnr-stats`,children:[{icon:`👥`,num:`50K`,suffix:`+`,lbl:`Patients Served`},{icon:`🩺`,num:`100`,suffix:`+`,lbl:`Verified Doctors`},{icon:`⭐`,num:`98`,suffix:`%`,lbl:`Satisfaction Rate`},{icon:`⚡`,num:`24`,suffix:`/7`,lbl:`Always Available`}].map((e,t)=>(0,A.jsxs)(`div`,{className:`bnr-stat`,children:[(0,A.jsx)(`div`,{className:`bnr-stat-icon`,children:e.icon}),(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`bnr-stat-num`,children:[e.num,(0,A.jsx)(`span`,{children:e.suffix})]}),(0,A.jsx)(`div`,{className:`bnr-stat-lbl`,children:e.lbl})]})]},t))})]})]})},Wo=()=>(0,A.jsxs)(`div`,{style:{background:`#FAFAF8`},children:[(0,A.jsx)(xr,{}),(0,A.jsx)(Sr,{}),(0,A.jsx)(Ho,{}),(0,A.jsx)(Uo,{})]}),Go=6,Ko=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,800;1,700;1,800&display=swap');

  .dp {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #F0F4FF; min-height: 100vh;
    position: relative; overflow-x: hidden;
  }
  .dp-bg-blob1 {
    position: fixed; pointer-events: none; z-index: 0;
    top: -180px; right: -180px; width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%); filter: blur(40px);
  }
  .dp-bg-blob2 {
    position: fixed; pointer-events: none; z-index: 0;
    bottom: -120px; left: -120px; width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 65%); filter: blur(40px);
  }
  .dp-bg-dots {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .dp-inner { position: relative; z-index: 1; padding: 52px 48px 90px; max-width: 1280px; margin: 0 auto; }

  /* HERO */
  .dp-hero { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 48px; gap: 24px; }
  .dp-hero-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.22);
    border-radius: 100px; padding: 5px 14px;
    font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366F1; margin-bottom: 14px;
  }
  .dp-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #6366F1; animation: dp-pulse 2s infinite; }
  @keyframes dp-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.4);} 50%{box-shadow:0 0 0 4px rgba(99,102,241,0.08);} }
  .dp-hero-h1 {
    font-family: 'Fraunces', serif; font-size: clamp(36px,4.5vw,56px); font-weight: 800; color: #0F172A;
    line-height: 1.1; letter-spacing: -2px; margin-bottom: 10px;
  }
  .dp-hero-h1 em {
    font-style: italic;
    background: linear-gradient(135deg, #6366F1 0%, #3B82F6 60%, #06B6D4 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .dp-hero-sub { font-size: 14px; font-weight: 400; color: #94A3B8; letter-spacing: 0.01em; line-height: 1.6; }
  .dp-hero-right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
  .dp-count-card {
    background: #fff; border: 1px solid rgba(99,102,241,0.15); border-radius: 18px; padding: 16px 24px; text-align: center;
    box-shadow: 0 4px 20px rgba(99,102,241,0.1), 0 1px 4px rgba(0,0,0,0.04);
  }
  .dp-count-num {
    font-family: 'Fraunces', serif; font-size: 30px; font-weight: 800;
    background: linear-gradient(135deg, #6366F1, #3B82F6);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1;
  }
  .dp-count-lbl { font-size: 10px; font-weight: 600; color: #94A3B8; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 3px; }

  /* DIVIDER */
  .dp-divider { height: 1px; margin-bottom: 40px; background: linear-gradient(90deg, rgba(99,102,241,0.3) 0%, rgba(59,130,246,0.15) 50%, transparent 100%); position: relative; }
  .dp-divider::after { content: ''; position: absolute; left: 0; top: -2px; width: 60px; height: 4px; border-radius: 4px; background: linear-gradient(90deg, #6366F1, #3B82F6); box-shadow: 0 0 12px rgba(99,102,241,0.4); }

  /* LAYOUT */
  .dp-layout { display: flex; gap: 32px; align-items: flex-start; }

  /* SIDEBAR */
  .dp-sidebar { width: 224px; flex-shrink: 0; position: sticky; top: 24px; display: flex; flex-direction: column; gap: 8px; }
  .dp-sidebar-card { background: #fff; border: 1px solid rgba(99,102,241,0.1); border-radius: 20px; padding: 22px 18px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
  .dp-sidebar-heading {
    font-size: 9px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: #CBD5E1; margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .dp-sidebar-heading::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, #E2E8F0, transparent); }
  .dp-spec-list { display: flex; flex-direction: column; gap: 4px; }
  .dp-spec-item {
    padding: 9px 12px; border-radius: 11px; cursor: pointer;
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1); border: 1.5px solid transparent;
    font-size: 13.5px; color: #64748B; font-weight: 400; background: transparent;
    display: flex; align-items: center; gap: 10px; user-select: none;
  }
  .dp-spec-item::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #E2E8F0; flex-shrink: 0; transition: all 0.22s; }
  .dp-spec-item:hover { background: rgba(99,102,241,0.06); border-color: rgba(99,102,241,0.18); color: #4F46E5; transform: translateX(2px); }
  .dp-spec-item:hover::before { background: #6366F1; }
  .dp-spec-item.active { background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(59,130,246,0.07)); border-color: rgba(99,102,241,0.3); color: #4F46E5; font-weight: 600; box-shadow: 0 2px 12px rgba(99,102,241,0.12); }
  .dp-spec-item.active::before { background: #6366F1; box-shadow: 0 0 0 3px rgba(99,102,241,0.18); }
  .dp-spec-icon { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px; background: rgba(99,102,241,0.07); transition: background 0.22s; }
  .dp-spec-item:hover .dp-spec-icon, .dp-spec-item.active .dp-spec-icon { background: rgba(99,102,241,0.14); }
  .dp-spec-name { flex: 1; }
  .dp-tip { background: linear-gradient(135deg, rgba(99,102,241,0.07), rgba(59,130,246,0.05)); border: 1px solid rgba(99,102,241,0.15); border-radius: 14px; padding: 13px 15px; font-size: 11.5px; color: #6366F1; line-height: 1.6; font-weight: 400; }
  .dp-filter-mobile { display: none; width: 100%; padding: 11px 16px; border-radius: 12px; border: 1.5px solid rgba(99,102,241,0.3); background: #fff; color: #6366F1; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.1); }

  /* GRID SECTION */
  .dp-grid-section { flex: 1; display: flex; flex-direction: column; gap: 32px; }

  /* GRID */
  .dp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 20px; align-content: start; }

  /* CARD */
  .dp-card {
    background: #fff; border-radius: 22px; overflow: hidden; cursor: pointer;
    border: 1.5px solid rgba(99,102,241,0.08);
    transition: all 0.38s cubic-bezier(0.22,1,0.36,1); position: relative;
    animation: dp-card-in 0.45s ease both;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);
  }
  @keyframes dp-card-in { from{opacity:0;transform:translateY(18px) scale(0.98);} to{opacity:1;transform:translateY(0) scale(1);} }
  .dp-card::after { content:''; position:absolute; inset:0; border-radius:22px; background:linear-gradient(135deg,rgba(99,102,241,0.04),rgba(59,130,246,0.03)); opacity:0; transition:opacity 0.3s; pointer-events:none; }
  .dp-card:hover { transform:translateY(-8px) scale(1.01); box-shadow:0 24px 60px rgba(99,102,241,0.15),0 8px 24px rgba(59,130,246,0.1),0 1px 4px rgba(0,0,0,0.05); border-color:rgba(99,102,241,0.3); }
  .dp-card:hover::after { opacity:1; }
  .dp-card:hover .dp-card-img { transform:scale(1.08); }
  .dp-card:hover .dp-book-btn { opacity:1; transform:translateY(0); }
  .dp-card:hover .dp-card-specialty { color:#6366F1; }
  .dp-card:hover .dp-card-name-arrow { opacity:1; transform:translateX(0); }

  .dp-img-wrap { overflow:hidden; height:200px; position:relative; background:linear-gradient(145deg,#EEF2FF 0%,#E0E7FF 50%,#DBEAFE 100%); }
  .dp-img-wrap::before { content:''; position:absolute; bottom:-30px; right:-30px; width:120px; height:120px; border-radius:50%; background:rgba(99,102,241,0.12); pointer-events:none; z-index:0; }
  .dp-img-wrap::after { content:''; position:absolute; top:-20px; left:-20px; width:80px; height:80px; border-radius:50%; background:rgba(59,130,246,0.1); pointer-events:none; z-index:0; }
  .dp-card-img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform 0.55s cubic-bezier(0.22,1,0.36,1); position:relative; z-index:1; }
  .dp-img-gradient { position:absolute; bottom:0; left:0; right:0; height:60px; z-index:2; background:linear-gradient(to top,rgba(255,255,255,0.6),transparent); pointer-events:none; }
  .dp-avail { position:absolute; top:10px; right:10px; z-index:3; display:flex; align-items:center; gap:5px; background:rgba(255,255,255,0.94); backdrop-filter:blur(8px); border-radius:100px; padding:4px 10px 4px 8px; font-size:11px; font-weight:600; box-shadow:0 2px 10px rgba(0,0,0,0.1); }
  .dp-avail.on { color:#059669; border:1px solid rgba(16,185,129,0.2); }
  .dp-avail.off { color:#94A3B8; border:1px solid rgba(148,163,184,0.2); }
  .dp-avail-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
  .dp-avail-dot.on { background:#10B981; animation:dp-avail-pulse 2s infinite; }
  @keyframes dp-avail-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,0.4);} 50%{box-shadow:0 0 0 4px rgba(16,185,129,0.08);} }
  .dp-avail-dot.off { background:#CBD5E1; }

  .dp-card-body { padding:18px 20px 20px; position:relative; }
  .dp-card-specialty { display:inline-block; font-size:10px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase; color:#94A3B8; margin-bottom:6px; transition:color 0.25s; }
  .dp-card-name { font-family:'Fraunces',serif; font-size:18px; font-weight:700; color:#0F172A; line-height:1.25; margin-bottom:4px; display:flex; align-items:center; gap:8px; }
  .dp-card-name-arrow { font-size:14px; color:#6366F1; opacity:0; transform:translateX(-6px); transition:all 0.25s; flex-shrink:0; }
  .dp-card-line { height:2px; border-radius:2px; margin-bottom:14px; background:linear-gradient(90deg,#E2E8F0,transparent); transition:all 0.35s; }
  .dp-card:hover .dp-card-line { background:linear-gradient(90deg,#6366F1,#3B82F6,transparent); box-shadow:0 0 10px rgba(99,102,241,0.3); }
  .dp-book-btn { width:100%; padding:11px; background:linear-gradient(135deg,#6366F1 0%,#3B82F6 100%); color:#fff; border:none; border-radius:12px; font-family:'Plus Jakarta Sans',sans-serif; font-size:13px; font-weight:700; cursor:pointer; opacity:0; transform:translateY(8px); transition:all 0.3s cubic-bezier(0.22,1,0.36,1); letter-spacing:0.3px; box-shadow:0 6px 20px rgba(99,102,241,0.35); display:flex; align-items:center; justify-content:center; gap:6px; }
  .dp-book-btn:hover { background:linear-gradient(135deg,#4F46E5,#2563EB); box-shadow:0 8px 28px rgba(99,102,241,0.5); }

  .dp-empty { grid-column:1/-1; text-align:center; padding:80px 20px; }
  .dp-empty-icon { width:64px; height:64px; border-radius:20px; background:rgba(99,102,241,0.08); display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:28px; }
  .dp-empty-text { font-size:15px; color:#94A3B8; font-weight:400; }

  /* ══ PAGINATION ══ */
  .dp-pagination {
    display: flex; align-items: center; justify-content: space-between;
    gap: 16px; flex-wrap: wrap;
    background: #fff;
    border: 1px solid rgba(99,102,241,0.1);
    border-radius: 20px; padding: 18px 24px;
    box-shadow: 0 4px 20px rgba(99,102,241,0.07), 0 1px 4px rgba(0,0,0,0.03);
  }

  .dp-page-info { font-size: 12px; font-weight: 500; color: #94A3B8; white-space: nowrap; }
  .dp-page-info strong { color: #6366F1; font-weight: 700; }

  .dp-page-btns { display: flex; align-items: center; gap: 5px; }

  .dp-page-arrow {
    width: 36px; height: 36px; border-radius: 10px;
    border: 1.5px solid rgba(99,102,241,0.18);
    background: #F8FAFF; color: #6366F1;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 18px; font-weight: 700; line-height: 1;
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
    user-select: none; padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .dp-page-arrow:hover:not(:disabled) {
    background: linear-gradient(135deg, #6366F1, #3B82F6);
    border-color: transparent; color: #fff;
    transform: translateY(-2px); box-shadow: 0 6px 18px rgba(99,102,241,0.32);
  }
  .dp-page-arrow:disabled { opacity: 0.28; cursor: not-allowed; }

  .dp-page-num {
    min-width: 36px; height: 36px; padding: 0 6px;
    border-radius: 10px; border: 1.5px solid rgba(99,102,241,0.1);
    background: #F8FAFF; color: #64748B;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 13px; font-weight: 600;
    transition: all 0.22s cubic-bezier(0.22,1,0.36,1);
    user-select: none; font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .dp-page-num:hover {
    border-color: rgba(99,102,241,0.3); color: #6366F1;
    background: rgba(99,102,241,0.06);
    transform: translateY(-2px); box-shadow: 0 4px 14px rgba(99,102,241,0.12);
  }
  .dp-page-num.active {
    background: linear-gradient(135deg, #6366F1, #3B82F6);
    border-color: transparent; color: #fff; font-weight: 700;
    box-shadow: 0 6px 18px rgba(99,102,241,0.38);
    transform: translateY(-1px);
  }
  .dp-page-dots { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; color: #CBD5E1; font-size: 13px; letter-spacing: 1px; user-select: none; }

  .dp-page-right { font-size: 12px; color: #94A3B8; white-space: nowrap; }
  .dp-page-right strong { color: #6366F1; font-weight: 700; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .dp-inner { padding: 32px 20px 60px; }
    .dp-hero { flex-direction: column; align-items: flex-start; }
    .dp-layout { flex-direction: column; }
    .dp-sidebar { width: 100%; position: static; }
    .dp-filter-mobile { display: block; }
    .dp-spec-list.hidden { display: none; }
    .dp-grid { grid-template-columns: repeat(2,1fr); gap: 14px; }
    .dp-hero-h1 { font-size: 34px; }
    .dp-pagination { flex-direction: column; align-items: flex-start; gap: 12px; }
    .dp-page-right { display: none; }
  }
  @media (max-width: 480px) { .dp-grid { grid-template-columns: 1fr; } }
`,qo={"General physician":{emoji:`🩺`},Gynecologist:{emoji:`🌸`},Dermatologist:{emoji:`✨`},Pediatricians:{emoji:`🧒`},Neurologist:{emoji:`🧠`},Gastroenterologist:{emoji:`💊`}};function Jo(e,t){return t<=7?Array.from({length:t},(e,t)=>t+1):e<=4?[1,2,3,4,5,`...`,t]:e>=t-3?[1,`...`,t-4,t-3,t-2,t-1,t]:[1,`...`,e-1,e,e+1,`...`,t]}var Yo=()=>{let{speciality:e}=pt(),[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(1),s=dt(),{doctors:c}=(0,v.useContext)(Bo);(0,v.useEffect)(()=>{n(e?c.filter(t=>t.speciality===e):c),o(1)},[c,e]);let l=Object.keys(qo),u=Math.ceil(t.length/Go),d=(a-1)*Go,f=d+Go,p=t.slice(d,f),m=Jo(a,u),h=e=>{o(e),window.scrollTo({top:0,behavior:`smooth`})};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:Ko}),(0,A.jsxs)(`div`,{className:`dp`,children:[(0,A.jsx)(`div`,{className:`dp-bg-blob1`}),(0,A.jsx)(`div`,{className:`dp-bg-blob2`}),(0,A.jsx)(`div`,{className:`dp-bg-dots`}),(0,A.jsxs)(`div`,{className:`dp-inner`,children:[(0,A.jsxs)(`div`,{className:`dp-hero`,children:[(0,A.jsxs)(`div`,{className:`dp-hero-text`,children:[(0,A.jsxs)(`div`,{className:`dp-hero-pill`,children:[(0,A.jsx)(`span`,{className:`dp-pill-dot`}),`MedCare Network`]}),(0,A.jsxs)(`h1`,{className:`dp-hero-h1`,children:[`Find Your`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`em`,{children:`Perfect Doctor`})]}),(0,A.jsx)(`p`,{className:`dp-hero-sub`,children:`Browse our verified network of specialists and book in seconds.`})]}),(0,A.jsx)(`div`,{className:`dp-hero-right`,children:(0,A.jsxs)(`div`,{className:`dp-count-card`,children:[(0,A.jsx)(`div`,{className:`dp-count-num`,children:t.length}),(0,A.jsxs)(`div`,{className:`dp-count-lbl`,children:[`Specialist`,t.length===1?``:`s`]})]})})]}),(0,A.jsx)(`div`,{className:`dp-divider`}),(0,A.jsxs)(`div`,{className:`dp-layout`,children:[(0,A.jsxs)(`div`,{className:`dp-sidebar`,children:[(0,A.jsx)(`button`,{className:`dp-filter-mobile`,onClick:()=>i(!r),children:r?`▲ Hide Filters`:`▼ Filter by Specialty`}),(0,A.jsx)(`div`,{className:`dp-sidebar-card`,style:{display:r||window.innerWidth>768?`block`:void 0},children:(0,A.jsxs)(`div`,{className:`dp-spec-list${r?``:` hidden`}`,style:{display:void 0},children:[(0,A.jsx)(`div`,{className:`dp-sidebar-heading`,children:`Specialty`}),l.map((t,n)=>(0,A.jsxs)(`div`,{className:`dp-spec-item${e===t?` active`:``}`,onClick:()=>s(e===t?`/doctors`:`/doctors/${t}`),children:[(0,A.jsx)(`span`,{className:`dp-spec-icon`,children:qo[t].emoji}),(0,A.jsx)(`span`,{className:`dp-spec-name`,children:t})]},n))]})}),(0,A.jsx)(`div`,{className:`dp-tip`,children:`💡 Click a specialty to filter — click again to clear.`})]}),(0,A.jsxs)(`div`,{className:`dp-grid-section`,children:[(0,A.jsx)(`div`,{className:`dp-grid`,children:t.length===0?(0,A.jsxs)(`div`,{className:`dp-empty`,children:[(0,A.jsx)(`div`,{className:`dp-empty-icon`,children:`🔍`}),(0,A.jsx)(`p`,{className:`dp-empty-text`,children:`No doctors found for this specialty.`})]}):p.map((e,t)=>(0,A.jsxs)(`div`,{className:`dp-card`,style:{animationDelay:`${t*.055}s`},onClick:()=>{s(`/appointment/${e._id}`),window.scrollTo({top:0,behavior:`smooth`})},children:[(0,A.jsxs)(`div`,{className:`dp-img-wrap`,children:[(0,A.jsx)(`img`,{className:`dp-card-img`,src:e.image,alt:e.name}),(0,A.jsx)(`div`,{className:`dp-img-gradient`}),(0,A.jsxs)(`div`,{className:`dp-avail ${e.available?`on`:`off`}`,children:[(0,A.jsx)(`span`,{className:`dp-avail-dot ${e.available?`on`:`off`}`}),e.available?`Available`:`Unavailable`]})]}),(0,A.jsxs)(`div`,{className:`dp-card-body`,children:[(0,A.jsx)(`div`,{className:`dp-card-specialty`,children:e.speciality}),(0,A.jsxs)(`h2`,{className:`dp-card-name`,children:[e.name,(0,A.jsx)(`span`,{className:`dp-card-name-arrow`,children:`→`})]}),(0,A.jsx)(`div`,{className:`dp-card-line`}),(0,A.jsxs)(`button`,{className:`dp-book-btn`,children:[(0,A.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})}),`Book Appointment`]})]})]},e._id))}),u>1&&(0,A.jsxs)(`div`,{className:`dp-pagination`,children:[(0,A.jsxs)(`div`,{className:`dp-page-info`,children:[`Showing `,(0,A.jsxs)(`strong`,{children:[d+1,`–`,Math.min(f,t.length)]}),` of `,(0,A.jsx)(`strong`,{children:t.length}),` doctors`]}),(0,A.jsxs)(`div`,{className:`dp-page-btns`,children:[(0,A.jsx)(`button`,{className:`dp-page-arrow`,disabled:a===1,onClick:()=>h(a-1),"aria-label":`Previous page`,children:`‹`}),m.map((e,t)=>e===`...`?(0,A.jsx)(`div`,{className:`dp-page-dots`,children:`···`},`dots-${t}`):(0,A.jsx)(`button`,{className:`dp-page-num${a===e?` active`:``}`,onClick:()=>h(e),children:e},e)),(0,A.jsx)(`button`,{className:`dp-page-arrow`,disabled:a===u,onClick:()=>h(a+1),"aria-label":`Next page`,children:`›`})]}),(0,A.jsxs)(`div`,{className:`dp-page-right`,children:[`Page `,(0,A.jsx)(`strong`,{children:a}),` of `,u]})]})]})]})]})]})]})},Xo=()=>{let{backendUrl:e,token:t,setToken:n}=(0,v.useContext)(Bo),[r,i]=(0,v.useState)(`Login`),[a,o]=(0,v.useState)(``),[s,c]=(0,v.useState)(``),[l,u]=(0,v.useState)(``),[d,f]=(0,v.useState)(!1),p=dt();return(0,v.useEffect)(()=>{t&&p(`/`)},[t]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .login-root {
          min-height: 100vh;
          display: flex;
          font-family: 'Sora', sans-serif;
          background: #F8F7F4;
        }

        /* ── LEFT PANEL ── */
        .login-left {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 64px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .login-left::before {
          content: '';
          position: absolute;
          top: -120px; left: -120px;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .login-left::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -80px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Logo */
        .login-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 48px;
        }
        .login-logo-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .login-logo-icon svg { color: white; }
        .login-logo-text {
          font-size: 20px; font-weight: 700;
          color: #111827; letter-spacing: -0.5px;
        }
        .login-logo-text span { color: #3B82F6; }
        .login-logo-sub {
          font-size: 10px; font-weight: 500;
          letter-spacing: 2px; color: #9CA3AF;
          text-transform: uppercase; display: block; margin-top: 1px;
        }

        /* Badge */
        .login-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #E5E7EB;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 600;
          color: #6B7280;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          width: fit-content;
          background: #F9FAFB;
        }
        .login-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3B82F6; flex-shrink: 0;
        }

        /* Headline */
        .login-headline {
          font-size: 42px; font-weight: 800;
          line-height: 1.1; letter-spacing: -1.5px;
          color: #111827;
          margin-bottom: 8px;
        }
        .login-headline-accent {
          color: #3B82F6;
        }
        .login-sub {
          font-size: 14px; font-weight: 300;
          color: #6B7280; line-height: 1.6;
          margin-bottom: 36px;
        }

        /* Form card */
        .login-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 32px;
          position: relative; z-index: 1;
        }

        .field-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 1.2px; text-transform: uppercase;
          color: #374151; margin-bottom: 8px; display: block;
        }

        .field-wrap {
          position: relative; margin-bottom: 20px;
        }

        .field-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: #9CA3AF; pointer-events: none;
          display: flex; align-items: center;
        }

        .login-input {
          width: 100%;
          background: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 13px 14px 13px 42px;
          font-size: 14px; font-weight: 400;
          color: #111827;
          font-family: 'Sora', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .login-input::placeholder { color: #9CA3AF; }
        .login-input:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
        }

        .pass-toggle {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: #9CA3AF; display: flex; align-items: center;
          padding: 0; transition: color 0.2s;
        }
        .pass-toggle:hover { color: #6B7280; }

        /* Submit btn */
        .login-btn {
          width: 100%;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          color: #ffffff;
          border: none; border-radius: 12px;
          padding: 15px;
          font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
          margin-top: 8px;
        }
        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.4);
        }
        .login-btn:active { transform: translateY(0); }

        .login-footer-text {
          text-align: center;
          margin-top: 20px;
          font-size: 13px; color: #9CA3AF;
        }
        .login-footer-text span {
          color: #3B82F6; font-weight: 600;
          cursor: pointer; text-decoration: underline;
          text-underline-offset: 2px;
        }
        .login-footer-text span:hover { color: #2563EB; }

        /* ── RIGHT PANEL ── */
        .login-right {
          flex: 0 0 50%;
          position: relative;
          overflow: hidden;
          display: flex;
        }
        .login-right img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        .login-right-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            135deg,
            rgba(59,130,246,0.15) 0%,
            rgba(99,102,241,0.1) 100%
          );
        }

        /* right content overlay */
        .login-right-content {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 48px;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%);
        }
        .right-headline {
          font-size: 40px; font-weight: 800;
          line-height: 1.1; letter-spacing: -1px;
          color: #fff; margin-bottom: 12px;
        }
        .right-headline em { font-style: normal; color: #60A5FA; }
        .right-sub { font-size: 14px; color: rgba(255,255,255,0.65); font-weight: 300; line-height: 1.7; margin-bottom: 28px; max-width: 340px; }

        .right-features { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
        .right-feat {
          display: flex; align-items: flex-start; gap: 12px;
        }
        .feat-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(59,130,246,0.25);
          border: 1px solid rgba(255,255,255,0.15);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
        }
        .feat-title { font-size: 13px; font-weight: 600; color: #fff; }
        .feat-desc { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 1px; }

        .right-stats { display: flex; gap: 32px; }
        .rstat-num { font-size: 28px; font-weight: 800; color: #60A5FA; letter-spacing: -1px; }
        .rstat-lbl { font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.45); }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .login-left {
            flex: 1 1 100%;
            padding: 40px 28px;
            min-height: 100vh;
          }
          .login-right { display: none; }
          .login-headline { font-size: 32px; }
        }
      `}),(0,A.jsxs)(`div`,{className:`login-root`,children:[(0,A.jsxs)(`div`,{className:`login-left`,children:[(0,A.jsxs)(`div`,{className:`login-logo`,children:[(0,A.jsx)(`div`,{className:`login-logo-icon`,children:(0,A.jsx)(`svg`,{width:`22`,height:`22`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`login-logo-text`,children:[`Med`,(0,A.jsx)(`span`,{children:`Care`})]}),(0,A.jsx)(`span`,{className:`login-logo-sub`,children:`Smart Health Platform`})]})]}),(0,A.jsxs)(`div`,{className:`login-badge`,children:[(0,A.jsx)(`span`,{className:`login-badge-dot`}),r===`Login`?`Secure Patient Portal`:`Create Your Account`]}),(0,A.jsx)(`h1`,{className:`login-headline`,children:r===`Login`?(0,A.jsxs)(A.Fragment,{children:[`Welcome`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{className:`login-headline-accent`,children:`Back.`})]}):(0,A.jsxs)(A.Fragment,{children:[`Join`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{className:`login-headline-accent`,children:`MedCare.`})]})}),(0,A.jsx)(`p`,{className:`login-sub`,children:r===`Login`?`Sign in to book appointments, track your health records, and connect with trusted doctors.`:`Create your account to access 100+ verified specialists and book hassle-free appointments.`}),(0,A.jsx)(`form`,{onSubmit:async t=>{t.preventDefault();try{if(r===`Sign Up`){let{data:t}=await H.post(e+`/api/user/register`,{name:a,email:s,password:l});t.success?(localStorage.setItem(`token`,t.token),n(t.token)):j.error(t.message)}else{let{data:t}=await H.post(e+`/api/user/login`,{email:s,password:l});t.success?(localStorage.setItem(`token`,t.token),n(t.token)):j.error(t.message)}}catch(e){j.error(e.message)}},children:(0,A.jsxs)(`div`,{className:`login-card`,children:[r===`Sign Up`&&(0,A.jsxs)(`div`,{className:`field-wrap`,children:[(0,A.jsx)(`label`,{className:`field-label`,children:`Full Name`}),(0,A.jsxs)(`div`,{style:{position:`relative`},children:[(0,A.jsx)(`span`,{className:`field-icon`,children:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z`})})}),(0,A.jsx)(`input`,{className:`login-input`,type:`text`,placeholder:`Your full name`,value:a,onChange:e=>o(e.target.value),required:!0})]})]}),(0,A.jsxs)(`div`,{className:`field-wrap`,children:[(0,A.jsx)(`label`,{className:`field-label`,children:`Email Address`}),(0,A.jsxs)(`div`,{style:{position:`relative`},children:[(0,A.jsx)(`span`,{className:`field-icon`,children:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})}),(0,A.jsx)(`input`,{className:`login-input`,type:`email`,placeholder:`you@email.com`,value:s,onChange:e=>c(e.target.value),required:!0})]})]}),(0,A.jsxs)(`div`,{className:`field-wrap`,style:{marginBottom:0},children:[(0,A.jsx)(`label`,{className:`field-label`,children:`Password`}),(0,A.jsxs)(`div`,{style:{position:`relative`},children:[(0,A.jsx)(`span`,{className:`field-icon`,children:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z`})})}),(0,A.jsx)(`input`,{className:`login-input`,type:d?`text`:`password`,placeholder:`Enter your password`,value:l,onChange:e=>u(e.target.value),required:!0}),(0,A.jsx)(`button`,{type:`button`,className:`pass-toggle`,onClick:()=>f(e=>!e),children:d?(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21`})}):(0,A.jsxs)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:[(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`}),(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z`})]})})]})]}),(0,A.jsxs)(`button`,{type:`submit`,className:`login-btn`,children:[(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z`})}),r===`Sign Up`?`Create Account`:`Sign In to Dashboard`,(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]}),(0,A.jsx)(`p`,{className:`login-footer-text`,children:r===`Sign Up`?(0,A.jsxs)(A.Fragment,{children:[`Already have an account?`,` `,(0,A.jsx)(`span`,{onClick:()=>i(`Login`),children:`Sign in →`})]}):(0,A.jsxs)(A.Fragment,{children:[`Don't have an account?`,` `,(0,A.jsx)(`span`,{onClick:()=>i(`Sign Up`),children:`Create one →`})]})})]})})]}),(0,A.jsxs)(`div`,{className:`login-right`,children:[(0,A.jsx)(`img`,{src:`../../assets/loginHeroImage.png`,alt:`Medical professionals`}),(0,A.jsx)(`div`,{className:`login-right-overlay`})]})]})]})},Zo=()=>{let e=dt(),t=[{title:`Efficiency`,emoji:`⚡`,desc:`Streamlined appointment scheduling that fits into your busy lifestyle — book in under 60 seconds.`,accent:`#6366F1`,accentLight:`rgba(99,102,241,0.08)`,accentBorder:`rgba(99,102,241,0.2)`},{title:`Convenience`,emoji:`📍`,desc:`Access a network of trusted healthcare professionals in your area, available at your fingertips.`,accent:`#3B82F6`,accentLight:`rgba(59,130,246,0.08)`,accentBorder:`rgba(59,130,246,0.2)`},{title:`Personalization`,emoji:`🎯`,desc:`Tailored recommendations and smart reminders to help you stay ahead of your health.`,accent:`#06B6D4`,accentLight:`rgba(6,182,212,0.08)`,accentBorder:`rgba(6,182,212,0.2)`}],n=[{num:`50K+`,label:`Patients Served`},{num:`1,200+`,label:`Verified Doctors`},{num:`98%`,label:`Satisfaction`},{num:`24/7`,label:`Available`}];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,800;1,700;1,800&display=swap');

        /* ═══════════════════════════════════
           ANIMATED ECG + HEART BACKGROUND
        ═══════════════════════════════════ */

        @keyframes ecg-march {
          0%   { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: -1200; }
        }
        @keyframes ecg-march2 {
          0%   { stroke-dashoffset: 900; }
          100% { stroke-dashoffset: -900; }
        }
        @keyframes ecg-march3 {
          0%   { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: -600; }
        }
        @keyframes heart-beat {
          0%,100% { transform:scale(1);   opacity:0.06; }
          14%      { transform:scale(1.12); opacity:0.12; }
          28%      { transform:scale(1);   opacity:0.06; }
          42%      { transform:scale(1.08); opacity:0.1; }
          56%      { transform:scale(1);   opacity:0.06; }
        }
        @keyframes heart-beat2 {
          0%,100% { transform:scale(1);   opacity:0.04; }
          20%      { transform:scale(1.1); opacity:0.09; }
          40%      { transform:scale(1);   opacity:0.04; }
          60%      { transform:scale(1.07); opacity:0.07; }
          80%      { transform:scale(1);   opacity:0.04; }
        }
        @keyframes heart-float {
          0%,100% { transform:translateY(0) rotate(-10deg) scale(1); }
          50%      { transform:translateY(-14px) rotate(-10deg) scale(1.05); }
        }
        @keyframes heart-float2 {
          0%,100% { transform:translateY(0) rotate(15deg) scale(1); }
          50%      { transform:translateY(-10px) rotate(15deg) scale(1.06); }
        }
        @keyframes heart-float3 {
          0%,100% { transform:translateY(0) rotate(-5deg) scale(1); }
          50%      { transform:translateY(-18px) rotate(-5deg) scale(1.04); }
        }
        @keyframes ecg-glow-pulse {
          0%,100% { opacity:0.22; filter:drop-shadow(0 0 4px rgba(99,102,241,0.3)); }
          50%      { opacity:0.5;  filter:drop-shadow(0 0 12px rgba(99,102,241,0.6)); }
        }
        @keyframes ecg-glow-pulse2 {
          0%,100% { opacity:0.15; filter:drop-shadow(0 0 3px rgba(59,130,246,0.25)); }
          50%      { opacity:0.35; filter:drop-shadow(0 0 10px rgba(59,130,246,0.5)); }
        }
        @keyframes cross-spin {
          0%   { transform:rotate(0deg) scale(1);   opacity:0.07; }
          50%  { transform:rotate(180deg) scale(1.1); opacity:0.12; }
          100% { transform:rotate(360deg) scale(1);   opacity:0.07; }
        }
        @keyframes pulse-ring {
          0%   { transform:scale(0.7); opacity:0.35; }
          100% { transform:scale(2.2); opacity:0; }
        }

        /* Fixed full-page bg canvas */
        .ab-bg-canvas {
          position:fixed; inset:0; z-index:0; pointer-events:none; overflow:hidden;
        }

        /* ECG SVG lines */
        .ab-ecg-svg {
          position:absolute; width:100%; height:100%;
        }

        /* Heart shapes */
        .ab-heart {
          position:absolute; pointer-events:none;
          animation: heart-float 6s ease-in-out infinite;
        }
        .ab-heart svg { display:block; }
        .ab-heart-1 { top:8%; left:6%;  width:90px;  animation-duration:7s; }
        .ab-heart-2 { top:18%; right:5%; width:60px; animation:heart-float2 5s ease-in-out infinite; }
        .ab-heart-3 { bottom:30%; left:3%; width:50px; animation:heart-float3 8s ease-in-out infinite; }
        .ab-heart-4 { bottom:15%; right:8%; width:80px; animation:heart-float 9s ease-in-out infinite reverse; }
        .ab-heart-5 { top:50%; left:50%; width:40px; opacity:0.04; animation:heart-float2 6s 2s ease-in-out infinite; }

        /* Medical cross */
        .ab-cross {
          position:absolute; pointer-events:none;
          animation:cross-spin 20s linear infinite;
        }
        .ab-cross-1 { top:35%; right:3%;  width:40px; }
        .ab-cross-2 { bottom:45%; left:2%; width:28px; animation-duration:28s; animation-direction:reverse; }

        /* Pulse rings */
        .ab-pulse-ring {
          position:absolute; border-radius:50%; pointer-events:none;
          border:1.5px solid rgba(99,102,241,0.3);
          animation:pulse-ring 3.5s ease-out infinite;
        }
        .ab-pr-1 { width:120px; height:120px; top:12%; left:8%; margin:-60px 0 0 -60px; }
        .ab-pr-2 { width:80px;  height:80px;  bottom:25%; right:6%; margin:-40px 0 0 -40px; animation-delay:1.2s; border-color:rgba(59,130,246,0.25); }
        .ab-pr-3 { width:60px;  height:60px;  top:55%; left:45%; margin:-30px 0 0 -30px; animation-delay:2.1s; border-color:rgba(6,182,212,0.2); }

        /* ─────────────────── */

        .ab { font-family: 'Plus Jakarta Sans', sans-serif; background: #F0F4FF; overflow-x: hidden; position: relative; }

        .ab-blob1 { position: fixed; pointer-events: none; z-index: 0; top: -180px; right: -180px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%); filter: blur(40px); }
        .ab-blob2 { position: fixed; pointer-events: none; z-index: 0; bottom: 200px; left: -120px; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 65%); filter: blur(40px); }
        .ab-dots { position: fixed; inset: 0; pointer-events: none; z-index: 0; background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px); background-size: 32px 32px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%); }

        .ab-z { position: relative; z-index: 1; }

        .ab-pill { display: inline-flex; align-items: center; gap: 7px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.22); border-radius: 100px; padding: 5px 16px; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366F1; margin-bottom: 20px; }
        .ab-pdot { width: 6px; height: 6px; border-radius: 50%; background: #6366F1; animation: abpulse 2s infinite; }
        @keyframes abpulse { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.4);} 50%{box-shadow:0 0 0 4px rgba(99,102,241,0.08);} }

        .ab-divider { height: 1px; max-width: 1280px; margin: 0 auto; background: linear-gradient(90deg, rgba(99,102,241,0.3) 0%, rgba(59,130,246,0.15) 50%, transparent 100%); position: relative; }
        .ab-divider::after { content: ''; position: absolute; left: 48px; top: -2px; width: 60px; height: 4px; border-radius: 4px; background: linear-gradient(90deg, #6366F1, #3B82F6); box-shadow: 0 0 12px rgba(99,102,241,0.4); }

        .ab-hero { padding: 22px 8px 20px; max-width: 1280px; margin: 0 auto; text-align: center; }
        .ab-h1 { font-family: 'Fraunces', serif; font-size: clamp(36px, 5vw, 60px); font-weight: 800; color: #0F172A; line-height: 1.1; letter-spacing: -2px; margin-bottom: 18px; }
        .ab-h1 em { font-style: italic; background: linear-gradient(135deg, #6366F1 0%, #3B82F6 60%, #06B6D4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-hero-sub { font-size: 15px; font-weight: 400; color: #94A3B8; max-width: 480px; margin: 0 auto 48px; line-height: 1.85; }

        .ab-stats { display: inline-flex; background: #fff; border: 1px solid rgba(99,102,241,0.12); border-radius: 22px; overflow: hidden; box-shadow: 0 4px 20px rgba(99,102,241,0.1), 0 1px 4px rgba(0,0,0,0.04); }
        .ab-stat { padding: 20px 36px; border-right: 1px solid rgba(99,102,241,0.09); text-align: center; transition: background 0.25s; cursor: default; }
        .ab-stat:last-child { border-right: none; }
        .ab-stat:hover { background: rgba(99,102,241,0.04); }
        .ab-stat-num { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 800; background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
        .ab-stat-lbl { font-size: 10px; font-weight: 600; color: #94A3B8; letter-spacing: 1px; text-transform: uppercase; margin-top: 5px; }

        .ab-story { max-width: 1280px; margin: 0 auto; padding: 80px 48px; display: grid; grid-template-columns: 1fr 1.05fr; gap: 72px; align-items: center; }

        .ab-img-outer { position: relative; }
        .ab-img-glow { position: absolute; inset: -24px; border-radius: 36px; background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08)); filter: blur(24px); pointer-events: none; }
        .ab-img-frame { position: relative; border-radius: 28px; overflow: hidden; box-shadow: 0 32px 72px rgba(99,102,241,0.14), 0 8px 24px rgba(0,0,0,0.06); border: 1.5px solid rgba(99,102,241,0.12); }
        .ab-img-frame img { width: 100%; display: block; object-fit: cover; height: 460px; }
        .ab-img-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(15,23,42,0.35) 100%); pointer-events: none; }

        .ab-img-badge { position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(255,255,255,0.97); backdrop-filter: blur(12px); border-radius: 16px; padding: 14px 18px; display: flex; align-items: center; gap: 14px; box-shadow: 0 12px 32px rgba(0,0,0,0.12); border: 1px solid rgba(99,102,241,0.1); }
        .ab-badge-icon { width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, #6366F1, #3B82F6); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 6px 16px rgba(99,102,241,0.4); }
        .ab-badge-lbl { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; color: #94A3B8; text-transform: uppercase; margin-bottom: 2px; }
        .ab-badge-val { font-size: 14px; font-weight: 800; color: #0F172A; }

        .ab-img-accent { position: absolute; top: 24px; right: -22px; background: #fff; border: 1.5px solid rgba(99,102,241,0.18); border-radius: 18px; padding: 18px 22px; box-shadow: 0 16px 40px rgba(99,102,241,0.15), 0 2px 8px rgba(0,0,0,0.06); text-align: center; min-width: 110px; animation: abfloat 5s ease-in-out infinite alternate; }
        @keyframes abfloat { 0%{transform:translateY(0);} 100%{transform:translateY(-8px);} }
        .ab-accent-num { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
        .ab-accent-lbl { font-size: 9px; font-weight: 700; color: #94A3B8; letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }

        .ab-section-lbl { font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #6366F1; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .ab-section-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(99,102,241,0.3), transparent); }
        .ab-h2 { font-family: 'Fraunces', serif; font-size: clamp(26px, 3vw, 38px); font-weight: 800; color: #0F172A; letter-spacing: -1px; line-height: 1.2; margin-bottom: 20px; }
        .ab-h2 span { background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-p { font-size: 14.5px; font-weight: 400; color: #64748B; line-height: 1.9; margin-bottom: 14px; }

        .ab-vision { margin-top: 28px; background: #fff; border: 1.5px solid rgba(99,102,241,0.15); border-radius: 20px; padding: 24px 26px; box-shadow: 0 4px 20px rgba(99,102,241,0.08), 0 1px 4px rgba(0,0,0,0.03); position: relative; overflow: hidden; }
        .ab-vision::before { content: ''; position: absolute; top: -40px; right: -40px; width: 140px; height: 140px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.1), transparent 65%); pointer-events: none; }
        .ab-vision-lbl { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #6366F1; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .ab-vision-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(99,102,241,0.3), transparent); }
        .ab-vision-text { font-size: 14px; font-weight: 400; color: #475569; line-height: 1.85; position: relative; z-index: 1; }

        .ab-why { background: #fff; border-top: 1px solid rgba(99,102,241,0.1); border-bottom: 1px solid rgba(99,102,241,0.1); padding: 80px 48px; position: relative; overflow: hidden; }
        .ab-why::before { content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 700px; height: 400px; background: radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%); pointer-events: none; }
        .ab-why-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }
        .ab-why-hdr { margin-bottom: 48px; }
        .ab-why-h2 { font-family: 'Fraunces', serif; font-size: clamp(26px, 3.5vw, 40px); font-weight: 800; color: #0F172A; letter-spacing: -1px; line-height: 1.2; margin-bottom: 10px; }
        .ab-why-h2 em { font-style: italic; background: linear-gradient(135deg, #6366F1, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-why-sub { font-size: 14px; font-weight: 400; color: #94A3B8; line-height: 1.8; max-width: 440px; }

        .ab-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        .ab-card { background: #F8FAFF; border: 1.5px solid rgba(99,102,241,0.1); border-radius: 22px; padding: 32px 28px; transition: all 0.35s cubic-bezier(0.22,1,0.36,1); cursor: default; position: relative; overflow: hidden; animation: abcardin 0.45s ease both; }
        @keyframes abcardin { from{opacity:0;transform:translateY(18px);} to{opacity:1;transform:translateY(0);} }
        .ab-card::before { content: ''; position: absolute; bottom: -40px; right: -40px; width: 140px; height: 140px; border-radius: 50%; background: var(--orb,rgba(99,102,241,0.06)); transition: transform 0.4s; pointer-events: none; }
        .ab-card:hover { transform: translateY(-7px); border-color: var(--bdr,rgba(99,102,241,0.3)); box-shadow: 0 20px 48px var(--sh,rgba(99,102,241,0.12)), 0 4px 12px rgba(0,0,0,0.04); background: #fff; }
        .ab-card:hover::before { transform: scale(1.4); }
        .ab-card:hover .ab-card-icon { box-shadow: 0 8px 24px var(--glow,rgba(99,102,241,0.3)); }
        .ab-card:hover .ab-card-ln { background: linear-gradient(90deg, var(--acc,#6366F1), transparent); box-shadow: 0 0 8px var(--glow,rgba(99,102,241,0.3)); }

        .ab-card-icon { width: 52px; height: 52px; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 22px; transition: box-shadow 0.3s; position: relative; z-index: 1; }
        .ab-card-wm { position: absolute; top: 20px; right: 22px; font-family: 'Fraunces', serif; font-size: 64px; font-weight: 800; line-height: 1; color: rgba(99,102,241,0.05); user-select: none; pointer-events: none; transition: color 0.3s; }
        .ab-card:hover .ab-card-wm { color: var(--orb,rgba(99,102,241,0.08)); }
        .ab-card-tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; position: relative; z-index: 1; }
        .ab-card-title { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 700; color: #0F172A; letter-spacing: -0.4px; margin-bottom: 6px; position: relative; z-index: 1; }
        .ab-card-ln { height: 2px; border-radius: 2px; margin-bottom: 14px; background: #E2E8F0; transition: all 0.35s; width: 40px; }
        .ab-card-body { font-size: 13.5px; font-weight: 400; color: #64748B; line-height: 1.85; position: relative; z-index: 1; }

        .ab-cta-wrap { max-width: 1280px; margin: 0 auto; padding: 80px 48px; }
        .ab-cta { background: linear-gradient(135deg, #0F172A 0%, #1E2D4F 50%, #0F172A 100%); border-radius: 28px; padding: 56px 64px; display: flex; align-items: center; justify-content: space-between; gap: 40px; position: relative; overflow: hidden; border: 1px solid rgba(99,102,241,0.2); box-shadow: 0 32px 72px rgba(15,23,42,0.2); }
        .ab-cta::before { content: ''; position: absolute; top: -100px; left: -100px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%); pointer-events: none; }
        .ab-cta::after { content: ''; position: absolute; bottom: -80px; right: -80px; width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%); pointer-events: none; }
        .ab-cta-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }

        /* ECG line inside CTA banner */
        .ab-cta-ecg {
          position:absolute; inset:0; z-index:0; pointer-events:none; overflow:hidden;
        }
        .ab-cta-ecg svg {
          position:absolute; bottom:0; left:0; width:100%; opacity:0.12;
        }

        .ab-cta-left { position: relative; z-index: 1; }
        .ab-cta-pill { display: inline-flex; align-items: center; gap: 7px; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); border-radius: 100px; padding: 5px 14px; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #818CF8; margin-bottom: 16px; }
        .ab-cta-h3 { font-family: 'Fraunces', serif; font-size: clamp(22px, 2.8vw, 34px); font-weight: 800; color: #fff; letter-spacing: -1px; line-height: 1.2; margin-bottom: 12px; }
        .ab-cta-h3 em { font-style: italic; background: linear-gradient(135deg, #818CF8, #60A5FA, #22D3EE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ab-cta-sub { font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.5); line-height: 1.8; max-width: 400px; }
        .ab-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #6366F1, #3B82F6); color: #fff; border: none; border-radius: 12px; padding: 13px 24px; font-size: 13px; font-weight: 700; font-family: 'Plus Jakarta Sans', sans-serif; cursor: pointer; transition: all 0.25s; letter-spacing: 0.3px; box-shadow: 0 8px 24px rgba(99,102,241,0.4); margin-top: 24px; }
        .ab-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(99,102,241,0.55); }

        .ab-cta-stats { flex-shrink: 0; position: relative; z-index: 1; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 28px 32px; backdrop-filter: blur(8px); display: grid; grid-template-columns: 1fr 1fr; gap: 24px 36px; }
        .ab-cta-num { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 800; color: #fff; line-height: 1; }
        .ab-cta-lbl { font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.4); letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; }

        @media (max-width: 1024px) {
          .ab-hero, .ab-story, .ab-cta-wrap { padding-left: 32px; padding-right: 32px; }
          .ab-why { padding-left: 32px; padding-right: 32px; }
          .ab-story { gap: 48px; }
          .ab-img-accent { display: none; }
          .ab-cta { padding: 44px 40px; }
          .ab-divider::after { left: 32px; }
        }
        @media (max-width: 768px) {
          .ab-hero { padding: 44px 20px 52px; }
          .ab-story { grid-template-columns: 1fr; padding: 48px 20px; }
          .ab-why { padding: 52px 20px; }
          .ab-cards { grid-template-columns: 1fr; }
          .ab-cta-wrap { padding: 48px 20px; }
          .ab-cta { flex-direction: column; padding: 36px 28px; }
          .ab-cta-stats { width: 100%; }
          .ab-stats { flex-wrap: wrap; }
          .ab-stat { min-width: 50%; }
          .ab-divider::after { left: 20px; }
          .ab-heart-1 { width:60px; } .ab-heart-4 { width:55px; }
          .ab-heart-2,.ab-heart-3 { display:none; }
        }
      `}),(0,A.jsxs)(`div`,{className:`ab`,children:[(0,A.jsx)(`div`,{className:`ab-blob1`}),(0,A.jsx)(`div`,{className:`ab-blob2`}),(0,A.jsx)(`div`,{className:`ab-dots`}),(0,A.jsxs)(`div`,{className:`ab-bg-canvas`,"aria-hidden":`true`,children:[(0,A.jsxs)(`svg`,{className:`ab-ecg-svg`,viewBox:`0 0 1440 900`,preserveAspectRatio:`xMidYMid slice`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`path`,{d:`M-80,450 L120,450 L150,450 L160,390 L170,510 L180,330 L195,570 L210,450 L240,450 L280,450 L290,420 L300,480 L310,450 L400,450 L420,450 L430,410 L440,490 L450,360 L468,540 L482,450 L520,450 L560,450 L570,430 L580,470 L590,450 L680,450 L700,450 L710,395 L720,505 L730,340 L748,560 L762,450 L800,450 L840,450 L850,425 L860,475 L870,450 L960,450 L980,450 L990,405 L1000,495 L1010,355 L1028,545 L1042,450 L1080,450 L1120,450 L1130,435 L1140,465 L1150,450 L1240,450 L1260,450 L1270,400 L1280,500 L1290,345 L1308,555 L1322,450 L1440,450 L1520,450`,fill:`none`,stroke:`url(#ecg-grad1)`,strokeWidth:`1.8`,strokeDasharray:`1200`,strokeDashoffset:`1200`,style:{animation:`ecg-march 5s linear infinite`,animationTimingFunction:`linear`}}),(0,A.jsx)(`path`,{d:`M-80,180 L160,180 L170,180 L178,148 L186,212 L192,120 L202,240 L210,180 L260,180 L280,180 L288,162 L296,198 L304,180 L400,180 L420,180 L428,150 L436,210 L442,125 L454,235 L462,180 L520,180 L580,180 L588,165 L596,195 L604,180 L700,180 L720,180 L728,152 L736,208 L742,128 L754,232 L762,180 L840,180 L900,180 L908,168 L916,192 L924,180 L1000,180 L1040,180 L1048,148 L1056,212 L1062,118 L1074,242 L1082,180 L1160,180 L1220,180 L1228,166 L1236,194 L1244,180 L1360,180 L1440,180 L1520,180`,fill:`none`,stroke:`url(#ecg-grad2)`,strokeWidth:`1.4`,strokeDasharray:`900`,strokeDashoffset:`900`,style:{animation:`ecg-march2 7s linear infinite 1s`}}),(0,A.jsx)(`path`,{d:`M-80,720 L200,720 L210,720 L218,696 L226,744 L232,672 L242,768 L250,720 L320,720 L360,720 L368,705 L376,735 L384,720 L480,720 L520,720 L528,697 L536,743 L542,670 L554,770 L562,720 L640,720 L720,720 L728,707 L736,733 L744,720 L840,720 L880,720 L888,694 L896,746 L902,668 L914,772 L922,720 L1000,720 L1080,720 L1088,708 L1096,732 L1104,720 L1200,720 L1240,720 L1248,695 L1256,745 L1262,669 L1274,771 L1282,720 L1440,720 L1520,720`,fill:`none`,stroke:`url(#ecg-grad3)`,strokeWidth:`1.2`,strokeDasharray:`600`,strokeDashoffset:`600`,style:{animation:`ecg-march3 9s linear infinite 2.5s`}}),(0,A.jsxs)(`defs`,{children:[(0,A.jsxs)(`linearGradient`,{id:`ecg-grad1`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#6366F1`,stopOpacity:`0`}),(0,A.jsx)(`stop`,{offset:`20%`,stopColor:`#6366F1`,stopOpacity:`0.55`}),(0,A.jsx)(`stop`,{offset:`50%`,stopColor:`#3B82F6`,stopOpacity:`0.7`}),(0,A.jsx)(`stop`,{offset:`80%`,stopColor:`#06B6D4`,stopOpacity:`0.55`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#06B6D4`,stopOpacity:`0`})]}),(0,A.jsxs)(`linearGradient`,{id:`ecg-grad2`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#6366F1`,stopOpacity:`0`}),(0,A.jsx)(`stop`,{offset:`30%`,stopColor:`#6366F1`,stopOpacity:`0.35`}),(0,A.jsx)(`stop`,{offset:`70%`,stopColor:`#3B82F6`,stopOpacity:`0.35`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#3B82F6`,stopOpacity:`0`})]}),(0,A.jsxs)(`linearGradient`,{id:`ecg-grad3`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#06B6D4`,stopOpacity:`0`}),(0,A.jsx)(`stop`,{offset:`30%`,stopColor:`#06B6D4`,stopOpacity:`0.28`}),(0,A.jsx)(`stop`,{offset:`70%`,stopColor:`#6366F1`,stopOpacity:`0.28`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#6366F1`,stopOpacity:`0`})]})]})]}),(0,A.jsx)(`div`,{className:`ab-heart ab-heart-1`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,style:{animation:`heart-beat 1.2s ease-in-out infinite`},children:[(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`url(#hg1)`,opacity:`0.09`}),(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`none`,stroke:`#6366F1`,strokeWidth:`1.5`,opacity:`0.25`}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`hg1`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#6366F1`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#3B82F6`})]})})]})}),(0,A.jsx)(`div`,{className:`ab-heart ab-heart-2`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,style:{animation:`heart-beat2 0.9s ease-in-out infinite 0.3s`},children:[(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`#3B82F6`,opacity:`0.07`}),(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`none`,stroke:`#3B82F6`,strokeWidth:`1.2`,opacity:`0.2`})]})}),(0,A.jsx)(`div`,{className:`ab-heart ab-heart-3`,children:(0,A.jsx)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`none`,stroke:`#06B6D4`,strokeWidth:`1.5`,opacity:`0.2`})})}),(0,A.jsx)(`div`,{className:`ab-heart ab-heart-4`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,style:{animation:`heart-beat 1.4s ease-in-out infinite 0.6s`},children:[(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`url(#hg4)`,opacity:`0.08`}),(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`none`,stroke:`#6366F1`,strokeWidth:`1.2`,opacity:`0.22`}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`hg4`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#06B6D4`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#6366F1`})]})})]})}),(0,A.jsx)(`div`,{className:`ab-heart ab-heart-5`,children:(0,A.jsx)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80 Z`,fill:`none`,stroke:`#6366F1`,strokeWidth:`1`,opacity:`0.3`})})}),(0,A.jsx)(`div`,{className:`ab-cross ab-cross-1`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 40 40`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`rect`,{x:`15`,y:`2`,width:`10`,height:`36`,rx:`3`,fill:`#6366F1`,opacity:`0.12`}),(0,A.jsx)(`rect`,{x:`2`,y:`15`,width:`36`,height:`10`,rx:`3`,fill:`#6366F1`,opacity:`0.12`})]})}),(0,A.jsx)(`div`,{className:`ab-cross ab-cross-2`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 40 40`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`rect`,{x:`15`,y:`2`,width:`10`,height:`36`,rx:`3`,fill:`#3B82F6`,opacity:`0.1`}),(0,A.jsx)(`rect`,{x:`2`,y:`15`,width:`36`,height:`10`,rx:`3`,fill:`#3B82F6`,opacity:`0.1`})]})}),(0,A.jsx)(`div`,{className:`ab-pulse-ring ab-pr-1`}),(0,A.jsx)(`div`,{className:`ab-pulse-ring ab-pr-2`}),(0,A.jsx)(`div`,{className:`ab-pulse-ring ab-pr-3`})]}),(0,A.jsxs)(`div`,{className:`ab-z`,children:[(0,A.jsxs)(`section`,{className:`ab-hero`,children:[(0,A.jsxs)(`div`,{className:`ab-pill`,children:[(0,A.jsx)(`span`,{className:`ab-pdot`}),`About Us`]}),(0,A.jsxs)(`h1`,{className:`ab-h1`,children:[`Care made `,(0,A.jsx)(`em`,{children:`simpler,`}),(0,A.jsx)(`br`,{}),`faster, and more human.`]}),(0,A.jsx)(`p`,{className:`ab-hero-sub`,children:`Appointy helps people book healthcare appointments easily and manage their care journey with confidence.`}),(0,A.jsx)(`div`,{className:`ab-stats`,children:n.map((e,t)=>(0,A.jsxs)(`div`,{className:`ab-stat`,children:[(0,A.jsx)(`div`,{className:`ab-stat-num`,children:e.num}),(0,A.jsx)(`div`,{className:`ab-stat-lbl`,children:e.label})]},t))})]}),(0,A.jsx)(`div`,{className:`ab-divider`}),(0,A.jsxs)(`section`,{className:`ab-story`,children:[(0,A.jsxs)(`div`,{className:`ab-img-outer`,children:[(0,A.jsx)(`div`,{className:`ab-img-glow`}),(0,A.jsxs)(`div`,{className:`ab-img-frame`,children:[(0,A.jsx)(`img`,{src:_r.about_image,alt:`About Appointy`}),(0,A.jsx)(`div`,{className:`ab-img-overlay`})]}),(0,A.jsxs)(`div`,{className:`ab-img-badge`,children:[(0,A.jsx)(`div`,{className:`ab-badge-icon`,children:(0,A.jsx)(`svg`,{width:`18`,height:`18`,fill:`none`,viewBox:`0 0 24 24`,stroke:`white`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`ab-badge-lbl`,children:`Certified Platform`}),(0,A.jsx)(`div`,{className:`ab-badge-val`,children:`HIPAA Compliant`})]})]}),(0,A.jsxs)(`div`,{className:`ab-img-accent`,children:[(0,A.jsx)(`div`,{className:`ab-accent-num`,children:`12+`}),(0,A.jsxs)(`div`,{className:`ab-accent-lbl`,children:[`Years of`,(0,A.jsx)(`br`,{}),`Excellence`]})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`ab-section-lbl`,children:[`Our Story `,(0,A.jsx)(`span`,{className:`ab-section-line`})]}),(0,A.jsxs)(`h2`,{className:`ab-h2`,children:[`Built to improve the`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`span`,{children:`healthcare experience.`})]}),(0,A.jsx)(`p`,{className:`ab-p`,children:`Welcome to Appointy — your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges people face when scheduling doctor appointments and keeping track of their health journey.`}),(0,A.jsx)(`p`,{className:`ab-p`,children:`We continuously improve the platform with modern tools, intuitive design, and a smoother experience for patients and providers alike. Whether booking your first appointment or managing ongoing care, Appointy supports every step.`}),(0,A.jsxs)(`div`,{className:`ab-vision`,children:[(0,A.jsxs)(`div`,{className:`ab-vision-lbl`,children:[`Our Vision `,(0,A.jsx)(`span`,{className:`ab-vision-line`})]}),(0,A.jsx)(`p`,{className:`ab-vision-text`,children:`To create a seamless healthcare experience for every user — making access to care simpler, faster, and more reliable for millions of patients worldwide.`})]})]})]}),(0,A.jsx)(`section`,{className:`ab-why`,children:(0,A.jsxs)(`div`,{className:`ab-why-inner`,children:[(0,A.jsxs)(`div`,{className:`ab-why-hdr`,children:[(0,A.jsxs)(`div`,{className:`ab-pill`,style:{marginBottom:14},children:[(0,A.jsx)(`span`,{className:`ab-pdot`}),`Why Choose Us`]}),(0,A.jsxs)(`h2`,{className:`ab-why-h2`,children:[`A better way to manage`,(0,A.jsx)(`br`,{}),`your `,(0,A.jsx)(`em`,{children:`health appointments.`})]}),(0,A.jsx)(`p`,{className:`ab-why-sub`,children:`Everything we build is designed around one goal — putting you in control of your health.`})]}),(0,A.jsx)(`div`,{className:`ab-cards`,children:t.map((e,t)=>(0,A.jsxs)(`div`,{className:`ab-card`,style:{"--acc":e.accent,"--bdr":e.accentBorder,"--sh":e.accentLight,"--glow":e.accentLight,"--orb":e.accentLight,animationDelay:`${t*.1}s`},children:[(0,A.jsx)(`div`,{className:`ab-card-icon`,style:{background:e.accentLight,border:`1px solid ${e.accentBorder}`,fontSize:24},children:e.emoji}),(0,A.jsxs)(`div`,{className:`ab-card-wm`,children:[`0`,t+1]}),(0,A.jsx)(`div`,{className:`ab-card-tag`,style:{color:e.accent},children:e.title}),(0,A.jsx)(`div`,{className:`ab-card-title`,children:e.title}),(0,A.jsx)(`div`,{className:`ab-card-ln`}),(0,A.jsx)(`p`,{className:`ab-card-body`,children:e.desc})]},t))})]})}),(0,A.jsx)(`div`,{className:`ab-cta-wrap`,children:(0,A.jsxs)(`div`,{className:`ab-cta`,children:[(0,A.jsx)(`div`,{className:`ab-cta-grid`}),(0,A.jsx)(`div`,{className:`ab-cta-ecg`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 1200 120`,preserveAspectRatio:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`path`,{d:`M0,60 L80,60 L100,60 L110,30 L120,90 L130,0 L145,120 L158,60 L220,60 L280,60 L290,40 L300,80 L310,60 L400,60 L430,60 L440,32 L450,88 L458,8 L472,112 L482,60 L560,60 L640,60 L650,42 L660,78 L670,60 L760,60 L800,60 L810,30 L820,90 L828,2 L842,118 L852,60 L940,60 L1020,60 L1030,44 L1040,76 L1050,60 L1140,60 L1200,60`,fill:`none`,stroke:`url(#cta-ecg-g)`,strokeWidth:`2`,strokeDasharray:`600`,strokeDashoffset:`600`,style:{animation:`ecg-march3 4s linear infinite`}}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`cta-ecg-g`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#818CF8`,stopOpacity:`0`}),(0,A.jsx)(`stop`,{offset:`30%`,stopColor:`#818CF8`,stopOpacity:`1`}),(0,A.jsx)(`stop`,{offset:`70%`,stopColor:`#60A5FA`,stopOpacity:`1`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#60A5FA`,stopOpacity:`0`})]})})]})}),(0,A.jsxs)(`div`,{className:`ab-cta-left`,children:[(0,A.jsxs)(`div`,{className:`ab-cta-pill`,children:[(0,A.jsx)(`span`,{className:`ab-pdot`,style:{background:`#818CF8`,boxShadow:`none`}}),`Built for Patients`]}),(0,A.jsxs)(`h3`,{className:`ab-cta-h3`,children:[`Book smarter.`,(0,A.jsx)(`br`,{}),(0,A.jsx)(`em`,{children:`Feel better.`})]}),(0,A.jsx)(`p`,{className:`ab-cta-sub`,children:`Every part of the experience is designed to reduce friction, save time, and make healthcare access feel effortless.`}),(0,A.jsxs)(`button`,{className:`ab-cta-btn`,onClick:()=>e(`/doctors`),children:[(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})}),`Book an Appointment`]})]}),(0,A.jsx)(`div`,{className:`ab-cta-stats`,children:n.map((e,t)=>(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`ab-cta-num`,children:e.num}),(0,A.jsx)(`div`,{className:`ab-cta-lbl`,children:e.label})]},t))})]})})]})]})]})},Qo=()=>{dt();let{backendUrl:e}=(0,v.useContext)(Bo),[t,n]=(0,v.useState)({name:``,email:``,subject:``,message:``}),[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(``);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

        .cr { font-family: 'Plus Jakarta Sans', sans-serif; background: #f7f5f0; min-height: 100vh; overflow-x: hidden; }

        /* ── HERO ── */
        .cr-hero {
          background: #060912;
          padding: 10px 0 5px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cr-hero::before {
          content: '';
          position: absolute;
          top: -10px; left: 50%;
          transform: translateX(-50%);
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 65%);
          pointer-events: none;
        }

        .cr-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .cr-hero-fade {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #f7f5f0);
          pointer-events: none;
          z-index: 2;
        }

        .cr-hero-inner { position: relative; z-index: 3; max-width: 1240px; margin: 0 auto; padding: 0 24px; }

        .cr-hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: #60A5FA;
          margin-bottom: 24px;
        }

        .cr-hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #3B82F6; box-shadow: 0 0 8px #3B82F6;
          animation: cr-pulse 2s infinite;
        }

        @keyframes cr-pulse {
          0%,100% { opacity:1; box-shadow:0 0 8px #3B82F6; }
          50%      { opacity:.4; box-shadow:0 0 3px #3B82F6; }
        }

        .cr-hero h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 5.5vw, 64px);
          font-weight: 400;
          color: #fff;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin-bottom: 18px;
          position: relative; z-index: 1;
        }

        .cr-hero h1 em {
          font-style: italic;
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cr-hero p {
          font-size: 15px; font-weight: 300;
          color: rgba(255,255,255,0.5);
          max-width: 500px; margin: 0 auto;
          line-height: 1.85; position: relative; z-index: 1;
        }

        /* ── TOPLINE ── */
        .cr-topline {
          width: 100%; height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(59,130,246,0.5) 30%,
            rgba(99,102,241,0.9) 50%,
            rgba(6,182,212,0.5) 70%,
            transparent
          );
          box-shadow: 0 0 18px rgba(99,102,241,0.3);
        }

        /* ── BODY ── */
        .cr-body { padding: 24px 0 30px; }
        .cr-wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

        .cr-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 36px;
          align-items: start;
        }

        /* ── LEFT PANEL ── */
        .cr-left { display: flex; flex-direction: column; gap: 18px; }

        .cr-img-wrap {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 24px 64px rgba(15,23,42,0.14);
        }

        .cr-img-wrap img { width: 100%; display: block; object-fit: cover; }

        .cr-img-badge {
          position: absolute; bottom: 14px; left: 14px;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 11px 16px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
        }

        .cr-img-badge-icon {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(99,102,241,0.35);
        }

        .cr-img-badge-label { font-size: 10px; color: #94A3B8; margin-bottom: 2px; font-weight: 500; }
        .cr-img-badge-val   { font-size: 13px; font-weight: 700; color: #0F172A; }

        /* INFO CARDS GRID */
        .cr-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .cr-info-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 18px;
          padding: 18px;
          transition: all 0.25s ease;
        }

        .cr-info-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(59,130,246,0.1);
          border-color: rgba(99,102,241,0.25);
        }

        .cr-info-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(99,102,241,0.1));
          display: flex; align-items: center; justify-content: center;
          color: #3B82F6; margin-bottom: 12px;
        }

        .cr-info-label {
          font-size: 9px; font-weight: 700;
          letter-spacing: 1.8px; text-transform: uppercase;
          color: #c4b5fd; margin-bottom: 5px;
        }

        .cr-info-val { font-size: 13px; color: #1E293B; font-weight: 500; line-height: 1.6; }

        /* CAREERS STRIP */
        .cr-careers {
          background: #060912;
          border-radius: 20px;
          padding: 24px 28px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          position: relative; overflow: hidden;
          border: 1px solid rgba(59,130,246,0.15);
        }

        .cr-careers::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .cr-careers-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 5px; position: relative; z-index: 1; }
        .cr-careers-sub   { font-size: 11.5px; font-weight: 300; color: rgba(255,255,255,0.45); line-height: 1.65; position: relative; z-index: 1; }

        .cr-careers-btn {
          flex-shrink: 0;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          color: #fff; border: none; border-radius: 100px;
          padding: 10px 20px;
          font-size: 12px; font-weight: 600;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer; transition: all 0.25s; white-space: nowrap;
          box-shadow: 0 6px 18px rgba(99,102,241,0.35);
          position: relative; z-index: 1;
        }

        .cr-careers-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(99,102,241,0.5); }

        /* ── FORM CARD ── */
        .cr-form-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 28px;
          padding: 48px;
          box-shadow: 0 24px 64px rgba(15,23,42,0.07);
          position: relative;
          overflow: hidden;
        }

        .cr-form-card::before {
          content: '';
          position: absolute; top: 0; right: 0;
          width: 220px; height: 220px;
          background: radial-gradient(circle at top right, rgba(99,102,241,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .cr-form-heading {
          font-family: 'DM Serif Display', serif;
          font-size: 30px; font-weight: 400;
          color: #0F172A; letter-spacing: -0.5px;
          margin-bottom: 6px; line-height: 1.2;
        }

        .cr-form-heading span { font-style: italic; color: #6366F1; }

        .cr-form-sub {
          font-size: 13px; font-weight: 300;
          color: #94A3B8; line-height: 1.75;
          margin-bottom: 36px;
        }

        .cr-form-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(99,102,241,0.3), transparent);
          margin-bottom: 32px;
        }

        .cr-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .cr-form-group { margin-bottom: 20px; }

        .cr-label {
          display: block;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #374151; margin-bottom: 8px;
        }

        .cr-input-wrap { position: relative; }

        .cr-input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          color: #CBD5E1; display: flex; align-items: center;
          pointer-events: none;
        }

        .cr-input-icon.top { top: 16px; transform: none; }

        .cr-input {
          width: 100%;
          background: #F8FAFC;
          border: 1.5px solid #E9EEF5;
          border-radius: 12px;
          padding: 13px 14px 13px 42px;
          font-size: 13.5px; font-weight: 400;
          color: #0F172A;
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }

        .cr-input::placeholder { color: #CBD5E1; }

        .cr-input:focus {
          border-color: #6366F1;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }

        textarea.cr-input {
          resize: none; height: 128px;
          padding-top: 13px; line-height: 1.65;
        }

        /* ── ERROR BANNER ── */
        .cr-error {
          display: flex; align-items: flex-start; gap: 10px;
          background: #FFF1F2;
          border: 1.5px solid #FECDD3;
          border-radius: 12px;
          padding: 13px 16px;
          margin-bottom: 20px;
          animation: cr-error-in 0.3s ease;
        }

        @keyframes cr-error-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cr-error-icon {
          flex-shrink: 0; margin-top: 1px;
          color: #F43F5E;
        }

        .cr-error-txt {
          font-size: 13px; font-weight: 500;
          color: #BE123C; line-height: 1.5;
        }

        .cr-error-close {
          margin-left: auto; flex-shrink: 0;
          background: none; border: none;
          color: #FDA4AF; cursor: pointer;
          padding: 0; line-height: 1;
          font-size: 16px;
          transition: color 0.2s;
        }

        .cr-error-close:hover { color: #F43F5E; }

        /* ── SUBMIT BTN ── */
        .cr-submit {
          width: 100%;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          color: #fff; border: none; border-radius: 14px;
          padding: 16px;
          font-size: 13.5px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(99,102,241,0.3);
          margin-top: 8px;
        }

        .cr-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(99,102,241,0.45);
        }

        .cr-submit:disabled {
          opacity: 0.7; cursor: not-allowed;
        }

        .cr-submit.sent {
          background: linear-gradient(135deg, #10B981, #059669);
          box-shadow: 0 8px 24px rgba(16,185,129,0.3);
        }

        .cr-spinner {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          animation: cr-spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes cr-spin { to { transform: rotate(360deg); } }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cr-grid { grid-template-columns: 1fr; }
          .cr-form-card { padding: 32px; }
        }
        @media (max-width: 640px) {
          .cr-hero { padding: 60px 0 56px; }
          .cr-wrap { padding: 0 16px; }
          .cr-info-grid { grid-template-columns: 1fr; }
          .cr-form-row { grid-template-columns: 1fr; }
          .cr-careers { flex-direction: column; align-items: flex-start; }
          .cr-careers-btn { width: 100%; text-align: center; }
          .cr-form-heading { font-size: 26px; }
        }
      `}),(0,A.jsxs)(`div`,{className:`cr`,children:[(0,A.jsxs)(`div`,{className:`cr-hero`,children:[(0,A.jsxs)(`div`,{className:`cr-hero-inner`,children:[(0,A.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`24px`},children:(0,A.jsxs)(`div`,{className:`cr-hero-badge`,children:[(0,A.jsx)(`span`,{className:`cr-hero-badge-dot`}),`We'd love to hear from you`]})}),(0,A.jsxs)(`h1`,{children:[`Get in `,(0,A.jsx)(`em`,{children:`Touch`})]}),(0,A.jsx)(`p`,{children:`Reach out to our team for appointments, support, or partnership inquiries. We're here 24/7.`})]}),(0,A.jsx)(`div`,{className:`cr-hero-fade`})]}),(0,A.jsx)(`div`,{className:`cr-topline`}),(0,A.jsx)(`div`,{className:`cr-body`,children:(0,A.jsx)(`div`,{className:`cr-wrap`,children:(0,A.jsxs)(`div`,{className:`cr-grid`,children:[(0,A.jsxs)(`div`,{className:`cr-left`,children:[(0,A.jsxs)(`div`,{className:`cr-img-wrap`,children:[(0,A.jsx)(`img`,{src:_r.contact_image,alt:`Our office`}),(0,A.jsxs)(`div`,{className:`cr-img-badge`,children:[(0,A.jsx)(`div`,{className:`cr-img-badge-icon`,children:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`white`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`cr-img-badge-label`,children:`Response Time`}),(0,A.jsx)(`div`,{className:`cr-img-badge-val`,children:`Under 2 hours`})]})]})]}),(0,A.jsxs)(`div`,{className:`cr-info-grid`,children:[(0,A.jsxs)(`div`,{className:`cr-info-card`,children:[(0,A.jsx)(`div`,{className:`cr-info-icon`,children:(0,A.jsxs)(`svg`,{width:`18`,height:`18`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:[(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`}),(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 11a3 3 0 11-6 0 3 3 0 016 0z`})]})}),(0,A.jsx)(`div`,{className:`cr-info-label`,children:`Office`}),(0,A.jsxs)(`div`,{className:`cr-info-val`,children:[`54709 Willms Station`,(0,A.jsx)(`br`,{}),`Suite 350, Washington`]})]}),(0,A.jsxs)(`div`,{className:`cr-info-card`,children:[(0,A.jsx)(`div`,{className:`cr-info-icon`,children:(0,A.jsx)(`svg`,{width:`18`,height:`18`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})})}),(0,A.jsx)(`div`,{className:`cr-info-label`,children:`Phone`}),(0,A.jsx)(`div`,{className:`cr-info-val`,children:`(415) 555-0132`})]}),(0,A.jsxs)(`div`,{className:`cr-info-card`,children:[(0,A.jsx)(`div`,{className:`cr-info-icon`,children:(0,A.jsx)(`svg`,{width:`18`,height:`18`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})}),(0,A.jsx)(`div`,{className:`cr-info-label`,children:`Email`}),(0,A.jsx)(`div`,{className:`cr-info-val`,children:`support@medicare.in`})]}),(0,A.jsxs)(`div`,{className:`cr-info-card`,children:[(0,A.jsx)(`div`,{className:`cr-info-icon`,children:(0,A.jsx)(`svg`,{width:`18`,height:`18`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})})}),(0,A.jsx)(`div`,{className:`cr-info-label`,children:`Hours`}),(0,A.jsxs)(`div`,{className:`cr-info-val`,children:[`24 / 7`,(0,A.jsx)(`br`,{}),`Always available`]})]})]}),(0,A.jsxs)(`div`,{className:`cr-careers`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`cr-careers-title`,children:`Careers at MedCare`}),(0,A.jsx)(`div`,{className:`cr-careers-sub`,children:`Join our team — explore open roles across engineering, care, and operations.`})]}),(0,A.jsx)(`button`,{className:`cr-careers-btn`,onClick:()=>window.open(`http://localhost:5174/`,`_blank`),children:`Explore Jobs →`})]})]}),(0,A.jsxs)(`div`,{className:`cr-form-card`,children:[(0,A.jsxs)(`div`,{className:`cr-form-heading`,children:[`Send us a `,(0,A.jsx)(`span`,{children:`Message`})]}),(0,A.jsx)(`p`,{className:`cr-form-sub`,children:`Fill out the form below and our team will get back to you within 2 hours.`}),(0,A.jsx)(`div`,{className:`cr-form-divider`}),s&&(0,A.jsxs)(`div`,{className:`cr-error`,children:[(0,A.jsx)(`span`,{className:`cr-error-icon`,children:(0,A.jsx)(`svg`,{width:`17`,height:`17`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z`})})}),(0,A.jsx)(`span`,{className:`cr-error-txt`,children:s}),(0,A.jsx)(`button`,{className:`cr-error-close`,onClick:()=>c(``),children:`✕`})]}),(0,A.jsxs)(`form`,{onSubmit:async r=>{r.preventDefault(),c(``),o(!0);try{let{data:r}=await H.post(e+`/api/user/contact`,t);r.success?(i(!0),n({name:``,email:``,subject:``,message:``}),setTimeout(()=>i(!1),3e3)):c(r.message||`Something went wrong. Please try again.`)}catch(e){c(e.response?.data?.message||e.message||`Network error. Please check your connection.`)}finally{o(!1)}},children:[(0,A.jsxs)(`div`,{className:`cr-form-row`,children:[(0,A.jsxs)(`div`,{className:`cr-form-group`,children:[(0,A.jsx)(`label`,{className:`cr-label`,children:`Full Name`}),(0,A.jsxs)(`div`,{className:`cr-input-wrap`,children:[(0,A.jsx)(`span`,{className:`cr-input-icon`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z`})})}),(0,A.jsx)(`input`,{className:`cr-input`,type:`text`,placeholder:`Your full name`,value:t.name,onChange:e=>n({...t,name:e.target.value}),required:!0})]})]}),(0,A.jsxs)(`div`,{className:`cr-form-group`,children:[(0,A.jsx)(`label`,{className:`cr-label`,children:`Email Address`}),(0,A.jsxs)(`div`,{className:`cr-input-wrap`,children:[(0,A.jsx)(`span`,{className:`cr-input-icon`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})}),(0,A.jsx)(`input`,{className:`cr-input`,type:`email`,placeholder:`you@email.com`,value:t.email,onChange:e=>n({...t,email:e.target.value}),required:!0})]})]})]}),(0,A.jsxs)(`div`,{className:`cr-form-group`,children:[(0,A.jsx)(`label`,{className:`cr-label`,children:`Subject`}),(0,A.jsxs)(`div`,{className:`cr-input-wrap`,children:[(0,A.jsx)(`span`,{className:`cr-input-icon`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z`})})}),(0,A.jsx)(`input`,{className:`cr-input`,type:`text`,placeholder:`How can we help?`,value:t.subject,onChange:e=>n({...t,subject:e.target.value}),required:!0})]})]}),(0,A.jsxs)(`div`,{className:`cr-form-group`,children:[(0,A.jsx)(`label`,{className:`cr-label`,children:`Message`}),(0,A.jsxs)(`div`,{className:`cr-input-wrap`,children:[(0,A.jsx)(`span`,{className:`cr-input-icon top`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z`})})}),(0,A.jsx)(`textarea`,{className:`cr-input`,placeholder:`Tell us more about your inquiry...`,value:t.message,onChange:e=>n({...t,message:e.target.value}),required:!0})]})]}),(0,A.jsx)(`button`,{type:`submit`,className:`cr-submit${r?` sent`:``}`,disabled:a,children:a?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:`cr-spinner`}),`Sending...`]}):r?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})}),`Message Sent!`]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 19l9 2-9-18-9 18 9-2zm0 0v-8`})}),`Send Message`,(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})})]})]})]})})})]})]})},$o=()=>{let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(!1),o=(0,v.useRef)(null),s=(0,v.useRef)(null),{token:c,backendUrl:l,userData:u,setUserData:d,loadUserProfileData:f}=(0,v.useContext)(Bo);(0,v.useEffect)(()=>{let e=e=>{let t=e.clientX/window.innerWidth,n=e.clientY/window.innerHeight;o.current&&(o.current.style.transform=`translate(${(t-.5)*30}px, ${(n-.5)*20}px)`),s.current&&(s.current.style.transform=`translate(${(t-.5)*-20}px, ${(n-.5)*-28}px)`)};return window.addEventListener(`mousemove`,e),()=>window.removeEventListener(`mousemove`,e)},[]);let p=async()=>{a(!0);try{let e=new FormData;e.append(`name`,u.name),e.append(`phone`,u.phone),e.append(`address`,JSON.stringify(u.address)),e.append(`gender`,u.gender),e.append(`dob`,u.dob),e.append(`social`,JSON.stringify(u.social)),n&&e.append(`image`,n);let{data:i}=await H.post(l+`/api/user/update-profile`,e,{headers:{token:c}});i.success?(j.success(i.message),await f(),t(!1),r(!1)):j.error(i.message)}catch(e){j.error(e.message)}finally{a(!1)}};if(!u)return null;let m=[{icon:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z`})}),label:`Account Status`,value:`Verified`,accent:`#10B981`,accentBg:`rgba(16,185,129,0.15)`},{icon:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})}),label:`Member Since`,value:u.joiningYear||new Date(u.createdAt).getFullYear(),accent:`#60A5FA`,accentBg:`rgba(59,130,246,0.15)`},{icon:(0,A.jsx)(`svg`,{width:`16`,height:`16`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`})}),label:`Health Score`,value:`Excellent`,accent:`#F472B6`,accentBg:`rgba(244,114,182,0.15)`}],h=[{key:`twitter`,label:`X (Twitter)`,placeholder:`@username`,icon:(0,A.jsx)(`svg`,{width:`14`,height:`14`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`})}),color:`#fff`},{key:`linkedin`,label:`LinkedIn`,placeholder:`linkedin.com/in/username`,icon:(0,A.jsx)(`svg`,{width:`14`,height:`14`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})}),color:`#0A66C2`},{key:`instagram`,label:`Instagram`,placeholder:`@username`,icon:(0,A.jsx)(`svg`,{width:`14`,height:`14`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z`})}),color:`#E1306C`},{key:`github`,label:`GitHub`,placeholder:`github.com/username`,icon:(0,A.jsx)(`svg`,{width:`14`,height:`14`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`})}),color:`#fff`}];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fraunces:ital,wght@0,700;0,800;1,700;1,800&display=swap');

        @keyframes mp-blob-morph  { 0%,100%{border-radius:60% 40% 70% 30%/45% 55% 45% 55%} 50%{border-radius:40% 60% 35% 65%/55% 40% 65% 45%} }
        @keyframes mp-blob-morph2 { 0%,100%{border-radius:40% 60% 55% 45%/55% 40% 60% 45%} 50%{border-radius:65% 35% 45% 55%/40% 65% 35% 60%} }
        @keyframes mp-float-ring  { 0%,100%{transform:rotate(0deg) scale(1);opacity:.25} 50%{transform:rotate(180deg) scale(1.08);opacity:.45} }
        @keyframes mp-float-ring2 { 0%,100%{transform:rotate(0deg) scale(1);opacity:.15} 50%{transform:rotate(-180deg) scale(1.12);opacity:.3} }
        @keyframes mp-particle-float { 0%,100%{transform:translateY(0) rotate(0deg);opacity:.6} 50%{transform:translateY(-18px) rotate(180deg);opacity:1} }
        @keyframes mp-particle-float2 { 0%,100%{transform:translateY(0) scale(1);opacity:.4} 50%{transform:translateY(-22px) scale(1.3);opacity:.8} }
        @keyframes mp-scan { 0%{top:-2px;opacity:1} 88%{opacity:.25} 100%{top:104%;opacity:0} }
        @keyframes mp-fade-in { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mp-slide-left { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes mp-scale-in { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
        @keyframes mp-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes mp-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes mp-avatar-glow { 0%,100%{box-shadow:0 0 0 4px rgba(99,102,241,0.35),0 12px 40px rgba(99,102,241,0.25)} 50%{box-shadow:0 0 0 8px rgba(99,102,241,0.15),0 20px 56px rgba(99,102,241,0.4)} }
        @keyframes mp-line-grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes mp-dot-breathe { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,0.6)} 50%{box-shadow:0 0 0 6px rgba(99,102,241,0)} }
        @keyframes mp-grid-pulse { 0%,100%{opacity:.06} 50%{opacity:.12} }
        @keyframes mp-input-appear { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mp-card-in { from{opacity:0;transform:translateY(14px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes mp-info-card-in { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }

        /* ── ROOT ── */
        .mp-root { font-family:'Plus Jakarta Sans',sans-serif;min-height:100vh;width:100%;position:relative;overflow:hidden;display:flex;align-items:stretch;background:#080E1A; }

        /* BG */
        .mp-bg { position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none; }
        .mp-bg-base { position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 12% 18%,rgba(99,102,241,0.22) 0%,transparent 55%),radial-gradient(ellipse 60% 55% at 90% 85%,rgba(59,130,246,0.18) 0%,transparent 55%),radial-gradient(ellipse 50% 50% at 55% 50%,rgba(139,92,246,0.10) 0%,transparent 60%),#080E1A; }
        .mp-bg-grid { position:absolute;inset:0;background-image:linear-gradient(rgba(99,102,241,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px);background-size:52px 52px;animation:mp-grid-pulse 6s ease-in-out infinite; }
        .mp-blob { position:absolute;border-radius:60% 40% 70% 30%/45% 55% 45% 55%;transition:transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
        .mp-blob-1 { width:500px;height:500px;top:-130px;left:-110px;background:radial-gradient(circle at 40% 40%,rgba(99,102,241,0.28) 0%,rgba(139,92,246,0.18) 40%,transparent 70%);animation:mp-blob-morph 12s ease-in-out infinite;filter:blur(1px); }
        .mp-blob-2 { width:580px;height:580px;bottom:-170px;right:-130px;background:radial-gradient(circle at 60% 60%,rgba(59,130,246,0.24) 0%,rgba(6,182,212,0.16) 40%,transparent 70%);animation:mp-blob-morph2 15s ease-in-out infinite;filter:blur(1px); }
        .mp-ring { position:absolute;border-radius:50%; }
        .mp-ring-1 { width:380px;height:380px;top:-60px;right:80px;border:1px solid rgba(99,102,241,0.2);animation:mp-float-ring 14s ease-in-out infinite; }
        .mp-ring-2 { width:240px;height:240px;bottom:40px;left:60px;border:1px solid rgba(59,130,246,0.15);animation:mp-float-ring2 10s ease-in-out infinite; }
        .mp-particle { position:absolute;border-radius:50%; }
        .mp-p1{width:7px;height:7px;top:18%;left:22%;background:rgba(99,102,241,0.5);animation:mp-particle-float 4s ease-in-out infinite;}
        .mp-p2{width:5px;height:5px;top:65%;left:8%;background:rgba(59,130,246,0.45);animation:mp-particle-float2 5.5s ease-in-out 1s infinite;}
        .mp-p3{width:6px;height:6px;top:30%;right:10%;background:rgba(139,92,246,0.4);animation:mp-particle-float 6s ease-in-out .5s infinite;}
        .mp-p4{width:4px;height:4px;bottom:25%;right:22%;background:rgba(6,182,212,0.5);animation:mp-particle-float2 4.5s ease-in-out 2s infinite;}
        .mp-p5{width:8px;height:8px;bottom:40%;left:30%;background:rgba(16,185,129,0.4);animation:mp-particle-float 7s ease-in-out .8s infinite;}
        .mp-scan { position:absolute;left:0;right:0;height:2px;z-index:5;background:linear-gradient(90deg,transparent 0%,rgba(99,102,241,0.3) 30%,rgba(255,255,255,0.7) 50%,rgba(99,102,241,0.3) 70%,transparent 100%);animation:mp-scan 9s linear infinite;pointer-events:none; }

        /* PAGE */
        .mp-page { position:relative;z-index:10;width:100%;display:grid;grid-template-columns:360px 1fr;min-height:100vh; }

        /* ══ LEFT — DARK ══ */
        .mp-left { position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:56px 32px;background:rgba(10,16,32,0.85);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-right:1px solid rgba(99,102,241,0.18);animation:mp-slide-left .7s ease both;overflow:hidden; }
        .mp-left::before { content:'';position:absolute;top:0;right:0;width:1px;height:100%;background:linear-gradient(to bottom,transparent,rgba(99,102,241,0.7) 30%,rgba(59,130,246,0.9) 50%,rgba(99,102,241,0.7) 70%,transparent);box-shadow:0 0 12px rgba(99,102,241,0.4); }
        .mp-left::after { content:'';position:absolute;top:-80px;left:-80px;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%);pointer-events:none; }

        /* AVATAR */
        .mp-avatar-container { position:relative;margin-bottom:24px; }
        .mp-avatar-halo { position:absolute;inset:-14px;border-radius:50%;border:1px solid rgba(99,102,241,0.3);animation:mp-float-ring 6s ease-in-out infinite; }
        .mp-avatar-halo-2 { position:absolute;inset:-28px;border-radius:50%;border:1px dashed rgba(99,102,241,0.15);animation:mp-float-ring2 9s ease-in-out infinite; }
        .mp-avatar-img { width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid rgba(99,102,241,0.5);animation:mp-avatar-glow 4s ease-in-out infinite;display:block;position:relative;z-index:2;transition:all .3s ease; }
        .mp-avatar-edit-wrap { position:absolute;inset:0;z-index:3;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;background:rgba(99,102,241,0.7);backdrop-filter:blur(3px);opacity:0;transition:opacity .25s;cursor:pointer; }
        .mp-avatar-container:hover .mp-avatar-edit-wrap { opacity:1; }
        .mp-avatar-edit-lbl { font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#fff; }

        /* IDENTITY */
        .mp-identity { text-align:center;position:relative;z-index:2;width:100%; }
        .mp-identity-tag { display:inline-flex;align-items:center;gap:6px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.35);border-radius:100px;padding:4px 14px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#a5b4fc;margin-bottom:12px; }
        .mp-identity-tag-dot { width:5px;height:5px;border-radius:50%;background:#6366f1;animation:mp-dot-breathe 2s ease-in-out infinite; }
        .mp-identity-name-static { font-family:'Fraunces',serif;font-size:28px;font-weight:800;letter-spacing:-0.5px;line-height:1.1;margin-bottom:6px;animation:mp-fade-in .6s ease both; }
        .mp-shimmer-name { background:linear-gradient(90deg,#fff 0%,#a5b4fc 30%,#60a5fa 50%,#fff 70%);background-size:300% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:mp-shimmer 5s linear infinite; }
        .mp-identity-name-input { font-family:'Fraunces',serif;font-size:24px;font-weight:800;color:#fff;letter-spacing:-0.5px;background:rgba(99,102,241,0.1);border:1.5px solid rgba(99,102,241,0.4);border-radius:12px;padding:6px 14px;width:100%;text-align:center;outline:none;transition:all .2s;animation:mp-input-appear .3s ease both; }
        .mp-identity-name-input:focus { border-color:#6366f1;box-shadow:0 0 0 3px rgba(99,102,241,0.2);background:rgba(99,102,241,0.15); }
        .mp-identity-name-input::placeholder { color:#4f5a8a;font-weight:300; }
        .mp-identity-email { font-size:12px;color:#475569;font-weight:400;margin-top:4px; }

        .mp-left-divider { width:55%;height:1px;margin:20px auto;background:linear-gradient(90deg,transparent,rgba(99,102,241,0.4),transparent);transform-origin:left;animation:mp-line-grow .8s .5s ease both;position:relative;z-index:2; }

        /* ══ INFO CARDS (replacing stat pills) ══ */
        .mp-info-cards { display:flex;flex-direction:column;gap:10px;width:100%;position:relative;z-index:2; }

        .mp-info-card {
          display: flex; align-items: center; gap: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; padding: 13px 16px;
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          cursor: default; position: relative; overflow: hidden;
          animation: mp-info-card-in 0.4s ease both;
        }
        .mp-info-card::before { content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:3px 0 0 3px;background:var(--ic-accent,#6366f1);opacity:.7;transition:opacity .25s; }
        .mp-info-card:hover { background:rgba(255,255,255,0.07);border-color:rgba(255,255,255,0.12);transform:translateX(4px); }
        .mp-info-card:hover::before { opacity:1; }

        .mp-info-card-icon { width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--ic-accent,#6366f1); }
        .mp-info-card-text {}
        .mp-info-card-lbl { font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#475569;margin-bottom:3px; }
        .mp-info-card-val { font-size:14px;font-weight:700;color:#fff; }

        /* ══ RIGHT — LIGHT ══ */
        .mp-right { padding:56px 52px;display:flex;flex-direction:column;justify-content:center;animation:mp-fade-in .7s .1s ease both;overflow-y:auto;max-height:100vh;background:#F0F4FF;position:relative; }
        .mp-right::before { content:'';position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(circle,rgba(99,102,241,0.07) 1px,transparent 1px);background-size:28px 28px;mask-image:radial-gradient(ellipse 90% 90% at 60% 40%,black 40%,transparent 100%);-webkit-mask-image:radial-gradient(ellipse 90% 90% at 60% 40%,black 40%,transparent 100%); }
        .mp-right::after { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,#6366f1 30%,#3b82f6 50%,#6366f1 70%,transparent);box-shadow:0 0 20px rgba(99,102,241,0.35); }
        .mp-right-inner { position:relative;z-index:1; }

        /* PAGE TITLE */
        .mp-page-title { font-family:'Fraunces',serif;font-size:42px;font-weight:800;color:#0F172A;letter-spacing:-1.5px;line-height:1.1;margin-bottom:6px; }
        .mp-page-title em { font-style:italic;background:linear-gradient(135deg,#6366f1,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .mp-page-sub { font-size:14px;font-weight:400;color:#64748B;margin-bottom:36px;line-height:1.7; }
        .mp-right-divider { height:1px;margin-bottom:36px;background:linear-gradient(90deg,rgba(99,102,241,0.35) 0%,rgba(59,130,246,0.15) 50%,transparent 100%);position:relative; }
        .mp-right-divider::after { content:'';position:absolute;left:0;top:-2px;width:56px;height:4px;border-radius:4px;background:linear-gradient(90deg,#6366f1,#3b82f6);box-shadow:0 0 12px rgba(99,102,241,0.45); }

        /* SECTIONS */
        .mp-section { margin-bottom:28px; }
        .mp-section-head { display:flex;align-items:center;gap:12px;margin-bottom:16px; }
        .mp-section-icon-wrap { width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#3b82f6);display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;box-shadow:0 4px 12px rgba(99,102,241,0.35); }
        .mp-section-label { font-size:10px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:#6366F1; }
        .mp-section-rule { flex:1;height:1px;background:linear-gradient(90deg,rgba(99,102,241,0.25),transparent);transform-origin:left;animation:mp-line-grow .6s ease both; }

        /* FIELD GRID */
        .mp-field-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
        .mp-field-box { background:#fff;border:1.5px solid rgba(99,102,241,0.1);border-radius:16px;padding:16px 18px;box-shadow:0 2px 12px rgba(99,102,241,0.05),0 1px 3px rgba(0,0,0,0.03);transition:all .28s cubic-bezier(0.22,1,0.36,1);animation:mp-card-in .45s ease both;position:relative;overflow:hidden; }
        .mp-field-box::before { content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#6366f1,#3b82f6);opacity:0;transition:opacity .3s; }
        .mp-field-box:hover { border-color:rgba(99,102,241,0.28);box-shadow:0 10px 32px rgba(99,102,241,0.12),0 2px 8px rgba(0,0,0,0.04);transform:translateY(-3px); }
        .mp-field-box:hover::before { opacity:1; }
        .mp-field-box-label { font-size:9px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#94A3B8;margin-bottom:7px; }
        .mp-field-box-value { font-size:14px;font-weight:600;color:#0F172A;line-height:1.5; }
        .mp-field-box-value.accent { background:linear-gradient(135deg,#6366f1,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700; }
        .mp-field-input { width:100%;background:transparent;border:none;border-bottom:1.5px solid rgba(99,102,241,0.3);border-radius:0;padding:4px 0;font-size:14px;font-weight:600;color:#0F172A;font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color .2s;animation:mp-input-appear .3s ease both; }
        .mp-field-input:focus { border-bottom-color:#6366f1; }
        .mp-field-input::placeholder { color:#CBD5E1;font-weight:300; }
        select.mp-field-input { cursor:pointer; }

        /* ══ SOCIAL FIELDS ══ */
        .mp-social-grid { display:grid;grid-template-columns:1fr 1fr;gap:12px; }

        .mp-social-box {
          background: #fff;
          border: 1.5px solid rgba(99,102,241,0.1);
          border-radius: 16px; padding: 14px 16px;
          box-shadow: 0 2px 12px rgba(99,102,241,0.04);
          transition: all .28s cubic-bezier(0.22,1,0.36,1);
          animation: mp-card-in .45s ease both;
          position: relative; overflow: hidden;
          display: flex; align-items: center; gap: 12px;
        }
        .mp-social-box:hover { border-color:rgba(99,102,241,0.25);transform:translateY(-2px);box-shadow:0 8px 24px rgba(99,102,241,0.1); }

        .mp-social-icon {
          width: 32px; height: 32px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #fff;
        }

        .mp-social-content { flex: 1; min-width: 0; }
        .mp-social-label { font-size:9px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:#94A3B8;margin-bottom:5px; }
        .mp-social-value { font-size:13px;font-weight:600;color:#0F172A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
        .mp-social-value.empty { color:#CBD5E1;font-weight:300;font-size:12px; }

        /* social input */
        .mp-social-input { width:100%;background:transparent;border:none;border-bottom:1.5px solid rgba(99,102,241,0.25);padding:3px 0;font-size:13px;font-weight:500;color:#0F172A;font-family:'Plus Jakarta Sans',sans-serif;outline:none;transition:border-color .2s; }
        .mp-social-input:focus { border-bottom-color:#6366f1; }
        .mp-social-input::placeholder { color:#CBD5E1;font-weight:300; }

        /* ACTIONS */
        .mp-actions { display:flex;gap:12px;margin-top:8px;animation:mp-fade-in .5s .2s ease both; }
        .mp-btn-primary { position:relative;overflow:hidden;background:linear-gradient(135deg,#6366f1 0%,#3b82f6 100%);color:#fff;border:none;border-radius:14px;padding:14px 36px;font-size:14px;font-weight:700;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;transition:all .3s;box-shadow:0 6px 22px rgba(99,102,241,0.4);display:flex;align-items:center;gap:8px;letter-spacing:.3px; }
        .mp-btn-primary::before { content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);transition:left .4s ease; }
        .mp-btn-primary:hover::before { left:100%; }
        .mp-btn-primary:hover { transform:translateY(-2px);box-shadow:0 12px 36px rgba(99,102,241,0.5); }
        .mp-btn-primary:disabled { opacity:.6;cursor:not-allowed;transform:none; }
        .mp-spinner { width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;animation:mp-spin .7s linear infinite; }
        .mp-btn-secondary { background:#fff;color:#6366f1;border:1.5px solid rgba(99,102,241,0.3);border-radius:14px;padding:14px 28px;font-size:14px;font-weight:700;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;transition:all .25s;display:flex;align-items:center;gap:8px;box-shadow:0 2px 8px rgba(99,102,241,0.1); }
        .mp-btn-secondary:hover { background:linear-gradient(135deg,#6366f1,#3b82f6);color:#fff;border-color:transparent;transform:translateY(-2px);box-shadow:0 10px 32px rgba(99,102,241,0.38); }
        .mp-btn-ghost { background:transparent;color:#94A3B8;border:1.5px solid rgba(0,0,0,0.1);border-radius:14px;padding:14px 20px;font-size:13.5px;font-weight:600;font-family:'Plus Jakarta Sans',sans-serif;cursor:pointer;transition:all .2s; }
        .mp-btn-ghost:hover { color:#ef4444;border-color:rgba(239,68,68,0.25);background:rgba(239,68,68,0.05); }

        /* RESPONSIVE */
        @media (max-width:1024px) { .mp-page{grid-template-columns:300px 1fr} .mp-right{padding:48px 36px} }
        @media (max-width:768px) { .mp-page{grid-template-columns:1fr;grid-template-rows:auto 1fr} .mp-left{padding:40px 24px;border-right:none;border-bottom:1px solid rgba(99,102,241,0.15)} .mp-right{padding:32px 24px;max-height:none} .mp-field-grid,.mp-social-grid{grid-template-columns:1fr} .mp-page-title{font-size:32px} .mp-avatar-img{width:100px;height:100px} }
      `}),(0,A.jsxs)(`div`,{className:`mp-root`,children:[(0,A.jsxs)(`div`,{className:`mp-bg`,children:[(0,A.jsx)(`div`,{className:`mp-bg-base`}),(0,A.jsx)(`div`,{className:`mp-bg-grid`}),(0,A.jsx)(`div`,{className:`mp-blob mp-blob-1`,ref:o}),(0,A.jsx)(`div`,{className:`mp-blob mp-blob-2`,ref:s}),(0,A.jsx)(`div`,{className:`mp-ring mp-ring-1`}),(0,A.jsx)(`div`,{className:`mp-ring mp-ring-2`}),(0,A.jsx)(`div`,{className:`mp-particle mp-p1`}),(0,A.jsx)(`div`,{className:`mp-particle mp-p2`}),(0,A.jsx)(`div`,{className:`mp-particle mp-p3`}),(0,A.jsx)(`div`,{className:`mp-particle mp-p4`}),(0,A.jsx)(`div`,{className:`mp-particle mp-p5`}),(0,A.jsx)(`div`,{className:`mp-scan`})]}),(0,A.jsxs)(`div`,{className:`mp-page`,children:[(0,A.jsxs)(`div`,{className:`mp-left`,children:[(0,A.jsxs)(`div`,{className:`mp-avatar-container`,children:[(0,A.jsx)(`div`,{className:`mp-avatar-halo-2`}),(0,A.jsx)(`div`,{className:`mp-avatar-halo`}),(0,A.jsxs)(`label`,{htmlFor:`mp-img-input`,style:{cursor:e?`pointer`:`default`,display:`block`,borderRadius:`50%`,overflow:`hidden`,position:`relative`},children:[(0,A.jsx)(`img`,{className:`mp-avatar-img`,src:n?URL.createObjectURL(n):u.image,alt:u.name}),e&&(0,A.jsxs)(`div`,{className:`mp-avatar-edit-wrap`,children:[(0,A.jsxs)(`svg`,{width:`22`,height:`22`,fill:`none`,viewBox:`0 0 24 24`,stroke:`white`,strokeWidth:2,children:[(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z`}),(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 13a3 3 0 11-6 0 3 3 0 016 0z`})]}),(0,A.jsx)(`span`,{className:`mp-avatar-edit-lbl`,children:`Change`})]})]}),(0,A.jsx)(`input`,{id:`mp-img-input`,type:`file`,hidden:!0,onChange:e=>r(e.target.files[0])})]}),(0,A.jsxs)(`div`,{className:`mp-identity`,children:[(0,A.jsxs)(`div`,{className:`mp-identity-tag`,children:[(0,A.jsx)(`span`,{className:`mp-identity-tag-dot`}),`Patient`]}),e?(0,A.jsx)(`input`,{className:`mp-identity-name-input`,type:`text`,value:u.name,onChange:e=>d(t=>({...t,name:e.target.value})),placeholder:`Your name`}):(0,A.jsx)(`div`,{className:`mp-identity-name-static mp-shimmer-name`,children:u.name}),(0,A.jsx)(`div`,{className:`mp-identity-email`,children:u.email})]}),(0,A.jsx)(`div`,{className:`mp-left-divider`}),(0,A.jsx)(`div`,{className:`mp-info-cards`,children:m.map((e,t)=>(0,A.jsxs)(`div`,{className:`mp-info-card`,style:{"--ic-accent":e.accent,animationDelay:`${t*.1}s`},children:[(0,A.jsx)(`div`,{className:`mp-info-card-icon`,style:{background:e.accentBg},children:e.icon}),(0,A.jsxs)(`div`,{className:`mp-info-card-text`,children:[(0,A.jsx)(`div`,{className:`mp-info-card-lbl`,children:e.label}),(0,A.jsx)(`div`,{className:`mp-info-card-val`,style:{color:e.accent},children:e.value})]})]},t))})]}),(0,A.jsx)(`div`,{className:`mp-right`,children:(0,A.jsxs)(`div`,{className:`mp-right-inner`,children:[(0,A.jsx)(`div`,{className:`mp-page-title`,children:e?(0,A.jsxs)(A.Fragment,{children:[`Edit your `,(0,A.jsx)(`em`,{children:`Profile`})]}):(0,A.jsxs)(A.Fragment,{children:[`Your `,(0,A.jsx)(`em`,{children:`Profile`})]})}),(0,A.jsx)(`p`,{className:`mp-page-sub`,children:e?`Update your personal information and save changes.`:`Manage your personal details, contact info, and preferences.`}),(0,A.jsx)(`div`,{className:`mp-right-divider`}),(0,A.jsxs)(`div`,{className:`mp-section`,children:[(0,A.jsxs)(`div`,{className:`mp-section-head`,children:[(0,A.jsx)(`div`,{className:`mp-section-icon-wrap`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})}),(0,A.jsx)(`span`,{className:`mp-section-label`,children:`Contact Information`}),(0,A.jsx)(`div`,{className:`mp-section-rule`})]}),(0,A.jsxs)(`div`,{className:`mp-field-grid`,children:[(0,A.jsxs)(`div`,{className:`mp-field-box`,style:{animationDelay:`0.05s`},children:[(0,A.jsx)(`div`,{className:`mp-field-box-label`,children:`Email`}),(0,A.jsx)(`div`,{className:`mp-field-box-value accent`,children:u.email})]}),(0,A.jsxs)(`div`,{className:`mp-field-box`,style:{animationDelay:`0.1s`},children:[(0,A.jsx)(`div`,{className:`mp-field-box-label`,children:`Phone`}),e?(0,A.jsx)(`input`,{className:`mp-field-input`,type:`text`,value:u.phone,onChange:e=>d(t=>({...t,phone:e.target.value})),placeholder:`+91 XXXXX XXXXX`}):(0,A.jsx)(`div`,{className:`mp-field-box-value accent`,children:u.phone||`—`})]}),(0,A.jsxs)(`div`,{className:`mp-field-box`,style:{animationDelay:`0.15s`},children:[(0,A.jsx)(`div`,{className:`mp-field-box-label`,children:`Address Line 1`}),e?(0,A.jsx)(`input`,{className:`mp-field-input`,type:`text`,value:u.address?.line1||``,onChange:e=>d(t=>({...t,address:{...t.address||{},line1:e.target.value}})),placeholder:`Street / Building`}):(0,A.jsx)(`div`,{className:`mp-field-box-value`,children:u.address?.line1||`—`})]}),(0,A.jsxs)(`div`,{className:`mp-field-box`,style:{animationDelay:`0.2s`},children:[(0,A.jsx)(`div`,{className:`mp-field-box-label`,children:`Address Line 2`}),e?(0,A.jsx)(`input`,{className:`mp-field-input`,type:`text`,value:u.address?.line2||``,onChange:e=>d(t=>({...t,address:{...t.address||{},line2:e.target.value}})),placeholder:`City / State / PIN`}):(0,A.jsx)(`div`,{className:`mp-field-box-value`,children:u.address?.line2||`—`})]})]})]}),(0,A.jsxs)(`div`,{className:`mp-section`,children:[(0,A.jsxs)(`div`,{className:`mp-section-head`,children:[(0,A.jsx)(`div`,{className:`mp-section-icon-wrap`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z`})})}),(0,A.jsx)(`span`,{className:`mp-section-label`,children:`Basic Information`}),(0,A.jsx)(`div`,{className:`mp-section-rule`})]}),(0,A.jsxs)(`div`,{className:`mp-field-grid`,children:[(0,A.jsxs)(`div`,{className:`mp-field-box`,style:{animationDelay:`0.25s`},children:[(0,A.jsx)(`div`,{className:`mp-field-box-label`,children:`Gender`}),e?(0,A.jsxs)(`select`,{className:`mp-field-input`,value:u.gender,onChange:e=>d(t=>({...t,gender:e.target.value})),children:[(0,A.jsx)(`option`,{value:`Not Selected`,children:`Not Selected`}),(0,A.jsx)(`option`,{value:`Male`,children:`Male`}),(0,A.jsx)(`option`,{value:`Female`,children:`Female`})]}):(0,A.jsx)(`div`,{className:`mp-field-box-value`,children:u.gender||`—`})]}),(0,A.jsxs)(`div`,{className:`mp-field-box`,style:{animationDelay:`0.3s`},children:[(0,A.jsx)(`div`,{className:`mp-field-box-label`,children:`Date of Birth`}),e?(0,A.jsx)(`input`,{className:`mp-field-input`,type:`date`,value:u.dob,onChange:e=>d(t=>({...t,dob:e.target.value}))}):(0,A.jsx)(`div`,{className:`mp-field-box-value`,children:u.dob||`—`})]})]})]}),(0,A.jsxs)(`div`,{className:`mp-section`,children:[(0,A.jsxs)(`div`,{className:`mp-section-head`,children:[(0,A.jsx)(`div`,{className:`mp-section-icon-wrap`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1`})})}),(0,A.jsx)(`span`,{className:`mp-section-label`,children:`Social Accounts`}),(0,A.jsx)(`div`,{className:`mp-section-rule`})]}),(0,A.jsx)(`div`,{className:`mp-social-grid`,children:h.map((t,n)=>{let r=u.social?.[t.key]||``;return(0,A.jsxs)(`div`,{className:`mp-social-box`,style:{animationDelay:`${.35+n*.07}s`},children:[(0,A.jsx)(`div`,{className:`mp-social-icon`,style:{background:t.key===`instagram`?`linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)`:t.key===`linkedin`?`#0A66C2`:(t.key,`#1a1a2e`)},children:t.icon}),(0,A.jsxs)(`div`,{className:`mp-social-content`,children:[(0,A.jsx)(`div`,{className:`mp-social-label`,children:t.label}),e?(0,A.jsx)(`input`,{className:`mp-social-input`,type:`text`,value:r,placeholder:t.placeholder,onChange:e=>d(n=>({...n,social:{...n.social||{},[t.key]:e.target.value}}))}):(0,A.jsx)(`div`,{className:`mp-social-value${r?``:` empty`}`,children:r||`Not connected`})]})]},t.key)})})]}),(0,A.jsx)(`div`,{className:`mp-actions`,children:e?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`button`,{className:`mp-btn-primary`,onClick:p,disabled:i,children:i?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:`mp-spinner`}),`Saving…`]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})}),`Save Changes`]})}),(0,A.jsx)(`button`,{className:`mp-btn-ghost`,onClick:()=>{t(!1),r(!1)},children:`Cancel`})]}):(0,A.jsxs)(`button`,{className:`mp-btn-secondary`,onClick:()=>t(!0),children:[(0,A.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z`})}),`Edit Profile`]})})]})})]})]})]})},es=o(((e,t)=>{t.exports=function(){return typeof Promise==`function`&&Promise.prototype&&Promise.prototype.then}})),ts=o((e=>{var t,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw Error(`"version" cannot be null or undefined`);if(e<1||e>40)throw Error(`"version" should be in range from 1 to 40`);return e*4+17},e.getSymbolTotalCodewords=function(e){return n[e]},e.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if(typeof e!=`function`)throw Error(`"toSJISFunc" is not a valid function.`);t=e},e.isKanjiModeEnabled=function(){return t!==void 0},e.toSJIS=function(e){return t(e)}})),ns=o((e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`l`:case`low`:return e.L;case`m`:case`medium`:return e.M;case`q`:case`quartile`:return e.Q;case`h`:case`high`:return e.H;default:throw Error(`Unknown EC Level: `+t)}}e.isValid=function(e){return e&&e.bit!==void 0&&e.bit>=0&&e.bit<4},e.from=function(n,r){if(e.isValid(n))return n;try{return t(n)}catch{return r}}})),rs=o(((e,t)=>{function n(){this.buffer=[],this.length=0}n.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=n})),is=o(((e,t)=>{function n(e){if(!e||e<1)throw Error(`BitMatrix size must be defined and greater than 0`);this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}n.prototype.set=function(e,t,n,r){let i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=n})),as=o((e=>{var t=ts().getSymbolSize;e.getRowColCoords=function(e){if(e===1)return[];let n=Math.floor(e/7)+2,r=t(e),i=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let e=1;e<n-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},e.getPositions=function(t){let n=[],r=e.getRowColCoords(t),i=r.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)e===0&&t===0||e===0&&t===i-1||e===i-1&&t===0||n.push([r[e],r[t]]);return n}})),os=o((e=>{var t=ts().getSymbolSize,n=7;e.getPositions=function(e){let r=t(e);return[[0,0],[r-n,0],[0,r-n]]}})),ss=o((e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(e){return e!=null&&e!==``&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){let n=e.size,r=0,i=0,a=0,o=null,s=null;for(let c=0;c<n;c++){i=a=0,o=s=null;for(let l=0;l<n;l++){let n=e.get(c,l);n===o?i++:(i>=5&&(r+=t.N1+(i-5)),o=n,i=1),n=e.get(l,c),n===s?a++:(a>=5&&(r+=t.N1+(a-5)),s=n,a=1)}i>=5&&(r+=t.N1+(i-5)),a>=5&&(r+=t.N1+(a-5))}return r},e.getPenaltyN2=function(e){let n=e.size,r=0;for(let t=0;t<n-1;t++)for(let i=0;i<n-1;i++){let n=e.get(t,i)+e.get(t,i+1)+e.get(t+1,i)+e.get(t+1,i+1);(n===4||n===0)&&r++}return r*t.N2},e.getPenaltyN3=function(e){let n=e.size,r=0,i=0,a=0;for(let t=0;t<n;t++){i=a=0;for(let o=0;o<n;o++)i=i<<1&2047|e.get(t,o),o>=10&&(i===1488||i===93)&&r++,a=a<<1&2047|e.get(o,t),o>=10&&(a===1488||a===93)&&r++}return r*t.N3},e.getPenaltyN4=function(e){let n=0,r=e.data.length;for(let t=0;t<r;t++)n+=e.data[t];return Math.abs(Math.ceil(n*100/r/5)-10)*t.N4};function n(t,n,r){switch(t){case e.Patterns.PATTERN000:return(n+r)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(n+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return n*r%2+n*r%3==0;case e.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case e.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw Error(`bad maskPattern:`+t)}}e.applyMask=function(e,t){let r=t.size;for(let i=0;i<r;i++)for(let a=0;a<r;a++)t.isReserved(a,i)||t.xor(a,i,n(e,a,i))},e.getBestMask=function(t,n){let r=Object.keys(e.Patterns).length,i=0,a=1/0;for(let o=0;o<r;o++){n(o),e.applyMask(o,t);let r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),r<a&&(a=r,i=o)}return i}})),cs=o((e=>{var t=ns(),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,r){switch(r){case t.L:return n[(e-1)*4+0];case t.M:return n[(e-1)*4+1];case t.Q:return n[(e-1)*4+2];case t.H:return n[(e-1)*4+3];default:return}},e.getTotalCodewordsCount=function(e,n){switch(n){case t.L:return r[(e-1)*4+0];case t.M:return r[(e-1)*4+1];case t.Q:return r[(e-1)*4+2];case t.H:return r[(e-1)*4+3];default:return}}})),ls=o((e=>{var t=new Uint8Array(512),n=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)t[r]=e,n[e]=r,e<<=1,e&256&&(e^=285);for(let e=255;e<512;e++)t[e]=t[e-255]})(),e.log=function(e){if(e<1)throw Error(`log(`+e+`)`);return n[e]},e.exp=function(e){return t[e]},e.mul=function(e,r){return e===0||r===0?0:t[n[e]+n[r]]}})),us=o((e=>{var t=ls();e.mul=function(e,n){let r=new Uint8Array(e.length+n.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<n.length;a++)r[i+a]^=t.mul(e[i],n[a]);return r},e.mod=function(e,n){let r=new Uint8Array(e);for(;r.length-n.length>=0;){let e=r[0];for(let i=0;i<n.length;i++)r[i]^=t.mul(n[i],e);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},e.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let i=0;i<n;i++)r=e.mul(r,new Uint8Array([1,t.exp(i)]));return r}})),ds=o(((e,t)=>{var n=us();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(e){if(!this.genPoly)throw Error(`Encoder not initialized`);let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},t.exports=r})),fs=o((e=>{e.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}})),ps=o((e=>{var t=`[0-9]+`,n=`[A-Z $%*+\\-./:]+`,r=`(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+`;r=r.replace(/u/g,`\\u`);var i=`(?:(?![A-Z0-9 $%*+\\-./:]|`+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,`g`),e.BYTE_KANJI=RegExp(`[^A-Z0-9 $%*+\\-./:]+`,`g`),e.BYTE=new RegExp(i,`g`),e.NUMERIC=new RegExp(t,`g`),e.ALPHANUMERIC=new RegExp(n,`g`);var a=RegExp(`^`+r+`$`),o=RegExp(`^`+t+`$`),s=RegExp(`^[A-Z0-9 $%*+\\-./:]+$`);e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return o.test(e)},e.testAlphanumeric=function(e){return s.test(e)}})),ms=o((e=>{var t=fs(),n=ps();e.NUMERIC={id:`Numeric`,bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:`Alphanumeric`,bit:2,ccBits:[9,11,13]},e.BYTE={id:`Byte`,bit:4,ccBits:[8,16,16]},e.KANJI={id:`Kanji`,bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw Error(`Invalid mode: `+e);if(!t.isValid(n))throw Error(`Invalid version: `+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw Error(`Invalid mode`)},e.isValid=function(e){return e&&e.bit&&e.ccBits};function r(t){if(typeof t!=`string`)throw Error(`Param is not a string`);switch(t.toLowerCase()){case`numeric`:return e.NUMERIC;case`alphanumeric`:return e.ALPHANUMERIC;case`kanji`:return e.KANJI;case`byte`:return e.BYTE;default:throw Error(`Unknown mode: `+t)}}e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch{return n}}})),hs=o((e=>{var t=ts(),n=cs(),r=ns(),i=ms(),a=fs(),o=7973,s=t.getBCHDigit(o);function c(t,n,r){for(let i=1;i<=40;i++)if(n<=e.getCapacity(i,r,t))return i}function l(e,t){return i.getCharCountIndicator(e,t)+4}function u(e,t){let n=0;return e.forEach(function(e){let r=l(e.mode,t);n+=r+e.getBitsLength()}),n}function d(t,n){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,n,i.MIXED))return r}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,r,o){if(!a.isValid(e))throw Error(`Invalid QR Code version`);o===void 0&&(o=i.BYTE);let s=(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,r))*8;if(o===i.MIXED)return s;let c=s-l(o,e);switch(o){case i.NUMERIC:return Math.floor(c/10*3);case i.ALPHANUMERIC:return Math.floor(c/11*2);case i.KANJI:return Math.floor(c/13);case i.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(e,t){let n,i=r.from(t,r.M);if(Array.isArray(e)){if(e.length>1)return d(e,i);if(e.length===0)return 1;n=e[0]}else n=e;return c(n.mode,n.getLength(),i)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error(`Invalid QR Code version`);let n=e<<12;for(;t.getBCHDigit(n)-s>=0;)n^=o<<t.getBCHDigit(n)-s;return e<<12|n}})),gs=o((e=>{var t=ts(),n=1335,r=21522,i=t.getBCHDigit(n);e.getEncodedBits=function(e,a){let o=e.bit<<3|a,s=o<<10;for(;t.getBCHDigit(s)-i>=0;)s^=n<<t.getBCHDigit(s)-i;return(o<<10|s)^r}})),_s=o(((e,t)=>{var n=ms();function r(e){this.mode=n.NUMERIC,this.data=e.toString()}r.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t,n,r;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),r=parseInt(n,10),e.put(r,10);let i=this.data.length-t;i>0&&(n=this.data.substr(t),r=parseInt(n,10),e.put(r,i*3+1))},t.exports=r})),vs=o(((e,t)=>{var n=ms(),r=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`.split(``);function i(e){this.mode=n.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=r.indexOf(this.data[t])*45;n+=r.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(r.indexOf(this.data[t]),6)},t.exports=i})),ys=o(((e,t)=>{var n=ms();function r(e){this.mode=n.BYTE,typeof e==`string`?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}r.getBitsLength=function(e){return e*8},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)},t.exports=r})),bs=o(((e,t)=>{var n=ms(),r=ts();function i(e){this.mode=n.KANJI,this.data=e}i.getBitsLength=function(e){return e*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=r.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error(`Invalid SJIS character: `+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}},t.exports=i})),xs=o(((e,t)=>{var n={single_source_shortest_paths:function(e,t,r){var i={},a={};a[t]=0;var o=n.PriorityQueue.make();o.push(t,0);for(var s,c,l,u,d,f,p,m,h;!o.empty();)for(l in s=o.pop(),c=s.value,u=s.cost,d=e[c]||{},d)d.hasOwnProperty(l)&&(f=d[l],p=u+f,m=a[l],h=a[l]===void 0,(h||m>p)&&(a[l]=p,o.push(l,p),i[l]=c));if(r!==void 0&&a[r]===void 0){var g=[`Could not find a path from `,t,` to `,r,`.`].join(``);throw Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],r=t;r;)n.push(r),e[r],r=e[r];return n.reverse(),n},find_path:function(e,t,r){var i=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(e){var t=n.PriorityQueue,r={},i;for(i in e||={},t)t.hasOwnProperty(i)&&(r[i]=t[i]);return r.queue=[],r.sorter=e.sorter||t.default_sorter,r},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t!==void 0&&(t.exports=n)})),Ss=o((e=>{var t=ms(),n=_s(),r=vs(),i=ys(),a=bs(),o=ps(),s=ts(),c=xs();function l(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){let r=[],i;for(;(i=e.exec(n))!==null;)r.push({data:i[0],index:i.index,mode:t,length:i[0].length});return r}function d(e){let n=u(o.NUMERIC,t.NUMERIC,e),r=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e),i,a;return s.isKanjiModeEnabled()?(i=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(i=u(o.BYTE_KANJI,t.BYTE,e),a=[]),n.concat(r,i,a).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return r.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return i.getBitsLength(e)}}function p(e){return e.reduce(function(e,t){let n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function m(e){let n=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case t.NUMERIC:n.push([i,{data:i.data,mode:t.ALPHANUMERIC,length:i.length},{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.ALPHANUMERIC:n.push([i,{data:i.data,mode:t.BYTE,length:i.length}]);break;case t.KANJI:n.push([i,{data:i.data,mode:t.BYTE,length:l(i.data)}]);break;case t.BYTE:n.push([{data:i.data,mode:t.BYTE,length:l(i.data)}])}}return n}function h(e,n){let r={},i={start:{}},a=[`start`];for(let o=0;o<e.length;o++){let s=e[o],c=[];for(let e=0;e<s.length;e++){let l=s[e],u=``+o+e;c.push(u),r[u]={node:l,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===l.mode?(i[o][u]=f(r[o].lastCount+l.length,l.mode)-f(r[o].lastCount,l.mode),r[o].lastCount+=l.length):(r[o]&&(r[o].lastCount=l.length),i[o][u]=f(l.length,l.mode)+4+t.getCharCountIndicator(l.mode,n))}}a=c}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}function g(e,o){let c,l=t.getBestModeForData(e);if(c=t.from(o,l),c!==t.BYTE&&c.bit<l.bit)throw Error(`"`+e+`" cannot be encoded with mode `+t.toString(c)+`.
 Suggested mode is: `+t.toString(l));switch(c===t.KANJI&&!s.isKanjiModeEnabled()&&(c=t.BYTE),c){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new r(e);case t.KANJI:return new a(e);case t.BYTE:return new i(e)}}e.fromArray=function(e){return e.reduce(function(e,t){return typeof t==`string`?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},e.fromString=function(t,n){let r=h(m(d(t,s.isKanjiModeEnabled())),n),i=c.find_path(r.map,`start`,`end`),a=[];for(let e=1;e<i.length-1;e++)a.push(r.table[i[e]].node);return e.fromArray(p(a))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}})),Cs=o((e=>{var t=ts(),n=ns(),r=rs(),i=is(),a=as(),o=os(),s=ss(),c=cs(),l=ds(),u=hs(),d=gs(),f=ms(),p=Ss();function m(e,t){let n=e.size,r=o.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],a=r[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1||n<=i+t))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(t>=0&&t<=6&&(r===0||r===6)||r>=0&&r<=6&&(t===0||t===6)||t>=2&&t<=4&&r>=2&&r<=4?e.set(i+t,a+r,!0,!0):e.set(i+t,a+r,!1,!0))}}function h(e){let t=e.size;for(let n=8;n<t-8;n++){let t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}function g(e,t){let n=a.getPositions(t);for(let t=0;t<n.length;t++){let r=n[t][0],i=n[t][1];for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++)t===-2||t===2||n===-2||n===2||t===0&&n===0?e.set(r+t,i+n,!0,!0):e.set(r+t,i+n,!1,!0)}}function _(e,t){let n=e.size,r=u.getEncodedBits(t),i,a,o;for(let t=0;t<18;t++)i=Math.floor(t/3),a=t%3+n-8-3,o=(r>>t&1)==1,e.set(i,a,o,!0),e.set(a,i,o,!0)}function v(e,t,n){let r=e.size,i=d.getEncodedBits(t,n),a,o;for(a=0;a<15;a++)o=(i>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(r-15+a,8,o,!0),a<8?e.set(8,r-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(r-8,8,1,!0)}function y(e,t){let n=e.size,r=-1,i=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(i,s-n)){let r=!1;o<t.length&&(r=(t[o]>>>a&1)==1),e.set(i,s-n,r),a--,a===-1&&(o++,a=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function b(e,n,i){let a=new r;i.forEach(function(t){a.put(t.mode.bit,4),a.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(a)});let o=(t.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,n))*8;for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);let s=(o-a.getLengthInBits())/8;for(let e=0;e<s;e++)a.put(e%2?17:236,8);return x(a,e,n)}function x(e,n,r){let i=t.getSymbolTotalCodewords(n),a=i-c.getTotalCodewordsCount(n,r),o=c.getBlocksCount(n,r),s=o-i%o,u=Math.floor(i/o),d=Math.floor(a/o),f=d+1,p=u-d,m=new l(p),h=0,g=Array(o),_=Array(o),v=0,y=new Uint8Array(e.buffer);for(let e=0;e<o;e++){let t=e<s?d:f;g[e]=y.slice(h,h+t),_[e]=m.encode(g[e]),h+=t,v=Math.max(v,t)}let b=new Uint8Array(i),x=0,S,C;for(S=0;S<v;S++)for(C=0;C<o;C++)S<g[C].length&&(b[x++]=g[C][S]);for(S=0;S<p;S++)for(C=0;C<o;C++)b[x++]=_[C][S];return b}function S(e,n,r,a){let o;if(Array.isArray(e))o=p.fromArray(e);else if(typeof e==`string`){let t=n;if(!t){let n=p.rawSplit(e);t=u.getBestVersionForData(n,r)}o=p.fromString(e,t||40)}else throw Error(`Invalid data`);let c=u.getBestVersionForData(o,r);if(!c)throw Error(`The amount of data is too big to be stored in a QR Code`);if(!n)n=c;else if(n<c)throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+c+`.
`);let l=b(n,r,o),d=new i(t.getSymbolSize(n));return m(d,n),h(d),g(d,n),v(d,r,0),n>=7&&_(d,n),y(d,l),isNaN(a)&&(a=s.getBestMask(d,v.bind(null,d,r))),s.applyMask(a,d),v(d,r,a),{modules:d,version:n,errorCorrectionLevel:r,maskPattern:a,segments:o}}e.create=function(e,r){if(e===void 0||e===``)throw Error(`No input text`);let i=n.M,a,o;return r!==void 0&&(i=n.from(r.errorCorrectionLevel,n.M),a=u.from(r.version),o=s.from(r.maskPattern),r.toSJISFunc&&t.setToSJISFunction(r.toSJISFunc)),S(e,a,i,o)}})),ws=o((e=>{function t(e){if(typeof e==`number`&&(e=e.toString()),typeof e!=`string`)throw Error(`Color should be defined as hex string`);let t=e.slice().replace(`#`,``).split(``);if(t.length<3||t.length===5||t.length>8)throw Error(`Invalid hex color: `+e);(t.length===3||t.length===4)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),t.length===6&&t.push(`F`,`F`);let n=parseInt(t.join(``),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:`#`+t.slice(0,6).join(``)}}e.getOptions=function(e){e||={},e.color||={};let n=e.margin===void 0||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:n,color:{dark:t(e.color.dark||`#000000ff`),light:t(e.color.light||`#ffffffff`)},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},e.getImageWidth=function(t,n){let r=e.getScale(t,n);return Math.floor((t+n.margin*2)*r)},e.qrToImageData=function(t,n,r){let i=n.modules.size,a=n.modules.data,o=e.getScale(i,r),s=Math.floor((i+r.margin*2)*o),c=r.margin*o,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=(e*s+n)*4,d=r.color.light;if(e>=c&&n>=c&&e<s-c&&n<s-c){let t=Math.floor((e-c)/o),r=Math.floor((n-c)/o);d=l[+!!a[t*i+r]]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}})),Ts=o((e=>{var t=ws();function n(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||={},t.height=n,t.width=n,t.style.height=n+`px`,t.style.width=n+`px`}function r(){try{return document.createElement(`canvas`)}catch{throw Error(`You need to specify a canvas element`)}}e.render=function(e,i,a){let o=a,s=i;o===void 0&&(!i||!i.getContext)&&(o=i,i=void 0),i||(s=r()),o=t.getOptions(o);let c=t.getImageWidth(e.modules.size,o),l=s.getContext(`2d`),u=l.createImageData(c,c);return t.qrToImageData(u.data,e,o),n(l,s,c),l.putImageData(u,0,0),s},e.renderToDataURL=function(t,n,r){let i=r;i===void 0&&(!n||!n.getContext)&&(i=n,n=void 0),i||={};let a=e.render(t,n,i),o=i.type||`image/png`,s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}})),Es=o((e=>{var t=ws();function n(e,t){let n=e.a/255,r=t+`="`+e.hex+`"`;return n<1?r+` `+t+`-opacity="`+n.toFixed(2).slice(1)+`"`:r}function r(e,t,n){let r=e+t;return n!==void 0&&(r+=` `+n),r}function i(e,t,n){let i=``,a=0,o=!1,s=0;for(let c=0;c<e.length;c++){let l=Math.floor(c%t),u=Math.floor(c/t);!l&&!o&&(o=!0),e[c]?(s++,c>0&&l>0&&e[c-1]||(i+=o?r(`M`,l+n,.5+u+n):r(`m`,a,0),a=0,o=!1),l+1<t&&e[c+1]||(i+=r(`h`,s),s=0)):a++}return i}e.render=function(e,r,a){let o=t.getOptions(r),s=e.modules.size,c=e.modules.data,l=s+o.margin*2,u=o.color.light.a?`<path `+n(o.color.light,`fill`)+` d="M0 0h`+l+`v`+l+`H0z"/>`:``,d=`<path `+n(o.color.dark,`stroke`)+` d="`+i(c,s,o.margin)+`"/>`,f=`viewBox="0 0 `+l+` `+l+`"`,p=`<svg xmlns="http://www.w3.org/2000/svg" `+(o.width?`width="`+o.width+`" height="`+o.width+`" `:``)+f+` shape-rendering="crispEdges">`+u+d+`</svg>
`;return typeof a==`function`&&a(null,p),p}})),Ds=l(o((e=>{var t=es(),n=Cs(),r=Ts(),i=Es();function a(e,r,i,a,o){let s=[].slice.call(arguments,1),c=s.length,l=typeof s[c-1]==`function`;if(!l&&!t())throw Error(`Callback required as last argument`);if(l){if(c<2)throw Error(`Too few arguments provided`);c===2?(o=i,i=r,r=a=void 0):c===3&&(r.getContext&&o===void 0?(o=a,a=void 0):(o=a,a=i,i=r,r=void 0))}else{if(c<1)throw Error(`Too few arguments provided`);return c===1?(i=r,r=a=void 0):c===2&&!r.getContext&&(a=i,i=r,r=void 0),new Promise(function(t,o){try{t(e(n.create(i,a),r,a))}catch(e){o(e)}})}try{let t=n.create(i,a);o(null,e(t,r,a))}catch(e){o(e)}}e.create=n.create,e.toCanvas=a.bind(null,r.render),e.toDataURL=a.bind(null,r.renderToDataURL),e.toString=a.bind(null,function(e,t,n){return i.render(e,n)})}))(),1),Os=()=>{let{backendUrl:e,token:t,getDoctorsData:n,userData:r}=(0,v.useContext)(Bo),i=dt(),[a,o]=(0,v.useState)([]),[s,c]=(0,v.useState)(``),[l,u]=(0,v.useState)(!0),[d,f]=(0,v.useState)(null),[p,m]=(0,v.useState)(!1),h=(0,v.useRef)(null),g=()=>new Promise(e=>{if(window.paypal)return e(!0);let t=document.createElement(`script`);t.src=`https://www.paypal.com/sdk/js?client-id=ARNZoJ6qu-wGgQLO5kRWYqqyeKaqFv_hm30u1fEsQFXqxxPscHPFyNS8yrfT45FJhpVBDkfeVWGb0dCR&currency=USD`,t.onload=()=>e(!0),t.onerror=()=>e(!1),document.body.appendChild(t)}),_=[` `,`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],y=e=>{let[t,n,r]=e.split(`_`);return`${t} ${_[Number(n)]} ${r}`},b=async()=>{try{u(!0);let{data:n}=await H.get(e+`/api/user/appointments`,{headers:{token:t}});o(n.appointments.reverse())}catch(e){console.log(e),j.error(e.message)}finally{u(!1)}},x=async r=>{try{let{data:i}=await H.post(e+`/api/user/cancel-appointment`,{appointmentId:r},{headers:{token:t}});i.success?(j.success(i.message),b(),n()):j.error(i.message)}catch(e){console.log(e),j.error(e.message)}},S=(n,a)=>{let o=document.getElementById(`paypal-button-container`);o&&o.remove();let s=document.createElement(`div`);s.id=`paypal-overlay`,s.style.cssText=`
      position:fixed; inset:0; z-index:99999;
      background:rgba(0,0,0,0.55); backdrop-filter:blur(6px);
      display:flex; align-items:center; justify-content:center;
    `;let c=document.createElement(`div`);c.style.cssText=`
      background:#fff; border-radius:24px; padding:32px 28px 28px;
      width:380px; max-width:95vw;
      box-shadow:0 24px 64px rgba(0,0,0,0.22);
      position:relative; font-family:'DM Sans',sans-serif;
    `;let l=document.createElement(`button`);l.innerHTML=`✕`,l.style.cssText=`
      position:absolute; top:14px; right:16px;
      background:none; border:none; font-size:18px;
      color:#94A3B8; cursor:pointer;
    `,l.onclick=()=>s.remove();let u=document.createElement(`div`);u.innerHTML=`
      <div style="font-size:13px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#7C3AED;margin-bottom:6px;">Appointment Payment</div>
      <div style="font-size:22px;font-weight:800;color:#1E1B4B;margin-bottom:4px;">Complete your payment</div>
      <div style="font-size:13px;color:#94A3B8;margin-bottom:22px;">
        Amount: <strong style="color:#1E1B4B;">$${(n.amount/100).toFixed(2)} ${n.currency}</strong>
      </div>
    `;let d=document.createElement(`div`);d.id=`paypal-button-container`,c.appendChild(l),c.appendChild(u),c.appendChild(d),s.appendChild(c),document.body.appendChild(s),window.paypal.Buttons({createOrder:(e,t)=>t.order.create({purchase_units:[{amount:{value:(n.amount/100).toFixed(2),currency_code:n.currency||`USD`},description:`Appointment Payment`}],payer:{name:{given_name:r?.name||`User`},email_address:r?.email||`test@example.com`}}),onApprove:async(n,r)=>{try{let o=await r.order.capture(),{data:c}=await H.post(e+`/api/user/verifyPaypal`,{orderID:n.orderID,paymentID:o.id,appointmentId:a},{headers:{token:t}});s.remove(),c.success&&(i(`/my-appointments`),b())}catch(e){console.log(e),j.error(`Payment verification failed`)}},onError:e=>{console.error(`PayPal error:`,e),j.error(`Payment failed. Please try again.`),s.remove()},onCancel:()=>{j.info(`Payment cancelled.`),s.remove()},style:{layout:`vertical`,color:`blue`,shape:`pill`,label:`pay`}}).render(`#paypal-button-container`)},C=async n=>{if(!await g()){j.error(`PayPal SDK failed to load`);return}try{let{data:r}=await H.post(e+`/api/user/payment-paypal`,{appointmentId:n},{headers:{token:t}});r.success?S(r.order,n):j.error(r.message)}catch(e){console.log(e),j.error(e.message)}},w=async n=>{try{let{data:r}=await H.post(e+`/api/user/payment-upi`,{appointmentId:n},{headers:{token:t}});r.success?f({upiLink:r.upiLink,amount:r.amount,appointmentId:r.appointmentId}):j.error(r.message)}catch(e){console.log(e),j.error(e.message)}};(0,v.useEffect)(()=>{d&&h.current&&Ds.toCanvas(h.current,d.upiLink,{width:220,margin:2,color:{dark:`#1E1B4B`,light:`#FFFFFF`}},e=>{e&&console.error(e)})},[d]);let ee=async()=>{if(d){m(!0);try{let{data:n}=await H.post(e+`/api/user/verifyUpi`,{appointmentId:d.appointmentId},{headers:{token:t}});n.success?(j.success(n.message),f(null),c(``),b()):j.error(n.message)}catch(e){console.log(e),j.error(e.message)}finally{m(!1)}}};(0,v.useEffect)(()=>{t&&b()},[t]);let te=e=>e.cancelled&&!e.isCompleted?`cancelled`:e.isCompleted?`completed`:e.payment?`paid`:`upcoming`,T={upcoming:{label:`Upcoming`,dot:`#7C3AED`,bg:`rgba(124,58,237,0.1)`,color:`#6D28D9`,ribbon:`linear-gradient(180deg,#7C3AED,#4F46E5)`},paid:{label:`Paid`,dot:`#059669`,bg:`rgba(5,150,105,0.1)`,color:`#065F46`,ribbon:`linear-gradient(180deg,#059669,#10B981)`},completed:{label:`Completed`,dot:`#0EA5E9`,bg:`rgba(14,165,233,0.1)`,color:`#0369A1`,ribbon:`linear-gradient(180deg,#0EA5E9,#38BDF8)`},cancelled:{label:`Cancelled`,dot:`#EF4444`,bg:`rgba(239,68,68,0.1)`,color:`#991B1B`,ribbon:`linear-gradient(180deg,#EF4444,#F87171)`}};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        /* ══════ KEYFRAMES ══════ */
        @keyframes ma-orb-drift1 {
          0%,100%{transform:translate(0,0) scale(1);}
          30%{transform:translate(50px,-40px) scale(1.08);}
          60%{transform:translate(-30px,50px) scale(0.94);}
        }
        @keyframes ma-orb-drift2 {
          0%,100%{transform:translate(0,0) scale(1);}
          40%{transform:translate(-60px,35px) scale(1.1);}
          70%{transform:translate(30px,-45px) scale(0.92);}
        }
        @keyframes ma-orb-drift3 {
          0%,100%{transform:translate(0,0);}
          50%{transform:translate(40px,-30px);}
        }
        @keyframes ma-morph {
          0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%;}
          25%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;}
          50%{border-radius:50% 60% 30% 60%/30% 40% 70% 50%;}
          75%{border-radius:40% 50% 60% 30%/70% 30% 50% 60%;}
        }
        @keyframes ma-morph2 {
          0%,100%{border-radius:40% 60% 60% 40%/40% 60% 40% 60%;}
          33%{border-radius:60% 40% 40% 60%/60% 40% 60% 40%;}
          66%{border-radius:50% 50% 30% 70%/50% 70% 30% 50%;}
        }
        @keyframes ma-heart-beat {
          0%,100%{transform:scale(1) rotate(var(--r,0deg)); filter:drop-shadow(0 0 0px rgba(236,72,153,0));}
          14%{transform:scale(1.22) rotate(var(--r,0deg)); filter:drop-shadow(0 0 16px rgba(236,72,153,0.4));}
          28%{transform:scale(1) rotate(var(--r,0deg));}
          42%{transform:scale(1.12) rotate(var(--r,0deg)); filter:drop-shadow(0 0 10px rgba(124,58,237,0.35));}
          56%{transform:scale(1) rotate(var(--r,0deg));}
        }
        @keyframes ma-heart-rise {
          0%  {transform:translateY(0) scale(1) rotate(var(--r,0deg)); opacity:var(--o1,0.18);}
          40% {transform:translateY(-50px) scale(1.12) rotate(var(--r,0deg)); opacity:var(--o2,0.35);}
          100%{transform:translateY(-140px) scale(0.7) rotate(var(--r,0deg)); opacity:0;}
        }
        @keyframes ma-heart-orbit {
          from{transform:rotate(0deg) translateX(var(--rad,120px)) rotate(0deg);}
          to  {transform:rotate(360deg) translateX(var(--rad,120px)) rotate(-360deg);}
        }
        @keyframes ma-ecg-draw {
          0%  {stroke-dashoffset:900;}
          100%{stroke-dashoffset:-900;}
        }
        @keyframes ma-ecg-draw2 {
          0%  {stroke-dashoffset:600;}
          100%{stroke-dashoffset:-600;}
        }
        @keyframes ma-ecg-draw3 {
          0%  {stroke-dashoffset:400;}
          100%{stroke-dashoffset:-400;}
        }
        @keyframes ma-ring-cw  {from{transform:rotate(0deg);}  to{transform:rotate(360deg);}}
        @keyframes ma-ring-ccw {from{transform:rotate(0deg);}  to{transform:rotate(-360deg);}}
        @keyframes ma-ring-pulse {
          0%  {transform:scale(0.7); opacity:0.45;}
          100%{transform:scale(2.6); opacity:0;}
        }
        @keyframes ma-twinkle {
          0%,100%{opacity:0.08; transform:scale(1);}
          50%{opacity:0.55; transform:scale(1.5);}
        }
        @keyframes ma-cross-spin {
          0%,100%{transform:rotate(0deg) scale(1); opacity:0.07;}
          50%{transform:rotate(90deg) scale(1.15); opacity:0.13;}
        }
        @keyframes ma-slide-up {
          from{opacity:0; transform:translateY(32px) scale(0.97);}
          to  {opacity:1; transform:translateY(0) scale(1);}
        }
        @keyframes ma-fade-in {
          from{opacity:0;} to{opacity:1;}
        }
        @keyframes ma-card-shine {
          0%     {left:-100%;}
          55%,100%{left:140%;}
        }
        @keyframes ma-shimmer-txt {
          0%  {background-position:-200% center;}
          100%{background-position:200% center;}
        }
        @keyframes ma-badge-glow {
          0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0);}
          50%{box-shadow:0 0 18px 5px rgba(124,58,237,0.15);}
        }
        @keyframes ma-loader-pulse {
          0%,100%{opacity:0.3; transform:scale(0.85);}
          50%{opacity:1; transform:scale(1);}
        }
        @keyframes ma-upi-scan {
          0%,100%{transform:translateY(0); opacity:0.7;}
          50%{transform:translateY(216px); opacity:1;}
        }

        /* ══════ ROOT ══════ */
        .ma-root {
          font-family:'DM Sans',sans-serif;
          min-height:100vh;
          position:relative;
          padding:56px 0 100px;
          overflow-x:hidden;
          background:
            radial-gradient(ellipse 75% 55% at 5% 8%,  rgba(251,207,232,0.5) 0%, transparent 55%),
            radial-gradient(ellipse 65% 60% at 95% 92%, rgba(196,181,253,0.45) 0%, transparent 55%),
            radial-gradient(ellipse 85% 65% at 50% 50%, rgba(186,230,253,0.2) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 15%, rgba(254,202,202,0.3) 0%, transparent 50%),
            linear-gradient(160deg,#FDF4FF 0%,#F0F7FF 35%,#FFF5F7 65%,#F5F0FF 100%);
          isolation:isolate;
        }
        .ma-bg { position:fixed; inset:0; z-index:0; pointer-events:none; overflow:hidden; }
        .ma-dotgrid {
          position:absolute; inset:0;
          background-image:radial-gradient(circle, rgba(139,92,246,0.11) 1px, transparent 1px);
          background-size:28px 28px; opacity:0.65;
          animation:ma-fade-in 1.5s ease forwards;
        }
        .ma-blob { position:absolute; filter:blur(52px); }
        .ma-blob-1 {
          width:460px; height:420px; top:-100px; left:-120px;
          background:linear-gradient(135deg,rgba(251,207,232,0.6),rgba(196,181,253,0.45));
          animation:ma-morph 14s ease-in-out infinite, ma-orb-drift1 20s ease-in-out infinite;
        }
        .ma-blob-2 {
          width:420px; height:460px; bottom:-110px; right:-90px;
          background:linear-gradient(135deg,rgba(196,181,253,0.55),rgba(186,230,253,0.5));
          animation:ma-morph2 11s ease-in-out infinite, ma-orb-drift2 17s ease-in-out infinite;
        }
        .ma-blob-3 {
          width:280px; height:280px; top:38%; left:38%;
          background:linear-gradient(135deg,rgba(254,202,202,0.4),rgba(196,181,253,0.35));
          animation:ma-morph 17s ease-in-out infinite reverse, ma-orb-drift3 22s ease-in-out infinite;
          filter:blur(44px);
        }
        .ma-blob-4 {
          width:200px; height:200px; top:15%; right:20%;
          background:linear-gradient(135deg,rgba(186,230,253,0.4),rgba(196,181,253,0.3));
          animation:ma-morph2 9s ease-in-out infinite 3s, ma-orb-drift1 14s ease-in-out infinite reverse;
          filter:blur(40px);
        }
        .ma-ring { position:absolute; border-radius:50%; pointer-events:none; }
        .ma-ring-1 {
          width:320px; height:320px; top:3%; right:5%;
          border:1.5px solid rgba(196,181,253,0.32);
          animation:ma-ring-cw 35s linear infinite;
        }
        .ma-ring-1::before {
          content:''; position:absolute; top:-5px; left:50%;
          width:10px; height:10px; border-radius:50%;
          background:rgba(167,139,250,0.8);
          box-shadow:0 0 14px 5px rgba(167,139,250,0.55);
        }
        .ma-ring-1::after {
          content:''; position:absolute; bottom:-5px; right:25%;
          width:6px; height:6px; border-radius:50%;
          background:rgba(244,114,182,0.7);
          box-shadow:0 0 10px 4px rgba(244,114,182,0.4);
        }
        .ma-ring-2 {
          width:200px; height:200px; bottom:8%; left:4%;
          border:1.5px solid rgba(251,207,232,0.38);
          animation:ma-ring-ccw 25s linear infinite;
        }
        .ma-ring-2::before {
          content:''; position:absolute; bottom:-5px; left:50%;
          width:9px; height:9px; border-radius:50%;
          background:rgba(244,114,182,0.75);
          box-shadow:0 0 12px 4px rgba(244,114,182,0.5);
        }
        .ma-ring-3 { width:130px; height:130px; top:48%; right:12%; border:1px solid rgba(186,230,253,0.4); animation:ma-ring-cw 20s linear infinite; }
        .ma-ring-4 { width:80px; height:80px; top:30%; left:18%; border:1px solid rgba(196,181,253,0.3); animation:ma-ring-ccw 15s linear infinite; }
        .ma-pr { position:absolute; border-radius:50%; pointer-events:none; border:1.5px solid rgba(167,139,250,0.3); animation:ma-ring-pulse 4.5s ease-out infinite; }
        .ma-pr-1 { width:110px; height:110px; top:14%; left:10%; }
        .ma-pr-2 { width:75px; height:75px; bottom:18%; right:9%; animation-delay:1.6s; border-color:rgba(244,114,182,0.28); }
        .ma-pr-3 { width:55px; height:55px; top:58%; left:48%; animation-delay:2.9s; border-color:rgba(99,102,241,0.22); }
        .ma-pr-4 { width:90px; height:90px; top:25%; right:22%; animation-delay:0.8s; border-color:rgba(186,230,253,0.35); }
        .ma-sheart { position:absolute; pointer-events:none; animation:ma-heart-beat 1.15s ease-in-out infinite; }
        .ma-sh1 { top:7%;  left:4%;  width:85px;  opacity:0.09; --r:-14deg; animation-delay:0s; }
        .ma-sh2 { top:11%; right:3%; width:58px;  opacity:0.07; --r:11deg;  animation-delay:0.28s; }
        .ma-sh3 { top:44%; left:2%;  width:48px;  opacity:0.07; --r:-6deg;  animation-delay:0.56s; }
        .ma-sh4 { top:52%; right:2%; width:70px;  opacity:0.08; --r:13deg;  animation-delay:0.14s; }
        .ma-sh5 { bottom:25%; left:9%;  width:38px; opacity:0.06; --r:-20deg; animation-delay:0.7s; }
        .ma-sh6 { bottom:30%; right:8%; width:44px; opacity:0.06; --r:18deg;  animation-delay:0.42s; }
        .ma-fheart { position:absolute; pointer-events:none; }
        .ma-fh1 { bottom:6%;  left:7%;   animation:ma-heart-rise 6.5s ease-in-out infinite;     --r:-13deg; --o1:0.16; --o2:0.32; }
        .ma-fh2 { bottom:10%; left:20%;  animation:ma-heart-rise 8.5s ease-in-out infinite 2.2s; --r:9deg;   --o1:0.12; --o2:0.24; }
        .ma-fh3 { bottom:4%;  right:16%; animation:ma-heart-rise 7.2s ease-in-out infinite 4.5s; --r:-7deg;  --o1:0.14; --o2:0.28; }
        .ma-fh4 { bottom:14%; right:5%;  animation:ma-heart-rise 9.5s ease-in-out infinite 1.2s; --r:16deg;  --o1:0.1;  --o2:0.22; }
        .ma-fh5 { bottom:8%;  left:50%;  animation:ma-heart-rise 7.8s ease-in-out infinite 3.5s; --r:-3deg;  --o1:0.09; --o2:0.18; }
        .ma-orbit-center { position:absolute; pointer-events:none; }
        .ma-orbit-heart {
          position:absolute; top:50%; left:50%; margin:-10px 0 0 -10px;
          animation:ma-heart-orbit var(--dur,14s) linear infinite;
          animation-delay:var(--del,0s); opacity:var(--op,0.1); --rad:var(--radius,100px);
        }
        .ma-oc1 { top:20%; right:8%; width:0; height:0; }
        .ma-oc2 { top:60%; left:6%; width:0; height:0; }
        .ma-cross { position:absolute; pointer-events:none; animation:ma-cross-spin 10s ease-in-out infinite; }
        .ma-cross-1 { top:22%; left:3%; width:36px; }
        .ma-cross-2 { bottom:32%; right:3%; width:26px; animation-delay:5s; }
        .ma-cross-3 { top:68%; left:48%; width:20px; animation-delay:2.5s; }
        .ma-ecg-svg { position:absolute; width:100%; pointer-events:none; }
        .ma-ecg-bot { bottom:90px; opacity:0.38; }
        .ma-ecg-top { top:80px;   opacity:0.18; }
        .ma-ecg-mid { top:50%;    opacity:0.12; }
        .ma-twinkle {
          position:absolute; border-radius:50%; pointer-events:none;
          background:rgba(167,139,250,0.55);
          animation:ma-twinkle var(--dur,3s) ease-in-out infinite;
          animation-delay:var(--del,0s);
        }

        /* ══════ CONTENT ══════ */
        .ma-inner { position:relative; z-index:10; max-width:900px; margin:0 auto; padding:0 28px; }
        .ma-hero { text-align:center; margin-bottom:52px; animation:ma-slide-up 0.7s ease both; }
        .ma-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          border:1px solid rgba(124,58,237,0.28); background:rgba(124,58,237,0.06);
          border-radius:100px; padding:6px 18px 6px 11px;
          margin-bottom:16px; backdrop-filter:blur(8px);
          animation:ma-badge-glow 3.5s ease-in-out infinite;
        }
        .ma-eye-dot { width:8px; height:8px; border-radius:50%; background:#7C3AED; animation:ma-twinkle 1.8s ease-in-out infinite; }
        .ma-eye-txt {
          font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase;
          background:linear-gradient(90deg,#7C3AED 0%,#EC4899 50%,#7C3AED 100%);
          background-size:200% auto; -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent; animation:ma-shimmer-txt 3.5s linear infinite;
        }
        .ma-page-title {
          font-family:'Playfair Display',serif; font-size:46px; font-weight:800; color:#1E1B4B;
          letter-spacing:-1.5px; line-height:1.08; margin-bottom:12px;
        }
        .ma-page-title em {
          font-style:italic;
          background:linear-gradient(135deg,#7C3AED 0%,#EC4899 55%,#4F46E5 100%);
          -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
          filter:drop-shadow(0 0 20px rgba(124,58,237,0.3));
        }
        .ma-page-sub { font-size:15px; font-weight:300; color:#64748B; line-height:1.7; }
        .ma-count-strip { display:flex; justify-content:center; gap:14px; margin-top:24px; flex-wrap:wrap; }
        .ma-count-pill {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,0.75); backdrop-filter:blur(16px);
          border:1px solid rgba(255,255,255,0.9); border-radius:100px; padding:10px 20px;
          font-size:13px; font-weight:500; box-shadow:0 4px 20px rgba(99,102,241,0.1); transition:all 0.3s;
        }
        .ma-count-pill:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(99,102,241,0.18); }
        .ma-count-pill-icon { width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:14px; }
        .ma-count-pill-num { font-family:'Playfair Display',serif; font-weight:800; font-size:18px; color:#1E1B4B; }
        .ma-count-pill-lbl { font-size:11px; color:#94A3B8; font-weight:300; }
        .ma-loader { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:80px 24px; gap:20px; }
        .ma-loader-hearts { display:flex; gap:10px; }
        .ma-loader-h { width:18px; height:18px; animation:ma-loader-pulse 1.2s ease-in-out infinite; }
        .ma-loader-h:nth-child(2) { animation-delay:0.2s; }
        .ma-loader-h:nth-child(3) { animation-delay:0.4s; }
        .ma-loader-txt { font-size:14px; color:#94A3B8; font-weight:300; }
        .ma-empty {
          text-align:center; padding:80px 28px; background:rgba(255,255,255,0.65);
          backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.9);
          border-radius:32px; box-shadow:0 8px 40px rgba(99,102,241,0.08);
          animation:ma-slide-up 0.7s 0.1s ease both;
        }
        .ma-empty-heart { width:80px; height:72px; margin:0 auto 20px; animation:ma-heart-beat 1.2s ease-in-out infinite; opacity:0.4; }
        .ma-empty-title { font-family:'Playfair Display',serif; font-size:26px; font-weight:700; color:#1E1B4B; letter-spacing:-0.5px; margin-bottom:10px; }
        .ma-empty-sub { font-size:15px; color:#94A3B8; font-weight:300; line-height:1.7; margin-bottom:28px; }
        .ma-empty-btn {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#7C3AED,#4F46E5); color:#fff; border:none; border-radius:100px;
          padding:14px 32px; font-size:14px; font-weight:600; font-family:'DM Sans',sans-serif; cursor:pointer;
          transition:all 0.3s; letter-spacing:0.3px; box-shadow:0 8px 24px rgba(124,58,237,0.32);
        }
        .ma-empty-btn:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(124,58,237,0.45); }
        .ma-list { display:flex; flex-direction:column; gap:18px; }
        .ma-card {
          background:rgba(255,255,255,0.74); backdrop-filter:blur(24px);
          border:1px solid rgba(255,255,255,0.92); border-radius:26px;
          padding:26px 26px 26px 30px; display:flex; gap:22px; align-items:flex-start;
          box-shadow:0 4px 28px rgba(99,102,241,0.08), 0 0 0 1px rgba(255,255,255,0.7) inset;
          transition:all 0.4s cubic-bezier(0.25,0.8,0.25,1); position:relative; overflow:hidden;
          animation:ma-slide-up 0.55s ease both;
        }
        .ma-card::before {
          content:''; position:absolute; top:0; left:-100%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent);
          animation:ma-card-shine 6s ease-in-out infinite; pointer-events:none;
        }
        .ma-card::after {
          content:''; position:absolute; inset:0; border-radius:26px;
          background:linear-gradient(135deg,rgba(124,58,237,0.03),rgba(236,72,153,0.02));
          opacity:0; transition:opacity 0.3s; pointer-events:none;
        }
        .ma-card:hover::after { opacity:1; }
        .ma-card:hover {
          transform:translateY(-5px) scale(1.005);
          box-shadow:0 20px 56px rgba(99,102,241,0.16), 0 0 0 1.5px rgba(167,139,250,0.35);
          background:rgba(255,255,255,0.9);
        }
        .ma-card:nth-child(1){animation-delay:0.04s;}
        .ma-card:nth-child(2){animation-delay:0.11s;}
        .ma-card:nth-child(3){animation-delay:0.18s;}
        .ma-card:nth-child(4){animation-delay:0.25s;}
        .ma-card:nth-child(5){animation-delay:0.32s;}
        .ma-card:nth-child(6){animation-delay:0.39s;}
        .ma-ribbon { position:absolute; left:0; top:0; bottom:0; width:5px; border-radius:5px 0 0 5px; transition:width 0.3s; }
        .ma-card:hover .ma-ribbon { width:7px; }
        .ma-doc-img {
          width:106px; height:118px; flex-shrink:0; border-radius:18px; overflow:hidden;
          background:linear-gradient(135deg,#EDE9FE,#DBEAFE);
          box-shadow:0 8px 24px rgba(99,102,241,0.14); position:relative;
        }
        .ma-doc-img img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform 0.45s ease; }
        .ma-card:hover .ma-doc-img img { transform:scale(1.07); }
        .ma-img-heart {
          position:absolute; bottom:7px; right:7px; width:22px; height:22px;
          background:rgba(255,255,255,0.92); border-radius:50%;
          display:flex; align-items:center; justify-content:center; font-size:11px;
          box-shadow:0 2px 8px rgba(0,0,0,0.1); animation:ma-heart-beat 1.2s ease-in-out infinite;
        }
        .ma-info { flex:1; min-width:0; }
        .ma-status-pill {
          display:inline-flex; align-items:center; gap:5px; border-radius:100px; padding:3px 11px;
          font-size:10px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; margin-bottom:9px;
        }
        .ma-status-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; }
        .ma-doc-name {
          font-family:'Playfair Display',serif; font-size:18px; font-weight:800; color:#1E1B4B;
          letter-spacing:-0.3px; margin-bottom:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .ma-doc-spec {
          display:inline-block; font-size:11px; font-weight:500; color:#7C3AED;
          background:rgba(124,58,237,0.07); border:1px solid rgba(124,58,237,0.14);
          border-radius:100px; padding:2px 10px; margin-bottom:12px;
        }
        .ma-meta { display:flex; flex-direction:column; gap:5px; }
        .ma-meta-row { display:flex; align-items:center; gap:7px; font-size:13px; color:#64748B; font-weight:300; }
        .ma-meta-icon { color:#94A3B8; flex-shrink:0; }
        .ma-datetime-pill {
          display:inline-flex; align-items:center; gap:7px;
          background:linear-gradient(135deg,rgba(124,58,237,0.08),rgba(79,70,229,0.06));
          border:1px solid rgba(124,58,237,0.14); border-radius:100px; padding:6px 14px;
          font-size:12px; font-weight:500; color:#4338CA; margin-top:8px; transition:all 0.25s;
        }
        .ma-card:hover .ma-datetime-pill {
          background:linear-gradient(135deg,rgba(124,58,237,0.14),rgba(79,70,229,0.1));
          border-color:rgba(124,58,237,0.28);
        }
        .ma-actions { display:flex; flex-direction:column; gap:9px; justify-content:center; flex-shrink:0; min-width:148px; }
        .ma-btn {
          border-radius:14px; padding:11px 16px; font-size:12px; font-weight:600;
          font-family:'DM Sans',sans-serif; cursor:pointer; transition:all 0.28s; border:none;
          display:flex; align-items:center; justify-content:center; gap:6px; letter-spacing:0.3px;
          white-space:nowrap; position:relative; overflow:hidden;
        }
        .ma-btn::before {
          content:''; position:absolute; top:0; left:-100%; width:55%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent);
          transition:left 0s; pointer-events:none;
        }
        .ma-btn:hover::before { animation:ma-card-shine 0.5s ease forwards; }
        .ma-btn-pay { background:linear-gradient(135deg,#7C3AED,#4F46E5); color:#fff; box-shadow:0 6px 20px rgba(124,58,237,0.34); }
        .ma-btn-pay:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(124,58,237,0.48); }
        .ma-btn-paypal { background:#fff; color:#64748B; border:1.5px solid rgba(99,102,241,0.2); box-shadow:0 4px 14px rgba(0,0,0,0.06); }
        .ma-btn-paypal:hover { border-color:rgba(99,102,241,0.4); transform:translateY(-1px); }
        .ma-btn-paypal img { max-height:18px; max-width:80px; }
        .ma-btn-upi {
          background:linear-gradient(135deg,#10B981,#059669); color:#fff;
          box-shadow:0 6px 20px rgba(5,150,105,0.3);
        }
        .ma-btn-upi:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(5,150,105,0.45); }
        .ma-btn-paid { background:rgba(5,150,105,0.08); color:#065F46; border:1.5px solid rgba(5,150,105,0.2); cursor:default; }
        .ma-btn-done { background:rgba(14,165,233,0.08); color:#0369A1; border:1.5px solid rgba(14,165,233,0.2); cursor:default; }
        .ma-btn-cancel { background:rgba(239,68,68,0.06); color:#DC2626; border:1.5px solid rgba(239,68,68,0.18); }
        .ma-btn-cancel:hover { background:rgba(239,68,68,0.13); border-color:rgba(239,68,68,0.4); transform:translateY(-1px); }
        .ma-btn-cancelled { background:transparent; color:#EF4444; border:1.5px solid rgba(239,68,68,0.3); cursor:default; }

        /* ══════ UPI MODAL ══════ */
        .upi-overlay {
          position:fixed; inset:0; z-index:99999;
          background:rgba(0,0,0,0.6); backdrop-filter:blur(8px);
          display:flex; align-items:center; justify-content:center;
          animation:ma-fade-in 0.2s ease;
        }
        .upi-modal {
          background:#fff; border-radius:28px; padding:36px 32px 32px;
          width:360px; max-width:95vw;
          box-shadow:0 32px 80px rgba(0,0,0,0.25);
          position:relative; font-family:'DM Sans',sans-serif;
          animation:ma-slide-up 0.3s ease;
        }
        .upi-close {
          position:absolute; top:16px; right:18px;
          background:none; border:none; font-size:20px;
          color:#94A3B8; cursor:pointer; line-height:1;
        }
        .upi-close:hover { color:#64748B; }
        .upi-label {
          font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase;
          color:#10B981; margin-bottom:4px;
        }
        .upi-title {
          font-family:'Playfair Display',serif; font-size:22px; font-weight:800;
          color:#1E1B4B; margin-bottom:4px;
        }
        .upi-amount {
          font-size:13px; color:#94A3B8; margin-bottom:20px;
        }
        .upi-amount strong { color:#1E1B4B; }
        .upi-qr-wrap {
          display:flex; justify-content:center; margin-bottom:18px;
          position:relative;
        }
        .upi-qr-canvas {
          border-radius:16px;
          box-shadow:0 8px 32px rgba(16,185,129,0.18);
          border:3px solid rgba(16,185,129,0.2);
        }
        .upi-scan-line {
          position:absolute; left:50%; transform:translateX(-50%);
          width:220px; height:3px;
          background:linear-gradient(90deg,transparent,#10B981,transparent);
          border-radius:2px; top:0;
          animation:ma-upi-scan 2.2s ease-in-out infinite;
          pointer-events:none;
        }
        .upi-instruction {
          font-size:12px; color:#64748B; text-align:center; margin-bottom:20px;
          line-height:1.6; padding:0 4px;
        }
        .upi-instruction span {
          display:inline-block; background:rgba(16,185,129,0.08);
          border:1px solid rgba(16,185,129,0.2); border-radius:8px;
          padding:6px 14px; font-weight:500; color:#065F46; margin-top:6px;
        }
        .upi-confirm-btn {
          width:100%; padding:14px; border:none; border-radius:16px; cursor:pointer;
          background:linear-gradient(135deg,#10B981,#059669); color:#fff;
          font-size:14px; font-weight:700; font-family:'DM Sans',sans-serif;
          box-shadow:0 8px 24px rgba(5,150,105,0.35); transition:all 0.28s;
          display:flex; align-items:center; justify-content:center; gap:8px;
        }
        .upi-confirm-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 14px 36px rgba(5,150,105,0.45); }
        .upi-confirm-btn:disabled { opacity:0.65; cursor:not-allowed; }
        .upi-note {
          font-size:11px; color:#94A3B8; text-align:center; margin-top:12px; line-height:1.5;
        }

        @media(max-width:680px){
          .ma-card { flex-direction:column; padding:22px; }
          .ma-actions { flex-direction:row; flex-wrap:wrap; min-width:auto; width:100%; }
          .ma-btn { flex:1; min-width:110px; }
          .ma-page-title { font-size:32px; }
          .ma-doc-img { width:80px; height:90px; }
          .ma-doc-name { font-size:16px; }
        }
      `}),(0,A.jsxs)(`div`,{className:`ma-bg`,"aria-hidden":`true`,children:[(0,A.jsx)(`div`,{className:`ma-dotgrid`}),(0,A.jsx)(`div`,{className:`ma-blob ma-blob-1`}),(0,A.jsx)(`div`,{className:`ma-blob ma-blob-2`}),(0,A.jsx)(`div`,{className:`ma-blob ma-blob-3`}),(0,A.jsx)(`div`,{className:`ma-blob ma-blob-4`}),(0,A.jsx)(`div`,{className:`ma-ring ma-ring-1`}),(0,A.jsx)(`div`,{className:`ma-ring ma-ring-2`}),(0,A.jsx)(`div`,{className:`ma-ring ma-ring-3`}),(0,A.jsx)(`div`,{className:`ma-ring ma-ring-4`}),(0,A.jsx)(`div`,{className:`ma-pr ma-pr-1`}),(0,A.jsx)(`div`,{className:`ma-pr ma-pr-2`}),(0,A.jsx)(`div`,{className:`ma-pr ma-pr-3`}),(0,A.jsx)(`div`,{className:`ma-pr ma-pr-4`}),(0,A.jsxs)(`svg`,{className:`ma-ecg-svg ma-ecg-bot`,viewBox:`0 0 1440 60`,preserveAspectRatio:`xMidYMid slice`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`path`,{d:`M0,30 L100,30 L115,30 L122,8 L130,52 L136,0 L148,60 L156,30 L230,30 L310,30 L318,16 L326,44 L334,30 L430,30 L465,30 L472,10 L480,50 L486,2 L498,58 L506,30 L584,30 L665,30 L672,18 L680,42 L688,30 L775,30 L815,30 L822,8 L830,52 L836,0 L848,60 L856,30 L936,30 L1018,30 L1025,16 L1033,44 L1041,30 L1138,30 L1178,30 L1185,10 L1193,50 L1199,2 L1211,58 L1219,30 L1440,30`,fill:`none`,stroke:`url(#ecgg1)`,strokeWidth:`2.2`,strokeDasharray:`900`,strokeDashoffset:`900`,style:{animation:`ma-ecg-draw 5.5s linear infinite`}}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`ecgg1`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#7C3AED`,stopOpacity:`0`}),(0,A.jsx)(`stop`,{offset:`20%`,stopColor:`#7C3AED`,stopOpacity:`0.8`}),(0,A.jsx)(`stop`,{offset:`50%`,stopColor:`#EC4899`,stopOpacity:`0.8`}),(0,A.jsx)(`stop`,{offset:`80%`,stopColor:`#4F46E5`,stopOpacity:`0.8`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#4F46E5`,stopOpacity:`0`})]})})]}),(0,A.jsxs)(`svg`,{className:`ma-ecg-svg ma-ecg-top`,viewBox:`0 0 1440 60`,preserveAspectRatio:`xMidYMid slice`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`path`,{d:`M0,30 L170,30 L178,30 L184,13 L191,47 L195,3 L205,57 L211,30 L295,30 L390,30 L397,19 L404,41 L411,30 L510,30 L552,30 L558,11 L565,49 L570,2 L580,58 L586,30 L688,30 L770,30 L776,17 L783,43 L790,30 L888,30 L950,30 L956,12 L963,48 L968,3 L978,57 L984,30 L1075,30 L1155,30 L1161,19 L1168,41 L1175,30 L1295,30 L1440,30`,fill:`none`,stroke:`url(#ecgg2)`,strokeWidth:`1.6`,strokeDasharray:`600`,strokeDashoffset:`600`,style:{animation:`ma-ecg-draw2 8.5s linear infinite 2s`}}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`ecgg2`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#EC4899`,stopOpacity:`0`}),(0,A.jsx)(`stop`,{offset:`30%`,stopColor:`#EC4899`,stopOpacity:`0.5`}),(0,A.jsx)(`stop`,{offset:`70%`,stopColor:`#7C3AED`,stopOpacity:`0.5`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#7C3AED`,stopOpacity:`0`})]})})]}),(0,A.jsxs)(`svg`,{className:`ma-ecg-svg ma-ecg-mid`,viewBox:`0 0 1440 60`,preserveAspectRatio:`xMidYMid slice`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`path`,{d:`M0,30 L200,30 L208,22 L216,38 L224,30 L340,30 L380,30 L386,14 L393,46 L398,4 L408,56 L414,30 L520,30 L620,30 L626,21 L633,39 L640,30 L760,30 L820,30 L826,13 L833,47 L838,3 L848,57 L854,30 L970,30 L1060,30 L1066,22 L1073,38 L1080,30 L1200,30 L1440,30`,fill:`none`,stroke:`url(#ecgg3)`,strokeWidth:`1.2`,strokeDasharray:`400`,strokeDashoffset:`400`,style:{animation:`ma-ecg-draw3 11s linear infinite 5s`}}),(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`ecgg3`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#818CF8`,stopOpacity:`0`}),(0,A.jsx)(`stop`,{offset:`40%`,stopColor:`#818CF8`,stopOpacity:`0.4`}),(0,A.jsx)(`stop`,{offset:`60%`,stopColor:`#F472B6`,stopOpacity:`0.4`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#F472B6`,stopOpacity:`0`})]})})]}),[{cls:`ma-sh1`,c1:`#7C3AED`,c2:`#4F46E5`},{cls:`ma-sh2`,c1:`#EC4899`,c2:`#F472B6`},{cls:`ma-sh3`,c1:`#4F46E5`,c2:`#818CF8`},{cls:`ma-sh4`,c1:`#7C3AED`,c2:`#EC4899`},{cls:`ma-sh5`,c1:`#A855F7`,c2:`#EC4899`},{cls:`ma-sh6`,c1:`#4F46E5`,c2:`#7C3AED`}].map((e,t)=>(0,A.jsx)(`div`,{className:`ma-sheart ${e.cls}`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`hg${t}`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:e.c1}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:e.c2})]})}),(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z`,fill:`url(#hg${t})`}),(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z`,fill:`none`,stroke:e.c1,strokeWidth:`1.5`,opacity:`0.35`})]})},t)),[{cls:`ma-fh1`,color:`#7C3AED`,size:30},{cls:`ma-fh2`,color:`#EC4899`,size:24},{cls:`ma-fh3`,color:`#4F46E5`,size:28},{cls:`ma-fh4`,color:`#A855F7`,size:22},{cls:`ma-fh5`,color:`#F472B6`,size:18}].map((e,t)=>(0,A.jsx)(`div`,{className:`ma-fheart ${e.cls}`,style:{width:e.size,height:e.size*.9},children:(0,A.jsx)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z`,fill:e.color})})},t)),(0,A.jsx)(`div`,{className:`ma-orbit-center ma-oc1`,children:[{dur:`12s`,del:`0s`,op:.1,rad:`90px`,c:`#7C3AED`,sz:14},{dur:`18s`,del:`6s`,op:.08,rad:`90px`,c:`#EC4899`,sz:10}].map((e,t)=>(0,A.jsx)(`div`,{className:`ma-orbit-heart`,style:{"--dur":e.dur,"--del":e.del,"--op":e.op,"--radius":e.rad},children:(0,A.jsx)(`svg`,{width:e.sz,height:e.sz*.9,viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z`,fill:e.c})})},t))}),(0,A.jsx)(`div`,{className:`ma-orbit-center ma-oc2`,children:[{dur:`16s`,del:`0s`,op:.09,rad:`70px`,c:`#818CF8`,sz:12},{dur:`22s`,del:`8s`,op:.07,rad:`70px`,c:`#F472B6`,sz:9}].map((e,t)=>(0,A.jsx)(`div`,{className:`ma-orbit-heart`,style:{"--dur":e.dur,"--del":e.del,"--op":e.op,"--radius":e.rad},children:(0,A.jsx)(`svg`,{width:e.sz,height:e.sz*.9,viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z`,fill:e.c})})},t))}),(0,A.jsx)(`div`,{className:`ma-cross ma-cross-1`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`rect`,{x:`12`,y:`2`,width:`8`,height:`28`,rx:`3`,fill:`rgba(167,139,250,0.28)`}),(0,A.jsx)(`rect`,{x:`2`,y:`12`,width:`28`,height:`8`,rx:`3`,fill:`rgba(167,139,250,0.28)`})]})}),(0,A.jsx)(`div`,{className:`ma-cross ma-cross-2`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`rect`,{x:`12`,y:`2`,width:`8`,height:`28`,rx:`3`,fill:`rgba(244,114,182,0.22)`}),(0,A.jsx)(`rect`,{x:`2`,y:`12`,width:`28`,height:`8`,rx:`3`,fill:`rgba(244,114,182,0.22)`})]})}),(0,A.jsx)(`div`,{className:`ma-cross ma-cross-3`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 32 32`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`rect`,{x:`12`,y:`2`,width:`8`,height:`28`,rx:`3`,fill:`rgba(129,140,248,0.2)`}),(0,A.jsx)(`rect`,{x:`2`,y:`12`,width:`28`,height:`8`,rx:`3`,fill:`rgba(129,140,248,0.2)`})]})}),[{t:`20%`,l:`30%`,w:6,dur:`2.5s`,del:`0s`},{t:`35%`,r:`22%`,w:4,dur:`3.5s`,del:`1s`},{t:`55%`,l:`14%`,w:5,dur:`2.1s`,del:`0.5s`},{t:`72%`,r:`38%`,w:4,dur:`4s`,del:`1.8s`},{t:`14%`,l:`54%`,w:7,dur:`3.1s`,del:`0.8s`},{t:`82%`,l:`62%`,w:3,dur:`2.8s`,del:`2.2s`},{t:`42%`,r:`6%`,w:5,dur:`3.6s`,del:`1.4s`},{t:`65%`,l:`32%`,w:4,dur:`2.2s`,del:`0.3s`}].map((e,t)=>(0,A.jsx)(`div`,{className:`ma-twinkle`,style:{top:e.t,left:e.l,right:e.r,width:e.w,height:e.w,"--dur":e.dur,"--del":e.del}},t))]}),d&&(0,A.jsx)(`div`,{className:`upi-overlay`,onClick:e=>{e.target.className===`upi-overlay`&&f(null)},children:(0,A.jsxs)(`div`,{className:`upi-modal`,children:[(0,A.jsx)(`button`,{className:`upi-close`,onClick:()=>f(null),children:`✕`}),(0,A.jsx)(`div`,{className:`upi-label`,children:`UPI Payment`}),(0,A.jsx)(`div`,{className:`upi-title`,children:`Scan & Pay`}),(0,A.jsxs)(`div`,{className:`upi-amount`,children:[`Amount: `,(0,A.jsxs)(`strong`,{children:[`₹`,d.amount]})]}),(0,A.jsxs)(`div`,{className:`upi-qr-wrap`,children:[(0,A.jsx)(`canvas`,{ref:h,className:`upi-qr-canvas`}),(0,A.jsx)(`div`,{className:`upi-scan-line`})]}),(0,A.jsxs)(`div`,{className:`upi-instruction`,children:[`Open any UPI app — PhonePe, Google Pay, Paytm — and scan the QR code above.`,(0,A.jsx)(`br`,{}),(0,A.jsxs)(`span`,{children:[`UPI ID: `,`yourname@upi`]})]}),(0,A.jsx)(`button`,{className:`upi-confirm-btn`,onClick:ee,disabled:p,children:p?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,style:{animation:`ma-ring-cw 1s linear infinite`},children:(0,A.jsx)(`path`,{d:`M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83`})}),`Verifying…`]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})}),`I've Paid — Confirm`]})}),(0,A.jsx)(`p`,{className:`upi-note`,children:`Only click after completing the payment in your UPI app.`})]})}),(0,A.jsx)(`div`,{className:`ma-root`,children:(0,A.jsxs)(`div`,{className:`ma-inner`,children:[(0,A.jsxs)(`div`,{className:`ma-hero`,children:[(0,A.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`14px`},children:(0,A.jsxs)(`div`,{className:`ma-eyebrow`,children:[(0,A.jsx)(`span`,{className:`ma-eye-dot`}),(0,A.jsx)(`span`,{className:`ma-eye-txt`,children:`Health Dashboard`})]})}),(0,A.jsxs)(`h1`,{className:`ma-page-title`,children:[`My `,(0,A.jsx)(`em`,{children:`Appointments`})]}),(0,A.jsx)(`p`,{className:`ma-page-sub`,children:`Track, manage and pay for all your medical appointments in one place.`}),!l&&a.length>0&&(0,A.jsxs)(`div`,{className:`ma-count-strip`,children:[(0,A.jsxs)(`div`,{className:`ma-count-pill`,children:[(0,A.jsx)(`div`,{className:`ma-count-pill-icon`,style:{background:`rgba(124,58,237,0.1)`},children:`📋`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`ma-count-pill-num`,children:a.length}),(0,A.jsx)(`div`,{className:`ma-count-pill-lbl`,children:`Total`})]})]}),(0,A.jsxs)(`div`,{className:`ma-count-pill`,children:[(0,A.jsx)(`div`,{className:`ma-count-pill-icon`,style:{background:`rgba(5,150,105,0.1)`},children:`✅`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`ma-count-pill-num`,children:a.filter(e=>e.payment&&!e.isCompleted&&!e.cancelled).length}),(0,A.jsx)(`div`,{className:`ma-count-pill-lbl`,children:`Paid`})]})]}),(0,A.jsxs)(`div`,{className:`ma-count-pill`,children:[(0,A.jsx)(`div`,{className:`ma-count-pill-icon`,style:{background:`rgba(14,165,233,0.1)`},children:`🎯`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`ma-count-pill-num`,children:a.filter(e=>e.isCompleted).length}),(0,A.jsx)(`div`,{className:`ma-count-pill-lbl`,children:`Done`})]})]})]})]}),l&&(0,A.jsxs)(`div`,{className:`ma-loader`,children:[(0,A.jsx)(`div`,{className:`ma-loader-hearts`,children:[`#7C3AED`,`#EC4899`,`#4F46E5`].map((e,t)=>(0,A.jsx)(`div`,{className:`ma-loader-h`,children:(0,A.jsx)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z`,fill:e})})},t))}),(0,A.jsx)(`p`,{className:`ma-loader-txt`,children:`Loading your appointments…`})]}),!l&&a.length===0&&(0,A.jsxs)(`div`,{className:`ma-empty`,children:[(0,A.jsx)(`div`,{className:`ma-empty-heart`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 100 90`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`empty-hg`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#7C3AED`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#EC4899`})]})}),(0,A.jsx)(`path`,{d:`M50,80 C30,65 5,50 5,28 C5,14 16,5 28,5 C36,5 44,9 50,16 C56,9 64,5 72,5 C84,5 95,14 95,28 C95,50 70,65 50,80Z`,fill:`url(#empty-hg)`})]})}),(0,A.jsx)(`div`,{className:`ma-empty-title`,children:`No appointments yet`}),(0,A.jsxs)(`p`,{className:`ma-empty-sub`,children:[`Your health journey starts here. Book your first appointment`,(0,A.jsx)(`br`,{}),`with a trusted specialist today.`]}),(0,A.jsxs)(`button`,{className:`ma-empty-btn`,onClick:()=>i(`/doctors`),children:[(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})}),`Browse Doctors`]})]}),!l&&(0,A.jsx)(`div`,{className:`ma-list`,children:a.map((e,t)=>{let n=te(e),r=T[n],i=n===`upcoming`,a=n===`paid`,o=n===`completed`,l=n===`cancelled`;return(0,A.jsxs)(`div`,{className:`ma-card`,children:[(0,A.jsx)(`div`,{className:`ma-ribbon`,style:{background:r.ribbon}}),(0,A.jsxs)(`div`,{className:`ma-doc-img`,children:[(0,A.jsx)(`img`,{src:e.docData.image,alt:e.docData.name}),(0,A.jsx)(`div`,{className:`ma-img-heart`,children:`💙`})]}),(0,A.jsxs)(`div`,{className:`ma-info`,children:[(0,A.jsxs)(`div`,{className:`ma-status-pill`,style:{background:r.bg,color:r.color},children:[(0,A.jsx)(`span`,{className:`ma-status-dot`,style:{background:r.dot}}),r.label]}),(0,A.jsx)(`div`,{className:`ma-doc-name`,children:e.docData.name}),(0,A.jsx)(`div`,{className:`ma-doc-spec`,children:e.docData.speciality}),(0,A.jsx)(`div`,{className:`ma-meta`,children:(0,A.jsxs)(`div`,{className:`ma-meta-row`,children:[(0,A.jsxs)(`svg`,{className:`ma-meta-icon`,width:`14`,height:`14`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:[(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`}),(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 11a3 3 0 11-6 0 3 3 0 016 0z`})]}),(0,A.jsxs)(`span`,{children:[e.docData.address.line1,`, `,e.docData.address.line2]})]})}),(0,A.jsxs)(`div`,{className:`ma-datetime-pill`,children:[(0,A.jsx)(`svg`,{width:`12`,height:`12`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})}),y(e.slotDate),` \xA0·\xA0 `,e.slotTime]})]}),(0,A.jsxs)(`div`,{className:`ma-actions`,children:[i&&s!==e._id&&(0,A.jsxs)(`button`,{className:`ma-btn ma-btn-pay`,onClick:()=>c(e._id),children:[(0,A.jsx)(`svg`,{width:`13`,height:`13`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z`})}),`Pay Online`]}),i&&s===e._id&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`button`,{className:`ma-btn ma-btn-paypal`,onClick:()=>C(e._id),children:(0,A.jsx)(`img`,{src:_r.paypal_logo,alt:`PayPal`})}),(0,A.jsxs)(`button`,{className:`ma-btn ma-btn-upi`,onClick:()=>w(e._id),children:[(0,A.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:[(0,A.jsx)(`rect`,{x:`2`,y:`5`,width:`20`,height:`14`,rx:`3`}),(0,A.jsx)(`path`,{d:`M2 10h20`})]}),`Pay via UPI`]})]}),a&&(0,A.jsxs)(`button`,{className:`ma-btn ma-btn-paid`,children:[(0,A.jsx)(`svg`,{width:`13`,height:`13`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})}),`Paid`]}),o&&(0,A.jsxs)(`button`,{className:`ma-btn ma-btn-done`,children:[(0,A.jsx)(`svg`,{width:`13`,height:`13`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})}),`Completed`]}),!e.cancelled&&!e.isCompleted&&(0,A.jsxs)(`button`,{className:`ma-btn ma-btn-cancel`,onClick:()=>x(e._id),children:[(0,A.jsx)(`svg`,{width:`13`,height:`13`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 18L18 6M6 6l12 12`})}),`Cancel`]}),l&&(0,A.jsxs)(`button`,{className:`ma-btn ma-btn-cancelled`,children:[(0,A.jsx)(`svg`,{width:`13`,height:`13`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636`})}),`Cancelled`]})]})]},t)})})]})})]})},ks=({speciality:e,docId:t})=>{let{doctors:n}=(0,v.useContext)(Bo),r=dt(),[i,a]=(0,v.useState)([]);return(0,v.useEffect)(()=>{n.length>0&&e&&a(n.filter(n=>n.speciality===e&&n._id!==t))},[n,e,t]),(0,A.jsxs)(`div`,{className:`flex flex-col items-center gap-4 my-16 text-[#262626]`,children:[(0,A.jsx)(`h1`,{className:`text-3xl font-medium`,children:`Related Doctors`}),(0,A.jsx)(`p`,{className:`sm:w-1/3 text-center text-sm`,children:`Simply browse through our extensive list of trusted doctors.`}),(0,A.jsx)(`div`,{className:`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0`,children:i.map((e,t)=>(0,A.jsxs)(`div`,{onClick:()=>{r(`/appointment/${e._id}`),scrollTo(0,0)},className:`border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500`,children:[(0,A.jsx)(`img`,{className:`bg-[#EAEFFF] w-full`,src:e.image,alt:``}),(0,A.jsxs)(`div`,{className:`p-4`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-center ${e.available?`text-green-500`:`text-gray-500`}`,children:[(0,A.jsx)(`p`,{className:`w-2 h-2 rounded-full ${e.available?`bg-green-500`:`bg-gray-500`}`}),(0,A.jsx)(`p`,{children:e.available?`Available`:`Not Available`})]}),(0,A.jsx)(`p`,{className:`text-[#262626] text-lg font-medium`,children:e.name}),(0,A.jsx)(`p`,{className:`text-[#5C5C5C] text-sm`,children:e.speciality})]})]},t))})]})},As=()=>{let{docId:e}=pt(),t=dt(),{doctors:n,backendUrl:r,token:i,getDoctorsData:a}=(0,v.useContext)(Bo),o=[`SUN`,`MON`,`TUE`,`WED`,`THU`,`FRI`,`SAT`],[s,c]=(0,v.useState)(null),[l,u]=(0,v.useState)([]),[d,f]=(0,v.useState)(0),[p,m]=(0,v.useState)(``),[h,g]=(0,v.useState)(!1),[_,y]=(0,v.useState)(``),[b,x]=(0,v.useState)(null),[S,C]=(0,v.useState)(!1),w=async e=>{try{C(!0);let{data:t}=await H.get(`${r}/api/user/doctor/${e}`);t.success&&x(t.doctor)}catch(e){console.log(`Could not fetch doctor detail:`,e.message)}finally{C(!1)}},ee=()=>{let t=n.find(t=>t._id===e);t&&c({...t,slots_booked:t.slots_booked||{}})},te=()=>{if(!s)return;u([]);let e=new Date;for(let t=0;t<7;t++){let n=new Date(e);n.setDate(e.getDate()+t);let r=new Date(n);r.setHours(21,0,0,0),e.getDate()===n.getDate()?(n.setHours(n.getHours()>10?n.getHours()+1:10),n.setMinutes(n.getMinutes()>30?30:0)):(n.setHours(10),n.setMinutes(0));let i=[];for(;n<r;){let e=n.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),t=`${n.getDate()}_${n.getMonth()+1}_${n.getFullYear()}`;(s?.slots_booked?.[t]||[]).includes(e)||i.push({datetime:new Date(n),time:e}),n.setMinutes(n.getMinutes()+30)}u(e=>[...e,i])}},T=async()=>{if(!i)return j.warning(`Login to book appointment`),t(`/login`);let n=l[d][0].datetime,o=`${n.getDate()}_${n.getMonth()+1}_${n.getFullYear()}`;g(!0),y(``);try{let{data:n}=await H.post(r+`/api/user/book-appointment`,{docId:e,slotDate:o,slotTime:p},{headers:{token:i}});n.success?(j.success(n.message),a(),t(`/my-appointments`)):(j.error(n.message),y(n.message),n.message?.toLowerCase().includes(`slot`)&&a())}catch(e){console.log(e),j.error(e.message),y(e.message)}g(!1)};(0,v.useEffect)(()=>{n.length>0&&ee()},[n,e]),(0,v.useEffect)(()=>{s&&(te(),w(s._id))},[s]);let E=b||s,ne=E?.available??!1,re=E?.averageRating??E?.rating??null,ie=E?.totalPatients??E?.patients??null,ae=E?.satisfaction??null;return l[0]?.length,s&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap');

        /* ════════════════════════════
           KEYFRAMES
        ════════════════════════════ */
        @keyframes ap-fade-up   { from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)} }
        @keyframes ap-fade-left { from{opacity:0;transform:translateX(-32px)}to{opacity:1;transform:translateX(0)} }
        @keyframes ap-fade-right{ from{opacity:0;transform:translateX(32px)}to{opacity:1;transform:translateX(0)} }

        @keyframes ap-blob-1 {
          0%,100%{ border-radius:60% 40% 70% 30%/50% 60% 40% 70%; transform:translate(0,0) rotate(0deg) scale(1); }
          25%    { border-radius:40% 60% 30% 70%/60% 40% 70% 50%; transform:translate(20px,-30px) rotate(45deg) scale(1.08); }
          50%    { border-radius:70% 30% 50% 50%/40% 70% 60% 40%; transform:translate(-15px,20px) rotate(90deg) scale(0.95); }
          75%    { border-radius:30% 70% 60% 40%/70% 30% 50% 60%; transform:translate(25px,10px) rotate(135deg) scale(1.04); }
        }
        @keyframes ap-blob-2 {
          0%,100%{ border-radius:50% 50% 70% 30%/60% 40% 60% 40%; transform:translate(0,0) rotate(0deg) scale(1); }
          33%    { border-radius:70% 30% 40% 60%/30% 70% 50% 50%; transform:translate(-25px,18px) rotate(-60deg) scale(1.06); }
          66%    { border-radius:30% 70% 60% 40%/70% 30% 40% 60%; transform:translate(18px,-22px) rotate(-120deg) scale(0.96); }
        }
        @keyframes ap-blob-3 {
          0%,100%{ border-radius:40% 60% 50% 50%/50% 40% 60% 50%; transform:translate(0,0) rotate(0deg); }
          50%    { border-radius:60% 40% 40% 60%/40% 60% 40% 60%; transform:translate(14px,-16px) rotate(180deg); }
        }
        @keyframes ap-ring-a {
          0%,100%{ transform:translateY(0) rotate(0deg) scale(1); opacity:.35; }
          50%    { transform:translateY(-28px) rotate(180deg) scale(1.08); opacity:.6; }
        }
        @keyframes ap-ring-b {
          0%,100%{ transform:translateY(0) rotate(0deg); opacity:.22; }
          50%    { transform:translateY(22px) rotate(-180deg); opacity:.48; }
        }
        @keyframes ap-cross-float {
          0%,100%{ transform:translate(0,0) rotate(0deg); opacity:.3; }
          50%    { transform:translate(12px,-20px) rotate(180deg); opacity:.65; }
        }
        @keyframes ap-diamond-bob {
          0%,100%{ transform:translateY(0) rotate(45deg); opacity:.3; }
          50%    { transform:translateY(-18px) rotate(45deg); opacity:.6; }
        }
        @keyframes ap-square-spin {
          0%  { transform:rotate(0deg) scale(1); opacity:.25; }
          50% { transform:rotate(90deg) scale(1.12); opacity:.48; }
          100%{ transform:rotate(180deg) scale(1); opacity:.25; }
        }
        @keyframes ap-triangle-drift {
          0%,100%{ transform:translateX(0) rotate(0deg); opacity:.2; }
          50%    { transform:translateX(20px) rotate(60deg); opacity:.48; }
        }
        @keyframes ap-dot-rise { 0%{transform:translateY(0) scale(1);opacity:.75} 100%{transform:translateY(-110px) scale(.25);opacity:0} }
        @keyframes ap-helix {
          0%{ transform:translateY(0) scaleX(1); opacity:.4; }
          25%{ transform:translateY(-8px) scaleX(1.18); opacity:.75; }
          50%{ transform:translateY(-16px) scaleX(.82); opacity:.4; }
          75%{ transform:translateY(-8px) scaleX(1.18); opacity:.75; }
          100%{ transform:translateY(0) scaleX(1); opacity:.4; }
        }
        @keyframes ap-wave-sweep { 0%{transform:translateX(-50%)} 100%{transform:translateX(0%)} }
        @keyframes ap-shimmer { 0%{background-position:-400% center}100%{background-position:400% center} }
        @keyframes ap-badge-shine { 0%{left:-80%}55%,100%{left:130%} }
        @keyframes ap-pulse-ring {
          0%  { box-shadow:0 0 0 0 rgba(236,72,153,.55); }
          70% { box-shadow:0 0 0 14px rgba(236,72,153,0); }
          100%{ box-shadow:0 0 0 0 rgba(236,72,153,0); }
        }
        @keyframes ap-dot-blink { 0%,100%{opacity:1}50%{opacity:.3} }
        @keyframes ap-fee-float { 0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-6px) rotate(1deg)} }
        @keyframes ap-btn-glow {
          0%,100%{ box-shadow:0 8px 32px rgba(236,72,153,.35),0 0 60px rgba(168,85,247,.1); }
          50%    { box-shadow:0 14px 52px rgba(236,72,153,.55),0 0 80px rgba(168,85,247,.22); }
        }
        @keyframes ap-spinner { to{transform:rotate(360deg)} }
        @keyframes ap-slot-pop { from{opacity:0;transform:scale(.75) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes ap-img-ken { 0%,100%{transform:scale(1.05) translate(0,0)}50%{transform:scale(1.1) translate(-8px,-4px)} }
        @keyframes ap-tag-pop { from{opacity:0;transform:scale(.8) translateY(-8px)}to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes ap-stat-in { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
        @keyframes ap-skeleton {
          0%,100%{ background-position: -200% center; }
          50%    { background-position: 200% center; }
        }

        /* ════════════════════════════
           ROOT
        ════════════════════════════ */
        .ap-root {
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #fdf4ff 0%, #fef3f8 25%, #f0f9ff 55%, #fdfcff 100%);
          position: relative;
          overflow: hidden;
          padding: 52px 28px 90px;
        }

        /* ════════════════════════════
           BACKGROUND
        ════════════════════════════ */
        .ap-bg { position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden; }
        .ap-grid {
          position:absolute;inset:0;
          background-image:radial-gradient(circle, rgba(168,85,247,.07) 1px, transparent 1px);
          background-size:42px 42px;
        }
        .ap-blob { position:absolute; }
        .ap-blob-1 { width:400px;height:400px;top:-100px;left:-110px;background:linear-gradient(135deg,rgba(236,72,153,.13),rgba(168,85,247,.10));animation:ap-blob-1 13s ease-in-out infinite; }
        .ap-blob-2 { width:340px;height:340px;bottom:40px;right:-90px;background:linear-gradient(135deg,rgba(99,102,241,.11),rgba(14,165,233,.09));animation:ap-blob-2 16s ease-in-out infinite; }
        .ap-blob-3 { width:230px;height:230px;top:42%;left:56%;background:linear-gradient(135deg,rgba(16,185,129,.09),rgba(6,182,212,.07));animation:ap-blob-3 11s ease-in-out infinite;filter:blur(2px); }
        .ap-ring { position:absolute;border-radius:50%;border-style:solid; }
        .ap-ring-1{ width:190px;height:190px;top:6%;right:10%; border:2px solid rgba(236,72,153,.18); animation:ap-ring-a 9s ease-in-out infinite; }
        .ap-ring-2{ width:115px;height:115px;top:8%;right:12%; border:1.5px solid rgba(168,85,247,.22); animation:ap-ring-a 9s ease-in-out infinite .6s; }
        .ap-ring-3{ width:270px;height:270px;bottom:12%;left:3%; border:1.5px solid rgba(99,102,241,.12); animation:ap-ring-b 12s ease-in-out infinite; }
        .ap-ring-4{ width:85px;height:85px;bottom:26%;left:62%; border:2px solid rgba(14,165,233,.18); animation:ap-ring-b 8s ease-in-out infinite 1s; }
        .ap-ring-5{ width:52px;height:52px;top:53%;left:7%; border:2px dashed rgba(236,72,153,.2); animation:ap-ring-a 7s ease-in-out infinite 2s; }
        .ap-cross{ position:absolute;user-select:none;line-height:1; }
        .ap-cross-1{ top:19%;left:3%;font-size:22px;color:rgba(236,72,153,.32); animation:ap-cross-float 7s ease-in-out infinite; }
        .ap-cross-2{ top:68%;right:5%;font-size:16px;color:rgba(99,102,241,.28); animation:ap-cross-float 10s ease-in-out infinite 1.5s; }
        .ap-cross-3{ top:36%;right:1%;font-size:30px;color:rgba(168,85,247,.2); animation:ap-cross-float 6s ease-in-out infinite 3s; }
        .ap-tri{ position:absolute; }
        .ap-tri-1{ top:12%;left:40%; animation:ap-triangle-drift 9s ease-in-out infinite; }
        .ap-tri-2{ bottom:20%;right:22%; animation:ap-triangle-drift 7s ease-in-out infinite 2s; }
        .ap-sq{ position:absolute;border-radius:5px; }
        .ap-sq-1{ width:28px;height:28px;top:60%;left:46%; border:2px solid rgba(236,72,153,.25); animation:ap-square-spin 8s ease-in-out infinite; }
        .ap-sq-2{ width:18px;height:18px;top:27%;left:25%; border:2px solid rgba(168,85,247,.22); animation:ap-square-spin 6s ease-in-out infinite 1s; }
        .ap-sq-3{ width:22px;height:22px;bottom:33%;right:14%; border:2px solid rgba(14,165,233,.22); animation:ap-square-spin 10s ease-in-out infinite 2s; }
        .ap-diamond{ position:absolute;transform:rotate(45deg); }
        .ap-diamond-1{ width:20px;height:20px;top:46%;left:1%; background:rgba(236,72,153,.15); animation:ap-diamond-bob 5s ease-in-out infinite; }
        .ap-diamond-2{ width:14px;height:14px;top:17%;right:28%; background:rgba(168,85,247,.18); animation:ap-diamond-bob 7s ease-in-out infinite 1s; }
        .ap-diamond-3{ width:12px;height:12px;bottom:17%;left:33%; background:rgba(14,165,233,.2); animation:ap-diamond-bob 6s ease-in-out infinite 2s; }
        .ap-fdot{ position:absolute;border-radius:50%; }
        .ap-fdot-1{ width:8px;height:8px;background:rgba(236,72,153,.42);top:28%;left:14%; animation:ap-dot-rise 4.2s ease-in-out infinite; }
        .ap-fdot-2{ width:5px;height:5px;background:rgba(168,85,247,.38);top:53%;left:21%; animation:ap-dot-rise 5.8s ease-in-out infinite 1s; }
        .ap-fdot-3{ width:6px;height:6px;background:rgba(14,165,233,.42);top:73%;right:18%; animation:ap-dot-rise 4s ease-in-out infinite .5s; }
        .ap-fdot-4{ width:4px;height:4px;background:rgba(16,185,129,.42);top:38%;right:33%; animation:ap-dot-rise 4.7s ease-in-out infinite 2s; }
        .ap-fdot-5{ width:7px;height:7px;background:rgba(236,72,153,.28);bottom:28%;left:48%; animation:ap-dot-rise 6.2s ease-in-out infinite 1.5s; }
        .ap-helix-row{ position:absolute;top:2%;left:50%;transform:translateX(-50%);display:flex;gap:11px;align-items:center; }
        .ap-helix-dot{ border-radius:50%;animation:ap-helix 2.2s ease-in-out infinite; }
        .ap-wave-wrap{ position:absolute;bottom:16%;left:0;width:200%;height:36px;opacity:.11; animation:ap-wave-sweep 16s linear infinite; }

        /* ════════════════════════════
           INNER / HERO
        ════════════════════════════ */
        .ap-inner{ position:relative;z-index:5;max-width:1100px;margin:0 auto; }
        .ap-hero{ display:grid;grid-template-columns:300px 1fr;gap:42px;align-items:start;margin-bottom:60px; }

        /* Image card */
        .ap-img-card{ position:relative;border-radius:32px;overflow:hidden;box-shadow:0 24px 80px rgba(168,85,247,.18),0 0 0 1px rgba(236,72,153,.1);opacity:0;animation:ap-fade-left .7s .1s ease forwards;transition:transform .4s ease,box-shadow .4s ease;cursor:default; }
        .ap-img-card:hover{ transform:translateY(-8px) scale(1.015); box-shadow:0 40px 100px rgba(168,85,247,.28),0 0 0 1.5px rgba(236,72,153,.18); }
        .ap-img-card img{ width:100%;height:400px;object-fit:cover;object-position:top;display:block;animation:ap-img-ken 10s ease-in-out infinite; }
        .ap-img-overlay{ position:absolute;inset:0;background:linear-gradient(160deg,rgba(236,72,153,.04) 0%,transparent 40%,rgba(15,10,30,.48) 100%);pointer-events:none; }

        /* Availability tag — API driven */
        .ap-img-tag{ position:absolute;backdrop-filter:blur(14px);border-radius:100px;display:flex;align-items:center;gap:7px;font-size:11px;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,.1);padding:6px 14px;animation:ap-tag-pop .5s ease both; }
        .ap-tag-avail-yes{ bottom:18px;left:14px;background:rgba(255,255,255,.9);border:1px solid rgba(16,185,129,.25);color:#059669;animation-delay:.6s; }
        .ap-tag-avail-no { bottom:18px;left:14px;background:rgba(255,255,255,.9);border:1px solid rgba(239,68,68,.25); color:#dc2626;animation-delay:.6s; }
        .ap-tag-rating   { top:16px;right:14px;background:rgba(255,255,255,.88);border:1px solid rgba(245,158,11,.25);color:#d97706;animation-delay:.75s; }
        .ap-avail-dot-on { width:7px;height:7px;border-radius:50%;background:#10b981;flex-shrink:0;animation:ap-dot-blink 2s ease-in-out infinite; }
        .ap-avail-dot-off{ width:7px;height:7px;border-radius:50%;background:#ef4444;flex-shrink:0; }

        /* Skeleton for loading states */
        .ap-skel{ border-radius:8px;background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% auto;animation:ap-skeleton 1.5s linear infinite; }

        /* Info panel */
        .ap-info-panel{ opacity:0;animation:ap-fade-right .7s .22s ease forwards; }
        .ap-spec-pill{ display:inline-flex;align-items:center;gap:7px;background:linear-gradient(135deg,rgba(236,72,153,.1),rgba(168,85,247,.08));border:1px solid rgba(236,72,153,.2);border-radius:100px;padding:5px 16px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#db2777;margin-bottom:18px;position:relative;overflow:hidden; }
        .ap-spec-pill::before{ content:'';position:absolute;top:0;left:-80%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(236,72,153,.18),transparent);animation:ap-badge-shine 3.5s ease-in-out infinite;pointer-events:none; }
        .ap-name{ font-family:'Playfair Display',serif;font-size:clamp(34px,3.8vw,50px);font-weight:500;color:#1e1b2e;line-height:1.05;letter-spacing:-1px;margin-bottom:8px; }
        .ap-name em{ font-style:italic;background:linear-gradient(135deg,#ec4899 0%,#a855f7 50%,#6366f1 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:ap-shimmer 4s linear infinite; }
        .ap-meta{ display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:22px; }
        .ap-meta-txt{ font-size:13px;color:#6b7280;font-weight:400; }
        .ap-exp-pill{ background:linear-gradient(135deg,rgba(16,185,129,.12),rgba(6,182,212,.08));border:1px solid rgba(16,185,129,.22);border-radius:100px;padding:3px 12px;font-size:11px;font-weight:600;color:#059669; }
        .ap-verified{ display:flex;align-items:center;gap:5px;font-size:11px;font-weight:600;color:#6366f1; }
        .ap-v-badge{ width:17px;height:17px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#a855f7);display:flex;align-items:center;justify-content:center; }
        .ap-div{ height:1px;background:linear-gradient(90deg,rgba(236,72,153,.25),rgba(168,85,247,.15),transparent);margin:20px 0; }
        .ap-about-lbl{ font-size:9px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#9ca3af;margin-bottom:8px; }
        .ap-about-txt{ font-size:14px;font-weight:300;color:#6b7280;line-height:1.85;max-width:600px; }

        /* Stats */
        .ap-stats{ display:flex;gap:14px;margin-top:28px;flex-wrap:wrap; }
        .ap-stat{ background:#fff;border:1px solid rgba(168,85,247,.1);border-radius:18px;padding:14px 20px;display:flex;flex-direction:column;gap:3px;box-shadow:0 4px 20px rgba(168,85,247,.07);transition:all .3s ease;opacity:0;animation:ap-stat-in .5s ease both; }
        .ap-stat:hover{ transform:translateY(-5px);box-shadow:0 12px 36px rgba(168,85,247,.16);border-color:rgba(236,72,153,.2); }
        .ap-stat-n{ font-family:'Playfair Display',serif;font-size:24px;font-weight:500;color:#1e1b2e;line-height:1; }
        .ap-stat-n span{ color:#ec4899; }
        .ap-stat-l{ font-size:10px;color:#9ca3af;font-weight:400; }
        .ap-stat-skel{ height:24px;width:60px; }

        /* Fee */
        .ap-fee{ display:inline-flex;align-items:center;gap:12px;background:linear-gradient(135deg,rgba(236,72,153,.08),rgba(168,85,247,.06));border:1.5px solid rgba(236,72,153,.18);border-radius:20px;padding:14px 24px;margin-top:26px;animation:ap-fee-float 5s ease-in-out infinite;box-shadow:0 8px 32px rgba(236,72,153,.1); }
        .ap-fee-emoji{ font-size:24px; }
        .ap-fee-lbl{ font-size:10px;color:#9ca3af;font-weight:400;letter-spacing:.5px; }
        .ap-fee-val{ font-family:'Playfair Display',serif;font-size:28px;font-weight:500;color:#db2777;line-height:1; }

        /* ════════════════════════════
           BOOKING CARD
        ════════════════════════════ */
        .ap-booking{ background:#fff;border-radius:28px;padding:38px 42px;box-shadow:0 8px 48px rgba(168,85,247,.1),0 0 0 1px rgba(236,72,153,.07);opacity:0;animation:ap-fade-up .7s .45s ease forwards;position:relative;overflow:hidden; }
        .ap-booking::before{ content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ec4899,#a855f7,#6366f1,#0ea5e9);border-radius:28px 28px 0 0; }
        .ap-booking::after{ content:'';position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 60% 40% at 80% 100%,rgba(168,85,247,.04) 0%,transparent 60%); }
        .ap-booking-inner{ position:relative;z-index:1; }
        .ap-sec-hdr{ display:flex;align-items:center;gap:14px;margin-bottom:30px; }
        .ap-sec-dot{ width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#a855f7);animation:ap-dot-blink 1.8s ease-in-out infinite;flex-shrink:0; }
        .ap-sec-title{ font-family:'Playfair Display',serif;font-size:26px;font-weight:500;color:#1e1b2e;letter-spacing:-.5px; }
        .ap-sec-line{ flex:1;height:1px;background:linear-gradient(90deg,rgba(236,72,153,.2),transparent); }

        /* Booking error banner */
        .ap-book-error{
          display:flex; align-items:flex-start; gap:10px;
          background:rgba(239,68,68,0.07);
          border:1px solid rgba(239,68,68,0.25);
          border-radius:14px; padding:13px 16px;
          margin-bottom:20px;
          animation:ap-fade-up 0.3s ease;
        }
        .ap-book-error-icon{ font-size:17px; flex-shrink:0; margin-top:1px; }
        .ap-book-error-msg{ font-size:13px; color:#b91c1c; font-weight:500; line-height:1.5; }
        .ap-book-error-sub{ font-size:11px; color:#ef4444; font-weight:400; margin-top:3px; opacity:0.8; }

        /* Unavailable notice */
        .ap-unavail-notice{ display:flex;align-items:center;gap:10px;background:rgba(239,68,68,.06);border:1px solid rgba(239,68,68,.18);border-radius:14px;padding:14px 18px;margin-bottom:24px;font-size:13px;color:#b91c1c;font-weight:500; }
        .ap-unavail-icon{ font-size:18px;flex-shrink:0; }

        /* Days */
        .ap-days{ display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;margin-bottom:28px;scrollbar-width:none; }
        .ap-days::-webkit-scrollbar{ display:none; }
        .ap-day{ flex-shrink:0;width:68px;padding:14px 0;border-radius:20px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:5px;border:1.5px solid rgba(168,85,247,.12);background:#fafafa;transition:all .3s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden; }
        .ap-day::before{ content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(236,72,153,.07),rgba(168,85,247,.05));opacity:0;transition:opacity .3s; }
        .ap-day:hover::before{ opacity:1; }
        .ap-day:hover{ border-color:rgba(236,72,153,.32);transform:translateY(-4px) scale(1.05);box-shadow:0 8px 24px rgba(236,72,153,.15); }
        .ap-day.on{ background:linear-gradient(135deg,#ec4899,#a855f7);border-color:transparent;box-shadow:0 10px 30px rgba(236,72,153,.4);transform:translateY(-6px) scale(1.07);animation:ap-pulse-ring 2.5s ease-in-out infinite; }
        .ap-day.on::before{ opacity:0; }
        .ap-day-nm{ font-size:9px;font-weight:700;letter-spacing:1.5px;color:#9ca3af; }
        .ap-day-dt{ font-family:'Playfair Display',serif;font-size:22px;font-weight:500;color:#1e1b2e;line-height:1; }
        .ap-day.on .ap-day-nm{ color:rgba(255,255,255,.75); }
        .ap-day.on .ap-day-dt{ color:#fff; }
        .ap-day-slots{ font-size:9px;color:#9ca3af;font-weight:500; }
        .ap-day.on .ap-day-slots{ color:rgba(255,255,255,.6); }

        /* Time chips */
        .ap-times{ display:flex;gap:9px;flex-wrap:wrap;margin-bottom:36px; }
        .ap-no-slots{ font-size:13px;color:#9ca3af;font-weight:400;padding:12px 0;margin-bottom:24px; }
        .ap-chip{ padding:8px 18px;border-radius:100px;cursor:pointer;font-size:12px;font-weight:500;border:1.5px solid rgba(168,85,247,.12);background:#fafafa;color:#6b7280;transition:all .25s cubic-bezier(.34,1.56,.64,1);animation:ap-slot-pop .3s ease both;position:relative;overflow:hidden; }
        .ap-chip:hover{ border-color:rgba(236,72,153,.35);color:#db2777;background:rgba(236,72,153,.05);transform:translateY(-3px) scale(1.07);box-shadow:0 6px 18px rgba(236,72,153,.15); }
        .ap-chip.on{ background:linear-gradient(135deg,rgba(236,72,153,.12),rgba(168,85,247,.1));border-color:rgba(236,72,153,.45);color:#be185d;font-weight:600;transform:translateY(-3px) scale(1.05);box-shadow:0 8px 24px rgba(236,72,153,.2); }
        .ap-chip.on::before{ content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);animation:ap-badge-shine 2.5s ease-in-out infinite;pointer-events:none; }

        /* Book btn */
        .ap-book-btn{ display:inline-flex;align-items:center;gap:12px;background:linear-gradient(135deg,#ec4899 0%,#a855f7 55%,#6366f1 100%);color:#fff;border:none;border-radius:18px;padding:16px 48px;font-family:'Manrope',sans-serif;font-size:14px;font-weight:700;letter-spacing:.4px;cursor:pointer;position:relative;overflow:hidden;transition:all .3s ease;animation:ap-btn-glow 3s ease-in-out infinite; }
        .ap-book-btn:hover{ transform:translateY(-4px) scale(1.03);box-shadow:0 20px 52px rgba(236,72,153,.5); }
        .ap-book-btn:active{ transform:translateY(-1px) scale(1); }
        .ap-book-btn::before{ content:'';position:absolute;top:0;left:-80%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);animation:ap-badge-shine 3s ease-in-out infinite;pointer-events:none; }
        .ap-book-btn.loading{ opacity:.8;pointer-events:none; }
        .ap-book-btn:disabled{ opacity:.55;pointer-events:none;animation:none;box-shadow:none; }
        .ap-spin{ width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;animation:ap-spinner .7s linear infinite; }
        .ap-arrow{ transition:transform .3s;font-size:18px; }
        .ap-book-btn:hover .ap-arrow{ transform:translateX(5px); }

        @media(max-width:768px){
          .ap-root{ padding:32px 16px 70px; }
          .ap-hero{ grid-template-columns:1fr;gap:24px; }
          .ap-img-card img{ height:300px; }
          .ap-name{ font-size:32px; }
          .ap-booking{ padding:26px 22px; }
        }
      `}),(0,A.jsxs)(`div`,{className:`ap-root`,children:[(0,A.jsxs)(`div`,{className:`ap-bg`,children:[(0,A.jsx)(`div`,{className:`ap-grid`}),(0,A.jsx)(`div`,{className:`ap-blob ap-blob-1`}),(0,A.jsx)(`div`,{className:`ap-blob ap-blob-2`}),(0,A.jsx)(`div`,{className:`ap-blob ap-blob-3`}),(0,A.jsx)(`div`,{className:`ap-ring ap-ring-1`}),(0,A.jsx)(`div`,{className:`ap-ring ap-ring-2`}),(0,A.jsx)(`div`,{className:`ap-ring ap-ring-3`}),(0,A.jsx)(`div`,{className:`ap-ring ap-ring-4`}),(0,A.jsx)(`div`,{className:`ap-ring ap-ring-5`}),(0,A.jsx)(`div`,{className:`ap-cross ap-cross-1`,children:`✦`}),(0,A.jsx)(`div`,{className:`ap-cross ap-cross-2`,children:`✦`}),(0,A.jsx)(`div`,{className:`ap-cross ap-cross-3`,children:`+`}),(0,A.jsx)(`svg`,{className:`ap-tri ap-tri-1`,width:`22`,height:`22`,viewBox:`0 0 22 22`,fill:`none`,children:(0,A.jsx)(`polygon`,{points:`11,2 20,20 2,20`,stroke:`rgba(236,72,153,0.28)`,strokeWidth:`1.8`,fill:`none`})}),(0,A.jsx)(`svg`,{className:`ap-tri ap-tri-2`,width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,A.jsx)(`polygon`,{points:`8,1 15,15 1,15`,stroke:`rgba(99,102,241,0.25)`,strokeWidth:`1.5`,fill:`none`})}),(0,A.jsx)(`div`,{className:`ap-sq ap-sq-1`}),(0,A.jsx)(`div`,{className:`ap-sq ap-sq-2`}),(0,A.jsx)(`div`,{className:`ap-sq ap-sq-3`}),(0,A.jsx)(`div`,{className:`ap-diamond ap-diamond-1`}),(0,A.jsx)(`div`,{className:`ap-diamond ap-diamond-2`}),(0,A.jsx)(`div`,{className:`ap-diamond ap-diamond-3`}),(0,A.jsx)(`div`,{className:`ap-fdot ap-fdot-1`}),(0,A.jsx)(`div`,{className:`ap-fdot ap-fdot-2`}),(0,A.jsx)(`div`,{className:`ap-fdot ap-fdot-3`}),(0,A.jsx)(`div`,{className:`ap-fdot ap-fdot-4`}),(0,A.jsx)(`div`,{className:`ap-fdot ap-fdot-5`}),(0,A.jsx)(`div`,{className:`ap-helix-row`,children:[...Array(10)].map((e,t)=>(0,A.jsx)(`div`,{className:`ap-helix-dot`,style:{width:`${5+Math.abs(Math.sin(t*.75))*4}px`,height:`${5+Math.abs(Math.sin(t*.75))*4}px`,background:`rgba(${t%2==0?`236,72,153`:`168,85,247`},.22)`,animationDelay:`${t*.2}s`}},t))}),(0,A.jsx)(`div`,{className:`ap-wave-wrap`,children:(0,A.jsxs)(`svg`,{viewBox:`0 0 1440 36`,preserveAspectRatio:`none`,fill:`none`,style:{width:`100%`,height:`100%`},children:[(0,A.jsx)(`path`,{d:`M0,18 C240,0 480,36 720,18 C960,0 1200,36 1440,18`,stroke:`url(#wg)`,strokeWidth:`2.5`}),(0,A.jsx)(`path`,{d:`M0,26 C240,8 480,44 720,26 C960,8 1200,44 1440,26`,stroke:`url(#wg2)`,strokeWidth:`1.5`}),(0,A.jsxs)(`defs`,{children:[(0,A.jsxs)(`linearGradient`,{id:`wg`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#ec4899`,stopOpacity:`.7`}),(0,A.jsx)(`stop`,{offset:`50%`,stopColor:`#a855f7`,stopOpacity:`.7`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#6366f1`,stopOpacity:`.7`})]}),(0,A.jsxs)(`linearGradient`,{id:`wg2`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,A.jsx)(`stop`,{offset:`0%`,stopColor:`#6366f1`,stopOpacity:`.5`}),(0,A.jsx)(`stop`,{offset:`50%`,stopColor:`#0ea5e9`,stopOpacity:`.5`}),(0,A.jsx)(`stop`,{offset:`100%`,stopColor:`#ec4899`,stopOpacity:`.5`})]})]})]})})]}),(0,A.jsxs)(`div`,{className:`ap-inner`,children:[(0,A.jsxs)(`div`,{className:`ap-hero`,children:[(0,A.jsxs)(`div`,{className:`ap-img-card`,children:[(0,A.jsx)(`img`,{src:s.image,alt:s.name}),(0,A.jsx)(`div`,{className:`ap-img-overlay`}),(0,A.jsxs)(`div`,{className:`ap-img-tag ${ne?`ap-tag-avail-yes`:`ap-tag-avail-no`}`,children:[(0,A.jsx)(`span`,{className:ne?`ap-avail-dot-on`:`ap-avail-dot-off`}),S?`Checking…`:ne?`Available Today`:`Not Available`]}),!S&&re!==null&&(0,A.jsxs)(`div`,{className:`ap-img-tag ap-tag-rating`,children:[`★ `,typeof re==`number`?re.toFixed(1):re,` · Top Rated`]}),S&&(0,A.jsx)(`div`,{className:`ap-img-tag ap-tag-rating`,children:(0,A.jsx)(`div`,{className:`ap-skel`,style:{width:80,height:14}})})]}),(0,A.jsxs)(`div`,{className:`ap-info-panel`,children:[(0,A.jsxs)(`div`,{className:`ap-spec-pill`,children:[(0,A.jsx)(`span`,{children:`✦`}),` `,s.speciality]}),(0,A.jsxs)(`h1`,{className:`ap-name`,children:[`Dr. `,(0,A.jsx)(`em`,{children:s.name.replace(/^Dr\.?\s*/i,``)})]}),(0,A.jsxs)(`div`,{className:`ap-meta`,children:[(0,A.jsx)(`span`,{className:`ap-meta-txt`,children:s.degree}),(0,A.jsx)(`span`,{className:`ap-exp-pill`,children:s.experience}),(0,A.jsxs)(`div`,{className:`ap-verified`,children:[(0,A.jsx)(`div`,{className:`ap-v-badge`,children:(0,A.jsx)(`svg`,{width:`9`,height:`9`,viewBox:`0 0 12 12`,fill:`none`,children:(0,A.jsx)(`path`,{d:`M2 6l3 3 5-5`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),`Verified`]})]}),(0,A.jsx)(`div`,{className:`ap-div`}),(0,A.jsx)(`div`,{className:`ap-about-lbl`,children:`About the Doctor`}),(0,A.jsx)(`p`,{className:`ap-about-txt`,children:s.about}),(0,A.jsx)(`div`,{className:`ap-stats`,children:[{val:ae===null?null:`${ae}`,suffix:`%`,label:`Patient Satisfaction`},{val:re===null?null:`${typeof re==`number`?re.toFixed(1):re}`,suffix:`★`,label:`Average Rating`},{val:ie===null?null:ie>=1e3?`${(ie/1e3).toFixed(1)}`:`${ie}`,suffix:ie!==null&&ie>=1e3?`k`:`+`,label:`Total Patients`}].map((e,t)=>(0,A.jsxs)(`div`,{className:`ap-stat`,style:{animationDelay:`${.3+t*.12}s`},children:[S||e.val===null?(0,A.jsx)(`div`,{className:`ap-skel ap-stat-skel`}):(0,A.jsxs)(`div`,{className:`ap-stat-n`,children:[e.val,(0,A.jsx)(`span`,{children:e.suffix})]}),(0,A.jsx)(`div`,{className:`ap-stat-l`,children:e.label})]},t))}),(0,A.jsxs)(`div`,{className:`ap-fee`,children:[(0,A.jsx)(`span`,{className:`ap-fee-emoji`,children:`💎`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`ap-fee-lbl`,children:`Consultation Fee`}),(0,A.jsxs)(`div`,{className:`ap-fee-val`,children:[`$`,s.fees]})]})]})]})]}),(0,A.jsx)(`div`,{className:`ap-booking`,children:(0,A.jsxs)(`div`,{className:`ap-booking-inner`,children:[(0,A.jsxs)(`div`,{className:`ap-sec-hdr`,children:[(0,A.jsx)(`div`,{className:`ap-sec-dot`}),(0,A.jsx)(`h2`,{className:`ap-sec-title`,children:`Pick Your Appointment`}),(0,A.jsx)(`div`,{className:`ap-sec-line`})]}),!S&&!ne&&(0,A.jsxs)(`div`,{className:`ap-unavail-notice`,children:[(0,A.jsx)(`span`,{className:`ap-unavail-icon`,children:`⚠️`}),`This doctor is currently not accepting new appointments. You can still browse available slots when they reopen.`]}),(0,A.jsx)(`div`,{className:`ap-days`,children:l.length>0&&l.map((e,t)=>(0,A.jsxs)(`div`,{className:`ap-day ${d===t?`on`:``}`,onClick:()=>{f(t),m(``),y(``)},children:[(0,A.jsx)(`span`,{className:`ap-day-nm`,children:e[0]&&o[e[0].datetime.getDay()]}),(0,A.jsx)(`span`,{className:`ap-day-dt`,children:e[0]&&e[0].datetime.getDate()}),(0,A.jsx)(`span`,{className:`ap-day-slots`,children:e.length>0?`${e.length} slots`:`Full`})]},t))}),l.length>0&&l[d]?.length===0?(0,A.jsx)(`p`,{className:`ap-no-slots`,children:`No slots available for this day. Please try another date.`}):(0,A.jsx)(`div`,{className:`ap-times`,children:l.length>0&&l[d]?.map((e,t)=>(0,A.jsx)(`div`,{className:`ap-chip ${e.time===p?`on`:``}`,onClick:()=>{m(e.time),y(``)},style:{animationDelay:`${t*.03}s`},children:e.time.toLowerCase()},t))}),_&&(0,A.jsxs)(`div`,{className:`ap-book-error`,children:[(0,A.jsx)(`span`,{className:`ap-book-error-icon`,children:`⚠️`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`ap-book-error-msg`,children:_}),(0,A.jsx)(`div`,{className:`ap-book-error-sub`,children:`Please select a different time slot and try again.`})]})]}),(0,A.jsx)(`button`,{className:`ap-book-btn${h?` loading`:``}`,onClick:T,disabled:!ne||!p||h,title:ne?p?``:`Select a time slot first`:`Doctor is not accepting appointments`,children:h?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`div`,{className:`ap-spin`}),` Confirming...`]}):(0,A.jsxs)(A.Fragment,{children:[`Book Appointment `,(0,A.jsx)(`span`,{className:`ap-arrow`,children:`→`})]})})]})})]})]}),(0,A.jsx)(ks,{speciality:s.speciality,docId:e})]})},js=[{label:`Home`,to:`/`},{label:`All Doctors`,to:`/doctors`},{label:`About`,to:`/about`},{label:`Contact`,to:`/contact`}],Ms=()=>{let e=dt(),t=ct(),{token:n,setToken:r,userData:i}=(0,v.useContext)(Bo),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)(!1),d=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let e=()=>{window.innerWidth>=768&&o(!1)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,v.useEffect)(()=>{let e=()=>u(window.scrollY>10);return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,v.useEffect)(()=>{let e=e=>{d.current&&!d.current.contains(e.target)&&c(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .nb {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(6, 9, 18, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(59,130,246,0.12);
          transition: all 0.3s ease;
          width: 100%;
        }

        .nb.scrolled {
          background: rgba(6, 9, 18, 0.97);
          border-bottom-color: rgba(99,102,241,0.25);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(99,102,241,0.15);
        }

        .nb-topline {
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(59,130,246,0.5) 25%,
            rgba(99,102,241,0.9) 50%,
            rgba(6,182,212,0.5) 75%,
            transparent 100%
          );
        }

        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
        }

        .nb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
          user-select: none;
          min-width: 0;
        }

        .nb-logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 0 18px rgba(99,102,241,0.3);
          transition: box-shadow 0.3s, transform 0.2s;
          flex-shrink: 0;
        }

        .nb-logo:hover .nb-logo-icon {
          box-shadow: 0 0 0 1px rgba(99,102,241,0.7), 0 0 28px rgba(99,102,241,0.5);
          transform: scale(1.05);
        }

        .nb-logo-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          min-width: 0;
        }

        .nb-logo-name {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .nb-logo-name span {
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nb-logo-sub {
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 2px;
          color: #334155;
          text-transform: uppercase;
        }

        .nb-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: nowrap;
        }

        .nb-link {
          position: relative;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          color: #ffff;
          padding: 7px 14px;
          border-radius: 9px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .nb-link:hover {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.15);
        }

        .nb-link.active {
          color: #60A5FA;
          background: rgba(59,130,246,0.1);
          border-color: rgba(59,130,246,0.25);
        }

        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: linear-gradient(90deg, #3B82F6, #6366F1);
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(99,102,241,0.6);
        }

        .nb-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .nb-admin-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #ffff;
          background: rgba(30,41,59,0.6);
          border: 1px solid #1E293B;
          padding: 7px 14px;
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }

        .nb-admin-btn:hover {
          color: #60A5FA;
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.08);
        }

        .nb-cta {
          display: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          border: none;
          padding: 8px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.01em;
          box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 4px 14px rgba(99,102,241,0.3);
        }

        @media (min-width: 768px) {
          .nb-cta { display: flex; align-items: center; }
        }

        .nb-cta:hover {
          box-shadow: 0 0 0 1px rgba(99,102,241,0.6), 0 6px 20px rgba(99,102,241,0.45);
          transform: translateY(-1px);
        }

        .nb-cta:active { transform: translateY(0); }

        .nb-avatar-wrap {
          position: relative;
          cursor: pointer;
        }

        .nb-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(99,102,241,0.4);
          box-shadow: 0 0 0 1px rgba(99,102,241,0.2), 0 0 14px rgba(99,102,241,0.2);
          transition: all 0.2s;
        }

        .nb-avatar:hover {
          border-color: rgba(99,102,241,0.7);
          box-shadow: 0 0 0 1px rgba(99,102,241,0.5), 0 0 20px rgba(99,102,241,0.35);
        }

        .nb-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          width: 200px;
          background: #0d1117;
          border: 1px solid #1E293B;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1);
          animation: nb-dropdown-in 0.18s ease both;
        }

        @keyframes nb-dropdown-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .nb-dropdown-header {
          padding: 12px 14px;
          border-bottom: 1px solid #1E293B;
          background: rgba(30,41,59,0.4);
        }

        .nb-dropdown-name {
          font-size: 13px;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 2px;
        }

        .nb-dropdown-email {
          font-size: 11px;
          color: #475569;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nb-dropdown-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #ffff;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.18s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nb-dropdown-btn::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1E293B;
          flex-shrink: 0;
          transition: all 0.18s;
        }

        .nb-dropdown-btn:hover {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
        }

        .nb-dropdown-btn:hover::before {
          background: #3B82F6;
          box-shadow: 0 0 6px #3B82F6;
        }

        .nb-dropdown-btn.logout {
          color: #fff;
          border-top: 1px solid #1E293B;
        }

        .nb-dropdown-btn.logout:hover {
          color: #F87171;
          background: rgba(239,68,68,0.07);
        }

        .nb-dropdown-btn.logout:hover::before {
          background: #EF4444;
          box-shadow: 0 0 6px #EF4444;
        }

        .nb-hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          border: 1px solid #1E293B;
          background: rgba(15,23,42,0.8);
          transition: all 0.2s;
        }

        @media (min-width: 768px) { .nb-hamburger { display: none; } }

        .nb-hamburger:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.07);
        }

        .nb-hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #475569;
          border-radius: 2px;
          transition: all 0.25s;
        }

        .nb-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); background: #60A5FA; }
        .nb-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); background: #60A5FA; }

        .nb-mobile {
          display: block;
          background: rgba(6,9,18,0.98);
          border-top: 1px solid rgba(59,130,246,0.12);
          padding: 12px 20px 16px;
          animation: nb-mobile-in 0.22s ease both;
        }

        @media (min-width: 768px) { .nb-mobile { display: none; } }

        @keyframes nb-mobile-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nb-mobile-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          padding: 10px 12px;
          border-radius: 9px;
          border: 1px solid transparent;
          transition: all 0.18s;
          margin-bottom: 2px;
        }

        .nb-mobile-link::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1E293B;
          flex-shrink: 0;
          transition: background 0.18s;
        }

        .nb-mobile-link:hover, .nb-mobile-link.active {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.15);
        }

        .nb-mobile-link:hover::before, .nb-mobile-link.active::before {
          background: #3B82F6;
        }

        .nb-mobile-cta {
          width: 100%;
          margin-top: 10px;
          padding: 11px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          border: none;
          border-radius: 11px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
          letter-spacing: 0.01em;
        }

        @media (max-width: 767px) {
          .nb-inner {
            padding: 0 16px;
            height: 60px;
            gap: 12px;
          }

          .nb-links {
            display: none;
          }

          .nb-logo-name {
            font-size: 16px;
          }

          .nb-logo-sub {
            display: none;
          }

          .nb-right {
            gap: 8px;
          }

          .nb-admin-btn {
            display: flex !important;
            padding: 7px 10px;
            font-size: 11.5px;
          }

          .nb-cta {
            display: none !important;
          }

          .nb-avatar {
            width: 32px;
            height: 32px;
          }

          .nb-dropdown {
            width: 180px;
            right: -10px;
          }
        }
      `}),(0,A.jsxs)(`nav`,{className:`nb${l?` scrolled`:``}`,children:[(0,A.jsx)(`div`,{className:`nb-topline`}),(0,A.jsxs)(`div`,{className:`nb-inner`,children:[(0,A.jsxs)(`div`,{className:`nb-logo`,onClick:()=>e(`/`),children:[(0,A.jsx)(`div`,{className:`nb-logo-icon`,children:(0,A.jsx)(`svg`,{width:`20`,height:`20`,fill:`none`,viewBox:`0 0 24 24`,stroke:`white`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`})})}),(0,A.jsxs)(`div`,{className:`nb-logo-text`,children:[(0,A.jsxs)(`div`,{className:`nb-logo-name`,children:[`Med`,(0,A.jsx)(`span`,{children:`Care`})]}),(0,A.jsx)(`span`,{className:`nb-logo-sub`,children:`Smart Health Platform`})]})]}),(0,A.jsx)(`ul`,{className:`nb-links`,children:js.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsx)(jn,{to:e.to,className:({isActive:e})=>`nb-link${e?` active`:``}`,children:e.label})},e.to))}),(0,A.jsxs)(`div`,{className:`nb-right`,children:[t.pathname===`/`&&(0,A.jsxs)(`button`,{className:`nb-admin-btn`,onClick:()=>window.open(`http://localhost:5174/`,`_blank`),children:[(0,A.jsxs)(`svg`,{width:`12`,height:`12`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:[(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`}),(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15 12a3 3 0 11-6 0 3 3 0 016 0z`})]}),`Admin`]}),n&&i?(0,A.jsxs)(`div`,{className:`nb-avatar-wrap`,ref:d,children:[(0,A.jsx)(`img`,{src:i.image,className:`nb-avatar`,alt:`profile`,onClick:()=>c(!s)}),s&&(0,A.jsxs)(`div`,{className:`nb-dropdown`,children:[(0,A.jsxs)(`div`,{className:`nb-dropdown-header`,children:[(0,A.jsx)(`div`,{className:`nb-dropdown-name`,children:i.name||`User`}),(0,A.jsx)(`div`,{className:`nb-dropdown-email`,children:i.email})]}),(0,A.jsx)(`button`,{className:`nb-dropdown-btn`,onClick:()=>{e(`/my-profile`),c(!1)},children:`My Profile`}),(0,A.jsx)(`button`,{className:`nb-dropdown-btn`,onClick:()=>{e(`/my-appointments`),c(!1)},children:`My Appointments`}),(0,A.jsx)(`button`,{className:`nb-dropdown-btn logout`,onClick:()=>{localStorage.removeItem(`token`),r(``),c(!1),e(`/login`)},children:`Logout`})]})]}):(0,A.jsx)(`button`,{className:`nb-cta`,onClick:()=>e(`/login`),children:`Create Account`}),(0,A.jsxs)(`button`,{className:`nb-hamburger${a?` open`:``}`,onClick:()=>o(!a),"aria-label":`Toggle menu`,children:[(0,A.jsx)(`span`,{}),(0,A.jsx)(`span`,{}),(0,A.jsx)(`span`,{})]})]})]}),a&&(0,A.jsxs)(`div`,{className:`nb-mobile`,children:[js.map(e=>(0,A.jsx)(jn,{to:e.to,className:({isActive:e})=>`nb-mobile-link${e?` active`:``}`,onClick:()=>o(!1),children:e.label},e.to)),!n&&(0,A.jsx)(`button`,{className:`nb-mobile-cta`,onClick:()=>{e(`/login`),o(!1)},children:`Create Account`})]})]})]})},Ns=()=>{let e=dt();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Clash+Display:wght@600;700&display=swap');

        /* ── RESET & ROOT ── */
        .fr {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #060912;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        /* ── AMBIENT GLOW ORBS ── */
        .fr-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
          opacity: 0.18;
        }
        .fr-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #3B82F6, transparent 70%);
          top: -120px; left: -100px;
          animation: orb-drift 8s ease-in-out infinite alternate;
        }
        .fr-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #6366F1, transparent 70%);
          bottom: 0; right: -80px;
          animation: orb-drift 10s ease-in-out infinite alternate-reverse;
        }
        .fr-orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #06B6D4, transparent 70%);
          top: 50%; left: 45%;
          transform: translate(-50%, -50%);
          animation: orb-drift 12s ease-in-out infinite alternate;
        }
        @keyframes orb-drift {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(30px, 20px); }
        }

        /* ── GRID TEXTURE ── */
        .fr::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── TOP GLOW BORDER ── */
        .fr-topline {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(59,130,246,0.6) 30%,
            rgba(99,102,241,0.8) 50%,
            rgba(6,182,212,0.6) 70%,
            transparent 100%
          );
          box-shadow:
            0 0 20px rgba(99,102,241,0.5),
            0 0 60px rgba(59,130,246,0.25);
          position: relative; z-index: 2;
        }

        /* ── MAIN CONTENT ── */
        .fr-inner {
          position: relative; z-index: 2;
          padding: 56px 72px 0;
        }

        /* ── TOP SECTION ── */
        .fr-top {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1.2fr;
          gap: 56px;
          padding-bottom: 48px;
        }

        /* ── BRAND ── */
        .fr-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .fr-logo-icon {
          width: 46px; height: 46px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3B82F6 0%, #6366F1 100%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.4),
            0 0 24px rgba(99,102,241,0.35),
            0 0 48px rgba(59,130,246,0.15);
          transition: box-shadow 0.3s;
        }
        .fr-logo-icon:hover {
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.6),
            0 0 32px rgba(99,102,241,0.55),
            0 0 64px rgba(59,130,246,0.3);
        }
        .fr-logo-name {
          font-size: 22px; font-weight: 800;
          color: #fff; letter-spacing: -0.7px;
          line-height: 1;
        }
        .fr-logo-name span {
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .fr-logo-sub {
          font-size: 9px; font-weight: 500;
          letter-spacing: 2.8px; color: #334155;
          text-transform: uppercase; display: block; margin-top: 3px;
        }

        .fr-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px; font-weight: 500; color: #60A5FA;
          margin-bottom: 18px;
          transition: all 0.3s;
          cursor: default;
        }
        .fr-badge:hover {
          background: rgba(59,130,246,0.15);
          border-color: rgba(59,130,246,0.5);
          box-shadow: 0 0 20px rgba(59,130,246,0.2);
        }
        .fr-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #3B82F6;
          box-shadow: 0 0 8px #3B82F6;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #3B82F6; }
          50% { opacity: 0.5; box-shadow: 0 0 3px #3B82F6; }
        }

        .fr-desc {
          font-size: 13px; font-weight: 300;
          color: #475569; line-height: 1.85;
          max-width: 290px; margin-bottom: 28px;
        }

        /* ── SOCIALS ── */
        .fr-socials { display: flex; gap: 10px; }
        .fr-social {
          width: 38px; height: 38px;
          border-radius: 11px;
          border: 1px solid #1E293B;
          background: rgba(15,23,42,0.8);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
          color: #475569;
          position: relative;
          overflow: hidden;
        }
        .fr-social::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3B82F6, #6366F1);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .fr-social:hover::before { opacity: 1; }
        .fr-social:hover {
          border-color: transparent;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(99,102,241,0.4), 0 0 0 1px rgba(99,102,241,0.3);
        }
        .fr-social svg { position: relative; z-index: 1; }

        /* ── LINK COLUMNS ── */
        .fr-col-title {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #334155; margin-bottom: 22px;
          display: flex; align-items: center; gap: 8px;
        }
        .fr-col-title::after {
          content: '';
          flex: 1; height: 1px;
          background: linear-gradient(90deg, #1E293B, transparent);
        }

        .fr-links {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 4px;
        }
        .fr-links li {
          font-size: 13.5px; font-weight: 400;
          color: #475569; cursor: pointer;
          transition: all 0.2s;
          padding: 7px 10px;
          border-radius: 8px;
          display: flex; align-items: center; gap: 8px;
          border: 1px solid transparent;
          position: relative;
          user-select: none;
        }
        .fr-links li::before {
          content: '';
          width: 5px; height: 5px; border-radius: 50%;
          background: #1E293B; flex-shrink: 0;
          transition: all 0.2s;
          box-shadow: none;
        }
        .fr-links li:hover {
          color: #93C5FD;
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.15);
          box-shadow: 0 0 16px rgba(59,130,246,0.08) inset;
          transform: translateX(3px);
        }
        .fr-links li:hover::before {
          background: #3B82F6;
          box-shadow: 0 0 8px #3B82F6;
        }
        .fr-links li:active {
          background: rgba(59,130,246,0.15);
          border-color: rgba(59,130,246,0.35);
          box-shadow: 0 0 20px rgba(59,130,246,0.18) inset;
        }

        /* ── CONTACT ── */
        .fr-contact { display: flex; flex-direction: column; gap: 12px; }
        .fr-contact-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #1E293B;
          background: rgba(15,23,42,0.5);
          transition: all 0.25s;
          cursor: default;
        }
        .fr-contact-item:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.06);
          box-shadow:
            0 0 20px rgba(59,130,246,0.08) inset,
            0 4px 20px rgba(0,0,0,0.3);
          transform: translateY(-2px);
        }
        .fr-contact-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2));
          border: 1px solid rgba(59,130,246,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #60A5FA;
          box-shadow: 0 0 12px rgba(59,130,246,0.15);
        }
        .fr-contact-label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #334155; margin-bottom: 3px;
        }
        .fr-contact-val {
          font-size: 13px; color: #94A3B8; font-weight: 400;
        }

        /* ── DIVIDER ── */
        .fr-divider {
          height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(30,41,59,0.8) 20%,
            rgba(59,130,246,0.2) 50%,
            rgba(30,41,59,0.8) 80%,
            transparent
          );
          margin: 0 72px;
        }

        /* ── BOTTOM BAR ── */
        .fr-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 72px 24px;
          position: relative; z-index: 2;
        }
        .fr-copy {
          font-size: 12px; color: #1E293B; font-weight: 400;
          letter-spacing: 0.3px;
        }
        .fr-copy strong { color: #3B82F6; font-weight: 600; }
        .fr-bottom-links {
          display: flex; gap: 6px;
        }
        .fr-bottom-links a {
          font-size: 12px; color: #1E293B; text-decoration: none;
          transition: all 0.2s;
          padding: 5px 10px;
          border-radius: 6px;
          border: 1px solid transparent;
          user-select: none;
        }
        .fr-bottom-links a:hover {
          color: #60A5FA;
          border-color: rgba(59,130,246,0.2);
          background: rgba(59,130,246,0.07);
        }

        /* ── BOTTOM GLOW LINE ── */
        .fr-bottomline {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(99,102,241,0.4) 40%,
            rgba(59,130,246,0.6) 50%,
            rgba(99,102,241,0.4) 60%,
            transparent 100%
          );
          position: relative; z-index: 2;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .fr-top { grid-template-columns: 1fr 1fr; gap: 40px; }
          .fr-inner { padding: 48px 40px 0; }
          .fr-divider { margin: 0 40px; }
          .fr-bottom { padding: 20px 40px 24px; }
        }
        @media (max-width: 640px) {
          .fr-top { grid-template-columns: 1fr; gap: 32px; }
          .fr-inner { padding: 40px 24px 0; }
          .fr-divider { margin: 0 24px; }
          .fr-bottom { padding: 18px 24px 22px; flex-direction: column; gap: 14px; text-align: center; }
          .fr-bottom-links { flex-wrap: wrap; justify-content: center; }
        }
      `}),(0,A.jsxs)(`footer`,{className:`fr`,children:[(0,A.jsx)(`div`,{className:`fr-orb fr-orb-1`}),(0,A.jsx)(`div`,{className:`fr-orb fr-orb-2`}),(0,A.jsx)(`div`,{className:`fr-orb fr-orb-3`}),(0,A.jsx)(`div`,{className:`fr-topline`}),(0,A.jsx)(`div`,{className:`fr-inner`,children:(0,A.jsxs)(`div`,{className:`fr-top`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`fr-logo-row`,children:[(0,A.jsx)(`div`,{className:`fr-logo-icon`,children:(0,A.jsx)(`svg`,{width:`22`,height:`22`,fill:`none`,viewBox:`0 0 24 24`,stroke:`white`,strokeWidth:2.2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{className:`fr-logo-name`,children:[`Med`,(0,A.jsx)(`span`,{children:`Care`})]}),(0,A.jsx)(`span`,{className:`fr-logo-sub`,children:`Smart Health Platform`})]})]}),(0,A.jsxs)(`div`,{className:`fr-badge`,children:[(0,A.jsx)(`span`,{className:`fr-badge-dot`}),`Trusted by 50,000+ patients`]}),(0,A.jsx)(`p`,{className:`fr-desc`,children:`Effortless healthcare scheduling — book appointments with trusted doctors in seconds. Smart reminders, real-time updates, and seamless coordination built for modern healthcare.`}),(0,A.jsxs)(`div`,{className:`fr-socials`,children:[(0,A.jsx)(`button`,{className:`fr-social`,title:`Twitter`,onClick:()=>window.open(`https://x.com/SSeal83685`,`_blank`),children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`})})}),(0,A.jsx)(`button`,{className:`fr-social`,title:`LinkedIn`,onClick:()=>window.open(`https://www.linkedin.com/in/soumyadipta-seal-a6633a290/`,`_blank`),children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})})}),(0,A.jsx)(`button`,{className:`fr-social`,title:`Instagram`,onClick:()=>window.open(`https://www.instagram.com/its_me_soumyadipta_/`,`_blank`),children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z`})})}),(0,A.jsx)(`button`,{className:`fr-social`,title:`Facebook`,onClick:()=>window.open(`https://www.facebook.com/profile.php?id=100052492716921`,`_blank`),children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`currentColor`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{d:`M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z`})})})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`fr-col-title`,children:`Company`}),(0,A.jsxs)(`ul`,{className:`fr-links`,children:[(0,A.jsx)(`li`,{onClick:()=>e(`/`),children:`Home`}),(0,A.jsx)(`li`,{onClick:()=>e(`/about`),children:`About Us`}),(0,A.jsx)(`li`,{onClick:()=>e(`/doctors`),children:`All Doctors`}),(0,A.jsx)(`li`,{onClick:()=>e(`/contact`),children:`Contact Us`}),(0,A.jsx)(`li`,{children:`Privacy Policy`})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`fr-col-title`,children:`Services`}),(0,A.jsxs)(`ul`,{className:`fr-links`,children:[(0,A.jsx)(`li`,{children:`Book Appointment`}),(0,A.jsx)(`li`,{children:`Find Specialist`}),(0,A.jsx)(`li`,{children:`Health Records`}),(0,A.jsx)(`li`,{children:`Smart Reminders`}),(0,A.jsx)(`li`,{children:`Teleconsultation`})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`fr-col-title`,children:`Get in Touch`}),(0,A.jsxs)(`div`,{className:`fr-contact`,children:[(0,A.jsxs)(`div`,{className:`fr-contact-item`,children:[(0,A.jsx)(`div`,{className:`fr-contact-icon`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`fr-contact-label`,children:`Phone`}),(0,A.jsx)(`div`,{className:`fr-contact-val`,children:`+91-76879-67008`})]})]}),(0,A.jsxs)(`div`,{className:`fr-contact-item`,children:[(0,A.jsx)(`div`,{className:`fr-contact-icon`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`fr-contact-label`,children:`Email`}),(0,A.jsx)(`div`,{className:`fr-contact-val`,children:`soumyadiptaseal004@gmail.com`})]})]}),(0,A.jsxs)(`div`,{className:`fr-contact-item`,children:[(0,A.jsx)(`div`,{className:`fr-contact-icon`,children:(0,A.jsx)(`svg`,{width:`15`,height:`15`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,strokeWidth:2,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z`})})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`fr-contact-label`,children:`Support Hours`}),(0,A.jsx)(`div`,{className:`fr-contact-val`,children:`24 / 7 Always on`})]})]})]})]})]})}),(0,A.jsx)(`div`,{className:`fr-divider`}),(0,A.jsxs)(`div`,{className:`fr-bottom`,children:[(0,A.jsxs)(`p`,{className:`fr-copy`,children:[`© 2026 `,(0,A.jsx)(`strong`,{children:`MedCare`}),` — All Rights Reserved.`]}),(0,A.jsxs)(`div`,{className:`fr-bottom-links`,children:[(0,A.jsx)(`a`,{href:`#`,children:`Privacy Policy`}),(0,A.jsx)(`a`,{href:`#`,children:`Terms of Service`}),(0,A.jsx)(`a`,{href:`#`,children:`Cookie Policy`}),(0,A.jsx)(`a`,{href:`#`,children:`Sitemap`})]})]}),(0,A.jsx)(`div`,{className:`fr-bottomline`})]})]})};function Ps(){let e=ct(),t=[`/login`].includes(e.pathname);return(0,A.jsxs)(`div`,{className:`min-h-screen transition-colors duration-300`,children:[(0,A.jsx)(Ms,{}),(0,A.jsx)(`div`,{className:t?`w-full`:`mx-auto max-w-screen-2xl px-2 sm:px-8 lg:px-0`,children:(0,A.jsxs)(zt,{children:[(0,A.jsx)(Lt,{path:`/`,element:(0,A.jsx)(Wo,{})}),(0,A.jsx)(Lt,{path:`/doctors`,element:(0,A.jsx)(Yo,{})}),(0,A.jsx)(Lt,{path:`/doctors/:speciality`,element:(0,A.jsx)(Yo,{})}),(0,A.jsx)(Lt,{path:`/login`,element:(0,A.jsx)(Xo,{})}),(0,A.jsx)(Lt,{path:`/about`,element:(0,A.jsx)(Zo,{})}),(0,A.jsx)(Lt,{path:`/contact`,element:(0,A.jsx)(Qo,{})}),(0,A.jsx)(Lt,{path:`/my-profile`,element:(0,A.jsx)($o,{})}),(0,A.jsx)(Lt,{path:`/my-appointments`,element:(0,A.jsx)(Os,{})}),(0,A.jsx)(Lt,{path:`/appointment/:docId`,element:(0,A.jsx)(As,{})})]})}),(0,A.jsx)(Ns,{})]})}(0,y.createRoot)(document.getElementById(`root`)).render((0,A.jsx)(Dn,{children:(0,A.jsx)(Vo,{children:(0,A.jsx)(Ps,{})})}));