const nameEl = document.getElementById("meghan");
const strNameEl = nameEl.textContent;
const splitNameEl = strNameEl.split("");
const hiddenEls = document.querySelectorAll(".hidden");
const navExit = document.querySelector(".mobile-nav-exit");
const navMenu = document.getElementById("mobile-menu");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

// animated text
nameEl.textContent = "";

for (let i = 0; i < splitNameEl.length; i++) {
  nameEl.innerHTML += "<span>" + splitNameEl[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = nameEl.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitNameEl.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenEls.forEach((el) => observer.observe(el));

// mobile nav menu
navExit.addEventListener("click", closeNav);
hamburger.addEventListener("click", openNav);
window.addEventListener("resize", closeNav);

if (window.matchMedia("(max-width: 771px)").matches) {
  navMenu.style.display = "none";
  hamburger.style.display = "none";
}

if (window.matchMedia("(max-width: 770px)").matches) {
  hamburger.style.display = "block";
}

function closeNav() {
  navMenu.style.display = "none";
}

function openNav() {
  navMenu.style.display = "flex";
}
