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
  console.log('Im inside of destinationEntry props=>', this.props)
  this.props.flightBudget({price: destination.price, original: Number(this.props.budget.original)});
  this.props.fetchHotels({city: destination.city});
  this.props.fetchGeo({location: destination.city})
    .then(() => this.props.destinationSet(destination));
<<<<<<< HEAD
  this.props.fetchEvents({location: destination.city})
  this.props.currentDestination({destination: destination});
=======
  // this.props.fetchEvents({latitude: geo.locator.latitude,
  //                         longitude: geo.locator.longitude
  //                        })
  //this.props.fetchWeather({data: destination.arrivalDate})
>>>>>>> Finished weather component css and working on geo ASYNC
  this.props.redirect('/destination');
}

render () {

<<<<<<< HEAD
  return (
  <div className="destEntry">
    {this.props.destinations.destinations.map((destination, index) => (
      <Col className="" lg={4} key={destination.IataCode}>
        <div className="tile">
=======
    <Col className="" sm={6} md={4} key={destination.IataCode}>
      <div className="tile">
        <div>
          <Carousel key={index} className="flight" direction={null}>
            {destination.imageUrl.map((image, i) => (
              <Carousel.Item className="flightimg" key={destination.imageUrl[i]+i} >
               <img className="flightimg" alt=""
               src={destination.imageUrl[i]} onClick={ ()=> {this.handleSelect(destination)}} />
              </Carousel.Item>
                ))}
          </Carousel>
        </div>
        <div>
>>>>>>> Finished weather component css and working on geo ASYNC
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
const mapStateToProps = ({destinations, budget}) => ({
  destinations,
  budget,
});


export default connect(mapStateToProps , { destinationSet, browserHistory, fetchGeo, fetchHotels, flightBudget, fetchEvents, fetchWeather, currentDestination } )(DestinationEntry);


