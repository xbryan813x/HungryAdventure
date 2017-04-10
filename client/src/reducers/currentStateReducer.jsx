export default function reduce(state = {
  events: [],
}, action) {
  switch (action.type) {
    case 'FETCH_CURRENTDES_FULFILLED' : {
      return { ...state, destination: action.payload };
    }
    case 'FETCH_CURRENTHOTEL_FULFILLED' : {
      return { ...state, hotel: action.payload };
    }
    case 'FETCH_CURRENTEVENTS_FULFILLED' : {
      if (!state.events.length) return { ...state, events: state.events.concat(action.payload) }
      for (let i = 0; i < state.events.length; i += 1) {
        if (state.events[i].id === action.payload.id) {
          state.events.splice(i, 1);
          return { ...state, events: state.events };
        }
      }
      return { ...state, events: state.events.concat(action.payload) };
    }
  }
  return state;
}
