import axios from 'axios';

export function saveSearchQuery(queryObj) {
  return function (dispatch) {
    return axios.get('/api/dbSearchQuerySave', {
      params: queryObj })
      .then((response) => {
        console.log(response)
        return dispatch({ type: 'SAVE_SEARCHQUERY_FULLFILLED', payload: response.data });
      })
      .catch((err) => {
        return dispatch({ type: 'SAVE_SEARCHQUERY_FAILED', payload: err });
      });
  };
}
