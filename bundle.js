!function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){(function(t){"use strict";function n(e){k&&k.pause(),_&&_.parentNode.removeChild(_),x.stop(),x.removeAllListeners("tick"),e?"string"==typeof e&&(e={url:e}):e=v[Math.floor(Math.random()*v.length)],g({client_id:"b95f61a90da961736c03f659c03cb0cc",song:e.url,dark:!0,getFonts:!0},function(t,n,i,o){if(t)throw t;_=o,r(n,e)})}function r(e,t){var n=new Audio;n.crossOrigin="Anonymous",n.loop=!0,n.addEventListener("canplay",f(function(){t.seek&&(n.currentTime=t.seek),i(n,t),n.play()})),n.src=e,k=n}function i(e,t){function n(e){u+=e/1e3;var n=u/f;if(n>1)return x.stop();var i=r.waveform(),a=i.length;l.identity(),l.translate(t.position||[0,3.5,0]),l.lookAt([0,0,0]),l.update(),w.save(),w.scale(o,o);var c=1-n,d=u,h=t.alpha||.25;w.strokeStyle="rgba(0, 0, 0, "+h+")",w.lineWidth=1,w.lineJoin="round",w.beginPath();for(var y=g.length-1;y>=0;y--){var b=g[y];w.lineTo(b[0],b[1])}w.stroke(),w.restore();for(var y=0;a>y;y++){var j=y/(a-1),A=p(d+_,d,j);v[0]=Math.cos(A)*c,v[2]=Math.sin(A)*c;var L=i[y]/128,C=L*k/2,E=[v[0],v[1]+C,v[2]],M=l.project(E),O=s(M,2),T=O[0],q=O[1];g.length>m&&g.shift(),g.push([T,q])}}var r=a(e,y,{audible:!0,stereo:!1}),i=[window.innerWidth,window.innerHeight],o=window.devicePixelRatio;h(b,window,o)();var u=0,l=c({fov:Math.PI/4,near:.01,far:100,viewport:[0,0].concat(i)}),f=e.duration,v=[0,0,0],g=[],m=d(t.capacity,1e3),_=d(t.distance,.25),k=d(t.extent,.5);x.on("tick",n).start()}function o(){console.log("%cspins","font-weight: bold; padding: 3px; background: #ededed;"),console.log("To change tracks and settings:\n\n  load()    // loads a random track\n  load(url) // loads a SoundCloud url\n  load(opt) // loads with full options\n  \n  options:\n    url        the URL to load\n    capacity   number of line segments per tick\n    distance   radial distance along circle to draw each tick\n    position   camera [x, y, z]\n    extent     amount to extend away from line center\n    alpha      line opacity\n")}var s=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=e("web-audio-analyser"),c=e("perspective-camera"),u=e("raf-loop"),l=e("get-canvas-context"),p=e("lerp"),f=e("once"),d=e("defined"),h=e("canvas-fit"),v=e("./presets"),g=e("soundcloud-badge"),m=window.AudioContext||window.webkitAudioContext,y=new m,w=l("2d"),b=w.canvas;document.body.appendChild(b),document.body.style.overflow="hidden";var x=u(),_=void 0,k=void 0;n(),o(),t.load=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./presets":29,"canvas-fit":8,defined:10,"get-canvas-context":11,lerp:12,once:14,"perspective-camera":30,"raf-loop":15,"soundcloud-badge":20,"web-audio-analyser":28}],2:[function(e,t,n){},{}],3:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(r=arguments.length,o=new Array(r-1),c=1;r>c;c++)o[c-1]=arguments[c];n.apply(this,o)}else if(s(n)){for(r=arguments.length,o=new Array(r-1),c=1;r>c;c++)o[c-1]=arguments[c];for(u=n.slice(),r=u.length,c=0;r>c;c++)u[c].apply(this,o)}return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned){var n;n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-->0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){var n;return n=e._events&&e._events[t]?i(e._events[t])?1:e._events[t].length:0}},{}],4:[function(e,t,n){function r(){l=!1,a.length?u=a.concat(u):p=-1,u.length&&i()}function i(){if(!l){var e=setTimeout(r);l=!0;for(var t=u.length;t;){for(a=u,u=[];++p<t;)a&&a[p].run();p=-1,t=u.length}a=null,l=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function s(){}var a,c=t.exports={},u=[],l=!1,p=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new o(e,t)),1!==u.length||l||setTimeout(i,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},{}],5:[function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,o){t=t||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var u=e.length;c>0&&u>c&&(u=c);for(var l=0;u>l;++l){var p,f,d,h,v=e[l].replace(a,"%20"),g=v.indexOf(n);g>=0?(p=v.substr(0,g),f=v.substr(g+1)):(p=v,f=""),d=decodeURIComponent(p),h=decodeURIComponent(f),r(s,d)?i(s[d])?s[d].push(h):s[d]=[s[d],h]:s[d]=h}return s};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],6:[function(e,t,n){"use strict";function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(s(e),function(s){var a=encodeURIComponent(i(s))+n;return o(e[s])?r(e[s],function(e){return a+encodeURIComponent(i(e))}).join(t):a+encodeURIComponent(i(e[s]))}).join(t):a?encodeURIComponent(i(a))+n+encodeURIComponent(i(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],7:[function(e,t,n){"use strict";n.decode=n.parse=e("./decode"),n.encode=n.stringify=e("./encode")},{"./decode":5,"./encode":6}],8:[function(e,t,n){function r(e,t,n){function r(){var t=r.parent||e.parentNode;if("function"==typeof t)var n=t(o)||o,a=n[0],c=n[1];else if(t&&t!==document.body)var u=i(t),a=0|u[0],c=0|u[1];else var a=window.innerWidth,c=window.innerHeight;return s?(e.setAttribute("width",a*r.scale+"px"),e.setAttribute("height",c*r.scale+"px")):(e.width=a*r.scale,e.height=c*r.scale),e.style.width=a+"px",e.style.height=c+"px",r}var s="SVG"===e.nodeName.toUpperCase();return e.style.position=e.style.position||"absolute",e.style.top=0,e.style.left=0,r.scale=parseFloat(n||1),r.parent=t,r()}var i=e("element-size");t.exports=r;var o=new Float32Array(2)},{"element-size":9}],9:[function(e,t,n){function r(e){if(e===window||e===document.body)return[window.innerWidth,window.innerHeight];if(!e.parentNode){var t=!0;document.body.appendChild(e)}var n=e.getBoundingClientRect(),r=getComputedStyle(e),o=(0|n.height)+i(r.getPropertyValue("margin-top"))+i(r.getPropertyValue("margin-bottom")),s=(0|n.width)+i(r.getPropertyValue("margin-left"))+i(r.getPropertyValue("margin-right"));return t&&document.body.removeChild(e),[s,o]}function i(e){return parseFloat(e)||0}t.exports=r},{}],10:[function(e,t,n){t.exports=function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}},{}],11:[function(e,t,n){function r(e,t){if("string"!=typeof e)throw new TypeError("must specify type string");if("undefined"==typeof document)return null;t=t||{};var n=t.canvas||document.createElement("canvas");"number"==typeof t.width&&(n.width=t.width),"number"==typeof t.height&&(n.height=t.height);var r,i=t;try{var o=[e];0===e.indexOf("webgl")&&o.push("experimental-"+e);for(var s=0;s<o.length;s++)if(r=n.getContext(o[s],i))return r}catch(a){r=null}return r||null}t.exports=r},{}],12:[function(e,t,n){function r(e,t,n){return e*(1-n)+t*n}t.exports=r},{}],13:[function(e,t,n){function r(e,t){function n(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];var r=e.apply(this,t),i=t[t.length-1];return"function"==typeof r&&r!==i&&Object.keys(i).forEach(function(e){r[e]=i[e]}),r}if(e&&t)return r(e)(t);if("function"!=typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){n[t]=e[t]}),n}t.exports=r},{}],14:[function(e,t,n){function r(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}var i=e("wrappy");t.exports=i(r),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0})})},{wrappy:13}],15:[function(e,t,n){function r(e){return this instanceof r?(this.running=!1,this.last=s(),this._frame=0,this._tick=this.tick.bind(this),void(e&&this.on("tick",e))):new r(e)}var i=e("inherits"),o=e("events").EventEmitter,s=e("right-now"),a=e("raf");t.exports=r,i(r,o),r.prototype.start=function(){return this.running?void 0:(this.running=!0,this.last=s(),this._frame=a(this._tick),this)},r.prototype.stop=function(){return this.running=!1,0!==this._frame&&a.cancel(this._frame),this._frame=0,this},r.prototype.tick=function(){this._frame=a(this._tick);var e=s(),t=e-this.last;this.emit("tick",t),this.last=e}},{events:3,inherits:16,raf:17,"right-now":19}],16:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],17:[function(e,t,n){for(var r=e("performance-now"),i="undefined"==typeof window?{}:window,o=["moz","webkit"],s="AnimationFrame",a=i["request"+s],c=i["cancel"+s]||i["cancelRequest"+s],u=0;u<o.length&&!a;u++)a=i[o[u]+"Request"+s],c=i[o[u]+"Cancel"+s]||i[o[u]+"CancelRequest"+s];if(!a||!c){var l=0,p=0,f=[],d=1e3/60;a=function(e){if(0===f.length){var t=r(),n=Math.max(0,d-(t-l));l=n+t,setTimeout(function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return f.push({handle:++p,callback:e,cancelled:!1}),p},c=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}t.exports=function(e){return a.call(i,e)},t.exports.cancel=function(){c.apply(i,arguments)}},{"performance-now":18}],18:[function(e,t,n){(function(e){(function(){var n,r,i;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-i)/1e6},r=e.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n()):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,e("_process"))},{_process:4}],19:[function(e,t,n){(function(e){t.exports=e.performance&&e.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(e,t,n){function r(e){if(e)throw e}function i(e,t){l||(c(".npm-scb-wrap {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.npm-scb-wrap a {\n  text-decoration: none;\n  color: #000;\n}\n.npm-scb-white\n.npm-scb-wrap a {\n  color: #fff;\n}\n\n.npm-scb-inner {\n  position: absolute;\n  top: -120px; left: 0;\n  padding: 8px;\n  width: 100%;\n  height: 150px;\n  z-index: 2;\n  -webkit-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n     -moz-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n      -ms-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n       -o-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n          transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n}\n.npm-scb-wrap:hover\n.npm-scb-inner {\n  top: 0;\n}\n\n.npm-scb-artwork {\n  position: absolute;\n  top: 16px; left: 16px;\n  width: 104px; height: 104px;\n  box-shadow: 0 0 8px -3px #000;\n  outline: 1px solid rgba(0,0,0,0.1);\n  z-index: 2;\n}\n.npm-scb-white\n.npm-scb-artwork {\n  outline: 1px solid rgba(255,255,255,0.1);\n  box-shadow: 0 0 10px -2px rgba(255,255,255,0.9);\n}\n\n.npm-scb-info {\n  position: absolute;\n  top: 16px;\n  left: 120px;\n  width: 300px;\n  z-index: 1;\n}\n\n.npm-scb-info > a {\n  display: block;\n}\n\n.npm-scb-now-playing {\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  width: 500px;\n  z-index: 1;\n  padding: 15px 0;\n  top: 0; left: 138px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s;\n     -moz-transition: opacity 0.25s;\n      -ms-transition: opacity 0.25s;\n       -o-transition: opacity 0.25s;\n          transition: opacity 0.25s;\n}\n\n.npm-scb-wrap:hover\n.npm-scb-now-playing {\n  opacity: 0;\n}\n\n.npm-scb-white\n.npm-scb-now-playing {\n  color: #fff;\n}\n.npm-scb-now-playing > a {\n  font-weight: bold;\n}\n\n.npm-scb-info > a > p {\n  margin: 0;\n  padding-bottom: 0.25em;\n  line-height: 1.35em;\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.npm-scb-title {\n  font-weight: bold;\n}\n\n.npm-scb-icon {\n  position: absolute;\n  top: 120px;\n  padding-top: 0.75em;\n  left: 16px;\n}\n"),l=!0),f||(f=a.compile('<div class="npm-scb-wrap">\n  <div class="npm-scb-inner">\n    <a target="_blank" href="{{!urls.song}}">\n      <img class="npm-scb-icon" src="{{!icon}}">\n      <img class="npm-scb-artwork" src="{{!artwork}}">\n    </a>\n    <div class="npm-scb-info">\n      <a target="_blank" href="{{!urls.song}}">\n        <p class="npm-scb-title">{{!title}}</p>\n      </a>\n      <a target="_blank" href="{{!urls.artist}}">\n        <p class="npm-scb-artist">{{!artist}}</p>\n      </a>\n    </div>\n  </div>\n  <div class="npm-scb-now-playing">\n    Now Playing:\n    <a href="{{!urls.song}}">{{!title}}</a>\n    by\n    <a href="{{!urls.artist}}">{{!artist}}</a>\n  </div>\n</div>')),!p&&e.getFonts&&(s.add({"Open Sans":[300,600]}),p=!0),e=e||{},t=t||r;var n=e.el||document.createElement("div"),i="dark"in e&&!e.dark?"white":"black",d=e.client_id,h=e.song;return o(d,h,function(e,r){if(e)return t(e);if("track"!==r.kind)throw new Error("soundcloud-badge only supports individual tracks at the moment");n.classList["black"===i?"remove":"add"]("npm-scb-white"),n.innerHTML=f({artwork:r.artwork_url||r.user.avatar_url,artist:r.user.username,title:r.title,icon:u[i],urls:{song:r.permalink_url,artist:r.user.permalink_url}}),document.body.appendChild(n),t(null,r.stream_url+"?client_id="+d,r,n)}),n}var o=e("soundcloud-resolve"),s=e("google-fonts"),a=e("minstache"),c=e("insert-css"),u=(e("fs"),{black:"https://developers.soundcloud.com/assets/logo_black.png",white:"https://developers.soundcloud.com/assets/logo_white.png"});t.exports=i;var l=!1,p=!1,f=null},{fs:2,"google-fonts":21,"insert-css":22,minstache:23,"soundcloud-resolve":24}],21:[function(e,t,n){function r(e){var t=o(e);return'<link href="'+t+'" rel="stylesheet" type="text/css">'}function i(e){var t=o(e),n=document.createElement("link");return n.setAttribute("href",t),n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n}function o(e){var t=Object.keys(e).map(function(t){var n=e[t];return t=t.replace(/\s+/,"+"),"boolean"==typeof n?t:t+":"+a(n).join(",")}).join("|");return"http://fonts.googleapis.com/css?family="+t}function s(e){var t=i(e);return document.head.appendChild(t),t}function a(e){return Array.isArray(e)?e:[e]}t.exports=r,t.exports.add=s},{}],22:[function(e,t,n){var r=[];t.exports=function(e){if(!(r.indexOf(e)>=0)){r.push(e);var t=document.createElement("style"),n=document.createTextNode(e);t.appendChild(n),document.head.childNodes.length?document.head.insertBefore(t,document.head.childNodes[0]):document.head.appendChild(t)}}},{}],23:[function(e,t,n){function r(e,t){t=t||{};var n=i(e);return n(t)}function i(e){for(var t,n=[],r=s(e),i=0;i<r.length;++i)if(t=r[i],i%2==0)n.push('"'+t.replace(/"/g,'\\"')+'"');else switch(t[0]){case"/":t=t.slice(1),n.push(") + ");break;case"^":t=t.slice(1),o(t),n.push(' + section(obj, "'+t+'", true, ');break;case"#":t=t.slice(1),o(t),n.push(' + section(obj, "'+t+'", false, ');break;case"!":t=t.slice(1),o(t),n.push(" + obj."+t+" + ");break;default:o(t),n.push(" + escape(obj."+t+") + ")}return n="\n"+a(u.toString())+";\n\n"+a(c.toString())+";\n\n  return "+n.join("").replace(/\n/g,"\\n"),new Function("obj",n)}function o(e){if(!e.match(/^[\w.]+$/))throw new Error('invalid property "'+e+'"')}function s(e){return e.split(/\{\{|\}\}/)}function a(e){return e.replace(/^/gm,"  ")}function c(e,t,n,r){var i=e[t];return"function"==typeof i?i.call(e,r):(n&&(i=!i),i?r:"")}function u(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}n=t.exports=r,n.compile=i},{}],24:[function(e,t,n){function r(e,t,n){var r="http://api.soundcloud.com/resolve.json?"+i.stringify({url:t,client_id:e});o({uri:r,method:"GET"},function(e,t,r){if(e)return n(e);try{r=JSON.parse(r)}catch(i){return n(i)}return r.errors?n(new Error(r.errors[0].error_message)):n(null,r)})}var i=e("querystring"),o=e("xhr");t.exports=r},{querystring:7,xhr:25}],25:[function(e,t,n){function r(e,t){function n(){4===l.readyState&&r()}function r(){var e=null,n=l.statusCode=l.status,r=l.body=l.response||l.responseText||l.responseXML;if(0===n||n>=400&&600>n){var i=l.responseText||a[String(l.status).charAt(0)];e=new Error(i),e.statusCode=l.status}if(v)try{r=l.body=JSON.parse(r)}catch(o){}t(e,l,r)}function o(e){t(e,l)}"string"==typeof e&&(e={uri:e}),e=e||{},t=s(t);var l;l=e.cors?new u:new c;var p=l.url=e.uri,f=l.method=e.method||"GET",d=e.body||e.data,h=l.headers=e.headers||{},v=!1;return"json"in e&&(v=!0,h["Content-Type"]="application/json",d=JSON.stringify(e.json)),l.onreadystatechange=n,l.onload=r,l.onerror=o,l.onprogress=function(){},l.ontimeout=i,l.open(f,p),e.cors&&(l.withCredentials=!0),l.timeout="timeout"in e?e.timeout:5e3,l.setRequestHeader&&Object.keys(h).forEach(function(e){l.setRequestHeader(e,h[e])}),l.send(d),l}function i(){}var o=e("global/window"),s=e("once"),a={0:"Internal XMLHttpRequest Error",4:"4xx Client Error",5:"5xx Server Error"},c=o.XMLHttpRequest||i,u="withCredentials"in new c?o.XMLHttpRequest:o.XDomainRequest;t.exports=r},{"global/window":26,once:27}],26:[function(e,t,n){(function(e){"undefined"!=typeof window?t.exports=window:"undefined"!=typeof e?t.exports=e:t.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],27:[function(e,t,n){function r(e){var t=!1;return function(){return t?void 0:(t=!0,e.apply(this,arguments))}}t.exports=r,r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0})})},{}],28:[function(e,t,n){function r(e,t,n){if(!(this instanceof r))return new r(e,t,n);if(t instanceof i||(n=t,t=null),n=n||{},this.ctx=t=t||new i,e instanceof AudioNode||(e=e instanceof Audio?t.createMediaElementSource(e):t.createMediaStreamSource(e)),this.analyser=t.createAnalyser(),this.stereo=!!n.stereo,this.audible=n.audible!==!1,this.wavedata=null,this.freqdata=null,this.splitter=null,this.merger=null,this.source=e,this.stereo){this.analyser=[this.analyser],this.analyser.push(t.createAnalyser()),this.splitter=t.createChannelSplitter(2),this.merger=t.createChannelMerger(2),this.output=this.merger,this.source.connect(this.splitter);for(var o=0;2>o;o++)this.splitter.connect(this.analyser[o],o,0),this.analyser[o].connect(this.merger,0,o);this.audible&&this.merger.connect(t.destination)}else this.output=this.source,this.source.connect(this.analyser),this.audible&&this.analyser.connect(t.destination)}var i=window.AudioContext||window.webkitAudioContext;t.exports=r,r.prototype.waveform=function(e,t){e||(e=this.wavedata||(this.wavedata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount)));var n=this.stereo?this.analyser[t||0]:this.analyser;return n.getByteTimeDomainData(e),e},r.prototype.frequencies=function(e,t){e||(e=this.freqdata||(this.freqdata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount)));var n=this.stereo?this.analyser[t||0]:this.analyser;return n.getByteFrequencyData(e),e}},{}],29:[function(e,t,n){"use strict";t.exports=[{capacity:500,distance:.35,alpha:.1,extent:.5,seek:60,position:[0,-3.5,0],url:"https://soundcloud.com/erasedtapes/rival-consoles-recovery"}]},{}],30:[function(e,t,n){"use strict";t.exports=e("./lib/camera-perspective")},{"./lib/camera-perspective":33}],31:[function(e,t,n){"use strict";var r=e("object-assign"),i=e("ray-3d"),o=e("camera-project"),s=e("camera-unproject"),a=e("./camera-look-at"),c=e("camera-picking-ray"),u=e("gl-vec3/add"),l=e("gl-mat4/multiply"),p=e("gl-mat4/invert"),f=e("gl-mat4/identity"),d=e("gl-vec3/set");t.exports=function(e){function t(){l(w.projView,w.projection,w.view);var e=p(w.invProjView,w.projView);if(!e)throw new Error("camera projection * view is non-invertible")}function n(e){return a(w.direction,w.up,w.position,e),w}function h(){return d(w.position,0,0,0),d(w.direction,0,0,-1),d(w.up,0,1,0),f(w.view),f(w.projection),f(w.projView),f(w.invProjView),w}function v(e){return u(w.position,w.position,e),w}function g(e){var t=new i;return c(t.origin,t.direction,e,w.viewport,w.invProjView),t}function m(e){return o([],e,w.viewport,w.projView)}function y(e){return s([],e,w.viewport,w.invProjView)}e=e||{};var w={projection:f([]),view:f([]),position:e.position||[0,0,0],direction:e.direction||[0,0,-1],up:e.up||[0,1,0],viewport:e.viewport||[-1,-1,1,1],projView:f([]),invProjView:f([])};return r(w,{translate:v,identity:h,lookAt:n,createPickingRay:g,update:t,project:m,unproject:y})}},{"./camera-look-at":32,"camera-picking-ray":34,"camera-project":35,"camera-unproject":38,"gl-mat4/identity":41,"gl-mat4/invert":42,"gl-mat4/multiply":44,"gl-vec3/add":46,"gl-vec3/set":53,"object-assign":56,"ray-3d":57}],32:[function(e,t,n){"use strict";var r=e("gl-vec3/cross"),i=e("gl-vec3/subtract"),o=e("gl-vec3/normalize"),s=e("gl-vec3/copy"),a=e("gl-vec3/dot"),c=e("gl-vec3/scale"),u=[0,0,0],l=1e-9;t.exports=function(e,t,n,p){i(u,p,n),o(u,u);var f=0===u[0]&&0===u[1]&&0===u[2];if(!f){var d=a(u,t);Math.abs(d-1)<l?c(t,e,-1):Math.abs(d+1)<l&&s(t,e),s(e,u),r(u,e,t),o(u,u),r(t,u,e),o(t,t)}}},{"gl-vec3/copy":47,"gl-vec3/cross":48,"gl-vec3/dot":49,"gl-vec3/normalize":50,"gl-vec3/scale":51,"gl-vec3/subtract":55}],33:[function(e,t,n){"use strict";var r=e("./camera-base"),i=e("object-assign"),o=e("defined"),s=e("gl-mat4/perspective"),a=e("gl-mat4/lookAt"),c=e("gl-vec3/add");t.exports=function(e){function t(){var e=n.viewport[2]/n.viewport[3];return s(n.projection,n.fov,e,Math.abs(n.near),Math.abs(n.far)),c(u,n.position,n.direction),a(n.view,n.position,u,n.up),l(),n}e=e||{};var n=r(e);n.fov=o(e.fov,Math.PI/4),n.near=o(e.near,1),n.far=o(e.far,100);var u=[0,0,0],l=n.update;return t(),i(n,{update:t})}},{"./camera-base":31,defined:40,"gl-mat4/lookAt":43,"gl-mat4/perspective":45,"gl-vec3/add":46,"object-assign":56}],34:[function(e,t,n){function r(e,t,n,r,c){o(e,n[0],n[1],0),o(t,n[0],n[1],1),i(e,e,r,c),i(t,t,r,c),s(t,t,e),a(t,t)}var i=e("camera-unproject"),o=e("gl-vec3/set"),s=e("gl-vec3/subtract"),a=e("gl-vec3/normalize");t.exports=r},{"camera-unproject":38,"gl-vec3/normalize":50,"gl-vec3/set":53,"gl-vec3/subtract":55}],35:[function(e,t,n){function r(e,t,n,r){var u=n[0],l=n[1],p=n[2],f=n[3],d=s,h=a;o(c,t[0],t[1],t[2],1),i(c,c,r);var v=c[3];return 0!==v&&(c[0]=c[0]/v,c[1]=c[1]/v,c[2]=c[2]/v),e[0]=u+p/2*c[0]+(0+p/2),e[1]=l+f/2*c[1]+(0+f/2),e[2]=(h-d)/2*c[2]+(h+d)/2,e[3]=0===v?0:1/v,e}var i=e("gl-vec4/transformMat4"),o=e("gl-vec4/set"),s=0,a=1,c=[0,0,0,0];t.exports=r},{"gl-vec4/set":36,"gl-vec4/transformMat4":37}],36:[function(e,t,n){function r(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}t.exports=r},{}],37:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*o+n[12]*s,e[1]=n[1]*r+n[5]*i+n[9]*o+n[13]*s,e[2]=n[2]*r+n[6]*i+n[10]*o+n[14]*s,e[3]=n[3]*r+n[7]*i+n[11]*o+n[15]*s,e}t.exports=r},{}],38:[function(e,t,n){function r(e,t,n,r){var o=n[0],s=n[1],a=n[2],c=n[3],u=t[0],l=t[1],p=t[2];return u-=o,l=c-l-1,l-=s,e[0]=2*u/a-1,e[1]=2*l/c-1,e[2]=2*p-1,i(e,e,r)}var i=e("./lib/projectMat4");t.exports=r},{"./lib/projectMat4":39}],39:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=n[0],a=n[1],c=n[2],u=n[3],l=n[4],p=n[5],f=n[6],d=n[7],h=n[8],v=n[9],g=n[10],m=n[11],y=n[12],w=n[13],b=n[14],x=n[15],_=1/(r*u+i*d+o*m+x);return e[0]=(r*s+i*l+o*h+y)*_,e[1]=(r*a+i*p+o*v+w)*_,e[2]=(r*c+i*f+o*g+b)*_,e}t.exports=r},{}],40:[function(e,t,n){arguments[4][10][0].apply(n,arguments)},{dup:10}],41:[function(e,t,n){function r(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}t.exports=r},{}],42:[function(e,t,n){function r(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5],c=t[6],u=t[7],l=t[8],p=t[9],f=t[10],d=t[11],h=t[12],v=t[13],g=t[14],m=t[15],y=n*a-r*s,w=n*c-i*s,b=n*u-o*s,x=r*c-i*a,_=r*u-o*a,k=i*u-o*c,j=l*v-p*h,A=l*g-f*h,L=l*m-d*h,C=p*g-f*v,E=p*m-d*v,M=f*m-d*g,O=y*M-w*E+b*C+x*L-_*A+k*j;return O?(O=1/O,e[0]=(a*M-c*E+u*C)*O,e[1]=(i*E-r*M-o*C)*O,e[2]=(v*k-g*_+m*x)*O,e[3]=(f*_-p*k-d*x)*O,e[4]=(c*L-s*M-u*A)*O,e[5]=(n*M-i*L+o*A)*O,e[6]=(g*b-h*k-m*w)*O,e[7]=(l*k-f*b+d*w)*O,e[8]=(s*E-a*L+u*j)*O,e[9]=(r*L-n*E-o*j)*O,e[10]=(h*_-v*b+m*y)*O,e[11]=(p*b-l*_-d*y)*O,e[12]=(a*A-s*C-c*j)*O,e[13]=(n*C-r*A+i*j)*O,e[14]=(v*w-h*x-g*y)*O,e[15]=(l*x-p*w+f*y)*O,e):null}t.exports=r},{}],43:[function(e,t,n){function r(e,t,n,r){var o,s,a,c,u,l,p,f,d,h,v=t[0],g=t[1],m=t[2],y=r[0],w=r[1],b=r[2],x=n[0],_=n[1],k=n[2];return Math.abs(v-x)<1e-6&&Math.abs(g-_)<1e-6&&Math.abs(m-k)<1e-6?i(e):(p=v-x,f=g-_,d=m-k,h=1/Math.sqrt(p*p+f*f+d*d),p*=h,f*=h,d*=h,o=w*d-b*f,s=b*p-y*d,a=y*f-w*p,h=Math.sqrt(o*o+s*s+a*a),h?(h=1/h,o*=h,s*=h,a*=h):(o=0,s=0,a=0),c=f*a-d*s,u=d*o-p*a,l=p*s-f*o,h=Math.sqrt(c*c+u*u+l*l),h?(h=1/h,c*=h,u*=h,l*=h):(c=0,u=0,l=0),e[0]=o,e[1]=c,e[2]=p,e[3]=0,e[4]=s,e[5]=u,e[6]=f,e[7]=0,e[8]=a,e[9]=l,e[10]=d,e[11]=0,e[12]=-(o*v+s*g+a*m),e[13]=-(c*v+u*g+l*m),e[14]=-(p*v+f*g+d*m),e[15]=1,e)}var i=e("./identity");t.exports=r},{"./identity":41}],44:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=t[3],a=t[4],c=t[5],u=t[6],l=t[7],p=t[8],f=t[9],d=t[10],h=t[11],v=t[12],g=t[13],m=t[14],y=t[15],w=n[0],b=n[1],x=n[2],_=n[3];return e[0]=w*r+b*a+x*p+_*v,e[1]=w*i+b*c+x*f+_*g,e[2]=w*o+b*u+x*d+_*m,e[3]=w*s+b*l+x*h+_*y,w=n[4],b=n[5],x=n[6],_=n[7],e[4]=w*r+b*a+x*p+_*v,e[5]=w*i+b*c+x*f+_*g,e[6]=w*o+b*u+x*d+_*m,e[7]=w*s+b*l+x*h+_*y,w=n[8],b=n[9],x=n[10],_=n[11],e[8]=w*r+b*a+x*p+_*v,e[9]=w*i+b*c+x*f+_*g,e[10]=w*o+b*u+x*d+_*m,e[11]=w*s+b*l+x*h+_*y,w=n[12],b=n[13],x=n[14],_=n[15],e[12]=w*r+b*a+x*p+_*v,e[13]=w*i+b*c+x*f+_*g,e[14]=w*o+b*u+x*d+_*m,e[15]=w*s+b*l+x*h+_*y,e}t.exports=r},{}],45:[function(e,t,n){function r(e,t,n,r,i){var o=1/Math.tan(t/2),s=1/(r-i);return e[0]=o/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*s,e[15]=0,e}t.exports=r},{}],46:[function(e,t,n){function r(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}t.exports=r},{}],47:[function(e,t,n){function r(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}t.exports=r},{}],48:[function(e,t,n){function r(e,t,n){var r=t[0],i=t[1],o=t[2],s=n[0],a=n[1],c=n[2];return e[0]=i*c-o*a,e[1]=o*s-r*c,e[2]=r*a-i*s,e}t.exports=r},{}],49:[function(e,t,n){function r(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}t.exports=r},{}],50:[function(e,t,n){function r(e,t){var n=t[0],r=t[1],i=t[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o),e}t.exports=r},{}],51:[function(e,t,n){function r(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}t.exports=r},{}],52:[function(e,t,n){function r(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}t.exports=r},{}],53:[function(e,t,n){function r(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}t.exports=r},{}],54:[function(e,t,n){function r(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}t.exports=r},{}],55:[function(e,t,n){function r(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}t.exports=r},{}],56:[function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");
return Object(e)}t.exports=Object.assign||function(e,t){for(var n,i,o=r(e),s=1;s<arguments.length;s++){n=arguments[s],i=Object.keys(Object(n));for(var a=0;a<i.length;a++)o[i[a]]=n[i[a]]}return o}},{}],57:[function(e,t,n){function r(e,t){this.origin=e||[0,0,0],this.direction=t||[0,0,-1]}var i=e("ray-triangle-intersection"),o=e("ray-plane-intersection"),s=e("ray-sphere-intersection"),a=e("gl-vec3/copy"),c=[[0,0,0],[0,0,0],[0,0,0]],u=[0,0,0];t.exports=r,r.prototype.set=function(e,t){this.origin=e,this.direction=t},r.prototype.copy=function(e){a(this.origin,e.origin),a(this.direction,e.direction)},r.prototype.clone=function(){var e=new r;return e.copy(this),e},r.prototype.intersectsSphere=function(e,t){return s(u,this.origin,this.direction,e,t)},r.prototype.intersectsPlane=function(e,t){return o(u,this.origin,this.direction,e,t)},r.prototype.intersectsTriangle=function(e){return i(u,this.origin,this.direction,e)},r.prototype.intersectsTriangleCell=function(e,t){var n=e[0],r=e[1],i=e[2];return c[0]=t[n],c[1]=t[r],c[2]=t[i],this.intersectsTriangle(c)}},{"gl-vec3/copy":47,"ray-plane-intersection":58,"ray-sphere-intersection":59,"ray-triangle-intersection":60}],58:[function(e,t,n){function r(e,t,n,r,u){var l=i(n,r);if(0!==l){var p=-(i(t,r)+u)/l;return 0>p?null:(s(c,n,p),o(e,t,c))}return i(r,t)+u===0?a(e,t):null}var i=e("gl-vec3/dot"),o=e("gl-vec3/add"),s=e("gl-vec3/scale"),a=e("gl-vec3/copy");t.exports=r;var c=[0,0,0]},{"gl-vec3/add":46,"gl-vec3/copy":47,"gl-vec3/dot":49,"gl-vec3/scale":51}],59:[function(e,t,n){function r(e,t,n,r,p){s(l,r,t);var f=o(n,l);if(0>f)return null;a(l,t,n,f);var d=i(r,l),h=p*p;return d>h?null:(c(e,n,f-Math.sqrt(h-d)),u(e,e,t))}var i=e("gl-vec3/squaredDistance"),o=e("gl-vec3/dot"),s=e("gl-vec3/subtract"),a=e("gl-vec3/scaleAndAdd"),c=e("gl-vec3/scale"),u=e("gl-vec3/add"),l=[0,0,0];t.exports=r},{"gl-vec3/add":46,"gl-vec3/dot":49,"gl-vec3/scale":51,"gl-vec3/scaleAndAdd":52,"gl-vec3/squaredDistance":54,"gl-vec3/subtract":55}],60:[function(e,t,n){function r(e,t,n,r){s(c,r[1],r[0]),s(u,r[2],r[0]),i(p,n,u);var d=o(c,p);if(a>d)return null;s(l,t,r[0]);var h=o(l,p);if(0>h||h>d)return null;i(f,l,c);var v=o(n,f);if(0>v||h+v>d)return null;var g=o(u,f)/d;return e[0]=t[0]+g*n[0],e[1]=t[1]+g*n[1],e[2]=t[2]+g*n[2],e}var i=e("gl-vec3/cross"),o=e("gl-vec3/dot"),s=e("gl-vec3/subtract"),a=1e-6,c=[0,0,0],u=[0,0,0],l=[0,0,0],p=[0,0,0],f=[0,0,0];t.exports=r},{"gl-vec3/cross":48,"gl-vec3/dot":49,"gl-vec3/subtract":55}]},{},[1]);