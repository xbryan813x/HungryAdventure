import React, { Component } from 'react';
import { connect } from 'react-redux';

//+++++ Imported Components


class destinationPage extends Component {

  render() {
    return (<div>
        {/*< HEADERIMG />*/}
        {/*< INFO Component />*/}
        {/*< Weather Component />*/}
        {/*< Map Component />*/}
        <h1> HELLO WORLD </h1>
        {this.props.price}
      </div>
    );
  }
}

const mapStateToProps = ({ price, arrivalDate, departureDate, originTerminal, city, country, IataCode, carrier, imageUrl }) => ({
  price : price,
  arrivalData: arrivalDate,
  departureDate: departureDate,
  originTerminal: originTerminal,
  city: city,
  country: country,
  IataCode: IataCode,
  carrier: carrier,
  imageUrl: imageUrl,
});

export default connect(mapStateToProps, null )(destinationPage);
