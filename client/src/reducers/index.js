import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import destination from './destinationReducer';
import geo from './geoReducer';
import hotels from './hotelReducer';
import budget from './budgetReducer';


const rootReducer = combineReducers({
  destinations,
  destination,
  geo,
  hotels,
  budget,
  form: formReducer,
});

export default rootReducer;
