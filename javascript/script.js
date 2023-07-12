//reveal Buddy's intro from the dropdown button beneath the "Read Buddy's Intro" banner//

//1. create new div element//
let addIntroContainer = document.createElement("div");

//2. add content to new div element//
let textNode = document.createTextNode("Here is where I'll go");

//3. add content to new div element//
addIntroContainer.appendChild(textNode);

//4. add new div element to the page//
let introBannerDiv = document.querySelector (".introBanner");
document.body.introBannerDiv.appendChild(addIntroContainer);

