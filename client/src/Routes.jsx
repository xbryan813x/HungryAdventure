import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './containers/Layout';
import Destinations from './components/Destinations'
import Destinations2 from './containers/Destinations'

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={Layout} />
      <Route path='/test' component={Destinations} />
      <Route path='/work' component={Destinations2} />
    </div>
  </Router>
)

export default Routes