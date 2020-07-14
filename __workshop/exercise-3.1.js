// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => {
      const data = JSON.parse(response);
      return data;
    })
    .then((data) => {
      const newPositions = {
        lat: data.iss_position.latitude,
        lng: data.iss_position.longitude,
      };
      return newPositions;
    });
};

getIssPosition().then((result) => console.log(result));
