const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.positionstack.com/v1/forward?access_key=660f7bb437af52c39d9cb6e72dc89a3d&query=1600%20" +
    address;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location data", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].name,
      });
    }
  });
};

module.exports = geocode;
