// setting up variables for the canvas 2d game //
let canvas = document.querySelector("#mycanvas");
let ctx = canvas.getContext("2d");
const ballRadius = 8;
let x = canvas.width/2;
let y = canvas.height-30; 
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 6;
const brickColumnCount = 4;
const brickWidth = 70;
const brickHeight = 21;
const brickPadding = 12;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let score = 0;
let lives = 3;
// making the bricks, with a nested for-loop //
const bricks = [];
for(let i = 0; i < brickColumnCount; i++){
    bricks[i] = [];
    for(let j = 0; j < brickRowCount; j++){
        bricks[i][j] = { x : 0, y : 0, status: 1};
    }
}




