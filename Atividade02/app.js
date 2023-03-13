/***********************************************************************
 * Objetivo:criar uma API para manipulação de dados de Cidades e Estado
 * Data: 10/03/2023
 * Autor: Bianca Ferreira Duarte
 * Versâo: 1.0 
 * ********************************************************************/

/* INSTALAÇÕES
->Express - dependencia do node que permite a integração entre protococo http com o código
    * npm install express --save 

->Cors - gerenciador de permissões para o protoloco http 
    * npm install cors --save

-> Body-parser - dependencia que permite manipular dados enviados pelo body da requisição
    * npm install body-parser --save
*/

//IMPORT´s das despendencias para ciar a API:
const express = require('express'); //---> responsável das requisições
const cors = require('cors'); //---> responsável elas permissões das requisições
const bodyParser = require('body-parser'); //---> responsável pela manipulação do body da requisição

//import do arquivo
const estadosCidades = require('./modulo/estados_cidades.js');

const app = express(); // cria um objeto com as informações om a classse express

app.use((request, response, next) => {

    /* Permite gerenciar a origem das requisições da API:
    -> * - API PÚBLICA 
    -> IP - API PRIVADA */
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //Permite gerenciar quais métodos poderam fazer requisições

    app.use(cors()); // Ativa no cors das requisições as permissões estabelecidas
    next();

});

//endPoint ---> Listar Estados
app.get('/estados', cors(), async function(request, response, next) {


    //chama a função de retorno
    let listaDeEstados = estadosCidades.getListaDeEstados()

    // tratamento de validação de processamento
    if (listaDeEstados) {

        response.json(listaDeEstados);
        response.status(200)

    } else {
        response.status(500)
    }

});

// endPoint ---> Lista Caracteristicas do estado pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next) { //uf: --> é uma variavel que vai ser usada na passagem de valores, na URL


    let siglaEstado = request.params.uf
    let statusCode;
    let dadosEstado = {};

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {

        statusCode = 400;
        estado.message = "Não é possível realizar requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)"

    } else {
        let estado = estadosCidades.getDadosEstado(siglaEstado);
        if (estado) {
            statusCode = 200;
            dadosEstado.estado
        } else {
            statusCode = 404;

        }
    }

    response.status(statusCode);
    response.json(dadosEstado);
});
app.get('/estado/capital/:uf', cors(), async function(request, response, next) {


    let siglaEstado = request.params.uf
    let statusCode;
    let dadosEstado = {};

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {

        statusCode = 400;
        estado.message = "Não é possível realizar requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)"

    } else {
        let estado = estadosCidades.getCapitalEstado(siglaEstado);
        if (estado) {
            statusCode = 200;
            dadosEstado.estado
        } else {
            statusCode = 404;

        }
    }

    response.status(statusCode);
    response.json(dadosEstado);
});
//Permite caregar os endPoints criados e aguardar as requisições
// pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')
});