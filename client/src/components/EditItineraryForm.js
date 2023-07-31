import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";

function EditItineraryForm({ onUpdateItinerary }) {
  const { trip_id, itinerary_day_id, id: itinerary_time_id } = useParams();

  const { user } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const findTrip = user.trips.find((trip) => trip.id === parseInt(trip_id));
  const findItineraryDay = findTrip.itinerary_days.find((day) => day.id === parseInt(itinerary_day_id));
  const findItineraryTime = findItineraryDay.combined_itinerary_times.find((time) => time.id === parseInt(itinerary_time_id));


  console.log(findItineraryTime)

  const [formData, setFormData] = useState({
  trip_id: trip_id,
  date: findItineraryDay.date,
  restaurant_itinerary_times_attributes: [
    {
      time: findItineraryTime.restaurant ? findItineraryTime.time : "",
      restaurant_id: findItineraryTime.restaurant ? findItineraryTime.restaurant.id : "",
    },
  ],
  hotel_itinerary_times_attributes: [
    {
      time: findItineraryTime.hotel ? findItineraryTime.time : "",
      hotel_id: findItineraryTime.hotel ? findItineraryTime.hotel.id : "",
    },
  ],
  activity_itinerary_times_attributes: [
    {
      time: findItineraryTime.activity ? findItineraryTime.time : "",
      activity_id: findItineraryTime.activity ? findItineraryTime.activity.id : "",
    },
  ],
});


  if (destinations === null) {
    return <div>Loading...</div>;
  }

  const destination = destinations.find(
    (destination) => destination.id === parseInt(findTrip.destination_id)
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      if (findItineraryTime.activity && name === "time") {
        return {
          ...prevState,
          activity_itinerary_times_attributes: [
            {
              ...prevState.activity_itinerary_times_attributes[0],
              time: value,
            },
          ],
        };
      } else if (findItineraryTime.hotel && name === "time") {
        return {
          ...prevState,
          hotel_itinerary_times_attributes: [
            {
              ...prevState.hotel_itinerary_times_attributes[0],
              time: value,
            },
          ],
        };
      } else if (findItineraryTime.restaurant && name === "time") {
        return {
          ...prevState,
          restaurant_itinerary_times_attributes: [
            {
              ...prevState.restaurant_itinerary_times_attributes[0],
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

  console.log(formData)


  function updateItineraryDay() {
    const endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day_id}`;

    fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          return r.json().then((err) => Promise.reject(err.errors));
        }
      })
      .then((newItinerary) => {
        console.log("New Itinerary:", newItinerary);
        // onUpdateItinerary(newItinerary)
        navigate(`/users/${user.id}/trips/${trip_id}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrors([error]);
      });
  }




  const handleSubmit = (event) => {
    event.preventDefault();
    updateItineraryDay();
  };

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

            {findItineraryTime.restaurant && (
              <div className="label form-label">
                <div className="input-text">
                  <h3 className="input-title">Restaurant Itinerary Time</h3>
                  <input
                    type="datetime-local"
                    name="time"
                    value={formData.restaurant_itinerary_times_attributes[0].time}
                    onChange={handleChange}
                    className={`trip-form-input ${errors["restaurant_itinerary_times.time"] ? "input-error" : ""
                      }`}
                  />
                  {errors["restaurant_itinerary_times.time"] && (
                    <span className="error-message">
                      {errors["restaurant_itinerary_times.time"]}
                    </span>
                  )}
                </div>
              </div>
            )}
            {findItineraryTime.hotel && (
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
                      {errors["hotel_itinerary_times.time"]}
                    </span>
                  )}
                </div>
              </div>
            )}
            {findItineraryTime.activity && (
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

export default EditItineraryForm;