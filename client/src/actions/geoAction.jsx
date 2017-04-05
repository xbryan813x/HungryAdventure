import axious from 'axious';

export function fetchGeo(placeObj, callback) {
  axious.get('/api/geocoder', {
    params: placeObj
  })
  .then(response => callback(response))
  .catch(err => callback(err));
}