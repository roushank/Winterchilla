"use strict";!function(o){o.fn.swipe=function(r){var c=!1,a=null,n=o(this);return n.on("touchstart mousedown",function(n){c=!0;var o=n.originalEvent.touches?n.originalEvent.touches[0]:n.originalEvent;a={x:o.pageX,y:o.pageY}}),n.on("touchend mouseup",function(){c=!1,a=null}),n.on("touchmove mousemove",function(n){if(c){var o,t,e,i,u=(t=(o=n).originalEvent.touches?o.originalEvent.touches[0]:o.originalEvent,e=t.pageX,i=t.pageY,{direction:{x:e>a.x?"right":"left",y:i>a.y?"down":"up"},offset:{x:e-a.x,y:a.y-i}});r(u.direction,u.offset)}}),!0}}(jQuery);