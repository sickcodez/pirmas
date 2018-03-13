$(document).ready(() => {
  var weatherApiKey = 'b517b6cbc138e320152018382e1d1fbf';
  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var ipApiUrl = 'https://ipapi.co/json/';

  var getWeatherData = (location) => {
    var weatherApi = weatherApiUrl + location + '&units=metric&appid=' + weatherApiKey;
    $.getJSON(weatherApi, (weatherData) => {
      $('#temp').append(`<h2>${weatherData.main.temp}°C</h2>`);
      $('#kritul').append(`<h2>${weatherData.weather[0].main}</h2>`);
      $('#loc').append(`<h3>${weatherData.sys.country}, ${weatherData.name}</h3>`);
      console.log('Got weather data!');
      if (weatherData.main.temp > 10) $('#temp').css('color', 'red');
        else $('#temp').css('color', 'blue');
    });
  }

  var getLocation = () => {
    $.getJSON(ipApiUrl, (ipData) => {
      getWeatherData(ipData.city);
      console.log('Got ip-api data!');
    });
  }

  getLocation();

});
