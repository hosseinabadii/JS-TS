function happyBirthday(name, age) {
    console.log(`${name} age is ${age} years old!`)
}
happyBirthday("khosro", 32)


function addTow(x, y) {
    return x + y
}
let result = addTow(100, 200)
console.log(`result = ${result}`)


function isEven(number) {
    return number % 2 === 0 ? true : false
}
console.log(isEven(26))


function variableLengthFn(...items) {
    for (let item of items) {
        console.log(item)
    }
}
variableLengthFn("one", 3, "Hi")