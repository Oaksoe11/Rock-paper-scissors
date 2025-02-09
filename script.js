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

// function getHumanChoice(){
//     let humanChoice = prompt("Please enter Rock or Paper or Scissors: ");
//     while ( !humanChoice || !["rock", "paper","scissors"].includes(humanChoice.toLocaleLowerCase()) ) {
//         humanChoice = prompt("Invalid input. Please enter Rock or Paper or Scissors: ");
//     }
//     return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
// }

let humanScore = 0;
let computerScore = 0;
const messageBox = document.getElementById("message");

function playRound(humanSelection ) {
    const computerSelection = getComputerChoice();

    console.log(`Your choice is ${humanSelection}`);
    console.log(`Computer choice is ${computerSelection}`)

    if ( computerSelection == humanSelection ){
        message.textContent = "It is a tie!";
    }else if ( computerSelection == "Rock" && humanSelection == "Scissors" ||
               computerSelection == "Scissors" && humanSelection == "Paper" ||
               computerSelection == "Paper" && humanSelection == "Rock" 
            ){
                message.textContent = "Computer Wins!";
                computerScore++;

    }else if (  humanSelection == "Rock" && computerSelection == "Scissors" ||
                humanSelection == "Scissors" && computerSelection == "Paper" ||
                humanSelection == "Paper" && computerSelection == "Rock" 
            ){
                message.textContent = "You win!";
                humanScore++;
            }
    
}


const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

rock.addEventListener("click", () => {playRound("Rock");});
paper.addEventListener("click", () => {playRound("Paper");});
scissors.addEventListener("click", () => {playRound("Scissors");});


