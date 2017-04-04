const flightController = require('../controllers/flights.js');
const anywhereController = require('../controllers/anywhere.js');

module.exports = (app, express) => {
  app.get('/api/flights', flightController.getFlights);
  app.get('/api/anywhere', anywhereController.getAnywhere);
};
