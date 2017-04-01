import React from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import { fetchUser } from '../actions/userAction';
import { fetchDestinations } from '../actions/destinationsActions';

//Imported Component
import Search from './searchForm';

class Layout extends React.Component {


// fetchDestination = () => {
//   this.props.fetchDestinations()
// }

submit = (values) => {
  console.log('------>', values)
  console.log('++++++++++',this.props.fetchDestinations(values))




}

  render () {
     return (
      <Search onSubmit={this.submit} />
      );
  }
}

//Connects to store
const mapStateToProps = ({destinations, user}) => ({
 user: user.user,
 userFetched: user.fetched,
 destinations: destinations.destinations
})

export default connect(mapStateToProps, {fetchUser, fetchDestinations})(Layout);
