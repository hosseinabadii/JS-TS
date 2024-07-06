interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: number,
    startTrail(): string
}

const myUser: User = {
    dbId: 22,
    email: "abc@abc.com",
    userId: 1234,
    startTrail: () => {
        return "trail started"
    }
}

myUser.email = "my@abc.com"
// myUser.dbId = 55
console.log(myUser)
console.log(myUser.startTrail())
