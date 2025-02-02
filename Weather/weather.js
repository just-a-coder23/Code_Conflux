const apiKey = "6f61a0a9c811747443d0c35590a46065";

// Fetch weather by city name
function getWeatherByCity() {
    const city = document.getElementById("city-input").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetchWeather(weatherApiUrl);
    fetchForecast(forecastApiUrl);
}

// Fetch current weather data
function fetchWeather(apiUrl) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city-name").innerText = `City: ${data.name}`;
            document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("weather-description").innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("City not found. Please enter a valid city name.");
        });
}

// Fetch 5-day weather forecast
function fetchForecast(apiUrl) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById("forecast-container");
            forecastContainer.innerHTML = ""; // Clear previous data

            const dailyData = {};
            
            // Filter forecast data for one entry per day (12:00 PM data)
            data.list.forEach(entry => {
                const date = entry.dt_txt.split(" ")[0];
                if (!dailyData[date] && entry.dt_txt.includes("12:00:00")) {
                    dailyData[date] = entry;
                }
            });

            // Display forecast
            Object.keys(dailyData).forEach(date => {
                const forecast = dailyData[date];
                const temp = forecast.main.temp;
                const description = forecast.weather[0].description;
                const icon = forecast.weather[0].icon;

                const forecastItem = document.createElement("div");
                forecastItem.classList.add("forecast-item");
                forecastItem.innerHTML = `
                    <p>${date}</p>
                    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">
                    <p>${temp}°C</p>
                    <p>${description}</p>
                `;

                forecastContainer.appendChild(forecastItem);
            });
        })
        .catch(error => console.error("Error fetching forecast data:", error));
}

// Back to Portfolio Page
function goBack() {
      window.location.href = "../home_page.html";
}
