$(document).ready(function() {
    if ($(window).load(function() {
            $(".loader").delay(3500).fadeOut("slow", function() {
                $(this).remove()
            })
        }))
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

    // q1
    $('#a-a').click(function() {
        $('.quiz-final1').fadeIn();
        $('.quiz-final2').fadeOut();
        $('.quiz-final3').fadeOut();
        $('.quiz-final4').fadeOut();
    });
    $('#a-b').click(function() {
        $('.quiz-final2').fadeIn();
        $('.quiz-final1').fadeOut();
        $('.quiz-final3').fadeOut();
        $('.quiz-final4').fadeOut();
    });
    $('#a-c').click(function() {
        $('.quiz-final3').fadeIn();
        $('.quiz-final2').fadeOut();
        $('.quiz-final1').fadeOut();
        $('.quiz-final4').fadeOut();
    });
    $('#a-d').click(function() {
        $('.quiz-final4').fadeIn();
        $('.quiz-final2').fadeOut();
        $('.quiz-final3').fadeOut();
        $('.quiz-final1').fadeOut();
    });
    // q2
    $('#a-m').click(function() {
        $('.quiz-final22').fadeIn();
        $('.quiz-final11').fadeOut();

    });
    $('#a-f').click(function() {
        $('.quiz-final11').fadeIn();
        $('.quiz-final22').fadeOut();

    });
    // list 
    $('.list1').click(function() {
        $('.list1').addClass('show-list');
        $('.show-1').fadeIn();
    });
    $('.list2').click(function() {
        $('.list2').addClass('show-list');
        $('.show-2').fadeIn();
    });
    $('.list3').click(function() {
        $('.list3').addClass('show-list');
        $('.show-3').fadeIn();
    });
    $('.list4').click(function() {
        $('.list4').addClass('show-list');
        $('.show-4').fadeIn();
    });


});

// animated
// bodymovin
var animation = bodymovin.loadAnimation({
    container: document.getElementById('people'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont3/people.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('tentara1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/tentara1.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('tentara2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont2/tentara2.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('land'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/sectiont4/people.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('loader'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'img/loader.json',
    name: 'myAnimation',
});

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
// scroll smoth
$(function() {
    jQuery.scrollSpeed(250, 1700);
});