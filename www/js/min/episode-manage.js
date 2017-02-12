"use strict";DocReady.push(function(){function e(e,t,i,a){var s="Reserving request",o=function t(n){$.Dialog.wait(s,"Sending reservation to the server"),$.post("/post/reserve/request/"+i,n,$.mkAjaxHandler(function(){if(this.retry)return $.Dialog.confirm(!1,this.message,function(e){e&&(n.screwit=!0,t(n))});if(!this.status)return $.Dialog.fail(!1,this.message);if(this.li){var s=$(this.li);e.hasClass("highlight")&&s.addClass("highlight"),e.replaceWith(s),Time.Update(),s.trigger("bind-more-handlers",[i,a])}$.Dialog.close()}))};if("undefined"!=typeof n&&t){var r=$.mk("form").attr("id","reserve-as").append($.mk("label").append("<span>Reserve as</span>",$.mk("input").attr({type:"text",name:"post_as",required:!0,placeholder:"Username"}).patternAttr(n)),$.mk("label").append($.mk("span").text("Reserved at"),$.mk("input").attr({type:"datetime",name:"reserved_at",spellcheck:!1,autocomplete:"off",placeholder:"time()"})));$.Dialog.request(s,r,"Reserve",function(e){e.on("submit",function(t){t.preventDefault(),o(e.mkData())})})}else o({})}var t=window.SEASON,i=window.EPISODE,n=window.USERNAME_REGEX,a=window.FULLSIZE_MATCH_REGEX,s="S"+t+"E"+i,o=0===t,r=o?"Movie":"Episode",l=r.toLowerCase(),c=$content.children("section.episode");$("#video").on("click",function(){$.Dialog.wait("Set video links","Requesting links from the server"),$.post("/episode/video-data/"+s+"?action=get",$.mkAjaxHandler(function(){var e=this;if(!e.status)return $.Dialog.fail(!1,e.message);var t="<input type='url' class='yt' name='yt_1' placeholder='YouTube' spellcheck='false' autocomplete='off'>",i="<input type='url' class='dm' name='dm_1' placeholder='Dailymotion' spellcheck='false' autocomplete='off'>",n=$.mk("form").attr("id","vidlinks").attr("class","align-center").html("<p>Enter vido links below, leave any input blank to remove that video from the "+l+" page.</p>\n\t\t\t\t\t<div class='input-group-2'>\n\t\t\t\t\t\t"+t+"\n\t\t\t\t\t\t"+i+"\n\t\t\t\t\t</div>");e.twoparter&&($.mk("p").html("<strong>~ Part 1 ~</strong>").insertBefore(n.children("input").first()),n.append("<p>Check below if either link contains the full "+l+" instead of just one part</p>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label><input type='checkbox' name='yt_1_full'> YouTube</label> &nbsp; <label><input type='checkbox' name='dm_1_full'> Dailymotion</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p><strong>~ Part 2 ~</strong></p>\n\t\t\t\t\t<div class='input-group-2'>\n\t\t\t\t\t\t"+t.replace("yt_1","yt_2")+"\n\t\t\t\t\t\t"+i.replace("dm_1","dm_2")+"\n\t\t\t\t\t</div>"),n.find('input[type="checkbox"]').on("change",function(){var e=$(this).attr("name").replace(/^([a-z]+)_.*$/,"$1");n.find("input").filter("[name="+e+"_2]").attr("disabled",this.checked)}),e.fullep.length>0&&$.each(e.fullep,function(e,t){n.find('input[type="checkbox"]').filter('[name="'+t+'_1_full"]').prop("checked",!0).trigger("change")})),Object.keys(e.vidlinks).length>0&&!function(){var t=n.find('input[type="url"]');$.each(e.vidlinks,function(e,i){t.filter("[name="+e+"]").val(i)})}(),$.Dialog.request(!1,n,"Save",function(t){e.airs&&new Date(e.airs).getTime()>(new Date).getTime()&&!function(){var e=$.mk("div").addClass("notice warn").text("If you add this video now, it will be shown as a livestream link!");t.append(e),t.on("change keydown","input",function(){setTimeout(function(){var i=t.mkData(),n=i.yt_1&&i.yt_1_full&&!(i.dm_1||i.dm_2);e[n?"show":"hide"]()},1)}).triggerHandler("change")}(),t.on("submit",function(e){e.preventDefault();var i=t.mkData();$.Dialog.wait(!1,"Saving links"),$.post("/episode/video-data/"+s+"?action=set",i,$.mkAjaxHandler(function(){return this.status?(this.epsection?(c.length||(c=$.mk("section").addClass("episode").insertBefore($content.children("section").first())),c.html($(this.epsection).filter("section").html()),bindVideoButtons()):c.length&&(c.remove(),c={length:0}),void $.Dialog.close()):$.Dialog.fail(!1,this.message)}))})})}))});var d=$content.children("section.appearances");$("#cg-relations").on("click",function(){$.Dialog.wait("Guide relation editor","Retrieving relations from server"),$.post("/episode/guide-relations/"+s+"?action=get",$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=this,t=$.mk("form").attr("id","guide-relation-editor"),i=$.mk("select").attr({name:"listed",multiple:!0}),n=$.mk("select").attr("multiple",!0);e.linked&&e.linked.length&&$.each(e.linked,function(e,t){i.append($.mk("option").attr("value",t.id).text(t.label))}),e.unlinked&&e.unlinked.length&&$.each(e.unlinked,function(e,t){n.append($.mk("option").attr("value",t.id).text(t.label))}),t.append($.mk("div").attr("class","split-select-wrap").append($.mk("div").attr("class","split-select").append("<span>Linked</span>",i),$.mk("div").attr("class","buttons").append($.mk("button").attr({class:"typcn typcn-chevron-left green",title:"Link selected"}).on("click",function(e){e.preventDefault(),i.append(n.children(":selected").prop("selected",!1)).children().sort(function(e,t){return e.innerHTML.localeCompare(t.innerHTML)}).appendTo(i)}),$.mk("button").attr({class:"typcn typcn-chevron-right red",title:"Unlink selected"}).on("click",function(e){e.preventDefault(),n.append(i.children(":selected").prop("selected",!1)).children().sort(function(e,t){return e.innerHTML.localeCompare(t.innerHTML)}).appendTo(n)})),$.mk("div").attr("class","split-select").append("<span>Available</span>",n))),$.Dialog.request(!1,t,"Save",function(e){e.on("submit",function(e){e.preventDefault();var t=[];i.children().each(function(e,i){t.push(i.value)}),$.Dialog.wait(!1,"Saving changes"),$.post("/episode/guide-relations/"+s+"?action=set",{ids:t.join(",")},$.mkAjaxHandler(function(){return this.status?(this.section?(d.length||(d=$.mk("section").addClass("appearances").insertBefore($content.children(".admin"))),d.html($(this.section).filter("section").html())):d.length&&(d.remove(),d={length:0}),void $.Dialog.close()):$.Dialog.fail(!1,this.message)}))})})}))}),$("#edit-about_reservations, #edit-reservation_rules").on("click",function(e){e.preventDefault();var t=$(this).parent(),i=t.clone(),n=this.id.split("-").pop();i.children().remove();var a=i.text().trim();$.Dialog.wait('Editing "'+a+'"',"Retrieving setting’s value"),$.post("/setting/get/"+n,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=$.mk("form",n+"-editor").html("<span>"+a+"</span>"),i=this.value;$.Dialog.request(!1,e,"Save",function(e){var a=void 0;$.getAceEditor(!1,"html",function(t){var n=ace.edit($.mk("div").appendTo(e).get(0));n.setShowPrintMargin(!1),a=$.aceInit(n,t),a.setMode(t),a.setUseWrapMode(!0),a.setValue(i)}),e.on("submit",function(e){e.preventDefault();var i={value:a.getValue()};$.Dialog.wait(!1,"Saving"),$.post("/setting/set/"+n,i,$.mkAjaxHandler(function(){return this.status?(t.siblings().remove(),t.parent().append(this.value),void $.Dialog.close()):$.Dialog.fail(!1,this.message)}))})})}))});var p=function(){var t=$(this),i=$._getLiTypeId(t),s=i.id,o=i.type.replace(/s$/,""),r=$.capitalize(o);t.children("button.reserve-request").off("click").on("click",function(i){i.preventDefault(),e(t,i.shiftKey,s,o)});var l=t.find(".actions").children();l.filter(".cancel").off("click").on("click",function(){$.Dialog.confirm("Cancel reservation","Are you sure you want to cancel this reservation?",function(e){e&&($.Dialog.wait(!1,"Cancelling reservation"),$.post("/post/unreserve/"+o+"/"+s,$.mkAjaxHandler(function(){return this.status?this.remove===!0?($.Dialog.close(),t[window.WithinMobileBreakpoint()?"slideUp":"fadeOut"](500,function(){t.remove()})):(t.reloadLi(),void $.Dialog.close()):$.Dialog.fail(!1,this.message)})))})}),l.filter(".finish").off("click").on("click",function(){var e=$.mk("form").attr("id","finish-res").append($.mk("label").append($.mk("span").text("Deviation URL"),$.mk("input").attr({type:"text",name:"deviation",spellcheck:!1,autocomplete:"off",required:!0})));"undefined"!=typeof n&&e.append($.mk("label").append($.mk("span").text("Finished at"),$.mk("input").attr({type:"datetime",name:"finished_at",spellcheck:!1,autocomplete:"off",placeholder:"time()"}))),$.Dialog.request("Complete reservation",e,"Finish",function(e){e.on("submit",function(t){t.preventDefault();var i=e.find("[name=deviation]").val();if("string"!=typeof i||0===i.length)return $.Dialog.fail(!1,"Please enter a deviation URL");var n="/post/finish/"+o+"/"+s,a=e.mkData();$.Dialog.wait(!1,"Marking "+o+" as finished"),$.post(n,a,$.mkAjaxHandler(function(){var e=this,t=function(){$.Dialog.success(!1,r+" has been marked as finished"),$("#"+o+"s").trigger("pls-update",[function(){"string"==typeof e.message&&e.message?$.Dialog.success(!1,e.message,!0):$.Dialog.close()}])};e.status?t():e.retry?$.Dialog.confirm(!1,e.message,["Continue","Cancel"],function(i){i&&(a.allow_overwrite_reserver=!0,$.Dialog.wait(!1),$.post(n,a,$.mkAjaxHandler(function(){return this.status?(e=this,void t()):$.Dialog.fail(!1,this.message)})))}):$.Dialog.fail(!1,e.message)}))})})}),l.filter(".unfinish").off("click").on("click",function(){var e=$(this),t=e.hasClass("delete-only"),i=$.capitalize(o),n=o.replace(/s$/,"");$.Dialog.request((t?"Delete":"Unfinish")+" "+n,'<form id="unbind-check"><p>Are you sure you want to '+(t?"delete this reservation":"mark this "+n+" as unfinished")+'?</p><hr><label><input type="checkbox" name="unbind"> Unbind '+n+" from user</label></form>","Unfinish",function(e){var n=e.find("[name=unbind]");t||e.prepend('<div class="notice info">By removing the "finished" flag, the post will be moved back to the "List of '+i+'" section</div>'),"reservation"===o?(n.on("click",function(){$("#dialogButtons").children().first().val(this.checked?"Delete":"Unfinish")}),t&&n.trigger("click").off("click").on("click keydown touchstart",function(){return!1}).css("pointer-events","none").parent().hide(),e.append('<div class="notice warn">Because this '+(t?"reservation was added directly, it cannot be marked unfinished, only deleted.":"is a reservation, unbinding it from the user will <strong>delete</strong> it permanently.")+"</div>")):e.append('<div class="notice info">If this is checked, any user will be able to reserve this request again afterwards. If left unchecked, only the current reserver <em>(and Vector Inspectors)</em> will be able to mark it as finished until the reservation is cancelled.</div>'),$w.trigger("resize"),e.on("submit",function(e){e.preventDefault();var t=n.prop("checked");$.Dialog.wait(!1,'Removing "finished" flag'+(t?" & unbinding from user":"")),$.post("/post/unfinish/"+o+"/"+s+(t?"?unbind":""),$.mkAjaxHandler(function(){return this.status?($.Dialog.success(!1,"undefined"!=typeof this.message?this.message:'"finished" flag removed successfully'),void $("#"+o+"s").trigger("pls-update")):$.Dialog.fail(!1,this.message)}))})})}),l.filter(".check").off("click").on("click",function(e){e.preventDefault(),$.Dialog.wait("Submission approval status","Checking"),$.post("/post/lock/"+o+"/"+s,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=this.message;t.reloadLi(),$.Dialog.success(!1,e,!0)}))}),l.filter(".unlock").off("click").on("click",function(e){e.preventDefault(),$.Dialog.confirm("Unlocking post","Are you sure you want to unlock this post?",function(e){e&&($.Dialog.wait(!1),$.post("/post/unlock/"+o+"/"+s,$.mkAjaxHandler(function(){return this.status?void $("#"+o+"s").trigger("pls-update"):$.Dialog.fail(!1,this.message)})))})}),l.filter(".delete").off("click").on("click",function(){var e=$(this);$.Dialog.confirm("Deleteing request #"+s,"You are about to permanently delete this request.<br>Are you sure about this?",function(i){i&&($.Dialog.wait(!1),t.addClass("deleting"),$.post("/post/delete-request/"+s,$.mkAjaxHandler(function(){return this.status?($.Dialog.close(),void e.closest("li")[window.WithinMobileBreakpoint()?"slideUp":"fadeOut"](500,function(){$(this).remove()})):(t.removeClass("deleting"),$.Dialog.fail(!1,this.message))})))})}),l.filter(".edit").off("click").on("click",function(){var e=$(this),t=e.parents("li"),i=t.attr("id").split("-"),n=i[1],s=i[0];$.Dialog.wait("Editing "+s+" #"+n,"Retrieving "+s+" details"),$.post("/post/get/"+s+"/"+n,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=this,i=$.mk("form").attr("id","post-edit-form").append($.mk("label").append($.mk("span").text("Description (3-255 chars."+("reservation"===s?", optional":"")+")"),$.mk("input").attr({type:"text",maxlength:255,pattern:"^.{3,255}$",name:"label",required:"reservation"!==s})));"request"===s&&i.append($.mk("label").append($.mk("span").text("Request type"),$.mk("select").attr({name:"type",required:!0}).append($.mk("option").attr("value","chr").text("Character"),$.mk("option").attr("value","obj").text("Object"),$.mk("option").attr("value","bg").text("Backgound")))),"string"==typeof e.posted&&i.append($.mk("label").append($.mk("span").text("Post timestamp"),$.mk("input").attr({type:"datetime",name:"date",required:!0,spellcheck:!1,autocomplete:"off"}))),"string"==typeof e.reserved_at&&i.append($.mk("label").append($.mk("span").text("Reserved at"),$.mk("input").attr({type:"datetime",name:"reserved_at",spellcheck:!1,autocomplete:"off"}))),"string"==typeof e.finished_at&&i.append($.mk("label").append($.mk("span").text("Finished at"),$.mk("input").attr({type:"datetime",name:"finished_at",spellcheck:!1,autocomplete:"off"})));var o=0===t.children(".image").find(".typcn-tick").length,r="finished"===t.closest("div").attr("class"),l=r?t.children(".original"):t.children(".image").children("a"),c=l.attr("href"),d=!r&&!a.test(c)&&/deviantart\.net\//.test(c);(o||d)&&i.append($.mk("label").append(o?$.mk("a").text("Update Image").attr({href:"#update",class:"btn darkblue typcn typcn-pencil"}).on("click",function(e){e.preventDefault(),$.Dialog.close();var i=t.children(".image").find("img"),a=$.mk("form").attr("id","img-update-form").append($.mk("div").attr("class","oldimg").append($.mk("span").text("Current image"),i.clone()),$.mk("label").append($.mk("span").text("New image URL"),$.mk("input").attr({type:"text",maxlength:255,pattern:"^.{2,255}$",name:"image_url",required:!0,autocomplete:"off",spellcheck:"false"})));$.Dialog.request("Update image of "+s+" #"+n,a,"Update",function(e){e.on("submit",function(i){i.preventDefault();var a=e.mkData();$.Dialog.wait(!1,"Replacing image"),$.post("/post/set-image/"+s+"/"+n,a,$.mkAjaxHandler(function(){return this.status?($.Dialog.success(!1,"Image has been updated"),void t.reloadLi()):$.Dialog.fail(!1,this.message)}))})})}):void 0,d?$.mk("a").text("Sta.sh fullsize fix").attr({href:"#fix-stash-fullsize",class:"btn orange typcn typcn-spanner"}).on("click",function(e){e.preventDefault(),$.Dialog.close(),$.Dialog.wait("Fix Sta.sh fullsize URL","Fixing Sta.sh full size image URL"),$.post("/post/fix-stash/"+s+"/"+n,$.mkAjaxHandler(function(){if(!this.status){if(this.rmdirect){if(!r)return t.find(".post-date").children("a").first().triggerHandler("click"),$.Dialog.fail(!1,this.message+"<br>The post might be broken because of this, please check it for any issues.");t.children(".original").remove()}return $.Dialog.fail(!1,this.message)}l.attr("href",this.fullsize),$.Dialog.success(!1,"Fix successful",!0)}))}):void 0)),$.Dialog.request(!1,i,"Save",function(i){var a=i.find("[name=label]"),o=i.find("[name=type]"),r=void 0,l=void 0,c=void 0;if(e.label&&a.val(e.label),e.type&&o.children("option").filter(function(){return this.value===e.type}).attr("selected",!0),"string"==typeof e.posted){r=i.find("[name=date]");var d=moment(e.posted);r.val(d.format("YYYY-MM-DDTHH:mm:ssZ"))}if("string"==typeof e.reserved_at&&(l=i.find("[name=reserved_at]"),e.reserved_at.length)){var p=moment(e.reserved_at);l.val(p.format("YYYY-MM-DDTHH:mm:ssZ"))}if("string"==typeof e.finished_at&&(c=i.find("[name=finished_at]"),e.finished_at.length)){var f=moment(e.finished_at);c.val(f.format("YYYY-MM-DDTHH:mm:ssZ"))}i.on("submit",function(i){i.preventDefault();var d={label:a.val()};if("request"===s&&(d.type=o.val()),"string"==typeof e.posted){if(d.posted=new Date(r.val()),isNaN(d.posted.getTime()))return $.Dialog.fail(!1,"Post timestamp is invalid");d.posted=d.posted.toISOString()}if("string"==typeof e.reserved_at){var p=l.val();if(p.length){if(d.reserved_at=new Date(p),isNaN(d.reserved_at.getTime()))return $.Dialog.fail(!1,'"Reserved at" timestamp is invalid');d.reserved_at=d.reserved_at.toISOString()}}if("string"==typeof e.finished_at){var f=c.val().trim();if(f.length){if(d.finished_at=new Date(f),isNaN(d.finished_at.getTime()))return $.Dialog.fail(!1,'"Finished at" timestamp is invalid');d.finished_at=d.finished_at.toISOString()}}$.Dialog.wait(!1,"Saving changes"),$.post("/post/set/"+s+"/"+n,d,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);if(this.li){var e=$(this.li);t.hasClass("highlight")&&e.addClass("highlight"),t.replaceWith(e),Time.Update(),e.trigger("bind-more-handlers",[n,s])}$.Dialog.close()}))})})}))}),l.filter(".pls-transfer").off("click").on("click",function(){var i=t.children(".reserver").find(".name").text();$.Dialog.confirm("Take on reservation of "+o+" #"+s,"<p>Using this option, you can express your interest in finishing the "+o+" which "+i+" already reserved.</p>\n\t\t\t\t<p>They will be sent a notification letting them know you're interested and they'll be able to allow/deny the transfer of the reserver status as they see fit.</p>\n\t\t\t\t<p>Once "+i+" responds to your inquiry you'll receive a notification informing you about their decision. If they agreed, the post’s reservation will be transferred to you immediately.</p>\n\t\t\t\t<p><strong>Are you sure you can handle this "+o+"?</strong></p>",function(i){i&&($.Dialog.wait(!1),$.post("/post/transfer/"+o+"/"+s,$.mkAjaxHandler(function(){return this.canreserve?$.Dialog.confirm(!1,this.message,function(i){i&&e(t,!1,s,o)}):this.status?void $.Dialog.success(!1,this.message,!0):$.Dialog.fail(!1,this.message)})))})})};$("#requests, #reservations").on("bind-more-handlers","li[id]",p).find("li[id]").each(p)},function(){delete window.moment.tz});
//# sourceMappingURL=/js/min/episode-manage.js.map
