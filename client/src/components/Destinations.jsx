import React, { Component } from 'react';
import dummyData from './dummyData'

export default class Destinations extends Component {

  render() {

    const dumnies = dummyData.map((dummy) => (
     <div>
      <div>{dummy.arrivalDate}</div>
      <div>{dummy.depatureDate}</div>
      <div>{dummy.location}</div>
      <div>{dummy.carrier}</div>
      <img src={dummy.imageUrl} />
    </div>
    ))

    return (
      <div className ="place">
        {dumnies}
      </div>
    )
  }
}
