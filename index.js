var bodyParser = require('body-parser')
var express = require("express")
var app = express()
var router = require("./routes/routes")
var cors = require("cors")// resolve bulg de segurança de localhost

app.use(cors())
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",router);

app.listen(8686,() => {// definindo minha rota
    console.log("Servidor rodando")
});
