const gameEl = document.getElementById("game");

const planeEl = document.createElement("plane");
planeEl.innerText = "🛫";
planeEl.classList.add("plane");
gameEl.appendChild(planeEl);

let x = 0;
let y = 0;

setInterval(() => {
    x+= 1;
    y += Math.floor(Math.random() * 10) -4;
    planeEl.style.left = x + "px";
    planeEl.style.bottom = y + "px";
},100)
