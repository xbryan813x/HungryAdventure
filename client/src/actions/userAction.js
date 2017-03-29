// Example of importing actions for react
// import * as user from '../userAction' // Imports all user actions
// user.setUserName('John');

// import { setUserName } from '../userActions' // import single action
// setUserName('John');


export function fetchUser() {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {
      name: 'Mike',
      age: 35,
    },
  };
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: {
      payload: name,
    },
  };
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: {
      payload: age,
    },
  };
}
