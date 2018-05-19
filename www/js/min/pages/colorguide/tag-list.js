"use strict";$(function(){var g=window.TAG_TYPES_ASSOC,e=$("#tags").children("tbody"),u=function(t,e){return this.status?"function"==typeof t?t.call(this,e):void $.Dialog.segway(!1,this.message?$.mk("span").attr("class","color-green").html(this.message):void 0):$.Dialog.fail(!1,this.message)},n=function(t){return $.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);if(this.counts){var n=this.counts;e.children().each(function(){var t=$(this).children(),e=parseInt(t.first().text().trim(),10);void 0!==n[e]&&t.last().children("span").text(n[e])})}t?$.Dialog.success(!1,this.message,!0):$.Dialog.close()})};window.CGTagEditing=function(a,r,l,c){switch(l){case"delete":$.Dialog.confirm("Deleting the "+a+" tag","Deleting this tag will also remove it from every appearance where it's been used.<br>Are you sure?",["Delete it","Nope"],function(t){t&&($.Dialog.wait(!1,"Deleting tag"),$.delete("/api/cg/tag/"+r,{sanitycheck:!0},$.mkAjaxHandler(function(){u.call(this,c,l)})))});break;case"synon":$.Dialog.wait("Make "+a+" a synonym","Retrieving tag list from server"),$.get("/api/cg/tags",{not:r,action:l},$.mkAjaxHandler(function(){if(!this.length)return this.undo?window.CGTagEditing.call(this,a,r,"unsynon",c):$.Dialog.fail(!1,this.message);var t=$.mk("form","tag-"+l),i=$.mk("select").attr("required",!0).attr("name","targetid"),s={},o=[];$.each(this,function(t,e){var n=e.type,a='<option value="'+e.id+'">'+e.name+"</option>";if(!n)return i.append(a);void 0===s[n]&&(s[n]=$.mk("optgroup").attr("label",g[n]),o.push(n)),s[n].append(a)}),$.each(o,function(t,e){i.append(s[e])}),t.append("<p>Making a tag a synonym will keep it the database, but when searching, it will automatically show results with the target tag.</p>",$.mk("label").append("<span>Select synonym of <strong>"+a+"</strong>:</span>",i)),$.Dialog.request(!1,t,"Make synonym",function(n){n.on("submit",function(t){t.preventDefault();var e=n.mkData();$.Dialog.wait(!1,"Creating tag synonym"),$.put("/api/cg/tag/"+r+"/synonym",e,$.mkAjaxHandler(function(){u.call(this,c,l)}))})})}));break;case"unsynon":var i=this.message;$.Dialog.close(function(){$.Dialog.confirm("Remove synonym from "+a,i,["Yes, continue…","Cancel"],function(t){if(t){var e=$.mk("div").html(i).find("strong").prop("outerHTML"),n=$.mk("form","synon-remove").html("<p>If you leave the option below checked, <strong>"+a+"</strong> will be added to all appearances where "+e+" is used, preserving how the tags worked while the synonym was active.</p>\n\t\t\t\t\t\t\t\t<p>If you made these tags synonyms by accident and don't want <strong>"+a+"</strong> to be added to each appearance where "+e+' is used, you should uncheck the box below.</p>\n\t\t\t\t\t\t\t\t<label><input type="checkbox" name="keep_tagged" checked><span>Preserve current tag connections</span></label>');$.Dialog.request(!1,n,"Remove synonym",function(n){n.on("submit",function(t){t.preventDefault();var e=n.mkData();$.Dialog.wait(!1,"Removing synonym"),$.delete("/api/cg/tag/"+r+"/synonym",e,$.mkAjaxHandler(function(){u.call(this,c,l)}))})})}})});break;case"refresh":$.Dialog.wait("Refresh use count of "+a,"Updating use count"),$.post("/api/cg/tags/recount-uses",{tagids:r},n())}},e.on("click","button",function(t){t.preventDefault();var e=$(this).parents("tr"),n=e.children().eq(1).text().trim(),a=parseInt(e.children().first().text().trim(),10),i=this.className.split(" ").pop();window.CGTagEditing(n,a,i,e)}),$(".refresh-all").on("click",function(){var t=[];e.find("button.refresh").each(function(){t.push($(this).closest("tr").children().first().text().trim())}),$.Dialog.wait("Recalculate tag usage data","Updating use count"+(1!==t.length?"s":"")),$.post("/api/cg/tags/recount-uses",{tagids:t.join(",")},n(!0))})});
//# sourceMappingURL=/js/min/pages/colorguide/tag-list.js.map
