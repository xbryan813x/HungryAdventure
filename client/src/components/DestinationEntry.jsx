import React from 'react';

const DestinationEntry = ({ destination }) => {
  const airport = Object.keys(destination).toString();
  return (
    <div>
      <h1>{airport}</h1>
      <h3>{destination[airport].price}</h3>
      <h3>{destination[airport].location}</h3>
      <h3>{destination[airport].carrier}</h3>
      <h3>{destination[airport].arrivalDate}</h3>
      <h3>{destination[airport].departureDate}</h3>
      <h3>{destination[airport].originTerminal}</h3>
      <img src={destination[airport].imageUrl} />
    </div>
  )
}

export default DestinationEntry;
