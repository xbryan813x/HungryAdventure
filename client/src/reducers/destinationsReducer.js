export default function reducer(state = {
  destinations: [{ price: 572,
  arrivalDate: '2017-04-01T00:00:00',
  departureDate: '2017-04-08T00:00:00',
  originTerminal: 'JFK',
  destinationTerminal: 'LAS',
  location: 'Las Vegas',
  carrier: 'jetBlue',
  imageUrl: 'https://pixabay.com/get/ec3db40f21fc1c2ad65a5854e2454393e577ebc818b518419cf7c37da4eb_640.jpg' },
{ price: 851,
  arrivalDate: '2017-04-01T00:00:00',
  departureDate: '2017-04-08T00:00:00',
  originTerminal: 'JFK',
  destinationTerminal: 'MIA',
  location: 'Miami',
  carrier: 'Interjet',
  imageUrl: 'https://pixabay.com/get/eb34b0082bf5013ed95c4518b7484f93e671e2dc04b0154895f9c67ba3eeb3_640.jpg' },
{ price: 222,
  arrivalDate: '2017-04-01T00:00:00',
  departureDate: '2017-04-08T00:00:00',
  originTerminal: 'JFK',
  destinationTerminal: 'FLL',
  location: 'Miami',
  carrier: 'jetBlue',
  imageUrl: 'https://pixabay.com/get/eb34b0082bf5013ed95c4518b7484f93e671e2dc04b0154895f9c67ba3eeb3_640.jpg' },
],
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
      return { ...state,
        fetching: false,
        fetched: true,
        destinations: action.payload,
      };
    }
  }
  return state;
}