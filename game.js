function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    let compAttack = "";
    if (randomChoice == 1){
        compAttack = "rock";
    } 
    else if (randomChoice == 2){
        compAttack = "paper";
    } 
    else if (randomChoice == 3){
        compAttack = "scissors";
    }
    return compAttack;
}

function getUserChoice(){
    const userAttack = prompt("Pick your attack: [rock, paper, scissors]");
    userAttack.toLowerCase;
    return userAttack;
}


function gameDecide(){
    let userPts = 0;
    let compPts = 0;
    while (userPts < 3 && compPts < 3){
        let x = getComputerChoice();
        let y = getUserChoice();
        if (x == 'rock'){
            if (y == 'rock'){
                console.log("tie rock rock");
            } else if (y == "paper"){
                console.log("user win rock paper");
                userPts++;
            } else if (y == "scissors"){
                console.log("comp win rock scissors");
                compPts++;
            }
        }
        else if (x == "paper"){
            if (y == 'paper'){
                console.log("tie paper paper");
            } else if (y == "rock"){
                console.log("comp win paper rock");
                compPts++;
            } else if (y == "scissors"){
                console.log("user win paper scissors");
                userPts++;
            }
        }
        else if (x == "scissors"){
            if (y == 'scissors'){
                console.log("tie scissors scissors");
            } else if (y == "rock"){
                console.log("user win scissors rock");
                userPts++;
            } else if (y == "paper"){
                console.log("comp win scissors paper");
                compPts++;
            }
        }

        console.log("User: ", userPts);
        console.log("Comp: ",compPts);
    }



}

gameDecide();

  