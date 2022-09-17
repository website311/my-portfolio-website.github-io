$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
    margin: 20,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

  window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY>0);
  })

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


// ===========slide==========
 