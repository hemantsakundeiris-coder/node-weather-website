const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=006b7dd69f1beacfdab00e1f6e3801fc&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out!"
      );
    }
  });
};

module.exports = forecast;
