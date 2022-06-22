var $btnIcon = $('#btn i')
var $bodyStatus = $('body')
// 変数名の頭に＄をつけると、jQueryのオブジェクトが入っているということが明示されているので、分かりやすい


$('#btn').on('click', function () {
	$bodyStatus.toggleClass('open')

	// console.log($('body').hasClass('open'))
	if ($bodyStatus.hasClass('open')) {
		$btnIcon
			.removeClass('ri-menu-line')
			.addClass('ri-close-line')
	} else {
		$btnIcon
			.removeClass('ri-close-line')
			.addClass('ri-menu-line')
	}

})