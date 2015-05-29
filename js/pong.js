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

var computerPaddlex;
var computerPaddleh;
var computerPaddlew;

var rightDown = false;
var leftDown = false;

var canvasMinX;
var canvasMaxX;

var ballOut = false;
var ballOutComputer = false;

var point = 0;
var computerPoint = 0;

var started = false;


function init() {
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    started = true;

    resetBall();

    paddleh = 10;
    paddlew = 100;
    paddlex = WIDTH / 2 - paddlew/2;

    computerPaddleh = 10;
    computerPaddlew = 100;
    computerPaddlex = WIDTH / 2 - computerPaddlew/2;

    canvasMinX = $("#canvas").offset().left;
    canvasMaxX = canvasMinX + WIDTH;

    requestAnimationFrame(function animation() {
        draw();
        if (ballOut || ballOutComputer){
            if (ballOut) {
                ballOut = false;
                computerPoint++;
            } else {
                ballOutComputer = false;
                point++;
            }
            resetBall();
        }

        if (point == 10 || computerPoint == 10) {
            clear();
            if (point == 10) {
                text("You win!", 30, WIDTH/2, HEIGHT/2, true);
            } else {
                text("You lose.", 30, WIDTH/2, HEIGHT/2, true);
            }
        }
        else
            requestAnimationFrame(animation);
    });
}

function resetBall() {
    x = WIDTH/2;
    y = HEIGHT/2;

    dx = 2;
    dy = 4;
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
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

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//END LIBRARY CODE

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
        paddlex = evt.pageX - canvasMinX - paddlew / 2;
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

    // Draw scores
    text(point, 40, 5, HEIGHT/2 + 30);
    text(computerPoint, 40, 5, HEIGHT/2 - 30);

    // Update computer placement
    if (y < HEIGHT) {   
        if (x > computerPaddlex+computerPaddlew-computerPaddlew/10) computerPaddlex +=5;
        else if (x < computerPaddlex+computerPaddlew/10) computerPaddlex -= 5;
    }
    rect(computerPaddlex, 0, computerPaddlew, computerPaddleh);

    //move the paddle if left or right is currently pressed
    if (rightDown) paddlex += 5;
    else if (leftDown) paddlex -= 5;
    rect(paddlex, HEIGHT - paddleh, paddlew, paddleh);

    if (x + dx > WIDTH || x + dx < 0)
        dx = -dx;

    if (y + dy - r < computerPaddleh) {
        if (x + r > computerPaddlex && x -r < computerPaddlex + computerPaddlew) {
            dx = 12 * ((x - (computerPaddlex + computerPaddlew / 2)) / computerPaddlew);
            dy = -dy;
        } else {
            ballOutComputer = true;
        }
    } else if (y + dy + r > HEIGHT - paddleh) {
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