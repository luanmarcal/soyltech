const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')

const server = express()
const port = 4000

const  pedidosRoute= require('./routes/Pedidos')
const produtosRoute = require('./routes/Produtos')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors());
server.use('/pedidos', pedidosRoute);
server.use('/produtos', produtosRoute);


//servidor será iniciado se a conexão com o DataBase, for aceita;
const main = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MY_USER}:${process.env.MY_PASSWORD}@cluster0.mxpes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}

main().then(() => {
    server.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
}).catch(err => console.log(err));