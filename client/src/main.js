


// //+++++++++++++++++++++ HOW TO HANDLE ASYNC EXAMPLE

// import { applyMiddleware , createStore } from "redux";
// import axios from "axios"; // XAR request
// import ReduxLogger from "redux-logger";
// import ReduxThunk from "redux-thunk"; // in redux perspective, handful of sync actions: This takes care of async
// import promise from "redux-promise-middleware";


// const initState = {
//   fetching: false, 
//   fetched: false,
//   users: [],
//   error: null,
// };

// const reducer = (state=initState, action) => {
//   switch (action.type) {
//     case "FETCH_USERS_PENDING": {
//       return {...state, fetching: true}
//       break;
//     }
//     case "FETCH_USERS_REJECTED": {
//       return {...state, fetching: false, error: action.payload}
//       break;
//     }
//     case "FETCH_USER_FULFILLED": {
//       return {
//         ...state, 
//         fetching: false, 
//         fetched: true,
//         users: action.payload,
//       }
//       break;
//     }
//   }
//   return state;
// }


// const middleware = applyMiddleware(promise(), ReduxThunk, ReduxLogger);
// const store = createStore(reducer, middleware);

// store.dispatch({
//   type: "FETCH_USER",
//   payload: axios.get("http://rest.learncode.academy/api/wstern/users")
// })
// //+++++++++++++++++++++ END OF ASYNC EXAMPLE




//+++++++++++++++++++++ EXAMPLE OF MODULARITY
// import { combineReducers, createStore } from "redux";

// //usually in seperate files
// const userReducer = (state={}, action) => {
//   switch(action.type) {
//   	case "CHANGE_NAME" : {
//       state = {...state, name: action.payload}
//       break;
//   	}
//     case "CHANGE_AGE": {
//       state = {...state, age: action.payload}
//       break;
//     }
//   }
//   return state;
// };

// //usually in seperate files
// const tweetsReducer = (state=[], action) => {
//   return state;
// };

// // All within another file
// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer
// })



// const logger = (store) => (next) => (action) => {
//   console.log("action fired", action);
//   next(action);
// }

// const error = (store) => (next) => (action) => {
//   try {
//   	next(action);
//   } catch (err) {
//   	console.log("Oh no", err);
//   }
// }

// const middleware = applyMiddleware();

// //Store of actions
// const store = createStore(reducers, middleware);

// store.subscribe(() => {
// 	console.log("store changed", store.getState());
// })

// //Actions
// store.dispatch({type: "CHANGE_NAME", payload: "Mike" });
// store.dispatch({type: "CHANGE_AGE", payload: 35 });
// store.dispatch({type: "CHANGE_AGE", payload: 36 });
// store.dispatch({type: "CHANGE_NAME", payload: "John" });



// --------> Setup server Template
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
