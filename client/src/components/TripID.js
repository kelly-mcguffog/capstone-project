import React, { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
import { NavLink, Link, useNavigate } from "react-router-dom";


function TripID({ trip, onDeleteTrip, isShowing }) {

    const [errors, setErrors] = useState("")
    const { destinations } = useContext(DestinationsContext);
    const navigate = useNavigate();

    const { id, outbound_flight, destination_id } = trip;

    const destination = destinations
        ? destinations.find((destination) => destination.id === parseInt(destination_id))
        : null;
    const city = destination ? destination.city : null;
    const country = destination ? destination.country : null;

    const outboundFlight = new Date(outbound_flight);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const formattedDate = outboundFlight.toLocaleDateString(undefined, options);

    function handleDeleteTrip() {
        fetch(`/trips/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    onDeleteTrip(id)
                    navigate('/profile');
                } else {
                    response.json().then((err) => setErrors(err.errors));
                }
            });
    }

    return (
        <div className="trip-listings">
            <NavLink className="trip-links" to={`/trips/${id}`}>
                <div className="trip">
                    <h3 className="trip-destination-name">
                        {city}, {country}
                    </h3>
                    <h5 className="user-input">{formattedDate}</h5>
                    {errors && (
                        <div className="error-message">
                            <span>{errors}</span>
                        </div>
                    )}
                </div>
            </NavLink>
            {isShowing ?
                <div className="trip-icon">
                    <Link to={`/trips/${trip.id}/edit`}><i className="fa-solid fa-pen-to-square"></i></Link>
                    <i onClick={handleDeleteTrip} className="fa-solid fa-trash"></i>
                </div>
                : null
            }
        </div>
    );
}

export default TripID;