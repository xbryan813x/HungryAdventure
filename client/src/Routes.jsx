import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Destinations from './containers/Destinations';
import Destination from './containers/destinationPage';
import GoogleMaps from './containers/GoogleMaps';
import Events from './containers/Events';
import Story from './containers/StoryPage';
import Viator from './containers/ViatorEvents';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Layout} />
      <Route path="/flights" component={Destinations} />
      <Route path="/maps" component={GoogleMaps} />
      <Route path="/destination" component={Destination} />
      <Route path="/events" component={Events} />
      <Route path="/storypage" component={Story} />
      <Route path="/viator" component={Viator} />
    </div>
  </Router>
);

export default Routes;
