import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMaps from './GoogleMaps'
//+++++ Imported Components


class destinationPage extends Component {

  constructor (props){
  super(props);
}

  render() {
    console.log('*******************', this.props)
    return (<div>
        <h1> HELLO WORLD </h1>
        <GoogleMaps locator={this.props.geo.locator}/>
        {/*< HEADERIMG />*/}
        {/*< INFO Component />*/}
        {/*< Weather Component />*/}
        {/*< Map Component />*/}
        <h1>{this.props.destination.price}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, null )(destinationPage);
