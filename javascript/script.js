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
  }
  else
  {
    buddyIntroDiv.style.display = "none";
    display = 1;
  }
} 
//Change down arrow to up arrow when Buddy's bio is revealed
function changeToUpArrow(){
  let changeArrow = document.getElementById('downTab')
  if(changeArrow.src.match('images/down-arrow.png')){
    changeArrow.src = 'images/up-arrow.png'
  } else {
    changeArrow.src = 'images/down-arrow.png'
  } 
}
//add divs to display faves
