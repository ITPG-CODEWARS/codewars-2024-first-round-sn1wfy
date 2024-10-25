
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
});


$(window).on('scroll', function() {
    $('.section').each(function() {
        var sectionTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > sectionTop + 100) {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    });
    //
});
