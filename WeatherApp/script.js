import WEATHER_API_KEY from "./weatherApiKey.js";

const cityEl = document.querySelector(".cityName");
const iconEl = document.querySelector(".weatherIcon");
const descriptionEl = document.querySelector(".description");
const minTempEl = document.querySelector(".minValue");
const maxTempEl = document.querySelector(".maxValue");
const humidityEl = document.querySelector(".humidityValue");
const speedEl = document.querySelector(".windValue");

const cityInput = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");

const apiKey = WEATHER_API_KEY;
let weather = {
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((err) => console.log("no data found"));
  },
  displayWeather: function (data) {
    let weatherData = {
      name: data.name,
      icon: data.weather[0].icon,
      description: data.weather[0].description,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      speed: data.wind.speed,
    };

    cityEl.textContent = weatherData.name;
    iconEl.src = `https://openweathermap.org/img/wn/${weatherData.icon}.png`;
    descriptionEl.textContent = weatherData.description;
    minTempEl.textContent = `${weatherData.tempMin}℃`;
    maxTempEl.textContent = `${weatherData.tempMax}℃`;
    humidityEl.textContent = `${weatherData.humidity}%`;
    speedEl.textContent = `${weatherData.speed} km/h`;
  },
  search: function () {
    // this.changeBackground();
    const cityName = cityInput.value;
    weather.fetchWeather(cityName);
    cityInput.value = "";
  },
};

searchBtn.addEventListener("click", function (e) {
  weather.search();
});
cityInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    weather.search();
  }
});
