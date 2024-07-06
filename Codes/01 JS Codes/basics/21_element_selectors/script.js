// document.getElementById()            // ELEMENT OR NULL
// document.getElementsByClassName()    // HTML COLLECTION
// document.getElementsByTagName()      // HTML COLLECTION
// document.querySelector()             // FIRST ELEMENT OR NULL
// document.querySelectorAll()          // NODELIST

const foods = document.querySelectorAll("li")

foods.forEach(food => {
    food.style.backgroundColor = "yellow"
})
