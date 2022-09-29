// fake JSON call--usually we would get this data from the server,
// but right now we are doing it all client side
function getJSONMarkers() {

	var locations = [
    {
      "name": "King's College",
      "location": [41.2503, -75.8794],
    },
    {
      "name": "Baghdad",
      "location": [33.3152, 44.3661],
    },
    {
      "name": "Gta 5 map",
      "location": [34.0522, 118.2437],
    },
    {
      "name": "Andrew Tate Lives Here",
      "location": [45.9432, 24.9668],
    },
    {
      "name": "Notre Dame University",
      "location": [41.7056, 86.2353],
    }
	]

	// return this as a JSON string that needs to be parsed
  return JSON.stringify(locations);
}

// Load the map
function loadMap() {
  console.log("map loading");

  // change the name in the function to whatever you called your div
  var map = L.map('map').setView({lon: 0, lat: 0}, 2);

  // add the OpenStreetMap tiles
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 18,
   attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
 }).addTo(map);

 // show the scale bar on the lower left corner
 L.control.scale({imperial: true, metric: true}).addTo(map);

 // draw markers on the map
 drawMarkers(map);
}


// Parse the json object and draw the markers on the map
function drawMarkers(map) {

 // Load JSON Data
 const markers = JSON.parse(getJSONMarkers()); // call getJSONMarkers, parse it, and store the
 											 // resulting object in markers


  // Loop through JSON structure to get locations
  for(marker of markers) {
    latitude = marker.location[0]; // replace null with the latitude of your location
    longitude = marker.location[1]; // replace null with the longitude of your location
    message = marker.name; // replace this with the text about your location

    L.marker({lat: latitude, lon: longitude}).bindPopup(message).addTo(map);
  }
}
