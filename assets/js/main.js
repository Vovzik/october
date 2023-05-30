import './libs/jquery-3.5.1.min.js'


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
}


