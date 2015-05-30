var x;
var y;
var r = 5;
var dx;
var dy;
var ctx = $('#canvas')[0].getContext("2d");
var WIDTH = $("#canvas").width();
var HEIGHT = $("#canvas").height();

var paddlex;
var paddleh;
var paddlew;

var rightDown = false;
var leftDown = false;

var canvasMinX;
var canvasMaxX;

var ballOut = false;

var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;

var lifes = 3;

var keepGoing = false;
var started = false;

function init() {
    started = true;

    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();

    resetBall();

    paddlex = WIDTH / 2;
    paddleh = 10;
    paddlew = 75;

    NROWS = 5;
    NCOLS = 10;
    BRICKWIDTH = (WIDTH/NCOLS) - 1;
    BRICKHEIGHT = 15;
    PADDING = 1;

    bricks = new Array(NROWS);
    for (i=0; i < NROWS; i++) {
        bricks[i] = new Array(NCOLS);
        for (j=0; j < NCOLS; j++) {
            bricks[i][j] = 1;
        }
    }

    canvasMinX = $("#canvas").offset().left;
    canvasMaxX = canvasMinX + WIDTH;

    requestAnimationFrame(function animation() {
        draw();
        if (ballOut){
            lifes--;
            resetBall();
            ballOut = false;
        }

        keepGoing = false;

        for (i=0; i < NROWS; i++) {
            for (j=0; j < NCOLS; j++) {
                if (bricks[i][j] == 1) {
                    keepGoing = true;
                }
            }
        }

        if (lifes == 0 || keepGoing == false) {
            clear();
            if(keepGoing == false)
                text("You win!", 30, WIDTH/2, HEIGHT/2, true);
            else
                text("You lose.", 30, WIDTH/2, HEIGHT/2, true);
        }
        else
            requestAnimationFrame(animation);
    });
}
 
function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}
 
function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function text(text, size, x, y, center) {
    ctx.font = size+"px Arial";
    
    if(center)
        ctx.textAlign = "center";
    
    ctx.fillText(text, x, y);
    ctx.textAlign = "left";
}

function resetBall() {
    x = WIDTH/2;
    y = HEIGHT/2;

    dx = 2;
    dy = 4;
}
 
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
 
//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
    if (evt.keyCode == 39) rightDown = true;
    else if (evt.keyCode == 37) leftDown = true;
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
    if (evt.keyCode == 39) rightDown = false;
    else if (evt.keyCode == 37) leftDown = false;
}

function onMouseMove(evt) {
    if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
        paddlex = evt.pageX - canvasMinX - paddlew/2;
    }
}

function onMouseDown(evt) {
    if(!started)
        init();
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
$(document).mousemove(onMouseMove);
$(document).mousedown(onMouseDown);

function draw() {
    clear();
    circle(x, y, r*2);

    //move the paddle if left or right is currently pressed
    if (rightDown) paddlex += 5;
    else if (leftDown) paddlex -= 5;
    rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

    //draw bricks
    for (i=0; i < NROWS; i++) {
        for (j=0; j < NCOLS; j++) {
            if (bricks[i][j] == 1) {
                rect((j * (BRICKWIDTH + PADDING)) + PADDING,
                (i * (BRICKHEIGHT + PADDING)) + PADDING,
                BRICKWIDTH, BRICKHEIGHT);
            }
        }
    }

    //have we hit a brick?
    rowheight = BRICKHEIGHT + PADDING;
    colwidth = BRICKWIDTH + PADDING;
    row = Math.floor((y - r) /rowheight);
    col = Math.floor(x/colwidth);
    //if so, reverse the ball and mark the brick as broken
    if (y - r < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
        dy = -dy;
        bricks[row][col] = 0;
    }

    if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;

    if (y + dy < 0)
    dy = -dy;
    else if (y + dy + r > HEIGHT - paddleh) {
        if (x + r> paddlex && x - r < paddlex + paddlew) {
            dx = 12 * ((x - (paddlex + paddlew / 2)) / paddlew);
            dy = -dy;
        } else {
            //game over, so stop the animation
            ballOut = true;
        }
    }

    x += dx;
    y += dy;
}

text("Click to start", 30, WIDTH/2, HEIGHT/2, true);
