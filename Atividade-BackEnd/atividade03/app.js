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


console.log(`Digite:
               1 para mostrar APENAS os números PARES; 
               2 para mostrar APENAS os números ÍMPARES;
               Qualquer outra coisa para mostrar os dois\n`);

entradaDados.question("Digite o que deseja mostrar: ", function(numero) {
    if (valores.verificarTipo(numero) === "1") {
        entradaDados.question("Digite o número INICIAL: ", function(numero) {
            let numeroInicial;
            numeroInicial = valores.validarInputInicial(numero);

            if (numeroInicial == false) {
                entradaDados.close();
                return false;
            }

            entradaDados.question("Digite o número FINAL: ", function(numero) {
                let numeroFinal = numero;
                numeroFinal = valores.validarInputFinal(numero);

                if (numeroFinal == false) {
                    entradaDados.close();
                    return false;
                } else if (
                    valores.verificarValorMaior(numeroInicial, numeroFinal)
                ) {
                    entradaDados.close();
                    return false;
                } else if (
                    valores.isNumerosIguais(numeroInicial, numeroFinal)
                ) {
                    entradaDados.close();
                    return false;
                } else {
                    valores.verificarNumeros(numeroInicial, numeroFinal);
                }
            });
        });
    } else if (valores.verificarTipo(numero) === "2") {
        entradaDados.question("Digite o número INICIAL: ", function(numero) {
            let numeroInicial;
            numeroInicial = valores.validarInputInicial(numero);

            if (numeroInicial == false) {
                entradaDados.close();
                return false;
            }

            entradaDados.question("Digite o número FINAL: ", function(numero) {
                let numeroFinal = numero;
                numeroFinal = valores.validarInputFinal(numero);

                if (numeroFinal == false) {
                    entradaDados.close();
                    return false;
                } else if (
                    valores.verificarValorMaior(numeroInicial, numeroFinal)
                ) {
                    entradaDados.close();
                    return false;
                } else if (
                    valores.isNumerosIguais(numeroInicial, numeroFinal)
                ) {
                    entradaDados.close();
                    return false;
                } else {
                    valores.verificarNumeros(numeroInicial, numeroFinal);
                }
            });
        });
    } else {
        entradaDados.question("Digite o número INICIAL: ", function(numero) {
            let numeroInicial;
            numeroInicial = valores.validarInputInicial(numero);

            if (numeroInicial == false) {
                entradaDados.close();
                return false;
            }

            entradaDados.question("Digite o número FINAL: ", function(numero) {
                let numeroFinal = numero;
                numeroFinal = valores.validarInputFinal(numero);

                if (numeroFinal == false) {
                    entradaDados.close();
                    return false;
                } else if (
                    valores.verificarValorMaior(numeroInicial, numeroFinal)
                ) {
                    entradaDados.close();
                    return false;
                } else if (
                    valores.isNumerosIguais(numeroInicial, numeroFinal)
                ) {
                    entradaDados.close();
                    return false;
                } else {
                    valores.verificarNumeros(numeroInicial, numeroFinal);
                }
            });
        });
    }
});