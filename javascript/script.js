//remove and add active class to selected link
let activeLink = document.querySelectorAll('.navLinks').forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    console.log(event.target);
    document.querySelectorAll('.navLinks.active').forEach((activeLink) => {
      activeLink.classList.remove('.active');
    });
    
    //navLinks.classList.remove('active');
  navLink.classList.add('.active');

 });
});

//Reveal/hide Buddy's Bio upon clicking down arrow
let buddyIntroDiv = document.getElementById("buddyIntroDiv");
let display = 0;
let changeArrow = document.getElementById('downTab')

function aboutBuddyDropdownElement2() {
  if(display == 1) {
    buddyIntroDiv.style.display = "block";
    display = 0;
    changeArrow.src = 'images/up-arrow.png'
  }
  else
  {
    buddyIntroDiv.style.display = "none";
    display = 1;
    changeArrow.src = 'images/down-arrow.png'
  }
  
} 

//add divs to display faves
const showPlacesButton = document.getElementById('showPlaces');
const showSnacksButton = document.getElementById('showSnacks');
const showToysButton = document.getElementById('showToys');
const placesContent = document.getElementById('placesContentDiv');
const snacksContent = document.getElementById('snacksContentDiv');
const toysContent = document.getElementById('toysContentDiv');

//add event listener for places button click
showPlacesButton.addEventListener('click', displayFavesPlaces);
showSnacksButton.addEventListener('click', displayFavesSnacks);
showToysButton.addEventListener('click', displayFavesToys);

function displayFavesPlaces() {
    if (placesContent.style.display === 'none') {
        placesContent.style.display = 'flex';
    } else {
        placesContent.style.display = 'none';
    }
}
function displayFavesSnacks() {
    if (snacksContent.style.display === 'none') {
        snacksContent.style.display = 'flex';
    } else {
        snacksContent.style.display = 'none';
    }
}
function displayFavesToys() {
    if (toysContent.style.display === 'none') {
        toysContent.style.display = 'flex';
    } else {
        toysContent.style.display = 'none';
    }
}

//establish countdown from speific date
const countdown = () => {
const eventDate = new Date('11/23/2023 00:00:00').getTime();
const now = new Date()
const difference = eventDate - now;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const dayText = Math.floor(difference / day);
const hourText = Math.floor((difference % day) / hour);
const minuteText = Math.floor((difference % hour) / minute);
const secondText = Math.floor((difference % minute) / second);

//countdown event Listeners
  document.querySelector('.days').innerText = dayText;
  document.querySelector('.hours').innerText = hourText;
  document.querySelector('.minutes').innerText = minuteText;
  document.querySelector('.seconds').innerText = secondText;
};
setInterval(countdown, 1000);

//QUIZ
//start game, and hide intro and faves sections
const clickStart = document.getElementById('startBtn')
startBtn.addEventListener('click', startGame);
const hideFavesContainer = document.getElementById('favesContainer');
favesContainer.addEventListener('click', startGame);
const hideBuddyIntroDiv = document.getElementById('buddyIntroDiv');
buddyIntroDiv.addEventListener('click', startGame);
const hideBuddyArrow = document.getElementById('buddyArrow');
buddyArrow.addEventListener('click', startGame);
const showQuizContainer = document.getElementById('quizContainer');
quizContainer.addEventListener('click', startGame);
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const questions = document.querySelectorAll('.quizContainer > div');

function startGame(){
  console.log('game started, bro')
  startBtn.classList.add('hide');
  //shuffledQuestions = questions.sort(() =>Math.random() - .5)
  //currentQuestion = 0
  console.log('hide start button works')
  favesContainer.classList.add('hide');
  console.log('hide faves container works')
  buddyIntroDiv.classList.add('hide');
  console.log('hide buddyIntroDiv works')
  buddyArrow.classList.add('hide');
  console.log('hide buddyArrow works')
  quizContainer.classList.remove('hide');
  console.log('Q1 works')
  //keepGoing()
    
}

//reveal question
function checkAnswer(button){
  if (button.textContent.trim() === '05 Dec. 2020' || button.textContent.trim() === 'Bull Island' || button.textContent.trim() === 'Yoshi'){
    score++;
  }
  if (currentQuestion === totalQuestions - 1){
    showResult();
  } else {
    showQuestion(currentQuestion +1);
  }
}
  
  


/*choosing an answer
function chooseAnswer(){
  const correctAnswer = ['05 Dec. 2020', 'Bull Island', 'Yoshi']
  let score = 0;

  const q1Answer = document.querySelector('button[')

}*/



//next question upon clicking "keepGoing" button
/*function keepGoing() {
  showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('qbtn')
    if(answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    console.log(correct, mate)
  })
}



const questions = [{
  questions: 'When is Buddy/s B-day?',
  answers: [
    {text: '05 Jan. 2020', wrong: false}, 
    {text: '04 Jul. 2020', wrong: false}, 
    {text: '23 Nov. 2020', wrong: false},
    {text: '05 Dec. 2020', correct: true},
  ]
}]*/

//FORM VALIDATION
document.addEventListener('DOMContentLoaded', function() {

function validateName() {
  const valName = document.getElementById('nameInput').value;

  //remove whitespace
  const trimmedInput = valName.trim();

  // Update the input value with the trimmed value
  document.getElementById('nameInput').value = trimmedInput;

  // Display the length of the trimmed input
  document.getElementById('nameCriteria').innerText = "length : " + trimmedInput.length;

  //confirm name field length
  if (trimmedInput.length >= 2) {
    document.getElementById("nameCriteriaMet").style.color = "#2ab7ca";
  } else {
    document.getElementById("nameCriteria").style.color = "initial"; // Reset the color if length is less than 2
  }
}
});

