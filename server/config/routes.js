const flightController = require('../controllers/flights.js');
const anywhereController = require('../controllers/anywhere.js');
const geocoderController = require('../controllers/geocoder.js');
const hotelController = require('../controllers/hotels.js');
const getWeatherController = require('../controllers/weather.js');
const yelp = require('../controllers/yelp.js')

module.exports = (app, express) => {
  app.get('/api/flights', flightController.getFlights);
  app.get('/api/anywhere', anywhereController.getAnywhereDummy);
  app.get('/api/geocoder', geocoderController.location);
  app.get('/api/hotels', hotelController.getHotelsDummy);
  app.get('/api/weather', getWeatherController.getWeather);
  app.get('/api/yelp', yelp.getEvents);
};
