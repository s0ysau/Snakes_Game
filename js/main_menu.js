// == Modal / Main Menu Variables == //
const mainMenu = document.getElementById('main-menu')
const startGameBtn = document.getElementById('starting-game')
console.log('hello')
// == Modal / Main Menu Variables == //
// == Carousel == //
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
let currentStage = 0 
let previousStage = 0 

document.addEventListener("DOMContentLoaded", () => {
    openMainMenu ()
    // createBoard()
    // startGame()
    // showHighScores()
})

// ===== Modal ===== //

const openMainMenu = () => {
    mainMenu.style.display = 'grid'
}

startGameBtn.addEventListener('click', () => {   
    // window.location.href = 'nokia.html'
    window.location.href = 'index.html'
    mainMenu.style.display = 'none'
})

// ===== Modal ===== //


/*
    
    gameScreen.style.display = 'flex'
    createBoard()
    startGame()*/