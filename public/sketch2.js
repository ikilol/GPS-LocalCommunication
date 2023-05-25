
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


  map.on('load', () => {
    map.loadImage(
    'assets/user.png',
    (error, image) => {
    if (error) throw error;
    map.addImage('user', image);
    map.addSource('point', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [9.176, 45.474] }}]}});
    map.addLayer({
    'id': 'points',
    'type': 'symbol',
    'source': 'point', 
    'layout': {
    'icon-image': 'user',
    'icon-size': 0.25 }});});});
    
    map.on('load', () => {
    map.loadImage(
    'assets/1.png',
    (error, image) => {
    if (error) throw error;
    map.addImage('1', image);
    map.addSource('point1', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [9.1792, 45.476] }}]}});
    map.addLayer({
    'id': 'points1',
    'type': 'symbol',
    'source': 'point1', 
    'layout': {
    'icon-image': '1',
    'icon-size': 0.25 }});});});
    
    map.on('load', () => {
    map.loadImage(
    'assets/2.png',
    (error, image) => {
    if (error) throw error;
    map.addImage('2', image);
    map.addSource('point2', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [9.174, 45.4725] }}]}});
    map.addLayer({
    'id': 'points2',
    'type': 'symbol',
    'source': 'point2', 
    'layout': {
    'icon-image': '2',
    'icon-size': 0.25 }});});});

    map.on('mousemove', (e) => {
      document.getElementById('info').innerHTML =
      // `e.point` is the x, y coordinates of the `mousemove` event
      // relative to the top-left corner of the map.
      JSON.stringify(e.point) +
      '<br />' +
      // `e.lngLat` is the longitude, latitude geographical position of the event.
      JSON.stringify(e.lngLat.wrap());
      });
    
    