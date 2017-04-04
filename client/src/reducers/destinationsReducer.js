export default function reducer(state = {
  destinations: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_DESTINATION': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_DESTINATION_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_DESTINATION_FULFILLED': {
      console.log('+++++++', action.payload);
      return { ...state,
        fetching: false,
        fetched: true,
        destinations: action.payload,
      };
    }
  }
  return state;
}
