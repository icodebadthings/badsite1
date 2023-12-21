let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Logic for clicking on the dots to change slides
const dotContainer = document.querySelector('.slideshow-container');
dotContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('dot')) {
        const dots = Array.from(dotContainer.querySelectorAll('.dot'));
        const dotIndex = dots.indexOf(event.target);
        slideIndex = dotIndex + 1;
        showSlides();
    }
});

