(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ro(t){const e=Object.create(null);for(const i of t.split(","))e[i]=1;return i=>i in e}const Y={},ri=[],ut=()=>{},sc=()=>!1,Ws=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lo=t=>t.startsWith("onUpdate:"),ye=Object.assign,ao=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},nc=Object.prototype.hasOwnProperty,Q=(t,e)=>nc.call(t,e),L=Array.isArray,li=t=>Qs(t)==="[object Map]",ol=t=>Qs(t)==="[object Set]",H=t=>typeof t=="function",ce=t=>typeof t=="string",xt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",rl=t=>(oe(t)||H(t))&&H(t.then)&&H(t.catch),ll=Object.prototype.toString,Qs=t=>ll.call(t),oc=t=>Qs(t).slice(8,-1),al=t=>Qs(t)==="[object Object]",co=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ni=ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Js=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},rc=/-(\w)/g,Ge=Js(t=>t.replace(rc,(e,i)=>i?i.toUpperCase():"")),lc=/\B([A-Z])/g,Qt=Js(t=>t.replace(lc,"-$1").toLowerCase()),Ys=Js(t=>t.charAt(0).toUpperCase()+t.slice(1)),gn=Js(t=>t?`on${Ys(t)}`:""),Ot=(t,e)=>!Object.is(t,e),Ss=(t,...e)=>{for(let i=0;i<t.length;i++)t[i](...e)},cl=(t,e,i,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:i})},Nn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yo;const Xs=()=>Yo||(Yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uo(t){if(L(t)){const e={};for(let i=0;i<t.length;i++){const s=t[i],n=ce(s)?uc(s):uo(s);if(n)for(const o in n)e[o]=n[o]}return e}else if(ce(t)||oe(t))return t}const ac=/;(?![^(]*\))/g,cc=/:([^]+)/,dc=/\/\*[^]*?\*\//g;function uc(t){const e={};return t.replace(dc,"").split(ac).forEach(i=>{if(i){const s=i.split(cc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bi(t){let e="";if(ce(t))e=t;else if(L(t))for(let i=0;i<t.length;i++){const s=bi(t[i]);s&&(e+=s+" ")}else if(oe(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const hc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fc=ro(hc);function dl(t){return!!t||t===""}const ul=t=>!!(t&&t.__v_isRef===!0),Is=t=>ce(t)?t:t==null?"":L(t)||oe(t)&&(t.toString===ll||!H(t.toString))?ul(t)?Is(t.value):JSON.stringify(t,hl,2):String(t),hl=(t,e)=>ul(e)?hl(t,e.value):li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[s,n],o)=>(i[bn(s,o)+" =>"]=n,i),{})}:ol(e)?{[`Set(${e.size})`]:[...e.values()].map(i=>bn(i))}:xt(e)?bn(e):oe(e)&&!L(e)&&!al(e)?String(e):e,bn=(t,e="")=>{var i;return xt(t)?`Symbol(${(i=t.description)!=null?i:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class pc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].pause();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,i;if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].resume();for(e=0,i=this.effects.length;e<i;e++)this.effects[e].resume()}}run(e){if(this._active){const i=Ne;try{return Ne=this,e()}finally{Ne=i}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){this._active=!1;let i,s;for(i=0,s=this.effects.length;i<s;i++)this.effects[i].stop();for(this.effects.length=0,i=0,s=this.cleanups.length;i<s;i++)this.cleanups[i]();if(this.cleanups.length=0,this.scopes){for(i=0,s=this.scopes.length;i<s;i++)this.scopes[i].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function gc(){return Ne}let K;const mn=new WeakSet;class fl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mn.has(this)&&(mn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xo(this),bl(this);const e=K,i=Ze;K=this,Ze=!0;try{return this.fn()}finally{ml(this),K=e,Ze=i,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)po(e);this.deps=this.depsTail=void 0,Xo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jn(this)&&this.run()}get dirty(){return jn(this)}}let pl=0,ji,zi;function gl(t,e=!1){if(t.flags|=8,e){t.next=zi,zi=t;return}t.next=ji,ji=t}function ho(){pl++}function fo(){if(--pl>0)return;if(zi){let e=zi;for(zi=void 0;e;){const i=e.next;e.next=void 0,e.flags&=-9,e=i}}let t;for(;ji;){let e=ji;for(ji=void 0;e;){const i=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=i}}if(t)throw t}function bl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ml(t){let e,i=t.depsTail,s=i;for(;s;){const n=s.prevDep;s.version===-1?(s===i&&(i=n),po(s),bc(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}t.deps=e,t.depsTail=i}function jn(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Yi))return;t.globalVersion=Yi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!jn(t)){t.flags&=-3;return}const i=K,s=Ze;K=t,Ze=!0;try{bl(t);const n=t.fn(t._value);(e.version===0||Ot(n,t._value))&&(t._value=n,e.version++)}catch(n){throw e.version++,n}finally{K=i,Ze=s,ml(t),t.flags&=-3}}function po(t,e=!1){const{dep:i,prevSub:s,nextSub:n}=t;if(s&&(s.nextSub=n,t.prevSub=void 0),n&&(n.prevSub=s,t.nextSub=void 0),i.subs===t&&(i.subs=s,!s&&i.computed)){i.computed.flags&=-5;for(let o=i.computed.deps;o;o=o.nextDep)po(o,!0)}!e&&!--i.sc&&i.map&&i.map.delete(i.key)}function bc(t){const{prevDep:e,nextDep:i}=t;e&&(e.nextDep=i,t.prevDep=void 0),i&&(i.prevDep=e,t.nextDep=void 0)}let Ze=!0;const yl=[];function _t(){yl.push(Ze),Ze=!1}function Dt(){const t=yl.pop();Ze=t===void 0?!0:t}function Xo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const i=K;K=void 0;try{e()}finally{K=i}}}let Yi=0,mc=class{constructor(e,i){this.sub=e,this.dep=i,this.version=i.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class go{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!K||!Ze||K===this.computed)return;let i=this.activeLink;if(i===void 0||i.sub!==K)i=this.activeLink=new mc(K,this),K.deps?(i.prevDep=K.depsTail,K.depsTail.nextDep=i,K.depsTail=i):K.deps=K.depsTail=i,xl(i);else if(i.version===-1&&(i.version=this.version,i.nextDep)){const s=i.nextDep;s.prevDep=i.prevDep,i.prevDep&&(i.prevDep.nextDep=s),i.prevDep=K.depsTail,i.nextDep=void 0,K.depsTail.nextDep=i,K.depsTail=i,K.deps===i&&(K.deps=s)}return i}trigger(e){this.version++,Yi++,this.notify(e)}notify(e){ho();try{for(let i=this.subs;i;i=i.prevSub)i.sub.notify()&&i.sub.dep.notify()}finally{fo()}}}function xl(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)xl(s)}const i=t.dep.subs;i!==t&&(t.prevSub=i,i&&(i.nextSub=t)),t.dep.subs=t}}const zn=new WeakMap,qt=Symbol(""),Un=Symbol(""),Xi=Symbol("");function pe(t,e,i){if(Ze&&K){let s=zn.get(t);s||zn.set(t,s=new Map);let n=s.get(i);n||(s.set(i,n=new go),n.map=s,n.key=i),n.track()}}function bt(t,e,i,s,n,o){const r=zn.get(t);if(!r){Yi++;return}const l=a=>{a&&a.trigger()};if(ho(),e==="clear")r.forEach(l);else{const a=L(t),d=a&&co(i);if(a&&i==="length"){const c=Number(s);r.forEach((h,b)=>{(b==="length"||b===Xi||!xt(b)&&b>=c)&&l(h)})}else switch((i!==void 0||r.has(void 0))&&l(r.get(i)),d&&l(r.get(Xi)),e){case"add":a?d&&l(r.get("length")):(l(r.get(qt)),li(t)&&l(r.get(Un)));break;case"delete":a||(l(r.get(qt)),li(t)&&l(r.get(Un)));break;case"set":li(t)&&l(r.get(qt));break}}fo()}function Kt(t){const e=W(t);return e===t?e:(pe(e,"iterate",Xi),qe(t)?e:e.map(ge))}function Zs(t){return pe(t=W(t),"iterate",Xi),t}const vc={__proto__:null,[Symbol.iterator](){return vn(this,Symbol.iterator,ge)},concat(...t){return Kt(this).concat(...t.map(e=>L(e)?Kt(e):e))},entries(){return vn(this,"entries",t=>(t[1]=ge(t[1]),t))},every(t,e){return ft(this,"every",t,e,void 0,arguments)},filter(t,e){return ft(this,"filter",t,e,i=>i.map(ge),arguments)},find(t,e){return ft(this,"find",t,e,ge,arguments)},findIndex(t,e){return ft(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ft(this,"findLast",t,e,ge,arguments)},findLastIndex(t,e){return ft(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ft(this,"forEach",t,e,void 0,arguments)},includes(...t){return yn(this,"includes",t)},indexOf(...t){return yn(this,"indexOf",t)},join(t){return Kt(this).join(t)},lastIndexOf(...t){return yn(this,"lastIndexOf",t)},map(t,e){return ft(this,"map",t,e,void 0,arguments)},pop(){return Di(this,"pop")},push(...t){return Di(this,"push",t)},reduce(t,...e){return Zo(this,"reduce",t,e)},reduceRight(t,...e){return Zo(this,"reduceRight",t,e)},shift(){return Di(this,"shift")},some(t,e){return ft(this,"some",t,e,void 0,arguments)},splice(...t){return Di(this,"splice",t)},toReversed(){return Kt(this).toReversed()},toSorted(t){return Kt(this).toSorted(t)},toSpliced(...t){return Kt(this).toSpliced(...t)},unshift(...t){return Di(this,"unshift",t)},values(){return vn(this,"values",ge)}};function vn(t,e,i){const s=Zs(t),n=s[e]();return s!==t&&!qe(t)&&(n._next=n.next,n.next=()=>{const o=n._next();return o.value&&(o.value=i(o.value)),o}),n}const yc=Array.prototype;function ft(t,e,i,s,n,o){const r=Zs(t),l=r!==t&&!qe(t),a=r[e];if(a!==yc[e]){const h=a.apply(t,o);return l?ge(h):h}let d=i;r!==t&&(l?d=function(h,b){return i.call(this,ge(h),b,t)}:i.length>2&&(d=function(h,b){return i.call(this,h,b,t)}));const c=a.call(r,d,s);return l&&n?n(c):c}function Zo(t,e,i,s){const n=Zs(t);let o=i;return n!==t&&(qe(t)?i.length>3&&(o=function(r,l,a){return i.call(this,r,l,a,t)}):o=function(r,l,a){return i.call(this,r,ge(l),a,t)}),n[e](o,...s)}function yn(t,e,i){const s=W(t);pe(s,"iterate",Xi);const n=s[e](...i);return(n===-1||n===!1)&&yo(i[0])?(i[0]=W(i[0]),s[e](...i)):n}function Di(t,e,i=[]){_t(),ho();const s=W(t)[e].apply(t,i);return fo(),Dt(),s}const xc=ro("__proto__,__v_isRef,__isVue"),wl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xt));function wc(t){xt(t)||(t=String(t));const e=W(this);return pe(e,"has",t),e.hasOwnProperty(t)}class Cl{constructor(e=!1,i=!1){this._isReadonly=e,this._isShallow=i}get(e,i,s){if(i==="__v_skip")return e.__v_skip;const n=this._isReadonly,o=this._isShallow;if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return o;if(i==="__v_raw")return s===(n?o?Ec:Sl:o?Tl:kl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=L(e);if(!n){let a;if(r&&(a=vc[i]))return a;if(i==="hasOwnProperty")return wc}const l=Reflect.get(e,i,me(e)?e:s);return(xt(i)?wl.has(i):xc(i))||(n||pe(e,"get",i),o)?l:me(l)?r&&co(i)?l:l.value:oe(l)?n?Il(l):mo(l):l}}class $l extends Cl{constructor(e=!1){super(!1,e)}set(e,i,s,n){let o=e[i];if(!this._isShallow){const a=Wt(o);if(!qe(s)&&!Wt(s)&&(o=W(o),s=W(s)),!L(e)&&me(o)&&!me(s))return a?!1:(o.value=s,!0)}const r=L(e)&&co(i)?Number(i)<e.length:Q(e,i),l=Reflect.set(e,i,s,me(e)?e:n);return e===W(n)&&(r?Ot(s,o)&&bt(e,"set",i,s):bt(e,"add",i,s)),l}deleteProperty(e,i){const s=Q(e,i);e[i];const n=Reflect.deleteProperty(e,i);return n&&s&&bt(e,"delete",i,void 0),n}has(e,i){const s=Reflect.has(e,i);return(!xt(i)||!wl.has(i))&&pe(e,"has",i),s}ownKeys(e){return pe(e,"iterate",L(e)?"length":qt),Reflect.ownKeys(e)}}class Cc extends Cl{constructor(e=!1){super(!0,e)}set(e,i){return!0}deleteProperty(e,i){return!0}}const $c=new $l,kc=new Cc,Tc=new $l(!0);const qn=t=>t,ms=t=>Reflect.getPrototypeOf(t);function Sc(t,e,i){return function(...s){const n=this.__v_raw,o=W(n),r=li(o),l=t==="entries"||t===Symbol.iterator&&r,a=t==="keys"&&r,d=n[t](...s),c=i?qn:e?Gn:ge;return!e&&pe(o,"iterate",a?Un:qt),{next(){const{value:h,done:b}=d.next();return b?{value:h,done:b}:{value:l?[c(h[0]),c(h[1])]:c(h),done:b}},[Symbol.iterator](){return this}}}}function vs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ic(t,e){const i={get(n){const o=this.__v_raw,r=W(o),l=W(n);t||(Ot(n,l)&&pe(r,"get",n),pe(r,"get",l));const{has:a}=ms(r),d=e?qn:t?Gn:ge;if(a.call(r,n))return d(o.get(n));if(a.call(r,l))return d(o.get(l));o!==r&&o.get(n)},get size(){const n=this.__v_raw;return!t&&pe(W(n),"iterate",qt),Reflect.get(n,"size",n)},has(n){const o=this.__v_raw,r=W(o),l=W(n);return t||(Ot(n,l)&&pe(r,"has",n),pe(r,"has",l)),n===l?o.has(n):o.has(n)||o.has(l)},forEach(n,o){const r=this,l=r.__v_raw,a=W(l),d=e?qn:t?Gn:ge;return!t&&pe(a,"iterate",qt),l.forEach((c,h)=>n.call(o,d(c),d(h),r))}};return ye(i,t?{add:vs("add"),set:vs("set"),delete:vs("delete"),clear:vs("clear")}:{add(n){!e&&!qe(n)&&!Wt(n)&&(n=W(n));const o=W(this);return ms(o).has.call(o,n)||(o.add(n),bt(o,"add",n,n)),this},set(n,o){!e&&!qe(o)&&!Wt(o)&&(o=W(o));const r=W(this),{has:l,get:a}=ms(r);let d=l.call(r,n);d||(n=W(n),d=l.call(r,n));const c=a.call(r,n);return r.set(n,o),d?Ot(o,c)&&bt(r,"set",n,o):bt(r,"add",n,o),this},delete(n){const o=W(this),{has:r,get:l}=ms(o);let a=r.call(o,n);a||(n=W(n),a=r.call(o,n)),l&&l.call(o,n);const d=o.delete(n);return a&&bt(o,"delete",n,void 0),d},clear(){const n=W(this),o=n.size!==0,r=n.clear();return o&&bt(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=Sc(n,t,e)}),i}function bo(t,e){const i=Ic(t,e);return(s,n,o)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?s:Reflect.get(Q(i,n)&&n in s?i:s,n,o)}const Oc={get:bo(!1,!1)},Ac={get:bo(!1,!0)},Rc={get:bo(!0,!1)};const kl=new WeakMap,Tl=new WeakMap,Sl=new WeakMap,Ec=new WeakMap;function _c(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dc(t){return t.__v_skip||!Object.isExtensible(t)?0:_c(oc(t))}function mo(t){return Wt(t)?t:vo(t,!1,$c,Oc,kl)}function Pc(t){return vo(t,!1,Tc,Ac,Tl)}function Il(t){return vo(t,!0,kc,Rc,Sl)}function vo(t,e,i,s,n){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=n.get(t);if(o)return o;const r=Dc(t);if(r===0)return t;const l=new Proxy(t,r===2?s:i);return n.set(t,l),l}function ai(t){return Wt(t)?ai(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function yo(t){return t?!!t.__v_raw:!1}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Fc(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&cl(t,"__v_skip",!0),t}const ge=t=>oe(t)?mo(t):t,Gn=t=>oe(t)?Il(t):t;function me(t){return t?t.__v_isRef===!0:!1}function at(t){return Bc(t,!1)}function Bc(t,e){return me(t)?t:new Lc(t,e)}class Lc{constructor(e,i){this.dep=new go,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=i?e:W(e),this._value=i?e:ge(e),this.__v_isShallow=i}get value(){return this.dep.track(),this._value}set value(e){const i=this._rawValue,s=this.__v_isShallow||qe(e)||Wt(e);e=s?e:W(e),Ot(e,i)&&(this._rawValue=e,this._value=s?e:ge(e),this.dep.trigger())}}function Mc(t){return me(t)?t.value:t}const Hc={get:(t,e,i)=>e==="__v_raw"?t:Mc(Reflect.get(t,e,i)),set:(t,e,i,s)=>{const n=t[e];return me(n)&&!me(i)?(n.value=i,!0):Reflect.set(t,e,i,s)}};function Ol(t){return ai(t)?t:new Proxy(t,Hc)}class Vc{constructor(e,i,s){this.fn=e,this.setter=i,this._value=void 0,this.dep=new go(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!i,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return gl(this,!0),!0}get value(){const e=this.dep.track();return vl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nc(t,e,i=!1){let s,n;return H(t)?s=t:(s=t.get,n=t.set),new Vc(s,n,i)}const ys={},Ls=new WeakMap;let jt;function jc(t,e=!1,i=jt){if(i){let s=Ls.get(i);s||Ls.set(i,s=[]),s.push(t)}}function zc(t,e,i=Y){const{immediate:s,deep:n,once:o,scheduler:r,augmentJob:l,call:a}=i,d=D=>n?D:qe(D)||n===!1||n===0?mt(D,1):mt(D);let c,h,b,C,A=!1,E=!1;if(me(t)?(h=()=>t.value,A=qe(t)):ai(t)?(h=()=>d(t),A=!0):L(t)?(E=!0,A=t.some(D=>ai(D)||qe(D)),h=()=>t.map(D=>{if(me(D))return D.value;if(ai(D))return d(D);if(H(D))return a?a(D,2):D()})):H(t)?e?h=a?()=>a(t,2):t:h=()=>{if(b){_t();try{b()}finally{Dt()}}const D=jt;jt=c;try{return a?a(t,3,[C]):t(C)}finally{jt=D}}:h=ut,e&&n){const D=h,ee=n===!0?1/0:n;h=()=>mt(D(),ee)}const G=gc(),R=()=>{c.stop(),G&&G.active&&ao(G.effects,c)};if(o&&e){const D=e;e=(...ee)=>{D(...ee),R()}}let M=E?new Array(t.length).fill(ys):ys;const U=D=>{if(!(!(c.flags&1)||!c.dirty&&!D))if(e){const ee=c.run();if(n||A||(E?ee.some((he,De)=>Ot(he,M[De])):Ot(ee,M))){b&&b();const he=jt;jt=c;try{const De=[ee,M===ys?void 0:E&&M[0]===ys?[]:M,C];a?a(e,3,De):e(...De),M=ee}finally{jt=he}}}else c.run()};return l&&l(U),c=new fl(h),c.scheduler=r?()=>r(U,!1):U,C=D=>jc(D,!1,c),b=c.onStop=()=>{const D=Ls.get(c);if(D){if(a)a(D,4);else for(const ee of D)ee();Ls.delete(c)}},e?s?U(!0):M=c.run():r?r(U.bind(null,!0),!0):c.run(),R.pause=c.pause.bind(c),R.resume=c.resume.bind(c),R.stop=R,R}function mt(t,e=1/0,i){if(e<=0||!oe(t)||t.__v_skip||(i=i||new Set,i.has(t)))return t;if(i.add(t),e--,me(t))mt(t.value,e,i);else if(L(t))for(let s=0;s<t.length;s++)mt(t[s],e,i);else if(ol(t)||li(t))t.forEach(s=>{mt(s,e,i)});else if(al(t)){for(const s in t)mt(t[s],e,i);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&mt(t[s],e,i)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(t,e,i,s){try{return s?t(...s):t()}catch(n){Ks(n,e,i)}}function ht(t,e,i,s){if(H(t)){const n=rs(t,e,i,s);return n&&rl(n)&&n.catch(o=>{Ks(o,e,i)}),n}if(L(t)){const n=[];for(let o=0;o<t.length;o++)n.push(ht(t[o],e,i,s));return n}}function Ks(t,e,i,s=!0){const n=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||Y;if(e){let l=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${i}`;for(;l;){const c=l.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,a,d)===!1)return}l=l.parent}if(o){_t(),rs(o,null,10,[t,a,d]),Dt();return}}Uc(t,i,n,s,r)}function Uc(t,e,i,s=!0,n=!1){if(n)throw t;console.error(t)}const Se=[];let ct=-1;const ci=[];let St=null,ei=0;const Al=Promise.resolve();let Ms=null;function qc(t){const e=Ms||Al;return t?e.then(this?t.bind(this):t):e}function Gc(t){let e=ct+1,i=Se.length;for(;e<i;){const s=e+i>>>1,n=Se[s],o=Zi(n);o<t||o===t&&n.flags&2?e=s+1:i=s}return e}function xo(t){if(!(t.flags&1)){const e=Zi(t),i=Se[Se.length-1];!i||!(t.flags&2)&&e>=Zi(i)?Se.push(t):Se.splice(Gc(e),0,t),t.flags|=1,Rl()}}function Rl(){Ms||(Ms=Al.then(_l))}function Wc(t){L(t)?ci.push(...t):St&&t.id===-1?St.splice(ei+1,0,t):t.flags&1||(ci.push(t),t.flags|=1),Rl()}function Ko(t,e,i=ct+1){for(;i<Se.length;i++){const s=Se[i];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Se.splice(i,1),i--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function El(t){if(ci.length){const e=[...new Set(ci)].sort((i,s)=>Zi(i)-Zi(s));if(ci.length=0,St){St.push(...e);return}for(St=e,ei=0;ei<St.length;ei++){const i=St[ei];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}St=null,ei=0}}const Zi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _l(t){try{for(ct=0;ct<Se.length;ct++){const e=Se[ct];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ct<Se.length;ct++){const e=Se[ct];e&&(e.flags&=-2)}ct=-1,Se.length=0,El(),Ms=null,(Se.length||ci.length)&&_l()}}let fe=null,Dl=null;function Hs(t){const e=fe;return fe=t,Dl=t&&t.type.__scopeId||null,e}function Os(t,e=fe,i){if(!e||t._n)return t;const s=(...n)=>{s._d&&dr(-1);const o=Hs(e);let r;try{r=t(...n)}finally{Hs(o),s._d&&dr(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Qc(t,e){if(fe===null)return t;const i=nn(fe),s=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[o,r,l,a=Y]=e[n];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&mt(r),s.push({dir:o,instance:i,value:r,oldValue:void 0,arg:l,modifiers:a}))}return t}function Ht(t,e,i,s){const n=t.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const l=n[r];o&&(l.oldValue=o[r].value);let a=l.dir[s];a&&(_t(),ht(a,i,8,[t.el,l,t,e]),Dt())}}const Jc=Symbol("_vte"),Yc=t=>t.__isTeleport;function wo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Co(t,e){return H(t)?ye({name:t.name},e,{setup:t}):t}function Pl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vs(t,e,i,s,n=!1){if(L(t)){t.forEach((A,E)=>Vs(A,e&&(L(e)?e[E]:e),i,s,n));return}if(di(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Vs(t,e,i,s.component.subTree);return}const o=s.shapeFlag&4?nn(s.component):s.el,r=n?null:o,{i:l,r:a}=t,d=e&&e.r,c=l.refs===Y?l.refs={}:l.refs,h=l.setupState,b=W(h),C=h===Y?()=>!1:A=>Q(b,A);if(d!=null&&d!==a&&(ce(d)?(c[d]=null,C(d)&&(h[d]=null)):me(d)&&(d.value=null)),H(a))rs(a,l,12,[r,c]);else{const A=ce(a),E=me(a);if(A||E){const G=()=>{if(t.f){const R=A?C(a)?h[a]:c[a]:a.value;n?L(R)&&ao(R,o):L(R)?R.includes(o)||R.push(o):A?(c[a]=[o],C(a)&&(h[a]=c[a])):(a.value=[o],t.k&&(c[t.k]=a.value))}else A?(c[a]=r,C(a)&&(h[a]=r)):E&&(a.value=r,t.k&&(c[t.k]=r))};r?(G.id=-1,Ve(G,i)):G()}}}Xs().requestIdleCallback;Xs().cancelIdleCallback;const di=t=>!!t.type.__asyncLoader,Fl=t=>t.type.__isKeepAlive;function Xc(t,e){Bl(t,"a",e)}function Zc(t,e){Bl(t,"da",e)}function Bl(t,e,i=be){const s=t.__wdc||(t.__wdc=()=>{let n=i;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(en(e,s,i),i){let n=i.parent;for(;n&&n.parent;)Fl(n.parent.vnode)&&Kc(s,e,i,n),n=n.parent}}function Kc(t,e,i,s){const n=en(e,t,s,!0);Ml(()=>{ao(s[e],n)},i)}function en(t,e,i=be,s=!1){if(i){const n=i[t]||(i[t]=[]),o=e.__weh||(e.__weh=(...r)=>{_t();const l=ls(i),a=ht(e,i,t,r);return l(),Dt(),a});return s?n.unshift(o):n.push(o),o}}const wt=t=>(e,i=be)=>{(!es||t==="sp")&&en(t,(...s)=>e(...s),i)},ed=wt("bm"),$o=wt("m"),td=wt("bu"),id=wt("u"),Ll=wt("bum"),Ml=wt("um"),sd=wt("sp"),nd=wt("rtg"),od=wt("rtc");function rd(t,e=be){en("ec",t,e)}const ld="components";function ad(t,e){return dd(ld,t,!0,e)||t}const cd=Symbol.for("v-ndc");function dd(t,e,i=!0,s=!1){const n=fe||be;if(n){const o=n.type;{const l=eu(o,!1);if(l&&(l===e||l===Ge(e)||l===Ys(Ge(e))))return o}const r=er(n[t]||o[t],e)||er(n.appContext[t],e);return!r&&s?o:r}}function er(t,e){return t&&(t[e]||t[Ge(e)]||t[Ys(Ge(e))])}function tr(t,e,i,s){let n;const o=i,r=L(t);if(r||ce(t)){const l=r&&ai(t);let a=!1;l&&(a=!qe(t),t=Zs(t)),n=new Array(t.length);for(let d=0,c=t.length;d<c;d++)n[d]=e(a?ge(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){n=new Array(t);for(let l=0;l<t;l++)n[l]=e(l+1,l,void 0,o)}else if(oe(t))if(t[Symbol.iterator])n=Array.from(t,(l,a)=>e(l,a,void 0,o));else{const l=Object.keys(t);n=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const c=l[a];n[a]=e(t[c],c,a,o)}}else n=[];return n}function ud(t,e){for(let i=0;i<e.length;i++){const s=e[i];if(L(s))for(let n=0;n<s.length;n++)t[s[n].name]=s[n].fn;else s&&(t[s.name]=s.key?(...n)=>{const o=s.fn(...n);return o&&(o.key=s.key),o}:s.fn)}return t}function xn(t,e,i={},s,n){if(fe.ce||fe.parent&&di(fe.parent)&&fe.parent.ce)return e!=="default"&&(i.name=e),vt(),Xn(Ie,null,[Ke("slot",i,s)],64);let o=t[e];o&&o._c&&(o._d=!1),vt();const r=o&&Hl(o(i)),l=i.key||r&&r.key,a=Xn(Ie,{key:(l&&!xt(l)?l:`_${e}`)+""},r||[],r&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Hl(t){return t.some(e=>To(e)?!(e.type===mi||e.type===Ie&&!Hl(e.children)):!0)?t:null}const Wn=t=>t?ra(t)?nn(t):Wn(t.parent):null,Ui=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wn(t.parent),$root:t=>Wn(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nl(t),$forceUpdate:t=>t.f||(t.f=()=>{xo(t.update)}),$nextTick:t=>t.n||(t.n=qc.bind(t.proxy)),$watch:t=>Dd.bind(t)}),wn=(t,e)=>t!==Y&&!t.__isScriptSetup&&Q(t,e),hd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:i,setupState:s,data:n,props:o,accessCache:r,type:l,appContext:a}=t;let d;if(e[0]!=="$"){const C=r[e];if(C!==void 0)switch(C){case 1:return s[e];case 2:return n[e];case 4:return i[e];case 3:return o[e]}else{if(wn(s,e))return r[e]=1,s[e];if(n!==Y&&Q(n,e))return r[e]=2,n[e];if((d=t.propsOptions[0])&&Q(d,e))return r[e]=3,o[e];if(i!==Y&&Q(i,e))return r[e]=4,i[e];Qn&&(r[e]=0)}}const c=Ui[e];let h,b;if(c)return e==="$attrs"&&pe(t.attrs,"get",""),c(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(i!==Y&&Q(i,e))return r[e]=4,i[e];if(b=a.config.globalProperties,Q(b,e))return b[e]},set({_:t},e,i){const{data:s,setupState:n,ctx:o}=t;return wn(n,e)?(n[e]=i,!0):s!==Y&&Q(s,e)?(s[e]=i,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:s,appContext:n,propsOptions:o}},r){let l;return!!i[r]||t!==Y&&Q(t,r)||wn(e,r)||(l=o[0])&&Q(l,r)||Q(s,r)||Q(Ui,r)||Q(n.config.globalProperties,r)},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:Q(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function ir(t){return L(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}let Qn=!0;function fd(t){const e=Nl(t),i=t.proxy,s=t.ctx;Qn=!1,e.beforeCreate&&sr(e.beforeCreate,t,"bc");const{data:n,computed:o,methods:r,watch:l,provide:a,inject:d,created:c,beforeMount:h,mounted:b,beforeUpdate:C,updated:A,activated:E,deactivated:G,beforeDestroy:R,beforeUnmount:M,destroyed:U,unmounted:D,render:ee,renderTracked:he,renderTriggered:De,errorCaptured:Je,serverPrefetch:kt,expose:Ye,inheritAttrs:Ai,components:fs,directives:ps,filters:fn}=e;if(d&&pd(d,s,null),r)for(const se in r){const X=r[se];H(X)&&(s[se]=X.bind(i))}if(n){const se=n.call(i,i);oe(se)&&(t.data=mo(se))}if(Qn=!0,o)for(const se in o){const X=o[se],Lt=H(X)?X.bind(i,i):H(X.get)?X.get.bind(i,i):ut,gs=!H(X)&&H(X.set)?X.set.bind(i):ut,Mt=aa({get:Lt,set:gs});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:st=>Mt.value=st})}if(l)for(const se in l)Vl(l[se],s,i,se);if(a){const se=H(a)?a.call(i):a;Reflect.ownKeys(se).forEach(X=>{xd(X,se[X])})}c&&sr(c,t,"c");function ke(se,X){L(X)?X.forEach(Lt=>se(Lt.bind(i))):X&&se(X.bind(i))}if(ke(ed,h),ke($o,b),ke(td,C),ke(id,A),ke(Xc,E),ke(Zc,G),ke(rd,Je),ke(od,he),ke(nd,De),ke(Ll,M),ke(Ml,D),ke(sd,kt),L(Ye))if(Ye.length){const se=t.exposed||(t.exposed={});Ye.forEach(X=>{Object.defineProperty(se,X,{get:()=>i[X],set:Lt=>i[X]=Lt})})}else t.exposed||(t.exposed={});ee&&t.render===ut&&(t.render=ee),Ai!=null&&(t.inheritAttrs=Ai),fs&&(t.components=fs),ps&&(t.directives=ps),kt&&Pl(t)}function pd(t,e,i=ut){L(t)&&(t=Jn(t));for(const s in t){const n=t[s];let o;oe(n)?"default"in n?o=As(n.from||s,n.default,!0):o=As(n.from||s):o=As(n),me(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function sr(t,e,i){ht(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,i)}function Vl(t,e,i,s){let n=s.includes(".")?ta(i,s):()=>i[s];if(ce(t)){const o=e[t];H(o)&&Rs(n,o)}else if(H(t))Rs(n,t.bind(i));else if(oe(t))if(L(t))t.forEach(o=>Vl(o,e,i,s));else{const o=H(t.handler)?t.handler.bind(i):e[t.handler];H(o)&&Rs(n,o,t)}}function Nl(t){const e=t.type,{mixins:i,extends:s}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=t.appContext,l=o.get(e);let a;return l?a=l:!n.length&&!i&&!s?a=e:(a={},n.length&&n.forEach(d=>Ns(a,d,r,!0)),Ns(a,e,r)),oe(e)&&o.set(e,a),a}function Ns(t,e,i,s=!1){const{mixins:n,extends:o}=e;o&&Ns(t,o,i,!0),n&&n.forEach(r=>Ns(t,r,i,!0));for(const r in e)if(!(s&&r==="expose")){const l=gd[r]||i&&i[r];t[r]=l?l(t[r],e[r]):e[r]}return t}const gd={data:nr,props:or,emits:or,methods:Vi,computed:Vi,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Vi,directives:Vi,watch:md,provide:nr,inject:bd};function nr(t,e){return e?t?function(){return ye(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function bd(t,e){return Vi(Jn(t),Jn(e))}function Jn(t){if(L(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Vi(t,e){return t?ye(Object.create(null),t,e):e}function or(t,e){return t?L(t)&&L(e)?[...new Set([...t,...e])]:ye(Object.create(null),ir(t),ir(e??{})):e}function md(t,e){if(!t)return e;if(!e)return t;const i=ye(Object.create(null),t);for(const s in e)i[s]=Te(t[s],e[s]);return i}function jl(){return{app:null,config:{isNativeTag:sc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vd=0;function yd(t,e){return function(s,n=null){H(s)||(s=ye({},s)),n!=null&&!oe(n)&&(n=null);const o=jl(),r=new WeakSet,l=[];let a=!1;const d=o.app={_uid:vd++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:iu,get config(){return o.config},set config(c){},use(c,...h){return r.has(c)||(c&&H(c.install)?(r.add(c),c.install(d,...h)):H(c)&&(r.add(c),c(d,...h))),d},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),d},component(c,h){return h?(o.components[c]=h,d):o.components[c]},directive(c,h){return h?(o.directives[c]=h,d):o.directives[c]},mount(c,h,b){if(!a){const C=d._ceVNode||Ke(s,n);return C.appContext=o,b===!0?b="svg":b===!1&&(b=void 0),t(C,c,b),a=!0,d._container=c,c.__vue_app__=d,nn(C.component)}},onUnmount(c){l.push(c)},unmount(){a&&(ht(l,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(c,h){return o.provides[c]=h,d},runWithContext(c){const h=ui;ui=d;try{return c()}finally{ui=h}}};return d}}let ui=null;function xd(t,e){if(be){let i=be.provides;const s=be.parent&&be.parent.provides;s===i&&(i=be.provides=Object.create(s)),i[t]=e}}function As(t,e,i=!1){const s=be||fe;if(s||ui){const n=ui?ui._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&t in n)return n[t];if(arguments.length>1)return i&&H(e)?e.call(s&&s.proxy):e}}const zl={},Ul=()=>Object.create(zl),ql=t=>Object.getPrototypeOf(t)===zl;function wd(t,e,i,s=!1){const n={},o=Ul();t.propsDefaults=Object.create(null),Gl(t,e,n,o);for(const r in t.propsOptions[0])r in n||(n[r]=void 0);i?t.props=s?n:Pc(n):t.type.props?t.props=n:t.props=o,t.attrs=o}function Cd(t,e,i,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=t,l=W(n),[a]=t.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let b=c[h];if(tn(t.emitsOptions,b))continue;const C=e[b];if(a)if(Q(o,b))C!==o[b]&&(o[b]=C,d=!0);else{const A=Ge(b);n[A]=Yn(a,l,A,C,t,!1)}else C!==o[b]&&(o[b]=C,d=!0)}}}else{Gl(t,e,n,o)&&(d=!0);let c;for(const h in l)(!e||!Q(e,h)&&((c=Qt(h))===h||!Q(e,c)))&&(a?i&&(i[h]!==void 0||i[c]!==void 0)&&(n[h]=Yn(a,l,h,void 0,t,!0)):delete n[h]);if(o!==l)for(const h in o)(!e||!Q(e,h))&&(delete o[h],d=!0)}d&&bt(t.attrs,"set","")}function Gl(t,e,i,s){const[n,o]=t.propsOptions;let r=!1,l;if(e)for(let a in e){if(Ni(a))continue;const d=e[a];let c;n&&Q(n,c=Ge(a))?!o||!o.includes(c)?i[c]=d:(l||(l={}))[c]=d:tn(t.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,r=!0)}if(o){const a=W(i),d=l||Y;for(let c=0;c<o.length;c++){const h=o[c];i[h]=Yn(n,a,h,d[h],t,!Q(d,h))}}return r}function Yn(t,e,i,s,n,o){const r=t[i];if(r!=null){const l=Q(r,"default");if(l&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&H(a)){const{propsDefaults:d}=n;if(i in d)s=d[i];else{const c=ls(n);s=d[i]=a.call(null,e),c()}}else s=a;n.ce&&n.ce._setProp(i,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===Qt(i))&&(s=!0))}return s}const $d=new WeakMap;function Wl(t,e,i=!1){const s=i?$d:e.propsCache,n=s.get(t);if(n)return n;const o=t.props,r={},l=[];let a=!1;if(!H(t)){const c=h=>{a=!0;const[b,C]=Wl(h,e,!0);ye(r,b),C&&l.push(...C)};!i&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!a)return oe(t)&&s.set(t,ri),ri;if(L(o))for(let c=0;c<o.length;c++){const h=Ge(o[c]);rr(h)&&(r[h]=Y)}else if(o)for(const c in o){const h=Ge(c);if(rr(h)){const b=o[c],C=r[h]=L(b)||H(b)?{type:b}:ye({},b),A=C.type;let E=!1,G=!0;if(L(A))for(let R=0;R<A.length;++R){const M=A[R],U=H(M)&&M.name;if(U==="Boolean"){E=!0;break}else U==="String"&&(G=!1)}else E=H(A)&&A.name==="Boolean";C[0]=E,C[1]=G,(E||Q(C,"default"))&&l.push(h)}}const d=[r,l];return oe(t)&&s.set(t,d),d}function rr(t){return t[0]!=="$"&&!Ni(t)}const Ql=t=>t[0]==="_"||t==="$stable",ko=t=>L(t)?t.map(dt):[dt(t)],kd=(t,e,i)=>{if(e._n)return e;const s=Os((...n)=>ko(e(...n)),i);return s._c=!1,s},Jl=(t,e,i)=>{const s=t._ctx;for(const n in t){if(Ql(n))continue;const o=t[n];if(H(o))e[n]=kd(n,o,s);else if(o!=null){const r=ko(o);e[n]=()=>r}}},Yl=(t,e)=>{const i=ko(e);t.slots.default=()=>i},Xl=(t,e,i)=>{for(const s in e)(i||s!=="_")&&(t[s]=e[s])},Td=(t,e,i)=>{const s=t.slots=Ul();if(t.vnode.shapeFlag&32){const n=e._;n?(Xl(s,e,i),i&&cl(s,"_",n,!0)):Jl(e,s)}else e&&Yl(t,e)},Sd=(t,e,i)=>{const{vnode:s,slots:n}=t;let o=!0,r=Y;if(s.shapeFlag&32){const l=e._;l?i&&l===1?o=!1:Xl(n,e,i):(o=!e.$stable,Jl(e,n)),r=e}else e&&(Yl(t,e),r={default:1});if(o)for(const l in n)!Ql(l)&&r[l]==null&&delete n[l]},Ve=Vd;function Id(t){return Od(t)}function Od(t,e){const i=Xs();i.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:l,createComment:a,setText:d,setElementText:c,parentNode:h,nextSibling:b,setScopeId:C=ut,insertStaticContent:A}=t,E=(u,f,g,x=null,v=null,y=null,T=void 0,k=null,$=!!f.dynamicChildren)=>{if(u===f)return;u&&!Pi(u,f)&&(x=bs(u),st(u,v,y,!0),u=null),f.patchFlag===-2&&($=!1,f.dynamicChildren=null);const{type:w,ref:P,shapeFlag:S}=f;switch(w){case sn:G(u,f,g,x);break;case mi:R(u,f,g,x);break;case Es:u==null&&M(f,g,x,T);break;case Ie:fs(u,f,g,x,v,y,T,k,$);break;default:S&1?ee(u,f,g,x,v,y,T,k,$):S&6?ps(u,f,g,x,v,y,T,k,$):(S&64||S&128)&&w.process(u,f,g,x,v,y,T,k,$,Ei)}P!=null&&v&&Vs(P,u&&u.ref,y,f||u,!f)},G=(u,f,g,x)=>{if(u==null)s(f.el=l(f.children),g,x);else{const v=f.el=u.el;f.children!==u.children&&d(v,f.children)}},R=(u,f,g,x)=>{u==null?s(f.el=a(f.children||""),g,x):f.el=u.el},M=(u,f,g,x)=>{[u.el,u.anchor]=A(u.children,f,g,x,u.el,u.anchor)},U=({el:u,anchor:f},g,x)=>{let v;for(;u&&u!==f;)v=b(u),s(u,g,x),u=v;s(f,g,x)},D=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=b(u),n(u),u=g;n(f)},ee=(u,f,g,x,v,y,T,k,$)=>{f.type==="svg"?T="svg":f.type==="math"&&(T="mathml"),u==null?he(f,g,x,v,y,T,k,$):kt(u,f,v,y,T,k,$)},he=(u,f,g,x,v,y,T,k)=>{let $,w;const{props:P,shapeFlag:S,transition:_,dirs:B}=u;if($=u.el=r(u.type,y,P&&P.is,P),S&8?c($,u.children):S&16&&Je(u.children,$,null,x,v,Cn(u,y),T,k),B&&Ht(u,null,x,"created"),De($,u,u.scopeId,T,x),P){for(const Z in P)Z!=="value"&&!Ni(Z)&&o($,Z,null,P[Z],y,x);"value"in P&&o($,"value",null,P.value,y),(w=P.onVnodeBeforeMount)&&lt(w,x,u)}B&&Ht(u,null,x,"beforeMount");const j=Ad(v,_);j&&_.beforeEnter($),s($,f,g),((w=P&&P.onVnodeMounted)||j||B)&&Ve(()=>{w&&lt(w,x,u),j&&_.enter($),B&&Ht(u,null,x,"mounted")},v)},De=(u,f,g,x,v)=>{if(g&&C(u,g),x)for(let y=0;y<x.length;y++)C(u,x[y]);if(v){let y=v.subTree;if(f===y||sa(y.type)&&(y.ssContent===f||y.ssFallback===f)){const T=v.vnode;De(u,T,T.scopeId,T.slotScopeIds,v.parent)}}},Je=(u,f,g,x,v,y,T,k,$=0)=>{for(let w=$;w<u.length;w++){const P=u[w]=k?It(u[w]):dt(u[w]);E(null,P,f,g,x,v,y,T,k)}},kt=(u,f,g,x,v,y,T)=>{const k=f.el=u.el;let{patchFlag:$,dynamicChildren:w,dirs:P}=f;$|=u.patchFlag&16;const S=u.props||Y,_=f.props||Y;let B;if(g&&Vt(g,!1),(B=_.onVnodeBeforeUpdate)&&lt(B,g,f,u),P&&Ht(f,u,g,"beforeUpdate"),g&&Vt(g,!0),(S.innerHTML&&_.innerHTML==null||S.textContent&&_.textContent==null)&&c(k,""),w?Ye(u.dynamicChildren,w,k,g,x,Cn(f,v),y):T||X(u,f,k,null,g,x,Cn(f,v),y,!1),$>0){if($&16)Ai(k,S,_,g,v);else if($&2&&S.class!==_.class&&o(k,"class",null,_.class,v),$&4&&o(k,"style",S.style,_.style,v),$&8){const j=f.dynamicProps;for(let Z=0;Z<j.length;Z++){const J=j[Z],Me=S[J],Pe=_[J];(Pe!==Me||J==="value")&&o(k,J,Me,Pe,v,g)}}$&1&&u.children!==f.children&&c(k,f.children)}else!T&&w==null&&Ai(k,S,_,g,v);((B=_.onVnodeUpdated)||P)&&Ve(()=>{B&&lt(B,g,f,u),P&&Ht(f,u,g,"updated")},x)},Ye=(u,f,g,x,v,y,T)=>{for(let k=0;k<f.length;k++){const $=u[k],w=f[k],P=$.el&&($.type===Ie||!Pi($,w)||$.shapeFlag&70)?h($.el):g;E($,w,P,null,x,v,y,T,!0)}},Ai=(u,f,g,x,v)=>{if(f!==g){if(f!==Y)for(const y in f)!Ni(y)&&!(y in g)&&o(u,y,f[y],null,v,x);for(const y in g){if(Ni(y))continue;const T=g[y],k=f[y];T!==k&&y!=="value"&&o(u,y,k,T,v,x)}"value"in g&&o(u,"value",f.value,g.value,v)}},fs=(u,f,g,x,v,y,T,k,$)=>{const w=f.el=u?u.el:l(""),P=f.anchor=u?u.anchor:l("");let{patchFlag:S,dynamicChildren:_,slotScopeIds:B}=f;B&&(k=k?k.concat(B):B),u==null?(s(w,g,x),s(P,g,x),Je(f.children||[],g,P,v,y,T,k,$)):S>0&&S&64&&_&&u.dynamicChildren?(Ye(u.dynamicChildren,_,g,v,y,T,k),(f.key!=null||v&&f===v.subTree)&&Zl(u,f,!0)):X(u,f,g,P,v,y,T,k,$)},ps=(u,f,g,x,v,y,T,k,$)=>{f.slotScopeIds=k,u==null?f.shapeFlag&512?v.ctx.activate(f,g,x,T,$):fn(f,g,x,v,y,T,$):qo(u,f,$)},fn=(u,f,g,x,v,y,T)=>{const k=u.component=Jd(u,x,v);if(Fl(u)&&(k.ctx.renderer=Ei),Yd(k,!1,T),k.asyncDep){if(v&&v.registerDep(k,ke,T),!u.el){const $=k.subTree=Ke(mi);R(null,$,f,g)}}else ke(k,u,f,g,v,y,T)},qo=(u,f,g)=>{const x=f.component=u.component;if(Md(u,f,g))if(x.asyncDep&&!x.asyncResolved){se(x,f,g);return}else x.next=f,x.update();else f.el=u.el,x.vnode=f},ke=(u,f,g,x,v,y,T)=>{const k=()=>{if(u.isMounted){let{next:S,bu:_,u:B,parent:j,vnode:Z}=u;{const ot=Kl(u);if(ot){S&&(S.el=Z.el,se(u,S,T)),ot.asyncDep.then(()=>{u.isUnmounted||k()});return}}let J=S,Me;Vt(u,!1),S?(S.el=Z.el,se(u,S,T)):S=Z,_&&Ss(_),(Me=S.props&&S.props.onVnodeBeforeUpdate)&&lt(Me,j,S,Z),Vt(u,!0);const Pe=ar(u),nt=u.subTree;u.subTree=Pe,E(nt,Pe,h(nt.el),bs(nt),u,v,y),S.el=Pe.el,J===null&&Hd(u,Pe.el),B&&Ve(B,v),(Me=S.props&&S.props.onVnodeUpdated)&&Ve(()=>lt(Me,j,S,Z),v)}else{let S;const{el:_,props:B}=f,{bm:j,m:Z,parent:J,root:Me,type:Pe}=u,nt=di(f);Vt(u,!1),j&&Ss(j),!nt&&(S=B&&B.onVnodeBeforeMount)&&lt(S,J,f),Vt(u,!0);{Me.ce&&Me.ce._injectChildStyle(Pe);const ot=u.subTree=ar(u);E(null,ot,g,x,u,v,y),f.el=ot.el}if(Z&&Ve(Z,v),!nt&&(S=B&&B.onVnodeMounted)){const ot=f;Ve(()=>lt(S,J,ot),v)}(f.shapeFlag&256||J&&di(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&Ve(u.a,v),u.isMounted=!0,f=g=x=null}};u.scope.on();const $=u.effect=new fl(k);u.scope.off();const w=u.update=$.run.bind($),P=u.job=$.runIfDirty.bind($);P.i=u,P.id=u.uid,$.scheduler=()=>xo(P),Vt(u,!0),w()},se=(u,f,g)=>{f.component=u;const x=u.vnode.props;u.vnode=f,u.next=null,Cd(u,f.props,x,g),Sd(u,f.children,g),_t(),Ko(u),Dt()},X=(u,f,g,x,v,y,T,k,$=!1)=>{const w=u&&u.children,P=u?u.shapeFlag:0,S=f.children,{patchFlag:_,shapeFlag:B}=f;if(_>0){if(_&128){gs(w,S,g,x,v,y,T,k,$);return}else if(_&256){Lt(w,S,g,x,v,y,T,k,$);return}}B&8?(P&16&&Ri(w,v,y),S!==w&&c(g,S)):P&16?B&16?gs(w,S,g,x,v,y,T,k,$):Ri(w,v,y,!0):(P&8&&c(g,""),B&16&&Je(S,g,x,v,y,T,k,$))},Lt=(u,f,g,x,v,y,T,k,$)=>{u=u||ri,f=f||ri;const w=u.length,P=f.length,S=Math.min(w,P);let _;for(_=0;_<S;_++){const B=f[_]=$?It(f[_]):dt(f[_]);E(u[_],B,g,null,v,y,T,k,$)}w>P?Ri(u,v,y,!0,!1,S):Je(f,g,x,v,y,T,k,$,S)},gs=(u,f,g,x,v,y,T,k,$)=>{let w=0;const P=f.length;let S=u.length-1,_=P-1;for(;w<=S&&w<=_;){const B=u[w],j=f[w]=$?It(f[w]):dt(f[w]);if(Pi(B,j))E(B,j,g,null,v,y,T,k,$);else break;w++}for(;w<=S&&w<=_;){const B=u[S],j=f[_]=$?It(f[_]):dt(f[_]);if(Pi(B,j))E(B,j,g,null,v,y,T,k,$);else break;S--,_--}if(w>S){if(w<=_){const B=_+1,j=B<P?f[B].el:x;for(;w<=_;)E(null,f[w]=$?It(f[w]):dt(f[w]),g,j,v,y,T,k,$),w++}}else if(w>_)for(;w<=S;)st(u[w],v,y,!0),w++;else{const B=w,j=w,Z=new Map;for(w=j;w<=_;w++){const He=f[w]=$?It(f[w]):dt(f[w]);He.key!=null&&Z.set(He.key,w)}let J,Me=0;const Pe=_-j+1;let nt=!1,ot=0;const _i=new Array(Pe);for(w=0;w<Pe;w++)_i[w]=0;for(w=B;w<=S;w++){const He=u[w];if(Me>=Pe){st(He,v,y,!0);continue}let rt;if(He.key!=null)rt=Z.get(He.key);else for(J=j;J<=_;J++)if(_i[J-j]===0&&Pi(He,f[J])){rt=J;break}rt===void 0?st(He,v,y,!0):(_i[rt-j]=w+1,rt>=ot?ot=rt:nt=!0,E(He,f[rt],g,null,v,y,T,k,$),Me++)}const Qo=nt?Rd(_i):ri;for(J=Qo.length-1,w=Pe-1;w>=0;w--){const He=j+w,rt=f[He],Jo=He+1<P?f[He+1].el:x;_i[w]===0?E(null,rt,g,Jo,v,y,T,k,$):nt&&(J<0||w!==Qo[J]?Mt(rt,g,Jo,2):J--)}}},Mt=(u,f,g,x,v=null)=>{const{el:y,type:T,transition:k,children:$,shapeFlag:w}=u;if(w&6){Mt(u.component.subTree,f,g,x);return}if(w&128){u.suspense.move(f,g,x);return}if(w&64){T.move(u,f,g,Ei);return}if(T===Ie){s(y,f,g);for(let S=0;S<$.length;S++)Mt($[S],f,g,x);s(u.anchor,f,g);return}if(T===Es){U(u,f,g);return}if(x!==2&&w&1&&k)if(x===0)k.beforeEnter(y),s(y,f,g),Ve(()=>k.enter(y),v);else{const{leave:S,delayLeave:_,afterLeave:B}=k,j=()=>s(y,f,g),Z=()=>{S(y,()=>{j(),B&&B()})};_?_(y,j,Z):Z()}else s(y,f,g)},st=(u,f,g,x=!1,v=!1)=>{const{type:y,props:T,ref:k,children:$,dynamicChildren:w,shapeFlag:P,patchFlag:S,dirs:_,cacheIndex:B}=u;if(S===-2&&(v=!1),k!=null&&Vs(k,null,g,u,!0),B!=null&&(f.renderCache[B]=void 0),P&256){f.ctx.deactivate(u);return}const j=P&1&&_,Z=!di(u);let J;if(Z&&(J=T&&T.onVnodeBeforeUnmount)&&lt(J,f,u),P&6)ic(u.component,g,x);else{if(P&128){u.suspense.unmount(g,x);return}j&&Ht(u,null,f,"beforeUnmount"),P&64?u.type.remove(u,f,g,Ei,x):w&&!w.hasOnce&&(y!==Ie||S>0&&S&64)?Ri(w,f,g,!1,!0):(y===Ie&&S&384||!v&&P&16)&&Ri($,f,g),x&&Go(u)}(Z&&(J=T&&T.onVnodeUnmounted)||j)&&Ve(()=>{J&&lt(J,f,u),j&&Ht(u,null,f,"unmounted")},g)},Go=u=>{const{type:f,el:g,anchor:x,transition:v}=u;if(f===Ie){tc(g,x);return}if(f===Es){D(u);return}const y=()=>{n(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:k}=v,$=()=>T(g,y);k?k(u.el,y,$):$()}else y()},tc=(u,f)=>{let g;for(;u!==f;)g=b(u),n(u),u=g;n(f)},ic=(u,f,g)=>{const{bum:x,scope:v,job:y,subTree:T,um:k,m:$,a:w}=u;lr($),lr(w),x&&Ss(x),v.stop(),y&&(y.flags|=8,st(T,u,f,g)),k&&Ve(k,f),Ve(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ri=(u,f,g,x=!1,v=!1,y=0)=>{for(let T=y;T<u.length;T++)st(u[T],f,g,x,v)},bs=u=>{if(u.shapeFlag&6)return bs(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=b(u.anchor||u.el),g=f&&f[Jc];return g?b(g):f};let pn=!1;const Wo=(u,f,g)=>{u==null?f._vnode&&st(f._vnode,null,null,!0):E(f._vnode||null,u,f,null,null,null,g),f._vnode=u,pn||(pn=!0,Ko(),El(),pn=!1)},Ei={p:E,um:st,m:Mt,r:Go,mt:fn,mc:Je,pc:X,pbc:Ye,n:bs,o:t};return{render:Wo,hydrate:void 0,createApp:yd(Wo)}}function Cn({type:t,props:e},i){return i==="svg"&&t==="foreignObject"||i==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:i}function Vt({effect:t,job:e},i){i?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ad(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zl(t,e,i=!1){const s=t.children,n=e.children;if(L(s)&&L(n))for(let o=0;o<s.length;o++){const r=s[o];let l=n[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[o]=It(n[o]),l.el=r.el),!i&&l.patchFlag!==-2&&Zl(r,l)),l.type===sn&&(l.el=r.el)}}function Rd(t){const e=t.slice(),i=[0];let s,n,o,r,l;const a=t.length;for(s=0;s<a;s++){const d=t[s];if(d!==0){if(n=i[i.length-1],t[n]<d){e[s]=n,i.push(s);continue}for(o=0,r=i.length-1;o<r;)l=o+r>>1,t[i[l]]<d?o=l+1:r=l;d<t[i[o]]&&(o>0&&(e[s]=i[o-1]),i[o]=s)}}for(o=i.length,r=i[o-1];o-- >0;)i[o]=r,r=e[r];return i}function Kl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kl(e)}function lr(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ed=Symbol.for("v-scx"),_d=()=>As(Ed);function Rs(t,e,i){return ea(t,e,i)}function ea(t,e,i=Y){const{immediate:s,deep:n,flush:o,once:r}=i,l=ye({},i),a=e&&s||!e&&o!=="post";let d;if(es){if(o==="sync"){const C=_d();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!a){const C=()=>{};return C.stop=ut,C.resume=ut,C.pause=ut,C}}const c=be;l.call=(C,A,E)=>ht(C,c,A,E);let h=!1;o==="post"?l.scheduler=C=>{Ve(C,c&&c.suspense)}:o!=="sync"&&(h=!0,l.scheduler=(C,A)=>{A?C():xo(C)}),l.augmentJob=C=>{e&&(C.flags|=4),h&&(C.flags|=2,c&&(C.id=c.uid,C.i=c))};const b=zc(t,e,l);return es&&(d?d.push(b):a&&b()),b}function Dd(t,e,i){const s=this.proxy,n=ce(t)?t.includes(".")?ta(s,t):()=>s[t]:t.bind(s,s);let o;H(e)?o=e:(o=e.handler,i=e);const r=ls(this),l=ea(n,o.bind(s),i);return r(),l}function ta(t,e){const i=e.split(".");return()=>{let s=t;for(let n=0;n<i.length&&s;n++)s=s[i[n]];return s}}const Pd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ge(e)}Modifiers`]||t[`${Qt(e)}Modifiers`];function Fd(t,e,...i){if(t.isUnmounted)return;const s=t.vnode.props||Y;let n=i;const o=e.startsWith("update:"),r=o&&Pd(s,e.slice(7));r&&(r.trim&&(n=i.map(c=>ce(c)?c.trim():c)),r.number&&(n=i.map(Nn)));let l,a=s[l=gn(e)]||s[l=gn(Ge(e))];!a&&o&&(a=s[l=gn(Qt(e))]),a&&ht(a,t,6,n);const d=s[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ht(d,t,6,n)}}function ia(t,e,i=!1){const s=e.emitsCache,n=s.get(t);if(n!==void 0)return n;const o=t.emits;let r={},l=!1;if(!H(t)){const a=d=>{const c=ia(d,e,!0);c&&(l=!0,ye(r,c))};!i&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!o&&!l?(oe(t)&&s.set(t,null),null):(L(o)?o.forEach(a=>r[a]=null):ye(r,o),oe(t)&&s.set(t,r),r)}function tn(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Qt(e))||Q(t,e))}function ar(t){const{type:e,vnode:i,proxy:s,withProxy:n,propsOptions:[o],slots:r,attrs:l,emit:a,render:d,renderCache:c,props:h,data:b,setupState:C,ctx:A,inheritAttrs:E}=t,G=Hs(t);let R,M;try{if(i.shapeFlag&4){const D=n||s,ee=D;R=dt(d.call(ee,D,c,h,C,b,A)),M=l}else{const D=e;R=dt(D.length>1?D(h,{attrs:l,slots:r,emit:a}):D(h,null)),M=e.props?l:Bd(l)}}catch(D){qi.length=0,Ks(D,t,1),R=Ke(mi)}let U=R;if(M&&E!==!1){const D=Object.keys(M),{shapeFlag:ee}=U;D.length&&ee&7&&(o&&D.some(lo)&&(M=Ld(M,o)),U=vi(U,M,!1,!0))}return i.dirs&&(U=vi(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(i.dirs):i.dirs),i.transition&&wo(U,i.transition),R=U,Hs(G),R}const Bd=t=>{let e;for(const i in t)(i==="class"||i==="style"||Ws(i))&&((e||(e={}))[i]=t[i]);return e},Ld=(t,e)=>{const i={};for(const s in t)(!lo(s)||!(s.slice(9)in e))&&(i[s]=t[s]);return i};function Md(t,e,i){const{props:s,children:n,component:o}=t,{props:r,children:l,patchFlag:a}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&a>=0){if(a&1024)return!0;if(a&16)return s?cr(s,r,d):!!r;if(a&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const b=c[h];if(r[b]!==s[b]&&!tn(d,b))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?cr(s,r,d):!0:!!r;return!1}function cr(t,e,i){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(e[o]!==t[o]&&!tn(i,o))return!0}return!1}function Hd({vnode:t,parent:e},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=i,e=e.parent;else break}}const sa=t=>t.__isSuspense;function Vd(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Wc(t)}const Ie=Symbol.for("v-fgt"),sn=Symbol.for("v-txt"),mi=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),qi=[];let je=null;function vt(t=!1){qi.push(je=t?null:[])}function Nd(){qi.pop(),je=qi[qi.length-1]||null}let Ki=1;function dr(t,e=!1){Ki+=t,t<0&&je&&e&&(je.hasOnce=!0)}function na(t){return t.dynamicChildren=Ki>0?je||ri:null,Nd(),Ki>0&&je&&je.push(t),t}function si(t,e,i,s,n,o){return na(ue(t,e,i,s,n,o,!0))}function Xn(t,e,i,s,n){return na(Ke(t,e,i,s,n,!0))}function To(t){return t?t.__v_isVNode===!0:!1}function Pi(t,e){return t.type===e.type&&t.key===e.key}const oa=({key:t})=>t??null,_s=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||me(t)||H(t)?{i:fe,r:t,k:e,f:!!i}:t:null);function ue(t,e=null,i=null,s=0,n=null,o=t===Ie?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oa(e),ref:e&&_s(e),scopeId:Dl,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:fe};return l?(So(a,i),o&128&&t.normalize(a)):i&&(a.shapeFlag|=ce(i)?8:16),Ki>0&&!r&&je&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&je.push(a),a}const Ke=jd;function jd(t,e=null,i=null,s=0,n=null,o=!1){if((!t||t===cd)&&(t=mi),To(t)){const l=vi(t,e,!0);return i&&So(l,i),Ki>0&&!o&&je&&(l.shapeFlag&6?je[je.indexOf(t)]=l:je.push(l)),l.patchFlag=-2,l}if(tu(t)&&(t=t.__vccOpts),e){e=zd(e);let{class:l,style:a}=e;l&&!ce(l)&&(e.class=bi(l)),oe(a)&&(yo(a)&&!L(a)&&(a=ye({},a)),e.style=uo(a))}const r=ce(t)?1:sa(t)?128:Yc(t)?64:oe(t)?4:H(t)?2:0;return ue(t,e,i,s,n,r,o,!0)}function zd(t){return t?yo(t)||ql(t)?ye({},t):t:null}function vi(t,e,i=!1,s=!1){const{props:n,ref:o,patchFlag:r,children:l,transition:a}=t,d=e?Gd(n||{},e):n,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&oa(d),ref:e&&e.ref?i&&o?L(o)?o.concat(_s(e)):[o,_s(e)]:_s(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vi(t.ssContent),ssFallback:t.ssFallback&&vi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&wo(c,a.clone(c)),c}function Ud(t=" ",e=0){return Ke(sn,null,t,e)}function qd(t,e){const i=Ke(Es,null,t);return i.staticCount=e,i}function dt(t){return t==null||typeof t=="boolean"?Ke(mi):L(t)?Ke(Ie,null,t.slice()):To(t)?It(t):Ke(sn,null,String(t))}function It(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vi(t)}function So(t,e){let i=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))i=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),So(t,n()),n._c&&(n._d=!0));return}else{i=32;const n=e._;!n&&!ql(e)?e._ctx=fe:n===3&&fe&&(fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:fe},i=32):(e=String(e),s&64?(i=16,e=[Ud(e)]):i=8);t.children=e,t.shapeFlag|=i}function Gd(...t){const e={};for(let i=0;i<t.length;i++){const s=t[i];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=bi([e.class,s.class]));else if(n==="style")e.style=uo([e.style,s.style]);else if(Ws(n)){const o=e[n],r=s[n];r&&o!==r&&!(L(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=s[n])}return e}function lt(t,e,i,s=null){ht(t,e,7,[i,s])}const Wd=jl();let Qd=0;function Jd(t,e,i){const s=t.type,n=(e?e.appContext:t.appContext)||Wd,o={uid:Qd++,vnode:t,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wl(s,n),emitsOptions:ia(s,n),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Fd.bind(null,o),t.ce&&t.ce(o),o}let be=null,js,Zn;{const t=Xs(),e=(i,s)=>{let n;return(n=t[i])||(n=t[i]=[]),n.push(s),o=>{n.length>1?n.forEach(r=>r(o)):n[0](o)}};js=e("__VUE_INSTANCE_SETTERS__",i=>be=i),Zn=e("__VUE_SSR_SETTERS__",i=>es=i)}const ls=t=>{const e=be;return js(t),t.scope.on(),()=>{t.scope.off(),js(e)}},ur=()=>{be&&be.scope.off(),js(null)};function ra(t){return t.vnode.shapeFlag&4}let es=!1;function Yd(t,e=!1,i=!1){e&&Zn(e);const{props:s,children:n}=t.vnode,o=ra(t);wd(t,s,o,e),Td(t,n,i);const r=o?Xd(t,e):void 0;return e&&Zn(!1),r}function Xd(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hd);const{setup:s}=i;if(s){_t();const n=t.setupContext=s.length>1?Kd(t):null,o=ls(t),r=rs(s,t,0,[t.props,n]),l=rl(r);if(Dt(),o(),(l||t.sp)&&!di(t)&&Pl(t),l){if(r.then(ur,ur),e)return r.then(a=>{hr(t,a)}).catch(a=>{Ks(a,t,0)});t.asyncDep=r}else hr(t,r)}else la(t)}function hr(t,e,i){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Ol(e)),la(t)}function la(t,e,i){const s=t.type;t.render||(t.render=s.render||ut);{const n=ls(t);_t();try{fd(t)}finally{Dt(),n()}}}const Zd={get(t,e){return pe(t,"get",""),t[e]}};function Kd(t){const e=i=>{t.exposed=i||{}};return{attrs:new Proxy(t.attrs,Zd),slots:t.slots,emit:t.emit,expose:e}}function nn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ol(Fc(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in Ui)return Ui[i](t)},has(e,i){return i in e||i in Ui}})):t.proxy}function eu(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function tu(t){return H(t)&&"__vccOpts"in t}const aa=(t,e)=>Nc(t,e,es),iu="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kn;const fr=typeof window<"u"&&window.trustedTypes;if(fr)try{Kn=fr.createPolicy("vue",{createHTML:t=>t})}catch{}const ca=Kn?t=>Kn.createHTML(t):t=>t,su="http://www.w3.org/2000/svg",nu="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,pr=pt&&pt.createElement("template"),ou={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,s)=>{const n=e==="svg"?pt.createElementNS(su,t):e==="mathml"?pt.createElementNS(nu,t):i?pt.createElement(t,{is:i}):pt.createElement(t);return t==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,s,n,o){const r=i?i.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),i),!(n===o||!(n=n.nextSibling)););else{pr.innerHTML=ca(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=pr.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,i)}return[r?r.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}},ru=Symbol("_vtc");function lu(t,e,i){const s=t[ru];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}const gr=Symbol("_vod"),au=Symbol("_vsh"),cu=Symbol(""),du=/(^|;)\s*display\s*:/;function uu(t,e,i){const s=t.style,n=ce(i);let o=!1;if(i&&!n){if(e)if(ce(e))for(const r of e.split(";")){const l=r.slice(0,r.indexOf(":")).trim();i[l]==null&&Ds(s,l,"")}else for(const r in e)i[r]==null&&Ds(s,r,"");for(const r in i)r==="display"&&(o=!0),Ds(s,r,i[r])}else if(n){if(e!==i){const r=s[cu];r&&(i+=";"+r),s.cssText=i,o=du.test(i)}}else e&&t.removeAttribute("style");gr in t&&(t[gr]=o?s.display:"",t[au]&&(s.display="none"))}const br=/\s*!important$/;function Ds(t,e,i){if(L(i))i.forEach(s=>Ds(t,e,s));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const s=hu(t,e);br.test(i)?t.setProperty(Qt(s),i.replace(br,""),"important"):t[s]=i}}const mr=["Webkit","Moz","ms"],$n={};function hu(t,e){const i=$n[e];if(i)return i;let s=Ge(e);if(s!=="filter"&&s in t)return $n[e]=s;s=Ys(s);for(let n=0;n<mr.length;n++){const o=mr[n]+s;if(o in t)return $n[e]=o}return e}const vr="http://www.w3.org/1999/xlink";function yr(t,e,i,s,n,o=fc(e)){s&&e.startsWith("xlink:")?i==null?t.removeAttributeNS(vr,e.slice(6,e.length)):t.setAttributeNS(vr,e,i):i==null||o&&!dl(i)?t.removeAttribute(e):t.setAttribute(e,o?"":xt(i)?String(i):i)}function xr(t,e,i,s,n){if(e==="innerHTML"||e==="textContent"){i!=null&&(t[e]=e==="innerHTML"?ca(i):i);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,a=i==null?t.type==="checkbox"?"on":"":String(i);(l!==a||!("_value"in t))&&(t.value=a),i==null&&t.removeAttribute(e),t._value=i;return}let r=!1;if(i===""||i==null){const l=typeof t[e];l==="boolean"?i=dl(i):i==null&&l==="string"?(i="",r=!0):l==="number"&&(i=0,r=!0)}try{t[e]=i}catch{}r&&t.removeAttribute(n||e)}function ti(t,e,i,s){t.addEventListener(e,i,s)}function fu(t,e,i,s){t.removeEventListener(e,i,s)}const wr=Symbol("_vei");function pu(t,e,i,s,n=null){const o=t[wr]||(t[wr]={}),r=o[e];if(s&&r)r.value=s;else{const[l,a]=gu(e);if(s){const d=o[e]=vu(s,n);ti(t,l,d,a)}else r&&(fu(t,l,r,a),o[e]=void 0)}}const Cr=/(?:Once|Passive|Capture)$/;function gu(t){let e;if(Cr.test(t)){e={};let s;for(;s=t.match(Cr);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let kn=0;const bu=Promise.resolve(),mu=()=>kn||(bu.then(()=>kn=0),kn=Date.now());function vu(t,e){const i=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=i.attached)return;ht(yu(s,i.value),e,5,[s])};return i.value=t,i.attached=mu(),i}function yu(t,e){if(L(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const $r=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xu=(t,e,i,s,n,o)=>{const r=n==="svg";e==="class"?lu(t,s,r):e==="style"?uu(t,i,s):Ws(e)?lo(e)||pu(t,e,i,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wu(t,e,s,r))?(xr(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yr(t,e,s,r,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ce(s))?xr(t,Ge(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yr(t,e,s,r))};function wu(t,e,i,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&$r(e)&&H(i));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return $r(e)&&ce(i)?!1:e in t}const kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?i=>Ss(e,i):e};function Cu(t){t.target.composing=!0}function Tr(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tn=Symbol("_assign"),$u={created(t,{modifiers:{lazy:e,trim:i,number:s}},n){t[Tn]=kr(n);const o=s||n.props&&n.props.type==="number";ti(t,e?"change":"input",r=>{if(r.target.composing)return;let l=t.value;i&&(l=l.trim()),o&&(l=Nn(l)),t[Tn](l)}),i&&ti(t,"change",()=>{t.value=t.value.trim()}),e||(ti(t,"compositionstart",Cu),ti(t,"compositionend",Tr),ti(t,"change",Tr))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:i,modifiers:{lazy:s,trim:n,number:o}},r){if(t[Tn]=kr(r),t.composing)return;const l=(o||t.type==="number")&&!/^0\d/.test(t.value)?Nn(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===i||n&&t.value.trim()===a)||(t.value=a))}},ku=["ctrl","shift","alt","meta"],Tu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ku.some(i=>t[`${i}Key`]&&!e.includes(i))},Su=(t,e)=>{const i=t._withMods||(t._withMods={}),s=e.join(".");return i[s]||(i[s]=(n,...o)=>{for(let r=0;r<e.length;r++){const l=Tu[e[r]];if(l&&l(n,e))return}return t(n,...o)})},Iu=ye({patchProp:xu},ou);let Sr;function Ou(){return Sr||(Sr=Id(Iu))}const Au=(...t)=>{const e=Ou().createApp(...t),{mount:i}=e;return e.mount=s=>{const n=Eu(s);if(!n)return;const o=e._component;!H(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=i(n,!1,Ru(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function Ru(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Eu(t){return ce(t)?document.querySelector(t):t}const Io=(t,e)=>{const i=t.__vccOpts||t;for(const[s,n]of e)i[s]=n;return i},_u=Co({name:"ToggleQuickPickOption",props:{selected:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},bold:{type:Boolean,default:!1}},emits:["toggle"],setup(t,{emit:e}){const i=at(null);return Rs(()=>t.checked,n=>{i.value&&(i.value.checked=n)}),{checkboxRef:i,toggleCheckbox:()=>{e("toggle",!t.checked)}}}}),Du=["checked"],Pu={class:"quick-pick-option-content"},Fu={class:"option-description"},Bu={class:"quick-pick-option-metadata"};function Lu(t,e,i,s,n,o){return vt(),si("section",{class:bi(["quick-pick-option",{selected:t.selected}]),onClick:e[1]||(e[1]=(...r)=>t.toggleCheckbox&&t.toggleCheckbox(...r))},[ue("vscode-checkbox",{ref:"checkboxRef",checked:t.checked,onClick:e[0]||(e[0]=Su(()=>{},["stop"]))},null,8,Du),ue("div",Pu,[ue("div",{class:bi(["option-label",{bold:t.bold}])},[xn(t.$slots,"default")],2),ue("div",Fu,[xn(t.$slots,"description")])]),ue("div",Bu,[xn(t.$slots,"metadata")])],2)}const Mu=Io(_u,[["render",Lu]]),Hu=Co({name:"QuickPick",components:{ToggleQuickPickOption:Mu},setup(){const t=at(0),e=at(!0),i=at(null),s=at(null),n=at(null),o=at(null),r=at([{name:"GitHub Copilot Chat",options:[{label:"GitHub Copilot Chat",description:"",metadata:"from extension",checked:!0,bold:!0},{label:"Codebase",description:"References relevant file chunks, symbols, and other information in your codebase.",checked:!0},{label:"Find Usages",description:"",checked:!0},{label:"VS Code API",description:"Use VS Code API to find references to answer questions about VS Code extension...",checked:!0},{label:"Git Changes",description:"",checked:!0},{label:"Test Failure",description:"Include information about the last unit test failure.",checked:!0},{label:"Terminal Selection",description:"The active terminal's selection.",checked:!0},{label:"Terminal Last Command",description:"The active terminal's last run command.",checked:!0}]},{name:"poppy-framework",options:[{label:"MCP Server: poppy-framework",description:"",metadata:"from your workspace (running)",checked:!0,bold:!0},{label:"poppy_state",description:"Get an example of a Poppy state declaration. Use this to understand how to declare a Poppy state in your code.",checked:!0},{label:"create_poppy_component",description:"Create a Poppy component. Use this to create a new Poppy component.",checked:!0}]},{name:"filesystem",options:[{label:"MCP Server: filesystem",description:"",metadata:"from Claude Desktop (stopped)",checked:!0,bold:!0},{label:"read_file",description:"Read the complete contents of a file from the file system.",checked:!0},{label:"read_multiple_file",description:"Read the complete contents of multiple files simultaneously.",checked:!0},{label:"write_file",description:"Create a new file or completely overwrite an existing file with new content.",checked:!0},{label:"edit_file",description:"Make line based edits to a file.",checked:!0},{label:"create_directory",description:"Create a new directory or ensure a directory exists.",checked:!0},{label:"list_directory",description:"Get a detailed list of all files and directories in a specified path.",checked:!0}]},{name:"Azure",options:[{label:"GitHub Copilot for Azure",description:"",metadata:"from extension",checked:!0,bold:!0},{label:"cost",description:"Provide detailed cost analysis for Azure services.",checked:!0},{label:"resource",description:"Get detailed information about a specific Azure resource.",checked:!0},{label:"subscription",description:"Get detailed information about a specific Azure subscription.",checked:!0},{label:"resource_group",description:"Get detailed information about a specific Azure resource group.",checked:!0},{label:"location",description:"Get detailed information about a specific Azure location.",checked:!0},{label:"service",description:"Get detailed information about a specific Azure service.",checked:!0}]}]),l=aa(()=>r.value.every(R=>R.options.every(M=>M.checked))),a=R=>{r.value.forEach(M=>{M.options.forEach(U=>{U.checked=R})}),c()},d=at([]),c=()=>{const R=[];r.value.forEach(M=>{M.options.forEach(U=>{R.push({...U,groupName:M.name})})}),d.value=R};c();const h=(R,M,U)=>{r.value[R].options[M].checked=U,c(),o.value&&(o.value.checked=l.value)},b=R=>{n.value&&!n.value.contains(R.target)&&C()},C=()=>{n.value&&(n.value.focus(),n.value.blur()),e.value=!1,t.value=-1},A=R=>{var M,U,D,ee;if(R.key==="Escape"){R.preventDefault(),C();return}if(R.key==="ArrowDown")R.preventDefault(),e.value?(e.value=!1,t.value=0,(M=i.value)==null||M.blur()):t.value===d.value.length-1?(e.value=!0,(U=i.value)==null||U.focus()):t.value++;else if(R.key==="ArrowUp")R.preventDefault(),e.value?(e.value=!1,t.value=d.value.length-1,(D=i.value)==null||D.blur()):t.value===0?(e.value=!0,(ee=i.value)==null||ee.focus()):t.value--;else if(R.key===" "&&!e.value&&t.value>=0){R.preventDefault();let he=d.value[t.value];for(let De=0;De<r.value.length;De++){const Je=r.value[De];for(let kt=0;kt<Je.options.length;kt++){const Ye=Je.options[kt];if(Ye.label===he.label){Ye.checked=!Ye.checked,c(),o.value&&(o.value.checked=l.value);break}}}}},E=()=>{e.value=!0},G=R=>{R.target===s.value&&R.preventDefault()};return $o(()=>{document.addEventListener("keydown",A),document.addEventListener("mousedown",b),setTimeout(()=>{var R;(R=i.value)==null||R.focus(),o.value&&(o.value.checked=l.value)},0)}),Ll(()=>{document.removeEventListener("keydown",A),document.removeEventListener("mousedown",b)}),{selectedIndex:t,optionGroups:r,flattenedOptions:d,isTextFieldFocused:e,textFieldRef:i,optionsContainerRef:s,quickPickRef:n,headerCheckboxRef:o,handleTextFieldFocus:E,handleContainerClick:G,toggleOption:h,toggleAllOptions:a,allOptionsChecked:l}}}),Vu={class:"quick-pick",ref:"quickPickRef"},Nu={class:"quick-pick-header"};function ju(t,e,i,s,n,o){const r=ad("ToggleQuickPickOption");return vt(),si("section",Vu,[ue("div",Nu,[Qc(ue("vscode-checkbox",{ref:"headerCheckboxRef","onUpdate:modelValue":e[0]||(e[0]=l=>t.allOptionsChecked=l),onClick:e[1]||(e[1]=l=>t.toggleAllOptions(!t.allOptionsChecked))},null,512),[[$u,t.allOptionsChecked]]),ue("vscode-text-field",{ref:"textFieldRef",placeholder:"Select tools that are available to chat",onFocus:e[2]||(e[2]=(...l)=>t.handleTextFieldFocus&&t.handleTextFieldFocus(...l))},null,544),e[4]||(e[4]=ue("vscode-button",null,"OK",-1))]),ue("div",{class:"quick-pick-options",ref:"optionsContainerRef",onClick:e[3]||(e[3]=(...l)=>t.handleContainerClick&&t.handleContainerClick(...l))},[(vt(!0),si(Ie,null,tr(t.optionGroups,(l,a)=>(vt(),si("div",{key:a,class:"option-group"},[(vt(!0),si(Ie,null,tr(l.options,(d,c)=>(vt(),Xn(r,{key:c,selected:!t.isTextFieldFocused&&t.flattenedOptions.findIndex(h=>h.label===d.label&&h.description===d.description)===t.selectedIndex,checked:d.checked,bold:d.bold,class:bi({"indented-option":c>0}),onToggle:h=>t.toggleOption(a,c,h)},ud({description:Os(()=>[ue("span",null,Is(d.description),1)]),default:Os(()=>[ue("span",null,Is(d.label),1)]),_:2},[d.metadata?{name:"metadata",fn:Os(()=>[ue("span",null,Is(d.metadata),1)]),key:"0"}:void 0]),1032,["selected","checked","bold","class","onToggle"]))),128))]))),128))],512)],512)}const zu=Io(Hu,[["render",ju]]),Rt=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Rt.trustedTypes===void 0&&(Rt.trustedTypes={createPolicy:(t,e)=>e});const da={configurable:!1,enumerable:!1,writable:!1};Rt.FAST===void 0&&Reflect.defineProperty(Rt,"FAST",Object.assign({value:Object.create(null)},da));const ts=Rt.FAST;if(ts.getById===void 0){const t=Object.create(null);Reflect.defineProperty(ts,"getById",Object.assign({value(e,i){let s=t[e];return s===void 0&&(s=i?t[e]=i():null),s}},da))}const Gt=Object.freeze([]);function ua(){const t=new WeakMap;return function(e){let i=t.get(e);if(i===void 0){let s=Reflect.getPrototypeOf(e);for(;i===void 0&&s!==null;)i=t.get(s),s=Reflect.getPrototypeOf(s);i=i===void 0?[]:i.slice(0),t.set(e,i)}return i}}const Sn=Rt.FAST.getById(1,()=>{const t=[],e=[];function i(){if(e.length)throw e.shift()}function s(r){try{r.call()}catch(l){e.push(l),setTimeout(i,0)}}function n(){let l=0;for(;l<t.length;)if(s(t[l]),l++,l>1024){for(let a=0,d=t.length-l;a<d;a++)t[a]=t[a+l];t.length-=l,l=0}t.length=0}function o(r){t.length<1&&Rt.requestAnimationFrame(n),t.push(r)}return Object.freeze({enqueue:o,process:n})}),ha=Rt.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let In=ha;const Gi=`fast-${Math.random().toString(36).substring(2,8)}`,fa=`${Gi}{`,Oo=`}${Gi}`,N=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(In!==ha)throw new Error("The HTML policy can only be set once.");In=t},createHTML(t){return In.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(Gi)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${Gi}:`,""))},createInterpolationPlaceholder(t){return`${fa}${t}${Oo}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${Gi}:${t}-->`},queueUpdate:Sn.enqueue,processUpdates:Sn.process,nextUpdate(){return new Promise(Sn.enqueue)},setAttribute(t,e,i){i==null?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class zs{constructor(e,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=i}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const i=this.spillover;if(i===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else i.indexOf(e)===-1&&i.push(e)}unsubscribe(e){const i=this.spillover;if(i===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}notify(e){const i=this.spillover,s=this.source;if(i===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,e),o!==void 0&&o.handleChange(s,e)}else for(let n=0,o=i.length;n<o;++n)i[n].handleChange(s,e)}}class pa{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var i;const s=this.subscribers[e];s!==void 0&&s.notify(e),(i=this.sourceSubscribers)===null||i===void 0||i.notify(e)}subscribe(e,i){var s;if(i){let n=this.subscribers[i];n===void 0&&(this.subscribers[i]=n=new zs(this.source)),n.subscribe(e)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new zs(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,i){var s;if(i){const n=this.subscribers[i];n!==void 0&&n.unsubscribe(e)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(e)}}const V=ts.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,i=N.queueUpdate;let s,n=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(d){let c=d.$fastController||e.get(d);return c===void 0&&(Array.isArray(d)?c=n(d):e.set(d,c=new pa(d))),c}const r=ua();class l{constructor(c){this.name=c,this.field=`_${c}`,this.callback=`${c}Changed`}getValue(c){return s!==void 0&&s.watch(c,this.name),c[this.field]}setValue(c,h){const b=this.field,C=c[b];if(C!==h){c[b]=h;const A=c[this.callback];typeof A=="function"&&A.call(c,C,h),o(c).notify(this.name)}}}class a extends zs{constructor(c,h,b=!1){super(c,h),this.binding=c,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(c,h){this.needsRefresh&&this.last!==null&&this.disconnect();const b=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const C=this.binding(c,h);return s=b,C}disconnect(){if(this.last!==null){let c=this.first;for(;c!==void 0;)c.notifier.unsubscribe(this,c.propertyName),c=c.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(c,h){const b=this.last,C=o(c),A=b===null?this.first:{};if(A.propertySource=c,A.propertyName=h,A.notifier=C,C.subscribe(this,h),b!==null){if(!this.needsRefresh){let E;s=void 0,E=b.propertySource[b.propertyName],s=this,c===E&&(this.needsRefresh=!0)}b.next=A}this.last=A}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let c=this.first;return{next:()=>{const h=c;return h===void 0?{value:void 0,done:!0}:(c=c.next,{value:h,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){n=d},getNotifier:o,track(d,c){s!==void 0&&s.watch(d,c)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(d,c){o(d).notify(c)},defineProperty(d,c){typeof c=="string"&&(c=new l(c)),r(d).push(c),Reflect.defineProperty(d,c.name,{enumerable:!0,get:function(){return c.getValue(this)},set:function(h){c.setValue(this,h)}})},getAccessors:r,binding(d,c,h=this.isVolatileBinding(d)){return new a(d,c,h)},isVolatileBinding(d){return t.test(d.toString())}})});function O(t,e){V.defineProperty(t,e)}function Uu(t,e,i){return Object.assign({},i,{get:function(){return V.trackVolatile(),i.get.apply(this)}})}const Ir=ts.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class is{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Ir.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Ir.set(e)}}V.defineProperty(is.prototype,"index");V.defineProperty(is.prototype,"length");const Wi=Object.seal(new is);class on{constructor(){this.targetIndex=0}}class ga extends on{constructor(){super(...arguments),this.createPlaceholder=N.createInterpolationPlaceholder}}class Ao extends on{constructor(e,i,s){super(),this.name=e,this.behavior=i,this.options=s}createPlaceholder(e){return N.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function qu(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=V.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Gu(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Wu(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Qu(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Ju(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Yu(t){N.setAttribute(this.target,this.targetName,t)}function Xu(t){N.setBooleanAttribute(this.target,this.targetName,t)}function Zu(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Ku(t){this.target[this.targetName]=t}function eh(t){const e=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(t!=null&&t.length){const n=t.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const l=n[o];l!==""&&(e[l]=s,i.classList.add(l))}}if(this.classVersions=e,this.version=s+1,s!==0){s-=1;for(const n in e)e[n]===s&&i.classList.remove(n)}}class Ro extends ga{constructor(e){super(),this.binding=e,this.bind=qu,this.unbind=Wu,this.updateTarget=Yu,this.isBindingVolatile=V.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Ku,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(s,n)=>N.createHTML(i(s,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Xu;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Gu,this.unbind=Ju;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=eh);break}}targetAtContent(){this.updateTarget=Zu,this.unbind=Qu}createBehavior(e){return new th(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class th{constructor(e,i,s,n,o,r,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=i,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){is.setEvent(e);const i=this.binding(this.source,this.context);is.setEvent(null),i!==!0&&e.preventDefault()}}let On=null;class Eo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){On=this}static borrow(e){const i=On||new Eo;return i.directives=e,i.reset(),On=null,i}}function ih(t){if(t.length===1)return t[0];let e;const i=t.length,s=t.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,l)=>{let a="";for(let d=0;d<i;++d)a+=s[d](r,l);return a},o=new Ro(n);return o.targetName=e,o}const sh=Oo.length;function ba(t,e){const i=e.split(fa);if(i.length===1)return null;const s=[];for(let n=0,o=i.length;n<o;++n){const r=i[n],l=r.indexOf(Oo);let a;if(l===-1)a=r;else{const d=parseInt(r.substring(0,l));s.push(t.directives[d]),a=r.substring(l+sh)}a!==""&&s.push(a)}return s}function Or(t,e,i=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],l=r.value,a=ba(t,l);let d=null;a===null?i&&(d=new Ro(()=>l),d.targetName=r.name):d=ih(a),d!==null&&(e.removeAttributeNode(r),n--,o--,t.addFactory(d))}}function nh(t,e,i){const s=ba(t,e.textContent);if(s!==null){let n=e;for(let o=0,r=s.length;o<r;++o){const l=s[o],a=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",t.captureContentBinding(l)),n=a,t.targetIndex++,a!==e&&i.nextNode()}t.targetIndex--}}function oh(t,e){const i=t.content;document.adoptNode(i);const s=Eo.borrow(e);Or(s,t,!0);const n=s.behaviorFactories;s.reset();const o=N.createTemplateWalker(i);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:Or(s,r);break;case 3:nh(s,r,o);break;case 8:N.isMarker(r)&&s.addFactory(e[N.extractDirectiveIndexFromMarker(r)])}let l=0;(N.isMarker(i.firstChild)||i.childNodes.length===1&&e.length)&&(i.insertBefore(document.createComment(""),i.firstChild),l=-1);const a=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:a,hostBehaviorFactories:n,targetOffset:l}}const An=document.createRange();class ma{constructor(e,i){this.fragment=e,this.behaviors=i,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const i=this.lastChild;if(e.previousSibling===i)return;const s=e.parentNode;let n=this.firstChild,o;for(;n!==i;)o=n.nextSibling,s.insertBefore(n,e),n=o;s.insertBefore(i,e)}}remove(){const e=this.fragment,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,e.appendChild(s),s=n;e.appendChild(i)}dispose(){const e=this.firstChild.parentNode,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,e.removeChild(s),s=n;e.removeChild(i);const o=this.behaviors,r=this.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}bind(e,i){const s=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=i;for(let o=0,r=s.length;o<r;++o){const l=s[o];l.unbind(n),l.bind(e,i)}}else{this.source=e,this.context=i;for(let n=0,o=s.length;n<o;++n)s[n].bind(e,i)}}unbind(){if(this.source===null)return;const e=this.behaviors,i=this.source;for(let s=0,n=e.length;s<n;++s)e[s].unbind(i);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){An.setStartBefore(e[0].firstChild),An.setEndAfter(e[e.length-1].lastChild),An.deleteContents();for(let i=0,s=e.length;i<s;++i){const n=e[i],o=n.behaviors,r=n.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}}}}class Ar{constructor(e,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=i}create(e){if(this.fragment===null){let d;const c=this.html;if(typeof c=="string"){d=document.createElement("template"),d.innerHTML=N.createHTML(c);const b=d.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(d=b)}else d=c;const h=oh(d,this.directives);this.fragment=h.fragment,this.viewBehaviorFactories=h.viewBehaviorFactories,this.hostBehaviorFactories=h.hostBehaviorFactories,this.targetOffset=h.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=N.createTemplateWalker(i);let r=0,l=this.targetOffset,a=o.nextNode();for(let d=s.length;r<d;++r){const c=s[r],h=c.targetIndex;for(;a!==null;)if(l===h){n[r]=c.createBehavior(a);break}else a=o.nextNode(),l++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let c=0,h=d.length;c<h;++c,++r)n[r]=d[c].createBehavior(e)}return new ma(i,n)}render(e,i,s){typeof i=="string"&&(i=document.getElementById(i)),s===void 0&&(s=i);const n=this.create(s);return n.bind(e,Wi),n.appendTo(i),n}}const rh=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function q(t,...e){const i=[];let s="";for(let n=0,o=t.length-1;n<o;++n){const r=t[n];let l=e[n];if(s+=r,l instanceof Ar){const a=l;l=()=>a}if(typeof l=="function"&&(l=new Ro(l)),l instanceof ga){const a=rh.exec(r);a!==null&&(l.targetName=a[2])}l instanceof on?(s+=l.createPlaceholder(i.length),i.push(l)):s+=l}return s+=t[t.length-1],new Ar(s,i)}class Fe{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}Fe.create=(()=>{if(N.supportsAdoptedStyleSheets){const t=new Map;return e=>new lh(e,t)}return t=>new dh(t)})();function _o(t){return t.map(e=>e instanceof Fe?_o(e.styles):[e]).reduce((e,i)=>e.concat(i),[])}function va(t){return t.map(e=>e instanceof Fe?e.behaviors:null).reduce((e,i)=>i===null?e:(e===null&&(e=[]),e.concat(i)),null)}const ya=Symbol("prependToAdoptedStyleSheets");function xa(t){const e=[],i=[];return t.forEach(s=>(s[ya]?e:i).push(s)),{prepend:e,append:i}}let wa=(t,e)=>{const{prepend:i,append:s}=xa(e);t.adoptedStyleSheets=[...i,...t.adoptedStyleSheets,...s]},Ca=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(i=>e.indexOf(i)===-1)};if(N.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),wa=(t,e)=>{const{prepend:i,append:s}=xa(e);t.adoptedStyleSheets.splice(0,0,...i),t.adoptedStyleSheets.push(...s)},Ca=(t,e)=>{for(const i of e){const s=t.adoptedStyleSheets.indexOf(i);s!==-1&&t.adoptedStyleSheets.splice(s,1)}}}catch{}class lh extends Fe{constructor(e,i){super(),this.styles=e,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=va(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,i=this.styleSheetCache;this._styleSheets=_o(e).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=i.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),i.set(s,n)),n})}return this._styleSheets}addStylesTo(e){wa(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Ca(e,this.styleSheets),super.removeStylesFrom(e)}}let ah=0;function ch(){return`fast-style-class-${++ah}`}class dh extends Fe{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=va(e),this.styleSheets=_o(e),this.styleClass=ch()}addStylesTo(e){const i=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<i.length;n++){const o=document.createElement("style");o.innerHTML=i[n],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const i=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=i.length;s<n;++s)e.removeChild(i[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Us=Object.freeze({locate:ua()}),$a={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},et={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class qs{constructor(e,i,s=i.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=i,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=$a)}setValue(e,i){const s=e[this.fieldName],n=this.converter;n!==void 0&&(i=n.fromView(i)),s!==i&&(e[this.fieldName]=i,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,i),e.$fastController.notify(this.name))}getValue(e){return V.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,i){this.guards.has(e)||(this.guards.add(e),this.setValue(e,i),this.guards.delete(e))}tryReflectToAttribute(e){const i=this.mode,s=this.guards;s.has(e)||i==="fromView"||N.queueUpdate(()=>{s.add(e);const n=e[this.fieldName];switch(i){case"reflect":const o=this.converter;N.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":N.setBooleanAttribute(e,this.attribute,n);break}s.delete(e)})}static collect(e,...i){const s=[];i.push(Us.locate(e));for(let n=0,o=i.length;n<o;++n){const r=i[n];if(r!==void 0)for(let l=0,a=r.length;l<a;++l){const d=r[l];typeof d=="string"?s.push(new qs(e,d)):s.push(new qs(e,d.property,d.attribute,d.mode,d.converter))}}return s}}function m(t,e){let i;function s(n,o){arguments.length>1&&(i.property=o),Us.locate(n.constructor).push(i)}if(arguments.length>1){i={},s(t,e);return}return i=t===void 0?{}:t,s}const Rr={mode:"open"},Er={},eo=ts.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class rn{constructor(e,i=e.definition){typeof i=="string"&&(i={name:i}),this.type=e,this.name=i.name,this.template=i.template;const s=qs.collect(e,i.attributes),n=new Array(s.length),o={},r={};for(let l=0,a=s.length;l<a;++l){const d=s[l];n[l]=d.attribute,o[d.name]=d,r[d.attribute]=d}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=i.shadowOptions===void 0?Rr:i.shadowOptions===null?void 0:Object.assign(Object.assign({},Rr),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?Er:Object.assign(Object.assign({},Er),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?Fe.create(i.styles):i.styles instanceof Fe?i.styles:Fe.create([i.styles])}get isDefined(){return!!eo.getByType(this.type)}define(e=customElements){const i=this.type;if(eo.register(this)){const s=this.attributes,n=i.prototype;for(let o=0,r=s.length;o<r;++o)V.defineProperty(n,s[o]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,i,this.elementOptions),this}}rn.forType=eo.getByType;const ka=new WeakMap,uh={bubbles:!0,composed:!0,cancelable:!0};function Rn(t){return t.shadowRoot||ka.get(t)||null}class Do extends pa{constructor(e,i){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=i;const s=i.shadowOptions;if(s!==void 0){const o=e.attachShadow(s);s.mode==="closed"&&ka.set(e,o)}const n=V.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,l=n.length;r<l;++r){const a=n[r].name,d=e[a];d!==void 0&&(delete e[a],o[a]=d)}}}get isConnected(){return V.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,V.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const i=Rn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)i.append(e);else if(!e.isAttachedTo(i)){const s=e.behaviors;e.addStylesTo(i),s!==null&&this.addBehaviors(s)}}removeStyles(e){const i=Rn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)i.removeChild(e);else if(e.isAttachedTo(i)){const s=e.behaviors;e.removeStylesFrom(i),s!==null&&this.removeBehaviors(s)}}addBehaviors(e){const i=this.behaviors||(this.behaviors=new Map),s=e.length,n=[];for(let o=0;o<s;++o){const r=e[o];i.has(r)?i.set(r,i.get(r)+1):(i.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,Wi)}}removeBehaviors(e,i=!1){const s=this.behaviors;if(s===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const l=e[r];if(s.has(l)){const a=s.get(l)-1;a===0||i?s.delete(l)&&o.push(l):s.set(l,a)}}if(this._isConnected){const r=this.element;for(let l=0;l<o.length;++l)o[l].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Wi);const i=this.behaviors;if(i!==null)for(const[s]of i)s.bind(e,Wi);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const i=this.behaviors;if(i!==null){const s=this.element;for(const[n]of i)n.unbind(s)}}onAttributeChangedCallback(e,i,s){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(e,i,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:i},uh),s))):!1}finishInitialization(){const e=this.element,i=this.boundObservables;if(i!==null){const n=Object.keys(i);for(let o=0,r=n.length;o<r;++o){const l=n[o];e[l]=i[l]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const i=this.element,s=Rn(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||N.removeChildNodes(s),e&&(this.view=e.render(i,s,i))}static forCustomElement(e){const i=e.$fastController;if(i!==void 0)return i;const s=rn.forType(e.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new Do(e,s)}}function _r(t){return class extends t{constructor(){super(),Do.forCustomElement(this)}$emit(e,i,s){return this.$fastController.emit(e,i,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,i,s){this.$fastController.onAttributeChangedCallback(e,i,s)}}}const ln=Object.assign(_r(HTMLElement),{from(t){return _r(t)},define(t,e){return new rn(t,e).define().type}});class Ta{createCSS(){return""}createBehavior(){}}function hh(t,e){const i=[];let s="";const n=[];for(let o=0,r=t.length-1;o<r;++o){s+=t[o];let l=e[o];if(l instanceof Ta){const a=l.createBehavior();l=l.createCSS(),a&&n.push(a)}l instanceof Fe||l instanceof CSSStyleSheet?(s.trim()!==""&&(i.push(s),s=""),i.push(l)):s+=l}return s+=t[t.length-1],s.trim()!==""&&i.push(s),{styles:i,behaviors:n}}function re(t,...e){const{styles:i,behaviors:s}=hh(t,e),n=Fe.create(i);return s.length&&n.withBehaviors(...s),n}function Xe(t,e,i){return{index:t,removed:e,addedCount:i}}const Sa=0,Ia=1,to=2,io=3;function fh(t,e,i,s,n,o){const r=o-n+1,l=i-e+1,a=new Array(r);let d,c;for(let h=0;h<r;++h)a[h]=new Array(l),a[h][0]=h;for(let h=0;h<l;++h)a[0][h]=h;for(let h=1;h<r;++h)for(let b=1;b<l;++b)t[e+b-1]===s[n+h-1]?a[h][b]=a[h-1][b-1]:(d=a[h-1][b]+1,c=a[h][b-1]+1,a[h][b]=d<c?d:c);return a}function ph(t){let e=t.length-1,i=t[0].length-1,s=t[e][i];const n=[];for(;e>0||i>0;){if(e===0){n.push(to),i--;continue}if(i===0){n.push(io),e--;continue}const o=t[e-1][i-1],r=t[e-1][i],l=t[e][i-1];let a;r<l?a=r<o?r:o:a=l<o?l:o,a===o?(o===s?n.push(Sa):(n.push(Ia),s=o),e--,i--):a===r?(n.push(io),e--,s=r):(n.push(to),i--,s=l)}return n.reverse(),n}function gh(t,e,i){for(let s=0;s<i;++s)if(t[s]!==e[s])return s;return i}function bh(t,e,i){let s=t.length,n=e.length,o=0;for(;o<i&&t[--s]===e[--n];)o++;return o}function mh(t,e,i,s){return e<i||s<t?-1:e===i||s===t?0:t<i?e<s?e-i:s-i:s<e?s-t:e-t}function Oa(t,e,i,s,n,o){let r=0,l=0;const a=Math.min(i-e,o-n);if(e===0&&n===0&&(r=gh(t,s,a)),i===t.length&&o===s.length&&(l=bh(t,s,a-r)),e+=r,n+=r,i-=l,o-=l,i-e===0&&o-n===0)return Gt;if(e===i){const A=Xe(e,[],0);for(;n<o;)A.removed.push(s[n++]);return[A]}else if(n===o)return[Xe(e,[],i-e)];const d=ph(fh(t,e,i,s,n,o)),c=[];let h,b=e,C=n;for(let A=0;A<d.length;++A)switch(d[A]){case Sa:h!==void 0&&(c.push(h),h=void 0),b++,C++;break;case Ia:h===void 0&&(h=Xe(b,[],0)),h.addedCount++,b++,h.removed.push(s[C]),C++;break;case to:h===void 0&&(h=Xe(b,[],0)),h.addedCount++,b++;break;case io:h===void 0&&(h=Xe(b,[],0)),h.removed.push(s[C]),C++;break}return h!==void 0&&c.push(h),c}const Dr=Array.prototype.push;function vh(t,e,i,s){const n=Xe(e,i,s);let o=!1,r=0;for(let l=0;l<t.length;l++){const a=t[l];if(a.index+=r,o)continue;const d=mh(n.index,n.index+n.removed.length,a.index,a.index+a.addedCount);if(d>=0){t.splice(l,1),l--,r-=a.addedCount-a.removed.length,n.addedCount+=a.addedCount-d;const c=n.removed.length+a.removed.length-d;if(!n.addedCount&&!c)o=!0;else{let h=a.removed;if(n.index<a.index){const b=n.removed.slice(0,a.index-n.index);Dr.apply(b,h),h=b}if(n.index+n.removed.length>a.index+a.addedCount){const b=n.removed.slice(a.index+a.addedCount-n.index);Dr.apply(h,b)}n.removed=h,a.index<n.index&&(n.index=a.index)}}else if(n.index<a.index){o=!0,t.splice(l,0,n),l++;const c=n.addedCount-n.removed.length;a.index+=c,r+=c}}o||t.push(n)}function yh(t){const e=[];for(let i=0,s=t.length;i<s;i++){const n=t[i];vh(e,n.index,n.removed,n.addedCount)}return e}function xh(t,e){let i=[];const s=yh(e);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==t[r.index]&&i.push(r);continue}i=i.concat(Oa(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return i}let Pr=!1;function En(t,e){let i=t.index;const s=e.length;return i>s?i=s-t.addedCount:i<0&&(i=s+t.removed.length+i-t.addedCount),i<0&&(i=0),t.index=i,t}class wh extends zs{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,N.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,N.queueUpdate(this))}flush(){const e=this.splices,i=this.oldCollection;if(e===void 0&&i===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=i===void 0?xh(this.source,e):Oa(this.source,0,this.source.length,i,0,i.length);this.notify(s)}}function Ch(){if(Pr)return;Pr=!0,V.setArrayObserverFactory(a=>new wh(a));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,i=t.push,s=t.reverse,n=t.shift,o=t.sort,r=t.splice,l=t.unshift;t.pop=function(){const a=this.length>0,d=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(Xe(this.length,[d],0)),d},t.push=function(){const a=i.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(En(Xe(this.length-arguments.length,[],arguments.length),this)),a},t.reverse=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=s.apply(this,arguments);return d!==void 0&&d.reset(a),c},t.shift=function(){const a=this.length>0,d=n.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(Xe(0,[d],0)),d},t.sort=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=o.apply(this,arguments);return d!==void 0&&d.reset(a),c},t.splice=function(){const a=r.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(En(Xe(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},t.unshift=function(){const a=l.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(En(Xe(0,[],arguments.length),this)),a}}class $h{constructor(e,i){this.target=e,this.propertyName=i}bind(e){e[this.propertyName]=this.target}unbind(){}}function Re(t){return new Ao("fast-ref",$h,t)}const Aa=t=>typeof t=="function",kh=()=>null;function Fr(t){return t===void 0?kh:Aa(t)?t:()=>t}function Po(t,e,i){const s=Aa(t)?t:()=>t,n=Fr(e),o=Fr(i);return(r,l)=>s(r,l)?n(r,l):o(r,l)}function Th(t,e,i,s){t.bind(e[i],s)}function Sh(t,e,i,s){const n=Object.create(s);n.index=i,n.length=e.length,t.bind(e[i],n)}class Ih{constructor(e,i,s,n,o,r){this.location=e,this.itemsBinding=i,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Th,this.itemsBindingObserver=V.binding(i,this,s),this.templateBindingObserver=V.binding(n,this,o),r.positioning&&(this.bindView=Sh)}bind(e,i){this.source=e,this.originalContext=i,this.childContext=Object.create(i),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,i){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(i)}observeItems(e=!1){if(!this.items){this.items=Gt;return}const i=this.itemsObserver,s=this.itemsObserver=V.getNotifier(this.items),n=i!==s;n&&i!==null&&i.unsubscribe(this),(n||e)&&s.subscribe(this)}updateViews(e){const i=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,l=this.options.recycle,a=[];let d=0,c=0;for(let h=0,b=e.length;h<b;++h){const C=e[h],A=C.removed;let E=0,G=C.index;const R=G+C.addedCount,M=s.splice(C.index,A.length),U=c=a.length+M.length;for(;G<R;++G){const D=s[G],ee=D?D.firstChild:this.location;let he;l&&c>0?(E<=U&&M.length>0?(he=M[E],E++):(he=a[d],d++),c--):he=r.create(),s.splice(G,0,he),n(he,o,G,i),he.insertBefore(ee)}M[E]&&a.push(...M.slice(E))}for(let h=d,b=a.length;h<b;++h)a[h].dispose();if(this.options.positioning)for(let h=0,b=s.length;h<b;++h){const C=s[h].context;C.length=b,C.index=h}}refreshAllViews(e=!1){const i=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let l=i.length,a=this.views,d=a.length;if((l===0||e||!this.options.recycle)&&(ma.disposeContiguousBatch(a),d=0),d===0){this.views=a=new Array(l);for(let c=0;c<l;++c){const h=n.create();r(h,i,c,s),a[c]=h,h.insertBefore(o)}}else{let c=0;for(;c<l;++c)if(c<d){const b=a[c];r(b,i,c,s)}else{const b=n.create();r(b,i,c,s),a.push(b),b.insertBefore(o)}const h=a.splice(c,d-c);for(c=0,l=h.length;c<l;++c)h[c].dispose()}}unbindAllViews(){const e=this.views;for(let i=0,s=e.length;i<s;++i)e[i].unbind()}}class Ra extends on{constructor(e,i,s){super(),this.itemsBinding=e,this.templateBinding=i,this.options=s,this.createPlaceholder=N.createBlockPlaceholder,Ch(),this.isItemsBindingVolatile=V.isVolatileBinding(e),this.isTemplateBindingVolatile=V.isVolatileBinding(i)}createBehavior(e){return new Ih(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Fo(t){return t?function(e,i,s){return e.nodeType===1&&e.matches(t)}:function(e,i,s){return e.nodeType===1}}class Ea{constructor(e,i){this.target=e,this.options=i,this.source=null}bind(e){const i=this.options.property;this.shouldUpdate=V.getAccessors(e).some(s=>s.name===i),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Gt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Oh extends Ea{constructor(e,i){super(e,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function We(t){return typeof t=="string"&&(t={property:t}),new Ao("fast-slotted",Oh,t)}class Ah extends Ea{constructor(e,i){super(e,i),this.observer=null,i.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function _a(t){return typeof t=="string"&&(t={property:t}),new Ao("fast-children",Ah,t)}class Ci{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const $i=(t,e)=>q`
    <span
        part="end"
        ${Re("endContainer")}
        class=${i=>e.end?"end":void 0}
    >
        <slot name="end" ${Re("end")} @slotchange="${i=>i.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,ki=(t,e)=>q`
    <span
        part="start"
        ${Re("startContainer")}
        class="${i=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Re("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;q`
    <span part="end" ${Re("endContainer")}>
        <slot
            name="end"
            ${Re("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`;q`
    <span part="start" ${Re("startContainer")}>
        <slot
            name="start"
            ${Re("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(t,e,i,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}const _n=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(i){Reflect.defineMetadata(t,e,i)}},Reflect.defineMetadata=function(t,e,i){let s=_n.get(i);s===void 0&&_n.set(i,s=new Map),s.set(t,e)},Reflect.getOwnMetadata=function(t,e){const i=_n.get(e);if(i!==void 0)return i.get(t)});class Rh{constructor(e,i){this.container=e,this.key=i}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Pa(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,i){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new Ue(n,e,i))}}function Fi(t){const e=t.slice(),i=Object.keys(t),s=i.length;let n;for(let o=0;o<s;++o)n=i[o],Fa(n)||(e[n]=t[n]);return e}const Eh=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new Ue(t,1,t)},transient(t){return new Ue(t,2,t)}}),Dn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Eh.singleton})}),Br=new Map;function Lr(t){return e=>Reflect.getOwnMetadata(t,e)}let Mr=null;const ne=Object.freeze({createContainer(t){return new Qi(null,Object.assign({},Dn.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:ne.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(Da,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||ne.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new Qi(t,Object.assign({},Dn.default,e,{parentLocator:ne.findParentContainer})):Mr||(Mr=new Qi(null,Object.assign({},Dn.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Lr("design:paramtypes"),getAnnotationParamtypes:Lr("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=Br.get(t);if(e===void 0){const i=t.inject;if(i===void 0){const s=ne.getDesignParamtypes(t),n=ne.getAnnotationParamtypes(t);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(t);typeof o=="function"&&o!==Function.prototype?e=Fi(ne.getDependencies(o)):e=[]}else e=Fi(n);else if(n===void 0)e=Fi(s);else{e=Fi(s);let o=n.length,r;for(let d=0;d<o;++d)r=n[d],r!==void 0&&(e[d]=r);const l=Object.keys(n);o=l.length;let a;for(let d=0;d<o;++d)a=l[d],Fa(a)||(e[a]=n[a])}}else e=Fi(i);Br.set(t,e)}return e},defineProperty(t,e,i,s=!1){const n=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?ne.findResponsibleContainer(this):ne.getOrCreateDOMContainer()).get(i),this[n]=o,s&&this instanceof ln)){const l=this.$fastController,a=()=>{const c=ne.findResponsibleContainer(this).get(i),h=this[n];c!==h&&(this[n]=o,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return o}})},createInterface(t,e){const i=typeof t=="function"?t:e,s=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||jr,n=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,o=function(r,l,a){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(l)ne.defineProperty(r,l,o,n);else{const d=ne.getOrCreateAnnotationParamTypes(r);d[a]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",i!=null&&(o.register=function(r,l){return i(new Rh(r,l??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...t){return function(e,i,s){if(typeof s=="number"){const n=ne.getOrCreateAnnotationParamTypes(e),o=t[0];o!==void 0&&(n[s]=o)}else if(i)ne.defineProperty(e,i,t[0]);else{const n=s?ne.getOrCreateAnnotationParamTypes(s.value):ne.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<t.length;++r)o=t[r],o!==void 0&&(n[r]=o)}}},transient(t){return t.register=function(i){return ss.transient(t,t).register(i)},t.registerInRequestor=!1,t},singleton(t,e=Dh){return t.register=function(s){return ss.singleton(t,t).register(s)},t.registerInRequestor=e.scoped,t}}),_h=ne.createInterface("Container");ne.inject;const Dh={scoped:!1};class Ue{constructor(e,i,s){this.key=e,this.strategy=i,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,i){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(i),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=e.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(i)}case 3:return this.state(e,i,this);case 4:return this.state[0].resolve(e,i);case 5:return i.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var i,s,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(s=(i=e.getResolver(this.state))===null||i===void 0?void 0:i.getFactory)===null||s===void 0?void 0:s.call(i,e))!==null&&n!==void 0?n:null;default:return null}}}function Hr(t){return this.get(t)}function Ph(t,e){return e(t)}class Fh{constructor(e,i){this.Type=e,this.dependencies=i,this.transformers=null}construct(e,i){let s;return i===void 0?s=new this.Type(...this.dependencies.map(Hr,e)):s=new this.Type(...this.dependencies.map(Hr,e),...i),this.transformers==null?s:this.transformers.reduce(Ph,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Bh={$isResolver:!0,resolve(t,e){return e}};function Ps(t){return typeof t.register=="function"}function Lh(t){return Ps(t)&&typeof t.registerInRequestor=="boolean"}function Vr(t){return Lh(t)&&t.registerInRequestor}function Mh(t){return t.prototype!==void 0}const Hh=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Da="__DI_LOCATE_PARENT__",Pn=new Map;class Qi{constructor(e,i){this.owner=e,this.config=i,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(_h,Bh),e instanceof Node&&e.addEventListener(Da,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...i){return this.context=e,this.register(...i),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let i,s,n,o,r;const l=this.context;for(let a=0,d=e.length;a<d;++a)if(i=e[a],!!zr(i))if(Ps(i))i.register(this,l);else if(Mh(i))ss.singleton(i,i).register(this);else for(s=Object.keys(i),o=0,r=s.length;o<r;++o)n=i[s[o]],zr(n)&&(Ps(n)?n.register(this,l):this.register(n));return--this.registerDepth,this}registerResolver(e,i){xs(e);const s=this.resolvers,n=s.get(e);return n==null?s.set(e,i):n instanceof Ue&&n.strategy===4?n.state.push(i):s.set(e,new Ue(e,4,[n,i])),i}registerTransformer(e,i){const s=this.getResolver(e);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(i),!0)}return!1}getResolver(e,i=!0){if(xs(e),e.resolve!==void 0)return e;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s.parent==null){const o=Vr(e)?this:s;return i?this.jitRegister(e,o):null}s=s.parent}else return n;return null}has(e,i=!1){return this.resolvers.has(e)?!0:i&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(xs(e),e.$isResolver)return e.resolve(this,this);let i=this,s;for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i.parent==null){const n=Vr(e)?this:i;return s=this.jitRegister(e,n),s.resolve(i,this)}i=i.parent}else return s.resolve(i,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,i=!1){xs(e);const s=this;let n=s,o;if(i){let r=Gt;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(Nr(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return Gt}else return Nr(o,n,s);return Gt}getFactory(e){let i=Pn.get(e);if(i===void 0){if(Vh(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Pn.set(e,i=new Fh(e,ne.getDependencies(e)))}return i}registerFactory(e,i){Pn.set(e,i)}createChild(e){return new Qi(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,i){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Hh.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Ps(e)){const s=e.register(i);if(!(s instanceof Object)||s.resolve==null){const n=i.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,i);return i.resolvers.set(e,s),s}}}}const Fn=new WeakMap;function Pa(t){return function(e,i,s){if(Fn.has(s))return Fn.get(s);const n=t(e,i,s);return Fn.set(s,n),n}}const ss=Object.freeze({instance(t,e){return new Ue(t,0,e)},singleton(t,e){return new Ue(t,1,e)},transient(t,e){return new Ue(t,2,e)},callback(t,e){return new Ue(t,3,e)},cachedCallback(t,e){return new Ue(t,3,Pa(e))},aliasTo(t,e){return new Ue(e,5,t)}});function xs(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Nr(t,e,i){if(t instanceof Ue&&t.strategy===4){const s=t.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,i);return o}return[t.resolve(e,i)]}const jr="(anonymous)";function zr(t){return typeof t=="object"&&t!==null||typeof t=="function"}const Vh=function(){const t=new WeakMap;let e=!1,i="",s=0;return function(n){return e=t.get(n),e===void 0&&(i=n.toString(),s=i.length,e=s>=29&&s<=100&&i.charCodeAt(s-1)===125&&i.charCodeAt(s-2)<=32&&i.charCodeAt(s-3)===93&&i.charCodeAt(s-4)===101&&i.charCodeAt(s-5)===100&&i.charCodeAt(s-6)===111&&i.charCodeAt(s-7)===99&&i.charCodeAt(s-8)===32&&i.charCodeAt(s-9)===101&&i.charCodeAt(s-10)===118&&i.charCodeAt(s-11)===105&&i.charCodeAt(s-12)===116&&i.charCodeAt(s-13)===97&&i.charCodeAt(s-14)===110&&i.charCodeAt(s-15)===88,t.set(n,e)),e}}(),ws={};function Fa(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=ws[t];if(e!==void 0)return e;const i=t.length;if(i===0)return ws[t]=!1;let s=0;for(let n=0;n<i;++n)if(s=t.charCodeAt(n),n===0&&s===48&&i>1||s<48||s>57)return ws[t]=!1;return ws[t]=!0}default:return!1}}function Ur(t){return`${t.toLowerCase()}:presentation`}const Cs=new Map,Ba=Object.freeze({define(t,e,i){const s=Ur(t);Cs.get(s)===void 0?Cs.set(s,e):Cs.set(s,!1),i.register(ss.instance(s,e))},forTag(t,e){const i=Ur(t),s=Cs.get(i);return s===!1?ne.findResponsibleContainer(e).get(i):s||null}});class Nh{constructor(e,i){this.template=e||null,this.styles=i===void 0?null:Array.isArray(i)?Fe.create(i):i instanceof Fe?i:Fe.create([i])}applyTo(e){const i=e.$fastController;i.template===null&&(i.template=this.template),i.styles===null&&(i.styles=this.styles)}}class te extends ln{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Ba.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(i={})=>new jh(this===te?class extends te{}:this,e,i)}}p([O],te.prototype,"template",void 0);p([O],te.prototype,"styles",void 0);function Bi(t,e,i){return typeof t=="function"?t(e,i):t}class jh{constructor(e,i,s){this.type=e,this.elementDefinition=i,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,i){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||i.elementPrefix}-${s.baseName}`;i.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new Nh(Bi(s.template,l,s),Bi(s.styles,l,s));l.definePresentation(a);let d=Bi(s.shadowOptions,l,s);l.shadowRootMode&&(d?n.shadowOptions||(d.mode=l.shadowRootMode):d!==null&&(d={mode:l.shadowRootMode})),l.defineElement({elementOptions:Bi(s.elementOptions,l,s),shadowOptions:d,attributes:Bi(s.attributes,l,s)})}})}}function Le(t,...e){const i=Us.locate(t);e.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(t.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),Us.locate(s).forEach(o=>i.push(o))})}const Bo={horizontal:"horizontal"};function zh(t,e){let i=t.length;for(;i--;)if(e(t[i],i,t))return i;return-1}function Uh(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function qh(...t){return t.every(e=>e instanceof HTMLElement)}function Gh(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let Nt;function Wh(){if(typeof Nt=="boolean")return Nt;if(!Uh())return Nt=!1,Nt;const t=document.createElement("style"),e=Gh();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Nt=!0}catch{Nt=!1}finally{document.head.removeChild(t)}return Nt}const qr="focus",Gr="focusin",yi="focusout",xi="keydown";var Wr;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(Wr||(Wr={}));const Jt="ArrowDown",ns="ArrowLeft",os="ArrowRight",Yt="ArrowUp",as="Enter",an="Escape",Ti="Home",Si="End",Qh="F2",Jh="PageDown",Yh="PageUp",cs=" ",Lo="Tab",Xh={ArrowDown:Jt,ArrowLeft:ns,ArrowRight:os,ArrowUp:Yt};var wi;(function(t){t.ltr="ltr",t.rtl="rtl"})(wi||(wi={}));function Zh(t,e,i){return Math.min(Math.max(i,t),e)}function $s(t,e,i=0){return[e,i]=[e,i].sort((s,n)=>s-n),e<=t&&t<i}let Kh=0;function Gs(t=""){return`${t}${Kh++}`}const ef=(t,e)=>q`
    <a
        class="control"
        part="control"
        download="${i=>i.download}"
        href="${i=>i.href}"
        hreflang="${i=>i.hreflang}"
        ping="${i=>i.ping}"
        referrerpolicy="${i=>i.referrerpolicy}"
        rel="${i=>i.rel}"
        target="${i=>i.target}"
        type="${i=>i.type}"
        aria-atomic="${i=>i.ariaAtomic}"
        aria-busy="${i=>i.ariaBusy}"
        aria-controls="${i=>i.ariaControls}"
        aria-current="${i=>i.ariaCurrent}"
        aria-describedby="${i=>i.ariaDescribedby}"
        aria-details="${i=>i.ariaDetails}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-errormessage="${i=>i.ariaErrormessage}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-flowto="${i=>i.ariaFlowto}"
        aria-haspopup="${i=>i.ariaHaspopup}"
        aria-hidden="${i=>i.ariaHidden}"
        aria-invalid="${i=>i.ariaInvalid}"
        aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-live="${i=>i.ariaLive}"
        aria-owns="${i=>i.ariaOwns}"
        aria-relevant="${i=>i.ariaRelevant}"
        aria-roledescription="${i=>i.ariaRoledescription}"
        ${Re("control")}
    >
        ${ki(t,e)}
        <span class="content" part="content">
            <slot ${We("defaultSlottedContent")}></slot>
        </span>
        ${$i(t,e)}
    </a>
`;class ie{}p([m({attribute:"aria-atomic"})],ie.prototype,"ariaAtomic",void 0);p([m({attribute:"aria-busy"})],ie.prototype,"ariaBusy",void 0);p([m({attribute:"aria-controls"})],ie.prototype,"ariaControls",void 0);p([m({attribute:"aria-current"})],ie.prototype,"ariaCurrent",void 0);p([m({attribute:"aria-describedby"})],ie.prototype,"ariaDescribedby",void 0);p([m({attribute:"aria-details"})],ie.prototype,"ariaDetails",void 0);p([m({attribute:"aria-disabled"})],ie.prototype,"ariaDisabled",void 0);p([m({attribute:"aria-errormessage"})],ie.prototype,"ariaErrormessage",void 0);p([m({attribute:"aria-flowto"})],ie.prototype,"ariaFlowto",void 0);p([m({attribute:"aria-haspopup"})],ie.prototype,"ariaHaspopup",void 0);p([m({attribute:"aria-hidden"})],ie.prototype,"ariaHidden",void 0);p([m({attribute:"aria-invalid"})],ie.prototype,"ariaInvalid",void 0);p([m({attribute:"aria-keyshortcuts"})],ie.prototype,"ariaKeyshortcuts",void 0);p([m({attribute:"aria-label"})],ie.prototype,"ariaLabel",void 0);p([m({attribute:"aria-labelledby"})],ie.prototype,"ariaLabelledby",void 0);p([m({attribute:"aria-live"})],ie.prototype,"ariaLive",void 0);p([m({attribute:"aria-owns"})],ie.prototype,"ariaOwns",void 0);p([m({attribute:"aria-relevant"})],ie.prototype,"ariaRelevant",void 0);p([m({attribute:"aria-roledescription"})],ie.prototype,"ariaRoledescription",void 0);class tt extends te{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var i;(i=this.control)===null||i===void 0||i.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}p([m],tt.prototype,"download",void 0);p([m],tt.prototype,"href",void 0);p([m],tt.prototype,"hreflang",void 0);p([m],tt.prototype,"ping",void 0);p([m],tt.prototype,"referrerpolicy",void 0);p([m],tt.prototype,"rel",void 0);p([m],tt.prototype,"target",void 0);p([m],tt.prototype,"type",void 0);p([O],tt.prototype,"defaultSlottedContent",void 0);class Mo{}p([m({attribute:"aria-expanded"})],Mo.prototype,"ariaExpanded",void 0);Le(Mo,ie);Le(tt,Ci,Mo);const tf=t=>{const e=t.closest("[dir]");return e!==null&&e.dir==="rtl"?wi.rtl:wi.ltr},La=(t,e)=>q`
    <template class="${i=>i.circular?"circular":""}">
        <div class="control" part="control" style="${i=>i.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let ds=class extends te{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,i=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?i:`${i} ${e}`}}};p([m({attribute:"fill"})],ds.prototype,"fill",void 0);p([m({attribute:"color"})],ds.prototype,"color",void 0);p([m({mode:"boolean"})],ds.prototype,"circular",void 0);const sf=(t,e)=>q`
    <button
        class="control"
        part="control"
        ?autofocus="${i=>i.autofocus}"
        ?disabled="${i=>i.disabled}"
        form="${i=>i.formId}"
        formaction="${i=>i.formaction}"
        formenctype="${i=>i.formenctype}"
        formmethod="${i=>i.formmethod}"
        formnovalidate="${i=>i.formnovalidate}"
        formtarget="${i=>i.formtarget}"
        name="${i=>i.name}"
        type="${i=>i.type}"
        value="${i=>i.value}"
        aria-atomic="${i=>i.ariaAtomic}"
        aria-busy="${i=>i.ariaBusy}"
        aria-controls="${i=>i.ariaControls}"
        aria-current="${i=>i.ariaCurrent}"
        aria-describedby="${i=>i.ariaDescribedby}"
        aria-details="${i=>i.ariaDetails}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-errormessage="${i=>i.ariaErrormessage}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-flowto="${i=>i.ariaFlowto}"
        aria-haspopup="${i=>i.ariaHaspopup}"
        aria-hidden="${i=>i.ariaHidden}"
        aria-invalid="${i=>i.ariaInvalid}"
        aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-live="${i=>i.ariaLive}"
        aria-owns="${i=>i.ariaOwns}"
        aria-pressed="${i=>i.ariaPressed}"
        aria-relevant="${i=>i.ariaRelevant}"
        aria-roledescription="${i=>i.ariaRoledescription}"
        ${Re("control")}
    >
        ${ki(t,e)}
        <span class="content" part="content">
            <slot ${We("defaultSlottedContent")}></slot>
        </span>
        ${$i(t,e)}
    </button>
`,Qr="form-associated-proxy",Jr="ElementInternals",Yr=Jr in window&&"setFormValue"in window[Jr].prototype,Xr=new WeakMap;function us(t){const e=class extends t{constructor(...i){super(...i),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Yr}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const i=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=i?s.concat(Array.from(i)):s;return Object.freeze(n)}else return Gt}valueChanged(i,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(i,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),N.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),N.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Yr)return null;let i=Xr.get(this);return i||(i=this.attachInternals(),Xr.set(this,i)),i}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(i=>this.proxy.removeEventListener(i,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(i,s,n){this.elementInternals?this.elementInternals.setValidity(i,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(i){this.disabled=i}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var i;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Qr),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Qr)),(i=this.shadowRoot)===null||i===void 0||i.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var i;this.removeChild(this.proxy),(i=this.shadowRoot)===null||i===void 0||i.removeChild(this.proxySlot)}validate(i){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,i)}setFormValue(i,s){this.elementInternals&&this.elementInternals.setFormValue(i,s||i)}_keypressHandler(i){switch(i.key){case as:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(i){i.stopPropagation()}};return m({mode:"boolean"})(e.prototype,"disabled"),m({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),m({attribute:"current-value"})(e.prototype,"currentValue"),m(e.prototype,"name"),m({mode:"boolean"})(e.prototype,"required"),O(e.prototype,"value"),e}function Ma(t){class e extends us(t){}class i extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return m({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),m({attribute:"current-checked",converter:$a})(i.prototype,"currentChecked"),O(i.prototype,"defaultChecked"),O(i.prototype,"checked"),i}class nf extends te{}class of extends us(nf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let it=class extends of{constructor(){super(...arguments),this.handleClick=e=>{var i;this.disabled&&((i=this.defaultSlottedContent)===null||i===void 0?void 0:i.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),i==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),i==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const i=Array.from((e=this.control)===null||e===void 0?void 0:e.children);i&&i.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const i=Array.from((e=this.control)===null||e===void 0?void 0:e.children);i&&i.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};p([m({mode:"boolean"})],it.prototype,"autofocus",void 0);p([m({attribute:"form"})],it.prototype,"formId",void 0);p([m],it.prototype,"formaction",void 0);p([m],it.prototype,"formenctype",void 0);p([m],it.prototype,"formmethod",void 0);p([m({mode:"boolean"})],it.prototype,"formnovalidate",void 0);p([m],it.prototype,"formtarget",void 0);p([m],it.prototype,"type",void 0);p([O],it.prototype,"defaultSlottedContent",void 0);class cn{}p([m({attribute:"aria-expanded"})],cn.prototype,"ariaExpanded",void 0);p([m({attribute:"aria-pressed"})],cn.prototype,"ariaPressed",void 0);Le(cn,ie);Le(it,Ci,cn);const ks={none:"none",default:"default",sticky:"sticky"},Tt={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},Ji={default:"default",header:"header",stickyHeader:"sticky-header"};let we=class extends te{constructor(){super(...arguments),this.rowType=Ji.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Ra(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(yi,this.handleFocusout),this.addEventListener(xi,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(yi,this.handleFocusout),this.removeEventListener(xi,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let i=0;switch(e.key){case ns:i=Math.max(0,this.focusColumnIndex-1),this.cellElements[i].focus(),e.preventDefault();break;case os:i=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[i].focus(),e.preventDefault();break;case Ti:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case Si:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Ji.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===Ji.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};p([m({attribute:"grid-template-columns"})],we.prototype,"gridTemplateColumns",void 0);p([m({attribute:"row-type"})],we.prototype,"rowType",void 0);p([O],we.prototype,"rowData",void 0);p([O],we.prototype,"columnDefinitions",void 0);p([O],we.prototype,"cellItemTemplate",void 0);p([O],we.prototype,"headerCellItemTemplate",void 0);p([O],we.prototype,"rowIndex",void 0);p([O],we.prototype,"isActiveRow",void 0);p([O],we.prototype,"activeCellItemTemplate",void 0);p([O],we.prototype,"defaultCellItemTemplate",void 0);p([O],we.prototype,"defaultHeaderCellItemTemplate",void 0);p([O],we.prototype,"cellElements",void 0);function rf(t){const e=t.tagFor(we);return q`
    <${e}
        :rowData="${i=>i}"
        :cellItemTemplate="${(i,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(i,s)=>s.parent.headerCellItemTemplate}"
    ></${e}>
`}const lf=(t,e)=>{const i=rf(t),s=t.tagFor(we);return q`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${_a({property:"rowElements",filter:Fo("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let Ce=class so extends te{constructor(){super(),this.noTabbing=!1,this.generateHeader=ks.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,i,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(r.length-1,i)),a=r[l];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,i)=>{e&&e.length&&(e.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,N.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const i=this.rowElements[0];this.generatedGridTemplateColumns=new Array(i.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((i,s)=>{const n=i;n.rowIndex=s,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let i="";return e.forEach(s=>{i=`${i}${i===""?"":" "}1fr`}),i}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=so.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=so.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Ra(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(qr,this.handleFocus),this.addEventListener(xi,this.handleKeydown),this.addEventListener(yi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),N.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(qr,this.handleFocus),this.removeEventListener(xi,this.handleKeydown),this.removeEventListener(yi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const i=e.target;this.focusRowIndex=this.rowElements.indexOf(i),this.focusColumnIndex=i.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let i;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(e.key){case Yt:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Jt:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Yh:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex-1,i;i>=0;i--){const r=this.rowElements[i];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case Jh:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex+1,i;i<=s;i++){const r=this.rowElements[i];if(r.offsetTop+r.offsetHeight>n){let l=0;this.generateHeader===ks.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-l;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case Ti:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case Si:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,N.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==ks.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===ks.sticky?Ji.stickyHeader:Ji.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};Ce.generateColumns=t=>Object.getOwnPropertyNames(t).map((e,i)=>({columnDataKey:e,gridColumn:`${i}`}));p([m({attribute:"no-tabbing",mode:"boolean"})],Ce.prototype,"noTabbing",void 0);p([m({attribute:"generate-header"})],Ce.prototype,"generateHeader",void 0);p([m({attribute:"grid-template-columns"})],Ce.prototype,"gridTemplateColumns",void 0);p([O],Ce.prototype,"rowsData",void 0);p([O],Ce.prototype,"columnDefinitions",void 0);p([O],Ce.prototype,"rowItemTemplate",void 0);p([O],Ce.prototype,"cellItemTemplate",void 0);p([O],Ce.prototype,"headerCellItemTemplate",void 0);p([O],Ce.prototype,"focusRowIndex",void 0);p([O],Ce.prototype,"focusColumnIndex",void 0);p([O],Ce.prototype,"defaultRowItemTemplate",void 0);p([O],Ce.prototype,"rowElementTag",void 0);p([O],Ce.prototype,"rowElements",void 0);const af=q`
    <template>
        ${t=>t.rowData===null||t.columnDefinition===null||t.columnDefinition.columnDataKey===null?null:t.rowData[t.columnDefinition.columnDataKey]}
    </template>
`,cf=q`
    <template>
        ${t=>t.columnDefinition===null?null:t.columnDefinition.title===void 0?t.columnDefinition.columnDataKey:t.columnDefinition.title}
    </template>
`;let Pt=class extends te{constructor(){super(...arguments),this.cellType=Tt.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,i){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Gr,this.handleFocusin),this.addEventListener(yi,this.handleFocusout),this.addEventListener(xi,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Gr,this.handleFocusin),this.removeEventListener(yi,this.handleFocusout),this.removeEventListener(xi,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Tt.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Tt.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Tt.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case as:case Qh:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Tt.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus(),e.preventDefault()}break}break;case an:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Tt.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=cf.render(this,this);break;case void 0:case Tt.rowHeader:case Tt.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=af.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};p([m({attribute:"cell-type"})],Pt.prototype,"cellType",void 0);p([m({attribute:"grid-column"})],Pt.prototype,"gridColumn",void 0);p([O],Pt.prototype,"rowData",void 0);p([O],Pt.prototype,"columnDefinition",void 0);function df(t){const e=t.tagFor(Pt);return q`
    <${e}
        cell-type="${i=>i.isRowHeader?"rowheader":void 0}"
        grid-column="${(i,s)=>s.index+1}"
        :rowData="${(i,s)=>s.parent.rowData}"
        :columnDefinition="${i=>i}"
    ></${e}>
`}function uf(t){const e=t.tagFor(Pt);return q`
    <${e}
        cell-type="columnheader"
        grid-column="${(i,s)=>s.index+1}"
        :columnDefinition="${i=>i}"
    ></${e}>
`}const hf=(t,e)=>{const i=df(t),s=uf(t);return q`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${_a({property:"cellElements",filter:Fo('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${We("slottedCellElements")}></slot>
        </template>
    `},ff=(t,e)=>q`
        <template
            tabindex="-1"
            role="${i=>!i.cellType||i.cellType==="default"?"gridcell":i.cellType}"
            class="
            ${i=>i.cellType==="columnheader"?"column-header":i.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,pf=(t,e)=>q`
    <template
        role="checkbox"
        aria-checked="${i=>i.checked}"
        aria-required="${i=>i.required}"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        tabindex="${i=>i.disabled?null:0}"
        @keypress="${(i,s)=>i.keypressHandler(s.event)}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        class="${i=>i.readOnly?"readonly":""} ${i=>i.checked?"checked":""} ${i=>i.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${We("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class gf extends te{}class bf extends Ma(gf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let dn=class extends bf{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case cs:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};p([m({attribute:"readonly",mode:"boolean"})],dn.prototype,"readOnly",void 0);p([O],dn.prototype,"defaultSlottedNodes",void 0);p([O],dn.prototype,"indeterminate",void 0);function Ha(t){return qh(t)&&(t.getAttribute("role")==="option"||t instanceof HTMLOptionElement)}class Ct extends te{constructor(e,i,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),i&&(this.initialValue=i),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,i){if(typeof i=="boolean"){this.ariaChecked=i?"true":"false";return}this.ariaChecked=null}contentChanged(e,i){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,i){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,i;return(i=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&i!==void 0?i:""}set value(e){const i=`${e??""}`;this._value=i,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=i),V.notify(this,"value")}get value(){var e;return V.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}p([O],Ct.prototype,"checked",void 0);p([O],Ct.prototype,"content",void 0);p([O],Ct.prototype,"defaultSelected",void 0);p([m({mode:"boolean"})],Ct.prototype,"disabled",void 0);p([m({attribute:"selected",mode:"boolean"})],Ct.prototype,"selectedAttribute",void 0);p([O],Ct.prototype,"selected",void 0);p([m({attribute:"value",mode:"fromView"})],Ct.prototype,"initialValue",void 0);class Ii{}p([O],Ii.prototype,"ariaChecked",void 0);p([O],Ii.prototype,"ariaPosInSet",void 0);p([O],Ii.prototype,"ariaSelected",void 0);p([O],Ii.prototype,"ariaSetSize",void 0);Le(Ii,ie);Le(Ct,Ci,Ii);class Ae extends te{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,i;return(i=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&i!==void 0?i:0}get options(){return V.track(this,"options"),this._options}set options(e){this._options=e,V.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const i=e.target.closest("option,[role=option]");if(i&&!i.disabled)return this.selectedIndex=this.options.indexOf(i),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`^${e}`,"gi");return this.options.filter(s=>s.text.trim().match(i))}getSelectableIndex(e=this.selectedIndex,i){const s=e>i?-1:e<i?1:0,n=e+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,l,a)=>!r&&!l.disabled&&a<n?l:r,o);break}case 1:{o=this.options.reduce((r,l,a)=>!r&&!l.disabled&&a>n?l:r,o);break}}return this.options.indexOf(o)}handleChange(e,i){switch(i){case"selected":{Ae.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Ae.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const i=e.key;switch(i){case Ti:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Jt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Yt:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case Si:{e.preventDefault(),this.selectLastOption();break}case Lo:return this.focusAndScrollOptionIntoView(),!0;case as:case an:return!0;case cs:if(this.typeaheadExpired)return!0;default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,i){this.ariaMultiSelectable=i?"true":null}selectedIndexChanged(e,i){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,i),o=n>-1?n:e;this.selectedIndex=o,i===o&&this.selectedIndexChanged(i,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,i){var s;const n=i.filter(Ae.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=V.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,i;this.disabled||(this.selectedIndex=(i=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>!s.disabled))!==null&&i!==void 0?i:-1)}selectLastOption(){this.disabled||(this.selectedIndex=zh(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,i;this.selectedIndex=(i=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>s.defaultSelected))!==null&&i!==void 0?i:-1}setSelectedOptions(){var e,i,s;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,i){this.options=i.reduce((n,o)=>(Ha(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=Gs("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,i){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}}Ae.slottedOptionFilter=t=>Ha(t)&&!t.hidden;Ae.TYPE_AHEAD_TIMEOUT_MS=1e3;p([m({mode:"boolean"})],Ae.prototype,"disabled",void 0);p([O],Ae.prototype,"selectedIndex",void 0);p([O],Ae.prototype,"selectedOptions",void 0);p([O],Ae.prototype,"slottedOptions",void 0);p([O],Ae.prototype,"typeaheadBuffer",void 0);class Xt{}p([O],Xt.prototype,"ariaActiveDescendant",void 0);p([O],Xt.prototype,"ariaDisabled",void 0);p([O],Xt.prototype,"ariaExpanded",void 0);p([O],Xt.prototype,"ariaMultiSelectable",void 0);Le(Xt,ie);Le(Ae,Xt);const Bn={above:"above",below:"below"};function no(t){const e=t.parentElement;if(e)return e;{const i=t.getRootNode();if(i.host instanceof HTMLElement)return i.host}return null}function mf(t,e){let i=e;for(;i!==null;){if(i===t)return!0;i=no(i)}return!1}const yt=document.createElement("div");function vf(t){return t instanceof ln}class Ho{setProperty(e,i){N.queueUpdate(()=>this.target.setProperty(e,i))}removeProperty(e){N.queueUpdate(()=>this.target.removeProperty(e))}}class yf extends Ho{constructor(e){super();const i=new CSSStyleSheet;i[ya]=!0,this.target=i.cssRules[i.insertRule(":host{}")].style,e.$fastController.addStyles(Fe.create([i]))}}class xf extends Ho{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class wf extends Ho{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const i=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[i].style}}}class Va{constructor(e){this.store=new Map,this.target=null;const i=e.$fastController;this.style=document.createElement("style"),i.addStyles(this.style),V.getNotifier(i).subscribe(this,"isConnected"),this.handleChange(i,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,i]of this.store.entries())this.target.setProperty(e,i)}setProperty(e,i){this.store.set(e,i),N.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,i)})}removeProperty(e){this.store.delete(e),N.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,i){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}p([O],Va.prototype,"target",void 0);class Cf{constructor(e){this.target=e.style}setProperty(e,i){N.queueUpdate(()=>this.target.setProperty(e,i))}removeProperty(e){N.queueUpdate(()=>this.target.removeProperty(e))}}class de{setProperty(e,i){de.properties[e]=i;for(const s of de.roots.values())ni.getOrCreate(de.normalizeRoot(s)).setProperty(e,i)}removeProperty(e){delete de.properties[e];for(const i of de.roots.values())ni.getOrCreate(de.normalizeRoot(i)).removeProperty(e)}static registerRoot(e){const{roots:i}=de;if(!i.has(e)){i.add(e);const s=ni.getOrCreate(this.normalizeRoot(e));for(const n in de.properties)s.setProperty(n,de.properties[n])}}static unregisterRoot(e){const{roots:i}=de;if(i.has(e)){i.delete(e);const s=ni.getOrCreate(de.normalizeRoot(e));for(const n in de.properties)s.removeProperty(n)}}static normalizeRoot(e){return e===yt?document:e}}de.roots=new Set;de.properties={};const Ln=new WeakMap,$f=N.supportsAdoptedStyleSheets?yf:Va,ni=Object.freeze({getOrCreate(t){if(Ln.has(t))return Ln.get(t);let e;return t===yt?e=new de:t instanceof Document?e=N.supportsAdoptedStyleSheets?new xf:new wf:vf(t)?e=new $f(t):e=new Cf(t),Ln.set(t,e),e}});class Oe extends Ta{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Oe.uniqueId(),Oe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Oe({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Oe.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const i=le.getOrCreate(e).get(this);if(i!==void 0)return i;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,i){return this._appliedTo.add(e),i instanceof Oe&&(i=this.alias(i)),le.getOrCreate(e).set(this,i),this}deleteValueFor(e){return this._appliedTo.delete(e),le.existsFor(e)&&le.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(yt,e),this}subscribe(e,i){const s=this.getOrCreateSubscriberSet(i);i&&!le.existsFor(i)&&le.getOrCreate(i),s.has(e)||s.add(e)}unsubscribe(e,i){const s=this.subscribers.get(i||this);s&&s.has(e)&&s.delete(e)}notify(e){const i=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(i)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(s=>s.handleChange(i))}alias(e){return i=>e.getValueFor(i)}}Oe.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();Oe.tokensById=new Map;class kf{startReflection(e,i){e.subscribe(this,i),this.handleChange({token:e,target:i})}stopReflection(e,i){e.unsubscribe(this,i),this.remove(e,i)}handleChange(e){const{token:i,target:s}=e;this.add(i,s)}add(e,i){ni.getOrCreate(i).setProperty(e.cssCustomProperty,this.resolveCSSValue(le.getOrCreate(i).get(e)))}remove(e,i){ni.getOrCreate(i).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Tf{constructor(e,i,s){this.source=e,this.token=i,this.node=s,this.dependencies=new Set,this.observer=V.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,Wi))}catch(e){console.error(e)}}}class Sf{constructor(){this.values=new Map}set(e,i){this.values.get(e)!==i&&(this.values.set(e,i),V.getNotifier(this).notify(e.id))}get(e){return V.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),V.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const Li=new WeakMap,Mi=new WeakMap;class le{constructor(e){this.target=e,this.store=new Sf,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(i,s)=>{const n=Oe.getTokenById(s);n&&(n.notify(this.target),this.updateCSSTokenReflection(i,n))}},Li.set(e,this),V.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof ln?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Li.get(e)||new le(e)}static existsFor(e){return Li.has(e)}static findParent(e){if(yt!==e.target){let i=no(e.target);for(;i!==null;){if(Li.has(i))return Li.get(i);i=no(i)}return le.getOrCreate(yt)}return null}static findClosestAssignedNode(e,i){let s=i;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==yt?le.getOrCreate(yt):null}while(s!==null);return null}get parent(){return Mi.get(this)||null}updateCSSTokenReflection(e,i){if(Oe.isCSSDesignToken(i)){const s=this.parent,n=this.isReflecting(i);if(s){const o=s.get(i),r=e.get(i);o!==r&&!n?this.reflectToCSS(i):o===r&&n&&this.stopReflectToCSS(i)}else n||this.reflectToCSS(i)}}has(e){return this.assignedValues.has(e)}get(e){const i=this.store.get(e);if(i!==void 0)return i;const s=this.getRaw(e);if(s!==void 0)return this.hydrate(e,s),this.get(e)}getRaw(e){var i;return this.assignedValues.has(e)?this.assignedValues.get(e):(i=le.findClosestAssignedNode(e,this))===null||i===void 0?void 0:i.getRaw(e)}set(e,i){Oe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,i),Oe.isDerivedDesignTokenValue(i)?this.setupBindingObserver(e,i):this.store.set(e,i)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const i=this.getRaw(e);i?this.hydrate(e,i):this.store.delete(e)}bind(){const e=le.findParent(this);e&&e.appendChild(this);for(const i of this.assignedValues.keys())i.notify(this.target)}unbind(){this.parent&&Mi.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Mi.get(e).removeChild(e);const i=this.children.filter(s=>e.contains(s));Mi.set(e,this),this.children.push(e),i.forEach(s=>e.appendChild(s)),V.getNotifier(this.store).subscribe(e);for(const[s,n]of this.store.all())e.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n),e.updateCSSTokenReflection(e.store,s)}removeChild(e){const i=this.children.indexOf(e);if(i!==-1&&this.children.splice(i,1),V.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const s=Mi.delete(e);for(const[n]of this.store.all())e.hydrate(n,e.getRaw(n)),e.updateCSSTokenReflection(e.store,n);return s}contains(e){return mf(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),le.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),le.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,i){const s=Oe.getTokenById(i);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(e,i){if(!this.has(e)){const s=this.bindingObservers.get(e);Oe.isDerivedDesignTokenValue(i)?s?s.source!==i&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,i)):this.setupBindingObserver(e,i):(s&&this.tearDownBindingObserver(e),this.store.set(e,i))}}setupBindingObserver(e,i){const s=new Tf(i,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}le.cssCustomPropertyReflector=new kf;p([O],le.prototype,"children",void 0);function If(t){return Oe.from(t)}const Na=Object.freeze({create:If,notifyConnection(t){return!t.isConnected||!le.existsFor(t)?!1:(le.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!le.existsFor(t)?!1:(le.getOrCreate(t).unbind(),!0)},registerRoot(t=yt){de.registerRoot(t)},unregisterRoot(t=yt){de.unregisterRoot(t)}}),Mn=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Hn=new Map,Fs=new Map;let hi=null;const Hi=ne.createInterface(t=>t.cachedCallback(e=>(hi===null&&(hi=new za(null,e)),hi))),ja=Object.freeze({tagFor(t){return Fs.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||ne.findResponsibleContainer(t).get(Hi)},getOrCreate(t){if(!t)return hi===null&&(hi=ne.getOrCreateDOMContainer().get(Hi)),hi;const e=t.$$designSystem$$;if(e)return e;const i=ne.getOrCreateDOMContainer(t);if(i.has(Hi,!1))return i.get(Hi);{const s=new za(t,i);return i.register(ss.instance(Hi,s)),s}}});function Of(t,e,i){return typeof t=="string"?{name:t,type:e,callback:i}:t}class za{constructor(e,i){this.owner=e,this.container=i,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Mn.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const i=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(l,a,d){const c=Of(l,a,d),{name:h,callback:b,baseClass:C}=c;let{type:A}=c,E=h,G=Hn.get(E),R=!0;for(;G;){const M=n(E,A,G);switch(M){case Mn.ignoreDuplicate:return;case Mn.definitionCallbackOnly:R=!1,G=void 0;break;default:E=M,G=Hn.get(E);break}}R&&((Fs.has(A)||A===te)&&(A=class extends A{}),Hn.set(E,A),Fs.set(A,E),C&&Fs.set(C,E)),s.push(new Af(i,E,A,o,b,R))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Na.registerRoot(this.designTokenRoot)),i.registerWithContext(r,...e);for(const l of s)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class Af{constructor(e,i,s,n,o,r){this.container=e,this.name=i,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){Ba.define(this.name,e,this.container)}defineElement(e){this.definition=new rn(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ja.tagFor(e)}}const Rf=(t,e)=>q`
    <template role="${i=>i.role}" aria-orientation="${i=>i.orientation}"></template>
`,Ef={separator:"separator"};let Vo=class extends te{constructor(){super(...arguments),this.role=Ef.separator,this.orientation=Bo.horizontal}};p([m],Vo.prototype,"role",void 0);p([m],Vo.prototype,"orientation",void 0);const _f=(t,e)=>q`
    <template
        aria-checked="${i=>i.ariaChecked}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-posinset="${i=>i.ariaPosInSet}"
        aria-selected="${i=>i.ariaSelected}"
        aria-setsize="${i=>i.ariaSetSize}"
        class="${i=>[i.checked&&"checked",i.selected&&"selected",i.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ki(t,e)}
        <span class="content" part="content">
            <slot ${We("content")}></slot>
        </span>
        ${$i(t,e)}
    </template>
`;class un extends Ae{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(i=>i.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,i){var s,n;this.ariaActiveDescendant=(n=(s=this.options[i])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((i,s)=>{i.checked=$s(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=$s(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=$s(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((i,s)=>{i.checked=$s(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var i;if(!this.multiple)return super.clickHandler(e);const s=(i=e.target)===null||i===void 0?void 0:i.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:i,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,i){case Ti:{this.checkFirstOption(s);return}case Jt:{this.checkNextOption(s);return}case Yt:{this.checkPreviousOption(s);return}case Si:{this.checkLastOption(s);return}case Lo:return this.focusAndScrollOptionIntoView(),!0;case an:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case cs:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,i){var s;this.ariaMultiSelectable=i?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=i?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,i){var s;const n=Math.max(0,parseInt((s=i==null?void 0:i.toFixed())!==null&&s!==void 0?s:"",10));n!==i&&N.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(s=>!s.disabled),i=!e.every(s=>s.selected);e.forEach(s=>s.selected=i),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,i){if(!this.multiple){super.typeaheadBufferChanged(e,i);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(i=>i.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}p([O],un.prototype,"activeIndex",void 0);p([m({mode:"boolean"})],un.prototype,"multiple",void 0);p([m({converter:et})],un.prototype,"size",void 0);class Df extends te{}class Pf extends us(Df){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ff={text:"text"};let ze=class extends Pf{constructor(){super(...arguments),this.type=Ff.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&N.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({attribute:"readonly",mode:"boolean"})],ze.prototype,"readOnly",void 0);p([m({mode:"boolean"})],ze.prototype,"autofocus",void 0);p([m],ze.prototype,"placeholder",void 0);p([m],ze.prototype,"type",void 0);p([m],ze.prototype,"list",void 0);p([m({converter:et})],ze.prototype,"maxlength",void 0);p([m({converter:et})],ze.prototype,"minlength",void 0);p([m],ze.prototype,"pattern",void 0);p([m({converter:et})],ze.prototype,"size",void 0);p([m({mode:"boolean"})],ze.prototype,"spellcheck",void 0);p([O],ze.prototype,"defaultSlottedNodes",void 0);class No{}Le(No,ie);Le(ze,Ci,No);const Zr=44,Bf=(t,e)=>q`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${Po(i=>typeof i.value=="number",q`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${i=>Zr*i.percentComplete/100}px ${Zr}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,q`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Oi extends te{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,i=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=i-e;this.percentComplete=n===0?0:Math.fround((s-e)/n*100)}}p([m({converter:et})],Oi.prototype,"value",void 0);p([m({converter:et})],Oi.prototype,"min",void 0);p([m({converter:et})],Oi.prototype,"max",void 0);p([m({mode:"boolean"})],Oi.prototype,"paused",void 0);p([O],Oi.prototype,"percentComplete",void 0);const Lf=(t,e)=>q`
    <template
        role="radiogroup"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        @focusout="${(i,s)=>i.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${i=>i.orientation===Bo.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${We({property:"slottedRadioButtons",filter:Fo("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let Ft=class extends te{constructor(){super(...arguments),this.orientation=Bo.horizontal,this.radioChangeHandler=e=>{const i=e.target;i.checked&&(this.slottedRadioButtons.forEach(s=>{s!==i&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=i,this.value=i.value,i.setAttribute("tabindex","0"),this.focusedRadio=i),e.stopPropagation()},this.moveToRadioByIndex=(e,i)=>{const s=e[i];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const i=this.slottedRadioButtons,s=e.target,n=s!==null?i.indexOf(s):0,o=this.focusedRadio?i.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===i.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=i[0],this.focusedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const i=e.target;if(i){const s=this.slottedRadioButtons;i.checked||s.indexOf(i)===0?(i.setAttribute("tabindex","0"),this.selectedRadio=i):(i.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=i}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,i,s)=>e===i.length&&this.isInsideToolbar&&s===os,this.shouldMoveOffGroupToTheLeft=(e,i)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&i===ns,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,i,e.key)){this.moveRightOffGroup();return}else s===i.length&&(s=0);for(;s<i.length&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;if(s+1>=i.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(i,s);break}},this.moveLeft=e=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)-1:0,s=s<0?i.length-1:s,this.shouldMoveOffGroupToTheLeft(i,e.key)){this.moveLeftOffGroup();return}for(;s>=0&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;s-1<0?s=i.length-1:s-=1}else{this.moveToRadioByIndex(i,s);break}},this.keydownHandler=e=>{const i=e.key;if(i in Xh&&this.isInsideFoundationToolbar)return!0;switch(i){case as:{this.checkFocusedRadio();break}case os:case Jt:{this.direction===wi.ltr?this.moveRight(e):this.moveLeft(e);break}case ns:case Yt:{this.direction===wi.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,i){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=tf(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),i=e?e.length:0;if(i>1){const n=e[i-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};p([m({attribute:"readonly",mode:"boolean"})],Ft.prototype,"readOnly",void 0);p([m({attribute:"disabled",mode:"boolean"})],Ft.prototype,"disabled",void 0);p([m],Ft.prototype,"name",void 0);p([m],Ft.prototype,"value",void 0);p([m],Ft.prototype,"orientation",void 0);p([O],Ft.prototype,"childItems",void 0);p([O],Ft.prototype,"slottedRadioButtons",void 0);const Mf=(t,e)=>q`
    <template
        role="radio"
        class="${i=>i.checked?"checked":""} ${i=>i.readOnly?"readonly":""}"
        aria-checked="${i=>i.checked}"
        aria-required="${i=>i.required}"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        @keypress="${(i,s)=>i.keypressHandler(s.event)}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${We("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Hf extends te{}class Vf extends Ma(Hf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let hn=class extends Vf{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case cs:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,i;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(i=this.defaultChecked)!==null&&i!==void 0?i:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};p([m({attribute:"readonly",mode:"boolean"})],hn.prototype,"readOnly",void 0);p([O],hn.prototype,"name",void 0);p([O],hn.prototype,"defaultSlottedNodes",void 0);function Nf(t,e,i){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}class jf extends un{}class zf extends us(jf){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Bt extends zf{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Gs("listbox-"),this.maxHeight=0}openChanged(e,i){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,N.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return V.track(this,"value"),this._value}set value(e){var i,s,n,o,r,l,a;const d=`${this._value}`;if(!((i=this._options)===null||i===void 0)&&i.length){const c=this._options.findIndex(C=>C.value===e),h=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,b=(r=(o=this._options[c])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(c===-1||h!==b)&&(e="",this.selectedIndex=c),e=(a=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&a!==void 0?a:e}d!==e&&(this._value=e,super.valueChanged(d,e),V.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var i,s;this.$fastController.isConnected&&(this.value=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,i){super.selectedIndexChanged(e,i),this.updateValue()}positionChanged(e,i){this.positionAttribute=i,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?Bn.above:Bn.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Bn.above?~~e.top:~~s}get displayValue(){var e,i;return V.track(this,"displayValue"),(i=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&i!==void 0?i:""}disabledChanged(e,i){super.disabledChanged&&super.disabledChanged(e,i),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const i=e.target.closest("option,[role=option]");if(i&&i.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var i;if(super.focusoutHandler(e),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((i=this.options)===null||i===void 0)&&i.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,i){super.handleChange(e,i),i==="value"&&this.updateValue()}slottedOptionsChanged(e,i){this.options.forEach(s=>{V.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,i),this.options.forEach(s=>{V.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var i;return e.offsetX>=0&&e.offsetX<=((i=this.listbox)===null||i===void 0?void 0:i.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,i){super.multipleChanged(e,i),this.proxy&&(this.proxy.multiple=i)}selectedOptionsChanged(e,i){var s;super.selectedOptionsChanged(e,i),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const l=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);l&&(l.selected=n.selected)})}setDefaultSelectedOption(){var e;const i=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Ae.slottedOptionFilter),s=i==null?void 0:i.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const i=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);i&&this.proxy.options.add(i)}))}keydownHandler(e){super.keydownHandler(e);const i=e.key||e.key.charCodeAt(0);switch(i){case cs:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Ti:case Si:{e.preventDefault();break}case as:{e.preventDefault(),this.open=!this.open;break}case an:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Lo:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(i===Jt||i===Yt)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,i){super.sizeChanged(e,i),this.proxy&&(this.proxy.size=i)}updateDisplayValue(){this.collapsible&&V.notify(this,"displayValue")}}p([m({attribute:"open",mode:"boolean"})],Bt.prototype,"open",void 0);p([Uu],Bt.prototype,"collapsible",null);p([O],Bt.prototype,"control",void 0);p([m({attribute:"position"})],Bt.prototype,"positionAttribute",void 0);p([O],Bt.prototype,"position",void 0);p([O],Bt.prototype,"maxHeight",void 0);class jo{}p([O],jo.prototype,"ariaControls",void 0);Le(jo,Xt);Le(Bt,Ci,jo);const Uf=(t,e)=>q`
    <template
        class="${i=>[i.collapsible&&"collapsible",i.collapsible&&i.open&&"open",i.disabled&&"disabled",i.collapsible&&i.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${i=>i.ariaActiveDescendant}"
        aria-controls="${i=>i.ariaControls}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-haspopup="${i=>i.collapsible?"listbox":null}"
        aria-multiselectable="${i=>i.ariaMultiSelectable}"
        ?open="${i=>i.open}"
        role="combobox"
        tabindex="${i=>i.disabled?null:"0"}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusin="${(i,s)=>i.focusinHandler(s.event)}"
        @focusout="${(i,s)=>i.focusoutHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        @mousedown="${(i,s)=>i.mousedownHandler(s.event)}"
    >
        ${Po(i=>i.collapsible,q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${i=>i.disabled}"
                    ${Re("control")}
                >
                    ${ki(t,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${i=>i.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${$i(t,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${i=>i.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${i=>i.disabled}"
            ?hidden="${i=>i.collapsible?!i.open:!1}"
            ${Re("listbox")}
        >
            <slot
                ${We({filter:Ae.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,qf=(t,e)=>q`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Gf extends te{}const Wf=(t,e)=>q`
    <template slot="tab" role="tab" aria-disabled="${i=>i.disabled}">
        <slot></slot>
    </template>
`;class Ua extends te{}p([m({mode:"boolean"})],Ua.prototype,"disabled",void 0);const Qf=(t,e)=>q`
    <template class="${i=>i.orientation}">
        ${ki(t,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${We("tabs")}></slot>

            ${Po(i=>i.showActiveIndicator,q`
                    <div
                        ${Re("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${$i(t,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${We("tabpanels")}></slot>
        </div>
    </template>
`,oo={horizontal:"horizontal"};class $t extends te{constructor(){super(...arguments),this.orientation=oo.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",i="gridRow",s=this.isHorizontal()?e:i;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const l=this.tabIds[o],a=this.tabpanelIds[o];n.setAttribute("id",l),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",a),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=l)}n.style[e]="",n.style[i]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,i)=>{const s=this.tabIds[i],n=this.tabpanelIds[i];e.setAttribute("id",n),e.setAttribute("aria-labelledby",s),this.activeTabIndex!==i?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const i=e.currentTarget;i.nodeType===1&&this.isFocusableElement(i)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(i),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ns:e.preventDefault(),this.adjustBackward(e);break;case os:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case Yt:e.preventDefault(),this.adjustBackward(e);break;case Jt:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case Ti:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case Si:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)+1:1,s===i.length&&(s=0);s<i.length&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else{if(this.activetab&&s===i.indexOf(this.activetab))break;s+1>=i.length?s=0:s+=1}},this.adjustBackward=e=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)-1:0,s=s<0?i.length-1:s;s>=0&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else s-1<0?s=i.length-1:s-=1},this.moveToTabByIndex=(e,i)=>{const s=e[i];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=i,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,i){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var i;return(i=e.getAttribute("id"))!==null&&i!==void 0?i:`tab-${Gs()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var i;return(i=e.getAttribute("id"))!==null&&i!==void 0?i:`panel-${Gs()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===oo.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",i=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${i}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${i}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const i=this.tabs.filter(r=>this.isFocusableElement(r)),s=i.indexOf(this.activetab),n=Zh(0,i.length-1,s+e),o=this.tabs.indexOf(i[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}p([m],$t.prototype,"orientation",void 0);p([m],$t.prototype,"activeid",void 0);p([O],$t.prototype,"tabs",void 0);p([O],$t.prototype,"tabpanels",void 0);p([m({mode:"boolean"})],$t.prototype,"activeindicator",void 0);p([O],$t.prototype,"activeIndicatorRef",void 0);p([O],$t.prototype,"showActiveIndicator",void 0);Le($t,Ci);class Jf extends te{}class Yf extends us(Jf){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const qa={none:"none"};let _e=class extends Yf{constructor(){super(...arguments),this.resize=qa.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({mode:"boolean"})],_e.prototype,"readOnly",void 0);p([m],_e.prototype,"resize",void 0);p([m({mode:"boolean"})],_e.prototype,"autofocus",void 0);p([m({attribute:"form"})],_e.prototype,"formId",void 0);p([m],_e.prototype,"list",void 0);p([m({converter:et})],_e.prototype,"maxlength",void 0);p([m({converter:et})],_e.prototype,"minlength",void 0);p([m],_e.prototype,"name",void 0);p([m],_e.prototype,"placeholder",void 0);p([m({converter:et,mode:"fromView"})],_e.prototype,"cols",void 0);p([m({converter:et,mode:"fromView"})],_e.prototype,"rows",void 0);p([m({mode:"boolean"})],_e.prototype,"spellcheck",void 0);p([O],_e.prototype,"defaultSlottedNodes",void 0);Le(_e,No);const Xf=(t,e)=>q`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
            ${i=>i.resize!==qa.none?`resize-${i.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${We("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${i=>i.autofocus}"
            cols="${i=>i.cols}"
            ?disabled="${i=>i.disabled}"
            form="${i=>i.form}"
            list="${i=>i.list}"
            maxlength="${i=>i.maxlength}"
            minlength="${i=>i.minlength}"
            name="${i=>i.name}"
            placeholder="${i=>i.placeholder}"
            ?readonly="${i=>i.readOnly}"
            ?required="${i=>i.required}"
            rows="${i=>i.rows}"
            ?spellcheck="${i=>i.spellcheck}"
            :value="${i=>i.value}"
            aria-atomic="${i=>i.ariaAtomic}"
            aria-busy="${i=>i.ariaBusy}"
            aria-controls="${i=>i.ariaControls}"
            aria-current="${i=>i.ariaCurrent}"
            aria-describedby="${i=>i.ariaDescribedby}"
            aria-details="${i=>i.ariaDetails}"
            aria-disabled="${i=>i.ariaDisabled}"
            aria-errormessage="${i=>i.ariaErrormessage}"
            aria-flowto="${i=>i.ariaFlowto}"
            aria-haspopup="${i=>i.ariaHaspopup}"
            aria-hidden="${i=>i.ariaHidden}"
            aria-invalid="${i=>i.ariaInvalid}"
            aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
            aria-label="${i=>i.ariaLabel}"
            aria-labelledby="${i=>i.ariaLabelledby}"
            aria-live="${i=>i.ariaLive}"
            aria-owns="${i=>i.ariaOwns}"
            aria-relevant="${i=>i.ariaRelevant}"
            aria-roledescription="${i=>i.ariaRoledescription}"
            @input="${(i,s)=>i.handleTextInput()}"
            @change="${i=>i.handleChange()}"
            ${Re("control")}
        ></textarea>
    </template>
`,Zf=(t,e)=>q`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${We({property:"defaultSlottedNodes",filter:Nf})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ki(t,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${i=>i.handleTextInput()}"
                @change="${i=>i.handleChange()}"
                ?autofocus="${i=>i.autofocus}"
                ?disabled="${i=>i.disabled}"
                list="${i=>i.list}"
                maxlength="${i=>i.maxlength}"
                minlength="${i=>i.minlength}"
                pattern="${i=>i.pattern}"
                placeholder="${i=>i.placeholder}"
                ?readonly="${i=>i.readOnly}"
                ?required="${i=>i.required}"
                size="${i=>i.size}"
                ?spellcheck="${i=>i.spellcheck}"
                :value="${i=>i.value}"
                type="${i=>i.type}"
                aria-atomic="${i=>i.ariaAtomic}"
                aria-busy="${i=>i.ariaBusy}"
                aria-controls="${i=>i.ariaControls}"
                aria-current="${i=>i.ariaCurrent}"
                aria-describedby="${i=>i.ariaDescribedby}"
                aria-details="${i=>i.ariaDetails}"
                aria-disabled="${i=>i.ariaDisabled}"
                aria-errormessage="${i=>i.ariaErrormessage}"
                aria-flowto="${i=>i.ariaFlowto}"
                aria-haspopup="${i=>i.ariaHaspopup}"
                aria-hidden="${i=>i.ariaHidden}"
                aria-invalid="${i=>i.ariaInvalid}"
                aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
                aria-label="${i=>i.ariaLabel}"
                aria-labelledby="${i=>i.ariaLabelledby}"
                aria-live="${i=>i.ariaLive}"
                aria-owns="${i=>i.ariaOwns}"
                aria-relevant="${i=>i.ariaRelevant}"
                aria-roledescription="${i=>i.ariaRoledescription}"
                ${Re("control")}
            />
            ${$i(t,e)}
        </div>
    </template>
`,Et="not-allowed",Kf=":host([hidden]){display:none}";function $e(t){return`${Kf}:host{display:${t}}`}const xe=Wh()?"focus-visible":"focus";function ep(t){return ja.getOrCreate(t).withPrefix("vscode")}function tp(t){window.addEventListener("load",()=>{new MutationObserver(()=>{Kr(t)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Kr(t)})}function Kr(t){const e=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[n,o]of t){let r=e.getPropertyValue(n).toString();if(s==="vscode-high-contrast")r.length===0&&o.name.includes("background")&&(r="transparent"),o.name==="button-icon-hover-background"&&(r="transparent");else if(s==="vscode-high-contrast-light"){if(r.length===0&&o.name.includes("background"))switch(o.name){case"button-primary-hover-background":r="#0F4A85";break;case"button-secondary-hover-background":r="transparent";break;case"button-icon-hover-background":r="transparent";break}}else o.name==="contrast-active-border"&&(r="transparent");o.setValueFor(i,r)}}}const el=new Map;let tl=!1;function I(t,e){const i=Na.create(t);if(e){if(e.includes("--fake-vscode-token")){const s="id"+Math.random().toString(16).slice(2);e=`${e}-${s}`}el.set(e,i)}return tl||(tp(el),tl=!0),i}const ip=I("background","--vscode-editor-background").withDefault("#1e1e1e"),z=I("border-width").withDefault(1),Ga=I("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");I("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const hs=I("corner-radius").withDefault(0),fi=I("corner-radius-round").withDefault(2),F=I("design-unit").withDefault(4),Zt=I("disabled-opacity").withDefault(.4),ae=I("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Qe=I("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");I("font-weight","--vscode-font-weight").withDefault("400");const ve=I("foreground","--vscode-foreground").withDefault("#cccccc"),Bs=I("input-height").withDefault("26"),zo=I("input-min-width").withDefault("100px"),Ee=I("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Be=I("type-ramp-base-line-height").withDefault("normal"),Wa=I("type-ramp-minus1-font-size").withDefault("11px"),Qa=I("type-ramp-minus1-line-height").withDefault("16px");I("type-ramp-minus2-font-size").withDefault("9px");I("type-ramp-minus2-line-height").withDefault("16px");I("type-ramp-plus1-font-size").withDefault("16px");I("type-ramp-plus1-line-height").withDefault("24px");const sp=I("scrollbarWidth").withDefault("10px"),np=I("scrollbarHeight").withDefault("10px"),op=I("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),rp=I("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),lp=I("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Ja=I("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Ya=I("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Uo=I("button-border","--vscode-button-border").withDefault("transparent"),il=I("button-icon-background").withDefault("transparent"),ap=I("button-icon-corner-radius").withDefault("5px"),cp=I("button-icon-outline-offset").withDefault(0),sl=I("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),dp=I("button-icon-padding").withDefault("3px"),pi=I("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Xa=I("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Za=I("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Vn=I("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),up=I("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),hp=I("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),fp=I("button-padding-horizontal").withDefault("11px"),pp=I("button-padding-vertical").withDefault("4px"),gt=I("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),oi=I("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),gp=I("checkbox-corner-radius").withDefault(3);I("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const zt=I("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),gi=I("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),bp=I("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),mp=I("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Ts=I("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),At=I("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");I("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const vp=I("dropdown-list-max-height").withDefault("200px"),Ut=I("input-background","--vscode-input-background").withDefault("#3c3c3c"),Ka=I("input-foreground","--vscode-input-foreground").withDefault("#cccccc");I("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const nl=I("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),yp=I("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),xp=I("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),wp=I("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),ii=I("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Cp=I("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");I("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");I("panel-view-border","--vscode-panel-border").withDefault("#80808059");const $p=I("tag-corner-radius").withDefault("2px"),kp=(t,e)=>re`
	${$e("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Qe};
		font-size: ${Wa};
		line-height: ${Qa};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Ja};
		border: calc(${z} * 1px) solid ${Uo};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Ya};
		display: flex;
		height: calc(${F} * 4px);
		justify-content: center;
		min-width: calc(${F} * 4px + 2px);
		min-height: calc(${F} * 4px + 2px);
		padding: 3px 6px;
	}
`;class Tp extends ds{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const Sp=Tp.compose({baseName:"badge",template:La,styles:kp});function Ip(t,e,i,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}const Op=re`
	${$e("inline-flex")} :host {
		outline: none;
		font-family: ${Qe};
		font-size: ${Ee};
		line-height: ${Be};
		color: ${Xa};
		background: ${pi};
		border-radius: calc(${fi} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${pp} ${fp};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${z} * 1px) solid ${Uo};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Za};
	}
	:host(:active) {
		background: ${pi};
	}
	.control:${xe} {
		outline: calc(${z} * 1px) solid ${ae};
		outline-offset: calc(${z} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Zt};
		background: ${pi};
		cursor: ${Et};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${F} * 4px);
		height: calc(${F} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Ap=re`
	:host([appearance='primary']) {
		background: ${pi};
		color: ${Xa};
	}
	:host([appearance='primary']:hover) {
		background: ${Za};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${pi};
	}
	:host([appearance='primary']) .control:${xe} {
		outline: calc(${z} * 1px) solid ${ae};
		outline-offset: calc(${z} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${pi};
	}
`,Rp=re`
	:host([appearance='secondary']) {
		background: ${Vn};
		color: ${up};
	}
	:host([appearance='secondary']:hover) {
		background: ${hp};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Vn};
	}
	:host([appearance='secondary']) .control:${xe} {
		outline: calc(${z} * 1px) solid ${ae};
		outline-offset: calc(${z} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Vn};
	}
`,Ep=re`
	:host([appearance='icon']) {
		background: ${il};
		border-radius: ${ap};
		color: ${ve};
	}
	:host([appearance='icon']:hover) {
		background: ${sl};
		outline: 1px dotted ${Ga};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${dp};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${sl};
	}
	:host([appearance='icon']) .control:${xe} {
		outline: calc(${z} * 1px) solid ${ae};
		outline-offset: ${cp};
	}
	:host([appearance='icon'][disabled]) {
		background: ${il};
	}
`,_p=(t,e)=>re`
	${Op}
	${Ap}
	${Rp}
	${Ep}
`;class ec extends it{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,i,s){e==="appearance"&&s==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=s),e==="disabled"&&(this.disabled=s!==null)}}Ip([m],ec.prototype,"appearance",void 0);const Dp=ec.compose({baseName:"button",template:sf,styles:_p,shadowOptions:{delegatesFocus:!0}}),Pp=(t,e)=>re`
	${$e("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${F} * 1px) 0;
		user-select: none;
		font-size: ${Ee};
		line-height: ${Be};
	}
	.control {
		position: relative;
		width: calc(${F} * 4px + 2px);
		height: calc(${F} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${gp} * 1px);
		border: calc(${z} * 1px) solid ${oi};
		background: ${gt};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Qe};
		color: ${ve};
		padding-inline-start: calc(${F} * 2px + 2px);
		margin-inline-end: calc(${F} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${ve};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${ve};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${gt};
		border-color: ${oi};
	}
	:host(:enabled) .control:active {
		background: ${gt};
		border-color: ${ae};
	}
	:host(:${xe}) .control {
		border: calc(${z} * 1px) solid ${ae};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Et};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Zt};
	}
`;class Fp extends dn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const Bp=Fp.compose({baseName:"checkbox",template:pf,styles:Pp,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`}),Lp=(t,e)=>re`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,Mp=(t,e)=>re`
	:host {
		display: grid;
		padding: calc((${F} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${ip};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${bp};
		outline: 1px dotted ${Ga};
		outline-offset: -1px;
	}
`,Hp=(t,e)=>re`
	:host {
		padding: calc(${F} * 1px) calc(${F} * 3px);
		color: ${ve};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Qe};
		font-size: ${Ee};
		line-height: ${Be};
		font-weight: 400;
		border: solid calc(${z} * 1px) transparent;
		border-radius: calc(${hs} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${xe}),
	:host(:focus),
	:host(:active) {
		background: ${zt};
		border: solid calc(${z} * 1px) ${ae};
		color: ${gi};
		outline: none;
	}
	:host(:${xe}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${gi} !important;
	}
`;class Vp extends Ce{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const Np=Vp.compose({baseName:"data-grid",baseClass:Ce,template:lf,styles:Lp});class jp extends we{}const zp=jp.compose({baseName:"data-grid-row",baseClass:we,template:hf,styles:Mp});class Up extends Pt{}const qp=Up.compose({baseName:"data-grid-cell",baseClass:Pt,template:ff,styles:Hp}),Gp=(t,e)=>re`
	${$e("block")} :host {
		border: none;
		border-top: calc(${z} * 1px) solid ${mp};
		box-sizing: content-box;
		height: 0;
		margin: calc(${F} * 1px) 0;
		width: 100%;
	}
`;class Wp extends Vo{}const Qp=Wp.compose({baseName:"divider",template:Rf,styles:Gp}),Jp=(t,e)=>re`
	${$e("inline-flex")} :host {
		background: ${Ts};
		border-radius: calc(${fi} * 1px);
		box-sizing: border-box;
		color: ${ve};
		contain: contents;
		font-family: ${Qe};
		height: calc(${Bs} * 1px);
		position: relative;
		user-select: none;
		min-width: ${zo};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${z} * 1px) solid ${At};
		border-radius: calc(${fi} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Ee};
		line-height: ${Be};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Ts};
		border: calc(${z} * 1px) solid ${ae};
		border-radius: calc(${fi} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${vp};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${xe}) .control {
		border-color: ${ae};
	}
	:host(:not([disabled]):hover) {
		background: ${Ts};
		border-color: ${At};
	}
	:host(:${xe}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${zt};
		border: calc(${z} * 1px) solid transparent;
		color: ${gi};
	}
	:host([disabled]) {
		cursor: ${Et};
		opacity: ${Zt};
	}
	:host([disabled]) .control {
		cursor: ${Et};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Ts};
		color: ${ve};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${ae};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${ae};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Bs} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Bs} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${F} * 4px);
		min-width: calc(${F} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class Yp extends Bt{}const Xp=Yp.compose({baseName:"dropdown",template:Uf,styles:Jp,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),Zp=(t,e)=>re`
	${$e("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${yp};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Qe};
		font-size: ${Ee};
		line-height: ${Be};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${z} * 1px) solid transparent;
		border-radius: calc(${hs} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${nl};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${nl};
	}
	:host(:${xe}) .control,
	:host(:focus) .control {
		border: calc(${z} * 1px) solid ${ae};
	}
`;class Kp extends tt{}const eg=Kp.compose({baseName:"link",template:ef,styles:Zp,shadowOptions:{delegatesFocus:!0}}),tg=(t,e)=>re`
	${$e("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${hs};
		border: calc(${z} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ve};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Ee};
		line-height: ${Be};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${F} / 2) * 1px)
			calc((${F} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${xe}) {
		border-color: ${ae};
		background: ${zt};
		color: ${ve};
	}
	:host([aria-selected='true']) {
		background: ${zt};
		border: calc(${z} * 1px) solid transparent;
		color: ${gi};
	}
	:host(:active) {
		background: ${zt};
		color: ${gi};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${zt};
		border: calc(${z} * 1px) solid transparent;
		color: ${gi};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${zt};
		color: ${ve};
	}
	:host([disabled]) {
		cursor: ${Et};
		opacity: ${Zt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;let ig=class extends Ct{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}};const sg=ig.compose({baseName:"option",template:_f,styles:tg}),ng=(t,e)=>re`
	${$e("grid")} :host {
		box-sizing: border-box;
		font-family: ${Qe};
		font-size: ${Ee};
		line-height: ${Be};
		color: ${ve};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${F} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${F} * 1px) calc(${F} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${F} / 4) * 1px);
		justify-self: center;
		background: ${ii};
		margin: 0;
		border-radius: calc(${hs} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,og=(t,e)=>re`
	${$e("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Qe};
		font-size: ${Ee};
		line-height: ${Be};
		height: calc(${F} * 7px);
		padding: calc(${F} * 1px) 0;
		color: ${Cp};
		fill: currentcolor;
		border-radius: calc(${hs} * 1px);
		border: solid calc(${z} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${ii};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${ii};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${ii};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${ii};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${ii};
		fill: currentcolor;
	}
	:host(:${xe}) {
		outline: none;
		border: solid calc(${z} * 1px) ${wp};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${F} * 2px);
	}
`,rg=(t,e)=>re`
	${$e("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${z} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Ee};
		line-height: ${Be};
		padding: 10px calc((${F} + 2) * 1px);
	}
`;class lg extends $t{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=oo.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const ag=lg.compose({baseName:"panels",template:Qf,styles:ng});class cg extends Ua{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const dg=cg.compose({baseName:"panel-tab",template:Wf,styles:og});class ug extends Gf{}const hg=ug.compose({baseName:"panel-view",template:qf,styles:rg}),fg=(t,e)=>re`
	${$e("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${F} * 7px);
		width: calc(${F} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${F} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${xp};
		stroke-width: calc(${F} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class pg extends Oi{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,i,s){e==="value"&&this.removeAttribute("value")}}const gg=pg.compose({baseName:"progress-ring",template:Bf,styles:fg,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`}),bg=(t,e)=>re`
	${$e("flex")} :host {
		align-items: flex-start;
		margin: calc(${F} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${ve};
		font-size: ${Ee};
		margin: calc(${F} * 1px) 0;
	}
`;class mg extends Ft{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const i="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",i),this.setAttribute("aria-labelledby",i)}}}const vg=mg.compose({baseName:"radio-group",template:Lf,styles:bg}),yg=(t,e)=>re`
	${$e("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Ee};
		line-height: ${Be};
		margin: calc(${F} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${gt};
		border-radius: 999px;
		border: calc(${z} * 1px) solid ${oi};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${F} * 4px);
		position: relative;
		outline: none;
		width: calc(${F} * 4px);
	}
	.label {
		color: ${ve};
		cursor: pointer;
		font-family: ${Qe};
		margin-inline-end: calc(${F} * 2px + 2px);
		padding-inline-start: calc(${F} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${ve};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${F} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${gt};
		border-color: ${oi};
	}
	:host(:not([disabled])) .control:active {
		background: ${gt};
		border-color: ${ae};
	}
	:host(:${xe}) .control {
		border: calc(${z} * 1px) solid ${ae};
	}
	:host([aria-checked='true']) .control {
		background: ${gt};
		border: calc(${z} * 1px) solid ${oi};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${gt};
		border: calc(${z} * 1px) solid ${oi};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${gt};
		border: calc(${z} * 1px) solid ${ae};
	}
	:host([aria-checked="true"]:${xe}:not([disabled])) .control {
		border: calc(${z} * 1px) solid ${ae};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Et};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Zt};
	}
`;class xg extends hn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const wg=xg.compose({baseName:"radio",template:Mf,styles:yg,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),Cg=(t,e)=>re`
	${$e("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Qe};
		font-size: ${Wa};
		line-height: ${Qa};
	}
	.control {
		background-color: ${Ja};
		border: calc(${z} * 1px) solid ${Uo};
		border-radius: ${$p};
		color: ${Ya};
		padding: calc(${F} * 0.5px) calc(${F} * 1px);
		text-transform: uppercase;
	}
`;class $g extends ds{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const kg=$g.compose({baseName:"tag",template:La,styles:Cg}),Tg=(t,e)=>re`
	${$e("inline-block")} :host {
		font-family: ${Qe};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Ka};
		background: ${Ut};
		border-radius: calc(${fi} * 1px);
		border: calc(${z} * 1px) solid ${At};
		font: inherit;
		font-size: ${Ee};
		line-height: ${Be};
		padding: calc(${F} * 2px + 1px);
		width: 100%;
		min-width: ${zo};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Ut};
		border-color: ${At};
	}
	.control:active:enabled {
		background: ${Ut};
		border-color: ${ae};
	}
	.control:hover,
	.control:${xe},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${sp};
		height: ${np};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Ut};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${op};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${rp};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${lp};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${ae};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${ve};
		cursor: pointer;
		font-size: ${Ee};
		line-height: ${Be};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Et};
	}
	:host([disabled]) {
		opacity: ${Zt};
	}
	:host([disabled]) .control {
		border-color: ${At};
	}
`;class Sg extends _e{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const Ig=Sg.compose({baseName:"text-area",template:Xf,styles:Tg,shadowOptions:{delegatesFocus:!0}}),Og=(t,e)=>re`
	${$e("inline-block")} :host {
		font-family: ${Qe};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Ka};
		background: ${Ut};
		border-radius: calc(${fi} * 1px);
		border: calc(${z} * 1px) solid ${At};
		height: calc(${Bs} * 1px);
		min-width: ${zo};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${F} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${F} * 2px + 1px);
		font-size: ${Ee};
		line-height: ${Be};
	}
	.control:hover,
	.control:${xe},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${ve};
		cursor: pointer;
		font-size: ${Ee};
		line-height: ${Be};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${F} * 4px);
		height: calc(${F} * 4px);
	}
	.start {
		margin-inline-start: calc(${F} * 2px);
	}
	.end {
		margin-inline-end: calc(${F} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Ut};
		border-color: ${At};
	}
	:host(:active:not([disabled])) .root {
		background: ${Ut};
		border-color: ${ae};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${ae};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Et};
	}
	:host([disabled]) {
		opacity: ${Zt};
	}
	:host([disabled]) .control {
		border-color: ${At};
	}
`;class Ag extends ze{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const Rg=Ag.compose({baseName:"text-field",template:Zf,styles:Og,shadowOptions:{delegatesFocus:!0}}),Eg={vsCodeBadge:Sp,vsCodeButton:Dp,vsCodeCheckbox:Bp,vsCodeDataGrid:Np,vsCodeDataGridCell:qp,vsCodeDataGridRow:zp,vsCodeDivider:Qp,vsCodeDropdown:Xp,vsCodeLink:eg,vsCodeOption:sg,vsCodePanels:ag,vsCodePanelTab:dg,vsCodePanelView:hg,vsCodeProgressRing:gg,vsCodeRadioGroup:vg,vsCodeRadio:wg,vsCodeTag:kg,vsCodeTextArea:Ig,vsCodeTextField:Rg,register(t,...e){if(t)for(const i in this)i!=="register"&&this[i]().register(t,...e)}},_g={class:"theme-toggle"},Dg=["checked"],Pg=Co({__name:"App",setup(t){ep().register(Eg);const e=at(!0);function i(s){console.log("Theme toggled");const n=s.target;e.value=n.checked,document.documentElement.classList.toggle("light-theme",!e.value),document.documentElement.classList.toggle("dark-theme",e.value)}return $o(()=>{document.documentElement.classList.add("dark-theme"),setTimeout(()=>{const s=document.querySelector("body");s&&(s.style.setProperty("--foreground","var(--vscode-foreground)"),s.style.setProperty("--background","var(--vscode-panel-background)"),s.style.setProperty("--focus-border","var(--vscode-focusBorder)"),s.style.setProperty("--button-border","var(--vscode-button-border)"),s.style.setProperty("--button-primary-background","var(--vscode-button-background)"),s.style.setProperty("--button-primary-hover-background","var(--vscode-button-hoverBackground)"),s.style.setProperty("--checkbox-background","var(--vscode-checkbox-background)"),s.style.setProperty("--checkbox-foreground","var(--vscode-checkbox-foreground)"),s.style.setProperty("--checkbox-border","var(--vscode-checkbox-border)"),s.style.setProperty("--dropdown-background","var(--vscode-dropdown-background)"),s.style.setProperty("--dropdown-foreground","var(--vscode-dropdown-foreground)"),s.style.setProperty("--dropdown-border","var(--vscode-dropdown-border)"),s.style.setProperty("--input-background","var(--vscode-input-background)"))},100)}),(s,n)=>(vt(),si(Ie,null,[ue("div",_g,[ue("vscode-checkbox",{id:"theme-toggle",checked:e.value,onChange:i},null,40,Dg),n[0]||(n[0]=ue("label",{for:"theme-toggle"},"Toggle Theme",-1))]),n[1]||(n[1]=qd("<details data-v-fc8403af><summary data-v-fc8403af>Proposed Changes</summary><ol data-v-fc8403af><li data-v-fc8403af>Change checkbox style to match checkboxes from Settings page</li><ul data-v-fc8403af><li data-v-fc8403af>Goal: Reduce visual noise and better match editor theming</li><li data-v-fc8403af>Goal: Let&#39;s the color of server contribution source / server state text stand out</li></ul><li data-v-fc8403af>Remove icons and indent tool list items</li><ul data-v-fc8403af><li data-v-fc8403af>Goal: Reduce visual noise</li><li data-v-fc8403af>Goal: Improve the ability to distinguish servers and tools via stronger visual hierarchy</li></ul><li data-v-fc8403af>Prefix server names with &quot;MCP Server:&quot;</li><ul data-v-fc8403af><li data-v-fc8403af>Note: Also demoed &quot;MCP Extension:&quot; – might be the wrong term but the idea is that there can be variations on the prefix name used</li><li data-v-fc8403af>Goal: Provide extra information to distinguish between servers and tools</li><li data-v-fc8403af>Goal: Reduce density of information on the right side of server list items</li></ul><li data-v-fc8403af>Prefix all MCP contribution sources with &quot;From&quot;</li><ul data-v-fc8403af><li data-v-fc8403af>Goal: Makes it more clear that a server is *coming from* somewhere</li><li data-v-fc8403af>Example: &quot;Claude Desktop&quot; vs &quot;From Claude Desktop&quot;</li><li data-v-fc8403af>Bonus: Improves visual consistency / mental parse-ability of contribution sources text</li></ul><li data-v-fc8403af>Suggestion: Add a contribution source label and server status to GitHub Copilot Chat server</li><ul data-v-fc8403af><li data-v-fc8403af>Goal: Improves consistency across all MCP contribution sources copy</li><li data-v-fc8403af>Note: &quot;Built In&quot; might be the wrong term – consider revising for clarity/accuracy</li></ul></ol></details>",1)),Ke(zu)],64))}}),Fg=Io(Pg,[["__scopeId","data-v-fc8403af"]]);Au(Fg).mount("#app");
