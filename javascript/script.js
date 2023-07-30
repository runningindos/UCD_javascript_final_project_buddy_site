//remove and add active class to selected link
let activeLink = document.querySelectorAll('.navLinks').forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    console.log(event.target);
    document.querySelectorAll('.navLinks.active').forEach((activeLink) => {
      activeLink.classList.remove('active');
    });
    
    //navLinks.classList.remove('active');
  navLink.classList.add('active');

 });
});


function signUpSuccessful(){
  let 
}

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

/*Change down arrow to up arrow when Buddy's bio is revealed
function changeToUpArrow(){
  let changeArrow = document.getElementById('downTab')
  if(changeArrow.src.match('images/down-arrow.png')){
    changeArrow.src = 'images/up-arrow.png'
  } else {
    changeArrow.src = 'images/down-arrow.png'
  } 
}*/

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

/*verify input text in input fields
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailinput')
const nameCriteria = document.getElementById('nameCriteria')
const emailCriteria = document.getElementById('emailCriteria')
const form = document.getElementById('newsletterForm')
const errorMessage = document.getElementById('error')

newsletterForm.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const errorMessage = (element, message) => {

}

const validateInputs = () => {
  const nameInputValue = nameInput.value.trim();
  const emailInputValue = emailInput.value.trim();
  
  if(nameInputValue === '')
};*/

//form validation


function validateForm(){
  const nameInput = document.getElementById('nameInput');
  const nameCriteria = document.getElementById('nameCriteria');
  const emailInput = document.getElementById('emailInput');
  const emailCriteria = document.getElementById('emailCriteria');


//add event listeners for input fields
nameInput.addEventListener(input, nameValidation);
function nameValidation(){
  document.getElementById(nameCriteria);
  nameCriteria.classList.add('nameCriteria');

}};

/*  if(nameInput === '' && emailInput === ''){
    Text = "please enter 2+ digits in name field.";
  }else {
     document.getElementById(nameCriteria).classList.add('nameCriteriaMet')
     
  }
}; */

/*function validation(){
  let username = document.getElementById('nameInput').value;
  let email = document.getElementById('emailInput').value;

  let regex = new /^([a-zA-Z0-9\._]+)@[a-zA-Z0-9]+.(.[a-z]+)?$/

  if(regex.email(email))
 
}*/

/*if(username === '' && email === ''){
  console.log('Please enter username and/or email');
}else {

}*/