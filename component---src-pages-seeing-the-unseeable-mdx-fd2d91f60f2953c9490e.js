"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[82],{7606:function(e,t,r){r.d(t,{G:function(){return x}});var n=r(4694),a=r(5697),o=r.n(a),i=r(7294);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var h=["style"];var b=!1;try{b=!0}catch(k){}function y(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var w=["forwardedRef"];function x(e){var t=e.forwardedRef,r=p(e,w),a=r.icon,o=r.mask,i=r.symbol,s=r.className,c=r.title,d=r.titleId,f=r.maskId,h=y(a),k=g("classes",[].concat(m(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,p=e.spinReverse,m=e.pulse,d=e.fixedWidth,f=e.inverse,h=e.border,b=e.listItem,y=e.flip,g=e.size,w=e.rotation,x=e.pull,v=(u(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":p,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":d,"fa-inverse":f,"fa-border":h,"fa-li":b,"fa-flip":!0===y,"fa-flip-horizontal":"horizontal"===y||"both"===y,"fa-flip-vertical":"vertical"===y||"both"===y},"fa-".concat(g),null!=g),u(t,"fa-rotate-".concat(w),null!=w&&0!==w),u(t,"fa-pull-".concat(x),null!=x),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map((function(e){return v[e]?e:null})).filter((function(e){return e}))}(r)),m(s.split(" ")))),O=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),N=g("mask",y(o)),S=(0,n.icon)(h,l(l(l(l({},k),O),N),{},{symbol:i,title:c,titleId:d,maskId:f}));if(!S)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",h),null;var j=S.abstract,T={ref:t};return Object.keys(r).forEach((function(e){x.defaultProps.hasOwnProperty(e)||(T[e]=r[e])})),v(j[0],T)}x.displayName="FontAwesomeIcon",x.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},x.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=f(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[f(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=p(n,h);return o.attrs.style=l(l({},o.attrs.style),s),t.apply(void 0,[r.tag,l(l({},o.attrs),c)].concat(m(a)))}.bind(null,i.createElement)},5592:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),a=r(1082),o=r(7606),i=r(7190);r(4694).library.add(i.mdU,i.UvU,i.hwn,i.zhw,i.kyk,i.Fgt);var s=function(e){var t=e.siteTitle;return n.createElement("header",{style:{background:"none",marginBottom:"1.45rem"}},n.createElement("div",{style:{margin:"0 auto",maxWidth:720,padding:"1.5rem 0.8rem 0.3rem 0.8rem",borderBottom:"5px solid #312D05",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}},n.createElement("h1",{style:{margin:0,fontFamily:"Chicago Plain"}},n.createElement(a.Link,{to:"/",style:{color:"#312D05",textDecoration:"none"}},t)),n.createElement("div",{style:{fontSize:"1.2rem"},className:"iconsheet"},n.createElement("a",{href:"https://twitter.com/maxkriegers"},n.createElement(o.G,{icon:["fab","twitter"]})),n.createElement("a",{href:"https://www.goodreads.com/maxkrieger"},n.createElement(o.G,{icon:["fab","goodreads-g"]})),n.createElement("a",{href:"https://github.com/maxkrieger"},n.createElement(o.G,{icon:["fab","github"]})),n.createElement("a",{rel:"me",href:"https://orcid.org/0000-0002-2639-1084"},n.createElement(o.G,{icon:["fab","orcid"]})))))};s.defaultProps={siteTitle:""};var l=s,c=function(e){var t=e.children,r=(0,a.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(l,{siteTitle:r.site.siteMetadata.title}),n.createElement("div",{style:{margin:"0 auto",maxWidth:720,padding:"0 1.0875rem 1.45rem"}},n.createElement("main",null,t),n.createElement("footer",null,(new Date).getFullYear())))}},9379:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return s},default:function(){return p}});r(7294);var n,a=r(4983),o=r(5592),i=["components"],s={},l=(n="Tweet",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),c={_frontmatter:s},u=o.Z;function p(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);return(0,a.mdx)(u,Object.assign({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"how-to-see-the-unseeable",style:{position:"relative"}},(0,a.mdx)("a",{parentName:"h1",href:"#how-to-see-the-unseeable","aria-label":"how to see the unseeable permalink",className:"anchor before"},(0,a.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"How to see the unseeable"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"WORK IN PROGRESS PAGE")),(0,a.mdx)("p",null,"What happens when you give high schoolers 20 minutes, a bunch of esoteric Wikipedia clippings, and 36 tubs of play-doh?"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"They mold together new kinds of visualizations!")),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://cmusplash.learningu.org/"},"Carnegie Mellon's first SPLASH")," was in February 2020. ",(0,a.mdx)("a",{parentName:"p",href:"https://www.learningu.org/current-programs/"},"SPLASH"),"\nis a unique event hosted at many schools across the country that exposes high\nschoolers to campus and college-level topics taught by undergrads."),(0,a.mdx)("p",null,"My course was on visual thinking in abstract domains."),(0,a.mdx)("h2",{id:"course-description",style:{position:"relative"}},(0,a.mdx)("a",{parentName:"h2",href:"#course-description","aria-label":"course description permalink",className:"anchor before"},(0,a.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Course description"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("strong",{parentName:"p"},"How to see the unseeable: visual thinking on the edges of science"))),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"If “a picture is worth a thousand words”, how do you look at something that can't be photographed? We can't \"see\" math any better than we can see a black hole, or the WiFi coming from our phones, or the network of friends we have. Somehow, we can still think intuitively about these unseeable things through beautiful illustrations, diagrams, and metaphors.")),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"We'll learn what makes a good picture-for-thinking using tools from cognitive science. Afterwards, we'll create our own pictures of unseeable things with these tools. No drawing skills required, we'll be using physical materials (and possibly computers)!")),(0,a.mdx)("hr",null),(0,a.mdx)("p",null,"I was particularly inspired by Bruno Latour's 1986 essay, ",(0,a.mdx)("a",{parentName:"p",href:"http://www.bruno-latour.fr/sites/default/files/21-DRAWING-THINGS-TOGETHER-GB.pdf"},(0,a.mdx)("em",{parentName:"a"},"Visualization and Cognition")),":"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"...you have to ",(0,a.mdx)("strong",{parentName:"p"},"invent")," objects which have the properties of being ",(0,a.mdx)("strong",{parentName:"p"},"mobile")," but also ",(0,a.mdx)("strong",{parentName:"p"},"immutable"),", ",(0,a.mdx)("strong",{parentName:"p"},"presentable"),", ",(0,a.mdx)("strong",{parentName:"p"},"readable")," and ",(0,a.mdx)("strong",{parentName:"p"},"combinable")," with one another...")),(0,a.mdx)("p",null,"One heuristic to invent new visualizations is to find analogies. Dan Lockton's ",(0,a.mdx)("a",{parentName:"p",href:"https://newmetaphors.com/"},'"New Metaphors"')," was especially useful framing here, and I used the ",(0,a.mdx)("a",{parentName:"p",href:"http://imaginari.es/new-metaphors/"},"generator tool")," as a warm-up exercise for the class."),(0,a.mdx)("p",null,"I wanted to experiment with embodied pedagogical methods that got students working with their hands, to apply concepts that I taught in a more traditional lecture format. My class conducted a visualization exercise using play-doh to explain unknown concepts. The results were diverse and fascinating, and I'm still processing what they mean for pedagogy as a whole."),(0,a.mdx)("p",null,"Here are some of the results. The students were instructed to make a visual explanation using analogies for a Wikipedia clipping of their choosing."),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874799711092736",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874801896370176",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874804886904832",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874806635991040",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874808347205632",hideConversation:!0,mdxType:"Tweet"}),(0,a.mdx)(l,{tweetLink:"https://twitter.com/maxkriegers/status/1233874810704465922",hideConversation:!0,mdxType:"Tweet"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-seeing-the-unseeable-mdx-fd2d91f60f2953c9490e.js.map