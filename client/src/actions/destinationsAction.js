import axios from 'axios';

export function fetchDestinations(searchObj) {
	console.log('WITHIN FETCH DEST', searchObj);
  return function (dispatch) {
    return axios.get('/api/anywhere', {
      params: searchObj })
      .then(response => dispatch({ type: 'FETCH_DESTINATIONS_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_DESTINATIONS_REJECTED', payload: err }));
  };
}
