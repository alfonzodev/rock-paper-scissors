// DOM ELEMENTS
const rockBtn = document.getElementById('rock');
const paperBtn= document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const userScore_span = document.getElementById('user-score');
const pcScore_span = document.getElementById('computer-score');
const result = document.querySelector('.result > p');
const userChoice_span = document.getElementById('user-move');
const pcChoice_span = document.getElementById('pc-move');

let userScore = 0;
let pcScore = 0;



// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', main());


// FUNCTIONS
function main(){
    rockBtn.addEventListener('click', () => {
        game('r');
    });
    paperBtn.addEventListener('click', () => {
        game('p');
    });
    scissorsBtn.addEventListener('click', () => {
        game('s');
    });
}

function game(userChoice){
    const pcChoice = getPcChoice();

    switch (userChoice+pcChoice){
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, pcChoice);
            break;
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, pcChoice);
            break;
        default:
            draw(userChoice, pcChoice)
            break;
    }
}

function getPcChoice(){
    const choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, pcChoice){
    userScore++;
    userChoice = convertToText(userChoice);
    pcChoice = convertToText(pcChoice);
    // Update DOM elements
    userScore_span.textContent = userScore;
    result.textContent = `${userChoice} beats ${pcChoice}. You win!`;
    userChoice_span.innerHTML = userChoice;
    pcChoice_span.innerHTML = pcChoice;
}

function lose(userChoice, pcChoice){
    pcScore++;
    userChoice = convertToText(userChoice);
    pcChoice = convertToText(pcChoice);
    // Update DOM elements
    pcScore_span.textContent = pcScore;
    result.textContent = `${userChoice} loses to ${pcChoice}. You lose!`;
    userChoice_span.innerHTML = userChoice;
    pcChoice_span.innerHTML = pcChoice;
}

function draw(userChoice, pcChoice){
    userChoice = convertToText(userChoice);
    pcChoice = convertToText(pcChoice);
    // Update DOM elements
    result.textContent = `${userChoice} is equal to ${pcChoice}. It's a draw!`
    userChoice_span.innerHTML = userChoice;
    pcChoice_span.innerHTML = pcChoice;
}

// Convert choice to text
function convertToText(choice){
    const choices = {
        'r': 'Rock',
        'p': 'Paper',
        's': 'Scissors'
    }
    return choices[choice];
}