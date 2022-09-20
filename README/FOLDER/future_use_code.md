function triggers () { //<--- While the snake moves, checks if it triggers lose conditions
    let squares = document.querySelectorAll('.gameboard div')
    //Left
    if (snake[0] % yAxis === 0 && direction === -xAxis ) { 
        (squares[snake[0]] === snake[0] + (yAxis-1))
    //Top 
    } else if (snake[0] - yAxis <= -1 && direction === -yAxis) { 
        (squares[snake[0]] === snake[0] + (-yAxis * (1 - yAxis)))
    //Bottom
    } else if (snake[0] + yAxis >= yAxis * yAxis && direction === yAxis) {
        (squares[snake[0]] === snake[0] - (yAxis * (yAxis - 1)))
    //Right
    } else if (snake[0] % yAxis === yAxis - 1 && direction === xAxis){ 
        (squares[snake[0]] === snake[0] - (yAxis - 1))
    } else if ((squares[snake[0] + direction].classList.contains('snake'))){
        alert('You bit yourself!')
        gameOver()
    } else {
        snakeMove(squares)
    }




Code that allows the snake to move from outside the border to the other side.

    function triggers () { //<--- While the snake moves, checks if it triggers lose conditions
    let squares = document.querySelectorAll('.gameboard div')
    let tail = snake.pop();
    // squares[tail].classList.remove('snake')
    // snake.unshift(snake[0] + direction)
    // // eatingApple(squares, tail)
    // squares[snake[0]].classList.add('snake')
    if ((squares[snake[0] + direction].classList.contains('snake'))){
        alert('Game Over')
        gameOver()
    //Left
    } else if (snake[0] % yAxis === 0 && direction === -xAxis ) { 
        snake.unshift(snake[0] + 19)
        squares[tail].classList.remove('snake')
        squares[snake[0]].classList.add('snake')
    //Top 
    } else if (snake[0] - yAxis <= -1 && direction === -yAxis) {
        snake.unshift(snake[0] + 380)
        squares[tail].classList.remove('snake')
        squares[snake[0]].classList.add('snake')
    //Bottom
    } else if (snake[0] + yAxis >= yAxis * yAxis && direction === yAxis) {
        snake.unshift(snake[0] - 380)
        squares[tail].classList.remove('snake')
        squares[snake[0]].classList.add('snake')
    //Right
    } else if (snake[0] % yAxis === yAxis - 1 && direction === xAxis){ 
        snake.unshift(snake[0] - 19)
        squares[tail].classList.remove('snake')
        squares[snake[0]].classList.add('snake')

    } else {
        snakeMove(squares)
    }
}


The code below is for on-screen buttons 
// <<< On-Screen Buttons >>> //
// up.addEventListener("click", () => (direction = -yAxis));
// bottom.addEventListener("click", () => (direction = +yAxis));
// left.addEventListener("click", () => (direction = -1));
// right.addEventListener("click", () => (direction = 1));

// == Buttons == //
// const up = document.getElementById('top')
// const down = document.getElementById('bottom')
// const right = document.getElementById('right')
// const left = document.getElementById('left')
// == Buttons == //