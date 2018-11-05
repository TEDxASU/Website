// TODO: Create respective function for lifecycle hook calls.

// window.onscroll = function() {
//   growShrinkLogo()
// };

// Check for window resize, and rescale parallax.
$(window).resize(function() {
  $('.parallax-container').css({'height': $(window).height() + 'px',
  'width' : $(window).width() + 'px'});
  $('.parallax').parallax();
});

// function growShrinkLogo() {
//   // Grab navbar logo and shrink logo on scroll.
//   var Logo = document.getElementById("imgNavBarLogo")
//   var navbarBackground = document.getElementsByClassName('nav');
//   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//     Logo.style.width = '14%';
//     navbarBackground.style.height='12%';
//   } else {
//     Logo.style.width = '18%';
//     navbarBackground.style.height='16%';
//   }
// }

// Jumbotron function to move image caption near middle
// without slider indicators for a autoplay of image browsing.
$(document).ready(function(){
  $('#aboutSlider').slider({
    indicators: false,
    height: 650
  });
});

$(document).ready(function(){
  $('#indexSlider').slider({
    indicators: false,
    height: 800
  });
});

$(document).ready(function(){
  $('.parallax-container').css({'height': $(window).height() + 'px',
  'width' : $(window).width() + 'px'});
  $('.parallax').parallax();
});

// $(document).load(function(){
//   // $('.parallax-container').trigger('scroll');
//   // $('.parallax').trigger('scroll');
// });

$(document).ready(function(){
  // hide .navbar first
 //FIX: interferes with collapable
  // $(".tedx-nav").hide();
  // fade in .navbar
  $(function () {
      $(window).scroll(function () {
          // set distance user scrolls before fadeIn starts
          if ($(this).scrollTop() > 100) {
              $("#tedx-navbar").fadeIn();
          } else {
              $("#tedx-navbar").fadeOut();
          }
      });});
});

$(document).ready(function(){
  $('.modal').modal();
  $('.dropdown-trigger').dropdown();
  $('select').not('.disabled').formSelect();
});


$(document).ready(function(){
  $('.collapsible').collapsible();
});

$('.dropdown-trigger').dropdown({
  
});
      
// changes navbar to selection dropdown on right side on mobile
$(document).ready(function(){
  $('.sidenav').sidenav();
});
      