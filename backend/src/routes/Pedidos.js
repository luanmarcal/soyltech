const express = require("express");
const router = express.Router()


let dummyCount = 0;
let Pedidos = []

//salvar pedido
router.get('/', (req, res) => {
    res.status(200).send(Pedidos);
})

//requisição adicionar dados de Pedido
router.post('/', (req, res) => {
    
    const request = req.body;

    //created obj
    const pedidoObj = {

        id: dummyCount += 1,
        Nome: request.nome,
        Telefone: request.telefone,
        CPF: request.CPF,
        Endereco: request.endereco, 
        CEP: request.cep,
        Rua: request.rua,
        Numero: request.numero,
        
       
    }
    
    console.log(pedidoObj);
    console.log(req.body);
    Pedidos.push(pedidoObj);
    res.status(201).send();
})

router.get('/', (req, res) => {
    res.send("Rodando")
})



module.exports = router