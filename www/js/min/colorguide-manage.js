"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};DocReady.push(function(){function t(t,e,n){var i="Create new tag",o=t.closest(".tags"),s=o.closest("[id^=p]"),l=s.attr("id").substring(1),c=u?$content.children("h1").text():o.siblings("strong").text().trim();$.Dialog.request(i,w.clone(!0,!0),"Create",function(t){t.children(".edit-only").replaceWith($.mk("label").append($.mk("input").attr({type:"checkbox",name:"addto"}).val(l).prop("checked","string"==typeof e),' Add this tag to the appearance "'+c+'" after creation')),"string"==typeof n&&"undefined"!=typeof r[n]&&t.find("input[name=type][value="+n+"]").prop("checked",!0).trigger("change"),"string"==typeof e&&t.find("input[name=name]").val(e),t.on("submit",function(e){e.preventDefault();var n=t.mkData();$.Dialog.wait(!1,"Creating tag"),n.addto&&u&&(n.APPEARANCE_PAGE=!0),$.post(m+"/cg/tag/make"+d,n,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);if(this.tags&&(o.children("[data-hasqtip]").qtip("destroy",!0),o.html(this.tags),window.tooltips(),a()),this.needupdate===!0){var t=$(this.eps);v.replaceWith(t),v=t}$._tagAutocompleteCache={},$.Dialog.close()}))})})}function e(t,e,n){var i=$("#changes"),o=void 0,r=void 0;"undefined"!=typeof e&&(e instanceof jQuery?(r=e.attr("id").substring(2),o=e.parents("[id^=p]").attr("id").substring(1)):o=e),$.Dialog.request(t,C.clone(!0,!0),"Save",function(t){var s=t.find("input[name=label]"),l=t.find("input[name=major]"),c=t.find("input[name=reason]"),p="object"===("undefined"==typeof n?"undefined":_typeof(n))&&n.label&&n.Colors;p&&(s.val(n.label),t.data("color_values",n.Colors).trigger("render-color-inputs")),t.on("submit",function(n){n.preventDefault();try{t.trigger("save-color-inputs",[!0,!0])}catch(e){if(!(e instanceof h))throw e;var g=t.find(".clrs").data("editor");return g.gotoLine(e.lineNumber),g.navigateLineEnd(),$.Dialog.fail(!1,e.message),void g.focus()}var f={label:s.val(),Colors:t.data("color_values")};return p||(f.ponyid=o),0===f.Colors.length?$.Dialog.fail(!1,"You need to add at least one valid color"):(f.Colors=JSON.stringify(f.Colors),l.is(":checked")&&(f.major=!0,f.reason=c.val()),u&&(f.APPEARANCE_PAGE=!0),i.length||(f.FULL_CHANGES_SECTION=!0),$.Dialog.wait(!1,"Saving changes"),void $.post(m+"/cg/colorgroup/"+(p?"set":"make")+(p?"/"+r:"")+d,f,$.mkAjaxHandler(function(){var t=this;return this.status?void(this.cg||this.cgs?!function(){var n=$("#p"+o);if(t.cg?(e.children("[data-hasqtip]").qtip("destroy",!0),e.html(t.cg)):t.cgs&&n.find("ul.colors").html(t.cgs),!u&&t.notes){var r=n.find(".notes");try{r.find(".cm-direction").qtip("destroy",!0)}catch(t){}r.html(t.notes)}if(t.update){var s=n.find(".update");s.length?s.replaceWith(t.update):$(t.update).insertAfter(n.find("strong"))}t.changes&&(i.length?i.replaceWith(t.changes):$(t.changes).insertBefore($("#tags"))),window.tooltips(),a(),(t.update||t.changes)&&Time.Update();var l=$("#pony-cm");u&&l.length&&t.cm_img?!function(){$.Dialog.success(!1,"Color group updated"),$.Dialog.wait(!1,"Updating cutie mark orientation image");var e=new Image;e.src=t.cm_img,$(e).on("load error",function(){l.backgroundImageUrl(e.src),$.Dialog.close()})}():$.Dialog.close()}():$.Dialog.close()):$.Dialog.fail(!1,this.message)})))})})}function a(){S.children("span:not(.ctxmenu-bound)").ctxmenu([{text:"Edit tag",icon:"pencil",click:function(){var t=$(this),e=t.text().trim(),a=t.attr("class").match(/id-(\d+)(?:\s|$)/)[1],n="Editing tag: "+e;$.Dialog.wait(n,"Retrieveing tag details from server"),$.post(m+"/cg/tag/get/"+a+d,$.mkAjaxHandler(function(){var e=this;this.status?$.Dialog.request(n,w.clone(!0,!0).data("tag",e),"Save",function(n){n.find("input[name=type][value="+e.type+"]").prop("checked",!0),n.find("input[type=text][name], textarea[name]").each(function(){var t=$(this);t.val(e[t.attr("name")])}),n.on("submit",function(e){e.preventDefault();var i=n.mkData();u&&(i.APPEARANCE_PAGE=t.closest("div[id^=p]").attr("id").replace(/\D/g,"")),$.Dialog.wait(!1,"Saving changes"),$.post(m+"/cg/tag/set/"+a+d,i,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var t=this,e=$(".id-"+t.tid);if(e.qtip("destroy",!0),t.title?e.attr("title",t.title):e.removeAttr("title"),e.text(t.name).data("ctxmenu-items").eq(0).text("Tag: "+t.name),e.each(function(){/typ-[a-z]+/.test(this.className)?this.className=this.className.replace(/typ-[a-z]+/,t.type?"typ-"+t.type:""):t.type&&(this.className+=" typ-"+t.type),$(this)[t.synonym_of?"addClass":"removeClass"]("synonym").parent().reorderTags()}),window.tooltips(),u&&t.needupdate){var a=$(t.eps);v.replaceWith(a),v=a}$.Dialog.close()}))})}):$.Dialog.fail(n,this.message)}))}},{text:"Remove tag",icon:"minus",click:function(){var t=$(this),e=t.attr("class").match(/id-(\d+)(?:\s|$)/);if(!e)return!1;e=e[1];var a=t.closest("[id^=p]").attr("id").replace(/\D/g,""),n=t.text().trim(),i="Remove tag: "+n;$.Dialog.confirm(i,"The tag <strong>"+n+"</strong> will be removed from this appearance.<br>Are you sure?",["Remove it","Nope"],function(n){if(n){var o={tag:e};$.Dialog.wait(i,"Removing tag"),u&&(o.APPEARANCE_PAGE=!0),$.post(m+"/cg/appearance/untag/"+a+d,o,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(i,this.message);if(this.needupdate===!0){var a=$(this.eps);v.replaceWith(a),v=a}t.qtip("destroy",!0),t.remove(),$(".tag.synonym").filter("[data-syn-of="+e+"]").remove(),$.Dialog.close()}))}})}},{text:"Delete tag",icon:"trash",click:function(){var t=$(this),e=t.text().trim(),a=t.attr("class").match(/id-(\d+)(?:\s|$)/)[1],n="Detele tag: "+e;$.Dialog.confirm(n,"Deleting this tag will also remove it from every appearance where it’s been used.<br>Are you sure?",["Delete it","Nope"],function(e){if(e){var i={};u&&(i.APPEARANCE_PAGE=t.closest("[id^=p]").attr("id").substring(1)),function t(e){$.Dialog.wait(n,"Sending removal request"),$.post(m+"/cg/tag/del/"+a+d,e,$.mkAjaxHandler(function(){if(this.status){if(this.needupdate===!0){var i=$(this.eps);v.replaceWith(i),v=i}var o=$(".id-"+a);o.qtip("destroy",!0),o.remove(),$._tagAutocompleteCache={},$.Dialog.close()}else this.confirm?$.Dialog.confirm(!1,this.message,["NUKE TAG","Nevermind"],function(a){a&&(e.sanitycheck=!0,t(e))}):$.Dialog.fail(n,this.message)}))}(i)}})}},$.ctxmenu.separator,{text:"Create new tag",icon:"plus",click:function(){$.ctxmenu.triggerItem($(this).parent(),1)}}],function(t){return"Tag: "+t.text().trim()});var n=[Key.Enter,Key.Comma];S.children(".addtag").each(function(){var e=$(this),i=e.closest("[id^=p]").attr("id").substring(1);e.autocomplete({minLength:3},[{name:"tags",display:"name",source:function(t,e){if("undefined"==typeof $._tagAutocompleteCache)$._tagAutocompleteCache={};else if("undefined"!=typeof $._tagAutocompleteCache[t])return e($._tagAutocompleteCache[t]);$.get(m+"/cg/get-tags?s="+encodeURIComponent(t),$.mkAjaxHandler(function(){e($._tagAutocompleteCache[t]=this)}))},templates:{suggestion:Handlebars.compile('<span class="tag id-{{tid}} {{type}} {{#if synonym_of}}synonym{{else}}monospace{{/if}}">{{name}} <span class="uses">{{#if synonym_of}}<span class="typcn typcn-flow-children"></span>{{synonym_target}}{{else}}{{uses}}{{/if}}</span></span>')}}]),e.on("keydown",function(o){if(n.includes(o.keyCode)){var r=function(){o.preventDefault();var n=e.val().trim(),r=e.parents(".tags"),s=r.children(".tag"),l="Adding tag: "+n;if(s.filter(function(){return this.innerHTML.trim()===n}).length>0)return{v:$.Dialog.fail(l,"This appearance already has this tag")};$.Dialog.setFocusedElement(e.attr("disabled",!0)),e.parent().addClass("loading"),e.autocomplete("val",n);var c={tag_name:n};u&&(c.APPEARANCE_PAGE=!0),$.post(m+"/cg/appearance/tag/"+i+d,c,$.mkAjaxHandler(function(){var i=this;if(e.removeAttr("disabled").parent().removeClass("loading"),this.status){if(this.needupdate===!0){var o=$(this.eps);v.replaceWith(o),v=o}r.children("[data-hasqtip]").qtip("destroy",!0),r.children(".tag").remove(),r.append($(this.tags).filter("span")),window.tooltips(),a(),$._tagAutocompleteCache={},e.autocomplete("val","").focus()}else if("string"==typeof this.cancreate){var s=function(){var a=i.cancreate,o=i.typehint;return l=l.replace(n,a),{v:$.Dialog.confirm(l,i.message,function(n){n&&t(e,a,o)})}}();if("object"===("undefined"==typeof s?"undefined":_typeof(s)))return s.v}else $.Dialog.fail(l,this.message)}))}();if("object"===("undefined"==typeof r?"undefined":_typeof(r)))return r.v}}),e.nextAll(".aa-menu").on("click",".tag",function(){e.trigger({type:"keydown",keyCode:Key.Enter})})}),s=$("ul.colors").attr("data-color",o),s.filter(":not(.ctxmenu-bound)").ctxmenu([{text:"Re-order "+o+" groups",icon:"arrow-unsorted",click:function(){var t=$(this),e=t.closest("[id^=p]"),n=e.attr("id").substring(1),i=u?$content.children("h1").text():e.children().last().children("strong").text().trim(),r="Re-order "+o+" groups on appearance: "+i;$.Dialog.wait(r,"Retrieving color group list from server"),$.post(m+"/cg/appearance/getcgs/"+n+d,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(this.message);var e=$.mk("form","cg-reorder"),i=$.mk("ol");$.each(this.cgs,function(t,e){i.append($.mk("li").attr("data-id",e.groupid).text(e.label))}),e.append($.mk("div").attr("class","cgs").append('<p class="align-center">Drag to re-arrange</p>',i)),new Sortable(i.get(0),{ghostClass:"moving",scroll:!1,animation:150}),$.Dialog.request(r,e,"Save",function(e){e.on("submit",function(i){i.preventDefault();var o={cgs:[]},r=e.children(".cgs");return r.length?(r.find("ol").children().each(function(){o.cgs.push($(this).attr("data-id"))}),o.cgs=o.cgs.join(","),$.Dialog.wait(!1,"Saving changes"),u&&(o.APPEARANCE_PAGE=!0),void $.post(m+"/cg/appearance/setcgs/"+n+d,o,$.mkAjaxHandler(function(){return this.status?(t.html(this.cgs),window.tooltips(),a(),void $.Dialog.close()):$.Dialog.fail(null,this.message)}))):$.Dialog.fail(!1,"There are no color groups to re-order")})})}))}},{text:"Create new group",icon:"folder-add",click:function(){e("Create "+o+" group",$(this).closest("[id^=p]").attr("id").substring(1))}},{text:"Apply template (if empty)",icon:"document-add",click:function(){var t=$(this).closest("[id^=p]").attr("id").substring(1);$.Dialog.confirm("Apply template on appearance","Add common color groups to this appearance?<br>Note: This will only work if there are no color groups currently present.",function(e){if(e){$.Dialog.wait(!1,"Applying template");var n={};u&&(n.APPEARANCE_PAGE=!0),$.post(m+"/cg/appearance/applytemplate/"+t+d,n,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=$("#p"+t);e.find("ul.colors").html(this.cgs),window.tooltips(),a(),$.Dialog.close()}))}})}}],i+" groups"),s.children("li").filter(":not(.ctxmenu-bound)").ctxmenu([{text:"Edit "+o+" group",icon:"pencil",click:function(){var t=$(this),a=t.closest("li"),n=a.attr("id").substring(2),i=t.children().first().text().replace(/:\s?$/,""),r="Editing "+o+" group: "+i;$.Dialog.wait(r,"Retrieving "+o+" group details from server"),$.post(m+"/cg/colorgroup/get/"+n+d,$.mkAjaxHandler(function(){return this.status?void e(r,a,this):$.Dialog.fail(r,this.message)}))}},{text:"Delete "+o+" group",icon:"trash",click:function(){var t=$(this).closest("li"),e=t.attr("id").substring(2),a=t.children().first().text().replace(/:\s?$/,""),n="Delete "+o+" group: "+a;$.Dialog.confirm(n,"By deleting this "+o+" group, all "+o+"s within will be removed too.<br>Are you sure?",function(a){a&&($.Dialog.wait(n,"Sending removal request"),$.post(m+"/cg/colorgroup/del/"+e+d,$.mkAjaxHandler(function(){this.status?(t.children("[data-hasqtip]").qtip("destroy",!0),t.remove(),$.Dialog.close()):$.Dialog.fail(n,this.message)})))})}},$.ctxmenu.separator,{text:"Re-order "+o+" groups",icon:"arrow-unsorted",click:function(){$.ctxmenu.triggerItem($(this).parent(),1)}},{text:"Create new group",icon:"folder-add",click:function(){$.ctxmenu.triggerItem($(this).parent(),2)}}],function(t){return i+" group: "+t.children().first().text().trim().replace(":","")});var r=s.children("li").find(".valid-color");$.ctxmenu.addItems(r.filter(".ctxmenu-bound"),$.ctxmenu.separator,{text:"Edit "+o+" group",icon:"pencil",click:function(){$.ctxmenu.triggerItem($(this).parent().closest(".ctxmenu-bound"),1)}},{text:"Delete "+o+" group",icon:"trash",click:function(){$.ctxmenu.triggerItem($(this).parent().closest(".ctxmenu-bound"),2)}},$.ctxmenu.separator,{text:"Re-order "+o+" groups",icon:"arrow-unsorted",click:function(){$.ctxmenu.triggerItem($(this).parent().closest(".ctxmenu-bound"),3)}},{text:"Create new group",icon:"folder-add",click:function(){$.ctxmenu.triggerItem($(this).parent().closest(".ctxmenu-bound"),4)}}),$(".upload-wrap").filter(":not(.ctxmenu-bound)").each(function(){var t=$(this),e=t.closest("li");e.length||(e=$content.children("[id^=p]"));var a=e.attr("id").substring(1);!function(t,e){var a=t.find("img").attr("src"),n=void 0,i=function(){a=t.find("img").attr("src"),n=a.indexOf("blank-pixel.png")===-1,t[n?"removeClass":"addClass"]("nosprite"),$.ctxmenu.setDefault(t,n?1:4)};t.uploadZone({requestKey:"sprite",title:"Upload sprite",accept:"image/png",target:m+"/cg/appearance/setsprite/"+e}).on("uz-uploadstart",function(){$.Dialog.close()}).on("uz-uploadfinish",function(){i()}).ctxmenu([{text:"Open image in new tab",icon:"arrow-forward",click:function(){return a.indexOf("blank-pixel.png")!==-1?$.Dialog.fail("Open image in new tab","This appearance lacks a sprite image"):void window.open(t.find("img").attr("src"),"_blank")}},{text:"Copy image URL",icon:"clipboard",click:function(){return a.indexOf("blank-pixel.png")!==-1?$.Dialog.fail("Copy image URL","This appearance lacks a sprite image"):void $.copy($.toAbsoluteURL(t.find("img").attr("src")))}},{text:"Check sprite colors",icon:"adjust-contrast",click:function(){return a.indexOf("blank-pixel.png")!==-1?$.Dialog.fail("Check sprite colors","This appearance lacks a sprite image"):void $.Navigation.visit(m+"/cg/sprite/"+e)}},{text:"Upload new sprite",icon:"upload",click:function(){var a="Upload sprite image",n=t.find('input[type="file"]');$.Dialog.request(a,f.clone(),"Download image",function(t){var i=t.find("input[name=image_url]");t.find("a").on("click",function(t){t.preventDefault(),t.stopPropagation(),n.trigger("click",[!0])}),t.on("submit",function(t){t.preventDefault();var o=i.val();$.Dialog.wait(a,"Downloading external image to the server"),$.post(m+"/cg/appearance/setsprite/"+e+d,{image_url:o},$.mkAjaxHandler(function(){this.status?n.trigger("set-image",[this.path]):$.Dialog.fail(a,this.message)}))})})}},{text:"Remove sprite image",icon:"times",click:function(){return a.indexOf("blank-pixel.png")!==-1?$.Dialog.fail("Remove sprite image","This appearance lacks a sprite image"):void $.Dialog.confirm("Remove sprite image","Are you sure you want to <strong>permanently delete</strong> the sprite image from the server?",["Wipe it","Nope"],function(a){a&&($.Dialog.wait(!1,"Removing image"),$.post(m+"/cg/appearance/delsprite/"+e,$.mkAjaxHandler(function(){return this.status?(t.find("img").attr("src",this.sprite),i(),void $.Dialog.close()):$.Dialog.fail(!1,this.message)})))})}}],"Sprite image").attr("title",c?" ":"").on("click",function(e,a){return a===!0||(e.preventDefault(),void $.ctxmenu.runDefault(t))}),i()}(t,a)})}function n(){$("button.edit:not(.bound)").addClass("bound").on("click",function(){var t=$(this),e=t.closest("[id^=p]"),a=e.attr("id").substring(1),n=u?$content.children("h1").text():t.parent().text().trim(),i="Editing appearance: "+n;$.Dialog.wait(i,"Retrieving appearance details from server"),$.post(m+"/cg/appearance/get/"+a+d,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=this;e.ponyID=a,x(t,i,e)}))}).next(".delete").on("click",function(){var t=$(this),e=t.closest("[id^=p]"),a=e.attr("id").substring(1),n=u?$content.children("h1").text():t.parent().text().trim(),i="Deleting appearance: "+n;$.Dialog.confirm(i,"Deleting this appearance will remove <strong>ALL</strong> of its color groups, the colors within them, and the sprite file, if any.<br>Delete anyway?",function(t){t&&($.Dialog.wait(i,"Sending removal request"),$.post(m+"/cg/appearance/delete/"+a+d,$.mkAjaxHandler(function(){if(this.status){e.remove(),$.Dialog.success(i,this.message);var t=window.location.pathname;0===y.children().length&&(t=t.replace(/(\d+)$/,function(t){return t>1?t-1:t})),u?($.Dialog.wait("Navigation","Loading page 1"),$.Navigation.visit(m+"/cg/1",function(){$.Dialog.close()})):$.toPage(t,!0,!0)}else $.Dialog.fail(i,this.message)})))})}),S=$(".tags").ctxmenu([{text:"Create new tag",icon:"plus",click:function(){t($(this))}}],"Tags"),a()}var i=window.Color,o=window.color,r=window.TAG_TYPES_ASSOC,s=void 0,l=window.HEX_COLOR_PATTERN,c="WebkitAppearance"in document.documentElement.style,p=window.EQG,d=p?"?eqg":"",u=!!window.AppearancePage,g=window.PersonalGuide,m=g?"/@"+g:"",h=function(t,e,a){var n=[];a&&a[1]||n.push("HEX color"),a&&a[2]||n.push("color name"),this.message="Parse error on line "+e+' (shown below)\n\t\t\t\t<pre style="font-size:16px"><code>'+t.replace(/</g,"&lt;")+"</code></pre>\n\t\t\t\t"+(n.length?"The "+n.join(" and ")+" is missing from this line.":"Please check for any typos before continuing."),this.lineNumber=e},f=$.mk("form","sprite-upload").html((g?'<div class="notice info"><label>About sprites</label><p>Sprites are small, pixelated images showcasing all of the colors a given character has. They are most useful if they contain a full body image of your character with any difficult details highlighted. You can use it together with the notes, adding explanations about anything that might be confusing.</p><p>Sprites have a height limit of 300px, a width limit between 300 and 700 pixels, and are expected to be PNG files with a transparent background.</p><p class="color-red">The staff reserves the right to remove any sprites that do not follow these guidelines.</p></div>':"")+('<p class="align-center"><a href="#upload">Click here to upload a file</a> (max. '+window.MAX_SIZE+') or enter a URL below.</p>\n\t\t<label><input type="text" name="image_url" placeholder="External image URL" required></label>\n\t\t<p class="align-center">The URL will be checked against the supported provider list, and if an image is found, it\'ll be downloaded to the server and set as this appearance’s sprite image.</p>')),v=void 0;u&&(v=$("#ep-appearances")),$.fn.reorderTags=function(){return this.each(function(){$(this).children(".tag").sort(function(t,e){var a=/^.*typ-([a-z]+).*$/;return t=[t.className.replace(a,"$1"),t.innerHTML.trim()],e=[e.className.replace(a,"$1"),e.innerHTML.trim()],t[0]===e[0]?t[1].localeCompare(e[1]):t[0].localeCompare(e[0])}).appendTo(this)})};var y=$(".appearance-list"),b=$.mk("form","pony-editor").append('<label>\n\t\t\t\t\t<span>Name (4-70 chars.)</span>\n\t\t\t\t\t<input type="text" name="label" placeholder="Enter a name" pattern="'+PRINTABLE_ASCII_PATTERN.replace("+","{4,70}")+'" required maxlength="70">\n\t\t\t\t</label>\n\t\t\t\t<div class="label">\n\t\t\t\t\t<span>Additional notes (1000 chars. max, optional)</span>\n\t\t\t\t\t<div class="ace_editor"></div>\n\t\t\t\t</div>\n\t\t\t\t<label><input type=\'checkbox\' name=\'private\'> Make private (only '+(g?"you":"admins")+" can see added colors)</label>"),k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=$.mk("div").html('<p>Body orientation</p>\n\t\t\t\t<div class="radio-group">\n\t\t\t\t\t<label><input type="radio" name="facing[]" value="left" required><span>Left</span></label>\n\t\t\t\t\t<label><input type="radio" name="facing[]" value="right" required><span>Right</span></label>\n\t\t\t\t\t<label><input type="radio" name="facing[]" value="" required><span>Symmetrical</span></label>\n\t\t\t\t</div>');return e.find("input[value='"+(t.facing?t.facing:"")+"']").prop("checked",!0),$.mk("li").append(t.cmid?$.mk("input").attr({type:"hidden",value:t.cmid,name:"cmid[]"}):void 0,$.mk("label").append("<span>Deviation link</span>",$.mk("input").attr({type:"url",name:"favme[]",required:!0}).val(t.favme?"http://fav.me/"+t.favme:void 0)),e,'<div class="notice info">If the CM is symmetrical the left facing image will be shown, but with a "Symmetrical" label.</div>',$.mk("div").attr("class","label").append("<span>Preview rotation (<span class='rotation-display'></span>°)</span>",$.mk("input").attr({type:"range",name:"favme_rotation[]",min:-180,max:180,step:2,class:"rotation-range",required:!0}).val(t.favme_rotation)),$.mk("label").append("<span>Custom preview (optional)</span>",$.mk("input").attr({type:"url",name:"preview_src[]"}).val(t.preview_src)))},x=function(t,e,a){var n=!!a,i=t.parents("[id^=p]"),o=i.find(".notes"),r=void 0;if(u){if(!n)return;r=$content.children("h1")}else r=t.siblings().first();$.Dialog.request(e,b.clone(!0,!0),"Save",function(t){var i=void 0,s=void 0;$.getAceEditor(!1,"html",function(e){try{var i=t.find(".ace_editor").get(0),o=ace.edit(i);s=$.aceInit(o,e),s.setMode(e),s.setUseWrapMode(!0),n&&a.notes&&s.setValue(a.notes)}catch(t){console.error(t)}}),n?(i=a.ponyID,t.find("input[name=label]").val(a.label),a.cm_preview&&t.find("input[name=cm_preview]").val(a.cm_preview),a.cm_dir&&t.find("input[name=cm_dir]").enable().filter("[value="+a.cm_dir+"]").prop("checked",!0),a.private&&t.find("input[name=private]").prop("checked",!0),t.append($.mk("div").attr("class","align-center").append($.mk("button").attr("class","orange typcn typcn-refresh").text("Wipe cache").on("click",function(t){t.preventDefault(),$.Dialog.close(),$.Dialog.wait("Clear appearance image cache","Clearing cache"),$.post(m+"/cg/appearance/clear-cache/"+i,$.mkAjaxHandler(function(){return this.status?void $.Dialog.success(!1,this.message,!0):$.Dialog.fail(!1,this.message)}))}),g?void 0:$.mk("button").attr("class","darkblue typcn typcn-pencil").text("Relations").on("click",function(t){t.preventDefault(),$.Dialog.close(),$.Dialog.wait("Appearance relation editor","Retrieving relations from server");var e=$content.find("section.related");$.post(m+"/cg/appearance/getrelations/"+i+d,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var t=this,a=$.mk("form").attr("id","guide-relation-editor"),n=$.mk("select").attr({name:"listed",multiple:!0}),o=$.mk("select").attr("multiple",!0);t.linked&&t.linked.length&&$.each(t.linked,function(t,e){var a=$.mk("option").attr("value",e.id).text(e.label);e.mutual&&a.attr("data-mutual",!0).text("(M) "+a.text()),n.append(a)}),t.unlinked&&t.unlinked.length&&$.each(t.unlinked,function(t,e){o.append($.mk("option").attr("value",e.id).text(e.label))});var r=$.mk("div").attr("class","mutual-fieldset-wrap").html('<fieldset>\n\t\t\t\t\t\t\t\t\t\t\t\t<legend data-placeholder="Relation type"></legend>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="radio-group">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label><input type="radio" class="mutual-checkbox" name="mutual" value="1" required disabled><span>Mutual</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label><input type="radio" class="mutual-checkbox" name="mutual" value="0" required disabled><span>One way</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="notice"></div>\n\t\t\t\t\t\t\t\t\t\t\t</fieldset>'),s=r.find(".notice"),l=r.find("legend"),c=/^\(M\) /;r.find("input").on("change click",function(){var t=$(this);if(!t.hasAttr("disabled")){var e=n.children(":selected"),a=t.is(":checked")&&"1"===t.attr("value"),i=e.hasAttr("data-mutual");a?i||e.attr("data-mutual",!0).text("(M) "+e.text()):i&&e.removeAttr("data-mutual").text(e.text().replace(c,""))}}),n.on("change",function(){var t=n.children(":selected");1===t.length?(r.find("input").enable(),s.hide(),l.text("Relation to "+t.text().replace(c,"")),r.find('input[value="'+(t.hasAttr("data-mutual")?"1":"0")+'"]').prop("checked",!0)):(r.find("input").disable(),l.empty(),t.length>1?s.attr("class","notice fail").text("Multiple appearances are selected").show():s.attr("class","notice info").text("Select a relation on the left to change the type").show())}).triggerHandler("change"),a.append($.mk("div").attr("class","split-select-wrap").append($.mk("div").attr("class","split-select").append("<span>Linked</span>",n),$.mk("div").attr("class","buttons").append($.mk("button").attr({class:"typcn typcn-chevron-left green",title:"Link selected"}).on("click",function(t){t.preventDefault(),n.append(o.children(":selected").prop("selected",!1)).children().sort(function(t,e){return t.innerHTML.localeCompare(e.innerHTML)}).appendTo(n)}),$.mk("button").attr({class:"typcn typcn-chevron-right red",title:"Unlink selected"}).on("click",function(t){t.preventDefault(),o.append(n.children(":selected").prop("selected",!1)).children().sort(function(t,e){return t.innerHTML.localeCompare(e.innerHTML)}).appendTo(o),0===n.children().length&&(r.find("input").disable(),l.empty(),r.find(".notice").show())})),$.mk("div").attr("class","split-select").append("<span>Available</span>",o)),r),$.Dialog.request(!1,a,"Save",function(t){t.on("submit",function(t){t.preventDefault();var a=[],o=[];n.children().each(function(t,e){var n=$(e),i=n.attr("value");a.push(i),n.hasAttr("data-mutual")&&o.push(i)}),$.Dialog.wait(!1,"Saving changes");var r={ids:a.join(","),mutuals:o.join(",")};u&&(r.APPEARANCE_PAGE=!0),$.post(m+"/cg/appearance/setrelations/"+i+d,r,$.mkAjaxHandler(function(){return this.status?(this.section?(e.length||(e=$.mk("section").addClass("related").appendTo($content)),e.html($(this.section).filter("section").html())):e.length&&(e.remove(),e={length:0}),void $.Dialog.close()):$.Dialog.fail(!1,this.message)}))})})}))}),$.mk("button").attr("class","darkblue typcn typcn-pencil").text("Cutie Mark").on("click",function(t){t.preventDefault();var e=a.label;$.Dialog.close(),$.Dialog.wait("Manage Cutie Mark of "+e,"Retrieving CM data from server");var n=$content.find("section.approved-cutie-mark");$.post(m+"/cg/appearance/getcms/"+i+d,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var t=this,a=$.mk("img"),o=$.mk("div").attr("class","dialog-preview"),r=$.mk("ul").attr("class","cm-list"),s=!1,l="Update preview",c=$.mk("button").attr("class","darkblue typcn typcn-arrow-sync").text(l).on("click",function(t){t.preventDefault(),s!==!1&&(s.abort(),s=!1);var e=$(this),n=e.closest("form").mkData();e.disable().html("Upading preview&hellip;"),o.addClass("loading"),s=$.post(m+"/cg/appearance/getcmpreview/"+i+d,n,$.mkAjaxHandler(function(){return e.text(l).enable(),o.removeClass("loading"),s=!1,this.status?($.Dialog.clearNotice(/preview/),o.html(this.html),a=o.find(".img"),void r.find(".rotation-range").trigger("change")):$.Dialog.fail(!1,this.message)}))}),p=$.mk("button").attr("class","red typcn typcn-trash").text("Delete Cutie Marks").on("click",function(t){t.preventDefault(),s!==!1&&(s.abort(),s=!1),$.Dialog.close(function(){$.Dialog.confirm("Delete Cutie Marks of "+e,"Are you sure you want to remove the cutie mark(s) associated with this appearance?",function(t){t&&($.Dialog.wait(!1,"Sending removal request"),$.post(m+"/cg/appearance/delcms/"+i+d,$.mkAjaxHandler(function(){return this.status?(n.length&&n.addClass("hidden").children(":not(h2,p)").remove(),void $.Dialog.close()):$.Dialog.fail(!1,this.message)})))})})}),g=$.mk("form").attr("id","cm-data-editor").append(o,r,c).on("change mousemove keydown",".rotation-range",function(){var t=$(this),e=t.val();t.prev().children(".rotation-display").text(e),a.css("transform","rotateZ("+e+"deg)")}).on("change click keydown",'input[name="facing[]"]',function(){var t=$(this),e=t.parents("form").find(".rotation-range"),a=t.parents(".radio-group"),n=a.find("input:checked"),i="right"===n.val(),o=e.val();(o<0&&i||o>0&&!i)&&(e.val(o*-1).trigger("change"),c.triggerHandler("click"))});t.cms.length?($.each(t.cms,function(t,e){r.append(k(e))}),g.append(p)):r.append(k()),r.find(".rotation-range").trigger("change"),$.Dialog.request(!1,g,"Save",function(t){t[0].checkValidity&&!t[0].checkValidity()||c.triggerHandler("click"),t.on("submit",function(e){e.preventDefault(),s!==!1&&(s.abort(),s=!1);var a=t.mkData();u&&(a.APPEARANCE_PAGE=!0),$.Dialog.wait(!1,"Saving cutie mark data"),$.post(m+"/cg/appearance/setcms/"+i+d,a,$.mkAjaxHandler(function(){return this.status?($.Dialog.close(),void(n.length&&(n.children(":not(h2,p)").remove(),n.removeClass("hidden").append(this.html)))):$.Dialog.fail(!1,this.message)}))})})}))})))):t.append("<label><input type='checkbox' name='template'> Pre-fill with common color groups</label>"),t.on("submit",function(a){a.preventDefault();var l=t.mkData();l.notes=s.getValue(),$.Dialog.wait(!1,"Saving changes"),u&&(l.APPEARANCE_PAGE=!0),g&&(l.PERSONAL_GUIDE=!0),$.post(m+"/cg/appearance/"+(n?"set/"+i:"make")+d,l,$.mkAjaxHandler(function(){return this.status?(l=this,void(n?u?($.Dialog.wait(!1,"Reloading page",!0),$.Navigation.reload(function(){$.Dialog.close()})):(r.text(l.label),l.newurl&&r.attr("href",function(t,e){return e.replace(/\/[^\/]+$/,"/"+l.newurl)}),o.html(this.notes),window.tooltips(),$.Dialog.close()):($.Dialog.success(e,"Appearance added"),$.Dialog.wait(e,"Loading appearance page"),$.Navigation.visit(l.goto,function(){l.info?$.Dialog.info(e,l.info):$.Dialog.close()})))):$.Dialog.fail(!1,this.message)}))})})};$("#new-appearance-btn").on("click",function(){var t=$(this),e=t.text().trim();return g?($.Dialog.wait(e,"Checking whether you have any more slots"),void $.post(m+"/cg/slot-check",$.mkAjaxHandler(function(){return this.status?void x(t,e):$.Dialog.fail(!1,this.message)}))):x(t,e)});var w=$.mk("form","edit-tag");w.append('<label><span>Tag name (3-30 chars.)</span><input type="text" name="name" required pattern="^[^-][ -~]{2,29}$" maxlength="30"></label>');var D='<div class=\'type-selector\'>\n\t\t\t<label>\n\t\t\t\t<input type="radio" name="type" value="" checked>\n\t\t\t\t<span class="tag">Typeless</span>\n\t\t\t</label>';$.each(r,function(t,e){D+='<label>\n\t\t\t\t<input type="radio" name="type" value="'+t+'">\n\t\t\t\t<span class="tag typ-'+t+'">'+e+"</span>\n\t\t\t</label>"}),D+="</div>",w.append('<div class="align-center">\n\t\t\t<span>Tag type</span><br>\n\t\t\t'+D+'\n\t\t</div>\n\t\t<label>\n\t\t\t<span>Tag description (max 255 chars., optional)</span>\n\t\t\t<textarea name="title" maxlength="255"></textarea>\n\t\t</label>',$.mk("div").attr("class","align-center edit-only").append($.mk("button").attr("class","blue typcn typcn-flow-merge merge").html("Merge&hellip;"),$.mk("button").attr("class","blue typcn typcn-flow-children synon").html("Synonymize&hellip;")).on("click","button",function(t){t.preventDefault();var e=$(this).closest("form"),n=e.data("tag"),i=n.name,o=n.tid,r=this.className.split(" ").pop();$.Dialog.close(function(){window.CGTagEditing(i,o,r,function(t){var e=$(".tag.id-"+o),n=void 0;if(e.length)switch(t){case"synon":n=this.target,e.addClass("synonym");var i=e.eq(0).clone().removeClass("ctxmenu-bound"),r=new A(n),s=e.add($(".tag.id-"+n.tid)).closest(".tags");s.filter(function(){return 0===$(this).children(".id-"+o).length}).append(i).reorderTags(),s.filter(function(){return 0===$(this).children(".id-"+n.tid).length}).append(r).reorderTags(),window.tooltips(),a();break;case"unsynon":this.keep_tagged?e.removeClass("synonym"):e.remove();break;case"merge":n=this.target,e.each(function(){var t=$(this);0===t.siblings(".id-"+n.tid).length?t.replaceWith(new A(n)):t.remove();
}),window.tooltips(),a()}$.Dialog.close()})})}));var A=function(t){function e(t){var a,n;return _classCallCheck(this,e),n=(a=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,'<span class="tag id-'+t.tid+(t.type?" typ-"+t.type:"")+(t.synonym_of?" synonym":"")+'" data-syn-of="'+t.synonym_of+'">'))).attr("title",t.title).text(t.name),_possibleConstructorReturn(a,n)}return _inherits(e,t),e}(jQuery),C=$.mk("form","cg-editor"),_=$.mk("input").attr({class:"clri",autocomplete:"off",spellcheck:"false"}).patternAttr(l).on("keyup change input",function(t,e){var a=$(this),n=a.prev(),i=("string"==typeof e?e:this.value).trim(),o=l.test(i);o?n.removeClass("invalid").css("background-color",i.replace(l,"#$1")):n.addClass("invalid"),a.next().attr("required",o)}).on("paste blur keyup",function(t){var e=this,a=function(){var a=$.hexpand(e.value);l.test(a)&&!function(){a=a.replace(l,"#$1").toUpperCase();var n=$(e),i=$.hex2rgb(a);switch($.each(i,function(t,e){e<=3?i[t]=0:e>=252&&(i[t]=255)}),a=$.rgb2hex(i),t.type){case"paste":n.next().focus();case"blur":n.val(a)}n.trigger("change",[a]).patternAttr(SHORT_HEX_COLOR_PATTERN.test(e.value)?SHORT_HEX_COLOR_PATTERN:l)}()};"paste"===t.type?setTimeout(a,10):a()}),E=$.mk("input").attr({class:"clrl",pattern:PRINTABLE_ASCII_PATTERN.replace("+","{3,30}")}),T=$.mk("div").attr("class","clra").append($.mk("span").attr("class","typcn typcn-minus remove red").on("click",function(){$(this).closest(".clr").remove()})).append($.mk("span").attr("class","typcn typcn-arrow-move move blue")),R=function(t){var e=_.clone(!0,!0),a=E.clone(),n=T.clone(!0,!0),i=$.mk("div").attr("class","clr");return"object"===("undefined"==typeof t?"undefined":_typeof(t))&&(t.hex&&e.val(t.hex.toUpperCase()),t.label&&a.val(t.label)),i.append("<span class='clrp'></span>",e,a,n),e.trigger("change"),i},P=$.mk("button").attr("class","typcn typcn-plus green add-color").text("Add new color").on("click",function(t){t.preventDefault();var e=$(this).parents("#cg-editor"),a=e.children(".clrs");if(a.length||e.append(a=$.mk("div").attr("class","clrs")),a.hasClass("ace_editor")){var n=a.data("editor");n.clearSelection(),n.navigateLineEnd();var i=n.getCursorPosition(),o=i.row+1,r=0===i.column,s=window.copyHashEnabled();r||o++,n.insert((r?"":"\n")+(s?"#":"")+"\tColor Name"),n.gotoLine(o,Number(s)),n.focus()}else{var l=R();a.append(l),l.find(".clri").focus()}}),N=function(t,e){for(var a=[],n=t.split("\n"),i=0,o=n.length;i<o;i++){var r=n[i];if(!/^(\/\/.*)?$/.test(r)){var s=r.trim().match(/^#?([a-f\d]{6}|[a-f\d]{3})?(?:\s*([a-z\d][ -~]{2,29}))?$/i);if(!s||!s[2]||e&&!s[1])throw new h(r,i+1,s);a.push({hex:s[1]?$.hexpand(s[1]):void 0,label:s[2]})}}return a},j=$.mk("button").attr("class","typcn typcn-document-text darkblue").text("Plain text editor").on("click",function(t){t.preventDefault();var e=$(this),a=e.parents("#cg-editor");e.disable();try{a.trigger("save-color-inputs")}catch(t){if(!(t instanceof h))throw t;var n=a.find(".clrs").data("editor");return n.gotoLine(t.lineNumber),n.navigateLineEnd(),$.Dialog.fail(!1,t.message),n.focus(),void e.enable()}e.toggleClass("typcn-document-text typcn-pencil").toggleHtml(["Plain text editor","Interactive editor"]).enable(),$.Dialog.clearNotice(/Parse error on line \d+ \(shown below\)/)});C.append('<label>\n\t\t\t<span>Group name (2-30 chars.)</span>\n\t\t\t<input type="text" name="label" pattern="'+PRINTABLE_ASCII_PATTERN.replace("+","{2,30}")+'" required>\n\t\t</label>',$.mk("label").append($.mk("input").attr({type:"checkbox",name:"major"}).on("click change",function(){$(this).parent().next()[this.checked?"show":"hide"]().children("input").attr("disabled",!this.checked)}),"<span>This is a major change</span>"),"<label style=\"display:none\">\n\t\t\t<span>Change reason (1-255 chars.)</span>\n\t\t\t<input type='text' name='reason' pattern=\""+PRINTABLE_ASCII_PATTERN.replace("+","{1,255}")+'" required disabled>\n\t\t</label>\n\t\t<p class="align-center">The # symbol is optional, rows with invalid '+o+"s will be ignored. Each color must have a short (3-30 chars.) description of its intended use.</p>",$.mk("div").attr("class","btn-group").append(P,j),"<div class='clrs'/>").on("render-color-inputs",function(){var t=$(this),e=t.data("color_values"),a=t.children(".clrs").empty();$.each(e,function(t,e){a.append(R(e))}),a.data("sortable",new Sortable(a.get(0),{handle:".move",ghostClass:"moving",scroll:!1,animation:150}))}).on("save-color-inputs",function(t,e,a){var n=$(this),i=n.children(".clrs"),o=i.hasClass("ace_editor"),r=void 0;if(o){if(r=i.data("editor"),n.data("color_values",N(r.getValue(),e||a)),e)return;r.destroy(),i.empty().removeClass("ace_editor ace-colorguide").removeData("editor").unbind(),n.trigger("render-color-inputs")}else{var s=function(){var t=[];if(n.find(".clr").each(function(){var e=$(this),n=e.children(".clri"),i=n.val(),o=l.test(i);(o||!i.length&&!a)&&t.push({hex:o?$.hexpand(i).toUpperCase().replace(l,"#$1"):void 0,label:e.children(".clrl").val()})}),n.data("color_values",t),e)return{v:void 0};var o=["// One color per line","// e.g. #012ABC Fill"];$.each(t,function(t,e){var a=[];"object"===("undefined"==typeof e?"undefined":_typeof(e))&&(a.push(e.hex?e.hex:"#"),e.label&&a.push(e.label)),o.push(a.join("\t"))});var s=i.data("sortable");"undefined"!=typeof s&&s.destroy(),i.unbind().hide().text(o.join("\n")+"\n"),$.getAceEditor(!1,"colorguide",function(t){i.show(),r=ace.edit(i[0]);var e=$.aceInit(r,t);e.setTabSize(8),e.setMode(t),r.navigateFileEnd(),r.focus(),i.data("editor",r)})}();if("object"===("undefined"==typeof s?"undefined":_typeof(s)))return s.v}});var S=void 0;window.ctxmenus=function(){a()},y.on("page-switch",n),n(),$(".cg-export").on("click",function(){$.mk("form").attr({method:"POST",action:"/cg/export",target:"_blank"}).html($.mk("input").attr("name","CSRF_TOKEN").val($.getCSRFToken())).submit()}),$(".cg-reindex").on("click",function(){$.Dialog.confirm("Re-index all appearances","Wipe and rebuild ElasticSearch index?",function(t){t&&($.Dialog.wait(!1),$.post("/cg/reindex",$.mkAjaxHandler(function(){return this.status?void $.Dialog.success(!1,this.message,!0):$.Dialog.fail(!1,this.message)})))})})});
//# sourceMappingURL=/js/min/colorguide-manage.js.map
