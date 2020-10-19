// side bar出現
$(document).ready(function () {
    $(window).scroll(function () {
        // $sideBar = $('.side__bar');
        $scrollPos = $(this).scrollTop();
        if ($scrollPos > 300) {
            $('.side__bar').addClass('side__bar--active');
        } else if ($scrollPos <= 300) {
            $('.side__bar').removeClass('side__bar--active');
        };
    })
})

// side bar item 激活
$(document).ready(function () {
    $(window).scroll(function () {
        $scrollPos = $(this).scrollTop();
        $header = $('#header');
        $mainContent = $('#main__content');
        $sponsors = $('#sponsors');
        $showCase = $('#showcase');
        $event = $('#event');

        if ($scrollPos > 400) {
            $('.side__bar li a:eq(0)').addClass('active');
            $('.side__bar li a:eq(0)').parent().siblings().find('a').removeClass('active');
        }
        if ($scrollPos > $mainContent.offset().top - 100) {
            $('.side__bar li a:eq(1)').addClass('active');
            $('.side__bar li a:eq(1)').parent().siblings().find('a').removeClass('active');
        }
        if ($scrollPos > $sponsors.offset().top - 100) {
            $('.side__bar li a:eq(2)').addClass('active');
            $('.side__bar li a:eq(2)').parent().siblings().find('a').removeClass('active');
        }
        if ($scrollPos > $showCase.offset().top - 100) {
            $('.side__bar li a:eq(3)').addClass('active');
            $('.side__bar li a:eq(3)').parent().siblings().find('a').removeClass('active');
        }
        if ($scrollPos > $event.offset().top - 140) {
            $('.side__bar li a:eq(4)').addClass('active');
            $('.side__bar li a:eq(4)').parent().siblings().find('a').removeClass('active');
        }
    })
})



// agenda 開合
$(document).ready(function () {
    $('.table__agenda__item').click(function () {
        $(this).find('.table__agenda__item__content').find('.table__agenda__item__content__detailinform').slideToggle();
        $(this).siblings().find('.table__agenda__item__content').find('.table__agenda__item__content__detailinform').slideUp();
    })
})

// 贊助商等級
$(document).ready(function () {
    $HighLevelContent = $('.high__level__content');
    $MiddleLevelContent = $('.middle__level__content');
    $LowLevelContent = $('.low__level__content');
    $('.high__level').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        if (!$HighLevelContent.hasClass('active')) {
            $HighLevelContent.addClass('active');
            $HighLevelContent.siblings().removeClass('active');
        }
    })
    $('.middle__level').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        if (!$MiddleLevelContent.hasClass('active')) {
            $MiddleLevelContent.addClass('active');
            $MiddleLevelContent.siblings().removeClass('active');
        }
    })
    $('.low__level').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        if (!$LowLevelContent.hasClass('active')) {
            $LowLevelContent.addClass('active');
            $LowLevelContent.siblings().removeClass('active');
        }
    })
})

// showcase
$(document).ready(function () {
    $('.product__title').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.product__box').removeClass('d-none');
        $('.theme__box').addClass('d-none');
    })
    $('.theme__title').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.product__box').addClass('d-none');
        $('.theme__box').removeClass('d-none');
    })
})

// page__link連結滾動
function menu_scroll(s_id) {
    var position = $("#" + s_id).offset().top;
    $('html, body').animate({
        scrollTop: position
    }, 'slow');
}
$(document).ready(function () {
    $(".nav-link, .page__link").click(function () {
        var s_id = $(this).attr("data-sec");
        menu_scroll(s_id);
    })
})