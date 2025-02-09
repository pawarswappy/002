const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
    let direction = 1; // 1 = forward, -1 = backward

    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function autoPlaySlider() {
      if (currentIndex === slideCount - 1) {
        direction = -1; // Move backward
      } else if (currentIndex === 0) {
        direction = 1; // Move forward
      }
      currentIndex += direction;
      updateSlider();
    }

    setInterval(autoPlaySlider, 3000);

    document.querySelector('.nav-arrow.left').addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
      updateSlider();
    });

    document.querySelector('.nav-arrow.right').addEventListener('click', () => {
      currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
      updateSlider();
    });

    document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('.navbar ul').classList.toggle('visible');
      this.classList.toggle('open');
    });