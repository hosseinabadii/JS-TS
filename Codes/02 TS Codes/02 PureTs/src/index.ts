// class User {
//     email: string
//     name: string
//     private password: string
//     constructor(email: string, name: string, password: string) {
//         this.email = email;
//         this.name = name;
//         this.password = password
//     }
// }

class User {
    private _password: string = "default"
    protected _courseCount: number = 1

    constructor(
        public email: string,
        public name: string,
    ) {
    }

    get courseCount(): number {
        return this._courseCount
    }

    get password(): string {
        return this._password
    }

    set password(newPassword: string) {
        if (newPassword.length < 4) {
            throw new Error("Password lenght must be greater than 4")

        }
        this._password = newPassword
    }
}

class SubUser extends User {
    isFamilily: boolean = true
    changeCourseCount() {
        this._courseCount +=1
    }
}

const myUser = new SubUser("khosro@abc.com", "Khosro")

console.log(myUser)
console.log(myUser.name)
console.log(myUser.email)
console.log(myUser.password)
console.log(myUser.courseCount)
myUser.password = "d4f5ef5gt"
console.log(myUser.password)
myUser.changeCourseCount()
console.log(myUser.courseCount)
