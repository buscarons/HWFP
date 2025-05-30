const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        const carouselContainer = button.closest('section'); 
        if (!carouselContainer) {
            console.error("No se pudo encontrar el contenedor <section> del carrusel.");
            return;
        }

        const carousel = carouselContainer.querySelector("[data-carousel]");
        if (!carousel) {
            console.error("No se pudo encontrar el elemento [data-carousel] dentro de la sección.");
            return;
        }

        const slides = carousel.querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        if (activeSlide) {
             delete activeSlide.dataset.active;
        }
        slides.children[newIndex].dataset.active = true;
    });
});