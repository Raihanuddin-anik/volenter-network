import React, { useContext } from 'react';
import {
    Route,
    Redirect,
  } from "react-router-dom";
import { UserContext } from '../../App';
  
const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUSer, setloggedInUser]= useContext(UserContext)
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedInUSer.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;