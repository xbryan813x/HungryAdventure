import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Carousel } from 'react-bootstrap';
import { destinationSet } from '../actions/destinationAction';
import { fetchGeo } from '../actions/geoAction';
import { fetchHotels } from '../actions/hotelAction';
import { flightBudget } from '../actions/budgetAction';
import { history, Link } from 'react-router-dom'
import { browserHistory } from 'react-router';
import { fetchEvents } from '../actions/eventsAction'
import { fetchWeather } from '../actions/weatherAction'
import { currentDestination } from '../actions/currentState';

class DestinationEntry extends Component {

constructor (props){
  super(props);
}

handleSelect = (destination) => {
  this.props.flightBudget({price: destination.price, original: Number(this.props.budget.original)});
  this.props.fetchHotels({city: destination.city});
  this.props.fetchGeo({location: destination.city})
    // .then((result) => {
    //   this.props.fetchWeather({
    //     latitude: result.payload.latitude,
    //     longitude: result.payloadlongitude
    //   })
    // });
  this.props.destinationSet(destination);
  this.props.fetchEvents({location: destination.city});
  this.props.currentDestination({destination: destination});
  this.props.redirect('/destination');
}

render () {

  return (
  <div className="destEntry">
    {this.props.destinations.destinations.map((destination, index) => (
      <Col className="" lg={4} key={destination.IataCode}>
        <div className="tile">
          <div>
            <Carousel key={index} className="flight" direction={null}>
              {destination.imageUrl.map((image, i) => (
                <Carousel.Item className="flightimg" key={destination.imageUrl[i]+i} >
                 <img className="flightimg" alt=""
                 src={destination.imageUrl[i]} onClick={ ()=> {this.handleSelect(destination)}}/>
                </Carousel.Item>
                  ))}
            </Carousel>
          </div>
          <div className="caption post-content">
            <div className="bold">{destination.city}</div>
            <div>${destination.price}</div>
          </div>
        </div>
        </Col>
      ))}
    </div>
    )
  }
}
const mapStateToProps = ({destinations, budget, geo}) => ({
  destinations,
  budget,
  geo,
});


export default connect(mapStateToProps , { destinationSet, browserHistory, fetchGeo, fetchHotels, flightBudget, fetchEvents, fetchWeather, currentDestination } )(DestinationEntry);
