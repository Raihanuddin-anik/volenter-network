import './App.css';


import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import LogIn from './Components/LogIn/LogIn';
import { createContext, useState } from 'react';
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home';
import RegistedVolenter from './Components/RegistedVolenter/RegistedVolenter';
import Admin from './Components/Admin/Admin/Admin';




export const UserContext = createContext();


function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  return (


    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
             <Home></Home>
          </Route>
          <PrivateRoute path="/registation/:id">
            <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/volenters">
        <RegistedVolenter></RegistedVolenter>
          </Route>
          <Route exact path="/admin">
             <Admin></Admin>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
             <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>



  );
}

export default App;
