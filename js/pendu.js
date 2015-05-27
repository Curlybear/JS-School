var words = [
    "AGNEAU",       "AIDER",       "AIL",
    "AIMER",        "AMIE",        "AMPOULE",
    "ANGLE",        "ANIMAL",      "APPAREIL",
    "ARAIGNEE",     "ARRIERE",     "AUTO",
    "AVEC",         "AVRIL",       "BALANCE",
    "BALANÇOIRE",   "BALEINE",     "BANC",
    "BATEAU",       "BEAU",        "BEC",
    "BERCEAU",      "BIZARRE",     "BLAGUE",
    "BLANC",        "BLEU",        "BLOUSE",
    "BOSSE",        "BOUTEILLE",   "BROUILLARD",
    "BUREAU",       "BEBE",        "CEST",
    "CADEAU",       "CAHIER",      "CAISSE",
    "CALENDRIER",   "CAMARADE",    "CAMPAGNE",
    "CANAILLE",     "CASQUETTE",   "CAVE",
    "CEINTURE",     "CERCLE",      "CERCUEIL",
    "CERISE",       "CERISE",      "CHAGRIN",
    "CHAMBRE",      "CHAMPIGNON",  "CHANDAIL",
    "CHANTE",       "CHAPEAU",     "CHARLENE",
    "CHATOUILLE",   "CHAUD",       "CHAUD",
    "CHEMIN",       "CHEMIN",      "CHEMINEE",
    "CHEMISE",      "CHER",        "CHER",
    "CHEVEU",       "CHEVREUIL",   "CHEZ",
    "CHOSE",        "CHERE",       "CIEL",
    "CIGOGNE",      "CINQ",        "CINQ",
    "CINEMA",       "CITRON",      "CITROUILLE",
    "CLAIR",        "CLASSE",      "CLASSE",
    "CLE",          "COLLIER",     "CONSIGNE",
    "COPAIN",       "COPIE",       "COPIER",
    "CORBEILLE",    "COUSIN",      "COUSSIN",
    "COUSSIN",      "COUTEAU",     "CRAVATE",
    "CROISSANT",    "CREME",       "CUILLER",
    "CUISINIER",    "DAME",        "DANS",
    "DEMAIN",       "DERNIER",     "DERNIER",
    "DERRIERE",     "DESSERT",     "DESSIN",
    "DESSIN",       "DEUX",        "DIABLE",
    "DICTEE",       "DIFFICILE",   "DIMANCHE",
    "DIRE",         "DORMIR",      "DOUZE",
    "DECEMBRE",     "DEJA",        "DESERT",
    "DETAIL",       "EAU",         "ENCORE",
    "ENFANT",       "ENFIN",       "ENSEMBLE",
    "ENTEND",       "ESCARGOT",    "FACILE",
    "FAIRE",        "FAMILLE",     "FARCE",
    "FAUTE",        "FAUTEUIL",    "FAÇADE",
    "FEMME",        "FENOUIL",     "FER",
    "FERMIER",      "FEU",         "FEUILLAGE",
    "FEUILLE",      "FEUILLETON",  "FIGURE",
    "FIGURE",       "FILE",        "FILLE",
    "FIN",          "FIOLE",       "FLAN",
    "FLEUR",        "FLEUR",       "FLEUR",
    "FLOCON",       "FOIRE",       "FORME",
    "FORMULE",      "FOU",         "FRISSON",
    "FRERE",        "FEE",         "FETE",
    "GAGNER",       "GARAGE",      "GARDE",
    "GARE",         "GARÇON",      "GARÇON",
    "GAUCHE",       "GENOU",       "GENTIL",
    "GENTIL",       "GILET",       "GLACE",
    "GLACE",        "GLAND",       "GLAÇON",
    "GOMME",        "GORGE",       "GOUTTE",
    "GRAND",        "GRAND",       "MERE",
    "GRENADINE",    "GRENOUILLE",  "GROSEILLE",
    "GRUE",         "GUIRLANDE",   "GATEAU",
    "HAUT",         "HERBE",       "HEURE",
    "HEUREUX",      "HIER",        "HIVER",
    "IMAGE",        "IMPOSSIBLE",  "INDUSTRIE",
    "INSECTE",      "JAMAIS",      "JANVIER",
    "JAUNE",        "JAUNE",       "JEU",
    "JEUDI",        "JOLI",        "JOLIE",
    "JOSHUA",       "JOUET",       "JOUR",
    "LAID",         "LAINE",       "LAIT",
    "LAMPE",        "LANGUE",      "LANGUE",
    "LAPIN",        "LAPIN",       "LECTURE",
    "LEÇON",        "LIGNE",       "LIMACE",
    "LIRE",         "LIVRE",       "LUMIERE",
    "LUNE",         "LUTIN",       "MACHINE",
    "MAGASIN",      "MAGASIN",     "MAGIE",
    "MAI",          "MAILLE",      "MAILLOT",
    "MAIN",         "MAINTENANT",  "MAIS",
    "MAISON",       "MALADE",      "MAMAN",
    "MANGER",       "MARDI",       "MATIN",
    "MER",          "MERCI",       "MERCREDI",
    "MERLE",        "MERLE",       "MERVEILLE",
    "MINUTE",       "MONTAGNE",    "MOULIN",
    "MOUSSE",       "MUR",         "MUSIQUE",
    "MUSIQUE",      "MERE",        "METRE",
    "MEDECIN",      "NEIGE",       "NEUF",
    "NOUILLES",     "NOVEMBRE",    "NUAGE",
    "OEUF",         "OEUF",        "OFFRIR",
    "OIGNON",       "ONZE",        "ORAGE",
    "ORANGE",       "OREILLE",     "PAIN",
    "PANIER",       "PANIER",      "PARENTS",
    "PATINS",       "PEINTURE",    "PELUCHE",
    "PERLE",        "PEU",         "PEUR",
    "PHOQUE",       "PHOTO",       "PIANO",
    "PIE",          "PIECE",       "PLAGE",
    "PLAISIR",      "PLAISIR",     "PLAN",
    "PLEIN",        "PLEURER",     "PLIER",
    "PLUIE",        "PLUME",       "PNEU",
    "POISSON",      "POMMIER",     "POMPIER",
    "PORTEFEUILLE", "POUSSIN",     "PREMIER",
    "PRINTEMPS",    "PROCHAIN",    "PATISSIER",
    "PERE",         "QUATORZE",    "QUINZE",
    "QUINZE",       "RADIO",       "RAISIN",
    "RAISIN",       "RATATOUILLE", "RECTANGLE",
    "REINE",        "RELIER",      "RENTRER",
    "RENTREE",      "RESTE",       "REÇU",
    "RIVIERE",      "ROSE",        "REGLE",
    "REGLE",        "REUNION",     "REVEIL",
    "SABLE",        "SAC",         "SAGE",
    "SAMEDI",       "SAPIN",       "SAPIN",
    "SAUTE",        "SEAU",        "SEC",
    "SEIZE",        "SEMAINE",     "SEMAINE",
    "SEPT",         "SEPTEMBRE",   "SERPENT",
    "SERVICE",      "SERVIETTE",   "SEUIL",
    "SIGNAL",       "SIGNE",       "SINGE",
    "SIX",          "SOIGNER",     "SOLEIL",
    "SOMMEIL",      "SORCIER",     "SORCIERE",
    "SOUFFLER",     "SOULIGNER",   "SOUVENT",
    "SPECIAL",      "TABLEAU",     "TAILLE",
    "TASSE",        "TAUPE",       "TEMPS",
    "TEMPERATURE",  "TEMPETE",     "TERRE",
    "TIMBRE",       "TOUJOURS",    "TRAVAIL",
    "TREIZE",       "TRIANGLE",    "VAGUE",
    "VALISE",       "VEILLE",      "VENDREDI",
    "VENT",         "VER",         "VERRE",
    "VERT",         "VESTE",       "VIEUX",
    "VIGNE",        "VINGT",       "VINGT",
    "VELO",         "YEUX",        "ZERO",
    "ECOLE",        "ECUREUIL",    "ELEVE",
    "ELEPHANT",     "EMAIL",       "EPONGE",
    "GRAND-PERE",   "ETOILE"
];

var currentWord;
var guessingWord;
var wrongGuesses;
var maxTries = 6;
var currentTry;

/**
 * Elements
 */
var canvas;
var ctx;

window.addEventListener('load',init,false);

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx = canvas.getContext('2d');

    startGame();

    $('form').submit( function(e) {
        e.preventDefault();

        checkInput();
        
        $('#fieldAnwser').val('');
    });
}

function startGame () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentTry = 0;
    currentWord = getWord();

    wrongGuesses = " ";
    $('#usedLetters').html(wrongGuesses);

    guessingWord = new Array(currentWord.length);

    for (var i = 0; i < guessingWord.length; i++){
        guessingWord[i] = "_ ";
    }

    $('#mot>p').html(guessingWord); 

    ctx.beginPath();
    ctx.moveTo(20, 380);
    ctx.lineTo(150, 380);
    ctx.moveTo(85, 380);
    ctx.lineTo(85, 40);
    ctx.lineTo(250, 40);
    ctx.lineTo(250, 80);
    ctx.stroke();
   
}

function getWord () {
    return words[randomInt(0,words.length)];
}

function random(min, max) {
    return Math.random() * (max -min) + min;
}

function randomInt(min, max) {
    return Math.ceil(random(min, max));
}

function checkInput(){
    var found = false;
    var complete = true;
    var letter = $('#fieldAnwser').val().toUpperCase();
    for (var i = 0; i < currentWord.length; i++){
        if(currentWord[i] == letter){
            guessingWord[i] = letter + " ";
            found = true;
        }
    }

    $('#mot>p').html(guessingWord);
    
    if(!found){
        wrongGuesses += letter + " ";
        $('#usedLetters').html(wrongGuesses);        
        loseLife();
    }
    
    for (var i = 0; i < guessingWord.length; i++){
        if(guessingWord[i] === "_ "){
            complete = false;
        }
    }
    if(complete){
        window.alert("You win!");
        parent.postMessage({type:"addToken", msg:"5"},"*");
        startGame();
    }
}

function loseLife () {
    currentTry++;
    drawHangman();

    if (currentTry == maxTries) {
        window.alert("You lose!");
        parent.postMessage({type:"loss", msg:"0"},"*");
        startGame();
    }
}

function drawHangman() {
    ctx.beginPath();
    switch(currentTry){
        case 1:
            ctx.arc(250,110,30,0,2*Math.PI);
            break;
        case 2:
            ctx.moveTo(250, 140);
            ctx.lineTo(250, 230);
            break;
        case 3:
            ctx.moveTo(250, 230);
            ctx.lineTo(220, 320);
            break;
        case 4:
            ctx.moveTo(250, 230);
            ctx.lineTo(280, 320);
            break;
        case 5:
            ctx.moveTo(250, 150);
            ctx.lineTo(280, 220);
            break;
        case 6:
            ctx.moveTo(250, 150);
            ctx.lineTo(220, 220);
            break;
        default:
            throw "You wOot m8?";
            break;
    }
    ctx.stroke();
}