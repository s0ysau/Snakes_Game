// ===== Global Variables ===== //
const scoreBoard = document.querySelector('.scoreboard')
const gameBoard = document.querySelector('.gameboard')
const popup = document.querySelector('.popup')
const playAgain = document.querySelector('.playAgain')


let currentIndex = 0;
let appleIndex = 0; // <--- position of the apple
let snake = [2, 1, 0];
let width = 10; // <--- Horizontal 
let direction = 1; 
let score = 0;
let speed = 0.8;
let intervalTime = 0; //<--- time snake moves
let interval = 0;

// == Buttons == //
const up = document.querySelector('.top')
const down = document.querySelector('.bottom')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
// == Buttons == //

// ===== Global Variables ===== //

// ===== Functions ===== //

function createBoard() {
popup.style.display = "none";
for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    gameBoard.appendChild(div);
}
}

function startGame() {
    let squares = document.querySelectorAll(".gameboard div");
    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    snake = [2, 1, 0];
    currentIndex = 0;
    snake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcome, intervalTime);
}
