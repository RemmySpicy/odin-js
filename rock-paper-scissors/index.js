const button = document.querySelector('button');
const para = document.querySelector('p')
// button.addEventListener('click', game)


function computerPlay() {
    let value = Math.floor(Math.random() * 3) + 1;
    return value === 1 ? 'Rock' :
        value === 2 ? 'Paper' : 'Scissors';
}

function playerSelection() {
    return prompt('Input "Rock", "Paper" or "Scissors"', '').toLowerCase();
}

function playRound(playerSelection, ComputerSelection) {
    let result = 'You Lose! Paper beats Rock'
    document.write(result);
}



function game() {
    return playRound(playerSelection(), computerPlay())
}

console.log(game())
























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

