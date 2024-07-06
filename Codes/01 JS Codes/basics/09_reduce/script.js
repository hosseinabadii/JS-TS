const numbers = [10, 20, 30, 40]

function sum(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
}

console.log(numbers)
let x = numbers.reduce(sum)
console.log(x)
