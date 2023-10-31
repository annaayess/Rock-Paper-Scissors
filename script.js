var computerChoice = Math.random();

var R = " Rock";
var P = " Paper";
var S = " Scissors";

function playerLoses() {
    console.log("Aw, too bad. You lose!");
    window.confirm("Rematch?");
}

function playerWins() {
    console.log("Wow I can't believe you beat me!?");
    window.confirm("Rematch?");
}

function getRandom() {
    return Math.random();

}

alert("Want to play Rock Paper Scissors?");



let playerChoice = prompt("Ready? Rock, Paper, or Scissors? (Press R, P, or S ");



if (computerChoice < 0.34) {
    computerChoice = " Rock";
} else if (computerChoice > 0.34 < 0.67) {
    computerChoice = " Paper";
} else {
    computerChoice = " Scissors";
} 
    console.log(alert("Computer chose:" + computerChoice))



if (playerChoice == computerChoice) 
    console.log(alert("It's a tie!!"));
    window.confirm("Rematch?");


if (playerChoice === "R")(computerChoice === " Scissors") {
    playerWins;
} else if (playerChoice === "R")(computerChoice === " Paper") {
    playerLoses;
} else if (playerChoice === "P")(computerChoice === " Rock") {
    playerWins;
} else if (playerChoice === "P")(computerChoice === " Scissors") {
    playerLoses;
} else if (playerChoice === "S")(computerChoice === " Paper") { 
    playerWins;
} else (playerChoice === "S")(computerChoice === " Rock") {
    playerLoses;
}
    console.log(window.confirm("Rematch?")) 
    prompt("Ready? Rock, Paper, or Scissor? (Press R, P, or S");
