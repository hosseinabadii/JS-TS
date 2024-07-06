let userName = "Khosro"
console.log("     hello   ".trim())
console.log(userName.length)
console.log(userName.indexOf("o"))
console.log(userName.lastIndexOf("o"))
console.log(userName[4])
console.log(userName.length)
console.log(userName.toLowerCase())
console.log(userName.toUpperCase())
console.log(userName.repeat(2))

console.log(userName.startsWith("K"))
console.log(userName.startsWith("k"))
console.log(userName.endsWith("o"))

console.log(userName.includes("o"))
console.log(userName.includes("p"))

console.log("123-456-789".replace("-", ""))
console.log("123-456-789".replaceAll("-", ""))

console.log("123-456-789".padStart(15, "*"))
console.log("123-456-789".padEnd(15, "*"))

console.log("i am learning JavaScript".slice(10))
console.log("i am learning JavaScript".slice(undefined, 10))
console.log("i am learning JavaScript".slice(10, 18))
console.log("i am learning JavaScript".slice(-1))
console.log("i am learning JavaScript".split(" "))
