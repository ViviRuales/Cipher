const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const cipher = {
  // parametros y argumentos en una funcion de js
  // objetos en js
 encode: function(positionToMove,textToCode) {  
    for (var elemento of textToCode) {
      for (let index = 0; index < alphabet.length; index++) {
        console.log("Mensaje",elemento)
        console.log("Alphabet",alphabet[index])
        if(elemento == alphabet[index]){
          console.log(elemento)
          console.log(alphabet[index])
        }
        
      }
        console.log(elemento); 
    } 
    // recorrer una a una las letras de textToCode Ciclo o bucle
    // recorrer con un bucle/ciclo todo el positionToMove
  },
  decode: function descifrar() {}
};

export default cipher;
