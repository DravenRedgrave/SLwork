$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:4,
    infinite:true,
    autoplay:false,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    dots:false,
    TouchMove:true,
    arrows:true,
    WariableWidth:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:3,
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:3
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:2,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});

const menuToggle = document.querySelector('.toggle-menu');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
      if (nav.className != 'active') {nav.className = 'active';}
      else {nav.className = '';}
  });


  $(document).ready(function() {
    $('.spoiler-title').click(function(event) {
      if($('.spoiler').hasClass('one')){
        $(this).toggleClass('opened');
        $('.spoiler-title').not($(this)).removeClass('opened');
        $('.spoiler-title').not($(this)).removeClass('active');
        $('.spoiler-text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    })
  })


  var video = document.getElementById("myVideo");

  var btn = document.getElementById("myBtn");

  function myFunction() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
