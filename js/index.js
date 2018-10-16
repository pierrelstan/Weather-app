
$(document).ready(function() {
 
  // call for current  location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON(
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
          position.coords.latitude +
          " &lon=" +
          position.coords.longitude + "&units=metric" + "&units=imperial",
        function(json) {
         // console.log(json)
          $("#location").html(json.name + "," + json.sys.country);
          $("#description").html(json.weather[0].description);
          $(".weatherIcon").html(
            "<img class='largeur' src =" +
              json.weather[0].icon +
              " alt=" +
              json.weather.description +
              ">"
          );
        }
      ).done(function(data) {
         console.log(data)
       //convert temp to  Fahrenheit
      function convertToCelsius(celsius){
      fah = celsius * 1.8 + 32;
      return fah;
           }
    var q = convertToCelsius(data.main.temp)
    console.log(q)
  $('.faheinat').html(q + "&#8457")

        function convertToCelsius(celsius){
      fah = celsius * 1.8 + 32;
      return fah.toFixed(2);
           }
    var cel = convertToCelsius(data.main.temp)
   // convert Fahrenheit to celsius
     function convertToFahrenheit(Fahrenheit){
      celsius = (Fahrenheit -32) /1.8;
      return celsius.toFixed(2);
    }
   var b = convertToFahrenheit(cel)
 
   // create the toggle button
   $( "button" ).click(function() {
  $( "button" ).toggle()
});
     $('#celFah').html(b +"&#8451")     
        $(".faheinat").html(q + "&#8457");
       
     
      })
    });
  }

});