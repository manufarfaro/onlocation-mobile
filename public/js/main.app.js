
$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:3
  });

  $("#owl-demo").owlCarousel();
  $("#owl-demo2").owlCarousel();

});

$(document).ready(function(){
$("#owl-demo3").owlCarousel({

  autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]

 });
});
