// try {
//     console.log(x);
// } catch(error) {
//     console.error(`This is error:\n${error}`)
// } finally {
//     console.log("finally executes")
// }

// console.log("after try-catch-finally")

try {
    const dividend = Number(window.prompt("Enter a dividend:"))
    const divisor = Number(window.prompt("Enter a divisor:"))

    if (divisor == 0) {
        throw new Error("You can't divide by zero!")
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("values must be number")
    }
    const result = dividend / divisor
    console.log(`result is ${result}`)
} catch(error) {
    console.error(error)
}