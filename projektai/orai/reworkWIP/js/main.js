$(document).ready(() => {
  var weatherApiKey = 'b517b6cbc138e320152018382e1d1fbf';
  var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  var ipApiUrl = 'https://ipapi.co/json/';

  var getWeatherData = (location) => {
    var weatherApi = weatherApiUrl + location + '&units=metric&appid=' + weatherApiKey;
    $.getJSON(weatherApi, (weatherData) => {
      $('#temp').append(`${weatherData.main.temp}\u2103`);
      $('#cond').addClass(`wi-owm-${weatherData.weather[0].id}`);
    });
  }

  var getLocation = () => {
    $.getJSON(ipApiUrl, (ipData) => {
      getWeatherData(ipData.city);
      $('#location').append(`${ipData.city}, ${ipData.country}`);
    });
  }

  getLocation();
});
