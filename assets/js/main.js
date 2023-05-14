$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

     // Magnific popup
    //  $('.video-icon').magnificPopup({
    //     type: 'iframe',
    //     iframe: {
    //         patterns: {
    //             youtube: {
    //                 index: 'https://www.youtube.com/',

    //                 id: 'v=',
    //                 src: 'https://www.youtube.com/embed/%id%?autoplay=1'
    //             }

    //         },
    //         srcAction: 'iframe_src',
    //     }
    //  });
/*JS isn't my expertise 😉*/
$(document).ready(function() {
    $("#menuButton").on("click", function(){
        $(".side-a").toggleClass("is-open");
        $("html").toggleClass("is-nav-open");
    });
      $("#darkMode").on("click", function(){
        $("html").toggleClass("is-dark");
    });
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$(function () {
    $('.nav-tooltip').tooltip()
  })


}(jQuery));