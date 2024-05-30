function updateWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#displayed-temp");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}°F`;
  let city = document.querySelector("#displayed-city");
  city.innerHTML = response.data.city;
  let wind = document.querySelector("#displayed-windspeed");
  let displayedWindspeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${displayedWindspeed}mph`;
  let humidity = document.querySelector("#displayed-humidity");
  let currentHumidity = response.data.temperature.humidity;
  humidity.innerHTML = `Humidity: ${currentHumidity}%`;
  let icon = document.querySelector("#weather-icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon">`;
}

function searchCity(city) {
  let apiKey = "df01d4d69fab3f5otaf6694bc9e08ea8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeather);
}

function searchWeather(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");

  searchCity(input.value);
}

function formatDate() {
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentDate = new Date();
  let dayOfWeek = daysOfWeek[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let dayOfMonth = currentDate.getDate();

  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth} ${hour}:${minute}`;

  return formattedDate;
}

function displayForecast() {
  let days = [`Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="row">
        <div class="col-2">
          <div class=weather-forecast-date>${day} </div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png"
            alt=""
            width="50"
            class="image"
          />
       <div class="temp-range">
          <span class ="max">18</span>   <span class ="min">12</span>
        </div>
        </div>`;
  });

  let forecast = document.querySelector("#displayed-forecast");
  forecast.innerHTML = forecastHtml;
}
let date = document.querySelector("#displayed-date");
date.innerHTML = `Last updated: ${formatDate()}`;
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchWeather);

displayForecast();
