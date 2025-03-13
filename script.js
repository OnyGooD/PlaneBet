const gameEl = document.getElementById("game");
const multiplierEl = document.getElementById("multiplier");
const planeEl = document.createElement("plane");
planeEl.innerText = "🛫";
planeEl.classList.add("plane");
gameEl.appendChild(planeEl);
let multiplier = 0.8;
let x = 0;
let y = 0;
let flyUp = true;

const intervalID = setInterval(() => {
    if(!flyUp){
        multiplier += 0.05;
        multiplierEl.innerText = Math.round(multiplier*100) / 100;
    }
    if (y <= -10 && !flyUp) {
        y = 0;
        planeEl.style.bottom = y + "px";
        planeEl.innerText = "💥";
        clearInterval(intervalID);
    }
    if (x < 450) x += 5;
    if (flyUp) {
        y += (Math.floor(Math.random() * 10)) * 3;
        if (y > 100) flyUp = false;
    } else {
        y += (Math.floor(Math.random() * 10) - 5) * 3;
    }
    planeEl.style.left = x + "px";
    planeEl.style.bottom = y + "px";
}, 100);