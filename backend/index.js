const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

// const url = "mongodb://localhost:27017";
const url = "mongodb+srv://brunodias:a9zejQvqaKEa8FJS@cluster0.ny5c8.mongodb.net/";
const dbName = "jornada-fullstack-agosto-22";


// Declaração da função main()
async function main() {
// Ralizar a conexão com MongoClient
// MongoClient -> MongoDatabase -> MOngoCollection
// Conexões com client podem levar um tempo para
// concluir. Portanto, utilizamos o mecanismo de 
// Promises do JavaScript, que permitem aguardar
// esse tempo. Para isso, vamos usar o async/awit.

    console.log("Conectando com o banco de dados...");

   
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('pontuacoes');
 

    console.log("Banco de dados conectado com sucesso!");

    const app = express();

    // Ativamos as configurações do CORS - instalar na pasta backend  npm i cors 
    app.use[cors()];

    // Sinalizamos para o express que estamos usando
    // JSON no body das requisições
    app.use(express.json());

    app.get("/", function (req, res) {
        res.send("Hello, World!");
    });

    app.get("/oi", function (req, res) {
        res.send("Olá, mundo!");
    });

    // Nosso backend armazena as pontuações das jogadas
    // Criar a lista com as pontuações

    // const lista = [
    //     {
    //         id: 1,
    //         nome: "José",
    //         pontos: 25,
    //     },
    //     {
    //         id: 2,
    //         nome: "João",
    //         pontos: 55,
    //     },
    //     {
    //         id: 3,
    //         nome: "Maria",
    //         pontos: 90,
    //     },
    // ];

    // Endpoint READ ALL - [GET] /pontuacoes
    app.get("/pontuacoes", async function (req, res) {
        const itens = await collection
            .find()
            .sort({ pontos: -1 })
            .limit(10)
            .toArray();
        res.send(itens);
    });

    // Endpoint CREATE - [POST] / pontuacoes
    app.post("/pontuacoes", async function (req, res) {
        // Peguei o item do corpo de requisição
        const item = req.body;
        // console.log(item);

        // Adicionar o item na lista
        // lista.push({
        //     id: lista.length + 1,
        //     nome: item.nome,
        //     pontos: item.pontos,
        // });
        await collection.insertOne(item);

        res.send(item);
    });

    app.listen(process.env.PORT || 3333);
}

// Executamos a função man[]
main();
