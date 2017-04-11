import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Carousel } from 'react-bootstrap';
import { currentHotel } from '../actions/currentState';
import { hotelBudget } from '../actions/budgetAction';
import { hotelImage } from '../actions/budgetBarAction';

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

  render() {
    if (this.props.hotels.hotels === undefined) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        {this.props.hotels.hotels.map(hotel => (
          <Col sm={6} md={4} key={hotel.id}>
          <button onClick={()=> { this.add(hotel, this.props) }}>Add</button>
            <div className="tile">
              <div>
                <Carousel className="flight" direction={null}>
                  {hotel.pictures.map((image, i) => (
                    <Carousel.Item className="flightimg" key={i} >
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


const mapStateToProps = ({ hotels, destination, budget }) => ({
  hotels,
  destination,
  budget,
});
export default connect(mapStateToProps, { currentHotel, hotelBudget, hotelImage })(HotelEntry);
