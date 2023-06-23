import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
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
              <Routes>
                <Route exact path="/destinations/:id/restaurants" element={<RestaurantsContainer />}>
                </Route>
                <Route  path="/destinations/:id" element={<DestinationDetails />}>
                </Route>
                <Route  path="/destinations" element={<DestinationsContainer search={search} setSearch={setSearch}/>}>
                </Route>
                <Route exact path="/" element={<Home/>}>
                </Route>
              </Routes>
              </>
             ) : (
               <Routes>
                 <Route exact path="/destinations/:id/restaurants" element={<RestaurantsContainer />}>
                 </Route>
                 <Route  path="/destinations/:id" element={<DestinationDetails />}>
                 </Route>
                 <Route  path="/destinations" element={<DestinationsContainer search={search} setSearch={setSearch}/>}>
                 </Route>
                 <Route path="/signup" element={<SignUp />}>
                 </Route>
                 <Route path="/login" element={<Login />}>
                 </Route>
               </Routes>
            )}
          </main>
    );
}

export default App;
