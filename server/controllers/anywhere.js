const rp = require('request-promise');
const anywhereHelper = require('../helpers/anywhereHelper.js');

module.exports = {
  getAnywhere: (req, res) => {
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
        res.send(finalarray);
      });
  },
};
