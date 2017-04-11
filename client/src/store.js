import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxLogger from 'redux-logger';
import thunk from 'redux-thunk'; // allows you to fire off more than one action
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk, ReduxLogger);

export default createStore(reducer, composeWithDevTools(middleware))
;
