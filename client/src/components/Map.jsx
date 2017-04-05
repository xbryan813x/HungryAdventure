import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const Map = ({ text }) => (
  <div className="mapsText">{text}</div>
)