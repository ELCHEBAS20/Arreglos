'use strict';


const ArrayExample = [10, 40, 30, 20, 15, 5];
let aux = 0;

console.log('Sin ordenar: ', ArrayExample);

function Metodo_Burbuja() {
  /**Metodo burbuja */
  for (let index = 0; index < ArrayExample.length - 1; index++) {
    for (let iterador = 0; iterador < ArrayExample.length - index - 1; ++iterador) {
      if (ArrayExample[iterador + 1] < ArrayExample[iterador]) {
        aux = ArrayExample[iterador + 1];
        ArrayExample[iterador + 1] = ArrayExample[iterador];
        ArrayExample[iterador] = aux;
      }
    }
  }
}

function Metodo_Sort() {
  return ArrayExample.sort((a, b) => a - b);
}

function DevolverMayor_Menor(array) {
  return array.at(0) + "-" + array.at(-1);
}

Metodo_Burbuja();
Metodo_Sort();
const StrlSplit = DevolverMayor_Menor(ArrayExample).split('-');

console.log('Metodo burbuja: ', ArrayExample);
console.log('Metodo Sort: ', ArrayExample);
console.log('El numero menor: ', StrlSplit[0]);
console.log('El numero mayor: ', StrlSplit[1]);

