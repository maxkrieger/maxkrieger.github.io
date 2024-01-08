"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[82],{7606:function(e,t,r){r.d(t,{G:function(){return y}});var n=r(4694),a=r(5697),o=r.n(a),i=r(7294);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=d(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var h=!1;try{h=!0}catch(x){}function b(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function y(e){var t=e.forwardedRef,r=m(e,["forwardedRef"]),a=r.icon,o=r.mask,i=r.symbol,s=r.className,c=r.title,d=r.titleId,f=b(a),x=g("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,s=e.listItem,c=e.flip,u=e.size,m=e.rotation,p=e.pull,d=(l(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),l(t,"fa-rotate-".concat(m),null!=m&&0!==m),l(t,"fa-pull-".concat(p),null!=p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),p(s.split(" ")))),v=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),k=g("mask",b(o)),O=(0,n.icon)(f,u({},x,{},v,{},k,{symbol:i,title:c,titleId:d}));if(!O)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var N=O.abstract,j={ref:t};return Object.keys(r).forEach((function(e){y.defaultProps.hasOwnProperty(e)||(j[e]=r[e])})),w(N[0],j)}y.displayName="FontAwesomeIcon",y.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=f(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,l=m(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},s),t.apply(void 0,[r.tag,u({},o.attrs,{},l)].concat(p(a)))}.bind(null,i.createElement)},3105:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return s},default:function(){return m}});r(7294);var n,a=r(4983),o=r(5127),i=["components"],s={},l=(n="Tweet",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),c={_frontmatter:s},u=o.Z;function m(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);return(0,a.mdx)(u,Object.assign({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"how-to-see-the-unseeable",style:{position:"relative"}},(0,a.mdx)("a",{parentName:"h1",href:"#how-to-see-the-unseeable","aria-label":"how to see the unseeable permalink",className:"anchor before"},(0,a.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How to see the unseeable"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"WORK IN PROGRESS PAGE")),(0,a.mdx)("p",null,"What happens when you give high schoolers 20 minutes, a bunch of esoteric Wikipedia clippings, and 36 tubs of play-doh?"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"They mold together new kinds of visualizations!")),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://cmusplash.learningu.org/"},"Carnegie Mellon's first SPLASH")," was in February 2020. ",(0,a.mdx)("a",{parentName:"p",href:"https://www.learningu.org/current-programs/"},"SPLASH"),"\nis a unique event hosted at many schools across the country that exposes high\nschoolers to campus and college-level topics taught by undergrads."),(0,a.mdx)("p",null,"My course was on visual thinking in abstract domains."),(0,a.mdx)("h2",{id:"course-description",style:{position:"relative"}},(0,a.mdx)("a",{parentName:"h2",href:"#course-description","aria-label":"course description permalink",className:"anchor before"},(0,a.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Course description"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("strong",{parentName:"p"},"How to see the unseeable: visual thinking on the edges of science"))),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"If “a picture is worth a thousand words”, how do you look at something that can't be photographed? We can't \"see\" math any better than we can see a black hole, or the WiFi coming from our phones, or the network of friends we have. Somehow, we can still think intuitively about these unseeable things through beautiful illustrations, diagrams, and metaphors.")),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"We'll learn what makes a good picture-for-thinking using tools from cognitive science. Afterwards, we'll create our own pictures of unseeable things with these tools. No drawing skills required, we'll be using physical materials (and possibly computers)!")),(0,a.mdx)("hr",null),(0,a.mdx)("p",null,"I was particularly inspired by Bruno Latour's 1986 essay, ",(0,a.mdx)("a",{parentName:"p",href:"http://www.bruno-latour.fr/sites/default/files/21-DRAWING-THINGS-TOGETHER-GB.pdf"},(0,a.mdx)("em",{parentName:"a"},"Visualization and Cognition")),":"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"...you have to ",(0,a.mdx)("strong",{parentName:"p"},"invent")," objects which have the properties of being ",(0,a.mdx)("strong",{parentName:"p"},"mobile")," but also ",(0,a.mdx)("strong",{parentName:"p"},"immutable"),", ",(0,a.mdx)("strong",{parentName:"p"},"presentable"),", ",(0,a.mdx)("strong",{parentName:"p"},"readable")," and ",(0,a.mdx)("strong",{parentName:"p"},"combinable")," with one another...")),(0,a.mdx)("p",null,"One heuristic to invent new visualizations is to find analogies. Dan Lockton's ",(0,a.mdx)("a",{parentName:"p",href:"https://newmetaphors.com/"},'"New Metaphors"')," was especially useful framing here, and I used the ",(0,a.mdx)("a",{parentName:"p",href:"http://imaginari.es/new-metaphors/"},"generator tool")," as a warm-up exercise for the class."),(0,a.mdx)("p",null,"I wanted to experiment with embodied pedagogical methods that got students working with their hands, to apply concepts that I taught in a more traditional lecture format. My class conducted a visualization exercise using play-doh to explain unknown concepts. The results were diverse and fascinating, and I'm still processing what they mean for pedagogy as a whole."),(0,a.mdx)("p",null,"Here are some of the results. The students were instructed to make a visual explanation using analogies for a Wikipedia clipping of their choosing."),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874799711092736",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874801896370176",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874804886904832",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874806635991040",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874808347205632",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874810704465922",hideConversation:!0,mdxType:"Tweet"}))}m.isMDXComponent=!0},5127:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),a=r(5444),o=r(7606),i=r(7190);r(4694).library.add(i.mdU,i.UvU,i.hwn,i.zhw,i.kyk,i.Fgt);var s=function(e){var t=e.siteTitle;return n.createElement("header",{style:{background:"none",marginBottom:"1.45rem"}},n.createElement("div",{style:{margin:"0 auto",maxWidth:720,padding:"1.5rem 0.8rem 0.3rem 0.8rem",borderBottom:"5px solid #312D05",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}},n.createElement("h1",{style:{margin:0,fontFamily:"Chicago Plain"}},n.createElement(a.Link,{to:"/",style:{color:"#312D05",textDecoration:"none"}},t)),n.createElement("div",{style:{fontSize:"1.2rem"},className:"iconsheet"},n.createElement("a",{href:"https://twitter.com/maxkriegers"},n.createElement(o.G,{icon:["fab","twitter"]})),n.createElement("a",{href:"https://www.goodreads.com/maxkrieger"},n.createElement(o.G,{icon:["fab","goodreads-g"]})),n.createElement("a",{href:"https://github.com/maxkrieger"},n.createElement(o.G,{icon:["fab","github"]})),n.createElement("a",{rel:"me",href:"https://orcid.org/0000-0002-2639-1084"},n.createElement(o.G,{icon:["fab","orcid"]})))))};s.defaultProps={siteTitle:""};var l=s,c=function(e){var t=e.children,r=(0,a.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(l,{siteTitle:r.site.siteMetadata.title}),n.createElement("div",{style:{margin:"0 auto",maxWidth:720,padding:"0 1.0875rem 1.45rem"}},n.createElement("main",null,t),n.createElement("footer",null,(new Date).getFullYear())))}}}]);
//# sourceMappingURL=component---src-pages-seeing-the-unseeable-mdx-e35eec36d4f046a33a21.js.map