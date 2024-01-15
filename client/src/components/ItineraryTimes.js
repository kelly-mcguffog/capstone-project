import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import ItineraryHotel from "./ItineraryHotel";
import ItineraryRestaurant from "./ItineraryRestaurant";
import ItineraryActivity from "./ItineraryActivity";
import ItineraryDetailsInfo from "./ItineraryDetailsInfo";

function ItineraryTimes({ trip, itinerary_day, itinerary_time }) {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState("")
  const itineraryTime = new Date(itinerary_time.time);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = itineraryTime.toLocaleTimeString(undefined, options);

  const trip_id = trip.id
  const itinerary_day_id = itinerary_day.id
  const itinerary_time_id = itinerary_time.id

  function deleteItineraryDay(deletedItineraryDay) {
        const endpoint = `/trips/${trip_id}/itinerary_days/${deletedItineraryDay.id}`;
    
        fetch(endpoint, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              const updatedUser = {
                ...user,
                trips: user.trips.map((t) => {
                  if (t.id === trip_id) {
                    const updatedItineraryDays = t.itinerary_days.filter((day) => day.id !== deletedItineraryDay.id);
                    return { ...t, itinerary_days: updatedItineraryDays };
                  }
                  return t;
                }),
              };
    
              setUser(updatedUser);
            } else {
              response.json().then((err) => setErrors(err.errors));
            }
          });
      }

  function deleteItineraryTime(entityType) {
        let endpoint = "";
        switch (entityType) {
          case "hotel":
            endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day_id}/hotel_itinerary_times/${itinerary_time_id}`;
            break;
          case "activity":
            endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day_id}/activity_itinerary_times/${itinerary_time_id}`;
            break;
          case "restaurant":
            endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day_id}/restaurant_itinerary_times/${itinerary_time_id}`;
            break;
          default:
            return;
        }
    
        fetch(endpoint, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              const updatedCombinedItineraryTimes = itinerary_day.combined_itinerary_times.filter(
                (itineraryTime) => itineraryTime.id !== itinerary_time.id
              );
    
              const updatedItineraryDay = {
                ...itinerary_day,
                combined_itinerary_times: updatedCombinedItineraryTimes,
              };
    
              if (updatedCombinedItineraryTimes.length === 0) {
                deleteItineraryDay(updatedItineraryDay);
              } else {
                const updatedTrip = user.trips.find((t) => t.id === trip_id);
    
                const updatedItineraryDays = updatedTrip.itinerary_days.map((itineraryDay) => {
                  if (itineraryDay.id === updatedItineraryDay.id) {
                    return updatedItineraryDay;
                  }
                  return itineraryDay;
                });
    
                const updatedUser = {
                  ...user,
                  trips: user.trips.map((t) => {
                    if (t.id === trip_id) {
                      return { ...t, itinerary_days: updatedItineraryDays };
                    }
                    return t;
                  }),
                };
                setUser(updatedUser);
              }
            } else {
              response.json().then((err) => setErrors(err.errors));
            }
          });
      }

  return (
    <div className="details itinerary-cards">
      {errors && <div className="error-message">{errors}</div>}
      <div className="icon">
        {itinerary_time.activity && <div className="circle-container"><i className="fa-solid fa-map"></i></div>}
        {itinerary_time.hotel && <div className="circle-container"><i className="fa-solid fa-hotel"></i></div>}
        {itinerary_time.restaurant && <div className="circle-container"><i className="fa-solid fa-utensils"></i></div>}
      </div>
      {itinerary_time.hotel && (
        <ItineraryDetailsInfo
          formattedTime={formattedTime}
          trip_id={trip_id}
          itinerary_day_id={itinerary_day_id}
          itinerary_time_id={itinerary_time_id}
          entityType={<ItineraryHotel trip_id={trip_id} hotel={itinerary_time.hotel} />}
          deleteCallback={() => deleteItineraryTime("hotel")}
        />
      )}
      {itinerary_time.restaurant && (
        <ItineraryDetailsInfo
          formattedTime={formattedTime}
          trip_id={trip_id}
          itinerary_day_id={itinerary_day_id}
          itinerary_time_id={itinerary_time_id}
          entityType={<ItineraryRestaurant trip_id={trip_id} restaurant={itinerary_time.restaurant} />}
          deleteCallback={() => deleteItineraryTime("restaurant")}
        />
      )}
      {itinerary_time.activity && (
        <ItineraryDetailsInfo
          formattedTime={formattedTime}
          trip_id={trip_id}
          itinerary_day_id={itinerary_day_id}
          itinerary_time_id={itinerary_time_id}
          entityType={<ItineraryActivity trip_id={trip_id} activity={itinerary_time.activity} />}
          deleteCallback={() => deleteItineraryTime("activity")}
        />
      )}
    </div>
  );
}

export default ItineraryTimes;