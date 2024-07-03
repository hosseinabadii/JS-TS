const display = document.getElementById("display")
let timer = null
let startTime = 0
let elapedTime = 0
let isRunning = false

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapedTime
        timer = setInterval(update, 10)
        isRunning = true
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer)
        elapedTime = Date.now() - startTime
        isRunning = false
    }
}

function reset() {
    clearInterval(timer)
    timer = null
    startTime = 0
    elapedTime = 0
    isRunning = false
    display.textContent = "00:00:00:00"
}

function update() {
    elapedTime = Date.now() - startTime
    let hours = Math.floor(elapedTime / (3600 * 1000))
    let minutes = Math.floor(elapedTime / (60 * 1000) % 60)
    let seconds = Math.floor(elapedTime / 1000) % 60
    let centiseconds = Math.floor(elapedTime % 1000 / 10)

    hours = hours.toString().padStart(2, "0")
    minutes = minutes.toString().padStart(2, "0")
    seconds = seconds.toString().padStart(2, "0")
    centiseconds = centiseconds.toString().padStart(2, "0")
    const time = `${hours}:${minutes}:${seconds}:${centiseconds}`
    display.textContent = time
}
