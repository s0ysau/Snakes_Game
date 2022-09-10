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

let snakeSpeedtime = 0

// == Buttons == //
const up = document.getElementById('top')
const down = document.getElementById('bottom')
const right = document.getElementById('right')
const left = document.getElementById('left')
// == Buttons == //

document.addEventListener("DOMContentLoaded", () => {
    createBoard()
    startGame()
})

// ===== Functions ===== //
function createBoard () {
    for (let i = 0; i < 100; i++) {
        popUp.style.display= 'none'
        let div = document.createElement('div')
        gameBoard.appendChild(div);
    }
}

function startGame (){
    let squares = document.querySelectorAll('.gameboard div')
    direction = 1;
    scoreBoard.innerHTML = `<h2 class="score">Score: ${score}</h2>`;
    intervalTime = 500;
    snake = [2, 1, 0]
    currentIndex = 0
    snake.forEach((index) => squares[index].classList.add('snake'))
    interval = setInterval (snakeMove, intervalTime)
}

function onTheMove () {
    let squares = document.querySelectorAll('.gameboard div')
    if (snake[0] <= 100){
        alert('you bit yourself')
    } else {
        snakeMove(squares)
    }
}

function snakeMove () {
    let squares = document.querySelectorAll('.gameboard div')
    let tail = snake.pop()
    squares[tail].classList.remove('snake')
    snake.unshift(snake[0] + direction)
    // eat apple function
    squares[snake[0]].classList.add('snake')
}

function controls (evt) {
    if (evt.keycode === 39) {
        direction = 1 // right
    } else if (evt.keycode === 38) {
        direction = -width // up
    } else if (evt.keycode === 37) {
        direction = -1 // left
    } else if (evt.keycode === 40 ) {
        direction = + width //down
    }
}