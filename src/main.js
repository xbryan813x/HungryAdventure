import { applyMiddleware, combineReducers, createStore } from "redux";

//usually in seperate files
const userReducer = (state={}, action) => {
  switch(action.type) {
  	case "CHANGE_NAME" : {
      state = {...state, name: action.payload}
      break;
  	}
    case "CHANGE_AGE": {
      state = {...state, age: action.payload}
      break;
    }
  }
  return state;
};

//usually in seperate files
const tweetsReducer = (state=[], action) => {
  return state;
};

// All within another file
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})



const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
}

const error = (store) => (next) => (action) => {
  try {
  	next(action);
  } catch (err) {
  	console.log("Oh no", err);
  }
}

const middleware = applyMiddleware();

//Store of actions
const store = createStore(reducers, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState());
})

//Actions
store.dispatch({type: "CHANGE_NAME", payload: "Mike" });
store.dispatch({type: "CHANGE_AGE", payload: 35 });
store.dispatch({type: "CHANGE_AGE", payload: 36 });
store.dispatch({type: "CHANGE_NAME", payload: "John" });












// console.log("Hello, world")
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Counter from './Counter';

// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(Counter),
//     document.getElementById('mount')
//   );
// });
