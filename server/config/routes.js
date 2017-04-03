const flightController = require('../controllers/flights.js');
require('dotenv').config();

module.exports = (app, express) => {
  app.get('/api/flights', flightController.getFlights);
};
