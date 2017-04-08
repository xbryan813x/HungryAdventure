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

  componentWillMount () {

    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1889680274620799";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

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