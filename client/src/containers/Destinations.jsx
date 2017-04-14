import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDestinations } from '../actions/destinationsAction';
import DestinationList from '../components/DestinationList';
import Search from './searchForm';
import { saveSearchQuery } from '../actions/saveSearchQueryAction'
import Auth from './FacebookAuth'
import { reset } from '../actions/resetState'
import { getBudget, resetBudget } from '../actions/budgetAction'



class Destinations extends Component {

componentWillMount() {
  this.props.resetBudget();
}

submit = (values) => {
  this.props.getBudget(values)
  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push('/flights');
   })
}
  render() {
    return (

      <div>
        <Search onSubmit={this.submit}/>
        <Auth />
        <div className='pageFrame'>
       
      
        {/*<h1>Budget: {this.props.budget.original}</h1>*/}
        <DestinationList destinations={this.props.destinations} redirect={(url)=>{this.props.history.push(url)}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({destinations, budget}) => ({
  destinations,
  budget,
});

export default connect(mapStateToProps, { fetchDestinations, saveSearchQuery, reset, getBudget, resetBudget })(Destinations);
