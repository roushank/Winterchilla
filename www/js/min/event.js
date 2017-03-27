"use strict";DocReady.push(function(){var t=window.PRINTABLE_ASCII_PATTERN,e=$("#event-entries"),n=$.mk("form","new-entry").append('<label>\n\t\t\t<span>Entry link <small>(to vector source file)</small></span>\n\t\t\t<input type="url" name="link" required>\n\t\t</label>\n\t\t<div class="notice info">This must point to a deviation on DeviantArt or a Sta.sh upload. A Sta.sh link will not be visible to the public, so use that if you do not want to share the source file with anyone other than the staff. You only need to submit the source file, we\'ll take care of the rest.</div>',$.mk("label").append("<span>Entry title</span>",$.mk("input").attr({type:"text",name:"title",required:!0,pattern:t.replace("+","{2,64}"),minlength:2,maxlength:64})),'<div class="notice info">Here you can enter the name of the character you\'re submitting for example.</div>\n\t\t<label>\n\t\t\t<span>Preview (optional)</span>\n\t\t\t<input type="url" name="prev_src">\n\t\t</label>\n\t\t<div class="notice info">You can link to a preview of your submission from any of the <a href="/about#supported-providers" target="_blank">suppported image providers</a>. This will show a visual preview alongside your submission on the event page.</div>');$.fn.rebindFluidbox=function(){return this.find(".preview > a:not(.fluidbox--initialized)").fluidboxThis(),this},$("#enter-event").on("click",function(t){t.preventDefault();var i=$(this).closest("[id^=event-]").attr("id").split("-")[1];$.Dialog.wait("New entry","Checking whether you can submit any more entries"),$.post("/event/check-entries/"+i,$.mkAjaxHandler(function(){return this.status?(this.message&&$.Dialog.success(!1,this.message),void $.Dialog.request(!1,n.clone(),"Enter",function(t){t.on("submit",function(n){n.preventDefault();var a=t.mkData();$.Dialog.wait(!1,"Submitting your entry"),$.post("/event/entry/add/"+i,a,$.mkAjaxHandler(function(){return this.status?(e.html(this.entrylist).rebindFluidbox(),void $.Dialog.close()):$.Dialog.fail(!1,this.message)}))})})):$.Dialog.fail(!1,this.message)}))}),e.rebindFluidbox().on("click",".edit-entry",function(t){t.preventDefault();var e=$(this).closest("[id^=entry-]"),i=e.attr("id").split("-")[1];$.Dialog.wait("Editing entry #"+i,"Retrieving entry details from server"),$.post("/event/entry/get/"+i,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var t=this;$.Dialog.request(!1,n.clone(),"Save",function(n){t.link&&n.find('input[name="link"]').val(t.link),t.title&&n.find('input[name="title"]').val(t.title),t.prev_src&&n.find('input[name="prev_src"]').val(t.prev_src),n.on("submit",function(t){t.preventDefault();var a=n.mkData();$.Dialog.wait(!1,"Saving changes"),$.post("/event/entry/set/"+i,a,$.mkAjaxHandler(function(){return this.status?(e.html(this.entryhtml).rebindFluidbox(),void $.Dialog.close()):$.Dialog.fail(!1,this.message)}))})})}))}),e.on("click",".delete-entry",function(t){t.preventDefault();var e=$(this).closest("[id^=entry-]"),n=e.attr("id").split("-")[1],i=e.find(".label").text();$.Dialog.confirm("Withdraw entry #"+n,"Are you sure you want to withdraw the entry <q>"+i+"</q>?",function(t){t&&($.Dialog.wait(!1,"Sending deletion request"),$.post("/event/entry/del/"+n,$.mkAjaxHandler(function(){return this.status?($.Dialog.close(),void e.fadeOut(500,function(){e.remove()})):$.Dialog.fail(!1,this.message)})))})}),e.on("click",".voting > button",function(t){t.preventDefault();var n=$(this),i=n.closest("[id^=entry-]"),a=i.attr("id").split("-")[1],s=n.hasClass("upvote")?1:-1,r=n.hasClass("clicked");n.siblings("button").addBack().disable(),$.post("/event/entry/"+(r?"un":"")+"vote/"+a,{value:s},$.mkAjaxHandler(function(){var t=n.siblings("button");return this.disable||t.addBack().enable(),this.status?(n[r?"removeClass":"addClass"]("clicked"),t.removeClass("clicked"),n.siblings(".score").text(this.score),void e.triggerHandler("reorder-items")):$.Dialog.fail("Voting on entry #"+a,this.message)}))}).on("reorder-items",function(){0!==e.find(".voting").length&&e.children().sort(function(t,e){var n=parseInt($(t).find(".score").text().replace(/^\D/,"-"),10),i=parseInt($(e).find(".score").text().replace(/^\D/,"-"),10);return n<i?1:n>i?-1:0}).appendTo(e)}),$.fn.refreshVoting=function(){var t=this,n=t.attr("id").split("-")[1];$.post("/event/entry/getvote/"+n,$.mkAjaxHandler(function(){return this.status?(t.find(".voting").replaceWith(this.voting),void e.triggerHandler("reorder-items")):$.Dialog.fail("Refresh voting buttons of entry #"+n,this.message)}))},"contest"===window.EventType&&$.WS.recvEntryUpdates(!0)},function(){delete $.fn.refreshVoting,delete $.fn.rebindFluidbox,"contest"===window.EventType&&$.WS.recvEntryUpdates(!1)});
//# sourceMappingURL=/js/min/event.js.map
