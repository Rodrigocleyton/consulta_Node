const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


//config mangoose


var produtos=[
    {id:1, nome:"Laranja", preco:1.99, estoque: true},
    {id:2, nome:"Melancia", preco: 2.99, estoque: false},
    {id:3, nome:"Mamão", preco:6.99, estoque: true},
    {id:4, nome:"Goiaba", preco: 4.99, estoque: false},
   
]




app.get('/produto/:id', (req, res)=>{
    //pega a requisição que veio como req e retorna como resposta
    //params acessa o parametro qu vem direto na url
   var tipo = produtos.filter(
        function(x) {
            return x.id == req.params.id
        }
    )
    console.log(req.params.id, tipo)
    //transforma em json e traz o produto pelo id
    res.send(JSON.stringify(tipo))
})

app.get('/produtos', (req, res)=>{
    res.send(JSON.stringify(produtos))
    console.log(produtos)
})

app.listen(port, ()=>{
    console.log("backend rodando...", port)
})