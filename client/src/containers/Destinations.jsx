import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDestinations } from '../actions/destinationsActions';
import DestinationList from '../components/DestinationList'

class Destinations extends Component {

  select = () => {
    console.log(this.props.destinations)
  }

  render () {   
    return ( 
     <div>  
       {/*<NavBar />*/}
       <DestinationList destinations={this.props.destinations} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  destinations: state.destinations
})

export default connect(mapStateToProps)(Destinations);
