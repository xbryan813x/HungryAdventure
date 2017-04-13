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
          <div className="col-lg-4 col-sm-6" className={ ((index >= 3 && !this.props.toggle.hotels) ? "none" : "") }  key={hotel.id} onClick={()=> { this.add(hotel, this.props) }}>
            <div className="portfolio-box">
              <img className="img-responsive customImg" alt="" src={hotel.pictures[0]} />
              <div className='portfolio-box-caption'>
                <div className='portfolio-box-caption-content'>
                <div className="project-category text-faded">
                  {Array(Math.floor(hotel.rating)).fill(0).map((elem, i) =>
                    <span key={hotel.id + i} className="glyphicon glyphicon-star" />,
                  )}
                  <span className="glyphicons glyphicons-star" />
                </div>
                <div className='project-name'>
                  ${hotel.price}
                </div>
                </div>
              </div>
              </div>
          </div>
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
