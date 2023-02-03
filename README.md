<h1>SNAKES!</h1>

This game objective is to move the snake around a defined grid and grabbing the apple that randomly appears. 

The more apples the snake gets, the more it grows.

<h2>Movements</h2>
Player can use both arrow keys and WASD to move the snake around the grid

<h2>Main Menu</h2>

<h6>Wireframe Setup</h6>

![Page1](https://user-images.githubusercontent.com/105724406/190867832-c04370f0-d988-46be-989d-71795a08a186.jpg)
![Page2](https://user-images.githubusercontent.com/105724406/190867833-ed47d1a9-965d-486f-bf99-cd4513c505f4.jpg)

I decided to go with the blue option and put the text and 'How to Play' under the stage image.
It's much cleaner and less compacted. I also decided against a hamburger menu for now as there's isn't that much options.
9/19/22 - Added hambuger menu for high scores and about me pages.

<h2>Game board grid</h2>

<h6>Wireframe setup</h6>

![Page1 2](https://user-images.githubusercontent.com/105724406/190867999-16b02ed9-e9d5-4156-ab1e-b350ca5007a8.jpg)
![Page2 2](https://user-images.githubusercontent.com/105724406/190868000-39acae9a-9d38-4bbc-a6a9-dd1c82bc2218.jpg)
![Page3](https://user-images.githubusercontent.com/105724406/190868001-75e78873-f2ac-477a-b476-44312e18b1fa.jpg)

Originally, I had setup the grid to be 10x10 but as I gradually played around with the width and height; I was able to expand it to 20x20. Also, the original two stages were created using for loop and div, if time permits, I will create another stage using canvas.

<h2>Stage Concepts</h2>
<h6>Snakes Game</h6>
Original Stage. This is where I conduct any revisions to the code and if successful, copy it to the other stage js file if they also need it. 

<h7>Lose Conditions</h7>
If the snake bits itself (snake[0] != snake[index])<br>
If the snake hits one of the borders<br> 
(snake[0] != -1, 400; for top and bottom) <br>
(snake[0] % != yAxis when direction === 1 or -1; for left and right)

<h6>Nokia Snakes Game</h6>
I wanted to make this stage look as close to the old school Nokia game as possible. 
The difference between this and the original stage is the look, the score, which this game is additonal 7 pts rather than 1 pt and the snake is not limited to the borders, it will appear on the opposite side of the grid.

<h2>Game Over Screen</h2>
Once the player loses, they will be directed to the Game Over screen where they have to option to play again or return to the main menu.

If they obtained a high score, a popup will occur asking them to input their name and have that information stored in the local stoarge. 

<h2>High Scores</h2>
Added High Scores list 

There are two local storages: one on the GitHub Pages and one on the local HTML.

1. establish a preliminary list of high scores in the locale storage to parse and call on and label with key. (this is case, I set the variable highScores to call that preliminary list)

Below is the preliminary list of high scores as a baseline to establisha a list in which the code can call on and manipulate. 

```javascript
[{"name":"Placeholder","score":10},{"name":"Placeholder","score":9},{"name":"Placeholder","score":8},{"name":"Placeholder","score":7},{"name":"Placeholder","score":6},{"name":"Placeholder","score":5},{"name":"Placeholder","score":4},{"name":"Placeholder","score":3},{"name":"Placeholder","score":2},{"name":"Placeholder","score":1}]
 ```

2. Once the game is over, the function checkHighScore checks whether the player's score is greater than at least the lowest high score by grabbing the data via key, and if this is true. The high score screen pops up to give the player the opportunity to add their name with their score into an object. 

3. Once the name is added and submitted, the object is then added to the preliminary list, sorted to pop out the lowest score and splice to only hold the top 10 scores. 

4. The newly revised list is than added to the locale storage and becomes the new data stored.

<h5>Sprint Testing</h5>
First Run:
Regular game: pass
Everything works as expected. 

Fixed: 
Nokia game - Game over loop fixed
Borderless movement works. There might be some bugs.

Regular game - bug when the snake crashes into the border fixed but removing audio files.


<h2>Unsovled Problems/Bugs</h2>
Nokia Stage - snake cannot bite itself when the head of snake is outside the grid. 

Fonts are not showing up on the GitHub pages.

<h2>Future Features</h2>
<ul>A stage using canvas</ul>
<ul>A pause function</ul>
<ul>A safe, unified way to consolidate High Scores data</ul>


<h3>Nokia movement</h3>
<p> The code below allows the snake to go past the border and arrive in the opposite side. The outter grid is (0-19)TOP ; (19-399)RIGHT ; (380-399)BOTTOM ; (0-380)LEFT. When the snake is along these lines, when the head or snake.index moves out of the grid, a set number is either added or substracted).
From left to right, the width is 19 and from the top to bottom, the width is 380</p>

```javascript
for (let i = 0; i < snake.length; i++){
        //Left
    if (snake[0] % yAxis === 0 && direction === -xAxis ) { 
        snake.unshift(snake[0] + 19)
        squares[snake.pop()].classList.remove('snake')
        squares[snake[0]].classList.add('snake')
        break
```

If statement check if the snake is on the left most column and if the direction is going left. 
When that condition meets. The head of the snake or snake.index will add 19 to appear on the right side and will remove the tail or the last index of snake.index.

```javascript
    //Top 
    } else if (snake[0] - yAxis <= -1 && direction === -yAxis) {
        snake.unshift(snake[0] + 380)
        squares[snake.pop()].classList.remove('snake')
        squares[snake[0]].classList.add('snake')
        break
    //Bottom
    } else if (snake[0] + yAxis >= yAxis * yAxis && direction === yAxis) {
        snake.unshift(snake[0] - 380)
        squares[snake.pop()].classList.remove('snake')
        squares[snake[0]].classList.add('snake')
        break
    //Right
    } else if (snake[0] % yAxis === yAxis - 1 && direction === xAxis){ 
        snake.unshift(snake[0] - 19)
        squares[snake.pop()].classList.remove('snake')
        squares[snake[0]].classList.add('snake')
        break
    } else {
        break
    }
```

