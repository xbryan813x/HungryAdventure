import React from 'react';
import DestinationEntry from './DestinationEntry';


const DestinationList = ({ destinations }) => (
  <div>
    {destinations.destinations.map(destination =>
      <DestinationEntry key={destination.IataCode} destination={destination} />,
    )}
  </div>
);

export default DestinationList;