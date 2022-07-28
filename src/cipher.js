const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const indexToAcsii = (alphabet[index].charCodeAt()- 65+offset)%26+65;

const cipher = {
  // parametros y argumentos en una funcion de js
  // objetos en js
  
 encode: function(offset,string) { indexToAcsii

    /*for (var elemento of textToCode) {
      
      for (let index = 0; index < alphabet.length; index++) {
       
        if(elemento == alphabet[index]){
          
        }
        
      }
        
    } */
    // recorrer una a una las letras de textToCode Ciclo o bucle
  
  // recorrer con un bucle/ciclo todo el positionToMove
  console.log(alphabet[index].charCodeAt())
  return 
   
 },
  decode: function() {}
};

export default cipher;
