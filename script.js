const apiKey = "997e4b3212f09748e142792819230fbd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const apiUrlMetric = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const fahrenheit = "°F"
const celsius = "°C";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const mearsurement = document.querySelector(".temp");
var isMetric = false;

async function checkWeather(city, boolean) {
    var response;
    if (boolean == true) {
        var response = await fetch(apiUrlMetric + city +`&appid=${apiKey}`);
    } else {
        var response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    }
    if (response.status == 404) {
        document.querySelector(".error").style.cssText = "display: block;";
        document.querySelector(".weather").style.cssText = "display: none;";
    } else {
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        if (boolean == true) {
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + celsius;
        } else {
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + fahrenheit;
        }
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        if (boolean == true) {
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        } else {
            document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
        }
        
        if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } 
        else if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
    
        document.querySelector(".weather").style.cssText = "display: block;";
        document.querySelector(".error").style.cssText = "display: ;";
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value, isMetric);
})

mearsurement.addEventListener("click", ()=> {
    isMetric = !isMetric;
    checkWeather(searchBox.value, isMetric);
})