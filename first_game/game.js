// ===== Global Variables ===== //
const scoreBoard = document.querySelector('.scoreboard')
const gameBoard = document.querySelector('.gameboard')
const gameScreen = document.getElementById('game-screen')
const gulp = new Audio('../public/Sounds/gulp.mp3')
const bumponwall = new Audio('../public/Sounds/wall-bump.mp3')
// == Game Over Variables == //
const popUp = document.querySelector('.popup')
const game_over_text = document.querySelector('.game_over_text')
const finalScore = document.querySelector('.finalScore')
const playAgain = document.querySelector('.playAgain')
const submit = document.querySelector('.submitHS')
// == Game Over Variables == //
// == Modal / Main Menu Variables == //
const mainMenu = document.getElementById('main-menu')
const startGameBtn = document.getElementById('starting-game')
// == Modal / Main Menu Variables == //

const playing = true

// == High Score Variables ==//
const highScoreMenu = document.querySelector('.high_score_menu')// <- Popup when score makes list
const highScoreListEl = document.querySelector('.high_score_list')// <-list of high scores
const creatingList = document.createElement('li')
const UserPlayerName = document.getElementById('playerName')
const highScores = JSON.parse(localStorage.getItem('player')) || []

// == High Score Variables ==//

// ===== Global Variables ===== //

let appleIndex = 0 // <--- position of the apple
let snake = [2, 1, 0] // <--- initial snake position
const yAxis = 20 // <--- Vertical
const xAxis = 1 // <--- horizontal
let direction = 1 // <--- amount snake can move at an interval
let score = 0
let snakeSpeedtime = 0 // <--- speed snake moves

document.addEventListener('DOMContentLoaded', () => {
  gameScreen.style.display = 'flex'
  createBoard()
  startGame()
})

// ===== Functions ===== //

function createBoard () {
  for (let i = 0; i < 400; i++) {
    const div = document.createElement('div')
    gameBoard.appendChild(div)
  }
}

function startGame () {
  const squares = document.querySelectorAll('.gameboard div')
  placingApples(squares)
  direction = 1
  scoreBoard.innerHTML = `<h2 class="score">Score: ${score}</h2>`
  snake = [1, 0]
  snake.forEach((index) => squares[index].classList.add('snake'))
  if (playing) {
    snakeSpeedtime = 90
    interval = setInterval(triggers, snakeSpeedtime)
  }
}

function triggers () { // <--- While the snake moves, checks if it triggers lose conditions
  const squares = document.querySelectorAll('.gameboard div')
  if ((snake[0] % yAxis === 0 && direction === -xAxis) || // <-- Left
        (snake[0] - yAxis <= -1 && direction === -yAxis) || // <-- Top
        (snake[0] + yAxis >= yAxis * yAxis && direction === yAxis) || // <-- Bottom
        (snake[0] % yAxis === yAxis - 1 && direction === xAxis)) { // <-- Right
    alert('You slytherin to a wall!')
    gameOver()
  } else if ((squares[snake[0] + direction].classList.contains('snake'))) {
    alert('You bit yourself!')
    gameOver()
  } else {
    snakeMove(squares)
  }
}

function snakeMove () {
  const squares = document.querySelectorAll('.gameboard div')
  const tail = snake.pop()
  squares[tail].classList.remove('snake')
  snake.unshift(snake[0] + direction)
  eatingApple(squares, tail)
  squares[snake[0]].classList.add('snake')
}

function eatingApple (squares, tail) {
  if (squares[snake[0]].classList.contains('apple')) {
    squares[snake[0]].classList.remove('apple')
    squares[tail].classList.add('snake')
    snake.push(tail)
    placingApples(squares)
    score++
    gulp.play()
    scoreBoard.innerHTML = `<h2 class="score">Score: <span class="scoreNm">${score}</span></h2>`
    // <= increase speed for every apple eaten => //
    if (score > 2) {
      clearInterval(interval)
      snakeSpeedtime = 80
      interval = setInterval(triggers, snakeSpeedtime)
    }
    if (score > 5) {
      clearInterval(interval)
      snakeSpeedtime = 70
      interval = setInterval(triggers, snakeSpeedtime)
    }
    if (score > 10) {
      clearInterval(interval)
      snakeSpeedtime = 60
      interval = setInterval(triggers, snakeSpeedtime)
    }
    if (score > 15) {
      clearInterval(interval)
      snakeSpeedtime = 50
      interval = setInterval(triggers, snakeSpeedtime)
    }
    if (score > 20) {
      clearInterval(interval)
      snakeSpeedtime = 30
      interval = setInterval(triggers, snakeSpeedtime)
    }
    if (score > 25) {
      clearInterval(interval)
      snakeSpeedtime = 15
      interval = setInterval(triggers, snakeSpeedtime)
    }
  }
}

function placingApples (squares) {
  appleIndex = Math.floor(Math.random() * squares.length)
  const occupied = squares[appleIndex]
  if (occupied.classList.contains('snake')) {
    return placingApples(squares)
  } else {
    occupied.classList.add('apple')
  }
}

// == Buttons and KeyStrokes == //
window.addEventListener('keydown', keyDown)

function keyDown (evt) {
  if (evt.code === 'ArrowRight' || evt.code === 'KeyD') {
    if (direction == -xAxis) { return }
    direction = xAxis // right
  } else if (evt.code === 'ArrowUp' || evt.code === 'KeyW') {
    if (direction == yAxis) { return }
    direction = -yAxis // up
  } else if (evt.code === 'ArrowLeft' || evt.code === 'KeyA') {
    if (direction == xAxis) { return }
    direction = -xAxis // left
  } else if (evt.code === 'ArrowDown' || evt.code === 'KeyS') {
    if (direction == -yAxis) { return }
    direction = yAxis // down
  }
}

playAgain.addEventListener('click', () => {
  replay()
})

// == Buttons and KeyStrokes == //

function gameOver () {
  clearInterval(interval)
  popUp.style.display = 'flex'
  game_over_text.innerText = 'GAME OVER'
  finalScore.innerText = `YOUR SCORE ${score}`
  checkHighScore(score)
}

function replay () {
  gameBoard.innerHTML = ''
  score = 0
  createBoard()
  startGame()
  popUp.style.display = 'none'
}

// == Buttons and KeyStrokes == //

//= == High Score Section === //

submit.addEventListener('click', () => {
  const object = {
    name: UserPlayerName.value, score
  }
  highScores.push(object)
  highScores.sort((a, b) => b.score - a.score)
  highScores.splice(10)
  localStorage.setItem('player', JSON.stringify(highScores))
  updatingHighScore()
})

function updatingHighScore () {
  highScoreListEl.innerHTML = highScores.map(indScore => {
    return (`<li class="listing">${indScore.name} - ${indScore.score}</li>`)
  }).join('')
}

function checkHighScore (score) {
  const getLowestScore = JSON.parse(localStorage.getItem('player'))
  if (score > getLowestScore[9].score) {
    highScoreMenu.style.visibility = 'visible'
  } else {

  }
}

//= == High Score Section === //
