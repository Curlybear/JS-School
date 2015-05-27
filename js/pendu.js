var words = [
    "agneau",       "aider",       "ail",
    "aimer",        "amie",        "ampoule",
    "angle",        "animal",      "appareil",
    "araignée",     "arrière",     "auto",
    "avec",         "avril",       "balance",
    "balançoire",   "baleine",     "banc",
    "bateau",       "beau",        "bec",
    "berceau",      "bizarre",     "blague",
    "blanc",        "bleu",        "blouse",
    "bosse",        "bouteille",   "brouillard",
    "bureau",       "bébé",        "c'est",
    "cadeau",       "cahier",      "caisse",
    "calendrier",   "camarade",    "campagne",
    "canaille",     "casquette",   "cave",
    "ceinture",     "cercle",      "cercueil",
    "cerise",       "cerise",      "chagrin",
    "chambre",      "champignon",  "chandail",
    "chante",       "chapeau",     "Charlène",
    "chatouille",   "chaud",       "chaud",
    "chemin",       "chemin",      "cheminée",
    "chemise",      "cher",        "cher",
    "cheveu",       "chevreuil",   "chez",
    "chose",        "chère",       "ciel",
    "cigogne",      "cinq",        "cinq",
    "cinéma",       "citron",      "citrouille",
    "clair",        "classe",      "classe",
    "clé",          "collier",     "consigne",
    "copain",       "copie",       "copier",
    "corbeille",    "cousin",      "coussin",
    "coussin",      "couteau",     "cravate",
    "croissant",    "crème",       "cuiller",
    "cuisinier",    "dame",        "dans",
    "demain",       "dernier",     "dernier",
    "derrière",     "dessert",     "dessin",
    "dessin",       "deux",        "diable",
    "dictée",       "difficile",   "dimanche",
    "dire",         "dormir",      "douze",
    "décembre",     "déjà",        "désert",
    "détail",       "eau",         "encore",
    "enfant",       "enfin",       "ensemble",
    "entend",       "escargot",    "facile",
    "faire",        "famille",     "farce",
    "faute",        "fauteuil",    "façade",
    "femme",        "fenouil",     "fer",
    "fermier",      "feu",         "feuillage",
    "feuille",      "feuilleton",  "figure",
    "figure",       "file",        "fille",
    "fin",          "fiole",       "flan",
    "fleur",        "fleur",       "fleur",
    "flocon",       "foire",       "forme",
    "formule",      "fou",         "frisson",
    "frère",        "fée",         "fête",
    "gagner",       "garage",      "garde",
    "gare",         "garçon",      "garçon",
    "gauche",       "genou",       "gentil",
    "gentil",       "gilet",       "glace",
    "glace",        "gland",       "glaçon",
    "gomme",        "gorge",       "goutte",
    "grand",        "grand",       "mère",
    "grenadine",    "grenouille",  "groseille",
    "grue",         "guirlande",   "gâteau",
    "haut",         "herbe",       "heure",
    "heureux",      "hier",        "hiver",
    "image",        "impossible",  "industrie",
    "insecte",      "jamais",      "janvier",
    "jaune",        "jaune",       "jeu",
    "jeudi",        "joli",        "jolie",
    "Joshua",       "jouet",       "jour",
    "laid",         "laine",       "lait",
    "lampe",        "langue",      "langue",
    "lapin",        "lapin",       "lecture",
    "leçon",        "ligne",       "limace",
    "lire",         "livre",       "lumière",
    "lune",         "lutin",       "machine",
    "magasin",      "magasin",     "magie",
    "mai",          "maille",      "maillot",
    "main",         "maintenant",  "mais",
    "maison",       "malade",      "maman",
    "manger",       "mardi",       "matin",
    "mer",          "merci",       "mercredi",
    "merle",        "merle",       "merveille",
    "minute",       "montagne",    "moulin",
    "mousse",       "mur",         "musique",
    "musique",      "mère",        "mètre",
    "médecin",      "neige",       "neuf",
    "nouilles",     "novembre",    "nuage",
    "oeuf",         "oeuf",        "offrir",
    "oignon",       "onze",        "orage",
    "orange",       "oreille",     "pain",
    "panier",       "panier",      "parents",
    "patins",       "peinture",    "peluche",
    "perle",        "peu",         "peur",
    "phoque",       "photo",       "piano",
    "pie",          "pièce",       "plage",
    "plaisir",      "plaisir",     "plan",
    "plein",        "pleurer",     "plier",
    "pluie",        "plume",       "pneu",
    "poisson",      "pommier",     "pompier",
    "portefeuille", "poussin",     "premier",
    "printemps",    "prochain",    "pâtissier",
    "père",         "quatorze",    "quinze",
    "quinze",       "radio",       "raisin",
    "raisin",       "ratatouille", "rectangle",
    "reine",        "relier",      "rentrer",
    "rentrée",      "reste",       "reçu",
    "rivière",      "rose",        "règle",
    "règle",        "réunion",     "réveil",
    "sable",        "sac",         "sage",
    "samedi",       "sapin",       "sapin",
    "saute",        "seau",        "sec",
    "seize",        "semaine",     "semaine",
    "sept",         "septembre",   "serpent",
    "service",      "serviette",   "seuil",
    "signal",       "signe",       "singe",
    "six",          "soigner",     "soleil",
    "sommeil",      "sorcier",     "sorcière",
    "souffler",     "souligner",   "souvent",
    "spécial",      "tableau",     "taille",
    "tasse",        "taupe",       "temps",
    "température",  "tempête",     "terre",
    "timbre",       "toujours",    "travail",
    "treize",       "triangle",    "vague",
    "valise",       "veille",      "vendredi",
    "vent",         "ver",         "verre",
    "vert",         "veste",       "vieux",
    "vigne",        "vingt",       "vingt",
    "vélo",         "yeux",        "zéro",
    "école",        "écureuil",    "élève",
    "éléphant",     "émail",       "éponge",
    "grand-père",   "étoile"
];

var currentWord;
var guessingWord;
var wrongGuesses;
var maxTries = 6;
var currentTry;

window.addEventListener('load',init,false);

function init() {
    startGame();

    $('form').submit( function(e) {
        e.preventDefault();

        checkInput();
        
        $('#fieldAnwser').val('');
    });
}

function startGame () {
    currentTry = 0;
    currentWord = getWord();

    guessingWord = new Array(currentWord.length);

    for (var i = 0; i < guessingWord.length; i++){
        guessingWord[i] = "_ ";
    }

    $('#mot>p').html(guessingWord);    
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
    var letter = $('#fieldAnwser').val();
    for (var i = 0; i < currentWord.length; i++){
        if(currentWord[i] == letter){
            guessingWord[i] = letter + " ";
            found = true;
        }
    }

    $('#mot>p').html(guessingWord);
    
    if(!found){
        $('#usedLetters').html($('#usedLetters').html() + letter + " ");        
        loseLife();
    }
    
    for (var i = 0; i < guessingWord.length; i++){
        if(guessingWord[i] === "_ "){
            complete = false;
        }
    }
    if(complete){
        window.alert("You win!");
    }
}

function loseLife () {
    if (currentTry < maxTries) {
        currentTry++;
        drawHangman();
    } else {
        window.alert("You lose!");
    }
}

function drawHangman() {

    switch(currentTry){
        case 1:
            // Draw the hangman :L
            break;
        case 2:
            // Draw the hangman :L
            break;
        case 3:
            // Draw the hangman :L
            break;
        case 4:
            // Draw the hangman :L
            break;
        case 5:
            // Draw the hangman :L
            break;
        case 6:
            // Draw the hangman :L
            break;
        default:
            throw "You wOot m8?";
            break;
    }
}