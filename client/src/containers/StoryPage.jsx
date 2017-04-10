import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryPage extends Component {

  render() {
    console.log(this.props);
    return (
      <div>hello</div>
    );
  }
}

const mapStateToProps = ({ current }) => ({
  info: current,
});

export default connect(mapStateToProps, null)(StoryPage);
