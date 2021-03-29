// ARRAYS

/** Exercise 3) a
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril","Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log) **/
var monthArray = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The 5th month is", monthArray[4], "and the 11th month is", monthArray[10]);


/** Exercise 3) b
Ordenar el array de meses alfabéticamente y mostrarlo por consola
(utilizar sort). **/
console.log("Month array sorted: ", monthArray.sort());


/** Exercise 3) c
Agregar un elemento al principio y al final del array
(utilizar unshift y push). **/
monthArray.unshift("2021");
monthArray.push("2022");
console.log("New array:", monthArray);


/** Exercise 3) d
Quitar un elemento del principio y del final del array
(utilizar shift y pop). **/
monthArray.shift();
monthArray.pop();
console.log("New array:", monthArray);


/** Exercise 3) e
Invertir el orden del array (utilizar reverse) **/
console.log("Array reverse:", monthArray.reverse());


/** Exercise 3) f
Unir todos los elementos del array en un único string donde 
cada mes este separado por un guión - (utilizar join). **/
console.log("The string array is:", monthArray.join(" - "));


/** Exercise 3) g
Crear una copia del array de meses que contenga desde
Mayo hasta Noviembre (utilizar slice). **/
var monthArray = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newMonthArray = monthArray.slice(4, 11);
console.log("The sub array is:", newMonthArray)
