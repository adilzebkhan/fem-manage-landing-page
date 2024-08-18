const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const copyToggle = document.querySelector(".copy-toggle");
const copyrightText = document.querySelector(".copyright-text");
const primaryNav = document.querySelector(".primary-navigation");

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive:{
    480:{

      dots: false,
     
    },
  },
});
  
  


navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

copyToggle.addEventListener("click", () => {
  copyrightText.hasAttribute("data-visible")
    ? copyToggle.setAttribute("aria-expanded", false)
    : copyToggle.setAttribute("aria-expanded", true);
  copyrightText.toggleAttribute("data-visible");
 
});