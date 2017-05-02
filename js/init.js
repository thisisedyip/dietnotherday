(function($) {
    $(function() {
        //Enable Navbar
        $(".button-collapse").sideNav();
        //Enable Parallax
        $('.parallax').parallax();
        // Enable Carousel
        $('.carousel.carousel-slider').carousel({fullWidth: true});
        //Enable Scrollspy
        $(document).ready(function(){
          $('.scrollspy').scrollSpy();
        });
        // Enable Select Button (WTF! Why MaterializeCSS??)
        // $('select').material_select();
    }); // end of document ready
})(jQuery); // end of jQuery name space
