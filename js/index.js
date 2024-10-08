window.onload = function(){
    /* This is for FAQs visibility */
    const faq_array = document.querySelectorAll('.faq-module');
    const faq_desc_array = document.querySelectorAll('.faq-description');
    faq_array.forEach((faq, index) => {
        const current_faq_desc = faq_desc_array[index];

        faq.addEventListener('click', function(){
            if(current_faq_desc.classList.contains("hidden")){
                current_faq_desc.classList.remove("hidden");
                current_faq_desc.classList.add("visibile");
            }else{
                current_faq_desc.classList.remove("visibile");
                current_faq_desc.classList.add("hidden");
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
        const elem_rect = element.getBoundingClientRect(); //instead of getting the top/bot you can use this
        return elem_rect.top <= window.innerHeight && elem_rect.bottom >= 0;
    }

    function handleScroll() {
        const titles = document.querySelectorAll('h3');
        titles.forEach(title => {
            if (isInViewport(title)) {
                title.classList.add("animated");
            } else {
                title.classList.remove("animated");
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); //if the element is already in view onload then start it
}