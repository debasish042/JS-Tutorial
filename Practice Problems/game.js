let gameNumber =27;

let userNumber = prompt("Guess the lucky number win the prize :");

while(userNumber != gameNumber){
    userNumber = prompt("Wrong Guess, Try Again :");
}
alert("Congratulations! You guessed the lucky number and won the prize!");