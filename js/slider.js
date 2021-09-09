window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-list'), {
    sslidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel-indicators',
    arrows: {
        prev: '.carousel-back',
        next: '.carousel-next'
        }    
    });
});

window.addEventListener('load', function(){
new Glider(document.querySelector('.carousel-list-2'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel-indicators-2',
    arrows: {
        prev: '.carousel-back',
        next: '.carousel-next'
        }    
    
    });
});










