$(function(){
	//noinspection JSUnusedLocalSymbols
	var Color = window.Color, color = window.color;

	function tooltips(){
		$('.tags').children('span[title][title!=""]').ctxmenu(
			[
				{text: "Add to search (TBI)", icon: 'zoom', click: function(){
					$.Dialog.info('Add tag to search triggered', 'yay');
				}}
			],
			function($el){ return 'Tag: '+$el.text().trim() }
		).each(function(){
			var $this = $(this),
				tagstyle = $this.attr('class').match(/typ\-([a-z]+)(?:\s|$)/);

			tagstyle = tagstyle == null ? '' : ' qtip-tag-'+tagstyle[1];

			$this.qtip({
				position: { my: 'bottom center', at: 'top center', viewport: true },
				style: { classes: 'qtip-tag'+tagstyle }
			});
		});
		$('ul.colors').children('li').children('span[title][title!=""]').qtip({
			content: {
				text: 'Click to copy HEX '+color+' code to clipboard',
				title: function(){ return $(this).attr('title') }
			},
			position: { my: 'bottom center', at: 'top center', viewport: true },
			style: { classes: 'qtip-see-thru' }
		});
	}
	tooltips();
	window.tooltips = function(){tooltips()};
});
