$(document).ready(function () {
    console.log('hello jquery');
    // dropdown 
    $('#navbarDropdow').click(() => {
        $('.dropdown-menu').toggleClass('show')
    })

    // review carousel - slick js
    $('.reviewContainer').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 1000,
      });
    




})