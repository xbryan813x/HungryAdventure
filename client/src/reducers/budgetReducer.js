export default function reduce(state = {}, action) {
  switch (action.type) {
    case 'GET_BUDGET_FULFILLED' : {
      return { ...state, budget: action.payload };
    }
    case 'UPDATE_BUDGET_FULFILLED' : {
      return { ...state, budget: action.payload };
    }
  }
  return state;
}
