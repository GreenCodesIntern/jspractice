
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

document.getElementById("myBtn").onclick = displayDate;
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const error = document.getElementById('error');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            showError('Please enter a city name');
        }
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    function fetchWeather(city) {
        fetch(`${apiUrl}${city}&appid=${apiKey }&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                // Update DOM with weather data
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Weather: ${data.weather[0].description}`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                error.style.display = 'none';
            })
            .catch(err => {
                showError(err.message);
            });
    }

    function showError(message) {
        error.textContent = message;
        error.style.display = 'block';
        cityName.textContent = '';
        temperature.textContent = '';
        description.textContent = '';
        humidity.textContent = '';
        wind.textContent = '';
    }
    function changeText(id) {
        id.innerHTML = "Ooops!";
      }
});