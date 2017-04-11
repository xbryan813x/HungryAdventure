export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'GET_BUDGET_FULFILLED' : {
      return { ...state, original: action.payload };
    }
    case 'FLIGHT_BUDGET_FULFILLED' : {
      return { ...state, flight: action.payload.flight };
    }
    case 'HOTEL_BUDGET_FULFILLED' : {
      return { ...state, hotel: action.payload.hotel };
    }
    case 'EVENT_BUDGET_FULFILLED' : {
      return { ...state, events: action.payload.events };
    }
  }
  return state;
}
