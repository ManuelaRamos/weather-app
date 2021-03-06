import ".src/styles.css";

function displayWeather(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function pickCity(event) {
  event.preventDefault();
  let apiKey = "0cd16c5610dcc1e0cd19a7e3888cdfa4";
  let city = document.querySelector("#info-form").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let now = new Date();

let date = now.getDate();

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
  "December"
];

let currentMonth = months[now.getMonth()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();

let h2 = document.querySelector("h2");
h2.innerHTML = `${currentMonth} ${date}`;

let h3 = document.querySelector("h3");
h3.innerHTML = `${currentHour}:${currentMinute}`;

let newCity = document.querySelector("#search-form");
newCity.addEventListener("submit", pickCity);
