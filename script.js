async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'abfdf94d43682324940ffc4180ecf35d';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  const result = document.getElementById('result');
  if (data.cod === 200) {
    result.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
    `;
  } else {
    result.innerHTML = `<p style="color:red;">City not found!</p>`;
  }
}
