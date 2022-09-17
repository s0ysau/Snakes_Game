console.log('ah snakes!')

// ===== Global Variables ===== //
const scoreBoard = document.querySelector('.scoreboard')
const gameBoard = document.querySelector('.gameboard')

const tailLook = document.querySelector('.tail')
const gameScreen = document.getElementById('game-screen')
// == Game Over Variables == //
const popUp = document.querySelector('.popup')
const game_over_text = document.querySelector('.game_over_text')
const finalScore = document.querySelector('.finalScore')
const playAgain = document.querySelector('.playAgain')
const submit = document.querySelector('.submitHS')
// == Game Over Variables == //



let playing = true

// ===== Global Variables ===== //
// ===== Classes =====//

class options {
    constructor(increaseSpeed,snakeSpeedtime){
        this.increaseSpeed = increaseSpeed // <--- Adds speed everytime an apple is eaten
        this.snakeSpeedtime = snakeSpeedtime // <--- speed snake moves
    }
}
//(1, 85)
const testingMode = new options (0.8, 470)
const startMode = new options (0.95, 100)

let appleIndex = 0; // <--- position of the apple
let snake = [2, 1, 0]; //<--- initial snake position
let yAxis = 20; // <--- Vertical
let xAxis = 1; //<--- horizontal
let direction = 1; // <--- amount snake can move at an interval
let score = 0000;
let snakeSpeedtime = 0 // <--- speed snake moves



document.addEventListener("DOMContentLoaded", () => {
    createBoard()
    startGame()
    // showHighScores()
})


// ===== Functions ===== //


function createBoard () {
    for (let i = 0; i < 400; i++) {
        let div = document.createElement('div')
        gameBoard.appendChild(div);
    }
}

function startGame (){
    let squares = document.querySelectorAll('.gameboard div')
    placingApples(squares)
    scoreBoard.innerHTML = `<h2 class="scoreNm">${score}</h2>`;
    snake = [383, 382, 381, 380]
    snake.forEach((index) => squares[index].classList.add('snake'))
    if (playing){
    snakeSpeedtime = startMode.snakeSpeedtime
    interval = setInterval(triggers, snakeSpeedtime)
    }
}

function triggers () { //<--- While the snake moves, checks if it triggers lose conditions
    let squares = document.querySelectorAll('.gameboard div')
    if ((snake[0] % yAxis === 0 && direction === -xAxis ) || //<-- Left
        (snake[0] - yAxis <= -1 && direction === -yAxis) || //<-- Top 
        (snake[0] + yAxis >= yAxis * yAxis && direction === yAxis) || //<-- Bottom
        (snake[0] % yAxis === yAxis - 1 && direction === xAxis)){ //<-- Right
        alert('Game Over')
        gameOver()
    // for (let i = 0; i < snake.length; i++){
    // if (snake[0] % yAxis === 0 && direction === -xAxis ) { 
    //     (squares[snake[i] + 19].classList.add('snake'))
    //     snakeMove(squares)
    // //To(p 
    // }
    // if (snake[0] - yAxis <= -1 && direction === -yAxis) {
    //     (squares[snake[i] + 380].classList.add('snake'))
    //     snakeMove(squares)
    // //Bottom
    // } 
    // if (snake[0] + yAxis >= yAxis * yAxis && direction === yAxis) {
    //     (squares[snake[i] - 380].classList.add('snake'))
    //     snakeMove(squares)
    // //Right
    // } 
    // if (snake[0] % yAxis === yAxis - 1 && direction === xAxis){ 
    //     (squares[snake[i] - 19].classList.add('snake')) 
    //     snakeMove(squares)

    } else 
    if ((squares[snake[0] + direction].classList.contains('snake'))){
        alert('Game Over')
        gameOver()
    } else {
        snakeMove(squares)
    }
}
//}

function movingOutOfGrid (squares) {
    for (let i = 0; i < snake.length; i++){
        if (squares[snake[i]].classList.contains('snake')){
            // Left
            if (snake[0] % yAxis === 0 && direction === -xAxis ) { 
                (squares[snake[i] + 19].classList.add('snake'))
            //To(p 
            }
            if (snake[0] - yAxis <= -1 && direction === -yAxis) {
                (squares[snake[i] + 380].classList.add('snake'))
            //Bottom
            } 
            if (snake[0] + yAxis >= yAxis * yAxis && direction === yAxis) {
                (squares[snake[i] - 380].classList.add('snake'))
            //Right
            } 
            if (snake[0] % yAxis === yAxis - 1 && direction === xAxis){ 
                (squares[snake[i] - 19].classList.add('snake'))
            } else {
                triggers()
            }
        }
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
        score += 7
        scoreBoard.innerHTML = `<h2 class="scoreNm">${score}</h2>`;
        // <= increase speed for every apple eaten => //
        clearInterval(interval)
        snakeSpeedtime = snakeSpeedtime * startMode.increaseSpeed ;
        interval = setInterval(triggers, snakeSpeedtime)
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
window.addEventListener('keydown', keyDown)

function keyDown (evt) {
    console.log(evt)
    if (evt.code === 'ArrowRight' || evt.code === 'KeyD') {
        if(direction == -xAxis)
            return;
        direction = xAxis // right
    } else if (evt.code === 'ArrowUp' || evt.code === 'KeyW') {
        if(direction == yAxis)
            return;
        direction = -yAxis // up
    } else if (evt.code === 'ArrowLeft' || evt.code === 'KeyA') {
        if(direction == xAxis)
            return;
        direction = -xAxis // left
    } else if (evt.code === 'ArrowDown' || evt.code === "KeyS") {
        if(direction == -yAxis)
            return;
        direction = yAxis //down
    } 
}

playAgain.addEventListener('click', () => {
    replay()
})


// == Buttons and KeyStrokes == //


function gameOver () {
    clearInterval(interval)
    popUp.style.display = 'flex'
    game_over_text.innerText = `GAME OVER`
    finalScore.innerText = `YOUR SCORE ${score}`
    checkHighScore (score)
}

function replay (){
    gameBoard.innerHTML = ''
    score = 0
    createBoard()
    startGame ()
    popUp.style.display = 'none'
}

const highScoreMenu = document.querySelector('.high_score_menu')//<- Popup when score makes list
const highScoreListEl = document.querySelector('.high_score_list')//<-list of high scores
let creatingList = document.createElement('li')
let UserPlayerName = document.getElementById('playerName') 

const highScoreThreshold = 0

const highScores = JSON.parse(localStorage.getItem('nokiaHSsection')) || [];

const maxNumList = 5 //<- current number of names in HighScore list

submit.addEventListener('click', () => {
    const object = {
        'name': UserPlayerName.value, 'score': score
    };
    highScores.push(object)
    highScores.sort((a ,b) => b.score - a.score)
    highScores.splice(5)
    localStorage.setItem('nokiaHSsection', JSON.stringify(highScores))
    updatingHighScore ()
})

function updatingHighScore () {
highScoreListEl.innerHTML = highScores.map(indScore => {
    return (`<li class="listing">${indScore.name} - ${indScore.score}</li>`);
}).join("");
}

function checkHighScore (score) {
    let checkLowestScore = JSON.parse(localStorage.getItem('player'))
    console.log(checkHighScore)
    highScoreMenu.style.visibility = 'visible'
}