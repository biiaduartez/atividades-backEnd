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

    const estadosCidades = require('./modulo/estados_cidades.js');
    let listaDeEstados = estadosCidades.getListaDeEstados()

    response.json(listaDeEstados);
    response.status(200)

});

//Permite caregar os endPoints criados e aguardar as requisições
// pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')
});