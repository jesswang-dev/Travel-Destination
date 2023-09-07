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
