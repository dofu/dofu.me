// JavaScript Document

$(document).ready(function() {
	$(".thumb").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});


//This is for button helper

$(document).ready(function() {
	$(".thumb").fancybox({
		prevEffect		: 'elastic',
		nextEffect		: 'elastic',
		openEffect		: 'elastic',
		closeBtn		: false,
		helpers		: { 
			title	: { type : 'outside' },
			buttons	: {}
		}
	});
});

/*
$(document).ready(function() {
	$(".thumb").fancybox({
		prevEffect	: 'elastic',
		nextEffect	: 'elastic',
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				opacity : 0.8,
				css : {
					'background-color' : '#000',
					'border' : '1'
				}
			},
			thumbs	: {
				width	: 80,
				height	: 80
			}
		}
	});
});

*/