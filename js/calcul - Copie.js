var count = 5;
var remainingPlayer = count;
var remainingComputer = count;

/**
 * Loading process
 */
var imgLoaded = false;
var htmlLoaded = false;

/**
 * Elements
 */
var canvas;
var ctx;
var soldier = new Image;
soldier.src = "soldier.svg";
soldier.onload = function() {
    imgLoaded = true;
    drawIfLoaded();
};

/**
 * Drawing dimensions
 */
var drawWidth;
var topY;
var padding;

/**
 * Animation stuff
 */
var step = 0;
var steps = 60;
var rotation = 6 * Math.PI;
var animating = false;

document.addEventListener('DOMContentLoaded', function() {
    // Check anwsers and draw soldiers accordingly

    document.getElementById('button').addEventListener('click', function(e) {
        if(remaining <= 0) {
            return;
        }
        animating = true;
        step = 0;
        --remaining;
        animation();
    });

    canvas = document.getElementById('canvas');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx = canvas.getContext('2d');

    htmlLoaded = true;
    drawIfLoaded();
});

function drawIfLoaded() {
    if(!imgLoaded || !htmlLoaded) {
        return;
    }
    padding = Math.max(0, (canvas.width/2 - 20 - soldier.width * count) / 2);
    drawWidth = Math.max(soldier.width, (canvas.width - padding * 2) / count);
    topY = (canvas.height - soldier.height) / 2;
    drawSoldiers(count);
}
// If this comment is still here, the person using that code didn't even read it!

function drawSoldiers(count) {
    for(var i = 0; i < count; ++i) {
        ctx.drawImage(soldier, i * drawWidth + padding, topY);
    }
}

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSoldiers(remaining);

    if(++step < steps) {
        drawSpinning(remaining, step);
        requestAnimationFrame(animation);
        return;
    }
    animating = false;
}

function drawSpinning(position, step) {
    var x = position * drawWidth + padding + soldier.width / 2;
    var y = topY + soldier.height / 2;
    var scale = (steps - step) / steps;

    x += step * 4;
    y -= step * 2.5;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation / steps * step);
    ctx.scale(scale, scale);
    ctx.drawImage(
        soldier,
        -soldier.width / 2,
        -soldier.height / 2
    );
    ctx.restore();
}

function getCalcul(niveau) {
    var op1;
    var op2;
    var res;

    switch(niveau){
        case 1:
            op1 = Math.floor(Math.random() * 11);
            op2 = Math.floor(Math.random() * 11 - op1);
            res = op1 + op2;
            return calcul{operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 2:
            res = Math.floor((Math.random() * 8) + 10);
            op1 = res - Math.floor(Math.random() * 11);
            op2 = res - op1;
            return calcul{operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 3:
            op1 = Math.floor(Math.random() * 11);
            op2 = Math.floor(Math.random() * op1);
            res = op1 - op2;
            return calcul{operande1:op1,operande2:op2,resultat:res,operateur:'-'};
        case 4:
            op2 = Math.floor((Math.random() * 11) + 10);
            op1 = Math.floor(Math.random() * (10-(op2-10));
            res = op1 + op2;
            return calcul{operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 5:
            op1 = Math.floor((Math.random() * 11) + 10);
            op2 = Math.floor((Math.random() * 10-(op1-10)) + 10);
            res = op1 + op2;
            return calcul{operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 6:
            op1 = Math.floor((Math.random() * 11) + 10);
            op2 = Math.floor((Math.random() * (11 - (10-(op1-10))) + (10-(op1-10)) + 10);
            res = op1 + op2;
            return calcul{operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 7:
            op1 = Math.floor((Math.random() * 11) + 10);
            op2 = Math.floor(Math.random() * (op1-10));
            res = op1 - op2;
            return calcul{operande1:op1,operande2:op2,resultat:res,operateur:'-'};
        case 8:
            statements_1
            break;
        case 9:
            statements_1
            break;
        case 10:
            statements_1
            break;
        default:
            statements_def
            break;
    }
}

function random(min, max) {
    return Math.random() * (max -min) + min;
}

function randomInt(min, max) {
    return Math.ceil(random(min, max));
}