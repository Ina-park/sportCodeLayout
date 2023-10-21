var _UI = (function($) {
	'use strict';

	return {
		// ------------------------------
		//	Popup
		// ------------------------------	
		// element
		popup: {
			btnClose: '.dim, .js-popup-close'
		},		
		popupLayer: function(inOption) {
			/*	 inOption
			*  {
			*	 selId : Layer Selector
			*	 selVideo : Layer Video
			*  }
			*/
			//console.log(inOption)

			var $layer = $(inOption.selId);
			var $layerVideo = $(inOption.selVideo);
			var $layerCloseBtn = this.popup.btnClose;

			$layer.fadeIn('fast');
			$('body').addClass('js-overflow-hidden');
	
			$layer.find($layerCloseBtn).click(function(e) {
				e.preventDefault();
				$layer.fadeOut('fast');
				$('body').removeClass('js-overflow-hidden');
			});
		},
	}
})(jQuery);

$(document).ready(function() {	

	/* 초기화 */
	// ------------------------------
		setup();
	// ------------------------------

	
});

// ------------------------------
//	Scroll
// ------------------------------
$(window).scroll(function(e) {
});	

// ------------------------------
//	Resize
// ------------------------------	
$(window).on('resize',function() {
});

// ------------------------------
// ------------------------------
// FUNCTIONS
// ------------------------------
// ------------------------------

// ------------------------------
function setup() {
	setInput();
	setMaterialSelect();
	ctrlPostDetailList();
}

// ------------------------------
//	Common
// ------------------------------

function setInput() {
	var $inputField = $('.input-field');
	var $input = $inputField.find('input');

	$input.focusin(function(){
		$(this).parents('.input-field').addClass('active');
	});
	$input.focusout(function(){
		$(this).parents('.input-field').removeClass('active');
	});

	// 검색input 삭제버튼 제어
	$input.on('keyup', function(e) {
		// value값 없으면
		if(!e.target.value){
			//return false;
			$(this).next('.input-search-clear').hide();
		}
		// value값 있으면
		else {
			$(this).next('.input-search-clear').show();
		}
	});
	$input.next('.input-search-clear').on('click', function(e) {
		$(this).hide();
		$(this).prev('input').val('');
	});

}

function setMaterialSelect() {
	var $materialSelect = $('.js-material-select');

	$materialSelect.each(function(idx, item) {
		$(item).formSelect();
	});
}


// ------------------------------
//	Contents
// ------------------------------
function ctrlPostDetailList() {
	var $postDetailList = $('#postDetailList');
	var $postDetailListItem = $postDetailList.find('.item');

	$postDetailListItem.each(function (idx, item) {
		var $editorArea = $(item).find('.js-editor-area');
		var $replyArea = $(item).find('.js-reply-area');
		var $btnMore = $(item).find('.js-btn-more');
		var $btnReply = $(item).find('.js-btn-reply');

		$btnMore.off('click').click(function(e) {
			e.preventDefault();
	
			$editorArea.toggleClass('open');
			if($editorArea.hasClass('open')) {
				$btnMore.find('b').text('접기');
			}
			else {
				$btnMore.find('b').text('더보기')
			}
		});

		$btnReply.off('click').click(function(e) {
			e.preventDefault();
	
			$replyArea.toggleClass('open');
	
		});		
		
	});

}

