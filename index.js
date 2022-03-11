const { response } = require('express');
const { MongoClient , ObjectId } = require('mongodb'); //inportando o mongodb
const express = require('express');//importando framwork Express
const res = require('express/lib/response');

const url = "mongodb://localhost:27017"; //string de conexão - exclusivo do mongodb
const dbName = "ocean_bancodados";

async function main(){

    // Conexão com bando de dados
    console.log('Realizando conexão com banco de dados...');
   // const client = await MongoClient.connect(url);//await espera a resposta acontecer

   // const db = client.db(dbName);//pegando o banco de dados

    //const collection = db.collection("herois");//puxa nossa collection do banco

    console.log('Conexão com banco de dados realizada com sucesso');

    const app =  express();//inicia aplicação express
    
    //sinaliza para o express utilizar JSON no corpo das requisições
    app.use(express.json());
    
    //Principal
    app.get('/',  (req, res) => { // get(verbo) '/'(rota AKA: endpoint)  req. requisição client res. resposta do back-end
        res.send('Hello world');//res.send envia uma resposta
    });
    
    //GET - Read All
    app.get('/herois', async (req, res) => { 

        const documents = await collection.find().toArray();//espera e puxa a resposta como array de documentos 
    
        res.send(documents);//envia a lista como resposta para o client
    });
    
    //GET - Read Single ID
    app.get('/herois/:id', async (req,res)=>{//:id (parâmetro de rota)
    
        const id = req.params.id;//acessa o parametro da rota id (string)
        const item = await collection.findOne({_id: new ObjectId(id)});//faz a busca pela id informada na rota
    
        res.send(item);
    });
    
    //POST - Creat
    app.post('/herois', async (req, res)=>{
        
        const item = req.body;//pega o corpo da requisição

        await collection.insertOne(item);//inserindo no banco
    
        res.send(item); //envia o item criado como resposta a requisição
    });
    
    //PUT - Update
    app.put('/herois/:id', async (req,res)=>{
        //recebemos o id que será atualizado
        const id = req.params.id;
    
        //pegamos o item que foi enviado no corpo da requisição
        const newItem = req.body;
    
        //Atualiza o banco de dados sobrescrevendo o item da lista
       await collection.updateOne(
            { _id: ObjectId(id)},
            {
                $set: newItem,
            }
        );//recebe dois objetos como parâmetro, a localização e a modificação
    
        res.send(newItem)
    });
    
    //DELETE
    app.delete('/herois/:id',async(req,res)=>{//tras o item como parâmetro
    
        const id = req.params.id-1;//pega a id passada na requisição
    
       // delete herois[id];//deleta do array o heroi da posição id
       await collection.deleteOne({_id: ObjectId(id)});
    
        res.send('Item excluido com sucesso!');
    })
    //definimos a porta em que a aplicação está rodando no heroku "ou" no localhost
     app.listen(process.env.PORT || 3000); 
}
main();//toda conexão com banco de dados é uma promise e por isso, envolvemos nossa API em uma função async 

/* o heroku informa a porta disponivel através do process.env */

 /* Usando o Thunder Cliente
 -New Request
 -localhost3000*/

 /* usando MongoDB Compass
 NOSQL - Not Only SQL.
 -create database + name + colection 
 -no terminal, npm i mongodb*/

 //estudar modulos https://expressjs.com/pt-br/guide/routing.html
