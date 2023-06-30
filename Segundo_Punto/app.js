'use strict';

let StrlCadena = prompt('Ingresar por favor texto: ');
let RstCadena = StrlCadena.replace(/\s/g, ",");

console.log("Cadena normal: ", RstCadena)
console.log('Cadena convertidad: ', RstCadena.split(','))