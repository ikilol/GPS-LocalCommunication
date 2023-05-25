
var lat;
var lon;
var socket; 

function setup(){
  createCanvas(200,200);
  //socket = io.connect('http://localhost:8080');
  socket = io.connect(location.protocol + '//' + location.host);
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
    console.log('other' + data.x, data.y);
}


function draw() {
    navigator.geolocation.getCurrentPosition(getposition, geoError);
    lat = lat + 0.01;
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

  function geoError(err) {
    console.log('error', err);
   
  }


