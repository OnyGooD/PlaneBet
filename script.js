const gameEl = document.getElementById("game");

const planeEl = document.createElement("plane");
planeEl.innerText = "🛫";
planeEl.classList.add("plane");
gameEl.appendChild(planeEl);

let x = 0;
let y = 0;
let flyUp = true

setInterval(() => {
    x+= 2;
    if(flyUp){
        y += Math.floor(Math.random() * 10);
        if(y > 100) flyUp = false;
        }else{
            y += Math.floor(Math.random() * 10)-5;
        }
    
    planeEl.style.left = x + "px";
    planeEl.style.bottom = y + "px";
},100)
