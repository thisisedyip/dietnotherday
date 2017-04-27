(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
    // Enable Select Button (WTF! Why MaterializeCSS??)
    $('select').material_select();
    // Enable Carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
});
