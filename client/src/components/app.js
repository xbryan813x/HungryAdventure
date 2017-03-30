import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route path='/' component={Homepage} />
      </BrowserRouter>
    )
  }
}

export default App;