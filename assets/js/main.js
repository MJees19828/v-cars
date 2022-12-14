//===========HEADER NAV MENU==========
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

navToggle.addEventListener("close",()=>{
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("close",()=>{
  navMenu.classList.remove("show-menu");
});

//CHANGE THE BACKGROUND ON SCROLL======================
function changeHeaderColor(){
  const header = document.getElementById("header");

  if(this.scrollY >=200)header.classList.add("scroll-header");
  else header.classlist.remove("scroll-header");
} 
window.addEventListener("scroll",changeHeaderColor);

// REMOVE MENU ON CLICK FOR MOBILE======================
const navLink =document.querySelectorAll(".nav__link");

function linkAction(){
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");

}
navLink.forEach((link)=>link.addEventListener("click",linkAction));

// ACTIVE SECTION LINK=======================
const sections = document.querySelectorAll("section[idid");

function scrollActive() {
  const scrollY = Window.pageYOffset;

  secttions.forEach((Section)=> {
    const sectionHeight = Section.offsetHeight;
    const sectionTop = Section.offsetTop-50;
    sectionId = Section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document
    .querySelector(".nav__menu a[href*=" + sectionId + "]")
    .classList.add("active-linl");
    }else{
      document
      .querySelector(".nav__menu a[href*=" + section + "]")
      .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll",scrollActive);

// ===============SWIPER JS=====================
var swiper = new Swiper(".popular__container", {
  loop:true,
  spaceBetween:24,
  slidesPerView: "auto",
  grabCursor:true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },


  breakpoint: {
    768:{
      slidesPerView:3,
    },
    1024:{
      spaceBetween:48,
    }
  }
});

//==============MIXITUO====================
var mixerProducts = mixitup(".product__content", {
  selectors: {
      target: '.product__card',
  },
  animation: {
      duration: 300
  }
});

/*Link active products*/
const linkProduct = document.querySelectorAll(".product__item");

function activeProduct(){
  linkProduct.forEach((link)=>link.classList.remove("active-product"));
  this.classlist.add("active-product");
}
linkProduct.forEach((link)=>link.addEventListener("click",activeProduct));

//====================SCROLLUP==========================
function scrollUp(){
  const scrollUp =  document.getElementById("scroll-up");

  if (this.scrollY>= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove(show-scroll);
}

window.addEventListener("scroll",scrollUp);

//===============SCROLL REVEAL JS=========================
const sr = ScrollReveal({
  origin:"top",
  distance:"60px",
  duration:2500,
  delay:400,
});

sr.reveal(".home-sub");
sr.reveal(".home__title",{delay:500});
sr.reveal(".home__description",{delay:600});
sr.reveal(".home-btn",{delay:700});
sr.reveal(".home__value-number,.home__value-description",{
  delay:800,
  interval:100
});
sr.reveal(".line-h",{delay:800});
sr.reveal(".home__img",{delay:900,origin: "bottom"});


sr.reveal(".about__data",{origin: "right"});
sr.reveal(".about__img",{origin: "left"});


sr.reveal(".brands__content",{interval:100 });

sr.reveal(".why__data");
