# Samsung-Ocean-Project
Curso back-end com Node.js e Express

## Dependências
* node: 16.13.0
* express: 4.17.3
* mongodb: 4.4.1
* dotenv: 16.0.0



- Clone o reposítório, instale as dependencias, rode o app no terminal com o comando: npm run dev

## *Primeira parte*

O curso teve como objetivo criar uma API REST que armazena as informações em um array, mas que futuramente, será ligada a um banco de dados. 

Possuí as principais operações de CRUD.
- GET read All
- GET read only
- POST creat
- PUT update
- DELET

Usamos a extensão Thunder Client do VSCode para testar o app.

## *Seguda parte*

Nessa etapa tivemos uma breve introdução a banco de dados, entendo algumas das principais diferenças entre SQL e NoSQL, específicamente o MongoDB.
Foi criado o banco de dados usando MongoDB e foram realizadas as alterações na API para realizar as operaçôes direto no banco.
Fizemos também o deploy do app no heroku e do DB no próprio cloud do MongoDB.

## Extra mile

Usando de base o [vídeo](https://www.youtube.com/watch?v=q6rNLMC5l3o) do professor Paulo Salvatore, realizei o processo de esconder as informações sensíveis do app referentes ao banco de dados, usando variáveis de ambiente, em um arquivo .env. O modelo está disponível no arquivo .env.example.