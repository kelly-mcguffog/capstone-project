import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Home from "./Home";
import HotelsContainer from "./HotelsContainer";
import ActivitiesContainer from "./ActivitiesContainer";
import Profile from "./Profile";
import NewTrip from "./NewTrip";
import AddHotelToItinerary from "./AddHotelToItinerary";
import AddRestaurantToItinerary from "./AddRestaurantToItinerary";
import RestaurantsContainer from "./RestaurantsContainer";
import AddActivityToItinerary from "./AddActivityToItinerary";
import TripID from "./TripID";
import TripDetails from "./TripDetails";


function App() {

  const {user} = useContext(UserContext)
  const [search, setSearch] = useState("")

  
    return (
          <main>
            {user ? (
              <>
              <NavBar />
              <Routes>
                <Route  exact path="/destinations/:destination_id/trips/:trip_id/hotels/:id" element={<AddHotelToItinerary />}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:trip_id/activities/:id" element={<AddActivityToItinerary />}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:trip_id/restaurants/:id" element={<AddRestaurantToItinerary />}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:id/hotels" element={<HotelsContainer search={search} setSearch={setSearch}/>}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:id/activities" element={<ActivitiesContainer search={search} setSearch={setSearch}/>}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:id/restaurants" element={<RestaurantsContainer search={search} setSearch={setSearch}/>}>
                </Route>
                <Route  path="/destinations/:id/trips" element={<NewTrip />}>
                </Route>

                <Route  path="/users/:user_id/trips/:id" element={<TripDetails />}>
                </Route>

                <Route exact path="/users/:user_id/trips" element={<Profile />}>
                </Route>
                <Route exact path="/" element={<Home search={search} setSearch={setSearch}/>}>
                </Route>
              </Routes>
              </>
             ) : (
               <Routes>
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
