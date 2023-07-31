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
startBtn.addEventListener('click', startGame, endGame);
const hideFavesContainer = document.getElementById('favesContainer');
favesContainer.addEventListener('click', startGame, endGame);
const hideBuddyIntroDiv = document.getElementById('buddyIntroDiv');
buddyIntroDiv.addEventListener('click', startGame, endGame);
const hideBuddyArrow = document.getElementById('buddyArrow');
buddyArrow.addEventListener('click', startGame, endGame);
const showQuizContainer = document.getElementById('quizContainer');
quizContainer.addEventListener('click', startGame, endGame);
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const questions = document.querySelectorAll('.quizContainer > div');
const showNextButton = document.getElementById('nextBtn');
nextBtn.addEventListener('click', startGame, endGame);

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
  nextBtn.classList.remove('hide');
  console.log('NextBTN appeared')
} 

//set and check correct answer for next question 1
function checkAnswer(buttonId){
  const answer = "a4";
  const selectedAnswer = buttonId;
  let celebrateCorrectAnswer = document.getElementById('q1');
  correctPopup.classList.add('click', checkAnswer === answer);

  if(selectedAnswer == answer){
    alert("YAY! Buddy's B-day is on 05 Dec. 2020.");
    display.classList.celebrateCorrectPopup(q1);
  } else {
    alert("Sorry. Better luck next time!");
    document.getElementById('.q1');
    q1.classList.add('hide');
  }
  console.log('this worked')
}

  const answers = document.querySelectorAll('.qbtn');
  answers.forEach(button => {
    button.addEventListener('click', () => checkAnswer(button.id));
  })



//set and check correct answer for question 2
  function checkAnswer2(buttonId){
    const answer2 = "a6";
    const selectedAnswer2 = buttonId;
  
    if(selectedAnswer2 === answer2){
      alert("YAY! Bull Island is one of Buddy's favourite places!");
      display.classList.correctPopup(q2);
    } else {
      alert("Sorry. Better luck next time!");
      document.getElementById('.q2');
      q2.classList.add('hide');
    }
    console.log('this worked')
  }
  
    const answers2 = document.querySelectorAll('.qbtn');
    answers2.forEach(button => {
      button.addEventListener('click', () => checkAnswer2(button.id2));
    })

//set and check correct answer for question 3
function checkAnswer3(buttonId3){
  const answer3 = "a10";
  const selectedAnswer3 = buttonId3;

  if(selectedAnswer3 === answer3){
    alert("YAY! Bull Island is one of Buddy's favourite places!");
    display.classList.correctPopup(q3);
  } else {
    alert("Sorry. Better luck next time!");
    document.getElementById('.q2');
    q3.classList.add('hide');
  }
  console.log('this worked')
}

  const answers3 = document.querySelectorAll('.qbtn');
  answers3.forEach(button => {
    button.addEventListener('click', () => checkAnswer3(button.id3));
  })

  /* something in this area is breaking the rest of the site functionality, and I'm not sure what it is.
//End game and reveal hidden divs

function endGame(){
  console.log('game ended, bro')
  startBtn.classList.remove('hide');
  console.log('show start button works')
  favesContainer.classList.remove('hide');
  console.log('show faves container works')
  buddyIntroDiv.classList.remove('hide');
  console.log('show buddyIntroDiv works')
  buddyArrow.classList.remove('hide');
  console.log('show buddyArrow works')
  quizContainer.classList.add('hide');
  nextBtn.classList.add('hide');
  console.log('endGame btn hidden')
} 

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
});*/