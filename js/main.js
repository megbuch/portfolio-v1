const nameEl = document.getElementById("meghan");
const strNameEl = nameEl.textContent;
const splitNameEl = strNameEl.split("");
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
