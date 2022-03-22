let owlService = $('.owl-service').owlCarousel({
     animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     loop:true,
     margin:10,
     nav:false,
     dots:false,
     center:true,
     URLhashListener:true,
     startPosition:'zero',
    //  autoplay:true,
    //  autoplayTimeout:4000,
    //  autoplayHoverPause:true,
     lazyLoad:true,
     stagePadding: 50,
     rtl:false,
     autoHeight:true,
     responsive:{
       0:{
         items:1
       },
       600:{
         items:3
       },
       1000:{
         items:5
       }
     }
});

$('#previous').click(function(){
  owlService.trigger('prev.owl.carousel');
});

$('#next').click(function(){
   owlService.trigger('next.owl.carousel');
});


