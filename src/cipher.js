const cipher = {
  // parametros y argumentos en una funcion de js
  // objetos en js
  
  encode: function(offset,string) {

    const messageArray = string.split(''); //Recorrer String no más
    var convertedMessage="";
    for (let index = 0; index < messageArray.length; index++) {
        var ascii = ((string.charCodeAt(index)-65 + parseInt(offset))%26)+65 
      convertedMessage += String.fromCharCode(ascii); 
    }
    return convertedMessage;

  }, 
  decode: function(offset,string) {
    const messageArray = string.split('');
    var convertedMessage="";
    for (let index = 0; index < messageArray.length; index++) {
       var ascii = ((string.charCodeAt(index)-65 - parseInt(offset) +( 26*(offset %26+1)))%26)+65; 
      convertedMessage += String.fromCharCode(ascii); 
      console.log( String.fromCharCode(ascii))
    }
    return convertedMessage;
  }
};

export default cipher;
