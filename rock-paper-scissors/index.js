const options = document.querySelectorAll('.option');
options.forEach(option => option.addEventListener('click', playRound))

// Round result display
const roundResult = document.querySelector('.round-result');

// Get game score display
const computerScore = document.querySelector('.comp-score');
const playerScore = document.querySelector('.player-score');
console.log(typeof computerScore)

// Set current score value to display
computerScore.textContent = 0;
playerScore.textContent = 0;


// Computer input logic
function computerPlay() {
    let value = Math.floor(Math.random() * 3) + 1;
    return value === 1 ? 'Rock' :
        value === 2 ? 'Paper' : 'Scissors';
}


let playerWin;
let computerWin;


function playRound(e) {
    const ComputerSelection = computerPlay().toLowerCase();
    const playerSelection = e.target.textContent.toLowerCase();
    console.log(playerSelection, ', ', ComputerSelection);

    // Game logic
    // Reset round result display
    roundResult.textContent = '';

    if (ComputerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerWin = 1;
            // roundResult.textContent = "You win!"
        } else if (playerSelection === 'scissors') {
            computerWin = 1;
        } else {
            roundResult.textContent = "it's a draw!"
        }
    }

    if (ComputerSelection === 'paper') {
        if (playerSelection === 'rock') {

        }
    }
    
    // ComputerSelection = 'scissors' ? : false;
        
}

if (playerWin) {
    roundResult.textContent = "You win! player";
} else if (computerWin) {
    roundResult.textContent = 'You lose';
}



function game() {
    return playRound(playerSelection(), computerPlay())
}

// console.log(game())

// Paper covers rock! You win!
// Rock breaks scissors!
// Scissors cuts paper!
























// function playRound(playerSelection, ComputerSelection) {


//     let result = 'You Lose! Paper beats Rock';
//     console.log(playerSelection)
//     console.log(result)
//     console.log(ComputerSelection)
//     // return result
// }



// // para.textContent = result

// function playerSelection() {
//     let option = document.getElementsByClassName('option')
//     option = [...option]
//     console.log(option)
//     let pSelection = ''
//     option.forEach(element => {
//         element.addEventListener('click', () => pSelection = element.textContent)
//     });  
//     console.log(pSelection)
//     return pSelection
// }



// function game() {
//     // for (let i = 0; i < 5; i++) {
//         playRound(playerSelection(), computerPlay())
//     // }
// }

