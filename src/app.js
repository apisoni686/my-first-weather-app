function updateWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#displayed-temp");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let city = document.querySelector("#displayed-city");
  city.innerHTML = response.data.city;
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

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchWeather);
