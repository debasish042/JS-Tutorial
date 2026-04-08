
let fullName = prompt("Enter your full name:");

let userName = "@" + fullName.toLowerCase().replace(/\s/g, "") + fullName.length;

alert("Your generated username is: " + userName);