import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Destinations from './Destinations';

class App extends Component {
  render() {
    return(
    <Router>
      <div>
       <Route exact path='/' component={Homepage} />
       <Route path='/flight' component={Destinations} />
      </div>
    </Router>
    )
  }
}

export default App;

