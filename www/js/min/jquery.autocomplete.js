/*!
 * autocomplete.js 0.19.1
 * https://github.com/algolia/autocomplete.js
 * Copyright 2016 Algolia, Inc. and other contributors; Licensed MIT
 */
!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";a.exports=c(1)},function(a,b,c){"use strict";var d=c(2),e=c(3);d.element=e;var f=c(4);f.isArray=e.isArray,f.isFunction=e.isFunction,f.isObject=e.isPlainObject,f.bind=e.proxy,f.each=function(a,b){function c(a,c){return b(c,a)}e.each(a,c)},f.map=e.map,f.mixin=e.extend,f.Event=e.Event;var g,h,i,j=c(5),k=c(6);g=e.fn.autocomplete,h="aaAutocomplete",i={initialize:function(a,b){function c(){var c,d=e(this),f=new k({el:d});c=new j({input:d,eventBus:f,dropdownMenuContainer:a.dropdownMenuContainer,hint:void 0===a.hint?!0:!!a.hint,minLength:a.minLength,autoselect:a.autoselect,openOnFocus:a.openOnFocus,templates:a.templates,debug:a.debug,cssClasses:a.cssClasses,datasets:b}),d.data(h,c)}return b=f.isArray(b)?b:[].slice.call(arguments,1),a=a||{},this.each(c)},open:function(){function a(){var a,b=e(this);(a=b.data(h))&&a.open()}return this.each(a)},close:function(){function a(){var a,b=e(this);(a=b.data(h))&&a.close()}return this.each(a)},val:function(a){function b(){var b,c=e(this);(b=c.data(h))&&b.setVal(a)}function c(a){var b,c;return(b=a.data(h))&&(c=b.getVal()),c}return arguments.length?this.each(b):c(this.first())},destroy:function(){function a(){var a,b=e(this);(a=b.data(h))&&(a.destroy(),b.removeData(h))}return this.each(a)}},e.fn.autocomplete=function(a){var b;return i[a]&&"initialize"!==a?(b=this.filter(function(){return!!e(this).data(h)}),i[a].apply(b,[].slice.call(arguments,1))):i.initialize.apply(this,arguments)},e.fn.autocomplete.noConflict=function(){return e.fn.autocomplete=g,this},e.fn.autocomplete.sources=j.sources,a.exports=e.fn.autocomplete},function(a,b){"use strict";a.exports={element:null}},function(a,b){a.exports=jQuery},function(a,b,c){"use strict";var d=c(2);a.exports={isArray:null,isFunction:null,isObject:null,bind:null,each:null,map:null,mixin:null,isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isNumber:function(a){return"number"==typeof a},toStr:function(a){return void 0===a||null===a?"":a+""},cloneDeep:function(a){var b=this.mixin({},a),c=this;return this.each(b,function(a,d){a&&(c.isArray(a)?b[d]=[].concat(a):c.isObject(a)&&(b[d]=c.cloneDeep(a)))}),b},error:function(a){throw new Error(a)},every:function(a,b){var c=!0;return a?(this.each(a,function(d,e){return c=b.call(null,d,e,a),c?void 0:!1}),!!c):c},getUniqueId:function(){var a=0;return function(){return a++}}(),templatify:function(a){if(this.isFunction(a))return a;var b=d.element(a);return"SCRIPT"===b.prop("tagName")?function(){return b.text()}:function(){return String(a)}},defer:function(a){setTimeout(a,0)},noop:function(){},className:function(a,b,c){return(c?"":".")+a+"-"+b}}},function(a,b,c){"use strict";function d(a){var b,c,f;a=a||{},a.input||i.error("missing input"),this.isActivated=!1,this.debug=!!a.debug,this.autoselect=!!a.autoselect,this.openOnFocus=!!a.openOnFocus,this.minLength=i.isNumber(a.minLength)?a.minLength:1,this.cssClasses=a.cssClasses=i.mixin({},o.defaultClasses,a.cssClasses||{}),this.$node=e(a),b=this.$node.find(i.className(this.cssClasses.prefix,this.cssClasses.dropdownMenu)),c=this.$node.find(i.className(this.cssClasses.prefix,this.cssClasses.input)),f=this.$node.find(i.className(this.cssClasses.prefix,this.cssClasses.hint)),a.dropdownMenuContainer&&j.element(a.dropdownMenuContainer).css("position","relative").append(b.css("top","0")),c.on("blur.aa",function(a){var d=document.activeElement;i.isMsie()&&(b.is(d)||b.has(d).length>0)&&(a.preventDefault(),a.stopImmediatePropagation(),i.defer(function(){c.focus()}))}),b.on("mousedown.aa",function(a){a.preventDefault()}),this.eventBus=a.eventBus||new k({el:c}),this.dropdown=new d.Dropdown({menu:b,datasets:a.datasets,templates:a.templates,cssClasses:this.cssClasses}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onSync("shown",this._onShown,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new d.Input({input:c,hint:f}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function e(a){var b,c,d,e;b=j.element(a.input),c=j.element(n.wrapper.replace("%ROOT%",a.cssClasses.root)).css(o.wrapper),"block"===b.css("display")&&"table"===b.parent().css("display")&&c.css("display","table-cell");var g=n.dropdown.replace("%PREFIX%",a.cssClasses.prefix).replace("%DROPDOWN_MENU%",a.cssClasses.dropdownMenu);d=j.element(g).css(o.dropdown),a.templates&&a.templates.dropdownMenu&&d.html(i.templatify(a.templates.dropdownMenu)()),e=b.clone().css(o.hint).css(f(b)),e.val("").addClass(i.className(a.cssClasses.prefix,a.cssClasses.hint,!0)).removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),e.removeData&&e.removeData(),b.data(h,{dir:b.attr("dir"),autocomplete:b.attr("autocomplete"),spellcheck:b.attr("spellcheck"),style:b.attr("style")}),b.addClass(i.className(a.cssClasses.prefix,a.cssClasses.input,!0)).attr({autocomplete:"off",spellcheck:!1}).css(a.hint?o.input:o.inputWithNoHint);try{b.attr("dir")||b.attr("dir","auto")}catch(k){}return b.wrap(c).parent().prepend(a.hint?e:null).append(d)}function f(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function g(a,b){var c=a.find(i.className(b.prefix,b.input));i.each(c.data(h),function(a,b){void 0===a?c.removeAttr(b):c.attr(b,a)}),c.detach().removeClass(i.className(b.prefix,b.input,!0)).insertAfter(a),c.removeData&&c.removeData(h),a.remove()}var h="aaAttrs",i=c(4),j=c(2),k=c(6),l=c(7),m=c(11),n=c(13),o=c(14);i.mixin(d.prototype,{_onSuggestionClicked:function(a,b){var c;(c=this.dropdown.getDatumForSuggestion(b))&&this._select(c)},_onCursorMoved:function(){var a=this.dropdown.getDatumForCursor();this.input.setInputValue(a.value,!0),this.eventBus.trigger("cursorchanged",a.raw,a.datasetName)},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function(){this._updateHint(),this.eventBus.trigger("updated")},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")},_onShown:function(){this.eventBus.trigger("shown")},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function(){if(this.isActivated=!0,this.openOnFocus){var a=this.input.getQuery();a.length>=this.minLength?this.dropdown.update(a):this.dropdown.empty(),this.dropdown.open()}},_onBlurred:function(){this.debug||(this.isActivated=!1,this.dropdown.empty(),this.dropdown.close())},_onEnterKeyed:function(a,b){var c,d;c=this.dropdown.getDatumForCursor(),d=this.dropdown.getDatumForTopSuggestion(),c?(this._select(c),b.preventDefault()):this.autoselect&&d&&(this._select(d),b.preventDefault())},_onTabKeyed:function(a,b){var c;(c=this.dropdown.getDatumForCursor())?(this._select(c),b.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function(a,b){this.input.clearHintIfInvalid(),b.length>=this.minLength?this.dropdown.update(b):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var a=this.input.getLanguageDirection();this.dir!==a&&(this.dir=a,this.$node.css("direction",a),this.dropdown.setLanguageDirection(a))},_updateHint:function(){var a,b,c,d,e,f;a=this.dropdown.getDatumForTopSuggestion(),a&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(b=this.input.getInputValue(),c=l.normalizeQuery(b),d=i.escapeRegExChars(c),e=new RegExp("^(?:"+d+")(.+$)","i"),f=e.exec(a.value),f?this.input.setHint(b+f[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(a){var b,c,d,e;b=this.input.getHint(),c=this.input.getQuery(),d=a||this.input.isCursorAtEnd(),b&&c!==b&&d&&(e=this.dropdown.getDatumForTopSuggestion(),e&&this.input.setInputValue(e.value),this.eventBus.trigger("autocompleted",e.raw,e.datasetName))},_select:function(a){"undefined"!=typeof a.value&&this.input.setQuery(a.value),this.input.setInputValue(a.value,!0),this._setLanguageDirection();var b=this.eventBus.trigger("selected",a.raw,a.datasetName);b.isDefaultPrevented()===!1&&(this.dropdown.close(),i.defer(i.bind(this.dropdown.empty,this.dropdown)))},open:function(){if(!this.isActivated){var a=this.input.getInputValue();a.length>=this.minLength?this.dropdown.update(a):this.dropdown.empty()}this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(a){a=i.toStr(a),this.isActivated?this.input.setInputValue(a):(this.input.setQuery(a),this.input.setInputValue(a,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),g(this.$node,this.cssClasses),this.$node=null}}),d.Dropdown=m,d.Input=l,d.sources=c(15),a.exports=d},function(a,b,c){"use strict";function d(a){a&&a.el||f.error("EventBus initialized without el"),this.$el=g.element(a.el)}var e="autocomplete:",f=c(4),g=c(2);f.mixin(d.prototype,{trigger:function(a){var b=[].slice.call(arguments,1),c=f.Event(e+a);return this.$el.trigger(c,b),c}}),a.exports=d},function(a,b,c){"use strict";function d(a){var b,c,d,f,g=this;a=a||{},a.input||i.error("input is missing"),b=i.bind(this._onBlur,this),c=i.bind(this._onFocus,this),d=i.bind(this._onKeydown,this),f=i.bind(this._onInput,this),this.$hint=j.element(a.hint),this.$input=j.element(a.input).on("blur.aa",b).on("focus.aa",c).on("keydown.aa",d),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=i.noop),i.isMsie()?this.$input.on("keydown.aa keypress.aa cut.aa paste.aa",function(a){h[a.which||a.keyCode]||i.defer(i.bind(g._onInput,g,a))}):this.$input.on("input.aa",f),this.query=this.$input.val(),this.$overflowHelper=e(this.$input)}function e(a){return j.element('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:a.css("font-family"),fontSize:a.css("font-size"),fontStyle:a.css("font-style"),fontVariant:a.css("font-variant"),fontWeight:a.css("font-weight"),wordSpacing:a.css("word-spacing"),letterSpacing:a.css("letter-spacing"),textIndent:a.css("text-indent"),textRendering:a.css("text-rendering"),textTransform:a.css("text-transform")}).insertAfter(a)}function f(a,b){return d.normalizeQuery(a)===d.normalizeQuery(b)}function g(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var h;h={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};var i=c(4),j=c(2),k=c(8);d.normalizeQuery=function(a){return(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},i.mixin(d.prototype,k,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(a){var b=h[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(a,b){var c,d,e;switch(a){case"tab":d=this.getHint(),e=this.getInputValue(),c=d&&d!==e&&!g(b);break;case"up":case"down":c=!g(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!g(b);break;default:c=!0}return c},_checkInputValue:function(){var a,b,c;a=this.getInputValue(),b=f(a,this.query),c=b&&this.query?this.query.length!==a.length:!1,this.query=a,b?c&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){"undefined"==typeof a&&(a=this.query),this.$input.val(a),b?this.clearHint():this._checkInputValue()},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),d=""!==a&&c&&!this.hasOverflow(),d||this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,b,c;return a=this.$input.val().length,b=this.$input[0].selectionStart,i.isNumber(b)?b===a:document.selection?(c=document.selection.createRange(),c.moveStart("character",-a),a===c.text.length):!0},destroy:function(){this.$hint.off(".aa"),this.$input.off(".aa"),this.$hint=this.$input=this.$overflowHelper=null}}),a.exports=d},function(a,b,c){(function(b){"use strict";function c(a,b,c,d){var e;if(!c)return this;for(b=b.split(k),c=d?j(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function d(a,b,d){return c.call(this,"async",a,b,d)}function e(a,b,d){return c.call(this,"sync",a,b,d)}function f(a){var b;if(!this._callbacks)return this;for(a=a.split(k);b=a.shift();)delete this._callbacks[b];return this}function g(a){var b,c,d,e,f;if(!this._callbacks)return this;for(a=a.split(k),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=h(c.sync,this,[b].concat(d)),f=h(c.async,this,[b].concat(d)),e()&&l(f);return this}function h(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&f>e;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function i(){var a;return a=window.setImmediate?function(a){b(function(){a()})}:function(a){setTimeout(function(){a()},0)}}function j(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var k=/\s+/,l=i();a.exports={onSync:e,onAsync:d,off:f,trigger:g}}).call(b,c(9).setImmediate)},function(a,b,c){(function(a,d){function e(a,b){this._id=a,this._clearFn=b}var f=c(10).nextTick,g=Function.prototype.apply,h=Array.prototype.slice,i={},j=0;b.setTimeout=function(){return new e(g.call(setTimeout,window,arguments),clearTimeout)},b.setInterval=function(){return new e(g.call(setInterval,window,arguments),clearInterval)},b.clearTimeout=b.clearInterval=function(a){a.close()},e.prototype.unref=e.prototype.ref=function(){},e.prototype.close=function(){this._clearFn.call(window,this._id)},b.enroll=function(a,b){clearTimeout(a._idleTimeoutId),a._idleTimeout=b},b.unenroll=function(a){clearTimeout(a._idleTimeoutId),a._idleTimeout=-1},b._unrefActive=b.active=function(a){clearTimeout(a._idleTimeoutId);var b=a._idleTimeout;b>=0&&(a._idleTimeoutId=setTimeout(function(){a._onTimeout&&a._onTimeout()},b))},b.setImmediate="function"==typeof a?a:function(a){var c=j++,d=arguments.length<2?!1:h.call(arguments,1);return i[c]=!0,f(function(){i[c]&&(d?a.apply(null,d):a.call(null),b.clearImmediate(c))}),c},b.clearImmediate="function"==typeof d?d:function(a){delete i[a]}}).call(b,c(9).setImmediate,c(9).clearImmediate)},function(a,b){function c(){j=!1,g.length?i=g.concat(i):k=-1,i.length&&d()}function d(){if(!j){var a=setTimeout(c);j=!0;for(var b=i.length;b;){for(g=i,i=[];++k<b;)g&&g[k].run();k=-1,b=i.length}g=null,j=!1,clearTimeout(a)}}function e(a,b){this.fun=a,this.array=b}function f(){}var g,h=a.exports={},i=[],j=!1,k=-1;h.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];i.push(new e(a,b)),1!==i.length||j||setTimeout(d,0)},e.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.binding=function(a){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(a){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(a,b,c){"use strict";function d(a){var b,c,d,h=this;a=a||{},a.menu||f.error("menu is required"),f.isArray(a.datasets)||f.isObject(a.datasets)||f.error("1 or more datasets required"),a.datasets||f.error("datasets is required"),this.isOpen=!1,this.isEmpty=!0,this.cssClasses=f.mixin({},j.defaultClasses,a.cssClasses||{}),b=f.bind(this._onSuggestionClick,this),c=f.bind(this._onSuggestionMouseEnter,this),d=f.bind(this._onSuggestionMouseLeave,this);var i=f.className(this.cssClasses.prefix,this.cssClasses.suggestion);this.$menu=g.element(a.menu).on("click.aa",i,b).on("mouseenter.aa",i,c).on("mouseleave.aa",i,d),a.templates&&a.templates.header&&this.$menu.prepend(f.templatify(a.templates.header)()),this.datasets=f.map(a.datasets,function(b){return e(h.$menu,b,a.cssClasses)}),f.each(this.datasets,function(a){var b=a.getRoot();b&&0===b.parent().length&&h.$menu.append(b),a.onSync("rendered",h._onRendered,h)}),a.templates&&a.templates.footer&&this.$menu.append(f.templatify(a.templates.footer)())}function e(a,b,c){return new d.Dataset(f.mixin({$menu:a,cssClasses:c},b))}var f=c(4),g=c(2),h=c(8),i=c(12),j=c(14);f.mixin(d.prototype,h,{_onSuggestionClick:function(a){this.trigger("suggestionClicked",g.element(a.currentTarget))},_onSuggestionMouseEnter:function(a){var b=g.element(a.currentTarget);b.hasClass(f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0))||(this._removeCursor(),this._setCursor(b))},_onSuggestionMouseLeave:function(a){if(a.relatedTarget){var b=g.element(a.relatedTarget);if(b.closest("."+f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)).length>0)return}this._removeCursor(),this.trigger("cursorRemoved")},_onRendered:function(){function a(a){return a.isEmpty()}this.isEmpty=f.every(this.datasets,a),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block"),this.trigger("shown")},_getSuggestions:function(){return this.$menu.find(f.className(this.cssClasses.prefix,this.cssClasses.suggestion))},_getCursor:function(){return this.$menu.find(f.className(this.cssClasses.prefix,this.cssClasses.cursor)).first()},_setCursor:function(a){a.first().addClass(f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)),this.trigger("cursorMoved")},_removeCursor:function(){this._getCursor().removeClass(f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0))},_moveCursor:function(a){var b,c,d,e;if(this.isOpen){if(c=this._getCursor(),b=this._getSuggestions(),this._removeCursor(),d=b.index(c)+a,d=(d+1)%(b.length+1)-1,-1===d)return void this.trigger("cursorRemoved");-1>d&&(d=b.length-1),this._setCursor(e=b.eq(d)),this._ensureVisible(e)}},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.height()+parseInt(a.css("margin-top"),10)+parseInt(a.css("margin-bottom"),10),d=this.$menu.scrollTop(),e=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),0>b?this.$menu.scrollTop(d+b):c>e&&this.$menu.scrollTop(d+(c-e))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,this.isEmpty||this._show(),this.trigger("opened"))},setLanguageDirection:function(a){this.$menu.css("ltr"===a?j.ltr:j.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(a){var b=null;return a.length&&(b={raw:i.extractDatum(a),value:i.extractValue(a),datasetName:i.extractDatasetName(a)}),b},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function(a){function b(b){b.update(a)}f.each(this.datasets,b)},empty:function(){function a(a){a.clear()}f.each(this.datasets,a),this.isEmpty=!0},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function a(a){a.destroy()}this.$menu.off(".aa"),this.$menu=null,f.each(this.datasets,a)}}),d.Dataset=i,a.exports=d},function(a,b,c){"use strict";function d(a){a=a||{},a.templates=a.templates||{},a.source||k.error("missing source"),a.name&&!g(a.name)&&k.error("invalid dataset name: "+a.name),this.query=null,this.highlight=!!a.highlight,this.name="undefined"==typeof a.name||null===a.name?k.getUniqueId():a.name,this.source=a.source,this.displayFn=e(a.display||a.displayKey),this.templates=f(a.templates,this.displayFn),this.cssClasses=k.mixin({},n.defaultClasses,a.cssClasses||{});var b=k.className(this.cssClasses.prefix,this.cssClasses.dataset);this.$el=a.$menu&&a.$menu.find(b+"-"+this.name).length>0?l.element(a.$menu.find(b+"-"+this.name)[0]):l.element(m.dataset.replace("%CLASS%",this.name).replace("%PREFIX%",this.cssClasses.prefix).replace("%DATASET%",this.cssClasses.dataset)),this.$menu=a.$menu}function e(a){function b(b){return b[a]}return a=a||"value",k.isFunction(a)?a:b}function f(a,b){function c(a){return"<p>"+b(a)+"</p>"}return{empty:a.empty&&k.templatify(a.empty),header:a.header&&k.templatify(a.header),footer:a.footer&&k.templatify(a.footer),suggestion:a.suggestion||c}}function g(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var h="aaDataset",i="aaValue",j="aaDatum",k=c(4),l=c(2),m=c(13),n=c(14),o=c(8);d.extractDatasetName=function(a){return l.element(a).data(h)},d.extractValue=function(a){return l.element(a).data(i)},d.extractDatum=function(a){var b=l.element(a).data(j);return"string"==typeof b&&(b=JSON.parse(b)),b},k.mixin(d.prototype,o,{_render:function(a,b){function c(){var b=[].slice.call(arguments,0);return b=[{query:a,isEmpty:!0}].concat(b),o.templates.empty.apply(this,b)}function d(){function a(a){var b,c=m.suggestion.replace("%PREFIX%",f.cssClasses.prefix).replace("%SUGGESTION%",f.cssClasses.suggestion);return b=l.element(c).append(o.templates.suggestion.apply(this,[a].concat(e))),b.data(h,o.name),b.data(i,o.displayFn(a)||void 0),b.data(j,JSON.stringify(a)),b.children().each(function(){l.element(this).css(n.suggestionChild)}),b}var c,d,e=[].slice.call(arguments,0),f=this,g=m.suggestions.replace("%PREFIX%",this.cssClasses.prefix).replace("%SUGGESTIONS%",this.cssClasses.suggestions);return c=l.element(g).css(n.suggestions),d=k.map(b,a),c.append.apply(c,d),c}function e(){var b=[].slice.call(arguments,0);return b=[{query:a,isEmpty:!g}].concat(b),o.templates.header.apply(this,b)}function f(){var b=[].slice.call(arguments,0);return b=[{query:a,isEmpty:!g}].concat(b),o.templates.footer.apply(this,b)}if(this.$el){var g,o=this,p=[].slice.call(arguments,2);this.$el.empty(),g=b&&b.length,!g&&this.templates.empty?this.$el.html(c.apply(this,p)).prepend(o.templates.header?e.apply(this,p):null).append(o.templates.footer?f.apply(this,p):null):g&&this.$el.html(d.apply(this,p)).prepend(o.templates.header?e.apply(this,p):null).append(o.templates.footer?f.apply(this,p):null),this.$menu&&this.$menu.addClass(this.cssClasses.prefix+"-"+(g?"with":"without")+"-"+this.name).removeClass(this.cssClasses.prefix+"-"+(g?"without":"with")+"-"+this.name),this.trigger("rendered")}},getRoot:function(){return this.$el},update:function(a){function b(b){if(!c.canceled&&a===c.query){var d=[].slice.call(arguments,1);d=[a,b].concat(d),c._render.apply(c,d)}}var c=this;this.query=a,this.canceled=!1,this.source(a,b)},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=null}}),a.exports=d},function(a,b){"use strict";a.exports={wrapper:'<span class="%ROOT%"></span>',dropdown:'<span class="%PREFIX%-%DROPDOWN_MENU%"></span>',dataset:'<div class="%PREFIX%-%DATASET%-%CLASS%"></div>',suggestions:'<span class="%PREFIX%-%SUGGESTIONS%"></span>',suggestion:'<div class="%PREFIX%-%SUGGESTION%"></div>'}},function(a,b,c){"use strict";var d=c(4),e={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:"0"},defaultClasses:{root:"algolia-autocomplete",prefix:"aa",dropdownMenu:"dropdown-menu",input:"input",hint:"hint",suggestions:"suggestions",suggestion:"suggestion",cursor:"cursor",dataset:"dataset"}};d.isMsie()&&d.mixin(e.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),d.isMsie()&&d.isMsie()<=7&&d.mixin(e.input,{marginTop:"-1px"}),a.exports=e},function(a,b,c){"use strict";a.exports={hits:c(16),popularIn:c(17)}},function(a,b,c){"use strict";var d=c(4);a.exports=function(a,b){function c(c,e){a.search(c,b,function(a,b){return a?void d.error(a.message):void e(b.hits,b)})}return c}},function(a,b,c){"use strict";var d=c(4);a.exports=function(a,b,c,e){function f(f,i){a.search(f,b,function(a,b){if(a)return void d.error(a.message);if(b.hits.length>0){var f=b.hits[0],j=d.mixin({hitsPerPage:0},c);return delete j.source,delete j.index,void h.search(g(f),j,function(a,c){if(a)return void d.error(a.message);var g=[];if(e.includeAll){var h=e.allTitle||"All departments";g.push(d.mixin({facet:{value:h,count:c.nbHits}},d.cloneDeep(f)))}d.each(c.facets,function(a,b){d.each(a,function(a,c){g.push(d.mixin({facet:{facet:b,value:c,count:a}},d.cloneDeep(f)))})});for(var j=1;j<b.hits.length;++j)g.push(b.hits[j]);i(g,b)})}i([])})}if(!c.source)return d.error("Missing 'source' key");var g=d.isFunction(c.source)?c.source:function(a){return a[c.source]};if(!c.index)return d.error("Missing 'index' key");var h=c.index;return e=e||{},f}}]);