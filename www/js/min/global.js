"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();!function(e){if("undefined"==typeof e.Navigation||e.Navigation.firstLoadDone!==!0){"function"!=typeof window.console.log&&(window.console.log=function(){}),"function"!=typeof window.console.group&&(window.console.group=function(){}),"function"!=typeof window.console.groupEnd&&(window.console.groupEnd=function(){}),"function"!=typeof window.console.clear&&(window.console.clear=function(){}),window.mk=function(){return document.createElement.apply(document,arguments)},e.mk=function(t,n){var o=e(document.createElement.call(document,t));return"string"==typeof n&&o.attr("id",n),o};var t=function(){function e(){_classCallCheck(this,e),this.emulatedStorage={}}return _createClass(e,[{key:"getItem",value:function(e){return"undefined"==typeof this.emulatedStorage[e]?null:this.emulatedStorage[e]}},{key:"setItem",value:function(e,t){this.emulatedStorage[e]="string"==typeof t?t:""+t}},{key:"removeItem",value:function(e){delete this.emulatedStorage[e]}}]),e}(),n=function(){function e(n){_classCallCheck(this,e);var o=n+"Storage";try{this.store=window[n+"Storage"]}catch(e){console.error(o+" is unavailable, falling back to EmulatedStorage"),this.store=new t}}return _createClass(e,[{key:"get",value:function(e){var t=null;try{t=this.store.getItem(e)}catch(e){}return t}},{key:"set",value:function(e,t){try{this.store.setItem(e,t)}catch(e){}}},{key:"remove",value:function(e){try{this.store.removeItem(e)}catch(e){}}}]),e}();e.LocalStorage=new n("local"),e.SessionStorage=new n("session"),e.toAbsoluteURL=function(e){var t=mk("a");return t.href=e,t.href},window.$w=e(window),window.$d=e(document),window.CommonElements=function(){window.$header=e("header"),window.$sbToggle=e(".sidebar-toggle"),window.$main=e("#main"),window.$content=e("#content"),window.$sidebar=e("#sidebar"),window.$footer=e("footer"),window.$body=e("body"),window.$head=e("head"),window.$navbar=$header.find("nav")},window.CommonElements(),window.Key={Enter:13,Space:32,LeftArrow:37,RightArrow:39,Tab:9,Comma:188},e.isKey=function(e,t){return t.keyCode===e},function(e){var t={order:"Do MMMM YYYY, H:mm:ss"};t.orderwd="dddd, "+t.order;var n=function(e){function t(e,n){_classCallCheck(this,t);var o=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.name="DateFormatError",o.element=n,o}return _inherits(t,e),t}(Error),o=function(){function o(){_classCallCheck(this,o)}return _createClass(o,null,[{key:"Update",value:function(){e("time[datetime]:not(.nodt)").addClass("dynt").each(function(){var i=e(this),a=i.attr("datetime");if("string"!=typeof a)throw new TypeError('Invalid date data type: "'+("undefined"==typeof a?"undefined":_typeof(a))+'"');var r=moment(a);if(!r.isValid())throw new n('Invalid date format: "'+a+'"',this);var s=moment(),c=!i.attr("data-noweekday"),l=r.from(s),d=i.parent().children(".dynt-el"),u=i.data("dyntime-beforeupdate");if("function"==typeof u){var f=u(o.Difference(s.toDate(),r.toDate()));if(f===!1)return}d.length>0||i.hasClass("no-dynt-el")?(i.html(r.format(c?t.orderwd:t.order)),d.html(l)):i.attr("title",r.format(t.order)).html(l)})}},{key:"Difference",value:function(e,t){var n=(e.getTime()-t.getTime())/1e3,o={past:n>0,time:Math.abs(n),target:t},i=o.time;return o.day=Math.floor(i/this.InSeconds.day),i-=o.day*this.InSeconds.day,o.hour=Math.floor(i/this.InSeconds.hour),i-=o.hour*this.InSeconds.hour,o.minute=Math.floor(i/this.InSeconds.minute),i-=o.minute*this.InSeconds.minute,o.second=Math.floor(i),o.day>=7&&(o.week=Math.floor(o.day/7),o.day-=7*o.week),o.week>=4&&(o.month=Math.floor(o.week/4),o.week-=4*o.month),o.month>=12&&(o.year=Math.floor(o.month/12),o.month-=12*o.year),o}}]),o}();o.InSeconds={year:31557600,month:2592e3,week:604800,day:86400,hour:3600,minute:60},window.Time=o,o.Update(),setInterval(o.Update,1e4)}(jQuery),e.capitalize=function(e,t){return t?e.replace(/((?:^|\s)[a-z])/g,function(e){return e.toUpperCase()}):1===e.length?e.toUpperCase():e[0].toUpperCase()+e.substring(1)},"function"!=typeof Array.prototype.includes&&(Array.prototype.includes=function(e){return this.indexOf(e)!==-1}),"function"!=typeof String.prototype.includes&&(String.prototype.includes=function(e){return this.indexOf(e)!==-1}),e.pad=function(t,n,o,i){for("string"!=typeof t&&(t=""+t),"string"!=typeof n&&(n="0"),o="number"!=typeof o&&!isFinite(o)&&isNaN(o)?2:parseInt(o,10),"boolean"!=typeof i&&(i=!0);t.length<o;)t=i===e.pad.left?n+t:t+n;return t},e.pad.right=!(e.pad.left=!0),e.scaleResize=function(e,t,n){var o=void 0,i={scale:n.scale,width:n.width,height:n.height};if(isNaN(i.scale))if(isNaN(i.width))o=i.height/t,i.width=Math.round(e*o),i.scale=o;else{if(!isNaN(i.height))throw new Error("[scalaresize] Invalid arguments");o=i.width/e,i.height=Math.round(t*o),i.scale=o}else i.height=Math.round(t*i.scale),i.width=Math.round(e*i.scale);return i},e.clearSelection=function(){if(window.getSelection){var e=window.getSelection();e.empty?e.empty():e.removeAllRanges&&e.removeAllRanges()}else document.selection&&document.selection.empty()},e.toArray=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return[].slice.call(e,t)},$w.on("ajaxerror",function(){var t="";if(arguments.length>1){var n=e.toArray(arguments,1);if("abort"===n[1])return;t=" Details:<pre><code>"+n.slice(1).join("\n").replace(/</g,"&lt;")+"</code></pre>Response body:";var o=/^(?:<br \/>\n)?(<pre class='xdebug-var-dump'|<font size='1')/;o.test(n[0].responseText)?t+='<div class="reset">'+n[0].responseText.replace(o,"$1")+"</div>":"string"==typeof n[0].responseText&&(t+="<pre><code>"+n[0].responseText.replace(/</g,"&lt;")+"</code></pre>")}e.Dialog.fail(!1,"There was an error while processing your request."+t)}),e.mkAjaxHandler=function(e){return function(t){return"object"!==("undefined"==typeof t?"undefined":_typeof(t))?(console.log(t),void $w.triggerHandler("ajaxerror")):void("function"==typeof e&&e.call(t))}},e.callCallback=function(t,n,o){return"object"===("undefined"==typeof n?"undefined":_typeof(n))&&e.isArray(n)||(o=n,n=[]),"function"!=typeof t?o:t.apply(window,n)},e.fn.mkData=function(t){var n=e(this).serializeArray(),o={};return e.each(n,function(e,t){o[t.name]=t.value}),"object"===("undefined"==typeof t?"undefined":_typeof(t))&&e.extend(o,t),o},e.getCSRFToken=function(){var e=document.cookie.match(/CSRF_TOKEN=([a-z\d]+)/i);if(e&&e.length)return e[1];throw new Error("Missing CSRF_TOKEN")},e.ajaxPrefilter(function(t,n){if("POST"===(n.type||t.type).toUpperCase()){var o=e.getCSRFToken();if("undefined"==typeof t.data&&(t.data=""),"string"==typeof t.data){var i=t.data.length>0?t.data.split("&"):[];i.push("CSRF_TOKEN="+o),t.data=i.join("&")}else t.data.CSRF_TOKEN=o}});var o=void 0,i={401:function(){e.Dialog.fail(void 0,"Cross-site Request Forgery attack detected. Please notify the site administartors.")},404:function(){e.Dialog.fail(!1,"Error 404: The requested endpoint ("+o.replace(/</g,"&lt;").replace(/\//g,"/<wbr>")+") could not be found")},500:function(){e.Dialog.fail(!1,'The request failed due to an internal server error. If this persists, please <a class="send-feedback">let us know</a>!')},503:function(){e.Dialog.fail(!1,'The request failed because the server is temporarily unavailable. This shouldn’t take too long, please try again in a few seconds.<br>If the problem still persist after a few minutes, please let us know by clicking the "Send feedback" link in the footer.')}};e.ajaxSetup({dataType:"json",error:function(t){"function"!=typeof i[t.status]&&$w.triggerHandler("ajaxerror",e.toArray(arguments)),$body.removeClass("loading")},beforeSend:function(e,t){o=t.url},statusCode:i});var a=void 0;e.copy=function(t,n){if(!document.queryCommandSupported("copy"))return prompt("Copy with Ctrl+C, close with Enter",t),!0;var o=e.mk("textarea"),i=!1;o.css({opacity:0,width:0,height:0,position:"fixed",left:"-10px",top:"50%",display:"block"}).text(t).appendTo("body").focus(),o.get(0).select();try{i=document.execCommand("copy")}catch(e){}setTimeout(function(){if(o.remove(),"undefined"==typeof a||n){if("undefined"==typeof a&&(a=e.mk("span").attr({id:"copy-notify",class:i?void 0:"fail"}).html('<span class="typcn typcn-clipboard"></span> <span class="typcn typcn-'+(i?"tick":"cancel")+'"></span>').appendTo($body)),n){var t=a.outerWidth(),r=a.outerHeight(),s=n.clientY-r/2;return a.stop().css({top:s,left:n.clientX-t/2,bottom:"initial",right:"initial",opacity:1}).animate({top:s-20,opacity:0},1e3,function(){e(this).remove(),a=void 0})}a.fadeTo("fast",1)}else a.stop().css("opacity",1);a.delay(i?300:1e3).fadeTo("fast",0,function(){e(this).remove(),a=void 0})},1)},e.hex2rgb=function(e){return{r:parseInt(e.substring(1,3),16),g:parseInt(e.substring(3,5),16),b:parseInt(e.substring(5,7),16)}},e.rgb2hex=function(e){return"#"+(16777216+(parseInt(e.r,10)<<16)+(parseInt(e.g,10)<<8)+parseInt(e.b,10)).toString(16).toUpperCase().substring(1)},"function"!=typeof e.expr[":"].valid&&(e.expr[":"].valid=function(t){return"object"===_typeof(t.validity)?t.validity.valid:function(t){var n=e(t),o=n.attr("pattern"),i=n.hasAttr("required"),a=n.val();return!(i&&("string"!=typeof a||!a.length))&&(!o||new RegExp(o).test(a))}(t)}),e.roundTo=function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n},e.rangeLimit=function(e,t){var n=void 0,o=void 0,i=2;switch(arguments.length-i){case 1:n=0,o=arguments[i];break;case 2:n=arguments[i],o=arguments[i+1];break;default:throw new Error("Invalid number of parameters for $.rangeLimit")}return t&&(e>o?e=n:e<n&&(e=o)),Math.min(o,Math.max(n,e))},e.fn.select=function(){var e=document.createRange();e.selectNodeContents(this.get(0));var t=window.getSelection();t.removeAllRanges(),t.addRange(e)};var r=/^#?([A-Fa-f0-9]{3})$/;window.SHORT_HEX_COLOR_PATTERN=r,e.hexpand=function(e){var t=e.trim().match(r);return t?(t=t[1],"#"+t[0]+t[0]+t[1]+t[1]+t[2]+t[2]):e.replace(/^#?/,"#")},e.yiq=function(t){var n=e.hex2rgb(t);return(299*n.r+587*n.g+114*n.b)/1e3},e.fn.toggleHtml=function(t){return this.html(t[e.rangeLimit(t.indexOf(this.html())+1,!0,t.length-1)])},e.fn.moveAttr=function(t,n){return this.each(function(){var o=e(this),i=o.attr(t);"undefined"!=typeof i&&o.removeAttr(t).attr(n,i)})},e.fn.backgroundImageUrl=function(e){return this.css("background-image",'url("'+e.replace(/"/g,"%22")+'")')},e.attributifyRegex=function(e){return e.toString().replace(/(^\/|\/[img]*$)/g,"")},e.fn.patternAttr=function(t){if("undefined"==typeof t)throw new Error("$.fn.patternAttr: regex is undefined");return this.attr("pattern",e.attributifyRegex(t))},e.fn.enable=function(){return this.attr("disabled",!1)},e.fn.disable=function(){return this.attr("disabled",!0)},e.fn.hasAttr=function(e){return this.get(0).hasAttribute(e)},e.fn.isOverflowing=function(){var e=this.get(0),t=e.style.overflow;t&&"visible"!==t||(e.style.overflow="hidden");var n=e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight;return e.style.overflow=t,n},e.scrollTo=function(t,n,o){var i=function(){return!1};e("html,body").on("mousewheel scroll",i).animate({scrollTop:t},n,o).off("mousewheel scroll",i),$w.on("beforeunload",function(){e("html,body").stop().off("mousewheel scroll",i)})},e.getAceEditor=function(t,n,o){var i=function(){return e.Dialog.fail(!1,"Failed to load Ace Editor")},a=function(){e.Dialog.clearNotice(),o("ace/mode/"+n)};"undefined"==typeof window.ace?(e.Dialog.wait(t,"Loading Ace Editor"),e.getScript("/js/min/ace/ace.js",function(){window.ace.config.set("basePath","/js/min/ace"),a()}).fail(i)):a()},e.aceInit=function(e){e.$blockScrolling=1/0,e.setShowPrintMargin(!1);var t=e.getSession();return t.setUseSoftTabs(!1),t.setOption("indentedSoftWrap",!1),t.setOption("useWorker",!0),t.on("changeAnnotation",function(){for(var e=t.getAnnotations()||[],n=0,o=e.length,i=!1;n<o;)/doctype first\. Expected/.test(e[n].text)?(e.splice(n,1),o--,i=!0):n++;i&&t.setAnnotations(e)}),t},e.isInViewport=function(e){var t=void 0;try{t=e.getBoundingClientRect()}catch(e){return!0}return t.bottom>0&&t.right>0&&t.left<(window.innerWidth||document.documentElement.clientWidth)&&t.top<(window.innerHeight||document.documentElement.clientHeight)},e.fn.isInViewport=function(){return!!this[0]&&e.isInViewport(this[0])},e.isRunningStandalone=function(){return window.matchMedia("(display-mode: standalone)").matches},window.URL=function(t){var n=document.createElement("a"),o={};return n.href=t,e.each(["hash","host","hostname","href","origin","pathname","port","protocol","search"],function(e,t){o[t]=n[t]}),o.pathString=o.pathname.replace(/^([^\/].*)$/,"/$1")+o.search+o.hash,o},window.OpenSidebarByDefault=function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)>=1200},window.WithinMobileBreakpoint=function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=600};var s=function(t){t.fluidbox({immediateOpen:!0,loader:!0}).on("openstart.fluidbox",function(){$body.addClass("fluidbox-open");var t=e(this);t.parents("#dialogContent").length&&$body.addClass("fluidbox-in-dialog")}).on("openend.fluidbox",function(){var t=e(this),n=t.attr("href");t.data("href",n),t.removeAttr("href");var o=t.find(".fluidbox__ghost");0===o.children().length&&t.find(".fluidbox__ghost").append(e.mk("img").attr("src",n).css({opacity:0,width:"100%",height:"100%"}))}).on("closestart.fluidbox",function(){$body.removeClass("fluidbox-open");var t=e(this);t.attr("href",t.data("href")),t.removeData("href")}).on("closeend.fluidbox",function(){$body.removeClass("fluidbox-in-dialog")})};e.fn.fluidboxThis=function(t){var n=this;return"function"==typeof e.fn.fluidbox?(s(this),e.callCallback(t)):e.getScript("/js/min/jquery.ba-throttle-debounce.js",function(){e.getScript("/js/min/jquery.fluidbox.js",function(){s(n),e.callCallback(t)}).fail(function(){e.Dialog.fail(!1,"Loading Fluidbox plugin failed")})}).fail(function(){e.Dialog.fail(!1,"Loading Debounce/throttle plugin failed")}),this};var c=function(e,t){var n="undefined"!=typeof window.screenLeft?window.screenLeft:screen.left,o="undefined"!=typeof window.screenTop?window.screenTop:screen.top,i=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,r=i/2-e/2+n,s=a/2-t/2+o;return{top:s,left:r}};e.PopupOpenCenter=function(e,t,n,o){var i=c(n,o),a=window.open(e,t,"scrollbars=yes,width="+n+",height="+o+",top="+i.top+",left="+i.left);return window.focus&&a.focus(),a},e.PopupMoveCenter=function(e,t,n){var o=c(t,n);e.resizeTo(t,n),e.moveTo(o.left,o.top)};var l=window.OAUTH_URL,d=function(){return(~~(99999999*Math.random())).toString(36)};$d.on("click","#turbo-sign-in",function(t){t.preventDefault();var n=e(this),o=n.parent().html();n.disable(),l=n.attr("data-url");var i=d(),a=!1,r=void 0,s=void 0;window[" "+i]=function(){a=!0,"request"===e.Dialog._open.type?e.Dialog.clearNotice(/Redirecting you to DeviantArt/):e.Dialog.close(),s.close()};try{s=window.open(l+"&state="+i)}catch(t){return e.Dialog.fail(!1,"Could not open login pop-up. Please open another page")}e.Dialog.wait(!1,"Redirecting you to DeviantArt"),r=setInterval(function(){try{if(!s||s.closed){if(clearInterval(r),a)return;e.Dialog.fail(!1,o)}}catch(e){}},500)});var u=function(){console.log("> docReadyAlwaysRun()"),$d.triggerHandler("paginate-refresh"),e.LocalStorage.remove("cookie_consent");var t=e.LocalStorage.get("cookie_consent_v2");l=window.OAUTH_URL,e("#signin").off("click").on("click",function(){var n=e(this),o=function(t){if(t){e.Dialog.close(),e.LocalStorage.set("cookie_consent_v2",1),n.disable();var o=function(){e.Dialog.wait(!1,"Redirecting you to DeviantArt"),location.href=l+"&state="+encodeURIComponent(location.href.replace(location.origin,""))};if(navigator.userAgent.indexOf("Trident")!==-1)return o();e.Dialog.wait("Sign-in process","Opening popup window");var i=d(),a=!1,r=void 0,s=void 0;window[" "+i]=function(t){a=!0,clearInterval(r),s.close(),e.Dialog.success(!1,"Singed in successfully"),e.Dialog.wait(!1,"Reloading page"),e.Navigation.reload(function(){t&&"function"==typeof window.ga&&window.ga("set","userId",t),e.Dialog.close()})};try{s=e.PopupOpenCenter(l+"&state="+i,"login","450","580")}catch(e){}var c=function(){if(!a){if(document.cookie.indexOf("auth=")!==-1)return window[" "+i];e.Dialog.fail(!1,"Popup-based login unsuccessful"),o()}};r=setInterval(function(){try{s&&!s.closed||(clearInterval(r),c())}catch(e){}},500),$w.on("beforeunload",function(){a=!0,s.close()}),e.Dialog.wait(!1,"Waiting for you to sign in")}};t?o(!0):e.Dialog.confirm("Privacy Notice",'<p>Dear User,</p><p>We must inform you that our website will store cookies on your device to remember your logged in status between browser sessions.</p><p>If you would like to avoid these completly harmless pieces of text which are required to use this website, click "Decline" and continue browsing as a guest.</p><p>In addition to persistent cookies, we use Google Analytics to track website traffic.</p><p>By default, browsing data will be tied to your user ID. If you do not want that, you can to turn this off by clicking the "Account" menu item and un-ticking the approperiate check box in the "Settings" section after you\'ve logged in.</p><p>I’d like to take this opportunity to mention <a href="https://www.ublock.org/" target="_blank">uBlock</a>, a great extension that\'ll prevent not just us but many other sites from tracking your activity. This is not sponsored or anything, I just thought I’d let you know.</p><p>Sincerely,<br>The developer</p><p><em>This warning will not appear again if you accept our use of persistent cookies & Google Analytics.</em></p>',["Accept","Decline"],o)}),e("#signout").off("click").on("click",function(){var t="Sign out";e.Dialog.confirm(t,"Are you sure you want to sign out?",function(n){n&&(e.Dialog.wait(t,"Signing out"),e.post("/da-auth/signout",e.mkAjaxHandler(function(){return this.status?(WSNotifications.disconnect("signout"),void e.Navigation.reload(function(){e.Dialog.close()})):e.Dialog.fail(t,this.message)})))})});try{if(/^https/.test(location.protocol))throw void 0;var n=e.SessionStorage.get("canhttps");if("false"===n)throw void 0;e.ajax({method:"POST",url:"https://"+location.host+"/ping",success:e.mkAjaxHandler(function(){this.status&&$sidebar.append(e.mk("a").attr({class:"btn green typcn typcn-lock-closed",href:location.href.replace(/^http:/,"https:")}).text("Switch to HTTPS")),e.SessionStorage.set("canhttps",n=this.status.toString())}),error:function(){e.SessionStorage.set("canhttps",n="false")}})}catch(e){}},f=function(){function t(n){if(_classCallCheck(this,t),this._options=e.extend({min:0,max:.98,intervalEnabled:!0,intervalDelay:800,randomIncrement:.08},n),this._$element=$header.find(".loading-indicator").children(".loading-circle"),1!==this._$element.length)throw new Error("Loader: Element not found");this._circumference=2*this._$element.attr("r")*Math.PI,this._$element.css("stroke-dasharray",this._circumference),this.val(1,1)}return _createClass(t,[{key:"show",value:function(){$body.addClass("loading"),this.val(0),this._startInterval()}},{key:"_startInterval",value:function(){var e=this;this._options.intervalEnabled&&"undefined"==typeof this._interval&&(this._interval=setInterval(function(){e.inc(null,.5)},this._options.intervalDelay))}},{key:"_clearInterval",value:function(){return"undefined"!=typeof this._interval&&(clearInterval(this._interval),void(this._interval=void 0))}},{key:"enableInterval",value:function(){this._options.intervalEnabled=!0,this._startInterval()}},{key:"disableInterval",value:function(){this._options.intervalEnabled=!1,this._clearInterval()}},{key:"val",value:function(t,n){isNaN(t)||(this.at=e.rangeLimit(t,!1,this._options.min,n||this._options.max)),this._$element.css("stroke-dashoffset",this._circumference*(1-this.at))}},{key:"inc",value:function(e,t){return isNaN(e)||(e=Math.random()*this._options.randomIncrement),!(this._options.max<this.at+e)&&void this.val(this.at+e,t)}},{key:"finish",value:function(){this.val(1,1),this.hide()}},{key:"hide",value:function(){this._clearInterval(),$body.removeClass("loading")}}]),t}();e.Loader=new f;var h=function(){function t(){_classCallCheck(this,t),this._DocReadyHandlers=[],this._xhr=!1,this._lastLoadedPathname=window.location.pathname,this.firstLoadDone=!1}return _createClass(t,[{key:"_docReady",value:function(){console.log("> _docReady()"),u();for(var e=0,t=this._DocReadyHandlers.length;e<t;e++)try{this._DocReadyHandlers[e].call(window),console.log("> DocReadyHandlers[%d]()",e)}catch(t){console.error("Error while executing DocReadyHandlers["+e+"]\n"+t.stack)}}},{key:"flushDocReady",value:function(){e(".marquee").trigger("destroy.simplemarquee").removeClass("marquee");for(var t=0,n=this._DocReadyHandlers.length;t<n;t++)"function"==typeof this._DocReadyHandlers[t].flush&&(this._DocReadyHandlers[t].flush(),console.log("Flushed DocReady handler #%d",t));this._DocReadyHandlers=[]}},{key:"_loadCSS",value:function(t,n,o){if(!t.length)return e.callCallback(o);console.group("Loading CSS");var i=this;!function a(r){if(r>=t.length)return console.groupEnd(),e.callCallback(o);var s=t[r];i=e.ajax({url:s,dataType:"text",success:function(t){t=t.replace(/url\((['"])?(?:\.\.\/)+/g,"url($1/"),$head.append(e.mk("style").attr("href",s).text(t)),console.log("%c#%d (%s)","color:green",r,s)},error:function(){console.log("%c#%d (%s)","color:red",r,s)},complete:function(){n(),a(r+1)}})}(0)}},{key:"_loadJS",value:function(t,n,o){if(!t.length)return e.callCallback(o);console.group("Loading JS");var i=this;!function a(r){if(r>=t.length)return console.groupEnd(),e.callCallback(o);var s=t[r];i._xhr=e.ajax({url:s,dataType:"text",success:function(t){$body.append(e.mk("script").attr("data-src",s).text(t)),console.log("%c#%d (%s)","color:green",r,s)},error:function(){console.log("%c#%d (%s)","color:red",r,s)},complete:function(){n(),a(r+1)}})}(0)}},{key:"visit",value:function(t,n,o){console.clear(),console.group("[AJAX-Nav] PING %s (block_reload: %s)",t,o);var i=this;if(i._xhr!==!1){try{i._xhr.abort(),console.log("Previous AJAX request aborted")}catch(e){}i._xhr=!1}e.Loader.show(),e.Loader.enableInterval();var a=e.ajax({url:t,data:{"via-js":!0},success:e.mkAjaxHandler(function(){if(i._xhr!==a)return console.log("%cAJAX request objects do not match, bail","color:red"),void console.groupEnd();if(!this.status)return $body.removeClass("loading"),e.Loader.finish(),i._xhr=!1,console.log("%cNavigation error %s","color:red",this.message),console.groupEnd(),e.Dialog.fail("Navigation error",this.message);e.Loader.val(.5),e.Loader.disableInterval(),t=new URL(this.responseURL).pathString+new URL(t).hash,$w.triggerHandler("unload"),window.OpenSidebarByDefault()||$sbToggle.trigger("sb-close");var r=this.css,s=this.js,c=this.content,l=this.sidebar,d=this.footer,u=this.title,f=this.avatar,h=this.signedIn;$main.empty();var p=!1,g=new URL(location.href),m=!o&&g.pathString===t;if(i.flushDocReady(),console.groupCollapsed("Checking JS files to skip..."),$body.children("script[src], script[data-src]").each(function(){var t=e(this),n=t.attr("src")||t.attr("data-src");if(m)return/min\/dialog\.js/.test(n)||t.remove(),!0;var o=s.indexOf(n);if(o===-1||/min\/(colorguide[.-]|episodes-manage|moment-timezone|episode|Chart|user[.-])/.test(n)){if(n.includes("global"))return!(p=!0);t.remove()}else s.splice(o,1),console.log("%cSkipped %s","color:saddlebrown",n)}),console.log("%cFinished.","color:green"),console.groupEnd(),p!==!1)return console.log("%cFull page reload forced by changes in global.js","font-weight:bold;color:orange"),console.groupEnd(),location.href=t;console.groupCollapsed("Checking CSS files to skip...");var v="link[href], style[href]";$head.children(v).each(function(){var t=e(this),n=t.attr("href"),o=r.indexOf(n);o!==-1?(r.splice(o,1),console.log("%cSkipped %s","color:saddlebrown",n)):t.attr("data-remove","true")}),console.log("%cFinished.","color:green"),console.groupEnd(),console.groupEnd(),console.group("[AJAX-Nav] GET %s",t);var w=0,y=r.length+s.length;$w.trigger("beforeunload"),i._loadCSS(r,function(){w++,e.Loader.val(.5+w/y*.5)},function(){$head.children(v.replace(/href/g,"data-remove=true")).remove(),$main.addClass("pls-wait").html(c),$sidebar.html(l),$footer.html(d),Time.Update(),window.setUpcomingEpisodeCountdown();var a=$header.find("nav").children();a.children().first().children("img").attr("src",f),a.children(":not(:first-child)").remove(),a.append($sidebar.find("nav").children().children().clone()),window.CommonElements(),o||history[g.pathString===t?"replaceState":"pushState"]({"via-js":!0},"",t),document.title=u,i._lastLoadedPathname=window.location.pathname,i._loadJS(s,function(){w++,e.Loader.val(.5+w/y*.5)},function(){console.log("> $(document).ready() [simulated]"),i._docReady(),console.log("%cDocument ready handlers called","color:green"),console.groupEnd(),$main.removeClass("pls-wait"),window.WSNotifications(h),e.callCallback(n),e.Loader.finish(),i._xhr=!1})})})});i._xhr=a}},{key:"reload",value:function(e){this.visit(location.pathname+location.search+location.hash,e)}}]),t}();e.Navigation=new h,window.DocReady={push:function(t,n){"function"==typeof n&&(t.flush=n),e.Navigation._DocReadyHandlers.push(t)}}}}(jQuery),$(function(){$.Navigation.firstLoadDone||($.Navigation.firstLoadDone=!0,console.log("[HTTP-Nav] > $(document).ready()"),console.group("[HTTP-Nav] GET "+window.location.pathname+window.location.search+window.location.hash),window.ServiceUnavailableError!==!0&&$.get("/footer-git",$.mkAjaxHandler(function(){this.footer&&$footer.prepend(this.footer)})),function(){var e=function(){setTimeout(function(){$w.trigger("resize")},510)};$sbToggle.off("click sb-open sb-close").on("click",function(e){e.preventDefault(),$sbToggle.trigger("sb-"+($body.hasClass("sidebar-open")?"close":"open"))}).on("sb-open sb-close",function(t){var n="close"===t.type.substring(3);$body[n?"removeClass":"addClass"]("sidebar-open");try{$.LocalStorage[n?"set":"remove"]("sidebar-closed","true")}catch(e){}e()});var t=void 0;try{t=$.LocalStorage.get("sidebar-closed")}catch(e){}"true"!==t&&window.OpenSidebarByDefault()&&($body.addClass("sidebar-open"),e())}(),function(){var e=void 0,t=void 0,n=function(){"undefined"!=typeof t&&(clearInterval(t),t=void 0)},o=function(){var t="function"==typeof e.parent&&e.parent().length>0,o={},i=void 0,a=void 0;if(t&&(i=new Date,a=new Date(e.attr("datetime")),o=Time.Difference(i,a)),!t||o.past)return t&&(e.find(".marquee").trigger("destroy.simplemarquee"),e.parents("li").remove()),n(),window.setUpcomingEpisodeCountdown();var r=void 0;o.time<Time.InSeconds.month?(o.week>0&&(o.day+=7*o.week),r="in ",o.day>0&&(r+=o.day+" day"+(1!==o.day?"s":"")+" & "),o.hour>0&&(r+=o.hour+":"),r+=$.pad(o.minute)+":"+$.pad(o.second)):r=moment(a).from(i),e.text(r)};window.setUpcomingEpisodeCountdown=function(){var i=$("#upcoming");if(i.length){var a=i.children("ul").children();if(!a.length)return i.remove();e=a.first().find("time").addClass("nodt"),n(),t=setInterval(o,1e3),o(),i.find("li").each(function(){var e=$(this),t=e.children(".calendar"),n=moment(e.find(".countdown").data("airs")||e.find("time").attr("datetime"));t.children(".top").text(n.format("MMM")),t.children(".bottom").text(n.format("D"))}),Time.Update(),$.ajax({url:"/js/min/jquery.simplemarquee.js",dataType:"script",cache:!0,success:function(){a.find(".title").simplemarquee({speed:25,cycles:1/0,space:25,handleHover:!1,delayBetweenCycles:0}).addClass("marquee")}})}},window.setUpcomingEpisodeCountdown()}(),$(document).off("click",".send-feedback").on("click",".send-feedback",function(e){e.preventDefault(),e.stopPropagation(),$("#ctxmenu").hide(),$.Dialog.info($.Dialog.isOpen()?void 0:"Send feedback","<h3>How to send feedback</h3>\n\t\t\t<p>If you're having an issue with the site and would like to let us know or have an idea/feature request you’d like to share, here’s how:</p>\n\t\t\t<ul>\n\t\t\t\t<li><a href='https://discord.gg/0vv70fepSILbdJOD'>Join our Discord server</a> and describe your issue in the <strong>#support</strong> channel</li>\n\t\t\t\t<li><a href='http://mlp-vectorclub.deviantart.com/notes/'>Send a note </a>to the group on DeviantArt</li>\n\t\t\t\t<li><a href='mailto:seinopsys@gmail.com'>Send an e-mail</a> to seinopsys@gmail.com</li>\n\t\t\t\t<li>If you have a GitHub account, you can also  <a href=\""+$footer.find("a.issues").attr("href")+'">create an issue</a> on the project’s GitHub page.\n\t\t\t</ul>')}),$(document).off("click",".action--color-avg").on("click",".action--color-avg",function(e){e.preventDefault(),e.stopPropagation();var t="Colour Average Calculator",n=function(){$.Dialog.close();var e=window.$ColorAvgFormTemplate.clone(!0,!0);$.Dialog.request(t,e,!1,function(){e.triggerHandler("added")})};"undefined"==typeof window.$ColorAvgFormTemplate?!function(){$.Dialog.wait(t,"Loading form, please wait");var e="/js/min/global-color_avg_form.js";$.getScript(e,n).fail(function(){setTimeout(function(){$.Dialog.close(function(){$.Dialog.wait(t,"Loading script (attempt #2)"),$.getScript(e.replace(/min\./,""),n).fail(function(){$.Dialog.fail(t,"Form could not be loaded")})})},1)})}():n()}),$d.on("click","a[href]",function(e){if(e.which>2)return!0;var t=this;return t.host!==location.host||(t.pathname===location.pathname&&t.search===location.search?t.protocol!==location.protocol||(e.preventDefault(),window._trighashchange=t.hash!==location.hash,window._trighashchange===!0&&history.replaceState(history.state,"",t.href),setTimeout(function(){delete window._trighashchange},1),void $w.triggerHandler("hashchange")):!/^.*\/[^.]*$/.test(t.pathname)||(0!==$(this).parents("#dialogContent").length&&$.Dialog.close(),e.preventDefault(),void $.Navigation.visit(this.href)))}),$w.on("popstate",function(e){if("undefined"==typeof window._trighashchange){var t=e.originalEvent.state,n=function(e,t){return $.Navigation.visit(e,t,!0)};return null===t||t["via-js"]||t.paginate!==!0?void n(location.href):$w.trigger("nav-popstate",[t,n])}}),$.isRunningStandalone()&&!function(){var e=$body.scrollTop(),t=function(){if(window.WithinMobileBreakpoint()){var t=$body.scrollTop(),n=$header.outerHeight(),o=parseInt($header.css("top"),10);$header.css("top",t>e?Math.max(-n,o-(t-e)):Math.min(0,o+(e-t))),e=t}};$w.on("scroll",t),t()}(),function(){function e(e){if(e){var c=function(){s(),r.off("click",".mark-read").on("click",".mark-read",function(e){e.preventDefault();var t=$(this);if(!t.is(":disabled")){var n=t.attr("data-id"),o={read_action:t.attr("data-value")},i=function(){t.css("opacity",".5").disable(),$.post("/notifications/mark-read/"+n,o,$.mkAjaxHandler(function(){if(!this.status)return t.css("opacity","").enable(),$.Dialog.fail("Mark notification as read",this.message)}))};o.read_action?$.Dialog.confirm("Actionable notification",'Please confirm your choice: <strong class="color-'+t.attr("class").replace(/^.*variant-(\w+)\b.*$/,"$1")+'">'+t.attr("title")+"</strong>",["Confirm","Cancel"],function(e){
e&&($.Dialog.close(),i())}):i()}}),t||(t=io(n,{reconnectionDelay:1e4}),t.on("connect",function(){console.log("[WS] Connected")}),t.on("auth",o(function(e){console.log("[WS] Authenticated as "+e.name)})),t.on("notif-cnt",o(function(e){var t=e.cnt?parseInt(e.cnt,10):0;console.log("[WS] Got notification count (data.cnt=%d, cnt=%d)",e.cnt,t),s(),0===t?a.stop().slideUp("fast",function(){r.empty(),i.empty()}):$.post("/notifications/get",$.mkAjaxHandler(function(){i.text(t),r.html(this.list),Time.Update(),a.stop().slideDown()}))})),t.on("rip",function(){console.log("[WS] Authentication failed"),t.disconnect(0)}),t.on("disconnect",function(){console.log("[WS] Disconnected")}))};window.io?c():$.ajax({url:n+"socket.io/socket.io.js",cache:"true",dataType:"script",success:c,statusCode:{404:function(){console.log("%c[WS] Server down!","color:red")}}})}}var t=void 0,n="https://ws."+location.hostname+":8667/",o=function(e){return function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(e){}e(t)}},i=void 0,a=void 0,r=void 0,s=function(){i=$sbToggle.children(".notif-cnt"),0===i.length&&(i=$.mk("span").attr({class:"notif-cnt",title:"New notifications"}).prependTo($sbToggle)),a=$sidebar.children(".notifications"),r=a.children(".notif-list")};e(window.signedIn),window.WSNotifications=function(){var n=function(t){return e(t)};return n.disconnect=function(e){"undefined"!=typeof t&&(console.log("[WS] Forced disconnect (reason="+e+")"),t.disconnect(0))},n}()}(),$.Navigation._docReady(),console.log("%cDocument ready handlers called","color:green"),console.groupEnd())}),$w.on("load",function(){$body.removeClass("loading")});
//# sourceMappingURL=/js/min/global.js.map
