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
        case "pendu":
            switch(event.data.msg){
                case "win":
                    user.jetons += 5;
                    break;
                case "loss":

                    break;
                default:
                    throw "Invalid message";
                    break;
            }
            localStorage.setItem(user.nom, JSON.stringify(user));
            break;
        case "calcul":
            switch(event.data.msg){
                case "win1":
                    user.jetons += 1;
                    break;
                case "win2":
                    user.jetons += 2;
                    break;
                case "win3":
                    user.jetons += 3;
                    break;
                case "win4":
                    user.jetons += 4;
                    break;
                case "win5":
                    user.jetons += 5;
                    break;
                case "win6":
                    user.jetons += 6;
                    break;
                case "win7":
                    user.jetons += 7;
                    break;
                case "win8":
                    user.jetons += 8;
                    break;
                case "win9":
                    user.jetons += 9;
                    break;
                case "win10":
                    user.jetons += 10;
                    break;
                case "loss":

                    break;
                default:
                    throw "Invalid message";
                    break;
            }
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