const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const cipher = {
  // parametros y argumentos en una funcion de js
  // objetos en js
  cipherFormula:function(Asciicharacter,positionToMove) {
    return (Asciicharacter-65+positionToMove)%26+65;
  },
 encode: function(positionToMove,textToCode) {  
    for (var elemento of textToCode) {
      
      for (let index = 0; index < alphabet.length; index++) {
       
        if(elemento == alphabet[index]){
          console.log(String.fromCharCode(this.cipherFormula(textToCode.charCodeAt(index),positionToMove)))
        }
        
      }
        
    } 
    // recorrer una a una las letras de textToCode Ciclo o bucle
    // recorrer con un bucle/ciclo todo el positionToMove
  },
  decode: function() {}
};

export default cipher;
