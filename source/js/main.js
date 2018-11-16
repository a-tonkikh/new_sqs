var menu = document.getElementById("menu");
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__menu');

// navMain.classList.remove('main-nav--nojs');

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    menu.style.background = "#ffffff";
  } else {
    menu.style.background = "rgba(255, 255, 255, 0.7)";
  }
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

$('.main-nav__link').on("click", function(){
  $('#hamburger-menu').click();
});
