const express = require("express");
const router = express.Router()
const ProdutosDB = require('../models/produtos')

let dummyCount = 0;
let Produtos = []

//Ver Produtos
router.get('/', (req, res) => {
    ProdutosDB.find().then(produtos => {
        res.status(200).send(produtos);
    }).catch(err => {
        res.status(500).send(err)
    })
})

//Adicionar Novo Produto
router.post('/', (req, res) => {

    const request = req.body;

    const produto = new ProdutosDB({
        Nome: request.nome,
        Img: request.img,
        Preco: request.preco
    })

    produto.save().then(() => {
        res.status(200).send()
    });
})

//deletar moisture
router.delete('/perigo', (req, res) => {
    ProdutosDB.deleteMany().then(result => {
        res.status(200).send()
    });
})


module.exports = router;