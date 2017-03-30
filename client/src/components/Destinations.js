import React, { Component } from 'react';
import DummyList from './dummyData'

const Destinations = () => {
  let dummies = DummyList.map((dummy) => {
    return (
      <li key={dummy.id} >
        <img src={dummy.img_src} />
        <h3>{dummy.name}</h3>
      </li>
    );
  }); 
  
  return (
    <div>
        {dummies}    
    </div>
  );
}

export default Destinations;