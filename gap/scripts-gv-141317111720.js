// augment.js JavaScript 1.8.5 methods for all, version: 0.3.1
// using snippets from Mozilla - https://developer.mozilla.org/en/JavaScript
// (c) 2011 Oliver Nightingale
//
//  Released under MIT license.
//
if(!Array.prototype.every)Array.prototype.every=function(d,c){if(this===void 0||this===null)throw new TypeError;var a=Object(this),b=a.length>>>0;if(typeof d!=="function")throw new TypeError;for(var e=0;e<b;e++)if(e in a&&!d.call(c,a[e],e,a))return!1;return!0};
if(!Array.prototype.filter)Array.prototype.filter=function(d,c){if(this===void 0||this===null)throw new TypeError;var a=Object(this),b=a.length>>>0;if(typeof d!=="function")throw new TypeError;for(var e=[],f=0;f<b;f++)if(f in a){var g=a[f];d.call(c,g,f,a)&&e.push(g)}return e};
if(!Array.prototype.forEach)Array.prototype.forEach=function(d,c){if(this===void 0||this===null)throw new TypeError;var a=Object(this),b=a.length>>>0;if(typeof d!=="function")throw new TypeError;for(var e=0;e<b;e++)e in a&&d.call(c,a[e],e,a)};
if(!Array.prototype.indexOf)Array.prototype.indexOf=function(d){if(this===void 0||this===null)throw new TypeError;var c=Object(this),a=c.length>>>0;if(a===0)return-1;var b=0;arguments.length>0&&(b=Number(arguments[1]),b!==b?b=0:b!==0&&b!==Infinity&&b!==-Infinity&&(b=(b>0||-1)*Math.floor(Math.abs(b))));if(b>=a)return-1;for(b=b>=0?b:Math.max(a-Math.abs(b),0);b<a;b++)if(b in c&&c[b]===d)return b;return-1};Array.isArray=Array.isArray||function(d){return Object.prototype.toString.call(d)==="[object Array]"};
if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(d){if(this===void 0||this===null)throw new TypeError;var c=Object(this),a=c.length>>>0;if(a===0)return-1;var b=a;arguments.length>1&&(b=Number(arguments[1]),b!==b?b=0:b!==0&&b!==Infinity&&b!==-Infinity&&(b=(b>0||-1)*Math.floor(Math.abs(b))));for(a=b>=0?Math.min(b,a-1):a-Math.abs(b);a>=0;a--)if(a in c&&c[a]===d)return a;return-1};
if(!Array.prototype.map)Array.prototype.map=function(d,c){if(this===void 0||this===null)throw new TypeError;var a=Object(this),b=a.length>>>0;if(typeof d!=="function")throw new TypeError;for(var e=Array(b),f=0;f<b;f++)f in a&&(e[f]=d.call(c,a[f],f,a));return e};
if(!Array.prototype.reduce)Array.prototype.reduce=function(d){if(this===void 0||this===null)throw new TypeError;var c=Object(this),a=c.length>>>0;if(typeof d!=="function")throw new TypeError;if(a==0&&arguments.length==1)throw new TypeError;var b=0,e;if(arguments.length>=2)e=arguments[1];else{do{if(b in c){e=c[b++];break}if(++b>=a)throw new TypeError;}while(1)}for(;b<a;)b in c&&(e=d.call(void 0,e,c[b],b,c)),b++;return e};
if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(d){if(this===void 0||this===null)throw new TypeError;var c=Object(this),a=c.length>>>0;if(typeof d!=="function")throw new TypeError;if(a===0&&arguments.length===1)throw new TypeError;a-=1;var b;if(arguments.length>=2)b=arguments[1];else{do{if(a in this){b=this[a--];break}if(--a<0)throw new TypeError;}while(1)}for(;a>=0;)a in c&&(b=d.call(void 0,b,c[a],a,c)),a--;return b};
if(!Array.prototype.some)Array.prototype.some=function(d,c){if(this===void 0||this===null)throw new TypeError;var a=Object(this),b=a.length>>>0;if(typeof d!=="function")throw new TypeError;for(var e=0;e<b;e++)if(e in a&&d.call(c,a[e],e,a))return!0;return!1};if(!Date.now)Date.now=function(){return+new Date};if(!Date.prototype.toJSON)Date.prototype.toJSON=Date.prototype.toJSON;
if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var d=function(c,a){a=a||2;return(c+="",c.length===a)?c:d("0"+c,a)};return function(){var c=this.getUTCFullYear();c=(c<0?"-":c>9999?"+":"")+("00000"+Math.abs(c)).slice(0<=c&&c<=9999?-4:-6);c=[c,d(this.getUTCMonth()+1),d(this.getUTCDate())].join("-");var a=[d(this.getUTCHours()),d(this.getUTCMinutes()),d(this.getUTCSeconds())].join(":")+"."+d(this.getUTCMilliseconds(),3);return[c,a].join("T")+"Z"}}();
if(!Function.prototype.bind)Function.prototype.bind=function(d){var c=[].slice,a=c.call(arguments,1),b=this,e=function(){},f=function(){return b.apply(this instanceof e?this:d||{},a.concat(c.call(arguments)))};e.prototype=b.prototype;f.prototype=new e;return f};if(!Object.keys)Object.keys=function(d){if(d!==Object(d))throw new TypeError("Object.keys called on non-object");var c=[],a;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&c.push(a);return c};
if(!String.prototype.trim)String.prototype.trim=function(){var d=/^\s+/,c=/\s+$/;return function(){return this.replace(d,"").replace(c,"")}}();
/*
 RequireJS 1.0.7 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(){function J(a){return N.call(a)==="[object Function]"}function F(a){return N.call(a)==="[object Array]"}function Z(a,c,l){for(var j in c)if(!(j in K)&&(!(j in a)||l))a[j]=c[j];return d}function O(a,c,d){a=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+a);if(d)a.originalError=d;return a}function $(a,c,d){var j,k,s;for(j=0;s=c[j];j++){s=typeof s==="string"?{name:s}:s;k=s.location;if(d&&(!k||k.indexOf("/")!==0&&k.indexOf(":")===-1))k=d+"/"+(k||s.name);a[s.name]={name:s.name,location:k||
s.name,main:(s.main||"main").replace(ea,"").replace(aa,"")}}}function U(a,c){a.holdReady?a.holdReady(c):c?a.readyWait+=1:a.ready(!0)}function fa(a){function c(b,f){var g,m;if(b&&b.charAt(0)===".")if(f){q.pkgs[f]?f=[f]:(f=f.split("/"),f=f.slice(0,f.length-1));g=b=f.concat(b.split("/"));var a;for(m=0;a=g[m];m++)if(a===".")g.splice(m,1),m-=1;else if(a==="..")if(m===1&&(g[2]===".."||g[0]===".."))break;else m>0&&(g.splice(m-1,2),m-=2);m=q.pkgs[g=b[0]];b=b.join("/");m&&b===g+"/"+m.main&&(b=g)}else b.indexOf("./")===
0&&(b=b.substring(2));return b}function l(b,f){var g=b?b.indexOf("!"):-1,m=null,a=f?f.name:null,h=b,e,d;g!==-1&&(m=b.substring(0,g),b=b.substring(g+1,b.length));m&&(m=c(m,a));b&&(m?e=(g=n[m])&&g.normalize?g.normalize(b,function(b){return c(b,a)}):c(b,a):(e=c(b,a),d=F[e],d||(d=i.nameToUrl(b,null,f),F[e]=d)));return{prefix:m,name:e,parentMap:f,url:d,originalName:h,fullName:m?m+"!"+(e||""):e}}function j(){var b=!0,f=q.priorityWait,g,a;if(f){for(a=0;g=f[a];a++)if(!r[g]){b=!1;break}b&&delete q.priorityWait}return b}
function k(b,f,g){return function(){var a=ga.call(arguments,0),c;if(g&&J(c=a[a.length-1]))c.__requireJsBuild=!0;a.push(f);return b.apply(null,a)}}function s(b,f,g){f=k(g||i.require,b,f);Z(f,{nameToUrl:k(i.nameToUrl,b),toUrl:k(i.toUrl,b),defined:k(i.requireDefined,b),specified:k(i.requireSpecified,b),isBrowser:d.isBrowser});return f}function p(b){var f,g,a,c=b.callback,h=b.map,e=h.fullName,ba=b.deps;a=b.listeners;if(c&&J(c)){if(q.catchError.define)try{g=d.execCb(e,b.callback,ba,n[e])}catch(j){f=j}else g=
d.execCb(e,b.callback,ba,n[e]);if(e)(c=b.cjsModule)&&c.exports!==void 0&&c.exports!==n[e]?g=n[e]=b.cjsModule.exports:g===void 0&&b.usingExports?g=n[e]:(n[e]=g,G[e]&&(S[e]=!0))}else e&&(g=n[e]=c,G[e]&&(S[e]=!0));if(w[b.id])delete w[b.id],b.isDone=!0,i.waitCount-=1,i.waitCount===0&&(I=[]);delete L[e];if(d.onResourceLoad&&!b.placeholder)d.onResourceLoad(i,h,b.depArray);if(f)return g=(e?l(e).url:"")||f.fileName||f.sourceURL,a=f.moduleTree,f=O("defineerror",'Error evaluating module "'+e+'" at location "'+
g+'":\n'+f+"\nfileName:"+g+"\nlineNumber: "+(f.lineNumber||f.line),f),f.moduleName=e,f.moduleTree=a,d.onError(f);for(f=0;c=a[f];f++)c(g)}function t(b,f){return function(g){b.depDone[f]||(b.depDone[f]=!0,b.deps[f]=g,b.depCount-=1,b.depCount||p(b))}}function o(b,f){var g=f.map,a=g.fullName,c=g.name,h=M[b]||(M[b]=n[b]),e;if(!f.loading)f.loading=!0,e=function(b){f.callback=function(){return b};p(f);r[f.id]=!0;z()},e.fromText=function(b,f){var g=P;r[b]=!1;i.scriptCount+=1;i.fake[b]=!0;g&&(P=!1);d.exec(f);
g&&(P=!0);i.completeLoad(b)},a in n?e(n[a]):h.load(c,s(g.parentMap,!0,function(b,a){var c=[],e,m;for(e=0;m=b[e];e++)m=l(m,g.parentMap),b[e]=m.fullName,m.prefix||c.push(b[e]);f.moduleDeps=(f.moduleDeps||[]).concat(c);return i.require(b,a)}),e,q)}function x(b){w[b.id]||(w[b.id]=b,I.push(b),i.waitCount+=1)}function C(b){this.listeners.push(b)}function u(b,f){var g=b.fullName,a=b.prefix,c=a?M[a]||(M[a]=n[a]):null,h,e;g&&(h=L[g]);if(!h&&(e=!0,h={id:(a&&!c?N++ +"__p@:":"")+(g||"__r@"+N++),map:b,depCount:0,
depDone:[],depCallbacks:[],deps:[],listeners:[],add:C},A[h.id]=!0,g&&(!a||M[a])))L[g]=h;a&&!c?(g=l(a),a in n&&!n[a]&&(delete n[a],delete Q[g.url]),a=u(g,!0),a.add(function(){var f=l(b.originalName,b.parentMap),f=u(f,!0);h.placeholder=!0;f.add(function(b){h.callback=function(){return b};p(h)})})):e&&f&&(r[h.id]=!1,i.paused.push(h),x(h));return h}function B(b,f,a,c){var b=l(b,c),d=b.name,h=b.fullName,e=u(b),j=e.id,k=e.deps,o;if(h){if(h in n||r[j]===!0||h==="jquery"&&q.jQuery&&q.jQuery!==a().fn.jquery)return;
A[j]=!0;r[j]=!0;h==="jquery"&&a&&V(a())}e.depArray=f;e.callback=a;for(a=0;a<f.length;a++)if(j=f[a])j=l(j,d?b:c),o=j.fullName,f[a]=o,o==="require"?k[a]=s(b):o==="exports"?(k[a]=n[h]={},e.usingExports=!0):o==="module"?e.cjsModule=k[a]={id:d,uri:d?i.nameToUrl(d,null,c):void 0,exports:n[h]}:o in n&&!(o in w)&&(!(h in G)||h in G&&S[o])?k[a]=n[o]:(h in G&&(G[o]=!0,delete n[o],Q[j.url]=!1),e.depCount+=1,e.depCallbacks[a]=t(e,a),u(j,!0).add(e.depCallbacks[a]));e.depCount?x(e):p(e)}function v(b){B.apply(null,
b)}function E(b,f){var a=b.map.fullName,c=b.depArray,d=!0,h,e,i,l;if(b.isDone||!a||!r[a])return l;if(f[a])return b;f[a]=!0;if(c){for(h=0;h<c.length;h++){e=c[h];if(!r[e]&&!ha[e]){d=!1;break}if((i=w[e])&&!i.isDone&&r[e])if(l=E(i,f))break}d||(l=void 0,delete f[a])}return l}function y(b,a){var g=b.map.fullName,c=b.depArray,d,h,e,i;if(!b.isDone&&g&&r[g]){if(g){if(a[g])return n[g];a[g]=!0}if(c)for(d=0;d<c.length;d++)if(h=c[d])if((e=l(h).prefix)&&(i=w[e])&&y(i,a),(e=w[h])&&!e.isDone&&r[h])h=y(e,a),b.depCallbacks[d](h);
return n[g]}}function D(){var b=q.waitSeconds*1E3,b=b&&i.startTime+b<(new Date).getTime(),a="",c=!1,l=!1,k=[],h,e;if(!(i.pausedCount>0)){if(q.priorityWait)if(j())z();else return;for(h in r)if(!(h in K)&&(c=!0,!r[h]))if(b)a+=h+" ";else if(l=!0,h.indexOf("!")===-1){k=[];break}else(e=L[h]&&L[h].moduleDeps)&&k.push.apply(k,e);if(c||i.waitCount){if(b&&a)return b=O("timeout","Load timeout for modules: "+a),b.requireType="timeout",b.requireModules=a,b.contextName=i.contextName,d.onError(b);if(l&&k.length)for(a=
0;h=w[k[a]];a++)if(h=E(h,{})){y(h,{});break}if(!b&&(l||i.scriptCount)){if((H||ca)&&!W)W=setTimeout(function(){W=0;D()},50)}else{if(i.waitCount){for(a=0;h=I[a];a++)y(h,{});i.paused.length&&z();X<5&&(X+=1,D())}X=0;d.checkReadyState()}}}}var i,z,q={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},catchError:{}},R=[],A={require:!0,exports:!0,module:!0},F={},n={},r={},w={},I=[],Q={},N=0,L={},M={},G={},S={},Y=0;V=function(b){if(!i.jQuery&&(b=b||(typeof jQuery!=="undefined"?jQuery:null))&&!(q.jQuery&&b.fn.jquery!==
q.jQuery)&&("holdReady"in b||"readyWait"in b))if(i.jQuery=b,v(["jquery",[],function(){return jQuery}]),i.scriptCount)U(b,!0),i.jQueryIncremented=!0};z=function(){var b,a,c,l,k,h;i.takeGlobalQueue();Y+=1;if(i.scriptCount<=0)i.scriptCount=0;for(;R.length;)if(b=R.shift(),b[0]===null)return d.onError(O("mismatch","Mismatched anonymous define() module: "+b[b.length-1]));else v(b);if(!q.priorityWait||j())for(;i.paused.length;){k=i.paused;i.pausedCount+=k.length;i.paused=[];for(l=0;b=k[l];l++)a=b.map,c=
a.url,h=a.fullName,a.prefix?o(a.prefix,b):!Q[c]&&!r[h]&&(d.load(i,h,c),c.indexOf("empty:")!==0&&(Q[c]=!0));i.startTime=(new Date).getTime();i.pausedCount-=k.length}Y===1&&D();Y-=1};i={contextName:a,config:q,defQueue:R,waiting:w,waitCount:0,specified:A,loaded:r,urlMap:F,urlFetched:Q,scriptCount:0,defined:n,paused:[],pausedCount:0,plugins:M,needFullExec:G,fake:{},fullExec:S,managerCallbacks:L,makeModuleMap:l,normalize:c,configure:function(b){var a,c,d;b.baseUrl&&b.baseUrl.charAt(b.baseUrl.length-1)!==
"/"&&(b.baseUrl+="/");a=q.paths;d=q.pkgs;Z(q,b,!0);if(b.paths){for(c in b.paths)c in K||(a[c]=b.paths[c]);q.paths=a}if((a=b.packagePaths)||b.packages){if(a)for(c in a)c in K||$(d,a[c],c);b.packages&&$(d,b.packages);q.pkgs=d}if(b.priority)c=i.requireWait,i.requireWait=!1,z(),i.require(b.priority),z(),i.requireWait=c,q.priorityWait=b.priority;if(b.deps||b.callback)i.require(b.deps||[],b.callback)},requireDefined:function(b,a){return l(b,a).fullName in n},requireSpecified:function(b,a){return l(b,a).fullName in
A},require:function(b,c,g){if(typeof b==="string"){if(J(c))return d.onError(O("requireargs","Invalid require call"));if(d.get)return d.get(i,b,c);c=l(b,c);b=c.fullName;return!(b in n)?d.onError(O("notloaded","Module name '"+c.fullName+"' has not been loaded yet for context: "+a)):n[b]}(b&&b.length||c)&&B(null,b,c,g);if(!i.requireWait)for(;!i.scriptCount&&i.paused.length;)z();return i.require},takeGlobalQueue:function(){T.length&&(ia.apply(i.defQueue,[i.defQueue.length-1,0].concat(T)),T=[])},completeLoad:function(b){var a;
for(i.takeGlobalQueue();R.length;)if(a=R.shift(),a[0]===null){a[0]=b;break}else if(a[0]===b)break;else v(a),a=null;a?v(a):v([b,[],b==="jquery"&&typeof jQuery!=="undefined"?function(){return jQuery}:null]);d.isAsync&&(i.scriptCount-=1);z();d.isAsync||(i.scriptCount-=1)},toUrl:function(b,a){var c=b.lastIndexOf("."),d=null;c!==-1&&(d=b.substring(c,b.length),b=b.substring(0,c));return i.nameToUrl(b,d,a)},nameToUrl:function(b,a,g){var l,k,h,e,j=i.config,b=c(b,g&&g.fullName);if(d.jsExtRegExp.test(b))a=
b+(a?a:"");else{l=j.paths;k=j.pkgs;g=b.split("/");for(e=g.length;e>0;e--)if(h=g.slice(0,e).join("/"),l[h]){g.splice(0,e,l[h]);break}else if(h=k[h]){b=b===h.name?h.location+"/"+h.main:h.location;g.splice(0,e,b);break}a=g.join("/")+(a||".js");a=(a.charAt(0)==="/"||a.match(/^\w+:/)?"":j.baseUrl)+a}return j.urlArgs?a+((a.indexOf("?")===-1?"?":"&")+j.urlArgs):a}};i.jQueryCheck=V;i.resume=z;return i}function ja(){var a,c,d;if(B&&B.readyState==="interactive")return B;a=document.getElementsByTagName("script");
for(c=a.length-1;c>-1&&(d=a[c]);c--)if(d.readyState==="interactive")return B=d;return null}var ka=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,la=/require\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/^\.\//,aa=/\.js$/,N=Object.prototype.toString,t=Array.prototype,ga=t.slice,ia=t.splice,H=!!(typeof window!=="undefined"&&navigator&&document),ca=!H&&typeof importScripts!=="undefined",ma=H&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,da=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",
K={},C={},T=[],B=null,X=0,P=!1,ha={require:!0,module:!0,exports:!0},d,t={},I,x,u,D,o,v,E,A,y,V,W;if(typeof define==="undefined"){if(typeof requirejs!=="undefined")if(J(requirejs))return;else t=requirejs,requirejs=void 0;typeof require!=="undefined"&&!J(require)&&(t=require,require=void 0);d=requirejs=function(a,c,d){var j="_",k;!F(a)&&typeof a!=="string"&&(k=a,F(c)?(a=c,c=d):a=[]);if(k&&k.context)j=k.context;d=C[j]||(C[j]=fa(j));k&&d.configure(k);return d.require(a,c)};d.config=function(a){return d(a)};
require||(require=d);d.toUrl=function(a){return C._.toUrl(a)};d.version="1.0.7";d.jsExtRegExp=/^\/|:|\?|\.js$/;x=d.s={contexts:C,skipAsync:{}};if(d.isAsync=d.isBrowser=H)if(u=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0])u=x.head=D.parentNode;d.onError=function(a){throw a;};d.load=function(a,c,l){d.resourcesReady(!1);a.scriptCount+=1;d.attach(l,a,c);if(a.jQuery&&!a.jQueryIncremented)U(a.jQuery,!0),a.jQueryIncremented=!0};define=function(a,c,d){var j,k;
typeof a!=="string"&&(d=c,c=a,a=null);F(c)||(d=c,c=[]);!c.length&&J(d)&&d.length&&(d.toString().replace(ka,"").replace(la,function(a,d){c.push(d)}),c=(d.length===1?["require"]:["require","exports","module"]).concat(c));if(P&&(j=I||ja()))a||(a=j.getAttribute("data-requiremodule")),k=C[j.getAttribute("data-requirecontext")];(k?k.defQueue:T).push([a,c,d])};define.amd={multiversion:!0,plugins:!0,jQuery:!0};d.exec=function(a){return eval(a)};d.execCb=function(a,c,d,j){return c.apply(j,d)};d.addScriptToDom=
function(a){I=a;D?u.insertBefore(a,D):u.appendChild(a);I=null};d.onScriptLoad=function(a){var c=a.currentTarget||a.srcElement,l;if(a.type==="load"||c&&ma.test(c.readyState))B=null,a=c.getAttribute("data-requirecontext"),l=c.getAttribute("data-requiremodule"),C[a].completeLoad(l),c.detachEvent&&!da?c.detachEvent("onreadystatechange",d.onScriptLoad):c.removeEventListener("load",d.onScriptLoad,!1)};d.attach=function(a,c,l,j,k,o){var p;if(H)return j=j||d.onScriptLoad,p=c&&c.config&&c.config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml",
"html:script"):document.createElement("script"),p.type=k||c&&c.config.scriptType||"text/javascript",p.charset="utf-8",p.async=!x.skipAsync[a],c&&p.setAttribute("data-requirecontext",c.contextName),p.setAttribute("data-requiremodule",l),p.attachEvent&&!da?(P=!0,o?p.onreadystatechange=function(){if(p.readyState==="loaded")p.onreadystatechange=null,p.attachEvent("onreadystatechange",j),o(p)}:p.attachEvent("onreadystatechange",j)):p.addEventListener("load",j,!1),p.src=a,o||d.addScriptToDom(p),p;else ca&&
(importScripts(a),c.completeLoad(l));return null};if(H){o=document.getElementsByTagName("script");for(A=o.length-1;A>-1&&(v=o[A]);A--){if(!u)u=v.parentNode;if(E=v.getAttribute("data-main")){if(!t.baseUrl)o=E.split("/"),v=o.pop(),o=o.length?o.join("/")+"/":"./",t.baseUrl=o,E=v.replace(aa,"");t.deps=t.deps?t.deps.concat(E):[E];break}}}d.checkReadyState=function(){var a=x.contexts,c;for(c in a)if(!(c in K)&&a[c].waitCount)return;d.resourcesReady(!0)};d.resourcesReady=function(a){var c,l;d.resourcesDone=
a;if(d.resourcesDone)for(l in a=x.contexts,a)if(!(l in K)&&(c=a[l],c.jQueryIncremented))U(c.jQuery,!1),c.jQueryIncremented=!1};d.pageLoaded=function(){if(document.readyState!=="complete")document.readyState="complete"};if(H&&document.addEventListener&&!document.readyState)document.readyState="loading",window.addEventListener("load",d.pageLoaded,!1);d(t);if(d.isAsync&&typeof setTimeout!=="undefined")y=x.contexts[t.context||"_"],y.requireWait=!0,setTimeout(function(){y.requireWait=!1;y.scriptCount||
y.resume();d.checkReadyState()},0)}})();
// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function q(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&q(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&q(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,
h)&&!f--)break;g=!f}}d.pop();return g}var r=this,G=r._,n={},k=Array.prototype,o=Object.prototype,i=k.slice,H=k.unshift,l=o.toString,I=o.hasOwnProperty,w=k.forEach,x=k.map,y=k.reduce,z=k.reduceRight,A=k.filter,B=k.every,C=k.some,p=k.indexOf,D=k.lastIndexOf,o=Array.isArray,J=Object.keys,s=Function.prototype.bind,b=function(a){return new m(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else r._=b;b.VERSION="1.3.1";var j=b.each=
b.forEach=function(a,c,d){if(a!=null)if(w&&a.forEach===w)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===n)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===n)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(x&&a.map===x)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==
null&&(a=[]);if(y&&a.reduce===y)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(z&&a.reduceRight===z)return e&&(c=b.bind(c,e)),f?a.reduceRight(c,d):a.reduceRight(c);var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=
function(a,c,b){var e;E(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(A&&a.filter===A)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(B&&a.every===B)return a.every(c,b);j(a,function(a,g,h){if(!(e=
e&&c.call(b,a,g,h)))return n});return e};var E=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(C&&a.some===C)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return n});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return p&&a.indexOf===p?a.indexOf(c)!=-1:b=E(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});
return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){f==0?b[0]=a:(d=Math.floor(Math.random()*(f+1)),b[f]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,
c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=
b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);
return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1));return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,
d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(p&&a.indexOf===p)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};
var F=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));F.prototype=a.prototype;var b=new F,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,
c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:
a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};
b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=J||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.defaults=function(a){j(i.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return q(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=o||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};
b.isArguments=function(a){return l.call(a)=="[object Arguments]"};if(!b.isArguments(arguments))b.isArguments=function(a){return!(!a||!b.has(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};
b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return I.call(a,b)};b.noConflict=function(){r._=G;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),
function(c){K(c,b[c]=a[c])})};var L=0;b.uniqueId=function(a){var b=L++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/.^/,u=function(a){return a.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||t,function(a,b){return"',_.escape("+
u(b)+"),'"}).replace(d.interpolate||t,function(a,b){return"',"+u(b)+",'"}).replace(d.evaluate||t,function(a,b){return"');"+u(b).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e.call(this,a,b)}};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var v=function(a,c){return c?b(a).chain():a},K=function(a,c){m.prototype[a]=
function(){var a=i.call(arguments);H.call(a,this._wrapped);return v(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return v(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return v(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=
true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
/*
MAPSTRACTION   vtimemap   http://www.mapstraction.com

Copyright (c) 2011 Tom Carden, Steve Coast, Mikel Maron, Andrew Turner, Henri Bergius, Rob Moran, Derek Fowler, Gary Gale
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of the Mapstraction nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function(){var g=null;var c="core";var d;var e=document.getElementsByTagName("script");for(var h=0;h<e.length;h++){var k=e[h].src.replace(/%20/g,"").match(/^(.*?)mxn\.js(\?\(\[?(.*?)\]?\))?$/);if(k!==null){d=k[1];if(k[3]){var b=k[3].split(",[");g=b[0].replace("]","");if(b[1]){c+=","+b[1]}}break}}if(g===null||g=="none"){return}g=g.replace(/ /g,"").split(",");c=c.replace(/ /g,"").split(",");var l='<script type="text/javascript" src="'+d+"mxn.";var m='.js"><\/script>';var a=[];for(h=0;h<c.length;h++){a.push(l+c[h]+m);for(var f=0;f<g.length;f++){a.push(l+g[f]+"."+c[h]+m)}}document.write(a.join(""))})();(function(){var c={};var b=function(i,h,g,e,f){if(!d(i,h,g)){throw"Method "+g+" of object "+h+" is not supported by API "+i+". Are you missing a script tag?"}if(typeof(c[i][h].deferrable)!="undefined"&&c[i][h].deferrable[g]===true){a.deferUntilLoaded.call(e,function(){return c[i][h][g].apply(e,f)})}else{return c[i][h][g].apply(e,f)}};var d=function(g,f,e){if(typeof(c[g])=="undefined"){throw"API "+g+" not loaded. Are you missing a script tag?"}if(typeof(c[g][f])=="undefined"){throw"Object definition "+f+" in API "+g+" not loaded. Are you missing a script tag?"}return typeof(c[g][f][e])=="function"};var a=window.mxn={register:function(f,e){if(!c.hasOwnProperty(f)){c[f]={}}a.util.merge(c[f],e)},addProxyMethods:function(g,j,f){for(var e=0;e<j.length;e++){var h=j[e];if(f){g.prototype[h]=new Function("return this.invoker.go('"+h+"', arguments, { overrideApi: true } );")}else{g.prototype[h]=new Function("return this.invoker.go('"+h+"', arguments);")}}},checkLoad:function(f){if(this.loaded[this.api]===false){var e=this;this.onload[this.api].push(function(){f.callee.apply(e,f)});return true}return false},deferUntilLoaded:function(e){if(this.loaded[this.api]===false){var f=this;this.onload[this.api].push(e)}else{e.call(this)}},addEvents:function(f,h){for(var e=0;e<h.length;e++){var g=h[e];if(g in f){throw"Event or method "+g+" already declared."}f[g]=new a.Event(g,f)}}};a.Event=function(g,f){var e=[];if(!g){throw"Event name must be provided"}this.addHandler=function(i,h){e.push({context:h,handler:i})};this.removeHandler=function(k,h){for(var j=0;j<e.length;j++){if(e[j].handler==k&&e[j].context==h){e.splice(j,1)}}};this.removeAllHandlers=function(){e=[]};this.fire=function(k){var h=[g,f,k];for(var j=0;j<e.length;j++){e[j].handler.apply(e[j].context,h)}}};a.Invoker=function(g,h,k){var j=g;var f=h;var e=k;var i={overrideApi:false,context:null,fallback:null};this.go=function(o,m,l){m=typeof(m)!="undefined"?Array.prototype.slice.apply(m):[];if(typeof(l)=="undefined"){l=i}var n;if(l.overrideApi){n=m.shift()}else{n=e.apply(j)}if(typeof(n)!="string"){throw"API ID not available."}if(typeof(l.context)!="undefined"&&l.context!==null){m.push(l.context)}if(typeof(l.fallback)=="function"&&!d(n,f,o)){return l.fallback.apply(j,m)}else{return b(n,f,o,j,m)}}};a.util={merge:function(g,e){for(var f in e){if(e.hasOwnProperty(f)){if(!g.hasOwnProperty(f)||typeof(g[f])!=="object"||typeof(e[f])!=="object"){g[f]=e[f]}else{a.util.merge(g[f],e[f])}}}},$m:function(){var g=[];for(var f=0;f<arguments.length;f++){var e=arguments[f];if(typeof(e)=="string"){e=document.getElementById(e)}if(arguments.length==1){return e}g.push(e)}return g},loadScript:function(i,j){var f=document.createElement("script");f.type="text/javascript";f.src=i;if(j){if(f.addEventListener){f.addEventListener("load",j,true)}else{if(f.attachEvent){var e=false;f.attachEvent("onreadystatechange",function(){if(!e&&document.readyState==="complete"){e=true;j()}})}}}var g=document.getElementsByTagName("head")[0];g.appendChild(f);return},convertLatLonXY_Yahoo:function(e,l){var h=1<<(26-l);var j=h/360;var k=h/(2*Math.PI);var g=new YCoordPoint(h/2,h/2);var i=new YCoordPoint();i.x=Math.floor(g.x+e.lon*j);var f=Math.sin(e.lat*Math.PI/180);i.y=Math.floor(g.y+0.5*Math.log((1+f)/(1-f))*-k);return i},loadStyle:function(e){var f=document.createElement("link");f.type="text/css";f.rel="stylesheet";f.href=e;document.getElementsByTagName("head")[0].appendChild(f);return},getStyle:function(e,g){var f;if(e.currentStyle){f=e.currentStyle[g]}else{if(window.getComputedStyle){f=window.getComputedStyle(e,"").getPropertyValue(g)}}return f},lonToMetres:function(f,e){return f*(111200*Math.cos(e*(Math.PI/180)))},metresToLon:function(e,f){return e/(111200*Math.cos(f*(Math.PI/180)))},KMToMiles:function(e){return e/1.609344},milesToKM:function(e){return e*1.609344},getDegreesFromGoogleZoomLevel:function(f,e){return(360*f)/(Math.pow(2,e+8))},getGoogleZoomLevelFromDegrees:function(f,e){return a.util.logN((360*f)/e,2)-8},logN:function(e,f){return Math.log(e)/Math.log(f)},getAvailableProviders:function(){var f=[];for(var e in c){if(c.hasOwnProperty(e)){f.push(e)}}return f},stringFormat:function(g){var f=/\{\d+\}/g;var e=Array.prototype.slice.apply(arguments);e.shift();return g.replace(f,function(i){var h=i.slice(1,-1);return e[h]})},traverse:function(h){var f=Array.prototype.slice.apply(arguments);f.shift();var e=h;while(typeof(e)!="undefined"&&e!==null&&f.length>0){var g=f.shift();e=g(e)}}};a.util.Color=function(){if(arguments.length==3){this.red=arguments[0];this.green=arguments[1];this.blue=arguments[2]}else{if(arguments.length==1){this.setHexColor(arguments[0])}}};a.util.Color.prototype.reHex=/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;a.util.Color.prototype.setHexColor=function(f){var e=f.match(this.reHex);if(e){f=e[1]}else{throw"Invalid HEX color format, expected #000, 000, #000000 or 000000"}if(f.length==3){f=f.replace(/\w/g,function(g){return g.concat(g)})}this.red=parseInt(f.substr(0,2),16);this.green=parseInt(f.substr(2,2),16);this.blue=parseInt(f.substr(4,2),16)};a.util.Color.prototype.getHexColor=function(){var f=this.blue|(this.green<<8)|(this.red<<16);var e=f.toString(16).toUpperCase();if(e.length<6){e="0"+e}return"#"+e}})();/*
MAPSTRACTION   vtimemap   http://www.mapstraction.com

Copyright (c) 2011 Tom Carden, Steve Coast, Mikel Maron, Andrew Turner, Henri Bergius, Rob Moran, Derek Fowler, Gary Gale
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of the Mapstraction nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function(){var $m=mxn.util.$m;var init=function(){this.invoker.go("init",[this.currentElement,this.api]);this.applyOptions()};var Mapstraction=mxn.Mapstraction=function(element,api,debug){if(!api){api=mxn.util.getAvailableProviders()[0]}this.api=api;this.maps={};this.currentElement=$m(element);this.eventListeners=[];this.markers=[];this.polylines=[];this.images=[];this.controls=[];this.loaded={};this.onload={};this.onload[api]=[];this.element=element;this.options={enableScrollWheelZoom:false,enableDragging:true,enableMultipleBubbles:false};this.addControlsArgs={};this.invoker=new mxn.Invoker(this,"Mapstraction",function(){return this.api});mxn.addEvents(this,["load","click","endPan","changeZoom","markerAdded","markerRemoved","polylineAdded","polylineRemoved","openInfoBubble","closeInfoBubble"]);init.apply(this)};Mapstraction.ROAD=1;Mapstraction.SATELLITE=2;Mapstraction.HYBRID=3;Mapstraction.PHYSICAL=4;mxn.addProxyMethods(Mapstraction,["addLargeControls","addMapTypeControls","addOverlay","addSmallControls","applyOptions","getBounds","getCenter","getMapType","getPixelRatio","getZoom","getZoomLevelForBoundingBox","mousePosition","resizeTo","setBounds","setCenter","setCenterAndZoom","setMapType","setZoom","toggleTileLayer","openBubble","closeBubble"]);Mapstraction.prototype.setOptions=function(oOpts){mxn.util.merge(this.options,oOpts);this.applyOptions()};Mapstraction.prototype.setOption=function(sOptName,vVal){this.options[sOptName]=vVal;this.applyOptions()};Mapstraction.prototype.enableScrollWheelZoom=function(){this.setOption("enableScrollWheelZoom",true)};Mapstraction.prototype.dragging=function(on){this.setOption("enableDragging",on)};Mapstraction.prototype.swap=function(element,api){if(this.api===api){return}var center=this.getCenter();var zoom=this.getZoom();this.currentElement.style.visibility="hidden";this.currentElement.style.display="none";this.currentElement=$m(element);this.currentElement.style.visibility="visible";this.currentElement.style.display="block";this.api=api;this.onload[api]=[];if(this.maps[this.api]===undefined){init.apply(this);for(var i=0;i<this.markers.length;i++){this.addMarker(this.markers[i],true)}for(var j=0;j<this.polylines.length;j++){this.addPolyline(this.polylines[j],true)}this.setCenterAndZoom(center,zoom)}else{this.setCenterAndZoom(center,zoom)}this.addControls(this.addControlsArgs)};Mapstraction.prototype.isLoaded=function(api){if(api===null){api=this.api}return this.loaded[api]};Mapstraction.prototype.setDebug=function(debug){if(debug!==null){this.debug=debug}return this.debug};Mapstraction.prototype.setDefer=function(deferred){this.loaded[this.api]=!deferred};Mapstraction.prototype.runDeferred=function(){while(this.onload[this.api].length>0){this.onload[this.api].shift().apply(this)}};Mapstraction.prototype.clickHandler=function(lat,lon,me){this.callEventListeners("click",{location:new LatLonPoint(lat,lon)})};Mapstraction.prototype.moveendHandler=function(me){this.callEventListeners("moveend",{})};Mapstraction.prototype.addEventListener=function(){var listener={};listener.event_type=arguments[0];listener.callback_function=arguments[1];if(arguments.length==3){listener.back_compat_mode=false;listener.callback_object=arguments[2]}else{listener.back_compat_mode=true;listener.callback_object=null}this.eventListeners.push(listener)};Mapstraction.prototype.callEventListeners=function(sEventType,oEventArgs){oEventArgs.source=this;for(var i=0;i<this.eventListeners.length;i++){var evLi=this.eventListeners[i];if(evLi.event_type==sEventType){if(evLi.back_compat_mode){if(evLi.event_type=="click"){evLi.callback_function(oEventArgs.location)}else{evLi.callback_function()}}else{var scope=evLi.callback_object||this;evLi.callback_function.call(scope,oEventArgs)}}}};Mapstraction.prototype.addControls=function(args){this.addControlsArgs=args;this.invoker.go("addControls",arguments)};Mapstraction.prototype.addMarker=function(marker,old){marker.mapstraction=this;marker.api=this.api;marker.location.api=this.api;marker.map=this.maps[this.api];var propMarker=this.invoker.go("addMarker",arguments);marker.setChild(propMarker);if(!old){this.markers.push(marker)}this.markerAdded.fire({marker:marker})};Mapstraction.prototype.addMarkerWithData=function(marker,data){marker.addData(data);this.addMarker(marker)};Mapstraction.prototype.addPolylineWithData=function(polyline,data){polyline.addData(data);this.addPolyline(polyline)};Mapstraction.prototype.removeMarker=function(marker){var current_marker;for(var i=0;i<this.markers.length;i++){current_marker=this.markers[i];if(marker==current_marker){this.invoker.go("removeMarker",arguments);marker.onmap=false;this.markers.splice(i,1);this.markerRemoved.fire({marker:marker});break}}};Mapstraction.prototype.removeAllMarkers=function(){var current_marker;while(this.markers.length>0){current_marker=this.markers.pop();this.invoker.go("removeMarker",[current_marker])}};Mapstraction.prototype.declutterMarkers=function(opts){if(this.loaded[this.api]===false){var me=this;this.onload[this.api].push(function(){me.declutterMarkers(opts)});return}var map=this.maps[this.api];switch(this.api){case"multimap":map.declutterGroup(opts.groupName);break;case"  dummy":break;default:if(this.debug){alert(this.api+" not supported by Mapstraction.declutterMarkers")}}};Mapstraction.prototype.addPolyline=function(polyline,old){polyline.api=this.api;polyline.map=this.maps[this.api];var propPoly=this.invoker.go("addPolyline",arguments);polyline.setChild(propPoly);if(!old){this.polylines.push(polyline)}this.polylineAdded.fire({polyline:polyline})};var removePolylineImpl=function(polyline){this.invoker.go("removePolyline",arguments);polyline.onmap=false;this.polylineRemoved.fire({polyline:polyline})};Mapstraction.prototype.removePolyline=function(polyline){var current_polyline;for(var i=0;i<this.polylines.length;i++){current_polyline=this.polylines[i];if(polyline==current_polyline){this.polylines.splice(i,1);removePolylineImpl.call(this,polyline);break}}};Mapstraction.prototype.removeAllPolylines=function(){var current_polyline;while(this.polylines.length>0){current_polyline=this.polylines.pop();removePolylineImpl.call(this,current_polyline)}};Mapstraction.prototype.autoCenterAndZoom=function(){var lat_max=-90;var lat_min=90;var lon_max=-180;var lon_min=180;var lat,lon;var checkMinMax=function(){if(lat>lat_max){lat_max=lat}if(lat<lat_min){lat_min=lat}if(lon>lon_max){lon_max=lon}if(lon<lon_min){lon_min=lon}};for(var i=0;i<this.markers.length;i++){lat=this.markers[i].location.lat;lon=this.markers[i].location.lon;checkMinMax()}for(i=0;i<this.polylines.length;i++){for(var j=0;j<this.polylines[i].points.length;j++){lat=this.polylines[i].points[j].lat;lon=this.polylines[i].points[j].lon;checkMinMax()}}this.setBounds(new BoundingBox(lat_min,lon_min,lat_max,lon_max))};Mapstraction.prototype.centerAndZoomOnPoints=function(points){var bounds=new BoundingBox(points[0].lat,points[0].lon,points[0].lat,points[0].lon);for(var i=1,len=points.length;i<len;i++){bounds.extend(points[i])}this.setBounds(bounds)};Mapstraction.prototype.visibleCenterAndZoom=function(){var lat_max=-90;var lat_min=90;var lon_max=-180;var lon_min=180;var lat,lon;var checkMinMax=function(){if(lat>lat_max){lat_max=lat}if(lat<lat_min){lat_min=lat}if(lon>lon_max){lon_max=lon}if(lon<lon_min){lon_min=lon}};for(var i=0;i<this.markers.length;i++){if(this.markers[i].getAttribute("visible")){lat=this.markers[i].location.lat;lon=this.markers[i].location.lon;checkMinMax()}}for(i=0;i<this.polylines.length;i++){if(this.polylines[i].getAttribute("visible")){for(j=0;j<this.polylines[i].points.length;j++){lat=this.polylines[i].points[j].lat;lon=this.polylines[i].points[j].lon;checkMinMax()}}}this.setBounds(new BoundingBox(lat_min,lon_min,lat_max,lon_max))};Mapstraction.prototype.polylineCenterAndZoom=function(radius){var lat_max=-90;var lat_min=90;var lon_max=-180;var lon_min=180;for(var i=0;i<mapstraction.polylines.length;i++){for(var j=0;j<mapstraction.polylines[i].points.length;j++){lat=mapstraction.polylines[i].points[j].lat;lon=mapstraction.polylines[i].points[j].lon;latConv=lonConv=radius;if(radius>0){latConv=(radius/mapstraction.polylines[i].points[j].latConv());lonConv=(radius/mapstraction.polylines[i].points[j].lonConv())}if((lat+latConv)>lat_max){lat_max=(lat+latConv)}if((lat-latConv)<lat_min){lat_min=(lat-latConv)}if((lon+lonConv)>lon_max){lon_max=(lon+lonConv)}if((lon-lonConv)<lon_min){lon_min=(lon-lonConv)}}}this.setBounds(new BoundingBox(lat_min,lon_min,lat_max,lon_max))};Mapstraction.prototype.addImageOverlay=function(id,src,opacity,west,south,east,north){var b=document.createElement("img");b.style.display="block";b.setAttribute("id",id);b.setAttribute("src",src);b.style.position="absolute";b.style.zIndex=1;b.setAttribute("west",west);b.setAttribute("south",south);b.setAttribute("east",east);b.setAttribute("north",north);var oContext={imgElm:b};this.invoker.go("addImageOverlay",arguments,{context:oContext})};Mapstraction.prototype.setImageOpacity=function(id,opacity){if(opacity<0){opacity=0}if(opacity>=100){opacity=100}var c=opacity/100;var d=document.getElementById(id);if(typeof(d.style.filter)=="string"){d.style.filter="alpha(opacity:"+opacity+")"}if(typeof(d.style.KHTMLOpacity)=="string"){d.style.KHTMLOpacity=c}if(typeof(d.style.MozOpacity)=="string"){d.style.MozOpacity=c}if(typeof(d.style.opacity)=="string"){d.style.opacity=c}};Mapstraction.prototype.setImagePosition=function(id){var imgElement=document.getElementById(id);var oContext={latLng:{top:imgElement.getAttribute("north"),left:imgElement.getAttribute("west"),bottom:imgElement.getAttribute("south"),right:imgElement.getAttribute("east")},pixels:{top:0,right:0,bottom:0,left:0}};this.invoker.go("setImagePosition",arguments,{context:oContext});imgElement.style.top=oContext.pixels.top.toString()+"px";imgElement.style.left=oContext.pixels.left.toString()+"px";imgElement.style.width=(oContext.pixels.right-oContext.pixels.left).toString()+"px";imgElement.style.height=(oContext.pixels.bottom-oContext.pixels.top).toString()+"px"};Mapstraction.prototype.addJSON=function(json){var features;if(typeof(json)=="string"){features=eval("("+json+")")}else{features=json}features=features.features;var map=this.maps[this.api];var html="";var item;var polyline;var marker;var markers=[];if(features.type=="FeatureCollection"){this.addJSON(features.features)}for(var i=0;i<features.length;i++){item=features[i];switch(item.geometry.type){case"Point":html="<strong>"+item.title+"</strong><p>"+item.description+"</p>";marker=new Marker(new LatLonPoint(item.geometry.coordinates[1],item.geometry.coordinates[0]));markers.push(marker);this.addMarkerWithData(marker,{infoBubble:html,label:item.title,date:'new Date("'+item.date+'")',iconShadow:item.icon_shadow,marker:item.id,iconShadowSize:item.icon_shadow_size,icon:item.icon,iconSize:item.icon_size,category:item.source_id,draggable:false,hover:false});break;case"Polygon":var points=[];polyline=new Polyline(points);mapstraction.addPolylineWithData(polyline,{fillColor:item.poly_color,date:'new Date("'+item.date+'")',category:item.source_id,width:item.line_width,opacity:item.line_opacity,color:item.line_color,polygon:true});markers.push(polyline);break;default:}}return markers};Mapstraction.prototype.addTileLayer=function(tile_url,opacity,copyright_text,min_zoom,max_zoom,map_type){if(!tile_url){return}this.tileLayers=this.tileLayers||[];opacity=opacity||0.6;copyright_text=copyright_text||"Mapstraction";min_zoom=min_zoom||1;max_zoom=max_zoom||18;map_type=map_type||false;return this.invoker.go("addTileLayer",[tile_url,opacity,copyright_text,min_zoom,max_zoom,map_type])};Mapstraction.prototype.addFilter=function(field,operator,value){if(!this.filters){this.filters=[]}this.filters.push([field,operator,value])};Mapstraction.prototype.removeFilter=function(field,operator,value){if(!this.filters){return}var del;for(var f=0;f<this.filters.length;f++){if(this.filters[f][0]==field&&(!operator||(this.filters[f][1]==operator&&this.filters[f][2]==value))){this.filters.splice(f,1);f--}}};Mapstraction.prototype.toggleFilter=function(field,operator,value){if(!this.filters){this.filters=[]}var found=false;for(var f=0;f<this.filters.length;f++){if(this.filters[f][0]==field&&this.filters[f][1]==operator&&this.filters[f][2]==value){this.filters.splice(f,1);f--;found=true}}if(!found){this.addFilter(field,operator,value)}};Mapstraction.prototype.removeAllFilters=function(){this.filters=[]};Mapstraction.prototype.doFilter=function(showCallback,hideCallback){var map=this.maps[this.api];var visibleCount=0;var f;if(this.filters){switch(this.api){case"multimap":var mmfilters=[];for(f=0;f<this.filters.length;f++){mmfilters.push(new MMSearchFilter(this.filters[f][0],this.filters[f][1],this.filters[f][2]))}map.setMarkerFilters(mmfilters);map.redrawMap();break;case"  dummy":break;default:var vis;for(var m=0;m<this.markers.length;m++){vis=true;for(f=0;f<this.filters.length;f++){if(!this.applyFilter(this.markers[m],this.filters[f])){vis=false}}if(vis){visibleCount++;if(showCallback){showCallback(this.markers[m])}else{this.markers[m].show()}}else{if(hideCallback){hideCallback(this.markers[m])}else{this.markers[m].hide()}}this.markers[m].setAttribute("visible",vis)}break}}return visibleCount};Mapstraction.prototype.applyFilter=function(o,f){var vis=true;switch(f[1]){case"ge":if(o.getAttribute(f[0])<f[2]){vis=false}break;case"le":if(o.getAttribute(f[0])>f[2]){vis=false}break;case"eq":if(o.getAttribute(f[0])==f[2]){vis=false}break}return vis};Mapstraction.prototype.getAttributeExtremes=function(field){var min;var max;for(var m=0;m<this.markers.length;m++){if(!min||min>this.markers[m].getAttribute(field)){min=this.markers[m].getAttribute(field)}if(!max||max<this.markers[m].getAttribute(field)){max=this.markers[m].getAttribute(field)}}for(var p=0;m<this.polylines.length;m++){if(!min||min>this.polylines[p].getAttribute(field)){min=this.polylines[p].getAttribute(field)}if(!max||max<this.polylines[p].getAttribute(field)){max=this.polylines[p].getAttribute(field)}}return[min,max]};Mapstraction.prototype.getMap=function(){return this.maps[this.api]};var LatLonPoint=mxn.LatLonPoint=function(lat,lon){this.lat=lat;this.lon=lon;this.lng=lon;this.invoker=new mxn.Invoker(this,"LatLonPoint")};mxn.addProxyMethods(LatLonPoint,["fromProprietary","toProprietary"],true);LatLonPoint.prototype.toString=function(){return this.lat+", "+this.lon};LatLonPoint.prototype.distance=function(otherPoint){var rads=Math.PI/180;var diffLat=(this.lat-otherPoint.lat)*rads;var diffLon=(this.lon-otherPoint.lon)*rads;var a=Math.sin(diffLat/2)*Math.sin(diffLat/2)+Math.cos(this.lat*rads)*Math.cos(otherPoint.lat*rads)*Math.sin(diffLon/2)*Math.sin(diffLon/2);return 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))*6371};LatLonPoint.prototype.equals=function(otherPoint){return this.lat==otherPoint.lat&&this.lon==otherPoint.lon};LatLonPoint.prototype.latConv=function(){return this.distance(new LatLonPoint(this.lat+0.1,this.lon))*10};LatLonPoint.prototype.lonConv=function(){return this.distance(new LatLonPoint(this.lat,this.lon+0.1))*10};var BoundingBox=mxn.BoundingBox=function(swlat,swlon,nelat,nelon){this.sw=new LatLonPoint(swlat,swlon);this.ne=new LatLonPoint(nelat,nelon)};BoundingBox.prototype.getSouthWest=function(){return this.sw};BoundingBox.prototype.getNorthEast=function(){return this.ne};BoundingBox.prototype.isEmpty=function(){var box=this;return(box.ne.lat==box.sw.lat&&box.ne.lon==box.sw.lon)||(isNaN(box.ne.lat)||isNaN(box.sw.lat))};BoundingBox.prototype.contains=function(point){return point.lat>=this.sw.lat&&point.lat<=this.ne.lat&&point.lon>=this.sw.lon&&point.lon<=this.ne.lon};BoundingBox.prototype.toSpan=function(){return new LatLonPoint(Math.abs(this.sw.lat-this.ne.lat),Math.abs(this.sw.lon-this.ne.lon))};BoundingBox.prototype.extend=function(point){var box=this;if(box.sw.lat===undefined||box.sw.lat>point.lat){box.sw.lat=point.lat}if(box.sw.lon===undefined||box.sw.lon>point.lon){box.sw.lon=point.lon}if(box.ne.lat===undefined||box.ne.lat<point.lat){box.ne.lat=point.lat}if(box.ne.lon===undefined||box.ne.lon<point.lon){box.ne.lon=point.lon}};BoundingBox.prototype.getCenter=function(){var box=this,ne=box.getNorthEast(),sw=box.getSouthWest();return new LatLonPoint(sw.lat+(ne.lat-sw.lat)/2,sw.lon+(ne.lon-sw.lon)/2)};var Marker=mxn.Marker=function(point){this.api=null;this.location=point;this.onmap=false;this.proprietary_marker=false;this.attributes=[];this.invoker=new mxn.Invoker(this,"Marker",function(){return this.api});mxn.addEvents(this,["openInfoBubble","closeInfoBubble","click"])};mxn.addProxyMethods(Marker,["fromProprietary","hide","isHidden","openBubble","closeBubble","show","toProprietary","update"]);Marker.prototype.setChild=function(some_proprietary_marker){this.proprietary_marker=some_proprietary_marker;some_proprietary_marker.mapstraction_marker=this;this.onmap=true};Marker.prototype.setLabel=function(labelText){this.labelText=labelText};Marker.prototype.addData=function(options){for(var sOptKey in options){if(options.hasOwnProperty(sOptKey)){switch(sOptKey){case"label":this.setLabel(options.label);break;case"infoBubble":this.setInfoBubble(options.infoBubble);break;case"icon":if(options.iconSize&&options.iconAnchor){this.setIcon(options.icon,options.iconSize,options.iconAnchor)}else{if(options.iconSize){this.setIcon(options.icon,options.iconSize)}else{this.setIcon(options.icon)}}break;case"iconShadow":if(options.iconShadowSize){this.setShadowIcon(options.iconShadow,[options.iconShadowSize[0],options.iconShadowSize[1]])}else{this.setIcon(options.iconShadow)}break;case"infoDiv":this.setInfoDiv(options.infoDiv[0],options.infoDiv[1]);break;case"draggable":this.setDraggable(options.draggable);break;case"hover":this.setHover(options.hover);this.setHoverIcon(options.hoverIcon);break;case"hoverIcon":this.setHoverIcon(options.hoverIcon);break;case"openBubble":this.openBubble();break;case"closeBubble":this.closeBubble();break;case"groupName":this.setGroupName(options.groupName);break;default:this.setAttribute(sOptKey,options[sOptKey]);break}}}};Marker.prototype.setInfoBubble=function(infoBubble){this.infoBubble=infoBubble};Marker.prototype.setInfoDiv=function(infoDiv,div){this.infoDiv=infoDiv;this.div=div};Marker.prototype.setIcon=function(iconUrl,iconSize,iconAnchor){this.iconUrl=iconUrl;if(iconSize){this.iconSize=iconSize}if(iconAnchor){this.iconAnchor=iconAnchor}};Marker.prototype.setIconSize=function(iconSize){if(iconSize){this.iconSize=iconSize}};Marker.prototype.setIconAnchor=function(iconAnchor){if(iconAnchor){this.iconAnchor=iconAnchor}};Marker.prototype.setShadowIcon=function(iconShadowUrl,iconShadowSize){this.iconShadowUrl=iconShadowUrl;if(iconShadowSize){this.iconShadowSize=iconShadowSize}};Marker.prototype.setHoverIcon=function(hoverIconUrl){this.hoverIconUrl=hoverIconUrl};Marker.prototype.setDraggable=function(draggable){this.draggable=draggable};Marker.prototype.setHover=function(hover){this.hover=hover};Marker.prototype.setGroupName=function(sGrpName){this.groupName=sGrpName};Marker.prototype.setAttribute=function(key,value){this.attributes[key]=value};Marker.prototype.getAttribute=function(key){return this.attributes[key]};var Polyline=mxn.Polyline=function(points){this.api=null;this.points=points;this.attributes=[];this.onmap=false;this.proprietary_polyline=false;this.pllID="mspll-"+new Date().getTime()+"-"+(Math.floor(Math.random()*Math.pow(2,16)));this.invoker=new mxn.Invoker(this,"Polyline",function(){return this.api});mxn.addEvents(this,["click"])};mxn.addProxyMethods(Polyline,["fromProprietary","hide","show","isHidden","toProprietary","update"]);Polyline.prototype.addData=function(options){for(var sOpt in options){if(options.hasOwnProperty(sOpt)){switch(sOpt){case"color":this.setColor(options.color);break;case"width":this.setWidth(options.width);break;case"opacity":this.setOpacity(options.opacity);break;case"closed":this.setClosed(options.closed);break;case"fillColor":this.setFillColor(options.fillColor);break;case"fillOpacity":this.setFillOpacity(options.fillOpacity);break;default:this.setAttribute(sOpt,options[sOpt]);break}}}};Polyline.prototype.setChild=function(some_proprietary_polyline){this.proprietary_polyline=some_proprietary_polyline;some_proprietary_polyline.mapstraction_polyline=this;this.onmap=true};Polyline.prototype.setColor=function(color){this.color=(color.length==7&&color[0]=="#")?color.toUpperCase():color};Polyline.prototype.setWidth=function(width){this.width=width};Polyline.prototype.setOpacity=function(opacity){this.opacity=opacity};Polyline.prototype.setClosed=function(bClosed){this.closed=bClosed};Polyline.prototype.setFillColor=function(sFillColor){this.fillColor=sFillColor};Polyline.prototype.setFillOpacity=function(opacity){this.fillOpacity=opacity};Polyline.prototype.setAttribute=function(key,value){this.attributes[key]=value};Polyline.prototype.getAttribute=function(key){return this.attributes[key]};Polyline.prototype.simplify=function(tolerance){var reduced=[];reduced[0]=this.points[0];var markerPoint=0;for(var i=1;i<this.points.length-1;i++){if(this.points[i].distance(this.points[markerPoint])>=tolerance){reduced[reduced.length]=this.points[i];markerPoint=i}}reduced[reduced.length]=this.points[this.points.length-1];this.points=reduced};var Radius=mxn.Radius=function(center,quality){this.center=center;var latConv=center.latConv();var lonConv=center.lonConv();var rad=Math.PI/180;this.calcs=[];for(var i=0;i<360;i+=quality){this.calcs.push([Math.cos(i*rad)/latConv,Math.sin(i*rad)/lonConv])}};Radius.prototype.getPolyline=function(radius,color){var points=[];for(var i=0;i<this.calcs.length;i++){var point=new LatLonPoint(this.center.lat+(radius*this.calcs[i][0]),this.center.lon+(radius*this.calcs[i][1]));points.push(point)}points.push(points[0]);var line=new Polyline(points);line.setColor(color);return line}})();/*
MAPSTRACTION   vtimemap   http://www.mapstraction.com

Copyright (c) 2011 Tom Carden, Steve Coast, Mikel Maron, Andrew Turner, Henri Bergius, Rob Moran, Derek Fowler, Gary Gale
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of the Mapstraction nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
mxn.register("googlev3",{Mapstraction:{init:function(c,d){var e=this;if(google&&google.maps){var b={disableDefaultUI:true,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,mapTypeControlOptions:null,navigationControl:false,navigationControlOptions:null,scrollwheel:false};this.proprietary_bubbles=[];if(!this.addControlsArgs&&loadoptions.addControlsArgs){this.addControlsArgs=loadoptions.addControlsArgs}if(this.addControlsArgs){if(this.addControlsArgs.zoom){b.navigationControl=true;if(this.addControlsArgs.zoom=="small"){b.navigationControlOptions={style:google.maps.NavigationControlStyle.SMALL}}if(this.addControlsArgs.zoom=="large"){b.navigationControlOptions={style:google.maps.NavigationControlStyle.ZOOM_PAN}}}if(this.addControlsArgs.map_type){b.mapTypeControl=true;b.mapTypeControlOptions={style:google.maps.MapTypeControlStyle.DEFAULT}}}var f=new google.maps.Map(c,b);var a=[];google.maps.event.addListener(f,"idle",function(){var j=a.length;if(j>0){var i=a.splice(0,j);var h;while((h=i.shift())){h()}}});google.maps.event.addListener(f,"click",function(h){e.click.fire({location:new mxn.LatLonPoint(h.latLng.lat(),h.latLng.lng())})});google.maps.event.addListener(f,"zoom_changed",function(){a.push(function(){e.changeZoom.fire()})});google.maps.event.addListener(f,"center_changed",function(){e.moveendHandler(e);e.endPan.fire()});var g=google.maps.event.addListener(f,"tilesloaded",function(){e.load.fire();google.maps.event.removeListener(g)});this.maps[d]=f;this.loaded[d]=true}else{alert(d+" map script not imported")}},applyOptions:function(){var b=this.maps[this.api];var a=[];if(this.options.enableDragging){a.draggable=true}if(this.options.enableScrollWheelZoom){a.scrollwheel=true}b.setOptions(a)},resizeTo:function(b,a){this.currentElement.style.width=b;this.currentElement.style.height=a;var c=this.maps[this.api];google.maps.event.trigger(c,"resize")},addControls:function(b){var c=this.maps[this.api];if(b.zoom||b.pan){if(b.zoom=="large"){this.addLargeControls()}else{this.addSmallControls()}}if(b.scale){var a={scaleControl:true,scaleControlOptions:{style:google.maps.ScaleControlStyle.DEFAULT}};c.setOptions(a);this.addControlsArgs.scale=true}if(b.map_type){this.addMapTypeControls()}},addSmallControls:function(){var b=this.maps[this.api];var a={navigationControl:true,navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}};b.setOptions(a);this.addControlsArgs.pan=false;this.addControlsArgs.scale=false;this.addControlsArgs.zoom="small"},addLargeControls:function(){var b=this.maps[this.api];var a={navigationControl:true,navigationControlOptions:{style:google.maps.NavigationControlStyle.DEFAULT}};b.setOptions(a);this.addControlsArgs.pan=true;this.addControlsArgs.zoom="large"},addMapTypeControls:function(){var b=this.maps[this.api];var a={mapTypeControl:true,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DEFAULT}};b.setOptions(a);this.addControlsArgs.map_type=true},setCenterAndZoom:function(a,b){var d=this.maps[this.api];var c=a.toProprietary(this.api);d.setCenter(c);d.setZoom(b)},addMarker:function(b,a){return b.toProprietary(this.api)},removeMarker:function(a){a.hide()},declutterMarkers:function(a){var b=this.maps[this.api]},addPolyline:function(c,b){var d=this.maps[this.api];var a=c.toProprietary(this.api);a.setMap(d);return a},removePolyline:function(a){var b=this.maps[this.api];a.proprietary_polyline.setMap(null)},getCenter:function(){var b=this.maps[this.api];var a=b.getCenter();return new mxn.LatLonPoint(a.lat(),a.lng())},setCenter:function(a,b){var d=this.maps[this.api];var c=a.toProprietary(this.api);if(b&&b.pan){d.panTo(c)}else{d.setCenter(c)}},setZoom:function(a){var b=this.maps[this.api];b.setZoom(a)},getZoom:function(){var a=this.maps[this.api];return a.getZoom()},getZoomLevelForBoundingBox:function(e){var d=this.maps[this.api];var a=e.getSouthWest().toProprietary(this.api);var c=e.getNorthEast().toProprietary(this.api);var b=new google.maps.LatLngBounds(a,c);d.fitBounds(b);return d.getZoom()},setMapType:function(a){var b=this.maps[this.api];switch(a){case mxn.Mapstraction.ROAD:b.setMapTypeId(google.maps.MapTypeId.ROADMAP);break;case mxn.Mapstraction.SATELLITE:b.setMapTypeId(google.maps.MapTypeId.SATELLITE);break;case mxn.Mapstraction.HYBRID:b.setMapTypeId(google.maps.MapTypeId.HYBRID);break;case mxn.Mapstraction.PHYSICAL:b.setMapTypeId(google.maps.MapTypeId.TERRAIN);break;default:b.setMapTypeId(google.maps.MapTypeId.ROADMAP)}},getMapType:function(){var b=this.maps[this.api];var a=b.getMapTypeId();switch(a){case google.maps.MapTypeId.ROADMAP:return mxn.Mapstraction.ROAD;case google.maps.MapTypeId.SATELLITE:return mxn.Mapstraction.SATELLITE;case google.maps.MapTypeId.HYBRID:return mxn.Mapstraction.HYBRID;case google.maps.MapTypeId.TERRAIN:return mxn.Mapstraction.PHYSICAL;default:return null}},getBounds:function(){var d=this.maps[this.api];var c=d.getBounds();if(!c){throw"Bounds not available, map must be initialized"}var a=c.getSouthWest();var b=c.getNorthEast();return new mxn.BoundingBox(a.lat(),a.lng(),b.lat(),b.lng())},setBounds:function(b){var e=this.maps[this.api];var a=b.getSouthWest().toProprietary(this.api);var d=b.getNorthEast().toProprietary(this.api);var c=new google.maps.LatLngBounds(a,d);e.fitBounds(c)},addImageOverlay:function(c,a,f,j,g,i,e){var b=this.maps[this.api];var h=new google.maps.LatLngBounds(new google.maps.LatLng(g,j),new google.maps.LatLng(e,i));var d=new google.maps.GroundOverlay(a,h);d.setMap(b)},setImagePosition:function(b,a){},addOverlay:function(a,d){var e=this.maps[this.api];var c={preserveViewport:(!d)};var b=new google.maps.KmlLayer(a,c);b.setMap(e)},addTileLayer:function(l,g,d,k,h,m){var a=this.maps[this.api];var j=[];var i=this.tileLayers.length||0;j[0]={getTileUrl:function(o,f){url=l;url=url.replace(/\{Z\}/g,f);url=url.replace(/\{X\}/g,o.x);url=url.replace(/\{Y\}/g,o.y);return url},tileSize:new google.maps.Size(256,256),isPng:true,minZoom:k,maxZoom:h,opacity:g,name:d};var n=new google.maps.ImageMapType(j[0]);if(m){a.mapTypes.set("tile"+i,n);var c=[google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.HYBRID,google.maps.MapTypeId.SATELLITE,google.maps.MapTypeId.TERRAIN];for(var e=0;e<this.tileLayers.length;e++){c.push("tile"+e)}var b={mapTypeControlOptions:{mapTypeIds:c}};a.setOptions(b)}else{a.overlayMapTypes.insertAt(i,n)}this.tileLayers.push([l,n,true,i]);return n},toggleTileLayer:function(d){var b=this.maps[this.api];for(var a=0;a<this.tileLayers.length;a++){var c=this.tileLayers[a];if(c[0]==d){if(c[2]){b.overlayMapTypes.removeAt(c[3]);c[2]=false}else{b.overlayMapTypes.insertAt(c[3],c[1]);c[2]=true}}}},getPixelRatio:function(){var a=this.maps[this.api]},mousePosition:function(a){var b=this.maps[this.api];var c=document.getElementById(a);if(c!==null){google.maps.event.addListener(b,"mousemove",function(d){var e=d.latLng.lat().toFixed(4)+" / "+d.latLng.lng().toFixed(4);c.innerHTML=e});c.innerHTML="0.0000 / 0.0000"}},openBubble:function(a,d){var c=this;if(!this.options.enableMultipleBubbles){this.closeBubble()}var e=this.maps[this.api],b=new google.maps.InfoWindow({position:a.toProprietary(this.api),content:d});google.maps.event.addListener(b,"closeclick",function(f){c.closeBubble()});b.open(e);this.proprietary_bubbles.push(b);this.openInfoBubble.fire({});return b},closeBubble:function(b){if(b){b.close();this.closeInfoBubble.fire({})}else{var a=this.proprietary_bubbles;while(a.length){a.pop().close();this.closeInfoBubble.fire({})}}}},LatLonPoint:{toProprietary:function(){return new google.maps.LatLng(this.lat,this.lon)},fromProprietary:function(a){this.lat=a.lat();this.lon=a.lng()}},Marker:{toProprietary:function(){var l={};var b=0;var j=0;if(this.iconAnchor){b=this.iconAnchor[0];j=this.iconAnchor[1]}var f=new google.maps.Point(b,j);if(this.iconUrl){var k=new google.maps.Size(this.iconSize[0],this.iconSize[1]);l.icon=new google.maps.MarkerImage(this.iconUrl,k,new google.maps.Point(0,0),f,k);if(this.iconShadowUrl){if(this.iconShadowSize){var d=new google.maps.Size(this.iconShadowSize[0],this.iconShadowSize[1]);l.shadow=new google.maps.MarkerImage(this.iconShadowUrl,d,new google.maps.Point(0,0),f,d)}else{l.shadow=new google.maps.MarkerImage(this.iconShadowUrl)}}}if(this.draggable){l.draggable=this.draggable}if(this.labelText){l.title=this.labelText}if(this.imageMap){l.shape={coord:this.imageMap,type:"poly"}}l.position=this.location.toProprietary(this.api);l.map=this.map;var g=new google.maps.Marker(l);if(this.infoBubble){var h="click";if(this.hover){h="mouseover"}google.maps.event.addListener(g,h,function(){g.mapstraction_marker.openBubble()})}if(this.hoverIconUrl){var e=new google.maps.Size(this.iconSize[0],this.iconSize[1]);var i=new google.maps.Point(0,0);var a=new google.maps.MarkerImage(this.hoverIconUrl,e,i,f);var c=new google.maps.MarkerImage(this.iconUrl,e,i,f);google.maps.event.addListener(g,"mouseover",function(){g.setIcon(a)});google.maps.event.addListener(g,"mouseout",function(){g.setIcon(c)})}google.maps.event.addListener(g,"click",function(){g.mapstraction_marker.click.fire()});return g},openBubble:function(){var b=this,a=this.mapstraction,c=this.proprietary_bubble;if(!a.options.enableMultipleBubbles){a.closeBubble()}if(!c){c=this.proprietary_bubble=new google.maps.InfoWindow({content:this.infoBubble});google.maps.event.addListener(c,"closeclick",function(d){b.closeBubble()})}a.proprietary_bubbles.push(c);c.open(this.map,this.proprietary_marker);this.openInfoBubble.fire({marker:b})},closeBubble:function(){if(this.proprietary_bubble){this.proprietary_bubble.close();this.closeInfoBubble.fire({marker:this});this.proprietary_bubble=null}},hide:function(){this.proprietary_marker.setOptions({visible:false})},show:function(){this.proprietary_marker.setOptions({visible:true})},isHidden:function(){return !this.proprietary_marker.getVisible()},update:function(){var a=new mxn.LatLonPoint();a.fromProprietary("googlev3",this.proprietary_marker.getPosition());this.location=a}},Polyline:{toProprietary:function(){var d=[];for(var c=0,f=this.points.length;c<f;c++){d.push(this.points[c].toProprietary("googlev3"))}var b={path:d,strokeColor:this.color||"#000000",strokeOpacity:this.opacity||1,strokeWeight:this.width||3};var a;if(this.closed){b.fillOpacity=this.fillOpacity||0.3;b.fillColor=this.fillColor||this.color;a=new google.maps.Polygon(b)}else{a=new google.maps.Polyline(b)}var e=this;google.maps.event.addListener(a,"click",function(){e.click.fire()});return a},show:function(){this.proprietary_polyline.setMap(this.map);this.hidden=false},hide:function(){this.proprietary_polyline.setMap(null);this.hidden=true},isHidden:function(){return this.hidden||false}}});// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);
(function(){function e(a){var b=-1,c=a.length,d=[];while(++b<c)d.push(a[b]);return d}function f(a){return Array.prototype.slice.call(a)}function i(){return this}function j(a){return a!=null&&!isNaN(a)}function k(a){return a.length}function l(a){return a==null}function m(a){return a.replace(/(^\s+)|(\s+$)/g,"").replace(/\s+/g," ")}function o(a){var b={},c=[];return b.add=function(a){for(var d=0;d<c.length;d++)if(c[d].listener==a)return b;return c.push({listener:a,on:!0}),b},b.remove=function(a){for(var d=0;d<c.length;d++){var e=c[d];if(e.listener==a){e.on=!1,c=c.slice(0,d).concat(c.slice(d+1));break}}return b},b.dispatch=function(){var a=c;for(var b=0,d=a.length;b<d;b++){var e=a[b];e.on&&e.listener.apply(this,arguments)}},b}function r(a,b){return b-(a?1+Math.floor(Math.log(a+Math.pow(10,1+Math.floor(Math.log(a)/Math.LN10)-b))/Math.LN10):1)}function s(a){return a+""}function t(a){var b=a.lastIndexOf("."),c=b>=0?a.substring(b):(b=a.length,""),d=[];while(b>0)d.push(a.substring(b-=3,b+3));return d.reverse().join(",")+c}function v(a,b){return{scale:Math.pow(10,(8-b)*3),symbol:a}}function A(a){return function(b){return b<=0?0:b>=1?1:a(b)}}function B(a){return function(b){return 1-a(1-b)}}function C(a){return function(b){return.5*(b<.5?a(2*b):2-a(2-2*b))}}function D(a){return a}function E(a){return function(b){return Math.pow(b,a)}}function F(a){return 1-Math.cos(a*Math.PI/2)}function G(a){return Math.pow(2,10*(a-1))}function H(a){return 1-Math.sqrt(1-a*a)}function I(a,b){var c;return arguments.length<2&&(b=.45),arguments.length<1?(a=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/a),function(d){return 1+a*Math.pow(2,10*-d)*Math.sin((d-c)*2*Math.PI/b)}}function J(a){return a||(a=1.70158),function(b){return b*b*((a+1)*b-a)}}function K(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}function N(a){return a in M||/\bcolor\b/.test(a)?d3.interpolateRgb:d3.interpolate}function O(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return(c-a)*b}}function P(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return Math.max(0,Math.min(1,(c-a)*b))}}function Q(a,b,c){return new R(a,b,c)}function R(a,b,c){this.r=a,this.g=b,this.b=c}function S(a){return a<16?"0"+Math.max(0,a).toString(16):Math.min(255,a).toString(16)}function T(a,b,c){var d=0,e=0,f=0,g,h,i;g=/([a-z]+)\((.*)\)/i.exec(a);if(g){h=g[2].split(",");switch(g[1]){case"hsl":return c(parseFloat(h[0]),parseFloat(h[1])/100,parseFloat(h[2])/100);case"rgb":return b(V(h[0]),V(h[1]),V(h[2]))}}return(i=W[a])?b(i.r,i.g,i.b):(a!=null&&a.charAt(0)==="#"&&(a.length===4?(d=a.charAt(1),d+=d,e=a.charAt(2),e+=e,f=a.charAt(3),f+=f):a.length===7&&(d=a.substring(1,3),e=a.substring(3,5),f=a.substring(5,7)),d=parseInt(d,16),e=parseInt(e,16),f=parseInt(f,16)),b(d,e,f))}function U(a,b,c){var d=Math.min(a/=255,b/=255,c/=255),e=Math.max(a,b,c),f=e-d,g,h,i=(e+d)/2;return f?(h=i<.5?f/(e+d):f/(2-e-d),a==e?g=(b-c)/f+(b<c?6:0):b==e?g=(c-a)/f+2:g=(a-b)/f+4,g*=60):h=g=0,Y(g,h,i)}function V(a){var b=parseFloat(a);return a.charAt(a.length-1)==="%"?Math.round(b*2.55):b}function Y(a,b,c){return new Z(a,b,c)}function Z(a,b,c){this.h=a,this.s=b,this.l=c}function $(a,b,c){function f(a){return a>360?a-=360:a<0&&(a+=360),a<60?d+(e-d)*a/60:a<180?e:a<240?d+(e-d)*(240-a)/60:d}function g(a){return Math.round(f(a)*255)}var d,e;return a%=360,a<0&&(a+=360),b=b<0?0:b>1?1:b,c=c<0?0:c>1?1:c,e=c<=.5?c*(1+b):c+b-c*b,d=2*c-e,Q(g(a+120),g(a),g(a-120))}function _(a){return h(a,bc),a}function bd(a){return function(){return ba(a,this)}}function be(a){return function(){return bb(a,this)}}function bg(a,b){function f(){if(b=this.classList)return b.add(a);var b=this.className,d=b.baseVal!=null,e=d?b.baseVal:b;c.lastIndex=0,c.test(e)||(e=m(e+" "+a),d?b.baseVal=e:this.className=e)}function g(){if(b=this.classList)return b.remove(a);var b=this.className,d=b.baseVal!=null,e=d?b.baseVal:b;e=m(e.replace(c," ")),d?b.baseVal=e:this.className=e}function h(){(b.apply(this,arguments)?f:g).call(this)}var c=new RegExp("(^|\\s+)"+d3.requote(a)+"(\\s+|$)","g");if(arguments.length<2){var d=this.node();if(e=d.classList)return e.contains(a);var e=d.className;return c.lastIndex=0,c.test(e.baseVal!=null?e.baseVal:e)}return this.each(typeof b=="function"?h:b?f:g)}function bh(a){return{__data__:a}}function bi(a){return arguments.length||(a=d3.ascending),function(b,c){return a(b&&b.__data__,c&&c.__data__)}}function bk(a){return h(a,bl),a}function bm(a,b,c){h(a,bq);var d={},e=d3.dispatch("start","end"),f=bt;return a.id=b,a.time=c,a.tween=function(b,c){return arguments.length<2?d[b]:(c==null?delete d[b]:d[b]=c,a)},a.ease=function(b){return arguments.length?(f=typeof b=="function"?b:d3.ease.apply(d3,arguments),a):f},a.each=function(b,c){return arguments.length<2?bu.call(a,b):(e[b].add(c),a)},d3.timer(function(g){return a.each(function(h,i,j){function p(a){if(o.active>b)return r();o.active=b;for(var f in d)(f=d[f].call(l,h,i))&&k.push(f);return e.start.dispatch.call(l,h,i),q(a)||d3.timer(q,0,c),1}function q(a){if(o.active!==b)return r();var c=(a-m)/n,d=f(c),g=k.length;while(g>0)k[--g].call(l,d);if(c>=1)return r(),bs=b,e.end.dispatch.call(l,h,i),bs=0,1}function r(){return--o.count||delete l.__transition__,1}var k=[],l=this,m=a[j][i].delay,n=a[j][i].duration,o=l.__transition__||(l.__transition__={active:0,count:0});++o.count,m<=g?p(g):d3.timer(p,m,c)}),1},0,c),a}function bo(a,b,c){return c!=""&&bn}function bp(a){function b(b,c,d){var e=a.call(this,b,c);return e==null?d!=""&&bn:d!=e&&d3.interpolate(d,e)}function c(b,c,d){return d!=a&&d3.interpolate(d,a)}return typeof a=="function"?b:a==null?bo:(a+="",c)}function bu(a){for(var b=0,c=this.length;b<c;b++)for(var d=this[b],e=0,f=d.length;e<f;e++){var g=d[e];g&&a.call(g=g.node,g.__data__,e,b)}return this}function by(){var a,b=Date.now(),c=bv;while(c)a=b-c.then,a>=c.delay&&(c.flush=c.callback(a)),c=c.next;var d=bz()-b;d>24?(isFinite(d)&&(clearTimeout(bx),bx=setTimeout(by,d)),bw=0):(bw=1,bA(by))}function bz(){var a=null,b=bv,c=Infinity;while(b)b.flush?b=a?a.next=b.next:bv=b.next:(c=Math.min(c,b.then+b.delay),b=(a=b).next);return c}function bB(){}function bC(a){var b=a[0],c=a[a.length-1];return b<c?[b,c]:[c,b]}function bD(a,b){var c=0,d=a.length-1,e=a[c],f=a[d],g;f<e&&(g=c,c=d,d=g,g=e,e=f,f=g);if(g=f-e)b=b(g),a[c]=b.floor(e),a[d]=b.ceil(f);return a}function bE(){return Math}function bF(a,b,c,d){function g(){var g=a.length==2?bL:bM,i=d?P:O;return e=g(a,b,i,c),f=g(b,a,i,d3.interpolate),h}function h(a){return e(a)}var e,f;return h.invert=function(a){return f(a)},h.domain=function(b){return arguments.length?(a=b.map(Number),g()):a},h.range=function(a){return arguments.length?(b=a,g()):b},h.rangeRound=function(a){return h.range(a).interpolate(d3.interpolateRound)},h.clamp=function(a){return arguments.length?(d=a,g()):d},h.interpolate=function(a){return arguments.length?(c=a,g()):c},h.ticks=function(b){return bJ(a,b)},h.tickFormat=function(b){return bK(a,b)},h.nice=function(){return bD(a,bH),g()},h.copy=function(){return bF(a,b,c,d)},g()}function bG(a,b){return a.range=d3.rebind(a,b.range),a.rangeRound=d3.rebind(a,b.rangeRound),a.interpolate=d3.rebind(a,b.interpolate),a.clamp=d3.rebind(a,b.clamp),a}function bH(a){return a=Math.pow(10,Math.round(Math.log(a)/Math.LN10)-1),{floor:function(b){return Math.floor(b/a)*a},ceil:function(b){return Math.ceil(b/a)*a}}}function bI(a,b){var c=bC(a),d=c[1]-c[0],e=Math.pow(10,Math.floor(Math.log(d/b)/Math.LN10)),f=b/d*e;return f<=.15?e*=10:f<=.35?e*=5:f<=.75&&(e*=2),c[0]=Math.ceil(c[0]/e)*e,c[1]=Math.floor(c[1]/e)*e+e*.5,c[2]=e,c}function bJ(a,b){return d3.range.apply(d3,bI(a,b))}function bK(a,b){return d3.format(",."+Math.max(0,-Math.floor(Math.log(bI(a,b)[2])/Math.LN10+.01))+"f")}function bL(a,b,c,d){var e=c(a[0],a[1]),f=d(b[0],b[1]);return function(a){return f(e(a))}}function bM(a,b,c,d){var e=[],f=[],g=0,h=a.length;while(++g<h)e.push(c(a[g-1],a[g])),f.push(d(b[g-1],b[g]));return function(b){var c=d3.bisect(a,b,1,a.length-1)-1;return f[c](e[c](b))}}function bN(a,b){function d(c){return a(b(c))}var c=b.pow;return d.invert=function(b){return c(a.invert(b))},d.domain=function(e){return arguments.length?(b=e[0]<0?bQ:bP,c=b.pow,a.domain(e.map(b)),d):a.domain().map(c)},d.nice=function(){return a.domain(bD(a.domain(),bE)),d},d.ticks=function(){var d=bC(a.domain()),e=[];if(d.every(isFinite)){var f=Math.floor(d[0]),g=Math.ceil(d[1]),h=Math.round(c(d[0])),i=Math.round(c(d[1]));if(b===bQ){e.push(c(f));for(;f++<g;)for(var j=9;j>0;j--)e.push(c(f)*j)}else{for(;f<g;f++)for(var j=1;j<10;j++)e.push(c(f)*j);e.push(c(f))}for(f=0;e[f]<h;f++);for(g=e.length;e[g-1]>i;g--);e=e.slice(f,g)}return e},d.tickFormat=function(a,e){arguments.length<2&&(e=bO);if(arguments.length<1)return e;var f=a/d.ticks().length,g=b===bQ?(h=-1e-15,Math.floor):(h=1e-15,Math.ceil),h;return function(a){return a/c(g(b(a)+h))<f?e(a):""}},d.copy=function(){return bN(a.copy(),b)},bG(d,a)}function bP(a){return Math.log(a)/Math.LN10}function bQ(a){return-Math.log(-a)/Math.LN10}function bR(a,b){function e(b){return a(c(b))}var c=bS(b),d=bS(1/b);return e.invert=function(b){return d(a.invert(b))},e.domain=function(b){return arguments.length?(a.domain(b.map(c)),e):a.domain().map(d)},e.ticks=function(a){return bJ(e.domain(),a)},e.tickFormat=function(a){return bK(e.domain(),a)},e.nice=function(){return e.domain(bD(e.domain(),bH))},e.exponent=function(a){if(!arguments.length)return b;var f=e.domain();return c=bS(b=a),d=bS(1/b),e.domain(f)},e.copy=function(){return bR(a.copy(),b)},bG(e,a)}function bS(a){return function(b){return b<0?-Math.pow(-b,a):Math.pow(b,a)}}function bT(a,b){function f(b){return d[((c[b]||(c[b]=a.push(b)))-1)%d.length]}var c,d,e;return f.domain=function(d){if(!arguments.length)return a;a=[],c={};var e=-1,g=d.length,h;while(++e<g)c[h=d[e]]||(c[h]=a.push(h));return f[b.t](b.x,b.p)},f.range=function(a){return arguments.length?(d=a,e=0,b={t:"range",x:a},f):d},f.rangePoints=function(c,g){arguments.length<2&&(g=0);var h=c[0],i=c[1],j=(i-h)/(a.length-1+g);return d=a.length<2?[(h+i)/2]:d3.range(h+j*g/2,i+j/2,j),e=0,b={t:"rangePoints",x:c,p:g},f},f.rangeBands=function(c,g){arguments.length<2&&(g=0);var h=c[0],i=c[1],j=(i-h)/(a.length+g);return d=d3.range(h+j*g,i,j),e=j*(1-g),b={t:"rangeBands",x:c,p:g},f},f.rangeRoundBands=function(c,g){arguments.length<2&&(g=0);var h=c[0],i=c[1],j=Math.floor((i-h)/(a.length+g)),k=i-h-(a.length-g)*j;return d=d3.range(h+Math.round(k/2),i,j),e=Math.round(j*(1-g)),b={t:"rangeRoundBands",x:c,p:g},f},f.rangeBand=function(){return e},f.copy=function(){return bT(a,b)},f.domain(a)}function bY(a,b){function d(){var d=0,f=a.length,g=b.length;c=[];while(++d<g)c[d-1]=d3.quantile(a,d/g);return e}function e(a){return isNaN(a=+a)?NaN:b[d3.bisect(c,a)]}var c;return e.domain=function(b){return arguments.length?(a=b.filter(function(a){return!isNaN(a)}).sort(d3.ascending),d()):a},e.range=function(a){return arguments.length?(b=a,d()):b},e.quantiles=function(){return c},e.copy=function(){return bY(a,b)},d()}function bZ(a,b,c){function f(b){return c[Math.max(0,Math.min(e,Math.floor(d*(b-a))))]}function g(){return d=c.length/(b-a),e=c.length-1,f}var d,e;return f.domain=function(c){return arguments.length?(a=+c[0],b=+c[c.length-1],g()):[a,b]},f.range=function(a){return arguments.length?(c=a,g()):c},f.copy=function(){return bZ(a,b,c)},g()}function ca(a){return a.innerRadius}function cb(a){return a.outerRadius}function cc(a){return a.startAngle}function cd(a){return a.endAngle}function ce(a){function g(d){return d.length<1?null:"M"+e(a(cf(this,d,b,c)),f)}var b=cg,c=ch,d="linear",e=ci[d],f=.7;return g.x=function(a){return arguments.length?(b=a,g):b},g.y=function(a){return arguments.length?(c=a,g):c},g.interpolate=function(a){return arguments.length?(e=ci[d=a],g):d},g.tension=function(a){return arguments.length?(f=a,g):f},g}function cf(a,b,c,d){var e=[],f=-1,g=b.length,h=typeof c=="function",i=typeof d=="function",j;if(h&&i)while(++f<g)e.push([c.call(a,j=b[f],f),d.call(a,j,f)]);else if(h)while(++f<g)e.push([c.call(a,b[f],f),d]);else if(i)while(++f<g)e.push([c,d.call(a,b[f],f)]);else while(++f<g)e.push([c,d]);return e}function cg(a){return a[0]}function ch(a){return a[1]}function cj(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("L",(d=a[b])[0],",",d[1]);return e.join("")}function ck(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("V",(d=a[b])[1],"H",d[0]);return e.join("")}function cl(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("H",(d=a[b])[0],"V",d[1]);return e.join("")}function cm(a,b){return a.length<4?cj(a):a[1]+cp(a.slice(1,a.length-1),cq(a,b))}function cn(a,b){return a.length<3?cj(a):a[0]+cp((a.push(a[0]),a),cq([a[a.length-2]].concat(a,[a[1]]),b))}function co(a,b,c){return a.length<3?cj(a):a[0]+cp(a,cq(a,b))}function cp(a,b){if(b.length<1||a.length!=b.length&&a.length!=b.length+2)return cj(a);var c=a.length!=b.length,d="",e=a[0],f=a[1],g=b[0],h=g,i=1;c&&(d+="Q"+(f[0]-g[0]*2/3)+","+(f[1]-g[1]*2/3)+","+f[0]+","+f[1],e=a[1],i=2);if(b.length>1){h=b[1],f=a[i],i++,d+="C"+(e[0]+g[0])+","+(e[1]+g[1])+","+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1];for(var j=2;j<b.length;j++,i++)f=a[i],h=b[j],d+="S"+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1]}if(c){var k=a[i];d+="Q"+(f[0]+h[0]*2/3)+","+(f[1]+h[1]*2/3)+","+k[0]+","+k[1]}return d}function cq(a,b){var c=[],d=(1-b)/2,e,f=a[0],g=a[1],h=1,i=a.length;while(++h<i)e=f,f=g,g=a[h],c.push([d*(g[0]-e[0]),d*(g[1]-e[1])]);return c}function cr(a){if(a.length<3)return cj(a);var b=1,c=a.length,d=a[0],e=d[0],f=d[1],g=[e,e,e,(d=a[1])[0]],h=[f,f,f,d[1]],i=[e,",",f];cz(i,g,h);while(++b<c)d=a[b],g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),cz(i,g,h);b=-1;while(++b<2)g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),cz(i,g,h);return i.join("")}function cs(a){if(a.length<4)return cj(a);var b=[],c=-1,d=a.length,e,f=[0],g=[0];while(++c<3)e=a[c],f.push(e[0]),g.push(e[1]);b.push(cv(cy,f)+","+cv(cy,g)),--c;while(++c<d)e=a[c],f.shift(),f.push(e[0]),g.shift(),g.push(e[1]),cz(b,f,g);return b.join("")}function ct(a){var b,c=-1,d=a.length,e=d+4,f,g=[],h=[];while(++c<4)f=a[c%d],g.push(f[0]),h.push(f[1]);b=[cv(cy,g),",",cv(cy,h)],--c;while(++c<e)f=a[c%d],g.shift(),g.push(f[0]),h.shift(),h.push(f[1]),cz(b,g,h);return b.join("")}function cu(a,b){var c=a.length-1,d=a[0][0],e=a[0][1],f=a[c][0]-d,g=a[c][1]-e,h=-1,i,j;while(++h<=c)i=a[h],j=h/c,i[0]=b*i[0]+(1-b)*(d+j*f),i[1]=b*i[1]+(1-b)*(e+j*g);return cr(a)}function cv(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}function cz(a,b,c){a.push("C",cv(cw,b),",",cv(cw,c),",",cv(cx,b),",",cv(cx,c),",",cv(cy,b),",",cv(cy,c))}function cA(a,b){return(b[1]-a[1])/(b[0]-a[0])}function cB(a){var b=0,c=a.length-1,d=[],e=a[0],f=a[1],g=d[0]=cA(e,f);while(++b<c)d[b]=g+(g=cA(e=f,f=a[b+1]));return d[b]=g,d}function cC(a){var b=[],c,d,e,f,g=cB(a),h=-1,i=a.length-1;while(++h<i)c=cA(a[h],a[h+1]),Math.abs(c)<1e-6?g[h]=g[h+1]=0:(d=g[h]/c,e=g[h+1]/c,f=d*d+e*e,f>9&&(f=c*3/Math.sqrt(f),g[h]=f*d,g[h+1]=f*e));h=-1;while(++h<=i)f=(a[Math.min(i,h+1)][0]-a[Math.max(0,h-1)][0])/(6*(1+g[h]*g[h])),b.push([f||0,g[h]*f||0]);return b}function cD(a){return a.length<3?cj(a):a[0]+cp(a,cC(a))}function cE(a){var b,c=-1,d=a.length,e,f;while(++c<d)b=a[c],e=b[0],f=b[1]+b$,b[0]=e*Math.cos(f),b[1]=e*Math.sin(f);return a}function cF(a){function j(f){if(f.length<1)return null;var j=cf(this,f,b,d),k=cf(this,f,b===c?cG(j):c,d===e?cH(j):e);return"M"+g(a(k),i)+"L"+h(a(j.reverse()),i)+"Z"}var b=cg,c=cg,d=0,e=ch,f,g,h,i=.7;return j.x=function(a){return arguments.length?(b=c=a,j):c},j.x0=function(a){return arguments.length?(b=a,j):b},j.x1=function(a){return arguments.length?(c=a,j):c},j.y=function(a){return arguments.length?(d=e=a,j):e},j.y0=function(a){return arguments.length?(d=a,j):d},j.y1=function(a){return arguments.length?(e=a,j):e},j.interpolate=function(a){return arguments.length?(g=ci[f=a],h=g.reverse||g,j):f},j.tension=function(a){return arguments.length?(i=a,j):i},j.interpolate("linear")}function cG(a){return function(b,c){return a[c][0]}}function cH(a){return function(b,c){return a[c][1]}}function cI(a){return a.source}function cJ(a){return a.target}function cK(a){return a.radius}function cL(a){return a.startAngle}function cM(a){return a.endAngle}function cN(a){return[a.x,a.y]}function cO(a){return function(){var b=a.apply(this,arguments),c=b[0],d=b[1]+b$;return[c*Math.cos(d),c*Math.sin(d)]}}function cQ(a,b){var c=(a.ownerSVGElement||a).createSVGPoint();if(cP<0&&(window.scrollX||window.scrollY)){var d=d3.select(document.body).append("svg:svg").style("position","absolute").style("top",0).style("left",0),e=d[0][0].getScreenCTM();cP=!e.f&&!e.e,d.remove()}return cP?(c.x=b.pageX,c.y=b.pageY):(c.x=b.clientX,c.y=b.clientY),c=c.matrixTransform(a.getScreenCTM().inverse()),[c.x,c.y]}function cR(){return 64}function cS(){return"circle"}function cW(a,b){a.attr("transform",function(a){return"translate("+b(a)+",0)"})}function cX(a,b){a.attr("transform",function(a){return"translate(0,"+b(a)+")"})}function cY(a,b,c){e=[];if(c&&b.length>1){var d=bC(a.domain()),e,f=-1,g=b.length,h=(b[1]-b[0])/++c,i,j;while(++f<g)for(i=c;--i>0;)(j=+b[f]-i*h)>=d[0]&&e.push(j);for(--f,i=0;++i<c&&(j=+b[f]+i*h)<d[1];)e.push(j)}return e}function de(a){var b=d3.event,c=c_.parentNode,d=0,e=0;c&&(c=df(c),d=c[0]-db[0],e=c[1]-db[1],db=c,dc|=d|e);try{d3.event={dx:d,dy:e},cZ[a].dispatch.apply(c_,da)}finally{d3.event=b}b.preventDefault()}function df(a){return d3.event.touches?d3.svg.touches(a)[0]:d3.svg.mouse(a)}function dg(){if(!c_)return;var a=c_.parentNode;if(!a)return dh();de("drag"),dj()}function dh(){if(!c_)return;de("dragend"),c_=null,dc&&c$===d3.event.target&&(dd=!0,dj())}function di(){dd&&c$===d3.event.target&&(dj(),dd=!1,c$=null)}function dj(){d3.event.stopPropagation(),d3.event.preventDefault()}function dx(a){return[a[0]-dq[0],a[1]-dq[1],dq[2]]}function dy(){dk||(dk=d3.select("body").append("div").style("visibility","hidden").style("top",0).style("height",0).style("width",0).style("overflow-y","scroll").append("div").style("height","2000px").node().parentNode);var a=d3.event,b;try{dk.scrollTop=1e3,dk.dispatchEvent(a),b=1e3-dk.scrollTop}catch(c){b=a.wheelDelta||-a.detail*5}return b*.005}function dz(){var a=d3.svg.touches(dt),b=-1,c=a.length,d;while(++b<c)dn[(d=a[b]).identifier]=dx(d);return a}function dA(){var a=d3.svg.touches(dt);switch(a.length){case 1:var b=a[0];dE(dq[2],b,dn[b.identifier]);break;case 2:var c=a[0],d=a[1],e=[(c[0]+d[0])/2,(c[1]+d[1])/2],f=dn[c.identifier],g=dn[d.identifier],h=[(f[0]+g[0])/2,(f[1]+g[1])/2,f[2]];dE(Math.log(d3.event.scale)/Math.LN2+f[2],e,h)}}function dB(){dm=null,dl&&(dv=!0,dE(dq[2],d3.svg.mouse(dt),dl))}function dC(){dl&&(dv&&ds===d3.event.target&&(dw=!0),dB(),dl=null)}function dD(){dw&&ds===d3.event.target&&(d3.event.stopPropagation(),d3.event.preventDefault(),dw=!1,ds=null)}function dE(a,b,c){function i(a,b){var c=a.__domain||(a.__domain=a.domain()),d=a.range().map(function(a){return(a-b)/h});a.domain(c).domain(d.map(a.invert))}var d=Math.pow(2,(dq[2]=a)-c[2]),e=dq[0]=b[0]-d*c[0],f=dq[1]=b[1]-d*c[1],g=d3.event,h=Math.pow(2,a);d3.event={scale:h,translate:[e,f],transform:function(a,b){a&&i(a,e),b&&i(b,f)}};try{dr.apply(dt,du)}finally{d3.event=g}g.preventDefault()}Date.now||(Date.now=function(){return+(new Date)});try{document.createElement("div").style.setProperty("opacity",0,"")}catch(a){var b=CSSStyleDeclaration.prototype,c=b.setProperty;b.setProperty=function(a,b,d){c.call(this,a,b+"",d)}}d3={version:"2.4.5"};var d=f;try{d(document.documentElement.childNodes)[0].nodeType}catch(g){d=e}var h=[].__proto__?function(a,b){a.__proto__=b}:function(a,b){for(var c in b)a[c]=b[c]};d3.functor=function(a){return typeof a=="function"?a:function(){return a}},d3.rebind=function(a,b){return function(){var c=b.apply(a,arguments);return arguments.length?a:c}},d3.ascending=function(a,b){return a<b?-1:a>b?1:a>=b?0:NaN},d3.descending=function(a,b){return b<a?-1:b>a?1:b>=a?0:NaN},d3.mean=function(a,b){var c=a.length,d,e=0,f=-1,g=0;if(arguments.length===1)while(++f<c)j(d=a[f])&&(e+=(d-e)/++g);else while(++f<c)j(d=b.call(a,a[f],f))&&(e+=(d-e)/++g);return g?e:undefined},d3.median=function(a,b){return arguments.length>1&&(a=a.map(b)),a=a.filter(j),a.length?d3.quantile(a.sort(d3.ascending),.5):undefined},d3.min=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&e>f&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&e>f&&(e=f)}return e},d3.max=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&f>e&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&f>e&&(e=f)}return e},d3.sum=function(a,b){var c=0,d=a.length,e,f=-1;if(arguments.length===1)while(++f<d)isNaN(e=+a[f])||(c+=e);else while(++f<d)isNaN(e=+b.call(a,a[f],f))||(c+=e);return c},d3.quantile=function(a,b){var c=(a.length-1)*b+1,d=Math.floor(c),e=a[d-1],f=c-d;return f?e+f*(a[d]-e):e},d3.zip=function(){if(!(e=arguments.length))return[];for(var a=-1,b=d3.min(arguments,k),c=new Array(b);++a<b;)for(var d=-1,e,f=c[a]=new Array(e);++d<e;)f[d]=arguments[d][a];return c},d3.bisectLeft=function(a,b,c,d){arguments.length<3&&(c=0),arguments.length<4&&(d=a.length);while(c<d){var e=c+d>>1;a[e]<b?c=e+1:d=e}return c},d3.bisect=d3.bisectRight=function(a,b,c,d){arguments.length<3&&(c=0),arguments.length<4&&(d=a.length);while(c<d){var e=c+d>>1;b<a[e]?d=e:c=e+1}return c},d3.first=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])>0&&(e=f);return e},d3.last=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])<=0&&(e=f);return e},d3.nest=function(){function f(c,g){if(g>=b.length)return e?e.call(a,c):d?c.sort(d):c;var h=-1,i=c.length,j=b[g++],k,l,m={};while(++h<i)(k=j(l=c[h]))in m?m[k].push(l):m[k]=[l];for(k in m)m[k]=f(m[k],g);return m}function g(a,d){if(d>=b.length)return a;var e=[],f=c[d++],h;for(h in a)e.push({key:h,values:g(a[h],d)});return f&&e.sort(function(a,b){return f(a.key,b.key)}),e}var a={},b=[],c=[],d,e;return a.map=function(a){return f(a,0)},a.entries=function(a){return g(f(a,0),0)},a.key=function(c){return b.push(c),a},a.sortKeys=function(d){return c[b.length-1]=d,a},a.sortValues=function(b){return d=b,a},a.rollup=function(b){return e=b,a},a},d3.keys=function(a){var b=[];for(var c in a)b.push(c);return b},d3.values=function(a){var b=[];for(var c in a)b.push(a[c]);return b},d3.entries=function(a){var b=[];for(var c in a)b.push({key:c,value:a[c]});return b},d3.permute=function(a,b){var c=[],d=-1,e=b.length;while(++d<e)c[d]=a[b[d]];return c},d3.merge=function(a){return Array.prototype.concat.apply([],a)},d3.split=function(a,b){var c=[],d=[],e,f=-1,g=a.length;arguments.length<2&&(b=l);while(++f<g)b.call(d,e=a[f],f)?d=[]:(d.length||c.push(d),d.push(e));return c},d3.range=function(a,b,c){arguments.length<3&&(c=1,arguments.length<2&&(b=a,a=0));if((b-a)/c==Infinity)throw new Error("infinite range");var d=[],e=-1,f;if(c<0)while((f=a+c*++e)>b)d.push(f);else while((f=a+c*++e)<b)d.push(f);return d},d3.requote=function(a){return a.replace(n,"\\$&")};var n=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;d3.round=function(a,b){return b?Math.round(a*Math.pow(10,b))*Math.pow(10,-b):Math.round(a)},d3.xhr=function(a,b,c){var d=new XMLHttpRequest;arguments.length<3?c=b:b&&d.overrideMimeType&&d.overrideMimeType(b),d.open("GET",a,!0),d.onreadystatechange=function(){d.readyState===4&&c(d.status<300?d:null)},d.send(null)},d3.text=function(a,b,c){function d(a){c(a&&a.responseText)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)},d3.json=function(a,b){d3.text(a,"application/json",function(a){b(a?JSON.parse(a):null)})},d3.html=function(a,b){d3.text(a,"text/html",function(a){if(a!=null){var c=document.createRange();c.selectNode(document.body),a=c.createContextualFragment(a)}b(a)})},d3.xml=function(a,b,c){function d(a){c(a&&a.responseXML)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)},d3.ns={prefix:{svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},qualify:function(a){var b=a.indexOf(":");return b<0?a:{space:d3.ns.prefix[a.substring(0,b)],local:a.substring(b+1)}}},d3.dispatch=function(a){var b={},c;for(var d=0,e=arguments.length;d<e;d++)c=arguments[d],b[c]=o(c);return b},d3.format=function(a){var b=p.exec(a),c=b[1]||" ",d=b[3]||"",e=b[5],f=+b[6],g=b[7],h=b[8],i=b[9],j=1,k="",l=!1;h&&(h=+h.substring(1)),e&&(c="0",g&&(f-=Math.floor((f-1)/4)));switch(i){case"n":g=!0,i="g";break;case"%":j=100,k="%",i="f";break;case"p":j=100,k="%",i="r";break;case"d":l=!0,h=0;break;case"s":j=-1,i="r"}return i=="r"&&!h&&(i="g"),i=q[i]||s,function(a){if(l&&a%1)return"";var b=a<0&&(a=-a)?"−":d;if(j<0){var m=d3.formatPrefix(a,h);a*=m.scale,k=m.symbol}else a*=j;a=i(a,h);if(e){var n=a.length+b.length;n<f&&(a=(new Array(f-n+1)).join(c)+a),g&&(a=t(a)),a=b+a}else{g&&(a=t(a)),a=b+a;var n=a.length;n<f&&(a=(new Array(f-n+1)).join(c)+a)}return a+k}};var p=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,q={g:function(a,b){return a.toPrecision(b)},e:function(a,b){return a.toExponential(b)},f:function(a,b){return a.toFixed(b)},r:function(a,b){return d3.round(a,b=r(a,b)).toFixed(Math.max(0,Math.min(20,b)))}},u=["y","z","a","f","p","n","μ","m","","k","M","G","T","P","E","Z","Y"].map(v);d3.formatPrefix=function(a,b){var c=0;return a&&(a<0&&(a*=-1),b&&(a=d3.round(a,r(a,b))),c=1+Math.floor(1e-12+Math.log(a)/Math.LN10),c=Math.max(-24,Math.min(24,Math.floor((c<=0?c+1:c-1)/3)*3))),u[8+c/3]};var w=E(2),x=E(3),y={linear:function(){return D},poly:E,quad:function(){return w},cubic:function(){return x},sin:function(){return F},exp:function(){return G},circle:function(){return H},elastic:I,back:J,bounce:function(){return K}},z={"in":function(a){return a},out:B,"in-out":C,"out-in":function(a){return C(B(a))}};d3.ease=function(a){var b=a.indexOf("-"),c=b>=0?a.substring(0,b):a,d=b>=0?a.substring(b+1):"in";return A(z[d](y[c].apply(null,Array.prototype.slice.call(arguments,1))))},d3.event=null,d3.interpolate=function(a,b){var c=d3.interpolators.length,d;while(--c>=0&&!(d=d3.interpolators[c](a,b)));return d},d3.interpolateNumber=function(a,b){return b-=a,function(c){return a+b*c}},d3.interpolateRound=function(a,b){return b-=a,function(c){return Math.round(a+b*c)}},d3.interpolateString=function(a,b){var c,d,e,f=0,g=0,h=[],i=[],j,k;L.lastIndex=0;for(d=0;c=L.exec(b);++d)c.index&&h.push(b.substring(f,g=c.index)),i.push({i:h.length,x:c[0]}),h.push(null),f=L.lastIndex;f<b.length&&h.push(b.substring(f));for(d=0,j=i.length;(c=L.exec(a))&&d<j;++d){k=i[d];if(k.x==c[0]){if(k.i)if(h[k.i+1]==null){h[k.i-1]+=k.x,h.splice(k.i,1);for(e=d+1;e<j;++e)i[e].i--}else{h[k.i-1]+=k.x+h[k.i+1],h.splice(k.i,2);for(e=d+1;e<j;++e)i[e].i-=2}else if(h[k.i+1]==null)h[k.i]=k.x;else{h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1);for(e=d+1;e<j;++e)i[e].i--}i.splice(d,1),j--,d--}else k.x=d3.interpolateNumber(parseFloat(c[0]),parseFloat(k.x))}while(d<j)k=i.pop(),h[k.i+1]==null?h[k.i]=k.x:(h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1)),j--;return h.length===1?h[0]==null?i[0].x:function(){return b}:function(a){for(d=0;d<j;++d)h[(k=i[d]).i]=k.x(a);return h.join("")}},d3.interpolateRgb=function(a,b){a=d3.rgb(a),b=d3.rgb(b);var c=a.r,d=a.g,e=a.b,f=b.r-c,g=b.g-d,h=b.b-e;return function(a){return"#"+S(Math.round(c+f*a))+S(Math.round(d+g*a))+S(Math.round(e+h*a))}},d3.interpolateHsl=function(a,b){a=d3.hsl(a),b=d3.hsl(b);var c=a.h,d=a.s,e=a.l,f=b.h-c,g=b.s-d,h=b.l-e;return function(a){return $(c+f*a,d+g*a,e+h*a).toString()}},d3.interpolateArray=function(a,b){var c=[],d=[],e=a.length,f=b.length,g=Math.min(a.length,b.length),h;for(h=0;h<g;++h)c.push(d3.interpolate(a[h],b[h]));for(;h<e;++h)d[h]=a[h];for(;h<f;++h)d[h]=b[h];return function(a){for(h=0;h<g;++h)d[h]=c[h](a);return d}},d3.interpolateObject=function(a,b){var c={},d={},e;for(e in a)e in b?c[e]=N(e)(a[e],b[e]):d[e]=a[e];for(e in b)e in a||(d[e]=b[e]);return function(a){for(e in c)d[e]=c[e](a);return d}};var L=/[-+]?(?:\d+\.\d+|\d+\.|\.\d+|\d+)(?:[eE][-]?\d+)?/g,M={background:1,fill:1,stroke:1};d3.interpolators=[d3.interpolateObject,function(a,b){return b instanceof Array&&d3.interpolateArray(a,b)},function(a,b){return typeof b=="string"&&d3.interpolateString(String(a),b)},function(a,b){return(typeof b=="string"?b in W||/^(#|rgb\(|hsl\()/.test(b):b instanceof R||b instanceof Z)&&d3.interpolateRgb(String(a),b)},function(a,b){return typeof b=="number"&&d3.interpolateNumber(+a,b)}],d3.rgb=function(a,b,c){return arguments.length===1?a instanceof R?Q(a.r,a.g,a.b):T(""+a,Q,$):Q(~~a,~~b,~~c)},R.prototype.brighter=function(a){a=Math.pow(.7,arguments.length?a:1);var b=this.r,c=this.g,d=this.b,e=30;return!b&&!c&&!d?Q(e,e,e):(b&&b<e&&(b=e),c&&c<e&&(c=e),d&&d<e&&(d=e),Q(Math.min(255,Math.floor(b/a)),Math.min(255,Math.floor(c/a)),Math.min(255,Math.floor(d/a))))},R.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),Q(Math.floor(a*this.r),Math.floor(a*this.g),Math.floor(a*this.b))},R.prototype.hsl=function(){return U(this.r,this.g,this.b)},R.prototype.toString=function(){return"#"+S(this.r)+S(this.g)+S(this.b)};var W={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};for(var X in W)W[X]=T(W[X],Q,$);d3.hsl=function(a,b,c){return arguments.length===1?a instanceof Z?Y(a.h,a.s,a.l):T(""+a,U,Y):Y(+a,+b,+c)},Z.prototype.brighter=function(a){return a=Math.pow(.7,arguments.length?a:1),Y(this.h,this.s,this.l/a)},Z.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),Y(this.h,this.s,a*this.l)},Z.prototype.rgb=function(){return $(this.h,this.s,this.l)},Z.prototype.toString=function(){return this.rgb().toString()};var ba=function(a,b){return b.querySelector(a)},bb=function(a,b){return b.querySelectorAll
(a)};typeof Sizzle=="function"&&(ba=function(a,b){return Sizzle(a,b)[0]},bb=function(a,b){return Sizzle.uniqueSort(Sizzle(a,b))});var bc=[];d3.selection=function(){return bj},d3.selection.prototype=bc,bc.select=function(a){var b=[],c,d,e,f;typeof a!="function"&&(a=bd(a));for(var g=-1,h=this.length;++g<h;){b.push(c=[]),c.parentNode=(e=this[g]).parentNode;for(var i=-1,j=e.length;++i<j;)(f=e[i])?(c.push(d=a.call(f,f.__data__,i)),d&&"__data__"in f&&(d.__data__=f.__data__)):c.push(null)}return _(b)},bc.selectAll=function(a){var b=[],c,e;typeof a!="function"&&(a=be(a));for(var f=-1,g=this.length;++f<g;)for(var h=this[f],i=-1,j=h.length;++i<j;)if(e=h[i])b.push(c=d(a.call(e,e.__data__,i))),c.parentNode=e;return _(b)},bc.attr=function(a,b){function d(){this.removeAttribute(a)}function e(){this.removeAttributeNS(a.space,a.local)}function f(){this.setAttribute(a,b)}function g(){this.setAttributeNS(a.space,a.local,b)}function h(){var c=b.apply(this,arguments);c==null?this.removeAttribute(a):this.setAttribute(a,c)}function i(){var c=b.apply(this,arguments);c==null?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,c)}a=d3.ns.qualify(a);if(arguments.length<2){var c=this.node();return a.local?c.getAttributeNS(a.space,a.local):c.getAttribute(a)}return this.each(b==null?a.local?e:d:typeof b=="function"?a.local?i:h:a.local?g:f)},bc.classed=function(a,b){var c=a.split(bf),d=c.length,e=-1;if(arguments.length>1){while(++e<d)bg.call(this,c[e],b);return this}while(++e<d)if(!bg.call(this,c[e]))return!1;return!0};var bf=/\s+/g;bc.style=function(a,b,c){function d(){this.style.removeProperty(a)}function e(){this.style.setProperty(a,b,c)}function f(){var d=b.apply(this,arguments);d==null?this.style.removeProperty(a):this.style.setProperty(a,d,c)}return arguments.length<3&&(c=""),arguments.length<2?window.getComputedStyle(this.node(),null).getPropertyValue(a):this.each(b==null?d:typeof b=="function"?f:e)},bc.property=function(a,b){function c(){delete this[a]}function d(){this[a]=b}function e(){var c=b.apply(this,arguments);c==null?delete this[a]:this[a]=c}return arguments.length<2?this.node()[a]:this.each(b==null?c:typeof b=="function"?e:d)},bc.text=function(a){return arguments.length<1?this.node().textContent:this.each(typeof a=="function"?function(){this.textContent=a.apply(this,arguments)}:function(){this.textContent=a})},bc.html=function(a){return arguments.length<1?this.node().innerHTML:this.each(typeof a=="function"?function(){this.innerHTML=a.apply(this,arguments)}:function(){this.innerHTML=a})},bc.append=function(a){function b(){return this.appendChild(document.createElement(a))}function c(){return this.appendChild(document.createElementNS(a.space,a.local))}return a=d3.ns.qualify(a),this.select(a.local?c:b)},bc.insert=function(a,b){function c(){return this.insertBefore(document.createElement(a),ba(b,this))}function d(){return this.insertBefore(document.createElementNS(a.space,a.local),ba(b,this))}return a=d3.ns.qualify(a),this.select(a.local?d:c)},bc.remove=function(){return this.each(function(){var a=this.parentNode;a&&a.removeChild(this)})},bc.data=function(a,b){function f(a,f){var g,h=a.length,i=f.length,j=Math.min(h,i),k=Math.max(h,i),l=[],m=[],n=[],o,p;if(b){var q={},r=[],s,t=f.length;for(g=-1;++g<h;)s=b.call(o=a[g],o.__data__,g),s in q?n[t++]=o:q[s]=o,r.push(s);for(g=-1;++g<i;)o=q[s=b.call(f,p=f[g],g)],o?(o.__data__=p,l[g]=o,m[g]=n[g]=null):(m[g]=bh(p),l[g]=n[g]=null),delete q[s];for(g=-1;++g<h;)r[g]in q&&(n[g]=a[g])}else{for(g=-1;++g<j;)o=a[g],p=f[g],o?(o.__data__=p,l[g]=o,m[g]=n[g]=null):(m[g]=bh(p),l[g]=n[g]=null);for(;g<i;++g)m[g]=bh(f[g]),l[g]=n[g]=null;for(;g<k;++g)n[g]=a[g],m[g]=l[g]=null}m.update=l,m.parentNode=l.parentNode=n.parentNode=a.parentNode,c.push(m),d.push(l),e.push(n)}var c=[],d=[],e=[],g=-1,h=this.length,i;if(typeof a=="function")while(++g<h)f(i=this[g],a.call(i,i.parentNode.__data__,g));else while(++g<h)f(i=this[g],a);var j=_(d);return j.enter=function(){return bk(c)},j.exit=function(){return _(e)},j},bc.filter=function(a){var b=[],c,d,e;for(var f=0,g=this.length;f<g;f++){b.push(c=[]),c.parentNode=(d=this[f]).parentNode;for(var h=0,i=d.length;h<i;h++)(e=d[h])&&a.call(e,e.__data__,h)&&c.push(e)}return _(b)},bc.map=function(a){return this.each(function(){this.__data__=a.apply(this,arguments)})},bc.sort=function(a){a=bi.apply(this,arguments);for(var b=0,c=this.length;b<c;b++)for(var d=this[b].sort(a),e=1,f=d.length,g=d[0];e<f;e++){var h=d[e];h&&(g&&g.parentNode.insertBefore(h,g.nextSibling),g=h)}return this},bc.on=function(a,b,c){arguments.length<3&&(c=!1);var d="__on"+a,e=a.indexOf(".");return e>0&&(a=a.substring(0,e)),arguments.length<2?(e=this.node()[d])&&e._:this.each(function(e,f){function h(a){var c=d3.event;d3.event=a;try{b.call(g,g.__data__,f)}finally{d3.event=c}}var g=this;g[d]&&g.removeEventListener(a,g[d],c),b&&g.addEventListener(a,g[d]=h,c),h._=b})},bc.each=function(a){for(var b=-1,c=this.length;++b<c;)for(var d=this[b],e=-1,f=d.length;++e<f;){var g=d[e];g&&a.call(g,g.__data__,e,b)}return this},bc.call=function(a){return a.apply(this,(arguments[0]=this,arguments)),this},bc.empty=function(){return!this.node()},bc.node=function(a){for(var b=0,c=this.length;b<c;b++)for(var d=this[b],e=0,f=d.length;e<f;e++){var g=d[e];if(g)return g}return null},bc.transition=function(){var a=[],b,c;for(var d=-1,e=this.length;++d<e;){a.push(b=[]);for(var f=this[d],g=-1,h=f.length;++g<h;)b.push((c=f[g])?{node:c,delay:0,duration:250}:null)}return bm(a,bs||++br,Date.now())};var bj=_([[document]]);bj[0].parentNode=document.documentElement,d3.select=function(a){return typeof a=="string"?bj.select(a):_([[a]])},d3.selectAll=function(a){return typeof a=="string"?bj.selectAll(a):_([d(a)])};var bl=[];bl.append=bc.append,bl.insert=bc.insert,bl.empty=bc.empty,bl.node=bc.node,bl.select=function(a){var b=[],c,d,e,f,g;for(var h=-1,i=this.length;++h<i;){e=(f=this[h]).update,b.push(c=[]),c.parentNode=f.parentNode;for(var j=-1,k=f.length;++j<k;)(g=f[j])?(c.push(e[j]=d=a.call(f.parentNode,g.__data__,j)),d.__data__=g.__data__):c.push(null)}return _(b)};var bn={},bq=[],br=0,bs=0,bt=d3.ease("cubic-in-out");bq.call=bc.call,d3.transition=function(){return bj.transition()},d3.transition.prototype=bq,bq.select=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bd(a));for(var f=-1,g=this.length;++f<g;){b.push(c=[]);for(var h=this[f],i=-1,j=h.length;++i<j;)(e=h[i])&&(d=a.call(e.node,e.node.__data__,i))?("__data__"in e.node&&(d.__data__=e.node.__data__),c.push({node:d,delay:e.delay,duration:e.duration})):c.push(null)}return bm(b,this.id,this.time).ease(this.ease())},bq.selectAll=function(a){var b=[],c,d,e;typeof a!="function"&&(a=be(a));for(var f=-1,g=this.length;++f<g;)for(var h=this[f],i=-1,j=h.length;++i<j;)if(e=h[i]){d=a.call(e.node,e.node.__data__,i),b.push(c=[]);for(var k=-1,l=d.length;++k<l;)c.push({node:d[k],delay:e.delay,duration:e.duration})}return bm(b,this.id,this.time).ease(this.ease())},bq.attr=function(a,b){return this.attrTween(a,bp(b))},bq.attrTween=function(a,b){function d(a,d){var e=b.call(this,a,d,this.getAttribute(c));return e===bn?(this.removeAttribute(c),null):e&&function(a){this.setAttribute(c,e(a))}}function e(a,d){var e=b.call(this,a,d,this.getAttributeNS(c.space,c.local));return e===bn?(this.removeAttributeNS(c.space,c.local),null):e&&function(a){this.setAttributeNS(c.space,c.local,e(a))}}var c=d3.ns.qualify(a);return this.tween("attr."+a,c.local?e:d)},bq.style=function(a,b,c){return arguments.length<3&&(c=""),this.styleTween(a,bp(b),c)},bq.styleTween=function(a,b,c){return arguments.length<3&&(c=""),this.tween("style."+a,function(d,e){var f=b.call(this,d,e,window.getComputedStyle(this,null).getPropertyValue(a));return f===bn?(this.style.removeProperty(a),null):f&&function(b){this.style.setProperty(a,f(b),c)}})},bq.text=function(a){return this.tween("text",function(b,c){this.textContent=typeof a=="function"?a.call(this,b,c):a})},bq.remove=function(){return this.each("end",function(){var a;!this.__transition__&&(a=this.parentNode)&&a.removeChild(this)})},bq.delay=function(a){var b=this;return b.each(typeof a=="function"?function(c,d,e){b[e][d].delay=+a.apply(this,arguments)}:(a=+a,function(c,d,e){b[e][d].delay=a}))},bq.duration=function(a){var b=this;return b.each(typeof a=="function"?function(c,d,e){b[e][d].duration=+a.apply(this,arguments)}:(a=+a,function(c,d,e){b[e][d].duration=a}))},bq.transition=function(){return this.select(i)};var bv=null,bw,bx;d3.timer=function(a,b,c){var d=!1,e,f=bv;if(arguments.length<3){if(arguments.length<2)b=0;else if(!isFinite(b))return;c=Date.now()}while(f){if(f.callback===a){f.then=c,f.delay=b,d=!0;break}e=f,f=f.next}d||(bv={callback:a,then:c,delay:b,next:bv}),bw||(bx=clearTimeout(bx),bw=1,bA(by))},d3.timer.flush=function(){var a,b=Date.now(),c=bv;while(c)a=b-c.then,c.delay||(c.flush=c.callback(a)),c=c.next;bz()};var bA=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,17)};d3.scale={},d3.scale.linear=function(){return bF([0,1],[0,1],d3.interpolate,!1)},d3.scale.log=function(){return bN(d3.scale.linear(),bP)};var bO=d3.format("e");bP.pow=function(a){return Math.pow(10,a)},bQ.pow=function(a){return-Math.pow(10,-a)},d3.scale.pow=function(){return bR(d3.scale.linear(),1)},d3.scale.sqrt=function(){return d3.scale.pow().exponent(.5)},d3.scale.ordinal=function(){return bT([],{t:"range",x:[]})},d3.scale.category10=function(){return d3.scale.ordinal().range(bU)},d3.scale.category20=function(){return d3.scale.ordinal().range(bV)},d3.scale.category20b=function(){return d3.scale.ordinal().range(bW)},d3.scale.category20c=function(){return d3.scale.ordinal().range(bX)};var bU=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],bV=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],bW=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],bX=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];d3.scale.quantile=function(){return bY([],[])},d3.scale.quantize=function(){return bZ(0,1,[0,1])},d3.svg={},d3.svg.arc=function(){function e(){var e=a.apply(this,arguments),f=b.apply(this,arguments),g=c.apply(this,arguments)+b$,h=d.apply(this,arguments)+b$,i=(h<g&&(i=g,g=h,h=i),h-g),j=i<Math.PI?"0":"1",k=Math.cos(g),l=Math.sin(g),m=Math.cos(h),n=Math.sin(h);return i>=b_?e?"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"M0,"+e+"A"+e+","+e+" 0 1,0 0,"+ -e+"A"+e+","+e+" 0 1,0 0,"+e+"Z":"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"Z":e?"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L"+e*m+","+e*n+"A"+e+","+e+" 0 "+j+",0 "+e*k+","+e*l+"Z":"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L0,0"+"Z"}var a=ca,b=cb,c=cc,d=cd;return e.innerRadius=function(b){return arguments.length?(a=d3.functor(b),e):a},e.outerRadius=function(a){return arguments.length?(b=d3.functor(a),e):b},e.startAngle=function(a){return arguments.length?(c=d3.functor(a),e):c},e.endAngle=function(a){return arguments.length?(d=d3.functor(a),e):d},e.centroid=function(){var e=(a.apply(this,arguments)+b.apply(this,arguments))/2,f=(c.apply(this,arguments)+d.apply(this,arguments))/2+b$;return[Math.cos(f)*e,Math.sin(f)*e]},e};var b$=-Math.PI/2,b_=2*Math.PI-1e-6;d3.svg.line=function(){return ce(Object)};var ci={linear:cj,"step-before":ck,"step-after":cl,basis:cr,"basis-open":cs,"basis-closed":ct,bundle:cu,cardinal:co,"cardinal-open":cm,"cardinal-closed":cn,monotone:cD},cw=[0,2/3,1/3,0],cx=[0,1/3,2/3,0],cy=[0,1/6,2/3,1/6];d3.svg.line.radial=function(){var a=ce(cE);return a.radius=a.x,delete a.x,a.angle=a.y,delete a.y,a},ck.reverse=cl,cl.reverse=ck,d3.svg.area=function(){return cF(Object)},d3.svg.area.radial=function(){var a=cF(cE);return a.radius=a.x,delete a.x,a.innerRadius=a.x0,delete a.x0,a.outerRadius=a.x1,delete a.x1,a.angle=a.y,delete a.y,a.startAngle=a.y0,delete a.y0,a.endAngle=a.y1,delete a.y1,a},d3.svg.chord=function(){function f(c,d){var e=g(this,a,c,d),f=g(this,b,c,d);return"M"+e.p0+i(e.r,e.p1)+(h(e,f)?j(e.r,e.p1,e.r,e.p0):j(e.r,e.p1,f.r,f.p0)+i(f.r,f.p1)+j(f.r,f.p1,e.r,e.p0))+"Z"}function g(a,b,f,g){var h=b.call(a,f,g),i=c.call(a,h,g),j=d.call(a,h,g)+b$,k=e.call(a,h,g)+b$;return{r:i,a0:j,a1:k,p0:[i*Math.cos(j),i*Math.sin(j)],p1:[i*Math.cos(k),i*Math.sin(k)]}}function h(a,b){return a.a0==b.a0&&a.a1==b.a1}function i(a,b){return"A"+a+","+a+" 0 0,1 "+b}function j(a,b,c,d){return"Q 0,0 "+d}var a=cI,b=cJ,c=cK,d=cc,e=cd;return f.radius=function(a){return arguments.length?(c=d3.functor(a),f):c},f.source=function(b){return arguments.length?(a=d3.functor(b),f):a},f.target=function(a){return arguments.length?(b=d3.functor(a),f):b},f.startAngle=function(a){return arguments.length?(d=d3.functor(a),f):d},f.endAngle=function(a){return arguments.length?(e=d3.functor(a),f):e},f},d3.svg.diagonal=function(){function d(d,e){var f=a.call(this,d,e),g=b.call(this,d,e),h=(f.y+g.y)/2,i=[f,{x:f.x,y:h},{x:g.x,y:h},g];return i=i.map(c),"M"+i[0]+"C"+i[1]+" "+i[2]+" "+i[3]}var a=cI,b=cJ,c=cN;return d.source=function(b){return arguments.length?(a=d3.functor(b),d):a},d.target=function(a){return arguments.length?(b=d3.functor(a),d):b},d.projection=function(a){return arguments.length?(c=a,d):c},d},d3.svg.diagonal.radial=function(){var a=d3.svg.diagonal(),b=cN,c=a.projection;return a.projection=function(a){return arguments.length?c(cO(b=a)):b},a},d3.svg.mouse=function(a){return cQ(a,d3.event)};var cP=/WebKit/.test(navigator.userAgent)?-1:0;d3.svg.touches=function(a){var b=d3.event.touches;return b?d(b).map(function(b){var c=cQ(a,b);return c.identifier=b.identifier,c}):[]},d3.svg.symbol=function(){function c(c,d){return(cT[a.call(this,c,d)]||cT.circle)(b.call(this,c,d))}var a=cS,b=cR;return c.type=function(b){return arguments.length?(a=d3.functor(b),c):a},c.size=function(a){return arguments.length?(b=d3.functor(a),c):b},c};var cT={circle:function(a){var b=Math.sqrt(a/Math.PI);return"M0,"+b+"A"+b+","+b+" 0 1,1 0,"+ -b+"A"+b+","+b+" 0 1,1 0,"+b+"Z"},cross:function(a){var b=Math.sqrt(a/5)/2;return"M"+ -3*b+","+ -b+"H"+ -b+"V"+ -3*b+"H"+b+"V"+ -b+"H"+3*b+"V"+b+"H"+b+"V"+3*b+"H"+ -b+"V"+b+"H"+ -3*b+"Z"},diamond:function(a){var b=Math.sqrt(a/(2*cV)),c=b*cV;return"M0,"+ -b+"L"+c+",0"+" 0,"+b+" "+ -c+",0"+"Z"},square:function(a){var b=Math.sqrt(a)/2;return"M"+ -b+","+ -b+"L"+b+","+ -b+" "+b+","+b+" "+ -b+","+b+"Z"},"triangle-down":function(a){var b=Math.sqrt(a/cU),c=b*cU/2;return"M0,"+c+"L"+b+","+ -c+" "+ -b+","+ -c+"Z"},"triangle-up":function(a){var b=Math.sqrt(a/cU),c=b*cU/2;return"M0,"+ -c+"L"+b+","+c+" "+ -b+","+c+"Z"}};d3.svg.symbolTypes=d3.keys(cT);var cU=Math.sqrt(3),cV=Math.tan(30*Math.PI/180);d3.svg.axis=function(){function j(j){j.each(function(k,l,m){var n=d3.select(this),o=j.delay?function(a){var b=bs;try{return bs=j.id,a.transition().delay(j[m][l].delay).duration(j[m][l].duration).ease(j.ease())}finally{bs=b}}:Object,p=a.ticks.apply(a,g),q=h==null?a.tickFormat.apply(a,g):h,r=cY(a,p,i),s=n.selectAll(".minor").data(r,String),t=s.enter().insert("svg:line","g").attr("class","tick minor").style("opacity",1e-6),u=o(s.exit()).style("opacity",1e-6).remove(),v=o(s).style("opacity",1),w=n.selectAll("g").data(p,String),x=w.enter().insert("svg:g","path").style("opacity",1e-6),y=o(w.exit()).style("opacity",1e-6).remove(),z=o(w).style("opacity",1),A,B=bC(a.range()),C=n.selectAll(".domain").data([0]),D=C.enter().append("svg:path").attr("class","domain"),E=o(C),F=this.__chart__||a;this.__chart__=a.copy(),x.append("svg:line").attr("class","tick"),x.append("svg:text"),z.select("text").text(q);switch(b){case"bottom":A=cW,v.attr("x2",0).attr("y2",d),z.select("line").attr("x2",0).attr("y2",c),z.select("text").attr("x",0).attr("y",Math.max(c,0)+f).attr("dy",".71em").attr("text-anchor","middle"),E.attr("d","M"+B[0]+","+e+"V0H"+B[1]+"V"+e);break;case"top":A=cW,v.attr("x2",0).attr("y2",-d),z.select("line").attr("x2",0).attr("y2",-c),z.select("text").attr("x",0).attr("y",-(Math.max(c,0)+f)).attr("dy","0em").attr("text-anchor","middle"),E.attr("d","M"+B[0]+","+ -e+"V0H"+B[1]+"V"+ -e);break;case"left":A=cX,v.attr("x2",-d).attr("y2",0),z.select("line").attr("x2",-c).attr("y2",0),z.select("text").attr("x",-(Math.max(c,0)+f)).attr("y",0).attr("dy",".32em").attr("text-anchor","end"),E.attr("d","M"+ -e+","+B[0]+"H0V"+B[1]+"H"+ -e);break;case"right":A=cX,v.attr("x2",d).attr("y2",0),z.select("line").attr("x2",c).attr("y2",0),z.select("text").attr("x",Math.max(c,0)+f).attr("y",0).attr("dy",".32em").attr("text-anchor","start"),E.attr("d","M"+e+","+B[0]+"H0V"+B[1]+"H"+e)}x.call(A,F),z.call(A,a),y.call(A,a),t.call(A,F),v.call(A,a),u.call(A,a)})}var a=d3.scale.linear(),b="bottom",c=6,d=6,e=6,f=3,g=[10],h,i=0;return j.scale=function(b){return arguments.length?(a=b,j):a},j.orient=function(a){return arguments.length?(b=a,j):b},j.ticks=function(){return arguments.length?(g=arguments,j):g},j.tickFormat=function(a){return arguments.length?(h=a,j):h},j.tickSize=function(a,b,f){if(!arguments.length)return c;var g=arguments.length-1;return c=+a,d=g>1?+b:c,e=g>0?+arguments[g]:c,j},j.tickPadding=function(a){return arguments.length?(f=+a,j):f},j.tickSubdivide=function(a){return arguments.length?(i=+a,j):i},j},d3.behavior={},d3.behavior.drag=function(){function b(){this.on("mousedown.drag",d).on("touchstart.drag",d),d3.select(window).on("mousemove.drag",dg).on("touchmove.drag",dg).on("mouseup.drag",dh,!0).on("touchend.drag",dh,!0).on("click.drag",di,!0)}function c(){cZ=a,c$=d3.event.target,db=df((c_=this).parentNode),dc=0,da=arguments}function d(){c.apply(this,arguments),de("dragstart")}var a=d3.dispatch("drag","dragstart","dragend");return b.on=function(c,d){return a[c].add(d),b},b};var cZ,c$,c_,da,db,dc,dd;d3.behavior.zoom=function(){function c(){this.on("mousedown.zoom",e).on("mousewheel.zoom",f).on("DOMMouseScroll.zoom",f).on("dblclick.zoom",g).on("touchstart.zoom",h),d3.select(window).on("mousemove.zoom",dB).on("mouseup.zoom",dC).on("touchmove.zoom",dA).on("touchend.zoom",dz).on("click.zoom",dD,!0)}function d(){dq=a,dr=b.zoom.dispatch,ds=d3.event.target,dt=this,du=arguments}function e(){d.apply(this,arguments),dl=dx(d3.svg.mouse(dt)),dv=!1,d3.event.preventDefault(),window.focus()}function f(){d.apply(this,arguments),dm||(dm=dx(d3.svg.mouse(dt))),dE(dy()+a[2],d3.svg.mouse(dt),dm)}function g(){d.apply(this,arguments);var b=d3.svg.mouse(dt);dE(d3.event.shiftKey?Math.ceil(a[2]-1):Math.floor(a[2]+1),b,dx(b))}function h(){d.apply(this,arguments);var b=dz(),c,e=Date.now();b.length===1&&e-dp<300&&dE(1+Math.floor(a[2]),c=b[0],dn[c.identifier]),dp=e}var a=[0,0,0],b=d3.dispatch("zoom");return c.on=function(a,d){return b[a].add(d),c},c};var dk,dl,dm,dn={},dp=0,dq,dr,ds,dt,du,dv,dw})();/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/*! 
 * Timemap.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT License (see LICENSE.txt)
 */

/**
 * @overview
 *
 * <p>Timemap.js is intended to sync a SIMILE Timeline with a web-based map. 
 * Thanks to Jorn Clausen (http://www.oe-files.de) for initial concept and code.
 * Timemap.js is licensed under the MIT License (see <a href="../LICENSE.txt">LICENSE.txt</a>).</p>
 * <p><strong>Depends on:</strong> 
 *         <a href="http://jquery.com">jQuery</a>, 
 *         <a href="https://github.com/nrabinowitz/mxn"> a customized version of Mapstraction 2.x<a>, 
 *          a map provider of your choice, <a href="code.google.com/p/simile-widgets">SIMILE Timeline v1.2 - 2.3.1.</a>
 * </p>
 * <p><strong>Tested browsers:</strong> Firefox 3.x, Google Chrome, IE7, IE8</p>
 * <p><strong>Tested map providers:</strong> 
 *          <a href="http://code.google.com/apis/maps/documentation/javascript/v2/reference.html">Google v2</a>, 
 *          <a href="http://code.google.com/apis/maps/documentation/javascript/reference.html">Google v3</a>, 
 *          <a href="http://openlayers.org">OpenLayers</a>, 
 *          <a href="http://msdn.microsoft.com/en-us/library/bb429565.aspx">Bing Maps</a>
 * </p>
 * <ul>
 *     <li><a href="http://code.google.com/p/timemap/">Project Homepage</a></li>
 *     <li><a href="http://groups.google.com/group/timemap-development">Discussion Group</a></li>
 *     <li><a href="../examples/index.html">Working Examples</a></li>
 * </ul>
 *
 * @name timemap.js
 * @author Nick Rabinowitz (www.nickrabinowitz.com)
 * @version 2.0.1
 */

// for jslint

(function(){
// borrowing some space-saving devices from jquery
var 
    // Will speed up references to window, and allows munging its name.
    window = this,
    // Will speed up references to undefined, and allows munging its name.
    undefined,
    // aliases for Timeline objects
    Timeline = window.Timeline, DateTime = Timeline.DateTime, 
    // alias libraries
    $ = window.jQuery,
    mxn = window.mxn,
    // alias Mapstraction classes
    Mapstraction = mxn.Mapstraction,
    LatLonPoint = mxn.LatLonPoint,
    BoundingBox = mxn.BoundingBox,
    Marker = mxn.Marker,
    Polyline = mxn.Polyline,
    // events
    E_ITEMS_LOADED = 'itemsloaded',
    // Google icon path
    GIP = "http://www.google.com/intl/en_us/mapfiles/ms/icons/",
    // aliases for class names, allowing munging
    TimeMap, TimeMapFilterChain, TimeMapDataset, TimeMapTheme, TimeMapItem;

/*----------------------------------------------------------------------------
 * TimeMap Class
 *---------------------------------------------------------------------------*/
 
/**
 * @class
 * The TimeMap object holds references to timeline, map, and datasets.
 *
 * @constructor
 * This will create the visible map, but not the timeline, which must be initialized separately.
 *
 * @param {DOM Element} tElement     The timeline element.
 * @param {DOM Element} mElement     The map element.
 * @param {Object} [options]       A container for optional arguments
 * @param {TimeMapTheme|String} [options.theme=red] Color theme for the timemap
 * @param {Boolean} [options.syncBands=true]    Whether to synchronize all bands in timeline
 * @param {LatLonPoint} [options.mapCenter=0,0] Point for map center
 * @param {Number} [options.mapZoom=0]          Initial map zoom level
 * @param {String} [options.mapType=physical]   The maptype for the map (see {@link TimeMap.mapTypes} for options)
 * @param {Function|String} [options.mapFilter={@link TimeMap.filters.hidePastFuture}] 
 *                                              How to hide/show map items depending on timeline state;
 *                                              options: keys in {@link TimeMap.filters} or function. Set to 
 *                                              null or false for no filter.
 * @param {Boolean} [options.showMapTypeCtrl=true]  Whether to display the map type control
 * @param {Boolean} [options.showMapCtrl=true]      Whether to show map navigation control
 * @param {Boolean} [options.centerOnItems=true] Whether to center and zoom the map based on loaded item 
 * @param {String} [options.eventIconPath]      Path for directory holding event icons; if set at the TimeMap
 *                                              level, will override dataset and item defaults
 * @param {Boolean} [options.checkResize=true]  Whether to update the timemap display when the window is 
 *                                              resized. Necessary for fluid layouts, but might be better set to
 *                                              false for absolutely-sized timemaps to avoid extra processing
 * @param {Boolean} [options.multipleInfoWindows=false] Whether to allow multiple simultaneous info windows for 
 *                                              map providers that allow this (Google v3, OpenLayers)
 * @param {mixed} [options[...]]                Any of the options for {@link TimeMapDataset}, 
 *                                              {@link TimeMapItem}, or {@link TimeMapTheme} may be set here,
 *                                              to cascade to the entire TimeMap, though they can be overridden
 *                                              at lower levels
 * </pre>
 */
TimeMap = function(tElement, mElement, options) {
    var tm = this,
        // set defaults for options
        defaults = {
            mapCenter:          new LatLonPoint(0,0),
            mapZoom:            0,
            mapType:            'physical',
            showMapTypeCtrl:    true,
            showMapCtrl:        true,
            syncBands:          true,
            mapFilter:          'hidePastFuture',
            centerOnItems:      true,
            theme:              'red',
            dateParser:         'hybrid',
            checkResize:        true,
            multipleInfoWindows:false
        }, 
        mapCenter;
    
    // save DOM elements
    /**
     * Map element
     * @name TimeMap#mElement
     * @type DOM Element
     */
    tm.mElement = mElement;
    /**
     * Timeline element
     * @name TimeMap#tElement
     * @type DOM Element
     */
    tm.tElement = tElement;
    
    /** 
     * Map of datasets 
     * @name TimeMap#datasets
     * @type Object 
     */
    tm.datasets = {};
    /**
     * Filter chains for this timemap 
     * @name TimeMap#chains
     * @type Object
     */
    tm.chains = {};
    
    /** 
     * Container for optional settings passed in the "options" parameter
     * @name TimeMap#opts
     * @type Object
     */
    tm.opts = options = $.extend(defaults, options);
    
    // allow map center to be specified as a point object
    mapCenter = options.mapCenter;
    if (mapCenter.constructor != LatLonPoint && mapCenter.lat) {
        options.mapCenter = new LatLonPoint(mapCenter.lat, mapCenter.lon);
    }
    // allow map types to be specified by key
    options.mapType = util.lookup(options.mapType, TimeMap.mapTypes);
    // allow map filters to be specified by key
    options.mapFilter = util.lookup(options.mapFilter, TimeMap.filters);
    // allow theme options to be specified in options
    options.theme = TimeMapTheme.create(options.theme, options);
    
    // initialize map
    tm.initMap();
};

// STATIC FIELDS

/**
 * Current library version.
 * @constant
 * @type String
 */
TimeMap.version = "2.0.1";

/**
 * @name TimeMap.util
 * @namespace
 * Namespace for TimeMap utility functions.
 */
var util = TimeMap.util = {};

// STATIC METHODS

/**
 * Intializes a TimeMap.
 *
 * <p>The idea here is to throw all of the standard intialization settings into
 * a large object and then pass it to the TimeMap.init() function. The full
 * data format is outlined below, but if you leave elements out the script 
 * will use default settings instead.</p>
 *
 * <p>See the examples and the 
 * <a href="http://code.google.com/p/timemap/wiki/UsingTimeMapInit">UsingTimeMapInit wiki page</a>
 * for usage.</p>
 *
 * @param {Object} config                           Full set of configuration options.
 * @param {String} [config.mapId]                   DOM id of the element to contain the map.
 *                                                  Either this or mapSelector is required.
 * @param {String} [config.timelineId]              DOM id of the element to contain the timeline.
 *                                                  Either this or timelineSelector is required.
 * @param {String} [config.mapSelector]             jQuery selector for the element to contain the map.
 *                                                  Either this or mapId is required.
 * @param {String} [config.timelineSelector]        jQuery selector for the element to contain the timeline.
 *                                                  Either this or timelineId is required.
 * @param {Object} [config.options]                 Options for the TimeMap object (see the {@link TimeMap} constructor)
 * @param {Object[]} config.datasets                Array of datasets to load
 * @param {Object} config.datasets[x]               Configuration options for a particular dataset
 * @param {String|Class} config.datasets[x].type    Loader type for this dataset (generally a sub-class 
 *                                                  of {@link TimeMap.loaders.base})
 * @param {Object} config.datasets[x].options       Options for the loader. See the {@link TimeMap.loaders.base}
 *                                                  constructor and the constructors for the various loaders for 
 *                                                  more details.
 * @param {String} [config.datasets[x].id]          Optional id for the dataset in the {@link TimeMap#datasets}
 *                                                  object, for future reference; otherwise "ds"+x is used
 * @param {String} [config.datasets[x][...]]        Other options for the {@link TimeMapDataset} object
 * @param {String|Array} [config.bandIntervals=wk]  Intervals for the two default timeline bands. Can either be an 
 *                                                  array of interval constants or a key in {@link TimeMap.intervals}
 * @param {Object[]} [config.bandInfo]              Array of configuration objects for Timeline bands, to be passed to
 *                                                  Timeline.createBandInfo (see the <a href="http://code.google.com/p/simile-widgets/wiki/Timeline_GettingStarted">Timeline Getting Started tutorial</a>).
 *                                                  This will override config.bandIntervals, if provided.
 * @param {Timeline.Band[]} [config.bands]          Array of instantiated Timeline Band objects. This will override
 *                                                  config.bandIntervals and config.bandInfo, if provided.
 * @param {Function} [config.dataLoadedFunction]    Function to be run as soon as all datasets are loaded, but
 *                                                  before they've been displayed on the map and timeline
 *                                                  (this will override dataDisplayedFunction and scrollTo)
 * @param {Function} [config.dataDisplayedFunction] Function to be run as soon as all datasets are loaded and 
 *                                                  displayed on the map and timeline
 * @param {String|Date} [config.scrollTo=earliest]  Date to scroll to once data is loaded - see 
 *                                                  {@link TimeMap.parseDate} for options
 * @return {TimeMap}                                The initialized TimeMap object
 */
TimeMap.init = function(config) {
    var err = "TimeMap.init: Either %Id or %Selector is required",    
        // set defaults
        defaults = {
            options:        {},
            datasets:       [],
            bands:          false,
            bandInfo:       false,
            bandIntervals:  "wk",
            scrollTo:       "earliest"
        },
        state = TimeMap.state,
        intervals, tm,
        datasets = [], x, dsOptions, topOptions, dsId,
        bands = [], eventSource;
    
    // get DOM element selectors
    config.mapSelector = config.mapSelector || '#' + config.mapId;
    config.timelineSelector = config.timelineSelector || '#' + config.timelineId;
    
    // get state from url hash if state functions are available
    if (state) {
        state.setConfigFromUrl(config);
    }
    // merge options and defaults
    config = $.extend(defaults, config);

    if (!config.bandInfo && !config.bands) {
        // allow intervals to be specified by key
        intervals = util.lookup(config.bandIntervals, TimeMap.intervals);
        // make default band info
        config.bandInfo = [
            {
                width:          "80%", 
                intervalUnit:   intervals[0], 
                intervalPixels: 70
            },
            {
                width:          "20%", 
                intervalUnit:   intervals[1], 
                intervalPixels: 100,
                showEventText:  false,
                overview:       true,
                trackHeight:    0.4,
                trackGap:       0.2
            }
        ];
    }
    
    // create the TimeMap object
    tm = new TimeMap(
        $(config.timelineSelector).get(0), 
        $(config.mapSelector).get(0),
        config.options
    );
    
    // create the dataset objects
    config.datasets.forEach(function(ds, x) {
        // put top-level data into options
        dsOptions = $.extend({
            title: ds.title,
            theme: ds.theme,
            dateParser: ds.dateParser
        }, ds.options);
        dsId = ds.id || "ds" + x;
        datasets[x] = tm.createDataset(dsId, dsOptions);
        if (x > 0) {
            // set all to the same eventSource
            datasets[x].eventSource = datasets[0].eventSource;
        }
    });
    // add a pointer to the eventSource in the TimeMap
    tm.eventSource = datasets[0].eventSource;
    
    // set up timeline bands
    // ensure there's at least an empty eventSource
    eventSource = (datasets[0] && datasets[0].eventSource) || new Timeline.DefaultEventSource();
    // check for pre-initialized bands (manually created with Timeline.createBandInfo())
    if (config.bands) {
        config.bands.forEach(function(band) {
            // substitute dataset event source
            // assume that these have been set up like "normal" Timeline bands:
            // with an empty event source if events are desired, and null otherwise
            if (band.eventSource !== null) {
                band.eventSource = eventSource;
            }
        });
        bands = config.bands;
    }
    // otherwise, make bands from band info
    else {
        config.bandInfo.forEach(function(bandInfo, x) {
            // if eventSource is explicitly set to null or false, ignore
            if (!(('eventSource' in bandInfo) && !bandInfo.eventSource)) {
                bandInfo.eventSource = eventSource;
            }
            else {
                bandInfo.eventSource = null;
            }
            bands[x] = Timeline.createBandInfo(bandInfo);
            if (x > 0 && util.TimelineVersion() == "1.2") {
                // set all to the same layout
                bands[x].eventPainter.setLayout(bands[0].eventPainter.getLayout()); 
            }
        });
    }
    // initialize timeline
    tm.initTimeline(bands);
    
    // initialize load manager
    var loadManager = TimeMap.loadManager,
        callback = function() { 
            loadManager.increment(); 
        };
    loadManager.init(tm, config.datasets.length, config);
    
    // load data!
    config.datasets.forEach(function(data, x) {
        var dataset = datasets[x], 
            options = data.data || data.options || {}, 
            type = data.type || options.type,
            // get loader class
            loaderClass = (typeof type == 'string') ? TimeMap.loaders[type] : type,
            // load with appropriate loader
            loader = new loaderClass(options);
        loader.load(dataset, callback);
    });
    // return timemap object for later manipulation
    return tm;
};


// METHODS

TimeMap.prototype = {

    /**
     *
     * Initialize the map.
     */
    initMap: function() {
        var tm = this,
            options = tm.opts, 
            map, i;
        
        /**
         * The Mapstraction object
         * @name TimeMap#map
         * @type Mapstraction
         */
        tm.map = map = new Mapstraction(tm.mElement, options.mapProvider);

        // display the map centered on a latitude and longitude
        map.setCenterAndZoom(options.mapCenter, options.mapZoom);
        
        // set default controls and map type
        map.addControls({
            pan: options.showMapCtrl, 
            zoom: options.showMapCtrl ? 'large' : false,
            map_type: options.showMapTypeCtrl
        });
        map.setMapType(options.mapType);
        
        // allow multiple windows if desired
        if (options.multipleInfoWindows) {
            map.setOption('enableMultipleBubbles', true);
        }
        
        /**
         * Return the native map object (specific to the map provider)
         * @name TimeMap#getNativeMap
         * @function
         * @return {Object}     The native map object (e.g. GMap2)
         */
        tm.getNativeMap = function() { return map.getMap(); };

    },

    /**
     * Initialize the timeline - this must happen separately to allow full control of 
     * timeline properties.
     *
     * @param {BandInfo Array} bands    Array of band information objects for timeline
     */
    initTimeline: function(bands) {
        var tm = this, timeline,
            opts = tm.opts,
            // filter: hide when item is hidden
            itemVisible = function(item) {
                return item.visible;
            },
            // filter: hide when dataset is hidden
            datasetVisible = function(item) {
                return item.dataset.visible;
            },
            // handler to open item window
            eventClickHandler = function(x, y, evt) {
                evt.item.openInfoWindow();
            },
            resizeTimerID, x, painter;
        
        // synchronize & highlight timeline bands
        for (x=1; x < bands.length; x++) {
            if (opts.syncBands) {
                bands[x].syncWith = 0;
            }
            bands[x].highlight = true;
        }
        
        /** 
         * The associated timeline object 
         * @name TimeMap#timeline
         * @type Timeline 
         */
        tm.timeline = timeline = Timeline.create(tm.tElement, bands);

        // hijack timeline popup window to open info window
        for (x=0; x < timeline.getBandCount(); x++) {
            painter = timeline.getBand(x).getEventPainter().constructor;
            painter.prototype._showBubble = eventClickHandler;
        }
        
        // filter chain for map placemarks
        tm.addFilterChain("map",
            // on
            function(item) {
                item.showPlacemark();
            },
            // off
            function(item) {
                item.hidePlacemark();
            },
            // pre/post
            null, null,
            // initial chain
            [itemVisible, datasetVisible]
        );
        
        // filter: hide map items depending on timeline state
        if (opts.mapFilter) {
            tm.addFilter("map", opts.mapFilter);
            // update map on timeline scroll
            timeline.getBand(0).addOnScrollListener(function() {
                tm.filter("map");
            });
        }
        
        // filter chain for timeline events
        tm.addFilterChain("timeline", 
            // on
            function(item) {
                item.showEvent();
            },
            // off
            function(item) {
                item.hideEvent();
            },
            // pre
            null,
            // post
            function() {
                // XXX: needed if we go to Timeline filtering?
                tm.eventSource._events._index();
                timeline.layout();
            },
            // initial chain
            [itemVisible, datasetVisible]
        );
        
        // filter: hide timeline items depending on map state
        if (opts.timelineFilter) {
            tm.addFilter("map", opts.timelineFilter);
        }
        
        // add callback for window resize, if necessary
        if (opts.checkResize) {
            window.onresize = function() {
                if (!resizeTimerID) {
                    resizeTimerID = window.setTimeout(function() {
                        resizeTimerID = null;
                        timeline.layout();
                    }, 500);
                }
            };
        }
    },

    /**
     * Parse a date in the context of the timeline. Uses the standard parser
     * ({@link TimeMap.dateParsers.hybrid}) but accepts "now", "earliest", 
     * "latest", "first", and "last" (referring to loaded events)
     *
     * @param {String|Date} s   String (or date) to parse
     * @return {Date}           Parsed date
     */
    parseDate: function(s) {
        var d = new Date(),
            eventSource = this.eventSource,
            parser = TimeMap.dateParsers.hybrid,
            // make sure there are events to scroll to
            hasEvents = eventSource.getCount() > 0 ? true : false;
        switch (s) {
            case "now":
                break;
            case "earliest":
            case "first":
                if (hasEvents) {
                    d = eventSource.getEarliestDate();
                }
                break;
            case "latest":
            case "last":
                if (hasEvents) {
                    d = eventSource.getLatestDate();
                }
                break;
            default:
                // assume it's a date, try to parse
                d = parser(s);
        }
        return d;
    },

    /**
     * Scroll the timeline to a given date. If lazyLayout is specified, this function
     * will also call timeline.layout(), but only if it won't be called by the 
     * onScroll listener. This involves a certain amount of reverse engineering,
     * and may not be future-proof.
     *
     * @param {String|Date} d           Date to scroll to (either a date object, a 
     *                                  date string, or one of the strings accepted 
     *                                  by TimeMap#parseDate)
     * @param {Boolean} [lazyLayout]    Whether to call timeline.layout() if not
     *                                  required by the scroll.
     * @param {Boolean} [animated]      Whether to do an animated scroll, rather than a jump.
     */
    scrollToDate: function(d, lazyLayout, animated) {
        var timeline = this.timeline,
            topband = timeline.getBand(0),
            x, time, layouts = [],
            band, minTime, maxTime;
        d = this.parseDate(d);
        if (d) {
            time = d.getTime();
            // check which bands will need layout after scroll
            for (x=0; x < timeline.getBandCount(); x++) {
                band = timeline.getBand(x);
                minTime = band.getMinDate().getTime();
                maxTime = band.getMaxDate().getTime();
                layouts[x] = (lazyLayout && time > minTime && time < maxTime);
            }
            // do scroll
            if (animated) {
                // create animation
                var provider = util.TimelineVersion() == '1.2' ? Timeline : SimileAjax,
                    a = provider.Graphics.createAnimation(function(abs, diff) {
                        topband.setCenterVisibleDate(new Date(abs));
                    }, topband.getCenterVisibleDate().getTime(), time, 1000);
                a.run();
            }
            else {
                topband.setCenterVisibleDate(d);
            }
            // layout as necessary
            for (x=0; x < layouts.length; x++) {
                if (layouts[x]) {
                    timeline.getBand(x).layout();
                }
            }
        } 
        // layout if requested even if no date is found
        else if (lazyLayout) {
            timeline.layout();
        }
    },

    /**
     * Create an empty dataset object and add it to the timemap
     *
     * @param {String} id           The id of the dataset
     * @param {Object} options      A container for optional arguments for dataset constructor -
     *                              see the options passed to {@link TimeMapDataset}
     * @return {TimeMapDataset}     The new dataset object    
     */
    createDataset: function(id, options) {
        var tm = this,
            dataset = new TimeMapDataset(tm, options);
        // save id reference
        dataset.id = id;
        tm.datasets[id] = dataset;
        // add event listener
        if (tm.opts.centerOnItems) {
            var map = tm.map;
            $(dataset).bind(E_ITEMS_LOADED, function() {
                // determine the center and zoom level from the bounds
                map.autoCenterAndZoom();
            });
        }
        return dataset;
    },

    /**
     * Run a function on each dataset in the timemap. This is the preferred
     * iteration method, as it allows for future iterator options.
     *
     * @param {Function} f    The function to run, taking one dataset as an argument
     */
    each: function(f) {
        var tm = this, 
            id;
        for (id in tm.datasets) {
            if (tm.datasets.hasOwnProperty(id)) {
                f(tm.datasets[id]);
            }
        }
    },

    /**
     * Run a function on each item in each dataset in the timemap.
     * @param {Function} f    The function to run, taking one item as an argument
     */
    eachItem: function(f) {
        this.each(function(ds) {
            ds.each(function(item) {
                f(item);
            });
        });
    },

    /**
     * Get all items from all datasets.
     * @return {TimeMapItem[]}  Array of all items
     */
    getItems: function() {
        var items = [];
        this.each(function(ds) {
            items = items.concat(ds.items);
        });
        return items;
    },
    
    /**
     * Save the currently selected item
     * @param {TimeMapItem|String} item     Item to select, or undefined
     *                                      to clear selection
     */
    setSelected: function(item) {
        this.opts.selected = item;
    },
    
    /**
     * Get the currently selected item
     * @return {TimeMapItem} Selected item
     */
    getSelected: function() {
        return this.opts.selected;
    },
    
    // Helper functions for dealing with filters
    
    /**
     * Update items, hiding or showing according to filters
     * @param {String} chainId  Filter chain to update on
     */
    filter: function(chainId) {
        var fc = this.chains[chainId];
        if (fc) {
            fc.run();
        }  
    },

    /**
     * Add a new filter chain
     *
     * @param {String} chainId      Id of the filter chain
     * @param {Function} fon        Function to run on an item if filter is true
     * @param {Function} foff       Function to run on an item if filter is false
     * @param {Function} [pre]      Function to run before the filter runs
     * @param {Function} [post]     Function to run after the filter runs
     * @param {Function[]} [chain]  Optional initial filter chain
     */
    addFilterChain: function(chainId, fon, foff, pre, post, chain) {
        this.chains[chainId] = new TimeMapFilterChain(this, fon, foff, pre, post, chain);
    },

    /**
     * Remove a filter chain
     *
     * @param {String} chainId  Id of the filter chain
     */
    removeFilterChain: function(chainId) {
        delete this.chains[chainId];
    },

    /**
     * Add a function to a filter chain
     *
     * @param {String} chainId  Id of the filter chain
     * @param {Function} f      Function to add
     */
    addFilter: function(chainId, f) {
        var fc = this.chains[chainId];
        if (fc) {
            fc.add(f);
        }
    },

    /**
     * Remove a function from a filter chain
     *
     * @param {String} chainId  Id of the filter chain
     * @param {Function} [f]    The function to remove
     */
    removeFilter: function(chainId, f) {
        var fc = this.chains[chainId];
        if (fc) {
            fc.remove(f);
        }
    }

};

/*----------------------------------------------------------------------------
 * Load manager
 *---------------------------------------------------------------------------*/

/**
 * @class Static singleton for managing multiple asynchronous loads
 */
TimeMap.loadManager = new function() {
    var mgr = this;
    
    /**
     * Initialize (or reset) the load manager
     * @name TimeMap.loadManager#init
     * @function
     *
     * @param {TimeMap} tm          TimeMap instance
     * @param {Number} target       Number of datasets we're loading
     * @param {Object} [options]    Container for optional settings
     * @param {Function} [options.dataLoadedFunction]
     *                                      Custom function replacing default completion function;
     *                                      should take one parameter, the TimeMap object
     * @param {String|Date} [options.scrollTo]
     *                                      Where to scroll the timeline when load is complete
     *                                      Options: "earliest", "latest", "now", date string, Date
     * @param {Function} [options.dataDisplayedFunction]   
     *                                      Custom function to fire once data is loaded and displayed;
     *                                      should take one parameter, the TimeMap object
     */
    mgr.init = function(tm, target, config) {
        mgr.count = 0;
        mgr.tm = tm;
        mgr.target = target;
        mgr.opts = config || {};
    };
    
    /**
     * Increment the count of loaded datasets
     * @name TimeMap.loadManager#increment
     * @function
     */
    mgr.increment = function() {
        mgr.count++;
        if (mgr.count >= mgr.target) {
            mgr.complete();
        }
    };
    
    /**
     * Function to fire when all loads are complete. 
     * Default behavior is to scroll to a given date (if provided) and
     * layout the timeline.
     * @name TimeMap.loadManager#complete
     * @function
     */
    mgr.complete = function() {
        var tm = mgr.tm,
            opts = mgr.opts,
            // custom function including timeline scrolling and layout
            func = opts.dataLoadedFunction;
        if (func) {
            func(tm);
        } 
        else {
            tm.scrollToDate(opts.scrollTo, true);
            // check for state support
            if (tm.initState) {
                tm.initState();
            }
            // custom function to be called when data is loaded
            func = opts.dataDisplayedFunction;
            if (func) {
                func(tm);
            }
        }
    };
}();

/*----------------------------------------------------------------------------
 * Loader namespace and base classes
 *---------------------------------------------------------------------------*/
 
/**
 * @namespace
 * Namespace for different data loader functions.
 * New loaders can add their factories or constructors to this object; loader
 * functions are passed an object with parameters in TimeMap.init().
 *
 * @example
    TimeMap.init({
        datasets: [
            {
                // name of class in TimeMap.loaders
                type: "json_string",
                options: {
                    url: "mydata.json"
                },
                // etc...
            }
        ],
        // etc...
    });
 */
TimeMap.loaders = {

    /**
     * @namespace
     * Namespace for storing callback functions
     * @private
     */
    cb: {},
    
    /**
     * Cancel a specific load request. In practice, this is really only
     * applicable to remote asynchronous loads. Note that this doesn't cancel 
     * the download of data, just the callback that loads it.
     * @param {String} callbackName     Name of the callback function to cancel
     */
    cancel: function(callbackName) {
        var namespace = TimeMap.loaders.cb;
        // replace with self-cancellation function
        namespace[callbackName] = function() {
            delete namespace[callbackName];
        };
    },
    
    /**
     * Cancel all current load requests.
     */
    cancelAll: function() {
        var loaderNS = TimeMap.loaders,
            namespace = loaderNS.cb,
            callbackName;
        for (callbackName in namespace) {
            if (namespace.hasOwnProperty(callbackName)) {
                loaderNS.cancel(callbackName);
            }
        }
    },
    
    /**
     * Static counter for naming callback functions
     * @private
     * @type int
     */
    counter: 0,

    /**
     * @class
     * Abstract loader class. All loaders should inherit from this class.
     *
     * @constructor
     * @param {Object} options          All options for the loader
     * @param {Function} [options.parserFunction=Do nothing]   
     *                                      Parser function to turn a string into a JavaScript array
     * @param {Function} [options.preloadFunction=Do nothing]      
     *                                      Function to call on data before loading
     * @param {Function} [options.transformFunction=Do nothing]    
     *                                      Function to call on individual items before loading
     * @param {String|Date} [options.scrollTo=earliest] Date to scroll the timeline to in the default callback 
     *                                                  (see {@link TimeMap#parseDate} for accepted syntax)
     */
    base: function(options) {
        var dummy = function(data) { return data; },
            loader = this;
         
        /**
         * Parser function to turn a string into a JavaScript array
         * @name TimeMap.loaders.base#parse
         * @function
         * @parameter {String} s        String to parse
         * @return {Object[]}           Array of item data
         */
        loader.parse = options.parserFunction || dummy;
        
        /**
         * Function to call on data object before loading
         * @name TimeMap.loaders.base#preload
         * @function
         * @parameter {Object} data     Data to preload
         * @return {Object[]}           Array of item data
         */
        loader.preload = options.preloadFunction || dummy;
        
        /**
         * Function to call on a single item data object before loading
         * @name TimeMap.loaders.base#transform
         * @function
         * @parameter {Object} data     Data to transform
         * @return {Object}             Transformed data for one item
         */
        loader.transform = options.transformFunction || dummy;
        
        /**
         * Date to scroll the timeline to on load
         * @name TimeMap.loaders.base#scrollTo
         * @default "earliest"
         * @type String|Date
         */
        loader.scrollTo = options.scrollTo || "earliest";
        
        /**
         * Get the name of a callback function that can be cancelled. This callback applies the parser,
         * preload, and transform functions, loads the data, then calls the user callback
         * @name TimeMap.loaders.base#getCallbackName
         * @function
         *
         * @param {TimeMapDataset} dataset  Dataset to load data into
         * @param {Function} callback       User-supplied callback function. If no function 
         *                                  is supplied, the default callback will be used
         * @return {String}                 The name of the callback function in TimeMap.loaders.cb
         */
        loader.getCallbackName = function(dataset, callback) {
            var callbacks = TimeMap.loaders.cb,
                // Define a unique function name
                callbackName = "_" + TimeMap.loaders.counter++;
            // Define default callback
            callback = callback || function() {
                dataset.timemap.scrollToDate(loader.scrollTo, true);
            };
            
            // create callback
            callbacks[callbackName] = function(result) {
                // parse
                var items = loader.parse(result);
                // preload
                items = loader.preload(items);
                // load
                dataset.loadItems(items, loader.transform);
                // callback
                callback(); 
                // delete the callback function
                delete callbacks[callbackName];
            };
            
            return callbackName;
        };
        
        /**
         * Get a callback function that can be cancelled. This is a convenience function
         * to be used if the callback name itself is not needed.
         * @name TimeMap.loaders.base#getCallback 
         * @function
         * @see TimeMap.loaders.base#getCallbackName
         *
         * @param {TimeMapDataset} dataset  Dataset to load data into
         * @param {Function} callback       User-supplied callback function
         * @return {Function}               The configured callback function
         */
        loader.getCallback = function(dataset, callback) {
            // get loader callback name
            var callbackName = loader.getCallbackName(dataset, callback);
            // return the function
            return TimeMap.loaders.cb[callbackName];
        };
        
        /**
         * Cancel the callback function for this loader.
         * @name TimeMap.loaders.base#cancel
         * @function
         */
        loader.cancel = function() {
            TimeMap.loaders.cancel(loader.callbackName);
        };
        
    }, 

    /**
     * @class
     * Basic loader class, for pre-loaded data. 
     * Other types of loaders should take the same parameter.
     *
     * @augments TimeMap.loaders.base
     * @example
TimeMap.init({
    datasets: [
        {
            type: "basic",
            options: {
                data: [
                    // object literals for each item
                    {
                        title: "My Item",
                        start: "2009-10-06",
                        point: {
                            lat: 37.824,
                            lon: -122.256
                        }
                    },
                    // etc...
                ]
            }
        }
    ],
    // etc...
});
     * @see <a href="../../examples/basic.html">Basic Example</a>
     *
     * @constructor
     * @param {Object} options          All options for the loader
     * @param {Array} options.data          Array of items to load
     * @param {mixed} [options[...]]        Other options (see {@link TimeMap.loaders.base})
     */
    basic: function(options) {
        var loader = new TimeMap.loaders.base(options);
        
        /**
         * Array of item data to load.
         * @name TimeMap.loaders.basic#data
         * @default []
         * @type Object[]
         */
        loader.data = options.items || 
            // allow "value" for backwards compatibility
            options.value || [];

        /**
         * Load javascript literal data.
         * New loaders should implement a load function with the same signature.
         * @name TimeMap.loaders.basic#load
         * @function
         *
         * @param {TimeMapDataset} dataset  Dataset to load data into
         * @param {Function} callback       Function to call once data is loaded
         */
        loader.load = function(dataset, callback) {
            // get callback function and call immediately on data
            (this.getCallback(dataset, callback))(this.data);
        };
        
        return loader;
    },

    /**
     * @class
     * Generic class for loading remote data with a custom parser function
     *
     * @augments TimeMap.loaders.base
     *
     * @constructor
     * @param {Object} options      All options for the loader
     * @param {String} options.url      URL of file to load (NB: must be local address)
     * @param {mixed} [options[...]]    Other options. In addition to options for 
     *                                  {@link TimeMap.loaders.base}), any option for 
     *                                  <a href="http://api.jquery.com/jQuery.ajax/">jQuery.ajax</a>
     *                                  may be set here
     */
    remote: function(options) {
        var loader = new TimeMap.loaders.base(options);
        
        /**
         * Object to hold optional settings. Any setting for 
         * <a href="http://api.jquery.com/jQuery.ajax/">jQuery.ajax</a> should be set on this
         * object before load() is called.
         * @name TimeMap.loaders.remote#opts
         * @type String
         */
        loader.opts = $.extend({}, options, {
            type: 'GET',
            dataType: 'text'
        });
        
        /**
         * Load function for remote files.
         * @name TimeMap.loaders.remote#load
         * @function
         *
         * @param {TimeMapDataset} dataset  Dataset to load data into
         * @param {Function} callback       Function to call once data is loaded
         */
        loader.load = function(dataset, callback) {
            // get loader callback name (allows cancellation)
            loader.callbackName = loader.getCallbackName(dataset, callback);
            // set the callback function
            loader.opts.success = TimeMap.loaders.cb[loader.callbackName];
            // download remote data
            $.ajax(loader.opts);
        };
        
        return loader;
    }
    
};

/*----------------------------------------------------------------------------
 * TimeMapFilterChain Class
 *---------------------------------------------------------------------------*/
 
/**
 * @class
 * TimeMapFilterChain holds a set of filters to apply to the map or timeline.
 *
 * @constructor
 * @param {TimeMap} timemap     Reference to the timemap object
 * @param {Function} fon        Function to run on an item if filter is true
 * @param {Function} foff       Function to run on an item if filter is false
 * @param {Function} [pre]      Function to run before the filter runs
 * @param {Function} [post]     Function to run after the filter runs
 * @param {Function[]} [chain]  Optional initial filter chain
 */
TimeMapFilterChain = function(timemap, fon, foff, pre, post, chain) {
    var fc = this,
        dummy = $.noop;
    /** 
     * Reference to parent TimeMap
     * @name TimeMapFilterChain#timemap
     * @type TimeMap
     */
    fc.timemap = timemap;
    
    /** 
     * Chain of filter functions, each taking an item and returning a boolean
     * @name TimeMapFilterChain#chain
     * @type Function[]
     */
    fc.chain = chain || [];
    
    /** 
     * Function to run on an item if filter is true
     * @name TimeMapFilterChain#on
     * @function
     */
    fc.on = fon || dummy;
    
    /** 
     * Function to run on an item if filter is false
     * @name TimeMapFilterChain#off
     * @function
     */
    fc.off = foff || dummy;
    
    /** 
     * Function to run before the filter runs
     * @name TimeMapFilterChain#pre
     * @function
     */
    fc.pre = pre || dummy;
    
    /** 
     * Function to run after the filter runs
     * @name TimeMapFilterChain#post
     * @function
     */
    fc.post = post || dummy;
};

// METHODS

TimeMapFilterChain.prototype = {

    /**
     * Add a filter to the filter chain.
     * @param {Function} f      Function to add
     */
    add: function(f) {
        return this.chain.push(f);
    },

    /**
     * Remove a filter from the filter chain
     * @param {Function} [f]    Function to remove; if not supplied, the last filter 
     *                          added is removed
     */
    remove: function(f) {
        var chain = this.chain, 
            i = f ? chain.indexOf(f) : chain.length - 1;
        // remove specific filter or last if none specified
        return chain.splice(i, 1);
    },

    /**
     * Run filters on all items
     */
    run: function() {
        var fc = this,
            chain = fc.chain;
        // early exit
        if (!chain.length) {
            return;
        }
        // pre-filter function
        fc.pre();
        // run items through filter
        fc.timemap.eachItem(function(item) {
            var done, 
                i = chain.length;
            L: while (!done) { 
                while (i--) {
                    if (!chain[i](item)) {
                        // false condition
                        fc.off(item);
                        break L;
                    }
                }
                // true condition
                fc.on(item);
                done = true;
            }
        });
        // post-filter function
        fc.post();
    }
    
};

/**
 * @namespace
 * Namespace for different filter functions. Adding new filters to this
 * namespace allows them to be specified by string name.
 * @example
    TimeMap.init({
        options: {
            mapFilter: "hideFuture"
        },
        // etc...
    });
 */
TimeMap.filters = {

    /**
     * Static filter function: Hide items not in the visible area of the timeline.
     *
     * @param {TimeMapItem} item    Item to test for filter
     * @return {Boolean}            Whether to show the item
     */
    hidePastFuture: function(item) {
        return item.onVisibleTimeline();
    },

    /**
     * Static filter function: Hide items later than the visible area of the timeline.
     *
     * @param {TimeMapItem} item    Item to test for filter
     * @return {Boolean}            Whether to show the item
     */
    hideFuture: function(item) {
        var maxVisibleDate = item.timeline.getBand(0).getMaxVisibleDate().getTime(),
            itemStart = item.getStartTime();
        if (itemStart !== undefined) {
            // hide items in the future
            return itemStart < maxVisibleDate;
        }
        return true;
    },

    /**
     * Static filter function: Hide items not present at the exact
     * center date of the timeline (will only work for duration events).
     *
     * @param {TimeMapItem} item    Item to test for filter
     * @return {Boolean}            Whether to show the item
     */
    showMomentOnly: function(item) {
        var topband = item.timeline.getBand(0),
            momentDate = topband.getCenterVisibleDate().getTime(),
            itemStart = item.getStartTime(),
            itemEnd = item.getEndTime();
        if (itemStart !== undefined) {
            // hide items in the future
            return itemStart < momentDate &&
                // hide items in the past
                (itemEnd > momentDate || itemStart > momentDate);
        }
        return true;
    }

};


/*----------------------------------------------------------------------------
 * TimeMapDataset Class
 *---------------------------------------------------------------------------*/

/**
 * @class 
 * The TimeMapDataset object holds an array of items and dataset-level
 * options and settings, including visual themes.
 *
 * @constructor
 * @param {TimeMap} timemap         Reference to the timemap object
 * @param {Object} [options]        Object holding optional arguments
 * @param {String} [options.id]                     Key for this dataset in the datasets map
 * @param {String} [options.title]                  Title of the dataset (for the legend)
 * @param {String|TimeMapTheme} [options.theme]     Theme settings.
 * @param {String|Function} [options.dateParser]    Function to replace default date parser.
 * @param {Boolean} [options.noEventLoad=false]     Whether to skip loading events on the timeline
 * @param {Boolean} [options.noPlacemarkLoad=false] Whether to skip loading placemarks on the map
 * @param {String} [options.infoTemplate]       HTML for the info window content, with variable expressions
 *                                              (as "{{varname}}" by default) to be replaced by option data
 * @param {String} [options.templatePattern]    Regex pattern defining variable syntax in the infoTemplate
 * @param {mixed} [options[...]]                Any of the options for {@link TimeMapItem} or 
 *                                              {@link TimeMapTheme} may be set here, to cascade to 
 *                                              the dataset's objects, though they can be 
 *                                              overridden at the TimeMapItem level
 */
TimeMapDataset = function(timemap, options) {
    var ds = this;

    /** 
     * Reference to parent TimeMap
     * @name TimeMapDataset#timemap
     * @type TimeMap
     */
    ds.timemap = timemap;
    
    /** 
     * EventSource for timeline events
     * @name TimeMapDataset#eventSource
     * @type Timeline.EventSource
     */
    ds.eventSource = new Timeline.DefaultEventSource();
    
    /** 
     * Array of child TimeMapItems
     * @name TimeMapDataset#items
     * @type Array
     */
    ds.items = [];
    
    /** 
     * Whether the dataset is visible
     * @name TimeMapDataset#visible
     * @type Boolean
     */
    ds.visible = true;
        
    /** 
     * Container for optional settings passed in the "options" parameter
     * @name TimeMapDataset#opts
     * @type Object
     */
    ds.opts = options = $.extend({}, timemap.opts, options);
    
    // allow date parser to be specified by key
    options.dateParser = util.lookup(options.dateParser, TimeMap.dateParsers);
    // allow theme options to be specified in options
    options.theme = TimeMapTheme.create(options.theme, options);
};

TimeMapDataset.prototype = {
    
    /**
     * Return an array of this dataset's items
     * @param {Number} [index]     Index of single item to return
     * @return {TimeMapItem[]}  Single item, or array of all items if no index was supplied
     */
    getItems: function(index) {
        var items = this.items;
        return index === undefined ? items : 
            index in items ? items[index] : null;
    },
    
    /**
     * Return the title of the dataset
     * @return {String}     Dataset title
     */
    getTitle: function() { 
        return this.opts.title; 
    },

    /**
     * Run a function on each item in the dataset. This is the preferred
     * iteration method, as it allows for future iterator options.
     *
     * @param {Function} f    The function to run
     */
    each: function(f) {
        this.items.forEach(f);
    },

    /**
     * Add an array of items to the map and timeline.
     *
     * @param {Object[]} data           Array of data to be loaded
     * @param {Function} [transform]    Function to transform data before loading
     * @see TimeMapDataset#loadItem
     */
    loadItems: function(data, transform) {
		if (data) {
			var ds = this;
			data.forEach(function(item) {
				ds.loadItem(item, transform);
			});
			$(ds).trigger(E_ITEMS_LOADED);
		}
    },

    /**
     * Add one item to map and timeline. 
     * Each item has both a timeline event and a map placemark.
     *
     * @param {Object} data         Data to be loaded - see the {@link TimeMapItem} constructor for details
     * @param {Function} [transform]        If data is not in the above format, transformation function to make it so
     * @return {TimeMapItem}                The created item (for convenience, as it's already been added)
     * @see TimeMapItem
     */
    loadItem: function(data, transform) {
        // apply transformation, if any
        if (transform) {
            data = transform(data);
        }
        // transform functions can return a false value to skip a datum in the set
        if (data) {
            // create new item, cascading options
            var ds = this, item;
            data.options = $.extend({}, ds.opts, {title:null}, data.options);
            item = new TimeMapItem(data, ds);
            // add the item to the dataset
            ds.items.push(item);
            // return the item object
            return item;
        }
    }

};

/*----------------------------------------------------------------------------
 * TimeMapTheme Class
 *---------------------------------------------------------------------------*/

/**
 * @class 
 * Predefined visual themes for datasets, defining colors and images for
 * map markers and timeline events. Note that theme is only used at creation
 * time - updating the theme of an existing object won't do anything.
 *
 * @constructor
 * @param {Object} [options]        A container for optional arguments
 * @param {String} [options.icon=http://www.google.com/intl/en_us/mapfiles/ms/icons/red-dot.png]
 *                                                      Icon image for marker placemarks
 * @param {Number[]} [options.iconSize=[32,32]]         Array of two integers indicating marker icon size as
 *                                                      [width, height] in pixels
 * @param {String} [options.iconShadow=http://www.google.com/intl/en_us/mapfiles/ms/icons/msmarker.shadow.png]
 *                                                      Icon image for marker placemarks
 * @param {Number[]} [options.iconShadowSize=[59,32]]   Array of two integers indicating marker icon shadow
 *                                                      size as [width, height] in pixels
 * @param {Number[]} [options.iconAnchor=[16,33]]       Array of two integers indicating marker icon anchor
 *                                                      point as [xoffset, yoffset] in pixels
 * @param {String} [options.color=#FE766A]              Default color in hex for events, polylines, polygons.
 * @param {String} [options.lineColor=color]            Color for polylines/polygons.
 * @param {Number} [options.lineOpacity=1]              Opacity for polylines/polygons.
 * @param {Number} [options.lineWeight=2]               Line weight in pixels for polylines/polygons.
 * @param {String} [options.fillColor=color]            Color for polygon fill.
 * @param {String} [options.fillOpacity=0.25]           Opacity for polygon fill.
 * @param {String} [options.eventColor=color]           Background color for duration events.
 * @param {String} [options.eventTextColor=null]        Text color for events (null=Timeline default).
 * @param {String} [options.eventIconPath=timemap/images/]  Path to instant event icon directory.
 * @param {String} [options.eventIconImage=red-circle.gif]  Filename of instant event icon image.
 * @param {URL} [options.eventIcon=eventIconPath+eventIconImage] URL for instant event icons.
 * @param {Boolean} [options.classicTape=false]         Whether to use the "classic" style timeline event tape
 *                                                      (needs additional css to work - see examples/artists.html).
 */
TimeMapTheme = function(options) {

    // work out various defaults - the default theme is Google's reddish color
    var defaults = {
        /** Default color in hex
         * @name TimeMapTheme#color 
         * @type String */
        color:          "#FE766A",
        /** Opacity for polylines/polygons
         * @name TimeMapTheme#lineOpacity 
         * @type Number */
        lineOpacity:    1,
        /** Line weight in pixels for polylines/polygons
         * @name TimeMapTheme#lineWeight 
         * @type Number */
        lineWeight:     2,
        /** Opacity for polygon fill 
         * @name TimeMapTheme#fillOpacity 
         * @type Number */
        fillOpacity:    0.4,
        /** Text color for duration events 
         * @name TimeMapTheme#eventTextColor 
         * @type String */
        eventTextColor: null,
        /** Path to instant event icon directory 
         * @name TimeMapTheme#eventIconPath 
         * @type String */
        eventIconPath:  "timemap/images/",
        /** Filename of instant event icon image
         * @name TimeMapTheme#eventIconImage 
         * @type String */
        eventIconImage: "red-circle.png",
        /** Whether to use the "classic" style timeline event tape
         * @name TimeMapTheme#classicTape 
         * @type Boolean */
        classicTape:    false,
        /** Icon image for marker placemarks 
         * @name TimeMapTheme#icon 
         * @type String */
        icon:      GIP + "red-dot.png",
        /** Icon size for marker placemarks 
         * @name TimeMapTheme#iconSize 
         * @type Number[] */
        iconSize: [32, 32],
        /** Icon shadow image for marker placemarks 
         * @name TimeMapTheme#iconShadow
         * @type String */
        iconShadow: GIP + "msmarker.shadow.png",
        /** Icon shadow size for marker placemarks 
         * @name TimeMapTheme#iconShadowSize 
         * @type Number[] */
        iconShadowSize: [59, 32],
        /** Icon anchor for marker placemarks 
         * @name TimeMapTheme#iconAnchor 
         * @type Number[] */
        iconAnchor: [16, 33]
    };
    
    // merge defaults with options
    var settings = $.extend(defaults, options);
    
    // cascade some settings as defaults
    defaults = {
        /** Line color for polylines/polygons
         * @name TimeMapTheme#lineColor 
         * @type String */
        lineColor:          settings.color,
        /** Fill color for polygons
         * @name TimeMapTheme#fillColor 
         * @type String */
        fillColor:          settings.color,
        /** Background color for duration events
         * @name TimeMapTheme#eventColor 
         * @type String */
        eventColor:         settings.color,
        /** Full URL for instant event icons
         * @name TimeMapTheme#eventIcon 
         * @type String */
        eventIcon:          settings.eventIcon || settings.eventIconPath + settings.eventIconImage
    };
    
    // return configured options as theme
    return $.extend(defaults, settings);
};

/**
 * Create a theme, based on an optional new or pre-set theme
 *
 * @param {TimeMapTheme|String} [theme] Existing theme to clone, or string key in {@link TimeMap.themes}
 * @param {Object} [options]            Optional settings to overwrite - see {@link TimeMapTheme}
 * @return {TimeMapTheme}               Configured theme
 */
TimeMapTheme.create = function(theme, options) {
    // test for string matches and missing themes
    theme = util.lookup(theme, TimeMap.themes);
    if (!theme) {
        return new TimeMapTheme(options);
    }
    if (options) {
        // see if we need to clone - guessing fewer keys in options
        var clone = false, key;
        for (key in options) {
            if (theme.hasOwnProperty(key)) {
                clone = {};
                break;
            }
        }
        // clone if necessary
        if (clone) {
            for (key in theme) {
                if (theme.hasOwnProperty(key)) {
                    clone[key] = options[key] || theme[key];
                }
            }
            // fix event icon path, allowing full image path in options
            clone.eventIcon = options.eventIcon || 
                clone.eventIconPath + clone.eventIconImage;
            return clone;
        }
    }
    return theme;
};


/*----------------------------------------------------------------------------
 * TimeMapItem Class
 *---------------------------------------------------------------------------*/

/**
 * @class
 * The TimeMapItem object holds references to one or more map placemarks and 
 * an associated timeline event.
 *
 * @constructor
 * @param {String} data             Object containing all item data
 * @param {String} [data.title=Untitled] Title of the item (visible on timeline)
 * @param {String|Date} [data.start]    Start time of the event on the timeline
 * @param {String|Date} [data.end]      End time of the event on the timeline (duration events only)
 * @param {Object} [data.point]         Data for a single-point placemark: 
 * @param {Float} [data.point.lat]          Latitude of map marker
 * @param {Float} [data.point.lon]          Longitude of map marker
 * @param {Object[]} [data.polyline]    Data for a polyline placemark, as an array in "point" format
 * @param {Object[]} [data.polygon]     Data for a polygon placemark, as an array "point" format
 * @param {Object} [data.overlay]       Data for a ground overlay:
 * @param {String} [data.overlay.image]     URL of image to overlay
 * @param {Float} [data.overlay.north]      Northern latitude of the overlay
 * @param {Float} [data.overlay.south]      Southern latitude of the overlay
 * @param {Float} [data.overlay.east]       Eastern longitude of the overlay
 * @param {Float} [data.overlay.west]       Western longitude of the overlay
 * @param {Object[]} [data.placemarks]  Array of placemarks, e.g. [{point:{...}}, {polyline:[...]}]
 * @param {Object} [data.options]       A container for optional arguments
 * @param {String} [data.options.description]       Plain-text description of the item
 * @param {LatLonPoint} [data.options.infoPoint]    Point indicating the center of this item
 * @param {String} [data.options.infoHtml]          Full HTML for the info window
 * @param {String} [data.options.infoUrl]           URL from which to retrieve full HTML for the info window
 * @param {String} [data.options.infoTemplate]      HTML for the info window content, with variable expressions
 *                                                  (as "{{varname}}" by default) to be replaced by option data
 * @param {String} [data.options.templatePattern=/{{([^}]+)}}/g]
 *                                                  Regex pattern defining variable syntax in the infoTemplate
 * @param {Function} [data.options.openInfoWindow={@link TimeMapItem.openInfoWindowBasic}]   
 *                                                  Function redefining how info window opens
 * @param {Function} [data.options.closeInfoWindow={@link TimeMapItem.closeInfoWindowBasic}]  
 *                                                  Function redefining how info window closes
 * @param {String|TimeMapTheme} [data.options.theme]    Theme applying to this item, overriding dataset theme
 * @param {mixed} [data.options[...]]               Any of the options for {@link TimeMapTheme} may be set here
 * @param {TimeMapDataset} dataset  Reference to the parent dataset object
 */
TimeMapItem = function(data, dataset) {
    // improve compression
    var item = this,
        // set defaults for options
        options = $.extend({
                type: 'none',
                description: '',
                infoPoint: null,
                infoHtml: '',
                infoUrl: '',
                openInfoWindow: data.options.infoUrl ? 
                    TimeMapItem.openInfoWindowAjax :
                    TimeMapItem.openInfoWindowBasic,
                infoTemplate: '<div class="infotitle">{{title}}</div>' + 
                              '<div class="infodescription">{{description}}</div>',
                templatePattern: /\{\{([^}]+)\}\}/g,
                closeInfoWindow: TimeMapItem.closeInfoWindowBasic
            }, data.options),
        tm = dataset.timemap,
        // allow theme options to be specified in options
        theme = options.theme = TimeMapTheme.create(options.theme, options),
        parser = options.dateParser, 
        eventClass = Timeline.DefaultEventSource.Event,
        // settings for timeline event
        start = data.start, 
        end = data.end, 
        eventIcon = theme.eventIcon,
        textColor = theme.eventTextColor,
        title = options.title = data.title || 'Untitled',
        event = null,
        instant,
        // empty containers
        placemarks = [], 
        pdataArr = [], 
        pdata = null, 
        type = "", 
        point = null, 
        i;
    
    // set core fields
    
    /**
     * This item's parent dataset
     * @name TimeMapItem#dataset
     * @type TimeMapDataset
     */
    item.dataset = dataset;
    
    /**
     * The timemap's map object
     * @name TimeMapItem#map
     * @type Mapstraction
     */
    item.map = tm.map;
    
    /**
     * The timemap's timeline object
     * @name TimeMapItem#timeline
     * @type Timeline
     */
    item.timeline = tm.timeline;
    
    /**
     * Container for optional settings passed in through the "options" parameter
     * @name TimeMapItem#opts
     * @type Object
     */
    item.opts = options;
    
    // Create timeline event
    
    start = start ? parser(start) : null;
    end = end ? parser(end) : null;
    instant = !end;
    if (start !== null) { 
        if (util.TimelineVersion() == "1.2") {
            // attributes by parameter
            event = new eventClass(start, end, null, null,
                instant, title, null, null, null, eventIcon, theme.eventColor, 
                theme.eventTextColor);
        } else {
            if (!textColor) {
                // tweak to show old-style events
                textColor = (theme.classicTape && !instant) ? '#FFFFFF' : '#000000';
            }
            // attributes in object
            event = new eventClass({
                start: start,
                end: end,
                instant: instant,
                text: title,
                icon: eventIcon,
                color: theme.eventColor,
                textColor: textColor
            });
        }
        // create cross-reference and add to timeline
        event.item = item;
        // allow for custom event loading
        if (!options.noEventLoad) {
            // add event to timeline
            dataset.eventSource.add(event);
        }
    }

    /**
     * This item's timeline event
     * @name TimeMapItem#event
     * @type Timeline.Event
     */
    item.event = event;
    
    // internal function: create map placemark
    // takes a data object (could be full data, could be just placemark)
    // returns an object with {placemark, type, point}
    function createPlacemark(pdata) {
        var placemark = null, 
            type = "", 
            point = null,
            pBounds;
        // point placemark
        if (pdata.point) {
            var lat = pdata.point.lat, 
                lon = pdata.point.lon;
            if (lat === undefined || lon === undefined) {
                // give up
                return placemark;
            }
            point = new LatLonPoint(
                parseFloat(lat), 
                parseFloat(lon)
            );
            // create marker
            placemark = new Marker(point);
            placemark.setLabel(pdata.title);
            placemark.addData(theme);
            type = "marker";
        }
        // polyline and polygon placemarks
        else if (pdata.polyline || pdata.polygon) {
            var points = [],
                isPolygon = "polygon" in pdata,
                line = pdata.polyline || pdata.polygon,
                x;
            pBounds = new BoundingBox();
            if (line && line.length) {
                for (x=0; x<line.length; x++) {
                    point = new LatLonPoint(
                        parseFloat(line[x].lat), 
                        parseFloat(line[x].lon)
                    );
                    points.push(point);
                    // add point to visible map bounds
                    pBounds.extend(point);
                }
                // make polyline or polygon
                placemark = new Polyline(points);
                placemark.addData({
                    color: theme.lineColor, 
                    width: theme.lineWeight, 
                    opacity: theme.lineOpacity, 
                    closed: isPolygon, 
                    fillColor: theme.fillColor,
                    fillOpacity: theme.fillOpacity
                });
                // set type and point
                type = isPolygon ? "polygon" : "polyline";
                point = isPolygon ?
                    pBounds.getCenter() :
                    points[Math.floor(points.length/2)];
            }
        } 
        // ground overlay placemark
        else if ("overlay" in pdata) {
            var sw = new LatLonPoint(
                    parseFloat(pdata.overlay.south), 
                    parseFloat(pdata.overlay.west)
                ),
                ne = new LatLonPoint(
                    parseFloat(pdata.overlay.north), 
                    parseFloat(pdata.overlay.east)
                );
            pBounds = new BoundingBox(sw.lat, sw.lon, ne.lat, ne.lon);
            // mapstraction can only add it - there's no placemark type :(
            // XXX: look into extending Mapstraction here
            tm.map.addImageOverlay("img" + (new Date()).getTime(), pdata.overlay.image, theme.lineOpacity,
                sw.lon, sw.lat, ne.lon, ne.lat);
            type = "overlay";
            point = pBounds.getCenter();
        }
        return {
            "placemark": placemark,
            "type": type,
            "point": point
        };
    }
    
    // Create placemark or placemarks
    
    // Create array of placemark data
    if ("placemarks" in data) {
        pdataArr = data.placemarks;
    } else {
        // we have one or more single placemarks
        ["point", "polyline", "polygon", "overlay"].forEach(function(type) {
            if (type in data) {
                // push placemarks into array
                pdata = {};
                pdata[type] = data[type];
                pdataArr.push(pdata);
            }
        });
    }
    // Create placemark objects
    pdataArr.forEach(function(pdata) {
        // put in title if necessary
        pdata.title = pdata.title || title;
        // create the placemark
        var p = createPlacemark(pdata);
        // check that the placemark was valid
        if (p) {
            // take the first point and type as a default
            point = point || p.point;
            type = type || p.type;
            if (p.placemark) {
                placemarks.push(p.placemark);
            }
        }
    });
    // set type, overriding for arrays
    options.type = placemarks.length > 1 ? "array" : type;
    
    // set infoPoint, checking for custom option
    options.infoPoint = options.infoPoint ?
        // check for custom infoPoint and convert to point
        new LatLonPoint(
            parseFloat(options.infoPoint.lat), 
            parseFloat(options.infoPoint.lon)
        ) : 
        point;
    
    // create cross-reference(s) and add placemark(s) if any exist
    placemarks.forEach(function(placemark) {
        placemark.item = item;
        // add listener to make placemark open when event is clicked
        placemark.click.addHandler(function() {
            item.openInfoWindow();
        });
        // allow for custom placemark loading
        if (!options.noPlacemarkLoad) {
            if (util.getPlacemarkType(placemark) == 'marker') {
                // add placemark to map
                tm.map.addMarker(placemark);
            } else {
                // add polyline to map
                tm.map.addPolyline(placemark);
            }
            // hide placemarks until the next refresh
            placemark.hide();
        }
    });
    
    /**
     * This item's placemark(s)
     * @name TimeMapItem#placemark
     * @type Marker|Polyline|Array
     */
    item.placemark = placemarks.length == 1 ? placemarks[0] :
        placemarks.length ? placemarks : 
        null;
    
    // getter functions
    
    /**
     * Return this item's native placemark object (specific to map provider;
     * undefined if this item has more than one placemark)
     * @name TimeMapItem#getNativePlacemark
     * @function
     * @return {Object}     The native placemark object (e.g. GMarker)
     */
    item.getNativePlacemark = function() {
        var placemark = item.placemark;
        return placemark && (placemark.proprietary_marker || placemark.proprietary_polyline);
    };
    
    /**
     * Return the placemark type for this item
     * @name TimeMapItem#getType
     * @function
     * 
     * @return {String}     Placemark type
     */
    item.getType = function() { return options.type; };
    
    /**
     * Return the title for this item
     * @name TimeMapItem#getTitle
     * @function
     * 
     * @return {String}     Item title
     */
    item.getTitle = function() { return options.title; };
    
    /**
     * Return the item's "info point" (the anchor for the map info window)
     * @name TimeMapItem#getInfoPoint
     * @function
     * 
     * @return {GLatLng}    Info point
     */
    item.getInfoPoint = function() { 
        // default to map center if placemark not set
        return options.infoPoint || item.map.getCenter();
    };
    
    /**
     * Return the start date of the item's event, if any
     * @name TimeMapItem#getStart
     * @function
     * 
     * @return {Date}   Item start date or undefined
     */
    item.getStart = function() {
        return item.event ? item.event.getStart() : null;
    };
    
    /**
     * Return the end date of the item's event, if any
     * @name TimeMapItem#getEnd
     * @function
     * 
     * @return {Date}   Item end dateor undefined
     */
    item.getEnd = function() {
        return item.event ? item.event.getEnd() : null;
    };
    
    /**
     * Return the timestamp of the start date of the item's event, if any
     * @name TimeMapItem#getStartTime
     * @function
     * 
     * @return {Number}    Item start date timestamp or undefined
     */
    item.getStartTime = function() {
        var start = item.getStart();
        if (start) {
            return start.getTime();
        }
    };
    
    /**
     * Return the timestamp of the end date of the item's event, if any
     * @name TimeMapItem#getEndTime
     * @function
     * 
     * @return {Number}    Item end date timestamp or undefined
     */
    item.getEndTime = function() {
        var end = item.getEnd();
        if (end) {
            return end.getTime();
        }
    };
    
    /**
     * Whether the item is currently selected 
     * (i.e., the item's info window is open)
     * @name TimeMapItem#isSelected
     * @function
     * @return Boolean
     */
    item.isSelected = function() {
        return tm.getSelected() === item;
    };
    
    /**
     * Whether the item is visible
     * @name TimeMapItem#visible
     * @type Boolean
     */
    item.visible = true;
    
    /**
     * Whether the item's placemark is visible
     * @name TimeMapItem#placemarkVisible
     * @type Boolean
     */
    item.placemarkVisible = false;
    
    /**
     * Whether the item's event is visible
     * @name TimeMapItem#eventVisible
     * @type Boolean
     */
    item.eventVisible = true;
    
    /**
     * Open the info window for this item.
     * By default this is the map infoWindow, but you can set custom functions
     * for whatever behavior you want when the event or placemark is clicked
     * @name TimeMapItem#openInfoWindow
     * @function
     */
    item.openInfoWindow = function() {
        options.openInfoWindow.call(item);
        tm.setSelected(item);
    };
    
    /**
     * Close the info window for this item.
     * By default this is the map infoWindow, but you can set custom functions
     * for whatever behavior you want.
     * @name TimeMapItem#closeInfoWindow
     * @function
     */
    item.closeInfoWindow = function() {
        options.closeInfoWindow.call(item);
        tm.setSelected(undefined);
    };
};

TimeMapItem.prototype = {
    /** 
     * Show the map placemark(s)
     */
    showPlacemark: function() {
        // XXX: Special case for overlay image (support for some providers)?
        var item = this,
            f = function(placemark) {
                if (placemark.api) {
                    placemark.show();
                }
            };
        if (item.placemark && !item.placemarkVisible) {
            if (item.getType() == "array") {
                item.placemark.forEach(f);
            } else {
                f(item.placemark);
            }
            item.placemarkVisible = true;
        }
    },

    /** 
     * Hide the map placemark(s)
     */
    hidePlacemark: function() {
        // XXX: Special case for overlay image (support for some providers)?
        var item = this,
            f = function(placemark) {
                if (placemark.api) {
                    placemark.hide();
                }
            };
        if (item.placemark && item.placemarkVisible) {
            if (item.getType() == "array") {
                item.placemark.forEach(f);
            } else {
                f(item.placemark);
            }
            item.placemarkVisible = false;
        }
        item.closeInfoWindow();
    },

    /** 
     * Show the timeline event.
     * NB: Will likely require calling timeline.layout()
     */
    showEvent: function() {
        var item = this,
            event = item.event;
        if (event && !item.eventVisible) {
            // XXX: Use timeline filtering API
            item.timeline.getBand(0)
                .getEventSource()._events._events.add(event);
            item.eventVisible = true;
        }
    },

    /** 
     * Hide the timeline event.
     * NB: Will likely require calling timeline.layout(),
     * AND calling eventSource._events._index()  (ugh)
     */
    hideEvent: function() {
        var item = this,
            event = item.event;
        if (event && item.eventVisible){
            // XXX: Use timeline filtering API
            item.timeline.getBand(0)
                .getEventSource()._events._events.remove(event);
            item.eventVisible = false;
        }
    },

    /** 
     * Scroll the timeline to the start of this item's event
     * @param {Boolean} [animated]      Whether to do an animated scroll, rather than a jump.
     */
    scrollToStart: function(animated) {
        var item = this;
        if (item.event) {
            item.dataset.timemap.scrollToDate(item.getStart(), false, animated);
        }
    },

    /**
     * Get the HTML for the info window, filling in the template if necessary
     * @return {String}     Info window HTML
     */
    getInfoHtml: function() {
        var opts = this.opts,
            html = opts.infoHtml,
            patt = opts.templatePattern,
            match;
        // create content for info window if none is provided
        if (!html) {
            // fill in template
            html = opts.infoTemplate;
            match = patt.exec(html);
            while (match) {
                html = html.replace(match[0], opts[match[1]]||'');
                match = patt.exec(html);
            }
            // cache for future use
            opts.infoHtml = html;
        }
        return html;
    },
    
    /**
     * Determine if this item's event is in the current visible area
     * of the top band of the timeline. Note that this only considers the
     * dates, not whether the event is otherwise hidden.
     * @return {Boolean}    Whether the item's event is visible
     */
    onVisibleTimeline: function() {
        var item = this,
            topband = item.timeline.getBand(0),
            maxVisibleDate = topband.getMaxVisibleDate().getTime(),
            minVisibleDate = topband.getMinVisibleDate().getTime(),
            itemStart = item.getStartTime(),
            itemEnd = item.getEndTime();
        return itemStart !== undefined ? 
            // item is in the future
            itemStart < maxVisibleDate &&
            // item is in the past
            (itemEnd > minVisibleDate || itemStart > minVisibleDate) :
            // item has no start date
            true;
    }

};


/**
 * Standard open info window function, using static text in map window
 */
TimeMapItem.openInfoWindowBasic = function() {
    var item = this,
        html = item.getInfoHtml(),
        ds = item.dataset,
        placemark = item.placemark;
    // scroll timeline if necessary
    if (!item.onVisibleTimeline()) {
        ds.timemap.scrollToDate(item.getStart());
    }
    // open window
    if (item.getType() == "marker" && placemark.api) {
        placemark.setInfoBubble(html);
        placemark.openBubble();
        // deselect when window is closed
        item.closeHandler = placemark.closeInfoBubble.addHandler(function() { 
            // deselect
            ds.timemap.setSelected(undefined);
            // kill self
            placemark.closeInfoBubble.removeHandler(item.closeHandler);
        });
    } else {
        item.map.openBubble(item.getInfoPoint(), html);
        item.map.tmBubbleItem = item;
    }
};

/**
 * Open info window function using ajax-loaded text in map window
 */
TimeMapItem.openInfoWindowAjax = function() {
    var item = this;
    if (!item.opts.infoHtml && item.opts.infoUrl) { // load content via AJAX
        $.get(item.opts.infoUrl, function(result) {
                item.opts.infoHtml = result;
                item.openInfoWindow();
        });
        return;
    }
    // fall back on basic function if content is loaded or URL is missing
    item.openInfoWindow = function() {
        TimeMapItem.openInfoWindowBasic.call(item);
        item.dataset.timemap.setSelected(item);
    };
    item.openInfoWindow();
};

/**
 * Standard close window function, using the map window
 */
TimeMapItem.closeInfoWindowBasic = function() {
    var item = this;
    if (item.getType() == "marker") {
        item.placemark.closeBubble();
    } else {
        if (item == item.map.tmBubbleItem) {
            item.map.closeBubble();
            item.map.tmBubbleItem = null;
        }
    }
};

/*----------------------------------------------------------------------------
 * Utility functions
 *---------------------------------------------------------------------------*/

/**
 * Get XML tag value as a string
 *
 * @param {jQuery} n        jQuery object with context
 * @param {String} tag      Name of tag to look for
 * @param {String} [ns]     XML namespace to look in
 * @return {String}         Tag value as string
 */
TimeMap.util.getTagValue = function(n, tag, ns) {
    return util.getNodeList(n, tag, ns).first().text();
};

/**
 * Empty container for mapping XML namespaces to URLs
 * @example
 TimeMap.util.nsMap['georss'] = 'http://www.georss.org/georss';
 // find georss:point
 TimeMap.util.getNodeList(node, 'point', 'georss')
 */
TimeMap.util.nsMap = {};

/**
 * Cross-browser implementation of getElementsByTagNameNS.
 * Note: Expects any applicable namespaces to be mapped in
 * {@link TimeMap.util.nsMap}.
 *
 * @param {jQuery|XML Node} n   jQuery object with context, or XML node
 * @param {String} tag          Name of tag to look for
 * @param {String} [ns]         XML namespace to look in
 * @return {jQuery}             jQuery object with the list of nodes found
 */
TimeMap.util.getNodeList = function(n, tag, ns) {
    var nsMap = TimeMap.util.nsMap;
    // get context node
    n = n.jquery ? n[0] : n;
    // no context
    return !n ? $() :
        // no namespace
        !ns ? $(tag, n) :
        // native function exists
        (n.getElementsByTagNameNS && nsMap[ns]) ? $(n.getElementsByTagNameNS(nsMap[ns], tag)) :
        // no function, try the colon tag name
        $(n.getElementsByTagName(ns + ':' + tag));
};

/**
 * Make TimeMap.init()-style points from a GLatLng, LatLonPoint, array, or string
 *
 * @param {Object} coords       GLatLng, LatLonPoint, array, or string to convert
 * @param {Boolean} [reversed]  Whether the points are KML-style lon/lat, rather than lat/lon
 * @return {Object}             TimeMap.init()-style point object
 */
TimeMap.util.makePoint = function(coords, reversed) {
    var latlon = null;
    // GLatLng or LatLonPoint
    if (coords.lat && coords.lng) {
        latlon = [coords.lat(), coords.lng()];
    }
    // array of coordinates
    if ($.type(coords)=='array') {
        latlon = coords;
    }
    // string
    if (!latlon) {
        // trim extra whitespace
        coords = $.trim(coords);
        if (coords.indexOf(',') > -1) {
            // split on commas
            latlon = coords.split(",");
        } else {
            // split on whitespace
            latlon = coords.split(/[\r\n\f ]+/);
        }
    }
    // deal with extra coordinates (i.e. KML altitude)
    if (latlon.length > 2) {
        latlon = latlon.slice(0, 2);
    }
    // deal with backwards (i.e. KML-style) coordinates
    if (reversed) {
        latlon.reverse();
    }
    return {
        "lat": $.trim(latlon[0]),
        "lon": $.trim(latlon[1])
    };
};

/**
 * Make TimeMap.init()-style polyline/polygons from a whitespace-delimited
 * string of coordinates (such as those in GeoRSS and KML).
 *
 * @param {Object} coords       String to convert
 * @param {Boolean} [reversed]  Whether the points are KML-style lon/lat, rather than lat/lon
 * @return {Object}             Formated coordinate array
 */
TimeMap.util.makePoly = function(coords, reversed) {
    var poly = [], 
        latlon, x,
        coordArr = $.trim(coords).split(/[\r\n\f ]+/);
    // loop through coordinates
    for (x=0; x<coordArr.length; x++) {
        latlon = (coordArr[x].indexOf(',') > 0) ?
            // comma-separated coordinates (KML-style lon/lat)
            coordArr[x].split(",") :
            // space-separated coordinates - increment to step by 2s
            [coordArr[x], coordArr[++x]];
        // deal with extra coordinates (i.e. KML altitude)
        if (latlon.length > 2) {
            latlon = latlon.slice(0, 2);
        }
        // deal with backwards (i.e. KML-style) coordinates
        if (reversed) {
            latlon.reverse();
        }
        poly.push({
            "lat": latlon[0],
            "lon": latlon[1]
        });
    }
    return poly;
};

/**
 * Format a date as an ISO 8601 string
 *
 * @param {Date} d          Date to format
 * @param {Number} [precision] Precision indicator:<pre>
 *      3 (default): Show full date and time
 *      2: Show full date and time, omitting seconds
 *      1: Show date only
 *</pre>
 * @return {String}         Formatted string
 */
TimeMap.util.formatDate = function(d, precision) {
    // default to high precision
    precision = precision || 3;
    var str = "";
    if (d) {
        var yyyy = d.getUTCFullYear(),
            mo = d.getUTCMonth(),
            dd = d.getUTCDate();
        // deal with early dates
        if (yyyy < 1000) {
            return (yyyy < 1 ? (yyyy * -1 + "BC") : yyyy + "");
        }
        // check for date.js support
        if (d.toISOString && precision == 3) {
            return d.toISOString();
        }
        // otherwise, build ISO 8601 string
        var pad = function(num) {
            return ((num < 10) ? "0" : "") + num;
        };
        str += yyyy + '-' + pad(mo + 1 ) + '-' + pad(dd);
        // show time if top interval less than a week
        if (precision > 1) {
            var hh = d.getUTCHours(),
                mm = d.getUTCMinutes(),
                ss = d.getUTCSeconds();
            str += 'T' + pad(hh) + ':' + pad(mm);
            // show seconds if the interval is less than a day
            if (precision > 2) {
                str += pad(ss);
            }
            str += 'Z';
        }
    }
    return str;
};

/**
 * Determine the SIMILE Timeline version.
 *
 * @return {String}     At the moment, only "1.2", "2.2.0", or what Timeline provides
 */
TimeMap.util.TimelineVersion = function() {
    // Timeline.version support added in 2.3.0
    return Timeline.version ||
        // otherwise check manually
        (Timeline.DurationEventPainter ? "1.2" : "2.2.0");
};

/** 
 * Identify the placemark type of a Mapstraction placemark
 *
 * @param {Object} pm       Placemark to identify
 * @return {String}         Type of placemark, or false if none found
 */
TimeMap.util.getPlacemarkType = function(pm) {
    return pm.constructor == Marker ? 'marker' :
        pm.constructor == Polyline ?
            (pm.closed ? 'polygon' : 'polyline') :
        false;
};

/**
 * Attempt look up a key in an object, returning either the value,
 * undefined if the key is a string but not found, or the key if not a string 
 *
 * @param {String|Object} key   Key to look up
 * @param {Object} map          Object in which to look
 * @return {Object}             Value, undefined, or key
 */
TimeMap.util.lookup = function(key, map) {
    return typeof key == 'string' ? map[key] : key;
};


// add indexOf support for older browsers (simple version, no "from" support)
if (!([].indexOf)) {
    Array.prototype.indexOf = function(el) {
        var a = this,
            i = a.length;
        while (--i >= 0) {
            if (a[i] === el) {
                break;
            }
        }
        return i;
    };
}

// add forEach support for older browsers (simple version, no "this" support)
if (!([].forEach)) {
    Array.prototype.forEach = function(f) {
        var a = this,
            i;
        for (i=0; i < a.length; i++) {
            if (i in a) {
                f(a[i], i, a);
            }
        }
    };
}

/*----------------------------------------------------------------------------
 * Lookup maps
 * (need to be at end because some call util functions on initialization)
 *---------------------------------------------------------------------------*/

/**
 * @namespace
 * Lookup map of common timeline intervals.  
 * Add custom intervals here if you want to refer to them by key rather 
 * than as a function name.
 * @example
    TimeMap.init({
        bandIntervals: "hr",
        // etc...
    });
 *
 */
TimeMap.intervals = {
    /** second / minute */
    sec: [DateTime.SECOND, DateTime.MINUTE],
    /** minute / hour */
    min: [DateTime.MINUTE, DateTime.HOUR],
    /** hour / day */
    hr: [DateTime.HOUR, DateTime.DAY],
    /** day / week */
    day: [DateTime.DAY, DateTime.WEEK],
    /** week / month */
    wk: [DateTime.WEEK, DateTime.MONTH],
    /** month / year */
    mon: [DateTime.MONTH, DateTime.YEAR],
    /** year / decade */
    yr: [DateTime.YEAR, DateTime.DECADE],
    /** decade / century */
    dec: [DateTime.DECADE, DateTime.CENTURY]
};

/**
 * @namespace
 * Lookup map of map types.
 * @example
    TimeMap.init({
        options: {
            mapType: "satellite"
        },
        // etc...
    });
 */
TimeMap.mapTypes = {
    /** Normal map */
    normal: Mapstraction.ROAD, 
    /** Satellite map */
    satellite: Mapstraction.SATELLITE, 
    /** Hybrid map */
    hybrid: Mapstraction.HYBRID,
    /** Physical (terrain) map */
    physical: Mapstraction.PHYSICAL
};

/**
 * @namespace
 * Lookup map of supported date parser functions. 
 * Add custom date parsers here if you want to refer to them by key rather 
 * than as a function name.
 * @example
    TimeMap.init({
        datasets: [
            {
                options: {
                    dateParser: "gregorian"
                },
                // etc...
            }
        ],
        // etc...
    });
 */
TimeMap.dateParsers = {
    
    /**
     * Better Timeline Gregorian parser... shouldn't be necessary :(.
     * Gregorian dates are years with "BC" or "AD"
     *
     * @param {String} s    String to parse into a Date object
     * @return {Date}       Parsed date or null
     */
    gregorian: function(s) {
        if (!s || typeof s != "string") {
            return null;
        }
        // look for BC
        var bc = Boolean(s.match(/b\.?c\.?/i)),
            // parse - parseInt will stop at non-number characters
            year = parseInt(s, 10),
            d;
        // look for success
        if (!isNaN(year)) {
            // deal with BC
            if (bc) {
                year = 1 - year;
            }
            // make Date and return
            d = new Date(0);
            d.setUTCFullYear(year);
            return d;
        }
        else {
            return null;
        }
    },

    /**
     * Parse date strings with a series of date parser functions, until one works. 
     * In order:
     * <ol>
     *  <li>Date.parse() (so Date.js should work here, if it works with Timeline...)</li>
     *  <li>Gregorian parser</li>
     *  <li>The Timeline ISO 8601 parser</li>
     * </ol>
     *
     * @param {String} s    String to parse into a Date object
     * @return {Date}       Parsed date or null
     */
    hybrid: function(s) {
        // in case we don't know if this is a string or a date
        if (s instanceof Date) {
            return s;
        }
        var parsers = TimeMap.dateParsers,
            // try native date parse and timestamp
            d = new Date(typeof s == "number" ? s : Date.parse(parsers.fixChromeBug(s)));
        if (isNaN(d)) {
            if (typeof s == "string") {
                // look for Gregorian dates
                if (s.match(/^-?\d{1,6} ?(a\.?d\.?|b\.?c\.?e?\.?|c\.?e\.?)?$/i)) {
                    d = parsers.gregorian(s);
                } 
                // try ISO 8601 parse
                else {
                    try {
                        d = parsers.iso8601(s);
                    } catch(e) {
                        d = null;
                    }
                }
                // look for timestamps
                if (!d && s.match(/^\d{7,}$/)) {
                    d = new Date(parseInt(s, 10));
                }
            } else {
                return null;
            }
        }
        // d should be a date or null
        return d;
    },
    
    /** 
     * ISO8601 parser: parse ISO8601 datetime strings 
     * @function
     */
    iso8601: DateTime.parseIso8601DateTime,
    
    /** 
     * Clunky fix for Chrome bug: http://code.google.com/p/chromium/issues/detail?id=46703
     * @private
     */
    fixChromeBug: function(s) {
        return Date.parse("-200") == Date.parse("200") ? 
            (typeof s == "string" && s.substr(0,1) == "-" ? null : s) :
            s;
    }
};
 
/**
 * @namespace
 * Pre-set event/placemark themes in a variety of colors. 
 * Add custom themes here if you want to refer to them by key rather 
 * than as a function name.
 * @example
    TimeMap.init({
        options: {
            theme: "orange"
        },
        datasets: [
            {
                options: {
                    theme: "yellow"
                },
                // etc...
            }
        ],
        // etc...
    });
 */
TimeMap.themes = {

    /** 
     * Red theme: <span style="background:#FE766A">#FE766A</span>
     * This is the default.
     *
     * @type TimeMapTheme
     */
    red: new TimeMapTheme(),
    
    /** 
     * Blue theme: <span style="background:#5A7ACF">#5A7ACF</span>
     *
     * @type TimeMapTheme
     */
    blue: new TimeMapTheme({
        icon: GIP + "blue-dot.png",
        color: "#5A7ACF",
        eventIconImage: "blue-circle.png"
    }),

    /** 
     * Green theme: <span style="background:#19CF54">#19CF54</span>
     *
     * @type TimeMapTheme
     */
    green: new TimeMapTheme({
        icon: GIP + "green-dot.png",
        color: "#19CF54",
        eventIconImage: "green-circle.png"
    }),

    /** 
     * Light blue theme: <span style="background:#5ACFCF">#5ACFCF</span>
     *
     * @type TimeMapTheme
     */
    ltblue: new TimeMapTheme({
        icon: GIP + "ltblue-dot.png",
        color: "#5ACFCF",
        eventIconImage: "ltblue-circle.png"
    }),

    /** 
     * Purple theme: <span style="background:#8E67FD">#8E67FD</span>
     *
     * @type TimeMapTheme
     */
    purple: new TimeMapTheme({
        icon: GIP + "purple-dot.png",
        color: "#8E67FD",
        eventIconImage: "purple-circle.png"
    }),

    /** 
     * Orange theme: <span style="background:#FF9900">#FF9900</span>
     *
     * @type TimeMapTheme
     */
    orange: new TimeMapTheme({
        icon: GIP + "orange-dot.png",
        color: "#FF9900",
        eventIconImage: "orange-circle.png"
    }),

    /** 
     * Yellow theme: <span style="background:#FF9900">#ECE64A</span>
     *
     * @type TimeMapTheme
     */
    yellow: new TimeMapTheme({
        icon: GIP + "yellow-dot.png",
        color: "#ECE64A",
        eventIconImage: "yellow-circle.png"
    }),

    /** 
     * Pink theme: <span style="background:#E14E9D">#E14E9D</span>
     *
     * @type TimeMapTheme
     */
    pink: new TimeMapTheme({
        icon: GIP + "pink-dot.png",
        color: "#E14E9D",
        eventIconImage: "pink-circle.png"
    })
};

// save to window
window.TimeMap = TimeMap;
window.TimeMapFilterChain = TimeMapFilterChain;
window.TimeMapDataset = TimeMapDataset;
window.TimeMapTheme = TimeMapTheme;
window.TimeMapItem = TimeMapItem;

})();/*
 * Timemap.js Copyright 2010 Nick Rabinowitz.
 * Licensed under the MIT License (see LICENSE.txt)
 */

/**
 * @fileOverview
 * This file defines the Param class, which is used to get, set, and serialize
 * different fields on TimeMap and TimeMapItem objects.
 *
 * @author Nick Rabinowitz (www.nickrabinowitz.com)
 */

// save a few bytes
(function() {

/**
 * @name TimeMap.params
 * @namespace Namespace for parameter classes
 */
var params = TimeMap.params = {
    /**
     * @class
     * A parameter, with methods to get, set, and serialize the current value.
     *
     * @constructor
     * @param {String} paramName        String name of the parameter
     * @param {Object} options          Container for named arguments
     * @param {String} [sourceName]             String name of the source element, if different
     * @param {Function} [options.get]          Function to get the current param value
     * @param {Function} [options.set]          Function to set the param to a new value
     * @param {Function} [options.setConfig]    Function to set a new value in a config object
     * @param {Function} [options.fromStr]      Function to parse the value from a string
     * @param {Function} [options.toStr]        Function to serialize the current value to a string
     * @param {Function} [options.setConfigXML] Function to parse the value from an XML node and set to config
     */
    Param: function(paramName, options) {
        var param = this;
        options = options || {};
        
        /**
         * String name of this param
         * @name TimeMap.params.Param#paramName
         * @type String
         */
        param.paramName = paramName;
        
        /**
         * String name of the source element, if different
         * @name TimeMap.params.Param#sourceName
         */
        param.sourceName = options.sourceName || paramName;
    
        /**
         * Get the current state value from a TimeMap or TimeMapItem object
         * @name TimeMap.params.Param#get
         * @function
         *
         * @param {TimeMap|TimeMapItem} o       Object to inspect
         * @return {mixed}                      Current state value
         */
        param.get = options.get;
        
        /**
         * Set the current state value on a TimeMap or TimeMapItem object
         * @name TimeMap.params.Param#set
         * @function
         *
         * @param {TimeMap|TimeMapItem} o       Object to modify
         * @param {mixed} value                 Value to set
         */
        param.set = options.set;
        
        /**
         * Set a new value on a config object for TimeMap.init()
         * @name TimeMap.params.Param#setConfig
         * @function
         * @see TimeMap.init
         *
         * @param {Object} config   Config object to modify
         * @param {mixed} value     Value to set
         */
        param.setConfig = options.setConfig || function(config, value) {
            // default: set at top level
            config[paramName] = value;
        };
        
        /**
         * Parse a state value from a string
         * @name TimeMap.params.Param#fromString
         * @function
         *
         * @param {String} s        String to parse
         * @return {mixed}          Current state value
         */
        param.fromString = options.fromStr || function(s) {
            // default: param is a string
            return s;
        };
        
        /**
         * Serialize a state value as a string
         * @name TimeMap.params.Param#toString
         * @function
         *
         * @param {mixed} value     Value to serialize
         * @return {String}         Serialized string
         */
        param.toString = options.toStr || function(value) {
            // default: use the built-in string method
            return value.toString();
        };
        
        /**
         * Get the current value as a string
         * @name TimeMap.params.Param#getString
         * @function
         * 
         * @param {TimeMap|TimeMapItem} o       Object to inspect
         */
        param.getString = function(o) {
            param.toString(param.get(o));
        };
        
        /**
         * Set the current state value from a string
         * @name TimeMap.params.Param#setString
         * @function
         * 
         * @param {TimeMap|TimeMapItem} o       Object to modify
         * @param {String} s                    String version of value to set
         */
        param.setString = function(o, s) {
            param.set(o, param.fromString(s));
        };
        
        /**
         * Set a config object based on an XML tag
         * @name TimeMap.params.Param#setConfigXML
         * @function
         * 
         * @param {Object} config       Config object to modify
         * @param {XML NodeList} node   Parent node of the desired tag
         */
        param.setConfigXML = options.setConfigXML || function(config, node) {
            var tagName = param.sourceName,
                nameParts = tagName.split(':'), 
                ns; 
            // deal with namespaced tags
            if (nameParts.length > 1) {
                tagName = nameParts[1];
                ns = nameParts[0];
            }
            // set to config
            param.setConfig(config, TimeMap.util.getTagValue(node, tagName, ns));
        };
    },

    /**
     * @class
     * A convenience class for those parameters which deal with a value
     * in the options of a TimeMap or TimeMapItem object, setting some
     * additional default functions.
     *
     * @augments TimeMap.params.Param
     *
     * @constructor
     * @param {String} paramName        String name of the option parameter
     * @param {Object} [options]        Container for named arguments (see {@link TimeMap.params.Param})
     */
    OptionParam: function(paramName, options) {
        options = options || {};
        var defaults = {
            
            /**
             * Get the current state value from the opts object of a TimeMap or TimeMapItem
             * @name TimeMap.params.OptionParam#get
             * @function
             *
             * @param {TimeMap|TimeMapItem} o       Object to inspect
             * @return {mixed}                      Current state value
             */
            get: function(o) {
                return o.opts[paramName];
            },
            
            /**
             * Set the state value in the opts object of a TimeMap or TimeMapItem
             * @name TimeMap.params.OptionParam#set
             *
             * @param {TimeMap|TimeMapItem} o       Object to modify
             * @param {mixed} value                 Value to set
             */
            set: function(o, value) {
                o.opts[paramName] = value;
            },
            
            /**
             * Set a new value on a config object for TimeMap.init() or a particular item
             * @name TimeMap.params.OptionParam#setConfig
             * @function
             *
             * @param {Object} config   Config object to modify
             * @param {mixed} value     Value to set
             */
            setConfig: function(config, value) {
                config.options = config.options || {};
                config.options[paramName] = value;
            }
            
        };
        options = $.extend(defaults, options);
        return new params.Param(paramName, options);
    }
};


/*----------------------------------------------------------------------------
 * TimeMapItem params
 *---------------------------------------------------------------------------*/

/**
 * @namespace Namespace for parameters used for loading data into a TimeMapItem 
 * object. Because these are intended for loading, only setConfig is defined.
 */
TimeMap.loaders.base.prototype.params = {
    /**
     * Item title
     * @type TimeMap.params.Param
     */
    title: new params.Param("title"),
    
    /**
     * Item start date
     * @type TimeMap.params.Param
     */
    start: new params.Param("start"),
    
    /**
     * Item end date
     * @type TimeMap.params.Param
     */
    end: new params.Param("end"),
    
    /**
     * Item description
     * @type TimeMap.params.OptionParam
     */
    description: new params.OptionParam("description"),
    
    /**
     * Item latitude
     * @type TimeMap.params.Param
     */
    lat: new params.Param("lat", {
        setConfig: function(config, value) {
            config.point = config.point || {};
            config.point.lat = value;
        }
    }),
    
    /**
     * Item longitude
     * @type TimeMap.params.Param
     */
    lon: new params.Param("lon", {
        setConfig: function(config, value) {
            config.point = config.point || {};
            config.point.lon = value;
        }
    })
};

})();
/*
 * Timemap.js Copyright 2010 Nick Rabinowitz.
 * Licensed under the MIT License (see LICENSE.txt)
 */

/**
 * @fileOverview
 * Functions in this file are used to set the timemap state programmatically,
 * either in a script or from the url hash.
 *
 * @requires param.js
 *
 * @author Nick Rabinowitz (www.nickrabinowitz.com)
 */
 
// save a few bytes
(function() {

/*----------------------------------------------------------------------------
 * State namespace, with setters, serializers, and url functions
 *---------------------------------------------------------------------------*/

var paramNS = TimeMap.params,

    /**
     * @name TimeMap.state
     * @namespace Namespace for static state functions used to 
     * set the timemap state programmatically, either in a script or 
     * from the url hash.
     * @see <a href="../../examples/state.html#zoom=8&center=44.04811573082351,13.29345703125&date=1500-01-21T12:17:37Z&selected=0">State Example</a>
     */
    stateNS = TimeMap.state = {
    
    /**
     * Get the state parameters from the URL, returning as a config object
     * 
     * @return {Object}             Object with state config settings
     */
    fromUrl: function() {
        var pairs = location.hash.substring(1).split('&'),
            params = stateNS.params,
            state = {};
        pairs.forEach(function(pair) {
            var kv = pair.split('=');
            if (kv.length > 1) {
                key = kv[0];
                if (key && key in params) {
                    state[key] = params[key].fromString(decodeURI(kv[1]));
                }
            }
        });
        return state;
    },
    
    /**
     * Make a parameter string from a state object
     *
     * @param {Object} state        Object with state config settings
     * @return {String}             Parameter string in URL param format
     */
    toParamString: function(state) {
        var params = stateNS.params, 
            paramArray = [], 
            key;
        // go through each key in state
        for (key in state) {
            if (state.hasOwnProperty(key)) {
                if (key in params) {
                    paramArray.push(key + "=" + encodeURI(params[key].toString(state[key])));
                }
            }
        }
        return paramArray.join("&");
    },
    
    /**
     * Make a full URL from a state object
     *
     * @param {Object} state        Object with state config settings
     * @return {String}             Full URL with parameters
     */
    toUrl: function(state) {
        var paramString = stateNS.toParamString(state),
            url = location.href.split("#")[0];
        return url + "#" + paramString;
    },
    
    /**
     * Set state settings on a config object for TimeMap.init()
     * @see TimeMap.init
     *
     * @param {Object} config       Config object for TimeMap.init(), modified in place
     * @param {Object} state        Object with state config settings
     */
    setConfig: function(config, state) {
        var params = stateNS.params,
            key;
        for (key in state) {
            if (state.hasOwnProperty(key)) {
                if (key in params) {
                    params[key].setConfig(config, state[key]);
                }
            }
        }
    },
    
    /**
     * Set state settings on a config object for TimeMap.init() using
     * parameters in the URL. Note that as of Timemap.js v.1.6, this
     * will run automatically if state functions are present.
     * @see TimeMap.init
     * @example
 // set up the config object
 var config = {
    // various settings, as usual for TimeMap.init()
 };
 
 // get state settings from the URL, e.g.:
 // http://www.example.com/mytimemap.html#zoom=4&selected=1
 TimeMap.state.setConfigFromUrl(config);
 
 // initialize TimeMap object
 var tm = TimeMap.init(config);
     *
     * @param {Object} config       Config object for TimeMap.init()
     */
    setConfigFromUrl: function(config) {
        stateNS.setConfig(config, stateNS.fromUrl());
    }

};

/*----------------------------------------------------------------------------
 * TimeMap object methods
 *---------------------------------------------------------------------------*/

/**
 * Set the timemap state with a set of configuration options.
 *
 * @param {Object} state    Object with state config settings
 */
TimeMap.prototype.setState = function(state) {
    var params = stateNS.params,
        key;
    // go through each key in state
    for (key in state) {
        if (state.hasOwnProperty(key)) {
            if (key in params) {
                // run setter function with config value
                params[key].set(this, state[key]);
            }
        }
    }
};

/**
 * Get a configuration object of state variables
 *
 * @return {Object}     Object with state config settings
 */
TimeMap.prototype.getState = function() {
    var state = {},
        params = stateNS.params,
        key;
    // run through params, adding values to state
    for (key in params) {
        if (params.hasOwnProperty(key)) {
            // get state value
            state[key] = params[key].get(this);
        }
    }
    return state;
};

/**
 * Initialize state tracking based on URL. 
 * Note: continuous tracking will only work
 * on browsers that support the "onhashchange" event.
 */
TimeMap.prototype.initState = function() {   
    var tm = this;
    tm.setStateFromUrl();
    window.onhashchange = function() {
        tm.setStateFromUrl();
    };
};

/**
 * Set the timemap state with parameters in the URL
 */
TimeMap.prototype.setStateFromUrl = function() {
    this.setState(stateNS.fromUrl());
};

/**
 * Get current state parameters serialized as a hash string
 *
 * @return {String}     State parameters serialized as a hash string
 */
TimeMap.prototype.getStateParamString = function() {
    return stateNS.toParamString(this.getState());
};

/**
 * Get URL with current state parameters in hash
 *
 * @return {String}     URL with state parameters
 */
TimeMap.prototype.getStateUrl = function() {
    return stateNS.toUrl(this.getState());
};


/*----------------------------------------------------------------------------
 * State parameters
 *---------------------------------------------------------------------------*/

/**
 * @namespace
 * Namespace for state parameters, each with a set of functions to set and serialize values.
 * Add your own Param objects to this namespace to get and set additional state variables.
 */
TimeMap.state.params = {
        
        /**
         * Map zoom level
         * @type TimeMap.params.Param
         */
        zoom: new paramNS.OptionParam("mapZoom", {
            get: function(tm) {
                return tm.map.getZoom();
            },
            set: function(tm, value) {
                tm.map.setZoom(value);
            },
            fromStr: function(s) {
                return parseInt(s, 10);
            }
        }),
        
        /**
         * Map center
         * @type TimeMap.params.Param
         */
        center: new paramNS.OptionParam("mapCenter", {
            get: function(tm) {
                return tm.map.getCenter();
            },
            set: function(tm, value) {
                tm.map.setCenter(value);
            },
            fromStr: function(s) {
                var params = s.split(",");
                if (params.length < 2) {
                    // give up
                    return null;
                }
                return new mxn.LatLonPoint(
                    parseFloat(params[0]),
                    parseFloat(params[1])
                );
            },
            toStr: function(value) {
                return value.lat + "," + value.lng;
            }
        }),
        
        /**
         * Timeline center date
         * @type TimeMap.params.Param
         */
        date: new paramNS.Param("scrollTo", {
            get: function(tm) {
                return tm.timeline.getBand(0).getCenterVisibleDate();
            },
            set: function(tm, value) {
                tm.scrollToDate(value);
            },
            fromStr: function(s) {
                return TimeMap.dateParsers.hybrid(s);
            },
            toStr: function(value) {
                return TimeMap.util.formatDate(value);
            }
        }),
        
        /**
         * Index of selected/open item, if any
         * @type TimeMap.params.Param
         */
        selected: new paramNS.OptionParam("selected", {
            set: function(tm, value) {
                var ds = value && tm.datasets[value.dataset],
                    item;
                if (ds) {
                    item = ds.getItems()[value.index];
                    if (item) {
                        item.openInfoWindow();
                    }
                }
            },
            // this will return a value suitable for set(),
            // but it won't return the item itself.
            fromStr: function(s) {
                if (s) {
                    var i = s.lastIndexOf('-'), 
                        dsid, idx;
                    if (i >= 0) {
                        return {
                            dataset: s.substr(0,i),
                            index: parseInt(s.substr(i+1))
                        };
                    }
                }
            },
            toStr: function(item) {
                // serialize with dataset and index
                var ds = item && item.dataset;
                return item ? ds.id + '-' + ds.items.indexOf(item) : '';
            }
        })
};

})();
/* 
 * Timemap.js Copyright 2010 Nick Rabinowitz.
 * Licensed under the MIT License (see LICENSE.txt)
 */

/**
 * @fileOverview
 * Progressive loader
 *
 * @author Nick Rabinowitz (www.nickrabinowitz.com)
 */
 
// for JSLint
/*global TimeMap */

/**
 * @class
 * Progressive loader class - basically a wrapper for another remote loader that can
 * load data progressively by date range, depending on timeline position.
 *
 * <p>The progressive loader can take either another loader or parameters for 
 * another loader. It expects a loader with a "url" attribute including placeholder
 * strings [start] and [end] for the start and end dates to retrieve. The assumption 
 * is that the data service can take start and end parameters and return the data for 
 * that date range.</p>
 *
 * @example
TimeMap.init({
    datasets: [
        {
            title: "Progressive JSONP Dataset",
            type: "progressive",
            options: {
                type: "jsonp",
                url: "http://www.test.com/getsomejson.php?start=[start]&end=[end]callback="
            }
        }
    ],
    // etc...
});
 *
 * @example
TimeMap.init({
    datasets: [
        {
            title: "Progressive KML Dataset",
            type: "progressive",
            options: {
                loader: new TimeMap.loaders.kml({
                    url: "/mydata.kml?start=[start]&end=[end]"
                })
            }
        }
    ],
    // etc...
}); 
 * @see <a href="../../examples/progressive.html">Progressive Loader Example</a>
 *
 * @constructor
 * @param {Object} options          All options for the loader
 * @param {TimeMap.loaders.remote} [options.loader] Instantiated loader class (overrides "type")
 * @param {String} [options.type]                   Name of loader class to use
 * @param {String|Date} options.start               Start of initial date range, as date or string
 * @param {Number} options.interval                 Size in milliseconds of date ranges to load at a time
 * @param {String|Date} [options.dataMinDate]       Minimum date available in data (optional, will avoid
 *                                                  unnecessary service requests if supplied)
 * @param {String|Date} [options.dataMaxDate]       Maximum date available in data (optional, will avoid
 *                                                  unnecessary service requests if supplied)
 * @param {Function} [options.formatUrl]            Function taking (urlTemplate, start, end) and returning
 *                                                  a URL formatted as needed by the service
 * @param {Function} [options.formatDate={@link TimeMap.util.formatDate}]           
 *                                                  Function to turn a date into a string formatted
 *                                                  as needed by the service
 * @param {mixed} [options[...]]                    Other options needed by the "type" loader
 */
TimeMap.loaders.progressive = function(options) {
    // get loader
    var loader = options.loader, 
        type = options.type;
    if (!loader) {
        // get loader class
        var loaderClass = (typeof(type) == 'string') ? TimeMap.loaders[type] : type;
        loader = new loaderClass(options);
    }
    
    // save loader attributes
    var baseUrl = loader.opts.url, 
        baseLoadFunction = loader.load,
        interval = options.interval,
        formatDate = options.formatDate || TimeMap.util.formatDate,
        formatUrl = options.formatUrl || function(url, start, end) {
            return url
                .replace('[start]', formatDate(start))
                .replace('[end]', formatDate(end));
        },
        parseDate = TimeMap.dateParsers.hybrid,
        zeroDate = parseDate(options.start), 
        dataMinDate = parseDate(options.dataMinDate), 
        dataMaxDate = parseDate(options.dataMaxDate),
        loaded = {};
    
    // We don't start with a TimeMap reference, so we need
    // to stick the listener in on the first load() call
    var addListener = function(dataset) {
        var band = dataset.timemap.timeline.getBand(0);
        // add listener
        band.addOnScrollListener(function() {
            // determine relevant blocks
            var now = band.getCenterVisibleDate(),
                currBlock = Math.floor((now.getTime() - zeroDate.getTime()) / interval),
                currBlockTime = zeroDate.getTime() + (interval * currBlock),
                nextBlockTime = currBlockTime + interval,
                prevBlockTime = currBlockTime - interval,
                // no callback necessary?
                callback = function() {
                    dataset.timemap.timeline.layout();
                };
            
            // is the current block loaded?
            if ((!dataMaxDate || currBlockTime < dataMaxDate.getTime()) &&
                (!dataMinDate || currBlockTime > dataMinDate.getTime()) &&
                !loaded[currBlock]) {
                // load it
                // console.log("loading current block (" + currBlock + ")");
                loader.load(dataset, callback, new Date(currBlockTime), currBlock);
            }
            // are we close enough to load the next block, and is it loaded?
            if (nextBlockTime < band.getMaxDate().getTime() &&
                (!dataMaxDate || nextBlockTime < dataMaxDate.getTime()) &&
                !loaded[currBlock + 1]) {
                // load next block
                // console.log("loading next block (" + (currBlock + 1) + ")");
                loader.load(dataset, callback, new Date(nextBlockTime), currBlock + 1);
            }
            // are we close enough to load the previous block, and is it loaded?
            if (prevBlockTime > band.getMinDate().getTime() &&
                (!dataMinDate || prevBlockTime > dataMinDate.getTime()) &&
                !loaded[currBlock - 1]) {
                // load previous block
                // console.log("loading prev block (" + (currBlock - 1)  + ")");
                loader.load(dataset, callback, new Date(prevBlockTime), currBlock - 1);
            }
        });
        // kill this function so that listener is only added once
        addListener = false;
    };
    
    /**
     * Load data based on current time
     * @name TimeMap.loaders.progressive#load
     * @function
     * @param {TimeMapDataset} dataset      Dataset to load data into
     * @param {Function} callback           Callback to execute when data is loaded
     * @param {Date} start                  Start date to load data from
     * @param {Number} currBlock            Index of the current time block
     */
    loader.load = function(dataset, callback, start, currBlock) {
        // set start date, defaulting to zero date
        start = parseDate(start) || zeroDate;
        // set current block, defaulting to 0
        currBlock = currBlock || 0;
        // set end by interval
        var end = new Date(start.getTime() + interval);
        
        // set current block as loaded
        // XXX: Failed loads will give a false positive here...
        // but I'm not sure how else to avoid multiple loads :(
        loaded[currBlock] = true;
        
        // put dates into URL
        loader.opts.url = formatUrl(baseUrl, start, end);
        
        // load data
        baseLoadFunction.call(loader, dataset, function() {
            // add onscroll listener if not yet done
            if (addListener) {
                addListener(dataset);
            }
            // run callback
            callback();
        });
    };
    
    return loader;
};
/*!
 * Copyright (c) 2011, Nick Rabinowitz / Google Ancient Places Project
 * Licensed under the BSD License (see LICENSE.txt)
 */

/**
 * @namespace
 * The spf namespace includes all Backbone-SPF functionality.
 * Get it in your app by extending your namespace with this one.
 */
(function(Backbone, window) {
    var spf = window.spf = {},
        hasRequire = typeof define == 'function' && define.amd,
        // default application settings
        config = spf.config = {
            appElement: 'body',
            views: {},
            cacheViews: false
        },
        ensureArray = function(a) {
            return a===undefined ? [] : _.isArray(a) ? a : [a]
        },
        elementInDom = function(el) {
            while (el && (el = el.parentNode)) if (el === document) return true; 
            return false; 
        },
        identity = _.identity,
        addClasses = function() {
            return _(arguments).filter(identity).join(' ')
        },
        viewCache = {},
        routerCache = {},
        stateParams = {},
        BackboneView = Backbone.View,
        BackboneModel = Backbone.Model,
        State, state,
        View, Layout,
        Router, StateRouter;
        
    // --------------------------------
    // Application State
    // --------------------------------
    
    /**
     * @name spf.State
     * @class
     * Model to hold application state.
     */
    State = spf.State = BackboneModel.extend({
        // (de)serialization functions
        deserialize: function(key, value) {
            var f = stateParams[key] && stateParams[key].deserialize || identity;
            return f(value);
        },
        serialize: function(key, value) {
            var f = stateParams[key] && stateParams[key].serialize || identity;
            return f(value);
        },
        // set a serialized value
        setSerialized: function(key, value, options) {
            this.set(key, this.deserialize(key, value), options);
        },
        // get a serialized value
        getSerialized: function(key) {
            var val = this.get(key);
            return val !== undefined && this.serialize(key, val);
        },
        // override set() to deserialize if required
        set: function(key, value, options) {
            var state = this,
                attrs;
            // support both (key, value) and ({key:value})
            if (_.isObject(key)) {
                attrs = key;
                options = value;
            } else {
                attrs = {};
                attrs[key] = value;
            }
            // try to deserialize any strings
            _(attrs).each(function(v, k) {
                if (_.isString(v)) attrs[k] = state.deserialize(k, v);
            });
            BackboneModel.prototype.set.call(state, attrs, options);
        }
    });
    
    // initialize singleton
    state = spf.state = new State();
    
    // --------------------------------
    // View classes
    // --------------------------------
    
    /**
     * @name spf.View
     * @class
     * Extend the base view class with some useful features
     */
    View = spf.View = BackboneView.extend({
    
        // deal with templates and flag whether the element exists in the DOM on initialization
        _ensureElement: function() {
            var view = this,
                templateSelector = 'script[type*="template"]',
                el = view.el,
                templateId,
                parent, parentEl;
            BackboneView.prototype._ensureElement.call(view);
            // handle reusable template content
            if (view.$el.is(templateSelector)) {
                view.template = view.$el.html();
                templateId = view.$el.attr('id'),
                    attrs = _.extend({}, {
                        'class': addClasses(view.className, templateId),
                        'id': view.id
                    }, view.attributes);
                view.setElement(view.make(view.tagName, attrs));
            } else if ((templateId = view.template) && $(templateId).is(templateSelector)) {
                view.className = addClasses(view.className, templateId);
                view.template = $(view.template).html();
            }
            // handle children of parents not yet in DOM
            if (!view.el 
                && el 
                && (parent = view.options.parent)
                && (parentEl = parent.el)
                && (el = $(el, parentEl)[0])) {
                view.setElement(el);
                view.inDom = true;
            } 
            // otherwise, check whether we're already in the DOM
            else view.inDom = elementInDom(view.el);
        },
        
        // bind/unbind state listeners
        bindState: function(event, handler, context) {
            // create handler array if necessary
            if (!this._stateHandlers) {
                this._stateHandlers = [];
            }
            state.on(event, handler, context);
            this._stateHandlers.push({ event: event, handler: handler, context: context });
        },
        
        unbindState: function() {
            (this._stateHandlers || []).forEach(function(h) {
                state.off(h.event, h.handler, h.context);
            });
        },
        
        // basic clear support
        clear: function() {
            var view = this;
            // empty, remove, or don't touch DOM
            if (view.inDom) {
                if (view.clearDom) view.$el.empty();
            }
            else view.remove();
            view.unbindState();
            view.undelegateEvents();
            return view;
        },
        
        // set to false in subclasses to leave the DOM alone
        clearDom: true,
        
        // passthrough by default
        ready: function(callback) {
            callback();
        },
        
        // decorator: function called only when the view is ready
        bindReady: function(callback) {
            var view = this,
                f = typeof callback == 'function' ? callback :
                    // otherwise, assume it's a method name on the view
                    _.bind(view[callback], view);
            return function() { view.ready(f); };
        }
    });
    
    /**
     * @name spf.Layout
     * @class
     * Layout for a full-screen view. In general, Layouts should be relatively static,
     * with UI controls and complex view logic handled in the slot views.
     * @extends spf.View
     */
    Layout = spf.Layout = View.extend({
        
        initialize: function() {
            var view = this,
                refreshOn = view.refreshOn;
            // init slots
            view.slots = {};
            // bind state for refresh events
            if (refreshOn) {
                ensureArray(refreshOn).forEach(function(event) {
                    view.bindState(event, view.refresh, view);
                });
            }
        },
        
        /**
         * Clear this layout
         */
        clear: function() {
            var view = this;
            view.clearSlots();
            view.unbindResize();
            View.prototype.clear.call(view);
        },
        
        clearDom: false,
        
        /**
         * Clear slot views
         */
        clearSlots: function() {
            _(this.slots).each(function(slot) {
                slot.clear();
            });
            this.slots = {};
        },
        
        /**
         * Refresh all slots
         */
        refresh: function() {
            this.clearSlots();
            this.updateSlots();
        },
        
        /**
         * Render view
         */
        render: function() {
            var view = this;
            if (view.template) view.$el.html(view.template);
            view.updateSlots();
            view.bindResize();
            return this;
        },
        
        /**
         * Instantiate new slot views. If there's a DOM element in the
         * layout with the same name as the slot key, the slot view
         * will be appended to that element.
         */
        updateSlots: function() {
            var view = this,
                slotCount = _.reduce(view.slotConfig, function(count, slotConfig) {
                    return count + ensureArray(slotConfig).length;
                }, 0),
                layoutAfter = _.after(slotCount, function() {
                    // appears to be necessary for some view refreshes
                    setTimeout(function() {
                        view.layout(); 
                    }, 0);
                });
            _(view.slotConfig).each(function(slotConfig, key) {
                var order = [];
                // handle arrays
                ensureArray(slotConfig).forEach(function(slotConfig, i) {
                    // process config
                    processViewConfig(slotConfig, view.depth+1, function(slotConfig) {
                        // instantiate slots
                        var slot = view.slots[key] = new slotConfig.layout({ 
                                parent: view
                            }),
                            $parent, $prev;
                        // render, optionally waiting for models to load
                        slot.ready(function() {
                            slot.render();
                            layoutAfter();
                        });
                        // add to DOM, dealing with async order issues
                        if (!slot.inDom) {
                            order[i] = slot.el;
                            $parent = key == 'this' ? view.$el : view.$(key);
                            var $prev = $parent
                                .children()
                                .filter(function() {
                                    return order.indexOf(this) < i
                                })
                                .last();
                            if ($prev[0]) slot.$el.insertAfter($prev); 
                            else $parent.prepend(slot.el);
                        }
                    });
                });
            });
        },
        
        /**
         * Bind layout() to window resize
         * @param {Function} [cb=layout]   Callback function (defaults to this.layout)
         */
        bindResize: function(cb) {
            // create handler array if necessary
            if (!this._resizeHandlers) {
                this._resizeHandlers = [];
            }
            var view = this,
                callback = cb || function() { view.layout() },
                handler = function() {
                    callback();
                };
            view._resizeHandlers.push(handler);
            $(window).resize(handler);
        },
        
        /**
         * Unbind all of this views handlers on window.resize
         */
        unbindResize: function() {
            (this._resizeHandlers || []).forEach(function(h) {
                $(window).unbind('resize', h);
            });
        },
        
        /**
         * Function to handle DOM layout (e.g. sizing elements to fit window).
         * Defaults to a no-op; override in subclasses
         */
        layout: $.noop
    
    });
    
    /**
     * @name spf.AppView
     * @class
     * Primary view for the application
     */
    spf.AppView = BackboneView.extend({
        
        initialize: function() {
            var app = this;
            app.globals = [];
            // initialize global views
            ensureArray(config.globalViews).forEach(function(globalView) {
                processViewConfig(globalView, -1, function(globalConfig) {
                    app.globals.push(new globalConfig.layout({ parent: app }));
                });
            });
            // listen for state changes
            state.bind('change:view', app.updateView, app);
        },
        
        dropView: function(key) {
            var view = viewCache[key];
            if (view) {
                view.clear();
                delete viewCache[key];
            }
        },
        
        // update the top-level layout
        updateView: function(refresh) {
            var app = this,
                viewKey = state.get('view'),
                oldKey = state.previous('view'),
                oldView = app.currentView,
                viewKeys, viewConfig,
                view, viewClass, fromRight;
            // callback
            function swapViews(view) {
                app.currentView = view;
                // work out left/right
                viewKeys = _(config.views).keys();
                fromRight = oldKey ? 
                    viewKeys.indexOf(oldKey) < viewKeys.indexOf(viewKey) :
                    true;
                // close old view
                if (oldView) app.close(oldView, fromRight, 
                    config.cacheViews ? $.noop : function() { oldView.clear() });
                // open new view
                app.open(view, fromRight);
            }
            if (viewKey !== undefined && (viewKey !== oldKey || refresh)) {
                // look in cache
                view = config.cacheViews && viewCache[viewKey];
                if (!view) {
                    // no cache - get view class from config and instantiate
                    processViewConfig(config.views[viewKey], 0, function(viewConfig) {
                        viewClass = viewConfig && viewConfig.layout;
                        if (viewClass) {
                            // instantiate and add to DOM
                            view = viewCache[viewKey] = new viewClass({ parent: app });
                            view.render();
                            if (!view.inDom) view.$el.appendTo(app.el);
                        } else {
                            // this should only happen due to a coding error
                            throw "No view class found for view " + viewKey;
                        }
                        swapViews(view);
                    });
                } else swapViews(view);
            }
        },
        
        open: function(view, fromRight) {
            view.$el.show();
        },
        
        close: function(view, fromRight, callback) {
            view.$el.hide();
            callback();
        }
    });
    
    // --------------------------------
    // Router classes
    // --------------------------------
    
    /**
     * @name spf.Router
     * @class
     * Core router
     */
    Router = spf.Router = Backbone.Router.extend({
    
        /**
         * Get the route string for the current route
         */
        getRoute: function() {
            // (override in subclasses)
            return '';
        },
        
        /**
         * Update the url based on the current state
         */
        updateRoute: function() {
            this.navigate(this.getRoute());
        },
        
        /** 
         * Update the url if this router is responsible for the current view
         */
        updateViewRoute: function() {
            if (this.viewKey && this.viewKey == state.get('view')) {
                this.updateRoute();
            }
        }
        
    });
    
    /**
     * @name spf.StateRouter
     * @class
     * Router class that supports a simple syntax for routes that update state
     */
    StateRouter = spf.StateRouter = Router.extend({
        
        initialize: function() {
            var router = this,
                viewKey = router.viewKey,
                routeStrings = router.routeStrings,
                stateParams = [],
                // look for routes in options, or default to view key
                routeEntries =  router.routeEntries = ensureArray(routeStrings || viewKey)
                    .map(function(r) {
                        // get state variables
                        var params = (r.match(/:\w+/g) || [])
                            .map(function(s) { return s.substr(1) });
                        // add to listener list
                        stateParams = _.union(stateParams, params);
                        // return entry object
                        return { route: r, params: params }
                    });
            // set up routes
            _(routeEntries).each(function(e) {
                var r = e.route,
                    params = e.params;
                // add route
                router.route(r, r, function() {
                    var args = Array.prototype.slice.call(arguments);
                    args = params.reduce(function(agg, p, i) {
                        agg[p] = args[i];
                        return agg;
                    }, {});
                    // update state parameters
                    params.forEach(function(p) {
                        state.setSerialized(p, args[p]);
                    });
                    // null out missing params
                    _.difference(stateParams, params).forEach(function(p) {
                        state.unset(p);
                    });
                    // update view
                    state.set({ view: viewKey });
                });
            });
            // listen for state changes
            stateParams.forEach(function(param) {
                state.on('change:' + param, router.updateViewRoute, router);
            });
        },
        
        getRoute: function() {
            // get the route with the most non-null state vars
            var route = _.sortBy(
                _(this.routeEntries)
                    .filter(function(e) {
                        var params = e.params,
                            i, val;
                        e.rendered = e.route;
                        // look for missing state vars, replacing on the way
                        for (i=0; i<params.length; i++) {
                            val = state.get(params[i]);
                            // missing, don't include
                            if (!val) return false;
                            // otherwise, update the route
                            e.rendered = e.rendered.replace(':' + params[i], val);
                        } 
                        return true;
                    }),
                function(e) {
                    return e.params.length
                }
            ).pop();
            return route && route.rendered;
        }
        
    });
    
    /**
     * @name spf.AppRouter
     * @class
     * Primary router for the application
     */
    spf.AppRouter = Router.extend({
    
        initialize: function() {
            var router = this;
            router.cache = routerCache;
            // instantiate routers
            _(config.views).each(function(viewConfig, k) {
                routerCache[k] = new viewConfig.router();
            });
            // set up history to catch querystrings
            Backbone.history.getFragment = function() {
                var fragment = Backbone.History.prototype.getFragment.apply(this, arguments),
                    // intercept and get querystring
                    parts = fragment.split('?'),
                    qs = parts[1];
                if (qs) {
                    router.parseQS(qs);
                }
                return parts[0];
            };
            // listen for state changes
            state.on('change:view', this.updateRoute, this);
        },
        
        // get the router for the current top view
        getRouter: function() {
            var viewKey = state.get('view'),
                router = routerCache[viewKey];
            if (!router) throw "No router found for view " + viewKey;
            return router;
        },
        
        getRoute: function() {
            // delegate
            return this.getRouter().getRoute();
        },
        
        navigate: function(route, options) {
            // delegate
            return this.getRouter().navigate(route, options);
        },
        
        // set any global state variables from the querystring
        parseQS: function(qs) {
            qs.split('&').forEach(function(pair) {
                var kv = pair.split('='),
                    val = kv[1] ? decodeURIComponent(kv[1]) : null;
                if (kv.length > 1) {
                    state.setSerialized(kv[0], val);
                }
            });
        },
        
        // encode a querystring from state parameters
        getQS: function() {
            var qs = _.keys(stateParams).map(function(key) {
                    var value = state.getSerialized(key),
                        fragment = '';
                    if (value) {
                        fragment = key + '=' + encodeURI(value);
                    }
                    return fragment;
                }).filter(identity).join('&');
            return qs ? '?' + qs : '';
        },
        
        // the full link, with querystring in state
        getPermalink: function() {
            var href = window.location.href.split('?')[0];
            return href + this.getQS();
        }

    });
    
    // --------------------------------
    // Module methods
    // --------------------------------
    
    function ensureViewObject(viewConfig) {
        // whole config is a view or a string - set up object
        return (viewConfig.prototype instanceof BackboneView || _.isString(viewConfig)) ? 
            { layout: viewConfig } : viewConfig;
    }
    
    // recursively process a view configuration object
    function processViewConfig(viewConfig, depth, callback) {
        viewConfig = ensureViewObject(viewConfig);
        function checkRequire(f) {
            var layout = viewConfig.layout;
            // does this look like a require dependency?
            if (hasRequire 
                    && _.isString(layout) 
                    // string test could match some selectors, so allow explicit choices
                    && !viewConfig.noRequire
                    && (viewConfig.useRequire || layout.match(/^\w+$/) || layout.match(/\//)))
                require([layout], f);
            else f(layout);
        }
        checkRequire(function(layout) {
            var slots = viewConfig.slots,
                attrs = _.clone(viewConfig);
            // no layout - create empty layout
            if (!layout) layout = spf.Layout;
            // layout is a string - create view
            if (_.isString(layout))
                layout = spf.Layout.extend({ 
                    el: layout 
                });
            // allow manual slotConfig to override?
            if (!layout.prototype.slotConfig) {
                // set slots
                layout = layout.extend({ 
                    slotConfig: slots || {}
                });
            }
            // set any other settings, removing problematic keys
            _(['layout', 'slots', 'router']).each(function(k) { delete attrs[k] });
            // add CSS classes
            attrs.className = addClasses(
                layout.prototype.className || attrs.className,
                'depth' + depth, 
                !depth ? 'top' : ''
            );
            attrs.topLevel = !depth;
            attrs.depth = depth;
            viewConfig.layout = layout.extend(attrs);
            // send to callback
            callback(viewConfig);
        });
    }
    
    /**
     * @name spf.config
     * Configure the application
     * @param {Object} options      Config object
     */
    spf.configure = function(options) {
        _.extend(config, options);
        // support shortcuts for static view layouts and state-based routers
        _(config.views).each(function(viewConfig, k) {
            // whole config is a view or a string - set up object
            viewConfig = config.views[k] = ensureViewObject(viewConfig);
            // no router - default to single route based on key
            if (!viewConfig.router)
                viewConfig.router = k;
            // router is a string or an array - create router with factory
            if (_.isString(viewConfig.router) || _.isArray(viewConfig.router))
                viewConfig.router = spf.StateRouter.extend({ 
                    viewKey: k, 
                    routeStrings: viewConfig.router
                });
            // XXX: Handle require'd routers here?
        });
        return spf;
    };
    
    /**
     * @name spf.addParameter
     * Define a state parameter. While any state setting can simply be .set()
     * on the state model, defining a setting as a parameter allows it to be serialized 
     * and deserialized from the querystring. This is most appropriate for application 
     * state settings that would not otherwise be handled in a route.
     *
     * @param {String} name         Name of the parameter. This will be used as the
     *                              attribute in the state model and as the querystring
     *                              parameter name.
     * @param {Object} [options]    Optional settings:
     * @param {Function} [options.deserialize]  Function to deserialize value from a string
     * @param {Function} [options.serialize]    Function to serialize value to a string
     */
    spf.addParameter = function(name, options) {
        stateParams[name] = _.extend({
            serialize: identity,
            deserialize: identity
        }, options);
    };
    
    /**
     * @name spf.resetState
     * Reset the application state. Because the state object is initialized when the library
     * is loaded, if you want to extend the State class, you'll need to set spf.State to your 
     * new class, then call this function to reset.
     */
    spf.resetState = function() {
        state = spf.state = new spf.State();
    };
    
    /**
     * @name spf.start
     * Start the application. Instantiates core objects and starts Backbone.history.
     * @param {object} [options]    Options to pass to Backbone.history.start()
     */
    spf.start = function(options) {
        // initialize the core objects
        spf.router = new spf.AppRouter();
        spf.app = new spf.AppView({
            el: config.appElement
        });
        // allow Backbone settings to be set via configure()
        Backbone.emulateHTTP = !!config.emulateHTTP;
        Backbone.emulateJSON = !!config.emulateJSON;
        // start the router machinery
        Backbone.history.start(options);
    }
    
    return spf;
})(Backbone, window);
/**
 * Create the URL for a Google Charts circle image.
 */
TimeMapTheme.getCircleUrl = function(size, color, alpha) {
    return "http://chart.apis.google.com/" + 
        "chart?cht=it&chs=" + size + "x" + size + 
        "&chco=" + color + ",00000001,ffffff01" +
        "&chf=bg,s,00000000|a,s,000000" + alpha + "&ext=.png";
};

/**
 * Create a timemap theme with matching event icons and sized map circles
 *  
 * @param {Object} [opts]       Config options
 * @param {Number} [opts.size=20]           Diameter of map circle
 * @param {Number} [opts.eventIconSize=10]  Diameter of event circle
 * @param {String} [opts.color='1f77b4']    Circle color (map + event), in RRGGBB hex or rgb(r,g,b) format
 * @param {String} [opts.alpha='bb']        Circle alpha (map), in AA hex
 * @param {String} [opts.eventAlpha='ff']   Circle alpha (event), in AA hex
 */
TimeMapTheme.createCircleTheme = function(opts) {
    var defaults = {
            size:20,
            color:'1f77b4',
            alpha:'bb',
            eventIconSize:10,
            eventAlpha:'ff'
        };
    opts = $.extend(defaults, opts);
    return new TimeMapTheme({
        icon: TimeMapTheme.getCircleUrl(opts.size, opts.color, opts.alpha),
        iconShadow: null,
        iconShadowSize: [0,0],
        iconSize: [opts.size, opts.size],
        iconAnchor: [opts.size/2, opts.size/2],
        eventIcon: TimeMapTheme.getCircleUrl(opts.eventIconSize, opts.color, opts.eventAlpha),
        color: opts.color
    });
};
 /**
 * @class
 * This is a utility class for making a timeline from an array of
 * labels, rather than based on chronology.
 *
 * @constructor
 * @param {Object[]} bandInfo   Timeline band info array
 * @param {String[]} labels     The labels to use for the timeline
 * @param {Function} emphasize  Function taking a label and returning true if it
 *                              should be emphasized.
 */
LabelUtils = function(bandInfo, labels, emphasize) {
    
    /**
     * Labels for the timeline.
     * @type String[]
     */
    this.labels = labels;
    
    /**
     * Function taking a label and returning true if it should be emphasized.
     * @type Function
     */
    this.emphasize = emphasize;
    
    var utils = this;
    /**
     * Custom labeller for timeline bands
     */
    this.labeller = {
        labelInterval: function(date, intervalUnit) {
            var label = utils.dateToLabel(date);
            return {
                text: label,
                emphasized: emphasize(label)
            };
        }
    };
    
    // set up start/end for timeline
    // XXX: should this be optional?
    var start = new Date(),
        stop = new Date();
    start.setUTCFullYear(-1);
    stop.setUTCFullYear(this.labels.length + 1);
    
    // add labeller to bandInfo
    for (var x=0; x<bandInfo.length; x++) {
        bandInfo[x].labeller = this.labeller;
        if (!bandInfo[x].theme) {
            bandInfo[x].theme = Timeline.ClassicTheme.create();
        }
        bandInfo[x].theme.timeline_start = start;
        bandInfo[x].theme.timeline_stop  = stop;
    }
};

/**
 * Utility function to get start date
 */
LabelUtils.prototype.getStartDate = function() {
    var zeroDate = new Date();
    zeroDate.setUTCFullYear(0);
    return zeroDate;
};

/**
 * Utility function to get end date
 */
LabelUtils.prototype.getEndDate = function() {
    var endDate = new Date();
    endDate.setUTCFullYear(this.labels.length-1);
    return endDate;
};
    
/**
 * Utility function to locate a label in the label array.
 *
 * @param {String} label        Label to locate
 */
LabelUtils.prototype.getLabelIndex = function(label) {
    var labels = this.labels, i = labels.length;
    // check for indexOf support - FF/Chrome only
    if (labels.indexOf) {
        return labels.indexOf(label);
    }
    // otherwise, do it the hard way
    while (--i) {
        if (labels[i]==label) break;
    }
    return i;
};

/**
 * Translate label labelition to date
 *
 * @param {String} label    Label to translate to date
 * @return {Date}           Date for use on timeline, or null if not found
 */
LabelUtils.prototype.labelToDate = function(label) {
    var d = new Date(),
        year = this.getLabelIndex(label);
    if (year >= 0) {
        d.setUTCFullYear(year);
    } else {
        // not found
        d = null;
    }
    return d;
};

/**
 * Translate date to label position 
 *
 * @param {Date} d      Date for use on timeline
 * @return {String}     Corresponding label
 *         
 */
LabelUtils.prototype.dateToLabel = function(d) {
    var year = d.getUTCFullYear();
    if (year >= 0 && year < this.labels.length) {
        return this.labels[year];
    }
    return "";
};//-----------------------------------
// Monkey patches

(function(window) {
    var SimileAjax = window.SimileAjax;

    // Throws an annoying error otherwise
    SimileAjax.History.enabled = false;

    // allow animations to be stopped
    SimileAjax.Graphics._Animation.prototype.run = function() {
        var a = this;
        a.timeoutId = window.setTimeout(function() { a.step(); }, 50);
    };
    SimileAjax.Graphics._Animation.prototype.stop = function() {
        window.clearTimeout(this.timeoutId);
    };

    // add a loose point matching method
    mxn.LatLonPoint.prototype.roughlyEquals = function(otherPoint, zoom) {
        function roughly(f) {
            return parseFloat(f).toFixed(~~(zoom/2))
        }
        return roughly(this.lat) == roughly(otherPoint.lat) 
            && roughly(this.lon)== roughly(otherPoint.lon);
    };
    
    // d3 won't load in older IE versions
    if (!window.d3) window.d3 = {};

}(this));define("gv",[],function(){var e=[{visibility:"off"}],t=[{elementType:"labels",stylers:e},{featureType:"administrative",elementType:"geometry",stylers:e},{featureType:"road",elementType:"geometry",stylers:e},{featureType:"transit",elementType:"geometry",stylers:e},{featureType:"poi",elementType:"geometry",stylers:e},{featureType:"water",stylers:[{hue:"#0033ff"},{saturation:82},{lightness:95}]},{featureType:"landscape",stylers:[{hue:"#80ff00"},{saturation:15},{lightness:-20}]}],n=["090066","6b0051","ce003c","cc0020","ee0000"],r=n.map(function(e){return TimeMapTheme.createCircleTheme({color:e})});placeTypes={SETTLEMENT:"0000ee",NATURAL_FEATURE:"ee0000",REGION:"00ee00"},themeByType=function(e){var t="555555",n=this.placeTypes,r=n[e.get("type")];return typeof r!="undefined"&&(t=r),TimeMapTheme.createCircleTheme({color:t})};var i=window.gv=spf;return i.settings=_.extend(spf.config,{API_ROOT:API_ROOT,REPORT_URL:REPORT_URL,API_DATA_TYPE:API_DATA_TYPE,disableChangeLink:typeof disableChangeLink!="undefined"?!!disableChangeLink:!1,VIEW_ON:typeof VIEW_ON!="undefined"?VIEW_ON:null,REPORT_BAD_TOKEN_URL:typeof REPORT_BAD_TOKEN_URL!="undefined"?REPORT_BAD_TOKEN_URL:!1,REPORT_PROBLEM_PLACE_URL:typeof REPORT_PROBLEM_PLACE_URL!="undefined"?REPORT_PROBLEM_PLACE_URL:!1,PLACE_THEME:typeof PLACE_THEME=="undefined"?"frequency":PLACE_THEME,viewOnLink:typeof VIEW_ON_LINK=="function"?VIEW_ON_LINK:!1,mapStyle:t,scaleColors:n,colorThemes:r,placeTypes:placeTypes,themeByType:themeByType}),i}),define("config",{appElement:"#app-view",globalViews:["views/MessageView"],views:{index:{layout:"#layout-2col",className:"index-view",router:["","index"],slots:{".left-column":{layout:"views/BookListView"},".right-column":"#index-overview-template"}},"book-summary":{layout:"#layout-book-3panel",className:"summary-view",router:"book/:bookid",slots:{".navigation-view":"views/NavigationView",".book-title-view":"views/BookTitleView",".text-slot":"views/BookSummaryTextView",".left-panel":"views/BookSummaryMapView",".right-panel":"views/PlaceFrequencyBarsView"}},"reading-view":{layout:"#layout-book-2panel",className:"reading-view",router:["book/:bookid/read","book/:bookid/read/:pageid","book/:bookid/read/:pageid/:placeid"],slots:{".navigation-view":"views/NavigationView",".book-title-view":"views/BookTitleView",".left-panel":{layout:"#layout-full-top",slots:{".top-slot":"views/PagesView",".bottom-slot":"views/PageControlView"}},".right-panel":{layout:"#layout-full-top",slots:{".top-slot":"views/TimeMapView",".bottom-slot":"views/TimeMapLegendView"}}}},"place-view":{layout:"#layout-book-2panel",className:"place-view",router:"book/:bookid/place/:placeid",refreshOn:"change:placeid",slots:{".navigation-view":"views/NavigationView",".book-title-view":"views/BookTitleView",".left-panel":{className:"place-summary panel fill padded-scroll",slots:{"this":["views/PlaceSummaryView","views/BookReferencesView","views/RelatedPlacesView"]}},".right-panel":{layout:"#layout-full-top",className:"place-view-right",slots:{".top-slot":"views/BookPlaceMapView",".bottom-slot":"views/BookPlaceFlickrView"}}}}},relatedCount:8,bookRefCount:5,emulateHTTP:!0}),define("models/Collection",[],function(){return Backbone.Collection.extend({fetchNew:function(e){e=e||{};var t=this,n=e.success;return e.success=function(r,i,s){_(t.parse(r,s)).each(function(e){t.get(e.id)||t.add(e,{silent:!0})}),e.silent||t.trigger("reset",t,e),n&&n(t,r)},(this.sync||Backbone.sync).call(this,"read",this,e)},getOrCreate:function(e){var t=this.get(e);return t||(t=new this.model({id:e}),this.add(t)),t}})}),define("models/Model",[],function(){function e(e){return e.id=String(e.id),e}var t=Backbone.Model;return t.extend({type:"model",url:function(){return t.prototype.url.call(this)+".json"},isFullyLoaded:function(){return!0},ready:function(e,t){var n=this,t=t||e;n.isFullyLoaded()?t():(n.on("ready",e),n._fetching||(n._fetching=!0,n.fetch({success:function(){n.trigger("ready"),n._fetching=!1},error:function(){gv.state.set({message:{text:"Error: Could not get data for the "+n.type+" with ID "+n.id,type:"error"}})}})))}})}),define("models/Places",["gv","models/Model","models/Collection"],function(e,t,n){var r=e.settings,i;return i=t.extend({type:"place",defaults:{title:"Untitled Place",frequency:0},isFullyLoaded:function(){return!!this.get("uri")},related:function(e){var t=this,n="related-"+e.id,r=t.get(n);if(!r){r={},e.pages.each(function(n){var i=n.get("places");i&&i.indexOf(t.id)>=0&&i.forEach(function(n){if(n!=t.id){var i=[n,t.id].sort().join("-");i in r||(r[i]={place:e.places.get(n),count:0}),r[i].count++}})}),r=_(_(r).values()).sortBy(function(e){return-e.count});var i={};i[n]=r,t.set(i)}return r},gmapLatLng:function(){var e=this.get("ll");return new google.maps.LatLng(e[0],e[1])}}),n.extend({model:i,url:function(){return r.API_ROOT+"/places"},comparator:function(e){return-e.get("frequency")}})}),define("models/Pages",["gv","models/Model","models/Collection"],function(e,t,n){var r=e.settings,i;return i=t.extend({type:"page",defaults:{places:[]},initialize:function(){this.set({title:"Page "+this.id})},isFullyLoaded:function(){return!!this.get("text")}}),n.extend({model:i,url:function(){return r.API_ROOT+"/books/"+this.book.id+"/page"}})}),define("models/Book",["gv","models/Model","models/Places","models/Pages"],function(e,t,n,r){var i=e.settings;return t.extend({type:"book",defaults:{title:"Untitled Book"},url:function(){return i.API_ROOT+"/books/"+this.id+".json"},initialize:function(){var e=this,t=e.places=new n,i=e.pages=new r;t.book=e,i.book=e},parse:function(e){return this.initCollections(e.places,e.pages),e},initCollections:function(e,t){DEBUG&&console.log("Initializing book "+this.id+": "+t.length+" pages and "+e.length+" places");var n=this.places,r=this.pages;n.reset(e),r.reset(t.map(function(e){return e.id=String(e.id),e})),r.each(function(e){e.get("places").forEach(function(e){var t=n.get(e),r=t.get("frequency");t.set({frequency:r+1})})}),n.sort()},isFullyLoaded:function(){return!!this.pages.length&&!!this.places.length},labels:function(){return this.pages.map(function(e){return e.id})},timemapItems:function(e,t){var n=this,r=[],i=n.pages,s=e?i.indexOf(i.get(e)):0,o=t?i.indexOf(i.get(t)):i.length-1;return i.models.slice(s,o).forEach(function(e){var t=_.uniq(e.get("places"));t.forEach(function(t){var i=n.places.get(t),s=i.get("ll");r.push({title:i.get("title"),point:{lat:s[0],lon:s[1]},options:{place:i,page:e}})})}),r},bounds:function(){var e=function(e){return e[0]},t=function(e){return e[1]},n=_(this.places.pluck("ll")),r={s:e(n.min(e)),w:t(n.min(t)),n:e(n.max(e)),e:t(n.max(t))};if(r.s<=-90||r.s>=90||r.s>=r.n)r.s=-90;r.w<=-180&&(r.w=-180);if(r.n>=90||r.n<=-90)r.n=90;return r.e>=180&&(r.e=180),r},gmapBounds:function(){if(DEBUG&&!window.google)return;var e=google.maps,t=this.bounds();return new e.LatLngBounds(new e.LatLng(t.s,t.w),new e.LatLng(t.n,t.e))},nextPrevId:function(e,t){var n=this.pages,r=n.get(e),i=r?n.indexOf(r)+(t?-1:1):-1,s=n.at(i);return s&&s.id},nextId:function(e){return this.nextPrevId(e)},prevId:function(e){return this.nextPrevId(e,!0)},firstId:function(){var e=this.pages.first();return e&&e.id},nextPrevPlaceRef:function(e,t,n){var r=this.pages,i=r.get(e);if(i){var s=r.indexOf(i),o=function(e){var n=e.get("places");return n.indexOf(t)>=0},u=function(){return s+=n?-1:1,s};while(i=r.at(u(s)))if(o(i))return i.id}},nextPlaceRef:function(e,t){return this.nextPrevPlaceRef(e,t)},prevPlaceRef:function(e,t){return this.nextPrevPlaceRef(e,t,!0)},supportsSections:function(){return typeof this.attributes.sections!="undefined"},pageIdToRef:function(e){var t=this;if(t.supportsSections()){var n=t.attributes.sections,r="",i=0,s=0;for(var o in n){o=parseInt(o);if(parseInt(n[o].firstPage)==parseInt(e)||parseInt(n[o].firstPage)<parseInt(e)&&(typeof n[o+1]=="undefined"||parseInt(n[o+1].firstPage)>parseInt(e))){r=n[o].section,i=parseInt(n[o].firstPage),s=parseInt(r)>1?parseInt(e)-(parseInt(i)-1):parseInt(e);break}}return{section:r,page:s,pageId:e,label:r+"."+s}}},refToPageId:function(e){var t=this;if(typeof t.attributes.sections!="undefined"){var e=e.split("."),n=parseInt(e[0]),r=parseInt(e[1]);if(r==0)return;if(n===1)return new String(r);var i=t.attributes.sections;for(var s in i){s=parseInt(s);if(parseInt(n)==parseInt(i[s].section))return new String(parseInt(i[s].firstPage)+r-1)}}}})}),define("models/Books",["gv","models/Collection","models/Book"],function(e,t,n){return t.extend({model:n,url:function(){return e.settings.API_ROOT+"/books/.json"},comparator:function(e){var t=(e.get("author")||"").toLowerCase().split(/[,(]/)[0].split(/\s+/).pop();return t+e.get("title").toLowerCase()}})}),define("models/State",["gv"],function(e){e.State=e.State.extend({initialize:function(){var t=this;t.on("change:bookid",function(){t.clearBookState(!0)}),t.set("placeTheme",e.settings.PLACE_THEME)},defaults:{barsort:"ref",placeTheme:"feature"},clearBookState:function(e){var t=this,n=e?{silent:!0}:{};_(_.keys(t.attributes)).without("view","bookid","pageview","barsort","pagehastext","pagehasimage","placeTheme").forEach(function(e){t.unset(e,n)})}}),e.resetState()}),define("util/slide",[],function(){return function(t,n,r,i){i=i||$.noop;if($.support.transition){var s="sliding",o=n?r=="left"?"next":"prev":"active";t.addClass(o).show(),t[0].offsetWidth,t.addClass([s,r].join(" ")).one($.support.transition.end,function(){n||t.hide(),t.removeClass([o,r,s].join(" ")),i()})}else t.toggle(n),i()}}),define("views/AppView",["gv","util/slide"],function(e,t){e.AppView=e.AppView.extend({open:function(e,n){e.layout(),t(e.$el,!0,n?"left":"right")},close:function(e,n,r){t(e.$el,!1,n?"left":"right",r)}})}),define("views/Layout",["gv"],function(e){e.Layout=e.Layout.extend({topViewWidth:function(){return $(window).width()-40},topViewHeight:function(){return $(window).height()-87},layout:function(){this.topLevel&&this.$el.width(this.topViewWidth()).height(this.topViewHeight()),this.$(".fill").each(function(){var e=$(this),t=12,n=0,r=0;e.prevAll().each(function(){n+=$(this).height()}),e.css({marginTop:n+(n?t:0)}),e.nextAll().each(function(){r+=$(this).height()}),e.css({marginBottom:r+(r?t:0)})})}})}),define("routers/Router",["gv"],function(e){var t=e.StateRouter,n=t.prototype.navigate;e.StateRouter=t.extend({navigate:function(e){DEBUG&&console.log("("+this.viewKey+") Navigating: "+e),e&&window._gaq&&_gaq.push(["_trackPageview",location.pathname+"#"+e]),n(e)}})}),define("views/MessageView",["gv"],function(e){function i(){t.unset("message")}function s(){window.clearTimeout(r),delete r}var t=e.state,n=5e3,r;return e.View.extend({el:"#message-view",initialize:function(e){t.on("change:message",this.showMessage,this)},showMessage:function(){var e=this,o=t.get("message");!!t.previous("message")&&r&&s();if(o){var u=o.text||o,a="alert-"+(o.type||"warning");e.$(".alert").removeClass("alert-error alert-success alert-info").addClass(a).find("span").text(u),$(e.el).show(),r=window.setTimeout(i,n)}else $(e.el).fadeOut()},events:{"click .close":i,"mouseover .alert":s}})}),define("views/BookListView",["gv"],function(e){var t=e.View,n=e.state,r;return r=t.extend({tagName:"p",initialize:function(){this.template=_.template($("#book-list-item-template").html())},render:function(){return $(this.el).html(this.template(this.model.toJSON())),this},events:{"click .book-title":"uiOpenBook"},uiOpenBook:function(){n.set({bookid:this.model.id}),n.set({view:"book-summary"})}}),t.extend({className:"panel padded-scroll full-height loading",initialize:function(){var t=this.model=e.books;t.on("reset",this.render,this),t.fetchNew()},render:function(){var e=this;e.$el.html($("#book-list-template").html()).removeClass("loading"),e.$(".book-list").empty(),e.model.forEach(function(t){var n=new r({model:t});e.$(".book-list").append(n.render().el)})}})}),define("views/BookView",["gv"],function(e){return e.View.extend({renderTemplate:function(t){var n=this,r=n.model,i=_.template(n.template);t=t||n.model.toJSON(),e.settings.VIEW_ON?t.viewon=e.settings.VIEW_ON:t.viewon="Google Books",t.viewonlink=t.uri;if(typeof e.settings.viewOnLink=="function"&&e.state.get("view")=="reading-view"){var s=e.state.get("pageid");r.supportsSections()&&(s=r.pageIdToRef(s).label),t.viewonlink=e.settings.viewOnLink(t.uri,s)}$(n.el).html(i(t))},ready:function(t){var n=this,r=e.state,i=r.get("bookid"),s=n.model;!s||s.id!=i||!s.isFullyLoaded()?(s=n.model=e.books.getOrCreate(i),s.ready(function(){r.get("pageid")||r.set({pageid:s.firstId()}),t()})):t()}})}),define("views/NavigationView",["gv","views/BookView"],function(e,t){var n=e.state;return t.extend({template:"#navigation-view-template",initialize:function(){var e=this;e.bindState("change",e.updatePermalink,e),e.bindState("change:placeid",e.updateNavButtons,e),e.bindState("change:view",e.updateNavButtons,e)},render:function(){var e=this;return e.renderTemplate(),e.$(".btn-group").button(),e.updatePermalink(),e.updateNavButtons(),e},updatePermalink:function(){this.$("a.permalink").attr("href",e.router.getPermalink())},updateNavButtons:function(){var e=this.$("[data-view-id=place-view]"),t="disabled";n.get("placeid")?e.removeClass(t).removeAttr(t):e.addClass(t).attr(t,t),this.$("button").each(function(){var e=$(this);e.toggleClass("active",e.attr("data-view-id")==n.get("view"))})},events:{"click button":"uiGoToView"},uiGoToView:function(e){var t=$(e.target).closest("[data-view-id]").attr("data-view-id");n.set({view:t})}})}),define("views/BookTitleView",["gv","views/BookView"],function(e,t){var n=e.state;return t.extend({template:"#book-title-template",initialize:function(){var e=this;e.bindState("change:pageid",e.render,e)},render:function(){var e=this;return e.renderTemplate(),e.$("h2.book-title").toggleClass("on",n.get("view")!="book-summary"),e},events:{"click h2.book-title":"uiGoToSummary"},uiGoToSummary:function(){n.set({view:"book-summary"})}})}),define("views/BookSummaryTextView",["gv","views/BookView"],function(e,t){var n=e.state;return t.extend({template:"#book-summary-text-template",render:function(){var e=this,t=e.model,n=_.extend({},t.toJSON(),{pageCount:t.pages.length,topPlaces:t.places.toJSON().slice(0,4)});e.renderTemplate(n)},events:{"click span.place":"uiPlaceClick","click button.goto-reading":"uiGoToReading"},uiPlaceClick:function(e){var t=$(e.target).attr("data-place-id");t&&(n.set("placeid",t),n.set({view:"place-view"}))},uiGoToReading:function(){n.set({view:"reading-view"})}})}),define("views/BookSummaryMapView",["gv","views/BookView"],function(e,t){var n=e.state,r=e.settings,i=r.mapStyle,s=r.colorThemes;return t.extend({className:"summary-map-view panel fill",render:function(){if(DEBUG&&!window.google)return;var e=this,t=e.model,o=e.markers=[],u=google.maps,a=d3.scale.quantize().domain([1,t.places.first().get("frequency")]).range(s),f=t.gmapBounds(),l=$("<div></div>").appendTo(e.el);setTimeout(function(){var e=new u.Map(l[0],{center:f.getCenter(),zoom:4,mapTypeId:u.MapTypeId.TERRAIN,streetViewControl:!1,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE},styles:i});e.fitBounds(f),t.places.each(function(t){var i={},s=10,f=s/2;n.get("placeTheme")=="feature"?i=r.themeByType(t):i=a(t.get("frequency"));var l=TimeMapTheme.getCircleUrl(s,i.color,"99");size=new u.Size(s,s),anchor=new u.Point(f,f),marker=new u.Marker({icon:new u.MarkerImage(l,size,new u.Point(0,0),anchor,size),position:t.gmapLatLng(),map:e,title:t.get("title")}),u.event.addListener(marker,"click",function(){n.set({placeid:t.id}),n.set({view:"place-view"})}),o.push(marker)})},0)}})}),define("views/PlaceFrequencyBarsView",["gv","views/BookView"],function(e,t){var n=e.state,r;return r=t.extend({className:"freq-bars-view panel padded-scroll fill loading",template:"#bars-header-template",settings:{buckets:50,color:"steelblue",hicolor:"orange"},initialize:function(e){var t=this;_.extend(t.settings,t.options),t.bindState("change:barsort",function(){var e=t.model.places,r=n.get("barsort");e.comparator=function(e){return r=="ref"?-e.get("frequency"):e.get("title")},e.sort(),t.render()})},render:function(){var e=this,t=!!e.options.place,r=e.model,i=t?[e.options.place]:r.places.models,s=e.settings,o=s.buckets,u=s.color,a=s.hicolor,f=function(e){return e.get("frequency")},l=d3.max(i,f),c=12,h=250,p=t?0:100,d=3,v=d3.scale.linear().domain([0,l]).range([0,h]),m=function(e,t){return t*(c+d)},g=function(e){return v(f(e))};e.$el.empty().removeClass("loading");var y=$("<div></div>").appendTo(e.el);t||(y.append(e.template),e.renderControls());var b=500,w="",E=0;t||(b=500,E=120);var S=d3.select(y[0]).append("svg:svg").attr("height",(c+d)*i.length+(t?0:10)).attr("width",b).on("click",function(){var e=d3.event.target,t=e.__data__,r=e.parentNode.__data__;if($(e).is("rect")){var i=t.pid[0];n.set({placeid:r.id,pageid:i,view:"reading-view"})}$(e).is("text.title")&&(DEBUG&&console.log("Place Id",r.id),n.set({placeid:r.id,view:"place-view"}))}).on("mouseover",function(){var e=$(d3.event.target);e.is("rect")&&d3.select(d3.event.target).style("fill",a)}).on("mouseout",function(){var e=$(d3.event.target);e.is("rect")&&!e.is(".selected")&&d3.select(d3.event.target).style("fill",u)}),x=r.pages,T=d3.scale.quantize().domain([0,x.length]).range(d3.range(0,o)),N=d3.scale.linear().domain([0,o]).range([0,h]);i.forEach(function(e){if(!e.get("sparkData")){var t=d3.range(0,o).map(function(e,t){return{count:0,idx:t}});x.each(function(n,r){var i=n.get("places"),s=T(r);i&&i.indexOf(e.id)>=0&&(t[s].count++,t[s].pi||(t[s].pi=[]),t[s].pid||(t[s].pid=[]),t[s].pi.push(r),t[s].pid.push(n.id))}),e.set({sparkData:t})}});var C=d3.max(i,function(e){return d3.max(e.get("sparkData"),function(e){return e.count})}),k=d3.scale.linear().domain([0,C]).range([0,c]),L=S.selectAll("g.spark").data(i).enter().append("svg:g").attr("class","spark").attr("transform",function(e,t){return"translate("+E+","+m(e,t)+")"});return L.append("svg:line").attr("x1",p).attr("x2",p+h).attr("y1",c).attr("y2",c).style("stroke","#999").style("stroke-width",.5),L.selectAll("rect").data(function(e){return e.get("sparkData")}).enter().append("svg:rect").each(function(e,t){if(e.count){var n=Math.max(2,k(e.count));d3.select(this).attr("y",c-n).attr("x",N(t)+p).attr("width",h/o).attr("height",n).style("fill",u).style("cursor","pointer")}}),t||(L.append("svg:text").attr("class","title").style("fill","black").attr("x",p-8).attr("y",0).attr("dx",3).attr("dy","1em").text(function(e){return e.get("title")}),S.selectAll("text.freq").data(i).enter().append("svg:text").attr("class","freq").style("fill","black").style("font-size","10px").attr("x",p+h).attr("y",m).attr("dx",E+3).attr("dy",".9em").text(f)),this},renderControls:function(){var e=this,t=n.get("barsort");e.$(".ref").toggleClass("on",t!="ref"),e.$(".alpha").toggleClass("on",t!="alpha")},updateHighlight:function(){var e=this.model.pages,t=this.settings,r=n.get("pageid"),i=d3.scale.quantize().domain([0,e.length]).range(d3.range(0,t.buckets));d3.select(this.el).selectAll("rect").attr("class","").style("fill",t.color);if(r){var s=e.indexOf(e.get(r));d3.select($("rect:eq("+i(s)+")",this.el)[0]).attr("class","selected").style("fill",t.hicolor)}},events:{"click .ref.on":"uiSort","click .alpha.on":"uiSort"},uiSort:function(e){n.set({barsort:$(e.target).is(".ref")?"ref":"alpha"})}}),window.nod3&&(r=r.extend({render:$.noop,updateHighlight:$.noop})),r}),define("views/PageView",["gv","views/BookView","util/slide"],function(e,t,n){var r=e.state;return t.extend({className:"single-page panel",template:"#page-template",initialize:function(){var e=this,t=e.model;e.bindState("change:pageview",e.renderPageView,e),e.bindState("change:placeid",e.renderPlaceHighlight,e),t.view=e,t.ready(function(){e.render()})},prepareContext:function(){var e=this,t=e.model.toJSON(),n={};n.image=t.image||!1,n.texts=new Array;for(var i in t){var s=!1,o=!1;if(i==="text")o=t[i];else if(m=/text\@([a-zA-Z]{2,3})/.exec(i))s=m[1],o=t[i];o!==!1&&n.texts.push({text:o,lang:s})}r.set("pagehastext",!!t.text||n.texts.length>0&&n.texts[0].lang===!1),r.set("pagehasimage",!!t.image),e.context=n},renderTemplate:function(e){var t=this,n=_.template(t.template);typeof e=="undefined"&&(t.prepareContext(),e=t.context),$(t.el).html(n(e))},render:function(){var e=this;return e.renderTemplate(),e.renderPageView(),e.renderPlaceHighlight(),e},renderPageView:function(){var e=this,t=e.options.model.collection.book,n=r.get("pageview");if(typeof n=="undefined"){if(typeof e.model.attributes.text!="undefined")r.set("pageview","text");else if(typeof t.attributes.texts!="undefined"){var i=t.attributes.texts[0];r.set("pageview","text-"+i.lang)}n=r.get("pageview")}if(e.context.texts)for(var s in e.context.texts){var i=e.context.texts[s],o=n=="text-"+i.lang;e.$(".text-"+i.lang).toggle(o)}e.$(".text").toggle(n=="text"),e.$(".img").toggle(n=="image")},renderPlaceHighlight:function(){var e=r.get("placeid");this.$("span.place").each(function(){$(this).toggleClass("hi",$(this).attr("data-place-id")==e)})},open:function(e,t){this.$el.width(e-24),n(this.$el,!0,t?"right":"left")},close:function(e){this.$el.hide()},events:{"click .place":"uiPlaceClick"},uiPlaceClick:function(e){var t=$(e.target).attr("data-place-id");t&&r.set("placeid",t)}})}),define("models/Flag",["gv","models/Model"],function(e,t){return t.extend({type:"flag",url:function(){return e.settings.REPORT_URL+(this.isNew()?"new":this.id)},isFullyLoaded:function(){return!!this.get("tokenID")}})}),define("views/ChangeFormView",["gv","views/BookView","models/Flag"],function(e,t,n){var r=e.state;return t.extend({el:"#change-this-form",initialize:function(){this.$el.modal({show:!1})},clear:function(){this.close(),this.undelegateEvents()},open:function(){var e=this,t=e.options,i=t.placeId,s=t.token,o=r.get("pageid");e.ready(function(){var t=e.model,r=t.get("title");e.$("#ctf-book-title").html(r),e.$("#ctf-place-name").html(s),e.options.placeOnly?e.$("span.pagenum").hide():e.$("#ctf-page-id").html(o),e.note=new n({bookid:e.model.id,placeid:i,pageid:o,token:s}),e.$el.modal("show")})},submit:function(){var e=this,t=e.note,n=function(){r.set({message:{text:"Your feedback was submitted. Thanks!",type:"success"}})},i=function(){r.set({message:{text:"Something went wrong, and we couldn't submit your feedback. Sorry!",type:"error"}})},s={success:function(e,t){t&&t.success?n():i()},error:i};DEBUG&&(s.type="GET"),t.save({note:e.$('textarea[name="note"]').val()},s),r.set({message:"Submitting..."}),e.close()},close:function(){this.$el.modal("hide"),this.$("form").get(0).reset()},events:{"click .cancel":"close","click .submit":"submit"}})}),define("views/ChangeLinkView",["gv","views/ChangeFormView"],function(e,t){var n=e.state,r,i=e.settings;return e.View.extend({el:"#change-this-link",open:function(e,t,n,r){$(this.el).css({top:e-15,left:t+n+5}).show()},close:function(){$(this.el).hide()},clear:function(){var e=this;e.form&&e.form.clear(),e.close(),e.undelegateEvents()},openForm:function(e){var n=this;n.form||(n.form=new t({model:n.model,token:n.token,placeId:n.placeId})),n.form.open()},events:{mouseover:"uiMouseOver",mouseleave:"close","click button":"uiButtonClick"},uiMouseOver:function(){this.clearTimer()},uiButtonClick:function(e){var t=this;i.REPORT_BAD_TOKEN_URL?this.directLink():this.openForm($(e.target).text()),this.close()},directLink:function(){var e=i.REPORT_BAD_TOKEN_URL.replace("{token-id}",this.tokenId);window.open(e)},startTimer:function(){var e=this;e.clearTimer(),r=setTimeout(function(){e.close(),r=null},1e3)},clearTimer:function(){r&&(window.clearTimeout(r),r=null)}})}),define("views/PagesView",["gv","views/BookView","views/PageView","views/ChangeLinkView"],function(e,t,n,r){var i=e.state;return t.extend({className:"page-view loading full-height",initialize:function(){var e=this;e.changeLink=new r,e.render=e.bindReady("render"),e.bindState("change:pageid",e.render,e)},clear:function(){var e=this;e.changeLink.clear(),t.prototype.clear.call(e)},render:function(){var e=this,t=e.model,r=t.pages,s=i.get("pageid"),o,u=s&&r.get(s)||r.first();return e.pageView&&(e.pageView.close(),o=e.pageView.model),u.view?(e.$el.append(u.view.render().el),e.pageView=u.view,u.view.open(e.$el.width(),o&&r.indexOf(o)>r.indexOf(u))):(e.$el.addClass("loading"),u.on("change",function(){e.$el.removeClass("loading"),e.render()}),new n({model:u})),e},events:{"mouseover span.place":"uiShowChangeLink","mouseleave span.place":"uiHideChangeLink"},uiShowChangeLink:function(t){if(!e.settings.disableChangeLink){var n=$(t.target),r=n.offset(),i=this.changeLink;i.placeId=n.attr("data-place-id"),i.tokenId=n.attr("data-token-id"),i.token=n.text(),i.clearTimer(),i.open(r.top,r.left,n.width(),n.height())}},uiHideChangeLink:function(){this.changeLink.startTimer()}})}),define("views/PageControlView",["gv","views/BookView"],function(e,t){var n=e.state;return t.extend({className:"page-control-view",template:"#page-control-template",initialize:function(e){var t=this;t.bindState("change:pageid",t.renderNextPrev,t),t.bindState("change:pageview",t.renderPageView,t),t.bindState("change:pagehastext",t.toggleTextControl,t),t.bindState("change:pagehasimage",t.toggleImageControl,t)},render:function(){var e=this;e.renderTemplate(),e.renderNextPrev(),e.renderPageView()},toggleTextControl:function(){var e=this;e.$(".showtext").toggle(!!n.get("pagehastext"))},toggleImageControl:function(){var e=this;e.$(".showimg").toggle(!!n.get("pagehasimage"))},renderNextPrev:function(){var e=this,t=e.model,r=n.get("pageid")||t.firstId(),i=e.prev=t.prevId(r),s=e.next=t.nextId(r),o=t.pageIdToRef(r);e.$(".prev").toggleClass("on",!!i),e.$(".next").toggleClass("on",!!s),typeof o!="undefined"?e.$(".page-id").val(o.label):e.$(".page-id").val(r)},renderPageView:function(){var e=this,t=n.get("pageview");e.$(".showtext").toggleClass("on",t!="text");if(typeof e.model.attributes.texts!="undefined")for(var r in e.model.attributes.texts){var i=e.model.attributes.texts[r];e.registerAltTextClick(i),e.$(".showtext-"+i.lang).toggleClass("on",t!="text-"+i.lang)}e.$(".showimg").toggleClass("on",t!="image")},registerAltTextClick:function(e){var t=this,r="text-"+e.lang;t.$(".showtext-"+e.lang).click("on",function(){n.set({pageview:r})})},events:{"click .next.on":"uiNext","click .prev.on":"uiPrev","click .showimg.on":"uiShowImage","click .showtext.on":"uiShowText","change .page-id":"uiJumpToPage"},uiNext:function(){n.set({pageid:this.next})},uiPrev:function(){n.set({pageid:this.prev})},uiShowImage:function(){n.set({pageview:"image"})},uiShowText:function(){n.set({pageview:"text"})},uiJumpToPage:function(e){var t=this,r=t.model,i=n.get("pageid"),s=$(e.target).val(),o=s;s.indexOf(".")!==-1&&typeof r.attributes.sections!="undefined"&&(s=r.refToPageId(s,r)),s&&this.model.pages.get(s)?(n.set({scrolljump:!0}),n.set({pageid:s})):(this.renderNextPrev(),n.set({message:{text:"Sorry, there isn't a page '"+o+"' in this book.",type:"error"}}))}})}),define("views/InfoWindowView",["gv","views/BookView","views/PlaceFrequencyBarsView"],function(e,t,n){var r=e.state;return t.extend({className:"infowindow",template:"#info-window-template",initialize:function(){var e=this;e.bindState("change:placeid",e.render,e),e.bindState("change:pageid",e.renderNextPrevControl,e),e.bindState("change:pageid",e.renderBarHighlight,e),e.bindState("change:mapzoom",e.renderZoomControl,e)},clear:function(){var e=this;e.freqBars&&e.freqBars.clear(),t.prototype.clear.call(e)},render:function(){var e=this;e.ready(function(){e.openWindow()})},openWindow:function(){var e=this,t=e.model,i=e.map,s=r.get("placeid"),o;if(!i)return;if(!s){i.closeBubble();return}o=t.places.get(s),o.ready(function(){function a(){r.get("placeid")==s&&r.unset("placeid"),i.closeInfoBubble.removeHandler(a)}e.renderTemplate(o.toJSON());var u=e.freqBars=new n({model:t,place:o,el:e.$("div.frequency-bars")[0]});u.render(),e.renderBarHighlight(),e.renderZoomControl(),e.renderNextPrevControl(),i.openBubble(e.getPoint(),e.el),i.closeInfoBubble.addHandler(a)})},renderZoomControl:function(){this.$(".zoom").toggleClass("on",r.get("mapzoom")<12)},renderNextPrevControl:function(){var e=this,t=r.get("pageid"),n=r.get("placeid");e.ready(function(){var r=e.model,i=e.prev=r.prevPlaceRef(t,n),s=e.next=r.nextPlaceRef(t,n);e.$(".prev").toggleClass("on",!!i),e.$(".next").toggleClass("on",!!s),e.$(".controls").toggle(!!i||!!s)})},renderBarHighlight:function(){var e=this;e.ready(function(){e.freqBars&&e.freqBars.updateHighlight()})},getPoint:function(){var e=r.get("placeid"),t=this.model.places.get(e),n=t.get("ll");return new mxn.LatLonPoint(n[0],n[1])},events:{"click span.zoom.on":"uiZoom","click span.next.on":"uiNext","click span.prev.on":"uiPrev","click span.goto-place":"uiGoToPlace"},uiZoom:function(){var e=r.get("mapzoom");e=Math.min(e+2,12),r.set({mapzoom:e,mapcenter:this.getPoint()})},uiNext:function(){r.set({pageid:this.next})},uiPrev:function(){r.set({pageid:this.prev})},uiGoToPlace:function(){r.set({view:"place-view"})}})}),define("views/TimeMapView",["gv","views/BookView","views/InfoWindowView"],function(e,t,n){var r=e.state,i=e.settings,s=i.mapStyle,o=[Timeline.createBandInfo({width:"88%",intervalUnit:Timeline.DateTime.YEAR,intervalPixels:110,eventSource:!1}),Timeline.createBandInfo({width:"12%",intervalUnit:Timeline.DateTime.DECADE,intervalPixels:200,overview:!0,eventSource:!1})];return t.extend({className:"timemap-view panel fill",template:"#timemap-template",initialize:function(){var e=this;e.infoWindowView=new n},clear:function(){this.infoWindowView.clear(),t.prototype.clear.call(this)},getLabeller:function(){var e=this;e.labelUtils=e.labelUtils||new LabelUtils(o,e.model.labels(),function(){return!1});if(typeof e.model.attributes.sections!="undefined"){e.labelUtils.labeller={labelInterval:function(t,n){var r=e.model.pages.book,i=e.labelUtils.dateToLabel(t);return{text:r.pageIdToRef(i).label,emphasized:e.labelUtils.emphasize(i)}}};for(var t=0;t<o.length;t++)o[t].labeller=e.labelUtils.labeller}return e.labelUtils},render:function(){function l(){var e=this,t=e.opts;r.set({pageid:t.page.id}),r.set({placeid:t.place.id})}function c(e){var n=new TimeMap.loaders.basic(e),r=n.load;return n.opts={url:[]},n.load=function(e,i){var s=n.opts.url;n.data=t.timemapItems(s[0],s[1]),r.call(n,e,i)},n}function h(e,t,n){return[f.dateToLabel(t),f.dateToLabel(n)]}var e=this,t=e.model,n=i.scaleColors,u=i.colorThemes,a=d3.scale.quantize().domain([1,t.places.first().get("frequency")]).range(u),f=e.getLabeller();e.bindState("change:pageid",e.updateTimeline,e),e.bindState("change:mapzoom",e.updateMapZoom,e),e.bindState("change:mapcenter",e.updateMapCenter,e),e.bindState("change:maptypeid",e.updateMapTypeId,e),e.bindState("change:autoplay",e.updateAutoplay,e),e.bindState("change:autoplay",e.renderAutoplayControls,e),e.bindState("change:topview",e.stopAutoplay,e),e.bindState("change:placeid",e.stopAutoplay,e),e.bindState("change:pageid",e.stopAutoplay,e),e.$el.html(e.template);var p=r.get("mapcenter"),d=r.get("mapzoom"),v=!p||!d?t.gmapBounds():null;return setTimeout(function(){var t=e.tm=TimeMap.init({mapSelector:e.$(".map"),timelineSelector:e.$(".timeline"),options:{openInfoWindow:l,closeInfoWindow:$.noop,mapCenter:p,mapZoom:d,centerOnItems:!1},datasets:[{id:"places",theme:TimeMapTheme.createCircleTheme(),type:"progressive",type:"progressive",options:{start:f.getStartDate(),dataMinDate:f.getStartDate(),dataMaxDate:f.getEndDate(),interval:946684806845,formatUrl:h,loader:new c({transformFunction:function(e){var t=e.options,n=18,s=google.maps,o={};return r.get("placeTheme")=="feature"?o=i.themeByType(e.options.place):o=a(e.options.place.get("frequency")),color=o.color,e.start=f.getLabelIndex(e.options.page.id)+" AD",t.theme=o,t.markerImages=["ff","cc","99","66","33"].map(function(e){var t=TimeMapTheme.getCircleUrl(n,color,e);return new s.MarkerImage(t,new s.Size(n,n),undefined,new s.Point(n/2,n/2))}),e}})}}],bands:o});e.scrollTo(r.get("pageid")||e.model.firstId()),e.updateMapTypeId();var n=t.getNativeMap();n.setOptions({styles:s,panControl:!0,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE}}),v&&n.fitBounds(v),e.infoWindowView.map=t.map,e.infoWindowView.render(),t.map.endPan.addHandler(function(){r.set({mapcenter:t.map.getCenter()})}),t.map.changeZoom.addHandler(function(){r.set({mapzoom:t.map.getZoom()})});var n=t.getNativeMap();google.maps.event.addListener(n,"maptypeid_changed",function(){r.set({maptypeid:n.getMapTypeId()})}),t.addFilter("map",function(e){var n=t.timeline.getBand(0),r=n.getMaxVisibleDate().getTime(),i=n.getMinVisibleDate().getTime(),s=e.opts.markerImages,o=Math.floor((r-e.getStartTime())/(r-i)*s.length);return o>=0&&o<s.length&&e.getNativePlacemark().setIcon(s[o]),!0}),t.filter("map"),t.timeline.layout()},0),this},renderAutoplayControls:function(){var e=r.get("autoplay");this.$(".timeline-play").toggleClass("on",!e),this.$(".timeline-stop").toggleClass("on",e)},updateTimeline:function(){var e=this,t=!r.get("scrolljump");e.scrollTo(r.get("pageid")||e.model.firstId(),t),r.unset("scrolljump")},updateMapZoom:function(){var e=this.tm.map,t=r.get("mapzoom");e.getZoom()!=t&&e.setZoom(t)},updateMapCenter:function(){var e=this.tm.map,t=r.get("mapcenter");e.getCenter().roughlyEquals(t,e.getZoom())||e.setCenter(t)},updateMapTypeId:function(){var e=this.tm.getNativeMap(),t=r.get("maptypeid");t&&e.setMapTypeId(t)},updateAutoplay:function(){var e=this,t=r.get("autoplay");if(t){if(!this._intervalId){var n=this.tm.timeline.getBand(0),i=n.getCenterVisibleDate(),s=85e7,o=25;this._intervalId=window.setInterval(function(){n.getMaxVisibleDate().getTime()<n._theme.timeline_stop.getTime()?(i=new Date(i.getTime()+s),n.setCenterVisibleDate(i)):e.stopAutoplay()},o)}}else window.clearInterval(this._intervalId),this._intervalId=null},scrollTo:function(e,t){var n=this,r=n.getLabeller(),i=r.labelToDate(e);n.animation&&n.animation.stop(),t?(SimileAjax.Graphics.createAnimation=function(e,t,r,i,s){return n.animation=new SimileAjax.Graphics._Animation(e,t,r,i,function(){n.animation=null}),n.animation},n.tm.scrollToDate(i,!1,!0)):n.tm.scrollToDate(i)},events:{"click .timeline-play":"startAutoplay","click .timeline-stop":"stopAutoplay"},startAutoplay:function(){r.set({autoplay:!0})},stopAutoplay:function(){r.set({autoplay:!1})}})}),define("views/TimeMapLegendView",["gv"],function(e){return e.View.extend({className:"timemap-legend-view",template:"#timemap-legend-template",render:function(){var t=e.state,n=t.get("placeTheme"),r=this;return r.$el.html(r.template),r.$(".timemap-legend-by-frequency,.timemap-legend-by-feature").hide(),n=="feature"?this.renderLegendByFeature():this.renderLegendByFrequency()},renderLegendByFrequency:function(){var t=this;t.$(".timemap-legend-by-frequency").show(),e.settings.colorThemes.forEach(function(e){var n=e.eventIcon;t.$(".images").append('<img src="'+n+'">')})},renderLegendByFeature:function(){var t=this;t.$(".timemap-legend-by-feature").show();for(var n in e.settings.placeTypes){var r=n,i=e.settings.placeTypes[n],s=TimeMapTheme.createCircleTheme({color:i}),o=s.eventIcon,u=function(t){return t=t.replace("_"," ").toLowerCase(),t.charAt(0).toUpperCase()+t.slice(1)};t.$(".place-types").append(u(n)+'<img src="'+o+'">')}}})}),define("views/PlaceReferencesView",["gv","views/BookView"],function(e,t){var n=e.state;return t.extend({className:"place-references-view",render:function(){var e=this,t=e.model,r=n.get("placeid"),i;if(!r)return;return i=t.places.get(r),i.ready(function(){e.$el.append("<h4>No. of References by Book and Chapter</h4>");if(t.supportsSections()){var n=[];i.get("sparkData").forEach(function(e){var r=[];parseInt(e.count)>0&&e.pi.forEach(function(e){e=parseInt(e)+1;var r=e,i=t.pageIdToRef(e),s='<span class="reference" data-page-id="'+e+'">'+i.page+"</span>",o=i.section;o==""&&(o=0),typeof n[o]=="undefined"&&(n[o]=[]),n[o].push(s)})});for(var r in n){var s=n[r];$("<p><b>Bk. "+r+"</b> ("+s.length+"), Chapters: "+s.join(" ")+"</p>").appendTo(e.el)}}else{var s=[];i.get("sparkData").forEach(function(e){var t=[];if(parseInt(e.count)>0){var n=!0;e.pi.forEach(function(e){e=parseInt(e)+1;var t='<span class="reference" data-page-id="'+e+'">'+e+"</span>";n=!1,s.push(t)}),s.push(" | ")}}),$("<p><b>Pages:</b> "+s.join(" ")+"</p>").appendTo(e.el)}}),this},events:{"click span.reference":"uiPageClick"},uiPageClick:function(e){var t=$(e.target).attr("data-page-id");t&&n.set({pageid:t,view:"reading-view"})}})}),define("views/PlaceSummaryView",["gv","views/BookView","views/PlaceFrequencyBarsView","views/PlaceReferencesView"],function(e,t,n,r){var i=e.state,s=e.settings;return t.extend({className:"place-summary-view loading",template:"#place-summary-template",clear:function(){this.freqBars&&this.freqBars.clear(),t.prototype.clear.call(this)},render:function(){var e=this,t=e.model,o=i.get("placeid"),u;if(!o)return;return u=t.places.get(o),u.ready(function(){e.$el.removeClass("loading"),e.renderTemplate(u.toJSON());var i=e.freqBars=new n({model:t,place:u,el:e.$("div.frequency-bars")[0]}),s=e.placeRefs=new r({model:t,place:u,el:e.$("div.place-references")[0]});i.render(),s.render(),e.renderBarHighlight()}),s.REPORT_PROBLEM_PLACE_URL===!1&&this.$el.find(".change-this, .change-this-divider").hide(),this},uiReportAProblem:function(){if(s.REPORT_PROBLEM_PLACE_URL){var e=i.get("placeid"),t=s.REPORT_PROBLEM_PLACE_URL.replace("{place-id}",e);window.open(t)}},events:{"click .change-this":"uiReportAProblem"},renderBarHighlight:function(){this.freqBars.updateHighlight()}})}),define("views/BookReferencesView",["gv","views/BookView","models/Collection"],function(e,t,n){var r=e.state,i;return i=n.extend({model:Backbone.Model,initialize:function(e,t){this.placeId=t.placeId},url:function(){return e.settings.API_ROOT+"/places/"+this.placeId+"/books.json"},comparator:function(e){return-e.get("tokenCount")}}),t.extend({className:"book-refs-view loading",render:function(){var e=this,t=e.model,n=r.get("placeid"),s;if(!n)return;return s=e.refs=new i([],{placeId:n}),s.fetch({success:function(){e.renderRefs()},error:function(){DEBUG&&console.error("Failed to load related places")}}),this},renderRefs:function(){var t=this,n=t.refs,i=r.get("bookid"),s=_.template('<p><span class="book-title control on" data-book-id="<%= id %>"><%= title %></span> (<%= tokenCount %>)</p>');t.$el.removeClass("loading"),n=n.filter(function(e){return e.id!=i}),n.length&&(t.$el.append("<h4>Book References</h4>"),n.slice(0,e.settings.bookRefCount).forEach(function(e){t.$el.append(s(e.toJSON()))}))},events:{"click span.book-title":"uiRefClick"},uiRefClick:function(t){var n=$(t.target).attr("data-book-id"),i=r.get("placeid");n&&(r.set("bookid",n),r.set({placeid:i}),e.app.updateView(!0))}})}),define("views/RelatedPlacesView",["gv","views/BookView"],function(e,t){var n=e.state;return t.extend({className:"related-places-view",render:function(){var t=this,r=t.model,i=n.get("placeid"),s;if(!i)return;return s=r.places.get(i),s.ready(function(){var n=s.related(r).slice(0,e.settings.relatedCount);t.$el.append("<h4>Top Related Places</h4>"),n.forEach(function(e){$('<p><span class="place" data-place-id="'+e.place.id+'">'+e.place.get("title")+"</span> ("+e.count+")</p>").appendTo(t.el)})}),this},events:{"click span.place":"uiPlaceClick"},uiPlaceClick:function(t){var r=$(t.target).attr("data-place-id");r&&(n.set("placeid",r),e.app.updateView(!0))}})}),define("views/BookPlaceMapView",["gv","views/BookView"],function(e,t){var n=e.state,r=e.settings,i=r.mapStyle,s=r.colorThemes;return t.extend({className:"place-map-view panel fill",render:function(){if(DEBUG&&!window.google)return;var t=this,o=n.get("placeid"),u=t.model,a;if(!o)return;a=u.places.get(o),a.ready(function(){var o=a.related(u).slice(0,r.relatedCount),f=a.gmapLatLng(),l=google.maps,c=d3.scale.quantize().domain([1,u.places.first().get("frequency")]).range(s),h=d3.scale.linear().domain([1,d3.max(o,function(e){return e.count})]).range([1,10]),p=o.reduce(function(e,t){return e.extend(t.place.gmapLatLng())},new l.LatLngBounds).extend(f),d=$("<div></div>").appendTo(t.el);setTimeout(function(){function v(t,i){i=i||{};var o={},a=18,f=a/2,h=new l.Size(a,a),p=new l.Point(f,f);n.get("placeTheme")=="feature"?o=r.themeByType(t):o=c(t.get("frequency")),title=i.title||t.get("title"),icon=i.icon||TimeMapTheme.getCircleUrl(a,o.color,"99");var d=marker=new l.Marker({icon:new l.MarkerImage(icon,h,new l.Point(0,0),p,h),position:t.gmapLatLng(),map:s,title:title,clickable:!i.noclick,zIndex:i.zIndex});i.noclick||l.event.addListener(marker,"click",function(){n.set({placeid:t.id}),e.app.updateView(!0)}),u.push(marker)}var s=new l.Map(d[0],{center:p.getCenter(),zoom:4,mapTypeId:l.MapTypeId.TERRAIN,streetViewControl:!1,styles:i}),u=t.markers=[];s.fitBounds(p),v(a,{icon:"images/star.png",noclick:!0,zIndex:1e3}),o.forEach(function(e){new l.Polyline({path:[f,e.place.gmapLatLng()],map:s,clickable:!1,geodesic:!0,strokeColor:"steelblue",strokeOpacity:.7,strokeWeight:h(e.count)}),v(e.place,{title:e.place.get("title")+": "+e.count+" co-reference"+(e.count>1?"s":"")})})},0)})}})}),define("views/BookPlaceFlickrView",["gv","views/BookView"],function(e,t){var n=e.state,r="http://api.flickr.com/services/feeds/photos_public.gne?tags=pleiades%3A*%3D[id]&format=json&jsoncallback=?";return t.extend({className:"place-flickr-view panel fill",template:"#flickr-photos-template",initialize:function(){this.photoTemplate=_.template($("#flickr-photo-template").html())},render:function(){var e=this,t=e.model,i=n.get("placeid");e.$el.html(e.template);if(!i)return;var s=t.places.get(i),o=s.get("uri"),u=o.split("/"),a=u[u.length-1];e.$el.addClass("loading"),$.ajax({url:r.replace("[id]",a),dataType:"jsonp",success:function(t){e.$el.removeClass("loading");var n=t&&t.items||[];n.length?(e.$("span.flickr-link a").attr("href",t.link).parent().show(),n.slice(0,10).forEach(function(t){t.src=t.media.m.replace("_m.jpg","_s.jpg"),e.$(".photos").append(e.photoTemplate(t))})):e.$(".photos").append("<p>No photos were found.</p>")}})}})});/*!
 * Copyright (c) 2011, Nick Rabinowitz / Google Ancient Places Project
 * Licensed under the BSD License (see LICENSE.txt)
 */

// removed in production by uglify
if (typeof DEBUG === 'undefined') {
    DEBUG = true;
    // cache busting for development
    require.config({
        urlArgs: "bust=" +  (new Date()).getTime()
    });
}

require.config({
    baseUrl: 'app'
});

require(['gv', 'config', 'models/Books', 'models/State', 'views/AppView', 'views/Layout', 'routers/Router'], 
    function(gv, config, Books) {
    
    // change Backbone.sync to use JSON/JSONP
    var defaultSync = Backbone.sync;
    Backbone.sync = function(method, model, options) {
        options = _.extend({
            dataType: gv.settings.API_DATA_TYPE,
            cache: true
        }, options);
        defaultSync(method, model, options);
    };
    
    // initialize empty book list
    gv.books = new Books();
    
    // add parameters for permalinks
    gv.addParameter('bookid', { deserialize: parseInt });
    gv.addParameter('pageid', { deserialize: String });
    gv.addParameter('placeid', { deserialize: parseInt });
    gv.addParameter('pageview');
    gv.addParameter('barsort');
    gv.addParameter('mapzoom', { deserialize: parseInt });
    gv.addParameter('mapcenter', { 
        deserialize: function(s) {
            var params = s.split(",");
            return params.length < 2 ? null :
                new mxn.LatLonPoint(
                    parseFloat(params[0]),
                    parseFloat(params[1])
                );
        }, 
        serialize: function(value) {
            return value.lat + "," + value.lng;
        }
    });
    
    // kick things off
    $(function() {
        gv.configure(config)
            .start();
        if (DEBUG) console.log('Application initialized');
    });
    
});