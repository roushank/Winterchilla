"use strict";DocReady.push(function(){var t=window.SpriteColorMap,n=window.AppearanceColors,e=(window.HEX_COLOR_REGEX,$("#input-cont").empty()),o=$.mk("select").disable().append('<option value="" style="display:none">(unrecognized color)</option>'),i=$("#svg-cont").children();$.each(n,function(t,n){$.yiq(n.hex)>=128?"black":"white";o.append('<option value="'+n.hex+'">'+n.label+"</option>")}),o.append('<optgroup label="Universal colors">\n\t\t\t<option value="#FFFFFF">Eye | Shines</option>\n\t\t\t<option value="#000000">Eye | Pupil</option>\n\t\t</optgroup>\n\t\t<optgroup label="Uniform mannequin">\n\t\t\t<option value="#D8D8D8">Mannequin | Outline</option>\n\t\t\t<option value="#E6E6E6">Mannequin | Fill</option>\n\t\t\t<option value="#BFBFBF">Mannequin | Shadow Outline</option>\n\t\t\t<option value="#CCCCCC">Mannequin | Shdow Fill</option>\n\t\t</optgroup>'),i.find("rect").each(function(){var t=$(this);t.addClass($.yiq(t.attr("fill"))>127.5?"bright":"dark")}),$.each(t,function(t,n){var a=o.clone();a.find('option[value="'+n+'"]').first().attr("selected",!0),a.on("change",function(){var t=$(this),n=t.find("option:selected").val();n.length&&t.siblings("input").val(n).triggerHandler("change",[!0])}),e.append($.mk("div").attr("data-ph",t).append('<span class="color-preview" style="background-color:'+n+'"></span>',a,$.mk("input").attr({type:"text",value:n,readonly:!0})).on("mouseenter",function(){var n=i.find("rect").filter(function(){var n=this.getAttribute("data:ph");return"string"==typeof n&&n===t});n.addClass("highlight")}).on("mouseleave",function(){i.find(".highlight").removeClass("highlight")}))}),e.children("div").sort(function(t,n){var e=$(t).children("select").children("option:selected").text()||"",o=$(n).children("select").children("option:selected").text()||"";return e.localeCompare(o)}).prependTo(e)});
//# sourceMappingURL=/js/min/colorguide-sprite.js.map
