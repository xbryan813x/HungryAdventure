
import axios from 'axios';
import { Route, Redirect, browserHistory } from 'react-router-dom';


export function fetchDestinations(searchObj) {
  return function (dispatch) {
    return axios.get('/api/flights', {
      params: searchObj })
      .then(response => dispatch({ type: 'FETCH_DESTINATION_FULFILLED', payload: response.data }))
      .catch(err => dispatch({ type: 'FETCH_DESTINATION_REJECTED', payload: err }));
  };
}
