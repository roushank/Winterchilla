"use strict";var _createClass=function(){function o(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(r){var n="pony-color-palette",e={},l=function(){function a(t,e,o){var n=this;_classCallCheck(this,a),this.appearanceId=t,this.shown=!1,this.colorData=null,this.getColorData(),this.$picker=r.mk("div").attr("class","hidden pony-color-palette").appendTo($body),this.$swatchBox=r.mk("div").attr("class","swatchbox loading").appendTo(this.$picker),this.$nullColor=r.mk("li").attr("class","color color-null selected").append(r.mk("span").attr("title","Default").text(e)),r.mk("ul").attr("class","colorgroup").append(this.$nullColor).appendTo(this.$swatchBox),this.$picker.on("click",".color",function(t){t.stopPropagation();var e=r(t.target).closest(".color"),a=e.children().text();n.$picker.find(".color.selected").removeClass("selected"),e.addClass("selected"),o(0<a.length?a:null),n.hide(!0)})}return _createClass(a,[{key:"displayError",value:function(t){this.$swatchBox.html(r.mk("p").attr("class","error").text(t))}},{key:"getColorData",value:function(){var t=this;void 0===e[this.appearanceId]?(e[this.appearanceId]=[this],r.post("/api/cg/appearance/"+this.appearanceId+"/link-targets?hex",r.mkAjaxHandler(function(a){if(!a.status)return t.displayError(a.message);r.each(e[t.appearanceId],function(t,e){e.fillSwatchBox(a.list)})}))):e[this.appearanceId].push(this)}},{key:"fillSwatchBox",value:function(t){var o=this;this.$swatchBox.removeClass("loading").children().first().nextAll().remove(),r.each(t,function(t,e){var a=r.mk("ul").attr("class","colorgroup").appendTo(o.$swatchBox);a.append(r.mk("li").attr({title:e.label,class:"color group-icon"})),r.each(e.colors,function(t,e){a.append(r.mk("li").attr("class","color").append(r.mk("span").attr("title",e.label).css("background-color",e.hex).text(e.hex)))})})}},{key:"display",value:function(t){r(".pony-color-palette").addClass("hidden");var e=r(t.target),a=e.offset(),o=a.top,n=a.left;return o+=e.outerHeight(),this.$picker.css({top:o,left:n}).removeClass("hidden"),this}},{key:"hide",value:function(){return(0<arguments.length&&void 0!==arguments[0]&&arguments[0]||!this.$picker.is(":hover"))&&this.$picker.addClass("hidden"),this}},{key:"selectColor",value:function(t){this.$picker.find(".color").removeClass("selected").filter(function(){return r(this).text()===t}).addClass("selected")}}]),a}();r.fn.ponyColorPalette=function(t,a,o){return this.each(function(){var e=r(this);e.data(n,new l(t,a,function(t){o(e,t)})),e.on("focus",function(t){r(t.target).data(n).display(t)}),e.on("keydown",function(t){r.isKey(Key.Escape,t)&&(t.preventDefault(),r(t.target).data(n).hide())}),e.on("blur",function(t){r(t.target).data(n).hide()})}),this}}(jQuery);
//# sourceMappingURL=/js/min/jquery.ponycolorpalette.js.map
