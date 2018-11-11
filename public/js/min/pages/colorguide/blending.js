"use strict";!function(){function t(e,r,n){return(r-(1-n)*e)/n}function u(e,r,n){return{red:t(e.red,r.red,n),green:t(e.green,r.green,n),blue:t(e.blue,r.blue,n),alpha:n}}var e=$("#blend-wrap"),n=e.children("form"),s=n.find("input:visible"),r=e.children(".result"),l=r.children(".preview"),o=r.children(".hex"),c=r.children(".hexa"),i=r.children(".rgba"),d=r.children(".opacity"),g=$(".delta-warn");function p(e){var r="",n="",t="";if(!1!==e){r=$.rgb2hex(e),l.css("background-color",r),n=(r='#<code class="color-red">'+r.substring(1,3)+'</code><code class="color-green">'+r.substring(3,5)+'</code><code class="color-darkblue">'+r.substring(5,7)+"</code>")+"<code>"+Math.round(255*e.alpha).toString(16).toUpperCase()+"</code>";var a=$.roundTo(e.alpha,2);e='rgba(<code class="color-red">'+e.red+'</code>, <code class="color-green">'+e.green+'</code>, <code class="color-darkblue">'+e.blue+"</code>, "+a+")</span>",t=100*a+"% opacity"}else e="",l.removeAttr("style");d.text(t),c.html(n),o.html(r),i.html(e)}s.on("keyup change input",function(){var e=$(this).prev(),r=$.RGBAColor.parse(this.value);null!==r?e.removeClass("invalid").css("background-color",r.toHex()):e.addClass("invalid"),n.triggerHandler("submit")}).on("paste blur",function(r){var n=$(this),e=function(){var e=$.RGBAColor.parse(n.val());null!==e&&(n.val(e.toHex()).trigger("change"),"blur"!==r.type&&n.next().focus())};"paste"===r.type?setTimeout(e,10):e()}).trigger("change"),n.on("submit",function(e){e.stopPropagation();var r=s.filter(":valid");if(4!==r.length)return p(!1);var n={};if(r.each(function(e,r){n[r.name]=r.value.toUpperCase()}),n.bg1===n.bg2)return p(!1);$.each(n,function(e,r){n[e]=$.RGBAColor.parse(r)});for(var t=1020,a=null,l=1;l<=255;l++){var o=u(n.bg1,n.blend1,l/255),c=u(n.bg2,n.blend2,l/255),i=Math.abs(o.red-c.red)+Math.abs(o.green-c.green)+Math.abs(o.blue-c.blue);i<t&&(t=i,a=o)}if(null===a)return p(!1);g[10<t?"show":"hide"](),p({red:Math.round(a.red),green:Math.round(a.green),blue:Math.round(a.blue),alpha:a.alpha})}).triggerHandler("submit"),n.on("click","td",function(e){if(!e.shiftKey)return!0;var n=$(this).find(".clri");if(0===n.length)return!0;e.preventDefault();var r=n.val(),t=$.mk("div").attr("class","preview").css("background-color",r),a=$.RGBAColor.parse(r),l=$.mk("div").attr("class","input-group-3").html("<input type='number' class='color-red' name='r' min='0' max='255' step='1' value='"+a.red+"'>\n\t\t\t\t<input type='number' class='color-green' name='g' min='0' max='255' step='1' value='"+a.green+"'>\n\t\t\t\t<input type='number' class='color-darkblue' name='b' min='0' max='255' step='1' value='"+a.blue+"'>");l.children().on("keyup change input mouseup",function(){var e=$(this).closest("form");e.children(".preview").css("background-color",$.rgb2hex(e.mkData()))});var o=$.mk("form","enter-rgb").append(l,t);$.Dialog.setFocusedElement(n),$.Dialog.request("Enter RGB values",o,"Set",function(r){r.on("submit",function(e){e.preventDefault(),n.val($.rgb2hex(r.mkData())).trigger("change"),$.Dialog.close()})})})}();