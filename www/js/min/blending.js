"use strict";DocReady.push(function(){function e(e,r,t){return(r-(1-t)*e)/t}function r(r,t,n){return{r:e(r.r,t.r,n),g:e(r.g,t.g,n),b:e(r.b,t.b,n),a:n}}function t(e){e.stopPropagation();var t=c.filter(":valid");if(4!==t.length)return n(!1);var a={};if(t.each(function(e,r){a[r.name]=r.value.toUpperCase()}),a.bg1===a.bg2)return n(!1);$.each(a,function(e,r){a[e]=$.hex2rgb(r)});for(var o=1020,l=null,i=1;i<=255;i++){var s=r(a.bg1,a.blend1,i/255),u=r(a.bg2,a.blend2,i/255),d=Math.abs(s.r-u.r)+Math.abs(s.g-u.g)+Math.abs(s.b-u.b);d<o&&(o=d,l=s)}return null===l?n(!1):(b[o>10?"show":"hide"](),void n({r:Math.round(l.r),g:Math.round(l.g),b:Math.round(l.b),a:l.a}))}function n(e){var r="",t="",n="";if(e){r=$.rgb2hex(e),i.css("background-color",r),r='#<code class="color-red">'+r.substring(1,3)+'</code><code class="color-green">'+r.substring(3,5)+'</code><code class="color-darkblue">'+r.substring(5,7)+"</code>",t=r+("<code>"+Math.round(255*e.a).toString(16).toUpperCase()+"</code>");var a=$.roundTo(e.a,2);e='rgba(<code class="color-red">'+e.r+'</code>, <code class="color-green">'+e.g+'</code>, <code class="color-darkblue">'+e.b+"</code>, "+a+")</span>",n=100*a+"% opacity"}else e="",i.removeAttr("style");g.text(n),u.html(t),s.html(r),d.html(e)}var a=$("#blend-wrap"),o=a.children("form"),c=o.find("input:visible"),l=a.children(".result"),i=l.children(".preview"),s=l.children(".hex"),u=l.children(".hexa"),d=l.children(".rgba"),g=l.children(".opacity"),b=$(".delta-warn");c.on("keyup change input",function(){var e=$(this).prev(),r=$.hexpand(this.value).toUpperCase();HEX_COLOR_PATTERN.test(r)?e.removeClass("invalid").css("background-color",r):e.addClass("invalid"),o.triggerHandler("submit")}).on("paste blur",function(e){var r=$(this),t=function(){var t=$.hexpand(r.val());HEX_COLOR_PATTERN.test(t)&&(r.val(t.replace(HEX_COLOR_PATTERN,"#$1").toUpperCase()).trigger("change"),"blur"!==e.type&&r.next().focus())};"paste"===e.type?setTimeout(t,10):t()}).trigger("change"),o.on("submit",t).triggerHandler("submit"),o.on("click","td",function(e){if(!e.shiftKey)return!0;var r=$(this).find(".clri");if(0===r.length)return!0;e.preventDefault();var t=r.val(),n=$.mk("div").attr("class","preview").css("background-color",t),a=$.hex2rgb(t),o=$.mk("div").attr("class","input-group-3").html("<input type='number' class='color-red' name='r' min='0' max='255' step='1' value='"+a.r+"'>\n\t\t\t\t<input type='number' class='color-green' name='g' min='0' max='255' step='1' value='"+a.g+"'>\n\t\t\t\t<input type='number' class='color-darkblue' name='b' min='0' max='255' step='1' value='"+a.b+"'>");o.children().on("keyup change input mouseup",function(){var e=$(this).closest("form");e.children(".preview").css("background-color",$.rgb2hex(e.mkData()))});var c=$.mk("form","enter-rgb").append(o,n);$.Dialog.setFocusedElement(r),$.Dialog.request("Enter RGB values",c,"Set",function(e){e.on("submit",function(t){t.preventDefault(),r.val($.rgb2hex(e.mkData())).trigger("change"),$.Dialog.close()})})})});
//# sourceMappingURL=/js/min/blending.js.map
