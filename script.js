async function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!location) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const apiKey = "244e26c3de14409aae382033252106";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    const tempC = data.current.temp_c;
    const condition = data.current.condition.text;

    resultDiv.innerHTML = `The temperature in <strong>${data.location.name}</strong> is <strong>${tempC}°C</strong> with <strong>${condition}</strong>.`;
  } catch (error) {
    resultDiv.innerHTML = `Error: ${error.message}`;
  }
}
