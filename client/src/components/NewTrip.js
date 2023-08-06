import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewTrip() {

  const { id } = useParams();
  const { user, setUser } = useContext(UserContext)
  const { destinations } = useContext(DestinationsContext);
  const navigate = useNavigate();

  const initialState = {
    origin_airport: "",
    destination_airport: "",
    outbound_flight: "",
    return_flight: "",
    outbound_flight_number: "",
    return_flight_number: "",
    confirmation_number: "",
  }

  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState([])


  if (destinations === null) {
    return <div className="loading">Loading...</div>;
  }

  const destination = destinations.find(
    (destination) => destination.id === parseInt(id)
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { photo, city } = destination;


  function handleChange(event) {
    const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  }

  function onAddTrip(newTrip) {
    if (newTrip.user_id === user.id) {
      setUser({ ...user, trips: [...user.trips, newTrip] })
    } else {
      return user
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        origin_airport: formData.origin_airport,
        destination_airport: formData.destination_airport,
        outbound_flight: formData.outbound_flight,
        return_flight: formData.return_flight,
        outbound_flight_number: formData.outbound_flight_number,
        return_flight_number: formData.return_flight_number,
        confirmation_number: formData.confirmation_number,
        user_id: user.id,
        destination_id: id
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newTrip) => onAddTrip(newTrip));
        navigate(`/profile/${user.id}`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
      <div className="header-text-trip-form">
        <h1 className="title">Plan Your Trip to {city}</h1>
        <div className="results trip-form">
          <form id="trip-form-wrapper" onSubmit={handleSubmit}>
            <div id="trip-form" className="form-info">
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">From</h3>
                </div>
                <input
                  type="text"
                  name="origin_airport"
                  autoComplete="off"
                  placeholder="Your Origin"
                  onChange={handleChange}
                  value={formData.origin_airport}
                  className={`trip-form-input ${errors.origin_airport ? "input-error" : ""
                    }`}
                />
                {errors.origin_airport && (
                  <span className="error-message">
                    {Array.isArray(errors.origin_airport)
                      ? errors.origin_airport.join(", ")
                      : errors.origin_airport}
                  </span>
                )}
              </div>
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">To</h3>
                </div>
                <input
                  type="text"
                  name="destination_airport"
                  autoComplete="off"
                  placeholder="Your Destination"
                  className={`trip-form-input ${errors.destination_airport ? "input-error" : ""
                    }`}
                  onChange={handleChange}
                  value={formData.destination_airport}
                />
                {errors.destination_airport && (
                  <span className="error-message">
                    {Array.isArray(errors.destination_airport)
                      ? errors.destination_airport.join(", ")
                      : errors.destination_airport}
                  </span>
                )}
              </div>
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">Outbound Flight</h3>
                </div>
                <DatePicker
                  selected={formData.outbound_flight}
                  onChange={(date) => handleChange({ target: { name: "outbound_flight", value: date } })}
                  showTimeSelect
                  timeIntervals={30}
                  placeholderText="MM/DD/YYY HH:MM"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className={`trip-form-input ${errors.outbound_flight ? "input-error" : ""}`}
                />
                {errors.outbound_flight && (
                  <span className="error-message">
                    {Array.isArray(errors.outbound_flight)
                      ? errors.outbound_flight.join(", ")
                      : errors.outbound_flight}
                  </span>
                )}
              </div>

              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">Return Flight</h3>
                </div>
                <DatePicker
                  selected={formData.return_flight}
                  onChange={(date) => handleChange({ target: { name: "return_flight", value: date } })}
                  showTimeSelect
                  timeIntervals={30}
                  placeholderText="MM/DD/YYY HH:MM"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className={`trip-form-input ${errors.return_flight ? "input-error" : ""}`}
                />
                {errors.return_flight && (
                  <span className="error-message">
                    {Array.isArray(errors.return_flight)
                      ? errors.return_flight.join(", ")
                      : errors.return_flight}
                  </span>
                )}
              </div>
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">Outbound Flight Number</h3>
                </div>
                <input
                  type="text"
                  name="outbound_flight_number"
                  autoComplete="off"
                  placeholder="i.e. AA353"
                  className={`trip-form-input ${errors.outbound_flight_number ? "input-error" : ""
                    }`}
                  onChange={handleChange}
                  value={formData.outbound_flight_number}
                />
                {errors.outbound_flight_number && (
                  <span className="error-message">
                    {Array.isArray(errors.outbound_flight_number)
                      ? errors.outbound_flight_number.join(", ")
                      : errors.outbound_flight_number}
                  </span>
                )}
              </div>
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">Return Flight Number</h3>
                </div>
                <input
                  type="text"
                  name="return_flight_number"
                  autoComplete="off"
                  placeholder="i.e. AA353"
                  className={`trip-form-input ${errors.return_flight_number ? "input-error" : ""
                    }`}
                  onChange={handleChange}
                  value={formData.return_flight_number}
                />
                {errors.return_flight_number && (
                  <span className="error-message">
                    {Array.isArray(errors.return_flight_number)
                      ? errors.return_flight_number.join(", ")
                      : errors.return_flight_number}
                  </span>
                )}
              </div>
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">Confirmation Number</h3>
                </div>
                <input
                  type="text"
                  name="confirmation_number"
                  autoComplete="off"
                  placeholder="9-Digit Code"
                  className={`trip-form-input ${errors.confirmation_number ? "input-error" : ""
                    }`}
                  onChange={handleChange}
                  value={formData.confirmation_number}
                />
                {errors.confirmation_number && (
                  <span className="error-message">
                    {Array.isArray(errors.confirmation_number)
                      ? errors.confirmation_number.join(", ")
                      : errors.confirmation_number}
                  </span>
                )}
              </div>
            </div>
            <div className="form-button">
              <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewTrip;