import React, { useState, useContext, useEffect } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";

function AddRestaurantToItinerary() {
  const { trip_id, destination_id, id: restaurant_id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);


  const [errors, setErrors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();


  const destination = destinations?.find((destination) => destination.id == destination_id);

  function onAddRestaurant(newRestaurant) {
    console.log("Restaurant added:", newRestaurant);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!user || !user.trips) {
      return;
    }

    const formData = {
      trip_id: trip_id,
      date: date,
      restaurant_itinerary_times_attributes: [
        {
          time: time,
          restaurant_id: restaurant_id,
        },
      ],
    };

    fetch(`/users/${user.id}/trips/${trip_id}/itinerary_days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add restaurant to itinerary");
        }
      })
      .then((data) => {
        console.log(data);
        navigate(`/users/${user.id}/trips/${trip_id}`);
      })
      .catch((error) => {
        console.log(error);
        setErrors(["Failed to add restaurant to itinerary"]);
      });
  }

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="header-img" style={{ backgroundImage: `url(${destination.photo})` }}>
      <div className="header-text">
        <h1 className="title">Plan Your Trip</h1>
        <div className="results trip-form">
          <form id="trip-form-wrapper" onSubmit={handleSubmit}>
            {errors.length > 0 && (
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <div className="label">
              <div className="input-text">
                <h3 className="input-title">Itinerary Day Date</h3>
                <input
                  type="datetime-local"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="label">
              <div className="input-text">
                <h3 className="input-title">Restaurant Itinerary Time</h3>
                <input
                  type="datetime-local"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="form-button">
              <button type="submit">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRestaurantToItinerary;
