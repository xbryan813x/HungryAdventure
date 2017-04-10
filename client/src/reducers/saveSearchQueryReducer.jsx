export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SAVE_SEARCHQUERY_FULLFILLED': {
      console.log('THINGS HAVE BEEN SAVED', action.payload);
      return { ...state,
       seachQuery:action.payload,  
      };
    }
  }
  return state;
}
