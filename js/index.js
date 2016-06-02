$(document).ready(function($) {

	$('#videoheader').vide({
		mp4: "introAssets/intro.mp4",
		webm: "introAssets/intro.webm",
		poster: "introAssets/banner.jpg"
	}, {
		muted: true,
		loop: true,
		autoplay: true,
		position: "50% 50%",
		posterType: "detect",
		resizing: true,
		bgColor: 'transparent'

	});
	$('.form-control').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.inputPlaceholder').addClass('active');
		});
		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.inputPlaceholder').removeClass('active');
			}
		});
		if ($(this).val() != '') $(this).parent('.inputPlaceholder').addClass('active');
	});
});

$('.bar').click(function() {
	$(this).animate({
	height: "500px"
}, 500);
	if ($(this).hasClass('contact')) {
		$('.form').show()
	}else{
		$('.info').show()
	}
})

$('.bar').mouseleave(function() {
	$(this).animate({
	height: "200px"
}, 500);
	$('.info').hide()
	$('.form').hide()
})
