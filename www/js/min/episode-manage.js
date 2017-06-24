"use strict";DocReady.push(function(){function e(e,t,i,n){var s="Reserving request",r=function t(a){$.Dialog.wait(s,"Sending reservation to the server"),$.post("/post/reserve/request/"+i,a,$.mkAjaxHandler(function(){if(this.retry)return $.Dialog.confirm(!1,this.message,function(e){e&&(a.screwit=!0,t(a))});if(!this.status)return $.Dialog.fail(!1,this.message);if(this.li){var s=$(this.li);e.hasClass("highlight")&&s.addClass("highlight"),e.replaceWith(s),Time.Update(),s.trigger("bind-more-handlers",[i,n])}$.Dialog.close()}))};if(void 0!==a&&t){var o=$.mk("form").attr("id","reserve-as").append($.mk("label").append("<span>Reserve as</span>",$.mk("input").attr({type:"text",name:"post_as",required:!0,placeholder:"Username"}).patternAttr(a)),$.mk("label").append($.mk("span").text("Reserved at"),$.mk("input").attr({type:"datetime",name:"reserved_at",spellcheck:!1,autocomplete:"off",placeholder:"time()"})));$.Dialog.request(s,o,"Reserve",function(e){e.on("submit",function(t){t.preventDefault(),r(e.mkData())})})}else r({})}var t=window.SEASON,i=window.EPISODE,a=window.USERNAME_REGEX,n=window.FULLSIZE_MATCH_REGEX,s="S"+t+"E"+i,r=(0===t?"Movie":"Episode").toLowerCase(),o=$content.children("section.episode");$("#video").on("click",function(){$.Dialog.wait("Set video links","Requesting links from the server"),$.post("/episode/video-data/"+s+"?action=get",$.mkAjaxHandler(function(){var e=this;if(!e.status)return $.Dialog.fail(!1,e.message);var t="<input type='url' class='yt' name='yt_1' placeholder='YouTube' spellcheck='false' autocomplete='off'>",i="<input type='url' class='dm' name='dm_1' placeholder='Dailymotion' spellcheck='false' autocomplete='off'>",a=$.mk("form").attr("id","vidlinks").attr("class","align-center").html("<p>Enter vido links below, leave any input blank to remove that video from the "+r+" page.</p>\n\t\t\t\t\t<div class='input-group-2'>\n\t\t\t\t\t\t"+t+"\n\t\t\t\t\t\t"+i+"\n\t\t\t\t\t</div>");if(e.twoparter&&($.mk("p").html("<strong>~ Part 1 ~</strong>").insertBefore(a.children("input").first()),a.append("<p>Check below if either link contains the full "+r+" instead of just one part</p>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label><input type='checkbox' name='yt_1_full'> YouTube</label> &nbsp; <label><input type='checkbox' name='dm_1_full'> Dailymotion</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p><strong>~ Part 2 ~</strong></p>\n\t\t\t\t\t<div class='input-group-2'>\n\t\t\t\t\t\t"+t.replace("yt_1","yt_2")+"\n\t\t\t\t\t\t"+i.replace("dm_1","dm_2")+"\n\t\t\t\t\t</div>"),a.find('input[type="checkbox"]').on("change",function(){var e=$(this).attr("name").replace(/^([a-z]+)_.*$/,"$1");a.find("input").filter("[name="+e+"_2]").attr("disabled",this.checked)}),e.fullep.length>0&&$.each(e.fullep,function(e,t){a.find('input[type="checkbox"]').filter('[name="'+t+'_1_full"]').prop("checked",!0).trigger("change")})),Object.keys(e.vidlinks).length>0){var n=a.find('input[type="url"]');$.each(e.vidlinks,function(e,t){n.filter("[name="+e+"]").val(t)})}$.Dialog.request(!1,a,"Save",function(e){e.on("submit",function(t){t.preventDefault();var i=e.mkData();$.Dialog.wait(!1,"Saving links"),$.post("/episode/video-data/"+s+"?action=set",i,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);this.epsection?(o.length||(o=$.mk("section").addClass("episode").insertBefore($content.children("section").first())),o.html($(this.epsection).filter("section").html()),bindVideoButtons()):o.length&&(o.remove(),o={length:0}),$.Dialog.close()}))})})}))});var l=$content.children("section.appearances");$("#cg-relations").on("click",function(){$.Dialog.wait("Guide relation editor","Retrieving relations from server"),$.post("/episode/guide-relations/"+s+"?action=get",$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=this,t=$.mk("form").attr("id","guide-relation-editor"),i=$.mk("select").attr({name:"listed",multiple:!0}),a=$.mk("select").attr("multiple",!0);e.linked&&e.linked.length&&$.each(e.linked,function(e,t){i.append($.mk("option").attr("value",t.id).text(t.label))}),e.unlinked&&e.unlinked.length&&$.each(e.unlinked,function(e,t){a.append($.mk("option").attr("value",t.id).text(t.label))}),t.append($.mk("div").attr("class","split-select-wrap").append($.mk("div").attr("class","split-select").append("<span>Linked</span>",i),$.mk("div").attr("class","buttons").append($.mk("button").attr({class:"typcn typcn-chevron-left green",title:"Link selected"}).on("click",function(e){e.preventDefault(),i.append(a.children(":selected").prop("selected",!1)).children().sort(function(e,t){return e.innerHTML.localeCompare(t.innerHTML)}).appendTo(i)}),$.mk("button").attr({class:"typcn typcn-chevron-right red",title:"Unlink selected"}).on("click",function(e){e.preventDefault(),a.append(i.children(":selected").prop("selected",!1)).children().sort(function(e,t){return e.innerHTML.localeCompare(t.innerHTML)}).appendTo(a)})),$.mk("div").attr("class","split-select").append("<span>Available</span>",a))),$.Dialog.request(!1,t,"Save",function(e){e.on("submit",function(e){e.preventDefault();var t=[];i.children().each(function(e,i){t.push(i.value)}),$.Dialog.wait(!1,"Saving changes"),$.post("/episode/guide-relations/"+s+"?action=set",{ids:t.join(",")},$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);this.section?(l.length||(l=$.mk("section").addClass("appearances").insertBefore($content.children(".admin"))),l.html($(this.section).filter("section").html())):l.length&&(l.remove(),l={length:0}),$.Dialog.close()}))})})}))}),$("#edit-about_reservations, #edit-reservation_rules").on("click",function(e){e.preventDefault();var t=$(this).parent(),i=t.clone(),a=this.id.split("-").pop();i.children().remove();var n=i.text().trim();$.Dialog.wait('Editing "'+n+'"',"Retrieving setting’s value"),$.post("/setting/get/"+a,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=$.mk("form",a+"-editor").html("<span>"+n+"</span>"),i=this.value;$.Dialog.request(!1,e,"Save",function(e){var n=void 0;$.getAceEditor(!1,"html",function(t){var a=ace.edit($.mk("div").appendTo(e).get(0));a.setShowPrintMargin(!1),(n=$.aceInit(a,t)).setMode(t),n.setUseWrapMode(!0),n.setValue(i)}),e.on("submit",function(e){e.preventDefault();var i={value:n.getValue()};$.Dialog.wait(!1,"Saving"),$.post("/setting/set/"+a,i,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);t.siblings().remove(),t.parent().append(this.value),$.Dialog.close()}))})})}))});var c=function(){var t=$(this),i=$._getLiTypeId(t),s=i.id,r=i.type.replace(/s$/,""),o=$.capitalize(r);t.children("button.reserve-request").off("click").on("click",function(i){i.preventDefault(),e(t,i.shiftKey,s,r)});var l=t.find(".actions").children();l.filter(".cancel").off("click").on("click",function(){$.Dialog.confirm("Cancel reservation","Are you sure you want to cancel this reservation?",function(e){e&&($.Dialog.wait(!1,"Cancelling reservation"),t.addClass("deleting"),$.post("/post/unreserve/"+r+"/"+s,$.mkAjaxHandler(function(){return this.status?!0===this.remove?($.Dialog.close(),t[window.WithinMobileBreakpoint()?"slideUp":"fadeOut"](500,function(){t.remove()})):(this.reload&&t.reloadLi(!1),$.Dialog.close(),void t.removeClass("deleting")):$.Dialog.fail(!1,this.message)})))})}),l.filter(".finish").off("click").on("click",function(){var e=$.mk("form").attr("id","finish-res").append($.mk("label").append($.mk("span").text("Deviation URL"),$.mk("input").attr({type:"text",name:"deviation",spellcheck:!1,autocomplete:"off",required:!0})));void 0!==a&&e.append($.mk("label").append($.mk("span").text("Finished at"),$.mk("input").attr({type:"datetime",name:"finished_at",spellcheck:!1,autocomplete:"off",placeholder:"time()"}))),$.Dialog.request("Complete reservation",e,"Finish",function(e){e.on("submit",function(t){t.preventDefault();var i=e.find("[name=deviation]").val();if("string"!=typeof i||0===i.length)return $.Dialog.fail(!1,"Please enter a deviation URL");var a="/post/finish/"+r+"/"+s,n=e.mkData();$.Dialog.wait(!1,"Marking "+r+" as finished"),$.post(a,n,$.mkAjaxHandler(function(){var e=this,t=function(){$.Dialog.success(!1,o+" has been marked as finished"),$("#"+r+"s").trigger("pls-update",[function(){"string"==typeof e.message&&e.message?$.Dialog.success(!1,e.message,!0):$.Dialog.close()}])};e.status?t():e.retry?$.Dialog.confirm(!1,e.message,["Continue","Cancel"],function(i){i&&(n.allow_overwrite_reserver=!0,$.Dialog.wait(!1),$.post(a,n,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);e=this,t()})))}):$.Dialog.fail(!1,e.message)}))})})}),l.filter(".unfinish").off("click").on("click",function(){var e=$(this).hasClass("delete-only"),t=$.capitalize(r),i=r.replace(/s$/,"");$.Dialog.request((e?"Delete":"Unfinish")+" "+i,'<form id="unbind-check"><p>Are you sure you want to '+(e?"delete this reservation":"mark this "+i+" as unfinished")+'?</p><hr><label><input type="checkbox" name="unbind"> Unbind '+i+" from user</label></form>","Unfinish",function(i){var a=i.find("[name=unbind]");e||i.prepend('<div class="notice info">By removing the "finished" flag, the post will be moved back to the "List of '+t+'" section</div>'),"reservation"===r?(a.on("click",function(){$("#dialogButtons").children().first().val(this.checked?"Delete":"Unfinish")}),e&&a.trigger("click").off("click").on("click keydown touchstart",function(){return!1}).css("pointer-events","none").parent().hide(),i.append('<div class="notice warn">Because this '+(e?"reservation was added directly, it cannot be marked unfinished, only deleted.":"is a reservation, unbinding it from the user will <strong>delete</strong> it permanently.")+"</div>")):i.append('<div class="notice info">If this is checked, any user will be able to reserve this request again afterwards. If left unchecked, only the current reserver <em>(and Vector Inspectors)</em> will be able to mark it as finished until the reservation is cancelled.</div>'),$w.trigger("resize"),i.on("submit",function(e){e.preventDefault();var t=a.prop("checked");$.Dialog.wait(!1,'Removing "finished" flag'+(t?" & unbinding from user":"")),$.post("/post/unfinish/"+r+"/"+s+(t?"?unbind":""),$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);$.Dialog.success(!1,void 0!==this.message?this.message:'"finished" flag removed successfully'),$("#"+r+"s").trigger("pls-update")}))})})}),l.filter(".check").off("click").on("click",function(e){e.preventDefault(),$.Dialog.wait("Submission approval status","Checking"),$.post("/post/lock/"+r+"/"+s,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=this.message;t.reloadLi(),$.Dialog.success(!1,e,!0)}))}),l.filter(".unlock").off("click").on("click",function(e){e.preventDefault(),$.Dialog.confirm("Unlocking post","Are you sure you want to unlock this post?",function(e){e&&($.Dialog.wait(!1),$.post("/post/unlock/"+r+"/"+s,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);$("#"+r+"s").trigger("pls-update")})))})}),l.filter(".delete").off("click").on("click",function(){var e=$(this);$.Dialog.confirm("Deleteing request #"+s,"You are about to permanently delete this request.<br>Are you sure about this?",function(i){i&&($.Dialog.wait(!1),t.addClass("deleting"),$.post("/post/delete-request/"+s,$.mkAjaxHandler(function(){if(!this.status)return t.removeClass("deleting"),$.Dialog.fail(!1,this.message);$.Dialog.close(),e.closest("li")[window.WithinMobileBreakpoint()?"slideUp":"fadeOut"](500,function(){$(this).remove()})})))})}),l.filter(".edit").off("click").on("click",function(){var e=$(this).parents("li"),t=e.attr("id").split("-"),i=t[1],a=t[0];$.Dialog.wait("Editing "+a+" #"+i,"Retrieving "+a+" details"),$.post("/post/get/"+a+"/"+i,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var t=this,s=$.mk("form").attr("id","post-edit-form").append($.mk("label").append($.mk("span").text("Description (3-255 chars."+("reservation"===a?", optional":"")+")"),$.mk("input").attr({type:"text",maxlength:255,pattern:"^.{3,255}$",name:"label",required:"reservation"!==a})));"request"===a&&s.append($.mk("label").append($.mk("span").text("Request type"),$.mk("select").attr({name:"type",required:!0}).append($.mk("option").attr("value","chr").text("Character"),$.mk("option").attr("value","obj").text("Object"),$.mk("option").attr("value","bg").text("Backgound")))),"string"==typeof t.posted&&s.append($.mk("label").append($.mk("span").text("Post timestamp"),$.mk("input").attr({type:"datetime",name:"date",required:!0,spellcheck:!1,autocomplete:"off"}))),"string"==typeof t.reserved_at&&s.append($.mk("label").append($.mk("span").text("Reserved at"),$.mk("input").attr({type:"datetime",name:"reserved_at",spellcheck:!1,autocomplete:"off"}))),"string"==typeof t.finished_at&&s.append($.mk("label").append($.mk("span").text("Finished at"),$.mk("input").attr({type:"datetime",name:"finished_at",spellcheck:!1,autocomplete:"off"})));var r=e.children(".image").hasClass("screencap"),o="finished"===e.closest("div").attr("class"),l=o?e.children(".original"):e.children(".image").children("a"),c=l.attr("href"),d=!o&&!n.test(c)&&/deviantart\.net\//.test(c);(r||d)&&s.append($.mk("label").append(r?$.mk("a").text("Update Image").attr({href:"#update",class:"btn darkblue typcn typcn-pencil"}).on("click",function(t){t.preventDefault(),$.Dialog.close();var n=e.children(".image").find("img"),s=$.mk("form").attr("id","img-update-form").append($.mk("div").attr("class","oldimg").append($.mk("span").text("Current image"),n.clone()),$.mk("label").append($.mk("span").text("New image URL"),$.mk("input").attr({type:"text",maxlength:255,pattern:"^.{2,255}$",name:"image_url",required:!0,autocomplete:"off",spellcheck:"false"})));$.Dialog.request("Update image of "+a+" #"+i,s,"Update",function(t){t.on("submit",function(n){n.preventDefault();var s=t.mkData();$.Dialog.wait(!1,"Replacing image"),$.post("/post/set-image/"+a+"/"+i,s,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);$.Dialog.success(!1,"Image has been updated",!0),e.reloadLi()}))})})}):void 0,d?$.mk("a").text("Sta.sh fullsize fix").attr({href:"#fix-stash-fullsize",class:"btn orange typcn typcn-spanner"}).on("click",function(t){t.preventDefault(),$.Dialog.close(),$.Dialog.wait("Fix Sta.sh fullsize URL","Fixing Sta.sh full size image URL"),$.post("/post/fix-stash/"+a+"/"+i,$.mkAjaxHandler(function(){if(!this.status){if(this.rmdirect){if(!o)return e.find(".post-date").children("a").first().triggerHandler("click"),$.Dialog.fail(!1,this.message+"<br>The post might be broken because of this, please check it for any issues.");e.children(".original").remove()}return $.Dialog.fail(!1,this.message)}l.attr("href",this.fullsize),$.Dialog.success(!1,"Fix successful",!0)}))}):void 0)),$.Dialog.request(!1,s,"Save",function(n){var s=n.find("[name=label]"),r=n.find("[name=type]"),o=void 0,l=void 0,c=void 0;if(t.label&&s.val(t.label),t.type&&r.children("option").filter(function(){return this.value===t.type}).attr("selected",!0),"string"==typeof t.posted){o=n.find("[name=date]");var d=moment(t.posted);o.val(d.format("YYYY-MM-DDTHH:mm:ssZ"))}if("string"==typeof t.reserved_at&&(l=n.find("[name=reserved_at]"),t.reserved_at.length)){var p=moment(t.reserved_at);l.val(p.format("YYYY-MM-DDTHH:mm:ssZ"))}if("string"==typeof t.finished_at&&(c=n.find("[name=finished_at]"),t.finished_at.length)){var f=moment(t.finished_at);c.val(f.format("YYYY-MM-DDTHH:mm:ssZ"))}n.on("submit",function(n){n.preventDefault();var d={label:s.val()};if("request"===a&&(d.type=r.val()),"string"==typeof t.posted){if(d.posted=new Date(o.val()),isNaN(d.posted.getTime()))return $.Dialog.fail(!1,"Post timestamp is invalid");d.posted=d.posted.toISOString()}if("string"==typeof t.reserved_at){var p=l.val();if(p.length){if(d.reserved_at=new Date(p),isNaN(d.reserved_at.getTime()))return $.Dialog.fail(!1,'"Reserved at" timestamp is invalid');d.reserved_at=d.reserved_at.toISOString()}}if("string"==typeof t.finished_at){var f=c.val().trim();if(f.length){if(d.finished_at=new Date(f),isNaN(d.finished_at.getTime()))return $.Dialog.fail(!1,'"Finished at" timestamp is invalid');d.finished_at=d.finished_at.toISOString()}}$.Dialog.wait(!1,"Saving changes"),$.post("/post/set/"+a+"/"+i,d,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);if(this.li){var t=$(this.li);e.hasClass("highlight")&&t.addClass("highlight"),e.replaceWith(t),Time.Update(),t.trigger("bind-more-handlers",[i,a])}$.Dialog.close()}))})})}))}),l.filter(".pls-transfer").off("click").on("click",function(){var i=t.children(".reserver").find(".name").text();$.Dialog.confirm("Take on reservation of "+r+" #"+s,"<p>Using this option, you can express your interest in finishing the "+r+" which "+i+" already reserved.</p>\n\t\t\t\t<p>They will be sent a notification letting them know you're interested and they'll be able to allow/deny the transfer of the reserver status as they see fit.</p>\n\t\t\t\t<p>Once "+i+" responds to your inquiry you'll receive a notification informing you about their decision. If they agreed, the post’s reservation will be transferred to you immediately.</p>\n\t\t\t\t<p><strong>Are you sure you can handle this "+r+"?</strong></p>",function(i){i&&($.Dialog.wait(!1),$.post("/post/transfer/"+r+"/"+s,$.mkAjaxHandler(function(){return this.canreserve?$.Dialog.confirm(!1,this.message,function(i){i&&e(t,!1,s,r)}):this.status?void $.Dialog.success(!1,this.message,!0):$.Dialog.fail(!1,this.message)})))})})};$("#requests, #reservations").on("bind-more-handlers","li[id]",c).find("li[id]").each(c)},function(){delete window.moment.tz});
//# sourceMappingURL=/js/min/episode-manage.js.map
