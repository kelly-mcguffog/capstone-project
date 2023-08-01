import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate, Link } from "react-router-dom";

function AddActivityToItinerary({ onAddItinerary }) {
  const { trip_id, destination_id, id: activity_id } = useParams();
  const { user } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    trip_id: trip_id || "",
    date: "",
    activity_itinerary_times_attributes: [
      {
        time: "",
        activity_id: activity_id,
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
          activity_itinerary_times_attributes: [
            {
              ...prevState.activity_itinerary_times_attributes[0],
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
        r.json().then((newItinerary) => {
          onAddItinerary(newItinerary);
        });
        navigate(`/users/${user.id}/trips/${submitTripId}`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div
      className="header-img"
      style={{ backgroundImage: `url(${destination.photo})` }}
    >
      <div className="header-text">
        <h1 className="title">Plan Your Trip</h1>
        <div className="results trip-form">
          <form id="trip-form-wrapper" onSubmit={handleSubmit}>
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
                    {errors.date}
                  </span>
                )}
              </div>
            </div>
            <div className="label form-label">
              <div className="input-text">
                <h3 className="input-title">Activity Itinerary Time</h3>
                <input
                  type="datetime-local"
                  name="time"
                  value={formData.activity_itinerary_times_attributes[0].time}
                  onChange={handleChange}
                  className={`trip-form-input ${errors["activity_itinerary_times.time"] ? "input-error" : ""
                    }`}
                />
                {errors["activity_itinerary_times.time"] && (
                  <span className="error-message">
                    {errors["activity_itinerary_times.time"]}
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
        {trip_id === undefined && (
          <div className="back-link-btn back-btn-form">
            <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
            <Link className="link" to={`/destinations/${destination_id}/activities/${activity_id}/details`}>
              <p className="text">
                Return to Hotel
              </p>
            </Link>
          </div>
        )}
        {trip_id && (
          <div className="back-link-btn back-link-btn-details">
            <Link className="link" to={`/users/${user.id}/trips/${trip_id}`}>
              <p className="text">
                Return to Trip
              </p>
              <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddActivityToItinerary;
