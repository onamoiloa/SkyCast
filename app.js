function refreshWeather(response) {
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = response.data.temperature.current;

cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);

}



function searchCity(city) {
    let apiKey = "dc010eb1e73f4228b30225823252501";
    let apiUrl = 'http://api.weatherapi.com/v1/current.json?key=${dc010eb1e73f4228b30225823252501}&q=&{cities}&aqi=no';
     axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   let cityElement = document.querySelector("#city");
 

   cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity