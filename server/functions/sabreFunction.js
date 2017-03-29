var sabre = require('./sabre.json');
toFrontObj = {};
sabre.FareInfo.forEach(elem => {
  toFrontObj[elem.DestinationLocation] = {};
})

module.exports = toFrontObj;
