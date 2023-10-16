//script to change index background
//header scrolling effect
const header = document.querySelector(".header-scroll");
const logo = document.querySelector(".nav-header a");
const navBar = document.querySelector(".navigation");
const optionBtn = document.querySelector(".option-btn");
const leftScroll = document.querySelector(".scroll-bar");
const movable = document.querySelector(".movable");

window.addEventListener("scroll", (e) => {
  const n = document.documentElement.scrollTop;

  // console.log(n);

  //effect for left scrolling bar
  const distance = leftScroll.offsetHeight - movable.offsetHeight;
  const view = document.body.offsetHeight - window.innerHeight;
  if (n < view) {
    movable.style.marginTop = (n / view) * distance + "px";
  }

  //effect for nav bar while scrolling
  if (n < 400) {
    header.style.top = Math.ceil(n / 5) - 80 + "px";
    let color = Math.floor(51 * (400 / n));
    let rgbVar = `rgb(${color},${color},${color})`;
    logo.style.color = rgbVar;
    let opacity = n / 400;
    navBar.style.opacity = `${opacity}`;
    optionBtn.style.color = rgbVar;
    optionBtn.style.border = "1px solid " + rgbVar;
  }

  if (n >= 400) {
    header.style.top = 0;
    navBar.style.opacity = 1;
    optionBtn.style.color = "rgb(51,51,51)";
    optionBtn.style.border = "1px solid rgb(51,51,51)";
  }
});

//click effect on optionBtn, MenuBtn and exitBtn
let clickCount = 0;

optionBtn.addEventListener("click", (e) => {
  //onclick the button icon changed

  if (e) {
    clickCount++;
  }
  if (clickCount % 2 === 1) {
    if (e.target.tagName === "DIV") {
      e.target.children[0].innerHTML = " expand_less ";
      expandDisplay.style.display = "block";
    }
    if (e.target.tagName === "SPAN") {
      e.target.innerHTML = " expand_less ";
      expandDisplay.style.display = "block";
    }
  } else {
    if (e.target.tagName === "DIV") {
      e.target.children[0].innerHTML = " expand_more ";
      expandDisplay.style.display = "none";
    }
    if (e.target.tagName === "SPAN") {
      e.target.innerHTML = " expand_more ";
      expandDisplay.style.display = "none";
    }
  }
});

const expandDisplay = document.querySelector(".expand");
const menuBtn = document.querySelector(".menu-btn");
const exitBtn = document.querySelector(".exit-btn");
const menuDisplay = document.querySelector(".expand-menu");

menuBtn.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    menuDisplay.style.left = 0;
  }
  if (e.target.tagName === "SPAN") {
    menuDisplay.style.left = 0;
  }
});

exitBtn.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    menuDisplay.style.left = -30 + "vw";
  }
  if (e.target.tagName === "SPAN") {
    menuDisplay.style.left = -30 + "vw";
  }
});

//add background effect while mouseover location card in expand class
const locationCard = document.querySelectorAll(".location");
// console.log(locationCard);

for (let i = 0; i < locationCard.length; i++) {
  locationCard[i].addEventListener("mouseover", (e) => {
    if (e.target.className === "location") {
      const locData = e.target.dataset.loc;
      switch (locData) {
        case "france":
          e.target.style.backgroundImage =
            "url(./assets/images/small-images/fr-Bonifacio.jpg)";
          e.target.classList.add("active");

          break;
        case "indonesia":
          e.target.style.backgroundImage =
            "url(./assets/images/small-images/id-PenidaIsland.jpg)";
          e.target.classList.add("active");

          break;
        case "greece":
          e.target.style.backgroundImage =
            "url(./assets/images/small-images/gr-Thessaloniki.jpg)";
          e.target.classList.add("active");
          break;
        case "egypt":
          e.target.style.backgroundImage =
            "url(./assets/images/small-images/eg-SahlHasheesh.jpg)";
          e.target.classList.add("active");

          break;

        case "asia":
          e.target.style.backgroundImage =
            "url(./assets/images/small-images/id-PenidaIsland.jpg)";
          e.target.classList.add("active");

          break;
        case "africa":
          e.target.style.backgroundImage =
            "url(./assets/images/small-images/eg-SahlHasheesh.jpg)";
          e.target.classList.add("active");

          break;

        case "europe":
          e.target.style.backgroundImage =
            "url(./assets/images/small-images/fr-Bonifacio.jpg)";
          e.target.classList.add("active");

          break;
      }

      e.target.addEventListener("mouseleave", () => {
        e.target.style.background = "";
        e.target.classList.remove("active");
      });
    }
  });
}

//effect of background images
const contactCard = document.querySelectorAll(".contact");
for (let i = 0; i < contactCard.length; i++) {
  contactCard[i].addEventListener("mouseenter", (e) => {
    e.target.classList.add("active");
  });
  contactCard[i].addEventListener("mouseleave", (e) => {
    e.target.classList.remove("active");
  });
}

const formSubmit = (e) => {
  e.preventDefault();

}

//effect of parallax scrolling

// const galleryPic = document.querySelectorAll(".mission .gallery .picture");
// const galleryBox = document.querySelector(".mission .gallery");
// console.log(galleryPic[0].style.backgroundSize);
// window.addEventListener("scroll", (e) => {
//   const n = document.documentElement.scrollTop;
//   if(n > 800 && n < 2000) {
//     console.log("window.scrollY", window.scrollY);
//     for(let i = 0; i < galleryPic.length; i++) {
//       const x = Math.ceil((window.scrollY % 100) / 10);
//       console.log('x',x)
//       galleryPic[i].style.backgroundSize = `auto ${120 + x}%`;

//     }
//   }
// })
