// Guessing Game 

let gameNumber = 25;

let userNumber = prompt("Guess the lucky number win the prize :");

while (userNumber != gameNumber){
    userNumber =prompt("Wrong Guess, Try Again :");
}

console.log("Congratulations! You guessed the lucky number and won the prize!");

