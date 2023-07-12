import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";

function AddHotelToItinerary({ onAddHotel }) {
  const { trip_id, destination_id, id: hotel_id } = useParams();
  const { user } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    trip_id: trip_id,
    date: "",
    hotel_itinerary_times_attributes: [
      {
        time: "",
        hotel_id: hotel_id
      }
    ]
  });

  if (destinations === null) {
    return <div>Loading...</div>;
  }

  const destination = destinations.find((destination) => destination.id === parseInt(destination_id));

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      if (name === "time") {
        return {
          ...prevState,
          hotel_itinerary_times_attributes: [
            {
              ...prevState.hotel_itinerary_times_attributes[0],
              time: value
            }
          ]
        };
      } else {
        return {
          ...prevState,
          [name]: value
        };
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/trips/${trip_id}/itinerary_days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newHotel) => onAddHotel(newHotel));
        navigate(`/users/${user.id}/trips/${trip_id}`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
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
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="label">
              <div className="input-text">
                <h3 className="input-title">Hotel Itinerary Time</h3>
                <input
                  type="datetime-local"
                  name="time"
                  value={formData.hotel_itinerary_times_attributes[0]?.time || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-button">
              <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHotelToItinerary;
