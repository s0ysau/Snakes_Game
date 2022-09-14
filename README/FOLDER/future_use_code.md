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