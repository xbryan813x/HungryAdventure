import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMaps from './GoogleMaps';
import HotelList from '../components/HotelList';
import Weather from '../components/weather';
import BudgetBar from '../components/budgetBar';
// +++++ Imported Components
import { Link } from 'react-router-dom';

// +++++ Imported Components


class destinationPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <div><Link to="/events">EVENTS</Link></div>
      <h1> Hungry Adventure </h1>
      <div className="hero" style={{ backgroundImage: `url(${this.props.destination.imageUrl[0]})` }} />
      <GoogleMaps locator={this.props.geo.locator} />
      <div style={{ display: 'grid' }}>
        <BudgetBar budget={this.props.budget} />
      </div>
      <h1> current budget: ${this.props.budget.flight}</h1>
      <h1> hotel budget: ${this.props.budget.hotel}</h1>
      <h1> {this.props.destination.city}</h1>
      <h1> {this.props.destination.country}</h1>
      <h1>$ {this.props.destination.price}</h1>
      <Weather />
      {/* < HEADERIMG />*/}
      {/* < INFO Component />*/}
      {/* < Weather Component />*/}
      <HotelList hotels={this.props.hotels} destination={this.props.destination} />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(destinationPage);
