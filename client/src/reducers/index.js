import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import user from './userReducer';

const reducers = {
	form: formReducer
}

export default combineReducers({
  destinations,
  user,
  reducers,
});

