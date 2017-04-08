import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import { fetchDestinations } from '../actions/destinationsAction';
import { getBudget } from '../actions/budgetAction';
import { PageHeader } from 'react-bootstrap';
//Reducer for react inputs
import { combineReducers } from 'redux';
//Imported Component
import Search from './searchForm';
import Auth from './FacebookAuth'

class Layout extends React.Component {

  // static propTypes = {
  //     destinations: PropTypes.array,
  //   }

  submit = (values) => {
    this.props.getBudget(values);
    this.props.fetchDestinations(values).then(() =>{
       this.props.history.push('/flights');
     })
  }

  render () {
     return ( <div>
      <center>
      <PageHeader className='pageHeaderBorder'> Hungry Adventure </PageHeader>
      <Search onSubmit={this.submit} />
      <Auth />
      </center>
      </div>
    );
  }
}

//Connects to store
const mapStateToProps = ({destinations, budget}) => ({
 destinations: destinations.destinations,
 budget,
})

export default connect(mapStateToProps, { fetchDestinations, getBudget })(Layout);
