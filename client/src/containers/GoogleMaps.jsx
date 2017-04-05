import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { fetchGeo } from '../actions/geoAction';
const  API = require('../mapKey.js');

class GoogleMaps extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    if (this.props.locator === undefined) {
      return (
        <div>loading</div>
      )
    } else {
      return (
        <div className="maps">
          <GoogleMapReact
            defaultCenter={ {lat: this.props.locator.latitude, lng: this.props.locator.longitude} }
            defaultZoom={13}
            bootstrapURLKeys={{key: API.googleMaps()}} />
        </div>
      );
    }
  }
}

export default GoogleMaps
