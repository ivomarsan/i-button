!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("i-button",[],t):"object"==typeof exports?exports["i-button"]=t():n["i-button"]=t()}(this,function(){return function(n){function t(o){if(a[o])return a[o].exports;var d=a[o]={i:o,l:!1,exports:{}};return n[o].call(d.exports,d,d.exports,t),d.l=!0,d.exports}var a={};return t.m=n,t.c=a,t.d=function(n,a,o){t.o(n,a)||Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(a,"a",a),a},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,a){"use strict";function o(n){a(1)}Object.defineProperty(t,"__esModule",{value:!0});var d=a(7),e=a(8),r=a(6),f=o,i=r(d.a,e.a,!1,f,"data-v-5f8bf5d4",null);t.default=i.exports},function(n,t,a){var o=a(2);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);a(4)("535d834a",o,!0)},function(n,t,a){t=n.exports=a(3)(void 0),t.push([n.i,"/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.is-color-green[data-v-5f8bf5d4], .is-outline-green[data-v-5f8bf5d4] {\n  color: #4cae4c !important;\n}\n.is-color-red[data-v-5f8bf5d4], .is-outline-red[data-v-5f8bf5d4] {\n  color: #d43f3a !important;\n}\n.is-color-blue[data-v-5f8bf5d4], .is-outline-blue[data-v-5f8bf5d4] {\n  color: #0488bb !important;\n}\n.is-color-gray[data-v-5f8bf5d4], .is-outline-gray[data-v-5f8bf5d4] {\n  color: #ada8a5 !important;\n}\n.is-color-pink[data-v-5f8bf5d4], .is-outline-pink[data-v-5f8bf5d4] {\n  color: #ff067c !important;\n}\n.is-color-orange[data-v-5f8bf5d4], .is-outline-orange[data-v-5f8bf5d4] {\n  color: #9400c8 !important;\n}\n.is-color-purple[data-v-5f8bf5d4], .is-outline-purple[data-v-5f8bf5d4] {\n  color: #9400c8 !important;\n}\n.is-color-yellow[data-v-5f8bf5d4], .is-outline-yellow[data-v-5f8bf5d4] {\n  color: #ffdf00 !important;\n}\n.is-color-white[data-v-5f8bf5d4], .is-outline-white[data-v-5f8bf5d4] {\n  color: #ffffff !important;\n}\n.is-color-black[data-v-5f8bf5d4], .is-outline-black[data-v-5f8bf5d4] {\n  color: #000000 !important;\n}\n.is-color-green[data-v-5f8bf5d4], .is-outline-green[data-v-5f8bf5d4] {\n  color: #4cae4c !important;\n}\n.is-color-red[data-v-5f8bf5d4], .is-outline-red[data-v-5f8bf5d4] {\n  color: #d43f3a !important;\n}\n.is-color-blue[data-v-5f8bf5d4], .is-outline-blue[data-v-5f8bf5d4] {\n  color: #0488bb !important;\n}\n.is-color-gray[data-v-5f8bf5d4], .is-outline-gray[data-v-5f8bf5d4] {\n  color: #ada8a5 !important;\n}\n.is-color-pink[data-v-5f8bf5d4], .is-outline-pink[data-v-5f8bf5d4] {\n  color: #ff067c !important;\n}\n.is-color-orange[data-v-5f8bf5d4], .is-outline-orange[data-v-5f8bf5d4] {\n  color: #9400c8 !important;\n}\n.is-color-purple[data-v-5f8bf5d4], .is-outline-purple[data-v-5f8bf5d4] {\n  color: #9400c8 !important;\n}\n.is-color-yellow[data-v-5f8bf5d4], .is-outline-yellow[data-v-5f8bf5d4] {\n  color: #ffdf00 !important;\n}\n.is-color-white[data-v-5f8bf5d4], .is-outline-white[data-v-5f8bf5d4] {\n  color: #ffffff !important;\n}\n.is-color-black[data-v-5f8bf5d4], .is-outline-black[data-v-5f8bf5d4] {\n  color: #000000 !important;\n}\n.is-outline-green[data-v-5f8bf5d4] {\n  border-color: #4cae4c;\n}\n.is-outline-red[data-v-5f8bf5d4] {\n  border-color: #d43f3a;\n}\n.is-outline-blue[data-v-5f8bf5d4] {\n  border-color: #0488bb;\n}\n.is-outline-gray[data-v-5f8bf5d4] {\n  border-color: #ada8a5;\n}\n.is-outline-pink[data-v-5f8bf5d4] {\n  border-color: #ff067c;\n}\n.is-outline-orange[data-v-5f8bf5d4] {\n  border-color: #ff9e00;\n}\n.is-outline-purple[data-v-5f8bf5d4] {\n  border-color: #9400c8;\n}\n.is-outline-yellow[data-v-5f8bf5d4] {\n  border-color: #ffdf00;\n}\n.is-outline-white[data-v-5f8bf5d4] {\n  border-color: #ffffff;\n}\n.is-outline-black[data-v-5f8bf5d4] {\n  border-color: #000000;\n}\n.is-background-green[data-v-5f8bf5d4] {\n  color: #ffffff;\n  background-color: #4cae4c;\n}\n.is-background-red[data-v-5f8bf5d4] {\n  color: #ffffff;\n  background-color: #d43f3a;\n}\n.is-background-blue[data-v-5f8bf5d4] {\n  color: #ffffff;\n  background-color: #0488bb;\n}\n.is-background-gray[data-v-5f8bf5d4] {\n  color: #000000;\n  background-color: #ada8a5;\n}\n.is-background-pink[data-v-5f8bf5d4] {\n  color: #ffffff;\n  background-color: #ff067c;\n}\n.is-background-orange[data-v-5f8bf5d4] {\n  color: #000000;\n  background-color: #9400c8;\n}\n.is-background-purple[data-v-5f8bf5d4] {\n  color: #ffffff;\n  background-color: #9400c8;\n}\n.is-background-yellow[data-v-5f8bf5d4] {\n  color: #000000;\n  background-color: #ffdf00;\n}\n.is-background-white[data-v-5f8bf5d4] {\n  color: #000000;\n  background-color: #ffffff;\n}\n.is-background-black[data-v-5f8bf5d4] {\n  color: #ffffff;\n  background-color: #000000;\n}\na[data-v-5f8bf5d4],\nbutton[data-v-5f8bf5d4] {\n  min-width: 0;\n  min-height: 3rem;\n  line-height: 3rem;\n  margin: 0 0.5rem;\n  padding: 0 1rem;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  cursor: pointer;\n  outline: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #000000;\n  font-family: inherit;\n  font-size: 13px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: 500;\n  letter-spacing: inherit;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  vertical-align: top;\n  white-space: nowrap;\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0) translate3d(0, 0, 0);\n}\na[data-v-5f8bf5d4]:focus,\n  button[data-v-5f8bf5d4]:focus {\n    outline: none;\n}\na[data-v-5f8bf5d4]::-moz-focus-inner,\n  button[data-v-5f8bf5d4]::-moz-focus-inner {\n    border: 0;\n}\na[data-v-5f8bf5d4]:hover,\n  button[data-v-5f8bf5d4]:hover {\n    text-decoration: none;\n}\na[data-v-5f8bf5d4]:hover:not([disabled]):not(.is-background-green):not(.is-background-red):not(.is-background-blue):not(.is-background-gray):not(.is-background-pink):not(.is-background-orange):not(.is-background-purple):not(.is-background-yellow):not(.is-background-white):not(.is-background-black),\n    button[data-v-5f8bf5d4]:hover:not([disabled]):not(.is-background-green):not(.is-background-red):not(.is-background-blue):not(.is-background-gray):not(.is-background-pink):not(.is-background-orange):not(.is-background-purple):not(.is-background-yellow):not(.is-background-white):not(.is-background-black) {\n      background-color: #f2f2f2;\n}\na:hover:not([disabled]).is-background-green[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-red[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-blue[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-gray[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-pink[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-orange[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-purple[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-yellow[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-white[data-v-5f8bf5d4], a:hover:not([disabled]).is-background-black[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-green[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-red[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-blue[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-gray[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-pink[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-orange[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-purple[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-yellow[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-white[data-v-5f8bf5d4],\n    button:hover:not([disabled]).is-background-black[data-v-5f8bf5d4] {\n      opacity: 0.8;\n}\na[data-v-5f8bf5d4]:active:not([disabled]),\n  button[data-v-5f8bf5d4]:active:not([disabled]) {\n    transform: scale(1.1);\n}\na.is-shadow[data-v-5f8bf5d4]:not([disabled]),\n  button.is-shadow[data-v-5f8bf5d4]:not([disabled]) {\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\na.md-icon-button .md-icon[data-v-5f8bf5d4], a.md-fab .md-icon[data-v-5f8bf5d4],\n  button.md-icon-button .md-icon[data-v-5f8bf5d4],\n  button.md-fab .md-icon[data-v-5f8bf5d4] {\n    position: absolute;\n    top: 1px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\na.md-icon-button[data-v-5f8bf5d4],\n  button.md-icon-button[data-v-5f8bf5d4] {\n    width: 3rem;\n    min-width: 3rem;\n    height: 3rem;\n    min-height: 3rem;\n    line-height: 3rem;\n    margin: 0 6px;\n    padding: 4px;\n    border-radius: 50%;\n}\na.md-icon-button[data-v-5f8bf5d4]:not([disabled]):hover,\n    button.md-icon-button[data-v-5f8bf5d4]:not([disabled]):hover {\n      background: none;\n}\na.md-fab[data-v-5f8bf5d4],\n  button.md-fab[data-v-5f8bf5d4] {\n    width: 56px;\n    height: 56px;\n    padding: 0;\n    min-width: 0;\n    overflow: hidden;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n    border-radius: 56px;\n    line-height: 56px;\n    background-clip: padding-box;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: background-color, box-shadow, transform;\n}\na.md-fab[data-v-5f8bf5d4]:hover, a.md-fab[data-v-5f8bf5d4]:focus,\n    button.md-fab[data-v-5f8bf5d4]:hover,\n    button.md-fab[data-v-5f8bf5d4]:focus {\n      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12);\n}\na.md-fab.md-mini[data-v-5f8bf5d4],\n    button.md-fab.md-mini[data-v-5f8bf5d4] {\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n}\na[disabled][data-v-5f8bf5d4],\n  button[disabled][data-v-5f8bf5d4] {\n    color: rgba(0, 0, 0, 0.26);\n    cursor: default;\n    pointer-events: none;\n}\na[disabled].is-shadow[data-v-5f8bf5d4], a[disabled].md-fab[data-v-5f8bf5d4],\n    button[disabled].is-shadow[data-v-5f8bf5d4],\n    button[disabled].md-fab[data-v-5f8bf5d4] {\n      background-color: rgba(0, 0, 0, 0.12);\n}\na[disabled].md-fab[data-v-5f8bf5d4],\n    button[disabled].md-fab[data-v-5f8bf5d4] {\n      box-shadow: none;\n}\na[data-v-5f8bf5d4]:after,\n  button[data-v-5f8bf5d4]:after {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-fab.md-fab-top-left[data-v-5f8bf5d4], .md-fab.md-fab-top-center[data-v-5f8bf5d4], .md-fab.md-fab-top-right[data-v-5f8bf5d4], .md-fab.md-fab-bottom-left[data-v-5f8bf5d4], .md-fab.md-fab-bottom-center[data-v-5f8bf5d4], .md-fab.md-fab-bottom-right[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-top-left[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-top-center[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-top-right[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-bottom-left[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-bottom-center[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-bottom-right[data-v-5f8bf5d4] {\n  margin: 0;\n  position: absolute;\n  z-index: 10;\n}\n.md-fab.md-fab-top-left[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-top-left[data-v-5f8bf5d4] {\n  top: 24px;\n  left: 24px;\n}\n.md-fab.md-fab-top-center[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-top-center[data-v-5f8bf5d4] {\n  top: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.md-fab.md-fab-top-right[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-top-right[data-v-5f8bf5d4] {\n  top: 24px;\n  right: 24px;\n}\n.md-fab.md-fab-bottom-left[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-bottom-left[data-v-5f8bf5d4] {\n  bottom: 24px;\n  left: 24px;\n}\n.md-fab.md-fab-bottom-center[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-bottom-center[data-v-5f8bf5d4] {\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.md-fab.md-fab-bottom-right[data-v-5f8bf5d4],\n.md-speed-dial.md-fab-bottom-right[data-v-5f8bf5d4] {\n  right: 24px;\n  bottom: 24px;\n}\n.md-button-tooltip.md-tooltip-top[data-v-5f8bf5d4] {\n  margin-top: -8px;\n}\n.md-button-tooltip.md-tooltip-right[data-v-5f8bf5d4] {\n  margin-left: 8px;\n}\n.md-button-tooltip.md-tooltip-bottom[data-v-5f8bf5d4] {\n  margin-top: 8px;\n}\n.md-button-tooltip.md-tooltip-left[data-v-5f8bf5d4] {\n  margin-left: -8px;\n}\n",""])},function(n,t){function a(n,t){var a=n[1]||"",d=n[3];if(!d)return a;if(t&&"function"==typeof btoa){var e=o(d);return[a].concat(d.sources.map(function(n){return"/*# sourceURL="+d.sourceRoot+n+" */"})).concat([e]).join("\n")}return[a].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var o=a(t,n);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(n,a){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},d=0;d<this.length;d++){var e=this[d][0];"number"==typeof e&&(o[e]=!0)}for(d=0;d<n.length;d++){var r=n[d];"number"==typeof r[0]&&o[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),t.push(r))}},t}},function(n,t,a){function o(n){for(var t=0;t<n.length;t++){var a=n[t],o=s[a.id];if(o){o.refs++;for(var d=0;d<o.parts.length;d++)o.parts[d](a.parts[d]);for(;d<a.parts.length;d++)o.parts.push(e(a.parts[d]));o.parts.length>a.parts.length&&(o.parts.length=a.parts.length)}else{for(var r=[],d=0;d<a.parts.length;d++)r.push(e(a.parts[d]));s[a.id]={id:a.id,refs:1,parts:r}}}}function d(){var n=document.createElement("style");return n.type="text/css",l.appendChild(n),n}function e(n){var t,a,o=document.querySelector('style[data-vue-ssr-id~="'+n.id+'"]');if(o){if(p)return v;o.parentNode.removeChild(o)}if(m){var e=u++;o=c||(c=d()),t=r.bind(null,o,e,!1),a=r.bind(null,o,e,!0)}else o=d(),t=f.bind(null,o),a=function(){o.parentNode.removeChild(o)};return t(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap)return;t(n=o)}else a()}}function r(n,t,a,o){var d=a?"":o.css;if(n.styleSheet)n.styleSheet.cssText=g(t,d);else{var e=document.createTextNode(d),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(e,r[t]):n.appendChild(e)}}function f(n,t){var a=t.css,o=t.media,d=t.sourceMap;if(o&&n.setAttribute("media",o),d&&(a+="\n/*# sourceURL="+d.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */"),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var b=a(5),s={},l=i&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,t,a){p=a;var d=b(n,t);return o(d),function(t){for(var a=[],e=0;e<d.length;e++){var r=d[e],f=s[r.id];f.refs--,a.push(f)}t?(d=b(n,t),o(d)):d=[];for(var e=0;e<a.length;e++){var f=a[e];if(0===f.refs){for(var i=0;i<f.parts.length;i++)f.parts[i]();delete s[f.id]}}}};var g=function(){var n=[];return function(t,a){return n[t]=a,n.filter(Boolean).join("\n")}}()},function(n,t){n.exports=function(n,t){for(var a=[],o={},d=0;d<t.length;d++){var e=t[d],r=e[0],f=e[1],i=e[2],b=e[3],s={id:n+":"+d,css:f,media:i,sourceMap:b};o[r]?o[r].parts.push(s):a.push(o[r]={id:r,parts:[s]})}return a}},function(n,t){n.exports=function(n,t,a,o,d,e){var r,f=n=n||{},i=typeof n.default;"object"!==i&&"function"!==i||(r=n,f=n.default);var b="function"==typeof f?f.options:f;t&&(b.render=t.render,b.staticRenderFns=t.staticRenderFns,b._compiled=!0),a&&(b.functional=!0),d&&(b._scopeId=d);var s;if(e?(s=function(n){n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,n||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(e)},b._ssrRegister=s):o&&(s=o),s){var l=b.functional,c=l?b.render:b.beforeCreate;l?(b._injectStyles=s,b.render=function(n,t){return s.call(t),c(n,t)}):b.beforeCreate=c?[].concat(c,s):[s]}return{esModule:r,exports:f,options:b}}},function(n,t,a){"use strict";t.a={name:"md-button",props:{href:String,target:String,rel:String,type:{type:String,default:"button"},disabled:Boolean},computed:{newRel:function(){return"_blank"===this.target?this.rel||"noopener":this.rel}}}},function(n,t,a){"use strict";var o=function(){var n=this,t=n.$createElement,a=n._self._c||t;return n.href?a("a",{attrs:{href:n.href,disabled:n.disabled,target:n.target,rel:n.newRel},on:{click:function(t){n.$emit("click",t)}}},[n._t("default")],2):a("button",{attrs:{type:n.type,disabled:n.disabled},on:{click:function(t){n.$emit("click",t)}}},[n._t("default")],2)},d=[],e={render:o,staticRenderFns:d};t.a=e}])});