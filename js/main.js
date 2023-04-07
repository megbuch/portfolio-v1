const hiddenEls = document.querySelectorAll(".hidden");
const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementById("mobile-menu");

// scroll animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenEls.forEach((el) => observer.observe(el));

// mobile nav menu
function toggleNavMenu() {
  navIcon.classList.toggle("open");
  if (navIcon.classList.contains("open")) {
    navMenu.style.display = "flex";
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  } else {
    navMenu.style.display = "none";
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.remove();
    }
  }
}

function closeNavMenu() {
  navIcon.classList.remove("open");
  navMenu.style.display = "none";
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
}

window.addEventListener("resize", closeNavMenu);
navIcon.addEventListener("click", toggleNavMenu);
