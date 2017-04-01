export default function reducer(state = {
  destinations: [{
    "LAX": {
      "price": 362,
      "arrivalDate": "2017-05-01T00:00:00",
      "departureDate": "2017-05-08T00:00:00",
      "originTerminal": "JFK",
      "destinationTerminal": "LAX",
      "location": "Los Angeles",
      "carrier": "Virgin America",
      "imageUrl": "https://pixabay.com/get/e833b50d2df5053ed95c4518b7484f93e671e2dc04b0154894f0c771a4e8b7_640.jpg"
    }
  },
  {
    "SFO": {
      "price": 310,
      "arrivalDate": "2017-05-01T00:00:00",
      "departureDate": "2017-05-08T00:00:00",
      "originTerminal": "JFK",
      "destinationTerminal": "SFO",
      "location": "San Francisco",
      "carrier": "Virgin America",
      "imageUrl": "https://pixabay.com/get/e833b20c2af4053ed95c4518b7484f93e671e2dc04b0154894f0c771a4e8b7_640.jpg"
    }
  },
  {
    "LAS": {
      "price": 347,
      "arrivalDate": "2017-05-01T00:00:00",
      "departureDate": "2017-05-08T00:00:00",
      "originTerminal": "JFK",
      "destinationTerminal": "LAS",
      "location": "Las Vegas",
      "carrier": "Virgin America",
      "imageUrl": "https://pixabay.com/get/ec3db40f21fc1c2ad65a5854e2454393e577ebc818b5184095f6c97aa2ef_640.jpg"
    }
  },
  {
    "MIA": {
      "price": 736,
      "arrivalDate": "2017-05-01T00:00:00",
      "departureDate": "2017-05-08T00:00:00",
      "originTerminal": "JFK",
      "destinationTerminal": "MIA",
      "location": "Miami",
      "carrier": "Interjet",
      "imageUrl": "https://pixabay.com/get/eb34b0082bf5013ed95c4518b7484f93e671e2dc04b0154894f0c771a4e8b7_640.jpg"
    }
  },
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