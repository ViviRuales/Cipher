const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


const cipher = {
  // parametros y argumentos en una funcion de js
  // objetos en js
  
  encode: function(offset,string) {
    const messageArray = string.split('');
    var convertedMessage="";
    for (let index = 0; index < messageArray.length; index++) {
      var ascii = string.charCodeAt(index) + parseInt(offset,10);
      convertedMessage += String.fromCharCode(ascii); 
    }
    return convertedMessage;

  },
  decode: function(offset,string) {
    const messageArray = string.split('');
    var convertedMessage="";
    for (let index = 0; index < messageArray.length; index++) {
      var ascii = string.charCodeAt(index) - parseInt(offset,10);
      convertedMessage += String.fromCharCode(ascii); 
    }
    return convertedMessage;
  }
};

export default cipher;
