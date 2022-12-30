const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

///-------------------------------------------------------------------------------------------------------///

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.2 });
tl.to(".slider", { y: "-100%", duration: 3, delay: 0.5 });
tl.to(".animation", { y: "-100%", duration: 2 }, "-=2.4");
tl.fromTo(".navigation", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo(".intro", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");
///---------------------------------------------------------------------------------------------------------////////
const page = document.querySelector(".menuPage");
const exitBtn = document.querySelector(".exit");
const openMenu = document.querySelector(".menu");
const menuNav = document.querySelector(".menuNav");
const c = document.querySelector(".cursor");
openMenu.addEventListener("mouseover", function () {
  c.classList.add("coloredMenu");
  openMenu.style.stroke = "black";
});
openMenu.addEventListener("mouseleave", function () {
  c.classList.remove("coloredMenu");
  openMenu.style.stroke = "white";
});

exitBtn.addEventListener("click", function () {
  page.classList.add("invisible");
  c.style.borderColor = "white";
  c.style.backdropFilter = "grayscale(1)";
  c.style.zIndex = "-2";
  console.log("boom");
});

openMenu.addEventListener("click", function () {
  page.classList.remove("invisible");
  c.style.backdropFilter = "none";
  c.style.borderColor = "black";
  c.style.zIndex = "999999";
});

menuNav.addEventListener("click", function () {
  page.classList.add("invisible");
  c.style.borderColor = "white";
  c.style.backdropFilter = "grayscale(1)";
  c.style.zIndex = "-2";
});

///---------------------------------------------------------------------------------------------------------////////

window.addEventListener("mousemove", cursor);
function cursor(e) {
  c.style.top = e.pageY + "px";
  c.style.left = e.pageX + "px";
}

///---------------------------------------------------------------------------------------------------------////////

const greek = document.querySelector(".image");
greek.addEventListener("mouseover", function () {
  c.classList.add("grow");
  c.style.border = "1px solid";
});
greek.addEventListener("mouseleave", function () {
  c.classList.remove("grow");
  c.style.border = "2px solid";
});

const cardBlog = document.querySelectorAll(".card");
cardBlog.forEach((card) => {
  card.addEventListener("mouseover", function () {
    c.classList.add("grow");
    c.style.border = "1px solid";
    c.style.zIndex = "99999";
  });
  card.addEventListener("mouseleave", function () {
    c.classList.remove("grow");
    c.style.border = "2px solid";
    c.style.zIndex = "-2";
  });
});

const cardProj = document.querySelectorAll(".proj");
cardProj.forEach((proj) => {
  proj.addEventListener("mouseover", function () {
    c.classList.add("grow");
    c.style.border = "1px solid";
    c.style.zIndex = "99999";
  });
  proj.addEventListener("mouseleave", function () {
    c.classList.remove("grow");
    c.style.border = "2px solid";
    c.style.zIndex = "-2";
  });
});

const home = document.querySelector(".home");
home.addEventListener("mouseover", function () {
  home.classList.add("grow");
});
home.addEventListener("mouseleave", function () {
  home.classList.remove("grow");
});

const bloPro = document.querySelector(".bloPro");
bloPro.addEventListener("mouseover", function () {
  bloPro.classList.add("grow");
});
bloPro.addEventListener("mouseleave", function () {
  bloPro.classList.remove("grow");
});

const contacts = document.querySelector(".contacts");
contacts.addEventListener("mouseover", function () {
  contacts.classList.add("grow");
});
contacts.addEventListener("mouseleave", function () {
  contacts.classList.remove("grow");
});

//let backgroundFill = document.getElementById("Background").getAttribute("fill")
