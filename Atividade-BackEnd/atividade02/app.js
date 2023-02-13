/*******************************************************************
  Objetivo:Criar um sistema para gerenciar o cálculo de uma tabuada, 
  conforme requisitos abaixo: 
 O sistema deverá solicitar as seguintes entradas: 
* A tabuada inicial e tabuada final a ser calculada; 
* O número inicial e final do contador da tabuada;

 * Data: 13/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versão: 1.0 
 * ***************************************************************/

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('  ----  TABUADA  ----  ');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');

// IMPORT'S
var valores = require('./modulo/tabuada.js');
var readline = require('readline');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question(
    'Qual o número da tabuada que você deseja iniciar deve ser entre [2 ao 100]: ',
    function(multiplicandoMin) {
        let minMultiplicando = Number(multiplicandoMin)
        if (minMultiplicando == '') {

            console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
            entradaDados.close()

        } else if (isNaN(minMultiplicando)) {
            console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
            entradaDados.close()

        } else if (minMultiplicando < 2 || minMultiplicando > 100) {
            console.log('ERRO: por favor digite valores entre 2 ao 100')
            entradaDados.close()

        } else {
            entradaDados.question(
                'Qual o número da tabuada que você deseja finalizar deve ser entre [2 ao 100]: ',
                function(multiplicandoMax) {

                    let maxMultiplicando = Number(multiplicandoMax)
                    if (maxMultiplicando == '') {

                        console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                        entradaDados.close()

                    } else if (isNaN(maxMultiplicando)) {
                        console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                        entradaDados.close()

                    } else if (maxMultiplicando < 2 || maxMultiplicando > 100) {
                        console.log('ERRO: por favor digite valores entre 2 ao 100')
                        entradaDados.close()

                    } else {
                        entradaDados.question(
                            'Digite o número minímo do multiplicador entre [1 ao 50]: ',
                            function(multiplicadorMin) {
                                let minMultiplicador = Number(multiplicadorMin)

                                if (minMultiplicador == '') {
                                    console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                                    entradaDados.close()

                                } else if (isNaN(minMultiplicador)) {
                                    console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                                    entradaDados.close()

                                } else if (minMultiplicador < 1 || minMultiplicador > 50) {
                                    console.log('ERRO: por favor digite valores entre 1 ao 50')
                                    entradaDados.close()

                                } else {
                                    entradaDados.question(
                                        'Digite o número máximo do multiplicador entre [1 ao 50]: ',
                                        function(multiplicadorMax) {
                                            let maxMultiplicador = Number(multiplicadorMax)

                                            if (maxMultiplicador == '') {
                                                console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                                                entradaDados.close()

                                            } else if (isNaN(maxMultiplicador)) {
                                                console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                                                entradaDados.close()

                                            } else if (maxMultiplicador < 1 || maxMultiplicador > 50) {
                                                console.log('ERRO: Digitar valores entre 1 e 50')
                                                entradaDados.close()

                                            } else {
                                                valores.tabuada(minMultiplicando, maxMultiplicando, minMultiplicador, maxMultiplicador)

                                                entradaDados.close()
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    })