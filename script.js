
////hobby - changes img every 2s
const images = [
  {
    src: 'slider-1.png',
    alt: 'person-learning-new-technology',
  },
  {
    src: 'slider-2.png',
    alt: 'a-house',
  },
  {
    src: 'slider-3.png',
    alt: 'person-playing-golf',
  },
  {
    src: 'slider-3.png',
    alt: 'person-playing-golf',
  },
  {
    src: 'slider-4.png',
    alt: 'xbox-controller',
  },
];

let index = 0;

const mainHobby = document.querySelector('.main-hobby');

function change() {
  const { src, alt } = images[index];
  mainHobby.setAttribute('src', `./Assets/${src}`);
  mainHobby.setAttribute('alt', alt);

  index < images.length - 1 ? (index = index + 1) : (index = 0);
}

window.addEventListener('DOMContentLoaded', () => {
  myFunction();
  setInterval(change, 2000);
});

///Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navBox = document.querySelector(".nav-box");


hamburger.addEventListener("click", myFunction);


function myFunction() {

    if (navBox.style.display == "none") {

    navBox.style.display = "block";
} else {
    navBox.style.display = "none";
}

}

// slide carousel for work projects

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slideWidth = slides[0].getBoundingClientRect().width;
const currentSlide = track.querySelector('.current-slide');
const slidesIndex = slides.indexOf(currentSlide);

console.log(track, btnRight, btnLeft, slideWidth, slidesIndex);

// align slides next to each other

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

btnRight.addEventListener('click', e => {

  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
 
  moveToSlide(track, currentSlide, nextSlide);
  removeAddArrows (nextIndex, btnLeft, btnRight, slides);
})

btnLeft.addEventListener('click', e => {

  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  removeAddArrows (prevIndex, btnLeft, btnRight, slides);
})

const removeAddArrows = (slidesIndex, btnLeft, btnRight, slides) => {

  if (slidesIndex === 0) {
    btnLeft.style.display = "none";
  } else if (slidesIndex === slides.length - 1) {
    btnRight.style.display = "none";
  } else {
    btnRight.style.display = "block";
    btnLeft.style.display = "block";
  }
}

/// script for form (formspree)

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add('success');  
        status.innerHTML = "Thank you!";
        form.reset()
      }).catch(error => {
        status.classList.add('error');  
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
    }
    form.addEventListener("submit", handleSubmit)
