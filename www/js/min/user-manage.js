"use strict";DocReady.push(function(){if("undefined"!=typeof window.ROLES){var e=$("#content"),t=e.children("h1").children().eq(1),n=t.text().trim(),a=t.parent().next(),i=a.children("span").text(),o=$.mk("form").attr("id","rolemod").html('<select name="newrole" required><optgroup label="Possible roles"></optgroup></select>'),s=o.find("optgroup"),r=$("#ban-toggle"),l=$("#change-role");$.each(window.ROLES,function(e,t){s.append("<option value="+e+">"+t+"</option>")}),l.on("click",function(){$.Dialog.request("Change group",o.clone(),"Change",function(e){var t=e.find("option").filter(function(){return this.innerHTML===i}).attr("selected",!0);e.on("submit",function(a){if(a.preventDefault(),e.children("select").val()===t.attr("value"))return $.Dialog.close();var i=e.mkData();$.Dialog.wait(!1,"Moving user to the new group"),$.post("/user/newgroup/"+n,i,$.mkAjaxHandler(function(){return this.already_in===!0?$.Dialog.close():this.status?($.Dialog.wait(!1,"Reloading page",!0),void $.Navigation.reload(function(){$.Dialog.close()})):$.Dialog.fail(!1,this.message)}))})})}),r.on("click",function(){var e=(r.hasClass("un-banish")?"Un-ban":"Ban")+"ish",t=e.toLowerCase(),a=e+"ing "+n+("banish"===t?" to the moon":"");$.Dialog.request(a,$.mk("form",t+"-form").html("<p>"+e+"ing "+n+" will "+("banish"===t?"immediately sign them out of every session and won't allow them to log in again. Please, only do this if it's absolutely necessary.":"allow them to sign in to the site again.")+"</p>\n\t\t\t\t<p>You must provide a reason (5-255 chars.) for the "+t.replace(/ish$/,"")+' which will be added to the log entry and appear in the user\'s banishment history.</p>\n\t\t\t\t<input type="text" name="reason" placeholder="Enter a reason" required pattern="^.{5,255}$" value="'+e+'ing because ">\n\t\t\t\t'+("banish"===t?'<img src="/img/pre-ban.svg" alt="Sad twilight">':"")),e,function(e){e.on("submit",function(e){e.preventDefault();var i=$(this).mkData();$.Dialog.wait(!1,"Gathering the Elements of Harmony"),$.post("/user/"+t+"/"+n,i,$.mkAjaxHandler(function(){if(!this.status)return $.Dialog.fail(a,this.message);var e=this.message;$.Dialog.wait(!1,"Reloading page",!0),$.Navigation.reload(function(){"banish"===t?$.Dialog.success(a,'<p>What had to be done, has been done.</p><img src="/img/post-ban.svg">'):$.Dialog.success(a,e,!0)})}))})})})}});
//# sourceMappingURL=/js/min/user-manage.js.map