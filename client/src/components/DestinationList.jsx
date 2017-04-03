import React from 'react';
import DestinationEntry from './DestinationEntry'

const DestinationList = ({ destinations }) => (
  <div>
    {destinations.destinations.map((destination, index) => 
      <DestinationEntry destination={destination} key={index} />
    )}
  </div>
);

export default DestinationList