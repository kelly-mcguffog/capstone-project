import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingScreen from "./LoadingScreen";


function AddHotelToItinerary({ onAddItinerary }) {
  const { trip_id, destination_id, id: hotel_id } = useParams();
  const { user } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);
  const [errors, setErrors] = useState([]);
  const [formErrors, setFormErrors] = useState({ date: "", time: "" })
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
    // return <div className="loading">Loading...</div>;
    return <LoadingScreen/>
  }

  const destination = destinations.find(
    (destination) => destination.id === parseInt(destination_id)
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      if (name === "date") {
        return {
          ...prevState,
          date: new Date(value),
        };
      } else if (name === "time") {
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

    let errors = {};
    if (!formData.date) {
      errors.date = "Date is required";
    }
    if (!formData.hotel_itinerary_times_attributes[0].time) {
      errors.time = "Time is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const updatedDate = new Date(formData.date);
    const hotelTime = formData.hotel_itinerary_times_attributes[0].time;
    const [hotelHours, hotelMinutes] = hotelTime.split(":");
    updatedDate.setHours(hotelHours, hotelMinutes, 0);


    const updatedData = {
      trip_id: trip_id || "",
      date: formData.date,
      hotel_itinerary_times_attributes: [
        {
          time: updatedDate.toISOString(),
          hotel_id: hotel_id,
        },
      ],
    }

    fetch(`/trips/${submitTripId}/itinerary_days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newItinerary) => onAddItinerary(newItinerary));
        navigate(`/trips/${submitTripId}`);
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }

  const deleteError = () => {
    setErrors("")
  }

  const getDetailsUrl = () => {
    if (trip_id !== undefined) {
      return `/destinations/${destination_id}/trips/${trip_id}/hotels/${hotel_id}/details`;
    } else {
      return `/destinations/${destination_id}/hotels/${hotel_id}/details`;
    }
  };

  return (
    <div
      className="header-img"
      style={{ backgroundImage: `url(${destination.photo})` }}
    >
      <div className="header-text">
        <h1 className="title">Plan Your Trip</h1>
        <div className="results itinerary-form">
          <form id="trip-form-wrapper" onSubmit={handleSubmit}>
            <div className="label form-label">
              <div className="input-text">
                <h3 className="input-title">Itinerary Day Date</h3>
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => handleChange({ target: { name: "date", value: date } })}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="MM/DD/YYY"
                  className={`trip-form-input ${formErrors.date || errors.date ? "input-error" : ""
                    }`}
                />
                {formErrors.date && <span className="error-message">{formErrors.date}</span>}
              </div>
            </div>
            <div className="label form-label">
              <div className="input-text">
                <h3 className="input-title">Hotel Itinerary Time</h3>
                <input
                  type="time"
                  name="time"
                  value={formData.hotel_itinerary_times_attributes[0].time}
                  onChange={handleChange}
                  className={`trip-form-input ${formErrors.time || errors.time ? "input-error" : ""
                    }`}
                />
                {formErrors.time && <span className="error-message">{formErrors.time}</span>}
                <ErrorMessage deleteError={deleteError} errors={errors} />
                {errors["hotel_itinerary_times.time"] && (
                  <span className="error-message error-message-time">
                    {errors["hotel_itinerary_times.time"]}
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
          {errors["hotel_itinerary_times"] && (
            <div className="error-popup">
              <div className="error-icon">
                <i className="fa-solid fa-exclamation"></i>
              </div>
              <h2 className="error-text">Error</h2>
              <span className="error-message pop-up-error">
                {errors["hotel_itinerary_times"]}
              </span>
              <button className="page-btn main-btn error-btn" onClick={deleteError}>Try Again</button>
            </div>
          )}
        </div>
        <div className={trip_id ? "back-link back-link-form" : ""}>
          <div className="back-link-btn back-link-btn-form">
            <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
            <Link className="link" to={getDetailsUrl()}>
              <p className="text">
                Return to Hotel
              </p>
            </Link>
          </div>
          {trip_id && (
            <div className="back-link-btn">
              <Link className="link" to={`/trips/${trip_id}`}>
                <p className="text">
                  Return to Trip
                </p>
                <i className="fa-sharp fa-solid fa-circle-chevron-right nav-arrow"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddHotelToItinerary;
