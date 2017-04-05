import React from 'react';
import DestinationEntry from './DestinationEntry';


const DestinationList = ({ destinations , redirect }) => (
  <div>
      <DestinationEntry key={destinations.IataCode} redirect={ redirect } />,
  </div>
);

export default DestinationList;