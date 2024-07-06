import {PI, getCircumference, getArea} from "./mathUtils.js"
console.log("PI = ", PI)
const r = 10
console.log(`circumference = ${getCircumference(r).toFixed(2)} cm`)
console.log(`area          = ${getArea(r).toFixed(2)} cm^2`)
