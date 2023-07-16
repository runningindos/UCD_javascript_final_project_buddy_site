//event listener for clicking on nav links
//addEventListener("click", "");
//event listener that scrolls up the height of the nav bar
//addEventListener("scroll", "");

//function showActiveLink()
//remove and add active class to selected link
//document.addEventListener('DOMContentLoaded', function() {
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
//});
/*
document.querySelectorAll(".navLinks").forEach(links => {
  console.log(window.location);
})



//reveal Buddy's intro from the dropdown button beneath the "Read Buddy's Intro" banner//
/*function aboutBuddyDropdownElement() {
//1. create new div element//
  let addIntroContainer = document.createElement("div");

//2. add content to new div element//
  let textNode = document.createTextNode("Here is where I'll go");

//3. add content to new div element//
  addIntroContainer.appendChild(textNode);

//4. add new div element to the page//
  let introBannerDiv = document.querySelector (".introBanner");
introBannerDiv.appendChild(addIntroContainer);

//5. 
}*/


function aboutBuddyDropdownElement2() {
  document.getElementById("buddyIntroDiv").style.display = "flex"; 
}

//nav buttons//
//onclick to give the navigation the same hover styling when clicked and active - add event handler that uses specific styling when button is clicked//

//apply class to active link//

//remove class from inactive links//

//make page scroll up the height of the nav banner//

