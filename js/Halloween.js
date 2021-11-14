function mostrar(exorcista){
    document.getElementById('exorcista').style.visibility="visible";
}

function ocultar(exorcista){
    document.getElementById('exorcista').style.visibility="hidden";
}

function sonar (grito) {
    document.getElementById('grito').play();
}

function musicon (bgsound){
    document.getElementById('bgsound').play();
}

function musicoff (bgsound){
    document.getElementById('bgsound').pause();
}

function show (confeti) {
    document.getElementById('confeti').style.visibility="visible";
}
