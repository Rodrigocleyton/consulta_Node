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
    id:2,
    nome: "Banana",
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
    var id = req.params.id
    
    Frutas.find(id).lean().sort({date:'desc'}).then(()=>{
        console.log("funcionou?")
 
        //res.render("admin/Categorias", {categorias: //categorias})
    }).catch((err)=>{
        //flash mostra um caixa de diálo que não se repete, não trava a app
        //por um each em categorias
       // res.flash("error_msg " , "Erro ao listar as categorias")
       // res.redirect("/admin")

    })




    console.log(id, Frutas)
    //transforma em json e traz o produto pelo id
    res.send(JSON.stringify(Frutas))
})




app.listen(port, ()=>{
    console.log("backend rodando...", port)
})
