import React { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    <BrowserRouter>
      <Route path='/' component={Homepage} />
    </BrowserRouter>
  }
}

export default App