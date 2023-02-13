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


const verificarSexoAluno = function(sexoAluno) {
    let sexo = sexoAluno;
    if (sexo == "M") {
        sexo = "Aluno";
    } else if (sexo == "F") {
        sexo = "Aluna";
    } else {
        return false;
    }
    return sexo;
};

const verificarSexoProfessor = function(sexoProfessor) {
    let sexo = sexoProfessor;
    if (sexo == "M") {
        sexo = sexo = "Professor";
    } else if (sexo == "F") {
        sexo = sexo = "Professora";
    } else {
        return false;
    }

    return sexo;
};


const recuperacao = function(notaExame) {
    mediaRecuperacao = (Number(mediaFinal) + Number(notaExame)) / 2;

    if (mediaRecuperacao >= 60) {
        situacao = "APROVADO POR RECUPERAÇÃO";
    } else {
        situacao = "REPROVADO POR RECUPERAÇÃO";
    }
    return mediaRecuperacao;
};


module.exports = {
    calculadora,
    verificarSexoAluno,
    verificarSexoProfessor,
    recuperacao
}