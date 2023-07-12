import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ItineraryHotel from "./ItineraryHotel";
import ItineraryRestaurant from "./ItineraryRestaurant";
import ItineraryActivity from "./ItineraryActivity";

function ItineraryTimes({ trip, itinerary_day, itinerary_time, onDeleteItineraryDay }) {
  const { id, time, hotel, restaurant, activity } = itinerary_time;

  const { user, setUser } = useContext(UserContext);
  const itineraryTime = new Date(time);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = itineraryTime.toLocaleTimeString(undefined, options);

  function deleteItineraryTime(entityType) {
    let endpoint = "";

    switch (entityType) {
      case "restaurant":
        endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}/restaurant_itinerary_times/${id}`;
        break;
      case "activity":
        endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}/activity_itinerary_times/${id}`;
        break;
      case "hotel":
        endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}/hotel_itinerary_times/${id}`;
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

          const updatedItineraryTimes = itinerary_day.combined_itinerary_times.filter(
            (time) => time.id !== id
          );

          if (updatedItineraryTimes.length === 0) {
            deleteItineraryDay();
          } else {
            const updatedItineraryDay = { ...itinerary_day, combined_itinerary_times: updatedItineraryTimes };
            updateItineraryDay(updatedItineraryDay);
          }
        } else {
          console.log(`Failed to delete ${entityType}`);
        }
      })
      .catch((error) => {
        console.log(`Error occurred while deleting ${entityType}`, error);
      });
  }

  function deleteItineraryDay() {
    const endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}`;

    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("itinerary_day deleted successfully");

          const updatedTrips = user.trips.map((t) => {
            if (t.id === trip.id) {
              const updatedItineraryDays = t.itinerary_days.filter((day) => day.id !== itinerary_day.id);
              return { ...t, itinerary_days: updatedItineraryDays };
            }
            return t;
          });

          setUser({ ...user, trips: updatedTrips });

          onDeleteItineraryDay(itinerary_day);
        } else {
          console.log("Failed to delete itinerary_day");
        }
      })
      .catch((error) => {
        console.log("Error occurred while deleting itinerary_day", error);
      });
  }

  function updateItineraryDay(updatedItineraryDay) {
    const endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}`;

    fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItineraryDay),
    })
      .then((response) => {
        if (response.ok) {
          console.log("itinerary_day updated successfully");

          const updatedTrips = user.trips.map((t) => {
            if (t.id === trip.id) {
              const updatedItineraryDays = t.itinerary_days.map((day) => {
                if (day.id === itinerary_day.id) {
                  return updatedItineraryDay;
                }
                return day;
              });
              return { ...t, itinerary_days: updatedItineraryDays };
            }
            return t;
          });

          setUser({ ...user, trips: updatedTrips });
        } else {
          console.log("Failed to update itinerary_day");
        }
      })
      .catch((error) => {
        console.log("Error occurred while updating itinerary_day", error);
      });
  }

  return (
    <div className="itinerary-activity-listing">
      <div className="icon">
        {activity ? <i className="fa-solid fa-map"></i> : null}
        {hotel ? <i className="fa-solid fa-hotel"></i> : null}
        {restaurant ? <i className="fa-solid fa-utensils"></i> : null}
      </div>
      <div>
        {hotel && (
          <div>
            <h3 className="time">{formattedTime}</h3>
            <ItineraryHotel hotel={hotel} />
            <button onClick={() => deleteItineraryTime("hotel")}>Delete Hotel</button>
          </div>
        )}
      </div>
      <div>
        {restaurant && (
          <div>
            <h3 className="time">{formattedTime}</h3>
            <ItineraryRestaurant restaurant={restaurant} />
            <button onClick={() => deleteItineraryTime("restaurant")}>Delete Restaurant</button>
          </div>
        )}
      </div>
      <div>
        {activity && (
          <div>
            <h3 className="time">{formattedTime}</h3>
            <ItineraryActivity activity={activity} />
            <button onClick={() => deleteItineraryTime("activity")}>Delete Activity</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItineraryTimes;
