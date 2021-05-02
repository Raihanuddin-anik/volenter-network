import React, { useContext } from 'react';
import './LogIn.css';
import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from '../firebasae.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}



const LogIn = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext)

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  var provider = new firebase.auth.GoogleAuthProvider();


  const SingInWithGooglePopUP = () => {

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        const loggedUser = {
          name: user.displayName,
          email: user.email,

        }

        setloggedInUser(loggedUser)
        verifyIdToken()
        history.replace(from)

        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
  const verifyIdToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('idToken', idToken)
        // Send token to your backend via HTTPS
        // ...
      }).catch(function (error) {
        // Handle error
      });
  }

  
  
  return (
    <div>
      <div className="ms-auto me-auto" style={{ width: '28rem',height:"100px" }}>
      
        <img className="img" src="https://i.ibb.co/RvFtmYB/Group-1329.png" alt="" />
        
      </div>
      
    <Card className="ms-auto me-auto" style={{ width: '28rem',height:"200px" }}>
   
        <Button 
          className="mt-5 ms-5 btn-primary w-75"
          onClick={SingInWithGooglePopUP}
          size="small"
          variant="contained"
          color="secondary"

        > Continue With Google</Button>
       <p>Don't have Account? </p>
    
    </Card>
    </div>
  );
};

export default LogIn;