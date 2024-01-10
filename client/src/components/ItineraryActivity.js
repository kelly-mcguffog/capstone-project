import React from "react";
import { Link } from "react-router-dom";

function ItineraryActivity({ trip_id, activity }) {

    const { id, address, description, name, destination_id } = activity

    return (
        <>
            <div className="itinerary-details">
                <h3>{name}</h3>
                <h5>{address}</h5>
                <p>{description}</p>
            </div>
            <div>
                <Link className="btn secondary-btn" to={`/destinations/${destination_id}/trips/${trip_id}/activities/${id}/details`}>
                    View Details
                </Link>
            </div>
        </>
    )
}

export default ItineraryActivity;