const nameEl = document.getElementById("meghan");
const strNameEl = nameEl.textContent;
const splitNameEl = strNameEl.split("");
const hiddenEls = document.querySelectorAll(".hidden");

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
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenEls.forEach((el) => observer.observe(el));
