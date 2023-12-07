const sliders = document.querySelectorAll('.slider');

function showSliderImage(slider, index) {
  const images = slider.querySelectorAll('.slider-img');
  images.forEach((image) => {
    image.classList.remove('active');
  });
  images[index].classList.add('active');
}

function initSlider(slider) {
  const images = slider.querySelectorAll('.slider-img');
  const controlls = slider.querySelectorAll('.controlls');

  let imgIndex = 0;

  function show(index) {
    showSliderImage(slider, index);
    imgIndex = index;
  }

  show(0);

  controlls.forEach((control) => {
    control.addEventListener('click', () => {
      if (control.classList.contains('prev')) {
        let index = imgIndex - 1;
        if (index < 0) {
          index = images.length - 1;
        }
        show(index);
      } else if (control.classList.contains('next')) {
        let index = imgIndex + 1;
        if (index >= images.length) {
          index = 0;
        }
        show(index);
      }
    });
  });
}

sliders.forEach((slider) => {
  initSlider(slider);
});