/******************************************************************************
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
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$b=globalThis,e$d=t$b.ShadowRoot&&(void 0===t$b.ShadyCSS||t$b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$b=Symbol(),o$e=new WeakMap;let n$e = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$b)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$d&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$e.set(s,t));}return t}toString(){return this.cssText}};const r$l=t=>new n$e("string"==typeof t?t:t+"",void 0,s$b),i$b=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$e(o,t,s$b)},S$7=(s,o)=>{if(e$d)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$b.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$b=e$d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$l(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$a,defineProperty:e$c,getOwnPropertyDescriptor:r$k,getOwnPropertyNames:h$7,getOwnPropertySymbols:o$d,getPrototypeOf:n$d}=Object,a$7=globalThis,c$a=a$7.trustedTypes,l$7=c$a?c$a.emptyScript:"",p$7=a$7.reactiveElementPolyfillSupport,d$7=(t,s)=>t,u$7={toAttribute(t,s){switch(s){case Boolean:t=t?l$7:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$7=(t,s)=>!i$a(t,s),y$7={attribute:!0,type:String,converter:u$7,reflect:!1,hasChanged:f$7};Symbol.metadata??=Symbol("metadata"),a$7.litPropertyMetadata??=new WeakMap;let b$3 = class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$7){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$c(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$k(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$7}static _$Ei(){if(this.hasOwnProperty(d$7("elementProperties")))return;const t=n$d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$7("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$7("properties"))){const t=this.properties,s=[...h$7(t),...o$d(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$b(s));}else void 0!==s&&i.push(c$b(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$7(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$7).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$7;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$7)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}};b$3.elementStyles=[],b$3.shadowRootOptions={mode:"open"},b$3[d$7("elementProperties")]=new Map,b$3[d$7("finalized")]=new Map,p$7?.({ReactiveElement:b$3}),(a$7.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$a=globalThis,i$9=t$a.trustedTypes,s$a=i$9?i$9.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$b="$lit$",h$6=`lit$${(Math.random()+"").slice(9)}$`,o$c="?"+h$6,n$c=`<${o$c}>`,r$j=document,l$6=()=>r$j.createComment(""),c$9=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$6=Array.isArray,u$6=t=>a$6(t)||"function"==typeof t?.[Symbol.iterator],d$6="[ \t\n\f\r]",f$6=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$3=/-->/g,_$3=/>/g,m$3=RegExp(`>|${d$6}(?:([^\\s"'>=/]+)(${d$6}*=${d$6}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$6=/'/g,g$3=/"/g,$$3=/^(?:script|style|textarea|title)$/i,y$6=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$3=y$6(1),w$3=Symbol.for("lit-noChange"),T$3=Symbol.for("lit-nothing"),A$3=new WeakMap,E$3=r$j.createTreeWalker(r$j,129);function C$3(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$a?s$a.createHTML(i):i}const P$3=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$6;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$6?"!--"===u[1]?c=v$3:void 0!==u[1]?c=_$3:void 0!==u[2]?($$3.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$3):void 0!==u[3]&&(c=m$3):c===m$3?">"===u[0]?(c=r??f$6,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$3:'"'===u[3]?g$3:p$6):c===g$3||c===p$6?c=m$3:c===v$3||c===_$3?c=f$6:(c=m$3,r=void 0);const x=c===m$3&&t[i+1].startsWith("/>")?" ":"";l+=c===f$6?s+n$c:d>=0?(o.push(a),s.slice(0,d)+e$b+s.slice(d)+h$6+x):s+h$6+(-2===d?i:x);}return [C$3(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};let V$3 = class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P$3(t,s);if(this.el=V.createElement(f,n),E$3.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E$3.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$b)){const i=v[a++],s=r.getAttribute(t).split(h$6),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k$3:"?"===e[1]?H$3:"@"===e[1]?I$3:R$3}),r.removeAttribute(t);}else t.startsWith(h$6)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$3.test(r.tagName)){const t=r.textContent.split(h$6),s=t.length-1;if(s>0){r.textContent=i$9?i$9.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$6()),E$3.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$6());}}}else if(8===r.nodeType)if(r.data===o$c)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$6,t+1));)d.push({type:7,index:c}),t+=h$6.length-1;}c++;}}static createElement(t,i){const s=r$j.createElement("template");return s.innerHTML=t,s}};function N$3(t,i,s=t,e){if(i===w$3)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$9(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N$3(t,h._$AS(t,i.values),h,e)),i}let S$6 = class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$j).importNode(i,!0);E$3.currentNode=e;let h=E$3.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M$3(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L$3(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E$3.nextNode(),o++);}return E$3.currentNode=r$j,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let M$3 = class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T$3,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N$3(this,t,i),c$9(t)?t===T$3||null==t||""===t?(this._$AH!==T$3&&this._$AR(),this._$AH=T$3):t!==this._$AH&&t!==w$3&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$6(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T$3&&c$9(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$j.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V$3.createElement(C$3(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S$6(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A$3.get(t.strings);return void 0===i&&A$3.set(t.strings,i=new V$3(t)),i}k(t){a$6(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l$6()),this.S(l$6()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}};let R$3 = class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T$3,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T$3;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N$3(this,t,i,0),o=!c$9(t)||t!==this._$AH&&t!==w$3,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N$3(this,e[s+n],i,n),r===w$3&&(r=this._$AH[n]),o||=!c$9(r)||r!==this._$AH[n],r===T$3?t=T$3:t!==T$3&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T$3?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};let k$3 = class k extends R$3{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T$3?void 0:t;}};let H$3 = class H extends R$3{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T$3);}};let I$3 = class I extends R$3{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N$3(this,t,i,0)??T$3)===w$3)return;const s=this._$AH,e=t===T$3&&s!==T$3||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T$3&&(s===T$3||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};let L$3 = class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N$3(this,t);}};const Z$3=t$a.litHtmlPolyfillSupport;Z$3?.(V$3,M$3),(t$a.litHtmlVersions??=[]).push("3.1.2");const j$3=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M$3(i.insertBefore(l$6(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s$9 = class s extends b$3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j$3(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w$3}};s$9._$litElement$=!0,s$9[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$9});const r$i=globalThis.litElementPolyfillSupport;r$i?.({LitElement:s$9});(globalThis.litElementVersions??=[]).push("4.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$9=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$b={attribute:!0,type:String,converter:u$7,reflect:!1,hasChanged:f$7},r$h=(t=o$b,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$b(t){return (e,o)=>"object"==typeof o?r$h(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$g(r){return n$b({...r,state:!0,attribute:!1})}

let SampleComponent = class SampleComponent extends s$9 {
    constructor() {
        super(...arguments);
        this.text = "";
        this.counter = 0;
    }
    render() {
        return x$3 `
      <div>
        <div>
          <h3>My Text: ${this.text}</h3>
        </div>
        <div>
          <h3>Count: ${this.counter}</h3>
          <button @click=${() => ++this.counter}>Increment</button>
        </div>
      </div>
    `;
    }
};
SampleComponent.styles = i$b `
    h3 {
      color: firebrick;
    }

    button {
      color: green;
    }
  `;
__decorate([
    n$b({ type: String })
], SampleComponent.prototype, "text", void 0);
__decorate([
    r$g()
], SampleComponent.prototype, "counter", void 0);
SampleComponent = __decorate([
    t$9("sample-component")
], SampleComponent);

let SampleComponentStorybook = class SampleComponentStorybook extends s$9 {
    render() {
        return x$3 `
      <sample-component text="Hi Jeff"></sample-component>
    `;
    }
};
SampleComponentStorybook.styles = i$b `
  `;
SampleComponentStorybook = __decorate([
    t$9("sample-component-storybook")
], SampleComponentStorybook);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$8=globalThis,e$a=t$8.ShadowRoot&&(void 0===t$8.ShadyCSS||t$8.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$8=Symbol(),o$a=new WeakMap;let n$a = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$a&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$a.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$a.set(s,t));}return t}toString(){return this.cssText}};const r$f=t=>new n$a("string"==typeof t?t:t+"",void 0,s$8),i$8=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$a(o,t,s$8)},S$5=(s,o)=>{if(e$a)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$8.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$8=e$a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$f(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$7,defineProperty:e$9,getOwnPropertyDescriptor:r$e,getOwnPropertyNames:h$5,getOwnPropertySymbols:o$9,getPrototypeOf:n$9}=Object,a$5=globalThis,c$7=a$5.trustedTypes,l$5=c$7?c$7.emptyScript:"",p$5=a$5.reactiveElementPolyfillSupport,d$5=(t,s)=>t,u$5={toAttribute(t,s){switch(s){case Boolean:t=t?l$5:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$5=(t,s)=>!i$7(t,s),y$5={attribute:!0,type:String,converter:u$5,reflect:!1,hasChanged:f$5};Symbol.metadata??=Symbol("metadata"),a$5.litPropertyMetadata??=new WeakMap;let b$2 = class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$5){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$9(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$e(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$5}static _$Ei(){if(this.hasOwnProperty(d$5("elementProperties")))return;const t=n$9(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$5("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$5("properties"))){const t=this.properties,s=[...h$5(t),...o$9(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$8(s));}else void 0!==s&&i.push(c$8(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$5(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$5).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$5;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$5)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}};b$2.elementStyles=[],b$2.shadowRootOptions={mode:"open"},b$2[d$5("elementProperties")]=new Map,b$2[d$5("finalized")]=new Map,p$5?.({ReactiveElement:b$2}),(a$5.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$7=globalThis,i$6=t$7.trustedTypes,s$7=i$6?i$6.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$8="$lit$",h$4=`lit$${(Math.random()+"").slice(9)}$`,o$8="?"+h$4,n$8=`<${o$8}>`,r$d=document,l$4=()=>r$d.createComment(""),c$6=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$4=Array.isArray,u$4=t=>a$4(t)||"function"==typeof t?.[Symbol.iterator],d$4="[ \t\n\f\r]",f$4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$2=/-->/g,_$2=/>/g,m$2=RegExp(`>|${d$4}(?:([^\\s"'>=/]+)(${d$4}*=${d$4}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$4=/'/g,g$2=/"/g,$$2=/^(?:script|style|textarea|title)$/i,y$4=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$2=y$4(1),w$2=Symbol.for("lit-noChange"),T$2=Symbol.for("lit-nothing"),A$2=new WeakMap,E$2=r$d.createTreeWalker(r$d,129);function C$2(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$7?s$7.createHTML(i):i}const P$2=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$4;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$4?"!--"===u[1]?c=v$2:void 0!==u[1]?c=_$2:void 0!==u[2]?($$2.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$2):void 0!==u[3]&&(c=m$2):c===m$2?">"===u[0]?(c=r??f$4,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$2:'"'===u[3]?g$2:p$4):c===g$2||c===p$4?c=m$2:c===v$2||c===_$2?c=f$4:(c=m$2,r=void 0);const x=c===m$2&&t[i+1].startsWith("/>")?" ":"";l+=c===f$4?s+n$8:d>=0?(o.push(a),s.slice(0,d)+e$8+s.slice(d)+h$4+x):s+h$4+(-2===d?i:x);}return [C$2(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};let V$2 = class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P$2(t,s);if(this.el=V.createElement(f,n),E$2.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E$2.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$8)){const i=v[a++],s=r.getAttribute(t).split(h$4),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k$2:"?"===e[1]?H$2:"@"===e[1]?I$2:R$2}),r.removeAttribute(t);}else t.startsWith(h$4)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$2.test(r.tagName)){const t=r.textContent.split(h$4),s=t.length-1;if(s>0){r.textContent=i$6?i$6.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$4()),E$2.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$4());}}}else if(8===r.nodeType)if(r.data===o$8)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$4,t+1));)d.push({type:7,index:c}),t+=h$4.length-1;}c++;}}static createElement(t,i){const s=r$d.createElement("template");return s.innerHTML=t,s}};function N$2(t,i,s=t,e){if(i===w$2)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$6(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N$2(t,h._$AS(t,i.values),h,e)),i}let S$4 = class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$d).importNode(i,!0);E$2.currentNode=e;let h=E$2.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M$2(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L$2(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E$2.nextNode(),o++);}return E$2.currentNode=r$d,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let M$2 = class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T$2,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N$2(this,t,i),c$6(t)?t===T$2||null==t||""===t?(this._$AH!==T$2&&this._$AR(),this._$AH=T$2):t!==this._$AH&&t!==w$2&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$4(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T$2&&c$6(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$d.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V$2.createElement(C$2(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S$4(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A$2.get(t.strings);return void 0===i&&A$2.set(t.strings,i=new V$2(t)),i}k(t){a$4(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l$4()),this.S(l$4()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}};let R$2 = class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T$2,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T$2;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N$2(this,t,i,0),o=!c$6(t)||t!==this._$AH&&t!==w$2,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N$2(this,e[s+n],i,n),r===w$2&&(r=this._$AH[n]),o||=!c$6(r)||r!==this._$AH[n],r===T$2?t=T$2:t!==T$2&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T$2?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};let k$2 = class k extends R$2{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T$2?void 0:t;}};let H$2 = class H extends R$2{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T$2);}};let I$2 = class I extends R$2{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N$2(this,t,i,0)??T$2)===w$2)return;const s=this._$AH,e=t===T$2&&s!==T$2||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T$2&&(s===T$2||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};let L$2 = class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N$2(this,t);}};const Z$2=t$7.litHtmlPolyfillSupport;Z$2?.(V$2,M$2),(t$7.litHtmlVersions??=[]).push("3.1.2");const j$2=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M$2(i.insertBefore(l$4(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s$6 = class s extends b$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j$2(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w$2}};s$6._$litElement$=!0,s$6[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$6});const r$c=globalThis.litElementPolyfillSupport;r$c?.({LitElement:s$6});(globalThis.litElementVersions??=[]).push("4.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$6=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

// TODO: restore this import, right now the ads-modal storybook's
// inclusion of ads-button package triggers an error for the duplicate
// call to customElement() for ads-button.
// import "./ads-button";
let AdsButtonStorybook = class AdsButtonStorybook extends s$6 {
    render() {
        return x$2 `
      <div>
        <ads-button>Primary button</ads-button>
        <ads-button type="secondary">Secondary button</ads-button>
      </div>
      <div>
        <ads-button class="sample1">CSS theme 1</ads-button>
        <ads-button class="sample2">CSS theme 2</ads-button>
      </div>
    `;
    }
};
AdsButtonStorybook.styles = i$8 `
    div {
      padding-bottom: 10px;
    }

    :root {
      --ads-primary-theme: black;
    }

    .sample1 {
      --ads-button-background-color: #bada55;
      --ads-button-text-color: #442200;
    }

    .sample2 {
      --ads-button-background-color: lightblue;
      --ads-button-text-color: firebrick;
      --ads-button-border-color: black;
    }
  `;
AdsButtonStorybook = __decorate([
    t$6("ads-button-storybook")
], AdsButtonStorybook);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$5=globalThis,e$7=t$5.ShadowRoot&&(void 0===t$5.ShadyCSS||t$5.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),o$7=new WeakMap;let n$7 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$7&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$7.set(s,t));}return t}toString(){return this.cssText}};const r$b=t=>new n$7("string"==typeof t?t:t+"",void 0,s$5),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$7(o,t,s$5)},S$3=(s,o)=>{if(e$7)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$5.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$5=e$7?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$b(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$6,getOwnPropertyDescriptor:r$a,getOwnPropertyNames:h$3,getOwnPropertySymbols:o$6,getPrototypeOf:n$6}=Object,a$3=globalThis,c$4=a$3.trustedTypes,l$3=c$4?c$4.emptyScript:"",p$3=a$3.reactiveElementPolyfillSupport,d$3=(t,s)=>t,u$3={toAttribute(t,s){switch(s){case Boolean:t=t?l$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$3=(t,s)=>!i$4(t,s),y$3={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$3};Symbol.metadata??=Symbol("metadata"),a$3.litPropertyMetadata??=new WeakMap;let b$1 = class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$3){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$6(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$a(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$3}static _$Ei(){if(this.hasOwnProperty(d$3("elementProperties")))return;const t=n$6(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$3("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$3("properties"))){const t=this.properties,s=[...h$3(t),...o$6(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$5(s));}else void 0!==s&&i.push(c$5(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$3(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$3).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$3;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$3)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$3("elementProperties")]=new Map,b$1[d$3("finalized")]=new Map,p$3?.({ReactiveElement:b$1}),(a$3.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=globalThis,i$3=t$4.trustedTypes,s$4=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$5="$lit$",h$2=`lit$${(Math.random()+"").slice(9)}$`,o$5="?"+h$2,n$5=`<${o$5}>`,r$9=document,l$2=()=>r$9.createComment(""),c$3=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$2=Array.isArray,u$2=t=>a$2(t)||"function"==typeof t?.[Symbol.iterator],d$2="[ \t\n\f\r]",f$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_$1=/>/g,m$1=RegExp(`>|${d$2}(?:([^\\s"'>=/]+)(${d$2}*=${d$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$2=/'/g,g$1=/"/g,$$1=/^(?:script|style|textarea|title)$/i,y$2=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$1=y$2(1),w$1=Symbol.for("lit-noChange"),T$1=Symbol.for("lit-nothing"),A$1=new WeakMap,E$1=r$9.createTreeWalker(r$9,129);function C$1(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$4?s$4.createHTML(i):i}const P$1=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$2;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$2?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_$1:void 0!==u[2]?($$1.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$1):void 0!==u[3]&&(c=m$1):c===m$1?">"===u[0]?(c=r??f$2,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$1:'"'===u[3]?g$1:p$2):c===g$1||c===p$2?c=m$1:c===v$1||c===_$1?c=f$2:(c=m$1,r=void 0);const x=c===m$1&&t[i+1].startsWith("/>")?" ":"";l+=c===f$2?s+n$5:d>=0?(o.push(a),s.slice(0,d)+e$5+s.slice(d)+h$2+x):s+h$2+(-2===d?i:x);}return [C$1(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};let V$1 = class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P$1(t,s);if(this.el=V.createElement(f,n),E$1.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E$1.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$5)){const i=v[a++],s=r.getAttribute(t).split(h$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k$1:"?"===e[1]?H$1:"@"===e[1]?I$1:R$1}),r.removeAttribute(t);}else t.startsWith(h$2)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$1.test(r.tagName)){const t=r.textContent.split(h$2),s=t.length-1;if(s>0){r.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$2()),E$1.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$2());}}}else if(8===r.nodeType)if(r.data===o$5)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$2,t+1));)d.push({type:7,index:c}),t+=h$2.length-1;}c++;}}static createElement(t,i){const s=r$9.createElement("template");return s.innerHTML=t,s}};function N$1(t,i,s=t,e){if(i===w$1)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$3(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N$1(t,h._$AS(t,i.values),h,e)),i}let S$2 = class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$9).importNode(i,!0);E$1.currentNode=e;let h=E$1.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M$1(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L$1(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E$1.nextNode(),o++);}return E$1.currentNode=r$9,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let M$1 = class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N$1(this,t,i),c$3(t)?t===T$1||null==t||""===t?(this._$AH!==T$1&&this._$AR(),this._$AH=T$1):t!==this._$AH&&t!==w$1&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$2(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T$1&&c$3(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$9.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V$1.createElement(C$1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S$2(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A$1.get(t.strings);return void 0===i&&A$1.set(t.strings,i=new V$1(t)),i}k(t){a$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l$2()),this.S(l$2()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}};let R$1 = class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T$1;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N$1(this,t,i,0),o=!c$3(t)||t!==this._$AH&&t!==w$1,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N$1(this,e[s+n],i,n),r===w$1&&(r=this._$AH[n]),o||=!c$3(r)||r!==this._$AH[n],r===T$1?t=T$1:t!==T$1&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};let k$1 = class k extends R$1{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T$1?void 0:t;}};let H$1 = class H extends R$1{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T$1);}};let I$1 = class I extends R$1{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N$1(this,t,i,0)??T$1)===w$1)return;const s=this._$AH,e=t===T$1&&s!==T$1||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T$1&&(s===T$1||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};let L$1 = class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N$1(this,t);}};const Z$1=t$4.litHtmlPolyfillSupport;Z$1?.(V$1,M$1),(t$4.litHtmlVersions??=[]).push("3.1.2");const j$1=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M$1(i.insertBefore(l$2(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s$3 = class s extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w$1}};s$3._$litElement$=!0,s$3[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$3});const r$8=globalThis.litElementPolyfillSupport;r$8?.({LitElement:s$3});(globalThis.litElementVersions??=[]).push("4.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$4={attribute:!0,type:String,converter:u$3,reflect:!1,hasChanged:f$3},r$7=(t=o$4,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$4(t){return (e,o)=>"object"==typeof o?r$7(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$6(r){return n$4({...r,state:!0,attribute:!1})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$4=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$3(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$4(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$4(n,s,{get(){return o(this)}})}}

// static class that encapsulates shorthands and utilities for emitting events.
let EventHelpers$1 = class EventHelpers {
    // returns event object with default options applied, overridden
    // and extended by additional options the caller passes
    static createEvent(eventName, options = {}) {
        return new CustomEvent(eventName, {
            ...EventHelpers.defaultEventOptions,
            ...options,
        });
    }
};
EventHelpers$1.defaultEventOptions = {
    composed: true,
    bubbles: true,
};

// browser-related utility functions
var UserOperatingSystem$1;
(function (UserOperatingSystem) {
    UserOperatingSystem["MAC"] = "MAC";
    UserOperatingSystem["WINDOWS"] = "WINDOWS";
    UserOperatingSystem["LINUX"] = "LINUX";
    UserOperatingSystem["OTHER"] = "OTHER";
})(UserOperatingSystem$1 || (UserOperatingSystem$1 = {}));
function getUserOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
        return UserOperatingSystem$1.MAC;
    }
    else if (userAgent.includes("win")) {
        return UserOperatingSystem$1.WINDOWS;
    }
    else if (userAgent.includes("linux")) {
        return UserOperatingSystem$1.LINUX;
    }
    else {
        return UserOperatingSystem$1.OTHER;
    }
}

// map from binary exponents to the corresponding binary data volume unit suffix
const _EXP_UNITS = Object.fromEntries(["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"].map((unit, idx) => [idx * 10, unit]));
/**
 * Gets a human-friendly representation of numBytes, expressed in binary units.
 *
 * @param numBytes whole number expressing the count of bytes to represent
 * @return the formatted friendly representation of the number of bytes
 */
function humanBytes(numBytes) {
    switch (numBytes) {
        case -1:
            return "-1 Byte";
        case 0:
            return "0 Bytes";
        case 1:
            return "1 Byte";
    }
    const exp = Math.floor(Math.log2(Math.abs(numBytes)) / 10) * 10.0;
    const precision = exp > 0 ? 1 : 0;
    return `${(numBytes / Math.pow(2, exp)).toFixed(precision)} ${_EXP_UNITS[exp]}`;
}

class AdsTable extends s$3 {
    constructor() {
        super(...arguments);
        // base list of data that this class sorts
        this.rows = [];
        this.noDataText = "No items found";
        this.defaultSortDirection = "ascending";
        this.sortDirection = this.defaultSortDirection;
        // list of selected rows in order of least to most recently added
        this.selectedRowIds = [];
        this.isLoading = false;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("selectedRowIds")) {
            // report selected rows to parent via an event
            this.emitEvent("row-select", { selectedRows: this.selectedRows });
        }
        // if rows change, re-ensure selected rows exist in table
        if (this.rowsDidUpdate(changedProperties)) {
            this.filterSelectedRowsToExistingRows();
        }
    }
    // rather than compare references, determine if 'this.rows' has updated. an update occurs if:
    // - row list is a different size
    // - any elements in the sorted list may have changed place
    rowsDidUpdate(changedProperties) {
        // if the sort properties change, assume the elements have rearranged
        if (changedProperties.has("sortKey") ||
            changedProperties.has("sortDirection")) {
            return true;
        }
        if (!changedProperties.has("rows") || !changedProperties.get("rows")) {
            return false;
        }
        const oldRowIds = changedProperties.get("rows").map((row) => row.id);
        // first check length. if list length changes, rows have changed.
        if (oldRowIds.length !== this.rows.length) {
            return true;
        }
        // otherwise, if they're the same size, compare individual items and ensure they're the same set of items
        const newRowsIdsSet = new Set(this.rows.map((row) => row.id));
        return !oldRowIds.every((id) => newRowsIdsSet.has(id));
    }
    emitEvent(eventName, detail = {}) {
        this.dispatchEvent(EventHelpers$1.createEvent(eventName, detail ? { detail } : {}));
    }
    get visibleColumns() {
        return this.columns.filter(({ isHidden }) => !isHidden);
    }
    get rowsById() {
        return Object.fromEntries(this.rows.map((row) => [row.id, row]));
    }
    get sortedRows() {
        var _a;
        const sortByPrimaryKey = this.getSortFunction(this.sortColumnDataType, this.sortDirection);
        const sortBySecondaryKey = this.getSortFunction(this.secondarySortDataType, ((_a = this.secondarySortDataType) === null || _a === void 0 ? void 0 : _a.defaultSortDirection) || this.sortDirection);
        return this.rows.sort((rowA, rowB) => {
            // sort by primary key: the selected column and direction
            const sortResult = (sortByPrimaryKey === null || sortByPrimaryKey === void 0 ? void 0 : sortByPrimaryKey(rowA.data, rowB.data)) || 0;
            // if sort result on primary sort key is inconclusive, use secondary sort data type
            if (sortResult === 0) {
                return (sortBySecondaryKey === null || sortBySecondaryKey === void 0 ? void 0 : sortBySecondaryKey(rowA.data, rowB.data)) || 0;
            }
            else {
                return sortResult;
            }
        });
    }
    get selectedRows() {
        return this.selectedRowIds.map((id) => this.rowsById[id]).filter((x) => x);
    }
    // handler for when a user clicks on a column header
    onColumnClick(column, defaultSortDirection = this
        .defaultSortDirection) {
        if (this.sortKey === column.key) {
            // toggle the sort direction if the column you are clicking is already sorted
            this.sortDirection =
                this.sortDirection === "ascending" ? "descending" : "ascending";
        }
        else {
            // otherwise, sort by the column you clicked on, and in the default sort direction
            this.sortKey = column.key;
            this.sortDirection =
                column.dataType.defaultSortDirection || defaultSortDirection;
        }
    }
    // a map of column keys to their respective data types so we don't have to call .find everywhere
    get columnKeyToDataType() {
        return Object.fromEntries(this.columns.map((col) => [col.key, col.dataType]));
    }
    // data type of the currently sorted column
    get sortColumnDataType() {
        if (this.sortKey) {
            return this.columnKeyToDataType[this.sortKey];
        }
        else {
            return undefined;
        }
    }
    // data type of the secondary sort column
    get secondarySortDataType() {
        if (this.secondarySortKey) {
            return this.columnKeyToDataType[this.secondarySortKey];
        }
        else {
            return undefined;
        }
    }
    // swaps the parameters of the sort function to reverse the sort direction
    getSortFunction(dataType, sortDirection) {
        if (!dataType) {
            return undefined;
        }
        if (sortDirection === "ascending") {
            // return the original comparison function
            return dataType.compare;
        }
        else if (dataType.compare !== undefined) {
            // swap compare function parameters for descending
            return (a, b) => { var _a; return ((_a = dataType.compare) === null || _a === void 0 ? void 0 : _a.call(dataType, b, a)) || 0; };
        }
        else {
            return undefined;
        }
    }
    renderArrowIcon(columnKey) {
        if (columnKey !== this.sortKey) {
            return x$1 ``;
        }
        else if (this.sortDirection === "ascending") {
            return x$1 `▲`;
        }
        else {
            return x$1 `▼`;
        }
    }
    get selectedRowIdsSet() {
        return new Set(this.selectedRowIds);
    }
    get rowIdsSet() {
        return new Set(this.rows.map((row) => row.id));
    }
    isSelected(row) {
        return this.selectedRowIdsSet.has(row.id);
    }
    toggleRowSelected(rowId) {
        if (this.selectedRowIdsSet.has(rowId)) {
            // row is already selected: filter out clicked id
            this.selectedRowIds = this.selectedRowIds.filter((id) => id !== rowId);
        }
        else {
            // row is not yet selected: append clicked id
            this.selectedRowIds = [...this.selectedRowIds, rowId];
        }
    }
    get lastSelectedRowId() {
        return this.selectedRowIds[this.selectedRowIds.length - 1];
    }
    get indexOfLastSelectedRow() {
        return this.rows.findIndex((row) => row.id === this.lastSelectedRowId);
    }
    // select rows in order from the last selected element up til the given index
    groupRowSelect(rowIndex) {
        const getRowsToAdd = () => {
            // get rows between index of last selected until index of selected row
            if (rowIndex > this.indexOfLastSelectedRow) {
                return this.rows.filter((_, i) => rowIndex >= i && i >= this.indexOfLastSelectedRow);
            }
            else {
                // reverse order of adding rows since clicked index is lower than last selected
                return this.rows
                    .filter((_, i) => this.indexOfLastSelectedRow >= i && i >= rowIndex)
                    .reverse();
            }
        };
        const rowIdsToAdd = getRowsToAdd().map((row) => row.id);
        const rowIdsSet = new Set(rowIdsToAdd);
        // first remove ids you are about to re-add, so they'll be in renewed order
        this.selectedRowIds = this.selectedRowIds.filter((id) => !rowIdsSet.has(id));
        // finally, add the new rows
        this.selectedRowIds = [...this.selectedRowIds, ...rowIdsToAdd];
    }
    onRowClick(event, clickedRow, rowIndex) {
        const userOs = getUserOS();
        // meta (cmd) key for mac, control key for non-mac
        const macHoldingHotKey = userOs === UserOperatingSystem$1.MAC && event.metaKey;
        const nonMacHoldingHotKey = userOs !== UserOperatingSystem$1.MAC && event.ctrlKey;
        // if holding meta on mac or ctrl on windows/linux, toggle individual row selection
        if (macHoldingHotKey || nonMacHoldingHotKey) {
            this.toggleRowSelected(clickedRow.id);
        }
        else if (event.shiftKey) {
            // if holding shift, select rows between this selection and the last selection
            this.groupRowSelect(rowIndex);
        }
        else {
            // clicking a row will select just that row.
            this.selectedRowIds = [clickedRow.id];
        }
        this.filterSelectedRowsToExistingRows();
        // emit event so users can hook into this action
        this.emitEvent("row-click", { row: clickedRow });
    }
    // filter selected down to rows that actually exist in the table
    filterSelectedRowsToExistingRows() {
        this.selectedRowIds = this.selectedRowIds.filter((id) => this.rowIdsSet.has(id));
    }
    onRowDoubleClick(clickedRow) {
        // emit event so users can hook into this event
        this.emitEvent("row-double-click", { row: clickedRow });
    }
    // All keyboard events implemented through this method.
    onKeyDown(event) {
        var _a;
        switch (event.key) {
            case "ArrowUp":
            case "ArrowDown":
                event.preventDefault();
                // shift focus to table element when navigating with arrow keys
                (_a = this.tableElement) === null || _a === void 0 ? void 0 : _a.focus();
                return this.onUpDownArrowKey(event.key);
        }
    }
    onUpDownArrowKey(key) {
        if (this.selectedRowIds.length === 0) {
            // select the first row if none are selected
            this.selectedRowIds = [this.rows[0].id];
            return;
        }
        // offset in the proper direction of the arrow
        const indexOffset = key === "ArrowUp" ? -1 : 1;
        const newSelectedRowIndex = this.constrainIndex(this.indexOfLastSelectedRow + indexOffset);
        const newSelectedRowId = this.rows[newSelectedRowIndex].id;
        this.selectedRowIds = [newSelectedRowId];
    }
    // ensures index values are kept to the closest in-bounds index
    constrainIndex(index) {
        return Math.max(Math.min(index, this.rows.length - 1), 0);
    }
    connectedCallback() {
        super.connectedCallback();
        // attach keyboard listener
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    render() {
        return x$1 `
      <table id="main-table" tabindex="0">
        <thead>
          <tr>
            ${this.visibleColumns.map((column) => x$1 `
                <th
                  @click=${() => this.onColumnClick(column)}
                  class=${column.dataType.compare ? "sortable" : ""}
                  style=${`flex: ${column.flexRatio}`}
                >
                  ${column.label}
                  ${column.dataType.compare
            ? x$1 `<span>${this.renderArrowIcon(column.key)}</span>`
            : ""}
                </th>
              `)}
          </tr>
        </thead>
        <tbody>
          ${!this.isLoading
            ? this.sortedRows.map((row, index) => x$1 `
                  <tr
                    @click=${(e) => this.onRowClick(e, row, index)}
                    @dblclick=${() => this.onRowDoubleClick(row)}
                    class=${this.isSelected(row) ? "row-selected" : ""}
                    data-row-selected=${this.isSelected(row)}
                    data-id=${row.id}
                  >
                    ${this.visibleColumns.map((column) => x$1 `
                        <td style=${`flex: ${column.flexRatio}`}>
                          ${column.dataType.format(row.data)}
                        </td>
                      `)}
                  </tr>
                `)
            : x$1 `
                <tr>
                  <td class="no-data">Loading...</td>
                </tr>
              `}
          ${!this.isLoading && this.sortedRows.length === 0
            ? x$1 `
                <tr>
                  <td class="no-data">${this.noDataText}</td>
                </tr>
              `
            : null}
        </tbody>
      </table>
    `;
    }
}
AdsTable.styles = i$5 `
    table {
      display: flex;
      flex-direction: column;
      user-select: none;
      border-collapse: collapse;
    }

    thead,
    tbody {
      display: flex;
      flex-direction: column;
    }

    thead {
      background: #2a282c;
    }

    tbody {
      scrollbar-gutter: stable;
    }

    tr {
      display: flex;
      width: 100%;
      min-height: 40px;
      flex-shrink: 0;
    }

    tr.row-selected {
      background: #ccddf2;
    }

    td.no-data {
      font-style: italic;
      justify-content: center;
    }

    td,
    th {
      display: flex;
      flex: 1;
      justify-content: flex-start;
      align-items: center;
      padding: 0 12px;
      height: 40px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    th {
      color: white;
    }

    th.sortable {
      cursor: pointer;
    }

    th.sortable:hover {
      background: #525252;
    }

    th span {
      padding-left: 5px;
    }

    td {
      border-bottom: 1px solid #bbbbbb;
    }
  `;
__decorate([
    e$3("#main-table")
], AdsTable.prototype, "tableElement", void 0);
__decorate([
    n$4({ type: Array })
], AdsTable.prototype, "rows", void 0);
__decorate([
    r$6()
], AdsTable.prototype, "sortDirection", void 0);
__decorate([
    r$6()
], AdsTable.prototype, "selectedRowIds", void 0);
__decorate([
    r$6()
], AdsTable.prototype, "isLoading", void 0);
// a simple, generic, out-of-the box implementation of AdsTable
let AdsSimpleTable = class AdsSimpleTable extends AdsTable {
    constructor() {
        var _a;
        super(...arguments);
        // columns are exposed as a parameter like rows, not a class member to implement
        this.columns = [];
        this.secondarySortKey = undefined;
        // sort key is automatically held in state
        this.sortKey = (_a = this.columns[0]) === null || _a === void 0 ? void 0 : _a.key;
    }
    updated(changedProperties) {
        var _a;
        super.updated(changedProperties);
        if (changedProperties.has("columns")) {
            this.sortKey = (_a = this.columns[0]) === null || _a === void 0 ? void 0 : _a.key;
        }
    }
};
__decorate([
    n$4({ type: Array })
], AdsSimpleTable.prototype, "columns", void 0);
__decorate([
    n$4({ type: String })
], AdsSimpleTable.prototype, "secondarySortKey", void 0);
__decorate([
    r$6()
], AdsSimpleTable.prototype, "sortKey", void 0);
AdsSimpleTable = __decorate([
    t$3("ads-simple-table")
], AdsSimpleTable);

// for basic string comparison
const StringDataType = {
    compare: (a, b) => {
        if (a.toLowerCase() === b.toLowerCase()) {
            return 0;
        }
        return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    },
    format(value) {
        return value;
    },
};
// for basic boolean comparison
const BooleanDataType = {
    compare: (a, b) => {
        if (a !== b) {
            return a ? 1 : -1;
        }
        return 0;
    },
    format(value) {
        return value.toString();
    },
    defaultSortDirection: "descending",
};
// for basic number comparison
const NumberDataType = {
    compare: (a, b) => {
        if (a === b) {
            return 0;
        }
        return a > b ? 1 : -1;
    },
    format(value) {
        return value.toFixed(0);
    },
    defaultSortDirection: "descending",
};
// for comparing and formatting numbers that represent bytes
({
    compare: NumberDataType.compare,
    format: humanBytes,
});
// will return a DataType that extends the given DataType to handle undefined values
const UndefinedHelpers = (dataType) => {
    // if a compare function exists, extend it to handle potentially undefined inputs
    return {
        compare: dataType.compare
            ? (a, b) => {
                var _a;
                if (a && b) {
                    return ((_a = dataType.compare) === null || _a === void 0 ? void 0 : _a.call(dataType, a, b)) || 0;
                }
                else if (a === b) {
                    // both are undefined
                    return 0;
                }
                // if a is defined, it's first, if not, b is defined and first
                return a ? 1 : -1;
            }
            : undefined,
        format(value) {
            return value ? dataType.format(value) : "–";
        },
    };
};
// quickly define a wrapper around an interface key, applying sorting / formatting rules from a given type
const FromKey = (targetDataType, key) => ({
    ...targetDataType,
    compare: (a, b) => { var _a; return ((_a = targetDataType.compare) === null || _a === void 0 ? void 0 : _a.call(targetDataType, a[key], b[key])) || 0; },
    format: (item) => targetDataType.format(item[key]),
});

// corresponding columns for each field in PersonData
const columns = [
    {
        key: "firstName",
        label: "First Name",
        dataType: FromKey(StringDataType, "firstName"),
    },
    {
        key: "lastName",
        label: "Last Name",
        dataType: FromKey(StringDataType, "lastName"),
    },
    {
        key: "age",
        label: "Age",
        dataType: FromKey(NumberDataType, "age"),
    },
    {
        key: "hasRegistered",
        label: "Registered?",
        dataType: FromKey(BooleanDataType, "hasRegistered"),
    },
    {
        key: "catsName",
        label: "Cat's Name",
        dataType: FromKey(UndefinedHelpers(StringDataType), "catsName"),
    },
];
// sample data, a list of PersonData instances with IDs
const rows = [
    {
        id: "a",
        data: {
            firstName: "Tyler",
            lastName: "Allgeier",
            age: 22,
            hasRegistered: true,
            catsName: "Cookie",
        },
    },
    {
        id: "b",
        data: {
            firstName: "Drake",
            lastName: "London",
            age: 23,
            hasRegistered: true,
            catsName: "Garbanzo",
        },
    },
    {
        id: "c",
        data: {
            firstName: "Matt",
            lastName: "Bryant",
            age: 50,
            hasRegistered: true,
            catsName: "Boots",
        },
    },
    {
        id: "d",
        data: {
            firstName: "Jeff",
            lastName: "Klein",
            age: 30,
            hasRegistered: false,
        },
    },
];
let AdsTableStorybook = class AdsTableStorybook extends s$3 {
    render() {
        return x$1 `
      <ads-simple-table
        .columns=${columns}
        .rows=${rows}
      >
      </ads-simple-table>
    `;
    }
};
AdsTableStorybook.styles = i$5 ``;
AdsTableStorybook = __decorate([
    t$3("ads-table-storybook")
], AdsTableStorybook);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$2=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$1,defineProperty:e$1,getOwnPropertyDescriptor:r$4,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$1(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$4(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i=t$1.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+h,n$1=`<${o$1}>`,r$3=document,l=()=>r$3.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$3.createTreeWalker(r$3,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$3).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$3,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$3.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r$2=globalThis.litElementPolyfillSupport;r$2?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:!0,attribute:!1})}

// static class that encapsulates shorthands and utilities for emitting events.
class EventHelpers {
    // returns event object with default options applied, overridden
    // and extended by additional options the caller passes
    static createEvent(eventName, options = {}) {
        return new CustomEvent(eventName, {
            ...EventHelpers.defaultEventOptions,
            ...options,
        });
    }
}
EventHelpers.defaultEventOptions = {
    composed: true,
    bubbles: true,
};

// browser-related utility functions
var UserOperatingSystem;
(function (UserOperatingSystem) {
    UserOperatingSystem["MAC"] = "MAC";
    UserOperatingSystem["WINDOWS"] = "WINDOWS";
    UserOperatingSystem["LINUX"] = "LINUX";
    UserOperatingSystem["OTHER"] = "OTHER";
})(UserOperatingSystem || (UserOperatingSystem = {}));

// map from binary exponents to the corresponding binary data volume unit suffix
Object.fromEntries(["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"].map((unit, idx) => [idx * 10, unit]));

var AdsButtonTypes;
(function (AdsButtonTypes) {
    AdsButtonTypes["PRIMARY"] = "primary";
    AdsButtonTypes["SECONDARY"] = "secondary";
    AdsButtonTypes["CANCEL"] = "cancel";
})(AdsButtonTypes || (AdsButtonTypes = {}));
let AdsButton = class AdsButton extends s {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.type = AdsButtonTypes.PRIMARY;
        // will remove borders
        this.flat = false;
        this.heightPx = undefined;
    }
    // maps the button type to its relevant class
    get buttonClass() {
        return (this.buttonTypeClass +
            (this.disabled ? " disabled" : "") +
            (this.flat ? " flat" : ""));
    }
    get buttonTypeClass() {
        switch (this.type) {
            case AdsButtonTypes.PRIMARY:
                return "primary";
            case AdsButtonTypes.SECONDARY:
                return "secondary";
            case AdsButtonTypes.CANCEL:
                return "cancel";
        }
        console.warn("Invalid button type provided to ads-button. Defaulting to primary button styles.");
        return "primary";
    }
    onClick(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    }
    // link to that folder / collection's page
    render() {
        return x `
      <button
        class=${this.buttonClass}
        style=${this.heightPx ? `height: ${this.heightPx}px` : ""}
        @click=${this.onClick}
        aria-disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
    }
};
AdsButton.styles = i$2 `
    :host {
      /* 
      CSS variables:
      // --ads-button-background-color
      // --ads-button-text-color
      // --ads-button-border-color
      */

      /* create local copies falling back on default colors */
      --ads-button-background-color--: var(
        --ads-button-background-color,
        var(--ads-primary-theme, #2e7cb2)
      );
      --ads-button-border-color--: var(
        --ads-button-border-color,
        var(--ads-primary-theme-alt, #194865)
      );
      --ads-button-text-color--: var(
        --ads-button-text-color,
        var(--ads-primary-theme-text, white)
      );
    }

    button {
      cursor: pointer;
      padding: 4px 12px;
      border-radius: 2px;
    }

    button:not(.disabled) {
      transition: filter 0.3s ease-out;
    }

    /* PRIMARY styles */

    button.primary {
      background: var(--ads-button-background-color--);
      color: var(--ads-button-text-color--);
      border: 1px solid var(--ads-button-border-color--);
    }

    button:hover:not(.disabled) {
      filter: brightness(92%);
    }

    /* SECONDARY styles */

    button.secondary {
      background: white;
      color: var(--ads-button-border-color--);
      border: 1px solid var(--ads-button-border-color--);
    }

    /* CANCEL styles */

    button.cancel {
      background: rgba(100%, 75%, 75%);
      color: black;
      border: 1px solid rgba(30%, 15%, 15%);
    }

    /* DISABLED styles */

    button.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* flat styles */

    button.flat {
      border: none;
      background: transparent;
      padding: 8px 10px;
    }
  `;
__decorate([
    n({ type: Boolean, attribute: true, reflect: true })
], AdsButton.prototype, "disabled", void 0);
__decorate([
    n()
], AdsButton.prototype, "type", void 0);
__decorate([
    n()
], AdsButton.prototype, "flat", void 0);
__decorate([
    n()
], AdsButton.prototype, "heightPx", void 0);
AdsButton = __decorate([
    t("ads-button")
], AdsButton);

// This component defines a modal utility for use across the Archiving & Data Services team
// at the Internet Archive.
let AdsModal = class AdsModal extends s {
    constructor() {
        super(...arguments);
        this.confirmOnClose = false;
        this.isOpen = false;
        this.isConfirming = false;
        this.browserNativeConfirm = () => {
            // confirm on navigation away only if modal is open and confirmation flag is set,
            // must be undefined (not false) to disable
            return (this.isOpen && this.confirmOnClose) || undefined;
        };
        this.onClose = () => {
            if (this.confirmOnClose) {
                this.confirmClose();
            }
            else {
                this.closeModal();
            }
        };
        this.confirmClose = () => {
            this.isConfirming = true;
        };
        this.unConfirmClose = () => {
            this.isConfirming = false;
        };
        this.openModal = () => {
            this.isOpen = true;
            // clear state on open
            this.isConfirming = false;
        };
        this.closeModal = () => {
            this.isOpen = false;
            // clear state on close
            this.isConfirming = false;
        };
        this.onModalKeydown = (e) => {
            if (e.key === "Escape") {
                this.onClose();
            }
        };
        this.onButtonKeydown = (e) => {
            if (e.key === "Enter") {
                this.openModal();
            }
        };
        this.renderModalContent = () => x `
    <div
      class="modal"
      id="main-modal"
      @keydown=${this.onModalKeydown}
      tabindex="0"
    >
      <div class="modal-contents">
        ${this.isConfirming
            ? x `
              <div class="confirmation-container">
                <div class="confirmation-header">
                  <slot name="confirmation-header"></slot>
                </div>
                <div class="confirmation-text">
                  <slot name="confirmation-text"></slot>
                </div>
                <div class="confirmation-button-group">
                  <ads-button
                    class="close-button"
                    @click=${this.unConfirmClose}
                    type=${AdsButtonTypes.SECONDARY}
                  >
                    Cancel
                  </ads-button>
                  <ads-button
                    id="confirm-close-button"
                    @click=${this.closeModal}
                  >
                    Close
                  </ads-button>
                </div>
              </div>
            `
            : null}
        <div class="heading-container">
          <slot name="heading"></slot>
          <div class="close-button-container">
            <ads-button
              class="close-button"
              @click=${this.onClose}
              flat=${true}
              type=${AdsButtonTypes.SECONDARY}
            >
              <span class="close-button-x-text"> ⨉ </span>
            </ads-button>
          </div>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  `;
    }
    connectedCallback() {
        super.connectedCallback();
        // this will give users a confirmation prompt before leaving the page
        window.onbeforeunload = this.browserNativeConfirm;
    }
    emitEvent(eventName, detail = {}) {
        this.dispatchEvent(EventHelpers.createEvent(eventName, detail ? { detail } : {}));
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has("isOpen")) {
            this.emitEvent(this.isOpen ? "modal-opened" : "modal-closed");
        }
    }
    render() {
        return x `
      <slot
        name="trigger"
        @click=${this.openModal}
        @keydown=${this.onButtonKeydown}
      ></slot>
      ${this.isOpen ? this.renderModalContent() : x ``}
    `;
    }
};
AdsModal.styles = i$2 `
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1001;
      background: rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    .modal-contents {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      background: white;
      box-shadow: 0 0 12px rgba(136, 132, 125, 0.25);
      border-radius: 4px;
    }

    .modal-body {
    }

    .heading-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 94%;
      padding: 12px 0 12px 32px;
      border-bottom: 1px solid #888888;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
    }

    .close-button-x-text {
      font-size: 20px;
    }

    .confirmation-container {
      position: absolute;
      top: 12px;
      left: 25%;
      padding: 12px;
      border: 1px solid black;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.65) 2px 15px 40px -8px;
    }

    .confirmation-header {
      padding: 20px 0;
    }

    .confirmation-text {
      border-top: 1px solid #aa2222;
      padding: 12px 0;
    }
  `;
__decorate([
    n({ type: Boolean })
], AdsModal.prototype, "confirmOnClose", void 0);
__decorate([
    r()
], AdsModal.prototype, "isOpen", void 0);
__decorate([
    r()
], AdsModal.prototype, "isConfirming", void 0);
AdsModal = __decorate([
    t("ads-modal")
], AdsModal);

let AdsModalStorybook = class AdsModalStorybook extends s {
    render() {
        return x `
      <ads-modal>
        <h1 slot="heading">hi world</h1>
        <p>hi world. this is my modal body</p>
        <button slot="trigger">Basic Modal</button>
      </ads-modal>
      <ads-modal confirmOnClose="true">
        <h1 slot="heading">hi world</h1>
        <p>hi world. this is my modal body</p>
        <button slot="trigger">Modal with close confirmation</button>
      </ads-modal>
    `;
    }
};
AdsModalStorybook.styles = i$2 ``;
AdsModalStorybook = __decorate([
    t("ads-modal-storybook")
], AdsModalStorybook);

export { AdsButtonStorybook, AdsModalStorybook, AdsTableStorybook, SampleComponentStorybook };
//# sourceMappingURL=index.js.map
