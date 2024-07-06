var myUser = {
    dbId: 22,
    email: "abc@abc.com",
    userId: 1234,
    startTrail: function () {
        return "trail started";
    }
};
myUser.email = "my@abc.com";
// myUser.dbId = 55
console.log(myUser);
console.log(myUser.startTrail());
