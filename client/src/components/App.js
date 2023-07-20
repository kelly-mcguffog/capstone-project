import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
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
import TripDetails from "./TripDetails";
import PackingListContainer from "./PackingListContainer";
import HotelDetails from "./HotelDetails";
import RestaurantDetails from "./RestaurantDetails";
import ActivityDetails from "./ActivityDetails";
import EditProfileForm from "./EditProfileForm";


function App() {

  const { user, setUser } = useContext(UserContext)
  const [search, setSearch] = useState("")
  const [activities, setActivities] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [hotels, setHotels] = useState([])
  const match1 = useMatch("/users/:user_id/trips");
  const match2 = useMatch("/users/:user_id/trips/:id");
  const match3 = useMatch("/trips/:id/packing_list");
  const match4 = useMatch("/users/:user_id/profile")
  const match = match1 || match2 || match3 || match4;

  useEffect(() => {
    fetch("/activities")
      .then(res => res.json())
      .then(data => setActivities(data))
  }, [])

  useEffect(() => {
    fetch("/restaurants")
      .then(res => res.json())
      .then(data => setRestaurants(data))
  }, [])

  useEffect(() => {
    fetch("/hotels")
      .then(res => res.json())
      .then(data => setHotels(data))
  }, [])

  const onAddItinerary = (newItinerary) => {
    const { trip_id, date, combined_itinerary_times } = newItinerary;

    setUser((prevUser) => {
      const updatedUser = {
        ...prevUser,
        trips: prevUser.trips.map((trip) => {
          if (trip.id === trip_id) {
            const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
              if (itineraryDay.date === date) {
                const existingTimesIds = itineraryDay.combined_itinerary_times.map((time) => time.id);
                const newTimes = combined_itinerary_times.filter((time) => !existingTimesIds.includes(time.id));
                const updatedCombinedItineraryTimes = [...itineraryDay.combined_itinerary_times, ...newTimes];

                return { ...itineraryDay, combined_itinerary_times: updatedCombinedItineraryTimes };
              } else {
                return itineraryDay;
              }
            });
            return { ...trip, itinerary_days: updatedItineraryDays };
          } else {
            return trip;
          }
        }),
      };

      return updatedUser;
    });
  };

  console.log(user)

  const isProfilePage = !!match;

  const handleSearch = () => {
    setSearch("");
  };

  return (
    <main>
      {user && !isProfilePage && <NavBar />}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
        {user && (
          <>
            <Route
              path="/destinations/:destination_id/trips/:trip_id/hotels/:id"
              element={<AddHotelToItinerary onAddItinerary={onAddItinerary} />}
            />
            <Route
              path="/destinations/:destination_id/hotels/:id"
              element={<AddHotelToItinerary onAddItinerary={onAddItinerary} />}
            />
            <Route
              path="/destinations/:destination_id/trips/:trip_id/activities/:id"
              element={<AddActivityToItinerary onAddItinerary={onAddItinerary} />}
            />
            <Route
              path="/destinations/:destination_id/activities/:id"
              element={<AddActivityToItinerary onAddItinerary={onAddItinerary} />}
            />
            <Route
              path="/destinations/:destination_id/trips/:trip_id/restaurants/:id"
              element={<AddRestaurantToItinerary onAddItinerary={onAddItinerary} />}
            />
            <Route
              path="/destinations/:destination_id/restaurants/:id"
              element={<AddRestaurantToItinerary onAddItinerary={onAddItinerary} />}
            />
            <Route
              path="/destinations/:destination_id/trips/:id/hotels"
              element={<HotelsContainer handleSearch={handleSearch} search={search} setSearch={setSearch} />}
            />
            <Route
              path="/destinations/:destination_id/hotels"
              element={<HotelsContainer handleSearch={handleSearch} search={search} setSearch={setSearch} />}
            />
            <Route
              path="/destinations/:destination_id/trips/:id/activities"
              element={<ActivitiesContainer handleSearch={handleSearch} search={search} setSearch={setSearch} />}
            />
            <Route
              path="/destinations/:destination_id/activities"
              element={<ActivitiesContainer handleSearch={handleSearch} search={search} setSearch={setSearch} />}
            />
            <Route
              path="/destinations/:destination_id/trips/:id/restaurants"
              element={<RestaurantsContainer handleSearch={handleSearch} search={search} setSearch={setSearch} />}
            />
            <Route
              path="/destinations/:destination_id/restaurants"
              element={<RestaurantsContainer handleSearch={handleSearch} search={search} setSearch={setSearch} />}
            />
            <Route path="/destinations/:id/trips" element={<NewTrip />} />
            <Route
              path="/destinations/:destination_id/trips/:trip_id/hotels/:id/details"
              element={<HotelDetails hotels={hotels} />}
            />
            <Route
              path="/destinations/:destination_id/hotels/:id/details"
              element={<HotelDetails hotels={hotels} />}
            />
            <Route
              path="/destinations/:destination_id/trips/:trip_id/restaurants/:id/details"
              element={<RestaurantDetails restaurants={restaurants} />}
            />
            <Route
              path="/destinations/:destination_id/restaurants/:id/details"
              element={<RestaurantDetails restaurants={restaurants} />}
            />
            <Route
              path="/destinations/:destination_id/trips/:trip_id/activities/:id/details"
              element={<ActivityDetails activities={activities} />}
            />
            <Route
              path="/destinations/:destination_id/activities/:id/details"
              element={<ActivityDetails activities={activities} />}
            />
            <Route
              path="/users/:user_id/trips/:id"
              element={<TripDetails />}
            />
            <Route path="/trips/:id/packing_list" element={<PackingListContainer />} />
            <Route
              path="/users/:user_id/profile"
              element={<EditProfileForm />}
            />
            <Route path="/users/:user_id/trips" element={<Profile />} />
          </>
        )}
      </Routes>
    </main>
  );
}

export default App;
