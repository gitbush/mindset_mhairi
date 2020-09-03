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

    // if(sibling[0].classList.contains('highlight-btn')){
    //   // this.nextElementSibling.classList.remove('highlight-btn')
    //   sibling[0].classList.remove('highlight-btn')
    // }
  })
});

function getSibling(el) {
  var sibling = [];
  elSib = el.parentNode.firstElementChild;
  do { if (elSib != el) sibling.push(elSib); } while (elSib = elSib.nextElementSibling);
  return sibling;
}


// const quizSubmitBtn = document.getElementById('quiz-submit');
// const quizResult = document.getElementById('quiz-result');


// function getQuizLocation(){
//   let quizResultLoc = quizResult.getBoundingClientRect()
//   quizSubmitBtn.addEventListener('click', e => {
//     e.preventDefault()
//     window.scrollTo(0, quizResultLoc.top + 50)
//   })
  
// }

// if(quizResult){
//   getQuizLocation();
// }

//  quiz slider control 
$('#carouselExampleControls').on('slide.bs.carousel', function () {
  // console.log($('#carouselExampleControls').carousel('relatedTarget'))
})


// select all elements
// const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceTrue = document.getElementById("choiceTrue");
const choiceFalse = document.getElementById("choiceFalse");
// const counter = document.getElementById("counter");
const quizResult = document.getElementById("quizResult");
const resultDiv = document.getElementById("resultDiv");



// create our questions
let questions = [
  {
      question : `1. I understand that I am ultimately responsible for the life I live and that I have the power to make the
      changes I want to make.`,
      choiceTrue : "True",
      choiceFalse : "False",
  },{
      question : `2. I acknowledge that much of the coaching process takes place in between coaching sessions, and I am ready and willing to put in the necessary work.`,
      choiceTrue : "True",
      choiceFalse : "False",
  },{
      question : `3. I am committed to the process of coaching and will dedicate at least three months to allow the process to work.`,
      choiceTrue : "True",
      choiceFalse : "False",
  }
];

// create our results
let results = [
  {
      result : `You were ready yesterday! What are you waiting for? Click HERE to set up your first session`,
  },{
      result : `You may be ready depending on your willingness to change thoses falses to trues. Discuss with your coach how to make that happen.`,
  },{
      result : `You are not quite ready for coaching, but that does not mean you won’t be ready in the future. `,
  }
];


// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
  let q = questions[runningQuestion];
  
  question.innerHTML = `<p>${q.question}</p>`;
  choiceTrue.innerHTML = q.choiceTrue;
  choiceFalse.innerHTML = q.choiceFalse;
}

renderQuestion();
//  quiz options

optionBtn.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault()
    let sibling = getSibling(btn)
    // console.log(btn)
    btn.classList.add('highlight-btn')
    // console.log(this.nextElementSibling)
    setTimeout(() => 
        nextQuestion(btn), 500)
    // if(runningQuestion < lastQuestion){
      
    //   setTimeout(() => 
    //     nextQuestion(btn), 500)
      
    // } else{
    //   setTimeout(() => 
    //     nextQuestion(btn), 500)
    // }
  })
});

function nextQuestion(btn){
  if(runningQuestion < lastQuestion){
    console.log(runningQuestion)
    runningQuestion++
    btn.classList.remove('highlight-btn')
    renderQuestion()
  } else{
    console.log('last')
    resultRender()
  }
  
}

function getSibling(el) {
  var sibling = [];
  elSib = el.parentNode.firstElementChild;
  do { if (elSib != el) sibling.push(elSib); } while (elSib = elSib.nextElementSibling);
  return sibling;
}

// result render
function resultRender(){
  quiz.style.display ="none"
  resultDiv.style.display = "block";
    
  
  quizResult.innerHTML = `${results[0].result}`;
}


/**
 * Preloader 
 */

$(window).load(function () {
  $('#preloader').fadeOut(800, function () {
      $(this).remove();
  });
});

