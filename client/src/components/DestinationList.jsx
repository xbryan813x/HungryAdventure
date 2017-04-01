import React from 'react';
import DestinationEntry from './DestinationEntry';

const DestinationList = ({ destinations }) => (
  <div>
    {destinations.destinations.map(destination =>
      <DestinationEntry key={Object.keys(destination)[0]} destination={destination} />,
    )}
  </div>
);

export default DestinationList;