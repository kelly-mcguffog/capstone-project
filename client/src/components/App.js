import React, { useState, useContext } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { AllUsersContext } from "../context/AllUsersContext";
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
import EditTripForm from "./EditTripForm";
import EditItineraryForm from "./EditItineraryForm";

function App() {

  const { user, setUser } = useContext(UserContext)
  const { setUsers } = useContext(AllUsersContext)
  const [search, setSearch] = useState("")
  const match1 = useMatch("/users/:user_id/trips");
  const match2 = useMatch("/users/:user_id/trips/:id");
  const match3 = useMatch("/trips/:id/packing_list");
  const match4 = useMatch("/users/:user_id/profile")
  const match = match1 || match2 || match3 || match4;

  const onAddItinerary = (newItinerary) => {
    const { trip_id, date, combined_itinerary_times } = newItinerary;

    const updatedUser = {
      ...user,
      trips: user.trips.map((trip) => {
        if (trip.id === trip_id) {
          const existingDate = trip.itinerary_days.find((itineraryDay) => itineraryDay.date === date);
          if (!existingDate) {
            return {
              ...trip,
              itinerary_days: [...trip.itinerary_days, newItinerary],
            };
          }
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

    setUser(updatedUser);
    setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? updatedUser : u)));
  };


  // const onUpdateItinerary = (updatedItinerary) => {
  //   const { id, trip_id, date, combined_itinerary_times } = updatedItinerary;
  
  //   const updatedUser = {
  //     ...user,
  //     trips: user.trips.map((trip) => {
  //       if (trip.id === trip_id) {
  //         const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
  //           if (itineraryDay.id === id) {
  //             const existingDay = trip.itinerary_days.some((day) => day.date === date);
  
  //             if (existingDay) {
  //               const updatedItineraryTimes = itineraryDay.combined_itinerary_times.map((timeObj) => {
  //                 const updatedTime = combined_itinerary_times.find((time) => time.id === timeObj.id);
  //                 if (updatedTime && timeObj.restaurant) {
  //                   return { ...timeObj, time: updatedTime.time, restaurant: updatedTime.restaurant };
  //                 } else if (updatedTime && timeObj.hotel) {
  //                   return { ...timeObj, time: updatedTime.time, hotel: updatedTime.hotel };
  //                 } else if (updatedTime && timeObj.activity) {
  //                   return { ...timeObj, time: updatedTime.time, activity: updatedTime.activity };
  //                 } else {
  //                   return timeObj;
  //                 }
  //               });
  
  //               return { ...itineraryDay, combined_itinerary_times: updatedItineraryTimes };
  //             } else {
  //               const updatedItineraryTimes = itineraryDay.combined_itinerary_times.map((timeObj) => {
  //                 const updatedTime = combined_itinerary_times.find((time) => time.id === timeObj.id);
  //                 if (updatedTime && timeObj.restaurant) {
  //                   return { time: updatedTime.time, restaurant: updatedTime.restaurant };
  //                 } else if (updatedTime && timeObj.hotel) {
  //                   return {  time: updatedTime.time, hotel: updatedTime.hotel };
  //                 } else if (updatedTime && timeObj.activity) {
  //                   return {  time: updatedTime.time, activity: updatedTime.activity };
  //                 } else {
  //                   return timeObj;
  //                 }
  //               });
  //               const newItineraryDay = {
  //                 date,
  //                 updatedItineraryTimes,
  //               };
  
  //               return newItineraryDay;
  
  //             }
  //           } else {
  //             return itineraryDay;
  //           }
  //         });
  
  //         return { ...trip, itinerary_days: updatedItineraryDays };
  //       } else {
  //         return trip;
  //       }
  //     }),
  //   };
  
  //   setUser(updatedUser);
  //   setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? updatedUser : u)));
  // };

  const onUpdateItinerary = (updatedItinerary) => {
    const { id, trip_id, date, combined_itinerary_times } = updatedItinerary;
  
    const updatedUser = {
      ...user,
      trips: user.trips.map((trip) => {
        if (trip.id === trip_id) {
          const existingDay = trip.itinerary_days.find((day) => day.date === date);
  
          if (existingDay) {
            const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
              if (itineraryDay.id === id) {
                const updatedItineraryTimes = itineraryDay.combined_itinerary_times.map((timeObj) => {
                  const updatedTime = combined_itinerary_times.find((time) => time.id === timeObj.id);
                  if (updatedTime && timeObj.restaurant) {
                    return { ...timeObj, time: updatedTime.time, restaurant: updatedTime.restaurant };
                  } else if (updatedTime && timeObj.hotel) {
                    return { ...timeObj, time: updatedTime.time, hotel: updatedTime.hotel };
                  } else if (updatedTime && timeObj.activity) {
                    return { ...timeObj, time: updatedTime.time, activity: updatedTime.activity };
                  } else {
                    return timeObj;
                  }
                });
  
                return { ...itineraryDay, combined_itinerary_times: updatedItineraryTimes };
              } else {
                return itineraryDay;
              }
            });
  
            return { ...trip, itinerary_days: updatedItineraryDays };
          } else {
            // If the date doesn't exist, create a new itineraryDay with the provided date
            const newItineraryDay = {
              date,
              combined_itinerary_times: combined_itinerary_times.map((timeObj) => {
                if (timeObj.id === id) {
                  const updatedTime = combined_itinerary_times.find((time) => time.id === timeObj.id);
                  if (updatedTime && timeObj.restaurant) {
                    return { id: timeObj.id, time: updatedTime.time, restaurant: updatedTime.restaurant };
                  } else if (updatedTime && timeObj.hotel) {
                    return { id: timeObj.id, time: updatedTime.time, hotel: updatedTime.hotel };
                  } else if (updatedTime && timeObj.activity) {
                    return { id: timeObj.id, time: updatedTime.time, activity: updatedTime.activity };
                  } else {
                    return timeObj;
                  }
                } else {
                  return timeObj;
                }
              }),
            };
  
            return { ...trip, itinerary_days: [...trip.itinerary_days, newItineraryDay] };
          }
        } else {
          return trip;
        }
      }),
    };
  
    setUser(updatedUser);
    setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? updatedUser : u)));
  };
  
  
  

  // const onUpdateItinerary = (updatedItinerary) => {
  //   const { id, trip_id, date, combined_itinerary_times } = updatedItinerary;
  
  //   const updatedUser = {
  //     ...user,
  //     trips: user.trips.map((trip) => {
  //       if (trip.id === trip_id) {
  //         const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
  //           if (itineraryDay.id === id) {
  //             // Check if there is an existing itinerary day with the same date
  //             const existingDay = trip.itinerary_days.find((day) => day.date === date);
  
  //             if (existingDay) {
  //               // Update the itinerary times if they exist in the combined_itinerary_times
  //               const updatedItineraryTimes = itineraryDay.combined_itinerary_times.map((timeObj) => {
  //                 const updatedTime = combined_itinerary_times.find((time) => time.id === timeObj.id);
  //                 if (updatedTime && timeObj.restaurant) {
  //                   return { ...timeObj, time: updatedTime.time, restaurant: updatedTime.restaurant };
  //                 } else if (updatedTime && timeObj.hotel) {
  //                   return { ...timeObj, time: updatedTime.time, hotel: updatedTime.hotel };
  //                 } else if (updatedTime && timeObj.activity) {
  //                   return { ...timeObj, time: updatedTime.time, activity: updatedTime.activity };
  //                 } else {
  //                   return timeObj;
  //                 }
  //               });
  
  //               return { ...itineraryDay, combined_itinerary_times: updatedItineraryTimes };
  //             } else {
  //               // Create a new date with the combined_itinerary_times
  //               const newItineraryDay = {
  //                 ...itineraryDay,
  //                 date,
  //                 id: Date.now(), // Generate a temporary unique ID for the new date
  //                 combined_itinerary_times,
  //               };
  
  //               return newItineraryDay;
  //             }
  //           } else {
  //             return itineraryDay;
  //           }
  //         });
  
  //         return { ...trip, itinerary_days: updatedItineraryDays };
  //       } else {
  //         return trip;
  //       }
  //     }),
  //   };
  
  //   setUser(updatedUser);
  //   setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? updatedUser : u)));
  // };
  
  

  const isMatch = !!match;

  const handleSearch = () => {
    setSearch("");
  };

  return (
    <main>
      {user && !isMatch && <NavBar />}
      {user ? (
        <Routes>
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
              path="/trips/:trip_id/itinerary_days/:itinerary_day_id/itinerary_times/:id/edit"
              element={<EditItineraryForm onUpdateItinerary={onUpdateItinerary}/>}
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
              element={<HotelDetails />}
            />
            <Route
              path="/destinations/:destination_id/hotels/:id/details"
              element={<HotelDetails />}
            />
            <Route
              path="/destinations/:destination_id/trips/:trip_id/restaurants/:id/details"
              element={<RestaurantDetails />}
            />
            <Route
              path="/destinations/:destination_id/restaurants/:id/details"
              element={<RestaurantDetails />}
            />
            <Route
              path="/destinations/:destination_id/trips/:trip_id/activities/:id/details"
              element={<ActivityDetails />}
            />
            <Route
              path="/destinations/:destination_id/activities/:id/details"
              element={<ActivityDetails />}
            />
            <Route
              path="/users/:user_id/trips/:id/edit"
              element={<EditTripForm />}
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
          </>
        </Routes>
      ) :
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      }
    </main>
  );
}

export default App;
