(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(t,e,r){var n=r(1134),o=r(41);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},105:function(t,e,r){t.exports=r(1139)},11:function(t,e,r){var n=r(1135);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},1134:function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},1135:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},1136:function(t,e,r){var n=r(450);t.exports=function(t){if(Array.isArray(t))return n(t)}},1137:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},1138:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1139:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new F(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",p="executing",y="completed",d={};function g(){}function v(){}function m(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==r&&n.call(x,i)&&(b=x);var P=m.prototype=g.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=P.constructor=m,m.constructor=v,v.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(P),t},t.awrap=function(t){return{__await:t}},O(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(P),u(P,c,"Generator"),P[i]=function(){return this},P.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},1140:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},1141:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}},1142:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1147:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(452),a=function(t){function e(e){var r=t.call(this,e)||this;return e.game.cache.addCustom("ninePatch"),e.registerGameObject("ninePatch",r.ninePatchFactory,r.ninePatchCreator),r}return o(e,t),e.prototype.ninePatchFactory=function(t,e,r,n,o,a,c){return this.scene.add.existing(new i.NinePatch(this.scene,t,e,r,n,o,a,c))},e.prototype.ninePatchCreator=function(t,e){void 0===t&&(t={});var r=Phaser.Utils.Objects.GetAdvancedValue(t,"key",null),n=Phaser.Utils.Objects.GetAdvancedValue(t,"frame",null),o=Phaser.Utils.Objects.GetAdvancedValue(t,"width",null),a=Phaser.Utils.Objects.GetAdvancedValue(t,"height",null),c=Phaser.Utils.Objects.GetAdvancedValue(t,"patchesConfig",null),u=new i.NinePatch(this.scene,0,0,o,a,r,n,c);return void 0!==e&&(t.add=e),Phaser.GameObjects.BuildGameObject(this.scene,u,t),u},e}(Phaser.Plugins.BasePlugin);e.NinePatchPlugin=a},1148:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.normalizePatchesConfig=function(t){return t.bottom=t.bottom||t.top,t.left=t.left||t.top,t.right=t.right||t.left,t}},133:function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},169:function(t,e,r){var n=r(449),o=r(17);function i(t,e,r,a){return i="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,r,i){var a,c=n(t,e);if(c){if((a=Object.getOwnPropertyDescriptor(c,e)).set)return a.set.call(i,r),!0;if(!a.writable)return!1}if(a=Object.getOwnPropertyDescriptor(i,e)){if(!a.writable)return!1;a.value=r,Object.defineProperty(i,e,a)}else o(i,e,r);return!0},i(t,e,r,a)}t.exports=function(t,e,r,n,o){if(!i(t,e,r,n||t)&&o)throw new Error("failed to set property");return r}},17:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},19:function(t,e,r){var n=r(449);function o(e,r,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,r){var o=n(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(r):i.value}},o(e,r,i||e)}t.exports=o},41:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},449:function(t,e,r){var n=r(7);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t}},450:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},451:function(t,e,r){var n=r(450);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},452:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},n(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(1148),a=function(t){function e(e,r,n,o,a,c,u,s){var f=t.call(this,e,r,n)||this;return f.config=s||f.scene.cache.custom.ninePatch.get(u?""+u:c),i.normalizePatchesConfig(f.config),f.setSize(o,a),f.setTexture(c,u),f}return o(e,t),e.prototype.resize=function(t,e){return t=Math.round(t),e=Math.round(e),this.config?(this.width===t&&this.height===e||(t=Math.max(t,this.config.left+this.config.right),e=Math.max(e,this.config.top+this.config.bottom),this.setSize(t,e),this.drawPatches()),this):this},e.prototype.setTexture=function(t,e){return this.originTexture=this.scene.textures.get(t),this.setFrame(e),this},e.prototype.setFrame=function(t){return this.originFrame=this.originTexture.frames[t]||this.originTexture.frames[e.__BASE],this.createPatches(),this.drawPatches(),this},e.prototype.setSize=function(e,r){return t.prototype.setSize.call(this,e,r),this.finalXs=[0,this.config.left,this.width-this.config.right,this.width],this.finalYs=[0,this.config.top,this.height-this.config.bottom,this.height],this},e.prototype.setTint=function(t){return this.tint=t,this},e.prototype.setTintFill=function(t){return this.tint=t,this.tintFill=!0,this},e.prototype.clearTint=function(){return this.each((function(t){return t.clearTint()})),this.internalTint=void 0,this},Object.defineProperty(e.prototype,"tintFill",{get:function(){return this.first&&this.first.tintFill},set:function(t){this.each((function(e){return e.tintFill=t}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tint",{set:function(t){this.each((function(e){return e.setTint(t)})),this.internalTint=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTinted",{get:function(){return this.first&&this.first.isTinted},enumerable:!0,configurable:!0}),e.prototype.createPatches=function(){for(var t=[0,this.config.left,this.originFrame.width-this.config.right,this.originFrame.width],e=[0,this.config.top,this.originFrame.height-this.config.bottom,this.originFrame.height],r=0,n=0;n<3;n++)for(var o=0;o<3;o++)this.createPatchFrame(this.getPatchNameByIndex(r),t[o],e[n],t[o+1]-t[o],e[n+1]-e[n]),++r},e.prototype.drawPatches=function(){var t=this.tintFill;this.removeAll(!0);for(var e=0,r=0;r<3;r++)for(var n=0;n<3;n++){var o=this.originTexture.frames[this.getPatchNameByIndex(e)],i=new Phaser.GameObjects.Image(this.scene,0,0,o.texture.key,o.name);i.setOrigin(0),i.setPosition(this.finalXs[n]-this.width*this.originX,this.finalYs[r]-this.height*this.originY),i.setScale((this.finalXs[n+1]-this.finalXs[n])/o.width,(this.finalYs[r+1]-this.finalYs[r])/o.height),this.add(i),i.setTint(this.internalTint),i.tintFill=t,++e}},e.prototype.createPatchFrame=function(t,e,r,n,o){this.originTexture.frames.hasOwnProperty(t)||this.originTexture.add(t,this.originFrame.sourceIndex,this.originFrame.cutX+e,this.originFrame.cutY+r,n,o)},e.prototype.getPatchNameByIndex=function(t){return this.originFrame.name+"|"+e.patches[t]},e.__BASE="__BASE",e.patches=["[0][0]","[1][0]","[2][0]","[0][1]","[1][1]","[2][1]","[0][2]","[1][2]","[2][2]"],e}(Phaser.GameObjects.Container);e.NinePatch=a},454:function(t,e,r){var n=r(1136),o=r(1137),i=r(451),a=r(1138);t.exports=function(t){return n(t)||o(t)||i(t)||a()}},456:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1147);e.NinePatchPlugin=n.NinePatchPlugin;var o=r(452);e.NinePatch=o.NinePatch},5:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},6:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},7:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},80:function(t,e,r){var n=r(1140),o=r(1141),i=r(451),a=r(1142);t.exports=function(t,e){return n(t)||o(t,e)||i(t,e)||a()}}}]);