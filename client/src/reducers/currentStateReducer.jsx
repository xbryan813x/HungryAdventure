export default function reduce(state = {
  events: [],
}, action) {
  switch (action.type) {
    case 'FETCH_CURRENTDES_FULFILLED' : {
      return { ...state, destination: action.payload }
    }
    case 'FETCH_CURRENTHOTEL_FULFILLED' : {
      return { ...state, hotel: action.payload }
    }
    case 'FETCH_CURRENTEVENTS_FULFILLED' : {
      return { ...state, events: state.events.concat(action.payload) }
    }
  }

  return state;
}

    