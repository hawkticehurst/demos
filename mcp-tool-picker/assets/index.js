(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ho(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const X={},yi=[],gt=()=>{},rd=()=>!1,xn=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Lo=i=>i.startsWith("onUpdate:"),xe=Object.assign,No=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},ld=Object.prototype.hasOwnProperty,Y=(i,e)=>ld.call(i,e),M=Array.isArray,xi=i=>$n(i)==="[object Map]",Kl=i=>$n(i)==="[object Set]",H=i=>typeof i=="function",de=i=>typeof i=="string",Tt=i=>typeof i=="symbol",re=i=>i!==null&&typeof i=="object",ea=i=>(re(i)||H(i))&&H(i.then)&&H(i.catch),ta=Object.prototype.toString,$n=i=>ta.call(i),ad=i=>$n(i).slice(8,-1),ia=i=>$n(i)==="[object Object]",Vo=i=>de(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,is=Ho(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wn=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},cd=/-(\w)/g,Qe=wn(i=>i.replace(cd,(e,t)=>t?t.toUpperCase():"")),dd=/\B([A-Z])/g,ri=wn(i=>i.replace(dd,"-$1").toLowerCase()),Cn=wn(i=>i.charAt(0).toUpperCase()+i.slice(1)),jn=wn(i=>i?`on${Cn(i)}`:""),Dt=(i,e)=>!Object.is(i,e),Qs=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},sa=(i,e,t,s=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:s,value:t})},yo=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Or;const kn=()=>Or||(Or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jo(i){if(M(i)){const e={};for(let t=0;t<i.length;t++){const s=i[t],n=de(s)?pd(s):jo(s);if(n)for(const o in n)e[o]=n[o]}return e}else if(de(i)||re(i))return i}const hd=/;(?![^(]*\))/g,ud=/:([^]+)/,fd=/\/\*[^]*?\*\//g;function pd(i){const e={};return i.replace(fd,"").split(hd).forEach(t=>{if(t){const s=t.split(ud);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ii(i){let e="";if(de(i))e=i;else if(M(i))for(let t=0;t<i.length;t++){const s=Ii(i[t]);s&&(e+=s+" ")}else if(re(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=Ho(gd);function na(i){return!!i||i===""}const oa=i=>!!(i&&i.__v_isRef===!0),Ys=i=>de(i)?i:i==null?"":M(i)||re(i)&&(i.toString===ta||!H(i.toString))?oa(i)?Ys(i.value):JSON.stringify(i,ra,2):String(i),ra=(i,e)=>oa(e)?ra(i,e.value):xi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,n],o)=>(t[zn(s,o)+" =>"]=n,t),{})}:Kl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>zn(t))}:Tt(e)?zn(e):re(e)&&!M(e)&&!ia(e)?String(e):e,zn=(i,e="")=>{var t;return Tt(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class md{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=je;try{return je=this,e()}finally{je=t}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function vd(){return je}let ee;const Un=new WeakSet;class la{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Un.has(this)&&(Un.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ca(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rr(this),da(this);const e=ee,t=et;ee=this,et=!0;try{return this.fn()}finally{ha(this),ee=e,et=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qo(e);this.deps=this.depsTail=void 0,Rr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Un.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xo(this)&&this.run()}get dirty(){return xo(this)}}let aa=0,ss,ns;function ca(i,e=!1){if(i.flags|=8,e){i.next=ns,ns=i;return}i.next=ss,ss=i}function zo(){aa++}function Uo(){if(--aa>0)return;if(ns){let e=ns;for(ns=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;ss;){let e=ss;for(ss=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){i||(i=s)}e=t}}if(i)throw i}function da(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ha(i){let e,t=i.depsTail,s=t;for(;s;){const n=s.prevDep;s.version===-1?(s===t&&(t=n),qo(s),yd(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}i.deps=e,i.depsTail=t}function xo(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ua(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function ua(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===ps))return;i.globalVersion=ps;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!xo(i)){i.flags&=-3;return}const t=ee,s=et;ee=i,et=!0;try{da(i);const n=i.fn(i._value);(e.version===0||Dt(n,i._value))&&(i._value=n,e.version++)}catch(n){throw e.version++,n}finally{ee=t,et=s,ha(i),i.flags&=-3}}function qo(i,e=!1){const{dep:t,prevSub:s,nextSub:n}=i;if(s&&(s.nextSub=n,i.prevSub=void 0),n&&(n.prevSub=s,i.nextSub=void 0),t.subs===i&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)qo(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function yd(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let et=!0;const fa=[];function Nt(){fa.push(et),et=!1}function Vt(){const i=fa.pop();et=i===void 0?!0:i}function Rr(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=ee;ee=void 0;try{e()}finally{ee=t}}}let ps=0,xd=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class Go{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ee||!et||ee===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ee)t=this.activeLink=new xd(ee,this),ee.deps?(t.prevDep=ee.depsTail,ee.depsTail.nextDep=t,ee.depsTail=t):ee.deps=ee.depsTail=t,pa(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=ee.depsTail,t.nextDep=void 0,ee.depsTail.nextDep=t,ee.depsTail=t,ee.deps===t&&(ee.deps=s)}return t}trigger(e){this.version++,ps++,this.notify(e)}notify(e){zo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Uo()}}}function pa(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)pa(s)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const $o=new WeakMap,ii=Symbol(""),wo=Symbol(""),gs=Symbol("");function ge(i,e,t){if(et&&ee){let s=$o.get(i);s||$o.set(i,s=new Map);let n=s.get(t);n||(s.set(t,n=new Go),n.map=s,n.key=t),n.track()}}function $t(i,e,t,s,n,o){const r=$o.get(i);if(!r){ps++;return}const l=a=>{a&&a.trigger()};if(zo(),e==="clear")r.forEach(l);else{const a=M(i),d=a&&Vo(t);if(a&&t==="length"){const c=Number(s);r.forEach((h,g)=>{(g==="length"||g===gs||!Tt(g)&&g>=c)&&l(h)})}else switch((t!==void 0||r.has(void 0))&&l(r.get(t)),d&&l(r.get(gs)),e){case"add":a?d&&l(r.get("length")):(l(r.get(ii)),xi(i)&&l(r.get(wo)));break;case"delete":a||(l(r.get(ii)),xi(i)&&l(r.get(wo)));break;case"set":xi(i)&&l(r.get(ii));break}}Uo()}function ui(i){const e=Q(i);return e===i?e:(ge(e,"iterate",gs),Ge(i)?e:e.map(be))}function Tn(i){return ge(i=Q(i),"iterate",gs),i}const $d={__proto__:null,[Symbol.iterator](){return qn(this,Symbol.iterator,be)},concat(...i){return ui(this).concat(...i.map(e=>M(e)?ui(e):e))},entries(){return qn(this,"entries",i=>(i[1]=be(i[1]),i))},every(i,e){return vt(this,"every",i,e,void 0,arguments)},filter(i,e){return vt(this,"filter",i,e,t=>t.map(be),arguments)},find(i,e){return vt(this,"find",i,e,be,arguments)},findIndex(i,e){return vt(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return vt(this,"findLast",i,e,be,arguments)},findLastIndex(i,e){return vt(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return vt(this,"forEach",i,e,void 0,arguments)},includes(...i){return Gn(this,"includes",i)},indexOf(...i){return Gn(this,"indexOf",i)},join(i){return ui(this).join(i)},lastIndexOf(...i){return Gn(this,"lastIndexOf",i)},map(i,e){return vt(this,"map",i,e,void 0,arguments)},pop(){return Gi(this,"pop")},push(...i){return Gi(this,"push",i)},reduce(i,...e){return Pr(this,"reduce",i,e)},reduceRight(i,...e){return Pr(this,"reduceRight",i,e)},shift(){return Gi(this,"shift")},some(i,e){return vt(this,"some",i,e,void 0,arguments)},splice(...i){return Gi(this,"splice",i)},toReversed(){return ui(this).toReversed()},toSorted(i){return ui(this).toSorted(i)},toSpliced(...i){return ui(this).toSpliced(...i)},unshift(...i){return Gi(this,"unshift",i)},values(){return qn(this,"values",be)}};function qn(i,e,t){const s=Tn(i),n=s[e]();return s!==i&&!Ge(i)&&(n._next=n.next,n.next=()=>{const o=n._next();return o.value&&(o.value=t(o.value)),o}),n}const wd=Array.prototype;function vt(i,e,t,s,n,o){const r=Tn(i),l=r!==i&&!Ge(i),a=r[e];if(a!==wd[e]){const h=a.apply(i,o);return l?be(h):h}let d=t;r!==i&&(l?d=function(h,g){return t.call(this,be(h),g,i)}:t.length>2&&(d=function(h,g){return t.call(this,h,g,i)}));const c=a.call(r,d,s);return l&&n?n(c):c}function Pr(i,e,t,s){const n=Tn(i);let o=t;return n!==i&&(Ge(i)?t.length>3&&(o=function(r,l,a){return t.call(this,r,l,a,i)}):o=function(r,l,a){return t.call(this,r,be(l),a,i)}),n[e](o,...s)}function Gn(i,e,t){const s=Q(i);ge(s,"iterate",gs);const n=s[e](...t);return(n===-1||n===!1)&&Jo(t[0])?(t[0]=Q(t[0]),s[e](...t)):n}function Gi(i,e,t=[]){Nt(),zo();const s=Q(i)[e].apply(i,t);return Uo(),Vt(),s}const Cd=Ho("__proto__,__v_isRef,__isVue"),ga=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Tt));function kd(i){Tt(i)||(i=String(i));const e=Q(this);return ge(e,"has",i),e.hasOwnProperty(i)}class ba{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(n?o?Dd:xa:o?ya:va).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=M(e);if(!n){let a;if(r&&(a=$d[t]))return a;if(t==="hasOwnProperty")return kd}const l=Reflect.get(e,t,ve(e)?e:s);return(Tt(t)?ga.has(t):Cd(t))||(n||ge(e,"get",t),o)?l:ve(l)?r&&Vo(t)?l:l.value:re(l)?n?$a(l):Qo(l):l}}class ma extends ba{constructor(e=!1){super(!1,e)}set(e,t,s,n){let o=e[t];if(!this._isShallow){const a=ni(o);if(!Ge(s)&&!ni(s)&&(o=Q(o),s=Q(s)),!M(e)&&ve(o)&&!ve(s))return a?!1:(o.value=s,!0)}const r=M(e)&&Vo(t)?Number(t)<e.length:Y(e,t),l=Reflect.set(e,t,s,ve(e)?e:n);return e===Q(n)&&(r?Dt(s,o)&&$t(e,"set",t,s):$t(e,"add",t,s)),l}deleteProperty(e,t){const s=Y(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&$t(e,"delete",t,void 0),n}has(e,t){const s=Reflect.has(e,t);return(!Tt(t)||!ga.has(t))&&ge(e,"has",t),s}ownKeys(e){return ge(e,"iterate",M(e)?"length":ii),Reflect.ownKeys(e)}}class Td extends ba{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Sd=new ma,_d=new Td,Ad=new ma(!0);const Co=i=>i,Hs=i=>Reflect.getPrototypeOf(i);function Id(i,e,t){return function(...s){const n=this.__v_raw,o=Q(n),r=xi(o),l=i==="entries"||i===Symbol.iterator&&r,a=i==="keys"&&r,d=n[i](...s),c=t?Co:e?ko:be;return!e&&ge(o,"iterate",a?wo:ii),{next(){const{value:h,done:g}=d.next();return g?{value:h,done:g}:{value:l?[c(h[0]),c(h[1])]:c(h),done:g}},[Symbol.iterator](){return this}}}}function Ls(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Ed(i,e){const t={get(n){const o=this.__v_raw,r=Q(o),l=Q(n);i||(Dt(n,l)&&ge(r,"get",n),ge(r,"get",l));const{has:a}=Hs(r),d=e?Co:i?ko:be;if(a.call(r,n))return d(o.get(n));if(a.call(r,l))return d(o.get(l));o!==r&&o.get(n)},get size(){const n=this.__v_raw;return!i&&ge(Q(n),"iterate",ii),Reflect.get(n,"size",n)},has(n){const o=this.__v_raw,r=Q(o),l=Q(n);return i||(Dt(n,l)&&ge(r,"has",n),ge(r,"has",l)),n===l?o.has(n):o.has(n)||o.has(l)},forEach(n,o){const r=this,l=r.__v_raw,a=Q(l),d=e?Co:i?ko:be;return!i&&ge(a,"iterate",ii),l.forEach((c,h)=>n.call(o,d(c),d(h),r))}};return xe(t,i?{add:Ls("add"),set:Ls("set"),delete:Ls("delete"),clear:Ls("clear")}:{add(n){!e&&!Ge(n)&&!ni(n)&&(n=Q(n));const o=Q(this);return Hs(o).has.call(o,n)||(o.add(n),$t(o,"add",n,n)),this},set(n,o){!e&&!Ge(o)&&!ni(o)&&(o=Q(o));const r=Q(this),{has:l,get:a}=Hs(r);let d=l.call(r,n);d||(n=Q(n),d=l.call(r,n));const c=a.call(r,n);return r.set(n,o),d?Dt(o,c)&&$t(r,"set",n,o):$t(r,"add",n,o),this},delete(n){const o=Q(this),{has:r,get:l}=Hs(o);let a=r.call(o,n);a||(n=Q(n),a=r.call(o,n)),l&&l.call(o,n);const d=o.delete(n);return a&&$t(o,"delete",n,void 0),d},clear(){const n=Q(this),o=n.size!==0,r=n.clear();return o&&$t(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=Id(n,i,e)}),t}function Wo(i,e){const t=Ed(i,e);return(s,n,o)=>n==="__v_isReactive"?!i:n==="__v_isReadonly"?i:n==="__v_raw"?s:Reflect.get(Y(t,n)&&n in s?t:s,n,o)}const Od={get:Wo(!1,!1)},Rd={get:Wo(!1,!0)},Pd={get:Wo(!0,!1)};const va=new WeakMap,ya=new WeakMap,xa=new WeakMap,Dd=new WeakMap;function Fd(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bd(i){return i.__v_skip||!Object.isExtensible(i)?0:Fd(ad(i))}function Qo(i){return ni(i)?i:Yo(i,!1,Sd,Od,va)}function Md(i){return Yo(i,!1,Ad,Rd,ya)}function $a(i){return Yo(i,!0,_d,Pd,xa)}function Yo(i,e,t,s,n){if(!re(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const o=n.get(i);if(o)return o;const r=Bd(i);if(r===0)return i;const l=new Proxy(i,r===2?s:t);return n.set(i,l),l}function $i(i){return ni(i)?$i(i.__v_raw):!!(i&&i.__v_isReactive)}function ni(i){return!!(i&&i.__v_isReadonly)}function Ge(i){return!!(i&&i.__v_isShallow)}function Jo(i){return i?!!i.__v_raw:!1}function Q(i){const e=i&&i.__v_raw;return e?Q(e):i}function Hd(i){return!Y(i,"__v_skip")&&Object.isExtensible(i)&&sa(i,"__v_skip",!0),i}const be=i=>re(i)?Qo(i):i,ko=i=>re(i)?$a(i):i;function ve(i){return i?i.__v_isRef===!0:!1}function ut(i){return Ld(i,!1)}function Ld(i,e){return ve(i)?i:new Nd(i,e)}class Nd{constructor(e,t){this.dep=new Go,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Q(e),this._value=t?e:be(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||Ge(e)||ni(e);e=s?e:Q(e),Dt(e,t)&&(this._rawValue=e,this._value=s?e:be(e),this.dep.trigger())}}function Vd(i){return ve(i)?i.value:i}const jd={get:(i,e,t)=>e==="__v_raw"?i:Vd(Reflect.get(i,e,t)),set:(i,e,t,s)=>{const n=i[e];return ve(n)&&!ve(t)?(n.value=t,!0):Reflect.set(i,e,t,s)}};function wa(i){return $i(i)?i:new Proxy(i,jd)}class zd{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Go(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return ca(this,!0),!0}get value(){const e=this.dep.track();return ua(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ud(i,e,t=!1){let s,n;return H(i)?s=i:(s=i.get,n=i.set),new zd(s,n,t)}const Ns={},ln=new WeakMap;let Xt;function qd(i,e=!1,t=Xt){if(t){let s=ln.get(t);s||ln.set(t,s=[]),s.push(i)}}function Gd(i,e,t=X){const{immediate:s,deep:n,once:o,scheduler:r,augmentJob:l,call:a}=t,d=E=>n?E:Ge(E)||n===!1||n===0?wt(E,1):wt(E);let c,h,g,y,_=!1,R=!1;if(ve(i)?(h=()=>i.value,_=Ge(i)):$i(i)?(h=()=>d(i),_=!0):M(i)?(R=!0,_=i.some(E=>$i(E)||Ge(E)),h=()=>i.map(E=>{if(ve(E))return E.value;if($i(E))return d(E);if(H(E))return a?a(E,2):E()})):H(i)?e?h=a?()=>a(i,2):i:h=()=>{if(g){Nt();try{g()}finally{Vt()}}const E=Xt;Xt=c;try{return a?a(i,3,[y]):i(y)}finally{Xt=E}}:h=gt,e&&n){const E=h,L=n===!0?1/0:n;h=()=>wt(E(),L)}const G=vd(),j=()=>{c.stop(),G&&G.active&&No(G.effects,c)};if(o&&e){const E=e;e=(...L)=>{E(...L),j()}}let q=R?new Array(i.length).fill(Ns):Ns;const O=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(e){const L=c.run();if(n||_||(R?L.some((te,Te)=>Dt(te,q[Te])):Dt(L,q))){g&&g();const te=Xt;Xt=c;try{const Te=[L,q===Ns?void 0:R&&q[0]===Ns?[]:q,y];a?a(e,3,Te):e(...Te),q=L}finally{Xt=te}}}else c.run()};return l&&l(O),c=new la(h),c.scheduler=r?()=>r(O,!1):O,y=E=>qd(E,!1,c),g=c.onStop=()=>{const E=ln.get(c);if(E){if(a)a(E,4);else for(const L of E)L();ln.delete(c)}},e?s?O(!0):q=c.run():r?r(O.bind(null,!0),!0):c.run(),j.pause=c.pause.bind(c),j.resume=c.resume.bind(c),j.stop=j,j}function wt(i,e=1/0,t){if(e<=0||!re(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,ve(i))wt(i.value,e,t);else if(M(i))for(let s=0;s<i.length;s++)wt(i[s],e,t);else if(Kl(i)||xi(i))i.forEach(s=>{wt(s,e,t)});else if(ia(i)){for(const s in i)wt(i[s],e,t);for(const s of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,s)&&wt(i[s],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _s(i,e,t,s){try{return s?i(...s):i()}catch(n){Sn(n,e,t)}}function bt(i,e,t,s){if(H(i)){const n=_s(i,e,t,s);return n&&ea(n)&&n.catch(o=>{Sn(o,e,t)}),n}if(M(i)){const n=[];for(let o=0;o<i.length;o++)n.push(bt(i[o],e,t,s));return n}}function Sn(i,e,t,s=!0){const n=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||X;if(e){let l=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const c=l.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](i,a,d)===!1)return}l=l.parent}if(o){Nt(),_s(o,null,10,[i,a,d]),Vt();return}}Wd(i,t,n,s,r)}function Wd(i,e,t,s=!0,n=!1){if(n)throw i;console.error(i)}const Ae=[];let ft=-1;const wi=[];let Ot=null,fi=0;const Ca=Promise.resolve();let an=null;function Qd(i){const e=an||Ca;return i?e.then(this?i.bind(this):i):e}function Yd(i){let e=ft+1,t=Ae.length;for(;e<t;){const s=e+t>>>1,n=Ae[s],o=bs(n);o<i||o===i&&n.flags&2?e=s+1:t=s}return e}function Xo(i){if(!(i.flags&1)){const e=bs(i),t=Ae[Ae.length-1];!t||!(i.flags&2)&&e>=bs(t)?Ae.push(i):Ae.splice(Yd(e),0,i),i.flags|=1,ka()}}function ka(){an||(an=Ca.then(Sa))}function Jd(i){M(i)?wi.push(...i):Ot&&i.id===-1?Ot.splice(fi+1,0,i):i.flags&1||(wi.push(i),i.flags|=1),ka()}function Dr(i,e,t=ft+1){for(;t<Ae.length;t++){const s=Ae[t];if(s&&s.flags&2){if(i&&s.id!==i.uid)continue;Ae.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ta(i){if(wi.length){const e=[...new Set(wi)].sort((t,s)=>bs(t)-bs(s));if(wi.length=0,Ot){Ot.push(...e);return}for(Ot=e,fi=0;fi<Ot.length;fi++){const t=Ot[fi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ot=null,fi=0}}const bs=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Sa(i){try{for(ft=0;ft<Ae.length;ft++){const e=Ae[ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ft<Ae.length;ft++){const e=Ae[ft];e&&(e.flags&=-2)}ft=-1,Ae.length=0,Ta(),an=null,(Ae.length||wi.length)&&Sa()}}let pe=null,_a=null;function cn(i){const e=pe;return pe=i,_a=i&&i.type.__scopeId||null,e}function Js(i,e=pe,t){if(!e||i._n)return i;const s=(...n)=>{s._d&&qr(-1);const o=cn(e);let r;try{r=i(...n)}finally{cn(o),s._d&&qr(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Xd(i,e){if(pe===null)return i;const t=En(pe),s=i.dirs||(i.dirs=[]);for(let n=0;n<e.length;n++){let[o,r,l,a=X]=e[n];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&wt(r),s.push({dir:o,instance:t,value:r,oldValue:void 0,arg:l,modifiers:a}))}return i}function Wt(i,e,t,s){const n=i.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const l=n[r];o&&(l.oldValue=o[r].value);let a=l.dir[s];a&&(Nt(),bt(a,t,8,[i.el,l,i,e]),Vt())}}const Zd=Symbol("_vte"),Kd=i=>i.__isTeleport;function Zo(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Zo(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ko(i,e){return H(i)?xe({name:i.name},e,{setup:i}):i}function Aa(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function dn(i,e,t,s,n=!1){if(M(i)){i.forEach((_,R)=>dn(_,e&&(M(e)?e[R]:e),t,s,n));return}if(Ci(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&dn(i,e,t,s.component.subTree);return}const o=s.shapeFlag&4?En(s.component):s.el,r=n?null:o,{i:l,r:a}=i,d=e&&e.r,c=l.refs===X?l.refs={}:l.refs,h=l.setupState,g=Q(h),y=h===X?()=>!1:_=>Y(g,_);if(d!=null&&d!==a&&(de(d)?(c[d]=null,y(d)&&(h[d]=null)):ve(d)&&(d.value=null)),H(a))_s(a,l,12,[r,c]);else{const _=de(a),R=ve(a);if(_||R){const G=()=>{if(i.f){const j=_?y(a)?h[a]:c[a]:a.value;n?M(j)&&No(j,o):M(j)?j.includes(o)||j.push(o):_?(c[a]=[o],y(a)&&(h[a]=c[a])):(a.value=[o],i.k&&(c[i.k]=a.value))}else _?(c[a]=r,y(a)&&(h[a]=r)):R&&(a.value=r,i.k&&(c[i.k]=r))};r?(G.id=-1,Ve(G,t)):G()}}}kn().requestIdleCallback;kn().cancelIdleCallback;const Ci=i=>!!i.type.__asyncLoader,Ia=i=>i.type.__isKeepAlive;function eh(i,e){Ea(i,"a",e)}function th(i,e){Ea(i,"da",e)}function Ea(i,e,t=me){const s=i.__wdc||(i.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return i()});if(_n(e,s,t),t){let n=t.parent;for(;n&&n.parent;)Ia(n.parent.vnode)&&ih(s,e,t,n),n=n.parent}}function ih(i,e,t,s){const n=_n(e,i,s,!0);Ra(()=>{No(s[e],n)},t)}function _n(i,e,t=me,s=!1){if(t){const n=t[i]||(t[i]=[]),o=e.__weh||(e.__weh=(...r)=>{Nt();const l=As(t),a=bt(e,t,i,r);return l(),Vt(),a});return s?n.unshift(o):n.push(o),o}}const St=i=>(e,t=me)=>{(!vs||i==="sp")&&_n(i,(...s)=>e(...s),t)},sh=St("bm"),er=St("m"),nh=St("bu"),oh=St("u"),Oa=St("bum"),Ra=St("um"),rh=St("sp"),lh=St("rtg"),ah=St("rtc");function ch(i,e=me){_n("ec",i,e)}const dh="components";function hh(i,e){return fh(dh,i,!0,e)||i}const uh=Symbol.for("v-ndc");function fh(i,e,t=!0,s=!1){const n=pe||me;if(n){const o=n.type;{const l=nu(o,!1);if(l&&(l===e||l===Qe(e)||l===Cn(Qe(e))))return o}const r=Fr(n[i]||o[i],e)||Fr(n.appContext[i],e);return!r&&s?o:r}}function Fr(i,e){return i&&(i[e]||i[Qe(e)]||i[Cn(Qe(e))])}function Br(i,e,t,s){let n;const o=t,r=M(i);if(r||de(i)){const l=r&&$i(i);let a=!1;l&&(a=!Ge(i),i=Tn(i)),n=new Array(i.length);for(let d=0,c=i.length;d<c;d++)n[d]=e(a?be(i[d]):i[d],d,void 0,o)}else if(typeof i=="number"){n=new Array(i);for(let l=0;l<i;l++)n[l]=e(l+1,l,void 0,o)}else if(re(i))if(i[Symbol.iterator])n=Array.from(i,(l,a)=>e(l,a,void 0,o));else{const l=Object.keys(i);n=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const c=l[a];n[a]=e(i[c],c,a,o)}}else n=[];return n}function ph(i,e){for(let t=0;t<e.length;t++){const s=e[t];if(M(s))for(let n=0;n<s.length;n++)i[s[n].name]=s[n].fn;else s&&(i[s.name]=s.key?(...n)=>{const o=s.fn(...n);return o&&(o.key=s.key),o}:s.fn)}return i}function Wn(i,e,t={},s,n){if(pe.ce||pe.parent&&Ci(pe.parent)&&pe.parent.ce)return e!=="default"&&(t.name=e),Ze(),un(Ie,null,[We("slot",t,s)],64);let o=i[e];o&&o._c&&(o._d=!1),Ze();const r=o&&Pa(o(t)),l=t.key||r&&r.key,a=un(Ie,{key:(l&&!Tt(l)?l:`_${e}`)+""},r||[],r&&i._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Pa(i){return i.some(e=>ir(e)?!(e.type===Mt||e.type===Ie&&!Pa(e.children)):!0)?i:null}const To=i=>i?ec(i)?En(i):To(i.parent):null,os=xe(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>To(i.parent),$root:i=>To(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Fa(i),$forceUpdate:i=>i.f||(i.f=()=>{Xo(i.update)}),$nextTick:i=>i.n||(i.n=Qd.bind(i.proxy)),$watch:i=>Bh.bind(i)}),Qn=(i,e)=>i!==X&&!i.__isScriptSetup&&Y(i,e),gh={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:n,props:o,accessCache:r,type:l,appContext:a}=i;let d;if(e[0]!=="$"){const y=r[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return n[e];case 4:return t[e];case 3:return o[e]}else{if(Qn(s,e))return r[e]=1,s[e];if(n!==X&&Y(n,e))return r[e]=2,n[e];if((d=i.propsOptions[0])&&Y(d,e))return r[e]=3,o[e];if(t!==X&&Y(t,e))return r[e]=4,t[e];So&&(r[e]=0)}}const c=os[e];let h,g;if(c)return e==="$attrs"&&ge(i.attrs,"get",""),c(i);if((h=l.__cssModules)&&(h=h[e]))return h;if(t!==X&&Y(t,e))return r[e]=4,t[e];if(g=a.config.globalProperties,Y(g,e))return g[e]},set({_:i},e,t){const{data:s,setupState:n,ctx:o}=i;return Qn(n,e)?(n[e]=t,!0):s!==X&&Y(s,e)?(s[e]=t,!0):Y(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(o[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:s,appContext:n,propsOptions:o}},r){let l;return!!t[r]||i!==X&&Y(i,r)||Qn(e,r)||(l=o[0])&&Y(l,r)||Y(s,r)||Y(os,r)||Y(n.config.globalProperties,r)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Y(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Mr(i){return M(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let So=!0;function bh(i){const e=Fa(i),t=i.proxy,s=i.ctx;So=!1,e.beforeCreate&&Hr(e.beforeCreate,i,"bc");const{data:n,computed:o,methods:r,watch:l,provide:a,inject:d,created:c,beforeMount:h,mounted:g,beforeUpdate:y,updated:_,activated:R,deactivated:G,beforeDestroy:j,beforeUnmount:q,destroyed:O,unmounted:E,render:L,renderTracked:te,renderTriggered:Te,errorCaptured:Xe,serverPrefetch:mt,expose:ot,inheritAttrs:rt,components:It,directives:Fs,filters:Nn}=e;if(d&&mh(d,s,null),r)for(const ne in r){const Z=r[ne];H(Z)&&(s[ne]=Z.bind(t))}if(n){const ne=n.call(t,t);re(ne)&&(i.data=Qo(ne))}if(So=!0,o)for(const ne in o){const Z=o[ne],qt=H(Z)?Z.bind(t,t):H(Z.get)?Z.get.bind(t,t):gt,Bs=!H(Z)&&H(Z.set)?Z.set.bind(t):gt,Gt=ic({get:qt,set:Bs});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:lt=>Gt.value=lt})}if(l)for(const ne in l)Da(l[ne],s,t,ne);if(a){const ne=H(a)?a.call(t):a;Reflect.ownKeys(ne).forEach(Z=>{Ch(Z,ne[Z])})}c&&Hr(c,i,"c");function Se(ne,Z){M(Z)?Z.forEach(qt=>ne(qt.bind(t))):Z&&ne(Z.bind(t))}if(Se(sh,h),Se(er,g),Se(nh,y),Se(oh,_),Se(eh,R),Se(th,G),Se(ch,Xe),Se(ah,te),Se(lh,Te),Se(Oa,q),Se(Ra,E),Se(rh,mt),M(ot))if(ot.length){const ne=i.exposed||(i.exposed={});ot.forEach(Z=>{Object.defineProperty(ne,Z,{get:()=>t[Z],set:qt=>t[Z]=qt})})}else i.exposed||(i.exposed={});L&&i.render===gt&&(i.render=L),rt!=null&&(i.inheritAttrs=rt),It&&(i.components=It),Fs&&(i.directives=Fs),mt&&Aa(i)}function mh(i,e,t=gt){M(i)&&(i=_o(i));for(const s in i){const n=i[s];let o;re(n)?"default"in n?o=Xs(n.from||s,n.default,!0):o=Xs(n.from||s):o=Xs(n),ve(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function Hr(i,e,t){bt(M(i)?i.map(s=>s.bind(e.proxy)):i.bind(e.proxy),e,t)}function Da(i,e,t,s){let n=s.includes(".")?Ya(t,s):()=>t[s];if(de(i)){const o=e[i];H(o)&&Zs(n,o)}else if(H(i))Zs(n,i.bind(t));else if(re(i))if(M(i))i.forEach(o=>Da(o,e,t,s));else{const o=H(i.handler)?i.handler.bind(t):e[i.handler];H(o)&&Zs(n,o,i)}}function Fa(i){const e=i.type,{mixins:t,extends:s}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=i.appContext,l=o.get(e);let a;return l?a=l:!n.length&&!t&&!s?a=e:(a={},n.length&&n.forEach(d=>hn(a,d,r,!0)),hn(a,e,r)),re(e)&&o.set(e,a),a}function hn(i,e,t,s=!1){const{mixins:n,extends:o}=e;o&&hn(i,o,t,!0),n&&n.forEach(r=>hn(i,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const l=vh[r]||t&&t[r];i[r]=l?l(i[r],e[r]):e[r]}return i}const vh={data:Lr,props:Nr,emits:Nr,methods:es,computed:es,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:es,directives:es,watch:xh,provide:Lr,inject:yh};function Lr(i,e){return e?i?function(){return xe(H(i)?i.call(this,this):i,H(e)?e.call(this,this):e)}:e:i}function yh(i,e){return es(_o(i),_o(e))}function _o(i){if(M(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function _e(i,e){return i?[...new Set([].concat(i,e))]:e}function es(i,e){return i?xe(Object.create(null),i,e):e}function Nr(i,e){return i?M(i)&&M(e)?[...new Set([...i,...e])]:xe(Object.create(null),Mr(i),Mr(e??{})):e}function xh(i,e){if(!i)return e;if(!e)return i;const t=xe(Object.create(null),i);for(const s in e)t[s]=_e(i[s],e[s]);return t}function Ba(){return{app:null,config:{isNativeTag:rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $h=0;function wh(i,e){return function(s,n=null){H(s)||(s=xe({},s)),n!=null&&!re(n)&&(n=null);const o=Ba(),r=new WeakSet,l=[];let a=!1;const d=o.app={_uid:$h++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:ru,get config(){return o.config},set config(c){},use(c,...h){return r.has(c)||(c&&H(c.install)?(r.add(c),c.install(d,...h)):H(c)&&(r.add(c),c(d,...h))),d},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),d},component(c,h){return h?(o.components[c]=h,d):o.components[c]},directive(c,h){return h?(o.directives[c]=h,d):o.directives[c]},mount(c,h,g){if(!a){const y=d._ceVNode||We(s,n);return y.appContext=o,g===!0?g="svg":g===!1&&(g=void 0),i(y,c,g),a=!0,d._container=c,c.__vue_app__=d,En(y.component)}},onUnmount(c){l.push(c)},unmount(){a&&(bt(l,d._instance,16),i(null,d._container),delete d._container.__vue_app__)},provide(c,h){return o.provides[c]=h,d},runWithContext(c){const h=ki;ki=d;try{return c()}finally{ki=h}}};return d}}let ki=null;function Ch(i,e){if(me){let t=me.provides;const s=me.parent&&me.parent.provides;s===t&&(t=me.provides=Object.create(s)),t[i]=e}}function Xs(i,e,t=!1){const s=me||pe;if(s||ki){const n=ki?ki._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&i in n)return n[i];if(arguments.length>1)return t&&H(e)?e.call(s&&s.proxy):e}}const Ma={},Ha=()=>Object.create(Ma),La=i=>Object.getPrototypeOf(i)===Ma;function kh(i,e,t,s=!1){const n={},o=Ha();i.propsDefaults=Object.create(null),Na(i,e,n,o);for(const r in i.propsOptions[0])r in n||(n[r]=void 0);t?i.props=s?n:Md(n):i.type.props?i.props=n:i.props=o,i.attrs=o}function Th(i,e,t,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=i,l=Q(n),[a]=i.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const c=i.vnode.dynamicProps;for(let h=0;h<c.length;h++){let g=c[h];if(An(i.emitsOptions,g))continue;const y=e[g];if(a)if(Y(o,g))y!==o[g]&&(o[g]=y,d=!0);else{const _=Qe(g);n[_]=Ao(a,l,_,y,i,!1)}else y!==o[g]&&(o[g]=y,d=!0)}}}else{Na(i,e,n,o)&&(d=!0);let c;for(const h in l)(!e||!Y(e,h)&&((c=ri(h))===h||!Y(e,c)))&&(a?t&&(t[h]!==void 0||t[c]!==void 0)&&(n[h]=Ao(a,l,h,void 0,i,!0)):delete n[h]);if(o!==l)for(const h in o)(!e||!Y(e,h))&&(delete o[h],d=!0)}d&&$t(i.attrs,"set","")}function Na(i,e,t,s){const[n,o]=i.propsOptions;let r=!1,l;if(e)for(let a in e){if(is(a))continue;const d=e[a];let c;n&&Y(n,c=Qe(a))?!o||!o.includes(c)?t[c]=d:(l||(l={}))[c]=d:An(i.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,r=!0)}if(o){const a=Q(t),d=l||X;for(let c=0;c<o.length;c++){const h=o[c];t[h]=Ao(n,a,h,d[h],i,!Y(d,h))}}return r}function Ao(i,e,t,s,n,o){const r=i[t];if(r!=null){const l=Y(r,"default");if(l&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&H(a)){const{propsDefaults:d}=n;if(t in d)s=d[t];else{const c=As(n);s=d[t]=a.call(null,e),c()}}else s=a;n.ce&&n.ce._setProp(t,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===ri(t))&&(s=!0))}return s}const Sh=new WeakMap;function Va(i,e,t=!1){const s=t?Sh:e.propsCache,n=s.get(i);if(n)return n;const o=i.props,r={},l=[];let a=!1;if(!H(i)){const c=h=>{a=!0;const[g,y]=Va(h,e,!0);xe(r,g),y&&l.push(...y)};!t&&e.mixins.length&&e.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}if(!o&&!a)return re(i)&&s.set(i,yi),yi;if(M(o))for(let c=0;c<o.length;c++){const h=Qe(o[c]);Vr(h)&&(r[h]=X)}else if(o)for(const c in o){const h=Qe(c);if(Vr(h)){const g=o[c],y=r[h]=M(g)||H(g)?{type:g}:xe({},g),_=y.type;let R=!1,G=!0;if(M(_))for(let j=0;j<_.length;++j){const q=_[j],O=H(q)&&q.name;if(O==="Boolean"){R=!0;break}else O==="String"&&(G=!1)}else R=H(_)&&_.name==="Boolean";y[0]=R,y[1]=G,(R||Y(y,"default"))&&l.push(h)}}const d=[r,l];return re(i)&&s.set(i,d),d}function Vr(i){return i[0]!=="$"&&!is(i)}const ja=i=>i[0]==="_"||i==="$stable",tr=i=>M(i)?i.map(pt):[pt(i)],_h=(i,e,t)=>{if(e._n)return e;const s=Js((...n)=>tr(e(...n)),t);return s._c=!1,s},za=(i,e,t)=>{const s=i._ctx;for(const n in i){if(ja(n))continue;const o=i[n];if(H(o))e[n]=_h(n,o,s);else if(o!=null){const r=tr(o);e[n]=()=>r}}},Ua=(i,e)=>{const t=tr(e);i.slots.default=()=>t},qa=(i,e,t)=>{for(const s in e)(t||s!=="_")&&(i[s]=e[s])},Ah=(i,e,t)=>{const s=i.slots=Ha();if(i.vnode.shapeFlag&32){const n=e._;n?(qa(s,e,t),t&&sa(s,"_",n,!0)):za(e,s)}else e&&Ua(i,e)},Ih=(i,e,t)=>{const{vnode:s,slots:n}=i;let o=!0,r=X;if(s.shapeFlag&32){const l=e._;l?t&&l===1?o=!1:qa(n,e,t):(o=!e.$stable,za(e,n)),r=e}else e&&(Ua(i,e),r={default:1});if(o)for(const l in n)!ja(l)&&r[l]==null&&delete n[l]},Ve=zh;function Eh(i){return Oh(i)}function Oh(i,e){const t=kn();t.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:l,createComment:a,setText:d,setElementText:c,parentNode:h,nextSibling:g,setScopeId:y=gt,insertStaticContent:_}=i,R=(u,f,b,$=null,v=null,x=null,T=void 0,k=null,C=!!f.dynamicChildren)=>{if(u===f)return;u&&!Wi(u,f)&&($=Ms(u),lt(u,v,x,!0),u=null),f.patchFlag===-2&&(C=!1,f.dynamicChildren=null);const{type:w,ref:D,shapeFlag:S}=f;switch(w){case In:G(u,f,b,$);break;case Mt:j(u,f,b,$);break;case Ks:u==null&&q(f,b,$,T);break;case Ie:It(u,f,b,$,v,x,T,k,C);break;default:S&1?L(u,f,b,$,v,x,T,k,C):S&6?Fs(u,f,b,$,v,x,T,k,C):(S&64||S&128)&&w.process(u,f,b,$,v,x,T,k,C,Ui)}D!=null&&v&&dn(D,u&&u.ref,x,f||u,!f)},G=(u,f,b,$)=>{if(u==null)s(f.el=l(f.children),b,$);else{const v=f.el=u.el;f.children!==u.children&&d(v,f.children)}},j=(u,f,b,$)=>{u==null?s(f.el=a(f.children||""),b,$):f.el=u.el},q=(u,f,b,$)=>{[u.el,u.anchor]=_(u.children,f,b,$,u.el,u.anchor)},O=({el:u,anchor:f},b,$)=>{let v;for(;u&&u!==f;)v=g(u),s(u,b,$),u=v;s(f,b,$)},E=({el:u,anchor:f})=>{let b;for(;u&&u!==f;)b=g(u),n(u),u=b;n(f)},L=(u,f,b,$,v,x,T,k,C)=>{f.type==="svg"?T="svg":f.type==="math"&&(T="mathml"),u==null?te(f,b,$,v,x,T,k,C):mt(u,f,v,x,T,k,C)},te=(u,f,b,$,v,x,T,k)=>{let C,w;const{props:D,shapeFlag:S,transition:P,dirs:B}=u;if(C=u.el=r(u.type,x,D&&D.is,D),S&8?c(C,u.children):S&16&&Xe(u.children,C,null,$,v,Yn(u,x),T,k),B&&Wt(u,null,$,"created"),Te(C,u,u.scopeId,T,$),D){for(const K in D)K!=="value"&&!is(K)&&o(C,K,null,D[K],x,$);"value"in D&&o(C,"value",null,D.value,x),(w=D.onVnodeBeforeMount)&&ht(w,$,u)}B&&Wt(u,null,$,"beforeMount");const z=Rh(v,P);z&&P.beforeEnter(C),s(C,f,b),((w=D&&D.onVnodeMounted)||z||B)&&Ve(()=>{w&&ht(w,$,u),z&&P.enter(C),B&&Wt(u,null,$,"mounted")},v)},Te=(u,f,b,$,v)=>{if(b&&y(u,b),$)for(let x=0;x<$.length;x++)y(u,$[x]);if(v){let x=v.subTree;if(f===x||Xa(x.type)&&(x.ssContent===f||x.ssFallback===f)){const T=v.vnode;Te(u,T,T.scopeId,T.slotScopeIds,v.parent)}}},Xe=(u,f,b,$,v,x,T,k,C=0)=>{for(let w=C;w<u.length;w++){const D=u[w]=k?Rt(u[w]):pt(u[w]);R(null,D,f,b,$,v,x,T,k)}},mt=(u,f,b,$,v,x,T)=>{const k=f.el=u.el;let{patchFlag:C,dynamicChildren:w,dirs:D}=f;C|=u.patchFlag&16;const S=u.props||X,P=f.props||X;let B;if(b&&Qt(b,!1),(B=P.onVnodeBeforeUpdate)&&ht(B,b,f,u),D&&Wt(f,u,b,"beforeUpdate"),b&&Qt(b,!0),(S.innerHTML&&P.innerHTML==null||S.textContent&&P.textContent==null)&&c(k,""),w?ot(u.dynamicChildren,w,k,b,$,Yn(f,v),x):T||Z(u,f,k,null,b,$,Yn(f,v),x,!1),C>0){if(C&16)rt(k,S,P,b,v);else if(C&2&&S.class!==P.class&&o(k,"class",null,P.class,v),C&4&&o(k,"style",S.style,P.style,v),C&8){const z=f.dynamicProps;for(let K=0;K<z.length;K++){const J=z[K],Le=S[J],Fe=P[J];(Fe!==Le||J==="value")&&o(k,J,Le,Fe,v,b)}}C&1&&u.children!==f.children&&c(k,f.children)}else!T&&w==null&&rt(k,S,P,b,v);((B=P.onVnodeUpdated)||D)&&Ve(()=>{B&&ht(B,b,f,u),D&&Wt(f,u,b,"updated")},$)},ot=(u,f,b,$,v,x,T)=>{for(let k=0;k<f.length;k++){const C=u[k],w=f[k],D=C.el&&(C.type===Ie||!Wi(C,w)||C.shapeFlag&70)?h(C.el):b;R(C,w,D,null,$,v,x,T,!0)}},rt=(u,f,b,$,v)=>{if(f!==b){if(f!==X)for(const x in f)!is(x)&&!(x in b)&&o(u,x,f[x],null,v,$);for(const x in b){if(is(x))continue;const T=b[x],k=f[x];T!==k&&x!=="value"&&o(u,x,k,T,v,$)}"value"in b&&o(u,"value",f.value,b.value,v)}},It=(u,f,b,$,v,x,T,k,C)=>{const w=f.el=u?u.el:l(""),D=f.anchor=u?u.anchor:l("");let{patchFlag:S,dynamicChildren:P,slotScopeIds:B}=f;B&&(k=k?k.concat(B):B),u==null?(s(w,b,$),s(D,b,$),Xe(f.children||[],b,D,v,x,T,k,C)):S>0&&S&64&&P&&u.dynamicChildren?(ot(u.dynamicChildren,P,b,v,x,T,k),(f.key!=null||v&&f===v.subTree)&&Ga(u,f,!0)):Z(u,f,b,D,v,x,T,k,C)},Fs=(u,f,b,$,v,x,T,k,C)=>{f.slotScopeIds=k,u==null?f.shapeFlag&512?v.ctx.activate(f,b,$,T,C):Nn(f,b,$,v,x,T,C):Sr(u,f,C)},Nn=(u,f,b,$,v,x,T)=>{const k=u.component=Kh(u,$,v);if(Ia(u)&&(k.ctx.renderer=Ui),eu(k,!1,T),k.asyncDep){if(v&&v.registerDep(k,Se,T),!u.el){const C=k.subTree=We(Mt);j(null,C,f,b)}}else Se(k,u,f,b,v,x,T)},Sr=(u,f,b)=>{const $=f.component=u.component;if(Vh(u,f,b))if($.asyncDep&&!$.asyncResolved){ne($,f,b);return}else $.next=f,$.update();else f.el=u.el,$.vnode=f},Se=(u,f,b,$,v,x,T)=>{const k=()=>{if(u.isMounted){let{next:S,bu:P,u:B,parent:z,vnode:K}=u;{const ct=Wa(u);if(ct){S&&(S.el=K.el,ne(u,S,T)),ct.asyncDep.then(()=>{u.isUnmounted||k()});return}}let J=S,Le;Qt(u,!1),S?(S.el=K.el,ne(u,S,T)):S=K,P&&Qs(P),(Le=S.props&&S.props.onVnodeBeforeUpdate)&&ht(Le,z,S,K),Qt(u,!0);const Fe=zr(u),at=u.subTree;u.subTree=Fe,R(at,Fe,h(at.el),Ms(at),u,v,x),S.el=Fe.el,J===null&&jh(u,Fe.el),B&&Ve(B,v),(Le=S.props&&S.props.onVnodeUpdated)&&Ve(()=>ht(Le,z,S,K),v)}else{let S;const{el:P,props:B}=f,{bm:z,m:K,parent:J,root:Le,type:Fe}=u,at=Ci(f);Qt(u,!1),z&&Qs(z),!at&&(S=B&&B.onVnodeBeforeMount)&&ht(S,J,f),Qt(u,!0);{Le.ce&&Le.ce._injectChildStyle(Fe);const ct=u.subTree=zr(u);R(null,ct,b,$,u,v,x),f.el=ct.el}if(K&&Ve(K,v),!at&&(S=B&&B.onVnodeMounted)){const ct=f;Ve(()=>ht(S,J,ct),v)}(f.shapeFlag&256||J&&Ci(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&Ve(u.a,v),u.isMounted=!0,f=b=$=null}};u.scope.on();const C=u.effect=new la(k);u.scope.off();const w=u.update=C.run.bind(C),D=u.job=C.runIfDirty.bind(C);D.i=u,D.id=u.uid,C.scheduler=()=>Xo(D),Qt(u,!0),w()},ne=(u,f,b)=>{f.component=u;const $=u.vnode.props;u.vnode=f,u.next=null,Th(u,f.props,$,b),Ih(u,f.children,b),Nt(),Dr(u),Vt()},Z=(u,f,b,$,v,x,T,k,C=!1)=>{const w=u&&u.children,D=u?u.shapeFlag:0,S=f.children,{patchFlag:P,shapeFlag:B}=f;if(P>0){if(P&128){Bs(w,S,b,$,v,x,T,k,C);return}else if(P&256){qt(w,S,b,$,v,x,T,k,C);return}}B&8?(D&16&&zi(w,v,x),S!==w&&c(b,S)):D&16?B&16?Bs(w,S,b,$,v,x,T,k,C):zi(w,v,x,!0):(D&8&&c(b,""),B&16&&Xe(S,b,$,v,x,T,k,C))},qt=(u,f,b,$,v,x,T,k,C)=>{u=u||yi,f=f||yi;const w=u.length,D=f.length,S=Math.min(w,D);let P;for(P=0;P<S;P++){const B=f[P]=C?Rt(f[P]):pt(f[P]);R(u[P],B,b,null,v,x,T,k,C)}w>D?zi(u,v,x,!0,!1,S):Xe(f,b,$,v,x,T,k,C,S)},Bs=(u,f,b,$,v,x,T,k,C)=>{let w=0;const D=f.length;let S=u.length-1,P=D-1;for(;w<=S&&w<=P;){const B=u[w],z=f[w]=C?Rt(f[w]):pt(f[w]);if(Wi(B,z))R(B,z,b,null,v,x,T,k,C);else break;w++}for(;w<=S&&w<=P;){const B=u[S],z=f[P]=C?Rt(f[P]):pt(f[P]);if(Wi(B,z))R(B,z,b,null,v,x,T,k,C);else break;S--,P--}if(w>S){if(w<=P){const B=P+1,z=B<D?f[B].el:$;for(;w<=P;)R(null,f[w]=C?Rt(f[w]):pt(f[w]),b,z,v,x,T,k,C),w++}}else if(w>P)for(;w<=S;)lt(u[w],v,x,!0),w++;else{const B=w,z=w,K=new Map;for(w=z;w<=P;w++){const Ne=f[w]=C?Rt(f[w]):pt(f[w]);Ne.key!=null&&K.set(Ne.key,w)}let J,Le=0;const Fe=P-z+1;let at=!1,ct=0;const qi=new Array(Fe);for(w=0;w<Fe;w++)qi[w]=0;for(w=B;w<=S;w++){const Ne=u[w];if(Le>=Fe){lt(Ne,v,x,!0);continue}let dt;if(Ne.key!=null)dt=K.get(Ne.key);else for(J=z;J<=P;J++)if(qi[J-z]===0&&Wi(Ne,f[J])){dt=J;break}dt===void 0?lt(Ne,v,x,!0):(qi[dt-z]=w+1,dt>=ct?ct=dt:at=!0,R(Ne,f[dt],b,null,v,x,T,k,C),Le++)}const Ir=at?Ph(qi):yi;for(J=Ir.length-1,w=Fe-1;w>=0;w--){const Ne=z+w,dt=f[Ne],Er=Ne+1<D?f[Ne+1].el:$;qi[w]===0?R(null,dt,b,Er,v,x,T,k,C):at&&(J<0||w!==Ir[J]?Gt(dt,b,Er,2):J--)}}},Gt=(u,f,b,$,v=null)=>{const{el:x,type:T,transition:k,children:C,shapeFlag:w}=u;if(w&6){Gt(u.component.subTree,f,b,$);return}if(w&128){u.suspense.move(f,b,$);return}if(w&64){T.move(u,f,b,Ui);return}if(T===Ie){s(x,f,b);for(let S=0;S<C.length;S++)Gt(C[S],f,b,$);s(u.anchor,f,b);return}if(T===Ks){O(u,f,b);return}if($!==2&&w&1&&k)if($===0)k.beforeEnter(x),s(x,f,b),Ve(()=>k.enter(x),v);else{const{leave:S,delayLeave:P,afterLeave:B}=k,z=()=>s(x,f,b),K=()=>{S(x,()=>{z(),B&&B()})};P?P(x,z,K):K()}else s(x,f,b)},lt=(u,f,b,$=!1,v=!1)=>{const{type:x,props:T,ref:k,children:C,dynamicChildren:w,shapeFlag:D,patchFlag:S,dirs:P,cacheIndex:B}=u;if(S===-2&&(v=!1),k!=null&&dn(k,null,b,u,!0),B!=null&&(f.renderCache[B]=void 0),D&256){f.ctx.deactivate(u);return}const z=D&1&&P,K=!Ci(u);let J;if(K&&(J=T&&T.onVnodeBeforeUnmount)&&ht(J,f,u),D&6)od(u.component,b,$);else{if(D&128){u.suspense.unmount(b,$);return}z&&Wt(u,null,f,"beforeUnmount"),D&64?u.type.remove(u,f,b,Ui,$):w&&!w.hasOnce&&(x!==Ie||S>0&&S&64)?zi(w,f,b,!1,!0):(x===Ie&&S&384||!v&&D&16)&&zi(C,f,b),$&&_r(u)}(K&&(J=T&&T.onVnodeUnmounted)||z)&&Ve(()=>{J&&ht(J,f,u),z&&Wt(u,null,f,"unmounted")},b)},_r=u=>{const{type:f,el:b,anchor:$,transition:v}=u;if(f===Ie){nd(b,$);return}if(f===Ks){E(u);return}const x=()=>{n(b),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:k}=v,C=()=>T(b,x);k?k(u.el,x,C):C()}else x()},nd=(u,f)=>{let b;for(;u!==f;)b=g(u),n(u),u=b;n(f)},od=(u,f,b)=>{const{bum:$,scope:v,job:x,subTree:T,um:k,m:C,a:w}=u;jr(C),jr(w),$&&Qs($),v.stop(),x&&(x.flags|=8,lt(T,u,f,b)),k&&Ve(k,f),Ve(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},zi=(u,f,b,$=!1,v=!1,x=0)=>{for(let T=x;T<u.length;T++)lt(u[T],f,b,$,v)},Ms=u=>{if(u.shapeFlag&6)return Ms(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=g(u.anchor||u.el),b=f&&f[Zd];return b?g(b):f};let Vn=!1;const Ar=(u,f,b)=>{u==null?f._vnode&&lt(f._vnode,null,null,!0):R(f._vnode||null,u,f,null,null,null,b),f._vnode=u,Vn||(Vn=!0,Dr(),Ta(),Vn=!1)},Ui={p:R,um:lt,m:Gt,r:_r,mt:Nn,mc:Xe,pc:Z,pbc:ot,n:Ms,o:i};return{render:Ar,hydrate:void 0,createApp:wh(Ar)}}function Yn({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qt({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Rh(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Ga(i,e,t=!1){const s=i.children,n=e.children;if(M(s)&&M(n))for(let o=0;o<s.length;o++){const r=s[o];let l=n[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[o]=Rt(n[o]),l.el=r.el),!t&&l.patchFlag!==-2&&Ga(r,l)),l.type===In&&(l.el=r.el)}}function Ph(i){const e=i.slice(),t=[0];let s,n,o,r,l;const a=i.length;for(s=0;s<a;s++){const d=i[s];if(d!==0){if(n=t[t.length-1],i[n]<d){e[s]=n,t.push(s);continue}for(o=0,r=t.length-1;o<r;)l=o+r>>1,i[t[l]]<d?o=l+1:r=l;d<i[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=e[r];return t}function Wa(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wa(e)}function jr(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Dh=Symbol.for("v-scx"),Fh=()=>Xs(Dh);function Zs(i,e,t){return Qa(i,e,t)}function Qa(i,e,t=X){const{immediate:s,deep:n,flush:o,once:r}=t,l=xe({},t),a=e&&s||!e&&o!=="post";let d;if(vs){if(o==="sync"){const y=Fh();d=y.__watcherHandles||(y.__watcherHandles=[])}else if(!a){const y=()=>{};return y.stop=gt,y.resume=gt,y.pause=gt,y}}const c=me;l.call=(y,_,R)=>bt(y,c,_,R);let h=!1;o==="post"?l.scheduler=y=>{Ve(y,c&&c.suspense)}:o!=="sync"&&(h=!0,l.scheduler=(y,_)=>{_?y():Xo(y)}),l.augmentJob=y=>{e&&(y.flags|=4),h&&(y.flags|=2,c&&(y.id=c.uid,y.i=c))};const g=Gd(i,e,l);return vs&&(d?d.push(g):a&&g()),g}function Bh(i,e,t){const s=this.proxy,n=de(i)?i.includes(".")?Ya(s,i):()=>s[i]:i.bind(s,s);let o;H(e)?o=e:(o=e.handler,t=e);const r=As(this),l=Qa(n,o.bind(s),t);return r(),l}function Ya(i,e){const t=e.split(".");return()=>{let s=i;for(let n=0;n<t.length&&s;n++)s=s[t[n]];return s}}const Mh=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Qe(e)}Modifiers`]||i[`${ri(e)}Modifiers`];function Hh(i,e,...t){if(i.isUnmounted)return;const s=i.vnode.props||X;let n=t;const o=e.startsWith("update:"),r=o&&Mh(s,e.slice(7));r&&(r.trim&&(n=t.map(c=>de(c)?c.trim():c)),r.number&&(n=t.map(yo)));let l,a=s[l=jn(e)]||s[l=jn(Qe(e))];!a&&o&&(a=s[l=jn(ri(e))]),a&&bt(a,i,6,n);const d=s[l+"Once"];if(d){if(!i.emitted)i.emitted={};else if(i.emitted[l])return;i.emitted[l]=!0,bt(d,i,6,n)}}function Ja(i,e,t=!1){const s=e.emitsCache,n=s.get(i);if(n!==void 0)return n;const o=i.emits;let r={},l=!1;if(!H(i)){const a=d=>{const c=Ja(d,e,!0);c&&(l=!0,xe(r,c))};!t&&e.mixins.length&&e.mixins.forEach(a),i.extends&&a(i.extends),i.mixins&&i.mixins.forEach(a)}return!o&&!l?(re(i)&&s.set(i,null),null):(M(o)?o.forEach(a=>r[a]=null):xe(r,o),re(i)&&s.set(i,r),r)}function An(i,e){return!i||!xn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(i,e[0].toLowerCase()+e.slice(1))||Y(i,ri(e))||Y(i,e))}function zr(i){const{type:e,vnode:t,proxy:s,withProxy:n,propsOptions:[o],slots:r,attrs:l,emit:a,render:d,renderCache:c,props:h,data:g,setupState:y,ctx:_,inheritAttrs:R}=i,G=cn(i);let j,q;try{if(t.shapeFlag&4){const E=n||s,L=E;j=pt(d.call(L,E,c,h,y,g,_)),q=l}else{const E=e;j=pt(E.length>1?E(h,{attrs:l,slots:r,emit:a}):E(h,null)),q=e.props?l:Lh(l)}}catch(E){rs.length=0,Sn(E,i,1),j=We(Mt)}let O=j;if(q&&R!==!1){const E=Object.keys(q),{shapeFlag:L}=O;E.length&&L&7&&(o&&E.some(Lo)&&(q=Nh(q,o)),O=Ei(O,q,!1,!0))}return t.dirs&&(O=Ei(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(t.dirs):t.dirs),t.transition&&Zo(O,t.transition),j=O,cn(G),j}const Lh=i=>{let e;for(const t in i)(t==="class"||t==="style"||xn(t))&&((e||(e={}))[t]=i[t]);return e},Nh=(i,e)=>{const t={};for(const s in i)(!Lo(s)||!(s.slice(9)in e))&&(t[s]=i[s]);return t};function Vh(i,e,t){const{props:s,children:n,component:o}=i,{props:r,children:l,patchFlag:a}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return s?Ur(s,r,d):!!r;if(a&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const g=c[h];if(r[g]!==s[g]&&!An(d,g))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?Ur(s,r,d):!0:!!r;return!1}function Ur(i,e,t){const s=Object.keys(e);if(s.length!==Object.keys(i).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(e[o]!==i[o]&&!An(t,o))return!0}return!1}function jh({vnode:i,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=e.vnode).el=t,e=e.parent;else break}}const Xa=i=>i.__isSuspense;function zh(i,e){e&&e.pendingBranch?M(i)?e.effects.push(...i):e.effects.push(i):Jd(i)}const Ie=Symbol.for("v-fgt"),In=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),Ks=Symbol.for("v-stc"),rs=[];let ze=null;function Ze(i=!1){rs.push(ze=i?null:[])}function Uh(){rs.pop(),ze=rs[rs.length-1]||null}let ms=1;function qr(i,e=!1){ms+=i,i<0&&ze&&e&&(ze.hasOnce=!0)}function Za(i){return i.dynamicChildren=ms>0?ze||yi:null,Uh(),ms>0&&ze&&ze.push(i),i}function Kt(i,e,t,s,n,o){return Za(he(i,e,t,s,n,o,!0))}function un(i,e,t,s,n){return Za(We(i,e,t,s,n,!0))}function ir(i){return i?i.__v_isVNode===!0:!1}function Wi(i,e){return i.type===e.type&&i.key===e.key}const Ka=({key:i})=>i??null,en=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?de(i)||ve(i)||H(i)?{i:pe,r:i,k:e,f:!!t}:i:null);function he(i,e=null,t=null,s=0,n=null,o=i===Ie?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Ka(e),ref:e&&en(e),scopeId:_a,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:pe};return l?(sr(a,t),o&128&&i.normalize(a)):t&&(a.shapeFlag|=de(t)?8:16),ms>0&&!r&&ze&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&ze.push(a),a}const We=qh;function qh(i,e=null,t=null,s=0,n=null,o=!1){if((!i||i===uh)&&(i=Mt),ir(i)){const l=Ei(i,e,!0);return t&&sr(l,t),ms>0&&!o&&ze&&(l.shapeFlag&6?ze[ze.indexOf(i)]=l:ze.push(l)),l.patchFlag=-2,l}if(ou(i)&&(i=i.__vccOpts),e){e=Gh(e);let{class:l,style:a}=e;l&&!de(l)&&(e.class=Ii(l)),re(a)&&(Jo(a)&&!M(a)&&(a=xe({},a)),e.style=jo(a))}const r=de(i)?1:Xa(i)?128:Kd(i)?64:re(i)?4:H(i)?2:0;return he(i,e,t,s,n,r,o,!0)}function Gh(i){return i?Jo(i)||La(i)?xe({},i):i:null}function Ei(i,e,t=!1,s=!1){const{props:n,ref:o,patchFlag:r,children:l,transition:a}=i,d=e?Jh(n||{},e):n,c={__v_isVNode:!0,__v_skip:!0,type:i.type,props:d,key:d&&Ka(d),ref:e&&e.ref?t&&o?M(o)?o.concat(en(e)):[o,en(e)]:en(e):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:l,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ie?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:a,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ei(i.ssContent),ssFallback:i.ssFallback&&Ei(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return a&&s&&Zo(c,a.clone(c)),c}function Wh(i=" ",e=0){return We(In,null,i,e)}function Qh(i,e){const t=We(Ks,null,i);return t.staticCount=e,t}function Yh(i="",e=!1){return e?(Ze(),un(Mt,null,i)):We(Mt,null,i)}function pt(i){return i==null||typeof i=="boolean"?We(Mt):M(i)?We(Ie,null,i.slice()):ir(i)?Rt(i):We(In,null,String(i))}function Rt(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ei(i)}function sr(i,e){let t=0;const{shapeFlag:s}=i;if(e==null)e=null;else if(M(e))t=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),sr(i,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!La(e)?e._ctx=pe:n===3&&pe&&(pe.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:pe},t=32):(e=String(e),s&64?(t=16,e=[Wh(e)]):t=8);i.children=e,i.shapeFlag|=t}function Jh(...i){const e={};for(let t=0;t<i.length;t++){const s=i[t];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=Ii([e.class,s.class]));else if(n==="style")e.style=jo([e.style,s.style]);else if(xn(n)){const o=e[n],r=s[n];r&&o!==r&&!(M(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=s[n])}return e}function ht(i,e,t,s=null){bt(i,e,7,[t,s])}const Xh=Ba();let Zh=0;function Kh(i,e,t){const s=i.type,n=(e?e.appContext:i.appContext)||Xh,o={uid:Zh++,vnode:i,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Va(s,n),emitsOptions:Ja(s,n),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Hh.bind(null,o),i.ce&&i.ce(o),o}let me=null,fn,Io;{const i=kn(),e=(t,s)=>{let n;return(n=i[t])||(n=i[t]=[]),n.push(s),o=>{n.length>1?n.forEach(r=>r(o)):n[0](o)}};fn=e("__VUE_INSTANCE_SETTERS__",t=>me=t),Io=e("__VUE_SSR_SETTERS__",t=>vs=t)}const As=i=>{const e=me;return fn(i),i.scope.on(),()=>{i.scope.off(),fn(e)}},Gr=()=>{me&&me.scope.off(),fn(null)};function ec(i){return i.vnode.shapeFlag&4}let vs=!1;function eu(i,e=!1,t=!1){e&&Io(e);const{props:s,children:n}=i.vnode,o=ec(i);kh(i,s,o,e),Ah(i,n,t);const r=o?tu(i,e):void 0;return e&&Io(!1),r}function tu(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,gh);const{setup:s}=t;if(s){Nt();const n=i.setupContext=s.length>1?su(i):null,o=As(i),r=_s(s,i,0,[i.props,n]),l=ea(r);if(Vt(),o(),(l||i.sp)&&!Ci(i)&&Aa(i),l){if(r.then(Gr,Gr),e)return r.then(a=>{Wr(i,a)}).catch(a=>{Sn(a,i,0)});i.asyncDep=r}else Wr(i,r)}else tc(i)}function Wr(i,e,t){H(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:re(e)&&(i.setupState=wa(e)),tc(i)}function tc(i,e,t){const s=i.type;i.render||(i.render=s.render||gt);{const n=As(i);Nt();try{bh(i)}finally{Vt(),n()}}}const iu={get(i,e){return ge(i,"get",""),i[e]}};function su(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,iu),slots:i.slots,emit:i.emit,expose:e}}function En(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(wa(Hd(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in os)return os[t](i)},has(e,t){return t in e||t in os}})):i.proxy}function nu(i,e=!0){return H(i)?i.displayName||i.name:i.name||e&&i.__name}function ou(i){return H(i)&&"__vccOpts"in i}const ic=(i,e)=>Ud(i,e,vs),ru="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Eo;const Qr=typeof window<"u"&&window.trustedTypes;if(Qr)try{Eo=Qr.createPolicy("vue",{createHTML:i=>i})}catch{}const sc=Eo?i=>Eo.createHTML(i):i=>i,lu="http://www.w3.org/2000/svg",au="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,Yr=yt&&yt.createElement("template"),cu={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,s)=>{const n=e==="svg"?yt.createElementNS(lu,i):e==="mathml"?yt.createElementNS(au,i):t?yt.createElement(i,{is:t}):yt.createElement(i);return i==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:i=>yt.createTextNode(i),createComment:i=>yt.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>yt.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,s,n,o){const r=t?t.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===o||!(n=n.nextSibling)););else{Yr.innerHTML=sc(s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i);const l=Yr.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},du=Symbol("_vtc");function hu(i,e,t){const s=i[du];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Jr=Symbol("_vod"),uu=Symbol("_vsh"),fu=Symbol(""),pu=/(^|;)\s*display\s*:/;function gu(i,e,t){const s=i.style,n=de(t);let o=!1;if(t&&!n){if(e)if(de(e))for(const r of e.split(";")){const l=r.slice(0,r.indexOf(":")).trim();t[l]==null&&tn(s,l,"")}else for(const r in e)t[r]==null&&tn(s,r,"");for(const r in t)r==="display"&&(o=!0),tn(s,r,t[r])}else if(n){if(e!==t){const r=s[fu];r&&(t+=";"+r),s.cssText=t,o=pu.test(t)}}else e&&i.removeAttribute("style");Jr in i&&(i[Jr]=o?s.display:"",i[uu]&&(s.display="none"))}const Xr=/\s*!important$/;function tn(i,e,t){if(M(t))t.forEach(s=>tn(i,e,s));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const s=bu(i,e);Xr.test(t)?i.setProperty(ri(s),t.replace(Xr,""),"important"):i[s]=t}}const Zr=["Webkit","Moz","ms"],Jn={};function bu(i,e){const t=Jn[e];if(t)return t;let s=Qe(e);if(s!=="filter"&&s in i)return Jn[e]=s;s=Cn(s);for(let n=0;n<Zr.length;n++){const o=Zr[n]+s;if(o in i)return Jn[e]=o}return e}const Kr="http://www.w3.org/1999/xlink";function el(i,e,t,s,n,o=bd(e)){s&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Kr,e.slice(6,e.length)):i.setAttributeNS(Kr,e,t):t==null||o&&!na(t)?i.removeAttribute(e):i.setAttribute(e,o?"":Tt(t)?String(t):t)}function tl(i,e,t,s,n){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?sc(t):t);return}const o=i.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?i.getAttribute("value")||"":i.value,a=t==null?i.type==="checkbox"?"on":"":String(t);(l!==a||!("_value"in i))&&(i.value=a),t==null&&i.removeAttribute(e),i._value=t;return}let r=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=na(t):t==null&&l==="string"?(t="",r=!0):l==="number"&&(t=0,r=!0)}try{i[e]=t}catch{}r&&i.removeAttribute(n||e)}function pi(i,e,t,s){i.addEventListener(e,t,s)}function mu(i,e,t,s){i.removeEventListener(e,t,s)}const il=Symbol("_vei");function vu(i,e,t,s,n=null){const o=i[il]||(i[il]={}),r=o[e];if(s&&r)r.value=s;else{const[l,a]=yu(e);if(s){const d=o[e]=wu(s,n);pi(i,l,d,a)}else r&&(mu(i,l,r,a),o[e]=void 0)}}const sl=/(?:Once|Passive|Capture)$/;function yu(i){let e;if(sl.test(i)){e={};let s;for(;s=i.match(sl);)i=i.slice(0,i.length-s[0].length),e[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ri(i.slice(2)),e]}let Xn=0;const xu=Promise.resolve(),$u=()=>Xn||(xu.then(()=>Xn=0),Xn=Date.now());function wu(i,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;bt(Cu(s,t.value),e,5,[s])};return t.value=i,t.attached=$u(),t}function Cu(i,e){if(M(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const nl=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,ku=(i,e,t,s,n,o)=>{const r=n==="svg";e==="class"?hu(i,s,r):e==="style"?gu(i,t,s):xn(e)?Lo(e)||vu(i,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tu(i,e,s,r))?(tl(i,e,s),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&el(i,e,s,r,o,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!de(s))?tl(i,Qe(e),s,o,e):(e==="true-value"?i._trueValue=s:e==="false-value"&&(i._falseValue=s),el(i,e,s,r))};function Tu(i,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in i&&nl(e)&&H(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=i.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return nl(e)&&de(t)?!1:e in i}const ol=i=>{const e=i.props["onUpdate:modelValue"]||!1;return M(e)?t=>Qs(e,t):e};function Su(i){i.target.composing=!0}function rl(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zn=Symbol("_assign"),_u={created(i,{modifiers:{lazy:e,trim:t,number:s}},n){i[Zn]=ol(n);const o=s||n.props&&n.props.type==="number";pi(i,e?"change":"input",r=>{if(r.target.composing)return;let l=i.value;t&&(l=l.trim()),o&&(l=yo(l)),i[Zn](l)}),t&&pi(i,"change",()=>{i.value=i.value.trim()}),e||(pi(i,"compositionstart",Su),pi(i,"compositionend",rl),pi(i,"change",rl))},mounted(i,{value:e}){i.value=e??""},beforeUpdate(i,{value:e,oldValue:t,modifiers:{lazy:s,trim:n,number:o}},r){if(i[Zn]=ol(r),i.composing)return;const l=(o||i.type==="number")&&!/^0\d/.test(i.value)?yo(i.value):i.value,a=e??"";l!==a&&(document.activeElement===i&&i.type!=="range"&&(s&&e===t||n&&i.value.trim()===a)||(i.value=a))}},Au=["ctrl","shift","alt","meta"],Iu={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>Au.some(t=>i[`${t}Key`]&&!e.includes(t))},Eu=(i,e)=>{const t=i._withMods||(i._withMods={}),s=e.join(".");return t[s]||(t[s]=(n,...o)=>{for(let r=0;r<e.length;r++){const l=Iu[e[r]];if(l&&l(n,e))return}return i(n,...o)})},Ou=xe({patchProp:ku},cu);let ll;function Ru(){return ll||(ll=Eh(Ou))}const Pu=(...i)=>{const e=Ru().createApp(...i),{mount:t}=e;return e.mount=s=>{const n=Fu(s);if(!n)return;const o=e._component;!H(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=t(n,!1,Du(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function Du(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Fu(i){return de(i)?document.querySelector(i):i}const nr=(i,e)=>{const t=i.__vccOpts||i;for(const[s,n]of e)t[s]=n;return t},Bu=Ko({name:"ToggleQuickPickOption",props:{selected:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},isServer:{type:Boolean,default:!1}},emits:["toggle"],setup(i,{emit:e}){const t=ut(null);return Zs(()=>i.checked,o=>{t.value&&(t.value.checked=o)}),{checkboxRef:t,toggleCheckbox:()=>{e("toggle",!i.checked)},handleCheckboxChange:o=>{o.stopPropagation(),e("toggle",o.target.checked)}}}}),Mu=["checked"],Hu={class:"quick-pick-option-content"},Lu={class:"option-description"},Nu={class:"quick-pick-option-metadata"},Vu={key:0,appearance:"icon"};function ju(i,e,t,s,n,o){return Ze(),Kt("section",{class:Ii(["quick-pick-option",{selected:i.selected,"server-option":i.isServer}]),onClick:e[2]||(e[2]=(...r)=>i.toggleCheckbox&&i.toggleCheckbox(...r))},[he("vscode-checkbox",{ref:"checkboxRef",checked:i.checked,onClick:e[0]||(e[0]=Eu(()=>{},["stop"])),onChange:e[1]||(e[1]=(...r)=>i.handleCheckboxChange&&i.handleCheckboxChange(...r))},null,40,Mu),he("div",Hu,[he("div",{class:Ii(["option-label",{bold:i.bold}])},[Wn(i.$slots,"default")],2),he("div",Lu,[Wn(i.$slots,"description")])]),he("div",Nu,[Wn(i.$slots,"metadata"),i.isServer&&i.selected?(Ze(),Kt("vscode-button",Vu,e[3]||(e[3]=[he("vscode-icon",{name:"settings-gear"},null,-1)]))):Yh("",!0)])],2)}const zu=nr(Bu,[["render",ju]]),Uu=Ko({name:"QuickPick",components:{ToggleQuickPickOption:zu},setup(){const i=ut(0),e=ut(!0),t=ut(null),s=ut(null),n=ut(null),o=ut(null),r=ut([{name:"filesystem",options:[{label:"MCP Server: filesystem",description:"",metadata:"from claude_desktop_config.json",checked:!0,bold:!0},{label:"read_file",description:"Read the complete contents of a file from the file system.",checked:!0},{label:"read_multiple_file",description:"Read the complete contents of multiple files simultaneously.",checked:!0},{label:"write_file",description:"Create a new file or completely overwrite an existing file with new content.",checked:!0},{label:"edit_file",description:"Make line based edits to a file.",checked:!0},{label:"create_directory",description:"Create a new directory or ensure a directory exists.",checked:!0},{label:"list_directory",description:"Get a detailed list of all files and directories in a specified path.",checked:!0}]},{name:"cloudflare",options:[{label:"MCP Server: cloudflare",description:"",metadata:"from .cursor/mcp.json",checked:!0,bold:!0},{label:"r2_list_buckets",description:"List all R2 buckets in your account.",checked:!0},{label:"r2_create_bucket",description:"Create a new R2 bucket.",checked:!0},{label:"r2_delete_bucket",description:"Delete an R2 bucket.",checked:!0}]},{name:"Azure",options:[{label:"GitHub Copilot for Azure",description:"",metadata:"from extension",checked:!0,bold:!0},{label:"cost",description:"Provide detailed cost analysis for Azure services.",checked:!0},{label:"resource",description:"Get detailed information about a specific Azure resource.",checked:!0},{label:"subscription",description:"Get detailed information about a specific Azure subscription.",checked:!0},{label:"resource_group",description:"Get detailed information about a specific Azure resource group.",checked:!0},{label:"location",description:"Get detailed information about a specific Azure location.",checked:!0},{label:"service",description:"Get detailed information about a specific Azure service.",checked:!0}]}]),l=ic(()=>r.value.every(O=>O.options.every(E=>E.checked))),a=O=>r.value[O].options.slice(1).every(L=>L.checked),d=O=>{r.value.forEach(E=>{E.options.forEach(L=>{L.checked=O})}),h()},c=ut([]),h=()=>{const O=[];r.value.forEach(E=>{E.options.forEach(L=>{O.push({...L,groupName:E.name})})}),c.value=O};h();const g=(O,E)=>{const L=r.value[O];for(let te=1;te<L.options.length;te++)L.options[te].checked=E},y=(O,E,L)=>{const te=r.value[O].options[E];if(te.checked,te.checked=L,E===0)g(O,L);else{const Te=a(O);r.value[O].options[0].checked=Te}h(),o.value&&(o.value.checked=l.value)},_=O=>{n.value&&!n.value.contains(O.target)&&R()},R=()=>{n.value&&(n.value.focus(),n.value.blur()),e.value=!1,i.value=-1},G=O=>{var E,L,te,Te;if(O.key==="Escape"){O.preventDefault(),R();return}if(O.key==="ArrowDown")O.preventDefault(),e.value?(e.value=!1,i.value=0,(E=t.value)==null||E.blur()):i.value===c.value.length-1?(e.value=!0,(L=t.value)==null||L.focus()):i.value++;else if(O.key==="ArrowUp")O.preventDefault(),e.value?(e.value=!1,i.value=c.value.length-1,(te=t.value)==null||te.blur()):i.value===0?(e.value=!0,(Te=t.value)==null||Te.focus()):i.value--;else if(O.key===" "&&!e.value&&i.value>=0){O.preventDefault();let Xe=c.value[i.value];for(let mt=0;mt<r.value.length;mt++){const ot=r.value[mt];for(let rt=0;rt<ot.options.length;rt++){const It=ot.options[rt];if(It.label===Xe.label&&It.description===Xe.description){y(mt,rt,!It.checked);return}}}}},j=()=>{e.value=!0},q=O=>{O.target===s.value&&O.preventDefault()};return er(()=>{document.addEventListener("keydown",G),document.addEventListener("mousedown",_),setTimeout(()=>{var O;(O=t.value)==null||O.focus(),o.value&&(o.value.checked=l.value)},0)}),Oa(()=>{document.removeEventListener("keydown",G),document.removeEventListener("mousedown",_)}),{selectedIndex:i,optionGroups:r,flattenedOptions:c,isTextFieldFocused:e,textFieldRef:t,optionsContainerRef:s,quickPickRef:n,headerCheckboxRef:o,handleTextFieldFocus:j,handleContainerClick:q,toggleOption:y,toggleAllOptions:d,allOptionsChecked:l}}}),qu={class:"quick-pick",ref:"quickPickRef"},Gu={class:"quick-pick-header"};function Wu(i,e,t,s,n,o){const r=hh("ToggleQuickPickOption");return Ze(),Kt("section",qu,[he("div",Gu,[Xd(he("vscode-checkbox",{ref:"headerCheckboxRef","onUpdate:modelValue":e[0]||(e[0]=l=>i.allOptionsChecked=l),onClick:e[1]||(e[1]=l=>i.toggleAllOptions(!i.allOptionsChecked))},null,512),[[_u,i.allOptionsChecked]]),he("vscode-text-field",{ref:"textFieldRef",placeholder:"Select tools that are available to chat",onFocus:e[2]||(e[2]=(...l)=>i.handleTextFieldFocus&&i.handleTextFieldFocus(...l))},null,544),e[4]||(e[4]=he("vscode-button",null,"OK",-1))]),he("div",{class:"quick-pick-options",ref:"optionsContainerRef",onClick:e[3]||(e[3]=(...l)=>i.handleContainerClick&&i.handleContainerClick(...l))},[(Ze(!0),Kt(Ie,null,Br(i.optionGroups,(l,a)=>(Ze(),Kt("div",{key:a,class:"option-group"},[(Ze(!0),Kt(Ie,null,Br(l.options,(d,c)=>(Ze(),un(r,{key:c,selected:!i.isTextFieldFocused&&i.flattenedOptions.findIndex(h=>h.label===d.label&&h.description===d.description)===i.selectedIndex,checked:d.checked,bold:d.bold,"is-server":c===0,class:Ii({"indented-option":c>0}),onToggle:h=>i.toggleOption(a,c,h)},ph({description:Js(()=>[he("span",null,Ys(d.description),1)]),default:Js(()=>[he("span",null,Ys(d.label),1)]),_:2},[d.metadata?{name:"metadata",fn:Js(()=>[he("span",null,Ys(d.metadata),1)]),key:"0"}:void 0]),1032,["selected","checked","bold","is-server","class","onToggle"]))),128))]))),128))],512)],512)}const Qu=nr(Uu,[["render",Wu]]);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sn=globalThis,or=sn.ShadowRoot&&(sn.ShadyCSS===void 0||sn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rr=Symbol(),al=new WeakMap;let nc=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==rr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(or&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=al.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&al.set(t,e))}return e}toString(){return this.cssText}};const Yu=i=>new nc(typeof i=="string"?i:i+"",void 0,rr),oc=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new nc(t,i,rr)},Ju=(i,e)=>{if(or)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),n=sn.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}},cl=or?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Yu(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xu,defineProperty:Zu,getOwnPropertyDescriptor:Ku,getOwnPropertyNames:ef,getOwnPropertySymbols:tf,getPrototypeOf:sf}=Object,Ft=globalThis,dl=Ft.trustedTypes,nf=dl?dl.emptyScript:"",Kn=Ft.reactiveElementPolyfillSupport,ls=(i,e)=>i,pn={toAttribute(i,e){switch(e){case Boolean:i=i?nf:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},lr=(i,e)=>!Xu(i,e),hl={attribute:!0,type:String,converter:pn,reflect:!1,hasChanged:lr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ft.litPropertyMetadata??(Ft.litPropertyMetadata=new WeakMap);class gi extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=hl){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&Zu(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){const{get:n,set:o}=Ku(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return n==null?void 0:n.call(this)},set(r){const l=n==null?void 0:n.call(this);o.call(this,r),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??hl}static _$Ei(){if(this.hasOwnProperty(ls("elementProperties")))return;const e=sf(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ls("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ls("properties"))){const t=this.properties,s=[...ef(t),...tf(t)];for(const n of s)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const n of s)t.unshift(cl(n))}else e!==void 0&&t.push(cl(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ju(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var o;const s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){const r=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:pn).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){var o;const s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=s.getPropertyOptions(n),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:pn;this._$Em=n,this[n]=l.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??lr)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}gi.elementStyles=[],gi.shadowRootOptions={mode:"open"},gi[ls("elementProperties")]=new Map,gi[ls("finalized")]=new Map,Kn==null||Kn({ReactiveElement:gi}),(Ft.reactiveElementVersions??(Ft.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=globalThis,gn=as.trustedTypes,ul=gn?gn.createPolicy("lit-html",{createHTML:i=>i}):void 0,rc="$lit$",Pt=`lit$${Math.random().toFixed(9).slice(2)}$`,lc="?"+Pt,of=`<${lc}>`,oi=document,ys=()=>oi.createComment(""),xs=i=>i===null||typeof i!="object"&&typeof i!="function",ar=Array.isArray,rf=i=>ar(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",eo=`[ 	
\f\r]`,Qi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fl=/-->/g,pl=/>/g,Yt=RegExp(`>|${eo}(?:([^\\s"'>=/]+)(${eo}*=${eo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gl=/'/g,bl=/"/g,ac=/^(?:script|style|textarea|title)$/i,lf=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),Vs=lf(1),kt=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),ml=new WeakMap,ei=oi.createTreeWalker(oi,129);function cc(i,e){if(!ar(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ul!==void 0?ul.createHTML(e):e}const af=(i,e)=>{const t=i.length-1,s=[];let n,o=e===2?"<svg>":e===3?"<math>":"",r=Qi;for(let l=0;l<t;l++){const a=i[l];let d,c,h=-1,g=0;for(;g<a.length&&(r.lastIndex=g,c=r.exec(a),c!==null);)g=r.lastIndex,r===Qi?c[1]==="!--"?r=fl:c[1]!==void 0?r=pl:c[2]!==void 0?(ac.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=Yt):c[3]!==void 0&&(r=Yt):r===Yt?c[0]===">"?(r=n??Qi,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,d=c[1],r=c[3]===void 0?Yt:c[3]==='"'?bl:gl):r===bl||r===gl?r=Yt:r===fl||r===pl?r=Qi:(r=Yt,n=void 0);const y=r===Yt&&i[l+1].startsWith("/>")?" ":"";o+=r===Qi?a+of:h>=0?(s.push(d),a.slice(0,h)+rc+a.slice(h)+Pt+y):a+Pt+(h===-2?l:y)}return[cc(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class $s{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let o=0,r=0;const l=e.length-1,a=this.parts,[d,c]=af(e,t);if(this.el=$s.createElement(d,s),ei.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=ei.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(rc)){const g=c[r++],y=n.getAttribute(h).split(Pt),_=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:_[2],strings:y,ctor:_[1]==="."?df:_[1]==="?"?hf:_[1]==="@"?uf:On}),n.removeAttribute(h)}else h.startsWith(Pt)&&(a.push({type:6,index:o}),n.removeAttribute(h));if(ac.test(n.tagName)){const h=n.textContent.split(Pt),g=h.length-1;if(g>0){n.textContent=gn?gn.emptyScript:"";for(let y=0;y<g;y++)n.append(h[y],ys()),ei.nextNode(),a.push({type:2,index:++o});n.append(h[g],ys())}}}else if(n.nodeType===8)if(n.data===lc)a.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(Pt,h+1))!==-1;)a.push({type:7,index:o}),h+=Pt.length-1}o++}}static createElement(e,t){const s=oi.createElement("template");return s.innerHTML=e,s}}function Oi(i,e,t=i,s){var r,l;if(e===kt)return e;let n=s!==void 0?(r=t._$Co)==null?void 0:r[s]:t._$Cl;const o=xs(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=n:t._$Cl=n),n!==void 0&&(e=Oi(i,n._$AS(i,e.values),n,s)),e}class cf{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,n=((e==null?void 0:e.creationScope)??oi).importNode(t,!0);ei.currentNode=n;let o=ei.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new Is(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new ff(o,this,e)),this._$AV.push(d),a=s[++l]}r!==(a==null?void 0:a.index)&&(o=ei.nextNode(),r++)}return ei.currentNode=oi,n}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Is{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Oi(this,e,t),xs(e)?e===ue||e==null||e===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):e!==this._$AH&&e!==kt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ue&&xs(this._$AH)?this._$AA.nextSibling.data=e:this.T(oi.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=$s.createElement(cc(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(t);else{const r=new cf(n,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=ml.get(e.strings);return t===void 0&&ml.set(e.strings,t=new $s(e)),t}k(e){ar(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,n=0;for(const o of e)n===t.length?t.push(s=new Is(this.O(ys()),this.O(ys()),this,this.options)):s=t[n],s._$AI(o),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class On{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,o){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ue}_$AI(e,t=this,s,n){const o=this.strings;let r=!1;if(o===void 0)e=Oi(this,e,t,0),r=!xs(e)||e!==this._$AH&&e!==kt,r&&(this._$AH=e);else{const l=e;let a,d;for(e=o[0],a=0;a<o.length-1;a++)d=Oi(this,l[s+a],t,a),d===kt&&(d=this._$AH[a]),r||(r=!xs(d)||d!==this._$AH[a]),d===ue?e=ue:e!==ue&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}r&&!n&&this.j(e)}j(e){e===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class df extends On{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ue?void 0:e}}class hf extends On{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ue)}}class uf extends On{constructor(e,t,s,n,o){super(e,t,s,n,o),this.type=5}_$AI(e,t=this){if((e=Oi(this,e,t,0)??ue)===kt)return;const s=this._$AH,n=e===ue&&s!==ue||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==ue&&(s===ue||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ff{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Oi(this,e)}}const to=as.litHtmlPolyfillSupport;to==null||to($s,Is),(as.litHtmlVersions??(as.litHtmlVersions=[])).push("3.2.1");const pf=(i,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let n=s._$litPart$;if(n===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=n=new Is(e.insertBefore(ys(),o),o,void 0,t??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cs=class extends gi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return kt}};var Zl;cs._$litElement$=!0,cs.finalized=!0,(Zl=globalThis.litElementHydrateSupport)==null||Zl.call(globalThis,{LitElement:cs});const io=globalThis.litElementPolyfillSupport;io==null||io({LitElement:cs});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gf={attribute:!0,type:String,converter:pn,reflect:!1,hasChanged:lr},bf=(i=gf,e,t)=>{const{kind:s,metadata:n}=t;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(t.name,i),s==="accessor"){const{name:r}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,i)},init(l){return l!==void 0&&this.P(r,void 0,i),l}}}if(s==="setter"){const{name:r}=t;return function(l){const a=this[r];e.call(this,l),this.requestUpdate(r,a,i)}}throw Error("Unsupported decorator location: "+s)};function Fi(i){return(e,t)=>typeof t=="object"?bf(i,e,t):((s,n,o)=>{const r=n.hasOwnProperty(o);return n.constructor.createProperty(o,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(n,o):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dc={ATTRIBUTE:1,PROPERTY:3},hc=i=>(...e)=>({_$litDirective$:i,values:e});class uc{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mf=hc(class extends uc{constructor(i){var e;if(super(i),i.type!==dc.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var s,n;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((s=this.nt)!=null&&s.has(o))&&this.st.add(o);return this.render(e)}const t=i.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const r=!!e[o];r===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(r?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return kt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vl=i=>i??ue,Oo="1.14.0",yl="__vscodeElements_disableRegistryWarning__";class vf extends cs{get version(){return Oo}}const yf=i=>e=>{if(!customElements.get(i)){customElements.define(i,e);return}if(yl in window)return;const s=document.createElement(i),n=s==null?void 0:s.version;let o="";n?n!==Oo?(o+="is already registered by a different version of VSCode Elements. ",o+=`This version is "${Oo}", while the other one is "${n}".`):o+="is already registered by the same version of VSCode Elements. ":(console.warn(i,"is already registered by an unknown custom element handler class."),o+="is already registered by an unknown custom element handler class."),console.warn(`[VSCode Elements] ${i} ${o}
To suppress this warning, set window.${yl} to true`)};class xf extends uc{constructor(e){if(super(e),this._prevProperties={},e.type!==dc.PROPERTY||e.name!=="style")throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[t]){return Object.entries(t).forEach(([s,n])=>{this._prevProperties[s]!==n&&(s.startsWith("--")?e.element.style.setProperty(s,n):e.element.style[s]=n,this._prevProperties[s]=n)}),kt}render(e){return kt}}const $f=hc(xf),wf=oc`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`,Cf=[wf,oc`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var li=function(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o},ts;let tt=ts=class extends vf{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:t}=this._getStylesheetConfig();ts.stylesheetHref=e,ts.nonce=t}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),t=(e==null?void 0:e.getAttribute("href"))||void 0,s=(e==null?void 0:e.nonce)||void 0;if(!e){let n="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";n+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(n)}return{nonce:s,href:t}}render(){const{stylesheetHref:e,nonce:t}=ts,s=Vs`<span
      class=${mf({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${$f({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,n=this.actionIcon?Vs` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${s}
        </button>`:Vs` <span class="icon" aria-hidden="true" role="presentation"
          >${s}</span
        >`;return Vs`
      <link
        rel="stylesheet"
        href=${vl(e)}
        nonce=${vl(t)}
      >
      ${n}
    `}};tt.styles=Cf;tt.stylesheetHref="";tt.nonce="";li([Fi()],tt.prototype,"label",void 0);li([Fi({type:String})],tt.prototype,"name",void 0);li([Fi({type:Number})],tt.prototype,"size",void 0);li([Fi({type:Boolean,reflect:!0})],tt.prototype,"spin",void 0);li([Fi({type:Number,attribute:"spin-duration"})],tt.prototype,"spinDuration",void 0);li([Fi({type:Boolean,reflect:!0,attribute:"action-icon"})],tt.prototype,"actionIcon",void 0);tt=ts=li([yf("vscode-icon")],tt);const Ht=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ht.trustedTypes===void 0&&(Ht.trustedTypes={createPolicy:(i,e)=>e});const fc={configurable:!1,enumerable:!1,writable:!1};Ht.FAST===void 0&&Reflect.defineProperty(Ht,"FAST",Object.assign({value:Object.create(null)},fc));const ws=Ht.FAST;if(ws.getById===void 0){const i=Object.create(null);Reflect.defineProperty(ws,"getById",Object.assign({value(e,t){let s=i[e];return s===void 0&&(s=t?i[e]=t():null),s}},fc))}const si=Object.freeze([]);function pc(){const i=new WeakMap;return function(e){let t=i.get(e);if(t===void 0){let s=Reflect.getPrototypeOf(e);for(;t===void 0&&s!==null;)t=i.get(s),s=Reflect.getPrototypeOf(s);t=t===void 0?[]:t.slice(0),i.set(e,t)}return t}}const so=Ht.FAST.getById(1,()=>{const i=[],e=[];function t(){if(e.length)throw e.shift()}function s(r){try{r.call()}catch(l){e.push(l),setTimeout(t,0)}}function n(){let l=0;for(;l<i.length;)if(s(i[l]),l++,l>1024){for(let a=0,d=i.length-l;a<d;a++)i[a]=i[a+l];i.length-=l,l=0}i.length=0}function o(r){i.length<1&&Ht.requestAnimationFrame(n),i.push(r)}return Object.freeze({enqueue:o,process:n})}),gc=Ht.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let no=gc;const ds=`fast-${Math.random().toString(36).substring(2,8)}`,bc=`${ds}{`,cr=`}${ds}`,V=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(no!==gc)throw new Error("The HTML policy can only be set once.");no=i},createHTML(i){return no.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(ds)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${ds}:`,""))},createInterpolationPlaceholder(i){return`${bc}${i}${cr}`},createCustomAttributePlaceholder(i,e){return`${i}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(i){return`<!--${ds}:${i}-->`},queueUpdate:so.enqueue,processUpdates:so.process,nextUpdate(){return new Promise(so.enqueue)},setAttribute(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)},setBooleanAttribute(i,e,t){t?i.setAttribute(e,""):i.removeAttribute(e)},removeChildNodes(i){for(let e=i.firstChild;e!==null;e=i.firstChild)i.removeChild(e)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class bn{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=t.indexOf(e);s!==-1&&t.splice(s,1)}}notify(e){const t=this.spillover,s=this.source;if(t===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,e),o!==void 0&&o.handleChange(s,e)}else for(let n=0,o=t.length;n<o;++n)t[n].handleChange(s,e)}}class mc{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];s!==void 0&&s.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var s;if(t){let n=this.subscribers[t];n===void 0&&(this.subscribers[t]=n=new bn(this.source)),n.subscribe(e)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new bn(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const n=this.subscribers[t];n!==void 0&&n.unsubscribe(e)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(e)}}const N=ws.getById(2,()=>{const i=/(:|&&|\|\||if)/,e=new WeakMap,t=V.queueUpdate;let s,n=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(d){let c=d.$fastController||e.get(d);return c===void 0&&(Array.isArray(d)?c=n(d):e.set(d,c=new mc(d))),c}const r=pc();class l{constructor(c){this.name=c,this.field=`_${c}`,this.callback=`${c}Changed`}getValue(c){return s!==void 0&&s.watch(c,this.name),c[this.field]}setValue(c,h){const g=this.field,y=c[g];if(y!==h){c[g]=h;const _=c[this.callback];typeof _=="function"&&_.call(c,y,h),o(c).notify(this.name)}}}class a extends bn{constructor(c,h,g=!1){super(c,h),this.binding=c,this.isVolatileBinding=g,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(c,h){this.needsRefresh&&this.last!==null&&this.disconnect();const g=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const y=this.binding(c,h);return s=g,y}disconnect(){if(this.last!==null){let c=this.first;for(;c!==void 0;)c.notifier.unsubscribe(this,c.propertyName),c=c.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(c,h){const g=this.last,y=o(c),_=g===null?this.first:{};if(_.propertySource=c,_.propertyName=h,_.notifier=y,y.subscribe(this,h),g!==null){if(!this.needsRefresh){let R;s=void 0,R=g.propertySource[g.propertyName],s=this,c===R&&(this.needsRefresh=!0)}g.next=_}this.last=_}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let c=this.first;return{next:()=>{const h=c;return h===void 0?{value:void 0,done:!0}:(c=c.next,{value:h,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){n=d},getNotifier:o,track(d,c){s!==void 0&&s.watch(d,c)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(d,c){o(d).notify(c)},defineProperty(d,c){typeof c=="string"&&(c=new l(c)),r(d).push(c),Reflect.defineProperty(d,c.name,{enumerable:!0,get:function(){return c.getValue(this)},set:function(h){c.setValue(this,h)}})},getAccessors:r,binding(d,c,h=this.isVolatileBinding(d)){return new a(d,c,h)},isVolatileBinding(d){return i.test(d.toString())}})});function I(i,e){N.defineProperty(i,e)}function kf(i,e,t){return Object.assign({},t,{get:function(){return N.trackVolatile(),t.get.apply(this)}})}const xl=ws.getById(3,()=>{let i=null;return{get(){return i},set(e){i=e}}});class Cs{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return xl.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){xl.set(e)}}N.defineProperty(Cs.prototype,"index");N.defineProperty(Cs.prototype,"length");const hs=Object.seal(new Cs);class Rn{constructor(){this.targetIndex=0}}class vc extends Rn{constructor(){super(...arguments),this.createPlaceholder=V.createInterpolationPlaceholder}}class dr extends Rn{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return V.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Tf(i,e){this.source=i,this.context=e,this.bindingObserver===null&&(this.bindingObserver=N.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,e))}function Sf(i,e){this.source=i,this.context=e,this.target.addEventListener(this.targetName,this)}function _f(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Af(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function If(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ef(i){V.setAttribute(this.target,this.targetName,i)}function Of(i){V.setBooleanAttribute(this.target,this.targetName,i)}function Rf(i){if(i==null&&(i=""),i.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=i.create():this.target.$fastTemplate!==i&&(e.isComposed&&(e.remove(),e.unbind()),e=i.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=i)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=i}}function Pf(i){this.target[this.targetName]=i}function Df(i){const e=this.classVersions||Object.create(null),t=this.target;let s=this.version||0;if(i!=null&&i.length){const n=i.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const l=n[o];l!==""&&(e[l]=s,t.classList.add(l))}}if(this.classVersions=e,this.version=s+1,s!==0){s-=1;for(const n in e)e[n]===s&&t.classList.remove(n)}}class hr extends vc{constructor(e){super(),this.binding=e,this.bind=Tf,this.unbind=_f,this.updateTarget=Ef,this.isBindingVolatile=N.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Pf,this.cleanedTargetName==="innerHTML"){const t=this.binding;this.binding=(s,n)=>V.createHTML(t(s,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Of;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Sf,this.unbind=If;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=Df);break}}targetAtContent(){this.updateTarget=Rf,this.unbind=Af}createBehavior(e){return new Ff(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ff{constructor(e,t,s,n,o,r,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Cs.setEvent(e);const t=this.binding(this.source,this.context);Cs.setEvent(null),t!==!0&&e.preventDefault()}}let oo=null;class ur{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){oo=this}static borrow(e){const t=oo||new ur;return t.directives=e,t.reset(),oo=null,t}}function Bf(i){if(i.length===1)return i[0];let e;const t=i.length,s=i.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,l)=>{let a="";for(let d=0;d<t;++d)a+=s[d](r,l);return a},o=new hr(n);return o.targetName=e,o}const Mf=cr.length;function yc(i,e){const t=e.split(bc);if(t.length===1)return null;const s=[];for(let n=0,o=t.length;n<o;++n){const r=t[n],l=r.indexOf(cr);let a;if(l===-1)a=r;else{const d=parseInt(r.substring(0,l));s.push(i.directives[d]),a=r.substring(l+Mf)}a!==""&&s.push(a)}return s}function $l(i,e,t=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],l=r.value,a=yc(i,l);let d=null;a===null?t&&(d=new hr(()=>l),d.targetName=r.name):d=Bf(a),d!==null&&(e.removeAttributeNode(r),n--,o--,i.addFactory(d))}}function Hf(i,e,t){const s=yc(i,e.textContent);if(s!==null){let n=e;for(let o=0,r=s.length;o<r;++o){const l=s[o],a=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",i.captureContentBinding(l)),n=a,i.targetIndex++,a!==e&&t.nextNode()}i.targetIndex--}}function Lf(i,e){const t=i.content;document.adoptNode(t);const s=ur.borrow(e);$l(s,i,!0);const n=s.behaviorFactories;s.reset();const o=V.createTemplateWalker(t);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:$l(s,r);break;case 3:Hf(s,r,o);break;case 8:V.isMarker(r)&&s.addFactory(e[V.extractDirectiveIndexFromMarker(r)])}let l=0;(V.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),l=-1);const a=s.behaviorFactories;return s.release(),{fragment:t,viewBehaviorFactories:a,hostBehaviorFactories:n,targetOffset:l}}const ro=document.createRange();class xc{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const s=e.parentNode;let n=this.firstChild,o;for(;n!==t;)o=n.nextSibling,s.insertBefore(n,e),n=o;s.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.appendChild(s),s=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.removeChild(s),s=n;e.removeChild(t);const o=this.behaviors,r=this.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=t;for(let o=0,r=s.length;o<r;++o){const l=s[o];l.unbind(n),l.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,o=s.length;n<o;++n)s[n].bind(e,t)}}unbind(){if(this.source===null)return;const e=this.behaviors,t=this.source;for(let s=0,n=e.length;s<n;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){ro.setStartBefore(e[0].firstChild),ro.setEndAfter(e[e.length-1].lastChild),ro.deleteContents();for(let t=0,s=e.length;t<s;++t){const n=e[t],o=n.behaviors,r=n.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}}}}class wl{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let d;const c=this.html;if(typeof c=="string"){d=document.createElement("template"),d.innerHTML=V.createHTML(c);const g=d.content.firstElementChild;g!==null&&g.tagName==="TEMPLATE"&&(d=g)}else d=c;const h=Lf(d,this.directives);this.fragment=h.fragment,this.viewBehaviorFactories=h.viewBehaviorFactories,this.hostBehaviorFactories=h.hostBehaviorFactories,this.targetOffset=h.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=V.createTemplateWalker(t);let r=0,l=this.targetOffset,a=o.nextNode();for(let d=s.length;r<d;++r){const c=s[r],h=c.targetIndex;for(;a!==null;)if(l===h){n[r]=c.createBehavior(a);break}else a=o.nextNode(),l++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let c=0,h=d.length;c<h;++c,++r)n[r]=d[c].createBehavior(e)}return new xc(t,n)}render(e,t,s){typeof t=="string"&&(t=document.getElementById(t)),s===void 0&&(s=t);const n=this.create(s);return n.bind(e,hs),n.appendTo(t),n}}const Nf=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function W(i,...e){const t=[];let s="";for(let n=0,o=i.length-1;n<o;++n){const r=i[n];let l=e[n];if(s+=r,l instanceof wl){const a=l;l=()=>a}if(typeof l=="function"&&(l=new hr(l)),l instanceof vc){const a=Nf.exec(r);a!==null&&(l.targetName=a[2])}l instanceof Rn?(s+=l.createPlaceholder(t.length),t.push(l)):s+=l}return s+=i[i.length-1],new wl(s,t)}class Be{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}Be.create=(()=>{if(V.supportsAdoptedStyleSheets){const i=new Map;return e=>new Vf(e,i)}return i=>new Uf(i)})();function fr(i){return i.map(e=>e instanceof Be?fr(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function $c(i){return i.map(e=>e instanceof Be?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}const wc=Symbol("prependToAdoptedStyleSheets");function Cc(i){const e=[],t=[];return i.forEach(s=>(s[wc]?e:t).push(s)),{prepend:e,append:t}}let kc=(i,e)=>{const{prepend:t,append:s}=Cc(e);i.adoptedStyleSheets=[...t,...i.adoptedStyleSheets,...s]},Tc=(i,e)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(V.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),kc=(i,e)=>{const{prepend:t,append:s}=Cc(e);i.adoptedStyleSheets.splice(0,0,...t),i.adoptedStyleSheets.push(...s)},Tc=(i,e)=>{for(const t of e){const s=i.adoptedStyleSheets.indexOf(t);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class Vf extends Be{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=$c(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,t=this.styleSheetCache;this._styleSheets=fr(e).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=t.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),t.set(s,n)),n})}return this._styleSheets}addStylesTo(e){kc(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Tc(e,this.styleSheets),super.removeStylesFrom(e)}}let jf=0;function zf(){return`fast-style-class-${++jf}`}class Uf extends Be{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=$c(e),this.styleSheets=fr(e),this.styleClass=zf()}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const o=document.createElement("style");o.innerHTML=t[n],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const t=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=t.length;s<n;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const mn=Object.freeze({locate:pc()}),Sc={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},it={toView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e.toString()},fromView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e}};class vn{constructor(e,t,s=t.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=Sc)}setValue(e,t){const s=e[this.fieldName],n=this.converter;n!==void 0&&(t=n.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return N.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||t==="fromView"||V.queueUpdate(()=>{s.add(e);const n=e[this.fieldName];switch(t){case"reflect":const o=this.converter;V.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":V.setBooleanAttribute(e,this.attribute,n);break}s.delete(e)})}static collect(e,...t){const s=[];t.push(mn.locate(e));for(let n=0,o=t.length;n<o;++n){const r=t[n];if(r!==void 0)for(let l=0,a=r.length;l<a;++l){const d=r[l];typeof d=="string"?s.push(new vn(e,d)):s.push(new vn(e,d.property,d.attribute,d.mode,d.converter))}}return s}}function m(i,e){let t;function s(n,o){arguments.length>1&&(t.property=o),mn.locate(n.constructor).push(t)}if(arguments.length>1){t={},s(i,e);return}return t=i===void 0?{}:i,s}const Cl={mode:"open"},kl={},Ro=ws.getById(4,()=>{const i=new Map;return Object.freeze({register(e){return i.has(e.type)?!1:(i.set(e.type,e),!0)},getByType(e){return i.get(e)}})});class Pn{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=vn.collect(e,t.attributes),n=new Array(s.length),o={},r={};for(let l=0,a=s.length;l<a;++l){const d=s[l];n[l]=d.attribute,o[d.name]=d,r[d.attribute]=d}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=t.shadowOptions===void 0?Cl:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Cl),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?kl:Object.assign(Object.assign({},kl),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?Be.create(t.styles):t.styles instanceof Be?t.styles:Be.create([t.styles])}get isDefined(){return!!Ro.getByType(this.type)}define(e=customElements){const t=this.type;if(Ro.register(this)){const s=this.attributes,n=t.prototype;for(let o=0,r=s.length;o<r;++o)N.defineProperty(n,s[o]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Pn.forType=Ro.getByType;const _c=new WeakMap,qf={bubbles:!0,composed:!0,cancelable:!0};function lo(i){return i.shadowRoot||_c.get(i)||null}class pr extends mc{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(s!==void 0){const o=e.attachShadow(s);s.mode==="closed"&&_c.set(e,o)}const n=N.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,l=n.length;r<l;++r){const a=n[r].name,d=e[a];d!==void 0&&(delete e[a],o[a]=d)}}}get isConnected(){return N.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,N.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const t=lo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),s!==null&&this.addBehaviors(s)}}removeStyles(e){const t=lo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),s!==null&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,n=[];for(let o=0;o<s;++o){const r=e[o];t.has(r)?t.set(r,t.get(r)+1):(t.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,hs)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(s===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const l=e[r];if(s.has(l)){const a=s.get(l)-1;a===0||t?s.delete(l)&&o.push(l):s.set(l,a)}}if(this._isConnected){const r=this.element;for(let l=0;l<o.length;++l)o[l].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,hs);const t=this.behaviors;if(t!==null)for(const[s]of t)s.bind(e,hs);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const t=this.behaviors;if(t!==null){const s=this.element;for(const[n]of t)n.unbind(s)}}onAttributeChangedCallback(e,t,s){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},qf),s))):!1}finishInitialization(){const e=this.element,t=this.boundObservables;if(t!==null){const n=Object.keys(t);for(let o=0,r=n.length;o<r;++o){const l=n[o];e[l]=t[l]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=lo(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||V.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const s=Pn.forType(e.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new pr(e,s)}}function Tl(i){return class extends i{constructor(){super(),pr.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const Dn=Object.assign(Tl(HTMLElement),{from(i){return Tl(i)},define(i,e){return new Pn(i,e).define().type}});class Ac{createCSS(){return""}createBehavior(){}}function Gf(i,e){const t=[];let s="";const n=[];for(let o=0,r=i.length-1;o<r;++o){s+=i[o];let l=e[o];if(l instanceof Ac){const a=l.createBehavior();l=l.createCSS(),a&&n.push(a)}l instanceof Be||l instanceof CSSStyleSheet?(s.trim()!==""&&(t.push(s),s=""),t.push(l)):s+=l}return s+=i[i.length-1],s.trim()!==""&&t.push(s),{styles:t,behaviors:n}}function le(i,...e){const{styles:t,behaviors:s}=Gf(i,e),n=Be.create(t);return s.length&&n.withBehaviors(...s),n}function Ke(i,e,t){return{index:i,removed:e,addedCount:t}}const Ic=0,Ec=1,Po=2,Do=3;function Wf(i,e,t,s,n,o){const r=o-n+1,l=t-e+1,a=new Array(r);let d,c;for(let h=0;h<r;++h)a[h]=new Array(l),a[h][0]=h;for(let h=0;h<l;++h)a[0][h]=h;for(let h=1;h<r;++h)for(let g=1;g<l;++g)i[e+g-1]===s[n+h-1]?a[h][g]=a[h-1][g-1]:(d=a[h-1][g]+1,c=a[h][g-1]+1,a[h][g]=d<c?d:c);return a}function Qf(i){let e=i.length-1,t=i[0].length-1,s=i[e][t];const n=[];for(;e>0||t>0;){if(e===0){n.push(Po),t--;continue}if(t===0){n.push(Do),e--;continue}const o=i[e-1][t-1],r=i[e-1][t],l=i[e][t-1];let a;r<l?a=r<o?r:o:a=l<o?l:o,a===o?(o===s?n.push(Ic):(n.push(Ec),s=o),e--,t--):a===r?(n.push(Do),e--,s=r):(n.push(Po),t--,s=l)}return n.reverse(),n}function Yf(i,e,t){for(let s=0;s<t;++s)if(i[s]!==e[s])return s;return t}function Jf(i,e,t){let s=i.length,n=e.length,o=0;for(;o<t&&i[--s]===e[--n];)o++;return o}function Xf(i,e,t,s){return e<t||s<i?-1:e===t||s===i?0:i<t?e<s?e-t:s-t:s<e?s-i:e-i}function Oc(i,e,t,s,n,o){let r=0,l=0;const a=Math.min(t-e,o-n);if(e===0&&n===0&&(r=Yf(i,s,a)),t===i.length&&o===s.length&&(l=Jf(i,s,a-r)),e+=r,n+=r,t-=l,o-=l,t-e===0&&o-n===0)return si;if(e===t){const _=Ke(e,[],0);for(;n<o;)_.removed.push(s[n++]);return[_]}else if(n===o)return[Ke(e,[],t-e)];const d=Qf(Wf(i,e,t,s,n,o)),c=[];let h,g=e,y=n;for(let _=0;_<d.length;++_)switch(d[_]){case Ic:h!==void 0&&(c.push(h),h=void 0),g++,y++;break;case Ec:h===void 0&&(h=Ke(g,[],0)),h.addedCount++,g++,h.removed.push(s[y]),y++;break;case Po:h===void 0&&(h=Ke(g,[],0)),h.addedCount++,g++;break;case Do:h===void 0&&(h=Ke(g,[],0)),h.removed.push(s[y]),y++;break}return h!==void 0&&c.push(h),c}const Sl=Array.prototype.push;function Zf(i,e,t,s){const n=Ke(e,t,s);let o=!1,r=0;for(let l=0;l<i.length;l++){const a=i[l];if(a.index+=r,o)continue;const d=Xf(n.index,n.index+n.removed.length,a.index,a.index+a.addedCount);if(d>=0){i.splice(l,1),l--,r-=a.addedCount-a.removed.length,n.addedCount+=a.addedCount-d;const c=n.removed.length+a.removed.length-d;if(!n.addedCount&&!c)o=!0;else{let h=a.removed;if(n.index<a.index){const g=n.removed.slice(0,a.index-n.index);Sl.apply(g,h),h=g}if(n.index+n.removed.length>a.index+a.addedCount){const g=n.removed.slice(a.index+a.addedCount-n.index);Sl.apply(h,g)}n.removed=h,a.index<n.index&&(n.index=a.index)}}else if(n.index<a.index){o=!0,i.splice(l,0,n),l++;const c=n.addedCount-n.removed.length;a.index+=c,r+=c}}o||i.push(n)}function Kf(i){const e=[];for(let t=0,s=i.length;t<s;t++){const n=i[t];Zf(e,n.index,n.removed,n.addedCount)}return e}function ep(i,e){let t=[];const s=Kf(e);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&t.push(r);continue}t=t.concat(Oc(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return t}let _l=!1;function ao(i,e){let t=i.index;const s=e.length;return t>s?t=s-i.addedCount:t<0&&(t=s+i.removed.length+t-i.addedCount),t<0&&(t=0),i.index=t,i}class tp extends bn{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,V.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,V.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=t===void 0?ep(this.source,e):Oc(this.source,0,this.source.length,t,0,t.length);this.notify(s)}}function ip(){if(_l)return;_l=!0,N.setArrayObserverFactory(a=>new tp(a));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const e=i.pop,t=i.push,s=i.reverse,n=i.shift,o=i.sort,r=i.splice,l=i.unshift;i.pop=function(){const a=this.length>0,d=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(Ke(this.length,[d],0)),d},i.push=function(){const a=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(ao(Ke(this.length-arguments.length,[],arguments.length),this)),a},i.reverse=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=s.apply(this,arguments);return d!==void 0&&d.reset(a),c},i.shift=function(){const a=this.length>0,d=n.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(Ke(0,[d],0)),d},i.sort=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=o.apply(this,arguments);return d!==void 0&&d.reset(a),c},i.splice=function(){const a=r.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(ao(Ke(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},i.unshift=function(){const a=l.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(ao(Ke(0,[],arguments.length),this)),a}}class sp{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Re(i){return new dr("fast-ref",sp,i)}const Rc=i=>typeof i=="function",np=()=>null;function Al(i){return i===void 0?np:Rc(i)?i:()=>i}function gr(i,e,t){const s=Rc(i)?i:()=>i,n=Al(e),o=Al(t);return(r,l)=>s(r,l)?n(r,l):o(r,l)}function op(i,e,t,s){i.bind(e[t],s)}function rp(i,e,t,s){const n=Object.create(s);n.index=t,n.length=e.length,i.bind(e[t],n)}class lp{constructor(e,t,s,n,o,r){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=op,this.itemsBindingObserver=N.binding(t,this,s),this.templateBindingObserver=N.binding(n,this,o),r.positioning&&(this.bindView=rp)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=si;return}const t=this.itemsObserver,s=this.itemsObserver=N.getNotifier(this.items),n=t!==s;n&&t!==null&&t.unsubscribe(this),(n||e)&&s.subscribe(this)}updateViews(e){const t=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,l=this.options.recycle,a=[];let d=0,c=0;for(let h=0,g=e.length;h<g;++h){const y=e[h],_=y.removed;let R=0,G=y.index;const j=G+y.addedCount,q=s.splice(y.index,_.length),O=c=a.length+q.length;for(;G<j;++G){const E=s[G],L=E?E.firstChild:this.location;let te;l&&c>0?(R<=O&&q.length>0?(te=q[R],R++):(te=a[d],d++),c--):te=r.create(),s.splice(G,0,te),n(te,o,G,t),te.insertBefore(L)}q[R]&&a.push(...q.slice(R))}for(let h=d,g=a.length;h<g;++h)a[h].dispose();if(this.options.positioning)for(let h=0,g=s.length;h<g;++h){const y=s[h].context;y.length=g,y.index=h}}refreshAllViews(e=!1){const t=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let l=t.length,a=this.views,d=a.length;if((l===0||e||!this.options.recycle)&&(xc.disposeContiguousBatch(a),d=0),d===0){this.views=a=new Array(l);for(let c=0;c<l;++c){const h=n.create();r(h,t,c,s),a[c]=h,h.insertBefore(o)}}else{let c=0;for(;c<l;++c)if(c<d){const g=a[c];r(g,t,c,s)}else{const g=n.create();r(g,t,c,s),a.push(g),g.insertBefore(o)}const h=a.splice(c,d-c);for(c=0,l=h.length;c<l;++c)h[c].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,s=e.length;t<s;++t)e[t].unbind()}}class Pc extends Rn{constructor(e,t,s){super(),this.itemsBinding=e,this.templateBinding=t,this.options=s,this.createPlaceholder=V.createBlockPlaceholder,ip(),this.isItemsBindingVolatile=N.isVolatileBinding(e),this.isTemplateBindingVolatile=N.isVolatileBinding(t)}createBehavior(e){return new lp(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function br(i){return i?function(e,t,s){return e.nodeType===1&&e.matches(i)}:function(e,t,s){return e.nodeType===1}}class Dc{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=N.getAccessors(e).some(s=>s.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(si),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ap extends Dc{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ye(i){return typeof i=="string"&&(i={property:i}),new dr("fast-slotted",ap,i)}class cp extends Dc{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Fc(i){return typeof i=="string"&&(i={property:i}),new dr("fast-children",cp,i)}class Bi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Mi=(i,e)=>W`
    <span
        part="end"
        ${Re("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Re("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Hi=(i,e)=>W`
    <span
        part="start"
        ${Re("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Re("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;W`
    <span part="end" ${Re("endContainer")}>
        <slot
            name="end"
            ${Re("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`;W`
    <span part="start" ${Re("startContainer")}>
        <slot
            name="start"
            ${Re("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
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
***************************************************************************** */function p(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o}const co=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,e){return function(t){Reflect.defineMetadata(i,e,t)}},Reflect.defineMetadata=function(i,e,t){let s=co.get(t);s===void 0&&co.set(t,s=new Map),s.set(i,e)},Reflect.getOwnMetadata=function(i,e){const t=co.get(e);if(t!==void 0)return t.get(i)});class dp{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Mc(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new qe(n,e,t))}}function Yi(i){const e=i.slice(),t=Object.keys(i),s=t.length;let n;for(let o=0;o<s;++o)n=t[o],Hc(n)||(e[n]=i[n]);return e}const hp=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new qe(i,1,i)},transient(i){return new qe(i,2,i)}}),ho=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:hp.singleton})}),Il=new Map;function El(i){return e=>Reflect.getOwnMetadata(i,e)}let Ol=null;const oe=Object.freeze({createContainer(i){return new us(null,Object.assign({},ho.default,i))},findResponsibleContainer(i){const e=i.$$container$$;return e&&e.responsibleForOwnerRequests?e:oe.findParentContainer(i)},findParentContainer(i){const e=new CustomEvent(Bc,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(e),e.detail.container||oe.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,e){return i?i.$$container$$||new us(i,Object.assign({},ho.default,e,{parentLocator:oe.findParentContainer})):Ol||(Ol=new us(null,Object.assign({},ho.default,e,{parentLocator:()=>null})))},getDesignParamtypes:El("design:paramtypes"),getAnnotationParamtypes:El("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let e=this.getAnnotationParamtypes(i);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],i),e},getDependencies(i){let e=Il.get(i);if(e===void 0){const t=i.inject;if(t===void 0){const s=oe.getDesignParamtypes(i),n=oe.getAnnotationParamtypes(i);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(i);typeof o=="function"&&o!==Function.prototype?e=Yi(oe.getDependencies(o)):e=[]}else e=Yi(n);else if(n===void 0)e=Yi(s);else{e=Yi(s);let o=n.length,r;for(let d=0;d<o;++d)r=n[d],r!==void 0&&(e[d]=r);const l=Object.keys(n);o=l.length;let a;for(let d=0;d<o;++d)a=l[d],Hc(a)||(e[a]=n[a])}}else e=Yi(t);Il.set(i,e)}return e},defineProperty(i,e,t,s=!1){const n=`$di_${e}`;Reflect.defineProperty(i,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?oe.findResponsibleContainer(this):oe.getOrCreateDOMContainer()).get(t),this[n]=o,s&&this instanceof Dn)){const l=this.$fastController,a=()=>{const c=oe.findResponsibleContainer(this).get(t),h=this[n];c!==h&&(this[n]=o,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return o}})},createInterface(i,e){const t=typeof i=="function"?i:e,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Fl,n=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,o=function(r,l,a){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(l)oe.defineProperty(r,l,o,n);else{const d=oe.getOrCreateAnnotationParamTypes(r);d[a]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",t!=null&&(o.register=function(r,l){return t(new dp(r,l??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...i){return function(e,t,s){if(typeof s=="number"){const n=oe.getOrCreateAnnotationParamTypes(e),o=i[0];o!==void 0&&(n[s]=o)}else if(t)oe.defineProperty(e,t,i[0]);else{const n=s?oe.getOrCreateAnnotationParamTypes(s.value):oe.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<i.length;++r)o=i[r],o!==void 0&&(n[r]=o)}}},transient(i){return i.register=function(t){return ks.transient(i,i).register(t)},i.registerInRequestor=!1,i},singleton(i,e=fp){return i.register=function(s){return ks.singleton(i,i).register(s)},i.registerInRequestor=e.scoped,i}}),up=oe.createInterface("Container");oe.inject;const fp={scoped:!1};class qe{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=e.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(s=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||s===void 0?void 0:s.call(t,e))!==null&&n!==void 0?n:null;default:return null}}}function Rl(i){return this.get(i)}function pp(i,e){return e(i)}class gp{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return t===void 0?s=new this.Type(...this.dependencies.map(Rl,e)):s=new this.Type(...this.dependencies.map(Rl,e),...t),this.transformers==null?s:this.transformers.reduce(pp,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const bp={$isResolver:!0,resolve(i,e){return e}};function nn(i){return typeof i.register=="function"}function mp(i){return nn(i)&&typeof i.registerInRequestor=="boolean"}function Pl(i){return mp(i)&&i.registerInRequestor}function vp(i){return i.prototype!==void 0}const yp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Bc="__DI_LOCATE_PARENT__",uo=new Map;class us{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(up,bp),e instanceof Node&&e.addEventListener(Bc,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,s,n,o,r;const l=this.context;for(let a=0,d=e.length;a<d;++a)if(t=e[a],!!Bl(t))if(nn(t))t.register(this,l);else if(vp(t))ks.singleton(t,t).register(this);else for(s=Object.keys(t),o=0,r=s.length;o<r;++o)n=t[s[o]],Bl(n)&&(nn(n)?n.register(this,l):this.register(n));return--this.registerDepth,this}registerResolver(e,t){js(e);const s=this.resolvers,n=s.get(e);return n==null?s.set(e,t):n instanceof qe&&n.strategy===4?n.state.push(t):s.set(e,new qe(e,4,[n,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(js(e),e.resolve!==void 0)return e;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s.parent==null){const o=Pl(e)?this:s;return t?this.jitRegister(e,o):null}s=s.parent}else return n;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(js(e),e.$isResolver)return e.resolve(this,this);let t=this,s;for(;t!=null;)if(s=t.resolvers.get(e),s==null){if(t.parent==null){const n=Pl(e)?this:t;return s=this.jitRegister(e,n),s.resolve(t,this)}t=t.parent}else return s.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){js(e);const s=this;let n=s,o;if(t){let r=si;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(Dl(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return si}else return Dl(o,n,s);return si}getFactory(e){let t=uo.get(e);if(t===void 0){if(xp(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);uo.set(e,t=new gp(e,oe.getDependencies(e)))}return t}registerFactory(e,t){uo.set(e,t)}createChild(e){return new us(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(yp.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(nn(e)){const s=e.register(t);if(!(s instanceof Object)||s.resolve==null){const n=t.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}}const fo=new WeakMap;function Mc(i){return function(e,t,s){if(fo.has(s))return fo.get(s);const n=i(e,t,s);return fo.set(s,n),n}}const ks=Object.freeze({instance(i,e){return new qe(i,0,e)},singleton(i,e){return new qe(i,1,e)},transient(i,e){return new qe(i,2,e)},callback(i,e){return new qe(i,3,e)},cachedCallback(i,e){return new qe(i,3,Mc(e))},aliasTo(i,e){return new qe(e,5,i)}});function js(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Dl(i,e,t){if(i instanceof qe&&i.strategy===4){const s=i.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,t);return o}return[i.resolve(e,t)]}const Fl="(anonymous)";function Bl(i){return typeof i=="object"&&i!==null||typeof i=="function"}const xp=function(){const i=new WeakMap;let e=!1,t="",s=0;return function(n){return e=i.get(n),e===void 0&&(t=n.toString(),s=t.length,e=s>=29&&s<=100&&t.charCodeAt(s-1)===125&&t.charCodeAt(s-2)<=32&&t.charCodeAt(s-3)===93&&t.charCodeAt(s-4)===101&&t.charCodeAt(s-5)===100&&t.charCodeAt(s-6)===111&&t.charCodeAt(s-7)===99&&t.charCodeAt(s-8)===32&&t.charCodeAt(s-9)===101&&t.charCodeAt(s-10)===118&&t.charCodeAt(s-11)===105&&t.charCodeAt(s-12)===116&&t.charCodeAt(s-13)===97&&t.charCodeAt(s-14)===110&&t.charCodeAt(s-15)===88,i.set(n,e)),e}}(),zs={};function Hc(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const e=zs[i];if(e!==void 0)return e;const t=i.length;if(t===0)return zs[i]=!1;let s=0;for(let n=0;n<t;++n)if(s=i.charCodeAt(n),n===0&&s===48&&t>1||s<48||s>57)return zs[i]=!1;return zs[i]=!0}default:return!1}}function Ml(i){return`${i.toLowerCase()}:presentation`}const Us=new Map,Lc=Object.freeze({define(i,e,t){const s=Ml(i);Us.get(s)===void 0?Us.set(s,e):Us.set(s,!1),t.register(ks.instance(s,e))},forTag(i,e){const t=Ml(i),s=Us.get(t);return s===!1?oe.findResponsibleContainer(e).get(t):s||null}});class $p{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?Be.create(t):t instanceof Be?t:Be.create([t])}applyTo(e){const t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}class ie extends Dn{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Lc.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new wp(this===ie?class extends ie{}:this,e,t)}}p([I],ie.prototype,"template",void 0);p([I],ie.prototype,"styles",void 0);function Ji(i,e,t){return typeof i=="function"?i(e,t):i}class wp{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||t.elementPrefix}-${s.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new $p(Ji(s.template,l,s),Ji(s.styles,l,s));l.definePresentation(a);let d=Ji(s.shadowOptions,l,s);l.shadowRootMode&&(d?n.shadowOptions||(d.mode=l.shadowRootMode):d!==null&&(d={mode:l.shadowRootMode})),l.defineElement({elementOptions:Ji(s.elementOptions,l,s),shadowOptions:d,attributes:Ji(s.attributes,l,s)})}})}}function He(i,...e){const t=mn.locate(i);e.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(i.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),mn.locate(s).forEach(o=>t.push(o))})}const mr={horizontal:"horizontal"};function Cp(i,e){let t=i.length;for(;t--;)if(e(i[t],t,i))return t;return-1}function kp(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tp(...i){return i.every(e=>e instanceof HTMLElement)}function Sp(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Jt;function _p(){if(typeof Jt=="boolean")return Jt;if(!kp())return Jt=!1,Jt;const i=document.createElement("style"),e=Sp();e!==null&&i.setAttribute("nonce",e),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Jt=!0}catch{Jt=!1}finally{document.head.removeChild(i)}return Jt}const Hl="focus",Ll="focusin",Ri="focusout",Pi="keydown";var Nl;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Nl||(Nl={}));const ai="ArrowDown",Ts="ArrowLeft",Ss="ArrowRight",ci="ArrowUp",Es="Enter",Fn="Escape",Li="Home",Ni="End",Ap="F2",Ip="PageDown",Ep="PageUp",Os=" ",vr="Tab",Op={ArrowDown:ai,ArrowLeft:Ts,ArrowRight:Ss,ArrowUp:ci};var Di;(function(i){i.ltr="ltr",i.rtl="rtl"})(Di||(Di={}));function Rp(i,e,t){return Math.min(Math.max(t,i),e)}function qs(i,e,t=0){return[e,t]=[e,t].sort((s,n)=>s-n),e<=i&&i<t}let Pp=0;function yn(i=""){return`${i}${Pp++}`}const Dp=(i,e)=>W`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Re("control")}
    >
        ${Hi(i,e)}
        <span class="content" part="content">
            <slot ${Ye("defaultSlottedContent")}></slot>
        </span>
        ${Mi(i,e)}
    </a>
`;class se{}p([m({attribute:"aria-atomic"})],se.prototype,"ariaAtomic",void 0);p([m({attribute:"aria-busy"})],se.prototype,"ariaBusy",void 0);p([m({attribute:"aria-controls"})],se.prototype,"ariaControls",void 0);p([m({attribute:"aria-current"})],se.prototype,"ariaCurrent",void 0);p([m({attribute:"aria-describedby"})],se.prototype,"ariaDescribedby",void 0);p([m({attribute:"aria-details"})],se.prototype,"ariaDetails",void 0);p([m({attribute:"aria-disabled"})],se.prototype,"ariaDisabled",void 0);p([m({attribute:"aria-errormessage"})],se.prototype,"ariaErrormessage",void 0);p([m({attribute:"aria-flowto"})],se.prototype,"ariaFlowto",void 0);p([m({attribute:"aria-haspopup"})],se.prototype,"ariaHaspopup",void 0);p([m({attribute:"aria-hidden"})],se.prototype,"ariaHidden",void 0);p([m({attribute:"aria-invalid"})],se.prototype,"ariaInvalid",void 0);p([m({attribute:"aria-keyshortcuts"})],se.prototype,"ariaKeyshortcuts",void 0);p([m({attribute:"aria-label"})],se.prototype,"ariaLabel",void 0);p([m({attribute:"aria-labelledby"})],se.prototype,"ariaLabelledby",void 0);p([m({attribute:"aria-live"})],se.prototype,"ariaLive",void 0);p([m({attribute:"aria-owns"})],se.prototype,"ariaOwns",void 0);p([m({attribute:"aria-relevant"})],se.prototype,"ariaRelevant",void 0);p([m({attribute:"aria-roledescription"})],se.prototype,"ariaRoledescription",void 0);class st extends ie{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var t;(t=this.control)===null||t===void 0||t.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}p([m],st.prototype,"download",void 0);p([m],st.prototype,"href",void 0);p([m],st.prototype,"hreflang",void 0);p([m],st.prototype,"ping",void 0);p([m],st.prototype,"referrerpolicy",void 0);p([m],st.prototype,"rel",void 0);p([m],st.prototype,"target",void 0);p([m],st.prototype,"type",void 0);p([I],st.prototype,"defaultSlottedContent",void 0);class yr{}p([m({attribute:"aria-expanded"})],yr.prototype,"ariaExpanded",void 0);He(yr,se);He(st,Bi,yr);const Fp=i=>{const e=i.closest("[dir]");return e!==null&&e.dir==="rtl"?Di.rtl:Di.ltr},Nc=(i,e)=>W`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Rs=class extends ie{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}};p([m({attribute:"fill"})],Rs.prototype,"fill",void 0);p([m({attribute:"color"})],Rs.prototype,"color",void 0);p([m({mode:"boolean"})],Rs.prototype,"circular",void 0);const Bp=(i,e)=>W`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Re("control")}
    >
        ${Hi(i,e)}
        <span class="content" part="content">
            <slot ${Ye("defaultSlottedContent")}></slot>
        </span>
        ${Mi(i,e)}
    </button>
`,Vl="form-associated-proxy",jl="ElementInternals",zl=jl in window&&"setFormValue"in window[jl].prototype,Ul=new WeakMap;function Ps(i){const e=class extends i{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return zl}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?s.concat(Array.from(t)):s;return Object.freeze(n)}else return si}valueChanged(t,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),V.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),V.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!zl)return null;let t=Ul.get(this);return t||(t=this.attachInternals(),Ul.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,s,n){this.elementInternals?this.elementInternals.setValidity(t,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Vl),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Vl)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,s){this.elementInternals&&this.elementInternals.setFormValue(t,s||t)}_keypressHandler(t){switch(t.key){case Es:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(t){t.stopPropagation()}};return m({mode:"boolean"})(e.prototype,"disabled"),m({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),m({attribute:"current-value"})(e.prototype,"currentValue"),m(e.prototype,"name"),m({mode:"boolean"})(e.prototype,"required"),I(e.prototype,"value"),e}function Vc(i){class e extends Ps(i){}class t extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return m({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),m({attribute:"current-checked",converter:Sc})(t.prototype,"currentChecked"),I(t.prototype,"defaultChecked"),I(t.prototype,"checked"),t}class Mp extends ie{}class Hp extends Ps(Mp){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let nt=class extends Hp{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};p([m({mode:"boolean"})],nt.prototype,"autofocus",void 0);p([m({attribute:"form"})],nt.prototype,"formId",void 0);p([m],nt.prototype,"formaction",void 0);p([m],nt.prototype,"formenctype",void 0);p([m],nt.prototype,"formmethod",void 0);p([m({mode:"boolean"})],nt.prototype,"formnovalidate",void 0);p([m],nt.prototype,"formtarget",void 0);p([m],nt.prototype,"type",void 0);p([I],nt.prototype,"defaultSlottedContent",void 0);class Bn{}p([m({attribute:"aria-expanded"})],Bn.prototype,"ariaExpanded",void 0);p([m({attribute:"aria-pressed"})],Bn.prototype,"ariaPressed",void 0);He(Bn,se);He(nt,Bi,Bn);const Gs={none:"none",default:"default",sticky:"sticky"},Et={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},fs={default:"default",header:"header",stickyHeader:"sticky-header"};let we=class extends ie{constructor(){super(...arguments),this.rowType=fs.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Pc(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ri,this.handleFocusout),this.addEventListener(Pi,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ri,this.handleFocusout),this.removeEventListener(Pi,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Ts:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case Ss:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case Li:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case Ni:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===fs.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===fs.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};p([m({attribute:"grid-template-columns"})],we.prototype,"gridTemplateColumns",void 0);p([m({attribute:"row-type"})],we.prototype,"rowType",void 0);p([I],we.prototype,"rowData",void 0);p([I],we.prototype,"columnDefinitions",void 0);p([I],we.prototype,"cellItemTemplate",void 0);p([I],we.prototype,"headerCellItemTemplate",void 0);p([I],we.prototype,"rowIndex",void 0);p([I],we.prototype,"isActiveRow",void 0);p([I],we.prototype,"activeCellItemTemplate",void 0);p([I],we.prototype,"defaultCellItemTemplate",void 0);p([I],we.prototype,"defaultHeaderCellItemTemplate",void 0);p([I],we.prototype,"cellElements",void 0);function Lp(i){const e=i.tagFor(we);return W`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,s)=>s.parent.headerCellItemTemplate}"
    ></${e}>
`}const Np=(i,e)=>{const t=Lp(i),s=i.tagFor(we);return W`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${t}"
            ${Fc({property:"rowElements",filter:br("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let Ce=class Fo extends ie{constructor(){super(),this.noTabbing=!1,this.generateHeader=Gs.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(r.length-1,t)),a=r[l];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,V.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,s)=>{const n=t;n.rowIndex=s,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(s=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Fo.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Fo.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Pc(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Hl,this.handleFocus),this.addEventListener(Pi,this.handleKeydown),this.addEventListener(Ri,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),V.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Hl,this.handleFocus),this.removeEventListener(Pi,this.handleKeydown),this.removeEventListener(Ri,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(e.key){case ci:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ai:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Ep:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){const r=this.rowElements[t];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Ip:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=s;t++){const r=this.rowElements[t];if(r.offsetTop+r.offsetHeight>n){let l=0;this.generateHeader===Gs.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-l;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Li:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case Ni:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,V.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Gs.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Gs.sticky?fs.stickyHeader:fs.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};Ce.generateColumns=i=>Object.getOwnPropertyNames(i).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));p([m({attribute:"no-tabbing",mode:"boolean"})],Ce.prototype,"noTabbing",void 0);p([m({attribute:"generate-header"})],Ce.prototype,"generateHeader",void 0);p([m({attribute:"grid-template-columns"})],Ce.prototype,"gridTemplateColumns",void 0);p([I],Ce.prototype,"rowsData",void 0);p([I],Ce.prototype,"columnDefinitions",void 0);p([I],Ce.prototype,"rowItemTemplate",void 0);p([I],Ce.prototype,"cellItemTemplate",void 0);p([I],Ce.prototype,"headerCellItemTemplate",void 0);p([I],Ce.prototype,"focusRowIndex",void 0);p([I],Ce.prototype,"focusColumnIndex",void 0);p([I],Ce.prototype,"defaultRowItemTemplate",void 0);p([I],Ce.prototype,"rowElementTag",void 0);p([I],Ce.prototype,"rowElements",void 0);const Vp=W`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,jp=W`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;let jt=class extends ie{constructor(){super(...arguments),this.cellType=Et.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Ll,this.handleFocusin),this.addEventListener(Ri,this.handleFocusout),this.addEventListener(Pi,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ll,this.handleFocusin),this.removeEventListener(Ri,this.handleFocusout),this.removeEventListener(Pi,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Et.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Et.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Et.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case Es:case Ap:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Et.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case Fn:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Et.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=jp.render(this,this);break;case void 0:case Et.rowHeader:case Et.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Vp.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};p([m({attribute:"cell-type"})],jt.prototype,"cellType",void 0);p([m({attribute:"grid-column"})],jt.prototype,"gridColumn",void 0);p([I],jt.prototype,"rowData",void 0);p([I],jt.prototype,"columnDefinition",void 0);function zp(i){const e=i.tagFor(jt);return W`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,s)=>s.index+1}"
        :rowData="${(t,s)=>s.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function Up(i){const e=i.tagFor(jt);return W`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,s)=>s.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}const qp=(i,e)=>{const t=zp(i),s=Up(i);return W`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${s}"
            ${Fc({property:"cellElements",filter:br('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ye("slottedCellElements")}></slot>
        </template>
    `},Gp=(i,e)=>W`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Wp=(i,e)=>W`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
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
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ye("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Qp extends ie{}class Yp extends Vc(Qp){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Mn=class extends Yp{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Os:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};p([m({attribute:"readonly",mode:"boolean"})],Mn.prototype,"readOnly",void 0);p([I],Mn.prototype,"defaultSlottedNodes",void 0);p([I],Mn.prototype,"indeterminate",void 0);function jc(i){return Tp(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class _t extends ie{constructor(e,t,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){const t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),N.notify(this,"value")}get value(){var e;return N.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}p([I],_t.prototype,"checked",void 0);p([I],_t.prototype,"content",void 0);p([I],_t.prototype,"defaultSelected",void 0);p([m({mode:"boolean"})],_t.prototype,"disabled",void 0);p([m({attribute:"selected",mode:"boolean"})],_t.prototype,"selectedAttribute",void 0);p([I],_t.prototype,"selected",void 0);p([m({attribute:"value",mode:"fromView"})],_t.prototype,"initialValue",void 0);class Vi{}p([I],Vi.prototype,"ariaChecked",void 0);p([I],Vi.prototype,"ariaPosInSet",void 0);p([I],Vi.prototype,"ariaSelected",void 0);p([I],Vi.prototype,"ariaSetSize",void 0);He(Vi,se);He(_t,Bi,Vi);class Oe extends ie{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return N.track(this,"options"),this._options}set options(e){this._options=e,N.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(s=>s.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){const s=e>t?-1:e<t?1:0,n=e+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,l,a)=>!r&&!l.disabled&&a<n?l:r,o);break}case 1:{o=this.options.reduce((r,l,a)=>!r&&!l.disabled&&a>n?l:r,o);break}}return this.options.indexOf(o)}handleChange(e,t){switch(t){case"selected":{Oe.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Oe.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case Li:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case ai:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case ci:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case Ni:{e.preventDefault(),this.selectLastOption();break}case vr:return this.focusAndScrollOptionIntoView(),!0;case Es:case Fn:return!0;case Os:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,t),o=n>-1?n:e;this.selectedIndex=o,t===o&&this.selectedIndexChanged(t,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var s;const n=t.filter(Oe.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=N.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>!s.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Cp(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>s.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,s;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((n,o)=>(jc(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=yn("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}}Oe.slottedOptionFilter=i=>jc(i)&&!i.hidden;Oe.TYPE_AHEAD_TIMEOUT_MS=1e3;p([m({mode:"boolean"})],Oe.prototype,"disabled",void 0);p([I],Oe.prototype,"selectedIndex",void 0);p([I],Oe.prototype,"selectedOptions",void 0);p([I],Oe.prototype,"slottedOptions",void 0);p([I],Oe.prototype,"typeaheadBuffer",void 0);class di{}p([I],di.prototype,"ariaActiveDescendant",void 0);p([I],di.prototype,"ariaDisabled",void 0);p([I],di.prototype,"ariaExpanded",void 0);p([I],di.prototype,"ariaMultiSelectable",void 0);He(di,se);He(Oe,di);const po={above:"above",below:"below"};function Bo(i){const e=i.parentElement;if(e)return e;{const t=i.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Jp(i,e){let t=e;for(;t!==null;){if(t===i)return!0;t=Bo(t)}return!1}const Ct=document.createElement("div");function Xp(i){return i instanceof Dn}class xr{setProperty(e,t){V.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){V.queueUpdate(()=>this.target.removeProperty(e))}}class Zp extends xr{constructor(e){super();const t=new CSSStyleSheet;t[wc]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(Be.create([t]))}}class Kp extends xr{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class eg extends xr{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class zc{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),N.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),V.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),V.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}p([I],zc.prototype,"target",void 0);class tg{constructor(e){this.target=e.style}setProperty(e,t){V.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){V.queueUpdate(()=>this.target.removeProperty(e))}}class fe{setProperty(e,t){fe.properties[e]=t;for(const s of fe.roots.values())mi.getOrCreate(fe.normalizeRoot(s)).setProperty(e,t)}removeProperty(e){delete fe.properties[e];for(const t of fe.roots.values())mi.getOrCreate(fe.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=fe;if(!t.has(e)){t.add(e);const s=mi.getOrCreate(this.normalizeRoot(e));for(const n in fe.properties)s.setProperty(n,fe.properties[n])}}static unregisterRoot(e){const{roots:t}=fe;if(t.has(e)){t.delete(e);const s=mi.getOrCreate(fe.normalizeRoot(e));for(const n in fe.properties)s.removeProperty(n)}}static normalizeRoot(e){return e===Ct?document:e}}fe.roots=new Set;fe.properties={};const go=new WeakMap,ig=V.supportsAdoptedStyleSheets?Zp:zc,mi=Object.freeze({getOrCreate(i){if(go.has(i))return go.get(i);let e;return i===Ct?e=new fe:i instanceof Document?e=V.supportsAdoptedStyleSheets?new Kp:new eg:Xp(i)?e=new ig(i):e=new tg(i),go.set(i,e),e}});class Ee extends Ac{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ee.uniqueId(),Ee.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Ee({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Ee.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=ae.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Ee&&(t=this.alias(t)),ae.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),ae.existsFor(e)&&ae.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ct,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);t&&!ae.existsFor(t)&&ae.getOrCreate(t),s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(s=>s.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}Ee.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();Ee.tokensById=new Map;class sg{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){mi.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(ae.getOrCreate(t).get(e)))}remove(e,t){mi.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class ng{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=N.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,hs))}catch(e){console.error(e)}}}class og{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),N.getNotifier(this).notify(e.id))}get(e){return N.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),N.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const Xi=new WeakMap,Zi=new WeakMap;class ae{constructor(e){this.target=e,this.store=new og,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,s)=>{const n=Ee.getTokenById(s);n&&(n.notify(this.target),this.updateCSSTokenReflection(t,n))}},Xi.set(e,this),N.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Dn?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Xi.get(e)||new ae(e)}static existsFor(e){return Xi.has(e)}static findParent(e){if(Ct!==e.target){let t=Bo(e.target);for(;t!==null;){if(Xi.has(t))return Xi.get(t);t=Bo(t)}return ae.getOrCreate(Ct)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==Ct?ae.getOrCreate(Ct):null}while(s!==null);return null}get parent(){return Zi.get(this)||null}updateCSSTokenReflection(e,t){if(Ee.isCSSDesignToken(t)){const s=this.parent,n=this.isReflecting(t);if(s){const o=s.get(t),r=e.get(t);o!==r&&!n?this.reflectToCSS(t):o===r&&n&&this.stopReflectToCSS(t)}else n||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(t!==void 0)return t;const s=this.getRaw(e);if(s!==void 0)return this.hydrate(e,s),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=ae.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){Ee.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Ee.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=ae.findParent(this);e&&e.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Zi.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Zi.get(e).removeChild(e);const t=this.children.filter(s=>e.contains(s));Zi.set(e,this),this.children.push(e),t.forEach(s=>e.appendChild(s)),N.getNotifier(this.store).subscribe(e);for(const[s,n]of this.store.all())e.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n),e.updateCSSTokenReflection(e.store,s)}removeChild(e){const t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),N.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const s=Zi.delete(e);for(const[n]of this.store.all())e.hydrate(n,e.getRaw(n)),e.updateCSSTokenReflection(e.store,n);return s}contains(e){return Jp(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),ae.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),ae.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const s=Ee.getTokenById(t);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(e,t){if(!this.has(e)){const s=this.bindingObservers.get(e);Ee.isDerivedDesignTokenValue(t)?s?s.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(s&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const s=new ng(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}ae.cssCustomPropertyReflector=new sg;p([I],ae.prototype,"children",void 0);function rg(i){return Ee.from(i)}const Uc=Object.freeze({create:rg,notifyConnection(i){return!i.isConnected||!ae.existsFor(i)?!1:(ae.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!ae.existsFor(i)?!1:(ae.getOrCreate(i).unbind(),!0)},registerRoot(i=Ct){fe.registerRoot(i)},unregisterRoot(i=Ct){fe.unregisterRoot(i)}}),bo=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),mo=new Map,on=new Map;let Ti=null;const Ki=oe.createInterface(i=>i.cachedCallback(e=>(Ti===null&&(Ti=new Gc(null,e)),Ti))),qc=Object.freeze({tagFor(i){return on.get(i)},responsibleFor(i){const e=i.$$designSystem$$;return e||oe.findResponsibleContainer(i).get(Ki)},getOrCreate(i){if(!i)return Ti===null&&(Ti=oe.getOrCreateDOMContainer().get(Ki)),Ti;const e=i.$$designSystem$$;if(e)return e;const t=oe.getOrCreateDOMContainer(i);if(t.has(Ki,!1))return t.get(Ki);{const s=new Gc(i,t);return t.register(ks.instance(Ki,s)),s}}});function lg(i,e,t){return typeof i=="string"?{name:i,type:e,callback:t}:i}class Gc{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>bo.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(l,a,d){const c=lg(l,a,d),{name:h,callback:g,baseClass:y}=c;let{type:_}=c,R=h,G=mo.get(R),j=!0;for(;G;){const q=n(R,_,G);switch(q){case bo.ignoreDuplicate:return;case bo.definitionCallbackOnly:j=!1,G=void 0;break;default:R=q,G=mo.get(R);break}}j&&((on.has(_)||_===ie)&&(_=class extends _{}),mo.set(R,_),on.set(_,R),y&&on.set(y,R)),s.push(new ag(t,R,_,o,g,j))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Uc.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const l of s)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class ag{constructor(e,t,s,n,o,r){this.container=e,this.name=t,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){Lc.define(this.name,e,this.container)}defineElement(e){this.definition=new Pn(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return qc.tagFor(e)}}const cg=(i,e)=>W`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,dg={separator:"separator"};let $r=class extends ie{constructor(){super(...arguments),this.role=dg.separator,this.orientation=mr.horizontal}};p([m],$r.prototype,"role",void 0);p([m],$r.prototype,"orientation",void 0);const hg=(i,e)=>W`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Hi(i,e)}
        <span class="content" part="content">
            <slot ${Ye("content")}></slot>
        </span>
        ${Mi(i,e)}
    </template>
`;class Hn extends Oe{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var s,n;this.ariaActiveDescendant=(n=(s=this.options[t])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,s)=>{t.checked=qs(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=qs(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=qs(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,s)=>{t.checked=qs(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const s=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,t){case Li:{this.checkFirstOption(s);return}case ai:{this.checkNextOption(s);return}case ci:{this.checkPreviousOption(s);return}case Ni:{this.checkLastOption(s);return}case vr:return this.focusAndScrollOptionIntoView(),!0;case Fn:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Os:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var s;this.ariaMultiSelectable=t?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var s;const n=Math.max(0,parseInt((s=t==null?void 0:t.toFixed())!==null&&s!==void 0?s:"",10));n!==t&&V.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(s=>!s.disabled),t=!e.every(s=>s.selected);e.forEach(s=>s.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}p([I],Hn.prototype,"activeIndex",void 0);p([m({mode:"boolean"})],Hn.prototype,"multiple",void 0);p([m({converter:it})],Hn.prototype,"size",void 0);class ug extends ie{}class fg extends Ps(ug){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const pg={text:"text"};let Ue=class extends fg{constructor(){super(...arguments),this.type=pg.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&V.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({attribute:"readonly",mode:"boolean"})],Ue.prototype,"readOnly",void 0);p([m({mode:"boolean"})],Ue.prototype,"autofocus",void 0);p([m],Ue.prototype,"placeholder",void 0);p([m],Ue.prototype,"type",void 0);p([m],Ue.prototype,"list",void 0);p([m({converter:it})],Ue.prototype,"maxlength",void 0);p([m({converter:it})],Ue.prototype,"minlength",void 0);p([m],Ue.prototype,"pattern",void 0);p([m({converter:it})],Ue.prototype,"size",void 0);p([m({mode:"boolean"})],Ue.prototype,"spellcheck",void 0);p([I],Ue.prototype,"defaultSlottedNodes",void 0);class wr{}He(wr,se);He(Ue,Bi,wr);const ql=44,gg=(i,e)=>W`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${gr(t=>typeof t.value=="number",W`
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
                        style="stroke-dasharray: ${t=>ql*t.percentComplete/100}px ${ql}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,W`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class ji extends ie{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=t-e;this.percentComplete=n===0?0:Math.fround((s-e)/n*100)}}p([m({converter:it})],ji.prototype,"value",void 0);p([m({converter:it})],ji.prototype,"min",void 0);p([m({converter:it})],ji.prototype,"max",void 0);p([m({mode:"boolean"})],ji.prototype,"paused",void 0);p([I],ji.prototype,"percentComplete",void 0);const bg=(i,e)=>W`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @focusout="${(t,s)=>t.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===mr.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ye({property:"slottedRadioButtons",filter:br("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let zt=class extends ie{constructor(){super(...arguments),this.orientation=mr.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(s=>{s!==t&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const s=e[t];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,s=e.target,n=s!==null?t.indexOf(s):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===t.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const s=this.slottedRadioButtons;t.checked||s.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,s)=>e===t.length&&this.isInsideToolbar&&s===Ss,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Ts,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,t,e.key)){this.moveRightOffGroup();return}else s===t.length&&(s=0);for(;s<t.length&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;if(s+1>=t.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(t,s);break}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,s=s<0?t.length-1:s,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;s>=0&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;s-1<0?s=t.length-1:s-=1}else{this.moveToRadioByIndex(t,s);break}},this.keydownHandler=e=>{const t=e.key;if(t in Op&&this.isInsideFoundationToolbar)return!0;switch(t){case Es:{this.checkFocusedRadio();break}case Ss:case ai:{this.direction===Di.ltr?this.moveRight(e):this.moveLeft(e);break}case Ts:case ci:{this.direction===Di.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Fp(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),t=e?e.length:0;if(t>1){const n=e[t-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};p([m({attribute:"readonly",mode:"boolean"})],zt.prototype,"readOnly",void 0);p([m({attribute:"disabled",mode:"boolean"})],zt.prototype,"disabled",void 0);p([m],zt.prototype,"name",void 0);p([m],zt.prototype,"value",void 0);p([m],zt.prototype,"orientation",void 0);p([I],zt.prototype,"childItems",void 0);p([I],zt.prototype,"slottedRadioButtons",void 0);const mg=(i,e)=>W`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ye("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class vg extends ie{}class yg extends Vc(vg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Ln=class extends yg{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Os:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};p([m({attribute:"readonly",mode:"boolean"})],Ln.prototype,"readOnly",void 0);p([I],Ln.prototype,"name",void 0);p([I],Ln.prototype,"defaultSlottedNodes",void 0);function xg(i,e,t){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class $g extends Hn{}class wg extends Ps($g){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Ut extends wg{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=yn("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,V.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return N.track(this,"value"),this._value}set value(e){var t,s,n,o,r,l,a;const d=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){const c=this._options.findIndex(y=>y.value===e),h=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,g=(r=(o=this._options[c])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(c===-1||h!==g)&&(e="",this.selectedIndex=c),e=(a=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&a!==void 0?a:e}d!==e&&(this._value=e,super.valueChanged(d,e),N.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,s;this.$fastController.isConnected&&(this.value=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&s!==void 0?s:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?po.above:po.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===po.above?~~e.top:~~s}get displayValue(){var e,t;return N.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(s=>{N.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(s=>{N.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var s;super.selectedOptionsChanged(e,t),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const l=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);l&&(l.selected=n.selected)})}setDefaultSelectedOption(){var e;const t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Oe.slottedOptionFilter),s=t==null?void 0:t.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case Os:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Li:case Ni:{e.preventDefault();break}case Es:{e.preventDefault(),this.open=!this.open;break}case Fn:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case vr:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===ai||t===ci)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&N.notify(this,"displayValue")}}p([m({attribute:"open",mode:"boolean"})],Ut.prototype,"open",void 0);p([kf],Ut.prototype,"collapsible",null);p([I],Ut.prototype,"control",void 0);p([m({attribute:"position"})],Ut.prototype,"positionAttribute",void 0);p([I],Ut.prototype,"position",void 0);p([I],Ut.prototype,"maxHeight",void 0);class Cr{}p([I],Cr.prototype,"ariaControls",void 0);He(Cr,di);He(Ut,Bi,Cr);const Cg=(i,e)=>W`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @focusin="${(t,s)=>t.focusinHandler(s.event)}"
        @focusout="${(t,s)=>t.focusoutHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @mousedown="${(t,s)=>t.mousedownHandler(s.event)}"
    >
        ${gr(t=>t.collapsible,W`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${Re("control")}
                >
                    ${Hi(i,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Mi(i,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${Re("listbox")}
        >
            <slot
                ${Ye({filter:Oe.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,kg=(i,e)=>W`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Tg extends ie{}const Sg=(i,e)=>W`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class Wc extends ie{}p([m({mode:"boolean"})],Wc.prototype,"disabled",void 0);const _g=(i,e)=>W`
    <template class="${t=>t.orientation}">
        ${Hi(i,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ye("tabs")}></slot>

            ${gr(t=>t.showActiveIndicator,W`
                    <div
                        ${Re("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Mi(i,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Ye("tabpanels")}></slot>
        </div>
    </template>
`,Mo={horizontal:"horizontal"};class At extends ie{constructor(){super(...arguments),this.orientation=Mo.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",s=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const l=this.tabIds[o],a=this.tabpanelIds[o];n.setAttribute("id",l),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",a),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=l)}n.style[e]="",n.style[t]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const s=this.tabIds[t],n=this.tabpanelIds[t];e.setAttribute("id",n),e.setAttribute("aria-labelledby",s),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Ts:e.preventDefault(),this.adjustBackward(e);break;case Ss:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case ci:e.preventDefault(),this.adjustBackward(e);break;case ai:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case Li:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case Ni:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)+1:1,s===t.length&&(s=0);s<t.length&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else{if(this.activetab&&s===t.indexOf(this.activetab))break;s+1>=t.length?s=0:s+=1}},this.adjustBackward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)-1:0,s=s<0?t.length-1:s;s>=0&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else s-1<0?s=t.length-1:s-=1},this.moveToTabByIndex=(e,t)=>{const s=e[t];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${yn()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${yn()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Mo.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const t=this.tabs.filter(r=>this.isFocusableElement(r)),s=t.indexOf(this.activetab),n=Rp(0,t.length-1,s+e),o=this.tabs.indexOf(t[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}p([m],At.prototype,"orientation",void 0);p([m],At.prototype,"activeid",void 0);p([I],At.prototype,"tabs",void 0);p([I],At.prototype,"tabpanels",void 0);p([m({mode:"boolean"})],At.prototype,"activeindicator",void 0);p([I],At.prototype,"activeIndicatorRef",void 0);p([I],At.prototype,"showActiveIndicator",void 0);He(At,Bi);class Ag extends ie{}class Ig extends Ps(Ag){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Qc={none:"none"};let De=class extends Ig{constructor(){super(...arguments),this.resize=Qc.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({mode:"boolean"})],De.prototype,"readOnly",void 0);p([m],De.prototype,"resize",void 0);p([m({mode:"boolean"})],De.prototype,"autofocus",void 0);p([m({attribute:"form"})],De.prototype,"formId",void 0);p([m],De.prototype,"list",void 0);p([m({converter:it})],De.prototype,"maxlength",void 0);p([m({converter:it})],De.prototype,"minlength",void 0);p([m],De.prototype,"name",void 0);p([m],De.prototype,"placeholder",void 0);p([m({converter:it,mode:"fromView"})],De.prototype,"cols",void 0);p([m({converter:it,mode:"fromView"})],De.prototype,"rows",void 0);p([m({mode:"boolean"})],De.prototype,"spellcheck",void 0);p([I],De.prototype,"defaultSlottedNodes",void 0);He(De,wr);const Eg=(i,e)=>W`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==Qc.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ye("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,s)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${Re("control")}
        ></textarea>
    </template>
`,Og=(i,e)=>W`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ye({property:"defaultSlottedNodes",filter:xg})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Hi(i,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Re("control")}
            />
            ${Mi(i,e)}
        </div>
    </template>
`,Lt="not-allowed",Rg=":host([hidden]){display:none}";function ke(i){return`${Rg}:host{display:${i}}`}const $e=_p()?"focus-visible":"focus";function Pg(i){return qc.getOrCreate(i).withPrefix("vscode")}function Dg(i){window.addEventListener("load",()=>{new MutationObserver(()=>{Gl(i)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Gl(i)})}function Gl(i){const e=getComputedStyle(document.body),t=document.querySelector("body");if(t){const s=t.getAttribute("data-vscode-theme-kind");for(const[n,o]of i){let r=e.getPropertyValue(n).toString();if(s==="vscode-high-contrast")r.length===0&&o.name.includes("background")&&(r="transparent"),o.name==="button-icon-hover-background"&&(r="transparent");else if(s==="vscode-high-contrast-light"){if(r.length===0&&o.name.includes("background"))switch(o.name){case"button-primary-hover-background":r="#0F4A85";break;case"button-secondary-hover-background":r="transparent";break;case"button-icon-hover-background":r="transparent";break}}else o.name==="contrast-active-border"&&(r="transparent");o.setValueFor(t,r)}}}const Wl=new Map;let Ql=!1;function A(i,e){const t=Uc.create(i);if(e){if(e.includes("--fake-vscode-token")){const s="id"+Math.random().toString(16).slice(2);e=`${e}-${s}`}Wl.set(e,t)}return Ql||(Dg(Wl),Ql=!0),t}const Fg=A("background","--vscode-editor-background").withDefault("#1e1e1e"),U=A("border-width").withDefault(1),Yc=A("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");A("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const Ds=A("corner-radius").withDefault(0),Si=A("corner-radius-round").withDefault(2),F=A("design-unit").withDefault(4),hi=A("disabled-opacity").withDefault(.4),ce=A("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Je=A("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");A("font-weight","--vscode-font-weight").withDefault("400");const ye=A("foreground","--vscode-foreground").withDefault("#cccccc"),rn=A("input-height").withDefault("26"),kr=A("input-min-width").withDefault("100px"),Pe=A("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Me=A("type-ramp-base-line-height").withDefault("normal"),Jc=A("type-ramp-minus1-font-size").withDefault("11px"),Xc=A("type-ramp-minus1-line-height").withDefault("16px");A("type-ramp-minus2-font-size").withDefault("9px");A("type-ramp-minus2-line-height").withDefault("16px");A("type-ramp-plus1-font-size").withDefault("16px");A("type-ramp-plus1-line-height").withDefault("24px");const Bg=A("scrollbarWidth").withDefault("10px"),Mg=A("scrollbarHeight").withDefault("10px"),Hg=A("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Lg=A("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Ng=A("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Zc=A("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Kc=A("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Tr=A("button-border","--vscode-button-border").withDefault("transparent"),Yl=A("button-icon-background").withDefault("transparent"),Vg=A("button-icon-corner-radius").withDefault("5px"),jg=A("button-icon-outline-offset").withDefault(0),Jl=A("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),zg=A("button-icon-padding").withDefault("3px"),_i=A("button-primary-background","--vscode-button-background").withDefault("#0e639c"),ed=A("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),td=A("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),vo=A("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Ug=A("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),qg=A("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Gg=A("button-padding-horizontal").withDefault("11px"),Wg=A("button-padding-vertical").withDefault("4px"),xt=A("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),vi=A("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Qg=A("checkbox-corner-radius").withDefault(3);A("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Zt=A("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),Ai=A("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Yg=A("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Jg=A("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Ws=A("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Bt=A("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");A("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const Xg=A("dropdown-list-max-height").withDefault("200px"),ti=A("input-background","--vscode-input-background").withDefault("#3c3c3c"),id=A("input-foreground","--vscode-input-foreground").withDefault("#cccccc");A("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const Xl=A("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Zg=A("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Kg=A("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),eb=A("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),bi=A("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),tb=A("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");A("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");A("panel-view-border","--vscode-panel-border").withDefault("#80808059");const ib=A("tag-corner-radius").withDefault("2px"),sb=(i,e)=>le`
	${ke("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Je};
		font-size: ${Jc};
		line-height: ${Xc};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Zc};
		border: calc(${U} * 1px) solid ${Tr};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Kc};
		display: flex;
		height: calc(${F} * 4px);
		justify-content: center;
		min-width: calc(${F} * 4px + 2px);
		min-height: calc(${F} * 4px + 2px);
		padding: 3px 6px;
	}
`;class nb extends Rs{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const ob=nb.compose({baseName:"badge",template:Nc,styles:sb});function rb(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o}const lb=le`
	${ke("inline-flex")} :host {
		outline: none;
		font-family: ${Je};
		font-size: ${Pe};
		line-height: ${Me};
		color: ${ed};
		background: ${_i};
		border-radius: calc(${Si} * 1px);
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
		padding: ${Wg} ${Gg};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${U} * 1px) solid ${Tr};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${td};
	}
	:host(:active) {
		background: ${_i};
	}
	.control:${$e} {
		outline: calc(${U} * 1px) solid ${ce};
		outline-offset: calc(${U} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${hi};
		background: ${_i};
		cursor: ${Lt};
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
`,ab=le`
	:host([appearance='primary']) {
		background: ${_i};
		color: ${ed};
	}
	:host([appearance='primary']:hover) {
		background: ${td};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${_i};
	}
	:host([appearance='primary']) .control:${$e} {
		outline: calc(${U} * 1px) solid ${ce};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${_i};
	}
`,cb=le`
	:host([appearance='secondary']) {
		background: ${vo};
		color: ${Ug};
	}
	:host([appearance='secondary']:hover) {
		background: ${qg};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${vo};
	}
	:host([appearance='secondary']) .control:${$e} {
		outline: calc(${U} * 1px) solid ${ce};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${vo};
	}
`,db=le`
	:host([appearance='icon']) {
		background: ${Yl};
		border-radius: ${Vg};
		color: ${ye};
	}
	:host([appearance='icon']:hover) {
		background: ${Jl};
		outline: 1px dotted ${Yc};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${zg};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Jl};
	}
	:host([appearance='icon']) .control:${$e} {
		outline: calc(${U} * 1px) solid ${ce};
		outline-offset: ${jg};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Yl};
	}
`,hb=(i,e)=>le`
	${lb}
	${ab}
	${cb}
	${db}
`;class sd extends nt{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,s){e==="appearance"&&s==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=s),e==="disabled"&&(this.disabled=s!==null)}}rb([m],sd.prototype,"appearance",void 0);const ub=sd.compose({baseName:"button",template:Bp,styles:hb,shadowOptions:{delegatesFocus:!0}}),fb=(i,e)=>le`
	${ke("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${F} * 1px) 0;
		user-select: none;
		font-size: ${Pe};
		line-height: ${Me};
	}
	.control {
		position: relative;
		width: calc(${F} * 4px + 2px);
		height: calc(${F} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Qg} * 1px);
		border: calc(${U} * 1px) solid ${vi};
		background: ${xt};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Je};
		color: ${ye};
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
		fill: ${ye};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${ye};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${xt};
		border-color: ${vi};
	}
	:host(:enabled) .control:active {
		background: ${xt};
		border-color: ${ce};
	}
	:host(:${$e}) .control {
		border: calc(${U} * 1px) solid ${ce};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Lt};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${hi};
	}
`;class pb extends Mn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const gb=pb.compose({baseName:"checkbox",template:Wp,styles:fb,checkedIndicator:`
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
	`}),bb=(i,e)=>le`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,mb=(i,e)=>le`
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
		background: ${Fg};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Yg};
		outline: 1px dotted ${Yc};
		outline-offset: -1px;
	}
`,vb=(i,e)=>le`
	:host {
		padding: calc(${F} * 1px) calc(${F} * 3px);
		color: ${ye};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Je};
		font-size: ${Pe};
		line-height: ${Me};
		font-weight: 400;
		border: solid calc(${U} * 1px) transparent;
		border-radius: calc(${Ds} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${$e}),
	:host(:focus),
	:host(:active) {
		background: ${Zt};
		border: solid calc(${U} * 1px) ${ce};
		color: ${Ai};
		outline: none;
	}
	:host(:${$e}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Ai} !important;
	}
`;class yb extends Ce{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const xb=yb.compose({baseName:"data-grid",baseClass:Ce,template:Np,styles:bb});class $b extends we{}const wb=$b.compose({baseName:"data-grid-row",baseClass:we,template:qp,styles:mb});class Cb extends jt{}const kb=Cb.compose({baseName:"data-grid-cell",baseClass:jt,template:Gp,styles:vb}),Tb=(i,e)=>le`
	${ke("block")} :host {
		border: none;
		border-top: calc(${U} * 1px) solid ${Jg};
		box-sizing: content-box;
		height: 0;
		margin: calc(${F} * 1px) 0;
		width: 100%;
	}
`;class Sb extends $r{}const _b=Sb.compose({baseName:"divider",template:cg,styles:Tb}),Ab=(i,e)=>le`
	${ke("inline-flex")} :host {
		background: ${Ws};
		border-radius: calc(${Si} * 1px);
		box-sizing: border-box;
		color: ${ye};
		contain: contents;
		font-family: ${Je};
		height: calc(${rn} * 1px);
		position: relative;
		user-select: none;
		min-width: ${kr};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${U} * 1px) solid ${Bt};
		border-radius: calc(${Si} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Pe};
		line-height: ${Me};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Ws};
		border: calc(${U} * 1px) solid ${ce};
		border-radius: calc(${Si} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Xg};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${$e}) .control {
		border-color: ${ce};
	}
	:host(:not([disabled]):hover) {
		background: ${Ws};
		border-color: ${Bt};
	}
	:host(:${$e}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Zt};
		border: calc(${U} * 1px) solid transparent;
		color: ${Ai};
	}
	:host([disabled]) {
		cursor: ${Lt};
		opacity: ${hi};
	}
	:host([disabled]) .control {
		cursor: ${Lt};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Ws};
		color: ${ye};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${ce};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${ce};
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
		bottom: calc(${rn} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${rn} * 1px);
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
`;class Ib extends Ut{}const Eb=Ib.compose({baseName:"dropdown",template:Cg,styles:Ab,indicator:`
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
	`}),Ob=(i,e)=>le`
	${ke("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Zg};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Je};
		font-size: ${Pe};
		line-height: ${Me};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${U} * 1px) solid transparent;
		border-radius: calc(${Ds} * 1px);
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
		color: ${Xl};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Xl};
	}
	:host(:${$e}) .control,
	:host(:focus) .control {
		border: calc(${U} * 1px) solid ${ce};
	}
`;class Rb extends st{}const Pb=Rb.compose({baseName:"link",template:Dp,styles:Ob,shadowOptions:{delegatesFocus:!0}}),Db=(i,e)=>le`
	${ke("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Ds};
		border: calc(${U} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ye};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Pe};
		line-height: ${Me};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${F} / 2) * 1px)
			calc((${F} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${$e}) {
		border-color: ${ce};
		background: ${Zt};
		color: ${ye};
	}
	:host([aria-selected='true']) {
		background: ${Zt};
		border: calc(${U} * 1px) solid transparent;
		color: ${Ai};
	}
	:host(:active) {
		background: ${Zt};
		color: ${Ai};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Zt};
		border: calc(${U} * 1px) solid transparent;
		color: ${Ai};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Zt};
		color: ${ye};
	}
	:host([disabled]) {
		cursor: ${Lt};
		opacity: ${hi};
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
`;let Fb=class extends _t{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}};const Bb=Fb.compose({baseName:"option",template:hg,styles:Db}),Mb=(i,e)=>le`
	${ke("grid")} :host {
		box-sizing: border-box;
		font-family: ${Je};
		font-size: ${Pe};
		line-height: ${Me};
		color: ${ye};
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
		background: ${bi};
		margin: 0;
		border-radius: calc(${Ds} * 1px);
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
`,Hb=(i,e)=>le`
	${ke("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Je};
		font-size: ${Pe};
		line-height: ${Me};
		height: calc(${F} * 7px);
		padding: calc(${F} * 1px) 0;
		color: ${tb};
		fill: currentcolor;
		border-radius: calc(${Ds} * 1px);
		border: solid calc(${U} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${bi};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${bi};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${bi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${bi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${bi};
		fill: currentcolor;
	}
	:host(:${$e}) {
		outline: none;
		border: solid calc(${U} * 1px) ${eb};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${F} * 2px);
	}
`,Lb=(i,e)=>le`
	${ke("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${U} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Pe};
		line-height: ${Me};
		padding: 10px calc((${F} + 2) * 1px);
	}
`;class Nb extends At{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Mo.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const Vb=Nb.compose({baseName:"panels",template:_g,styles:Mb});class jb extends Wc{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const zb=jb.compose({baseName:"panel-tab",template:Sg,styles:Hb});class Ub extends Tg{}const qb=Ub.compose({baseName:"panel-view",template:kg,styles:Lb}),Gb=(i,e)=>le`
	${ke("flex")} :host {
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
		stroke: ${Kg};
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
`;class Wb extends ji{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,s){e==="value"&&this.removeAttribute("value")}}const Qb=Wb.compose({baseName:"progress-ring",template:gg,styles:Gb,indeterminateIndicator:`
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
	`}),Yb=(i,e)=>le`
	${ke("flex")} :host {
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
		color: ${ye};
		font-size: ${Pe};
		margin: calc(${F} * 1px) 0;
	}
`;class Jb extends zt{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const Xb=Jb.compose({baseName:"radio-group",template:bg,styles:Yb}),Zb=(i,e)=>le`
	${ke("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Pe};
		line-height: ${Me};
		margin: calc(${F} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${xt};
		border-radius: 999px;
		border: calc(${U} * 1px) solid ${vi};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${F} * 4px);
		position: relative;
		outline: none;
		width: calc(${F} * 4px);
	}
	.label {
		color: ${ye};
		cursor: pointer;
		font-family: ${Je};
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
		background: ${ye};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${F} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${xt};
		border-color: ${vi};
	}
	:host(:not([disabled])) .control:active {
		background: ${xt};
		border-color: ${ce};
	}
	:host(:${$e}) .control {
		border: calc(${U} * 1px) solid ${ce};
	}
	:host([aria-checked='true']) .control {
		background: ${xt};
		border: calc(${U} * 1px) solid ${vi};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${xt};
		border: calc(${U} * 1px) solid ${vi};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${xt};
		border: calc(${U} * 1px) solid ${ce};
	}
	:host([aria-checked="true"]:${$e}:not([disabled])) .control {
		border: calc(${U} * 1px) solid ${ce};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Lt};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${hi};
	}
`;class Kb extends Ln{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const em=Kb.compose({baseName:"radio",template:mg,styles:Zb,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),tm=(i,e)=>le`
	${ke("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Je};
		font-size: ${Jc};
		line-height: ${Xc};
	}
	.control {
		background-color: ${Zc};
		border: calc(${U} * 1px) solid ${Tr};
		border-radius: ${ib};
		color: ${Kc};
		padding: calc(${F} * 0.5px) calc(${F} * 1px);
		text-transform: uppercase;
	}
`;class im extends Rs{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const sm=im.compose({baseName:"tag",template:Nc,styles:tm}),nm=(i,e)=>le`
	${ke("inline-block")} :host {
		font-family: ${Je};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${id};
		background: ${ti};
		border-radius: calc(${Si} * 1px);
		border: calc(${U} * 1px) solid ${Bt};
		font: inherit;
		font-size: ${Pe};
		line-height: ${Me};
		padding: calc(${F} * 2px + 1px);
		width: 100%;
		min-width: ${kr};
		resize: none;
	}
	.control:hover:enabled {
		background: ${ti};
		border-color: ${Bt};
	}
	.control:active:enabled {
		background: ${ti};
		border-color: ${ce};
	}
	.control:hover,
	.control:${$e},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Bg};
		height: ${Mg};
	}
	.control::-webkit-scrollbar-corner {
		background: ${ti};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Hg};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Lg};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Ng};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${ce};
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
		color: ${ye};
		cursor: pointer;
		font-size: ${Pe};
		line-height: ${Me};
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
		cursor: ${Lt};
	}
	:host([disabled]) {
		opacity: ${hi};
	}
	:host([disabled]) .control {
		border-color: ${Bt};
	}
`;class om extends De{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const rm=om.compose({baseName:"text-area",template:Eg,styles:nm,shadowOptions:{delegatesFocus:!0}}),lm=(i,e)=>le`
	${ke("inline-block")} :host {
		font-family: ${Je};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${id};
		background: ${ti};
		border-radius: calc(${Si} * 1px);
		border: calc(${U} * 1px) solid ${Bt};
		height: calc(${rn} * 1px);
		min-width: ${kr};
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
		font-size: ${Pe};
		line-height: ${Me};
	}
	.control:hover,
	.control:${$e},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${ye};
		cursor: pointer;
		font-size: ${Pe};
		line-height: ${Me};
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
		background: ${ti};
		border-color: ${Bt};
	}
	:host(:active:not([disabled])) .root {
		background: ${ti};
		border-color: ${ce};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${ce};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Lt};
	}
	:host([disabled]) {
		opacity: ${hi};
	}
	:host([disabled]) .control {
		border-color: ${Bt};
	}
`;class am extends Ue{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const cm=am.compose({baseName:"text-field",template:Og,styles:lm,shadowOptions:{delegatesFocus:!0}}),dm={vsCodeBadge:ob,vsCodeButton:ub,vsCodeCheckbox:gb,vsCodeDataGrid:xb,vsCodeDataGridCell:kb,vsCodeDataGridRow:wb,vsCodeDivider:_b,vsCodeDropdown:Eb,vsCodeLink:Pb,vsCodeOption:Bb,vsCodePanels:Vb,vsCodePanelTab:zb,vsCodePanelView:qb,vsCodeProgressRing:Qb,vsCodeRadioGroup:Xb,vsCodeRadio:em,vsCodeTag:sm,vsCodeTextArea:rm,vsCodeTextField:cm,register(i,...e){if(i)for(const t in this)t!=="register"&&this[t]().register(i,...e)}},hm={class:"theme-toggle"},um=["checked"],fm=Ko({__name:"App",setup(i){Pg().register(dm);const e=ut(!0);function t(s){console.log("Theme toggled");const n=s.target;e.value=n.checked,document.documentElement.classList.toggle("light-theme",!e.value),document.documentElement.classList.toggle("dark-theme",e.value)}return er(()=>{document.documentElement.classList.add("dark-theme"),setTimeout(()=>{const s=document.querySelector("body");s&&(s.style.setProperty("--foreground","var(--vscode-foreground)"),s.style.setProperty("--background","var(--vscode-panel-background)"),s.style.setProperty("--focus-border","var(--vscode-focusBorder)"),s.style.setProperty("--button-border","var(--vscode-button-border)"),s.style.setProperty("--button-primary-background","var(--vscode-button-background)"),s.style.setProperty("--button-primary-hover-background","var(--vscode-button-hoverBackground)"),s.style.setProperty("--checkbox-background","var(--vscode-checkbox-background)"),s.style.setProperty("--checkbox-foreground","var(--vscode-checkbox-foreground)"),s.style.setProperty("--checkbox-border","var(--vscode-checkbox-border)"),s.style.setProperty("--dropdown-background","var(--vscode-dropdown-background)"),s.style.setProperty("--dropdown-foreground","var(--vscode-dropdown-foreground)"),s.style.setProperty("--dropdown-border","var(--vscode-dropdown-border)"),s.style.setProperty("--input-background","var(--vscode-input-background)"))},100)}),(s,n)=>(Ze(),Kt(Ie,null,[he("div",hm,[he("vscode-checkbox",{id:"theme-toggle",checked:e.value,onChange:t},null,40,um),n[0]||(n[0]=he("label",{for:"theme-toggle"},"Toggle Theme",-1))]),n[1]||(n[1]=Qh("<details data-v-08bc3c89><summary data-v-08bc3c89>Proposed Changes</summary><ol data-v-08bc3c89><li data-v-08bc3c89>Change checkbox style to match checkboxes from Settings page</li><ul data-v-08bc3c89><li data-v-08bc3c89>Goal: Reduce visual noise and better match editor theming</li><li data-v-08bc3c89>Goal: Let&#39;s the color of server contribution source / server state text stand out</li></ul><li data-v-08bc3c89>Remove icons and indent tool list items</li><ul data-v-08bc3c89><li data-v-08bc3c89>Goal: Reduce visual noise</li><li data-v-08bc3c89>Goal: Improve the ability to distinguish servers and tools via stronger visual hierarchy</li></ul><li data-v-08bc3c89>Prefix server names with &quot;MCP Server:&quot;</li><ul data-v-08bc3c89><li data-v-08bc3c89>Note: Also demoed &quot;MCP Extension:&quot; – might be the wrong term but the idea is that there can be variations on the prefix name used</li><li data-v-08bc3c89>Goal: Provide extra information to distinguish between servers and tools</li><li data-v-08bc3c89>Goal: Reduce density of information on the right side of server list items</li></ul><li data-v-08bc3c89>Prefix all MCP contribution sources with &quot;From&quot;</li><ul data-v-08bc3c89><li data-v-08bc3c89>Goal: Makes it more clear that a server is *coming from* somewhere</li><li data-v-08bc3c89>Example: &quot;Claude Desktop&quot; vs &quot;From Claude Desktop&quot;</li><li data-v-08bc3c89>Bonus: Improves visual consistency / mental parse-ability of contribution sources text</li></ul><li data-v-08bc3c89>Suggestion: Add a contribution source label and server status to GitHub Copilot Chat server</li><ul data-v-08bc3c89><li data-v-08bc3c89>Goal: Improves consistency across all MCP contribution sources copy</li><li data-v-08bc3c89>Note: &quot;Built In&quot; might be the wrong term – consider revising for clarity/accuracy</li></ul></ol></details>",1)),We(Qu)],64))}}),pm=nr(fm,[["__scopeId","data-v-08bc3c89"]]);Pu(pm).mount("#app");
