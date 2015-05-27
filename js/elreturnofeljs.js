// Chargement des handlers d'evenements
window.addEventListener('load',initEventHandler,false);

// Initialisation des handlers d'evenements
function initEventHandler() {
    var user = JSON.parse(localStorage.getItem(sessionStorage.connectedUser));
    if (user.sexe == 'female') {
        $('aside').addClass('girl'); 
    } else{
        $('aside').addClass('boy'); 
    }
    $('#namepanel').html(user.nom);

    $('#derptest').click(function(event) {
    	$("#frame").attr("src", "pendu.html");
    });
}
