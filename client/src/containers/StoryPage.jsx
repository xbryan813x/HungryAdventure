import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

class StoryPage extends Component {
  render() {
    console.log('STOREYPAGEEEEFELWE', this.props.locator);
    return (
      <div className="parallaxContainer">
        <section className="parallax">
          <h1 className="storyCity">{this.props.destination.city}</h1>
          <div className="infoContainer">
            {this.props.destination.country}
            <div>$ {this.props.destination.price}</div>
            {this.props.hotel ?
              <div>
                <div>$ {this.props.hotel.price}</div>
                <div>{this.props.hotel.hotel}</div>
              </div>
              : '' }
            {this.props.yelpEvents ?
              <div>
                {this.props.yelpEvents.map(event => <div key={event.name}>{event.name}</div>)}
              </div>
              : ''
            }
          </div>
          <div className="space" />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ current, geo }) => ({
  ...current,
  ...geo,
});

export default connect(mapStateToProps, null)(StoryPage);
