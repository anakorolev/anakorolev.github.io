$(document).ready(function(){

            $( ".visualart" ).click(function() {
                $( ".index" ).hide( "slow" );
                $( ".container" ).show( "slow" );
                $(".cs").hide("slow");
                $(".anim-div").hide("slow");
                $(".ab-div").hide("slow");
                $(".con-div").hide("slow");
                $(".visualart").css("text-decoration", "underline");
                $(".con").css("text-decoration", "none");
                $(".name").css("text-decoration", "none");
                $(".ab").css("text-decoration", "none");
                $(".anim").css("text-decoration", "none");
                $(".compsci").css("text-decoration", "none");
            });

            $( ".name" ).click(function() {
                $( ".index" ).show( "slow" );
                $(".container").hide("slow");
                $(".cs").hide("slow");
                $(".anim-div").hide("slow");
                $(".ab-div").hide("slow");
                $(".con-div").hide("slow");
                $(".name").css("text-decoration", "underline");
                $(".con").css("text-decoration", "none");
                $(".ab").css("text-decoration", "none");
                $(".visualart").css("text-decoration", "none");
                $(".anim").css("text-decoration", "none");
                $(".compsci").css("text-decoration", "none");
            });

            $( ".compsci" ).click(function() {
                $( ".cs" ).show( "slow" );
                $( ".index" ).hide( "slow" );
                $(".container").hide("slow");
                $(".anim-div").hide("slow");
                $(".ab-div").hide("slow");
                $(".con-div").hide("slow");
                $(".compsci").css("text-decoration", "underline");
                $(".con").css("text-decoration", "none");
                $(".name").css("text-decoration", "none");
                $(".ab").css("text-decoration", "none");
                $(".visualart").css("text-decoration", "none");
                $(".anim").css("text-decoration", "none");
            });

            $( ".anim" ).click(function() {
                $( ".anim-div" ).show( "slow" );
                $( ".index" ).hide( "slow" );
                $(".container").hide("slow");
                $(".cs").hide("slow");
                $(".ab-div").hide("slow");
                $(".con-div").hide("slow");
                $(".anim").css("text-decoration", "underline");
                $(".con").css("text-decoration", "none");
                $(".name").css("text-decoration", "none");
                $(".ab").css("text-decoration", "none");
                $(".visualart").css("text-decoration", "none");
                $(".compsci").css("text-decoration", "none");
            });

            $( ".ab" ).click(function() {
                $( ".ab-div" ).show( "slow" );
                $( ".index" ).hide( "slow" );
                $(".container").hide("slow");
                $(".cs").hide("slow");
                $(".anim-div").hide("slow");
                $(".con-div").hide("slow");
                $(".ab").css("text-decoration", "underline");
                $(".con").css("text-decoration", "none");
                $(".name").css("text-decoration", "none");
                $(".visualart").css("text-decoration", "none");
                $(".anim").css("text-decoration", "none");
                $(".compsci").css("text-decoration", "none");
            });

            $( ".con" ).click(function() {
                $( ".con-div" ).show( "slow" );
                $( ".index" ).hide( "slow" );
                $(".container").hide("slow");
                $(".cs").hide("slow");
                $(".anim-div").hide("slow");
                $(".ab-div").hide("slow");
                $(".con").css("text-decoration", "underline");
                $(".name").css("text-decoration", "none");
                $(".ab").css("text-decoration", "none");
                $(".visualart").css("text-decoration", "none");
                $(".anim").css("text-decoration", "none");
                $(".compsci").css("text-decoration", "none");
            });

            $(".name, .visualart, .compsci, .anim, .ab, .con, .project1, .project2, .project3, .project4, .project5, .project6, .project7, .project8").hover(function(){
                $(".name").css("cursor", "pointer");
                $(".visualart").css("cursor", "pointer");
                $(".compsci").css("cursor", "pointer");
                $(".anim").css("cursor", "pointer");
                $(".ab").css("cursor", "pointer");
                $(".con").css("cursor", "pointer");
            });

            $(".toggle").click(function() {
                if($(".toggleMenu").css('display') == 'none'){
                    $(".toggleMenu").show("fast");
                }else{
                    $(".toggleMenu").hide("fast");
                }
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


});