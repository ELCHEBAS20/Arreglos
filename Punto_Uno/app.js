'use strict';

var numberRandom = [];
const cantidadLen = 10;

const GetRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomarray(cantidadLen) {
  for (let index = 0; index < cantidadLen; index++) {
    numberRandom.push(GetRandom(1, 10));
  }
  return numberRandom;
}

console.log(GetRandomarray(cantidadLen));