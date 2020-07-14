// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();
const api_key = process.env.OPENCAGE_API_KEY;

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: api_key,
    q: address,
  };

  return opencage.geocode(requestObj).then((data) => {
    data = data.results[0].geometry;
    return data;
  });
};

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

getPositionFromAddress(
  "11 Villeneuve E, Montréal, QC H2T 1K7"
).then((response) => console.log(response));
