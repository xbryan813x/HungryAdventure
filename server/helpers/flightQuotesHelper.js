var routes = require('../config/routes.js');
// console.log("SDLJKFSDKJFDJKLDFSJKLDSFJKLDSFJKLDSFJKLFDJK", routes)
const skyBody = routes.skyBody;
const elem = routes.elem;
const arrivalKey = routes.arrival;
const eachDestObj = elem[arrivalKey];



// let price = 0;
// skyBody.Quotes.forEach((skyElem) => {
//   if(skyElem.InboundLeg && skyElem.OutboundLeg && skyElem.MinPrice > price){
//     eachDestObj.price = skyElem.MinPrice;
//     eachDestObj.carrierId = skyElem.OutboundLeg.CarrierIds[0];
//     eachDestObj.originId = skyElem.OutboundLeg.OriginId;
//     eachDestObj.destinationId = skyElem.OutboundLeg.DestinationId;
//     eachDestObj.arrivalDate = skyElem.OutboundLeg.DepartureDate;
//     eachDestObj.departureDate = skyElem.InboundLeg.DepartureDate;
//     price = elem.MinPrice;
//   }
// })
//
// var getOGID = function(id){
//   skyBody.Places.forEach((elem) => {
//     if(elem.PlaceId === id){
//       delete(eachDestObj.originId)
//       eachDestObj.originTerminal = elem.IataCode;
//     }
//   })
// }
// var getDesID = function(id){
//   skyBody.Places.forEach((elem) => {
//     if(elem.PlaceId === id){
//       delete(eachDestObj.destinationId)
//       eachDestObj.destinationTerminal = elem.IataCode;
//       eachDestObj.location = elem.CityName;
//     }
//   })
// }
// var getCarID = function(id){
//   skyBody.Carriers.forEach((elem) => {
//     if(elem.CarrierId === id){
//       delete(eachDestObj.carrierId)
//       eachDestObj.carrier = elem.Name;
//     }
//   })
// }
// console.log("originId", eachDestObj.originId)
// getOGID(eachDestObj.originId)
// getDesID(eachDestObj.destinationId)
// getCarID(eachDestObj.carrierId)
//
//
// console.log("20", arrivalKey, eachDestObj)

module.exports = eachDestObj;
