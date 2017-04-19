import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import shallowCompare from 'react-addons-shallow-compare';

import { MyGreatPlaceWithStick } from '../../utils/markerPins';

import { HotelPin } from '../components/Pins';
import { googleMaps } from '../keys/mapsKey';

class GoogleMaps extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  _distanceToMouse = (markerPos, mousePos, markerProps) => {
    console.log(markerPos)
    const x = markerPos.x;
    const y = markerPos.y - 15 - 30 / 2;
    const distanceKoef = markerProps.text !== 'A' ? 1.5 : 1;
    return distanceKoef * Math.sqrt((x - mousePos.x) * (x - mousePos.x) + (y - mousePos.y) * (y - mousePos.y));
  }

  render() {
    if (this.props.locator === undefined || this.props.hotels === undefined) {
      return (
        <div>loading</div>
      );
    }
    return (
        <GoogleMapReact
          options={{ scrollwheel: false }}
          defaultCenter={{ lat: this.props.geo.locator.latitude, lng: this.props.geo.locator.longitude }}
          defaultZoom={12}
          bootstrapURLKeys={{ key: googleMaps() }}
          hoverDistance={15}
          distanceToMouse={this._distanceToMouse}
        >
          {this.props.hotelsArr.map((hotel, index) =>
            <HotelPin
              lat={hotel.lat} lng={hotel.lng} key={index} price={hotel.price}
            />,
        )}
        </GoogleMapReact>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(GoogleMaps);
