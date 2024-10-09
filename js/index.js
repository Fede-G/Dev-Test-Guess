window.onload = function(){
    const swiperEl = document.querySelector('swiper-container');
    Object.assign(swiperEl, {
        slidesPerView: 1,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    swiperEl.initialize();

    /* This is for FAQs visibility */
    const faq_array = document.querySelectorAll('.faq-module');
    faq_array.forEach(faq => {
        faq.addEventListener('click', function(){
            if(faq.classList.contains("visibile")){
                faq.classList.remove("visibile");
            }else{
                faq.classList.add("visibile");
            }
        })
    });

    /* This is for the Modal */
    const modal = document.querySelector('#modal');
    const open_modal_button = document.querySelector('.open-modal-btn');
    const close_modal_button = document.querySelector('.close-modal-btn');

    open_modal_button.addEventListener('click', function(){
        modal.classList.add("active");
    });

    close_modal_button.addEventListener('click', function(){
        modal.classList.remove("active");
    });

    modal.addEventListener('click', function(event){
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });

    /* Dynamic Scroll */    
    function isInViewport(element) {
        const elem_rect = element.getBoundingClientRect();
        return elem_rect.top <= window.innerHeight && elem_rect.bottom >= 0;
    }

    function handleScroll() {
        const hero = document.querySelector('#hero');
        if (isInViewport(hero)) {
            hero.style.opacity = 1 - ((hero.offsetHeight - hero.getBoundingClientRect().bottom) / hero.offsetHeight);
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); //if the element is already in view onload then start it
}