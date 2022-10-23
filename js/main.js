window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('box-shadow-navbar');
    } else {
        document.getElementById('navbar').classList.remove('box-shadow-navbar');
    }
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });
});