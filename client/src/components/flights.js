import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DropdownList from '../../../node_modules/react-widgets/lib/DropdownList';
import DateTimePicker from '../../../node_modules/react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from '../../../node_modules/react-widgets/lib/localizers/moment';

import { Col } from 'react-bootstrap';
// import '../../../node_modules/react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment);


let mappedDestinations = (props) => {

};

mappedDestinations = reduxForm({
  form: 'reactWidgets',  // a unique identifier for this form
})(mappedDestinations);

// (state, action,)
export default connect(null, null)(mappedDestinations);
