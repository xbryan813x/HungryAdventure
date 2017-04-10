import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Media, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import Pin from './pin';
import GoogleMaps from '../containers/GoogleMaps';
import { currentEvents } from '../actions/currentState';

class Event extends Component {
  constructor(props){
    super(props)
  }

  add = (event) => {
    this.props.currentEvents({event: event})
  }

  render(){
    return(
      <div className="eventContainer">
        <button onClick={ () => this.add(this.props.event) }>Add</button>
        <Media>
          <Col xs={12} md={8}>
              <Media.Left >
                <img width={84} height={84} src={this.props.event.image_url} />
              </Media.Left>
              <Media.Body>
                <h4><a href={this.props.event.url}>{this.props.event.name}</a></h4>
                <StarRatingComponent 
                    name="rating" 
                    editing={false}
                    starCount={5}
                    value={this.props.event.rating} 
                    />
                <div>{this.props.event.categories[0].title}</div>
              </Media.Body>
          </Col>
          <Col xs={6} md={4}>
            <div>{this.props.event.location.city}</div>
            <div>{this.props.event.location.display_address[0]}</div>
          </Col>
        </Media>
        <hr></hr>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps, { currentEvents })(Event);
