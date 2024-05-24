function searchWeather(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let city = document.querySelector("#displayed-city");
  city.innerHTML = input.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchWeather);
