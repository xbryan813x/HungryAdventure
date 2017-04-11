import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import { fetchDestinations } from '../actions/destinationsAction';
import { getBudget } from '../actions/budgetAction';
import { PageHeader } from 'react-bootstrap';
import { AppBar, AppBarMenu, FlatButton } from 'material-ui';
import { saveSearchQuery } from '../actions/saveSearchQueryAction';

//Reducer for react inputs
import { combineReducers } from 'redux';
//Imported Component
import Search from './searchForm';
import Auth from './FacebookAuth'

class Layout extends React.Component {

  submit = (values) => {
  let saveQueryObj = {
    email: this.props.email || 'none',
    budget: values.Budget,
    startDate: values.departDate,
    endDate: values.arrivalDate,
  }

    this.props.getBudget(values);
    this.props.fetchDestinations(values)
      .then(() =>{
        this.props.saveSearchQuery(saveQueryObj)  
      })
      .then(() =>{
        this.props.history.push('/flights');
      })
  }

  render () {
     return (
      <div>
        <div className='navlog'>
          <Auth />
        </div>
        <center>
          <div style={{ marginTop: '175px' }}>
          <h1> HUNGRY ADVENTURE </h1>
          <br></br>
          <br></br>
            <Search onSubmit={this.submit} />
            
          </div>
        </center>
      </div>
    );
  }
}

//Connects to store
const mapStateToProps = ({destinations, budget, profile}) => ({
 destinations: destinations.destinations,
 budget,
 ...profile,
})

export default connect(mapStateToProps, { fetchDestinations, getBudget, saveSearchQuery })(Layout);
