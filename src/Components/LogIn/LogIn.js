import React, { useContext, useState } from 'react';
import './LogIn.css';
import { Button, Card, CardActionArea, CardMedia, CardActions,CardContent } from '@material-ui/core';
import firebase from "firebase/app";
import { makeStyles } from '@material-ui/core/styles';
import "firebase/auth";
import firebaseConfig from '../firebasae.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
  btn: {
    margin: 'auto'
   
  }
});

const LogIn = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext)
  const classes = useStyles();
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
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <img className="img" src="https://i.ibb.co/RvFtmYB/Group-1329.png" alt="" />
        </CardMedia>
      </CardActionArea>
      <CardActions >
        <Button className={classes.btn}
          
          onClick={SingInWithGooglePopUP}
          size="small"
          variant="contained"
          color="secondary"

        > Continue With Google</Button>
       </CardActions>   
<CardContent>
        <p> Already have an Account? Continue With us</p>
</CardContent>
    </Card>
  );
};

export default LogIn;