import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import dummyData from './dummyData';
// const arrivalKey = Object.keys(dummy)[0];

export default class Destinations extends Component {
  render() {
    const dumnies = dummyData.map(dummy => (
      <Col key={Object.keys(dummy)[0]} bsClass="container" xs={6} md={4}>
        <div>
          <img alt="" src={dummy[Object.keys(dummy)[0]].imageUrl} />
        </div>
        <div>
          <div>{dummy[Object.keys(dummy)[0]].price}</div>
          <div>{dummy[Object.keys(dummy)[0]].departureDate}</div>
          <div>{dummy[Object.keys(dummy)[0]].location}</div>
          <div>{dummy[Object.keys(dummy)[0]].carrier}</div>
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
