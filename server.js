//importa express
const wledServer = "http://192.168.88.171/win"; 
const http =  require("http")
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

    dark2();

    //prendi data da sketch e triggera funzione di riemit
    socket.on('location', mouseMsg)

        //per far arrivare dati dal server allo sketch
        function mouseMsg(data) {
            socket.broadcast.emit('location', data);
            console.log(data);
        }

    socket.on('match', light);
    socket.on('noMatch', dark);


}

function light(socket){
    console.log("light");
    http.get(wledServer + '&A=255&FX=15&B=255&G=0&R=0', (res) => {
        console.log("set color")
    }
    ).on('error', err => {
        console.log('Error: ', err.message);
      });;
    
}

function dark2(){
    console.log("dark");
    http.get(wledServer + '&A=0', (res) => {
        console.log("set DARK")
    }
    ).on('error', err => {
        console.log('Error: ', err.message);
      });;
    
}

function dark(socket){
    dark2();
}

