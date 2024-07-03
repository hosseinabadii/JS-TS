// function sayHello() {
//     window.alert("Hello")
// }

// setTimeout(sayHello, 3000)

// setTimeout(function(){alert("Hello again")}, 3000)

// setTimeout(() => {alert("Hello again again")}, 3000)
let timeID

function startTimer() {
    timeID = setTimeout(() => {
        alert("hello")
    }, 3000);
}

function clearTimer() {
    clearTimeout(timeID)
}
