var currentCity = ""; 
var cityName = "";
var fetchButton= document.getElementById("#fetchButton");


function getCity(){

  var cityName= document.getElementById("searchInput").value

  var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=5672fd5fd83f3df76496f1b75a62addb"
  
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
// var iconL = data.current.weather[0].icon
console.log(temp);







    document.getElementById("temp").textContent = temp;
    document.getElementById("wind").textContent = wind;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("uvi").textContent = uvi;
    document.getElementById("nameIt").textContent = cityLATLON.nameIt;
    // var newIMG = document.createElement("img");
    // // and give it some content
  
  
    // // add the text node to the newly created div
    // newIMG.appendChild(iconL);
  
    // // add the newly created element and its content into the DOM
    // var currentDiv = document.getElementById("iconL");
    // document.body.insertBefore(newIMG, currentDiv);
  
   
  })
  var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" +cityLATLON.lat+ "&lon=" +cityLATLON.lon+ "&exclude=&units=imperial&appid=5672fd5fd83f3df76496f1b75a62addb";

  fetch(requestUrl)
    .then(function (response) {
    console.log(response);
      return response.json()
    
    })
    .then(function (data) {
      for (var i = 0; i < 5; i++) {
        console.log(data.daily[i].temp.day);
        console.log(data.daily[i].wind_speed);
        console.log(data.daily[i].humidity);
        
      }
    });}}
    
   
  
      

