//importa express
var express = require('express');
var app = express();
var server = app.listen(8080);
app.use(express.static('public'));
console.log("working");

//importa socket.io
var socket = require('socket.io'); 
var io =  socket(server);

//triggera funzione se c'è nuova connessione
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    //logga nuovo accesso con id arbitrariamente assegnato
    console.log('New connection:' + socket.id);

    //prendi data da sketch e triggera funzione di riemit
    socket.on('location', mouseMsg);

    //per far arrivare dati dal server allo sketch
    function mouseMsg(data) {
        socket.broadcast.emit('location', data);
        console.log(data);
    }
}

