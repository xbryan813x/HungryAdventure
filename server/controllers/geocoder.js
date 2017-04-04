const NodeGeocoder = require('node-geocoder');

module.exports = {
  location(req, res) {
    const location = req.query.location;
    const options = {
      provider: 'google',
      httpAdapter: 'https',
      api_key: 'AIzaSyBQeKRk8R_UBixWXGssKpGc6zc3-gmxRa0',
    }

    const geocoder = NodeGeocoder(options);

    geocoder.geocode(location)
      .then(result => res.send(result))
      .catch(err => res.send(err));
  }
}