console.log('ah snakes!')

// ===== Global Variables ===== //
const scoreBoard = document.querySelector('.scoreboard')
const gameBoard = document.querySelector('.gameboard')
const popUp = document.querySelector('.popup')
const playAgain = document.querySelector('.playAgain')


let appleIndex = 0; // <--- position of the apple
let snake = [2, 1, 0];
let yAxis = 10; // <--- Vertical
let direction = 1; // <--- amount snake can move at an interval
let score = 0;
let increaseSpeed = 0.9 // <--- Adds speed everytime an apple is eaten
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
    for (let i = 0; i < 100; i++) {
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
    snakeSpeedtime = 500;
    snake = [2, 1, 0]
    snake.forEach((index) => squares[index].classList.add('snake'))
    interval = setInterval(triggers /*snakeMove*/, snakeSpeedtime)
}

function triggers () { //<--- While the snake moves, checks if it triggers lose conditions
    let squares = document.querySelectorAll('.gameboard div')
    if (loseConditions(squares)){
        alert('you hit something')
        popUp.style.display = 'block'
    } else {
        snakeMove(squares)
    }
}

function loseConditions (squares){ 
    if ((squares[snake[0] + direction].classList.contains('snakes'))){
        return true
    } else {
        return false
    }
}

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
        snakeSpeedtime = snakeSpeedtime * increaseSpeed
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
// == Buttons and KeyStrokes == //

const replay = () => {
    gameBoard.innerHTML = ''
    createBoard()
    startGame ()
    popUp.style.display = 'none'
}
