let fruits = ["apple", "orange", "apple", "banana"]
console.log(fruits[2])
console.log(fruits[20])
console.log("fruits.length =", fruits.length)

console.log("fruits.indexOf('apple') =", fruits.indexOf("apple"))
console.log("fruits.lastIndexOf('apple') =", fruits.lastIndexOf("apple"))
console.log("fruits.indexOf('orangeeee') =", fruits.indexOf("orangeeee"))

fruits.push("new")
console.log('fruits.push("new"):')
console.log(fruits)

fruits.pop()
console.log('fruits.pop():')
console.log(fruits)

fruits.shift()
console.log('fruits.shift():')
console.log(fruits)

fruits.unshift("at")
console.log('fruits.shift():')
console.log(fruits)


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


for (let fruit of fruits) {
    console.log(fruit)
}


fruits.sort().reverse()
console.log(fruits)


console.log(fruits.join("--"))


console.log("unpacking")
let nums = [10, -5, 20, 12, 9]
console.log(Math.max(...nums))
