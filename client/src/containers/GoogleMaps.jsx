import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { fetchGeo } from '../actions/geoAction';
const API = require('../keys/mapsKey.js');

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.locator === undefined) {
      return (
        <div>loading</div>
<<<<<<< HEAD
=======
      )
    } else {
      return (
        <div className="maps">
          <GoogleMapReact
            defaultCenter={ {lat: this.props.locator.latitude, lng: this.props.locator.longitude} }
            defaultZoom={13}
            bootstrapURLKeys={{key: API.googleMaps()}}
            key={ this.props.locator.latitude } />
        </div>
>>>>>>> yelp component
      );
    }
    return (
      <div className="map">
        <GoogleMapReact
          defaultCenter={{ lat: this.props.locator.latitude, lng: this.props.locator.longitude }}
          defaultZoom={13}
          bootstrapURLKeys={{ key: API.googleMaps() }}
          key={this.props.locator.latitude}
        />
      </div>
    );
  }
}

export default GoogleMaps;
