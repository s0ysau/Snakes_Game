// ===== Global Variables ===== //
const scoreBoard = document.querySelector('.scoreboard')
const gameboard = document.querySelector('.gameboard')
const popup = document.querySelector('.popup')
const playAgain = document.querySelector('.playAgain')

let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let startingSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;

// == Buttons == //
const up = document.querySelector('.top')
const down = document.querySelector('.bottom')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
// == Buttons == //

