import './libs/jquery-3.5.1.min.js'
import './libs/jquery.fancybox.min.js'
import './libs/swiper-bundle.min.js'


document.addEventListener("DOMContentLoaded", ready);

function ready() {
    function headerfixed() {
        const header = $(".header-fixed-js");
        let scrollChange = 1;

        $(window).scroll(function () {
            let scroll = $(window).scrollTop();

            if (scroll >= scrollChange) {
                header.addClass('header-fixed');
            } else {
                header.removeClass("header-fixed");
            }
        });
    }

    headerfixed();


     function burger() {
            const js__headerBurgerClick = document.querySelectorAll('.js__header-burgerclick')
            const js__headerBurger = document.querySelectorAll('.js__header-burger');
            const headerNavOpenJs = document.querySelector('.header-nav-open-js');
            const body = document.querySelector('body');
        
            
            for (let i = 0; i < js__headerBurgerClick.length; i++) {
                js__headerBurgerClick[i].addEventListener('click', () => {   
                    for (let i = 0; i < 3; i++)  {
                        js__headerBurger[i].classList.toggle('open');
                        headerNavOpenJs.classList.toggle('open');
                        body.classList.toggle('lock');
                    }
                });
            }
     }
        
    burger();


    function popup() {
      const js__popupLink = document.querySelectorAll('.js__popup-link');
      const js__popupClose = document.querySelectorAll('.js__popup-close');
      const body = document.querySelector('body');
      const popupVideoJs = document.querySelector('.popup-video-js');
    
    
      let unlock = true;
    
      const timeout = 400;
    
    
    
    
      for (let i = 0; i < js__popupLink.length; i++) {
        js__popupLink[i].addEventListener('click', (event) => {
          const popup__name = js__popupLink[i].dataset.modal;
          const popupCurent = document.querySelector(`[data-popup="${popup__name}"]`);
          popupOpen(popupCurent);
          event.preventDefault();
        });
      };
    
    
      for (let i = 0; i < js__popupClose.length; i++) {
        js__popupClose[i].addEventListener('click', (event) => {
          popupClose(js__popupClose[i].closest('.js__popup-open'));
          event.preventDefault();
        });
      };
    
    
    
      function popupOpen(popupCurent) {
        if (popupCurent && unlock) {
          const popupActive = document.querySelector('.js__popup-open.open');
    
          if (popupActive) {
            popupClose(popupActive, false);
          } else {
            bodylock();
          }
    
    
          popupCurent.classList.add('open');
          popupCurent.addEventListener('click', (event) => {
            if (!event.target.closest('.js__popup-content')) {
              popupClose(event.target.closest('.js__popup-open'));
              console.log(true);
            } else {
              console.log(false);
            }
          });
        };
      }
    
    
      function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
          popupActive.classList.remove('open');
          popupVideoJs.pause();
          if (doUnlock) {
            bodyUnlock();
          };
        };
      };
    
    
      function bodylock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px'; //Получили ширину scrolla
    
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');
    
      };
    
    
      function bodyUnlock() {
        setTimeout(function () {
          body.style.paddingRight = '0px';
          body.classList.remove('lock');
        }, timeout)
      };
    }
    
    popup();

    function gallerySlider () {
      new Swiper('.gallery-slider-js', {
       // Optional parameters
       slidesPerView: 1,
       loop: true,
       // Navigation arrows
       navigation: {
         nextEl: '.gallery-next-js',
         prevEl: '.gallery-prev-js',
       },
       effect: 'fade',
       fadeEffect: {
         crossFade: true
       },
     
     });
    }

    gallerySlider();
}


