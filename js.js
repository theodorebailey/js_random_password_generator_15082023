// Access HTML element with ID password
const passwordBox = document.getElementById("password");

// set length of random password
const length = 12;

// add all characters available for password as string data
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{][<>/-=";

const allChars = upperCase + lowerCase + number + symbols;

// create random password generator function
function randomPG(){
    // password container
    let password = "";
    // automatically add all relevant characters
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // make up the rest of the password using random selection
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

// copy password
// we will create a simple copy function
// we will access the password input box
// use a built in select function
// and use an execCommand copy
function copyP() {
    passwordBox.select();
    document.execCommand("copy");
}