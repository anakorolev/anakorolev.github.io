$(document).ready(function(){

            $( ".about" ).click(function() {
                $( ".contact-text-container" ).hide( "slow" );
                $(".about-text-container").show( "slow" );
                $(".art-text-container").hide("slow");
                $(".cs-text-container").hide("slow");

                $(".about").css("font-weight", "700");
                $(".art").css("font-weight", "300");
                $(".cs").css("font-weight", "300");
                $(".contact").css("font-weight", "300");
                $(".triangle-up").css("display", "block");
                $(".triangle-up").css("bottom", "171px");
                $(".triangle-up").css("left", "25%");
            });

            $( ".logo" ).click(function() {
                $( ".contact-text-container" ).hide( "slow" );
                $(".about-text-container").show( "slow" );
                $(".art-text-container").hide("slow");
                $(".cs-text-container").hide("slow");

                $(".about").css("font-weight", "700");
                $(".art").css("font-weight", "300");
                $(".cs").css("font-weight", "300");
                $(".contact").css("font-weight", "300");
                $(".triangle-up").css("display", "block");
                $(".triangle-up").css("bottom", "171px");
                $(".triangle-up").css("left", "25%");
            });

            $( ".art" ).click(function() {
                $( ".contact-text-container" ).hide( "slow" );
                $(".about-text-container").hide( "slow" );
                $(".art-text-container").show("slow");
                $(".cs-text-container").hide("slow");

                $(".about").css("font-weight", "300");
                $(".art").css("font-weight", "700");
                $(".cs").css("font-weight", "300");
                $(".contact").css("font-weight", "300");
                $(".triangle-up").css("display", "block");
                $(".triangle-up").css("bottom", "234px");
                $(".triangle-up").css("left", "26%");
            });

            $( ".cs" ).click(function() {
                $( ".contact-text-container" ).hide( "slow" );
                $(".about-text-container").hide( "slow" );
                $(".art-text-container").hide("slow");
                $(".cs-text-container").show("slow");

                $(".about").css("font-weight", "300");
                $(".art").css("font-weight", "300");
                $(".cs").css("font-weight", "700");
                $(".contact").css("font-weight", "300");
                $(".triangle-up").css("display", "block");
                $(".triangle-up").css("bottom", "234px");
                $(".triangle-up").css("left", "73%");
            });

            $( ".contact" ).click(function() {
                $( ".contact-text-container" ).show( "slow" );
                $(".about-text-container").hide( "slow" );
                $(".art-text-container").hide("slow");
                $(".cs-text-container").hide("slow");

                $(".about").css("font-weight", "300");
                $(".art").css("font-weight", "300");
                $(".cs").css("font-weight", "300");
                $(".contact").css("font-weight", "700");
                $(".triangle-up").css("display", "block");
                $(".triangle-up").css("bottom", "171px");
                $(".triangle-up").css("left", "76%");
            });


var currentIndex = 0,
  items = $('.slideshow div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slideshow div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});
    // if(document.getElementById( 'menu-slide' ).style.right == '0px'){
    //     $(".menu-item-container").fadeOut(0);
    // }
    
    document.getElementById( 'slide' ).addEventListener( 'click', function() {
        var menuItem = document.getElementById( 'menu-slide' );
        if(this.style.right == '0px' && menuItem.style.left == '820px'){
            this.style.right = '450px';
            $(".menu-item-container").fadeIn(800);
            menuItem.style.left = '390px';
        }else{
            this.style.right = '0px';
            $(".menu-item-container").fadeOut(0);
            menuItem.style.left = '820px';
        }

    }, false );

    // $(window).on("scroll", function(){
    //     var scrollTop = $(window).scrollTop();
    //     if(scrollTop > 10){
    //         $(".circle-logo").css("position", "relative");
    //         $(".circle-logo").css("right", "40%");
    //         $(".line").css("width", "100%");
    //         $(".line").css("bottom", "174px");
    //         $(".menu-item").css("display", "inline");
    //         $(".menu-item").css("margin-right", "25%");
    //         $(".menu-item-right").css("margin-left", "0");
    //         $(".menu-item-left").css("margin-right", "0");
    //         $(".nav-bar").css("height", "55px");
    //     }else{
    //         $(".circle-logo").css("right", "0%");
    //         $(".line").css("width", "70%");
    //         $(".line").css("bottom", "60px");
    //         $(".menu-item").css("display", "block");
    //         $(".menu-item").css("margin-right", "0");
    //         $(".menu-item-right").css("margin-left", "100px");
    //         $(".menu-item-left").css("margin-right", "100px");
    //         $(".nav-bar").css("height", "170px");
    //     }
    // });


});