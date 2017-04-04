const rp = require('request-promise');
const anywhereHelper = require('../helpers/anywhereHelper.js');

module.exports = {
  getAnywhere: (req, res) => {
    // console.log('QUERY', req.query);
    // const departDate = req.query.departDate.slice(0, 10);
    // const arrivalDate = req.query.arrivalDate.slice(0, 10);
    // const budget = req.query.Budget;
    const options = {
      url: `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/JFK/anywhere/2017-05-01/2017-05-08?apiKey=${process.env.SKYSCANNER_API}`,
      headers: {
        contentType: 'application/json',
      },
    };
    rp(options)
      .then((data) => {
        const parsedData = JSON.parse(data);
        const top = anywhereHelper.sortFunc(parsedData.Quotes);
        const filterTop = anywhereHelper.uniqueFunc(top);
        const top21 = filterTop.length >= 21 ? filterTop.slice(0, 21) : filterTop;
        const finalarray = [];
        top21.forEach(() => {
          finalarray.push({});
        });
        anywhereHelper.trimSkyBody(finalarray, top21, parsedData);
        return finalarray;
      })
      .catch((err) => {
        throw err;
      })
      .then((flightResults) => {
        const pixFlights = [];
        const cache = [];
        const pix = [];
        const pixObject = {};
        flightResults.forEach((elem) => {
          if (elem.city && cache.indexOf(elem.city) === -1) {
            const options2 = {
              url: `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=${elem.city}&image_type=photo&orientation=horizontal&category=travel`,
              headers: {
                contentType: 'application/json',
              },
            };
            pixFlights.push(rp(options2));
          }
          if (elem.city) {
            if (cache.indexOf(elem.city) === -1) {
              cache.push(elem.city);
            }
          }
        });
        return Promise.all(pixFlights).then((values) => {
          values.forEach((eachPic, index) => {
            const pixParsed = JSON.parse(eachPic);
            const topimages = [];
            pixParsed.hits.forEach((elem, i) => {
              if (i > 4) {
                return;
              }
              topimages.push(elem.webformatURL);
            });
            pix.push(topimages);
            pixObject[cache[index]] = topimages;
          });
          flightResults.forEach((elem) => {
            const flight = Object.assign(elem);
            if (cache.indexOf(flight.city) !== -1) {
              flight.imageUrl = pixObject[flight.city];
            }
          });

          res.send(flightResults);
        });
      })
      .catch((err) => {
        throw err;
      });
  },
};
