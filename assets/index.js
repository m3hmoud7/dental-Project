var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
///
const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach((container) => {
    const afterImg = container.querySelector('.after-img');
    const sliderLine = container.querySelector('.slider-line');

    let isDragging = false;


    sliderLine.addEventListener('mousedown', () => {
        isDragging = true;
    });


    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const containerRect = container.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;

        if (offsetX >= 0 && offsetX <= containerRect.width) {
            const percentage = (offsetX / containerRect.width) * 100;
            afterImg.style.width = `${percentage}%`;
            sliderLine.style.left = `${percentage}%`;
        }
    });


    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

