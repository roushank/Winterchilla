/* globals DocReady */
DocReady.push(function UserSuggestion(){
	'use strict';

	let $pendingReservations = $('.pending-reservations');
	$pendingReservations.on('click','#suggestion',function(e){
		e.preventDefault();

		$.Dialog.info(
			'Suggest a reservation',
			`<p>Feeel like making a vector but don't have any screencap in mind? Why not fulfill a request?</p>
			<p>With this tool you can get a random request from the site, and you can choose to reserve it or get a different suggestion. It's all up to you.</p>
			<div class="align-center"><button id="suggestion-press" class="btn large orange typcn typcn-lightbulb">Give me a suggestion</button></button>`,
			function(){
				let $btn = $('#dialogContent').find('#suggestion-press'),
					$output = $.mk('ul','suggestion-output').insertAfter($btn),
					$loadNotice = $.mk('div').addClass('notice fail').hide().text('The image apparently failed to load - just click the button again to get a different suggestion.').insertAfter($output),
					opened;
				$btn.on('click',function(e){
					e.preventDefault();

					$loadNotice.hide();
					if (opened){
						opened.close();
						opened = undefined;
					}
					$.post('/user/suggestion',$.mkAjaxHandler(function(){
						if (!this.status){
							if (this.limithit){
								$btn.disable();
								console.log($output);
								$output.remove();
							}
							return $.Dialog.fail(false, this.message);
						}

						let $result = $(this.suggestion),
							postID = $result.attr('id');
						$result.find('img').on('error',function(){
							$loadNotice.show();
						});
						$result.find('.screencap > a').on('click',function(e){
							let $this = $(this);
							opened = $.PopupOpenCenter($this.attr('href'), 'suggestion_popup',800,450);
							e.preventDefault();
						});
						$result.find('.reserve-request').on('click',function(){
							let $this = $(this);
							$.post('/post/reserve-'+(postID.replace('-','/')),{SUGGESTED:true},$.mkAjaxHandler(function(){
								if (!this.status) return $.Dialog.fail(false, this.message);

								$this.replaceWith(this.button);
								$pendingReservations.html($(this.pendingReservations).children());
							}));
						});
						$output.html($result);
					}));
				});
			}
		);
	});
});