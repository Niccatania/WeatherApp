var currentCity = ""; 
var cityName = "";
// var apiKey = "5672fd5fd83f3df76496f1b75a62addb";
var fetchButton= document.getElementById("#fetchButton");
// var Temperature = document.getElementById("temp");



function getCity(){

  var cityName= document.getElementById("searchInput").value

  var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=5672fd5fd83f3df76496f1b75a62addb"
  
  var objLATLON
fetch(geoURL)
  .then(response => response.json())
  .then(data => objLATLON = {
    lat: data[0].lat,
    lon: data[0].lon,
    name: data[0].name})
 .then(() => bossFunction())
 

 function bossFunction(){
 localStorage.setItem("pullLat", objLATLON.lat );
 localStorage.setItem("pullLon", objLATLON.lon); 
 localStorage.setItem("Name", objLATLON.name); 

 getWeatherData();
}






var getWeatherData = function() {
  var cityLATLON = {
      lat: localStorage.getItem("pullLat") ,
      lon: localStorage.getItem("pullLon"),
      nameIt: localStorage.getItem("Name"),
  }
  
  console.log(cityLATLON.lat);
    

var weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" +cityLATLON.lat+ "&lon=" +cityLATLON.lon+ "&exclude=&units=imperial&appid=5672fd5fd83f3df76496f1b75a62addb" 



// var objWeather
fetch(weatherAPI)
  .then(function (response){
    return response.json();
  })

  .then(function (data) {
    console.log(data);
var temp = data.current.temp
var wind = data.current.wind_speed
var humidity = data.current.humidity
var uvi = data.current.uvi
console.log(temp);







    document.getElementById("temp").textContent = temp;
    document.getElementById("wind").textContent = wind;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("uvi").textContent = uvi;
    document.getElementById("nameIt").textContent = cityLATLON.nameIt;
