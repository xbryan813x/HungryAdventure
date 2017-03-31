import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { fetchUser } from '../actions/userAction';
import { fetchDestinations } from '../actions/destinationsActions';

import ContactFrom from './searchForm';

@connect((store) => {
  return {
  	user: store.user.user,
  	userFetched: store.user.fetched,
  	destinations: store.destinations.destinations,
  }
})
//transpiling decorators (wrap components) --> inject props into layout without messing with layout component
export default class Layout extends React.Component {
  //Loads Immediately
  componentWillMount(){
  	this.props.dispatch(fetchUser())
  }

 fetchDestinations(){
  	this.props.dispatch(fetchDestinations())
  }

  submit = (values) => {
    console.log(values)
  }

  render () {
  	const { user, destinations } = this.props;
    
  	if(!destinations.length) {
  		return <div>
      <button onClick={ this.fetchDestinations.bind(this) }>load destinations</button>
      <ContactFrom onSubmit={this.submit} />
      <Link to='/work'>Link</Link>
      <Link to='/test'>Link</Link>
      </div>

  	} else {
      const mappedDestinations = destinations.map(destination => <li>{destination.text}</li>)


      return <div>
      
      <h1> {user.name} </h1>
        <ul>{mappedDestinations}</ul>
      </div>
    }
  }
}
