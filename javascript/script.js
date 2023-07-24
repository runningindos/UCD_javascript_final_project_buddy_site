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


function signUpSuccessfull(){
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
