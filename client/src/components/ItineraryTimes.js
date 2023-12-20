import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import ItineraryHotel from "./ItineraryHotel";
import ItineraryRestaurant from "./ItineraryRestaurant";
import ItineraryActivity from "./ItineraryActivity";

function ItineraryTimes({ trip, itinerary_day, itinerary_time }) {

  const [isShowing, setIsShowing] = useState(false)
  const [errors, setErrors] = useState("")

  const { user, setUser } = useContext(UserContext);

  const itineraryTime = new Date(itinerary_time.time);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = itineraryTime.toLocaleTimeString(undefined, options);

  function deleteItineraryTime(entityType) {
    let endpoint = "";
    switch (entityType) {
      case "hotel":
        endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}/hotel_itinerary_times/${itinerary_time.id}`;
        break;
      case "activity":
        endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}/activity_itinerary_times/${itinerary_time.id}`;
        break;
      case "restaurant":
        endpoint = `/trips/${trip.id}/itinerary_days/${itinerary_day.id}/restaurant_itinerary_times/${itinerary_time.id}`;
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
            const updatedTrip = user.trips.find((t) => t.id === trip.id);

            const updatedItineraryDays = updatedTrip.itinerary_days.map((itineraryDay) => {
              if (itineraryDay.id === updatedItineraryDay.id) {
                return updatedItineraryDay;
              }
              return itineraryDay;
            });

            const updatedUser = {
              ...user,
              trips: user.trips.map((t) => {
                if (t.id === trip.id) {
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

  function deleteItineraryDay(deletedItineraryDay) {
    const endpoint = `/trips/${trip.id}/itinerary_days/${deletedItineraryDay.id}`;

    fetch(endpoint, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedUser = {
            ...user,
            trips: user.trips.map((t) => {
              if (t.id === trip.id) {
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

  const handleDropdown = () => {
    setIsShowing(isShowing => !isShowing)
  }

  console.log(errors)
  return (
    <div className="itinerary-activity-listing">
      <div className="icon">
        {itinerary_time.activity ? <i className="fa-solid fa-map"></i> : null}
        {itinerary_time.hotel ? <i className="fa-solid fa-hotel"></i> : null}
        {itinerary_time.restaurant ? <i className="fa-solid fa-utensils"></i> : null}
      </div>
      {itinerary_time.hotel && (
        <div className="itinerary-container">
          <div className="time-menu">
            <h3 className="time">{formattedTime}</h3>

            <div className="dropdown">
              <i onClick={handleDropdown} className="fa-solid fa-bars dropbtn"></i>
              <div className={isShowing ? "dropdown-content visible" : "dropdown-content hidden"}>
                <Link to={`/trips/${trip.id}/itinerary_days/${itinerary_day.id}/itinerary_times/${itinerary_time.id}/edit`} className="drop-text-link"><p className="drop-text">Edit</p></Link>
                <hr></hr>
                <p onClick={() => deleteItineraryTime("hotel")} className="drop-text">Delete</p>
              </div>
            </div>
          </div>
          <ItineraryHotel trip_id={trip.id} hotel={itinerary_time.hotel} />
        </div>
      )}
      {itinerary_time.restaurant && (
        <div className="itinerary-container">
          <div className="time-menu">
            <h3 className="time">{formattedTime}</h3>
            <div className="dropdown">
              <i onClick={handleDropdown} className="fa-solid fa-bars dropbtn"></i>
              <div className={isShowing ? "dropdown-content visible" : "dropdown-content hidden"}>
                <Link to={`/trips/${trip.id}/itinerary_days/${itinerary_day.id}/itinerary_times/${itinerary_time.id}/edit`} className="drop-text-link"><p className="drop-text">Edit</p></Link>
                <hr></hr>
                <p onClick={() => deleteItineraryTime("restaurant")} className="drop-text">Delete</p>
              </div>
            </div>
          </div>
          <ItineraryRestaurant trip_id={trip.id} restaurant={itinerary_time.restaurant} />
        </div>
      )}
      {itinerary_time.activity && (
        <div className="itinerary-container">
          <div className="time-menu">
            <div>
              <h3 className="time">{formattedTime}</h3>
            </div>
            <div className="dropdown">
              <i onClick={handleDropdown} className="fa-solid fa-bars dropbtn"></i>
              <div className={isShowing ? "dropdown-content visible" : "dropdown-content hidden"}>
                <Link to={`/trips/${trip.id}/itinerary_days/${itinerary_day.id}/itinerary_times/${itinerary_time.id}/edit`} className="drop-text-link"><p className="drop-text">Edit</p></Link>
                <hr></hr>
                <p onClick={() => deleteItineraryTime("activity")} className="drop-text">Delete</p>
              </div>
            </div>
          </div>
          <ItineraryActivity trip_id={trip.id} activity={itinerary_time.activity} />
        </div>
      )}
    </div>
  );
}

export default ItineraryTimes;