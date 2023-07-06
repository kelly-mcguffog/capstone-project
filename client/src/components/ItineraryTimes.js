import React, { useContext } from "react";
import ItineraryHotel from "./ItineraryHotel";
import ItineraryRestaurant from "./ItineraryRestaurant";
import ItineraryActivity from "./ItineraryActivity";
import { UserContext } from "../context/UserContext";

function ItineraryTimes({ itinerary_time, itinerary_day, trip_id }) {
  const { id, time, hotel, restaurant, activity } = itinerary_time;
  const { user, setUser } = useContext(UserContext);
  const itineraryTime = new Date(time);

  console.log(itinerary_time)
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = itineraryTime.toLocaleTimeString(undefined, options);

  function onDeleteItineraryTime() {
    setUser((prevUser) => {
      const updatedTrips = prevUser.trips.map((trip) => {
        if (trip.id === trip_id) {
          const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
            const updatedCombinedItineraryTimes = itineraryDay.combined_itinerary_times.filter(
              (itineraryTime) => itineraryTime.id !== id
            );
  
            if (updatedCombinedItineraryTimes.length === 0) {
              // If there are no other itinerary_times, remove the itinerary_day
              return null;
            }
  
            return {
              ...itineraryDay,
              combined_itinerary_times: updatedCombinedItineraryTimes,
            };
          });
  
          // Remove null values from the itinerary_days array
          const filteredItineraryDays = updatedItineraryDays.filter((itineraryDay) => itineraryDay !== null);
  
          return {
            ...trip,
            itinerary_days: filteredItineraryDays.length === 0 ? null : filteredItineraryDays,
          };
        }
        return trip;
      });
  
      const updatedUser = {
        ...prevUser,
        trips: updatedTrips,
      };
  
      // Update the state with the new user object
      return updatedUser;
    });
  }  
  

  function deleteItineraryTime(entityType) {
    let endpoint = "";
    switch (entityType) {
      case "restaurant":
        endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day.id}/restaurant_itinerary_times/${id}`;
        break;
      case "activity":
        endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day.id}/activity_itinerary_times/${id}`;
        break;
      case "hotel":
        endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day.id}/hotel_itinerary_times/${id}`;
        break;
      default:
        return;
    }

    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`${entityType} deleted successfully`);
          onDeleteItineraryTime(entityType);
        } else {
          console.log(`Failed to delete ${entityType}`);
        }
      })
      .catch((error) => {
        console.log(`Error occurred while deleting ${entityType}`, error);
      });
  }

  // function deleteItineraryTime(){
  //   fetch(`/trips/${trip_id}/itinerary_days/${id}/activity_itinerary_times/:activity_itinerary_time_id`, {
  //     method: 'DELETE'
  //   })
  // }

  return (
    <>
      <div className="itinerary-activity-listing">
        <div className="icon">
          {activity ? <i className="fa-solid fa-map"></i> : null}
          {hotel ? <i className="fa-solid fa-hotel"></i> : null}
          {restaurant ? <i className="fa-solid fa-utensils"></i> : null}
        </div>
        <div>
          <h3 className="time">{formattedTime}</h3>
          {hotel ? <ItineraryHotel hotel={hotel} /> : null}
          {restaurant ? <ItineraryRestaurant restaurant={restaurant} /> : null}
          {activity ? <ItineraryActivity activity={activity} /> : null}
        </div>
        <div>
          {restaurant ? (
            <button onClick={() => deleteItineraryTime("restaurant")}>x</button>
          ) : null}
          {activity ? (
            <button onClick={() => deleteItineraryTime("activity")}>x</button>
          ) : null}
          {hotel ? (
            <button onClick={() => deleteItineraryTime("hotel")}>x</button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ItineraryTimes;
