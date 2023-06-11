$(document).ready(function(){
   let slider = $('.portraitBig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.portraitSmall'
    });

    $('.portraitSmall').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.portraitBig',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


    slider.on('afterChange', function(event, slick, currentSlide) {
        let articles = $('.biography').find('.article');
        articles.removeClass('active');
        $(articles[currentSlide]).addClass('active');
    });

});


