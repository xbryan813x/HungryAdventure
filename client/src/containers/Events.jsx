import React, { Component } from 'react';
import { fetchEvents } from '../actions/eventsAction';
import { connect } from 'react-redux';
import Event from '../components/Event';
import GoogleMaps from './GoogleMaps'
import Pin from '../components/pin'

class Events extends Component {
  // constructor (props){
  //   super(props);
  // }
  
  render() {
    console.log(this.props)
    return(
      <div>
        <GoogleMaps locator={this.props.geo.locator}/>
        {this.props.eventsArr.events.map((event, index) => <Event event={event} key={index} /> )}
    </div>
    );
  }
}

const mapStateToProps = ({ events, geo }) => ({
  eventsArr: events,
  geo: geo
});

export default connect(mapStateToProps, { fetchEvents })(Events);