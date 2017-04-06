import React, { Component } from 'react';
import { fetchEvents } from '../actions/eventsAction';
import { connect } from 'react-redux';
import Event from '../components/Event';

class Events extends Component {
  constructor (props){
    super(props);
  }
  
  render() {
    return(
      <div>
        {this.props.eventsArr.events.map((event, index) => 
          <Event event={event} key={index} />
        )}
    </div>
    );
  }
}

const mapStateToProps = ({ events }) => ({
  eventsArr: events,
});

export default connect(mapStateToProps, { fetchEvents })(Events);