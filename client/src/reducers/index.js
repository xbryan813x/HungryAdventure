import { combindeReducers } from 'redux';

import tweets from './tweetsReducer';
import user from './userReducer';

export default combindeReducers({
  tweets,
  user,
});

