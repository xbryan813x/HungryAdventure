import React, { Component } from 'react';
import { Col, Carousel } from 'react-bootstrap';

import dummyData from './dummyData';

export default class Destinations extends Component {
  render() {
    const dumnies = dummyData.map(dummy => (
      <Col className="center-block" sm={6} md={4} key={Object.keys(dummy)[0]} >
        <div className="tile">
          <div>
            <img className="flight" alt="" src={dummy[Object.keys(dummy)[0]].imageUrl[0]} />
          </div>
          <div>
            <div>
              <div className="col-xs-8 left"><span className="icon glyphicon glyphicon-plane" />{dummy[Object.keys(dummy)[0]].location}</div>
              <div className="col-xs-4 right">${dummy[Object.keys(dummy)[0]].price}</div>
            </div>
            <div>{dummy[Object.keys(dummy)[0]].departureDate}</div>
            <div>{dummy[Object.keys(dummy)[0]].carrier}</div>
          </div>
        </div>
      </Col>
    ));

    return (
      <div className="place">
        {dumnies}
      </div>
    );
  }
}
