// STRINGS

/** Exercise 2) a
Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase). **/
var str = "cornerstone";
console.log(str, "in uppercase is:", str.toUpperCase());


/** Exercise 2) b
Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los primeros 5 caracteres guardando
el resultado en una nueva variable (utilizar substring). **/
var str = "the charming man";
var subStr = str.substring(0,5);
console.log("The substring of", str, "is:", subStr);


/** Exercise 2) c
Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring). **/
var str = "stop this train";
var subStr = str.substring(str.length - 3, str.length);
console.log("The final substring of", str, "is:", subStr);


/** Exercise 2) d
Crear una variable de tipo string con al menos 10 caracteres
y generar un nuevo string con la primera letra en mayúscula
y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +). **/
var str = "you only live once";
var UpperLowerStr = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
console.log("The new string is:", UpperLowerStr);


/** Exercise 2) e
Crear una variable de tipo string con al menos 10 caracteres
y algún espacio en blanco. Encontrar la posición del primer espacio en blanco
y guardarla en una variable (utilizar indexOf). **/
var str = "bad decisions";
var spacePosition = str.indexOf(" ");
console.log("The blank space of", str, "is in position:", spacePosition);


/** Exercise 2) f
Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de
los ejercicios anteriores para generar un nuevo string que tenga la
primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). **/
var str = "fluorescent adolescent";
var spacePosition = str.indexOf(" ")+1;
var UpperLowerStr = str.substring(0,1).toUpperCase() + str.substring(1,spacePosition).toLowerCase() + str.substring(spacePosition,spacePosition+1).toUpperCase() + str.substring(spacePosition+1).toLowerCase();
console.log("The new string is:", UpperLowerStr);
