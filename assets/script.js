var currentCity = ""; 
var cityName = "";
// var apiKey = "5672fd5fd83f3df76496f1b75a62addb";
var fetchButton= document.getElementById("#fetchButton")

function getCity(){

  var cityName= document.getElementById("searchInput").value
console.log("searchInput");

  var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=5672fd5fd83f3df76496f1b75a62addb"
  
  var objLAT
fetch(geoURL)
  .then(responseLat => responseLat.json())
  .then(data => objLAT = data[0].lat)
  .then(() => console.log(objLAT));


  var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=5672fd5fd83f3df76496f1b75a62addb"

  var objLON

  fetch(geoURL)
    .then(response => response.json())
    .then(data => objLON = data[0].lon)
  .then(() => console.log(objLON));

var lonParsed = Number(objLON);
console.log(lonParsed);


var weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + objLON + "&lon=" + (objLAT) + "&exclude=&appid=5672fd5fd83f3df76496f1b75a62addb" 


fetch(weatherAPI)
.then(response => response.json())
.then(data => console.log(data))
;
};




// fetchButton.addEventListener('click', getCity());