import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import destination from './destinationReducer';
import geo from './geoReducer';
import hotels from './hotelReducer';
import budget from './budgetReducer';
import bar from './budgetBarReducer';
import events from './eventsReducer';
import profile from './facebookReducer';
import weather from './weatherReducer';
import current from './currentStateReducer';
import saveQuery from './saveSearchQueryReducer';


const rootReducer = combineReducers({
  destinations,
  profile,
  destination,
  geo,
  hotels,
  budget,
  bar,
  events,
  current,
  form: formReducer,
  weather,
  saveQuery,
});

export default rootReducer;
