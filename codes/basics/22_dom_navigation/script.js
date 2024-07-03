// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children                // HTML COLLECTION

const fruits = document.getElementById("fruits")
const firstChild = fruits.firstElementChild
firstChild.style.backgroundColor = "yellow"

const lastChild = fruits.lastElementChild
lastChild.style.backgroundColor = "blue"


const element = document.getElementById("onions")
element.style.backgroundColor = "red"
element.style.color = "white"
element.style.padding = "10px"

const previousSiblings = element.previousElementSibling
previousSiblings.style.backgroundColor = "green"
previousSiblings.style.color = "white"
previousSiblings.style.padding = "10px"

const nextSibling = element.nextElementSibling
nextSibling.style.backgroundColor = "blue"
nextSibling.style.color = "white"
nextSibling.style.padding = "10px"


const cake = document.getElementById("cake")
cake.style.backgroundColor = "red"
cake.parentElement.style.backgroundColor = "green"


const countries = document.getElementById("countries")
const children = countries.children
Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow"
    child.style.fontSize = "30px"
})