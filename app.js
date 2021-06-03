// *** variables aand selectors *** //
gsap.registerPlugin(ScrollTrigger);

// --- cursor --- //
const cursor = document.querySelector(".cursor");

// --- hidden navbar --- //
const navbarBtn = document.querySelector(".nav-toggle");
const navLogo = document.querySelector(".logo-link");
const navbar = document.querySelector(".header-nav");
const headerContainer = document.querySelector(".header-container");
const navLinks = [...document.querySelectorAll(".nav-link")];
const navLinksImgs = [...document.querySelectorAll(".nav-link-img")];

// --- slide & item sections --- //
const slideSection = [...document.querySelectorAll(".slide")];
const itemSection = [...document.querySelectorAll(".item")];
const slideImg = document.querySelector(".slide img");
const itemImg = document.querySelector(".item img");
const imgBox = [...document.querySelectorAll(".img-box")];
const textBox = document.querySelector(".description-box");
const hideDivs = [...document.querySelectorAll(".hide")];
const exploreBtns = [...document.querySelectorAll(".explore")];
const arrowBtns = [...document.querySelectorAll(".arrow-link")];

const rotateImgs = ["./img/summer.jpg", "./img/autumn.jpg", "./img/spring.jpg"];
const mainImgs = ["./img/item1.jpg", "./img/item2.jpg", "./img/item3.jpg"];

// --- slide/scroll animation --- //
const hideTimeline = gsap.timeline({
  defaults: { duration: 1.5, ease: "circ.out", delay: 0.5 },
});

slideSection.forEach((section) => {
  let tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
      scrub: 2,
      snap: 1 / (slideSection.length - 1),
    },
  });
  tl.to(section.querySelector(".img-box"), {
    y: "100%",
    x: "-100%",
    opacity: 0,
  });
  tl.to(
    section.querySelector(".description-box"),
    { y: "-100%", x: "100%", opacity: 0 },
    "<"
  );
});

itemSection.forEach((section) => {
  let tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
      scrub: 2,
      snap: 1 / (slideSection.length - 1),
    },
  });
  tl.to(section.querySelector(".img-box"), {
    x: "100%",
    y: "100%",
    opacity: 0,
  });
  tl.to(
    section.querySelector(".description-box"),
    { y: "-100%", x: "-100%", opacity: 0 },
    "<"
  );
});

// *** events *** //

navbarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let navbarBtnLines = [...navbarBtn.children];
  if (!navbar.classList.contains("active")) {
    navbarBtnLines.forEach((line) => {
      line.style.background = "#17181a";
    });
    navbar.classList.add("active");
    cursor.style.border = "1px solid #17181a";
    navbarBtnLines[0].style.transform = "rotate(-50deg) translateY(10px)";
    navbarBtnLines[1].style.transform = "rotate(50deg) translateY(-10px)";
  } else {
    navbarBtnLines.forEach((line) => {
      line.style.background = "#ffffff";
    });
    navbar.classList.remove("active");
    cursor.style.border = "1px solid #ffffff";
    navbarBtnLines[0].style.transform = "rotate(0deg)";
    navbarBtnLines[1].style.transform = "rotate(0deg)";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    let target = navLinks.indexOf(e.target);
    if (target === 0) {
      gsap.to(navLinksImgs[0], { x: "-0.3rem", duration: 0.4, ease: "expo" });
      gsap.set(navLinksImgs[0], { attr: { src: "./icons/twitter-color.svg" } });
    }
    if (target === 1) {
      gsap.to(navLinksImgs[1], { x: "-0.3rem", duration: 0.4, ease: "expo" });
      gsap.set(navLinksImgs[1], {
        attr: { src: "./icons/instagram-color.svg" },
      });
    }
    if (target === 2) {
      gsap.to(navLinksImgs[2], { x: "-0.3rem", duration: 0.4, ease: "expo" });
      gsap.set(navLinksImgs[2], { attr: { src: "./icons/youtube-color.svg" } });
    }
  });
});
navLinks.forEach((link) => {
  link.addEventListener("mouseleave", (e) => {
    let target = navLinks.indexOf(e.target);
    if (target === 0) {
      gsap.to(navLinksImgs[0], { x: "0rem", duration: 0.4, ease: "expo" });
      gsap.set(navLinksImgs[0], { attr: { src: "./icons/twitter.svg" } });
    }
    if (target === 1) {
      gsap.to(navLinksImgs[1], { x: "0rem", duration: 0.4, ease: "expo" });
      gsap.set(navLinksImgs[1], { attr: { src: "./icons/instagram.svg" } });
    }
    if (target === 2) {
      gsap.to(navLinksImgs[2], { x: "0rem", duration: 0.4, ease: "expo" });
      gsap.set(navLinksImgs[2], { attr: { src: "./icons/youtube.svg" } });
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  hideTimeline
    .to(hideDivs[0], { height: 0 })
    .to(hideDivs[1], { width: 0 }, "<")
    .fromTo(slideImg, { scale: 0.7 }, { scale: 1 }, "-=2")
    .fromTo(itemImg, { scale: 0.7 }, { scale: 1 }, "-=2")
    .from(headerContainer, { opacity: 0 }, "-=.5");
});

window.addEventListener("mousemove", (e) => {
  e.preventDefault();
  cursor.style.visibility = "visible";
  cursor.style.transform = `translate(${e.pageX - 20}px, ${e.pageY - 20}px)`;
  if (
    e.target === navLogo ||
    e.target === navbarBtn ||
    e.target.classList.contains("explore") ||
    e.target.classList.contains("arrow-link")
  ) {
    cursor.style.transform = `translate(${e.pageX - 20}px, ${
      e.pageY - 20
    }px) scale(2)`;
    cursor.classList.add("active");
    exploreBtns.forEach((btn) => btn.classList.add("active"));
    arrowBtns.forEach((btn) => btn.classList.add("active"));
  } else {
    cursor.style.transform = `translate(${e.pageX - 20}px, ${
      e.pageY - 20
    }px) scale(1)`;
    cursor.classList.remove("active");
    exploreBtns.forEach((btn) => btn.classList.remove("active"));
    arrowBtns.forEach((btn) => btn.classList.remove("active"));
  }
  if (e.target === document.body) {
    cursor.classList.add("hover-body");
  } else {
    cursor.classList.remove("hover-body");
  }
});

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    let targetIndex = arrowBtns.indexOf(e.target);
    if (!target.classList.contains("rotate")) {
      target.classList.add("rotate");
      gsap.to(arrowBtns[targetIndex], {
        rotation: 180,
        duration: 1,
        ease: "expo",
      });
      gsap.fromTo(
        imgBox[targetIndex],
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1.5, ease: "expo" }
      );
      gsap.set(imgBox[targetIndex].children[0], {
        attr: { src: rotateImgs[targetIndex] },
      });
    } else {
      target.classList.remove("rotate");
      gsap.to(arrowBtns[targetIndex], {
        rotation: 0,
        duration: 1,
        ease: "expo",
      });
      gsap.fromTo(
        imgBox[targetIndex],
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1.5, ease: "expo" }
      );
      gsap.set(imgBox[targetIndex].children[0], {
        attr: { src: mainImgs[targetIndex] },
      });
    }
  });
});
