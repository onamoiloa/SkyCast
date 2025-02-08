function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
        let cityElement = document.querySelector("#city");
        let descriptionElement = document.querySelector("#description");
        let humidityElement = document.querySelector("#humidity");
        let windSpeedElenent = document.querySelector("#wind-speed");
        let timeElement = document.querySelector("#time");
        let date = new Date(response.data.time * 1000);

console.log(response.data);

     cityElement.innerHTML = response.data.city;
     
     timeElement.innerHTML = formatDate(date);
        descriptionElement.innerHTML= response.data.condition.description;
        humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
        windSpeedElenent.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
}
 
function formatDate(date) {
    let day = date.getDay();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let days = [
            "Monday", 
            "Tuesday",
            "Wednesday",
             "Thursday",
              "Friday", 
              "Saturday", 
              "Sunday"
            ];
    let date = days[date.getDay()];

        return`${day} ${hours}:${minutes}';
}

function searchCity(city) {
    let apiKey = "bb97c23fo71t6ba9f57527004105a77b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=bb97c23fo71t6ba9f57527004105a77b&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElement =  document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit); 

searchCity("Paris"); 