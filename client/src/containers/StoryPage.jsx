import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryPage extends Component {


  render() {
     console.log(this.props);
    return (
      <div>
        <div>{this.props.destination.city}</div>
        <div>{this.props.destination.country}</div>
        <div>$ {this.props.destination.price}</div>
        <div>{this.props.hotel.hotel}</div>
        <div>$ {this.props.hotel.price}</div>
        {this.props.events.map((event, i)=> {
          return <div key={i}>{event.name}</div>
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ current }) => ({
  ...current
});

export default connect(mapStateToProps, null)(StoryPage);
