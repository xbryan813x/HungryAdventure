import React, { Component } from 'react';
import { Col, Carousel } from 'react-bootstrap';

const handleSelect = () => {
  console.log('HELLO!!!!');
};

const DestinationEntry = ({ destination }) => (
  <Col className="" sm={6} md={4} >
    <div className="tile">
      <div>
        <Carousel className="flight" direction={null}>
          {destination.imageUrl.map((image, i) => (
            <Carousel.Item className="flightimg" key={destination.imageUrl[i]} onSelect={handleSelect}>
              <img className="flightimg" alt="" src={destination.imageUrl[i]} onSelect={() => { handleSelect; }} />
            </Carousel.Item>
              ))}
        </Carousel>
      </div>
      <div>
        <div>
          <div className="col-xs-10 left">
            <span className="icon glyphicon glyphicon-plane" />
            <span className="bold"> {destination.city} </span>
              ||
              <span> {destination.IataCode}</span>
          </div>
          <div className="col-xs-2 right">${destination.price}</div>
        </div>
        <div>
          {destination.arrivalDate} through {destination.departureDate}
        </div>
        <div>
          <span>{destination.carrier}</span>
        </div>
      </div>
    </div>
  </Col>
  );

export default DestinationEntry;

/*

const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    alert('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
});

ReactDOM.render(<ControlledCarousel />, mountNode);

*/
