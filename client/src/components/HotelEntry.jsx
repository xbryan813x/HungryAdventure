import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Row } from 'react-bootstrap';
import { currentHotel } from '../actions/currentStateAction';
import { hotelBudget } from '../actions/budgetAction';
import { hotelImage } from '../actions/budgetBarAction';
import { toggleHotels, toggleSelect } from '../actions/toggleAction';

class HotelEntry extends Component {
  constructor(props) {
    super(props);
  }

  add = (hotel, props) => {
    this.props.currentHotel({ hotel });
    this.props.hotelBudget({
      hotel: hotel.price,
      budget: props.budget,
      arrivalDate: props.destination.arrivalDate,
      departureDate: props.destination.departureDate,
      });
    this.props.hotelImage({ hotel: hotel.pictures[0] });
  }

  toggle = ({ hotels }) => {
    this.props.toggleHotels({ hotels })
  }
  select = (hotel, toggle) => {
    this.props.toggleSelect({ hotel, select: toggle.select })
  }
  clickHotel = (hotel, props) => {
    this.add(hotel, props);
    this.select(hotel, props.toggle);
  }

  render() {
    if (this.props.hotels.hotels === undefined) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        <div className='hotelContainer'>
          <Row className="rowTitle">
            <Col xs={6} md={6}><h2>Hotels</h2></Col>
            <Col xs={6} md={6}><div className="seeAll" onClick={()=> this.toggle(this.props.toggle)}>See all >></div></Col>
          </Row>
    
          {this.props.hotels.hotels.map((hotel, index) => (
            <Col md={4}
              key={hotel.id}
              className={
                "pad"
                + ((index >= 3 && !this.props.toggle.hotels) ? " none" : "")
                + ((this.props.toggle.select === hotel.id)? " select" : "")
              }
              onClick={()=> {  this.clickHotel(hotel, this.props) }}
            >            
              <div className="event-card hotel">
                <img className="customImg" alt="" src={hotel.pictures[0]} />
                <div className='card-text'>
                    <div>
                       <span className="price">${hotel.price}</span>
                      {Array(Math.floor(hotel.rating)).fill(0).map((elem, i) =>
                        <span key={hotel.id + i} className="glyphicon glyphicon-star" />,
                      )}
                      <span className="glyphicons glyphicons-star" />
                    </div>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </div>
    );
  }
  }

const mapStateToProps = ({ hotels, destination, budget, toggle }) => ({
  hotels,
  destination,
  budget,
  toggle,
});
export default connect(mapStateToProps, { currentHotel, hotelBudget, hotelImage, toggleHotels, toggleSelect })(HotelEntry);
