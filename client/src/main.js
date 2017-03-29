import { combineReducers, createStore } from "redux";

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


//Store of actions
const store = createStore(reducers);

store.subscribe(() => {
	console.log("store changed", store.getState());
})

//Actions
store.dispatch({type: "CHANGE_NAME", payload: "Mike" });
store.dispatch({type: "CHANGE_AGE", payload: 35 });
store.dispatch({type: "CHANGE_AGE", payload: 36 });












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
