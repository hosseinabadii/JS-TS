"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._password = "default";
        this._courseCount = 1;
    }
    get courseCount() {
        return this._courseCount;
    }
    get password() {
        return this._password;
    }
    set password(newPassword) {
        if (newPassword.length < 4) {
            throw new Error("Password lenght must be greater than 4");
        }
        this._password = newPassword;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamilily = true;
    }
    changeCourseCount() {
        this._courseCount += 1;
    }
}
const myUser = new SubUser("khosro@abc.com", "Khosro");
console.log(myUser);
console.log(myUser.name);
console.log(myUser.email);
console.log(myUser.password);
console.log(myUser.courseCount);
myUser.password = "d4f5ef5gt";
console.log(myUser.password);
myUser.changeCourseCount();
console.log(myUser.courseCount);
