// Chargement des handlers d'evenements
window.addEventListener('load',initEventHandler,false);

// Initialisation des handlers d'evenements
function initEventHandler() {
		document.getElementById('BOB').addEventListener('click',huehuehue,false);
		//document.getElementById('mug').addEventListener('click',function(){ajax_submit('mug.php','mug');},false);
}

function huehuehue () {
	$('img').each(function() { this.src = 'autreDossier/img_'+(index+1) + '.png';});
}

