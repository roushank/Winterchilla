"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();$(function(){var e=["red","green","blue"],t={red:0,green:1,blue:2},a=function(e,t,a){return(a-e*t)/(1-e)},r=function(e,t,a){return(a-e*t)/(1-e)},i={normal:function(e,t){var a=e.length,r=new $.RGBAColor(0,0,0),i=new $.RGBAColor(0,0,0),n=0,l=0;$.RGBAColor.COMPONENTS.forEach(function(o){e.forEach(function(e,s){var d=e[o],c=d-t[s][o];r[o]+=d,i[o]+=c,n-=a*Math.pow(c,2),l-=a*d*c}),n+=Math.pow(i[o],2),l+=i[o]*r[o]});var o=$.clamp(n/l,0,1);return r.alpha=o,$.RGBAColor.COMPONENTS.forEach(function(e){var t=o?(r[e]-i[e]/o)/a:0;r[e]=Math.round($.clamp(t,0,255))}),r},multiply:function(e,t){console.log(e);var a=new $.RGBAColor(0,0,0);$.RGBAColor.COMPONENTS.forEach(function(r){var i=e.reduce(function(e,a,i){return e+a[r]*(a[r]-t[i][r])},0),n=e.reduce(function(e,a,i){return e+Math.pow(a[r]-t[i][r],2)},0);a[r]=i/(2*n)});var r=Math.max(1,1/a.toRGBArray().reduce(function(e,t){return Math.min(e,t)}));return $.RGBAColor.COMPONENTS.forEach(function(e){var t=255-255/(a[e]*r);a[e]=Math.round($.clamp(t,0,255))}),a.alpha=$.clamp(.5*r,0,1),a}};new(function(){function n(){var e=this;_classCallCheck(this,n),this.$controls=$("#controls"),this.$knownColorsTbody=$("#known-colors").find("tbody"),this.$backupImage=$.mk("img"),this.backupImage=this.$backupImage.get(0),this.overlayColor=new $.RGBAColor(255,0,255,.75),this.filteredColor=null,this.haveImage=!1,this.targetType="image",this.filterOverrideActive=!1,this.fileName=null,this.selectedFilterColor=null,this.$freezing=$("#freezing"),this.$preview=$("#preview"),this.$previewImageCanvas=$("#preview-image"),this.previewImageCanvas=this.$previewImageCanvas.get(0),this.previewImageCtx=this.previewImageCanvas.getContext("2d"),this.$previewOverlayCanvas=$("#preview-overlay"),this.previewOverlayCanvas=this.$previewOverlayCanvas.get(0),this.previewOverlayCtx=this.previewOverlayCanvas.getContext("2d"),this.$addKnownColor=$("#add-known-color").on("click",function(t){t.preventDefault(),e.addKnownValueInputRow()}),this.$imageSelect=$("#image-select"),this.$imageSelectFileInput=this.$imageSelect.children("input").on("change",function(t){var a=t.target;if(a.files&&a.files[0]){e.fileName=a.files[0].name.split(/[\/]/g).pop();var r=new FileReader;r.onload=function(t){e.backupImage.src=t.target.result,e.$backupImage.one("load",function(){e.$backupImage.off("error"),e.haveImage=!0,e.updatePreview()}).one("error",function(){e.$backupImage.off("load"),$.Dialog.fail("Could not load image. Please make sure it is an actual image file.")})},r.readAsDataURL(a.files[0])}}),this.$imageSelectFileButton=this.$imageSelect.children("button").on("click",function(t){t.preventDefault(),e.$imageSelectFileInput.click()}),this.$colorSelect=$("#color-select"),this.$colorSelectColorInput=this.$colorSelect.find("input").on("change",function(t){var a=$.RGBAColor.parse(t.target.value);null!==a?(t.target.value=a,e.filteredColor=a,e.haveImage=!0,e.updatePreview()):e.haveImage=!1}).on("change input blur",n.colorInputEventHandler),this.$filterTypeSelect=$("#filter-type").children("select").on("change",function(){e.updateFilterCandidateList(),e.updatePreview()}),this.$sensitivityControls=$("#sensitivity"),this.$sensitivitySlider=this.$sensitivityControls.children("div"),this.$sensitivityDisplay=this.$sensitivityControls.find(".display"),this.sensitivitySlider=this.$sensitivitySlider.get(0),noUiSlider.create(this.sensitivitySlider,{start:[10],range:{min:0,max:255},step:1,behaviour:"drag snap",format:{to:function(e){return parseInt(e,10)},from:function(e){return parseInt(e,10)}}}),this.sensitivitySlider.noUiSlider.on("update",function(t,a){e.$sensitivityDisplay.text(t[a])}),this.sensitivitySlider.noUiSlider.on("end",function(){e.updatePreview()}),this.$resultSaveButton=$("#result").children("button").on("click",function(t){if(t.preventDefault(),e.haveImage&&null!==e.selectedFilterColor){var a=void 0;if(e.isOverlayEnabled()){(a=document.createElement("canvas")).width=e.previewImageCanvas.width,a.height=e.previewImageCanvas.height;var r=a.getContext("2d");r.drawImage(e.previewImageCanvas,0,0),r.drawImage(e.previewOverlayCanvas,0,0)}else a=e.previewImageCanvas;a.toBlob(function(t){var a=" (no "+e.getFilterType()+" filter)";saveAs(t,e.fileName.replace(/^(.*?)(\.(?:[^.]+))?$/,"$1"+a+"$2")||"image"+a+".png")})}}),this.$filterCandidates=$("#filter-candidates").children("ul"),this.$filterCandidates.on("click","li",function(t){var a=$(t.target).closest("li"),r=a.hasClass("selected");e.$filterCandidates.children(".selected").removeClass("selected"),r||(a.addClass("selected"),e.selectedFilterColor=$.RGBAColor.parse(a.attr("data-rgba"))),e.updatePreview()}),this.$overlayControls=$("#overlay"),this.$overlayToggleInput=this.$overlayControls.find('input[type="checkbox"]').on("change input",function(t){e.$previewOverlayCanvas[t.target.checked?"removeClass":"addClass"]("hidden")}),this.$overlayColorInput=this.$overlayControls.find('input[type="text"]').on("change",function(t){var a=$.RGBAColor.parse(t.target.value);null!==a&&(t.target.value=a,e.overlayColor=a,e.repaintOverlay())}).on("change input blur",n.colorInputEventHandler),this.$overlayColorInput.val(this.overlayColor.toString()).trigger("input"),$("#filter-override").find('input[type="checkbox"]').on("change input",function(t){if(e.filterOverrideActive=t.target.checked,e.$filterCandidates.parent()[e.filterOverrideActive?"addClass":"removeClass"]("hidden"),e.filterOverrideActive)e.updateOverriddenFilterColor();else{var a=e.$filterCandidates.children(".selected");e.selectedFilterColor=a.length?$.RGBAColor.parse(a.attr("data-rgba")):null,e.updatePreview()}}),this.$filterOverrideOpacity=$("#filter-override-opacity").on("change",function(t){t.target.value=$.clamp(t.target.value,0,100),e.updateOverriddenFilterColor()}),this.$filterOverrideColor=$("#filter-override-color").on("change",function(t){var a=$.RGBAColor.parse(t.target.value);null!==a&&(t.target.value=a.toHex(),e.updateOverriddenFilterColor())}).on("change input blur",n.colorInputEventHandler),this.$reverseWhat=$("#reverse-what").on("click change","input",function(t){e.targetType=t.target.value,"image"!==e.targetType?e.$imageSelect.addClass("hidden"):e.$imageSelect.removeClass("hidden"),"color"!==e.targetType?e.$colorSelect.addClass("hidden"):e.$colorSelect.removeClass("hidden"),e.updatePreview()}),this.addKnownValueInputRow(!0),this.addKnownValueInputRow()}return _createClass(n,[{key:"isOverlayEnabled",value:function(){return!this.$previewOverlayCanvas.hasClass("hidden")}},{key:"updateOverriddenFilterColor",value:function(){if(this.filterOverrideActive){var e=$.RGBAColor.parse(this.$filterOverrideColor.val());null!==e&&(e.alpha=this.$filterOverrideOpacity.val()/100),this.selectedFilterColor=e,this.updatePreview()}}},{key:"createKnownValueInput",value:function(e){var t=this;return $.mk("td").attr("class","color-cell "+e).append($.mk("input").attr({type:"text",required:!0,autocomplete:"off",spellcheck:"false"}).on("input change blur",function(e){var t=$(e.target),a=t.val(),r=$.RGBAColor.parse(a);null===r?t.css({color:"",backgroundColor:""}):t.css({color:r.isLight()?"black":"white",backgroundColor:r.toHex()})}).on("blur",function(e){var a=$(e.target),r=$.RGBAColor.parse(a.val());null!==r?a.removeAttr("pattern").val(r):a.attr("pattern","^[^\\s\\S]$"),t.updateFilterCandidateList()}).on("paste",function(e){window.requestAnimationFrame(function(){$(e.target).trigger("blur")})}))}},{key:"addKnownValueInputRow",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$knownColorsTbody.children().length;this.$knownColorsTbody.append($.mk("tr").attr("class",t?"reference":"").append(this.createKnownValueInput("original"),this.createKnownValueInput("filtered"),$.mk("td").attr("class","actions").append($.mk("button").attr({disabled:t,class:"red typcn typcn-minus",title:"Remove known color pair"}).on("click",function(t){t.preventDefault();var a=$(t.target).closest("tr");2===a.siblings().length&&a.siblings().find("button.red").disable().addClass("hidden"),a.remove(),e.updateFilterCandidateList()}),$.mk("button").attr({class:"darkblue typcn typcn-anchor",title:"Set as reference color",disabled:t}).on("click",function(t){t.preventDefault();var a=$(t.target);if(!a.is(":disabled")){var r=a.closest("tr"),i=r.find("input:invalid");i.length?i.first().focus():(r.addClass("reference").siblings().removeClass("reference").find("button").enable(),a.siblings().addBack().disable(),e.updateFilterCandidateList())}}))));var a=this.$knownColorsTbody.children();this.$knownColorsTbody.children().length>2?(a.find("button.red").removeClass("hidden"),a.filter(":not(.reference)").find("button.red").enable()):a.find("button.red").addClass("hidden")}},{key:"redrawPreviewImage",value:function(){var e="image"===this.targetType,t=e?this.backupImage.width:192,a=e?this.backupImage.height:108;this.previewOverlayCanvas.width=this.previewImageCanvas.width=t,this.previewOverlayCanvas.height=this.previewImageCanvas.height=a,"image"===this.targetType?this.previewImageCtx.drawImage(this.backupImage,0,0):(this.previewImageCtx.fillStyle=this.filteredColor,this.previewImageCtx.fillRect(0,0,t,a)),this.previewOverlayCtx.clearRect(0,0,this.previewOverlayCanvas.width,this.previewOverlayCanvas.height)}},{key:"repaintOverlay",value:function(){if(this.haveImage){for(var e=this.previewOverlayCtx.getImageData(0,0,this.previewOverlayCanvas.width,this.previewOverlayCanvas.height),t=0;t<e.data.length;t+=4)1===e.data[t+3]&&(e.data[t]=this.overlayColor.red,e.data[t+1]=this.overlayColor.green,e.data[t+2]=this.overlayColor.blue);this.previewOverlayCtx.putImageData(e,0,0)}}},{key:"updatePreview",value:function(){var a=this;if(this.haveImage){this.redrawPreviewImage();var r=null===this.selectedFilterColor;if(this.$resultSaveButton.attr("disabled",r),!r){var i=this.sensitivitySlider.noUiSlider.get(),n=this.previewImageCtx.getImageData(0,0,this.previewImageCanvas.width,this.previewImageCanvas.height),l=this.previewOverlayCtx.getImageData(0,0,this.previewOverlayCanvas.width,this.previewOverlayCanvas.height),o=this.getReverseCalculator();this.$freezing.removeClass("hidden"),setTimeout(function(){for(var r=function(r){var s=!1,d=!1;$.each(e,function(e,l){var c=function(e,a){return e+t[a]}(r,l),v=o(a.selectedFilterColor.alpha,a.selectedFilterColor[l],n.data[c]);!d&&v-i>255&&(d=!0),!s&&v+i<0&&(s=!0),n.data[c]=$.clamp(v,0,255)}),(s||d)&&(l.data[r]=a.overlayColor.red,l.data[r+1]=a.overlayColor.green,l.data[r+2]=a.overlayColor.blue,l.data[r+3]=255*a.overlayColor.alpha)},s=0;s<n.data.length;s+=4)r(s);a.previewImageCtx.putImageData(n,0,0),a.previewOverlayCtx.putImageData(l,0,0),a.$freezing.addClass("hidden")},200)}}else this.$resultSaveButton.disable()}},{key:"updateFilterCandidateList",value:function(){var e={original:[],filtered:[]};this.$filterCandidates.empty(),this.selectedFilterColor=null;var t=this.$knownColorsTbody.children();if(!(t.length<2||(t.each(function(t,a){var r=$(a).find("input:valid");2===r.length&&r.each(function(t,a){e[a.parentNode.className.split(" ")[1]].push($.RGBAColor.parse(a.value))})}),e.original.length<2||e.filtered.length<2))){var a=i[this.getFilterType()](e.original,e.filtered);this.$filterCandidates.append(n.getFilterDisplayLi(a.round()))}}},{key:"getFilterType",value:function(){return this.$filterTypeSelect.children(":selected").attr("value")}},{key:"getReverseCalculator",value:function(){switch(this.getFilterType()){case"multiply":return r;case"normal":return a}}}],[{key:"getFilterDisplayLi",value:function(e){console.log(e);var t=e.toRGBA(),a=$.mk("ul").attr("class","pairs");return $.mk("li").attr({"data-rgba":t,title:"Click to select & apply"}).append($.mk("div").attr("class","color").append($.mk("div").attr("class","color-preview").append($.mk("span").css("background-color",t)),$.mk("div").attr("class","color-rgba").append('<div><strong>R:</strong> <span class="color-red">'+e.red+"</span></div>",'<div><strong>G:</strong> <span class="color-green">'+e.green+"</span></div>",'<div><strong>B:</strong> <span class="color-blue">'+e.blue+"</span></div>","<div><strong>A:</strong> <span>"+Math.round(100*e.alpha)+"%</span></div>")),a)}},{key:"colorInputEventHandler",value:function(e){var t=$(e.target),a=$.RGBAColor.parse(e.target.value);null!==a?t.css({color:a.isLight()?"black":"white",backgroundColor:a.toHex()}):t.css({color:"",backgroundColor:""})}}]),n}())});
//# sourceMappingURL=/js/min/pages/colorguide/blendingreverse.js.map
