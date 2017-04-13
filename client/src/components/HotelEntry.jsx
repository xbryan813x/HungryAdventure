import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Carousel, Button } from 'react-bootstrap';
import { currentHotel } from '../actions/currentState';
import { hotelBudget } from '../actions/budgetAction';
import { hotelImage } from '../actions/budgetBarAction';
import { toggleHotels } from '../actions/toggleAction';

class HotelEntry extends Component {
  constructor(props) {
    super(props);
  }

  add = (hotel, props) => {
    this.props.currentHotel({ hotel: hotel});
    this.props.hotelBudget({
      hotel: hotel.price,
      budget: props.budget,
      arrivalDate: props.destination.arrivalDate,
      departureDate: props.destination.departureDate,
      });
    this.props.hotelImage({ hotel: hotel.pictures[0] });
  }

  toggle = ({ hotels }) => {
    this.props.toggleHotels({ hotels: hotels })
  }

  render() {
    if (this.props.hotels.hotels === undefined) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        <h1 className="title">Hotels</h1>
        <Button onClick={()=> this.toggle(this.props.toggle)} bsStyle="primary" style={{ float: "right" }}>See More...</Button>
        <div className='container'></div>
        {this.props.hotels.hotels.map((hotel, index) => (
          <Col className={ ((index >= 3 && !this.props.toggle.hotels) ? "none" : "") } sm={6} md={4} key={hotel.id} onClick={()=> { this.add(hotel, this.props) }}>
            <div className="tile">
              <div>
                <Carousel className="flight" direction={null}>
                  {hotel.pictures.map((image, i) => (
                    <Carousel.Item className={"flightimg "} key={i} >
                      <img className="flightimg" alt="" src={hotel.pictures[i]} />
                    </Carousel.Item>
                    ))}
                </Carousel>
              </div>
              <div>
                <div>
                  <div className="col-xs-10 left">
                    <span className="bold"> {hotel.neighborhood || this.props.destination.city} </span>
                    ||
                    <span> {hotel.hotel}</span>
                  </div>
                  <div className="col-xs-2 right">${hotel.price}</div>
                </div>
                <div>
                  {Array(Math.floor(hotel.rating)).fill(0).map((elem, i) =>
                    <span key={hotel.id + i} className="glyphicon glyphicon-star" />,
                  )}
                  <span className="glyphicons glyphicons-star" />
                  <span>{hotel.rating}</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </div>
    );
  }
  }

// onClick={()=> { this.add(hotel, this.props) }}
const mapStateToProps = ({ hotels, destination, budget, toggle }) => ({
  hotels,
  destination,
  budget,
  toggle,
});
export default connect(mapStateToProps, { currentHotel, hotelBudget, hotelImage, toggleHotels })(HotelEntry);
