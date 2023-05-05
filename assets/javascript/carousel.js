$(document).ready(function(){
  var adaptiveHeightValue = true;
  if ($(window).width() < 900) {
      adaptiveHeightValue = false;
  }
  $('.student_image-container').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: adaptiveHeightValue,
  });
});