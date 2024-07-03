const person = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    isEmployed: true,
    sayHello: function () { console.log(`Hi, I am ${this.firstName}`) },
    doubleAge: function () { return this.age * 2; }
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.isEmployed)
person.sayHello()
const result = person.doubleAge()
console.log(result)
