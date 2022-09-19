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

<h2>Future Features</h2>
<ul>A stage using canvas</ul>
<ul>A pause function</ul>
<ul>A safe, unified way to consolidate High Scores data</ul>


