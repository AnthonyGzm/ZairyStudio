  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
  });
  
 document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const carouselContainer = document.querySelector(".carousel-container");

    // Crear contenedor de puntos
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carousel-dots");
    carouselContainer.appendChild(dotsContainer);

    let currentIndex = 0;
    let interval;

    // Crear puntos
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        goToSlide(index);
        resetInterval();
      });

      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function goToSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
      currentIndex = index;
    }

    function nextSlide() {
      const newIndex = (currentIndex + 1) % slides.length;
      goToSlide(newIndex);
    }

    function startInterval() {
      interval = setInterval(nextSlide, 4000);
    }

    function resetInterval() {
      clearInterval(interval);
      startInterval();
    }

    // Inicializar
    goToSlide(currentIndex);
    startInterval();
  });

   const toggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.header-left .main-nav ul');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
  });

  toggle.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });

//    document.addEventListener("DOMContentLoaded", () => {
    // const header = document.getElementById("main-header");
    // const carousel = document.querySelector(".carousel");

    // window.addEventListener("scroll", () => {
    //   const scrollY = window.scrollY;
    //   const carouselHeight = carousel ? carousel.offsetHeight : 0;

    //   if (scrollY < carouselHeight - 60) {
        // header.classList.add("transparent");
    //   } else {
        // header.classList.remove("transparent");
    //   }
    // });
//   });