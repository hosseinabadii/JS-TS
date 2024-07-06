type User = {
    name: string
    isActive: boolean
}

const superHeros: string[] = []
const heroPowers: Array<number> = []
const allUsers: User[] = []

superHeros.push("Thor")
heroPowers.push(100)
allUsers.push({name: "Khosro", isActive: false})
allUsers.push({name: "Ali", isActive: true})
allUsers.push({name: "Reza", isActive: false})

console.log(superHeros)
console.log(heroPowers)
console.log(allUsers)
