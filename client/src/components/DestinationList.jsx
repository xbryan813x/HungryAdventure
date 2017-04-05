import React from 'react';
import DestinationEntry from './DestinationEntry';


const DestinationList = ({ destinations }) => (
  <div>
    <DestinationEntry key={destinations.IataCode} />,
  </div>
);

export default DestinationList;
