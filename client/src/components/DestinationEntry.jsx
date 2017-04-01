import React from 'react';
import { Col, Carousel } from 'react-bootstrap';

const DestinationEntry = ({ destination }) => {
  const airport = Object.keys(destination).toString();
  return (
    <Col className="" sm={6} md={4} key={destination[airport]} >
      <div className="tile">
        <div>
          <Carousel className="flight">
            {destination[airport].imageUrl.map((image, i) => (
              <Carousel.Item className="flightimg" key={destination[airport].imageUrl[i]}>
                <img className="flightimg" alt="" src={destination[airport].imageUrl[i]} />
              </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div>
          <div>
            <div className="col-xs-10 left">
              <span className="icon glyphicon glyphicon-plane" />
              <span className="bold"> {destination[airport].location} </span> || <span>{destination[airport].carrier}</span>
            </div>
            <div className="col-xs-2 right">${destination[airport].price}</div>
          </div>
          <div>
            {destination[airport].arrivalDate} through {destination[airport].departureDate}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DestinationEntry;
