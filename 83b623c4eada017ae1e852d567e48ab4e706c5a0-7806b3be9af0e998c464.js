(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Max Krieger","description":"ludic representationalist","author":"@maxkriegers"}}}}')},"8+s/":function(t,e,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,o=r("q1tI"),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):r&&(u=r(u))}var f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},"8ypT":function(t,e,r){},Bl7J:function(t,e,r){"use strict";var n=r("f98A"),o=r("q1tI"),a=r.n(o),i=r("Wbzz"),c=r("IP2g"),u=r("8tEE");r("7O5W").library.add(u.d,u.b,u.c,u.a);var s=function(t){var e=t.siteTitle;return a.a.createElement("header",{style:{background:"none",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:720,padding:"1.5rem 0.8rem 0.3rem 0.8rem",borderBottom:"5px solid #312D05",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}},a.a.createElement("h1",{style:{margin:0,fontFamily:"Chicago Plain"}},a.a.createElement(i.Link,{to:"/",style:{color:"#312D05",textDecoration:"none"}},e)),a.a.createElement("div",{style:{fontSize:"1.2rem"},className:"iconsheet"},a.a.createElement("a",{href:"https://twitter.com/maxkriegers"},a.a.createElement(c.a,{icon:["fab","twitter"]})),a.a.createElement("a",{href:"https://www.goodreads.com/maxkrieger"},a.a.createElement(c.a,{icon:["fab","goodreads-g"]})),a.a.createElement("a",{href:"https://github.com/maxkrieger"},a.a.createElement(c.a,{icon:["fab","github"]})))))};s.defaultProps={siteTitle:""};var l=s;r("8ypT"),e.a=function(t){var e=t.children,r=n.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{siteTitle:r.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:720,padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,e),a.a.createElement("footer",null,(new Date).getFullYear())))}},IP2g:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));r("2Spj"),r("9VmF"),r("Tze0"),r("KKXr"),r("DNiP"),r("pIFo"),r("bWfx"),r("XfO3"),r("HEwt"),r("a1Th"),r("h7Nl"),r("LK8F"),r("V+eJ"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("HAE/"),r("rE2o"),r("ioFf");var n=r("7O5W"),o=r("17x9"),a=r.n(o),i=r("q1tI"),c=r.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function d(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function m(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=y(e.slice(0,n)),a=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:t[o]=a,t}),{})}var b=!1;try{b=!0}catch(w){}function h(t){return null===t?null:"object"===u(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function g(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?s({},t,e):{}}function v(t){var e=t.forwardedRef,r=p(t,["forwardedRef"]),o=r.icon,a=r.mask,i=r.symbol,c=r.className,u=r.title,l=h(o),y=g("classes",[].concat(d(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,a=t.inverse,i=t.border,c=t.listItem,u=t.flip,l=t.size,f=t.rotation,p=t.pull,d=(s(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===u||"both"===u,"fa-flip-vertical":"vertical"===u||"both"===u},"fa-".concat(l),null!=l),s(e,"fa-rotate-".concat(f),null!=f&&0!==f),s(e,"fa-pull-".concat(p),null!=p),s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(d).map((function(t){return d[t]?t:null})).filter((function(t){return t}))}(r)),d(c.split(" ")))),m=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),w=g("mask",h(a)),O=Object(n.icon)(l,f({},y,{},m,{},w,{symbol:i,title:u}));if(!O)return function(){var t;!b&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",l),null;var A=O.abstract,E={ref:e};return Object.keys(r).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(E[t]=r[t])})),T(A[0],E)}v.displayName="FontAwesomeIcon",v.propTypes={border:a.a.bool,className:a.a.string,mask:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),fixedWidth:a.a.bool,inverse:a.a.bool,flip:a.a.oneOf(["horizontal","vertical","both"]),icon:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),listItem:a.a.bool,pull:a.a.oneOf(["right","left"]),pulse:a.a.bool,rotation:a.a.oneOf([0,90,180,270]),size:a.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a.a.bool,symbol:a.a.oneOfType([a.a.bool,a.a.string]),title:a.a.string,transform:a.a.oneOfType([a.a.string,a.a.object]),swapOpacity:a.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var T=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),a=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=m(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[y(e)]=n}return t}),{attrs:{}}),i=n.style,c=void 0===i?{}:i,u=p(n,["style"]);return a.attrs.style=f({},a.attrs.style,{},c),e.apply(void 0,[r.tag,f({},a.attrs,{},u)].concat(d(o)))}.bind(null,c.a.createElement)},ZhWT:function(t,e,r){r("SRfc"),r("RW0V"),r("a1Th"),r("h7Nl"),r("OEbY"),r("Oyvg"),r("LK8F"),r("T39b"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("9AAn");var n="undefined"!=typeof Element,o="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=r.length)return!1;for(u=c;0!=u--;)if(!t(e[u],r[u]))return!1;return!0}if(o&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!r.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!t(u.value[1],r.get(u.value[0])))return!1;return!0}if(a&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!r.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if((c=e.length)!=r.length)return!1;for(u=c;0!=u--;)if(e[u]!==r[u])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(r,s[u]))return!1;if(n&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!t(e[s[u]],r[s[u]]))return!1;return!0}return e!=e&&r!=r}(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},"dZ+Y":function(t,e,r){"use strict";var n=r("XKFU"),o=r("CkkT")(3);n(n.P+n.F*!r("LyE8")([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}})},f98A:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Max Krieger"}}}}')},qhky:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return mt}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,o,a,i,c=r("17x9"),u=r.n(c),s=r("8+s/"),l=r.n(s),f=r("ZhWT"),p=r.n(f),d=r("q1tI"),y=r.n(d),m=r("MgzW"),b=r.n(m),h="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),O="cssText",A="href",E="http-equiv",S="innerHTML",C="itemprop",j="name",x="property",P="rel",k="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",R="encodeSpecialCharacters",F="onChangeClientState",D="titleTemplate",q=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),W=[T.NOSCRIPT,T.SCRIPT,T.STYLE],K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},_=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},Y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},U=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=$(t,T.TITLE),r=$(t,D);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=$(t,N);return e||n||void 0},J=function(t){return $(t,F)||function(){}},X=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return z({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==t.indexOf(a)&&r[a])return e.concat(r)}return e}),[])},Z=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+K(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,a=Object.keys(t),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===e.indexOf(u)||r===P&&"canonical"===t[r].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(r=u),-1===e.indexOf(c)||c!==S&&c!==O&&c!==C||(r=c)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=b()({},n[c],o[c]);n[c]=u}return t}),[]).reverse()},$=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},Q=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:t.requestAnimationFrame||Q,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,at=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(T.BODY,n),ut(T.HTML,o),ct(f,p);var d={baseTag:st(T.BASE,r),linkTags:st(T.LINK,a),metaTags:st(T.META,i),noscriptTags:st(T.NOSCRIPT,c),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,l)},y={},m={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(y[t]=r),n.length&&(m[t]=d[t].oldTags)})),e&&e(),u(t,y,m)},it=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),ut(T.TITLE,e)},ut=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(e),c=0;c<i.length;c++){var u=i[c],s=e[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},st=function(t,e){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===S)r.innerHTML=e.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(t,e){return i=e,r.isEqualNode(t)}))?o.splice(i,1):a.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:a}},lt=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[L[r]||r]=t[r],e}),e)},pt=function(t,e,r){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})["data-react-helmet"]=!0,o=ft(r,n),[y.a.createElement(T.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=lt(r),a=it(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+U(a,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+U(a,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case h:case g:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(t){var r=L[t]||t;if(r===S||r===O){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),y.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===S||t===O)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+U(n[e],r)+'"';return t?t+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===W.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,r)}}}},dt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(T.BASE,e,n),bodyAttributes:pt(h,r,n),htmlAttributes:pt(g,o,n),link:pt(T.LINK,a,n),meta:pt(T.META,i,n),noscript:pt(T.NOSCRIPT,c,n),script:pt(T.SCRIPT,u,n),style:pt(T.STYLE,s,n),title:pt(T.TITLE,{title:f,titleAttributes:p},n)}},yt=l()((function(t){return{baseTag:G([A,I],t),bodyAttributes:X(h,t),defer:$(t,M),encode:$(t,R),htmlAttributes:X(g,t),linkTags:Z(T.LINK,[P,A],t),metaTags:Z(T.META,[j,w,E,x,C],t),noscriptTags:Z(T.NOSCRIPT,[S],t),onChangeClientState:J(t),scriptTags:Z(T.SCRIPT,[k,S],t),styleTags:Z(T.STYLE,[O],t),title:V(t),titleAttributes:X(v,t)}}),(function(t){ot&&rt(ot),t.defer?ot=et((function(){at(t,(function(){ot=null}))})):(at(t),ot=null)}),dt)((function(){return null})),mt=(o=yt,i=a=function(t){function e(){return B(this,e),Y(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return z({},n,((e={})[r.type]=[].concat(n[r.type]||[],[z({},o,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(n.type){case T.TITLE:return z({},o,((e={})[n.type]=i,e.titleAttributes=z({},a),e));case T.BODY:return z({},o,{bodyAttributes:z({},a)});case T.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((r={})[n.type]=z({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=z({},e);return Object.keys(t).forEach((function(e){var n;r=z({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return y.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[q[r]||r]=t[r],e}),e)}(_(o,["children"]));switch(r.warnOnInvalidChildren(t,a),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=_(t,["children"]),n=z({},r);return e&&(n=this.mapChildrenToProps(e,n)),y.a.createElement(o,n)},H(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(y.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);mt.renderStatic=mt.rewind}).call(this,r("yLpj"))},vrFN:function(t,e,r){"use strict";var n=r("51K9"),o=r("q1tI"),a=r.n(o),i=r("qhky");function c(t){var e=t.description,r=t.lang,o=t.meta,c=t.title,u=n.data.site,s=e||u.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c+" | Max Krieger"},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c}}]);
//# sourceMappingURL=83b623c4eada017ae1e852d567e48ab4e706c5a0-7806b3be9af0e998c464.js.map