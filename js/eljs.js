// Chargement des handlers d'evenements
window.addEventListener('load',initEventHandler,false);

// Initialisation des handlers d'evenements
function initEventHandler() {
    $('#btnConnexion').click(function connexion(e) {
        e.preventDefault();
        var userInput = $('#loginfield').val();
        
        if(localStorage.getItem(userInput)) {
            sessionStorage.connectedUser = userInput;
            document.location.href='main.html';
        } else {
            alert("User doesn't exist");
        }
    });

    $('#btnCreation').click(function creation(e) {
        e.preventDefault();
        var user = {
            nom: $('input[name="firstname"]').val(),
            sexe: $('input[name="sex"]:checked').val(),
            avatar: $('input[name="avatar"]:checked').val(),
            jetons: 0
        }

        localStorage.setItem(user.nom, JSON.stringify(user));
        sessionStorage.connectedUser = user.nom;

        document.location.href='main.html';
    });
}
