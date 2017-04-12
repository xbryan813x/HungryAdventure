import axios from 'axios';

export function fetchViator(locationObj) {
  return function (dispatch) {
    return axios.get('/api/viaotr', {
      params: locationObj })
      .then(response => dispatch({ type: 'FETCH_VIA_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_VIA_REJECTED', payload: err }));
  };
}
