$(function(){
	$('#navigation > dl').each(function(i){
		$(this).hover(function(){
			var _dd = $(this).find('dt').addClass('hover').next();
			if (i == 6) {
				_dd.css('width', '108px');
			}
			var _w = $(this).parent().parent().width();
			var _p = $(this).position().left;
			var _dw = _dd.width();
			var _offset = -2;
			if (_p + _dw > _w) {
				_dd.css('left', '-' + (_p + _dw - _w - _offset) + 'px');
			}
			_dd.show();
		}, function(){
			var _dd = $(this).find('dt').removeClass('hover').next();
			_dd.hide();
		});
	});
//	Tools.switchDiv('#i_login_wrap > .i_login > dl > dt > ul > li', 'slt', '#i_login_wrap > .i_login > dl > dd > .switch');
//	Tools.switchDiv('#i_container > .r > .i_case > .title > ul > li', 'slt', '#i_container > .r > .i_case > .text_wrap > .text > .switch');
//	new Rotator('#i_banner_rotator');
//	new Marquee('#marquee_01');
//	new Marquee('#marquee_02');
});