const apiKey = "c09e36fe521f55ff7cca1274e690dda9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector(".temp");
const humidity  = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404) {
        error.style.display = "block";
        weather.style.display = "none";
    } else {
        let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "clear.png";
    } else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "rain.png";
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if(data.weather[0].main === "Haze") {
        weatherIcon.src = "mist.png";
    }

    weather.style.display = "block"
    error.style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
}) 