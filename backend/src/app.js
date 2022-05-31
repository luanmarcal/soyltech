const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')


const server = express()
const port = 4002

const  pedidosRoute= require('./routes/Pedidos')
const produtosRoute = require('./routes/Produtos')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors());
server.use('/pedidos', pedidosRoute);
server.use('/produtos', produtosRoute);


server.listen(port, () => {
    console.log(`server running on port ${port}`)
})