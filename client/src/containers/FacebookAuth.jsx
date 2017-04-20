import React from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import queryDB from '../actions/facebookAction'
//process.env.FB_CLIENT_ID

//Imported Component
import Search from './searchForm';
import FacebookLogin, {componentClicked} from '../components/facebookLoginIcon';

class FacebookAuth extends React.Component {

  constructor (props){
    super(props);
  }

  componentWillMount () {

  //Load Facebook SDK
    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1889680274620799";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

responseFacebook = (response) => {
  this.props.queryDB(response);
}

// loadHotel = () => {
// if(this.props.hotel.pictures)
// return <img className='circleImg' src={this.props.hotel.pictures[0]}></img>
// }

// loadEvents = () => {
// if(this.props.viatorEvents.length > 0) {
//   console.log('VIATOR', this.props.viatorEvents)
//   return (
//     this.props.viatorEvents.forEach(item => (
//       <img className='circleImg' src={item.image}></img>
//     ))
    
//     )
// }
// }

// loadFood = () => {
// if(this.props.yelpEvents > 0)
// return <img className='circleImg' src={this.props.yelpEvents[0].image_url}></img>
// }

// loadDestination = () => {
// if(this.props.destination)
// return <img className='circleImg' src={this.props.destination.image_Url[0]}></img>
// }


  render () {
    if(this.props.fbpicture === undefined){
      return (<div className='facebookButton'>
        <FacebookLogin
       appId='process.env.FB_CLIENT_ID'
       autoLoad={true}
       fields="name,email,picture"
       onClick={componentClicked}
       callback={this.responseFacebook}
       icon="fa-facebook" /></div>)
    } else {
     return (<div>
       <img className='user' src={this.props.fbpicture}></img>
      </div>
     );
   }
  }
}

//Connects to store
const mapStateToProps = ({profile, current}) => ({
...profile,
...current
});

export default connect(mapStateToProps, {queryDB})(FacebookAuth);
