
var lat;
var lon;
var socket; 

function setup(){
  createCanvas(200,200);
  socket = io.connect('http://localhost:8080');
}

function newText(data){
  background(0);
  
  textSize(32);
  fill(255);
  text(lat, 10, 30);
  text(lon, 10, 60);

  textSize(32);
    fill(250, 0, 100);
    text(data.x, 10, 100);
    text(data.y, 10, 150);
}


function draw() {
    navigator.geolocation.getCurrentPosition(getposition);
    console.log(lat, lon);
    socket.on('location', newText);
  }

function getposition(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude

    var data = {
      x: lat,
      y: lon
    }
    socket.emit('location', data)
  }
