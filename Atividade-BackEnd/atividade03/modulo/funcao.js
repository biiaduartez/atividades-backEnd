/*******************************************************************
  Objetivo: funções do sistema de par  x impar
 * Data: 13/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versão: 1.0 
 * ***************************************************************/
const funcao = function() {
    if (num % 500 === 0) {
        console.log('Par');
    } else {
        console.log('Ímpar');
    }

}



module.exports = {
    funcao
}