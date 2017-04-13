export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_HOTELS_FULLFILLED': {
      return { ...state,
        hotels: action.payload,
      };
    }
  }
  return state;
}
