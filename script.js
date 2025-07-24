async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '6f35c0cfe46a003e712c3c122cae9eb4';  // Your API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Check if input is empty
  if (city === "") {
    document.getElementById('weatherResult').innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    // If response is OK (code 200)
    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = "❗ City not found. Please try again.";
    }

  } catch (error) {
    document.getElementById('weatherResult').innerHTML = "❗ Error fetching data. Please try again later.";
    console.error('Fetch error:', error);
  }
}

