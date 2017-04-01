//+++++ REACT SPECIFIC/REDUX
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';

//+++++ STYLES
// import Col from 'react-bootstrap/lib/Col';
// import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

//+++++ PLUGIN
import { Field, reduxForm } from 'redux-form';
import DateTimePicker from '../../../node_modules/react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from '../../../node_modules/react-widgets/lib/localizers/moment';
momentLocaliser(moment);

//+++++ COMPONENTS

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />


class searchForm extends Component {
  
  render () {
  	const { handleSubmit, pristine, reset, submitting } = this.props;
    return (<div>
      <PageHeader> Hungry Adventure </PageHeader>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='Budget'>Budget </label>
          <Field name='Budget' component='input' type='text'/>
        </div>
        <div>
          <label htmlFor='departDate'>Departure Time</label>
          <Field name="departDate" showTime={false} component={renderDateTimePicker} type='text'/>
        </div>
        <div>
          <label htmlFor='arrivalDate'>Arrival Time</label>
          <Field name="arrivalDate" showTime={false} component={renderDateTimePicker} type='text'/>
        </div>
         <div>
           <button type="submit" disabled={pristine || submitting}> Submit  </button>
           <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values</button>
       </div>
      </form>
      </div>
    );
  }
}

searchForm = reduxForm({
  form: 'search',  // a unique identifier for this form
})(searchForm);

// (state, action,)
export default connect (null, null)(searchForm);

