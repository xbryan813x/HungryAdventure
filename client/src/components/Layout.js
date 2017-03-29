import React from 'react';
import { connect } from 'react-redux'; // 

@connect((store) => {
  return {
  	user: store.user.user
  }
})//transpiling decorators (wrap components) --> inject props into layout without messing with layout component
export default class Layout extends React.Component {
  render () {
  	console.log('hi');
  	console.log(this.props);
    return null;
  }
}