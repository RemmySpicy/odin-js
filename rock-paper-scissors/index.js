const roundResult = document.querySelector('.round-result');
const computerScore = document.querySelector('.comp-score');
const playerScore = document.querySelector('.player-score');
const options = document.querySelectorAll('.option');
const resetBtn = document.querySelector('.reset-btn');
const gameEnd = document.querySelector('.game-end');
const pRoundChoice = document.querySelector('.player-round-choice');
const cRoundChoice = document.querySelector('.comp-round-choice')

roundResult.addEventListener('change', () => this.style.transform = 'scale(1.1)')


// win/loss displays
const winEmojis = ['😁', '😎', '😋', '🤩'];
const loseEmojis = ['🤐', '😪', '😭', '🤕'];

// score count
let playerWins = 0;
let computerWins = 0;

// win/los remarks
const winRemarks =  [
    'You are da bomb! 💣', 'Good job my nigga', 'Haha, lucky you!', 'Guess who\'s proud? Mommy!',
    'Excellent work!', 'You are a Champ!'
];
const lossRemarks = [
    'Better luck next time!', 'Looserrrrr! 🤪', 'Ligma ⚽⚽🤣'
];

// Play round function call
options.forEach(option => {
    option.addEventListener('click', () => {
        function playerPlay() {
            return option.querySelector('span')
            .textContent
            .toLowerCase();
        };


        playRound(computerPlay(), playerPlay());
    });
});


function randomNum(arr) {
    return Math.floor(Math.random() * arr.length)
}


// Computer input logic 
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[randomNum(choices)];
}

function playRound(ComputerSelection, playerSelection) {

    if (playerWins > 4 || computerWins > 4) {
        gameEnd.style.transform = 'scale(1)';
        return;
    }


    console.log('player:', playerSelection, ', ', 'comp:', ComputerSelection);
    pRoundChoice.textContent = playerSelection.toUpperCase();
    cRoundChoice.textContent = ComputerSelection.toUpperCase();
    
    
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
    }
    
    // Show result again if player continue game without reset
    if (playerWins > 4 || computerWins > 4) {
        declareWin(winner);
    }

    // Set current score value to display
    computerScore.textContent = computerWins;
    playerScore.textContent = playerWins;

    console.log('Player: ', playerWins)
    console.log('Comp: ', computerWins)
    
}

function declareWin(winner) {
    gameEnd.style.transform = 'scale(1)';
    gameEnd.style.opacity = '1';
    const reaction = document.querySelector('.reaction');
    const gameResult = document.querySelector('.game-result');

    if (winner === 'player') {
        reaction.textContent = winEmojis[randomNum(winEmojis)];
        gameResult.innerHTML = `You won the game. <br> ${winRemarks[randomNum(winRemarks)]}`;
        console.log('The winner is:', winner)
    } else {
        reaction.textContent = loseEmojis[randomNum(loseEmojis)];
        gameResult.innerHTML = `You lost the game. <br> ${lossRemarks[randomNum(lossRemarks)]}`;
        console.log('The winner is:', winner)
    }
}


// Reset Game function call
resetBtn.addEventListener('click', resetGame);



function resetGame() {
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    // Set initial result display 
    console.log('clicked reset');
    roundResult.textContent = 'Select your move below to begin!';
   //  gameEnd.style.translateX = '100%';
    gameEnd.style.transform = 'scale(0)';
    gameEnd.style.opacity = '0';
}


window.addEventListener('click', () => {
    if (gameEnd.style.transform == 'scale(1)') {
        gameEnd.style.transform = 'scale(0)';
    }
}, true)