/*
npx create-react-app PROJETO
*/
const express = require("express"); //controller
const app = express();
const routes = require("./routes/routes");
const path = require("path");
const bodyparser = require("body-parser"); // requisições http

require('dotenv/config');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//Rotas
app.use('/', routes);

//Public
app.use(express.static(path.join(__dirname, "public")));

//Servidor
app.listen(process.env.PORT, () => {
    console.log("SERVIDOR RODANDO NA PORTA",process.env.PORT);
});