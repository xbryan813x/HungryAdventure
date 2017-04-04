import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './searchForm';

class Destinations extends Component {

submit = (values) => {
  console.log('------>', values)
  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push('/flights');
   })
}
  render() {
    console.log(this.props.destinations);
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
