const myBox = document.getElementById("myBox")
const moveAmount = 10
let x = 0
let y = 0

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault()
        myBox.style.backgroundColor = "tomato"
        myBox.textContent = event.key.slice(5,)
        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount
                break
            case "ArrowDown":
                y += moveAmount
                break
            case "ArrowLeft":
                x -= moveAmount
                break
            case "ArrowRight":
                x += moveAmount
                break
        }

        x = (x < 0) ? 0 : x
        y = (y < 0) ? 0 : y

        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
})

document.addEventListener("keyup", event => {
    myBox.style.backgroundColor = "lightblue"
    myBox.textContent = "Stop"
    console.log(`Key down = ${event.key}`)
})
