import React, { Component } from 'react';
import { connect } from 'react-redux';
// +++++ Imported Components
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import GoogleMaps from './GoogleMaps';
import HotelList from '../components/HotelList';
import Weather from '../components/weather';
import BudgetBar from '../components/budgetBar';
import FrommersInfo from './FrommersInfo';
import ViatorEvents from './ViatorEvents';
import YelpEvents from './YelpEvents';

// Charts
import DonutChart from 'react-donut-chart';

class destinationPage extends Component {

  render() {
    const budget = this.props.budget.original;
    const flightCost = this.props.budget.flight || 0;
    const hotelCost = this.props.budget.hotel || 0;
    const activityCost = this.props.budget.viatorEvents || 0;
    const foodCost = this.props.budget.yelpEvents || 0;
    const totalBudget = budget - flightCost - hotelCost - activityCost - foodCost;
    return (<div>

      <div
        className="hero" style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${this.props.destination.imageUrl[0]})`,
          height: '70%',
          'background-size': 'cover',
          'margin-top': '-20px',
        }}
      >
        <div className="titleContainer">
          <h1>Hungry Adventure</h1>
          <hr className="pageHr" />
          <p className="pageTitle">{this.props.destination.city}, {this.props.destination.country}</p>
        </div>
      </div>

      <div className="pageContainer">
        <Col sm={4}><FrommersInfo /></Col>
        <Col sm={4} className="donut"> <DonutChart
          data={[{ label: `Remaining ( $ ${totalBudget} )`,
            value: totalBudget,
            isEmpty: true,
          },
          { label: ` Hotel ( $ ${hotelCost} )`,
            value: hotelCost },
          { label: ` Flight ( $ ${flightCost} )`,
            value: flightCost },
          { label: `Attractions ( $ ${activityCost} )`,
            value: activityCost },
          { label: `Food ( $ ${foodCost} )`,
            value: foodCost,
          },
          ]} height={200} width={200} legend={false} className="donutAlign"
        /></Col>
        <Col sm={4}> <Weather /></Col>
      </div>

      <GoogleMaps locator={this.props.geo.locator} hotelsArr={this.props.hotels.hotels} />
      <HotelList hotels={this.props.hotels} destination={this.props.destination} />
      <ViatorEvents />
      <br />
      <YelpEvents />


      <button> <Link to="/storypage"> CHECKOUT</Link></button>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(destinationPage);
