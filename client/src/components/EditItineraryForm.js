import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";
import LoadingScreen from "./LoadingScreen";


function EditItineraryForm() {
  const { trip_id, itinerary_day_id, id: itinerary_time_id } = useParams();
  const [formErrors, setFormErrors] = useState({ date: "", time: "" })
  const { user, setUser } = useContext(UserContext);
  const { destinations } = useContext(DestinationsContext);

  const navigate = useNavigate();

  const itineraryTripId = parseInt(trip_id);
  const itineraryTrips = user?.trips || [];
  const findTrip = itineraryTrips.find((trip) => trip.id === itineraryTripId);

  const itineraryDayId = parseInt(itinerary_day_id);
  const itineraryDays = findTrip?.itinerary_days || [];
  const findItineraryDay = itineraryDays.find((day) => day.id === itineraryDayId);

  const itineraryTimeId = parseInt(itinerary_time_id);
  const combinedItineraryTimes = findItineraryDay?.combined_itinerary_times || [];
  const findItineraryTime = combinedItineraryTimes.find((time) => time.id === itineraryTimeId);

  const timeDate = new Date(findItineraryTime?.time);

  const options = {
    hour: "2-digit",
    minute: "numeric",
    hour12: false,
  };

  const formattedTime = timeDate.toLocaleTimeString(undefined, options);

  const initialFormData = {
    id: findItineraryDay?.id,
    trip_id: trip_id,
    date: parseISO(findItineraryDay?.date),
    restaurant_itinerary_times_attributes: [
      {
        id: findItineraryTime?.restaurant ? findItineraryTime.id : "",
        time: findItineraryTime?.restaurant ? formattedTime : "",
        restaurant_id: findItineraryTime?.restaurant ? findItineraryTime.restaurant.id : "",
      },
    ],
    hotel_itinerary_times_attributes: [
      {
        id: findItineraryTime?.hotel ? findItineraryTime.id : "",
        time: findItineraryTime?.hotel ? formattedTime : "",
        hotel_id: findItineraryTime?.hotel ? findItineraryTime.hotel.id : "",
      },
    ],
    activity_itinerary_times_attributes: [
      {
        id: findItineraryTime?.activity ? findItineraryTime.id : "",
        time: findItineraryTime?.activity ? formattedTime : "",
        activity_id: findItineraryTime?.activity ? findItineraryTime.activity.id : "",
      },
    ],
  };

  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  if (!findTrip || !findItineraryDay || !findItineraryTime || !destinations || !user) {
    return <LoadingScreen/>
  }

  const destination = destinations.find(
    (destination) => destination.id === parseInt(findTrip.destination_id)
  );

  const onUpdateItinerary = (updatedItinerary) => {
    const { trip_id, date, combined_itinerary_times } = updatedItinerary;

    const updatedUser = {
      ...user,
      trips: user.trips.map((trip) => {
        if (trip.id === trip_id) {
          let updatedItineraryDays = trip.itinerary_days.map((itineraryDay) => {
            if (itineraryDay.date !== date) {
              const updatedCombinedItineraryTimes = itineraryDay.combined_itinerary_times.filter(
                (timeObj) => timeObj.id !== findItineraryTime.id
              );
              return { ...itineraryDay, combined_itinerary_times: updatedCombinedItineraryTimes };
            } else {
              const updatedItineraryTimes = combined_itinerary_times.map((timeObj) => {
                if (timeObj.id === findItineraryTime.id) {
                  const updatedTime = combined_itinerary_times.find((time) => time.id === timeObj.id);
                  if (updatedTime && timeObj.restaurant) {
                    return { id: timeObj.id, time: updatedTime.time, restaurant: updatedTime.restaurant };
                  } else if (updatedTime && timeObj.hotel) {
                    return { id: timeObj.id, time: updatedTime.time, hotel: updatedTime.hotel };
                  } else if (updatedTime && timeObj.activity) {
                    return { id: timeObj.id, time: updatedTime.time, activity: updatedTime.activity };
                  } else {
                    return timeObj;
                  }
                }
                return timeObj;
              });
              return { ...itineraryDay, combined_itinerary_times: updatedItineraryTimes };
            }
          });

          const dateExists = updatedItineraryDays.some((itineraryDay) => itineraryDay.date === date);
          if (!dateExists) {
            const newItineraryDay = {
              id: updatedItinerary.id,
              trip_id: updatedItinerary.trip_id,
              date,
              combined_itinerary_times: combined_itinerary_times.map((timeObj) => {
                if (timeObj.id === findItineraryTime.id) {
                  const updatedTime = combined_itinerary_times.find((time) => time.id === timeObj.id);
                  if (updatedTime && timeObj.restaurant) {
                    return { id: timeObj.id, time: updatedTime.time, restaurant: updatedTime.restaurant };
                  } else if (updatedTime && timeObj.hotel) {
                    return { id: timeObj.id, time: updatedTime.time, hotel: updatedTime.hotel };
                  } else if (updatedTime && timeObj.activity) {
                    return { id: timeObj.id, time: updatedTime.time, activity: updatedTime.activity };
                  } else {
                    return timeObj;
                  }
                }
                return timeObj;
              }),
            };
            updatedItineraryDays.push(newItineraryDay);
          }

          updatedItineraryDays = updatedItineraryDays.filter((itineraryDay) => itineraryDay.combined_itinerary_times.length > 0);

          return { ...trip, itinerary_days: updatedItineraryDays };
        } else {
          return trip;
        }
      }),
    };

    setUser(updatedUser);
  };

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
      } else if (name === "date") {
        return {
          ...prevState,
          date: new Date(value),
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  }

  function updateItineraryDay() {
    let errors = {};
    if (!formData.date) {
      errors.date = "Date is required";
    }
    if (findItineraryTime.hotel) {
      if (!formData.hotel_itinerary_times_attributes[0].time) {
        errors.time = "Time is required";
      }
    }
    if (findItineraryTime.restaurant) {
      if (!formData.restaurant_itinerary_times_attributes[0].time) {
        errors.time = "Time is required";
      }
    }
    if (findItineraryTime.activity) {
      if (!formData.activity_itinerary_times_attributes[0].time) {
        errors.time = "Time is required";
      }
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const endpoint = `/trips/${trip_id}/itinerary_days/${itinerary_day_id}`;
    const updatedDate = new Date(formData.date);

    const formattedDate = updatedDate.toISOString().split("T")[0];

    if (findItineraryTime.restaurant) {
      const restaurantTime = formData.restaurant_itinerary_times_attributes[0].time;
      const [restaurantHours, restaurantMinutes] = restaurantTime.split(":");
      updatedDate.setHours(restaurantHours, restaurantMinutes, 0);
    }

    if (findItineraryTime.hotel) {
      const hotelTime = formData.hotel_itinerary_times_attributes[0].time;
      const [hotelHours, hotelMinutes] = hotelTime.split(":");
      updatedDate.setHours(hotelHours, hotelMinutes, 0);
    }

    if (findItineraryTime.activity) {
      const activityTime = formData.activity_itinerary_times_attributes[0].time;
      const [activityHours, activityMinutes] = activityTime.split(":");
      updatedDate.setHours(activityHours, activityMinutes, 0);
    }

    const updatedData = {
      id: findItineraryDay?.id,
      trip_id: trip_id,
      date: formattedDate,
      restaurant_itinerary_times_attributes: [
        {
          id: findItineraryTime?.restaurant ? findItineraryTime.id : "",
          time: findItineraryTime?.restaurant ? updatedDate.toISOString() : "",
          restaurant_id: findItineraryTime?.restaurant ? findItineraryTime.restaurant.id : "",
        },
      ],
      hotel_itinerary_times_attributes: [
        {
          id: findItineraryTime?.hotel ? findItineraryTime.id : "",
          time: findItineraryTime?.hotel ? updatedDate.toISOString() : "",
          hotel_id: findItineraryTime?.hotel ? findItineraryTime.hotel.id : "",
        },
      ],
      activity_itinerary_times_attributes: [
        {
          id: findItineraryTime?.activity ? findItineraryTime.id : "",
          time: findItineraryTime?.activity ? updatedDate.toISOString() : "",
          activity_id: findItineraryTime?.activity ? findItineraryTime.activity.id : "",
        },
      ],
    };

    fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(updatedData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newItinerary) => onUpdateItinerary(newItinerary))
        navigate(`/trips/${trip_id}`);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateItineraryDay();
  };

  const deleteError = () => {
    setErrors("")
  }

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
                  placeholderText="MM/DD/YYYY"
                  onChange={(date) => handleChange({ target: { name: "date", value: date } })}
                  dateFormat="MMMM d, yyyy"
                  className={`trip-form-input ${formErrors.date || errors.date ? "input-error" : ""
                    }`}
                />
                {formErrors.date && <span className="error-message">{formErrors.date}</span>}
              </div>
            </div>

            {findItineraryTime.restaurant && (
              <div className="label form-label">
                <div className="input-text">
                  <h3 className="input-title">Restaurant Itinerary Time</h3>
                  <input
                    type="time"
                    name="time"
                    value={formData.restaurant_itinerary_times_attributes[0].time}
                    onChange={handleChange}
                    className={`trip-form-input ${formErrors.time || errors.time ? "input-error" : ""
                      }`}
                  />
                  {formErrors.time && <span className="error-message">{formErrors.time}</span>}
                  <ErrorMessage deleteError={deleteError} errors={errors} />
                  {errors["restaurant_itinerary_times.time"] && (
                    <span className="error-message error-message-time">
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
            )}
            {findItineraryTime.activity && (
              <div className="label form-label">
                <div className="input-text">
                  <h3 className="input-title">Activity Itinerary Time</h3>
                  <input
                    type="time"
                    name="time"
                    value={formData.activity_itinerary_times_attributes[0].time}
                    onChange={handleChange}
                    className={`trip-form-input ${formErrors.time || errors.time ? "input-error" : ""
                      }`}
                  />
                  {formErrors.time && <span className="error-message">{formErrors.time}</span>}
                  <ErrorMessage deleteError={deleteError} errors={errors} />
                  {errors["activity_itinerary_times.time"] && (
                    <span className="error-message error-message-time">
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
        <div className="back-link">
          <div className="back-link-btn back-link-btn-form">
            <Link className="link" to={`/trips/${trip_id}`}>
              <i className="fa-sharp fa-solid fa-circle-chevron-left nav-arrow"></i>
              <p className="text">
                Return to Trip
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItineraryForm;