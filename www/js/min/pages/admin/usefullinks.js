"use strict";!function(){var t=$.attributifyRegex(window.PRINTABLE_ASCII_PATTERN),e=window.ROLES_ASSOC,n=$(".useful-links").find("ol"),i=$("#sidebar").find(".welcome .links"),a=void 0;function l(n){if(void 0===a){var i="<select name='minrole' required>\n\t\t\t\t\t<option value='' selected style='display:none'>Select one</option>\n\t\t\t\t\t<optgroup label=\"Available roles\">";$.each(e,function(t,e){"guest"!==t&&(i+='<option value="'+t+'">'+e+"</option>")}),i+="</optgroup></select>",a=$.mk("form","link-editor").html('<label>\n\t\t\t\t\t<span>Label (3-35 chars.)</span>\n\t\t\t\t\t<input type="text" name="label" maxlength="35" pattern="'+t.replace("+","{3,35}")+'" required>\n\t\t\t\t</label>\n\t\t\t\t<label>\n\t\t\t\t\t<span>URL (3-255 chars.)</span>\n\t\t\t\t\t<input type="text" name="url" maxlength="255" pattern="'+t.replace("+","{3,255}")+'" required>\n\t\t\t\t</label>\n\t\t\t\t<label>\n\t\t\t\t\t<span>Title (optional, 3-70 chars.)</span>\n\t\t\t\t\t<input type="text" name="title" maxlength="70" pattern="'+t.replace("+","{3,70}")+'">\n\t\t\t\t</label>\n\t\t\t\t<label>\n\t\t\t\t\t<span>Role required to view</span>\n\t\t\t\t\t'+i+"\n\t\t\t\t</label>").on("submit",function(t){t.preventDefault();var e=$(this).serialize();$.Dialog.wait(!1),$[n?"put":"post"]("/api/admin/usefullinks"+(n?"/"+n:""),e,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);$.Navigation.reload(!0)}))})}return a.clone(!0,!0)}n.on("click",".edit-link",function(){var t=$(this).closest("[id^=ufl-]").attr("id").substring(4);$.Dialog.wait("Editing link #"+t,"Retrieving link information from server"),$.get("/api/admin/usefullinks/"+t,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);var e=this;$.Dialog.request(!1,l(t),"Save changes",function(t){t.find("input[name=label]").val(e.label),t.find("input[name=url]").val(e.url),t.find("input[name=title]").val(e.title),t.find("select[name=minrole]").val(e.minrole)})}))}),n.on("click",".delete-link",function(){var e=$(this).closest("[id^=ufl-]"),n=e.attr("id").substring(4);$.Dialog.confirm("Delete link #"+n,"Are you sure you want to delete this link?",function(t){t&&($.Dialog.wait(!1,"Removing link"),$.delete("/api/admin/usefullinks/"+n,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);e.remove(),$("#s-ufl-"+n).remove(),i.is(":empty")&&i.hide(),$.Dialog.close()})))})}),$("#add-link").on("click",function(){$.Dialog.request("Add a link",l(),"Add")});var s=$("#reorder-links");s.on("click",function(){if(s.hasClass("typcn-tick")){$.Dialog.wait("Re-ordering links");var t=[];n.children().each(function(){t.push($(this).find(".typcn-arrow-move").remove().end().attr("id").split("-").pop())}),$.post("/api/admin/usefullinks/reorder",{list:t.join(",")},$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(!1,this.message);$.Navigation.reload(!0)}))}else s.removeClass("typcn-arrow-unsorted darkblue").addClass("typcn-tick green").html("Save"),n.addClass("sorting").children().find(".buttons").append('<span class="btn darkblue typcn typcn-arrow-move"></span>'),Sortable.create(n.get(0),{ghostClass:"moving",scroll:!0,animation:150,handle:".typcn-arrow-move"})})}();
//# sourceMappingURL=/js/min/pages/admin/usefullinks.js.map
