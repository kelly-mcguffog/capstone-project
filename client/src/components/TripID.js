import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DestinationsContext } from "../context/DestinationsContext";
import { NavLink, Link } from "react-router-dom";



function TripID({ trip, onDeleteTrip, isShowing }) {

    const { destinations } = useContext(DestinationsContext);
    const { user } = useContext(UserContext);

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
                    console.log("Trip deleted successfully");
                    onDeleteTrip(id)
                } else {
                    console.log("Failed to delete trip");
                }
            })
            .catch((error) => {
                console.log("Error occurred while deleting trip", error);
            });
    }

    return (
        <div className="trip-listings">
            <NavLink className="trip-links" to={`/users/${user.id}/trips/${id}`}>
                <div className="trip">
                    <h3 className="trip-destination-name">
                        {city}, {country}
                    </h3>
                    <h5 className="user-input">{formattedDate}</h5>
                </div>
            </NavLink>
            {isShowing ?
                <div className="trip-icon">
                    <Link to={`/users/${user.id}/trips/${trip.id}/edit`}><i className="fa-solid fa-pen-to-square"></i></Link>
                    <i onClick={handleDeleteTrip} className="fa-solid fa-trash"></i>
                </div>
                : null
            }
        </div>
    );
}

export default TripID;