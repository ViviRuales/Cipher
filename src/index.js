import cipher from './cipher.js';

const buttonSend = document.getElementById("SendtoCode");

buttonSend.addEventListener("click", function () {
    const textToCode = document.getElementById("textToCode").value;
    const positionToMove = document.getElementById("positionToMove").value;
    //console.log(textToCode, positionToMove);
    cipher.encode(positionToMove,textToCode) //Parametros y argumentos en una función js 


});
