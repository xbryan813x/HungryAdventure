import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { fetchGeo } from '../actions/geoAction';
const  API = require('../keys/mapsKey.js');
import Pin from '../components/pin'

class GoogleMaps extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props)
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
            bootstrapURLKeys={{key: API.googleMaps()}}
            key={ this.props.locator.latitude } />
         <Pin />   
        </div>
      );
    }
  }
}

export default GoogleMaps
