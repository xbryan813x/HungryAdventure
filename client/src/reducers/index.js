import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import user from './userReducer';


const rootReducer = combineReducers ({
  destinations,
  user,
  form: formReducer,
});

export default rootReducer;
