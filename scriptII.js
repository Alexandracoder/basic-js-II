//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'
//Escribe tu código aquí
const age = 12;
const resultado = age >= 18 ? "Eres mayor de edad" : "No eres aún mayor de edad";
console.log(resultado);
//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
//hecho!

//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"
//Escribe tu código aquí
const pet = "serpiente";
if (pet === "perro") {
    console.log("tengo un perro");
} else if (pet === "gato") {
    console.log("tengo un gato");
} else if (pet === "pajaro") {
    console.log("tengo un pajaro");
} else if (pet === "serpiente") {
    console.log("no tengo una mascota convencional");
}
//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.
//hecho//

//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

//Escribe tu código aquí
switch ("perro") {
    case "perro":
        console.log("tengo un perro");
        break;
    case "gato":
        console.log("tengo un gato");
        break;
    case "pajaro":
        console.log("tengo un pajaro");
        break;
    default:
        console.log("no tengo una mascota convencional");
        break;
}
//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"
//Escribe tu código aquí;
const weather = "frio";
const result = weather === "soleado" ? "Me vestiré con un vestido" : "Me vestiré con pantalón"
console.log(result)

//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.

//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.
//Escribe tu código aquí
const value = "1";
if (typeof value === "number") {
    console.log("Es un número");
}   else if (typeof value === "string") {
    console.log("Es un string");
}   else {
    console.log("No es ni número ni string");
}   
//Ejercicio 8: Cambia el valor de value a "1" y mira el resultado en consola para comprobar que tu código funciona bien.
//hecho!//
//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for
//Escribe tu código aquí
let i = 0;
for (i = 0; i <= 10; i++) {
    console.log(i);
}
//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

//Escribe tu código aquí
const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }
]
for (let index in programmers) {
    const programmer = programmers[index];
    console.log(`${programmer.name} ${programmer.lastname} contribuyó a ${programmer.knowledge}.`);
}

//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.
//Escribe tu código aquí
const names = ['Carla', 'Alex', 'Judith', 'Maria', 'Noelia']
for (let name of names) {
    console.log(`Hola, mi nombre es ${name}`);
}

//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí
let y = 1;
while ( y <=5 ) {
    console.log(y);
    y++;
}

//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

//Escribe tu código aquí
let z = 1;
do {
    console.log(z);
    z++;
} while (z <= 5);


//Ejercicio 14: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

//Escribe tu código aquí
function saludar(nombre) {
    return `Hola, ${nombre}!`;
} saludar("Carla");
console.log(saludar("Carla"));  
saludar("Alex");
console.log(saludar("Alex"));
saludar("Judith");
console.log(saludar("Judith"));
saludar("Maria");
console.log(saludar("Maria"));
saludar("Noelia");
console.log(saludar("Noelia"));



//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

//Escribe tu código aquí
function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}           
console.log(calcularAreaRectangulo(5, 10)); // 50
console.log(calcularAreaRectangulo(7, 3)); // 21    
console.log(calcularAreaRectangulo(4, 8)); // 32
console.log(calcularAreaRectangulo(6, 2)); // 12   
