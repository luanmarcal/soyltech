const mongoose = require("mongoose")

const ProdutosDBSchema = new mongoose.Schema(
    {
        Nome: String,
        Img: String,
        Preco: String
    }
)

module.exports = mongoose.model("ProdutosDB", ProdutosDBSchema);