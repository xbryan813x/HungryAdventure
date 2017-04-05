const flightController = require('../controllers/flights.js');
const anywhereController = require('../controllers/anywhere.js');
const geocoderController = require('../controllers/geocoder.js');
const hotelController = require('../controllers/hotels.js');
const getWeatherController = require('../controllers/weather.js');

module.exports = (app, express) => {
  app.get('/api/flights', flightController.getFlights);
  app.get('/api/anywhere', anywhereController.getAnywhere);
  app.get('/api/geocoder', geocoderController.location);
  app.get('/api/hotels', hotelController.getHotels);
  app.get('/api/weather', getWeatherController.getWeather);
};
