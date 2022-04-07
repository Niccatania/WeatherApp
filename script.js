var currentCity = ""; 
var cityName = "";
var fetchButton= document.getElementById("#fetchButton");
var dateTEST =document.getElementById("dateTest")
var uviColor = document.getElementById("uviColor")
var searchedCitiesEL = document.getElementById("searchedCitiesEL")



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


  

var weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" +cityLATLON.lat+ "&lon=" +cityLATLON.lon+ "&exclude=&units=imperial&appid=5672fd5fd83f3df76496f1b75a62addb" 



// var objWeather
fetch(weatherAPI)
  .then(function (response){
    return response.json();
  })

  .then(function (data) {
    for( var i=1; i<6 ;i++ ){
      Render5day(data.daily[i])
    }
    console.log(data);
var temp = data.current.temp
var wind = data.current.wind_speed
var humidity = data.current.humidity
var uvi = data.current.uvi
var now = moment().format("MMMM Do YYYY");
var iconL = data.current.weather[0].icon
console.log(temp);
console.log(iconL);




console.log(moment());

    document.getElementById("currentDate").textContent = now;
  
    document.getElementById("temp").textContent = temp;
    document.getElementById("wind").textContent = wind;
    document.getElementById("humidity").textContent = humidity;
  
    document.getElementById("nameIt").textContent = cityLATLON.nameIt;



    uviColor.textContent = uvi;

    if(data.current.uvi<3){
      uviColor.classList.add("greenUvi");
  }
  else if(data.current.uvi<6) {
    uviColor.classList.add("yellowUvi");
  }
  else {
    uviColor.classList.add("redUvi");
  }

function Render5day(daily){
  var temp = daily.temp.day
  var wind =daily.wind_speed
  var humidity=daily.humidity
  


  var dateEl=document.createElement("p")
  var tempEL=document.createElement("p")
  var windEL=document.createElement("p")
  var humidityEL=document.createElement("p")


  var forecastCard = document.createElement("div")
  forecastCard.className = "Fiveday";
  var forecastDiv= document.querySelector("#forecastArea")
 
forecastCard.append(tempEL, windEL, humidityEL);

forecastDiv.append(forecastCard)
tempEL.textContent="temp:" + temp  
windEL.textContent="wind" +  wind  
humidityEL.textContent="humidity:"+  humidity  
}

   
  
   
  })

}}
;
      


