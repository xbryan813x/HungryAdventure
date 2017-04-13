import React, { Component } from 'react';
import { connect } from 'react-redux';
// +++++ Imported Components
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import GoogleMaps from './GoogleMaps';
import HotelList from '../components/HotelList';
import Weather from '../components/weather';
import BudgetBar from '../components/budgetBar';
import FrommersInfo from './FrommersInfo';

class destinationPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <div><Link to="/events">YELP</Link></div>
      <div><Link to="/viator">VIATOR</Link></div>
      <FrommersInfo />
      <h1> Hungry Adventure </h1>
      <div
        className="hero" style={{
          backgroundImage: `url(${this.props.destination.imageUrl[0]})`,
          height: '70%',

        }}
      />
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          margin: 'auto',
          width: '50%',
          textAlign: 'center',
          top: '-5%',
        }}
      >
        {this.props.destination.IataCode}
      </div>
      <div className="container col-sm-offset-3" style={{ display: 'grid', marginBottom: '5%' }}>
        <BudgetBar budget={this.props.budget} />
      </div>
      <div style={{ marginBottom: '10%' }}>
        <Col sm={6} className="col-md-offset-1">
          <h1> current budget: ${this.props.budget.flight}</h1>
          <h1> hotel budget: ${this.props.budget.hotel}</h1>
          <h1> {this.props.destination.city}</h1>
          <h1> {this.props.destination.country}</h1>
          <h1>$ {this.props.destination.price}</h1>
        </Col>
        <Weather />
      </div>
      <GoogleMaps locator={this.props.geo.locator} />
      <div style={{ display: 'grid' }} />
      <HotelList hotels={this.props.hotels} destination={this.props.destination} />
      <div><Link to="/events">EVENTS</Link></div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(destinationPage);
