export function getBudget({ Budget }) {
  return { type: 'GET_BUDGET_FULFILLED', payload: { original: Budget } };
}

export function updateBudget({ price, original }) {
  console.log('UPDATE_BUDGET_FULFILLED', price, original);
  const newBudget = original - price;
  return { type: 'UPDATE_BUDGET_FULFILLED', payload: { original, flight: newBudget } };
}
