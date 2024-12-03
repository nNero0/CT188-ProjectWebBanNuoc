// $(document).ready(function () {
//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;

//   $(".carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 7) {
//       scrollPosition += cardWidth;
//       $(".carousel-inner").animate(
//         {
//           scrollLeft: scrollPosition,
//         },
//         600
//       );
//     }
//   });

//   $(".carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//     }
//   });
// });

// $(document).ready(function () {
//   var multipleCardCarousel = document.getElementById(
//     "#carouselExampleAutoplaying"
//   );
//   if (window.matchMedia("(min-width: 568px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//       interval: true,
//       wrap :true,
//     });
//     var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//     var cardWidth = $(".carousel-item").width();
//     var scrollPosition = 0;
//     $("#carouselExampleAutoplaying.carousel-control-next").on(
//       "click",
//       function () {
//         if (scrollPosition < carouselWidth - cardWidth * 7) {
//           scrollPosition += cardWidth;
//           $("#carouselExampleAutoplaying.carousel-inner").animate(
//             { scrollLeft: scrollPosition },
//             600
//           );
//         }
//       }
//     );
//     $("#carouselExampleAutoplaying.carousel-control-prev").on(
//       "click",
//       function () {
//         if (scrollPosition > 0) {
//           scrollPosition -= cardWidth;
//           $("#carouselExampleAutoplaying .carousel-inner").animate(
//             { scrollLeft: scrollPosition },
//             600
//           );
//         }
//       }
//     );
//   } else {
//     $(multipleCardCarousel).addClass("slide");
//   }
// });

// $(document).ready(function () {

//   var multipleCardCarousel = document.getElementById(
//     "carouselExampleAutoplaying"
//   );

//   if (window.matchMedia("(min-width: 568px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//       interval: true,
//       wrap: true,
//     });

//     var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//     var cardWidth = $(".carousel-item").width();
//     var scrollPosition =0 ;


//     // setInterval(function () {
//     //   scrollPosition += itemWidth;
//     //   if (scrollPosition >= carouselInner[0].scrollWidth / 2) {
//     //     scrollPosition = 0;
//     //     carouselInner.scrollLeft(0);
//     //   }
//     //   carouselInner.animate({ scrollLeft: scrollPosition }, 800);
//     // }, 3000);

//     $("#carouselExampleAutoplaying .carousel-control-next").on(
//       "click",
//       function () {
//         if (scrollPosition < carouselWidth - cardWidth * 4) {
//           scrollPosition += (cardWidth );
//           if(scrollPosition > 0){
//             $("#carouselExampleAutoplaying .carousel-inner").animate(
//               { scrollLeft: scrollPosition+20},
//               600
//             );
//           }
//           else{
//             $("#carouselExampleAutoplaying .carousel-inner").animate(
//               { scrollLeft: scrollPosition},
//               600
//             );
//           }

//         }
//       }
//     );

//     $("#carouselExampleAutoplaying .carousel-control-prev").on(
//       "click",
//       function () {
//         if (scrollPosition > 0) {
//           scrollPosition -= cardWidth;
//           if(scrollPosition > 0){
//             $("#carouselExampleAutoplaying .carousel-inner").animate(
//               { scrollLeft: scrollPosition+20},
//               600
//             );
//           }
//           else{
//             $("#carouselExampleAutoplaying .carousel-inner").animate(
//               { scrollLeft: scrollPosition},
//               600
//             );
//           }
//         }
//       }
//     );
//   } else {
//     $(multipleCardCarousel).addClass("slide");
//   }
// });

//

$(document).ready(function(){
  var CFmultipleCardCarousel = document.querySelector(
    "#div-cafe #carouselExampleAutoplaying"
  );
  
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition =0 ;


  var cafeCarousel = $("#div-cafe #carouselExampleAutoplaying");

cafeCarousel.find(".carousel-control-next").on(
  "click",
  function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += (cardWidth );
      if(scrollPosition > 0){
        $("#div-cafe #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-cafe #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }

    }
  }
);

if (window.matchMedia("(min-width: 568px)").matches) {
  var CFcarousel = new bootstrap.Carousel(CFmultipleCardCarousel, {
  });

cafeCarousel.find(" .carousel-control-prev").on(
  "click",
  function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      if(scrollPosition > 0){
        $("#div-cafe #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-cafe #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }
    }
  }
);
} else {
$(multipleCardCarousel).addClass("slide"); // i dont understand
}




var FRmultipleCardCarousel = document.querySelector("#div-freeze #carouselExampleAutoplaying ");
var freezeCarousel = $("#div-freeze #carouselExampleAutoplaying");

freezeCarousel.find(".carousel-control-next").on(
  "click",
  function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += (cardWidth );
      if(scrollPosition > 0){
        $("#div-freeze #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-freeze #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }

    }
  }
);
if (window.matchMedia("(min-width: 568px)").matches) {
  var FRcarousel = new bootstrap.Carousel(FRmultipleCardCarousel, {
  });
freezeCarousel.find(" .carousel-control-prev").on(
  "click",
  function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      if(scrollPosition > 0){
        $("#div-freeze #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-freeze #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }
    }
  }
);
} else {
$(multipleCardCarousel).addClass("slide");
}



var TmultipleCardCarousel = document.querySelector("#div-tea #carouselExampleAutoplaying ");
var teaCarousel = $("#div-tea #carouselExampleAutoplaying");

teaCarousel.find(".carousel-control-next").on(
  "click",
  function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += (cardWidth );
      if(scrollPosition > 0){
        $("#div-tea #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-tea #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }

    }
  }
);
if (window.matchMedia("(min-width: 568px)").matches) {
  var Tcarousel = new bootstrap.Carousel(TmultipleCardCarousel, {
  });
teaCarousel.find(" .carousel-control-prev").on(
  "click",
  function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      if(scrollPosition > 0){
        $("#div-tea #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-tea #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }
    }
  }
);
} else {
$(multipleCardCarousel).addClass("slide");
}







var OTmultipleCardCarousel = document.querySelector("#div-other #carouselExampleAutoplaying ");
var OTCarousel = $("#div-other #carouselExampleAutoplaying");

OTCarousel.find(".carousel-control-next").on(
  "click",
  function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += (cardWidth );
      if(scrollPosition > 0){
        $("#div-other #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-other #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }

    }
  }
);
if (window.matchMedia("(min-width: 568px)").matches) {
  var OTcarousel = new bootstrap.Carousel(OTmultipleCardCarousel, {
  });
OTCarousel.find(" .carousel-control-prev").on(
  "click",
  function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      if(scrollPosition > 0){
        $("#div-other #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition+20},
          600
        );
      }
      else{
        $("#div-other #carouselExampleAutoplaying .carousel-inner").animate(
          { scrollLeft: scrollPosition},
          600
        );
      }
    }
  }
);
} else {
$(multipleCardCarousel).addClass("slide");
};





























});


// function showModal(){
//   $('#exampleModal').modal('show') ;
// }





const myModal = document.getElementById('exampleModal ')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



