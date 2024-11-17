import{a as O}from"./chunk-OLS57UDG.mjs";import{a as A}from"./chunk-BRW6T4GV.mjs";import{a as E}from"./chunk-XBHFYVA5.mjs";import{d as S}from"./chunk-XKMHTVH5.mjs";import{a as j}from"./chunk-MEUJQT3P.mjs";import{a as x}from"./chunk-KW4VNSJM.mjs";import{b as u,d as F,e as m,g as _}from"./chunk-FLVFHPBB.mjs";var N=m((sr,C)=>{"use strict";C.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)});var q=m((cr,U)=>{"use strict";var I="%[a-f0-9]{2}",w=new RegExp("("+I+")|([^%]+?)","gi"),$=new RegExp("("+I+")+","gi");function h(r,e){try{return[decodeURIComponent(r.join(""))]}catch(a){}if(r.length===1)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],h(t),h(n))}function z(r){try{return decodeURIComponent(r)}catch(n){for(var e=r.match(w)||[],t=1;t<e.length;t++)r=h(e,t).join(""),e=r.match(w)||[];return r}}function K(r){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=$.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(i){var n=z(t[0]);n!==t[0]&&(e[t[0]]=n)}t=$.exec(r)}e["%C2"]="\uFFFD";for(var a=Object.keys(e),s=0;s<a.length;s++){var f=a[s];r=r.replace(new RegExp(f,"g"),e[f])}return r}U.exports=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return K(r)}}});var D=m((ir,T)=>{"use strict";T.exports=(r,e)=>{if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[r];let t=r.indexOf(e);return t===-1?[r]:[r.slice(0,t),r.slice(t+e.length)]}});var B=m((dr,R)=>{"use strict";R.exports=function(r,e){for(var t={},n=Object.keys(r),a=Array.isArray(e),s=0;s<n.length;s++){var f=n[s],i=r[f];(a?e.indexOf(f)!==-1:e(f,i,r))&&(t[f]=i)}return t}});var Q=m(d=>{"use strict";var W=N(),Y=q(),M=D(),Z=B(),k=r=>r==null,y=Symbol("encodeFragmentIdentifier");function v(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{let a=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[c(e,r),"[",a,"]"].join("")]:[...t,[c(e,r),"[",c(a,r),"]=",c(n,r)].join("")]};case"bracket":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[c(e,r),"[]"].join("")]:[...t,[c(e,r),"[]=",c(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[c(e,r),":list="].join("")]:[...t,[c(e,r),":list=",c(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{let e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||r.skipNull&&a===null||r.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[c(t,r),e,c(a,r)].join("")]:[[n,c(a,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,c(e,r)]:[...t,[c(e,r),"=",c(n,r)].join("")]}}function rr(r){let e;switch(r.arrayFormat){case"index":return(t,n,a)=>{if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][e[1]]=n};case"bracket":return(t,n,a)=>{if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"colon-list-separator":return(t,n,a)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"comma":case"separator":return(t,n,a)=>{let s=typeof n=="string"&&n.includes(r.arrayFormatSeparator),f=typeof n=="string"&&!s&&o(n,r).includes(r.arrayFormatSeparator);n=f?o(n,r):n;let i=s||f?n.split(r.arrayFormatSeparator).map(l=>o(l,r)):n===null?n:o(n,r);a[t]=i};case"bracket-separator":return(t,n,a)=>{let s=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!s){a[t]=n&&o(n,r);return}let f=n===null?[]:n.split(r.arrayFormatSeparator).map(i=>o(i,r));if(a[t]===void 0){a[t]=f;return}a[t]=[].concat(a[t],f)};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[].concat(a[t],n)}}}function P(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function c(r,e){return e.encode?e.strict?W(r):encodeURIComponent(r):r}function o(r,e){return e.decode?Y(r):r}function V(r){return Array.isArray(r)?r.sort():typeof r=="object"?V(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function G(r){let e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function er(r){let e="",t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function H(r){r=G(r);let e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function L(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function J(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),P(e.arrayFormatSeparator);let t=rr(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;for(let a of r.split("&")){if(a==="")continue;let[s,f]=M(e.decode?a.replace(/\+/g," "):a,"=");f=f===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?f:o(f,e),t(o(s,e),f,n)}for(let a of Object.keys(n)){let s=n[a];if(typeof s=="object"&&s!==null)for(let f of Object.keys(s))s[f]=L(s[f],e);else n[a]=L(s,e)}return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((a,s)=>{let f=n[s];return f&&typeof f=="object"&&!Array.isArray(f)?a[s]=V(f):a[s]=f,a},Object.create(null))}d.extract=H;d.parse=J;d.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),P(e.arrayFormatSeparator);let t=f=>e.skipNull&&k(r[f])||e.skipEmptyString&&r[f]==="",n=v(e),a={};for(let f of Object.keys(r))t(f)||(a[f]=r[f]);let s=Object.keys(a);return e.sort!==!1&&s.sort(e.sort),s.map(f=>{let i=r[f];return i===void 0?"":i===null?c(f,e):Array.isArray(i)?i.length===0&&e.arrayFormat==="bracket-separator"?c(f,e)+"[]":i.reduce(n(f),[]).join("&"):c(f,e)+"="+c(i,e)}).filter(f=>f.length>0).join("&")};d.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);let[t,n]=M(r,"#");return Object.assign({url:t.split("?")[0]||"",query:J(H(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:o(n,e)}:{})};d.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[y]:!0},e);let t=G(r.url).split("?")[0]||"",n=d.extract(r.url),a=d.parse(n,{sort:!1}),s=Object.assign(a,r.query),f=d.stringify(s,e);f&&(f=`?${f}`);let i=er(r.url);return r.fragmentIdentifier&&(i=`#${e[y]?c(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${t}${f}${i}`};d.pick=(r,e,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[y]:!1},t);let{url:n,query:a,fragmentIdentifier:s}=d.parseUrl(r,t);return d.stringifyUrl({url:n,query:Z(a,e),fragmentIdentifier:s},t)};d.exclude=(r,e,t)=>{let n=Array.isArray(e)?a=>!e.includes(a):(a,s)=>!e(a,s);return d.pick(r,n,t)}});var X=_(Q());import{Fragment as tr,jsx as g,jsxs as nr}from"react/jsx-runtime";function yr(r){let b=u(u({},x.halo.props),r),{control:e,urlString:t}=b,a=F(b,["control","urlString"]);e==="query"&&(a=X.parse(S(t),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let p=a,{lightType:s,envPreset:f,brightness:i,grain:l,toggleAxis:ar}=p,fr=F(p,["lightType","envPreset","brightness","grain","toggleAxis"]);return nr(tr,{children:[g(O,u({},a)),g(j,{lightType:s,brightness:i,envPreset:f}),l!=="off"&&g(A,{}),g(E,u({},a))]})}export{yr as a};
