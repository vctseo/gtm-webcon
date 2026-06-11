function gv(i,r){for(var s=0;s<r.length;s++){const c=r[s];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in i)){const p=Object.getOwnPropertyDescriptor(c,u);p&&Object.defineProperty(i,u,p.get?p:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function s(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(u){if(u.ep)return;u.ep=!0;const p=s(u);fetch(u.href,p)}})();function ym(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var hd={exports:{}},Br={};var fg;function mv(){if(fg)return Br;fg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(c,u,p){var h=null;if(p!==void 0&&(h=""+p),u.key!==void 0&&(h=""+u.key),"key"in u){p={};for(var m in u)m!=="key"&&(p[m]=u[m])}else p=u;return u=p.ref,{$$typeof:i,type:c,key:h,ref:u!==void 0?u:null,props:p}}return Br.Fragment=r,Br.jsx=s,Br.jsxs=s,Br}var hg;function xv(){return hg||(hg=1,hd.exports=mv()),hd.exports}var l=xv(),gd={exports:{}},Hr={},md={exports:{}},xd={};var gg;function bv(){return gg||(gg=1,(function(i){function r(_,F){var Z=_.length;_.push(F);e:for(;0<Z;){var le=Z-1>>>1,w=_[le];if(0<u(w,F))_[le]=F,_[Z]=w,Z=le;else break e}}function s(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var F=_[0],Z=_.pop();if(Z!==F){_[0]=Z;e:for(var le=0,w=_.length,q=w>>>1;le<q;){var J=2*(le+1)-1,$=_[J],ae=J+1,pe=_[ae];if(0>u($,Z))ae<w&&0>u(pe,$)?(_[le]=pe,_[ae]=Z,le=ae):(_[le]=$,_[J]=Z,le=J);else if(ae<w&&0>u(pe,Z))_[le]=pe,_[ae]=Z,le=ae;else break e}}return F}function u(_,F){var Z=_.sortIndex-F.sortIndex;return Z!==0?Z:_.id-F.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var x=[],g=[],v=1,j=null,N=3,k=!1,O=!1,C=!1,T=!1,R=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(_){for(var F=s(g);F!==null;){if(F.callback===null)c(g);else if(F.startTime<=_)c(g),F.sortIndex=F.expirationTime,r(x,F);else break;F=s(g)}}function G(_){if(C=!1,U(_),!O)if(s(x)!==null)O=!0,I||(I=!0,ue());else{var F=s(g);F!==null&&ee(G,F.startTime-_)}}var I=!1,X=-1,P=5,te=-1;function ne(){return T?!0:!(i.unstable_now()-te<P)}function ce(){if(T=!1,I){var _=i.unstable_now();te=_;var F=!0;try{e:{O=!1,C&&(C=!1,A(X),X=-1),k=!0;var Z=N;try{t:{for(U(_),j=s(x);j!==null&&!(j.expirationTime>_&&ne());){var le=j.callback;if(typeof le=="function"){j.callback=null,N=j.priorityLevel;var w=le(j.expirationTime<=_);if(_=i.unstable_now(),typeof w=="function"){j.callback=w,U(_),F=!0;break t}j===s(x)&&c(x),U(_)}else c(x);j=s(x)}if(j!==null)F=!0;else{var q=s(g);q!==null&&ee(G,q.startTime-_),F=!1}}break e}finally{j=null,N=Z,k=!1}F=void 0}}finally{F?ue():I=!1}}}var ue;if(typeof L=="function")ue=function(){L(ce)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,V=xe.port2;xe.port1.onmessage=ce,ue=function(){V.postMessage(null)}}else ue=function(){R(ce,0)};function ee(_,F){X=R(function(){_(i.unstable_now())},F)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(_){_.callback=null},i.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<_?Math.floor(1e3/_):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_next=function(_){switch(N){case 1:case 2:case 3:var F=3;break;default:F=N}var Z=N;N=F;try{return _()}finally{N=Z}},i.unstable_requestPaint=function(){T=!0},i.unstable_runWithPriority=function(_,F){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var Z=N;N=_;try{return F()}finally{N=Z}},i.unstable_scheduleCallback=function(_,F,Z){var le=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?le+Z:le):Z=le,_){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=Z+w,_={id:v++,callback:F,priorityLevel:_,startTime:Z,expirationTime:w,sortIndex:-1},Z>le?(_.sortIndex=Z,r(g,_),s(x)===null&&_===s(g)&&(C?(A(X),X=-1):C=!0,ee(G,Z-le))):(_.sortIndex=w,r(x,_),O||k||(O=!0,I||(I=!0,ue()))),_},i.unstable_shouldYield=ne,i.unstable_wrapCallback=function(_){var F=N;return function(){var Z=N;N=F;try{return _.apply(this,arguments)}finally{N=Z}}}})(xd)),xd}var mg;function vv(){return mg||(mg=1,md.exports=bv()),md.exports}var bd={exports:{}},be={};var xg;function yv(){if(xg)return be;xg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),j=Symbol.iterator;function N(w){return w===null||typeof w!="object"?null:(w=j&&w[j]||w["@@iterator"],typeof w=="function"?w:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,C={};function T(w,q,J){this.props=w,this.context=q,this.refs=C,this.updater=J||k}T.prototype.isReactComponent={},T.prototype.setState=function(w,q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,q,"setState")},T.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function R(){}R.prototype=T.prototype;function A(w,q,J){this.props=w,this.context=q,this.refs=C,this.updater=J||k}var L=A.prototype=new R;L.constructor=A,O(L,T.prototype),L.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function X(w,q,J,$,ae,pe){return J=pe.ref,{$$typeof:i,type:w,key:q,ref:J!==void 0?J:null,props:pe}}function P(w,q){return X(w.type,q,void 0,void 0,void 0,w.props)}function te(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function ne(w){var q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(J){return q[J]})}var ce=/\/+/g;function ue(w,q){return typeof w=="object"&&w!==null&&w.key!=null?ne(""+w.key):q.toString(36)}function xe(){}function V(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(xe,xe):(w.status="pending",w.then(function(q){w.status==="pending"&&(w.status="fulfilled",w.value=q)},function(q){w.status==="pending"&&(w.status="rejected",w.reason=q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function ee(w,q,J,$,ae){var pe=typeof w;(pe==="undefined"||pe==="boolean")&&(w=null);var ie=!1;if(w===null)ie=!0;else switch(pe){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(w.$$typeof){case i:case r:ie=!0;break;case v:return ie=w._init,ee(ie(w._payload),q,J,$,ae)}}if(ie)return ae=ae(w),ie=$===""?"."+ue(w,0):$,U(ae)?(J="",ie!=null&&(J=ie.replace(ce,"$&/")+"/"),ee(ae,q,J,"",function(Te){return Te})):ae!=null&&(te(ae)&&(ae=P(ae,J+(ae.key==null||w&&w.key===ae.key?"":(""+ae.key).replace(ce,"$&/")+"/")+ie)),q.push(ae)),1;ie=0;var He=$===""?".":$+":";if(U(w))for(var Ce=0;Ce<w.length;Ce++)$=w[Ce],pe=He+ue($,Ce),ie+=ee($,q,J,pe,ae);else if(Ce=N(w),typeof Ce=="function")for(w=Ce.call(w),Ce=0;!($=w.next()).done;)$=$.value,pe=He+ue($,Ce++),ie+=ee($,q,J,pe,ae);else if(pe==="object"){if(typeof w.then=="function")return ee(V(w),q,J,$,ae);throw q=String(w),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function _(w,q,J){if(w==null)return w;var $=[],ae=0;return ee(w,$,"","",function(pe){return q.call(J,pe,ae++)}),$}function F(w){if(w._status===-1){var q=w._result;q=q(),q.then(function(J){(w._status===0||w._status===-1)&&(w._status=1,w._result=J)},function(J){(w._status===0||w._status===-1)&&(w._status=2,w._result=J)}),w._status===-1&&(w._status=0,w._result=q)}if(w._status===1)return w._result.default;throw w._result}var Z=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function le(){}return be.Children={map:_,forEach:function(w,q,J){_(w,function(){q.apply(this,arguments)},J)},count:function(w){var q=0;return _(w,function(){q++}),q},toArray:function(w){return _(w,function(q){return q})||[]},only:function(w){if(!te(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},be.Component=T,be.Fragment=s,be.Profiler=u,be.PureComponent=A,be.StrictMode=c,be.Suspense=x,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,be.__COMPILER_RUNTIME={__proto__:null,c:function(w){return G.H.useMemoCache(w)}},be.cache=function(w){return function(){return w.apply(null,arguments)}},be.cloneElement=function(w,q,J){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var $=O({},w.props),ae=w.key,pe=void 0;if(q!=null)for(ie in q.ref!==void 0&&(pe=void 0),q.key!==void 0&&(ae=""+q.key),q)!I.call(q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&q.ref===void 0||($[ie]=q[ie]);var ie=arguments.length-2;if(ie===1)$.children=J;else if(1<ie){for(var He=Array(ie),Ce=0;Ce<ie;Ce++)He[Ce]=arguments[Ce+2];$.children=He}return X(w.type,ae,void 0,void 0,pe,$)},be.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:p,_context:w},w},be.createElement=function(w,q,J){var $,ae={},pe=null;if(q!=null)for($ in q.key!==void 0&&(pe=""+q.key),q)I.call(q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ae[$]=q[$]);var ie=arguments.length-2;if(ie===1)ae.children=J;else if(1<ie){for(var He=Array(ie),Ce=0;Ce<ie;Ce++)He[Ce]=arguments[Ce+2];ae.children=He}if(w&&w.defaultProps)for($ in ie=w.defaultProps,ie)ae[$]===void 0&&(ae[$]=ie[$]);return X(w,pe,void 0,void 0,null,ae)},be.createRef=function(){return{current:null}},be.forwardRef=function(w){return{$$typeof:m,render:w}},be.isValidElement=te,be.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:F}},be.memo=function(w,q){return{$$typeof:g,type:w,compare:q===void 0?null:q}},be.startTransition=function(w){var q=G.T,J={};G.T=J;try{var $=w(),ae=G.S;ae!==null&&ae(J,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(le,Z)}catch(pe){Z(pe)}finally{G.T=q}},be.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},be.use=function(w){return G.H.use(w)},be.useActionState=function(w,q,J){return G.H.useActionState(w,q,J)},be.useCallback=function(w,q){return G.H.useCallback(w,q)},be.useContext=function(w){return G.H.useContext(w)},be.useDebugValue=function(){},be.useDeferredValue=function(w,q){return G.H.useDeferredValue(w,q)},be.useEffect=function(w,q,J){var $=G.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(w,q)},be.useId=function(){return G.H.useId()},be.useImperativeHandle=function(w,q,J){return G.H.useImperativeHandle(w,q,J)},be.useInsertionEffect=function(w,q){return G.H.useInsertionEffect(w,q)},be.useLayoutEffect=function(w,q){return G.H.useLayoutEffect(w,q)},be.useMemo=function(w,q){return G.H.useMemo(w,q)},be.useOptimistic=function(w,q){return G.H.useOptimistic(w,q)},be.useReducer=function(w,q,J){return G.H.useReducer(w,q,J)},be.useRef=function(w){return G.H.useRef(w)},be.useState=function(w){return G.H.useState(w)},be.useSyncExternalStore=function(w,q,J){return G.H.useSyncExternalStore(w,q,J)},be.useTransition=function(){return G.H.useTransition()},be.version="19.1.0",be}var bg;function Ls(){return bg||(bg=1,bd.exports=yv()),bd.exports}var vd={exports:{}},bt={};var vg;function wv(){if(vg)return bt;vg=1;var i=Ls();function r(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function p(x,g,v){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:j==null?null:""+j,children:x,containerInfo:g,implementation:v}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,bt.createPortal=function(x,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return p(x,g,null,v)},bt.flushSync=function(x){var g=h.T,v=c.p;try{if(h.T=null,c.p=2,x)return x()}finally{h.T=g,c.p=v,c.d.f()}},bt.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(x,g))},bt.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},bt.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var v=g.as,j=m(v,g.crossOrigin),N=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?c.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:N,fetchPriority:k}):v==="script"&&c.d.X(x,{crossOrigin:j,integrity:N,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},bt.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);c.d.M(x,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(x)},bt.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,j=m(v,g.crossOrigin);c.d.L(x,v,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},bt.preloadModule=function(x,g){if(typeof x=="string")if(g){var v=m(g.as,g.crossOrigin);c.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(x)},bt.requestFormReset=function(x){c.d.r(x)},bt.unstable_batchedUpdates=function(x,g){return x(g)},bt.useFormState=function(x,g,v){return h.H.useFormState(x,g,v)},bt.useFormStatus=function(){return h.H.useHostTransitionStatus()},bt.version="19.1.0",bt}var yg;function wm(){if(yg)return vd.exports;yg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),vd.exports=wv(),vd.exports}var wg;function jv(){if(wg)return Hr;wg=1;var i=vv(),r=Ls(),s=wm();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(p(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var d=o.alternate;if(d===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===d.child){for(d=o.child;d;){if(d===n)return m(o),e;if(d===a)return m(o),t;d=d.sibling}throw Error(c(188))}if(n.return!==a.return)n=o,a=d;else{for(var f=!1,b=o.child;b;){if(b===n){f=!0,n=o,a=d;break}if(b===a){f=!0,a=o,n=d;break}b=b.sibling}if(!f){for(b=d.child;b;){if(b===n){f=!0,n=d,a=o;break}if(b===a){f=!0,a=d,n=o;break}b=b.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,j=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function V(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case T:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case L:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:V(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return V(e(t))}catch{}}return null}var ee=Array.isArray,_=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},le=[],w=-1;function q(e){return{current:e}}function J(e){0>w||(e.current=le[w],le[w]=null,w--)}function $(e,t){w++,le[w]=e.current,e.current=t}var ae=q(null),pe=q(null),ie=q(null),He=q(null);function Ce(e,t){switch($(ie,t),$(pe,e),$(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gh(t),e=Ph(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(ae),$(ae,e)}function Te(){J(ae),J(pe),J(ie)}function Pt(e){e.memoizedState!==null&&$(He,e);var t=ae.current,n=Ph(t,e.type);t!==n&&($(pe,e),$(ae,n))}function pt(e){pe.current===e&&(J(ae),J(pe)),He.current===e&&(J(He),Mr._currentValue=Z)}var qt=Object.prototype.hasOwnProperty,yt=i.unstable_scheduleCallback,$t=i.unstable_cancelCallback,eo=i.unstable_shouldYield,bn=i.unstable_requestPaint,_t=i.unstable_now,nl=i.unstable_getCurrentPriorityLevel,W=i.unstable_ImmediatePriority,fe=i.unstable_UserBlockingPriority,Me=i.unstable_NormalPriority,Ot=i.unstable_LowPriority,vn=i.unstable_IdlePriority,Vi=i.log,Yi=i.unstable_setDisableYieldValue,Mt=null,nt=null;function Ze(e){if(typeof Vi=="function"&&Yi(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Mt,e)}catch{}}var Je=Math.clz32?Math.clz32:t1,$x=Math.log,e1=Math.LN2;function t1(e){return e>>>=0,e===0?32:31-($x(e)/e1|0)|0}var to=256,no=4194304;function yi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function io(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,d=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var b=a&134217727;return b!==0?(a=b&~d,a!==0?o=yi(a):(f&=b,f!==0?o=yi(f):n||(n=b&~e,n!==0&&(o=yi(n))))):(b=a&~d,b!==0?o=yi(b):f!==0?o=yi(f):n||(n=a&~e,n!==0&&(o=yi(n)))),o===0?0:t!==0&&t!==o&&(t&d)===0&&(d=o&-o,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:o}function Ga(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function n1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Su(){var e=to;return to<<=1,(to&4194048)===0&&(to=256),e}function Nu(){var e=no;return no<<=1,(no&62914560)===0&&(no=4194304),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function i1(e,t,n,a,o,d){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,S=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var Y=31-Je(n),Q=1<<Y;b[Y]=0,S[Y]=-1;var B=z[Y];if(B!==null)for(z[Y]=null,Y=0;Y<B.length;Y++){var H=B[Y];H!==null&&(H.lane&=-536870913)}n&=~Q}a!==0&&ku(e,a,0),d!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=d&~(f&~t))}function ku(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Je(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Je(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function al(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tu(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:sg(e.type))}function a1(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Pn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Pn,St="__reactProps$"+Pn,Ki="__reactContainer$"+Pn,ol="__reactEvents$"+Pn,r1="__reactListeners$"+Pn,o1="__reactHandles$"+Pn,Cu="__reactResources$"+Pn,qa="__reactMarker$"+Pn;function sl(e){delete e[mt],delete e[St],delete e[ol],delete e[r1],delete e[o1]}function Fi(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ki]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kh(e);e!==null;){if(n=e[mt])return n;e=Kh(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){if(e=e[mt]||e[Ki]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Va(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Qi(e){var t=e[Cu];return t||(t=e[Cu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[qa]=!0}var Au=new Set,_u={};function wi(e,t){Zi(e,t),Zi(e+"Capture",t)}function Zi(e,t){for(_u[e]=t,e=0;e<t.length;e++)Au.add(t[e])}var s1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ou={},Mu={};function l1(e){return qt.call(Mu,e)?!0:qt.call(Ou,e)?!1:s1.test(e)?Mu[e]=!0:(Ou[e]=!0,!1)}function ao(e,t,n){if(l1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ro(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function yn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var ll,Du;function Ji(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||"",Du=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ll+e+Du}var cl=!1;function dl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(H){var B=H}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(H){B=H}e.call(Q.prototype)}}else{try{throw Error()}catch(H){B=H}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(H){if(H&&B&&typeof H.stack=="string")return[H.stack,B.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=a.DetermineComponentFrameRoot(),f=d[0],b=d[1];if(f&&b){var S=f.split(`
`),z=b.split(`
`);for(o=a=0;a<S.length&&!S[a].includes("DetermineComponentFrameRoot");)a++;for(;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;if(a===S.length||o===z.length)for(a=S.length-1,o=z.length-1;1<=a&&0<=o&&S[a]!==z[o];)o--;for(;1<=a&&0<=o;a--,o--)if(S[a]!==z[o]){if(a!==1||o!==1)do if(a--,o--,0>o||S[a]!==z[o]){var Y=`
`+S[a].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=a&&0<=o);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ji(n):""}function c1(e){switch(e.tag){case 26:case 27:case 5:return Ji(e.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 15:return dl(e.type,!1);case 11:return dl(e.type.render,!1);case 1:return dl(e.type,!0);case 31:return Ji("Activity");default:return""}}function zu(e){try{var t="";do t+=c1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function d1(e){var t=Ru(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(f){a=""+f,d.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=d1(e))}function Lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ru(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var u1=/[\n"\\]/g;function Yt(e){return e.replace(u1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ul(e,t,n,a,o,d,f,b){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?pl(e,f,Vt(t)):n!=null?pl(e,f,Vt(n)):a!=null&&e.removeAttribute("value"),o==null&&d!=null&&(e.defaultChecked=!!d),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Vt(b):e.removeAttribute("name")}function Bu(e,t,n,a,o,d,f,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null))return;n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=b?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function pl(e,t,n){t==="number"&&so(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wi(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hu(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Iu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(ee(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function $i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var p1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||p1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Gu(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Uu(e,o,a)}else for(var d in t)t.hasOwnProperty(d)&&Uu(e,d,t[d])}function fl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lo(e){return h1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var hl=null;function gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,ta=null;function Pu(e){var t=Xi(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(ul(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[St]||null;if(!o)throw Error(c(90));ul(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Lu(a)}break e;case"textarea":Hu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Wi(e,!!n.multiple,t,!1)}}}var ml=!1;function qu(e,t,n){if(ml)return e(t,n);ml=!0;try{var a=e(t);return a}finally{if(ml=!1,(ea!==null||ta!==null)&&(Xo(),ea&&(t=ea,e=ta,ta=ea=null,Pu(t),e)))for(t=0;t<e.length;t++)Pu(e[t])}}function Ya(e,t){var n=e.stateNode;if(n===null)return null;var a=n[St]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=!1;if(wn)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){xl=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{xl=!1}var qn=null,bl=null,co=null;function Vu(){if(co)return co;var e,t=bl,n=t.length,a,o="value"in qn?qn.value:qn.textContent,d=o.length;for(e=0;e<n&&t[e]===o[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===o[d-a];a++);return co=o.slice(e,1<a?1-a:void 0)}function uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Yu(){return!1}function Nt(e){function t(n,a,o,d,f){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=d,this.target=f,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?po:Yu,this.isPropagationStopped=Yu,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=Nt(ji),Fa=v({},ji,{view:0,detail:0}),g1=Nt(Fa),vl,yl,Xa,ho=v({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xa&&(Xa&&e.type==="mousemove"?(vl=e.screenX-Xa.screenX,yl=e.screenY-Xa.screenY):yl=vl=0,Xa=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:yl}}),Ku=Nt(ho),m1=v({},ho,{dataTransfer:0}),x1=Nt(m1),b1=v({},Fa,{relatedTarget:0}),wl=Nt(b1),v1=v({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=Nt(v1),w1=v({},ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j1=Nt(w1),S1=v({},ji,{data:0}),Fu=Nt(S1),N1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E1[e])?!!t[e]:!1}function jl(){return T1}var C1=v({},Fa,{key:function(e){if(e.key){var t=N1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A1=Nt(C1),_1=v({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Nt(_1),O1=v({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),M1=Nt(O1),D1=v({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=Nt(D1),R1=v({},ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L1=Nt(R1),B1=v({},ji,{newState:0,oldState:0}),H1=Nt(B1),I1=[9,13,27,32],Sl=wn&&"CompositionEvent"in window,Qa=null;wn&&"documentMode"in document&&(Qa=document.documentMode);var U1=wn&&"TextEvent"in window&&!Qa,Qu=wn&&(!Sl||Qa&&8<Qa&&11>=Qa),Zu=" ",Ju=!1;function Wu(e,t){switch(e){case"keyup":return I1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var na=!1;function G1(e,t){switch(e){case"compositionend":return $u(t);case"keypress":return t.which!==32?null:(Ju=!0,Zu);case"textInput":return e=t.data,e===Zu&&Ju?null:e;default:return null}}function P1(e,t){if(na)return e==="compositionend"||!Sl&&Wu(e,t)?(e=Vu(),co=bl=qn=null,na=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;default:return null}}var q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!q1[e.type]:t==="textarea"}function tp(e,t,n,a){ea?ta?ta.push(a):ta=[a]:ea=a,t=es(t,"onChange"),0<t.length&&(n=new fo("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Za=null,Ja=null;function V1(e){Lh(e,0)}function go(e){var t=Va(e);if(Lu(t))return e}function np(e,t){if(e==="change")return t}var ip=!1;if(wn){var Nl;if(wn){var kl="oninput"in document;if(!kl){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),kl=typeof ap.oninput=="function"}Nl=kl}else Nl=!1;ip=Nl&&(!document.documentMode||9<document.documentMode)}function rp(){Za&&(Za.detachEvent("onpropertychange",op),Ja=Za=null)}function op(e){if(e.propertyName==="value"&&go(Ja)){var t=[];tp(t,Ja,e,gl(e)),qu(V1,t)}}function Y1(e,t,n){e==="focusin"?(rp(),Za=t,Ja=n,Za.attachEvent("onpropertychange",op)):e==="focusout"&&rp()}function K1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(Ja)}function F1(e,t){if(e==="click")return go(t)}function X1(e,t){if(e==="input"||e==="change")return go(t)}function Q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Q1;function Wa(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!qt.call(t,o)||!Dt(e[o],t[o]))return!1}return!0}function sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,t){var n=sp(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sp(n)}}function cp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=so(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function El(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Z1=wn&&"documentMode"in document&&11>=document.documentMode,ia=null,Tl=null,$a=null,Cl=!1;function up(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cl||ia==null||ia!==so(a)||(a=ia,"selectionStart"in a&&El(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$a&&Wa($a,a)||($a=a,a=es(Tl,"onSelect"),0<a.length&&(t=new fo("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ia)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var aa={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionrun:Si("Transition","TransitionRun"),transitionstart:Si("Transition","TransitionStart"),transitioncancel:Si("Transition","TransitionCancel"),transitionend:Si("Transition","TransitionEnd")},Al={},pp={};wn&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function Ni(e){if(Al[e])return Al[e];if(!aa[e])return e;var t=aa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pp)return Al[e]=t[n];return e}var fp=Ni("animationend"),hp=Ni("animationiteration"),gp=Ni("animationstart"),J1=Ni("transitionrun"),W1=Ni("transitionstart"),$1=Ni("transitioncancel"),mp=Ni("transitionend"),xp=new Map,_l="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_l.push("scrollEnd");function en(e,t){xp.set(e,t),wi(t,[e])}var bp=new WeakMap;function Kt(e,t){if(typeof e=="object"&&e!==null){var n=bp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:zu(t)},bp.set(e,t),t)}return{value:e,source:t,stack:zu(t)}}var Ft=[],ra=0,Ol=0;function mo(){for(var e=ra,t=Ol=ra=0;t<e;){var n=Ft[t];Ft[t++]=null;var a=Ft[t];Ft[t++]=null;var o=Ft[t];Ft[t++]=null;var d=Ft[t];if(Ft[t++]=null,a!==null&&o!==null){var f=a.pending;f===null?o.next=o:(o.next=f.next,f.next=o),a.pending=o}d!==0&&vp(n,o,d)}}function xo(e,t,n,a){Ft[ra++]=e,Ft[ra++]=t,Ft[ra++]=n,Ft[ra++]=a,Ol|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ml(e,t,n,a){return xo(e,t,n,a),bo(e)}function oa(e,t){return xo(e,null,null,t),bo(e)}function vp(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,d=e.return;d!==null;)d.childLanes|=n,a=d.alternate,a!==null&&(a.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(o=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,o&&t!==null&&(o=31-Je(n),e=d.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),d):null}function bo(e){if(50<Nr)throw Nr=0,Hc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sa={};function eb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new eb(e,t,n,a)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vo(e,t,n,a,o,d){var f=0;if(a=e,typeof e=="function")Dl(e)&&(f=1);else if(typeof e=="string")f=nv(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=zt(31,n,t,o),e.elementType=te,e.lanes=d,e;case O:return ki(n.children,o,d,t);case C:f=8,o|=24;break;case T:return e=zt(12,n,t,o|2),e.elementType=T,e.lanes=d,e;case G:return e=zt(13,n,t,o),e.elementType=G,e.lanes=d,e;case I:return e=zt(19,n,t,o),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:case L:f=10;break e;case A:f=9;break e;case U:f=11;break e;case X:f=14;break e;case P:f=16,a=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=zt(f,n,t,o),t.elementType=e,t.type=a,t.lanes=d,t}function ki(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function zl(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Rl(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var la=[],ca=0,yo=null,wo=0,Xt=[],Qt=0,Ei=null,Sn=1,Nn="";function Ti(e,t){la[ca++]=wo,la[ca++]=yo,yo=e,wo=t}function wp(e,t,n){Xt[Qt++]=Sn,Xt[Qt++]=Nn,Xt[Qt++]=Ei,Ei=e;var a=Sn;e=Nn;var o=32-Je(a)-1;a&=~(1<<o),n+=1;var d=32-Je(t)+o;if(30<d){var f=o-o%5;d=(a&(1<<f)-1).toString(32),a>>=f,o-=f,Sn=1<<32-Je(t)+o|n<<o|a,Nn=d+e}else Sn=1<<d|n<<o|a,Nn=e}function Ll(e){e.return!==null&&(Ti(e,1),wp(e,1,0))}function Bl(e){for(;e===yo;)yo=la[--ca],la[ca]=null,wo=la[--ca],la[ca]=null;for(;e===Ei;)Ei=Xt[--Qt],Xt[Qt]=null,Nn=Xt[--Qt],Xt[Qt]=null,Sn=Xt[--Qt],Xt[Qt]=null}var wt=null,Ke=null,_e=!1,Ci=null,dn=!1,Hl=Error(c(519));function Ai(e){var t=Error(c(418,""));throw nr(Kt(t,e)),Hl}function jp(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[mt]=e,t[St]=a,n){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(n=0;n<Er.length;n++)Ne(Er[n],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),Bu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),oo(t);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Iu(t,a.value,a.defaultValue,a.children),oo(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Uh(t.textContent,n)?(a.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),a.onScroll!=null&&Ne("scroll",t),a.onScrollEnd!=null&&Ne("scrollend",t),a.onClick!=null&&(t.onclick=ts),t=!0):t=!1,t||Ai(e)}function Sp(e){for(wt=e.return;wt;)switch(wt.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:wt=wt.return}}function er(e){if(e!==wt)return!1;if(!_e)return Sp(e),_e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ed(e.type,e.memoizedProps)),n=!n),n&&Ke&&Ai(e),Sp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ke=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ke=null}}else t===27?(t=Ke,ri(e.type)?(e=ad,ad=null,Ke=e):Ke=t):Ke=wt?nn(e.stateNode.nextSibling):null;return!0}function tr(){Ke=wt=null,_e=!1}function Np(){var e=Ci;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),Ci=null),e}function nr(e){Ci===null?Ci=[e]:Ci.push(e)}var Il=q(null),_i=null,kn=null;function Vn(e,t,n){$(Il,t._currentValue),t._currentValue=n}function En(e){e._currentValue=Il.current,J(Il)}function Ul(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Gl(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var d=o.dependencies;if(d!==null){var f=o.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=o;for(var S=0;S<t.length;S++)if(b.context===t[S]){d.lanes|=n,b=d.alternate,b!==null&&(b.lanes|=n),Ul(d.return,n,e),a||(f=null);break e}d=b.next}}else if(o.tag===18){if(f=o.return,f===null)throw Error(c(341));f.lanes|=n,d=f.alternate,d!==null&&(d.lanes|=n),Ul(f,n,e),f=null}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===e){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}}function ir(e,t,n,a){e=null;for(var o=t,d=!1;o!==null;){if(!d){if((o.flags&524288)!==0)d=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var f=o.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var b=o.type;Dt(o.pendingProps.value,f.value)||(e!==null?e.push(b):e=[b])}}else if(o===He.current){if(f=o.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Mr):e=[Mr])}o=o.return}e!==null&&Gl(t,e,n,a),t.flags|=262144}function jo(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oi(e){_i=e,kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xt(e){return kp(_i,e)}function So(e,t){return _i===null&&Oi(e),kp(e,t)}function kp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},kn===null){if(e===null)throw Error(c(308));kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else kn=kn.next=t;return n}var tb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},nb=i.unstable_scheduleCallback,ib=i.unstable_NormalPriority,rt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pl(){return{controller:new tb,data:new Map,refCount:0}}function ar(e){e.refCount--,e.refCount===0&&nb(ib,function(){e.controller.abort()})}var rr=null,ql=0,da=0,ua=null;function ab(e,t){if(rr===null){var n=rr=[];ql=0,da=Yc(),ua={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ql++,t.then(Ep,Ep),t}function Ep(){if(--ql===0&&rr!==null){ua!==null&&(ua.status="fulfilled");var e=rr;rr=null,da=0,ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rb(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Tp=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&ab(e,t),Tp!==null&&Tp(e,t)};var Mi=q(null);function Vl(){var e=Mi.current;return e!==null?e:Ue.pooledCache}function No(e,t){t===null?$(Mi,Mi.current):$(Mi,t.pool)}function Cp(){var e=Vl();return e===null?null:{parent:rt._currentValue,pool:e}}var or=Error(c(460)),Ap=Error(c(474)),ko=Error(c(542)),Yl={then:function(){}};function _p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Eo(){}function Op(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Eo,Eo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dp(e),e;default:if(typeof t.status=="string")t.then(Eo,Eo);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dp(e),e}throw sr=t,or}}var sr=null;function Mp(){if(sr===null)throw Error(c(459));var e=sr;return sr=null,e}function Dp(e){if(e===or||e===ko)throw Error(c(483))}var Yn=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(De&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=bo(e),vp(e,null,n),t}return xo(e,a,t,n),bo(e)}function lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Eu(e,n)}}function Xl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?o=d=f:d=d.next=f,n=n.next}while(n!==null);d===null?o=d=t:d=d.next=t}else o=d=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:d,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ql=!1;function cr(){if(Ql){var e=ua;if(e!==null)throw e}}function dr(e,t,n,a){Ql=!1;var o=e.updateQueue;Yn=!1;var d=o.firstBaseUpdate,f=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var S=b,z=S.next;S.next=null,f===null?d=z:f.next=z,f=S;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,b=Y.lastBaseUpdate,b!==f&&(b===null?Y.firstBaseUpdate=z:b.next=z,Y.lastBaseUpdate=S))}if(d!==null){var Q=o.baseState;f=0,Y=z=S=null,b=d;do{var B=b.lane&-536870913,H=B!==b.lane;if(H?(ke&B)===B:(a&B)===B){B!==0&&B===da&&(Ql=!0),Y!==null&&(Y=Y.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var me=e,he=b;B=t;var Be=n;switch(he.tag){case 1:if(me=he.payload,typeof me=="function"){Q=me.call(Be,Q,B);break e}Q=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=he.payload,B=typeof me=="function"?me.call(Be,Q,B):me,B==null)break e;Q=v({},Q,B);break e;case 2:Yn=!0}}B=b.callback,B!==null&&(e.flags|=64,H&&(e.flags|=8192),H=o.callbacks,H===null?o.callbacks=[B]:H.push(B))}else H={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Y===null?(z=Y=H,S=Q):Y=Y.next=H,f|=B;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;H=b,b=H.next,H.next=null,o.lastBaseUpdate=H,o.shared.pending=null}}while(!0);Y===null&&(S=Q),o.baseState=S,o.firstBaseUpdate=z,o.lastBaseUpdate=Y,d===null&&(o.shared.lanes=0),ti|=f,e.lanes=f,e.memoizedState=Q}}function zp(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Rp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)zp(n[e],t)}var pa=q(null),To=q(0);function Lp(e,t){e=Dn,$(To,e),$(pa,t),Dn=e|t.baseLanes}function Zl(){$(To,Dn),$(pa,pa.current)}function Jl(){Dn=To.current,J(pa),J(To)}var Xn=0,ye=null,Re=null,it=null,Co=!1,fa=!1,Di=!1,Ao=0,ur=0,ha=null,ob=0;function We(){throw Error(c(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function $l(e,t,n,a,o,d){return Xn=d,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?yf:wf,Di=!1,d=n(a,o),Di=!1,fa&&(d=Hp(t,n,a,o)),Bp(e),d}function Bp(e){_.H=Ro;var t=Re!==null&&Re.next!==null;if(Xn=0,it=Re=ye=null,Co=!1,ur=0,ha=null,t)throw Error(c(300));e===null||ct||(e=e.dependencies,e!==null&&jo(e)&&(ct=!0))}function Hp(e,t,n,a){ye=e;var o=0;do{if(fa&&(ha=null),ur=0,fa=!1,25<=o)throw Error(c(301));if(o+=1,it=Re=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}_.H=fb,d=t(n,a)}while(fa);return d}function sb(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?pr(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(ye.flags|=1024),t}function ec(){var e=Ao!==0;return Ao=0,e}function tc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function nc(e){if(Co){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Co=!1}Xn=0,it=Re=ye=null,fa=!1,ur=Ao=0,ha=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?ye.memoizedState=it=e:it=it.next=e,it}function at(){if(Re===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=it===null?ye.memoizedState:it.next;if(t!==null)it=t,Re=e;else{if(e===null)throw ye.alternate===null?Error(c(467)):Error(c(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},it===null?ye.memoizedState=it=e:it=it.next=e}return it}function ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pr(e){var t=ur;return ur+=1,ha===null&&(ha=[]),e=Op(ha,e,t),t=ye,(it===null?t.memoizedState:it.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?yf:wf),e}function _o(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pr(e);if(e.$$typeof===L)return xt(e)}throw Error(c(438,String(e)))}function ac(e){var t=null,n=ye.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ye.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ic(),ye.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ne;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function Oo(e){var t=at();return rc(t,Re,e)}function rc(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var o=e.baseQueue,d=a.pending;if(d!==null){if(o!==null){var f=o.next;o.next=d.next,d.next=f}t.baseQueue=o=d,a.pending=null}if(d=e.baseState,o===null)e.memoizedState=d;else{t=o.next;var b=f=null,S=null,z=t,Y=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(ke&Q)===Q:(Xn&Q)===Q){var B=z.revertLane;if(B===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===da&&(Y=!0);else if((Xn&B)===B){z=z.next,B===da&&(Y=!0);continue}else Q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(b=S=Q,f=d):S=S.next=Q,ye.lanes|=B,ti|=B;Q=z.action,Di&&n(d,Q),d=z.hasEagerState?z.eagerState:n(d,Q)}else B={lane:Q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(b=S=B,f=d):S=S.next=B,ye.lanes|=Q,ti|=Q;z=z.next}while(z!==null&&z!==t);if(S===null?f=d:S.next=b,!Dt(d,e.memoizedState)&&(ct=!0,Y&&(n=ua,n!==null)))throw n;e.memoizedState=d,e.baseState=f,e.baseQueue=S,a.lastRenderedState=d}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function oc(e){var t=at(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,d=t.memoizedState;if(o!==null){n.pending=null;var f=o=o.next;do d=e(d,f.action),f=f.next;while(f!==o);Dt(d,t.memoizedState)||(ct=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,a]}function Ip(e,t,n){var a=ye,o=at(),d=_e;if(d){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!Dt((Re||o).memoizedState,n);f&&(o.memoizedState=n,ct=!0),o=o.queue;var b=Pp.bind(null,a,o,e);if(fr(2048,8,b,[e]),o.getSnapshot!==t||f||it!==null&&it.memoizedState.tag&1){if(a.flags|=2048,ga(9,Mo(),Gp.bind(null,a,o,n,t),null),Ue===null)throw Error(c(349));d||(Xn&124)!==0||Up(a,t,n)}return n}function Up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t=ic(),ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gp(e,t,n,a){t.value=n,t.getSnapshot=a,qp(t)&&Vp(e)}function Pp(e,t,n){return n(function(){qp(t)&&Vp(e)})}function qp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Vp(e){var t=oa(e,2);t!==null&&It(t,e,2)}function sc(e){var t=kt();if(typeof e=="function"){var n=e;if(e=n(),Di){Ze(!0);try{n()}finally{Ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function Yp(e,t,n,a){return e.baseState=n,rc(e,Re,typeof a=="function"?a:Tn)}function lb(e,t,n,a,o){if(zo(e))throw Error(c(485));if(e=t.action,e!==null){var d={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){d.listeners.push(f)}};_.T!==null?n(!0):d.isTransition=!1,a(d),n=t.pending,n===null?(d.next=t.pending=d,Kp(t,d)):(d.next=n.next,t.pending=n.next=d)}}function Kp(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var d=_.T,f={};_.T=f;try{var b=n(o,a),S=_.S;S!==null&&S(f,b),Fp(e,t,b)}catch(z){lc(e,t,z)}finally{_.T=d}}else try{d=n(o,a),Fp(e,t,d)}catch(z){lc(e,t,z)}}function Fp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Xp(e,t,a)},function(a){return lc(e,t,a)}):Xp(e,t,n)}function Xp(e,t,n){t.status="fulfilled",t.value=n,Qp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Kp(e,n)))}function lc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Qp(t),t=t.next;while(t!==a)}e.action=null}function Qp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zp(e,t){return t}function Jp(e,t){if(_e){var n=Ue.formState;if(n!==null){e:{var a=ye;if(_e){if(Ke){t:{for(var o=Ke,d=dn;o.nodeType!==8;){if(!d){o=null;break t}if(o=nn(o.nextSibling),o===null){o=null;break t}}d=o.data,o=d==="F!"||d==="F"?o:null}if(o){Ke=nn(o.nextSibling),a=o.data==="F!";break e}}Ai(a)}a=!1}a&&(t=n[0])}}return n=kt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:t},n.queue=a,n=xf.bind(null,ye,a),a.dispatch=n,a=sc(!1),d=fc.bind(null,ye,!1,a.queue),a=kt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=lb.bind(null,ye,o,d,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function Wp(e){var t=at();return $p(t,Re,e)}function $p(e,t,n){if(t=rc(e,t,Zp)[0],e=Oo(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=pr(t)}catch(f){throw f===or?ko:f}else a=t;t=at();var o=t.queue,d=o.dispatch;return n!==t.memoizedState&&(ye.flags|=2048,ga(9,Mo(),cb.bind(null,o,n),null)),[a,d,e]}function cb(e,t){e.action=t}function ef(e){var t=at(),n=Re;if(n!==null)return $p(t,n,e);at(),t=t.memoizedState,n=at();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ga(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ye.updateQueue,t===null&&(t=ic(),ye.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Mo(){return{destroy:void 0,resource:void 0}}function tf(){return at().memoizedState}function Do(e,t,n,a){var o=kt();a=a===void 0?null:a,ye.flags|=e,o.memoizedState=ga(1|t,Mo(),n,a)}function fr(e,t,n,a){var o=at();a=a===void 0?null:a;var d=o.memoizedState.inst;Re!==null&&a!==null&&Wl(a,Re.memoizedState.deps)?o.memoizedState=ga(t,d,n,a):(ye.flags|=e,o.memoizedState=ga(1|t,d,n,a))}function nf(e,t){Do(8390656,8,e,t)}function af(e,t){fr(2048,8,e,t)}function rf(e,t){return fr(4,2,e,t)}function of(e,t){return fr(4,4,e,t)}function sf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lf(e,t,n){n=n!=null?n.concat([e]):null,fr(4,4,sf.bind(null,t,e),n)}function cc(){}function cf(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Wl(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function df(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Wl(t,a[1]))return a[0];if(a=e(),Di){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[a,t],a}function dc(e,t,n){return n===void 0||(Xn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=fh(),ye.lanes|=e,ti|=e,n)}function uf(e,t,n,a){return Dt(n,t)?n:pa.current!==null?(e=dc(e,n,a),Dt(e,t)||(ct=!0),e):(Xn&42)===0?(ct=!0,e.memoizedState=n):(e=fh(),ye.lanes|=e,ti|=e,t)}function pf(e,t,n,a,o){var d=F.p;F.p=d!==0&&8>d?d:8;var f=_.T,b={};_.T=b,fc(e,!1,t,n);try{var S=o(),z=_.S;if(z!==null&&z(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=rb(S,a);hr(e,t,Y,Ht(e))}else hr(e,t,a,Ht(e))}catch(Q){hr(e,t,{then:function(){},status:"rejected",reason:Q},Ht())}finally{F.p=d,_.T=f}}function db(){}function uc(e,t,n,a){if(e.tag!==5)throw Error(c(476));var o=ff(e).queue;pf(e,o,t,Z,n===null?db:function(){return hf(e),n(a)})}function ff(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:Z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hf(e){var t=ff(e).next.queue;hr(e,t,{},Ht())}function pc(){return xt(Mr)}function gf(){return at().memoizedState}function mf(){return at().memoizedState}function ub(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Kn(n);var a=Fn(t,e,n);a!==null&&(It(a,t,n),lr(a,t,n)),t={cache:Pl()},e.payload=t;return}t=t.return}}function pb(e,t,n){var a=Ht();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},zo(e)?bf(t,n):(n=Ml(e,t,n,a),n!==null&&(It(n,e,a),vf(n,t,a)))}function xf(e,t,n){var a=Ht();hr(e,t,n,a)}function hr(e,t,n,a){var o={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(zo(e))bf(t,o);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var f=t.lastRenderedState,b=d(f,n);if(o.hasEagerState=!0,o.eagerState=b,Dt(b,f))return xo(e,t,o,0),Ue===null&&mo(),!1}catch{}if(n=Ml(e,t,o,a),n!==null)return It(n,e,a),vf(n,t,a),!0}return!1}function fc(e,t,n,a){if(a={lane:2,revertLane:Yc(),action:a,hasEagerState:!1,eagerState:null,next:null},zo(e)){if(t)throw Error(c(479))}else t=Ml(e,n,a,2),t!==null&&It(t,e,2)}function zo(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function bf(e,t){fa=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Eu(e,n)}}var Ro={readContext:xt,use:_o,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We},yf={readContext:xt,use:_o,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:nf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Do(4194308,4,sf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){Do(4,2,e,t)},useMemo:function(e,t){var n=kt();t=t===void 0?null:t;var a=e();if(Di){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=kt();if(n!==void 0){var o=n(t);if(Di){Ze(!0);try{n(t)}finally{Ze(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=pb.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=sc(e);var t=e.queue,n=xf.bind(null,ye,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cc,useDeferredValue:function(e,t){var n=kt();return dc(n,e,t)},useTransition:function(){var e=sc(!1);return e=pf.bind(null,ye,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ye,o=kt();if(_e){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Ue===null)throw Error(c(349));(ke&124)!==0||Up(a,t,n)}o.memoizedState=n;var d={value:n,getSnapshot:t};return o.queue=d,nf(Pp.bind(null,a,d,e),[e]),a.flags|=2048,ga(9,Mo(),Gp.bind(null,a,d,n,t),null),n},useId:function(){var e=kt(),t=Ue.identifierPrefix;if(_e){var n=Nn,a=Sn;n=(a&~(1<<32-Je(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ao++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=ob++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:pc,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fc.bind(null,ye,!0,n),n.dispatch=t,[e,t]},useMemoCache:ac,useCacheRefresh:function(){return kt().memoizedState=ub.bind(null,ye)}},wf={readContext:xt,use:_o,useCallback:cf,useContext:xt,useEffect:af,useImperativeHandle:lf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:df,useReducer:Oo,useRef:tf,useState:function(){return Oo(Tn)},useDebugValue:cc,useDeferredValue:function(e,t){var n=at();return uf(n,Re.memoizedState,e,t)},useTransition:function(){var e=Oo(Tn)[0],t=at().memoizedState;return[typeof e=="boolean"?e:pr(e),t]},useSyncExternalStore:Ip,useId:gf,useHostTransitionStatus:pc,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,t){var n=at();return Yp(n,Re,e,t)},useMemoCache:ac,useCacheRefresh:mf},fb={readContext:xt,use:_o,useCallback:cf,useContext:xt,useEffect:af,useImperativeHandle:lf,useInsertionEffect:rf,useLayoutEffect:of,useMemo:df,useReducer:oc,useRef:tf,useState:function(){return oc(Tn)},useDebugValue:cc,useDeferredValue:function(e,t){var n=at();return Re===null?dc(n,e,t):uf(n,Re.memoizedState,e,t)},useTransition:function(){var e=oc(Tn)[0],t=at().memoizedState;return[typeof e=="boolean"?e:pr(e),t]},useSyncExternalStore:Ip,useId:gf,useHostTransitionStatus:pc,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var n=at();return Re!==null?Yp(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ac,useCacheRefresh:mf},ma=null,gr=0;function Lo(e){var t=gr;return gr+=1,ma===null&&(ma=[]),Op(ma,e,t)}function mr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bo(e,t){throw t.$$typeof===j?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jf(e){var t=e._init;return t(e._payload)}function Sf(e){function t(M,E){if(e){var D=M.deletions;D===null?(M.deletions=[E],M.flags|=16):D.push(E)}}function n(M,E){if(!e)return null;for(;E!==null;)t(M,E),E=E.sibling;return null}function a(M){for(var E=new Map;M!==null;)M.key!==null?E.set(M.key,M):E.set(M.index,M),M=M.sibling;return E}function o(M,E){return M=jn(M,E),M.index=0,M.sibling=null,M}function d(M,E,D){return M.index=D,e?(D=M.alternate,D!==null?(D=D.index,D<E?(M.flags|=67108866,E):D):(M.flags|=67108866,E)):(M.flags|=1048576,E)}function f(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function b(M,E,D,K){return E===null||E.tag!==6?(E=zl(D,M.mode,K),E.return=M,E):(E=o(E,D),E.return=M,E)}function S(M,E,D,K){var re=D.type;return re===O?Y(M,E,D.props.children,K,D.key):E!==null&&(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===P&&jf(re)===E.type)?(E=o(E,D.props),mr(E,D),E.return=M,E):(E=vo(D.type,D.key,D.props,null,M.mode,K),mr(E,D),E.return=M,E)}function z(M,E,D,K){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=Rl(D,M.mode,K),E.return=M,E):(E=o(E,D.children||[]),E.return=M,E)}function Y(M,E,D,K,re){return E===null||E.tag!==7?(E=ki(D,M.mode,K,re),E.return=M,E):(E=o(E,D),E.return=M,E)}function Q(M,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=zl(""+E,M.mode,D),E.return=M,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case N:return D=vo(E.type,E.key,E.props,null,M.mode,D),mr(D,E),D.return=M,D;case k:return E=Rl(E,M.mode,D),E.return=M,E;case P:var K=E._init;return E=K(E._payload),Q(M,E,D)}if(ee(E)||ue(E))return E=ki(E,M.mode,D,null),E.return=M,E;if(typeof E.then=="function")return Q(M,Lo(E),D);if(E.$$typeof===L)return Q(M,So(M,E),D);Bo(M,E)}return null}function B(M,E,D,K){var re=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return re!==null?null:b(M,E,""+D,K);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case N:return D.key===re?S(M,E,D,K):null;case k:return D.key===re?z(M,E,D,K):null;case P:return re=D._init,D=re(D._payload),B(M,E,D,K)}if(ee(D)||ue(D))return re!==null?null:Y(M,E,D,K,null);if(typeof D.then=="function")return B(M,E,Lo(D),K);if(D.$$typeof===L)return B(M,E,So(M,D),K);Bo(M,D)}return null}function H(M,E,D,K,re){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return M=M.get(D)||null,b(E,M,""+K,re);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case N:return M=M.get(K.key===null?D:K.key)||null,S(E,M,K,re);case k:return M=M.get(K.key===null?D:K.key)||null,z(E,M,K,re);case P:var je=K._init;return K=je(K._payload),H(M,E,D,K,re)}if(ee(K)||ue(K))return M=M.get(D)||null,Y(E,M,K,re,null);if(typeof K.then=="function")return H(M,E,D,Lo(K),re);if(K.$$typeof===L)return H(M,E,D,So(E,K),re);Bo(E,K)}return null}function me(M,E,D,K){for(var re=null,je=null,de=E,ge=E=0,ut=null;de!==null&&ge<D.length;ge++){de.index>ge?(ut=de,de=null):ut=de.sibling;var Ae=B(M,de,D[ge],K);if(Ae===null){de===null&&(de=ut);break}e&&de&&Ae.alternate===null&&t(M,de),E=d(Ae,E,ge),je===null?re=Ae:je.sibling=Ae,je=Ae,de=ut}if(ge===D.length)return n(M,de),_e&&Ti(M,ge),re;if(de===null){for(;ge<D.length;ge++)de=Q(M,D[ge],K),de!==null&&(E=d(de,E,ge),je===null?re=de:je.sibling=de,je=de);return _e&&Ti(M,ge),re}for(de=a(de);ge<D.length;ge++)ut=H(de,M,ge,D[ge],K),ut!==null&&(e&&ut.alternate!==null&&de.delete(ut.key===null?ge:ut.key),E=d(ut,E,ge),je===null?re=ut:je.sibling=ut,je=ut);return e&&de.forEach(function(di){return t(M,di)}),_e&&Ti(M,ge),re}function he(M,E,D,K){if(D==null)throw Error(c(151));for(var re=null,je=null,de=E,ge=E=0,ut=null,Ae=D.next();de!==null&&!Ae.done;ge++,Ae=D.next()){de.index>ge?(ut=de,de=null):ut=de.sibling;var di=B(M,de,Ae.value,K);if(di===null){de===null&&(de=ut);break}e&&de&&di.alternate===null&&t(M,de),E=d(di,E,ge),je===null?re=di:je.sibling=di,je=di,de=ut}if(Ae.done)return n(M,de),_e&&Ti(M,ge),re;if(de===null){for(;!Ae.done;ge++,Ae=D.next())Ae=Q(M,Ae.value,K),Ae!==null&&(E=d(Ae,E,ge),je===null?re=Ae:je.sibling=Ae,je=Ae);return _e&&Ti(M,ge),re}for(de=a(de);!Ae.done;ge++,Ae=D.next())Ae=H(de,M,ge,Ae.value,K),Ae!==null&&(e&&Ae.alternate!==null&&de.delete(Ae.key===null?ge:Ae.key),E=d(Ae,E,ge),je===null?re=Ae:je.sibling=Ae,je=Ae);return e&&de.forEach(function(hv){return t(M,hv)}),_e&&Ti(M,ge),re}function Be(M,E,D,K){if(typeof D=="object"&&D!==null&&D.type===O&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case N:e:{for(var re=D.key;E!==null;){if(E.key===re){if(re=D.type,re===O){if(E.tag===7){n(M,E.sibling),K=o(E,D.props.children),K.return=M,M=K;break e}}else if(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===P&&jf(re)===E.type){n(M,E.sibling),K=o(E,D.props),mr(K,D),K.return=M,M=K;break e}n(M,E);break}else t(M,E);E=E.sibling}D.type===O?(K=ki(D.props.children,M.mode,K,D.key),K.return=M,M=K):(K=vo(D.type,D.key,D.props,null,M.mode,K),mr(K,D),K.return=M,M=K)}return f(M);case k:e:{for(re=D.key;E!==null;){if(E.key===re)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){n(M,E.sibling),K=o(E,D.children||[]),K.return=M,M=K;break e}else{n(M,E);break}else t(M,E);E=E.sibling}K=Rl(D,M.mode,K),K.return=M,M=K}return f(M);case P:return re=D._init,D=re(D._payload),Be(M,E,D,K)}if(ee(D))return me(M,E,D,K);if(ue(D)){if(re=ue(D),typeof re!="function")throw Error(c(150));return D=re.call(D),he(M,E,D,K)}if(typeof D.then=="function")return Be(M,E,Lo(D),K);if(D.$$typeof===L)return Be(M,E,So(M,D),K);Bo(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(n(M,E.sibling),K=o(E,D),K.return=M,M=K):(n(M,E),K=zl(D,M.mode,K),K.return=M,M=K),f(M)):n(M,E)}return function(M,E,D,K){try{gr=0;var re=Be(M,E,D,K);return ma=null,re}catch(de){if(de===or||de===ko)throw de;var je=zt(29,de,null,M.mode);return je.lanes=K,je.return=M,je}}}var xa=Sf(!0),Nf=Sf(!1),Zt=q(null),un=null;function Qn(e){var t=e.alternate;$(ot,ot.current&1),$(Zt,e),un===null&&(t===null||pa.current!==null||t.memoizedState!==null)&&(un=e)}function kf(e){if(e.tag===22){if($(ot,ot.current),$(Zt,e),un===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(un=e)}}else Zn()}function Zn(){$(ot,ot.current),$(Zt,Zt.current)}function Cn(e){J(Zt),un===e&&(un=null),J(ot)}var ot=q(0);function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||id(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function hc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Kn(a);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,a),t!==null&&(It(t,e,a),lr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),o=Kn(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,a),t!==null&&(It(t,e,a),lr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Kn(n);a.tag=2,t!=null&&(a.callback=t),t=Fn(e,a,n),t!==null&&(It(t,e,n),lr(t,e,n))}};function Ef(e,t,n,a,o,d,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,f):t.prototype&&t.prototype.isPureReactComponent?!Wa(n,a)||!Wa(o,d):!0}function Tf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function zi(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var Io=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Cf(e){Io(e)}function Af(e){console.error(e)}function _f(e){Io(e)}function Uo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Of(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function mc(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Uo(e,t)},n}function Mf(e){return e=Kn(e),e.tag=3,e}function Df(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var d=a.value;e.payload=function(){return o(d)},e.callback=function(){Of(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Of(t,n,a),typeof o!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var b=a.stack;this.componentDidCatch(a.value,{componentStack:b!==null?b:""})})}function hb(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ir(t,n,o,!0),n=Zt.current,n!==null){switch(n.tag){case 13:return un===null?Uc():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===Yl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Pc(e,a,o)),!1;case 22:return n.flags|=65536,a===Yl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Pc(e,a,o)),!1}throw Error(c(435,n.tag))}return Pc(e,a,o),Uc(),!1}if(_e)return t=Zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Hl&&(e=Error(c(422),{cause:a}),nr(Kt(e,n)))):(a!==Hl&&(t=Error(c(423),{cause:a}),nr(Kt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Kt(a,n),o=mc(e.stateNode,a,o),Xl(e,o),Fe!==4&&(Fe=2)),!1;var d=Error(c(520),{cause:a});if(d=Kt(d,n),Sr===null?Sr=[d]:Sr.push(d),Fe!==4&&(Fe=2),t===null)return!0;a=Kt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=mc(n.stateNode,a,e),Xl(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ni===null||!ni.has(d))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Mf(o),Df(o,e,n,a),Xl(n,o),!1}n=n.return}while(n!==null);return!1}var zf=Error(c(461)),ct=!1;function ft(e,t,n,a){t.child=e===null?Nf(t,null,n,a):xa(t,e.child,n,a)}function Rf(e,t,n,a,o){n=n.render;var d=t.ref;if("ref"in a){var f={};for(var b in a)b!=="ref"&&(f[b]=a[b])}else f=a;return Oi(t),a=$l(e,t,n,f,d,o),b=ec(),e!==null&&!ct?(tc(e,t,o),An(e,t,o)):(_e&&b&&Ll(t),t.flags|=1,ft(e,t,a,o),t.child)}function Lf(e,t,n,a,o){if(e===null){var d=n.type;return typeof d=="function"&&!Dl(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,Bf(e,t,d,a,o)):(e=vo(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!Nc(e,o)){var f=d.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(f,a)&&e.ref===t.ref)return An(e,t,o)}return t.flags|=1,e=jn(d,a),e.ref=t.ref,e.return=t,t.child=e}function Bf(e,t,n,a,o){if(e!==null){var d=e.memoizedProps;if(Wa(d,a)&&e.ref===t.ref)if(ct=!1,t.pendingProps=a=d,Nc(e,o))(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,An(e,t,o)}return xc(e,t,n,a,o)}function Hf(e,t,n){var a=t.pendingProps,o=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=d!==null?d.baseLanes|n:n,e!==null){for(o=t.child=e.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;t.childLanes=d&~a}else t.childLanes=0,t.child=null;return If(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&No(t,d!==null?d.cachePool:null),d!==null?Lp(t,d):Zl(),kf(t);else return t.lanes=t.childLanes=536870912,If(e,t,d!==null?d.baseLanes|n:n,n)}else d!==null?(No(t,d.cachePool),Lp(t,d),Zn(),t.memoizedState=null):(e!==null&&No(t,null),Zl(),Zn());return ft(e,t,o,n),t.child}function If(e,t,n,a){var o=Vl();return o=o===null?null:{parent:rt._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&No(t,null),Zl(),kf(t),e!==null&&ir(e,t,a,!0),null}function Go(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function xc(e,t,n,a,o){return Oi(t),n=$l(e,t,n,a,void 0,o),a=ec(),e!==null&&!ct?(tc(e,t,o),An(e,t,o)):(_e&&a&&Ll(t),t.flags|=1,ft(e,t,n,o),t.child)}function Uf(e,t,n,a,o,d){return Oi(t),t.updateQueue=null,n=Hp(t,a,n,o),Bp(e),a=ec(),e!==null&&!ct?(tc(e,t,d),An(e,t,d)):(_e&&a&&Ll(t),t.flags|=1,ft(e,t,n,d),t.child)}function Gf(e,t,n,a,o){if(Oi(t),t.stateNode===null){var d=sa,f=n.contextType;typeof f=="object"&&f!==null&&(d=xt(f)),d=new n(a,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gc,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=a,d.state=t.memoizedState,d.refs={},Kl(t),f=n.contextType,d.context=typeof f=="object"&&f!==null?xt(f):sa,d.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(hc(t,n,f,a),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(f=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),f!==d.state&&gc.enqueueReplaceState(d,d.state,null),dr(t,a,d,o),cr(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){d=t.stateNode;var b=t.memoizedProps,S=zi(n,b);d.props=S;var z=d.context,Y=n.contextType;f=sa,typeof Y=="object"&&Y!==null&&(f=xt(Y));var Q=n.getDerivedStateFromProps;Y=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||z!==f)&&Tf(t,d,a,f),Yn=!1;var B=t.memoizedState;d.state=B,dr(t,a,d,o),cr(),z=t.memoizedState,b||B!==z||Yn?(typeof Q=="function"&&(hc(t,n,Q,a),z=t.memoizedState),(S=Yn||Ef(t,n,S,a,B,z,f))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),d.props=a,d.state=z,d.context=f,a=S):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{d=t.stateNode,Fl(e,t),f=t.memoizedProps,Y=zi(n,f),d.props=Y,Q=t.pendingProps,B=d.context,z=n.contextType,S=sa,typeof z=="object"&&z!==null&&(S=xt(z)),b=n.getDerivedStateFromProps,(z=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==Q||B!==S)&&Tf(t,d,a,S),Yn=!1,B=t.memoizedState,d.state=B,dr(t,a,d,o),cr();var H=t.memoizedState;f!==Q||B!==H||Yn||e!==null&&e.dependencies!==null&&jo(e.dependencies)?(typeof b=="function"&&(hc(t,n,b,a),H=t.memoizedState),(Y=Yn||Ef(t,n,Y,a,B,H,S)||e!==null&&e.dependencies!==null&&jo(e.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,H,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,H,S)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=H),d.props=a,d.state=H,d.context=S,a=Y):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),a=!1)}return d=a,Go(e,t),a=(t.flags&128)!==0,d||a?(d=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&a?(t.child=xa(t,e.child,null,o),t.child=xa(t,null,n,o)):ft(e,t,n,o),t.memoizedState=d.state,e=t.child):e=An(e,t,o),e}function Pf(e,t,n,a){return tr(),t.flags|=256,ft(e,t,n,a),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:Cp()}}function yc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Jt),e}function qf(e,t,n){var a=t.pendingProps,o=!1,d=(t.flags&128)!==0,f;if((f=d)||(f=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),f&&(o=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(o?Qn(t):Zn(),_e){var b=Ke,S;if(S=b){e:{for(S=b,b=dn;S.nodeType!==8;){if(!b){b=null;break e}if(S=nn(S.nextSibling),S===null){b=null;break e}}b=S}b!==null?(t.memoizedState={dehydrated:b,treeContext:Ei!==null?{id:Sn,overflow:Nn}:null,retryLane:536870912,hydrationErrors:null},S=zt(18,null,null,0),S.stateNode=b,S.return=t,t.child=S,wt=t,Ke=null,S=!0):S=!1}S||Ai(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return id(b)?t.lanes=32:t.lanes=536870912,null;Cn(t)}return b=a.children,a=a.fallback,o?(Zn(),o=t.mode,b=Po({mode:"hidden",children:b},o),a=ki(a,o,n,null),b.return=t,a.return=t,b.sibling=a,t.child=b,o=t.child,o.memoizedState=vc(n),o.childLanes=yc(e,f,n),t.memoizedState=bc,a):(Qn(t),wc(t,b))}if(S=e.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(d)t.flags&256?(Qn(t),t.flags&=-257,t=jc(e,t,n)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),o=a.fallback,b=t.mode,a=Po({mode:"visible",children:a.children},b),o=ki(o,b,n,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,xa(t,e.child,null,n),a=t.child,a.memoizedState=vc(n),a.childLanes=yc(e,f,n),t.memoizedState=bc,t=o);else if(Qn(t),id(b)){if(f=b.nextSibling&&b.nextSibling.dataset,f)var z=f.dgst;f=z,a=Error(c(419)),a.stack="",a.digest=f,nr({value:a,source:null,stack:null}),t=jc(e,t,n)}else if(ct||ir(e,t,n,!1),f=(n&e.childLanes)!==0,ct||f){if(f=Ue,f!==null&&(a=n&-n,a=(a&42)!==0?1:al(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==S.retryLane))throw S.retryLane=a,oa(e,a),It(f,e,a),zf;b.data==="$?"||Uc(),t=jc(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ke=nn(b.nextSibling),wt=t,_e=!0,Ci=null,dn=!1,e!==null&&(Xt[Qt++]=Sn,Xt[Qt++]=Nn,Xt[Qt++]=Ei,Sn=e.id,Nn=e.overflow,Ei=t),t=wc(t,a.children),t.flags|=4096);return t}return o?(Zn(),o=a.fallback,b=t.mode,S=e.child,z=S.sibling,a=jn(S,{mode:"hidden",children:a.children}),a.subtreeFlags=S.subtreeFlags&65011712,z!==null?o=jn(z,o):(o=ki(o,b,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,b=e.child.memoizedState,b===null?b=vc(n):(S=b.cachePool,S!==null?(z=rt._currentValue,S=S.parent!==z?{parent:z,pool:z}:S):S=Cp(),b={baseLanes:b.baseLanes|n,cachePool:S}),o.memoizedState=b,o.childLanes=yc(e,f,n),t.memoizedState=bc,a):(Qn(t),n=e.child,e=n.sibling,n=jn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Po({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Po(e,t){return e=zt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function jc(e,t,n){return xa(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ul(e.return,t,n)}function Sc(e,t,n,a,o){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=o)}function Yf(e,t,n){var a=t.pendingProps,o=a.revealOrder,d=a.tail;if(ft(e,t,a.children,n),a=ot.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vf(e,n,t);else if(e.tag===19)Vf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch($(ot,a),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ho(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Sc(t,!1,o,n,d);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ho(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Sc(t,!0,n,null,d);break;case"together":Sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ir(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&jo(e)))}function gb(e,t,n){switch(t.tag){case 3:Ce(t,t.stateNode.containerInfo),Vn(t,rt,e.memoizedState.cache),tr();break;case 27:case 5:Pt(t);break;case 4:Ce(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?qf(e,t,n):(Qn(t),e=An(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ir(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Yf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(ot,ot.current),a)break;return null;case 22:case 23:return t.lanes=0,Hf(e,t,n);case 24:Vn(t,rt,e.memoizedState.cache)}return An(e,t,n)}function Kf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ct=!0;else{if(!Nc(e,n)&&(t.flags&128)===0)return ct=!1,gb(e,t,n);ct=(e.flags&131072)!==0}else ct=!1,_e&&(t.flags&1048576)!==0&&wp(t,wo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,o=a._init;if(a=o(a._payload),t.type=a,typeof a=="function")Dl(a)?(e=zi(a,e),t.tag=1,t=Gf(null,t,a,e,n)):(t.tag=0,t=xc(null,t,a,e,n));else{if(a!=null){if(o=a.$$typeof,o===U){t.tag=11,t=Rf(null,t,a,e,n);break e}else if(o===X){t.tag=14,t=Lf(null,t,a,e,n);break e}}throw t=V(a)||a,Error(c(306,t,""))}}return t;case 0:return xc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=zi(a,t.pendingProps),Gf(e,t,a,o,n);case 3:e:{if(Ce(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var d=t.memoizedState;o=d.element,Fl(e,t),dr(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Vn(t,rt,a),a!==d.cache&&Gl(t,[rt],n,!0),cr(),a=f.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=Pf(e,t,a,n);break e}else if(a!==o){o=Kt(Error(c(424)),t),nr(o),t=Pf(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=nn(e.firstChild),wt=t,_e=!0,Ci=null,dn=!0,n=Nf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),a===o){t=An(e,t,n);break e}ft(e,t,a,n)}t=t.child}return t;case 26:return Go(e,t),e===null?(n=Zh(t.type,null,t.pendingProps,null))?t.memoizedState=n:_e||(n=t.type,e=t.pendingProps,a=ns(ie.current).createElement(n),a[mt]=t,a[St]=e,gt(a,n,e),lt(a),t.stateNode=a):t.memoizedState=Zh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pt(t),e===null&&_e&&(a=t.stateNode=Fh(t.type,t.pendingProps,ie.current),wt=t,dn=!0,o=Ke,ri(t.type)?(ad=o,Ke=nn(a.firstChild)):Ke=o),ft(e,t,t.pendingProps.children,n),Go(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((o=a=Ke)&&(a=qb(a,t.type,t.pendingProps,dn),a!==null?(t.stateNode=a,wt=t,Ke=nn(a.firstChild),dn=!1,o=!0):o=!1),o||Ai(t)),Pt(t),o=t.type,d=t.pendingProps,f=e!==null?e.memoizedProps:null,a=d.children,ed(o,d)?a=null:f!==null&&ed(o,f)&&(t.flags|=32),t.memoizedState!==null&&(o=$l(e,t,sb,null,null,n),Mr._currentValue=o),Go(e,t),ft(e,t,a,n),t.child;case 6:return e===null&&_e&&((e=n=Ke)&&(n=Vb(n,t.pendingProps,dn),n!==null?(t.stateNode=n,wt=t,Ke=null,e=!0):e=!1),e||Ai(t)),null;case 13:return qf(e,t,n);case 4:return Ce(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=xa(t,null,a,n):ft(e,t,a,n),t.child;case 11:return Rf(e,t,t.type,t.pendingProps,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Vn(t,t.type,a.value),ft(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Oi(t),o=xt(o),a=a(o),t.flags|=1,ft(e,t,a,n),t.child;case 14:return Lf(e,t,t.type,t.pendingProps,n);case 15:return Bf(e,t,t.type,t.pendingProps,n);case 19:return Yf(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Po(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=jn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Hf(e,t,n);case 24:return Oi(t),a=xt(rt),e===null?(o=Vl(),o===null&&(o=Ue,d=Pl(),o.pooledCache=d,d.refCount++,d!==null&&(o.pooledCacheLanes|=n),o=d),t.memoizedState={parent:a,cache:o},Kl(t),Vn(t,rt,o)):((e.lanes&n)!==0&&(Fl(e,t),dr(t,null,null,n),cr()),o=e.memoizedState,d=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Vn(t,rt,a)):(a=d.cache,Vn(t,rt,a),a!==o.cache&&Gl(t,[rt],n,!0))),ft(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function _n(e){e.flags|=4}function Ff(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tg(t)){if(t=Zt.current,t!==null&&((ke&4194048)===ke?un!==null:(ke&62914560)!==ke&&(ke&536870912)===0||t!==un))throw sr=Yl,Ap;e.flags|=8192}}function qo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Nu():536870912,e.lanes|=t,wa|=t)}function xr(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function mb(e,t,n){var a=t.pendingProps;switch(Bl(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),En(rt),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(er(t)?_n(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Np())),qe(t),null;case 26:return n=t.memoizedState,e===null?(_n(t),n!==null?(qe(t),Ff(t,n)):(qe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(_n(t),qe(t),Ff(t,n)):(qe(t),t.flags&=-16777217):(e.memoizedProps!==a&&_n(t),qe(t),t.flags&=-16777217),null;case 27:pt(t),n=ie.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return qe(t),null}e=ae.current,er(t)?jp(t):(e=Fh(o,a,n),t.stateNode=e,_n(t))}return qe(t),null;case 5:if(pt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return qe(t),null}if(e=ae.current,er(t))jp(t);else{switch(o=ns(ie.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?o.createElement(n,{is:a.is}):o.createElement(n)}}e[mt]=t,e[St]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(gt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&_n(t)}}return qe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&_n(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,er(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=wt,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Uh(e.nodeValue,n)),e||Ai(t)}else e=ns(e).createTextNode(a),e[mt]=t,t.stateNode=e}return qe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=er(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(c(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(c(317));o[mt]=t}else tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),o=!1}else o=Np(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Cn(t),t):(Cn(t),null)}if(Cn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool);var d=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(d=a.memoizedState.cachePool.pool),d!==o&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),qo(t,t.updateQueue),qe(t),null;case 4:return Te(),e===null&&Qc(t.stateNode.containerInfo),qe(t),null;case 10:return En(t.type),qe(t),null;case 19:if(J(ot),o=t.memoizedState,o===null)return qe(t),null;if(a=(t.flags&128)!==0,d=o.rendering,d===null)if(a)xr(o,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ho(e),d!==null){for(t.flags|=128,xr(o,!1),e=d.updateQueue,t.updateQueue=e,qo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yp(n,e),n=n.sibling;return $(ot,ot.current&1|2),t.child}e=e.sibling}o.tail!==null&&_t()>Ko&&(t.flags|=128,a=!0,xr(o,!1),t.lanes=4194304)}else{if(!a)if(e=Ho(d),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,qo(t,e),xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!_e)return qe(t),null}else 2*_t()-o.renderingStartTime>Ko&&n!==536870912&&(t.flags|=128,a=!0,xr(o,!1),t.lanes=4194304);o.isBackwards?(d.sibling=t.child,t.child=d):(e=o.last,e!==null?e.sibling=d:t.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_t(),t.sibling=null,e=ot.current,$(ot,a?e&1|2:e&1),t):(qe(t),null);case 22:case 23:return Cn(t),Jl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),n=t.updateQueue,n!==null&&qo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&J(Mi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),En(rt),qe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function xb(e,t){switch(Bl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(rt),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pt(t),null;case 13:if(Cn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ot),null;case 4:return Te(),null;case 10:return En(t.type),null;case 22:case 23:return Cn(t),Jl(),e!==null&&J(Mi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(rt),null;case 25:return null;default:return null}}function Xf(e,t){switch(Bl(t),t.tag){case 3:En(rt),Te();break;case 26:case 27:case 5:pt(t);break;case 4:Te();break;case 13:Cn(t);break;case 19:J(ot);break;case 10:En(t.type);break;case 22:case 23:Cn(t),Jl(),e!==null&&J(Mi);break;case 24:En(rt)}}function br(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var d=n.create,f=n.inst;a=d(),f.destroy=a}n=n.next}while(n!==o)}}catch(b){Ie(t,t.return,b)}}function Jn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var d=o.next;a=d;do{if((a.tag&e)===e){var f=a.inst,b=f.destroy;if(b!==void 0){f.destroy=void 0,o=t;var S=n,z=b;try{z()}catch(Y){Ie(o,S,Y)}}}a=a.next}while(a!==d)}}catch(Y){Ie(t,t.return,Y)}}function Qf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Rp(t,n)}catch(a){Ie(e,e.return,a)}}}function Zf(e,t,n){n.props=zi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ie(e,t,a)}}function vr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Ie(e,t,o)}}function pn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Ie(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ie(e,t,o)}else n.current=null}function Jf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Ie(e,e.return,o)}}function kc(e,t,n){try{var a=e.stateNode;Hb(a,e.type,n,t),a[St]=t}catch(o){Ie(e,e.return,o)}}function Wf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ri(e.type)||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ri(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ts));else if(a!==4&&(a===27&&ri(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Vo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ri(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vo(e,t,n),e=e.sibling;e!==null;)Vo(e,t,n),e=e.sibling}function $f(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);gt(t,a,n),t[mt]=e,t[St]=n}catch(d){Ie(e,e.return,d)}}var On=!1,$e=!1,Cc=!1,eh=typeof WeakSet=="function"?WeakSet:Set,dt=null;function bb(e,t){if(e=e.containerInfo,Wc=ls,e=dp(e),El(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var f=0,b=-1,S=-1,z=0,Y=0,Q=e,B=null;t:for(;;){for(var H;Q!==n||o!==0&&Q.nodeType!==3||(b=f+o),Q!==d||a!==0&&Q.nodeType!==3||(S=f+a),Q.nodeType===3&&(f+=Q.nodeValue.length),(H=Q.firstChild)!==null;)B=Q,Q=H;for(;;){if(Q===e)break t;if(B===n&&++z===o&&(b=f),B===d&&++Y===a&&(S=f),(H=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=H}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for($c={focusedElem:e,selectionRange:n},ls=!1,dt=t;dt!==null;)if(t=dt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,dt=e;else for(;dt!==null;){switch(t=dt,d=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,o=d.memoizedProps,d=d.memoizedState,a=n.stateNode;try{var me=zi(n.type,o,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(me,d),a.__reactInternalSnapshotBeforeUpdate=e}catch(he){Ie(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,dt=e;break}dt=t.return}}function th(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(e,n),a&4&&br(5,n);break;case 1:if(Wn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ie(n,n.return,f)}else{var o=zi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ie(n,n.return,f)}}a&64&&Qf(n),a&512&&vr(n,n.return);break;case 3:if(Wn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Rp(e,t)}catch(f){Ie(n,n.return,f)}}break;case 27:t===null&&a&4&&$f(n);case 26:case 5:Wn(e,n),t===null&&a&4&&Jf(n),a&512&&vr(n,n.return);break;case 12:Wn(e,n);break;case 13:Wn(e,n),a&4&&ah(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Tb.bind(null,n),Yb(e,n))));break;case 22:if(a=n.memoizedState!==null||On,!a){t=t!==null&&t.memoizedState!==null||$e,o=On;var d=$e;On=a,($e=t)&&!d?$n(e,n,(n.subtreeFlags&8772)!==0):Wn(e,n),On=o,$e=d}break;case 30:break;default:Wn(e,n)}}function nh(e){var t=e.alternate;t!==null&&(e.alternate=null,nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&sl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Et=!1;function Mn(e,t,n){for(n=n.child;n!==null;)ih(e,t,n),n=n.sibling}function ih(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Mt,n)}catch{}switch(n.tag){case 26:$e||pn(n,t),Mn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$e||pn(n,t);var a=Pe,o=Et;ri(n.type)&&(Pe=n.stateNode,Et=!1),Mn(e,t,n),Cr(n.stateNode),Pe=a,Et=o;break;case 5:$e||pn(n,t);case 6:if(a=Pe,o=Et,Pe=null,Mn(e,t,n),Pe=a,Et=o,Pe!==null)if(Et)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode)}catch(d){Ie(n,t,d)}else try{Pe.removeChild(n.stateNode)}catch(d){Ie(n,t,d)}break;case 18:Pe!==null&&(Et?(e=Pe,Yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Lr(e)):Yh(Pe,n.stateNode));break;case 4:a=Pe,o=Et,Pe=n.stateNode.containerInfo,Et=!0,Mn(e,t,n),Pe=a,Et=o;break;case 0:case 11:case 14:case 15:$e||Jn(2,n,t),$e||Jn(4,n,t),Mn(e,t,n);break;case 1:$e||(pn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Zf(n,t,a)),Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:$e=(a=$e)||n.memoizedState!==null,Mn(e,t,n),$e=a;break;default:Mn(e,t,n)}}function ah(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lr(e)}catch(n){Ie(t,t.return,n)}}function vb(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new eh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new eh),t;default:throw Error(c(435,e.tag))}}function Ac(e,t){var n=vb(e);t.forEach(function(a){var o=Cb.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],d=e,f=t,b=f;e:for(;b!==null;){switch(b.tag){case 27:if(ri(b.type)){Pe=b.stateNode,Et=!1;break e}break;case 5:Pe=b.stateNode,Et=!1;break e;case 3:case 4:Pe=b.stateNode.containerInfo,Et=!0;break e}b=b.return}if(Pe===null)throw Error(c(160));ih(d,f,o),Pe=null,Et=!1,d=o.alternate,d!==null&&(d.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)rh(t,e),t=t.sibling}var tn=null;function rh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Lt(e),a&4&&(Jn(3,e,e.return),br(3,e),Jn(5,e,e.return));break;case 1:Rt(t,e),Lt(e),a&512&&($e||n===null||pn(n,n.return)),a&64&&On&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=tn;if(Rt(t,e),Lt(e),a&512&&($e||n===null||pn(n,n.return)),a&4){var d=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":d=o.getElementsByTagName("title")[0],(!d||d[qa]||d[mt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=o.createElement(a),o.head.insertBefore(d,o.querySelector("head > title"))),gt(d,a,n),d[mt]=e,lt(d),a=d;break e;case"link":var f=$h("link","href",o).get(a+(n.href||""));if(f){for(var b=0;b<f.length;b++)if(d=f[b],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(b,1);break t}}d=o.createElement(a),gt(d,a,n),o.head.appendChild(d);break;case"meta":if(f=$h("meta","content",o).get(a+(n.content||""))){for(b=0;b<f.length;b++)if(d=f[b],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(b,1);break t}}d=o.createElement(a),gt(d,a,n),o.head.appendChild(d);break;default:throw Error(c(468,a))}d[mt]=e,lt(d),a=d}e.stateNode=a}else eg(o,e.type,e.stateNode);else e.stateNode=Wh(o,a,e.memoizedProps);else d!==a?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,a===null?eg(o,e.type,e.stateNode):Wh(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&kc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Lt(e),a&512&&($e||n===null||pn(n,n.return)),n!==null&&a&4&&kc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Lt(e),a&512&&($e||n===null||pn(n,n.return)),e.flags&32){o=e.stateNode;try{$i(o,"")}catch(H){Ie(e,e.return,H)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,kc(e,o,n!==null?n.memoizedProps:o)),a&1024&&(Cc=!0);break;case 6:if(Rt(t,e),Lt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(H){Ie(e,e.return,H)}}break;case 3:if(rs=null,o=tn,tn=is(t.containerInfo),Rt(t,e),tn=o,Lt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(H){Ie(e,e.return,H)}Cc&&(Cc=!1,oh(e));break;case 4:a=tn,tn=is(e.stateNode.containerInfo),Rt(t,e),Lt(e),tn=a;break;case 12:Rt(t,e),Lt(e);break;case 13:Rt(t,e),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Rc=_t()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ac(e,a)));break;case 22:o=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,z=On,Y=$e;if(On=z||o,$e=Y||S,Rt(t,e),$e=Y,On=z,Lt(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||S||On||$e||Ri(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(d=S.stateNode,o)f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{b=S.stateNode;var Q=S.memoizedProps.style,B=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(H){Ie(S,S.return,H)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch(H){Ie(S,S.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ac(e,n))));break;case 19:Rt(t,e),Lt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ac(e,a)));break;case 30:break;case 21:break;default:Rt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Wf(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var o=n.stateNode,d=Ec(e);Vo(e,d,o);break;case 5:var f=n.stateNode;n.flags&32&&($i(f,""),n.flags&=-33);var b=Ec(e);Vo(e,b,f);break;case 3:case 4:var S=n.stateNode.containerInfo,z=Ec(e);Tc(e,z,S);break;default:throw Error(c(161))}}catch(Y){Ie(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;oh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)th(e,t.alternate,t),t=t.sibling}function Ri(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Ri(t);break;case 1:pn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zf(t,t.return,n),Ri(t);break;case 27:Cr(t.stateNode);case 26:case 5:pn(t,t.return),Ri(t);break;case 22:t.memoizedState===null&&Ri(t);break;case 30:Ri(t);break;default:Ri(t)}e=e.sibling}}function $n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,d=t,f=d.flags;switch(d.tag){case 0:case 11:case 15:$n(o,d,n),br(4,d);break;case 1:if($n(o,d,n),a=d,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(z){Ie(a,a.return,z)}if(a=d,o=a.updateQueue,o!==null){var b=a.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)zp(S[o],b)}catch(z){Ie(a,a.return,z)}}n&&f&64&&Qf(d),vr(d,d.return);break;case 27:$f(d);case 26:case 5:$n(o,d,n),n&&a===null&&f&4&&Jf(d),vr(d,d.return);break;case 12:$n(o,d,n);break;case 13:$n(o,d,n),n&&f&4&&ah(o,d);break;case 22:d.memoizedState===null&&$n(o,d,n),vr(d,d.return);break;case 30:break;default:$n(o,d,n)}t=t.sibling}}function _c(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ar(n))}function Oc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e))}function fn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sh(e,t,n,a),t=t.sibling}function sh(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:fn(e,t,n,a),o&2048&&br(9,t);break;case 1:fn(e,t,n,a);break;case 3:fn(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e)));break;case 12:if(o&2048){fn(e,t,n,a),e=t.stateNode;try{var d=t.memoizedProps,f=d.id,b=d.onPostCommit;typeof b=="function"&&b(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ie(t,t.return,S)}}else fn(e,t,n,a);break;case 13:fn(e,t,n,a);break;case 23:break;case 22:d=t.stateNode,f=t.alternate,t.memoizedState!==null?d._visibility&2?fn(e,t,n,a):yr(e,t):d._visibility&2?fn(e,t,n,a):(d._visibility|=2,ba(e,t,n,a,(t.subtreeFlags&10256)!==0)),o&2048&&_c(f,t);break;case 24:fn(e,t,n,a),o&2048&&Oc(t.alternate,t);break;default:fn(e,t,n,a)}}function ba(e,t,n,a,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var d=e,f=t,b=n,S=a,z=f.flags;switch(f.tag){case 0:case 11:case 15:ba(d,f,b,S,o),br(8,f);break;case 23:break;case 22:var Y=f.stateNode;f.memoizedState!==null?Y._visibility&2?ba(d,f,b,S,o):yr(d,f):(Y._visibility|=2,ba(d,f,b,S,o)),o&&z&2048&&_c(f.alternate,f);break;case 24:ba(d,f,b,S,o),o&&z&2048&&Oc(f.alternate,f);break;default:ba(d,f,b,S,o)}t=t.sibling}}function yr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:yr(n,a),o&2048&&_c(a.alternate,a);break;case 24:yr(n,a),o&2048&&Oc(a.alternate,a);break;default:yr(n,a)}t=t.sibling}}var wr=8192;function va(e){if(e.subtreeFlags&wr)for(e=e.child;e!==null;)lh(e),e=e.sibling}function lh(e){switch(e.tag){case 26:va(e),e.flags&wr&&e.memoizedState!==null&&av(tn,e.memoizedState,e.memoizedProps);break;case 5:va(e);break;case 3:case 4:var t=tn;tn=is(e.stateNode.containerInfo),va(e),tn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=wr,wr=16777216,va(e),wr=t):va(e));break;default:va(e)}}function ch(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];dt=a,uh(a,e)}ch(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dh(e),e=e.sibling}function dh(e){switch(e.tag){case 0:case 11:case 15:jr(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:jr(e);break;case 12:jr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yo(e)):jr(e);break;default:jr(e)}}function Yo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];dt=a,uh(a,e)}ch(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),Yo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yo(t));break;default:Yo(t)}e=e.sibling}}function uh(e,t){for(;dt!==null;){var n=dt;switch(n.tag){case 0:case 11:case 15:Jn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ar(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,dt=a;else e:for(n=e;dt!==null;){a=dt;var o=a.sibling,d=a.return;if(nh(a),a===n){dt=null;break e}if(o!==null){o.return=d,dt=o;break e}dt=d}}}var yb={getCacheForType:function(e){var t=xt(rt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},wb=typeof WeakMap=="function"?WeakMap:Map,De=0,Ue=null,Se=null,ke=0,ze=0,Bt=null,ei=!1,ya=!1,Mc=!1,Dn=0,Fe=0,ti=0,Li=0,Dc=0,Jt=0,wa=0,Sr=null,Tt=null,zc=!1,Rc=0,Ko=1/0,Fo=null,ni=null,ht=0,ii=null,ja=null,Sa=0,Lc=0,Bc=null,ph=null,Nr=0,Hc=null;function Ht(){if((De&2)!==0&&ke!==0)return ke&-ke;if(_.T!==null){var e=da;return e!==0?e:Yc()}return Tu()}function fh(){Jt===0&&(Jt=(ke&536870912)===0||_e?Su():536870912);var e=Zt.current;return e!==null&&(e.flags|=32),Jt}function It(e,t,n){(e===Ue&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Na(e,0),ai(e,ke,Jt,!1)),Pa(e,n),((De&2)===0||e!==Ue)&&(e===Ue&&((De&2)===0&&(Li|=n),Fe===4&&ai(e,ke,Jt,!1)),hn(e))}function hh(e,t,n){if((De&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ga(e,t),o=a?Nb(e,t):Gc(e,t,!0),d=a;do{if(o===0){ya&&!a&&ai(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!jb(n)){o=Gc(e,t,!1),d=!1;continue}if(o===2){if(d=t,e.errorRecoveryDisabledLanes&d)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var b=e;o=Sr;var S=b.current.memoizedState.isDehydrated;if(S&&(Na(b,f).flags|=256),f=Gc(b,f,!1),f!==2){if(Mc&&!S){b.errorRecoveryDisabledLanes|=d,Li|=d,o=4;break e}d=Tt,Tt=o,d!==null&&(Tt===null?Tt=d:Tt.push.apply(Tt,d))}o=f}if(d=!1,o!==2)continue}}if(o===1){Na(e,0),ai(e,t,0,!0);break}e:{switch(a=e,d=o,d){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ai(a,t,Jt,!ei);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(o=Rc+300-_t(),10<o)){if(ai(a,t,Jt,!ei),io(a,0,!0)!==0)break e;a.timeoutHandle=qh(gh.bind(null,a,n,Tt,Fo,zc,t,Jt,Li,wa,ei,d,2,-0,0),o);break e}gh(a,n,Tt,Fo,zc,t,Jt,Li,wa,ei,d,0,-0,0)}}break}while(!0);hn(e)}function gh(e,t,n,a,o,d,f,b,S,z,Y,Q,B,H){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(Or={stylesheets:null,count:0,unsuspend:iv},lh(t),Q=rv(),Q!==null)){e.cancelPendingCommit=Q(jh.bind(null,e,t,d,n,a,o,f,b,S,Y,1,B,H)),ai(e,d,f,!z);return}jh(e,t,d,n,a,o,f,b,S)}function jb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],d=o.getSnapshot;o=o.value;try{if(!Dt(d(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ai(e,t,n,a){t&=~Dc,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var d=31-Je(o),f=1<<d;a[d]=-1,o&=~f}n!==0&&ku(e,n,t)}function Xo(){return(De&6)===0?(kr(0),!1):!0}function Ic(){if(Se!==null){if(ze===0)var e=Se.return;else e=Se,kn=_i=null,nc(e),ma=null,gr=0,e=Se;for(;e!==null;)Xf(e.alternate,e),e=e.return;Se=null}}function Na(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ub(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ic(),Ue=e,Se=n=jn(e.current,null),ke=t,ze=0,Bt=null,ei=!1,ya=Ga(e,t),Mc=!1,wa=Jt=Dc=Li=ti=Fe=0,Tt=Sr=null,zc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-Je(a),d=1<<o;t|=e[o],a&=~d}return Dn=t,mo(),n}function mh(e,t){ye=null,_.H=Ro,t===or||t===ko?(t=Mp(),ze=3):t===Ap?(t=Mp(),ze=4):ze=t===zf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,Se===null&&(Fe=1,Uo(e,Kt(t,e.current)))}function xh(){var e=_.H;return _.H=Ro,e===null?Ro:e}function bh(){var e=_.A;return _.A=yb,e}function Uc(){Fe=4,ei||(ke&4194048)!==ke&&Zt.current!==null||(ya=!0),(ti&134217727)===0&&(Li&134217727)===0||Ue===null||ai(Ue,ke,Jt,!1)}function Gc(e,t,n){var a=De;De|=2;var o=xh(),d=bh();(Ue!==e||ke!==t)&&(Fo=null,Na(e,t)),t=!1;var f=Fe;e:do try{if(ze!==0&&Se!==null){var b=Se,S=Bt;switch(ze){case 8:Ic(),f=6;break e;case 3:case 2:case 9:case 6:Zt.current===null&&(t=!0);var z=ze;if(ze=0,Bt=null,ka(e,b,S,z),n&&ya){f=0;break e}break;default:z=ze,ze=0,Bt=null,ka(e,b,S,z)}}Sb(),f=Fe;break}catch(Y){mh(e,Y)}while(!0);return t&&e.shellSuspendCounter++,kn=_i=null,De=a,_.H=o,_.A=d,Se===null&&(Ue=null,ke=0,mo()),f}function Sb(){for(;Se!==null;)vh(Se)}function Nb(e,t){var n=De;De|=2;var a=xh(),o=bh();Ue!==e||ke!==t?(Fo=null,Ko=_t()+500,Na(e,t)):ya=Ga(e,t);e:do try{if(ze!==0&&Se!==null){t=Se;var d=Bt;t:switch(ze){case 1:ze=0,Bt=null,ka(e,t,d,1);break;case 2:case 9:if(_p(d)){ze=0,Bt=null,yh(t);break}t=function(){ze!==2&&ze!==9||Ue!==e||(ze=7),hn(e)},d.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:_p(d)?(ze=0,Bt=null,yh(t)):(ze=0,Bt=null,ka(e,t,d,7));break;case 5:var f=null;switch(Se.tag){case 26:f=Se.memoizedState;case 5:case 27:var b=Se;if(!f||tg(f)){ze=0,Bt=null;var S=b.sibling;if(S!==null)Se=S;else{var z=b.return;z!==null?(Se=z,Qo(z)):Se=null}break t}}ze=0,Bt=null,ka(e,t,d,5);break;case 6:ze=0,Bt=null,ka(e,t,d,6);break;case 8:Ic(),Fe=6;break e;default:throw Error(c(462))}}kb();break}catch(Y){mh(e,Y)}while(!0);return kn=_i=null,_.H=a,_.A=o,De=n,Se!==null?0:(Ue=null,ke=0,mo(),Fe)}function kb(){for(;Se!==null&&!eo();)vh(Se)}function vh(e){var t=Kf(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?Qo(e):Se=t}function yh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uf(n,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=Uf(n,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:nc(t);default:Xf(n,t),t=Se=yp(t,Dn),t=Kf(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?Qo(e):Se=t}function ka(e,t,n,a){kn=_i=null,nc(t),ma=null,gr=0;var o=t.return;try{if(hb(e,o,t,n,ke)){Fe=1,Uo(e,Kt(n,e.current)),Se=null;return}}catch(d){if(o!==null)throw Se=o,d;Fe=1,Uo(e,Kt(n,e.current)),Se=null;return}t.flags&32768?(_e||a===1?e=!0:ya||(ke&536870912)!==0?e=!1:(ei=e=!0,(a===2||a===9||a===3||a===6)&&(a=Zt.current,a!==null&&a.tag===13&&(a.flags|=16384))),wh(t,e)):Qo(t)}function Qo(e){var t=e;do{if((t.flags&32768)!==0){wh(t,ei);return}e=t.return;var n=mb(t.alternate,t,Dn);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Fe===0&&(Fe=5)}function wh(e,t){do{var n=xb(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);Fe=6,Se=null}function jh(e,t,n,a,o,d,f,b,S){e.cancelPendingCommit=null;do Zo();while(ht!==0);if((De&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(d=t.lanes|t.childLanes,d|=Ol,i1(e,n,d,f,b,S),e===Ue&&(Se=Ue=null,ke=0),ja=t,ii=e,Sa=n,Lc=d,Bc=o,ph=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ab(Me,function(){return Th(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,o=F.p,F.p=2,f=De,De|=4;try{bb(e,t,n)}finally{De=f,F.p=o,_.T=a}}ht=1,Sh(),Nh(),kh()}}function Sh(){if(ht===1){ht=0;var e=ii,t=ja,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=F.p;F.p=2;var o=De;De|=4;try{rh(t,e);var d=$c,f=dp(e.containerInfo),b=d.focusedElem,S=d.selectionRange;if(f!==b&&b&&b.ownerDocument&&cp(b.ownerDocument.documentElement,b)){if(S!==null&&El(b)){var z=S.start,Y=S.end;if(Y===void 0&&(Y=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(Y,b.value.length);else{var Q=b.ownerDocument||document,B=Q&&Q.defaultView||window;if(B.getSelection){var H=B.getSelection(),me=b.textContent.length,he=Math.min(S.start,me),Be=S.end===void 0?he:Math.min(S.end,me);!H.extend&&he>Be&&(f=Be,Be=he,he=f);var M=lp(b,he),E=lp(b,Be);if(M&&E&&(H.rangeCount!==1||H.anchorNode!==M.node||H.anchorOffset!==M.offset||H.focusNode!==E.node||H.focusOffset!==E.offset)){var D=Q.createRange();D.setStart(M.node,M.offset),H.removeAllRanges(),he>Be?(H.addRange(D),H.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),H.addRange(D))}}}}for(Q=[],H=b;H=H.parentNode;)H.nodeType===1&&Q.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Q.length;b++){var K=Q[b];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}ls=!!Wc,$c=Wc=null}finally{De=o,F.p=a,_.T=n}}e.current=t,ht=2}}function Nh(){if(ht===2){ht=0;var e=ii,t=ja,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=F.p;F.p=2;var o=De;De|=4;try{th(e,t.alternate,t)}finally{De=o,F.p=a,_.T=n}}ht=3}}function kh(){if(ht===4||ht===3){ht=0,bn();var e=ii,t=ja,n=Sa,a=ph;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,ja=ii=null,Eh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ni=null),rl(n),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Mt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,o=F.p,F.p=2,_.T=null;try{for(var d=e.onRecoverableError,f=0;f<a.length;f++){var b=a[f];d(b.value,{componentStack:b.stack})}}finally{_.T=t,F.p=o}}(Sa&3)!==0&&Zo(),hn(e),o=e.pendingLanes,(n&4194090)!==0&&(o&42)!==0?e===Hc?Nr++:(Nr=0,Hc=e):Nr=0,kr(0)}}function Eh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ar(t)))}function Zo(e){return Sh(),Nh(),kh(),Th()}function Th(){if(ht!==5)return!1;var e=ii,t=Lc;Lc=0;var n=rl(Sa),a=_.T,o=F.p;try{F.p=32>n?32:n,_.T=null,n=Bc,Bc=null;var d=ii,f=Sa;if(ht=0,ja=ii=null,Sa=0,(De&6)!==0)throw Error(c(331));var b=De;if(De|=4,dh(d.current),sh(d,d.current,f,n),De=b,kr(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Mt,d)}catch{}return!0}finally{F.p=o,_.T=a,Eh(e,t)}}function Ch(e,t,n){t=Kt(n,t),t=mc(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&(Pa(e,2),hn(e))}function Ie(e,t,n){if(e.tag===3)Ch(e,e,n);else for(;t!==null;){if(t.tag===3){Ch(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ni===null||!ni.has(a))){e=Kt(n,e),n=Mf(2),a=Fn(t,n,2),a!==null&&(Df(n,a,t,e),Pa(a,2),hn(a));break}}t=t.return}}function Pc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new wb;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Mc=!0,o.add(n),e=Eb.bind(null,e,t,n),t.then(e,e))}function Eb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ue===e&&(ke&n)===n&&(Fe===4||Fe===3&&(ke&62914560)===ke&&300>_t()-Rc?(De&2)===0&&Na(e,0):Dc|=n,wa===ke&&(wa=0)),hn(e)}function Ah(e,t){t===0&&(t=Nu()),e=oa(e,t),e!==null&&(Pa(e,t),hn(e))}function Tb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ah(e,n)}function Cb(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Ah(e,n)}function Ab(e,t){return yt(e,t)}var Jo=null,Ea=null,qc=!1,Wo=!1,Vc=!1,Bi=0;function hn(e){e!==Ea&&e.next===null&&(Ea===null?Jo=Ea=e:Ea=Ea.next=e),Wo=!0,qc||(qc=!0,Ob())}function kr(e,t){if(!Vc&&Wo){Vc=!0;do for(var n=!1,a=Jo;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var d=0;else{var f=a.suspendedLanes,b=a.pingedLanes;d=(1<<31-Je(42|e)+1)-1,d&=o&~(f&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,Dh(a,d))}else d=ke,d=io(a,a===Ue?d:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(d&3)===0||Ga(a,d)||(n=!0,Dh(a,d));a=a.next}while(n);Vc=!1}}function _b(){_h()}function _h(){Wo=qc=!1;var e=0;Bi!==0&&(Ib()&&(e=Bi),Bi=0);for(var t=_t(),n=null,a=Jo;a!==null;){var o=a.next,d=Oh(a,t);d===0?(a.next=null,n===null?Jo=o:n.next=o,o===null&&(Ea=n)):(n=a,(e!==0||(d&3)!==0)&&(Wo=!0)),a=o}kr(e)}function Oh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var f=31-Je(d),b=1<<f,S=o[f];S===-1?((b&n)===0||(b&a)!==0)&&(o[f]=n1(b,t)):S<=t&&(e.expiredLanes|=b),d&=~b}if(t=Ue,n=ke,n=io(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&$t(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ga(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&$t(a),rl(n)){case 2:case 8:n=fe;break;case 32:n=Me;break;case 268435456:n=vn;break;default:n=Me}return a=Mh.bind(null,e),n=yt(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&$t(a),e.callbackPriority=2,e.callbackNode=null,2}function Mh(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zo()&&e.callbackNode!==n)return null;var a=ke;return a=io(e,e===Ue?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(hh(e,a,t),Oh(e,_t()),e.callbackNode!=null&&e.callbackNode===n?Mh.bind(null,e):null)}function Dh(e,t){if(Zo())return null;hh(e,t,!0)}function Ob(){Gb(function(){(De&6)!==0?yt(W,_b):_h()})}function Yc(){return Bi===0&&(Bi=Su()),Bi}function zh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lo(""+e)}function Rh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Mb(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var d=zh((o[St]||null).action),f=a.submitter;f&&(t=(t=f[St]||null)?zh(t.formAction):f.getAttribute("formAction"),t!==null&&(d=t,f=null));var b=new fo("action","action",null,a,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Bi!==0){var S=f?Rh(o,f):new FormData(o);uc(n,{pending:!0,data:S,method:o.method,action:d},null,S)}}else typeof d=="function"&&(b.preventDefault(),S=f?Rh(o,f):new FormData(o),uc(n,{pending:!0,data:S,method:o.method,action:d},d,S))},currentTarget:o}]})}}for(var Kc=0;Kc<_l.length;Kc++){var Fc=_l[Kc],Db=Fc.toLowerCase(),zb=Fc[0].toUpperCase()+Fc.slice(1);en(Db,"on"+zb)}en(fp,"onAnimationEnd"),en(hp,"onAnimationIteration"),en(gp,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(J1,"onTransitionRun"),en(W1,"onTransitionStart"),en($1,"onTransitionCancel"),en(mp,"onTransitionEnd"),Zi("onMouseEnter",["mouseout","mouseover"]),Zi("onMouseLeave",["mouseout","mouseover"]),Zi("onPointerEnter",["pointerout","pointerover"]),Zi("onPointerLeave",["pointerout","pointerover"]),wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Er));function Lh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var f=a.length-1;0<=f;f--){var b=a[f],S=b.instance,z=b.currentTarget;if(b=b.listener,S!==d&&o.isPropagationStopped())break e;d=b,o.currentTarget=z;try{d(o)}catch(Y){Io(Y)}o.currentTarget=null,d=S}else for(f=0;f<a.length;f++){if(b=a[f],S=b.instance,z=b.currentTarget,b=b.listener,S!==d&&o.isPropagationStopped())break e;d=b,o.currentTarget=z;try{d(o)}catch(Y){Io(Y)}o.currentTarget=null,d=S}}}}function Ne(e,t){var n=t[ol];n===void 0&&(n=t[ol]=new Set);var a=e+"__bubble";n.has(a)||(Bh(t,e,2,!1),n.add(a))}function Xc(e,t,n){var a=0;t&&(a|=4),Bh(n,e,a,t)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Qc(e){if(!e[$o]){e[$o]=!0,Au.forEach(function(n){n!=="selectionchange"&&(Rb.has(n)||Xc(n,!1,e),Xc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$o]||(t[$o]=!0,Xc("selectionchange",!1,t))}}function Bh(e,t,n,a){switch(sg(t)){case 2:var o=lv;break;case 8:o=cv;break;default:o=cd}n=o.bind(null,t,n,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zc(e,t,n,a,o){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var b=a.stateNode.containerInfo;if(b===o)break;if(f===4)for(f=a.return;f!==null;){var S=f.tag;if((S===3||S===4)&&f.stateNode.containerInfo===o)return;f=f.return}for(;b!==null;){if(f=Fi(b),f===null)return;if(S=f.tag,S===5||S===6||S===26||S===27){a=d=f;continue e}b=b.parentNode}}a=a.return}qu(function(){var z=d,Y=gl(n),Q=[];e:{var B=xp.get(e);if(B!==void 0){var H=fo,me=e;switch(e){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":H=A1;break;case"focusin":me="focus",H=wl;break;case"focusout":me="blur",H=wl;break;case"beforeblur":case"afterblur":H=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=M1;break;case fp:case hp:case gp:H=y1;break;case mp:H=z1;break;case"scroll":case"scrollend":H=g1;break;case"wheel":H=L1;break;case"copy":case"cut":case"paste":H=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Xu;break;case"toggle":case"beforetoggle":H=H1}var he=(t&4)!==0,Be=!he&&(e==="scroll"||e==="scrollend"),M=he?B!==null?B+"Capture":null:B;he=[];for(var E=z,D;E!==null;){var K=E;if(D=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||D===null||M===null||(K=Ya(E,M),K!=null&&he.push(Tr(E,K,D))),Be)break;E=E.return}0<he.length&&(B=new H(B,me,null,n,Y),Q.push({event:B,listeners:he}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",B&&n!==hl&&(me=n.relatedTarget||n.fromElement)&&(Fi(me)||me[Ki]))break e;if((H||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,H?(me=n.relatedTarget||n.toElement,H=z,me=me?Fi(me):null,me!==null&&(Be=p(me),he=me.tag,me!==Be||he!==5&&he!==27&&he!==6)&&(me=null)):(H=null,me=z),H!==me)){if(he=Ku,K="onMouseLeave",M="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(he=Xu,K="onPointerLeave",M="onPointerEnter",E="pointer"),Be=H==null?B:Va(H),D=me==null?B:Va(me),B=new he(K,E+"leave",H,n,Y),B.target=Be,B.relatedTarget=D,K=null,Fi(Y)===z&&(he=new he(M,E+"enter",me,n,Y),he.target=D,he.relatedTarget=Be,K=he),Be=K,H&&me)t:{for(he=H,M=me,E=0,D=he;D;D=Ta(D))E++;for(D=0,K=M;K;K=Ta(K))D++;for(;0<E-D;)he=Ta(he),E--;for(;0<D-E;)M=Ta(M),D--;for(;E--;){if(he===M||M!==null&&he===M.alternate)break t;he=Ta(he),M=Ta(M)}he=null}else he=null;H!==null&&Hh(Q,B,H,he,!1),me!==null&&Be!==null&&Hh(Q,Be,me,he,!0)}}e:{if(B=z?Va(z):window,H=B.nodeName&&B.nodeName.toLowerCase(),H==="select"||H==="input"&&B.type==="file")var re=np;else if(ep(B))if(ip)re=X1;else{re=K1;var je=Y1}else H=B.nodeName,!H||H.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&fl(z.elementType)&&(re=np):re=F1;if(re&&(re=re(e,z))){tp(Q,re,n,Y);break e}je&&je(e,B,z),e==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&pl(B,"number",B.value)}switch(je=z?Va(z):window,e){case"focusin":(ep(je)||je.contentEditable==="true")&&(ia=je,Tl=z,$a=null);break;case"focusout":$a=Tl=ia=null;break;case"mousedown":Cl=!0;break;case"contextmenu":case"mouseup":case"dragend":Cl=!1,up(Q,n,Y);break;case"selectionchange":if(Z1)break;case"keydown":case"keyup":up(Q,n,Y)}var de;if(Sl)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else na?Wu(e,n)&&(ge="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ge="onCompositionStart");ge&&(Qu&&n.locale!=="ko"&&(na||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&na&&(de=Vu()):(qn=Y,bl="value"in qn?qn.value:qn.textContent,na=!0)),je=es(z,ge),0<je.length&&(ge=new Fu(ge,e,null,n,Y),Q.push({event:ge,listeners:je}),de?ge.data=de:(de=$u(n),de!==null&&(ge.data=de)))),(de=U1?G1(e,n):P1(e,n))&&(ge=es(z,"onBeforeInput"),0<ge.length&&(je=new Fu("onBeforeInput","beforeinput",null,n,Y),Q.push({event:je,listeners:ge}),je.data=de)),Mb(Q,e,z,n,Y)}Lh(Q,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function es(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,d=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||d===null||(o=Ya(e,n),o!=null&&a.unshift(Tr(e,o,d)),o=Ya(e,t),o!=null&&a.push(Tr(e,o,d))),e.tag===3)return a;e=e.return}return[]}function Ta(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hh(e,t,n,a,o){for(var d=t._reactName,f=[];n!==null&&n!==a;){var b=n,S=b.alternate,z=b.stateNode;if(b=b.tag,S!==null&&S===a)break;b!==5&&b!==26&&b!==27||z===null||(S=z,o?(z=Ya(n,d),z!=null&&f.unshift(Tr(n,z,S))):o||(z=Ya(n,d),z!=null&&f.push(Tr(n,z,S)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Lb=/\r\n?/g,Bb=/\u0000|\uFFFD/g;function Ih(e){return(typeof e=="string"?e:""+e).replace(Lb,`
`).replace(Bb,"")}function Uh(e,t){return t=Ih(t),Ih(e)===t}function ts(){}function Le(e,t,n,a,o,d){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$i(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$i(e,""+a);break;case"className":ro(e,"class",a);break;case"tabIndex":ro(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ro(e,n,a);break;case"style":Gu(e,a,d);break;case"data":if(t!=="object"){ro(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=lo(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&Le(e,t,"name",o.name,o,null),Le(e,t,"formEncType",o.formEncType,o,null),Le(e,t,"formMethod",o.formMethod,o,null),Le(e,t,"formTarget",o.formTarget,o,null)):(Le(e,t,"encType",o.encType,o,null),Le(e,t,"method",o.method,o,null),Le(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=lo(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=ts);break;case"onScroll":a!=null&&Ne("scroll",e);break;case"onScrollEnd":a!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=lo(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),ao(e,"popover",a);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ao(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=f1.get(n)||n,ao(e,n,a))}}function Jc(e,t,n,a,o,d){switch(n){case"style":Gu(e,a,d);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?$i(e,a):(typeof a=="number"||typeof a=="bigint")&&$i(e,""+a);break;case"onScroll":a!=null&&Ne("scroll",e);break;case"onScrollEnd":a!=null&&Ne("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ts);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_u.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),d=e[St]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,o),typeof a=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ao(e,n,a)}}}function gt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var a=!1,o=!1,d;for(d in n)if(n.hasOwnProperty(d)){var f=n[d];if(f!=null)switch(d){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Le(e,t,d,f,n,null)}}o&&Le(e,t,"srcSet",n.srcSet,n,null),a&&Le(e,t,"src",n.src,n,null);return;case"input":Ne("invalid",e);var b=d=f=o=null,S=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var Y=n[a];if(Y!=null)switch(a){case"name":o=Y;break;case"type":f=Y;break;case"checked":S=Y;break;case"defaultChecked":z=Y;break;case"value":d=Y;break;case"defaultValue":b=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(c(137,t));break;default:Le(e,t,a,Y,n,null)}}Bu(e,d,b,S,z,f,o,!1),oo(e);return;case"select":Ne("invalid",e),a=f=d=null;for(o in n)if(n.hasOwnProperty(o)&&(b=n[o],b!=null))switch(o){case"value":d=b;break;case"defaultValue":f=b;break;case"multiple":a=b;default:Le(e,t,o,b,n,null)}t=d,n=f,e.multiple=!!a,t!=null?Wi(e,!!a,t,!1):n!=null&&Wi(e,!!a,n,!0);return;case"textarea":Ne("invalid",e),d=o=a=null;for(f in n)if(n.hasOwnProperty(f)&&(b=n[f],b!=null))switch(f){case"value":a=b;break;case"defaultValue":o=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(c(91));break;default:Le(e,t,f,b,n,null)}Iu(e,a,o,d),oo(e);return;case"option":for(S in n)n.hasOwnProperty(S)&&(a=n[S],a!=null)&&(S==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Le(e,t,S,a,n,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(a=0;a<Er.length;a++)Ne(Er[a],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Le(e,t,z,a,n,null)}return;default:if(fl(t)){for(Y in n)n.hasOwnProperty(Y)&&(a=n[Y],a!==void 0&&Jc(e,t,Y,a,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!=null&&Le(e,t,b,a,n,null))}function Hb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,d=null,f=null,b=null,S=null,z=null,Y=null;for(H in n){var Q=n[H];if(n.hasOwnProperty(H)&&Q!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":S=Q;default:a.hasOwnProperty(H)||Le(e,t,H,null,a,Q)}}for(var B in a){var H=a[B];if(Q=n[B],a.hasOwnProperty(B)&&(H!=null||Q!=null))switch(B){case"type":d=H;break;case"name":o=H;break;case"checked":z=H;break;case"defaultChecked":Y=H;break;case"value":f=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:H!==Q&&Le(e,t,B,H,a,Q)}}ul(e,f,b,S,z,Y,d,o);return;case"select":H=f=b=B=null;for(d in n)if(S=n[d],n.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":H=S;default:a.hasOwnProperty(d)||Le(e,t,d,null,a,S)}for(o in a)if(d=a[o],S=n[o],a.hasOwnProperty(o)&&(d!=null||S!=null))switch(o){case"value":B=d;break;case"defaultValue":b=d;break;case"multiple":f=d;default:d!==S&&Le(e,t,o,d,a,S)}t=b,n=f,a=H,B!=null?Wi(e,!!n,B,!1):!!a!=!!n&&(t!=null?Wi(e,!!n,t,!0):Wi(e,!!n,n?[]:"",!1));return;case"textarea":H=B=null;for(b in n)if(o=n[b],n.hasOwnProperty(b)&&o!=null&&!a.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Le(e,t,b,null,a,o)}for(f in a)if(o=a[f],d=n[f],a.hasOwnProperty(f)&&(o!=null||d!=null))switch(f){case"value":B=o;break;case"defaultValue":H=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:o!==d&&Le(e,t,f,o,a,d)}Hu(e,B,H);return;case"option":for(var me in n)B=n[me],n.hasOwnProperty(me)&&B!=null&&!a.hasOwnProperty(me)&&(me==="selected"?e.selected=!1:Le(e,t,me,null,a,B));for(S in a)B=a[S],H=n[S],a.hasOwnProperty(S)&&B!==H&&(B!=null||H!=null)&&(S==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":Le(e,t,S,B,a,H));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)B=n[he],n.hasOwnProperty(he)&&B!=null&&!a.hasOwnProperty(he)&&Le(e,t,he,null,a,B);for(z in a)if(B=a[z],H=n[z],a.hasOwnProperty(z)&&B!==H&&(B!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Le(e,t,z,B,a,H)}return;default:if(fl(t)){for(var Be in n)B=n[Be],n.hasOwnProperty(Be)&&B!==void 0&&!a.hasOwnProperty(Be)&&Jc(e,t,Be,void 0,a,B);for(Y in a)B=a[Y],H=n[Y],!a.hasOwnProperty(Y)||B===H||B===void 0&&H===void 0||Jc(e,t,Y,B,a,H);return}}for(var M in n)B=n[M],n.hasOwnProperty(M)&&B!=null&&!a.hasOwnProperty(M)&&Le(e,t,M,null,a,B);for(Q in a)B=a[Q],H=n[Q],!a.hasOwnProperty(Q)||B===H||B==null&&H==null||Le(e,t,Q,B,a,H)}var Wc=null,$c=null;function ns(e){return e.nodeType===9?e:e.ownerDocument}function Gh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ph(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ed(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var td=null;function Ib(){var e=window.event;return e&&e.type==="popstate"?e===td?!1:(td=e,!0):(td=null,!1)}var qh=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,Gb=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(e){return Vh.resolve(null).then(e).catch(Pb)}:qh;function Pb(e){setTimeout(function(){throw e})}function ri(e){return e==="head"}function Yh(e,t){var n=t,a=0,o=0;do{var d=n.nextSibling;if(e.removeChild(n),d&&d.nodeType===8)if(n=d.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&Cr(f.documentElement),n&2&&Cr(f.body),n&4)for(n=f.head,Cr(n),f=n.firstChild;f;){var b=f.nextSibling,S=f.nodeName;f[qa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=b}}if(o===0){e.removeChild(d),Lr(t);return}o--}else n==="$"||n==="$?"||n==="$!"?o++:a=n.charCodeAt(0)-48;else a=0;n=d}while(n);Lr(t)}function nd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":nd(n),sl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function qb(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[qa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function Vb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Yb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ad=null;function Kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Fh(e,t,n){switch(t=ns(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Cr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);sl(e)}var Wt=new Map,Xh=new Set;function is(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=F.d;F.d={f:Kb,r:Fb,D:Xb,C:Qb,L:Zb,m:Jb,X:$b,S:Wb,M:ev};function Kb(){var e=zn.f(),t=Xo();return e||t}function Fb(e){var t=Xi(e);t!==null&&t.tag===5&&t.type==="form"?hf(t):zn.r(e)}var Ca=typeof document>"u"?null:document;function Qh(e,t,n){var a=Ca;if(a&&typeof t=="string"&&t){var o=Yt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Xh.has(o)||(Xh.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),gt(t,"link",e),lt(t),a.head.appendChild(t)))}}function Xb(e){zn.D(e),Qh("dns-prefetch",e,null)}function Qb(e,t){zn.C(e,t),Qh("preconnect",e,t)}function Zb(e,t,n){zn.L(e,t,n);var a=Ca;if(a&&e&&t){var o='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Yt(n.imageSizes)+'"]')):o+='[href="'+Yt(e)+'"]';var d=o;switch(t){case"style":d=Aa(e);break;case"script":d=_a(e)}Wt.has(d)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wt.set(d,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(Ar(d))||t==="script"&&a.querySelector(_r(d))||(t=a.createElement("link"),gt(t,"link",e),lt(t),a.head.appendChild(t)))}}function Jb(e,t){zn.m(e,t);var n=Ca;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Yt(a)+'"][href="'+Yt(e)+'"]',d=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=_a(e)}if(!Wt.has(d)&&(e=v({rel:"modulepreload",href:e},t),Wt.set(d,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(_r(d)))return}a=n.createElement("link"),gt(a,"link",e),lt(a),n.head.appendChild(a)}}}function Wb(e,t,n){zn.S(e,t,n);var a=Ca;if(a&&e){var o=Qi(a).hoistableStyles,d=Aa(e);t=t||"default";var f=o.get(d);if(!f){var b={loading:0,preload:null};if(f=a.querySelector(Ar(d)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wt.get(d))&&rd(e,n);var S=f=a.createElement("link");lt(S),gt(S,"link",e),S._p=new Promise(function(z,Y){S.onload=z,S.onerror=Y}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,as(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:b},o.set(d,f)}}}function $b(e,t){zn.X(e,t);var n=Ca;if(n&&e){var a=Qi(n).hoistableScripts,o=_a(e),d=a.get(o);d||(d=n.querySelector(_r(o)),d||(e=v({src:e,async:!0},t),(t=Wt.get(o))&&od(e,t),d=n.createElement("script"),lt(d),gt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(o,d))}}function ev(e,t){zn.M(e,t);var n=Ca;if(n&&e){var a=Qi(n).hoistableScripts,o=_a(e),d=a.get(o);d||(d=n.querySelector(_r(o)),d||(e=v({src:e,async:!0,type:"module"},t),(t=Wt.get(o))&&od(e,t),d=n.createElement("script"),lt(d),gt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(o,d))}}function Zh(e,t,n,a){var o=(o=ie.current)?is(o):null;if(!o)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Aa(n.href),n=Qi(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Aa(n.href);var d=Qi(o).hoistableStyles,f=d.get(e);if(f||(o=o.ownerDocument||o,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,f),(d=o.querySelector(Ar(e)))&&!d._p&&(f.instance=d,f.state.loading=5),Wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wt.set(e,n),d||tv(o,e,n,f.state))),t&&a===null)throw Error(c(528,""));return f}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_a(n),n=Qi(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Aa(e){return'href="'+Yt(e)+'"'}function Ar(e){return'link[rel="stylesheet"]['+e+"]"}function Jh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function tv(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),gt(t,"link",n),lt(t),e.head.appendChild(t))}function _a(e){return'[src="'+Yt(e)+'"]'}function _r(e){return"script[async]"+e}function Wh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(a)return t.instance=a,lt(a),a;var o=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),lt(a),gt(a,"style",o),as(a,n.precedence,e),t.instance=a;case"stylesheet":o=Aa(n.href);var d=e.querySelector(Ar(o));if(d)return t.state.loading|=4,t.instance=d,lt(d),d;a=Jh(n),(o=Wt.get(o))&&rd(a,o),d=(e.ownerDocument||e).createElement("link"),lt(d);var f=d;return f._p=new Promise(function(b,S){f.onload=b,f.onerror=S}),gt(d,"link",a),t.state.loading|=4,as(d,n.precedence,e),t.instance=d;case"script":return d=_a(n.src),(o=e.querySelector(_r(d)))?(t.instance=o,lt(o),o):(a=n,(o=Wt.get(d))&&(a=v({},n),od(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),lt(o),gt(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,as(a,n.precedence,e));return t.instance}function as(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,d=o,f=0;f<a.length;f++){var b=a[f];if(b.dataset.precedence===t)d=b;else if(d!==o)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function rd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function od(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rs=null;function $h(e,t,n){if(rs===null){var a=new Map,o=rs=new Map;o.set(n,a)}else o=rs,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var d=n[o];if(!(d[qa]||d[mt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var f=d.getAttribute(t)||"";f=e+f;var b=a.get(f);b?b.push(d):a.set(f,[d])}}return a}function eg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Or=null;function iv(){}function av(e,t,n){if(Or===null)throw Error(c(475));var a=Or;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Aa(n.href),d=e.querySelector(Ar(o));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=os.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=d,lt(d);return}d=e.ownerDocument||e,n=Jh(n),(o=Wt.get(o))&&rd(n,o),d=d.createElement("link"),lt(d);var f=d;f._p=new Promise(function(b,S){f.onload=b,f.onerror=S}),gt(d,"link",n),t.instance=d}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=os.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function rv(){if(Or===null)throw Error(c(475));var e=Or;return e.stylesheets&&e.count===0&&sd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&sd(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function os(){if(this.count--,this.count===0){if(this.stylesheets)sd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ss=null;function sd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ss=new Map,t.forEach(ov,e),ss=null,os.call(e))}function ov(e,t){if(!(t.state.loading&4)){var n=ss.get(e);if(n)var a=n.get(null);else{n=new Map,ss.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<o.length;d++){var f=o[d];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}o=t.instance,f=o.getAttribute("data-precedence"),d=n.get(f)||a,d===a&&n.set(null,o),n.set(f,o),this.count++,a=os.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),d?d.parentNode.insertBefore(o,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Mr={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function sv(e,t,n,a,o,d,f,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=il(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.hiddenUpdates=il(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=d,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function ng(e,t,n,a,o,d,f,b,S,z,Y,Q){return e=new sv(e,t,n,f,b,S,z,Q),t=1,d===!0&&(t|=24),d=zt(3,null,null,t),e.current=d,d.stateNode=e,t=Pl(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:a,isDehydrated:n,cache:t},Kl(d),e}function ig(e){return e?(e=sa,e):sa}function ag(e,t,n,a,o,d){o=ig(o),a.context===null?a.context=o:a.pendingContext=o,a=Kn(t),a.payload={element:n},d=d===void 0?null:d,d!==null&&(a.callback=d),n=Fn(e,a,t),n!==null&&(It(n,e,t),lr(n,e,t))}function rg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ld(e,t){rg(e,t),(e=e.alternate)&&rg(e,t)}function og(e){if(e.tag===13){var t=oa(e,67108864);t!==null&&It(t,e,67108864),ld(e,67108864)}}var ls=!0;function lv(e,t,n,a){var o=_.T;_.T=null;var d=F.p;try{F.p=2,cd(e,t,n,a)}finally{F.p=d,_.T=o}}function cv(e,t,n,a){var o=_.T;_.T=null;var d=F.p;try{F.p=8,cd(e,t,n,a)}finally{F.p=d,_.T=o}}function cd(e,t,n,a){if(ls){var o=dd(a);if(o===null)Zc(e,t,a,cs,n),lg(e,a);else if(uv(o,e,t,n,a))a.stopPropagation();else if(lg(e,a),t&4&&-1<dv.indexOf(e)){for(;o!==null;){var d=Xi(o);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var f=yi(d.pendingLanes);if(f!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;f;){var S=1<<31-Je(f);b.entanglements[1]|=S,f&=~S}hn(d),(De&6)===0&&(Ko=_t()+500,kr(0))}}break;case 13:b=oa(d,2),b!==null&&It(b,d,2),Xo(),ld(d,2)}if(d=dd(a),d===null&&Zc(e,t,a,cs,n),d===o)break;o=d}o!==null&&a.stopPropagation()}else Zc(e,t,a,null,n)}}function dd(e){return e=gl(e),ud(e)}var cs=null;function ud(e){if(cs=null,e=Fi(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cs=e,null}function sg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nl()){case W:return 2;case fe:return 8;case Me:case Ot:return 32;case vn:return 268435456;default:return 32}default:return 32}}var pd=!1,oi=null,si=null,li=null,Dr=new Map,zr=new Map,ci=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lg(e,t){switch(e){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":li=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function Rr(e,t,n,a,o,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:d,targetContainers:[o]},t!==null&&(t=Xi(t),t!==null&&og(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function uv(e,t,n,a,o){switch(t){case"focusin":return oi=Rr(oi,e,t,n,a,o),!0;case"dragenter":return si=Rr(si,e,t,n,a,o),!0;case"mouseover":return li=Rr(li,e,t,n,a,o),!0;case"pointerover":var d=o.pointerId;return Dr.set(d,Rr(Dr.get(d)||null,e,t,n,a,o)),!0;case"gotpointercapture":return d=o.pointerId,zr.set(d,Rr(zr.get(d)||null,e,t,n,a,o)),!0}return!1}function cg(e){var t=Fi(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,a1(e.priority,function(){if(n.tag===13){var a=Ht();a=al(a);var o=oa(n,a);o!==null&&It(o,n,a),ld(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dd(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);hl=a,n.target.dispatchEvent(a),hl=null}else return t=Xi(n),t!==null&&og(t),e.blockedOn=n,!1;t.shift()}return!0}function dg(e,t,n){ds(e)&&n.delete(t)}function pv(){pd=!1,oi!==null&&ds(oi)&&(oi=null),si!==null&&ds(si)&&(si=null),li!==null&&ds(li)&&(li=null),Dr.forEach(dg),zr.forEach(dg)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,pd||(pd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,pv)))}var ps=null;function ug(e){ps!==e&&(ps=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ps===e&&(ps=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(ud(a||n)===null)continue;break}var d=Xi(n);d!==null&&(e.splice(t,3),t-=3,uc(d,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function Lr(e){function t(S){return us(S,e)}oi!==null&&us(oi,e),si!==null&&us(si,e),li!==null&&us(li,e),Dr.forEach(t),zr.forEach(t);for(var n=0;n<ci.length;n++){var a=ci[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&ci.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],d=n[a+1],f=o[St]||null;if(typeof d=="function")f||ug(n);else if(f){var b=null;if(d&&d.hasAttribute("formAction")){if(o=d,f=d[St]||null)b=f.formAction;else if(ud(o)!==null)continue}else b=f.action;typeof b=="function"?n[a+1]=b:(n.splice(a,3),a-=3),ug(n)}}}function fd(e){this._internalRoot=e}fs.prototype.render=fd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Ht();ag(n,a,e,t,null,null)},fs.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ag(e.current,2,null,e,null,null),Xo(),t[Ki]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ci.length&&t!==0&&t<ci[n].priority;n++);ci.splice(n,0,e),n===0&&cg(e)}};var pg=r.version;if(pg!=="19.1.0")throw Error(c(527,pg,"19.1.0"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var fv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hs.isDisabled&&hs.supportsFiber)try{Mt=hs.inject(fv),nt=hs}catch{}}return Hr.createRoot=function(e,t){if(!u(e))throw Error(c(299));var n=!1,a="",o=Cf,d=Af,f=_f,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=ng(e,1,!1,null,null,n,a,o,d,f,b,null),e[Ki]=t.current,Qc(e),new fd(t)},Hr.hydrateRoot=function(e,t,n){if(!u(e))throw Error(c(299));var a=!1,o="",d=Cf,f=Af,b=_f,S=null,z=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(z=n.formState)),t=ng(e,1,!0,t,n??null,a,o,d,f,b,S,z),t.context=ig(null),n=t.current,a=Ht(),a=al(a),o=Kn(a),o.callback=null,Fn(n,o,a),n=a,t.current.lanes=n,Pa(t,n),hn(t),e[Ki]=t.current,Qc(e),new fs(t)},Hr.version="19.1.0",Hr}var jg;function Sv(){if(jg)return gd.exports;jg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),gd.exports=jv(),gd.exports}var Nv=Sv();function kv(i,r){if(i instanceof RegExp)return{keys:!1,pattern:i};var s,c,u,p,h=[],m="",x=i.split("/");for(x[0]||x.shift();u=x.shift();)s=u[0],s==="*"?(h.push(s),m+=u[1]==="?"?"(?:/(.*))?":"/(.*)"):s===":"?(c=u.indexOf("?",1),p=u.indexOf(".",1),h.push(u.substring(1,~c?c:~p?p:u.length)),m+=~c&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(m+=(~c?"?":"")+"\\"+u.substring(p))):m+="/"+u;return{keys:h,pattern:new RegExp("^"+m+(r?"(?=$|/)":"/?$"),"i")}}var y=Ls();const hi=ym(y),Bs=gv({__proto__:null,default:hi},[y]);var yd={exports:{}},wd={};var Sg;function Ev(){if(Sg)return wd;Sg=1;var i=Ls();function r(j,N){return j===N&&(j!==0||1/j===1/N)||j!==j&&N!==N}var s=typeof Object.is=="function"?Object.is:r,c=i.useState,u=i.useEffect,p=i.useLayoutEffect,h=i.useDebugValue;function m(j,N){var k=N(),O=c({inst:{value:k,getSnapshot:N}}),C=O[0].inst,T=O[1];return p(function(){C.value=k,C.getSnapshot=N,x(C)&&T({inst:C})},[j,k,N]),u(function(){return x(C)&&T({inst:C}),j(function(){x(C)&&T({inst:C})})},[j]),h(k),k}function x(j){var N=j.getSnapshot;j=j.value;try{var k=N();return!s(j,k)}catch{return!0}}function g(j,N){return N()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:m;return wd.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:v,wd}var Ng;function Tv(){return Ng||(Ng=1,yd.exports=Ev()),yd.exports}var Cv=Tv();const Av=Bs.useInsertionEffect,_v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ov=_v?y.useLayoutEffect:y.useEffect,Mv=Av||Ov,jm=i=>{const r=y.useRef([i,(...s)=>r[0](...s)]).current;return Mv(()=>{r[0]=i}),r[1]},Dv="popstate",Wd="pushState",$d="replaceState",zv="hashchange",kg=[Dv,Wd,$d,zv],Rv=i=>{for(const r of kg)addEventListener(r,i);return()=>{for(const r of kg)removeEventListener(r,i)}},Sm=(i,r)=>Cv.useSyncExternalStore(Rv,i,r),Eg=()=>location.search,Lv=({ssrSearch:i}={})=>Sm(Eg,i!=null?()=>i:Eg),Tg=()=>location.pathname,Bv=({ssrPath:i}={})=>Sm(Tg,i!=null?()=>i:Tg),Hv=(i,{replace:r=!1,state:s=null}={})=>history[r?$d:Wd](s,"",i),Iv=(i={})=>[Bv(i),Hv],Cg=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Cg]>"u"){for(const i of[Wd,$d]){const r=history[i];history[i]=function(){const s=r.apply(this,arguments),c=new Event(i);return c.arguments=arguments,dispatchEvent(c),s}}Object.defineProperty(window,Cg,{value:!0})}const Uv=(i,r)=>r.toLowerCase().indexOf(i.toLowerCase())?"~"+r:r.slice(i.length)||"/",Nm=(i="")=>i==="/"?"":i,Gv=(i,r)=>i[0]==="~"?i.slice(1):Nm(r)+i,Pv=(i="",r)=>Uv(Ag(Nm(i)),Ag(r)),Ag=i=>{try{return decodeURI(i)}catch{return i}},km={hook:Iv,searchHook:Lv,parser:kv,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:i=>i,aroundNav:(i,r,s)=>i(r,s)},Em=y.createContext(km),Xr=()=>y.useContext(Em),Tm={},Cm=y.createContext(Tm),qv=()=>y.useContext(Cm),Hs=i=>{const[r,s]=i.hook(i);return[Pv(i.base,r),jm((c,u)=>i.aroundNav(s,Gv(c,i.base),u))]},Am=()=>Hs(Xr()),_m=(i,r,s,c)=>{const{pattern:u,keys:p}=r instanceof RegExp?{keys:!1,pattern:r}:i(r||"*",c),h=u.exec(s)||[],[m,...x]=h;return m!==void 0?[!0,(()=>{const g=p!==!1?Object.fromEntries(p.map((j,N)=>[j,x[N]])):h.groups;let v={...x};return g&&Object.assign(v,g),v})(),...c?[m]:[]]:[!1,null]},Om=({children:i,...r})=>{const s=Xr(),c=r.hook?km:s;let u=c;const[p,h=r.ssrSearch??""]=r.ssrPath?.split("?")??[];p&&(r.ssrSearch=h,r.ssrPath=p),r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let m=y.useRef({}),x=m.current,g=x;for(let v in c){const j=v==="base"?c[v]+(r[v]??""):r[v]??c[v];x===g&&j!==g[v]&&(m.current=g={...g}),g[v]=j,(j!==c[v]||j!==u[v])&&(u=g)}return y.createElement(Em.Provider,{value:u,children:i})},_g=({children:i,component:r},s)=>r?y.createElement(r,{params:s}):typeof i=="function"?i(s):i,Vv=i=>{let r=y.useRef(Tm);const s=r.current;return r.current=Object.keys(i).length!==Object.keys(s).length||Object.entries(i).some(([c,u])=>u!==s[c])?i:s},ui=({path:i,nest:r,match:s,...c})=>{const u=Xr(),[p]=Hs(u),[h,m,x]=s??_m(u.parser,i,p,r),g=Vv({...qv(),...m});if(!h)return null;const v=x?y.createElement(Om,{base:x},_g(c,g)):_g(c,g);return y.createElement(Cm.Provider,{value:g,children:v})},gi=y.forwardRef((i,r)=>{const s=Xr(),[c,u]=Hs(s),{to:p="",href:h=p,onClick:m,asChild:x,children:g,className:v,replace:j,state:N,transition:k,...O}=i,C=jm(R=>{R.ctrlKey||R.metaKey||R.altKey||R.shiftKey||R.button!==0||(m?.(R),R.defaultPrevented||(R.preventDefault(),u(h,i)))}),T=s.hrefs(h[0]==="~"?h.slice(1):s.base+h,s);return x&&y.isValidElement(g)?y.cloneElement(g,{onClick:C,href:T}):y.createElement("a",{...O,onClick:C,href:T,className:v?.call?v(c===h):v,children:g,ref:r})}),Mm=i=>Array.isArray(i)?i.flatMap(r=>Mm(r&&r.type===y.Fragment?r.props.children:r)):[i],Yv=({children:i,location:r})=>{const s=Xr(),[c]=Hs(s);for(const u of Mm(i)){let p=0;if(y.isValidElement(u)&&(p=_m(s.parser,u.props.path,r||c,u.props.nest))[0])return y.cloneElement(u,{match:p})}return null};var Is=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(i){return this.listeners.add(i),this.onSubscribe(),()=>{this.listeners.delete(i),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Kv={setTimeout:(i,r)=>setTimeout(i,r),clearTimeout:i=>clearTimeout(i),setInterval:(i,r)=>setInterval(i,r),clearInterval:i=>clearInterval(i)},Fv=class{#e=Kv;#n=!1;setTimeoutProvider(i){this.#e=i}setTimeout(i,r){return this.#e.setTimeout(i,r)}clearTimeout(i){this.#e.clearTimeout(i)}setInterval(i,r){return this.#e.setInterval(i,r)}clearInterval(i){this.#e.clearInterval(i)}},Dd=new Fv;function Xv(i){setTimeout(i,0)}var Us=typeof window>"u"||"Deno"in globalThis;function an(){}function Qv(i,r){return typeof i=="function"?i(r):i}function Zv(i){return typeof i=="number"&&i>=0&&i!==1/0}function Jv(i,r){return Math.max(i+(r||0)-Date.now(),0)}function zd(i,r){return typeof i=="function"?i(r):i}function Wv(i,r){return typeof i=="function"?i(r):i}function Og(i,r){const{type:s="all",exact:c,fetchStatus:u,predicate:p,queryKey:h,stale:m}=i;if(h){if(c){if(r.queryHash!==eu(h,r.options))return!1}else if(!Yr(r.queryKey,h))return!1}if(s!=="all"){const x=r.isActive();if(s==="active"&&!x||s==="inactive"&&x)return!1}return!(typeof m=="boolean"&&r.isStale()!==m||u&&u!==r.state.fetchStatus||p&&!p(r))}function Mg(i,r){const{exact:s,status:c,predicate:u,mutationKey:p}=i;if(p){if(!r.options.mutationKey)return!1;if(s){if(Vr(r.options.mutationKey)!==Vr(p))return!1}else if(!Yr(r.options.mutationKey,p))return!1}return!(c&&r.state.status!==c||u&&!u(r))}function eu(i,r){return(r?.queryKeyHashFn||Vr)(i)}function Vr(i){return JSON.stringify(i,(r,s)=>Rd(s)?Object.keys(s).sort().reduce((c,u)=>(c[u]=s[u],c),{}):s)}function Yr(i,r){return i===r?!0:typeof i!=typeof r?!1:i&&r&&typeof i=="object"&&typeof r=="object"?Object.keys(r).every(s=>Yr(i[s],r[s])):!1}var $v=Object.prototype.hasOwnProperty;function Dm(i,r,s=0){if(i===r)return i;if(s>500)return r;const c=Dg(i)&&Dg(r);if(!c&&!(Rd(i)&&Rd(r)))return r;const p=(c?i:Object.keys(i)).length,h=c?r:Object.keys(r),m=h.length,x=c?new Array(m):{};let g=0;for(let v=0;v<m;v++){const j=c?v:h[v],N=i[j],k=r[j];if(N===k){x[j]=N,(c?v<p:$v.call(i,j))&&g++;continue}if(N===null||k===null||typeof N!="object"||typeof k!="object"){x[j]=k;continue}const O=Dm(N,k,s+1);x[j]=O,O===N&&g++}return p===m&&g===p?i:x}function Dg(i){return Array.isArray(i)&&i.length===Object.keys(i).length}function Rd(i){if(!zg(i))return!1;const r=i.constructor;if(r===void 0)return!0;const s=r.prototype;return!(!zg(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(i)!==Object.prototype)}function zg(i){return Object.prototype.toString.call(i)==="[object Object]"}function ey(i){return new Promise(r=>{Dd.setTimeout(r,i)})}function ty(i,r,s){return typeof s.structuralSharing=="function"?s.structuralSharing(i,r):s.structuralSharing!==!1?Dm(i,r):r}function ny(i,r,s=0){const c=[...i,r];return s&&c.length>s?c.slice(1):c}function iy(i,r,s=0){const c=[r,...i];return s&&c.length>s?c.slice(0,-1):c}var tu=Symbol();function zm(i,r){return!i.queryFn&&r?.initialPromise?()=>r.initialPromise:!i.queryFn||i.queryFn===tu?()=>Promise.reject(new Error(`Missing queryFn: '${i.queryHash}'`)):i.queryFn}function ay(i,r,s){let c=!1,u;return Object.defineProperty(i,"signal",{enumerable:!0,get:()=>(u??=r(),c||(c=!0,u.aborted?s():u.addEventListener("abort",s,{once:!0})),u)}),i}var ry=class extends Is{#e;#n;#t;constructor(){super(),this.#t=i=>{if(!Us&&window.addEventListener){const r=()=>i();return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}}}onSubscribe(){this.#n||this.setEventListener(this.#t)}onUnsubscribe(){this.hasListeners()||(this.#n?.(),this.#n=void 0)}setEventListener(i){this.#t=i,this.#n?.(),this.#n=i(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(i){this.#e!==i&&(this.#e=i,this.onFocus())}onFocus(){const i=this.isFocused();this.listeners.forEach(r=>{r(i)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Rm=new ry;function oy(){let i,r;const s=new Promise((u,p)=>{i=u,r=p});s.status="pending",s.catch(()=>{});function c(u){Object.assign(s,u),delete s.resolve,delete s.reject}return s.resolve=u=>{c({status:"fulfilled",value:u}),i(u)},s.reject=u=>{c({status:"rejected",reason:u}),r(u)},s}var sy=Xv;function ly(){let i=[],r=0,s=m=>{m()},c=m=>{m()},u=sy;const p=m=>{r?i.push(m):u(()=>{s(m)})},h=()=>{const m=i;i=[],m.length&&u(()=>{c(()=>{m.forEach(x=>{s(x)})})})};return{batch:m=>{let x;r++;try{x=m()}finally{r--,r||h()}return x},batchCalls:m=>(...x)=>{p(()=>{m(...x)})},schedule:p,setNotifyFunction:m=>{s=m},setBatchNotifyFunction:m=>{c=m},setScheduler:m=>{u=m}}}var jt=ly(),cy=class extends Is{#e=!0;#n;#t;constructor(){super(),this.#t=i=>{if(!Us&&window.addEventListener){const r=()=>i(!0),s=()=>i(!1);return window.addEventListener("online",r,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#n||this.setEventListener(this.#t)}onUnsubscribe(){this.hasListeners()||(this.#n?.(),this.#n=void 0)}setEventListener(i){this.#t=i,this.#n?.(),this.#n=i(this.setOnline.bind(this))}setOnline(i){this.#e!==i&&(this.#e=i,this.listeners.forEach(s=>{s(i)}))}isOnline(){return this.#e}},Ts=new cy;function dy(i){return Math.min(1e3*2**i,3e4)}function Lm(i){return(i??"online")==="online"?Ts.isOnline():!0}var Ld=class extends Error{constructor(i){super("CancelledError"),this.revert=i?.revert,this.silent=i?.silent}};function Bm(i){let r=!1,s=0,c;const u=oy(),p=()=>u.status!=="pending",h=C=>{if(!p()){const T=new Ld(C);N(T),i.onCancel?.(T)}},m=()=>{r=!0},x=()=>{r=!1},g=()=>Rm.isFocused()&&(i.networkMode==="always"||Ts.isOnline())&&i.canRun(),v=()=>Lm(i.networkMode)&&i.canRun(),j=C=>{p()||(c?.(),u.resolve(C))},N=C=>{p()||(c?.(),u.reject(C))},k=()=>new Promise(C=>{c=T=>{(p()||g())&&C(T)},i.onPause?.()}).then(()=>{c=void 0,p()||i.onContinue?.()}),O=()=>{if(p())return;let C;const T=s===0?i.initialPromise:void 0;try{C=T??i.fn()}catch(R){C=Promise.reject(R)}Promise.resolve(C).then(j).catch(R=>{if(p())return;const A=i.retry??(Us?0:3),L=i.retryDelay??dy,U=typeof L=="function"?L(s,R):L,G=A===!0||typeof A=="number"&&s<A||typeof A=="function"&&A(s,R);if(r||!G){N(R);return}s++,i.onFail?.(s,R),ey(U).then(()=>g()?void 0:k()).then(()=>{r?N(R):O()})})};return{promise:u,status:()=>u.status,cancel:h,continue:()=>(c?.(),u),cancelRetry:m,continueRetry:x,canStart:v,start:()=>(v()?O():k().then(O),u)}}var Hm=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Zv(this.gcTime)&&(this.#e=Dd.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(i){this.gcTime=Math.max(this.gcTime||0,i??(Us?1/0:300*1e3))}clearGcTimeout(){this.#e&&(Dd.clearTimeout(this.#e),this.#e=void 0)}},uy=class extends Hm{#e;#n;#t;#a;#i;#o;#s;constructor(i){super(),this.#s=!1,this.#o=i.defaultOptions,this.setOptions(i.options),this.observers=[],this.#a=i.client,this.#t=this.#a.getQueryCache(),this.queryKey=i.queryKey,this.queryHash=i.queryHash,this.#e=Lg(this.options),this.state=i.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(i){if(this.options={...this.#o,...i},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=Lg(this.options);r.data!==void 0&&(this.setState(Rg(r.data,r.dataUpdatedAt)),this.#e=r)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#t.remove(this)}setData(i,r){const s=ty(this.state.data,i,this.options);return this.#r({data:s,type:"success",dataUpdatedAt:r?.updatedAt,manual:r?.manual}),s}setState(i,r){this.#r({type:"setState",state:i,setStateOptions:r})}cancel(i){const r=this.#i?.promise;return this.#i?.cancel(i),r?r.then(an).catch(an):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(i=>Wv(i.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===tu||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(i=>zd(i.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(i=>i.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(i=0){return this.state.data===void 0?!0:i==="static"?!1:this.state.isInvalidated?!0:!Jv(this.state.dataUpdatedAt,i)}onFocus(){this.observers.find(r=>r.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(r=>r.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(i){this.observers.includes(i)||(this.observers.push(i),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",query:this,observer:i}))}removeObserver(i){this.observers.includes(i)&&(this.observers=this.observers.filter(r=>r!==i),this.observers.length||(this.#i&&(this.#s?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#t.notify({type:"observerRemoved",query:this,observer:i}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#r({type:"invalidate"})}async fetch(i,r){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&r?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(i&&this.setOptions(i),!this.options.queryFn){const m=this.observers.find(x=>x.options.queryFn);m&&this.setOptions(m.options)}const s=new AbortController,c=m=>{Object.defineProperty(m,"signal",{enumerable:!0,get:()=>(this.#s=!0,s.signal)})},u=()=>{const m=zm(this.options,r),g=(()=>{const v={client:this.#a,queryKey:this.queryKey,meta:this.meta};return c(v),v})();return this.#s=!1,this.options.persister?this.options.persister(m,g,this):m(g)},h=(()=>{const m={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:u};return c(m),m})();this.options.behavior?.onFetch(h,this),this.#n=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==h.fetchOptions?.meta)&&this.#r({type:"fetch",meta:h.fetchOptions?.meta}),this.#i=Bm({initialPromise:r?.initialPromise,fn:h.fetchFn,onCancel:m=>{m instanceof Ld&&m.revert&&this.setState({...this.#n,fetchStatus:"idle"}),s.abort()},onFail:(m,x)=>{this.#r({type:"failed",failureCount:m,error:x})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0});try{const m=await this.#i.start();if(m===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(m),this.#t.config.onSuccess?.(m,this),this.#t.config.onSettled?.(m,this.state.error,this),m}catch(m){if(m instanceof Ld){if(m.silent)return this.#i.promise;if(m.revert){if(this.state.data===void 0)throw m;return this.state.data}}throw this.#r({type:"error",error:m}),this.#t.config.onError?.(m,this),this.#t.config.onSettled?.(this.state.data,m,this),m}finally{this.scheduleGc()}}#r(i){const r=s=>{switch(i.type){case"failed":return{...s,fetchFailureCount:i.failureCount,fetchFailureReason:i.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...py(s.data,this.options),fetchMeta:i.meta??null};case"success":const c={...s,...Rg(i.data,i.dataUpdatedAt),dataUpdateCount:s.dataUpdateCount+1,...!i.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#n=i.manual?c:void 0,c;case"error":const u=i.error;return{...s,error:u,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...i.state}}};this.state=r(this.state),jt.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),this.#t.notify({query:this,type:"updated",action:i})})}};function py(i,r){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Lm(r.networkMode)?"fetching":"paused",...i===void 0&&{error:null,status:"pending"}}}function Rg(i,r){return{data:i,dataUpdatedAt:r??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Lg(i){const r=typeof i.initialData=="function"?i.initialData():i.initialData,s=r!==void 0,c=s?typeof i.initialDataUpdatedAt=="function"?i.initialDataUpdatedAt():i.initialDataUpdatedAt:0;return{data:r,dataUpdateCount:0,dataUpdatedAt:s?c??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}function Bg(i){return{onFetch:(r,s)=>{const c=r.options,u=r.fetchOptions?.meta?.fetchMore?.direction,p=r.state.data?.pages||[],h=r.state.data?.pageParams||[];let m={pages:[],pageParams:[]},x=0;const g=async()=>{let v=!1;const j=O=>{ay(O,()=>r.signal,()=>v=!0)},N=zm(r.options,r.fetchOptions),k=async(O,C,T)=>{if(v)return Promise.reject();if(C==null&&O.pages.length)return Promise.resolve(O);const A=(()=>{const I={client:r.client,queryKey:r.queryKey,pageParam:C,direction:T?"backward":"forward",meta:r.options.meta};return j(I),I})(),L=await N(A),{maxPages:U}=r.options,G=T?iy:ny;return{pages:G(O.pages,L,U),pageParams:G(O.pageParams,C,U)}};if(u&&p.length){const O=u==="backward",C=O?fy:Hg,T={pages:p,pageParams:h},R=C(c,T);m=await k(T,R,O)}else{const O=i??p.length;do{const C=x===0?h[0]??c.initialPageParam:Hg(c,m);if(x>0&&C==null)break;m=await k(m,C),x++}while(x<O)}return m};r.options.persister?r.fetchFn=()=>r.options.persister?.(g,{client:r.client,queryKey:r.queryKey,meta:r.options.meta,signal:r.signal},s):r.fetchFn=g}}}function Hg(i,{pages:r,pageParams:s}){const c=r.length-1;return r.length>0?i.getNextPageParam(r[c],r,s[c],s):void 0}function fy(i,{pages:r,pageParams:s}){return r.length>0?i.getPreviousPageParam?.(r[0],r,s[0],s):void 0}var hy=class extends Hm{#e;#n;#t;#a;constructor(i){super(),this.#e=i.client,this.mutationId=i.mutationId,this.#t=i.mutationCache,this.#n=[],this.state=i.state||gy(),this.setOptions(i.options),this.scheduleGc()}setOptions(i){this.options=i,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(i){this.#n.includes(i)||(this.#n.push(i),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:i}))}removeObserver(i){this.#n=this.#n.filter(r=>r!==i),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:i})}optionalRemove(){this.#n.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(i){const r=()=>{this.#i({type:"continue"})},s={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#a=Bm({fn:()=>this.options.mutationFn?this.options.mutationFn(i,s):Promise.reject(new Error("No mutationFn found")),onFail:(p,h)=>{this.#i({type:"failed",failureCount:p,error:h})},onPause:()=>{this.#i({type:"pause"})},onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const c=this.state.status==="pending",u=!this.#a.canStart();try{if(c)r();else{this.#i({type:"pending",variables:i,isPaused:u}),this.#t.config.onMutate&&await this.#t.config.onMutate(i,this,s);const h=await this.options.onMutate?.(i,s);h!==this.state.context&&this.#i({type:"pending",context:h,variables:i,isPaused:u})}const p=await this.#a.start();return await this.#t.config.onSuccess?.(p,i,this.state.context,this,s),await this.options.onSuccess?.(p,i,this.state.context,s),await this.#t.config.onSettled?.(p,null,this.state.variables,this.state.context,this,s),await this.options.onSettled?.(p,null,i,this.state.context,s),this.#i({type:"success",data:p}),p}catch(p){try{await this.#t.config.onError?.(p,i,this.state.context,this,s)}catch(h){Promise.reject(h)}try{await this.options.onError?.(p,i,this.state.context,s)}catch(h){Promise.reject(h)}try{await this.#t.config.onSettled?.(void 0,p,this.state.variables,this.state.context,this,s)}catch(h){Promise.reject(h)}try{await this.options.onSettled?.(void 0,p,i,this.state.context,s)}catch(h){Promise.reject(h)}throw this.#i({type:"error",error:p}),p}finally{this.#t.runNext(this)}}#i(i){const r=s=>{switch(i.type){case"failed":return{...s,failureCount:i.failureCount,failureReason:i.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:i.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:i.isPaused,status:"pending",variables:i.variables,submittedAt:Date.now()};case"success":return{...s,data:i.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:i.error,failureCount:s.failureCount+1,failureReason:i.error,isPaused:!1,status:"error"}}};this.state=r(this.state),jt.batch(()=>{this.#n.forEach(s=>{s.onMutationUpdate(i)}),this.#t.notify({mutation:this,type:"updated",action:i})})}};function gy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var my=class extends Is{constructor(i={}){super(),this.config=i,this.#e=new Set,this.#n=new Map,this.#t=0}#e;#n;#t;build(i,r,s){const c=new hy({client:i,mutationCache:this,mutationId:++this.#t,options:i.defaultMutationOptions(r),state:s});return this.add(c),c}add(i){this.#e.add(i);const r=gs(i);if(typeof r=="string"){const s=this.#n.get(r);s?s.push(i):this.#n.set(r,[i])}this.notify({type:"added",mutation:i})}remove(i){if(this.#e.delete(i)){const r=gs(i);if(typeof r=="string"){const s=this.#n.get(r);if(s)if(s.length>1){const c=s.indexOf(i);c!==-1&&s.splice(c,1)}else s[0]===i&&this.#n.delete(r)}}this.notify({type:"removed",mutation:i})}canRun(i){const r=gs(i);if(typeof r=="string"){const c=this.#n.get(r)?.find(u=>u.state.status==="pending");return!c||c===i}else return!0}runNext(i){const r=gs(i);return typeof r=="string"?this.#n.get(r)?.find(c=>c!==i&&c.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){jt.batch(()=>{this.#e.forEach(i=>{this.notify({type:"removed",mutation:i})}),this.#e.clear(),this.#n.clear()})}getAll(){return Array.from(this.#e)}find(i){const r={exact:!0,...i};return this.getAll().find(s=>Mg(r,s))}findAll(i={}){return this.getAll().filter(r=>Mg(i,r))}notify(i){jt.batch(()=>{this.listeners.forEach(r=>{r(i)})})}resumePausedMutations(){const i=this.getAll().filter(r=>r.state.isPaused);return jt.batch(()=>Promise.all(i.map(r=>r.continue().catch(an))))}};function gs(i){return i.options.scope?.id}var xy=class extends Is{constructor(i={}){super(),this.config=i,this.#e=new Map}#e;build(i,r,s){const c=r.queryKey,u=r.queryHash??eu(c,r);let p=this.get(u);return p||(p=new uy({client:i,queryKey:c,queryHash:u,options:i.defaultQueryOptions(r),state:s,defaultOptions:i.getQueryDefaults(c)}),this.add(p)),p}add(i){this.#e.has(i.queryHash)||(this.#e.set(i.queryHash,i),this.notify({type:"added",query:i}))}remove(i){const r=this.#e.get(i.queryHash);r&&(i.destroy(),r===i&&this.#e.delete(i.queryHash),this.notify({type:"removed",query:i}))}clear(){jt.batch(()=>{this.getAll().forEach(i=>{this.remove(i)})})}get(i){return this.#e.get(i)}getAll(){return[...this.#e.values()]}find(i){const r={exact:!0,...i};return this.getAll().find(s=>Og(r,s))}findAll(i={}){const r=this.getAll();return Object.keys(i).length>0?r.filter(s=>Og(i,s)):r}notify(i){jt.batch(()=>{this.listeners.forEach(r=>{r(i)})})}onFocus(){jt.batch(()=>{this.getAll().forEach(i=>{i.onFocus()})})}onOnline(){jt.batch(()=>{this.getAll().forEach(i=>{i.onOnline()})})}},by=class{#e;#n;#t;#a;#i;#o;#s;#r;constructor(i={}){this.#e=i.queryCache||new xy,this.#n=i.mutationCache||new my,this.#t=i.defaultOptions||{},this.#a=new Map,this.#i=new Map,this.#o=0}mount(){this.#o++,this.#o===1&&(this.#s=Rm.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#r=Ts.subscribe(async i=>{i&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#o--,this.#o===0&&(this.#s?.(),this.#s=void 0,this.#r?.(),this.#r=void 0)}isFetching(i){return this.#e.findAll({...i,fetchStatus:"fetching"}).length}isMutating(i){return this.#n.findAll({...i,status:"pending"}).length}getQueryData(i){const r=this.defaultQueryOptions({queryKey:i});return this.#e.get(r.queryHash)?.state.data}ensureQueryData(i){const r=this.defaultQueryOptions(i),s=this.#e.build(this,r),c=s.state.data;return c===void 0?this.fetchQuery(i):(i.revalidateIfStale&&s.isStaleByTime(zd(r.staleTime,s))&&this.prefetchQuery(r),Promise.resolve(c))}getQueriesData(i){return this.#e.findAll(i).map(({queryKey:r,state:s})=>{const c=s.data;return[r,c]})}setQueryData(i,r,s){const c=this.defaultQueryOptions({queryKey:i}),p=this.#e.get(c.queryHash)?.state.data,h=Qv(r,p);if(h!==void 0)return this.#e.build(this,c).setData(h,{...s,manual:!0})}setQueriesData(i,r,s){return jt.batch(()=>this.#e.findAll(i).map(({queryKey:c})=>[c,this.setQueryData(c,r,s)]))}getQueryState(i){const r=this.defaultQueryOptions({queryKey:i});return this.#e.get(r.queryHash)?.state}removeQueries(i){const r=this.#e;jt.batch(()=>{r.findAll(i).forEach(s=>{r.remove(s)})})}resetQueries(i,r){const s=this.#e;return jt.batch(()=>(s.findAll(i).forEach(c=>{c.reset()}),this.refetchQueries({type:"active",...i},r)))}cancelQueries(i,r={}){const s={revert:!0,...r},c=jt.batch(()=>this.#e.findAll(i).map(u=>u.cancel(s)));return Promise.all(c).then(an).catch(an)}invalidateQueries(i,r={}){return jt.batch(()=>(this.#e.findAll(i).forEach(s=>{s.invalidate()}),i?.refetchType==="none"?Promise.resolve():this.refetchQueries({...i,type:i?.refetchType??i?.type??"active"},r)))}refetchQueries(i,r={}){const s={...r,cancelRefetch:r.cancelRefetch??!0},c=jt.batch(()=>this.#e.findAll(i).filter(u=>!u.isDisabled()&&!u.isStatic()).map(u=>{let p=u.fetch(void 0,s);return s.throwOnError||(p=p.catch(an)),u.state.fetchStatus==="paused"?Promise.resolve():p}));return Promise.all(c).then(an)}fetchQuery(i){const r=this.defaultQueryOptions(i);r.retry===void 0&&(r.retry=!1);const s=this.#e.build(this,r);return s.isStaleByTime(zd(r.staleTime,s))?s.fetch(r):Promise.resolve(s.state.data)}prefetchQuery(i){return this.fetchQuery(i).then(an).catch(an)}fetchInfiniteQuery(i){return i.behavior=Bg(i.pages),this.fetchQuery(i)}prefetchInfiniteQuery(i){return this.fetchInfiniteQuery(i).then(an).catch(an)}ensureInfiniteQueryData(i){return i.behavior=Bg(i.pages),this.ensureQueryData(i)}resumePausedMutations(){return Ts.isOnline()?this.#n.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#n}getDefaultOptions(){return this.#t}setDefaultOptions(i){this.#t=i}setQueryDefaults(i,r){this.#a.set(Vr(i),{queryKey:i,defaultOptions:r})}getQueryDefaults(i){const r=[...this.#a.values()],s={};return r.forEach(c=>{Yr(i,c.queryKey)&&Object.assign(s,c.defaultOptions)}),s}setMutationDefaults(i,r){this.#i.set(Vr(i),{mutationKey:i,defaultOptions:r})}getMutationDefaults(i){const r=[...this.#i.values()],s={};return r.forEach(c=>{Yr(i,c.mutationKey)&&Object.assign(s,c.defaultOptions)}),s}defaultQueryOptions(i){if(i._defaulted)return i;const r={...this.#t.queries,...this.getQueryDefaults(i.queryKey),...i,_defaulted:!0};return r.queryHash||(r.queryHash=eu(r.queryKey,r)),r.refetchOnReconnect===void 0&&(r.refetchOnReconnect=r.networkMode!=="always"),r.throwOnError===void 0&&(r.throwOnError=!!r.suspense),!r.networkMode&&r.persister&&(r.networkMode="offlineFirst"),r.queryFn===tu&&(r.enabled=!1),r}defaultMutationOptions(i){return i?._defaulted?i:{...this.#t.mutations,...i?.mutationKey&&this.getMutationDefaults(i.mutationKey),...i,_defaulted:!0}}clear(){this.#e.clear(),this.#n.clear()}},vy=y.createContext(void 0),yy=({client:i,children:r})=>(y.useEffect(()=>(i.mount(),()=>{i.unmount()}),[i]),l.jsx(vy.Provider,{value:i,children:r}));const wy=1,jy=1e6;let jd=0;function Sy(){return jd=(jd+1)%Number.MAX_SAFE_INTEGER,jd.toString()}const Sd=new Map,Ig=i=>{if(Sd.has(i))return;const r=setTimeout(()=>{Sd.delete(i),qr({type:"REMOVE_TOAST",toastId:i})},jy);Sd.set(i,r)},Ny=(i,r)=>{switch(r.type){case"ADD_TOAST":return{...i,toasts:[r.toast,...i.toasts].slice(0,wy)};case"UPDATE_TOAST":return{...i,toasts:i.toasts.map(s=>s.id===r.toast.id?{...s,...r.toast}:s)};case"DISMISS_TOAST":{const{toastId:s}=r;return s?Ig(s):i.toasts.forEach(c=>{Ig(c.id)}),{...i,toasts:i.toasts.map(c=>c.id===s||s===void 0?{...c,open:!1}:c)}}case"REMOVE_TOAST":return r.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(s=>s.id!==r.toastId)}}},ws=[];let js={toasts:[]};function qr(i){js=Ny(js,i),ws.forEach(r=>{r(js)})}function ky({...i}){const r=Sy(),s=u=>qr({type:"UPDATE_TOAST",toast:{...u,id:r}}),c=()=>qr({type:"DISMISS_TOAST",toastId:r});return qr({type:"ADD_TOAST",toast:{...i,id:r,open:!0,onOpenChange:u=>{u||c()}}}),{id:r,dismiss:c,update:s}}function Un(){const[i,r]=y.useState(js);return y.useEffect(()=>(ws.push(r),()=>{const s=ws.indexOf(r);s>-1&&ws.splice(s,1)}),[i]),{...i,toast:ky,dismiss:s=>qr({type:"DISMISS_TOAST",toastId:s})}}var Gs=wm();const Ey=ym(Gs);function Oe(i,r,{checkForDefaultPrevented:s=!0}={}){return function(u){if(i?.(u),s===!1||!u.defaultPrevented)return r?.(u)}}function Ug(i,r){if(typeof i=="function")return i(r);i!=null&&(i.current=r)}function nu(...i){return r=>{let s=!1;const c=i.map(u=>{const p=Ug(u,r);return!s&&typeof p=="function"&&(s=!0),p});if(s)return()=>{for(let u=0;u<c.length;u++){const p=c[u];typeof p=="function"?p():Ug(i[u],null)}}}}function At(...i){return y.useCallback(nu(...i),i)}function Pi(i,r=[]){let s=[];function c(p,h){const m=y.createContext(h),x=s.length;s=[...s,h];const g=j=>{const{scope:N,children:k,...O}=j,C=N?.[i]?.[x]||m,T=y.useMemo(()=>O,Object.values(O));return l.jsx(C.Provider,{value:T,children:k})};g.displayName=p+"Provider";function v(j,N){const k=N?.[i]?.[x]||m,O=y.useContext(k);if(O)return O;if(h!==void 0)return h;throw new Error(`\`${j}\` must be used within \`${p}\``)}return[g,v]}const u=()=>{const p=s.map(h=>y.createContext(h));return function(m){const x=m?.[i]||p;return y.useMemo(()=>({[`__scope${i}`]:{...m,[i]:x}}),[m,x])}};return u.scopeName=i,[c,Ty(u,...r)]}function Ty(...i){const r=i[0];if(i.length===1)return r;const s=()=>{const c=i.map(u=>({useScope:u(),scopeName:u.scopeName}));return function(p){const h=c.reduce((m,{useScope:x,scopeName:g})=>{const j=x(p)[`__scope${g}`];return{...m,...j}},{});return y.useMemo(()=>({[`__scope${r.scopeName}`]:h}),[h])}};return s.scopeName=r.scopeName,s}function Bd(i){const r=Cy(i),s=y.forwardRef((c,u)=>{const{children:p,...h}=c,m=y.Children.toArray(p),x=m.find(_y);if(x){const g=x.props.children,v=m.map(j=>j===x?y.Children.count(g)>1?y.Children.only(null):y.isValidElement(g)?g.props.children:null:j);return l.jsx(r,{...h,ref:u,children:y.isValidElement(g)?y.cloneElement(g,void 0,v):null})}return l.jsx(r,{...h,ref:u,children:p})});return s.displayName=`${i}.Slot`,s}function Cy(i){const r=y.forwardRef((s,c)=>{const{children:u,...p}=s;if(y.isValidElement(u)){const h=My(u),m=Oy(p,u.props);return u.type!==y.Fragment&&(m.ref=c?nu(c,h):h),y.cloneElement(u,m)}return y.Children.count(u)>1?y.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var Im=Symbol("radix.slottable");function Ay(i){const r=({children:s})=>l.jsx(l.Fragment,{children:s});return r.displayName=`${i}.Slottable`,r.__radixId=Im,r}function _y(i){return y.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===Im}function Oy(i,r){const s={...r};for(const c in r){const u=i[c],p=r[c];/^on[A-Z]/.test(c)?u&&p?s[c]=(...m)=>{const x=p(...m);return u(...m),x}:u&&(s[c]=u):c==="style"?s[c]={...u,...p}:c==="className"&&(s[c]=[u,p].filter(Boolean).join(" "))}return{...i,...s}}function My(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}function Um(i){const r=i+"CollectionProvider",[s,c]=Pi(r),[u,p]=s(r,{collectionRef:{current:null},itemMap:new Map}),h=C=>{const{scope:T,children:R}=C,A=hi.useRef(null),L=hi.useRef(new Map).current;return l.jsx(u,{scope:T,itemMap:L,collectionRef:A,children:R})};h.displayName=r;const m=i+"CollectionSlot",x=Bd(m),g=hi.forwardRef((C,T)=>{const{scope:R,children:A}=C,L=p(m,R),U=At(T,L.collectionRef);return l.jsx(x,{ref:U,children:A})});g.displayName=m;const v=i+"CollectionItemSlot",j="data-radix-collection-item",N=Bd(v),k=hi.forwardRef((C,T)=>{const{scope:R,children:A,...L}=C,U=hi.useRef(null),G=At(T,U),I=p(v,R);return hi.useEffect(()=>(I.itemMap.set(U,{ref:U,...L}),()=>{I.itemMap.delete(U)})),l.jsx(N,{[j]:"",ref:G,children:A})});k.displayName=v;function O(C){const T=p(i+"CollectionConsumer",C);return hi.useCallback(()=>{const A=T.collectionRef.current;if(!A)return[];const L=Array.from(A.querySelectorAll(`[${j}]`));return Array.from(T.itemMap.values()).sort((I,X)=>L.indexOf(I.ref.current)-L.indexOf(X.ref.current))},[T.collectionRef,T.itemMap])}return[{Provider:h,Slot:g,ItemSlot:k},O,c]}var Dy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ye=Dy.reduce((i,r)=>{const s=Bd(`Primitive.${r}`),c=y.forwardRef((u,p)=>{const{asChild:h,...m}=u,x=h?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(x,{...m,ref:p})});return c.displayName=`Primitive.${r}`,{...i,[r]:c}},{});function Gm(i,r){i&&Gs.flushSync(()=>i.dispatchEvent(r))}function Ln(i){const r=y.useRef(i);return y.useEffect(()=>{r.current=i}),y.useMemo(()=>(...s)=>r.current?.(...s),[])}function zy(i,r=globalThis?.document){const s=Ln(i);y.useEffect(()=>{const c=u=>{u.key==="Escape"&&s(u)};return r.addEventListener("keydown",c,{capture:!0}),()=>r.removeEventListener("keydown",c,{capture:!0})},[s,r])}var Ry="DismissableLayer",Hd="dismissableLayer.update",Ly="dismissableLayer.pointerDownOutside",By="dismissableLayer.focusOutside",Gg,Pm=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),iu=y.forwardRef((i,r)=>{const{disableOutsidePointerEvents:s=!1,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:p,onInteractOutside:h,onDismiss:m,...x}=i,g=y.useContext(Pm),[v,j]=y.useState(null),N=v?.ownerDocument??globalThis?.document,[,k]=y.useState({}),O=At(r,X=>j(X)),C=Array.from(g.layers),[T]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),R=C.indexOf(T),A=v?C.indexOf(v):-1,L=g.layersWithOutsidePointerEventsDisabled.size>0,U=A>=R,G=Iy(X=>{const P=X.target,te=[...g.branches].some(ne=>ne.contains(P));!U||te||(u?.(X),h?.(X),X.defaultPrevented||m?.())},N),I=Uy(X=>{const P=X.target;[...g.branches].some(ne=>ne.contains(P))||(p?.(X),h?.(X),X.defaultPrevented||m?.())},N);return zy(X=>{A===g.layers.size-1&&(c?.(X),!X.defaultPrevented&&m&&(X.preventDefault(),m()))},N),y.useEffect(()=>{if(v)return s&&(g.layersWithOutsidePointerEventsDisabled.size===0&&(Gg=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(v)),g.layers.add(v),Pg(),()=>{s&&g.layersWithOutsidePointerEventsDisabled.size===1&&(N.body.style.pointerEvents=Gg)}},[v,N,s,g]),y.useEffect(()=>()=>{v&&(g.layers.delete(v),g.layersWithOutsidePointerEventsDisabled.delete(v),Pg())},[v,g]),y.useEffect(()=>{const X=()=>k({});return document.addEventListener(Hd,X),()=>document.removeEventListener(Hd,X)},[]),l.jsx(Ye.div,{...x,ref:O,style:{pointerEvents:L?U?"auto":"none":void 0,...i.style},onFocusCapture:Oe(i.onFocusCapture,I.onFocusCapture),onBlurCapture:Oe(i.onBlurCapture,I.onBlurCapture),onPointerDownCapture:Oe(i.onPointerDownCapture,G.onPointerDownCapture)})});iu.displayName=Ry;var Hy="DismissableLayerBranch",qm=y.forwardRef((i,r)=>{const s=y.useContext(Pm),c=y.useRef(null),u=At(r,c);return y.useEffect(()=>{const p=c.current;if(p)return s.branches.add(p),()=>{s.branches.delete(p)}},[s.branches]),l.jsx(Ye.div,{...i,ref:u})});qm.displayName=Hy;function Iy(i,r=globalThis?.document){const s=Ln(i),c=y.useRef(!1),u=y.useRef(()=>{});return y.useEffect(()=>{const p=m=>{if(m.target&&!c.current){let x=function(){Vm(Ly,s,g,{discrete:!0})};const g={originalEvent:m};m.pointerType==="touch"?(r.removeEventListener("click",u.current),u.current=x,r.addEventListener("click",u.current,{once:!0})):x()}else r.removeEventListener("click",u.current);c.current=!1},h=window.setTimeout(()=>{r.addEventListener("pointerdown",p)},0);return()=>{window.clearTimeout(h),r.removeEventListener("pointerdown",p),r.removeEventListener("click",u.current)}},[r,s]),{onPointerDownCapture:()=>c.current=!0}}function Uy(i,r=globalThis?.document){const s=Ln(i),c=y.useRef(!1);return y.useEffect(()=>{const u=p=>{p.target&&!c.current&&Vm(By,s,{originalEvent:p},{discrete:!1})};return r.addEventListener("focusin",u),()=>r.removeEventListener("focusin",u)},[r,s]),{onFocusCapture:()=>c.current=!0,onBlurCapture:()=>c.current=!1}}function Pg(){const i=new CustomEvent(Hd);document.dispatchEvent(i)}function Vm(i,r,s,{discrete:c}){const u=s.originalEvent.target,p=new CustomEvent(i,{bubbles:!1,cancelable:!0,detail:s});r&&u.addEventListener(i,r,{once:!0}),c?Gm(u,p):u.dispatchEvent(p)}var Gy=iu,Py=qm,Bn=globalThis?.document?y.useLayoutEffect:()=>{},qy="Portal",au=y.forwardRef((i,r)=>{const{container:s,...c}=i,[u,p]=y.useState(!1);Bn(()=>p(!0),[]);const h=s||u&&globalThis?.document?.body;return h?Ey.createPortal(l.jsx(Ye.div,{...c,ref:r}),h):null});au.displayName=qy;function Vy(i,r){return y.useReducer((s,c)=>r[s][c]??s,i)}var Ha=i=>{const{present:r,children:s}=i,c=Yy(r),u=typeof s=="function"?s({present:c.isPresent}):y.Children.only(s),p=At(c.ref,Ky(u));return typeof s=="function"||c.isPresent?y.cloneElement(u,{ref:p}):null};Ha.displayName="Presence";function Yy(i){const[r,s]=y.useState(),c=y.useRef(null),u=y.useRef(i),p=y.useRef("none"),h=i?"mounted":"unmounted",[m,x]=Vy(h,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const g=ms(c.current);p.current=m==="mounted"?g:"none"},[m]),Bn(()=>{const g=c.current,v=u.current;if(v!==i){const N=p.current,k=ms(g);i?x("MOUNT"):k==="none"||g?.display==="none"?x("UNMOUNT"):x(v&&N!==k?"ANIMATION_OUT":"UNMOUNT"),u.current=i}},[i,x]),Bn(()=>{if(r){let g;const v=r.ownerDocument.defaultView??window,j=k=>{const C=ms(c.current).includes(CSS.escape(k.animationName));if(k.target===r&&C&&(x("ANIMATION_END"),!u.current)){const T=r.style.animationFillMode;r.style.animationFillMode="forwards",g=v.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=T)})}},N=k=>{k.target===r&&(p.current=ms(c.current))};return r.addEventListener("animationstart",N),r.addEventListener("animationcancel",j),r.addEventListener("animationend",j),()=>{v.clearTimeout(g),r.removeEventListener("animationstart",N),r.removeEventListener("animationcancel",j),r.removeEventListener("animationend",j)}}else x("ANIMATION_END")},[r,x]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:y.useCallback(g=>{c.current=g?getComputedStyle(g):null,s(g)},[])}}function ms(i){return i?.animationName||"none"}function Ky(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}var Fy=Bs[" useInsertionEffect ".trim().toString()]||Bn;function Ps({prop:i,defaultProp:r,onChange:s=()=>{},caller:c}){const[u,p,h]=Xy({defaultProp:r,onChange:s}),m=i!==void 0,x=m?i:u;{const v=y.useRef(i!==void 0);y.useEffect(()=>{const j=v.current;j!==m&&console.warn(`${c} is changing from ${j?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),v.current=m},[m,c])}const g=y.useCallback(v=>{if(m){const j=Qy(v)?v(i):v;j!==i&&h.current?.(j)}else p(v)},[m,i,p,h]);return[x,g]}function Xy({defaultProp:i,onChange:r}){const[s,c]=y.useState(i),u=y.useRef(s),p=y.useRef(r);return Fy(()=>{p.current=r},[r]),y.useEffect(()=>{u.current!==s&&(p.current?.(s),u.current=s)},[s,u]),[s,c,p]}function Qy(i){return typeof i=="function"}var Zy=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Jy="VisuallyHidden",qs=y.forwardRef((i,r)=>l.jsx(Ye.span,{...i,ref:r,style:{...Zy,...i.style}}));qs.displayName=Jy;var Wy=qs,ru="ToastProvider",[ou,$y,e2]=Um("Toast"),[Ym]=Pi("Toast",[e2]),[t2,Vs]=Ym(ru),Km=i=>{const{__scopeToast:r,label:s="Notification",duration:c=5e3,swipeDirection:u="right",swipeThreshold:p=50,children:h}=i,[m,x]=y.useState(null),[g,v]=y.useState(0),j=y.useRef(!1),N=y.useRef(!1);return s.trim()||console.error(`Invalid prop \`label\` supplied to \`${ru}\`. Expected non-empty \`string\`.`),l.jsx(ou.Provider,{scope:r,children:l.jsx(t2,{scope:r,label:s,duration:c,swipeDirection:u,swipeThreshold:p,toastCount:g,viewport:m,onViewportChange:x,onToastAdd:y.useCallback(()=>v(k=>k+1),[]),onToastRemove:y.useCallback(()=>v(k=>k-1),[]),isFocusedToastEscapeKeyDownRef:j,isClosePausedRef:N,children:h})})};Km.displayName=ru;var Fm="ToastViewport",n2=["F8"],Id="toast.viewportPause",Ud="toast.viewportResume",Xm=y.forwardRef((i,r)=>{const{__scopeToast:s,hotkey:c=n2,label:u="Notifications ({hotkey})",...p}=i,h=Vs(Fm,s),m=$y(s),x=y.useRef(null),g=y.useRef(null),v=y.useRef(null),j=y.useRef(null),N=At(r,j,h.onViewportChange),k=c.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=h.toastCount>0;y.useEffect(()=>{const T=R=>{c.length!==0&&c.every(L=>R[L]||R.code===L)&&j.current?.focus()};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[c]),y.useEffect(()=>{const T=x.current,R=j.current;if(O&&T&&R){const A=()=>{if(!h.isClosePausedRef.current){const I=new CustomEvent(Id);R.dispatchEvent(I),h.isClosePausedRef.current=!0}},L=()=>{if(h.isClosePausedRef.current){const I=new CustomEvent(Ud);R.dispatchEvent(I),h.isClosePausedRef.current=!1}},U=I=>{!T.contains(I.relatedTarget)&&L()},G=()=>{T.contains(document.activeElement)||L()};return T.addEventListener("focusin",A),T.addEventListener("focusout",U),T.addEventListener("pointermove",A),T.addEventListener("pointerleave",G),window.addEventListener("blur",A),window.addEventListener("focus",L),()=>{T.removeEventListener("focusin",A),T.removeEventListener("focusout",U),T.removeEventListener("pointermove",A),T.removeEventListener("pointerleave",G),window.removeEventListener("blur",A),window.removeEventListener("focus",L)}}},[O,h.isClosePausedRef]);const C=y.useCallback(({tabbingDirection:T})=>{const A=m().map(L=>{const U=L.ref.current,G=[U,...g2(U)];return T==="forwards"?G:G.reverse()});return(T==="forwards"?A.reverse():A).flat()},[m]);return y.useEffect(()=>{const T=j.current;if(T){const R=A=>{const L=A.altKey||A.ctrlKey||A.metaKey;if(A.key==="Tab"&&!L){const G=document.activeElement,I=A.shiftKey;if(A.target===T&&I){g.current?.focus();return}const te=C({tabbingDirection:I?"backwards":"forwards"}),ne=te.findIndex(ce=>ce===G);Nd(te.slice(ne+1))?A.preventDefault():I?g.current?.focus():v.current?.focus()}};return T.addEventListener("keydown",R),()=>T.removeEventListener("keydown",R)}},[m,C]),l.jsxs(Py,{ref:x,role:"region","aria-label":u.replace("{hotkey}",k),tabIndex:-1,style:{pointerEvents:O?void 0:"none"},children:[O&&l.jsx(Gd,{ref:g,onFocusFromOutsideViewport:()=>{const T=C({tabbingDirection:"forwards"});Nd(T)}}),l.jsx(ou.Slot,{scope:s,children:l.jsx(Ye.ol,{tabIndex:-1,...p,ref:N})}),O&&l.jsx(Gd,{ref:v,onFocusFromOutsideViewport:()=>{const T=C({tabbingDirection:"backwards"});Nd(T)}})]})});Xm.displayName=Fm;var Qm="ToastFocusProxy",Gd=y.forwardRef((i,r)=>{const{__scopeToast:s,onFocusFromOutsideViewport:c,...u}=i,p=Vs(Qm,s);return l.jsx(qs,{tabIndex:0,...u,ref:r,style:{position:"fixed"},onFocus:h=>{const m=h.relatedTarget;!p.viewport?.contains(m)&&c()}})});Gd.displayName=Qm;var Qr="Toast",i2="toast.swipeStart",a2="toast.swipeMove",r2="toast.swipeCancel",o2="toast.swipeEnd",Zm=y.forwardRef((i,r)=>{const{forceMount:s,open:c,defaultOpen:u,onOpenChange:p,...h}=i,[m,x]=Ps({prop:c,defaultProp:u??!0,onChange:p,caller:Qr});return l.jsx(Ha,{present:s||m,children:l.jsx(c2,{open:m,...h,ref:r,onClose:()=>x(!1),onPause:Ln(i.onPause),onResume:Ln(i.onResume),onSwipeStart:Oe(i.onSwipeStart,g=>{g.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Oe(i.onSwipeMove,g=>{const{x:v,y:j}=g.detail.delta;g.currentTarget.setAttribute("data-swipe","move"),g.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${v}px`),g.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${j}px`)}),onSwipeCancel:Oe(i.onSwipeCancel,g=>{g.currentTarget.setAttribute("data-swipe","cancel"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),g.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),g.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Oe(i.onSwipeEnd,g=>{const{x:v,y:j}=g.detail.delta;g.currentTarget.setAttribute("data-swipe","end"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),g.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${v}px`),g.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${j}px`),x(!1)})})})});Zm.displayName=Qr;var[s2,l2]=Ym(Qr,{onClose(){}}),c2=y.forwardRef((i,r)=>{const{__scopeToast:s,type:c="foreground",duration:u,open:p,onClose:h,onEscapeKeyDown:m,onPause:x,onResume:g,onSwipeStart:v,onSwipeMove:j,onSwipeCancel:N,onSwipeEnd:k,...O}=i,C=Vs(Qr,s),[T,R]=y.useState(null),A=At(r,V=>R(V)),L=y.useRef(null),U=y.useRef(null),G=u||C.duration,I=y.useRef(0),X=y.useRef(G),P=y.useRef(0),{onToastAdd:te,onToastRemove:ne}=C,ce=Ln(()=>{T?.contains(document.activeElement)&&C.viewport?.focus(),h()}),ue=y.useCallback(V=>{!V||V===1/0||(window.clearTimeout(P.current),I.current=new Date().getTime(),P.current=window.setTimeout(ce,V))},[ce]);y.useEffect(()=>{const V=C.viewport;if(V){const ee=()=>{ue(X.current),g?.()},_=()=>{const F=new Date().getTime()-I.current;X.current=X.current-F,window.clearTimeout(P.current),x?.()};return V.addEventListener(Id,_),V.addEventListener(Ud,ee),()=>{V.removeEventListener(Id,_),V.removeEventListener(Ud,ee)}}},[C.viewport,G,x,g,ue]),y.useEffect(()=>{p&&!C.isClosePausedRef.current&&ue(G)},[p,G,C.isClosePausedRef,ue]),y.useEffect(()=>(te(),()=>ne()),[te,ne]);const xe=y.useMemo(()=>T?i0(T):null,[T]);return C.viewport?l.jsxs(l.Fragment,{children:[xe&&l.jsx(d2,{__scopeToast:s,role:"status","aria-live":c==="foreground"?"assertive":"polite",children:xe}),l.jsx(s2,{scope:s,onClose:ce,children:Gs.createPortal(l.jsx(ou.ItemSlot,{scope:s,children:l.jsx(Gy,{asChild:!0,onEscapeKeyDown:Oe(m,()=>{C.isFocusedToastEscapeKeyDownRef.current||ce(),C.isFocusedToastEscapeKeyDownRef.current=!1}),children:l.jsx(Ye.li,{tabIndex:0,"data-state":p?"open":"closed","data-swipe-direction":C.swipeDirection,...O,ref:A,style:{userSelect:"none",touchAction:"none",...i.style},onKeyDown:Oe(i.onKeyDown,V=>{V.key==="Escape"&&(m?.(V.nativeEvent),V.nativeEvent.defaultPrevented||(C.isFocusedToastEscapeKeyDownRef.current=!0,ce()))}),onPointerDown:Oe(i.onPointerDown,V=>{V.button===0&&(L.current={x:V.clientX,y:V.clientY})}),onPointerMove:Oe(i.onPointerMove,V=>{if(!L.current)return;const ee=V.clientX-L.current.x,_=V.clientY-L.current.y,F=!!U.current,Z=["left","right"].includes(C.swipeDirection),le=["left","up"].includes(C.swipeDirection)?Math.min:Math.max,w=Z?le(0,ee):0,q=Z?0:le(0,_),J=V.pointerType==="touch"?10:2,$={x:w,y:q},ae={originalEvent:V,delta:$};F?(U.current=$,xs(a2,j,ae,{discrete:!1})):qg($,C.swipeDirection,J)?(U.current=$,xs(i2,v,ae,{discrete:!1}),V.target.setPointerCapture(V.pointerId)):(Math.abs(ee)>J||Math.abs(_)>J)&&(L.current=null)}),onPointerUp:Oe(i.onPointerUp,V=>{const ee=U.current,_=V.target;if(_.hasPointerCapture(V.pointerId)&&_.releasePointerCapture(V.pointerId),U.current=null,L.current=null,ee){const F=V.currentTarget,Z={originalEvent:V,delta:ee};qg(ee,C.swipeDirection,C.swipeThreshold)?xs(o2,k,Z,{discrete:!0}):xs(r2,N,Z,{discrete:!0}),F.addEventListener("click",le=>le.preventDefault(),{once:!0})}})})})}),C.viewport)})]}):null}),d2=i=>{const{__scopeToast:r,children:s,...c}=i,u=Vs(Qr,r),[p,h]=y.useState(!1),[m,x]=y.useState(!1);return f2(()=>h(!0)),y.useEffect(()=>{const g=window.setTimeout(()=>x(!0),1e3);return()=>window.clearTimeout(g)},[]),m?null:l.jsx(au,{asChild:!0,children:l.jsx(qs,{...c,children:p&&l.jsxs(l.Fragment,{children:[u.label," ",s]})})})},u2="ToastTitle",Jm=y.forwardRef((i,r)=>{const{__scopeToast:s,...c}=i;return l.jsx(Ye.div,{...c,ref:r})});Jm.displayName=u2;var p2="ToastDescription",Wm=y.forwardRef((i,r)=>{const{__scopeToast:s,...c}=i;return l.jsx(Ye.div,{...c,ref:r})});Wm.displayName=p2;var $m="ToastAction",e0=y.forwardRef((i,r)=>{const{altText:s,...c}=i;return s.trim()?l.jsx(n0,{altText:s,asChild:!0,children:l.jsx(su,{...c,ref:r})}):(console.error(`Invalid prop \`altText\` supplied to \`${$m}\`. Expected non-empty \`string\`.`),null)});e0.displayName=$m;var t0="ToastClose",su=y.forwardRef((i,r)=>{const{__scopeToast:s,...c}=i,u=l2(t0,s);return l.jsx(n0,{asChild:!0,children:l.jsx(Ye.button,{type:"button",...c,ref:r,onClick:Oe(i.onClick,u.onClose)})})});su.displayName=t0;var n0=y.forwardRef((i,r)=>{const{__scopeToast:s,altText:c,...u}=i;return l.jsx(Ye.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":c||void 0,...u,ref:r})});function i0(i){const r=[];return Array.from(i.childNodes).forEach(c=>{if(c.nodeType===c.TEXT_NODE&&c.textContent&&r.push(c.textContent),h2(c)){const u=c.ariaHidden||c.hidden||c.style.display==="none",p=c.dataset.radixToastAnnounceExclude==="";if(!u)if(p){const h=c.dataset.radixToastAnnounceAlt;h&&r.push(h)}else r.push(...i0(c))}}),r}function xs(i,r,s,{discrete:c}){const u=s.originalEvent.currentTarget,p=new CustomEvent(i,{bubbles:!0,cancelable:!0,detail:s});r&&u.addEventListener(i,r,{once:!0}),c?Gm(u,p):u.dispatchEvent(p)}var qg=(i,r,s=0)=>{const c=Math.abs(i.x),u=Math.abs(i.y),p=c>u;return r==="left"||r==="right"?p&&c>s:!p&&u>s};function f2(i=()=>{}){const r=Ln(i);Bn(()=>{let s=0,c=0;return s=window.requestAnimationFrame(()=>c=window.requestAnimationFrame(r)),()=>{window.cancelAnimationFrame(s),window.cancelAnimationFrame(c)}},[r])}function h2(i){return i.nodeType===i.ELEMENT_NODE}function g2(i){const r=[],s=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c=>{const u=c.tagName==="INPUT"&&c.type==="hidden";return c.disabled||c.hidden||u?NodeFilter.FILTER_SKIP:c.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)r.push(s.currentNode);return r}function Nd(i){const r=document.activeElement;return i.some(s=>s===r?!0:(s.focus(),document.activeElement!==r))}var m2=Km,a0=Xm,r0=Zm,o0=Jm,s0=Wm,l0=e0,c0=su;function d0(i){var r,s,c="";if(typeof i=="string"||typeof i=="number")c+=i;else if(typeof i=="object")if(Array.isArray(i)){var u=i.length;for(r=0;r<u;r++)i[r]&&(s=d0(i[r]))&&(c&&(c+=" "),c+=s)}else for(s in i)i[s]&&(c&&(c+=" "),c+=s);return c}function u0(){for(var i,r,s=0,c="",u=arguments.length;s<u;s++)(i=arguments[s])&&(r=d0(i))&&(c&&(c+=" "),c+=r);return c}const Vg=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Yg=u0,Ys=(i,r)=>s=>{var c;if(r?.variants==null)return Yg(i,s?.class,s?.className);const{variants:u,defaultVariants:p}=r,h=Object.keys(u).map(g=>{const v=s?.[g],j=p?.[g];if(v===null)return null;const N=Vg(v)||Vg(j);return u[g][N]}),m=s&&Object.entries(s).reduce((g,v)=>{let[j,N]=v;return N===void 0||(g[j]=N),g},{}),x=r==null||(c=r.compoundVariants)===null||c===void 0?void 0:c.reduce((g,v)=>{let{class:j,className:N,...k}=v;return Object.entries(k).every(O=>{let[C,T]=O;return Array.isArray(T)?T.includes({...p,...m}[C]):{...p,...m}[C]===T})?[...g,j,N]:g},[]);return Yg(i,h,x,s?.class,s?.className)};const x2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b2=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,c)=>c?c.toUpperCase():s.toLowerCase()),Kg=i=>{const r=b2(i);return r.charAt(0).toUpperCase()+r.slice(1)},p0=(...i)=>i.filter((r,s,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===s).join(" ").trim(),v2=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var y2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const w2=y.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:u="",children:p,iconNode:h,...m},x)=>y.createElement("svg",{ref:x,...y2,width:r,height:r,stroke:i,strokeWidth:c?Number(s)*24/Number(r):s,className:p0("lucide",u),...!p&&!v2(m)&&{"aria-hidden":"true"},...m},[...h.map(([g,v])=>y.createElement(g,v)),...Array.isArray(p)?p:[p]]));const Ee=(i,r)=>{const s=y.forwardRef(({className:c,...u},p)=>y.createElement(w2,{ref:p,iconNode:r,className:p0(`lucide-${x2(Kg(i))}`,`lucide-${i}`,c),...u}));return s.displayName=Kg(i),s};const j2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Zr=Ee("arrow-left",j2);const S2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fg=Ee("arrow-right",S2);const N2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],k2=Ee("book-open",N2);const E2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],T2=Ee("calculator",E2);const C2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vt=Ee("check",C2);const A2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Cs=Ee("chevron-down",A2);const _2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],As=Ee("chevron-up",_2);const O2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],M2=Ee("circle-alert",O2);const D2=[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],Oa=Ee("clipboard-paste",D2);const z2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],R2=Ee("clock",z2);const L2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],sn=Ee("copy",L2);const B2=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],H2=Ee("eye-off",B2);const I2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],U2=Ee("eye",I2);const G2=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],Da=Ee("file-code",G2);const P2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],q2=Ee("file-text",P2);const V2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],f0=Ee("globe",V2);const Y2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Pd=Ee("image",Y2);const K2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],h0=Ee("layers",K2);const F2=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],X2=Ee("link",F2);const Q2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Xg=Ee("lock",Q2);const Z2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Ss=Ee("palette",Z2);const J2=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],W2=Ee("pen-line",J2);const $2=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],e5=Ee("percent",$2);const t5=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],n5=Ee("phone",t5);const i5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Kr=Ee("plus",i5);const a5=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ks=Ee("refresh-cw",a5);const r5=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],qd=Ee("save",r5);const o5=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],s5=Ee("search",o5);const l5=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],c5=Ee("square-pen",l5);const d5=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],u5=Ee("tag",d5);const p5=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Fs=Ee("trash-2",p5);const f5=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],h5=Ee("user",f5);const g5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lu=Ee("x",g5);const m5=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],kd=Ee("youtube",m5),x5=(i,r)=>{const s=new Array(i.length+r.length);for(let c=0;c<i.length;c++)s[c]=i[c];for(let c=0;c<r.length;c++)s[i.length+c]=r[c];return s},b5=(i,r)=>({classGroupId:i,validator:r}),g0=(i=new Map,r=null,s)=>({nextPart:i,validators:r,classGroupId:s}),_s="-",Qg=[],v5="arbitrary..",y5=i=>{const r=j5(i),{conflictingClassGroups:s,conflictingClassGroupModifiers:c}=i;return{getClassGroupId:h=>{if(h.startsWith("[")&&h.endsWith("]"))return w5(h);const m=h.split(_s),x=m[0]===""&&m.length>1?1:0;return m0(m,x,r)},getConflictingClassGroupIds:(h,m)=>{if(m){const x=c[h],g=s[h];return x?g?x5(g,x):x:g||Qg}return s[h]||Qg}}},m0=(i,r,s)=>{if(i.length-r===0)return s.classGroupId;const u=i[r],p=s.nextPart.get(u);if(p){const g=m0(i,r+1,p);if(g)return g}const h=s.validators;if(h===null)return;const m=r===0?i.join(_s):i.slice(r).join(_s),x=h.length;for(let g=0;g<x;g++){const v=h[g];if(v.validator(m))return v.classGroupId}},w5=i=>i.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=i.slice(1,-1),s=r.indexOf(":"),c=r.slice(0,s);return c?v5+c:void 0})(),j5=i=>{const{theme:r,classGroups:s}=i;return S5(s,r)},S5=(i,r)=>{const s=g0();for(const c in i){const u=i[c];cu(u,s,c,r)}return s},cu=(i,r,s,c)=>{const u=i.length;for(let p=0;p<u;p++){const h=i[p];N5(h,r,s,c)}},N5=(i,r,s,c)=>{if(typeof i=="string"){k5(i,r,s);return}if(typeof i=="function"){E5(i,r,s,c);return}T5(i,r,s,c)},k5=(i,r,s)=>{const c=i===""?r:x0(r,i);c.classGroupId=s},E5=(i,r,s,c)=>{if(C5(i)){cu(i(c),r,s,c);return}r.validators===null&&(r.validators=[]),r.validators.push(b5(s,i))},T5=(i,r,s,c)=>{const u=Object.entries(i),p=u.length;for(let h=0;h<p;h++){const[m,x]=u[h];cu(x,x0(r,m),s,c)}},x0=(i,r)=>{let s=i;const c=r.split(_s),u=c.length;for(let p=0;p<u;p++){const h=c[p];let m=s.nextPart.get(h);m||(m=g0(),s.nextPart.set(h,m)),s=m}return s},C5=i=>"isThemeGetter"in i&&i.isThemeGetter===!0,A5=i=>{if(i<1)return{get:()=>{},set:()=>{}};let r=0,s=Object.create(null),c=Object.create(null);const u=(p,h)=>{s[p]=h,r++,r>i&&(r=0,c=s,s=Object.create(null))};return{get(p){let h=s[p];if(h!==void 0)return h;if((h=c[p])!==void 0)return u(p,h),h},set(p,h){p in s?s[p]=h:u(p,h)}}},Vd="!",Zg=":",_5=[],Jg=(i,r,s,c,u)=>({modifiers:i,hasImportantModifier:r,baseClassName:s,maybePostfixModifierPosition:c,isExternal:u}),O5=i=>{const{prefix:r,experimentalParseClassName:s}=i;let c=u=>{const p=[];let h=0,m=0,x=0,g;const v=u.length;for(let C=0;C<v;C++){const T=u[C];if(h===0&&m===0){if(T===Zg){p.push(u.slice(x,C)),x=C+1;continue}if(T==="/"){g=C;continue}}T==="["?h++:T==="]"?h--:T==="("?m++:T===")"&&m--}const j=p.length===0?u:u.slice(x);let N=j,k=!1;j.endsWith(Vd)?(N=j.slice(0,-1),k=!0):j.startsWith(Vd)&&(N=j.slice(1),k=!0);const O=g&&g>x?g-x:void 0;return Jg(p,k,N,O)};if(r){const u=r+Zg,p=c;c=h=>h.startsWith(u)?p(h.slice(u.length)):Jg(_5,!1,h,void 0,!0)}if(s){const u=c;c=p=>s({className:p,parseClassName:u})}return c},M5=i=>{const r=new Map;return i.orderSensitiveModifiers.forEach((s,c)=>{r.set(s,1e6+c)}),s=>{const c=[];let u=[];for(let p=0;p<s.length;p++){const h=s[p],m=h[0]==="[",x=r.has(h);m||x?(u.length>0&&(u.sort(),c.push(...u),u=[]),c.push(h)):u.push(h)}return u.length>0&&(u.sort(),c.push(...u)),c}},D5=i=>({cache:A5(i.cacheSize),parseClassName:O5(i),sortModifiers:M5(i),...y5(i)}),z5=/\s+/,R5=(i,r)=>{const{parseClassName:s,getClassGroupId:c,getConflictingClassGroupIds:u,sortModifiers:p}=r,h=[],m=i.trim().split(z5);let x="";for(let g=m.length-1;g>=0;g-=1){const v=m[g],{isExternal:j,modifiers:N,hasImportantModifier:k,baseClassName:O,maybePostfixModifierPosition:C}=s(v);if(j){x=v+(x.length>0?" "+x:x);continue}let T=!!C,R=c(T?O.substring(0,C):O);if(!R){if(!T){x=v+(x.length>0?" "+x:x);continue}if(R=c(O),!R){x=v+(x.length>0?" "+x:x);continue}T=!1}const A=N.length===0?"":N.length===1?N[0]:p(N).join(":"),L=k?A+Vd:A,U=L+R;if(h.indexOf(U)>-1)continue;h.push(U);const G=u(R,T);for(let I=0;I<G.length;++I){const X=G[I];h.push(L+X)}x=v+(x.length>0?" "+x:x)}return x},L5=(...i)=>{let r=0,s,c,u="";for(;r<i.length;)(s=i[r++])&&(c=b0(s))&&(u&&(u+=" "),u+=c);return u},b0=i=>{if(typeof i=="string")return i;let r,s="";for(let c=0;c<i.length;c++)i[c]&&(r=b0(i[c]))&&(s&&(s+=" "),s+=r);return s},B5=(i,...r)=>{let s,c,u,p;const h=x=>{const g=r.reduce((v,j)=>j(v),i());return s=D5(g),c=s.cache.get,u=s.cache.set,p=m,m(x)},m=x=>{const g=c(x);if(g)return g;const v=R5(x,s);return u(x,v),v};return p=h,(...x)=>p(L5(...x))},H5=[],st=i=>{const r=s=>s[i]||H5;return r.isThemeGetter=!0,r},v0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,y0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,I5=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,U5=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,G5=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,P5=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,q5=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,V5=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,pi=i=>I5.test(i),we=i=>!!i&&!Number.isNaN(Number(i)),fi=i=>!!i&&Number.isInteger(Number(i)),Ed=i=>i.endsWith("%")&&we(i.slice(0,-1)),Rn=i=>U5.test(i),w0=()=>!0,Y5=i=>G5.test(i)&&!P5.test(i),du=()=>!1,K5=i=>q5.test(i),F5=i=>V5.test(i),X5=i=>!oe(i)&&!se(i),Q5=i=>vi(i,N0,du),oe=i=>v0.test(i),Hi=i=>vi(i,k0,Y5),Wg=i=>vi(i,iw,we),Z5=i=>vi(i,T0,w0),J5=i=>vi(i,E0,du),$g=i=>vi(i,j0,du),W5=i=>vi(i,S0,F5),bs=i=>vi(i,C0,K5),se=i=>y0.test(i),Ir=i=>qi(i,k0),$5=i=>qi(i,E0),em=i=>qi(i,j0),ew=i=>qi(i,N0),tw=i=>qi(i,S0),vs=i=>qi(i,C0,!0),nw=i=>qi(i,T0,!0),vi=(i,r,s)=>{const c=v0.exec(i);return c?c[1]?r(c[1]):s(c[2]):!1},qi=(i,r,s=!1)=>{const c=y0.exec(i);return c?c[1]?r(c[1]):s:!1},j0=i=>i==="position"||i==="percentage",S0=i=>i==="image"||i==="url",N0=i=>i==="length"||i==="size"||i==="bg-size",k0=i=>i==="length",iw=i=>i==="number",E0=i=>i==="family-name",T0=i=>i==="number"||i==="weight",C0=i=>i==="shadow",aw=()=>{const i=st("color"),r=st("font"),s=st("text"),c=st("font-weight"),u=st("tracking"),p=st("leading"),h=st("breakpoint"),m=st("container"),x=st("spacing"),g=st("radius"),v=st("shadow"),j=st("inset-shadow"),N=st("text-shadow"),k=st("drop-shadow"),O=st("blur"),C=st("perspective"),T=st("aspect"),R=st("ease"),A=st("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...U(),se,oe],I=()=>["auto","hidden","clip","visible","scroll"],X=()=>["auto","contain","none"],P=()=>[se,oe,x],te=()=>[pi,"full","auto",...P()],ne=()=>[fi,"none","subgrid",se,oe],ce=()=>["auto",{span:["full",fi,se,oe]},fi,se,oe],ue=()=>[fi,"auto",se,oe],xe=()=>["auto","min","max","fr",se,oe],V=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ee=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...P()],F=()=>[pi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],Z=()=>[pi,"screen","full","dvw","lvw","svw","min","max","fit",...P()],le=()=>[pi,"screen","full","lh","dvh","lvh","svh","min","max","fit",...P()],w=()=>[i,se,oe],q=()=>[...U(),em,$g,{position:[se,oe]}],J=()=>["no-repeat",{repeat:["","x","y","space","round"]}],$=()=>["auto","cover","contain",ew,Q5,{size:[se,oe]}],ae=()=>[Ed,Ir,Hi],pe=()=>["","none","full",g,se,oe],ie=()=>["",we,Ir,Hi],He=()=>["solid","dashed","dotted","double"],Ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Te=()=>[we,Ed,em,$g],Pt=()=>["","none",O,se,oe],pt=()=>["none",we,se,oe],qt=()=>["none",we,se,oe],yt=()=>[we,se,oe],$t=()=>[pi,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Rn],breakpoint:[Rn],color:[w0],container:[Rn],"drop-shadow":[Rn],ease:["in","out","in-out"],font:[X5],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Rn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Rn],shadow:[Rn],spacing:["px",we],text:[Rn],"text-shadow":[Rn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",pi,oe,se,T]}],container:["container"],columns:[{columns:[we,oe,se,m]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:X()}],"overscroll-x":[{"overscroll-x":X()}],"overscroll-y":[{"overscroll-y":X()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:te()}],"inset-x":[{"inset-x":te()}],"inset-y":[{"inset-y":te()}],start:[{"inset-s":te(),start:te()}],end:[{"inset-e":te(),end:te()}],"inset-bs":[{"inset-bs":te()}],"inset-be":[{"inset-be":te()}],top:[{top:te()}],right:[{right:te()}],bottom:[{bottom:te()}],left:[{left:te()}],visibility:["visible","invisible","collapse"],z:[{z:[fi,"auto",se,oe]}],basis:[{basis:[pi,"full","auto",m,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[we,pi,"auto","initial","none",oe]}],grow:[{grow:["",we,se,oe]}],shrink:[{shrink:["",we,se,oe]}],order:[{order:[fi,"first","last","none",se,oe]}],"grid-cols":[{"grid-cols":ne()}],"col-start-end":[{col:ce()}],"col-start":[{"col-start":ue()}],"col-end":[{"col-end":ue()}],"grid-rows":[{"grid-rows":ne()}],"row-start-end":[{row:ce()}],"row-start":[{"row-start":ue()}],"row-end":[{"row-end":ue()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":xe()}],"auto-rows":[{"auto-rows":xe()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...V(),"normal"]}],"justify-items":[{"justify-items":[...ee(),"normal"]}],"justify-self":[{"justify-self":["auto",...ee()]}],"align-content":[{content:["normal",...V()]}],"align-items":[{items:[...ee(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ee(),{baseline:["","last"]}]}],"place-content":[{"place-content":V()}],"place-items":[{"place-items":[...ee(),"baseline"]}],"place-self":[{"place-self":["auto",...ee()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pbs:[{pbs:P()}],pbe:[{pbe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mbs:[{mbs:_()}],mbe:[{mbe:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:F()}],"inline-size":[{inline:["auto",...Z()]}],"min-inline-size":[{"min-inline":["auto",...Z()]}],"max-inline-size":[{"max-inline":["none",...Z()]}],"block-size":[{block:["auto",...le()]}],"min-block-size":[{"min-block":["auto",...le()]}],"max-block-size":[{"max-block":["none",...le()]}],w:[{w:[m,"screen",...F()]}],"min-w":[{"min-w":[m,"screen","none",...F()]}],"max-w":[{"max-w":[m,"screen","none","prose",{screen:[h]},...F()]}],h:[{h:["screen","lh",...F()]}],"min-h":[{"min-h":["screen","lh","none",...F()]}],"max-h":[{"max-h":["screen","lh",...F()]}],"font-size":[{text:["base",s,Ir,Hi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[c,nw,Z5]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ed,oe]}],"font-family":[{font:[$5,J5,r]}],"font-features":[{"font-features":[oe]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[u,se,oe]}],"line-clamp":[{"line-clamp":[we,"none",se,Wg]}],leading:[{leading:[p,...P()]}],"list-image":[{"list-image":["none",se,oe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",se,oe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:w()}],"text-color":[{text:w()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...He(),"wavy"]}],"text-decoration-thickness":[{decoration:[we,"from-font","auto",se,Hi]}],"text-decoration-color":[{decoration:w()}],"underline-offset":[{"underline-offset":[we,"auto",se,oe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",se,oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",se,oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:q()}],"bg-repeat":[{bg:J()}],"bg-size":[{bg:$()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},fi,se,oe],radial:["",se,oe],conic:[fi,se,oe]},tw,W5]}],"bg-color":[{bg:w()}],"gradient-from-pos":[{from:ae()}],"gradient-via-pos":[{via:ae()}],"gradient-to-pos":[{to:ae()}],"gradient-from":[{from:w()}],"gradient-via":[{via:w()}],"gradient-to":[{to:w()}],rounded:[{rounded:pe()}],"rounded-s":[{"rounded-s":pe()}],"rounded-e":[{"rounded-e":pe()}],"rounded-t":[{"rounded-t":pe()}],"rounded-r":[{"rounded-r":pe()}],"rounded-b":[{"rounded-b":pe()}],"rounded-l":[{"rounded-l":pe()}],"rounded-ss":[{"rounded-ss":pe()}],"rounded-se":[{"rounded-se":pe()}],"rounded-ee":[{"rounded-ee":pe()}],"rounded-es":[{"rounded-es":pe()}],"rounded-tl":[{"rounded-tl":pe()}],"rounded-tr":[{"rounded-tr":pe()}],"rounded-br":[{"rounded-br":pe()}],"rounded-bl":[{"rounded-bl":pe()}],"border-w":[{border:ie()}],"border-w-x":[{"border-x":ie()}],"border-w-y":[{"border-y":ie()}],"border-w-s":[{"border-s":ie()}],"border-w-e":[{"border-e":ie()}],"border-w-bs":[{"border-bs":ie()}],"border-w-be":[{"border-be":ie()}],"border-w-t":[{"border-t":ie()}],"border-w-r":[{"border-r":ie()}],"border-w-b":[{"border-b":ie()}],"border-w-l":[{"border-l":ie()}],"divide-x":[{"divide-x":ie()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ie()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...He(),"hidden","none"]}],"divide-style":[{divide:[...He(),"hidden","none"]}],"border-color":[{border:w()}],"border-color-x":[{"border-x":w()}],"border-color-y":[{"border-y":w()}],"border-color-s":[{"border-s":w()}],"border-color-e":[{"border-e":w()}],"border-color-bs":[{"border-bs":w()}],"border-color-be":[{"border-be":w()}],"border-color-t":[{"border-t":w()}],"border-color-r":[{"border-r":w()}],"border-color-b":[{"border-b":w()}],"border-color-l":[{"border-l":w()}],"divide-color":[{divide:w()}],"outline-style":[{outline:[...He(),"none","hidden"]}],"outline-offset":[{"outline-offset":[we,se,oe]}],"outline-w":[{outline:["",we,Ir,Hi]}],"outline-color":[{outline:w()}],shadow:[{shadow:["","none",v,vs,bs]}],"shadow-color":[{shadow:w()}],"inset-shadow":[{"inset-shadow":["none",j,vs,bs]}],"inset-shadow-color":[{"inset-shadow":w()}],"ring-w":[{ring:ie()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:w()}],"ring-offset-w":[{"ring-offset":[we,Hi]}],"ring-offset-color":[{"ring-offset":w()}],"inset-ring-w":[{"inset-ring":ie()}],"inset-ring-color":[{"inset-ring":w()}],"text-shadow":[{"text-shadow":["none",N,vs,bs]}],"text-shadow-color":[{"text-shadow":w()}],opacity:[{opacity:[we,se,oe]}],"mix-blend":[{"mix-blend":[...Ce(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ce()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[we]}],"mask-image-linear-from-pos":[{"mask-linear-from":Te()}],"mask-image-linear-to-pos":[{"mask-linear-to":Te()}],"mask-image-linear-from-color":[{"mask-linear-from":w()}],"mask-image-linear-to-color":[{"mask-linear-to":w()}],"mask-image-t-from-pos":[{"mask-t-from":Te()}],"mask-image-t-to-pos":[{"mask-t-to":Te()}],"mask-image-t-from-color":[{"mask-t-from":w()}],"mask-image-t-to-color":[{"mask-t-to":w()}],"mask-image-r-from-pos":[{"mask-r-from":Te()}],"mask-image-r-to-pos":[{"mask-r-to":Te()}],"mask-image-r-from-color":[{"mask-r-from":w()}],"mask-image-r-to-color":[{"mask-r-to":w()}],"mask-image-b-from-pos":[{"mask-b-from":Te()}],"mask-image-b-to-pos":[{"mask-b-to":Te()}],"mask-image-b-from-color":[{"mask-b-from":w()}],"mask-image-b-to-color":[{"mask-b-to":w()}],"mask-image-l-from-pos":[{"mask-l-from":Te()}],"mask-image-l-to-pos":[{"mask-l-to":Te()}],"mask-image-l-from-color":[{"mask-l-from":w()}],"mask-image-l-to-color":[{"mask-l-to":w()}],"mask-image-x-from-pos":[{"mask-x-from":Te()}],"mask-image-x-to-pos":[{"mask-x-to":Te()}],"mask-image-x-from-color":[{"mask-x-from":w()}],"mask-image-x-to-color":[{"mask-x-to":w()}],"mask-image-y-from-pos":[{"mask-y-from":Te()}],"mask-image-y-to-pos":[{"mask-y-to":Te()}],"mask-image-y-from-color":[{"mask-y-from":w()}],"mask-image-y-to-color":[{"mask-y-to":w()}],"mask-image-radial":[{"mask-radial":[se,oe]}],"mask-image-radial-from-pos":[{"mask-radial-from":Te()}],"mask-image-radial-to-pos":[{"mask-radial-to":Te()}],"mask-image-radial-from-color":[{"mask-radial-from":w()}],"mask-image-radial-to-color":[{"mask-radial-to":w()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":U()}],"mask-image-conic-pos":[{"mask-conic":[we]}],"mask-image-conic-from-pos":[{"mask-conic-from":Te()}],"mask-image-conic-to-pos":[{"mask-conic-to":Te()}],"mask-image-conic-from-color":[{"mask-conic-from":w()}],"mask-image-conic-to-color":[{"mask-conic-to":w()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:q()}],"mask-repeat":[{mask:J()}],"mask-size":[{mask:$()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",se,oe]}],filter:[{filter:["","none",se,oe]}],blur:[{blur:Pt()}],brightness:[{brightness:[we,se,oe]}],contrast:[{contrast:[we,se,oe]}],"drop-shadow":[{"drop-shadow":["","none",k,vs,bs]}],"drop-shadow-color":[{"drop-shadow":w()}],grayscale:[{grayscale:["",we,se,oe]}],"hue-rotate":[{"hue-rotate":[we,se,oe]}],invert:[{invert:["",we,se,oe]}],saturate:[{saturate:[we,se,oe]}],sepia:[{sepia:["",we,se,oe]}],"backdrop-filter":[{"backdrop-filter":["","none",se,oe]}],"backdrop-blur":[{"backdrop-blur":Pt()}],"backdrop-brightness":[{"backdrop-brightness":[we,se,oe]}],"backdrop-contrast":[{"backdrop-contrast":[we,se,oe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",we,se,oe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[we,se,oe]}],"backdrop-invert":[{"backdrop-invert":["",we,se,oe]}],"backdrop-opacity":[{"backdrop-opacity":[we,se,oe]}],"backdrop-saturate":[{"backdrop-saturate":[we,se,oe]}],"backdrop-sepia":[{"backdrop-sepia":["",we,se,oe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",se,oe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[we,"initial",se,oe]}],ease:[{ease:["linear","initial",R,se,oe]}],delay:[{delay:[we,se,oe]}],animate:[{animate:["none",A,se,oe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,se,oe]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:pt()}],"rotate-x":[{"rotate-x":pt()}],"rotate-y":[{"rotate-y":pt()}],"rotate-z":[{"rotate-z":pt()}],scale:[{scale:qt()}],"scale-x":[{"scale-x":qt()}],"scale-y":[{"scale-y":qt()}],"scale-z":[{"scale-z":qt()}],"scale-3d":["scale-3d"],skew:[{skew:yt()}],"skew-x":[{"skew-x":yt()}],"skew-y":[{"skew-y":yt()}],transform:[{transform:[se,oe,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:$t()}],"translate-x":[{"translate-x":$t()}],"translate-y":[{"translate-y":$t()}],"translate-z":[{"translate-z":$t()}],"translate-none":["translate-none"],accent:[{accent:w()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:w()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",se,oe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mbs":[{"scroll-mbs":P()}],"scroll-mbe":[{"scroll-mbe":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pbs":[{"scroll-pbs":P()}],"scroll-pbe":[{"scroll-pbe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",se,oe]}],fill:[{fill:["none",...w()]}],"stroke-w":[{stroke:[we,Ir,Hi,Wg]}],stroke:[{stroke:["none",...w()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},rw=B5(aw);function Ve(...i){return rw(u0(i))}const ow=m2,A0=y.forwardRef(({className:i,...r},s)=>l.jsx(a0,{ref:s,className:Ve("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",i),...r}));A0.displayName=a0.displayName;const sw=Ys("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),_0=y.forwardRef(({className:i,variant:r,...s},c)=>l.jsx(r0,{ref:c,className:Ve(sw({variant:r}),i),...s}));_0.displayName=r0.displayName;const lw=y.forwardRef(({className:i,...r},s)=>l.jsx(l0,{ref:s,className:Ve("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",i),...r}));lw.displayName=l0.displayName;const O0=y.forwardRef(({className:i,...r},s)=>l.jsx(c0,{ref:s,className:Ve("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",i),"toast-close":"",...r,children:l.jsx(lu,{className:"h-4 w-4"})}));O0.displayName=c0.displayName;const M0=y.forwardRef(({className:i,...r},s)=>l.jsx(o0,{ref:s,className:Ve("text-sm font-semibold",i),...r}));M0.displayName=o0.displayName;const D0=y.forwardRef(({className:i,...r},s)=>l.jsx(s0,{ref:s,className:Ve("text-sm opacity-90",i),...r}));D0.displayName=s0.displayName;function cw(){const{toasts:i}=Un();return l.jsxs(ow,{children:[i.map(function({id:r,title:s,description:c,action:u,...p}){return l.jsxs(_0,{...p,children:[l.jsxs("div",{className:"grid gap-1",children:[s&&l.jsx(M0,{children:s}),c&&l.jsx(D0,{children:c})]}),u,l.jsx(O0,{})]},r)}),l.jsx(A0,{})]})}var dw=Bs[" useId ".trim().toString()]||(()=>{}),uw=0;function z0(i){const[r,s]=y.useState(dw());return Bn(()=>{s(c=>c??String(uw++))},[i]),r?`radix-${r}`:""}const pw=["top","right","bottom","left"],xi=Math.min,Ut=Math.max,Os=Math.round,ys=Math.floor,mn=i=>({x:i,y:i}),fw={left:"right",right:"left",bottom:"top",top:"bottom"};function Yd(i,r,s){return Ut(i,xi(r,s))}function Hn(i,r){return typeof i=="function"?i(r):i}function In(i){return i.split("-")[0]}function Ia(i){return i.split("-")[1]}function uu(i){return i==="x"?"y":"x"}function pu(i){return i==="y"?"height":"width"}function gn(i){const r=i[0];return r==="t"||r==="b"?"y":"x"}function fu(i){return uu(gn(i))}function hw(i,r,s){s===void 0&&(s=!1);const c=Ia(i),u=fu(i),p=pu(u);let h=u==="x"?c===(s?"end":"start")?"right":"left":c==="start"?"bottom":"top";return r.reference[p]>r.floating[p]&&(h=Ms(h)),[h,Ms(h)]}function gw(i){const r=Ms(i);return[Kd(i),r,Kd(r)]}function Kd(i){return i.includes("start")?i.replace("start","end"):i.replace("end","start")}const tm=["left","right"],nm=["right","left"],mw=["top","bottom"],xw=["bottom","top"];function bw(i,r,s){switch(i){case"top":case"bottom":return s?r?nm:tm:r?tm:nm;case"left":case"right":return r?mw:xw;default:return[]}}function vw(i,r,s,c){const u=Ia(i);let p=bw(In(i),s==="start",c);return u&&(p=p.map(h=>h+"-"+u),r&&(p=p.concat(p.map(Kd)))),p}function Ms(i){const r=In(i);return fw[r]+i.slice(r.length)}function yw(i){return{top:0,right:0,bottom:0,left:0,...i}}function R0(i){return typeof i!="number"?yw(i):{top:i,right:i,bottom:i,left:i}}function Ds(i){const{x:r,y:s,width:c,height:u}=i;return{width:c,height:u,top:s,left:r,right:r+c,bottom:s+u,x:r,y:s}}function im(i,r,s){let{reference:c,floating:u}=i;const p=gn(r),h=fu(r),m=pu(h),x=In(r),g=p==="y",v=c.x+c.width/2-u.width/2,j=c.y+c.height/2-u.height/2,N=c[m]/2-u[m]/2;let k;switch(x){case"top":k={x:v,y:c.y-u.height};break;case"bottom":k={x:v,y:c.y+c.height};break;case"right":k={x:c.x+c.width,y:j};break;case"left":k={x:c.x-u.width,y:j};break;default:k={x:c.x,y:c.y}}switch(Ia(r)){case"start":k[h]-=N*(s&&g?-1:1);break;case"end":k[h]+=N*(s&&g?-1:1);break}return k}async function ww(i,r){var s;r===void 0&&(r={});const{x:c,y:u,platform:p,rects:h,elements:m,strategy:x}=i,{boundary:g="clippingAncestors",rootBoundary:v="viewport",elementContext:j="floating",altBoundary:N=!1,padding:k=0}=Hn(r,i),O=R0(k),T=m[N?j==="floating"?"reference":"floating":j],R=Ds(await p.getClippingRect({element:(s=await(p.isElement==null?void 0:p.isElement(T)))==null||s?T:T.contextElement||await(p.getDocumentElement==null?void 0:p.getDocumentElement(m.floating)),boundary:g,rootBoundary:v,strategy:x})),A=j==="floating"?{x:c,y:u,width:h.floating.width,height:h.floating.height}:h.reference,L=await(p.getOffsetParent==null?void 0:p.getOffsetParent(m.floating)),U=await(p.isElement==null?void 0:p.isElement(L))?await(p.getScale==null?void 0:p.getScale(L))||{x:1,y:1}:{x:1,y:1},G=Ds(p.convertOffsetParentRelativeRectToViewportRelativeRect?await p.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:A,offsetParent:L,strategy:x}):A);return{top:(R.top-G.top+O.top)/U.y,bottom:(G.bottom-R.bottom+O.bottom)/U.y,left:(R.left-G.left+O.left)/U.x,right:(G.right-R.right+O.right)/U.x}}const jw=50,Sw=async(i,r,s)=>{const{placement:c="bottom",strategy:u="absolute",middleware:p=[],platform:h}=s,m=h.detectOverflow?h:{...h,detectOverflow:ww},x=await(h.isRTL==null?void 0:h.isRTL(r));let g=await h.getElementRects({reference:i,floating:r,strategy:u}),{x:v,y:j}=im(g,c,x),N=c,k=0;const O={};for(let C=0;C<p.length;C++){const T=p[C];if(!T)continue;const{name:R,fn:A}=T,{x:L,y:U,data:G,reset:I}=await A({x:v,y:j,initialPlacement:c,placement:N,strategy:u,middlewareData:O,rects:g,platform:m,elements:{reference:i,floating:r}});v=L??v,j=U??j,O[R]={...O[R],...G},I&&k<jw&&(k++,typeof I=="object"&&(I.placement&&(N=I.placement),I.rects&&(g=I.rects===!0?await h.getElementRects({reference:i,floating:r,strategy:u}):I.rects),{x:v,y:j}=im(g,N,x)),C=-1)}return{x:v,y:j,placement:N,strategy:u,middlewareData:O}},Nw=i=>({name:"arrow",options:i,async fn(r){const{x:s,y:c,placement:u,rects:p,platform:h,elements:m,middlewareData:x}=r,{element:g,padding:v=0}=Hn(i,r)||{};if(g==null)return{};const j=R0(v),N={x:s,y:c},k=fu(u),O=pu(k),C=await h.getDimensions(g),T=k==="y",R=T?"top":"left",A=T?"bottom":"right",L=T?"clientHeight":"clientWidth",U=p.reference[O]+p.reference[k]-N[k]-p.floating[O],G=N[k]-p.reference[k],I=await(h.getOffsetParent==null?void 0:h.getOffsetParent(g));let X=I?I[L]:0;(!X||!await(h.isElement==null?void 0:h.isElement(I)))&&(X=m.floating[L]||p.floating[O]);const P=U/2-G/2,te=X/2-C[O]/2-1,ne=xi(j[R],te),ce=xi(j[A],te),ue=ne,xe=X-C[O]-ce,V=X/2-C[O]/2+P,ee=Yd(ue,V,xe),_=!x.arrow&&Ia(u)!=null&&V!==ee&&p.reference[O]/2-(V<ue?ne:ce)-C[O]/2<0,F=_?V<ue?V-ue:V-xe:0;return{[k]:N[k]+F,data:{[k]:ee,centerOffset:V-ee-F,..._&&{alignmentOffset:F}},reset:_}}}),kw=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(r){var s,c;const{placement:u,middlewareData:p,rects:h,initialPlacement:m,platform:x,elements:g}=r,{mainAxis:v=!0,crossAxis:j=!0,fallbackPlacements:N,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:C=!0,...T}=Hn(i,r);if((s=p.arrow)!=null&&s.alignmentOffset)return{};const R=In(u),A=gn(m),L=In(m)===m,U=await(x.isRTL==null?void 0:x.isRTL(g.floating)),G=N||(L||!C?[Ms(m)]:gw(m)),I=O!=="none";!N&&I&&G.push(...vw(m,C,O,U));const X=[m,...G],P=await x.detectOverflow(r,T),te=[];let ne=((c=p.flip)==null?void 0:c.overflows)||[];if(v&&te.push(P[R]),j){const V=hw(u,h,U);te.push(P[V[0]],P[V[1]])}if(ne=[...ne,{placement:u,overflows:te}],!te.every(V=>V<=0)){var ce,ue;const V=(((ce=p.flip)==null?void 0:ce.index)||0)+1,ee=X[V];if(ee&&(!(j==="alignment"?A!==gn(ee):!1)||ne.every(Z=>gn(Z.placement)===A?Z.overflows[0]>0:!0)))return{data:{index:V,overflows:ne},reset:{placement:ee}};let _=(ue=ne.filter(F=>F.overflows[0]<=0).sort((F,Z)=>F.overflows[1]-Z.overflows[1])[0])==null?void 0:ue.placement;if(!_)switch(k){case"bestFit":{var xe;const F=(xe=ne.filter(Z=>{if(I){const le=gn(Z.placement);return le===A||le==="y"}return!0}).map(Z=>[Z.placement,Z.overflows.filter(le=>le>0).reduce((le,w)=>le+w,0)]).sort((Z,le)=>Z[1]-le[1])[0])==null?void 0:xe[0];F&&(_=F);break}case"initialPlacement":_=m;break}if(u!==_)return{reset:{placement:_}}}return{}}}};function am(i,r){return{top:i.top-r.height,right:i.right-r.width,bottom:i.bottom-r.height,left:i.left-r.width}}function rm(i){return pw.some(r=>i[r]>=0)}const Ew=function(i){return i===void 0&&(i={}),{name:"hide",options:i,async fn(r){const{rects:s,platform:c}=r,{strategy:u="referenceHidden",...p}=Hn(i,r);switch(u){case"referenceHidden":{const h=await c.detectOverflow(r,{...p,elementContext:"reference"}),m=am(h,s.reference);return{data:{referenceHiddenOffsets:m,referenceHidden:rm(m)}}}case"escaped":{const h=await c.detectOverflow(r,{...p,altBoundary:!0}),m=am(h,s.floating);return{data:{escapedOffsets:m,escaped:rm(m)}}}default:return{}}}}},L0=new Set(["left","top"]);async function Tw(i,r){const{placement:s,platform:c,elements:u}=i,p=await(c.isRTL==null?void 0:c.isRTL(u.floating)),h=In(s),m=Ia(s),x=gn(s)==="y",g=L0.has(h)?-1:1,v=p&&x?-1:1,j=Hn(r,i);let{mainAxis:N,crossAxis:k,alignmentAxis:O}=typeof j=="number"?{mainAxis:j,crossAxis:0,alignmentAxis:null}:{mainAxis:j.mainAxis||0,crossAxis:j.crossAxis||0,alignmentAxis:j.alignmentAxis};return m&&typeof O=="number"&&(k=m==="end"?O*-1:O),x?{x:k*v,y:N*g}:{x:N*g,y:k*v}}const Cw=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(r){var s,c;const{x:u,y:p,placement:h,middlewareData:m}=r,x=await Tw(r,i);return h===((s=m.offset)==null?void 0:s.placement)&&(c=m.arrow)!=null&&c.alignmentOffset?{}:{x:u+x.x,y:p+x.y,data:{...x,placement:h}}}}},Aw=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(r){const{x:s,y:c,placement:u,platform:p}=r,{mainAxis:h=!0,crossAxis:m=!1,limiter:x={fn:R=>{let{x:A,y:L}=R;return{x:A,y:L}}},...g}=Hn(i,r),v={x:s,y:c},j=await p.detectOverflow(r,g),N=gn(In(u)),k=uu(N);let O=v[k],C=v[N];if(h){const R=k==="y"?"top":"left",A=k==="y"?"bottom":"right",L=O+j[R],U=O-j[A];O=Yd(L,O,U)}if(m){const R=N==="y"?"top":"left",A=N==="y"?"bottom":"right",L=C+j[R],U=C-j[A];C=Yd(L,C,U)}const T=x.fn({...r,[k]:O,[N]:C});return{...T,data:{x:T.x-s,y:T.y-c,enabled:{[k]:h,[N]:m}}}}}},_w=function(i){return i===void 0&&(i={}),{options:i,fn(r){const{x:s,y:c,placement:u,rects:p,middlewareData:h}=r,{offset:m=0,mainAxis:x=!0,crossAxis:g=!0}=Hn(i,r),v={x:s,y:c},j=gn(u),N=uu(j);let k=v[N],O=v[j];const C=Hn(m,r),T=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:0,crossAxis:0,...C};if(x){const L=N==="y"?"height":"width",U=p.reference[N]-p.floating[L]+T.mainAxis,G=p.reference[N]+p.reference[L]-T.mainAxis;k<U?k=U:k>G&&(k=G)}if(g){var R,A;const L=N==="y"?"width":"height",U=L0.has(In(u)),G=p.reference[j]-p.floating[L]+(U&&((R=h.offset)==null?void 0:R[j])||0)+(U?0:T.crossAxis),I=p.reference[j]+p.reference[L]+(U?0:((A=h.offset)==null?void 0:A[j])||0)-(U?T.crossAxis:0);O<G?O=G:O>I&&(O=I)}return{[N]:k,[j]:O}}}},Ow=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(r){var s,c;const{placement:u,rects:p,platform:h,elements:m}=r,{apply:x=()=>{},...g}=Hn(i,r),v=await h.detectOverflow(r,g),j=In(u),N=Ia(u),k=gn(u)==="y",{width:O,height:C}=p.floating;let T,R;j==="top"||j==="bottom"?(T=j,R=N===(await(h.isRTL==null?void 0:h.isRTL(m.floating))?"start":"end")?"left":"right"):(R=j,T=N==="end"?"top":"bottom");const A=C-v.top-v.bottom,L=O-v.left-v.right,U=xi(C-v[T],A),G=xi(O-v[R],L),I=!r.middlewareData.shift;let X=U,P=G;if((s=r.middlewareData.shift)!=null&&s.enabled.x&&(P=L),(c=r.middlewareData.shift)!=null&&c.enabled.y&&(X=A),I&&!N){const ne=Ut(v.left,0),ce=Ut(v.right,0),ue=Ut(v.top,0),xe=Ut(v.bottom,0);k?P=O-2*(ne!==0||ce!==0?ne+ce:Ut(v.left,v.right)):X=C-2*(ue!==0||xe!==0?ue+xe:Ut(v.top,v.bottom))}await x({...r,availableWidth:P,availableHeight:X});const te=await h.getDimensions(m.floating);return O!==te.width||C!==te.height?{reset:{rects:!0}}:{}}}};function Xs(){return typeof window<"u"}function Ua(i){return B0(i)?(i.nodeName||"").toLowerCase():"#document"}function Gt(i){var r;return(i==null||(r=i.ownerDocument)==null?void 0:r.defaultView)||window}function xn(i){var r;return(r=(B0(i)?i.ownerDocument:i.document)||window.document)==null?void 0:r.documentElement}function B0(i){return Xs()?i instanceof Node||i instanceof Gt(i).Node:!1}function ln(i){return Xs()?i instanceof Element||i instanceof Gt(i).Element:!1}function Gn(i){return Xs()?i instanceof HTMLElement||i instanceof Gt(i).HTMLElement:!1}function om(i){return!Xs()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Gt(i).ShadowRoot}function Jr(i){const{overflow:r,overflowX:s,overflowY:c,display:u}=cn(i);return/auto|scroll|overlay|hidden|clip/.test(r+c+s)&&u!=="inline"&&u!=="contents"}function Mw(i){return/^(table|td|th)$/.test(Ua(i))}function Qs(i){try{if(i.matches(":popover-open"))return!0}catch{}try{return i.matches(":modal")}catch{return!1}}const Dw=/transform|translate|scale|rotate|perspective|filter/,zw=/paint|layout|strict|content/,Ii=i=>!!i&&i!=="none";let Td;function hu(i){const r=ln(i)?cn(i):i;return Ii(r.transform)||Ii(r.translate)||Ii(r.scale)||Ii(r.rotate)||Ii(r.perspective)||!gu()&&(Ii(r.backdropFilter)||Ii(r.filter))||Dw.test(r.willChange||"")||zw.test(r.contain||"")}function Rw(i){let r=bi(i);for(;Gn(r)&&!za(r);){if(hu(r))return r;if(Qs(r))return null;r=bi(r)}return null}function gu(){return Td==null&&(Td=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Td}function za(i){return/^(html|body|#document)$/.test(Ua(i))}function cn(i){return Gt(i).getComputedStyle(i)}function Zs(i){return ln(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function bi(i){if(Ua(i)==="html")return i;const r=i.assignedSlot||i.parentNode||om(i)&&i.host||xn(i);return om(r)?r.host:r}function H0(i){const r=bi(i);return za(r)?i.ownerDocument?i.ownerDocument.body:i.body:Gn(r)&&Jr(r)?r:H0(r)}function Fr(i,r,s){var c;r===void 0&&(r=[]),s===void 0&&(s=!0);const u=H0(i),p=u===((c=i.ownerDocument)==null?void 0:c.body),h=Gt(u);if(p){const m=Fd(h);return r.concat(h,h.visualViewport||[],Jr(u)?u:[],m&&s?Fr(m):[])}else return r.concat(u,Fr(u,[],s))}function Fd(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function I0(i){const r=cn(i);let s=parseFloat(r.width)||0,c=parseFloat(r.height)||0;const u=Gn(i),p=u?i.offsetWidth:s,h=u?i.offsetHeight:c,m=Os(s)!==p||Os(c)!==h;return m&&(s=p,c=h),{width:s,height:c,$:m}}function mu(i){return ln(i)?i:i.contextElement}function Ma(i){const r=mu(i);if(!Gn(r))return mn(1);const s=r.getBoundingClientRect(),{width:c,height:u,$:p}=I0(r);let h=(p?Os(s.width):s.width)/c,m=(p?Os(s.height):s.height)/u;return(!h||!Number.isFinite(h))&&(h=1),(!m||!Number.isFinite(m))&&(m=1),{x:h,y:m}}const Lw=mn(0);function U0(i){const r=Gt(i);return!gu()||!r.visualViewport?Lw:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function Bw(i,r,s){return r===void 0&&(r=!1),!s||r&&s!==Gt(i)?!1:r}function Ui(i,r,s,c){r===void 0&&(r=!1),s===void 0&&(s=!1);const u=i.getBoundingClientRect(),p=mu(i);let h=mn(1);r&&(c?ln(c)&&(h=Ma(c)):h=Ma(i));const m=Bw(p,s,c)?U0(p):mn(0);let x=(u.left+m.x)/h.x,g=(u.top+m.y)/h.y,v=u.width/h.x,j=u.height/h.y;if(p){const N=Gt(p),k=c&&ln(c)?Gt(c):c;let O=N,C=Fd(O);for(;C&&c&&k!==O;){const T=Ma(C),R=C.getBoundingClientRect(),A=cn(C),L=R.left+(C.clientLeft+parseFloat(A.paddingLeft))*T.x,U=R.top+(C.clientTop+parseFloat(A.paddingTop))*T.y;x*=T.x,g*=T.y,v*=T.x,j*=T.y,x+=L,g+=U,O=Gt(C),C=Fd(O)}}return Ds({width:v,height:j,x,y:g})}function Js(i,r){const s=Zs(i).scrollLeft;return r?r.left+s:Ui(xn(i)).left+s}function G0(i,r){const s=i.getBoundingClientRect(),c=s.left+r.scrollLeft-Js(i,s),u=s.top+r.scrollTop;return{x:c,y:u}}function Hw(i){let{elements:r,rect:s,offsetParent:c,strategy:u}=i;const p=u==="fixed",h=xn(c),m=r?Qs(r.floating):!1;if(c===h||m&&p)return s;let x={scrollLeft:0,scrollTop:0},g=mn(1);const v=mn(0),j=Gn(c);if((j||!j&&!p)&&((Ua(c)!=="body"||Jr(h))&&(x=Zs(c)),j)){const k=Ui(c);g=Ma(c),v.x=k.x+c.clientLeft,v.y=k.y+c.clientTop}const N=h&&!j&&!p?G0(h,x):mn(0);return{width:s.width*g.x,height:s.height*g.y,x:s.x*g.x-x.scrollLeft*g.x+v.x+N.x,y:s.y*g.y-x.scrollTop*g.y+v.y+N.y}}function Iw(i){return Array.from(i.getClientRects())}function Uw(i){const r=xn(i),s=Zs(i),c=i.ownerDocument.body,u=Ut(r.scrollWidth,r.clientWidth,c.scrollWidth,c.clientWidth),p=Ut(r.scrollHeight,r.clientHeight,c.scrollHeight,c.clientHeight);let h=-s.scrollLeft+Js(i);const m=-s.scrollTop;return cn(c).direction==="rtl"&&(h+=Ut(r.clientWidth,c.clientWidth)-u),{width:u,height:p,x:h,y:m}}const sm=25;function Gw(i,r){const s=Gt(i),c=xn(i),u=s.visualViewport;let p=c.clientWidth,h=c.clientHeight,m=0,x=0;if(u){p=u.width,h=u.height;const v=gu();(!v||v&&r==="fixed")&&(m=u.offsetLeft,x=u.offsetTop)}const g=Js(c);if(g<=0){const v=c.ownerDocument,j=v.body,N=getComputedStyle(j),k=v.compatMode==="CSS1Compat"&&parseFloat(N.marginLeft)+parseFloat(N.marginRight)||0,O=Math.abs(c.clientWidth-j.clientWidth-k);O<=sm&&(p-=O)}else g<=sm&&(p+=g);return{width:p,height:h,x:m,y:x}}function Pw(i,r){const s=Ui(i,!0,r==="fixed"),c=s.top+i.clientTop,u=s.left+i.clientLeft,p=Gn(i)?Ma(i):mn(1),h=i.clientWidth*p.x,m=i.clientHeight*p.y,x=u*p.x,g=c*p.y;return{width:h,height:m,x,y:g}}function lm(i,r,s){let c;if(r==="viewport")c=Gw(i,s);else if(r==="document")c=Uw(xn(i));else if(ln(r))c=Pw(r,s);else{const u=U0(i);c={x:r.x-u.x,y:r.y-u.y,width:r.width,height:r.height}}return Ds(c)}function P0(i,r){const s=bi(i);return s===r||!ln(s)||za(s)?!1:cn(s).position==="fixed"||P0(s,r)}function qw(i,r){const s=r.get(i);if(s)return s;let c=Fr(i,[],!1).filter(m=>ln(m)&&Ua(m)!=="body"),u=null;const p=cn(i).position==="fixed";let h=p?bi(i):i;for(;ln(h)&&!za(h);){const m=cn(h),x=hu(h);!x&&m.position==="fixed"&&(u=null),(p?!x&&!u:!x&&m.position==="static"&&!!u&&(u.position==="absolute"||u.position==="fixed")||Jr(h)&&!x&&P0(i,h))?c=c.filter(v=>v!==h):u=m,h=bi(h)}return r.set(i,c),c}function Vw(i){let{element:r,boundary:s,rootBoundary:c,strategy:u}=i;const h=[...s==="clippingAncestors"?Qs(r)?[]:qw(r,this._c):[].concat(s),c],m=lm(r,h[0],u);let x=m.top,g=m.right,v=m.bottom,j=m.left;for(let N=1;N<h.length;N++){const k=lm(r,h[N],u);x=Ut(k.top,x),g=xi(k.right,g),v=xi(k.bottom,v),j=Ut(k.left,j)}return{width:g-j,height:v-x,x:j,y:x}}function Yw(i){const{width:r,height:s}=I0(i);return{width:r,height:s}}function Kw(i,r,s){const c=Gn(r),u=xn(r),p=s==="fixed",h=Ui(i,!0,p,r);let m={scrollLeft:0,scrollTop:0};const x=mn(0);function g(){x.x=Js(u)}if(c||!c&&!p)if((Ua(r)!=="body"||Jr(u))&&(m=Zs(r)),c){const k=Ui(r,!0,p,r);x.x=k.x+r.clientLeft,x.y=k.y+r.clientTop}else u&&g();p&&!c&&u&&g();const v=u&&!c&&!p?G0(u,m):mn(0),j=h.left+m.scrollLeft-x.x-v.x,N=h.top+m.scrollTop-x.y-v.y;return{x:j,y:N,width:h.width,height:h.height}}function Cd(i){return cn(i).position==="static"}function cm(i,r){if(!Gn(i)||cn(i).position==="fixed")return null;if(r)return r(i);let s=i.offsetParent;return xn(i)===s&&(s=s.ownerDocument.body),s}function q0(i,r){const s=Gt(i);if(Qs(i))return s;if(!Gn(i)){let u=bi(i);for(;u&&!za(u);){if(ln(u)&&!Cd(u))return u;u=bi(u)}return s}let c=cm(i,r);for(;c&&Mw(c)&&Cd(c);)c=cm(c,r);return c&&za(c)&&Cd(c)&&!hu(c)?s:c||Rw(i)||s}const Fw=async function(i){const r=this.getOffsetParent||q0,s=this.getDimensions,c=await s(i.floating);return{reference:Kw(i.reference,await r(i.floating),i.strategy),floating:{x:0,y:0,width:c.width,height:c.height}}};function Xw(i){return cn(i).direction==="rtl"}const Qw={convertOffsetParentRelativeRectToViewportRelativeRect:Hw,getDocumentElement:xn,getClippingRect:Vw,getOffsetParent:q0,getElementRects:Fw,getClientRects:Iw,getDimensions:Yw,getScale:Ma,isElement:ln,isRTL:Xw};function V0(i,r){return i.x===r.x&&i.y===r.y&&i.width===r.width&&i.height===r.height}function Zw(i,r){let s=null,c;const u=xn(i);function p(){var m;clearTimeout(c),(m=s)==null||m.disconnect(),s=null}function h(m,x){m===void 0&&(m=!1),x===void 0&&(x=1),p();const g=i.getBoundingClientRect(),{left:v,top:j,width:N,height:k}=g;if(m||r(),!N||!k)return;const O=ys(j),C=ys(u.clientWidth-(v+N)),T=ys(u.clientHeight-(j+k)),R=ys(v),L={rootMargin:-O+"px "+-C+"px "+-T+"px "+-R+"px",threshold:Ut(0,xi(1,x))||1};let U=!0;function G(I){const X=I[0].intersectionRatio;if(X!==x){if(!U)return h();X?h(!1,X):c=setTimeout(()=>{h(!1,1e-7)},1e3)}X===1&&!V0(g,i.getBoundingClientRect())&&h(),U=!1}try{s=new IntersectionObserver(G,{...L,root:u.ownerDocument})}catch{s=new IntersectionObserver(G,L)}s.observe(i)}return h(!0),p}function Jw(i,r,s,c){c===void 0&&(c={});const{ancestorScroll:u=!0,ancestorResize:p=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:x=!1}=c,g=mu(i),v=u||p?[...g?Fr(g):[],...r?Fr(r):[]]:[];v.forEach(R=>{u&&R.addEventListener("scroll",s,{passive:!0}),p&&R.addEventListener("resize",s)});const j=g&&m?Zw(g,s):null;let N=-1,k=null;h&&(k=new ResizeObserver(R=>{let[A]=R;A&&A.target===g&&k&&r&&(k.unobserve(r),cancelAnimationFrame(N),N=requestAnimationFrame(()=>{var L;(L=k)==null||L.observe(r)})),s()}),g&&!x&&k.observe(g),r&&k.observe(r));let O,C=x?Ui(i):null;x&&T();function T(){const R=Ui(i);C&&!V0(C,R)&&s(),C=R,O=requestAnimationFrame(T)}return s(),()=>{var R;v.forEach(A=>{u&&A.removeEventListener("scroll",s),p&&A.removeEventListener("resize",s)}),j?.(),(R=k)==null||R.disconnect(),k=null,x&&cancelAnimationFrame(O)}}const Ww=Cw,$w=Aw,ej=kw,tj=Ow,nj=Ew,dm=Nw,ij=_w,aj=(i,r,s)=>{const c=new Map,u={platform:Qw,...s},p={...u.platform,_c:c};return Sw(i,r,{...u,platform:p})};var rj=typeof document<"u",oj=function(){},Ns=rj?y.useLayoutEffect:oj;function zs(i,r){if(i===r)return!0;if(typeof i!=typeof r)return!1;if(typeof i=="function"&&i.toString()===r.toString())return!0;let s,c,u;if(i&&r&&typeof i=="object"){if(Array.isArray(i)){if(s=i.length,s!==r.length)return!1;for(c=s;c--!==0;)if(!zs(i[c],r[c]))return!1;return!0}if(u=Object.keys(i),s=u.length,s!==Object.keys(r).length)return!1;for(c=s;c--!==0;)if(!{}.hasOwnProperty.call(r,u[c]))return!1;for(c=s;c--!==0;){const p=u[c];if(!(p==="_owner"&&i.$$typeof)&&!zs(i[p],r[p]))return!1}return!0}return i!==i&&r!==r}function Y0(i){return typeof window>"u"?1:(i.ownerDocument.defaultView||window).devicePixelRatio||1}function um(i,r){const s=Y0(i);return Math.round(r*s)/s}function Ad(i){const r=y.useRef(i);return Ns(()=>{r.current=i}),r}function sj(i){i===void 0&&(i={});const{placement:r="bottom",strategy:s="absolute",middleware:c=[],platform:u,elements:{reference:p,floating:h}={},transform:m=!0,whileElementsMounted:x,open:g}=i,[v,j]=y.useState({x:0,y:0,strategy:s,placement:r,middlewareData:{},isPositioned:!1}),[N,k]=y.useState(c);zs(N,c)||k(c);const[O,C]=y.useState(null),[T,R]=y.useState(null),A=y.useCallback(Z=>{Z!==I.current&&(I.current=Z,C(Z))},[]),L=y.useCallback(Z=>{Z!==X.current&&(X.current=Z,R(Z))},[]),U=p||O,G=h||T,I=y.useRef(null),X=y.useRef(null),P=y.useRef(v),te=x!=null,ne=Ad(x),ce=Ad(u),ue=Ad(g),xe=y.useCallback(()=>{if(!I.current||!X.current)return;const Z={placement:r,strategy:s,middleware:N};ce.current&&(Z.platform=ce.current),aj(I.current,X.current,Z).then(le=>{const w={...le,isPositioned:ue.current!==!1};V.current&&!zs(P.current,w)&&(P.current=w,Gs.flushSync(()=>{j(w)}))})},[N,r,s,ce,ue]);Ns(()=>{g===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,j(Z=>({...Z,isPositioned:!1})))},[g]);const V=y.useRef(!1);Ns(()=>(V.current=!0,()=>{V.current=!1}),[]),Ns(()=>{if(U&&(I.current=U),G&&(X.current=G),U&&G){if(ne.current)return ne.current(U,G,xe);xe()}},[U,G,xe,ne,te]);const ee=y.useMemo(()=>({reference:I,floating:X,setReference:A,setFloating:L}),[A,L]),_=y.useMemo(()=>({reference:U,floating:G}),[U,G]),F=y.useMemo(()=>{const Z={position:s,left:0,top:0};if(!_.floating)return Z;const le=um(_.floating,v.x),w=um(_.floating,v.y);return m?{...Z,transform:"translate("+le+"px, "+w+"px)",...Y0(_.floating)>=1.5&&{willChange:"transform"}}:{position:s,left:le,top:w}},[s,m,_.floating,v.x,v.y]);return y.useMemo(()=>({...v,update:xe,refs:ee,elements:_,floatingStyles:F}),[v,xe,ee,_,F])}const lj=i=>{function r(s){return{}.hasOwnProperty.call(s,"current")}return{name:"arrow",options:i,fn(s){const{element:c,padding:u}=typeof i=="function"?i(s):i;return c&&r(c)?c.current!=null?dm({element:c.current,padding:u}).fn(s):{}:c?dm({element:c,padding:u}).fn(s):{}}}},cj=(i,r)=>{const s=Ww(i);return{name:s.name,fn:s.fn,options:[i,r]}},dj=(i,r)=>{const s=$w(i);return{name:s.name,fn:s.fn,options:[i,r]}},uj=(i,r)=>({fn:ij(i).fn,options:[i,r]}),pj=(i,r)=>{const s=ej(i);return{name:s.name,fn:s.fn,options:[i,r]}},fj=(i,r)=>{const s=tj(i);return{name:s.name,fn:s.fn,options:[i,r]}},hj=(i,r)=>{const s=nj(i);return{name:s.name,fn:s.fn,options:[i,r]}},gj=(i,r)=>{const s=lj(i);return{name:s.name,fn:s.fn,options:[i,r]}};var mj="Arrow",K0=y.forwardRef((i,r)=>{const{children:s,width:c=10,height:u=5,...p}=i;return l.jsx(Ye.svg,{...p,ref:r,width:c,height:u,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:i.asChild?s:l.jsx("polygon",{points:"0,0 30,0 15,10"})})});K0.displayName=mj;var xj=K0;function F0(i){const[r,s]=y.useState(void 0);return Bn(()=>{if(i){s({width:i.offsetWidth,height:i.offsetHeight});const c=new ResizeObserver(u=>{if(!Array.isArray(u)||!u.length)return;const p=u[0];let h,m;if("borderBoxSize"in p){const x=p.borderBoxSize,g=Array.isArray(x)?x[0]:x;h=g.inlineSize,m=g.blockSize}else h=i.offsetWidth,m=i.offsetHeight;s({width:h,height:m})});return c.observe(i,{box:"border-box"}),()=>c.unobserve(i)}else s(void 0)},[i]),r}var X0="Popper",[Q0,Z0]=Pi(X0),[p4,J0]=Q0(X0),W0="PopperAnchor",$0=y.forwardRef((i,r)=>{const{__scopePopper:s,virtualRef:c,...u}=i,p=J0(W0,s),h=y.useRef(null),m=At(r,h),x=y.useRef(null);return y.useEffect(()=>{const g=x.current;x.current=c?.current||h.current,g!==x.current&&p.onAnchorChange(x.current)}),c?null:l.jsx(Ye.div,{...u,ref:m})});$0.displayName=W0;var xu="PopperContent",[bj,vj]=Q0(xu),ex=y.forwardRef((i,r)=>{const{__scopePopper:s,side:c="bottom",sideOffset:u=0,align:p="center",alignOffset:h=0,arrowPadding:m=0,avoidCollisions:x=!0,collisionBoundary:g=[],collisionPadding:v=0,sticky:j="partial",hideWhenDetached:N=!1,updatePositionStrategy:k="optimized",onPlaced:O,...C}=i,T=J0(xu,s),[R,A]=y.useState(null),L=At(r,He=>A(He)),[U,G]=y.useState(null),I=F0(U),X=I?.width??0,P=I?.height??0,te=c+(p!=="center"?"-"+p:""),ne=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},ce=Array.isArray(g)?g:[g],ue=ce.length>0,xe={padding:ne,boundary:ce.filter(wj),altBoundary:ue},{refs:V,floatingStyles:ee,placement:_,isPositioned:F,middlewareData:Z}=sj({strategy:"fixed",placement:te,whileElementsMounted:(...He)=>Jw(...He,{animationFrame:k==="always"}),elements:{reference:T.anchor},middleware:[cj({mainAxis:u+P,alignmentAxis:h}),x&&dj({mainAxis:!0,crossAxis:!1,limiter:j==="partial"?uj():void 0,...xe}),x&&pj({...xe}),fj({...xe,apply:({elements:He,rects:Ce,availableWidth:Te,availableHeight:Pt})=>{const{width:pt,height:qt}=Ce.reference,yt=He.floating.style;yt.setProperty("--radix-popper-available-width",`${Te}px`),yt.setProperty("--radix-popper-available-height",`${Pt}px`),yt.setProperty("--radix-popper-anchor-width",`${pt}px`),yt.setProperty("--radix-popper-anchor-height",`${qt}px`)}}),U&&gj({element:U,padding:m}),jj({arrowWidth:X,arrowHeight:P}),N&&hj({strategy:"referenceHidden",...xe})]}),[le,w]=ix(_),q=Ln(O);Bn(()=>{F&&q?.()},[F,q]);const J=Z.arrow?.x,$=Z.arrow?.y,ae=Z.arrow?.centerOffset!==0,[pe,ie]=y.useState();return Bn(()=>{R&&ie(window.getComputedStyle(R).zIndex)},[R]),l.jsx("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...ee,transform:F?ee.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:pe,"--radix-popper-transform-origin":[Z.transformOrigin?.x,Z.transformOrigin?.y].join(" "),...Z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:i.dir,children:l.jsx(bj,{scope:s,placedSide:le,onArrowChange:G,arrowX:J,arrowY:$,shouldHideArrow:ae,children:l.jsx(Ye.div,{"data-side":le,"data-align":w,...C,ref:L,style:{...C.style,animation:F?void 0:"none"}})})})});ex.displayName=xu;var tx="PopperArrow",yj={top:"bottom",right:"left",bottom:"top",left:"right"},nx=y.forwardRef(function(r,s){const{__scopePopper:c,...u}=r,p=vj(tx,c),h=yj[p.placedSide];return l.jsx("span",{ref:p.onArrowChange,style:{position:"absolute",left:p.arrowX,top:p.arrowY,[h]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[p.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[p.placedSide],visibility:p.shouldHideArrow?"hidden":void 0},children:l.jsx(xj,{...u,ref:s,style:{...u.style,display:"block"}})})});nx.displayName=tx;function wj(i){return i!==null}var jj=i=>({name:"transformOrigin",options:i,fn(r){const{placement:s,rects:c,middlewareData:u}=r,h=u.arrow?.centerOffset!==0,m=h?0:i.arrowWidth,x=h?0:i.arrowHeight,[g,v]=ix(s),j={start:"0%",center:"50%",end:"100%"}[v],N=(u.arrow?.x??0)+m/2,k=(u.arrow?.y??0)+x/2;let O="",C="";return g==="bottom"?(O=h?j:`${N}px`,C=`${-x}px`):g==="top"?(O=h?j:`${N}px`,C=`${c.floating.height+x}px`):g==="right"?(O=`${-x}px`,C=h?j:`${k}px`):g==="left"&&(O=`${c.floating.width+x}px`,C=h?j:`${k}px`),{data:{x:O,y:C}}}});function ix(i){const[r,s="center"]=i.split("-");return[r,s]}var Sj=$0,Nj=ex,kj=nx,[Ws]=Pi("Tooltip",[Z0]),bu=Z0(),ax="TooltipProvider",Ej=700,pm="tooltip.open",[Tj,rx]=Ws(ax),ox=i=>{const{__scopeTooltip:r,delayDuration:s=Ej,skipDelayDuration:c=300,disableHoverableContent:u=!1,children:p}=i,h=y.useRef(!0),m=y.useRef(!1),x=y.useRef(0);return y.useEffect(()=>{const g=x.current;return()=>window.clearTimeout(g)},[]),l.jsx(Tj,{scope:r,isOpenDelayedRef:h,delayDuration:s,onOpen:y.useCallback(()=>{window.clearTimeout(x.current),h.current=!1},[]),onClose:y.useCallback(()=>{window.clearTimeout(x.current),x.current=window.setTimeout(()=>h.current=!0,c)},[c]),isPointerInTransitRef:m,onPointerInTransitChange:y.useCallback(g=>{m.current=g},[]),disableHoverableContent:u,children:p})};ox.displayName=ax;var sx="Tooltip",[f4,Wr]=Ws(sx),Xd="TooltipTrigger",Cj=y.forwardRef((i,r)=>{const{__scopeTooltip:s,...c}=i,u=Wr(Xd,s),p=rx(Xd,s),h=bu(s),m=y.useRef(null),x=At(r,m,u.onTriggerChange),g=y.useRef(!1),v=y.useRef(!1),j=y.useCallback(()=>g.current=!1,[]);return y.useEffect(()=>()=>document.removeEventListener("pointerup",j),[j]),l.jsx(Sj,{asChild:!0,...h,children:l.jsx(Ye.button,{"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute,...c,ref:x,onPointerMove:Oe(i.onPointerMove,N=>{N.pointerType!=="touch"&&!v.current&&!p.isPointerInTransitRef.current&&(u.onTriggerEnter(),v.current=!0)}),onPointerLeave:Oe(i.onPointerLeave,()=>{u.onTriggerLeave(),v.current=!1}),onPointerDown:Oe(i.onPointerDown,()=>{u.open&&u.onClose(),g.current=!0,document.addEventListener("pointerup",j,{once:!0})}),onFocus:Oe(i.onFocus,()=>{g.current||u.onOpen()}),onBlur:Oe(i.onBlur,u.onClose),onClick:Oe(i.onClick,u.onClose)})})});Cj.displayName=Xd;var vu="TooltipPortal",[Aj,_j]=Ws(vu,{forceMount:void 0}),lx=i=>{const{__scopeTooltip:r,forceMount:s,children:c,container:u}=i,p=Wr(vu,r);return l.jsx(Aj,{scope:r,forceMount:s,children:l.jsx(Ha,{present:s||p.open,children:l.jsx(au,{asChild:!0,container:u,children:c})})})};lx.displayName=vu;var Ra="TooltipContent",cx=y.forwardRef((i,r)=>{const s=_j(Ra,i.__scopeTooltip),{forceMount:c=s.forceMount,side:u="top",...p}=i,h=Wr(Ra,i.__scopeTooltip);return l.jsx(Ha,{present:c||h.open,children:h.disableHoverableContent?l.jsx(dx,{side:u,...p,ref:r}):l.jsx(Oj,{side:u,...p,ref:r})})}),Oj=y.forwardRef((i,r)=>{const s=Wr(Ra,i.__scopeTooltip),c=rx(Ra,i.__scopeTooltip),u=y.useRef(null),p=At(r,u),[h,m]=y.useState(null),{trigger:x,onClose:g}=s,v=u.current,{onPointerInTransitChange:j}=c,N=y.useCallback(()=>{m(null),j(!1)},[j]),k=y.useCallback((O,C)=>{const T=O.currentTarget,R={x:O.clientX,y:O.clientY},A=Lj(R,T.getBoundingClientRect()),L=Bj(R,A),U=Hj(C.getBoundingClientRect()),G=Uj([...L,...U]);m(G),j(!0)},[j]);return y.useEffect(()=>()=>N(),[N]),y.useEffect(()=>{if(x&&v){const O=T=>k(T,v),C=T=>k(T,x);return x.addEventListener("pointerleave",O),v.addEventListener("pointerleave",C),()=>{x.removeEventListener("pointerleave",O),v.removeEventListener("pointerleave",C)}}},[x,v,k,N]),y.useEffect(()=>{if(h){const O=C=>{const T=C.target,R={x:C.clientX,y:C.clientY},A=x?.contains(T)||v?.contains(T),L=!Ij(R,h);A?N():L&&(N(),g())};return document.addEventListener("pointermove",O),()=>document.removeEventListener("pointermove",O)}},[x,v,h,g,N]),l.jsx(dx,{...i,ref:p})}),[Mj,Dj]=Ws(sx,{isInside:!1}),zj=Ay("TooltipContent"),dx=y.forwardRef((i,r)=>{const{__scopeTooltip:s,children:c,"aria-label":u,onEscapeKeyDown:p,onPointerDownOutside:h,...m}=i,x=Wr(Ra,s),g=bu(s),{onClose:v}=x;return y.useEffect(()=>(document.addEventListener(pm,v),()=>document.removeEventListener(pm,v)),[v]),y.useEffect(()=>{if(x.trigger){const j=N=>{N.target?.contains(x.trigger)&&v()};return window.addEventListener("scroll",j,{capture:!0}),()=>window.removeEventListener("scroll",j,{capture:!0})}},[x.trigger,v]),l.jsx(iu,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:j=>j.preventDefault(),onDismiss:v,children:l.jsxs(Nj,{"data-state":x.stateAttribute,...g,...m,ref:r,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[l.jsx(zj,{children:c}),l.jsx(Mj,{scope:s,isInside:!0,children:l.jsx(Wy,{id:x.contentId,role:"tooltip",children:u||c})})]})})});cx.displayName=Ra;var ux="TooltipArrow",Rj=y.forwardRef((i,r)=>{const{__scopeTooltip:s,...c}=i,u=bu(s);return Dj(ux,s).isInside?null:l.jsx(kj,{...u,...c,ref:r})});Rj.displayName=ux;function Lj(i,r){const s=Math.abs(r.top-i.y),c=Math.abs(r.bottom-i.y),u=Math.abs(r.right-i.x),p=Math.abs(r.left-i.x);switch(Math.min(s,c,u,p)){case p:return"left";case u:return"right";case s:return"top";case c:return"bottom";default:throw new Error("unreachable")}}function Bj(i,r,s=5){const c=[];switch(r){case"top":c.push({x:i.x-s,y:i.y+s},{x:i.x+s,y:i.y+s});break;case"bottom":c.push({x:i.x-s,y:i.y-s},{x:i.x+s,y:i.y-s});break;case"left":c.push({x:i.x+s,y:i.y-s},{x:i.x+s,y:i.y+s});break;case"right":c.push({x:i.x-s,y:i.y-s},{x:i.x-s,y:i.y+s});break}return c}function Hj(i){const{top:r,right:s,bottom:c,left:u}=i;return[{x:u,y:r},{x:s,y:r},{x:s,y:c},{x:u,y:c}]}function Ij(i,r){const{x:s,y:c}=i;let u=!1;for(let p=0,h=r.length-1;p<r.length;h=p++){const m=r[p],x=r[h],g=m.x,v=m.y,j=x.x,N=x.y;v>c!=N>c&&s<(j-g)*(c-v)/(N-v)+g&&(u=!u)}return u}function Uj(i){const r=i.slice();return r.sort((s,c)=>s.x<c.x?-1:s.x>c.x?1:s.y<c.y?-1:s.y>c.y?1:0),Gj(r)}function Gj(i){if(i.length<=1)return i.slice();const r=[];for(let c=0;c<i.length;c++){const u=i[c];for(;r.length>=2;){const p=r[r.length-1],h=r[r.length-2];if((p.x-h.x)*(u.y-h.y)>=(p.y-h.y)*(u.x-h.x))r.pop();else break}r.push(u)}r.pop();const s=[];for(let c=i.length-1;c>=0;c--){const u=i[c];for(;s.length>=2;){const p=s[s.length-1],h=s[s.length-2];if((p.x-h.x)*(u.y-h.y)>=(p.y-h.y)*(u.x-h.x))s.pop();else break}s.push(u)}return s.pop(),r.length===1&&s.length===1&&r[0].x===s[0].x&&r[0].y===s[0].y?r:r.concat(s)}var Pj=ox,qj=lx,px=cx;const Vj=Pj,Yj=y.forwardRef(({className:i,sideOffset:r=4,...s},c)=>l.jsx(qj,{children:l.jsx(px,{ref:c,sideOffset:r,className:Ve("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",i),...s})}));Yj.displayName=px.displayName;const Xe=y.forwardRef(({className:i,...r},s)=>l.jsx("div",{ref:s,className:Ve("rounded-xl border bg-card text-card-foreground shadow",i),...r}));Xe.displayName="Card";const et=y.forwardRef(({className:i,...r},s)=>l.jsx("div",{ref:s,className:Ve("flex flex-col space-y-1.5 p-6",i),...r}));et.displayName="CardHeader";const tt=y.forwardRef(({className:i,...r},s)=>l.jsx("div",{ref:s,className:Ve("font-semibold leading-none tracking-tight",i),...r}));tt.displayName="CardTitle";const rn=y.forwardRef(({className:i,...r},s)=>l.jsx("div",{ref:s,className:Ve("text-sm text-muted-foreground",i),...r}));rn.displayName="CardDescription";const Qe=y.forwardRef(({className:i,...r},s)=>l.jsx("div",{ref:s,className:Ve("p-6 pt-0",i),...r}));Qe.displayName="CardContent";const Kj=y.forwardRef(({className:i,...r},s)=>l.jsx("div",{ref:s,className:Ve("flex items-center p-6 pt-0",i),...r}));Kj.displayName="CardFooter";function Fj(){return l.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:l.jsx(Xe,{className:"w-full max-w-md mx-4",children:l.jsxs(Qe,{className:"pt-6",children:[l.jsxs("div",{className:"flex mb-4 gap-2",children:[l.jsx(M2,{className:"h-8 w-8 text-red-500"}),l.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"})]}),l.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Did you forget to add the page to the router?"})]})})})}var Xj=Symbol.for("react.lazy"),Rs=Bs[" use ".trim().toString()];function Qj(i){return typeof i=="object"&&i!==null&&"then"in i}function fx(i){return i!=null&&typeof i=="object"&&"$$typeof"in i&&i.$$typeof===Xj&&"_payload"in i&&Qj(i._payload)}function hx(i){const r=Jj(i),s=y.forwardRef((c,u)=>{let{children:p,...h}=c;fx(p)&&typeof Rs=="function"&&(p=Rs(p._payload));const m=y.Children.toArray(p),x=m.find($j);if(x){const g=x.props.children,v=m.map(j=>j===x?y.Children.count(g)>1?y.Children.only(null):y.isValidElement(g)?g.props.children:null:j);return l.jsx(r,{...h,ref:u,children:y.isValidElement(g)?y.cloneElement(g,void 0,v):null})}return l.jsx(r,{...h,ref:u,children:p})});return s.displayName=`${i}.Slot`,s}var Zj=hx("Slot");function Jj(i){const r=y.forwardRef((s,c)=>{let{children:u,...p}=s;if(fx(u)&&typeof Rs=="function"&&(u=Rs(u._payload)),y.isValidElement(u)){const h=t3(u),m=e3(p,u.props);return u.type!==y.Fragment&&(m.ref=c?nu(c,h):h),y.cloneElement(u,m)}return y.Children.count(u)>1?y.Children.only(null):null});return r.displayName=`${i}.SlotClone`,r}var Wj=Symbol("radix.slottable");function $j(i){return y.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===Wj}function e3(i,r){const s={...r};for(const c in r){const u=i[c],p=r[c];/^on[A-Z]/.test(c)?u&&p?s[c]=(...m)=>{const x=p(...m);return u(...m),x}:u&&(s[c]=u):c==="style"?s[c]={...u,...p}:c==="className"&&(s[c]=[u,p].filter(Boolean).join(" "))}return{...i,...s}}function t3(i){let r=Object.getOwnPropertyDescriptor(i.props,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning;return s?i.ref:(r=Object.getOwnPropertyDescriptor(i,"ref")?.get,s=r&&"isReactWarning"in r&&r.isReactWarning,s?i.props.ref:i.props.ref||i.ref)}const n3=Ys("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",{variants:{variant:{default:"bg-primary text-primary-foreground border border-primary-border",destructive:"bg-destructive text-destructive-foreground shadow-sm border-destructive-border",outline:" border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",secondary:"border bg-secondary text-secondary-foreground border border-secondary-border ",ghost:"border border-transparent",link:"text-primary underline-offset-4 hover:underline"},size:{default:"min-h-9 px-4 py-2",sm:"min-h-8 rounded-md px-3 text-xs",lg:"min-h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),ve=y.forwardRef(({className:i,variant:r,size:s,asChild:c=!1,...u},p)=>{const h=c?Zj:"button";return l.jsx(h,{className:Ve(n3({variant:r,size:s,className:i})),ref:p,...u})});ve.displayName="Button";const Ge=y.forwardRef(({className:i,type:r,...s},c)=>l.jsx("input",{type:r,className:Ve("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",i),ref:c,...s}));Ge.displayName="Input";const i3=Ys("whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow-xs",secondary:"border-transparent bg-secondary text-secondary-foreground",destructive:"border-transparent bg-destructive text-destructive-foreground shadow-xs",outline:"text-foreground border [border-color:var(--badge-outline)]"}},defaultVariants:{variant:"default"}});function Gi({className:i,variant:r,...s}){return l.jsx("div",{className:Ve(i3({variant:r}),i),...s})}const $s="gtm_saved_scripts",gx="gtm_custom_templates";function La(){try{const i=localStorage.getItem($s);return i?JSON.parse(i):[]}catch{return[]}}function mx(i){const r=La(),s=new Date().toISOString(),c={...i,id:`script_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,createdAt:s,updatedAt:s};return r.unshift(c),localStorage.setItem($s,JSON.stringify(r)),c}function a3(i,r){const s=La(),c=s.findIndex(u=>u.id===i);return c===-1?null:(s[c]={...s[c],...r,updatedAt:new Date().toISOString()},localStorage.setItem($s,JSON.stringify(s)),s[c])}function r3(i){const r=La().filter(s=>s.id!==i);localStorage.setItem($s,JSON.stringify(r))}function xx(){try{const i=localStorage.getItem(gx);return i?JSON.parse(i):[]}catch{return[]}}function o3(i){const r=xx(),s=r.findIndex(c=>c.id===i.id);s>=0?r[s]=i:r.unshift(i),localStorage.setItem(gx,JSON.stringify(r))}function s3(){const[i,r]=y.useState(""),[s,c]=y.useState(()=>La()),{toast:u}=Un(),p=y.useMemo(()=>{if(!i)return s;const x=i.toLowerCase();return s.filter(g=>g.websiteName.toLowerCase().includes(x)||g.templateName.toLowerCase().includes(x))},[s,i]),h=(x,g)=>{r3(x),c(La()),u({title:"Đã xóa",description:`Script "${g}" đã được xóa.`})},m=async(x,g)=>{await navigator.clipboard.writeText(x),u({title:"Đã copy!",description:`Script "${g}" đã được copy vào clipboard.`})};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-10",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center",children:l.jsx(Da,{className:"w-5 h-5 text-white"})}),l.jsxs("div",{children:[l.jsx("h1",{className:"text-lg font-bold text-gray-900 leading-none",children:"Code Script GTM - Webscon"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Quản lý script Google Tag Manager"})]})]}),l.jsx(gi,{href:"/new",children:l.jsxs(ve,{size:"sm",className:"gap-2",children:[l.jsx(Kr,{className:"w-4 h-4"}),"Tạo script mới"]})})]})}),l.jsxs("main",{className:"max-w-6xl mx-auto px-4 py-8 space-y-8",children:[l.jsxs("div",{className:"space-y-3",children:[l.jsx(gi,{href:"/template/warehouse-contact",children:l.jsxs("div",{className:"flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl px-5 py-4 cursor-pointer hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm group",children:[l.jsx("div",{className:"w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white",children:"1"}),l.jsx("div",{className:"w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 text-lg",children:"🏪"}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-bold text-white leading-snug",children:"[Trang Chủ] Trang trí trang chủ, popup"}),l.jsx("p",{className:"text-xs text-blue-200 mt-0.5",children:"4 script tổng hợp: địa chỉ bảo hành, nút Zalo/gọi cố định, footer liên hệ và popup đăng nhập"})]}),l.jsx("div",{className:"text-white/60 group-hover:text-white transition-colors flex-shrink-0",children:l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})}),l.jsx(gi,{href:"/bulk-replace",children:l.jsxs("div",{className:"flex items-center gap-4 bg-gradient-to-r from-violet-600 to-violet-500 rounded-xl px-5 py-4 cursor-pointer hover:from-violet-700 hover:to-violet-600 transition-all shadow-sm group",children:[l.jsx("div",{className:"w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white",children:"2"}),l.jsx("div",{className:"w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0",children:l.jsx(h0,{className:"w-5 h-5 text-white"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-bold text-white leading-snug",children:"[Trang sản phẩm] Trang trí trang sản phẩm"}),l.jsx("p",{className:"text-xs text-violet-200 mt-0.5",children:"Nhập tên thương hiệu + số điện thoại → thay thế 20 vị trí trong script tổng hợp → copy & dán vào GTM"})]}),l.jsx("div",{className:"text-white/60 group-hover:text-white transition-colors flex-shrink-0",children:l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})}),l.jsx(gi,{href:"/template/home-product",children:l.jsxs("div",{className:"flex items-center gap-4 bg-gradient-to-r from-pink-600 to-rose-500 rounded-xl px-5 py-4 cursor-pointer hover:from-pink-700 hover:to-rose-600 transition-all shadow-sm group",children:[l.jsx("div",{className:"w-7 h-7 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white",children:"3"}),l.jsx("div",{className:"w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 text-lg",children:"🛍️"}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-bold text-white leading-snug",children:"[Sản phẩm trang chủ] Tổng hợp 3 script"}),l.jsx("p",{className:"text-xs text-pink-100 mt-0.5",children:"Widget bán chạy + banner Gợi Ý Hôm Nay + bo góc thẻ & nút xem giá sỉ"})]}),l.jsx("div",{className:"text-white/60 group-hover:text-white transition-colors flex-shrink-0",children:l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl px-5 py-4 shadow-sm border border-white/10",children:[l.jsxs("p",{className:"text-sm text-slate-100 leading-relaxed",children:["Trên đây là trang trí cơ bản cho anh em gồm trang chủ, trang đăng nhập, trang đăng ký và trang sản phẩm đẹp và nổi bật hơn theo ý thích của anh em, nếu anh em muốn chạy được sale, flashsale, youtube và các chức năng trong tương lai có thể sử dụng gói 1.350.000 VND hoặc PHM: 1.500.000 VND. Chi tiết gói:"," ",l.jsx("a",{href:"https://junjin.ratxin.vn/goi-dich-vu-google-cho-webcon-va-trang-tri-webcon_p127111",target:"_blank",rel:"noopener noreferrer",className:"text-sky-300 underline underline-offset-2 hover:text-sky-200 break-all",children:"https://junjin.ratxin.vn/goi-dich-vu-google-cho-webcon-va-trang-tri-webcon_p127111"})]}),l.jsx("p",{className:"text-sm text-slate-100 leading-relaxed mt-3",children:"Gói 1.350.000 sẽ có script full như hình dưới và sắp tới sẽ cấp cho anh em đã mua hàng trước đây được tùy chỉnh tự do, màu mè theo ý mình."}),l.jsx("img",{src:"/gtm-webcon/upsell-script-full.png",alt:"Script full preview",className:"mt-3 w-full rounded-lg border border-white/10"})]})]}),l.jsxs("section",{children:[l.jsxs("div",{className:"flex items-center justify-between gap-4 mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(R2,{className:"w-5 h-5 text-gray-500"}),l.jsx("h2",{className:"text-base font-semibold text-gray-900",children:"Script đã lưu"}),l.jsx(Gi,{variant:"secondary",className:"text-xs",children:s.length})]}),l.jsxs("div",{className:"relative w-64",children:[l.jsx(s5,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),l.jsx(Ge,{placeholder:"Tìm script...",value:i,onChange:x=>r(x.target.value),className:"pl-9 h-8 text-sm"})]})]}),p.length===0?l.jsxs("div",{className:"text-center py-12 text-gray-400",children:[l.jsx(Da,{className:"w-10 h-10 mx-auto mb-3 opacity-40"}),s.length===0?l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"text-sm font-medium",children:"Chưa có script nào được lưu"}),l.jsx("p",{className:"text-xs mt-1",children:"Chọn một template ở trên để bắt đầu tạo script"})]}):l.jsx("p",{className:"text-sm",children:"Không tìm thấy script phù hợp"})]}):l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:p.map(x=>l.jsxs(Xe,{className:"group",children:[l.jsx(et,{className:"pb-2 pt-4 px-4",children:l.jsxs("div",{className:"flex items-start justify-between gap-2",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx(tt,{className:"text-sm font-semibold text-gray-900 leading-snug truncate",children:x.websiteName||"Chưa đặt tên"}),l.jsx(rn,{className:"text-xs truncate",children:x.templateName})]}),l.jsxs("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0",children:[l.jsx(ve,{size:"icon",variant:"ghost",className:"h-7 w-7",onClick:()=>m(x.generatedScript,x.websiteName),title:"Copy script",children:l.jsx(sn,{className:"w-3.5 h-3.5"})}),l.jsx(gi,{href:`/edit/${x.id}`,children:l.jsx(ve,{size:"icon",variant:"ghost",className:"h-7 w-7",title:"Chỉnh sửa",children:l.jsx(c5,{className:"w-3.5 h-3.5"})})}),l.jsx(ve,{size:"icon",variant:"ghost",className:"h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-50",onClick:()=>h(x.id,x.websiteName),title:"Xóa",children:l.jsx(Fs,{className:"w-3.5 h-3.5"})})]})]})}),l.jsx(Qe,{className:"px-4 pb-4",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("p",{className:"text-xs text-gray-400",children:new Date(x.updatedAt).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),l.jsxs(ve,{size:"sm",variant:"outline",className:"h-7 text-xs gap-1.5",onClick:()=>m(x.generatedScript,x.websiteName),children:[l.jsx(sn,{className:"w-3 h-3"}),"Copy script"]})]})})]},x.id))})]})]})]})}const on=y.forwardRef(({className:i,...r},s)=>l.jsx("textarea",{className:Ve("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",i),ref:s,...r}));on.displayName="Textarea";var l3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],c3=l3.reduce((i,r)=>{const s=hx(`Primitive.${r}`),c=y.forwardRef((u,p)=>{const{asChild:h,...m}=u,x=h?s:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(x,{...m,ref:p})});return c.displayName=`Primitive.${r}`,{...i,[r]:c}},{}),d3="Label",bx=y.forwardRef((i,r)=>l.jsx(c3.label,{...i,ref:r,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(i.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));bx.displayName=d3;var vx=bx;const u3=Ys("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Ct=y.forwardRef(({className:i,...r},s)=>l.jsx(vx,{ref:s,className:Ve(u3(),i),...r}));Ct.displayName=vx.displayName;function p3(i){const r=y.useRef({value:i,previous:i});return y.useMemo(()=>(r.current.value!==i&&(r.current.previous=r.current.value,r.current.value=i),r.current.previous),[i])}var el="Checkbox",[f3]=Pi(el),[h3,yu]=f3(el);function g3(i){const{__scopeCheckbox:r,checked:s,children:c,defaultChecked:u,disabled:p,form:h,name:m,onCheckedChange:x,required:g,value:v="on",internal_do_not_use_render:j}=i,[N,k]=Ps({prop:s,defaultProp:u??!1,onChange:x,caller:el}),[O,C]=y.useState(null),[T,R]=y.useState(null),A=y.useRef(!1),L=O?!!h||!!O.closest("form"):!0,U={checked:N,disabled:p,setChecked:k,control:O,setControl:C,name:m,form:h,value:v,hasConsumerStoppedPropagationRef:A,required:g,defaultChecked:mi(u)?!1:u,isFormControl:L,bubbleInput:T,setBubbleInput:R};return l.jsx(h3,{scope:r,...U,children:m3(j)?j(U):c})}var yx="CheckboxTrigger",wx=y.forwardRef(({__scopeCheckbox:i,onKeyDown:r,onClick:s,...c},u)=>{const{control:p,value:h,disabled:m,checked:x,required:g,setControl:v,setChecked:j,hasConsumerStoppedPropagationRef:N,isFormControl:k,bubbleInput:O}=yu(yx,i),C=At(u,v),T=y.useRef(x);return y.useEffect(()=>{const R=p?.form;if(R){const A=()=>j(T.current);return R.addEventListener("reset",A),()=>R.removeEventListener("reset",A)}},[p,j]),l.jsx(Ye.button,{type:"button",role:"checkbox","aria-checked":mi(x)?"mixed":x,"aria-required":g,"data-state":Ex(x),"data-disabled":m?"":void 0,disabled:m,value:h,...c,ref:C,onKeyDown:Oe(r,R=>{R.key==="Enter"&&R.preventDefault()}),onClick:Oe(s,R=>{j(A=>mi(A)?!0:!A),O&&k&&(N.current=R.isPropagationStopped(),N.current||R.stopPropagation())})})});wx.displayName=yx;var wu=y.forwardRef((i,r)=>{const{__scopeCheckbox:s,name:c,checked:u,defaultChecked:p,required:h,disabled:m,value:x,onCheckedChange:g,form:v,...j}=i;return l.jsx(g3,{__scopeCheckbox:s,checked:u,defaultChecked:p,disabled:m,required:h,onCheckedChange:g,name:c,form:v,value:x,internal_do_not_use_render:({isFormControl:N})=>l.jsxs(l.Fragment,{children:[l.jsx(wx,{...j,ref:r,__scopeCheckbox:s}),N&&l.jsx(kx,{__scopeCheckbox:s})]})})});wu.displayName=el;var jx="CheckboxIndicator",Sx=y.forwardRef((i,r)=>{const{__scopeCheckbox:s,forceMount:c,...u}=i,p=yu(jx,s);return l.jsx(Ha,{present:c||mi(p.checked)||p.checked===!0,children:l.jsx(Ye.span,{"data-state":Ex(p.checked),"data-disabled":p.disabled?"":void 0,...u,ref:r,style:{pointerEvents:"none",...i.style}})})});Sx.displayName=jx;var Nx="CheckboxBubbleInput",kx=y.forwardRef(({__scopeCheckbox:i,...r},s)=>{const{control:c,hasConsumerStoppedPropagationRef:u,checked:p,defaultChecked:h,required:m,disabled:x,name:g,value:v,form:j,bubbleInput:N,setBubbleInput:k}=yu(Nx,i),O=At(s,k),C=p3(p),T=F0(c);y.useEffect(()=>{const A=N;if(!A)return;const L=window.HTMLInputElement.prototype,G=Object.getOwnPropertyDescriptor(L,"checked").set,I=!u.current;if(C!==p&&G){const X=new Event("click",{bubbles:I});A.indeterminate=mi(p),G.call(A,mi(p)?!1:p),A.dispatchEvent(X)}},[N,C,p,u]);const R=y.useRef(mi(p)?!1:p);return l.jsx(Ye.input,{type:"checkbox","aria-hidden":!0,defaultChecked:h??R.current,required:m,disabled:x,name:g,value:v,form:j,...r,tabIndex:-1,ref:O,style:{...r.style,...T,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});kx.displayName=Nx;function m3(i){return typeof i=="function"}function mi(i){return i==="indeterminate"}function Ex(i){return mi(i)?"indeterminate":i?"checked":"unchecked"}const Tx=y.forwardRef(({className:i,...r},s)=>l.jsx(wu,{ref:s,className:Ve("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",i),...r,children:l.jsx(Sx,{className:Ve("grid place-content-center text-current"),children:l.jsx(vt,{className:"h-4 w-4"})})}));Tx.displayName=wu.displayName;var x3=y.createContext(void 0);function Cx(i){const r=y.useContext(x3);return i||r||"ltr"}var _d="rovingFocusGroup.onEntryFocus",b3={bubbles:!1,cancelable:!0},$r="RovingFocusGroup",[Qd,Ax,v3]=Um($r),[y3,_x]=Pi($r,[v3]),[w3,j3]=y3($r),Ox=y.forwardRef((i,r)=>l.jsx(Qd.Provider,{scope:i.__scopeRovingFocusGroup,children:l.jsx(Qd.Slot,{scope:i.__scopeRovingFocusGroup,children:l.jsx(S3,{...i,ref:r})})}));Ox.displayName=$r;var S3=y.forwardRef((i,r)=>{const{__scopeRovingFocusGroup:s,orientation:c,loop:u=!1,dir:p,currentTabStopId:h,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:x,onEntryFocus:g,preventScrollOnEntryFocus:v=!1,...j}=i,N=y.useRef(null),k=At(r,N),O=Cx(p),[C,T]=Ps({prop:h,defaultProp:m??null,onChange:x,caller:$r}),[R,A]=y.useState(!1),L=Ln(g),U=Ax(s),G=y.useRef(!1),[I,X]=y.useState(0);return y.useEffect(()=>{const P=N.current;if(P)return P.addEventListener(_d,L),()=>P.removeEventListener(_d,L)},[L]),l.jsx(w3,{scope:s,orientation:c,dir:O,loop:u,currentTabStopId:C,onItemFocus:y.useCallback(P=>T(P),[T]),onItemShiftTab:y.useCallback(()=>A(!0),[]),onFocusableItemAdd:y.useCallback(()=>X(P=>P+1),[]),onFocusableItemRemove:y.useCallback(()=>X(P=>P-1),[]),children:l.jsx(Ye.div,{tabIndex:R||I===0?-1:0,"data-orientation":c,...j,ref:k,style:{outline:"none",...i.style},onMouseDown:Oe(i.onMouseDown,()=>{G.current=!0}),onFocus:Oe(i.onFocus,P=>{const te=!G.current;if(P.target===P.currentTarget&&te&&!R){const ne=new CustomEvent(_d,b3);if(P.currentTarget.dispatchEvent(ne),!ne.defaultPrevented){const ce=U().filter(_=>_.focusable),ue=ce.find(_=>_.active),xe=ce.find(_=>_.id===C),ee=[ue,xe,...ce].filter(Boolean).map(_=>_.ref.current);zx(ee,v)}}G.current=!1}),onBlur:Oe(i.onBlur,()=>A(!1))})})}),Mx="RovingFocusGroupItem",Dx=y.forwardRef((i,r)=>{const{__scopeRovingFocusGroup:s,focusable:c=!0,active:u=!1,tabStopId:p,children:h,...m}=i,x=z0(),g=p||x,v=j3(Mx,s),j=v.currentTabStopId===g,N=Ax(s),{onFocusableItemAdd:k,onFocusableItemRemove:O,currentTabStopId:C}=v;return y.useEffect(()=>{if(c)return k(),()=>O()},[c,k,O]),l.jsx(Qd.ItemSlot,{scope:s,id:g,focusable:c,active:u,children:l.jsx(Ye.span,{tabIndex:j?0:-1,"data-orientation":v.orientation,...m,ref:r,onMouseDown:Oe(i.onMouseDown,T=>{c?v.onItemFocus(g):T.preventDefault()}),onFocus:Oe(i.onFocus,()=>v.onItemFocus(g)),onKeyDown:Oe(i.onKeyDown,T=>{if(T.key==="Tab"&&T.shiftKey){v.onItemShiftTab();return}if(T.target!==T.currentTarget)return;const R=E3(T,v.orientation,v.dir);if(R!==void 0){if(T.metaKey||T.ctrlKey||T.altKey||T.shiftKey)return;T.preventDefault();let L=N().filter(U=>U.focusable).map(U=>U.ref.current);if(R==="last")L.reverse();else if(R==="prev"||R==="next"){R==="prev"&&L.reverse();const U=L.indexOf(T.currentTarget);L=v.loop?T3(L,U+1):L.slice(U+1)}setTimeout(()=>zx(L))}}),children:typeof h=="function"?h({isCurrentTabStop:j,hasTabStop:C!=null}):h})})});Dx.displayName=Mx;var N3={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function k3(i,r){return r!=="rtl"?i:i==="ArrowLeft"?"ArrowRight":i==="ArrowRight"?"ArrowLeft":i}function E3(i,r,s){const c=k3(i.key,s);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(c))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(c)))return N3[c]}function zx(i,r=!1){const s=document.activeElement;for(const c of i)if(c===s||(c.focus({preventScroll:r}),document.activeElement!==s))return}function T3(i,r){return i.map((s,c)=>i[(r+c)%i.length])}var C3=Ox,A3=Dx,tl="Tabs",[_3]=Pi(tl,[_x]),Rx=_x(),[O3,ju]=_3(tl),Lx=y.forwardRef((i,r)=>{const{__scopeTabs:s,value:c,onValueChange:u,defaultValue:p,orientation:h="horizontal",dir:m,activationMode:x="automatic",...g}=i,v=Cx(m),[j,N]=Ps({prop:c,onChange:u,defaultProp:p??"",caller:tl});return l.jsx(O3,{scope:s,baseId:z0(),value:j,onValueChange:N,orientation:h,dir:v,activationMode:x,children:l.jsx(Ye.div,{dir:v,"data-orientation":h,...g,ref:r})})});Lx.displayName=tl;var Bx="TabsList",Hx=y.forwardRef((i,r)=>{const{__scopeTabs:s,loop:c=!0,...u}=i,p=ju(Bx,s),h=Rx(s);return l.jsx(C3,{asChild:!0,...h,orientation:p.orientation,dir:p.dir,loop:c,children:l.jsx(Ye.div,{role:"tablist","aria-orientation":p.orientation,...u,ref:r})})});Hx.displayName=Bx;var Ix="TabsTrigger",Ux=y.forwardRef((i,r)=>{const{__scopeTabs:s,value:c,disabled:u=!1,...p}=i,h=ju(Ix,s),m=Rx(s),x=qx(h.baseId,c),g=Vx(h.baseId,c),v=c===h.value;return l.jsx(A3,{asChild:!0,...m,focusable:!u,active:v,children:l.jsx(Ye.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":g,"data-state":v?"active":"inactive","data-disabled":u?"":void 0,disabled:u,id:x,...p,ref:r,onMouseDown:Oe(i.onMouseDown,j=>{!u&&j.button===0&&j.ctrlKey===!1?h.onValueChange(c):j.preventDefault()}),onKeyDown:Oe(i.onKeyDown,j=>{[" ","Enter"].includes(j.key)&&h.onValueChange(c)}),onFocus:Oe(i.onFocus,()=>{const j=h.activationMode!=="manual";!v&&!u&&j&&h.onValueChange(c)})})})});Ux.displayName=Ix;var Gx="TabsContent",Px=y.forwardRef((i,r)=>{const{__scopeTabs:s,value:c,forceMount:u,children:p,...h}=i,m=ju(Gx,s),x=qx(m.baseId,c),g=Vx(m.baseId,c),v=c===m.value,j=y.useRef(v);return y.useEffect(()=>{const N=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(N)},[]),l.jsx(Ha,{present:u||v,children:({present:N})=>l.jsx(Ye.div,{"data-state":v?"active":"inactive","data-orientation":m.orientation,role:"tabpanel","aria-labelledby":x,hidden:!N,id:g,tabIndex:0,...h,ref:r,style:{...i.style,animationDuration:j.current?"0s":void 0},children:N&&p})})});Px.displayName=Gx;function qx(i,r){return`${i}-trigger-${r}`}function Vx(i,r){return`${i}-content-${r}`}var M3=Lx,Yx=Hx,Kx=Ux,Fx=Px;const D3=M3,Xx=y.forwardRef(({className:i,...r},s)=>l.jsx(Yx,{ref:s,className:Ve("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",i),...r}));Xx.displayName=Yx.displayName;const Zd=y.forwardRef(({className:i,...r},s)=>l.jsx(Kx,{ref:s,className:Ve("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",i),...r}));Zd.displayName=Kx.displayName;const Jd=y.forwardRef(({className:i,...r},s)=>l.jsx(Fx,{ref:s,className:Ve("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",i),...r}));Jd.displayName=Fx.displayName;const z3=[{id:"sale-badge",name:"[Trang sản phẩm] Sale badge & nhãn sản phẩm",description:"Tự động gắn nhãn sale event và nhãn trạng thái (Cháy hàng, ế! Xả Kho, Hàng còn ít, Yêu thích nhất) ngẫu nhiên lên TẤT CẢ URL sản phẩm có dạng _p trên trang",category:"Trang sản phẩm",fields:[],template:`<style>
.jj-sale-badge{position:absolute;bottom:0;left:0;z-index:10;display:flex;align-items:stretch;border-radius:0 6px 0 0;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.28);pointer-events:none;font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif;line-height:1;}
.jj-b-red{background:#e31c23;color:#fff;font-size:15px;font-weight:900;padding:4px 7px 4px 5px;display:flex;align-items:center;position:relative;}
.jj-b-red::after{content:"";position:absolute;right:-6px;top:0;bottom:0;width:12px;background:#e31c23;clip-path:polygon(0 0,60% 0,100% 50%,60% 100%,0 100%);z-index:1;}
.jj-b-yellow{background:#ffd000;font-size:8px;font-weight:900;padding:3px 6px 3px 10px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-transform:uppercase;}
.jj-b-yellow span:first-child{font-size:8.5px;color:#333;}
.jj-b-yellow span:last-child{background:#e31c23;color:#fff;padding:1px 3px;border-radius:2px;font-size:7.5px;margin-top:1px;font-weight:900;}
.jj-top-badge{position:absolute;top:0;left:0;z-index:10;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif;font-size:11px;font-weight:700;padding:4px 10px 4px 7px;border-radius:0 0 10px 0;pointer-events:none;display:flex;align-items:center;gap:4px;box-shadow:0 2px 8px rgba(0,0,0,0.22);}
.jj-ch{background:linear-gradient(135deg,#e31c23,#c0001a);}
.jj-ek{background:linear-gradient(135deg,#f97316,#ea580c);}
.jj-xk{background:linear-gradient(135deg,#0284c7,#0369a1);}
.jj-yt{background:linear-gradient(135deg,#db2777,#be185d);}
</style>
<script>
(function(){
{{DOMAIN_LOCK_LINE}}
var BADGE_META=[
  {k:"chayHang",cls:"jj-ch",ic:"\\uD83D\\uDD25",lb:"Ch\\xe1y h\\xe0ng"},
  {k:"eXaKho",cls:"jj-ek",ic:"\\uD83D\\uDE05",lb:"X\\u1EA3 Kho"},
  {k:"xaKho",cls:"jj-xk",ic:"\\uD83D\\uDCE6",lb:"H\\u00E0ng c\\u00F2n \\u00EDt"},
  {k:"yeuThich",cls:"jj-yt",ic:"\\u2764\\uFE0F",lb:"Y\\xEAu th\\xEDch nh\\u1EA5t"}
];
function getSaleLabel(){var now=new Date();var m=now.getMonth()+1;var d=now.getDate();var raw=[1,m,15,20,25].sort(function(a,b){return a-b;});var days=[];for(var i=0;i<raw.length;i++){if(days.indexOf(raw[i])===-1)days.push(raw[i]);}for(var i=0;i<days.length;i++){if(days[i]>=d)return days[i]+'.'+m;}var nm=m===12?1:m+1;return '1.'+nm;}
function hashPid(s){var h=0;for(var i=0;i<s.length;i++){h=((h<<5)-h+s.charCodeAt(i))|0;}return Math.abs(h);}
function getDetailWrap(pid){var imgs=document.querySelectorAll("img[src*='p-"+pid+"/']");return imgs.length?imgs[0].parentElement:null;}
function addSale(w){if(!w||w.getAttribute("data-jjs"))return;w.setAttribute("data-jjs","1");w.style.position="relative";var lbl=getSaleLabel();var b=document.createElement("div");b.className="jj-sale-badge";b.innerHTML='<div class="jj-b-red">'+lbl+'</div><div class="jj-b-yellow"><span>SI\\u00CAU</span><span>SALE</span></div>';w.appendChild(b);}
function addTop(w,m){if(!w||w.getAttribute("data-jjt"))return;w.setAttribute("data-jjt",m.k);w.style.position="relative";var b=document.createElement("div");b.className="jj-top-badge "+m.cls;b.textContent=m.ic+" "+m.lb;w.appendChild(b);}
function applyBadge(w,pid){if(!w)return;addSale(w);addTop(w,BADGE_META[hashPid(pid)%BADGE_META.length]);}
function scan(){
  var dm=window.location.pathname.match(/_p(\\d+)/);
  if(dm){var dw=getDetailWrap(dm[1]);if(dw)applyBadge(dw,dm[1]);}
  var links=document.querySelectorAll("a[href*='_p']");
  for(var i=0;i<links.length;i++){
    var href=links[i].getAttribute("href")||"";
    var pm=href.match(/_p(\\d+)/);
    if(!pm)continue;
    var img=links[i].querySelector("img[class*='aspect-square']");
    if(img&&img.parentElement)applyBadge(img.parentElement,pm[1]);
  }
}
scan();
new MutationObserver(function(ml){for(var i=0;i<ml.length;i++){if(ml[i].addedNodes.length){scan();break;}}}).observe(document.body,{childList:true,subtree:true});
var op=history.pushState;history.pushState=function(){op.apply(this,arguments);setTimeout(scan,400);};
window.addEventListener("popstate",function(){setTimeout(scan,400);});
})();
<\/script>`},{id:"video-avatar",name:"[Trang sản phẩm] Video avatar (YouTube thay ảnh)",description:"Thay thế ảnh sản phẩm bằng video YouTube tự động phát, ánh xạ timestamp ảnh → YouTube ID",category:"Trang sản phẩm",fields:[{key:"IMG_HOST",label:"Domain CDN ảnh sản phẩm",placeholder:"r6i.pen.dropbuy.vn",type:"text",description:"Domain server ảnh để nhận diện đúng ảnh cần thay thế, VD: r6i.pen.dropbuy.vn"},{key:"VIDEO_MAP_ENTRIES",label:"Danh sách cặp ảnh–video",placeholder:"'1773120431464': 'Pe837ti67S0',",type:"textarea",description:"Các cặp timestamp–YouTube ID — được quản lý qua giao diện bên dưới, không cần sửa tay"}],template:`<script>
(function(){
  var VIDEO_MAP = {
    {{VIDEO_MAP_ENTRIES}}
  };
  var DONE_ATTR='data-jj-vid-done';
  function getImgKey(src){var m=src.match(/\\/p-\\d+\\/(\\d+)-/);return m?m[1]:null;}
  function isTargetImg(src){return src&&src.indexOf('{{IMG_HOST}}')!==-1;}
  function replaceImg(img){
    if(img.getAttribute(DONE_ATTR))return;
    var src=img.getAttribute('src')||img.getAttribute('data-src')||'';
    if(!isTargetImg(src))return;
    var key=getImgKey(src);
    if(!key||!VIDEO_MAP[key])return;
    var videoId=VIDEO_MAP[key];
    var w=img.offsetWidth||img.naturalWidth||img.width||300;
    var h=img.offsetHeight||img.naturalHeight||img.height||300;
    if(w<10)w=300;if(h<10)h=w;
    img.setAttribute(DONE_ATTR,'1');
    var wrap=document.createElement('div');
    wrap.style.cssText='display:inline-block;width:'+w+'px;height:'+h+'px;position:relative;overflow:hidden;border-radius:inherit;flex-shrink:0;';
    var iframe=document.createElement('iframe');
    iframe.src='https://www.youtube.com/embed/'+videoId+'?autoplay=1&mute=1&loop=1&playlist='+videoId+'&controls=0&rel=0&modestbranding=1&playsinline=1';
    iframe.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;border:0;pointer-events:none;';
    iframe.setAttribute('allow','autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen','');
    iframe.setAttribute('loading','lazy');
    wrap.appendChild(iframe);
    var overlay=document.createElement('div');
    overlay.style.cssText='position:absolute;inset:0;z-index:1;cursor:pointer;';
    overlay.onclick=function(e){e.stopPropagation();var p=img.closest?img.closest('a'):null;if(p)p.click();};
    wrap.appendChild(overlay);
    img.parentNode.insertBefore(wrap,img);
    img.style.display='none';
  }
  function scanAll(){var imgs=document.querySelectorAll('img:not(['+DONE_ATTR+'])');for(var i=0;i<imgs.length;i++)replaceImg(imgs[i]);}
  function tryScan(){setTimeout(scanAll,100);setTimeout(scanAll,500);setTimeout(scanAll,1200);}
  new MutationObserver(function(ml){
    var f=false;
    for(var m=0;m<ml.length;m++){var ns=ml[m].addedNodes;for(var n=0;n<ns.length;n++){if(ns[n].nodeType===1){f=true;break;}}if(f)break;}
    if(f)setTimeout(scanAll,150);
  }).observe(document.body,{childList:true,subtree:true});
  if(!window.__jjVidHooked){
    window.__jjVidHooked=true;
    var _oP=history.pushState,_oR=history.replaceState;
    history.pushState=function(){_oP.apply(history,arguments);tryScan();};
    history.replaceState=function(){_oR.apply(history,arguments);tryScan();};
    window.addEventListener('popstate',tryScan);
  }
  tryScan();
})();
<\/script>`},{id:"sale-price",name:"[Trang sản phẩm] Hiển thị giá ưu đãi ngoài website",description:"Tự động thay giá hiển thị theo % giảm cấu hình cho từng sản phẩm — chỉ áp dụng cho khách chưa đăng nhập",category:"Trang sản phẩm",fields:[{key:"CAU_HINH_ENTRIES",label:"Danh sách sản phẩm & % giảm",placeholder:"{ slug: 'p126785', phanTram: 0.32 },",type:"textarea",description:"Danh sách cấu hình — được quản lý qua giao diện bên dưới, không cần sửa tay"}],template:`<script>
(function(){
  {{DOMAIN_LOCK_LINE}}
  var CAU_HINH=[
    {{CAU_HINH_ENTRIES}}
  ];

  function layCauHinh(){
    var href=window.location.href;
    for(var i=0;i<CAU_HINH.length;i++){
      if(href.indexOf(CAU_HINH[i].slug)!==-1)return CAU_HINH[i];
    }
    return null;
  }

  var DONE={};

  function apDungGiam(el,cfg){
    if(DONE[cfg.slug])return;
    if(el.getAttribute('data-da-giam'))return;
    if(el.className&&el.className.indexOf('line-through')!==-1)return;
    var text=(el.innerText||el.textContent||'').replace(/[\\s\\u00a0\\u20ab,\\.]/g,'');
    var soTien=parseInt(text,10);
    if(!isNaN(soTien)&&soTien>10000){
      if(cfg.giaGoc>0&&soTien<=Math.round(cfg.giaGoc*cfg.phanTram))return;
      var giaMoi=Math.round(soTien*cfg.phanTram);
      el.innerHTML=giaMoi.toLocaleString('vi-VN')+'&nbsp;\\u20ab';
      el.setAttribute('data-da-giam','1');
      DONE[cfg.slug]=true;
    }
  }

  var SELECTORS=[
    'div.text-3xl.font-semibold.text-red-500',
    'span.text-3xl.font-semibold.text-red-500',
    '.text-3xl.text-red-500',
    '.text-2xl.text-red-500',
    '.font-semibold.text-red-500'
  ];

  function quetGia(){
    var cfg=layCauHinh();
    if(cfg===null)return;
    for(var s=0;s<SELECTORS.length;s++){
      var els=document.querySelectorAll(SELECTORS[s]);
      for(var i=0;i<els.length;i++)apDungGiam(els[i],cfg);
    }
  }

  function khoiDong(){
    quetGia();
    setTimeout(quetGia,500);
    setTimeout(quetGia,1500);
    setTimeout(quetGia,3000);
    new MutationObserver(function(){quetGia();}).observe(document.body,{childList:true,subtree:true});
    var lastUrl=location.href;
    setInterval(function(){
      if(location.href!==lastUrl){
        lastUrl=location.href;
        DONE={};
        setTimeout(quetGia,400);
        setTimeout(quetGia,1200);
      }
    },300);
  }

  fetch('/api/auth/session',{credentials:'include'})
    .then(function(r){return r.ok?r.json():null;})
    .then(function(sess){
      var daDangNhap=!!(sess&&sess.user);
      if(!daDangNhap)khoiDong();
    })
    .catch(function(){
      khoiDong();
    });

})();
<\/script>`},{id:"warehouse-contact",name:"[Code Popup]",description:"Bộ script trang trí trang chủ — tích chọn từng phần muốn dùng ở khung Preview",category:"Kho & Liên hệ",toggles:[{id:"warranty-address",label:"Đổi “Sản phẩm thuộc” → Địa chỉ bảo hành (trang sản phẩm)",description:"Gắn link Google Maps vào địa chỉ bảo hành"},{id:"zalo-dock",label:"Nút Zalo + Gọi cố định bên phải màn hình",description:"Dock liên hệ nổi, có hiệu ứng"},{id:"footer-contact",label:"Footer thông tin liên hệ",description:"Khối footer brand + địa chỉ + hotline"},{id:"login-popup",label:"Popup đăng nhập trang chủ",description:"Popup mời đăng nhập kèm đếm ngược + nút"},{id:"desc-collapse",label:"Thu gọn / Xem thêm mô tả sản phẩm",description:"Rút gọn mô tả dài kèm nút mở rộng"},{id:"fake-reviews",label:"Hiển thị số lượt mua & đánh giá sản phẩm",description:"Sinh số liệu mua/đánh giá hợp lý theo từng sản phẩm"},{id:"google-login",label:"Nút “Đăng nhập với Google” ở trang đăng nhập",description:"Thêm khung Google đẹp, gắn vào nút Google có sẵn"},{id:"flashsale-banner",label:"Banner Flash Sale đầu trang chủ",description:"Dải Flash Sale + đếm ngược trên cùng trang chủ"},{id:"logo-animation",label:"Hiệu ứng động cho logo + dòng chữ chạy",description:"Logo lấp lánh + tagline xoay vòng"},{id:"search-style",label:"Tùy biến thanh tìm kiếm + thông báo nổi",description:"Làm đẹp ô tìm kiếm và thêm dòng gợi ý"}],fields:[{key:"BRAND_NAME",label:"Tên thương hiệu",placeholder:"Jun Jin Store",type:"text",description:"Hiển thị trên badge footer, logo footer và popup"},{key:"PHONE",label:"Số điện thoại",placeholder:"0858279868",type:"text",description:"Số điện thoại dùng cho nút Zalo, gọi và footer"},{key:"ADDRESS",label:"Địa chỉ",placeholder:"112 Nam Dư, Lĩnh Nam, Hoàng Mai, Hà Nội",type:"text",description:"Địa chỉ kho/văn phòng — hiển thị ở trang sản phẩm và footer"},{key:"IMAGE_URL",label:"URL ảnh",placeholder:"https://example.com/banner.jpg",type:"url",description:"URL ảnh banner footer và ảnh avatar trong popup"},{key:"PERSON_NAME",label:"Nhãn người dùng (popup)",placeholder:"Khách hàng thân thiết Jun Jin Store",type:"text",description:"Nhãn hiển thị trên ảnh avatar trong popup đăng nhập"},{key:"MAP_URL",label:"URL Google Maps",placeholder:"https://maps.app.goo.gl/...",type:"url",description:"Link Google Maps địa chỉ bảo hành trên trang sản phẩm"},{key:"WEBSITE_URL",label:"URL website",placeholder:"https://junjin.ratxin.vn",type:"url",description:"URL gốc website, không có dấu / ở cuối"},{key:"PRIMARY_COLOR",label:"Màu thương hiệu (tùy chọn)",placeholder:"Ví dụ: #66ba32 — bỏ trống = xanh lá mặc định",type:"color",description:"Mã hex màu chủ đạo — VD: #ee4d2d (đỏ), #2563eb (xanh dương), #66ba32 (xanh lá). Màu đậm hơn sẽ tự tính."}],template:`<script>
(function(){
  {{DOMAIN_LOCK_LINE}}
  /* ── MÀU THƯƠNG HIỆU ── */
  var C1 = '{{PRIMARY_COLOR}}' || '#66ba32';
  var C2 = (function(h){
    if (!h || h.length < 7) return '#4f9823';
    var r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);
    var d=function(v){return ('0'+Math.round(v*0.80).toString(16)).slice(-2);};
    return '#'+d(r)+d(g)+d(b);
  })(C1);
  if (!document.getElementById('jj-brand-vars')) {
    var bv=document.createElement('style');
    bv.id='jj-brand-vars';
    bv.textContent=':root{--jj-c1:'+C1+';--jj-c2:'+C2+';}';
    (document.head||document.documentElement).appendChild(bv);
  }
<!--JJBLOCK:warranty-address-->
  /* ── 1. THAY ĐỊA CHỈ BẢO HÀNH ── */
  var DONE_ATTR = 'data-jj-bh-done';
  var MAP_URL   = '{{MAP_URL}}';

  function replaceWarehouseField() {
    var items = document.querySelectorAll('td.ant-descriptions-item');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.getAttribute(DONE_ATTR)) continue;
      var label   = item.querySelector('.ant-descriptions-item-label');
      var content = item.querySelector('.ant-descriptions-item-content');
      if (label && label.textContent.trim() === 'Sản phẩm thuộc') {
        label.textContent = 'Địa chỉ bảo hành';
        if (content) {
          content.innerHTML =
            '<a href="' + MAP_URL + '" target="_blank" rel="noopener" '
            + 'style="color:#16a34a;font-weight:600;text-decoration:underline;text-underline-offset:3px;">'
            + '{{ADDRESS}}'
            + '</a>';
        }
        item.setAttribute(DONE_ATTR, '1');
      }
    }
  }

  function tryReplace() {
    replaceWarehouseField();
    var tries = 0;
    var t = setInterval(function() {
      replaceWarehouseField();
      if (++tries > 20) clearInterval(t);
    }, 300);
  }

  var observer = new MutationObserver(function() { replaceWarehouseField(); });
  observer.observe(document.body, { childList: true, subtree: true });

  if (!window.__jjBhHooked) {
    window.__jjBhHooked = true;
    var _oP = history.pushState;
    var _oR = history.replaceState;
    history.pushState = function() { _oP.apply(history, arguments); setTimeout(tryReplace, 400); };
    history.replaceState = function() { _oR.apply(history, arguments); setTimeout(tryReplace, 400); };
    window.addEventListener('popstate', function() { setTimeout(tryReplace, 400); });
  }
  tryReplace();
<!--/JJBLOCK:warranty-address-->

  /* ── 2. GATE: CHỈ TIẾP TỤC NẾU DOMAIN HỢP LỆ ── */
  /* Nếu bạn dán lock code ở đầu script này, nó đã return sớm rồi. */
  /* Dòng dưới set cờ để các script sau biết domain đã được xác nhận. */
  window._jjGate = true;

<!--JJBLOCK:zalo-dock-->
  /* ── 3. DOCK ZALO/GỌI — CSS ── */
  if (!document.getElementById('jj-dock-style')) {
    var dockCss = document.createElement('style');
    dockCss.id = 'jj-dock-style';
    dockCss.textContent =
      '#jj-contact-dock{position:fixed;right:14px;top:50%;transform:translateY(-50%);z-index:999999;display:flex;flex-direction:column;gap:10px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;}' +
      '.jj-dock-btn{width:56px;height:56px;border:none;border-radius:18px;display:flex;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;position:relative;box-shadow:0 12px 30px rgba(15,23,42,.18);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:transform .2s ease,box-shadow .2s ease;}' +
      '.jj-dock-btn:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(15,23,42,.24);}' +
      '.jj-dock-btn:active{transform:scale(.98);}' +
      '.jj-dock-zalo{background:linear-gradient(135deg,#0ea5e9,#2563eb);}' +
      '.jj-dock-call{background:linear-gradient(135deg,var(--jj-c1),var(--jj-c2));}' +
      '.jj-dock-icon{font-size:23px;line-height:1;}' +
      '.jj-dock-zalo-text{color:#fff;font-size:16px;font-weight:800;letter-spacing:.02em;}' +
      '.jj-dock-tooltip{position:absolute;right:68px;top:50%;transform:translateY(-50%);background:rgba(17,24,39,.94);color:#fff;font-size:12px;font-weight:600;padding:9px 11px;border-radius:999px;white-space:nowrap;opacity:0;pointer-events:none;transition:all .2s ease;box-shadow:0 8px 24px rgba(0,0,0,.18);}' +
      '.jj-dock-btn:hover .jj-dock-tooltip{opacity:1;right:72px;}' +
      '.jj-dock-call::after{content:"";position:absolute;inset:-5px;border:2px solid color-mix(in srgb,var(--jj-c1) 22%,transparent);border-radius:22px;animation:jjDockRing 1.8s infinite;pointer-events:none;}' +
      '@keyframes jjDockRing{0%{transform:scale(.95);opacity:.75;}100%{transform:scale(1.15);opacity:0;}}' +
      '@media(max-width:768px){#jj-contact-dock{top:auto;bottom:300px;transform:none;right:10px;gap:8px;}.jj-dock-btn{width:52px;height:52px;border-radius:16px;}.jj-dock-icon{font-size:21px;}.jj-dock-tooltip{display:none;}}';
    document.head.appendChild(dockCss);
  }

  /* ── 4. DOCK ZALO/GỌI — HTML ── */
  if (!document.getElementById('jj-contact-dock')) {
    var dock = document.createElement('div');
    dock.id = 'jj-contact-dock';
    dock.innerHTML =
      '<a href="https://zalo.me/{{PHONE}}" target="_blank" rel="noopener" id="jj-dock-zalo" class="jj-dock-btn jj-dock-zalo" aria-label="Chat Zalo">' +
        '<span class="jj-dock-zalo-text">Zalo</span>' +
        '<span class="jj-dock-tooltip">Chat Zalo</span>' +
      '</a>' +
      '<a href="tel:{{PHONE}}" id="jj-dock-call" class="jj-dock-btn jj-dock-call" aria-label="Gọi {{PHONE}}">' +
        '<span class="jj-dock-icon" style="color:#fff;">&#x1F4DE;</span>' +
        '<span class="jj-dock-tooltip">Gọi {{PHONE}}</span>' +
      '</a>';
    document.body.appendChild(dock);
  }

  /* ── 5. DOCK — EVENT LISTENERS ── */
  if (!window.__jjContactDockLoaded) {
    window.__jjContactDockLoaded = true;
    var pushDockEvent = function(name, extra){
      window.dataLayer = window.dataLayer || [];
      var payload = { event: name, page_url: location.href, page_title: document.title };
      if (extra) { for (var k in extra) { if (Object.prototype.hasOwnProperty.call(extra, k)) { payload[k] = extra[k]; } } }
      window.dataLayer.push(payload);
    };
    var zaloBtn = document.getElementById('jj-dock-zalo');
    var callBtn = document.getElementById('jj-dock-call');
    if (zaloBtn) { zaloBtn.addEventListener('click', function(){ pushDockEvent('jj_dock_zalo_click', { phone: '{{PHONE}}' }); }); }
    if (callBtn) { callBtn.addEventListener('click', function(){ pushDockEvent('jj_dock_call_click', { phone: '{{PHONE}}' }); }); }
  }
<!--/JJBLOCK:zalo-dock-->
})();
<\/script>

<!--JJBLOCK:footer-contact-->
<script>
(function() {
  if (!window._jjGate) return;
  if (document.getElementById('jj-custom-footer')) return;

  var footerHTML =
    '<div id="jj-custom-footer">' +
      '<div class="junjin-footer-wrap">' +
        '<div class="junjin-footer-top">' +
          '<div class="junjin-footer-badge">🛒 {{BRAND_NAME}}</div>' +
          '<h2 class="junjin-footer-title">Thông tin liên hệ & hỗ trợ khách hàng</h2>' +
          '<div class="junjin-footer-note"><span class="junjin-note-icon">💡</span>' +
          '<div>Liên hệ nhanh qua điện thoại để được hỗ trợ xem giá thành viên, đặt hàng, theo dõi đơn và giải đáp các chính sách mua hàng, bảo hành, đổi trả.</div></div>' +
        '</div>' +
        '<div class="junjin-footer-grid">' +
          '<div class="junjin-footer-card">' +
            '<div class="junjin-card-label green">Liên hệ trực tiếp</div>' +
            '<ul class="junjin-footer-list">' +
              '<li><strong>Hotline:</strong> <a href="tel:{{PHONE}}">{{PHONE}}</a></li>' +
              '<li><strong>Website:</strong> <a href="{{WEBSITE_URL}}" target="_blank" rel="noopener">{{BRAND_NAME}}</a></li>' +
              '<li><strong>Hỗ trợ:</strong> Xem giá, đặt hàng, bảo hành, đổi trả và hướng dẫn tài khoản</li>' +
            '</ul>' +
            '<div class="junjin-footer-actions">' +
              '<a class="junjin-btn primary" href="tel:{{PHONE}}">📞 Gọi ngay</a>' +
              '<a class="junjin-btn secondary" href="{{WEBSITE_URL}}/dang-nhap" target="_blank" rel="noopener">Đăng nhập</a>' +
            '</div>' +
          '</div>' +
          '<div class="junjin-footer-card">' +
            '<div class="junjin-card-label blue">Địa chỉ & hỗ trợ đơn hàng</div>' +
            '<ul class="junjin-footer-list">' +
              '<li><strong>Địa chỉ:</strong> {{ADDRESS}}</li>' +
              '<li><strong>Giờ hỗ trợ:</strong> 09:00 - 22:00 từ thứ 2 đến Chủ nhật</li>' +
              '<li><strong>Tiếp nhận:</strong> Tư vấn mua hàng, tiếp nhận bảo hành, hỗ trợ sau bán</li>' +
              '<li><strong>Lưu ý:</strong> Nên liên hệ trước khi qua trực tiếp hoặc gửi hàng cần hỗ trợ</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="junjin-footer-links">' +
          '<a href="{{WEBSITE_URL}}/gioi-thieu" target="_blank" rel="noopener">Giới thiệu</a>' +
          '<a href="{{WEBSITE_URL}}/huong-dan-dang-nhap" target="_blank" rel="noopener">Hướng dẫn đăng nhập</a>' +
          '<a href="{{WEBSITE_URL}}/chinh-sach" target="_blank" rel="noopener">Chính sách</a>' +
        '</div>' +
        '<div class="junjin-footer-bottom">' +
          '<div class="junjin-footer-image"><img src="{{IMAGE_URL}}" alt="{{BRAND_NAME}}" /></div>' +
          '<div class="junjin-footer-meta"><h3>{{BRAND_NAME}}</h3>' +
          '<p>Nền tảng mua sắm đa ngành và cơ hội kinh doanh dropship, hỗ trợ khách hàng xem giá thành viên, đặt hàng nhanh và theo dõi đơn trực tiếp trên website.</p></div>' +
        '</div>' +
      '</div>' +
    '</div>';

  var css =
    '#jj-custom-footer{max-width:1313px;margin:28px auto;padding:0 14px;box-sizing:border-box;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;}' +
    '#jj-custom-footer *{box-sizing:border-box;}' +
    '.junjin-footer-wrap{background:#ffffff;border:1px solid #dbe8d2;border-radius:22px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.05);}' +
    '.junjin-footer-top{background:linear-gradient(135deg,var(--jj-c1) 0%,var(--jj-c2) 100%);border-radius:18px;padding:22px 22px 20px;color:#fff;margin-bottom:18px;box-shadow:0 10px 24px rgba(92,164,42,.22);}' +
    '.junjin-footer-badge{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase;background:rgba(255,255,255,.16);padding:8px 12px;border-radius:999px;margin-bottom:12px;}' +
    '.junjin-footer-title{margin:0 0 14px 0;font-size:30px;line-height:1.2;font-weight:800;}' +
    '.junjin-footer-note{display:flex;align-items:flex-start;gap:12px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.22);padding:14px 16px;border-radius:14px;font-size:14px;line-height:1.65;}' +
    '.junjin-note-icon{font-size:18px;line-height:1;flex:0 0 auto;margin-top:1px;}' +
    '.junjin-footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;}' +
    '.junjin-footer-card{background:#fbfdf9;border:1px solid #dfead8;border-radius:18px;padding:18px;box-shadow:0 4px 12px rgba(0,0,0,.03);}' +
    '.junjin-card-label{display:inline-block;font-size:14px;font-weight:800;margin-bottom:14px;}' +
    '.junjin-card-label.green{color:var(--jj-c2);}.junjin-card-label.blue{color:#2563eb;}' +
    '.junjin-footer-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;}' +
    '.junjin-footer-list li{font-size:15px;line-height:1.7;color:#404040;padding-bottom:10px;border-bottom:1px dashed #e5ece0;}' +
    '.junjin-footer-list li:last-child{border-bottom:none;padding-bottom:0;}' +
    '.junjin-footer-list strong{color:#1b1b1b;}.junjin-footer-list a{color:var(--jj-c2);text-decoration:none;font-weight:700;}' +
    '.junjin-footer-list a:hover{text-decoration:underline;}' +
    '.junjin-footer-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;}' +
    '.junjin-btn{display:inline-flex;align-items:center;justify-content:center;padding:11px 16px;border-radius:12px;text-decoration:none;font-size:14px;font-weight:700;transition:.2s ease;}' +
    '.junjin-btn.primary{background:var(--jj-c1);color:#fff;box-shadow:0 8px 16px rgba(99,178,51,.22);}' +
    '.junjin-btn.primary:hover{transform:translateY(-1px);opacity:.95;}' +
    '.junjin-btn.secondary{background:#f2f7ee;color:var(--jj-c2);border:1px solid #cfe0c4;}' +
    '.junjin-btn.secondary:hover{background:#ebf4e5;}' +
    '.junjin-footer-links{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;}' +
    '.junjin-footer-links a{display:inline-flex;align-items:center;justify-content:center;padding:9px 14px;border-radius:999px;background:#f6fbf1;border:1px solid #dfead8;color:var(--jj-c2);text-decoration:none;font-size:13px;font-weight:700;}' +
    '.junjin-footer-links a:hover{background:#eef8e6;}' +
    '.junjin-footer-bottom{display:grid;grid-template-columns:320px 1fr;gap:18px;align-items:center;background:#f8fbf5;border:1px solid #dfead8;border-radius:18px;padding:16px;}' +
    '.junjin-footer-image img{width:100%;display:block;border-radius:14px;object-fit:cover;box-shadow:0 6px 18px rgba(0,0,0,.08);}' +
    '.junjin-footer-meta h3{margin:0 0 10px 0;font-size:22px;line-height:1.3;color:#1c1c1c;}' +
    '.junjin-footer-meta p{margin:0;font-size:15px;line-height:1.75;color:#555;}' +
    '@media(max-width:860px){.junjin-footer-grid{grid-template-columns:1fr;}.junjin-footer-bottom{grid-template-columns:1fr;}.junjin-footer-title{font-size:24px;}}' +
    '@media(max-width:640px){#jj-custom-footer{padding:0 10px;}.junjin-footer-wrap{padding:16px;border-radius:18px;}.junjin-footer-top{padding:18px 16px;}.junjin-footer-title{font-size:22px;}.junjin-footer-note{font-size:13px;padding:12px 13px;}.junjin-footer-card{padding:15px;}.junjin-footer-list li{font-size:14px;}.junjin-footer-meta h3{font-size:20px;}.junjin-footer-meta p{font-size:14px;}}';

  var styleEl = document.createElement('style');
  styleEl.innerHTML = css;
  document.head.appendChild(styleEl);

  function inject() {
    if (document.getElementById('jj-custom-footer')) return true;
    var target = document.querySelector('footer');
    if (!target) {
      var headings = document.querySelectorAll('h4,h3,h2');
      for (var i = 0; i < headings.length; i++) {
        var text = headings[i].textContent.trim().toLowerCase();
        if (text === 'thông tin' || text === 'thong tin' || text === 'chính sách' || text === 'chinh sach') {
          var p = headings[i];
          while (p.parentElement && !p.parentElement.matches('body,main,#root')) { p = p.parentElement; }
          target = p; break;
        }
      }
    }
    if (target) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = footerHTML;
      target.parentNode.insertBefore(wrapper, target);
      return true;
    }
    return false;
  }

  if (!inject()) { setTimeout(inject, 800); setTimeout(inject, 2000); setTimeout(inject, 4000); }
})();
<\/script>
<!--/JJBLOCK:footer-contact-->

<!--JJBLOCK:login-popup-->
<script>
(function () {
  if (!window._jjGate) return;
  var LOGIN_URL  = '{{WEBSITE_URL}}/dang-nhap';
  var GUIDE_URL  = '{{WEBSITE_URL}}/bai-viet/lien-he/huong-dan-dang-nhap';
  var AVATAR_URL = '{{IMAGE_URL}}';
  var SESSION_KEY = 'jj_popup_shown';
  var PERSIST_KEY = 'jj_popup_done';

  if (localStorage.getItem(PERSIST_KEY)) return;
  if (sessionStorage.getItem(SESSION_KEY)) return;

  function isExcludedUrl() {
    var h = window.location.href;
    var blocked = ['dang-nhap','dang-ky','tai-khoan','don-hang','quan-tri','tn-dashboard','checkout','thanh-toan'];
    for (var i = 0; i < blocked.length; i++) {
      if (h.indexOf(blocked[i]) !== -1) return true;
    }
    return false;
  }

  function animateCount(el, target, duration) {
    var start = 0, step = target / (duration / 16);
    var timer = setInterval(function () {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = Math.floor(start).toLocaleString('vi-VN');
    }, 16);
  }

  function buildPopup() {
    if (isExcludedUrl()) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (document.getElementById('pp-overlay')) return;

    sessionStorage.setItem(SESSION_KEY, '1');

    var gSVG = '<svg width="16" height="16" viewBox="0 0 48 48">' +
      '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>' +
      '<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>' +
      '<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>' +
      '<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>' +
    '</svg>';

    if (!document.getElementById('pp-style')) {
      var style = document.createElement('style');
      style.id = 'pp-style';
      style.textContent =
        '@keyframes ppIn{from{opacity:0;transform:translateY(32px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}}' +
        '@keyframes ppPulse{0%,100%{box-shadow:0 0 0 0 rgba(102,186,50,.45)}70%{box-shadow:0 0 0 10px rgba(102,186,50,0)}}' +
        '@keyframes ppDot{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}' +
        '#pp-cta:hover{filter:brightness(1.08);transform:translateY(-1px)!important}' +
        '#pp-cta{transition:all .18s ease}';
      document.head.appendChild(style);
    }

    var card = document.createElement('div');
    card.innerHTML =
      '<button id="pp-close" style="position:absolute;top:12px;right:12px;z-index:10;width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.06);border:none;cursor:pointer;font-size:14px;color:#888;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0;">&#x2715;</button>' +

      '<div style="padding:28px 22px 20px;display:flex;gap:16px;align-items:flex-start;">' +
        '<div style="flex-shrink:0;text-align:center;">' +
          '<div style="position:relative;display:inline-block;">' +
            '<img src="' + AVATAR_URL + '" style="width:68px;height:68px;border-radius:50%;object-fit:cover;border:3px solid var(--jj-c1);display:block;box-shadow:0 4px 14px rgba(102,186,50,.30);">' +
            '<span style="position:absolute;bottom:3px;right:3px;width:14px;height:14px;border-radius:50%;background:var(--jj-c1);border:2.5px solid #fff;display:block;animation:ppPulse 2s infinite;"></span>' +
          '</div>' +
          '<div style="margin-top:6px;font-size:10.5px;font-weight:700;color:var(--jj-c2);background:rgba(102,186,50,.10);border:1px solid rgba(102,186,50,.20);border-radius:999px;padding:2px 8px;white-space:nowrap;">{{PERSON_NAME}}</div>' +
        '</div>' +
        '<div style="flex:1;min-width:0;">' +
          '<div style="font-size:12px;font-weight:700;color:var(--jj-c2);letter-spacing:.04em;text-transform:uppercase;margin-bottom:5px;">{{BRAND_NAME}}</div>' +
          '<div style="background:#f3fdf0;border:1.5px solid rgba(102,186,50,.20);border-radius:0 14px 14px 14px;padding:12px 14px;">' +
            '<div style="font-size:13.5px;color:#1a1a1a;line-height:1.65;font-style:italic;">Chào anh em! {{BRAND_NAME}} tắt hiển thị giá do quy định giá bán tối thiểu, nhưng anh em đăng nhập bằng Gmail sẽ thấy giá. Nhiều sản phẩm giá trên {{BRAND_NAME}} luôn rẻ hơn Shopee 20%!</div>' +
            '<div style="margin-top:8px;"><span style="color:#f59e0b;font-size:13px;">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div style="height:1px;background:linear-gradient(90deg,transparent,rgba(102,186,50,.18),transparent);margin:0 22px;"></div>' +

      '<div style="padding:14px 22px;display:flex;align-items:center;justify-content:space-between;gap:10px;background:rgba(102,186,50,.04);">' +
        '<div style="display:flex;align-items:center;gap:8px;">' +
          '<div style="display:flex;">' +
            '<div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#a8d87a,var(--jj-c1));border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px;">&#x1F600;</div>' +
            '<div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#84c552,var(--jj-c2));border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px;margin-left:-8px;">&#x1F60A;</div>' +
            '<div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,var(--jj-c1),var(--jj-c2));border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px;margin-left:-8px;">&#x1F609;</div>' +
          '</div>' +
          'Hiện tại có <div style="font-size:12.5px;color:#555;line-height:1.4;"><strong id="pp-count" style="color:var(--jj-c2);font-size:14px;">0</strong> anh em <br><span style="font-size:11px;">đăng nhập và mua hàng.</span></div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--jj-c2);font-weight:600;">' +
          '<div style="display:flex;gap:3px;align-items:center;">' +
            '<span style="width:5px;height:5px;border-radius:50%;background:var(--jj-c1);display:inline-block;animation:ppDot 1.4s .0s infinite ease-in-out;"></span>' +
            '<span style="width:5px;height:5px;border-radius:50%;background:var(--jj-c1);display:inline-block;animation:ppDot 1.4s .2s infinite ease-in-out;"></span>' +
            '<span style="width:5px;height:5px;border-radius:50%;background:var(--jj-c1);display:inline-block;animation:ppDot 1.4s .4s infinite ease-in-out;"></span>' +
          '</div>Live' +
        '</div>' +
      '</div>' +

      '<div style="height:1px;background:linear-gradient(90deg,transparent,rgba(102,186,50,.18),transparent);margin:0 22px;"></div>' +

      '<div style="padding:18px 22px 22px;">' +
        '<div style="text-align:center;margin-bottom:14px;">' +
          '<div style="font-size:17px;font-weight:900;color:#1a1a1a;line-height:1.3;margin-bottom:6px;">Bạn đang xem giá <span style="color:#e53e3e;text-decoration:line-through;">cao hơn</span><br>giá thực tế của thành viên &#x1F625;</div>' +
          '<div style="font-size:12.5px;color:#888;line-height:1.5;">Đăng nhập miễn phí — thấy ngay giá sỉ dành riêng cho bạn</div>' +
        '</div>' +
        '<a id="pp-cta" href="' + LOGIN_URL + '" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:10px;width:100%;box-sizing:border-box;padding:16px;border-radius:16px;background:linear-gradient(135deg,var(--jj-c1) 0%,var(--jj-c2) 100%);color:#fff;font-size:15.5px;font-weight:900;text-decoration:none;box-shadow:0 8px 28px rgba(102,186,50,.40);margin-bottom:10px;text-align:center;line-height:1.3;">' +
          gSVG + '<span>&#x1F511; Đăng nhập bằng Google — miễn phí</span>' +
        '</a>' +
        '<a id="pp-guide" href="' + GUIDE_URL + '" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;width:100%;box-sizing:border-box;padding:11px;border-radius:12px;background:#fff;border:1.5px solid rgba(102,186,50,.25);color:var(--jj-c2);font-size:13px;font-weight:700;text-decoration:none;gap:6px;">&#x2139;&#xFE0F; Chưa biết cách? Hướng dẫn 2 bước &#x1F449;</a>' +
        '<div style="margin-top:12px;display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;">' +
          '<span style="font-size:11px;color:#aaa;">&#x1F512; An toàn 100%</span>' +
          '<span style="color:#ddd;font-size:11px;">|</span>' +
          '<span style="font-size:11px;color:#aaa;">&#x1F4B3; Miễn phí hoàn toàn</span>' +
          '<span style="color:#ddd;font-size:11px;">|</span>' +
          '<span style="font-size:11px;color:#aaa;">&#x274C; Không spam</span>' +
        '</div>' +
      '</div>';

    card.style.cssText = 'background:#fff;border-radius:22px;max-width:440px;width:100%;box-shadow:0 28px 80px rgba(0,0,0,.22);overflow:hidden;position:relative;animation:ppIn .4s cubic-bezier(.34,1.1,.64,1) both;font-family:Inter,system-ui,-apple-system,sans-serif;';

    var overlay = document.createElement('div');
    overlay.id = 'pp-overlay';
    Object.assign(overlay.style, {
      display:'flex', position:'fixed', top:'0', left:'0', right:'0', bottom:'0',
      zIndex:'999999', background:'rgba(0,0,0,.55)',
      alignItems:'center', justifyContent:'center', padding:'16px', boxSizing:'border-box'
    });
    overlay.appendChild(card);
    overlay.addEventListener('click', function(e){ if(e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
    document.getElementById('pp-close').addEventListener('click', function(){ overlay.remove(); });

    /* Khi user mở newtab (đăng nhập / xem hướng dẫn) → ko hiện popup nữa */
    function dismissForever(){
      try { localStorage.setItem(PERSIST_KEY, '1'); } catch(e) {}
      overlay.remove();
    }
    var ctaEl = document.getElementById('pp-cta');
    var guideEl = document.getElementById('pp-guide');
    if (ctaEl)   ctaEl.addEventListener('click', dismissForever);
    if (guideEl) guideEl.addEventListener('click', dismissForever);

    var countEl = document.getElementById('pp-count');
    var soNguoi = Math.floor(Math.random() * 1001) + 500;
    if (countEl) animateCount(countEl, soNguoi, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(buildPopup, 900); });
  } else {
    setTimeout(buildPopup, 900);
  }
})();
<\/script>
<!--/JJBLOCK:login-popup-->
<!--JJBLOCK:desc-collapse-->
<script>
(function(){
  if(!window._jjGate)return;
  var COLLAPSED_HEIGHT = 300;
  var LABEL_MORE = 'Xem thêm';
  var LABEL_LESS = 'Thu gọn';

  function applyCollapse() {
  var wrapper = document.querySelector('.mb-6.mt-4.border-b.bg-white');
  if (!wrapper || wrapper.getAttribute('data-pp-collapsed')) return false;
  wrapper.setAttribute('data-pp-collapsed', '1');

  if (!document.getElementById('pp-desc-css')) {
  var s = document.createElement('style');
  s.id = 'pp-desc-css';
  s.textContent = [
  '@keyframes ppDescIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}',
  '@keyframes ppShimmer{0%{background-position:200% center}100%{background-position:-200% center}}',
  '#pp-desc-shell{',
  'position:relative;',
  'border-radius:20px;',
  'padding:2px;',
  'background:linear-gradient(135deg,rgba(255,255,255,.9) 0%,rgba(240,240,245,.6) 50%,rgba(255,255,255,.9) 100%);',
  'box-shadow:',
  '0 0 0 1px rgba(255,255,255,.8) inset,',
  '0 2px 20px rgba(0,0,0,.06),',
  '0 1px 3px rgba(0,0,0,.04);',
  'animation:ppDescIn .4s ease both;',
  'margin:-4px -4px 0;',
  '}',
  '#pp-desc-shell::before{',
  'content:"";',
  'position:absolute;inset:0;',
  'border-radius:20px;',
  'padding:1.5px;',
  'background:linear-gradient(135deg,rgba(255,255,255,1),rgba(200,200,220,.4),rgba(255,255,255,.9),rgba(180,180,210,.3));',
  'background-size:300% 300%;',
  '-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);',
  '-webkit-mask-composite:xor;',
  'mask-composite:exclude;',
  'animation:ppShimmer 6s linear infinite;',
  '}',
  '#pp-desc-inner{',
  'border-radius:18px;',
  'background:rgba(255,255,255,.92);',
  '-webkit-backdrop-filter:blur(24px) saturate(180%);',
  'backdrop-filter:blur(24px) saturate(180%);',
  'overflow:hidden;',
  'transition:max-height .5s cubic-bezier(.4,0,.2,1);',
  'position:relative;',
  '}',
  '#pp-desc-fade{',
  'position:absolute;bottom:0;left:0;right:0;height:52px;',
  'background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,.98));',
  'pointer-events:none;',
  'transition:opacity .4s ease;',
  'border-radius:0 0 18px 18px;',
  '}',
  '#pp-desc-btn{',
  'display:flex;align-items:center;justify-content:center;gap:5px;',
  'width:100%;margin-top:10px;',
  'padding:11px 0;',
  'background:linear-gradient(135deg,rgba(255,255,255,.9),rgba(245,245,250,.8));',
  '-webkit-backdrop-filter:blur(12px);',
  'backdrop-filter:blur(12px);',
  'border:1px solid rgba(200,200,220,.5);',
  'border-radius:14px;',
  'font-size:14px;font-weight:600;',
  'color:#1d1d1f;',
  'letter-spacing:-.01em;',
  'cursor:pointer;',
  'transition:all .2s cubic-bezier(.4,0,.2,1);',
  'box-shadow:0 1px 6px rgba(0,0,0,.06),0 0 0 1px rgba(255,255,255,.8) inset;',
  'font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",sans-serif;',
  '}',
  '#pp-desc-btn:hover{',
  'background:linear-gradient(135deg,rgba(250,250,255,.95),rgba(240,240,250,.9));',
  'box-shadow:0 4px 16px rgba(0,0,0,.1),0 0 0 1px rgba(255,255,255,.9) inset;',
  'transform:translateY(-1px);',
  '}',
  '#pp-desc-btn:active{transform:scale(.98);opacity:.85}',
  '#pp-desc-btn svg{transition:transform .3s cubic-bezier(.4,0,.2,1)}',
  '#pp-desc-btn.expanded svg{transform:rotate(180deg)}',
  ].join('');
  document.head.appendChild(s);
  }

  var fullHeight;
  var shell = document.createElement('div');
  shell.id = 'pp-desc-shell';

  var innerDiv = document.createElement('div');
  innerDiv.id = 'pp-desc-inner';
  innerDiv.innerHTML = wrapper.innerHTML;
  innerDiv.style.maxHeight = COLLAPSED_HEIGHT + 'px';
  innerDiv.style.padding = '14px 16px 14px';

  var fade = document.createElement('div');
  fade.id = 'pp-desc-fade';
  innerDiv.appendChild(fade);

  shell.appendChild(innerDiv);
  wrapper.innerHTML = '';
  wrapper.style.border = 'none';
  wrapper.style.background = 'transparent';
  wrapper.style.padding = '4px';
  wrapper.appendChild(shell);

  fullHeight = innerDiv.scrollHeight + 40;

  var chevronSVG = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var btn = document.createElement('button');
  btn.id = 'pp-desc-btn';
  btn.innerHTML = '<span>' + LABEL_MORE + '</span>' + chevronSVG;

  var expanded = false;
  btn.addEventListener('click', function () {
  expanded = !expanded;
  if (expanded) {
  innerDiv.style.maxHeight = fullHeight + 'px';
  fade.style.opacity = '0';
  btn.innerHTML = '<span>' + LABEL_LESS + '</span>' + chevronSVG;
  btn.classList.add('expanded');
  } else {
  innerDiv.style.maxHeight = COLLAPSED_HEIGHT + 'px';
  fade.style.opacity = '1';
  btn.innerHTML = '<span>' + LABEL_MORE + '</span>' + chevronSVG;
  btn.classList.remove('expanded');
  }
  });

  wrapper.appendChild(btn);
  return true;
  }

  function tryApply() {
  var tries = 0;
  var t = setInterval(function () {
  if (applyCollapse() || ++tries > 25) clearInterval(t);
  }, 200);
  }

  var oP = history.pushState, oR = history.replaceState;
  history.pushState  = function () { oP.apply(history, arguments); setTimeout(tryApply, 400); };
  history.replaceState = function () { oR.apply(history, arguments); setTimeout(tryApply, 400); };
  window.addEventListener('popstate', function () { setTimeout(tryApply, 400); });

  tryApply();
})();
<\/script>
<!--/JJBLOCK:desc-collapse-->

<!--JJBLOCK:fake-reviews-->
<script>
(function(){
  if(!window._jjGate)return;
  function seededRandom(seed, min, max) {
  var x = Math.sin(seed + 1) * 10000;
  var r = x - Math.floor(x);
  return Math.floor(r * (max - min + 1)) + min;
  }

  function getPageSeed() {
  var url = window.location.href;
  var hash = 0;
  for (var i = 0; i < url.length; i++) {
  hash = url.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
  }

  var seed = getPageSeed();

  function genBreakdown(total) {
  var p5 = seededRandom(seed + 10, 68, 80);
  var p4 = seededRandom(seed + 11, 12, 20);
  var five  = Math.floor(total * p5 / 100);
  var four  = Math.floor(total * p4 / 100);
  var three = total - five - four;
  if (three < 0) three = 0;
  return [five, four, three, 0, 0];
  }

  function fixBreakdownText(reviewCount) {
  var breakdown = genBreakdown(reviewCount);
  var all = document.querySelectorAll('*');
  for (var i = 0; i < all.length; i++) {
  var el = all[i];
  if (el.childNodes.length !== 1 || el.childNodes[0].nodeType !== 3) continue;
  var txt = el.textContent.trim();
  var mStar = txt.match(/^(d)s+Saos+((d+))$/i);
  if (mStar) {
  var star = parseInt(mStar[1], 10);
  var newCount = breakdown[5 - star] || 0;
  el.textContent = star + ' Sao (' + newCount + ')';
  continue;
  }
  var mAll = txt.match(/^Tất Cảs+((d+))$/i);
  if (mAll) {
  el.textContent = 'Tất Cả (' + reviewCount + ')';
  continue;
  }
  }
  }

  function modifyRating() {
  var rateContainers = document.querySelectorAll('.flex.items-center.gap-2.text-sm');
  rateContainers.forEach(function(container) {
  if (container.getAttribute('data-gtm-modified')) return;
  var rateEl = container.querySelector('.ant-rate');
  if (!rateEl) return;

  var starInt  = seededRandom(seed,  40, 50);
  var starAvg  = (starInt / 10).toFixed(1);
  var buyCount  = seededRandom(seed + 2, 50, 400);
  var reviewPct   = seededRandom(seed + 1, 20, 70);
  var reviewCount = Math.floor(buyCount * reviewPct / 100);
  if (reviewCount < 5) reviewCount = 5;

  var starItems = rateEl.querySelectorAll('.ant-rate-star');
  var fullStars = Math.floor(starAvg);
  var hasHalf   = (starAvg - fullStars) >= 0.5;

  starItems.forEach(function(item, index) {
  item.classList.remove('ant-rate-star-full', 'ant-rate-star-half', 'ant-rate-star-zero');
  if (index < fullStars) {
  item.classList.add('ant-rate-star-full');
  } else if (index === fullStars && hasHalf) {
  item.classList.add('ant-rate-star-half');
  } else {
  item.classList.add('ant-rate-star-zero');
  }
  });

  var avgSpan = document.createElement('span');
  avgSpan.style.cssText = 'font-weight:700;color:#faad14;font-size:15px;margin-right:4px;';
  avgSpan.textContent = starAvg;

  var reviewSpan = document.createElement('span');
  reviewSpan.style.cssText = 'margin-left:8px;color:#555;font-size:13px;border-left:1px solid #ddd;padding-left:8px;';
  reviewSpan.textContent = reviewCount + ' Đánh Giá';

  var buySpan = document.createElement('span');
  buySpan.style.cssText = 'margin-left:8px;color:#555;font-size:13px;border-left:1px solid #ddd;padding-left:8px;';
  buySpan.innerHTML = '&#128722; ' + buyCount + ' Lượt mua';

  container.insertBefore(avgSpan, rateEl);
  container.appendChild(reviewSpan);
  container.appendChild(buySpan);
  container.setAttribute('data-gtm-modified', '1');

  setTimeout(function() { fixBreakdownText(reviewCount); }, 300);
  setTimeout(function() { fixBreakdownText(reviewCount); }, 1000);
  });
  }

  modifyRating();

  var observer = new MutationObserver(function(mutations) {
  for (var i = 0; i < mutations.length; i++) {
  if (mutations[i].addedNodes.length > 0) { modifyRating(); break; }
  }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(function() { observer.disconnect(); }, 15000);

  setTimeout(modifyRating, 1000);
  setTimeout(modifyRating, 3000);
  setTimeout(modifyRating, 6000);

  var lastUrl = location.href;
  setInterval(function() {
  if (location.href !== lastUrl) {
  lastUrl = location.href;
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(modifyRating, 500);
  setTimeout(modifyRating, 1500);
  setTimeout(function() { observer.disconnect(); }, 15000);
  }
  }, 1000);
})();
<\/script>
<!--/JJBLOCK:fake-reviews-->

<!--JJBLOCK:google-login-->
<script>
(function(){
  if(!window._jjGate)return;
  var DONE = false;

  function isLoginPage() {
  var h = window.location.href;
  return h.indexOf('dang-nhap') !== -1 || h.indexOf('login') !== -1;
  }

  function patch() {
  if (DONE) return;
  if (!isLoginPage()) return;

  var googleBtn = null;
  var allBtns = document.querySelectorAll('button, a, [role="button"]');
  for (var i = 0; i < allBtns.length; i++) {
  var t = (allBtns[i].textContent || '').trim();
  if (t.indexOf('Google') !== -1 || t.indexOf('google') !== -1) {
  googleBtn = allBtns[i];
  break;
  }
  }

  var form = document.querySelector('form.ant-form') ||
  document.querySelector('form') ||
  document.querySelector('.ant-form');

  if (!googleBtn || !form) return;
  if (document.getElementById('pp-google-wrap')) return;

  DONE = true;

  if (!document.getElementById('pp-ln-css')) {
  var st = document.createElement('style');
  st.id = 'pp-ln-css';
  st.textContent =
  '@keyframes ppGlow{0%,100%{box-shadow:0 0 0 0 rgba(102,186,50,.5),0 8px 32px rgba(102,186,50,.35)}50%{box-shadow:0 0 0 10px rgba(102,186,50,.0),0 8px 40px rgba(102,186,50,.55)}}' +
  '@keyframes ppShine{0%{left:-110%}100%{left:140%}}' +
  '@keyframes ppBadgePop{from{opacity:0;transform:scale(.7) translateY(6px)}to{opacity:1;transform:scale(1) translateY(0)}}' +
  '@keyframes ppOrb{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.15);opacity:.3}}' +
  '#pp-google-wrap{' +
  'margin-bottom:20px;' +
  '}' +
  '#pp-google-card{' +
  'position:relative;overflow:hidden;' +
  'background:linear-gradient(145deg,#1e7a34,#2ea043,#34c759);' +
  'border-radius:18px;padding:20px 18px 18px;' +
  'box-shadow:0 8px 32px rgba(52,199,89,.35);' +
  'animation:ppGlow 2.5s ease-in-out infinite;' +
  '}' +
  '#pp-google-card::before{' +
  'content:"";position:absolute;top:0;left:-110%;width:55%;height:100%;' +
  'background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);' +
  'animation:ppShine 3s 1s infinite;' +
  '}' +
  '.pp-orb{position:absolute;border-radius:50%;pointer-events:none;animation:ppOrb 5s ease-in-out infinite;}' +
  '#pp-google-label{' +
  'font-size:10.5px;font-weight:800;color:rgba(255,255,255,.8);' +
  'letter-spacing:.1em;text-transform:uppercase;' +
  'text-align:center;margin-bottom:10px;' +
  '}' +
  '#pp-google-btn-wrap{' +
  'background:#fff;border-radius:13px;padding:2px;' +
  'box-shadow:0 4px 16px rgba(0,0,0,.18);' +
  '}' +
  '#pp-google-btn-inner{' +
  'display:flex;align-items:center;justify-content:center;gap:10px;' +
  'width:100%;box-sizing:border-box;padding:13px 16px;' +
  'border-radius:11px;background:#fff;border:none;cursor:pointer;' +
  'font-size:15px;font-weight:800;color:#1a5c2a;' +
  'font-family:-apple-system,BlinkMacSystemFont,Inter,system-ui,sans-serif;' +
  'transition:background .15s;' +
  '}' +
  '#pp-google-btn-inner:hover{background:#f0fdf4;}' +
  '#pp-google-badge{' +
  'display:flex;align-items:center;justify-content:center;gap:6px;' +
  'margin-top:10px;animation:ppBadgePop .5s .3s both;' +
  '}' +
  '.pp-badge-item{' +
  'font-size:10.5px;font-weight:700;color:rgba(255,255,255,.85);' +
  'background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);' +
  'border-radius:999px;padding:3px 9px;' +
  '}' +
  '#pp-divider-wrap{' +
  'display:flex;align-items:center;gap:10px;margin:16px 0 4px;' +
  '}' +
  '#pp-divider-wrap hr{flex:1;border:none;border-top:1px solid #e5e7eb;margin:0;}' +
  '#pp-divider-wrap span{font-size:11.5px;color:#9ca3af;white-space:nowrap;font-weight:500;}' +
  '#pp-form-label{' +
  'font-size:13px;font-weight:700;color:#374151;' +
  'margin-bottom:8px;display:flex;align-items:center;gap:6px;' +
  '}';
  document.head.appendChild(st);
  }

  var wrap = document.createElement('div');
  wrap.id = 'pp-google-wrap';

  var card = document.createElement('div');
  card.id = 'pp-google-card';

  var orbs = [
  {w:100,h:100,top:'-30px',right:'-30px',bg:'rgba(255,255,255,.10)',delay:'0s'},
  {w:60, h:60, bottom:'-20px',left:'10px',bg:'rgba(255,255,255,.07)',delay:'-2.5s'}
  ];
  orbs.forEach(function(o) {
  var el = document.createElement('div');
  el.className = 'pp-orb';
  el.style.cssText = 'width:'+o.w+'px;height:'+o.h+'px;background:'+o.bg+';animation-delay:'+o.delay+';';
  if (o.top)  el.style.top  = o.top;
  if (o.right)  el.style.right  = o.right;
  if (o.bottom) el.style.bottom = o.bottom;
  if (o.left)   el.style.left   = o.left;
  card.appendChild(el);
  });

  var lbl = document.createElement('div');
  lbl.id = 'pp-google-label';
  lbl.innerHTML = '⚡ Cách nhanh nhất — 1 click là xong';
  card.appendChild(lbl);

  var btnWrap = document.createElement('div');
  btnWrap.id = 'pp-google-btn-wrap';

  var btnInner = document.createElement('button');
  btnInner.id = 'pp-google-btn-inner';
  btnInner.innerHTML =
  '<svg width="20" height="20" viewBox="0 0 48 48">' +
  '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>' +
  '<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>' +
  '<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>' +
  '<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>' +
  '</svg>' +
  '<span>Đăng nhập bằng Google</span>';

  btnInner.addEventListener('click', function () { googleBtn.click(); });
  btnWrap.appendChild(btnInner);
  card.appendChild(btnWrap);

  var badge = document.createElement('div');
  badge.id = 'pp-google-badge';
  badge.innerHTML =
  '<span class="pp-badge-item">&#x1F512; An toàn</span>' +
  '<span class="pp-badge-item">&#x26A1; Siêu nhanh</span>' +
  '<span class="pp-badge-item">&#x1F381; Miễn phí</span>';
  card.appendChild(badge);
  wrap.appendChild(card);

  var div = document.createElement('div');
  div.id = 'pp-divider-wrap';
  div.innerHTML = '<hr><span>hoặc đăng nhập bằng tài khoản</span><hr>';
  wrap.appendChild(div);

  form.parentNode.insertBefore(wrap, form);

  var googleParent = googleBtn.closest('div') || googleBtn.parentNode;
  if (googleParent && googleParent !== form) {
  googleParent.style.display = 'none';
  }
  }

  function hookHistory() {
  var oP = history.pushState;
  var oR = history.replaceState;
  history.pushState  = function () { oP.apply(history, arguments); onNav(); };
  history.replaceState = function () { oR.apply(history, arguments); onNav(); };
  window.addEventListener('popstate', onNav);
  }

  function onNav() {
  DONE = false;
  var old = document.getElementById('pp-google-wrap');
  if (old) old.remove();
  setTimeout(patch, 400);
  setTimeout(patch, 1000);
  setTimeout(patch, 2200);
  }

  hookHistory();

  if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
  setTimeout(patch, 400);
  setTimeout(patch, 1000);
  setTimeout(patch, 2200);
  });
  } else {
  setTimeout(patch, 400);
  setTimeout(patch, 1000);
  setTimeout(patch, 2200);
  }
})();
<\/script>
<!--/JJBLOCK:google-login-->

<!--JJBLOCK:flashsale-banner-->
<script>
(function(){
  if(!window._jjGate)return;
  var FLASH_URL = '/flash-sale';
  var applied = false;

  function isHomePage() {
  var p = window.location.pathname;
  return p === '/' || p === '' || p === '/index.html';
  }

  function getEndTime() {
  var end = new Date();
  end.setHours(23, 59, 59, 0);
  return end;
  }

  function formatTime(ms) {
  if (ms <= 0) return { h: '00', m: '00', s: '00' };
  var totalSec = Math.floor(ms / 1000);
  return {
  h: String(Math.floor(totalSec / 3600)).padStart(2, '0'),
  m: String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0'),
  s: String(totalSec % 60).padStart(2, '0')
  };
  }

  function hideCarousel() {
  var els = document.querySelectorAll('.home-categories-carousel_container__Uru3C');
  for (var i = 0; i < els.length; i++) {
  els[i].style.cssText = 'display:none!important;';
  }
  }

  function injectBanner() {
  if (!isHomePage()) return;
  hideCarousel();
  if (document.getElementById('tms-flash-banner')) return;

  var carousel = document.querySelector('.home-categories-carousel_container__Uru3C');
  var target = carousel || document.querySelector('main') || document.querySelector('#__next') || document.querySelector('#root') || document.body.firstElementChild;
  if (!target) return;
  applied = true;

  if (!document.getElementById('tms-flash-css')) {
  var style = document.createElement('style');
  style.id = 'tms-flash-css';
  style.textContent =
  '@keyframes tmsSlide{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}' +
  '@keyframes tmsFlash{0%,100%{opacity:1}50%{opacity:.4}}' +
  '@keyframes tmsShine{0%{left:-130%}100%{left:170%}}' +
  '@keyframes tmsOrb{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}' +
  '#tms-flash-banner{animation:tmsSlide .5s cubic-bezier(.34,1.1,.64,1) both;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,system-ui,sans-serif;background:linear-gradient(135deg,#1a5c2a 0%,#1e7a34 30%,#25a244 65%,#34c759 100%);border-radius:20px;margin:14px 12px 6px;overflow:hidden;position:relative;box-shadow:0 16px 48px rgba(52,199,89,.28),0 0 0 1px rgba(255,255,255,.08);}' +
  '@media(min-width:1024px){#tms-flash-inner{flex-direction:row;align-items:center;padding:22px 28px 20px;gap:24px;}#tms-flash-left{flex:1;}#tms-flash-title{font-size:26px;}#tms-flash-sub{font-size:13.5px;}#tms-flash-right{align-items:flex-end;gap:14px;}.tms-digit{min-width:44px;padding:6px 10px;}.tms-digit .tms-dnum{font-size:22px;}.tms-digit .tms-dlbl{font-size:9px;}#tms-flash-btn{font-size:14.5px;padding:13px 26px;border-radius:15px;}#tms-flash-badge-row{margin-bottom:12px;}.tms-tag{font-size:11px;padding:4px 11px;}#tms-flash-banner{border-radius:22px;margin:16px 0 8px;}}' +
  '@media(min-width:641px) and (max-width:1023px){#tms-flash-inner{flex-direction:row;align-items:center;padding:18px 22px 16px;gap:18px;}#tms-flash-left{flex:1;}#tms-flash-title{font-size:22px;}#tms-flash-sub{font-size:12.5px;}#tms-flash-right{align-items:flex-end;gap:10px;}.tms-digit{min-width:40px;padding:5px 9px;}.tms-digit .tms-dnum{font-size:19px;}.tms-digit .tms-dlbl{font-size:8.5px;}#tms-flash-btn{font-size:13.5px;padding:12px 22px;}.tms-tag{font-size:10.5px;padding:3px 9px;}}' +
  '@media(max-width:640px){#tms-flash-inner{flex-direction:column;align-items:stretch;padding:16px 16px 14px;gap:14px;}#tms-flash-right{flex-direction:row;align-items:center;justify-content:space-between;}#tms-flash-title{font-size:20px;}#tms-flash-sub{font-size:12px;}.tms-digit{min-width:36px;padding:5px 8px;}.tms-digit .tms-dnum{font-size:17px;}.tms-digit .tms-dlbl{font-size:8px;}#tms-flash-btn{font-size:13px;padding:11px 18px;border-radius:13px;}.tms-tag{font-size:10px;padding:3px 8px;}.tms-sep{font-size:16px;}#tms-flash-banner{border-radius:16px;margin:10px 8px 4px;}}' +
  '#tms-flash-btn{position:relative;overflow:hidden;transition:all .2s ease;}' +
  '#tms-flash-btn::after{content:"";position:absolute;top:0;left:-130%;width:55%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);animation:tmsShine 2.6s 1.2s infinite;}' +
  '#tms-flash-btn:hover{transform:scale(1.025);box-shadow:0 12px 36px rgba(52,199,89,.45)!important;}' +
  '.tms-sep{animation:tmsFlash 1s infinite;}' +
  '.tms-orb{animation:tmsOrb 7s ease-in-out infinite;pointer-events:none;}';
  document.head.appendChild(style);
  }

  var banner = document.createElement('div');
  banner.id = 'tms-flash-banner';
  banner.innerHTML =
  '<div class="tms-orb" style="position:absolute;top:-50px;right:-50px;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.12) 0%,transparent 70%);"></div>' +
  '<div class="tms-orb" style="position:absolute;bottom:-40px;left:10px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 70%);animation-delay:-3s;"></div>' +
  '<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(45deg,rgba(255,255,255,.02) 0px,rgba(255,255,255,.02) 1px,transparent 1px,transparent 24px);pointer-events:none;"></div>' +
  '<div id="tms-flash-inner" style="display:flex;position:relative;z-index:1;">' +
  '<div id="tms-flash-left">' +
  '<div id="tms-flash-badge-row" style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:10px;">' +
  '<span class="tms-tag" style="background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.28);color:#fff;display:inline-flex;align-items:center;gap:5px;border-radius:999px;"><svg width="11" height="11" viewBox="0 0 24 24" fill="#fff"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> FLASH SALE</span>' +
  '<span class="tms-tag" style="background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);color:rgba(255,255,255,.9);display:inline-flex;align-items:center;gap:5px;border-radius:999px;">&#x1F525; Chỉ hôm nay</span>' +
  '<span class="tms-tag" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.85);display:inline-flex;align-items:center;gap:5px;border-radius:999px;">&#x23F0; Giới hạn số lượng</span>' +
  '</div>' +
  '<div id="tms-flash-title" style="font-weight:900;color:#fff;line-height:1.2;letter-spacing:-.4px;margin-bottom:7px;">Giảm đến&nbsp;<span style="background:rgba(255,255,255,.22);border-radius:8px;padding:0 6px;">70%</span>&nbsp;rất nhiều sản phẩm</div>' +
  '<div id="tms-flash-sub" style="color:rgba(255,255,255,.72);line-height:1.55;font-weight:400;">Công nghệ, gia dụng chính hãng — giá sốc — số lượng có hạn mỗi ngày. ĐĂNG KÝ HOẶC ĐĂNG NHẬP ĐI ANH EM</div>' +
  '</div>' +
  '<div id="tms-flash-right" style="display:flex;flex-direction:column;">' +
  '<div style="display:flex;align-items:center;gap:4px;">' +
  '<div class="tms-digit" style="display:inline-flex;flex-direction:column;align-items:center;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.15);border-radius:10px;backdrop-filter:blur(12px);"><span class="tms-dnum" id="tms-h" style="font-weight:900;color:#fff;line-height:1;letter-spacing:-.5px;">00</span><span class="tms-dlbl" style="font-weight:600;color:rgba(255,255,255,.55);text-transform:uppercase;margin-top:3px;letter-spacing:.06em;">Giờ</span></div>' +
  '<span class="tms-sep" style="font-weight:900;color:rgba(255,255,255,.6);padding:0 1px;margin-bottom:10px;">:</span>' +
  '<div class="tms-digit" style="display:inline-flex;flex-direction:column;align-items:center;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.15);border-radius:10px;backdrop-filter:blur(12px);"><span class="tms-dnum" id="tms-m" style="font-weight:900;color:#fff;line-height:1;letter-spacing:-.5px;">00</span><span class="tms-dlbl" style="font-weight:600;color:rgba(255,255,255,.55);text-transform:uppercase;margin-top:3px;letter-spacing:.06em;">Phút</span></div>' +
  '<span class="tms-sep" style="font-weight:900;color:rgba(255,255,255,.6);padding:0 1px;margin-bottom:10px;">:</span>' +
  '<div class="tms-digit" style="display:inline-flex;flex-direction:column;align-items:center;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.15);border-radius:10px;backdrop-filter:blur(12px);"><span class="tms-dnum" id="tms-s" style="font-weight:900;color:#fff;line-height:1;letter-spacing:-.5px;">00</span><span class="tms-dlbl" style="font-weight:600;color:rgba(255,255,255,.55);text-transform:uppercase;margin-top:3px;letter-spacing:.06em;">Giây</span></div>' +
  '</div>' +
  '<a id="tms-flash-btn" href="' + FLASH_URL + '" style="display:inline-flex;align-items:center;justify-content:center;gap:7px;border-radius:14px;background:#fff;color:#1a5c2a;font-weight:900;text-decoration:none;box-shadow:0 8px 24px rgba(0,0,0,.2);letter-spacing:.01em;white-space:nowrap;text-align:center;margin-top:10px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="#34c759"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>Xem Flash Sale&nbsp;<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></a>' +
  '</div>' +
  '</div>' +
  '<div style="height:3px;background:linear-gradient(to right,rgba(255,255,255,.15),rgba(255,255,255,.4),rgba(255,255,255,.15));"></div>';

  target.parentNode.insertBefore(banner, target);
  hideCarousel();

  var endTime = getEndTime();
  function tick() {
  var t = formatTime(endTime - new Date());
  var elH = document.getElementById('tms-h');
  var elM = document.getElementById('tms-m');
  var elS = document.getElementById('tms-s');
  if (elH) elH.textContent = t.h;
  if (elM) elM.textContent = t.m;
  if (elS) elS.textContent = t.s;
  }
  tick();
  setInterval(tick, 1000);
  }

  function onUrlChange() {
  applied = false;
  var old = document.getElementById('tms-flash-banner');
  if (old) old.remove();
  if (!isHomePage()) return;
  setTimeout(injectBanner, 400);
  setTimeout(injectBanner, 1200);
  setTimeout(injectBanner, 2500);
  }

  var _push = history.pushState;
  var _replace = history.replaceState;
  history.pushState  = function () { _push.apply(this, arguments); onUrlChange(); };
  history.replaceState = function () { _replace.apply(this, arguments); onUrlChange(); };
  window.addEventListener('popstate', onUrlChange);

  var observer = new MutationObserver(function () {
  if (!isHomePage()) return;
  hideCarousel();
  if (!document.getElementById('tms-flash-banner')) { applied = false; injectBanner(); }
  });

  if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
  if (isHomePage()) {
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(injectBanner, 400);
  setTimeout(injectBanner, 1200);
  setTimeout(injectBanner, 2500);
  }
  });
  } else {
  if (isHomePage()) {
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(injectBanner, 400);
  setTimeout(injectBanner, 1200);
  setTimeout(injectBanner, 2500);
  }
  }
})();
<\/script>
<!--/JJBLOCK:flashsale-banner-->

<!--JJBLOCK:logo-animation-->
<script>
(function(){
  if(!window._jjGate)return;
  var css = '.jj-logo-wrap{position:relative;display:inline-flex;align-items:center;overflow:visible;}' +
  '.jj-glow{position:absolute;inset:-8px;border-radius:16px;' +
  'background:radial-gradient(ellipse at center,rgba(16,185,129,.35) 0%,transparent 70%);' +
  'animation:jjGlowPulse 2.4s ease-in-out infinite;pointer-events:none;z-index:1;}' +
  '@keyframes jjGlowPulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.3);opacity:0}}' +
  '.jj-shimmer{position:absolute;inset:0;border-radius:8px;overflow:hidden;pointer-events:none;z-index:3;}' +
  '.jj-shimmer::after{content:"";position:absolute;top:0;left:-100%;bottom:0;width:60%;' +
  'background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.65) 50%,transparent 70%);' +
  'transform:skewX(-15deg);animation:jjShimmer 3.2s ease-in-out infinite;}' +
  '@keyframes jjShimmer{0%{left:-100%}45%{left:150%}100%{left:150%}}' +
  '.jj-sparkle{position:absolute;border-radius:50%;background:#10b981;pointer-events:none;z-index:4;animation:jjSparkle 1.4s ease-in-out infinite;}' +
  '@keyframes jjSparkle{0%,100%{transform:scale(0);opacity:0}50%{transform:scale(1);opacity:1}}' +
  '.jj-tagline{position:absolute;left:0;top:50%;opacity:0;filter:blur(10px);' +
  'transform:translateY(-50%) translateX(12px);display:flex;align-items:center;z-index:5;' +
  'white-space:nowrap;pointer-events:none;' +
  'transition:opacity .55s cubic-bezier(.22,1,.36,1),filter .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);}' +
  '.jj-tagline.jj-show{opacity:1;filter:blur(0);transform:translateY(-50%) translateX(0);pointer-events:auto;}' +
  '.jj-tagline-inner{font-family:-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif;font-size:10.5px;font-weight:700;line-height:1.3;}' +
  '.jj-t-blue{background:linear-gradient(90deg,#0ea5e9,#6366f1,#10b981);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}' +
  '.jj-t-gray{color:#6b7280;-webkit-text-fill-color:#6b7280;}' +
  '.jj-t-fire{background:linear-gradient(90deg,#f97316,#ef4444);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:900;animation:jjFirePulse 1.8s ease-in-out infinite;}' +
  '@keyframes jjFirePulse{0%,100%{opacity:1}50%{opacity:.65}}';

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  function applyToLogo(logoImg) {
  if (logoImg.getAttribute('data-jj-done')) return;
  logoImg.setAttribute('data-jj-done', '1');

  logoImg.setAttribute('style',
  'height:80px !important;width:auto !important;' +
  'position:relative;z-index:2;display:block;' +
  'transition:opacity .45s ease,filter .45s ease,transform .45s ease;'
  );

  var logoLink = logoImg.closest ? logoImg.closest('a') : logoImg.parentElement;
  if (!logoLink) logoLink = logoImg.parentElement;
  logoLink.style.display = 'inline-flex';
  logoLink.style.alignItems = 'center';
  logoLink.style.overflow = 'visible';

  
  var headerEl = logoImg.closest('header') ||
  logoImg.closest('.ant-layout-header') ||
  logoImg.closest('[class*="header"]') ||
  logoImg.closest('[class*="Header"]') ||
  logoImg.closest('nav');
  if (headerEl) {
  headerEl.style.setProperty('height', 'auto', 'important');
  headerEl.style.setProperty('min-height', '90px', 'important');
  headerEl.style.setProperty('display', 'flex', 'important');
  headerEl.style.setProperty('align-items', 'center', 'important');
  headerEl.style.setProperty('overflow', 'visible', 'important');
  }

  var wrap = document.createElement('div');
  wrap.className = 'jj-logo-wrap';
  logoLink.parentNode.insertBefore(wrap, logoLink);
  wrap.appendChild(logoLink);

  var glow = document.createElement('div'); glow.className = 'jj-glow'; wrap.appendChild(glow);

  var shimmer = document.createElement('div'); shimmer.className = 'jj-shimmer';
  logoLink.appendChild(shimmer);

  var dots = [
  {top:'-8px',right:'-6px',size:'7px',delay:'0.4s'},
  {top:'4px',right:'-14px',size:'5px',delay:'1.1s'},
  {bottom:'-6px',left:'-8px',size:'6px',delay:'0.8s'},
  {bottom:'2px',right:'-10px',size:'4px',delay:'1.6s'}
  ];
  for (var i = 0; i < dots.length; i++) {
  var d = dots[i];
  var dot = document.createElement('div'); dot.className = 'jj-sparkle';
  var st = 'width:'+d.size+';height:'+d.size+';animation-delay:'+d.delay+';';
  if (d.top)  st += 'top:'+d.top+';';
  if (d.bottom) st += 'bottom:'+d.bottom+';';
  if (d.left)   st += 'left:'+d.left+';';
  if (d.right)  st += 'right:'+d.right+';';
  dot.style.cssText = st;
  wrap.appendChild(dot);
  }

  var tagline = document.createElement('div'); tagline.className = 'jj-tagline';
  tagline.innerHTML = '<div class="jj-tagline-inner">' +
  '<span class="jj-t-blue">Người anh em đăng nhập đi</span><br>' +
  '<span class="jj-t-gray">giá rẻ hơn </span>' +
  '<span class="jj-t-fire">70%</span>' +
  '<span class="jj-t-gray"> đấy 🔥</span></div>';
  wrap.appendChild(tagline);

  function cycle() {
  setTimeout(function() {
  logoImg.setAttribute('style',
  'height:80px !important;width:auto !important;position:relative;z-index:2;display:block;' +
  'opacity:0;filter:blur(6px);transform:scale(.88);transition:opacity .45s ease,filter .45s ease,transform .45s ease;'
  );
  shimmer.style.opacity = '0';
  setTimeout(function() { tagline.className += ' jj-show'; }, 150);
  setTimeout(function() {
  tagline.className = tagline.className.replace(' jj-show','');
  setTimeout(function() {
  logoImg.setAttribute('style',
  'height:80px !important;width:auto !important;position:relative;z-index:2;display:block;' +
  'opacity:1;filter:blur(0);transform:scale(1);transition:opacity .45s ease,filter .45s ease,transform .45s ease;'
  );
  shimmer.style.opacity = '1';
  cycle();
  }, 600);
  }, 5500);
  }, 2500);
  }
  cycle();
  }

  function scanLogos() {
  var logos = document.querySelectorAll('img[alt="Logo"]:not([data-jj-done])');
  for (var i = 0; i < logos.length; i++) { applyToLogo(logos[i]); }
  }

  var observer = new MutationObserver(function(mutations) {
  for (var m = 0; m < mutations.length; m++) {
  var nodes = mutations[m].addedNodes;
  for (var n = 0; n < nodes.length; n++) {
  var node = nodes[n];
  if (node.nodeType !== 1) continue;
  if (node.tagName === 'IMG' && node.alt === 'Logo') { applyToLogo(node); }
  var imgs = node.querySelectorAll ? node.querySelectorAll('img[alt="Logo"]') : [];
  for (var j = 0; j < imgs.length; j++) { applyToLogo(imgs[j]); }
  }
  }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });

  scanLogos();

  var origPush = history.pushState;
  history.pushState = function() {
  origPush.apply(this, arguments);
  setTimeout(scanLogos, 300);
  setTimeout(scanLogos, 800);
  };
  window.addEventListener('popstate', function() {
  setTimeout(scanLogos, 300);
  setTimeout(scanLogos, 800);
  });

})();
<\/script>
<!--/JJBLOCK:logo-animation-->

<!--JJBLOCK:search-style-->
<script>
(function(){
  if(!window._jjGate)return;
  if(document.getElementById('jj-global-css'))return;
  var s=document.createElement('style');
  s.id='jj-global-css';
  s.textContent=
  ".ant-input-search .ant-input-affix-wrapper," +
  ".ant-input-search .ant-input-affix-wrapper-lg {" +
  "  border-radius: 12px 0 0 12px !important;" +
  "  border: 1.5px solid #d1d1d6 !important;" +
  "  border-right: none !important;" +
  "  background: #f5f5f7 !important;" +
  "  box-shadow: none !important;" +
  "  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s !important;" +
  "}" +
  ".ant-input-search .ant-input-affix-wrapper-focused," +
  ".ant-input-search .ant-input-affix-wrapper:focus-within {" +
  "  border-color: #34c759 !important;" +
  "  border-right: none !important;" +
  "  box-shadow: 0 0 0 3px rgba(52,199,89,0.18) !important;" +
  "  background: #fff !important;" +
  "}" +
  ".ant-input-search input.ant-input," +
  ".ant-input-search input.ant-input-lg {" +
  "  background: transparent !important;" +
  "  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif !important;" +
  "  font-size: 15px !important;" +
  "  letter-spacing: -0.01em !important;" +
  "  color: #1c1c1e !important;" +
  "}" +
  ".ant-input-search input.ant-input::placeholder," +
  ".ant-input-search input.ant-input-lg::placeholder { color: #aeaeb2 !important; }" +
  ".ant-input-search .ant-input-search-button," +
  ".ant-input-search .ant-btn.ant-input-search-button {" +
  "  border-radius: 0 12px 12px 0 !important;" +
  "  background: #34c759 !important;" +
  "  border-color: #34c759 !important;" +
  "  border-left: none !important;" +
  "  box-shadow: none !important;" +
  "  padding: 0 18px !important;" +
  "  animation: junjinGlowPulse 2.2s ease-in-out infinite !important;" +
  "}" +
  ".ant-input-search .ant-input-search-button:hover," +
  ".ant-input-search .ant-btn.ant-input-search-button:hover {" +
  "  background: #28a745 !important; border-color: #28a745 !important;" +
  "}" +
  ".ant-input-search .ant-input-group-addon:last-child {" +
  "  border-radius: 0 12px 12px 0 !important; overflow: hidden;" +
  "}" +
  "@keyframes junjinGlowPulse {" +
  "  0%,100% { box-shadow: 0 0 0 0 rgba(52,199,89,0); }" +
  "  50%  { box-shadow: 0 0 0 4px rgba(52,199,89,0.28), 0 0 12px 2px rgba(52,199,89,0.22); }" +
  "}" +
  ".junjin-search-wrap { position:relative !important; display:inline-flex !important; align-items:center !important; justify-content:center !important; cursor:pointer; border-radius:50%; }" +
  ".junjin-search-wrap::before { content:'' !important; position:absolute !important; inset:-4px !important; border-radius:50% !important; background:radial-gradient(circle,rgba(52,199,89,0.45) 0%,rgba(52,199,89,0) 70%) !important; animation:junjinRipple1 2s ease-out infinite !important; pointer-events:none !important; }" +
  ".junjin-search-wrap::after  { content:'' !important; position:absolute !important; inset:-4px !important; border-radius:50% !important; border:1.5px solid rgba(52,199,89,0.6) !important; animation:junjinRipple2 2s ease-out 0.7s infinite !important; pointer-events:none !important; }" +
  "@keyframes junjinRipple1 { 0%{transform:scale(0.9);opacity:.8} 100%{transform:scale(1.9);opacity:0} }" +
  "@keyframes junjinRipple2 { 0%{transform:scale(0.9);opacity:.6} 100%{transform:scale(2.2);opacity:0} }" +
  "@keyframes junjinIconGlow {" +
  "  0%,100% { filter:drop-shadow(0 0 2px #34c759) drop-shadow(0 0 6px rgba(52,199,89,.7)); transform:scale(1); }" +
  "  50%  { filter:drop-shadow(0 0 4px #39ff14) drop-shadow(0 0 12px rgba(57,255,20,.8)); transform:scale(1.12); }" +
  "}" +
  ".junjin-search-wrap svg { animation:junjinIconGlow 2s ease-in-out infinite !important; stroke:#34c759 !important; }" +
  "#junjin-inline-msg {" +
  "  display: none; position: absolute; left: 0; right: 0; top: calc(100% + 6px);" +
  "  z-index: 99999; pointer-events: none; opacity: 0; transform: translateY(-4px);" +
  "  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.4,0.64,1);" +
  "}" +
  "#junjin-inline-msg.jj-msg-show { opacity: 1; transform: translateY(0); }" +
  "#junjin-inline-msg .jj-msg-inner {" +
  "  background: linear-gradient(135deg, #0071e3 0%, #00a651 100%);" +
  "  border-radius: 10px; padding: 8px 32px 8px 10px; color: #fff;" +
  "  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif;" +
  "  font-size: 12.5px; font-weight: 500; line-height: 1.5;" +
  "  box-shadow: 0 4px 18px rgba(0,113,227,0.22), 0 1px 6px rgba(0,0,0,0.10);" +
  "  display: flex; align-items: center; gap: 7px; position: relative;" +
  "}" +
  "#junjin-inline-msg .jj-msg-emoji { font-size: 15px; flex-shrink: 0; }" +
  "#junjin-inline-msg .jj-msg-hl { background: rgba(255,255,255,0.22); border-radius: 4px; padding: 0 4px; font-weight: 700; }" +
  "#junjin-inline-msg .jj-msg-close {" +
  "  position: absolute; top: 6px; right: 7px; background: rgba(255,255,255,0.2); border: none;" +
  "  border-radius: 50%; width: 18px; height: 18px; display: flex; align-items: center;" +
  "  justify-content: center; cursor: pointer; color: #fff; font-size: 9px;" +
  "  pointer-events: auto; transition: background 0.15s;" +
  "}" +
  "#junjin-inline-msg .jj-msg-close:hover { background: rgba(255,255,255,0.38); }" +
  "@media (min-width: 768px) { #junjin-inline-msg { display: block; } }" +
  "@media (max-width: 767px) { #junjin-inline-msg { display: none !important; } }" +
  "@keyframes jj-cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }" +
  "#jj-fake-placeholder {" +
  "  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);" +
  "  pointer-events: none; z-index: 10;" +
  "  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif;" +
  "  font-size: 14px; color: #1a7a3c; font-weight: 500;" +
  "  white-space: nowrap; overflow: hidden; max-width: calc(100% - 80px);" +
  "}" +
  "#jj-fake-placeholder .jj-cursor {" +
  "  display: inline-block; width: 1.5px; height: 13px; background: #1a7a3c;" +
  "  margin-left: 1px; vertical-align: middle; animation: jj-cursor-blink 0.8s ease-in-out infinite;" +
  "}";
  document.head.appendChild(s);
})();
<\/script>
<!--/JJBLOCK:search-style-->
`},{id:"product-decorate",name:"[Trang sản phẩm] Trang trí trang sản phẩm",description:"Bộ script tổng hợp trang trí toàn site — tích chọn từng phần muốn dùng ở khung Preview, nhập tên thương hiệu + số điện thoại để tự thay vào mọi vị trí.",category:"Trang sản phẩm",toggles:[{id:"title-style",label:"Tiêu đề sản phẩm nổi bật (gradient + nhãn chính hãng)",description:"Bọc tên sản phẩm trong khung gradient kèm badge “Độc · Đẹp · Rẻ”, Chính hãng"},{id:"search-promo",label:"Hiệu ứng ô tìm kiếm + lời nhắc mua sắm",description:"Chữ gợi ý chạy trong ô tìm kiếm và banner nhắc khách tìm sản phẩm"},{id:"login-hero",label:"Trang đăng nhập: khung chào mừng + 3 bước",description:"Thêm hero thương hiệu, ẩn nút Google mặc định và chèn hướng dẫn 3 bước"},{id:"shipping-trust",label:"Khối vận chuyển + đổi trả 7 ngày (trang sản phẩm)",description:"Hiện dự kiến giao hàng và popup chính sách trả hàng miễn phí 7 ngày"},{id:"sales-popup",label:"Popup “vừa có người mua” ở góc màn hình",description:"Thông báo lượt mua ngẫu nhiên tạo cảm giác tin cậy"},{id:"product-reviews",label:"Khối đánh giá sản phẩm (điểm sao + bình luận)",description:"Hiển thị điểm trung bình và danh sách đánh giá theo từng sản phẩm"},{id:"register-hero",label:"Trang đăng ký: khung chào mừng + gợi ý điền form",description:"Hero thương hiệu, chú thích từng ô nhập và nhắc xác minh tài khoản"}],fields:[{key:"BRAND_NAME",label:"Tên thương hiệu",placeholder:"Độc Đẹp Rẻ",type:"text",description:"Thay cho tên shop ở tiêu đề, đánh giá, popup mua hàng và trang đăng nhập/đăng ký (14 vị trí)"},{key:"PHONE",label:"Số điện thoại Zalo",placeholder:"0372126461",type:"text",description:"Chỉ nhập số, không dấu chấm — dùng cho link Zalo và phần liên hệ ở trang đăng ký"}],template:`
<!--JJBLOCK:title-style-->
<script>
(function(){
  {{DOMAIN_LOCK_LINE}}
  var applied = false;

  function styleTitle() {
  if (applied && !document.getElementById('tms-title-wrapper')) {
  applied = false;
  }
  if (applied) return;

  var el = document.querySelector('h1.ant-typography');
  if (!el) return;

  if (document.getElementById('tms-title-wrapper')) return;

  applied = true;

  var wrapper = document.createElement('div');
  wrapper.id = 'tms-title-wrapper';
  wrapper.style.cssText =
  'position:relative;' +
  'padding:3px;' +
  'border-radius:14px;' +
  'background:linear-gradient(to right,#F99E34,#F99E34,#F99E34,#F99E34);' +
  'margin:10px 0;' +
  'box-shadow:0 6px 24px rgba(0,51,102,.18);';

  var inner = document.createElement('div');
  inner.style.cssText =
  'background:#fff;' +
  'border-radius:12px;' +
  'padding:14px 18px;';

  el.style.cssText =
  'background:linear-gradient(to right,#F99E34,#F99E34,#F99E34,#F99E34);' +
  '-webkit-background-clip:text;' +
  '-webkit-text-fill-color:transparent;' +
  'background-clip:text;' +
  'font-size:1.15rem;' +
  'font-weight:800;' +
  'line-height:1.45;' +
  'margin:0;' +
  'padding:0;' +
  'display:block;';

  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(inner);

  var badge = document.createElement('div');
  badge.style.cssText =
  'display:inline-flex;' +
  'align-items:center;' +
  'gap:6px;' +
  'background:linear-gradient(to right,#F99E34,#F99E34);' +
  'color:#fff;' +
  'font-size:10.5px;' +
  'font-weight:700;' +
  'letter-spacing:.05em;' +
  'text-transform:uppercase;' +
  'padding:4px 10px;' +
  'border-radius:999px;' +
  'margin-bottom:8px;';
  badge.innerHTML = '&#x2605; {{BRAND_NAME}} &nbsp;&#xB7;&nbsp; Ch&#xED;nh h&#xE3;ng';

  inner.appendChild(badge);
  inner.appendChild(el);

  var line = document.createElement('div');
  line.style.cssText =
  'height:2px;' +
  'border-radius:999px;' +
  'background:linear-gradient(to right,#F99E34,#F99E34,#F99E34,#F99E34);' +
  'margin-top:10px;' +
  'opacity:.6;';
  inner.appendChild(line);
  }

  function onUrlChange() {
  applied = false;
  setTimeout(styleTitle, 300);
  setTimeout(styleTitle, 800);
  setTimeout(styleTitle, 1800);
  }

  var _push = history.pushState;
  var _replace = history.replaceState;

  history.pushState = function () {
  _push.apply(this, arguments);
  onUrlChange();
  };
  history.replaceState = function () {
  _replace.apply(this, arguments);
  onUrlChange();
  };

  window.addEventListener('popstate', onUrlChange);

  var observer = new MutationObserver(function(){
  {{DOMAIN_LOCK_LINE}}
  if (!applied || !document.getElementById('tms-title-wrapper')) {
  applied = false;
  styleTitle();
  }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
  setTimeout(styleTitle, 300);
  setTimeout(styleTitle, 800);
  setTimeout(styleTitle, 2000);
  });
  } else {
  setTimeout(styleTitle, 300);
  setTimeout(styleTitle, 800);
  setTimeout(styleTitle, 2000);
  }
})();
<\/script>
<!--/JJBLOCK:title-style-->





<!--JJBLOCK:search-promo-->
<script>
(function(){
  {{DOMAIN_LOCK_LINE}}
  var SHOW_DUR=5000,DELAY_SECOND=60000,manualClose=false,isMobile=window.innerWidth<768;
  var messages=[
  "N\\u1ebfu \\u0111\\u0103ng nh\\u1eadp r\\u1ed3i th\\u1ea5y gi\\u00e1 r\\u1ebb qu\\u00e1 \\u2013 h\\u00e3y t\\xecm s\\u1ea3n ph\\u1ea9m kh\\u00e1c \\u0111i anh em!",
  "H\\xe3y g\\xf5 v\\xe0o \\u0111\\xe2y \\u2013 {{BRAND_NAME}} ship t\\u1eadn gi\\u01b0\\u1eddng cho anh em \\ud83d\\ude9a",
  "Anh em \\u0111\\u0103ng nh\\u1eadp r\\u1ed3i \\u2013 gi\\u00e1 \\u0111ang hi\\u1ec3n th\\u1ecb r\\u1ebb l\\u1eafm, t\\xecm th\\xeam \\u0111i!",
  "G\\xf5 t\\xecm s\\u1ea3n ph\\u1ea9m \\u2013 {{BRAND_NAME}} giao h\\xe0ng t\\u1eadn n\\u01a1i cho anh em \\ud83d\\udce6"
  ];
  var msgIndex=0,typeTimer=null,fakePH=null;

  function getInput(){return document.querySelector('.ant-input-search input.ant-input')||document.querySelector('.ant-input-search input.ant-input-lg')||document.querySelector('input[type="search"]');}
  function getWrap(){return document.querySelector('.ant-input-search')||document.querySelector('.ant-input-search-with-button');}

  function typeText(el,text,cb){
  var i=0;el.innerHTML='';clearInterval(typeTimer);
  typeTimer=setInterval(function(){
  {{DOMAIN_LOCK_LINE}}
  if(i<text.length){el.innerHTML=text.slice(0,++i)+'<span class="jj-cursor"></span>';}
  else{clearInterval(typeTimer);setTimeout(function(){
  {{DOMAIN_LOCK_LINE}}if(cb)cb();},2000);}
  },55);
  }
  function erasText(el,cb){
  var text=(el.textContent||'');var i=text.length;clearInterval(typeTimer);
  typeTimer=setInterval(function(){
  {{DOMAIN_LOCK_LINE}}
  if(i>0){el.innerHTML=text.slice(0,--i)+'<span class="jj-cursor"></span>';}
  else{clearInterval(typeTimer);if(cb)cb();}
  },28);
  }

  function cyclePlaceholder(){
  var input=getInput();
  if(!input||document.activeElement===input){setTimeout(cyclePlaceholder,1500);return;}
  var wrap=input.closest('.ant-input-affix-wrapper')||input.parentElement;
  if(!wrap){setTimeout(cyclePlaceholder,500);return;}
  if(!fakePH){
  wrap.style.position='relative';
  fakePH=document.createElement('div');fakePH.id='jj-fake-placeholder';wrap.appendChild(fakePH);
  var origPH=input.placeholder;input.placeholder='';
  input.addEventListener('focus',function(){if(fakePH)fakePH.style.display='none';input.placeholder=origPH;});
  input.addEventListener('blur',function(){if(!input.value){fakePH.style.display='';input.placeholder='';}});
  }
  var txt=messages[msgIndex%messages.length];msgIndex++;
  typeText(fakePH,txt,function(){erasText(fakePH,function(){setTimeout(cyclePlaceholder,300);});});
  }

  function startPlaceholder(){var input=getInput();if(!input){setTimeout(startPlaceholder,400);return;}cyclePlaceholder();}

  var inlineMsg=document.createElement('div');inlineMsg.id='junjin-inline-msg';
  inlineMsg.innerHTML='<div class="jj-msg-inner"><span class="jj-msg-emoji">&#x1F4AC;</span><span><strong>Anh em</strong>, {{BRAND_NAME}} c\\u00f3 r\\u1ea5t nhi\\u1ec1u s\\u1ea3n ph\\u1ea9m c\\xf4ng ngh\\u1ec7, gia d\\u1ee5ng <span class="jj-msg-hl">r\\u1ebb h\\u01a1n Shopee</span> \\u2013 h\\xe3y th\\u1eed t\\xecm ki\\u1ebfm! &#x1F50D;</span><button class="jj-msg-close" id="jj-close-btn">&#x2715;</button></div>';

  function attachBanner(){var wrap=getWrap();if(!wrap){setTimeout(attachBanner,500);return;}wrap.style.position='relative';wrap.appendChild(inlineMsg);var btn=document.getElementById('jj-close-btn');if(btn)btn.addEventListener('click',function(){hideBanner();manualClose=true;});}
  function showBanner(){if(manualClose||isMobile)return;inlineMsg.className+=' jj-msg-show';}
  function hideBanner(){inlineMsg.className=inlineMsg.className.replace(' jj-msg-show','');}

  function addMobileGlow(){
  var icon=document.querySelector('.lucide-search')||document.querySelector('svg[class*="lucide-search"]');
  if(!icon||icon.closest('.junjin-search-wrap'))return;
  var w=document.createElement('span');w.className='junjin-search-wrap';
  icon.parentNode.insertBefore(w,icon);w.appendChild(icon);
  }

  if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',function(){startPlaceholder();if(!isMobile)attachBanner();addMobileGlow();});
  } else {
  startPlaceholder();if(!isMobile)setTimeout(attachBanner,300);addMobileGlow();
  }

  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}}
  if(manualClose||isMobile)return;showBanner();
  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}}hideBanner();setTimeout(function(){
  {{DOMAIN_LOCK_LINE}}if(manualClose)return;showBanner();setTimeout(hideBanner,SHOW_DUR);},DELAY_SECOND);},SHOW_DUR);
  },40000);

  window.addEventListener('resize',function(){isMobile=window.innerWidth<768;});
})();
<\/script>
<!--/JJBLOCK:search-promo-->

<!--JJBLOCK:login-hero-->
<script>
(function(){
  {{DOMAIN_LOCK_LINE}}

  var DONE = false;

  function hookHistory(fn) {
  var oP = history.pushState;
  var oR = history.replaceState;
  history.pushState = function() { oP.apply(history, arguments); fn(); };
  history.replaceState = function() { oR.apply(history, arguments); fn(); };
  window.addEventListener('popstate', fn);
  }

  function onNavChange() {
  DONE = false;
  var old = document.getElementById('dx-ln-outer');
  if (old) old.remove();
  setTimeout(tryRun, 350);
  }

  function isLoginPage() {
  return window.location.href.indexOf('dang-nhap') !== -1;
  }

  function anNutGooglDuoi() {
  if (!isLoginPage()) return;
  var divs = document.querySelectorAll('div.flex.flex-col.items-center');
  for (var i = 0; i < divs.length; i++) {
  var btn = divs[i].querySelector('button');
  if (btn && (btn.textContent || '').indexOf('Google') !== -1) {
  divs[i].style.setProperty('display', 'none', 'important');
  }
  }
  var allEls = document.querySelectorAll('*');
  for (var j = 0; j < allEls.length; j++) {
  var el = allEls[j];
  if (el.children.length > 0) continue;
  var txt = (el.innerText || el.textContent || '').trim();
  if (txt === 'ho\\u1eb7c') {
  el.style.setProperty('display', 'none', 'important');
  if (el.parentNode) el.parentNode.style.setProperty('display', 'none', 'important');
  }
  }
  }

  function chenStepsVaoCard() {
  if (document.getElementById('dx-ln-steps')) return;
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');
  if (!card) return;
  var target = null;
  var allEls = card.querySelectorAll('*');
  for (var i = 0; i < allEls.length; i++) {
  var t = (allEls[i].innerText || allEls[i].textContent || '').trim();
  if (t.indexOf('ho\\u1eb7c \\u0111\\u0103ng nh\\u1eadp b\\u1eb1ng t\\xe0i kho\\u1ea3n') !== -1) {
  target = allEls[i]; break;
  }
  }
  var steps = document.createElement('div');
  steps.id = 'dx-ln-steps';
  steps.innerHTML =
  '<div class="dx-step"><div class="snum">1</div><p>Nh\\u1eadp t\\xe0i kho\\u1ea3n<br>ho\\u1eb7c Email</p></div>' +
  '<div class="dx-step"><div class="snum">2</div><p>Nh\\u1eadp m\\u1eadt kh\\u1ea9u<br>\\u0111\\u0103ng nh\\u1eadp</p></div>' +
  '<div class="dx-step"><div class="snum">3</div><p>Xem gi\\xe1 s\\u1ed1c<br>& mua h\\xe0ng!</p></div>';
  steps.style.cssText = 'display:flex;gap:8px;padding:12px 0 4px;';
  if (target && target.parentNode) {
  target.parentNode.insertBefore(steps, target.nextSibling);
  } else {
  var cardBody = card.querySelector('.ant-card-body');
  if (cardBody) cardBody.insertBefore(steps, cardBody.firstChild);
  }
  }

  function tryRun() {
  if (!isLoginPage()) return;
  if (DONE) return;
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');
  if (!card) { setTimeout(tryRun, 250); return; }
  DONE = true;
  inject(card);
  setTimeout(anNutGooglDuoi,  500);  setTimeout(anNutGooglDuoi,  1200);  setTimeout(anNutGooglDuoi,  2500);
  setTimeout(chenStepsVaoCard, 600); setTimeout(chenStepsVaoCard, 1400); setTimeout(chenStepsVaoCard, 2600);
  }

  function inject(card) {
  if (document.getElementById('dx-ln-outer')) return;

  if (!document.getElementById('dx-ln-css')) {
  var s = document.createElement('style');
  s.id = 'dx-ln-css';
  s.textContent = ''
  + '#dx-ln-outer{border-radius:18px;box-shadow:0 8px 40px rgba(45,122,31,.2),0 2px 8px rgba(0,0,0,.06);overflow:hidden;animation:dx-slide-in .4s cubic-bezier(.34,1.56,.64,1) both;}'
  + '@keyframes dx-slide-in{0%{opacity:0;transform:translateY(20px) scale(.97)}100%{opacity:1;transform:translateY(0) scale(1)}}'
  + '#dx-ln-hero{background:linear-gradient(160deg,#2d7a1f 0%,#3fa82f 40%,#85c756 100%);border-radius:16px 16px 0 0;padding:28px 24px 24px;position:relative;overflow:hidden;}'
  + '#dx-ln-hero::before{content:"";position:absolute;top:-30px;right:-30px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.07);}'
  + '#dx-ln-hero::after{content:"";position:absolute;bottom:-50px;left:-20px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.05);}'
  + '#dx-ln-logo-row{display:flex;align-items:center;gap:12px;margin-bottom:18px;position:relative;z-index:1;}'
  + '#dx-ln-logo-icon{width:48px;height:48px;border-radius:14px;background:rgba(255,255,255,.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;box-shadow:0 2px 12px rgba(0,0,0,.15);}'
  + '#dx-ln-logo-text h1{margin:0;font-size:20px;font-weight:700;color:#fff;letter-spacing:-.3px;line-height:1.2;}'
  + '#dx-ln-welcome{position:relative;z-index:1;}'
  + '#dx-ln-notice{display:flex;align-items:flex-start;gap:10px;background:rgba(255,255,255,.15);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.25);border-radius:12px;padding:12px 14px;position:relative;z-index:1;}'
  + '#dx-ln-notice .nx-icon{font-size:20px;flex-shrink:0;margin-top:1px;}'
  + '#dx-ln-notice h2{margin:0;font-size:13.5px;font-weight:500;color:#fff;line-height:1.55;}'
  + '.dx-dot{position:absolute;border-radius:50%;background:rgba(255,255,255,.12);pointer-events:none;animation:dx-pulse-dot 3s ease-in-out infinite;}'
  + '@keyframes dx-pulse-dot{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.3);opacity:.2}}'
  + '#dx-ln-body{background:#fff;border-radius:0 0 16px 16px;padding:0;}'
  + '#dx-ln-steps{display:flex;gap:8px;}'
  + '.dx-step{flex:1;background:#f0fdf4;border:1px solid #d1fae5;border-radius:10px;padding:10px 8px;text-align:center;}'
  + '.dx-step .snum{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#85c756;color:#fff;font-size:12px;font-weight:700;margin-bottom:5px;}'
  + '.dx-step p{margin:0;font-size:11.5px;color:#374151;font-weight:500;line-height:1.4;}'
  + '.ant-btn-primary,.ant-btn-color-primary{box-shadow:0 4px 16px rgba(133,199,86,.45)!important;transition:transform .15s,box-shadow .15s!important;}'
  + '.ant-btn-primary:hover,.ant-btn-color-primary:hover{transform:translateY(-2px)!important;box-shadow:0 8px 24px rgba(133,199,86,.55)!important;}'
  + '.ant-input:focus,.ant-input-focused{border-color:#85c756!important;box-shadow:0 0 0 3px rgba(133,199,86,.2)!important;}';
  document.head.appendChild(s);
  }

  var outer = document.createElement('div');
  outer.id = 'dx-ln-outer';

  var hero = document.createElement('div');
  hero.id = 'dx-ln-hero';

  [{w:80,h:80,t:'10px',r:'80px',delay:'0s'},{w:50,h:50,t:'60px',r:'20px',delay:'1s'},{w:30,h:30,b:'20px',l:'60px',delay:'.5s'}]
  .forEach(function(d) {
  var dot = document.createElement('div');
  dot.className = 'dx-dot';
  dot.style.width = d.w+'px'; dot.style.height = d.h+'px';
  if (d.t) dot.style.top = d.t; if (d.r) dot.style.right = d.r;
  if (d.b) dot.style.bottom = d.b; if (d.l) dot.style.left = d.l;
  dot.style.animationDelay = d.delay;
  hero.appendChild(dot);
  });

  hero.innerHTML += ''
  + '<div id="dx-ln-logo-row">'
  +   '<div id="dx-ln-logo-icon">\\uD83D\\uDECD\\uFE0F</div>'
  +   '<div id="dx-ln-logo-text"><h1>{{BRAND_NAME}}</h1></div>'
  + '</div>'
  + '<div id="dx-ln-welcome">'
  +   '<div id="dx-ln-notice">'
  +  '<span class="nx-icon">\\uD83D\\uDCCB</span>'
  +  '<h2>Ch\\xe0o anh em! Ch\\u1ec9 c\\u1ea7n b\\u1ea5m v\\xe0o n\\xfat \\u0111\\u0103ng nh\\u1eadp b\\u1eb1ng Google l\\xe0 xong, anh em \\u0111\\xe3 s\\u1eed d\\u1ee5ng v\\xe0 th\\u1ea5y \\u0111\\u01b0\\u1ee3c gi\\xe1 s\\u1ea3n ph\\u1ea9m ngay</h2>'
  +   '</div>'
  + '</div>';

  var body = document.createElement('div');
  body.id = 'dx-ln-body';

  outer.appendChild(hero);
  outer.appendChild(body);

  card.parentNode.insertBefore(outer, card);
  body.appendChild(card);

  card.style.border = 'none';
  card.style.boxShadow = 'none';
  card.style.borderRadius = '0';
  }

  hookHistory(onNavChange);

  function kickoff() {
  var tries = 0;
  var t = setInterval(function(){
  {{DOMAIN_LOCK_LINE}}
  if (!isLoginPage()) { clearInterval(t); return; }
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');
  if (card) {
  clearInterval(t); DONE = true; inject(card);
  setTimeout(anNutGooglDuoi,   500);  setTimeout(anNutGooglDuoi,   1200);  setTimeout(anNutGooglDuoi,   2500);
  setTimeout(chenStepsVaoCard, 600);  setTimeout(chenStepsVaoCard, 1400);  setTimeout(chenStepsVaoCard, 2600);
  return;
  }
  if (++tries > 30) clearInterval(t);
  }, 200);
  }

  kickoff();

})();
<\/script>
<!--/JJBLOCK:login-hero-->

<!--JJBLOCK:shipping-trust-->
<script>
(function(){
  {{DOMAIN_LOCK_LINE}}
  var BLOCK_ID = 'jj-shipping-trust-block';

  function formatDate(d) {
  var months = ['Th01','Th02','Th03','Th04','Th05','Th06',
  'Th07','Th08','Th09','Th10','Th11','Th12'];
  return d.getDate() + ' ' + months[d.getMonth()];
  }

  function getDateRange() {
  var now = new Date();
  var d1 = new Date(now); d1.setDate(now.getDate() + 1);
  var d2 = new Date(now); d2.setDate(now.getDate() + 4);
  return 'Nh&#7853;n t&#7915; ' + formatDate(d1) + ' - ' + formatDate(d2);
  }

  function injectCSS() {
  if (document.getElementById('jj-stb-css')) return;
  var s = document.createElement('style');
  s.id = 'jj-stb-css';
  s.textContent =
  '#jj-shipping-trust-block{font-family:"Segoe UI",Arial,sans-serif;margin:0;padding:0;position:relative}'
  + '#jj-shipping-trust-block .jj-row{display:flex;align-items:flex-start;padding:10px 0;border-top:1px solid #f0f0f0;gap:12px}'
  + '#jj-shipping-trust-block .jj-label{min-width:110px;max-width:110px;font-size:13px;color:#6b7280;line-height:1.5;padding-top:1px;flex-shrink:0}'
  + '#jj-shipping-trust-block .jj-value{display:flex;align-items:center;gap:7px;font-size:13.5px;color:#1a1a1a;font-weight:500;flex:1;flex-wrap:wrap}'
  + '#jj-shipping-trust-block .jj-value svg{flex-shrink:0}'
  + '#jj-shipping-trust-block .jj-arrow{margin-left:4px;color:#9ca3af;font-size:12px}'
  + '#jj-shipping-trust-block .jj-return-trigger{display:flex;align-items:center;gap:7px;cursor:pointer;user-select:none;position:relative}'
  + '#jj-shipping-trust-block .jj-chevron{margin-left:4px;color:#9ca3af;font-size:13px;transition:transform .2s}'
  + '#jj-shipping-trust-block .jj-chevron.open{transform:rotate(180deg)}'

  + '#jj-return-popup{display:none;position:absolute;top:28px;left:-130px;z-index:9999;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:0;min-width:320px;max-width:380px;overflow:hidden}'
  + '#jj-return-popup.visible{display:block}'

  + '@media(max-width:640px){'
  +   '#jj-return-popup{position:static !important;top:auto !important;left:auto !important;width:100%;max-width:100%;min-width:0;margin-top:10px;box-shadow:0 4px 16px rgba(0,0,0,.1);}'
  +   '#jj-shipping-trust-block .jj-row:last-child{flex-wrap:wrap}'
  +   '#jj-shipping-trust-block .jj-row:last-child .jj-value{flex:1 1 100%}'
  + '}'

  + '#jj-return-popup .jj-popup-header{padding:14px 16px 12px;border-bottom:1px solid #f0f0f0}'
  + '#jj-return-popup .jj-popup-header h4{margin:0;font-size:14px;font-weight:700;color:#1a1a1a}'
  + '#jj-return-popup .jj-popup-item{display:flex;gap:12px;padding:14px 16px;align-items:flex-start}'
  + '#jj-return-popup .jj-popup-icon{flex-shrink:0;width:36px;height:36px;background:#fff3ef;border-radius:50%;display:flex;align-items:center;justify-content:center}'
  + '#jj-return-popup .jj-popup-text h5{margin:0 0 5px 0;font-size:13.5px;font-weight:700;color:#1a1a1a}'
  + '#jj-return-popup .jj-popup-text p{margin:0;font-size:12.5px;color:#6b7280;line-height:1.6}';
  document.head.appendChild(s);
  }

  function buildBlock() {
  var div = document.createElement('div');
  div.id = BLOCK_ID;

  div.innerHTML =
  '<div class="jj-row">'
  +   '<div class="jj-label">V&#7853;n Chuy&#7875;n</div>'
  +   '<div class="jj-value">'
  +  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'
  +  '<span>' + getDateRange() + '</span>'
  +  '<span class="jj-arrow">&#8250;</span>'
  +   '</div>'
  + '</div>'

  + '<div class="jj-row">'
  +   '<div class="jj-label">An T&#226;m Mua S&#7855;m C&#249;ng {{BRAND_NAME}}</div>'
  +   '<div class="jj-value">'
  +  '<div class="jj-return-trigger" id="jj-return-trigger">'
  +  '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
  +  'Tr&#7843; h&#224;ng mi&#7877;n ph&#237; 7 ng&#224;y'
  +  '<span class="jj-chevron" id="jj-chevron">&#8964;</span>'
  +  '</div>'
  +  '<div id="jj-return-popup">'
  +  '<div class="jj-popup-header">'
  +  '<h4>An t&#226;m mua s&#7855;m c&#249;ng {{BRAND_NAME}}</h4>'
  +  '</div>'
  +  '<div class="jj-popup-item">'
  +  '<div class="jj-popup-icon">'
  +  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'
  +  '</div>'
  +  '<div class="jj-popup-text">'
  +  '<h5>Tr&#7843; h&#224;ng mi&#7877;n ph&#237; 7 ng&#224;y</h5>'
  +  '<p>Mi&#7877;n ph&#237; Tr&#7843; h&#224;ng trong 7 ng&#224;y &#273;&#7875; &#273;&#7843;m b&#7843;o b&#7841;n ho&#224;n to&#224;n c&#243; th&#7875; y&#234;n t&#226;m khi mua h&#224;ng &#7903; {{BRAND_NAME}}.<br>Ngo&#224;i ra, t&#7841;i th&#7901;i &#273;i&#7875;m m&#7903; h&#224;ng, b&#7841;n vui l&#242;ng quay video n&#7871;u ph&#225;t sinh l&#7895;i s&#7869; &#273;&#432;&#7907;c tr&#7843; h&#224;ng mi&#7877;n ph&#237;, shop ch&#7883;u ship 2 chi&#7873;u.</p>'
  +  '</div>'
  +  '</div>'
  +  '</div>'
  +   '</div>'
  + '</div>';

  return div;
  }

  function attachToggle() {
  var trigger = document.getElementById('jj-return-trigger');
  var popup   = document.getElementById('jj-return-popup');
  var chevron = document.getElementById('jj-chevron');
  if (!trigger || !popup) return;

  trigger.addEventListener('click', function (e) {
  e.stopPropagation();
  var open = popup.classList.toggle('visible');
  if (chevron) chevron.classList.toggle('open', open);
  });

  document.addEventListener('click', function () {
  popup.classList.remove('visible');
  if (chevron) chevron.classList.remove('open');
  });
  }

  function findTarget() {
  var labels = document.querySelectorAll('label.ant-form-item-no-colon');
  for (var i = 0; i < labels.length; i++) {
  if (labels[i].textContent.trim() === 'SKU') {
  var row = labels[i].closest('.ant-row.ant-form-item-row');
  if (row) return row;
  }
  }
  return null;
  }

  function inject() {
  if (document.getElementById(BLOCK_ID)) return true;
  var target = findTarget();
  if (!target) return false;
  injectCSS();
  var block = buildBlock();
  target.parentNode.insertBefore(block, target.nextSibling);
  attachToggle();
  return true;
  }

  function removeBlock() {
  var old = document.getElementById(BLOCK_ID);
  if (old && old.parentNode) old.parentNode.removeChild(old);
  }

  function tryInject() {
  if (!inject()) {
  var tries = 0;
  var t = setInterval(function(){
  {{DOMAIN_LOCK_LINE}}
  if (inject() || ++tries > 30) clearInterval(t);
  }, 300);
  }
  }

  if (!window.__jjShipHooked) {
  window.__jjShipHooked = true;
  var _oP = history.pushState;
  var _oR = history.replaceState;
  history.pushState = function () {
  _oP.apply(history, arguments);
  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}} removeBlock(); tryInject(); }, 400);
  };
  history.replaceState = function () {
  _oR.apply(history, arguments);
  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}} removeBlock(); tryInject(); }, 400);
  };
  window.addEventListener('popstate', function () {
  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}} removeBlock(); tryInject(); }, 400);
  });
  }

  tryInject();
})();
<\/script>
<!--/JJBLOCK:shipping-trust-->
<!--JJBLOCK:sales-popup-->
<script>
(function(){
  {{DOMAIN_LOCK_LINE}}
  var HO=['Nguyễn','Trần','Lê','Phạm','Hoàng','Huỳnh','Phan','Vũ','Võ','Đặng','Bùi','Đỗ','Hồ','Ngô','Dương','Lý','Đinh','Lâm','Mai','Cao'];
  var TEN=['Anh','Lan','Hoa','Mai','Linh','Hương','Thảo','Ngọc','Trang','Yến','Hà','Thu','Nhung','Vân','Quỳnh','Phương','Nam','Tuấn','Hùng','Minh','Đức','Khoa','Long','Bình','Dũng','Tú','Phát','Quang','Thành','Hải','Dung','Hiền','Lâm','Tâm','Trung','Phúc','Khánh','Bảo','Vy','Nhi','Tiên','Giang','Lộc','Thiện','Khang'];
  var TINH=['Hà Nội','TP.HCM','Đà Nẵng','Hải Phòng','Cần Thơ','An Giang','Bà Rịa–Vũng Tàu','Bắc Giang','Bắc Ninh','Bến Tre','Bình Định','Bình Dương','Đồng Nai','Gia Lai','Khánh Hòa','Kiên Giang','Lâm Đồng','Long An','Nam Định','Nghệ An','Ninh Bình','Phú Thọ','Quảng Nam','Quảng Ninh','Thanh Hóa','Thừa Thiên Huế','Tiền Giang','Vĩnh Long','Vĩnh Phúc','Yên Bái','Hà Tĩnh','Bình Phước','Đắk Lắk','Tây Ninh','Bạc Liêu','Cà Mau','Hà Giang','Lào Cai','Sơn La','Quảng Bình'];
  var SP=[
  {icon:'🤖',ten:'Máy hút bụi & lau sàn Xiaomi Deerma MOVA X40 Plus'},
  {icon:'🤖',ten:'Máy lau nhà Deerma MOVA X40 Plus nước nóng 90°C'},
  {icon:'🤖',ten:'Deerma MOVA X40 Plus - tự sấy giẻ lau 25.000Pa'},
  {icon:'💡',ten:'Đèn bàn Syrinx JW5512 cảm biến vẫy tay CRI≥90'},
  {icon:'💧',ten:'Máy hút ẩm Xiaomi WIDETECH 30L kết nối Mihome'},
  {icon:'💧',ten:'Máy hút ẩm MYTEM Rooming Dehumidifier 300ml'},
  {icon:'💧',ten:'Máy Hút Ẩm Xiaomi VINO 16L cảm ứng thông minh'},
  {icon:'💧',ten:'Hút ẩm Xiaomi Vino 20L kết nối app Mihome'},
  {icon:'📷',ten:'Camera hành trình 70Mai M310'},
  {icon:'🗺️',ten:'Phần mềm Vietmap Live Pro dẫn đường ô tô 1 năm'},
  {icon:'⚡',ten:'Củ sạc nhanh 20W Aukey Omnia USB-C PD PA-B1'},
  {icon:'🪑',ten:'Ghế ô tô trẻ em POPMAX HOORAY xoay 360° iSOFIX'},
  {icon:'🔊',ten:'Loa Bluetooth JBL BassPro Go loa siêu trầm'},
  {icon:'📱',ten:'Kính cường lực iPhone Full màn MKING Pro Max'},
  {icon:'⌚',ten:'Đồng hồ thông minh Xiaomi 70mai Maimo Watch R'},
  {icon:'⚡',ten:'Củ sạc nhanh 30W Anker Zolo A2698 USB-C'},
  {icon:'🔌',ten:'Ổ điện thông minh Wi-Fi DELIXI cổng C 20W'},
  {icon:'🎧',ten:'Tai nghe Bluetooth Monster Maxstar MQO33 Gaming'},
  {icon:'⚡',ten:'Sạc dự phòng 20.000mAh GaN siêu mỏng'},
  {icon:'📱',ten:'Cáp sạc nhanh 65W bện dù chính hãng'}
  ];
  var PHUT=[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17,18,20,22,25,30];

  function r(a){return a[Math.floor(Math.random()*a.length)];}
  function data(){var sp=r(SP);return{icon:sp.icon,ten:r(HO)+' '+r(TEN)[0]+'.',tinh:r(TINH),sp:sp.ten,phut:r(PHUT)};}

  var s=document.createElement('style');
  s.textContent='@keyframes ppSlideUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes ppSlideDown{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(14px)}}#pp-sp-wrap{animation:ppSlideUp .38s cubic-bezier(.34,1.1,.64,1) both}#pp-sp-wrap.hide{animation:ppSlideDown .28s ease forwards}';
  document.head.appendChild(s);

  var wrap=document.createElement('div');
  wrap.id='pp-sp-wrap';
  Object.assign(wrap.style,{position:'fixed',bottom:'66px',left:'51px',zIndex:'999998',maxWidth:'320px',width:'calc(100vw - 40px)',fontFamily:'Inter,system-ui,-apple-system,sans-serif'});

  function render(d){
  wrap.innerHTML=
  '<div style="background:#fff;border-radius:14px;padding:12px 14px 10px;box-shadow:0 4px 24px rgba(0,0,0,.13),0 1px 4px rgba(0,0,0,.08);display:flex;align-items:flex-start;gap:10px;position:relative;border:1px solid rgba(0,0,0,.06);">'+
  '<div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#edfce0,#d4f5be);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;box-shadow:0 2px 6px rgba(102,186,50,.18);">'+d.icon+'</div>'+
  '<div style="flex:1;min-width:0;">'+
  '<div style="font-size:13px;color:#1a1a1a;line-height:1.5;"><strong style="color:#111;">'+d.ten+'</strong> <span style="color:#555;">('+d.tinh+')</span> vừa mua <strong style="color:#3a7d0e;">'+d.sp+'</strong> giá ưu đãi</div>'+
  '<div style="margin-top:5px;display:flex;align-items:center;gap:6px;">'+
  '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#66ba32;flex-shrink:0;"></span>'+
  '<span style="font-size:11.5px;color:#888;">'+d.phut+' phút trước</span>'+
  '<span style="margin-left:auto;background:#f0fbe8;border:1px solid rgba(102,186,50,.25);border-radius:999px;padding:1px 8px;font-size:10.5px;font-weight:700;color:#4f9823;">{{BRAND_NAME}}</span>'+
  '</div>'+
  '</div>'+
  '<button onclick="document.getElementById(\\'pp-sp-wrap\\').remove()" style="position:absolute;top:6px;right:8px;background:none;border:none;cursor:pointer;color:#bbb;font-size:14px;line-height:1;padding:2px 4px;">×</button>'+
  '</div>';
  }

  var SHOW_DUR = 3000;
  var OUT  = 400;
  var GAPS  = [10000, 30000, 40000];
  var gapIdx   = 0;

  function showNext(){
  if(!document.body.contains(wrap)) document.body.appendChild(wrap);
  wrap.classList.remove('hide');
  void wrap.offsetWidth;
  render(data());

  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}}
  wrap.classList.add('hide');

  var gap = GAPS[gapIdx % GAPS.length];
  gapIdx++;

  setTimeout(showNext, OUT + gap);
  }, SHOW_DUR);
  }

  setTimeout(showNext, 10000);
})();
<\/script>
<!--/JJBLOCK:sales-popup-->






<!--JJBLOCK:product-reviews-->
<script>
(function(){
  {{DOMAIN_LOCK_LINE}}

  var REVIEWS = [
  { user:'tranminhtu98',  stars:5, date:'2026-03-18 09:24', text:'Đăng nhập xong thấy nhiều sản phẩm giá rẻ thật sự, rẻ hơn cả Shopee mà hàng vẫn xịn. Mua thêm mấy cái nữa rồi.', likes:12 },
  { user:'nguyenvanan_hcm',  stars:5, date:'2026-03-15 14:37', text:'Thanh toán COD tiện lắm, không cần thẻ vẫn mua được. Hàng giao nhanh hơn tôi nghĩ, đóng gói chắc chắn.', likes:8, reply:'Cảm ơn anh đã tin tưởng shop ạ! Anh có nhu cầu gì cứ nhắn nhé 🙏' },
  { user:'hoangphuoc_bmt',   stars:5, date:'2026-03-12 21:05', text:'Đăng ký hơi mất công tí xíu nhưng xong rồi ổn, giá sản phẩm nào cũng ngon hết. Sẽ mua tiếp.', likes:5 },
  { user:'levan_longg',  stars:5, date:'2026-03-10 08:11', text:'Xịn thật! Mua về dùng rất phê. Chất lượng không chê vào đâu được, không cần mang theo dây riêng.', likes:15, reply:'Shop cảm ơn anh đã review chi tiết ạ! Anh em ghé shop thường xuyên nhé 😊' },
  { user:'phamthithu_dn',  stars:5, date:'2026-03-08 16:50', text:'Mới đăng ký lần đầu thấy shop có nhiều deal hay, giá gốc rõ ràng không lăng nhăng. Tin tưởng mua được.', likes:6 },
  { user:'quocbao_2k3',  stars:5, date:'2026-03-06 20:30', text:'Hàng xịn thật, y hình, giao đúng hẹn. Giá tốt, chất lượng không có gì chê. Shop hơi chậm trả lời nhưng hàng ổn là được.', likes:3 },
  { user:'mylinh.shop',  stars:5, date:'2026-03-04 11:15', text:'Mình mua để kinh doanh, nhập lô 10 cái giá ngon vl. Rẻ hơn mấy chỗ khác cả trăm nghìn/cái. Đặt thêm tuần sau.', likes:20 },
  { user:'trantanphat99',  stars:5, date:'2026-03-01 18:44', text:'Hàng chính hãng thật, tem nhãn đàng hoàng. Đã mua 3 lần rồi lần nào cũng ok. Shop tư vấn nhiệt tình nữa.', likes:11 },
  { user:'namphuongbui',  stars:5, date:'2026-02-27 10:22', text:'Hàng tốt, giá rẻ hơn Tiki Shopee kha khá. COD thanh toán tiện không cần thẻ. Shop hơi chậm reply nhưng hàng đủ nét rồi.', likes:7 },
  { user:'khanhlinh2025',  stars:5, date:'2026-02-24 15:03', text:'Sản phẩm chất lượng, dùng thấy phê thật. Bao bì đẹp, giá lại mềm. Recommend mạnh cho ae chưa biết shop này.', likes:18, reply:'Shop cảm ơn chị ủng hộ nhiệt tình ạ! Hẹn gặp lại chị lần sau 💚' },
  ];

  var _fn = ['nguyen','tran','le','pham','hoang','vo','dang','bui','do','ngo','duong','ly','dinh','truong'];
  var _mn = ['van','thi','thanh','minh','quoc','huu','duc','kim','thu','hong','bich','anh','lan','hai'];
  var _ln = ['an','hung','nam','linh','long','phat','thu','hoa','tuan','manh','dat','hai','son','khoa','khanh','vy','nhi','bao','cuong','dung'];
  var _sfx = ['88','99','2k','2k1','2k2','2k3','_hn','_hcm','_dn','_ct','98','97','96','_sg','2025','2024','123','_vn'];

  var TEXTS5 = [
  'Shop uy tín, hàng chất lượng, giao nhanh. Sẽ mua lại lần sau!',
  'Đặt hàng dễ dàng, thanh toán COD tiện. Hàng y như mô tả, rất hài lòng.',
  'Giá tốt, hàng xịn. Shop hơi chậm trả lời nhưng hàng ổn nên thôi.',
  'Hàng tốt lắm, chất lượng không có gì chê. Shop reply hơi chậm nhưng hàng đủ nét.',
  'Mua lần đầu đã thấy ưng, chất lượng vượt kỳ vọng so với giá tiền.',
  'Shop tư vấn nhiệt tình, hàng về đúng hẹn, đóng gói rất cẩn thận.',
  'Rất hài lòng! Hàng đẹp đúng mô tả, giao hàng siêu nhanh luôn.',
  'Hàng xịn thật sự, dùng thấy phê. Shop nhắn hơi chậm nhưng hàng tốt bù lại.',
  'Chất lượng tốt, giá hợp lý. Sẽ ủng hộ shop dài dài không đổi shop.',
  'Shop phản hồi có hơi chậm, nhưng hàng đúng mô tả, chất lượng ổn. 5 sao xứng đáng!',
  'Hàng về nhanh, đóng gói cẩn thận. Shop trả lời tin nhắn hơi lâu nhưng hàng tốt.',
  'Sản phẩm chất lượng, giá rẻ hơn ngoài thị trường. Recommend mạnh cho ae!',
  'Mua để kinh doanh, giá nhập ngon. Hàng xịn, shop hơi chậm nhưng chấp nhận được.',
  'Hàng y hình, chính hãng, đóng gói chắc. Sẽ tiếp tục ủng hộ shop.',
  ];

  function rInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function rItem(arr) { return arr[rInt(0, arr.length - 1)]; }

  function genName() {
  var name = rItem(_fn);
  if (Math.random() > 0.35) name += rItem(_mn);
  name += rItem(_ln);
  if (Math.random() > 0.45) name += rItem(_sfx);
  return name;
  }

  function genDate(idx, total) {
  var start = new Date('2025-01-01').getTime();
  var end   = new Date('2026-03-15').getTime();
  var t = start + (end - start) * (1 - idx / total);
  var d = new Date(t + rInt(-4, 4) * 86400000);
  var p = function(n){ return n < 10 ? '0'+n : ''+n; };
  return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+' '+p(rInt(7,22))+':'+p(rInt(0,59));
  }

  function genStar() { return 5; }

  var TARGET = 400;
  var toGen = TARGET - REVIEWS.length;
  for (var i = 0; i < toGen; i++) {
  REVIEWS.push({
  user:  genName(),
  stars: genStar(),
  date:  genDate(i, toGen),
  text:  rItem(TEXTS5),
  likes: rInt(0, 28)
  });
  }

  REVIEWS.sort(function(a, b) { return a.date < b.date ? 1 : -1; });

  var COLORS = ['#16a34a','#2563eb','#9333ea','#dc2626','#ea580c','#0891b2','#4f46e5','#be185d'];
  var PAGE_SIZE = 3;
  var currentShown = PAGE_SIZE;
  var activeFilter = 0;

  function initials(name) {
  return name.replace(/[^a-zA-Z\\u00C0-\\u024F]/g,'').substring(0,2).toUpperCase() || 'U';
  }

  function stars(n, size) {
  var sz = size || 16;
  var s = '';
  for (var i = 1; i <= 5; i++) {
  s += '<span style="color:'+(i<=n?'#f59e0b':'#d1d5db')+';font-size:'+sz+'px">★</span>';
  }
  return s;
  }

  function starsFloat(n, size) {
  var sz = size || 16;
  var s = '';
  var full = Math.floor(n);
  var frac = n - full;
  for (var i = 1; i <= 5; i++) {
  if (i <= full) {
  s += '<span style="color:#f59e0b;font-size:'+sz+'px">&#9733;</span>';
  } else if (i === full + 1 && frac > 0) {
  var pct = Math.round(frac * 100);
  s += '<span style="font-size:'+sz+'px;background:linear-gradient(to right,#f59e0b '+pct+'%,#d1d5db '+pct+'%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">&#9733;</span>';
  } else {
  s += '<span style="color:#d1d5db;font-size:'+sz+'px">&#9733;</span>';
  }
  }
  return s;
  }

  function countStars(n) {
  return REVIEWS.filter(function(r){ return r.stars === n; }).length;
  }

  function getFiltered(filter) {
  return REVIEWS.filter(function(r){ return filter === 0 || r.stars === filter; });
  }

  function renderItem(r, idx) {
  var color = COLORS[idx % COLORS.length];
  var daysSeed = (idx * 137 + 53) % 49 + 2;
  var replyHtml = r.reply
  ? '<div style="background:#f9fafb;border-left:3px solid #85c756;border-radius:6px;padding:10px 14px;margin-top:10px">'
  + '<div style="font-size:12px;font-weight:700;color:#15803d;margin-bottom:4px">📢 Phản Hồi Của Người Bán</div>'
  + '<div style="font-size:13px;color:#374151">' + r.reply + '</div>'
  + '</div>'
  : '';
  return '<div class="dx-rv-item" style="padding:16px 0;border-bottom:1px solid #f3f4f6">'
  + '<div style="display:flex;align-items:flex-start;gap:12px">'
  +   '<div style="width:38px;height:38px;border-radius:50%;background:'+color+';flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff">'+initials(r.user)+'</div>'
  +   '<div style="flex:1;min-width:0">'
  +  '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:2px">'
  +  '<span style="font-weight:600;font-size:14px;color:#1f2937">'+r.user+'</span>'
  +  '<span style="display:inline-flex;align-items:center;gap:3px;font-size:11px;font-weight:600;color:#15803d;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:999px;padding:1px 8px">'
  +  '<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  +  'Đã mua tại {{BRAND_NAME}}'
  +  '</span>'
  +  '</div>'
  +  '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">'
  +  '<div>'+stars(r.stars,16)+'</div>'
  +  '<span style="display:inline-flex;align-items:center;gap:3px;font-size:11px;font-weight:600;color:#e11d48;">'
  +  '<svg width="10" height="10" viewBox="0 0 24 24" fill="#e11d48"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
  +  'Sẽ giới thiệu cho bạn bè, người thân'
  +  '</span>'
  +  '</div>'
  +  '<div style="font-size:11.5px;color:#9ca3af;margin-bottom:8px">'+r.date+'</div>'
  +  '<div style="font-size:14px;color:#374151;line-height:1.6">'+r.text+'</div>'
  +  replyHtml
  +  '<div style="margin-top:10px;display:flex;align-items:center;gap:6px">'
  +  '<span style="font-size:12px;color:#9ca3af;cursor:pointer">👍 '+(r.likes||0)+'</span>'
  +  '<span style="font-size:12px;color:#d1d5db;margin:0 4px">|</span>'
  +  '<span style="font-size:12px;color:#9ca3af;cursor:pointer">Hữu ích?</span>'
  +  '<span style="font-size:12px;color:#d1d5db;margin:0 4px">|</span>'
  +  '<span style="font-size:12px;color:#6b7280">Đã dùng khoảng '+daysSeed+' ngày</span>'
  +  '</div>'
  +   '</div>'
  + '</div>'
  + '</div>';
  }

  function refreshList() {
  var list = getFiltered(activeFilter);
  var shown = list.slice(0, currentShown);
  var html = '';
  shown.forEach(function(r, idx){ html += renderItem(r, idx); });
  document.getElementById('dx-rv-list').innerHTML = html;
  var btnWrap = document.getElementById('dx-rv-more-wrap');
  if (currentShown >= list.length) {
  btnWrap.style.display = 'none';
  } else {
  btnWrap.style.display = 'flex';
  document.getElementById('dx-rv-more-btn').textContent = 'Xem thêm đánh giá ('+(list.length - currentShown)+')';
  }
  }

  function buildBlock() {
  function _sRand(seed, min, max) {
  var x = Math.sin(seed + 1) * 10000;
  var r = x - Math.floor(x);
  return Math.floor(r * (max - min + 1)) + min;
  }
  function _pSeed() {
  var url = window.location.href;
  var hash = 0;
  for (var i = 0; i < url.length; i++) hash = url.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash);
  }
  var _seed = _pSeed();
  var _starInt  = _sRand(_seed, 40, 50);
  var _starAvg  = (_starInt / 10).toFixed(1);
  var _buyCount   = _sRand(_seed + 2, 50, 400);
  var _reviewPct  = _sRand(_seed + 1, 20, 70);
  var _reviewCount = Math.floor(_buyCount * _reviewPct / 100);
  if (_reviewCount < 5) _reviewCount = 5;

  var _r = window._gtmRating || {};
  var total = _r.reviews || _reviewCount;
  if (REVIEWS.length > total) REVIEWS.splice(total);
  var AVG_DISPLAY = (_r.avg || _starAvg).toString().replace('.', ',');
  var c5 = countStars(5), c4 = countStars(4), c3 = countStars(3), c2 = countStars(2), c1 = countStars(1);

  var block = document.createElement('div');
  block.id = 'dx-fake-reviews';
  block.style.cssText = 'background:#fff;border-radius:10px;padding:20px;margin-bottom:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;border:1px solid #e5e7eb';

  block.innerHTML = ''
  + '<div style="font-size:14px;font-weight:700;color:#111827;letter-spacing:.5px;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid #f3f4f6">ĐÁNH GIÁ SẢN PHẨM</div>'
  + '<div style="display:flex;align-items:center;gap:20px;margin-bottom:16px;flex-wrap:wrap">'
  +   '<div style="text-align:center">'
  +  '<div style="font-size:48px;font-weight:800;color:#f59e0b;line-height:1">'+AVG_DISPLAY+'</div>'
  +  '<div style="font-size:12px;color:#6b7280;margin-top:2px">trên 5</div>'
  +  '<div style="margin-top:6px">'+starsFloat(parseFloat(_starAvg),20)+'</div>'
  +  '<div style="font-size:12px;color:#6b7280;margin-top:4px">('+total+' đánh giá)</div>'
  +   '</div>'
  +   '<div id="dx-rv-filters" style="display:flex;flex-wrap:wrap;gap:6px">'
  +  '<button class="dx-rv-tab dx-rv-active" data-f="0">Tất Cả ('+total+')</button>'
  +  '<button class="dx-rv-tab" data-f="5">5 Sao ('+c5+')</button>'
  +  (c4>0?'<button class="dx-rv-tab" data-f="4">4 Sao ('+c4+')</button>':'')
  +  (c3>0?'<button class="dx-rv-tab" data-f="3">3 Sao ('+c3+')</button>':'')
  +  (c2>0?'<button class="dx-rv-tab" data-f="2">2 Sao ('+c2+')</button>':'')
  +  (c1>0?'<button class="dx-rv-tab" data-f="1">1 Sao ('+c1+')</button>':'')
  +   '</div>'
  + '</div>'
  + '<div id="dx-rv-list"></div>'
  + '<div id="dx-rv-more-wrap" style="display:flex;justify-content:center;margin-top:16px">'
  +   '<button id="dx-rv-more-btn" style="background:#fff;border:1.5px solid #15803d;color:#15803d;border-radius:24px;padding:10px 28px;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s">Xem thêm đánh giá</button>'
  + '</div>';

  if (!document.getElementById('dx-rv-css')) {
  var s = document.createElement('style');
  s.id = 'dx-rv-css';
  s.textContent = ''
  + '.dx-rv-tab{background:#fff;border:1px solid #d1d5db;border-radius:20px;padding:5px 12px;font-size:12.5px;cursor:pointer;color:#374151;font-weight:500;transition:all .15s}'
  + '.dx-rv-tab.dx-rv-active{background:#dc2626;border-color:#dc2626;color:#fff;font-weight:700}'
  + '.dx-rv-tab:hover:not(.dx-rv-active){border-color:#85c756;color:#15803d}'
  + '.dx-rv-item:last-child{border-bottom:none}'
  + '#dx-rv-more-btn:hover{background:#15803d;color:#fff}';
  document.head.appendChild(s);
  }

  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}}
  refreshList();
  var tabs = block.querySelectorAll('.dx-rv-tab');
  tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
  tabs.forEach(function(t){ t.classList.remove('dx-rv-active'); });
  tab.classList.add('dx-rv-active');
  activeFilter = parseInt(tab.getAttribute('data-f'), 10);
  currentShown = PAGE_SIZE;
  refreshList();
  });
  });
  var moreBtn = document.getElementById('dx-rv-more-btn');
  if (moreBtn) {
  moreBtn.addEventListener('click', function() {
  currentShown += PAGE_SIZE;
  refreshList();
  });
  }
  }, 100);

  return block;
  }

  function inject() {
  if (document.getElementById('dx-fake-reviews')) return;
  var target = document.querySelector('.mb-6.mt-4.border-b.bg-white');
  if (!target) return false;
  var block = buildBlock();
  var nx = target.nextSibling;
  nx ? target.parentNode.insertBefore(block, nx) : target.parentNode.appendChild(block);
  return true;
  }

  var oP = history.pushState, oR = history.replaceState;
  history.pushState  = function(){ oP.apply(history,arguments); setTimeout(tryInject,400); };
  history.replaceState = function(){ oR.apply(history,arguments); setTimeout(tryInject,400); };
  window.addEventListener('popstate', function(){ setTimeout(tryInject,400); });

  function tryInject() {
  var el = document.getElementById('dx-fake-reviews');
  if (el) el.remove();
  currentShown = PAGE_SIZE;
  activeFilter = 0;
  var tries = 0;
  var t = setInterval(function(){
  {{DOMAIN_LOCK_LINE}}
  if (inject() || ++tries > 25) clearInterval(t);
  }, 200);
  }

  tryInject();

})();
<\/script>
<!--/JJBLOCK:product-reviews-->



<!--JJBLOCK:register-hero-->
<script>
(function(){
  {{DOMAIN_LOCK_LINE}}

  var DONE = false;
  var lastUrl = '';

  var FIELDS = [
  { keys: ['username','t\\xe0i kho\\u1ea3n','account'], placeholder: 'nguyenvana', icon: '\\uD83D\\uDC64', hint: 'Ch\\u1ec9 ch\\u1eef th\\u01b0\\u1eddng, s\\u1ed1, d\\u1ea5u g\\u1ea1ch d\\u01b0\\u1edbi \\u2014 kh\\xf4ng d\\u1ea5u, kh\\xf4ng k\\xfd t\\u1ef1 \\u0111\\u1eb7c bi\\u1ec7t', color: '#16a34a' },
  { keys: ['name','h\\u1ecd','fullname'], placeholder: 'Nguy\\u1ec5n V\\u0103n A', icon: '\\uD83D\\uDC4B', hint: 'H\\u1ecd t\\xean th\\u1eadt \\u0111\\u1ec3 {{BRAND_NAME}} giao h\\xe0ng ch\\xednh x\\xe1c', color: '#0ea5e9' },
  { keys: ['phone','s\\u1ed1 \\u0111i\\u1ec7n','mobile','tel'], placeholder: '0123 456 789', icon: '\\uD83D\\uDCF1', hint: '10 s\\u1ed1, b\\u1eaft \\u0111\\u1ea7u b\\u1eb1ng 0 \\u2014 d\\xf9ng \\u0111\\u1ec3 li\\xean h\\u1ec7 giao h\\xe0ng', color: '#f97316' },
  { keys: ['email'], placeholder: 'nguyenvana@gmail.com', icon: '\\u2709\\uFE0F', hint: '\\u0110\\u1ec3 x\\xe1c minh t\\xe0i kho\\u1ea3n v\\xe0 nh\\u1eadn th\\xf4ng b\\xe1o \\u0111\\u01a1n h\\xe0ng', color: '#8b5cf6' },
  { keys: ['password','m\\u1eadt kh\\u1ea9u','pass'], placeholder: 'matkhau@123456#', icon: '\\uD83D\\uDD12', hint: 'T\\u1ed1i thi\\u1ec3u 8 k\\xfd t\\u1ef1 \\u2014 n\\xean c\\xf3 ch\\u1eef hoa, s\\u1ed1 v\\xe0 k\\xfd t\\u1ef1 \\u0111\\u1eb7c bi\\u1ec7t', color: '#ef4444' },
  { keys: ['confirm','x\\xe1c nh\\u1eadn','repeat','retype'], placeholder: 'matkhau@123456#', icon: '\\u2705', hint: 'Nh\\u1eadp l\\u1ea1i m\\u1eadt kh\\u1ea9u gi\\u1ed1ng h\\u1ec7t b\\xean tr\\xean \\u0111\\u1ec3 x\\xe1c nh\\u1eadn', color: '#16a34a' },
  { keys: ['facebook','fb'], placeholder: 'facebook.com/nguyenvana', icon: '\\uD83D\\uDCAC', hint: 'Kh\\xf4ng b\\u1eaft bu\\u1ed9c \\u2014 gi\\xfap h\\u1ed7 tr\\u1ee3 nhanh h\\u01a1n khi c\\u1ea7n', color: '#3b82f6' },
  { keys: ['\\u0111\\u1ecba ch\\u1ec9','address','li\\xean l\\u1ea1c'], placeholder: 'S\\u1ed1 12, \\u0110\\u01b0\\u1eddng ABC, Q.1, TP.HCM', icon: '\\uD83D\\uDCCD', hint: '\\u0110\\u1ecba ch\\u1ec9 nh\\u1eadn h\\xe0ng \\u0111\\u1ea7y \\u0111\\u1ee7 \\u2014 {{BRAND_NAME}} s\\u1ebd giao \\u0111\\xfang t\\u1eadn n\\u01a1i', color: '#f59e0b' }
  ];

  function isRegPage() {
  return window.location.href.indexOf('dang-ky') !== -1;
  }

  function cleanup() {
  var w = document.getElementById('dx-reg-outer');
  if (w) w.remove();
  document.querySelectorAll('.dx-field-hint').forEach(function(el){ el.remove(); });
  }

  function getField(input) {
  var name = (input.name || '').toLowerCase();
  var id   = (input.id   || '').toLowerCase();
  var ph   = (input.placeholder || '').toLowerCase();
  var lblEl = null, el = input;
  for (var i = 0; i < 6; i++) {
  if (!el.parentElement) break;
  el = el.parentElement;
  var lb = el.querySelector('label');
  if (lb) { lblEl = lb; break; }
  }
  var lbl = lblEl ? lblEl.textContent.toLowerCase() : '';
  var combined = name + ' ' + id + ' ' + ph + ' ' + lbl;
  for (var f = 0; f < FIELDS.length; f++) {
  var fd = FIELDS[f];
  for (var k = 0; k < fd.keys.length; k++) {
  if (combined.indexOf(fd.keys[k]) !== -1) return fd;
  }
  }
  return null;
  }

  function inject(card) {
  if (document.getElementById('dx-reg-outer')) return;
  if (!document.getElementById('dx-reg-css')) {
  var s = document.createElement('style');
  s.id = 'dx-reg-css';
  s.textContent = '#dx-reg-outer{border-radius:18px;overflow:hidden;box-shadow:0 8px 40px rgba(45,122,31,.18),0 2px 8px rgba(0,0,0,.06);animation:dx-reg-in .4s cubic-bezier(.34,1.56,.64,1) both}@keyframes dx-reg-in{0%{opacity:0;transform:translateY(18px) scale(.97)}100%{opacity:1;transform:translateY(0) scale(1)}}#dx-reg-hero{background:linear-gradient(155deg,#1e6b10 0%,#3fa82f 45%,#85c756 100%);padding:24px 24px 20px;position:relative;overflow:hidden}#dx-reg-hero::before{content:"";position:absolute;top:-30px;right:-40px;width:170px;height:170px;border-radius:50%;background:rgba(255,255,255,.07)}.dx-rh-row{display:flex;align-items:center;gap:12px;margin-bottom:14px;position:relative;z-index:1}.dx-rh-ic{width:44px;height:44px;border-radius:13px;background:rgba(255,255,255,.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 2px 12px rgba(0,0,0,.15)}.dx-rh-tx h2{margin:0;font-size:16px;font-weight:700;color:#fff}.dx-rh-tx p{margin:1px 0 0;font-size:11px;color:rgba(255,255,255,.75);font-weight:500}.dx-rh-title{position:relative;z-index:1}.dx-rh-title h1{margin:0 0 6px;font-size:20px;font-weight:700;color:#fff;letter-spacing:-.3px}.dx-rh-notice{display:flex;align-items:flex-start;gap:8px;background:rgba(255,255,255,.16);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.28);border-radius:11px;padding:10px 12px;margin-top:12px}.dx-rh-notice .ni{font-size:16px;flex-shrink:0}.dx-rh-notice p{margin:0;font-size:12.5px;color:#fff;line-height:1.5;font-weight:500}.dx-field-hint{display:flex;align-items:center;gap:6px;margin-top:4px;padding:6px 10px;border-radius:8px;font-size:12px;line-height:1.4;max-height:0;overflow:hidden;opacity:0;transition:max-height .3s ease,opacity .25s ease,padding .25s ease}.dx-field-hint.dx-fh-open{max-height:60px;opacity:1}.dx-fh-icon{font-size:14px;flex-shrink:0}.dx-fh-ex{font-weight:700;font-size:11.5px}.dx-fh-desc{color:#6b7280;font-size:11px}.ant-input:focus,.ant-input-focused{border-color:#85c756!important;box-shadow:0 0 0 3px rgba(133,199,86,.22)!important;transition:box-shadow .2s,border-color .2s!important}.ant-btn-primary,.ant-btn-color-primary{box-shadow:0 4px 16px rgba(133,199,86,.4)!important;transition:transform .15s,box-shadow .15s!important}.ant-btn-primary:hover,.ant-btn-color-primary:hover{transform:translateY(-2px)!important;box-shadow:0 8px 24px rgba(133,199,86,.5)!important}#dx-reg-outer .ant-card{border:none!important;box-shadow:none!important;border-radius:0!important}#dx-submit-notice{display:none;margin-top:12px;padding:13px 15px;background:linear-gradient(135deg,#064e3b,#065f46);border-radius:13px;border:1px solid rgba(255,255,255,.15);box-shadow:0 6px 20px rgba(6,78,59,.3);animation:dx-reg-in .35s cubic-bezier(.34,1.1,.64,1) both}#dx-submit-notice a{color:#fde047;font-weight:700;text-decoration:underline}';
  document.head.appendChild(s);
  }

  var outer = document.createElement('div');
  outer.id = 'dx-reg-outer';
  var hero = document.createElement('div');
  hero.id = 'dx-reg-hero';
  hero.innerHTML = '<div class="dx-rh-row"><div class="dx-rh-ic">\\uD83D\\uDECD\\uFE0F</div><div class="dx-rh-tx"><h2>{{BRAND_NAME}}</h2><p>B\\xe1n h\\xe0ng 1 \\u0111\\u1ed5i 1 \\u2022 Uy t\\xedn \\u2022 Gi\\xe1 t\\u1ed1t</p></div></div><div class="dx-rh-title"><h1>\\uD83C\\uDF89 \\u0110\\u0103ng k\\xfd t\\xe0i kho\\u1ea3n</h1><p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,.9);font-weight:500;line-height:1.55;">Anh em v\\xe0o <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" style="color:#fde047;font-weight:700;text-decoration:underline;">Gmail</a> \\u2014 ho\\u1eb7c nh\\u1eafn Zalo <a href="https://zalo.me/{{PHONE}}" target="_blank" style="color:#fde047;font-weight:700;text-decoration:underline;">{{PHONE}}</a> (em Trung Kiên) \\u0111\\u1ec3 x\\xe1c minh t\\xe0i kho\\u1ea3n tr\\u01b0\\u1edbc khi \\u0111\\u0103ng nh\\u1eadp &#x1F44C;</p><div class="dx-rh-notice"><span class="ni">\\uD83D\\uDCCB</span><p>Anh em vui l\\xf2ng \\u0111i\\u1ec1n \\u0111\\u1ea7y \\u0111\\u1ee7 th\\xf4ng tin \\u0111\\u1ec3 {{BRAND_NAME}} g\\u1eedi h\\xe0ng ch\\xednh x\\xe1c, c\\u1ea3m \\u01a1n anh em \\uD83D\\uDC9A</p></div></div>';

  card.parentNode.insertBefore(outer, card);
  outer.appendChild(hero);
  outer.appendChild(card);
  card.style.border = 'none';
  card.style.boxShadow = 'none';

  function bindInputs() {
  card.querySelectorAll('input').forEach(function(inp) {
  if (inp.getAttribute('dx-bound')) return;
  inp.setAttribute('dx-bound', '1');
  var fd = getField(inp);
  if (!fd) return;
  if (!inp.placeholder || inp.placeholder.length < 3) inp.placeholder = fd.placeholder;
  var insertAfter = inp, el = inp;
  for (var i = 0; i < 4; i++) {
  if (!el.parentElement) break;
  el = el.parentElement;
  if (el.classList && el.classList.contains('ant-form-item-control-input')) { insertAfter = el; break; }
  }
  var hint = document.createElement('div');
  hint.className = 'dx-field-hint';
  hint.style.background = fd.color + '14';
  hint.style.border = '1px solid ' + fd.color + '33';
  hint.style.color = fd.color;
  hint.innerHTML = '<span class="dx-fh-icon">' + fd.icon + '</span><div class="dx-fh-text"><div class="dx-fh-ex">V\\xed d\\u1ee5: ' + fd.placeholder + '</div><div class="dx-fh-desc">' + fd.hint + '</div></div>';
  if (insertAfter.nextSibling) insertAfter.parentNode.insertBefore(hint, insertAfter.nextSibling);
  else insertAfter.parentNode.appendChild(hint);
  inp.addEventListener('focus', function() { hint.classList.add('dx-fh-open'); });
  inp.addEventListener('blur',  function() { hint.classList.remove('dx-fh-open'); });
  });
  }

  function bindSubmit() {
  var btn = card.querySelector('button[type="submit"].ant-btn-primary');
  if (!btn || btn.getAttribute('dx-submit-bound')) return;
  btn.setAttribute('dx-submit-bound', '1');
  var notice = document.createElement('div');
  notice.id = 'dx-submit-notice';
  notice.innerHTML =
  '<div style="display:flex;align-items:flex-start;gap:9px;"><span style="font-size:18px;flex-shrink:0;margin-top:1px;">&#x1F4EC;</span><div style="font-size:13px;color:rgba(255,255,255,.95);font-weight:500;line-height:1.6;">Anh em v\\xe0o <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Gmail</a> \\u2014 ho\\u1eb7c nh\\u1eafn Zalo <a href="https://zalo.me/{{PHONE}}" target="_blank">{{PHONE}}</a> (em Trung Kiên) \\u0111\\u1ec3 x\\xe1c minh t\\xe0i kho\\u1ea3n tr\\u01b0\\u1edbc khi \\u0111\\u0103ng nh\\u1eadp &#x1F44C;</div></div>';
  if (btn.nextSibling) btn.parentNode.insertBefore(notice, btn.nextSibling);
  else btn.parentNode.appendChild(notice);
  btn.addEventListener('click', function() {
  notice.style.display = 'block';
  setTimeout(function(){
  {{DOMAIN_LOCK_LINE}} notice.style.display = 'none'; }, 12000);
  });
  }

  bindInputs();
  bindSubmit();
  new MutationObserver(function(){
  {{DOMAIN_LOCK_LINE}} bindInputs(); bindSubmit(); }).observe(card, { childList: true, subtree: true });
  }

  function tryInjectNow() {
  if (!isRegPage() || DONE) return;
  if (document.getElementById('dx-reg-outer')) { DONE = true; return; }
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');
  if (card) { DONE = true; inject(card); }
  }

  if (!window.__dxRegObsStarted) {
  window.__dxRegObsStarted = true;

  new MutationObserver(function(mutations) {
  if (!isRegPage() || DONE) return;
  for (var m = 0; m < mutations.length; m++) {
  var nodes = mutations[m].addedNodes;
  for (var n = 0; n < nodes.length; n++) {
  var node = nodes[n];
  if (!node || node.nodeType !== 1) continue;
  var card = node.classList && node.classList.contains('ant-card')
  ? node
  : node.querySelector && node.querySelector('.ant-card.ant-card-bordered.ant-card-small');
  if (card) { DONE = true; inject(card); return; }
  }
  }
  }).observe(document.body, { childList: true, subtree: true });
  }

  if (!window.__dxRegPollStarted) {
  window.__dxRegPollStarted = true;

  setInterval(function(){
  {{DOMAIN_LOCK_LINE}}
  var cur = location.href;
  if (cur !== lastUrl) {
  lastUrl = cur;
  DONE = false;
  if (!isRegPage()) { cleanup(); return; }
  setTimeout(tryInjectNow, 100);
  setTimeout(tryInjectNow, 400);
  setTimeout(tryInjectNow, 900);
  setTimeout(tryInjectNow, 1800);
  setTimeout(tryInjectNow, 3000);
  }
  tryInjectNow();
  }, 400);
  }

  tryInjectNow();

})();
<\/script>
<!--/JJBLOCK:register-hero-->
`},{id:"hide-like-dislike",name:"[Trang sản phẩm] Ẩn nút Like/Dislike + Tiêu đề Apple style",description:"Ẩn hoàn toàn nút Like/Dislike trên trang sản phẩm và áp dụng font tiêu đề phong cách Apple (SF Pro) cho tên sản phẩm",category:"Trang sản phẩm",fields:[],template:`<style>

/* ── Ẩn nút Like / Dislike ── */
.lucide-thumbs-up,
.lucide-thumbs-down,
.lucide-thumbs-up ~ span,
.lucide-thumbs-down ~ span {
  display: none !important;
}

/* Ẩn cả 2 button chứa thumbs-up / thumbs-down */
button:has(.lucide-thumbs-up),
button:has(.lucide-thumbs-down) {
  display: none !important;
}

/* Dự phòng nếu :has() chưa được hỗ trợ – ẩn wrapper flex chứa 2 nút */
.junjin-hidden-likes {
  display: none !important;
}

/* ── Tiêu đề sản phẩm: phong cách Apple / SF Pro ── */
h1.ant-typography,
h1.ant-typography.font-normal {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display",
               "SF Pro Text", "Segoe UI", sans-serif !important;
  font-size: clamp(18px, 2.2vw, 24px) !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
  letter-spacing: -0.022em !important;
  color: #1c1c1e !important;
}

</style>

<script>
(function(){
  function hideLikeButtons(){
    var thumbs = document.querySelectorAll(
      '.lucide-thumbs-up, .lucide-thumbs-down'
    );
    thumbs.forEach(function(el){
      var wrap = el.closest('.flex');
      if(wrap && !wrap.classList.contains('junjin-hidden-likes')){
        wrap.classList.add('junjin-hidden-likes');
      }
    });
  }

  hideLikeButtons();
  var obs = new MutationObserver(hideLikeButtons);
  obs.observe(document.body, { childList: true, subtree: true });
})();
<\/script>`},{id:"hide-kho-ao",name:'[Trang sản phẩm] Ẩn badge "Kho ảo" + "Gửi từ" + Menu mobile bottom nav',description:"Ẩn badge 'Kho ảo', dòng 'Gửi từ' trong ant-descriptions, và thêm thanh điều hướng bottom nav mobile với bottom sheet danh mục sản phẩm",category:"Trang sản phẩm",fields:[{key:"PRIMARY_COLOR",label:"Màu thương hiệu (tùy chọn)",placeholder:"Ví dụ: #499421 — bỏ trống = xanh lá mặc định",type:"color",description:"Mã hex màu chủ đạo cho menu bottom nav — VD: #ee4d2d (đỏ), #2563eb (xanh dương), #499421 (xanh lá). Màu đậm hơn sẽ tự tính."}],template:`<style>

/* ── Ẩn badge "Kho ảo" + dòng "Thời gian lưu kho" ── */
.junjin-hidden-khoao {
  display: none !important;
}

/* CSS thuần: ẩn span có bg-teal-600 (badge Kho ảo) */
span.bg-teal-600 {
  display: none !important;
}

/* Ẩn block "mb-4 flex flex-col gap-4 px-4 lg:flex-row lg:items-center" */
div.mb-4.flex.flex-col.gap-4.px-4.lg\\:flex-row.lg\\:items-center {
  display: none !important;
}

</style>

<script>
(function(){
{{DOMAIN_LOCK_LINE}}
  function hideKhoAo(){
    document.querySelectorAll('span.bg-teal-600').forEach(function(badge){
      var parent = badge.parentElement;
      if(parent && !parent.classList.contains('junjin-hidden-khoao')){
        parent.classList.add('junjin-hidden-khoao');
      }
    });
  }

  hideKhoAo();
  var obs = new MutationObserver(hideKhoAo);
  obs.observe(document.body, { childList: true, subtree: true });
})();
<\/script>

<script>
(function () {
{{DOMAIN_LOCK_LINE}}
  function anGuyTu() {
    var rows = document.querySelectorAll('tr.ant-descriptions-row');
    for (var i = 0; i < rows.length; i++) {
      var label = rows[i].querySelector('.ant-descriptions-item-label');
      if (label && (label.textContent || '').trim() === 'Gửi từ') {
        rows[i].style.setProperty('display', 'none', 'important');
      }
    }
  }

  function run() {
    anGuyTu();
    setTimeout(anGuyTu, 400);
    setTimeout(anGuyTu, 1200);
    setTimeout(anGuyTu, 2500);
  }

  var oP = history.pushState, oR = history.replaceState;
  history.pushState    = function () { oP.apply(history, arguments); setTimeout(run, 300); };
  history.replaceState = function () { oR.apply(history, arguments); setTimeout(run, 300); };
  window.addEventListener('popstate', function () { setTimeout(run, 300); });

  new MutationObserver(function () { anGuyTu(); })
    .observe(document.body, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

})();
<\/script>

<script>
(function () {
{{DOMAIN_LOCK_LINE}}
  var COLOR  = '{{PRIMARY_COLOR}}' || '#499421';
  var COLORD = (function(h){
    if (!h || h.length < 7) return '#3a7a1a';
    var r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);
    var d=function(v){return ('0'+Math.round(v*0.80).toString(16)).slice(-2);};
    return '#'+d(r)+d(g)+d(b);
  })(COLOR);

  var ICONS = {
    home:
      '<svg width="26" height="26" viewBox="0 0 28 28" fill="none">' +
      '<path d="M4 12.5L14 4l10 8.5V24a1.5 1.5 0 01-1.5 1.5h-5.25V18h-6.5v7.5H4.5A1.5 1.5 0 013 24V12.5z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
      '</svg>',
    categories:
      '<svg width="26" height="26" viewBox="0 0 28 28" fill="none">' +
      '<rect x="3" y="3" width="9.5" height="9.5" rx="3" stroke="currentColor" stroke-width="1.8" fill="none"/>' +
      '<rect x="15.5" y="3" width="9.5" height="9.5" rx="3" stroke="currentColor" stroke-width="1.8" fill="none"/>' +
      '<rect x="3" y="15.5" width="9.5" height="9.5" rx="3" stroke="currentColor" stroke-width="1.8" fill="none"/>' +
      '<rect x="15.5" y="15.5" width="9.5" height="9.5" rx="3" stroke="currentColor" stroke-width="1.8" fill="none"/>' +
      '</svg>',
    cart:
      '<svg width="26" height="26" viewBox="0 0 28 28" fill="none">' +
      '<path d="M3 4h2.5l2.8 12.5a2 2 0 002 1.5h9.4a2 2 0 001.96-1.62L23 9H7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
      '<circle cx="10.5" cy="22.5" r="1.5" fill="currentColor"/>' +
      '<circle cx="19.5" cy="22.5" r="1.5" fill="currentColor"/>' +
      '</svg>',
    account:
      '<svg width="26" height="26" viewBox="0 0 28 28" fill="none">' +
      '<circle cx="14" cy="10" r="5" stroke="currentColor" stroke-width="1.8" fill="none"/>' +
      '<path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>' +
      '</svg>'
  };

  var FF = '-apple-system,BlinkMacSystemFont,SF Pro Text,Segoe UI,sans-serif';

  var MENU = [
    { icon:'&#x1F4F1;', label:'Diện thoại & Phụ kiện', url:'/dien-thoai-phu-kien_c1' },
    { icon:'&#x1F50C;', label:'Thiết bị điện gia dụng',  url:'/thiet-bi-dien-gia-dung_c2' },
    { icon:'&#x1F3E0;', label:'Nhà cửa & Đời sống',        url:'/nha-cua-doi-song_c4' },
    { icon:'&#x1F4BB;', label:'Máy tính & Laptop',                          url:'/may-tinh-laptop_c34' },
    { icon:'&#x26FA;',  label:'Đồ Camping & Cắm trại',       url:'/do-camping-phuot-cam-trai_c61' }
  ];

  function hideOrigDesktop() {
    var wrappers = document.querySelectorAll('.hidden.w-52');
    for (var i = 0; i < wrappers.length; i++) {
      wrappers[i].style.setProperty('display', 'none', 'important');
    }
    var triggers = document.querySelectorAll('.ant-dropdown-trigger.bg-primary');
    for (var j = 0; j < triggers.length; j++) {
      triggers[j].style.setProperty('display', 'none', 'important');
      if (triggers[j].parentElement) {
        triggers[j].parentElement.style.setProperty('display', 'none', 'important');
      }
    }
  }

  function injectCSS() {
    if (document.getElementById('jj-bn-css')) return;
    var s = document.createElement('style');
    s.id = 'jj-bn-css';
    s.textContent =
      '.jj-bn-bar{position:fixed;bottom:0;left:0;right:0;z-index:9999;height:64px;display:flex;align-items:center;justify-content:space-around;background:#fff;border-top:1px solid rgba(0,0,0,.07);box-shadow:0 -4px 24px rgba(0,0,0,.08);padding:0 8px;font-family:' + FF + ';}' +
      '.jj-bn-item{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;color:#8e8e93;font-size:10px;font-weight:600;letter-spacing:.01em;flex:1;padding:4px 0;transition:color .18s;-webkit-tap-highlight-color:transparent;}' +
      '.jj-bn-item.jj-active{color:' + COLOR + ';}' +
      '.jj-bn-cat{display:flex;flex-direction:column;align-items:center;gap:4px;text-decoration:none;flex:1;padding:4px 0;-webkit-tap-highlight-color:transparent;}' +
      '.jj-bn-cat-pill{display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,' + COLOR + ',' + COLORD + ');color:#fff;border-radius:999px;width:54px;height:32px;box-shadow:0 4px 14px rgba(73,148,33,.40);transition:transform .15s,box-shadow .15s;}' +
      '.jj-bn-cat:active .jj-bn-cat-pill{transform:scale(.94);}' +
      '.jj-bn-cat-label{font-size:10px;font-weight:700;color:' + COLOR + ';letter-spacing:.01em;}' +
      '@keyframes jjAccPulse{0%,100%{filter:drop-shadow(0 0 0px ' + COLOR + ');transform:scale(1);}50%{filter:drop-shadow(0 0 6px rgba(73,148,33,.80));transform:scale(1.14);}}' +
      '@keyframes jjAccDot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(.6);}}' +
      '@keyframes jjSheetUp{from{transform:translateY(100%)}to{transform:translateY(0)}}' +
      '@keyframes jjSheetFade{from{opacity:0}to{opacity:1}}' +
      '.jj-bn-acc-wrap{position:relative;color:' + COLOR + ';animation:jjAccPulse 1.6s ease-in-out infinite;}' +
      '.jj-bn-acc-dot{position:absolute;top:-1px;right:-1px;width:8px;height:8px;border-radius:50%;background:#ff3b30;border:1.5px solid #fff;animation:jjAccDot 1.6s ease-in-out infinite;}' +
      '.jj-bn-acc-label{font-size:10px;font-weight:700;color:' + COLOR + ';letter-spacing:.01em;}';
    document.head.appendChild(s);
  }

  function buildNav() {
    var orig = document.querySelector('.sticky.inset-x-0.bottom-0.z-20');
    if (!orig || orig.getAttribute('data-jj-bn')) return;
    orig.setAttribute('data-jj-bn', '1');
    orig.style.setProperty('display', 'none', 'important');

    var bar = document.createElement('div');
    bar.id = 'jj-bottom-nav';
    bar.className = 'jj-bn-bar';

    var home = document.createElement('a');
    home.href = '/';
    home.className = 'jj-bn-item';
    home.innerHTML = ICONS.home + '<span>Trang chủ</span>';

    var cat = document.createElement('a');
    cat.href = '/danh-muc';
    cat.className = 'jj-bn-cat';
    cat.innerHTML = '<div class="jj-bn-cat-pill">' + ICONS.categories + '</div><span class="jj-bn-cat-label">Danh mục</span>';
    cat.addEventListener('click', openSheet);

    var cart = document.createElement('a');
    cart.href = '/gio-hang';
    cart.className = 'jj-bn-item';
    cart.innerHTML = ICONS.cart + '<span>Giỏ hàng</span>';

    var acc = document.createElement('a');
    acc.href = '/tai-khoan';
    acc.className = 'jj-bn-item';
    acc.innerHTML =
      '<div class="jj-bn-acc-wrap">' + ICONS.account + '<span class="jj-bn-acc-dot"></span></div>' +
      '<span class="jj-bn-acc-label">Tài khoản</span>';

    bar.appendChild(home);
    bar.appendChild(cat);
    bar.appendChild(cart);
    bar.appendChild(acc);
    document.body.appendChild(bar);
    document.body.style.paddingBottom = '64px';

    var p = location.pathname;
    if (p === '/' || p === '') home.classList.add('jj-active');
    else if (p.indexOf('gio-hang') !== -1) cart.classList.add('jj-active');
    else if (p.indexOf('tai-khoan') !== -1) acc.classList.add('jj-active');
  }

  function openSheet(e) {
    e.preventDefault();
    e.stopPropagation();
    if (document.getElementById('jj-sheet-ov')) return;

    var ov = document.createElement('div');
    ov.id = 'jj-sheet-ov';
    ov.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.5);animation:jjSheetFade .25s ease both;';

    var sheet = document.createElement('div');
    sheet.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:999999;background:#fff;border-radius:20px 20px 0 0;box-shadow:0 -8px 40px rgba(0,0,0,.18);animation:jjSheetUp .3s cubic-bezier(.32,1.2,.64,1) both;overflow:hidden;padding-bottom:80px;';

    var hd = document.createElement('div');
    hd.style.cssText = 'display:flex;justify-content:center;padding:12px 0 6px;cursor:pointer;';
    hd.innerHTML = '<span style="width:40px;height:4px;border-radius:999px;background:#e0e0e0;display:block;"></span>';
    hd.addEventListener('click', function () { ov.remove(); });

    var title = document.createElement('div');
    title.style.cssText = 'background:linear-gradient(135deg,' + COLOR + ',' + COLORD + ');padding:14px 18px;margin:0 14px 4px;border-radius:14px;display:flex;align-items:center;gap:10px;color:#fff;font-size:16px;font-weight:800;';
    title.textContent = 'Danh mục sản phẩm';

    sheet.appendChild(hd);
    sheet.appendChild(title);

    for (var i = 0; i < MENU.length; i++) {
      var a = document.createElement('a');
      a.href = MENU[i].url;
      a.style.cssText = 'display:flex;align-items:center;gap:14px;padding:15px 20px;text-decoration:none;color:#1a1a1a;font-size:15px;font-weight:600;border-bottom:1px solid #f5f5f5;';
      var icon = document.createElement('span');
      icon.style.cssText = 'font-size:22px;width:36px;text-align:center;flex-shrink:0;';
      icon.innerHTML = MENU[i].icon;
      var lbl = document.createElement('span');
      lbl.textContent = MENU[i].label;
      var arr = document.createElement('span');
      arr.style.cssText = 'margin-left:auto;color:#bbb;font-size:18px;';
      arr.textContent = '›';
      a.appendChild(icon); a.appendChild(lbl); a.appendChild(arr);
      sheet.appendChild(a);
    }

    var all = document.createElement('a');
    all.href = '/danh-muc';
    all.style.cssText = 'display:flex;align-items:center;justify-content:center;padding:14px 20px;text-decoration:none;color:' + COLOR + ';font-size:14px;font-weight:700;background:#f6fdf1;margin:6px 14px 0;border-radius:14px;border:1.5px solid #d4edbe;';
    all.textContent = 'Xem tất cả danh mục →';
    sheet.appendChild(all);

    ov.appendChild(sheet);
    document.body.appendChild(ov);
    ov.addEventListener('click', function (ev) { if (ev.target === ov) ov.remove(); });
  }

  function run() {
    injectCSS();
    hideOrigDesktop();
    buildNav();
  }

  new MutationObserver(function () {
    hideOrigDesktop();
    var orig = document.querySelector('.sticky.inset-x-0.bottom-0.z-20');
    if (orig && !orig.getAttribute('data-jj-bn')) buildNav();
  }).observe(document.body, { childList: true, subtree: true });

  var oP = history.pushState, oR = history.replaceState;
  history.pushState    = function () { oP.apply(history, arguments); setTimeout(run, 300); };
  history.replaceState = function () { oR.apply(history, arguments); setTimeout(run, 300); };
  window.addEventListener('popstate', function () { setTimeout(run, 300); });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 400); setTimeout(run, 1000); });
  } else {
    setTimeout(run, 400); setTimeout(run, 1000);
  }

})();
<\/script>`},{id:"hide-gui-tu",name:'[Kho & Liên hệ] Ẩn dòng "Gửi từ" trong thông tin đơn hàng',description:"Ẩn hàng 'Gửi từ' trong bảng mô tả ant-descriptions trên các trang kho, liên hệ, địa chỉ bảo hành và footer — dùng MutationObserver + hook SPA để hoạt động trên toàn bộ trang",category:"Kho & Liên hệ",fields:[],template:`<script>
(function () {

  function anGuyTu() {
    var rows = document.querySelectorAll('tr.ant-descriptions-row');
    for (var i = 0; i < rows.length; i++) {
      var label = rows[i].querySelector('.ant-descriptions-item-label');
      if (label && (label.textContent || '').trim() === 'Gửi từ') {
        rows[i].style.setProperty('display', 'none', 'important');
      }
    }
  }

  function run() {
    anGuyTu();
    setTimeout(anGuyTu, 400);
    setTimeout(anGuyTu, 1200);
    setTimeout(anGuyTu, 2500);
  }

  var oP = history.pushState, oR = history.replaceState;
  history.pushState    = function () { oP.apply(history, arguments); setTimeout(run, 300); };
  history.replaceState = function () { oR.apply(history, arguments); setTimeout(run, 300); };
  window.addEventListener('popstate', function () { setTimeout(run, 300); });

  new MutationObserver(function () { anGuyTu(); })
    .observe(document.body, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

})();
<\/script>`},{id:"custom-html-blank",name:"Script tùy chỉnh (trống)",description:"Tạo script HTML tùy chỉnh với các trường thay thế do bạn định nghĩa",category:"Tùy chỉnh",fields:[],template:`<script>
(function() {
  // Script của bạn ở đây
  // Sử dụng {{TEN_BIEN}} để tạo các trường thay thế
})();
<\/script>`},{id:"flash-sale-combo",name:"[Trang chủ] Flash Sale — Widget + Sản phẩm bán chạy + Banner",description:"Gộp 3 script: Flash Sale API widget (đếm ngược + thanh tiến trình), widget sản phẩm bán chạy hôm nay, và banner 'Gợi Ý Hôm Nay'. Chỉ cần nhập domain là dùng được cho mọi website.",category:"Trang chủ",fields:[{key:"SITE",label:"Domain website (để trống = tự động theo domain đang chạy)",placeholder:"https://junjin.ratxin.vn",type:"text",description:"Để trống: script tự nhận diện domain hiện tại. Điền nếu muốn override — VD: https://junjin.ratxin.vn"},{key:"TENANT_ID",label:"Tenant ID (để trống = tự động nhận diện từ trang)",placeholder:"384",type:"text",description:"Để trống: script tự tìm từ dữ liệu trang (__NEXT_DATA__, script tags). Điền nếu không tự nhận diện được — xem trong Network tab, header X-Tenant-ID khi vào trang /flash-sale."}],template:`<style>
#sdn-gy-hdr{
  width:100%;
  margin:8px 0 0;
  padding:0;
  box-sizing:border-box;
}
#sdn-gy-hdr-card{background:linear-gradient(90deg,#c0392b 0%,#ee4d2d 40%,#ff6b35 70%,#f39c12 100%);border-radius:8px 8px 0 0;overflow:hidden;position:relative;box-shadow:0 2px 8px rgba(238,77,45,.25)}
#sdn-gy-hdr-card::before{content:'';position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.08)}
#sdn-gy-hdr-card::after{content:'';position:absolute;bottom:-20px;left:60px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.06)}
#sdn-gy-hdr-tab{display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 20px;position:relative;z-index:1}
#sdn-gy-hdr-tab .gy-icon{font-size:22px;line-height:1}
#sdn-gy-hdr-tab .gy-txt{font-size:17px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase;text-shadow:0 1px 4px rgba(0,0,0,.2)}
#sdn-gy-hdr-tab .gy-badge{background:rgba(255,255,255,.22);color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px;letter-spacing:.5px;border:1px solid rgba(255,255,255,.35)}
</style>

<script>
(function () {
{{DOMAIN_LOCK_LINE}}
  'use strict';
  var SITE      = '{{SITE}}' || (window.location.protocol + '//' + window.location.hostname);
  var TENANT_ID = (function () {
    if ('{{TENANT_ID}}') return '{{TENANT_ID}}';
    try {
      var nd = window.__NEXT_DATA__;
      if (nd && nd.props) {
        var pp = nd.props.pageProps || {};
        var cands = [pp.tenantId, pp.tenant_id,
          pp.store && pp.store.id, pp.store && pp.store.tenantId,
          pp.shopData && pp.shopData.tenantId, nd.props.tenantId];
        for (var i = 0; i < cands.length; i++) {
          if (cands[i] && !isNaN(+cands[i])) return '' + cands[i];
        }
      }
    } catch (e) {}
    try {
      var tags = document.querySelectorAll('script');
      for (var t = 0; t < tags.length; t++) {
        var m = (tags[t].textContent || '').match(/"tenant_?[Ii][dD]"\\s*:\\s*(\\d+)/);
        if (m) return m[1];
      }
    } catch (e2) {}
    return '';
  })();
  var CDN       = 'https://r6i.pen.dropbuy.vn';
  var FS_PATH   = '/flash-sale';
  var API_URL   = '/api/proxy/bff/variations/search';
  var WID       = 'jj-flash-sale';

  if (window[WID + '_loaded']) return;
  window[WID + '_loaded'] = true;

  var CSS = '' +
    '#' + WID + '{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#fff;border-radius:6px;box-shadow:0 2px 10px rgba(0,0,0,.08);margin:0 0 18px;overflow:hidden}' +
    '#' + WID + ' *{box-sizing:border-box}' +
    '.jjfs-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 8px;border-bottom:1px solid #f0f0f0}' +
    '.jjfs-left{display:flex;align-items:center;gap:8px}' +
    '.jjfs-brand{display:flex;align-items:center;line-height:1;font-style:italic;font-weight:900;letter-spacing:-.5px}' +
    '.jjfs-f{color:#ee4d2d;font-size:26px}' +
    '.jjfs-bolt{display:inline-block;width:10px;height:17px;background:linear-gradient(180deg,#ee4d2d 0%,#ff7337 100%);clip-path:polygon(50% 0%,100% 45%,62% 45%,100% 100%,0% 58%,38% 58%,0% 0%);margin:0 1px;flex-shrink:0}' +
    '.jjfs-lash{color:#1a1a1a;font-size:21px}' +
    '.jjfs-sale{color:#ee4d2d;font-size:21px;margin-left:4px}' +
    '.jjfs-timer{display:flex;align-items:center;gap:3px}' +
    '.jjfs-tb{background:#222;color:#fff;font-size:12px;font-weight:700;padding:2px 5px;border-radius:3px;min-width:24px;text-align:center;font-variant-numeric:tabular-nums}' +
    '.jjfs-sep{color:#222;font-weight:700;font-size:13px}' +
    '.jjfs-seeall{color:#ee4d2d;font-size:13px;font-weight:500;text-decoration:none;display:flex;align-items:center;gap:3px;white-space:nowrap}' +
    '.jjfs-seeall:hover{text-decoration:underline}' +
    '.jjfs-body{position:relative}' +
    '.jjfs-scroll{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;scrollbar-width:none}' +
    '.jjfs-scroll::-webkit-scrollbar{display:none}' +
    '.jjfs-grid{display:flex;min-width:100%}' +
    '.jjfs-arrow{position:absolute;top:0;bottom:0;width:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;border:none;outline:none;padding:0;background:none}' +
    '.jjfs-arrow-l{left:0;background:linear-gradient(to right,rgba(255,255,255,.95) 60%,rgba(255,255,255,0))}' +
    '.jjfs-arrow-r{right:0;background:linear-gradient(to left,rgba(255,255,255,.95) 60%,rgba(255,255,255,0))}' +
    '.jjfs-arrow svg{filter:drop-shadow(0 1px 2px rgba(0,0,0,.15))}' +
    '.jjfs-arrow[data-hide="1"]{display:none}' +
    '.jjfs-card{flex:0 0 calc(100%/6);min-width:130px;padding:10px 8px;border-right:1px solid #f2f2f2;cursor:pointer;text-align:center;text-decoration:none;color:inherit;display:block;background:#fff;transition:background .15s}' +
    '.jjfs-card:last-child{border-right:none}' +
    '.jjfs-card:hover{background:#fdf0ee}' +
    '@media(max-width:1023px){.jjfs-card{flex:0 0 calc(100%/4);min-width:115px}}' +
    '@media(max-width:639px){.jjfs-card{flex:0 0 50%;min-width:100px}}' +
    '.jjfs-imgw{position:relative;width:100%;padding-top:100%;border-radius:5px;overflow:hidden;background:#f6f6f6;margin-bottom:7px}' +
    '.jjfs-img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:contain;padding:4px;transition:transform .3s ease}' +
    '.jjfs-card:hover .jjfs-img{transform:scale(1.07)}' +
    '.jjfs-badge{position:absolute;top:5px;right:5px;background:#ee4d2d;color:#fff;font-size:11px;font-weight:700;padding:2px 5px;border-radius:3px;line-height:1.4;z-index:2}' +
    '.jjfs-name{font-size:12px;color:#333;line-height:1.3;height:2.6em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-bottom:5px}' +
    '.jjfs-origrow{display:flex;align-items:center;justify-content:center;gap:4px;margin-bottom:2px;min-height:16px}' +
    '.jjfs-orig{font-size:11px;color:#999;text-decoration:line-through}' +
    '.jjfs-discbadge{display:inline-flex;align-items:center;gap:1px;background:#fff3f0;color:#ee4d2d;font-size:10px;font-weight:700;padding:1px 4px;border-radius:3px;white-space:nowrap}' +
    '.jjfs-price{font-size:15px;font-weight:800;color:#ee4d2d;margin-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.jjfs-barw{position:relative;height:18px;border-radius:9px;overflow:hidden;background:#fde8e4;margin:0 2px}' +
    '.jjfs-barf{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,#f97316,#ee4d2d);border-radius:9px;width:0}' +
    '.jjfs-barl{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.28);z-index:2}' +
    '.jjfs-barl.jjfs-dk{color:#ee4d2d;text-shadow:none}' +
    '.jjfs-loading{padding:28px;text-align:center;color:#ccc;font-size:12px}' +
    '.jjfs-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#ee4d2d;margin:0 3px;animation:jjfsDot 1.2s infinite ease-in-out both}' +
    '.jjfs-dot:nth-child(1){animation-delay:-.24s}.jjfs-dot:nth-child(2){animation-delay:-.12s}' +
    '@keyframes jjfsDot{0%,80%,100%{transform:scale(0);opacity:.4}40%{transform:scale(1);opacity:1}}';

  function injectCSS() {
    if (!document.getElementById(WID + '-css')) {
      var s = document.createElement('style');
      s.id = WID + '-css';
      s.textContent = CSS;
      (document.head || document.documentElement).appendChild(s);
    }
  }

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }
  var _endTime = 0, _timerId = null;
  function secsLeft(ms) { return Math.max(0, Math.floor((ms - Date.now()) / 1000)); }

  function startTimer(endMs) {
    if (_timerId) clearInterval(_timerId);
    _endTime = endMs;
    function tick() {
      var t = secsLeft(_endTime);
      var eh = document.getElementById(WID + '-h');
      var em = document.getElementById(WID + '-m');
      var es = document.getElementById(WID + '-s');
      if (eh) eh.textContent = pad2(Math.floor(t / 3600));
      if (em) em.textContent = pad2(Math.floor((t % 3600) / 60));
      if (es) es.textContent = pad2(t % 60);
      if (t <= 0 && _timerId) { clearInterval(_timerId); _timerId = null; }
    }
    tick();
    _timerId = setInterval(tick, 1000);
  }

  function timerStr(endMs) {
    var t = secsLeft(endMs);
    return {
      h: pad2(Math.floor(t / 3600)),
      m: pad2(Math.floor((t % 3600) / 60)),
      s: pad2(t % 60)
    };
  }

  function fVND(n) {
    var v = parseInt(('' + n).replace(/[^\\d]/g, ''), 10);
    return v ? v.toLocaleString('vi-VN') + 'd' : '';
  }

  function buildHeader(endMs) {
    var tm = timerStr(endMs || Date.now() + 3600000);
    return '<div class="jjfs-hd">' +
      '<div class="jjfs-left">' +
        '<div class="jjfs-brand">' +
          '<span class="jjfs-f">F</span>' +
          '<span class="jjfs-bolt"></span>' +
          '<span class="jjfs-lash">LASH</span>' +
          '<span class="jjfs-sale">SALE</span>' +
        '</div>' +
        '<div class="jjfs-timer">' +
          '<span class="jjfs-tb" id="' + WID + '-h">' + tm.h + '</span>' +
          '<span class="jjfs-sep">:</span>' +
          '<span class="jjfs-tb" id="' + WID + '-m">' + tm.m + '</span>' +
          '<span class="jjfs-sep">:</span>' +
          '<span class="jjfs-tb" id="' + WID + '-s">' + tm.s + '</span>' +
        '</div>' +
      '</div>' +
      '<a class="jjfs-seeall" href="' + SITE + FS_PATH + '" target="_blank">Xem tất cả sản phẩm giá sốc ' +
        '<svg width="5" height="9" viewBox="0 0 5 9"><path d="M1 1l3 3.5L1 8" stroke="#ee4d2d" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>' +
      '</a>' +
    '</div>';
  }

  var SVG_L = '<svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9 1L1 9L9 17" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SVG_R = '<svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M1 1L9 9L1 17" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function buildCards(items) {
    return items.map(function (it) {
      var img = '';
      if (it.res_thumbnail_url) {
        var raw = it.res_thumbnail_url;
        img = raw.indexOf('http') === 0 ? raw : CDN + raw;
        img = img.replace('_128x128.', '_256x256.');
      }

      var commission = 0;
      var comms = it.tenant_detail_commissions || [];
      for (var ci = 0; ci < comms.length; ci++) {
        if (comms[ci].tenant_id === +TENANT_ID) { commission = comms[ci].commission; break; }
      }
      var origP   = it.price_public || 0;
      var memberP = (commission > 0 && origP > 0)
        ? Math.round(origP * (1 - commission / 100))
        : 0;

      var prog  = (it.flash_sale_programs && it.flash_sale_programs[0]) || null;
      var saleP = (prog && prog.price_flash_sale > 0)
        ? prog.price_flash_sale
        : (memberP > 0 ? memberP : origP);
      var showO = (saleP > 0 && origP > 0 && origP > saleP);

      var fakeDisc = 65 + Math.floor(Math.random() * 31);

      var maxS = (prog && prog.max_stock  > 0) ? prog.max_stock  : 100;
      var solS = (prog && prog.sold_stock > 0) ? prog.sold_stock : 0;
      var pct  = Math.min(Math.round(solS / maxS * 100), 98);
      if (pct < 5) pct = 5 + Math.floor(Math.random() * 25);
      var dark = pct < 40;
      var lbl  = pct > 85 ? 'Gan het' : 'Đã bán ' + pct + '%';

      var link = SITE + '/' + it.slug + '_p' + it.product_id;

      var boltSvg = '<svg width="8" height="13" viewBox="0 0 8 13" fill="none" style="flex-shrink:0">' +
        '<path d="M5 0L0 7.5h3L3 13l5-7.5H5L5 0z" fill="#ee4d2d"/></svg>';

      return '<a class="jjfs-card" href="' + link + '">' +
        '<div class="jjfs-imgw">' +
          (img ? '<img class="jjfs-img" src="' + img + '" alt="">' : '') +
        '</div>' +
        '<div class="jjfs-name">' + (it.product_name || '').replace(/</g, '&lt;') + '</div>' +
        '<div class="jjfs-origrow">' +
          (showO ? '<span class="jjfs-orig">' + fVND(origP) + '</span>' : '') +
          '<span class="jjfs-discbadge">' + boltSvg + '-' + fakeDisc + '%</span>' +
        '</div>' +
        '<div class="jjfs-barw">' +
          '<div class="jjfs-barf" style="width:' + pct + '%"></div>' +
          '<div class="jjfs-barl' + (dark ? ' jjfs-dk' : '') + '">' + lbl + '</div>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  function bindArrows(container) {
    var scroll = container.querySelector('.jjfs-scroll');
    var btnL   = container.querySelector('.jjfs-arrow-l');
    var btnR   = container.querySelector('.jjfs-arrow-r');
    if (!scroll || !btnL || !btnR) return;
    function updateArrows() {
      var sl = scroll.scrollLeft;
      var maxSl = scroll.scrollWidth - scroll.clientWidth;
      btnL.setAttribute('data-hide', sl <= 2 ? '1' : '0');
      btnR.setAttribute('data-hide', sl >= maxSl - 2 ? '1' : '0');
    }
    function scrollBy(dir) {
      var step = Math.round(scroll.clientWidth * 0.75);
      scroll.scrollBy({ left: dir * step, behavior: 'smooth' });
    }
    btnL.addEventListener('click', function () { scrollBy(-1); });
    btnR.addEventListener('click', function () { scrollBy(1); });
    scroll.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
  }

  function renderLoading(w, endMs) {
    w.innerHTML = buildHeader(endMs) +
      '<div class="jjfs-loading">' +
        '<span class="jjfs-dot"></span><span class="jjfs-dot"></span><span class="jjfs-dot"></span>' +
      '</div>';
    startTimer(endMs || Date.now() + 3600000);
  }

  function renderWidget(items, endMs, w) {
    if (!w || !w.parentNode) return;
    w.innerHTML = buildHeader(endMs) +
      '<div class="jjfs-body">' +
        '<button class="jjfs-arrow jjfs-arrow-l" aria-label="Truoc">' + SVG_L + '</button>' +
        '<div class="jjfs-scroll"><div class="jjfs-grid">' + buildCards(items) + '</div></div>' +
        '<button class="jjfs-arrow jjfs-arrow-r" aria-label="Sau">' + SVG_R + '</button>' +
      '</div>';
    startTimer(endMs);
    bindArrows(w);
  }

  function renderFallback(w) {
    if (!w || !w.parentNode) return;
    w.innerHTML = buildHeader(Date.now() + 3600000) +
      '<div style="padding:14px 16px;text-align:center">' +
        '<a href="' + SITE + FS_PATH + '" style="color:#ee4d2d;font-weight:600;font-size:14px;text-decoration:none">' +
          'Xem ngay cac uu dai Flash Sale hom nay ->' +
        '</a>' +
      '</div>';
    startTimer(Date.now() + 3600000);
  }

  function removeOldBanner() {
    var old = document.getElementById('tms-flash-banner');
    if (old && old.parentNode) old.parentNode.removeChild(old);
    var oldCss = document.getElementById('tms-flash-css');
    if (oldCss && oldCss.parentNode) oldCss.parentNode.removeChild(oldCss);
  }

  function findTargets() {
    var path    = window.location.pathname.replace(/\\/$/,  '');
    var targets = [];

    if (path === '' || path === '/') {
      var carousel = document.querySelector('.home-categories-carousel_container__Uru3C');
      if (carousel) {
        targets.push({ ref: carousel, pos: 'before' });
      } else {
        var divs = document.querySelectorAll('div');
        for (var i = 0; i < divs.length; i++) {
          var cls = divs[i].getAttribute('class') || '';
          if (cls.indexOf('px-2') !== -1 && cls.indexOf('md:px-0') !== -1) {
            targets.push({ ref: divs[i], pos: 'before' });
            break;
          }
        }
      }
    }

    var all = document.querySelectorAll('div');
    for (var j = 0; j < all.length; j++) {
      var c = all[j].getAttribute('class') || '';
      if (c.indexOf('grid-cols-1') !== -1 && c.indexOf('bg-white') !== -1 &&
          c.indexOf('lg:grid-cols-2') !== -1 && c.indexOf('relative') !== -1) {
        targets.push({ ref: all[j], pos: 'after' });
        break;
      }
    }

    return targets;
  }

  function insertAt(ref, pos, node) {
    var par = ref && ref.parentNode;
    if (!par) return false;
    if (pos === 'before') { par.insertBefore(node, ref); }
    else { var nx = ref.nextSibling; nx ? par.insertBefore(node, nx) : par.appendChild(node); }
    return true;
  }

  function fetchProducts(cb) {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Tenant-ID': TENANT_ID
      },
      credentials: 'include',
      body: JSON.stringify({ is_flash_sale: 'T', page_size: 20, page_num: 1 })
    })
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (j) {
      var items = j && j.data && j.data.items;
      if (!items || !items.length) { cb(null, null); return; }
      var endMs = null;
      items.forEach(function (it) {
        (it.flash_sale_programs || []).forEach(function (p) {
          if (p.to_time && p.status === 'A') {
            var t = new Date(p.to_time).getTime();
            if (!endMs || t < endMs) endMs = t;
          }
        });
      });
      if (!endMs || endMs < Date.now()) endMs = Date.now() + 6 * 3600000;
      cb(items, endMs);
    })
    .catch(function () { cb(null, null); });
  }

  function launch() {
    removeOldBanner();
    injectCSS();
    var targets = findTargets();
    if (!targets.length) return false;

    var wrappers = [];
    targets.forEach(function (t) {
      if (document.getElementById(WID)) return;
      var w = document.createElement('div');
      w.id = WID;
      if (insertAt(t.ref, t.pos, w)) {
        renderLoading(w, Date.now() + 3600000);
        wrappers.push(w);
      }
    });
    if (!wrappers.length) return false;

    fetchProducts(function (items, endMs) {
      if (!items || !items.length) {
        wrappers.forEach(function (w) { renderFallback(w); });
        return;
      }
      wrappers.forEach(function (w) { renderWidget(items, endMs, w); });
    });

    return true;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') setTimeout(fn, 200);
    else document.addEventListener('DOMContentLoaded', function () { setTimeout(fn, 200); });
  }

  ready(function () {
    if (!launch()) {
      var tries = 0;
      var iv = setInterval(function () {
        tries++;
        if (launch() || tries > 20) clearInterval(iv);
      }, 500);
    }
  });

})();
<\/script>

<script>
(function () {
{{DOMAIN_LOCK_LINE}}
  'use strict';

  var SITE = '{{SITE}}' || (window.location.protocol + '//' + window.location.hostname);
  var WID  = 'jj-home-fs';

  if (window[WID + '_loaded']) return;
  window[WID + '_loaded'] = true;

  var CSS = '' +
    '#' + WID + '{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
      'background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.08);margin:0 0 16px;overflow:hidden}' +
    '#' + WID + ' *{box-sizing:border-box !important}' +
    '.jjhfs-hd{display:flex !important;align-items:center;justify-content:space-between;padding:10px 14px 8px;border-bottom:1px solid #f0f0f0}' +
    '.jjhfs-left{display:flex !important;align-items:center;gap:8px}' +
    '.jjhfs-fire{font-size:20px;margin-right:4px}' +
    '.jjhfs-title{color:#ee4d2d;font-size:17px;font-weight:900;letter-spacing:-.3px}' +
    '.jjhfs-seeall{color:#ee4d2d;font-size:13px;font-weight:500;text-decoration:none;display:flex !important;align-items:center;gap:3px;white-space:nowrap}' +
    '.jjhfs-seeall:hover{text-decoration:underline}' +
    '.jjhfs-scr{overflow-x:auto !important;overflow-y:hidden !important;-webkit-overflow-scrolling:touch;scrollbar-width:none !important}' +
    '.jjhfs-scr::-webkit-scrollbar{display:none !important}' +
    '.jjhfs-row{display:grid !important;grid-template-columns:repeat(6,1fr) !important;' +
      'grid-template-rows:1fr !important;align-items:start !important;width:100% !important;min-width:660px !important}' +
    '.jjhfs-card{display:block !important;text-decoration:none !important;color:inherit !important;' +
      'background:#fff !important;transition:background .15s;padding:10px 6px !important;' +
      'border-right:1px solid #f2f2f2;overflow:hidden !important;min-width:0 !important}' +
    '.jjhfs-card:last-child{border-right:none !important}' +
    '.jjhfs-card:hover{background:#fdf0ee !important}' +
    '.jjhfs-imgw{position:relative !important;width:100% !important;padding-top:100% !important;' +
      'border-radius:6px;overflow:hidden !important;background:#f6f6f6;margin-bottom:7px;display:block !important}' +
    '.jjhfs-img,.jjhfs-vid{position:absolute !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;' +
      'width:100% !important;height:100% !important;object-fit:cover !important;transition:transform .3s}' +
    '.jjhfs-img{object-fit:contain !important;padding:4px}' +
    '.jjhfs-card:hover .jjhfs-img,.jjhfs-card:hover .jjhfs-vid{transform:scale(1.07)}' +
    '.jjhfs-name{font-size:12px !important;font-weight:700 !important;color:#333 !important;line-height:1.35 !important;' +
      'white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;' +
      'margin-bottom:7px !important;display:block !important;text-align:center !important}' +
    '.jjhfs-barw{position:relative !important;height:18px !important;border-radius:9px;overflow:hidden !important;background:#fde8e4;margin:0 1px}' +
    '.jjhfs-barf{position:absolute !important;left:0 !important;top:0 !important;bottom:0 !important;' +
      'background:linear-gradient(90deg,#f97316,#ee4d2d);border-radius:9px}' +
    '.jjhfs-barl{position:absolute !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;' +
      'display:flex !important;align-items:center;justify-content:center;' +
      'font-size:11px !important;font-weight:700;color:#fff !important;text-shadow:0 1px 2px rgba(0,0,0,.3);z-index:2}' +
    '@keyframes jjDot{0%,80%,100%{transform:scale(0);opacity:.3}40%{transform:scale(1);opacity:1}}';

  function injectCSS() {
    if (!document.getElementById(WID + '-css')) {
      var s = document.createElement('style'); s.id = WID + '-css'; s.textContent = CSS;
      (document.head || document.documentElement).appendChild(s);
    }
  }

  function buildHeader() {
    return '<div class="jjhfs-hd">' +
      '<div class="jjhfs-left">' +
        '<span class="jjhfs-fire">&#128293;</span>' +
        '<span class="jjhfs-title">S&#7843;n ph&#7849;m b&aacute;n ch&#7841;y h&ocirc;m nay</span>' +
      '</div>' +
      '<a class="jjhfs-seeall" href="' + SITE + '" target="_blank">Xem t&#7845;t c&#7843; ' +
        '<svg width="5" height="9" viewBox="0 0 5 9"><path d="M1 1l3 3.5L1 8" stroke="#ee4d2d" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>' +
      '</a>' +
    '</div>';
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function bestImg(card) {
    if (card.querySelector('iframe')) return null;

    var vid = card.querySelector('video');
    if (vid) {
      var poster = vid.getAttribute('poster') || '';
      if (poster) return { type: 'img', src: poster };
      var src0 = vid.querySelector('source');
      if (src0) { var vs = src0.getAttribute('src') || ''; if (vs) return { type: 'vid', src: vs }; }
      var vs2 = vid.getAttribute('src') || '';
      if (vs2) return { type: 'vid', src: vs2 };
    }
    var imgs = card.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i];
      var raw = el.getAttribute('src') || el.getAttribute('data-src') || '';
      var wAttr = parseInt(el.getAttribute('width') || '999', 10);
      if (wAttr < 40) continue;
      var ss = el.getAttribute('srcset') || '';
      if (ss) {
        var best = ''; var bestW = 0;
        ss.split(',').forEach(function (seg) {
          var p = seg.trim().split(/\\s+/);
          var w = parseInt(p[1] || '0', 10);
          if (w > bestW && p[0]) { bestW = w; best = p[0]; }
        });
        if (best) return { type: 'img', src: best };
      }
      if (raw) return { type: 'img', src: raw };
    }
    return null;
  }

  function bestName(card) {
    var clone = card.cloneNode(true);
    var jjEls = clone.querySelectorAll('[data-jjs]');
    for (var i = jjEls.length - 1; i >= 0; i--) {
      if (jjEls[i].parentNode) jjEls[i].parentNode.removeChild(jjEls[i]);
    }
    var divs = clone.querySelectorAll('div');
    for (var i = divs.length - 1; i >= 0; i--) {
      var cl = divs[i].getAttribute('class') || '';
      if (cl.indexOf('flex') !== -1 && cl.indexOf('w-full') !== -1 && cl.indexOf('items-center') !== -1) {
        if (divs[i].parentNode) divs[i].parentNode.removeChild(divs[i]);
      }
    }
    var txt = (clone.textContent || '').replace(/[\\d,\\.]{3,}\\s*[đdĐ]/g, '').replace(/\\s+/g, ' ').trim();
    if (txt.length >= 5) return txt.slice(0, 80);
    var ps = card.querySelectorAll('p');
    for (var i = 0; i < ps.length; i++) {
      var t = (ps[i].textContent || '').trim();
      if (t.length >= 5 && !/^[\\d,\\. ]+[đdĐ]?$/.test(t)) return t.slice(0, 80);
    }
    return '';
  }

  function scanGrid(grid) {
    var seen = {}; var items = [];
    var cards = grid.children;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];

      if (card.querySelector('iframe')) continue;

      var a = card.querySelector('a[href*="_p"]');
      if (!a) continue;
      var href = a.getAttribute('href') || '';
      var match = href.match(/_p(\\d+)/);
      if (!match) continue;
      var pid = match[1];
      if (seen[pid]) continue;
      seen[pid] = 1;
      var fullHref = href.indexOf('http') === 0 ? href : SITE + href;

      var media = bestImg(card);
      if (!media) continue;

      items.push({ href: fullHref, media: media, name: bestName(card) });
    }
    return shuffle(items).slice(0, 6);
  }

  function buildCards(items) {
    return items.map(function (it) {
      var pct = 85 + Math.floor(Math.random() * 14);
      var mediaHtml = '';
      if (it.media) {
        if (it.media.type === 'vid') {
          mediaHtml = '<video class="jjhfs-vid" src="' + it.media.src + '" autoplay muted loop playsinline></video>';
        } else {
          mediaHtml = '<img class="jjhfs-img" src="' + it.media.src + '" alt="" loading="lazy">';
        }
      }
      return '<a class="jjhfs-card" href="' + it.href + '">' +
        '<div class="jjhfs-imgw">' + mediaHtml + '</div>' +
        '<div class="jjhfs-name">' + (it.name || '').replace(/</g, '&lt;') + '</div>' +
        '<div class="jjhfs-barw">' +
          '<div class="jjhfs-barf" style="width:' + pct + '%"></div>' +
          '<div class="jjhfs-barl">&#272;&atilde; B&aacute;n ' + pct + '%</div>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  function renderWidget(items, w) {
    if (!w || !w.parentNode) return;
    w.innerHTML = buildHeader() +
      '<div class="jjhfs-scr"><div class="jjhfs-row">' + buildCards(items) + '</div></div>';
  }

  function findGrid() {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      var cls = divs[i].getAttribute('class') || '';
      if (cls.indexOf('grid-cols-2') !== -1 && cls.indexOf('gap-2') !== -1 &&
          cls.indexOf('md:grid-cols-3') !== -1 && cls.indexOf('lg:grid-cols-6') !== -1) return divs[i];
    }
    return null;
  }

  function isHomepage() {
    var p = window.location.pathname.replace(/\\/$/,  '');
    return p === '' || p === '/';
  }

  function launch() {
    if (!isHomepage()) return true;
    var grid = findGrid();
    if (!grid || grid.children.length < 6) return false;
    if (document.getElementById(WID)) return true;
    var items = scanGrid(grid);
    if (items.length < 3) return false;
    var w = document.createElement('div');
    w.id = WID;
    var parent = grid.parentNode;
    if (!parent) return false;
    parent.insertBefore(w, grid);
    injectCSS();
    renderWidget(items, w);
    return true;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') setTimeout(fn, 500);
    else document.addEventListener('DOMContentLoaded', function () { setTimeout(fn, 500); });
  }

  ready(function () {
    if (!launch()) {
      var tries = 0;
      var iv = setInterval(function () {
        tries++;
        if (launch() || tries > 40) clearInterval(iv);
      }, 400);
    }
  });

})();
<\/script>

<script>
(function(){
{{DOMAIN_LOCK_LINE}}
  'use strict';

  if(window.location.pathname.replace(/\\/$/,'') !== '') return;

  var HTML =
    '<div id="sdn-gy-hdr-card">' +
      '<div id="sdn-gy-hdr-tab">' +
        '<span class="gy-icon">&#x2728;</span>' +
        '<span class="gy-txt">G&#7907;i &Yacute; H&ocirc;m Nay</span>' +
        '<span class="gy-badge">D&agrave;nh ri&ecirc;ng cho b&#7841;n</span>' +
      '</div>' +
    '</div>';

  function inject() {
    if (document.getElementById('sdn-gy-hdr')) return true;
    var jjhfs = document.getElementById('jj-home-fs');
    if (!jjhfs) return false;
    var w = document.createElement('div');
    w.id = 'sdn-gy-hdr';
    w.innerHTML = HTML;
    jjhfs.parentNode.insertBefore(w, jjhfs.nextSibling);
    return true;
  }

  var n = 0;
  function run() {
    n++;
    if (inject()) return;
    if (n < 60) setTimeout(run, 400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 800); });
  } else {
    setTimeout(run, 800);
  }

  try {
    new MutationObserver(function () {
      if (!document.getElementById('sdn-gy-hdr')) inject();
    }).observe(document.body, { childList: true, subtree: true });
  } catch(e) {}

})();
<\/script>`},{id:"home-product",name:"[Trang chủ] Sản phẩm trang chủ",description:"Widget sản phẩm bán chạy + banner Gợi Ý Hôm Nay + bo góc thẻ và nút xem giá sỉ + menu danh mục trang chủ",category:"Trang chủ",fields:[{key:"SITE",label:"Domain website (để trống = tự động theo domain đang chạy)",placeholder:"https://junjin.ratxin.vn",type:"text",description:"Tên miền cố định cho các link trong script. Để trống: script tự nhận diện domain hiện tại. Điền nếu muốn dùng cho website khách — VD: https://shopcuakhach.vn"},{key:"PRIMARY_COLOR",label:"Màu thương hiệu (tùy chọn)",placeholder:"Ví dụ: #ee4d2d — bỏ trống = đỏ cam mặc định",type:"color",description:"Mã hex màu chủ đạo — VD: #ee4d2d (đỏ cam), #2563eb (xanh dương), #66ba32 (xanh lá). Áp dụng cho tiêu đề, thanh tiến trình, banner và nút."}],template:`<script>
(function () {
  'use strict';

  var SITE = '{{SITE}}' || (window.location.protocol + '//' + window.location.hostname);
  var WID  = 'jj-home-fs';
  var PC   = '{{PRIMARY_COLOR}}' || '#ee4d2d';

  if (window[WID + '_loaded']) return;
  window[WID + '_loaded'] = true;

  var CSS = '' +
    '#' + WID + '{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
      'background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.08);margin:0 0 16px;overflow:hidden}' +
    '#' + WID + ' *{box-sizing:border-box !important}' +
    '.jjhfs-hd{display:flex !important;align-items:center;justify-content:space-between;padding:10px 14px 8px;border-bottom:1px solid #f0f0f0}' +
    '.jjhfs-left{display:flex !important;align-items:center;gap:8px}' +
    '.jjhfs-fire{font-size:20px;margin-right:4px}' +
    '.jjhfs-title{color:'+PC+';font-size:17px;font-weight:900;letter-spacing:-.3px}' +
    '.jjhfs-seeall{color:'+PC+';font-size:13px;font-weight:500;text-decoration:none;display:flex !important;align-items:center;gap:3px;white-space:nowrap}' +
    '.jjhfs-seeall:hover{text-decoration:underline}' +
    '.jjhfs-scr{overflow-x:auto !important;overflow-y:hidden !important;-webkit-overflow-scrolling:touch;scrollbar-width:none !important}' +
    '.jjhfs-scr::-webkit-scrollbar{display:none !important}' +
    '.jjhfs-row{display:grid !important;grid-template-columns:repeat(6,1fr) !important;' +
      'grid-template-rows:1fr !important;align-items:start !important;width:100% !important;min-width:660px !important}' +
    '.jjhfs-card{display:block !important;text-decoration:none !important;color:inherit !important;' +
      'background:#fff !important;transition:background .15s;padding:10px 6px !important;' +
      'border-right:1px solid #f2f2f2;overflow:hidden !important;min-width:0 !important}' +
    '.jjhfs-card:last-child{border-right:none !important}' +
    '.jjhfs-card:hover{background:#fdf0ee !important}' +
    '.jjhfs-imgw{position:relative !important;width:100% !important;padding-top:100% !important;' +
      'border-radius:6px;overflow:hidden !important;background:#f6f6f6;margin-bottom:7px;display:block !important}' +
    '.jjhfs-img,.jjhfs-vid{position:absolute !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;' +
      'width:100% !important;height:100% !important;object-fit:cover !important;transition:transform .3s}' +
    '.jjhfs-img{object-fit:contain !important;padding:4px}' +
    '.jjhfs-card:hover .jjhfs-img,.jjhfs-card:hover .jjhfs-vid{transform:scale(1.07)}' +
    '.jjhfs-name{font-size:12px !important;font-weight:700 !important;color:#333 !important;line-height:1.35 !important;' +
      'white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;' +
      'margin-bottom:7px !important;display:block !important;text-align:center !important}' +
    '.jjhfs-barw{position:relative !important;height:18px !important;border-radius:9px;overflow:hidden !important;background:#fde8e4;margin:0 1px}' +
    '.jjhfs-barf{position:absolute !important;left:0 !important;top:0 !important;bottom:0 !important;' +
      'background:linear-gradient(90deg,#f97316,'+PC+');border-radius:9px}' +
    '.jjhfs-barl{position:absolute !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;' +
      'display:flex !important;align-items:center;justify-content:center;' +
      'font-size:11px !important;font-weight:700;color:#fff !important;text-shadow:0 1px 2px rgba(0,0,0,.3);z-index:2}' +
    '@keyframes jjDot{0%,80%,100%{transform:scale(0);opacity:.3}40%{transform:scale(1);opacity:1}}' +
    '#sdn-gy-hdr-card{background:linear-gradient(90deg,#c0392b 0%,'+PC+' 40%,#ff6b35 70%,#f39c12 100%) !important;' +
      'box-shadow:0 2px 8px rgba(0,0,0,.2) !important}';

  function injectCSS() {
    if (!document.getElementById(WID + '-css')) {
      var s = document.createElement('style'); s.id = WID + '-css'; s.textContent = CSS;
      (document.head || document.documentElement).appendChild(s);
    }
  }

  function buildHeader() {
    return '<div class="jjhfs-hd">' +
      '<div class="jjhfs-left">' +
        '<span class="jjhfs-fire">&#128293;</span>' +
        '<span class="jjhfs-title">S&#7843;n ph&#7849;m b&aacute;n ch&#7841;y h&ocirc;m nay</span>' +
      '</div>' +
      '<a class="jjhfs-seeall" href="' + SITE + '" target="_blank">Xem t&#7845;t c&#7843; ' +
        '<svg width="5" height="9" viewBox="0 0 5 9"><path d="M1 1l3 3.5L1 8" stroke="'+PC+'" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>' +
      '</a>' +
    '</div>';
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function bestImg(card) {
    if (card.querySelector('iframe')) return null;
    var vid = card.querySelector('video');
    if (vid) {
      var poster = vid.getAttribute('poster') || '';
      if (poster) return { type: 'img', src: poster };
      var src0 = vid.querySelector('source');
      if (src0) { var vs = src0.getAttribute('src') || ''; if (vs) return { type: 'vid', src: vs }; }
      var vs2 = vid.getAttribute('src') || '';
      if (vs2) return { type: 'vid', src: vs2 };
    }
    var imgs = card.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i];
      var raw = el.getAttribute('src') || el.getAttribute('data-src') || '';
      var wAttr = parseInt(el.getAttribute('width') || '999', 10);
      if (wAttr < 40) continue;
      var ss = el.getAttribute('srcset') || '';
      if (ss) {
        var best = ''; var bestW = 0;
        ss.split(',').forEach(function (seg) {
          var p = seg.trim().split(/\\s+/);
          var w = parseInt(p[1] || '0', 10);
          if (w > bestW && p[0]) { bestW = w; best = p[0]; }
        });
        if (best) return { type: 'img', src: best };
      }
      if (raw) return { type: 'img', src: raw };
    }
    return null;
  }

  function bestName(card) {
    var clone = card.cloneNode(true);
    var jjEls = clone.querySelectorAll('[data-jjs]');
    for (var i = jjEls.length - 1; i >= 0; i--) {
      if (jjEls[i].parentNode) jjEls[i].parentNode.removeChild(jjEls[i]);
    }
    var divs = clone.querySelectorAll('div');
    for (var i = divs.length - 1; i >= 0; i--) {
      var cl = divs[i].getAttribute('class') || '';
      if (cl.indexOf('flex') !== -1 && cl.indexOf('w-full') !== -1 && cl.indexOf('items-center') !== -1) {
        if (divs[i].parentNode) divs[i].parentNode.removeChild(divs[i]);
      }
    }
    var txt = (clone.textContent || '').replace(/[\\d,\\.]{3,}\\s*[đdĐ]/g, '').replace(/\\s+/g, ' ').trim();
    if (txt.length >= 5) return txt.slice(0, 80);
    var ps = card.querySelectorAll('p');
    for (var i = 0; i < ps.length; i++) {
      var t = (ps[i].textContent || '').trim();
      if (t.length >= 5 && !/^[\\d,\\. ]+[đdĐ]?$/.test(t)) return t.slice(0, 80);
    }
    return '';
  }

  function scanGrid(grid) {
    var seen = {}; var items = [];
    var cards = grid.children;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (card.querySelector('iframe')) continue;
      var a = card.querySelector('a[href*="_p"]');
      if (!a) continue;
      var href = a.getAttribute('href') || '';
      var match = href.match(/_p(\\d+)/);
      if (!match) continue;
      var pid = match[1];
      if (seen[pid]) continue;
      seen[pid] = 1;
      var fullHref = href.indexOf('http') === 0 ? href : SITE + href;
      var media = bestImg(card);
      if (!media) continue;
      items.push({ href: fullHref, media: media, name: bestName(card) });
    }
    return shuffle(items).slice(0, 6);
  }

  function buildCards(items) {
    return items.map(function (it) {
      var pct = 85 + Math.floor(Math.random() * 14);
      var mediaHtml = '';
      if (it.media) {
        if (it.media.type === 'vid') {
          mediaHtml = '<video class="jjhfs-vid" src="' + it.media.src + '" autoplay muted loop playsinline></video>';
        } else {
          mediaHtml = '<img class="jjhfs-img" src="' + it.media.src + '" alt="" loading="lazy">';
        }
      }
      return '<a class="jjhfs-card" href="' + it.href + '">' +
        '<div class="jjhfs-imgw">' + mediaHtml + '</div>' +
        '<div class="jjhfs-name">' + (it.name || '').replace(/</g, '&lt;') + '</div>' +
        '<div class="jjhfs-barw">' +
          '<div class="jjhfs-barf" style="width:' + pct + '%"></div>' +
          '<div class="jjhfs-barl">&#272;&atilde; B&aacute;n ' + pct + '%</div>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  function renderWidget(items, w) {
    if (!w || !w.parentNode) return;
    w.innerHTML = buildHeader() +
      '<div class="jjhfs-scr"><div class="jjhfs-row">' + buildCards(items) + '</div></div>';
  }

  function findGrid() {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      var cls = divs[i].getAttribute('class') || '';
      if (cls.indexOf('grid-cols-2') !== -1 && cls.indexOf('gap-2') !== -1 &&
          cls.indexOf('md:grid-cols-3') !== -1 && cls.indexOf('lg:grid-cols-6') !== -1) return divs[i];
    }
    return null;
  }

  function isHomepage() {
    var p = window.location.pathname.replace(/\\/$/,  '');
    return p === '' || p === '/';
  }

  function launch() {
    if (!isHomepage()) return true;
    var grid = findGrid();
    if (!grid || grid.children.length < 6) return false;
    if (document.getElementById(WID)) return true;
    var items = scanGrid(grid);
    if (items.length < 3) return false;
    var w = document.createElement('div');
    w.id = WID;
    var parent = grid.parentNode;
    if (!parent) return false;
    parent.insertBefore(w, grid);
    injectCSS();
    renderWidget(items, w);
    return true;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') setTimeout(fn, 500);
    else document.addEventListener('DOMContentLoaded', function () { setTimeout(fn, 500); });
  }

  ready(function () {
    if (!launch()) {
      var tries = 0;
      var iv = setInterval(function () {
        tries++;
        if (launch() || tries > 40) clearInterval(iv);
      }, 400);
    }
  });

})();
<\/script>
<style>
#sdn-gy-hdr{width:100%;margin:8px 0 0;padding:0;box-sizing:border-box}
#sdn-gy-hdr-card{background:linear-gradient(90deg,#c0392b 0%,#ee4d2d 40%,#ff6b35 70%,#f39c12 100%);border-radius:8px 8px 0 0;overflow:hidden;position:relative;box-shadow:0 2px 8px rgba(238,77,45,.25)}
#sdn-gy-hdr-card::before{content:'';position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.08)}
#sdn-gy-hdr-card::after{content:'';position:absolute;bottom:-20px;left:60px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.06)}
#sdn-gy-hdr-tab{display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 20px;position:relative;z-index:1}
#sdn-gy-hdr-tab .gy-icon{font-size:22px;line-height:1}
#sdn-gy-hdr-tab .gy-txt{font-size:17px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase;text-shadow:0 1px 4px rgba(0,0,0,.2)}
#sdn-gy-hdr-tab .gy-badge{background:rgba(255,255,255,.22);color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px;letter-spacing:.5px;border:1px solid rgba(255,255,255,.35)}
</style>
<script>
(function(){
  'use strict';
  if(window.location.pathname.replace(/\\/$/,'') !== '') return;
  var HTML =
    '<div id="sdn-gy-hdr-card">' +
      '<div id="sdn-gy-hdr-tab">' +
        '<span class="gy-icon">&#x2728;</span>' +
        '<span class="gy-txt">G&#7907;i &Yacute; H&ocirc;m Nay</span>' +
        '<span class="gy-badge">D&agrave;nh ri&ecirc;ng cho b&#7841;n</span>' +
      '</div>' +
    '</div>';
  function inject() {
    if (document.getElementById('sdn-gy-hdr')) return true;
    var jjhfs = document.getElementById('jj-home-fs');
    if (!jjhfs) return false;
    var w = document.createElement('div');
    w.id = 'sdn-gy-hdr';
    w.innerHTML = HTML;
    jjhfs.parentNode.insertBefore(w, jjhfs.nextSibling);
    return true;
  }
  var n = 0;
  function run() {
    n++;
    if (inject()) return;
    if (n < 60) setTimeout(run, 400);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 800); });
  } else {
    setTimeout(run, 800);
  }
  try {
    new MutationObserver(function () {
      if (!document.getElementById('sdn-gy-hdr')) inject();
    }).observe(document.body, { childList: true, subtree: true });
  } catch(e) {}
})();
<\/script>
<script>
(function() {
  var PC = '{{PRIMARY_COLOR}}' || '#d05c21';
  var SITE = '{{SITE}}' || (window.location.protocol + '//' + window.location.hostname);
  var style = document.createElement('style');
  style.innerHTML =
    '.gtm-rounded-fixed{border-radius:16px !important;border-bottom-left-radius:16px !important;border-bottom-right-radius:16px !important;overflow:hidden !important;border:none !important}' +
    '.gtm-rounded-fixed .rounded-b-md.border{border-radius:16px !important;border-bottom-left-radius:16px !important;border-bottom-right-radius:16px !important;overflow:hidden !important;border:none !important}';
  document.head.appendChild(style);
  function updateProductCards() {
    var cards = document.querySelectorAll('.rounded-b-md.bg-white.text-black');
    for (var i = 0; i < cards.length; i++) {
      if (!cards[i].classList.contains('gtm-rounded-fixed')) cards[i].classList.add('gtm-rounded-fixed');
    }
    var priceElements = document.querySelectorAll('.text-red-500');
    for (var j = 0; j < priceElements.length; j++) {
      var price = priceElements[j];
      var text = price.innerText || price.textContent;
      if (text.indexOf('Giá Liên Hệ') !== -1 && !price.classList.contains('gtm-price-replaced')) {
        price.classList.add('gtm-price-replaced');
        var unlockBtn = document.createElement('div');
        unlockBtn.innerHTML = 'B&#7845;m Xem Gi&aacute; S&#7881;';
        unlockBtn.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;color:#fff;background:'+PC+';border:2px dashed '+PC+';padding:8px 16px;border-radius:24px;font-weight:bold;font-size:15px;cursor:pointer;margin-top:4px;';
        unlockBtn.onclick = function (e) { e.preventDefault(); e.stopPropagation(); window.location.href = SITE + '/dang-nhap'; };
        price.parentNode.replaceChild(unlockBtn, price);
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateProductCards);
  } else {
    updateProductCards();
  }
  new MutationObserver(function() { updateProductCards(); }).observe(document.body, { childList: true, subtree: true });
})();
<\/script>

<!-- Danh mục trang chủ (DANH MỤC) -->
<style>
#jj-cat-wrap{background:#fff;border:1px solid #f0f0f0;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,.06);margin:0 0 16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;overflow:hidden;box-sizing:border-box;}
#jj-cat-wrap *{box-sizing:border-box;}
#jj-cat-hd{display:flex;align-items:center;justify-content:space-between;padding:12px 16px 0;}
#jj-cat-title{font-size:13px;font-weight:700;color:#ee4d2d;letter-spacing:.04em;text-transform:uppercase;border-bottom:2px solid #ee4d2d;padding-bottom:6px;}
#jj-cat-body{position:relative;}
.jjcat-row{display:flex;flex-wrap:nowrap;justify-content:space-evenly;padding:8px 8px 10px;}
.jjcat-row+.jjcat-row{border-top:1px solid #f5f5f5;padding-top:6px;}
.jjcat-item{flex:1 1 0;min-width:0;max-width:none;display:flex;flex-direction:column;align-items:center;padding:6px 4px 4px;text-decoration:none;color:#333;cursor:pointer;border-radius:6px;transition:background .15s;}
.jjcat-item:hover{background:#fff5f5;}
.jjcat-ico{width:60px;height:60px;border-radius:50%;background:#f5f5f5;display:flex;align-items:center;justify-content:center;margin-bottom:7px;font-size:28px;line-height:1;transition:transform .2s ease;}
.jjcat-item:hover .jjcat-ico{transform:scale(1.08);}
.jjcat-ico.red{background:#fff0ee;}
.jjcat-lbl{font-size:11.5px;color:#333;text-align:center;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word;}
@media(max-width:767px){.jjcat-item{flex:1 1 0;min-width:54px;}.jjcat-ico{width:48px;height:48px;font-size:22px;}.jjcat-lbl{font-size:10px;}}
@media(max-width:479px){.jjcat-row{flex-wrap:wrap;}.jjcat-item{flex:0 0 20%;min-width:0;}.jjcat-ico{width:42px;height:42px;font-size:19px;}.jjcat-lbl{font-size:9.5px;}}
</style>
<script>
(function(){
  var SITE='{{SITE}}' || (window.location.protocol + '//' + window.location.hostname);
  var CATS_ROW1=[
    {label:'Flash Sale',                  icon:'⚡',url:'/flash-sale',          red:true},
    {label:'Sạc dự phòng',  icon:'🔋',url:'/pinsac-du-phong-ac-quy_c12'},
    {label:'Máy lau nhà',          icon:'🧹',url:'/tim-kiem?q=m%C3%A1y+lau+nh%C3%A0'},
    {label:'Robot Hút bụi',      icon:'🤖',url:'/robot-may-hut-bui-lau-nha_c54'},
    {label:'Điện thoại & PK',icon:'📱',url:'/dien-thoai-phu-kien_c1'},
    {label:'Máy tính & Laptop',    icon:'💻',url:'/may-tinh-laptop_c34'},
    {label:'TB Âm thanh',             icon:'🎵',url:'/thiet-bi-am-thanh_c3'},
    {label:'TB Điện Gia dụng',icon:'🏠',url:'/thiet-bi-dien-gia-dung_c2'},
    {label:'Củ cáp sạc',   icon:'🔌',url:'/cu-cap-sac_c10'},
    {label:'Ô tô & Xe máy',  icon:'🚗',url:'/o-to-xe-may_c30'}
  ];
  var CATS_ROW2=[
    {label:'Nhà cửa Đời sống',icon:'🛋',url:'/nha-cua-doi-song_c4'},
    {label:'Cắm trại Phượt',icon:'⛺',url:'/do-camping-phuot-cam-trai_c61'},
    {label:'Mẹ và Bé',       icon:'👶',url:'/me-va-be_c71'},
    {label:'Văn phòng phẩm',icon:'📎',url:'/van-phong-pham_c70'},
    {label:'Sạc nhanh GaN',         icon:'⚡',url:'/tim-kiem?q=s%E1%BA%A1c+nhanh+gan'},
    {label:'Máy ứp chậm',  icon:'🥤',url:'/tim-kiem?q=m%C3%A1y+%C3%A9p+ch%E1%BA%ADm'},
    {label:'Quạt điện',   icon:'🌀',url:'/tim-kiem?q=qu%E1%BA%A1t+%C4%91i%E1%BB%87n'},
    {label:'Đồng hồ TM',  icon:'⌚',url:'/tim-kiem?q=%C4%91%E1%BB%93ng+h%E1%BB%93+th%C3%B4ng+minh'},
    {label:'Bộ sạc nhanh',     icon:'🔓',url:'/tim-kiem?q=b%E1%BB%99+s%E1%BA%A1c+nhanh'},
    {label:'Xem tất cả',       icon:'⭐',url:'/tim-kiem',red:true}
  ];

  function makeRow(cats){
    var row=document.createElement('div');
    row.className='jjcat-row';
    cats.forEach(function(c){
      var a=document.createElement('a');
      a.className='jjcat-item';
      a.href=SITE+c.url;
      var ico=document.createElement('div');
      ico.className='jjcat-ico'+(c.red?' red':'');
      ico.textContent=c.icon;
      var lbl=document.createElement('div');
      lbl.className='jjcat-lbl';
      lbl.textContent=c.label;
      a.appendChild(ico);a.appendChild(lbl);
      row.appendChild(a);
    });
    return row;
  }

  function build(){
    if(document.getElementById('jj-cat-wrap')) return true;
    var old=document.querySelector('.home-categories-carousel_container__Uru3C');
    if(!old) return false;
    old.style.cssText='display:none!important;';

    var wrap=document.createElement('div');
    wrap.id='jj-cat-wrap';

    var hd=document.createElement('div');
    hd.id='jj-cat-hd';
    var title=document.createElement('div');
    title.id='jj-cat-title';
    title.textContent='DANH MỤC';
    hd.appendChild(title);
    wrap.appendChild(hd);

    var body=document.createElement('div');
    body.id='jj-cat-body';
    body.appendChild(makeRow(CATS_ROW1));
    body.appendChild(makeRow(CATS_ROW2));
    wrap.appendChild(body);

    old.parentNode.insertBefore(wrap,old);
    return true;
  }

  function ready(fn){
    if(document.readyState!=='loading') setTimeout(fn,100);
    else document.addEventListener('DOMContentLoaded',function(){setTimeout(fn,100);});
  }

  ready(function(){
    if(!build()){
      var tries=0,iv=setInterval(function(){
        tries++;
        if(build()||tries>20) clearInterval(iv);
      },400);
    }
  });
})();
<\/script>`},{id:"home-bestseller",name:"🔥 Sản phẩm bán chạy hôm nay",description:"Widget cuộn ngang 6 sản phẩm bán chạy từ lưới trang chủ, có thanh tiến trình Đã Bán X% + menu danh mục trang chủ",category:"Trang chủ",fields:[{key:"SITE",label:"Domain website (để trống = tự động theo domain đang chạy)",placeholder:"https://junjin.ratxin.vn",type:"text",description:"Tên miền dùng cho link 'Xem tất cả' và menu danh mục. Để trống: script tự nhận diện domain hiện tại. Điền nếu muốn cố định cho website khách — VD: https://shopcuakhach.vn"},{key:"PRIMARY_COLOR",label:"Màu thương hiệu (tùy chọn)",placeholder:"Ví dụ: #ee4d2d — bỏ trống = đỏ cam mặc định",type:"color",description:"Mã hex màu chủ đạo — VD: #ee4d2d (đỏ cam), #2563eb (xanh dương), #66ba32 (xanh lá). Áp dụng cho tiêu đề, thanh tiến trình và nút Xem tất cả."}],template:`<script>
(function () {
  'use strict';

  var SITE = '{{SITE}}' || (window.location.protocol + '//' + window.location.hostname);
  var WID  = 'jj-home-fs';
  var PC   = '{{PRIMARY_COLOR}}' || '#ee4d2d';

  if (window[WID + '_loaded']) return;
  window[WID + '_loaded'] = true;

  var CSS = '' +
    '#' + WID + '{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
      'background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.08);margin:0 0 16px;overflow:hidden}' +
    '#' + WID + ' *{box-sizing:border-box !important}' +
    '.jjhfs-hd{display:flex !important;align-items:center;justify-content:space-between;padding:10px 14px 8px;border-bottom:1px solid #f0f0f0}' +
    '.jjhfs-left{display:flex !important;align-items:center;gap:8px}' +
    '.jjhfs-fire{font-size:20px;margin-right:4px}' +
    '.jjhfs-title{color:'+PC+';font-size:17px;font-weight:900;letter-spacing:-.3px}' +
    '.jjhfs-seeall{color:'+PC+';font-size:13px;font-weight:500;text-decoration:none;display:flex !important;align-items:center;gap:3px;white-space:nowrap}' +
    '.jjhfs-seeall:hover{text-decoration:underline}' +
    '.jjhfs-scr{overflow-x:auto !important;overflow-y:hidden !important;-webkit-overflow-scrolling:touch;scrollbar-width:none !important}' +
    '.jjhfs-scr::-webkit-scrollbar{display:none !important}' +
    '.jjhfs-row{display:grid !important;grid-template-columns:repeat(6,1fr) !important;' +
      'grid-template-rows:1fr !important;align-items:start !important;width:100% !important;min-width:660px !important}' +
    '.jjhfs-card{display:block !important;text-decoration:none !important;color:inherit !important;' +
      'background:#fff !important;transition:background .15s;padding:10px 6px !important;' +
      'border-right:1px solid #f2f2f2;overflow:hidden !important;min-width:0 !important}' +
    '.jjhfs-card:last-child{border-right:none !important}' +
    '.jjhfs-card:hover{background:#fdf0ee !important}' +
    '.jjhfs-imgw{position:relative !important;width:100% !important;padding-top:100% !important;' +
      'border-radius:6px;overflow:hidden !important;background:#f6f6f6;margin-bottom:7px;display:block !important}' +
    '.jjhfs-img,.jjhfs-vid{position:absolute !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;' +
      'width:100% !important;height:100% !important;object-fit:cover !important;transition:transform .3s}' +
    '.jjhfs-img{object-fit:contain !important;padding:4px}' +
    '.jjhfs-card:hover .jjhfs-img,.jjhfs-card:hover .jjhfs-vid{transform:scale(1.07)}' +
    '.jjhfs-name{font-size:12px !important;font-weight:700 !important;color:#333 !important;line-height:1.35 !important;' +
      'white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;' +
      'margin-bottom:7px !important;display:block !important;text-align:center !important}' +
    '.jjhfs-barw{position:relative !important;height:18px !important;border-radius:9px;overflow:hidden !important;background:#fde8e4;margin:0 1px}' +
    '.jjhfs-barf{position:absolute !important;left:0 !important;top:0 !important;bottom:0 !important;' +
      'background:linear-gradient(90deg,#f97316,'+PC+');border-radius:9px}' +
    '.jjhfs-barl{position:absolute !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;' +
      'display:flex !important;align-items:center;justify-content:center;' +
      'font-size:11px !important;font-weight:700;color:#fff !important;text-shadow:0 1px 2px rgba(0,0,0,.3);z-index:2}' +
    '@keyframes jjDot{0%,80%,100%{transform:scale(0);opacity:.3}40%{transform:scale(1);opacity:1}}';

  function injectCSS() {
    if (!document.getElementById(WID + '-css')) {
      var s = document.createElement('style'); s.id = WID + '-css'; s.textContent = CSS;
      (document.head || document.documentElement).appendChild(s);
    }
  }

  function buildHeader() {
    return '<div class="jjhfs-hd">' +
      '<div class="jjhfs-left">' +
        '<span class="jjhfs-fire">&#128293;</span>' +
        '<span class="jjhfs-title">S&#7843;n ph&#7849;m b&aacute;n ch&#7841;y h&ocirc;m nay</span>' +
      '</div>' +
      '<a class="jjhfs-seeall" href="' + SITE + '" target="_blank">Xem t&#7845;t c&#7843; ' +
        '<svg width="5" height="9" viewBox="0 0 5 9"><path d="M1 1l3 3.5L1 8" stroke="'+PC+'" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>' +
      '</a>' +
    '</div>';
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function bestImg(card) {
    if (card.querySelector('iframe')) return null;
    var vid = card.querySelector('video');
    if (vid) {
      var poster = vid.getAttribute('poster') || '';
      if (poster) return { type: 'img', src: poster };
      var src0 = vid.querySelector('source');
      if (src0) { var vs = src0.getAttribute('src') || ''; if (vs) return { type: 'vid', src: vs }; }
      var vs2 = vid.getAttribute('src') || '';
      if (vs2) return { type: 'vid', src: vs2 };
    }
    var imgs = card.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i];
      var raw = el.getAttribute('src') || el.getAttribute('data-src') || '';
      var wAttr = parseInt(el.getAttribute('width') || '999', 10);
      if (wAttr < 40) continue;
      var ss = el.getAttribute('srcset') || '';
      if (ss) {
        var best = ''; var bestW = 0;
        ss.split(',').forEach(function (seg) {
          var p = seg.trim().split(/\\s+/);
          var w = parseInt(p[1] || '0', 10);
          if (w > bestW && p[0]) { bestW = w; best = p[0]; }
        });
        if (best) return { type: 'img', src: best };
      }
      if (raw) return { type: 'img', src: raw };
    }
    return null;
  }

  function bestName(card) {
    var clone = card.cloneNode(true);
    var jjEls = clone.querySelectorAll('[data-jjs]');
    for (var i = jjEls.length - 1; i >= 0; i--) {
      if (jjEls[i].parentNode) jjEls[i].parentNode.removeChild(jjEls[i]);
    }
    var divs = clone.querySelectorAll('div');
    for (var i = divs.length - 1; i >= 0; i--) {
      var cl = divs[i].getAttribute('class') || '';
      if (cl.indexOf('flex') !== -1 && cl.indexOf('w-full') !== -1 && cl.indexOf('items-center') !== -1) {
        if (divs[i].parentNode) divs[i].parentNode.removeChild(divs[i]);
      }
    }
    var txt = (clone.textContent || '').replace(/[\\d,\\.]{3,}\\s*[đdĐ]/g, '').replace(/\\s+/g, ' ').trim();
    if (txt.length >= 5) return txt.slice(0, 80);
    var ps = card.querySelectorAll('p');
    for (var i = 0; i < ps.length; i++) {
      var t = (ps[i].textContent || '').trim();
      if (t.length >= 5 && !/^[\\d,\\. ]+[đdĐ]?$/.test(t)) return t.slice(0, 80);
    }
    return '';
  }

  function scanGrid(grid) {
    var seen = {}; var items = [];
    var cards = grid.children;
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (card.querySelector('iframe')) continue;
      var a = card.querySelector('a[href*="_p"]');
      if (!a) continue;
      var href = a.getAttribute('href') || '';
      var match = href.match(/_p(\\d+)/);
      if (!match) continue;
      var pid = match[1];
      if (seen[pid]) continue;
      seen[pid] = 1;
      var fullHref = href.indexOf('http') === 0 ? href : SITE + href;
      var media = bestImg(card);
      if (!media) continue;
      items.push({ href: fullHref, media: media, name: bestName(card) });
    }
    return shuffle(items).slice(0, 6);
  }

  function buildCards(items) {
    return items.map(function (it) {
      var pct = 85 + Math.floor(Math.random() * 14);
      var mediaHtml = '';
      if (it.media) {
        if (it.media.type === 'vid') {
          mediaHtml = '<video class="jjhfs-vid" src="' + it.media.src + '" autoplay muted loop playsinline></video>';
        } else {
          mediaHtml = '<img class="jjhfs-img" src="' + it.media.src + '" alt="" loading="lazy">';
        }
      }
      return '<a class="jjhfs-card" href="' + it.href + '">' +
        '<div class="jjhfs-imgw">' + mediaHtml + '</div>' +
        '<div class="jjhfs-name">' + (it.name || '').replace(/</g, '&lt;') + '</div>' +
        '<div class="jjhfs-barw">' +
          '<div class="jjhfs-barf" style="width:' + pct + '%"></div>' +
          '<div class="jjhfs-barl">&#272;&atilde; B&aacute;n ' + pct + '%</div>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  function renderWidget(items, w) {
    if (!w || !w.parentNode) return;
    w.innerHTML = buildHeader() +
      '<div class="jjhfs-scr"><div class="jjhfs-row">' + buildCards(items) + '</div></div>';
  }

  function findGrid() {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      var cls = divs[i].getAttribute('class') || '';
      if (cls.indexOf('grid-cols-2') !== -1 && cls.indexOf('gap-2') !== -1 &&
          cls.indexOf('md:grid-cols-3') !== -1 && cls.indexOf('lg:grid-cols-6') !== -1) return divs[i];
    }
    return null;
  }

  function isHomepage() {
    var p = window.location.pathname.replace(/\\/$/,  '');
    return p === '' || p === '/';
  }

  function launch() {
    if (!isHomepage()) return true;
    var grid = findGrid();
    if (!grid || grid.children.length < 6) return false;
    if (document.getElementById(WID)) return true;
    var items = scanGrid(grid);
    if (items.length < 3) return false;
    var w = document.createElement('div');
    w.id = WID;
    var parent = grid.parentNode;
    if (!parent) return false;
    parent.insertBefore(w, grid);
    injectCSS();
    renderWidget(items, w);
    return true;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') setTimeout(fn, 500);
    else document.addEventListener('DOMContentLoaded', function () { setTimeout(fn, 500); });
  }

  ready(function () {
    if (!launch()) {
      var tries = 0;
      var iv = setInterval(function () {
        tries++;
        if (launch() || tries > 40) clearInterval(iv);
      }, 400);
    }
  });

})();
<\/script>

<!-- Danh mục trang chủ (DANH MỤC) -->
<style>
#jj-cat-wrap{background:#fff;border:1px solid #f0f0f0;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,.06);margin:0 0 16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;overflow:hidden;box-sizing:border-box;}
#jj-cat-wrap *{box-sizing:border-box;}
#jj-cat-hd{display:flex;align-items:center;justify-content:space-between;padding:12px 16px 0;}
#jj-cat-title{font-size:13px;font-weight:700;color:#ee4d2d;letter-spacing:.04em;text-transform:uppercase;border-bottom:2px solid #ee4d2d;padding-bottom:6px;}
#jj-cat-body{position:relative;}
.jjcat-row{display:flex;flex-wrap:nowrap;justify-content:space-evenly;padding:8px 8px 10px;}
.jjcat-row+.jjcat-row{border-top:1px solid #f5f5f5;padding-top:6px;}
.jjcat-item{flex:1 1 0;min-width:0;max-width:none;display:flex;flex-direction:column;align-items:center;padding:6px 4px 4px;text-decoration:none;color:#333;cursor:pointer;border-radius:6px;transition:background .15s;}
.jjcat-item:hover{background:#fff5f5;}
.jjcat-ico{width:60px;height:60px;border-radius:50%;background:#f5f5f5;display:flex;align-items:center;justify-content:center;margin-bottom:7px;font-size:28px;line-height:1;transition:transform .2s ease;}
.jjcat-item:hover .jjcat-ico{transform:scale(1.08);}
.jjcat-ico.red{background:#fff0ee;}
.jjcat-lbl{font-size:11.5px;color:#333;text-align:center;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word;}
@media(max-width:767px){.jjcat-item{flex:1 1 0;min-width:54px;}.jjcat-ico{width:48px;height:48px;font-size:22px;}.jjcat-lbl{font-size:10px;}}
@media(max-width:479px){.jjcat-row{flex-wrap:wrap;}.jjcat-item{flex:0 0 20%;min-width:0;}.jjcat-ico{width:42px;height:42px;font-size:19px;}.jjcat-lbl{font-size:9.5px;}}
</style>
<script>
(function(){
  var SITE='{{SITE}}' || (window.location.protocol + '//' + window.location.hostname);
  var CATS_ROW1=[
    {label:'Flash Sale',                  icon:'⚡',url:'/flash-sale',          red:true},
    {label:'Sạc dự phòng',  icon:'🔋',url:'/pinsac-du-phong-ac-quy_c12'},
    {label:'Máy lau nhà',          icon:'🧹',url:'/tim-kiem?q=m%C3%A1y+lau+nh%C3%A0'},
    {label:'Robot Hút bụi',      icon:'🤖',url:'/robot-may-hut-bui-lau-nha_c54'},
    {label:'Điện thoại & PK',icon:'📱',url:'/dien-thoai-phu-kien_c1'},
    {label:'Máy tính & Laptop',    icon:'💻',url:'/may-tinh-laptop_c34'},
    {label:'TB Âm thanh',             icon:'🎵',url:'/thiet-bi-am-thanh_c3'},
    {label:'TB Điện Gia dụng',icon:'🏠',url:'/thiet-bi-dien-gia-dung_c2'},
    {label:'Củ cáp sạc',   icon:'🔌',url:'/cu-cap-sac_c10'},
    {label:'Ô tô & Xe máy',  icon:'🚗',url:'/o-to-xe-may_c30'}
  ];
  var CATS_ROW2=[
    {label:'Nhà cửa Đời sống',icon:'🛋',url:'/nha-cua-doi-song_c4'},
    {label:'Cắm trại Phượt',icon:'⛺',url:'/do-camping-phuot-cam-trai_c61'},
    {label:'Mẹ và Bé',       icon:'👶',url:'/me-va-be_c71'},
    {label:'Văn phòng phẩm',icon:'📎',url:'/van-phong-pham_c70'},
    {label:'Sạc nhanh GaN',         icon:'⚡',url:'/tim-kiem?q=s%E1%BA%A1c+nhanh+gan'},
    {label:'Máy ứp chậm',  icon:'🥤',url:'/tim-kiem?q=m%C3%A1y+%C3%A9p+ch%E1%BA%ADm'},
    {label:'Quạt điện',   icon:'🌀',url:'/tim-kiem?q=qu%E1%BA%A1t+%C4%91i%E1%BB%87n'},
    {label:'Đồng hồ TM',  icon:'⌚',url:'/tim-kiem?q=%C4%91%E1%BB%93ng+h%E1%BB%93+th%C3%B4ng+minh'},
    {label:'Bộ sạc nhanh',     icon:'🔓',url:'/tim-kiem?q=b%E1%BB%99+s%E1%BA%A1c+nhanh'},
    {label:'Xem tất cả',       icon:'⭐',url:'/tim-kiem',red:true}
  ];

  function makeRow(cats){
    var row=document.createElement('div');
    row.className='jjcat-row';
    cats.forEach(function(c){
      var a=document.createElement('a');
      a.className='jjcat-item';
      a.href=SITE+c.url;
      var ico=document.createElement('div');
      ico.className='jjcat-ico'+(c.red?' red':'');
      ico.textContent=c.icon;
      var lbl=document.createElement('div');
      lbl.className='jjcat-lbl';
      lbl.textContent=c.label;
      a.appendChild(ico);a.appendChild(lbl);
      row.appendChild(a);
    });
    return row;
  }

  function build(){
    if(document.getElementById('jj-cat-wrap')) return true;
    var old=document.querySelector('.home-categories-carousel_container__Uru3C');
    if(!old) return false;
    old.style.cssText='display:none!important;';

    var wrap=document.createElement('div');
    wrap.id='jj-cat-wrap';

    var hd=document.createElement('div');
    hd.id='jj-cat-hd';
    var title=document.createElement('div');
    title.id='jj-cat-title';
    title.textContent='DANH MỤC';
    hd.appendChild(title);
    wrap.appendChild(hd);

    var body=document.createElement('div');
    body.id='jj-cat-body';
    body.appendChild(makeRow(CATS_ROW1));
    body.appendChild(makeRow(CATS_ROW2));
    wrap.appendChild(body);

    old.parentNode.insertBefore(wrap,old);
    return true;
  }

  function ready(fn){
    if(document.readyState!=='loading') setTimeout(fn,100);
    else document.addEventListener('DOMContentLoaded',function(){setTimeout(fn,100);});
  }

  ready(function(){
    if(!build()){
      var tries=0,iv=setInterval(function(){
        tries++;
        if(build()||tries>20) clearInterval(iv);
      },400);
    }
  });
})();
<\/script>`},{id:"home-goi-y-banner",name:"✨ Gợi Ý Hôm Nay — Banner trang chủ",description:"Banner gradient 'GỢI Ý HÔM NAY / Dành riêng cho bạn' hiển thị phía trên section gợi ý sản phẩm",category:"Trang chủ",fields:[{key:"PRIMARY_COLOR",label:"Màu thương hiệu (tùy chọn)",placeholder:"Ví dụ: #ee4d2d — bỏ trống = đỏ cam mặc định",type:"color",description:"Mã hex màu chủ đạo dùng cho dải gradient của banner. VD: #ee4d2d (đỏ cam), #2563eb (xanh dương)."}],template:`<script>
(function(){
  'use strict';
  var PC = '{{PRIMARY_COLOR}}' || '#ee4d2d';
  if (!document.getElementById('sdn-gy-hdr-css')) {
    var style = document.createElement('style');
    style.id = 'sdn-gy-hdr-css';
    style.textContent =
      '#sdn-gy-hdr{width:100%;margin:8px 0 0;padding:0;box-sizing:border-box}' +
      '#sdn-gy-hdr-card{background:linear-gradient(90deg,#c0392b 0%,'+PC+' 40%,#ff6b35 70%,#f39c12 100%);border-radius:8px 8px 0 0;overflow:hidden;position:relative;box-shadow:0 2px 8px rgba(238,77,45,.25)}' +
      '#sdn-gy-hdr-card::before{content:"";position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.08)}' +
      '#sdn-gy-hdr-card::after{content:"";position:absolute;bottom:-20px;left:60px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.06)}' +
      '#sdn-gy-hdr-tab{display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 20px;position:relative;z-index:1}' +
      '#sdn-gy-hdr-tab .gy-icon{font-size:22px;line-height:1}' +
      '#sdn-gy-hdr-tab .gy-txt{font-size:17px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase;text-shadow:0 1px 4px rgba(0,0,0,.2)}' +
      '#sdn-gy-hdr-tab .gy-badge{background:rgba(255,255,255,.22);color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px;letter-spacing:.5px;border:1px solid rgba(255,255,255,.35)}';
    (document.head || document.documentElement).appendChild(style);
  }
  if(window.location.pathname.replace(/\\/$/,'') !== '') return;
  var HTML =
    '<div id="sdn-gy-hdr-card">' +
      '<div id="sdn-gy-hdr-tab">' +
        '<span class="gy-icon">&#x2728;</span>' +
        '<span class="gy-txt">G&#7907;i &Yacute; H&ocirc;m Nay</span>' +
        '<span class="gy-badge">D&agrave;nh ri&ecirc;ng cho b&#7841;n</span>' +
      '</div>' +
    '</div>';
  function inject() {
    if (document.getElementById('sdn-gy-hdr')) return true;
    var jjhfs = document.getElementById('jj-home-fs');
    if (!jjhfs) return false;
    var w = document.createElement('div');
    w.id = 'sdn-gy-hdr';
    w.innerHTML = HTML;
    jjhfs.parentNode.insertBefore(w, jjhfs.nextSibling);
    return true;
  }
  var n = 0;
  function run() {
    n++;
    if (inject()) return;
    if (n < 60) setTimeout(run, 400);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 800); });
  } else {
    setTimeout(run, 800);
  }
  try {
    new MutationObserver(function () {
      if (!document.getElementById('sdn-gy-hdr')) inject();
    }).observe(document.body, { childList: true, subtree: true });
  } catch(e) {}
})();
<\/script>`}];function R3(i){let r=5381;for(let s=0;s<i.length;s++)r=Math.imul(r,33)+i.charCodeAt(s)|0;return r}function L3(i){return i.trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0]}function B3(i,r){let s=i;for(const c of Object.keys(r)){const u=`<!--JJBLOCK:${c}-->`,p=`<!--/JJBLOCK:${c}-->`,h=s.indexOf(u);if(h===-1)continue;const m=s.indexOf(p,h);if(m===-1)continue;const x=m+p.length;if(r[c]===!1){let g=x;s[g]===`
`&&g++,s=s.slice(0,h)+s.slice(g)}else{let g=x;s[g]===`
`&&g++,s=s.slice(0,m)+s.slice(g);let v=h+u.length;s[v]===`
`&&v++,s=s.slice(0,h)+s.slice(v)}}return s=s.replace(/[ \t]*<!--\/?JJBLOCK:[A-Za-z0-9_-]+-->\n?/g,""),s}function Qx(i,r){let s=i;const c={...r};"DOMAIN_LOCK"in c||(c.DOMAIN_LOCK_LINE="");for(const[u,p]of Object.entries(r)){if(u.endsWith("_IDS")){const h=p.split(",").map(m=>m.trim()).filter(Boolean).map(m=>`"${m}"`);c[`${u}_JSON`]=`[${h.join(",")}]`}if(u==="DOMAIN_LOCK"){const h=p.trim();if(h){const m=L3(h),x=R3(m);c.DOMAIN_LOCK_LINE=`var _L=${x},_f=function(s){var h=5381;for(var i=0;i<s.length;i++){h=(Math.imul(h,33)+s.charCodeAt(i))|0;}return h;},_d=location.hostname.replace(/^www\\./,'');if(_f(_d)!==_L)return;`}else c.DOMAIN_LOCK_LINE=""}}for(const[u,p]of Object.entries(c)){const h=new RegExp(`\\{\\{${u}\\}\\}`,"g");s=s.replace(h,p)}return s}function Zx(i){const r=/\{\{([A-Z_]+)\}\}/g,s=[];let c;for(;(c=r.exec(i))!==null;){const u=c[1];u.endsWith("_IDS_JSON")||u!=="DOMAIN_LOCK_LINE"&&(s.includes(u)||s.push(u))}return s}function H3(i){const r=i.trim().match(/\/p-\d+\/(\d+)-/);return r?r[1]:null}function I3(i){const r=i.trim(),s=r.match(/(?:v=|youtu\.be\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);return s?s[1]:/^[a-zA-Z0-9_-]{11}$/.test(r)?r:null}function fm(i){return i.map(r=>`    '${r.imgId}': '${r.ytId}'`).join(`,
`)}function U3(i){if(!i.trim())return[];const r=i.split(/[\n,]+/),s=[];for(const c of r){const u=c.match(/'(\d+)'\s*:\s*'([a-zA-Z0-9_-]{11})'/);u&&s.push({imgId:u[1],ytId:u[2]})}return s}function G3(i){const r=/['"](\d{10,})['"]\s*:\s*['"]([a-zA-Z0-9_-]{11})['"]/g,s=[],c=new Set;let u;for(;(u=r.exec(i))!==null;)c.has(u[1])||(c.add(u[1]),s.push({imgId:u[1],ytId:u[2]}));return s}function P3({fieldValues:i,onFieldChange:r}){const{toast:s}=Un(),[c,u]=y.useState(""),[p,h]=y.useState(""),[m,x]=y.useState([]),[g,v]=y.useState(""),[j,N]=y.useState(!1);y.useEffect(()=>{const A=i.VIDEO_MAP_ENTRIES??"";A.trim()&&x(U3(A))},[]);const k=A=>{x(A),r("VIDEO_MAP_ENTRIES",fm(A))},O=()=>{const A=c.split(`
`).map(ne=>ne.trim()).filter(Boolean),L=p.split(`
`).map(ne=>ne.trim()).filter(Boolean);if(A.length===0||L.length===0){s({title:"Thiếu dữ liệu",description:"Vui lòng nhập ít nhất 1 URL ảnh và 1 URL YouTube.",variant:"destructive"});return}const U=Math.min(A.length,L.length),G=[],I=[];for(let ne=0;ne<U;ne++){const ce=H3(A[ne]),ue=I3(L[ne]);if(!ce){I.push(`Dòng ${ne+1}: không lấy được timestamp từ URL ảnh`);continue}if(!ue){I.push(`Dòng ${ne+1}: không lấy được ID YouTube`);continue}G.push({imgId:ce,ytId:ue,imgUrl:A[ne],ytUrl:L[ne]})}if(I.length>0&&s({title:`${I.length} dòng lỗi`,description:I.slice(0,3).join(" | ")+(I.length>3?"…":""),variant:"destructive"}),G.length===0)return;const X=[...m];let P=0,te=0;for(const ne of G){const ce=X.findIndex(ue=>ue.imgId===ne.imgId);ce>=0?(X[ce]=ne,te++):(X.push(ne),P++)}k(X),u(""),h(""),s({title:"Ghép cặp thành công!",description:`+${P} mới, ${te} cập nhật. Tổng: ${X.length} cặp.`})},C=()=>{if(!g.trim()){s({title:"Chưa có script",description:"Vui lòng dán script cũ vào ô trên.",variant:"destructive"});return}const A=G3(g);if(A.length===0){s({title:"Không tìm thấy cặp nào",description:"Script không chứa VIDEO_MAP hợp lệ.",variant:"destructive"});return}const L=[...m];let U=0,G=0;for(const I of A){const X=L.findIndex(P=>P.imgId===I.imgId);X>=0?(L[X]=I,G++):(L.push(I),U++)}k(L),v(""),N(!1),s({title:"Đã nhập từ script cũ!",description:`+${U} mới, ${G} cập nhật. Tổng: ${L.length} cặp.`})},T=A=>{k(m.filter(L=>L.imgId!==A))},R=()=>{k([]),s({title:"Đã xóa tất cả",description:"Danh sách cặp ảnh–video đã được xóa."})};return l.jsxs("div",{className:"space-y-4",children:[l.jsxs(Xe,{className:"border-amber-200 bg-amber-50/30",children:[l.jsx(et,{className:"pb-0 pt-4 px-4",children:l.jsxs("button",{className:"w-full flex items-center justify-between text-left",onClick:()=>N(A=>!A),children:[l.jsxs(tt,{className:"text-sm flex items-center gap-2 text-amber-700",children:[l.jsx(Da,{className:"w-4 h-4"}),"Nhập từ script cũ"]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-xs text-amber-600",children:"Dán script GTM cũ để tải danh sách cặp có sẵn"}),j?l.jsx(As,{className:"w-4 h-4 text-amber-600"}):l.jsx(Cs,{className:"w-4 h-4 text-amber-600"})]})]})}),j&&l.jsxs(Qe,{className:"px-4 pb-4 pt-3 space-y-3",children:[l.jsx(on,{placeholder:`Dán toàn bộ script cũ vào đây (bao gồm cả VIDEO_MAP)
VD:
var VIDEO_MAP = {
  '1774455267822': 'Pe837ti67S0',
  '1774681285984': 'rRp-bplZlZs'
};`,value:g,onChange:A=>v(A.target.value),className:"text-xs min-h-[120px] resize-none font-mono"}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("p",{className:"text-xs text-gray-400",children:["Tự động tìm tất cả cặp ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"timestamp: youtubeId"})," trong script"]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx(ve,{size:"sm",variant:"outline",className:"h-7 text-xs",onClick:()=>{v(""),N(!1)},children:"Hủy"}),l.jsxs(ve,{size:"sm",className:"h-7 text-xs gap-1.5 bg-amber-600 hover:bg-amber-700",onClick:C,children:[l.jsx(Da,{className:"w-3.5 h-3.5"}),"Nhập danh sách"]})]})]})]})]}),l.jsxs(Xe,{className:"border-purple-200 bg-purple-50/30",children:[l.jsxs(et,{className:"pb-2 pt-4 px-4",children:[l.jsxs(tt,{className:"text-sm flex items-center gap-2 text-purple-700",children:[l.jsx(Ks,{className:"w-4 h-4"}),"Ghép cặp ảnh – video"]}),l.jsx("p",{className:"text-xs text-gray-500",children:"Paste URL ảnh và URL YouTube tương ứng theo từng dòng → Bấm Ghép cặp"})]}),l.jsxs(Qe,{className:"px-4 pb-4 space-y-3",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{className:"space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-600",children:[l.jsx(Pd,{className:"w-3.5 h-3.5 text-blue-500"}),"URL ảnh sản phẩm"]}),l.jsx(on,{placeholder:`Paste URL ảnh, mỗi dòng 1 URL
VD:
https://r6i.pen.dropbuy.vn/md/s-1064/p-125434/1773120431464-img.jpg
https://r6i.pen.dropbuy.vn/md/s-1064/p-125434/1774455267822-img.jpg`,value:c,onChange:A=>u(A.target.value),className:"text-xs min-h-[120px] resize-none font-mono"}),l.jsxs("p",{className:"text-xs text-gray-400",children:["Lấy timestamp: ",l.jsxs("code",{className:"bg-gray-100 px-1 rounded",children:["/p-XXXXX/",l.jsx("strong",{children:"TIMESTAMP"}),"-..."]})]})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold text-gray-600",children:[l.jsx(kd,{className:"w-3.5 h-3.5 text-red-500"}),"URL YouTube tương ứng"]}),l.jsx(on,{placeholder:`Paste URL YouTube tương ứng (cùng thứ tự)
VD:
https://www.youtube.com/watch?v=Pe837ti67S0
https://www.youtube.com/watch?v=rRp-bplZlZs`,value:p,onChange:A=>h(A.target.value),className:"text-xs min-h-[120px] resize-none font-mono"}),l.jsxs("p",{className:"text-xs text-gray-400",children:["Hỗ trợ: ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"watch?v=ID"})," · ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"shorts/ID"})," · ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"youtu.be/ID"})," · ID thẳng"]})]})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1",children:[l.jsxs("span",{className:"text-xs text-gray-400",children:[c.split(`
`).filter(Boolean).length," URL ảnh ·"," ",p.split(`
`).filter(Boolean).length," URL YouTube"]}),l.jsxs(ve,{size:"sm",className:"h-8 text-xs gap-1.5",onClick:O,children:[l.jsx(Kr,{className:"w-3.5 h-3.5"}),"Ghép cặp & thêm vào danh sách"]})]})]})]}),l.jsxs(Xe,{children:[l.jsx(et,{className:"pb-2 pt-4 px-4",children:l.jsxs(tt,{className:"text-sm flex items-center gap-2",children:[l.jsx(kd,{className:"w-4 h-4 text-red-500"}),"Danh sách cặp ảnh–video",l.jsxs(Gi,{variant:"secondary",className:"text-xs ml-auto",children:[m.length," cặp"]}),m.length>0&&l.jsxs(ve,{size:"sm",variant:"ghost",className:"h-6 text-xs text-red-500 px-2 gap-1",onClick:R,children:[l.jsx(Fs,{className:"w-3 h-3"}),"Xóa tất cả"]})]})}),l.jsx(Qe,{className:"px-4 pb-4",children:m.length===0?l.jsx("p",{className:"text-xs text-gray-400 italic py-2",children:"Chưa có cặp nào. Dùng ô trên để ghép cặp."}):l.jsxs("div",{className:"rounded-lg border border-gray-200 overflow-hidden",children:[l.jsxs("div",{className:"grid text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-200 px-3 py-2",style:{gridTemplateColumns:"1fr 1fr auto"},children:[l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(Pd,{className:"w-3 h-3"})," Timestamp ảnh"]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(kd,{className:"w-3 h-3 text-red-500"})," YouTube ID"]}),l.jsx("span",{})]}),m.map(A=>l.jsxs("div",{className:"grid items-center px-3 py-2 border-b border-gray-100 last:border-0 hover:bg-gray-50",style:{gridTemplateColumns:"1fr 1fr auto"},children:[l.jsxs("div",{className:"space-y-0.5",children:[l.jsx("code",{className:"text-xs font-mono font-bold text-gray-800",children:A.imgId}),A.imgUrl&&l.jsxs("p",{className:"text-xs text-gray-400 truncate",title:A.imgUrl,children:[A.imgUrl.replace(/https?:\/\/[^/]+/,"").slice(0,35),"…"]})]}),l.jsxs("div",{className:"space-y-0.5",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("code",{className:"text-xs font-mono font-bold text-red-700",children:A.ytId}),l.jsx("a",{href:`https://www.youtube.com/watch?v=${A.ytId}`,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-blue-500 hover:underline",children:"↗"})]}),A.ytUrl&&l.jsxs("p",{className:"text-xs text-gray-400 truncate",title:A.ytUrl,children:["youtube.com/watch?v=",A.ytId]})]}),l.jsx("button",{onClick:()=>T(A.imgId),className:"p-1 text-gray-400 hover:text-red-500 transition-colors",children:l.jsx(lu,{className:"w-3.5 h-3.5"})})]},A.imgId))]})})]}),m.length>0&&l.jsxs("div",{className:"flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg",children:[l.jsx(vt,{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("p",{className:"text-xs font-semibold text-green-700 mb-1",children:["VIDEO_MAP đã sẵn sàng (",m.length," cặp):"]}),l.jsx("pre",{className:"text-xs text-green-800 font-mono whitespace-pre-wrap break-all",children:`var VIDEO_MAP = {
${fm(m)}
};`})]})]})]})}function q3(i){const r=i.trim(),s=r.match(/_p(\d+)/);if(s)return`p${s[1]}`;const u=r.replace(/[?#].*$/,"").replace(/\/$/,"").split("/").pop();return u&&u.length>2?u:null}function Od(i){return i.toLocaleString("vi-VN")+"₫"}function hm(i){return i.map(r=>`    { slug: '${r.slug}', phanTram: ${r.phanTram}, giaGoc: ${r.giaGoc} }`).join(`,
`)}function V3(i){if(!i.trim())return[];const r=/\{\s*slug:\s*['"]([^'"]+)['"]\s*,\s*phanTram:\s*([\d.]+)\s*(?:,\s*giaGoc:\s*([\d.]+))?\s*\}/g,s=[];let c;for(;(c=r.exec(i))!==null;){const u=parseFloat(c[2]),p=c[3]?parseFloat(c[3]):0;s.push({slug:c[1],giaGoc:p,giaDien:p>0?Math.round(p*u):0,phanTram:u})}return s}function Y3({fieldValues:i,onFieldChange:r}){const{toast:s}=Un(),[c,u]=y.useState([]),p=y.useRef(!1),[h,m]=y.useState(""),[x,g]=y.useState(""),[v,j]=y.useState(""),[N,k]=y.useState(""),[O,C]=y.useState(null),[T,R]=y.useState(""),[A,L]=y.useState("");y.useEffect(()=>{if(p.current){p.current=!1;return}const V=i.CAU_HINH_ENTRIES??"";u(V.trim()?V3(V):[])},[i.CAU_HINH_ENTRIES]);const U=V=>{p.current=!0,u(V),r("CAU_HINH_ENTRIES",hm(V))},G=(V,ee)=>V>0&&ee>0?parseFloat((ee/V).toFixed(6)):0,I=()=>{const V=q3(h);V&&g(V)},X=()=>{const V=x.trim();if(!V){s({title:"Thiếu slug",description:"Nhập URL hoặc slug sản phẩm.",variant:"destructive"});return}const ee=parseInt(v.replace(/\D/g,""),10),_=parseInt(N.replace(/\D/g,""),10);if(!ee||!_){s({title:"Thiếu giá",description:"Nhập giá gốc và giá muốn hiển thị.",variant:"destructive"});return}if(_>=ee){s({title:"Giá không hợp lệ",description:"Giá muốn hiển thị phải nhỏ hơn giá gốc.",variant:"destructive"});return}const F=G(ee,_),Z=c.findIndex(w=>w.slug===V);let le;Z>=0?(le=c.map((w,q)=>q===Z?{...w,giaGoc:ee,giaDien:_,phanTram:F,url:h.trim()}:w),s({title:"Đã cập nhật",description:`Slug "${V}" → giảm ${Math.round((1-F)*100)}%`})):(le=[...c,{slug:V,giaGoc:ee,giaDien:_,phanTram:F,url:h.trim()}],s({title:"Đã thêm",description:`"${V}" → giảm ${Math.round((1-F)*100)}%`})),U(le),m(""),g(""),j(""),k("")},P=V=>U(c.filter(ee=>ee.slug!==V)),te=V=>{const ee=parseInt(T.replace(/\D/g,""),10),_=parseInt(A.replace(/\D/g,""),10);if(!ee||!_||_>=ee){s({title:"Giá không hợp lệ",description:"Giá muốn hiển thị phải nhỏ hơn giá gốc.",variant:"destructive"});return}const F=G(ee,_);U(c.map(Z=>Z.slug===V?{...Z,giaGoc:ee,giaDien:_,phanTram:F}:Z)),C(null)},ne=parseInt(v.replace(/\D/g,""),10)||0,ce=parseInt(N.replace(/\D/g,""),10)||0,ue=ne>0&&ce>0?G(ne,ce):null,xe=ue!==null?Math.round((1-ue)*100):null;return l.jsxs("div",{className:"space-y-4",children:[l.jsxs(Xe,{className:"border-green-200 bg-green-50/30",children:[l.jsxs(et,{className:"pb-2 pt-4 px-4",children:[l.jsxs(tt,{className:"text-sm flex items-center gap-2 text-green-700",children:[l.jsx(Kr,{className:"w-4 h-4"}),"Thêm sản phẩm & giá ưu đãi"]}),l.jsx("p",{className:"text-xs text-gray-500",children:"Paste URL sản phẩm để tự lấy slug, sau đó nhập giá gốc và giá muốn hiển thị"})]}),l.jsxs(Qe,{className:"px-4 pb-4 space-y-3",children:[l.jsxs("div",{className:"flex gap-2",children:[l.jsxs("div",{className:"flex-1 space-y-1",children:[l.jsxs("label",{className:"text-xs font-medium text-gray-600 flex items-center gap-1",children:[l.jsx(X2,{className:"w-3 h-3"})," URL sản phẩm"]}),l.jsx(Ge,{placeholder:"https://junjin.ratxin.vn/..._p125020",value:h,onChange:V=>m(V.target.value),onBlur:I,onKeyDown:V=>V.key==="Enter"&&I(),className:"text-xs h-8"})]}),l.jsxs("div",{className:"w-32 space-y-1",children:[l.jsxs("label",{className:"text-xs font-medium text-gray-600 flex items-center gap-1",children:[l.jsx(u5,{className:"w-3 h-3"})," Slug (tự lấy)"]}),l.jsx(Ge,{placeholder:"p125020",value:x,onChange:V=>g(V.target.value),className:"text-xs h-8 font-mono"})]})]}),l.jsxs("div",{className:"flex gap-2 items-end",children:[l.jsxs("div",{className:"flex-1 space-y-1",children:[l.jsx("label",{className:"text-xs font-medium text-gray-600",children:"Giá gốc (₫)"}),l.jsx(Ge,{placeholder:"VD: 285000",value:v,onChange:V=>j(V.target.value),className:"text-xs h-8 font-mono"})]}),l.jsx(Fg,{className:"w-4 h-4 text-gray-400 mb-1.5 flex-shrink-0"}),l.jsxs("div",{className:"flex-1 space-y-1",children:[l.jsx("label",{className:"text-xs font-medium text-gray-600",children:"Giá muốn hiển thị (₫)"}),l.jsx(Ge,{placeholder:"VD: 91200",value:N,onChange:V=>k(V.target.value),onKeyDown:V=>V.key==="Enter"&&X(),className:"text-xs h-8 font-mono"})]}),l.jsx("div",{className:"flex-shrink-0 mb-0.5 min-w-[72px] text-center",children:xe!==null&&xe>0&&xe<100?l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsxs("span",{className:"text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded px-2 py-0.5",children:["-",xe,"%"]}),l.jsx("span",{className:"text-xs text-gray-400 mt-0.5",children:Od(ce)})]}):l.jsx("span",{className:"text-xs text-gray-300",children:"–"})}),l.jsxs(ve,{size:"sm",className:"h-8 text-xs gap-1 flex-shrink-0",onClick:X,children:[l.jsx(Kr,{className:"w-3.5 h-3.5"}),"Thêm"]})]})]})]}),l.jsxs(Xe,{children:[l.jsx(et,{className:"pb-2 pt-4 px-4",children:l.jsxs(tt,{className:"text-sm flex items-center gap-2",children:[l.jsx(T2,{className:"w-4 h-4 text-blue-600"}),"Danh sách sản phẩm giảm giá",l.jsxs(Gi,{variant:"secondary",className:"text-xs ml-auto",children:[c.length," sản phẩm"]}),c.length>0&&l.jsxs(ve,{size:"sm",variant:"ghost",className:"h-6 text-xs text-red-500 px-2 gap-1",onClick:()=>{U([]),s({title:"Đã xóa tất cả"})},children:[l.jsx(Fs,{className:"w-3 h-3"})," Xóa tất cả"]})]})}),l.jsx(Qe,{className:"px-4 pb-4",children:c.length===0?l.jsx("p",{className:"text-xs text-gray-400 italic py-2",children:"Chưa có sản phẩm nào. Thêm sản phẩm ở trên."}):l.jsxs("div",{className:"rounded-lg border border-gray-200 overflow-hidden",children:[l.jsxs("div",{className:"grid text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-200 px-3 py-2",style:{gridTemplateColumns:"140px 1fr 1fr 80px 72px auto"},children:[l.jsx("span",{children:"Slug"}),l.jsx("span",{children:"Giá gốc"}),l.jsx("span",{children:"Giá hiển thị"}),l.jsx("span",{className:"text-center",children:"Giảm %"}),l.jsx("span",{className:"text-center",children:"phanTram"}),l.jsx("span",{})]}),c.map(V=>l.jsxs("div",{children:[l.jsxs("div",{className:"grid items-center px-3 py-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer",style:{gridTemplateColumns:"140px 1fr 1fr 80px 72px auto"},onClick:()=>{if(O===V.slug){C(null);return}C(V.slug),R(V.giaGoc>0?String(V.giaGoc):""),L(V.giaDien>0?String(V.giaDien):"")},children:[l.jsx("code",{className:"text-xs font-mono font-bold text-gray-800 truncate",children:V.slug}),l.jsx("span",{className:"text-xs text-gray-600",children:V.giaGoc>0?Od(V.giaGoc):l.jsx("span",{className:"text-gray-300 italic",children:"chưa có"})}),l.jsx("span",{className:"text-xs text-green-700 font-medium",children:V.giaDien>0?Od(V.giaDien):l.jsx("span",{className:"text-gray-300 italic",children:"chưa có"})}),l.jsx("div",{className:"flex justify-center",children:l.jsxs("span",{className:"inline-block bg-red-100 text-red-700 border border-red-200 rounded px-1.5 py-0.5 text-xs font-bold",children:["-",Math.round((1-V.phanTram)*100),"%"]})}),l.jsx("span",{className:"text-xs font-mono text-gray-500 text-center",children:V.phanTram}),l.jsx("button",{onClick:ee=>{ee.stopPropagation(),P(V.slug)},className:"p-1 text-gray-400 hover:text-red-500 transition-colors",children:l.jsx(lu,{className:"w-3.5 h-3.5"})})]}),O===V.slug&&l.jsxs("div",{className:"px-3 py-2 bg-blue-50 border-b border-blue-100 flex items-center gap-2",onClick:ee=>ee.stopPropagation(),children:[l.jsx("span",{className:"text-xs text-blue-600 font-medium w-24 flex-shrink-0",children:"Sửa giá:"}),l.jsx(Ge,{placeholder:"Giá gốc",value:T,onChange:ee=>R(ee.target.value),className:"text-xs h-7 w-28 font-mono"}),l.jsx(Fg,{className:"w-3 h-3 text-gray-400 flex-shrink-0"}),l.jsx(Ge,{placeholder:"Giá hiển thị",value:A,onChange:ee=>L(ee.target.value),onKeyDown:ee=>ee.key==="Enter"&&te(V.slug),className:"text-xs h-7 w-28 font-mono"}),T&&A&&parseInt(A)<parseInt(T)&&l.jsxs("span",{className:"text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded px-2 py-0.5",children:["-",Math.round((1-parseInt(A)/parseInt(T))*100),"%"]}),l.jsx(ve,{size:"sm",className:"h-7 text-xs px-3 ml-auto",onClick:()=>te(V.slug),children:"Lưu"}),l.jsx(ve,{size:"sm",variant:"outline",className:"h-7 text-xs px-2",onClick:()=>C(null),children:"Hủy"})]})]},V.slug))]})})]}),c.length>0&&l.jsxs("div",{className:"flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg",children:[l.jsx(e5,{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsxs("p",{className:"text-xs font-semibold text-green-700 mb-1",children:["CAU_HINH sẵn sàng (",c.length," sản phẩm):"]}),l.jsx("pre",{className:"text-xs text-green-800 font-mono whitespace-pre-wrap break-all",children:`var CAU_HINH = [
${hm(c)}
];`})]})]})]})}function gm({mode:i,templateId:r,savedId:s}){const[,c]=Am(),{toast:u}=Un(),[p,h]=y.useState({}),[m,x]=y.useState(""),[g,v]=y.useState(""),[j,N]=y.useState(!0),[k,O]=y.useState(!1),[C,T]=y.useState(!1),[R,A]=y.useState(null),[L,U]=y.useState({}),[G,I]=y.useState(!1),[X,P]=y.useState(""),[te,ne]=y.useState(null),[ce,ue]=y.useState(!1),[xe,V]=y.useState(""),[ee,_]=y.useState(null),F=W=>{const fe=Mt=>{const nt=W.match(Mt);return nt?nt[1].trim():null},Me={},Ot=[],vn=[],Vi={PRIMARY_COLOR:/var C1\s*=\s*'(#[0-9a-fA-F]{3,6})'/,MAP_URL:/var MAP_URL\s*=\s*'([^']+)'/,PHONE:/zalo\.me\/([^"']+)/,ADDRESS:/Đ[iị]a ch[iỉ]:<\/strong>\s*([^<]+)<\/li>/,BRAND_NAME:/alt="([^"]+)"\s*\/?>/,WEBSITE_URL:/href="([^"]+)\/dang-nhap"/,IMAGE_URL:/var AVATAR_URL\s*=\s*'([^']+)'/,PERSON_NAME:/white-space:nowrap[^>]*>([^<]+)<\/div>/},Yi={PRIMARY_COLOR:"Màu thương hiệu",MAP_URL:"URL Google Maps",PHONE:"Số điện thoại",ADDRESS:"Địa chỉ",BRAND_NAME:"Tên thương hiệu",WEBSITE_URL:"URL website",IMAGE_URL:"URL ảnh",PERSON_NAME:"Nhãn người dùng"};for(const[Mt,nt]of Object.entries(Vi)){const Ze=fe(nt);Ze?(Me[Mt]=Ze,Ot.push(Yi[Mt])):vn.push(Yi[Mt])}return{extracted:Me,filled:Ot,missed:vn}},Z=()=>{if(!X.trim())return;const{extracted:W,filled:fe,missed:Me}=F(X);if(fe.length===0){u({title:"Không tìm thấy dữ liệu",description:"Script dán vào không khớp định dạng.",variant:"destructive"});return}h(Ot=>({...Ot,...W})),ne({filled:fe,missed:Me}),u({title:`Đã điền ${fe.length} trường`,description:fe.join(", ")})},le=W=>{const fe=W.match(/var CAU_HINH\s*=\s*\[\s*([\s\S]*?)\s*\];/);return fe&&fe[1].trim()?{extracted:{CAU_HINH_ENTRIES:fe[1].trim()},filled:["Danh sách sản phẩm & % giảm"],missed:[]}:{extracted:{},filled:[],missed:["Danh sách sản phẩm & % giảm"]}},w=()=>{if(!xe.trim())return;const{extracted:W,filled:fe,missed:Me}=le(xe);if(fe.length===0){u({title:"Không tìm thấy dữ liệu",description:"Script dán vào không khớp định dạng.",variant:"destructive"});return}h(Ot=>({...Ot,...W})),_({filled:fe,missed:Me}),u({title:`Đã điền ${fe.length} trường`,description:fe.join(", ")})},q=y.useMemo(()=>{const W=xx();return[...z3,...W]},[]),J=y.useMemo(()=>{const W=r;return q.find(fe=>fe.id===W)??null},[r,q]);y.useEffect(()=>{if(i==="edit"&&s){const fe=La().find(Me=>Me.id===s);fe&&(A(fe),h(fe.fieldValues),v(fe.websiteName))}},[i,s]),y.useEffect(()=>{if(J){const W={};J.fields.forEach(fe=>{p[fe.key]||(W[fe.key]="")}),h(fe=>({...W,...fe}))}},[J]),y.useEffect(()=>{const W=i==="edit"&&R?q.find(fe=>fe.id===R.templateId):J;if(W?.toggles&&W.toggles.length>0){const fe={};W.toggles.forEach(Me=>{fe[Me.id]=Me.defaultEnabled??!0}),i==="edit"&&R?.toggleStates&&Object.assign(fe,R.toggleStates),U(fe)}else U({})},[J,R,i,q]);const $=y.useMemo(()=>J?J.template:i==="edit"&&R?q.find(fe=>fe.id===R.templateId)?.template??m:m,[J,m,R,i,q]),ae=y.useMemo(()=>Qx(B3($,L),p),[$,p,L]),pe=y.useMemo(()=>Zx(ae),[ae]),ie=(W,fe)=>{h(Me=>({...Me,[W]:fe})),T(!1)},He=async()=>{await navigator.clipboard.writeText(ae),O(!0),setTimeout(()=>O(!1),2e3),u({title:"Đã copy!",description:"Script đã được copy vào clipboard."})},Ce=()=>{if(!g.trim()){u({title:"Thiếu tên website",description:"Vui lòng nhập tên website để lưu.",variant:"destructive"});return}const W={templateId:J?.id??R?.templateId??"custom",templateName:J?.name??R?.templateName??"Script tùy chỉnh",websiteName:g.trim(),fieldValues:p,generatedScript:ae,toggleStates:L};i==="edit"&&R?(a3(R.id,W),u({title:"Đã cập nhật!",description:"Script đã được lưu thành công."})):(mx(W),u({title:"Đã lưu!",description:"Script đã được lưu thành công."})),T(!0)},Te=i==="edit"&&R?q.find(W=>W.id===R.templateId):J,Pt=Te?.fields??[],pt=Te?.id??J?.id,qt=pt==="sale-badge",yt=pt==="video-avatar",$t=pt==="sale-price",eo=yt?Pt.filter(W=>W.key!=="VIDEO_MAP_ENTRIES"):$t?Pt.filter(W=>W.key!=="CAU_HINH_ENTRIES"):Pt,bn=Te?.toggles??null,_t=bn?bn.every(W=>L[W.id]??!0):!0,nl=()=>{if(!bn)return;const W=!_t,fe={};bn.forEach(Me=>{fe[Me.id]=W}),U(fe),T(!1)};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-10",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-3 flex items-center gap-3",children:[l.jsx(ve,{variant:"ghost",size:"icon",className:"h-8 w-8",onClick:()=>c("/"),children:l.jsx(Zr,{className:"w-4 h-4"})}),l.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[l.jsx(Da,{className:"w-4 h-4 text-blue-600 flex-shrink-0"}),l.jsx("h1",{className:"text-sm font-semibold text-gray-900 truncate",children:i==="edit"?"Chỉnh sửa script":J?.name??"Tạo script mới"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs(ve,{size:"sm",variant:"outline",className:"gap-1.5 h-8 text-xs",onClick:()=>N(!j),children:[j?l.jsx(H2,{className:"w-3.5 h-3.5"}):l.jsx(U2,{className:"w-3.5 h-3.5"}),j?"Ẩn":"Xem"," preview"]}),l.jsxs(ve,{size:"sm",variant:"outline",className:"gap-1.5 h-8 text-xs",onClick:He,children:[k?l.jsx(vt,{className:"w-3.5 h-3.5 text-green-600"}):l.jsx(sn,{className:"w-3.5 h-3.5"}),k?"Đã copy":"Copy"]}),l.jsxs(ve,{size:"sm",className:"gap-1.5 h-8 text-xs",onClick:Ce,children:[C?l.jsx(vt,{className:"w-3.5 h-3.5"}):l.jsx(qd,{className:"w-3.5 h-3.5"}),C?"Đã lưu":"Lưu"]})]})]})}),l.jsx("main",{className:"max-w-6xl mx-auto px-4 py-6",children:l.jsxs("div",{className:`grid gap-6 ${j?"grid-cols-1 lg:grid-cols-2":"grid-cols-1"}`,children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs(Xe,{children:[l.jsxs(et,{className:"pb-3 pt-4 px-4",children:[l.jsx(tt,{className:"text-sm",children:"Tên website / Nhãn lưu"}),l.jsx(rn,{className:"text-xs",children:"Dùng để nhận diện script khi lưu"})]}),l.jsx(Qe,{className:"px-4 pb-4",children:l.jsx(Ge,{placeholder:"VD: JunJin Store, Website bán hàng A...",value:g,onChange:W=>v(W.target.value),className:"text-sm"})})]}),bn&&bn.length>0&&l.jsxs(Xe,{children:[l.jsx(et,{className:"pb-3 pt-4 px-4",children:l.jsxs("div",{className:"flex items-center justify-between gap-2",children:[l.jsxs("div",{children:[l.jsx(tt,{className:"text-sm",children:"Chọn script muốn dùng"}),l.jsx(rn,{className:"text-xs mt-0.5",children:"Tích để bật/tắt từng phần. Phần bỏ tích sẽ không có trong script copy."})]}),l.jsx(ve,{size:"sm",variant:"outline",className:"h-7 text-xs whitespace-nowrap shrink-0",onClick:nl,children:_t?"Bỏ chọn tất cả":"Chọn tất cả"})]})}),l.jsx(Qe,{className:"px-4 pb-4",children:l.jsx("div",{className:"space-y-1",children:bn.map(W=>l.jsxs("label",{className:"flex items-start gap-2.5 cursor-pointer rounded-md p-2 hover:bg-gray-50 transition-colors",children:[l.jsx(Tx,{checked:L[W.id]??!0,onCheckedChange:fe=>{U(Me=>({...Me,[W.id]:fe===!0})),T(!1)},className:"mt-0.5"}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-xs font-medium text-gray-800 leading-snug",children:W.label}),W.description&&l.jsx("p",{className:"text-[11px] text-gray-500 leading-snug mt-0.5",children:W.description})]})]},W.id))})})]}),pt==="sale-price"&&l.jsxs(Xe,{className:"border-blue-200",children:[l.jsxs(et,{className:"pb-2 pt-3 px-4 cursor-pointer select-none",onClick:()=>{ue(W=>!W),_(null)},children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Oa,{className:"w-4 h-4 text-blue-500"}),l.jsx(tt,{className:"text-sm text-blue-700",children:"Tự điền từ script cũ"})]}),ce?l.jsx(As,{className:"w-4 h-4 text-gray-400"}):l.jsx(Cs,{className:"w-4 h-4 text-gray-400"})]}),l.jsx(rn,{className:"text-xs",children:"Dán script đã copy trước đó — tự nhận diện và điền lại danh sách sản phẩm & % giảm"})]}),ce&&l.jsxs(Qe,{className:"px-4 pb-4 space-y-3",children:[l.jsx(on,{placeholder:"Dán toàn bộ script cũ vào đây...",value:xe,onChange:W=>{V(W.target.value),_(null)},className:"font-mono text-xs min-h-[120px] resize-none bg-gray-50",spellCheck:!1}),l.jsxs(ve,{size:"sm",className:"gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white",onClick:w,disabled:!xe.trim(),children:[l.jsx(Oa,{className:"w-3.5 h-3.5"}),"Tự điền thông tin"]}),ee&&l.jsxs("div",{className:"space-y-1.5",children:[ee.filled.length>0&&l.jsx("div",{className:"flex flex-wrap gap-1",children:ee.filled.map(W=>l.jsxs("span",{className:"inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium",children:[l.jsx(vt,{className:"w-3 h-3"})," ",W]},W))}),ee.missed.length>0&&l.jsx("div",{className:"flex flex-wrap gap-1",children:ee.missed.map(W=>l.jsxs("span",{className:"inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full",children:["⚠ ",W]},W))}),ee.missed.length>0&&l.jsx("p",{className:"text-xs text-amber-600",children:"Các trường trên cần điền tay."})]})]})]}),pt==="warehouse-contact"&&l.jsxs(Xe,{className:"border-blue-200",children:[l.jsxs(et,{className:"pb-2 pt-3 px-4 cursor-pointer select-none",onClick:()=>{I(W=>!W),ne(null)},children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Oa,{className:"w-4 h-4 text-blue-500"}),l.jsx(tt,{className:"text-sm text-blue-700",children:"Tự điền từ script cũ"})]}),G?l.jsx(As,{className:"w-4 h-4 text-gray-400"}):l.jsx(Cs,{className:"w-4 h-4 text-gray-400"})]}),l.jsx(rn,{className:"text-xs",children:"Dán script đã copy trước đó — tự nhận diện và điền lại các trường"})]}),G&&l.jsxs(Qe,{className:"px-4 pb-4 space-y-3",children:[l.jsx(on,{placeholder:"Dán toàn bộ script cũ vào đây...",value:X,onChange:W=>{P(W.target.value),ne(null)},className:"font-mono text-xs min-h-[120px] resize-none bg-gray-50",spellCheck:!1}),l.jsxs(ve,{size:"sm",className:"gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white",onClick:Z,disabled:!X.trim(),children:[l.jsx(Oa,{className:"w-3.5 h-3.5"}),"Tự điền thông tin"]}),te&&l.jsxs("div",{className:"space-y-1.5",children:[te.filled.length>0&&l.jsx("div",{className:"flex flex-wrap gap-1",children:te.filled.map(W=>l.jsxs("span",{className:"inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium",children:[l.jsx(vt,{className:"w-3 h-3"})," ",W]},W))}),te.missed.length>0&&l.jsx("div",{className:"flex flex-wrap gap-1",children:te.missed.map(W=>l.jsxs("span",{className:"inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full",children:["⚠ ",W]},W))}),te.missed.length>0&&l.jsx("p",{className:"text-xs text-amber-600",children:"Các trường trên cần điền tay."})]})]})]}),eo.length>0&&l.jsxs(Xe,{children:[l.jsxs(et,{className:"pb-3 pt-4 px-4",children:[l.jsx(tt,{className:"text-sm",children:"Thông tin cần điền"}),l.jsx(rn,{className:"text-xs",children:"Điền thông tin vào các trường bên dưới, script sẽ tự động cập nhật"})]}),l.jsx(Qe,{className:"px-4 pb-4 space-y-4",children:eo.map(W=>l.jsxs("div",{className:"space-y-1.5",children:[l.jsxs(Ct,{className:"text-xs font-medium text-gray-700",children:[W.label,l.jsx("span",{className:"ml-1 font-mono text-gray-400 text-xs",children:`{{${W.key}}}`})]}),W.description&&l.jsx("p",{className:"text-xs text-gray-400",children:W.description}),W.type==="textarea"?l.jsx(on,{placeholder:W.placeholder,value:p[W.key]??"",onChange:fe=>ie(W.key,fe.target.value),className:"text-sm min-h-[80px] resize-none"}):W.type==="color"?(()=>{const fe=p[W.key]??"",Me=fe.trim(),Ot=Me&&!Me.startsWith("#")?"#"+Me:Me,vn=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(Ot),Vi=Ze=>/^#[0-9A-Fa-f]{3}$/.test(Ze)?"#"+Ze.slice(1).split("").map(Je=>Je+Je).join(""):Ze,Yi=W.placeholder.match(/#[0-9A-Fa-f]{6}/)?.[0]??Vi(W.placeholder.match(/#[0-9A-Fa-f]{3,6}/)?.[0]??"#66ba32"),Mt=vn?Vi(Ot).toLowerCase():Yi.toLowerCase(),nt=Ze=>{const Je=Ze.trim();if(!Je){ie(W.key,"");return}ie(W.key,Je.startsWith("#")?Je:"#"+Je)};return l.jsxs("div",{className:"space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"color","aria-label":"Chọn màu",value:Mt,onChange:Ze=>ie(W.key,Ze.target.value.toUpperCase()),className:"h-9 w-11 rounded-md border border-gray-200 cursor-pointer bg-white p-1 flex-shrink-0"}),l.jsx(Ge,{type:"text",placeholder:W.placeholder,value:fe,onChange:Ze=>nt(Ze.target.value),className:"text-sm font-mono uppercase flex-1",maxLength:7})]}),Me&&!vn&&l.jsxs("p",{className:"text-xs text-amber-600",children:["⚠ Mã màu chưa hợp lệ. Dùng dạng ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"#RRGGBB"})," hoặc ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"#RGB"}),"."]}),vn&&l.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:[l.jsx("span",{className:"w-4 h-4 rounded border border-gray-200 flex-shrink-0",style:{background:Ot}}),"Xem trước: ",l.jsx("span",{className:"font-mono text-gray-700",children:Ot.toUpperCase()})]})]})})():l.jsx(Ge,{type:W.type==="url"?"url":"text",placeholder:W.placeholder,value:p[W.key]??"",onChange:fe=>ie(W.key,fe.target.value),className:"text-sm"})]},W.key))})]}),qt&&l.jsxs("div",{className:"rounded-lg border border-blue-200 bg-blue-50/60 p-4 text-sm text-blue-900 space-y-1.5",children:[l.jsx("p",{className:"font-semibold",children:"Tự động gắn nhãn cho tất cả sản phẩm"}),l.jsxs("p",{className:"text-xs text-blue-800/90",children:["Script sẽ quét mọi URL chứa ",l.jsx("code",{className:"bg-white/70 px-1 rounded",children:"_p"})," trên trang. Tất cả sản phẩm đều được gắn badge ",l.jsx("strong",{children:"SIÊU SALE"})," (góc dưới), kèm 1 nhãn trạng thái ngẫu nhiên (góc trên): 🔥 Cháy hàng, 😅 Xả Kho, 📦 Hàng còn ít, ❤️ Yêu thích nhất."]}),l.jsx("p",{className:"text-xs text-blue-800/90",children:"Nhãn trạng thái được gán ổn định theo ID sản phẩm (cùng 1 sản phẩm luôn ra cùng 1 nhãn), phân bố đều ~25% mỗi loại. Không cần nhập danh sách ID."})]}),yt&&l.jsx(P3,{fieldValues:p,onFieldChange:ie}),$t&&l.jsx(Y3,{fieldValues:p,onFieldChange:ie}),pe.length>0&&l.jsxs("div",{className:"flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg",children:[l.jsx(Ks,{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsxs("p",{className:"text-xs font-medium text-amber-700",children:["Còn ",pe.length," trường chưa điền:"]}),l.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:pe.map(W=>l.jsx(Gi,{variant:"outline",className:"text-xs text-amber-700 border-amber-300 font-mono",children:`{{${W}}}`},W))})]})]}),pe.length===0&&ae&&l.jsxs("div",{className:"flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg",children:[l.jsx(vt,{className:"w-4 h-4 text-green-600"}),l.jsx("p",{className:"text-xs font-medium text-green-700",children:"Script đã sẵn sàng! Bấm Copy để dùng."})]})]}),j&&l.jsx("div",{className:"space-y-4",children:l.jsxs(Xe,{className:"h-full",children:[l.jsx(et,{className:"pb-2 pt-4 px-4",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx(tt,{className:"text-sm",children:"Preview script"}),l.jsxs(ve,{size:"sm",variant:"ghost",className:"h-7 text-xs gap-1.5",onClick:He,children:[k?l.jsx(vt,{className:"w-3.5 h-3.5 text-green-600"}):l.jsx(sn,{className:"w-3.5 h-3.5"}),k?"Đã copy":"Copy"]})]})}),l.jsx(Qe,{className:"px-4 pb-4",children:l.jsxs(D3,{defaultValue:"formatted",children:[l.jsxs(Xx,{className:"h-7 mb-3",children:[l.jsx(Zd,{value:"formatted",className:"text-xs h-6 px-2",children:"Đã format"}),l.jsx(Zd,{value:"raw",className:"text-xs h-6 px-2",children:"Script thô"})]}),l.jsx(Jd,{value:"formatted",children:l.jsx("div",{className:"relative",children:l.jsx("pre",{className:"bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-auto max-h-[600px] leading-relaxed whitespace-pre-wrap break-all",children:ae||l.jsx("span",{className:"text-gray-500",children:"Script sẽ xuất hiện ở đây..."})})})}),l.jsx(Jd,{value:"raw",children:l.jsx(on,{readOnly:!0,value:ae,className:"font-mono text-xs min-h-[400px] bg-gray-50 resize-none"})})]})})]})})]})})]})}function K3(){const[,i]=Am(),{toast:r}=Un(),[s,c]=y.useState(""),[u,p]=y.useState(""),[h,m]=y.useState(`<script>
(function() {
  // Paste script của bạn vào đây
  // Sử dụng {{TEN_BIEN}} để tạo trường có thể thay thế
  // Ví dụ: var url = '{{WEBSITE_URL}}';
})();
<\/script>`),[x,g]=y.useState({}),[v,j]=y.useState([]),[N,k]=y.useState(!1),O=y.useMemo(()=>Zx(h),[h]),C=y.useMemo(()=>Qx(h,x),[h,x]),T=()=>{const I=`FIELD_${v.length+1}`;j(X=>[...X,{key:I,label:"",placeholder:"",type:"text"}])},R=I=>{j(X=>X.filter((P,te)=>te!==I))},A=(I,X,P)=>{j(te=>te.map((ne,ce)=>ce===I?{...ne,[X]:P}:ne))},L=async()=>{await navigator.clipboard.writeText(C),k(!0),setTimeout(()=>k(!1),2e3),r({title:"Đã copy!",description:"Script đã được copy vào clipboard."})},U=()=>{if(!s.trim()){r({title:"Thiếu tên",description:"Nhập tên template trước khi lưu.",variant:"destructive"});return}const I={id:`custom_${Date.now()}`,name:s,description:"Template tùy chỉnh",category:"Tùy chỉnh",fields:v.filter(X=>X.label),template:h};o3(I),r({title:"Đã lưu template!",description:"Template đã được lưu vào thư viện của bạn."})},G=()=>{if(!u.trim()){r({title:"Thiếu tên website",description:"Vui lòng nhập tên website để lưu.",variant:"destructive"});return}mx({templateId:"custom",templateName:s||"Script tùy chỉnh",websiteName:u,fieldValues:x,generatedScript:C}),r({title:"Đã lưu script!",description:"Script đã được lưu thành công."}),i("/")};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-10",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-3 flex items-center gap-3",children:[l.jsx(ve,{variant:"ghost",size:"icon",className:"h-8 w-8",onClick:()=>i("/"),children:l.jsx(Zr,{className:"w-4 h-4"})}),l.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[l.jsx(Da,{className:"w-4 h-4 text-blue-600"}),l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Script tùy chỉnh"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs(ve,{size:"sm",variant:"outline",className:"gap-1.5 h-8 text-xs",onClick:L,children:[N?l.jsx(vt,{className:"w-3.5 h-3.5 text-green-600"}):l.jsx(sn,{className:"w-3.5 h-3.5"}),N?"Đã copy":"Copy script"]}),l.jsxs(ve,{size:"sm",variant:"outline",className:"gap-1.5 h-8 text-xs",onClick:U,children:[l.jsx(qd,{className:"w-3.5 h-3.5"}),"Lưu template"]}),l.jsxs(ve,{size:"sm",className:"gap-1.5 h-8 text-xs",onClick:G,children:[l.jsx(qd,{className:"w-3.5 h-3.5"}),"Lưu script"]})]})]})}),l.jsxs("main",{className:"max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs(Xe,{children:[l.jsx(et,{className:"pb-3 pt-4 px-4",children:l.jsx(tt,{className:"text-sm",children:"Thông tin"})}),l.jsxs(Qe,{className:"px-4 pb-4 space-y-3",children:[l.jsxs("div",{className:"space-y-1.5",children:[l.jsx(Ct,{className:"text-xs",children:"Tên template/script"}),l.jsx(Ge,{placeholder:"VD: Popup đăng nhập",value:s,onChange:I=>c(I.target.value),className:"text-sm"})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx(Ct,{className:"text-xs",children:"Tên website (để lưu)"}),l.jsx(Ge,{placeholder:"VD: JunJin Store",value:u,onChange:I=>p(I.target.value),className:"text-sm"})]})]})]}),l.jsxs(Xe,{children:[l.jsxs(et,{className:"pb-3 pt-4 px-4",children:[l.jsx(tt,{className:"text-sm",children:"Script template"}),l.jsxs(rn,{className:"text-xs",children:["Paste script của bạn vào đây. Dùng"," ",l.jsx("code",{className:"bg-gray-100 px-1 rounded text-xs",children:"{{TEN_BIEN}}"})," ","(chữ hoa, gạch dưới) để tạo trường thay thế"]})]}),l.jsxs(Qe,{className:"px-4 pb-4",children:[l.jsx(on,{value:h,onChange:I=>m(I.target.value),className:"font-mono text-xs min-h-[300px] resize-none",placeholder:"Paste script của bạn..."}),O.length>0&&l.jsxs("div",{className:"mt-2 flex flex-wrap gap-1",children:[l.jsx("span",{className:"text-xs text-gray-500",children:"Phát hiện:"}),O.map(I=>l.jsx(Gi,{variant:"secondary",className:"text-xs font-mono",children:`{{${I}}}`},I))]})]})]}),l.jsxs(Xe,{children:[l.jsx(et,{className:"pb-2 pt-4 px-4",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx(tt,{className:"text-sm",children:"Trường nhập (tùy chọn)"}),l.jsx(rn,{className:"text-xs",children:"Khai báo nhãn cho từng placeholder"})]}),l.jsxs(ve,{size:"sm",variant:"outline",className:"h-7 text-xs gap-1.5",onClick:T,children:[l.jsx(Kr,{className:"w-3.5 h-3.5"}),"Thêm"]})]})}),l.jsxs(Qe,{className:"px-4 pb-4 space-y-3",children:[v.length===0&&l.jsx("p",{className:"text-xs text-gray-400 text-center py-2",children:"Thêm trường để đặt nhãn và mô tả cho từng placeholder"}),v.map((I,X)=>l.jsxs("div",{className:"flex items-center gap-2 p-3 bg-gray-50 rounded-lg",children:[l.jsxs("div",{className:"flex-1 grid grid-cols-2 gap-2",children:[l.jsx(Ge,{placeholder:"Key (VD: WEBSITE_URL)",value:I.key,onChange:P=>A(X,"key",P.target.value.toUpperCase().replace(/\s/g,"_")),className:"text-xs h-7 font-mono"}),l.jsx(Ge,{placeholder:"Nhãn hiển thị",value:I.label,onChange:P=>A(X,"label",P.target.value),className:"text-xs h-7"})]}),l.jsx(ve,{size:"icon",variant:"ghost",className:"h-7 w-7 text-red-400 hover:text-red-600",onClick:()=>R(X),children:l.jsx(Fs,{className:"w-3.5 h-3.5"})})]},X))]})]}),O.length>0&&l.jsxs(Xe,{children:[l.jsx(et,{className:"pb-3 pt-4 px-4",children:l.jsx(tt,{className:"text-sm",children:"Điền giá trị"})}),l.jsx(Qe,{className:"px-4 pb-4 space-y-3",children:O.map(I=>{const X=v.find(P=>P.key===I);return l.jsxs("div",{className:"space-y-1.5",children:[l.jsxs(Ct,{className:"text-xs font-medium",children:[X?.label||I,l.jsx("span",{className:"ml-1 text-gray-400 font-mono text-xs",children:`{{${I}}}`})]}),l.jsx(Ge,{placeholder:X?.placeholder||`Giá trị cho ${I}`,value:x[I]??"",onChange:P=>g(te=>({...te,[I]:P.target.value})),className:"text-sm"})]},I)})})]})]}),l.jsx("div",{children:l.jsxs(Xe,{className:"sticky top-20",children:[l.jsx(et,{className:"pb-2 pt-4 px-4",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx(tt,{className:"text-sm",children:"Preview script"}),l.jsxs(ve,{size:"sm",variant:"ghost",className:"h-7 text-xs gap-1.5",onClick:L,children:[N?l.jsx(vt,{className:"w-3.5 h-3.5 text-green-600"}):l.jsx(sn,{className:"w-3.5 h-3.5"}),N?"Đã copy":"Copy"]})]})}),l.jsx(Qe,{className:"px-4 pb-4",children:l.jsx("pre",{className:"bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-auto max-h-[600px] leading-relaxed whitespace-pre-wrap break-all",children:C||l.jsx("span",{className:"text-gray-500",children:"Script sẽ xuất hiện ở đây..."})})})]})})]})]})}const Ba=`\r
<script>\r
(function () {\r
  var applied = false;\r
\r
  function styleTitle() {\r
  if (applied && !document.getElementById('tms-title-wrapper')) {\r
  applied = false;\r
  }\r
  if (applied) return;\r
\r
  var el = document.querySelector('h1.ant-typography');\r
  if (!el) return;\r
\r
  if (document.getElementById('tms-title-wrapper')) return;\r
\r
  applied = true;\r
\r
  var wrapper = document.createElement('div');\r
  wrapper.id = 'tms-title-wrapper';\r
  wrapper.style.cssText =\r
  'position:relative;' +\r
  'padding:3px;' +\r
  'border-radius:14px;' +\r
  'background:linear-gradient(to right,#003366,#008C99,#D1C300,#D4AF37);' +\r
  'margin:10px 0;' +\r
  'box-shadow:0 6px 24px rgba(0,51,102,.18);';\r
\r
  var inner = document.createElement('div');\r
  inner.style.cssText =\r
  'background:#fff;' +\r
  'border-radius:12px;' +\r
  'padding:14px 18px;';\r
\r
  el.style.cssText =\r
  'background:linear-gradient(to right,#003366,#008C99,#D1C300,#D4AF37);' +\r
  '-webkit-background-clip:text;' +\r
  '-webkit-text-fill-color:transparent;' +\r
  'background-clip:text;' +\r
  'font-size:1.15rem;' +\r
  'font-weight:800;' +\r
  'line-height:1.45;' +\r
  'margin:0;' +\r
  'padding:0;' +\r
  'display:block;';\r
\r
  el.parentNode.insertBefore(wrapper, el);\r
  wrapper.appendChild(inner);\r
\r
  var badge = document.createElement('div');\r
  badge.style.cssText =\r
  'display:inline-flex;' +\r
  'align-items:center;' +\r
  'gap:6px;' +\r
  'background:linear-gradient(to right,#003366,#008C99);' +\r
  'color:#fff;' +\r
  'font-size:10.5px;' +\r
  'font-weight:700;' +\r
  'letter-spacing:.05em;' +\r
  'text-transform:uppercase;' +\r
  'padding:4px 10px;' +\r
  'border-radius:999px;' +\r
  'margin-bottom:8px;';\r
  badge.innerHTML = '&#x2605; {{BRAND_NAME}} &nbsp;&#xB7;&nbsp; Ch&#xED;nh h&#xE3;ng';\r
\r
  inner.appendChild(badge);\r
  inner.appendChild(el);\r
\r
  var line = document.createElement('div');\r
  line.style.cssText =\r
  'height:2px;' +\r
  'border-radius:999px;' +\r
  'background:linear-gradient(to right,#003366,#008C99,#D1C300,#D4AF37);' +\r
  'margin-top:10px;' +\r
  'opacity:.6;';\r
  inner.appendChild(line);\r
  }\r
\r
  function onUrlChange() {\r
  applied = false;\r
  setTimeout(styleTitle, 300);\r
  setTimeout(styleTitle, 800);\r
  setTimeout(styleTitle, 1800);\r
  }\r
\r
  var _push = history.pushState;\r
  var _replace = history.replaceState;\r
\r
  history.pushState = function () {\r
  _push.apply(this, arguments);\r
  onUrlChange();\r
  };\r
  history.replaceState = function () {\r
  _replace.apply(this, arguments);\r
  onUrlChange();\r
  };\r
\r
  window.addEventListener('popstate', onUrlChange);\r
\r
  var observer = new MutationObserver(function () {\r
  if (!applied || !document.getElementById('tms-title-wrapper')) {\r
  applied = false;\r
  styleTitle();\r
  }\r
  });\r
\r
  observer.observe(document.body, { childList: true, subtree: true });\r
\r
  if (document.readyState === 'loading') {\r
  document.addEventListener('DOMContentLoaded', function () {\r
  setTimeout(styleTitle, 300);\r
  setTimeout(styleTitle, 800);\r
  setTimeout(styleTitle, 2000);\r
  });\r
  } else {\r
  setTimeout(styleTitle, 300);\r
  setTimeout(styleTitle, 800);\r
  setTimeout(styleTitle, 2000);\r
  }\r
})();\r
<\/script>\r
\r
\r
\r
\r
\r
<script>\r
(function(){\r
  var SHOW_DUR=5000,DELAY_SECOND=60000,manualClose=false,isMobile=window.innerWidth<768;\r
  var messages=[\r
  "N\\u1ebfu \\u0111\\u0103ng nh\\u1eadp r\\u1ed3i th\\u1ea5y gi\\u00e1 r\\u1ebb qu\\u00e1 \\u2013 h\\u00e3y t\\xecm s\\u1ea3n ph\\u1ea9m kh\\u00e1c \\u0111i anh em!",\r
  "H\\xe3y g\\xf5 v\\xe0o \\u0111\\xe2y \\u2013 {{BRAND_NAME}} ship t\\u1eadn gi\\u01b0\\u1eddng cho anh em \\ud83d\\ude9a",\r
  "Anh em \\u0111\\u0103ng nh\\u1eadp r\\u1ed3i \\u2013 gi\\u00e1 \\u0111ang hi\\u1ec3n th\\u1ecb r\\u1ebb l\\u1eafm, t\\xecm th\\xeam \\u0111i!",\r
  "G\\xf5 t\\xecm s\\u1ea3n ph\\u1ea9m \\u2013 {{BRAND_NAME}} giao h\\xe0ng t\\u1eadn n\\u01a1i cho anh em \\ud83d\\udce6"\r
  ];\r
  var msgIndex=0,typeTimer=null,fakePH=null;\r
\r
  function getInput(){return document.querySelector('.ant-input-search input.ant-input')||document.querySelector('.ant-input-search input.ant-input-lg')||document.querySelector('input[type="search"]');}\r
  function getWrap(){return document.querySelector('.ant-input-search')||document.querySelector('.ant-input-search-with-button');}\r
\r
  function typeText(el,text,cb){\r
  var i=0;el.innerHTML='';clearInterval(typeTimer);\r
  typeTimer=setInterval(function(){\r
  if(i<text.length){el.innerHTML=text.slice(0,++i)+'<span class="jj-cursor"></span>';}\r
  else{clearInterval(typeTimer);setTimeout(function(){if(cb)cb();},2000);}\r
  },55);\r
  }\r
  function erasText(el,cb){\r
  var text=(el.textContent||'');var i=text.length;clearInterval(typeTimer);\r
  typeTimer=setInterval(function(){\r
  if(i>0){el.innerHTML=text.slice(0,--i)+'<span class="jj-cursor"></span>';}\r
  else{clearInterval(typeTimer);if(cb)cb();}\r
  },28);\r
  }\r
\r
  function cyclePlaceholder(){\r
  var input=getInput();\r
  if(!input||document.activeElement===input){setTimeout(cyclePlaceholder,1500);return;}\r
  var wrap=input.closest('.ant-input-affix-wrapper')||input.parentElement;\r
  if(!wrap){setTimeout(cyclePlaceholder,500);return;}\r
  if(!fakePH){\r
  wrap.style.position='relative';\r
  fakePH=document.createElement('div');fakePH.id='jj-fake-placeholder';wrap.appendChild(fakePH);\r
  var origPH=input.placeholder;input.placeholder='';\r
  input.addEventListener('focus',function(){if(fakePH)fakePH.style.display='none';input.placeholder=origPH;});\r
  input.addEventListener('blur',function(){if(!input.value){fakePH.style.display='';input.placeholder='';}});\r
  }\r
  var txt=messages[msgIndex%messages.length];msgIndex++;\r
  typeText(fakePH,txt,function(){erasText(fakePH,function(){setTimeout(cyclePlaceholder,300);});});\r
  }\r
\r
  function startPlaceholder(){var input=getInput();if(!input){setTimeout(startPlaceholder,400);return;}cyclePlaceholder();}\r
\r
  var inlineMsg=document.createElement('div');inlineMsg.id='junjin-inline-msg';\r
  inlineMsg.innerHTML='<div class="jj-msg-inner"><span class="jj-msg-emoji">&#x1F4AC;</span><span><strong>Anh em</strong>, {{BRAND_NAME}} c\\u00f3 r\\u1ea5t nhi\\u1ec1u s\\u1ea3n ph\\u1ea9m c\\xf4ng ngh\\u1ec7, gia d\\u1ee5ng <span class="jj-msg-hl">r\\u1ebb h\\u01a1n Shopee</span> \\u2013 h\\xe3y th\\u1eed t\\xecm ki\\u1ebfm! &#x1F50D;</span><button class="jj-msg-close" id="jj-close-btn">&#x2715;</button></div>';\r
\r
  function attachBanner(){var wrap=getWrap();if(!wrap){setTimeout(attachBanner,500);return;}wrap.style.position='relative';wrap.appendChild(inlineMsg);var btn=document.getElementById('jj-close-btn');if(btn)btn.addEventListener('click',function(){hideBanner();manualClose=true;});}\r
  function showBanner(){if(manualClose||isMobile)return;inlineMsg.className+=' jj-msg-show';}\r
  function hideBanner(){inlineMsg.className=inlineMsg.className.replace(' jj-msg-show','');}\r
\r
  function addMobileGlow(){\r
  var icon=document.querySelector('.lucide-search')||document.querySelector('svg[class*="lucide-search"]');\r
  if(!icon||icon.closest('.junjin-search-wrap'))return;\r
  var w=document.createElement('span');w.className='junjin-search-wrap';\r
  icon.parentNode.insertBefore(w,icon);w.appendChild(icon);\r
  }\r
\r
  if(document.readyState==='loading'){\r
  document.addEventListener('DOMContentLoaded',function(){startPlaceholder();if(!isMobile)attachBanner();addMobileGlow();});\r
  } else {\r
  startPlaceholder();if(!isMobile)setTimeout(attachBanner,300);addMobileGlow();\r
  }\r
\r
  setTimeout(function(){\r
  if(manualClose||isMobile)return;showBanner();\r
  setTimeout(function(){hideBanner();setTimeout(function(){if(manualClose)return;showBanner();setTimeout(hideBanner,SHOW_DUR);},DELAY_SECOND);},SHOW_DUR);\r
  },40000);\r
\r
  window.addEventListener('resize',function(){isMobile=window.innerWidth<768;});\r
})();\r
<\/script>\r
\r
<script>\r
(function() {\r
\r
  var DONE = false;\r
\r
  function hookHistory(fn) {\r
  var oP = history.pushState;\r
  var oR = history.replaceState;\r
  history.pushState = function() { oP.apply(history, arguments); fn(); };\r
  history.replaceState = function() { oR.apply(history, arguments); fn(); };\r
  window.addEventListener('popstate', fn);\r
  }\r
\r
  function onNavChange() {\r
  DONE = false;\r
  var old = document.getElementById('dx-ln-outer');\r
  if (old) old.remove();\r
  setTimeout(tryRun, 350);\r
  }\r
\r
  function isLoginPage() {\r
  return window.location.href.indexOf('dang-nhap') !== -1;\r
  }\r
\r
  function anNutGooglDuoi() {\r
  if (!isLoginPage()) return;\r
  var divs = document.querySelectorAll('div.flex.flex-col.items-center');\r
  for (var i = 0; i < divs.length; i++) {\r
  var btn = divs[i].querySelector('button');\r
  if (btn && (btn.textContent || '').indexOf('Google') !== -1) {\r
  divs[i].style.setProperty('display', 'none', 'important');\r
  }\r
  }\r
  var allEls = document.querySelectorAll('*');\r
  for (var j = 0; j < allEls.length; j++) {\r
  var el = allEls[j];\r
  if (el.children.length > 0) continue;\r
  var txt = (el.innerText || el.textContent || '').trim();\r
  if (txt === 'ho\\u1eb7c') {\r
  el.style.setProperty('display', 'none', 'important');\r
  if (el.parentNode) el.parentNode.style.setProperty('display', 'none', 'important');\r
  }\r
  }\r
  }\r
\r
  function chenStepsVaoCard() {\r
  if (document.getElementById('dx-ln-steps')) return;\r
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');\r
  if (!card) return;\r
  var target = null;\r
  var allEls = card.querySelectorAll('*');\r
  for (var i = 0; i < allEls.length; i++) {\r
  var t = (allEls[i].innerText || allEls[i].textContent || '').trim();\r
  if (t.indexOf('ho\\u1eb7c \\u0111\\u0103ng nh\\u1eadp b\\u1eb1ng t\\xe0i kho\\u1ea3n') !== -1) {\r
  target = allEls[i]; break;\r
  }\r
  }\r
  var steps = document.createElement('div');\r
  steps.id = 'dx-ln-steps';\r
  steps.innerHTML =\r
  '<div class="dx-step"><div class="snum">1</div><p>Nh\\u1eadp t\\xe0i kho\\u1ea3n<br>ho\\u1eb7c Email</p></div>' +\r
  '<div class="dx-step"><div class="snum">2</div><p>Nh\\u1eadp m\\u1eadt kh\\u1ea9u<br>\\u0111\\u0103ng nh\\u1eadp</p></div>' +\r
  '<div class="dx-step"><div class="snum">3</div><p>Xem gi\\xe1 s\\u1ed1c<br>& mua h\\xe0ng!</p></div>';\r
  steps.style.cssText = 'display:flex;gap:8px;padding:12px 0 4px;';\r
  if (target && target.parentNode) {\r
  target.parentNode.insertBefore(steps, target.nextSibling);\r
  } else {\r
  var cardBody = card.querySelector('.ant-card-body');\r
  if (cardBody) cardBody.insertBefore(steps, cardBody.firstChild);\r
  }\r
  }\r
\r
  function tryRun() {\r
  if (!isLoginPage()) return;\r
  if (DONE) return;\r
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');\r
  if (!card) { setTimeout(tryRun, 250); return; }\r
  DONE = true;\r
  inject(card);\r
  setTimeout(anNutGooglDuoi,  500);  setTimeout(anNutGooglDuoi,  1200);  setTimeout(anNutGooglDuoi,  2500);\r
  setTimeout(chenStepsVaoCard, 600); setTimeout(chenStepsVaoCard, 1400); setTimeout(chenStepsVaoCard, 2600);\r
  }\r
\r
  function inject(card) {\r
  if (document.getElementById('dx-ln-outer')) return;\r
\r
  if (!document.getElementById('dx-ln-css')) {\r
  var s = document.createElement('style');\r
  s.id = 'dx-ln-css';\r
  s.textContent = ''\r
  + '#dx-ln-outer{border-radius:18px;box-shadow:0 8px 40px rgba(45,122,31,.2),0 2px 8px rgba(0,0,0,.06);overflow:hidden;animation:dx-slide-in .4s cubic-bezier(.34,1.56,.64,1) both;}'\r
  + '@keyframes dx-slide-in{0%{opacity:0;transform:translateY(20px) scale(.97)}100%{opacity:1;transform:translateY(0) scale(1)}}'\r
  + '#dx-ln-hero{background:linear-gradient(160deg,#2d7a1f 0%,#3fa82f 40%,#85c756 100%);border-radius:16px 16px 0 0;padding:28px 24px 24px;position:relative;overflow:hidden;}'\r
  + '#dx-ln-hero::before{content:"";position:absolute;top:-30px;right:-30px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.07);}'\r
  + '#dx-ln-hero::after{content:"";position:absolute;bottom:-50px;left:-20px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.05);}'\r
  + '#dx-ln-logo-row{display:flex;align-items:center;gap:12px;margin-bottom:18px;position:relative;z-index:1;}'\r
  + '#dx-ln-logo-icon{width:48px;height:48px;border-radius:14px;background:rgba(255,255,255,.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0;box-shadow:0 2px 12px rgba(0,0,0,.15);}'\r
  + '#dx-ln-logo-text h1{margin:0;font-size:20px;font-weight:700;color:#fff;letter-spacing:-.3px;line-height:1.2;}'\r
  + '#dx-ln-welcome{position:relative;z-index:1;}'\r
  + '#dx-ln-notice{display:flex;align-items:flex-start;gap:10px;background:rgba(255,255,255,.15);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.25);border-radius:12px;padding:12px 14px;position:relative;z-index:1;}'\r
  + '#dx-ln-notice .nx-icon{font-size:20px;flex-shrink:0;margin-top:1px;}'\r
  + '#dx-ln-notice h2{margin:0;font-size:13.5px;font-weight:500;color:#fff;line-height:1.55;}'\r
  + '.dx-dot{position:absolute;border-radius:50%;background:rgba(255,255,255,.12);pointer-events:none;animation:dx-pulse-dot 3s ease-in-out infinite;}'\r
  + '@keyframes dx-pulse-dot{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.3);opacity:.2}}'\r
  + '#dx-ln-body{background:#fff;border-radius:0 0 16px 16px;padding:0;}'\r
  + '#dx-ln-steps{display:flex;gap:8px;}'\r
  + '.dx-step{flex:1;background:#f0fdf4;border:1px solid #d1fae5;border-radius:10px;padding:10px 8px;text-align:center;}'\r
  + '.dx-step .snum{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#85c756;color:#fff;font-size:12px;font-weight:700;margin-bottom:5px;}'\r
  + '.dx-step p{margin:0;font-size:11.5px;color:#374151;font-weight:500;line-height:1.4;}'\r
  + '.ant-btn-primary,.ant-btn-color-primary{box-shadow:0 4px 16px rgba(133,199,86,.45)!important;transition:transform .15s,box-shadow .15s!important;}'\r
  + '.ant-btn-primary:hover,.ant-btn-color-primary:hover{transform:translateY(-2px)!important;box-shadow:0 8px 24px rgba(133,199,86,.55)!important;}'\r
  + '.ant-input:focus,.ant-input-focused{border-color:#85c756!important;box-shadow:0 0 0 3px rgba(133,199,86,.2)!important;}';\r
  document.head.appendChild(s);\r
  }\r
\r
  var outer = document.createElement('div');\r
  outer.id = 'dx-ln-outer';\r
\r
  var hero = document.createElement('div');\r
  hero.id = 'dx-ln-hero';\r
\r
  [{w:80,h:80,t:'10px',r:'80px',delay:'0s'},{w:50,h:50,t:'60px',r:'20px',delay:'1s'},{w:30,h:30,b:'20px',l:'60px',delay:'.5s'}]\r
  .forEach(function(d) {\r
  var dot = document.createElement('div');\r
  dot.className = 'dx-dot';\r
  dot.style.width = d.w+'px'; dot.style.height = d.h+'px';\r
  if (d.t) dot.style.top = d.t; if (d.r) dot.style.right = d.r;\r
  if (d.b) dot.style.bottom = d.b; if (d.l) dot.style.left = d.l;\r
  dot.style.animationDelay = d.delay;\r
  hero.appendChild(dot);\r
  });\r
\r
  hero.innerHTML += ''\r
  + '<div id="dx-ln-logo-row">'\r
  +   '<div id="dx-ln-logo-icon">\\uD83D\\uDECD\\uFE0F</div>'\r
  +   '<div id="dx-ln-logo-text"><h1>{{BRAND_NAME}}</h1></div>'\r
  + '</div>'\r
  + '<div id="dx-ln-welcome">'\r
  +   '<div id="dx-ln-notice">'\r
  +  '<span class="nx-icon">\\uD83D\\uDCCB</span>'\r
  +  '<h2>Ch\\xe0o anh em! Ch\\u1ec9 c\\u1ea7n b\\u1ea5m v\\xe0o n\\xfat \\u0111\\u0103ng nh\\u1eadp b\\u1eb1ng Google l\\xe0 xong, anh em \\u0111\\xe3 s\\u1eed d\\u1ee5ng v\\xe0 th\\u1ea5y \\u0111\\u01b0\\u1ee3c gi\\xe1 s\\u1ea3n ph\\u1ea9m ngay</h2>'\r
  +   '</div>'\r
  + '</div>';\r
\r
  var body = document.createElement('div');\r
  body.id = 'dx-ln-body';\r
\r
  outer.appendChild(hero);\r
  outer.appendChild(body);\r
\r
  card.parentNode.insertBefore(outer, card);\r
  body.appendChild(card);\r
\r
  card.style.border = 'none';\r
  card.style.boxShadow = 'none';\r
  card.style.borderRadius = '0';\r
  }\r
\r
  hookHistory(onNavChange);\r
\r
  function kickoff() {\r
  var tries = 0;\r
  var t = setInterval(function() {\r
  if (!isLoginPage()) { clearInterval(t); return; }\r
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');\r
  if (card) {\r
  clearInterval(t); DONE = true; inject(card);\r
  setTimeout(anNutGooglDuoi,   500);  setTimeout(anNutGooglDuoi,   1200);  setTimeout(anNutGooglDuoi,   2500);\r
  setTimeout(chenStepsVaoCard, 600);  setTimeout(chenStepsVaoCard, 1400);  setTimeout(chenStepsVaoCard, 2600);\r
  return;\r
  }\r
  if (++tries > 30) clearInterval(t);\r
  }, 200);\r
  }\r
\r
  kickoff();\r
\r
})();\r
<\/script>\r
\r
<script>\r
(function () {\r
  var BLOCK_ID = 'jj-shipping-trust-block';\r
\r
  function formatDate(d) {\r
  var months = ['Th01','Th02','Th03','Th04','Th05','Th06',\r
  'Th07','Th08','Th09','Th10','Th11','Th12'];\r
  return d.getDate() + ' ' + months[d.getMonth()];\r
  }\r
\r
  function getDateRange() {\r
  var now = new Date();\r
  var d1 = new Date(now); d1.setDate(now.getDate() + 1);\r
  var d2 = new Date(now); d2.setDate(now.getDate() + 4);\r
  return 'Nh&#7853;n t&#7915; ' + formatDate(d1) + ' - ' + formatDate(d2);\r
  }\r
\r
  function injectCSS() {\r
  if (document.getElementById('jj-stb-css')) return;\r
  var s = document.createElement('style');\r
  s.id = 'jj-stb-css';\r
  s.textContent =\r
  '#jj-shipping-trust-block{font-family:"Segoe UI",Arial,sans-serif;margin:0;padding:0;position:relative}'\r
  + '#jj-shipping-trust-block .jj-row{display:flex;align-items:flex-start;padding:10px 0;border-top:1px solid #f0f0f0;gap:12px}'\r
  + '#jj-shipping-trust-block .jj-label{min-width:110px;max-width:110px;font-size:13px;color:#6b7280;line-height:1.5;padding-top:1px;flex-shrink:0}'\r
  + '#jj-shipping-trust-block .jj-value{display:flex;align-items:center;gap:7px;font-size:13.5px;color:#1a1a1a;font-weight:500;flex:1;flex-wrap:wrap}'\r
  + '#jj-shipping-trust-block .jj-value svg{flex-shrink:0}'\r
  + '#jj-shipping-trust-block .jj-arrow{margin-left:4px;color:#9ca3af;font-size:12px}'\r
  + '#jj-shipping-trust-block .jj-return-trigger{display:flex;align-items:center;gap:7px;cursor:pointer;user-select:none;position:relative}'\r
  + '#jj-shipping-trust-block .jj-chevron{margin-left:4px;color:#9ca3af;font-size:13px;transition:transform .2s}'\r
  + '#jj-shipping-trust-block .jj-chevron.open{transform:rotate(180deg)}'\r
\r
  + '#jj-return-popup{display:none;position:absolute;top:28px;left:-130px;z-index:9999;background:#fff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:0;min-width:320px;max-width:380px;overflow:hidden}'\r
  + '#jj-return-popup.visible{display:block}'\r
\r
  + '@media(max-width:640px){'\r
  +   '#jj-return-popup{position:static !important;top:auto !important;left:auto !important;width:100%;max-width:100%;min-width:0;margin-top:10px;box-shadow:0 4px 16px rgba(0,0,0,.1);}'\r
  +   '#jj-shipping-trust-block .jj-row:last-child{flex-wrap:wrap}'\r
  +   '#jj-shipping-trust-block .jj-row:last-child .jj-value{flex:1 1 100%}'\r
  + '}'\r
\r
  + '#jj-return-popup .jj-popup-header{padding:14px 16px 12px;border-bottom:1px solid #f0f0f0}'\r
  + '#jj-return-popup .jj-popup-header h4{margin:0;font-size:14px;font-weight:700;color:#1a1a1a}'\r
  + '#jj-return-popup .jj-popup-item{display:flex;gap:12px;padding:14px 16px;align-items:flex-start}'\r
  + '#jj-return-popup .jj-popup-icon{flex-shrink:0;width:36px;height:36px;background:#fff3ef;border-radius:50%;display:flex;align-items:center;justify-content:center}'\r
  + '#jj-return-popup .jj-popup-text h5{margin:0 0 5px 0;font-size:13.5px;font-weight:700;color:#1a1a1a}'\r
  + '#jj-return-popup .jj-popup-text p{margin:0;font-size:12.5px;color:#6b7280;line-height:1.6}';\r
  document.head.appendChild(s);\r
  }\r
\r
  function buildBlock() {\r
  var div = document.createElement('div');\r
  div.id = BLOCK_ID;\r
\r
  div.innerHTML =\r
  '<div class="jj-row">'\r
  +   '<div class="jj-label">V&#7853;n Chuy&#7875;n</div>'\r
  +   '<div class="jj-value">'\r
  +  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'\r
  +  '<span>' + getDateRange() + '</span>'\r
  +  '<span class="jj-arrow">&#8250;</span>'\r
  +   '</div>'\r
  + '</div>'\r
\r
  + '<div class="jj-row">'\r
  +   '<div class="jj-label">An T&#226;m Mua S&#7855;m C&#249;ng {{BRAND_NAME}}</div>'\r
  +   '<div class="jj-value">'\r
  +  '<div class="jj-return-trigger" id="jj-return-trigger">'\r
  +  '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'\r
  +  'Tr&#7843; h&#224;ng mi&#7877;n ph&#237; 7 ng&#224;y'\r
  +  '<span class="jj-chevron" id="jj-chevron">&#8964;</span>'\r
  +  '</div>'\r
  +  '<div id="jj-return-popup">'\r
  +  '<div class="jj-popup-header">'\r
  +  '<h4>An t&#226;m mua s&#7855;m c&#249;ng {{BRAND_NAME}}</h4>'\r
  +  '</div>'\r
  +  '<div class="jj-popup-item">'\r
  +  '<div class="jj-popup-icon">'\r
  +  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'\r
  +  '</div>'\r
  +  '<div class="jj-popup-text">'\r
  +  '<h5>Tr&#7843; h&#224;ng mi&#7877;n ph&#237; 7 ng&#224;y</h5>'\r
  +  '<p>Mi&#7877;n ph&#237; Tr&#7843; h&#224;ng trong 7 ng&#224;y &#273;&#7875; &#273;&#7843;m b&#7843;o b&#7841;n ho&#224;n to&#224;n c&#243; th&#7875; y&#234;n t&#226;m khi mua h&#224;ng &#7903; {{BRAND_NAME}}.<br>Ngo&#224;i ra, t&#7841;i th&#7901;i &#273;i&#7875;m m&#7903; h&#224;ng, b&#7841;n vui l&#242;ng quay video n&#7871;u ph&#225;t sinh l&#7895;i s&#7869; &#273;&#432;&#7907;c tr&#7843; h&#224;ng mi&#7877;n ph&#237;, shop ch&#7883;u ship 2 chi&#7873;u.</p>'\r
  +  '</div>'\r
  +  '</div>'\r
  +  '</div>'\r
  +   '</div>'\r
  + '</div>';\r
\r
  return div;\r
  }\r
\r
  function attachToggle() {\r
  var trigger = document.getElementById('jj-return-trigger');\r
  var popup   = document.getElementById('jj-return-popup');\r
  var chevron = document.getElementById('jj-chevron');\r
  if (!trigger || !popup) return;\r
\r
  trigger.addEventListener('click', function (e) {\r
  e.stopPropagation();\r
  var open = popup.classList.toggle('visible');\r
  if (chevron) chevron.classList.toggle('open', open);\r
  });\r
\r
  document.addEventListener('click', function () {\r
  popup.classList.remove('visible');\r
  if (chevron) chevron.classList.remove('open');\r
  });\r
  }\r
\r
  function findTarget() {\r
  var labels = document.querySelectorAll('label.ant-form-item-no-colon');\r
  for (var i = 0; i < labels.length; i++) {\r
  if (labels[i].textContent.trim() === 'SKU') {\r
  var row = labels[i].closest('.ant-row.ant-form-item-row');\r
  if (row) return row;\r
  }\r
  }\r
  return null;\r
  }\r
\r
  function inject() {\r
  if (document.getElementById(BLOCK_ID)) return true;\r
  var target = findTarget();\r
  if (!target) return false;\r
  injectCSS();\r
  var block = buildBlock();\r
  target.parentNode.insertBefore(block, target.nextSibling);\r
  attachToggle();\r
  return true;\r
  }\r
\r
  function removeBlock() {\r
  var old = document.getElementById(BLOCK_ID);\r
  if (old && old.parentNode) old.parentNode.removeChild(old);\r
  }\r
\r
  function tryInject() {\r
  if (!inject()) {\r
  var tries = 0;\r
  var t = setInterval(function () {\r
  if (inject() || ++tries > 30) clearInterval(t);\r
  }, 300);\r
  }\r
  }\r
\r
  if (!window.__jjShipHooked) {\r
  window.__jjShipHooked = true;\r
  var _oP = history.pushState;\r
  var _oR = history.replaceState;\r
  history.pushState = function () {\r
  _oP.apply(history, arguments);\r
  setTimeout(function () { removeBlock(); tryInject(); }, 400);\r
  };\r
  history.replaceState = function () {\r
  _oR.apply(history, arguments);\r
  setTimeout(function () { removeBlock(); tryInject(); }, 400);\r
  };\r
  window.addEventListener('popstate', function () {\r
  setTimeout(function () { removeBlock(); tryInject(); }, 400);\r
  });\r
  }\r
\r
  tryInject();\r
})();\r
<\/script>\r
<script>\r
(function(){\r
  var HO=['Nguyễn','Trần','Lê','Phạm','Hoàng','Huỳnh','Phan','Vũ','Võ','Đặng','Bùi','Đỗ','Hồ','Ngô','Dương','Lý','Đinh','Lâm','Mai','Cao'];\r
  var TEN=['Anh','Lan','Hoa','Mai','Linh','Hương','Thảo','Ngọc','Trang','Yến','Hà','Thu','Nhung','Vân','Quỳnh','Phương','Nam','Tuấn','Hùng','Minh','Đức','Khoa','Long','Bình','Dũng','Tú','Phát','Quang','Thành','Hải','Dung','Hiền','Lâm','Tâm','Trung','Phúc','Khánh','Bảo','Vy','Nhi','Tiên','Giang','Lộc','Thiện','Khang'];\r
  var TINH=['Hà Nội','TP.HCM','Đà Nẵng','Hải Phòng','Cần Thơ','An Giang','Bà Rịa–Vũng Tàu','Bắc Giang','Bắc Ninh','Bến Tre','Bình Định','Bình Dương','Đồng Nai','Gia Lai','Khánh Hòa','Kiên Giang','Lâm Đồng','Long An','Nam Định','Nghệ An','Ninh Bình','Phú Thọ','Quảng Nam','Quảng Ninh','Thanh Hóa','Thừa Thiên Huế','Tiền Giang','Vĩnh Long','Vĩnh Phúc','Yên Bái','Hà Tĩnh','Bình Phước','Đắk Lắk','Tây Ninh','Bạc Liêu','Cà Mau','Hà Giang','Lào Cai','Sơn La','Quảng Bình'];\r
  var SP=[\r
  {icon:'🤖',ten:'Máy hút bụi & lau sàn Xiaomi Deerma MOVA X40 Plus'},\r
  {icon:'🤖',ten:'Máy lau nhà Deerma MOVA X40 Plus nước nóng 90°C'},\r
  {icon:'🤖',ten:'Deerma MOVA X40 Plus - tự sấy giẻ lau 25.000Pa'},\r
  {icon:'💡',ten:'Đèn bàn Syrinx JW5512 cảm biến vẫy tay CRI≥90'},\r
  {icon:'💧',ten:'Máy hút ẩm Xiaomi WIDETECH 30L kết nối Mihome'},\r
  {icon:'💧',ten:'Máy hút ẩm MYTEM Rooming Dehumidifier 300ml'},\r
  {icon:'💧',ten:'Máy Hút Ẩm Xiaomi VINO 16L cảm ứng thông minh'},\r
  {icon:'💧',ten:'Hút ẩm Xiaomi Vino 20L kết nối app Mihome'},\r
  {icon:'📷',ten:'Camera hành trình 70Mai M310'},\r
  {icon:'🗺️',ten:'Phần mềm Vietmap Live Pro dẫn đường ô tô 1 năm'},\r
  {icon:'⚡',ten:'Củ sạc nhanh 20W Aukey Omnia USB-C PD PA-B1'},\r
  {icon:'🪑',ten:'Ghế ô tô trẻ em POPMAX HOORAY xoay 360° iSOFIX'},\r
  {icon:'🔊',ten:'Loa Bluetooth JBL BassPro Go loa siêu trầm'},\r
  {icon:'📱',ten:'Kính cường lực iPhone Full màn MKING Pro Max'},\r
  {icon:'⌚',ten:'Đồng hồ thông minh Xiaomi 70mai Maimo Watch R'},\r
  {icon:'⚡',ten:'Củ sạc nhanh 30W Anker Zolo A2698 USB-C'},\r
  {icon:'🔌',ten:'Ổ điện thông minh Wi-Fi DELIXI cổng C 20W'},\r
  {icon:'🎧',ten:'Tai nghe Bluetooth Monster Maxstar MQO33 Gaming'},\r
  {icon:'⚡',ten:'Sạc dự phòng 20.000mAh GaN siêu mỏng'},\r
  {icon:'📱',ten:'Cáp sạc nhanh 65W bện dù chính hãng'}\r
  ];\r
  var PHUT=[1,2,3,4,5,6,7,8,9,10,11,12,14,15,17,18,20,22,25,30];\r
\r
  function r(a){return a[Math.floor(Math.random()*a.length)];}\r
  function data(){var sp=r(SP);return{icon:sp.icon,ten:r(HO)+' '+r(TEN)[0]+'.',tinh:r(TINH),sp:sp.ten,phut:r(PHUT)};}\r
\r
  var s=document.createElement('style');\r
  s.textContent='@keyframes ppSlideUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes ppSlideDown{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(14px)}}#pp-sp-wrap{animation:ppSlideUp .38s cubic-bezier(.34,1.1,.64,1) both}#pp-sp-wrap.hide{animation:ppSlideDown .28s ease forwards}';\r
  document.head.appendChild(s);\r
\r
  var wrap=document.createElement('div');\r
  wrap.id='pp-sp-wrap';\r
  Object.assign(wrap.style,{position:'fixed',bottom:'66px',left:'51px',zIndex:'999998',maxWidth:'320px',width:'calc(100vw - 40px)',fontFamily:'Inter,system-ui,-apple-system,sans-serif'});\r
\r
  function render(d){\r
  wrap.innerHTML=\r
  '<div style="background:#fff;border-radius:14px;padding:12px 14px 10px;box-shadow:0 4px 24px rgba(0,0,0,.13),0 1px 4px rgba(0,0,0,.08);display:flex;align-items:flex-start;gap:10px;position:relative;border:1px solid rgba(0,0,0,.06);">'+\r
  '<div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#edfce0,#d4f5be);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;box-shadow:0 2px 6px rgba(102,186,50,.18);">'+d.icon+'</div>'+\r
  '<div style="flex:1;min-width:0;">'+\r
  '<div style="font-size:13px;color:#1a1a1a;line-height:1.5;"><strong style="color:#111;">'+d.ten+'</strong> <span style="color:#555;">('+d.tinh+')</span> vừa mua <strong style="color:#3a7d0e;">'+d.sp+'</strong> giá ưu đãi</div>'+\r
  '<div style="margin-top:5px;display:flex;align-items:center;gap:6px;">'+\r
  '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#66ba32;flex-shrink:0;"></span>'+\r
  '<span style="font-size:11.5px;color:#888;">'+d.phut+' phút trước</span>'+\r
  '<span style="margin-left:auto;background:#f0fbe8;border:1px solid rgba(102,186,50,.25);border-radius:999px;padding:1px 8px;font-size:10.5px;font-weight:700;color:#4f9823;">{{BRAND_NAME}}</span>'+\r
  '</div>'+\r
  '</div>'+\r
  '<button onclick="document.getElementById(\\'pp-sp-wrap\\').remove()" style="position:absolute;top:6px;right:8px;background:none;border:none;cursor:pointer;color:#bbb;font-size:14px;line-height:1;padding:2px 4px;">×</button>'+\r
  '</div>';\r
  }\r
\r
  var SHOW_DUR = 3000;\r
  var OUT  = 400;\r
  var GAPS  = [10000, 30000, 40000];\r
  var gapIdx   = 0;\r
\r
  function showNext(){\r
  if(!document.body.contains(wrap)) document.body.appendChild(wrap);\r
  wrap.classList.remove('hide');\r
  void wrap.offsetWidth;\r
  render(data());\r
\r
  setTimeout(function(){\r
  wrap.classList.add('hide');\r
\r
  var gap = GAPS[gapIdx % GAPS.length];\r
  gapIdx++;\r
\r
  setTimeout(showNext, OUT + gap);\r
  }, SHOW_DUR);\r
  }\r
\r
  setTimeout(showNext, 10000);\r
})();\r
<\/script>\r
\r
\r
\r
\r
\r
\r
<script>\r
(function() {\r
\r
  var REVIEWS = [\r
  { user:'tranminhtu98',  stars:5, date:'2026-03-18 09:24', text:'Đăng nhập xong thấy nhiều sản phẩm giá rẻ thật sự, rẻ hơn cả Shopee mà hàng vẫn xịn. Mua thêm mấy cái nữa rồi.', likes:12 },\r
  { user:'nguyenvanan_hcm',  stars:5, date:'2026-03-15 14:37', text:'Thanh toán COD tiện lắm, không cần thẻ vẫn mua được. Hàng giao nhanh hơn tôi nghĩ, đóng gói chắc chắn.', likes:8, reply:'Cảm ơn anh đã tin tưởng shop ạ! Anh có nhu cầu gì cứ nhắn nhé 🙏' },\r
  { user:'hoangphuoc_bmt',   stars:5, date:'2026-03-12 21:05', text:'Đăng ký hơi mất công tí xíu nhưng xong rồi ổn, giá sản phẩm nào cũng ngon hết. Sẽ mua tiếp.', likes:5 },\r
  { user:'levan_longg',  stars:5, date:'2026-03-10 08:11', text:'Xịn thật! Mua về dùng rất phê. Chất lượng không chê vào đâu được, không cần mang theo dây riêng.', likes:15, reply:'Shop cảm ơn anh đã review chi tiết ạ! Anh em ghé shop thường xuyên nhé 😊' },\r
  { user:'phamthithu_dn',  stars:5, date:'2026-03-08 16:50', text:'Mới đăng ký lần đầu thấy shop có nhiều deal hay, giá gốc rõ ràng không lăng nhăng. Tin tưởng mua được.', likes:6 },\r
  { user:'quocbao_2k3',  stars:5, date:'2026-03-06 20:30', text:'Hàng xịn thật, y hình, giao đúng hẹn. Giá tốt, chất lượng không có gì chê. Shop hơi chậm trả lời nhưng hàng ổn là được.', likes:3 },\r
  { user:'mylinh.shop',  stars:5, date:'2026-03-04 11:15', text:'Mình mua để kinh doanh, nhập lô 10 cái giá ngon vl. Rẻ hơn mấy chỗ khác cả trăm nghìn/cái. Đặt thêm tuần sau.', likes:20 },\r
  { user:'trantanphat99',  stars:5, date:'2026-03-01 18:44', text:'Hàng chính hãng thật, tem nhãn đàng hoàng. Đã mua 3 lần rồi lần nào cũng ok. Shop tư vấn nhiệt tình nữa.', likes:11 },\r
  { user:'namphuongbui',  stars:5, date:'2026-02-27 10:22', text:'Hàng tốt, giá rẻ hơn Tiki Shopee kha khá. COD thanh toán tiện không cần thẻ. Shop hơi chậm reply nhưng hàng đủ nét rồi.', likes:7 },\r
  { user:'khanhlinh2025',  stars:5, date:'2026-02-24 15:03', text:'Sản phẩm chất lượng, dùng thấy phê thật. Bao bì đẹp, giá lại mềm. Recommend mạnh cho ae chưa biết shop này.', likes:18, reply:'Shop cảm ơn chị ủng hộ nhiệt tình ạ! Hẹn gặp lại chị lần sau 💚' },\r
  ];\r
\r
  var _fn = ['nguyen','tran','le','pham','hoang','vo','dang','bui','do','ngo','duong','ly','dinh','truong'];\r
  var _mn = ['van','thi','thanh','minh','quoc','huu','duc','kim','thu','hong','bich','anh','lan','hai'];\r
  var _ln = ['an','hung','nam','linh','long','phat','thu','hoa','tuan','manh','dat','hai','son','khoa','khanh','vy','nhi','bao','cuong','dung'];\r
  var _sfx = ['88','99','2k','2k1','2k2','2k3','_hn','_hcm','_dn','_ct','98','97','96','_sg','2025','2024','123','_vn'];\r
\r
  var TEXTS5 = [\r
  'Shop uy tín, hàng chất lượng, giao nhanh. Sẽ mua lại lần sau!',\r
  'Đặt hàng dễ dàng, thanh toán COD tiện. Hàng y như mô tả, rất hài lòng.',\r
  'Giá tốt, hàng xịn. Shop hơi chậm trả lời nhưng hàng ổn nên thôi.',\r
  'Hàng tốt lắm, chất lượng không có gì chê. Shop reply hơi chậm nhưng hàng đủ nét.',\r
  'Mua lần đầu đã thấy ưng, chất lượng vượt kỳ vọng so với giá tiền.',\r
  'Shop tư vấn nhiệt tình, hàng về đúng hẹn, đóng gói rất cẩn thận.',\r
  'Rất hài lòng! Hàng đẹp đúng mô tả, giao hàng siêu nhanh luôn.',\r
  'Hàng xịn thật sự, dùng thấy phê. Shop nhắn hơi chậm nhưng hàng tốt bù lại.',\r
  'Chất lượng tốt, giá hợp lý. Sẽ ủng hộ shop dài dài không đổi shop.',\r
  'Shop phản hồi có hơi chậm, nhưng hàng đúng mô tả, chất lượng ổn. 5 sao xứng đáng!',\r
  'Hàng về nhanh, đóng gói cẩn thận. Shop trả lời tin nhắn hơi lâu nhưng hàng tốt.',\r
  'Sản phẩm chất lượng, giá rẻ hơn ngoài thị trường. Recommend mạnh cho ae!',\r
  'Mua để kinh doanh, giá nhập ngon. Hàng xịn, shop hơi chậm nhưng chấp nhận được.',\r
  'Hàng y hình, chính hãng, đóng gói chắc. Sẽ tiếp tục ủng hộ shop.',\r
  ];\r
\r
  function rInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }\r
  function rItem(arr) { return arr[rInt(0, arr.length - 1)]; }\r
\r
  function genName() {\r
  var name = rItem(_fn);\r
  if (Math.random() > 0.35) name += rItem(_mn);\r
  name += rItem(_ln);\r
  if (Math.random() > 0.45) name += rItem(_sfx);\r
  return name;\r
  }\r
\r
  function genDate(idx, total) {\r
  var start = new Date('2025-01-01').getTime();\r
  var end   = new Date('2026-03-15').getTime();\r
  var t = start + (end - start) * (1 - idx / total);\r
  var d = new Date(t + rInt(-4, 4) * 86400000);\r
  var p = function(n){ return n < 10 ? '0'+n : ''+n; };\r
  return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+' '+p(rInt(7,22))+':'+p(rInt(0,59));\r
  }\r
\r
  function genStar() { return 5; }\r
\r
  var TARGET = 400;\r
  var toGen = TARGET - REVIEWS.length;\r
  for (var i = 0; i < toGen; i++) {\r
  REVIEWS.push({\r
  user:  genName(),\r
  stars: genStar(),\r
  date:  genDate(i, toGen),\r
  text:  rItem(TEXTS5),\r
  likes: rInt(0, 28)\r
  });\r
  }\r
\r
  REVIEWS.sort(function(a, b) { return a.date < b.date ? 1 : -1; });\r
\r
  var COLORS = ['#16a34a','#2563eb','#9333ea','#dc2626','#ea580c','#0891b2','#4f46e5','#be185d'];\r
  var PAGE_SIZE = 3;\r
  var currentShown = PAGE_SIZE;\r
  var activeFilter = 0;\r
\r
  function initials(name) {\r
  return name.replace(/[^a-zA-Z\\u00C0-\\u024F]/g,'').substring(0,2).toUpperCase() || 'U';\r
  }\r
\r
  function stars(n, size) {\r
  var sz = size || 16;\r
  var s = '';\r
  for (var i = 1; i <= 5; i++) {\r
  s += '<span style="color:'+(i<=n?'#f59e0b':'#d1d5db')+';font-size:'+sz+'px">★</span>';\r
  }\r
  return s;\r
  }\r
\r
  function starsFloat(n, size) {\r
  var sz = size || 16;\r
  var s = '';\r
  var full = Math.floor(n);\r
  var frac = n - full;\r
  for (var i = 1; i <= 5; i++) {\r
  if (i <= full) {\r
  s += '<span style="color:#f59e0b;font-size:'+sz+'px">&#9733;</span>';\r
  } else if (i === full + 1 && frac > 0) {\r
  var pct = Math.round(frac * 100);\r
  s += '<span style="font-size:'+sz+'px;background:linear-gradient(to right,#f59e0b '+pct+'%,#d1d5db '+pct+'%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">&#9733;</span>';\r
  } else {\r
  s += '<span style="color:#d1d5db;font-size:'+sz+'px">&#9733;</span>';\r
  }\r
  }\r
  return s;\r
  }\r
\r
  function countStars(n) {\r
  return REVIEWS.filter(function(r){ return r.stars === n; }).length;\r
  }\r
\r
  function getFiltered(filter) {\r
  return REVIEWS.filter(function(r){ return filter === 0 || r.stars === filter; });\r
  }\r
\r
  function renderItem(r, idx) {\r
  var color = COLORS[idx % COLORS.length];\r
  var daysSeed = (idx * 137 + 53) % 49 + 2;\r
  var replyHtml = r.reply\r
  ? '<div style="background:#f9fafb;border-left:3px solid #85c756;border-radius:6px;padding:10px 14px;margin-top:10px">'\r
  + '<div style="font-size:12px;font-weight:700;color:#15803d;margin-bottom:4px">📢 Phản Hồi Của Người Bán</div>'\r
  + '<div style="font-size:13px;color:#374151">' + r.reply + '</div>'\r
  + '</div>'\r
  : '';\r
  return '<div class="dx-rv-item" style="padding:16px 0;border-bottom:1px solid #f3f4f6">'\r
  + '<div style="display:flex;align-items:flex-start;gap:12px">'\r
  +   '<div style="width:38px;height:38px;border-radius:50%;background:'+color+';flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff">'+initials(r.user)+'</div>'\r
  +   '<div style="flex:1;min-width:0">'\r
  +  '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:2px">'\r
  +  '<span style="font-weight:600;font-size:14px;color:#1f2937">'+r.user+'</span>'\r
  +  '<span style="display:inline-flex;align-items:center;gap:3px;font-size:11px;font-weight:600;color:#15803d;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:999px;padding:1px 8px">'\r
  +  '<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'\r
  +  'Đã mua tại {{SITE}}'\r
  +  '</span>'\r
  +  '</div>'\r
  +  '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">'\r
  +  '<div>'+stars(r.stars,16)+'</div>'\r
  +  '<span style="display:inline-flex;align-items:center;gap:3px;font-size:11px;font-weight:600;color:#e11d48;">'\r
  +  '<svg width="10" height="10" viewBox="0 0 24 24" fill="#e11d48"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'\r
  +  'Sẽ giới thiệu cho bạn bè, người thân'\r
  +  '</span>'\r
  +  '</div>'\r
  +  '<div style="font-size:11.5px;color:#9ca3af;margin-bottom:8px">'+r.date+'</div>'\r
  +  '<div style="font-size:14px;color:#374151;line-height:1.6">'+r.text+'</div>'\r
  +  replyHtml\r
  +  '<div style="margin-top:10px;display:flex;align-items:center;gap:6px">'\r
  +  '<span style="font-size:12px;color:#9ca3af;cursor:pointer">👍 '+(r.likes||0)+'</span>'\r
  +  '<span style="font-size:12px;color:#d1d5db;margin:0 4px">|</span>'\r
  +  '<span style="font-size:12px;color:#9ca3af;cursor:pointer">Hữu ích?</span>'\r
  +  '<span style="font-size:12px;color:#d1d5db;margin:0 4px">|</span>'\r
  +  '<span style="font-size:12px;color:#6b7280">Đã dùng khoảng '+daysSeed+' ngày</span>'\r
  +  '</div>'\r
  +   '</div>'\r
  + '</div>'\r
  + '</div>';\r
  }\r
\r
  function refreshList() {\r
  var list = getFiltered(activeFilter);\r
  var shown = list.slice(0, currentShown);\r
  var html = '';\r
  shown.forEach(function(r, idx){ html += renderItem(r, idx); });\r
  document.getElementById('dx-rv-list').innerHTML = html;\r
  var btnWrap = document.getElementById('dx-rv-more-wrap');\r
  if (currentShown >= list.length) {\r
  btnWrap.style.display = 'none';\r
  } else {\r
  btnWrap.style.display = 'flex';\r
  document.getElementById('dx-rv-more-btn').textContent = 'Xem thêm đánh giá ('+(list.length - currentShown)+')';\r
  }\r
  }\r
\r
  function buildBlock() {\r
  function _sRand(seed, min, max) {\r
  var x = Math.sin(seed + 1) * 10000;\r
  var r = x - Math.floor(x);\r
  return Math.floor(r * (max - min + 1)) + min;\r
  }\r
  function _pSeed() {\r
  var url = window.location.href;\r
  var hash = 0;\r
  for (var i = 0; i < url.length; i++) hash = url.charCodeAt(i) + ((hash << 5) - hash);\r
  return Math.abs(hash);\r
  }\r
  var _seed = _pSeed();\r
  var _starInt  = _sRand(_seed, 40, 50);\r
  var _starAvg  = (_starInt / 10).toFixed(1);\r
  var _buyCount   = _sRand(_seed + 2, 50, 400);\r
  var _reviewPct  = _sRand(_seed + 1, 20, 70);\r
  var _reviewCount = Math.floor(_buyCount * _reviewPct / 100);\r
  if (_reviewCount < 5) _reviewCount = 5;\r
\r
  var _r = window._gtmRating || {};\r
  var total = _r.reviews || _reviewCount;\r
  if (REVIEWS.length > total) REVIEWS.splice(total);\r
  var AVG_DISPLAY = (_r.avg || _starAvg).toString().replace('.', ',');\r
  var c5 = countStars(5), c4 = countStars(4), c3 = countStars(3), c2 = countStars(2), c1 = countStars(1);\r
\r
  var block = document.createElement('div');\r
  block.id = 'dx-fake-reviews';\r
  block.style.cssText = 'background:#fff;border-radius:10px;padding:20px;margin-bottom:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;border:1px solid #e5e7eb';\r
\r
  block.innerHTML = ''\r
  + '<div style="font-size:14px;font-weight:700;color:#111827;letter-spacing:.5px;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid #f3f4f6">ĐÁNH GIÁ SẢN PHẨM</div>'\r
  + '<div style="display:flex;align-items:center;gap:20px;margin-bottom:16px;flex-wrap:wrap">'\r
  +   '<div style="text-align:center">'\r
  +  '<div style="font-size:48px;font-weight:800;color:#f59e0b;line-height:1">'+AVG_DISPLAY+'</div>'\r
  +  '<div style="font-size:12px;color:#6b7280;margin-top:2px">trên 5</div>'\r
  +  '<div style="margin-top:6px">'+starsFloat(parseFloat(_starAvg),20)+'</div>'\r
  +  '<div style="font-size:12px;color:#6b7280;margin-top:4px">('+total+' đánh giá)</div>'\r
  +   '</div>'\r
  +   '<div id="dx-rv-filters" style="display:flex;flex-wrap:wrap;gap:6px">'\r
  +  '<button class="dx-rv-tab dx-rv-active" data-f="0">Tất Cả ('+total+')</button>'\r
  +  '<button class="dx-rv-tab" data-f="5">5 Sao ('+c5+')</button>'\r
  +  (c4>0?'<button class="dx-rv-tab" data-f="4">4 Sao ('+c4+')</button>':'')\r
  +  (c3>0?'<button class="dx-rv-tab" data-f="3">3 Sao ('+c3+')</button>':'')\r
  +  (c2>0?'<button class="dx-rv-tab" data-f="2">2 Sao ('+c2+')</button>':'')\r
  +  (c1>0?'<button class="dx-rv-tab" data-f="1">1 Sao ('+c1+')</button>':'')\r
  +   '</div>'\r
  + '</div>'\r
  + '<div id="dx-rv-list"></div>'\r
  + '<div id="dx-rv-more-wrap" style="display:flex;justify-content:center;margin-top:16px">'\r
  +   '<button id="dx-rv-more-btn" style="background:#fff;border:1.5px solid #15803d;color:#15803d;border-radius:24px;padding:10px 28px;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s">Xem thêm đánh giá</button>'\r
  + '</div>';\r
\r
  if (!document.getElementById('dx-rv-css')) {\r
  var s = document.createElement('style');\r
  s.id = 'dx-rv-css';\r
  s.textContent = ''\r
  + '.dx-rv-tab{background:#fff;border:1px solid #d1d5db;border-radius:20px;padding:5px 12px;font-size:12.5px;cursor:pointer;color:#374151;font-weight:500;transition:all .15s}'\r
  + '.dx-rv-tab.dx-rv-active{background:#dc2626;border-color:#dc2626;color:#fff;font-weight:700}'\r
  + '.dx-rv-tab:hover:not(.dx-rv-active){border-color:#85c756;color:#15803d}'\r
  + '.dx-rv-item:last-child{border-bottom:none}'\r
  + '#dx-rv-more-btn:hover{background:#15803d;color:#fff}';\r
  document.head.appendChild(s);\r
  }\r
\r
  setTimeout(function() {\r
  refreshList();\r
  var tabs = block.querySelectorAll('.dx-rv-tab');\r
  tabs.forEach(function(tab) {\r
  tab.addEventListener('click', function() {\r
  tabs.forEach(function(t){ t.classList.remove('dx-rv-active'); });\r
  tab.classList.add('dx-rv-active');\r
  activeFilter = parseInt(tab.getAttribute('data-f'), 10);\r
  currentShown = PAGE_SIZE;\r
  refreshList();\r
  });\r
  });\r
  var moreBtn = document.getElementById('dx-rv-more-btn');\r
  if (moreBtn) {\r
  moreBtn.addEventListener('click', function() {\r
  currentShown += PAGE_SIZE;\r
  refreshList();\r
  });\r
  }\r
  }, 100);\r
\r
  return block;\r
  }\r
\r
  function inject() {\r
  if (document.getElementById('dx-fake-reviews')) return;\r
  var target = document.querySelector('.mb-6.mt-4.border-b.bg-white');\r
  if (!target) return false;\r
  var block = buildBlock();\r
  var nx = target.nextSibling;\r
  nx ? target.parentNode.insertBefore(block, nx) : target.parentNode.appendChild(block);\r
  return true;\r
  }\r
\r
  var oP = history.pushState, oR = history.replaceState;\r
  history.pushState  = function(){ oP.apply(history,arguments); setTimeout(tryInject,400); };\r
  history.replaceState = function(){ oR.apply(history,arguments); setTimeout(tryInject,400); };\r
  window.addEventListener('popstate', function(){ setTimeout(tryInject,400); });\r
\r
  function tryInject() {\r
  var el = document.getElementById('dx-fake-reviews');\r
  if (el) el.remove();\r
  currentShown = PAGE_SIZE;\r
  activeFilter = 0;\r
  var tries = 0;\r
  var t = setInterval(function() {\r
  if (inject() || ++tries > 25) clearInterval(t);\r
  }, 200);\r
  }\r
\r
  tryInject();\r
\r
})();\r
<\/script>\r
\r
\r
\r
<script>\r
(function() {\r
\r
  var DONE = false;\r
  var lastUrl = '';\r
\r
  var FIELDS = [\r
  { keys: ['username','t\\xe0i kho\\u1ea3n','account'], placeholder: 'nguyenvana', icon: '\\uD83D\\uDC64', hint: 'Ch\\u1ec9 ch\\u1eef th\\u01b0\\u1eddng, s\\u1ed1, d\\u1ea5u g\\u1ea1ch d\\u01b0\\u1edbi \\u2014 kh\\xf4ng d\\u1ea5u, kh\\xf4ng k\\xfd t\\u1ef1 \\u0111\\u1eb7c bi\\u1ec7t', color: '#16a34a' },\r
  { keys: ['name','h\\u1ecd','fullname'], placeholder: 'Nguy\\u1ec5n V\\u0103n A', icon: '\\uD83D\\uDC4B', hint: 'H\\u1ecd t\\xean th\\u1eadt \\u0111\\u1ec3 {{BRAND_NAME}} giao h\\xe0ng ch\\xednh x\\xe1c', color: '#0ea5e9' },\r
  { keys: ['phone','s\\u1ed1 \\u0111i\\u1ec7n','mobile','tel'], placeholder: '0123 456 789', icon: '\\uD83D\\uDCF1', hint: '10 s\\u1ed1, b\\u1eaft \\u0111\\u1ea7u b\\u1eb1ng 0 \\u2014 d\\xf9ng \\u0111\\u1ec3 li\\xean h\\u1ec7 giao h\\xe0ng', color: '#f97316' },\r
  { keys: ['email'], placeholder: 'nguyenvana@gmail.com', icon: '\\u2709\\uFE0F', hint: '\\u0110\\u1ec3 x\\xe1c minh t\\xe0i kho\\u1ea3n v\\xe0 nh\\u1eadn th\\xf4ng b\\xe1o \\u0111\\u01a1n h\\xe0ng', color: '#8b5cf6' },\r
  { keys: ['password','m\\u1eadt kh\\u1ea9u','pass'], placeholder: 'matkhau@123456#', icon: '\\uD83D\\uDD12', hint: 'T\\u1ed1i thi\\u1ec3u 8 k\\xfd t\\u1ef1 \\u2014 n\\xean c\\xf3 ch\\u1eef hoa, s\\u1ed1 v\\xe0 k\\xfd t\\u1ef1 \\u0111\\u1eb7c bi\\u1ec7t', color: '#ef4444' },\r
  { keys: ['confirm','x\\xe1c nh\\u1eadn','repeat','retype'], placeholder: 'matkhau@123456#', icon: '\\u2705', hint: 'Nh\\u1eadp l\\u1ea1i m\\u1eadt kh\\u1ea9u gi\\u1ed1ng h\\u1ec7t b\\xean tr\\xean \\u0111\\u1ec3 x\\xe1c nh\\u1eadn', color: '#16a34a' },\r
  { keys: ['facebook','fb'], placeholder: 'facebook.com/nguyenvana', icon: '\\uD83D\\uDCAC', hint: 'Kh\\xf4ng b\\u1eaft bu\\u1ed9c \\u2014 gi\\xfap h\\u1ed7 tr\\u1ee3 nhanh h\\u01a1n khi c\\u1ea7n', color: '#3b82f6' },\r
  { keys: ['\\u0111\\u1ecba ch\\u1ec9','address','li\\xean l\\u1ea1c'], placeholder: 'S\\u1ed1 12, \\u0110\\u01b0\\u1eddng ABC, Q.1, TP.HCM', icon: '\\uD83D\\uDCCD', hint: '\\u0110\\u1ecba ch\\u1ec9 nh\\u1eadn h\\xe0ng \\u0111\\u1ea7y \\u0111\\u1ee7 \\u2014 {{BRAND_NAME}} s\\u1ebd giao \\u0111\\xfang t\\u1eadn n\\u01a1i', color: '#f59e0b' }\r
  ];\r
\r
  function isRegPage() {\r
  return window.location.href.indexOf('dang-ky') !== -1;\r
  }\r
\r
  function cleanup() {\r
  var w = document.getElementById('dx-reg-outer');\r
  if (w) w.remove();\r
  document.querySelectorAll('.dx-field-hint').forEach(function(el){ el.remove(); });\r
  }\r
\r
  function getField(input) {\r
  var name = (input.name || '').toLowerCase();\r
  var id   = (input.id   || '').toLowerCase();\r
  var ph   = (input.placeholder || '').toLowerCase();\r
  var lblEl = null, el = input;\r
  for (var i = 0; i < 6; i++) {\r
  if (!el.parentElement) break;\r
  el = el.parentElement;\r
  var lb = el.querySelector('label');\r
  if (lb) { lblEl = lb; break; }\r
  }\r
  var lbl = lblEl ? lblEl.textContent.toLowerCase() : '';\r
  var combined = name + ' ' + id + ' ' + ph + ' ' + lbl;\r
  for (var f = 0; f < FIELDS.length; f++) {\r
  var fd = FIELDS[f];\r
  for (var k = 0; k < fd.keys.length; k++) {\r
  if (combined.indexOf(fd.keys[k]) !== -1) return fd;\r
  }\r
  }\r
  return null;\r
  }\r
\r
  function inject(card) {\r
  if (document.getElementById('dx-reg-outer')) return;\r
  if (!document.getElementById('dx-reg-css')) {\r
  var s = document.createElement('style');\r
  s.id = 'dx-reg-css';\r
  s.textContent = '#dx-reg-outer{border-radius:18px;overflow:hidden;box-shadow:0 8px 40px rgba(45,122,31,.18),0 2px 8px rgba(0,0,0,.06);animation:dx-reg-in .4s cubic-bezier(.34,1.56,.64,1) both}@keyframes dx-reg-in{0%{opacity:0;transform:translateY(18px) scale(.97)}100%{opacity:1;transform:translateY(0) scale(1)}}#dx-reg-hero{background:linear-gradient(155deg,#1e6b10 0%,#3fa82f 45%,#85c756 100%);padding:24px 24px 20px;position:relative;overflow:hidden}#dx-reg-hero::before{content:"";position:absolute;top:-30px;right:-40px;width:170px;height:170px;border-radius:50%;background:rgba(255,255,255,.07)}.dx-rh-row{display:flex;align-items:center;gap:12px;margin-bottom:14px;position:relative;z-index:1}.dx-rh-ic{width:44px;height:44px;border-radius:13px;background:rgba(255,255,255,.2);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 2px 12px rgba(0,0,0,.15)}.dx-rh-tx h2{margin:0;font-size:16px;font-weight:700;color:#fff}.dx-rh-tx p{margin:1px 0 0;font-size:11px;color:rgba(255,255,255,.75);font-weight:500}.dx-rh-title{position:relative;z-index:1}.dx-rh-title h1{margin:0 0 6px;font-size:20px;font-weight:700;color:#fff;letter-spacing:-.3px}.dx-rh-notice{display:flex;align-items:flex-start;gap:8px;background:rgba(255,255,255,.16);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.28);border-radius:11px;padding:10px 12px;margin-top:12px}.dx-rh-notice .ni{font-size:16px;flex-shrink:0}.dx-rh-notice p{margin:0;font-size:12.5px;color:#fff;line-height:1.5;font-weight:500}.dx-field-hint{display:flex;align-items:center;gap:6px;margin-top:4px;padding:6px 10px;border-radius:8px;font-size:12px;line-height:1.4;max-height:0;overflow:hidden;opacity:0;transition:max-height .3s ease,opacity .25s ease,padding .25s ease}.dx-field-hint.dx-fh-open{max-height:60px;opacity:1}.dx-fh-icon{font-size:14px;flex-shrink:0}.dx-fh-ex{font-weight:700;font-size:11.5px}.dx-fh-desc{color:#6b7280;font-size:11px}.ant-input:focus,.ant-input-focused{border-color:#85c756!important;box-shadow:0 0 0 3px rgba(133,199,86,.22)!important;transition:box-shadow .2s,border-color .2s!important}.ant-btn-primary,.ant-btn-color-primary{box-shadow:0 4px 16px rgba(133,199,86,.4)!important;transition:transform .15s,box-shadow .15s!important}.ant-btn-primary:hover,.ant-btn-color-primary:hover{transform:translateY(-2px)!important;box-shadow:0 8px 24px rgba(133,199,86,.5)!important}#dx-reg-outer .ant-card{border:none!important;box-shadow:none!important;border-radius:0!important}#dx-submit-notice{display:none;margin-top:12px;padding:13px 15px;background:linear-gradient(135deg,#064e3b,#065f46);border-radius:13px;border:1px solid rgba(255,255,255,.15);box-shadow:0 6px 20px rgba(6,78,59,.3);animation:dx-reg-in .35s cubic-bezier(.34,1.1,.64,1) both}#dx-submit-notice a{color:#fde047;font-weight:700;text-decoration:underline}';\r
  document.head.appendChild(s);\r
  }\r
\r
  var outer = document.createElement('div');\r
  outer.id = 'dx-reg-outer';\r
  var hero = document.createElement('div');\r
  hero.id = 'dx-reg-hero';\r
  hero.innerHTML = '<div class="dx-rh-row"><div class="dx-rh-ic">\\uD83D\\uDECD\\uFE0F</div><div class="dx-rh-tx"><h2>{{BRAND_NAME}}</h2><p>B\\xe1n h\\xe0ng 1 \\u0111\\u1ed5i 1 \\u2022 Uy t\\xedn \\u2022 Gi\\xe1 t\\u1ed1t</p></div></div><div class="dx-rh-title"><h1>\\uD83C\\uDF89 \\u0110\\u0103ng k\\xfd t\\xe0i kho\\u1ea3n</h1><p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,.9);font-weight:500;line-height:1.55;">Anh em v\\xe0o <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" style="color:#fde047;font-weight:700;text-decoration:underline;">Gmail</a> \\u2014 ho\\u1eb7c nh\\u1eafn Zalo <a href="https://zalo.me/{{PHONE_NUMBER}}" target="_blank" style="color:#fde047;font-weight:700;text-decoration:underline;">{{PHONE_DOT}}</a> (em {{STAFF_NAME}}) \\u0111\\u1ec3 x\\xe1c minh t\\xe0i kho\\u1ea3n tr\\u01b0\\u1edbc khi \\u0111\\u0103ng nh\\u1eadp &#x1F44C;</p><div class="dx-rh-notice"><span class="ni">\\uD83D\\uDCCB</span><p>Anh em vui l\\xf2ng \\u0111i\\u1ec1n \\u0111\\u1ea7y \\u0111\\u1ee7 th\\xf4ng tin \\u0111\\u1ec3 {{BRAND_NAME}} g\\u1eedi h\\xe0ng ch\\xednh x\\xe1c, c\\u1ea3m \\u01a1n anh em \\uD83D\\uDC9A</p></div></div>';\r
\r
  card.parentNode.insertBefore(outer, card);\r
  outer.appendChild(hero);\r
  outer.appendChild(card);\r
  card.style.border = 'none';\r
  card.style.boxShadow = 'none';\r
\r
  function bindInputs() {\r
  card.querySelectorAll('input').forEach(function(inp) {\r
  if (inp.getAttribute('dx-bound')) return;\r
  inp.setAttribute('dx-bound', '1');\r
  var fd = getField(inp);\r
  if (!fd) return;\r
  if (!inp.placeholder || inp.placeholder.length < 3) inp.placeholder = fd.placeholder;\r
  var insertAfter = inp, el = inp;\r
  for (var i = 0; i < 4; i++) {\r
  if (!el.parentElement) break;\r
  el = el.parentElement;\r
  if (el.classList && el.classList.contains('ant-form-item-control-input')) { insertAfter = el; break; }\r
  }\r
  var hint = document.createElement('div');\r
  hint.className = 'dx-field-hint';\r
  hint.style.background = fd.color + '14';\r
  hint.style.border = '1px solid ' + fd.color + '33';\r
  hint.style.color = fd.color;\r
  hint.innerHTML = '<span class="dx-fh-icon">' + fd.icon + '</span><div class="dx-fh-text"><div class="dx-fh-ex">V\\xed d\\u1ee5: ' + fd.placeholder + '</div><div class="dx-fh-desc">' + fd.hint + '</div></div>';\r
  if (insertAfter.nextSibling) insertAfter.parentNode.insertBefore(hint, insertAfter.nextSibling);\r
  else insertAfter.parentNode.appendChild(hint);\r
  inp.addEventListener('focus', function() { hint.classList.add('dx-fh-open'); });\r
  inp.addEventListener('blur',  function() { hint.classList.remove('dx-fh-open'); });\r
  });\r
  }\r
\r
  function bindSubmit() {\r
  var btn = card.querySelector('button[type="submit"].ant-btn-primary');\r
  if (!btn || btn.getAttribute('dx-submit-bound')) return;\r
  btn.setAttribute('dx-submit-bound', '1');\r
  var notice = document.createElement('div');\r
  notice.id = 'dx-submit-notice';\r
  notice.innerHTML =\r
  '<div style="display:flex;align-items:flex-start;gap:9px;"><span style="font-size:18px;flex-shrink:0;margin-top:1px;">&#x1F4EC;</span><div style="font-size:13px;color:rgba(255,255,255,.95);font-weight:500;line-height:1.6;">Anh em v\\xe0o <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Gmail</a> \\u2014 ho\\u1eb7c nh\\u1eafn Zalo <a href="https://zalo.me/{{PHONE_NUMBER}}" target="_blank">{{PHONE_DOT}}</a> (em {{STAFF_NAME}}) \\u0111\\u1ec3 x\\xe1c minh t\\xe0i kho\\u1ea3n tr\\u01b0\\u1edbc khi \\u0111\\u0103ng nh\\u1eadp &#x1F44C;</div></div>';\r
  if (btn.nextSibling) btn.parentNode.insertBefore(notice, btn.nextSibling);\r
  else btn.parentNode.appendChild(notice);\r
  btn.addEventListener('click', function() {\r
  notice.style.display = 'block';\r
  setTimeout(function() { notice.style.display = 'none'; }, 12000);\r
  });\r
  }\r
\r
  bindInputs();\r
  bindSubmit();\r
  new MutationObserver(function() { bindInputs(); bindSubmit(); }).observe(card, { childList: true, subtree: true });\r
  }\r
\r
  function tryInjectNow() {\r
  if (!isRegPage() || DONE) return;\r
  if (document.getElementById('dx-reg-outer')) { DONE = true; return; }\r
  var card = document.querySelector('.ant-card.ant-card-bordered.ant-card-small');\r
  if (card) { DONE = true; inject(card); }\r
  }\r
\r
  if (!window.__dxRegObsStarted) {\r
  window.__dxRegObsStarted = true;\r
\r
  new MutationObserver(function(mutations) {\r
  if (!isRegPage() || DONE) return;\r
  for (var m = 0; m < mutations.length; m++) {\r
  var nodes = mutations[m].addedNodes;\r
  for (var n = 0; n < nodes.length; n++) {\r
  var node = nodes[n];\r
  if (!node || node.nodeType !== 1) continue;\r
  var card = node.classList && node.classList.contains('ant-card')\r
  ? node\r
  : node.querySelector && node.querySelector('.ant-card.ant-card-bordered.ant-card-small');\r
  if (card) { DONE = true; inject(card); return; }\r
  }\r
  }\r
  }).observe(document.body, { childList: true, subtree: true });\r
  }\r
\r
  if (!window.__dxRegPollStarted) {\r
  window.__dxRegPollStarted = true;\r
\r
  setInterval(function() {\r
  var cur = location.href;\r
  if (cur !== lastUrl) {\r
  lastUrl = cur;\r
  DONE = false;\r
  if (!isRegPage()) { cleanup(); return; }\r
  setTimeout(tryInjectNow, 100);\r
  setTimeout(tryInjectNow, 400);\r
  setTimeout(tryInjectNow, 900);\r
  setTimeout(tryInjectNow, 1800);\r
  setTimeout(tryInjectNow, 3000);\r
  }\r
  tryInjectNow();\r
  }, 400);\r
  }\r
\r
  tryInjectNow();\r
\r
})();\r
<\/script>\r
`,Gr=(Ba.match(/\{\{BRAND_NAME\}\}/g)||[]).length,ks=(Ba.match(/\{\{PHONE_NUMBER\}\}/g)||[]).length+(Ba.match(/\{\{PHONE_DOT\}\}/g)||[]).length,Es=(Ba.match(/\{\{STAFF_NAME\}\}/g)||[]).length,Pr=(Ba.match(/\{\{SITE\}\}/g)||[]).length,Ur=Gr+ks+Es+Pr;function F3(i){const r=i.replace(/\D/g,"");return r.length===10?`${r.slice(0,4)}.${r.slice(4,7)}.${r.slice(7)}`:r.length===11?`${r.slice(0,4)}.${r.slice(4,7)}.${r.slice(7)}`:r}const Md=["#003366","#008C99","#D1C300","#D4AF37"],Jx="#003366";function Wx(i){let r=i.trim();return r?(r.startsWith("#")||(r="#"+r),/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(r)?r.toUpperCase().replace(/^#/,"#"):""):""}function X3(i){if(!i)return"";const r=i.trim().match(/rgba?\s*\(\s*(\d{1,3})\s*[, ]\s*(\d{1,3})\s*[, ]\s*(\d{1,3})(?:\s*[,/]\s*([\d.]+%?))?\s*\)/i);if(!r)return"";const s=+r[1],c=+r[2],u=+r[3];if(s>255||c>255||u>255)return"";const p=h=>("0"+h.toString(16)).slice(-2);return("#"+p(s)+p(c)+p(u)).toUpperCase()}function Q3(i){const r=m=>{const x=i.match(m);return x?x[1].trim():null},s={BRAND_NAME:/badge\.innerHTML\s*=\s*'&#x2605;\s+([^&]+)\s+&nbsp;/,PHONE_NUMBER:/zalo\.me\/([^"']+)/,STAFF_NAME:/\(em ([^)]+)\)/,SITE:/Đã mua tại ([^'"\n\\]+)/,BRAND_COLOR:/linear-gradient\(to right,\s*(#[0-9A-Fa-f]{3,8})/},c={BRAND_NAME:"Tên thương hiệu",PHONE_NUMBER:"Số điện thoại",STAFF_NAME:"Tên nhân viên",SITE:"Domain website",BRAND_COLOR:"Mã màu hiển thị"},u={},p=[],h=[];for(const[m,x]of Object.entries(s)){const g=r(x);if(m==="BRAND_COLOR"){const v=g?Wx(g):"";v&&v.toUpperCase()!==Jx.toUpperCase()&&(u[m]=v,p.push(c[m]));continue}g?(u[m]=g,p.push(c[m])):h.push(c[m])}return{vals:u,filled:p,missed:h}}function Z3(){const[i,r]=y.useState(""),[s,c]=y.useState(""),[u,p]=y.useState(""),[h,m]=y.useState(""),[x,g]=y.useState(""),[v,j]=y.useState(""),[N,k]=y.useState(!1),[O,C]=y.useState(!1),[T,R]=y.useState(""),[A,L]=y.useState(null),U=y.useRef(null),{toast:G}=Un(),I=s.replace(/\D/g,""),X=F3(I),P=h.trim().replace(/\/$/,""),te=Wx(x),ne=y.useMemo(()=>{let w=Ba;if(w=w.split("{{BRAND_NAME}}").join(i.trim()||"{{BRAND_NAME}}"),w=w.split("{{PHONE_NUMBER}}").join(I||"{{PHONE_NUMBER}}"),w=w.split("{{PHONE_DOT}}").join(X||"{{PHONE_DOT}}"),w=w.split("{{STAFF_NAME}}").join(u.trim()||"{{STAFF_NAME}}"),w=w.split("{{SITE}}").join(P||"{{SITE}}"),te)for(const q of Md)w=w.split(q).join(te);return w},[i,I,X,u,P,te]),ce=i.trim().length>0&&I.length>=9&&u.trim().length>0&&P.length>0,ue=i.trim()?Gr:0,xe=I.length>=9?ks:0,V=u.trim()?Es:0,ee=P.length>0?Pr:0,_=ue+xe+V+ee,F=()=>{if(!T.trim())return;const{vals:w,filled:q,missed:J}=Q3(T);if(q.length===0){G({title:"Không tìm thấy dữ liệu",description:"Script dán vào không khớp định dạng.",variant:"destructive"});return}w.BRAND_NAME&&r(w.BRAND_NAME),w.PHONE_NUMBER&&c(w.PHONE_NUMBER),w.STAFF_NAME&&p(w.STAFF_NAME),w.SITE&&m(w.SITE),w.BRAND_COLOR&&g(w.BRAND_COLOR),L({filled:q,missed:J}),G({title:`Đã điền ${q.length} trường`,description:q.join(", ")})},Z=async()=>{if(ce)try{await navigator.clipboard.writeText(ne),k(!0),G({title:"Đã copy!",description:`Script (${ne.length.toLocaleString()} ký tự) đã được copy vào clipboard.`}),setTimeout(()=>k(!1),2500)}catch{U.current&&(U.current.select(),document.execCommand("copy"),k(!0),G({title:"Đã copy!",description:"Script đã được copy vào clipboard."}),setTimeout(()=>k(!1),2500))}},le=()=>{r(""),c(""),p(""),m(""),setLockDomain(""),g(""),j(""),R(""),L(null),k(!1)};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-10",children:l.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(gi,{href:"/",children:l.jsx(ve,{variant:"ghost",size:"icon",className:"h-8 w-8",children:l.jsx(Zr,{className:"w-4 h-4"})})}),l.jsx("div",{className:"w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center",children:l.jsx(h0,{className:"w-4 h-4 text-white"})}),l.jsxs("div",{children:[l.jsx("h1",{className:"text-base font-bold text-gray-900 leading-none",children:"Bulk Copy Tool"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Thay thương hiệu & số điện thoại trong toàn bộ script"})]})]}),l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs(Gi,{variant:"secondary",className:"text-xs hidden sm:flex",children:[Ur," vị trí thay thế"]})})]})}),l.jsxs("main",{className:"max-w-5xl mx-auto px-4 py-8 space-y-6",children:[l.jsxs("div",{className:"bg-violet-50 border border-violet-200 rounded-xl p-4 text-sm text-violet-800",children:[l.jsx("p",{className:"font-semibold mb-1",children:"Hướng dẫn sử dụng"}),l.jsxs("p",{className:"text-violet-700 text-xs leading-relaxed",children:["Nhập tên thương hiệu, số điện thoại, tên nhân viên và domain website. Toàn bộ"," ",l.jsxs("strong",{children:[Ur," vị trí"]})," (",Gr," thương hiệu + ",ks," số điện thoại + ",Es," nhân viên + ",Pr," domain) sẽ được thay thế tự động."]})]}),l.jsxs("div",{className:"bg-white border border-blue-200 rounded-xl overflow-hidden",children:[l.jsxs("button",{type:"button",className:"w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-blue-50 transition-colors",onClick:()=>{C(w=>!w),L(null)},children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx(Oa,{className:"w-4 h-4 text-blue-500 flex-shrink-0"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold text-blue-700 leading-none",children:"Tự điền từ script cũ"}),l.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:"Dán script đã copy trước đó — tự nhận diện và điền lại các trường"})]})]}),O?l.jsx(As,{className:"w-4 h-4 text-gray-400 flex-shrink-0"}):l.jsx(Cs,{className:"w-4 h-4 text-gray-400 flex-shrink-0"})]}),O&&l.jsxs("div",{className:"px-5 pb-5 pt-1 space-y-3 border-t border-blue-100",children:[l.jsx(on,{placeholder:"Dán toàn bộ script cũ vào đây...",value:T,onChange:w=>{R(w.target.value),L(null)},className:"font-mono text-xs min-h-[120px] resize-none bg-gray-50",spellCheck:!1}),l.jsxs(ve,{size:"sm",className:"gap-1.5 h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white",onClick:F,disabled:!T.trim(),children:[l.jsx(Oa,{className:"w-3.5 h-3.5"}),"Tự điền thông tin"]}),A&&l.jsxs("div",{className:"space-y-1.5",children:[A.filled.length>0&&l.jsx("div",{className:"flex flex-wrap gap-1.5",children:A.filled.map(w=>l.jsxs("span",{className:"inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full font-medium",children:[l.jsx(vt,{className:"w-3 h-3"})," ",w]},w))}),A.missed.length>0&&l.jsx("div",{className:"flex flex-wrap gap-1.5",children:A.missed.map(w=>l.jsxs("span",{className:"inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full",children:["⚠ ",w]},w))}),A.missed.length>0&&l.jsx("p",{className:"text-xs text-amber-600",children:"Các trường trên cần điền tay."})]})]})]}),l.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-6 space-y-5",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsxs(Ct,{htmlFor:"brand-name",className:"text-sm font-semibold text-gray-700",children:["Tên thương hiệu",l.jsxs("span",{className:"ml-2 text-xs font-normal text-violet-500 bg-violet-50 px-1.5 py-0.5 rounded",children:[Gr," vị trí"]})]}),l.jsx(Ge,{id:"brand-name",placeholder:"Ví dụ: Bán Rẻ - Mua Khéo",value:i,onChange:w=>r(w.target.value),className:"text-sm",autoFocus:!0}),i.trim()?l.jsxs("p",{className:"text-xs text-violet-600 font-medium",children:["✓ Thay thế ",Gr,' vị trí → "',i.trim(),'"']}):l.jsxs("p",{className:"text-xs text-gray-400",children:["Placeholder:"," ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"{{BRAND_NAME}}"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs(Ct,{htmlFor:"phone-number",className:"text-sm font-semibold text-gray-700",children:["Số điện thoại / Zalo",l.jsxs("span",{className:"ml-2 text-xs font-normal text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded",children:[ks," vị trí"]})]}),l.jsxs("div",{className:"relative",children:[l.jsx(n5,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),l.jsx(Ge,{id:"phone-number",placeholder:"Ví dụ: 0858279868",value:s,onChange:w=>c(w.target.value),className:"pl-9 text-sm",inputMode:"tel"})]}),I.length>=9?l.jsxs("p",{className:"text-xs text-blue-600 font-medium",children:["✓ Số thô: ",l.jsx("strong",{children:I}),"  |  Có chấm: ",l.jsx("strong",{children:X})]}):l.jsxs("p",{className:"text-xs text-gray-400",children:["Sẽ tự sinh cả 2 dạng:"," ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"0858279868"})," và"," ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"0858.279.868"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs(Ct,{htmlFor:"staff-name",className:"text-sm font-semibold text-gray-700",children:["Tên nhân viên",l.jsxs("span",{className:"ml-2 text-xs font-normal text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded",children:[Es," vị trí"]})]}),l.jsxs("div",{className:"relative",children:[l.jsx(h5,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),l.jsx(Ge,{id:"staff-name",placeholder:"Ví dụ: Thắng, Đức, Trang...",value:u,onChange:w=>p(w.target.value),className:"pl-9 text-sm"})]}),u.trim()?l.jsxs("p",{className:"text-xs text-orange-600 font-medium",children:["✓ Sẽ hiện là: ",l.jsxs("strong",{children:["(em ",u.trim(),")"]})," trong script"]}):l.jsxs("p",{className:"text-xs text-gray-400",children:["Placeholder:"," ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"(em {{STAFF_NAME}})"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs(Ct,{htmlFor:"site-url",className:"text-sm font-semibold text-gray-700",children:["Domain website",l.jsxs("span",{className:"ml-2 text-xs font-normal text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded",children:[Pr," vị trí"]})]}),l.jsxs("div",{className:"relative",children:[l.jsx(f0,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),l.jsx(Ge,{id:"site-url",placeholder:"Ví dụ: junjin.ratxin.vn",value:h,onChange:w=>m(w.target.value),className:"pl-9 text-sm",inputMode:"url"})]}),P?l.jsxs("p",{className:"text-xs text-emerald-600 font-medium",children:["✓ Thay thế ",Pr,' vị trí → "',P,'"']}):l.jsxs("p",{className:"text-xs text-gray-400",children:["Nhập domain không có dấu / cuối. Placeholder:"," ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"{{SITE}}"})]})]}),l.jsxs("div",{className:"pt-1 border-t border-dashed border-gray-200 space-y-2",children:[l.jsxs(Ct,{htmlFor:"brand-color",className:"text-sm font-semibold text-gray-700 flex items-center gap-2",children:[l.jsx(Ss,{className:"w-4 h-4 text-pink-500"}),"Mã màu hiển thị",l.jsx("span",{className:"text-xs font-normal text-gray-400",children:"(tùy chọn)"}),l.jsx("span",{className:"ml-auto text-xs font-normal text-pink-500 bg-pink-50 px-1.5 py-0.5 rounded",children:"Brand color"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"color","aria-label":"Chọn màu",value:te||Jx,onChange:w=>g(w.target.value.toUpperCase()),className:"h-10 w-12 rounded-md border border-gray-200 cursor-pointer bg-white p-1 flex-shrink-0"}),l.jsxs("div",{className:"relative flex-1",children:[l.jsx(Ss,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),l.jsx(Ge,{id:"brand-color",placeholder:"Ví dụ: #DC2626 — bỏ trống = màu mặc định (xanh)",value:x,onChange:w=>g(w.target.value),className:"pl-9 text-sm font-mono uppercase",maxLength:7})]})]}),l.jsxs("div",{className:"rounded-lg border border-dashed border-pink-200 bg-pink-50/40 p-3 space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-pink-700",children:[l.jsx("span",{className:"font-mono bg-white border border-pink-200 px-1.5 py-0.5 rounded",children:"RGBA"}),l.jsx("span",{className:"text-pink-400",children:"→"}),l.jsx("span",{className:"font-mono bg-white border border-pink-200 px-1.5 py-0.5 rounded",children:"HEX"}),l.jsx("span",{className:"text-pink-600 font-normal",children:"— chuyển đổi nhanh"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Ge,{placeholder:"Dán: rgba(73, 148, 33, 1) hoặc rgb(73,148,33)",value:v,onChange:w=>j(w.target.value),className:"text-sm font-mono flex-1 bg-white"}),(()=>{const w=X3(v);return w?l.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[l.jsx("span",{className:"w-6 h-6 rounded border border-white shadow-sm",style:{background:w}}),l.jsx("span",{className:"text-xs font-mono font-semibold text-pink-700",children:w}),l.jsxs(ve,{type:"button",size:"sm",className:"h-7 text-xs bg-pink-600 hover:bg-pink-700 text-white gap-1",onClick:()=>{g(w)},children:[l.jsx(Ss,{className:"w-3 h-3"}),"Dùng màu này"]})]}):v.trim()?l.jsx("span",{className:"text-xs text-amber-600 whitespace-nowrap",children:"⚠ Sai cú pháp"}):l.jsx("span",{className:"text-xs text-gray-400 whitespace-nowrap",children:"Chưa có dữ liệu"})})()]}),l.jsxs("p",{className:"text-[11px] text-gray-500 leading-relaxed",children:["Hỗ trợ: ",l.jsx("code",{className:"bg-white px-1 rounded",children:"rgb(r,g,b)"}),", ",l.jsx("code",{className:"bg-white px-1 rounded",children:"rgba(r,g,b,a)"})," hoặc ",l.jsx("code",{className:"bg-white px-1 rounded",children:"rgba(r g b / a)"}),". Độ trong suốt (alpha) sẽ bị bỏ qua khi chuyển sang HEX."]})]}),te?l.jsxs("div",{className:"flex items-start gap-2 p-3 bg-pink-50 border border-pink-200 rounded-lg",children:[l.jsx("span",{className:"w-5 h-5 rounded-md border border-white shadow-sm flex-shrink-0 mt-0.5",style:{background:te}}),l.jsxs("div",{children:[l.jsxs("p",{className:"text-xs text-pink-700 font-semibold",children:["Màu thương hiệu: ",l.jsx("span",{className:"font-mono",children:te})]}),l.jsxs("p",{className:"text-xs text-pink-600 mt-0.5",children:["Sẽ thay toàn bộ màu mặc định (",Md.join(", "),") bằng màu này."]})]})]}):x.trim()?l.jsxs("p",{className:"text-xs text-amber-600",children:["⚠ Mã màu chưa hợp lệ. Dùng dạng ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"#RRGGBB"})," hoặc ",l.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"#RGB"}),"."]}):l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-4 h-4 rounded border border-gray-200 flex-shrink-0",style:{background:`linear-gradient(to right, ${Md.join(",")})`}}),l.jsx("p",{className:"text-xs text-gray-400",children:"Bỏ trống = giữ màu mặc định (gradient xanh–vàng). Điền mã hex để dùng màu khác cho domain này."})]})]}),_>0&&l.jsxs("p",{className:"text-xs text-green-600 font-medium",children:["✓ Đã điền ",_,"/",Ur," vị trí",_<Ur&&l.jsxs("span",{className:"text-amber-500",children:[" ","— còn ",Ur-_," vị trí chưa điền"]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx(ve,{onClick:Z,className:"flex-1 gap-2 text-white bg-violet-600 hover:bg-violet-700",disabled:!ce,children:N?l.jsxs(l.Fragment,{children:[l.jsx(vt,{className:"w-4 h-4"}),"Đã copy!"]}):l.jsxs(l.Fragment,{children:[l.jsx(sn,{className:"w-4 h-4"}),"Copy toàn bộ script"]})}),(i||s||u||h||x)&&l.jsx(ve,{variant:"ghost",size:"icon",className:"h-10 w-10 text-gray-400 hover:text-gray-600",onClick:le,title:"Xóa tất cả",children:l.jsx(Ks,{className:"w-4 h-4"})})]}),!ce&&(i||s||u||h)&&l.jsx("p",{className:"text-xs text-amber-600",children:"⚠ Cần điền đủ Tên thương hiệu, Số điện thoại, Tên nhân viên và Domain để có thể copy."})]}),l.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-xs font-semibold text-gray-600",children:"Nội dung script"}),l.jsxs(Gi,{variant:"outline",className:"text-xs",children:[ne.length.toLocaleString()," ký tự"]})]}),l.jsxs(ve,{variant:"outline",size:"sm",className:"h-7 gap-1.5 text-xs",onClick:Z,disabled:!ce,children:[N?l.jsx(vt,{className:"w-3 h-3"}):l.jsx(sn,{className:"w-3 h-3"}),N?"Đã copy":"Copy"]})]}),l.jsx("textarea",{ref:U,readOnly:!0,value:ne,className:"w-full h-[480px] p-4 font-mono text-xs text-gray-700 bg-gray-50 resize-none focus:outline-none leading-relaxed",spellCheck:!1})]})]})]})}const J3=`<main class="styles_shopWrapper__953cK max-w-screen-xl"><!--$--><!--/$--><div class="my-5 bg-white p-4"><h1 class="text-2xl">Hướng dẫn đăng nhập</h1><div class="ant-divider css-5y1eqa css-var-_R_aivb_ ant-divider-horizontal" role="separator"></div><div class="styles_article__pCj5f"><div style="font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif; color: #1a1a1a; max-width: 860px; margin: 0 auto; -webkit-font-smoothing: antialiased;"><!-- HERO -->
<div style="border-radius: 22px; background: linear-gradient(135deg,#66ba32 0%,#4f9823 100%); padding: 32px 32px 28px; margin-bottom: 20px; box-shadow: 0 12px 40px rgba(102,186,50,.30); position: relative; overflow: hidden;">
<div style="position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: rgba(255,255,255,.07); pointer-events: none;">&nbsp;</div>
<div style="position: relative; z-index: 1;">
<div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,.18); border-radius: 999px; padding: 5px 14px; margin-bottom: 14px; font-size: 12px; font-weight: bold; color: #fff; letter-spacing: .06em; text-transform: uppercase;">🔑 JUN JIN STORE.VN Hướng Dẫn</div>
<div style="font-size: 28px; font-weight: 900; color: #fff; line-height: 1.2; letter-spacing: -.02em; margin-bottom: 16px;">Đăng nhập để mua với giá tốt nhất</div>
<div style="background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.28); border-radius: 14px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start;">
<div style="font-size: 22px; flex-shrink: 0; margin-top: 2px;">💡</div>
<div style="font-size: 14px; color: #fff; line-height: 1.65;"><strong>Chưa đăng nhập?</strong> Hệ thống có thể hiển thị mức giá cao hơn so với giá ưu đãi thực tế dành cho thành viên trên website JUN JIN STORE.VN.</div>
</div>
</div>
</div>
<!-- SO SÁNH GIÁ -->
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 14px; margin-bottom: 20px;">
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(102,186,50,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(102,186,50,.08);">
<div style="background: linear-gradient(135deg,rgba(102,186,50,.12),rgba(79,152,35,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(102,186,50,.12); font-size: 14px; font-weight: 800; color: #4f9823; display: flex; align-items: center; gap: 8px;">😐 Giá trước khi đăng nhập</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Khi vào website lần đầu, hệ thống sẽ hiển thị giá niêm yết thông thường — chưa được áp dụng ưu đãi thành viên.</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(102,186,50,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(102,186,50,.08);">
<div style="background: linear-gradient(135deg,rgba(102,186,50,.12),rgba(79,152,35,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(102,186,50,.12); font-size: 14px; font-weight: 800; color: #4f9823; display: flex; align-items: center; gap: 8px;">✅ Giá sau khi đăng nhập</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Sau khi đăng nhập thành công, <strong>giá ưu đãi thành viên</strong> sẽ hiển thị trực tiếp trên trang sản phẩm.</div>
</div>
</div>
<!-- INTRO BOX -->
<div style="background: #fff; border-radius: 18px; border: 1.5px solid rgba(102,186,50,.18); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(102,186,50,.08); padding: 22px; margin-bottom: 20px;">
<div style="font-size: 20px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;">Cách đăng nhập và mua hàng giá tốt tại JUN JIN STORE.VN</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Dưới đây là hướng dẫn chi tiết từng bước để đăng nhập và đặt hàng trực tiếp trên website.<br><br>Chỉ cần làm đúng quy trình, bạn sẽ thấy giá tốt hơn và có thể mua hàng ngay trên hệ thống rất nhanh.</div>
</div>
<!-- STEP BAR -->
<div style="display: flex; align-items: center; justify-content: center; gap: 4px; margin-bottom: 24px; flex-wrap: wrap;">
<div style="text-align: center;">
<div style="background: linear-gradient(135deg,#66ba32,#4f9823); color: white; width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 20px; margin: 0 auto; box-shadow: 0 4px 12px rgba(102,186,50,.30);">1</div>
<div style="margin-top: 6px; font-size: 12.5px; font-weight: 600; color: #1a1a1a;">Nhấp đăng nhập</div>
</div>
<div style="height: 3px; width: 48px; background: rgba(102,186,50,.30); border-radius: 3px; margin: 0 4px; margin-bottom: 18px;">&nbsp;</div>
<div style="text-align: center;">
<div style="background: linear-gradient(135deg,#66ba32,#4f9823); color: white; width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 20px; margin: 0 auto; box-shadow: 0 4px 12px rgba(102,186,50,.30);">2</div>
<div style="margin-top: 6px; font-size: 12.5px; font-weight: 600; color: #1a1a1a;">Chọn Google</div>
</div>
<div style="height: 3px; width: 48px; background: rgba(102,186,50,.30); border-radius: 3px; margin: 0 4px; margin-bottom: 18px;">&nbsp;</div>
<div style="text-align: center;">
<div style="background: linear-gradient(135deg,#66ba32,#4f9823); color: white; width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin: 0 auto; box-shadow: 0 4px 12px rgba(102,186,50,.30);">✓</div>
<div style="margin-top: 6px; font-size: 12.5px; font-weight: bold; color: #4f9823;">Thấy giá ưu đãi!</div>
</div>
</div>
<!-- BƯỚC 1 -->
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(102,186,50,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(102,186,50,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(102,186,50,.12),rgba(79,152,35,.06)); padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(102,186,50,.12);">
<div style="display: flex; align-items: center; gap: 14px;">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#66ba32,#4f9823); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900; flex-shrink: 0; box-shadow: 0 6px 16px rgba(102,186,50,.28);">1</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #4f9823; margin-bottom: 3px;">Bước 1 / 2</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Nhấp vào banner hoặc icon đăng nhập</div>
</div>
</div>
<div style="background: #fff; border: 1px solid rgba(102,186,50,.20); padding: 5px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; color: #4f9823; flex-shrink: 0;">~2 giây</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Truy cập <strong>junjin.ratxin.vn</strong> → tìm banner đăng nhập hoặc nhấp vào <strong>icon người dùng</strong> ở góc trên bên phải để mở trang đăng nhập.</p>
<img style="width: 100%; border-radius: 12px; border: 1.5px solid rgba(102,186,50,.15); display: block;" src="https://img.lightshot.app/LX2FDAkFSaGdFPvGe-_V1g.png" alt="Giao diện đăng nhập JUN JIN STORE.VN"></div>
</div>
<!-- BƯỚC 2 -->
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(102,186,50,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(102,186,50,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(102,186,50,.12),rgba(79,152,35,.06)); padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(102,186,50,.12);">
<div style="display: flex; align-items: center; gap: 14px;">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#66ba32,#4f9823); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900; flex-shrink: 0; box-shadow: 0 6px 16px rgba(102,186,50,.28);">2</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #4f9823; margin-bottom: 3px;">Bước 2 / 2</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Chọn đăng nhập bằng Google</div>
</div>
</div>
<div style="background: #fff; border: 1px solid rgba(102,186,50,.20); padding: 5px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; color: #4f9823; flex-shrink: 0;">~3 giây</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Chọn nút <strong>Đăng nhập bằng Google</strong> để truy cập nhanh mà không cần nhập mật khẩu. Hệ thống sẽ chuyển sang trang xác nhận tài khoản Google — nhấn <strong>Đồng ý</strong> là hoàn tất.</p>
<img style="width: 100%; border-radius: 12px; border: 1.5px solid rgba(102,186,50,.15); display: block;" src="https://img.lightshot.app/wYzb5NDlTUKUfjyWKl7D_g.png" alt="Giao diện đồng ý Google JUN JIN STORE.VN"></div>
</div>
<!-- BƯỚC 3 -->
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(102,186,50,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(102,186,50,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(102,186,50,.12),rgba(79,152,35,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(102,186,50,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#66ba32,#4f9823); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900; flex-shrink: 0; box-shadow: 0 6px 16px rgba(102,186,50,.28);">3</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #4f9823; margin-bottom: 3px;">Bước 3</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Chọn sản phẩm và bấm mua hàng</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Sau khi đăng nhập, tìm sản phẩm cần mua, xem lại <strong>giá ưu đãi thành viên</strong> và bấm <strong>Mua ngay</strong> để thêm vào giỏ hàng.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;"><span style="padding: 8px 14px; border-radius: 999px; background: rgba(102,186,50,.08); border: 1px solid rgba(102,186,50,.14); font-size: 12.5px; color: #346d14; font-weight: bold;">🤖 Robot hút bụi</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(102,186,50,.08); border: 1px solid rgba(102,186,50,.14); font-size: 12.5px; color: #346d14; font-weight: bold;">📱 Phụ kiện điện thoại</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(102,186,50,.08); border: 1px solid rgba(102,186,50,.14); font-size: 12.5px; color: #346d14; font-weight: bold;">🏠 Đồ gia dụng</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(102,186,50,.08); border: 1px solid rgba(102,186,50,.14); font-size: 12.5px; color: #346d14; font-weight: bold;">⚡ Thiết bị thông minh</span></div>
</div>
</div>
<!-- BƯỚC 4 -->
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(102,186,50,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(102,186,50,.10); overflow: hidden; margin-bottom: 20px;">
<div style="background: linear-gradient(135deg,rgba(102,186,50,.12),rgba(79,152,35,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(102,186,50,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#66ba32,#4f9823); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900; flex-shrink: 0; box-shadow: 0 6px 16px rgba(102,186,50,.28);">4</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #4f9823; margin-bottom: 3px;">Bước 4</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Điền thông tin và thanh toán</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Bạn có thể thanh toán theo <strong>2 cách quen thuộc</strong>:</p>
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap: 10px; margin-bottom: 16px;">
<div style="padding: 16px; border-radius: 14px; border: 1.5px solid rgba(102,186,50,.18); background: rgba(102,186,50,.04);">
<div style="font-size: 22px; margin-bottom: 8px;">📦</div>
<div style="font-size: 14px; font-weight: 800; color: #1a1a1a; margin-bottom: 4px;">COD</div>
<div style="font-size: 13px; color: rgba(26,26,26,.65); line-height: 1.6;">Nhận hàng rồi thanh toán trực tiếp cho nhân viên giao hàng.</div>
</div>
<div style="padding: 16px; border-radius: 14px; border: 1.5px solid rgba(102,186,50,.18); background: rgba(102,186,50,.04);">
<div style="font-size: 22px; margin-bottom: 8px;">📲</div>
<div style="font-size: 14px; font-weight: 800; color: #1a1a1a; margin-bottom: 4px;">QR Code (VietQR)</div>
<div style="font-size: 13px; color: rgba(26,26,26,.65); line-height: 1.6;">Quét mã và thanh toán nhanh chóng qua ứng dụng ngân hàng.</div>
</div>
</div>
<div style="background: rgba(102,186,50,.06); border: 1px solid rgba(102,186,50,.12); border-radius: 14px; padding: 14px 16px; font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68); margin-bottom: 14px;">Điền thông tin đầy đủ — hệ thống sẽ tính ra phí ship cụ thể đến địa chỉ của bạn.</div>
<!-- DROPSHIP INFO -->
<div style="background: linear-gradient(135deg,#f8fff2 0%,#eef8e8 100%); border: 1.5px solid rgba(102,186,50,.20); border-radius: 14px; padding: 16px 18px; margin-bottom: 16px;">
<div style="font-size: 14px; font-weight: 800; color: #1a1a1a; margin-bottom: 8px;">🚀 Dành cho CTV / Dropship</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.70);">Mục <strong>DROPSHIP</strong> — tích vào khi muốn bán cho người khác. Phía dưới sẽ có ô thu <strong>COD</strong> để điền số tiền muốn thu từ khách.</div>
<div style="margin-top: 10px; padding: 12px 14px; background: #fff; border-radius: 10px; border: 1px solid rgba(102,186,50,.14); font-size: 13px; color: rgba(26,26,26,.70); line-height: 1.7;">📌 <strong>Ví dụ:</strong> Robot hút bụi giá 3.500k, bán cho khách 4.200k → Tích <strong>DROPSHIP</strong> → điền thông tin khách → kéo xuống ô <strong>COD</strong> điền <strong>4.200k</strong> là xong.</div>
</div>
<div style="background: linear-gradient(135deg,rgba(251,191,36,.08),rgba(245,158,11,.04)); border: 1px solid rgba(245,158,11,.20); border-radius: 14px; padding: 14px 16px; font-size: 13px; line-height: 1.7; color: rgba(26,26,26,.72); display: flex; gap: 10px; align-items: flex-start;">
<div style="font-size: 18px; flex-shrink: 0;">⚠️</div>
<div><strong>Lưu ý quan trọng:</strong> Giữ nguyên nội dung và số tiền khi quét QR. Nếu tự chỉnh sửa thì hệ thống không tiếp nhận được thanh toán và không hoàn thành được đơn hàng.</div>
</div>
</div>
</div>
<!-- LƯU Ý KHI NHẬN HÀNG -->
<div style="background: linear-gradient(135deg,#f8fff2 0%,#eef8e8 100%); border: 1.5px solid rgba(102,186,50,.20); border-radius: 18px; padding: 22px; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(102,186,50,.08);">
<div style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;"><span style="font-size: 26px;">📦</span> Lưu ý khi nhận hàng</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.70);">Khi nhận hàng, nhớ <strong>quay video mở kiện đủ 6 mặt</strong> để thuận tiện cho việc <strong>hỗ trợ bảo hành hoặc xử lý phát sinh</strong> nếu có.</div>
</div>
<!-- GIỚI THIỆU JUN JIN STORE -->
<div style="background: #fff; border-radius: 18px; border: 1.5px solid rgba(102,186,50,.18); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(102,186,50,.08); padding: 24px; margin-bottom: 14px;">
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #4f9823; margin-bottom: 10px;">Mua hàng online giá rẻ tại JUN JIN STORE.VN</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68); margin-bottom: 14px;"><strong>junjin.ratxin.vn</strong> là hệ thống bán sỉ online với hàng ngàn sản phẩm <strong>Robot hút bụi, đồ gia dụng và thiết bị thông minh giá cực tốt</strong> dành riêng cho cộng tác viên và đại lý.</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px;"><span style="border: 1px solid rgba(102,186,50,.22); padding: 7px 14px; border-radius: 30px; font-size: 12.5px; color: #346d14; font-weight: 600;">🤖 Robot hút bụi cao cấp</span> <span style="border: 1px solid rgba(102,186,50,.22); padding: 7px 14px; border-radius: 30px; font-size: 12.5px; color: #346d14; font-weight: 600;">🏠 Đồ gia dụng thông minh</span> <span style="border: 1px solid rgba(102,186,50,.22); padding: 7px 14px; border-radius: 30px; font-size: 12.5px; color: #346d14; font-weight: 600;">📱 Phụ kiện điện thoại</span> <span style="border: 1px solid rgba(102,186,50,.22); padding: 7px 14px; border-radius: 30px; font-size: 12.5px; color: #346d14; font-weight: 600;">⚡ Thiết bị công nghệ</span> <span style="border: 1px solid rgba(102,186,50,.22); padding: 7px 14px; border-radius: 30px; font-size: 12.5px; color: #346d14; font-weight: 600;">🛒 Hỗ trợ Dropship CTV</span></div>
</div>
<!-- CTA + LIÊN HỆ -->
<div style="background: linear-gradient(135deg,#66ba32 0%,#4f9823 100%); border-radius: 22px; padding: 28px 24px; margin-bottom: 14px; text-align: center; box-shadow: 0 10px 36px rgba(102,186,50,.28); position: relative; overflow: hidden;">
<div style="position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255,255,255,.07); pointer-events: none;">&nbsp;</div>
<div style="font-size: 20px; font-weight: 900; color: #fff; margin-bottom: 8px; position: relative;">Gặp khó khăn khi đăng nhập?</div>
<p style="font-size: 13.5px; color: rgba(255,255,255,.82); line-height: 1.7; margin: 0 0 18px; position: relative;">Đội ngũ JUN JIN STORE.VN sẵn sàng hỗ trợ bạn qua Zalo hoặc điện thoại.</p>
<div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative;"><a style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 14px; background: #fff; color: #4f9823; font-weight: 800; font-size: 14px; text-decoration: none; box-shadow: 0 4px 16px rgba(0,0,0,.12);" href="../../../" target="_blank" rel="noopener">🛒 Vào mua ngay</a> <a style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 14px; background: rgba(255,255,255,.18); border: 1.5px solid rgba(255,255,255,.35); color: #fff; font-weight: bold; font-size: 14px; text-decoration: none;" href="https://zalo.me/0858279868" target="_blank" rel="noopener">💬 Chat Zalo hỗ trợ</a> <a style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 14px; background: rgba(255,255,255,.18); border: 1.5px solid rgba(255,255,255,.35); color: #fff; font-weight: bold; font-size: 14px; text-decoration: none;" href="tel:0858279868">📞 07.84.84.84.84</a></div>
<div style="margin-top: 12px; font-size: 12px; color: rgba(255,255,255,.60); position: relative;">⏰ Hỗ trợ giờ hành chính · Phản hồi nhanh qua Zalo</div>
</div>
<!-- FOOTER -->
<div style="text-align: center; padding: 16px 0; font-size: 12.5px; color: rgba(26,26,26,.38);">© JUN JIN STORE.VN · Hướng dẫn đăng nhập · Hotline: <a style="color: #4f9823; font-weight: bold; text-decoration: none;" href="tel:0858279868">07.84.84.84.84</a></div>
</div></div></div></main>`,W3=`<div class="my-5 bg-white p-4"><h1 class="text-2xl">Giới thiệu về Phan Phan</h1><div class="ant-divider css-5y1eqa css-var-_R_aivb_ ant-divider-horizontal" role="separator"></div><div class="styles_article__pCj5f"><div style="font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif; color: #1a1a1a; max-width: 1100px; margin: 0 auto; -webkit-font-smoothing: antialiased; line-height: 1.6;"><!-- HERO -->
<div style="border-radius: 28px; overflow: hidden; background: linear-gradient(135deg,#f6fbf1 0%,#eef8e6 45%,#ffffff 100%); border: 1px solid rgba(102,186,50,.18); box-shadow: 0 18px 48px rgba(102,186,50,.14); margin-bottom: 20px;">
<div style="display: grid; grid-template-columns: 1.08fr .92fr; gap: 0; align-items: stretch;"><!-- LEFT -->
<div style="padding: 34px 30px 30px;">
<div style="display: inline-flex; align-items: center; gap: 10px; padding: 8px 14px; border-radius: 999px; background: rgba(102,186,50,.1); border: 1px solid rgba(102,186,50,.16); margin-bottom: 18px;"><span style="font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #4d9323;">JUN JIN STORE.VN GIỚI THIỆU</span></div>
<div style="font-size: 42px; line-height: 1.12; font-weight: 900; letter-spacing: -.03em; color: #17310a; margin-bottom: 14px;">Nền tảng mua sắm đa ngành <br>và cơ hội kinh doanh dropship</div>
<div style="font-size: 16px; line-height: 1.85; color: rgba(23,49,10,.78); margin-bottom: 18px; max-width: 580px;">JUN JIN STORE.VN là nền tảng phân phối và bán sỉ theo mô hình mở, kết hợp giữa <strong>mua sắm</strong> và <strong>kinh doanh</strong> trên cùng một hệ thống. Người dùng có thể tiếp cận nguồn hàng đa ngành, giá thành viên minh bạch sau đăng nhập và mở rộng kinh doanh theo mô hình dropship linh hoạt.</div>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 22px;"><span style="padding: 9px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(102,186,50,.16); font-size: 13px; font-weight: bold; color: #4d9323; box-shadow: 0 4px 10px rgba(102,186,50,.05);">Mua sắm đa ngành</span> <span style="padding: 9px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(102,186,50,.16); font-size: 13px; font-weight: bold; color: #4d9323; box-shadow: 0 4px 10px rgba(102,186,50,.05);">Giá thành viên tốt</span> <span style="padding: 9px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(102,186,50,.16); font-size: 13px; font-weight: bold; color: #4d9323; box-shadow: 0 4px 10px rgba(102,186,50,.05);">Dropship linh hoạt</span> <span style="padding: 9px 14px; border-radius: 999px; background: #fff; border: 1px solid rgba(102,186,50,.16); font-size: 13px; font-weight: bold; color: #4d9323; box-shadow: 0 4px 10px rgba(102,186,50,.05);">Theo dõi đơn hàng</span></div>
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 22px;"><a style="display: inline-flex; align-items: center; justify-content: center; padding: 15px 24px; border-radius: 16px; background: linear-gradient(135deg,#66ba32,#7ccc42); color: #fff; text-decoration: none; font-weight: 800; font-size: 14px; box-shadow: 0 12px 24px rgba(102,186,50,.22);" href="../../../dang-nhap" target="_blank" rel="noopener"> Đăng ký / Đăng nhập ngay </a>
<div style="display: inline-flex; align-items: center; padding: 15px 18px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.16); font-size: 14px; font-weight: bold; color: #315f15; box-shadow: 0 6px 16px rgba(102,186,50,.06);">Hotline: 0784.84.84.84</div>
</div>
<div style="display: grid; grid-template-columns: repeat(3,minmax(120px,1fr)); gap: 10px;">
<div style="background: #fff; border: 1px solid rgba(102,186,50,.14); border-radius: 18px; padding: 14px 14px; box-shadow: 0 4px 12px rgba(102,186,50,.05);">
<div style="font-size: 22px; font-weight: 900; color: #66ba32; line-height: 1; margin-bottom: 6px;">Đa</div>
<div style="font-size: 12px; line-height: 1.6; color: #5f6d55;">Ngành hàng trên cùng một hệ thống</div>
</div>
<div style="background: #fff; border: 1px solid rgba(102,186,50,.14); border-radius: 18px; padding: 14px 14px; box-shadow: 0 4px 12px rgba(102,186,50,.05);">
<div style="font-size: 22px; font-weight: 900; color: #66ba32; line-height: 1; margin-bottom: 6px;">Tốt</div>
<div style="font-size: 12px; line-height: 1.6; color: #5f6d55;">Giá thành viên sau khi đăng nhập</div>
</div>
<div style="background: #fff; border: 1px solid rgba(102,186,50,.14); border-radius: 18px; padding: 14px 14px; box-shadow: 0 4px 12px rgba(102,186,50,.05);">
<div style="font-size: 22px; font-weight: 900; color: #66ba32; line-height: 1; margin-bottom: 6px;">Nhanh</div>
<div style="font-size: 12px; line-height: 1.6; color: #5f6d55;">Theo dõi đơn hàng và vận hành rõ ràng</div>
</div>
</div>
</div>
<!-- RIGHT -->
<div style="position: relative; min-height: 100%; padding: 22px; background: radial-gradient(circle at top right, rgba(102,186,50,.18), transparent 34%),        radial-gradient(circle at bottom left, rgba(102,186,50,.12), transparent 30%),        linear-gradient(135deg,#edf8e5 0%,#f8fcf4 100%);">
<div style="position: absolute; top: 22px; right: 22px; left: 22px; height: 84px; border-radius: 20px; background: linear-gradient(135deg,#66ba32,#8ad652); box-shadow: 0 14px 28px rgba(102,186,50,.18); overflow: hidden;"><img style="width: 100%; height: 100%; object-fit: cover; display: block; opacity: .96;" src="https://r6i.pen.dropbuy.vn/md/tenants/237/1772890793926-banner-3-logo.jpg" alt="Banner quảng cáo JUN JIN STORE.VN"></div>
<div style="padding-top: 98px; height: 100%; display: flex; flex-direction: column; gap: 14px;">
<div style="background: #fff; border: 1px solid rgba(102,186,50,.16); border-radius: 24px; padding: 14px; box-shadow: 0 10px 28px rgba(102,186,50,.08);">
<div style="font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #66ba32; margin-bottom: 8px;">Người đại diện / CEO</div>
<img style="width: 100%; display: block; border-radius: 18px; object-fit: cover; box-shadow: 0 8px 18px rgba(0,0,0,.08);" src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/637347382_10244575811316750_4329886339538419950_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=1d70fc&amp;_nc_eui2=AeHHr5vHAjh1EOX9LgEQe0vYF_5tNR53p54X_m01Hnennq5_hbFMXC8GYXVtuFCa4Ixtvx2n2QMoNrusHq1AbpID&amp;_nc_ohc=iMPNmdKOmm8Q7kNvwFdngYh&amp;_nc_oc=AdrD9kAiXnw6UNdP3n4mNWy_iEPgxMzMUiHonfxPsD_eB1_eZQNUUCj94bD1E5NaS1tyaLvgyYldpDwO9vNhC3kz&amp;_nc_zt=23&amp;_nc_ht=scontent.fhan3-2.fna&amp;_nc_gid=qHXAHqMCosGcJJBKQKNwKw&amp;_nc_ss=7a30f&amp;oh=00_Afy5IvrCPbuwiNqTDV0nYtGtkliXCAJuJZc3pFr6yBNIcA&amp;oe=69C48258" alt="CEO JUN JIN STORE.VN"></div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
<div style="background: #fff; border: 1px solid rgba(102,186,50,.14); border-radius: 20px; padding: 16px; box-shadow: 0 6px 16px rgba(102,186,50,.05);">
<div style="font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: #66ba32; font-weight: 800; margin-bottom: 6px;">Trụ sở</div>
<div style="font-size: 14px; line-height: 1.7; color: #33422b;">112 Nam Dư, Lĩnh Nam, Hoàng Mai, Hà Nội</div>
</div>
<div style="background: #fff; border: 1px solid rgba(102,186,50,.14); border-radius: 20px; padding: 16px; box-shadow: 0 6px 16px rgba(102,186,50,.05);">
<div style="font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: #66ba32; font-weight: 800; margin-bottom: 6px;">Giờ làm việc</div>
<div style="font-size: 14px; line-height: 1.7; color: #33422b;">9h – 22h từ thứ 2 đến CN</div>
</div>
</div>
<div style="background: linear-gradient(135deg,#66ba32,#82cf4b); border-radius: 22px; padding: 18px 18px; color: #fff; box-shadow: 0 14px 28px rgba(102,186,50,.18);">
<div style="font-size: 12px; letter-spacing: .08em; text-transform: uppercase; font-weight: 800; opacity: .88; margin-bottom: 5px;">Liên hệ tư vấn</div>
<div style="font-size: 28px; line-height: 1.1; font-weight: 900; letter-spacing: -.03em;">0784.84.84.84</div>
<div style="font-size: 13px; opacity: .92; margin-top: 6px;">0798.98.98.98</div>
</div>
</div>
</div>
</div>
</div>
<!-- OVERVIEW -->
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 14px; margin-bottom: 18px;">
<div style="background: #fff; border-radius: 22px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 8px 22px rgba(102,186,50,.06); padding: 22px;">
<div style="font-size: 18px; font-weight: 800; color: #163209; margin-bottom: 8px;">Nền tảng thương mại điện tử mở</div>
<div style="font-size: 14px; line-height: 1.85; color: #5b6952;">JUN JIN STORE.VN vận hành theo mô hình mở, nơi người dùng có thể mua sắm và đồng thời tiếp cận cơ hội kinh doanh đa ngành hàng trên cùng một hệ thống.</div>
</div>
<div style="background: #fff; border-radius: 22px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 8px 22px rgba(102,186,50,.06); padding: 22px;">
<div style="font-size: 18px; font-weight: 800; color: #163209; margin-bottom: 8px;">Giá thành viên minh bạch</div>
<div style="font-size: 14px; line-height: 1.85; color: #5b6952;">Hệ thống tập trung vào mức giá thành viên tốt, rõ ràng và cạnh tranh, giúp người mua tiếp cận sản phẩm với mức chi phí tối ưu hơn sau khi đăng nhập tài khoản.</div>
</div>
</div>
<!-- SECTION 1 -->
<div style="background: #fff; border-radius: 24px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 10px 28px rgba(102,186,50,.06); overflow: hidden; margin-bottom: 16px;">
<div style="background: linear-gradient(135deg,#f6fbf1,#eef8e6); padding: 18px 22px; border-bottom: 1px solid rgba(102,186,50,.12); display: flex; align-items: center; gap: 14px;">
<div style="width: 48px; height: 48px; border-radius: 16px; background: linear-gradient(135deg,#66ba32,#82cf4b); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900; box-shadow: 0 10px 20px rgba(102,186,50,.18); flex-shrink: 0;">1</div>
<div>
<div style="font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #66ba32; margin-bottom: 3px;">Nội dung 1</div>
<div style="font-size: 22px; font-weight: 800; color: #17310a;">Nền tảng mua sắm đa ngành</div>
</div>
</div>
<div style="padding: 22px;">
<p style="margin: 0 0 16px; font-size: 14px; line-height: 1.85; color: #5b6952;">JUN JIN STORE.VN cung cấp nhiều nhóm sản phẩm khác nhau, giúp người dùng dễ dàng tìm kiếm và mua sắm trên cùng một website.</p>
<div style="display: flex; flex-wrap: wrap; gap: 9px; margin-bottom: 16px;"><span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Điện thoại &amp; phụ kiện</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Thiết bị điện gia dụng</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Âm thanh &amp; công nghệ</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Ô tô – xe máy – xe đạp</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Nhà cửa &amp; đời sống</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Mẹ &amp; bé</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Thời trang</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Văn phòng phẩm</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Đồ camping, dã ngoại</span></div>
<div style="background: linear-gradient(135deg,#f7fcf3,#fbfef9); border: 1px solid rgba(102,186,50,.12); border-radius: 18px; padding: 16px; font-size: 14px; line-height: 1.8; color: #5b6952;">Hệ thống cập nhật hàng hóa liên tục với số lượng lớn và đa dạng nguồn cung, giúp người dùng có thêm nhiều lựa chọn phù hợp với nhu cầu thực tế.</div>
</div>
</div>
<!-- SECTION 2 -->
<div style="background: #fff; border-radius: 24px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 10px 28px rgba(102,186,50,.06); overflow: hidden; margin-bottom: 16px;">
<div style="background: linear-gradient(135deg,#f6fbf1,#eef8e6); padding: 18px 22px; border-bottom: 1px solid rgba(102,186,50,.12); display: flex; align-items: center; gap: 14px;">
<div style="width: 48px; height: 48px; border-radius: 16px; background: linear-gradient(135deg,#66ba32,#82cf4b); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900; box-shadow: 0 10px 20px rgba(102,186,50,.18); flex-shrink: 0;">2</div>
<div>
<div style="font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #66ba32; margin-bottom: 3px;">Nội dung 2</div>
<div style="font-size: 22px; font-weight: 800; color: #17310a;">Giá thành viên – minh bạch sau khi đăng nhập</div>
</div>
</div>
<div style="padding: 22px;">
<p style="margin: 0 0 16px; font-size: 14px; line-height: 1.85; color: #5b6952;">Để đảm bảo chính sách giá cạnh tranh và tối ưu cho khách hàng, giá sản phẩm được hiển thị sau khi đăng ký tài khoản. Việc đăng ký hoàn toàn miễn phí và chỉ mất vài phút.</p>
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(210px,1fr)); gap: 10px; margin-bottom: 16px;">
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Xem giá chi tiết</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Đặt hàng trực tiếp</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Thanh toán online</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Theo dõi đơn hàng</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Tích lũy lịch sử giao dịch</div>
</div>
<div style="background: linear-gradient(135deg,#f7fcf3,#fbfef9); border: 1px solid rgba(102,186,50,.12); border-radius: 18px; padding: 16px; font-size: 14px; line-height: 1.8; color: #5b6952;">Mô hình này giúp JUN JIN STORE.VN tối ưu chi phí vận hành và mang lại mức giá tốt hơn cho những người dùng thực sự có nhu cầu mua hàng.</div>
</div>
</div>
<!-- PAYMENT + SHIPPING -->
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(300px,1fr)); gap: 14px; margin-bottom: 16px;">
<div style="background: #fff; border-radius: 24px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 10px 28px rgba(102,186,50,.06); overflow: hidden;">
<div style="padding: 18px 22px; background: linear-gradient(135deg,#f6fbf1,#eef8e6); border-bottom: 1px solid rgba(102,186,50,.12); font-size: 20px; font-weight: 800; color: #17310a;">Hệ thống thanh toán linh hoạt</div>
<div style="padding: 22px;">
<div style="display: grid; gap: 10px;">
<div style="padding: 14px 16px; border-radius: 16px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12); font-size: 14px; line-height: 1.8; color: #4f5e45;">Thanh toán chuyển khoản <strong>VietQR tự động</strong></div>
<div style="padding: 14px 16px; border-radius: 16px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12); font-size: 14px; line-height: 1.8; color: #4f5e45;">Thanh toán khi nhận hàng <strong>(COD)</strong></div>
</div>
</div>
</div>
<div style="background: #fff; border-radius: 24px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 10px 28px rgba(102,186,50,.06); overflow: hidden;">
<div style="padding: 18px 22px; background: linear-gradient(135deg,#f6fbf1,#eef8e6); border-bottom: 1px solid rgba(102,186,50,.12); font-size: 20px; font-weight: 800; color: #17310a;">Vận chuyển và theo dõi đơn hàng</div>
<div style="padding: 22px;">
<p style="margin: 0 0 14px; font-size: 14px; line-height: 1.85; color: #5b6952;">JUN JIN STORE.VN kết nối với các đơn vị vận chuyển như Viettel Post, GHN và các đối tác logistics khác.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;"><span style="padding: 8px 12px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12); font-size: 13px;">Chờ thanh toán</span> <span style="padding: 8px 12px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12); font-size: 13px;">Đã thanh toán</span> <span style="padding: 8px 12px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12); font-size: 13px;">Đóng gói</span> <span style="padding: 8px 12px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12); font-size: 13px;">Đang giao</span> <span style="padding: 8px 12px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12); font-size: 13px;">Hoàn thành</span></div>
<div style="font-size: 14px; line-height: 1.8; color: #5b6952;">Hệ thống cập nhật trạng thái đơn hàng theo từng giai đoạn để người mua dễ dàng theo dõi quá trình xử lý.</div>
</div>
</div>
</div>
<!-- DROPSHIP TITLE -->
<div style="border-radius: 24px; background: linear-gradient(135deg,#66ba32 0%,#7ac844 100%); padding: 24px 24px 22px; margin-bottom: 16px; box-shadow: 0 12px 28px rgba(102,186,50,.18); color: #fff;">
<div style="font-size: 28px; font-weight: 900; letter-spacing: -.02em; margin-bottom: 8px;">🚀 Cơ hội kinh doanh cùng JUN JIN STORE.VN</div>
<div style="font-size: 14px; line-height: 1.85; opacity: .96;">Bên cạnh mua sắm, JUN JIN STORE.VN cho phép người dùng kinh doanh theo mô hình <strong>Dropship</strong>, phù hợp với những ai muốn bắt đầu bán hàng linh hoạt mà không cần ôm hàng hay đầu tư vốn lớn.</div>
</div>
<!-- DROPSHIP -->
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 14px; margin-bottom: 16px;">
<div style="background: #fff; border-radius: 24px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 10px 28px rgba(102,186,50,.06); overflow: hidden;">
<div style="padding: 18px 22px; background: linear-gradient(135deg,#f6fbf1,#eef8e6); border-bottom: 1px solid rgba(102,186,50,.12); font-size: 20px; font-weight: 800; color: #17310a;">Dropship là gì?</div>
<div style="padding: 22px;">
<p style="margin: 0 0 12px; font-size: 14px; line-height: 1.85; color: #5b6952;">Dropship là hình thức kinh doanh không cần nhập hàng trước. Người bán có thể:</p>
<div style="display: grid; gap: 10px;">
<div style="padding: 14px 16px; border-radius: 16px; border: 1px solid rgba(102,186,50,.12); background: #fff;">Lấy sản phẩm từ kho JUN JIN STORE.VN</div>
<div style="padding: 14px 16px; border-radius: 16px; border: 1px solid rgba(102,186,50,.12); background: #fff;">Đăng bán trên Facebook, TikTok, Zalo hoặc website cá nhân</div>
<div style="padding: 14px 16px; border-radius: 16px; border: 1px solid rgba(102,186,50,.12); background: #fff;">Khi có đơn, đặt lại trên hệ thống</div>
<div style="padding: 14px 16px; border-radius: 16px; border: 1px solid rgba(102,186,50,.12); background: #fff;">JUN JIN STORE.VN xử lý đóng gói và giao hàng</div>
</div>
<p style="margin: 12px 0 0; font-size: 14px; line-height: 1.85; color: #5b6952;">Người bán hưởng phần chênh lệch lợi nhuận.</p>
</div>
</div>
<div style="background: #fff; border-radius: 24px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 10px 28px rgba(102,186,50,.06); overflow: hidden;">
<div style="padding: 18px 22px; background: linear-gradient(135deg,#f6fbf1,#eef8e6); border-bottom: 1px solid rgba(102,186,50,.12); font-size: 20px; font-weight: 800; color: #17310a;">Lợi ích khi kinh doanh dropship</div>
<div style="padding: 22px;">
<div style="display: flex; flex-wrap: wrap; gap: 9px; margin-bottom: 14px;"><span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Không cần vốn nhập hàng lớn</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Không cần quản lý kho</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Không lo xử lý vận chuyển</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Không cần hệ thống thanh toán riêng</span> <span style="padding: 9px 14px; border-radius: 999px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.14); font-size: 13px; font-weight: bold; color: #4c8f24;">Có sẵn hàng nghìn sản phẩm đa ngành</span></div>
<div style="background: linear-gradient(135deg,#f7fcf3,#fbfef9); border: 1px solid rgba(102,186,50,.12); border-radius: 18px; padding: 16px; font-size: 14px; line-height: 1.8; color: #5b6952;">Hệ thống quản lý đơn hàng và doanh thu được hiển thị trực tiếp trên tài khoản người dùng, giúp việc theo dõi kinh doanh rõ ràng và thuận tiện hơn.</div>
</div>
</div>
</div>
<!-- SECTION 3 -->
<div style="background: #fff; border-radius: 24px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 10px 28px rgba(102,186,50,.06); overflow: hidden; margin-bottom: 16px;">
<div style="background: linear-gradient(135deg,#f6fbf1,#eef8e6); padding: 18px 22px; border-bottom: 1px solid rgba(102,186,50,.12); display: flex; align-items: center; gap: 14px;">
<div style="width: 48px; height: 48px; border-radius: 16px; background: linear-gradient(135deg,#66ba32,#82cf4b); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900; box-shadow: 0 10px 20px rgba(102,186,50,.18); flex-shrink: 0;">3</div>
<div>
<div style="font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #66ba32; margin-bottom: 3px;">Nội dung 3</div>
<div style="font-size: 22px; font-weight: 800; color: #17310a;">Định hướng phát triển</div>
</div>
</div>
<div style="padding: 22px;">
<p style="margin: 0 0 16px; font-size: 14px; line-height: 1.85; color: #5b6952;">JUN JIN STORE.VN hướng đến xây dựng một nền tảng phân phối và bán sỉ đa ngành, nơi người mua có giá tốt, người bán có cơ hội kinh doanh linh hoạt và toàn bộ hệ thống vận hành minh bạch, tự động.</p>
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 10px; margin-bottom: 16px;">
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Người mua có giá tốt</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Người bán có cơ hội kinh doanh linh hoạt</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #fff; border: 1px solid rgba(102,186,50,.12); box-shadow: 0 4px 10px rgba(102,186,50,.04);">Hệ thống vận hành minh bạch và tự động</div>
</div>
<div style="background: linear-gradient(135deg,#f7fcf3,#fbfef9); border: 1px solid rgba(102,186,50,.12); border-radius: 18px; padding: 16px; font-size: 14px; line-height: 1.8; color: #5b6952;">Chúng tôi tập trung tối ưu trải nghiệm người dùng, tự động hóa thanh toán và quản lý đơn hàng để giúp quá trình mua bán trở nên đơn giản, rõ ràng và hiệu quả hơn.</div>
</div>
</div>
<!-- CTA -->
<div style="border-radius: 26px; background: linear-gradient(135deg,#66ba32,#7dcb47); padding: 30px 24px; text-align: center; box-shadow: 0 16px 34px rgba(102,186,50,.2); margin-bottom: 16px;">
<div style="font-size: 28px; font-weight: 900; letter-spacing: -.02em; color: #fff; margin-bottom: 8px;">Khám phá JUN JIN STORE.VN ngay hôm nay</div>
<div style="font-size: 14px; line-height: 1.85; color: rgba(255,255,255,.94); max-width: 760px; margin: 0 auto 18px;">Đăng ký tài khoản để mua hàng với giá tốt hơn hoặc bắt đầu kinh doanh dropship trực tiếp trên nền tảng.</div>
<a style="display: inline-flex; align-items: center; justify-content: center; padding: 15px 26px; border-radius: 16px; background: #fff; color: #4b9321; text-decoration: none; font-weight: 900; font-size: 14px; box-shadow: 0 8px 18px rgba(0,0,0,.08);" href="../../../dang-nhap" target="_blank" rel="noopener"> Đăng ký / Đăng nhập ngay </a></div>
<!-- FOOTER -->
<div style="background: #fff; border-radius: 22px; border: 1px solid rgba(102,186,50,.14); box-shadow: 0 8px 22px rgba(102,186,50,.06); padding: 20px; margin-bottom: 10px;">
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap: 12px;">
<div style="padding: 14px 16px; border-radius: 16px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12);">
<div style="font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: #66ba32; font-weight: 800; margin-bottom: 6px;">Website</div>
<div style="font-size: 14px; color: #33422b;">junjin.ratxin.vn</div>
</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12);">
<div style="font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: #66ba32; font-weight: 800; margin-bottom: 6px;">Trụ sở chính</div>
<div style="font-size: 14px; color: #33422b;">112 Nam Dư, Lĩnh Nam, Hoàng Mai, Hà Nội</div>
</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12);">
<div style="font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: #66ba32; font-weight: 800; margin-bottom: 6px;">Giờ làm việc</div>
<div style="font-size: 14px; color: #33422b;">9h – 22h từ thứ 2 đến CN</div>
</div>
<div style="padding: 14px 16px; border-radius: 16px; background: #f7fcf3; border: 1px solid rgba(102,186,50,.12);">
<div style="font-size: 12px; text-transform: uppercase; letter-spacing: .06em; color: #66ba32; font-weight: 800; margin-bottom: 6px;">Điện thoại</div>
<div style="font-size: 14px; color: #33422b;">0784.84.84.84 – 0798.98.98.98</div>
</div>
</div>
</div>
<div style="text-align: center; color: #7d8b74; font-size: 12px; padding: 4px 0 8px;">© JUN JIN STORE.VN • Nền tảng phân phối và cơ hội kinh doanh dropship</div>
</div></div></div>`,$3=`<div style="font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif; color: #1a1a1a; max-width: 860px; margin: 0 auto; -webkit-font-smoothing: antialiased;">
<div style="border-radius: 22px; background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); padding: 32px 32px 28px; margin-bottom: 20px; box-shadow: 0 12px 40px rgba(233,115,53,.30); position: relative; overflow: hidden;">
<div style="position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="position: relative; z-index: 1;">
<div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,.18); border-radius: 999px; padding: 5px 14px; margin-bottom: 14px; font-size: 12px; font-weight: bold; color: #fff; letter-spacing: .06em; text-transform: uppercase;">📦 Săn Đồ Ngon Chính Sách</div>
<div style="font-size: 28px; font-weight: 900; color: #fff; line-height: 1.2; letter-spacing: -.02em; margin-bottom: 16px;">Chính sách giao hàng</div>
<div style="background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.28); border-radius: 14px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start;">
<div style="font-size: 22px; flex-shrink: 0; margin-top: 2px;">🚚</div>
<div style="font-size: 14px; color: #fff; line-height: 1.65;">Săn Đồ Ngon hỗ trợ giao hàng đến nhiều khu vực để khách hàng mua sắm thuận tiện hơn. Thời gian giao hàng thực tế có thể thay đổi tùy địa chỉ nhận, tình trạng hàng hóa và đơn vị vận chuyển.</div>
</div>
</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 1.5px solid rgba(233,115,53,.18); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08); padding: 22px; margin-bottom: 18px;">
<div style="font-size: 20px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;">Phạm vi hỗ trợ giao hàng</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Shop hỗ trợ giao hàng theo thông tin khách hàng cung cấp khi đặt đơn. Tùy từng sản phẩm, khu vực nhận hàng và thời điểm đặt hàng, hình thức giao nhận có thể được sắp xếp linh hoạt để phù hợp hơn với quá trình xử lý đơn.</div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 14px; margin-bottom: 18px;">
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Thời gian xử lý đơn</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Đơn hàng sẽ được tiếp nhận, xác nhận và chuyển sang bước chuẩn bị giao khi thông tin đặt hàng hợp lệ và có thể liên hệ được với người nhận.</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Thời gian giao thực tế</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Thời gian nhận hàng phụ thuộc vào khu vực, đơn vị vận chuyển, tình trạng thời tiết hoặc các yếu tố khách quan khác trong quá trình giao nhận.</div>
</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">1</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 1</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Xác nhận thông tin giao hàng</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Khách hàng cần cung cấp thông tin nhận hàng đầy đủ và chính xác, bao gồm họ tên, số điện thoại, địa chỉ nhận hàng và các ghi chú cần thiết nếu có.</p>
<div style="background: rgba(233,115,53,.06); border: 1px solid rgba(233,115,53,.12); border-radius: 14px; padding: 14px 16px; font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Việc điền đúng thông tin sẽ giúp shop xử lý đơn nhanh hơn và hạn chế phát sinh chậm trễ trong quá trình giao hàng.</div>
</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">2</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 2</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Kiểm tra hàng khi nhận</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Khi nhận hàng, khách hàng nên kiểm tra tình trạng bên ngoài của kiện hàng trước khi nhận. Trong trường hợp có dấu hiệu bất thường, hãy liên hệ ngay với shop để được hỗ trợ.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px;"><span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Kiểm tra kiện hàng</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Liên hệ khi cần hỗ trợ</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Nhận hàng thuận tiện</span></div>
</div>
</div>
<div style="background: linear-gradient(135deg,#fffaf7 0%,#fff1ea 100%); border: 1.5px solid rgba(233,115,53,.20); border-radius: 18px; padding: 22px; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(233,115,53,.08);">
<div style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;"><span style="font-size: 26px;">📌</span> Lưu ý</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.70);">Một số trường hợp thời gian giao hàng có thể kéo dài hơn dự kiến do yếu tố khách quan. Shop sẽ cố gắng hỗ trợ cập nhật tình trạng đơn hàng trong khả năng có thể.</div>
</div>
<div style="background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); border-radius: 22px; padding: 28px 24px; text-align: center; box-shadow: 0 10px 36px rgba(233,115,53,.28); position: relative; overflow: hidden;">
<div style="position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="font-size: 20px; font-weight: 900; color: #fff; margin-bottom: 8px; position: relative;">Cần hỗ trợ về giao hàng?</div>
<p style="font-size: 13.5px; color: rgba(255,255,255,.86); line-height: 1.7; margin: 0 0 18px; position: relative;">Săn Đồ Ngon sẵn sàng hỗ trợ khách hàng trong quá trình xác nhận và nhận hàng.</p>
<div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative;"><a style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 14px; background: #fff; color: #c55a20; font-weight: 800; font-size: 14px; text-decoration: none; box-shadow: 0 4px 16px rgba(0,0,0,.12);" href="tel:0923796886">📞 0923.796.886</a></div>
</div>
</div>`,e4=`<div style="font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif; color: #1a1a1a; max-width: 860px; margin: 0 auto; -webkit-font-smoothing: antialiased;">
<div style="border-radius: 22px; background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); padding: 32px 32px 28px; margin-bottom: 20px; box-shadow: 0 12px 40px rgba(233,115,53,.30); position: relative; overflow: hidden;">
<div style="position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="position: relative; z-index: 1;">
<div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,.18); border-radius: 999px; padding: 5px 14px; margin-bottom: 14px; font-size: 12px; font-weight: bold; color: #fff; letter-spacing: .06em; text-transform: uppercase;">💳 Săn Đồ Ngon Chính Sách</div>
<div style="font-size: 28px; font-weight: 900; color: #fff; line-height: 1.2; letter-spacing: -.02em; margin-bottom: 16px;">Chính sách thanh toán</div>
<div style="background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.28); border-radius: 14px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start;">
<div style="font-size: 22px; flex-shrink: 0; margin-top: 2px;">💡</div>
<div style="font-size: 14px; color: #fff; line-height: 1.65;">Săn Đồ Ngon hỗ trợ hình thức thanh toán linh hoạt tùy theo từng đơn hàng và thao tác trên hệ thống. Sau khi đăng nhập, khách hàng có thể tiếp cận phương thức thanh toán phù hợp hơn trong quá trình đặt mua.</div>
</div>
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 14px; margin-bottom: 20px;">
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Thanh toán khi nhận hàng</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Một số đơn hàng có thể được hỗ trợ hình thức thanh toán khi nhận hàng tùy theo điều kiện xử lý thực tế và khu vực giao nhận.</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Thanh toán chuyển khoản / quét QR</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Sau khi đăng nhập và thao tác trên hệ thống, khách hàng có thể được hỗ trợ thanh toán chuyển khoản hoặc quét mã QR theo hướng dẫn hiển thị tại thời điểm đặt hàng.</div>
</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 1.5px solid rgba(233,115,53,.18); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08); padding: 22px; margin-bottom: 20px;">
<div style="font-size: 20px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;">Nguyên tắc thanh toán chung</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Khách hàng vui lòng kiểm tra kỹ thông tin đơn hàng trước khi xác nhận thanh toán. Tùy theo từng sản phẩm, từng giai đoạn xử lý đơn và giao diện hệ thống sau khi đăng nhập, hình thức thanh toán hiển thị có thể khác nhau.</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">1</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 1</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Thanh toán ship cod</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Một số đơn hàng có thể áp dụng hình thức thanh toán khi nhận hàng. Việc hỗ trợ hình thức này sẽ tùy thuộc vào sản phẩm, khu vực và tình trạng xử lý đơn thực tế.</p>
<div style="background: rgba(233,115,53,.06); border: 1px solid rgba(233,115,53,.12); border-radius: 14px; padding: 14px 16px; font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Nếu hệ thống hoặc shop xác nhận đơn phù hợp, khách hàng có thể thanh toán trực tiếp khi nhận hàng từ đơn vị vận chuyển.</div>
</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">2</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 2</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Thanh toán chuyển khoản hoặc quét QR</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Sau khi đăng nhập, khách hàng có thể được hiển thị phương thức thanh toán qua chuyển khoản hoặc quét mã QR theo hướng dẫn của hệ thống hoặc của shop tại thời điểm đặt hàng.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;"><span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Đăng nhập để thao tác thuận tiện hơn</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Hỗ trợ quét QR</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Chuyển khoản theo hướng dẫn</span></div>
</div>
</div>
<div style="background: linear-gradient(135deg,#fffaf7 0%,#fff1ea 100%); border: 1.5px solid rgba(233,115,53,.20); border-radius: 18px; padding: 22px; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(233,115,53,.08);">
<div style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;"><span style="font-size: 26px;">⚠️</span> Lưu ý thanh toán</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.70);">Khách hàng nên kiểm tra kỹ thông tin đơn hàng, phương thức thanh toán và các bước xác nhận trước khi hoàn tất thanh toán để hạn chế nhầm lẫn.</div>
</div>
<div style="background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); border-radius: 22px; padding: 28px 24px; text-align: center; box-shadow: 0 10px 36px rgba(233,115,53,.28); position: relative; overflow: hidden;">
<div style="position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="font-size: 20px; font-weight: 900; color: #fff; margin-bottom: 8px; position: relative;">Cần hỗ trợ thanh toán?</div>
<p style="font-size: 13.5px; color: rgba(255,255,255,.86); line-height: 1.7; margin: 0 0 18px; position: relative;">Săn Đồ Ngon sẵn sàng hỗ trợ khách hàng trong quá trình xác nhận đơn và thanh toán.</p>
<div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative;"><a style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 14px; background: #fff; color: #c55a20; font-weight: 800; font-size: 14px; text-decoration: none; box-shadow: 0 4px 16px rgba(0,0,0,.12);" href="tel:0923796886">📞 0923.796.886</a></div>
</div>
</div>`,t4=`<div style="font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif; color: #1a1a1a; max-width: 860px; margin: 0 auto; -webkit-font-smoothing: antialiased;">
<div style="border-radius: 22px; background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); padding: 32px 32px 28px; margin-bottom: 20px; box-shadow: 0 12px 40px rgba(233,115,53,.30); position: relative; overflow: hidden;">
<div style="position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="position: relative; z-index: 1;">
<div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,.18); border-radius: 999px; padding: 5px 14px; margin-bottom: 14px; font-size: 12px; font-weight: bold; color: #fff; letter-spacing: .06em; text-transform: uppercase;">🔒 Săn Đồ Ngon Chính Sách</div>
<div style="font-size: 28px; font-weight: 900; color: #fff; line-height: 1.2; letter-spacing: -.02em; margin-bottom: 16px;">Chính sách bảo mật</div>
<div style="background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.28); border-radius: 14px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start;">
<div style="font-size: 22px; flex-shrink: 0; margin-top: 2px;">🛡️</div>
<div style="font-size: 14px; color: #fff; line-height: 1.65;">Săn Đồ Ngon tôn trọng quyền riêng tư của khách hàng và cam kết sử dụng thông tin được cung cấp một cách phù hợp để hỗ trợ quá trình tư vấn, xác nhận đơn và chăm sóc khách hàng.</div>
</div>
</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 1.5px solid rgba(233,115,53,.18); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08); padding: 22px; margin-bottom: 20px;">
<div style="font-size: 20px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;">Mục đích thu thập thông tin</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Thông tin khách hàng có thể được thu thập trong quá trình đăng nhập, liên hệ, đặt hàng hoặc trao đổi với shop nhằm phục vụ cho việc xác nhận thông tin, hỗ trợ mua hàng, giao hàng và chăm sóc khách hàng khi cần thiết.</div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 14px; margin-bottom: 18px;">
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Thông tin có thể bao gồm</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Họ tên, số điện thoại, địa chỉ nhận hàng, nội dung trao đổi, thông tin tài khoản và các dữ liệu liên quan đến quá trình mua hàng trên website.</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Phạm vi sử dụng</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Thông tin được sử dụng để hỗ trợ hoạt động mua bán, xác nhận đơn, giao hàng, giải đáp thắc mắc và nâng cao trải nghiệm khách hàng trên website.</div>
</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">1</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 1</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Cam kết bảo mật thông tin</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Shop cố gắng thực hiện các biện pháp phù hợp để bảo vệ thông tin khách hàng trong phạm vi hoạt động của mình và hạn chế việc sử dụng thông tin sai mục đích.</p>
<div style="background: rgba(233,115,53,.06); border: 1px solid rgba(233,115,53,.12); border-radius: 14px; padding: 14px 16px; font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Khách hàng nên chủ động bảo mật thông tin tài khoản, mật khẩu và các dữ liệu cá nhân khi sử dụng website.</div>
</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">2</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 2</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Điều chỉnh và cập nhật</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Chính sách bảo mật có thể được điều chỉnh để phù hợp hơn với hoạt động thực tế của website và quá trình hỗ trợ khách hàng. Nội dung cập nhật sẽ được hiển thị trên website khi cần thiết.</p>
</div>
</div>
<div style="background: linear-gradient(135deg,#fffaf7 0%,#fff1ea 100%); border: 1.5px solid rgba(233,115,53,.20); border-radius: 18px; padding: 22px; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(233,115,53,.08);">
<div style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;"><span style="font-size: 26px;">📌</span> Lưu ý</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.70);">Khi sử dụng website, khách hàng được hiểu là đã đồng ý với việc cung cấp thông tin cần thiết trong phạm vi hỗ trợ mua hàng và chăm sóc khách hàng của shop.</div>
</div>
<div style="background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); border-radius: 22px; padding: 28px 24px; text-align: center; box-shadow: 0 10px 36px rgba(233,115,53,.28); position: relative; overflow: hidden;">
<div style="position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="font-size: 20px; font-weight: 900; color: #fff; margin-bottom: 8px; position: relative;">Cần hỗ trợ về thông tin cá nhân?</div>
<p style="font-size: 13.5px; color: rgba(255,255,255,.86); line-height: 1.7; margin: 0 0 18px; position: relative;">Săn Đồ Ngon sẵn sàng tiếp nhận và hỗ trợ khách hàng khi có thắc mắc liên quan đến chính sách bảo mật.</p>
<div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative;"><a style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 14px; background: #fff; color: #c55a20; font-weight: 800; font-size: 14px; text-decoration: none; box-shadow: 0 4px 16px rgba(0,0,0,.12);" href="tel:0923796886">📞 0923.796.886</a></div>
</div>
</div>`,n4=`<div class="styles_article__pCj5f"><div style="font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif; color: #1a1a1a; max-width: 860px; margin: 0 auto; -webkit-font-smoothing: antialiased;">
<div style="border-radius: 22px; background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); padding: 32px 32px 28px; margin-bottom: 20px; box-shadow: 0 12px 40px rgba(233,115,53,.30); position: relative; overflow: hidden;">
<div style="position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="position: relative; z-index: 1;">
<div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,.18); border-radius: 999px; padding: 5px 14px; margin-bottom: 14px; font-size: 12px; font-weight: bold; color: #fff; letter-spacing: .06em; text-transform: uppercase;">🔁 Săn Đồ Ngon Chính Sách</div>
<div style="font-size: 28px; font-weight: 900; color: #fff; line-height: 1.2; letter-spacing: -.02em; margin-bottom: 16px;">Chính sách đổi trả</div>
<div style="background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.28); border-radius: 14px; padding: 14px 18px; display: flex; gap: 12px; align-items: flex-start;">
<div style="font-size: 22px; flex-shrink: 0; margin-top: 2px;">📦</div>
<div style="font-size: 14px; color: #fff; line-height: 1.65;">Săn Đồ Ngon mong muốn hỗ trợ khách hàng tốt hơn trong trường hợp đơn hàng phát sinh vấn đề. Chính sách đổi trả được áp dụng trên cơ sở hỗ trợ phù hợp tùy theo tình trạng thực tế của sản phẩm và thông tin đơn hàng.</div>
</div>
</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 1.5px solid rgba(233,115,53,.18); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08); padding: 22px; margin-bottom: 20px;">
<div style="font-size: 20px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;">Nguyên tắc hỗ trợ đổi trả</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Khách hàng nên kiểm tra hàng hóa ngay khi nhận. Nếu có vấn đề phát sinh liên quan đến tình trạng sản phẩm, sai thông tin cơ bản hoặc lỗi cần hỗ trợ, khách hàng nên liên hệ sớm với shop để được hướng dẫn phù hợp.</div>
</div>
<div style="display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 14px; margin-bottom: 18px;">
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Liên hệ sớm để được hỗ trợ</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Việc liên hệ sớm sau khi nhận hàng sẽ giúp shop kiểm tra thông tin đơn và hỗ trợ xử lý thuận tiện hơn.</div>
</div>
<div style="background: #fff; border-radius: 18px; border: 2px solid rgba(233,115,53,.22); overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,.04),0 10px 28px rgba(233,115,53,.08);">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 14px 18px; border-bottom: 1px solid rgba(233,115,53,.12); font-size: 14px; font-weight: 800; color: #c55a20;">Giữ lại thông tin và hình ảnh</div>
<div style="padding: 16px; font-size: 13.5px; line-height: 1.7; color: rgba(26,26,26,.68);">Khách hàng nên giữ lại kiện hàng, hình ảnh, video mở hàng hoặc các thông tin liên quan để việc hỗ trợ đổi trả diễn ra rõ ràng hơn.</div>
</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">1</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 1</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Trường hợp cần hỗ trợ đổi trả</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Khách hàng có thể liên hệ shop khi phát hiện sản phẩm có vấn đề cần hỗ trợ sau khi nhận hàng, hoặc khi có chênh lệch thông tin cơ bản giữa đơn hàng và hàng nhận được.</p>
<div style="display: flex; flex-wrap: wrap; gap: 8px;"><span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Liên hệ sớm</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Cung cấp thông tin đơn</span> <span style="padding: 8px 14px; border-radius: 999px; background: rgba(233,115,53,.08); border: 1px solid rgba(233,115,53,.14); font-size: 12.5px; color: #b95016; font-weight: bold;">Hỗ trợ theo tình trạng thực tế</span></div>
</div>
</div>
<div style="background: #fff; border-radius: 20px; border: 2px solid rgba(233,115,53,.22); box-shadow: 0 4px 6px rgba(0,0,0,.04),0 12px 32px rgba(233,115,53,.10); overflow: hidden; margin-bottom: 14px;">
<div style="background: linear-gradient(135deg,rgba(233,115,53,.12),rgba(207,93,32,.06)); padding: 16px 20px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid rgba(233,115,53,.12);">
<div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg,#e97335,#cf5d20); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; font-weight: 900;">2</div>
<div>
<div style="font-size: 11px; font-weight: bold; letter-spacing: .08em; text-transform: uppercase; color: #c55a20; margin-bottom: 3px;">Nội dung 2</div>
<div style="font-size: 16px; font-weight: 800; color: #1a1a1a; line-height: 1.2;">Quy trình hỗ trợ</div>
</div>
</div>
<div style="padding: 20px;">
<p style="font-size: 14px; line-height: 1.75; color: rgba(26,26,26,.70); margin: 0 0 14px;">Sau khi tiếp nhận thông tin, shop sẽ kiểm tra nội dung khách hàng cung cấp và hướng dẫn phương án hỗ trợ phù hợp trong khả năng xử lý thực tế.</p>
<div style="background: rgba(233,115,53,.06); border: 1px solid rgba(233,115,53,.12); border-radius: 14px; padding: 14px 16px; font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.68);">Khách hàng vui lòng giữ lại sản phẩm, bao bì và các thông tin liên quan trong thời gian chờ shop phản hồi để việc hỗ trợ được thuận tiện hơn.</div>
</div>
</div>
<div style="background: linear-gradient(135deg,#fffaf7 0%,#fff1ea 100%); border: 1.5px solid rgba(233,115,53,.20); border-radius: 18px; padding: 22px; margin-bottom: 14px; box-shadow: 0 4px 16px rgba(233,115,53,.08);">
<div style="display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 900; color: #1a1a1a; margin-bottom: 10px;"><span style="font-size: 26px;">⚠️</span> Lưu ý</div>
<div style="font-size: 13.5px; line-height: 1.75; color: rgba(26,26,26,.70);">Để việc hỗ trợ đổi trả diễn ra rõ ràng hơn, khách hàng nên kiểm tra hàng ngay khi nhận và quay video mở hàng nếu thấy cần thiết.</div>
</div>
<div style="background: linear-gradient(135deg,#e97335 0%,#cf5d20 100%); border-radius: 22px; padding: 28px 24px; text-align: center; box-shadow: 0 10px 36px rgba(233,115,53,.28); position: relative; overflow: hidden;">
<div style="position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255,255,255,.07);">&nbsp;</div>
<div style="font-size: 20px; font-weight: 900; color: #fff; margin-bottom: 8px; position: relative;">Cần hỗ trợ đổi trả?</div>
<p style="font-size: 13.5px; color: rgba(255,255,255,.86); line-height: 1.7; margin: 0 0 18px; position: relative;">Săn Đồ Ngon sẵn sàng tiếp nhận thông tin để hỗ trợ khách hàng nhanh hơn trong khả năng xử lý của shop.</p>
<div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative;"><a style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 14px; background: #fff; color: #c55a20; font-weight: 800; font-size: 14px; text-decoration: none; box-shadow: 0 4px 16px rgba(0,0,0,.12);" href="tel:0923796886">📞 0923.796.886</a></div>
</div>
</div></div>`,mm=[{id:"bai1",label:"Bài 1",title:"Hướng dẫn đăng nhập",desc:"Hướng dẫn từng bước đăng nhập và mua hàng giá ưu đãi",html:J3},{id:"bai2",label:"Bài 2",title:"Giới thiệu website",desc:"Giới thiệu tổng quan nền tảng, sản phẩm và mô hình kinh doanh",html:W3}],xm=[{label:"Chính sách giao hàng",html:$3},{label:"Chính sách thanh toán",html:e4},{label:"Chính sách bảo mật",html:t4},{label:"Chính sách đổi trả",html:n4}];function bm(i){return`Sửa nội dung sau thành nội dung website bán phụ kiện, công nghệ, gia dụng của tôi${i.trim()?`, theo mã màu: ${i.trim()}`:""}, chỉ sửa thông tin giữ nguyên màu phong cách giống code sau:

Khi trả lời hãy xuất từng bài HTML riêng biệt, mỗi bài bắt đầu bằng dòng tiêu đề === Bài X: [Tên bài] === rồi toàn bộ HTML của bài đó phải được bọc trong khối code markdown \`\`\`html ... \`\`\` (để hiện nút copy), giữa các bài cách nhau 1 dòng trống.`}function vm(i,r){const s=[];return i.trim()&&s.push(`URL logo: ${i.trim()}`),r.trim()&&s.push(`Thông tin website:
${r.trim()}`),s.length>0?s.join(`

`)+`

`:""}function i4(){const[i,r]=y.useState(""),[s,c]=y.useState(""),[u,p]=y.useState(""),[h,m]=y.useState(!1),[x,g]=y.useState(!1),v=y.useRef(null),j=y.useRef(null),{toast:N}=Un(),k=y.useMemo(()=>{const A=bm(u),L=vm(i,s),U=mm.map((G,I)=>`=== Bài ${I+1}: ${G.title} ===
${G.html}`).join(`

`);return`${A}

${L}${U}`},[i,s,u]),O=y.useMemo(()=>{const A=bm(u),L=vm(i,s),U=xm.map((G,I)=>`=== Bài ${I+1}: ${G.label} ===
${G.html}`).join(`

`);return`${A}

${L}${U}`},[i,s,u]),C=async(A,L,U,G)=>{try{await navigator.clipboard.writeText(A)}catch{L.current&&(L.current.select(),document.execCommand("copy"))}U(!0),N({title:"Đã copy!",description:`Dán vào Gemini hoặc ChatGPT — ${G}`}),setTimeout(()=>U(!1),2500)},T=()=>{r(""),c(""),p("")},R=i||s||u;return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-10",children:l.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-3 flex items-center gap-3",children:[l.jsx(gi,{href:"/",children:l.jsx(ve,{variant:"ghost",size:"icon",className:"h-8 w-8 text-gray-500",children:l.jsx(Zr,{className:"w-4 h-4"})})}),l.jsx("div",{className:"w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0",children:l.jsx(W2,{className:"w-5 h-5 text-white"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:"text-sm font-bold text-gray-900 leading-none",children:"Viết bài"}),l.jsx("p",{className:"text-xs text-gray-500 mt-0.5",children:"Tạo prompt để AI viết bài giới thiệu, hướng dẫn & chính sách"})]}),R&&l.jsx(ve,{variant:"ghost",size:"icon",className:"h-8 w-8 text-gray-400 hover:text-gray-600",onClick:T,title:"Xóa tất cả",children:l.jsx(Ks,{className:"w-4 h-4"})})]})}),l.jsxs("main",{className:"max-w-5xl mx-auto px-4 py-8 space-y-6",children:[l.jsxs("div",{className:"bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800",children:[l.jsx("p",{className:"font-semibold mb-1",children:"Hướng dẫn sử dụng"}),l.jsxs("p",{className:"text-emerald-700 text-xs leading-relaxed",children:["Điền thông tin website, nhấn ",l.jsx("strong",{children:"Copy prompt"})," rồi dán vào"," ",l.jsx("strong",{children:"Gemini"})," hoặc ",l.jsx("strong",{children:"ChatGPT"}),". AI sẽ viết lại nội dung đúng thương hiệu, đúng màu của bạn."]})]}),l.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-6 space-y-5",children:[l.jsx("p",{className:"text-sm font-bold text-gray-800",children:"Thông tin website của bạn"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx(Ct,{htmlFor:"logo-url",className:"text-sm font-semibold text-gray-700",children:"URL logo"}),l.jsxs("div",{className:"relative",children:[l.jsx(Pd,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),l.jsx(Ge,{id:"logo-url",placeholder:"https://example.com/logo.png",value:i,onChange:A=>r(A.target.value),className:"pl-9 text-sm"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx(Ct,{htmlFor:"website-info",className:"text-sm font-semibold text-gray-700",children:"Thông tin website"}),l.jsxs("div",{className:"relative",children:[l.jsx(f0,{className:"absolute left-3 top-3 w-4 h-4 text-gray-400"}),l.jsx(on,{id:"website-info",placeholder:`Ví dụ:
Tên: JunJin Store
Website: junjin.vn
SĐT: 0858.279.868
Địa chỉ: 123 Nguyễn Trãi, Hà Nội
Giờ mở cửa: 8h–22h
Sản phẩm: phụ kiện điện thoại, đồ gia dụng, công nghệ`,value:s,onChange:A=>c(A.target.value),className:"pl-9 text-sm min-h-[110px] resize-y"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx(Ct,{htmlFor:"color-code",className:"text-sm font-semibold text-gray-700",children:"Mã màu chủ đạo"}),l.jsxs("div",{className:"relative",children:[l.jsx(Ss,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),l.jsx(Ge,{id:"color-code",placeholder:"linear-gradient(135deg,#66ba32,#4f9823)",value:u,onChange:A=>p(A.target.value),className:"pl-9 text-sm font-mono"})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsx("span",{className:"text-xs text-gray-400",children:"Ví dụ:"}),["linear-gradient(135deg,#66ba32,#4f9823)","linear-gradient(135deg,#3b82f6,#1d4ed8)","linear-gradient(135deg,#e97335,#cf5d20)","linear-gradient(135deg,#8b5cf6,#6d28d9)"].map(A=>l.jsxs("button",{type:"button",onClick:()=>p(A),className:"flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md px-2 py-1 transition-colors font-mono",children:[l.jsx("div",{className:"w-3 h-3 rounded-sm flex-shrink-0",style:{background:A}}),A]},A))]}),u.trim()&&l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-md flex-shrink-0 border border-gray-200",style:{background:u.trim()}}),l.jsx("p",{className:"text-xs text-emerald-600 font-medium",children:"✓ Màu sẽ được áp dụng vào prompt"})]})]})]}),l.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-6 space-y-5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(k2,{className:"w-4 h-4 text-emerald-600"}),l.jsx("p",{className:"text-sm font-bold text-gray-800",children:"Giới thiệu & hướng dẫn"}),l.jsx("span",{className:"text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold",children:"1 prompt · 2 bài"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-2 gap-2",children:mm.map(A=>l.jsxs("div",{className:"rounded-lg border border-gray-100 bg-gray-50 p-3",children:[l.jsx("p",{className:"text-xs font-bold text-gray-700 leading-snug",children:A.title}),l.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:[(A.html.length/1e3).toFixed(0),"k ký tự HTML"]})]},A.id))}),l.jsx("p",{className:"text-xs text-gray-500 leading-relaxed bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2",children:"Prompt gộp cả 2 bài vào một lần. Dán vào AI — chờ AI viết lại cả hướng dẫn đăng nhập lẫn giới thiệu website theo thương hiệu của bạn."}),l.jsx(ve,{onClick:()=>C(k,v,m,"Giới thiệu & Hướng dẫn"),className:"w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white",children:h?l.jsxs(l.Fragment,{children:[l.jsx(vt,{className:"w-4 h-4"}),"Đã copy!"]}):l.jsxs(l.Fragment,{children:[l.jsx(sn,{className:"w-4 h-4"}),"Copy prompt — Giới thiệu & Hướng dẫn"]})}),l.jsxs("div",{className:"rounded-lg border border-gray-100 overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50",children:[l.jsx("span",{className:"text-xs text-gray-500 font-medium",children:"Xem trước prompt"}),l.jsxs("span",{className:"text-xs text-gray-400",children:[k.length.toLocaleString("vi-VN")," ký tự"]})]}),l.jsx("textarea",{ref:v,readOnly:!0,value:k,className:"w-full h-40 p-3 text-xs font-mono text-gray-600 bg-white resize-none border-none focus:outline-none leading-relaxed"})]})]}),l.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-6 space-y-5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(q2,{className:"w-4 h-4 text-violet-600"}),l.jsx("p",{className:"text-sm font-bold text-gray-800",children:"4 bài chính sách"}),l.jsx("span",{className:"text-xs text-violet-600 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full font-semibold",children:"1 prompt · 4 bài"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:xm.map((A,L)=>l.jsxs("div",{className:"rounded-lg border border-gray-100 bg-gray-50 p-3 text-center",children:[l.jsx("p",{className:"text-xs font-bold text-gray-700 leading-snug",children:A.label}),l.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:[(A.html.length/1e3).toFixed(0),"k ký tự"]})]},L))}),l.jsx("p",{className:"text-xs text-gray-500 leading-relaxed bg-violet-50 border border-violet-100 rounded-lg px-3 py-2",children:"Prompt gộp cả 4 bài chính sách vào một lần. Dán vào AI — chờ AI viết lại toàn bộ theo màu và thông tin website của bạn."}),l.jsx(ve,{onClick:()=>C(O,j,g,"4 bài chính sách"),className:"w-full gap-2 bg-violet-600 hover:bg-violet-700 text-white",children:x?l.jsxs(l.Fragment,{children:[l.jsx(vt,{className:"w-4 h-4"}),"Đã copy!"]}):l.jsxs(l.Fragment,{children:[l.jsx(sn,{className:"w-4 h-4"}),"Copy prompt — 4 bài chính sách"]})}),l.jsxs("div",{className:"rounded-lg border border-gray-100 overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50",children:[l.jsx("span",{className:"text-xs text-gray-500 font-medium",children:"Xem trước prompt"}),l.jsxs("span",{className:"text-xs text-gray-400",children:[O.length.toLocaleString("vi-VN")," ký tự"]})]}),l.jsx("textarea",{ref:j,readOnly:!0,value:O,className:"w-full h-40 p-3 text-xs font-mono text-gray-600 bg-white resize-none border-none focus:outline-none leading-relaxed"})]})]})]})]})}function a4(i){let r=5381;for(let s=0;s<i.length;s++)r=Math.imul(r,33)+i.charCodeAt(s),r=r|0;return r}function r4(i){return i.trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0]}const o4="var _L=HASH,_f=function(s){var h=5381;for(var i=0;i<s.length;i++){h=(Math.imul(h,33)+s.charCodeAt(i))|0;}return h;},_d=location.hostname.replace(/^www\\./,'');if(_f(_d)!==_L)return;";function s4(){const{toast:i}=Un(),[r,s]=y.useState(""),[c,u]=y.useState(""),[p,h]=y.useState(null),[m,x]=y.useState(""),[g,v]=y.useState(!1),j=()=>{if(!r.trim())return;const k=r4(r),O=a4(k),C=o4.replace("HASH",String(O));x(k),h(O),u(C),v(!1)},N=async()=>{c&&(await navigator.clipboard.writeText(c),v(!0),i({title:"Đã copy lock code!"}),setTimeout(()=>v(!1),2e3))};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsxs("header",{className:"bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3",children:[l.jsx(gi,{href:"/",children:l.jsx("button",{className:"p-1.5 rounded-lg hover:bg-gray-100 transition-colors",children:l.jsx(Zr,{className:"w-4 h-4 text-gray-600"})})}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center",children:l.jsx(Xg,{className:"w-4 h-4 text-white"})}),l.jsxs("div",{children:[l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Lock Code Generator"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Khóa toàn bộ script theo domain — dock, footer, popup đều bị chặn khi sai domain"})]})]})]}),l.jsxs("main",{className:"max-w-2xl mx-auto px-4 py-8 space-y-6",children:[l.jsxs(Xe,{children:[l.jsxs(et,{className:"pb-3",children:[l.jsx(tt,{className:"text-sm",children:"Nhập domain cần khóa"}),l.jsx(rn,{className:"text-xs",children:"Chỉ cần domain — không cần https, www, hay đường dẫn"})]}),l.jsx(Qe,{className:"space-y-3",children:l.jsxs("div",{children:[l.jsx(Ct,{className:"text-xs mb-1.5 block text-gray-600",children:"Domain"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx(Ge,{value:r,onChange:k=>s(k.target.value),onKeyDown:k=>k.key==="Enter"&&j(),placeholder:"VD: hungblack.vn",className:"font-mono text-sm",spellCheck:!1}),l.jsxs(ve,{onClick:j,disabled:!r.trim(),className:"bg-indigo-600 hover:bg-indigo-700 shrink-0",children:[l.jsx(Xg,{className:"w-4 h-4 mr-1.5"}),"Tạo Lock"]})]})]})})]}),c&&l.jsxs(l.Fragment,{children:[l.jsxs(Xe,{className:"border-indigo-200",children:[l.jsx(et,{className:"pb-2",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx(tt,{className:"text-sm text-indigo-700",children:"Dòng lock code"}),l.jsxs(rn,{className:"text-xs mt-0.5",children:["Dán làm ",l.jsx("strong",{children:"dòng đầu tiên"})," bên trong"," ",l.jsxs("code",{className:"bg-gray-100 px-1 rounded text-indigo-600 text-[11px]",children:["(function()","{"]})]})]}),l.jsxs(ve,{size:"sm",variant:g?"default":"outline",className:`gap-1.5 h-8 text-xs shrink-0 ${g?"bg-green-600 hover:bg-green-700 text-white border-green-600":""}`,onClick:N,children:[g?l.jsx(vt,{className:"w-3.5 h-3.5"}):l.jsx(sn,{className:"w-3.5 h-3.5"}),g?"Đã copy!":"Copy"]})]})}),l.jsxs(Qe,{className:"px-4 pb-4",children:[l.jsx("div",{className:"bg-gray-900 rounded-lg px-4 py-3 font-mono text-xs text-cyan-300 leading-relaxed break-all cursor-pointer select-all",onClick:N,title:"Bấm để copy",children:c}),l.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["✓ Khóa cho: ",l.jsx("strong",{className:"text-indigo-600",children:m}),l.jsxs("span",{className:"ml-2 text-gray-400",children:["(hash: ",p,")"]})]})]})]}),l.jsxs(Xe,{children:[l.jsx(et,{className:"pb-2",children:l.jsx(tt,{className:"text-sm",children:"Cách dán vào script (template Kho & Liên hệ)"})}),l.jsxs(Qe,{className:"px-4 pb-4",children:[l.jsxs("div",{className:"bg-gray-900 rounded-lg px-4 py-3 font-mono text-xs leading-6 overflow-x-auto",children:[l.jsx("p",{className:"text-gray-400",children:"<script>"}),l.jsx("p",{className:"text-gray-400",children:"(function(){"}),l.jsxs("p",{className:"text-cyan-300 bg-indigo-900/40 px-1 rounded",children:["  ",c.substring(0,55),l.jsx("span",{className:"text-indigo-400",children:"..."}),l.jsx("span",{className:"ml-2 text-indigo-400 font-sans not-italic text-[10px]",children:"← dán ĐẦU TIÊN"})]}),l.jsx("p",{className:"text-gray-500 italic",children:"  /* thay địa chỉ bảo hành */"}),l.jsxs("p",{className:"text-green-400",children:["  window._jjGate = true; ",l.jsx("span",{className:"text-gray-500 font-sans",children:"// tự set bởi template"})]}),l.jsx("p",{className:"text-gray-500 italic",children:"  /* inject dock CSS + HTML + event */"}),l.jsx("p",{className:"text-gray-400",children:"})();"}),l.jsx("p",{className:"text-gray-400",children:"<\/script>"}),l.jsx("p",{className:"text-gray-600 mt-1",children:"<script>"}),l.jsx("p",{className:"text-gray-600",children:"(function(){"}),l.jsxs("p",{className:"text-amber-400",children:["  if(!window._jjGate)return; ",l.jsx("span",{className:"text-gray-600 font-sans",children:"// tự có trong template"})]}),l.jsx("p",{className:"text-gray-600 italic",children:"  /* footer + popup — cũng bị chặn */"}),l.jsx("p",{className:"text-gray-600",children:"})();"}),l.jsx("p",{className:"text-gray-600",children:"<\/script>"})]}),l.jsxs("ul",{className:"mt-3 space-y-1.5 text-xs text-gray-600",children:[l.jsxs("li",{className:"flex gap-2",children:[l.jsx("span",{className:"text-indigo-500 font-bold",children:"1."})," Copy dòng lock ở trên"]}),l.jsxs("li",{className:"flex gap-2",children:[l.jsx("span",{className:"text-indigo-500 font-bold",children:"2."})," Mở script trong GTM, tìm ",l.jsxs("code",{className:"bg-gray-100 px-1 rounded text-[11px]",children:["(function()","{"]})," ",l.jsx("strong",{children:"đầu tiên"})]}),l.jsxs("li",{className:"flex gap-2",children:[l.jsx("span",{className:"text-indigo-500 font-bold",children:"3."})," Dán lock code làm ",l.jsx("strong",{children:"dòng đầu tiên"})," bên trong"]}),l.jsxs("li",{className:"flex gap-2 text-green-700",children:[l.jsx("span",{className:"font-bold",children:"✓"})," Template Kho & Liên hệ đã được cập nhật: dock, footer, popup đều bị chặn tự động"]})]})]})]})]})]})]})}const l4=new by;function c4(){const i="/gtm-webcon/".replace(/\/$/,"");if(!i||typeof window>"u")return i;const r=window.location.pathname;return r.toLowerCase().startsWith(i.toLowerCase())?r.slice(0,i.length):i}function d4(){return l.jsxs(Yv,{children:[l.jsx(ui,{path:"/",component:s3}),l.jsx(ui,{path:"/new",component:K3}),l.jsx(ui,{path:"/bulk-replace",component:Z3}),l.jsx(ui,{path:"/write-article",component:i4}),l.jsx(ui,{path:"/lock-gen",component:s4}),l.jsx(ui,{path:"/template/:id",children:i=>l.jsx(gm,{mode:"new",templateId:i.id})}),l.jsx(ui,{path:"/edit/:id",children:i=>l.jsx(gm,{mode:"edit",savedId:i.id})}),l.jsx(ui,{component:Fj})]})}function u4(){return l.jsx(yy,{client:l4,children:l.jsxs(Vj,{children:[l.jsx(Om,{base:c4(),children:l.jsx(d4,{})}),l.jsx(cw,{})]})})}Nv.createRoot(document.getElementById("root")).render(l.jsx(u4,{}));
