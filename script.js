const gameEl = document.getElementById("game");

const planeEl = document.createElement("plane");
planeEl.innerText = "🛫";
planeEl.classList.add("plane");
gameEl.appendChild(planeEl);

let x = 0;
let y = 0;
let flyUp = true

const intervalID = setInterval(() => {
    if(y <= 0 && !flyUp){
        y = 0
        planeEl.style.bottom = y + "px";
        planeEl.innerText = "💥";
        clearInterval(intervalID);
    }

    x+= 5;
    if(flyUp){
        y += (Math.floor(Math.random() * 10)) * 3;
        if(y > 100) flyUp = false;
        }else{
            y += (Math.floor(Math.random() * 10)-5) * 3;
        }
    planeEl.style.left = x + "px";
    planeEl.style.bottom = y + "px";
},200)

