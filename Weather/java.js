const apiKey = "6f61a0a9c811747443d0c35590a46065"; 

// Function to fetch weather data based on city name
function getWeatherByCity() {
    const city = document.getElementById("city-input").value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetchWeather(apiUrl);
}

// Function to fetch weather using user's location
function fetchUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            fetchWeather(apiUrl);
        }, error => {
            console.error("Error getting location:", error);
            alert("Unable to access location. Please enter a city manually.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Function to fetch weather data from API and update the UI
function fetchWeather(apiUrl) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
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

// Fetch Delhi weather on page load
document.addEventListener("DOMContentLoaded", () => {
    const defaultCity = "Delhi";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    fetchWeather(apiUrl);
});
