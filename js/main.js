const nameEl = document.getElementById("meghan");
const strNameEl = nameEl.textContent;
const splitNameEl = strNameEl.split("");
const hiddenEls = document.querySelectorAll(".hidden");
const navIcon = document.getElementById('nav-icon');
const navMenu = document.getElementById('mobile-menu');

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
    } else { 
      entry.target.classList.remove("show")
    };
  });
});

hiddenEls.forEach((el) => observer.observe(el));

// mobile nav menu
function toggleNavMenu() {
  navIcon.classList.toggle('open');
  if (navIcon.classList.contains('open')) {
    navMenu.style.display = 'flex';
  } else {
    navMenu.style.display = 'none';
  }
}

function closeNavMenu() {
  navIcon.classList.remove('open');
  navMenu.style.display = "none";
}

navIcon.addEventListener("click", toggleNavMenu);
window.addEventListener("resize", closeNavMenu);