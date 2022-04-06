$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.main-menu').addClass('act');
        } else {
            $('.main-menu').removeClass('act');
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

    /* Progress bar */
    var $section = $('.section-skills');

    function loadDaBars() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    }

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    /* Counters  */
    if ($(".section-counters .start").length > 0) {
        $(".section-counters .start").each(function() {
            var stat_item = $(this),
                offset = stat_item.offset().top;
            $(window).scroll(function() {
                if ($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

    // another custom callback for counting to infinity
    $('#infinity').data('countToOptions', {
        onComplete: function(value) {
            count.call(this, {
                from: value,
                to: value + 1
            });
        }
    });

    $('#infinity').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Navigation overlay
    var s = skrollr.init({
        forceHeight: false,
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        }
    });

    function delay(delayInms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }




});


$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});


// mailchimp addition
! function(c, h, i, m, p) {
    m = c.createElement(h),
        p = c.getElementsByTagName(h)[0],
        m.async = 1,
        m.src = i,
        p.parentNode.insertBefore(m, p)
}
(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/da48ecb7a5439e08f4de18e0e/62efe0fa326501c4f252e2507.js");