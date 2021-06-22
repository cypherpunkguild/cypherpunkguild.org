//toggle menu
$('#menu').click(function() {
    $('.toggle').toggleClass('active');
});

//scroll
$('body').scrollspy({ target: '.header__nav' })

//liquid
$(function() {
    var header = $(".liquid");
    $(window).scroll(function() {
            var scroll = $(window).scrollTop();
    
            if (scroll >= 200) {
                    header.removeClass('liquid').addClass("liquid-alt");
            } else {
                    header.removeClass("liquid-alt").addClass('liquid');
            }
    });
});