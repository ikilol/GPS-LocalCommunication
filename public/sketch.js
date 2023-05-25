
var lat;
var lon;
var socket; 

function setup(){
  //socket = io.connect(location.protocol + '//' + location.host);
}

function draw() {
    navigator.geolocation.getCurrentPosition(getposition, geoError);
    newText();
    console.log(lat, lon);
    //socket.on('location', newText);
  }

function getposition(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude

    var data = {
      x: lat,
      y: lon
    }
    //socket.emit('location', data)
  }

  function geoError(err) {
    console.log('error', err);
   
  }

  function newText(data){

    if (lat > 0 && lon > 0){

    var marker = L.marker([lat, lon]);
    marker.addTo(map);
  
    var marker2 = L.marker([data.x, data.y]);
    marker2.addTo(map);
  }
    
  }
  
