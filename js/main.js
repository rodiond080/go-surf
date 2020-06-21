$(function(){

$('.header__slider').slick({
    infinite:true,
    fade:true,
    prevArrow: '<img class="slider-arrors slider-arrors__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrors slider-arrors__right" src="img/arrows-right.svg" alt="">',
    asNavFor:'.slider-dotshead'
});

$('.slider-dotshead').slick({
    slidesToShow:4,
    slidesToScroll:4,
    asNavFor:'.header__slider',
    responsive:[
        {
            breakpoint: 961,
            settings:"unslick"
        }
    ]
});

$('.serf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrors slider-arrors__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrors slider-arrors__right" src="img/arrows-right.svg" alt="">',
    asNavFor:'.slider-map',
    responsive:[
        {
            breakpoint:1210,
            settings:{
                slidesToShow:3,
                infinite:true,
            }
        },
        {
            breakpoint:900,
            settings:{
                slidesToShow:2,
                infinite:true,
            }
        },
        {
            breakpoint:720,
            settings:{
                slidesToShow:1,
                infinite:true,
                centerMode:true
            }
        },
        {
            breakpoint:426,
            settings:{
                slidesToShow:1,
                infinite:true,
                centerMode:false
            }
        },
    ]
});

$('.slider-map').slick({
    slidesToShow:8,
    slidesToScroll:1,
    arrows:false,
    asNavFor:'.serf__slider',
    focusOnSelect:true,
    responsive:[
        {
            breakpoint:1103,
            settings:{
                slidesToShow:3,
                infinite:true,
            }
        },
        {
            breakpoint:900,
            settings:{
                slidesToShow:2,
                infinite:true,
                centerMode:true
            }
        },
        {
            breakpoint:720,
            settings:{
                slidesToShow:1,
                infinite:true,
                centerMode:true
            }
        },
    ]
});

$('.holder__slider, .shop__slider').slick({
    infinite:true,
    fade:true,
    prevArrow: '<img class="slider-arrors slider-arrors__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrors slider-arrors__right" src="img/arrows-right.svg" alt="">',
})




$('<div class="quantity-nav">' +
    '<div class="quantity-button quantity-up">' +
    '<img src="img/plus.png" alt="">' +
    '</div>' +
    '<div class="quantity-button quantity-down">' +
    '<img src="img/minus.svg" alt="">' +
    '</div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

$('.quantity-button').on('click', function () {
    let summ = $('.nights').val() * $('.summ').data('nights')+($('.guests').val()-1)*$('.summ').data('guests');
    $('.summ').html('$'+summ);
})

$('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active')
})

new WOW().init();

$('.menu-btn').on('click',function () {
    $('.menu').toggleClass('active');
})

});