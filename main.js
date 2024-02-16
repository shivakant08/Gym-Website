const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function (e) {
  navLink.classList.toggle("open");

  const isOpen = navLink.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLink.addEventListener("click", function (e) {
  navLink.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

//Page Navigation

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains("link")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//Header Container

ScrollReveal().reveal(".header__img img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

//About Container

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

//Price Container

ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerview: "auto",
  spaceBetween: 20,
});
