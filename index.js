//script to change index background
const indexPageData = [
  {
    imgURL: "url(./assets/images/greece.jpg)",
    cityCountry: "Thessaloniki, Greece",
    priceTag: "STARTING AT $6700",
  },
  {
    imgURL: "url(./assets/images/egypt.jpg)",
    cityCountry: "Bahariya Oasis, Egypt",
    priceTag: "STARTING AT $6400",
  },
  {
    imgURL: "url(./assets/images/indonesia.jpg)",
    cityCountry: "Denpasar, Indonesia",
    priceTag: "STARTING AT $3300",
  },
];

let indexCount = 0;
const nextBtn = document.querySelector("#slide-next");
const prevBtn = document.querySelector("#slide-prev");
const slideLocation = document.querySelector(".slide-main");
const bkg = document.querySelector(".hero");

nextBtn.addEventListener("click", () => {
  indexCount += 1;
  changeElement(indexCount);
});

prevBtn.addEventListener("click", () => {
  indexCount -= 1;
  changeElement(indexCount);
});

function changeElement(count) {
  const index = Math.abs(count) % 3;
  const slideContent = slideLocation.children[2];
  bkg.style.backgroundImage = indexPageData[index].imgURL;
  slideContent.innerHTML = `<p>${indexPageData[index].cityCountry}</p>\n <p class="subtitle">${indexPageData[index].priceTag}</p>`;
}

//header scrolling effect
const header = document.querySelector(".header-scroll");
const logo = document.querySelector(".nav-header");
const navBar = document.querySelector(".navigation");
const optionBtn = document.querySelector(".option-btn");
const leftScroll = document.querySelector(".scroll-bar");
const movable = document.querySelector(".movable");

window.addEventListener("scroll", (e) => {
  const n = document.documentElement.scrollTop;
  // console.log(n);
  if (n < 400) {
    header.style.top = Math.ceil(n / 5) - 80 + "px";
    let color = Math.floor(51 * (400 / n));
    let rgbVar = `rgb(${color},${color},${color})`;
    logo.style.color = rgbVar;
    let opacity = n / 400;
    navBar.style.opacity = `${opacity}`;
    optionBtn.style.color = rgbVar;
    optionBtn.style.border = "1px solid " + rgbVar;

    const distance = leftScroll.offsetHeight - movable.offsetHeight;
    const view = document.body.offsetHeight - window.innerHeight;
    if (n < view) {
      movable.style.marginTop = (n / view) * distance + "px";
    }
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
    menuDisplay.style.left = -25 + "vw";
  }
  if (e.target.tagName === "SPAN") {
    menuDisplay.style.left = -25 + "vw";
  }
});

//add background effect while mouseover location card in expand class
const locationCard = document.querySelector(".expand");

locationCard.addEventListener("mouseover", (e) => {
  if (e.target.className === "location") {
    const locData = e.target.dataset.loc;
    switch (locData) {
      case "france":
        e.target.style.backgroundImage =
          "url(assets/images/greece-size-small.jpg)";
        e.target.classList.add("active");

        break;
      case "indonesia":
        e.target.style.backgroundImage =
          "url(assets/images/greece-size-small.jpg)";
        e.target.classList.add("active");

        break;
      case "greece":
        e.target.style.backgroundImage =
          "url(assets/images/greece-size-small.jpg)";
        e.target.classList.add("active");
        break;
      case "egypt":
        e.target.style.backgroundImage =
          "url(assets/images/greece-size-small.jpg)";
        e.target.classList.add("active");
        break;
    }

    e.target.addEventListener("mouseleave", () => {
      e.target.style.backgroundImage = "";
      e.target.classList.remove("active");
    });
  }
});

const outerRing = document.querySelector(".video-section");
const innerRing = document.querySelector(".video-section-light");
const videoBtn = document.querySelector(".video-button");
const videoBtnInner = document.querySelector(".video-button-inner");
const video = document.querySelector("video");
videoBtn.addEventListener("mouseenter", () => {
  outerRing.classList.add("active");
  innerRing.classList.add("active");
  videoBtnInner.classList.add("active");
  videoBtn.classList.add("active");
  video.classList.add("active");
});

videoBtn.addEventListener("mouseleave", () => {
  outerRing.classList.remove("active");
  innerRing.classList.remove("active");
  videoBtnInner.classList.remove("active");
  videoBtn.classList.remove("active");
  video.classList.remove("active");
});

const feature = document.querySelector(".feature-container");

feature.addEventListener("mouseenter", (e) => {
  e.target.classList.add("active");
});

feature.addEventListener("mouseleave", (e) => {
  e.target.classList.remove("active");
});

const testimonyData = [
  {
    message:
      "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    name: "Samantha Vohnhale",
  },
  {
    message:
      "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    name: "Wilson Tomales",
  },
  {
    message:
      "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    name: "Tammy Georgeon",
  },
  {
    message:
      "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    name: "Emily Camphon",
  },
  {
    message:
      "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    name: "Cassie Shamath",
  },
];

const tesBtnLeft = document.querySelector("#tes-left");
const tesBtnRight = document.querySelector("#tes-right");
const testimony = document.querySelector(".testimony-text");
const numberTab = document.querySelectorAll(".tab-item");

console.log(numberTab);

tesBtnLeft.addEventListener("click", () => {
  let current;
  for (let i = 0; i < 5; i++) {
    if (numberTab[i].classList.length === 2) {
      current = i;
      break;
    }
  }

  let next = current - 1;
  if (next < 0) {
    next = 4;
  }
  numberTab[current].classList.remove("active");
  numberTab[next].classList.add("active");

  testimony.children[0].innerHTML = testimonyData[next].message;
  testimony.children[1].innerHTML = testimonyData[next].name;
});

tesBtnRight.addEventListener("click", () => {
  let current;
  for (let i = 0; i < 5; i++) {
    if (numberTab[i].classList.length === 2) {
      current = i;
      break;
    }
  }

  let next = current + 1;
  if (next > 4) {
    next = 0;
  }
  numberTab[current].classList.remove("active");
  numberTab[next].classList.add("active");
  testimony.children[0].innerHTML = testimonyData[next].message;
  testimony.children[1].innerHTML = testimonyData[next].name;
});
