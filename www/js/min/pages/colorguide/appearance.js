"use strict";$(function(){window.copyHashToggler();var t=$("#colors");$(".color-list").on("click",".reorder-cgs",function(e){e.preventDefault(),$.ctxmenu.triggerItem(t,1)}).on("click",".create-cg",function(e){e.preventDefault(),$.ctxmenu.triggerItem(t,2)}),t.on("click","button.edit-cg",function(){$.ctxmenu.triggerItem($(this).parents(".ctxmenu-bound"),1)}).on("click","button.delete-cg",function(){$.ctxmenu.triggerItem($(this).parents(".ctxmenu-bound"),2)}),$("button.share").on("click",function(){var t=$(this),e=t.attr("data-private"),n=t.attr("data-url");$.Dialog.info("Sharing appearance",$.mk("div").attr("class","align-center").append(e?"This appearance is private, but by using this link you can give anyone access to the colors":"You can use the link below to share this appearance with the world",$.mk("div").attr("class","share-link").text(n),$.mk("button").attr("class","blue typcn typcn-clipboard").text("Copy to clipboard").on("click",function(t){$.copy(n,t)})),function(){$("#dialogContent").find(".share-link").select()})})});
//# sourceMappingURL=/js/min/pages/colorguide/appearance.js.map
