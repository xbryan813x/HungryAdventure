var skyscan = require('./skyscanner.json');
var object = require('./sabreFunction.js');
var price = 0;

var getOGID = function(id){
  skyscan.Places.forEach((elem) => {
    if(elem.PlaceId === id){
      delete(object.AMS.originId)
      object.AMS.originTerminal = elem.IataCode;
    }
  })
  console.log(object.AMS)
}
var getDesID = function(id){
  skyscan.Places.forEach((elem) => {
    if(elem.PlaceId === id){
      delete(object.AMS.destinationId)
      object.AMS.destinationTerminal = elem.IataCode;
      object.AMS.location = elem.CityName;
    }
  })
  console.log(object.AMS)
}
var getCarID = function(id){
  skyscan.Carriers.forEach((elem) => {
    if(elem.CarrierId === id){
      delete(object.AMS.carrierId)
      object.AMS.carrier = elem.Name;
    }
  })
  console.log(object.AMS)
}


skyscan.Quotes.forEach((elem) => {

  if(elem.InboundLeg && elem.OutboundLeg && elem.MinPrice > price){
    // var destination = elem.OutboundLeg.OriginId;
    object.AMS.price = elem.MinPrice;
    object.AMS.carrierId = elem.OutboundLeg.CarrierIds[0];

    object.AMS.originId = elem.OutboundLeg.OriginId;
    object.AMS.destinationId = elem.OutboundLeg.DestinationId;
    object.AMS.arrivalDate = elem.OutboundLeg.DepartureDate;
    object.AMS.departureDate = elem.InboundLeg.DepartureDate;
    price = elem.MinPrice;

  }
})
// console.log(object.AMS)
console.log(getOGID(object.AMS.originId))
console.log(getDesID(object.AMS.destinationId))
console.log(getCarID(object.AMS.carrierId))
