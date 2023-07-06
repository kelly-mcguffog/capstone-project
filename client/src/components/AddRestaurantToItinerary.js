import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";

function AddRestaurantToItinerary() {
  const { trip_id, destination_id, id: restaurant_id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    trip_id: trip_id,
    date: "",
    restaurant_itinerary_times_attributes: [
      {
        time: "",
        restaurant_id: restaurant_id
      }
    ]
  });

  if (destinations === null) {
    return <div>Loading...</div>;
}

const destination = destinations.find((destination) => destination.id == destination_id);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      if (name === "time") {
        return {
          ...prevState,
          restaurant_itinerary_times_attributes: [
            {
              ...prevState.restaurant_itinerary_times_attributes[0],
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
  
  

  function onAddRestaurant(newRestaurant) {
    const updatedUser = {
      ...user,
      trips: user.trips.map((trip) => {
        if (trip.id === newRestaurant.trip_id) {
          const updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
            if (itineraryDay.id === newRestaurant.itinerary_day_id) {
              const updatedCombinedItineraryTimes = itineraryDay.combined_itinerary_times.map((itineraryTime) => {
                if (itineraryTime.restaurant && itineraryTime.restaurant.id === newRestaurant.restaurant.id) {
                  return {
                    ...itineraryTime,
                    restaurant: newRestaurant.restaurant
                  };
                }
                return itineraryTime;
              });
  
              return {
                ...itineraryDay,
                combined_itinerary_times: updatedCombinedItineraryTimes
              };
            }
            return itineraryDay;
          });
  
          return {
            ...trip,
            itinerary_days: updatedItineraryDays
          };
        }
        return trip;
      })
    };
  
    setUser(updatedUser);
  }
  
  

  function handleSubmit(e) {
    e.preventDefault();
  
    if (!user || !user.trips) {
      return;
    }
  
    const existingItineraryDay = user.trips
      .find((trip) => trip.id === trip_id)
      ?.itinerary_days?.find((itineraryDay) => itineraryDay.date === formData.date);
  
    if (existingItineraryDay) {
      const updatedItineraryDay = {
        ...existingItineraryDay,
        combined_itinerary_times: [
          ...existingItineraryDay.combined_itinerary_times,
          {
            time: formData.restaurant_itinerary_times_attributes[0].time,
            restaurant: {
              id: restaurant_id
            }
          }
        ]
      };
  
      const updatedUser = {
        ...user,
        trips: user.trips.map((trip) => {
          if (trip.id === trip_id) {
            return {
              ...trip,
              itinerary_days: trip.itinerary_days.map((itineraryDay) =>
                itineraryDay.date === formData.date ? updatedItineraryDay : itineraryDay
              )
            };
          }
          return trip;
        })
      };
  
      setUser(updatedUser);
      navigate(`/users/${user.id}/trips/${trip_id}`);
    } else {
      fetch(`/users/${user.id}/trips/${trip_id}/itinerary_days`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => onAddRestaurant(data));
            navigate(`/users/${user.id}/trips/${trip_id}`);
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
  }
  
  

  return (
<div className="header-img"  style={{ backgroundImage: `url(${destination.photo})` }}>
            <div className="header-text">
                <h1 className="title">Plan Your Trip</h1>
        <div className="results trip-form">
            <form id="trip-form-wrapper" onSubmit={handleSubmit}>
      {/* {errors.length > 0 && (
            <ul>
                {errors.map((error, index) => (
                <li key={index}>{error}</li>
                ))}
            </ul>
            )} */}
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
              <h3 className="input-title">Restaurant Itinerary Time</h3>
          <input
            type="datetime-local"
            name="time"
            value={formData.restaurant_itinerary_times_attributes[0]?.time || ""}
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

export default AddRestaurantToItinerary;
