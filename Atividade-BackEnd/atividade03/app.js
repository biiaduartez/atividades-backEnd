/*******************************************************************
  Objetivo: Criar um sistema que gerencie números pares e impares
 * Data: 13/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versão: 1.0 
 * ***************************************************************/
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('IMPAR x PAR');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');

// IMPORT'S
var valores = require('./modulo/funcao.js');
var readline = require('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});