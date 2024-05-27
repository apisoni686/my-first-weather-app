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

function formatDate() {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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

console.log(formatDate());

let date = document.querySelector("#displayed-date");
date.innerHTML = formatDate();
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchWeather);
