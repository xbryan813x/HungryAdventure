import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryPage extends Component {


  render() {
    if (!this.props.hotel) {
      return (
        <div>
          <img className="storyBackground" src={this.props.destination.imageUrl[0]} />
          <div >{this.props.destination.city}</div>
          <div>{this.props.destination.country}</div>
          <div>$ {this.props.destination.price}</div>
          {this.props.events.map((event, i) => <div key={i}>{event.name}</div>)}
        </div>
      );
    } else if (!this.props.events) {
      return (
        <div>
          <img className="storyBackground" src={this.props.destination.imageUrl[0]} />
          <div >{this.props.destination.city}</div>
          <div>{this.props.destination.country}</div>
          <div>$ {this.props.destination.price}</div>
          <div>{this.props.hotel.hotel}</div>
          <div>$ {this.props.hotel.price}</div>
        </div>
      );
    } else if (!this.props.event && !this.props.hotel) {
      <div>
          <div >{this.props.destination.city}</div>
          <div>{this.props.destination.country}</div>
          <div>$ {this.props.destination.price}</div>
        </div>;
    }
    return (
      <div>
        <img className="storyBackground" src={this.props.destination.imageUrl[0]} />
        <div >{this.props.destination.city}</div>
        <div>{this.props.destination.country}</div>
        <div>$ {this.props.destination.price}</div>
        <div>{this.props.hotel.hotel}</div>
        <div>$ {this.props.hotel.price}</div>
        {this.props.events.map((event, i) => <div key={i}>{event.name}</div>)}
      </div>
    );
  }
}

const mapStateToProps = ({ current }) => ({
  ...current,
});

export default connect(mapStateToProps, null)(StoryPage);
