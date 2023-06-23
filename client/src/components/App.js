import React, { useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Home from "./Home";
import DestinationsContainer from "./DestinationsContainer";
import RestaurantsContainer from "./RestaurantsContainer";
import DestinationDetails from "./DestinationDetails";


function App() {

  const {user} = useContext(UserContext)
  const [search, setSearch] = useState("")

    return (
          <main>
            {user ? (
              <>
              <NavBar />
              <Switch>
              <Route exact path="/destinations/:id/restaurants">
                  <RestaurantsContainer />
              </Route>
              <Route exact path="/destinations/:id">
                  <DestinationDetails />
                </Route>
                <Route exact path="/destinations">
                  <DestinationsContainer search={search} setSearch={setSearch}/>
                </Route>
                <Route exact path="/">
                  <Home/>
                </Route>
              </Switch>
              </>
            ) : (
              <Switch>
                <Route path="/destinations/:id/restaurants">
                  <RestaurantsContainer />
                </Route>
                <Route exact path="/destinations/:id">
                  <DestinationDetails />
                </Route>
                <Route exact path="/destinations">
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
