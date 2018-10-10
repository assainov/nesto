$(function () {
    
    $('.top_menu li a, .menu a').each(function () { 
        // получаем адрес страницы
        var location = window.location.href; 
        // получаем адрес ссылки
        var link = this.href;                
        
        // при совпадении адреса ссылки и адреса окна
        if(location == link) {               
            $(this).addClass('current_page');  
        }
        else {
            $(this).removeClass('current_page');
        }

    });
    
    // dropdown service
    $('.open_dropdown').click(function () {
        $('.dropdown').fadeToggle(200);
        $('.top_menu .icon-angle-down').toggleClass('rotate');
    });
    
    
    // city pick
    $('.pick-city').click(function () {
        $('.pick-city .icon-angle-down').addClass('rotate');
        $('.select-city').show();
    });
    
    $('.select-city li').click(function () {
        $('.select-city').fadeOut(200);
        $('.pick-city .icon-angle-down').removeClass('rotate');
        $('#city').val( $(this).text() );
        
    });

    // date pick 
    $('.pick-date').click(function () {
        $('.pick-date .icon-angle-down').addClass('rotate');
    });


    //календарь

    $( "#date" ).datepicker({
        minDate: new Date(),
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
                     'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
                     'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['вс','пн','вт','ср','чт','пт','сб'],
        firstDay: 1,
        dateFormat: 'dd/mm/yy',
        inline : true
    });

    if ($(window).width() < 480) {
        $('.output_row').append(
            $('#city').val() + ', ' + 
            $('#date').val() + ', ' + 
            $('#start').val() + ' - ' + 
            $('#end').val()
        );
    }
    
    // pick time
    $('#time').click(function () {
        $('.timepick').fadeIn(200);
        $('.time_row').show();
        $(this).removeAttr('placeholder');
        $('.timepick_open .icon-angle-down').addClass('rotate');

    });
    
    
    $('.time_row').click(function () {
        $('.timepick').fadeIn(200);
        $('.timepick_open .icon-angle-down').addClass('rotate');
        
    });
  
    
    $('.time_start li').not(':first').click(function () {
        var stVl = $('#start').val( $(this).text() );
        $('.time_start li').removeClass('selected');
        $(this).addClass('selected');
    
    });
    $('.time_end li').not(':first').click(function () {
        var enVl = $('#end').val( $(this).text() );
        $('.time_end li').removeClass('selected');
        $(this).addClass('selected');
        $('.timepick').fadeOut(200);
        $('.timepick_open .icon-angle-down').removeClass('rotate');
        
    });

    // price pick
    $('.price_open').click(function () {
        $('.price_open .icon-angle-down').addClass('rotate');
        $('.price-list').show();
    });

    $('.price-list li').click(function () {
        $('.price-list').fadeOut(200);
        $('.price_open .icon-angle-down').removeClass('rotate');
        $('#price').val( $(this).text() );

    });
    
    // закрытие по клику области
    $(document).mouseup(function (e) {
        var DatePick = $('.pick-date');
        var TimePick = $('.timepick');
        var CityPick = $('.select-city');
        var pricePick = $('.price-list');

        if (DatePick.has(e.target).length === 0){
            $('.pick-date .icon-angle-down').removeClass('rotate');
        }

        if (TimePick.has(e.target).length === 0){
            $('.timepick').fadeOut(200);
            $('.timepick_open .icon-angle-down').removeClass('rotate');

        }
        if (CityPick.has(e.target).length === 0){
            $('.select-city').fadeOut(200);
            $('.pick-city .icon-angle-down').removeClass('rotate');
        }
        if (pricePick.has(e.target).length === 0){
            $('.price-list').fadeOut(200);
            $('price_open .icon-angle-down').removeClass('rotate');
        }

    });
    
    // избранное
    $('.catalog .icon-bookmark-empty').not('#favourites .catalog .icon-bookmark-empty').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active') ) {
            $.notify('Добавлено в избранное', {
                position: 'right bottom',
                autoHide: true,
                autoHideDelay: 2500,
                style: 'added',
                className: 'addStyle'
            });
        }
    });
    
    // dropdown lang
    $('.lang-link').click(function () {
        $('.dropdown-lang').fadeToggle(200);
        $('.lang .icon-angle-down').toggleClass('rotate');
    });
    
    // pagination active page
    
    $('.pagination a').click(function () {
        $('.pagination a').removeClass('current');
        $(this).addClass('current');
    });
    
    $('#catalog button').click(function () {
        $('#time').attr('placeholder', 'Время');
        $('.time_row').hide();
    });
    
    // add to fav
    $('.add-fav').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active') ) {
            $.notify('Добавлено в избранное', {
                position: 'right bottom',
                autoHide: true,
                autoHideDelay: 2500,
                style: 'added',
                className: 'addStyle'
            });
        }
    });
    
    
    // ban
    $('.ban').click(function () {
        $('.icon-cross').toggleClass('active');
        $('.ban span').toggleClass('active');
        $('#info-popup').css({'opacity' : '1', 'z-index' : '999'});
        $('#complaint .info').css({'z-index' : '999'});
        $('#complaint').show();
        $('body').css({'overflow' : 'hidden', marginRight:scrollbarWidth()});
        $('#catalog_inner').addClass('blur');
        
    });
    $('.btn-send').click(function () {
        $('#complaint').hide();
        $('#success').show();
    });
    
    $('.order-info button').click(function () {
        $('#order').css({'opacity' : '1', 'z-index' : '99'});
        $('.order-content').css({'z-index' : '999'});
        $('#request-confirm').show();
        $('body').css({'overflow' : 'hidden', marginRight:scrollbarWidth()});
        $('#catalog_inner').addClass('blur');
    });
    
    $('.back, .order-confirm .ok').click(function () {
        $('#order').css({'opacity' : '0', 'z-index' : '0'});
        $('.order-content').css({'z-index' : '0'});
        $('#order-confirm').hide();
        $('body').css({'overflow' : 'auto', marginRight:0});
        $('#catalog_inner').removeClass('blur');
    });
    
    $('#close-success').click (function () {
        $('#info-popup').css({'opacity' : '0', 'z-index' : '-1'});
        $('#success').hide();
        $('#catalog_inner').removeClass('blur');
        $('body').css({'overflow' : 'auto', marginRight : 0});
        $('.icon-cross').toggleClass('active');
        $('.ban span').toggleClass('active');
    });
    
    $('.order-pagination li, .data-link').on('click', function() {
        var tab_id = $(this).attr('data');

        $('.order-pagination li').removeClass('active');
        $('.content-form').removeClass('current');

        $(this).addClass('active');
        $("#"+tab_id).addClass('current');
        
        $("."+tab_id).addClass('active');
    });
    
    
    $('.send').click(function () {
        $('#order-confirm').show();
        $('#request-confirm').hide();
    });
    
    $('.input-file-layer').click (function () {
        $('.input-file-layer label').text('');
    });
    
    
    $('#reg_page button.next').click (function () {
        $('#input-data.container').hide();
        $('#input-code.container').show();
    });
    $('#reg_page button.gray').click (function () {
        $('#input-code.container').hide();
        $('#input-password.container').show();
    });
    $('#input-password button.gray').click (function () {
        $('#input-password.container').hide();
        $('#reg-success.container').show();
    });
    $('#step-1').click (function () {
        $('#pass-rec.container').hide();
        $('#input-password.container').show();
    });
    $('.remove-page').click (function () {
        $('#account').addClass('blur');
        $('#remove-modal').show();
    });
    $('.yes, .no').click (function () {
        $('#remove-modal').hide();
        $('#account').removeClass('blur');
    });
    
    
    // add comfort
    $('#add-to-list-comfort').click (function () {
        var txtToOut = $('#enter-text-comfort').val();
        $('.output-comfort').append('<li>' + txtToOut + '</li>');
        $('#enter-text-comfort').val('');
    });

    $('#enter-text-comfort').on ('focus' , function () {
        $('#enter-text-comfort').val('');
    });
    // add safety
    $('#add-to-list-safety').click (function () {
        var txtToOut = $('#enter-text-safety').val();
        $('.output-safety').append('<li>' + txtToOut + '</li>');
        $('#enter-text-safety').val('');
    });

    $('#enter-text-safety').on ('focus' , function () {
        $('#enter-text-safety').val('');
    });
    
    // add car-rules
    $('#add-to-list-car-rules').click (function () {
        var txtToOut = $('#enter-text-car-rules').val();
        $('.output-car-rules').append('<li>' + txtToOut + '</li>');
        $('#enter-text-car-rules').val('');
    });

    $('#enter-text-car-rules').on ('focus' , function () {
        $('#enter-text-car-rules').val('');
    });
    
    
    
    // открыть список с марками авто
    $('#auto-mark').click( function () {
        $('.auto-mark').slideToggle(200);
        $('.mark_ .icon-angle-down').toggleClass('rotate');
    });
    $('.auto-mark li').click (function () {
        $('#auto-mark').val($(this).text());
        $('.auto-mark').slideToggle(200);
        $('.mark_ .icon-angle-down').toggleClass('rotate');
    });
    
    // открыть список с моделями авто
    $('#auto-model').click( function () {
        $('.auto-model').slideToggle(200);
        $('.model_ .icon-angle-down').toggleClass('rotate');
    });
    $('.auto-model li').click (function () {
        $('#auto-model').val($(this).text());
        $('.auto-model').slideToggle(200);
        $('.model_ .icon-angle-down').toggleClass('rotate');
    });
    
    // открыть список цвет авто
    $('#auto-color').click( function () {
        $('.auto-color').slideToggle(200);
        $('.color_ .icon-angle-down').toggleClass('rotate');
    });
    $('.auto-color li').click (function () {
        $('#auto-color').val($(this).text());
        $('.auto-color').slideToggle(200);
        $('.color_ .icon-angle-down').toggleClass('rotate');
    });
    
    // открыть список количество дверей
    $('#auto-doors').click( function () {
        $('.auto-doors').slideToggle(200);
        $('.doors_ .icon-angle-down').toggleClass('rotate');
    });
    $('.auto-doors li').click (function () {
        $('#auto-doors').val($(this).text());
        $('.auto-doors').slideToggle(200);
        $('.doors_ .icon-angle-down').toggleClass('rotate');
    });
    
    // открыть список количество дверей
    $('#auto-passengers').click( function () {
        $('.auto-passengers').slideToggle(200);
        $('.passengers_ .icon-angle-down').toggleClass('rotate');
    });
    $('.auto-passengers li').click (function () {
        $('#auto-passengers').val($(this).text());
        $('.auto-passengers').slideToggle(200);
        $('.passengers_ .icon-angle-down').toggleClass('rotate');
    });
    
    // открыть список выбор города
    $('#auto-city').click( function () {
        $('.auto-city').slideToggle(200);
        $('.city_ .icon-angle-down').toggleClass('rotate');
    });
    $('.auto-city li').click (function () {
        $('#auto-city').val($(this).text());
        $('.auto-city').slideToggle(200);
        $('.city_ .icon-angle-down').toggleClass('rotate');
    });
    
    
    
    // input number
    $('.minus').click(function () {
        var $input = $(this).parent().find('.set-number');
        var count = parseInt($input.val()) - 1;
//        count = count < 1 ? 1 : count;
        if(count<0) count = 23;
        if(count.toString().length<2) count = '0'+count;
        count = $input.hasClass('percent') ? count + '%' : count;
        count = $input.hasClass('set-time') ? count + '.00' : count;
        count = $input.hasClass('set-hours') ? count + ' ч.' : count;
        count = $input.hasClass('set-month') ? count + ' мес.' : count;
        $input.val(count);
        $input.change();
        return false;
        });
    $('.plus').click(function () {
        var $input = $(this).parent().find('.set-number');
        var count_plus = parseInt($input.val()) + 1;
       
        

        if(count_plus>23) count_plus = 0;
        if(count_plus.toString().length<2) count_plus = '0'+count_plus;
        console.log(count_plus.length);

        count_plus = $input.hasClass('percent') ? count_plus + '%' : count_plus;
        count_plus = $input.hasClass('set-time') ? count_plus + '.00' : count_plus;
        count_plus = $input.hasClass('set-hours') ? count_plus + ' ч.' : count_plus;
        count_plus = $input.hasClass('set-month') ? count_plus + ' мec.' : count_plus;
        $input.val(count_plus);
        
        $input.change();
        return false;
    });

    
    
    $('.toggle').click(function () {
        $(this).toggleClass('full-height');
        $(this).find('.icon-angle-down').toggleClass('rotate');
    });
    

    $('.remove-img').click(function () {
        $(this).closest('.ui-state-default').remove();
    });
   
    // select all day
    $('#day_all').click(function() {
        if ( $(this).is(':checked') ) {
            $('.shedule :checkbox').prop('checked', true);
        } else {
            $('.shedule :checkbox').prop('checked', false);
        }
    });

    $('.time-settings .row_block .option').addClass('active');
    $('.time-settings .num-cell').addClass('active');
    
    
    $('a.scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 0
                }, 550);
                return false;
            }
        }
    });

});   




function scrollbarWidth() {
    var div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width =  '20px';
    div.style.height = '20px';

    div.style.none = 'hidden';

    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    return scrollWidth;
}

/* Отображение текста в input file */
function getName (str) {
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }

    else {
        var i = str.lastIndexOf('/')+1;
    }

    var filename = str.slice(i);			
    var uploaded = document.getElementById("input-file");
    uploaded.innerHTML = filename;
}



var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
//    pagination: '.swiper-pagination',
    scrollbar: false,
    speed: 550,
    centeredSlides: false,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView : 4,
    loop: false,
    breakpoints: {
        480: {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
        }
    }
});


var swiper = new Swiper('.catalog-inner', {
    pagination: '.swiper-pagination',
    scrollbar: false,
    speed: 550,
    centeredSlides: false,
    spaceBetween: 0,
    grabCursor: false,
    slidesPerView : 1,
    loop: false,
    paginationClickable : true
});

var swiper = new Swiper('.articles', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    //    pagination: '.swiper-pagination',
    scrollbar: false,
    speed: 1000,
    centeredSlides: false,
    spaceBetween: 20,
    grabCursor: false,
    slidesPerView : 3,
    loop: true,
    autoplay : '5000',
    observer : true,
    breakpoints: {
        480: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: false,
            autoplay : false,
        }
    }
});
//$(".articles").hover(function(){
//    swiper.stopAutoplay();
//}, function(){
//    swiper.startAutoplay();
//});

    var swiper = new Swiper('#draggable', {
        nextButton: false,
        prevButton: false,
        scrollbar: false,
        speed: 500,
        centeredSlides: false,
        spaceBetween: 10,
        grabCursor: false,
        slidesPerView : 5,
        loop: false,
        observer : true,
        simulateTouch: false,
        breakpoints: {
            480: {
                slidesPerView: 'auto',
            }
        }
    });


    // progress bar animation

    var progressbar = $('#progressbar'),
        max = progressbar.attr('max'),
        value = progressbar.val(),
        time = (1000/max)*5;

    var loading = function() {
        value += 5;
        addValue = progressbar.val(value);
        $('.progress-value').html(value + '%');
        if (value == max) {
            clearInterval(animate);
        }

    }
    var animate = setInterval(function() {
            loading();
        }, time);


/*
    // video player
    var video;
    var display;

    window.onload = function() {
        video = document.getElementById("watchVideo");
    };

    function play() {
        video.play();
    }

    function pause() {
        video.pause();
    }

    $('.video-play').click(function () {
        $(this).hide();
        $('#watchVideo').css({'z-index' : '1'});
        $('.video-pause').show();
        $('.toggled .h2, .toggled p').hide();

    });

    $('.video-pause').click(function () {
        $(this).hide();
        $('.video-play').show();
    });

    $("#watchVideo").bind("ended", function() {
        $('.toggled .h2, .toggled p').show();
        $('.video-pause').hide();
        $('.video-play').show();
    });


    var vid = $('video');
    var vid_w_orig = 1920;
    var vid_h_orig = 1080;

    // re-scale image when viewport resizes
    $(window).resize(function(){

        // get the parent element size
        var container_w = vid.parent().width();
        var container_h = vid.parent().height();

        // use largest scale factor of horizontal/vertical
        var scale_w = container_w / vid_w_orig;
        var scale_h = container_h / vid_h_orig;
        var scale = scale_w > scale_h ? scale_w : scale_h;

        // scale the video
        vid.width(scale * vid_w_orig);
        vid.height(scale * vid_h_orig);

    });

*/ 
    $('.menu-icon').click (function () {
        $(this).hide();
        $('body').css({'overflow':'hidden'});
        $('.top_menu').fadeIn(150); 
        $('.close-menu').show();
        $('.mobile-footer').fadeIn(150); 
        $('#bookmark-total').show();
    });
    $('#info .menu-icon, #favourites .menu-icon').click (function () {
        $('a.logo').removeClass('red');
    });
        $('#info .close-menu, #favourites .close-menu').click (function () {
        $('a.logo').addClass('red');
    });
    $('.close-menu').click (function () {
        $(this).hide();
        $('body').css({'overflow':'auto'});
        $('.top_menu').hide(); 
        $('.menu-icon').show();
        $('.mobile-footer').hide(); 
        $('#bookmark-total').hide();
        
    });
    
    $('.logo-mobile').click (function () {
        $('#catalog .head-fixed').toggleClass('toggle');
        $('#catalog #search').slideToggle(350);
        $('.logo-mobile .icon-angle-down').toggleClass('rotate');
        
    });
    

    if ($(window).width() < 480) { 
        $('.driver-info').appendTo('.driver-info-mobile');
        $('a.logo-mobile').click(function() {
            $('.right_block').slideToggle(350);
            $(this).toggleClass('active');
        });
        

        $('.div-text').click(function() {
            $('.right_block').slideToggle(350);
            $('a.logo-mobile').toggleClass('active');
        });
        $('#account .top_menu ul').appendTo('#account .menu');
        $('#account .menu-i').click(function() {
            $('.menu').slideToggle(250);
        });
    
        
    }
    
   