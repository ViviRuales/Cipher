import cipher from './cipher.js';

console.log(cipher);

const buttonSend = document.getElementById("SendtoCode");

buttonSend.addEventListener("click", function () {
    const textToCode = document.getElementById("textToCode").value;
    const positionToMove = document.getElementById("positionToMove").value;
    console.log(textToCode, positionToMove);
});
