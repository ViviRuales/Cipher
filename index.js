import cipher from './cipher.js';

//console.log(textToCode, positionToMove);
//Parametros y argumentos en una función js 

const botonCifrar = document.getElementById("Codificar");

botonCifrar.addEventListener("click", function (){
    const textToCode = document.getElementById("textToCode").value;
    const positionToMove = document.getElementById("positionToMove").value; 
    var resultEncode = cipher.encode(positionToMove,textToCode.toUpperCase())
    document.getElementById("showConvertedMessage").innerText = resultEncode;
}) 
const botonDescifrar = document.getElementById("Decode");
botonDescifrar.addEventListener("click", function () {
    const textToCode = document.getElementById("textToCode").value;
    const positionToMove = document.getElementById("positionToMove").value; 
    var  resultDecode = cipher.decode(positionToMove,textToCode.toUpperCase());
    document.getElementById("showConvertedMessage").innerText = resultDecode;
})

const botonStart = document.getElementById("start");
botonStart.addEventListener("click", function(){
    document.getElementById("ocultar").style.display = 'none';
    document.getElementById("Page2").style.display = 'flex';
})

const botonVolver = document.getElementById("Atrás");
    botonVolver.addEventListener("click", function () {
        document.getElementById("ocultar").style.display = 'block';
        document.getElementById("Page2").style.display = 'none';
    })