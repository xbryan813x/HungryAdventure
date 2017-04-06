const rp = require('request-promise');

module.exports = {
  getEvents(req, res) {
    console.log('i got here yooooooo!')

    const where = req.query.location || 'new york'
    console.log(where)

    const options = {
      uri: `https://api.yelp.com/v3/businesses/search?term=events&location=${where}`,
      headers: {
          'Authorization': process.env.YELP
      },
      json: true
   };

   rp(options)
    .then(response => res.send(response))
    .catch(err => res.send(err));
  }
}