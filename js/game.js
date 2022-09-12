console.log('ah snakes!')

// ===== Global Variables ===== //
const scoreBoard = document.querySelector('.scoreboard')
const gameBoard = document.querySelector('.gameboard')
const popUp = document.querySelector('.popup')
const playAgain = document.querySelector('.playAgain')

class options {
    constructor(increaseSpeed,snakeSpeedtime){
        this.increaseSpeed = increaseSpeed // <--- Adds speed everytime an apple is eaten
        this.snakeSpeedtime = snakeSpeedtime // <--- speed snake moves
    }
}

const testingMode = new options (0.9, 500)

let appleIndex = 0; // <--- position of the apple
let snake = [2, 1, 0];
let yAxis = 20; // <--- Vertical
let direction = 1; // <--- amount snake can move at an interval
let score = 0;
let snakeSpeedtime = 0 // <--- speed snake moves

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
    for (let i = 0; i < 400; i++) {
        popUp.style.display= 'none'
        let div = document.createElement('div')
        gameBoard.appendChild(div);
    }
}

function startGame (){
    let squares = document.querySelectorAll('.gameboard div')
    placingApples(squares)
    direction = 1;
    scoreBoard.innerHTML = `<h2 class="score">Score: ${score}</h2>`;
    snake = [2, 1, 0]
    snake.forEach((index) => squares[index].classList.add('snake'))
    snakeSpeedtime = testingMode.snakeSpeedtime
    interval = setInterval(triggers /*snakeMove*/, snakeSpeedtime)
}

function triggers () { //<--- While the snake moves, checks if it triggers lose conditions
    let squares = document.querySelectorAll('.gameboard div')
    if (bitingItself(squares)){
        alert('You bit yourself!')
        popUp.style.display = 'block'
    } else {
        snakeMove(squares)
    }
}

function bitingItself (squares){ 
    if ((squares[snake[0] + direction].classList.contains('snake'))){
        clearInterval(interval)
        return true
    } else {
        return false
    }
}

// function hittingTheWall () {

// }

function snakeMove () {
    let squares = document.querySelectorAll('.gameboard div')
    let tail = snake.pop()
    squares[tail].classList.remove('snake')
    snake.unshift(snake[0] + direction)
    eatingApple(squares, tail)
    squares[snake[0]].classList.add('snake')
} 

function eatingApple (squares, tail){
    if (squares[snake[0]].classList.contains('apple')){
        squares[snake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        snake.push(tail)
        placingApples(squares)
        score++
        scoreBoard.innerHTML = `<h2 class="score">Score: ${score}</h2>`;
        // <= increase speed for every apple eaten => //
        clearInterval(interval)
        snakeSpeedtime = snakeSpeedtime * testingMode.increaseSpeed ;
        interval = setInterval(triggers /*snakeMove*/, snakeSpeedtime)
    }
}


function placingApples (squares) {
    appleIndex = Math.floor(Math.random() * squares.length)
    let occupied = squares[appleIndex]
    if (occupied.classList.contains('snake')){
        return placingApples(squares)
    } else {
        occupied.classList.add('apple')
    }
}

// == Buttons and KeyStrokes == //
window.addEventListener('keydown', (evt) => {
    console.log(evt)
    if (evt.code === 'ArrowRight' || evt.code === 'KeyD') {
        direction = 1 // right
    } else if (evt.code === 'ArrowUp' || evt.code === 'KeyW') {
        direction = -yAxis // up
    } else if (evt.code === 'ArrowLeft' || evt.code === 'KeyA') {
        direction = -1 // left
    } else if (evt.code === 'ArrowDown' || evt.code === "KeyS") {
        direction = + yAxis //down
    } 
})

up.addEventListener("click", () => (direction = -yAxis));
bottom.addEventListener("click", () => (direction = +yAxis));
left.addEventListener("click", () => (direction = -1));
right.addEventListener("click", () => (direction = 1));

playAgain.addEventListener('click', () => {
    replay()
})
// == Buttons and KeyStrokes == //

const replay = () => {
    gameBoard.innerHTML = ''
    createBoard()
    startGame ()
    popUp.style.display = 'none'
}
