import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Carousel } from 'react-bootstrap';
import { destinationSet } from '../actions/destinationAction';

import { history, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

class HotelEntry extends Component {
  constructor(props) {
    super(props);
    console.log('HOTEL PROPS----->', props);
  }
  render() {
    return (
      <div>made it, cash$$$$</div>
    );
  }
}

const mapStateToProps = ({ destination }) => ({
  destination,
});
export default connect(mapStateToProps, { destinationSet, browserHistory })(HotelEntry);
