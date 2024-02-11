const board = document.querySelector("#board");
const btn = document.querySelector(".reset_btn");
const score = document.querySelector(".socre_");
const best_score = document.querySelector(".best_score");
const ctx = board.getContext("2d");
const gameWidth = board.width;
const gameHeight = board.height;
const snakeColor = "blue";
const appleColor = "red";
const unit = 25;
let appleX = 8 * 25;
let appleY = 8 *25;
let running  = false;
let Xvel = unit;
let Yvel = 0;
let score_ = 0;
let best_socre_ = 0;
let snake = [
    {x:unit*7, y:0},
    {x:unit*6, y:0},
    {x:unit*5, y:0},
    {x:unit*4, y:0},
    {x:unit*3, y:0}
]

window.addEventListener("keydown", changeDirection);
btn.addEventListener("click", resetGame);

function drawSnake(){};
function moveSnake(){};
function startGame(){};
function resetGame(){};
function changeDirection(){};
function nextTick(){};
function createFood(){};
function drawFood(){};
function checkGameOver(){};
function displayGameOver(){};
function clearBoard(){};
