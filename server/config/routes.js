import dotenv from 'dotenv';
dotenv.config();
import request from 'request';
import rp from'request-promise';
import { trimSkyBody } from '../helpers/flightQuotesHelper.js';

module.exports = function (app, express) {

app.get('/api/flights', function(req, res) {
  const options = {
    url: "https://api.test.sabre.com/v2/shop/flights/fares?origin=JFK&departuredate=2017-04-01&returndate=2017-04-08&earliestdeparturedate=2017-04-01&latestdeparturedate=2017-04-01&lengthofstay=7&pointofsalecountry=US&topdestinations=12",
    headers: {
      Authorization: "Bearer "+process.env.SABRE_ACCESS_TOKEN,
      contentType: "application/json"
    }
  };

const cache = [];
const pix =[];
const pixObject = {};
  rp(options)
    .then((data) => {
      const flightResults = [];
      const sabreBody = JSON.parse(data);
      sabreBody.FareInfo.forEach(elem => {
        const obj = {}
        obj[elem.DestinationLocation] = {};
        flightResults.push(obj);
      })
      const flights = [];
      flightResults.forEach(elem => {
        const arrival = Object.keys(elem)[0];
        const options = {
          url: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/JFK/"+arrival+"/2017-04-01/2017-04-08?apiKey="+process.env.SKYSCANNER_API,
          headers: {
            contentType: "application/json"
          }
        }
        flights.push(rp(options));
      })
      return Promise.all(flights).then((promiseElem) => {
        promiseElem.forEach((eachQueue, index) => {
          const skyBody = JSON.parse(eachQueue);
          const flightObj = flightResults[index];
          const arrivalKeyName = Object.keys(flightObj)[0]
          let eachDestObj = flightObj[arrivalKeyName];
          let parsed = trimSkyBody(skyBody);
          if(Object.keys(parsed).length === 0){
          } else {
            flightObj[arrivalKeyName] = parsed;
          }
        })
        return flightResults;
      })
    })
    .catch((err) => {
      throw err;
      console.log("SkyScan API failed");
    })
    .then(function(flightResults) {
      const pixFlights = [];
      flightResults.forEach((elem, i) => {
        const arrivalKeyName = Object.keys(elem)[0];
        const destinationObj = flightResults[i][arrivalKeyName];

        if(destinationObj.location && cache.indexOf(destinationObj.location) === -1){
          const options = {
            url: "https://pixabay.com/api/?key="+process.env.PIXABAY_API+"&q="+destinationObj.location+"&image_type=photo",
            headers: {
              contentType: "application/json"
            }
          }
          pixFlights.push(rp(options));
        } else if (!destinationObj.location){
          destinationObj.location = null;
        }
        if(destinationObj.location){
          if(cache.indexOf(destinationObj.location) === -1){
            cache.push(destinationObj.location);
          }
        }
      })
      return Promise.all(pixFlights).then((values) => {
        // console.log(values)
        values.forEach((eachPic, index) => {
          const pixParsed = JSON.parse(eachPic);
          pix.push(pixParsed.hits[0].webformatURL);
          pixObject[cache[index]] = pixParsed.hits[0].webformatURL;
        })
        flightResults.forEach((flight, i) => {
          const arrivalKeyName = Object.keys(flight)[0];
          const destinationObj = flightResults[i][arrivalKeyName];
          if(cache.indexOf(destinationObj.location) !== -1) {
            destinationObj.imageUrl = pixObject[destinationObj.location];
            console.log(destinationObj)
          }
        })
        console.log()
        res.send(flightResults)
      })
    })
    .catch((err) => {
      throw err;
      console.log("pixabay API failed");
    })
  })
}
