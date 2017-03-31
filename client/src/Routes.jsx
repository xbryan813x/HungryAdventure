import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './containers/Layout';
import Homepage from './components/Homepage';
import Destinations from './components/Destinations'

const Routes = () => (
  <Router >
    <div>
      <Route exact path='/' component={Layout} />
      <Route path='/work' component={Homepage} />
      <Route path='/test' component={Destinations} />
    </div>
  </Router>
)

export default Routes;