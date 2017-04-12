import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViatorEvent from '../components/ViatorEvent'

class ViatorEvents extends Component {
  render() {
    return (
      <div>
        {this.props.events.map((event, i) => <ViatorEvent event={event} key={i}/> )}
      </div>
    );
  }
}

const mapStateToProps = ({ viator }) => ({
  ...viator,
});

export default connect(mapStateToProps, null)(ViatorEvents)