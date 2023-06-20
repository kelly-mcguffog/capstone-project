// import logo from './logo.svg';
// import './App.css';
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Home from "./Home";


function App() {

  const {user} = useContext(UserContext)

    return (
      <>
          <NavBar/>
          <main>
            {user ? (
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
              </Switch>
            ) : (
              <Switch>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            )}
          </main>
      </>
    );
}

export default App;
