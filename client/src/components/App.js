import React, { useEffect, useState, useContext } from "react";
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

  const {user, setUser} = useContext(UserContext)
  const [search, setSearch] = useState("")
  const [activities, setActivities] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [hotels, setHotels] = useState([])

useEffect(() => {
  fetch("/activities")
  .then(res => res.json())
  .then(data => setActivities(data))
},[])

useEffect(() => {
  fetch("/restaurants")
  .then(res => res.json())
  .then(data => setRestaurants(data))
},[])

useEffect(() => {
  fetch("/hotels")
  .then(res => res.json())
  .then(data => setHotels(data))
},[])

const onAddActivity = (newActivity) => {
  const updatedTrip = user.trips.map((trip) => {
    if (trip.id === newActivity.trip_id) {
      const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
        if (itineraryDay.date === newActivity.date) {
          const updatedCombinedItineraryTimes = newActivity.activity_itinerary_times.map(
            (activityItineraryTime) => {
              const findActivity = activities.find(
                (activity) => activity.id === activityItineraryTime.activity_id
              );
              return {
                id: activityItineraryTime.id,
                time: activityItineraryTime.time,
                activity: findActivity || null,
                hotel: null,
                restaurant: null,
              };
            }
          );
          return {
            ...itineraryDay,
            combined_itinerary_times: [
              ...itineraryDay.combined_itinerary_times,
              ...updatedCombinedItineraryTimes,
            ],
          };
        }
        return itineraryDay;
      });
      const newItineraryDay = {
        id: newActivity.activity_itinerary_times[0].itinerary_day_id,
        date: newActivity.date,
        combined_itinerary_times: newActivity.activity_itinerary_times.map(
          (activityItineraryTime) => {
            const findActivity = activities.find(
              (activity) => activity.id === activityItineraryTime.activity_id
            );
            return {
              id: activityItineraryTime.id,
              time: activityItineraryTime.time,
              activity: findActivity || null,
              hotel: null,
              restaurant: null,
            };
          }
        ),
      };
      return {
        ...trip,
        itinerary_days: [...updatedItineraryDays, newItineraryDay],
      };
    }
    return trip;
  });

  setUser({ ...user, trips: updatedTrip });
};

const onAddRestaurant = (newRestaurant) => {
  const { trip_id, date, restaurant_itinerary_times } = newRestaurant;

  const updatedTrip = user.trips.map((trip) => {
    if (trip.id === trip_id) {
      const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
        if (itineraryDay.date === date) {
          const existingCombinedItineraryTimes = itineraryDay.combined_itinerary_times || [];

          const updatedCombinedItineraryTimes = restaurant_itinerary_times.map(
            (restaurantItineraryTime) => {
              const findRestaurant = restaurants.find(
                (restaurant) => restaurant.id === restaurantItineraryTime.restaurant_id
              );
              return {
                id: restaurantItineraryTime.id,
                time: restaurantItineraryTime.time,
                activity: null,
                hotel: null,
                restaurant: findRestaurant || null,
              };
            }
          );

          return {
            ...itineraryDay,
            combined_itinerary_times: [
              ...existingCombinedItineraryTimes,
              ...updatedCombinedItineraryTimes,
            ],
          };
        }
        return itineraryDay;
      });

      return {
        ...trip,
        itinerary_days: updatedItineraryDays,
      };
    }
    return trip;
  });

  setUser({ ...user, trips: updatedTrip });
};



const onAddHotel = (newHotel) => {
  const updatedTrip = user.trips.map((trip) => {
    if (trip.id === newHotel.trip_id) {
      const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
        if (itineraryDay.date === newHotel.date) {
          const updatedCombinedItineraryTimes = newHotel.activity_itinerary_times.map(
            (hotelItineraryTime) => {
              const findHotel = hotels.find(
                (hotel) => hotel.id === hotelItineraryTime.hotel_id
              );
              return {
                id: hotelItineraryTime.id,
                time: hotelItineraryTime.time,
                activity: null,
                hotel: findHotel || null,
                restaurant: null,
              };
            }
          );
          return {
            ...itineraryDay,
            combined_itinerary_times: [
              ...itineraryDay.combined_itinerary_times,
              ...updatedCombinedItineraryTimes,
            ],
          };
        }
        return itineraryDay;
      });
      const newItineraryDay = {
        id: newHotel.hotel_itinerary_times[0].itinerary_day_id,
        date: newHotel.date,
        combined_itinerary_times: newHotel.hotel_itinerary_times.map(
          (hotelItineraryTime) => {
            const findHotel = hotels.find(
              (hotel) => hotel.id === hotelItineraryTime.hotel_id
            );
            return {
              id: hotelItineraryTime.id,
              time: hotelItineraryTime.time,
              activity: null,
              hotel: findHotel || null,
              restaurant: null,
            };
          }
        ),
      };
      return {
        ...trip,
        itinerary_days: [...updatedItineraryDays, newItineraryDay],
      };
    }
    return trip;
  });

  setUser({ ...user, trips: updatedTrip });
};


const onDeleteItineraryDate = (deletedItineraryDate) => {
  const updatedTrip = user.trips.map((trip) => {
    if (trip.id === deletedItineraryDate.trip_id) {
      const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
        if (itineraryDay.date === deletedItineraryDate.date) {
          const updatedCombinedItineraryTimes = itineraryDay.combined_itinerary_times.filter(
            (itineraryTime) => {
              const shouldKeepTime = !deletedItineraryDate.combined_itinerary_times.some(
                (deletedTime) => deletedTime.id === itineraryTime.id
              );

              if (!shouldKeepTime) {
                // Reset the hotel, restaurant, or activity for the deleted itinerary time
                if (itineraryTime.hotel) {
                  itineraryTime.hotel = null;
                } else if (itineraryTime.restaurant) {
                  itineraryTime.restaurant = null;
                } else if (itineraryTime.activity) {
                  itineraryTime.activity = null;
                }
              }

              return shouldKeepTime;
            }
          );

          return {
            ...itineraryDay,
            combined_itinerary_times: updatedCombinedItineraryTimes,
          };
        }
        return itineraryDay;
      });

      return { ...trip, itinerary_days: updatedItineraryDays };
    }

    return trip;
  });

  setUser({ ...user, trips: updatedTrip });
};

    return (
          <main>
            {user ? (
              <>
              <NavBar />
              <Routes>
                <Route  exact path="/destinations/:destination_id/trips/:trip_id/hotels/:id" element={<AddHotelToItinerary onAddHotel={onAddHotel}/>}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:trip_id/activities/:id" element={<AddActivityToItinerary onAddActivity={onAddActivity}/>}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:trip_id/restaurants/:id" element={<AddRestaurantToItinerary onAddRestaurant={onAddRestaurant}/>}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:id/hotels" element={<HotelsContainer search={search} setSearch={setSearch}/>}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:id/activities" element={<ActivitiesContainer search={search} setSearch={setSearch}/>}>
                </Route>
                <Route  exact path="/destinations/:destination_id/trips/:id/restaurants" element={<RestaurantsContainer search={search} setSearch={setSearch}/>}>
                </Route>
                <Route  path="/destinations/:id/trips" element={<NewTrip />}>
                </Route>

                <Route  path="/users/:user_id/trips/:id" element={<TripDetails onDeleteItineraryDate={onDeleteItineraryDate} />}>
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
