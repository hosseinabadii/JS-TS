type User = {
    name: string;
    email: string;
    isActive: boolean;
}

type UserPublic = {
    name: string;
    isActive: boolean;
}


function createUser(user: User): UserPublic {
    return { name: user.name.toUpperCase(), isActive: user.isActive }
}

let newUser = createUser({ name: "khosro", email: "my@email", isActive: true })
console.log(newUser)
