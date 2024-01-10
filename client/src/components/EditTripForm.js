import React, { useState, useContext, useEffect } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingScreen from "./LoadingScreen";

function EditTripForm() {
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    origin_airport: "",
    destination_airport: "",
    outbound_flight: "",
    return_flight: "",
    outbound_flight_number: "",
    return_flight_number: "",
    confirmation_number: "",
  });

  const findTrip = user.trips?.find((trip) => trip.id === parseInt(id));

  useEffect(() => {
    if (findTrip) {
      setFormData({
        origin_airport: findTrip.origin_airport,
        destination_airport: findTrip.destination_airport,
        outbound_flight: new Date(findTrip.outbound_flight),
        return_flight: new Date(findTrip.return_flight),
        outbound_flight_number: findTrip.outbound_flight_number,
        return_flight_number: findTrip.return_flight_number,
        confirmation_number: findTrip.confirmation_number,
      });
    }
  }, [findTrip]);

  if (!findTrip || destinations === null) return <LoadingScreen />

  const destination = destinations.find(
    (destination) => destination.id === parseInt(findTrip.destination_id)
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { photo, city } = destination;

  function onUpdateTrip(updatedTrip) {
    setUser((prevUser) => {
      const updatedTrips = prevUser.trips.map((trip) =>
        trip.id === updatedTrip.id ? updatedTrip : trip
      );
      return { ...prevUser, trips: updatedTrips };
    });
  }

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

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/trips/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((updatedTrip) => onUpdateTrip(updatedTrip))
        navigate(`/trips/${id}`)
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }

  return (

    <div className="page-header">
      <div className="cropped-img-container">
        <img className="cropped-img" src={photo} alt={city}></img>
      </div>
      <div className="header">
        <div className="header-text">
          <h1 className="header-copy">Plan Your Trip</h1>
        </div>
        <div className="results">
          <form className="trip-form" onSubmit={handleSubmit}>
            <div id="new-trip-form">
              <div>
                <h3>From</h3>
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
              <div>
                <h3>To</h3>
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
              <div>
                <h3>Outbound Flight</h3>
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

              <div>
                <h3>Return Flight</h3>
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
              <div>
                <h3>Outbound Flight Number</h3>
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
              <div>
                <h3>Return Flight Number</h3>
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
              <div>
                <h3>Confirmation Number</h3>
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
              <button className="submit-arrow" type="submit">
              <i className="fa-sharp fa-solid fa-circle-chevron-right form-arrow"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditTripForm;