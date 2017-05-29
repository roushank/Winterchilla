"use strict";window.$TemplateGenFormTemplate=function(e){return e.mk("form","template-gen-form").html('<div class="label">\n\t\t\t<span>Species</span>\n\t\t\t<div class="radio-group">\n\t\t\t\t<label><input type="radio" name="features" value="" required checked><span>Earth pony</span></label>\n\t\t\t\t<label><input type="radio" name="features" value="horn" required><span>Unicorn</span></label>\n\t\t\t\t<label><input type="radio" name="features" value="wing" required><span>Pegasus</span></label>\n\t\t\t\t<label><input type="radio" name="features" value="horn,wing" required><span>Alicorn</span></label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="label">\n\t\t\t<span>Body type</span>\n\t\t\t<div class="radio-group">\n\t\t\t\t<label><input type="radio" name="body" value="female" required checked><span>Female</span></label>\n\t\t\t\t<label><input type="radio" name="body" value="male" required><span>Male</span></label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="label">\n\t\t\t<span>Eye shape</span>\n\t\t\t<div class="radio-group">\n\t\t\t\t<label><input type="radio" name="eyes" value="1" required checked><span>#1</span></label>\n\t\t\t\t<label class="male-hide"><input type="radio" name="eyes" value="2" required><span>#2</span></label>\n\t\t\t\t<label><input type="radio" name="eyes" value="3" required><span>#3</span></label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="label">\n\t\t\t<span>Eye gradient</span>\n\t\t\t<div class="radio-group">\n\t\t\t\t<label><input type="radio" name="eye_grad" value="2" required checked><span>2 colors</span></label>\n\t\t\t\t<label><input type="radio" name="eye_grad" value="3" required><span>3 colors</span></label>\n\t\t\t</div>\n\t\t</div>').on("submit",function(e){e.preventDefault()}).on("added",function(){var a={},t=!1,n=e(this),l=mk("canvas"),r=e.mk("a").attr({class:"btn typcn typcn-download",download:"sprite.png",disabled:!0}).text("Download"),s=e.mk("input").attr({type:"checkbox",name:"accept_terms"}).on("change mouseup",function(){r.attr("disabled",!this.checked)}),i=e.mk("input").attr({type:"checkbox",name:"apply_colors",checked:!0}),d=["cm_square","eyes_male12","eyes_male3","eyes_male12_grad2","eyes_male12_grad3","eyes_male3_grad2","eyes_male3_grad3","eyes_female1","eyes_female2","eyes_female3","eyes_female12_grad2","eyes_female12_grad3","eyes_female3_grad2","eyes_female3_grad3","horn_female","horn_male","wing_female","wing_male","body_female","body_male","eye_grad2","eye_grad3"],o={},p=function(e,a){if(void 0===o[a])throw new Error("Missing template image: "+a);e.drawImage(o[a],0,0,300,300,0,0,300,300)},c=function(){if(t){var s=n.mkData(),i=l.getContext("2d"),d="male"===s.body;delete s.accept_terms,i.clearRect(0,0,i.canvas.width,i.canvas.height),p(i,"cm_square"),p(i,"body_"+s.body);var o=n.find(".male-hide > input");d&&o.is(":checked")&&o.parent().prev().children("input").prop("checked",!0),o.attr("disabled",d),s.features&&e.each(s.features.split(","),function(e,a){p(i,a+"_"+s.body)}),delete s.features,p(i,"eyes_"+s.body+(d&&s.eyes<3?"12":s.eyes)),p(i,"eyes_"+s.body+(s.eyes<3?"12":"3")+"_grad"+s.eye_grad),delete s.eyes;var c=Boolean(s.apply_colors);if(delete s.apply_colors,delete s.body,e.each(s,function(e,a){p(i,e+a)}),c){for(var u=i.getImageData(0,0,i.canvas.width,i.canvas.height),m=0;m<u.data.length;m+=4)if(0!==u.data[m+3]){var g=a[u.data.slice(m,m+3).join(",")];g&&(u.data[m]=g.r,u.data[m+1]=g.g,u.data[m+2]=g.b)}i.putImageData(u,0,0),r.attr("href",i.canvas.toDataURL("image/png"))}}};l.width=300,l.height=300,e(l).on("mousedown dragstart contextmenu keydown",function(){return!1}).on("focus",function(){this.blur()}),n.append(e.mk("label").append(i," <span>Replace placeholder colors with the colors from the appearance</span>"),e.mk("div").html(l),e.mk("label").append(s,' <span>I accept that generated images are licensed under <a href=\'https://creativecommons.org/licenses/by-nc-sa/4.0/\' target="_blank" rel="noopener">CC-BY-NC-SA 4.0</a></span>')).on("got-colors",function(t,l){a={},e.each(l,function(t,n){var l=e.hex2rgb(t);a[l.r+","+l.g+","+l.b]=e.hex2rgb(n)}),void 0!==l["#606060"]&&n.find('input[name="eye_grad"][value="3"]').prop("checked",!0),void 0!==l["#B7B7B7"]&&n.find('input[name="features"][value="horn"]').prop("checked",!0)}).on("change click mousedown","input",e.throttle(100,c)),e("#dialogButtons").prepend(r),e.Dialog.wait(!1,"Preloading images");var u=0;e.each(d,function(a,n){var l=new Image;l.src="/img/sprite_template/"+n+".png?v=1.1",e(l).on("load",function(){u++,o[n]=l,u===d.length&&(e.Dialog.clearNotice(/Preloading/),t=!0,c())}).on("error",function(){console.log("Loaded %d out of %d before erroring",u,o.length),e.Dialog.fail(!1,'Some images failed to load, please try <a class="sprite-template-gen">re-opening this form</a>, and if this issue persists, please <a class="send-feedback">let us know</a>.')})})})}(jQuery);
//# sourceMappingURL=/js/min/global-template_gen_form.js.map
