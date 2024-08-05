(()=>{var e,t,r,n,o={349:function(e){e.exports=(()=>{"use strict";var e={870:(e,t,r)=>{r.r(t),r.d(t,{createEndpoint:()=>o,expose:()=>l,proxy:()=>v,proxyMarker:()=>n,releaseProxy:()=>a,transfer:()=>y,transferHandlers:()=>c,windowEndpoint:()=>b,wrap:()=>p});const n=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>s(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return l(e,t),[r,[r]]},deserialize:e=>(e.start(),p(e))}],["throw",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener("message",(function r(n){if(!n||!n.data)return;const{id:o,type:a,path:s}=Object.assign({path:[]},n.data),c=(n.data.argumentList||[]).map(w);let p;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),r=s.reduce(((e,t)=>e[t]),e);switch(a){case 0:p=r;break;case 1:t[s.slice(-1)[0]]=w(n.data.value),p=!0;break;case 2:p=r.apply(t,c);break;case 3:p=v(new r(...c));break;case 4:{const{port1:t,port2:r}=new MessageChannel;l(e,r),p=y(t,[t])}break;case 5:p=void 0}}catch(e){p={value:e,[i]:0}}Promise.resolve(p).catch((e=>({value:e,[i]:0}))).then((e=>{const[n,i]=g(e);t.postMessage(Object.assign(Object.assign({},n),{id:o}),i),5===a&&(t.removeEventListener("message",r),u(t))}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e,t){return f(e,[],t)}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e,t=[],r=function(){}){let n=!1;const i=new Proxy(r,{get(r,o){if(d(n),o===a)return()=>_(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{u(e),n=!0}));if("then"===o){if(0===t.length)return{then:()=>i};const r=_(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return r.then.bind(r)}return f(e,[...t,o])},set(r,o,a){d(n);const[i,s]=g(a);return _(e,{type:1,path:[...t,o].map((e=>e.toString())),value:i},s).then(w)},apply(r,a,i){d(n);const s=t[t.length-1];if(s===o)return _(e,{type:4}).then(w);if("bind"===s)return f(e,t.slice(0,-1));const[c,l]=m(i);return _(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},l).then(w)},construct(r,o){d(n);const[a,i]=m(o);return _(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},i).then(w)}});return i}function m(e){const t=e.map(g);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const h=new WeakMap;function y(e,t){return h.set(e,t),e}function v(e){return Object.assign(e,{[n]:!0})}function b(e,t=self,r="*"){return{postMessage:(t,n)=>e.postMessage(t,r,n),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function g(e){for(const[t,r]of c)if(r.canHandle(e)){const[n,o]=r.serialize(e);return[{type:3,name:t,value:n},o]}return[{type:0,value:e},h.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function _(e,t,r){return new Promise((n=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===o&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),r)}))}},162:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDbWorker=void 0;const i=a(r(870));async function s(e){if(e.data&&"eval"===e.data.action){const t=new Int32Array(e.data.notify,0,2),r=new Uint8Array(e.data.notify,8);let n;try{n={ok:await u(e.data.request)}}catch(t){console.error("worker request error",e.data.request,t),n={err:String(t)}}const o=(new TextEncoder).encode(JSON.stringify(n));r.set(o,0),t[1]=o.length,Atomics.notify(t,0)}}function c(e){if("BODY"===e.tagName)return"body";const t=[];for(;e.parentElement&&"BODY"!==e.tagName;){if(e.id){t.unshift("#"+e.id);break}{let r=1,n=e;for(;n.previousElementSibling;)n=n.previousElementSibling,r++;t.unshift(e.tagName.toLowerCase()+":nth-child("+r+")")}e=e.parentElement}return t.join(" > ")}function l(e){return Object.keys(e)}async function u(e){if(console.log("dom vtable request",e),"select"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const r={};for(const n of e.columns)"selector"===n?r.selector=c(t):"parent"===n?t.parentElement&&(r.parent=t.parentElement?c(t.parentElement):null):"idx"===n||(r[n]=t[n]);return r}));if("insert"===e.type){if(!e.value.parent)throw Error('"parent" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const r=t[0];if(!e.value.tagName)throw Error("tagName must be set for inserting");const n=document.createElement(e.value.tagName);for(const t of l(e.value))if(null!==e.value[t]){if("tagName"===t||"parent"===t)continue;if("idx"===t||"selector"===t)throw Error(`${t} can't be set`);n[t]=e.value[t]}return r.appendChild(n),null}if("update"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const r=[];for(const n of l(e.value)){const o=e.value[n];if("parent"!==n){if("idx"!==n&&"selector"!==n&&o!==t[n]){if(console.log("SETTING ",n,t[n],"->",o),"tagName"===n)throw Error("can't change tagName");r.push(n)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const n of r)t[n]=e.value[n];return null}throw Error(`unknown request ${e.type}`)}i.transferHandlers.set("WORKERSQLPROXIES",{canHandle:e=>!1,serialize(e){throw Error("no")},deserialize:e=>(e.start(),i.wrap(e))}),t.createDbWorker=async function(e,t,r,n=1/0){const o=new Worker(t),a=i.wrap(o),c=await a.SplitFileHttpDatabase(r,e,void 0,n);return o.addEventListener("message",s),{db:c,worker:a,configs:e}}},432:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(162),t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(432)})()},44:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{var n=r(349);const o=new URL(r(860),r.b),a=new URL(r(664),r.b);let i;try{i=await(0,n.createDbWorker)([{from:"inline",config:{serverMode:"full",url:"./with_stuff.sqlite",requestChunkSize:4096}}],o.toString(),a.toString())}catch(u){console.log(u)}class s{static async load(){const e=document.getElementById("pType").value,t=document.getElementById("pName").value;let r=document.getElementById("nPitches").value;const n=document.getElementById("sortBy").value,o=document.getElementById("direction").value,a=Object.freeze({pid:"pitcher_id",pn:"pitcher_name",pt:"pitch_type",cmr:"cum_run_value_allowed",amr:"avg_run_value_allowed",nobs:"n_obs",ss:"simple_stuff"});""==r&&(r=0),c();const s=await i.db.query(`select * from results where pitch_type like '${e}' and n_obs > ${r} and pitcher_name like '%${t}%' order by ${a[n]} ${o}`);console.log(`select * from results where pitch_type like '${e}' and n_obs > ${r} and pitcher_name like '%${t}%' order by ${a[n]} ${o}`);for(let e=0;e<s.length;e++)l(s[e])}}function c(){const e=document.getElementById("dataTable");for(;e.rows.length>1;)e.deleteRow(1)}function l(e){const t=document.getElementById("dataTable").insertRow(1);t.insertCell(0).innerHTML=e.pitcher_id,t.insertCell(1).innerHTML=e.pitcher_name,t.insertCell(2).innerHTML=e.pitch_type,t.insertCell(3).innerHTML=e.cum_run_value_allowed,t.insertCell(4).innerHTML=e.avg_run_value_allowed,t.insertCell(5).innerHTML=e.n_obs,t.insertCell(6).innerHTML=e.simple_stuff}window.EntryPoint=s,t()}catch(p){t(p)}}),1)},664:(e,t,r)=>{"use strict";e.exports=r.p+"8a2a3c8efae774018112.wasm"},860:(e,t,r)=>{"use strict";e.exports=r.p+"fc82d4328c52d317f789.js"}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e].call(r.exports,r,r.exports,i),r.exports}i.m=o,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,a,i)=>{var s;i&&((s=[]).d=-1);var c,l,u,p=new Set,d=o.exports,f=new Promise(((e,t)=>{u=t,l=e}));f[t]=d,f[e]=e=>(s&&e(s),p.forEach(e),f.catch((e=>{}))),o.exports=f,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var i=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==s&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](r)))}));return a.r?l:i()}),(e=>(e?u(f[r]=e):l(d),n(s)))),s&&s.d<0&&(s.d=0)},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.b=document.baseURI||self.location.href,i(44)})();