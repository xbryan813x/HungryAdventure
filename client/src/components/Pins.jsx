import React from 'react';

const HotelPin = props => (
  <div className="fa fa-home" style={{ fontSize: '24px', color: '#f05f40' }} />
    );

const YelpPin = props => (
  <div className="fa fa-cutlery" style={{ fontSize: '24px', color: 'blue' }} />
    );

const StoryPin = props => (
  <div className="pin"><span className="glyphicon glyphicon-pushpin" />{props.text}</div>
    );

export { HotelPin, YelpPin, StoryPin };
