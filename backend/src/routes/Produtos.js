const express = require("express");
const router = express.Router()


let dummyCount = 0;
let Produtos = []

//salvar pedido
router.get('/', (req, res) => {
    res.status(200).send(Produtos);
})

//requisição adicionar dados de Pedido
router.post('/', (req, res) => {
    
    const request = req.body;

    //created obj
    const produtoObj = {

        id: dummyCount += 1,
        Nome: request.nome,
        Img: request.img,
        Preco: request.preco

    }
    
    Produtos.push(produtoObj);
    res.status(201).send();
})

router.get('/', (req, res) => {
    res.send(Produtos);
})


module.exports = router;