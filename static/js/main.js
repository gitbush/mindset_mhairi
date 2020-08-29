/**
 * 
 * Nav toggle
 */

(function() {
  
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),
    navClose: document.querySelector('.svg-close'),

    

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
      this.navClose.classList.toggle('expanded');
    }
  };

  if(hamburger.navToggle){
    hamburger.navToggle.addEventListener('click', function(e) { 
      hamburger.doToggle(e); });
    hamburger.navClose.addEventListener('click', function(e) { 
      hamburger.doToggle(e); });
  }

}());


/**
 * 
 * aos
 * Animate on scroll inititiate and settings
 */

AOS.init({
  duration: 600, // values from 0 to 3000, with step 50ms
  once: true,
});


/**
 * 
 * things about me slider
 */

if(document.querySelector('.slide-btn')){
  var thingsSlides = document.querySelectorAll('.things-slider .slider-item');
  var currentSlide = 0;
  // var slideInterval = setInterval(nextSlide,2000);
  
  function nextSlide() {
      
      thingsSlides[currentSlide].className = 'slider-item';
      currentSlide = (currentSlide+1)%thingsSlides.length;
      thingsSlides[currentSlide].className = 'slider-item showing';
      
  }
  document.querySelector('.slide-btn').addEventListener('click', nextSlide)

}

/**
 * 
 * testimonial slider. Services.html
 */

if(document.querySelector('.circle-slide-btn')){
  var slides = document.querySelectorAll('.testimonials-slider .testimonial-item');
  var currentSlide2 = 0;
  // var slideInterval = setInterval(nextSlide,2000);
  
  function nextSlide2() {
      slides[currentSlide2].className = 'testimonial-item slide';
      currentSlide2 = (currentSlide2+1)%slides.length;
      slides[currentSlide2].className = 'testimonial-item slide test-showing';
      
  }
  document.querySelector('.circle-slide-btn').addEventListener('click', nextSlide2)
}

/**
 * Home hero auto slider 
 */

var heroSlides = document.querySelectorAll('.home-hero .home-hero-img');
var currentHeroSlide = 0;

if(heroSlides.length > 0){
  setInterval(function() {
    heroSlides[currentHeroSlide].className = 'home-hero-img';
    currentHeroSlide = (currentHeroSlide+1)%heroSlides.length;
    heroSlides[currentHeroSlide].className = 'home-hero-img hero-showing';
    
    if (currentHeroSlide >= heroSlides.length) {
      currentHeroSlide = 0;
    }
}, 4000);
}


/**
 * Quiz  
 */

//  quiz options
let optionBtn = document.querySelectorAll('.option-btn')

optionBtn.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault()
    let sibling = getSibling(btn)
    // console.log(btn)
    btn.classList.add('highlight-btn')
    // console.log(this.nextElementSibling)

    if(sibling[0].classList.contains('highlight-btn')){
      // this.nextElementSibling.classList.remove('highlight-btn')
      sibling[0].classList.remove('highlight-btn')
    }
  })
});

function getSibling(el) {
  var sibling = [];
  elSib = el.parentNode.firstElementChild;
  do { if (elSib != el) sibling.push(elSib); } while (elSib = elSib.nextElementSibling);
  return sibling;
}


const quizSubmitBtn = document.getElementById('quiz-submit');
const quizResult = document.getElementById('quiz-result');


function getQuizLocation(){
  let quizResultLoc = quizResult.getBoundingClientRect()
  quizSubmitBtn.addEventListener('click', e => {
    e.preventDefault()
    window.scrollTo(0, quizResultLoc.top + 50)
  })
  
}

if(quizResult){
  getQuizLocation();
}


