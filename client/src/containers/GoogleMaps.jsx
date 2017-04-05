import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { fetchGeo } from '../actions/geoAction';
const  API = require('../keys/mapsKey.js');

const AnyReactComponent = ({ text }) => <div className="mapsText">{text}</div>;

class GoogleMaps extends Component {
  constructor(props) {
    super(props)
    // console.log('**************', this.props)
  }

   componentWillMount() {
    this.props.fetchGeo({location: 'new york'})
    //  console.log('------------', this.props)
  };

  static defaultProps = {
    center: {lat: 40.7127837, lng: -74.0059413},
    zoom: 15
  };
  render() {
    console.log('THIS IS IT', this.props.locator.city)
    return (
  
      <div className="maps">

      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{key: API.googleMaps()}}
      >
        <AnyReactComponent
          lat={40.714392}
          lng={-74.006649}
          text={'THIS IS YOUR PLACE'}
        />

      </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = ({ geo }) => ({
  ...geo
});

export default connect(mapStateToProps, { fetchGeo })(GoogleMaps)

