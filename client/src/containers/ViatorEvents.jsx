import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViatorEvents extends Component {
  render() {
    console.log(this.props)
    return (
    <div>hey</div>
    )
  }
}

const mapStateToProps = ({ viator }) => ({
  ...viator,
})

export default connect(mapStateToProps, null)(ViatorEvents)