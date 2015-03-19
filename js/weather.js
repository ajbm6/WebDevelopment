$(document).ready(function () {
    $.simpleWeather({
      location: 'New York, NY',
      woeid: '',
      unit: 'f',
      success: function(weather) {
        current = weather.temp+'° <i class="icon-'+weather.code+'"></i>';
        hiTemp = 'Hi '+weather.high+'°';
        wind = weather.wind.speed+' '+weather.units.speed;

        $("#weather-widget-ny #current").html(current);
        $("#weather-widget-ny #hiTemp").html(hiTemp);
        $("#weather-widget-ny #wind").html(wind);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });

    $.simpleWeather({
      location: 'Los Angeles, CA',
      woeid: '',
      unit: 'f',
      success: function(weather) {
        current = weather.temp+'° <i class="icon-'+weather.code+'"></i>';
        hiTemp = 'Hi '+weather.high+'°';
        wind = weather.wind.speed+' '+weather.units.speed;

        $("#weather-widget-la #current").html(current);
        $("#weather-widget-la #hiTemp").html(hiTemp);
        $("#weather-widget-la #wind").html(wind);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });

    $.simpleWeather({
      location: 'Death Valley, AZ',
      woeid: '',
      unit: 'f',
      success: function(weather) {
        current = weather.temp+'° <i class="icon-'+weather.code+'"></i>';
        hiTemp = 'Hi '+weather.high+'°';
        wind = weather.wind.speed+' '+weather.units.speed;

        $("#weather-widget-dv #current").html(current);
        $("#weather-widget-dv #hiTemp").html(hiTemp);
        $("#weather-widget-dv #wind").html(wind);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
});