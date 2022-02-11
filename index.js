    // first we define variables //
    let canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext("2d");
    let ballRadius = 8;
    let x = canvas.width/2;
    let y = canvas.height-30;
    let dx = 2;
    let dy = -2;
    let paddleHeight = 10;
    let paddleWidth = 75;
    let paddleX = (canvas.width-paddleWidth)/2;
    let rightPressed = false;
    let leftPressed = false;
    let brickRowCount = 3;
    let brickColumnCount = 4;
    let brickWidth = 75;
    let brickHeight = 20;
    let brickPadding = 10;
    let brickOffsetTop = 30;
    let brickOffsetLeft = 30;
    let score = 0;
    let lives = 3;
    // here are the bricks declared //
    let bricks = [];
    for(let i = 0; i < brickColumnCount; i++) {
        bricks[i] = [];
        for(let j = 0; j < brickRowCount; j++) {
            bricks[i][j] = { x: 0, y: 0, status: 1 };
        }
    }
    //adding eventlisteners //
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    // adding eventhandlers //
    function keyDownHandler(e) {
        if(e.code  == "ArrowRight") {
            rightPressed = true;
        }
        else if(e.code == 'ArrowLeft') {
            leftPressed = true;
        }
    }
    function keyUpHandler(e) {
        if(e.code == 'ArrowRight') {
            rightPressed = false;
        }
        else if(e.code == 'ArrowLeft') {
            leftPressed = false;
        }
    }
    function mouseMoveHandler(e) {
        let relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth/2;
        }
    }
    // making sure collisions are detected //
    function collisionDetection() {
        for(let i = 0; i < brickColumnCount; i++) {
            for(let j = 0; j < brickRowCount; j++) {
                let b = bricks[i][j];
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        score++;
                        if(score == brickRowCount*brickColumnCount) {
                            alert("WE HAVE A WINNER, CONGRATS!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }
    // here we draw the ball, paddle, the bricks, score and lives //
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#02bc03";
        ctx.fill();
        ctx.closePath();
    }
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "##02bc03";
        ctx.fill();
        ctx.closePath();
    }
    function drawBricks() {
        for(let i = 0; i< brickColumnCount; i++) {
            for(let j = 0; j < brickRowCount; j++) {
                if(bricks[i][j].status == 1) {
                    let brickX = (j*(brickWidth+brickPadding))+brickOffsetLeft;
                    let brickY = (i*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[i][j].x = brickX;
                    bricks[i][j].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#02bc03";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
    const drawScore = ()  => {
        ctx.font = "16px Georgia";
        ctx.fillStyle = "#02bc03";
        ctx.fillText("Score: "+score, 30, 20);
    }
    const drawLives = () => {
        ctx.font = "16px Georgia";
        ctx.fillStyle = "#02bc03";
        ctx.fillText("Lives: "+lives, canvas.width-91, 20);
    }
    // here everyting goes into this function and will be drawed when invoked //
    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();

        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        }
        else if(y + dy > canvas.height-ballRadius) {
            if(x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
                lives--;
                if(!lives) {
                    alert("YOU LOST, TRY AGAIN!");
                    document.location.reload();
                }
                else {
                    x = canvas.width/2;
                    y = canvas.height-30;
                    dx = 2;
                    dy = -2;
                    paddleX = (canvas.width-paddleWidth)/2;
                }
            }
        }

        if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
        }

        x += dx;
        y += dy;
        requestAnimationFrame(draw);
    }
    //invoke function// 
    draw();

    // make the canvas responsive //
    let canvass = document.getElementById('mycanvas');
    let heightRatio = 1.5;
    canvass.height = canvass.width * heightRatio;

    document.getElementById("readmore").onclick = function () {
        location.href = "my_dreams.html";
        }
    
    document.getElementById("readmore").onmouseup = function () {
        document.getElementById("readmore").style.backgroundColor = "green";
        }
    

