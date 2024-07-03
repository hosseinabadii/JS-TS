const numbers = [10, 20, 30, 40]

function double(value, index, array) {
    return value * 200
}

console.log(numbers)
let x = numbers.map(double)
console.log(numbers)
console.log(x)


let y = numbers.map(number => number ** 2);

console.log(numbers)
console.log(y)
