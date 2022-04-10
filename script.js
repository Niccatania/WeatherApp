var currentCity = ""; 
var cityName = "";
var fetchButton= document.getElementById("#fetchButton");
var dateTEST =document.getElementById("dateTest")
var uviColor = document.getElementById("uviColor")
var searchedCitiesEL = document.getElementById("searchedCitiesEL")
var showName;

// This function gets search input data from the cityName element in the HTML, it then inputs that city into our geocoding API, which returns our latitude and longitude needed for the One Call API

function getCity(){

  var cityName= document.getElementById("searchInput").value
 
  var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=5672fd5fd83f3df76496f1b75a62addb"
  
  // Here we use our fetch to call the API, and then get the data out of our console. 
  
  var objLATLON
fetch(geoURL)
  .then(response => response.json())
  .then(data => objLATLON = {
    lat: data[0].lat,
    lon: data[0].lon,
    name: data[0].name})
 .then(() => bossFunction())

 
// This function saves our LAT/LON into local storage, as well as our city name
 function bossFunction(){
   showName = objLATLON.name;
 localStorage.setItem("pullLat", objLATLON.lat );
 localStorage.setItem("pullLon", objLATLON.lon); 

 let localStorageContent = JSON.parse(localStorage.getItem("nameIt")) || [];

 localStorageContent.push(objLATLON.name)


 localStorage.setItem("nameIt", JSON.stringify(localStorageContent)); 

 getWeatherData();
}

  

// This function inputs our LAT/LON into the one call API
var getWeatherData = function() {
  var cityLATLON = {
      lat: localStorage.getItem("pullLat") ,
      lon: localStorage.getItem("pullLon"),
      nameIt: localStorage.getItem("name"),
  }




  // document.getElementById("cityDisplay").textContent = cityLATLON.nameIt;
  
  console.log(cityLATLON.lat);
    

var weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" +cityLATLON.lat+ "&lon=" +cityLATLON.lon+ "&exclude=&units=imperial&appid=5672fd5fd83f3df76496f1b75a62addb" 



// var objWeather
fetch(weatherAPI)
  .then(function (response){
    return response.json();
  })

  .then(function (data) {
    for( var i=1; i<6 ;i++ ){
      var newDate = moment().add(i, "days").format("MMMM Do YYYY");
      Render5day(data.daily[i], newDate)
    }
    console.log(data);
var temp = data.current.temp
var wind = data.current.wind_speed
var humidity = data.current.humidity
var uvi = data.current.uvi

var iconL = data.current.weather[0].icon
console.log(temp);
console.log(iconL);



for( var i=1; i<6 ;i++ ){
var newDate = moment().add(i, "days").format("MMMM Do YYYY")
console.log(newDate);}




document.getElementById("cityApp").textContent=cityLATLON.nameIt;




console.log(moment());

    document.getElementById("currentDate").textContent = showName + ", " + moment().format("MMMM Do YYYY");
  
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

function Render5day(daily, currentDay){

  var temp = daily.temp.day
  var wind =daily.wind_speed
  var humidity=daily.humidity
  


  var dateEL=document.createElement("p")
  var tempEL=document.createElement("p")
  var windEL=document.createElement("p")
  var humidityEL=document.createElement("p")


  var forecastCard = document.createElement("div")
  forecastCard.className = "Fiveday";
  var forecastDiv= document.querySelector("#forecastArea")
 
forecastCard.append(dateEL, tempEL, windEL, humidityEL);

forecastDiv.append(forecastCard)
dateEL.textContent= currentDay
tempEL.textContent="temp:" + temp  
windEL.textContent="wind" + wind  
humidityEL.textContent="humidity:"+ humidity  
}
  })

}}



