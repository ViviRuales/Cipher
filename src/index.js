import cipher from './cipher.js';

//console.log(textToCode, positionToMove);
//Parametros y argumentos en una función js 

const botonCifrar = document.getElementById("Codificar");

botonCifrar.addEventListener("click", function (){
    const textToCode = document.getElementById("textToCode").value;
    const positionToMove = document.getElementById("positionToMove").value;
    cipher.encode(positionToMove, textToCode)  
})