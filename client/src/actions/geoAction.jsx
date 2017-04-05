import axios from 'axios';

export function fetchGeo(placeObj) {
  return function (dispatch) {
    return axios.get('/api/geocoder', {
      params: placeObj })
      .then((response) => {
        // console.log('RESPONSE DATA', response.data)
        return dispatch({ type: 'FETCH_GEO_FULFILLED', payload: response.data[0] });
      })
      .catch((err) => {
        return dispatch({ type: 'FETCH_GEO_REJECTED', payload: err });
      })
  };
}