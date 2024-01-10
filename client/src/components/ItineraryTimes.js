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

  return (
    <div className="details itinerary-cards">
      <div className="icon">
        {itinerary_time.activity ?
          <div className="circle-container">
            <i className="fa-solid fa-map"></i>
          </div> : null}
        {itinerary_time.hotel ?
          <div className="circle-container">
            <i className="fa-solid fa-hotel"></i>
          </div> : null}
        {itinerary_time.restaurant ?
          <div className="circle-container">
            <i className="fa-solid fa-utensils"></i> </div> : null}
      </div>
      {itinerary_time.hotel && (
        <div className="itinerary-details-info details-info">
          <div className="info-details">
            <h3>{formattedTime}</h3>

            <div className="dropdown">
              <i onClick={handleDropdown} className="fa-solid fa-bars"></i>
              <div className={isShowing ? "dropdown-content visible" : "dropdown-content hidden"}>
                <Link to={`/trips/${trip.id}/itinerary_days/${itinerary_day.id}/itinerary_times/${itinerary_time.id}/edit`}><h3 className="nav-link">Edit</h3></Link>
                <hr></hr>
                <button onClick={() => deleteItineraryTime("hotel")} className="nav-link"><h3 className="nav-link navlink-button">Delete</h3></button>
              </div>
            </div>
          </div>
          <ItineraryHotel trip_id={trip.id} hotel={itinerary_time.hotel} />
        </div>
      )}
      {itinerary_time.restaurant && (
        <div className="itinerary-details-info details-info">
          <div className="info-details">
            <h3>{formattedTime}</h3>
            <div className="dropdown">
              <i onClick={handleDropdown} className="fa-solid fa-bars"></i>
              <div className={isShowing ? "dropdown-content visible" : "dropdown-content hidden"}>
                <Link to={`/trips/${trip.id}/itinerary_days/${itinerary_day.id}/itinerary_times/${itinerary_time.id}/edit`}><h3 className="nav-link">Edit</h3></Link>
                <hr></hr>
                <button onClick={() => deleteItineraryTime("restaurant")} className="nav-link"><h3 className="nav-link navlink-button">Delete</h3></button>
              </div>
            </div>
          </div>
          <ItineraryRestaurant trip_id={trip.id} restaurant={itinerary_time.restaurant} />
        </div>
      )}
      {itinerary_time.activity && (
        <div className="itinerary-details-info details-info">
          <div className="info-details">
            <div>
              <h3>{formattedTime}</h3>
            </div>
            <div className="dropdown">
              <i onClick={handleDropdown} className="fa-solid fa-bars"></i>
              <div className={isShowing ? "dropdown-content visible" : "dropdown-content hidden"}>
                <Link to={`/trips/${trip.id}/itinerary_days/${itinerary_day.id}/itinerary_times/${itinerary_time.id}/edit`}><h3 className="nav-link">Edit</h3></Link>
                <hr></hr>
                <button onClick={() => deleteItineraryTime("activity")} className="nav-link"><h3 className="nav-link navlink-button">Delete</h3></button>
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