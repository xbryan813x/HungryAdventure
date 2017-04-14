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
      console.log('THIS IS THE STATE FOOL', action.payload.viatorEvents);
      let viatorTotal;
      if (action.payload.viatorEvents.length === 1) {
        viatorTotal = action.payload.viatorEvents[0].price;
      } else if (action.payload.viatorEvents.length === 0) {
        viatorTotal = 0;
      } else {
        viatorTotal = action.payload.viatorEvents.reduce((a, b) => a + b.price, 0);
      }
      return { ...state, events: viatorTotal };
    }
    case 'RESET': {
      return { ...state, flight: undefined, hotel: undefined, events: undefined };
    }
  }
  return state;
}
