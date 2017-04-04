import React, { Component } from 'react';
import { Col, Carousel } from 'react-bootstrap';


 
 let handleSelect = () => {
  console.log('HELLO!!!!');
 }

const DestinationEntry = ({ destination }) => {
 

  const airport = Object.keys(destination).toString();
  return (
    <Col className="" sm={6} md={4} >
      <div className="tile">
        <div>
          <Carousel className="flight" direction={null}>
            {destination[airport].imageUrl.map((image, i) => (
              <Carousel.Item className="flightimg" key={destination[airport].imageUrl[i]} onselect={handleSelect}>
                <img className="flightimg" alt="" src={destination[airport].imageUrl[i]}  onselect={()=>{handleSelect}} />
              </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div>
          <div>
            <div className="col-xs-10 left">
              <span className="icon glyphicon glyphicon-plane" />
              <span className="bold"> {destination[airport].location} </span>
              ||
              <span> {destination[airport].destinationTerminal}</span>
            </div>
            <div className="col-xs-2 right">${destination[airport].price}</div>
          </div>
          <div>
            {destination[airport].arrivalDate} through {destination[airport].departureDate}
          </div>
          <div>
            <span>{destination[airport].carrier}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

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