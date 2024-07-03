class Person {
    constructor(firstName, lastName, age, isEmployed) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.isEmployed = isEmployed
    }

    sayHello() {
        console.log(`Hi, I am ${this.firstName}`)
    }

    doubleAge() {
        return this.age * 2
    }
}

const person = new Person("John", "Doe", 40, true)

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.isEmployed)
person.sayHello()
const result = person.doubleAge()
console.log("result =", result)
