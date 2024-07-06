class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    display() {
        console.log(`This is ${this.name} with ${this.age}`)
    }
}

class Rabbit extends Animal {
    constructor(name, age, speed) {
        super(name, age)
        this.speed = speed

    }

    display() {
        super.display()
        console.log(`${this.name} speed is ${this.speed}`)
    }
}

const rabbit1 = new Rabbit("rabbit111", 2, 20)
console.log(rabbit1)
console.log("name:", rabbit1.name)
console.log("age:", rabbit1.age)
console.log("speed:", rabbit1.speed)
console.log("undefined attr:", rabbit1.nist)
rabbit1.display()
rabbit1.speed = 30
rabbit1.display()

