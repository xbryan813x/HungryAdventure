
module.exports = {
  trimSkyBody: function(skyBody){
    const trimResults = {};
    let price = 0;
    skyBody.Quotes.forEach((skyElem) => {
      if(skyElem.InboundLeg && skyElem.OutboundLeg && skyElem.MinPrice > price){
        trimResults.price = skyElem.MinPrice;
        trimResults.carrierId = skyElem.OutboundLeg.CarrierIds[0];
        trimResults.originId = skyElem.OutboundLeg.OriginId;
        trimResults.destinationId = skyElem.InboundLeg.OriginId;
        trimResults.arrivalDate = skyElem.OutboundLeg.DepartureDate;
        trimResults.departureDate = skyElem.InboundLeg.DepartureDate;
        price = skyElem.MinPrice;
      }
    })
    var getOGID = function(id){
      skyBody.Places.forEach((elem) => {
        if(elem.PlaceId === id){
          delete(trimResults.originId)
          trimResults.originTerminal = elem.IataCode;
        }
      })
    }
    var getDesID = function(id){
      skyBody.Places.forEach((elem) => {
        if(elem.PlaceId === id){
          delete(trimResults.destinationId)
          trimResults.destinationTerminal = elem.IataCode;
          trimResults.location = elem.CityName;
        }
      })
    }
    var getCarID = function(id){
      skyBody.Carriers.forEach((elem) => {
        if(elem.CarrierId === id){
          delete(trimResults.carrierId)
          trimResults.carrier = elem.Name;
        }
      })
    }
    getOGID(trimResults.originId)
    getDesID(trimResults.destinationId)
    getCarID(trimResults.carrierId)

    return trimResults;
  }
};
