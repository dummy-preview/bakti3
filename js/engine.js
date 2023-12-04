$(document).ready(function() {
    // s backtotop
    var toggleHeight = $(window).outerHeight() * 1;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // e backtotop
    // $('.image-popup').magnificPopup({
    //     type: 'image',
    //     mainClass: 'mfp-with-zoom',
    //     gallery: {
    //         enabled: true
    //     },

    //     zoom: {
    //         enabled: true,

    //         duration: 300,
    //         easing: 'ease-in-out',

    //         opener: function(openerElement) {

    //             return openerElement.is('img') ? openerElement : openerElement.find('img');
    //         }
    //     }

    // });

});
// swiper
// var swiper = new Swiper('.swiper-container', {
//     loop: true,
//     pagination: ".swiper-pagination",
//     effect: 'ease',
//     speed: 1000,
//     slidesPerView: '1',
//     paginationClickable: true,
//     autoplay: false,
//     spaceBetween: 30,
//     centeredSlides: true,
//     effect: "slide",
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },

// });

// const gallerySlider = new Swiper(".swiper.is-gallery", {
//     loop: true,
//     slidesPerView: 2,
//     centeredSlides: true,
//     speed: 300,
//     grabCursor: true,
//     parallax: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     },
// });

// animated
// bodymovin
// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('sepeda'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'img/hero/sepeda.json',
//     name: 'myAnimation',
// });

// parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
});