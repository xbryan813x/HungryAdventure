import dotenv from 'dotenv';
dotenv.config();
import request from 'request';
import rp from'request-promise';

module.exports = function (app, express) {

app.get('/api/flights', function(req, res) {
  const options = {
    url: "https://api.test.sabre.com/v2/shop/flights/fares?origin=JFK&departuredate=2017-04-01&returndate=2017-04-08&earliestdeparturedate=2017-04-01&latestdeparturedate=2017-04-01&lengthofstay=7&pointofsalecountry=US&topdestinations=12",
    headers: {
      Authorization: "Bearer "+process.env.SABRE_ACCESS_TOKEN,
      contentType: "application/json"
    }
  };

  rp(options)
    .then((data) => {
      const frontArray = [];
      const sabreBody = JSON.parse(data);
      sabreBody.FareInfo.forEach(elem => {
        const obj = {}
        obj[elem.DestinationLocation] = {};
        frontArray.push(obj);
      })
      const flights = [];
      frontArray.forEach(elem => {
        const arrival = Object.keys(elem)[0];
        const options = {
          url: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/JFK/"+arrival+"/2017-04-01/2017-04-08?apiKey="+process.env.SKYSCANNER_API,
          headers: {
            contentType: "application/json"
          }
        }
        flights.push(rp(options));
      })

      Promise.all(flights).then((skyBody) => {
        // console.log(skyBody)
      })
      // console.log("flights", frontArray)
      // frontArray.forEach((elem, index) => {
      //
      //   const arrival = Object.keys(elem)[0];
      //   let eachDestObj = elem[arrival];
      //
      //     // const skyBody = flights[index];
      //     // module.exports = {
      //     //   skyBody,
      //     //   elem,
      //     //   arrival,
      //     // };
      //     // elem[arrival] =  require('../helpers/flightQuotesHelper.js');
      //     // console.log("SKY", skyBody)
      //     // console.log(arrival, eachDestObj)
      //
      // })


    })
    .then(function(data) {
      const options = {
        url: "https://pixabay.com/api/?key="+process.env.PIXABAY_API+"&q=toronto&image_type=photo",
        headers: {
          contentType: "application/json"
        }
      }
      request(options, function(error, response, body){
        if(error) throw error;
        const pixaBody = JSON.parse(body);
        // console.log("image body",pixaBody.hits[0].webformatURL)
        res.send()
      })
    })
})

}
