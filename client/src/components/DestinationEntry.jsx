import React from 'react';

const DestinationEntry = ({ destination }) => (
  <div>
    <div>{destination.location}</div>
    <img src={destination.imageUrl} />
  </div>
)

export default DestinationEntry;

