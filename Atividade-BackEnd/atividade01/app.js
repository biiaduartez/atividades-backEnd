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
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// DADOS
entradaDados.question('DIGITE O NOME DO(A) ALUNO(A):\n', function(nome) {
    let nomeAluno = nome;

    entradaDados.question('DIGITE O SEU NOME PROFESSOR(A):\n', function(professor) {
        let nomeProf = professor;

        entradaDados.question('QUAL SEU GÊNERO PROFESSSOR(A)? DIGITE "M" PARA MASCULINO, OU "F" PARA \n ', function(sexo) {
            let sexoProfessor;
            if (valores.verificarSexoProfessor(sexo)) {
                sexoProfessor = valores.verificarSexoProfessor(sexo);

            } else {
                entradaDados.close();

                entradaDados.question('QUAL O GÊNERO DO(A) ALUNO(A)? DIGITE "M" PARA MASCULINO, OU "F" PARA \n ', function(sexo) {
                    let sexoAluno;
                    if (valores.verificarSexoAluno(sexo)) {
                        sexoAluno = valores.verificarSexoAluno(sexo);

                    } else {
                        entradaDados.close();

                        //////////////////////////////////////////////////////////////////


                        entradaDados.question('CURSO:\n', function(curso) {
                            let nomeCurso = curso;

                            entradaDados.question('DISCIPLINA:\n', function(disciplina) {
                                disciplinaNome = disciplina;

                                //////////////////////////////////////////////////////////////////

                                entradaDados.question('DIGITE A NOTA 01:\n', function(nota1) {
                                    let primeiraNota = nota1.replace(",", ".");

                                    entradaDados.question('DIGITE A NOTA 02:\n', function(nota2) {
                                        let segundaNota = nota2.replace(",", ".");

                                        entradaDados.question('DIGITE A NOTA 03:\n', function(nota3) {
                                            let terceiraNota = nota3.replace(",", ".");

                                            entradaDados.question('DIGITE A NOTA 04:\n', function(nota4) {
                                                    let quartaNota = nota4.replace(",", ".");
                                                    let media = 0;

                                                    console.log(media);

                                                    //////////////////////////////////////////////////////////////////


                                                    // VALIDAÇÕES 
                                                    if (primeiraNota == '' || segundaNota == '' ||
                                                        terceiraNota == '' || quartaNota == '') {
                                                        console.log('ERRO: É necessário digitar algum valor nas entradas')
                                                        entradaDados.close();

                                                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) ||
                                                        isNaN(terceiraNota) || isNaN(quartaNota)) {

                                                        console.log('ERRO: É necessário que todos os dados digitados sejam números')
                                                        entradaDados.close();

                                                    } else if (primeiraNota < 0 || primeiraNota > 100 ||
                                                        segundaNota < 0 || segundaNota > 100 ||
                                                        terceiraNota < 0 || terceiraNota > 100 ||
                                                        quartaNota < 0 || quartaNota > 100) {

                                                        console.log('ERRO: A nota deve ser entre 0 a 100');
                                                        entradaDados.close();

                                                        if (mediaFinal >= 70) {
                                                            situacao = "APROVADO";
                                                            mediaRecuperacao = "NÃO PRECISOU FAZER";
                                                            notaExame = "NÃO PRECISOU FAZER";
                                                            return true;
                                                        } else if (mediaFinal < 50) {
                                                            situacao = "REPROVADO";
                                                            return true;
                                                        } else if (mediaFinal >= 50 && mediaFinal < 70) {
                                                            fazerRecuperacao();
                                                            return false;
                                                        } else {
                                                            return false;
                                                        }
                                                    };

                                                    //////////////////////////////////////////////////////////////////////

                                                    if (nomeAluno == '')
                                                        console.log('ERRO: É necessário que o nome do aluno seja digitado');
                                                    entradaDados.close();


                                                    if (nomeProf == '')
                                                        console.log('ERRO: É necessário que o nome do professor seja digitado');
                                                    entradaDados.close();

                                                    if (nomeCurso == '')
                                                        console.log('ERRO: É necessário que o nome do curso seja digitado');
                                                    entradaDados.close();


                                                    if (disciplinaNome == '')
                                                        console.log('ERRO: É necessário que o nome da disciplina seja digitado');
                                                    entradaDados.close();

                                                    console.log(`
                                        O ${nomeAluno} foi ${situacao} na disciplina ${nomeDisciplina}
                                        Curso: ${nomeCurso}
                                        ${sexoProfessor}: ${nomeProfessor}
                                        Notas do ${sexoAluno}: ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${notaExame}
                                        Média final: ${mediaFinal}
                                        Média final do Exame: ${mediaRecuperacao}
                                        `);
                                                }

                                            )

                                        })
                                    })
                                })
                            })
                        })
                    }
                })
            }
        })
    })
})