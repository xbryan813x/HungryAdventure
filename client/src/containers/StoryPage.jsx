import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import DonutChart from 'react-donut-chart';
import { Col, Button } from 'react-bootstrap';
import { googleMaps } from '../keys/mapsKey';
import { StoryPin } from '../components/Pins';
import { pinArray } from '../../utils/storyPageHelpers';

class StoryPage extends Component {
  render() {
    const budget = this.props.budget.original;
    const flightCost = this.props.budget.flight || 0;
    const hotelCost = this.props.budget.hotel || 0;
    const activityCost = this.props.budget.viatorEvents || 0;
    const foodCost = this.props.budget.yelpEvents || 0;
    const totalBudget = budget - flightCost - hotelCost - activityCost - foodCost;
    const mapArray = pinArray(this.props);
    return (
      <div className="parallaxContainer">
        <section className="parallax">
          <h1 className="storyCity">{this.props.destination.city}</h1>
          <div className="infoContainer">
            <div className="container">
              <Col md={8}>
                <div className="storyMap">
                  <GoogleMapReact
                    options={{ scrollwheel: false }}
                    defaultCenter={{
                      lat: this.props.locator.latitude,
                      lng: this.props.locator.longitude,
                    }}
                    defaultZoom={15}
                    bootstrapURLKeys={{ key: googleMaps() }}
                  >
                    {mapArray.map(elem =>
                      <StoryPin
                        lat={elem.lat || elem.coordinates.latitude}
                        lng={elem.lng || elem.coordinates.longitude}
                        text={elem.hotel || elem.name}
                        key={elem.id || elem.name}
                      />,
                )}
                  </GoogleMapReact>
                </div>
              </Col>
              <Col md={4}>
                <DonutChart
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
                  ]} height={200} width={200} legend={false} className="storyDonut"
                />
                <div>
                  {this.props.destination.country}
                  <div >
                    <Col xs={2}>${this.props.destination.price}</Col>
                    <Col xs={8}>{this.props.destination.IataCode}</Col>
                    <Col xs={2}><Button bsStyle="custom" bsSize="xsmall" href={this.props.destination.url} target="_blank">flight</Button></Col>
                  </div>
                  {this.props.hotel ?
                    <div>
                      <div>
                        <Col xs={2}>${this.props.hotel.price}</Col>
                        <Col xs={8}>{this.props.hotel.hotel}</Col>
                        <Col xs={2}><Button bsStyle="custom" bsSize="xsmall" href={this.props.hotel.url} target="_blank">airbnb</Button></Col>
                      </div>
                    </div>
                    : '' }
                  {this.props.yelpEvents ?
                    <div>
                      {this.props.yelpEvents.map(event =>
                        <div key={event.name}>
                          <Col xs={2}>({event.price})</Col>
                          <Col xs={8}>{event.name}</Col>
                          <Col xs={2}><Button bsStyle="custom" bsSize="xsmall" href={event.url} target="_blank">yelp</Button></Col>
                        </div>)}
                    </div>
                    : '' }
                  {this.props.viatorEvents ?
                    <div>
                      {this.props.viatorEvents.map(event =>
                        <div key={event.title}>
                          <Col xs={2}>${event.price}</Col>
                          <Col xs={8}>{event.title}</Col>
                          <Col xs={2}><Button bsStyle="custom" bsSize="xsmall" href={`https://www.viator.com/${event.url}`} target="_blank">viator</Button></Col>
                        </div>,
                        )}
                    </div>
                    : '' }
                </div>
              </Col>
            </div>
          </div>
          <div className="space" />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ current, geo, budget }) => ({
  ...current,
  ...geo,
  budget,
});

export default connect(mapStateToProps, null)(StoryPage);
