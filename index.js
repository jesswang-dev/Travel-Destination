//script to change index background
const indexPageData = [
  {
    imgURL: "url(./assets/images/main-bkg-greece.jpg)",
    cityCountry: "Thessaloniki, Greece",
    priceTag: "STARTING AT $6700",
  },
  {
    imgURL: "url(./assets/images/main-bkg-egypt.jpg)",
    cityCountry: "Bahariya Oasis, Egypt",
    priceTag: "STARTING AT $6400",
  },
  {
    imgURL: "url(./assets/images/main-bkg-indonesia.jpg)",
    cityCountry: "Denpasar, Indonesia",
    priceTag: "STARTING AT $3300",
  },
];

let indexCount = 0;
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const slideLocation = document.querySelector(".slide-main-location");
console.log(slideLocation.children);
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
  const slideContent = slideLocation.children;
  bkg.style.backgroundImage = indexPageData[index].imgURL;
  slideContent[0].innerHTML = `${indexPageData[index].cityCountry}`;
  slideContent[1].innerHTML = `${indexPageData[index].priceTag}`;
}

//header scrolling effect
const header = document.querySelector(".header-scroll");
const logo = document.querySelector(".nav-header a");
const navBar = document.querySelector(".navigation");
const optionBtn = document.querySelector(".option-btn");
const leftScroll = document.querySelector(".scroll-bar");
const movable = document.querySelector(".movable");
const stickyCard = document.querySelector(".start-today-card");

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

  // if(n >= 4600 && n < 4900) {
  //   stickyCard.classList.add(".sticky");
  // } else {
  //   stic
  // }
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

let blogClickCount = 0;
const blogOptionBtn = document.querySelector(".blog .option-btn");

blogOptionBtn.addEventListener("click", (e) => {
  if (e) {
    blogClickCount++;
  }
  if (blogClickCount % 2 === 1) {
    if (e.target.tagName === "DIV") {
      e.target.children[0].innerHTML = " expand_less ";
      blogExpandDisplay.classList.add("active");
    }
    if (e.target.tagName === "SPAN") {
      e.target.innerHTML = " expand_less ";
      blogExpandDisplay.classList.add("active");
    }
  } else {
    if (e.target.tagName === "DIV") {
      e.target.children[0].innerHTML = " expand_more ";
      blogExpandDisplay.classList.remove("active");
    }
    if (e.target.tagName === "SPAN") {
      e.target.innerHTML = " expand_more ";
      blogExpandDisplay.classList.remove("active");
    }
  }
});

const expandDisplay = document.querySelector(".expand");
const blogExpandDisplay = document.querySelector(".blog-expand");
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
            "url(assets/images/small-images/fr-Bonifacio.jpg)";
          e.target.classList.add("active");

          break;
        case "indonesia":
          e.target.style.backgroundImage =
            "url(assets/images/small-images/id-PenidaIsland.jpg)";
          e.target.classList.add("active");

          break;
        case "greece":
          e.target.style.backgroundImage =
            "url(assets/images/small-images/gr-Thessaloniki.jpg)";
          e.target.classList.add("active");
          break;
        case "egypt":
          e.target.style.backgroundImage =
            "url(assets/images/small-images/eg-SahlHasheesh.jpg)";
          e.target.classList.add("active");

          break;

        case "asia":
          e.target.style.backgroundImage =
            "url(assets/images/small-images/id-PenidaIsland.jpg)";
          e.target.classList.add("active");

          break;
        case "africa":
          e.target.style.backgroundImage =
            "url(assets/images/small-images/eg-SahlHasheesh.jpg)";
          e.target.classList.add("active");

          break;

        case "europe":
          e.target.style.backgroundImage =
            "url(assets/images/small-images/fr-Bonifacio.jpg)";
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

const contactCard = document.querySelectorAll(".contact");
for (let i = 0; i < contactCard.length; i++) {
  contactCard[i].addEventListener("mouseenter", (e) => {
    e.target.classList.add("active");
  });
  contactCard[i].addEventListener("mouseleave", (e) => {
    e.target.classList.remove("active");
  });
}

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

const tesBtnLeft = document.querySelector("#tes-left");
const tesBtnRight = document.querySelector("#tes-right");
const testimony = document.querySelectorAll(".testimony-text");
const numberTab = document.querySelectorAll(".tab-item");

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
  testimony[current].classList.remove("active");
  testimony[next].classList.add("active");
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
  testimony[current].classList.remove("active");
  testimony[next].classList.add("active");
});

const popularCountryData = new Map();
const egyptData = [
  {
    img: "url(assets/images/greece-size-small.jpg)",
    city: "Bahariya Oasis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 6400,
  },
  {
    img: "url(assets/images/greece-size-small.jpg)",
    city: "Sahl Hasheesh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 7700,
  },
  {
    img: "url(assets/images/greece-size-small.jpg)",
    city: "Alexandria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 5300,
  },
];

const greeceData = [
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Palaiokastritsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 5600,
  },
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Meteora",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 2800,
  },
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Thessaloniki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 6700,
  },
];

const indonesiaData = [
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Canggu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 6500,
  },
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Komodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 7600,
  },
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Penida Island",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 2800,
  },
];

const franceData = [
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Bonifacio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 1400,
  },
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Brittany",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 3600,
  },
  {
    img: "url(./assets/images/greece-size-small.jpg)",
    city: "Carcassonne",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
    rate: 3900,
  },
];

popularCountryData.set(1, egyptData);
popularCountryData.set(2, greeceData);
popularCountryData.set(3, indonesiaData);
popularCountryData.set(4, franceData);

console.log(popularCountryData);
// const activeBar = document.querySelector(".the-bar");
// const tabDots = document.querySelector(".tab-dots");
// const innerDots = document.querySelector(".inner-dots");
// const innerDotsList = document.querySelectorAll(".dot");

// const tabTitles = document.querySelectorAll(".tab-title");

// tabDots.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     const current = Number(e.target.dataset.index);
//     const tabDotsList = tabDots.children;

//     for (let i = 0; i < tabDotsList.length; i++) {
//       tabDotsList[i].classList.remove("active");
//       pageList[i].classList.remove("active");
//       tabTitles[i].classList.remove("active");
//     }

//     e.target.classList.add("active");
//     pageList[current - 1].classList.add("active");
//     tabTitles[current - 1].classList.add("active");

//     for (let i = 0; i < innerDotsList.length; i++) {
//       if (current && innerDotsList[i].dataset.index > current) {
//         innerDotsList[i].classList.remove("active");
//       } else {
//         innerDotsList[i].classList.add("active");
//       }
//     }

//     activeBar.style.backgroundImage = changeBarBkgColor(current);
//   }
// });

// function changeBarBkgColor(eventIndex) {
//   return `linear-gradient(to right, black 0 ${
//     25 * eventIndex
//   }%, rgba(0, 0, 0, 0.1) ${eventIndex}% 100%)`;
// }

const tabmenu = document.querySelector(".click-bar");
const targets = document.querySelectorAll(".click-bar .tab-item");
const line = document.querySelector(".click-bar .line");
const pageList = document.querySelectorAll(".page");

tabmenu.addEventListener("click", function (e) {
  const id = e.target.dataset.index;
  if (id) {
    for (let i = 0; i < targets.length; i++) {
      targets[i].classList.remove("active");
      pageList[i].classList.remove("active");
      targets[i].classList.remove("selected");
    }
  }

  for (let i = 0; i <= Number(id); i++) {
    targets[i].classList.add("selected");
  }

  targets[id].classList.add("active");
  line.style.width = `${(1 + Number(id)) * 25}%`;
  pageList[id].classList.add("active");
});

const outers = document.querySelectorAll(".outer");
const inners = document.querySelectorAll(".inner");
const boxs = document.querySelectorAll(".box");
window.addEventListener("scroll", function (e) {
  const scrollY = window.scrollY;
  // console.log(scrollY);
  if (scrollY > 200) {
    boxs[0].classList.add("active");
    inners[0].classList.add("active");
    outers[0].classList.add("active");
  }
  if (scrollY > 400) {
    boxs[1].classList.add("active");
    inners[1].classList.add("active");
    outers[1].classList.add("active");
  }
  if (scrollY > 800) {
    boxs[2].classList.add("active");
    inners[2].classList.add("active");
    outers[2].classList.add("active");
  }
  if (scrollY > 1200) {
    boxs[3].classList.add("active");
    inners[3].classList.add("active");
    outers[3].classList.add("active");
  }
});

const aboutBox = document.querySelector(".gallery");
const itemBoxList = document.querySelectorAll(".gallery .item");
const lastBox = document.querySelector(".gallery .item:last-child");
// console.log("itemBoxList", itemBoxList);
// console.log(lastBox.offsetLeft);
// console.log(window.innerWidth);
aboutBox.addEventListener("mousemove", function (e) {
  if (e.clientX <= window.innerWidth / 2) {
    aboutBox.style.marginLeft = "-80px";
  } else {
    aboutBox.style.marginLeft = "-900px";
  }
});

for (let i = 0; i < itemBoxList.length; i++) {
  itemBoxList[i].addEventListener("mouseenter", (e) => {
    e.target.classList.add("active");
  });
  itemBoxList[i].addEventListener("click", () => {});
  itemBoxList[i].addEventListener("mouseleave", (e) => {
    e.target.classList.remove("active");
  });
}

let imageItems = document.querySelectorAll(".background-image");
// console.log(imageItems);
//the section
const galleryPage = document.querySelector(".gallery-swiper");
//the swiper
let gallery_swiper = document.querySelector(".gallerySwiper");

for (let i = 0; i < imageItems.length; i++) {
  imageItems[i].addEventListener("mouseenter", () => {
    imageItems[i].classList.add("active");
  });
  imageItems[i].addEventListener("mouseleave", () => {
    imageItems[i].classList.remove("active");
  });

  imageItems[i].addEventListener("click", () => {
    galleryPage.style.display = "block";

    //get the list of pagination bullet
    const swiperPaginationBullet = document.querySelectorAll(
      ".swiper-pagination-bullet"
    );

    let swiperSlide = document.querySelectorAll(".swiper-slide");
    gallerySwiper.slideTo(i);
    for (let j = 0; j < swiperPaginationBullet.length; j++) {
      if (
        Array.from(swiperPaginationBullet[j].classList).includes(
          "swiper-pagination-bullet-active"
        )
      ) {
        swiperPaginationBullet[j].classList.remove(
          "swiper-pagination-bullet-active"
        );
        swiperPaginationBullet[i].classList.add(
          "swiper-pagination-bullet-active"
        );
      }
    }
  });
}

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  galleryPage.style.display = "none";
  // window.scrollTo(0, 6000);
});
