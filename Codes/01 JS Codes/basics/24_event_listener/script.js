myBox = document.getElementById("myBox")
const myButton = document.getElementById("myButton")


// Add event listerner to the Box itself
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "OUCH!"
})

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow"
    event.target.textContent = "HOVER!"
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "CLICK!"
})

// add event listener to the button
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato"
    myBox.textContent = "OUCH!"
})

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow"
    myBox.textContent = "HOVER!"
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen"
    myBox.textContent = "CLICK!"
})