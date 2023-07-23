import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";

function AddHotelToItinerary({ onAddItinerary }) {
  const { trip_id, destination_id, id: hotel_id } = useParams();
  const { user } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    trip_id: trip_id || "",
    date: "",
    hotel_itinerary_times_attributes: [
      {
        time: "",
        hotel_id: hotel_id,
      },
    ],
  });

  if (destinations === null) {
    return <div>Loading...</div>;
  }

  const destination = destinations.find(
    (destination) => destination.id === parseInt(destination_id)
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      if (name === "time") {
        return {
          ...prevState,
          hotel_itinerary_times_attributes: [
            {
              ...prevState.hotel_itinerary_times_attributes[0],
              time: value,
            },
          ],
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const submitTripId = formData.trip_id || "";

    fetch(`/trips/${submitTripId}/itinerary_days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newItinerary) => onAddItinerary(newItinerary));
        navigate(`/users/${user.id}/trips/${submitTripId}`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  console.log(errors)
  return (
    <div
      className="header-img"
      style={{ backgroundImage: `url(${destination.photo})` }}
    >
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
            <div className="label form-label">
              <div className="input-text">
                <h3 className="input-title">Itinerary Day Date</h3>
                <input
                  type="datetime-local"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`trip-form-input ${errors.date ? "input-error" : ""
                    }`}
                />
                {errors.date && (
                  <span className="error-message">
                    {Array.isArray(errors.date)
                      ? errors.date.join(", ")
                      : errors.date}
                  </span>
                )}
              </div>
            </div>
            <div className="label form-label">
              <div className="input-text">
                <h3 className="input-title">Hotel Itinerary Time</h3>
                <input
                  type="datetime-local"
                  name="time"
                  value={formData.hotel_itinerary_times_attributes[0].time}
                  onChange={handleChange}
                  className={`trip-form-input ${errors["hotel_itinerary_times.time"] ? "input-error" : ""
                    }`}
                />
                {errors["hotel_itinerary_times.time"] && (
                  <span className="error-message">
                    {Array.isArray(errors["hotel_itinerary_times.time"])
                      ? errors["hotel_itinerary_times.time"].join(", ")
                      : errors["hotel_itinerary_times.time"]}
                  </span>
                )}
              </div>
            </div>
            {trip_id === undefined && (
              <div className="label form-label">
                <div className="input-text">
                  <h3 className="input-title">Select a Trip</h3>
                  <select
                    name="trip_id"
                    value={formData.trip_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Trip</option>
                    {user.trips.map((trip) => {
                      const tripDestination = destinations.find(
                        (destination) => destination.id === trip.destination_id
                      );
                      return (
                        <option key={trip.id} value={trip.id}>
                          {tripDestination.city}, {tripDestination.country} (
                          {new Date(trip.outbound_flight).toLocaleDateString()})
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}
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

export default AddHotelToItinerary;
