document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  if (city === "") {
    weatherInfo.innerHTML = <p>Please enter a city name!</p>;
    return;
  }

  weatherInfo.innerHTML = <p>Loading weather for ${city}...</p>;

  // Simulate fetching weather data
  setTimeout(() => {
    const temp = Math.floor(Math.random() * 30) + 15; // Random temperature
    const condition = "Sunny"; // Simulated condition
    weatherInfo.innerHTML = <p>${city}: ${temp}°C, ${condition}</p>;
  }, 1000);
});