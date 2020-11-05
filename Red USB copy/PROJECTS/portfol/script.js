$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(this).toggleClass("change");
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 105.47){
            $(".navbar").addClass("navbar-background");
            $(".navbar").addClass("fixed-top");
        }else{
           $(".navbar").removeClass("navbar-background");
           $(".navbar").removeClass("fixed-top");
        }
    });
    
    let $grid = $('.grid').isotope({
  // options
   });
// filter items on button click
   $('.filter-button-group').on( 'click', 'button', function() {
      let filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
   });
    $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
   });
});


