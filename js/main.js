// make header fixed on scroll
let header = document.querySelector(".main-header");
let btn_up = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 200) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
  if (this.scrollY >= 1000) {
    btn_up.classList.add("show");
  } else {
    btn_up.classList.remove("show");
  }
};

// btn to up

btn_up.onclick = function () {
  // when click to the btn scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//scroll to section

const links = document.querySelectorAll(".nav-link");
links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

//Highlight Nav Menu on scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-nav li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});
//////////// colorPage//////////////////////
let properties = document.querySelector(".properties"),
  propertiesBtn = document.querySelector("#properties-btn");
let coEl = Array.from(
  document.querySelectorAll(".properties .color-setting li")
);
coEl.forEach(function (el) {
  el.style.backgroundColor = el.dataset.color;

  el.addEventListener("click", function () {
    localStorage.setItem("color", el.dataset.color);
    colorSetting(el.dataset.color);
  });
});

function colorSetting(elColer) {
  document.body.style.cssText = `--secondary:${elColer}`;
}
if (localStorage.getItem("color")) {
  colorSetting(localStorage.getItem("color"));
}

propertiesBtn.addEventListener("click", () => {
  properties.classList.toggle("open-prop");
});
