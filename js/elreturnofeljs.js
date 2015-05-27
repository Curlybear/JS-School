var user;

// Chargement des handlers d'evenements
window.addEventListener('load',initEventHandler,false);

// Initialisation des handlers d'evenements
function initEventHandler() {
    user = JSON.parse(localStorage.getItem(sessionStorage.connectedUser));
    if (user.sexe == 'female') {
        $('aside').addClass('girl'); 
    } else{
        $('aside').addClass('boy'); 
    }
    $('#namepanel').html(user.nom);

    updateGui();

    $('#btnCalcul').click(function(event) {
        $("#frame").attr("src", "calcul.html");
    });

    $('#btnPendu').click(function(event) {
        $("#frame").attr("src", "pendu.html");
    });

    $('#btnPong').click(function(event) {
        $("#frame").attr("src", "pong.html");
    });

    window.addEventListener("message", receiveMessage, false);
}

function receiveMessage(event)
{
    switch(event.data.type){
        case "addToken":
            user.jetons += event.data.msg;
            localStorage.setItem(user.nom, JSON.stringify(user));
            break;
        default:
            throw "Invalid message";
            break;
    }
    updateGui();
}

function updateGui () {
    $('#jetonDisplay').html("Jetons: " + user.jetons);
}