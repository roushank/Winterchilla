"use strict";$(function(){var e=$("#sort-by"),t=$("#full-list"),a=$("#guide-reorder"),r=$("#guide-reorder-cancel"),n=window.EQG?"?eqg":"";e.on("change",function(){var r=e.data("baseurl"),n=e.val(),i=(r+"?ajax&"+n).replace(/&$/,"");$.Dialog.wait("Changing sort order"),$.get(i,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);t.html(this.html),s(),a.attr("disabled",Boolean(n.length)),history.replaceState(history.state,"",this.stateUrl),$.Dialog.close()}))});var i=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var t=e.target;i.unobserve(t);var a=t.dataset.src,r=new Image;r.src=a,$(r).on("load",function(){$(t).css("opacity",0).attr("src",a).removeAttr("data-src").animate({opacity:1},300)})}})});function s(){t.find("section > ul img[data-src]").each(function(e,t){return i.observe(t)})}s(),"function"==typeof window.Sortable&&(t.on("click",".sort-alpha",function(){var e=$(this).closest("section").children("ul");e.children().sort(function(e,t){return $(e).text().trim().localeCompare($(t).text().trim())}).appendTo(e)}),a.on("click",function(){if(a.hasClass("typcn-tick")){$.Dialog.wait("Re-ordering appearances");var e=[];t.children().children("ul").children().each(function(){e.push($(this).children().attr("data-href").split("/").pop().replace(/^(\d+)\D.*$/,"$1"))}),$.post("/cg/full/reorder"+n,{list:e.join(",")},$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);t.removeClass("sorting").html(this.html),s(),a.removeClass("typcn-tick green").addClass("typcn-arrow-unsorted darkblue").html("Re-order"),r.addClass("hidden"),$.Dialog.close()}))}else a.removeClass("typcn-arrow-unsorted darkblue").addClass("typcn-tick green").html("Save"),t.addClass("sorting").children().each(function(){var e=$(this).children("ul");e.children().each(function(){var e=$(this);e.data("orig-index",e.index())}).children().moveAttr("href","data-href"),e.data("sortable-instance",new Sortable(e.get(0),{ghostClass:"moving",animation:300}))}),$(".sort-alpha").show(),r.removeClass("hidden")}),r.on("click",function(){a.removeClass("typcn-tick green").addClass("typcn-arrow-unsorted darkblue").html("Re-order"),t.removeClass("sorting").children().each(function(){var e=$(this).children("ul");e.children().sort(function(e,t){return(e=$(e).data("orig-index"))>(t=$(t).data("orig-index"))?1:e<t?-1:0}).appendTo(e).removeData("orig-index").children().moveAttr("data-href","href"),e.data("sortable-instance").destroy(),e.removeData("sortable-instance")}),$(".sort-alpha").hide(),r.addClass("hidden")}))});
//# sourceMappingURL=/js/min/pages/colorguide/full-list.js.map
