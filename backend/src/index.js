const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');

const {setupWebsocket} = require('./webSocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);
mongoose.connect('mongodb+srv://omnistack:omnistack10@cluster0-nfays.mongodb.net/week10?retryWrites=true&w=majority',
{
useNewUrlParser:true,
useUnifiedTopology: true
}
);

app.use(cors());
app.use(express.json());
app.use(routes);

//Metodos  HTTP: GET ,POST, PUT , DELETE

// Tipos de parametros
//query Params: req.query (Filtros, ordenação, paginação,...)
//Router params: req.params (Identificar um recurso na alterção ou remoção)
// Body:  req.body (Dados para criação ou alteração de registro)

//mongoDb (Não relacional)



server.listen(3333);