import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { fetchGeo } from '../actions/geoAction';
import Maps from '../components/Map'
const  API = require('../keys/mapsKey.js');

class GoogleMaps extends Component {


  componentDidMount() {
    this.props.fetchGeo({location: 'boston'})
    //  console.log('------------', this.props)
  }

  static defaultProps = {
    center: {lat: 40.7127837, lng: -74.0059413},
    zoom: 14
  }
  
  render() {
    console.log('WHAAA', this.props.locator)
    return (
      <div className="maps">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{key: API.googleMaps()}} />
      </div>
    );
  }
}

const mapStateToProps = ({ geo }) => ({
  ...geo
});

export default connect(mapStateToProps, { fetchGeo })(GoogleMaps)

