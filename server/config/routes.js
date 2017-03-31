const flightController = require('../controllers/flights.js');
require('dotenv').config();

module.exports = (app) => {
  app.get('/api/flights', flightController.getFlights);
};
