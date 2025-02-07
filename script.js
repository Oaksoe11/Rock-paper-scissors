function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
    
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter Rock or Paper or Scissors: ");
    while ( !humanChoice || !["rock", "paper","scissors"].includes(humanChoice.toLocaleLowerCase()) ) {
        humanChoice = prompt("Invalid input. Please enter Rock or Paper or Scissors: ");
    }
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerSelection, humanSelection ) {
    console.log(`Your choice is ${humanSelection}`);
    console.log(`Computer choice is ${computerSelection}`);

    if ( computerSelection == humanSelection ){
        console.log("It is a tie!");
    }else if ( computerSelection == "Rock" && humanSelection == "Scissors" ||
               computerSelection == "Scissors" && humanSelection == "Paper" ||
               computerSelection == "Paper" && humanSelection == "Rock" 
            ){
               console.log("Computer wins!");
               computerScore++;

    }else if (  humanSelection == "Rock" && computerSelection == "Scissors" ||
                humanSelection == "Scissors" && computerSelection == "Paper" ||
                humanSelection == "Paper" && computerSelection == "Rock" 
            ){
                console.log("You win!");
                humanScore++;
            }
}



playGame();