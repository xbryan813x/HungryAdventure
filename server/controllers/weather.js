const rp = require('request-promise');

module.exports = {
  getWeather: (req, res) => {
    console.log('in here!');
    const latitude = req.query.latitude || 43.644;
    const longitude = req.query.longitude || -79.391;
    const time = '2017-05-05T16:00:00';
    const date = time.slice(0, 10);
    const timeofDay = time.slice(10);

    const weatherObj = {};
    const options = {
      url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${latitude},${longitude},${time}`,
      headers: {
        contentType: 'application/json',
      },
    };
    rp(options)
    .then((result) => {
      const parsedResult = JSON.parse(result);
      weatherObj.highTemp = parsedResult.daily.data[0].temperatureMax;
      weatherObj.lowTemp = parsedResult.daily.data[0].temperatureMin;
      weatherObj.summary = parsedResult.daily.data[0].summary;
      weatherObj.date = date;
      weatherObj.timeofDay = timeofDay;
      res.send(weatherObj);
    }).catch((err) => { throw err; });
  },
};
