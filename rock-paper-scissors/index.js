// Round result display
const roundResult = document.querySelector('.round-result');
// Get game score display
const computerScore = document.querySelector('.comp-score');
const playerScore = document.querySelector('.player-score');
const options = document.querySelectorAll('.option');
const resetBtn = document.querySelector('.reset-btn');

// win/loss displays
const winEmojis = ['😁', '😎', '😋', '🤩', '🤪'];
const loseEmojis = ['🤐', '😪', '😭', '😵', '🤕'];

// score count
let playerWins = 0;
let computerWins = 0;


// Play round function call
options.forEach(option => {
    option.addEventListener('click', game)
});

// Reset Game function call
resetBtn.addEventListener('click', () => console.log('clicked'));


// Computer input logic 
function computerPlay() {
    // let value = Math.floor(Math.random() * 3) + 1;
    // return value === 1 ? 'Rock' :
    // value === 2 ? 'Paper' : 'Scissors';

    let choices = ['rock', 'paper', 'scissors'];
    return choices[randomNum(choices)];
}

function randomNum(arr) {
    return Math.floor(Math.random() * arr.length)
}

function playerPlay(e) {
    return e.target.textContent.toLowerCase();
}

function game(e) {
    playRound(computerPlay(), playerPlay(e))
} 

function playRound(ComputerSelection, playerSelection) {
    console.log('player:', playerSelection, ', ', 'comp:', ComputerSelection);
    
    
    // Game logic
    if (ComputerSelection === playerSelection) {
        roundResult.textContent = `It's a draw! You both choose ${playerSelection}`;
        return;
    } else if (ComputerSelection === 'rock') {
        if (playerSelection === 'paper') {
            roundResult.textContent = 'You win! Paper covers rock';
            scoreIncrement("player");
            return;
        } 
        roundResult.textContent = 'You lose! Rock breaks scissors!';
        scoreIncrement("computer");
        return;
    } else if (ComputerSelection === 'paper') {
        if (playerSelection === 'scissors') {
            roundResult.textContent = 'You win! Scissors cuts paper!';
            scoreIncrement("player");
            return;
        }
        roundResult.textContent = 'You lose! Paper covers rock!';
        scoreIncrement("computer");
        return;
    } else if (ComputerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            roundResult.textContent = 'You win! Rock breaks scissors!';
            scoreIncrement("player");
            return;
        }
        roundResult.textContent = 'You lose! Scissors cuts paper!'
        scoreIncrement("computer");
        return;
    }

    // if (ComputerSelection === playerSelection) {
        // roundResult.textContent = `It's a draw! You both choose ${playerSelection}`;
        // return;
    // } else if (ComputerSelection === 'rock' && playerSelection === 'paper') {
    //     roundResult.textContent = 'You win! Paper covers rock';
    //     scoreIncrement(playerWins);
    //     return;
    // } else if (ComputerSelection === 'rock' && playerSelection === 'scissors') {
    //     roundResult.textContent = 'You lose! Rock breaks scissors';
    //     scoreIncrement(computerWins);
    //     return;
    // } else if (ComputerSelection === 'paper' && playerSelection === 'scissors') {
    //     roundResult.textContent = 'You win! Scissors cuts paper';
    //     scoreIncrement(playerWins);
    //     return;
    // } else if (ComputerSelection === 'paper' && playerSelection === 'rock') {
    //     roundResult.textContent = 'You lose! Paper covers rock';
    //     scoreIncrement(computerWins);
    //     return;
    // } else if (ComputerSelection === 'scissors' && playerSelection === 'rock') {
    //     roundResult.textContent = 'You win! Rock brakes scissors';
    //     scoreIncrement(playerWins);
    //     return;
    // } else if (ComputerSelection === 'scissors' && playerSelection === 'paper') {
    //     roundResult.textContent = 'You lose! Scissors cuts paper';
    //     scoreIncrement(computerWins);
    //     return;
    // }

}


function scoreIncrement(winner) {
    if (winner === 'player') {
        playerWins++;
    } else {
        computerWins++;
        // winner = 'computer'
    }
    
    // Set current score value to display
    computerScore.textContent = computerWins;
    playerScore.textContent = playerWins;
    console.log('Player: ', playerWins)
    console.log('Comp: ', computerWins)
    
    if (playerWins > 1 || computerWins > 1) {
        console.log('We have a winner');
        declareWin(winner);
    }
}

function declareWin(winner) {
    const gameEnd = document.querySelector('.game-end');
    gameEnd.style.transform = 'scale(1)';
    const reaction = document.querySelector('.reaction')
    const gameResult = document.querySelector('.game-result');

    if (winner === 'player') {
        reaction.textContent = winEmojis[randomNum(winEmojis)];
        gameResult.innerHTML = `You won the game. <br> You are a Champ!`;
        console.log('The winner is:', winner)
    } else {
        reaction.textContent = loseEmojis[randomNum(loseEmojis)];
        gameResult.innerHTML = 'You lost the game. <br> Try harder next time!'
        console.log('The winner is:', winner)
    }
}

function resetGame() {
    // Set initial result display 
    console.log('clicked')
    roundResult.textContent = 'Select an option below to begin game';
    // gameEnd.style.translateX = '100%';
    gameEnd.style.transform = 'scale(0)';
}


