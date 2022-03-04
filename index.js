const { response } = require('express');
const express = require('express');//importando framwork Express
const res = require('express/lib/response');
const app = express();//inicia aplicação express

//sinaliza para o express utilizar JSON no corpo das requisições
app.use(express.json());

//Principal
app.get('/',  (req, res) => { // get(verbo) '/'(rota AKA: endpoint)  req. requisição client res. resposta do back-end
    res.send('Hello world');//res.send envia uma resposta
});

const herois = ['Mulher Maravilha', 'Capitã Marvel','Homem de Ferro'];


//GET - Read All
app.get('/herois', (req, res) => { 

    const actualHeroes = herois.filter(Boolean);

    res.send(actualHeroes);//filter(Boolean) garante que só seram lidos os valores válidos, não null.
});

//GET - Read Single ID
app.get('/herois/:id',(req,res)=>{//:id (parâmetro de rota)

    const id = req.params.id-1;//acessa o parametro da rota id
    const item = herois[id];

    res.send(item);
});

//POST - Creat
app.post('/herois', (req, res)=>{
    
    const item = req.body.nome;//pega apenas o atributo nome:

    herois.push(item);//add novo heroi na lista
    res.send('Item adicionado com sucesso!');
});

//PUT - Update

app.put('/herois/:id',(req,res)=>{
    //recebemos o id que será atualizado
    const id = req.params.id-1;
//fazemos o -1 porque a chamada vem a partir do 1, mas estamoas usando o index da array como id, que começa do 0.

    //pegamos o item que foi enviado no corpo da requisição
    const newItem = req.body.nome;

    //Atualiza a lista sobrescrevendo o item da lista
    herois[id] = newItem;

    res.send('Este item foi atualizado com sucesso!')
});

//DELETE
app.delete('/herois/:id',(req,res)=>{//tras o item como parâmetro

    const id = req.params.id-1;//pega a id passada na requisição

    delete herois[id];//deleta do array o heroi da posição id

    res.send('Item excluido com sucesso!');

})

 app.listen(3000); 
