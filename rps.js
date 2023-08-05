const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("computer-score")
let playerChoice = "";
let compChoice = "";
let prompt = document.getElementById("prompt")
let compAtk = "";

// WHAT TO ADD:
// side to win 5 points win
// then ui for like "YOU WIN" / "TRY AGAIN"
// ability to reload



rock.addEventListener("click", function() {
    playerChoice = "rock";
    gameDecide(playerChoice);
});
paper.addEventListener("click", function() {
    playerChoice = "paper";
    getComputerChoice();
    gameDecide(playerChoice);
});
scissors.addEventListener("click", function() {
    playerChoice = "scissors";
    getComputerChoice();
    gameDecide(playerChoice);
});

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1){
        compChoice = "rock";
    } 
    else if (randomChoice == 2){
        compChoice= "paper";
    } 
    else if (randomChoice == 3){
        compChoice = "scissors";
    }
    return compChoice;
}

function gameDecide(playerChoice){
    console.log("player: ", playerChoice);
    compAtk = getComputerChoice();
    console.log("comp: ", compAtk);
    console.log("===========");

        if (compAtk == 'rock'){
            if (playerChoice == 'rock'){
                prompt.textContent = "TIE"
            } else if (playerChoice == "paper"){
                prompt.textContent = "YOU win with ROCK against PAPER"
                playerScore.textContent++;
            } else if (playerChoice == "scissors"){
                prompt.textContent = "COMPUTER win with ROCK against SCISSORS"
                compScore.textContent++;
            }
        } else if (compAtk == "paper"){
            if (playerChoice == 'paper'){
                prompt.textContent = "TIE"
            } else if (playerChoice == "rock"){
                prompt.textContent = "COMPUTER win with PAPER against ROCK"
                compScore.textContent++;
            } else if (playerChoice  == "scissors"){
                prompt.textContent = "YOU win with SCISSORS against PAPER"
                playerScore.textContent++;
            }
        } else if (compAtk == "scissors"){
            if (playerChoice  == 'scissors'){
                prompt.textContent ="TIE"
            } else if (playerChoice  == "rock"){
                prompt.textContent = "YOU win with ROCK against SCISSORS"
                playerScore.textContent++;
            } else if (playerChoice == "paper"){
                prompt.textContent ="COMPUTER win with scissors against PAPER"
                compScore.textContent++;
            }
        }

        
}