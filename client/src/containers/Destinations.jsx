import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDestinations } from '../actions/destinationsActions';
import DestinationList from '../components/DestinationList';
import Search from './searchForm';
import { history } from 'react-router-dom'

class Destinations extends Component {

submit = (values) => {
  console.log('------>', values)
  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push('/flights');
   })

}
  render() {
    return (
      <div>
        <Search onSubmit={this.submit}/>
        <h1 className="title"> Hungry Adventure </h1>
        <DestinationList destinations={this.props.destinations} />
      </div>
    );
  }
}

const mapStateToProps = ({destinations}) => ({
  destinations: destinations,
});

export default connect(mapStateToProps, {fetchDestinations})(Destinations);
