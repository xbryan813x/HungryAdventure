const rp = require('request-promise');
const hotelsHelper = require('../helpers/hotelsHelper.js');

module.exports = {
  getHotels: (req, res) => {
    const options = {
      url: `https://api.airbnb.com/v2/search_results?client_id=${process.env.AIRBNB_CLIENT_ID}&locale=en-US&currency=USD&_format=for_search_results_with_minimal_pricing&_limit=10&_offset=0&fetch_facets=true&guests=1&ib=false&ib_add_photo_flow=true&location=Toronto&price_max=500&min_bathrooms=0&min_bedrooms=0&min_beds=1&min_num_pic_urls=5&sort=1`,
      headers: {
        Accept: 'application/json',
      },
    };
    rp(options)
    .then((data) => {
      const parsedData = JSON.parse(data);
      res.send(parsedData); // equal to dummy data
    });
  },
};
