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
    priceTag: "STARTING AT $2300",
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
})


function changeElement (count) {
    const index = Math.abs(count) % 3;
    const slideContent = slideLocation.children[2];
    bkg.style.backgroundImage = indexPageData[index].imgURL;
    slideContent.innerHTML = `<p>${indexPageData[index].cityCountry}</p>\n <p class="subtitle">${indexPageData[index].priceTag}</p>`
    
}