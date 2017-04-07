import React from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
//process.env.FB_CLIENT_ID

//Imported Component
import Search from './searchForm';
import FacebookLogin, {componentClicked} from 'react-facebook-login';

class FacebookAuth extends React.Component {

  constructor (props){
    super(props);
  }

responseFacebook = (response) => {
  console.log(response);
}

  render () {
     return (<div>
      <h1> HELLO WORLD </h1>
      <FacebookLogin
       appId='process.env.FB_CLIENT_ID'
       autoLoad={true}
       fields="name,email,picture"
       onClick={componentClicked}
       callback={this.responseFacebook}
       icon="fa-facebook" />

       </div>
     );
  }
}

//Connects to store
const mapStateToProps = (state) => ({

});

export default connect(null, null)(FacebookAuth);