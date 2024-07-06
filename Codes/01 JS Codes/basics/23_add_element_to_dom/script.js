// Adding Element to DOM
const prependH1 = document.createElement("h1")
prependH1.textContent = "Adding Element to DOM"
prependH1.id = "prependH1"
prependH1.style.color = "red"
prependH1.style.textAlign = "center"
document.body.prepend(prependH1)


// Adding to the end of body
const appendH1 = document.createElement("h1")
appendH1.textContent = "Adding to the end of body"
document.body.append(appendH1)


// Adding H1 to the box1
const box1H1 = document.createElement("h1")
box1H1.textContent = "Adding H1 to the box1"
document.getElementById("box1").append(box1H1)


// Adding H2 before box2
const box2 = document.getElementById("box2")
const beforeBox2H2 = document.createElement("h2")
beforeBox2H2.textContent = "Adding H2 before box2"
document.body.insertBefore(beforeBox2H2, box2)


// removing box3
const box3 = document.getElementById("box3")
document.body.removeChild(box3)


// removing last child of box4
document.getElementById("box4").removeChild(box4.lastElementChild)

// Add new list item to the list
const newListItem = document.createElement("li")
newListItem.textContent = "coconut"
newListItem.id = "coconut"
newListItem.style.fontWeight = "bold"
newListItem.style.backgroundColor = "lightgreen"
document.querySelector("#box5 ol").append(newListItem)

