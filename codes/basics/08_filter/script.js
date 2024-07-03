const numbers = [11, 20, 30, 45]

function isEven(value) {
    return value % 2 === 0
}

console.log(numbers)
let x = numbers.filter(isEven)
console.log(numbers)
console.log(x)


let y = numbers.filter(number => {
    return number % 2 !== 0
});

console.log(numbers)
console.log(y)
