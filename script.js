const gameEl = document.getElementById("game")
const multiplierEl = document.getElementById("multiplier")
const planeEl = document.createElement("span")
const betBtn = document.getElementById("bet")
const betEl = document.getElementById("bet")
const moneyEl = document.getElementById("money")
const sliderEl = document.getElementById("slider")
let money = localStorage.getItem("money") || 100
let bet = 0
let multiplier = 0.5

function updateMoney() {
    sliderEl.max = money
    moneyEl.innerText = Math.round(money) + " 💰"
    localStorage.setItem("money", money)
}
updateMoney()

function sliderChange(){
    bet = sliderEl.value
    betEl.innerText = bet + " 🎲"
}

function stop(){
    money += bet * multiplier
    bet = 0
    betBtn.disabled = false
    updateMoney()
}

function start() {
    betBtn.disabled = true
    money -= bet
    updateMoney()

    gameEl.innerHTML = ""
    planeEl.classList.add("plane")
    planeEl.innerText = "🛫"
    gameEl.appendChild(planeEl)
    gameEl.appendChild(multiplierEl)

    multiplier = 0.5
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
            betBtn.disabled = false
            clearInterval(intervalID)
        }

        if (x < 450) x += 5

        if (flyUp) {
            y += (Math.floor(Math.random() * 10)) * 6
            if (y > 100) flyUp = false
        } else {
            y += (Math.floor(Math.random() * 10) - 5) * 6
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