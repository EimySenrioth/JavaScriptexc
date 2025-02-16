let teorico = true;
let practico = true;
let vista = true;

if (teorico === true && practico === true && vista === true) {
    alert ('felicitaciones, aprobaste la materia');
    }

else if(practico === false){
    alert('falta el practico');
}

else if(teorico === false){
    alert('falta el teorico');
}

else if(vista === false){
    alert('falta la vista');
}
