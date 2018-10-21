window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  // Grab navbar logo and shrink logo on scroll.
  var Logo = document.getElementById("imgNavBarLogo")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.width = '14%';
  } else {
    Logo.style.width = '18%';
  }
}

$(document).ready(function(){
  $('.slider').slider({
    indicators: false,
    height: 800
  });
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});
      