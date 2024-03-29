import React, { useState, useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { UserContext } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingScreen from "./LoadingScreen";
import ReturnToDetails from "./ReturnToDetails";
import ReturnToTrip from "./ReturnToTrip";

function AddToItineraryForm({ formType, onAddItinerary }) {
    const { trip_id, destination_id, id } = useParams();
    const { user } = useContext(UserContext);
    const { destinations } = useContext(DestinationsContext);
    const [formErrors, setFormErrors] = useState({ date: "", time: "" });
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        trip_id: trip_id || "",
        date: "",
        [`${formType}_itinerary_times_attributes`]: [
            {
                time: "",
                [`${formType}_id`]: id,
            },
        ],
    });

    if (destinations === null) {
        return <LoadingScreen />;
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
                    [`${formType}_itinerary_times_attributes`]: [
                        {
                            ...prevState[`${formType}_itinerary_times_attributes`][0],
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
        if (!formData[`${formType}_itinerary_times_attributes`][0].time) {
            errors.time = "Time is required";
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const updatedDate = new Date(formData.date);
        const formTime = formData[`${formType}_itinerary_times_attributes`][0].time;
        const [formHours, formMinutes] = formTime.split(":");
        updatedDate.setHours(formHours, formMinutes, 0);

        const updatedData = {
            trip_id: trip_id || "",
            date: formData.date,
            [`${formType}_itinerary_times_attributes`]: [
                {
                    time: updatedDate.toISOString(),
                    [`${formType}_id`]: id,
                },
            ],
        };

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
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    const deleteError = () => {
        setErrors("");
    }

    return (
        <div className="page-header">
            <div className="cropped-img-container">
                <img className="cropped-img img-header" src={destination.photo} alt={destination.city}></img>
            </div>
            <div className={trip_id ? "header valid-trip-itinerary-form-header" : "header itinerary-form-header"}>
                <div className="header-text">
                    <h1 className="header-copy">Plan Your Trip</h1>
                </div>
                <div className="form-results results">
                    <form className={trip_id ? "trip-form valid-trip-itinerary-form" : "trip-form itinerary-trip-form"} onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <h3>Itinerary Day Date</h3>
                                <DatePicker
                                    selected={formData.date}
                                    placeholderText="MM/DD/YYY"
                                    onChange={(date) => handleChange({ target: { name: "date", value: date } })}
                                    dateFormat="MMMM d, yyyy"
                                    className={`trip-form-input ${formErrors.date || errors.date ? "input-error" : ""
                                        }`}
                                />
                                {formErrors.date && <span className="error-message">{formErrors.date}</span>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>{`${formType.charAt(0).toUpperCase() + formType.slice(1)} Itinerary Time`}</h3>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData[`${formType}_itinerary_times_attributes`][0].time}
                                    onChange={handleChange}
                                    className={`trip-form-input ${formErrors.time || errors.time ? "input-error" : ""
                                        }`}
                                />
                                {formErrors.time && <span className="error-message">{formErrors.time}</span>}
                            </div>
                        </div>
                        {trip_id === undefined && (
                            <div>
                                <div>
                                    <h3>Select a Trip</h3>
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
                            <button className="submit-arrow" type="submit">
                                <i className="fa-sharp fa-solid fa-circle-chevron-right form-arrow"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="back-link">
                    <ReturnToDetails formType={formType} id={id} />
                    <ReturnToTrip />
                </div>
            </div>
            <ErrorMessage deleteError={deleteError} errors={errors} />
        </div>
    );
}

export default AddToItineraryForm;