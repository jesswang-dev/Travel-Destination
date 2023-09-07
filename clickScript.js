//click on destination button
import optionBtn from "./scrollScript.js";

let clickCount = 0;

optionBtn.addEventListener('click', (e) => {
    //onclick the button icon changed
    
    if(e) {
        clickCount++;
    }
    if (clickCount % 2 === 1) {
        if(e.target.tagName === "DIV") {
            e.target.children[0].innerHTML = " expand_less ";
            expandDisplay.style.opacity = 1;
        }
        if(e.target.tagName === "SPAN") {
            e.target.innerHTML = " expand_less ";
            expandDisplay.style.opacity= 1;
        }
    } else {
         if (e.target.tagName === "DIV") {
           e.target.children[0].innerHTML = " expand_more ";
           expandDisplay.style.opacity = 0;
         }
         if (e.target.tagName === "SPAN") {
           e.target.innerHTML = " expand_more ";
           expandDisplay.style.opacity = 0;
         }
    }

})
const expandDisplay = document.querySelector(".expand");
const menuBtn = document.querySelector(".menu-btn");
const exitBtn = document.querySelector(".exit-btn");
const menuDisplay = document.querySelector(".expand-menu");

menuBtn.addEventListener('click', (e) => {

      if (e.target.tagName === "DIV") {
        menuDisplay.style.left = 0;
      }
      if (e.target.tagName === "SPAN") {
        menuDisplay.style.left = 0;
      }
    
});
exitBtn.addEventListener('click', (e) => {
    if (e.target.tagName === "DIV") {
      menuDisplay.style.left = -25 + "vw";
    }
    if (e.target.tagName === "SPAN") {
      menuDisplay.style.left = -25 + "vw";
    }
})