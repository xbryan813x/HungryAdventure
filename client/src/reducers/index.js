import { combineReducers } from 'redux';

import destinations from './destinationsReducer';
import user from './userReducer';

export default combineReducers({
  destinations,
  user,
});

