const gameEl = document.getElementById("game")
const multiplierEl = document.getElementById("multiplier")
const planeEl = document.createElement("span")

const moneyEl = document.getElementById("money")
const sliderEl = document.getElementById("slider")
let money = 100

function updateMoney() {
    sliderEl.max = money
    moneyEl.innerText = money + "💰"
}

updateMoney()

function start() {
    gameEl.innerHTML = ""
    planeEl.classList.add("plane")
    planeEl.innerText = "🛫"
    gameEl.appendChild(planeEl)
    gameEl.appendChild(multiplierEl)

    let multiplier = 0.5
    let x = 0
    let y = 0
    let flyUp = true

    const intervalID = setInterval(() => {
        let prevY = y

        if (!flyUp) {
            multiplier += 0.05
            multiplierEl.innerText = Math.round(multiplier * 100) / 100
        }

        if (y <= -10 && !flyUp) {
            y = 0
            planeEl.style.bottom = y + "px"
            planeEl.innerText = "💥"
            clearInterval(intervalID)
        }

        if (x < 450) x += 5

        if (flyUp) {
            y += (Math.floor(Math.random() * 10)) * 3
            if (y > 100) flyUp = false
        } else {
            y += (Math.floor(Math.random() * 10) - 5) * 3
        }

        planeEl.style.left = x + "px"
        planeEl.style.bottom = y + "px"
        placeDot(x, y)
        placeCandle(prevY, x, y)
    }, 100)
}

function placeDot(x, y) {
    let dot = document.createElement("div")
    dot.classList.add("dot")
    dot.style.bottom = y + "px"
    dot.style.left = x + "px"
    gameEl.appendChild(dot)
}

function placeCandle(prevY, currX, currY) {
    let color = "green"
    if (prevY > currY) {
        color = "red"
    }
    let height = Math.abs(prevY - currY)
    let candle = document.createElement("div")
    candle.classList.add("candle")
    candle.style.bottom = currY + "px"
    candle.style.left = currX + "px"
    candle.style.background = color
    candle.style.height = height + "px"
    gameEl.appendChild(candle)
}