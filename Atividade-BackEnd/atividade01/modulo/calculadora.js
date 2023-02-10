/*******************************************************************
  Objetivo: Arquivo para gerenciar funções de um sistema que gerencie 
  as médias escolares de uma universidade
 * Data: 10/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versão: 1.0 
 * ***************************************************************/

// função do calculo da média escolar e do exame
const calculadora = function(nota1, nota2, nota3, nota4) {
    let primeiraNota = Number(nota1);
    let segundaNota = Number(nota2);
    let terceiraNota = Number(nota3);
    let quartaNota = Number(nota4);

    let resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) / 4);
    return resultado;
}

module.exports = {
    calculadora
}