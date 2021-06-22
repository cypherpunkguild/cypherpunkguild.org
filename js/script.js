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

//copy to clipboard
spans = document.querySelectorAll(".copy");
for (const span of spans) {
  span.onclick = function() {
    document.execCommand("copy");
  }

  span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
}