// script.js

function generatePassword() {
    let length = document.getElementById('length').value;
    let includeLowercase = document.getElementById('include-lowercase').checked;
    let includeUppercase = document.getElementById('include-uppercase').checked;
    let includeNumbers = document.getElementById('include-numbers').checked;
    let includeSymbols = document.getElementById('include-symbols').checked;

    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%&*()_+~|}{[]?></=";

    let allChars = "";
    if (includeLowercase) allChars += lower;
    if (includeUppercase) allChars += upper;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    if (length <= 0) {
        alert("password lenght must be at least 1")
        return;
    }

    if (allChars === "") {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('password').value = password;
}
