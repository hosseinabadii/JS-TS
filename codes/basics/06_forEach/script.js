let numbers = [10, 20, 30, 40]

function double(value, index, array) {
    array[index] = value * 100
}

console.log(numbers)

console.log("using .forEach() and external function:");
numbers.forEach(double)
console.log(numbers)

console.log("using .forEach() and arrow function:");
numbers.forEach((number, index) => {
    console.log(`numbers[${index}] = ${number}`);
});

console.log("using .forEach() and arrow function:");
numbers.forEach(number => console.log(number));

console.log("using for-of block:")
for (let number of numbers) {
    console.log(number);
};
