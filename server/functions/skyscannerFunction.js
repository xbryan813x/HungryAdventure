var skyscan = require('./skyscanner.json');
var object = require('./sabreFunction.js');
var price = 0;

skyscan.Quotes.forEach((elem) => {

  if(elem.InboundLeg && elem.OutboundLeg && elem.MinPrice > price){
    // var destination = elem.OutboundLeg.OriginId;
    object.AMS.price = elem.MinPrice;
    object.AMS.carrier = elem.OutboundLeg.CarrierIds[0];
    object.AMS.arrivalDate = elem.OutboundLeg.DepartureDate;
    object.AMS.departureDate = elem.InboundLeg.DepartureDate;
    price = elem.MinPrice;

  }
})
console.log(object.AMS)
