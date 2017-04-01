//+++++ REACT SPECIFIC/REDUX
import React from 'react';
import {connect} from 'react-redux';

//+++++ STYLES
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

//+++++ PLUGIN
import { Field, reduxForm } from 'redux-form';
import DateTimePicker from '../../../node_modules/react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from '../../../node_modules/react-widgets/lib/localizers/moment';
momentLocaliser(moment);

//+++++ COMPONENTS



const colors = [ { color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' } ]


const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />

let ReactWidgetsForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (<div>
  	<PageHeader> Hungry Adventure </PageHeader>

  	<form onSubmit={handleSubmit}>  	
      <Row>
        <Col sm={4}>
         <label htmlFor="budget">Budget</label>
         <Field name="budget" component="input" type="text"/>
        </Col>
        <Col sm={6}>
          <label>Start Date</label>
          <Field name="start_date" showTime={false} component={renderDateTimePicker}/>
        </Col>
      </Row>
   
        

        <label>Arrival Date</label>
        <Field name="arrival_date" showTime={false} component={renderDateTimePicker}/>


      <div>
        <button type="submit" disabled={pristine || submitting}> Submit </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  </div>)
}

ReactWidgetsForm = reduxForm({
  form: 'reactWidgets'  // a unique identifier for this form
})(ReactWidgetsForm)

// (state, action,)
export default connect (null, null)(ReactWidgetsForm)

