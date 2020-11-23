var burgerBottomShow = $('.fas.fa-bars');
var burgerBottomHidden = $('.fas.fa-times');
burgerBottomShow.click(
  function () {
    $('.hamburger-menu').show('slow');
  }
)

burgerBottomHidden.click(
  function () {
    $('.hamburger-menu').hide('slow');
  }
)
