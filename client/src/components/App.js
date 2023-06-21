// import logo from './logo.svg';
// import './App.css';
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Home from "./Home";
import DestinationsContainer from "./DestinationsContainer";


function App() {

  const {user} = useContext(UserContext)

    return (
          <main>
            {user ? (
              <>
              <NavBar/>
              <Switch>
                <Route path="/destinations">
                  <DestinationsContainer />
                </Route>
                <Route exact path="/">
                  <Home/>
                </Route>
              </Switch>
              </>
            ) : (
              <Switch>
                <Route path="/destinations">
                  <DestinationsContainer />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            )}
          </main>
    );
}

export default App;
