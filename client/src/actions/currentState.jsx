export function currentDestination(stateObj) {
  return { type: 'FETCH_CURRENTDES_FULFILLED', payload: stateObj }
}

export function currentHotel(stateObj) {
  return { type: 'FETCH_CURRENTHOTEL_FULFILLED', payload: stateObj }
}

export function currentEvents(stateObj) {
  return { type: 'FETCH_CURRENTEVENTS_FULFILLED', payload: stateObj }
}
