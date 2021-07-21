$(document).ready(function(){


    // 헤더 스크롤값을 받아서 헤더의 높이를 줄여줌
    $('#header .gnb').on('mouseenter focusin', function() {

        if($(window).scrollTop() >= 200) {
            $('#header').stop().addClass("scrollOn");
            $('#header').stop().removeClass("on");
        } else {
            $('#header').stop().addClass("on");
            $('#header').stop().removeClass("scrollOn");
        }

    }).on('mouseleave focusout', function() {
        $('#header').stop().removeClass("on scrollOn");
    });


    $(window).scroll(function(e){
        e.preventDefault();

        if($(window).scrollTop() >= 200) {
            $('#header').addClass('scroll')
        } else {
            $('#header').removeClass('scroll');
        }
    });

    // 브랜드소개 탭메뉴
    $('.about_container .list_lnb li').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    
    // 브랜드소개 유튜브 기능 
    $('.youtube_wrap .btn_youtube').on('click', function(e) {
        e.preventDefault();
        $('.youtube_wrap .modal_youtube').show();
        $('.youtube_inner iframe').attr("src", 'https://www.youtube.com/embed/AYMpuJofWJw');
        
    });
    
    $('.modal_youtube .btn_close').on('click', function() {
        $('.youtube_wrap .modal_youtube').hide();
        $('.youtube_inner iframe').attr("src", 'about:blank');
    });

    // 메뉴페이지 탭메뉴
    $('.menu_container .menu_wrap:gt(0)').hide();
    $('.menu_container .list_lnb li').on('click', function(e) {
        e.preventDefault();
        var idx = $(this).index();
        
        $(this).addClass('active').siblings().removeClass('active');
        $('.menu_container .menu_wrap').eq(idx).show().siblings().hide();

    });
    
    // 매장찾기 도시선택 셀렉트기능 
    $('.input_wrap .btn').on('click', function() {
        $(this).siblings().toggleClass('on');
    });

    // 회원가입 약관동의 체크박스 
    $('.agree_all_box .agree_tit').on('click', function() {
        if($('.agree_all_box .agree_all').is(':checked')) {
            $('.agree_box .agree_check').prop('checked', false);
            $('.bottom_agree_box .agree_check').prop('checked', false);
        } else {
            $('.agree_box .agree_check').prop('checked', true);
            $('.bottom_agree_box .agree_check').prop('checked', true);
        }
    });

    // 탭메뉴
    $('.list_search li').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.list_search').prev().html($(this).text());
        $(this).parents('.list_search').removeClass('on');
    });


    // 퀵메뉴 Top버튼 이벤트
    var btnQuick = $('.quick_menu');
    var sc = 0;

    $(window).scroll(function(e) {
        sc = $(this).scrollTop();

        if(sc >= 200) {
            btnQuick.fadeIn();
        } else {
            btnQuick.fadeOut();
        }
    }).trigger('scroll');

    $('.quick_menu .quick_top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0});
    });


    // index 페이지 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        speed: 1000,
        loop: true,
        simulateTouch: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
      
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

    //   index 페이지 추천메뉴 슬라이더
      var drinkSlider = new Swiper(".main_drink_slider", {
        speed: 1000,
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      });
      
}); 
