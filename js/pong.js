//BEGIN LIBRARY CODE
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var ctx;

var paddlex;
var paddleh;
var paddlew;

var rightDown = false;
var leftDown = false;

var canvasMinX;
var canvasMaxX;

var ballOut = false;


function init() {
    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();

    paddlex = WIDTH / 2;
    paddleh = 10;
    paddlew = 75;

    canvasMinX = $("#canvas").offset().left;
    canvasMaxX = canvasMinX + WIDTH;

    requestAnimationFrame(function animation() { draw();  if(!ballOut)requestAnimationFrame(animation); });;
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
        paddlex = evt.pageX - canvasMinX - paddlew/2;
    }
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
$(document).mousemove(onMouseMove);

function draw() {
    clear();
    circle(x, y, 10);
    rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

    //move the paddle if left or right is currently pressed
    if (rightDown) paddlex += 5;
    else if (leftDown) paddlex -= 5;
    rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

    if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;

    if (y + dy < 0)
    dy = -dy;
    else if (y + dy > HEIGHT) {
        if (x > paddlex && x < paddlex + paddlew){
            dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
            dy = -dy;
        } else {
          //game over, so stop the animation
          ballOut = true;
        }
    }

    x += dx;
    y += dy;
}
 
init();