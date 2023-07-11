import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, NavLink, Link, useNavigate } from "react-router-dom";
import HotelsContainer from "./HotelsContainer";

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
    return <div>Loading...</div>;
  }


  const destination = destinations.find(
    (destination) => destination.id == id
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const { photo, city } = destination;


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
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
    fetch(`/users/${user.id}/trips`, {
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
        // console.log(trip.id)
        navigate(`/users/${user.id}/trips`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="header-img" style={{ backgroundImage: `url(${photo})` }}>
      <div className="header-text">
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
                  className="trip-form-input"
                  onChange={handleChange}
                  value={formData.origin_airport}
                />
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
                  className="trip-form-input"
                  onChange={handleChange}
                  value={formData.destination_airport}
                />
              </div>
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">Outbound Flight</h3>
                </div>
                <input
                  type="datetime-local"
                  name="outbound_flight"
                  value={formData.outbound_flight}
                  onChange={handleChange}
                  className="trip-form-input"
                />
              </div>
              <div className="label">
                <div className="input-text">
                  <h3 className="input-title">Return Flight</h3>
                </div>
                <input
                  type="datetime-local"
                  name="return_flight"
                  value={formData.return_flight}
                  onChange={handleChange}
                  className="trip-form-input"
                />
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
                  className="trip-form-input"
                  onChange={handleChange}
                  value={formData.outbound_flight_number}
                />
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
                  className="trip-form-input"
                  onChange={handleChange}
                  value={formData.return_flight_number}
                />
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
                  className="trip-form-input"
                  onChange={handleChange}
                  value={formData.confirmation_number}
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
  )
}

export default NewTrip;