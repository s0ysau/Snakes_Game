console.log('ah snakes!')

// ===== Global Variables ===== //
const scoreBoard = document.querySelector('.scoreboard')
const gameBoard = document.querySelector('.gameboard')
const popUp = document.querySelector('.popup')
const playAgain = document.querySelector('.playAgain')


let currentIndex = 0;
let appleIndex = 0; // <--- position of the apple
let snake = [2, 1, 0];
let width = 10; // <--- Horizontal
let direction = 1; // <--- amount snake can move at an interval
let score = 0;


// == Buttons == //
const up = document.getElementById('top')
const down = document.getElementById('bottom')
const right = document.getElementById('right')
const left = document.getElementById('left')
// == Buttons == //


// ===== Functions ===== //
function createBoard () {
    for (let i = 0; i < 100; i++) {
        popUp.style.display= 'none'
        let div = document.createElement('div')
        gameBoard.appendChild(div);
    }
}