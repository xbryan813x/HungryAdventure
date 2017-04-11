import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

class budgetBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div style={{ width: '70%' }}>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
        <Col
          md={2} style={{
            height: '50px',
            margin: '0',
            padding: '0',
          }}
        >
          <div
            className="upper"
            style={{
              borderBottom: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
          <div
            className="lower" style={{
              borderTop: 'medium solid black',
              width: '100%',
              height: '100%',
            }}
          />
        </Col>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(budgetBar);
