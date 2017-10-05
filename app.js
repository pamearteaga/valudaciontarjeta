

	do{

		var number = parseInt(prompt("¡Hola!, ingresa el número de tu tarjeta de crédito")); // el usuario debe ingresar el nº de tarjeta (string) que automáticamente se convertirá a nº 
		
		if(number !== ""){ // si el campo no está vacio
			
			if( typeof number === 'number'){ // ejecutar la función para validar el nº

				isValidCard()

            } else {
				
				alert("Debes ingresar un número"); // alertar al usuario en caso de que ingrese in string

			} 
		
		} // if

	} //do 

	while ( number === "" || (typeof number !== 'number')); // hasta que la persona ingrese numero o rellene el campo




    function isValidCard(){

        var numberToArray = Array.from(number.toString()); // el número ingresado se convierte a string para luego regresarlo como un array

        var arrayReverse = numberToArray.reverse(); // invertir elemnetos dentro del array

        var stringToNumber = []; // array invertido y convertido a nº


         for( var i = 0; i < arrayReverse.lenght; i++){ // iterar array invertido

             var num = parseInt(arrayReverse(i)); // convertir cada elemento a nº

              stringToNumber.push() // ingresar en array nuevo



                for (var j = 0; j < stringToNumber.length; j += 2) { // iterar el array invetido para conseguir los nº en puestos pares
			  	
				  	if (stringToNumber[j] % 2 === 0) { // tomar los nº que están en puestos pares

				  		var even = stringToNumber[j] * 2; // multiplicar por 2 los número que están en puestos pares

				  		   if (even.length === 2) { // en caso de que el resultado tenga 2 dígitos
	                          
	                          even.split('').forEach(even => 0 += parseInt(even)); // sumar ambos dígitos entre sí.



			  		   } // if


			  	} // if


			  }// for 2
		  

			} // for 1



    } // isValidCard

        