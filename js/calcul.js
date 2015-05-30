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
soldier.src = "img/soldier.svg";
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

document.addEventListener('DOMContentLoaded', function() {
    // Check anwsers and draw soldiers accordingly

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
    padding = 10;
    topY = (canvas.height - soldier.height) / 2;
    drawSoldiers();
}

function drawSoldiers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < remainingPlayer; ++i) {
        ctx.drawImage(soldier, i * soldier.width/2.5 + padding, topY, soldier.width/2.5, soldier.height/2.5);
    }
    ctx.save();
    ctx.translate(canvas.width, canvas.height-200);
    ctx.scale(-1, 1);
    for(var i = 0; i < remainingComputer; ++i) {
        ctx.drawImage(soldier, i * soldier.width/2.5 + padding, topY, soldier.width/2.5, soldier.height/2.5);
    }
    ctx.restore();
}

var currentCalcul;
var currentLevel = 1;

var levels = [
    "Niveau 1: U+U < 10",
    "Niveau 2: U+U ≥ 10",
    "Niveau 3: U-U ≥ 0",
    "Niveau 4: U+DU = DU avec U+U < 10",
    "Niveau 5: DU+DU = DU avec U+U < 10",
    "Niveau 6: DU+DU = DU avec U+U ≥ 10",
    "Niveau 7: DU-U avec U-U ≥ 0",
    "Niveau 8: DU-U avec U-U < 0",
    "Niveau 9: DU-DU avec U-U ≥0",
    "Niveau 10: DU-DU"
];

currentCalcul = getCalcul(currentLevel);


// Chargement des handlers d'evenements
window.addEventListener('load',initEventHandler,false);

// Initialisation des handlers d'evenements
function initEventHandler() {
    refreshLevel();
    lockGame();

    $('#prevNiv').click( function(e) {
        if (currentLevel > 1) {
            currentLevel--;
            refreshLevel();
        }
    });

    $('#nextNiv').click( function(e) {
        if (currentLevel < 10) {
            currentLevel++;
            refreshLevel();
        }
    });

    $('#btnStart').click( function(e) {
        unlockGame();
    });

    $('form').submit( function(e) {
        e.preventDefault();

        if ($('#fieldAnwser').val() == currentCalcul.resultat) {
            killComputer();
        } else {
            killPlayer();
        }
        drawSoldiers();
        newCalcul();
        $('#fieldAnwser').val(' ');
    });
}

function killComputer() {
    if (remainingComputer > 1) {
        remainingComputer--;
    } else {
        remainingComputer--;
        drawSoldiers();
        alert('Game over you won.');
        parent.postMessage({type:"addToken", msg:currentLevel},"*");
        lockGame();
    }
}

function killPlayer() {
    if (remainingPlayer > 1) {
        remainingPlayer--;
    } else {
        remainingPlayer--;
        drawSoldiers();
        alert('Game over you lost.');
        parent.postMessage({type:"addToken", msg:"0"},"*");
        lockGame();
    }
}

function newCalcul(){
    currentCalcul = getCalcul(currentLevel);
    $('#displayCalcul').html(currentCalcul.operande1 + " " + currentCalcul.operateur + " " + currentCalcul.operande2 + "=");
}

function refreshLevel(){
    $('#textNiveau').html(levels[currentLevel-1]);
}

function lockGame(){
    remainingPlayer = count;
    remainingComputer = count;
    $('#jeu').hide();
    $('#niveau').show();
    $('#prevNiv').prop('disabled', false);
    $('#nextNiv').prop('disabled', false);
    $('#btnStart').prop('disabled', false);
    $('#fieldAnwser').prop('disabled', true);
    $('#displayCalcul').html("--------");
}

function unlockGame(){
    $('#jeu').show();
    $('#niveau').hide();
    $('#prevNiv').prop('disabled', true);
    $('#nextNiv').prop('disabled', true);
    $('#btnStart').prop('disabled', true);
    $('#fieldAnwser').prop('disabled', false);
    newCalcul();
}

function getCalcul(niveau) {
    var op1;
    var op2;
    var res;

    switch(niveau){
        case 1:
            op1 = randomInt(0, 9);
            op2 = randomInt(0, 9-op1);
            res = op1 + op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 2:
            res = randomInt(10, 18);
            op1 = res - randomInt(res / 2, 9);
            op2 = res - op1;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 3:
            op1 = randomInt(0, 9);
            op2 = randomInt(0, op1);
            res = op1 - op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'-'};
        case 4:
            op2 = randomInt(10, 19);
            op1 = randomInt(0, (10-(op2-10)));
            res = op1 + op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 5:
            op1 = randomInt(10, 19);
            op2 = randomInt(10, 10+(10-(op1-10)));
            res = op1 + op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 6:
            op1 = randomInt(10, 19);
            op2 = randomInt(10 + (10-(op1-10), 19));
            res = op1 + op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'+'};
        case 7:
            op1 = randomInt(10, 19);
            op2 = randomInt(0, op1-10);
            res = op1 - op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'-'};
        case 8:
            op1 = randomInt(10, 19);
            op2 = randomInt(10-(op1-10), 9);
            res = op1 - op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'-'};
        case 9:
            op1 = randomInt(10, 19);
            op2 = randomInt(10, (10-(op1-10))+10);
            res = op1 - op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'-'};
        case 10:
            op1 = randomInt(10, 19);
            op2 = randomInt(10, 19);
            res = op1 - op2;
            return {operande1:op1,operande2:op2,resultat:res,operateur:'-'};
        default:
            throw "HUEHUEHUE BETTER SELECT A REAL LEVEL";
            break;
    }
}

function random(min, max) {
    return Math.random() * (max -min) + min;
}

function randomInt(min, max) {
    return Math.ceil(random(min, max));
}
