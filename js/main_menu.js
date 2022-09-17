// == Modal / Main Menu Variables == //
const mainMenu = document.getElementById('main-menu')
const startGameBtn = document.getElementById('starting-game')
const description = document.querySelector('.description')
// == Modal / Main Menu Variables == //
// == Carousel == //
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
const images = document.querySelectorAll('.image')
let currentStage = 0 
let previousStage = 0 

document.addEventListener("DOMContentLoaded", () => {
    openMainMenu ()
})

// ===== Modal ===== //

const openMainMenu = () => {
    mainMenu.style.display = 'grid'
}

startGameBtn.addEventListener('click', () => {   
    if (images[currentStage].classList.contains('regular-game')){
        window.location.href = 'index.html'
    } else if (images[currentStage].classList.contains('nokia-game')){
        window.location.href = 'nokia.html'
    }
    mainMenu.style.display = 'none'
})

// ===== Modal ===== //

next.addEventListener('click', (evt) => {
    previousStage = currentStage
    if (currentStage < images.length - 1){
        currentStage += 1;
    } else {
        currentStage = 0
    }
    images[previousStage].style.display = 'none'
    images[currentStage].style.display = 'grid'
    gameDescription()
})

previous.addEventListener('click', (evt => {
    previousStage = currentStage
    if (currentStage > 0){
        currentStage--
    } else {
        currentStage = images.length-1
    }
    images[previousStage].style.display = 'none'
    images[currentStage].style.display = 'grid'
    gameDescription()
}))

function gameDescription () {
    if (images[currentStage].classList.contains('regular-game')){
        description.innerHTML = `<h2 class="text-description">Regular game of Snake</h2>
        <p>
        Move the snake around and eat those apples!
        The more the snake eats, the more it grows</p>
        <p>You can use WASD or Arrow keys to move</p>`
    } else if (images[currentStage].classList.contains('nokia-game')){
        description.innerHTML = `<h2 class="text-description">Old School Snake
        </h2><p>If you are feeling a bit nostalgic</p>
        <p>You can use WASD or Arrow keys to move</p>`
    } else {
        return
    }
}

// gameScreen.style.display = 'flex'
// createBoard()
// startGame()