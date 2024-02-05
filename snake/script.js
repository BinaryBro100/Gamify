var unit = 25;
var rows = 20;
var cols = 20;
var board;
var context;
var foodX;
var foodY;
var sX = unit * 5;
var sY = unit * 5;
var velocityX = 0;
var velocityY = 0;

function placeFood(){
    foodX = Math.floor((Math.random()*cols)*unit);
    foodY = Math.floor((Math.random()*rows)*unit);
}


function update(){
    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height);
    
    context.fillStyle = "green";
    sX += velX * unit;
    sY += velY * unit;
    context.fillRect(sX, sY, unit, unit);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, unit, unit);
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * unit;
    board.width = cols * unit;
    context = board.getContext("2d");
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function changeDirection(e) {
    if (e.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
}












// var blockSize = 25;
// var rows = 20;
// var cols = 20;
// var board;
// var context; 

// var snakeX = blockSize * 5;
// var snakeY = blockSize * 5;

// var velocityX = 0;
// var velocityY = 0;

// var snakeBody = [];
// var foodX;
// var foodY;

// var gameOver = false;

// window.onload = function() {
//     board = document.getElementById("board");
//     board.height = rows * blockSize;
//     board.width = cols * blockSize;
//     context = board.getContext("2d");

//     placeFood();
//     document.addEventListener("keyup", changeDirection);
//     // update();
//     setInterval(update, 1000/10);
// }

// function update() {
//     context.fillStyle="black";
//     context.fillRect(0, 0, board.width, board.height);

//     context.fillStyle="red";
//     context.fillRect(foodX, foodY, blockSize, blockSize);

//     context.fillStyle="lime";
//     snakeX += velocityX * blockSize;
//     snakeY += velocityY * blockSize;
//     context.fillRect(snakeX, snakeY, blockSize, blockSize);
// }

// function changeDirection(e) {
//     if (e.code == "ArrowUp") {
//         velocityX = 0;
//         velocityY = -1;
//     }
//     else if (e.code == "ArrowDown") {
//         velocityX = 0;
//         velocityY = 1;
//     }
//     else if (e.code == "ArrowLeft") {
//         velocityX = -1;
//         velocityY = 0;
//     }
//     else if (e.code == "ArrowRight") {
//         velocityX = 1;
//         velocityY = 0;
//     }
// }


// function placeFood() {
//     foodX = Math.floor(Math.random() * cols) * blockSize;
//     foodY = Math.floor(Math.random() * rows) * blockSize;
// }
