import React, { Component } from 'react';
import DestinationEntry from './DestinationEntry'

const DestinationList = ({ destinations }) => (
  <div>
    {destinations.destinations.map((destination) => 
      <DestinationEntry destination={destination} />
    )}
  </div>
);

export default DestinationList