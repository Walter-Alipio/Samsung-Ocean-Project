const express = require('express');//importando framwork Express
const app = express();//inicia aplicação express

app.get('/',  (req, res) => { // get(verbo) '/'(rota AKA: endpoint) 
    res.send('Hello world');
});

const herois = ['Mulher Maravilha', 'Capitã Marvel','Homem de Ferro'];

app.get('/herois', function (req, res) { 
    res.send(herois);
});

 app.listen(3000); 
