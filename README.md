# 📅 Agenda - BackEnd

Este é o repositório do **Back-End** da aplicação *Agenda*, um sistema de gerenciamento de compromissos e contatos desenvolvido com **Node.js**, **Express** e **Sequelize**. Ele faz parte de um projeto fullstack, em conjunto com o [Front-End](https://github.com/PauloHenriqueTrentin/Agenda-Dev-Web).

##  Funcionalidades

- CRUD de **contatos**
- CRUD de **compromissos**
- Integração com banco de dados PostgreSQL

##  Como Executar Projeto

  * Primeiramente Intalar com o comando:
  * ```
    npm install
    ```
  * Após, Criar um arquivo **.env** no diretorio principal e colocar dentro
  
  * ```
    POSTGRES_HOST=localhost
    POSTGRES_DB=arni-api
    POSTGRES_USERNAME=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_PORT=5432
    TOKEN_KEY=arni-api
    API_PORT=3333
    API_HOST=http://localhost
    ```
  * Após a criação do arquivo rodar o comando
  * ```
    npm run dev
    ```
O servidor estará disponível em:
📍 http://localhost:3333


