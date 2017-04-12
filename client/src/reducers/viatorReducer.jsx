export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'FETCH_VIA_FULFILLED': {
      console.log(action.payload)
      return { ...state, events: action.payload };
    }
  }
  return state;
}
