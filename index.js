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

// adding eventlisteners for keyboard and mouse actions //
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

// adding eventhandlers //
function keyDownHandler(e) {
    if(e.code == "ArrowRight") {
        rightPressed = true;
    }else if(e.code == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.code == "ArrowRight") {
        rightPressed = false;
    }else if(e.code == "ArrowLeft") {
        rightPressed = false;
    }
}

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        ppaddleX = relativeX - paddleWidth/2;
    }
}

// defining a function in case of collisions //

const collisionDetection = () => {
    for(let i = 0; i < brickColumnCount; i++) {
        for(let j = 0; j < brickRowCount; j++) {
            let b = bricks[i][j];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
                   dy = -dy;
                   b.status = 0;
                   score++;
                   if(score == brickRowCount*brickColumnCount) {
                    alert("We HAVE A WINNER, CONGRATS!");
                    document.location.reload();
                   }
                }
            }
        }
    }
}

