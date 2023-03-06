/*******************************************************************
  Objetivo: Criar um sistema que gerencie as médias escolares de uma 
  universidade
 * Data: 10/02/2023
 * Autor: Bianca Ferreira Duarte
 * Versão: 1.0 
 * ***************************************************************/
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('CALCULO DA MÉDIA ESCOLAR');
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');

// IMPORT'S
var valores = require('./modulo/calculadora.js');
var readline = require('readline');
var readline = require("readline");

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

entradaDados.question("Digite o nome do aluno: ", function(nome) {
    let nomeAluno;
    nomeAluno = valores.verificarNomeAluno(nome);

    if (nomeAluno == false) {
        entradaDados.close();
        return false;
    }

    entradaDados.question("Digite o nome do professor: ", function(nome) {
        let nomeProfessor;
        nomeProfessor = valores.verificarNomeProfessor(nome);

        if (nomeProfessor == false) {
            entradaDados.close();
            return false;
        }

        entradaDados.question("Digite o sexo do aluno: ", function(sexo) {
            let sexoAluno;
            sexoAluno = valores.verificarSexoAluno(sexo);

            if (sexoAluno == false) {
                entradaDados.close();
                return false;
            }

            entradaDados.question("Digite o sexo do professor: ", function(sexo) {
                let sexoProfessor;
                sexoProfessor = valores.verificarSexoProfessor(sexo);

                if (sexoProfessor == false) {
                    entradaDados.close();
                    return false;
                }

                entradaDados.question("Digite o nome do curso: ", function(curso) {
                    let nomeCurso;
                    nomeCurso = valores.verificarNomeCurso(curso);

                    if (nomeCurso == false) {
                        entradaDados.close();
                        return false;
                    }

                    entradaDados.question(
                        "Digite o nome da disciplina: ",
                        function(disciplina) {
                            let nomeDisciplina;

                            nomeDisciplina =
                                valores.verificarNomeDisciplina(disciplina);

                            if (nomeDisciplina == false) {
                                entradaDados.close();
                                return false;
                            }

                            entradaDados.question(
                                "Digite a primeira nota de 0 a 100: ",
                                function(nota1) {
                                    let primeiraNota;
                                    nota1 = valores.converterInput(nota1);

                                    primeiraNota = valores.validarInput(nota1);

                                    if (primeiraNota == false) {
                                        entradaDados.close();
                                        return false;
                                    }

                                    entradaDados.question(
                                        "Digite a segunda nota de 0 a 100: ",
                                        function(nota2) {
                                            let segundaNota;
                                            nota2 = valores.converterInput(nota2);

                                            segundaNota = valores.validarInput(nota2);

                                            if (segundaNota == false) {
                                                entradaDados.close();
                                                return false;
                                            }

                                            entradaDados.question(
                                                "Digite a terceira nota de 0 a 100: ",
                                                function(nota3) {
                                                    let terceiraNota;
                                                    nota3 = valores.converterInput(nota3);

                                                    terceiraNota = valores.validarInput(nota3);

                                                    if (terceiraNota == false) {
                                                        entradaDados.close();
                                                        return false;
                                                    }

                                                    entradaDados.question(
                                                        "Digite a quarta nota de 0 a 100: ",
                                                        function(nota4) {
                                                            let quartaNota;
                                                            nota4 = valores.converterInput(nota4);

                                                            quartaNota = valores.validarInput(nota4);

                                                            if (quartaNota == false) {
                                                                entradaDados.close();
                                                                return false;
                                                            }

                                                            if (
                                                                valores.isAlunoAprovado(
                                                                    primeiraNota,
                                                                    segundaNota,
                                                                    terceiraNota,
                                                                    quartaNota
                                                                )
                                                            ) {
                                                                valores.mostrarRelatorio(
                                                                    nomeAluno,
                                                                    nomeProfessor,
                                                                    sexoAluno,
                                                                    sexoProfessor,
                                                                    nomeCurso,
                                                                    nomeDisciplina,
                                                                    primeiraNota,
                                                                    segundaNota,
                                                                    terceiraNota,
                                                                    quartaNota,
                                                                    "NÃO PRECISOU FAZER"
                                                                );
                                                                entradaDados.close();
                                                            } else {
                                                                entradaDados.question(
                                                                    "Insira a nota do exame: ",
                                                                    function(nota) {
                                                                        nota =
                                                                            valores.converterInput(nota);
                                                                        valores.fazerRecuperacao(nota);
                                                                        valores.mostrarRelatorio(
                                                                            nomeAluno,
                                                                            nomeProfessor,
                                                                            sexoAluno,
                                                                            sexoProfessor,
                                                                            nomeCurso,
                                                                            nomeDisciplina,
                                                                            primeiraNota,
                                                                            segundaNota,
                                                                            terceiraNota,
                                                                            quartaNota,
                                                                            nota
                                                                        );
                                                                        entradaDados.close();
                                                                    }
                                                                );
                                                            }
                                                        }
                                                    );
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        }
                    );
                });
            });
        });
    });
});