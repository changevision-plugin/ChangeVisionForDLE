$(function( $ ){
    var param = 'html, body, *:not(#changevision-on,#changevision-style,#changevision-style a, .ch_remove, .ch_font, .ch_color_scheme, .ch_images, .ch_img, .ch_line_height)';
    var methods = {
        init : function(options) {

            if (Cookies.get('open') == 'true') {
                methods.on();
                methods.font_size();
                methods.imagesX();
                methods.active();
                methods.line_height();
                methods.letter_spacing();
            }

            $('#changevision-ver').click(function(event) {
                event.preventDefault();
                Cookies.set('imagesX', 'on', { path: '/'});
                Cookies.set('font_size', '16px', { path: '/'});
                Cookies.set('active', '.ch_a-16', { path: '/'});
                Cookies.set('active_scheme', '.ch_white', { path: '/'});
                Cookies.set('open', 'true', { path: '/'});
                Cookies.set('color', 'color_white', { path: '/'});
                Cookies.set('line_height', 'off', { path: '/'});
                Cookies.set('letter_spacing', 'off', { path: '/'});
                methods.on();
                methods.imagesX();
                methods.font_size();
                methods.active();
                methods.line_height();
                methods.letter_spacing();
            });

            $('.ch_close').on('click',function(){
                Cookies.set('open', 'false', { path: '/'});
                methods.off();
            });

            $('.ch_green').on('click',function(){
                methods.color_green();
                $(Cookies.get('active_scheme')).removeClass('ch_active_scheme');
                Cookies.set('active_scheme', '.ch_green', { path: '/'});
                methods.active();
            });

            $('.ch_blue').on('click',function(){
                methods.color_blue();
                $(Cookies.get('active_scheme')).removeClass('ch_active_scheme');
                Cookies.set('active_scheme', '.ch_blue', { path: '/'});
                methods.active();
            });

            $('.ch_white').on('click',function(){
                methods.color_white();
                $(Cookies.get('active_scheme')).removeClass('ch_active_scheme');
                Cookies.set('active_scheme', '.ch_white', { path: '/'});
                methods.active();
            });

            $('.ch_black').on('click',function(){
                methods.color_black();
                $(Cookies.get('active_scheme')).removeClass('ch_active_scheme');
                Cookies.set('active_scheme', '.ch_black', { path: '/'});
                methods.active();
            });

            $('.ch_a-14').on('click',function(){
                Cookies.set('font_size', '14px', { path: '/'});
                methods.font_size();
                $(Cookies.get('active')).removeClass('ch_active');
                Cookies.set('active', '.ch_a-14', { path: '/'});
                methods.active();
            });

            $('.ch_a-16').on('click',function(){
                Cookies.set('font_size', '16px', { path: '/'});
                methods.font_size();
                $(Cookies.get('active')).removeClass('ch_active');
                Cookies.set('active', '.ch_a-16', { path: '/'});
                methods.active();
            });

            $('.ch_a-18').on('click',function(){
                Cookies.set('font_size', '18px', { path: '/'});
                methods.font_size();
                $(Cookies.get('active')).removeClass('ch_active');
                Cookies.set('active', '.ch_a-18', { path: '/'});
                methods.active();
            });

            $('.ch_a-24').on('click',function(){
                Cookies.set('font_size', '24px', { path: '/'});
                methods.font_size();
                $(Cookies.get('active')).removeClass('ch_active');
                Cookies.set('active', '.ch_a-24', { path: '/'});
                methods.active();
            });

            $('.ch_imagesOff').on('click',function(){
                Cookies.set('imagesX', 'off', { path: '/'});
                methods.imagesX();
            });

            $('.ch_imagesOn').on('click',function(){
                Cookies.set('imagesX', 'on', { path: '/'});
                methods.imagesX();
            });

            $('.ch_line_heightOn').on('click',function(){
                Cookies.set('line_height', 'on', { path: '/'});
                methods.line_height();
            });

            $('.ch_line_heightOff').on('click',function(){
                Cookies.set('line_height', 'off', { path: '/'});
                methods.line_height();
            });

            $('.ch_letter_spacingOn').on('click',function(){
                Cookies.set('letter_spacing', 'on', { path: '/'});
                methods.letter_spacing();
            });

            $('.ch_letter_spacingOff').on('click',function(){
                Cookies.set('letter_spacing', 'off', { path: '/'});
                methods.letter_spacing();
            });

        },
        on : function() {
            methods.active();
            if (Cookies.get('color') == 'color_green'){
                methods.color_green();
            }
            if (Cookies.get('color') == 'color_blue'){
                methods.color_blue();
            }
            if (Cookies.get('color') == 'color_white'){
                methods.color_white();
            }
            if (Cookies.get('color') == 'color_black'){
                methods.color_black();
            }
            $('#changevision-clear').css({'display':'none'});
			$('#changevision-on').css({'display':'block'});
       },
        off : function() {
            $('#changevision-clear').css({'display':'inline-block'});
			$('#changevision-on').css({'display':'none'});
            $(param).css({'background': '', 'color': '','font-size':'','letter-spacing': '','line-height': '','display':'','border-color':''});
            Cookies.remove('open', {path: '/'});
            Cookies.remove('color', {path: '/'});
            Cookies.remove('font_size', {path: '/'});
            Cookies.remove('imagesX', {path: '/'});
            Cookies.remove('active', {path: '/'});
            Cookies.remove('active_scheme', {path: '/'});
            Cookies.remove('line_height', { path: '/'});
            Cookies.remove('letter_spacing', { path: '/'});
        },
        color_green : function() {
            $(param).css({'background': '#3B2716', 'color': '#A9E44D', 'border-color': '#A9E44D'});
            Cookies.set('color', 'color_green', { path: '/'});
        },
        color_blue : function() {
            $(param).css({'background': '#9DD1FF', 'color': '#063462', 'border-color': '#063462'});
            Cookies.set('color', 'color_blue', { path: '/'});
        },
        color_white : function() {
            $(param).css({'background': '#ffffff', 'color': '#000000', 'border-color': '#000000'});
            Cookies.set('color', 'color_white', { path: '/'});
        },
        color_black : function() {
            $(param).css({'background': '#000000', 'color': '#ffffff', 'border-color': '#ffffff'});
            Cookies.set('color', 'color_black', { path: '/'});
        },
        font_size : function() {
            $(param).css({'font-size': Cookies.get('font_size')});
        },
        imagesX : function() {
            if (Cookies.get('imagesX') == 'on') {
                $('img:not(.ch_remove .ch_img,#changevision-ver .ch_img, .ch_img)').css({'display': 'inline-block'});
                $('.ch_imagesOn').css({'display': 'none'});
                $('.ch_imagesOff').css({'display': 'inline-block'});
            } else {
                $('img:not(.ch_remove .ch_img,#changevision-ver .ch_img, .ch_img)').css({'display': 'none'});
                $('.ch_imagesOff').css({'display': 'none'});
                $('.ch_imagesOn').css({'display': 'inline-block'});

            }
        },
        active : function() {
            if (Cookies.get('active')) {
                $(Cookies.get('active')).addClass('ch_active');
            }
            if (Cookies.get('active_scheme')) {
                $(Cookies.get('active_scheme')).addClass('ch_active_scheme');
            }
        },
        line_height : function() {
            if (Cookies.get('line_height') == 'on') {
                $(param).css({'line-height': '2'});
                $('.ch_line_heightOn').css({'display': 'none'});
                $('.ch_line_heightOff').css({'display': 'inline-block'});
            } else {
                $(param).css({'line-height': ''});
                $('.ch_line_heightOff').css({'display': 'none'});
                $('.ch_line_heightOn').css({'display': 'inline-block'});
            }
        },
        letter_spacing : function() {
            if (Cookies.get('letter_spacing') == 'on') {
                $(param).css({'letter-spacing':'2px'});
                $('.ch_letter_spacingOn').css({'display': 'none'});
                $('.ch_letter_spacingOff').css({'display': 'inline-block'});
            } else {
                $(param).css({'letter-spacing': ''});
                $('.ch_letter_spacingOff').css({'display': 'none'});
                $('.ch_letter_spacingOn').css({'display': 'inline-block'});
            }
        }
    };

    $.fn.vision = function( method ) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует' );
        }
    };

});
jQuery( document ).ready(function( $ ) {
    $.fn.vision('init');
});