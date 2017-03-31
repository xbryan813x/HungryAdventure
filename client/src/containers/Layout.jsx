import React from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import { fetchUser } from '../actions/userAction';
import { fetchDestinations } from '../actions/destinationsActions';

//Imported Component
import ContactFrom from '../components/searchForm';

class Layout extends React.Component {
  //Loads Immediately
  componentWillMount(){
  	this.props.fetchUser()
  }

 fetchDestinations = () => {
  	this.props.fetchDestinations()
  }

  submit = (values) => {
    console.log('hello');
  }

  render () {
  	const { destinations } = this.props;
     return <ContactFrom onSubmit={this.submit} />
  }
}

//Connects to store
const mapStateToProps = ({destinations, user}) => ({
 user: user.user,
 userFetched: user.fetched,
 destinations: destinations.destinations
})

export default connect(mapStateToProps, {fetchUser, fetchDestinations})(Layout);
