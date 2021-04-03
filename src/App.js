import './App.css';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/Navbar'
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
import Volenters from './Components/Volenters/Volenters';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  return (


    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <NavBar></NavBar>
            <MainPage></MainPage>
          </Route>
          <PrivateRoute path="/registation/:id">
            <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/volenters">
            <NavBar></NavBar>
            <Volenters></Volenters>
          </Route>
          <Route exact path="/">
            <NavBar></NavBar>
            <MainPage></MainPage>
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
