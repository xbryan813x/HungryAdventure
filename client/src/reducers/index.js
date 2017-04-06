import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import destination from './destinationReducer';
import geo from './geoReducer'


const rootReducer = combineReducers ({
  destinations,
  destination,
  geo,
  form: formReducer,
});

export default rootReducer;
