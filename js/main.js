$(document).ready(function () {

  // header slider
  $('.creativ-agency').slick({
    dots: true,
    arrows: false,
  });

  // our 
  $('.slider-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-people'
  });
  $('.slider-people').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-reviews',
    dots: false,
    centerMode: true,
    centerPadding: '10px',
  });

  // Add smooth scrolling to all links
  $('.menu__links-item').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).scroll(function() {
  // проверка на докрутку до определенного элемента
  let anchor =$('#our-story').offset().top;
 
  if ($(this).scrollTop() > anchor) {
    // создаем эффекты и анимацию
    $('header').addClass('fixed-menu');
    
  } else{
    $('header').removeClass('fixed-menu');    
  }	
});	

//Вариант 2 burger-menu
let menu = document.querySelector('.menu');
menu.addEventListener('click', function () {
  this.classList.toggle('show-menu');
});


//Запуск видео
let playButtonBig = document.querySelector('.video-button');
playButtonBig.addEventListener('click', function () {
  let video = document.getElementById('video');
  let titleVideo = document.querySelector('.watch-video-title');
  video.play();
  video.setAttribute('autoplay', 'autoplay');
  titleVideo.classList.add('hide-title');
});


// function name() {
//   do something;
// };

// playButtonBig.addEventListener('click', name());