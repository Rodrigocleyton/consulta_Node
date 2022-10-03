const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


//config conection with  mongoDB
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/consultaMongoDB").then(()=>{
    console.log("Conection succeful with mongoDB")
}).catch((err)=>{
    console.log("Conection failed", err)
})

//Segundo passo definição do model
const Product = mongoose.Schema({
    id: {
        type: Number,
        require
    },
    nome: {
        type: String,
        require
    },
    preco: {
        type: Number,
        require
    }

})
// Terceiro passo definição do nome da collection

mongoose.model('sacolao', Product)

//Quarto passo, dados dos produtos, cria-se uma constante
const Frutas = mongoose.model('sacolao')

new Frutas({
    id:1,
    nome: "banana",
    preco: 1.99
//salvar produto
}).save().then(()=>{
    console.log("Product save succeful!")
}).catch((err)=>{
    console.log("Product not save!", err)
})




/* comentado para add produtos no mongoDB
var produtos=[
    {id:1, nome:"Laranja", ano:1.99, estoque: true},
    {id:2, nome:"Melancia", preco: 2.99, estoque: false},
    {id:3, nome:"Mamão", preco:6.99, estoque: true},
    {id:4, nome:"Goiaba", preco: 4.99, estoque: false},
   
]

*/

app.get('/produtos/:id', (req, res)=>{
  
    //pega a requisição que veio como req e retorna como resposta
    //params acessa o parametro qu vem direto na url
   //Do conection with mongo
    //Search products in the mongoDB

     var tipo = produtos.filter(
        
        function(x) {
            return x.id == req.params.id
           
        }
         
    )
    console.log(req.params.id, tipo)
    //transforma em json e traz o produto pelo id
    res.send(JSON.stringify(tipo))
})

app.listen(port, ()=>{
    console.log("backend rodando...", port)
})
