import cipher from './cipher.js';

console.log(cipher);
const buttonSaludar = document.getElementById("saludar");

function saludar(valor1, valor2) {
    return valor1 + ' ' + valor2;
}

buttonSaludar.addEventListener('click', () => {
    console.log(saludar('Viviana', 'Ruales'));
})

buttonSend.addEventListener("click", function () {
    const textToCode = document.getElementById("textToCode").value;
    const positionToMove = document.getElementById("positionToMove").value;
    //console.log(textToCode, positionToMove);
    cipher.encode(positionToMove,textToCode)


});
