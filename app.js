do{
/*
* el usuario debe ingresar el nº de tarjeta (string) que automáticamente se convertirá a nº
*/
  var number = parseInt(prompt("¡Hola!, ingresa el número de tu tarjeta de crédito"));
  /*
  * si el campo no está vacio
  */
  if(number !== ""){
    /*
    * ejecutar la función para validar el nº
    */
    if( typeof number === 'number'){
      isValidCard()
    } else {
      /*
      * alertar al usuario en caso de que ingrese in string
      */
      alert("Debes ingresar un número");
    }
  }
}
/*
* hasta que la persona ingrese numero o rellene el campo
*/
while ( number === "" || (typeof number !== 'number'));
/*
* funcion para validar tarjeta
*/
function isValidCard(){
  /*
  * el número ingresado se convierte a string para luego regresarlo como un array
  */
  var numberToArray = Array.from(number.toString());
  /*
  * invertir elemnetos dentro del array
  */
  var arrayReverse = numberToArray.reverse();
  /*
  * array invertido y convertido a nº
  */
  var stringToNumber = [];
  /*
  * iterar array invertido
  */
  for( var i = 0; i < arrayReverse.length; i++){
    /*
    * convertir cada elemento a nº
    */
    var num = parseInt(arrayReverse(i));
    /*
    * ingresar en array nuevo
    */
    stringToNumber.push()
    /*
    * iterar el array invetido para conseguir los nº en puestos pares
    */
    for (var j = 0; j < stringToNumber.length; j += 2) {
      /*
      * tomar los nº que están en puestos pares
      */
      if (stringToNumber[j] % 2 === 0) {
        /*
        * multiplicar por 2 los número que están en puestos pares
        */
        var even = stringToNumber[j] * 2;
        /*
        * en caso de que el resultado tenga 2 dígitos
        */
      if (even.length === 2) {
        /*
        * sumar ambos dígitos entre sí.
        */
        even.split('').forEach(even => 0 += parseInt(even));
      }
      }
    }
  }
}
