const weather= document.querySelector(".weather");
const search= document.querySelector("#search_input");
const API_KEY="bd7c6540f3f8563a36e84c53b8919455";

function searchWeather (){
    let settings = {
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${API_KEY}&units=metric`,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) { //api call
        weather.innerHTML = ` <img src="./images/rain.png" class="weather-icon">
        <h1 class="temp">${response.main.temp}C</h1>
        <h2 class="city">${response.name}</h2>
        <div class="details">
            <div class="col">
                <img src="./images/humidity.png">
                <div>
                    <p class="humidity">${response.main.humidity}%</p>
                    <p>humidity</p>
                </div>
            </div>
            <div class="col">
                <img src="./images/wind.png">
                <div>
                    <p class="wind">${response.wind.speed}km/hr</p>
                    <p>wind speed</p>
                </div>
            </div>`
    });
}
