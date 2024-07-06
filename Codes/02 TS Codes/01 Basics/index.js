function createUser(user) {
    return { name: user.name.toUpperCase(), isActive: user.isActive };
}
var newUser = createUser({ name: "khosro", email: "my@email", isActive: true });
console.log(newUser);
